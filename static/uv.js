importScripts('/static/jmw/jmw.bundle.js');
importScripts('/static/jmw/jmw.config.js');
importScripts('/static/jmw/jmw.sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
