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
"assets/NOTICES": "179f37ad6bea96565787eb4e28a91450",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "d3c7e503f1f1bf0e5eaefdb6b66b67df",
"/": "d3c7e503f1f1bf0e5eaefdb6b66b67df",
"main.dart.js": "9509993675c728d0e8f55d2f3674dc1f",
"main.dart.js_1.part.js": "217365cf8c1bf6cdb8adf1ad0fb14428",
"main.dart.js_10.part.js": "9a19b7190f419acd429e5fd4df80e652",
"main.dart.js_11.part.js": "9fbeda1c5e5d82ec571d26d0fb4dc1d2",
"main.dart.js_12.part.js": "7e714d6db648ffb290eb4de10a47a353",
"main.dart.js_13.part.js": "665fb7c2fd9c86bea6c377cfa6f602fc",
"main.dart.js_14.part.js": "497bb9fda497d6f64c6bc7705585040a",
"main.dart.js_15.part.js": "063eb32c339880605c7cd3c06f89fe54",
"main.dart.js_16.part.js": "718e557fbdfd7876965a5f44041ad045",
"main.dart.js_17.part.js": "a2ce5d22ad700c69ff5e4bdc58f6c66a",
"main.dart.js_18.part.js": "b50bf8f8e96792199b2f4807d7ee8dd1",
"main.dart.js_19.part.js": "cdb3bf0c49b7034112aac111b845c53c",
"main.dart.js_2.part.js": "a188e0e8dca95c4911d21adfa8a76d84",
"main.dart.js_20.part.js": "46c38446c7b6f42b04a22f6925bd68cc",
"main.dart.js_21.part.js": "3806b0b58c2067ad11db6c4cc45bf212",
"main.dart.js_22.part.js": "47a10cc12cdad7275257bf2a27235a34",
"main.dart.js_23.part.js": "2a8dda153f38963c4116ed1b3e9661d2",
"main.dart.js_24.part.js": "7ecb236d723f4b0827a6c113cfee6b75",
"main.dart.js_26.part.js": "b8eecebe51d2222ae1a7a58c7a2323ed",
"main.dart.js_27.part.js": "3c59b2fffd3ab575e0fa4471070ed760",
"main.dart.js_28.part.js": "e633bc470b0fdf683387463a893908fc",
"main.dart.js_3.part.js": "2c6d335af638b550dae6f0cbd6b05189",
"main.dart.js_4.part.js": "8c292248dbc0a3cb8f61d516d771daf4",
"main.dart.js_5.part.js": "1c2591087feaa5396edb2c6a7cd3c5ab",
"main.dart.js_6.part.js": "a76459fd2b576917cb0c243e297b9374",
"main.dart.js_7.part.js": "1c7a8fe2e65dcb74934df6937578cf55",
"main.dart.js_8.part.js": "deaf2ef3a46fb15b2c796b1c82d5ee5e",
"main.dart.js_9.part.js": "cabbd0a319cbe93ffc98c9c74aee1512",
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
