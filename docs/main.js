(()=>{"use strict";var t={208:(t,e,n)=>{n.d(e,{A:()=>u});var o=n(601),a=n.n(o),r=n(314),c=n.n(r),i=n(417),s=n.n(i),d=new URL(n(590),n.b),p=c()(a()),l=s()(d);p.push([t.id,`@font-face {\n    font-family: 'Ubuntu';\n    src: url(${l});\n}\n\n*{\n    font-family: 'Ubuntu';\n}\n\nbody, #forecast-form>input, *:focus, button{\n    background-color: #FFF3F0;\n}\n\n.forecast-card{\n    border: 1px solid black;\n    width: 416px;\n}\n\n.main{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 150px;\n    gap: 16px;\n}\n\n#forecast-form>input{\n    border: none;\n    border-bottom: 1px solid rgb(68, 68, 68);\n    font-size: 16px;\n    width: 450px;\n}\n\nbutton{\n    font-size: 16px;\n    border: none;\n    outline: none;\n}\n\n.tabs>button{\n    border-bottom: 1px solid rgb(68, 68, 68);\n}\n\n*:focus{\n    outline: none;\n}\n\n.forecast-content{\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    margin-top: 50px;\n}\n\n.tabs{\n    display: flex;\n    justify-content: center;\n    gap: 16px;\n}\n\n.tabs>button{\n    width: 200px;\n}\n\n.forecast-card{\n    background-color: #788AA3;\n    border: none;\n    border-radius: 8px;\n    color: #FFF3F0;\n    padding: 16px;\n    font-size: 20px;\n}\n\n.cards{\n    display: flex;\n    gap: 20px;\n}\n\n#today:focus, #expanded:focus{\n    border-bottom: 1px solid #0C6291;\n    color: #0C6291;\n}`,""]);const u=p},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,a,r){"string"==typeof t&&(t=[[null,t,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<t.length;d++){var p=[].concat(t[d]);o&&c[p[0]]||(void 0!==r&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=r),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),e.push(p))}},e}},417:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var r={},c=[],i=0;i<t.length;i++){var s=t[i],d=o.base?s[0]+o.base:s[0],p=r[d]||0,l="".concat(d," ").concat(p);r[d]=p+1;var u=n(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=a(m,o);o.byIndex=i,e.splice(i,0,{identifier:l,updater:f,references:1})}c.push(l)}return c}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var r=o(t=t||[],a=a||{});return function(t){t=t||[];for(var c=0;c<r.length;c++){var i=n(r[c]);e[i].references--}for(var s=o(t,a),d=0;d<r.length;d++){var p=n(r[d]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}r=s}}},659:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,a&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},590:(t,e,n)=>{t.exports=n.p+"1cbb1b79a23478cc89ad.ttf"}},e={};function n(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={id:o,exports:{}};return t[o](r,r.exports,n),r.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&(!t||!/^http(s?):/.test(t));)t=o[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var t=n(72),e=n.n(t),o=n(825),a=n.n(o),r=n(659),c=n.n(r),i=n(56),s=n.n(i),d=n(540),p=n.n(d),l=n(113),u=n.n(l),m=n(208),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=c().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=p(),e()(m.A,f),m.A&&m.A.locals&&m.A.locals;const y="3bd87e15a65841aca9734055241305",h=async()=>{v.innerHTML="",g=x.value;let t=await async function(t){const e=new URLSearchParams({q:t,lang:"pt"}),n=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${y}&q=${e}`),o=await n.json(),a=o.forecast.forecastday[0],r=o.location;return{max_temp:a.day.maxtemp_c,min_temp:a.day.mintemp_c,uv:a.day.uv,humidity:a.day.avghumidity,chance_of_rain:a.day.daily_chance_of_rain,total_precipitation:a.day.totalprecip_mm,date:a.date,city_name:r.name,country:r.country,localtime:r.localtime}}(g),e=new Date(t.localtime),n=e.getDate(),o=e.getMonth();const a=document.createElement("div");a.classList.toggle("forecast-card");const r=document.createElement("h2");r.textContent=t.city_name+`, ${t.country} - ${n} / ${o+1}`,a.appendChild(r);const c=document.createElement("p");c.textContent=`${t.min_temp}ºC / ${t.max_temp}ºC`,a.appendChild(c);const i=document.createElement("p");i.textContent=`Índice UV: ${t.uv}`,a.appendChild(i);const s=document.createElement("p");s.textContent=`Umidade do ar: ${t.humidity}%`,a.appendChild(s);const d=document.createElement("p");d.textContent=`Chance de precipitação: ${t.chance_of_rain}%`,a.append(d);const p=document.createElement("p");p.textContent=`Precipitação total: ${t.total_precipitation} mm`,a.append(p),v.appendChild(a)},v=document.querySelector(".cards"),x=document.querySelector("#location"),b=document.querySelector(".forecast-content");b.style.visibility="hidden";let g="";document.querySelector("#forecast-form").addEventListener("submit",(async t=>{t.preventDefault(),h(),b.style.visibility="visible"})),document.querySelector("#today").addEventListener("click",(async()=>{h()})),document.querySelector("#expanded").addEventListener("click",(async()=>{v.innerHTML="",(await async function(t){const e=new URLSearchParams({q:t,days:3}),n=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${y}&q=${e}`),o=await n.json(),a=o.forecast.forecastday,r=o.location,c=[];return a.forEach((t=>{const e={max_temp:t.day.maxtemp_c,min_temp:t.day.mintemp_c,uv:t.day.uv,humidity:t.day.avghumidity,chance_of_rain:t.day.daily_chance_of_rain,total_precipitation:t.day.totalprecip_mm,date:t.date,city_name:r.name,country:r.country,localtime:r.localtime};c.push(e)})),c}(g)).forEach((t=>{const e=document.createElement("div");e.classList.toggle("forecast-card");const n=document.createElement("h2");n.textContent=t.city_name+`, ${t.country} - ${t.date}`,e.appendChild(n);const o=document.createElement("p");o.textContent=`${t.min_temp}ºC / ${t.max_temp}ºC`,e.appendChild(o);const a=document.createElement("p");a.textContent=`Índice UV: ${t.uv}`,e.appendChild(a);const r=document.createElement("p");r.textContent=`Umidade do ar: ${t.humidity}%`,e.appendChild(r);const c=document.createElement("p");c.textContent=`Chance de precipitação: ${t.chance_of_rain}%`,e.append(c);const i=document.createElement("p");i.textContent=`Precipitação total: ${t.total_precipitation} mm`,e.append(i),v.appendChild(e)}))}))})()})();