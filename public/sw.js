// Chrome's currently missing some useful cache methods,
// this polyfill adds them.
//importScripts('serviceworker-cache-polyfill.js');

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
       './css/landing-page.css',
       './js/currency-converter.js',
       
       
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
      if(response) return reponse;
      return fetch(event.request);
    })
  );
});
 