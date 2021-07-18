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
"assets/NOTICES": "5fb92fea12a4523c9687eed04a96ee5a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "710c8bed985ec7166fd6e98381f619fd",
"/": "710c8bed985ec7166fd6e98381f619fd",
"main.dart.js": "2dbf7525b817f0d9e0cf18086c9069db",
"main.dart.js_1.part.js": "697c53abe6395b1075aaf6e6bc54a3b8",
"main.dart.js_10.part.js": "8b2834fc6a89fc9b732d7f8a606f6940",
"main.dart.js_11.part.js": "3f4d8ceec870ef164d12194a0d377a96",
"main.dart.js_12.part.js": "1ab4284d60c5459f7421cf96a329f03e",
"main.dart.js_13.part.js": "c9c186609ae554a33c32937f1e68debc",
"main.dart.js_14.part.js": "11e4ca9b8c1c647423bf50dd5bcacd54",
"main.dart.js_15.part.js": "ec8563fb16de3f6fa8749f450f92ce4f",
"main.dart.js_16.part.js": "4b3da07bfb61b21f4a9ea3b4804c83d8",
"main.dart.js_17.part.js": "f9e2db8130bc5ededbf78a0e0351d6e3",
"main.dart.js_18.part.js": "a5ebb8ab56be5464d12f704e1f518e20",
"main.dart.js_19.part.js": "b011a25bcfe1985676b127eb8503f2a6",
"main.dart.js_2.part.js": "46f37ce93818ba7c4598e2e6429a3a57",
"main.dart.js_20.part.js": "5a94fe54cd1460c778e6e49c832cc335",
"main.dart.js_21.part.js": "72e426d95c776ea0d9f2c4486ad665c3",
"main.dart.js_22.part.js": "4a734e0f747ed34d8f215192c9d8a8aa",
"main.dart.js_23.part.js": "56b8802f1f4be48309a15c833dba4812",
"main.dart.js_24.part.js": "73a15f5b4e37023d8096f3fc634e1af2",
"main.dart.js_26.part.js": "bb5e9553bbde25546f20c7a53fc57ec1",
"main.dart.js_27.part.js": "574578b3387c7c32b3d85ae095ba46e2",
"main.dart.js_28.part.js": "3549d7ab72ee4ec4e93e40c02bdc9714",
"main.dart.js_3.part.js": "03448056868f9856042278d45df5943a",
"main.dart.js_4.part.js": "d44ba74f7c77b98c30528d7449bc0262",
"main.dart.js_5.part.js": "9ac63b8e719f6ea159baaa8ce13c00b1",
"main.dart.js_6.part.js": "b3c79bf53909c5b9738aa0b8036c6465",
"main.dart.js_7.part.js": "afe7e36bae0740dd01b31bb7baa12c59",
"main.dart.js_8.part.js": "a80819c1200df42c4383a9a3158a106b",
"main.dart.js_9.part.js": "8dc83c19dc90430774a65a8f875f0064",
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
