self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('mbm').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html'
     ]);
   })
 );
});
