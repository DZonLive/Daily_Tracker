// Service worker: lets the app open without internet and delivers updates.
//
// How updates work:
//  1. Change the app files and bump VERSION below (same number as APP_VERSION in app.js).
//  2. Browsers notice the new sw.js and activate it right away (skipWaiting), so a normal reload
//     always shows the new version.
//  3. If the app was already open when the update arrived, it shows "New version available — Update";
//     tapping it reloads the page.
//
// Caching:
//  - App code (html, js, css, manifest): network first, cached copy when offline -> always fresh when online.
//  - Icons, fonts and the Firebase SDK (versioned URLs): cache first.
const VERSION = "0.17.0";
const CACHE = "productivity-starter-" + VERSION;
const SHELL = ["./", "./index.html", "./styles.css", "./app.js", "./cloud.js", "./manifest.webmanifest",
  "./icons/icon-192.png", "./icons/icon-512.png", "./icons/apple-touch-icon.png"];

self.addEventListener("install", (event) => {
  // cache: "reload" skips the browser's HTTP cache (GitHub Pages lets browsers keep files for 10 minutes),
  // so a new version never gets stored with old files.
  event.waitUntil(caches.open(CACHE)
    .then((c) => c.addAll(SHELL.map((u) => new Request(u, { cache: "reload" }))))
    .then(() => self.skipWaiting()));
});

self.addEventListener("message", (event) => {
  if (event.data === "skipWaiting") self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith("productivity-starter-") && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

const isCode = (url) => url.origin === self.location.origin && !url.pathname.includes("/icons/");
const isStatic = (url) =>
  (url.origin === self.location.origin && url.pathname.includes("/icons/")) ||
  url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com" ||
  (url.hostname === "www.gstatic.com" && url.pathname.startsWith("/firebasejs/"));

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  if (req.mode === "navigate" || isCode(url)) {
    event.respondWith(
      // "no-cache": always ask the server (cheap: it answers "not modified" when nothing changed)
      fetch(req, { cache: "no-cache" })
        .then((res) => {
          if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req.mode === "navigate" ? "./index.html" : req, copy)); }
          return res;
        })
        .catch(() => caches.match(req.mode === "navigate" ? "./index.html" : req, { ignoreSearch: true }))
    );
    return;
  }

  if (isStatic(url)) {
    event.respondWith(
      caches.open(CACHE).then((cache) =>
        cache.match(req).then((cached) => cached || fetch(req).then((res) => {
          if (res.ok || res.type === "opaque") cache.put(req, res.clone());
          return res;
        }))
      )
    );
  }
  // Everything else (Firebase sign-in and database traffic) goes straight to the network.
});
