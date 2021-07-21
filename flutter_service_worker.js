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
"index.html": "18d1fffad5d322962cd38dc63dc5e716",
"/": "18d1fffad5d322962cd38dc63dc5e716",
"main.dart.js": "21fc1893d02a64f2a77cca11b7c1056f",
"main.dart.js_1.part.js": "37fb712dcfe1ca7f751aebf96e3b5d8b",
"main.dart.js_10.part.js": "737ab2d55eefd45c5de82ba00ba9440d",
"main.dart.js_11.part.js": "59b0d20ba7a014c959f1465a664255e1",
"main.dart.js_12.part.js": "909a5e939804aba67fbd39e44814d046",
"main.dart.js_13.part.js": "a68821863e101d2e4bb9fb0fbcb49e79",
"main.dart.js_14.part.js": "12d9603fb3457e4d6b93317ef48b7b98",
"main.dart.js_15.part.js": "59e25b426f73f9d59f828d1b7cfc43b3",
"main.dart.js_16.part.js": "1ee3437877f39b5701b94428053343c9",
"main.dart.js_17.part.js": "20116fbae9a5fcadafcc108aab3c691c",
"main.dart.js_18.part.js": "8befcb14a0164f026953dd5fab285297",
"main.dart.js_19.part.js": "9f751a4cd1419c874d3f5ad5aca5c7a5",
"main.dart.js_2.part.js": "24ed831a6cbf8ea6e2fc263e4d4fa508",
"main.dart.js_20.part.js": "e9ef961f90b34bd504e42b0a9eed3de3",
"main.dart.js_21.part.js": "7b00f87cb2c6586dfb37871590ac4a88",
"main.dart.js_22.part.js": "84f9782da691ea7531a1707aaf30d47f",
"main.dart.js_23.part.js": "f7424b2591251d465cfdbc67328f5ed4",
"main.dart.js_24.part.js": "e53a68736dd087025ce49d975f6af11f",
"main.dart.js_25.part.js": "c79188ec9f03e6ff4257eb6def975f48",
"main.dart.js_26.part.js": "bd67852c754ff44b655f460a76221cfa",
"main.dart.js_27.part.js": "6bbf45315188c64645001609708975a7",
"main.dart.js_28.part.js": "35967a1892839776871b9ef0c93fdd7a",
"main.dart.js_29.part.js": "b98417319f1d07188d3728b542b21da6",
"main.dart.js_3.part.js": "d297cdbfee43f1858761f90f40cc57e2",
"main.dart.js_30.part.js": "06e7defe689e6716161153abc038945a",
"main.dart.js_31.part.js": "0b47de85a828bdfff22dc73f46046c0d",
"main.dart.js_32.part.js": "e9c1321ec579c7d2ceafdccb9e9499dd",
"main.dart.js_33.part.js": "0fe2b8aabaa6aec07ba747933af795f5",
"main.dart.js_34.part.js": "197d6974b87d7caf8b8246a1487ffa48",
"main.dart.js_35.part.js": "e3aa5e2fa54e72c6ce06d2bb90cb43b6",
"main.dart.js_36.part.js": "ad1f96bb7b34667e0611afd3682c0243",
"main.dart.js_37.part.js": "f6181d06733d40fb72a4f23a0e507828",
"main.dart.js_38.part.js": "08999df118f73a2d9df90533df647ff9",
"main.dart.js_4.part.js": "c0f7dc96a0ae154cba567796c9e1c94e",
"main.dart.js_5.part.js": "dfeed39f49b10514c382d8ab32957abc",
"main.dart.js_6.part.js": "ffb0f521f8a68a25a84ba58db3c17ee9",
"main.dart.js_7.part.js": "d22e794c05b7bf63c776c3bfeeddab58",
"main.dart.js_8.part.js": "3a5348dcef2e9cf23650616c7b733551",
"main.dart.js_9.part.js": "84300c166286be25a88411c9b494c7fe",
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
