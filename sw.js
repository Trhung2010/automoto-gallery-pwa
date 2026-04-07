const CACHE_NAME = 'automoto-gallery-v9';
const APP_SHELL_URL = './index.html';
const APP_ASSETS = [
  './',
  APP_SHELL_URL,
  './styles.css?v=shop-v7',
  './app.js?v=shop-v7',
  './site.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png'
];
const APP_ASSET_PATHS = new Set(
  APP_ASSETS.map(asset => new URL(asset, self.location.origin + self.location.pathname).pathname)
);

function updateCache(cacheKey, request, response) {
  if (!response || response.status !== 200 || response.type === 'opaque') return response;
  const copy = response.clone();
  caches.open(cacheKey).then(cache => cache.put(request, copy));
  return response;
}

function networkFirst(request, fallbackKey = request) {
  return fetch(request)
    .then(response => updateCache(CACHE_NAME, fallbackKey, response))
    .catch(async () => (await caches.match(request)) || caches.match(fallbackKey));
}

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  const isSameOrigin = url.origin === self.location.origin;
  const isAppAsset = isSameOrigin && APP_ASSET_PATHS.has(url.pathname);

  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request, APP_SHELL_URL));
    return;
  }

  if (!isSameOrigin) return;

  if (isAppAsset) {
    event.respondWith(networkFirst(request));
    return;
  }

  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(response => {
        return updateCache(CACHE_NAME, request, response);
      });
    })
  );
});
