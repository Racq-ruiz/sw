const STATIC_CACHE = "static-v1";

const APP_SHELL = [
  "/",
  "index.php",
  "css/styles.css",
  "js/main.js",
  "img/logo.png",
];


self.addEventListener("instalar", (e) => { const cacheStatic = caches .open(STATIC_CACHE) .then((cache) => cache.addAll(APP_SHELL)); e.waitUntil(cacheStatic); }); 


self.addEventListener("fetch", (e) => {
  console.log("fetch! ", e.request);
  e.respondWith(
    caches
      .match(e.request)
      .then((res) => {
        return res || fetch(e.request);
      })
      .catch(console.log)
  );
  //   e.waitUntil(response);
});
