(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[243],{4184:function(t,e){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&t.push(a)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var s in r)n.call(r,s)&&r[s]&&t.push(s);else t.push(r.toString())}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},7218:function(t,e,r){"use strict";r.d(e,{ZP:function(){return a}});var n=r(7294);const o=({color:t="currentColor",direction:e="left",distance:r="md",duration:o=.4,easing:i="cubic-bezier(0, 0, 0, 1)",hideOutline:a=!0,label:s,lines:l=3,onToggle:c,render:u,rounded:f=!1,size:p=32,toggle:d,toggled:h})=>{const[g,m]=(0,n.useState)(!1),v=Math.max(12,Math.min(48,p)),y=Math.round((48-v)/2),b=v/12,x=Math.round(b),w=v/(l*(("lg"===r?.25:"sm"===r?.75:.5)+(3===l?1:1.25))),O=Math.round(w),$=x*l+O*(l-1),j=Math.round((48-$)/2),E=parseFloat((v/(3===l?"lg"===r?4.0425:"sm"===r?5.1625:4.6325:"lg"===r?6.7875:"sm"===r?8.4875:7.6675)-(b-x+(w-O))/(3===l?1:2)/(4/3)).toFixed(2)),N=Math.max(0,o),S={cursor:"pointer",height:"48px",position:"relative",transition:`${N}s ${i}`,userSelect:"none",width:"48px"},_={background:t,height:`${x}px`,left:`${y}px`,position:"absolute"};a&&(S.outline="none"),f&&(_.borderRadius="9em");const k=d||m,C=void 0!==h?h:g;return u({barHeight:x,barStyles:_,burgerStyles:S,easing:i,handler:()=>{k(!C),"function"===typeof c&&c(!C)},isLeft:"left"===e,isToggled:C,label:s,margin:O,move:E,time:N,topOffset:j,width:v})};function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var a=t=>n.createElement(o,i({},t,{render:t=>n.createElement("div",{className:"hamburger-react","aria-label":t.label,onClick:t.handler,onKeyUp:e=>"Enter"===e.key&&t.handler(),role:"button",style:{...t.burgerStyles,transform:""+(t.isToggled?`rotate(${90*(t.isLeft?-1:1)}deg)`:"none")},tabIndex:0},n.createElement("div",{style:{...t.barStyles,width:`${t.width}px`,top:`${t.topOffset}px`,transition:`${t.time}s ${t.easing}`,transform:""+(t.isToggled?`rotate(${45*(t.isLeft?-1:1)}deg) translate(${t.move*(t.isLeft?-1:1)}px, ${t.move}px)`:"none")}}),n.createElement("div",{style:{...t.barStyles,width:`${t.width}px`,top:`${t.topOffset+t.barHeight+t.margin}px`,transition:`${t.time}s ${t.easing}`,transform:""+(t.isToggled?"scaleX(0)":"none")}}),n.createElement("div",{style:{...t.barStyles,width:`${t.width}px`,top:`${t.topOffset+2*t.barHeight+2*t.margin}px`,transition:`${t.time}s ${t.easing}`,transform:""+(t.isToggled?`rotate(${45*(t.isLeft?1:-1)}deg) translate(${t.move*(t.isLeft?-1:1)}px, ${-1*t.move}px)`:"none")}}))}))},432:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/novosti",function(){return r(3067)}])},3067:function(t,e,r){"use strict";r.r(e);var n=r(5893),o=r(6673),i=r(1952),a=r(6425),s=r(6440),l=r.n(s);e.default=function(){return(0,n.jsxs)("div",{className:l().container,children:[(0,n.jsx)(a.x,{title:"Novosti"}),(0,n.jsx)(i.h,{}),(0,n.jsx)("main",{className:l().main,children:(0,n.jsx)("div",{children:"Novosti TODO"})}),(0,n.jsx)(o.$,{})]})}},9008:function(t,e,r){t.exports=r(5443)},1163:function(t,e,r){t.exports=r(387)},8357:function(t,e,r){"use strict";r.d(e,{w_:function(){return c}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),a=function(){return(a=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},s=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r};function l(t){return t&&t.map((function(t,e){return n.createElement(t.tag,a({key:e},t.attr),l(t.child))}))}function c(t){return function(e){return n.createElement(u,a({attr:a({},t.attr)},e),l(t.child))}}function u(t){var e=function(e){var r,o=t.attr,i=t.size,l=t.title,c=s(t,["attr","size","title"]),u=i||e.size||"1em";return e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,c,{className:r,style:a(a({color:t.color||e.color},e.style),t.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),t.children)};return void 0!==i?n.createElement(i.Consumer,null,(function(t){return e(t)})):e(o)}}},function(t){t.O(0,[13,609,698,774,888,179],(function(){return e=432,t(t.s=e);var e}));var e=t.O();_N_E=e}]);