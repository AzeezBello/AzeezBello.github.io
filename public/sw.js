self.addEventListener('install', function(event){
  event.waitUntil(
    caches.open('currency-converter-v1').then(function(cache){
      return cache.addAll([
        '/',
        'css/landing-page.min.css',
        'img/',
        'js/currency-converter.js',
        'favicon.png',
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css',
        'https://code.jquery.com/jquery-3.3.1.slim.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js'
    
      ]);
    })
  );
})
self.addEventListener('fetch', function(event){
  event.respondWith(
    fetch(event.request).then(function(response){
      if (response.status==404){
        return fetch('/img/bg-showcase-2.jpg');
      }
      return response;
    }).catch(function(){
      return new Response("Uh oh, that totally failed!");
    })
  );
});   