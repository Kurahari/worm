'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "45c9eb7fa6e6a781268f8a3b8d62d8b9",
".git/config": "43140678954adb7ec7b8c2e33f6d4fe8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
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
".git/index": "d52b27d05f7c51908716cd4e26a4fc7c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9d242d07307fb3a6730fa3477e4d4d9b",
".git/logs/refs/heads/gh-pages": "9d242d07307fb3a6730fa3477e4d4d9b",
".git/logs/refs/remotes/origin/gh-pages": "98fa3d7bdd7c78460ecfdec63b515e5f",
".git/objects/03/a5bffa1dd357d22e8cb3f9764e0a21ab8330c3": "6dcf1568053ce5d57cdd24013c679be8",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/15/4dda212582413c0c2ec9c4e5bd25edfc0865eb": "18d53c16180f307c88e66fc57004f3db",
".git/objects/16/66187ad1b3f9a5fb3279d8319b69a1a3c89a6c": "844d02b6760f9f3ddfb85e78a3d45a1c",
".git/objects/1b/18f31c43060b32bdc33f660fe7bbabf3a259e5": "233524e4d182a6a98a3265e9c6fc8b61",
".git/objects/25/293700f31ea7fcb33bdea8f47dbc8059259263": "e857188951f43e1ff781d07308f70791",
".git/objects/2b/5cce3983a283b9ed9b0644613ccbefb556e9c9": "94be1e2ffbc3aa697a01c18b0a54e801",
".git/objects/2c/23b324b86ba8fef13548e724a8ce87b7956446": "dd2f3978a9b599c57aa30afe93788397",
".git/objects/2d/6646085dc87583307a536385f038d3d25594fa": "68a4ac1435bcd4daa8dc0b042e672773",
".git/objects/34/fa04553da713f2cc7404567a9470121201de91": "63395ff8121396ec60eaf2a8ab98f8d3",
".git/objects/35/51052879dd92fd320b9f80641cea6285aa0408": "65c6a727e6e4d6f2f5e17f2933bc55be",
".git/objects/37/55f33bbeef8fc68cb1b3dcea1707f0b9271464": "0fec010f42c975b3d2bfd0f562197fbd",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3d/c239978641b44f731970619141406cc3f918b5": "7f335420217c608270da614b13aafb1f",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/41/773631f4bd2a2179245f3e7437a2ca8af72669": "ac1d42c69ff0c51f3401a8ebd2e99280",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/74b2f89f12b3725763695bef7e4745351baea2": "203e767049c748808b6db0ad6dff14d7",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/52/3dc3234988abc4ffeb0ea5505cd705ca490f5e": "02570f8bc5feedc5d9490ba4ea1fa428",
".git/objects/54/fe2a1d361043cd038003ff9ff678b833bb2556": "cea9369ac7b1d686d4ce4ae0054f34b5",
".git/objects/66/327e9155b04f746840d0bc59aff6dfda9fc553": "67b7b84855741732b662f8a0c830bed0",
".git/objects/67/0ba96c32fbdb8666b255453a80c97bf85e50fc": "3e5e45a04e58e547da7a2a0e440778fc",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/69/1ecbf96d39846bc9c46a59ba35602d99b350b4": "6ff5d34c2dd134170fa8616bfc706294",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/9c12e9407281ebdd9d952b7574366e7f5bbee3": "d5547c8de622b963eda1f3ca1460cbb3",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/70/928703505fa282dae0993e2f724c483ebb9d7e": "6bf9ef3677eb3d98745609d8e3a10f58",
".git/objects/72/8c3f00f1f4302dd121fecd91b7e392ce962cbe": "9034c01d6e106265fe9291fcca5b3b8b",
".git/objects/7a/c3e549c938b5eec18b6ecd420ce96f516822a7": "fe3f442fce4959f270a8a7509d35b233",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7f/923d610c5213ccabe66de9f40696b487000d4c": "bfde8a69c231b793d930886c5a890638",
".git/objects/82/ee8d35c0859e328aabf39b3b9126404b3765ae": "53a98ee75c44f89e4dd8042af8d84d4b",
".git/objects/84/ddf1d48500ae69357004b27713c49e110877c6": "ddb2c2d092f819d387bc1aca8fa2a7ff",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/85/e9a085f3f8177f499d012b2374a72e40adda90": "6d18c28e1ce1d50fc3de54ad12ae9c08",
".git/objects/85/f63fd7b81aa7965dd908f0e9814df5b830bd26": "b507d3a6dec96a00fc5a3d44f9c0ff26",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8f/e114e37500973ecf69a30ffd913ba2dc134259": "59dea9f64ce9baace8f44e28d90282ae",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/91/7293566a4543810ba0c14a67f224cfd0db5c0e": "3054c8cd72a243e1cdda6dcf82f26629",
".git/objects/92/d4d988d62dbb16981a5ad9975f302919dc714b": "2f925525bf6006c04b4f7a9cafd9ec07",
".git/objects/93/06e1ded9994e5479eaa09ea1f3f35782a1b03f": "98601807b091da9e16c84726df70f983",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/98/7d3ba0dc5df291a923883efd8bb547f652142d": "f994e04f06e25d083ca6b3c14c40315b",
".git/objects/a3/4a023157a2b1de78871ccb43ae2984b1c461ad": "69ac85ce496a4fd0da56da68dcac4138",
".git/objects/a5/f308862b4ff1d4e258e0561f2dc88b347ca2bb": "409b79d0a24361bceef702c5347036a4",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a9/260e3a52794fe801b3f07518b64f9ccc6f08d0": "c8688c66c7c5bdf61457cef82cf19002",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b2/2fb33ee98b83d4633a9af33f3cda62da15145e": "b022bed171c3d0f55bce7ba05fb3d40f",
".git/objects/b5/3c8ac93cdb0e1f5760ebc21827f6ea027b9f63": "3904db0bd10e848ea86f6f39071f24d3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bc/0876b268db7110a81fb251d39a41144e0c8974": "3273e9f6c0f27340a497693c37ae8a44",
".git/objects/bd/49c6041a0a21650d95ae3b13c733eeec0fcf0d": "1d74cec0c74938e60460d62b4a199396",
".git/objects/c5/14583b828cbcfca32a741eda219dd715cfeecf": "e55b4f408e6ae7c77f23758a61c3392c",
".git/objects/c7/0e2f15ec9cf621b85b9d7222a87e3e2f206aea": "36cf2b548ba2dfd92f2cf737910f74f0",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/ca/c86b28a1f404cc5b03ba0ec44b2e570bd148d5": "7c546ca9b340f22b706ab1c75a8e1c56",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/ce/8747b82cdc4122960da8246ceb1bc8e4e92468": "bd6092dc3a9b238f5a5389ea60462d6d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/e2/3228031cd3764da307310a870aed04e8fb7692": "efea5df12142a7a10a34836229616603",
".git/objects/e8/772dfe4bf145030335d05c905ae22aa7bfb59c": "83df14185c9e485286fd39d34810e564",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/8d3d34ce7108839a0d1523e2c2d4b49500e941": "8f4985fe1710ee6e4954f13bf7cb3cbd",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f3/ecca38409429b5197541192d8df9e6c5d83162": "a510be0688033de2534904d36d403cba",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/refs/heads/gh-pages": "4339db22908febad80c2774252b45fc0",
".git/refs/remotes/origin/gh-pages": "4339db22908febad80c2774252b45fc0",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a76b03e602b6435557477379af95ed82",
"assets/NOTICES": "fcc4b42944c38be81b85747295da96ad",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "286b061f0b65d6a260034d41d43822d3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b591de98842369871279d9f8990683a0",
"/": "b591de98842369871279d9f8990683a0",
"main.dart.js": "89f96e97e20ca05e207447c05928aee6",
"manifest.json": "3ce2a3902ebbbbe9cabbdf529978c17f",
"version.json": "8f89e71d99060297484ae8922b507915"};
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
