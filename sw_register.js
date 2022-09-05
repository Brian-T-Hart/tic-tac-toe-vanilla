"use strict";
// register service worker
var registerUrl = '/sw_cached_site.js';
var swScope = '/';
if (location.hostname == 'brian-t-hart.github.io') {
    registerUrl = '/tic-tac-toe-vanilla/sw_cached_site.js';
    swScope = '/tic-tac-toe-vanilla/';
}
//make sure sw are supported
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register(registerUrl, { scope: swScope })
            .then(() => console.log('Serviceworker registered'))
            .catch(err => console.log(`ServiceWorker error: ${err}`));
    });
}
else {
    console.log('serviceWorker not in navigator');
}
