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
"index.html": "40983c910b06c1a103d8456c25e06226",
"/": "40983c910b06c1a103d8456c25e06226",
"main.dart.js": "aa5a01ab2d038e43d0ffc0ee79334425",
"main.dart.js_1.part.js": "a44543f8d8f0ce81b4b9d9db22c7ccba",
"main.dart.js_10.part.js": "7d82254467cca1204aab695d46e59fd2",
"main.dart.js_11.part.js": "ffb52e30cb0fd7c394b8e228e4a81225",
"main.dart.js_12.part.js": "b6aa312b333fb2d6c70dec7c46889d60",
"main.dart.js_13.part.js": "cfbe4a840298899a880aef1f4fb64d30",
"main.dart.js_14.part.js": "806ef62e5511c1cc813c6e7fa5aab3a6",
"main.dart.js_15.part.js": "284323df901c87d0beb30948753c3eee",
"main.dart.js_16.part.js": "147c29568b36e15004c4b4e080a7db5d",
"main.dart.js_17.part.js": "648d5c6b00d70398c897cdafdf7d2274",
"main.dart.js_18.part.js": "f8213ac57d9e0f819acd872c7aa97b9e",
"main.dart.js_19.part.js": "9058f4f4132952dbcbd709a5fc70297f",
"main.dart.js_2.part.js": "ccee9e9187bde80f544a1dcb6d136cdc",
"main.dart.js_20.part.js": "6788cd7222d98817f08068909d73f41b",
"main.dart.js_21.part.js": "bc4043192b72d55a2b53afea722fe56c",
"main.dart.js_22.part.js": "279d16574815c197aa9ea8144c1e0ffb",
"main.dart.js_23.part.js": "ccde9e8b3270844964744b293f94bf6b",
"main.dart.js_24.part.js": "628ba0b96f4e9aa6f8c89b0809af70f5",
"main.dart.js_25.part.js": "830fa2bfc04c0449a66b73389187f9ed",
"main.dart.js_26.part.js": "e601bbcff03da71d79118d03d2053c84",
"main.dart.js_27.part.js": "99d0645b210fdd31660f04853c41e138",
"main.dart.js_28.part.js": "81c7903fe39fbc7ff30daa8137d5af1a",
"main.dart.js_29.part.js": "48f3bc5d6ec358bca18f139ca6b8eb78",
"main.dart.js_3.part.js": "ec6e0af72825ba586022e42ff8457770",
"main.dart.js_30.part.js": "43e9ca848b0f7d08570b700b03e9d40a",
"main.dart.js_31.part.js": "4d4b04f9cee1e2d518a989af6514c558",
"main.dart.js_32.part.js": "057df87d93d3187d64d1a37813c3b029",
"main.dart.js_33.part.js": "c5f83b8a9efa10e1218dca78edea9b86",
"main.dart.js_34.part.js": "327451a3b14677a49a4757532441da31",
"main.dart.js_35.part.js": "eb24931eda12639f04a5ec7a8e8e0090",
"main.dart.js_36.part.js": "fe3ef75ece3372890a21a51475fc1d25",
"main.dart.js_37.part.js": "29ddfaa3f28b28ffe02c1ed58c068a15",
"main.dart.js_38.part.js": "df1731c53d6a8b1db96bf4719187868c",
"main.dart.js_39.part.js": "116e070c928468adadb38d7a3f4860d4",
"main.dart.js_4.part.js": "dcc47b39e622e99496bd7af2e3e3727a",
"main.dart.js_40.part.js": "a9a9df78343b54b287a9e3c35f2adccb",
"main.dart.js_41.part.js": "b31120f55ed63e73426c00c84be0db5e",
"main.dart.js_42.part.js": "7ecdaee9abf74471a8eb6e81dc73e729",
"main.dart.js_43.part.js": "524b87defdc782e02cd75df0094eedd7",
"main.dart.js_44.part.js": "5b0d8481ebced8870e8d466aea681856",
"main.dart.js_45.part.js": "9b22aadbf0d9c6fa802eab1dbbfe0ea5",
"main.dart.js_5.part.js": "00df07c4eb265048627a02d5a32974a9",
"main.dart.js_6.part.js": "2f09ed171934e8e55c0f588a1ee74134",
"main.dart.js_7.part.js": "4701527c1086ffde4682a02be9eb4b8d",
"main.dart.js_8.part.js": "d750198da019fc4f5979314327aa6038",
"main.dart.js_9.part.js": "026700901137a242ec8625b2db25fe40",
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
