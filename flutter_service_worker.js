'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "10eaa51f175bf1db4a1ef0a026bd9d64",
".git/config": "a3a49160a356ba3f9be60982aa06da1f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "74cfb06e31c023518f291c29f5ef0c8f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5cbdcc1569fd1e3ceb0365c2cfee808a",
".git/logs/refs/heads/main": "0968f6abe75687be2097c4dd389ec222",
".git/logs/refs/remotes/origin/main": "8790078851be7e8101e245d86a31161f",
".git/objects/09/95bce7e3d22f4f6274e25c52e8c2105af90008": "1dd96d6b7cad4ef6071c5c17320a1c72",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1c/5e7f40aed3435c0f1af93ddf266d54491972c5": "758f5987960fb3af33b114185ea2b845",
".git/objects/1c/d0488663f3d508283dd7b775ca186e6f4e2b4e": "4a0bbaea5936e10a3ca95d869ce21f3d",
".git/objects/22/3fc3f90c9dd02ebf30a150af22f65885f23c74": "fc17153570269f60754858fa43e659d6",
".git/objects/29/33dd10ec8d6f4ecf4d66bed8053a6ee9bb97b1": "f3d6c40ef4c55eecced21f424a1c673e",
".git/objects/2a/1ee3998cb519e40475b2290231abee642b275a": "4961d19f2564ad3c4c387a5157b5f4ea",
".git/objects/31/6edfa87e6f60a062341d49b8ceb0e45105fbc3": "1bb7ecb6ab8544812539508480404722",
".git/objects/39/0fb92072b125be88148561811f4bd8c0635947": "8b8e773635975750dad9f32e20ac7559",
".git/objects/46/38982c289ba9f390ad795c3bc3e80d24a8c165": "e222caddc03d66998bb811cf14aaf8ea",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/57/188fab84908f405544081db8a7fbe8072b8bb5": "5b9b9f2afa5ef888a05b068fad4ccd3a",
".git/objects/58/790396b38c49bdf816167c98ccd985aca3ad8d": "bf044ba69e353909fd28aa8890f746ea",
".git/objects/59/26539784c666c1ef8570a28f66a2486b7f7407": "16299849ee9c667774d0a2b1243d926f",
".git/objects/5a/54c2d8711a79411d1ef48ee3b5ce5c11875423": "285673f90fe9af78ad2114aa30145c9b",
".git/objects/60/550d2426ac3d9eba07fbb480fc9778fa175f47": "83f4dcfb374194cf14289cba68c0a8ad",
".git/objects/64/7bbaf04924ae52b254bc4f72eff79528854948": "79ed39865cfcc9236608553ad8d3893f",
".git/objects/67/3661f656d74160a516254a2e199a6af438f70c": "1599507e92b300cab25defe8f53af7cd",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/b48ec4bce6c1126bb219482f73b4c7cc3b8caf": "3eb7bce6647a693f93fc21dceae3c1b1",
".git/objects/6d/c841897de36e27e3604847d082dd96b0adb67e": "15685e46ebdc0522c5f0e4d6180b4c13",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/71/2e8192d9ab55481f77c8716d0cc402f95b5f72": "88c905295b1168a086aa877ea4c4e9be",
".git/objects/72/1f9a01c06dbccbf1472a782ac42cd65556f465": "9847e3bd1e5ba78e4d94eb26a1d57e44",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/77/6f2decbc67e4913a4a7636efc60d98f239736b": "ad53ddd9fea59ee4aa5d5127fa87a941",
".git/objects/7a/203d0ec1a66287ce7031f721ce51fe031733b5": "874138fc09171fa3d3fbc8d163a9fdd0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a7/e73395aa669c8bdc64cda505400e1b28f16ae0": "91cdabb5e07249d120981e617e866c39",
".git/objects/b6/bde5ead600a873e1897e08c0d94786d54998eb": "62bb50705937a9524c1ec7942f207df2",
".git/objects/b7/1a707301d89896df55e8c8f70a9bc0e8070984": "ca7f41fbad8c7be01b4717f8270df7f4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/e66b6111fcbb0340162e963c123edbb255f25c": "61fd92f567379a2d38e49c24ad18b47a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/d1/7cc15db194cbd32eaa596ce82e497c517c2992": "67b32b98bce22f3aad546a0fe17ee6bf",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/df/862f706e8320fe53ab5d024b1494583cae68cc": "302ce32087bd55fb8dbff110ffcd6c10",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e0/fde163bae2a4309e170d1473a7bf0a41b6b568": "b23bb43f5a0da43b575d4ff1e4d95d9b",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/9657ed93408e627c181e5514905c8d2dd97ed9": "38fe23347d49c95230853443ef838eb2",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fb/69d17c0b3d31a242a31ec957fc340870d34f4f": "6fa2b14d51392a13759a24d9af434315",
".git/refs/heads/main": "7d272aa032ffdbf9d5f1899eeae0edce",
".git/refs/remotes/origin/main": "7d272aa032ffdbf9d5f1899eeae0edce",
"assets/AssetManifest.bin": "124c34ceb7cb3c9be1376c6f5a52ae92",
"assets/AssetManifest.bin.json": "b5448a68922cda79d71c56d0bf7234b2",
"assets/AssetManifest.json": "8a02d4662ace7c343a71c36c1d29c1ac",
"assets/assets/icons/777.png": "97b08ad6ae073cb6ae21d6fa00a60984",
"assets/assets/icons/bank.png": "f2413eb10b8b67fdba402f5d3ee5fbea",
"assets/assets/icons/coin.png": "0aeba9b0a24ba591da5c24ed9d53a616",
"assets/assets/icons/dashboard.png": "380bc7a0c71a4680cf3989d356fb0a09",
"assets/assets/icons/person.png": "d039d9ceed1083c010347bc0602838f2",
"assets/assets/icons/server.png": "00f1b4afb27e3a4ebb1397ba81b22e8d",
"assets/assets/icons/settings.png": "56d72ea8c895e4b2dcdffc0b6f492088",
"assets/assets/icons/transaction.png": "38f5ebc2a49d26c00eb455f5ecdcfec2",
"assets/assets/images/bg.png": "2cd64194097500d6012aad80f0f73963",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0a84b32257355d38e29db971af828def",
"assets/NOTICES": "b027b7f04fa811fd5295cdd24a47cd08",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.jpg": "ed2ee7c59b5495ffde61472d42835fa8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "04f953ad1a66b019e08dee651beaf755",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "008a74873cec1d3475eb7fbc3d41e9dc",
"/": "008a74873cec1d3475eb7fbc3d41e9dc",
"main.dart.js": "1db0abfe7ced32e060ed02eb1539853d",
"manifest.json": "3c7d25d17ecf218fe94a53eff9f64529",
"README.md": "25ac8b1421037835198ecb739e27c303",
"version.json": "5e2735a24a8b47edcd4fa0e54fba36ac"};
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
