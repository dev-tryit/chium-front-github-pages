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
"index.html": "fa215a15b76e980985982b77cd85fecb",
"/": "fa215a15b76e980985982b77cd85fecb",
"main.dart.js": "1ea9c1dbe4f27ba475667a80f91d9dc3",
"main.dart.js_1.part.js": "6d7672692848124fd32b8b88f06e916c",
"main.dart.js_10.part.js": "9aa283f4f43dd78fc079e7485b1ccda4",
"main.dart.js_11.part.js": "8bebe5f871cd20c0c7059bf132bc5cb0",
"main.dart.js_12.part.js": "861a22f574650dd8162353d33beb2c2d",
"main.dart.js_13.part.js": "4515e4c12a1dc9d9aefbd63ac2138e94",
"main.dart.js_14.part.js": "44487557d0ed50bbb71d7fcbd5bb4265",
"main.dart.js_15.part.js": "8f4fee215da0c4bb34675d1271310355",
"main.dart.js_16.part.js": "1f5e4e4975ec5b701ab5e0a6abd3a03a",
"main.dart.js_17.part.js": "331eb57bb56ccb90be39da43eb337402",
"main.dart.js_18.part.js": "bf2710cf0658901b18ffeafb1bb23071",
"main.dart.js_19.part.js": "9463e1998dfc7e55ba60ea73fbb3b3ca",
"main.dart.js_2.part.js": "3a4d38bcfe853af9c21209ea0a89d806",
"main.dart.js_20.part.js": "272e0169b07e8e63f0f8435fc139037f",
"main.dart.js_21.part.js": "162b8f5737973477e6675bc48d9a0752",
"main.dart.js_22.part.js": "e175aeda54c67b0212b3763b235d20a0",
"main.dart.js_23.part.js": "9c87c159f43b99b5231aaf08de91e72e",
"main.dart.js_24.part.js": "092a118c49b8c476fe052cff698d2427",
"main.dart.js_25.part.js": "de1c9e066da4611a2105870685160d8c",
"main.dart.js_26.part.js": "694e51b804344fe552977bea434b7190",
"main.dart.js_27.part.js": "23c15da8c07d3aaf18ce4276ecc28749",
"main.dart.js_28.part.js": "05a4f88f76b4e0bb0da866924e8166af",
"main.dart.js_29.part.js": "8c75390424546e265d30bfae7f0f5269",
"main.dart.js_3.part.js": "64b59abf408ddf236f2996972bb3c237",
"main.dart.js_30.part.js": "82da52eb400877a1b501fbf24b2ccc38",
"main.dart.js_31.part.js": "73051fb60935e0b4e041efa65678282a",
"main.dart.js_32.part.js": "729df2fa2a839a44ec7d10cbd261d2cf",
"main.dart.js_33.part.js": "841705c70329c1f14a51a91ec2f6ef33",
"main.dart.js_34.part.js": "0e1f0df285e19ac876d92205786e2551",
"main.dart.js_35.part.js": "192db323a304afdb33d74ee3cc7d9852",
"main.dart.js_36.part.js": "41d9a61b2baa90de9a41726ada612608",
"main.dart.js_37.part.js": "90264e971192a74b61ad33229839544e",
"main.dart.js_38.part.js": "df1731c53d6a8b1db96bf4719187868c",
"main.dart.js_39.part.js": "116e070c928468adadb38d7a3f4860d4",
"main.dart.js_4.part.js": "b9c5711056e7be28c971ca9cecfa6dac",
"main.dart.js_40.part.js": "a9a9df78343b54b287a9e3c35f2adccb",
"main.dart.js_41.part.js": "b31120f55ed63e73426c00c84be0db5e",
"main.dart.js_42.part.js": "7ecdaee9abf74471a8eb6e81dc73e729",
"main.dart.js_43.part.js": "524b87defdc782e02cd75df0094eedd7",
"main.dart.js_44.part.js": "5b0d8481ebced8870e8d466aea681856",
"main.dart.js_45.part.js": "9b22aadbf0d9c6fa802eab1dbbfe0ea5",
"main.dart.js_5.part.js": "801affbeab38f404e43860ca5c0cd132",
"main.dart.js_6.part.js": "3958e6ee2c98ba699c0e9bf5fdd93aee",
"main.dart.js_7.part.js": "c26d60720081ebf45bda5d67cc5f9108",
"main.dart.js_8.part.js": "473c86025186ad708b262be1b9de13c1",
"main.dart.js_9.part.js": "e81160ca96a8b7310cfbf5ece8b8a0cd",
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
