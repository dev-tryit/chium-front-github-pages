'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "549b3602bd2d0bd528f53ae0674b7e3c",
"assets/assets%255Cfonts%255CSpoqaHanSansNeo-Bold.ttf": "44915dd2aa382dd0825979edb58f9bce",
"assets/assets%255Cfonts%255CSpoqaHanSansNeo-Light.ttf": "9bc693a211b5d25df7cdd1dc6400ec14",
"assets/assets%255Cfonts%255CSpoqaHanSansNeo-Medium.ttf": "1dfa0cf43aa2bb4bccfcb1205d7d8aca",
"assets/assets%255Cfonts%255CSpoqaHanSansNeo-Regular.ttf": "8c97bfe4fcf47c1060fae39c0a081056",
"assets/assets%255Cfonts%255CSpoqaHanSansNeo-Thin.ttf": "adf58f1a8984702afc3f42a694e1bd76",
"assets/FontManifest.json": "ed0876a6096782b5576b2c9c1d987884",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "35d765bbe1d9cce218605542dcd39b13",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "0de1c3d994cb7f859725e5098be1841b",
"/": "0de1c3d994cb7f859725e5098be1841b",
"main.dart.js": "5343170fb331df04722fe1ab952f7891",
"main.dart.js_1.part.js": "3dc2be391cecf90bbd23931d298d5f3a",
"main.dart.js_10.part.js": "15431bbd6c5bc06cf0275254badbfb46",
"main.dart.js_11.part.js": "86d49c4ba056440d95885e31a858d2b3",
"main.dart.js_12.part.js": "8bd3ebc317b261fbff8e9d9eb590e11a",
"main.dart.js_13.part.js": "5ec08b9db7a4b07d4443cf997ddaa3aa",
"main.dart.js_14.part.js": "5e6bb6b1f12dadd7ad590dd01959bcce",
"main.dart.js_15.part.js": "a2708d7ddfa06cdafb4d74d4c150fc44",
"main.dart.js_16.part.js": "f6bdcd7d753d314cb0871f1733819c89",
"main.dart.js_17.part.js": "ec73b4e1f023c67c41d10284ac73baa3",
"main.dart.js_18.part.js": "f7a500eb675f2bc10c886f0f73992845",
"main.dart.js_19.part.js": "34176e0ade9a1dad687f347312ba2a53",
"main.dart.js_2.part.js": "b94609556ac67f0b7b6016ee304598ad",
"main.dart.js_20.part.js": "5659ef420020579abe2afe3b46e41b63",
"main.dart.js_21.part.js": "086f1b68ad015779e0637c3019cca9e8",
"main.dart.js_22.part.js": "a08ad5d5f33f49b1e842bd19c6315432",
"main.dart.js_23.part.js": "73f7353d73753821fc67bb9d153fff60",
"main.dart.js_24.part.js": "8b6826178f9aedae16ea6e108bb0b9d3",
"main.dart.js_25.part.js": "3091e831e393d5d2d20d20e39976f4d2",
"main.dart.js_26.part.js": "5c0bb605910a553bcd18fee1b41b1861",
"main.dart.js_27.part.js": "f31d53dbcce8575aaa620b1288cbc92f",
"main.dart.js_28.part.js": "03fa2cc9f69d659f329e270737a0aedb",
"main.dart.js_29.part.js": "114194aa431723e2f7cd41c1a5670de9",
"main.dart.js_3.part.js": "86cf88136a3f1a80edd25153d946c089",
"main.dart.js_30.part.js": "44eec600b5b58bff24b83dd2085a506a",
"main.dart.js_31.part.js": "765df1fb82b7d8720efc8bfc9ad347dc",
"main.dart.js_32.part.js": "ef35fe2b7b3e5ed73a35b77ec47591da",
"main.dart.js_33.part.js": "6d6a7976ca3e7aebb43e6d504eb3779a",
"main.dart.js_34.part.js": "5a5fbc052cca4ffcacc0cfa81466adf5",
"main.dart.js_35.part.js": "d82caaf4b729a135d2fef0a3cffe2880",
"main.dart.js_36.part.js": "d09db9464d4a94e261eae90418598ad3",
"main.dart.js_37.part.js": "1cd89b8be57627298dc4df16dac97288",
"main.dart.js_38.part.js": "3bb50e35c88f1067aaa224d75824f0d7",
"main.dart.js_39.part.js": "8855e0c6e591a29bac62a86149596ce7",
"main.dart.js_4.part.js": "e8fd88f41a2248cf3753b7862129d6be",
"main.dart.js_40.part.js": "a7620ad762b65e7b1e4d4bfb747a535f",
"main.dart.js_41.part.js": "517ddcd8d1cc873e0e6a7a99c52aefe3",
"main.dart.js_42.part.js": "7ecdaee9abf74471a8eb6e81dc73e729",
"main.dart.js_43.part.js": "524b87defdc782e02cd75df0094eedd7",
"main.dart.js_44.part.js": "5b0d8481ebced8870e8d466aea681856",
"main.dart.js_45.part.js": "9b22aadbf0d9c6fa802eab1dbbfe0ea5",
"main.dart.js_5.part.js": "15586b3ea37c666cbe2143de6967b819",
"main.dart.js_6.part.js": "b6bf8093bbc26bc99aca1545c6660ce6",
"main.dart.js_7.part.js": "0bebe9357b888a9d06a888b7502f09d8",
"main.dart.js_8.part.js": "8a3f36c44ef2a1f15d36e108bc48cf87",
"main.dart.js_9.part.js": "bce02bde280ee5bd165d81c8a95636f2",
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
