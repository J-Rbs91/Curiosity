const CACHE_NAME = "curiosity-cache-v1";

/*
 * Les chemins sont déduits de l'emplacement du service worker plutôt qu'écrits en dur.
 * L'application est servie sous un préfixe qui dépend de l'hébergement — la racine du
 * domaine en développement, /<dépôt>/ sur GitHub Pages — et ce fichier est copié tel quel,
 * sans passer par la construction : il ne peut pas connaître ce préfixe autrement.
 */
const ROOT = new URL("./", self.location).pathname;
const OFFLINE_URL = ROOT;
const MANIFEST_URL = `${ROOT}manifest.webmanifest`;

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll([OFFLINE_URL, MANIFEST_URL]))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      try {
        const response = await fetch(request);
        if (response && response.status === 200) {
          cache.put(request, response.clone());
        }
        return response;
      } catch {
        const cached = await cache.match(request);
        if (cached) return cached;
        if (request.mode === "navigate") {
          const fallback = await cache.match(OFFLINE_URL);
          if (fallback) return fallback;
        }
        throw new Error("Ressource indisponible hors-ligne");
      }
    })
  );
});
