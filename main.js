(()=>{"use strict";var e={206:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(601),a=n.n(r),o=n(314),s=n.n(o)()(a());s.push([e.id,":root {\n    --dark-navy: #001d3d;\n    --cream-white: #f7f1e9;\n    --blue: #ced4da;\n    --dark-blue: #6c757d;\n    --red: red;\n    --white: white;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n*:hover {\n    cursor: default;\n}\n\nbody {\n    background-color: var(--dark-navy);\n    color: var(--cream-white);\n}\n\n.topbar {\n    padding: 10px 20px;\n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n#gameboards {\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n}\n\n#gameboards h2 {\n    text-align: center;\n    text-transform: capitalize;\n    margin-top: 10px;\n}\n\n.board {\n    padding: 50px;\n}\n\n.grid-label {\n    display: flex;\n    justify-content: space-around;\n}\n\n.x-axis {\n    flex-direction: row;\n\n    position: absolute;\n    top: -25px;\n    right: 0;\n\n    width: 400px;\n}\n\n.x-axis > * {\n    min-width: 10px;\n}\n\n.y-axis {\n    flex-direction: column;\n\n    position: absolute;\n    top: 0;\n    left: -30px;\n\n    height: 400px;\n    text-align: end;\n}\n\n.gameboard {\n    position: relative;\n    width: 400px;\n    height: 400px;\n    background-color: var(--cream-white);\n    border: 1px solid var(--cream-white);\n}\n\n.gameboard-grid {\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    gap: 1px;\n\n    width: calc(100% - 0.2px);\n    height: calc(100% - 0.2px);\n }\n\n.gameboard-cells {\n    z-index: 0;\n}\n\n.grid {\n    background-color: var(--dark-navy);\n    text-align: center;\n}\n\n.ship {\n    background-color: var(--blue);\n    border: 2px solid var(--dark-blue);\n    border-radius: 10px;\n}\n\n.marker-grid {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.marker {\n    padding: 7px;\n    border-radius: 50%;\n}\n\n.marker-hit {\n    background-color: var(--red);\n}\n\n.marker-miss {\n    background-color: var(--white);\n}\n\n#turn-log {\n    margin-bottom: 20px;\n}\n\n#game-actions {\n    display: flex;\n    gap: 15px;\n}\n\n.btn {\n    padding: 10px;\n    border: 1px solid var(--cream-white);\n    border-radius: 10px;\n}\n\n#reset {\n    display: none;\n}",""]);const i=s},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&s[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},s=[],i=0;i<e.length;i++){var c=e[i],d=r.base?c[0]+r.base:c[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var p=n(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var h=a(m,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:h,references:1})}s.push(u)}return s}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var i=n(o[s]);t[i].references--}for(var c=r(e,a),d=0;d<o.length;d++){var l=n(o[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=c}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var r=n(72),a=n.n(r),o=n(825),s=n.n(o),i=n(659),c=n.n(i),d=n(56),l=n.n(d),u=n(540),p=n.n(u),m=n(113),h=n.n(m),b=n(206),f={};f.styleTagTransform=h(),f.setAttributes=l(),f.insert=c().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=p(),a()(b.A,f),b.A&&b.A.locals&&b.A.locals;const g=(()=>{const e={};return{subscribe:(t,n)=>{e[t]=e[t]||[],e[t].push(n)},unsubscribe:(t,n)=>{e[t]&&(e[t]=e[t].filter((e=>e!==n)))},publish:(t,n)=>{e[t]&&e[t].forEach((e=>{e(n)}))}}})(),y=e=>{const t="player"===e?"player":"enemy",n=document.querySelector(`#${t}-grid .gameboard-cells`),r=document.querySelector(`#${t}-grid .gameboard-ships`),a=document.querySelector(`#${t}-grid .gameboard-markers`),o=()=>{n.innerHTML="",r.innerHTML="",a.innerHTML="";const e=new DocumentFragment;for(let t=0;t<100;t++){const t=document.createElement("div");t.classList.add("grid"),e.appendChild(t)}n.appendChild(e),"enemy"===t&&document.querySelector(`#${t}-grid`).addEventListener("click",(e=>{e.target.classList.contains("marked")||g.publish("PLAY_TURN",e.target.dataset.coordinates)}));const o=new DocumentFragment;let s=0;for(let e=0;e<100;e++){e%10==0&&s++;const t=document.createElement("div");t.classList.add("marker-grid"),t.setAttribute("data-coordinates",`${s-1},${e>9?e%10:e}`),o.appendChild(t)}a.appendChild(o)},s=e=>{e.forEach((e=>{const t=[...e.coordinates],n=t[0].split(","),a=t[t.length-1].split(","),o=+a[0]>+n[0]?"span "+(+a[0]-+n[0]+1):+a[0]+1,s=+a[1]>+n[1]?"span "+(+a[1]-+n[1]+1):+a[1]+1,i=document.createElement("div");i.setAttribute("id",e.type),i.classList.add("ship"),i.style.gridArea=`${+n[0]+1} / ${+n[1]+1} / ${o} / ${s}`,r.appendChild(i)}))},i=()=>{r.innerHTML=""};return(()=>{const e=document.querySelector(`#${t}-grid .x-axis`),n=document.querySelector(`#${t}-grid .y-axis`),r=new DocumentFragment,a=new DocumentFragment;for(let e=0;e<10;e++){const t=document.createElement("div");t.textContent=String.fromCharCode(65+e),r.appendChild(t)}for(let e=1;e<=10;e++){const t=document.createElement("div");t.textContent=e,a.appendChild(t)}e.appendChild(r),n.appendChild(a);const c=document.createElement("h2");c.textContent=`${t} Grid`,document.querySelector(`.board.${t}board`).appendChild(c),"player"===t&&(g.subscribe("SET_DEFAULT_SHIPS",s),g.subscribe("RESET_SHIPS",i),g.subscribe("SET_RANDOM_SHIPS",s)),g.subscribe("RESET_GAME",o)})(),{renderGrid:o,renderShips:s}},v=()=>[Math.floor(10*Math.random()),Math.floor(10*Math.random())],S=e=>{let t,n=0;return(e=>{switch(e){case"carrier":t=5;break;case"battleship":t=4;break;case"cruiser":case"submarine":t=3;break;case"destroyer":t=2;break;default:t=1}})(e),{hit:()=>(n++,t===n)}},x=()=>{let e=0,t=[],n=new Set,r=new Set,a={carrier:S("carrier"),battleship:S("battleship"),cruiser:S("cruiser"),submarine:S("submarine"),destroyer:S("destroyer")};const o=(s=v())=>{if(n.has(s.toString())||r.has(s.toString()))return o();const i={result:{coordinates:s.toString(),hit:!1,type:"nothing",sunk:!1},gameover:!1};for(const r of t)if(r.coordinates.has(s.toString())){i.result.hit=!0,i.result.type=r.type,i.result.sunk=a[r.type].hit(),n.add(s.toString()),i.result.sunk&&e++,5===e&&(i.gameover=!0);break}return i.result.hit||r.add(s.toString()),i};return{placeRandomShips:()=>{e=0,t=[],n=new Set,r=new Set,a={carrier:S("carrier"),battleship:S("battleship"),cruiser:S("cruiser"),submarine:S("submarine"),destroyer:S("destroyer")};const o=new Set,s=e=>{const t=((e,t)=>{const n="carrier"===e?5:"battleship"===e?4:"cruiser"===e||"submarine"===e?3:2,r=[];if(Math.floor(2*Math.random())){for(let e=0;e<n;e++)r.push([t[0]+e,t[1]]);return r}for(let e=0;e<n;e++)r.push([t[0],t[1]+e]);return r})(e,v());if((e=>{for(let t=0;t<e.length;t++)if(!e[t].every((e=>e<=9&&e>=0)))return!1;return!0})(t)&&((e,t)=>{for(let n=0;n<e.length;n++)if(t.has(e[n].toString()))return!1;return!0})(t,o)){const e=new Set;return t.forEach((t=>{o.add(t.toString()),e.add(t.toString())})),e}return s(e)};return Object.keys(a).forEach((e=>{t.push({type:e,coordinates:s(e)})})),t},receiveAttack:o,setDefaultCoordinates:()=>(t.push({type:"carrier",coordinates:new Set(["0,0","1,0","2,0","3,0","4,0"])}),t.push({type:"battleship",coordinates:new Set(["8,0","8,1","8,2","8,3"])}),t.push({type:"cruiser",coordinates:new Set(["1,6","1,7","1,8"])}),t.push({type:"submarine",coordinates:new Set(["6,8","7,8","8,8"])}),t.push({type:"destroyer",coordinates:new Set(["3,3","4,3"])}),t)}},E=e=>{const t=e;let n;return"player"===t?n=x():(n=x(),n.setDefaultCoordinates()),{gameboard:n,getPlayerType:()=>t}},T=(()=>{let e,t=E("player"),n=E("computer"),r=!1;const a=()=>{const e=t.gameboard.setDefaultCoordinates();g.publish("SET_DEFAULT_SHIPS",e)},o=()=>{const t=!!Math.floor(2*Math.random());n.gameboard.placeRandomShips(),t?(e=!1,i()):(g.publish("PLAYER_START"),e=!0)},s=e=>{const t=n.gameboard.receiveAttack(e.split(","));c(t),d(t),l(t)},i=()=>{const e=t.gameboard.receiveAttack();c(e),d(e),l(e)},c=t=>{g.publish("UPDATE_GRID",{targetGrid:e?"enemy":"player",coordinates:t.result.coordinates,isHit:t.result.hit})},d=t=>{g.publish("UPDATE_HISTORY",{player:e?"player":"enemy",result:t.result,gameover:t.gameover})},l=t=>{t.gameover&&(r=!r),e=!e};return g.subscribe("START_GAME",o),g.subscribe("SHUFFLE_SHIPS",(()=>{const e=t.gameboard.placeRandomShips();g.publish("RESET_SHIPS"),g.publish("SET_RANDOM_SHIPS",e)})),g.subscribe("RESTART_GAME",(()=>{t=E("player"),n=E("computer"),r=!1,g.publish("RESET_GAME"),g.publish("RESET_HISTORY"),a()})),g.subscribe("PLAY_TURN",(t=>{e&&!r&&(s(t),"computer"!==n.getPlayerType()||r||setTimeout((()=>i()),2e3))})),{player:t,enemy:n,setDefaultShips:a,startGame:o}})();(()=>{const e=document.querySelector(".topbar"),t=document.createElement("h1");t.textContent="Battleship",e.appendChild(t)})();const k=y("player"),A=y("enemy");(()=>{const e=document.querySelector("#turn-log");g.subscribe("UPDATE_HISTORY",(({player:t,result:n,gameover:r})=>{e.innerHTML=r&&"player"===t?"<strong>GAMEOVER:</strong> You win!":r&&"enemy"===t?"<strong>GAMEOVER:</strong> You Lose!":`<strong>${t.toUpperCase()}: </strong> Hit ${n.type} ${n.sunk?"- sunk "+n.type:""}`})),g.subscribe("PLAYER_START",(()=>{e.innerHTML="You attack first!"})),g.subscribe("RESET_HISTORY",(()=>{e.innerHTML=""}))})(),(()=>{const e=document.querySelector("#game-actions");let t,n,r;t=document.createElement("span"),t.setAttribute("id","start"),t.classList.add("btn"),t.textContent="Start Game",n=document.createElement("span"),n.setAttribute("id","shuffle"),n.classList.add("btn"),n.textContent="Shuffle Ships",r=document.createElement("span"),r.setAttribute("id","reset"),r.classList.add("btn"),r.textContent="Reset",e.appendChild(t),e.appendChild(n),e.appendChild(r),t.addEventListener("click",(()=>{g.publish("START_GAME"),t.style.display="none",n.style.display="none",r.style.display="block"})),n.addEventListener("click",(()=>g.publish("SHUFFLE_SHIPS"))),r.addEventListener("click",(()=>{g.publish("RESTART_GAME"),t.style.display="block",n.style.display="block",r.style.display="none"}))})(),g.subscribe("UPDATE_GRID",(({targetGrid:e,coordinates:t,isHit:n})=>{const r=document.querySelector(`#${e}-grid .gameboard-markers [data-coordinates="${t}"]`),a=document.createElement("div");a.classList.add("marker"),a.classList.add("marked"),a.classList.add(n?"marker-hit":"marker-miss"),r.classList.add("marked"),r.appendChild(a)})),k.renderGrid(),A.renderGrid(),T.setDefaultShips()})();