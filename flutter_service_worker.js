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
"index.html": "337d8e2d85f6248969235f2a58318351",
"/": "337d8e2d85f6248969235f2a58318351",
"main.dart.js": "060d9d7ffcea2dc72f4cacec07b7d674",
"main.dart.js_1.part.js": "81d1f638fe52c64386ec365e53f75478",
"main.dart.js_10.part.js": "261ee723ce03402d65a23aa0ac85db34",
"main.dart.js_11.part.js": "d354b934aaa8e9eccdbef0b1789171d7",
"main.dart.js_12.part.js": "7c95ded9c7c5b8fb3a4db0c4e12636a0",
"main.dart.js_13.part.js": "d796163fae6276739fa93cbb16e5a15c",
"main.dart.js_14.part.js": "dbc3730039d3b65ab6bc7739063a4ae3",
"main.dart.js_15.part.js": "d3162b5c35451bb26193642028d009bd",
"main.dart.js_16.part.js": "4b4f62025c3e0a9b6be57032688e9412",
"main.dart.js_17.part.js": "b7bfb7eb91d8acba129ea48fcb73626b",
"main.dart.js_18.part.js": "11a789372b8e1f43c04921fb95360628",
"main.dart.js_19.part.js": "0a32dc2f569796e9cfc6c652c33b692d",
"main.dart.js_2.part.js": "eafa8b239b072657fe35cee56736743d",
"main.dart.js_20.part.js": "ec5e18783b42fcff2551a797c99123b8",
"main.dart.js_21.part.js": "a8d19510fdbf4a668f24c91ea771937a",
"main.dart.js_22.part.js": "293fec41a6a52264f45dd5e1fb8f419b",
"main.dart.js_23.part.js": "4d611b8cc3491c9412d6929146087b12",
"main.dart.js_24.part.js": "ad1fcb68e2a82040ced3248eb9478370",
"main.dart.js_25.part.js": "cb43fb6a9d293a312024355248dc0620",
"main.dart.js_26.part.js": "82b7cf523910ca93fcffef30252d83e8",
"main.dart.js_27.part.js": "d609d1bd33d7ea9de8eb1df3b58c7951",
"main.dart.js_28.part.js": "3481cdfbb5b9bff3e586725c03bc027a",
"main.dart.js_29.part.js": "eaa2d7793037113c1c80239f495000f3",
"main.dart.js_3.part.js": "d38931c2727fcb8c619057345fc4bb41",
"main.dart.js_30.part.js": "db4e36ddc2a0e275c1ae95f9ca14eb95",
"main.dart.js_31.part.js": "dd44131b19bd560832f750bad7f71096",
"main.dart.js_32.part.js": "a4ddef42f03edbdcff75a2464a99b876",
"main.dart.js_33.part.js": "46bf89603e0dff12dcb5e726ee79644e",
"main.dart.js_34.part.js": "3549d7ab72ee4ec4e93e40c02bdc9714",
"main.dart.js_35.part.js": "3eabe17487f5720c72cb93ec6f70b72d",
"main.dart.js_4.part.js": "620f6949501679cd1c6847ae8cbe8581",
"main.dart.js_5.part.js": "929da201284842bd5b43f95b56e8e151",
"main.dart.js_6.part.js": "370aa3f5147ca1ea6d6b39cb2f1dda40",
"main.dart.js_7.part.js": "b3250ceb0b8fe3b1af1c455fe6e364af",
"main.dart.js_8.part.js": "4c8335965b4161ec3025053462a016ef",
"main.dart.js_9.part.js": "c44a0f1d96c2a34ae6c917e1a907b73b",
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
