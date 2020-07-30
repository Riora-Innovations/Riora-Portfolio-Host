'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "9334249e7b70581eb6e556690b095627",
".git/config": "671cd27aef74889e32bfbe0b2797810f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "495981222129f25a197782559bfdb3d6",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "7eb6bbbc664d92a807a00fabe3cf3797",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a1254b6caadc5626c9e56ea44d182d01",
".git/logs/refs/heads/master": "a1254b6caadc5626c9e56ea44d182d01",
".git/logs/refs/remotes/origin/master": "bb4d103a15d23afe29e02afdd11fae52",
".git/objects/00/11e044f4a534d90f212a88ac738388bb8252ee": "ac53d7b9922f9b83a02ecfbde9f747ec",
".git/objects/12/9f9c8a9b263591bd55bd397d7195a9f5fe5ed3": "0649431171a24ec5e1da0f4ba90a7781",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/30/4a23252c2f4a1fb8c8666dc8c9ee1b7aa877d6": "9ba47009877d491cd9dfaddfd3413232",
".git/objects/4d/629568cbec73ec5fbdc611302a61b7ac0916b7": "5cc335b5715d2839df92f87983b25577",
".git/objects/58/57a8b651a7500844844ba66a6d2a6ae666a719": "a87f65a38003114f58565c6806ae2a18",
".git/objects/58/b0f3cba9fdf417770c0c59b9a88b971f9ace4e": "e2a9e34b21a98d059c791f6ff5dbd2ce",
".git/objects/5f/6ead5f9c5305486e0696f42e87f89cce858804": "333376759c30adca20e3bce59a1e9d06",
".git/objects/6a/bd1288ef567176b794bd23576c43ab8e48227d": "9b45d364031797e982fe2e75de2fbdc4",
".git/objects/70/431d96684945af98c7320db6f80bec225e2ce9": "f7c60cbef6ce7ffa37c6c5eef078906a",
".git/objects/78/77ad2ea992509414d45fc5b3e0b0154ff77701": "0f599220c62a048975fe35b9a85c35dc",
".git/objects/7f/f30643a84cd0cd124561fbf9ba2aa729c57fb8": "331fc67389a6422ac8f69a4b09763e10",
".git/objects/85/912f684e925a89836d1fd5375afcfabf15e134": "f81c06628d8452631c09246a28563906",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/c200869ebe6edcbb71b9ef8dad49b04310c768": "148ebffd796c3a730272f8b237f94aff",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/fd63e4f8628e23bc3da5dc1f3ba28a109c7756": "7bfb0f699bf1821b34a29daf33a7ae58",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/ad/f46e9559d5331a06f9f57577a93dbef06b0ff3": "5252605ed0604766f37831cf63f3bf6a",
".git/objects/b5/e78df6e31c7c3478d531d835386f0ae13657a8": "7413da2bcb5f154fd67a0e849c070fdd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/a518490354ac3a6568b07f129544dc427ce928": "91c009bf381e20928ebcebcf062f2a80",
".git/objects/d4/369e214943bf452c0739a62636a3d0d6d4202e": "c267cfdaf95b9ef01052b4a11c1b672c",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/e2/14d686f4ec77a98d1054150d639c44114a1f77": "573d34a82af279609086988dfa4a9be3",
".git/objects/e2/517e02b2c6f1d42f55e2ffcbbf5723831d8c62": "a251183edfba39dadb6ec40d5d22e828",
".git/objects/e9/6c72ea554f050e5e171a1781f4d112cdf9fdcb": "d73dccb2f8db7762ae847b03def8a337",
".git/objects/f0/2dfe11c6852a986b365f614a1d2749bef91215": "5d27e18ac4e343d0a2d305f762a38335",
".git/objects/f1/4880951963b616c1161283c155df3930c8e758": "2d2fa4cb95ea6a403e8dd3ca7cb08510",
".git/objects/f8/d60e2dc66472db9f7b390e0590c68e3f2210b2": "72ea7d8c52f8cffbda0dc64a1cc712b5",
".git/refs/heads/master": "ab9ebc7ac747deece257345b98e08f9d",
".git/refs/remotes/origin/master": "ab9ebc7ac747deece257345b98e08f9d",
"assets/AssetManifest.json": "a69e8640d5ce5cdb584b393162efa1d8",
"assets/assets/images/GooglePixel3.png": "cde991c598256c073a918e121a694a62",
"assets/assets/images/GooglePlay.png": "890ce811743c1551544c8555f0b54da5",
"assets/assets/images/GooglePlayBlack.png": "4f22309ee6316097ce7d9ba9561966cd",
"assets/assets/images/logos/FirebaseLogo.png": "5d255991152cc399dcb70e662edec5fe",
"assets/assets/images/logos/UnityLogo.png": "6904217dffbe01174c099e93158466a0",
"assets/assets/images/screenshots/BoxAndSpikes/01.png": "5a20eadac1ee80d50ebc9f15fa9bb813",
"assets/assets/images/screenshots/BoxAndSpikes/02.png": "76a53217e69325c2d0590be84a3f3ef2",
"assets/assets/images/screenshots/BoxAndSpikes/03.png": "a07561d82c6f670880c717c7b132e0f0",
"assets/assets/images/screenshots/BoxAndSpikes/04.png": "6354823f6327923c7511a0a331f72a20",
"assets/FontManifest.json": "580ff1a5d08679ded8fcf5c6848cece7",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/NOTICES": "cdfe99899ee564b9264ac89582b65e65",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "97ff4bd1406a51b2824f2218c067738c",
"/": "97ff4bd1406a51b2824f2218c067738c",
"main.dart.js": "1de1882e82e8e2bf99807a1bb3464d92",
"manifest.json": "2c419cf754fe4f5332acf8a9f53ed3ad"
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
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
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
  if (event.data == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
