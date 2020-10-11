/* eslint-disable */

var version = '2.1';
var amp_version = '2.1';

const CACHE_VERSION = 1;
let CURRENT_CACHES = {
    offline: 'offline-v' + CACHE_VERSION
};

const OFFLINE_URL = 'offline.html';
const offline = "/";

function createCacheBustedRequest(url) {
    let request = new Request(url, {cache: 'reload'});
    if ('cache' in request) {
        return request;
    }
    let bustedUrl = new URL(url, self.location.href);
    bustedUrl.search += (bustedUrl.search ? '&' : '') + 'cachebust=' + Date.now();
    return new Request(bustedUrl);
}

self.addEventListener("install", function (event) {
    console.log('WORKER: install event in progress.');
    event.waitUntil(
        fetch(createCacheBustedRequest(offline)).then(function (response) {
            return caches
            .open(version + 'fundamentals')
            .then(function (cache) {
                return cache.put(OFFLINE_URL, response);
            })
            .then(function () {
                console.log('WORKER: install completed');
            })
        })
    );
});

self.addEventListener('activate', event => {
    let expectedCacheNames = Object.keys(CURRENT_CACHES).map(function (key) {
        return CURRENT_CACHES[key];
    });
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (expectedCacheNames.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', event => {
    if (event.request.mode === 'navigate' ||
        (event.request.method === 'GET' &&
            event.request.headers.get('accept').includes('text/html'))) {
            event.respondWith(
            fetch(event.request).catch(error => {
                return caches.match(OFFLINE_URL);
            })
        );
    }
});

importScripts('https://ssl.widgets.webengage.com/js/service-worker.js');
