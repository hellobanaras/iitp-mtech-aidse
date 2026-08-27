const measurementId = "G-QHFHH32EEP";
const consentKey = "lecture-atlas-analytics-consent";

const notice = document.querySelector("#analytics-notice");
const acceptButton = document.querySelector("#analytics-accept");
const declineButton = document.querySelector("#analytics-decline");
const settingsButton = document.querySelector("#analytics-settings");

function consentValue() {
  try {
    return window.localStorage.getItem(consentKey);
  } catch {
    return null;
  }
}

function saveConsent(value) {
  try {
    window.localStorage.setItem(consentKey, value);
  } catch {
    // The visitor's choice still applies for the current page.
  }
}

function trackPageView() {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", "page_view", {
    page_location: window.location.href,
    page_path: `${window.location.pathname}${window.location.hash}`,
    page_title: document.title
  });
}

function loadAnalytics() {
  if (window.__lectureAtlasAnalyticsLoaded) return;
  window.__lectureAtlasAnalyticsLoaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", measurementId, { anonymize_ip: true, send_page_view: false });
  trackPageView();
  window.addEventListener("hashchange", trackPageView);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.append(script);
}

function hideNotice() {
  notice.hidden = true;
}

function showNotice() {
  notice.hidden = false;
  acceptButton.focus();
}

function updateSettingsLabel() {
  settingsButton.textContent = consentValue() === "granted" ? "Analytics enabled" : "Analytics privacy";
}

if (consentValue() === "granted") {
  loadAnalytics();
  hideNotice();
} else if (consentValue() === "denied") {
  hideNotice();
}
updateSettingsLabel();

acceptButton.addEventListener("click", () => {
  saveConsent("granted");
  loadAnalytics();
  hideNotice();
  updateSettingsLabel();
});

declineButton.addEventListener("click", () => {
  saveConsent("denied");
  hideNotice();
  updateSettingsLabel();
});

settingsButton.addEventListener("click", showNotice);
