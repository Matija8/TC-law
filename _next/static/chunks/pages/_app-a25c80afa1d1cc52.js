(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6363:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(3490)}])},6730:function(e,n,t){"use strict";t.d(n,{W:function(){return i}});var r=t(5893),o=t(5988),a=t(977);function i(e){var n=e.className,t=void 0===n?"":n,i=e.children,c=e.options,l=void 0===c?{hoverEffects:!0,translate:!0}:c,u=e.onClick,s=e.style;return(0,r.jsxs)("button",{onClick:u,style:s,className:o.default.dynamic([["3bfeaa301edd5a72",[a.Q.red1,l.hoverEffects?"opacity: 0.9":"",l.translate?"transform: translateY(1px)":""]]])+" "+"".concat(t," mail-btn"),children:[(0,r.jsx)(o.default,{id:"3bfeaa301edd5a72",dynamic:[a.Q.red1,l.hoverEffects?"opacity: 0.9":"",l.translate?"transform: translateY(1px)":""],children:".mail-btn.__jsx-style-dynamic-selector {background-color:".concat(a.Q.red1,";\npadding:12px 32px;\nfont-size:0.9em;\ncolor:white;\nborder-radius:30px;\nmin-width:180px;\nwidth:-webkit-fit-content;\nwidth:-moz-fit-content;\nwidth:fit-content;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\n-webkit-justify-content:center;\njustify-content:center;\nmargin:1px;\ncursor:pointer;\n-webkit-transition:all 0.1s linear;\ntransition:all 0.1s linear;\noutline:none;\nborder:0}\n.mail-btn.__jsx-style-dynamic-selector:hover {").concat(l.hoverEffects?"opacity: 0.9":"","}\n.mail-btn.__jsx-style-dynamic-selector:active {box-shadow:none;\n").concat(l.translate?"transform: translateY(1px)":"","}")}),i]})}},8418:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var o,a=(o=t(7294))&&o.__esModule?o:{default:o},i=t(6273),c=t(387),l=t(7190);var u={};function s(e,n,t,r){if(e&&i.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,o=c.useRouter(),f=a.default.useMemo((function(){var n=r(i.resolveHref(o,e.href,!0),2),t=n[0],a=n[1];return{href:t,as:e.as?i.resolveHref(o,e.as):a||t}}),[o,e.href,e.as]),d=f.href,p=f.as,m=e.children,y=e.replace,v=e.shallow,b=e.scroll,h=e.locale;"string"===typeof m&&(m=a.default.createElement("a",null,m));var x=(n=a.default.Children.only(m))&&"object"===typeof n&&n.ref,g=r(l.useIntersection({rootMargin:"200px"}),2),k=g[0],w=g[1],j=a.default.useCallback((function(e){k(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,k]);a.default.useEffect((function(){var e=w&&t&&i.isLocalURL(d),n="undefined"!==typeof h?h:o&&o.locale,r=u[d+"%"+p+(n?"%"+n:"")];e&&!r&&s(o,d,p,{locale:n})}),[p,d,w,h,t,o]);var _={ref:j,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,c,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:l,scroll:c}))}(e,o,d,p,y,v,b,h)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),i.isLocalURL(d)&&s(o,d,p,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var E="undefined"!==typeof h?h:o&&o.locale,O=o&&o.isLocaleDomain&&i.getDomainLocale(p,E,o&&o.locales,o&&o.domainLocales);_.href=O||i.addBasePath(i.addLocale(p,E,o&&o.defaultLocale))}return a.default.cloneElement(n,_)};n.default=f},7190:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!i,l=o.useRef(),u=r(o.useState(!1),2),s=u[0],f=u[1],d=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),t||s||e&&e.tagName&&(l.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,i=r.elements;return i.set(e,n),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[t,n,s]);return o.useEffect((function(){if(!i&&!s){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[s]),[d,s]};var o=t(7294),a=t(9311),i="undefined"!==typeof IntersectionObserver;var c=new Map},3490:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var r=t(5893),o=(t(9221),t(5988)),a=t(1664),i=t(7294),c=t(1553),l=t(977),u=t(6730),s="cookie_notice_accepted";function f(){var e=(0,i.useState)(!0),n=e[0],t=e[1];return(0,i.useEffect)((function(){t(Boolean(localStorage.getItem(s)))}),[]),n?(0,r.jsx)(r.Fragment,{}):(0,r.jsxs)("footer",{className:o.default.dynamic([["c7368563ed0a8ea4",[l.Q.red1,c.R]]]),children:[(0,r.jsx)(o.default,{id:"c7368563ed0a8ea4",dynamic:[l.Q.red1,c.R],children:"footer.__jsx-style-dynamic-selector {position:fixed;\ninset:auto 0 0;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-flex-direction:column;\n-ms-flex-direction:column;\nflex-direction:column;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\nopacity:0.95;\nbackground-color:grey;\npadding:0.5rem 2rem 0.5rem;\ngap:0.5rem}\np.__jsx-style-dynamic-selector {color:white;\ntext-align:center;\nmargin:0}\nbutton.__jsx-style-dynamic-selector {color:white;\nbackground-color:".concat(l.Q.red1,";\nborder:none}\n@media (min-width:").concat(c.R,"px) {footer.__jsx-style-dynamic-selector {padding:0.5rem 5rem 0.5rem}}")}),(0,r.jsxs)("p",{className:o.default.dynamic([["c7368563ed0a8ea4",[l.Q.red1,c.R]]]),children:["Ovaj veb-sajt koristi kola\u010di\u0107e kako bi vam pru\u017eio bolje iskustvo pretra\u017eivanja, obezbedio funkcionalnost dru\u0161tvenih medija i radi analize saobra\u0107aja. Vi\u0161e o tome kako koristimo kola\u010di\u0107e, i kako mo\u017eete ograni\u010diti njihovo kori\u0161\u0107enje i promeniti pode\u0161avanja pro\u010ditajte"," ",(0,r.jsx)(a.default,{href:"/politika-privatnosti",children:(0,r.jsx)("a",{className:o.default.dynamic([["c7368563ed0a8ea4",[l.Q.red1,c.R]]]),children:"ovde"})})]}),(0,r.jsx)(u.W,{options:{hoverEffects:!1,translate:!1},onClick:function(){localStorage.setItem(s,"true"),t(!0)},children:"OK"})]})}function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){d(e,n,t[n])}))}return e}var m=function(e){var n=e.Component,t=e.pageProps;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,p({},t)),(0,r.jsx)(f,{},"Cookies banner")]})}},1553:function(e,n,t){"use strict";t.d(n,{R:function(){return r}});var r=768},977:function(e,n,t){"use strict";t.d(n,{Q:function(){return r}});var r={red1:"#a12027"}},9221:function(){},1664:function(e,n,t){e.exports=t(8418)},7884:function(e,n,t){"use strict";n.default=l;var r,o=(r=t(7294))&&r.__esModule?r:{default:r},a=t(8122),i=t(9035);var c=o.default.useInsertionEffect||o.default.useLayoutEffect;function l(e){var n=(0,a.useStyleRegistry)();return n?"undefined"===typeof window?(n.add(e),null):(c((function(){return n.add(e),function(){n.remove(e)}}),[e.id,String(e.dynamic)]),null):null}l.dynamic=function(e){return e.map((function(e){var n=e[0],t=e[1];return(0,i.computeId)(n,t)})).join(" ")}},5988:function(e,n,t){e.exports=t(7884)}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(6363),n(387)}));var t=e.O();_N_E=t}]);