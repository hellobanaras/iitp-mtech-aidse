// Only explicitly reviewed, finalized live captures may precede a provider link.
export function hasVerifiedLiveCapture(lecture) {
  const source = lecture.sourceEvidence;
  return source?.kind === "live-capture"
    && source.captureFinalized === true
    && source.reviewComplete === true
    && source.recordingLinkStatus === "pending"
    && source.timebase === "local-capture"
    && !lecture.recordingUrl;
}

export function hasStreamRecording(lecture) {
  return /^https:\/\/cciitpatna-my\.sharepoint\.com\/personal\/.*\/stream\.aspx\?id=/.test(lecture.recordingUrl || "")
    && !/[?&](?:referrer|referrerScenario)=/.test(lecture.recordingUrl || "");
}
