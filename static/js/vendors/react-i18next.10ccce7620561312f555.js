"use strict";(self.webpackChunkrus_anonym=self.webpackChunkrus_anonym||[]).push([[750],{7031:(e,n,t)=>{t.d(n,{a:()=>d,b:()=>y,c:()=>b,d:()=>v,e:()=>h});var r=t(5671),a=t(3144),o=t(4942),i=t(7294),s=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230);/g,c={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…"},u=function(e){return c[e]};function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){(0,o.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var g,l={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:function(e){return e.replace(s,u)}},d=(0,i.createContext)();function b(){return l}var y=function(){function e(){(0,r.a)(this,e),this.usedNamespaces={}}return(0,a.a)(e,[{key:"addUsedNamespaces",value:function(e){var n=this;e.forEach((function(e){n.usedNamespaces[e]||(n.usedNamespaces[e]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function v(){return g}var h={type:"3rdParty",init:function(e){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};l=p(p({},l),e)}(e.options.react),function(e){g=e}(e)}}},4478:(e,n,t)=>{t.d(n,{a:()=>y});var r=t(9439),a=t(4942),o=t(7294),i=t(7031);function s(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"==typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var c={};function u(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"==typeof n[0]&&c[n[0]]||("string"==typeof n[0]&&(c[n[0]]=new Date),s.apply(void 0,n))}function f(e,n,t){e.loadNamespaces(n,(function(){if(e.isInitialized)t();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}}))}function p(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.languages[0],a=!!n.options&&n.options.fallbackLng,o=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var i=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!i(n.isLanguageChangingTo,e))&&(!!n.hasResourceBundle(r,e)||(!(n.services.backendConnector.backend&&(!n.options.resources||n.options.partialBundledLanguages))||!(!i(r,e)||a&&!i(o,e))))}function g(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return u("i18n.languages were undefined or empty",n.languages),!0;var r=void 0!==n.options.ignoreJSONStructure;return r?n.hasLoadedNamespace(e,{precheck:function(n,r){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!r(n.isLanguageChangingTo,e))return!1}}):p(e,n,t)}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){(0,a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var b=function(e,n){var t=(0,o.useRef)();return(0,o.useEffect)((function(){t.current=n?t.current:e}),[e,n]),t.current};function y(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,a=(0,o.useContext)(i.a)||{},s=a.i18n,c=a.defaultNS,p=t||s||(0,i.d)();if(p&&!p.reportNamespaces&&(p.reportNamespaces=new i.b),!p){u("You will need to pass in an i18next instance by using initReactI18next");var l=function(e){return Array.isArray(e)?e[e.length-1]:e},y=[l,{},!1];return y.t=l,y.i18n={},y.ready=!1,y}p.options.react&&void 0!==p.options.react.wait&&u("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var v=d(d(d({},(0,i.c)()),p.options.react),n),h=v.useSuspense,O=v.keyPrefix,m=e||c||p.options&&p.options.defaultNS;m="string"==typeof m?[m]:m||["translation"],p.reportNamespaces.addUsedNamespaces&&p.reportNamespaces.addUsedNamespaces(m);var w=(p.isInitialized||p.initializedStoreOnce)&&m.every((function(e){return g(e,p,v)}));function j(){return p.getFixedT(null,"fallback"===v.nsMode?m:m[0],O)}var N=(0,o.useState)(j),k=(0,r.a)(N,2),P=k[0],C=k[1],S=m.join(),I=b(S),E=(0,o.useRef)(!0);(0,o.useEffect)((function(){var e=v.bindI18n,n=v.bindI18nStore;function t(){E.current&&C(j)}return E.current=!0,w||h||f(p,m,(function(){E.current&&C(j)})),w&&I&&I!==S&&E.current&&C(j),e&&p&&p.on(e,t),n&&p&&p.store.on(n,t),function(){E.current=!1,e&&p&&e.split(" ").forEach((function(e){return p.off(e,t)})),n&&p&&n.split(" ").forEach((function(e){return p.store.off(e,t)}))}}),[p,S]);var x=(0,o.useRef)(!0);(0,o.useEffect)((function(){E.current&&!x.current&&C(j),x.current=!1}),[p]);var D=[P,p,w];if(D.t=P,D.i18n=p,D.ready=w,w)return D;if(!w&&!h)return D;throw new Promise((function(e){f(p,m,(function(){e()}))}))}}}]);