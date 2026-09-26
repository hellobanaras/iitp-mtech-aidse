import assert from "node:assert/strict";
import { hasVerifiedLiveCapture, hasStreamRecording } from "../data/recording-provenance.js";
const live = { sourceEvidence: { kind: "live-capture", captureFinalized: true, reviewComplete: true, recordingLinkStatus: "pending", timebase: "local-capture" } };
assert.equal(hasVerifiedLiveCapture(live), true);
for (const key of Object.keys(live.sourceEvidence)) {
  const invalid = structuredClone(live);
  delete invalid.sourceEvidence[key];
  assert.equal(hasVerifiedLiveCapture(invalid), false, key);
}
assert.equal(hasVerifiedLiveCapture({}), false);
assert.equal(hasVerifiedLiveCapture({ ...live, recordingUrl: "https://teams.microsoft.com/v2/" }), false);
assert.equal(hasStreamRecording({ recordingUrl: "https://teams.microsoft.com/v2/" }), false);
const recordingUrl = "https://cciitpatna-my.sharepoint.com/personal/course73_hybrid_iitp_ac_in/_layouts/15/stream.aspx?id=%2Frecording.mp4";
assert.equal(hasStreamRecording({ recordingUrl }), true);
assert.equal(hasStreamRecording({ recordingUrl: recordingUrl + "&referrer=transient" }), false);
console.log("Recording provenance checks passed.");
