function openApp(url) {
  window.location.href = url;
}

// PWA Service Worker 등록
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}
