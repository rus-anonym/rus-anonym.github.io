(()=>{"use strict";var e,t,r,n={3326:(e,t,r)=>{r.d(t,{a:()=>u,b:()=>s});var n=r(6609),o=r(7031);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function i(){i=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",c=n.asyncIterator||"@@asyncIterator",l=n.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var o=t&&t.prototype instanceof d?t:d,a=Object.create(o.prototype),i=new E(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return k()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=h(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),a}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var f={};function d(){}function p(){}function y(){}var v={};s(v,o,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(S([])));m&&m!==t&&r.call(m,o)&&(v=m);var b=y.prototype=d.prototype=Object.create(v);function w(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function I(e,t){function n(o,i,c,l){var s=h(e[o],e,i);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==a(f)&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,c,l)}),(function(e){n("throw",e,c,l)})):t.resolve(f).then((function(e){u.value=e,c(u)}),(function(e){return n("throw",e,c,l)}))}l(s.arg)}var o;this._invoke=function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}}function L(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,L(e,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=h(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,f;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=y,s(b,"constructor",y),s(y,"constructor",p),p.displayName=s(y,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,s(e,l,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},w(I.prototype),s(I.prototype,c,(function(){return this})),e.AsyncIterator=I,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new I(u(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},w(b),s(b,l,"Generator"),s(b,o,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=S,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),_(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:S(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}function c(e,t,r,n,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,o)}var l={fallbackLng:"en",resources:{en:{translation:JSON.parse('{"languages":{"ru":"Russian","en":"English"},"themes":{"light":"Light","dark":"Dark","auto":"System"},"pages":{"main":{"title":"Main","socials":{"npm":{"utils":"Personal set of utilities from RusAnonym","scheduler":"Task scheduling package"},"contactMe":"Contact me","alsoExist":"I also exist here","occasionallyLook":"I occasionally look in","mlbb":{"mainAcc":"Main account","secondAcc":"Second account","copyID":"Copy ID","copied":"Copied","team":"Team","group":"Group"}},"donateToMe":"Donate to me :)"},"articles":{"title":"Articles","backward":"Go back","open":"Open article","language":"Article language","stillOpen":"Still open the article","published":"Published by","filters":{"title":"Filters","search":"Search","anotherLanguage":"Show articles in another language","explicit":"Show articles with explicit content"},"notFound":"No articles by the selected filters were found","warning":"Warning","explicitWarning":"This article may contain inappropriate content","loading":"Loading"},"utils":{"title":"Utils","start":"Start","close":"Close","notAvailable":"The app is not available","onlyMobile":"Only available on mobile devices","onlyDesktop":"Only available on computers","multiplatform":"Available on computers and mobile devices","filters":{"title":"Filters","search":"Search","anotherLanguage":"Show utilities that do not support the current language"},"notFound":"No utils by the selected filters were found","list":{"cat":{"description":"Infinite cat scroll"},"qr":{"rescan":"Rescan","requestCamera":"Request access to the camera","initializeCamera":"Initializing the camera","errorCameraInitialize":"Camera initialization error","result":{"text":"Text","created":"Created"},"notDetect":"Not detected","perhapsYouMeant":"Perhaps you meant","choosePhoto":"Choose a photo","selectFile":"Select a file","selectScanFormats":"Select formats for scanning","emptyFormats":"It looks like you have selected all the formats","scan":"Scan","selectCamera":"Switch to the camera"},"speedtype":{"description":"Check your typing speed","continue":"Continue","switchLayout":"Please change your keyboard layout to English","text":"Type this text and find out your typing speed","results":"Results","cpm":"Characters per minute","errors":"Number of errors","restart":"Take the test again","history":"History","clearHistory":"Clear history","bestResult":"Best result","worstResult":"Worst result","total":"Total","formula":"The result is calculated by the formula"}}},"prototypes":{"title":"Prototypes","start":"Watch","close":"Close"},"about":{"title":"About me","fullName":"Alexander Andreevich Semin","specialty":"Cybersecurity specialist","place":"Place of residence","place_value":"Russia, Moscow","relocation":"Relocation is not possible","birthday":"Date of birth","years_zero":"years old","years_one":"year old","years_two":"years old","years_few":"years old","years_many":"years old","years_other":"years old","phone":"Phone number","email":"E-Mail","salary":"Desired salary","salary_value":"Not specified","willingessToBusinessTrip":"Willingness to business trip","willingessToBusinessTrip_value":"No","employment":"Employment","employment_value":"Internship","sсheduleOfWork":"Schedule of work","sсheduleOfWork_value":"Flexible schedule","citizenship":"Citizenship","citizenship_value":"Russia 🇷🇺","languages":"Languages","languages_value":"Russian (native), English (A2)"}},"utils":{"changeTheme":"Change theme","changeLanguage":"Русский","feature":"There\'s something coming up soon :)"}}')},ru:{translation:JSON.parse('{"languages":{"ru":"Русский","en":"Английский"},"themes":{"light":"Светлая","dark":"Тёмная","auto":"Системная"},"pages":{"main":{"title":"Главная","socials":{"npm":{"utils":"Персональный набор утилит от меня","scheduler":"Планировщик задач"},"contactMe":"Связаться со мной","alsoExist":"Также я существую тут","occasionallyLook":"Изредка заглядываю","mlbb":{"mainAcc":"Основной аккаунт","secondAcc":"Второй аккаунт","copyID":"Скопировать ID","copied":"Скопировано","team":"Команда","group":"Группа"}},"donateToMe":"Задонатить мне :)"},"articles":{"title":"Статьи","backward":"Назад","open":"Открыть статью","language":"Язык статьи","stillOpen":"Всё равно открыть статью","published":"Опубликована","filters":{"title":"Фильтры","search":"Поиск","anotherLanguage":"Показывать статьи на другом языке","explicit":"Показывать статьи с неприемлемым контентом"},"notFound":"Статей по выбранным фильтрам не найдено","warning":"Предупреждение","explicitWarning":"Эта статья может содержать неприемлемый контент","showOtherArticles":"Показать статьи на других языках","hideOtherArticles":"Скрыть статьи на других языках","loading":"Загрузка"},"utils":{"title":"Утилиты","start":"Запустить","close":"Закрыть","notAvailable":"Приложение недоступно","onlyMobile":"Доступно только на мобильных устройствах","onlyDesktop":"Доступно только на компьютерах","multiplatform":"Доступно на компьютерах и мобильных устройствах","filters":{"title":"Фильтры","search":"Поиск","anotherLanguage":"Показывать утилиты которые не поддерживают текущий язык"},"notFound":"Утилит по заданным фильтрам не найдено","list":{"cat":{"description":"Бесконечная лента с котиками"},"qr":{"rescan":"Сканировать заново","requestCamera":"Запросить доступ к камере","initializeCamera":"Инициализация камеры","errorCameraInitialize":"Ошибка инициализации камеры","result":{"text":"Текст","created":"Дата создания"},"notDetect":"Не обнаружено","perhapsYouMeant":"Возможно вы имели в виду","choosePhoto":"Выберите фотографию","selectFile":"Выберите файл","selectScanFormats":"Выберите форматы для сканирования","emptyFormats":"Похоже вы выбрали все форматы","scan":"Сканировать","selectCamera":"Переключиться на камеру"},"speedtype":{"description":"Проверь свою скорость печати","continue":"Продолжить","switchLayout":"Пожалуйста, смени раскладку клавиатуры на Русский","text":"Напечатай этот текст и узнай свою скорость печати","results":"Результаты","cpm":"Символов в минуту","errors":"Количество ошибок","restart":"Пройти тест заново","history":"История","clearHistory":"Очистить историю","bestResult":"Лучший результат","worstResult":"Худший результат","total":"Всего","formula":"Результат вычисляется по формуле"}}},"prototypes":{"title":"Прототипы","start":"Посмотреть","close":"Закрыть"},"about":{"title":"Обо мне","fullName":"Семин Александр Андреевич","specialty":"Техник по защите информации","place":"Место проживания","place_value":"Россия, Москва","relocation":"Переезд невозможен","birthday":"Дата рождения","years_zero":"лет","years_one":"год","years_two":"года","years_few":"лет","years_many":"лет","years_other":"лет","phone":"Номер телефона","email":"Электронная почта","salary":"Желаемая зарплата","salary_value":"Не указана","willingessToBusinessTrip":"Готовность к командировкам","willingessToBusinessTrip_value":"Нет","employment":"Занятость","employment_value":"Стажировка","sсheduleOfWork":"График работы","sсheduleOfWork_value":"Гибкий график","citizenship":"Гражданство","citizenship_value":"Россия 🇷🇺","languages":"Языки","languages_value":"Русский (родной), Английский (A2)"}},"utils":{"changeTheme":"Сменить тему","changeLanguage":"English","feature":"Скоро тут что-то появится :)"}}')}},interpolation:{escapeValue:!1}},s=function(){var e,t=(e=i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.a.use(o.e),e.next=3,n.a.init(l);case 3:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){c(a,n,o,i,l,"next",e)}function l(e){c(a,n,o,i,l,"throw",e)}i(void 0)}))});return function(){return t.apply(this,arguments)}}();const u=n.a},657:(e,t,r)=>{r.d(t,{a:()=>f});var n=r(8949),o=r(7563),a=r(6729),i=r.n(a);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const f=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e._createDefaultSession();s(this,e),h(this,"_activeView",void 0),h(this,"_activePanel",void 0),h(this,"activeModal",void 0),h(this,"isGlobalLoading",void 0),h(this,"popout",void 0),h(this,"events",void 0),this._activeView=t.activeView,this._activePanel=t.activePanel,this.activeModal=t.activeModal,this.isGlobalLoading=t.isGlobalLoading,this.popout=t.popout,this.events=t.events,(0,n.l)(this)}var t,r,a;return t=e,a=[{key:"load",value:function(){var t=c(window.location.hash.split("?"),1),r=c(t[0].substring(2).split("/"),2),n=r[0],o=r[1];return n?new e({activeView:n,activePanel:o||null,activeModal:null,isGlobalLoading:!0,popout:null,events:new(i())}):new e}},{key:"_createDefaultSession",value:function(){return{activeView:"",activePanel:null,activeModal:null,isGlobalLoading:!0,popout:null,events:new(i())}}}],(r=[{key:"_updatePath",value:function(){var e="";null!==this._activeView&&(e+="/".concat(this._activeView)),null!==this._activePanel&&(e+="/".concat(this._activePanel)),window.location.hash=e}},{key:"activeView",get:function(){return this._activeView},set:function(e){this._activeView=e,this._activePanel=null,this._updatePath()}},{key:"activePanel",get:function(){return this._activePanel},set:function(e){this._activePanel=e,this._updatePath()}},{key:"url",get:function(){return window.location.href.split("?")[0]}},{key:"queryParams",get:function(){var e=window.location.href.split("?")[1];return o.parse(e)}},{key:"addQueryParam",value:function(e,t){var r=c(window.location.href.split("?"),2),n=r[0],o=r[1],a=new URLSearchParams(o);a.set(e,t),window.location.href="".concat(n,"?").concat(a.toString())}},{key:"rempveQueryParam",value:function(e){var t=c(window.location.href.split("?"),2),r=t[0],n=t[1],o=new URLSearchParams(n);o.delete(e),window.location.href="".concat(r,"?").concat(o.toString())}},{key:"clearQueryParams",value:function(){var e=window.location.href.split("?")[0];window.location.href=e}}])&&u(t.prototype,r),a&&u(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}().load()},7909:(e,t,r)=>{r.d(t,{a:()=>l});var n=r(8949),o=r(3326);function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const l=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e._createDefaultSession();a(this,e),c(this,"_theme",void 0),c(this,"_language",void 0),this._theme=t.theme,this._language=t.language,document.documentElement.setAttribute("lang",this.language),(0,n.l)(this),this.save()}var t,r,l;return t=e,l=[{key:"load",value:function(){var t=localStorage.getItem("session");return null!==t?new e(JSON.parse(t)):new e}},{key:"_createDefaultSession",value:function(){return{theme:"auto",language:["en","ru"].find((function(e){return new RegExp(e).test(navigator.language)}))||"en"}}}],(r=[{key:"save",value:function(){return localStorage.setItem("session",JSON.stringify(this._raw))}},{key:"_raw",get:function(){return{theme:this._theme,language:this._language}}},{key:"theme",get:function(){return"auto"===this._theme?window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":this._theme},set:function(e){this._theme=e,this.save()}},{key:"language",get:function(){return this._language},set:function(e){document.documentElement.setAttribute("lang",e),this._language=e,o.a.changeLanguage(this._language),this.save()}}])&&i(t.prototype,r),l&&i(t,l),Object.defineProperty(t,"prototype",{writable:!1}),e}().load()},6523:(e,t,r)=>{var n=r(7294),o=r(745),a=r(3379),i=r.n(a),c=r(7795),l=r.n(c),s=r(569),u=r.n(s),h=r(3565),f=r.n(h),d=r(9216),p=r.n(d),y=r(4589),v=r.n(y),g=r(5996),m={};m.styleTagTransform=v(),m.setAttributes=f(),m.insert=u().bind(null,"head"),m.domAPI=l(),m.insertStyleElement=p();i()(g.a,m);g.a&&g.a.locals&&g.a.locals;r(8776),r(4253),r(505);var b=r(9323),w=r(9489),I=r(7909),L=r(657),x=r(3326);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function E(){E=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var o=t&&t.prototype instanceof h?t:h,a=Object.create(o.prototype),i=new x(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return k()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),a}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var u={};function h(){}function f(){}function d(){}var p={};c(p,o,(function(){return this}));var y=Object.getPrototypeOf,v=y&&y(y(S([])));v&&v!==t&&r.call(v,o)&&(p=v);var g=d.prototype=h.prototype=Object.create(p);function m(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){function n(o,a,i,c){var l=s(e[o],e,a);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==_(h)&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(h).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}var o;this._invoke=function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function I(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(I,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return f.prototype=d,c(g,"constructor",d),c(d,"constructor",f),f.displayName=c(d,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},m(b.prototype),c(b.prototype,a,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new b(l(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},m(g),c(g,i,"Generator"),c(g,o,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=S,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:S(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}function S(e,t,r,n,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,o)}var k=n.lazy((function(){return Promise.all([r.e(406),r.e(8750),r.e(7655),r.e(8338),r.e(3607),r.e(4828),r.e(821),r.e(4094)]).then(r.bind(r,9415))}));const P=(0,b.a)((function(){return(0,n.useEffect)((function(){var e;(e=E().mark((function e(){return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.b)();case 2:return e.next=4,x.a.changeLanguage(I.a.language);case 4:L.a.isGlobalLoading=!1;case 5:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){S(a,n,o,i,c,"next",e)}function c(e){S(a,n,o,i,c,"throw",e)}i(void 0)}))})()}),[]),n.createElement(w.k,{appearance:I.a.theme,webviewType:w.gb.INTERNAL,transitionMotionEnabled:!1},n.createElement(w.a,null,n.createElement(w.c,{mode:"full"},L.a.isGlobalLoading?n.createElement(w.X,{popout:n.createElement(w.O,{state:"loading"})}):n.createElement(n.Suspense,{fallback:n.createElement(w.X,{popout:n.createElement(w.O,{state:"loading"})})},n.createElement(k,null)))))}));o.createRoot(document.getElementById("root")).render(n.createElement(P,null))},5996:(e,t,r)=>{r.d(t,{a:()=>c});var n=r(8081),o=r.n(n),a=r(3645),i=r.n(a)()(o());i.push([e.id,"::-webkit-scrollbar {\n    display: none;\n}\n",""]);const c=i},5225:e=>{e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjhweCIgdmlld0JveD0iMCAwIDIwIDgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+dG9vbHRpcF90aXA8L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4gICAgPGRlZnM+PC9kZWZzPiAgICA8ZyBpZD0iTWFzdGVyLUtpdCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+ICAgICAgICA8cGF0aCBkPSJNMTAsMCBDMTMuNSwwIDE1LjUsOCAyMCw4IEwwLDggQzQuNSw4IDYuNSwwIDEwLDAgWiIgaWQ9InRvb2x0aXBfdGlwIiBmaWxsPSIjNDdhM2ZmIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4gICAgPC9nPjwvc3ZnPg=="},4047:e=>{e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjhweCIgdmlld0JveD0iMCAwIDIwIDgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+dG9vbHRpcF90aXA8L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4gICAgPGRlZnM+PC9kZWZzPiAgICA8ZyBpZD0iTWFzdGVyLUtpdCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+ICAgICAgICA8cGF0aCBkPSJNMTAsMCBDMTMuNSwwIDE1LjUsOCAyMCw4IEwwLDggQzQuNSw4IDYuNSwwIDEwLDAgWiIgaWQ9InRvb2x0aXBfdGlwIiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4gICAgPC9nPjwvc3ZnPg=="}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=n,a.amdO={},e=[],a.O=(t,r,n,o)=>{if(!r){var i=1/0;for(u=0;u<e.length;u++){for(var[r,n,o]=e[u],c=!0,l=0;l<r.length;l++)(!1&o||i>=o)&&Object.keys(a.O).every((e=>a.O[e](r[l])))?r.splice(l--,1):(c=!1,o<i&&(i=o));if(c){e.splice(u--,1);var s=n();void 0!==s&&(t=s)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,n,o]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[])),a.u=e=>"static/js/"+{199:"fcb19ed1a2cbba14c804",769:"ccecb5899b07edaf257e",821:"75f50a8e68358f605f65",1311:"11b14c4f670226036fe9",1400:"46a9e3ccd95e1d73dfaa",1475:"6722793c2f62f7d8fc96",2019:"f015ef6ac657152d57a9",2133:"253c81a7dadc6188064d",2360:"4a4225042505c3f9ec3c",2950:"1502f7c155f5168bb39d",3285:"9011e87d16a807a4192e",3336:"31e2ee70fc7a495aa2cf",3476:"b26786b99333f08dcc83",3607:"a0ed58b59543c9742259",4094:"c60abda4115e38d59cb9",4399:"41527d74ab2fda9f1296",4828:"00a13d70c01062acfbc4",4879:"3b26f7a1a3e80320a371",5020:"61946b13b1ff82b3f08b",5149:"cfaa421508589cc69dae",6018:"9ba258694b79e750c4d8",7180:"85b2a30ad97bdd4e9c90",7233:"8963384c53665734c758",7321:"8508009d5fc6adbfad37",7655:"464ebb7e53c882d3abd6",7818:"15c5b225cf8a0b9187f3",8193:"7b2b6958fbd200be8a0a",8338:"49ec581c0934dc71400e",8520:"79a3fc55518b121d1210",8741:"4da4255f1e11b402632b",9086:"ea62425423ac94be3093",9383:"0f51ded8b8d05b176e57",9458:"d9b693755f4bb620539d",9538:"34f38e0f59c05537f5ce",9574:"7732eea84bcf6016c018",9596:"19f9be0e27a018661aec"}[e]+".js",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},r="rus-anonym:",a.l=(e,n,o,i)=>{if(t[e])t[e].push(n);else{var c,l;if(void 0!==o)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var h=s[u];if(h.getAttribute("src")==e||h.getAttribute("data-webpack")==r+o){c=h;break}}c||(l=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.setAttribute("data-webpack",r+o),c.src=e),t[e]=[n];var f=(r,n)=>{c.onerror=c.onload=null,clearTimeout(d);var o=t[e];if(delete t[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((e=>e(n))),r)return r(n)},d=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),l&&document.head.appendChild(c)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{a.b=document.baseURI||self.location.href;var e={179:0};a.f.j=(t,r)=>{var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var i=a.p+a.u(t),c=new Error;a.l(i,(r=>{if(a.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,n[1](c)}}),"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[i,c,l]=r,s=0;if(i.some((t=>0!==e[t]))){for(n in c)a.o(c,n)&&(a.m[n]=c[n]);if(l)var u=l(a)}for(t&&t(r);s<i.length;s++)o=i[s],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(u)},r=self.webpackChunkrus_anonym=self.webpackChunkrus_anonym||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),a.nc=void 0;var i=a.O(void 0,[406,8750,2917,6762,3190,4953,3412,9157,6847,4374,4680,6818,6246,5488,9136,4049,6625,8939,5561,1121],(()=>a(6523)));i=a.O(i)})();