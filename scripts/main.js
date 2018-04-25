function hide(a){a.style.display="none"}function show(a){a.style.display=""}function query(a){return document.querySelector(a)}function queryAll(a){return Array.from(document.querySelectorAll(a))}function removeHighlight(){queryAll(".language").forEach(a=>a.classList.remove("highlighted"))}function loadHash(){removeHighlight();const a=location.hash.slice(1);if(showToolsFor(a),!!a){const b=document.querySelector(`[data-language=${a}]`);b&&b.classList.add("highlighted")}}function showToolsFor(a){const b=query("#showAllTools"),c=queryAll(".tool");if(!a)return hide(b),void c.forEach(show);const d=queryAll(".lang-language-independent"),e=queryAll(`.lang-${a}`),f=query(`[data-language="${a}"]`);return Array.isArray(e)&&0===e.length?void(f?(c.forEach(hide),show(b)):(c.forEach(show),hide(b))):void(c.forEach(hide),d.forEach(show),e.forEach(show),show(b))}document.addEventListener("DOMContentLoaded",()=>{loadHash(),window.addEventListener("hashchange",loadHash)}),!function(a,b,c,d,e){a[d]=a[d]||[],a[d].push({"gtm.start":new Date().getTime(),event:"gtm.js"});var g=b.getElementsByTagName(c)[0],f=b.createElement(c),h="dataLayer"==d?"":"&l="+d;f.async=!0,f.src="https://www.googletagmanager.com/gtm.js?id="+e+h,g.parentNode.insertBefore(f,g)}(window,document,"script","dataLayer","GTM-W5VNSDK");