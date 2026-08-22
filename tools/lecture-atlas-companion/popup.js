const $ = (selector) => document.querySelector(selector);
let activeTab;
let playerState;
let timer;

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "—";
  const rounded = Math.max(0, Math.floor(seconds));
  const hours = Math.floor(rounded / 3600);
  const minutes = Math.floor((rounded % 3600) / 60);
  const remaining = rounded % 60;
  return hours ? `${hours}:${String(minutes).padStart(2, "0")}:${String(remaining).padStart(2, "0")}` : `${minutes}:${String(remaining).padStart(2, "0")}`;
}

async function execute(func, args = []) {
  if (!activeTab?.id) throw new Error("No active tab available.");
  const [result] = await chrome.scripting.executeScript({ target: { tabId: activeTab.id }, func, args });
  return result?.result;
}

async function readPlayer() {
  [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });
  playerState = await execute(() => {
    const video = document.querySelector("video");
    const controls = [...document.querySelectorAll("button, a, [role='button'], [role='menuitem']")];
    const visible = (element) => Boolean(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
    const downloadAvailable = controls.some((element) => visible(element) && element.textContent.trim().toLowerCase() === "download");
    return {
      title: document.querySelector("h1")?.textContent?.trim() || document.title,
      url: location.href,
      currentTime: video?.currentTime ?? null,
      duration: video?.duration ?? null,
      playbackRate: video?.playbackRate ?? null,
      paused: video?.paused ?? true,
      downloadAvailable
    };
  });

  $("#lecture-title").textContent = playerState?.title || activeTab.title || "Unknown lecture";
  $("#position").textContent = formatTime(playerState?.currentTime);
  $("#duration").textContent = formatTime(playerState?.duration);
  $("#speed").textContent = playerState?.playbackRate ? `${playerState.playbackRate}×` : "—";
  $("#player-status").textContent = playerState?.duration ? `${playerState.paused ? "Paused" : "Playing"} · ${playerState.downloadAvailable ? "Site download available" : "View-only UI"}` : "No HTML video player detected in this tab.";
  $("#site-download").disabled = !playerState?.downloadAvailable;
}

async function seek(delta) {
  await execute((amount) => {
    const video = document.querySelector("video");
    if (!video) return false;
    video.currentTime = Math.max(0, Math.min(video.duration || Infinity, video.currentTime + amount));
    return true;
  }, [delta]);
  await readPlayer();
}

async function setTwoTimes() {
  await execute(() => {
    const video = document.querySelector("video");
    if (!video) return false;
    video.playbackRate = 2;
    return true;
  });
  await readPlayer();
}

async function clickSiteDownload() {
  const clicked = await execute(() => {
    const candidates = [...document.querySelectorAll("button, a, [role='button'], [role='menuitem']")];
    const target = candidates.find((element) => (element.offsetWidth || element.offsetHeight) && element.textContent.trim().toLowerCase() === "download");
    if (!target) return false;
    target.click();
    return true;
  });
  $("#player-status").textContent = clicked ? "Opened Stream’s permitted Download action." : "No permitted Download action is visible.";
}

async function saveMark(kind) {
  await readPlayer();
  if (!Number.isFinite(playerState?.currentTime)) throw new Error("The player position is unavailable.");
  await chrome.runtime.sendMessage({
    type: "SAVE_MARK",
    kind,
    metadata: { ...playerState, tabTitle: activeTab.title, markedAt: new Date().toISOString() }
  });
  $("#player-status").textContent = `${kind === "start" ? "Teaching start" : "Teaching end"} saved at ${formatTime(playerState.currentTime)}.`;
}

async function getCaptureState() {
  const state = await chrome.runtime.sendMessage({ type: "GET_CAPTURE_STATE" });
  const recording = state?.status === "recording";
  $("#capture-badge").hidden = !recording;
  $("#capture-toggle").textContent = recording ? "Stop and save capture" : "Start local capture";
  $("#capture-toggle").classList.toggle("danger", recording);
  $("#capture-mode").disabled = recording;
  $("#policy-confirm").disabled = recording;
  clearInterval(timer);
  if (recording) {
    const update = () => {
      const elapsed = (Date.now() - state.startedAt) / 1000;
      $("#capture-status").textContent = `Recording ${state.mode} · ${formatTime(elapsed)} elapsed`;
    };
    update();
    timer = setInterval(update, 1000);
  } else {
    $("#capture-status").textContent = state?.message || "Idle";
  }
  return state;
}

async function toggleCapture() {
  const state = await getCaptureState();
  if (state?.status === "recording") {
    await chrome.runtime.sendMessage({ type: "STOP_CAPTURE" });
    $("#capture-status").textContent = "Finalizing local file…";
    setTimeout(getCaptureState, 800);
    return;
  }
  if (!$("#policy-confirm").checked) {
    $("#capture-status").textContent = "Confirm permission before starting capture.";
    return;
  }
  await readPlayer();
  const review = await chrome.runtime.sendMessage({ type: "GET_REVIEW", metadata: playerState });
  await chrome.runtime.sendMessage({ type: "ENSURE_OFFSCREEN" });
  const streamId = await chrome.tabCapture.getMediaStreamId({ targetTabId: activeTab.id });
  await execute((teachingEndSeconds) => {
    const video = document.querySelector("video");
    if (!video) return false;
    if (!window.__lectureAtlasEndWatcher) {
      window.__lectureAtlasEndWatcher = true;
      video.addEventListener("ended", () => {
        chrome.runtime.sendMessage({ type: "SOURCE_VIDEO_ENDED" }).catch(() => {});
        window.__lectureAtlasEndWatcher = false;
      }, { once: true });
    }
    if (Number.isFinite(teachingEndSeconds)) {
      const stopAtTeachingEnd = () => {
        if (video.currentTime < teachingEndSeconds - 0.25) return;
        video.removeEventListener("timeupdate", stopAtTeachingEnd);
        chrome.runtime.sendMessage({ type: "SOURCE_TEACHING_ENDED" }).catch(() => {});
      };
      video.addEventListener("timeupdate", stopAtTeachingEnd);
    }
    return true;
  }, [review?.marks?.end?.seconds ?? null]);
  await chrome.runtime.sendMessage({
    type: "START_CAPTURE",
    streamId,
    mode: $("#capture-mode").value,
    metadata: {
      ...playerState,
      tabTitle: activeTab.title,
      captureStartSourceSeconds: playerState.currentTime,
      captureEndSourceSeconds: review?.marks?.end?.seconds ?? null,
      captureStartedAt: new Date().toISOString()
    }
  });
  await execute(() => {
    const video = document.querySelector("video");
    if (!video || !video.paused) return false;
    video.play().catch(() => {});
    return true;
  });
  setTimeout(getCaptureState, 400);
}

document.querySelectorAll("[data-seek]").forEach((button) => button.addEventListener("click", () => seek(Number(button.dataset.seek)).catch(showError)));
$("#speed-2x").addEventListener("click", () => setTwoTimes().catch(showError));
$("#mark-start").addEventListener("click", () => saveMark("start").catch(showError));
$("#mark-end").addEventListener("click", () => saveMark("end").catch(showError));
$("#site-download").addEventListener("click", () => clickSiteDownload().catch(showError));
$("#export-manifest").addEventListener("click", async () => {
  await readPlayer();
  await chrome.runtime.sendMessage({ type: "EXPORT_MANIFEST", metadata: { ...playerState, tabTitle: activeTab.title } });
  $("#player-status").textContent = "Review manifest exported to Downloads.";
});
$("#capture-toggle").addEventListener("click", () => toggleCapture().catch(showError));
$("#refresh").addEventListener("click", () => readPlayer().catch(showError));

function showError(error) {
  $("#capture-status").textContent = error?.message || String(error);
}

await Promise.all([readPlayer(), getCaptureState()]).catch(showError);
