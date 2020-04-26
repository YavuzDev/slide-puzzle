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
"index.html": "916c2e1147a311fe83fe5c957c359789",
"/": "916c2e1147a311fe83fe5c957c359789",
"main.dart.js": "42a56aa299822a2c3d4f675e4c1c114f",
"manifest.json": "78cffa251689d789a6de35827f9947ec"
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
