(()=>{"use strict";var e,t,r,n={3326:(e,t,r)=>{r.d(t,{a:()=>s,b:()=>u});var n=r(6609),o=r(8225);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function i(){i=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},c=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function f(e,t,r,o){var a=t&&t.prototype instanceof p?t:p,i=Object.create(a.prototype),c=new O(o||[]);return n(i,"_invoke",{value:E(e,r,c)}),i}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=f;var d={};function p(){}function y(){}function v(){}var m={};s(m,c,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(P([])));b&&b!==t&&r.call(b,c)&&(m=b);var w=v.prototype=p.prototype=Object.create(m);function _(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function o(n,i,c,l){var u=h(e[n],e,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==a(f)&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){o("next",e,c,l)}),(function(e){o("throw",e,c,l)})):t.resolve(f).then((function(e){s.value=e,c(s)}),(function(e){return o("throw",e,c,l)}))}l(u.arg)}var i;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){o(e,r,t,n)}))}return i=i?i.then(n,n):n()}})}function E(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return T()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=h(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function L(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,L(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=h(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,d;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function P(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:T}}function T(){return{value:void 0,done:!0}}return y.prototype=v,n(w,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:y,configurable:!0}),y.displayName=s(v,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,s(e,u,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},_(S.prototype),s(S.prototype,l,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new S(f(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},_(w),s(w,u,"Generator"),s(w,c,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=P,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:P(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}function c(e,t,r,n,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,o)}var l={fallbackLng:"en",resources:{en:{translation:JSON.parse('{"languages":{"ru":"Russian","en":"English"},"themes":{"light":"Light","dark":"Dark","auto":"System"},"pages":{"main":{"title":"Main","socials":{"npm":{"utils":"Personal set of utilities from RusAnonym","scheduler":"Task scheduling package"},"contactMe":"Contact me","alsoExist":"I also exist here","occasionallyLook":"I occasionally look in","mlbb":{"mainAcc":"Main account","secondAcc":"Second account","copyID":"Copy ID","copied":"Copied","team":"Team","group":"Group"}},"donateToMe":"Donate to me :)"},"articles":{"title":"Articles","backward":"Go back","open":"Open article","language":"Article language","stillOpen":"Still open the article","published":"Published by","filters":{"title":"Filters","search":"Search","anotherLanguage":"Show articles in another language","explicit":"Show articles with explicit content"},"notFound":"No articles by the selected filters were found","warning":"Warning","explicitWarning":"This article may contain inappropriate content","loading":"Loading"},"utils":{"title":"Utils","start":"Start","close":"Close","notAvailable":"The app is not available","onStartError":"Error when launching the utility","backToList":"Back to list","onlyMobile":"Only available on mobile devices","onlyDesktop":"Only available on computers","multiplatform":"Available on computers and mobile devices","filters":{"title":"Filters","search":"Search","anotherLanguage":"Show utilities that do not support the current language"},"notFound":"No utils by the selected filters were found","list":{"cat":{"description":"Infinite cat scroll"},"qr":{"rescan":"Rescan","requestCamera":"Request access to the camera","initializeCamera":"Initializing the camera","errorCameraInitialize":"Camera initialization error","result":{"text":"Text","created":"Created"},"notDetect":"Not detected","perhapsYouMeant":"Perhaps you meant","choosePhoto":"Choose a photo","selectFile":"Select a file","selectScanFormats":"Select formats for scanning","emptyFormats":"It looks like you have selected all the formats","scan":"Scan","selectCamera":"Switch to the camera"},"speedtype":{"description":"Check your typing speed","continue":"Continue","switchLayout":"Please change your keyboard layout to English","text":"Type this text and find out your typing speed","results":"Results","cpm":"Characters per minute","errors":"Number of errors","restart":"Take the test again","history":"History","clearHistory":"Clear history","bestResult":"Best result","worstResult":"Worst result","total":"Total","formula":"The result is calculated by the formula"},"demotivator":{"title":"Title","subtitle":"Subtitle","fontSize":"Font size","uploadImage":"Upload image","openGallery":"Open gallery","basedOn":"Based on","author":"author","copy":"Copy","reset":"Reset","notFoundClipboardImage":"Image not found on the clipboard","copiedToClipboard":"Demotivator copied to the clipboard","savedOnDevice":"The demotivator is saved on the device"}}},"prototypes":{"title":"Prototypes","start":"Watch","close":"Close"},"about":{"title":"About me","fullName":"Alexander Andreevich Semin","specialty":"Cybersecurity specialist","place":"Place of residence","place_value":"Russia, Moscow","relocation":"Relocation is not possible","birthday":"Date of birth","years_zero":"years old","years_one":"year old","years_two":"years old","years_few":"years old","years_many":"years old","years_other":"years old","phone":"Phone number","email":"E-Mail","salary":"Desired salary","salary_value":"Not specified","willingessToBusinessTrip":"Willingness to business trip","willingessToBusinessTrip_value":"No","employment":"Employment","employment_value":"Internship","sсheduleOfWork":"Schedule of work","sсheduleOfWork_value":"Flexible schedule","citizenship":"Citizenship","citizenship_value":"Russia 🇷🇺","languages":"Languages","languages_value":"Russian (native), English (A2)"},"aboutSite":{"title":"About site","github":"Source code of site","dreamTeam":"Dream Team","dreamTeamDescription":"Assisted in the development of the","RusAnonymTeam":"And thank you to all the members of the group"}},"utils":{"changeTheme":"Change theme","changeLanguage":"Русский","feature":"There\'s something coming up soon :)","additionalNavigationMenu":"Additional menu"}}')},ru:{translation:JSON.parse('{"languages":{"ru":"Русский","en":"Английский"},"themes":{"light":"Светлая","dark":"Тёмная","auto":"Системная"},"pages":{"main":{"title":"Главная","socials":{"npm":{"utils":"Персональный набор утилит от меня","scheduler":"Планировщик задач"},"contactMe":"Связаться со мной","alsoExist":"Также я существую тут","occasionallyLook":"Изредка заглядываю","mlbb":{"mainAcc":"Основной аккаунт","secondAcc":"Второй аккаунт","copyID":"Скопировать ID","copied":"Скопировано","team":"Команда","group":"Группа"}},"donateToMe":"Задонатить мне :)"},"articles":{"title":"Статьи","backward":"Назад","open":"Открыть статью","language":"Язык статьи","stillOpen":"Всё равно открыть статью","published":"Опубликована","filters":{"title":"Фильтры","search":"Поиск","anotherLanguage":"Показывать статьи на другом языке","explicit":"Показывать статьи с неприемлемым контентом"},"notFound":"Статей по выбранным фильтрам не найдено","warning":"Предупреждение","explicitWarning":"Эта статья может содержать неприемлемый контент","showOtherArticles":"Показать статьи на других языках","hideOtherArticles":"Скрыть статьи на других языках","loading":"Загрузка"},"utils":{"title":"Утилиты","start":"Запустить","close":"Закрыть","onStartError":"Ошибка при запуске утилиты","backToList":"Назад к списку","notAvailable":"Приложение недоступно","onlyMobile":"Доступно только на мобильных устройствах","onlyDesktop":"Доступно только на компьютерах","multiplatform":"Доступно на компьютерах и мобильных устройствах","filters":{"title":"Фильтры","search":"Поиск","anotherLanguage":"Показывать утилиты которые не поддерживают текущий язык"},"notFound":"Утилит по заданным фильтрам не найдено","list":{"cat":{"description":"Бесконечная лента с котиками"},"qr":{"rescan":"Сканировать заново","requestCamera":"Запросить доступ к камере","initializeCamera":"Инициализация камеры","errorCameraInitialize":"Ошибка инициализации камеры","result":{"text":"Текст","created":"Дата создания"},"notDetect":"Не обнаружено","perhapsYouMeant":"Возможно вы имели в виду","choosePhoto":"Выберите фотографию","selectFile":"Выберите файл","selectScanFormats":"Выберите форматы для сканирования","emptyFormats":"Похоже вы выбрали все форматы","scan":"Сканировать","selectCamera":"Переключиться на камеру"},"speedtype":{"description":"Проверь свою скорость печати","continue":"Продолжить","switchLayout":"Пожалуйста, смени раскладку клавиатуры на Русский","text":"Напечатай этот текст и узнай свою скорость печати","results":"Результаты","cpm":"Символов в минуту","errors":"Количество ошибок","restart":"Пройти тест заново","history":"История","clearHistory":"Очистить историю","bestResult":"Лучший результат","worstResult":"Худший результат","total":"Всего","formula":"Результат вычисляется по формуле"},"demotivator":{"title":"Заголовок","subtitle":"Подзаголовок","fontSize":"Размер шрифта","uploadImage":"Загрузить изображение","openGallery":"Открыть галерею","basedOn":"Основано на","author":"автор","copy":"Скопировать","reset":"Сбросить","notFoundClipboardImage":"Изображение не найдено в буфере обмена","copiedToClipboard":"Демотиватор скопирован в буфер обмена","savedOnDevice":"Демотиватор сохранён на устройство"}}},"prototypes":{"title":"Прототипы","start":"Посмотреть","close":"Закрыть"},"about":{"title":"Обо мне","fullName":"Семин Александр Андреевич","specialty":"Техник по защите информации","place":"Место проживания","place_value":"Россия, Москва","relocation":"Переезд невозможен","birthday":"Дата рождения","years_zero":"лет","years_one":"год","years_two":"года","years_few":"лет","years_many":"лет","years_other":"лет","phone":"Номер телефона","email":"Электронная почта","salary":"Желаемая зарплата","salary_value":"Не указана","willingessToBusinessTrip":"Готовность к командировкам","willingessToBusinessTrip_value":"Нет","employment":"Занятость","employment_value":"Стажировка","sсheduleOfWork":"График работы","sсheduleOfWork_value":"Гибкий график","citizenship":"Гражданство","citizenship_value":"Россия 🇷🇺","languages":"Языки","languages_value":"Русский (родной), Английский (A2)"},"aboutSite":{"title":"О сайте","github":"Исходный код сайта","dreamTeam":"Отряд крутышек","dreamTeamDescription":"Помогали в разработке","RusAnonymTeam":"А также благодарю всех участников группы"}},"utils":{"changeTheme":"Сменить тему","changeLanguage":"English","feature":"Скоро тут что-то появится :)","additionalNavigationMenu":"Дополнительное меню"}}')}},interpolation:{escapeValue:!1}},u=function(){var e,t=(e=i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.a.use(o.a),e.next=3,n.a.init(l);case 3:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){c(a,n,o,i,l,"next",e)}function l(e){c(a,n,o,i,l,"throw",e)}i(void 0)}))});return function(){return t.apply(this,arguments)}}();const s=n.a},657:(e,t,r)=>{r.d(t,{a:()=>h});var n=r(8949),o=r(2272),a=r(4146);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,c=[],l=!0,u=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,f(n.key),n)}}function s(e,t,r){return(t=f(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){var t=function(e,t){if("object"!==i(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===i(t)?t:String(t)}const h=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e._createDefaultSession();!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(this,"_activeView",void 0),s(this,"_activePanel",void 0),s(this,"activeModal",void 0),s(this,"isGlobalLoading",void 0),s(this,"popout",void 0),s(this,"events",void 0),this._activeView=t.activeView,this._activePanel=t.activePanel,this.activeModal=t.activeModal,this.isGlobalLoading=t.isGlobalLoading,this.popout=t.popout,this.events=t.events,(0,n.m)(this)}var t,r,i;return t=e,i=[{key:"load",value:function(){var t=c(window.location.hash.split("?"),1),r=c(t[0].substring(2).split("/"),2),n=r[0],o=r[1];return n?new e({activeView:n,activePanel:o||null,activeModal:null,isGlobalLoading:!0,popout:null,events:new a.a}):new e}},{key:"_createDefaultSession",value:function(){return{activeView:"",activePanel:null,activeModal:null,isGlobalLoading:!0,popout:null,events:new a.a}}}],(r=[{key:"_updatePath",value:function(){var e="";null!==this._activeView&&(e+="/".concat(this._activeView)),null!==this._activePanel&&(e+="/".concat(this._activePanel)),window.location.hash=e}},{key:"activeView",get:function(){return this._activeView},set:function(e){this._activeView=e,this._activePanel=null,this._updatePath()}},{key:"activePanel",get:function(){return this._activePanel},set:function(e){this._activePanel=e,this._updatePath()}},{key:"url",get:function(){return window.location.href.split("?")[0]}},{key:"queryParams",get:function(){var e=window.location.href.split("?")[1];return o.a.parse(e)}},{key:"addQueryParam",value:function(e,t){var r=c(window.location.href.split("?"),2),n=r[0],o=r[1],a=new URLSearchParams(o);a.set(e,t),window.location.href="".concat(n,"?").concat(a.toString())}},{key:"rempveQueryParam",value:function(e){var t=c(window.location.href.split("?"),2),r=t[0],n=t[1],o=new URLSearchParams(n);o.delete(e),window.location.href="".concat(r,"?").concat(o.toString())}},{key:"clearQueryParams",value:function(){var e=window.location.href.split("?")[0];window.location.href=e}}])&&u(t.prototype,r),i&&u(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}().load()},7909:(e,t,r)=>{r.d(t,{a:()=>s});var n=r(8949),o=r(3326),a=r(4146);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,u(n.key),n)}}function l(e,t,r){return(t=u(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){var t=function(e,t){if("object"!==i(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===i(t)?t:String(t)}const s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e._createDefaultSession();!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,"events",void 0),l(this,"_theme",void 0),l(this,"_language",void 0),this._theme=t.theme,this._language=t.language,document.documentElement.setAttribute("lang",this.language),(0,n.m)(this),this.save(),this.events=new a.a}var t,r,i;return t=e,i=[{key:"load",value:function(){var t=localStorage.getItem("session");return null!==t?new e(JSON.parse(t)):new e}},{key:"_createDefaultSession",value:function(){return{theme:"auto",language:["en","ru"].find((function(e){return new RegExp(e).test(navigator.language)}))||"en"}}}],(r=[{key:"save",value:function(){return localStorage.setItem("session",JSON.stringify(this._raw))}},{key:"_raw",get:function(){return{theme:this._theme,language:this._language}}},{key:"theme",get:function(){return"auto"===this._theme?window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":this._theme},set:function(e){this._theme=e,this.save()}},{key:"language",get:function(){return this._language},set:function(e){document.documentElement.setAttribute("lang",e),this._language=e,o.a.changeLanguage(this._language),this.save()}}])&&c(t.prototype,r),i&&c(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}().load()},6523:(e,t,r)=>{var n=r(7294),o=r(745),a=r(3379),i=r.n(a),c=r(7795),l=r.n(c),u=r(569),s=r.n(u),f=r(3565),h=r.n(f),d=r(9216),p=r.n(d),y=r(4589),v=r.n(y),m=r(5996),g={};g.styleTagTransform=v(),g.setAttributes=h(),g.insert=s().bind(null,"head"),g.domAPI=l(),g.insertStyleElement=p();i()(m.a,g);m.a&&m.a.locals&&m.a.locals;r(8776);var b=r(9323),w=r(3171),_=r(7909),S=r(657),E=r(3326);function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function x(){x=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function u(e,t,r,o){var a=t&&t.prototype instanceof h?t:h,i=Object.create(a.prototype),c=new O(o||[]);return n(i,"_invoke",{value:_(e,r,c)}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var f={};function h(){}function d(){}function p(){}var y={};l(y,a,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(P([])));m&&m!==t&&r.call(m,a)&&(y=m);var g=p.prototype=h.prototype=Object.create(y);function b(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function o(n,a,i,c){var l=s(e[n],e,a);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==L(f)&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){o("next",e,i,c)}),(function(e){o("throw",e,i,c)})):t.resolve(f).then((function(e){u.value=e,i(u)}),(function(e){return o("throw",e,i,c)}))}c(l.arg)}var a;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){o(e,r,t,n)}))}return a=a?a.then(n,n):n()}})}function _(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return T()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=S(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function S(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,S(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,f;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function P(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:T}}function T(){return{value:void 0,done:!0}}return d.prototype=p,n(g,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:d,configurable:!0}),d.displayName=l(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(w.prototype),l(w.prototype,i,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new w(u(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(g),l(g,c,"Generator"),l(g,a,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=P,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:P(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}function k(e,t,r,n,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,o)}var O=n.lazy((function(){return Promise.all([r.e(406),r.e(3607),r.e(9089),r.e(2133),r.e(1311),r.e(11)]).then(r.bind(r,4091))}));const P=(0,b.a)((function(){return(0,n.useEffect)((function(){var e;(e=x().mark((function e(){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,E.b)();case 2:return e.next=4,E.a.changeLanguage(_.a.language);case 4:S.a.isGlobalLoading=!1;case 5:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){k(a,n,o,i,c,"next",e)}function c(e){k(a,n,o,i,c,"throw",e)}i(void 0)}))})()}),[]),n.createElement(w.m,{appearance:_.a.theme,webviewType:w.gb.INTERNAL,transitionMotionEnabled:!1},n.createElement(w.a,null,n.createElement(w.c,{mode:"full"},S.a.isGlobalLoading?n.createElement(w._,{popout:n.createElement(w.R,{state:"loading"})}):n.createElement(n.Suspense,{fallback:n.createElement(w._,{popout:n.createElement(w.R,{state:"loading"})})},n.createElement(O,null)))))}));o.createRoot(document.getElementById("root")).render(n.createElement(P,null))},5996:(e,t,r)=>{r.d(t,{a:()=>c});var n=r(8081),o=r.n(n),a=r(3645),i=r.n(a)()(o());i.push([e.id,"::-webkit-scrollbar {\n    display: none;\n}\n",""]);const c=i}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=n,e=[],a.O=(t,r,n,o)=>{if(!r){var i=1/0;for(s=0;s<e.length;s++){for(var[r,n,o]=e[s],c=!0,l=0;l<r.length;l++)(!1&o||i>=o)&&Object.keys(a.O).every((e=>a.O[e](r[l])))?r.splice(l--,1):(c=!1,o<i&&(i=o));if(c){e.splice(s--,1);var u=n();void 0!==u&&(t=u)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[r,n,o]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[])),a.u=e=>"static/js/"+{11:"41d59238567c41e074eb",199:"4313d33998aec24bf827",706:"d2f1c77e3ca57297946a",769:"58ce4e97e8e1f0709d60",1311:"dcc411dd9f085c4c4377",1400:"fae5a420016a0819d9ba",1475:"055db25fb0de7d057a48",2019:"fea53344efc703906de1",2133:"c2bb11c06f9c9bfc47aa",2360:"8c64d75aaff58ecbc62e",2480:"f920e2cfd1e4b4cfb4f8",2720:"402fd61f01878d8342ac",2890:"2d6a84a86f0562d855be",2950:"df8b80fdea079365f989",3023:"70385a24bd801c8978a2",3039:"92098571599093351970",3285:"7e130398f79efc9dde12",3365:"9a4c326ce9b562ca9f90",3476:"479cc9d8058e1ded207a",3583:"3e8e2c4e6024a2057498",3607:"3d1f9fe27e8c6520b863",3732:"287403e9d6bef694d82c",4093:"4188447e772bd926dfcd",4399:"1d6e9e547b5e847f3e85",4492:"2fdd3fceb5ea268a636e",4566:"e967f0c0b6262b5802e5",5020:"cd429d30394ec37c2af1",5167:"42627113a03adbdb3046",5247:"6bf9539f6342b106f528",5386:"9d93885295d682a3d2da",5463:"3524d93440f802372634",5732:"f3c1962e93995e9c982e",6065:"043af419dac8cf9b4eaa",6170:"659ba83fb4e367076a31",6469:"0db865992f2a6f2bc502",6688:"b2bf7b284fce2a193e1d",6700:"e7593d85cf4ee1a51deb",7233:"68e3a79d81b3cb694917",7321:"d6ac9219e4570e20b02d",7632:"049ca1b728d50a7d87da",7655:"b87e8e9d0af3b0cea732",7818:"75f5d53911e7adef83ea",8110:"ae4ca19fde6e54bc20f7",8394:"88ba6eb00924d4eb8680",8496:"0627339cf490b9842480",8741:"c070b71439cba0f16b3c",9086:"7fab44770f801ed4b408",9089:"69cf477c15b1ffd92a23",9383:"e97b10a731179d7b00a9",9458:"0bb3d7a0e5604084f84e",9574:"20c2b37b642746c0015f",9596:"9f29b45d19c1c3eda65a"}[e]+".js",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},r="rus-anonym:",a.l=(e,n,o,i)=>{if(t[e])t[e].push(n);else{var c,l;if(void 0!==o)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var f=u[s];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==r+o){c=f;break}}c||(l=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.setAttribute("data-webpack",r+o),c.src=e),t[e]=[n];var h=(r,n)=>{c.onerror=c.onload=null,clearTimeout(d);var o=t[e];if(delete t[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((e=>e(n))),r)return r(n)},d=setTimeout(h.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=h.bind(null,c.onerror),c.onload=h.bind(null,c.onload),l&&document.head.appendChild(c)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{var e={179:0};a.f.j=(t,r)=>{var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var i=a.p+a.u(t),c=new Error;a.l(i,(r=>{if(a.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,n[1](c)}}),"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[i,c,l]=r,u=0;if(i.some((t=>0!==e[t]))){for(n in c)a.o(c,n)&&(a.m[n]=c[n]);if(l)var s=l(a)}for(t&&t(r);u<i.length;u++)o=i[u],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(s)},r=self.webpackChunkrus_anonym=self.webpackChunkrus_anonym||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),a.nc=void 0;var i=a.O(void 0,[406,5225,2917,8750,6762,3190,4953,842,9136,6847,4374,5561,3412,5488,4680,6818,8939,1121,4112,4049,6625,4591],(()=>a(6523)));i=a.O(i)})();