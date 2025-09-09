// service-worker.js
// Este es un Service Worker básico para permitir la instalación de la PWA.
// Para funcionalidades offline avanzadas, necesitarías implementar una estrategia de caché aquí.

self.addEventListener('install', (event) => {
  console.log('Service Worker: Instalado');
  // Se recomienda precachear assets críticos aquí.
  // event.waitUntil(
  //   caches.open('my-app-cache').then((cache) => {
  //     return cache.addAll(['/', '/index.html', '/styles.css', '/script.js']);
  //   })
  // );
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activado');
  // Limpiar cachés antiguos si es necesario.
  // event.waitUntil(
  //   caches.keys().then((cacheNames) => {
  //     return Promise.all(
  //       cacheNames.map((cacheName) => {
  //         if (cacheName !== 'my-app-cache') {
  //           return caches.delete(cacheName);
  //         }
  //       })
  //     );
  //   })
  // );
});

self.addEventListener('fetch', (event) => {
  // Este es el controlador de solicitudes. Aquí puedes definir
  // cómo el Service Worker intercepta y responde a las solicitudes de red.
  // Por ahora, solo pasamos las solicitudes directamente a la red.
  event.respondWith(fetch(event.request));

  // Para implementar una estrategia de caché primero, puedes usar:
  // event.respondWith(
  //   caches.match(event.request).then((response) => {
  //     return response || fetch(event.request);
  //   })
  // );
});

