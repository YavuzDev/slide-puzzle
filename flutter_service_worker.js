'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "826d40e0e89d8c558085a12e0b5ce339",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "feda81bf723232951e4b23664d94e755",
"icons/Icon-192.png": "feda81bf723232951e4b23664d94e755",
"icons/Icon-512.png": "feda81bf723232951e4b23664d94e755",
"index.html": "0b667a7345ac068cc98cfa3c0c3c7f9c",
"/": "0b667a7345ac068cc98cfa3c0c3c7f9c",
"main.dart.js": "ed64e3c14edb27dbfe5cd9b2221cd91b",
"manifest.json": "dc203d52379bbd6f037616849fd5d81a"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
