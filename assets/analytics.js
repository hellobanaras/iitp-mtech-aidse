const measurementId = "G-QHFHH32EEP";

function trackPageView() {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", "page_view", {
    page_location: window.location.href,
    page_path: `${window.location.pathname}${window.location.hash}`,
    page_title: document.title
  });
}

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
