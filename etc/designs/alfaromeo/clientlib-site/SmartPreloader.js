!function(e){function n(){}function t(e,n){return function(){e.apply(n,arguments)}}function o(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],s(e,this)}function r(e,n){for(;3===e._state;)e=e._value;return 0===e._state?void e._deferreds.push(n):(e._handled=!0,void l(function(){var t=1===e._state?n.onFulfilled:n.onRejected;if(null===t)return void(1===e._state?i:a)(n.promise,e._value);var o;try{o=t(e._value)}catch(r){return void a(n.promise,r)}i(n.promise,o)}))}function i(e,n){try{if(n===e)throw new TypeError("A promise cannot be resolved with itself.");if(n&&("object"==typeof n||"function"==typeof n)){var r=n.then;if(n instanceof o)return e._state=3,e._value=n,void c(e);if("function"==typeof r)return void s(t(r,n),e)}e._state=1,e._value=n,c(e)}catch(i){a(e,i)}}function a(e,n){e._state=2,e._value=n,c(e)}function c(e){2===e._state&&0===e._deferreds.length&&setTimeout(function(){e._handled||o._onUnhandledRejection(e._value)},1);for(var n=0,t=e._deferreds.length;t>n;n++)r(e,e._deferreds[n]);e._deferreds=null}function u(e,n,t){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof n?n:null,this.promise=t}function s(e,n){var t=!1;try{e(function(e){t||(t=!0,i(n,e))},function(e){t||(t=!0,a(n,e))})}catch(o){if(t)return;t=!0,a(n,o)}}var f=setTimeout,l="function"==typeof setImmediate&&setImmediate||function(e){f(e,1)},d=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};o.prototype["catch"]=function(e){return this.then(null,e)},o.prototype.then=function(e,t){var i=new o(n);return r(this,new u(e,t,i)),i},o.all=function(){var e=Array.prototype.slice.call(1===arguments.length&&d(arguments[0])?arguments[0]:arguments);return new o(function(n,t){function o(i,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var c=a.then;if("function"==typeof c)return void c.call(a,function(e){o(i,e)},t)}e[i]=a,0===--r&&n(e)}catch(u){t(u)}}if(0===e.length)return n([]);for(var r=e.length,i=0;i<e.length;i++)o(i,e[i])})},o.resolve=function(e){return e&&"object"==typeof e&&e.constructor===o?e:new o(function(n){n(e)})},o.reject=function(e){return new o(function(n,t){t(e)})},o.race=function(e){return new o(function(n,t){for(var o=0,r=e.length;r>o;o++)e[o].then(n,t)})},o._setImmediateFn=function(e){l=e},o._onUnhandledRejection=function(e){console.warn("Possible Unhandled Promise Rejection:",e)},"undefined"!=typeof module&&module.exports?module.exports=o:e.Promise||(e.Promise=o)}(this);var SmartPreloader=function(e){var n=void 0!=e.debug?e.debug:!1,t=e.order,o=[],r=e.css||{};r.resources=r.resources||[],r.basePath=r.basePath||"";var i=e.fonts||{};i.resources=i.resources||[],i.basePath=i.basePath||"";var a=e.js||{};a.resources=a.resources||[],a.basePath=a.basePath||"";var c=[],u=[],s=[],f=r.callback||new Function,l=i.callback||new Function,d=a.callback||new Function,h=e.callback||new Function,v=navigator.userAgent,A=function(){t=p(e.order),m();for(var n={css:{promise:w,callback:f},js:{promise:y,callback:d},fonts:{promise:b,callback:l}},r=0;r<t.length;r++)o.push(n[t[r]]);g()},p=function(e){return e&&3==e.length&&e.indexOf("css")>-1&&e.indexOf("fonts")>-1&&e.indexOf("js")>-1?e:["css","fonts","js"]},m=function(){for(var e in r.resources)c.push(T(r.resources[e]));for(var e in i.resources)u.push(E(i.resources[e]));for(var e in a.resources)s.push(x(a.resources[e]))},y=function(){return new Promise(function(e,n){k(0,e)})},w=function(){return P(c)},b=function(){return P(u)},g=function(e){var e=e||0;e<o.length?o[e].promise().then(function(){o[e].callback(),e++,g(e)}):h()},P=function(e){return new Promise(function(n,t){j();for(var o=[],r=0;r<e.length;r++){var i=new Promise(function(n){var t=I(e[r]);N(t,function(e){_(e.getAttribute("href")),n()})});o.push(i)}Promise.all(o).then(n)})},j=function(){n&&console.log("-----------------")},_=function(e){n&&(console.log(e),j())},k=function(e,n){var e=e||0;e<s.length?H(s[e],function(){return _(s[e]),e++,k.call(this,e,n)}):n()},E=function(e){var n;return n=O()?"woff2":v.indexOf("Android 4.")>-1&&v.indexOf("like Gecko")>-1&&-1===v.indexOf("Chrome")?"ttf":"woff",url=i.basePath+e+"/"+n+"/"+e+".css"},T=function(e){return F(r.basePath,e,"css")},x=function(e){return F(a.basePath,e,"js")},F=function(e,n,t){return-1==n.indexOf("//")?e+n+"."+t:n},O=function(){if(!("FontFace"in window))return!1;var e=new FontFace("t",'url( "data:application/font-woff2;base64,d09GMgABAAAAAAIkAAoAAAAABVwAAAHcAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABlYAgloKLEoBNgIkAxgLDgAEIAWDcgc1G7IEyB6SJAFID5YA3nAHC6h4+H7s27nP1kTyOoQkGuJWtNGIJKYznRI3VEL7IaHq985ZUuKryZKcAtJsi5eULwUybm9KzajBBhywZ5ZwoJNuwDX5C/xBjvz5DbsoNsvG1NGQiqp0NMLZ7JlnW+5MaM3HwcHheUQeiVokekHkn/FRdefvJaTp2PczN+I1Sc3k9VuX51Tb0Tqqf1deVXGdJsDOhz0/EffMOPOzHNH06pYkDDjs+P8fb/z/8n9Iq8ITzWywkP6PBMMN9L/O7vY2FNoTAkp5PpD6g1nV9WmyQnM5uPpAMHR2fe06jbfvzPriekVTQxC6lpKr43oDtRZfCATl5OVAUKykqwm9o8R/kg37cxa6eZikS7cjK4aIwoyh6jOFplhFrz2b833G3Jii9AjDUiAZ9AxZtxdEYV6imvRF0+0Nej3wu6nPZrTLh81AVcV3kmMVdQj6Qbe9qetzbuDZ7vXOlRrqooFSxCv6SfrDICA6rnHZXQPVcUHJYGcoqa3jVH7ATrjWBNYYkEqF3RFpVIl0q2JvMOJd7/TyjXHw2NyAuJpNaEbz8RTEVtCbSH7JrwQQOqwGl7sTUOtdBZIY2DKqKlvOmPvUxJaURAZZcviTT0SKHCXqzwc=" ) format( "woff2" )',{});return e.load()["catch"](function(){}),"loading"==e.status||"loaded"==e.status},I=function(e,n,t){function o(e){return a.body?e():void setTimeout(function(){o(e)})}function r(){c.addEventListener&&c.removeEventListener("load",r),c.media=t||"all"}var i,a=window.document,c=a.createElement("link");if(n)i=n;else{var u=(a.body||a.getElementsByTagName("head")[0]).childNodes;i=u[u.length-1]}var s=a.styleSheets;c.rel="stylesheet",c.href=e,c.media="only x",o(function(){i.parentNode.insertBefore(c,n?i:i.nextSibling)});var f=function(e){for(var n=c.href,t=s.length;t--;)if(s[t].href===n)return e();setTimeout(function(){f(e)})};return c.addEventListener&&c.addEventListener("load",r),c.onloadcssdefined=f,f(r),c},N=function(e,n){function t(){!o&&n&&(o=!0,n.call(e,e))}var o;e.addEventListener&&(e.addEventListener("load",t),e.addEventListener("error",t)),e.attachEvent&&(e.attachEvent("onload",t),e.attachEvent("onerror",t)),"isApplicationInstalled"in navigator&&"onloadcssdefined"in e&&e.onloadcssdefined(t)},H=function(e,n){var t,o=document.createElement("script");o.type="text/javascript",o.src=e,o.onload=n,o.onerror=n,t=document.getElementsByTagName("script")[0],t.parentNode.insertBefore(o,t)};A()};