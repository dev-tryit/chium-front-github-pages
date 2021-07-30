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
"index.html": "c6380224fedbe23a2fa8ea9b1b597aca",
"/": "c6380224fedbe23a2fa8ea9b1b597aca",
"main.dart.js": "c4e94cf5b6993debfcb7889ad36090af",
"main.dart.js_1.part.js": "d6c7b6342ded819810d6332330432a32",
"main.dart.js_10.part.js": "e950a27831607fc58ceae433862353a6",
"main.dart.js_11.part.js": "f6c9082f9622df8407f7549daef76abf",
"main.dart.js_12.part.js": "8988c6f1f67f9453f5c836a9bf28a95a",
"main.dart.js_13.part.js": "414b43ed01c6a6e1c4b3af9b50ddfb3e",
"main.dart.js_14.part.js": "042df0d1f4fee29da38e0bba18772722",
"main.dart.js_15.part.js": "575072edf15b01328d1efce82b73c4aa",
"main.dart.js_16.part.js": "7dab85e1cd6f39d4b5bf01b4419a01a4",
"main.dart.js_17.part.js": "e71996e5b80214e8cb319b0cc5b90990",
"main.dart.js_18.part.js": "d776847032d68911c29035b0a9ae03a3",
"main.dart.js_19.part.js": "2155f5a71aaeef111c3f84044b65efa0",
"main.dart.js_2.part.js": "9647cb19150efb99a192b5cb42ebf35f",
"main.dart.js_20.part.js": "6db713e1fb77bc9ef8607ed3aa0aa1f9",
"main.dart.js_21.part.js": "01e0f019c001685bdd044ea21560628a",
"main.dart.js_22.part.js": "f6425196f8d0726963345c6994a37a9f",
"main.dart.js_23.part.js": "2856a04df9f9c310b7811af417fe9560",
"main.dart.js_24.part.js": "42e95a0bfb490adad9dfbc8bbe4c245e",
"main.dart.js_25.part.js": "38be5633981ca5ccbcdb66c870cf5ba1",
"main.dart.js_26.part.js": "75082929f5497dde676225142e21cde1",
"main.dart.js_27.part.js": "78417ec4dc3d7328a1268b5491a6ce77",
"main.dart.js_28.part.js": "435929a31310962995f71f548a64ce1b",
"main.dart.js_29.part.js": "b793b16071eac4ce44b3e3672f6067cc",
"main.dart.js_3.part.js": "9b9ef14deb107cec8b8fdfe3fba69905",
"main.dart.js_30.part.js": "140e541ce4d961fa05d4599b136a4ff4",
"main.dart.js_31.part.js": "65b665188609f48de8de172d92bf2718",
"main.dart.js_32.part.js": "84da3bf1066148e67f61d2bb1f9d5a6b",
"main.dart.js_33.part.js": "7c04844595868835d48552281abfd9f5",
"main.dart.js_34.part.js": "7fc3e299b506806e624fdb8d616ebbeb",
"main.dart.js_35.part.js": "27219e162eab5a1b98c7ab72c002c2a7",
"main.dart.js_36.part.js": "0dc9fa80ed2a508ff33f1388bae82830",
"main.dart.js_37.part.js": "a9d494847ac7619140c9adb602a82ed6",
"main.dart.js_38.part.js": "9d6e8d70dd708059f8be58ba4e68b196",
"main.dart.js_39.part.js": "26cfcf668da25c607b6e40794c95b815",
"main.dart.js_4.part.js": "04694b939ce0751ec97c85b0f0a26c88",
"main.dart.js_40.part.js": "1098d732066539ab032cdb97e98d6a56",
"main.dart.js_41.part.js": "177bddbefa50f80ec9a0268f446b0ec7",
"main.dart.js_42.part.js": "d5ddb79d2dc56c316560f154de81450a",
"main.dart.js_43.part.js": "fbc87bb83589f28bd7b84178eb12a5e8",
"main.dart.js_44.part.js": "5ea531c3cfeb9093cf0b2ca792f649f9",
"main.dart.js_45.part.js": "32a0faad1d1d7ef895a7fe864ba413a6",
"main.dart.js_5.part.js": "c59f47f46b1fc7c1ae92fb164121c734",
"main.dart.js_6.part.js": "72f59dacd725bf4e28c783edbc91e72a",
"main.dart.js_7.part.js": "a319407be14691ca474d76cc0dae8c91",
"main.dart.js_8.part.js": "3a441514949b27fc7c56a0310fabfcc0",
"main.dart.js_9.part.js": "502b9d6041db3665f10c7eddb667a1cb",
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
