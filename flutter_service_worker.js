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
"index.html": "53d07bef2eff3778dd1bcfa0e0440495",
"/": "53d07bef2eff3778dd1bcfa0e0440495",
"main.dart.js": "48f62aaf7ae88d53a9b41d22a6d50c4d",
"main.dart.js_1.part.js": "3bd21d7fa0aa8ddf663934aeb3d9bb45",
"main.dart.js_10.part.js": "59fad985dbfb0d7f19ba4bc387662f70",
"main.dart.js_11.part.js": "f49b5e9fea9183027aa4a619d7d6fd61",
"main.dart.js_12.part.js": "ca4973ee599cd55a70acb810349af1c2",
"main.dart.js_13.part.js": "33cba0d61126878e28881d0dfce7106b",
"main.dart.js_14.part.js": "b2b6926e940c6ab3f127da32f881ce01",
"main.dart.js_15.part.js": "5e949259551d599a5ac61372337d76aa",
"main.dart.js_16.part.js": "9668cad5cbea0344005e599dc014ba81",
"main.dart.js_17.part.js": "f5bc2115d4889a890238380d8d87d1e3",
"main.dart.js_18.part.js": "e43c2d3194fc8704c8cb6260acb6cd7c",
"main.dart.js_19.part.js": "5c2f6fd7caa326fa98cb577c27069e02",
"main.dart.js_2.part.js": "4c653667125799dba82dd1b8e2bbe375",
"main.dart.js_20.part.js": "340d9455adfc1ccfe12c94f9044c966b",
"main.dart.js_21.part.js": "f5902139f9fa258a9e40ea2172a63c51",
"main.dart.js_22.part.js": "2c6ccad740eb768e9d6fa07f94d01ce6",
"main.dart.js_23.part.js": "41ed67e4aebc1a4dc5214182b034d31e",
"main.dart.js_24.part.js": "5fa7d303a45de6cd53aa0ef3c9e61acc",
"main.dart.js_25.part.js": "82ab9d1c969ba3bb0435633792c456c6",
"main.dart.js_26.part.js": "2e229b2b3ed2019fcc6c175540fd3d2e",
"main.dart.js_27.part.js": "d40d27d90dd82ad789241733f788017e",
"main.dart.js_28.part.js": "2826add494e59201e065b023e3b5f71e",
"main.dart.js_29.part.js": "b5d86b303fbb9ee248f7fcd3fa694eda",
"main.dart.js_3.part.js": "70da62eaf832ed9f390e8662ca0129e5",
"main.dart.js_30.part.js": "5300228d713e06c5bb968fcfbd6ca5a6",
"main.dart.js_31.part.js": "c8d38e6eb4952cac53cf834450861d1a",
"main.dart.js_32.part.js": "707e62207b3cf9f91335f35c38a0668e",
"main.dart.js_33.part.js": "d31e53f58cd437bda32c1d16ea504448",
"main.dart.js_34.part.js": "e3aa5e2fa54e72c6ce06d2bb90cb43b6",
"main.dart.js_35.part.js": "c929c47f18e152958aee367f3f1d8e40",
"main.dart.js_36.part.js": "f6181d06733d40fb72a4f23a0e507828",
"main.dart.js_37.part.js": "08999df118f73a2d9df90533df647ff9",
"main.dart.js_38.part.js": "08999df118f73a2d9df90533df647ff9",
"main.dart.js_4.part.js": "8fafb45227d167c02b726f8a5aa0b56d",
"main.dart.js_5.part.js": "11a6e953abff130331b69b05d17d487d",
"main.dart.js_6.part.js": "63f5480941262976c5bc68a26b8167d2",
"main.dart.js_7.part.js": "b7df606889a0cc39f52874bd6d10b288",
"main.dart.js_8.part.js": "6393a7ecfb7c6fb6a71c2895a8f1a473",
"main.dart.js_9.part.js": "85274333993abbf67316303cdfacba4c",
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
