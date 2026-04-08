// 缓存的名称（每次更新可以改版本号）
const CACHE_NAME = 'zhihuikuai-v1';

// 需要缓存的文件列表（你的网页依赖的资源）
const urlsToCache = [
  '/',
  '/index4.html',
  '/manifest.json'
];

// 安装 Service Worker 时，缓存文件
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// 拦截网络请求，优先从缓存返回
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});