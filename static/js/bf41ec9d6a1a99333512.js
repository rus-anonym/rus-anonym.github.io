(self.webpackChunkrus_anonym=self.webpackChunkrus_anonym||[]).push([[5149],{2890:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>S});var r=n(7294),o=n(5601),l=n(7905),c=n(6503),a=n(1352),i=n(5204),u=n(381),m=n.n(u),s=n(7559),f=n(9908),h=n(7909),E=n(5734),y=n(657),d=n(8214),p=n.n(d);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function g(){g=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",l=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function a(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{a({},"")}catch(e){a=function(e,t,n){return e[t]=n}}function i(e,t,n,r){var o=t&&t.prototype instanceof s?t:s,l=Object.create(o.prototype),c=new U(r||[]);return l._invoke=function(e,t,n){var r="suspendedStart";return function(o,l){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw l;return _()}for(n.method=o,n.arg=l;;){var c=n.delegate;if(c){var a=x(c,n);if(a){if(a===m)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var i=u(e,t,n);if("normal"===i.type){if(r=n.done?"completed":"suspendedYield",i.arg===m)continue;return{value:i.arg,done:n.done}}"throw"===i.type&&(r="completed",n.method="throw",n.arg=i.arg)}}}(e,n,c),l}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=i;var m={};function s(){}function f(){}function h(){}var E={};a(E,o,(function(){return this}));var y=Object.getPrototypeOf,d=y&&y(y(S([])));d&&d!==t&&n.call(d,o)&&(E=d);var p=h.prototype=s.prototype=Object.create(E);function w(e){["next","throw","return"].forEach((function(t){a(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){function r(o,l,c,a){var i=u(e[o],e,l);if("throw"!==i.type){var m=i.arg,s=m.value;return s&&"object"==v(s)&&n.call(s,"__await")?t.resolve(s.__await).then((function(e){r("next",e,c,a)}),(function(e){r("throw",e,c,a)})):t.resolve(s).then((function(e){m.value=e,c(m)}),(function(e){return r("throw",e,c,a)}))}a(i.arg)}var o;this._invoke=function(e,n){function l(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(l,l):l()}}function x(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,m;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function U(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,l=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return l.next=l}}return{next:_}}function _(){return{value:void 0,done:!0}}return f.prototype=h,a(p,"constructor",h),a(h,"constructor",f),f.displayName=a(h,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,a(e,c,"GeneratorFunction")),e.prototype=Object.create(p),e},e.awrap=function(e){return{__await:e}},w(b.prototype),a(b.prototype,l,(function(){return this})),e.AsyncIterator=b,e.async=function(t,n,r,o,l){void 0===l&&(l=Promise);var c=new b(i(t,n,r,o),l);return e.isGeneratorFunction(n)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},w(p),a(p,c,"Generator"),a(p,o,(function(){return this})),a(p,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=S,U.prototype={constructor:U,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return c.type="throw",c.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var l=this.tryEntries[o],c=l.completion;if("root"===l.tryLoc)return r("end");if(l.tryLoc<=this.prev){var a=n.call(l,"catchLoc"),i=n.call(l,"finallyLoc");if(a&&i){if(this.prev<l.catchLoc)return r(l.catchLoc,!0);if(this.prev<l.finallyLoc)return r(l.finallyLoc)}else if(a){if(this.prev<l.catchLoc)return r(l.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return r(l.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var l=o;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var c=l?l.completion:{};return c.type=e,c.arg=t,l?(this.method="next",this.next=l.finallyLoc,m):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),k(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:S(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),m}},e}function w(e,t,n,r,o,l,c){try{var a=e[l](c),i=a.value}catch(e){return void n(e)}a.done?t(i):Promise.resolve(i).then(r,o)}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,l=[],c=!0,a=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);c=!0);}catch(e){a=!0,o=e}finally{try{c||null==n.return||n.return()}finally{if(a)throw o}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var L=function(e){var t=e.content,n=e.user,l=e.time,c=void 0===l?"":l;return r.createElement(o.O,{multiline:!0,disabled:!0,before:n.avatar,text:t,after:c},n.name)},k={you:{name:"Ты",avatar:r.createElement(o.z,{size:32,gradientColor:"red"},"Т")},interlocutor:{name:"Собеседник",avatar:r.createElement(o.z,{size:32,gradientColor:"green"},"С")}},U=function(e){var t=e.title,n=e.content,u=(0,r.createRef)(),m=b((0,r.useState)(null),2),d=m[0],v=m[1],x=function(){var e,n=(e=g().mark((function e(){var n,l;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!u.current){e.next=18;break}return e.next=3,(0,s.a)(u.current,{backgroundColor:"dark"===h.a.theme?"#222222":"#ffffff",quality:1});case 3:return n=e.sent,e.prev=4,e.next=7,(0,f.a)(n);case 7:v(r.createElement(o.T,{onClose:function(){return v(null)}},"Скриншот скопирован в буфер обмена")),e.next=18;break;case 10:e.prev=10,e.t0=e.catch(4),(l=document.createElement("a")).download="".concat(t,".jpeg"),l.href=n,l.click(),l.remove(),v(r.createElement(o.T,{onClose:function(){return v(null)}},"Скриншот сохранён на устройство"));case 18:case"end":return e.stop()}}),e,null,[[4,10]])})),function(){var t=this,n=arguments;return new Promise((function(r,o){var l=e.apply(t,n);function c(e){w(l,r,o,c,a,"next",e)}function a(e){w(l,r,o,c,a,"throw",e)}c(void 0)}))});return function(){return n.apply(this,arguments)}}(),L=p()(t).toString(),k=b((0,r.useState)(y.a.queryParams.id===L),2),U=k[0],S=k[1];return(0,r.useEffect)((function(){var e;U&&(null===(e=document.getElementById(L))||void 0===e||e.scrollIntoView(!0),window.scrollBy(0,-50))}),[]),r.createElement(o.s,{mode:"plain",id:L},U?r.createElement(o.m,null,r.createElement("div",{ref:u},r.createElement(o.m,null,r.createElement(o.bb,{level:"2",style:{textAlign:"center"}},t),r.createElement(o.U,null),n)),r.createElement(o.e,{stretched:!0},r.createElement(o.f,{before:r.createElement(l.a,null),stretched:!0,size:"l",appearance:"neutral",onClick:function(){x()}},"Скриншот"),r.createElement(o.f,{before:r.createElement(c.a,null),stretched:!0,size:"l",appearance:"neutral",onClick:function(){var e=y.a.url+"?id="+L;(0,E.b)(e).then((function(){v(r.createElement(o.T,{onClose:function(){return v(null)}},"Ссылка скопирована в буфер обмен"))}))}},"Скопировать")),r.createElement(o.U,null),r.createElement(o.f,{before:r.createElement(a.a,null),stretched:!0,size:"l",appearance:"neutral",onClick:function(){return S(!1)}},"Скрыть")):r.createElement(o.m,null,r.createElement(o.m,null,r.createElement(o.bb,{level:"2",style:{textAlign:"center"}},t)),r.createElement(o.U,{size:20}),r.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.createElement(o.f,{before:r.createElement(i.a,null),size:"l",appearance:"positive",onClick:function(){return S(!0)}},"Раскрыть"))),null!==d&&d)};const S=function(){return r.createElement(o.s,null,r.createElement(o.m,null,r.createElement(o.bb,{level:"1",style:{textAlign:"center"}},"Как разговаривать в интернете")),r.createElement(o.m,null,r.createElement(o.u,{weight:"regular"},"Если вы тут оказались, значит теперь ваш черёд потратить время на очевидные вещи, многие из которых вы не знали, но вы бесите людей этим и они вам отправили эту статью")),r.createElement(o.s,null,r.createElement(U,{title:"Переходите сразу к сути",content:r.createElement(r.Fragment,null,r.createElement(o.bb,{level:"3"},"Пример:"),r.createElement(L,{user:k.you,content:"Привет"}),r.createElement(L,{user:k.interlocutor,content:"Привет"}),r.createElement(L,{user:k.you,content:"Можно тебя кое-что спросить?"}),r.createElement(L,{user:k.interlocutor,content:"?"}),r.createElement(L,{user:k.you,content:"Если ты конечно не ответишь или занят, я пойму, но просто мне больше не у кого спросить"}),r.createElement(L,{user:k.you,content:"???"}),r.createElement(L,{user:k.interlocutor,content:"Что?"}),r.createElement(L,{user:k.you,content:"Спрашивай"}),r.createElement(L,{user:k.interlocutor,content:"У тебя есть время?"}),r.createElement(o.u,{weight:"medium"},"Ёб вашу жизнь, вы понимаете что пишете 4-6 предложений перед тем как перейти к ебаной сути, блядь? Нахуй вы раздражаете этим людей? Задавай свой ебаный вопрос сразу и получай на него ответ."),r.createElement(o.U,{size:20}),r.createElement(o.u,{weight:"medium"},"Вот как надо:"),r.createElement(L,{user:k.you,content:"Привет. Можешь одолжить мне 500 рублей на мастеркард карту? Верну в конце недели?"}),r.createElement(L,{user:k.interlocutor,content:"Да, давай номер"}),r.createElement(L,{user:k.you,content:"Спасибо большое, вот номер: 0000 0000 0000 0000. Скажи куда тебе их вернуть?"}))}),r.createElement(U,{title:"Google first",content:r.createElement(r.Fragment,null,r.createElement(o.bb,{level:"3"},"Пример:"),r.createElement(L,{user:k.you,content:"Привет, не подскажешь где найти бесплатные фотографии в .png?"}),r.createElement(L,{user:k.interlocutor,content:"*скриншот из гугла с результатами выдачи по запросу «free png images»*"}),r.createElement(L,{user:k.you,content:"Спасибо большое!"}),r.createElement(o.u,{weight:"medium"},"ИДИ НАХУЙ СУКА! Просто, блядь, пошел ты нахуй дебик сраный. Ты вообще срать как ходишь? Всех своих друзей и родственников спрашиваешь как найти туалет и высрать говно? А домой как заходишь? Стучишь к соседу и спрашиваешь как тебе открыть замок и что для этого надо? Почти на любую хуйню в интернете уже давно найден ответ. Любая проблема, которая возникает у тебя сейчас уже была у пользователей Ответов.Майл в 2010-м году. Научись в интернет и гугл, тварь. Уже в любом браузере даже в гугл переходить не надо, можно даже голосом пропиздеть свою ебаную проблему и тут ОГОГО ВОТ ТАК ОТВЕТИК будет. Даже сраная сири или ведро могут тебя расслышать с другого конца комнаты и дать ответ на твой ебучий вопрос, быстрее чем ты заебешь кого-то своей тупизной."))}),r.createElement(U,{title:"Не гуглится",content:r.createElement(r.Fragment,null,r.createElement(o.bb,{level:"3"},"Пример:"),r.createElement(L,{user:k.you,content:"Привет, я обыскал весь интернет, но так и не нашел схему трехфазного разветвителя кошачьей мочи. Не знаешь случайно как она выглядит?"}),r.createElement(L,{user:k.interlocutor,content:"Не знаю, я вообще в кондитерской работаю."}),r.createElement(L,{user:k.you,content:"Мммм, ну жаль, а не знаешь того кто может знать?"}),r.createElement(L,{user:k.interlocutor,content:"Нет"}),r.createElement(L,{user:k.you,content:"Ну если кто-то будет, ты дай мне знать, хорошо?"}),r.createElement(o.U,null),r.createElement(o.bb,{level:"3"},"Т Ы Ч Е П Ё С О Х У Е Л?"),r.createElement(o.U,null),r.createElement(o.u,{weight:"medium"},"Во-первых, странно незнакомому человеку писать вообще какие-то тематические реквесты, о которых он может не знать."),r.createElement(o.u,{weight:"medium"},"Во-вторых, если ты знаешь человека, то наверняка знаешь чем он занимается и какого хуя ты вообще спрашиваешь у человека то, что он заведомо может не знать."),r.createElement(o.u,{weight:"medium"},"Ну и в третьих самый конченый блядский приём пытаться обязать кого-то выполнить твоё ебаное поручение. Ты директор дохуя или управляющий? Нахуй иди, блядь, управлять своим очком поглощать члены, кретин ебаный."))}),r.createElement(U,{title:"Троица говноедов: ок, ясно, понятно",content:r.createElement(r.Fragment,null,r.createElement(o.bb,{level:"3"},"Пример:"),r.createElement(L,{user:k.you,content:"Привет, не подскажешь где можно в Махачкале поесть вкусной национальной еды?"}),r.createElement(L,{user:k.interlocutor,content:"Сходи в заведение «На хинкал», он там лучший. Находится на углу Ярагского и проспекта Шамиля."}),r.createElement(L,{user:k.you,content:"Ясно"}),r.createElement(o.U,null),r.createElement(o.u,{weight:"medium"},"Хуясно, пидор. Ты пиздец такой дохуя занятой, чтобы написать «Спасибо, обязательно схожу если буду»? Пожалуй миллиардами на бирже ворочаешь и одновременно ракеты на плавающую баржу сажаешь, чтобы ебло не треснуло от благодарности за совет? Чему вас в детстве вообще учили, чмоньки? Где манеры, где воспитание? Ваше сухое «ок» можете запихнуть в своё разъебанное очко, чтобы поставить рядом с «ясно», особенно когда речь идет о просьбе."),r.createElement(o.U,{size:20}),r.createElement(o.bb,{level:"3"},"Ещё пример:"),r.createElement(L,{user:k.you,content:"Привет. Можешь одолжить мне 500 рублей на мастеркард карту? Верну в конце недели?"}),r.createElement(L,{user:k.interlocutor,content:"Привет, не могу."}),r.createElement(L,{user:k.you,content:"Понятно."}),r.createElement(o.u,{weight:"medium"},"Что тебе понятно, говно? Неспособность принимать отказы и отвечать, будто ты обиделся, говножуй — удел тупоголовых хуесосов. Ты, блядина, с просьбой пришел. Нехуй корчить из себя невесть кого."),r.createElement(o.U,{size:20}),r.createElement(o.bb,{level:"3"},"Правильный пример:"),r.createElement(L,{user:k.you,content:"Привет. Можешь одолжить мне 500 рублей на мастеркард карту? Верну в конце недели?"}),r.createElement(L,{user:k.interlocutor,content:"Нет, не могу."}),r.createElement(L,{user:k.you,content:"Ну ничего, извини что потревожил.."}),r.createElement(o.U,null),r.createElement(o.u,{weight:"medium"},"Так человек, который вам отказал одновременно поймет, что вы не сухая мразота, и в то же время его не будет беспокоить чувство того, что вы обиделись."))}),r.createElement(U,{title:"Спросил и сьебал",content:r.createElement(r.Fragment,null,r.createElement(o.bb,{level:"3"},"Пример:"),r.createElement(L,{user:k.you,content:"Привет, что делаешь?",time:"16:32:50"}),r.createElement(L,{user:k.interlocutor,content:"Привет, собираюсь выходить к тебе через 5 минут, ты сейчас где?",time:"16:33:00"}),r.createElement(L,{user:k.interlocutor,content:"Аууу? Мне выходить?...",time:"16:38:10"}),r.createElement(L,{user:k.interlocutor,content:"Ты где? Мне идти?",time:"16:45:12"}),r.createElement(L,{user:k.you,content:"Блин, я думал ты давно уже вышел, че ты опаздываешь? Я же позавчера еще сказал что буду у фонтана.",time:"16:52:34"}),r.createElement(o.U,null),r.createElement(o.u,{weight:"medium"},"АААААААА!!! Какого, блядь, черта?! Что с вами не так, уроды?! Если ты задаешь сраный вопрос, сука, или диалог продолжается, научись всё время находиться в сессии этого диалога (если только у тебя не сломался или выключился телефон). Тебя, кретина ослоухого ЖДУТ, ПОТОМУ ЧТО ТЫ САМ ПИДОРАС ЗАДАЛ ВОПРОС ПЕРВЫМ И ТЕБЕ НА НЕГО ЧЕРЕЗ НАНОСЕКУНДУ ОТВЕТИЛИ. Ну или скажи «Надо отойти, вернусь через столько-то». Мало того — это нормально у людей с головой вместо жопы, как у тебя, уточнять перед встречей готовность, на случай если такой ишак как ты, отвечающий по 20 минут опять переиграет что-то."))}),r.createElement(U,{title:"Очевидный благодетель",content:r.createElement(r.Fragment,null,r.createElement(o.bb,{level:"3"},"Пример:"),r.createElement(L,{user:k.you,content:"Здарова, я знаю ты интересуешься музыкой, поэтому советую тебе попробовать Яндекс.Музыку, ну или Apple Music"}),r.createElement(o.U,null),r.createElement(o.u,{weight:"medium"},"СКАЖИ, БЛЯДЬ, ГДЕ ТЫ БЕРЕШЬ ВСЕ ЭТИ ОХУИТЕЛЬНЫЕ СОВЕТЫ, МЕМЫ И ЛИШНИЕ ХРОМОСОМЫ?! Не пробовал пойти работать ведущим музыкальных передач на Первый канал? Кстати, зацени если не видел такой канал. По телевизору на кнопке один. Рекомендую кстати еще попробовать пить воду. Ну, знаешь, под краном там вода или в магазине может видел?"),r.createElement(o.U,{size:20}),r.createElement(o.u,{weight:"medium"},"Как ты думаешь, можно ли жить в 2017м году и рекомендовать человеку что-то, что настолько популярно и известно как ютуб, айфон, кока-кола или номер твоей мамаши в борделе?"))}),r.createElement(U,{title:"+55 пропущенных (по ебалу бы тебе)",content:r.createElement(r.Fragment,null,r.createElement(o.bb,{level:"3"},"Пример:"),["Привет","Знаешь","Я","Тут","Это","Короче, мне тут","Ща, погодь","Блин","Да как это","А","Во!"].map((function(e,t){return r.createElement(L,{user:k.you,content:e,time:m()().add(t,"second").format("HH:mm:ss")})})),r.createElement(o.U,null),r.createElement(o.u,{weight:"medium"},"Есть много речевых расстройств, и людей страдающих ими, но твоё особенное."),r.createElement(o.U,null),r.createElement(o.u,{weight:"medium"},"Потому что ты в интернете"),r.createElement(o.U,null),r.createElement(o.u,{weight:"medium"},"особенный"),r.createElement(o.U,null),r.createElement(o.u,{weight:"medium"},"мудоёбинский"),r.createElement(o.U,null),r.createElement(o.u,{weight:"medium"},"пиздотряс"),r.createElement(o.U,{size:20}),r.createElement(o.u,{weight:"medium"},"Самое пиздецовое от таких дегенератов открывать +35 пропущенных сообщений, а там вся суть умещается в одно предложение, которое пидорасы разбивают на 35 сообщений. Быстрый интернет дал свободу пересылать большие массивы данных не для того чтобы вы свой скудный гондонский вскукарек разбивали на вертикальный небоскрёб олигофрена. Пишите, черти ебучие, одним предложением, пока не будет исчерпан лимит символов или логический смысл послания. В современном мире каждое сообщение это уведомление, а вы заставляете людей их выключать или переключать режимы."))}),r.createElement(U,{title:"Какделатор",content:r.createElement(r.Fragment,null,r.createElement(o.bb,{level:"3"},"Пример:"),r.createElement(L,{user:k.you,content:"Привет"}),r.createElement(L,{user:k.interlocutor,content:"Привет"}),r.createElement(L,{user:k.you,content:"Как дела?"}),r.createElement(o.u,{weight:"medium"},"Серьёзно, блядь, в мире открылась какая-то школа заботливых супергероев-долбоебов? Какой вообще, нахуй, смысл в вопросе «как дела?» или «как ты?»? Если ты пишешь первым, петух, то, итак, понятно что тебе че-то надо, засунь свои ебаные манеры в жопу и спрашивай сразу. Мои проблемы ты решить уж точно не сможешь, если я скажу что дела говно, а сочувствие своё ты уже знаешь где рядом с манерами в своей пещере сложить. Если кому-то реально интересны мои дела, то РАЗ УЖ МЫ В ИНТЕРНЕТЕ, ты наверняка мой друг и подписан на меня в инстаграмах и других соцсетях. А если ты не мой друг, то нахуй тебе знать как у меня дела? Хочешь показаться заинтересованным или войти в доверие? Войди в портал с приключением нахуй на 20 минут."))}),r.createElement(U,{title:"Бухой компаньон",content:r.createElement(r.Fragment,null,r.createElement(o.bb,{level:"3"},"Пример:"),r.createElement(L,{user:k.you,content:"Здарвыа! Бля сто лет ни видсмл! Че ты как рассссссссссскажи, го попиздим. Ваще давай я подъеду. Че бля стол ет не виделис."}),r.createElement(o.u,{weight:"medium"},"Иди проспись, животное. Либо ты зовешь людей пить заранее, либо нехуй им звонить и писать, когда тебе уже хорошо или не хватило."),r.createElement(o.U,null),r.createElement(o.u,{weight:"medium"},"Нормальным же людям рекомендую вообще ничего на такое не отвечать."))}),r.createElement(U,{title:"Левитан на минималках",content:r.createElement(r.Fragment,null,r.createElement(o.u,{weight:"medium"},"Ваши аудиосообщения просто доебали. Всё понятно дохуя занятые, в дороге (в дороге надо на дорогу смотреть), на хуе крутитесь или в вам отрезало болгаркой пальцы, но перед тем как отправлять своё ебаное мычание, сформулируйте мысль."),r.createElement(o.U,null),r.createElement(o.u,{weight:"medium"},"Нет ничего более уёбищного, чем из-за ваших кретинских размышлений отвлекаться от музыки, фильма или работы, чтобы 3 минуты слушать чавканье, эээ-канье, домыслы и прочее говно, которое укладывается в одно сраное предложение."),r.createElement(o.U,null),r.createElement(o.u,{weight:"medium"},"Аудиосообщения придумали на случай, когда нужно сразу большой объем информации быстро передать и нет клавиатуры или возможности набирать быстро, а не чтобы несколько минут слышать как нейрон не может выбраться из вашей прямой кишки, чтобы попасть в голову, и вы родите желаемое."))}),r.createElement(U,{title:")",content:r.createElement(r.Fragment,null,r.createElement(o.bb,{level:"3"},"Пример:"),r.createElement(L,{user:k.you,content:")"}),r.createElement(o.u,{weight:"medium"},"Отвечать одной скобкой можно только создателю сообщества"," ",r.createElement(o.B,{href:"https://vk.com/minimalism",target:"_blank"},"«minimalism»")," ","ВКонтакте. Всех остальных надо просто пиздить в ебало за это. Это ты чё типа ухмыльнулся, улыбнулся, но не очень? Или ты джоконда недоебанная, чтобы ставить тут свою скобку сраную? М? Уёба?)"))})))}},2480:()=>{}}]);