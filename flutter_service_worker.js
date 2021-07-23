'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "5bedc0de60b302bd4e2c9df641691b38",
"assets/assets%255Cfonts%255CSpoqaHanSansNeo-Bold.ttf": "44915dd2aa382dd0825979edb58f9bce",
"assets/assets%255Cfonts%255CSpoqaHanSansNeo-Light.ttf": "9bc693a211b5d25df7cdd1dc6400ec14",
"assets/assets%255Cfonts%255CSpoqaHanSansNeo-Medium.ttf": "1dfa0cf43aa2bb4bccfcb1205d7d8aca",
"assets/assets%255Cfonts%255CSpoqaHanSansNeo-Regular.ttf": "8c97bfe4fcf47c1060fae39c0a081056",
"assets/assets%255Cfonts%255CSpoqaHanSansNeo-Thin.ttf": "adf58f1a8984702afc3f42a694e1bd76",
"assets/FontManifest.json": "ed0876a6096782b5576b2c9c1d987884",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "aa4ae9fef3e9ca80ce333dbdd1a9c15e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "5cb27c57eb99c15d6e31dc760f605967",
"/": "5cb27c57eb99c15d6e31dc760f605967",
"main.dart.js": "94d7fc244ce4c5aa4a05c7cca9c97c6d",
"main.dart.js_1.part.js": "16b011892a64084f5e74a52b0de7b316",
"main.dart.js_10.part.js": "9ad7c3eee74f2ce49cfece6088391883",
"main.dart.js_11.part.js": "d9972f0b40a9db8a96426a0f9a274dc6",
"main.dart.js_12.part.js": "2b8970bdb75b589f4f3283ac4ce1b6bc",
"main.dart.js_13.part.js": "89c624ab8e56fdd85a38a980b6480407",
"main.dart.js_14.part.js": "84e9a349f9950352c0814b0ba7636d68",
"main.dart.js_15.part.js": "8820f876624a9321580df3529e1c04f2",
"main.dart.js_16.part.js": "d31e58648d374bdea9d001e69368b892",
"main.dart.js_17.part.js": "35cd0001a068f449af905fcc0cd291d3",
"main.dart.js_18.part.js": "88d06588872e474c4f77255fb40d1f7c",
"main.dart.js_19.part.js": "ca68fd7e0ce9ad9769af3ec8d4e7ed95",
"main.dart.js_2.part.js": "d26d308d16f7c7816fd2f4d0c62afbab",
"main.dart.js_20.part.js": "f40165ea92edac9e69101aa24093ce12",
"main.dart.js_21.part.js": "9744525c1f26884ab05cf93621157c73",
"main.dart.js_22.part.js": "2ac842b095c19232728e8bfd95d3d213",
"main.dart.js_23.part.js": "df1782209207c66f95341eae08f09b96",
"main.dart.js_24.part.js": "e75a60ffd9657a53307bedcdad6d4a55",
"main.dart.js_25.part.js": "e2cb5b008de7f6fe104e91c0c905c224",
"main.dart.js_26.part.js": "abd8f1d2565c1ce8a9549e33b436af71",
"main.dart.js_27.part.js": "e464b9f1ff7609fcc333ebcab754ae9d",
"main.dart.js_28.part.js": "7c3eb7d6dfc4f27702897dd05c2038a9",
"main.dart.js_29.part.js": "1bf9953901afd27509872643a9bc934d",
"main.dart.js_3.part.js": "aa373df968ec942b132b07a3da3835f6",
"main.dart.js_30.part.js": "f5f6a34f529cb238c2855ec7d3356258",
"main.dart.js_31.part.js": "d5d1ce7db6cc2668e75958791a498c5f",
"main.dart.js_32.part.js": "0ea500d6e0c87c207a1f3b22098334fb",
"main.dart.js_33.part.js": "012da98b92a9f35e85364d6c9bac96fa",
"main.dart.js_34.part.js": "37b8587734712c50de3017bfa98679e1",
"main.dart.js_35.part.js": "20772a00eae75571cca5ed4ae505b650",
"main.dart.js_36.part.js": "3f26404b0853a7d2f41b6890cd0f87c3",
"main.dart.js_37.part.js": "05945221b57b65d07f94f18d0b294f08",
"main.dart.js_38.part.js": "f0d35c9808b58b1652cb95bc6fa39208",
"main.dart.js_39.part.js": "2f7faca00004560b7dad33278e8f79dd",
"main.dart.js_4.part.js": "137b4beeefc0bf635f001e3394982d87",
"main.dart.js_40.part.js": "f6181d06733d40fb72a4f23a0e507828",
"main.dart.js_5.part.js": "24c58959b3a9edc78580b7dcb96c2257",
"main.dart.js_6.part.js": "ccf514a95bbfe804daa38f5b253e9b91",
"main.dart.js_7.part.js": "9e7832ce7f97c5f14d93af6aaf1d6e65",
"main.dart.js_8.part.js": "64636025b8c569348ed89d5d24f1c671",
"main.dart.js_9.part.js": "0da75d16cdfaaf154b91e5e0cd916b03",
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
