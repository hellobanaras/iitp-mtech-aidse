const OFFSCREEN_URL = "offscreen.html";

async function ensureOffscreen() {
  const contexts = await chrome.runtime.getContexts({ contextTypes: ["OFFSCREEN_DOCUMENT"], documentUrls: [chrome.runtime.getURL(OFFSCREEN_URL)] });
  if (contexts.length) return;
  await chrome.offscreen.createDocument({
    url: OFFSCREEN_URL,
    reasons: ["USER_MEDIA", "BLOBS"],
    justification: "Record a user-selected lecture tab to a local file."
  });
}

async function captureState() {
  const { captureState = { status: "idle", message: "Idle" } } = await chrome.storage.session.get("captureState");
  return captureState;
}

async function setCaptureState(state) {
  await chrome.storage.session.set({ captureState: state });
  await chrome.action.setBadgeText({ text: state.status === "recording" ? "REC" : "" });
  if (state.status === "recording") await chrome.action.setBadgeBackgroundColor({ color: "#ca3c48" });
}

async function stopPlaybackGuard(tabId) {
  if (!Number.isInteger(tabId)) return;
  try {
    await chrome.scripting.executeScript({
      target: { tabId },
      func: () => window.__lectureAtlasCaptureGuard?.stop?.()
    });
  } catch {
    // The source tab may already be closed; capture finalization must continue.
  }
}

function reviewKey(metadata) {
  return metadata.url || metadata.tabTitle || "unknown-lecture";
}

function safeName(value) {
  return (value || "lecture").replace(/[\\/:*?"<>|]+/g, "-").replace(/\s+/g, " ").trim().slice(0, 120);
}

async function saveMark(message) {
  const { reviews = {} } = await chrome.storage.local.get("reviews");
  const key = reviewKey(message.metadata);
  const review = reviews[key] || { title: message.metadata.title || message.metadata.tabTitle, url: message.metadata.url, marks: {}, createdAt: new Date().toISOString() };
  review.marks[message.kind] = { seconds: message.metadata.currentTime, markedAt: message.metadata.markedAt };
  review.duration = message.metadata.duration;
  review.updatedAt = new Date().toISOString();
  reviews[key] = review;
  await chrome.storage.local.set({ reviews });
}

async function exportManifest(metadata) {
  const { reviews = {} } = await chrome.storage.local.get("reviews");
  const review = reviews[reviewKey(metadata)] || { title: metadata.title || metadata.tabTitle, url: metadata.url, marks: {} };
  const manifest = {
    schemaVersion: 1,
    exportedAt: new Date().toISOString(),
    title: review.title,
    sourceUrl: review.url,
    durationSeconds: metadata.duration ?? review.duration ?? null,
    playbackRate: metadata.playbackRate ?? null,
    actualTeachingStartSeconds: review.marks?.start?.seconds ?? null,
    actualTeachingEndSeconds: review.marks?.end?.seconds ?? null,
    reviewClassification: "pending",
    notes: "Classify as canonical, unique-fragment, duplicate, or idle/error after sampling."
  };
  const url = `data:application/json;charset=utf-8,${encodeURIComponent(JSON.stringify(manifest, null, 2))}`;
  await chrome.downloads.download({ url, filename: `lecture-atlas/${safeName(review.title)}-review.json`, saveAs: true });
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Messages explicitly addressed to the offscreen document must not be
  // handled a second time by the service worker.
  if (message.target === "offscreen") return false;
  (async () => {
    switch (message.type) {
      case "ENSURE_OFFSCREEN":
        await ensureOffscreen();
        sendResponse({ ok: true });
        break;
      case "START_CAPTURE": {
        const current = await captureState();
        if (current.status === "recording") throw new Error("Another lecture tab is already being captured.");
        await ensureOffscreen();
        const state = {
          status: "recording",
          startedAt: Date.now(),
          mode: message.mode,
          title: message.metadata.title || message.metadata.tabTitle,
          tabId: message.metadata.sourceTabId
        };
        await chrome.runtime.sendMessage({ ...message, target: "offscreen" });
        await setCaptureState(state);
        sendResponse(state);
        break;
      }
      case "STOP_CAPTURE":
        await stopPlaybackGuard((await captureState()).tabId);
        await chrome.runtime.sendMessage({ type: "STOP_CAPTURE", target: "offscreen", reason: message.reason || "manual-stop" });
        sendResponse({ ok: true });
        break;
      case "SOURCE_VIDEO_ENDED":
        await stopPlaybackGuard((await captureState()).tabId);
        await chrome.runtime.sendMessage({ type: "STOP_CAPTURE", target: "offscreen", reason: "source-video-ended" });
        sendResponse({ ok: true });
        break;
      case "SOURCE_TEACHING_ENDED":
        await stopPlaybackGuard((await captureState()).tabId);
        await chrome.runtime.sendMessage({ type: "STOP_CAPTURE", target: "offscreen", reason: "marked-teaching-end" });
        sendResponse({ ok: true });
        break;
      case "GET_CAPTURE_STATE":
        sendResponse(await captureState());
        break;
      case "SAVE_MARK":
        await saveMark(message);
        sendResponse({ ok: true });
        break;
      case "GET_REVIEW": {
        const { reviews = {} } = await chrome.storage.local.get("reviews");
        sendResponse(reviews[reviewKey(message.metadata)] || null);
        break;
      }
      case "EXPORT_MANIFEST":
        await exportManifest(message.metadata);
        sendResponse({ ok: true });
        break;
      case "SAVE_CAPTURE": {
        const mediaFilename = `lecture-atlas/${safeName(message.filename)}`;
        const downloadId = await chrome.downloads.download({ url: message.url, filename: mediaFilename, saveAs: false });
        const sidecar = {
          schemaVersion: 1,
          capturedAt: message.metadata?.captureStartedAt || new Date().toISOString(),
          title: message.metadata?.title || message.metadata?.tabTitle || null,
          sourceUrl: message.metadata?.url || null,
          captureMode: message.mode,
          sourceDurationSeconds: message.metadata?.duration ?? null,
          captureStartSourceSeconds: message.metadata?.captureStartSourceSeconds ?? message.metadata?.currentTime ?? 0,
          captureEndSourceSeconds: message.metadata?.captureEndSourceSeconds ?? null,
          playbackRate: message.metadata?.playbackRate ?? 1,
          capturedWallClockSeconds: message.capturedWallClockSeconds ?? null,
          stopReason: message.stopReason || null,
          sourceTimestampFormula: "sourceSeconds = captureStartSourceSeconds + (captureSeconds * playbackRate)",
          purpose: "Use timestamped video frames for slide/whiteboard references; use audio for transcription."
        };
        const sidecarUrl = `data:application/json;charset=utf-8,${encodeURIComponent(JSON.stringify(sidecar, null, 2))}`;
        const sidecarFilename = mediaFilename.replace(/\.webm$/i, ".capture.json");
        const sidecarDownloadId = await chrome.downloads.download({ url: sidecarUrl, filename: sidecarFilename, saveAs: false });
        await setCaptureState({ status: "idle", message: `Capture and timing map saved (downloads ${downloadId}, ${sidecarDownloadId}).` });
        sendResponse({ ok: true, downloadId, sidecarDownloadId });
        break;
      }
      case "CAPTURE_ERROR":
        await setCaptureState({ status: "idle", message: message.error || "Capture failed." });
        sendResponse({ ok: true });
        break;
      default:
        sendResponse({ ok: false });
    }
  })().catch(async (error) => {
    await setCaptureState({ status: "idle", message: error.message });
    sendResponse({ ok: false, error: error.message });
  });
  return true;
});
