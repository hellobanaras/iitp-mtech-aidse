#!/usr/bin/env python3
"""Build a private timestamped transcript/slide packet for lecture-note review."""

from __future__ import annotations

import argparse
import json
from pathlib import Path


def clock(seconds: float) -> str:
    total = max(0, round(seconds))
    return f"{total // 3600:02d}:{(total % 3600) // 60:02d}:{total % 60:02d}"


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("manifest", type=Path)
    parser.add_argument("transcript", type=Path)
    parser.add_argument("--output", type=Path)
    parser.add_argument("--window-minutes", type=int, default=5)
    args = parser.parse_args()

    manifest = json.loads(args.manifest.read_text(encoding="utf-8"))
    transcript = json.loads(args.transcript.read_text(encoding="utf-8"))
    offset = float(manifest.get("transcriptSourceTimeOffsetSeconds") or 0)
    capture_start = float(manifest.get("captureStartSourceSeconds") or 0)
    playback_rate = float(manifest.get("playbackRate") or 1)
    capture_end = manifest.get("captureEndSourceSeconds")
    if capture_end is None:
        capture_end = capture_start + float(manifest.get("captureDurationSeconds") or 0) * playback_rate
    window = args.window_minutes * 60
    segments = transcript.get("segments", [])
    end = max((float(segment.get("end", 0)) + offset for segment in segments), default=offset)

    output = args.output or args.manifest.with_name("review-packet.md")
    lines = [
        f"# Private review packet — {manifest['course']} — {manifest['lectureDate']}",
        "",
        "Generated from locally processed material. Do not publish this transcript or private slide images.",
        "",
        "## Capture evidence",
        "",
        f"- Source interval: `{clock(capture_start)}–{clock(float(capture_end))}`",
        f"- Capture stop reason: `{manifest.get('captureStopReason') or 'not recorded'}`",
        f"- Playback rate: `{manifest['playbackRate']}×`",
        f"- Review classification: `{manifest['reviewClassification']}`",
        "",
        "## Slide candidates",
        "",
    ]
    slides = manifest.get("slideCandidates") or [
        frame for frame in manifest.get("frames", []) if frame.get("kind") == "scene-change"
    ] or manifest.get("frames", [])
    for slide in slides:
        lines.append(f"- `{clock(slide['sourceSeconds'])}` — `{slide['file']}`")

    lines.extend(["", "## Transcript by source-time window", ""])
    cursor = offset
    while cursor < end:
        boundary = cursor + window
        selected = [
            segment for segment in segments
            if float(segment.get("end", 0)) + offset > cursor
            and float(segment.get("start", 0)) + offset < boundary
        ]
        text = " ".join(str(segment.get("text", "")).strip() for segment in selected).strip()
        if text:
            lines.extend([
                f"### {clock(cursor)}–{clock(min(boundary, end))}",
                "",
                text,
                "",
            ])
        cursor = boundary

    output.write_text("\n".join(lines).rstrip() + "\n", encoding="utf-8")
    print(output)


if __name__ == "__main__":
    main()
