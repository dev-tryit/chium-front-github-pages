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
"index.html": "9b072a31edb9593a20f6e8136e796d88",
"/": "9b072a31edb9593a20f6e8136e796d88",
"main.dart.js": "fbbfa99d3375865f3e270d3a532d88a6",
"main.dart.js_1.part.js": "d7c800cd3267953bf872fc6649186908",
"main.dart.js_10.part.js": "75cf2089321406411b5eb611c7ccae35",
"main.dart.js_11.part.js": "24fc3d31559768ef9d8dae0da8fbc19a",
"main.dart.js_12.part.js": "5d9bbd26fd1b076cd9b5f2db84159b66",
"main.dart.js_13.part.js": "881727c0e1fb973c747abad5d16ab694",
"main.dart.js_14.part.js": "3379b847ba513ca3f09dd5b8abc66490",
"main.dart.js_15.part.js": "b1685ff64f0ba81e543a259006447834",
"main.dart.js_16.part.js": "928786aa1ec01cdffdd42980e08b2428",
"main.dart.js_17.part.js": "ffb83db289517ea230db013bcb465709",
"main.dart.js_18.part.js": "23d2b415ac77650c48d055deed5f819e",
"main.dart.js_19.part.js": "55beb485832ce0bb6b3ee38fda5f19a9",
"main.dart.js_2.part.js": "9f2bffd99a57a7a471055996c7a7443f",
"main.dart.js_20.part.js": "05c187353a58631c4a470b5b967d8a6d",
"main.dart.js_21.part.js": "3e074964ab21b916aa5930a72ca01b99",
"main.dart.js_22.part.js": "7f7872f66dc9ea8cc2bfa765f2b43767",
"main.dart.js_23.part.js": "e0a5f32d3586c1042e59d69a0292fa1b",
"main.dart.js_24.part.js": "ddd44ebd758d3a5dc22944b8aa1cfce7",
"main.dart.js_25.part.js": "cdb1539814b0ea40d313a7660e91839b",
"main.dart.js_26.part.js": "b6e5a07c8bc0469cf17d4a8ff6759779",
"main.dart.js_27.part.js": "6c1a38527058e8cd62edc5f7a387b102",
"main.dart.js_28.part.js": "5ad79d7a481041bbdbea847c06a7f905",
"main.dart.js_29.part.js": "11b770eb8b7f24e8d18f302d47ee4d0d",
"main.dart.js_3.part.js": "7308402349023611ebddab523a80a5f9",
"main.dart.js_31.part.js": "98a20a8d8ee23ad67328ae40e1c08ecb",
"main.dart.js_32.part.js": "46bf89603e0dff12dcb5e726ee79644e",
"main.dart.js_33.part.js": "3549d7ab72ee4ec4e93e40c02bdc9714",
"main.dart.js_34.part.js": "5ac504142c0630406754b8c5bc04c7ca",
"main.dart.js_4.part.js": "ca51c2a0ad43542ae84894a8492b3d21",
"main.dart.js_5.part.js": "dfb40c8c9a8080fdefc561c064ff35bb",
"main.dart.js_6.part.js": "249fda88e2baedca4704666e7e39cea8",
"main.dart.js_7.part.js": "846d3a7c5ec7c3347fdeebf857ad12a2",
"main.dart.js_8.part.js": "cd413642e6010d31343c8de981070245",
"main.dart.js_9.part.js": "31820714fc9a4638db0960b8e129e513",
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
