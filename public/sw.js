// Chrome's currently missing some useful cache methods,
// this polyfill adds them.
importScripts('serviceworker-cache-polyfill.js');

// Here comes the install event!
// This only happens once, when the browser sees this
// version of the ServiceWorker for the first time.
self.addEventListener('install', function(event) {
  // We pass a promise to event.waitUntil to signal how 
// long install takes, and if it failed
event.waitUntil(
 // We open a cache…
 caches.open('currency-converter-v1').then(function(cache) {
   // And add resources to it 
   return cache.addAll([
     './',
     './index.html',
     './index.html?homescreen=1',
     './?homescreen=1',
     './vendor/bootstrap/css/bootstrap.min.css',
     './css/landing-page.css',
     '/img/bg-masthead.jpg',
     '/img/bg-showcase-1.jpg',
     '/img/bg-showcase-2.jpg',
     '/img/bg-showcase-3.jpg',
     '/img/favicon.png',  
     '/img/testimonials-1.jpg',
     '/img/testimonials-2.jpg',
     '/img/testimonials-3.jpg',
     './vendor/jquery/jquery.min.js',
     './vendor/bootstrap/js/bootstrap.bundle.min.js',

     
     
   ]);
 })
);
});
// The fetch event happens for the page request with the
// ServiceWorker's scope, and any request made within that
// page

self.addEventListener('fetch', function(event) {
//Respond with an entry from the cache if there is one.
//If there isn't, fetch from the network.
event.respondWith(
  // First we look for something in the caches that
  // matches the request
  caches.match(event.request).then(function(response) {
    // If we get something, we return it, otherwise
    // it's null, and we'll pass the request to
    // fetch, which will use the network
    return response || fetch(event.request);
  })
);
});
