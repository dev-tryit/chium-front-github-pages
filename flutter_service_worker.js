'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "1fa5749549dc4f2e234b93b736cc1f03",
"assets/assets/images/defaultCompany.png": "1262332474aaf31f3e236c76ad64be77",
"assets/assets%255Cfonts%255CSpoqaHanSansNeo-Bold.ttf": "44915dd2aa382dd0825979edb58f9bce",
"assets/assets%255Cfonts%255CSpoqaHanSansNeo-Light.ttf": "9bc693a211b5d25df7cdd1dc6400ec14",
"assets/assets%255Cfonts%255CSpoqaHanSansNeo-Medium.ttf": "1dfa0cf43aa2bb4bccfcb1205d7d8aca",
"assets/assets%255Cfonts%255CSpoqaHanSansNeo-Regular.ttf": "8c97bfe4fcf47c1060fae39c0a081056",
"assets/assets%255Cfonts%255CSpoqaHanSansNeo-Thin.ttf": "adf58f1a8984702afc3f42a694e1bd76",
"assets/FontManifest.json": "006eceb18db3857dd74a0a84ade43a95",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "2c98fd60e3491169c92d8c19cf993dbf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "166b2fe313ead205b223460ff646cd1d",
"/": "166b2fe313ead205b223460ff646cd1d",
"main.dart.js": "3ac1ccf28a6db93a0fe3e7b7533fe7b3",
"main.dart.js_1.part.js": "c3ef36165fa2eeafffa2b39d0194ca8b",
"main.dart.js_10.part.js": "80e9633d201c5fde975dc32fc67132a9",
"main.dart.js_11.part.js": "f57453bf9bdd07444bc6e25ffd4740ad",
"main.dart.js_12.part.js": "6911088eb27dac56f46fe13ccc55282b",
"main.dart.js_13.part.js": "c2cd2c2d9fc20477f1305287a6b6ccc9",
"main.dart.js_14.part.js": "d9899082d336fc2aeac337e90a679335",
"main.dart.js_15.part.js": "c124ef57adaf781f6d8989732699d114",
"main.dart.js_16.part.js": "19efe28d8406e3bf2c706a4f3db6e068",
"main.dart.js_17.part.js": "bb88f1988db9c0c5c55a6b27fc33ef83",
"main.dart.js_18.part.js": "567f71cd7a6e116921e18ac1d8e019dd",
"main.dart.js_19.part.js": "7340381a5475c2fa68ba6129fcde88d6",
"main.dart.js_2.part.js": "2411d9094359b69c90c5674b1a80776c",
"main.dart.js_20.part.js": "db3f120476fdff7ca5101c66f2f164a6",
"main.dart.js_21.part.js": "62217187345ee4e5ec9084c9a65c6dc0",
"main.dart.js_22.part.js": "a86bab9660ad75e5849c3d6c20e10a32",
"main.dart.js_23.part.js": "5b4e81a0435acd7a9d4b31e6a107c412",
"main.dart.js_24.part.js": "374ffcefdd5b5dcabd85b74e01ca173d",
"main.dart.js_25.part.js": "31d9ba890b4ec582043bf50b537c50c5",
"main.dart.js_26.part.js": "fce4b8e792f405a733d0a7f898707c63",
"main.dart.js_27.part.js": "65157e26191f71b0c1727b2aa5a2c6b2",
"main.dart.js_28.part.js": "d73fdb0833a3245059d44e8b4e2ffce9",
"main.dart.js_29.part.js": "02f3d6bb9227ba6811ec5fafaa9a85f5",
"main.dart.js_3.part.js": "6d824262cafad6759699e8456d03aacd",
"main.dart.js_30.part.js": "f8fa40193a79e76d34c1b1656b18b2cb",
"main.dart.js_31.part.js": "4a5fb9e40f4c8682398e89ff99f44736",
"main.dart.js_32.part.js": "019bf94e55f0d3f155172266464b87c0",
"main.dart.js_33.part.js": "b1c2b6411bbad608e86a59f8d3cacd4a",
"main.dart.js_34.part.js": "29c9548a469812dd867ce2699f89aeea",
"main.dart.js_35.part.js": "884615a9de6d698b6568588092148417",
"main.dart.js_36.part.js": "a7f9c32a9830cb9757030a981232514e",
"main.dart.js_37.part.js": "6511ff8d73a15377516f7de98cf30be0",
"main.dart.js_38.part.js": "853f73d362175ee1c7257ff71fb65b8f",
"main.dart.js_39.part.js": "cb9903160479df9e2929ba3c72b8295f",
"main.dart.js_4.part.js": "7aff68701e3afaf9aadb24bbf031d40b",
"main.dart.js_40.part.js": "9f8cb3abb9a23b60abcd3d7b66c54477",
"main.dart.js_41.part.js": "177bddbefa50f80ec9a0268f446b0ec7",
"main.dart.js_42.part.js": "8fe2e1348c6707a2f3f13a41508be7d5",
"main.dart.js_43.part.js": "fbc87bb83589f28bd7b84178eb12a5e8",
"main.dart.js_44.part.js": "5ea531c3cfeb9093cf0b2ca792f649f9",
"main.dart.js_45.part.js": "ee23cf511a62d0dea610f5a07b238421",
"main.dart.js_5.part.js": "c59f47f46b1fc7c1ae92fb164121c734",
"main.dart.js_6.part.js": "7171e67fea6832093314b8979a6c2d05",
"main.dart.js_7.part.js": "97e67806c935513a17d581e307efadc0",
"main.dart.js_8.part.js": "a9d4e1ff29b9ec4ef96283e03adb8076",
"main.dart.js_9.part.js": "78938b46f91c5f56fdbe9183c11471f9",
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
