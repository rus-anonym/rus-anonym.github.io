"use strict";(self.webpackChunkrus_anonym=self.webpackChunkrus_anonym||[]).push([[5167],{5167:(e,t,n)=>{n.r(t),n.d(t,{default:()=>D});var a=n(7294),l=n(5613),r=n(92),i=n(6561),o=n(4258),c=n(3117),s=n(8769),u=n(9670),m=n(9151),d=n(657),p=n(4478),f=n(9323),b=n(9141),E=n(466),k=n(7909),h=n(5720),g=n(5800);function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var a,l,r=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!t||r.length!==t);i=!0);}catch(e){o=!0,l=e}finally{try{i||null==n.return||n.return()}finally{if(o)throw l}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}const D=(0,f.a)((function(){var e=(0,l.rb)().viewWidth>=l.lb.TABLET,t=v((0,a.useState)(""),2),f=t[0],y=t[1],D=(0,p.a)("translation",{keyPrefix:"pages.utils"}).t,M=h.a.utils.filters.isLanguageFilter,P=[{id:"qr",title:"QR Scanner",description:"Simple QR scanner",isMobile:!0,isDesktop:!1,component:a.createElement(E.a,{callbacks:[function(){return Promise.all([n.e(406),n.e(7655),n.e(2917),n.e(9383),n.e(7321),n.e(5020),n.e(6700),n.e(4399)]).then(n.bind(n,4399))}]}),languages:["en","ru"]},{id:"cat",title:"Cat",description:D("list.cat.description"),isMobile:!0,isDesktop:!0,component:a.createElement(E.a,{callbacks:[function(){return Promise.all([n.e(1475),n.e(8741),n.e(2019),n.e(9596),n.e(1424),n.e(1400),n.e(3476)]).then(n.bind(n,8693))}]}),languages:["en","ru"]},{id:"speedtype",title:"Speedtype",description:D("list.speedtype.description"),isMobile:!1,isDesktop:!0,component:a.createElement(E.a,{callbacks:[function(){return Promise.all([n.e(406),n.e(7655),n.e(6700),n.e(9574)]).then(n.bind(n,9574))}]}),languages:["en","ru"]},{id:"feminizator",title:"Feminizator",description:"Феминизаторка словесс",isMobile:!0,isDesktop:!0,component:a.createElement(E.a,{callbacks:[function(){return Promise.all([n.e(406),n.e(1475),n.e(8741),n.e(2019),n.e(2360),n.e(199)]).then(n.bind(n,199))}]}),languages:["ru"]},{id:"vk-stickers",title:"VK Stickers",description:"Приложение для просмотра всех стикеров ВКонтакте",isMobile:!0,isDesktop:!0,component:a.createElement(E.a,{callbacks:[function(){return Promise.all([n.e(1475),n.e(8741),n.e(2019),n.e(9596),n.e(1424),n.e(8520),n.e(7180)]).then(n.bind(n,7180))}]}),languages:["ru"]},{id:"winrate-calculator",title:"Winrate Calculator",description:"Предварительная версия",isMobile:!0,isDesktop:!0,component:a.createElement(E.a,{callbacks:[function(){return n.e(3285).then(n.bind(n,3285))}]}),languages:["ru"]},{id:"demotivator",title:"Demotivator",description:"",isMobile:!0,isDesktop:!0,component:a.createElement(E.a,{callbacks:[function(){return Promise.all([n.e(406),n.e(9086),n.e(8110)]).then(n.bind(n,8110))}]}),languages:["ru","en"]},{id:"vk-conversations",title:"VK Conversations",description:"",isMobile:!0,isDesktop:!0,component:a.createElement(E.a,{callbacks:[function(){return n.e(8496).then(n.bind(n,8496))}]}),languages:["ru"]}],w=P.filter((function(t){return(t.isDesktop===e||t.isMobile===!e)&&(!(M&&!t.languages.includes(k.a.language))&&!(""!==f&&!t.title.toLowerCase().includes(f.toLowerCase())))}));(0,a.useEffect)((function(){P.some((function(e){return e.id===d.a.activePanel}))||(d.a.activePanel=null)}));return a.createElement(l.mb,{activePanel:d.a.activePanel||"default"},a.createElement(l.P,{id:"default"},a.createElement(l.v,{description:a.createElement(a.Fragment,null,a.createElement(l.F,{textWrap:"full",before:a.createElement(o.a,null)},D("onlyMobile")),a.createElement(l.F,{textWrap:"full",before:a.createElement(i.a,null)},D("onlyDesktop")),a.createElement(l.F,{textWrap:"full",before:a.createElement(r.a,null)},D("multiplatform")))},a.createElement(l.V,{placeholder:D("filters.search"),value:f,onChange:function(e){y(e.target.value)},icon:a.createElement(l.z,{onClick:function(){d.a.activeModal="utils-filter"}},a.createElement(m.a,null))}),w.length>0?w.map((function(t){return a.createElement(l.v,{mode:"plain"},a.createElement(l.k,{hasActive:!1,hasHover:!1,description:t.description,badge:a.createElement(b.a,{shown:!!e&&void 0,text:t.isDesktop&&t.isMobile?D("multiplatform"):t.isDesktop?D("onlyDesktop"):D("onlyMobile")},t.isDesktop&&t.isMobile?a.createElement(r.a,{width:20}):t.isDesktop?a.createElement(i.a,{width:20}):a.createElement(o.a,{width:20}))},t.title),a.createElement(l.j,{onClick:function(){d.a.activePanel=t.id}},D("start")))})):a.createElement(l.Q,null,D("notFound")))),P.map((function(t){if(e&&!t.isDesktop||!e&&!t.isMobile)return a.createElement(l.P,{id:t.id},a.createElement(l.v,null,a.createElement(l.Q,{icon:e?a.createElement(c.a,null):a.createElement(s.a,null),header:D("notAvailable"),action:a.createElement(l.f,{size:"l",onClick:function(){d.a.activePanel=null},stretched:!0,appearance:"neutral"},D("close")),stretched:!e},D(e?"onlyMobile":"onlyDesktop"))));return a.createElement(l.P,{id:t.id},a.createElement(g.ErrorBoundary,{FallbackComponent:function(){return a.createElement(l.v,null,a.createElement(l.Q,{header:D("onStartError"),icon:a.createElement(u.a,null),action:a.createElement(l.f,{stretched:!0,size:"l",mode:"secondary",onClick:function(){d.a.activePanel="default"}},D("backToList"))}))}},t.component))})))}))}}]);