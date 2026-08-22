#!/usr/bin/env python3
"""Validate and prepare a permitted lecture capture for note production."""

from __future__ import annotations

import argparse
import json
import re
import shutil
import subprocess
from pathlib import Path

from PIL import Image, ImageDraw, ImageOps


ROOT = Path(__file__).resolve().parents[1]
PRIVATE = ROOT / ".course-data"


def run(command: list[str], *, capture: bool = False) -> subprocess.CompletedProcess[str]:
    return subprocess.run(command, check=True, text=True, capture_output=capture)


def probe(path: Path) -> dict:
    result = run([
        "ffprobe", "-v", "error", "-show_format", "-show_streams",
        "-of", "json", str(path),
    ], capture=True)
    return json.loads(result.stdout)


def parse_scene_metadata(path: Path) -> list[float]:
    if not path.exists():
        return []
    times: list[float] = []
    for line in path.read_text(encoding="utf-8").splitlines():
        match = re.search(r"pts_time:([0-9.]+)", line)
        if match:
            times.append(float(match.group(1)))
    return times


def audio_evidence(path: Path, duration: float) -> dict:
    volume = subprocess.run(
        ["ffmpeg", "-hide_banner", "-nostats", "-i", str(path), "-vn",
         "-af", "volumedetect", "-f", "null", "-"],
        check=True, text=True, capture_output=True,
    ).stderr
    silence = subprocess.run(
        ["ffmpeg", "-hide_banner", "-nostats", "-i", str(path), "-vn",
         "-af", "silencedetect=noise=-45dB:d=5", "-f", "null", "-"],
        check=True, text=True, capture_output=True,
    ).stderr
    mean_match = re.search(r"mean_volume:\s*(-?[0-9.]+) dB", volume)
    max_match = re.search(r"max_volume:\s*(-?[0-9.]+) dB", volume)
    silent_durations = [float(value) for value in re.findall(r"silence_duration:\s*([0-9.]+)", silence)]
    silent_seconds = min(duration, sum(silent_durations))
    return {
        "meanVolumeDb": float(mean_match.group(1)) if mean_match else None,
        "maxVolumeDb": float(max_match.group(1)) if max_match else None,
        "silentSeconds": silent_seconds,
        "silenceRatio": silent_seconds / duration if duration else 0,
    }


def difference_hash(path: Path) -> int:
    with Image.open(path) as image:
        hash_size = 32
        gray = image.convert("L").resize((hash_size + 1, hash_size))
        pixels = list(gray.getdata())
    value = 0
    for row in range(hash_size):
        for column in range(hash_size):
            value = (value << 1) | (
                pixels[row * (hash_size + 1) + column]
                > pixels[row * (hash_size + 1) + column + 1]
            )
    return value


def format_time(seconds: float) -> str:
    rounded = int(seconds)
    return f"{rounded // 3600:02d}:{(rounded % 3600) // 60:02d}:{rounded % 60:02d}"


def atempo_filter(playback_rate: float) -> str | None:
    """Return an ffmpeg atempo chain that restores captured audio to source time."""
    if playback_rate <= 0:
        raise ValueError("playbackRate must be positive")
    target = 1 / playback_rate
    if abs(target - 1) < 1e-6:
        return None

    factors: list[float] = []
    while target < 0.5:
        factors.append(0.5)
        target /= 0.5
    while target > 2:
        factors.append(2.0)
        target /= 2.0
    factors.append(target)
    return ",".join(f"atempo={factor:.8g}" for factor in factors)


def visual_evidence(paths: list[Path]) -> dict:
    hashes = [difference_hash(path) for path in paths]
    distances = [(left ^ right).bit_count() for left, right in zip(hashes, hashes[1:])]
    return {
        "sampledFrames": len(paths),
        "uniquePerceptualHashes": len(set(hashes)),
        "meaningfulTransitions": sum(distance >= 15 for distance in distances),
        "maximumConsecutiveHashDistance": max(distances, default=0),
        "meanConsecutiveHashDistance": sum(distances) / len(distances) if distances else 0,
    }


def build_slide_candidates(frame_map: list[dict], output: Path) -> list[dict]:
    candidates = sorted(frame_map, key=lambda item: (item["sourceSeconds"], item["kind"]))
    retained: list[dict] = []
    previous_hash: int | None = None
    for item in candidates:
        current_hash = difference_hash(ROOT / item["file"])
        if previous_hash is None or (current_hash ^ previous_hash).bit_count() >= 15:
            retained.append(item)
            previous_hash = current_hash

    width, height, label_height, columns = 320, 180, 28, 4
    rows = max(1, (len(retained) + columns - 1) // columns)
    sheet = Image.new("RGB", (columns * width, rows * (height + label_height)), "white")
    draw = ImageDraw.Draw(sheet)
    for index, item in enumerate(retained):
        with Image.open(ROOT / item["file"]) as image:
            thumb = ImageOps.fit(image.convert("RGB"), (width, height))
        x = (index % columns) * width
        y = (index // columns) * (height + label_height)
        sheet.paste(thumb, (x, y))
        draw.text((x + 8, y + height + 7), f"Source {format_time(item['sourceSeconds'])}", fill="black")
    sheet.save(output, quality=88)
    return retained


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("input", type=Path)
    parser.add_argument("--course", required=True, choices=["eai-6401", "eai-6402", "eai-6403"])
    parser.add_argument("--date", required=True, help="Lecture date in YYYY-MM-DD form")
    parser.add_argument("--segment", default="01", help="Capture segment label, for example 01 or 02")
    parser.add_argument("--sidecar", type=Path)
    parser.add_argument("--frame-interval", type=int, default=30)
    parser.add_argument("--scene-threshold", type=float, default=0.16)
    parser.add_argument("--transcribe", action="store_true")
    parser.add_argument("--model", default="mlx-community/whisper-large-v3-turbo")
    parser.add_argument(
        "--classification",
        default="auto",
        choices=["auto", "canonical", "unique-fragment", "duplicate", "idle/error"],
        help="Apply a completed human-review disposition, or use automated evidence only.",
    )
    args = parser.parse_args()

    source = args.input.expanduser().resolve()
    if not source.is_file():
        raise SystemExit(f"Input does not exist: {source}")
    if source.stat().st_size < 1_000_000:
        raise SystemExit("Capture is under 1 MB and is likely empty or broken.")

    timing = {
        "captureStartSourceSeconds": 0,
        "playbackRate": 1,
        "sourceTimestampFormula": "sourceSeconds = captureStartSourceSeconds + (captureSeconds * playbackRate)",
    }
    if args.sidecar:
        timing.update(json.loads(args.sidecar.expanduser().read_text(encoding="utf-8")))

    media_probe = probe(source)
    duration = float(
        media_probe.get("format", {}).get("duration")
        or timing.get("capturedWallClockSeconds")
        or 0
    )
    stream_types = {stream.get("codec_type") for stream in media_probe.get("streams", [])}
    if duration < 60 or "audio" not in stream_types:
        raise SystemExit(f"Capture failed validation: duration={duration:.1f}s streams={sorted(stream_types)}")

    recording_dir = PRIVATE / "recordings" / args.course
    frame_dir = PRIVATE / "frames" / args.course / args.date / f"segment-{args.segment}"
    transcript_dir = PRIVATE / "transcripts" / args.course
    recording_dir.mkdir(parents=True, exist_ok=True)
    frame_dir.mkdir(parents=True, exist_ok=True)
    transcript_dir.mkdir(parents=True, exist_ok=True)

    media_copy = recording_dir / f"{args.date}-segment-{args.segment}-capture{source.suffix.lower()}"
    if source != media_copy:
        shutil.copy2(source, media_copy)
    if args.sidecar:
        shutil.copy2(args.sidecar.expanduser(), recording_dir / f"{args.date}-segment-{args.segment}-capture.json")

    start = float(timing.get("captureStartSourceSeconds") or 0)
    rate = float(timing.get("playbackRate") or 1)
    marked_end = timing.get("captureEndSourceSeconds")
    lead_in_value = timing.get("captureLeadInSeconds")
    if lead_in_value is not None:
        lead_in = min(duration, max(0.0, float(lead_in_value)))
    elif timing.get("stopReason") == "marked-teaching-end" and marked_end is not None:
        expected_playback_seconds = max(0.0, (float(marked_end) - start) / rate)
        lead_in = min(duration, max(0.0, duration - expected_playback_seconds))
    else:
        lead_in = 0.0
    effective_capture_duration = max(0.0, duration - lead_in)
    observed_end = start + effective_capture_duration * rate
    end = min(float(marked_end), observed_end) if marked_end is not None else observed_end
    audio_path = recording_dir / f"{args.date}-segment-{args.segment}-audio.wav"
    audio_command = ["ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-i", str(media_copy),
                     "-vn"]
    tempo = atempo_filter(rate)
    audio_filters = []
    if lead_in:
        audio_filters.extend([f"atrim=start={lead_in:.6f}", "asetpts=PTS-STARTPTS"])
    if tempo:
        audio_filters.append(tempo)
    if audio_filters:
        audio_command.extend(["-af", ",".join(audio_filters)])
    audio_command.extend(["-ac", "1", "-ar", "16000", str(audio_path)])
    run(audio_command)

    regular_dir = frame_dir / "regular"
    scene_dir = frame_dir / "scenes"
    regular_dir.mkdir(exist_ok=True)
    scene_dir.mkdir(exist_ok=True)
    for old_frame in [*regular_dir.glob("frame-*.jpg"), *scene_dir.glob("scene-*.jpg")]:
        old_frame.unlink()
    video_lead_filter = f"trim=start={lead_in:.6f},setpts=PTS-STARTPTS," if lead_in else ""
    run(["ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-i", str(media_copy),
         "-vf", f"{video_lead_filter}fps=1/{args.frame_interval},scale=1600:-2:force_original_aspect_ratio=decrease,format=yuvj420p",
         "-threads", "1", "-q:v", "3", str(regular_dir / "frame-%05d.jpg")])

    scene_metadata = frame_dir / "scene-metadata.txt"
    scene_metadata.unlink(missing_ok=True)
    audio_metrics = audio_evidence(media_copy, duration)
    visual_metrics = visual_evidence(sorted(regular_dir.glob("frame-*.jpg")))
    digitally_silent = (
        audio_metrics["silenceRatio"] >= 0.98
        and (audio_metrics["maxVolumeDb"] is None or audio_metrics["maxVolumeDb"] <= -60)
    )
    visually_static = visual_metrics["meaningfulTransitions"] == 0
    classification = "idle/error" if digitally_silent and visually_static else (
        "suspect" if digitally_silent or visually_static else "pending"
    )
    if args.classification != "auto":
        classification = args.classification

    if classification != "idle/error":
        scene_filter = (
            f"{video_lead_filter}fps=2,scale=1600:-2:force_original_aspect_ratio=decrease,"
            f"select='gt(scene,{args.scene_threshold})',format=yuvj420p,"
            f"metadata=print:file={scene_metadata}"
        )
        run(["ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-i", str(media_copy),
             "-vf", scene_filter, "-fps_mode", "vfr", "-threads", "1", "-q:v", "3",
             str(scene_dir / "scene-%05d.jpg")])
    else:
        scene_metadata.write_text("Skipped: digital silence plus no meaningful visual transitions.\n", encoding="utf-8")

    frame_map: list[dict] = []
    for index, frame in enumerate(sorted(regular_dir.glob("frame-*.jpg"))):
        local_seconds = index * args.frame_interval
        capture_seconds = lead_in + local_seconds
        frame_map.append({
            "file": str(frame.relative_to(ROOT)),
            "kind": "regular",
            "captureSeconds": capture_seconds,
            "sourceSeconds": start + local_seconds * rate,
        })
    for frame, local_seconds in zip(sorted(scene_dir.glob("scene-*.jpg")), parse_scene_metadata(scene_metadata)):
        capture_seconds = lead_in + local_seconds
        frame_map.append({
            "file": str(frame.relative_to(ROOT)),
            "kind": "scene-change",
            "captureSeconds": capture_seconds,
            "sourceSeconds": start + local_seconds * rate,
        })
    frame_map.sort(key=lambda item: (item["sourceSeconds"], item["kind"]))
    contact_sheet = frame_dir / "slide-candidates-contact-sheet.jpg"
    slide_candidates = build_slide_candidates(frame_map, contact_sheet)

    manifest = {
        "schemaVersion": 1,
        "course": args.course,
        "lectureDate": args.date,
        "media": str(media_copy.relative_to(ROOT)),
        "audio": str(audio_path.relative_to(ROOT)),
        "audioTimeline": "source-time-restored" if tempo or lead_in else "capture-time",
        "audioTempoFilter": tempo,
        "audioFilters": audio_filters,
        "captureDurationSeconds": duration,
        "captureLeadInSeconds": lead_in,
        "processedCaptureDurationSeconds": effective_capture_duration,
        "sourceDurationSeconds": timing.get("sourceDurationSeconds"),
        "playbackRate": rate,
        "captureStartSourceSeconds": start,
        "captureEndSourceSeconds": end,
        "transcriptSourceTimeOffsetSeconds": start,
        "captureStopReason": timing.get("stopReason"),
        "sourceTimestampFormula": "sourceSeconds = captureStartSourceSeconds + ((captureSeconds - captureLeadInSeconds) * playbackRate)",
        "streams": sorted(stream_types),
        "frameCount": len(frame_map),
        "frames": frame_map,
        "slideCandidateCount": len(slide_candidates),
        "sceneSampleFps": 2,
        "slideCandidates": slide_candidates,
        "slideCandidateContactSheet": str(contact_sheet.relative_to(ROOT)),
        "audioEvidence": audio_metrics,
        "visualEvidence": visual_metrics,
        "reviewClassification": classification,
        "classificationReason": (
            "Near-total digital silence and no meaningful visual transitions across distributed frames."
            if classification == "idle/error" and args.classification == "auto"
            else "Human-reviewed disposition supplied to the processor."
            if args.classification != "auto" else None
        ),
        "actualTeachingIntervals": (
            [] if classification == "idle/error"
            else [{"startSeconds": start, "endSeconds": end}]
        ),
        "transcription": {
            "status": "pending" if args.transcribe and classification != "idle/error" else "not-requested"
        },
    }
    manifest_path = frame_dir / "processing-manifest.json"
    manifest_path.write_text(json.dumps(manifest, indent=2), encoding="utf-8")

    if args.transcribe and classification != "idle/error":
        whisper = PRIVATE / "venv" / "bin" / "mlx_whisper"
        transcript_stem = f"{args.date}-segment-{args.segment}"
        run([str(whisper), str(audio_path), "--model", args.model,
             "--output-dir", str(transcript_dir), "--output-name", transcript_stem,
             "--output-format", "all", "--word-timestamps", "True",
             "--condition-on-previous-text", "False",
             "--hallucination-silence-threshold", "2.0",
             "--verbose", "False"])
        manifest["transcription"] = {
            "status": "complete",
            "model": args.model,
            "conditionOnPreviousText": False,
            "hallucinationSilenceThresholdSeconds": 2.0,
            "files": [
                str(path.relative_to(ROOT))
                for path in sorted(transcript_dir.glob(f"{transcript_stem}.*"))
            ],
        }
        manifest_path.write_text(json.dumps(manifest, indent=2), encoding="utf-8")

    print(json.dumps({
        "validated": True,
        "durationSeconds": duration,
        "streams": sorted(stream_types),
        "frames": len(frame_map),
        "manifest": str(manifest_path),
        "classification": classification,
        "transcribed": args.transcribe and classification != "idle/error",
    }, indent=2))


if __name__ == "__main__":
    main()
