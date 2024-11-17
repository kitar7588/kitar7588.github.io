'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "0fc2090fb3835e44a682abbfab294034",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f7ed224e05961c7523ab1d3c7ae23e62",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e15bfed1f69396307f6f59fc66fc0559",
".git/logs/refs/heads/main": "f9df4d347294076cfc47e5900d9bd740",
".git/logs/refs/remotes/origin/main": "9b793f39e312be10f919ce8da12c1438",
".git/objects/06/f4aca55dfa26ad25ba13142747c126c036d748": "7e3f91c0eb9de8b094fe038476a0a59e",
".git/objects/0b/d8f82ebe17d1b91dddf3a12a10b610f9bfb4c9": "884a5b8cfaa75724e136cd669aef2259",
".git/objects/0c/3c7255320892b15f3bd90b0adf3c9ba6e611b0": "eb21da85f0ffcba51ff557fa538ee248",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/23/759445ed0c8d281f6ae2403a2815b8750bba54": "47cd5b873e6ae8f4f165ecc3eba676b0",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/43/53a415e616f2ce89384c25c96488d249e4b77f": "72bf00a418d40ae182a075877185557f",
".git/objects/47/6c8b6e715795b7f2a4280b591495145baa225c": "d40b98a4deeb1b0634c25373d1281aea",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4b/67dace85bd430cdb772dc2c63fdbf2c6353451": "08f50a4d63e0997b36105e213709e073",
".git/objects/50/bb7b32316aeba2570beb818ea75cefbab5668b": "f8e1bb1f85aab0c15021e8c7369a2045",
".git/objects/52/3a40b4727048a967c76a8baa03065a68e373d2": "7524c0be88ca483484d7070a108da394",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/dc7c60ad6660e098633f52ced2100a193974bc": "9a640ceabd0cf113ed2d6e74ce1a1cf2",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/64/136a00dcdd9e93ab5e8654bed512d27bc63746": "a80c9a769a431823132f8b0786e4ad38",
".git/objects/6d/cf5a574a2fa37bfa1c23d18eecf6a9fc83b39e": "1238606ff21dd5b13d28bec4e8b23788",
".git/objects/70/07ab3a55a92c1c7cebf54a6efb7136d9aaec8f": "28a77916effca87e5dc7b508cdd34f66",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/7c/fb71cec09ec11ce3db18663edc02d8c31a3f4a": "cdaa9766314eb5eb65d6f28bbf72151b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/72f9d22d27f46e080a969e1fb3f06c856146c1": "13c772b4fd07799204c438b842e7c4ea",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/93/da4b848a7c264c697d3117458949543785fb5f": "6299382ef640121f6e404a76dc365e2c",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9d/8c3c1e758ef8711186ae12fb0fd22aaa0f70db": "a391c0384d1cabd19155f2907d961b09",
".git/objects/9f/ef5e0e8b3f11c5c73cf5c1258eae83239c71b4": "8694e66d7d4df1eb2e26642a0cd46dc1",
".git/objects/a6/c9d52502bfb155bd7e3d177f8e90f67f262d06": "7d51fdb17a3d515fb2a45025fdc84e6d",
".git/objects/b2/10f373f73473b4d38fab6dc8a0440be9fe6100": "07ebc209b83338c5dc231d433e75abd3",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/15d3f8553d8e7f82a618669637e8d5ac600efc": "b27f41140c0fd22674fd1d1fcc5468cb",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/8987f0eb17af818b515f6cb374f949cb5863c6": "32f1a03cda89920f75a83ca99f2f00d0",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/ee729e36c69ed5841c1404d3182c7e53aadfa8": "957d1c6ee4fdc7466e157006914a8c33",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/1bdc19f1c019c41d203dbef8fc1e37bb762de1": "668b911175fa37596f613392db87e040",
".git/objects/e4/2d219a3bb6c4d5046358911fbfca12cffb9731": "a27f8dbbfa37d258cf266b06c84f632d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/fce7c64e673b717b7950a6a2d29ef51094fbc9": "54fca2101f67647a9253d377b0ebe4f9",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/130a3e2823b9aa98c81c94c295a7a598e664e6": "da204d0b84e04a18a02e7894294534f0",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/main": "c04aae255cf70a65db25f27afaeea72b",
".git/refs/remotes/origin/main": "c04aae255cf70a65db25f27afaeea72b",
"assets/AssetManifest.bin": "ff809715ecf224c81691c3165b27542d",
"assets/AssetManifest.bin.json": "7c9fd4229381021fbe013fc0d5833444",
"assets/AssetManifest.json": "293f9a3cbc5c9816375b115a8f86a3d7",
"assets/assets/images/deer.png": "07ee3eba426eb8bf24863c0a46a0099b",
"assets/assets/images/icons/3D_art.png": "6d2fc52395ed7dd817376dab9f6c7492",
"assets/assets/images/icons/game_development.png": "dcdb1021860783742afec9ac232009c0",
"assets/assets/images/icons/software_engineering.png": "429c6a3b367d84899ca7353c107b1bcd",
"assets/assets/images/icons/UIUX.png": "13ae4b02a8389eada9d49fd2fbe03187",
"assets/assets/images/icons/web_development.png": "77e541de37c8a0bda65932a1f7cb568c",
"assets/assets/images/Projects/Frog/gameplay01.png": "00377bc50adbeb7ea54b6e5d16e6dc70",
"assets/assets/images/Projects/Frog/gameplay02.png": "39b7c8d6a1beee9b5870fbff467ef6db",
"assets/assets/images/Projects/Frog/gameplay03.png": "25904b2499d8c3bd83c0cf0a304a5774",
"assets/assets/images/Projects/Frog/icon.png": "a0e9e7643bfa26c24be8a64233cdd8ea",
"assets/assets/images/Projects/Frog/logo.png": "51125cf74d9a99ca56d26b3e680c8073",
"assets/assets/images/Projects/n1golf/display.jpg": "0e014f3acb236cf4b4cf2333a189671d",
"assets/assets/images/Projects/n1golf/gameplay01.jpg": "75d8c30fb7df61de0738ea5141f289d4",
"assets/assets/images/Projects/n1golf/gameplay02.jpg": "2a403a0cbf5d9fc93bb035349c129e37",
"assets/assets/images/Projects/n1golf/golf.png": "815705190b2fde87cedd11fca36b941c",
"assets/assets/images/Projects/n1golf/golf_demo.png": "8264a6671b79f93f5140ce6d3db2d9de",
"assets/assets/images/Projects/n1golf/icon.png": "5aa02937b5d52ec644e7400c0f06e164",
"assets/assets/images/Projects/n1golf/logo.png": "4cf43a54a942dfe7dab3eb1bd4f1ace7",
"assets/assets/images/Projects/nessus/gameplay01.png": "89c4ff8954b71e2ce5053ed4d7e740af",
"assets/assets/images/Projects/nessus/gameplay02.png": "2c9edb7150b2c932756eda66d9189379",
"assets/assets/images/Projects/nessus/gameplay03.png": "3aa0b07f418e87f730e6e727ae02a968",
"assets/assets/images/Projects/nessus/icon.png": "d1d2f8bca2b8c2afe68e7b4261ef39ea",
"assets/assets/images/Projects/nessus/logo.png": "a17ae5c03d8bd4407ba6063192d6c102",
"assets/assets/images/Projects/psychedelic/gameplay01.png": "f8753ea8e37832db138b854e9dd2de34",
"assets/assets/images/Projects/psychedelic/gameplay02.png": "c5fc395f2216ab614edd476be2d1d112",
"assets/assets/images/Projects/psychedelic/gameplay03.png": "92606435ece0ae4ba1f1b3d143aea42c",
"assets/assets/images/Projects/psychedelic/icon.png": "3b3017cbb61e3a91c0ed63c7515134e0",
"assets/assets/images/Projects/psychedelic/logo.png": "f4d94506d42e09108aac16968f79d984",
"assets/assets/images/Projects/sakura_web/contact_page.png": "9b8a78c49a5a1609207322a6d7353fd8",
"assets/assets/images/Projects/sakura_web/ebook_page.png": "3746142e989339671efc4910d21215a3",
"assets/assets/images/Projects/sakura_web/icon.png": "4ca5b1185abe7bb5bb883a041c8ef340",
"assets/assets/images/Projects/sakura_web/logo.png": "36616a377662515ee338b23ff45d4cd6",
"assets/assets/images/Projects/sakura_web/video_page.png": "bd9ff85756f2c4500a70b9166ece9224",
"assets/assets/images/tainan_selfie.png": "93d550c890edd1f8e3af4ecd8a37f73f",
"assets/assets/texts/self_introduction.txt": "36947b110c94e082fae978cd23d24830",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "209c93f33a8f6ef88d38a347705f9ee7",
"assets/NOTICES": "bc1f2cd68ba1662cf7663c15490040fd",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "da9f6d31733859397d0e2d4d1c718e2a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "510120590b61e2d30c387d4022ef629e",
"/": "510120590b61e2d30c387d4022ef629e",
"main.dart.js": "b09370cbdf0e98d0a81992a6dfd2af61",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "0325640b78b9f97959290dc5ebb8b3ed"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
