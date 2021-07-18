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
"index.html": "9e1002989510d17cdc53c8da87fe7eb7",
"/": "9e1002989510d17cdc53c8da87fe7eb7",
"main.dart.js": "064a257c96e9aa3cfe59839d1e80747d",
"main.dart.js_1.part.js": "bfa6392dde81bab2b5c35b51864ea808",
"main.dart.js_10.part.js": "38c5b8895a037372b6b7419817d2ed64",
"main.dart.js_11.part.js": "ca84e03fee5f1117d4388a2f067a1d9b",
"main.dart.js_12.part.js": "16852d7e12fadc3645b87476ea631603",
"main.dart.js_13.part.js": "423e11b4f1f4eba58e45b2f4b71f02f3",
"main.dart.js_14.part.js": "9124c75830d227937f0db62285d5f14f",
"main.dart.js_15.part.js": "da3421915c1ed824545919230eae5753",
"main.dart.js_16.part.js": "539c7dc74fcf7bb49f1a915cbbaeb157",
"main.dart.js_17.part.js": "46c1ffc4dd42d19cb01598b84aff9a09",
"main.dart.js_18.part.js": "46d0f5cea681384f8f460dc62a695853",
"main.dart.js_19.part.js": "545ffd49065ffdfdbc4edfad2755428d",
"main.dart.js_2.part.js": "08b34f87e66d73fe4b90eb3073e498fb",
"main.dart.js_20.part.js": "7ae9cfb8b6c16a0868694bbde9ecf401",
"main.dart.js_21.part.js": "09e424a272ba5eaefb19ac13b606ab58",
"main.dart.js_22.part.js": "5cc1a5605746a3726886a5f3ff06dfbb",
"main.dart.js_23.part.js": "2a8dda153f38963c4116ed1b3e9661d2",
"main.dart.js_24.part.js": "b85022036c97b51b89ef5c956d01d9f9",
"main.dart.js_26.part.js": "25e54e0bfc3bc28ab33aeb37f4de2c76",
"main.dart.js_27.part.js": "0b21f5ae72fe4a43073a302b1cc52bc1",
"main.dart.js_28.part.js": "54b3b908ad4048cadf1a2b8a240f497f",
"main.dart.js_3.part.js": "0870b56d729a0d9419f755425be6c08d",
"main.dart.js_4.part.js": "dc4b62b96a0c35aefd88088e5ad88c03",
"main.dart.js_5.part.js": "35c759e0980f03f8ecc9c591a27e8d3d",
"main.dart.js_6.part.js": "1c55a26562f589fdab3ba5ad11a44e0a",
"main.dart.js_7.part.js": "2e69ab185191e3bede5e4f4a7198f6c4",
"main.dart.js_8.part.js": "829e18ef52b6a103bca777be8e7d60c6",
"main.dart.js_9.part.js": "6cf4afc512a1e6ebb46d957a27df00b7",
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
