# Lecture Atlas Companion

An unpacked Chrome Manifest V3 extension for reviewing lecture recordings without extracting hidden media URLs or bypassing provider controls.

## Capabilities

- detects the active HTML video player and permitted Stream Download command;
- seeks backward/forward by five minutes and sets playback to 2×;
- marks actual teaching start/end and exports a JSON review manifest;
- captures one explicitly selected tab to a local audio+video or audio-only WebM file;
- keeps tab audio audible while capture is active;
- stops automatically when the marked teaching interval or source video ends and saves a timing-map JSON sidecar with the stop reason;
- prevents concurrent captures.

Audio + visible tab is the production mode for lecture notes because timestamped frames preserve the slide and whiteboard source trail. Audio-only is a smaller transcript-draft mode and cannot support visual citations by itself. At accelerated playback, the sidecar maps a captured timestamp to the original lecture with `sourceSeconds = captureStartSourceSeconds + (captureSeconds × playbackRate)`.

## Important boundary

Use the site’s visible Download action whenever it is offered. A view-only Microsoft recording can reflect an institutional or organizer policy. The local capture fallback should be used only when personal recording is permitted by IIT Patna and the course owner. The extension does not inspect manifests, cookies, signed URLs, or DRM.

## Load for development

Loading the extension grants persistent browser capabilities and should happen only after the user reviews and confirms the permissions.

1. Open `chrome://extensions`.
2. Enable **Developer mode**.
3. Choose **Load unpacked**.
4. Select this `tools/lecture-atlas-companion` directory.

Chrome 116 or newer is required for service-worker-to-offscreen tab capture.

## Workflow

1. Open exactly one lecture recording tab.
2. Open the extension and use ±5-minute seeking to find sustained teaching.
3. Mark teaching start and end.
4. Prefer **Use Stream’s permitted Download** when enabled.
5. If capture is permitted but Download is unavailable, confirm the policy notice and start **Audio + visible tab** capture.
6. Mark the verified teaching end before capture. Starting capture also starts a paused source video immediately, minimizing a dead lead-in. The companion stops at the marked end instead of recording a long idle tail; it also stops if the source video ends. The WebM and `.capture.json` timing map save under `Downloads/lecture-atlas/`.
7. Export the review manifest and place it with the local processing data under `.course-data/`.

After capture, extract timestamped frames, remove near-duplicates, and OCR or inspect each slide change. Keep textual slide/topic references and original lecture timecodes in public notes; do not republish full slide images unless permission is clear.

## Design references

- [Chrome tabCapture API](https://developer.chrome.com/docs/extensions/reference/api/tabCapture)
- [Chrome audio recording and screen capture guide](https://developer.chrome.com/docs/extensions/how-to/web-platform/screen-capture)
- [Chrome offscreen documents](https://developer.chrome.com/docs/extensions/reference/api/offscreen)
