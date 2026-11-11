const V="fs-8638e7f1eb";const FILES=["./", "index.html", "manifest.webmanifest", "assets/art.js", "assets/arti.js", "assets/artlogo.js", "assets/artm.js", "assets/artn.js", "assets/artu.js", "assets/artv.js", "assets/artw.js", "assets/artx.js", "assets/artz.js", "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png"];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(V).then(c=>Promise.all(FILES.map(f=>c.add(new Request(f,{cache:'reload'}))))).then(()=>self.skipWaiting())); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener('fetch',e=>{ if(e.request.method!=='GET') return; const u=new URL(e.request.url); if(u.origin!==location.origin) return;
  if(e.request.mode==='navigate'){ e.respondWith(fetch(e.request,{cache:'no-cache'}).catch(()=>caches.match('index.html'))); return; }
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request))); });
