(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6106)}])},159:function(e,t,n){"use strict";n.d(t,{t:function(){return v}});var r=n(5893),i=n(9768),o=n(4750),a=n(7141),s=n(2596),u=n(2175),c=n(1664),l=n.n(c),d=n(2610);function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}function v(e){var t=e.style;return(0,r.jsx)(u.J9,{initialValues:{nameSurname:"",email:"",message:"",readPrivacy:!1},onSubmit:function(e,t){var n=t.setSubmitting;setTimeout((function(){alert(JSON.stringify(e,null,2)),n(!1)}),400)},validate:function(e){var t={};return e.nameSurname||(t.nameSurname=s.iK),e.email?s.s5.email.test(e.email)||(t.email="*Nevalidan e-mail"):t.email=s.iK,e.message||(t.message=s.iK),t},children:function(e){var n=e.errors,u=e.handleBlur,c=e.handleChange,f=e.handleSubmit,v=e.isSubmitting,m=(e.submitForm,e.touched),p=e.values;return(0,r.jsxs)("form",{style:h({},t,{display:"flex",flexDirection:"column",gap:"1rem"}),onSubmit:f,children:[(0,r.jsx)(a.Z,{label:"Ime i prezime",name:"nameSurname",variant:"outlined",value:p.nameSurname,error:Boolean(m.nameSurname&&n.nameSurname),helperText:n.nameSurname||s.iK,onChange:c,onBlur:u}),(0,r.jsx)(a.Z,{label:"E-mail",name:"email",variant:"outlined",type:"email",value:p.email,error:Boolean(m.email&&n.email),helperText:m.email&&n.email||s.iK,onChange:c,onBlur:u}),(0,r.jsx)(a.Z,{multiline:!0,rows:6,label:"Poruka",name:"message",variant:"outlined",value:p.message,error:Boolean(m.message&&n.message),helperText:n.message||s.iK,onChange:c,onBlur:u}),(0,r.jsx)(o.Z,{control:(0,r.jsx)(i.Z,{value:p.readPrivacy,onChange:c,required:!0}),name:"readPrivacy",label:(0,r.jsxs)("p",{style:{margin:0},children:["Potvr\u0111ujem da sam pro\u010ditao i da sam saglasan sa"," ",(0,r.jsx)(l(),{href:"/politika-privatnosti",children:(0,r.jsx)("a",{style:{textAlign:"initial"},children:"Politikom privatnosti"})})]})}),(0,r.jsx)(d.o,{isSubmitting:v,disabled:Object.keys(n).length>0})]})}})}},2961:function(e,t,n){"use strict";n.d(t,{J:function(){return v}});var r=n(5893),i=n(8027),o=n(1664),a=n.n(o),s=n(3127),u=n(2959),c=n(3162),l=n(6875),d=n.n(l);function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}function v(e){var t=e.hide,n=e.employee,o=n.title,l=n.pagePath,f=n.email,v=u.X.getPageHref(n),m=h({},!l&&{pointerEvents:"none"});return(0,r.jsxs)("article",{className:d()["lawyer-info"],style:h({},t&&{display:"none"}),children:[(0,r.jsx)(c.L,{employee:n}),(0,r.jsxs)("div",{className:d()["member-details"],children:[(0,r.jsxs)("div",{className:d()["member-details-row-1"],children:[(0,r.jsx)(a(),{href:v,children:(0,r.jsx)("a",{style:h({},m,{fontSize:16}),children:u.X.getNameSurname(n)})}),f&&(0,r.jsx)("a",{href:"mailto:".concat(f),children:(0,r.jsx)(i.b,{size:30,color:s.Q.red1})})]}),(0,r.jsx)("p",{children:o})]})]})}},3162:function(e,t,n){"use strict";n.d(t,{L:function(){return f},R:function(){return d}});var r=n(5893),i=n(26),o=n(1664),a=n.n(o),s=n(2959),u=n(6875),c=n.n(u);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){var t=e.employee,n=t.name,o=t.surname,a=t.title,s=t.memberPhotoId;return(0,r.jsx)(i.Y,{className:c().photo,src:"".concat("/TC-law","/team/").concat(s,".jpg"),alt:"".concat(n," ").concat(o," ").concat(a," photo")})}function f(e){var t=e.employee,n=t.pagePath,i=s.X.getPageHref(t),o=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({cursor:n?"pointer":"no-drop"},!n&&{pointerEvents:"none"});return(0,r.jsx)(a(),{href:i,children:(0,r.jsx)("a",{style:o,children:(0,r.jsx)(d,{employee:t})})})}},4156:function(e,t,n){"use strict";n.d(t,{b:function(){return o}});var r=n(5893),i=n(2596);function o(){return(0,r.jsx)("div",{style:{minHeight:"25rem"},children:(0,r.jsx)("iframe",{style:{border:0},height:"100%",width:"100%",src:i.lp.maps})})}},2800:function(e,t,n){"use strict";n.d(t,{U:function(){return c}});var r=n(5893),i=n(9646),o=n(4768),a=n(3448);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function c(e){var t=e.children;return(0,r.jsx)(i.D,{remarkPlugins:[a.Z],rehypePlugins:[o.Z],components:{u:function(e){e.node;var t=u(e,["node"]);return(0,r.jsx)("u",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}({style:{textDecoration:"underline"}},t))}},children:t})}},5760:function(e,t,n){"use strict";n.d(t,{s:function(){return h}});var r=n(5893),i=n(1664),o=n.n(i),a=n(9583),s=n(2845),u=n.n(s);function c(e){var t=e.href,n=e.children;return(0,r.jsxs)("div",{className:u()["work-area-card"],children:[n,(0,r.jsx)("div",{className:u()["work-area-bottom"],children:(0,r.jsx)(o(),{href:t,children:(0,r.jsx)("a",{className:u()["work-area-right-arrow"],children:(0,r.jsx)(a.jS6,{size:30})})})})]})}var l=n(4734),d=n(1380),f=n.n(d);function h(){var e=l.G;return(0,r.jsx)("section",{className:f()["work-areas-grid"],children:e.map((function(e){return(0,r.jsxs)(c,{href:"/oblasti-rada/".concat(e.id),children:[e.icon({size:35}),(0,r.jsx)("h3",{className:"pre-wrap",children:e.title}),(0,r.jsxs)("p",{children:[v(e.text),".."]})]},e.title)}))})}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:120,n=e.substring(0,t),r=(null!==n&&void 0!==n?n:"").split(" ");r.pop();var i=r.join(" ");return i}},4606:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{q:function(){return i}});var i=[{name:"Jasna",surname:"Trifunovi\u0107",email:"jasna.trifunovic@tclaw.rs",title:"advokat",longTitle:"Advokat i ovla\u0161\u0107eni zastupnik za pravo intelektualne svojine",pagePath:"jasna-trifunovic",memberPhotoId:"Jasna",workAreas:["Korporativno pravo & korporativno upravljanje, M&A, strane investicije i podsticajna sredstva, privredno pravo, gra\u0111enje, pravo intelektualne svojine i medijsko pravo, radno pravo, neprofitne organizacije","U\u010destvovala je u radnim grupama na izradi zakona koji reguli\u0161u osnivanje i rad nevladinih organizacija i njihov poreski tretman, kao i u telima za izmene propisa u oblastima dr\u017eavne uprave i ljudskih prava."],education:["Pravni fakultet Univerziteta u Beogradu.","Dr\u017eavni ispit za ovla\u0161\u0107enog zastupnika za prava intelektualne svojine.","Advokat je od 1998.","Ovla\u0161\u0107eni zastupnik za prava intelektualne svojine pri Zavodu za intelektualnu svojinu od 2004."]},{name:"Lana",surname:"Tamind\u017ei\u0107",title:"advokat",email:"lana.tamindzic@tclaw.rs",pagePath:"lana-tamindzic",memberPhotoId:"Lana",workAreas:["Kompanijsko, privredno, antimonopolsko i pravo konkurencije, usagla\u0161enost sa propisima, za\u0161tita \u017eivotne sredine, radno i upravno pravo, neprofitne organizacije"],education:["Pravni fakultet Univerziteta u Beogradu.","Advokat je od 2014."]},{name:"Katarina",surname:"Savi\u0107",title:"advokatski pripravnik",pagePath:"katarina-savic",memberPhotoId:"Katarina",education:["Pravni fakultet Univerziteta u Beogradu."],test:!0},{name:"Marko",surname:"Ili\u0107",title:"advokatski pripravnik",memberPhotoId:"Marko",education:["Pravni fakultet Univerziteta u Beogradu."],test:!0},{name:"Matija",surname:"Test",title:"programer",pagePath:"matija-test",memberPhotoId:"debug",test:!0}].map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r(e,t,n[t])}))}return e}({},e,{key:e.pagePath||"".concat(e.name,"-").concat(e.surname),languages:e.languages||"engleski i srpski"})})).filter((function(e){return!e.test}))},6106:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return Be},default:function(){return Ne}});var r,i=n(5893),o=n(7294),a=[],s="ResizeObserver loop completed with undelivered notifications.";!function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"}(r||(r={}));var u,c=function(e){return Object.freeze(e)},l=function(e,t){this.inlineSize=e,this.blockSize=t,c(this)},d=function(){function e(e,t,n,r){return this.x=e,this.y=t,this.width=n,this.height=r,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,c(this)}return e.prototype.toJSON=function(){var e=this;return{x:e.x,y:e.y,top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),f=function(e){return e instanceof SVGElement&&"getBBox"in e},h=function(e){if(f(e)){var t=e.getBBox(),n=t.width,r=t.height;return!n&&!r}var i=e,o=i.offsetWidth,a=i.offsetHeight;return!(o||a||e.getClientRects().length)},v=function(e){var t,n;if(e instanceof Element)return!0;var r=null===(n=null===(t=e)||void 0===t?void 0:t.ownerDocument)||void 0===n?void 0:n.defaultView;return!!(r&&e instanceof r.Element)},m="undefined"!==typeof window?window:{},p=new WeakMap,b=/auto|scroll/,g=/^tb|vertical/,w=/msie|trident/i.test(m.navigator&&m.navigator.userAgent),j=function(e){return parseFloat(e||"0")},x=function(e,t,n){return void 0===e&&(e=0),void 0===t&&(t=0),void 0===n&&(n=!1),new l((n?t:e)||0,(n?e:t)||0)},y=c({devicePixelContentBoxSize:x(),borderBoxSize:x(),contentBoxSize:x(),contentRect:new d(0,0,0,0)}),k=function(e,t){if(void 0===t&&(t=!1),p.has(e)&&!t)return p.get(e);if(h(e))return p.set(e,y),y;var n=getComputedStyle(e),r=f(e)&&e.ownerSVGElement&&e.getBBox(),i=!w&&"border-box"===n.boxSizing,o=g.test(n.writingMode||""),a=!r&&b.test(n.overflowY||""),s=!r&&b.test(n.overflowX||""),u=r?0:j(n.paddingTop),l=r?0:j(n.paddingRight),v=r?0:j(n.paddingBottom),m=r?0:j(n.paddingLeft),k=r?0:j(n.borderTopWidth),O=r?0:j(n.borderRightWidth),z=r?0:j(n.borderBottomWidth),S=m+l,P=u+v,E=(r?0:j(n.borderLeftWidth))+O,_=k+z,T=s?e.offsetHeight-_-e.clientHeight:0,I=a?e.offsetWidth-E-e.clientWidth:0,B=i?S+E:0,N=i?P+_:0,R=r?r.width:j(n.width)-B-I,C=r?r.height:j(n.height)-N-T,A=R+S+I+E,M=C+P+T+_,D=c({devicePixelContentBoxSize:x(Math.round(R*devicePixelRatio),Math.round(C*devicePixelRatio),o),borderBoxSize:x(A,M,o),contentBoxSize:x(R,C,o),contentRect:new d(m,u,R,C)});return p.set(e,D),D},O=function(e,t,n){var i=k(e,n),o=i.borderBoxSize,a=i.contentBoxSize,s=i.devicePixelContentBoxSize;switch(t){case r.DEVICE_PIXEL_CONTENT_BOX:return s;case r.BORDER_BOX:return o;default:return a}},z=function(e){var t=k(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=c([t.borderBoxSize]),this.contentBoxSize=c([t.contentBoxSize]),this.devicePixelContentBoxSize=c([t.devicePixelContentBoxSize])},S=function(e){if(h(e))return 1/0;for(var t=0,n=e.parentNode;n;)t+=1,n=n.parentNode;return t},P=function(){var e=1/0,t=[];a.forEach((function(n){if(0!==n.activeTargets.length){var r=[];n.activeTargets.forEach((function(t){var n=new z(t.target),i=S(t.target);r.push(n),t.lastReportedSize=O(t.target,t.observedBox),i<e&&(e=i)})),t.push((function(){n.callback.call(n.observer,r,n.observer)})),n.activeTargets.splice(0,n.activeTargets.length)}}));for(var n=0,r=t;n<r.length;n++){(0,r[n])()}return e},E=function(e){a.forEach((function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach((function(n){n.isActive()&&(S(n.target)>e?t.activeTargets.push(n):t.skippedTargets.push(n))}))}))},_=function(){var e=0;for(E(e);a.some((function(e){return e.activeTargets.length>0}));)e=P(),E(e);return a.some((function(e){return e.skippedTargets.length>0}))&&function(){var e;"function"===typeof ErrorEvent?e=new ErrorEvent("error",{message:s}):((e=document.createEvent("Event")).initEvent("error",!1,!1),e.message=s),window.dispatchEvent(e)}(),e>0},T=[],I=function(e){if(!u){var t=0,n=document.createTextNode("");new MutationObserver((function(){return T.splice(0).forEach((function(e){return e()}))})).observe(n,{characterData:!0}),u=function(){n.textContent=""+(t?t--:t++)}}T.push(e),u()},B=0,N={attributes:!0,characterData:!0,childList:!0,subtree:!0},R=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],C=function(e){return void 0===e&&(e=0),Date.now()+e},A=!1,M=new(function(){function e(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return e.prototype.run=function(e){var t=this;if(void 0===e&&(e=250),!A){A=!0;var n,r=C(e);n=function(){var n=!1;try{n=_()}finally{if(A=!1,e=r-C(),!B)return;n?t.run(1e3):e>0?t.run(e):t.start()}},I((function(){requestAnimationFrame(n)}))}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,N)};document.body?t():m.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),R.forEach((function(t){return m.addEventListener(t,e.listener,!0)})))},e.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),R.forEach((function(t){return m.removeEventListener(t,e.listener,!0)})),this.stopped=!0)},e}()),D=function(e){!B&&e>0&&M.start(),!(B+=e)&&M.stop()},F=function(){function e(e,t){this.target=e,this.observedBox=t||r.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var e,t=O(this.target,this.observedBox,!0);return e=this.target,f(e)||function(e){switch(e.tagName){case"INPUT":if("image"!==e.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1}(e)||"inline"!==getComputedStyle(e).display||(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),L=function(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t},W=new WeakMap,H=function(e,t){for(var n=0;n<e.length;n+=1)if(e[n].target===t)return n;return-1},X=function(){function e(){}return e.connect=function(e,t){var n=new L(e,t);W.set(e,n)},e.observe=function(e,t,n){var r=W.get(e),i=0===r.observationTargets.length;H(r.observationTargets,t)<0&&(i&&a.push(r),r.observationTargets.push(new F(t,n&&n.box)),D(1),M.schedule())},e.unobserve=function(e,t){var n=W.get(e),r=H(n.observationTargets,t),i=1===n.observationTargets.length;r>=0&&(i&&a.splice(a.indexOf(n),1),n.observationTargets.splice(r,1),D(-1))},e.disconnect=function(e){var t=this,n=W.get(e);n.observationTargets.slice().forEach((function(n){return t.unobserve(e,n.target)})),n.activeTargets.splice(0,n.activeTargets.length)},e}(),J=function(){function e(e){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!==typeof e)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");X.connect(this,e)}return e.prototype.observe=function(e,t){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!v(e))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");X.observe(this,e,t)},e.prototype.unobserve=function(e){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!v(e))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");X.unobserve(this,e)},e.prototype.disconnect=function(){X.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();var U=o["undefined"!==typeof document&&void 0!==document.createElement?"useLayoutEffect":"useEffect"];var q=e=>{const t=o.useRef(e);return o.useEffect((()=>{t.current=e})),t},K=function(e){var t=[],n=null,r=function(){for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];t=i,n||(n=requestAnimationFrame((function(){n=null,e.apply(void 0,t)})))};return r.cancel=function(){n&&(cancelAnimationFrame(n),n=null)},r};const Z="undefined"!==typeof window&&"ResizeObserver"in window?window.ResizeObserver:J;function V(){}let G;const Q=()=>G||(G=function(){const e=new Map,t=new Z(K(((t,n)=>{for(let r=0;r<t.length;r++){const i=e.get(t[r].target);null===i||void 0===i||i.forEach((e=>e(t[r],n)))}})));return{observer:t,subscribe(n,r){var i;t.observe(n);const o=null!==(i=e.get(n))&&void 0!==i?i:[];o.push(r),e.set(n,o)},unsubscribe(n,r){var i;const o=null!==(i=e.get(n))&&void 0!==i?i:[];if(1===o.length)return t.unobserve(n),void e.delete(n);const a=o.indexOf(r);-1!==a&&o.splice(a,1),e.set(n,o)}}}());var Y=function(e,t){const n=Q(),r=q(t);return U((()=>{let t=!1;const i=e&&"current"in e?e.current:e;if(!i)return V;function o(e,n){t||r.current(e,n)}return n.subscribe(i,o),()=>{t=!0,n.unsubscribe(i,o)}}),[e,n,r]),n.observer};var $=(e,t)=>{const[n,r]=o.useState((()=>{var n,r;const i=e&&"current"in e?e.current:e;return i?[i.offsetWidth,i.offsetHeight]:[null!==(n=null===t||void 0===t?void 0:t.initialWidth)&&void 0!==n?n:0,null!==(r=null===t||void 0===t?void 0:t.initialHeight)&&void 0!==r?r:0]}));return U((()=>{const t=e&&"current"in e?e.current:e;t&&r([t.offsetWidth,t.offsetHeight])}),[e]),Y(e,(e=>{const t=e.target;r([t.offsetWidth,t.offsetHeight])})),n},ee=n(4184),te=n.n(ee),ne=n(4606),re=n(9348),ie=n.n(re),oe=n(3750),ae={Left:oe.pjk,Right:oe.fmn,Down:oe.IAR},se=n(2961);var ue=function(){function e(t,n,r){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.fstItemShownIdx=n,this.itemCount=t.length,this.take=function(){var e=Math.min(3,i.itemCount);return function(e,t,n){return Math.max(e,Math.min(t,n))}(1,Math.floor((r-20)/250),e)}()}var t=e.prototype;return t.isShowNextPossible=function(){return this.fstItemShownIdx<this.maxFstIndexPossible()},t.prevFstItemIndex=function(){return Math.max(0,this.fstItemShownIdx-1)},t.nextFstItemIndex=function(){return Math.min(this.maxFstIndexPossible(),this.fstItemShownIdx+1)},t.shouldHideItem=function(e){return e<this.fstItemShownIdx||e>this.lastItemShownIndex()},t.shouldRenderLRButtons=function(){return this.take<this.itemCount},t.lastItemShownIndex=function(){return this.fstItemShownIdx+this.take-1},t.maxFstIndexPossible=function(){return this.itemCount-this.take},e}();function ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function le(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(u){s=!0,i=u}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return ce(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ce(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function de(){var e=(0,o.useRef)(null),t=le($(e),1)[0],n=(0,o.useState)(0),r=n[0],a=n[1],s=new ue(ne.q,r,t),u=s.shouldRenderLRButtons();return(0,i.jsxs)("section",{className:ie().outer,ref:e,children:[u&&(0,i.jsx)(fe,{disabled:r<1,onClick:function(){return a(s.prevFstItemIndex())}}),(0,i.jsx)("div",{className:ie().carousel,children:ne.q.map((function(e,t){return(0,i.jsx)(se.J,{employee:e,hide:s.shouldHideItem(t)},e.key)}))}),u&&(0,i.jsx)(he,{disabled:!s.isShowNextPossible(),onClick:function(){return a(s.nextFstItemIndex())}})]})}function fe(e){var t=e.disabled,n=e.onClick;return(0,i.jsx)(ve,{disabled:t,onClick:n,isRight:!1})}function he(e){var t=e.disabled,n=e.onClick;return(0,i.jsx)(ve,{disabled:t,onClick:n,isRight:!0})}function ve(e){var t,n,r,o=e.disabled,a=e.onClick,s=e.isRight;return(0,i.jsx)("div",{className:ie()["lr-arrow-container"],children:(0,i.jsx)("button",{"aria-label":s?"Go to next carousel image":"Go to previous carousel image","aria-disabled":o,className:te()(ie()["lr-arrow"],(t={},n=ie().disabled,r=o,n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t)),disabled:o,onClick:a,children:s?(0,i.jsx)(ae.Right,{size:30}):(0,i.jsx)(ae.Left,{size:30})})})}var me=n(159),pe=n(5988),be=n.n(pe);function ge(){try{return{windowWidth:window.innerWidth,windowHeight:window.innerHeight}}catch(e){}return{windowWidth:300,windowHeight:300}}var we=n(3127),je=n(7830),xe=n(2800);function ye(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ke(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){ye(e,t,n[t])}))}return e}function Oe(e){var t=e.newsArticles,n=function(){var e=(0,o.useState)(ge()),t=e[0],n=e[1];return(0,o.useEffect)((function(){var e=function(){n(ge())};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),t}().windowWidth,r=Math.min((n-200)/400,3);return t=t.slice(0,r),(0,i.jsxs)("section",{className:"jsx-bb4db13d852fd952 root",children:[(0,i.jsx)(be(),{id:"bb4db13d852fd952",children:".root.jsx-bb4db13d852fd952>div.jsx-bb4db13d852fd952{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}.root.jsx-bb4db13d852fd952{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:3rem}"}),(0,i.jsxs)("div",{className:"jsx-bb4db13d852fd952",children:[(0,i.jsx)(ze,{children:"Stru\u010dnost."}),(0,i.jsx)(ze,{isRed:!0,children:"Efikasnost."}),(0,i.jsx)(ze,{children:"Pouzdanost."})]}),t.map((function(e){return(0,i.jsx)(Se,{article:e},e.id)}))]})}function ze(e){var t=e.isRed,n=e.children;return(0,i.jsx)("h2",{style:ke({marginTop:0},t&&{color:we.Q.red1}),children:n})}function Se(e){var t=e.article,n=je.t.getArticlePreview(t),r=n.title,o=n.body;return(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{style:{marginTop:0},children:r}),(0,i.jsx)(xe.U,{children:o})]})}var Pe=n(4156),Ee=n(5760),_e=n(6248),Te=n(9341),Ie=n.n(Te),Be=!0,Ne=function(e){var t=e.newsArticles;return(0,i.jsxs)(_e.Q,{title:"",children:[(0,i.jsx)(Oe,{newsArticles:t}),(0,i.jsxs)("section",{id:"oblasti-rada",style:{width:"100%",marginBottom:"3rem"},children:[(0,i.jsx)("h2",{className:"heading-underlined",children:"Oblasti Rada"}),(0,i.jsx)("p",{children:"Od 1998. pru\u017eamo podr\u0161ku internacionalnim i doma\u0107im klijentima iz razli\u010ditih privrednih oblasti u osnivanju, izgradnji i razvoju njihovih investicija u Srbiji. Negovanjem individualnog pristupa, s klijentom gradimo odnos uzajamnog poverenja i saradnje usmerene na rezultate. Va\u017eno nam je da razumemo poslovnu filozofiju, ciljeve i interese klijenta kako bismo mu pru\u017eili personalizovanu pravnu uslugu koja odgovara njegovim potrebama. Znamo da su stru\u010dnost, fleksibilnost i kreativnost nu\u017eni za prevazila\u017eenje izazova u dinami\u010dnom poslovnom okru\u017eenju."}),(0,i.jsx)("p",{children:"Zbog toga nam je stalo da klijentu pru\u017eimo profesionalne, fokusirane, pragmati\u010dne i pouzdane pravne usluge i savete koji \u0107e mu pomo\u0107i da se spremno i odlu\u010dno nosi sa poslovnim izazovima u kompleksnom privrednom ambijentu."}),(0,i.jsx)("p",{children:"Reputaciju pouzdanog, stru\u010dnog i uspe\u0161nog pravnog savetnika stekli smo znanjem, iskustvom, savesno\u0161\u0107u i visokim standardima. Verujemo da se na\u0161 uspeh ogleda u rezultatima na\u0161ih klijenata."})]}),(0,i.jsx)(Ee.s,{}),(0,i.jsxs)("section",{id:"nas-tim",children:[(0,i.jsx)("h2",{className:"heading-underlined",children:"Na\u0161 Tim"}),(0,i.jsx)(de,{})]}),(0,i.jsxs)("section",{id:"kontakt",children:[(0,i.jsx)("h2",{className:"heading-underlined",children:"Kontakt"}),(0,i.jsxs)("div",{className:Ie().contact,children:[(0,i.jsx)(me.t,{}),(0,i.jsx)(Pe.b,{})]})]})]})}},2959:function(e,t,n){"use strict";var r,i;n.d(t,{X:function(){return r}}),(i=r||(r={})).getPageHref=function(e){var t=e.pagePath;return t?"/nas-tim/".concat(t):"#"},i.getNameSurname=function(e){var t=e.name,n=e.surname;return"".concat(t," ").concat(n)},i.getLongTitle=function(e){return e.longTitle||e.title}},7830:function(e,t,n){"use strict";n.d(t,{t:function(){return a}});n(9177);var r,i=n(1864),o=n.n(i);(r||(r={})).removeFootnotes=function(e){return e.replaceAll(/\[\^[^\]]*]/g,"")};var a,s=n(3454);!function(e){var t=function(e){return""===e.trim()},n=function(){return o().join(s.cwd(),"public","news-articles")},i=function(e){var t=a(e),n=t.title,i=t.body;return i=c(i,150)+"...",{title:n,body:i=r.removeFootnotes(i)}},a=function(e){var t=e.split("\n\n").map((function(e){return e.trim()})).filter(Boolean);if(t.length<1)throw Error();return{title:u(t[0]),body:t.slice(1).join("\n\n")}},u=function(e){e=e.trimStart();var t=function(){for(var t=0;"#"===e[t];)t++;return t}();return e.slice(t).trim()},c=function(e,n){if(e.length<=n)return e;var r=function(){for(var r=e.slice(0,n),i=n-1;i>0;i--){var o=r[i];if(t(o))return i}throw Error()}();return e.slice(0,r)};e.getArticlePreview=function(e){return i(e.md)},e.isWhitespace=t,e.getNewsArticlesDirPath=n,e.getFullFsMdPathFromId=function(e){return o().join(n(),e+".md")}}(a||(a={}))},9348:function(e){e.exports={outer:"carousel_outer__qrifu",carousel:"carousel_carousel__N6P5W","lr-arrow-container":"carousel_lr-arrow-container__3W5gu","lr-arrow":"carousel_lr-arrow__UMb7f",disabled:"carousel_disabled__Jf0m7"}},6875:function(e){e.exports={"lawyer-info":"employee_lawyer-info__qe1JC",photo:"employee_photo__xMFhU","member-details":"employee_member-details__RTwsQ","member-details-row-1":"employee_member-details-row-1__REvIk"}},2845:function(e){e.exports={"work-area-card":"work-area-card_work-area-card__tJdd0","work-area-right-arrow":"work-area-card_work-area-right-arrow__HMrGD","work-area-bottom":"work-area-card_work-area-bottom__7X0uZ"}},1380:function(e){e.exports={"work-areas-grid":"work-area-grid_work-areas-grid__drJW6"}},9341:function(e){e.exports={contact:"kontakt_contact__nPn8t"}}},function(e){e.O(0,[228,445,937,13,260,617,609,876,662,834,529,34,248,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);