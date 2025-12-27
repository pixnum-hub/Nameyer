const CACHE_NAME = "nameyer-v1";
const BASE_PATH = "/Nameyer/";

const ASSETS = [
  BASE_PATH,
  BASE_PATH + "index.html",
  BASE_PATH + "nameyer-manifest.json",
  BASE_PATH + "icon-192.png",
  BASE_PATH + "icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
