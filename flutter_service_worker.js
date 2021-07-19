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
"index.html": "8a6cc362a2333a0c88639ce69e680305",
"/": "8a6cc362a2333a0c88639ce69e680305",
"main.dart.js": "af2d098d821c671b3d73149e8659cbe9",
"main.dart.js_1.part.js": "f344599bc2fcce8e84b5c845d9f7a5eb",
"main.dart.js_10.part.js": "75cf2089321406411b5eb611c7ccae35",
"main.dart.js_11.part.js": "b906d05948a9b3f77bbc247d478a48df",
"main.dart.js_12.part.js": "cc24a0149e4ced7d8921f005d19d6894",
"main.dart.js_13.part.js": "881727c0e1fb973c747abad5d16ab694",
"main.dart.js_14.part.js": "3ec42206b4a1a0f8ccc0a7cdb7b54e8e",
"main.dart.js_15.part.js": "e0ae27764ce6e0609b2d189cece9520e",
"main.dart.js_16.part.js": "e2c62c2e4256b29acec0107f615198bb",
"main.dart.js_17.part.js": "00de5478e6ef882459e94af348465109",
"main.dart.js_18.part.js": "9f4aae4c5561f874b4549c509059cf19",
"main.dart.js_19.part.js": "79dfc87f0b73a44cb20ac218b5021918",
"main.dart.js_2.part.js": "872ee5fd469a48c8ffd033ba228cf24b",
"main.dart.js_20.part.js": "b5b7fa1a59f8f8685050da93c3681a34",
"main.dart.js_21.part.js": "2649deb6d49e54dbd9bd682567963913",
"main.dart.js_22.part.js": "46ed1a58f4024221b84f5220918138eb",
"main.dart.js_23.part.js": "e67460588b394eb6b33b4b1b05db295b",
"main.dart.js_24.part.js": "ef9634fe09e6499dabf713535c29ee5a",
"main.dart.js_25.part.js": "79b2b8bde41621560b925d1f59a99581",
"main.dart.js_26.part.js": "b6e5a07c8bc0469cf17d4a8ff6759779",
"main.dart.js_27.part.js": "6c1b478b55d390a324a07dbd0ad985ca",
"main.dart.js_28.part.js": "5ad79d7a481041bbdbea847c06a7f905",
"main.dart.js_29.part.js": "11b770eb8b7f24e8d18f302d47ee4d0d",
"main.dart.js_3.part.js": "359c7f0062082b70e25cfa1c0d4f2e66",
"main.dart.js_31.part.js": "98a20a8d8ee23ad67328ae40e1c08ecb",
"main.dart.js_32.part.js": "46bf89603e0dff12dcb5e726ee79644e",
"main.dart.js_33.part.js": "3549d7ab72ee4ec4e93e40c02bdc9714",
"main.dart.js_34.part.js": "5ac504142c0630406754b8c5bc04c7ca",
"main.dart.js_4.part.js": "ca51c2a0ad43542ae84894a8492b3d21",
"main.dart.js_5.part.js": "dfb40c8c9a8080fdefc561c064ff35bb",
"main.dart.js_6.part.js": "adc16107a65b8c15268a227d2a923fcc",
"main.dart.js_7.part.js": "471566c2b14cbb129040984f5905579b",
"main.dart.js_8.part.js": "696e4a8c976f4944e5f3a12873fda62e",
"main.dart.js_9.part.js": "bc09837edc8e85b94fd853fea0277228",
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
