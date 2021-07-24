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
"index.html": "5df2d6b5e36ee15daab991145ea03708",
"/": "5df2d6b5e36ee15daab991145ea03708",
"main.dart.js": "1d67e35f12fbfdd608a41f3678415356",
"main.dart.js_1.part.js": "f55980a4dbd5cafb86ec304ce3f02648",
"main.dart.js_10.part.js": "f37da6344ebf5bb94acdd82751c95e16",
"main.dart.js_11.part.js": "fb072582bbf80658525151b063a5f401",
"main.dart.js_12.part.js": "6c9ef306a5c284e8e7793f158b7430ce",
"main.dart.js_13.part.js": "2f168c3e050a224abe68a8e16bb5ed3d",
"main.dart.js_14.part.js": "c3f35425d941e2d7be66511ee03488b2",
"main.dart.js_15.part.js": "f4a450086c85dcc36a257b815378017e",
"main.dart.js_16.part.js": "8d84ff8f8fc5a401bd96fdbbd20d1f5a",
"main.dart.js_17.part.js": "5b5483312e1f6754a4ddea2362681252",
"main.dart.js_18.part.js": "513247557605d02c0678595a8257d6cf",
"main.dart.js_19.part.js": "513f134e32f22a6b46a981475f8506c4",
"main.dart.js_2.part.js": "34520831c3c94faf2862148cc8d752bb",
"main.dart.js_20.part.js": "aabb9b722070e90fd20ea7975693dd4a",
"main.dart.js_21.part.js": "254dc4af866d8e92519f615f8dd860c0",
"main.dart.js_22.part.js": "8b5bbece9b5da08b25698f0c6ff5f0f9",
"main.dart.js_23.part.js": "f224f08755f3f9c7223811a6c73c6457",
"main.dart.js_24.part.js": "9b63ec4c144b311c489c08ac28ebb516",
"main.dart.js_25.part.js": "26820734bd73a3c35c4220cbd8af76bd",
"main.dart.js_26.part.js": "4e23de2f338267c54f7c7cc708c153bc",
"main.dart.js_27.part.js": "77dcc6f7faab23672b205cc35208cf46",
"main.dart.js_28.part.js": "3e838ceabd84be86f4b20b090d5541ae",
"main.dart.js_29.part.js": "73c2f6ecb546ade5d5a8ab2535a6b687",
"main.dart.js_3.part.js": "12e04ad170022b19d1619f9dc27a2dba",
"main.dart.js_30.part.js": "6e358ada334007264412d62eb69d9cbe",
"main.dart.js_31.part.js": "2a00f287075ad6ab4fbda5d0f8e71056",
"main.dart.js_32.part.js": "496c1520170133465f7fe13ede690abf",
"main.dart.js_33.part.js": "2537c4e62549572c673069f5fad16f39",
"main.dart.js_34.part.js": "87ab496f441f54167c6380c09ab6734f",
"main.dart.js_35.part.js": "33157071d85733e9be735eddd4061737",
"main.dart.js_36.part.js": "0e8415cb6f0d57023c011abe10a49143",
"main.dart.js_37.part.js": "08999df118f73a2d9df90533df647ff9",
"main.dart.js_38.part.js": "97e42097ee25380ca27a19881dc14a84",
"main.dart.js_39.part.js": "66b12586347cc464d203d49587542896",
"main.dart.js_4.part.js": "ed97d86bd482bf284d7ab0f0a6310b0d",
"main.dart.js_40.part.js": "15d7dc31ed9f32f16e685bb08e49cb83",
"main.dart.js_5.part.js": "68015b749c03d51862ed8856b4a251ac",
"main.dart.js_6.part.js": "9aa0cb76dae143cd000c4075c8c7487c",
"main.dart.js_7.part.js": "ea98e37d4127c54cf4d42f1736498705",
"main.dart.js_8.part.js": "ff59afa1a813d80b9623d679f7fc723a",
"main.dart.js_9.part.js": "ccc10b846e671b01ad5b26dbf59e026f",
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
