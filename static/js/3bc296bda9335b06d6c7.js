"use strict";(self.webpackChunkrus_anonym=self.webpackChunkrus_anonym||[]).push([[7223],{6258:(e,t,a)=>{a.r(t),a.d(t,{default:()=>L});var n=a(7294),r=a(913),l=a(640),o=a.n(l),i=a(7829);const c=a.p+"static/media/ed7362875c8351b574dd.svg",m=a.p+"static/media/775268b9cd056bc8431c.svg",s=a.p+"static/media/2ca39b1ac287f75ae96a.svg",u=a.p+"static/media/de9434cc9c2f31f07e9e.png",d=a.p+"static/media/ea36da21aaf197498b4f.png",p=a.p+"static/media/105d9cc4aacd1b26780d.png",h=a.p+"static/media/9c48fe1b7af0cb8f49f2.png",f=a.p+"static/media/58a3c3af768ed9a7451a.png",g=a.p+"static/media/353d13f494b4f94fcdb1.png",b=a.p+"static/media/6daf645904df3a9bda9a.png",y=a.p+"static/media/c1ab1b938e7c4e246f9c.png",v=a.p+"static/media/f1bc7ceb0b04d54deef8.png",E=a.p+"static/media/f84be1ed51b14b0e1908.png",k=a.p+"static/media/f5784bc1fa5440819841.png",w=a.p+"static/media/74eb73453f879106f526.png",_=a.p+"static/media/3c28dee6ad360e1c4f46.png",C=a.p+"static/media/f9c2c737c1e2571be298.png",D=a.p+"static/media/a30890d4fcd481a25c3d.png",x=a.p+"static/media/b22f654cde5d1d95f747.png",A=a.p+"static/media/4bb51ae10e8c3edc664d.png",B=a.p+"static/media/3ec3d90a58c50f29e688.svg",S=a.p+"static/media/8fd15cf62556ab93534d.png";var I=a(4478),j=a(7909);function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==a)return;var n,r,l=[],o=!0,i=!1;try{for(a=a.call(e);!(o=(n=a.next()).done)&&(l.push(n.value),!t||l.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{o||null==a.return||a.return()}finally{if(i)throw r}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return P(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return P(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var R=function(e){var t=e.src,a=T((0,n.useState)(!0),2),l=a[0],o=a[1];return n.createElement("div",{style:{display:"flex",alignItems:"center"}},l&&n.createElement(r.M,null,n.createElement(r.X,{size:"large"})),n.createElement("img",{onLoad:function(){return o(!1)},alt:"",src:t}))},M=function(e){var t=e.method,a=void 0===t?"avatar":t,l=e.name,o=e.logo,c=e.url,m=e.backgroundColor,s=void 0===m?void 0:m,u=e.tooltipContent,d=(0,r.nb)().viewWidth>=r.hb.TABLET,p=T((0,n.useState)(!1),2),h=p[0],f=p[1],g="avatar"===a?n.createElement(r.d,{size:84,src:o,style:{backgroundColor:s}}):n.createElement("img",{alt:"",src:o,width:84,height:84,style:{backgroundColor:s}}),b=n.createElement("div",{onClick:function(){d||f(!h)}},n.createElement(r.x,{size:"l",header:n.createElement(r.v,{style:{justifyContent:"center"}},l),disabled:!0},c?n.createElement(r.C,{href:c,target:"_blank"},g):g));return!u||!d&&c?b:n.createElement(i.a,{content:n.createElement(u,null),children:b,shown:d?void 0:h})},F=function(e){var t=e.list;return n.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",alignItems:"flex-end"}},t.map(M))};const L=function(){var e=(0,I.a)("translation",{keyPrefix:"pages.main.socials"}).t;return n.createElement(n.Fragment,null,n.createElement(r.u,{mode:"plain",separator:"hide",header:n.createElement(r.v,{style:{justifyContent:"center"}},e("contactMe"))},n.createElement(F,{list:[{name:"VK",url:"https://vk.me/rus_cybersec",logo:c,method:"avatar"},{name:"Telegram",url:"https://t.me/rus_anonym",logo:m,method:"avatar"}]})),n.createElement(r.u,{mode:"plain",header:n.createElement(r.v,{style:{justifyContent:"center"}},e("alsoExist"))},n.createElement(r.u,{separator:"hide",mode:"plain",header:n.createElement(r.v,{style:{justifyContent:"center"}},"Code")},n.createElement(F,{list:[{name:"GitHub",url:"https://github.com/RusAnonym",logo:"dark"===j.a.theme?d:u,method:"avatar",tooltipContent:function(){var e=["https://github-readme-stats.vercel.app/api?username=RusAnonym&show_icons=true&theme=".concat(j.a.theme,"&count_private=true&hide_title=true&include_all_commits=true&hide_border=true"),"https://github-readme-streak-stats.herokuapp.com/?user=RusAnonym&theme=".concat(j.a.theme,"&hide_border=true")];return n.createElement("div",{style:{flexDirection:"column",display:"flex",alignItems:"center"}},e.map((function(e){return n.createElement(R,{src:e})})))}},{name:"NPM",url:"https://www.npmjs.com/~rus_anonym",logo:s,method:"native",tooltipContent:function(){return n.createElement(n.Fragment,null,n.createElement(r.T,{disabled:!0,description:e("npm.utils"),after:n.createElement(n.Fragment,null,n.createElement(r.S,null),n.createElement(r.C,{target:"_blank",href:"https://npmjs.com/package/rus-anonym-utils"},n.createElement("img",{alt:"",src:s,width:36,height:36})),n.createElement(r.S,null),n.createElement(r.C,{target:"_blank",href:"https://github.com/RusAnonym/rus-anonym-utils"},n.createElement("img",{alt:"",src:"dark"===j.a.theme?d:u,width:36,height:36})))},"rus-anonym-utils"),n.createElement(r.T,{disabled:!0,description:e("npm.scheduler"),after:n.createElement(n.Fragment,null,n.createElement(r.S,null),n.createElement(r.C,{target:"_blank",href:"https://npmjs.com/package/simple-scheduler-task"},n.createElement("img",{alt:"",src:s,width:36,height:36})),n.createElement(r.S,null),n.createElement(r.C,{target:"_blank",href:"https://github.com/RusAnonym/simple-scheduler-task"},n.createElement("img",{alt:"",src:"dark"===j.a.theme?d:u,width:36,height:36})))},"simple-scheduler-task"))}},{name:"Wakatime",url:"https://wakatime.com/@rus_anonym",logo:C,method:"native",tooltipContent:function(){var e="https://github-readme-stats.vercel.app/api/wakatime?username=rus_anonym&range=last_7_days&theme=".concat(j.a.theme,"&hide_border=true&hide_title=true");return n.createElement(R,{src:e})}}]})),n.createElement(r.u,{separator:"hide",mode:"plain",header:n.createElement(r.v,{style:{justifyContent:"center"}},e("occasionallyLook"))},n.createElement(F,{list:[{name:"Twitter",url:"https://twitter.com/rus_anonymchik",logo:p,method:"native"},{name:"4PDA",url:"https://4pda.to/forum/index.php?showuser=8270750",logo:h,method:"native"},{name:"Discord",url:"https://discord.com/users/392598481681907713",logo:f,method:"native"},{name:"ICQ",url:"https://icq.im/rus_anonym",logo:g,method:"avatar"},{name:"LinkedIn",url:"https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80-%D1%81%D0%B5%D0%BC%D0%B8%D0%BD-6bbb2b1b3/",logo:b,method:"native"},{name:"Pikabu",url:"https://pikabu.ru/@RusAnonym",logo:y,method:"avatar"},{name:"Reddit",url:"https://www.reddit.com/user/rus_anonym",logo:k,method:"avatar"},{name:"Pinterest",url:"https://www.pinterest.ru/rus_anonym/",logo:v,method:"avatar"},{name:"Playground",url:"https://users.playground.ru/2444466/",logo:E,method:"avatar"},{name:"Skype",url:"skype:live:4b1f037147ec6fdb",logo:w,method:"native"},{name:"Steam",url:"https://steamcommunity.com/id/rus_anonym/",logo:_,method:"native"},{name:"WhatsApp",url:"https://wa.me/79096230555",logo:D,method:"native"},{name:"YouTube",url:"https://www.youtube.com/channel/UCzbQsGQhIUk98Zu02Hd_OxQ",logo:A,method:"native"},{name:"TikTok",url:"https://www.tiktok.com/@rus_anonym",logo:B,method:"avatar"},{name:"Mobile Legends: Bang Bang",logo:S,method:"native",tooltipContent:function(){var t=function(t){var a=t.id,l=T((0,n.useState)(!1),2),i=l[0],c=l[1];return n.createElement(n.Fragment,null,n.createElement(r.f,{disabled:i,onClick:function(){o()(a.toString()),c(!0),setTimeout((function(){return c(!1)}),2500)}},e(i?"mlbb.copied":"mlbb.copyID")))};return n.createElement(r.m,null,n.createElement("div",{style:{display:"flex"}},n.createElement(r.P,{disabled:!0,text:"ID: 339158807",caption:e("mlbb.mainAcc"),actions:n.createElement(t,{id:339158807})},"rus_anonym"),n.createElement(r.P,{disabled:!0,text:"ID: 1158262934",caption:e("mlbb.secondAcc"),actions:n.createElement(t,{id:1158262934})},"rus_anonym")),n.createElement("div",{style:{display:"flex"}},n.createElement(r.P,{disabled:!0,text:"ID: 3346392",caption:e("mlbb.group"),actions:n.createElement(t,{id:3346392})},"RusCringe"),n.createElement(r.P,{disabled:!0,text:"ID: 4415974",caption:e("mlbb.team"),after:"MVP",actions:n.createElement(t,{id:4415974})},"RusCringe")))}},{name:"World of Tanks",url:"https://worldoftanks.ru/ru/community/accounts/91518416",logo:x,method:"native"}]}))))}}}]);