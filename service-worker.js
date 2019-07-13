const CACHE_NAME = "eugwebdevs";
const URLS_TO_CACHE = [
  "/",
  "min/custom-min.js",
  "min/custom-min.css",
  "min/plugin-min.js",
  "min/plugin-min.css",
  "img/idx.png",
  "img/tao.png",
  "img/eugenetech.png",
  "img/tech-tuesday.jpg",
  "img/meetup.jpeg",
  "img/hackForACause.png",
  "img/eugene-women-tech.jpg",
  "img/Meetup_Logo_2015.png",
  "img/parallax1.png",
  "img/android-icon-192x192.png",
  "img/favicon-32x32.png"
];

const addAllToCache = async urls => {
  const cache = await caches.open(CACHE_NAME);
  return await cache.addAll(urls);
};

self.addEventListener("install", event => {
  self.skipWaiting();
  return event.waitUntil(addAllToCache(URLS_TO_CACHE));
});

const handleFetchRequest = async event => {
  const result = await caches.match(event.request);
  if (result) {
    return result;
  }

  const response = await fetch(event.request);
  return response;
};

self.addEventListener("fetch", event => {
  event.respondWith(handleFetchRequest(event));
});
