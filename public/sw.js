importScripts('/cache-polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('airhorner').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/index.html?homescreen=1',
       '/?homescreen=1',
       '/css/css/landing-page.min.css',
       '/js/currency-converter.js',
       '/img/',
       '/sounds/airhorn.mp3'
     ]);
   })
 );
});