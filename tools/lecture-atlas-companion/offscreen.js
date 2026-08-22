let recorder;
let media;
let chunks = [];
let audioContext;
let outputSource;
let captureMetadata;
let captureMode;
let captureStartedAtMs;
let stopReason;

function chooseMime(mode) {
  const candidates = mode === "video"
    ? ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm"]
    : ["audio/webm;codecs=opus", "audio/webm"];
  return candidates.find((mime) => MediaRecorder.isTypeSupported(mime)) || "";
}

function safeName(value) {
  return (value || "lecture").replace(/[\\/:*?"<>|]+/g, "-").replace(/\s+/g, " ").trim().slice(0, 120);
}

async function startCapture(message) {
  if (recorder?.state === "recording") throw new Error("Capture is already active.");
  captureMode = message.mode;
  captureMetadata = message.metadata;
  captureStartedAtMs = Date.now();
  stopReason = null;
  chunks = [];
  media = await navigator.mediaDevices.getUserMedia({
    audio: { mandatory: { chromeMediaSource: "tab", chromeMediaSourceId: message.streamId } },
    video: message.mode === "video" ? { mandatory: { chromeMediaSource: "tab", chromeMediaSourceId: message.streamId } } : false
  });

  // tabCapture suppresses the tab's normal audio. Route the captured audio back
  // to the default output so the learner can continue listening.
  if (media.getAudioTracks().length) {
    audioContext = new AudioContext();
    outputSource = audioContext.createMediaStreamSource(media);
    outputSource.connect(audioContext.destination);
  }

  const mimeType = chooseMime(message.mode);
  recorder = new MediaRecorder(media, mimeType ? { mimeType } : undefined);
  recorder.addEventListener("dataavailable", (event) => { if (event.data.size) chunks.push(event.data); });
  recorder.addEventListener("stop", finalizeCapture, { once: true });
  media.getTracks().forEach((track) => track.addEventListener("ended", () => {
    stopReason = "tab-capture-track-ended";
    if (recorder?.state === "recording") recorder.stop();
  }, { once: true }));
  recorder.start(10_000);
}

async function finalizeCapture() {
  try {
    const mimeType = recorder.mimeType || chooseMime(captureMode);
    const blob = new Blob(chunks, { type: mimeType });
    const url = URL.createObjectURL(blob);
    const date = new Date().toISOString().slice(0, 10);
    const extension = captureMode === "video" ? "webm" : "webm";
    const title = safeName(captureMetadata?.title || captureMetadata?.tabTitle);
    await chrome.runtime.sendMessage({
      type: "SAVE_CAPTURE",
      url,
      filename: `${date}-${title}-${captureMode}.${extension}`,
      mode: captureMode,
      metadata: captureMetadata,
      capturedWallClockSeconds: captureStartedAtMs ? (Date.now() - captureStartedAtMs) / 1000 : null,
      stopReason
    });
    setTimeout(() => URL.revokeObjectURL(url), 120_000);
  } catch (error) {
    await chrome.runtime.sendMessage({ type: "CAPTURE_ERROR", error: error.message });
  } finally {
    media?.getTracks().forEach((track) => track.stop());
    outputSource?.disconnect();
    await audioContext?.close();
    chunks = [];
    recorder = undefined;
    media = undefined;
    audioContext = undefined;
    outputSource = undefined;
    captureStartedAtMs = undefined;
  }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.target !== "offscreen") return false;
  if (message.type === "START_CAPTURE") {
    startCapture(message).then(() => sendResponse({ ok: true })).catch(async (error) => {
      await chrome.runtime.sendMessage({ type: "CAPTURE_ERROR", error: error.message });
      sendResponse({ ok: false, error: error.message });
    });
    return true;
  }
  if (message.type === "STOP_CAPTURE") {
    stopReason = message.reason || "manual-stop";
    if (recorder?.state === "recording") recorder.stop();
    sendResponse({ ok: true });
    return false;
  }
  return false;
});
