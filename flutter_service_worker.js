'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "474a5639b910d15a84cb1a049feb38f3",
".git/config": "671cd27aef74889e32bfbe0b2797810f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "54e28cc5917738a913a0fece27173f51",
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
".git/index": "b89cdc6ff159100b97d1df8fbce6c455",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3166d44c57c3c81826b289f4e610d395",
".git/logs/refs/heads/master": "3166d44c57c3c81826b289f4e610d395",
".git/logs/refs/remotes/origin/master": "92a51dd52aaaecdae151b2109c81e0c2",
".git/objects/00/11e044f4a534d90f212a88ac738388bb8252ee": "ac53d7b9922f9b83a02ecfbde9f747ec",
".git/objects/06/b370ffc46b36695bf3397591f3c338aac92089": "cd1b52f87c61fdf6260a244bc14e2768",
".git/objects/08/c6b967fa7ada26bda4748fc5dd4a4df7328c58": "fc021b19f5c04dd16d84703f25adab2b",
".git/objects/11/6c444f08aaa731139a1742349da12481ba3035": "1e07cb0d62f06b0e167b918d6e5d5384",
".git/objects/12/9f9c8a9b263591bd55bd397d7195a9f5fe5ed3": "0649431171a24ec5e1da0f4ba90a7781",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/29/8a1446d7e342a83c18fa76a745e35f87fab526": "dd13fa28249e199641d5e6679f331c04",
".git/objects/2c/26b74f4e3528f0f09eb138d0fcb3321363a191": "88f2d5bf6d4880dbf5de8acea20c9b13",
".git/objects/30/4a23252c2f4a1fb8c8666dc8c9ee1b7aa877d6": "9ba47009877d491cd9dfaddfd3413232",
".git/objects/35/d1ec744b1f06c279c37727392a3b8b7850c0e4": "f7d5ffd20cff1741cb1bd7970eb0570d",
".git/objects/38/b263a1b666bde0b9949fc53cce40150b6c5f2c": "66b737296d208a23d9427fa3d6724551",
".git/objects/3d/34a5987f73f353730e417c9510d2e1098afd80": "cd2603d725b539fa51f6916e5a989b21",
".git/objects/4d/629568cbec73ec5fbdc611302a61b7ac0916b7": "5cc335b5715d2839df92f87983b25577",
".git/objects/58/57a8b651a7500844844ba66a6d2a6ae666a719": "a87f65a38003114f58565c6806ae2a18",
".git/objects/58/b0f3cba9fdf417770c0c59b9a88b971f9ace4e": "e2a9e34b21a98d059c791f6ff5dbd2ce",
".git/objects/5c/8db9ae589cadc573713a2b4fcd024b74b4e305": "089ba64479b0b89c3d73bb5f4955051f",
".git/objects/5f/6ead5f9c5305486e0696f42e87f89cce858804": "333376759c30adca20e3bce59a1e9d06",
".git/objects/6a/91f43497f237e9f6827d2befa70edec5316b4d": "65ad256bf4506d9734a3cf5810dfe2ed",
".git/objects/6a/bd1288ef567176b794bd23576c43ab8e48227d": "9b45d364031797e982fe2e75de2fbdc4",
".git/objects/70/431d96684945af98c7320db6f80bec225e2ce9": "f7c60cbef6ce7ffa37c6c5eef078906a",
".git/objects/78/77ad2ea992509414d45fc5b3e0b0154ff77701": "0f599220c62a048975fe35b9a85c35dc",
".git/objects/7f/f30643a84cd0cd124561fbf9ba2aa729c57fb8": "331fc67389a6422ac8f69a4b09763e10",
".git/objects/80/06cce9e93b75a0724a8a0c25d2ef28ac0955ce": "95ab28d7be5af946118648816c5649e8",
".git/objects/80/892aae3d5bafe09878ca9c63b9160990191ade": "08d8b113445a43bab641b5cfe2437a69",
".git/objects/80/e5183ab048fd98d9da61c734dde53e039bc4f5": "acb4af12dc84d546aa7bff8f5198dbb5",
".git/objects/82/a9335d0c80006e05dde194e5ee724020c1dad3": "777cf5ae9828e37d8de337a6cb33e5e3",
".git/objects/85/912f684e925a89836d1fd5375afcfabf15e134": "f81c06628d8452631c09246a28563906",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/c200869ebe6edcbb71b9ef8dad49b04310c768": "148ebffd796c3a730272f8b237f94aff",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/fd63e4f8628e23bc3da5dc1f3ba28a109c7756": "7bfb0f699bf1821b34a29daf33a7ae58",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/ad/f46e9559d5331a06f9f57577a93dbef06b0ff3": "5252605ed0604766f37831cf63f3bf6a",
".git/objects/b2/9454afd5fdc8a0deb40e4af00f16d70bb82b7b": "8e8b82fbe7fcdfea70f33b0eff8590ac",
".git/objects/b5/e78df6e31c7c3478d531d835386f0ae13657a8": "7413da2bcb5f154fd67a0e849c070fdd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/a518490354ac3a6568b07f129544dc427ce928": "91c009bf381e20928ebcebcf062f2a80",
".git/objects/ca/8a1ede989afa7a0758f3aa08111f9060904bb0": "792b7038764a3ebb2769240adc91ce4c",
".git/objects/d4/369e214943bf452c0739a62636a3d0d6d4202e": "c267cfdaf95b9ef01052b4a11c1b672c",
".git/objects/d5/774848f2463b5e89e5102fd8f5b076bca9e62a": "b0110e332377d58821dc43f670068eb5",
".git/objects/d6/783e2188e02d77aab36749fffb7e33657736c2": "d5e6dd7b94eebfdb296bcd4f64296a7c",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/de/ecd54f6990c985092e35b1ab7cb7edebddb964": "d1a38a29f4b0cc49dbbbe07734aa015f",
".git/objects/e2/14d686f4ec77a98d1054150d639c44114a1f77": "573d34a82af279609086988dfa4a9be3",
".git/objects/e2/517e02b2c6f1d42f55e2ffcbbf5723831d8c62": "a251183edfba39dadb6ec40d5d22e828",
".git/objects/e9/6c72ea554f050e5e171a1781f4d112cdf9fdcb": "d73dccb2f8db7762ae847b03def8a337",
".git/objects/f0/2dfe11c6852a986b365f614a1d2749bef91215": "5d27e18ac4e343d0a2d305f762a38335",
".git/objects/f1/4880951963b616c1161283c155df3930c8e758": "2d2fa4cb95ea6a403e8dd3ca7cb08510",
".git/objects/f6/47a09544c6049f4903b532ed9c29e84d7087cf": "39076b20174640d425a20e597c7ea412",
".git/objects/f8/d60e2dc66472db9f7b390e0590c68e3f2210b2": "72ea7d8c52f8cffbda0dc64a1cc712b5",
".git/ORIG_HEAD": "e3fb9521963fe24018faf674fcbbe398",
".git/refs/heads/master": "b3c116ab3868679f57375c69d6a30a33",
".git/refs/remotes/origin/master": "b3c116ab3868679f57375c69d6a30a33",
".github/workflows/main.yml": "5419c5049f604cb2329395387f49829f",
"assets/AssetManifest.json": "b0d064e376976573b22ad3c316fe2b26",
"assets/assets/images/GooglePixel3.png": "cde991c598256c073a918e121a694a62",
"assets/assets/images/GooglePlay.png": "890ce811743c1551544c8555f0b54da5",
"assets/assets/images/GooglePlayBlack.png": "4f22309ee6316097ce7d9ba9561966cd",
"assets/assets/images/logos/FirebaseLogo.png": "5d255991152cc399dcb70e662edec5fe",
"assets/assets/images/logos/UnityLogo.png": "6904217dffbe01174c099e93158466a0",
"assets/assets/images/screenshots/BoxAndSpikes/01.png": "5a20eadac1ee80d50ebc9f15fa9bb813",
"assets/assets/images/screenshots/BoxAndSpikes/02.png": "76a53217e69325c2d0590be84a3f3ef2",
"assets/assets/images/screenshots/BoxAndSpikes/03.png": "a07561d82c6f670880c717c7b132e0f0",
"assets/assets/images/screenshots/BoxAndSpikes/04.png": "6354823f6327923c7511a0a331f72a20",
"assets/assets/images/screenshots/HandWashReminder/01.png": "c678b01159e6298b3e0183317bc6600a",
"assets/assets/images/screenshots/HandWashReminder/02.png": "ae027d0354b45807888a835a6af0891a",
"assets/assets/images/screenshots/HandWashReminder/03.png": "a77a333f5f066940b24dd7ffd2f8678a",
"assets/assets/images/screenshots/MathTest/01.png": "80e876ed16bd155af4a03dceea60d22f",
"assets/assets/images/screenshots/MathTest/02.png": "132771a93ef1c13a78058b6ff89d475f",
"assets/assets/images/screenshots/MathTest/03.png": "9096204c5b933dae6136298698c491a4",
"assets/assets/images/screenshots/MathTest/04.png": "eb515b6929575bceac6d1f536cd5fae1",
"assets/assets/images/screenshots/MathTest/05.png": "cba1db87a339efc6340dcbaf9bf58a22",
"assets/assets/images/screenshots/MathTest/06.png": "a61062c3bdc2cf267f51c2c01bb49bdd",
"assets/assets/images/screenshots/MathTest/07.png": "4eb7a0cfaf0165533502fec34b7d3ae2",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/NOTICES": "ed35623e97f5a56c1546901a16f38104",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "97ff4bd1406a51b2824f2218c067738c",
"/": "97ff4bd1406a51b2824f2218c067738c",
"main.dart.js": "75243e2404fa2c39bc98d13f96083ad7",
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
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'reload'});
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
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
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
