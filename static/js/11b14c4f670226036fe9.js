"use strict";(self.webpackChunkrus_anonym=self.webpackChunkrus_anonym||[]).push([[1311],{640:(e,t,a)=>{var o=a(1742),n={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var a,r,c,l,s,i,p=!1;t||(t={}),a=t.debug||!1;try{if(c=o(),l=document.createRange(),s=document.getSelection(),(i=document.createElement("span")).textContent=e,i.ariaHidden="true",i.style.all="unset",i.style.position="fixed",i.style.top=0,i.style.clip="rect(0, 0, 0, 0)",i.style.whiteSpace="pre",i.style.webkitUserSelect="text",i.style.MozUserSelect="text",i.style.msUserSelect="text",i.style.userSelect="text",i.addEventListener("copy",(function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),void 0===o.clipboardData){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=n[t.format]||n.default;window.clipboardData.setData(r,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))})),document.body.appendChild(i),l.selectNodeContents(i),s.addRange(l),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");p=!0}catch(o){a&&console.error("unable to copy using execCommand: ",o),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),p=!0}catch(o){a&&console.error("unable to copy using clipboardData: ",o),a&&console.error("falling back to prompt"),r=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(r,e)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(l):s.removeAllRanges()),i&&document.body.removeChild(i),c()}return p}}}]);