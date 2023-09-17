'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "853695115ad2dac90921094b8d0a268c",
"assets/AssetManifest.json": "2788290e26418c3d532f54e84e9e1974",
"assets/assets/images/airplane.png": "8fea58b79a7f1dfad3d5ccb66a151903",
"assets/assets/images/app.png": "50aa6bcaba0065c9b3b81a9cf4c9e6b9",
"assets/assets/images/Background2.png": "e1923cf676a5439428802ccf72cddf51",
"assets/assets/images/BlackWing.png": "09cd03710e7dec6b73e22e62b11b2bdb",
"assets/assets/images/BlueSquare.png": "60b2cd7659885d655147d4d0fa2c51a1",
"assets/assets/images/bootcamp.png": "38222e575f18a728390f49af7dcd892f",
"assets/assets/images/CharterTool.png": "813bc3f106ae776d111b634f81e0f871",
"assets/assets/images/competence.png": "1ead9e9f8caa05818fbbe8bdc65e5536",
"assets/assets/images/data.png": "15704b86f0e46d681c63133547431074",
"assets/assets/images/Drawer.png": "74520af1ec0806066c6c7d94fbfdba63",
"assets/assets/images/Envelope.png": "e8cf5101d8b09d86dfd1f66cd84c9a1d",
"assets/assets/images/First%2520Background.png": "e9ae0adf8d19bcd455f5ef615740d4b6",
"assets/assets/images/FirstBackgroundLeftSide.png": "4f6467351ea9888514bc626475809496",
"assets/assets/images/GitHub.png": "f8e478d57208936e82406bd02de9cd8d",
"assets/assets/images/GreySquareYellow.png": "0ecb20704aaceb43a4dc620396cbeacf",
"assets/assets/images/InvertedDrawer.png": "168a826a09dc231a76decb5563e420a0",
"assets/assets/images/IT.png": "573795ebfa9abe7dde43c7448f76f335",
"assets/assets/images/J%2520code.png": "748f35bd685b34c82839b03b9677efe6",
"assets/assets/images/LeftRectangle.png": "89855e3c871d77a238cd7f55acde6d2f",
"assets/assets/images/LinkedIn.png": "80233e08d07beb55f999279b7b7581e2",
"assets/assets/images/management.png": "30458de1f790b9451a75e400138d5144",
"assets/assets/images/Permits.png": "ca51538fef21c2949214e3ecab434e6a",
"assets/assets/images/Phone.png": "6443a57145a890c5eb0120827db05f85",
"assets/assets/images/PM.png": "6016fd4dcd4bb0a19f04e022850d479b",
"assets/assets/images/profile.png": "2ac687aede05c1a0bb69b6686df33b0b",
"assets/assets/images/profilegif.gif": "873cc208870b1e1e6b826db370012ee3",
"assets/assets/images/RectangleBottomRight.png": "5957e986c27667a31dd9cd87cce07c47",
"assets/assets/images/safety.png": "89d4a7796b3690cd0e5357fee8d3be54",
"assets/assets/images/Team.png": "fce3e1ebc3b3a3671b4e3dad03e3391f",
"assets/assets/images/Third%252520Background.png": "331acd9447bfd04fa090d62fc62cdec2",
"assets/assets/images/Tower1.png": "7725c012fe6d299822b46f5582309684",
"assets/assets/images/Tower2.png": "fcf88012534708ce1dd53208bb42a216",
"assets/assets/images/Tower3.png": "2119c1aefcb9ec1fc8ca2f538a31f8b0",
"assets/assets/images/TriangleAPW.png": "284909b95e651ef96c6eabf39936da21",
"assets/assets/images/TriangleFaceLeft.png": "c5db856b57df9c84cd974ea89764d2f9",
"assets/assets/images/User.png": "814c54e06379f664e6a538bd7b8f2eee",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "adc8a902446c861c8d09f75511a2114a",
"assets/J%20code.png": "748f35bd685b34c82839b03b9677efe6",
"assets/NOTICES": "291095c82a385d12388a0e04607fffb5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/J%20code.png": "748f35bd685b34c82839b03b9677efe6",
"icons/jcode-192.png": "5069ad8fa5ddf725ed5b086c5ed594e1",
"icons/jcode-512.png": "61fb8e401469d2d74cee4b39709675b0",
"index.html": "fe4410b33a16b4c137888b69c7204280",
"/": "fe4410b33a16b4c137888b69c7204280",
"main.dart.js": "dcb3b4f81b4688819d39225f0cd65f60",
"manifest.json": "144cc88d9622be70e7131c7be2fb416e",
"style.css": "2fe3755107f70dbb3edafa931671eaf2",
"version.json": "5fc10240b73452c6a64964c44206397c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
