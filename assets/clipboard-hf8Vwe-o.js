function u(t){return navigator.clipboard.writeText(t).then(function(){return!0})}function a(t){return new Promise(function(c,o){var e=document.createElement("textarea"),r=document.createRange();e.value=t,e.style.position="fixed",e.contentEditable="true",document.body.appendChild(e),e.focus(),e.select(),r.selectNodeContents(e);var n=window.getSelection();n&&(n.removeAllRanges(),n.addRange(r)),e.setSelectionRange(0,999999);try{var i=document.execCommand("copy");i?c(!0):o(new Error("copy failed"))}catch(l){o(l)}n&&n.removeAllRanges(),document.body.removeChild(e)})}function d(t){return navigator.clipboard?u(t).catch(function(){return a(t)}):a(t)}export{d as c};