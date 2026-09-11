const CACHE='contactos-cnd-pwa-v6.6';
const CORE=[
  './',
  './index.html',
  './manifest.webmanifest',
  './cintranaval-logo.png',
  './icon-192.png',
  './icon-512.png',
  './icon-1024.png',
  './apple-touch-icon-v650.png',
  './favicon-64.png'
];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))
});
self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  )
});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  if(event.request.mode==='navigate'){
    event.respondWith(
      fetch(event.request).then(r=>{
        const copy=r.clone();
        caches.open(CACHE).then(c=>c.put('./index.html',copy));
        return r
      }).catch(()=>caches.match('./index.html'))
    );
    return;
  }
  event.respondWith(
    caches.match(event.request).then(cached=>cached||fetch(event.request).then(r=>{
      const copy=r.clone();
      caches.open(CACHE).then(c=>c.put(event.request,copy));
      return r
    }))
  );
});
