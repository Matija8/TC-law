(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[948],{4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var i=a.apply(null,n);i&&e.push(i)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var s in n)r.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},7218:function(e,t,n){"use strict";n.d(t,{ZP:function(){return i}});var r=n(7294);const a=({color:e="currentColor",direction:t="left",distance:n="md",duration:a=.4,easing:o="cubic-bezier(0, 0, 0, 1)",hideOutline:i=!0,label:s,lines:l=3,onToggle:c,render:u,rounded:m=!1,size:d=32,toggle:p,toggled:f})=>{const[v,h]=(0,r.useState)(!1),b=Math.max(12,Math.min(48,d)),g=Math.round((48-b)/2),y=b/12,j=Math.round(y),x=b/(l*(("lg"===n?.25:"sm"===n?.75:.5)+(3===l?1:1.25))),w=Math.round(x),k=j*l+w*(l-1),O=Math.round((48-k)/2),_=parseFloat((b/(3===l?"lg"===n?4.0425:"sm"===n?5.1625:4.6325:"lg"===n?6.7875:"sm"===n?8.4875:7.6675)-(y-j+(x-w))/(3===l?1:2)/(4/3)).toFixed(2)),N=Math.max(0,a),P={cursor:"pointer",height:"48px",position:"relative",transition:`${N}s ${o}`,userSelect:"none",width:"48px"},z={background:e,height:`${j}px`,left:`${g}px`,position:"absolute"};i&&(P.outline="none"),m&&(z.borderRadius="9em");const $=p||h,S=void 0!==f?f:v;return u({barHeight:j,barStyles:z,burgerStyles:P,easing:o,handler:()=>{$(!S),"function"===typeof c&&c(!S)},isLeft:"left"===t,isToggled:S,label:s,margin:w,move:_,time:N,topOffset:O,width:b})};function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=e=>r.createElement(a,o({},e,{render:e=>r.createElement("div",{className:"hamburger-react","aria-label":e.label,onClick:e.handler,onKeyUp:t=>"Enter"===t.key&&e.handler(),role:"button",style:{...e.burgerStyles,transform:""+(e.isToggled?`rotate(${90*(e.isLeft?-1:1)}deg)`:"none")},tabIndex:0},r.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset}px`,transition:`${e.time}s ${e.easing}`,transform:""+(e.isToggled?`rotate(${45*(e.isLeft?-1:1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${e.move}px)`:"none")}}),r.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+e.barHeight+e.margin}px`,transition:`${e.time}s ${e.easing}`,transform:""+(e.isToggled?"scaleX(0)":"none")}}),r.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+2*e.barHeight+2*e.margin}px`,transition:`${e.time}s ${e.easing}`,transform:""+(e.isToggled?`rotate(${45*(e.isLeft?1:-1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${-1*e.move}px)`:"none")}}))}))},1657:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/nas-tim",function(){return n(1252)}])},8653:function(e,t,n){"use strict";n.d(t,{c:function(){return m}});var r=n(5893),a=n(6534),o=n(8820),i=n(977),s=n(9421),l=n.n(s);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}function m(e){var t=e.name,n=e.surname,s=e.title,c=e.memberPhotoId,m=e.email,d=e.hide;return(0,r.jsxs)("article",{className:l()["lawyer-info"],style:u({},d&&{display:"none"}),children:[(0,r.jsx)("div",{className:l()["photo-container"],children:(0,r.jsx)(a.Y,{style:{cursor:"pointer"},className:l().photo,src:"".concat("/TC-law","/team/").concat(c,".jpg"),alt:"".concat(t," ").concat(n," ").concat(s," photo")})}),(0,r.jsxs)("div",{className:l()["member-details"],children:[(0,r.jsxs)("div",{className:l()["member-details-row-1"],children:[(0,r.jsxs)("p",{style:{fontSize:16},children:[t," ",n]}),m&&(0,r.jsx)("a",{href:"mailto:".concat(m),children:(0,r.jsx)(o.b,{size:30,color:i.Q.red1})})]}),(0,r.jsx)("p",{children:s})]})]})}},2942:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{q:function(){return a}});var a=[{name:"Jasna",surname:"Trifunovi\u0107",email:"jasna.trifunovic@tclaw.rs",title:"advokat",memberPhotoId:"Jasna"},{name:"Lana",surname:"Tamind\u017ei\u0107",title:"advokat",email:"lana.tamindzic@tclaw.rs",memberPhotoId:"Lana"},{name:"Katarina",surname:"Savi\u0107",title:"advokatski pripravnik",memberPhotoId:"Katarina"},{name:"Marko",surname:"Ili\u0107",title:"advokatski pripravnik",memberPhotoId:"Marko"},{name:"Matija",surname:"Test",title:"programer",memberPhotoId:"debug",test:!0}].map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},e,{key:"".concat(e.name,"-").concat(e.surname)})})).filter((function(e){return!e.test}))},1252:function(e,t,n){"use strict";n.r(t);var r=n(5893),a=n(7294),o=n(5988),i=n(6673),s=n(1952),l=n(8653),c=n(6425),u=n(2942),m=n(6440),d=n.n(m);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=function(){return(0,r.jsxs)("div",{className:"jsx-9e87299707434dd5 "+(d().container||""),children:[(0,r.jsx)(o.default,{id:"9e87299707434dd5",children:".team-photos.jsx-9e87299707434dd5 {display:grid;\ngrid-template-columns:repeat(auto-fit, minmax(220px, 1fr));\nrow-gap:3rem;\n-webkit-column-gap:4%;\ncolumn-gap:4%;\nplace-items:start center}"}),(0,r.jsx)(c.x,{title:"Na\u0161 tim"}),(0,r.jsx)(s.h,{}),(0,r.jsxs)("main",{className:"jsx-9e87299707434dd5 "+(d().main||""),children:[(0,r.jsxs)("section",{style:{marginBottom:"50px"},className:"jsx-9e87299707434dd5",children:[(0,r.jsx)("h2",{className:"jsx-9e87299707434dd5 heading-underlined",children:"Na\u0161 tim"}),(0,r.jsx)("p",{className:"jsx-9e87299707434dd5",children:"Sa preko dve i po decenije iskustva u advokaturi i negovanjem individualnog pristupa svakom klijentu, danas imamo zadovoljstvo da svoj uspeh merimo uspe\u0161nim rezultatima na\u0161ih klijenata."}),(0,r.jsx)("p",{className:"jsx-9e87299707434dd5",children:"Posebno nam je va\u017eno da shvatimo va\u0161u poslovnu filozofiju, ciljeve i interese kako bismo vam pru\u017eili personalizovanu pravnu uslugu koja odgovara va\u0161im potrebama. Zato smo fokusirani na va\u0161e ciljeve i potrebe kako bismo vam pru\u017eili pragmati\u010dne, pouzdane i visokoprofesionalne pravne usluge."}),(0,r.jsx)("p",{className:"jsx-9e87299707434dd5",children:"Uz visoke profesionalne standarde, fleksibilnost i kreativnost cilj nam je da vam damo pouzdano, efektivno i pravovremeno re\u0161enje koje \u0107e vam omogu\u0107iti da bezbolno prevazi\u0111ete izazove u dinami\u010dnom i kompleksnom privrednom ambijentu i postignete maksimalne rezultate uz minimalne izdatke. Stalo nam je da sa vama izgradimo poverenje i dugoro\u010dnu saradnju podjednako kao i do na\u0161e reputacije."})]}),(0,r.jsx)("section",{className:"jsx-9e87299707434dd5 team-photos",children:u.q.map((function(e){return(0,a.createElement)(l.c,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){p(e,t,n[t])}))}return e}({},e,{key:e.key}))}))})]}),(0,r.jsx)(i.$,{})]})}},9421:function(e){e.exports={"lawyer-info":"lawyer_lawyer-info__8iey_","photo-container":"lawyer_photo-container__Ocs7o",photo:"lawyer_photo__lNuof","member-details":"lawyer_member-details__2UuKl","member-details-row-1":"lawyer_member-details-row-1__y5zWI"}},9008:function(e,t,n){e.exports=n(5443)},1163:function(e,t,n){e.exports=n(387)},8357:function(e,t,n){"use strict";n.d(t,{w_:function(){return c}});var r=n(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(a),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function l(e){return e&&e.map((function(e,t){return r.createElement(e.tag,i({key:t},e.attr),l(e.child))}))}function c(e){return function(t){return r.createElement(u,i({attr:i({},e.attr)},t),l(e.child))}}function u(e){var t=function(t){var n,a=e.attr,o=e.size,l=e.title,c=s(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,c,{className:n,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==o?r.createElement(o.Consumer,null,(function(e){return t(e)})):t(a)}}},function(e){e.O(0,[13,609,698,774,888,179],(function(){return t=1657,e(e.s=t);var t}));var t=e.O();_N_E=t}]);