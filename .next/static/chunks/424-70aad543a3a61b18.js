(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[424],{3412:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return u},ACTION_RESTORE:function(){return l},ACTION_SERVER_PATCH:function(){return f},ACTION_PREFETCH:function(){return i},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return a},isThenable:function(){return s}});let o="refresh",u="navigate",l="restore",f="server-patch",i="prefetch",c="fast-refresh",a="server-action";function s(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6504:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(282),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3480:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return g}});let r=n(8754),o=n(5893),u=r._(n(7294)),l=n(7950),f=n(7387),i=n(6982),c=n(6921),a=n(7727),s=n(1973),d=n(6216),p=n(1722),y=n(6504),b=n(634),h=n(3412),v=new Set;function _(e,t,n,r,o,u){if(u||(0,f.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let o=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(v.has(o))return;v.add(o)}Promise.resolve(u?e.prefetch(t,o):e.prefetch(t,n,r)).catch(e=>{})}}function O(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}let g=u.default.forwardRef(function(e,t){let n,r;let{href:i,as:v,children:g,prefetch:C=null,passHref:E,replace:j,shallow:P,scroll:T,locale:M,onClick:R,onMouseEnter:m,onTouchStart:A,legacyBehavior:k=!1,...I}=e;n=g,k&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let x=u.default.useContext(s.RouterContext),L=u.default.useContext(d.AppRouterContext),S=null!=x?x:L,N=!x,U=!1!==C,w=null===C?h.PrefetchKind.AUTO:h.PrefetchKind.FULL,{href:K,as:F}=u.default.useMemo(()=>{if(!x){let e=O(i);return{href:e,as:v?O(v):e}}let[e,t]=(0,l.resolveHref)(x,i,!0);return{href:e,as:v?(0,l.resolveHref)(x,v):t||e}},[x,i,v]),H=u.default.useRef(K),D=u.default.useRef(F);k&&(r=u.default.Children.only(n));let V=k?r&&"object"==typeof r&&r.ref:t,[q,z,B]=(0,p.useIntersection)({rootMargin:"200px"}),G=u.default.useCallback(e=>{(D.current!==F||H.current!==K)&&(B(),D.current=F,H.current=K),q(e),V&&("function"==typeof V?V(e):"object"==typeof V&&(V.current=e))},[F,V,K,B,q]);u.default.useEffect(()=>{S&&z&&U&&_(S,K,F,{locale:M},{kind:w},N)},[F,K,z,M,U,null==x?void 0:x.locale,S,N,w]);let Y={ref:G,onClick(e){k||"function"!=typeof R||R(e),k&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,n,r,o,l,i,c,a){let{nodeName:s}=e.currentTarget;if("A"===s.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a&&!(0,f.isLocalURL)(n)))return;e.preventDefault();let d=()=>{let e=null==i||i;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:l,locale:c,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})};a?u.default.startTransition(d):d()}(e,S,K,F,j,P,T,M,N)},onMouseEnter(e){k||"function"!=typeof m||m(e),k&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),S&&(U||!N)&&_(S,K,F,{locale:M,priority:!0,bypassPrefetchedCheck:!0},{kind:w},N)},onTouchStart(e){k||"function"!=typeof A||A(e),k&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),S&&(U||!N)&&_(S,K,F,{locale:M,priority:!0,bypassPrefetchedCheck:!0},{kind:w},N)}};if((0,c.isAbsoluteUrl)(F))Y.href=F;else if(!k||E||"a"===r.type&&!("href"in r.props)){let e=void 0!==M?M:null==x?void 0:x.locale,t=(null==x?void 0:x.isLocaleDomain)&&(0,y.getDomainLocale)(F,e,null==x?void 0:x.locales,null==x?void 0:x.domainLocales);Y.href=t||(0,b.addBasePath)((0,a.addLocale)(F,e,null==x?void 0:x.defaultLocale))}return k?u.default.cloneElement(r,Y):(0,o.jsx)("a",{...I,...Y,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1722:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return i}});let r=n(7294),o=n(9126),u="function"==typeof IntersectionObserver,l=new Map,f=[];function i(e){let{rootRef:t,rootMargin:n,disabled:i}=e,c=i||!u,[a,s]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(u){if(c||a)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:u}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=f.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},f.push(n),l.set(n,t),t}(n);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),l.delete(r);let e=f.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&f.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!a){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[c,n,t,a,d.current]),[p,a,(0,r.useCallback)(()=>{s(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,n){e.exports=n(3480)},1163:function(e,t,n){e.exports=n(3035)}}]);