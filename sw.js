if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const f=e=>i(e,o),l={module:{uri:o},exports:t,require:f};s[o]=Promise.all(n.map((e=>l[e]||f(e)))).then((e=>(r(...e),t)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-50f9efcf.css",revision:null},{url:"assets/index-9ae38c9a.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"CNAME",revision:"06bc5a0a92f3082839a63756574c4004"},{url:"index.html",revision:"047c599bfaf3034a1245ffe4c724cde0"},{url:"manifest.webmanifest",revision:"73dd198154072882f2547411fa8399ec"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"CNAME",revision:"06bc5a0a92f3082839a63756574c4004"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"manifest.webmanifest",revision:"73dd198154072882f2547411fa8399ec"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
