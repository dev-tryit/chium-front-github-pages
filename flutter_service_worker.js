'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "5bedc0de60b302bd4e2c9df641691b38",
"assets/assets%255Cfonts%255CSpoqaHanSansNeo-Bold.ttf": "4db68f99b1aa69d92a0366c31c384383",
"assets/assets%255Cfonts%255CSpoqaHanSansNeo-Light.ttf": "10959d83c4a36caa81a804df6d9c0400",
"assets/assets%255Cfonts%255CSpoqaHanSansNeo-Medium.ttf": "1c177bbda2f670a03abce8f15bbad484",
"assets/assets%255Cfonts%255CSpoqaHanSansNeo-Regular.ttf": "2118fb0c3ef472cc03c7fd589c59ae05",
"assets/assets%255Cfonts%255CSpoqaHanSansNeo-Thin.ttf": "4cb52f730d1f6281fac53066012c509c",
"assets/FontManifest.json": "ed0876a6096782b5576b2c9c1d987884",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "aa4ae9fef3e9ca80ce333dbdd1a9c15e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "bbddcbf19c6b3ec04f180d4e68650026",
"/": "bbddcbf19c6b3ec04f180d4e68650026",
"main.dart.js": "169a71163d3357a0aea22e38eb97b395",
"main.dart.js_1.part.js": "744a6f672c4e04b0ef37c9f78b136344",
"main.dart.js_10.part.js": "6459fd07e2024bebfb910ec28fcaee59",
"main.dart.js_11.part.js": "57e384db63eb9cdf39c3a6ed2749503a",
"main.dart.js_12.part.js": "b1823904adf76d0ea17c82cf6792e981",
"main.dart.js_13.part.js": "c8ff730a1734650ec18d19cc3d691f4c",
"main.dart.js_14.part.js": "e9e0a311cc025341dff2917248d63bee",
"main.dart.js_15.part.js": "a1f2b1d5412c15e8d1a8e83bb16a5fc3",
"main.dart.js_16.part.js": "73e866dccf0d1bf50ca9638d2ba61969",
"main.dart.js_17.part.js": "e0bf8461a2bc028ce35b88a0e56d3a37",
"main.dart.js_18.part.js": "1c46d9b54339f1ebc6f81d3e6be5696a",
"main.dart.js_19.part.js": "c70fbb23d12f7b80b56b2e84ac0c1600",
"main.dart.js_2.part.js": "b6a73fc7ab0c7a8cd272ac2858b3a9dd",
"main.dart.js_20.part.js": "ebd2a5a3955f381deb5b77cbcde5956e",
"main.dart.js_21.part.js": "ccc5cdc31b2b51aa91e46b54297fc373",
"main.dart.js_22.part.js": "982e69a0ebc0b2de57da8e326a3aa7d5",
"main.dart.js_23.part.js": "76b92c3ae7a35a81ceb52abf5652ef53",
"main.dart.js_24.part.js": "0bee9bc982ca8f0782955ae2c0e13a26",
"main.dart.js_25.part.js": "d8bef4142a3e676c8e9ff0ea0e737483",
"main.dart.js_26.part.js": "472e71dcb03a7fd233d1c8ab3dcc619a",
"main.dart.js_27.part.js": "f61be3e8c65067cbf2ac8c175a6b3adc",
"main.dart.js_28.part.js": "02148264292f47dacdeb466714bf1079",
"main.dart.js_29.part.js": "0e0623e9edb587740194696e725909e6",
"main.dart.js_3.part.js": "fa00238d991704e0fac10552870368cc",
"main.dart.js_31.part.js": "d1e5dba14d4c54aee80a9737757ee74c",
"main.dart.js_32.part.js": "e8776f043bbb9dcc897fc46d49c06fa7",
"main.dart.js_33.part.js": "46bf89603e0dff12dcb5e726ee79644e",
"main.dart.js_34.part.js": "3549d7ab72ee4ec4e93e40c02bdc9714",
"main.dart.js_35.part.js": "3eabe17487f5720c72cb93ec6f70b72d",
"main.dart.js_4.part.js": "1714f6d5246dd7347b5aa069c6b397be",
"main.dart.js_5.part.js": "e2a3dab687a40415f81de4a1e2ec16da",
"main.dart.js_6.part.js": "21eab72d2e09bb9235d28f81c8557b7e",
"main.dart.js_7.part.js": "93ec644a8be0c0ea10df9a8bfb580313",
"main.dart.js_8.part.js": "154c0f7225b4723938e91be3c8987a5c",
"main.dart.js_9.part.js": "cb2e389c26d8bd7d843ab61921370d92",
"manifest.json": "64002ddc7210f52522dbedb1867d459d",
"version.json": "24d15e25fde9c8b0bf427db3a29549d3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
