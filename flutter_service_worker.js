'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "a256b5a9d7c931dfc8e8434b1b0ac5ec",
"index.html": "56754ec201e549a4b8f3e239e1fd486a",
"/": "56754ec201e549a4b8f3e239e1fd486a",
"main.dart.js": "f78e009afa79410d3539ec215aec4859",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1d606e69a81968b90bd46d580e9f8f19",
".git/config": "ef09497c3eaf62d99276cb5cec5cb1a7",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/3e/c7da4947c9f9da0dddb4f808578782c6fecb6e": "890b489b128bf1ee2063721ed75d0a54",
".git/objects/03/387b85c4f9a65b94e090759256fa98c09516f3": "2e7b9a4b904fada5cff5f32655ab724f",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/94/07261ad4a4253657b820a7459f1dc7e425f966": "9a4e47dd2917683fa04fed58004df78a",
".git/objects/02/ba484873358ae54d16378c16501c96aa038d85": "6ac7b76d3c20b3e706e4736baf5cef16",
".git/objects/be/0f8a43ef4b0ce0145e0ce9f99cef0c76c57c70": "1224b5d2794987269530b33820f2bd46",
".git/objects/a2/64d1d65c07bfbf41445fed6588073784b34ed3": "0f67b5b2bdba67468995d9ddd462505b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/94d809067a45c6a617526b8a88abbfd3d6b0df": "531c1b4e43dc66e6ec019daaf7e7cb83",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/75e8dbac03022adf1d2e41d855c68c5e29fd7c": "aef4d50a7ebdfe1e2d86358c066df7c5",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/6470616f28b6dad114e9c622752d9d66925044": "8a96eeec8f5c82020ddc8e7857d0bd91",
".git/objects/f3/9832d0d968c8cc75c5c538cc5381170b0d5c5b": "d47ea8885710f6872ebc8edc66ad8568",
".git/objects/f3/b5573d067ddf3f69fd3a2d074bc543810ef071": "3fb4d4e617b09b46c638d9da9de5ac35",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fe/716ed4047e641c302fecb5c99a2a8c584c9e86": "f67f7fc59c74da43e4412e94f044558b",
".git/objects/c1/50bcf0118fa05ed5c20d4a025de1b575f388e4": "42ea130cd572c4df5d4fbe0ff18c55af",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/5db1279071e777d80e0ca1ec3f27286fa448a2": "5c32046ec4f7dac66484454085735acb",
".git/objects/4e/d7c7c6da07f611d2f8dbec504ca09684b2f40a": "262b923fc4ab73a7f41ef707257b72aa",
".git/objects/20/804e562f167dab6988410077c961531c4ae852": "d8797c867dfcfc05866a973fe79c5b21",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/45/513a2c971e3253b090b4fd2c48ccfc17ddbd06": "02c45fef3b198b78aba084f8b3fd4ede",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/b2d206d4bb9d8f0a86c9aad54fe662767d98ce": "0132624104e303c19255e66de5ee9047",
".git/objects/4c/0610569f91a2f56fd06f0cf0fbed84d3e2283b": "82f0f279027b4a32d670de1cf5d78220",
".git/objects/86/f7524507f0d9dfa07b10cf220ec2ebd62fc9a3": "b288c1be2c6a30aa7a8c3e344c1dd7dd",
".git/objects/88/0ac0177ba51336bd2744e00fa038b27da49664": "f01b64932a420b1868e1d7b513d593f6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/245ddf4025b31f2933299327e0d648a7d0340d": "50f3dcf7bb9aa3a90fa2ae0177a6dba0",
".git/objects/38/fbb3881e1be6c76f40cce30fb7af1de716993c": "270b422aa8247dc13f5ffceaa821d3e7",
".git/objects/6e/0a45ecf3330e8e2b7d759fe81141e1d7db3a47": "9de809c2ed7f9c1d285b99357c257d96",
".git/objects/36/fc0997ad783321d0af1775b46c2bcc541e5abb": "9b0a039e1a9e6a3305b1e2cffd8a604e",
".git/objects/36/d9b96ceda5f1dad1ac265167e5402b98a3e03b": "f08688a7f2b9a300753dd8f0aa62cb4a",
".git/objects/98/102a21a3425a93007717ae21da85150f7eceb2": "ce68a5f236d391c7aefdd722613353ce",
".git/objects/3f/e849d79adefbea3d17b6ed69d93226dc73ec16": "ece39bf74bcf269f92be1e0f67163216",
".git/objects/08/66a6ee277e57fc430bf63cb65979bef16c6d4d": "96c473d067e70abd63e177903289222d",
".git/objects/06/074c90d7257a40c8e58504ff391972ac22757f": "66e73a73a16b5ef22d4402b3de6a6d2b",
".git/objects/63/159043094ac4ebba19f7245bd89d5a332859bd": "d708538f17a5be4d911d1062f153d197",
".git/objects/64/477a4c9c42238ae744977e4010181822d4e423": "a02e6c439a914975d58f6dbf0bf6b562",
".git/objects/dc/6c87356561c5d4860287aa7702634fef263746": "c67bcc88228b4a01cd9acb8479d2ec09",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/de065be9eadc61351b2987c82043dacc70f162": "4ccf7e11910feaaeceee2cb6d036c440",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/680113bdb0578c68c99189145835fb4b0e4fa0": "c8985842147b37b0d357bfe47a71a81c",
".git/objects/cc/327f9dc83508b2c290ee8cb29455a561a70c1e": "47dd2b88aebd4754778ed5a23b043d7e",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/f8/13cd68cf61f74b49fbd38d332476b793e75a4f": "7ccaf8a043713f3e71fd1fc90648303d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/41/02409a21c6ce34b44e3fbf6371089d3173487a": "33ea212f46b436d7256de53556fc0bf3",
".git/objects/83/a60e25dc010c77cf3c25fa70218a563287c77f": "beb1c302199544c25c8d39ca5c1ee783",
".git/objects/1b/e0bf0a0adee23d9c4ae187df33920368be023f": "c68d4c1877d668e1c7bdc496b72c9ff0",
".git/objects/1e/30bbb7f00b79b7e9a15eb6f801d3813011b5d5": "7fa689b5cf7a18f6d852b7e8e76734da",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/4f/8fa3a5318a7e2c8cb999e9490e5cb8712e1706": "b17491dc98a50c9e82d40dbdd4d50af7",
".git/objects/4f/c9bd5ba479843252ac8beab54e4dfce4ad23f1": "d2277c338cd2e7dac5eb593d3b248f45",
".git/objects/85/20de8e0051bf21a39cfe1c67049953e4825e68": "e8f00843752062ed69e45a853f163dfd",
".git/objects/1d/327a2c3d55c42f3da1fbbd9e37bb6c5879efad": "9323e12d2a836467a11a30e47fb97fb6",
".git/objects/71/bf6cbf3820b7a18ce010d67985793dcae60496": "13fb1536565d9c8b5ceada6c625e0770",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/2e/cb2f157005d481be058e6d5426905bfd1b850e": "bede72d0fa0d2893c8bbc5f1f24aeb53",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b18e8dbe49dfc4a79d391611a39487cf",
".git/logs/refs/heads/master": "b18e8dbe49dfc4a79d391611a39487cf",
".git/logs/refs/remotes/origin/master": "c09783d0d37688754c022eb175203cdd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "1ec08936d5e6b5b13753102cf74ef9e0",
".git/refs/remotes/origin/master": "1ec08936d5e6b5b13753102cf74ef9e0",
".git/index": "130ba0e34c08664af17479d9e41de7ca",
".git/COMMIT_EDITMSG": "9e6f5b34a99a71fee3098fc9161088a4",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "00ec7e37849c625d0007f5566d21e3fa",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
