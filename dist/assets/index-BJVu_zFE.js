(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const h of o)if(h.type==="childList")for(const d of h.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(o){const h={};return o.integrity&&(h.integrity=o.integrity),o.referrerPolicy&&(h.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?h.credentials="include":o.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function a(o){if(o.ep)return;o.ep=!0;const h=i(o);fetch(o.href,h)}})();function uT(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Nd={exports:{}},go={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zy;function cT(){if(zy)return go;zy=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(a,o,h){var d=null;if(h!==void 0&&(d=""+h),o.key!==void 0&&(d=""+o.key),"key"in o){h={};for(var g in o)g!=="key"&&(h[g]=o[g])}else h=o;return o=h.ref,{$$typeof:s,type:a,key:d,ref:o!==void 0?o:null,props:h}}return go.Fragment=e,go.jsx=i,go.jsxs=i,go}var jy;function hT(){return jy||(jy=1,Nd.exports=cT()),Nd.exports}var q=hT(),Id={exports:{}},ye={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hy;function fT(){if(Hy)return ye;Hy=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),d=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),A=Symbol.iterator;function C(I){return I===null||typeof I!="object"?null:(I=A&&I[A]||I["@@iterator"],typeof I=="function"?I:null)}var X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,Z={};function te(I,W,ne){this.props=I,this.context=W,this.refs=Z,this.updater=ne||X}te.prototype.isReactComponent={},te.prototype.setState=function(I,W){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,W,"setState")},te.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function re(){}re.prototype=te.prototype;function ue(I,W,ne){this.props=I,this.context=W,this.refs=Z,this.updater=ne||X}var pe=ue.prototype=new re;pe.constructor=ue,F(pe,te.prototype),pe.isPureReactComponent=!0;var ve=Array.isArray,_e={H:null,A:null,T:null,S:null,V:null},Le=Object.prototype.hasOwnProperty;function M(I,W,ne,$,le,Ee){return ne=Ee.ref,{$$typeof:s,type:I,key:W,ref:ne!==void 0?ne:null,props:Ee}}function b(I,W){return M(I.type,W,void 0,void 0,void 0,I.props)}function N(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function x(I){var W={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(ne){return W[ne]})}var k=/\/+/g;function U(I,W){return typeof I=="object"&&I!==null&&I.key!=null?x(""+I.key):W.toString(36)}function R(){}function St(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(R,R):(I.status="pending",I.then(function(W){I.status==="pending"&&(I.status="fulfilled",I.value=W)},function(W){I.status==="pending"&&(I.status="rejected",I.reason=W)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function nt(I,W,ne,$,le){var Ee=typeof I;(Ee==="undefined"||Ee==="boolean")&&(I=null);var ge=!1;if(I===null)ge=!0;else switch(Ee){case"bigint":case"string":case"number":ge=!0;break;case"object":switch(I.$$typeof){case s:case e:ge=!0;break;case T:return ge=I._init,nt(ge(I._payload),W,ne,$,le)}}if(ge)return le=le(I),ge=$===""?"."+U(I,0):$,ve(le)?(ne="",ge!=null&&(ne=ge.replace(k,"$&/")+"/"),nt(le,W,ne,"",function(Fn){return Fn})):le!=null&&(N(le)&&(le=b(le,ne+(le.key==null||I&&I.key===le.key?"":(""+le.key).replace(k,"$&/")+"/")+ge)),W.push(le)),1;ge=0;var Ct=$===""?".":$+":";if(ve(I))for(var $e=0;$e<I.length;$e++)$=I[$e],Ee=Ct+U($,$e),ge+=nt($,W,ne,Ee,le);else if($e=C(I),typeof $e=="function")for(I=$e.call(I),$e=0;!($=I.next()).done;)$=$.value,Ee=Ct+U($,$e++),ge+=nt($,W,ne,Ee,le);else if(Ee==="object"){if(typeof I.then=="function")return nt(St(I),W,ne,$,le);throw W=String(I),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return ge}function D(I,W,ne){if(I==null)return I;var $=[],le=0;return nt(I,$,"","",function(Ee){return W.call(ne,Ee,le++)}),$}function K(I){if(I._status===-1){var W=I._result;W=W(),W.then(function(ne){(I._status===0||I._status===-1)&&(I._status=1,I._result=ne)},function(ne){(I._status===0||I._status===-1)&&(I._status=2,I._result=ne)}),I._status===-1&&(I._status=0,I._result=W)}if(I._status===1)return I._result.default;throw I._result}var ie=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)};function Ne(){}return ye.Children={map:D,forEach:function(I,W,ne){D(I,function(){W.apply(this,arguments)},ne)},count:function(I){var W=0;return D(I,function(){W++}),W},toArray:function(I){return D(I,function(W){return W})||[]},only:function(I){if(!N(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},ye.Component=te,ye.Fragment=i,ye.Profiler=o,ye.PureComponent=ue,ye.StrictMode=a,ye.Suspense=v,ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=_e,ye.__COMPILER_RUNTIME={__proto__:null,c:function(I){return _e.H.useMemoCache(I)}},ye.cache=function(I){return function(){return I.apply(null,arguments)}},ye.cloneElement=function(I,W,ne){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var $=F({},I.props),le=I.key,Ee=void 0;if(W!=null)for(ge in W.ref!==void 0&&(Ee=void 0),W.key!==void 0&&(le=""+W.key),W)!Le.call(W,ge)||ge==="key"||ge==="__self"||ge==="__source"||ge==="ref"&&W.ref===void 0||($[ge]=W[ge]);var ge=arguments.length-2;if(ge===1)$.children=ne;else if(1<ge){for(var Ct=Array(ge),$e=0;$e<ge;$e++)Ct[$e]=arguments[$e+2];$.children=Ct}return M(I.type,le,void 0,void 0,Ee,$)},ye.createContext=function(I){return I={$$typeof:d,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:h,_context:I},I},ye.createElement=function(I,W,ne){var $,le={},Ee=null;if(W!=null)for($ in W.key!==void 0&&(Ee=""+W.key),W)Le.call(W,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(le[$]=W[$]);var ge=arguments.length-2;if(ge===1)le.children=ne;else if(1<ge){for(var Ct=Array(ge),$e=0;$e<ge;$e++)Ct[$e]=arguments[$e+2];le.children=Ct}if(I&&I.defaultProps)for($ in ge=I.defaultProps,ge)le[$]===void 0&&(le[$]=ge[$]);return M(I,Ee,void 0,void 0,null,le)},ye.createRef=function(){return{current:null}},ye.forwardRef=function(I){return{$$typeof:g,render:I}},ye.isValidElement=N,ye.lazy=function(I){return{$$typeof:T,_payload:{_status:-1,_result:I},_init:K}},ye.memo=function(I,W){return{$$typeof:y,type:I,compare:W===void 0?null:W}},ye.startTransition=function(I){var W=_e.T,ne={};_e.T=ne;try{var $=I(),le=_e.S;le!==null&&le(ne,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(Ne,ie)}catch(Ee){ie(Ee)}finally{_e.T=W}},ye.unstable_useCacheRefresh=function(){return _e.H.useCacheRefresh()},ye.use=function(I){return _e.H.use(I)},ye.useActionState=function(I,W,ne){return _e.H.useActionState(I,W,ne)},ye.useCallback=function(I,W){return _e.H.useCallback(I,W)},ye.useContext=function(I){return _e.H.useContext(I)},ye.useDebugValue=function(){},ye.useDeferredValue=function(I,W){return _e.H.useDeferredValue(I,W)},ye.useEffect=function(I,W,ne){var $=_e.H;if(typeof ne=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return $.useEffect(I,W)},ye.useId=function(){return _e.H.useId()},ye.useImperativeHandle=function(I,W,ne){return _e.H.useImperativeHandle(I,W,ne)},ye.useInsertionEffect=function(I,W){return _e.H.useInsertionEffect(I,W)},ye.useLayoutEffect=function(I,W){return _e.H.useLayoutEffect(I,W)},ye.useMemo=function(I,W){return _e.H.useMemo(I,W)},ye.useOptimistic=function(I,W){return _e.H.useOptimistic(I,W)},ye.useReducer=function(I,W,ne){return _e.H.useReducer(I,W,ne)},ye.useRef=function(I){return _e.H.useRef(I)},ye.useState=function(I){return _e.H.useState(I)},ye.useSyncExternalStore=function(I,W,ne){return _e.H.useSyncExternalStore(I,W,ne)},ye.useTransition=function(){return _e.H.useTransition()},ye.version="19.1.1",ye}var By;function Tp(){return By||(By=1,Id.exports=fT()),Id.exports}var me=Tp();const dT=uT(me);var Od={exports:{}},mo={},Dd={exports:{}},xd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vy;function pT(){return Vy||(Vy=1,(function(s){function e(D,K){var ie=D.length;D.push(K);e:for(;0<ie;){var Ne=ie-1>>>1,I=D[Ne];if(0<o(I,K))D[Ne]=K,D[ie]=I,ie=Ne;else break e}}function i(D){return D.length===0?null:D[0]}function a(D){if(D.length===0)return null;var K=D[0],ie=D.pop();if(ie!==K){D[0]=ie;e:for(var Ne=0,I=D.length,W=I>>>1;Ne<W;){var ne=2*(Ne+1)-1,$=D[ne],le=ne+1,Ee=D[le];if(0>o($,ie))le<I&&0>o(Ee,$)?(D[Ne]=Ee,D[le]=ie,Ne=le):(D[Ne]=$,D[ne]=ie,Ne=ne);else if(le<I&&0>o(Ee,ie))D[Ne]=Ee,D[le]=ie,Ne=le;else break e}}return K}function o(D,K){var ie=D.sortIndex-K.sortIndex;return ie!==0?ie:D.id-K.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;s.unstable_now=function(){return h.now()}}else{var d=Date,g=d.now();s.unstable_now=function(){return d.now()-g}}var v=[],y=[],T=1,A=null,C=3,X=!1,F=!1,Z=!1,te=!1,re=typeof setTimeout=="function"?setTimeout:null,ue=typeof clearTimeout=="function"?clearTimeout:null,pe=typeof setImmediate<"u"?setImmediate:null;function ve(D){for(var K=i(y);K!==null;){if(K.callback===null)a(y);else if(K.startTime<=D)a(y),K.sortIndex=K.expirationTime,e(v,K);else break;K=i(y)}}function _e(D){if(Z=!1,ve(D),!F)if(i(v)!==null)F=!0,Le||(Le=!0,U());else{var K=i(y);K!==null&&nt(_e,K.startTime-D)}}var Le=!1,M=-1,b=5,N=-1;function x(){return te?!0:!(s.unstable_now()-N<b)}function k(){if(te=!1,Le){var D=s.unstable_now();N=D;var K=!0;try{e:{F=!1,Z&&(Z=!1,ue(M),M=-1),X=!0;var ie=C;try{t:{for(ve(D),A=i(v);A!==null&&!(A.expirationTime>D&&x());){var Ne=A.callback;if(typeof Ne=="function"){A.callback=null,C=A.priorityLevel;var I=Ne(A.expirationTime<=D);if(D=s.unstable_now(),typeof I=="function"){A.callback=I,ve(D),K=!0;break t}A===i(v)&&a(v),ve(D)}else a(v);A=i(v)}if(A!==null)K=!0;else{var W=i(y);W!==null&&nt(_e,W.startTime-D),K=!1}}break e}finally{A=null,C=ie,X=!1}K=void 0}}finally{K?U():Le=!1}}}var U;if(typeof pe=="function")U=function(){pe(k)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,St=R.port2;R.port1.onmessage=k,U=function(){St.postMessage(null)}}else U=function(){re(k,0)};function nt(D,K){M=re(function(){D(s.unstable_now())},K)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(D){D.callback=null},s.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<D?Math.floor(1e3/D):5},s.unstable_getCurrentPriorityLevel=function(){return C},s.unstable_next=function(D){switch(C){case 1:case 2:case 3:var K=3;break;default:K=C}var ie=C;C=K;try{return D()}finally{C=ie}},s.unstable_requestPaint=function(){te=!0},s.unstable_runWithPriority=function(D,K){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var ie=C;C=D;try{return K()}finally{C=ie}},s.unstable_scheduleCallback=function(D,K,ie){var Ne=s.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?Ne+ie:Ne):ie=Ne,D){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=ie+I,D={id:T++,callback:K,priorityLevel:D,startTime:ie,expirationTime:I,sortIndex:-1},ie>Ne?(D.sortIndex=ie,e(y,D),i(v)===null&&D===i(y)&&(Z?(ue(M),M=-1):Z=!0,nt(_e,ie-Ne))):(D.sortIndex=I,e(v,D),F||X||(F=!0,Le||(Le=!0,U()))),D},s.unstable_shouldYield=x,s.unstable_wrapCallback=function(D){var K=C;return function(){var ie=C;C=K;try{return D.apply(this,arguments)}finally{C=ie}}}})(xd)),xd}var qy;function gT(){return qy||(qy=1,Dd.exports=pT()),Dd.exports}var Md={exports:{}},Gt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gy;function mT(){if(Gy)return Gt;Gy=1;var s=Tp();function e(v){var y="https://react.dev/errors/"+v;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)y+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+v+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function h(v,y,T){var A=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:A==null?null:""+A,children:v,containerInfo:y,implementation:T}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(v,y){if(v==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Gt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Gt.createPortal=function(v,y){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(e(299));return h(v,y,null,T)},Gt.flushSync=function(v){var y=d.T,T=a.p;try{if(d.T=null,a.p=2,v)return v()}finally{d.T=y,a.p=T,a.d.f()}},Gt.preconnect=function(v,y){typeof v=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,a.d.C(v,y))},Gt.prefetchDNS=function(v){typeof v=="string"&&a.d.D(v)},Gt.preinit=function(v,y){if(typeof v=="string"&&y&&typeof y.as=="string"){var T=y.as,A=g(T,y.crossOrigin),C=typeof y.integrity=="string"?y.integrity:void 0,X=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;T==="style"?a.d.S(v,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:A,integrity:C,fetchPriority:X}):T==="script"&&a.d.X(v,{crossOrigin:A,integrity:C,fetchPriority:X,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Gt.preinitModule=function(v,y){if(typeof v=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var T=g(y.as,y.crossOrigin);a.d.M(v,{crossOrigin:T,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&a.d.M(v)},Gt.preload=function(v,y){if(typeof v=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var T=y.as,A=g(T,y.crossOrigin);a.d.L(v,T,{crossOrigin:A,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Gt.preloadModule=function(v,y){if(typeof v=="string")if(y){var T=g(y.as,y.crossOrigin);a.d.m(v,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:T,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else a.d.m(v)},Gt.requestFormReset=function(v){a.d.r(v)},Gt.unstable_batchedUpdates=function(v,y){return v(y)},Gt.useFormState=function(v,y,T){return d.H.useFormState(v,y,T)},Gt.useFormStatus=function(){return d.H.useHostTransitionStatus()},Gt.version="19.1.1",Gt}var Fy;function _T(){if(Fy)return Md.exports;Fy=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Md.exports=mT(),Md.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yy;function yT(){if(Yy)return mo;Yy=1;var s=gT(),e=Tp(),i=_T();function a(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function h(t){var n=t,r=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(r=n.return),t=n.return;while(t)}return n.tag===3?r:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function g(t){if(h(t)!==t)throw Error(a(188))}function v(t){var n=t.alternate;if(!n){if(n=h(t),n===null)throw Error(a(188));return n!==t?null:t}for(var r=t,l=n;;){var c=r.return;if(c===null)break;var f=c.alternate;if(f===null){if(l=c.return,l!==null){r=l;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===r)return g(c),t;if(f===l)return g(c),n;f=f.sibling}throw Error(a(188))}if(r.return!==l.return)r=c,l=f;else{for(var _=!1,S=c.child;S;){if(S===r){_=!0,r=c,l=f;break}if(S===l){_=!0,l=c,r=f;break}S=S.sibling}if(!_){for(S=f.child;S;){if(S===r){_=!0,r=f,l=c;break}if(S===l){_=!0,l=f,r=c;break}S=S.sibling}if(!_)throw Error(a(189))}}if(r.alternate!==l)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?t:n}function y(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=y(t),n!==null)return n;t=t.sibling}return null}var T=Object.assign,A=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),X=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),te=Symbol.for("react.profiler"),re=Symbol.for("react.provider"),ue=Symbol.for("react.consumer"),pe=Symbol.for("react.context"),ve=Symbol.for("react.forward_ref"),_e=Symbol.for("react.suspense"),Le=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),x=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function U(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var R=Symbol.for("react.client.reference");function St(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===R?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case te:return"Profiler";case Z:return"StrictMode";case _e:return"Suspense";case Le:return"SuspenseList";case N:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case X:return"Portal";case pe:return(t.displayName||"Context")+".Provider";case ue:return(t._context.displayName||"Context")+".Consumer";case ve:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case M:return n=t.displayName||null,n!==null?n:St(t.type)||"Memo";case b:n=t._payload,t=t._init;try{return St(t(n))}catch{}}return null}var nt=Array.isArray,D=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},Ne=[],I=-1;function W(t){return{current:t}}function ne(t){0>I||(t.current=Ne[I],Ne[I]=null,I--)}function $(t,n){I++,Ne[I]=t.current,t.current=n}var le=W(null),Ee=W(null),ge=W(null),Ct=W(null);function $e(t,n){switch($(ge,n),$(Ee,t),$(le,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?fy(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=fy(n),t=dy(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ne(le),$(le,t)}function Fn(){ne(le),ne(Ee),ne(ge)}function Zi(t){t.memoizedState!==null&&$(Ct,t);var n=le.current,r=dy(n,t.type);n!==r&&($(Ee,t),$(le,r))}function fi(t){Ee.current===t&&(ne(le),ne(Ee)),Ct.current===t&&(ne(Ct),uo._currentValue=ie)}var Hs=Object.prototype.hasOwnProperty,Bs=s.unstable_scheduleCallback,Vs=s.unstable_cancelCallback,ol=s.unstable_shouldYield,iu=s.unstable_requestPaint,mn=s.unstable_now,Rh=s.unstable_getCurrentPriorityLevel,ul=s.unstable_ImmediatePriority,Qr=s.unstable_UserBlockingPriority,qs=s.unstable_NormalPriority,Nh=s.unstable_LowPriority,Kr=s.unstable_IdlePriority,cl=s.log,su=s.unstable_setDisableYieldValue,ot=null,He=null;function rn(t){if(typeof cl=="function"&&su(t),He&&typeof He.setStrictMode=="function")try{He.setStrictMode(ot,t)}catch{}}var Vt=Math.clz32?Math.clz32:Gs,ru=Math.log,Ih=Math.LN2;function Gs(t){return t>>>=0,t===0?32:31-(ru(t)/Ih|0)|0}var Fs=256,Ys=4194304;function Dn(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Wr(t,n,r){var l=t.pendingLanes;if(l===0)return 0;var c=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var S=l&134217727;return S!==0?(l=S&~f,l!==0?c=Dn(l):(_&=S,_!==0?c=Dn(_):r||(r=S&~t,r!==0&&(c=Dn(r))))):(S=l&~f,S!==0?c=Dn(S):_!==0?c=Dn(_):r||(r=l&~t,r!==0&&(c=Dn(r)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,r=n&-n,f>=r||f===32&&(r&4194048)!==0)?n:c}function Xs(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function hl(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fl(){var t=Fs;return Fs<<=1,(Fs&4194048)===0&&(Fs=256),t}function au(){var t=Ys;return Ys<<=1,(Ys&62914560)===0&&(Ys=4194304),t}function di(t){for(var n=[],r=0;31>r;r++)n.push(t);return n}function pi(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function dl(t,n,r,l,c,f){var _=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var S=t.entanglements,w=t.expirationTimes,j=t.hiddenUpdates;for(r=_&~r;0<r;){var G=31-Vt(r),Q=1<<G;S[G]=0,w[G]=-1;var H=j[G];if(H!==null)for(j[G]=null,G=0;G<H.length;G++){var B=H[G];B!==null&&(B.lane&=-536870913)}r&=~Q}l!==0&&gi(t,l,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function gi(t,n,r){t.pendingLanes|=n,t.suspendedLanes&=~n;var l=31-Vt(n);t.entangledLanes|=n,t.entanglements[l]=t.entanglements[l]|1073741824|r&4194090}function pl(t,n){var r=t.entangledLanes|=n;for(t=t.entanglements;r;){var l=31-Vt(r),c=1<<l;c&n|t[l]&n&&(t[l]|=n),r&=~c}}function Qs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Zr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function $i(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:xy(t.type))}function lu(t,n){var r=K.p;try{return K.p=t,n()}finally{K.p=r}}var it=Math.random().toString(36).slice(2),Et="__reactFiber$"+it,gt="__reactProps$"+it,_n="__reactContainer$"+it,gl="__reactEvents$"+it,Oh="__reactListeners$"+it,Ji="__reactHandles$"+it,ou="__reactResources$"+it,Ks="__reactMarker$"+it;function Ws(t){delete t[Et],delete t[gt],delete t[gl],delete t[Oh],delete t[Ji]}function es(t){var n=t[Et];if(n)return n;for(var r=t.parentNode;r;){if(n=r[_n]||r[Et]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(t=_y(t);t!==null;){if(r=t[Et])return r;t=_y(t)}return n}t=r,r=t.parentNode}return null}function Yn(t){if(t=t[Et]||t[_n]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Xn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(a(33))}function Ft(t){var n=t[ou];return n||(n=t[ou]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ft(t){t[Ks]=!0}var ml=new Set,$r={};function xn(t,n){mi(t,n),mi(t+"Capture",n)}function mi(t,n){for($r[t]=n,t=0;t<n.length;t++)ml.add(n[t])}var uu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),cu={},Zs={};function hu(t){return Hs.call(Zs,t)?!0:Hs.call(cu,t)?!1:uu.test(t)?Zs[t]=!0:(cu[t]=!0,!1)}function ts(t,n,r){if(hu(n))if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+r)}}function Qn(t,n,r){if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+r)}}function Ut(t,n,r,l){if(l===null)t.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(n,r,""+l)}}var $s,fu;function _i(t){if($s===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);$s=n&&n[1]||"",fu=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$s+t+fu}var Jr=!1;function ea(t,n){if(!t||Jr)return"";Jr=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(B){var H=B}Reflect.construct(t,[],Q)}else{try{Q.call()}catch(B){H=B}t.call(Q.prototype)}}else{try{throw Error()}catch(B){H=B}(Q=t())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(B){if(B&&H&&typeof B.stack=="string")return[B.stack,H.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=l.DetermineComponentFrameRoot(),_=f[0],S=f[1];if(_&&S){var w=_.split(`
`),j=S.split(`
`);for(c=l=0;l<w.length&&!w[l].includes("DetermineComponentFrameRoot");)l++;for(;c<j.length&&!j[c].includes("DetermineComponentFrameRoot");)c++;if(l===w.length||c===j.length)for(l=w.length-1,c=j.length-1;1<=l&&0<=c&&w[l]!==j[c];)c--;for(;1<=l&&0<=c;l--,c--)if(w[l]!==j[c]){if(l!==1||c!==1)do if(l--,c--,0>c||w[l]!==j[c]){var G=`
`+w[l].replace(" at new "," at ");return t.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",t.displayName)),G}while(1<=l&&0<=c);break}}}finally{Jr=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?_i(r):""}function _l(t){switch(t.tag){case 26:case 27:case 5:return _i(t.type);case 16:return _i("Lazy");case 13:return _i("Suspense");case 19:return _i("SuspenseList");case 0:case 15:return ea(t.type,!1);case 11:return ea(t.type.render,!1);case 1:return ea(t.type,!0);case 31:return _i("Activity");default:return""}}function ta(t){try{var n="";do n+=_l(t),t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function Yt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function yl(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Dh(t){var n=yl(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),l=""+t[n];if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){l=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return l},setValue:function(_){l=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function na(t){t._valueTracker||(t._valueTracker=Dh(t))}function vl(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var r=n.getValue(),l="";return t&&(l=yl(t)?t.checked?"true":"false":t.value),t=l,t!==r?(n.setValue(t),!0):!1}function Js(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var xh=/[\n"\\]/g;function mt(t){return t.replace(xh,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function an(t,n,r,l,c,f,_,S){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Yt(n)):t.value!==""+Yt(n)&&(t.value=""+Yt(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?ns(t,_,Yt(n)):r!=null?ns(t,_,Yt(r)):l!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.name=""+Yt(S):t.removeAttribute("name")}function er(t,n,r,l,c,f,_,S){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||r!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;r=r!=null?""+Yt(r):"",n=n!=null?""+Yt(n):r,S||n===t.value||(t.value=n),t.defaultValue=n}l=l??c,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=S?t.checked:!!l,t.defaultChecked=!!l,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_)}function ns(t,n,r){n==="number"&&Js(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function yi(t,n,r,l){if(t=t.options,n){n={};for(var c=0;c<r.length;c++)n["$"+r[c]]=!0;for(r=0;r<t.length;r++)c=n.hasOwnProperty("$"+t[r].value),t[r].selected!==c&&(t[r].selected=c),c&&l&&(t[r].defaultSelected=!0)}else{for(r=""+Yt(r),n=null,c=0;c<t.length;c++){if(t[c].value===r){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Ge(t,n,r){if(n!=null&&(n=""+Yt(n),n!==t.value&&(t.value=n),r==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=r!=null?""+Yt(r):""}function tr(t,n,r,l){if(n==null){if(l!=null){if(r!=null)throw Error(a(92));if(nt(l)){if(1<l.length)throw Error(a(93));l=l[0]}r=l}r==null&&(r=""),n=r}r=Yt(n),t.defaultValue=r,l=t.textContent,l===r&&l!==""&&l!==null&&(t.value=l)}function yn(t,n){if(n){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=n;return}}t.textContent=n}var nr=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function du(t,n,r){var l=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":l?t.setProperty(n,r):typeof r!="number"||r===0||nr.has(n)?n==="float"?t.cssFloat=r:t[n]=(""+r).trim():t[n]=r+"px"}function Sl(t,n,r){if(n!=null&&typeof n!="object")throw Error(a(62));if(t=t.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var c in n)l=n[c],n.hasOwnProperty(c)&&r[c]!==l&&du(t,c,l)}else for(var f in n)n.hasOwnProperty(f)&&du(t,f,n[f])}function El(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),kh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ia(t){return kh.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var vi=null;function vn(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Si=null,Ei=null;function Tl(t){var n=Yn(t);if(n&&(t=n.stateNode)){var r=t[gt]||null;e:switch(t=n.stateNode,n.type){case"input":if(an(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+mt(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var l=r[n];if(l!==t&&l.form===t.form){var c=l[gt]||null;if(!c)throw Error(a(90));an(l,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<r.length;n++)l=r[n],l.form===t.form&&vl(l)}break e;case"textarea":Ge(t,r.value,r.defaultValue);break e;case"select":n=r.value,n!=null&&yi(t,!!r.multiple,n,!1)}}}var Kn=!1;function pu(t,n,r){if(Kn)return t(n,r);Kn=!0;try{var l=t(n);return l}finally{if(Kn=!1,(Si!==null||Ei!==null)&&(lc(),Si&&(n=Si,t=Ei,Ei=Si=null,Tl(n),t)))for(n=0;n<t.length;n++)Tl(t[n])}}function ir(t,n){var r=t.stateNode;if(r===null)return null;var l=r[gt]||null;if(l===null)return null;r=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(a(231,n,typeof r));return r}var Mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sn=!1;if(Mn)try{var sr={};Object.defineProperty(sr,"passive",{get:function(){Sn=!0}}),window.addEventListener("test",sr,sr),window.removeEventListener("test",sr,sr)}catch{Sn=!1}var Wn=null,is=null,Ti=null;function bl(){if(Ti)return Ti;var t,n=is,r=n.length,l,c="value"in Wn?Wn.value:Wn.textContent,f=c.length;for(t=0;t<r&&n[t]===c[t];t++);var _=r-t;for(l=1;l<=_&&n[r-l]===c[f-l];l++);return Ti=c.slice(t,1<l?1-l:void 0)}function Zn(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function $n(){return!0}function wl(){return!1}function At(t){function n(r,l,c,f,_){this._reactName=r,this._targetInst=c,this.type=l,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var S in t)t.hasOwnProperty(S)&&(r=t[S],this[S]=r?r(f):f[S]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?$n:wl,this.isPropagationStopped=wl,this}return T(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=$n)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=$n)},persist:function(){},isPersistent:$n}),n}var Be={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sa=At(Be),rr=T({},Be,{view:0,detail:0}),gu=At(rr),ra,aa,Jn,ar=T({},rr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ur,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Jn&&(Jn&&t.type==="mousemove"?(ra=t.screenX-Jn.screenX,aa=t.screenY-Jn.screenY):aa=ra=0,Jn=t),ra)},movementY:function(t){return"movementY"in t?t.movementY:aa}}),En=At(ar),mu=T({},ar,{dataTransfer:0}),Lh=At(mu),lr=T({},rr,{relatedTarget:0}),la=At(lr),Cl=T({},Be,{animationName:0,elapsedTime:0,pseudoElement:0}),oa=At(Cl),_u=T({},Be,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ua=At(_u),Uh=T({},Be,{data:0}),Al=At(Uh),or={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rl(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=vu[t])?!!n[t]:!1}function ur(){return Rl}var Su=T({},rr,{key:function(t){if(t.key){var n=or[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Zn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?yu[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ur,charCode:function(t){return t.type==="keypress"?Zn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ca=At(Su),Eu=T({},ar,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nl=At(Eu),bi=T({},rr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ur}),Tu=At(bi),bu=T({},Be,{propertyName:0,elapsedTime:0,pseudoElement:0}),wu=At(bu),Cu=T({},ar,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Zt=At(Cu),Au=T({},Be,{newState:0,oldState:0}),Ru=At(Au),ss=[9,13,27,32],u=Mn&&"CompositionEvent"in window,p=null;Mn&&"documentMode"in document&&(p=document.documentMode);var m=Mn&&"TextEvent"in window&&!p,E=Mn&&(!u||p&&8<p&&11>=p),P=" ",V=!1;function ee(t,n){switch(t){case"keyup":return ss.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function je(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var st=!1;function Ie(t,n){switch(t){case"compositionend":return je(n);case"keypress":return n.which!==32?null:(V=!0,P);case"textInput":return t=n.data,t===P&&V?null:t;default:return null}}function Rt(t,n){if(st)return t==="compositionend"||!u&&ee(t,n)?(t=bl(),Ti=is=Wn=null,st=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return E&&n.locale!=="ko"?null:n.data;default:return null}}var Nt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wi(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Nt[t.type]:n==="textarea"}function $t(t,n,r,l){Si?Ei?Ei.push(l):Ei=[l]:Si=l,n=dc(n,"onChange"),0<n.length&&(r=new sa("onChange","change",null,r,l),t.push({event:r,listeners:n}))}var ei=null,Ci=null;function zS(t){ly(t,0)}function Nu(t){var n=Xn(t);if(vl(n))return t}function Ng(t,n){if(t==="change")return n}var Ig=!1;if(Mn){var Ph;if(Mn){var zh="oninput"in document;if(!zh){var Og=document.createElement("div");Og.setAttribute("oninput","return;"),zh=typeof Og.oninput=="function"}Ph=zh}else Ph=!1;Ig=Ph&&(!document.documentMode||9<document.documentMode)}function Dg(){ei&&(ei.detachEvent("onpropertychange",xg),Ci=ei=null)}function xg(t){if(t.propertyName==="value"&&Nu(Ci)){var n=[];$t(n,Ci,t,vn(t)),pu(zS,n)}}function jS(t,n,r){t==="focusin"?(Dg(),ei=n,Ci=r,ei.attachEvent("onpropertychange",xg)):t==="focusout"&&Dg()}function HS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Nu(Ci)}function BS(t,n){if(t==="click")return Nu(n)}function VS(t,n){if(t==="input"||t==="change")return Nu(n)}function qS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ln=typeof Object.is=="function"?Object.is:qS;function Il(t,n){if(ln(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var r=Object.keys(t),l=Object.keys(n);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var c=r[l];if(!Hs.call(n,c)||!ln(t[c],n[c]))return!1}return!0}function Mg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kg(t,n){var r=Mg(t);t=0;for(var l;r;){if(r.nodeType===3){if(l=t+r.textContent.length,t<=n&&l>=n)return{node:r,offset:n-t};t=l}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Mg(r)}}function Lg(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Lg(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Ug(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Js(t.document);n instanceof t.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)t=n.contentWindow;else break;n=Js(t.document)}return n}function jh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var GS=Mn&&"documentMode"in document&&11>=document.documentMode,ha=null,Hh=null,Ol=null,Bh=!1;function Pg(t,n,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Bh||ha==null||ha!==Js(l)||(l=ha,"selectionStart"in l&&jh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ol&&Il(Ol,l)||(Ol=l,l=dc(Hh,"onSelect"),0<l.length&&(n=new sa("onSelect","select",null,n,r),t.push({event:n,listeners:l}),n.target=ha)))}function cr(t,n){var r={};return r[t.toLowerCase()]=n.toLowerCase(),r["Webkit"+t]="webkit"+n,r["Moz"+t]="moz"+n,r}var fa={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionrun:cr("Transition","TransitionRun"),transitionstart:cr("Transition","TransitionStart"),transitioncancel:cr("Transition","TransitionCancel"),transitionend:cr("Transition","TransitionEnd")},Vh={},zg={};Mn&&(zg=document.createElement("div").style,"AnimationEvent"in window||(delete fa.animationend.animation,delete fa.animationiteration.animation,delete fa.animationstart.animation),"TransitionEvent"in window||delete fa.transitionend.transition);function hr(t){if(Vh[t])return Vh[t];if(!fa[t])return t;var n=fa[t],r;for(r in n)if(n.hasOwnProperty(r)&&r in zg)return Vh[t]=n[r];return t}var jg=hr("animationend"),Hg=hr("animationiteration"),Bg=hr("animationstart"),FS=hr("transitionrun"),YS=hr("transitionstart"),XS=hr("transitioncancel"),Vg=hr("transitionend"),qg=new Map,qh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");qh.push("scrollEnd");function kn(t,n){qg.set(t,n),xn(n,[t])}var Gg=new WeakMap;function Tn(t,n){if(typeof t=="object"&&t!==null){var r=Gg.get(t);return r!==void 0?r:(n={value:t,source:n,stack:ta(n)},Gg.set(t,n),n)}return{value:t,source:n,stack:ta(n)}}var bn=[],da=0,Gh=0;function Iu(){for(var t=da,n=Gh=da=0;n<t;){var r=bn[n];bn[n++]=null;var l=bn[n];bn[n++]=null;var c=bn[n];bn[n++]=null;var f=bn[n];if(bn[n++]=null,l!==null&&c!==null){var _=l.pending;_===null?c.next=c:(c.next=_.next,_.next=c),l.pending=c}f!==0&&Fg(r,c,f)}}function Ou(t,n,r,l){bn[da++]=t,bn[da++]=n,bn[da++]=r,bn[da++]=l,Gh|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Fh(t,n,r,l){return Ou(t,n,r,l),Du(t)}function pa(t,n){return Ou(t,null,null,n),Du(t)}function Fg(t,n,r){t.lanes|=r;var l=t.alternate;l!==null&&(l.lanes|=r);for(var c=!1,f=t.return;f!==null;)f.childLanes|=r,l=f.alternate,l!==null&&(l.childLanes|=r),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Vt(r),t=f.hiddenUpdates,l=t[c],l===null?t[c]=[n]:l.push(n),n.lane=r|536870912),f):null}function Du(t){if(50<to)throw to=0,$f=null,Error(a(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ga={};function QS(t,n,r,l){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function on(t,n,r,l){return new QS(t,n,r,l)}function Yh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ai(t,n){var r=t.alternate;return r===null?(r=on(t.tag,n,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=n,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,n=t.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function Yg(t,n){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,n=r.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function xu(t,n,r,l,c,f){var _=0;if(l=t,typeof t=="function")Yh(t)&&(_=1);else if(typeof t=="string")_=WE(t,r,le.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case N:return t=on(31,r,n,c),t.elementType=N,t.lanes=f,t;case F:return fr(r.children,c,f,n);case Z:_=8,c|=24;break;case te:return t=on(12,r,n,c|2),t.elementType=te,t.lanes=f,t;case _e:return t=on(13,r,n,c),t.elementType=_e,t.lanes=f,t;case Le:return t=on(19,r,n,c),t.elementType=Le,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case re:case pe:_=10;break e;case ue:_=9;break e;case ve:_=11;break e;case M:_=14;break e;case b:_=16,l=null;break e}_=29,r=Error(a(130,t===null?"null":typeof t,"")),l=null}return n=on(_,r,n,c),n.elementType=t,n.type=l,n.lanes=f,n}function fr(t,n,r,l){return t=on(7,t,l,n),t.lanes=r,t}function Xh(t,n,r){return t=on(6,t,null,n),t.lanes=r,t}function Qh(t,n,r){return n=on(4,t.children!==null?t.children:[],t.key,n),n.lanes=r,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var ma=[],_a=0,Mu=null,ku=0,wn=[],Cn=0,dr=null,Ri=1,Ni="";function pr(t,n){ma[_a++]=ku,ma[_a++]=Mu,Mu=t,ku=n}function Xg(t,n,r){wn[Cn++]=Ri,wn[Cn++]=Ni,wn[Cn++]=dr,dr=t;var l=Ri;t=Ni;var c=32-Vt(l)-1;l&=~(1<<c),r+=1;var f=32-Vt(n)+c;if(30<f){var _=c-c%5;f=(l&(1<<_)-1).toString(32),l>>=_,c-=_,Ri=1<<32-Vt(n)+c|r<<c|l,Ni=f+t}else Ri=1<<f|r<<c|l,Ni=t}function Kh(t){t.return!==null&&(pr(t,1),Xg(t,1,0))}function Wh(t){for(;t===Mu;)Mu=ma[--_a],ma[_a]=null,ku=ma[--_a],ma[_a]=null;for(;t===dr;)dr=wn[--Cn],wn[Cn]=null,Ni=wn[--Cn],wn[Cn]=null,Ri=wn[--Cn],wn[Cn]=null}var Xt=null,ut=null,Ue=!1,gr=null,ti=!1,Zh=Error(a(519));function mr(t){var n=Error(a(418,""));throw Ml(Tn(n,t)),Zh}function Qg(t){var n=t.stateNode,r=t.type,l=t.memoizedProps;switch(n[Et]=t,n[gt]=l,r){case"dialog":Ae("cancel",n),Ae("close",n);break;case"iframe":case"object":case"embed":Ae("load",n);break;case"video":case"audio":for(r=0;r<io.length;r++)Ae(io[r],n);break;case"source":Ae("error",n);break;case"img":case"image":case"link":Ae("error",n),Ae("load",n);break;case"details":Ae("toggle",n);break;case"input":Ae("invalid",n),er(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),na(n);break;case"select":Ae("invalid",n);break;case"textarea":Ae("invalid",n),tr(n,l.value,l.defaultValue,l.children),na(n)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||l.suppressHydrationWarning===!0||hy(n.textContent,r)?(l.popover!=null&&(Ae("beforetoggle",n),Ae("toggle",n)),l.onScroll!=null&&Ae("scroll",n),l.onScrollEnd!=null&&Ae("scrollend",n),l.onClick!=null&&(n.onclick=pc),n=!0):n=!1,n||mr(t)}function Kg(t){for(Xt=t.return;Xt;)switch(Xt.tag){case 5:case 13:ti=!1;return;case 27:case 3:ti=!0;return;default:Xt=Xt.return}}function Dl(t){if(t!==Xt)return!1;if(!Ue)return Kg(t),Ue=!0,!1;var n=t.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||pd(t.type,t.memoizedProps)),r=!r),r&&ut&&mr(t),Kg(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(r=t.data,r==="/$"){if(n===0){ut=Un(t.nextSibling);break e}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++;t=t.nextSibling}ut=null}}else n===27?(n=ut,Ss(t.type)?(t=yd,yd=null,ut=t):ut=n):ut=Xt?Un(t.stateNode.nextSibling):null;return!0}function xl(){ut=Xt=null,Ue=!1}function Wg(){var t=gr;return t!==null&&(tn===null?tn=t:tn.push.apply(tn,t),gr=null),t}function Ml(t){gr===null?gr=[t]:gr.push(t)}var $h=W(null),_r=null,Ii=null;function rs(t,n,r){$($h,n._currentValue),n._currentValue=r}function Oi(t){t._currentValue=$h.current,ne($h)}function Jh(t,n,r){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===r)break;t=t.return}}function ef(t,n,r,l){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var _=c.child;f=f.firstContext;e:for(;f!==null;){var S=f;f=c;for(var w=0;w<n.length;w++)if(S.context===n[w]){f.lanes|=r,S=f.alternate,S!==null&&(S.lanes|=r),Jh(f.return,r,t),l||(_=null);break e}f=S.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(a(341));_.lanes|=r,f=_.alternate,f!==null&&(f.lanes|=r),Jh(_,r,t),_=null}else _=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===t){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function kl(t,n,r,l){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(a(387));if(_=_.memoizedProps,_!==null){var S=c.type;ln(c.pendingProps.value,_.value)||(t!==null?t.push(S):t=[S])}}else if(c===Ct.current){if(_=c.alternate,_===null)throw Error(a(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(uo):t=[uo])}c=c.return}t!==null&&ef(n,t,r,l),n.flags|=262144}function Lu(t){for(t=t.firstContext;t!==null;){if(!ln(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function yr(t){_r=t,Ii=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function qt(t){return Zg(_r,t)}function Uu(t,n){return _r===null&&yr(t),Zg(t,n)}function Zg(t,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},Ii===null){if(t===null)throw Error(a(308));Ii=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ii=Ii.next=n;return r}var KS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(r,l){t.push(l)}};this.abort=function(){n.aborted=!0,t.forEach(function(r){return r()})}},WS=s.unstable_scheduleCallback,ZS=s.unstable_NormalPriority,Tt={$$typeof:pe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function tf(){return{controller:new KS,data:new Map,refCount:0}}function Ll(t){t.refCount--,t.refCount===0&&WS(ZS,function(){t.controller.abort()})}var Ul=null,nf=0,ya=0,va=null;function $S(t,n){if(Ul===null){var r=Ul=[];nf=0,ya=rd(),va={status:"pending",value:void 0,then:function(l){r.push(l)}}}return nf++,n.then($g,$g),n}function $g(){if(--nf===0&&Ul!==null){va!==null&&(va.status="fulfilled");var t=Ul;Ul=null,ya=0,va=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function JS(t,n){var r=[],l={status:"pending",value:null,reason:null,then:function(c){r.push(c)}};return t.then(function(){l.status="fulfilled",l.value=n;for(var c=0;c<r.length;c++)(0,r[c])(n)},function(c){for(l.status="rejected",l.reason=c,c=0;c<r.length;c++)(0,r[c])(void 0)}),l}var Jg=D.S;D.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&$S(t,n),Jg!==null&&Jg(t,n)};var vr=W(null);function sf(){var t=vr.current;return t!==null?t:Je.pooledCache}function Pu(t,n){n===null?$(vr,vr.current):$(vr,n.pool)}function em(){var t=sf();return t===null?null:{parent:Tt._currentValue,pool:t}}var Pl=Error(a(460)),tm=Error(a(474)),zu=Error(a(542)),rf={then:function(){}};function nm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ju(){}function im(t,n,r){switch(r=t[r],r===void 0?t.push(n):r!==n&&(n.then(ju,ju),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,rm(t),t;default:if(typeof n.status=="string")n.then(ju,ju);else{if(t=Je,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=n,t.status="pending",t.then(function(l){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=l}},function(l){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,rm(t),t}throw zl=n,Pl}}var zl=null;function sm(){if(zl===null)throw Error(a(459));var t=zl;return zl=null,t}function rm(t){if(t===Pl||t===zu)throw Error(a(483))}var as=!1;function af(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ls(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function os(t,n,r){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ve&2)!==0){var c=l.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),l.pending=n,n=Du(t),Fg(t,null,r),n}return Ou(t,l,n,r),Du(t)}function jl(t,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var l=n.lanes;l&=t.pendingLanes,r|=l,n.lanes=r,pl(t,r)}}function of(t,n){var r=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var c=null,f=null;if(r=r.firstBaseUpdate,r!==null){do{var _={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};f===null?c=f=_:f=f.next=_,r=r.next}while(r!==null);f===null?c=f=n:f=f.next=n}else c=f=n;r={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:l.shared,callbacks:l.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=n:t.next=n,r.lastBaseUpdate=n}var uf=!1;function Hl(){if(uf){var t=va;if(t!==null)throw t}}function Bl(t,n,r,l){uf=!1;var c=t.updateQueue;as=!1;var f=c.firstBaseUpdate,_=c.lastBaseUpdate,S=c.shared.pending;if(S!==null){c.shared.pending=null;var w=S,j=w.next;w.next=null,_===null?f=j:_.next=j,_=w;var G=t.alternate;G!==null&&(G=G.updateQueue,S=G.lastBaseUpdate,S!==_&&(S===null?G.firstBaseUpdate=j:S.next=j,G.lastBaseUpdate=w))}if(f!==null){var Q=c.baseState;_=0,G=j=w=null,S=f;do{var H=S.lane&-536870913,B=H!==S.lane;if(B?(Oe&H)===H:(l&H)===H){H!==0&&H===ya&&(uf=!0),G!==null&&(G=G.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var fe=t,oe=S;H=n;var Xe=r;switch(oe.tag){case 1:if(fe=oe.payload,typeof fe=="function"){Q=fe.call(Xe,Q,H);break e}Q=fe;break e;case 3:fe.flags=fe.flags&-65537|128;case 0:if(fe=oe.payload,H=typeof fe=="function"?fe.call(Xe,Q,H):fe,H==null)break e;Q=T({},Q,H);break e;case 2:as=!0}}H=S.callback,H!==null&&(t.flags|=64,B&&(t.flags|=8192),B=c.callbacks,B===null?c.callbacks=[H]:B.push(H))}else B={lane:H,tag:S.tag,payload:S.payload,callback:S.callback,next:null},G===null?(j=G=B,w=Q):G=G.next=B,_|=H;if(S=S.next,S===null){if(S=c.shared.pending,S===null)break;B=S,S=B.next,B.next=null,c.lastBaseUpdate=B,c.shared.pending=null}}while(!0);G===null&&(w=Q),c.baseState=w,c.firstBaseUpdate=j,c.lastBaseUpdate=G,f===null&&(c.shared.lanes=0),ms|=_,t.lanes=_,t.memoizedState=Q}}function am(t,n){if(typeof t!="function")throw Error(a(191,t));t.call(n)}function lm(t,n){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)am(r[t],n)}var Sa=W(null),Hu=W(0);function om(t,n){t=Pi,$(Hu,t),$(Sa,n),Pi=t|n.baseLanes}function cf(){$(Hu,Pi),$(Sa,Sa.current)}function hf(){Pi=Hu.current,ne(Sa),ne(Hu)}var us=0,Se=null,Fe=null,_t=null,Bu=!1,Ea=!1,Sr=!1,Vu=0,Vl=0,Ta=null,eE=0;function dt(){throw Error(a(321))}function ff(t,n){if(n===null)return!1;for(var r=0;r<n.length&&r<t.length;r++)if(!ln(t[r],n[r]))return!1;return!0}function df(t,n,r,l,c,f){return us=f,Se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,D.H=t===null||t.memoizedState===null?Fm:Ym,Sr=!1,f=r(l,c),Sr=!1,Ea&&(f=cm(n,r,l,c)),um(t),f}function um(t){D.H=Qu;var n=Fe!==null&&Fe.next!==null;if(us=0,_t=Fe=Se=null,Bu=!1,Vl=0,Ta=null,n)throw Error(a(300));t===null||It||(t=t.dependencies,t!==null&&Lu(t)&&(It=!0))}function cm(t,n,r,l){Se=t;var c=0;do{if(Ea&&(Ta=null),Vl=0,Ea=!1,25<=c)throw Error(a(301));if(c+=1,_t=Fe=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}D.H=lE,f=n(r,l)}while(Ea);return f}function tE(){var t=D.H,n=t.useState()[0];return n=typeof n.then=="function"?ql(n):n,t=t.useState()[0],(Fe!==null?Fe.memoizedState:null)!==t&&(Se.flags|=1024),n}function pf(){var t=Vu!==0;return Vu=0,t}function gf(t,n,r){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~r}function mf(t){if(Bu){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Bu=!1}us=0,_t=Fe=Se=null,Ea=!1,Vl=Vu=0,Ta=null}function Jt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _t===null?Se.memoizedState=_t=t:_t=_t.next=t,_t}function yt(){if(Fe===null){var t=Se.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var n=_t===null?Se.memoizedState:_t.next;if(n!==null)_t=n,Fe=t;else{if(t===null)throw Se.alternate===null?Error(a(467)):Error(a(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},_t===null?Se.memoizedState=_t=t:_t=_t.next=t}return _t}function _f(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ql(t){var n=Vl;return Vl+=1,Ta===null&&(Ta=[]),t=im(Ta,t,n),n=Se,(_t===null?n.memoizedState:_t.next)===null&&(n=n.alternate,D.H=n===null||n.memoizedState===null?Fm:Ym),t}function qu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ql(t);if(t.$$typeof===pe)return qt(t)}throw Error(a(438,String(t)))}function yf(t){var n=null,r=Se.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var l=Se.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=_f(),Se.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(t),l=0;l<t;l++)r[l]=x;return n.index++,r}function Di(t,n){return typeof n=="function"?n(t):n}function Gu(t){var n=yt();return vf(n,Fe,t)}function vf(t,n,r){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=r;var c=t.baseQueue,f=l.pending;if(f!==null){if(c!==null){var _=c.next;c.next=f.next,f.next=_}n.baseQueue=c=f,l.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var S=_=null,w=null,j=n,G=!1;do{var Q=j.lane&-536870913;if(Q!==j.lane?(Oe&Q)===Q:(us&Q)===Q){var H=j.revertLane;if(H===0)w!==null&&(w=w.next={lane:0,revertLane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),Q===ya&&(G=!0);else if((us&H)===H){j=j.next,H===ya&&(G=!0);continue}else Q={lane:0,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},w===null?(S=w=Q,_=f):w=w.next=Q,Se.lanes|=H,ms|=H;Q=j.action,Sr&&r(f,Q),f=j.hasEagerState?j.eagerState:r(f,Q)}else H={lane:Q,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},w===null?(S=w=H,_=f):w=w.next=H,Se.lanes|=Q,ms|=Q;j=j.next}while(j!==null&&j!==n);if(w===null?_=f:w.next=S,!ln(f,t.memoizedState)&&(It=!0,G&&(r=va,r!==null)))throw r;t.memoizedState=f,t.baseState=_,t.baseQueue=w,l.lastRenderedState=f}return c===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Sf(t){var n=yt(),r=n.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=t;var l=r.dispatch,c=r.pending,f=n.memoizedState;if(c!==null){r.pending=null;var _=c=c.next;do f=t(f,_.action),_=_.next;while(_!==c);ln(f,n.memoizedState)||(It=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),r.lastRenderedState=f}return[f,l]}function hm(t,n,r){var l=Se,c=yt(),f=Ue;if(f){if(r===void 0)throw Error(a(407));r=r()}else r=n();var _=!ln((Fe||c).memoizedState,r);_&&(c.memoizedState=r,It=!0),c=c.queue;var S=pm.bind(null,l,c,t);if(Gl(2048,8,S,[t]),c.getSnapshot!==n||_||_t!==null&&_t.memoizedState.tag&1){if(l.flags|=2048,ba(9,Fu(),dm.bind(null,l,c,r,n),null),Je===null)throw Error(a(349));f||(us&124)!==0||fm(l,n,r)}return r}function fm(t,n,r){t.flags|=16384,t={getSnapshot:n,value:r},n=Se.updateQueue,n===null?(n=_f(),Se.updateQueue=n,n.stores=[t]):(r=n.stores,r===null?n.stores=[t]:r.push(t))}function dm(t,n,r,l){n.value=r,n.getSnapshot=l,gm(n)&&mm(t)}function pm(t,n,r){return r(function(){gm(n)&&mm(t)})}function gm(t){var n=t.getSnapshot;t=t.value;try{var r=n();return!ln(t,r)}catch{return!0}}function mm(t){var n=pa(t,2);n!==null&&dn(n,t,2)}function Ef(t){var n=Jt();if(typeof t=="function"){var r=t;if(t=r(),Sr){rn(!0);try{r()}finally{rn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Di,lastRenderedState:t},n}function _m(t,n,r,l){return t.baseState=r,vf(t,Fe,typeof l=="function"?l:Di)}function nE(t,n,r,l,c){if(Xu(t))throw Error(a(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};D.T!==null?r(!0):f.isTransition=!1,l(f),r=n.pending,r===null?(f.next=n.pending=f,ym(n,f)):(f.next=r.next,n.pending=r.next=f)}}function ym(t,n){var r=n.action,l=n.payload,c=t.state;if(n.isTransition){var f=D.T,_={};D.T=_;try{var S=r(c,l),w=D.S;w!==null&&w(_,S),vm(t,n,S)}catch(j){Tf(t,n,j)}finally{D.T=f}}else try{f=r(c,l),vm(t,n,f)}catch(j){Tf(t,n,j)}}function vm(t,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){Sm(t,n,l)},function(l){return Tf(t,n,l)}):Sm(t,n,r)}function Sm(t,n,r){n.status="fulfilled",n.value=r,Em(n),t.state=r,n=t.pending,n!==null&&(r=n.next,r===n?t.pending=null:(r=r.next,n.next=r,ym(t,r)))}function Tf(t,n,r){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=r,Em(n),n=n.next;while(n!==l)}t.action=null}function Em(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Tm(t,n){return n}function bm(t,n){if(Ue){var r=Je.formState;if(r!==null){e:{var l=Se;if(Ue){if(ut){t:{for(var c=ut,f=ti;c.nodeType!==8;){if(!f){c=null;break t}if(c=Un(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){ut=Un(c.nextSibling),l=c.data==="F!";break e}}mr(l)}l=!1}l&&(n=r[0])}}return r=Jt(),r.memoizedState=r.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tm,lastRenderedState:n},r.queue=l,r=Vm.bind(null,Se,l),l.dispatch=r,l=Ef(!1),f=Rf.bind(null,Se,!1,l.queue),l=Jt(),c={state:n,dispatch:null,action:t,pending:null},l.queue=c,r=nE.bind(null,Se,c,f,r),c.dispatch=r,l.memoizedState=t,[n,r,!1]}function wm(t){var n=yt();return Cm(n,Fe,t)}function Cm(t,n,r){if(n=vf(t,n,Tm)[0],t=Gu(Di)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=ql(n)}catch(_){throw _===Pl?zu:_}else l=n;n=yt();var c=n.queue,f=c.dispatch;return r!==n.memoizedState&&(Se.flags|=2048,ba(9,Fu(),iE.bind(null,c,r),null)),[l,f,t]}function iE(t,n){t.action=n}function Am(t){var n=yt(),r=Fe;if(r!==null)return Cm(n,r,t);yt(),n=n.memoizedState,r=yt();var l=r.queue.dispatch;return r.memoizedState=t,[n,l,!1]}function ba(t,n,r,l){return t={tag:t,create:r,deps:l,inst:n,next:null},n=Se.updateQueue,n===null&&(n=_f(),Se.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=t.next=t:(l=r.next,r.next=t,t.next=l,n.lastEffect=t),t}function Fu(){return{destroy:void 0,resource:void 0}}function Rm(){return yt().memoizedState}function Yu(t,n,r,l){var c=Jt();l=l===void 0?null:l,Se.flags|=t,c.memoizedState=ba(1|n,Fu(),r,l)}function Gl(t,n,r,l){var c=yt();l=l===void 0?null:l;var f=c.memoizedState.inst;Fe!==null&&l!==null&&ff(l,Fe.memoizedState.deps)?c.memoizedState=ba(n,f,r,l):(Se.flags|=t,c.memoizedState=ba(1|n,f,r,l))}function Nm(t,n){Yu(8390656,8,t,n)}function Im(t,n){Gl(2048,8,t,n)}function Om(t,n){return Gl(4,2,t,n)}function Dm(t,n){return Gl(4,4,t,n)}function xm(t,n){if(typeof n=="function"){t=t();var r=n(t);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Mm(t,n,r){r=r!=null?r.concat([t]):null,Gl(4,4,xm.bind(null,n,t),r)}function bf(){}function km(t,n){var r=yt();n=n===void 0?null:n;var l=r.memoizedState;return n!==null&&ff(n,l[1])?l[0]:(r.memoizedState=[t,n],t)}function Lm(t,n){var r=yt();n=n===void 0?null:n;var l=r.memoizedState;if(n!==null&&ff(n,l[1]))return l[0];if(l=t(),Sr){rn(!0);try{t()}finally{rn(!1)}}return r.memoizedState=[l,n],l}function wf(t,n,r){return r===void 0||(us&1073741824)!==0?t.memoizedState=n:(t.memoizedState=r,t=z_(),Se.lanes|=t,ms|=t,r)}function Um(t,n,r,l){return ln(r,n)?r:Sa.current!==null?(t=wf(t,r,l),ln(t,n)||(It=!0),t):(us&42)===0?(It=!0,t.memoizedState=r):(t=z_(),Se.lanes|=t,ms|=t,n)}function Pm(t,n,r,l,c){var f=K.p;K.p=f!==0&&8>f?f:8;var _=D.T,S={};D.T=S,Rf(t,!1,n,r);try{var w=c(),j=D.S;if(j!==null&&j(S,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var G=JS(w,l);Fl(t,n,G,fn(t))}else Fl(t,n,l,fn(t))}catch(Q){Fl(t,n,{then:function(){},status:"rejected",reason:Q},fn())}finally{K.p=f,D.T=_}}function sE(){}function Cf(t,n,r,l){if(t.tag!==5)throw Error(a(476));var c=zm(t).queue;Pm(t,c,n,ie,r===null?sE:function(){return jm(t),r(l)})}function zm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Di,lastRenderedState:ie},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Di,lastRenderedState:r},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function jm(t){var n=zm(t).next.queue;Fl(t,n,{},fn())}function Af(){return qt(uo)}function Hm(){return yt().memoizedState}function Bm(){return yt().memoizedState}function rE(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var r=fn();t=ls(r);var l=os(n,t,r);l!==null&&(dn(l,n,r),jl(l,n,r)),n={cache:tf()},t.payload=n;return}n=n.return}}function aE(t,n,r){var l=fn();r={lane:l,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},Xu(t)?qm(n,r):(r=Fh(t,n,r,l),r!==null&&(dn(r,t,l),Gm(r,n,l)))}function Vm(t,n,r){var l=fn();Fl(t,n,r,l)}function Fl(t,n,r,l){var c={lane:l,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(Xu(t))qm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,S=f(_,r);if(c.hasEagerState=!0,c.eagerState=S,ln(S,_))return Ou(t,n,c,0),Je===null&&Iu(),!1}catch{}finally{}if(r=Fh(t,n,c,l),r!==null)return dn(r,t,l),Gm(r,n,l),!0}return!1}function Rf(t,n,r,l){if(l={lane:2,revertLane:rd(),action:l,hasEagerState:!1,eagerState:null,next:null},Xu(t)){if(n)throw Error(a(479))}else n=Fh(t,r,l,2),n!==null&&dn(n,t,2)}function Xu(t){var n=t.alternate;return t===Se||n!==null&&n===Se}function qm(t,n){Ea=Bu=!0;var r=t.pending;r===null?n.next=n:(n.next=r.next,r.next=n),t.pending=n}function Gm(t,n,r){if((r&4194048)!==0){var l=n.lanes;l&=t.pendingLanes,r|=l,n.lanes=r,pl(t,r)}}var Qu={readContext:qt,use:qu,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useLayoutEffect:dt,useInsertionEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useSyncExternalStore:dt,useId:dt,useHostTransitionStatus:dt,useFormState:dt,useActionState:dt,useOptimistic:dt,useMemoCache:dt,useCacheRefresh:dt},Fm={readContext:qt,use:qu,useCallback:function(t,n){return Jt().memoizedState=[t,n===void 0?null:n],t},useContext:qt,useEffect:Nm,useImperativeHandle:function(t,n,r){r=r!=null?r.concat([t]):null,Yu(4194308,4,xm.bind(null,n,t),r)},useLayoutEffect:function(t,n){return Yu(4194308,4,t,n)},useInsertionEffect:function(t,n){Yu(4,2,t,n)},useMemo:function(t,n){var r=Jt();n=n===void 0?null:n;var l=t();if(Sr){rn(!0);try{t()}finally{rn(!1)}}return r.memoizedState=[l,n],l},useReducer:function(t,n,r){var l=Jt();if(r!==void 0){var c=r(n);if(Sr){rn(!0);try{r(n)}finally{rn(!1)}}}else c=n;return l.memoizedState=l.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},l.queue=t,t=t.dispatch=aE.bind(null,Se,t),[l.memoizedState,t]},useRef:function(t){var n=Jt();return t={current:t},n.memoizedState=t},useState:function(t){t=Ef(t);var n=t.queue,r=Vm.bind(null,Se,n);return n.dispatch=r,[t.memoizedState,r]},useDebugValue:bf,useDeferredValue:function(t,n){var r=Jt();return wf(r,t,n)},useTransition:function(){var t=Ef(!1);return t=Pm.bind(null,Se,t.queue,!0,!1),Jt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,r){var l=Se,c=Jt();if(Ue){if(r===void 0)throw Error(a(407));r=r()}else{if(r=n(),Je===null)throw Error(a(349));(Oe&124)!==0||fm(l,n,r)}c.memoizedState=r;var f={value:r,getSnapshot:n};return c.queue=f,Nm(pm.bind(null,l,f,t),[t]),l.flags|=2048,ba(9,Fu(),dm.bind(null,l,f,r,n),null),r},useId:function(){var t=Jt(),n=Je.identifierPrefix;if(Ue){var r=Ni,l=Ri;r=(l&~(1<<32-Vt(l)-1)).toString(32)+r,n="«"+n+"R"+r,r=Vu++,0<r&&(n+="H"+r.toString(32)),n+="»"}else r=eE++,n="«"+n+"r"+r.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:Af,useFormState:bm,useActionState:bm,useOptimistic:function(t){var n=Jt();n.memoizedState=n.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=Rf.bind(null,Se,!0,r),r.dispatch=n,[t,n]},useMemoCache:yf,useCacheRefresh:function(){return Jt().memoizedState=rE.bind(null,Se)}},Ym={readContext:qt,use:qu,useCallback:km,useContext:qt,useEffect:Im,useImperativeHandle:Mm,useInsertionEffect:Om,useLayoutEffect:Dm,useMemo:Lm,useReducer:Gu,useRef:Rm,useState:function(){return Gu(Di)},useDebugValue:bf,useDeferredValue:function(t,n){var r=yt();return Um(r,Fe.memoizedState,t,n)},useTransition:function(){var t=Gu(Di)[0],n=yt().memoizedState;return[typeof t=="boolean"?t:ql(t),n]},useSyncExternalStore:hm,useId:Hm,useHostTransitionStatus:Af,useFormState:wm,useActionState:wm,useOptimistic:function(t,n){var r=yt();return _m(r,Fe,t,n)},useMemoCache:yf,useCacheRefresh:Bm},lE={readContext:qt,use:qu,useCallback:km,useContext:qt,useEffect:Im,useImperativeHandle:Mm,useInsertionEffect:Om,useLayoutEffect:Dm,useMemo:Lm,useReducer:Sf,useRef:Rm,useState:function(){return Sf(Di)},useDebugValue:bf,useDeferredValue:function(t,n){var r=yt();return Fe===null?wf(r,t,n):Um(r,Fe.memoizedState,t,n)},useTransition:function(){var t=Sf(Di)[0],n=yt().memoizedState;return[typeof t=="boolean"?t:ql(t),n]},useSyncExternalStore:hm,useId:Hm,useHostTransitionStatus:Af,useFormState:Am,useActionState:Am,useOptimistic:function(t,n){var r=yt();return Fe!==null?_m(r,Fe,t,n):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:yf,useCacheRefresh:Bm},wa=null,Yl=0;function Ku(t){var n=Yl;return Yl+=1,wa===null&&(wa=[]),im(wa,t,n)}function Xl(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Wu(t,n){throw n.$$typeof===A?Error(a(525)):(t=Object.prototype.toString.call(n),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Xm(t){var n=t._init;return n(t._payload)}function Qm(t){function n(L,O){if(t){var z=L.deletions;z===null?(L.deletions=[O],L.flags|=16):z.push(O)}}function r(L,O){if(!t)return null;for(;O!==null;)n(L,O),O=O.sibling;return null}function l(L){for(var O=new Map;L!==null;)L.key!==null?O.set(L.key,L):O.set(L.index,L),L=L.sibling;return O}function c(L,O){return L=Ai(L,O),L.index=0,L.sibling=null,L}function f(L,O,z){return L.index=z,t?(z=L.alternate,z!==null?(z=z.index,z<O?(L.flags|=67108866,O):z):(L.flags|=67108866,O)):(L.flags|=1048576,O)}function _(L){return t&&L.alternate===null&&(L.flags|=67108866),L}function S(L,O,z,Y){return O===null||O.tag!==6?(O=Xh(z,L.mode,Y),O.return=L,O):(O=c(O,z),O.return=L,O)}function w(L,O,z,Y){var se=z.type;return se===F?G(L,O,z.props.children,Y,z.key):O!==null&&(O.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===b&&Xm(se)===O.type)?(O=c(O,z.props),Xl(O,z),O.return=L,O):(O=xu(z.type,z.key,z.props,null,L.mode,Y),Xl(O,z),O.return=L,O)}function j(L,O,z,Y){return O===null||O.tag!==4||O.stateNode.containerInfo!==z.containerInfo||O.stateNode.implementation!==z.implementation?(O=Qh(z,L.mode,Y),O.return=L,O):(O=c(O,z.children||[]),O.return=L,O)}function G(L,O,z,Y,se){return O===null||O.tag!==7?(O=fr(z,L.mode,Y,se),O.return=L,O):(O=c(O,z),O.return=L,O)}function Q(L,O,z){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=Xh(""+O,L.mode,z),O.return=L,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case C:return z=xu(O.type,O.key,O.props,null,L.mode,z),Xl(z,O),z.return=L,z;case X:return O=Qh(O,L.mode,z),O.return=L,O;case b:var Y=O._init;return O=Y(O._payload),Q(L,O,z)}if(nt(O)||U(O))return O=fr(O,L.mode,z,null),O.return=L,O;if(typeof O.then=="function")return Q(L,Ku(O),z);if(O.$$typeof===pe)return Q(L,Uu(L,O),z);Wu(L,O)}return null}function H(L,O,z,Y){var se=O!==null?O.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return se!==null?null:S(L,O,""+z,Y);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case C:return z.key===se?w(L,O,z,Y):null;case X:return z.key===se?j(L,O,z,Y):null;case b:return se=z._init,z=se(z._payload),H(L,O,z,Y)}if(nt(z)||U(z))return se!==null?null:G(L,O,z,Y,null);if(typeof z.then=="function")return H(L,O,Ku(z),Y);if(z.$$typeof===pe)return H(L,O,Uu(L,z),Y);Wu(L,z)}return null}function B(L,O,z,Y,se){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return L=L.get(z)||null,S(O,L,""+Y,se);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case C:return L=L.get(Y.key===null?z:Y.key)||null,w(O,L,Y,se);case X:return L=L.get(Y.key===null?z:Y.key)||null,j(O,L,Y,se);case b:var Te=Y._init;return Y=Te(Y._payload),B(L,O,z,Y,se)}if(nt(Y)||U(Y))return L=L.get(z)||null,G(O,L,Y,se,null);if(typeof Y.then=="function")return B(L,O,z,Ku(Y),se);if(Y.$$typeof===pe)return B(L,O,z,Uu(O,Y),se);Wu(O,Y)}return null}function fe(L,O,z,Y){for(var se=null,Te=null,ae=O,ce=O=0,Dt=null;ae!==null&&ce<z.length;ce++){ae.index>ce?(Dt=ae,ae=null):Dt=ae.sibling;var ke=H(L,ae,z[ce],Y);if(ke===null){ae===null&&(ae=Dt);break}t&&ae&&ke.alternate===null&&n(L,ae),O=f(ke,O,ce),Te===null?se=ke:Te.sibling=ke,Te=ke,ae=Dt}if(ce===z.length)return r(L,ae),Ue&&pr(L,ce),se;if(ae===null){for(;ce<z.length;ce++)ae=Q(L,z[ce],Y),ae!==null&&(O=f(ae,O,ce),Te===null?se=ae:Te.sibling=ae,Te=ae);return Ue&&pr(L,ce),se}for(ae=l(ae);ce<z.length;ce++)Dt=B(ae,L,ce,z[ce],Y),Dt!==null&&(t&&Dt.alternate!==null&&ae.delete(Dt.key===null?ce:Dt.key),O=f(Dt,O,ce),Te===null?se=Dt:Te.sibling=Dt,Te=Dt);return t&&ae.forEach(function(Cs){return n(L,Cs)}),Ue&&pr(L,ce),se}function oe(L,O,z,Y){if(z==null)throw Error(a(151));for(var se=null,Te=null,ae=O,ce=O=0,Dt=null,ke=z.next();ae!==null&&!ke.done;ce++,ke=z.next()){ae.index>ce?(Dt=ae,ae=null):Dt=ae.sibling;var Cs=H(L,ae,ke.value,Y);if(Cs===null){ae===null&&(ae=Dt);break}t&&ae&&Cs.alternate===null&&n(L,ae),O=f(Cs,O,ce),Te===null?se=Cs:Te.sibling=Cs,Te=Cs,ae=Dt}if(ke.done)return r(L,ae),Ue&&pr(L,ce),se;if(ae===null){for(;!ke.done;ce++,ke=z.next())ke=Q(L,ke.value,Y),ke!==null&&(O=f(ke,O,ce),Te===null?se=ke:Te.sibling=ke,Te=ke);return Ue&&pr(L,ce),se}for(ae=l(ae);!ke.done;ce++,ke=z.next())ke=B(ae,L,ce,ke.value,Y),ke!==null&&(t&&ke.alternate!==null&&ae.delete(ke.key===null?ce:ke.key),O=f(ke,O,ce),Te===null?se=ke:Te.sibling=ke,Te=ke);return t&&ae.forEach(function(oT){return n(L,oT)}),Ue&&pr(L,ce),se}function Xe(L,O,z,Y){if(typeof z=="object"&&z!==null&&z.type===F&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case C:e:{for(var se=z.key;O!==null;){if(O.key===se){if(se=z.type,se===F){if(O.tag===7){r(L,O.sibling),Y=c(O,z.props.children),Y.return=L,L=Y;break e}}else if(O.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===b&&Xm(se)===O.type){r(L,O.sibling),Y=c(O,z.props),Xl(Y,z),Y.return=L,L=Y;break e}r(L,O);break}else n(L,O);O=O.sibling}z.type===F?(Y=fr(z.props.children,L.mode,Y,z.key),Y.return=L,L=Y):(Y=xu(z.type,z.key,z.props,null,L.mode,Y),Xl(Y,z),Y.return=L,L=Y)}return _(L);case X:e:{for(se=z.key;O!==null;){if(O.key===se)if(O.tag===4&&O.stateNode.containerInfo===z.containerInfo&&O.stateNode.implementation===z.implementation){r(L,O.sibling),Y=c(O,z.children||[]),Y.return=L,L=Y;break e}else{r(L,O);break}else n(L,O);O=O.sibling}Y=Qh(z,L.mode,Y),Y.return=L,L=Y}return _(L);case b:return se=z._init,z=se(z._payload),Xe(L,O,z,Y)}if(nt(z))return fe(L,O,z,Y);if(U(z)){if(se=U(z),typeof se!="function")throw Error(a(150));return z=se.call(z),oe(L,O,z,Y)}if(typeof z.then=="function")return Xe(L,O,Ku(z),Y);if(z.$$typeof===pe)return Xe(L,O,Uu(L,z),Y);Wu(L,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,O!==null&&O.tag===6?(r(L,O.sibling),Y=c(O,z),Y.return=L,L=Y):(r(L,O),Y=Xh(z,L.mode,Y),Y.return=L,L=Y),_(L)):r(L,O)}return function(L,O,z,Y){try{Yl=0;var se=Xe(L,O,z,Y);return wa=null,se}catch(ae){if(ae===Pl||ae===zu)throw ae;var Te=on(29,ae,null,L.mode);return Te.lanes=Y,Te.return=L,Te}finally{}}}var Ca=Qm(!0),Km=Qm(!1),An=W(null),ni=null;function cs(t){var n=t.alternate;$(bt,bt.current&1),$(An,t),ni===null&&(n===null||Sa.current!==null||n.memoizedState!==null)&&(ni=t)}function Wm(t){if(t.tag===22){if($(bt,bt.current),$(An,t),ni===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(ni=t)}}else hs()}function hs(){$(bt,bt.current),$(An,An.current)}function xi(t){ne(An),ni===t&&(ni=null),ne(bt)}var bt=W(0);function Zu(t){for(var n=t;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||_d(r)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Nf(t,n,r,l){n=t.memoizedState,r=r(l,n),r=r==null?n:T({},n,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var If={enqueueSetState:function(t,n,r){t=t._reactInternals;var l=fn(),c=ls(l);c.payload=n,r!=null&&(c.callback=r),n=os(t,c,l),n!==null&&(dn(n,t,l),jl(n,t,l))},enqueueReplaceState:function(t,n,r){t=t._reactInternals;var l=fn(),c=ls(l);c.tag=1,c.payload=n,r!=null&&(c.callback=r),n=os(t,c,l),n!==null&&(dn(n,t,l),jl(n,t,l))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var r=fn(),l=ls(r);l.tag=2,n!=null&&(l.callback=n),n=os(t,l,r),n!==null&&(dn(n,t,r),jl(n,t,r))}};function Zm(t,n,r,l,c,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,f,_):n.prototype&&n.prototype.isPureReactComponent?!Il(r,l)||!Il(c,f):!0}function $m(t,n,r,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,l),n.state!==t&&If.enqueueReplaceState(n,n.state,null)}function Er(t,n){var r=n;if("ref"in n){r={};for(var l in n)l!=="ref"&&(r[l]=n[l])}if(t=t.defaultProps){r===n&&(r=T({},r));for(var c in t)r[c]===void 0&&(r[c]=t[c])}return r}var $u=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Jm(t){$u(t)}function e_(t){console.error(t)}function t_(t){$u(t)}function Ju(t,n){try{var r=t.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function n_(t,n,r){try{var l=t.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Of(t,n,r){return r=ls(r),r.tag=3,r.payload={element:null},r.callback=function(){Ju(t,n)},r}function i_(t){return t=ls(t),t.tag=3,t}function s_(t,n,r,l){var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var f=l.value;t.payload=function(){return c(f)},t.callback=function(){n_(n,r,l)}}var _=r.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){n_(n,r,l),typeof c!="function"&&(_s===null?_s=new Set([this]):_s.add(this));var S=l.stack;this.componentDidCatch(l.value,{componentStack:S!==null?S:""})})}function oE(t,n,r,l,c){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=r.alternate,n!==null&&kl(n,r,c,!0),r=An.current,r!==null){switch(r.tag){case 13:return ni===null?ed():r.alternate===null&&ct===0&&(ct=3),r.flags&=-257,r.flags|=65536,r.lanes=c,l===rf?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([l]):n.add(l),nd(t,l,c)),!1;case 22:return r.flags|=65536,l===rf?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([l]):r.add(l)),nd(t,l,c)),!1}throw Error(a(435,r.tag))}return nd(t,l,c),ed(),!1}if(Ue)return n=An.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,l!==Zh&&(t=Error(a(422),{cause:l}),Ml(Tn(t,r)))):(l!==Zh&&(n=Error(a(423),{cause:l}),Ml(Tn(n,r))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,l=Tn(l,r),c=Of(t.stateNode,l,c),of(t,c),ct!==4&&(ct=2)),!1;var f=Error(a(520),{cause:l});if(f=Tn(f,r),eo===null?eo=[f]:eo.push(f),ct!==4&&(ct=2),n===null)return!0;l=Tn(l,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,t=c&-c,r.lanes|=t,t=Of(r.stateNode,l,t),of(r,t),!1;case 1:if(n=r.type,f=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(_s===null||!_s.has(f))))return r.flags|=65536,c&=-c,r.lanes|=c,c=i_(c),s_(c,t,r,l),of(r,c),!1}r=r.return}while(r!==null);return!1}var r_=Error(a(461)),It=!1;function Pt(t,n,r,l){n.child=t===null?Km(n,null,r,l):Ca(n,t.child,r,l)}function a_(t,n,r,l,c){r=r.render;var f=n.ref;if("ref"in l){var _={};for(var S in l)S!=="ref"&&(_[S]=l[S])}else _=l;return yr(n),l=df(t,n,r,_,f,c),S=pf(),t!==null&&!It?(gf(t,n,c),Mi(t,n,c)):(Ue&&S&&Kh(n),n.flags|=1,Pt(t,n,l,c),n.child)}function l_(t,n,r,l,c){if(t===null){var f=r.type;return typeof f=="function"&&!Yh(f)&&f.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=f,o_(t,n,f,l,c)):(t=xu(r.type,null,l,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!zf(t,c)){var _=f.memoizedProps;if(r=r.compare,r=r!==null?r:Il,r(_,l)&&t.ref===n.ref)return Mi(t,n,c)}return n.flags|=1,t=Ai(f,l),t.ref=n.ref,t.return=n,n.child=t}function o_(t,n,r,l,c){if(t!==null){var f=t.memoizedProps;if(Il(f,l)&&t.ref===n.ref)if(It=!1,n.pendingProps=l=f,zf(t,c))(t.flags&131072)!==0&&(It=!0);else return n.lanes=t.lanes,Mi(t,n,c)}return Df(t,n,r,l,c)}function u_(t,n,r){var l=n.pendingProps,c=l.children,f=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((n.flags&128)!==0){if(l=f!==null?f.baseLanes|r:r,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~l}else n.childLanes=0,n.child=null;return c_(t,n,l,r)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Pu(n,f!==null?f.cachePool:null),f!==null?om(n,f):cf(),Wm(n);else return n.lanes=n.childLanes=536870912,c_(t,n,f!==null?f.baseLanes|r:r,r)}else f!==null?(Pu(n,f.cachePool),om(n,f),hs(),n.memoizedState=null):(t!==null&&Pu(n,null),cf(),hs());return Pt(t,n,c,r),n.child}function c_(t,n,r,l){var c=sf();return c=c===null?null:{parent:Tt._currentValue,pool:c},n.memoizedState={baseLanes:r,cachePool:c},t!==null&&Pu(n,null),cf(),Wm(n),t!==null&&kl(t,n,l,!0),null}function ec(t,n){var r=n.ref;if(r===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(t===null||t.ref!==r)&&(n.flags|=4194816)}}function Df(t,n,r,l,c){return yr(n),r=df(t,n,r,l,void 0,c),l=pf(),t!==null&&!It?(gf(t,n,c),Mi(t,n,c)):(Ue&&l&&Kh(n),n.flags|=1,Pt(t,n,r,c),n.child)}function h_(t,n,r,l,c,f){return yr(n),n.updateQueue=null,r=cm(n,l,r,c),um(t),l=pf(),t!==null&&!It?(gf(t,n,f),Mi(t,n,f)):(Ue&&l&&Kh(n),n.flags|=1,Pt(t,n,r,f),n.child)}function f_(t,n,r,l,c){if(yr(n),n.stateNode===null){var f=ga,_=r.contextType;typeof _=="object"&&_!==null&&(f=qt(_)),f=new r(l,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=If,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=l,f.state=n.memoizedState,f.refs={},af(n),_=r.contextType,f.context=typeof _=="object"&&_!==null?qt(_):ga,f.state=n.memoizedState,_=r.getDerivedStateFromProps,typeof _=="function"&&(Nf(n,r,_,l),f.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&If.enqueueReplaceState(f,f.state,null),Bl(n,l,f,c),Hl(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(t===null){f=n.stateNode;var S=n.memoizedProps,w=Er(r,S);f.props=w;var j=f.context,G=r.contextType;_=ga,typeof G=="object"&&G!==null&&(_=qt(G));var Q=r.getDerivedStateFromProps;G=typeof Q=="function"||typeof f.getSnapshotBeforeUpdate=="function",S=n.pendingProps!==S,G||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S||j!==_)&&$m(n,f,l,_),as=!1;var H=n.memoizedState;f.state=H,Bl(n,l,f,c),Hl(),j=n.memoizedState,S||H!==j||as?(typeof Q=="function"&&(Nf(n,r,Q,l),j=n.memoizedState),(w=as||Zm(n,r,w,l,H,j,_))?(G||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=j),f.props=l,f.state=j,f.context=_,l=w):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{f=n.stateNode,lf(t,n),_=n.memoizedProps,G=Er(r,_),f.props=G,Q=n.pendingProps,H=f.context,j=r.contextType,w=ga,typeof j=="object"&&j!==null&&(w=qt(j)),S=r.getDerivedStateFromProps,(j=typeof S=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==Q||H!==w)&&$m(n,f,l,w),as=!1,H=n.memoizedState,f.state=H,Bl(n,l,f,c),Hl();var B=n.memoizedState;_!==Q||H!==B||as||t!==null&&t.dependencies!==null&&Lu(t.dependencies)?(typeof S=="function"&&(Nf(n,r,S,l),B=n.memoizedState),(G=as||Zm(n,r,G,l,H,B,w)||t!==null&&t.dependencies!==null&&Lu(t.dependencies))?(j||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(l,B,w),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(l,B,w)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&H===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&H===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=B),f.props=l,f.state=B,f.context=w,l=G):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&H===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&H===t.memoizedState||(n.flags|=1024),l=!1)}return f=l,ec(t,n),l=(n.flags&128)!==0,f||l?(f=n.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&l?(n.child=Ca(n,t.child,null,c),n.child=Ca(n,null,r,c)):Pt(t,n,r,c),n.memoizedState=f.state,t=n.child):t=Mi(t,n,c),t}function d_(t,n,r,l){return xl(),n.flags|=256,Pt(t,n,r,l),n.child}var xf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mf(t){return{baseLanes:t,cachePool:em()}}function kf(t,n,r){return t=t!==null?t.childLanes&~r:0,n&&(t|=Rn),t}function p_(t,n,r){var l=n.pendingProps,c=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(bt.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ue){if(c?cs(n):hs(),Ue){var S=ut,w;if(w=S){e:{for(w=S,S=ti;w.nodeType!==8;){if(!S){S=null;break e}if(w=Un(w.nextSibling),w===null){S=null;break e}}S=w}S!==null?(n.memoizedState={dehydrated:S,treeContext:dr!==null?{id:Ri,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},w=on(18,null,null,0),w.stateNode=S,w.return=n,n.child=w,Xt=n,ut=null,w=!0):w=!1}w||mr(n)}if(S=n.memoizedState,S!==null&&(S=S.dehydrated,S!==null))return _d(S)?n.lanes=32:n.lanes=536870912,null;xi(n)}return S=l.children,l=l.fallback,c?(hs(),c=n.mode,S=tc({mode:"hidden",children:S},c),l=fr(l,c,r,null),S.return=n,l.return=n,S.sibling=l,n.child=S,c=n.child,c.memoizedState=Mf(r),c.childLanes=kf(t,_,r),n.memoizedState=xf,l):(cs(n),Lf(n,S))}if(w=t.memoizedState,w!==null&&(S=w.dehydrated,S!==null)){if(f)n.flags&256?(cs(n),n.flags&=-257,n=Uf(t,n,r)):n.memoizedState!==null?(hs(),n.child=t.child,n.flags|=128,n=null):(hs(),c=l.fallback,S=n.mode,l=tc({mode:"visible",children:l.children},S),c=fr(c,S,r,null),c.flags|=2,l.return=n,c.return=n,l.sibling=c,n.child=l,Ca(n,t.child,null,r),l=n.child,l.memoizedState=Mf(r),l.childLanes=kf(t,_,r),n.memoizedState=xf,n=c);else if(cs(n),_d(S)){if(_=S.nextSibling&&S.nextSibling.dataset,_)var j=_.dgst;_=j,l=Error(a(419)),l.stack="",l.digest=_,Ml({value:l,source:null,stack:null}),n=Uf(t,n,r)}else if(It||kl(t,n,r,!1),_=(r&t.childLanes)!==0,It||_){if(_=Je,_!==null&&(l=r&-r,l=(l&42)!==0?1:Qs(l),l=(l&(_.suspendedLanes|r))!==0?0:l,l!==0&&l!==w.retryLane))throw w.retryLane=l,pa(t,l),dn(_,t,l),r_;S.data==="$?"||ed(),n=Uf(t,n,r)}else S.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=w.treeContext,ut=Un(S.nextSibling),Xt=n,Ue=!0,gr=null,ti=!1,t!==null&&(wn[Cn++]=Ri,wn[Cn++]=Ni,wn[Cn++]=dr,Ri=t.id,Ni=t.overflow,dr=n),n=Lf(n,l.children),n.flags|=4096);return n}return c?(hs(),c=l.fallback,S=n.mode,w=t.child,j=w.sibling,l=Ai(w,{mode:"hidden",children:l.children}),l.subtreeFlags=w.subtreeFlags&65011712,j!==null?c=Ai(j,c):(c=fr(c,S,r,null),c.flags|=2),c.return=n,l.return=n,l.sibling=c,n.child=l,l=c,c=n.child,S=t.child.memoizedState,S===null?S=Mf(r):(w=S.cachePool,w!==null?(j=Tt._currentValue,w=w.parent!==j?{parent:j,pool:j}:w):w=em(),S={baseLanes:S.baseLanes|r,cachePool:w}),c.memoizedState=S,c.childLanes=kf(t,_,r),n.memoizedState=xf,l):(cs(n),r=t.child,t=r.sibling,r=Ai(r,{mode:"visible",children:l.children}),r.return=n,r.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=r,n.memoizedState=null,r)}function Lf(t,n){return n=tc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function tc(t,n){return t=on(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Uf(t,n,r){return Ca(n,t.child,null,r),t=Lf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function g_(t,n,r){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),Jh(t.return,n,r)}function Pf(t,n,r,l,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=l,f.tail=r,f.tailMode=c)}function m_(t,n,r){var l=n.pendingProps,c=l.revealOrder,f=l.tail;if(Pt(t,n,l.children,r),l=bt.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&g_(t,r,n);else if(t.tag===19)g_(t,r,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch($(bt,l),c){case"forwards":for(r=n.child,c=null;r!==null;)t=r.alternate,t!==null&&Zu(t)===null&&(c=r),r=r.sibling;r=c,r===null?(c=n.child,n.child=null):(c=r.sibling,r.sibling=null),Pf(n,!1,c,r,f);break;case"backwards":for(r=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&Zu(t)===null){n.child=c;break}t=c.sibling,c.sibling=r,r=c,c=t}Pf(n,!0,r,null,f);break;case"together":Pf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Mi(t,n,r){if(t!==null&&(n.dependencies=t.dependencies),ms|=n.lanes,(r&n.childLanes)===0)if(t!==null){if(kl(t,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(a(153));if(n.child!==null){for(t=n.child,r=Ai(t,t.pendingProps),n.child=r,r.return=n;t.sibling!==null;)t=t.sibling,r=r.sibling=Ai(t,t.pendingProps),r.return=n;r.sibling=null}return n.child}function zf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Lu(t)))}function uE(t,n,r){switch(n.tag){case 3:$e(n,n.stateNode.containerInfo),rs(n,Tt,t.memoizedState.cache),xl();break;case 27:case 5:Zi(n);break;case 4:$e(n,n.stateNode.containerInfo);break;case 10:rs(n,n.type,n.memoizedProps.value);break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(cs(n),n.flags|=128,null):(r&n.child.childLanes)!==0?p_(t,n,r):(cs(n),t=Mi(t,n,r),t!==null?t.sibling:null);cs(n);break;case 19:var c=(t.flags&128)!==0;if(l=(r&n.childLanes)!==0,l||(kl(t,n,r,!1),l=(r&n.childLanes)!==0),c){if(l)return m_(t,n,r);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),$(bt,bt.current),l)break;return null;case 22:case 23:return n.lanes=0,u_(t,n,r);case 24:rs(n,Tt,t.memoizedState.cache)}return Mi(t,n,r)}function __(t,n,r){if(t!==null)if(t.memoizedProps!==n.pendingProps)It=!0;else{if(!zf(t,r)&&(n.flags&128)===0)return It=!1,uE(t,n,r);It=(t.flags&131072)!==0}else It=!1,Ue&&(n.flags&1048576)!==0&&Xg(n,ku,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var l=n.elementType,c=l._init;if(l=c(l._payload),n.type=l,typeof l=="function")Yh(l)?(t=Er(l,t),n.tag=1,n=f_(null,n,l,t,r)):(n.tag=0,n=Df(null,n,l,t,r));else{if(l!=null){if(c=l.$$typeof,c===ve){n.tag=11,n=a_(null,n,l,t,r);break e}else if(c===M){n.tag=14,n=l_(null,n,l,t,r);break e}}throw n=St(l)||l,Error(a(306,n,""))}}return n;case 0:return Df(t,n,n.type,n.pendingProps,r);case 1:return l=n.type,c=Er(l,n.pendingProps),f_(t,n,l,c,r);case 3:e:{if($e(n,n.stateNode.containerInfo),t===null)throw Error(a(387));l=n.pendingProps;var f=n.memoizedState;c=f.element,lf(t,n),Bl(n,l,null,r);var _=n.memoizedState;if(l=_.cache,rs(n,Tt,l),l!==f.cache&&ef(n,[Tt],r,!0),Hl(),l=_.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=d_(t,n,l,r);break e}else if(l!==c){c=Tn(Error(a(424)),n),Ml(c),n=d_(t,n,l,r);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ut=Un(t.firstChild),Xt=n,Ue=!0,gr=null,ti=!0,r=Km(n,null,l,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(xl(),l===c){n=Mi(t,n,r);break e}Pt(t,n,l,r)}n=n.child}return n;case 26:return ec(t,n),t===null?(r=Ey(n.type,null,n.pendingProps,null))?n.memoizedState=r:Ue||(r=n.type,t=n.pendingProps,l=gc(ge.current).createElement(r),l[Et]=n,l[gt]=t,jt(l,r,t),ft(l),n.stateNode=l):n.memoizedState=Ey(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Zi(n),t===null&&Ue&&(l=n.stateNode=yy(n.type,n.pendingProps,ge.current),Xt=n,ti=!0,c=ut,Ss(n.type)?(yd=c,ut=Un(l.firstChild)):ut=c),Pt(t,n,n.pendingProps.children,r),ec(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ue&&((c=l=ut)&&(l=PE(l,n.type,n.pendingProps,ti),l!==null?(n.stateNode=l,Xt=n,ut=Un(l.firstChild),ti=!1,c=!0):c=!1),c||mr(n)),Zi(n),c=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,l=f.children,pd(c,f)?l=null:_!==null&&pd(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=df(t,n,tE,null,null,r),uo._currentValue=c),ec(t,n),Pt(t,n,l,r),n.child;case 6:return t===null&&Ue&&((t=r=ut)&&(r=zE(r,n.pendingProps,ti),r!==null?(n.stateNode=r,Xt=n,ut=null,t=!0):t=!1),t||mr(n)),null;case 13:return p_(t,n,r);case 4:return $e(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=Ca(n,null,l,r):Pt(t,n,l,r),n.child;case 11:return a_(t,n,n.type,n.pendingProps,r);case 7:return Pt(t,n,n.pendingProps,r),n.child;case 8:return Pt(t,n,n.pendingProps.children,r),n.child;case 12:return Pt(t,n,n.pendingProps.children,r),n.child;case 10:return l=n.pendingProps,rs(n,n.type,l.value),Pt(t,n,l.children,r),n.child;case 9:return c=n.type._context,l=n.pendingProps.children,yr(n),c=qt(c),l=l(c),n.flags|=1,Pt(t,n,l,r),n.child;case 14:return l_(t,n,n.type,n.pendingProps,r);case 15:return o_(t,n,n.type,n.pendingProps,r);case 19:return m_(t,n,r);case 31:return l=n.pendingProps,r=n.mode,l={mode:l.mode,children:l.children},t===null?(r=tc(l,r),r.ref=n.ref,n.child=r,r.return=n,n=r):(r=Ai(t.child,l),r.ref=n.ref,n.child=r,r.return=n,n=r),n;case 22:return u_(t,n,r);case 24:return yr(n),l=qt(Tt),t===null?(c=sf(),c===null&&(c=Je,f=tf(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=r),c=f),n.memoizedState={parent:l,cache:c},af(n),rs(n,Tt,c)):((t.lanes&r)!==0&&(lf(t,n),Bl(n,null,null,r),Hl()),c=t.memoizedState,f=n.memoizedState,c.parent!==l?(c={parent:l,cache:l},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),rs(n,Tt,l)):(l=f.cache,rs(n,Tt,l),l!==c.cache&&ef(n,[Tt],r,!0))),Pt(t,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function ki(t){t.flags|=4}function y_(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Ay(n)){if(n=An.current,n!==null&&((Oe&4194048)===Oe?ni!==null:(Oe&62914560)!==Oe&&(Oe&536870912)===0||n!==ni))throw zl=rf,tm;t.flags|=8192}}function nc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?au():536870912,t.lanes|=n,Ia|=n)}function Ql(t,n){if(!Ue)switch(t.tailMode){case"hidden":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function at(t){var n=t.alternate!==null&&t.alternate.child===t.child,r=0,l=0;if(n)for(var c=t.child;c!==null;)r|=c.lanes|c.childLanes,l|=c.subtreeFlags&65011712,l|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)r|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=r,n}function cE(t,n,r){var l=n.pendingProps;switch(Wh(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(n),null;case 1:return at(n),null;case 3:return r=n.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),Oi(Tt),Fn(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Dl(n)?ki(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Wg())),at(n),null;case 26:return r=n.memoizedState,t===null?(ki(n),r!==null?(at(n),y_(n,r)):(at(n),n.flags&=-16777217)):r?r!==t.memoizedState?(ki(n),at(n),y_(n,r)):(at(n),n.flags&=-16777217):(t.memoizedProps!==l&&ki(n),at(n),n.flags&=-16777217),null;case 27:fi(n),r=ge.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==l&&ki(n);else{if(!l){if(n.stateNode===null)throw Error(a(166));return at(n),null}t=le.current,Dl(n)?Qg(n):(t=yy(c,l,r),n.stateNode=t,ki(n))}return at(n),null;case 5:if(fi(n),r=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&ki(n);else{if(!l){if(n.stateNode===null)throw Error(a(166));return at(n),null}if(t=le.current,Dl(n))Qg(n);else{switch(c=gc(ge.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?c.createElement(r,{is:l.is}):c.createElement(r)}}t[Et]=n,t[gt]=l;e:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break e;for(;c.sibling===null;){if(c.return===null||c.return===n)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;e:switch(jt(t,r,l),r){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&ki(n)}}return at(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==l&&ki(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(a(166));if(t=ge.current,Dl(n)){if(t=n.stateNode,r=n.memoizedProps,l=null,c=Xt,c!==null)switch(c.tag){case 27:case 5:l=c.memoizedProps}t[Et]=n,t=!!(t.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||hy(t.nodeValue,r)),t||mr(n)}else t=gc(t).createTextNode(l),t[Et]=n,n.stateNode=t}return at(n),null;case 13:if(l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Dl(n),l!==null&&l.dehydrated!==null){if(t===null){if(!c)throw Error(a(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(a(317));c[Et]=n}else xl(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;at(n),c=!1}else c=Wg(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(xi(n),n):(xi(n),null)}if(xi(n),(n.flags&128)!==0)return n.lanes=r,n;if(r=l!==null,t=t!==null&&t.memoizedState!==null,r){l=n.child,c=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(c=l.alternate.memoizedState.cachePool.pool);var f=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(f=l.memoizedState.cachePool.pool),f!==c&&(l.flags|=2048)}return r!==t&&r&&(n.child.flags|=8192),nc(n,n.updateQueue),at(n),null;case 4:return Fn(),t===null&&ud(n.stateNode.containerInfo),at(n),null;case 10:return Oi(n.type),at(n),null;case 19:if(ne(bt),c=n.memoizedState,c===null)return at(n),null;if(l=(n.flags&128)!==0,f=c.rendering,f===null)if(l)Ql(c,!1);else{if(ct!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Zu(t),f!==null){for(n.flags|=128,Ql(c,!1),t=f.updateQueue,n.updateQueue=t,nc(n,t),n.subtreeFlags=0,t=r,r=n.child;r!==null;)Yg(r,t),r=r.sibling;return $(bt,bt.current&1|2),n.child}t=t.sibling}c.tail!==null&&mn()>rc&&(n.flags|=128,l=!0,Ql(c,!1),n.lanes=4194304)}else{if(!l)if(t=Zu(f),t!==null){if(n.flags|=128,l=!0,t=t.updateQueue,n.updateQueue=t,nc(n,t),Ql(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Ue)return at(n),null}else 2*mn()-c.renderingStartTime>rc&&r!==536870912&&(n.flags|=128,l=!0,Ql(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=mn(),n.sibling=null,t=bt.current,$(bt,l?t&1|2:t&1),n):(at(n),null);case 22:case 23:return xi(n),hf(),l=n.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(r&536870912)!==0&&(n.flags&128)===0&&(at(n),n.subtreeFlags&6&&(n.flags|=8192)):at(n),r=n.updateQueue,r!==null&&nc(n,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==r&&(n.flags|=2048),t!==null&&ne(vr),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Oi(Tt),at(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function hE(t,n){switch(Wh(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Oi(Tt),Fn(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return fi(n),null;case 13:if(xi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(a(340));xl()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ne(bt),null;case 4:return Fn(),null;case 10:return Oi(n.type),null;case 22:case 23:return xi(n),hf(),t!==null&&ne(vr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Oi(Tt),null;case 25:return null;default:return null}}function v_(t,n){switch(Wh(n),n.tag){case 3:Oi(Tt),Fn();break;case 26:case 27:case 5:fi(n);break;case 4:Fn();break;case 13:xi(n);break;case 19:ne(bt);break;case 10:Oi(n.type);break;case 22:case 23:xi(n),hf(),t!==null&&ne(vr);break;case 24:Oi(Tt)}}function Kl(t,n){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var c=l.next;r=c;do{if((r.tag&t)===t){l=void 0;var f=r.create,_=r.inst;l=f(),_.destroy=l}r=r.next}while(r!==c)}}catch(S){Ke(n,n.return,S)}}function fs(t,n,r){try{var l=n.updateQueue,c=l!==null?l.lastEffect:null;if(c!==null){var f=c.next;l=f;do{if((l.tag&t)===t){var _=l.inst,S=_.destroy;if(S!==void 0){_.destroy=void 0,c=n;var w=r,j=S;try{j()}catch(G){Ke(c,w,G)}}}l=l.next}while(l!==f)}}catch(G){Ke(n,n.return,G)}}function S_(t){var n=t.updateQueue;if(n!==null){var r=t.stateNode;try{lm(n,r)}catch(l){Ke(t,t.return,l)}}}function E_(t,n,r){r.props=Er(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(l){Ke(t,n,l)}}function Wl(t,n){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof r=="function"?t.refCleanup=r(l):r.current=l}}catch(c){Ke(t,n,c)}}function ii(t,n){var r=t.ref,l=t.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(c){Ke(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(c){Ke(t,n,c)}else r.current=null}function T_(t){var n=t.type,r=t.memoizedProps,l=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break e;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(c){Ke(t,t.return,c)}}function jf(t,n,r){try{var l=t.stateNode;xE(l,t.type,r,n),l[gt]=n}catch(c){Ke(t,t.return,c)}}function b_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ss(t.type)||t.tag===4}function Hf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||b_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ss(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bf(t,n,r){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(t),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=pc));else if(l!==4&&(l===27&&Ss(t.type)&&(r=t.stateNode,n=null),t=t.child,t!==null))for(Bf(t,n,r),t=t.sibling;t!==null;)Bf(t,n,r),t=t.sibling}function ic(t,n,r){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?r.insertBefore(t,n):r.appendChild(t);else if(l!==4&&(l===27&&Ss(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(ic(t,n,r),t=t.sibling;t!==null;)ic(t,n,r),t=t.sibling}function w_(t){var n=t.stateNode,r=t.memoizedProps;try{for(var l=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);jt(n,l,r),n[Et]=t,n[gt]=r}catch(f){Ke(t,t.return,f)}}var Li=!1,pt=!1,Vf=!1,C_=typeof WeakSet=="function"?WeakSet:Set,Ot=null;function fE(t,n){if(t=t.containerInfo,fd=Ec,t=Ug(t),jh(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var c=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{r.nodeType,f.nodeType}catch{r=null;break e}var _=0,S=-1,w=-1,j=0,G=0,Q=t,H=null;t:for(;;){for(var B;Q!==r||c!==0&&Q.nodeType!==3||(S=_+c),Q!==f||l!==0&&Q.nodeType!==3||(w=_+l),Q.nodeType===3&&(_+=Q.nodeValue.length),(B=Q.firstChild)!==null;)H=Q,Q=B;for(;;){if(Q===t)break t;if(H===r&&++j===c&&(S=_),H===f&&++G===l&&(w=_),(B=Q.nextSibling)!==null)break;Q=H,H=Q.parentNode}Q=B}r=S===-1||w===-1?null:{start:S,end:w}}else r=null}r=r||{start:0,end:0}}else r=null;for(dd={focusedElem:t,selectionRange:r},Ec=!1,Ot=n;Ot!==null;)if(n=Ot,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,Ot=t;else for(;Ot!==null;){switch(n=Ot,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,r=n,c=f.memoizedProps,f=f.memoizedState,l=r.stateNode;try{var fe=Er(r.type,c,r.elementType===r.type);t=l.getSnapshotBeforeUpdate(fe,f),l.__reactInternalSnapshotBeforeUpdate=t}catch(oe){Ke(r,r.return,oe)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,r=t.nodeType,r===9)md(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":md(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=n.sibling,t!==null){t.return=n.return,Ot=t;break}Ot=n.return}}function A_(t,n,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:ds(t,r),l&4&&Kl(5,r);break;case 1:if(ds(t,r),l&4)if(t=r.stateNode,n===null)try{t.componentDidMount()}catch(_){Ke(r,r.return,_)}else{var c=Er(r.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Ke(r,r.return,_)}}l&64&&S_(r),l&512&&Wl(r,r.return);break;case 3:if(ds(t,r),l&64&&(t=r.updateQueue,t!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{lm(t,n)}catch(_){Ke(r,r.return,_)}}break;case 27:n===null&&l&4&&w_(r);case 26:case 5:ds(t,r),n===null&&l&4&&T_(r),l&512&&Wl(r,r.return);break;case 12:ds(t,r);break;case 13:ds(t,r),l&4&&I_(t,r),l&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=EE.bind(null,r),jE(t,r))));break;case 22:if(l=r.memoizedState!==null||Li,!l){n=n!==null&&n.memoizedState!==null||pt,c=Li;var f=pt;Li=l,(pt=n)&&!f?ps(t,r,(r.subtreeFlags&8772)!==0):ds(t,r),Li=c,pt=f}break;case 30:break;default:ds(t,r)}}function R_(t){var n=t.alternate;n!==null&&(t.alternate=null,R_(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ws(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var rt=null,en=!1;function Ui(t,n,r){for(r=r.child;r!==null;)N_(t,n,r),r=r.sibling}function N_(t,n,r){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(ot,r)}catch{}switch(r.tag){case 26:pt||ii(r,n),Ui(t,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:pt||ii(r,n);var l=rt,c=en;Ss(r.type)&&(rt=r.stateNode,en=!1),Ui(t,n,r),ro(r.stateNode),rt=l,en=c;break;case 5:pt||ii(r,n);case 6:if(l=rt,c=en,rt=null,Ui(t,n,r),rt=l,en=c,rt!==null)if(en)try{(rt.nodeType===9?rt.body:rt.nodeName==="HTML"?rt.ownerDocument.body:rt).removeChild(r.stateNode)}catch(f){Ke(r,n,f)}else try{rt.removeChild(r.stateNode)}catch(f){Ke(r,n,f)}break;case 18:rt!==null&&(en?(t=rt,my(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),po(t)):my(rt,r.stateNode));break;case 4:l=rt,c=en,rt=r.stateNode.containerInfo,en=!0,Ui(t,n,r),rt=l,en=c;break;case 0:case 11:case 14:case 15:pt||fs(2,r,n),pt||fs(4,r,n),Ui(t,n,r);break;case 1:pt||(ii(r,n),l=r.stateNode,typeof l.componentWillUnmount=="function"&&E_(r,n,l)),Ui(t,n,r);break;case 21:Ui(t,n,r);break;case 22:pt=(l=pt)||r.memoizedState!==null,Ui(t,n,r),pt=l;break;default:Ui(t,n,r)}}function I_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{po(t)}catch(r){Ke(n,n.return,r)}}function dE(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new C_),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new C_),n;default:throw Error(a(435,t.tag))}}function qf(t,n){var r=dE(t);n.forEach(function(l){var c=TE.bind(null,t,l);r.has(l)||(r.add(l),l.then(c,c))})}function un(t,n){var r=n.deletions;if(r!==null)for(var l=0;l<r.length;l++){var c=r[l],f=t,_=n,S=_;e:for(;S!==null;){switch(S.tag){case 27:if(Ss(S.type)){rt=S.stateNode,en=!1;break e}break;case 5:rt=S.stateNode,en=!1;break e;case 3:case 4:rt=S.stateNode.containerInfo,en=!0;break e}S=S.return}if(rt===null)throw Error(a(160));N_(f,_,c),rt=null,en=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)O_(n,t),n=n.sibling}var Ln=null;function O_(t,n){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:un(n,t),cn(t),l&4&&(fs(3,t,t.return),Kl(3,t),fs(5,t,t.return));break;case 1:un(n,t),cn(t),l&512&&(pt||r===null||ii(r,r.return)),l&64&&Li&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var c=Ln;if(un(n,t),cn(t),l&512&&(pt||r===null||ii(r,r.return)),l&4){var f=r!==null?r.memoizedState:null;if(l=t.memoizedState,r===null)if(l===null)if(t.stateNode===null){e:{l=t.type,r=t.memoizedProps,c=c.ownerDocument||c;t:switch(l){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Ks]||f[Et]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(l),c.head.insertBefore(f,c.querySelector("head > title"))),jt(f,l,r),f[Et]=t,ft(f),l=f;break e;case"link":var _=wy("link","href",c).get(l+(r.href||""));if(_){for(var S=0;S<_.length;S++)if(f=_[S],f.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&f.getAttribute("rel")===(r.rel==null?null:r.rel)&&f.getAttribute("title")===(r.title==null?null:r.title)&&f.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){_.splice(S,1);break t}}f=c.createElement(l),jt(f,l,r),c.head.appendChild(f);break;case"meta":if(_=wy("meta","content",c).get(l+(r.content||""))){for(S=0;S<_.length;S++)if(f=_[S],f.getAttribute("content")===(r.content==null?null:""+r.content)&&f.getAttribute("name")===(r.name==null?null:r.name)&&f.getAttribute("property")===(r.property==null?null:r.property)&&f.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&f.getAttribute("charset")===(r.charSet==null?null:r.charSet)){_.splice(S,1);break t}}f=c.createElement(l),jt(f,l,r),c.head.appendChild(f);break;default:throw Error(a(468,l))}f[Et]=t,ft(f),l=f}t.stateNode=l}else Cy(c,t.type,t.stateNode);else t.stateNode=by(c,l,t.memoizedProps);else f!==l?(f===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):f.count--,l===null?Cy(c,t.type,t.stateNode):by(c,l,t.memoizedProps)):l===null&&t.stateNode!==null&&jf(t,t.memoizedProps,r.memoizedProps)}break;case 27:un(n,t),cn(t),l&512&&(pt||r===null||ii(r,r.return)),r!==null&&l&4&&jf(t,t.memoizedProps,r.memoizedProps);break;case 5:if(un(n,t),cn(t),l&512&&(pt||r===null||ii(r,r.return)),t.flags&32){c=t.stateNode;try{yn(c,"")}catch(B){Ke(t,t.return,B)}}l&4&&t.stateNode!=null&&(c=t.memoizedProps,jf(t,c,r!==null?r.memoizedProps:c)),l&1024&&(Vf=!0);break;case 6:if(un(n,t),cn(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,r=t.stateNode;try{r.nodeValue=l}catch(B){Ke(t,t.return,B)}}break;case 3:if(yc=null,c=Ln,Ln=mc(n.containerInfo),un(n,t),Ln=c,cn(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{po(n.containerInfo)}catch(B){Ke(t,t.return,B)}Vf&&(Vf=!1,D_(t));break;case 4:l=Ln,Ln=mc(t.stateNode.containerInfo),un(n,t),cn(t),Ln=l;break;case 12:un(n,t),cn(t);break;case 13:un(n,t),cn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Kf=mn()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,qf(t,l)));break;case 22:c=t.memoizedState!==null;var w=r!==null&&r.memoizedState!==null,j=Li,G=pt;if(Li=j||c,pt=G||w,un(n,t),pt=G,Li=j,cn(t),l&8192)e:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(r===null||w||Li||pt||Tr(t)),r=null,n=t;;){if(n.tag===5||n.tag===26){if(r===null){w=r=n;try{if(f=w.stateNode,c)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{S=w.stateNode;var Q=w.memoizedProps.style,H=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;S.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(B){Ke(w,w.return,B)}}}else if(n.tag===6){if(r===null){w=n;try{w.stateNode.nodeValue=c?"":w.memoizedProps}catch(B){Ke(w,w.return,B)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=t.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,qf(t,r))));break;case 19:un(n,t),cn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,qf(t,l)));break;case 30:break;case 21:break;default:un(n,t),cn(t)}}function cn(t){var n=t.flags;if(n&2){try{for(var r,l=t.return;l!==null;){if(b_(l)){r=l;break}l=l.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var c=r.stateNode,f=Hf(t);ic(t,f,c);break;case 5:var _=r.stateNode;r.flags&32&&(yn(_,""),r.flags&=-33);var S=Hf(t);ic(t,S,_);break;case 3:case 4:var w=r.stateNode.containerInfo,j=Hf(t);Bf(t,j,w);break;default:throw Error(a(161))}}catch(G){Ke(t,t.return,G)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function D_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;D_(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ds(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)A_(t,n.alternate,n),n=n.sibling}function Tr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:fs(4,n,n.return),Tr(n);break;case 1:ii(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&E_(n,n.return,r),Tr(n);break;case 27:ro(n.stateNode);case 26:case 5:ii(n,n.return),Tr(n);break;case 22:n.memoizedState===null&&Tr(n);break;case 30:Tr(n);break;default:Tr(n)}t=t.sibling}}function ps(t,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,c=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:ps(c,f,r),Kl(4,f);break;case 1:if(ps(c,f,r),l=f,c=l.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(j){Ke(l,l.return,j)}if(l=f,c=l.updateQueue,c!==null){var S=l.stateNode;try{var w=c.shared.hiddenCallbacks;if(w!==null)for(c.shared.hiddenCallbacks=null,c=0;c<w.length;c++)am(w[c],S)}catch(j){Ke(l,l.return,j)}}r&&_&64&&S_(f),Wl(f,f.return);break;case 27:w_(f);case 26:case 5:ps(c,f,r),r&&l===null&&_&4&&T_(f),Wl(f,f.return);break;case 12:ps(c,f,r);break;case 13:ps(c,f,r),r&&_&4&&I_(c,f);break;case 22:f.memoizedState===null&&ps(c,f,r),Wl(f,f.return);break;case 30:break;default:ps(c,f,r)}n=n.sibling}}function Gf(t,n){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&Ll(r))}function Ff(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ll(t))}function si(t,n,r,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)x_(t,n,r,l),n=n.sibling}function x_(t,n,r,l){var c=n.flags;switch(n.tag){case 0:case 11:case 15:si(t,n,r,l),c&2048&&Kl(9,n);break;case 1:si(t,n,r,l);break;case 3:si(t,n,r,l),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ll(t)));break;case 12:if(c&2048){si(t,n,r,l),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,S=f.onPostCommit;typeof S=="function"&&S(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(w){Ke(n,n.return,w)}}else si(t,n,r,l);break;case 13:si(t,n,r,l);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?si(t,n,r,l):Zl(t,n):f._visibility&2?si(t,n,r,l):(f._visibility|=2,Aa(t,n,r,l,(n.subtreeFlags&10256)!==0)),c&2048&&Gf(_,n);break;case 24:si(t,n,r,l),c&2048&&Ff(n.alternate,n);break;default:si(t,n,r,l)}}function Aa(t,n,r,l,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,_=n,S=r,w=l,j=_.flags;switch(_.tag){case 0:case 11:case 15:Aa(f,_,S,w,c),Kl(8,_);break;case 23:break;case 22:var G=_.stateNode;_.memoizedState!==null?G._visibility&2?Aa(f,_,S,w,c):Zl(f,_):(G._visibility|=2,Aa(f,_,S,w,c)),c&&j&2048&&Gf(_.alternate,_);break;case 24:Aa(f,_,S,w,c),c&&j&2048&&Ff(_.alternate,_);break;default:Aa(f,_,S,w,c)}n=n.sibling}}function Zl(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=t,l=n,c=l.flags;switch(l.tag){case 22:Zl(r,l),c&2048&&Gf(l.alternate,l);break;case 24:Zl(r,l),c&2048&&Ff(l.alternate,l);break;default:Zl(r,l)}n=n.sibling}}var $l=8192;function Ra(t){if(t.subtreeFlags&$l)for(t=t.child;t!==null;)M_(t),t=t.sibling}function M_(t){switch(t.tag){case 26:Ra(t),t.flags&$l&&t.memoizedState!==null&&$E(Ln,t.memoizedState,t.memoizedProps);break;case 5:Ra(t);break;case 3:case 4:var n=Ln;Ln=mc(t.stateNode.containerInfo),Ra(t),Ln=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=$l,$l=16777216,Ra(t),$l=n):Ra(t));break;default:Ra(t)}}function k_(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Jl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];Ot=l,U_(l,t)}k_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)L_(t),t=t.sibling}function L_(t){switch(t.tag){case 0:case 11:case 15:Jl(t),t.flags&2048&&fs(9,t,t.return);break;case 3:Jl(t);break;case 12:Jl(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,sc(t)):Jl(t);break;default:Jl(t)}}function sc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];Ot=l,U_(l,t)}k_(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:fs(8,n,n.return),sc(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,sc(n));break;default:sc(n)}t=t.sibling}}function U_(t,n){for(;Ot!==null;){var r=Ot;switch(r.tag){case 0:case 11:case 15:fs(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ll(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,Ot=l;else e:for(r=t;Ot!==null;){l=Ot;var c=l.sibling,f=l.return;if(R_(l),l===r){Ot=null;break e}if(c!==null){c.return=f,Ot=c;break e}Ot=f}}}var pE={getCacheForType:function(t){var n=qt(Tt),r=n.data.get(t);return r===void 0&&(r=t(),n.data.set(t,r)),r}},gE=typeof WeakMap=="function"?WeakMap:Map,Ve=0,Je=null,Ce=null,Oe=0,qe=0,hn=null,gs=!1,Na=!1,Yf=!1,Pi=0,ct=0,ms=0,br=0,Xf=0,Rn=0,Ia=0,eo=null,tn=null,Qf=!1,Kf=0,rc=1/0,ac=null,_s=null,zt=0,ys=null,Oa=null,Da=0,Wf=0,Zf=null,P_=null,to=0,$f=null;function fn(){if((Ve&2)!==0&&Oe!==0)return Oe&-Oe;if(D.T!==null){var t=ya;return t!==0?t:rd()}return $i()}function z_(){Rn===0&&(Rn=(Oe&536870912)===0||Ue?fl():536870912);var t=An.current;return t!==null&&(t.flags|=32),Rn}function dn(t,n,r){(t===Je&&(qe===2||qe===9)||t.cancelPendingCommit!==null)&&(xa(t,0),vs(t,Oe,Rn,!1)),pi(t,r),((Ve&2)===0||t!==Je)&&(t===Je&&((Ve&2)===0&&(br|=r),ct===4&&vs(t,Oe,Rn,!1)),ri(t))}function j_(t,n,r){if((Ve&6)!==0)throw Error(a(327));var l=!r&&(n&124)===0&&(n&t.expiredLanes)===0||Xs(t,n),c=l?yE(t,n):td(t,n,!0),f=l;do{if(c===0){Na&&!l&&vs(t,n,0,!1);break}else{if(r=t.current.alternate,f&&!mE(r)){c=td(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var S=t;c=eo;var w=S.current.memoizedState.isDehydrated;if(w&&(xa(S,_).flags|=256),_=td(S,_,!1),_!==2){if(Yf&&!w){S.errorRecoveryDisabledLanes|=f,br|=f,c=4;break e}f=tn,tn=c,f!==null&&(tn===null?tn=f:tn.push.apply(tn,f))}c=_}if(f=!1,c!==2)continue}}if(c===1){xa(t,0),vs(t,n,0,!0);break}e:{switch(l=t,f=c,f){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:vs(l,n,Rn,!gs);break e;case 2:tn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(c=Kf+300-mn(),10<c)){if(vs(l,n,Rn,!gs),Wr(l,0,!0)!==0)break e;l.timeoutHandle=py(H_.bind(null,l,r,tn,ac,Qf,n,Rn,br,Ia,gs,f,2,-0,0),c);break e}H_(l,r,tn,ac,Qf,n,Rn,br,Ia,gs,f,0,-0,0)}}break}while(!0);ri(t)}function H_(t,n,r,l,c,f,_,S,w,j,G,Q,H,B){if(t.timeoutHandle=-1,Q=n.subtreeFlags,(Q&8192||(Q&16785408)===16785408)&&(oo={stylesheets:null,count:0,unsuspend:ZE},M_(n),Q=JE(),Q!==null)){t.cancelPendingCommit=Q(X_.bind(null,t,n,f,r,l,c,_,S,w,G,1,H,B)),vs(t,f,_,!j);return}X_(t,n,f,r,l,c,_,S,w)}function mE(t){for(var n=t;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var c=r[l],f=c.getSnapshot;c=c.value;try{if(!ln(f(),c))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function vs(t,n,r,l){n&=~Xf,n&=~br,t.suspendedLanes|=n,t.pingedLanes&=~n,l&&(t.warmLanes|=n),l=t.expirationTimes;for(var c=n;0<c;){var f=31-Vt(c),_=1<<f;l[f]=-1,c&=~_}r!==0&&gi(t,r,n)}function lc(){return(Ve&6)===0?(no(0),!1):!0}function Jf(){if(Ce!==null){if(qe===0)var t=Ce.return;else t=Ce,Ii=_r=null,mf(t),wa=null,Yl=0,t=Ce;for(;t!==null;)v_(t.alternate,t),t=t.return;Ce=null}}function xa(t,n){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,kE(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),Jf(),Je=t,Ce=r=Ai(t.current,null),Oe=n,qe=0,hn=null,gs=!1,Na=Xs(t,n),Yf=!1,Ia=Rn=Xf=br=ms=ct=0,tn=eo=null,Qf=!1,(n&8)!==0&&(n|=n&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=n;0<l;){var c=31-Vt(l),f=1<<c;n|=t[c],l&=~f}return Pi=n,Iu(),r}function B_(t,n){Se=null,D.H=Qu,n===Pl||n===zu?(n=sm(),qe=3):n===tm?(n=sm(),qe=4):qe=n===r_?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,hn=n,Ce===null&&(ct=1,Ju(t,Tn(n,t.current)))}function V_(){var t=D.H;return D.H=Qu,t===null?Qu:t}function q_(){var t=D.A;return D.A=pE,t}function ed(){ct=4,gs||(Oe&4194048)!==Oe&&An.current!==null||(Na=!0),(ms&134217727)===0&&(br&134217727)===0||Je===null||vs(Je,Oe,Rn,!1)}function td(t,n,r){var l=Ve;Ve|=2;var c=V_(),f=q_();(Je!==t||Oe!==n)&&(ac=null,xa(t,n)),n=!1;var _=ct;e:do try{if(qe!==0&&Ce!==null){var S=Ce,w=hn;switch(qe){case 8:Jf(),_=6;break e;case 3:case 2:case 9:case 6:An.current===null&&(n=!0);var j=qe;if(qe=0,hn=null,Ma(t,S,w,j),r&&Na){_=0;break e}break;default:j=qe,qe=0,hn=null,Ma(t,S,w,j)}}_E(),_=ct;break}catch(G){B_(t,G)}while(!0);return n&&t.shellSuspendCounter++,Ii=_r=null,Ve=l,D.H=c,D.A=f,Ce===null&&(Je=null,Oe=0,Iu()),_}function _E(){for(;Ce!==null;)G_(Ce)}function yE(t,n){var r=Ve;Ve|=2;var l=V_(),c=q_();Je!==t||Oe!==n?(ac=null,rc=mn()+500,xa(t,n)):Na=Xs(t,n);e:do try{if(qe!==0&&Ce!==null){n=Ce;var f=hn;t:switch(qe){case 1:qe=0,hn=null,Ma(t,n,f,1);break;case 2:case 9:if(nm(f)){qe=0,hn=null,F_(n);break}n=function(){qe!==2&&qe!==9||Je!==t||(qe=7),ri(t)},f.then(n,n);break e;case 3:qe=7;break e;case 4:qe=5;break e;case 7:nm(f)?(qe=0,hn=null,F_(n)):(qe=0,hn=null,Ma(t,n,f,7));break;case 5:var _=null;switch(Ce.tag){case 26:_=Ce.memoizedState;case 5:case 27:var S=Ce;if(!_||Ay(_)){qe=0,hn=null;var w=S.sibling;if(w!==null)Ce=w;else{var j=S.return;j!==null?(Ce=j,oc(j)):Ce=null}break t}}qe=0,hn=null,Ma(t,n,f,5);break;case 6:qe=0,hn=null,Ma(t,n,f,6);break;case 8:Jf(),ct=6;break e;default:throw Error(a(462))}}vE();break}catch(G){B_(t,G)}while(!0);return Ii=_r=null,D.H=l,D.A=c,Ve=r,Ce!==null?0:(Je=null,Oe=0,Iu(),ct)}function vE(){for(;Ce!==null&&!ol();)G_(Ce)}function G_(t){var n=__(t.alternate,t,Pi);t.memoizedProps=t.pendingProps,n===null?oc(t):Ce=n}function F_(t){var n=t,r=n.alternate;switch(n.tag){case 15:case 0:n=h_(r,n,n.pendingProps,n.type,void 0,Oe);break;case 11:n=h_(r,n,n.pendingProps,n.type.render,n.ref,Oe);break;case 5:mf(n);default:v_(r,n),n=Ce=Yg(n,Pi),n=__(r,n,Pi)}t.memoizedProps=t.pendingProps,n===null?oc(t):Ce=n}function Ma(t,n,r,l){Ii=_r=null,mf(n),wa=null,Yl=0;var c=n.return;try{if(oE(t,c,n,r,Oe)){ct=1,Ju(t,Tn(r,t.current)),Ce=null;return}}catch(f){if(c!==null)throw Ce=c,f;ct=1,Ju(t,Tn(r,t.current)),Ce=null;return}n.flags&32768?(Ue||l===1?t=!0:Na||(Oe&536870912)!==0?t=!1:(gs=t=!0,(l===2||l===9||l===3||l===6)&&(l=An.current,l!==null&&l.tag===13&&(l.flags|=16384))),Y_(n,t)):oc(n)}function oc(t){var n=t;do{if((n.flags&32768)!==0){Y_(n,gs);return}t=n.return;var r=cE(n.alternate,n,Pi);if(r!==null){Ce=r;return}if(n=n.sibling,n!==null){Ce=n;return}Ce=n=t}while(n!==null);ct===0&&(ct=5)}function Y_(t,n){do{var r=hE(t.alternate,t);if(r!==null){r.flags&=32767,Ce=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(t=t.sibling,t!==null)){Ce=t;return}Ce=t=r}while(t!==null);ct=6,Ce=null}function X_(t,n,r,l,c,f,_,S,w){t.cancelPendingCommit=null;do uc();while(zt!==0);if((Ve&6)!==0)throw Error(a(327));if(n!==null){if(n===t.current)throw Error(a(177));if(f=n.lanes|n.childLanes,f|=Gh,dl(t,r,f,_,S,w),t===Je&&(Ce=Je=null,Oe=0),Oa=n,ys=t,Da=r,Wf=f,Zf=c,P_=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,bE(qs,function(){return $_(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=D.T,D.T=null,c=K.p,K.p=2,_=Ve,Ve|=4;try{fE(t,n,r)}finally{Ve=_,K.p=c,D.T=l}}zt=1,Q_(),K_(),W_()}}function Q_(){if(zt===1){zt=0;var t=ys,n=Oa,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=D.T,D.T=null;var l=K.p;K.p=2;var c=Ve;Ve|=4;try{O_(n,t);var f=dd,_=Ug(t.containerInfo),S=f.focusedElem,w=f.selectionRange;if(_!==S&&S&&S.ownerDocument&&Lg(S.ownerDocument.documentElement,S)){if(w!==null&&jh(S)){var j=w.start,G=w.end;if(G===void 0&&(G=j),"selectionStart"in S)S.selectionStart=j,S.selectionEnd=Math.min(G,S.value.length);else{var Q=S.ownerDocument||document,H=Q&&Q.defaultView||window;if(H.getSelection){var B=H.getSelection(),fe=S.textContent.length,oe=Math.min(w.start,fe),Xe=w.end===void 0?oe:Math.min(w.end,fe);!B.extend&&oe>Xe&&(_=Xe,Xe=oe,oe=_);var L=kg(S,oe),O=kg(S,Xe);if(L&&O&&(B.rangeCount!==1||B.anchorNode!==L.node||B.anchorOffset!==L.offset||B.focusNode!==O.node||B.focusOffset!==O.offset)){var z=Q.createRange();z.setStart(L.node,L.offset),B.removeAllRanges(),oe>Xe?(B.addRange(z),B.extend(O.node,O.offset)):(z.setEnd(O.node,O.offset),B.addRange(z))}}}}for(Q=[],B=S;B=B.parentNode;)B.nodeType===1&&Q.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<Q.length;S++){var Y=Q[S];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}Ec=!!fd,dd=fd=null}finally{Ve=c,K.p=l,D.T=r}}t.current=n,zt=2}}function K_(){if(zt===2){zt=0;var t=ys,n=Oa,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=D.T,D.T=null;var l=K.p;K.p=2;var c=Ve;Ve|=4;try{A_(t,n.alternate,n)}finally{Ve=c,K.p=l,D.T=r}}zt=3}}function W_(){if(zt===4||zt===3){zt=0,iu();var t=ys,n=Oa,r=Da,l=P_;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?zt=5:(zt=0,Oa=ys=null,Z_(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(_s=null),Zr(r),n=n.stateNode,He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(ot,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=D.T,c=K.p,K.p=2,D.T=null;try{for(var f=t.onRecoverableError,_=0;_<l.length;_++){var S=l[_];f(S.value,{componentStack:S.stack})}}finally{D.T=n,K.p=c}}(Da&3)!==0&&uc(),ri(t),c=t.pendingLanes,(r&4194090)!==0&&(c&42)!==0?t===$f?to++:(to=0,$f=t):to=0,no(0)}}function Z_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ll(n)))}function uc(t){return Q_(),K_(),W_(),$_()}function $_(){if(zt!==5)return!1;var t=ys,n=Wf;Wf=0;var r=Zr(Da),l=D.T,c=K.p;try{K.p=32>r?32:r,D.T=null,r=Zf,Zf=null;var f=ys,_=Da;if(zt=0,Oa=ys=null,Da=0,(Ve&6)!==0)throw Error(a(331));var S=Ve;if(Ve|=4,L_(f.current),x_(f,f.current,_,r),Ve=S,no(0,!1),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(ot,f)}catch{}return!0}finally{K.p=c,D.T=l,Z_(t,n)}}function J_(t,n,r){n=Tn(r,n),n=Of(t.stateNode,n,2),t=os(t,n,2),t!==null&&(pi(t,2),ri(t))}function Ke(t,n,r){if(t.tag===3)J_(t,t,r);else for(;n!==null;){if(n.tag===3){J_(n,t,r);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(_s===null||!_s.has(l))){t=Tn(r,t),r=i_(2),l=os(n,r,2),l!==null&&(s_(r,l,n,t),pi(l,2),ri(l));break}}n=n.return}}function nd(t,n,r){var l=t.pingCache;if(l===null){l=t.pingCache=new gE;var c=new Set;l.set(n,c)}else c=l.get(n),c===void 0&&(c=new Set,l.set(n,c));c.has(r)||(Yf=!0,c.add(r),t=SE.bind(null,t,n,r),n.then(t,t))}function SE(t,n,r){var l=t.pingCache;l!==null&&l.delete(n),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,Je===t&&(Oe&r)===r&&(ct===4||ct===3&&(Oe&62914560)===Oe&&300>mn()-Kf?(Ve&2)===0&&xa(t,0):Xf|=r,Ia===Oe&&(Ia=0)),ri(t)}function ey(t,n){n===0&&(n=au()),t=pa(t,n),t!==null&&(pi(t,n),ri(t))}function EE(t){var n=t.memoizedState,r=0;n!==null&&(r=n.retryLane),ey(t,r)}function TE(t,n){var r=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(r=c.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(n),ey(t,r)}function bE(t,n){return Bs(t,n)}var cc=null,ka=null,id=!1,hc=!1,sd=!1,wr=0;function ri(t){t!==ka&&t.next===null&&(ka===null?cc=ka=t:ka=ka.next=t),hc=!0,id||(id=!0,CE())}function no(t,n){if(!sd&&hc){sd=!0;do for(var r=!1,l=cc;l!==null;){if(t!==0){var c=l.pendingLanes;if(c===0)var f=0;else{var _=l.suspendedLanes,S=l.pingedLanes;f=(1<<31-Vt(42|t)+1)-1,f&=c&~(_&~S),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(r=!0,sy(l,f))}else f=Oe,f=Wr(l,l===Je?f:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(f&3)===0||Xs(l,f)||(r=!0,sy(l,f));l=l.next}while(r);sd=!1}}function wE(){ty()}function ty(){hc=id=!1;var t=0;wr!==0&&(ME()&&(t=wr),wr=0);for(var n=mn(),r=null,l=cc;l!==null;){var c=l.next,f=ny(l,n);f===0?(l.next=null,r===null?cc=c:r.next=c,c===null&&(ka=r)):(r=l,(t!==0||(f&3)!==0)&&(hc=!0)),l=c}no(t)}function ny(t,n){for(var r=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-Vt(f),S=1<<_,w=c[_];w===-1?((S&r)===0||(S&l)!==0)&&(c[_]=hl(S,n)):w<=n&&(t.expiredLanes|=S),f&=~S}if(n=Je,r=Oe,r=Wr(t,t===n?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,r===0||t===n&&(qe===2||qe===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Vs(l),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||Xs(t,r)){if(n=r&-r,n===t.callbackPriority)return n;switch(l!==null&&Vs(l),Zr(r)){case 2:case 8:r=Qr;break;case 32:r=qs;break;case 268435456:r=Kr;break;default:r=qs}return l=iy.bind(null,t),r=Bs(r,l),t.callbackPriority=n,t.callbackNode=r,n}return l!==null&&l!==null&&Vs(l),t.callbackPriority=2,t.callbackNode=null,2}function iy(t,n){if(zt!==0&&zt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(uc()&&t.callbackNode!==r)return null;var l=Oe;return l=Wr(t,t===Je?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(j_(t,l,n),ny(t,mn()),t.callbackNode!=null&&t.callbackNode===r?iy.bind(null,t):null)}function sy(t,n){if(uc())return null;j_(t,n,!0)}function CE(){LE(function(){(Ve&6)!==0?Bs(ul,wE):ty()})}function rd(){return wr===0&&(wr=fl()),wr}function ry(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ia(""+t)}function ay(t,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,t.id&&r.setAttribute("form",t.id),n.parentNode.insertBefore(r,n),t=new FormData(t),r.parentNode.removeChild(r),t}function AE(t,n,r,l,c){if(n==="submit"&&r&&r.stateNode===c){var f=ry((c[gt]||null).action),_=l.submitter;_&&(n=(n=_[gt]||null)?ry(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var S=new sa("action","action",null,l,c);t.push({event:S,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(wr!==0){var w=_?ay(c,_):new FormData(c);Cf(r,{pending:!0,data:w,method:c.method,action:f},null,w)}}else typeof f=="function"&&(S.preventDefault(),w=_?ay(c,_):new FormData(c),Cf(r,{pending:!0,data:w,method:c.method,action:f},f,w))},currentTarget:c}]})}}for(var ad=0;ad<qh.length;ad++){var ld=qh[ad],RE=ld.toLowerCase(),NE=ld[0].toUpperCase()+ld.slice(1);kn(RE,"on"+NE)}kn(jg,"onAnimationEnd"),kn(Hg,"onAnimationIteration"),kn(Bg,"onAnimationStart"),kn("dblclick","onDoubleClick"),kn("focusin","onFocus"),kn("focusout","onBlur"),kn(FS,"onTransitionRun"),kn(YS,"onTransitionStart"),kn(XS,"onTransitionCancel"),kn(Vg,"onTransitionEnd"),mi("onMouseEnter",["mouseout","mouseover"]),mi("onMouseLeave",["mouseout","mouseover"]),mi("onPointerEnter",["pointerout","pointerover"]),mi("onPointerLeave",["pointerout","pointerover"]),xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),xn("onBeforeInput",["compositionend","keypress","textInput","paste"]),xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),IE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(io));function ly(t,n){n=(n&4)!==0;for(var r=0;r<t.length;r++){var l=t[r],c=l.event;l=l.listeners;e:{var f=void 0;if(n)for(var _=l.length-1;0<=_;_--){var S=l[_],w=S.instance,j=S.currentTarget;if(S=S.listener,w!==f&&c.isPropagationStopped())break e;f=S,c.currentTarget=j;try{f(c)}catch(G){$u(G)}c.currentTarget=null,f=w}else for(_=0;_<l.length;_++){if(S=l[_],w=S.instance,j=S.currentTarget,S=S.listener,w!==f&&c.isPropagationStopped())break e;f=S,c.currentTarget=j;try{f(c)}catch(G){$u(G)}c.currentTarget=null,f=w}}}}function Ae(t,n){var r=n[gl];r===void 0&&(r=n[gl]=new Set);var l=t+"__bubble";r.has(l)||(oy(n,t,2,!1),r.add(l))}function od(t,n,r){var l=0;n&&(l|=4),oy(r,t,l,n)}var fc="_reactListening"+Math.random().toString(36).slice(2);function ud(t){if(!t[fc]){t[fc]=!0,ml.forEach(function(r){r!=="selectionchange"&&(IE.has(r)||od(r,!1,t),od(r,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[fc]||(n[fc]=!0,od("selectionchange",!1,n))}}function oy(t,n,r,l){switch(xy(n)){case 2:var c=nT;break;case 8:c=iT;break;default:c=bd}r=c.bind(null,n,r,t),c=void 0,!Sn||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(n,r,{capture:!0,passive:c}):t.addEventListener(n,r,!0):c!==void 0?t.addEventListener(n,r,{passive:c}):t.addEventListener(n,r,!1)}function cd(t,n,r,l,c){var f=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var _=l.tag;if(_===3||_===4){var S=l.stateNode.containerInfo;if(S===c)break;if(_===4)for(_=l.return;_!==null;){var w=_.tag;if((w===3||w===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;S!==null;){if(_=es(S),_===null)return;if(w=_.tag,w===5||w===6||w===26||w===27){l=f=_;continue e}S=S.parentNode}}l=l.return}pu(function(){var j=f,G=vn(r),Q=[];e:{var H=qg.get(t);if(H!==void 0){var B=sa,fe=t;switch(t){case"keypress":if(Zn(r)===0)break e;case"keydown":case"keyup":B=ca;break;case"focusin":fe="focus",B=la;break;case"focusout":fe="blur",B=la;break;case"beforeblur":case"afterblur":B=la;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=En;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=Lh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=Tu;break;case jg:case Hg:case Bg:B=oa;break;case Vg:B=wu;break;case"scroll":case"scrollend":B=gu;break;case"wheel":B=Zt;break;case"copy":case"cut":case"paste":B=ua;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=Nl;break;case"toggle":case"beforetoggle":B=Ru}var oe=(n&4)!==0,Xe=!oe&&(t==="scroll"||t==="scrollend"),L=oe?H!==null?H+"Capture":null:H;oe=[];for(var O=j,z;O!==null;){var Y=O;if(z=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||z===null||L===null||(Y=ir(O,L),Y!=null&&oe.push(so(O,Y,z))),Xe)break;O=O.return}0<oe.length&&(H=new B(H,fe,null,r,G),Q.push({event:H,listeners:oe}))}}if((n&7)===0){e:{if(H=t==="mouseover"||t==="pointerover",B=t==="mouseout"||t==="pointerout",H&&r!==vi&&(fe=r.relatedTarget||r.fromElement)&&(es(fe)||fe[_n]))break e;if((B||H)&&(H=G.window===G?G:(H=G.ownerDocument)?H.defaultView||H.parentWindow:window,B?(fe=r.relatedTarget||r.toElement,B=j,fe=fe?es(fe):null,fe!==null&&(Xe=h(fe),oe=fe.tag,fe!==Xe||oe!==5&&oe!==27&&oe!==6)&&(fe=null)):(B=null,fe=j),B!==fe)){if(oe=En,Y="onMouseLeave",L="onMouseEnter",O="mouse",(t==="pointerout"||t==="pointerover")&&(oe=Nl,Y="onPointerLeave",L="onPointerEnter",O="pointer"),Xe=B==null?H:Xn(B),z=fe==null?H:Xn(fe),H=new oe(Y,O+"leave",B,r,G),H.target=Xe,H.relatedTarget=z,Y=null,es(G)===j&&(oe=new oe(L,O+"enter",fe,r,G),oe.target=z,oe.relatedTarget=Xe,Y=oe),Xe=Y,B&&fe)t:{for(oe=B,L=fe,O=0,z=oe;z;z=La(z))O++;for(z=0,Y=L;Y;Y=La(Y))z++;for(;0<O-z;)oe=La(oe),O--;for(;0<z-O;)L=La(L),z--;for(;O--;){if(oe===L||L!==null&&oe===L.alternate)break t;oe=La(oe),L=La(L)}oe=null}else oe=null;B!==null&&uy(Q,H,B,oe,!1),fe!==null&&Xe!==null&&uy(Q,Xe,fe,oe,!0)}}e:{if(H=j?Xn(j):window,B=H.nodeName&&H.nodeName.toLowerCase(),B==="select"||B==="input"&&H.type==="file")var se=Ng;else if(wi(H))if(Ig)se=VS;else{se=HS;var Te=jS}else B=H.nodeName,!B||B.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?j&&El(j.elementType)&&(se=Ng):se=BS;if(se&&(se=se(t,j))){$t(Q,se,r,G);break e}Te&&Te(t,H,j),t==="focusout"&&j&&H.type==="number"&&j.memoizedProps.value!=null&&ns(H,"number",H.value)}switch(Te=j?Xn(j):window,t){case"focusin":(wi(Te)||Te.contentEditable==="true")&&(ha=Te,Hh=j,Ol=null);break;case"focusout":Ol=Hh=ha=null;break;case"mousedown":Bh=!0;break;case"contextmenu":case"mouseup":case"dragend":Bh=!1,Pg(Q,r,G);break;case"selectionchange":if(GS)break;case"keydown":case"keyup":Pg(Q,r,G)}var ae;if(u)e:{switch(t){case"compositionstart":var ce="onCompositionStart";break e;case"compositionend":ce="onCompositionEnd";break e;case"compositionupdate":ce="onCompositionUpdate";break e}ce=void 0}else st?ee(t,r)&&(ce="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(ce="onCompositionStart");ce&&(E&&r.locale!=="ko"&&(st||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&st&&(ae=bl()):(Wn=G,is="value"in Wn?Wn.value:Wn.textContent,st=!0)),Te=dc(j,ce),0<Te.length&&(ce=new Al(ce,t,null,r,G),Q.push({event:ce,listeners:Te}),ae?ce.data=ae:(ae=je(r),ae!==null&&(ce.data=ae)))),(ae=m?Ie(t,r):Rt(t,r))&&(ce=dc(j,"onBeforeInput"),0<ce.length&&(Te=new Al("onBeforeInput","beforeinput",null,r,G),Q.push({event:Te,listeners:ce}),Te.data=ae)),AE(Q,t,j,r,G)}ly(Q,n)})}function so(t,n,r){return{instance:t,listener:n,currentTarget:r}}function dc(t,n){for(var r=n+"Capture",l=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=ir(t,r),c!=null&&l.unshift(so(t,c,f)),c=ir(t,n),c!=null&&l.push(so(t,c,f))),t.tag===3)return l;t=t.return}return[]}function La(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function uy(t,n,r,l,c){for(var f=n._reactName,_=[];r!==null&&r!==l;){var S=r,w=S.alternate,j=S.stateNode;if(S=S.tag,w!==null&&w===l)break;S!==5&&S!==26&&S!==27||j===null||(w=j,c?(j=ir(r,f),j!=null&&_.unshift(so(r,j,w))):c||(j=ir(r,f),j!=null&&_.push(so(r,j,w)))),r=r.return}_.length!==0&&t.push({event:n,listeners:_})}var OE=/\r\n?/g,DE=/\u0000|\uFFFD/g;function cy(t){return(typeof t=="string"?t:""+t).replace(OE,`
`).replace(DE,"")}function hy(t,n){return n=cy(n),cy(t)===n}function pc(){}function Ye(t,n,r,l,c,f){switch(r){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||yn(t,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&yn(t,""+l);break;case"className":Qn(t,"class",l);break;case"tabIndex":Qn(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Qn(t,r,l);break;case"style":Sl(t,l,f);break;case"data":if(n!=="object"){Qn(t,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||r!=="href")){t.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(r);break}l=ia(""+l),t.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(r==="formAction"?(n!=="input"&&Ye(t,n,"name",c.name,c,null),Ye(t,n,"formEncType",c.formEncType,c,null),Ye(t,n,"formMethod",c.formMethod,c,null),Ye(t,n,"formTarget",c.formTarget,c,null)):(Ye(t,n,"encType",c.encType,c,null),Ye(t,n,"method",c.method,c,null),Ye(t,n,"target",c.target,c,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(r);break}l=ia(""+l),t.setAttribute(r,l);break;case"onClick":l!=null&&(t.onclick=pc);break;case"onScroll":l!=null&&Ae("scroll",t);break;case"onScrollEnd":l!=null&&Ae("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(c.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}r=ia(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,""+l):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":l===!0?t.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,l):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(r,l):t.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(r):t.setAttribute(r,l);break;case"popover":Ae("beforetoggle",t),Ae("toggle",t),ts(t,"popover",l);break;case"xlinkActuate":Ut(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ut(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ut(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ut(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ut(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ut(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ut(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ut(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ut(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ts(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Mh.get(r)||r,ts(t,r,l))}}function hd(t,n,r,l,c,f){switch(r){case"style":Sl(t,l,f);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(c.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"children":typeof l=="string"?yn(t,l):(typeof l=="number"||typeof l=="bigint")&&yn(t,""+l);break;case"onScroll":l!=null&&Ae("scroll",t);break;case"onScrollEnd":l!=null&&Ae("scrollend",t);break;case"onClick":l!=null&&(t.onclick=pc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!$r.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(c=r.endsWith("Capture"),n=r.slice(2,c?r.length-7:void 0),f=t[gt]||null,f=f!=null?f[r]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof l=="function")){typeof f!="function"&&f!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(n,l,c);break e}r in t?t[r]=l:l===!0?t.setAttribute(r,""):ts(t,r,l)}}}function jt(t,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ae("error",t),Ae("load",t);var l=!1,c=!1,f;for(f in r)if(r.hasOwnProperty(f)){var _=r[f];if(_!=null)switch(f){case"src":l=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Ye(t,n,f,_,r,null)}}c&&Ye(t,n,"srcSet",r.srcSet,r,null),l&&Ye(t,n,"src",r.src,r,null);return;case"input":Ae("invalid",t);var S=f=_=c=null,w=null,j=null;for(l in r)if(r.hasOwnProperty(l)){var G=r[l];if(G!=null)switch(l){case"name":c=G;break;case"type":_=G;break;case"checked":w=G;break;case"defaultChecked":j=G;break;case"value":f=G;break;case"defaultValue":S=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(a(137,n));break;default:Ye(t,n,l,G,r,null)}}er(t,f,S,w,j,_,c,!1),na(t);return;case"select":Ae("invalid",t),l=_=f=null;for(c in r)if(r.hasOwnProperty(c)&&(S=r[c],S!=null))switch(c){case"value":f=S;break;case"defaultValue":_=S;break;case"multiple":l=S;default:Ye(t,n,c,S,r,null)}n=f,r=_,t.multiple=!!l,n!=null?yi(t,!!l,n,!1):r!=null&&yi(t,!!l,r,!0);return;case"textarea":Ae("invalid",t),f=c=l=null;for(_ in r)if(r.hasOwnProperty(_)&&(S=r[_],S!=null))switch(_){case"value":l=S;break;case"defaultValue":c=S;break;case"children":f=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(a(91));break;default:Ye(t,n,_,S,r,null)}tr(t,l,c,f),na(t);return;case"option":for(w in r)if(r.hasOwnProperty(w)&&(l=r[w],l!=null))switch(w){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ye(t,n,w,l,r,null)}return;case"dialog":Ae("beforetoggle",t),Ae("toggle",t),Ae("cancel",t),Ae("close",t);break;case"iframe":case"object":Ae("load",t);break;case"video":case"audio":for(l=0;l<io.length;l++)Ae(io[l],t);break;case"image":Ae("error",t),Ae("load",t);break;case"details":Ae("toggle",t);break;case"embed":case"source":case"link":Ae("error",t),Ae("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in r)if(r.hasOwnProperty(j)&&(l=r[j],l!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Ye(t,n,j,l,r,null)}return;default:if(El(n)){for(G in r)r.hasOwnProperty(G)&&(l=r[G],l!==void 0&&hd(t,n,G,l,r,void 0));return}}for(S in r)r.hasOwnProperty(S)&&(l=r[S],l!=null&&Ye(t,n,S,l,r,null))}function xE(t,n,r,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,_=null,S=null,w=null,j=null,G=null;for(B in r){var Q=r[B];if(r.hasOwnProperty(B)&&Q!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":w=Q;default:l.hasOwnProperty(B)||Ye(t,n,B,null,l,Q)}}for(var H in l){var B=l[H];if(Q=r[H],l.hasOwnProperty(H)&&(B!=null||Q!=null))switch(H){case"type":f=B;break;case"name":c=B;break;case"checked":j=B;break;case"defaultChecked":G=B;break;case"value":_=B;break;case"defaultValue":S=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(a(137,n));break;default:B!==Q&&Ye(t,n,H,B,l,Q)}}an(t,_,S,w,j,G,f,c);return;case"select":B=_=S=H=null;for(f in r)if(w=r[f],r.hasOwnProperty(f)&&w!=null)switch(f){case"value":break;case"multiple":B=w;default:l.hasOwnProperty(f)||Ye(t,n,f,null,l,w)}for(c in l)if(f=l[c],w=r[c],l.hasOwnProperty(c)&&(f!=null||w!=null))switch(c){case"value":H=f;break;case"defaultValue":S=f;break;case"multiple":_=f;default:f!==w&&Ye(t,n,c,f,l,w)}n=S,r=_,l=B,H!=null?yi(t,!!r,H,!1):!!l!=!!r&&(n!=null?yi(t,!!r,n,!0):yi(t,!!r,r?[]:"",!1));return;case"textarea":B=H=null;for(S in r)if(c=r[S],r.hasOwnProperty(S)&&c!=null&&!l.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:Ye(t,n,S,null,l,c)}for(_ in l)if(c=l[_],f=r[_],l.hasOwnProperty(_)&&(c!=null||f!=null))switch(_){case"value":H=c;break;case"defaultValue":B=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(a(91));break;default:c!==f&&Ye(t,n,_,c,l,f)}Ge(t,H,B);return;case"option":for(var fe in r)if(H=r[fe],r.hasOwnProperty(fe)&&H!=null&&!l.hasOwnProperty(fe))switch(fe){case"selected":t.selected=!1;break;default:Ye(t,n,fe,null,l,H)}for(w in l)if(H=l[w],B=r[w],l.hasOwnProperty(w)&&H!==B&&(H!=null||B!=null))switch(w){case"selected":t.selected=H&&typeof H!="function"&&typeof H!="symbol";break;default:Ye(t,n,w,H,l,B)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in r)H=r[oe],r.hasOwnProperty(oe)&&H!=null&&!l.hasOwnProperty(oe)&&Ye(t,n,oe,null,l,H);for(j in l)if(H=l[j],B=r[j],l.hasOwnProperty(j)&&H!==B&&(H!=null||B!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(a(137,n));break;default:Ye(t,n,j,H,l,B)}return;default:if(El(n)){for(var Xe in r)H=r[Xe],r.hasOwnProperty(Xe)&&H!==void 0&&!l.hasOwnProperty(Xe)&&hd(t,n,Xe,void 0,l,H);for(G in l)H=l[G],B=r[G],!l.hasOwnProperty(G)||H===B||H===void 0&&B===void 0||hd(t,n,G,H,l,B);return}}for(var L in r)H=r[L],r.hasOwnProperty(L)&&H!=null&&!l.hasOwnProperty(L)&&Ye(t,n,L,null,l,H);for(Q in l)H=l[Q],B=r[Q],!l.hasOwnProperty(Q)||H===B||H==null&&B==null||Ye(t,n,Q,H,l,B)}var fd=null,dd=null;function gc(t){return t.nodeType===9?t:t.ownerDocument}function fy(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function dy(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function pd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var gd=null;function ME(){var t=window.event;return t&&t.type==="popstate"?t===gd?!1:(gd=t,!0):(gd=null,!1)}var py=typeof setTimeout=="function"?setTimeout:void 0,kE=typeof clearTimeout=="function"?clearTimeout:void 0,gy=typeof Promise=="function"?Promise:void 0,LE=typeof queueMicrotask=="function"?queueMicrotask:typeof gy<"u"?function(t){return gy.resolve(null).then(t).catch(UE)}:py;function UE(t){setTimeout(function(){throw t})}function Ss(t){return t==="head"}function my(t,n){var r=n,l=0,c=0;do{var f=r.nextSibling;if(t.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"){if(0<l&&8>l){r=l;var _=t.ownerDocument;if(r&1&&ro(_.documentElement),r&2&&ro(_.body),r&4)for(r=_.head,ro(r),_=r.firstChild;_;){var S=_.nextSibling,w=_.nodeName;_[Ks]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&_.rel.toLowerCase()==="stylesheet"||r.removeChild(_),_=S}}if(c===0){t.removeChild(f),po(n);return}c--}else r==="$"||r==="$?"||r==="$!"?c++:l=r.charCodeAt(0)-48;else l=0;r=f}while(r);po(n)}function md(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":md(r),Ws(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function PE(t,n,r,l){for(;t.nodeType===1;){var c=r;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Ks])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Un(t.nextSibling),t===null)break}return null}function zE(t,n,r){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=Un(t.nextSibling),t===null))return null;return t}function _d(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function jE(t,n){var r=t.ownerDocument;if(t.data!=="$?"||r.readyState==="complete")n();else{var l=function(){n(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Un(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var yd=null;function _y(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return t;n--}else r==="/$"&&n++}t=t.previousSibling}return null}function yy(t,n,r){switch(n=gc(r),t){case"html":if(t=n.documentElement,!t)throw Error(a(452));return t;case"head":if(t=n.head,!t)throw Error(a(453));return t;case"body":if(t=n.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function ro(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ws(t)}var Nn=new Map,vy=new Set;function mc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var zi=K.d;K.d={f:HE,r:BE,D:VE,C:qE,L:GE,m:FE,X:XE,S:YE,M:QE};function HE(){var t=zi.f(),n=lc();return t||n}function BE(t){var n=Yn(t);n!==null&&n.tag===5&&n.type==="form"?jm(n):zi.r(t)}var Ua=typeof document>"u"?null:document;function Sy(t,n,r){var l=Ua;if(l&&typeof n=="string"&&n){var c=mt(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof r=="string"&&(c+='[crossorigin="'+r+'"]'),vy.has(c)||(vy.add(c),t={rel:t,crossOrigin:r,href:n},l.querySelector(c)===null&&(n=l.createElement("link"),jt(n,"link",t),ft(n),l.head.appendChild(n)))}}function VE(t){zi.D(t),Sy("dns-prefetch",t,null)}function qE(t,n){zi.C(t,n),Sy("preconnect",t,n)}function GE(t,n,r){zi.L(t,n,r);var l=Ua;if(l&&t&&n){var c='link[rel="preload"][as="'+mt(n)+'"]';n==="image"&&r&&r.imageSrcSet?(c+='[imagesrcset="'+mt(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(c+='[imagesizes="'+mt(r.imageSizes)+'"]')):c+='[href="'+mt(t)+'"]';var f=c;switch(n){case"style":f=Pa(t);break;case"script":f=za(t)}Nn.has(f)||(t=T({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:t,as:n},r),Nn.set(f,t),l.querySelector(c)!==null||n==="style"&&l.querySelector(ao(f))||n==="script"&&l.querySelector(lo(f))||(n=l.createElement("link"),jt(n,"link",t),ft(n),l.head.appendChild(n)))}}function FE(t,n){zi.m(t,n);var r=Ua;if(r&&t){var l=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+mt(l)+'"][href="'+mt(t)+'"]',f=c;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=za(t)}if(!Nn.has(f)&&(t=T({rel:"modulepreload",href:t},n),Nn.set(f,t),r.querySelector(c)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(lo(f)))return}l=r.createElement("link"),jt(l,"link",t),ft(l),r.head.appendChild(l)}}}function YE(t,n,r){zi.S(t,n,r);var l=Ua;if(l&&t){var c=Ft(l).hoistableStyles,f=Pa(t);n=n||"default";var _=c.get(f);if(!_){var S={loading:0,preload:null};if(_=l.querySelector(ao(f)))S.loading=5;else{t=T({rel:"stylesheet",href:t,"data-precedence":n},r),(r=Nn.get(f))&&vd(t,r);var w=_=l.createElement("link");ft(w),jt(w,"link",t),w._p=new Promise(function(j,G){w.onload=j,w.onerror=G}),w.addEventListener("load",function(){S.loading|=1}),w.addEventListener("error",function(){S.loading|=2}),S.loading|=4,_c(_,n,l)}_={type:"stylesheet",instance:_,count:1,state:S},c.set(f,_)}}}function XE(t,n){zi.X(t,n);var r=Ua;if(r&&t){var l=Ft(r).hoistableScripts,c=za(t),f=l.get(c);f||(f=r.querySelector(lo(c)),f||(t=T({src:t,async:!0},n),(n=Nn.get(c))&&Sd(t,n),f=r.createElement("script"),ft(f),jt(f,"link",t),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(c,f))}}function QE(t,n){zi.M(t,n);var r=Ua;if(r&&t){var l=Ft(r).hoistableScripts,c=za(t),f=l.get(c);f||(f=r.querySelector(lo(c)),f||(t=T({src:t,async:!0,type:"module"},n),(n=Nn.get(c))&&Sd(t,n),f=r.createElement("script"),ft(f),jt(f,"link",t),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(c,f))}}function Ey(t,n,r,l){var c=(c=ge.current)?mc(c):null;if(!c)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=Pa(r.href),r=Ft(c).hoistableStyles,l=r.get(n),l||(l={type:"style",instance:null,count:0,state:null},r.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=Pa(r.href);var f=Ft(c).hoistableStyles,_=f.get(t);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=c.querySelector(ao(t)))&&!f._p&&(_.instance=f,_.state.loading=5),Nn.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Nn.set(t,r),f||KE(c,t,r,_.state))),n&&l===null)throw Error(a(528,""));return _}if(n&&l!==null)throw Error(a(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=za(r),r=Ft(c).hoistableScripts,l=r.get(n),l||(l={type:"script",instance:null,count:0,state:null},r.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function Pa(t){return'href="'+mt(t)+'"'}function ao(t){return'link[rel="stylesheet"]['+t+"]"}function Ty(t){return T({},t,{"data-precedence":t.precedence,precedence:null})}function KE(t,n,r,l){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=t.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),jt(n,"link",r),ft(n),t.head.appendChild(n))}function za(t){return'[src="'+mt(t)+'"]'}function lo(t){return"script[async]"+t}function by(t,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var l=t.querySelector('style[data-href~="'+mt(r.href)+'"]');if(l)return n.instance=l,ft(l),l;var c=T({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),ft(l),jt(l,"style",c),_c(l,r.precedence,t),n.instance=l;case"stylesheet":c=Pa(r.href);var f=t.querySelector(ao(c));if(f)return n.state.loading|=4,n.instance=f,ft(f),f;l=Ty(r),(c=Nn.get(c))&&vd(l,c),f=(t.ownerDocument||t).createElement("link"),ft(f);var _=f;return _._p=new Promise(function(S,w){_.onload=S,_.onerror=w}),jt(f,"link",l),n.state.loading|=4,_c(f,r.precedence,t),n.instance=f;case"script":return f=za(r.src),(c=t.querySelector(lo(f)))?(n.instance=c,ft(c),c):(l=r,(c=Nn.get(f))&&(l=T({},r),Sd(l,c)),t=t.ownerDocument||t,c=t.createElement("script"),ft(c),jt(c,"link",l),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,_c(l,r.precedence,t));return n.instance}function _c(t,n,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=l.length?l[l.length-1]:null,f=c,_=0;_<l.length;_++){var S=l[_];if(S.dataset.precedence===n)f=S;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(t,n.firstChild))}function vd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Sd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var yc=null;function wy(t,n,r){if(yc===null){var l=new Map,c=yc=new Map;c.set(r,l)}else c=yc,l=c.get(r),l||(l=new Map,c.set(r,l));if(l.has(t))return l;for(l.set(t,null),r=r.getElementsByTagName(t),c=0;c<r.length;c++){var f=r[c];if(!(f[Ks]||f[Et]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var S=l.get(_);S?S.push(f):l.set(_,[f])}}return l}function Cy(t,n,r){t=t.ownerDocument||t,t.head.insertBefore(r,n==="title"?t.querySelector("head > title"):null)}function WE(t,n,r){if(r===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Ay(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var oo=null;function ZE(){}function $E(t,n,r){if(oo===null)throw Error(a(475));var l=oo;if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Pa(r.href),f=t.querySelector(ao(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=vc.bind(l),t.then(l,l)),n.state.loading|=4,n.instance=f,ft(f);return}f=t.ownerDocument||t,r=Ty(r),(c=Nn.get(c))&&vd(r,c),f=f.createElement("link"),ft(f);var _=f;_._p=new Promise(function(S,w){_.onload=S,_.onerror=w}),jt(f,"link",r),n.instance=f}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(l.count++,n=vc.bind(l),t.addEventListener("load",n),t.addEventListener("error",n))}}function JE(){if(oo===null)throw Error(a(475));var t=oo;return t.stylesheets&&t.count===0&&Ed(t,t.stylesheets),0<t.count?function(n){var r=setTimeout(function(){if(t.stylesheets&&Ed(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(r)}}:null}function vc(){if(this.count--,this.count===0){if(this.stylesheets)Ed(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Sc=null;function Ed(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Sc=new Map,n.forEach(eT,t),Sc=null,vc.call(t))}function eT(t,n){if(!(n.state.loading&4)){var r=Sc.get(t);if(r)var l=r.get(null);else{r=new Map,Sc.set(t,r);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var _=c[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(r.set(_.dataset.precedence,_),l=_)}l&&r.set(null,l)}c=n.instance,_=c.getAttribute("data-precedence"),f=r.get(_)||l,f===l&&r.set(null,c),r.set(_,c),this.count++,l=vc.bind(this),c.addEventListener("load",l),c.addEventListener("error",l),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var uo={$$typeof:pe,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function tT(t,n,r,l,c,f,_,S){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=di(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=di(0),this.hiddenUpdates=di(null),this.identifierPrefix=l,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function Ry(t,n,r,l,c,f,_,S,w,j,G,Q){return t=new tT(t,n,r,_,S,w,j,Q),n=1,f===!0&&(n|=24),f=on(3,null,null,n),t.current=f,f.stateNode=t,n=tf(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:l,isDehydrated:r,cache:n},af(f),t}function Ny(t){return t?(t=ga,t):ga}function Iy(t,n,r,l,c,f){c=Ny(c),l.context===null?l.context=c:l.pendingContext=c,l=ls(n),l.payload={element:r},f=f===void 0?null:f,f!==null&&(l.callback=f),r=os(t,l,n),r!==null&&(dn(r,t,n),jl(r,t,n))}function Oy(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<n?r:n}}function Td(t,n){Oy(t,n),(t=t.alternate)&&Oy(t,n)}function Dy(t){if(t.tag===13){var n=pa(t,67108864);n!==null&&dn(n,t,67108864),Td(t,67108864)}}var Ec=!0;function nT(t,n,r,l){var c=D.T;D.T=null;var f=K.p;try{K.p=2,bd(t,n,r,l)}finally{K.p=f,D.T=c}}function iT(t,n,r,l){var c=D.T;D.T=null;var f=K.p;try{K.p=8,bd(t,n,r,l)}finally{K.p=f,D.T=c}}function bd(t,n,r,l){if(Ec){var c=wd(l);if(c===null)cd(t,n,l,Tc,r),My(t,l);else if(rT(c,t,n,r,l))l.stopPropagation();else if(My(t,l),n&4&&-1<sT.indexOf(t)){for(;c!==null;){var f=Yn(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Dn(f.pendingLanes);if(_!==0){var S=f;for(S.pendingLanes|=2,S.entangledLanes|=2;_;){var w=1<<31-Vt(_);S.entanglements[1]|=w,_&=~w}ri(f),(Ve&6)===0&&(rc=mn()+500,no(0))}}break;case 13:S=pa(f,2),S!==null&&dn(S,f,2),lc(),Td(f,2)}if(f=wd(l),f===null&&cd(t,n,l,Tc,r),f===c)break;c=f}c!==null&&l.stopPropagation()}else cd(t,n,l,null,r)}}function wd(t){return t=vn(t),Cd(t)}var Tc=null;function Cd(t){if(Tc=null,t=es(t),t!==null){var n=h(t);if(n===null)t=null;else{var r=n.tag;if(r===13){if(t=d(n),t!==null)return t;t=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Tc=t,null}function xy(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Rh()){case ul:return 2;case Qr:return 8;case qs:case Nh:return 32;case Kr:return 268435456;default:return 32}default:return 32}}var Ad=!1,Es=null,Ts=null,bs=null,co=new Map,ho=new Map,ws=[],sT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function My(t,n){switch(t){case"focusin":case"focusout":Es=null;break;case"dragenter":case"dragleave":Ts=null;break;case"mouseover":case"mouseout":bs=null;break;case"pointerover":case"pointerout":co.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ho.delete(n.pointerId)}}function fo(t,n,r,l,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:r,eventSystemFlags:l,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Yn(n),n!==null&&Dy(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function rT(t,n,r,l,c){switch(n){case"focusin":return Es=fo(Es,t,n,r,l,c),!0;case"dragenter":return Ts=fo(Ts,t,n,r,l,c),!0;case"mouseover":return bs=fo(bs,t,n,r,l,c),!0;case"pointerover":var f=c.pointerId;return co.set(f,fo(co.get(f)||null,t,n,r,l,c)),!0;case"gotpointercapture":return f=c.pointerId,ho.set(f,fo(ho.get(f)||null,t,n,r,l,c)),!0}return!1}function ky(t){var n=es(t.target);if(n!==null){var r=h(n);if(r!==null){if(n=r.tag,n===13){if(n=d(r),n!==null){t.blockedOn=n,lu(t.priority,function(){if(r.tag===13){var l=fn();l=Qs(l);var c=pa(r,l);c!==null&&dn(c,r,l),Td(r,l)}});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var r=wd(t.nativeEvent);if(r===null){r=t.nativeEvent;var l=new r.constructor(r.type,r);vi=l,r.target.dispatchEvent(l),vi=null}else return n=Yn(r),n!==null&&Dy(n),t.blockedOn=r,!1;n.shift()}return!0}function Ly(t,n,r){bc(t)&&r.delete(n)}function aT(){Ad=!1,Es!==null&&bc(Es)&&(Es=null),Ts!==null&&bc(Ts)&&(Ts=null),bs!==null&&bc(bs)&&(bs=null),co.forEach(Ly),ho.forEach(Ly)}function wc(t,n){t.blockedOn===n&&(t.blockedOn=null,Ad||(Ad=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,aT)))}var Cc=null;function Uy(t){Cc!==t&&(Cc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Cc===t&&(Cc=null);for(var n=0;n<t.length;n+=3){var r=t[n],l=t[n+1],c=t[n+2];if(typeof l!="function"){if(Cd(l||r)===null)continue;break}var f=Yn(r);f!==null&&(t.splice(n,3),n-=3,Cf(f,{pending:!0,data:c,method:r.method,action:l},l,c))}}))}function po(t){function n(w){return wc(w,t)}Es!==null&&wc(Es,t),Ts!==null&&wc(Ts,t),bs!==null&&wc(bs,t),co.forEach(n),ho.forEach(n);for(var r=0;r<ws.length;r++){var l=ws[r];l.blockedOn===t&&(l.blockedOn=null)}for(;0<ws.length&&(r=ws[0],r.blockedOn===null);)ky(r),r.blockedOn===null&&ws.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var c=r[l],f=r[l+1],_=c[gt]||null;if(typeof f=="function")_||Uy(r);else if(_){var S=null;if(f&&f.hasAttribute("formAction")){if(c=f,_=f[gt]||null)S=_.formAction;else if(Cd(c)!==null)continue}else S=_.action;typeof S=="function"?r[l+1]=S:(r.splice(l,3),l-=3),Uy(r)}}}function Rd(t){this._internalRoot=t}Ac.prototype.render=Rd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(a(409));var r=n.current,l=fn();Iy(r,l,t,n,null,null)},Ac.prototype.unmount=Rd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Iy(t.current,2,null,t,null,null),lc(),n[_n]=null}};function Ac(t){this._internalRoot=t}Ac.prototype.unstable_scheduleHydration=function(t){if(t){var n=$i();t={blockedOn:null,target:t,priority:n};for(var r=0;r<ws.length&&n!==0&&n<ws[r].priority;r++);ws.splice(r,0,t),r===0&&ky(t)}};var Py=e.version;if(Py!=="19.1.1")throw Error(a(527,Py,"19.1.1"));K.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=v(n),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var lT={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rc.isDisabled&&Rc.supportsFiber)try{ot=Rc.inject(lT),He=Rc}catch{}}return mo.createRoot=function(t,n){if(!o(t))throw Error(a(299));var r=!1,l="",c=Jm,f=e_,_=t_,S=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(S=n.unstable_transitionCallbacks)),n=Ry(t,1,!1,null,null,r,l,c,f,_,S,null),t[_n]=n.current,ud(t),new Rd(n)},mo.hydrateRoot=function(t,n,r){if(!o(t))throw Error(a(299));var l=!1,c="",f=Jm,_=e_,S=t_,w=null,j=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(_=r.onCaughtError),r.onRecoverableError!==void 0&&(S=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(w=r.unstable_transitionCallbacks),r.formState!==void 0&&(j=r.formState)),n=Ry(t,1,!0,n,r??null,l,c,f,_,S,w,j),n.context=Ny(null),r=n.current,l=fn(),l=Qs(l),c=ls(l),c.callback=null,os(r,c,l),r=l,n.current.lanes=r,pi(n,r),ri(n),t[_n]=n.current,ud(t),new Ac(n)},mo.version="19.1.1",mo}var Xy;function vT(){if(Xy)return Od.exports;Xy=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Od.exports=yT(),Od.exports}var ST=vT();const ET=()=>{};var Qy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J=function(s,e){if(!s)throw nl(e)},nl=function(s){return new Error("Firebase Database ("+w0.SDK_VERSION+") INTERNAL ASSERT FAILED: "+s)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0=function(s){const e=[];let i=0;for(let a=0;a<s.length;a++){let o=s.charCodeAt(a);o<128?e[i++]=o:o<2048?(e[i++]=o>>6|192,e[i++]=o&63|128):(o&64512)===55296&&a+1<s.length&&(s.charCodeAt(a+1)&64512)===56320?(o=65536+((o&1023)<<10)+(s.charCodeAt(++a)&1023),e[i++]=o>>18|240,e[i++]=o>>12&63|128,e[i++]=o>>6&63|128,e[i++]=o&63|128):(e[i++]=o>>12|224,e[i++]=o>>6&63|128,e[i++]=o&63|128)}return e},TT=function(s){const e=[];let i=0,a=0;for(;i<s.length;){const o=s[i++];if(o<128)e[a++]=String.fromCharCode(o);else if(o>191&&o<224){const h=s[i++];e[a++]=String.fromCharCode((o&31)<<6|h&63)}else if(o>239&&o<365){const h=s[i++],d=s[i++],g=s[i++],v=((o&7)<<18|(h&63)<<12|(d&63)<<6|g&63)-65536;e[a++]=String.fromCharCode(55296+(v>>10)),e[a++]=String.fromCharCode(56320+(v&1023))}else{const h=s[i++],d=s[i++];e[a++]=String.fromCharCode((o&15)<<12|(h&63)<<6|d&63)}}return e.join("")},bp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let o=0;o<s.length;o+=3){const h=s[o],d=o+1<s.length,g=d?s[o+1]:0,v=o+2<s.length,y=v?s[o+2]:0,T=h>>2,A=(h&3)<<4|g>>4;let C=(g&15)<<2|y>>6,X=y&63;v||(X=64,d||(C=64)),a.push(i[T],i[A],i[C],i[X])}return a.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(C0(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):TT(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let o=0;o<s.length;){const h=i[s.charAt(o++)],g=o<s.length?i[s.charAt(o)]:0;++o;const y=o<s.length?i[s.charAt(o)]:64;++o;const A=o<s.length?i[s.charAt(o)]:64;if(++o,h==null||g==null||y==null||A==null)throw new bT;const C=h<<2|g>>4;if(a.push(C),y!==64){const X=g<<4&240|y>>2;if(a.push(X),A!==64){const F=y<<6&192|A;a.push(F)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class bT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const A0=function(s){const e=C0(s);return bp.encodeByteArray(e,!0)},Hc=function(s){return A0(s).replace(/\./g,"")},Bc=function(s){try{return bp.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(s){return R0(void 0,s)}function R0(s,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const i=e;return new Date(i.getTime());case Object:s===void 0&&(s={});break;case Array:s=[];break;default:return e}for(const i in e)!e.hasOwnProperty(i)||!CT(i)||(s[i]=R0(s[i],e[i]));return s}function CT(s){return s!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT=()=>AT().__FIREBASE_DEFAULTS__,NT=()=>{if(typeof process>"u"||typeof Qy>"u")return;const s=Qy.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},IT=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&Bc(s[1]);return e&&JSON.parse(e)},wp=()=>{try{return ET()||RT()||NT()||IT()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},N0=s=>wp()?.emulatorHosts?.[s],I0=s=>{const e=N0(s);if(!e)return;const i=e.lastIndexOf(":");if(i<=0||i+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const a=parseInt(e.substring(i+1),10);return e[0]==="["?[e.substring(1,i-1),a]:[e.substring(0,i),a]},O0=()=>wp()?.config,D0=s=>wp()?.[`_${s}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}wrapCallback(e){return(i,a)=>{i?this.reject(i):this.resolve(a),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(i):e(i,a))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Cp(s){return(await fetch(s,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(s,e){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},a=e||"demo-project",o=s.iat||0,h=s.sub||s.user_id;if(!h)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d={iss:`https://securetoken.google.com/${a}`,aud:a,iat:o,exp:o+3600,auth_time:o,sub:h,user_id:h,firebase:{sign_in_provider:"custom",identities:{}},...s};return[Hc(JSON.stringify(i)),Hc(JSON.stringify(d)),""].join(".")}const Eo={};function OT(){const s={prod:[],emulator:[]};for(const e of Object.keys(Eo))Eo[e]?s.emulator.push(e):s.prod.push(e);return s}function DT(s){let e=document.getElementById(s),i=!1;return e||(e=document.createElement("div"),e.setAttribute("id",s),i=!0),{created:i,element:e}}let Ky=!1;function Ap(s,e){if(typeof window>"u"||typeof document>"u"||!qr(window.location.host)||Eo[s]===e||Eo[s]||Ky)return;Eo[s]=e;function i(C){return`__firebase__banner__${C}`}const a="__firebase__banner",h=OT().prod.length>0;function d(){const C=document.getElementById(a);C&&C.remove()}function g(C){C.style.display="flex",C.style.background="#7faaf0",C.style.position="fixed",C.style.bottom="5px",C.style.left="5px",C.style.padding=".5em",C.style.borderRadius="5px",C.style.alignItems="center"}function v(C,X){C.setAttribute("width","24"),C.setAttribute("id",X),C.setAttribute("height","24"),C.setAttribute("viewBox","0 0 24 24"),C.setAttribute("fill","none"),C.style.marginLeft="-6px"}function y(){const C=document.createElement("span");return C.style.cursor="pointer",C.style.marginLeft="16px",C.style.fontSize="24px",C.innerHTML=" &times;",C.onclick=()=>{Ky=!0,d()},C}function T(C,X){C.setAttribute("id",X),C.innerText="Learn more",C.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",C.setAttribute("target","__blank"),C.style.paddingLeft="5px",C.style.textDecoration="underline"}function A(){const C=DT(a),X=i("text"),F=document.getElementById(X)||document.createElement("span"),Z=i("learnmore"),te=document.getElementById(Z)||document.createElement("a"),re=i("preprendIcon"),ue=document.getElementById(re)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(C.created){const pe=C.element;g(pe),T(te,Z);const ve=y();v(ue,re),pe.append(ue,F,te,ve),document.body.appendChild(pe)}h?(F.innerText="Preview backend disconnected.",ue.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ue.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,F.innerText="Preview backend running in this workspace."),F.setAttribute("id",X)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",A):A()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Wt())}function xT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function MT(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function M0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kT(){const s=Wt();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function LT(){return w0.NODE_ADMIN===!0}function UT(){try{return typeof indexedDB=="object"}catch{return!1}}function PT(){return new Promise((s,e)=>{try{let i=!0;const a="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(a);o.onsuccess=()=>{o.result.close(),i||self.indexedDB.deleteDatabase(a),s(!0)},o.onupgradeneeded=()=>{i=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(i){e(i)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT="FirebaseError";class Ki extends Error{constructor(e,i,a){super(i),this.code=e,this.customData=a,this.name=zT,Object.setPrototypeOf(this,Ki.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Go.prototype.create)}}class Go{constructor(e,i,a){this.service=e,this.serviceName=i,this.errors=a}create(e,...i){const a=i[0]||{},o=`${this.service}/${e}`,h=this.errors[e],d=h?jT(h,a):"Error",g=`${this.serviceName}: ${d} (${o}).`;return new Ki(o,g,a)}}function jT(s,e){return s.replace(HT,(i,a)=>{const o=e[a];return o!=null?String(o):`<${a}?>`})}const HT=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(s){return JSON.parse(s)}function Lt(s){return JSON.stringify(s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0=function(s){let e={},i={},a={},o="";try{const h=s.split(".");e=Do(Bc(h[0])||""),i=Do(Bc(h[1])||""),o=h[2],a=i.d||{},delete i.d}catch{}return{header:e,claims:i,data:a,signature:o}},BT=function(s){const e=k0(s),i=e.claims;return!!i&&typeof i=="object"&&i.hasOwnProperty("iat")},VT=function(s){const e=k0(s).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(s,e){return Object.prototype.hasOwnProperty.call(s,e)}function Lr(s,e){if(Object.prototype.hasOwnProperty.call(s,e))return s[e]}function Zd(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}function Vc(s,e,i){const a={};for(const o in s)Object.prototype.hasOwnProperty.call(s,o)&&(a[o]=e.call(i,s[o],o,s));return a}function Ls(s,e){if(s===e)return!0;const i=Object.keys(s),a=Object.keys(e);for(const o of i){if(!a.includes(o))return!1;const h=s[o],d=e[o];if(Wy(h)&&Wy(d)){if(!Ls(h,d))return!1}else if(h!==d)return!1}for(const o of a)if(!i.includes(o))return!1;return!0}function Wy(s){return s!==null&&typeof s=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(s){const e=[];for(const[i,a]of Object.entries(s))Array.isArray(a)?a.forEach(o=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(i)+"="+encodeURIComponent(a));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,i){i||(i=0);const a=this.W_;if(typeof e=="string")for(let A=0;A<16;A++)a[A]=e.charCodeAt(i)<<24|e.charCodeAt(i+1)<<16|e.charCodeAt(i+2)<<8|e.charCodeAt(i+3),i+=4;else for(let A=0;A<16;A++)a[A]=e[i]<<24|e[i+1]<<16|e[i+2]<<8|e[i+3],i+=4;for(let A=16;A<80;A++){const C=a[A-3]^a[A-8]^a[A-14]^a[A-16];a[A]=(C<<1|C>>>31)&4294967295}let o=this.chain_[0],h=this.chain_[1],d=this.chain_[2],g=this.chain_[3],v=this.chain_[4],y,T;for(let A=0;A<80;A++){A<40?A<20?(y=g^h&(d^g),T=1518500249):(y=h^d^g,T=1859775393):A<60?(y=h&d|g&(h|d),T=2400959708):(y=h^d^g,T=3395469782);const C=(o<<5|o>>>27)+y+v+T+a[A]&4294967295;v=g,g=d,d=(h<<30|h>>>2)&4294967295,h=o,o=C}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+h&4294967295,this.chain_[2]=this.chain_[2]+d&4294967295,this.chain_[3]=this.chain_[3]+g&4294967295,this.chain_[4]=this.chain_[4]+v&4294967295}update(e,i){if(e==null)return;i===void 0&&(i=e.length);const a=i-this.blockSize;let o=0;const h=this.buf_;let d=this.inbuf_;for(;o<i;){if(d===0)for(;o<=a;)this.compress_(e,o),o+=this.blockSize;if(typeof e=="string"){for(;o<i;)if(h[d]=e.charCodeAt(o),++d,++o,d===this.blockSize){this.compress_(h),d=0;break}}else for(;o<i;)if(h[d]=e[o],++d,++o,d===this.blockSize){this.compress_(h),d=0;break}}this.inbuf_=d,this.total_+=i}digest(){const e=[];let i=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=i&255,i/=256;this.compress_(this.buf_);let a=0;for(let o=0;o<5;o++)for(let h=24;h>=0;h-=8)e[a]=this.chain_[o]>>h&255,++a;return e}}function GT(s,e){const i=new FT(s,e);return i.subscribe.bind(i)}class FT{constructor(e,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{e(this)}).catch(a=>{this.error(a)})}next(e){this.forEachObserver(i=>{i.next(e)})}error(e){this.forEachObserver(i=>{i.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,i,a){let o;if(e===void 0&&i===void 0&&a===void 0)throw new Error("Missing Observer.");YT(e,["next","error","complete"])?o=e:o={next:e,error:i,complete:a},o.next===void 0&&(o.next=kd),o.error===void 0&&(o.error=kd),o.complete===void 0&&(o.complete=kd);const h=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),h}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,e)}sendOne(e,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{i(this.observers[e])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function YT(s,e){if(typeof s!="object"||s===null)return!1;for(const i of e)if(i in s&&typeof s[i]=="function")return!0;return!1}function kd(){}function uh(s,e){return`${s} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT=function(s){const e=[];let i=0;for(let a=0;a<s.length;a++){let o=s.charCodeAt(a);if(o>=55296&&o<=56319){const h=o-55296;a++,J(a<s.length,"Surrogate pair missing trail surrogate.");const d=s.charCodeAt(a)-56320;o=65536+(h<<10)+d}o<128?e[i++]=o:o<2048?(e[i++]=o>>6|192,e[i++]=o&63|128):o<65536?(e[i++]=o>>12|224,e[i++]=o>>6&63|128,e[i++]=o&63|128):(e[i++]=o>>18|240,e[i++]=o>>12&63|128,e[i++]=o>>6&63|128,e[i++]=o&63|128)}return e},ch=function(s){let e=0;for(let i=0;i<s.length;i++){const a=s.charCodeAt(i);a<128?e++:a<2048?e+=2:a>=55296&&a<=56319?(e+=4,i++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(s){return s&&s._delegate?s._delegate:s}class Us{constructor(e,i,a){this.name=e,this.instanceFactory=i,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e,i){this.name=e,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const i=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(i)){const a=new il;if(this.instancesDeferred.set(i,a),this.isInitialized(i)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:i});o&&a.resolve(o)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(e){const i=this.normalizeInstanceIdentifier(e?.identifier),a=e?.optional??!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(a)return null;throw o}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(WT(e))try{this.getOrInitializeService({instanceIdentifier:Cr})}catch{}for(const[i,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);try{const h=this.getOrInitializeService({instanceIdentifier:o});a.resolve(h)}catch{}}}}clearInstance(e=Cr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...e.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Cr){return this.instances.has(e)}getOptions(e=Cr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:i={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:a,options:i});for(const[h,d]of this.instancesDeferred.entries()){const g=this.normalizeInstanceIdentifier(h);a===g&&d.resolve(o)}return o}onInit(e,i){const a=this.normalizeInstanceIdentifier(i),o=this.onInitCallbacks.get(a)??new Set;o.add(e),this.onInitCallbacks.set(a,o);const h=this.instances.get(a);return h&&e(h,a),()=>{o.delete(e)}}invokeOnInitCallbacks(e,i){const a=this.onInitCallbacks.get(i);if(a)for(const o of a)try{o(e,i)}catch{}}getOrInitializeService({instanceIdentifier:e,options:i={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:KT(e),options:i}),this.instances.set(e,a),this.instancesOptions.set(e,i),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}return a||null}normalizeInstanceIdentifier(e=Cr){return this.component?this.component.multipleInstances?e:Cr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KT(s){return s===Cr?void 0:s}function WT(s){return s.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const i=this.getProvider(e.name);if(i.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);i.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const i=new QT(e,this);return this.providers.set(e,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(Pe||(Pe={}));const $T={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},JT=Pe.INFO,eb={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},tb=(s,e,...i)=>{if(e<s.logLevel)return;const a=new Date().toISOString(),o=eb[e];if(o)console[o](`[${a}]  ${s.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hh{constructor(e){this.name=e,this._logLevel=JT,this._logHandler=tb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$T[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const nb=(s,e)=>e.some(i=>s instanceof i);let Zy,$y;function ib(){return Zy||(Zy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sb(){return $y||($y=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const L0=new WeakMap,$d=new WeakMap,U0=new WeakMap,Ld=new WeakMap,Np=new WeakMap;function rb(s){const e=new Promise((i,a)=>{const o=()=>{s.removeEventListener("success",h),s.removeEventListener("error",d)},h=()=>{i(xs(s.result)),o()},d=()=>{a(s.error),o()};s.addEventListener("success",h),s.addEventListener("error",d)});return e.then(i=>{i instanceof IDBCursor&&L0.set(i,s)}).catch(()=>{}),Np.set(e,s),e}function ab(s){if($d.has(s))return;const e=new Promise((i,a)=>{const o=()=>{s.removeEventListener("complete",h),s.removeEventListener("error",d),s.removeEventListener("abort",d)},h=()=>{i(),o()},d=()=>{a(s.error||new DOMException("AbortError","AbortError")),o()};s.addEventListener("complete",h),s.addEventListener("error",d),s.addEventListener("abort",d)});$d.set(s,e)}let Jd={get(s,e,i){if(s instanceof IDBTransaction){if(e==="done")return $d.get(s);if(e==="objectStoreNames")return s.objectStoreNames||U0.get(s);if(e==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return xs(s[e])},set(s,e,i){return s[e]=i,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function lb(s){Jd=s(Jd)}function ob(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...i){const a=s.call(Ud(this),e,...i);return U0.set(a,e.sort?e.sort():[e]),xs(a)}:sb().includes(s)?function(...e){return s.apply(Ud(this),e),xs(L0.get(this))}:function(...e){return xs(s.apply(Ud(this),e))}}function ub(s){return typeof s=="function"?ob(s):(s instanceof IDBTransaction&&ab(s),nb(s,ib())?new Proxy(s,Jd):s)}function xs(s){if(s instanceof IDBRequest)return rb(s);if(Ld.has(s))return Ld.get(s);const e=ub(s);return e!==s&&(Ld.set(s,e),Np.set(e,s)),e}const Ud=s=>Np.get(s);function cb(s,e,{blocked:i,upgrade:a,blocking:o,terminated:h}={}){const d=indexedDB.open(s,e),g=xs(d);return a&&d.addEventListener("upgradeneeded",v=>{a(xs(d.result),v.oldVersion,v.newVersion,xs(d.transaction),v)}),i&&d.addEventListener("blocked",v=>i(v.oldVersion,v.newVersion,v)),g.then(v=>{h&&v.addEventListener("close",()=>h()),o&&v.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),g}const hb=["get","getKey","getAll","getAllKeys","count"],fb=["put","add","delete","clear"],Pd=new Map;function Jy(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(Pd.get(e))return Pd.get(e);const i=e.replace(/FromIndex$/,""),a=e!==i,o=fb.includes(i);if(!(i in(a?IDBIndex:IDBObjectStore).prototype)||!(o||hb.includes(i)))return;const h=async function(d,...g){const v=this.transaction(d,o?"readwrite":"readonly");let y=v.store;return a&&(y=y.index(g.shift())),(await Promise.all([y[i](...g),o&&v.done]))[0]};return Pd.set(e,h),h}lb(s=>({...s,get:(e,i,a)=>Jy(e,i)||s.get(e,i,a),has:(e,i)=>!!Jy(e,i)||s.has(e,i)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(pb(i)){const a=i.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(i=>i).join(" ")}}function pb(s){return s.getComponent()?.type==="VERSION"}const ep="@firebase/app",ev="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=new hh("@firebase/app"),gb="@firebase/app-compat",mb="@firebase/analytics-compat",_b="@firebase/analytics",yb="@firebase/app-check-compat",vb="@firebase/app-check",Sb="@firebase/auth",Eb="@firebase/auth-compat",Tb="@firebase/database",bb="@firebase/data-connect",wb="@firebase/database-compat",Cb="@firebase/functions",Ab="@firebase/functions-compat",Rb="@firebase/installations",Nb="@firebase/installations-compat",Ib="@firebase/messaging",Ob="@firebase/messaging-compat",Db="@firebase/performance",xb="@firebase/performance-compat",Mb="@firebase/remote-config",kb="@firebase/remote-config-compat",Lb="@firebase/storage",Ub="@firebase/storage-compat",Pb="@firebase/firestore",zb="@firebase/ai",jb="@firebase/firestore-compat",Hb="firebase",Bb="12.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp="[DEFAULT]",Vb={[ep]:"fire-core",[gb]:"fire-core-compat",[_b]:"fire-analytics",[mb]:"fire-analytics-compat",[vb]:"fire-app-check",[yb]:"fire-app-check-compat",[Sb]:"fire-auth",[Eb]:"fire-auth-compat",[Tb]:"fire-rtdb",[bb]:"fire-data-connect",[wb]:"fire-rtdb-compat",[Cb]:"fire-fn",[Ab]:"fire-fn-compat",[Rb]:"fire-iid",[Nb]:"fire-iid-compat",[Ib]:"fire-fcm",[Ob]:"fire-fcm-compat",[Db]:"fire-perf",[xb]:"fire-perf-compat",[Mb]:"fire-rc",[kb]:"fire-rc-compat",[Lb]:"fire-gcs",[Ub]:"fire-gcs-compat",[Pb]:"fire-fst",[jb]:"fire-fst-compat",[zb]:"fire-vertex","fire-js":"fire-js",[Hb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc=new Map,qb=new Map,np=new Map;function tv(s,e){try{s.container.addComponent(e)}catch(i){Fi.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,i)}}function Ur(s){const e=s.name;if(np.has(e))return Fi.debug(`There were multiple attempts to register component ${e}.`),!1;np.set(e,s);for(const i of qc.values())tv(i,s);for(const i of qb.values())tv(i,s);return!0}function fh(s,e){const i=s.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),s.container.getProvider(e)}function zn(s){return s==null?!1:s.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ms=new Go("app","Firebase",Gb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e,i,a){this._isDeleted=!1,this._options={...e},this._config={...i},this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new Us("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ms.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=Bb;function P0(s,e={}){let i=s;typeof e!="object"&&(e={name:e});const a={name:tp,automaticDataCollectionEnabled:!0,...e},o=a.name;if(typeof o!="string"||!o)throw Ms.create("bad-app-name",{appName:String(o)});if(i||(i=O0()),!i)throw Ms.create("no-options");const h=qc.get(o);if(h){if(Ls(i,h.options)&&Ls(a,h.config))return h;throw Ms.create("duplicate-app",{appName:o})}const d=new ZT(o);for(const v of np.values())d.addComponent(v);const g=new Fb(i,a,d);return qc.set(o,g),g}function Ip(s=tp){const e=qc.get(s);if(!e&&s===tp&&O0())return P0();if(!e)throw Ms.create("no-app",{appName:s});return e}function ui(s,e,i){let a=Vb[s]??s;i&&(a+=`-${i}`);const o=a.match(/\s|\//),h=e.match(/\s|\//);if(o||h){const d=[`Unable to register library "${a}" with version "${e}":`];o&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&h&&d.push("and"),h&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fi.warn(d.join(" "));return}Ur(new Us(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb="firebase-heartbeat-database",Xb=1,xo="firebase-heartbeat-store";let zd=null;function z0(){return zd||(zd=cb(Yb,Xb,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(xo)}catch(i){console.warn(i)}}}}).catch(s=>{throw Ms.create("idb-open",{originalErrorMessage:s.message})})),zd}async function Qb(s){try{const i=(await z0()).transaction(xo),a=await i.objectStore(xo).get(j0(s));return await i.done,a}catch(e){if(e instanceof Ki)Fi.warn(e.message);else{const i=Ms.create("idb-get",{originalErrorMessage:e?.message});Fi.warn(i.message)}}}async function nv(s,e){try{const a=(await z0()).transaction(xo,"readwrite");await a.objectStore(xo).put(e,j0(s)),await a.done}catch(i){if(i instanceof Ki)Fi.warn(i.message);else{const a=Ms.create("idb-set",{originalErrorMessage:i?.message});Fi.warn(a.message)}}}function j0(s){return`${s.name}!${s.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb=1024,Wb=30;class Zb{constructor(e){this.container=e,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new Jb(i),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=iv();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(o=>o.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:i}),this._heartbeatsCache.heartbeats.length>Wb){const o=ew(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Fi.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=iv(),{heartbeatsToSend:i,unsentEntries:a}=$b(this._heartbeatsCache.heartbeats),o=Hc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Fi.warn(e),""}}}function iv(){return new Date().toISOString().substring(0,10)}function $b(s,e=Kb){const i=[];let a=s.slice();for(const o of s){const h=i.find(d=>d.agent===o.agent);if(h){if(h.dates.push(o.date),sv(i)>e){h.dates.pop();break}}else if(i.push({agent:o.agent,dates:[o.date]}),sv(i)>e){i.pop();break}a=a.slice(1)}return{heartbeatsToSend:i,unsentEntries:a}}class Jb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return UT()?PT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await Qb(this.app);return i?.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const a=await this.read();return nv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const a=await this.read();return nv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function sv(s){return Hc(JSON.stringify({version:2,heartbeats:s})).length}function ew(s){if(s.length===0)return-1;let e=0,i=s[0].date;for(let a=1;a<s.length;a++)s[a].date<i&&(i=s[a].date,e=a);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(s){Ur(new Us("platform-logger",e=>new db(e),"PRIVATE")),Ur(new Us("heartbeat",e=>new Zb(e),"PRIVATE")),ui(ep,ev,s),ui(ep,ev,"esm2020"),ui("fire-js","")}tw("");var rv={};const av="@firebase/database",lv="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let H0="";function nw(s){H0=s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,i){i==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Lt(i))}get(e){const i=this.domStorage_.getItem(this.prefixedName_(e));return i==null?null:Do(i)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,i){i==null?delete this.cache_[e]:this.cache_[e]=i}get(e){return Gn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0=function(s){try{if(typeof window<"u"&&typeof window[s]<"u"){const e=window[s];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new iw(e)}}catch{}return new sw},Ir=B0("localStorage"),rw=B0("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va=new hh("@firebase/database"),V0=(function(){let s=1;return function(){return s++}})(),q0=function(s){const e=XT(s),i=new qT;i.update(e);const a=i.digest();return bp.encodeByteArray(a)},Fo=function(...s){let e="";for(let i=0;i<s.length;i++){const a=s[i];Array.isArray(a)||a&&typeof a=="object"&&typeof a.length=="number"?e+=Fo.apply(null,a):typeof a=="object"?e+=Lt(a):e+=a,e+=" "}return e};let To=null,ov=!0;const aw=function(s,e){J(!0,"Can't turn on custom loggers persistently."),Va.logLevel=Pe.VERBOSE,To=Va.log.bind(Va)},Ht=function(...s){if(ov===!0&&(ov=!1,To===null&&rw.get("logging_enabled")===!0&&aw()),To){const e=Fo.apply(null,s);To(e)}},Yo=function(s){return function(...e){Ht(s,...e)}},ip=function(...s){const e="FIREBASE INTERNAL ERROR: "+Fo(...s);Va.error(e)},Yi=function(...s){const e=`FIREBASE FATAL ERROR: ${Fo(...s)}`;throw Va.error(e),new Error(e)},Kt=function(...s){const e="FIREBASE WARNING: "+Fo(...s);Va.warn(e)},lw=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Kt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Op=function(s){return typeof s=="number"&&(s!==s||s===Number.POSITIVE_INFINITY||s===Number.NEGATIVE_INFINITY)},ow=function(s){if(document.readyState==="complete")s();else{let e=!1;const i=function(){if(!document.body){setTimeout(i,Math.floor(10));return}e||(e=!0,s())};document.addEventListener?(document.addEventListener("DOMContentLoaded",i,!1),window.addEventListener("load",i,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&i()}),window.attachEvent("onload",i))}},Ka="[MIN_NAME]",Pr="[MAX_NAME]",Fr=function(s,e){if(s===e)return 0;if(s===Ka||e===Pr)return-1;if(e===Ka||s===Pr)return 1;{const i=uv(s),a=uv(e);return i!==null?a!==null?i-a===0?s.length-e.length:i-a:-1:a!==null?1:s<e?-1:1}},uw=function(s,e){return s===e?0:s<e?-1:1},_o=function(s,e){if(e&&s in e)return e[s];throw new Error("Missing required key ("+s+") in object: "+Lt(e))},Dp=function(s){if(typeof s!="object"||s===null)return Lt(s);const e=[];for(const a in s)e.push(a);e.sort();let i="{";for(let a=0;a<e.length;a++)a!==0&&(i+=","),i+=Lt(e[a]),i+=":",i+=Dp(s[e[a]]);return i+="}",i},G0=function(s,e){const i=s.length;if(i<=e)return[s];const a=[];for(let o=0;o<i;o+=e)o+e>i?a.push(s.substring(o,i)):a.push(s.substring(o,o+e));return a};function Bt(s,e){for(const i in s)s.hasOwnProperty(i)&&e(i,s[i])}const F0=function(s){J(!Op(s),"Invalid JSON number");const e=11,i=52,a=(1<<e-1)-1;let o,h,d,g,v;s===0?(h=0,d=0,o=1/s===-1/0?1:0):(o=s<0,s=Math.abs(s),s>=Math.pow(2,1-a)?(g=Math.min(Math.floor(Math.log(s)/Math.LN2),a),h=g+a,d=Math.round(s*Math.pow(2,i-g)-Math.pow(2,i))):(h=0,d=Math.round(s/Math.pow(2,1-a-i))));const y=[];for(v=i;v;v-=1)y.push(d%2?1:0),d=Math.floor(d/2);for(v=e;v;v-=1)y.push(h%2?1:0),h=Math.floor(h/2);y.push(o?1:0),y.reverse();const T=y.join("");let A="";for(v=0;v<64;v+=8){let C=parseInt(T.substr(v,8),2).toString(16);C.length===1&&(C="0"+C),A=A+C}return A.toLowerCase()},cw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},hw=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function fw(s,e){let i="Unknown Error";s==="too_big"?i="The data requested exceeds the maximum size that can be accessed with a single request.":s==="permission_denied"?i="Client doesn't have permission to access the desired data.":s==="unavailable"&&(i="The service is unavailable");const a=new Error(s+" at "+e._path.toString()+": "+i);return a.code=s.toUpperCase(),a}const dw=new RegExp("^-?(0*)\\d{1,10}$"),pw=-2147483648,gw=2147483647,uv=function(s){if(dw.test(s)){const e=Number(s);if(e>=pw&&e<=gw)return e}return null},rl=function(s){try{s()}catch(e){setTimeout(()=>{const i=e.stack||"";throw Kt("Exception was thrown by user callback.",i),e},Math.floor(0))}},mw=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},bo=function(s,e){const i=setTimeout(s,e);return typeof i=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(i):typeof i=="object"&&i.unref&&i.unref(),i};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e,i){this.appCheckProvider=i,this.appName=e.name,zn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=i?.getImmediate({optional:!0}),this.appCheck||i?.get().then(a=>this.appCheck=a)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((i,a)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(i,a):i(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Kt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e,i,a){this.appName_=e,this.firebaseOptions_=i,this.authProvider_=a,this.auth_=null,this.auth_=a.getImmediate({optional:!0}),this.auth_||a.onInit(o=>this.auth_=o)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(i=>i&&i.code==="auth/token-not-initialized"?(Ht("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(i)):new Promise((i,a)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(i,a):i(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(i=>i.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(i=>i.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Kt(e)}}class Mc{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Mc.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp="5",Y0="v",X0="s",Q0="r",K0="f",W0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Z0="ls",$0="p",sp="ac",J0="websocket",e1="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(e,i,a,o,h=!1,d="",g=!1,v=!1,y=null){this.secure=i,this.namespace=a,this.webSocketOnly=o,this.nodeAdmin=h,this.persistenceKey=d,this.includeNamespaceInQueryParams=g,this.isUsingEmulator=v,this.emulatorOptions=y,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ir.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ir.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",i=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${i}`}}function vw(s){return s.host!==s.internalHost||s.isCustomHost()||s.includeNamespaceInQueryParams}function n1(s,e,i){J(typeof e=="string","typeof type must == string"),J(typeof i=="object","typeof params must == object");let a;if(e===J0)a=(s.secure?"wss://":"ws://")+s.internalHost+"/.ws?";else if(e===e1)a=(s.secure?"https://":"http://")+s.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);vw(s)&&(i.ns=s.namespace);const o=[];return Bt(i,(h,d)=>{o.push(h+"="+d)}),a+o.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(){this.counters_={}}incrementCounter(e,i=1){Gn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=i}get(){return wT(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd={},Hd={};function Mp(s){const e=s.toString();return jd[e]||(jd[e]=new Sw),jd[e]}function Ew(s,e){const i=s.toString();return Hd[i]||(Hd[i]=e()),Hd[i]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,i){this.closeAfterResponse=e,this.onClose=i,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,i){for(this.pendingResponses[e]=i;this.pendingResponses[this.currentResponseNum];){const a=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<a.length;++o)a[o]&&rl(()=>{this.onMessage_(a[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv="start",bw="close",ww="pLPCommand",Cw="pRTLPCB",i1="id",s1="pw",r1="ser",Aw="cb",Rw="seg",Nw="ts",Iw="d",Ow="dframe",a1=1870,l1=30,Dw=a1-l1,xw=25e3,Mw=3e4;class Ha{constructor(e,i,a,o,h,d,g){this.connId=e,this.repoInfo=i,this.applicationId=a,this.appCheckToken=o,this.authToken=h,this.transportSessionId=d,this.lastSessionId=g,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Yo(e),this.stats_=Mp(i),this.urlFn=v=>(this.appCheckToken&&(v[sp]=this.appCheckToken),n1(i,e1,v))}open(e,i){this.curSegmentNum=0,this.onDisconnect_=i,this.myPacketOrderer=new Tw(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Mw)),ow(()=>{if(this.isClosed_)return;this.scriptTagHolder=new kp((...h)=>{const[d,g,v,y,T]=h;if(this.incrementIncomingBytes_(h),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,d===cv)this.id=g,this.password=v;else if(d===bw)g?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(g,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+d)},(...h)=>{const[d,g]=h;this.incrementIncomingBytes_(h),this.myPacketOrderer.handleResponse(d,g)},()=>{this.onClosed_()},this.urlFn);const a={};a[cv]="t",a[r1]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(a[Aw]=this.scriptTagHolder.uniqueCallbackIdentifier),a[Y0]=xp,this.transportSessionId&&(a[X0]=this.transportSessionId),this.lastSessionId&&(a[Z0]=this.lastSessionId),this.applicationId&&(a[$0]=this.applicationId),this.appCheckToken&&(a[sp]=this.appCheckToken),typeof location<"u"&&location.hostname&&W0.test(location.hostname)&&(a[Q0]=K0);const o=this.urlFn(a);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ha.forceAllow_=!0}static forceDisallow(){Ha.forceDisallow_=!0}static isAvailable(){return Ha.forceAllow_?!0:!Ha.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!cw()&&!hw()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const i=Lt(e);this.bytesSent+=i.length,this.stats_.incrementCounter("bytes_sent",i.length);const a=A0(i),o=G0(a,Dw);for(let h=0;h<o.length;h++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[h]),this.curSegmentNum++}addDisconnectPingFrame(e,i){this.myDisconnFrame=document.createElement("iframe");const a={};a[Ow]="t",a[i1]=e,a[s1]=i,this.myDisconnFrame.src=this.urlFn(a),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const i=Lt(e).length;this.bytesReceived+=i,this.stats_.incrementCounter("bytes_received",i)}}class kp{constructor(e,i,a,o){this.onDisconnect=a,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=V0(),window[ww+this.uniqueCallbackIdentifier]=e,window[Cw+this.uniqueCallbackIdentifier]=i,this.myIFrame=kp.createIFrame_();let h="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(h='<script>document.domain="'+document.domain+'";<\/script>');const d="<html><body>"+h+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(d),this.myIFrame.doc.close()}catch(g){Ht("frame writing exception"),g.stack&&Ht(g.stack),Ht(g)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ht("No IE domain setting required")}catch{const a=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+a+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,i){for(this.myID=e,this.myPW=i,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[i1]=this.myID,e[s1]=this.myPW,e[r1]=this.currentSerial;let i=this.urlFn(e),a="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+l1+a.length<=a1;){const d=this.pendingSegs.shift();a=a+"&"+Rw+o+"="+d.seg+"&"+Nw+o+"="+d.ts+"&"+Iw+o+"="+d.d,o++}return i=i+a,this.addLongPollTag_(i,this.currentSerial),!0}else return!1}enqueueSegment(e,i,a){this.pendingSegs.push({seg:e,ts:i,d:a}),this.alive&&this.newRequest_()}addLongPollTag_(e,i){this.outstandingRequests.add(i);const a=()=>{this.outstandingRequests.delete(i),this.newRequest_()},o=setTimeout(a,Math.floor(xw)),h=()=>{clearTimeout(o),a()};this.addTag(e,h)}addTag(e,i){setTimeout(()=>{try{if(!this.sendNewPolls)return;const a=this.myIFrame.doc.createElement("script");a.type="text/javascript",a.async=!0,a.src=e,a.onload=a.onreadystatechange=function(){const o=a.readyState;(!o||o==="loaded"||o==="complete")&&(a.onload=a.onreadystatechange=null,a.parentNode&&a.parentNode.removeChild(a),i())},a.onerror=()=>{Ht("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(a)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw=16384,Lw=45e3;let Gc=null;typeof MozWebSocket<"u"?Gc=MozWebSocket:typeof WebSocket<"u"&&(Gc=WebSocket);class jn{constructor(e,i,a,o,h,d,g){this.connId=e,this.applicationId=a,this.appCheckToken=o,this.authToken=h,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Yo(this.connId),this.stats_=Mp(i),this.connURL=jn.connectionURL_(i,d,g,o,a),this.nodeAdmin=i.nodeAdmin}static connectionURL_(e,i,a,o,h){const d={};return d[Y0]=xp,typeof location<"u"&&location.hostname&&W0.test(location.hostname)&&(d[Q0]=K0),i&&(d[X0]=i),a&&(d[Z0]=a),o&&(d[sp]=o),h&&(d[$0]=h),n1(e,J0,d)}open(e,i){this.onDisconnect=i,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ir.set("previous_websocket_failure",!0);try{let a;LT(),this.mySock=new Gc(this.connURL,[],a)}catch(a){this.log_("Error instantiating WebSocket.");const o=a.message||a.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=a=>{this.handleIncomingFrame(a)},this.mySock.onerror=a=>{this.log_("WebSocket error.  Closing connection.");const o=a.message||a.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){jn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const i=/Android ([0-9]{0,}\.[0-9]{0,})/,a=navigator.userAgent.match(i);a&&a.length>1&&parseFloat(a[1])<4.4&&(e=!0)}return!e&&Gc!==null&&!jn.forceDisallow_}static previouslyFailed(){return Ir.isInMemoryStorage||Ir.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ir.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const i=this.frames.join("");this.frames=null;const a=Do(i);this.onMessage(a)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(J(this.frames===null,"We already have a frame buffer"),e.length<=6){const i=Number(e);if(!isNaN(i))return this.handleNewFrameCount_(i),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const i=e.data;if(this.bytesReceived+=i.length,this.stats_.incrementCounter("bytes_received",i.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(i);else{const a=this.extractFrameCount_(i);a!==null&&this.appendFrame_(a)}}send(e){this.resetKeepAlive();const i=Lt(e);this.bytesSent+=i.length,this.stats_.incrementCounter("bytes_sent",i.length);const a=G0(i,kw);a.length>1&&this.sendString_(String(a.length));for(let o=0;o<a.length;o++)this.sendString_(a[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Lw))}sendString_(e){try{this.mySock.send(e)}catch(i){this.log_("Exception thrown from WebSocket.send():",i.message||i.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}jn.responsesRequiredToBeHealthy=2;jn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{static get ALL_TRANSPORTS(){return[Ha,jn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const i=jn&&jn.isAvailable();let a=i&&!jn.previouslyFailed();if(e.webSocketOnly&&(i||Kt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),a=!0),a)this.transports_=[jn];else{const o=this.transports_=[];for(const h of Mo.ALL_TRANSPORTS)h&&h.isAvailable()&&o.push(h);Mo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Mo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw=6e4,Pw=5e3,zw=10*1024,jw=100*1024,Bd="t",hv="d",Hw="s",fv="r",Bw="e",dv="o",pv="a",gv="n",mv="p",Vw="h";class qw{constructor(e,i,a,o,h,d,g,v,y,T){this.id=e,this.repoInfo_=i,this.applicationId_=a,this.appCheckToken_=o,this.authToken_=h,this.onMessage_=d,this.onReady_=g,this.onDisconnect_=v,this.onKill_=y,this.lastSessionId=T,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Yo("c:"+this.id+":"),this.transportManager_=new Mo(i),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const i=this.connReceiver_(this.conn_),a=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(i,a)},Math.floor(0));const o=e.healthyTimeout||0;o>0&&(this.healthyTimeout_=bo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>jw?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>zw?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return i=>{e===this.conn_?this.onConnectionLost_(i):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return i=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(i):e===this.secondaryConn_?this.onSecondaryMessageReceived_(i):this.log_("message on old connection"))}}sendRequest(e){const i={t:"d",d:e};this.sendData_(i)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Bd in e){const i=e[Bd];i===pv?this.upgradeIfSecondaryHealthy_():i===fv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):i===dv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const i=_o("t",e),a=_o("d",e);if(i==="c")this.onSecondaryControl_(a);else if(i==="d")this.pendingDataMessages.push(a);else throw new Error("Unknown protocol layer: "+i)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:mv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:pv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:gv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const i=_o("t",e),a=_o("d",e);i==="c"?this.onControl_(a):i==="d"&&this.onDataMessage_(a)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const i=_o(Bd,e);if(hv in e){const a=e[hv];if(i===Vw){const o={...a};this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(i===gv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else i===Hw?this.onConnectionShutdown_(a):i===fv?this.onReset_(a):i===Bw?ip("Server Error: "+a):i===dv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ip("Unknown control packet command: "+i)}}onHandshake_(e){const i=e.ts,a=e.v,o=e.h;this.sessionId=e.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,i),xp!==a&&Kt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const i=this.connReceiver_(this.secondaryConn_),a=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(i,a),bo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Uw))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,i){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(i,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):bo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Pw))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:mv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ir.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{put(e,i,a,o){}merge(e,i,a,o){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,i,a){}onDisconnectMerge(e,i,a){}onDisconnectCancel(e,i){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e){this.allowedEvents_=e,this.listeners_={},J(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...i){if(Array.isArray(this.listeners_[e])){const a=[...this.listeners_[e]];for(let o=0;o<a.length;o++)a[o].callback.apply(a[o].context,i)}}on(e,i,a){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:i,context:a});const o=this.getInitialEvent(e);o&&i.apply(a,o)}off(e,i,a){this.validateEventType_(e);const o=this.listeners_[e]||[];for(let h=0;h<o.length;h++)if(o[h].callback===i&&(!a||a===o[h].context)){o.splice(h,1);return}}validateEventType_(e){J(this.allowedEvents_.find(i=>i===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc extends u1{static getInstance(){return new Fc}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Rp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return J(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v=32,yv=768;class Qe{constructor(e,i){if(i===void 0){this.pieces_=e.split("/");let a=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[a]=this.pieces_[o],a++);this.pieces_.length=a,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=i}toString(){let e="";for(let i=this.pieceNum_;i<this.pieces_.length;i++)this.pieces_[i]!==""&&(e+="/"+this.pieces_[i]);return e||"/"}}function ze(){return new Qe("")}function be(s){return s.pieceNum_>=s.pieces_.length?null:s.pieces_[s.pieceNum_]}function Ps(s){return s.pieces_.length-s.pieceNum_}function tt(s){let e=s.pieceNum_;return e<s.pieces_.length&&e++,new Qe(s.pieces_,e)}function Lp(s){return s.pieceNum_<s.pieces_.length?s.pieces_[s.pieces_.length-1]:null}function Gw(s){let e="";for(let i=s.pieceNum_;i<s.pieces_.length;i++)s.pieces_[i]!==""&&(e+="/"+encodeURIComponent(String(s.pieces_[i])));return e||"/"}function ko(s,e=0){return s.pieces_.slice(s.pieceNum_+e)}function c1(s){if(s.pieceNum_>=s.pieces_.length)return null;const e=[];for(let i=s.pieceNum_;i<s.pieces_.length-1;i++)e.push(s.pieces_[i]);return new Qe(e,0)}function ht(s,e){const i=[];for(let a=s.pieceNum_;a<s.pieces_.length;a++)i.push(s.pieces_[a]);if(e instanceof Qe)for(let a=e.pieceNum_;a<e.pieces_.length;a++)i.push(e.pieces_[a]);else{const a=e.split("/");for(let o=0;o<a.length;o++)a[o].length>0&&i.push(a[o])}return new Qe(i,0)}function Re(s){return s.pieceNum_>=s.pieces_.length}function nn(s,e){const i=be(s),a=be(e);if(i===null)return e;if(i===a)return nn(tt(s),tt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+s+")")}function Fw(s,e){const i=ko(s,0),a=ko(e,0);for(let o=0;o<i.length&&o<a.length;o++){const h=Fr(i[o],a[o]);if(h!==0)return h}return i.length===a.length?0:i.length<a.length?-1:1}function Up(s,e){if(Ps(s)!==Ps(e))return!1;for(let i=s.pieceNum_,a=e.pieceNum_;i<=s.pieces_.length;i++,a++)if(s.pieces_[i]!==e.pieces_[a])return!1;return!0}function In(s,e){let i=s.pieceNum_,a=e.pieceNum_;if(Ps(s)>Ps(e))return!1;for(;i<s.pieces_.length;){if(s.pieces_[i]!==e.pieces_[a])return!1;++i,++a}return!0}class Yw{constructor(e,i){this.errorPrefix_=i,this.parts_=ko(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let a=0;a<this.parts_.length;a++)this.byteLength_+=ch(this.parts_[a]);h1(this)}}function Xw(s,e){s.parts_.length>0&&(s.byteLength_+=1),s.parts_.push(e),s.byteLength_+=ch(e),h1(s)}function Qw(s){const e=s.parts_.pop();s.byteLength_-=ch(e),s.parts_.length>0&&(s.byteLength_-=1)}function h1(s){if(s.byteLength_>yv)throw new Error(s.errorPrefix_+"has a key path longer than "+yv+" bytes ("+s.byteLength_+").");if(s.parts_.length>_v)throw new Error(s.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+_v+") or object contains a cycle "+Ar(s))}function Ar(s){return s.parts_.length===0?"":"in property '"+s.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp extends u1{static getInstance(){return new Pp}constructor(){super(["visible"]);let e,i;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(i="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(i="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(i="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(i="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,i&&document.addEventListener(i,()=>{const a=!document[e];a!==this.visible_&&(this.visible_=a,this.trigger("visible",a))},!1)}getInitialEvent(e){return J(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=1e3,Kw=300*1e3,vv=30*1e3,Ww=1.3,Zw=3e4,$w="server_kill",Sv=3;class qi extends o1{constructor(e,i,a,o,h,d,g,v){if(super(),this.repoInfo_=e,this.applicationId_=i,this.onDataUpdate_=a,this.onConnectStatus_=o,this.onServerInfoUpdate_=h,this.authTokenProvider_=d,this.appCheckTokenProvider_=g,this.authOverride_=v,this.id=qi.nextPersistentConnectionId_++,this.log_=Yo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=yo,this.maxReconnectDelay_=Kw,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,v)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Pp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Fc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,i,a){const o=++this.requestNumber_,h={r:o,a:e,b:i};this.log_(Lt(h)),J(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(h),a&&(this.requestCBHash_[o]=a)}get(e){this.initConnection_();const i=new il,o={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:d=>{const g=d.d;d.s==="ok"?i.resolve(g):i.reject(g)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const h=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(h),i.promise}listen(e,i,a,o){this.initConnection_();const h=e._queryIdentifier,d=e._path.toString();this.log_("Listen called for "+d+" "+h),this.listens.has(d)||this.listens.set(d,new Map),J(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),J(!this.listens.get(d).has(h),"listen() called twice for same path/queryId.");const g={onComplete:o,hashFn:i,query:e,tag:a};this.listens.get(d).set(h,g),this.connected_&&this.sendListen_(g)}sendGet_(e){const i=this.outstandingGets_[e];this.sendRequest("g",i.request,a=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),i.onComplete&&i.onComplete(a)})}sendListen_(e){const i=e.query,a=i._path.toString(),o=i._queryIdentifier;this.log_("Listen on "+a+" for "+o);const h={p:a},d="q";e.tag&&(h.q=i._queryObject,h.t=e.tag),h.h=e.hashFn(),this.sendRequest(d,h,g=>{const v=g.d,y=g.s;qi.warnOnListenWarnings_(v,i),(this.listens.get(a)&&this.listens.get(a).get(o))===e&&(this.log_("listen response",g),y!=="ok"&&this.removeListen_(a,o),e.onComplete&&e.onComplete(y,v))})}static warnOnListenWarnings_(e,i){if(e&&typeof e=="object"&&Gn(e,"w")){const a=Lr(e,"w");if(Array.isArray(a)&&~a.indexOf("no_index")){const o='".indexOn": "'+i._queryParams.getIndex().toString()+'"',h=i._path.toString();Kt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${h} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||VT(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=vv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,i=BT(e)?"auth":"gauth",a={cred:e};this.authOverride_===null?a.noauth=!0:typeof this.authOverride_=="object"&&(a.authvar=this.authOverride_),this.sendRequest(i,a,o=>{const h=o.s,d=o.d||"error";this.authToken_===e&&(h==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(h,d))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const i=e.s,a=e.d||"error";i==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(i,a)})}unlisten(e,i){const a=e._path.toString(),o=e._queryIdentifier;this.log_("Unlisten called for "+a+" "+o),J(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(a,o)&&this.connected_&&this.sendUnlisten_(a,o,e._queryObject,i)}sendUnlisten_(e,i,a,o){this.log_("Unlisten on "+e+" for "+i);const h={p:e},d="n";o&&(h.q=a,h.t=o),this.sendRequest(d,h)}onDisconnectPut(e,i,a){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,i,a):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:i,onComplete:a})}onDisconnectMerge(e,i,a){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,i,a):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:i,onComplete:a})}onDisconnectCancel(e,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:i})}sendOnDisconnect_(e,i,a,o){const h={p:i,d:a};this.log_("onDisconnect "+e,h),this.sendRequest(e,h,d=>{o&&setTimeout(()=>{o(d.s,d.d)},Math.floor(0))})}put(e,i,a,o){this.putInternal("p",e,i,a,o)}merge(e,i,a,o){this.putInternal("m",e,i,a,o)}putInternal(e,i,a,o,h){this.initConnection_();const d={p:i,d:a};h!==void 0&&(d.h=h),this.outstandingPuts_.push({action:e,request:d,onComplete:o}),this.outstandingPutCount_++;const g=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(g):this.log_("Buffering put: "+i)}sendPut_(e){const i=this.outstandingPuts_[e].action,a=this.outstandingPuts_[e].request,o=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(i,a,h=>{this.log_(i+" response",h),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(h.s,h.d)})}reportStats(e){if(this.connected_){const i={c:e};this.log_("reportStats",i),this.sendRequest("s",i,a=>{if(a.s!=="ok"){const h=a.d;this.log_("reportStats","Error sending stats: "+h)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Lt(e));const i=e.r,a=this.requestCBHash_[i];a&&(delete this.requestCBHash_[i],a(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,i){this.log_("handleServerMessage",e,i),e==="d"?this.onDataUpdate_(i.p,i.d,!1,i.t):e==="m"?this.onDataUpdate_(i.p,i.d,!0,i.t):e==="c"?this.onListenRevoked_(i.p,i.q):e==="ac"?this.onAuthRevoked_(i.s,i.d):e==="apc"?this.onAppCheckRevoked_(i.s,i.d):e==="sd"?this.onSecurityDebugPacket_(i):ip("Unrecognized action received from server: "+Lt(e)+`
Are you using the latest client?`)}onReady_(e,i){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=i,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){J(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=yo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=yo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Zw&&(this.reconnectDelay_=yo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let i=Math.max(0,this.reconnectDelay_-e);i=Math.random()*i,this.log_("Trying to reconnect in "+i+"ms"),this.scheduleConnect_(i),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Ww)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),i=this.onReady_.bind(this),a=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+qi.nextConnectionId_++,h=this.lastSessionId;let d=!1,g=null;const v=function(){g?g.close():(d=!0,a())},y=function(A){J(g,"sendRequest call when we're not connected not allowed."),g.sendRequest(A)};this.realtime_={close:v,sendRequest:y};const T=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[A,C]=await Promise.all([this.authTokenProvider_.getToken(T),this.appCheckTokenProvider_.getToken(T)]);d?Ht("getToken() completed but was canceled"):(Ht("getToken() completed. Creating connection."),this.authToken_=A&&A.accessToken,this.appCheckToken_=C&&C.token,g=new qw(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,i,a,X=>{Kt(X+" ("+this.repoInfo_.toString()+")"),this.interrupt($w)},h))}catch(A){this.log_("Failed to get token: "+A),d||(this.repoInfo_.nodeAdmin&&Kt(A),v())}}}interrupt(e){Ht("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ht("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Zd(this.interruptReasons_)&&(this.reconnectDelay_=yo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const i=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:i})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const i=this.outstandingPuts_[e];i&&"h"in i.request&&i.queued&&(i.onComplete&&i.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,i){let a;i?a=i.map(h=>Dp(h)).join("$"):a="default";const o=this.removeListen_(e,a);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(e,i){const a=new Qe(e).toString();let o;if(this.listens.has(a)){const h=this.listens.get(a);o=h.get(i),h.delete(i),h.size===0&&this.listens.delete(a)}else o=void 0;return o}onAuthRevoked_(e,i){Ht("Auth token revoked: "+e+"/"+i),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Sv&&(this.reconnectDelay_=vv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,i){Ht("App check token revoked: "+e+"/"+i),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Sv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const i of e.values())this.sendListen_(i);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let i="js";e["sdk."+i+"."+H0.replace(/\./g,"-")]=1,Rp()?e["framework.cordova"]=1:M0()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Fc.getInstance().currentlyOnline();return Zd(this.interruptReasons_)&&e}}qi.nextPersistentConnectionId_=0;qi.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,i){this.name=e,this.node=i}static Wrap(e,i){return new we(e,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,i){const a=new we(Ka,e),o=new we(Ka,i);return this.compare(a,o)!==0}minPost(){return we.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nc;class f1 extends dh{static get __EMPTY_NODE(){return Nc}static set __EMPTY_NODE(e){Nc=e}compare(e,i){return Fr(e.name,i.name)}isDefinedOn(e){throw nl("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,i){return!1}minPost(){return we.MIN}maxPost(){return new we(Pr,Nc)}makePost(e,i){return J(typeof e=="string","KeyIndex indexValue must always be a string."),new we(e,Nc)}toString(){return".key"}}const qa=new f1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,i,a,o,h=null){this.isReverse_=o,this.resultGenerator_=h,this.nodeStack_=[];let d=1;for(;!e.isEmpty();)if(e=e,d=i?a(e.key,i):1,o&&(d*=-1),d<0)this.isReverse_?e=e.left:e=e.right;else if(d===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),i;if(this.resultGenerator_?i=this.resultGenerator_(e.key,e.value):i={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return i}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Mt{constructor(e,i,a,o,h){this.key=e,this.value=i,this.color=a??Mt.RED,this.left=o??sn.EMPTY_NODE,this.right=h??sn.EMPTY_NODE}copy(e,i,a,o,h){return new Mt(e??this.key,i??this.value,a??this.color,o??this.left,h??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,i,a){let o=this;const h=a(e,o.key);return h<0?o=o.copy(null,null,null,o.left.insert(e,i,a),null):h===0?o=o.copy(null,i,null,null,null):o=o.copy(null,null,null,null,o.right.insert(e,i,a)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return sn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,i){let a,o;if(a=this,i(e,a.key)<0)!a.left.isEmpty()&&!a.left.isRed_()&&!a.left.left.isRed_()&&(a=a.moveRedLeft_()),a=a.copy(null,null,null,a.left.remove(e,i),null);else{if(a.left.isRed_()&&(a=a.rotateRight_()),!a.right.isEmpty()&&!a.right.isRed_()&&!a.right.left.isRed_()&&(a=a.moveRedRight_()),i(e,a.key)===0){if(a.right.isEmpty())return sn.EMPTY_NODE;o=a.right.min_(),a=a.copy(o.key,o.value,null,null,a.right.removeMin_())}a=a.copy(null,null,null,null,a.right.remove(e,i))}return a.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,i)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Mt.RED=!0;Mt.BLACK=!1;class Jw{copy(e,i,a,o,h){return this}insert(e,i,a){return new Mt(e,i,null)}remove(e,i){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class sn{constructor(e,i=sn.EMPTY_NODE){this.comparator_=e,this.root_=i}insert(e,i){return new sn(this.comparator_,this.root_.insert(e,i,this.comparator_).copy(null,null,Mt.BLACK,null,null))}remove(e){return new sn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Mt.BLACK,null,null))}get(e){let i,a=this.root_;for(;!a.isEmpty();){if(i=this.comparator_(e,a.key),i===0)return a.value;i<0?a=a.left:i>0&&(a=a.right)}return null}getPredecessorKey(e){let i,a=this.root_,o=null;for(;!a.isEmpty();)if(i=this.comparator_(e,a.key),i===0){if(a.left.isEmpty())return o?o.key:null;for(a=a.left;!a.right.isEmpty();)a=a.right;return a.key}else i<0?a=a.left:i>0&&(o=a,a=a.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ic(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,i){return new Ic(this.root_,e,this.comparator_,!1,i)}getReverseIteratorFrom(e,i){return new Ic(this.root_,e,this.comparator_,!0,i)}getReverseIterator(e){return new Ic(this.root_,null,this.comparator_,!0,e)}}sn.EMPTY_NODE=new Jw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(s,e){return Fr(s.name,e.name)}function zp(s,e){return Fr(s,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rp;function tC(s){rp=s}const d1=function(s){return typeof s=="number"?"number:"+F0(s):"string:"+s},p1=function(s){if(s.isLeafNode()){const e=s.val();J(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Gn(e,".sv"),"Priority must be a string or number.")}else J(s===rp||s.isEmpty(),"priority of unexpected type.");J(s===rp||s.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ev;class xt{static set __childrenNodeConstructor(e){Ev=e}static get __childrenNodeConstructor(){return Ev}constructor(e,i=xt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=i,this.lazyHash_=null,J(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),p1(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new xt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:xt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Re(e)?this:be(e)===".priority"?this.priorityNode_:xt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,i){return null}updateImmediateChild(e,i){return e===".priority"?this.updatePriority(i):i.isEmpty()&&e!==".priority"?this:xt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,i).updatePriority(this.priorityNode_)}updateChild(e,i){const a=be(e);return a===null?i:i.isEmpty()&&a!==".priority"?this:(J(a!==".priority"||Ps(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(a,xt.__childrenNodeConstructor.EMPTY_NODE.updateChild(tt(e),i)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,i){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+d1(this.priorityNode_.val())+":");const i=typeof this.value_;e+=i+":",i==="number"?e+=F0(this.value_):e+=this.value_,this.lazyHash_=q0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===xt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof xt.__childrenNodeConstructor?-1:(J(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const i=typeof e.value_,a=typeof this.value_,o=xt.VALUE_TYPE_ORDER.indexOf(i),h=xt.VALUE_TYPE_ORDER.indexOf(a);return J(o>=0,"Unknown leaf type: "+i),J(h>=0,"Unknown leaf type: "+a),o===h?a==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:h-o}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const i=e;return this.value_===i.value_&&this.priorityNode_.equals(i.priorityNode_)}else return!1}}xt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let g1,m1;function nC(s){g1=s}function iC(s){m1=s}class sC extends dh{compare(e,i){const a=e.node.getPriority(),o=i.node.getPriority(),h=a.compareTo(o);return h===0?Fr(e.name,i.name):h}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,i){return!e.getPriority().equals(i.getPriority())}minPost(){return we.MIN}maxPost(){return new we(Pr,new xt("[PRIORITY-POST]",m1))}makePost(e,i){const a=g1(e);return new we(i,new xt("[PRIORITY-POST]",a))}toString(){return".priority"}}const lt=new sC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC=Math.log(2);class aC{constructor(e){const i=h=>parseInt(Math.log(h)/rC,10),a=h=>parseInt(Array(h+1).join("1"),2);this.count=i(e+1),this.current_=this.count-1;const o=a(this.count);this.bits_=e+1&o}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Yc=function(s,e,i,a){s.sort(e);const o=function(v,y){const T=y-v;let A,C;if(T===0)return null;if(T===1)return A=s[v],C=i?i(A):A,new Mt(C,A.node,Mt.BLACK,null,null);{const X=parseInt(T/2,10)+v,F=o(v,X),Z=o(X+1,y);return A=s[X],C=i?i(A):A,new Mt(C,A.node,Mt.BLACK,F,Z)}},h=function(v){let y=null,T=null,A=s.length;const C=function(F,Z){const te=A-F,re=A;A-=F;const ue=o(te+1,re),pe=s[te],ve=i?i(pe):pe;X(new Mt(ve,pe.node,Z,null,ue))},X=function(F){y?(y.left=F,y=F):(T=F,y=F)};for(let F=0;F<v.count;++F){const Z=v.nextBitIsOne(),te=Math.pow(2,v.count-(F+1));Z?C(te,Mt.BLACK):(C(te,Mt.BLACK),C(te,Mt.RED))}return T},d=new aC(s.length),g=h(d);return new sn(a||e,g)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vd;const ja={};class Hi{static get Default(){return J(ja&&lt,"ChildrenNode.ts has not been loaded"),Vd=Vd||new Hi({".priority":ja},{".priority":lt}),Vd}constructor(e,i){this.indexes_=e,this.indexSet_=i}get(e){const i=Lr(this.indexes_,e);if(!i)throw new Error("No index defined for "+e);return i instanceof sn?i:null}hasIndex(e){return Gn(this.indexSet_,e.toString())}addIndex(e,i){J(e!==qa,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const a=[];let o=!1;const h=i.getIterator(we.Wrap);let d=h.getNext();for(;d;)o=o||e.isDefinedOn(d.node),a.push(d),d=h.getNext();let g;o?g=Yc(a,e.getCompare()):g=ja;const v=e.toString(),y={...this.indexSet_};y[v]=e;const T={...this.indexes_};return T[v]=g,new Hi(T,y)}addToIndexes(e,i){const a=Vc(this.indexes_,(o,h)=>{const d=Lr(this.indexSet_,h);if(J(d,"Missing index implementation for "+h),o===ja)if(d.isDefinedOn(e.node)){const g=[],v=i.getIterator(we.Wrap);let y=v.getNext();for(;y;)y.name!==e.name&&g.push(y),y=v.getNext();return g.push(e),Yc(g,d.getCompare())}else return ja;else{const g=i.get(e.name);let v=o;return g&&(v=v.remove(new we(e.name,g))),v.insert(e,e.node)}});return new Hi(a,this.indexSet_)}removeFromIndexes(e,i){const a=Vc(this.indexes_,o=>{if(o===ja)return o;{const h=i.get(e.name);return h?o.remove(new we(e.name,h)):o}});return new Hi(a,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vo;class he{static get EMPTY_NODE(){return vo||(vo=new he(new sn(zp),null,Hi.Default))}constructor(e,i,a){this.children_=e,this.priorityNode_=i,this.indexMap_=a,this.lazyHash_=null,this.priorityNode_&&p1(this.priorityNode_),this.children_.isEmpty()&&J(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||vo}updatePriority(e){return this.children_.isEmpty()?this:new he(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const i=this.children_.get(e);return i===null?vo:i}}getChild(e){const i=be(e);return i===null?this:this.getImmediateChild(i).getChild(tt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,i){if(J(i,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(i);{const a=new we(e,i);let o,h;i.isEmpty()?(o=this.children_.remove(e),h=this.indexMap_.removeFromIndexes(a,this.children_)):(o=this.children_.insert(e,i),h=this.indexMap_.addToIndexes(a,this.children_));const d=o.isEmpty()?vo:this.priorityNode_;return new he(o,d,h)}}updateChild(e,i){const a=be(e);if(a===null)return i;{J(be(e)!==".priority"||Ps(e)===1,".priority must be the last token in a path");const o=this.getImmediateChild(a).updateChild(tt(e),i);return this.updateImmediateChild(a,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const i={};let a=0,o=0,h=!0;if(this.forEachChild(lt,(d,g)=>{i[d]=g.val(e),a++,h&&he.INTEGER_REGEXP_.test(d)?o=Math.max(o,Number(d)):h=!1}),!e&&h&&o<2*a){const d=[];for(const g in i)d[g]=i[g];return d}else return e&&!this.getPriority().isEmpty()&&(i[".priority"]=this.getPriority().val()),i}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+d1(this.getPriority().val())+":"),this.forEachChild(lt,(i,a)=>{const o=a.hash();o!==""&&(e+=":"+i+":"+o)}),this.lazyHash_=e===""?"":q0(e)}return this.lazyHash_}getPredecessorChildName(e,i,a){const o=this.resolveIndex_(a);if(o){const h=o.getPredecessorKey(new we(e,i));return h?h.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const i=this.resolveIndex_(e);if(i){const a=i.minKey();return a&&a.name}else return this.children_.minKey()}getFirstChild(e){const i=this.getFirstChildName(e);return i?new we(i,this.children_.get(i)):null}getLastChildName(e){const i=this.resolveIndex_(e);if(i){const a=i.maxKey();return a&&a.name}else return this.children_.maxKey()}getLastChild(e){const i=this.getLastChildName(e);return i?new we(i,this.children_.get(i)):null}forEachChild(e,i){const a=this.resolveIndex_(e);return a?a.inorderTraversal(o=>i(o.name,o.node)):this.children_.inorderTraversal(i)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,i){const a=this.resolveIndex_(i);if(a)return a.getIteratorFrom(e,o=>o);{const o=this.children_.getIteratorFrom(e.name,we.Wrap);let h=o.peek();for(;h!=null&&i.compare(h,e)<0;)o.getNext(),h=o.peek();return o}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,i){const a=this.resolveIndex_(i);if(a)return a.getReverseIteratorFrom(e,o=>o);{const o=this.children_.getReverseIteratorFrom(e.name,we.Wrap);let h=o.peek();for(;h!=null&&i.compare(h,e)>0;)o.getNext(),h=o.peek();return o}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Xo?-1:0}withIndex(e){if(e===qa||this.indexMap_.hasIndex(e))return this;{const i=this.indexMap_.addIndex(e,this.children_);return new he(this.children_,this.priorityNode_,i)}}isIndexed(e){return e===qa||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const i=e;if(this.getPriority().equals(i.getPriority()))if(this.children_.count()===i.children_.count()){const a=this.getIterator(lt),o=i.getIterator(lt);let h=a.getNext(),d=o.getNext();for(;h&&d;){if(h.name!==d.name||!h.node.equals(d.node))return!1;h=a.getNext(),d=o.getNext()}return h===null&&d===null}else return!1;else return!1}}resolveIndex_(e){return e===qa?null:this.indexMap_.get(e.toString())}}he.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class lC extends he{constructor(){super(new sn(zp),he.EMPTY_NODE,Hi.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return he.EMPTY_NODE}isEmpty(){return!1}}const Xo=new lC;Object.defineProperties(we,{MIN:{value:new we(Ka,he.EMPTY_NODE)},MAX:{value:new we(Pr,Xo)}});f1.__EMPTY_NODE=he.EMPTY_NODE;xt.__childrenNodeConstructor=he;tC(Xo);iC(Xo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC=!0;function wt(s,e=null){if(s===null)return he.EMPTY_NODE;if(typeof s=="object"&&".priority"in s&&(e=s[".priority"]),J(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof s=="object"&&".value"in s&&s[".value"]!==null&&(s=s[".value"]),typeof s!="object"||".sv"in s){const i=s;return new xt(i,wt(e))}if(!(s instanceof Array)&&oC){const i=[];let a=!1;if(Bt(s,(d,g)=>{if(d.substring(0,1)!=="."){const v=wt(g);v.isEmpty()||(a=a||!v.getPriority().isEmpty(),i.push(new we(d,v)))}}),i.length===0)return he.EMPTY_NODE;const h=Yc(i,eC,d=>d.name,zp);if(a){const d=Yc(i,lt.getCompare());return new he(h,wt(e),new Hi({".priority":d},{".priority":lt}))}else return new he(h,wt(e),Hi.Default)}else{let i=he.EMPTY_NODE;return Bt(s,(a,o)=>{if(Gn(s,a)&&a.substring(0,1)!=="."){const h=wt(o);(h.isLeafNode()||!h.isEmpty())&&(i=i.updateImmediateChild(a,h))}}),i.updatePriority(wt(e))}}nC(wt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC extends dh{constructor(e){super(),this.indexPath_=e,J(!Re(e)&&be(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,i){const a=this.extractChild(e.node),o=this.extractChild(i.node),h=a.compareTo(o);return h===0?Fr(e.name,i.name):h}makePost(e,i){const a=wt(e),o=he.EMPTY_NODE.updateChild(this.indexPath_,a);return new we(i,o)}maxPost(){const e=he.EMPTY_NODE.updateChild(this.indexPath_,Xo);return new we(Pr,e)}toString(){return ko(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC extends dh{compare(e,i){const a=e.node.compareTo(i.node);return a===0?Fr(e.name,i.name):a}isDefinedOn(e){return!0}indexedValueChanged(e,i){return!e.equals(i)}minPost(){return we.MIN}maxPost(){return we.MAX}makePost(e,i){const a=wt(e);return new we(i,a)}toString(){return".value"}}const hC=new cC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _1(s){return{type:"value",snapshotNode:s}}function Wa(s,e){return{type:"child_added",snapshotNode:e,childName:s}}function Lo(s,e){return{type:"child_removed",snapshotNode:e,childName:s}}function Uo(s,e,i){return{type:"child_changed",snapshotNode:e,childName:s,oldSnap:i}}function fC(s,e){return{type:"child_moved",snapshotNode:e,childName:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(e){this.index_=e}updateChild(e,i,a,o,h,d){J(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const g=e.getImmediateChild(i);return g.getChild(o).equals(a.getChild(o))&&g.isEmpty()===a.isEmpty()||(d!=null&&(a.isEmpty()?e.hasChild(i)?d.trackChildChange(Lo(i,g)):J(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):g.isEmpty()?d.trackChildChange(Wa(i,a)):d.trackChildChange(Uo(i,a,g))),e.isLeafNode()&&a.isEmpty())?e:e.updateImmediateChild(i,a).withIndex(this.index_)}updateFullNode(e,i,a){return a!=null&&(e.isLeafNode()||e.forEachChild(lt,(o,h)=>{i.hasChild(o)||a.trackChildChange(Lo(o,h))}),i.isLeafNode()||i.forEachChild(lt,(o,h)=>{if(e.hasChild(o)){const d=e.getImmediateChild(o);d.equals(h)||a.trackChildChange(Uo(o,h,d))}else a.trackChildChange(Wa(o,h))})),i.withIndex(this.index_)}updatePriority(e,i){return e.isEmpty()?he.EMPTY_NODE:e.updatePriority(i)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e){this.indexedFilter_=new jp(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Po.getStartPost_(e),this.endPost_=Po.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const i=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,a=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return i&&a}updateChild(e,i,a,o,h,d){return this.matches(new we(i,a))||(a=he.EMPTY_NODE),this.indexedFilter_.updateChild(e,i,a,o,h,d)}updateFullNode(e,i,a){i.isLeafNode()&&(i=he.EMPTY_NODE);let o=i.withIndex(this.index_);o=o.updatePriority(he.EMPTY_NODE);const h=this;return i.forEachChild(lt,(d,g)=>{h.matches(new we(d,g))||(o=o.updateImmediateChild(d,he.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,o,a)}updatePriority(e,i){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const i=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),i)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const i=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),i)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e){this.withinDirectionalStart=i=>this.reverse_?this.withinEndPost(i):this.withinStartPost(i),this.withinDirectionalEnd=i=>this.reverse_?this.withinStartPost(i):this.withinEndPost(i),this.withinStartPost=i=>{const a=this.index_.compare(this.rangedFilter_.getStartPost(),i);return this.startIsInclusive_?a<=0:a<0},this.withinEndPost=i=>{const a=this.index_.compare(i,this.rangedFilter_.getEndPost());return this.endIsInclusive_?a<=0:a<0},this.rangedFilter_=new Po(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,i,a,o,h,d){return this.rangedFilter_.matches(new we(i,a))||(a=he.EMPTY_NODE),e.getImmediateChild(i).equals(a)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,i,a,o,h,d):this.fullLimitUpdateChild_(e,i,a,h,d)}updateFullNode(e,i,a){let o;if(i.isLeafNode()||i.isEmpty())o=he.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<i.numChildren()&&i.isIndexed(this.index_)){o=he.EMPTY_NODE.withIndex(this.index_);let h;this.reverse_?h=i.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):h=i.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let d=0;for(;h.hasNext()&&d<this.limit_;){const g=h.getNext();if(this.withinDirectionalStart(g))if(this.withinDirectionalEnd(g))o=o.updateImmediateChild(g.name,g.node),d++;else break;else continue}}else{o=i.withIndex(this.index_),o=o.updatePriority(he.EMPTY_NODE);let h;this.reverse_?h=o.getReverseIterator(this.index_):h=o.getIterator(this.index_);let d=0;for(;h.hasNext();){const g=h.getNext();d<this.limit_&&this.withinDirectionalStart(g)&&this.withinDirectionalEnd(g)?d++:o=o.updateImmediateChild(g.name,he.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,o,a)}updatePriority(e,i){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,i,a,o,h){let d;if(this.reverse_){const A=this.index_.getCompare();d=(C,X)=>A(X,C)}else d=this.index_.getCompare();const g=e;J(g.numChildren()===this.limit_,"");const v=new we(i,a),y=this.reverse_?g.getFirstChild(this.index_):g.getLastChild(this.index_),T=this.rangedFilter_.matches(v);if(g.hasChild(i)){const A=g.getImmediateChild(i);let C=o.getChildAfterChild(this.index_,y,this.reverse_);for(;C!=null&&(C.name===i||g.hasChild(C.name));)C=o.getChildAfterChild(this.index_,C,this.reverse_);const X=C==null?1:d(C,v);if(T&&!a.isEmpty()&&X>=0)return h?.trackChildChange(Uo(i,a,A)),g.updateImmediateChild(i,a);{h?.trackChildChange(Lo(i,A));const Z=g.updateImmediateChild(i,he.EMPTY_NODE);return C!=null&&this.rangedFilter_.matches(C)?(h?.trackChildChange(Wa(C.name,C.node)),Z.updateImmediateChild(C.name,C.node)):Z}}else return a.isEmpty()?e:T&&d(y,v)>=0?(h!=null&&(h.trackChildChange(Lo(y.name,y.node)),h.trackChildChange(Wa(i,a))),g.updateImmediateChild(i,a).updateImmediateChild(y.name,he.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=lt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return J(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return J(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ka}hasEnd(){return this.endSet_}getIndexEndValue(){return J(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return J(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Pr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return J(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===lt}copy(){const e=new Hp;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function pC(s){return s.loadsAllData()?new jp(s.getIndex()):s.hasLimit()?new dC(s):new Po(s)}function Tv(s){const e={};if(s.isDefault())return e;let i;if(s.index_===lt?i="$priority":s.index_===hC?i="$value":s.index_===qa?i="$key":(J(s.index_ instanceof uC,"Unrecognized index type!"),i=s.index_.toString()),e.orderBy=Lt(i),s.startSet_){const a=s.startAfterSet_?"startAfter":"startAt";e[a]=Lt(s.indexStartValue_),s.startNameSet_&&(e[a]+=","+Lt(s.indexStartName_))}if(s.endSet_){const a=s.endBeforeSet_?"endBefore":"endAt";e[a]=Lt(s.indexEndValue_),s.endNameSet_&&(e[a]+=","+Lt(s.indexEndName_))}return s.limitSet_&&(s.isViewFromLeft()?e.limitToFirst=s.limit_:e.limitToLast=s.limit_),e}function bv(s){const e={};if(s.startSet_&&(e.sp=s.indexStartValue_,s.startNameSet_&&(e.sn=s.indexStartName_),e.sin=!s.startAfterSet_),s.endSet_&&(e.ep=s.indexEndValue_,s.endNameSet_&&(e.en=s.indexEndName_),e.ein=!s.endBeforeSet_),s.limitSet_){e.l=s.limit_;let i=s.viewFrom_;i===""&&(s.isViewFromLeft()?i="l":i="r"),e.vf=i}return s.index_!==lt&&(e.i=s.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc extends o1{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,i){return i!==void 0?"tag$"+i:(J(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,i,a,o){super(),this.repoInfo_=e,this.onDataUpdate_=i,this.authTokenProvider_=a,this.appCheckTokenProvider_=o,this.log_=Yo("p:rest:"),this.listens_={}}listen(e,i,a,o){const h=e._path.toString();this.log_("Listen called for "+h+" "+e._queryIdentifier);const d=Xc.getListenId_(e,a),g={};this.listens_[d]=g;const v=Tv(e._queryParams);this.restRequest_(h+".json",v,(y,T)=>{let A=T;if(y===404&&(A=null,y=null),y===null&&this.onDataUpdate_(h,A,!1,a),Lr(this.listens_,d)===g){let C;y?y===401?C="permission_denied":C="rest_error:"+y:C="ok",o(C,null)}})}unlisten(e,i){const a=Xc.getListenId_(e,i);delete this.listens_[a]}get(e){const i=Tv(e._queryParams),a=e._path.toString(),o=new il;return this.restRequest_(a+".json",i,(h,d)=>{let g=d;h===404&&(g=null,h=null),h===null?(this.onDataUpdate_(a,g,!1,null),o.resolve(g)):o.reject(new Error(g))}),o.promise}refreshAuthToken(e){}restRequest_(e,i={},a){return i.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,h])=>{o&&o.accessToken&&(i.auth=o.accessToken),h&&h.token&&(i.ac=h.token);const d=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+sl(i);this.log_("Sending REST request for "+d);const g=new XMLHttpRequest;g.onreadystatechange=()=>{if(a&&g.readyState===4){this.log_("REST Response for "+d+" received. status:",g.status,"response:",g.responseText);let v=null;if(g.status>=200&&g.status<300){try{v=Do(g.responseText)}catch{Kt("Failed to parse JSON response for "+d+": "+g.responseText)}a(null,v)}else g.status!==401&&g.status!==404&&Kt("Got unsuccessful REST response for "+d+" Status: "+g.status),a(g.status);a=null}},g.open("GET",d,!0),g.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(){this.rootNode_=he.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,i){this.rootNode_=this.rootNode_.updateChild(e,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(){return{value:null,children:new Map}}function y1(s,e,i){if(Re(e))s.value=i,s.children.clear();else if(s.value!==null)s.value=s.value.updateChild(e,i);else{const a=be(e);s.children.has(a)||s.children.set(a,Qc());const o=s.children.get(a);e=tt(e),y1(o,e,i)}}function ap(s,e,i){s.value!==null?i(e,s.value):mC(s,(a,o)=>{const h=new Qe(e.toString()+"/"+a);ap(o,h,i)})}function mC(s,e){s.children.forEach((i,a)=>{e(a,i)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),i={...e};return this.last_&&Bt(this.last_,(a,o)=>{i[a]=i[a]-o}),this.last_=e,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv=10*1e3,yC=30*1e3,vC=300*1e3;class SC{constructor(e,i){this.server_=i,this.statsToReport_={},this.statsListener_=new _C(e);const a=wv+(yC-wv)*Math.random();bo(this.reportStats_.bind(this),Math.floor(a))}reportStats_(){const e=this.statsListener_.get(),i={};let a=!1;Bt(e,(o,h)=>{h>0&&Gn(this.statsToReport_,o)&&(i[o]=h,a=!0)}),a&&this.server_.reportStats(i),bo(this.reportStats_.bind(this),Math.floor(Math.random()*2*vC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Hn;(function(s){s[s.OVERWRITE=0]="OVERWRITE",s[s.MERGE=1]="MERGE",s[s.ACK_USER_WRITE=2]="ACK_USER_WRITE",s[s.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Hn||(Hn={}));function Bp(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Vp(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function qp(s){return{fromUser:!1,fromServer:!0,queryId:s,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e,i,a){this.path=e,this.affectedTree=i,this.revert=a,this.type=Hn.ACK_USER_WRITE,this.source=Bp()}operationForChild(e){if(Re(this.path)){if(this.affectedTree.value!=null)return J(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const i=this.affectedTree.subtree(new Qe(e));return new Kc(ze(),i,this.revert)}}else return J(be(this.path)===e,"operationForChild called for unrelated child."),new Kc(tt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,i){this.source=e,this.path=i,this.type=Hn.LISTEN_COMPLETE}operationForChild(e){return Re(this.path)?new zo(this.source,ze()):new zo(this.source,tt(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,i,a){this.source=e,this.path=i,this.snap=a,this.type=Hn.OVERWRITE}operationForChild(e){return Re(this.path)?new zr(this.source,ze(),this.snap.getImmediateChild(e)):new zr(this.source,tt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,i,a){this.source=e,this.path=i,this.children=a,this.type=Hn.MERGE}operationForChild(e){if(Re(this.path)){const i=this.children.subtree(new Qe(e));return i.isEmpty()?null:i.value?new zr(this.source,ze(),i.value):new Za(this.source,ze(),i)}else return J(be(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Za(this.source,tt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,i,a){this.node_=e,this.fullyInitialized_=i,this.filtered_=a}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Re(e))return this.isFullyInitialized()&&!this.filtered_;const i=be(e);return this.isCompleteForChild(i)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function TC(s,e,i,a){const o=[],h=[];return e.forEach(d=>{d.type==="child_changed"&&s.index_.indexedValueChanged(d.oldSnap,d.snapshotNode)&&h.push(fC(d.childName,d.snapshotNode))}),So(s,o,"child_removed",e,a,i),So(s,o,"child_added",e,a,i),So(s,o,"child_moved",h,a,i),So(s,o,"child_changed",e,a,i),So(s,o,"value",e,a,i),o}function So(s,e,i,a,o,h){const d=a.filter(g=>g.type===i);d.sort((g,v)=>wC(s,g,v)),d.forEach(g=>{const v=bC(s,g,h);o.forEach(y=>{y.respondsTo(g.type)&&e.push(y.createEvent(v,s.query_))})})}function bC(s,e,i){return e.type==="value"||e.type==="child_removed"||(e.prevName=i.getPredecessorChildName(e.childName,e.snapshotNode,s.index_)),e}function wC(s,e,i){if(e.childName==null||i.childName==null)throw nl("Should only compare child_ events.");const a=new we(e.childName,e.snapshotNode),o=new we(i.childName,i.snapshotNode);return s.index_.compare(a,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ph(s,e){return{eventCache:s,serverCache:e}}function wo(s,e,i,a){return ph(new jr(e,i,a),s.serverCache)}function v1(s,e,i,a){return ph(s.eventCache,new jr(e,i,a))}function lp(s){return s.eventCache.isFullyInitialized()?s.eventCache.getNode():null}function Hr(s){return s.serverCache.isFullyInitialized()?s.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qd;const CC=()=>(qd||(qd=new sn(uw)),qd);class et{static fromObject(e){let i=new et(null);return Bt(e,(a,o)=>{i=i.set(new Qe(a),o)}),i}constructor(e,i=CC()){this.value=e,this.children=i}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,i){if(this.value!=null&&i(this.value))return{path:ze(),value:this.value};if(Re(e))return null;{const a=be(e),o=this.children.get(a);if(o!==null){const h=o.findRootMostMatchingPathAndValue(tt(e),i);return h!=null?{path:ht(new Qe(a),h.path),value:h.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Re(e))return this;{const i=be(e),a=this.children.get(i);return a!==null?a.subtree(tt(e)):new et(null)}}set(e,i){if(Re(e))return new et(i,this.children);{const a=be(e),h=(this.children.get(a)||new et(null)).set(tt(e),i),d=this.children.insert(a,h);return new et(this.value,d)}}remove(e){if(Re(e))return this.children.isEmpty()?new et(null):new et(null,this.children);{const i=be(e),a=this.children.get(i);if(a){const o=a.remove(tt(e));let h;return o.isEmpty()?h=this.children.remove(i):h=this.children.insert(i,o),this.value===null&&h.isEmpty()?new et(null):new et(this.value,h)}else return this}}get(e){if(Re(e))return this.value;{const i=be(e),a=this.children.get(i);return a?a.get(tt(e)):null}}setTree(e,i){if(Re(e))return i;{const a=be(e),h=(this.children.get(a)||new et(null)).setTree(tt(e),i);let d;return h.isEmpty()?d=this.children.remove(a):d=this.children.insert(a,h),new et(this.value,d)}}fold(e){return this.fold_(ze(),e)}fold_(e,i){const a={};return this.children.inorderTraversal((o,h)=>{a[o]=h.fold_(ht(e,o),i)}),i(e,this.value,a)}findOnPath(e,i){return this.findOnPath_(e,ze(),i)}findOnPath_(e,i,a){const o=this.value?a(i,this.value):!1;if(o)return o;if(Re(e))return null;{const h=be(e),d=this.children.get(h);return d?d.findOnPath_(tt(e),ht(i,h),a):null}}foreachOnPath(e,i){return this.foreachOnPath_(e,ze(),i)}foreachOnPath_(e,i,a){if(Re(e))return this;{this.value&&a(i,this.value);const o=be(e),h=this.children.get(o);return h?h.foreachOnPath_(tt(e),ht(i,o),a):new et(null)}}foreach(e){this.foreach_(ze(),e)}foreach_(e,i){this.children.inorderTraversal((a,o)=>{o.foreach_(ht(e,a),i)}),this.value&&i(e,this.value)}foreachChild(e){this.children.inorderTraversal((i,a)=>{a.value&&e(i,a.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this.writeTree_=e}static empty(){return new qn(new et(null))}}function Co(s,e,i){if(Re(e))return new qn(new et(i));{const a=s.writeTree_.findRootMostValueAndPath(e);if(a!=null){const o=a.path;let h=a.value;const d=nn(o,e);return h=h.updateChild(d,i),new qn(s.writeTree_.set(o,h))}else{const o=new et(i),h=s.writeTree_.setTree(e,o);return new qn(h)}}}function op(s,e,i){let a=s;return Bt(i,(o,h)=>{a=Co(a,ht(e,o),h)}),a}function Cv(s,e){if(Re(e))return qn.empty();{const i=s.writeTree_.setTree(e,new et(null));return new qn(i)}}function up(s,e){return Yr(s,e)!=null}function Yr(s,e){const i=s.writeTree_.findRootMostValueAndPath(e);return i!=null?s.writeTree_.get(i.path).getChild(nn(i.path,e)):null}function Av(s){const e=[],i=s.writeTree_.value;return i!=null?i.isLeafNode()||i.forEachChild(lt,(a,o)=>{e.push(new we(a,o))}):s.writeTree_.children.inorderTraversal((a,o)=>{o.value!=null&&e.push(new we(a,o.value))}),e}function ks(s,e){if(Re(e))return s;{const i=Yr(s,e);return i!=null?new qn(new et(i)):new qn(s.writeTree_.subtree(e))}}function cp(s){return s.writeTree_.isEmpty()}function $a(s,e){return S1(ze(),s.writeTree_,e)}function S1(s,e,i){if(e.value!=null)return i.updateChild(s,e.value);{let a=null;return e.children.inorderTraversal((o,h)=>{o===".priority"?(J(h.value!==null,"Priority writes must always be leaf nodes"),a=h.value):i=S1(ht(s,o),h,i)}),!i.getChild(s).isEmpty()&&a!==null&&(i=i.updateChild(ht(s,".priority"),a)),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(s,e){return w1(e,s)}function AC(s,e,i,a,o){J(a>s.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),s.allWrites.push({path:e,snap:i,writeId:a,visible:o}),o&&(s.visibleWrites=Co(s.visibleWrites,e,i)),s.lastWriteId=a}function RC(s,e,i,a){J(a>s.lastWriteId,"Stacking an older merge on top of newer ones"),s.allWrites.push({path:e,children:i,writeId:a,visible:!0}),s.visibleWrites=op(s.visibleWrites,e,i),s.lastWriteId=a}function NC(s,e){for(let i=0;i<s.allWrites.length;i++){const a=s.allWrites[i];if(a.writeId===e)return a}return null}function IC(s,e){const i=s.allWrites.findIndex(g=>g.writeId===e);J(i>=0,"removeWrite called with nonexistent writeId.");const a=s.allWrites[i];s.allWrites.splice(i,1);let o=a.visible,h=!1,d=s.allWrites.length-1;for(;o&&d>=0;){const g=s.allWrites[d];g.visible&&(d>=i&&OC(g,a.path)?o=!1:In(a.path,g.path)&&(h=!0)),d--}if(o){if(h)return DC(s),!0;if(a.snap)s.visibleWrites=Cv(s.visibleWrites,a.path);else{const g=a.children;Bt(g,v=>{s.visibleWrites=Cv(s.visibleWrites,ht(a.path,v))})}return!0}else return!1}function OC(s,e){if(s.snap)return In(s.path,e);for(const i in s.children)if(s.children.hasOwnProperty(i)&&In(ht(s.path,i),e))return!0;return!1}function DC(s){s.visibleWrites=E1(s.allWrites,xC,ze()),s.allWrites.length>0?s.lastWriteId=s.allWrites[s.allWrites.length-1].writeId:s.lastWriteId=-1}function xC(s){return s.visible}function E1(s,e,i){let a=qn.empty();for(let o=0;o<s.length;++o){const h=s[o];if(e(h)){const d=h.path;let g;if(h.snap)In(i,d)?(g=nn(i,d),a=Co(a,g,h.snap)):In(d,i)&&(g=nn(d,i),a=Co(a,ze(),h.snap.getChild(g)));else if(h.children){if(In(i,d))g=nn(i,d),a=op(a,g,h.children);else if(In(d,i))if(g=nn(d,i),Re(g))a=op(a,ze(),h.children);else{const v=Lr(h.children,be(g));if(v){const y=v.getChild(tt(g));a=Co(a,ze(),y)}}}else throw nl("WriteRecord should have .snap or .children")}}return a}function T1(s,e,i,a,o){if(!a&&!o){const h=Yr(s.visibleWrites,e);if(h!=null)return h;{const d=ks(s.visibleWrites,e);if(cp(d))return i;if(i==null&&!up(d,ze()))return null;{const g=i||he.EMPTY_NODE;return $a(d,g)}}}else{const h=ks(s.visibleWrites,e);if(!o&&cp(h))return i;if(!o&&i==null&&!up(h,ze()))return null;{const d=function(y){return(y.visible||o)&&(!a||!~a.indexOf(y.writeId))&&(In(y.path,e)||In(e,y.path))},g=E1(s.allWrites,d,e),v=i||he.EMPTY_NODE;return $a(g,v)}}}function MC(s,e,i){let a=he.EMPTY_NODE;const o=Yr(s.visibleWrites,e);if(o)return o.isLeafNode()||o.forEachChild(lt,(h,d)=>{a=a.updateImmediateChild(h,d)}),a;if(i){const h=ks(s.visibleWrites,e);return i.forEachChild(lt,(d,g)=>{const v=$a(ks(h,new Qe(d)),g);a=a.updateImmediateChild(d,v)}),Av(h).forEach(d=>{a=a.updateImmediateChild(d.name,d.node)}),a}else{const h=ks(s.visibleWrites,e);return Av(h).forEach(d=>{a=a.updateImmediateChild(d.name,d.node)}),a}}function kC(s,e,i,a,o){J(a||o,"Either existingEventSnap or existingServerSnap must exist");const h=ht(e,i);if(up(s.visibleWrites,h))return null;{const d=ks(s.visibleWrites,h);return cp(d)?o.getChild(i):$a(d,o.getChild(i))}}function LC(s,e,i,a){const o=ht(e,i),h=Yr(s.visibleWrites,o);if(h!=null)return h;if(a.isCompleteForChild(i)){const d=ks(s.visibleWrites,o);return $a(d,a.getNode().getImmediateChild(i))}else return null}function UC(s,e){return Yr(s.visibleWrites,e)}function PC(s,e,i,a,o,h,d){let g;const v=ks(s.visibleWrites,e),y=Yr(v,ze());if(y!=null)g=y;else if(i!=null)g=$a(v,i);else return[];if(g=g.withIndex(d),!g.isEmpty()&&!g.isLeafNode()){const T=[],A=d.getCompare(),C=h?g.getReverseIteratorFrom(a,d):g.getIteratorFrom(a,d);let X=C.getNext();for(;X&&T.length<o;)A(X,a)!==0&&T.push(X),X=C.getNext();return T}else return[]}function zC(){return{visibleWrites:qn.empty(),allWrites:[],lastWriteId:-1}}function Wc(s,e,i,a){return T1(s.writeTree,s.treePath,e,i,a)}function Fp(s,e){return MC(s.writeTree,s.treePath,e)}function Rv(s,e,i,a){return kC(s.writeTree,s.treePath,e,i,a)}function Zc(s,e){return UC(s.writeTree,ht(s.treePath,e))}function jC(s,e,i,a,o,h){return PC(s.writeTree,s.treePath,e,i,a,o,h)}function Yp(s,e,i){return LC(s.writeTree,s.treePath,e,i)}function b1(s,e){return w1(ht(s.treePath,e),s.writeTree)}function w1(s,e){return{treePath:s,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(){this.changeMap=new Map}trackChildChange(e){const i=e.type,a=e.childName;J(i==="child_added"||i==="child_changed"||i==="child_removed","Only child changes supported for tracking"),J(a!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(a);if(o){const h=o.type;if(i==="child_added"&&h==="child_removed")this.changeMap.set(a,Uo(a,e.snapshotNode,o.snapshotNode));else if(i==="child_removed"&&h==="child_added")this.changeMap.delete(a);else if(i==="child_removed"&&h==="child_changed")this.changeMap.set(a,Lo(a,o.oldSnap));else if(i==="child_changed"&&h==="child_added")this.changeMap.set(a,Wa(a,e.snapshotNode));else if(i==="child_changed"&&h==="child_changed")this.changeMap.set(a,Uo(a,e.snapshotNode,o.oldSnap));else throw nl("Illegal combination of changes: "+e+" occurred after "+o)}else this.changeMap.set(a,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{getCompleteChild(e){return null}getChildAfterChild(e,i,a){return null}}const C1=new BC;class Xp{constructor(e,i,a=null){this.writes_=e,this.viewCache_=i,this.optCompleteServerCache_=a}getCompleteChild(e){const i=this.viewCache_.eventCache;if(i.isCompleteForChild(e))return i.getNode().getImmediateChild(e);{const a=this.optCompleteServerCache_!=null?new jr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Yp(this.writes_,e,a)}}getChildAfterChild(e,i,a){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Hr(this.viewCache_),h=jC(this.writes_,o,i,1,a,e);return h.length===0?null:h[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VC(s){return{filter:s}}function qC(s,e){J(e.eventCache.getNode().isIndexed(s.filter.getIndex()),"Event snap not indexed"),J(e.serverCache.getNode().isIndexed(s.filter.getIndex()),"Server snap not indexed")}function GC(s,e,i,a,o){const h=new HC;let d,g;if(i.type===Hn.OVERWRITE){const y=i;y.source.fromUser?d=hp(s,e,y.path,y.snap,a,o,h):(J(y.source.fromServer,"Unknown source."),g=y.source.tagged||e.serverCache.isFiltered()&&!Re(y.path),d=$c(s,e,y.path,y.snap,a,o,g,h))}else if(i.type===Hn.MERGE){const y=i;y.source.fromUser?d=YC(s,e,y.path,y.children,a,o,h):(J(y.source.fromServer,"Unknown source."),g=y.source.tagged||e.serverCache.isFiltered(),d=fp(s,e,y.path,y.children,a,o,g,h))}else if(i.type===Hn.ACK_USER_WRITE){const y=i;y.revert?d=KC(s,e,y.path,a,o,h):d=XC(s,e,y.path,y.affectedTree,a,o,h)}else if(i.type===Hn.LISTEN_COMPLETE)d=QC(s,e,i.path,a,h);else throw nl("Unknown operation type: "+i.type);const v=h.getChanges();return FC(e,d,v),{viewCache:d,changes:v}}function FC(s,e,i){const a=e.eventCache;if(a.isFullyInitialized()){const o=a.getNode().isLeafNode()||a.getNode().isEmpty(),h=lp(s);(i.length>0||!s.eventCache.isFullyInitialized()||o&&!a.getNode().equals(h)||!a.getNode().getPriority().equals(h.getPriority()))&&i.push(_1(lp(e)))}}function A1(s,e,i,a,o,h){const d=e.eventCache;if(Zc(a,i)!=null)return e;{let g,v;if(Re(i))if(J(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const y=Hr(e),T=y instanceof he?y:he.EMPTY_NODE,A=Fp(a,T);g=s.filter.updateFullNode(e.eventCache.getNode(),A,h)}else{const y=Wc(a,Hr(e));g=s.filter.updateFullNode(e.eventCache.getNode(),y,h)}else{const y=be(i);if(y===".priority"){J(Ps(i)===1,"Can't have a priority with additional path components");const T=d.getNode();v=e.serverCache.getNode();const A=Rv(a,i,T,v);A!=null?g=s.filter.updatePriority(T,A):g=d.getNode()}else{const T=tt(i);let A;if(d.isCompleteForChild(y)){v=e.serverCache.getNode();const C=Rv(a,i,d.getNode(),v);C!=null?A=d.getNode().getImmediateChild(y).updateChild(T,C):A=d.getNode().getImmediateChild(y)}else A=Yp(a,y,e.serverCache);A!=null?g=s.filter.updateChild(d.getNode(),y,A,T,o,h):g=d.getNode()}}return wo(e,g,d.isFullyInitialized()||Re(i),s.filter.filtersNodes())}}function $c(s,e,i,a,o,h,d,g){const v=e.serverCache;let y;const T=d?s.filter:s.filter.getIndexedFilter();if(Re(i))y=T.updateFullNode(v.getNode(),a,null);else if(T.filtersNodes()&&!v.isFiltered()){const X=v.getNode().updateChild(i,a);y=T.updateFullNode(v.getNode(),X,null)}else{const X=be(i);if(!v.isCompleteForPath(i)&&Ps(i)>1)return e;const F=tt(i),te=v.getNode().getImmediateChild(X).updateChild(F,a);X===".priority"?y=T.updatePriority(v.getNode(),te):y=T.updateChild(v.getNode(),X,te,F,C1,null)}const A=v1(e,y,v.isFullyInitialized()||Re(i),T.filtersNodes()),C=new Xp(o,A,h);return A1(s,A,i,o,C,g)}function hp(s,e,i,a,o,h,d){const g=e.eventCache;let v,y;const T=new Xp(o,e,h);if(Re(i))y=s.filter.updateFullNode(e.eventCache.getNode(),a,d),v=wo(e,y,!0,s.filter.filtersNodes());else{const A=be(i);if(A===".priority")y=s.filter.updatePriority(e.eventCache.getNode(),a),v=wo(e,y,g.isFullyInitialized(),g.isFiltered());else{const C=tt(i),X=g.getNode().getImmediateChild(A);let F;if(Re(C))F=a;else{const Z=T.getCompleteChild(A);Z!=null?Lp(C)===".priority"&&Z.getChild(c1(C)).isEmpty()?F=Z:F=Z.updateChild(C,a):F=he.EMPTY_NODE}if(X.equals(F))v=e;else{const Z=s.filter.updateChild(g.getNode(),A,F,C,T,d);v=wo(e,Z,g.isFullyInitialized(),s.filter.filtersNodes())}}}return v}function Nv(s,e){return s.eventCache.isCompleteForChild(e)}function YC(s,e,i,a,o,h,d){let g=e;return a.foreach((v,y)=>{const T=ht(i,v);Nv(e,be(T))&&(g=hp(s,g,T,y,o,h,d))}),a.foreach((v,y)=>{const T=ht(i,v);Nv(e,be(T))||(g=hp(s,g,T,y,o,h,d))}),g}function Iv(s,e,i){return i.foreach((a,o)=>{e=e.updateChild(a,o)}),e}function fp(s,e,i,a,o,h,d,g){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let v=e,y;Re(i)?y=a:y=new et(null).setTree(i,a);const T=e.serverCache.getNode();return y.children.inorderTraversal((A,C)=>{if(T.hasChild(A)){const X=e.serverCache.getNode().getImmediateChild(A),F=Iv(s,X,C);v=$c(s,v,new Qe(A),F,o,h,d,g)}}),y.children.inorderTraversal((A,C)=>{const X=!e.serverCache.isCompleteForChild(A)&&C.value===null;if(!T.hasChild(A)&&!X){const F=e.serverCache.getNode().getImmediateChild(A),Z=Iv(s,F,C);v=$c(s,v,new Qe(A),Z,o,h,d,g)}}),v}function XC(s,e,i,a,o,h,d){if(Zc(o,i)!=null)return e;const g=e.serverCache.isFiltered(),v=e.serverCache;if(a.value!=null){if(Re(i)&&v.isFullyInitialized()||v.isCompleteForPath(i))return $c(s,e,i,v.getNode().getChild(i),o,h,g,d);if(Re(i)){let y=new et(null);return v.getNode().forEachChild(qa,(T,A)=>{y=y.set(new Qe(T),A)}),fp(s,e,i,y,o,h,g,d)}else return e}else{let y=new et(null);return a.foreach((T,A)=>{const C=ht(i,T);v.isCompleteForPath(C)&&(y=y.set(T,v.getNode().getChild(C)))}),fp(s,e,i,y,o,h,g,d)}}function QC(s,e,i,a,o){const h=e.serverCache,d=v1(e,h.getNode(),h.isFullyInitialized()||Re(i),h.isFiltered());return A1(s,d,i,a,C1,o)}function KC(s,e,i,a,o,h){let d;if(Zc(a,i)!=null)return e;{const g=new Xp(a,e,o),v=e.eventCache.getNode();let y;if(Re(i)||be(i)===".priority"){let T;if(e.serverCache.isFullyInitialized())T=Wc(a,Hr(e));else{const A=e.serverCache.getNode();J(A instanceof he,"serverChildren would be complete if leaf node"),T=Fp(a,A)}T=T,y=s.filter.updateFullNode(v,T,h)}else{const T=be(i);let A=Yp(a,T,e.serverCache);A==null&&e.serverCache.isCompleteForChild(T)&&(A=v.getImmediateChild(T)),A!=null?y=s.filter.updateChild(v,T,A,tt(i),g,h):e.eventCache.getNode().hasChild(T)?y=s.filter.updateChild(v,T,he.EMPTY_NODE,tt(i),g,h):y=v,y.isEmpty()&&e.serverCache.isFullyInitialized()&&(d=Wc(a,Hr(e)),d.isLeafNode()&&(y=s.filter.updateFullNode(y,d,h)))}return d=e.serverCache.isFullyInitialized()||Zc(a,ze())!=null,wo(e,y,d,s.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e,i){this.query_=e,this.eventRegistrations_=[];const a=this.query_._queryParams,o=new jp(a.getIndex()),h=pC(a);this.processor_=VC(h);const d=i.serverCache,g=i.eventCache,v=o.updateFullNode(he.EMPTY_NODE,d.getNode(),null),y=h.updateFullNode(he.EMPTY_NODE,g.getNode(),null),T=new jr(v,d.isFullyInitialized(),o.filtersNodes()),A=new jr(y,g.isFullyInitialized(),h.filtersNodes());this.viewCache_=ph(A,T),this.eventGenerator_=new EC(this.query_)}get query(){return this.query_}}function ZC(s){return s.viewCache_.serverCache.getNode()}function $C(s,e){const i=Hr(s.viewCache_);return i&&(s.query._queryParams.loadsAllData()||!Re(e)&&!i.getImmediateChild(be(e)).isEmpty())?i.getChild(e):null}function Ov(s){return s.eventRegistrations_.length===0}function JC(s,e){s.eventRegistrations_.push(e)}function Dv(s,e,i){const a=[];if(i){J(e==null,"A cancel should cancel all event registrations.");const o=s.query._path;s.eventRegistrations_.forEach(h=>{const d=h.createCancelEvent(i,o);d&&a.push(d)})}if(e){let o=[];for(let h=0;h<s.eventRegistrations_.length;++h){const d=s.eventRegistrations_[h];if(!d.matches(e))o.push(d);else if(e.hasAnyCallback()){o=o.concat(s.eventRegistrations_.slice(h+1));break}}s.eventRegistrations_=o}else s.eventRegistrations_=[];return a}function xv(s,e,i,a){e.type===Hn.MERGE&&e.source.queryId!==null&&(J(Hr(s.viewCache_),"We should always have a full cache before handling merges"),J(lp(s.viewCache_),"Missing event cache, even though we have a server cache"));const o=s.viewCache_,h=GC(s.processor_,o,e,i,a);return qC(s.processor_,h.viewCache),J(h.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),s.viewCache_=h.viewCache,R1(s,h.changes,h.viewCache.eventCache.getNode(),null)}function eA(s,e){const i=s.viewCache_.eventCache,a=[];return i.getNode().isLeafNode()||i.getNode().forEachChild(lt,(h,d)=>{a.push(Wa(h,d))}),i.isFullyInitialized()&&a.push(_1(i.getNode())),R1(s,a,i.getNode(),e)}function R1(s,e,i,a){const o=a?[a]:s.eventRegistrations_;return TC(s.eventGenerator_,e,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jc;class tA{constructor(){this.views=new Map}}function nA(s){J(!Jc,"__referenceConstructor has already been defined"),Jc=s}function iA(){return J(Jc,"Reference.ts has not been loaded"),Jc}function sA(s){return s.views.size===0}function Qp(s,e,i,a){const o=e.source.queryId;if(o!==null){const h=s.views.get(o);return J(h!=null,"SyncTree gave us an op for an invalid query."),xv(h,e,i,a)}else{let h=[];for(const d of s.views.values())h=h.concat(xv(d,e,i,a));return h}}function rA(s,e,i,a,o){const h=e._queryIdentifier,d=s.views.get(h);if(!d){let g=Wc(i,o?a:null),v=!1;g?v=!0:a instanceof he?(g=Fp(i,a),v=!1):(g=he.EMPTY_NODE,v=!1);const y=ph(new jr(g,v,!1),new jr(a,o,!1));return new WC(e,y)}return d}function aA(s,e,i,a,o,h){const d=rA(s,e,a,o,h);return s.views.has(e._queryIdentifier)||s.views.set(e._queryIdentifier,d),JC(d,i),eA(d,i)}function lA(s,e,i,a){const o=e._queryIdentifier,h=[];let d=[];const g=zs(s);if(o==="default")for(const[v,y]of s.views.entries())d=d.concat(Dv(y,i,a)),Ov(y)&&(s.views.delete(v),y.query._queryParams.loadsAllData()||h.push(y.query));else{const v=s.views.get(o);v&&(d=d.concat(Dv(v,i,a)),Ov(v)&&(s.views.delete(o),v.query._queryParams.loadsAllData()||h.push(v.query)))}return g&&!zs(s)&&h.push(new(iA())(e._repo,e._path)),{removed:h,events:d}}function N1(s){const e=[];for(const i of s.views.values())i.query._queryParams.loadsAllData()||e.push(i);return e}function Ga(s,e){let i=null;for(const a of s.views.values())i=i||$C(a,e);return i}function I1(s,e){if(e._queryParams.loadsAllData())return gh(s);{const a=e._queryIdentifier;return s.views.get(a)}}function O1(s,e){return I1(s,e)!=null}function zs(s){return gh(s)!=null}function gh(s){for(const e of s.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eh;function oA(s){J(!eh,"__referenceConstructor has already been defined"),eh=s}function uA(){return J(eh,"Reference.ts has not been loaded"),eh}let cA=1;class Mv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new et(null),this.pendingWriteTree_=zC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Kp(s,e,i,a,o){return AC(s.pendingWriteTree_,e,i,a,o),o?al(s,new zr(Bp(),e,i)):[]}function hA(s,e,i,a){RC(s.pendingWriteTree_,e,i,a);const o=et.fromObject(i);return al(s,new Za(Bp(),e,o))}function Ds(s,e,i=!1){const a=NC(s.pendingWriteTree_,e);if(IC(s.pendingWriteTree_,e)){let h=new et(null);return a.snap!=null?h=h.set(ze(),!0):Bt(a.children,d=>{h=h.set(new Qe(d),!0)}),al(s,new Kc(a.path,h,i))}else return[]}function mh(s,e,i){return al(s,new zr(Vp(),e,i))}function fA(s,e,i){const a=et.fromObject(i);return al(s,new Za(Vp(),e,a))}function dA(s,e){return al(s,new zo(Vp(),e))}function pA(s,e,i){const a=Wp(s,i);if(a){const o=Zp(a),h=o.path,d=o.queryId,g=nn(h,e),v=new zo(qp(d),g);return $p(s,h,v)}else return[]}function dp(s,e,i,a,o=!1){const h=e._path,d=s.syncPointTree_.get(h);let g=[];if(d&&(e._queryIdentifier==="default"||O1(d,e))){const v=lA(d,e,i,a);sA(d)&&(s.syncPointTree_=s.syncPointTree_.remove(h));const y=v.removed;if(g=v.events,!o){const T=y.findIndex(C=>C._queryParams.loadsAllData())!==-1,A=s.syncPointTree_.findOnPath(h,(C,X)=>zs(X));if(T&&!A){const C=s.syncPointTree_.subtree(h);if(!C.isEmpty()){const X=_A(C);for(let F=0;F<X.length;++F){const Z=X[F],te=Z.query,re=M1(s,Z);s.listenProvider_.startListening(Ao(te),th(s,te),re.hashFn,re.onComplete)}}}!A&&y.length>0&&!a&&(T?s.listenProvider_.stopListening(Ao(e),null):y.forEach(C=>{const X=s.queryToTagMap.get(yh(C));s.listenProvider_.stopListening(Ao(C),X)}))}yA(s,y)}return g}function gA(s,e,i,a){const o=Wp(s,a);if(o!=null){const h=Zp(o),d=h.path,g=h.queryId,v=nn(d,e),y=new zr(qp(g),v,i);return $p(s,d,y)}else return[]}function mA(s,e,i,a){const o=Wp(s,a);if(o){const h=Zp(o),d=h.path,g=h.queryId,v=nn(d,e),y=et.fromObject(i),T=new Za(qp(g),v,y);return $p(s,d,T)}else return[]}function kv(s,e,i,a=!1){const o=e._path;let h=null,d=!1;s.syncPointTree_.foreachOnPath(o,(C,X)=>{const F=nn(C,o);h=h||Ga(X,F),d=d||zs(X)});let g=s.syncPointTree_.get(o);g?(d=d||zs(g),h=h||Ga(g,ze())):(g=new tA,s.syncPointTree_=s.syncPointTree_.set(o,g));let v;h!=null?v=!0:(v=!1,h=he.EMPTY_NODE,s.syncPointTree_.subtree(o).foreachChild((X,F)=>{const Z=Ga(F,ze());Z&&(h=h.updateImmediateChild(X,Z))}));const y=O1(g,e);if(!y&&!e._queryParams.loadsAllData()){const C=yh(e);J(!s.queryToTagMap.has(C),"View does not exist, but we have a tag");const X=vA();s.queryToTagMap.set(C,X),s.tagToQueryMap.set(X,C)}const T=Gp(s.pendingWriteTree_,o);let A=aA(g,e,i,T,h,v);if(!y&&!d&&!a){const C=I1(g,e);A=A.concat(SA(s,e,C))}return A}function _h(s,e,i){const o=s.pendingWriteTree_,h=s.syncPointTree_.findOnPath(e,(d,g)=>{const v=nn(d,e),y=Ga(g,v);if(y)return y});return T1(o,e,h,i,!0)}function al(s,e){return D1(e,s.syncPointTree_,null,Gp(s.pendingWriteTree_,ze()))}function D1(s,e,i,a){if(Re(s.path))return x1(s,e,i,a);{const o=e.get(ze());i==null&&o!=null&&(i=Ga(o,ze()));let h=[];const d=be(s.path),g=s.operationForChild(d),v=e.children.get(d);if(v&&g){const y=i?i.getImmediateChild(d):null,T=b1(a,d);h=h.concat(D1(g,v,y,T))}return o&&(h=h.concat(Qp(o,s,a,i))),h}}function x1(s,e,i,a){const o=e.get(ze());i==null&&o!=null&&(i=Ga(o,ze()));let h=[];return e.children.inorderTraversal((d,g)=>{const v=i?i.getImmediateChild(d):null,y=b1(a,d),T=s.operationForChild(d);T&&(h=h.concat(x1(T,g,v,y)))}),o&&(h=h.concat(Qp(o,s,a,i))),h}function M1(s,e){const i=e.query,a=th(s,i);return{hashFn:()=>(ZC(e)||he.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return a?pA(s,i._path,a):dA(s,i._path);{const h=fw(o,i);return dp(s,i,null,h)}}}}function th(s,e){const i=yh(e);return s.queryToTagMap.get(i)}function yh(s){return s._path.toString()+"$"+s._queryIdentifier}function Wp(s,e){return s.tagToQueryMap.get(e)}function Zp(s){const e=s.indexOf("$");return J(e!==-1&&e<s.length-1,"Bad queryKey."),{queryId:s.substr(e+1),path:new Qe(s.substr(0,e))}}function $p(s,e,i){const a=s.syncPointTree_.get(e);J(a,"Missing sync point for query tag that we're tracking");const o=Gp(s.pendingWriteTree_,e);return Qp(a,i,o,null)}function _A(s){return s.fold((e,i,a)=>{if(i&&zs(i))return[gh(i)];{let o=[];return i&&(o=N1(i)),Bt(a,(h,d)=>{o=o.concat(d)}),o}})}function Ao(s){return s._queryParams.loadsAllData()&&!s._queryParams.isDefault()?new(uA())(s._repo,s._path):s}function yA(s,e){for(let i=0;i<e.length;++i){const a=e[i];if(!a._queryParams.loadsAllData()){const o=yh(a),h=s.queryToTagMap.get(o);s.queryToTagMap.delete(o),s.tagToQueryMap.delete(h)}}}function vA(){return cA++}function SA(s,e,i){const a=e._path,o=th(s,e),h=M1(s,i),d=s.listenProvider_.startListening(Ao(e),o,h.hashFn,h.onComplete),g=s.syncPointTree_.subtree(a);if(o)J(!zs(g.value),"If we're adding a query, it shouldn't be shadowed");else{const v=g.fold((y,T,A)=>{if(!Re(y)&&T&&zs(T))return[gh(T).query];{let C=[];return T&&(C=C.concat(N1(T).map(X=>X.query))),Bt(A,(X,F)=>{C=C.concat(F)}),C}});for(let y=0;y<v.length;++y){const T=v[y];s.listenProvider_.stopListening(Ao(T),th(s,T))}}return d}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e){this.node_=e}getImmediateChild(e){const i=this.node_.getImmediateChild(e);return new Jp(i)}node(){return this.node_}}class eg{constructor(e,i){this.syncTree_=e,this.path_=i}getImmediateChild(e){const i=ht(this.path_,e);return new eg(this.syncTree_,i)}node(){return _h(this.syncTree_,this.path_)}}const EA=function(s){return s=s||{},s.timestamp=s.timestamp||new Date().getTime(),s},Lv=function(s,e,i){if(!s||typeof s!="object")return s;if(J(".sv"in s,"Unexpected leaf node or priority contents"),typeof s[".sv"]=="string")return TA(s[".sv"],e,i);if(typeof s[".sv"]=="object")return bA(s[".sv"],e);J(!1,"Unexpected server value: "+JSON.stringify(s,null,2))},TA=function(s,e,i){switch(s){case"timestamp":return i.timestamp;default:J(!1,"Unexpected server value: "+s)}},bA=function(s,e,i){s.hasOwnProperty("increment")||J(!1,"Unexpected server value: "+JSON.stringify(s,null,2));const a=s.increment;typeof a!="number"&&J(!1,"Unexpected increment value: "+a);const o=e.node();if(J(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return a;const d=o.getValue();return typeof d!="number"?a:d+a},k1=function(s,e,i,a){return ng(e,new eg(i,s),a)},tg=function(s,e,i){return ng(s,new Jp(e),i)};function ng(s,e,i){const a=s.getPriority().val(),o=Lv(a,e.getImmediateChild(".priority"),i);let h;if(s.isLeafNode()){const d=s,g=Lv(d.getValue(),e,i);return g!==d.getValue()||o!==d.getPriority().val()?new xt(g,wt(o)):s}else{const d=s;return h=d,o!==d.getPriority().val()&&(h=h.updatePriority(new xt(o))),d.forEachChild(lt,(g,v)=>{const y=ng(v,e.getImmediateChild(g),i);y!==v&&(h=h.updateImmediateChild(g,y))}),h}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e="",i=null,a={children:{},childCount:0}){this.name=e,this.parent=i,this.node=a}}function vh(s,e){let i=e instanceof Qe?e:new Qe(e),a=s,o=be(i);for(;o!==null;){const h=Lr(a.node.children,o)||{children:{},childCount:0};a=new ig(o,a,h),i=tt(i),o=be(i)}return a}function Xr(s){return s.node.value}function sg(s,e){s.node.value=e,pp(s)}function L1(s){return s.node.childCount>0}function wA(s){return Xr(s)===void 0&&!L1(s)}function Sh(s,e){Bt(s.node.children,(i,a)=>{e(new ig(i,s,a))})}function U1(s,e,i,a){i&&e(s),Sh(s,o=>{U1(o,e,!0)})}function CA(s,e,i){let a=s.parent;for(;a!==null;){if(e(a))return!0;a=a.parent}return!1}function Qo(s){return new Qe(s.parent===null?s.name:Qo(s.parent)+"/"+s.name)}function pp(s){s.parent!==null&&AA(s.parent,s.name,s)}function AA(s,e,i){const a=wA(i),o=Gn(s.node.children,e);a&&o?(delete s.node.children[e],s.node.childCount--,pp(s)):!a&&!o&&(s.node.children[e]=i.node,s.node.childCount++,pp(s))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA=/[\[\].#$\/\u0000-\u001F\u007F]/,NA=/[\[\].#$\u0000-\u001F\u007F]/,Gd=10*1024*1024,rg=function(s){return typeof s=="string"&&s.length!==0&&!RA.test(s)},P1=function(s){return typeof s=="string"&&s.length!==0&&!NA.test(s)},IA=function(s){return s&&(s=s.replace(/^\/*\.info(\/|$)/,"/")),P1(s)},z1=function(s){return s===null||typeof s=="string"||typeof s=="number"&&!Op(s)||s&&typeof s=="object"&&Gn(s,".sv")},j1=function(s,e,i,a){a&&e===void 0||Ko(uh(s,"value"),e,i)},Ko=function(s,e,i){const a=i instanceof Qe?new Yw(i,s):i;if(e===void 0)throw new Error(s+"contains undefined "+Ar(a));if(typeof e=="function")throw new Error(s+"contains a function "+Ar(a)+" with contents = "+e.toString());if(Op(e))throw new Error(s+"contains "+e.toString()+" "+Ar(a));if(typeof e=="string"&&e.length>Gd/3&&ch(e)>Gd)throw new Error(s+"contains a string greater than "+Gd+" utf8 bytes "+Ar(a)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let o=!1,h=!1;if(Bt(e,(d,g)=>{if(d===".value")o=!0;else if(d!==".priority"&&d!==".sv"&&(h=!0,!rg(d)))throw new Error(s+" contains an invalid key ("+d+") "+Ar(a)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Xw(a,d),Ko(s,g,a),Qw(a)}),o&&h)throw new Error(s+' contains ".value" child '+Ar(a)+" in addition to actual children.")}},OA=function(s,e){let i,a;for(i=0;i<e.length;i++){a=e[i];const h=ko(a);for(let d=0;d<h.length;d++)if(!(h[d]===".priority"&&d===h.length-1)){if(!rg(h[d]))throw new Error(s+"contains an invalid key ("+h[d]+") in path "+a.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Fw);let o=null;for(i=0;i<e.length;i++){if(a=e[i],o!==null&&In(o,a))throw new Error(s+"contains a path "+o.toString()+" that is ancestor of another path "+a.toString());o=a}},DA=function(s,e,i,a){const o=uh(s,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(o+" must be an object containing the children to replace.");const h=[];Bt(e,(d,g)=>{const v=new Qe(d);if(Ko(o,g,ht(i,v)),Lp(v)===".priority"&&!z1(g))throw new Error(o+"contains an invalid value for '"+v.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");h.push(v)}),OA(o,h)},H1=function(s,e,i,a){if(!P1(i))throw new Error(uh(s,e)+'was an invalid path = "'+i+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},xA=function(s,e,i,a){i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),H1(s,e,i)},ag=function(s,e){if(be(e)===".info")throw new Error(s+" failed = Can't modify data under /.info/")},MA=function(s,e){const i=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!rg(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||i.length!==0&&!IA(i))throw new Error(uh(s,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Eh(s,e){let i=null;for(let a=0;a<e.length;a++){const o=e[a],h=o.getPath();i!==null&&!Up(h,i.path)&&(s.eventLists_.push(i),i=null),i===null&&(i={events:[],path:h}),i.events.push(o)}i&&s.eventLists_.push(i)}function B1(s,e,i){Eh(s,i),V1(s,a=>Up(a,e))}function On(s,e,i){Eh(s,i),V1(s,a=>In(a,e)||In(e,a))}function V1(s,e){s.recursionDepth_++;let i=!0;for(let a=0;a<s.eventLists_.length;a++){const o=s.eventLists_[a];if(o){const h=o.path;e(h)?(LA(s.eventLists_[a]),s.eventLists_[a]=null):i=!1}}i&&(s.eventLists_=[]),s.recursionDepth_--}function LA(s){for(let e=0;e<s.events.length;e++){const i=s.events[e];if(i!==null){s.events[e]=null;const a=i.getEventRunner();To&&Ht("event: "+i.toString()),rl(a)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA="repo_interrupt",PA=25;class zA{constructor(e,i,a,o){this.repoInfo_=e,this.forceRestClient_=i,this.authTokenProvider_=a,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new kA,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Qc(),this.transactionQueueTree_=new ig,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function jA(s,e,i){if(s.stats_=Mp(s.repoInfo_),s.forceRestClient_||mw())s.server_=new Xc(s.repoInfo_,(a,o,h,d)=>{Uv(s,a,o,h,d)},s.authTokenProvider_,s.appCheckProvider_),setTimeout(()=>Pv(s,!0),0);else{if(typeof i<"u"&&i!==null){if(typeof i!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Lt(i)}catch(a){throw new Error("Invalid authOverride provided: "+a)}}s.persistentConnection_=new qi(s.repoInfo_,e,(a,o,h,d)=>{Uv(s,a,o,h,d)},a=>{Pv(s,a)},a=>{HA(s,a)},s.authTokenProvider_,s.appCheckProvider_,i),s.server_=s.persistentConnection_}s.authTokenProvider_.addTokenChangeListener(a=>{s.server_.refreshAuthToken(a)}),s.appCheckProvider_.addTokenChangeListener(a=>{s.server_.refreshAppCheckToken(a.token)}),s.statsReporter_=Ew(s.repoInfo_,()=>new SC(s.stats_,s.server_)),s.infoData_=new gC,s.infoSyncTree_=new Mv({startListening:(a,o,h,d)=>{let g=[];const v=s.infoData_.getNode(a._path);return v.isEmpty()||(g=mh(s.infoSyncTree_,a._path,v),setTimeout(()=>{d("ok")},0)),g},stopListening:()=>{}}),lg(s,"connected",!1),s.serverSyncTree_=new Mv({startListening:(a,o,h,d)=>(s.server_.listen(a,h,o,(g,v)=>{const y=d(g,v);On(s.eventQueue_,a._path,y)}),[]),stopListening:(a,o)=>{s.server_.unlisten(a,o)}})}function q1(s){const i=s.infoData_.getNode(new Qe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+i}function Wo(s){return EA({timestamp:q1(s)})}function Uv(s,e,i,a,o){s.dataUpdateCount++;const h=new Qe(e);i=s.interceptServerDataCallback_?s.interceptServerDataCallback_(e,i):i;let d=[];if(o)if(a){const v=Vc(i,y=>wt(y));d=mA(s.serverSyncTree_,h,v,o)}else{const v=wt(i);d=gA(s.serverSyncTree_,h,v,o)}else if(a){const v=Vc(i,y=>wt(y));d=fA(s.serverSyncTree_,h,v)}else{const v=wt(i);d=mh(s.serverSyncTree_,h,v)}let g=h;d.length>0&&(g=Ja(s,h)),On(s.eventQueue_,g,d)}function Pv(s,e){lg(s,"connected",e),e===!1&&qA(s)}function HA(s,e){Bt(e,(i,a)=>{lg(s,i,a)})}function lg(s,e,i){const a=new Qe("/.info/"+e),o=wt(i);s.infoData_.updateSnapshot(a,o);const h=mh(s.infoSyncTree_,a,o);On(s.eventQueue_,a,h)}function Th(s){return s.nextWriteId_++}function BA(s,e,i,a,o){Zo(s,"set",{path:e.toString(),value:i,priority:a});const h=Wo(s),d=wt(i,a),g=_h(s.serverSyncTree_,e),v=tg(d,g,h),y=Th(s),T=Kp(s.serverSyncTree_,e,v,y,!0);Eh(s.eventQueue_,T),s.server_.put(e.toString(),d.val(!0),(C,X)=>{const F=C==="ok";F||Kt("set at "+e+" failed: "+C);const Z=Ds(s.serverSyncTree_,y,!F);On(s.eventQueue_,e,Z),gp(s,o,C,X)});const A=ug(s,e);Ja(s,A),On(s.eventQueue_,A,[])}function VA(s,e,i,a){Zo(s,"update",{path:e.toString(),value:i});let o=!0;const h=Wo(s),d={};if(Bt(i,(g,v)=>{o=!1,d[g]=k1(ht(e,g),wt(v),s.serverSyncTree_,h)}),o)Ht("update() called with empty data.  Don't do anything."),gp(s,a,"ok",void 0);else{const g=Th(s),v=hA(s.serverSyncTree_,e,d,g);Eh(s.eventQueue_,v),s.server_.merge(e.toString(),i,(y,T)=>{const A=y==="ok";A||Kt("update at "+e+" failed: "+y);const C=Ds(s.serverSyncTree_,g,!A),X=C.length>0?Ja(s,e):e;On(s.eventQueue_,X,C),gp(s,a,y,T)}),Bt(i,y=>{const T=ug(s,ht(e,y));Ja(s,T)}),On(s.eventQueue_,e,[])}}function qA(s){Zo(s,"onDisconnectEvents");const e=Wo(s),i=Qc();ap(s.onDisconnect_,ze(),(o,h)=>{const d=k1(o,h,s.serverSyncTree_,e);y1(i,o,d)});let a=[];ap(i,ze(),(o,h)=>{a=a.concat(mh(s.serverSyncTree_,o,h));const d=ug(s,o);Ja(s,d)}),s.onDisconnect_=Qc(),On(s.eventQueue_,ze(),a)}function GA(s,e,i){let a;be(e._path)===".info"?a=kv(s.infoSyncTree_,e,i):a=kv(s.serverSyncTree_,e,i),B1(s.eventQueue_,e._path,a)}function FA(s,e,i){let a;be(e._path)===".info"?a=dp(s.infoSyncTree_,e,i):a=dp(s.serverSyncTree_,e,i),B1(s.eventQueue_,e._path,a)}function YA(s){s.persistentConnection_&&s.persistentConnection_.interrupt(UA)}function Zo(s,...e){let i="";s.persistentConnection_&&(i=s.persistentConnection_.id+":"),Ht(i,...e)}function gp(s,e,i,a){e&&rl(()=>{if(i==="ok")e(null);else{const o=(i||"error").toUpperCase();let h=o;a&&(h+=": "+a);const d=new Error(h);d.code=o,e(d)}})}function XA(s,e,i,a,o,h){Zo(s,"transaction on "+e);const d={path:e,update:i,onComplete:a,status:null,order:V0(),applyLocally:h,retryCount:0,unwatcher:o,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},g=og(s,e,void 0);d.currentInputSnapshot=g;const v=d.update(g.val());if(v===void 0)d.unwatcher(),d.currentOutputSnapshotRaw=null,d.currentOutputSnapshotResolved=null,d.onComplete&&d.onComplete(null,!1,d.currentInputSnapshot);else{Ko("transaction failed: Data returned ",v,d.path),d.status=0;const y=vh(s.transactionQueueTree_,e),T=Xr(y)||[];T.push(d),sg(y,T);let A;typeof v=="object"&&v!==null&&Gn(v,".priority")?(A=Lr(v,".priority"),J(z1(A),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):A=(_h(s.serverSyncTree_,e)||he.EMPTY_NODE).getPriority().val();const C=Wo(s),X=wt(v,A),F=tg(X,g,C);d.currentOutputSnapshotRaw=X,d.currentOutputSnapshotResolved=F,d.currentWriteId=Th(s);const Z=Kp(s.serverSyncTree_,e,F,d.currentWriteId,d.applyLocally);On(s.eventQueue_,e,Z),bh(s,s.transactionQueueTree_)}}function og(s,e,i){return _h(s.serverSyncTree_,e,i)||he.EMPTY_NODE}function bh(s,e=s.transactionQueueTree_){if(e||wh(s,e),Xr(e)){const i=F1(s,e);J(i.length>0,"Sending zero length transaction queue"),i.every(o=>o.status===0)&&QA(s,Qo(e),i)}else L1(e)&&Sh(e,i=>{bh(s,i)})}function QA(s,e,i){const a=i.map(y=>y.currentWriteId),o=og(s,e,a);let h=o;const d=o.hash();for(let y=0;y<i.length;y++){const T=i[y];J(T.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),T.status=1,T.retryCount++;const A=nn(e,T.path);h=h.updateChild(A,T.currentOutputSnapshotRaw)}const g=h.val(!0),v=e;s.server_.put(v.toString(),g,y=>{Zo(s,"transaction put response",{path:v.toString(),status:y});let T=[];if(y==="ok"){const A=[];for(let C=0;C<i.length;C++)i[C].status=2,T=T.concat(Ds(s.serverSyncTree_,i[C].currentWriteId)),i[C].onComplete&&A.push(()=>i[C].onComplete(null,!0,i[C].currentOutputSnapshotResolved)),i[C].unwatcher();wh(s,vh(s.transactionQueueTree_,e)),bh(s,s.transactionQueueTree_),On(s.eventQueue_,e,T);for(let C=0;C<A.length;C++)rl(A[C])}else{if(y==="datastale")for(let A=0;A<i.length;A++)i[A].status===3?i[A].status=4:i[A].status=0;else{Kt("transaction at "+v.toString()+" failed: "+y);for(let A=0;A<i.length;A++)i[A].status=4,i[A].abortReason=y}Ja(s,e)}},d)}function Ja(s,e){const i=G1(s,e),a=Qo(i),o=F1(s,i);return KA(s,o,a),a}function KA(s,e,i){if(e.length===0)return;const a=[];let o=[];const d=e.filter(g=>g.status===0).map(g=>g.currentWriteId);for(let g=0;g<e.length;g++){const v=e[g],y=nn(i,v.path);let T=!1,A;if(J(y!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),v.status===4)T=!0,A=v.abortReason,o=o.concat(Ds(s.serverSyncTree_,v.currentWriteId,!0));else if(v.status===0)if(v.retryCount>=PA)T=!0,A="maxretry",o=o.concat(Ds(s.serverSyncTree_,v.currentWriteId,!0));else{const C=og(s,v.path,d);v.currentInputSnapshot=C;const X=e[g].update(C.val());if(X!==void 0){Ko("transaction failed: Data returned ",X,v.path);let F=wt(X);typeof X=="object"&&X!=null&&Gn(X,".priority")||(F=F.updatePriority(C.getPriority()));const te=v.currentWriteId,re=Wo(s),ue=tg(F,C,re);v.currentOutputSnapshotRaw=F,v.currentOutputSnapshotResolved=ue,v.currentWriteId=Th(s),d.splice(d.indexOf(te),1),o=o.concat(Kp(s.serverSyncTree_,v.path,ue,v.currentWriteId,v.applyLocally)),o=o.concat(Ds(s.serverSyncTree_,te,!0))}else T=!0,A="nodata",o=o.concat(Ds(s.serverSyncTree_,v.currentWriteId,!0))}On(s.eventQueue_,i,o),o=[],T&&(e[g].status=2,(function(C){setTimeout(C,Math.floor(0))})(e[g].unwatcher),e[g].onComplete&&(A==="nodata"?a.push(()=>e[g].onComplete(null,!1,e[g].currentInputSnapshot)):a.push(()=>e[g].onComplete(new Error(A),!1,null))))}wh(s,s.transactionQueueTree_);for(let g=0;g<a.length;g++)rl(a[g]);bh(s,s.transactionQueueTree_)}function G1(s,e){let i,a=s.transactionQueueTree_;for(i=be(e);i!==null&&Xr(a)===void 0;)a=vh(a,i),e=tt(e),i=be(e);return a}function F1(s,e){const i=[];return Y1(s,e,i),i.sort((a,o)=>a.order-o.order),i}function Y1(s,e,i){const a=Xr(e);if(a)for(let o=0;o<a.length;o++)i.push(a[o]);Sh(e,o=>{Y1(s,o,i)})}function wh(s,e){const i=Xr(e);if(i){let a=0;for(let o=0;o<i.length;o++)i[o].status!==2&&(i[a]=i[o],a++);i.length=a,sg(e,i.length>0?i:void 0)}Sh(e,a=>{wh(s,a)})}function ug(s,e){const i=Qo(G1(s,e)),a=vh(s.transactionQueueTree_,e);return CA(a,o=>{Fd(s,o)}),Fd(s,a),U1(a,o=>{Fd(s,o)}),i}function Fd(s,e){const i=Xr(e);if(i){const a=[];let o=[],h=-1;for(let d=0;d<i.length;d++)i[d].status===3||(i[d].status===1?(J(h===d-1,"All SENT items should be at beginning of queue."),h=d,i[d].status=3,i[d].abortReason="set"):(J(i[d].status===0,"Unexpected transaction status in abort"),i[d].unwatcher(),o=o.concat(Ds(s.serverSyncTree_,i[d].currentWriteId,!0)),i[d].onComplete&&a.push(i[d].onComplete.bind(null,new Error("set"),!1,null))));h===-1?sg(e,void 0):i.length=h+1,On(s.eventQueue_,Qo(e),o);for(let d=0;d<a.length;d++)rl(a[d])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WA(s){let e="";const i=s.split("/");for(let a=0;a<i.length;a++)if(i[a].length>0){let o=i[a];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}e+="/"+o}return e}function ZA(s){const e={};s.charAt(0)==="?"&&(s=s.substring(1));for(const i of s.split("&")){if(i.length===0)continue;const a=i.split("=");a.length===2?e[decodeURIComponent(a[0])]=decodeURIComponent(a[1]):Kt(`Invalid query segment '${i}' in query '${s}'`)}return e}const zv=function(s,e){const i=$A(s),a=i.namespace;i.domain==="firebase.com"&&Yi(i.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!a||a==="undefined")&&i.domain!=="localhost"&&Yi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),i.secure||lw();const o=i.scheme==="ws"||i.scheme==="wss";return{repoInfo:new t1(i.host,i.secure,a,o,e,"",a!==i.subdomain),path:new Qe(i.pathString)}},$A=function(s){let e="",i="",a="",o="",h="",d=!0,g="https",v=443;if(typeof s=="string"){let y=s.indexOf("//");y>=0&&(g=s.substring(0,y-1),s=s.substring(y+2));let T=s.indexOf("/");T===-1&&(T=s.length);let A=s.indexOf("?");A===-1&&(A=s.length),e=s.substring(0,Math.min(T,A)),T<A&&(o=WA(s.substring(T,A)));const C=ZA(s.substring(Math.min(s.length,A)));y=e.indexOf(":"),y>=0?(d=g==="https"||g==="wss",v=parseInt(e.substring(y+1),10)):y=e.length;const X=e.slice(0,y);if(X.toLowerCase()==="localhost")i="localhost";else if(X.split(".").length<=2)i=X;else{const F=e.indexOf(".");a=e.substring(0,F).toLowerCase(),i=e.substring(F+1),h=a}"ns"in C&&(h=C.ns)}return{host:e,port:v,domain:i,subdomain:a,secure:d,scheme:g,pathString:o,namespace:h}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",JA=(function(){let s=0;const e=[];return function(i){const a=i===s;s=i;let o;const h=new Array(8);for(o=7;o>=0;o--)h[o]=jv.charAt(i%64),i=Math.floor(i/64);J(i===0,"Cannot push at time == 0");let d=h.join("");if(a){for(o=11;o>=0&&e[o]===63;o--)e[o]=0;e[o]++}else for(o=0;o<12;o++)e[o]=Math.floor(Math.random()*64);for(o=0;o<12;o++)d+=jv.charAt(e[o]);return J(d.length===20,"nextPushId: Length should be 20."),d}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e,i,a,o){this.eventType=e,this.eventRegistration=i,this.snapshot=a,this.prevName=o}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Lt(this.snapshot.exportVal())}}class t2{constructor(e,i,a){this.eventRegistration=e,this.error=i,this.path=a}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(e,i){this.snapshotCallback=e,this.cancelCallback=i}onValue(e,i){this.snapshotCallback.call(null,e,i)}onCancel(e){return J(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e,i,a,o){this._repo=e,this._path=i,this._queryParams=a,this._orderByCalled=o}get key(){return Re(this._path)?null:Lp(this._path)}get ref(){return new Wi(this._repo,this._path)}get _queryIdentifier(){const e=bv(this._queryParams),i=Dp(e);return i==="{}"?"default":i}get _queryObject(){return bv(this._queryParams)}isEqual(e){if(e=pn(e),!(e instanceof cg))return!1;const i=this._repo===e._repo,a=Up(this._path,e._path),o=this._queryIdentifier===e._queryIdentifier;return i&&a&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+Gw(this._path)}}class Wi extends cg{constructor(e,i){super(e,i,new Hp,!1)}get parent(){const e=c1(this._path);return e===null?null:new Wi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class jo{constructor(e,i,a){this._node=e,this.ref=i,this._index=a}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const i=new Qe(e),a=Ho(this.ref,e);return new jo(this._node.getChild(i),a,lt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(a,o)=>e(new jo(o,Ho(this.ref,a),lt)))}hasChild(e){const i=new Qe(e);return!this._node.getChild(i).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function We(s,e){return s=pn(s),s._checkNotDeleted("ref"),e!==void 0?Ho(s._root,e):s._root}function Ho(s,e){return s=pn(s),be(s._path)===null?xA("child","path",e):H1("child","path",e),new Wi(s._repo,ht(s._path,e))}function hg(s,e){s=pn(s),ag("push",s._path),j1("push",e,s._path,!0);const i=q1(s._repo),a=JA(i),o=Ho(s,a),h=Ho(s,a);let d;return e!=null?d=kt(h,e).then(()=>h):d=Promise.resolve(h),o.then=d.then.bind(d),o.catch=d.then.bind(d,void 0),o}function kt(s,e){s=pn(s),ag("set",s._path),j1("set",e,s._path,!1);const i=new il;return BA(s._repo,s._path,e,null,i.wrapCallback(()=>{})),i.promise}function Bo(s,e){DA("update",e,s._path);const i=new il;return VA(s._repo,s._path,e,i.wrapCallback(()=>{})),i.promise}class fg{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,i){const a=i._queryParams.getIndex();return new e2("value",this,new jo(e.snapshotNode,new Wi(i._repo,i._path),a))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,i){return this.callbackContext.hasCancelCallback?new t2(this,e,i):null}matches(e){return e instanceof fg?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function i2(s,e,i,a,o){const h=new n2(i,void 0),d=new fg(h);return GA(s._repo,s,d),()=>FA(s._repo,s,d)}function Dr(s,e,i,a){return i2(s,"value",e)}nA(Wi);oA(Wi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s2="FIREBASE_DATABASE_EMULATOR_HOST",mp={};let r2=!1;function a2(s,e,i,a){const o=e.lastIndexOf(":"),h=e.substring(0,o),d=qr(h);s.repoInfo_=new t1(e,d,s.repoInfo_.namespace,s.repoInfo_.webSocketOnly,s.repoInfo_.nodeAdmin,s.repoInfo_.persistenceKey,s.repoInfo_.includeNamespaceInQueryParams,!0,i),a&&(s.authTokenProvider_=a)}function l2(s,e,i,a,o){let h=a||s.options.databaseURL;h===void 0&&(s.options.projectId||Yi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ht("Using default host for project ",s.options.projectId),h=`${s.options.projectId}-default-rtdb.firebaseio.com`);let d=zv(h,o),g=d.repoInfo,v;typeof process<"u"&&rv&&(v=rv[s2]),v?(h=`http://${v}?ns=${g.namespace}`,d=zv(h,o),g=d.repoInfo):d.repoInfo.secure;const y=new yw(s.name,s.options,e);MA("Invalid Firebase Database URL",d),Re(d.path)||Yi("Database URL must point to the root of a Firebase Database (not including a child path).");const T=u2(g,s,y,new _w(s,i));return new c2(T,s)}function o2(s,e){const i=mp[e];(!i||i[s.key]!==s)&&Yi(`Database ${e}(${s.repoInfo_}) has already been deleted.`),YA(s),delete i[s.key]}function u2(s,e,i,a){let o=mp[e.name];o||(o={},mp[e.name]=o);let h=o[s.toURLString()];return h&&Yi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),h=new zA(s,r2,i,a),o[s.toURLString()]=h,h}class c2{constructor(e,i){this._repoInternal=e,this.app=i,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(jA(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Wi(this._repo,ze())),this._rootInternal}_delete(){return this._rootInternal!==null&&(o2(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Yi("Cannot call "+e+" on a deleted database.")}}function h2(s=Ip(),e){const i=fh(s,"database").getImmediate({identifier:e});if(!i._instanceStarted){const a=I0("database");a&&f2(i,...a)}return i}function f2(s,e,i,a={}){s=pn(s),s._checkNotDeleted("useEmulator");const o=`${e}:${i}`,h=s._repoInternal;if(s._instanceStarted){if(o===s._repoInternal.repoInfo_.host&&Ls(a,h.repoInfo_.emulatorOptions))return;Yi("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let d;if(h.repoInfo_.nodeAdmin)a.mockUserToken&&Yi('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),d=new Mc(Mc.OWNER);else if(a.mockUserToken){const g=typeof a.mockUserToken=="string"?a.mockUserToken:x0(a.mockUserToken,s.app.options.projectId);d=new Mc(g)}qr(e)&&(Cp(e),Ap("Database",!0)),a2(h,o,a,d)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d2(s){nw(Gr),Ur(new Us("database",(e,{instanceIdentifier:i})=>{const a=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),h=e.getProvider("app-check-internal");return l2(a,o,h,i)},"PUBLIC").setMultipleInstances(!0)),ui(av,lv,s),ui(av,lv,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p2={".sv":"timestamp"};function Gi(){return p2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(e,i){this.committed=e,this.snapshot=i}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function m2(s,e,i){if(s=pn(s),ag("Reference.transaction",s._path),s.key===".length"||s.key===".keys")throw"Reference.transaction failed: "+s.key+" is a read-only object.";const a=!0,o=new il,h=(g,v,y)=>{let T=null;g?o.reject(g):(T=new jo(y,new Wi(s._repo,s._path),lt),o.resolve(new g2(v,T)))},d=Dr(s,()=>{});return XA(s._repo,s._path,e,h,d,a),o.promise}qi.prototype.simpleListen=function(s,e){this.sendRequest("q",{p:s},e)};qi.prototype.echo=function(s,e){this.sendRequest("echo",{d:s},e)};d2();var _2="firebase",y2="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ui(_2,y2,"app");function X1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const v2=X1,Q1=new Go("auth","Firebase",X1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh=new hh("@firebase/auth");function S2(s,...e){nh.logLevel<=Pe.WARN&&nh.warn(`Auth (${Gr}): ${s}`,...e)}function kc(s,...e){nh.logLevel<=Pe.ERROR&&nh.error(`Auth (${Gr}): ${s}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(s,...e){throw dg(s,...e)}function ci(s,...e){return dg(s,...e)}function K1(s,e,i){const a={...v2(),[e]:i};return new Go("auth","Firebase",a).create(e,{appName:s.name})}function xr(s){return K1(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function dg(s,...e){if(typeof s!="string"){const i=e[0],a=[...e.slice(1)];return a[0]&&(a[0].appName=s.name),s._errorFactory.create(i,...a)}return Q1.create(s,...e)}function de(s,e,...i){if(!s)throw dg(e,...i)}function Bi(s){const e="INTERNAL ASSERTION FAILED: "+s;throw kc(e),new Error(e)}function Qi(s,e){s||Bi(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(){return typeof self<"u"&&self.location?.href||""}function E2(){return Hv()==="http:"||Hv()==="https:"}function Hv(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(E2()||MT()||"connection"in navigator)?navigator.onLine:!0}function b2(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,i){this.shortDelay=e,this.longDelay=i,Qi(i>e,"Short delay should be less than long delay!"),this.isMobile=Rp()||M0()}get(){return T2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(s,e){Qi(s.emulator,"Emulator should always be set here");const{url:i}=s.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{static initialize(e,i,a){this.fetchImpl=e,i&&(this.headersImpl=i),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Bi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Bi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Bi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C2=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],A2=new $o(3e4,6e4);function gg(s,e){return s.tenantId&&!e.tenantId?{...e,tenantId:s.tenantId}:e}async function ll(s,e,i,a,o={}){return Z1(s,o,async()=>{let h={},d={};a&&(e==="GET"?d=a:h={body:JSON.stringify(a)});const g=sl({key:s.config.apiKey,...d}).slice(1),v=await s._getAdditionalHeaders();v["Content-Type"]="application/json",s.languageCode&&(v["X-Firebase-Locale"]=s.languageCode);const y={method:e,headers:v,...h};return xT()||(y.referrerPolicy="no-referrer"),s.emulatorConfig&&qr(s.emulatorConfig.host)&&(y.credentials="include"),W1.fetch()(await $1(s,s.config.apiHost,i,g),y)})}async function Z1(s,e,i){s._canInitEmulator=!1;const a={...w2,...e};try{const o=new N2(s),h=await Promise.race([i(),o.promise]);o.clearNetworkTimeout();const d=await h.json();if("needConfirmation"in d)throw Oc(s,"account-exists-with-different-credential",d);if(h.ok&&!("errorMessage"in d))return d;{const g=h.ok?d.errorMessage:d.error.message,[v,y]=g.split(" : ");if(v==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oc(s,"credential-already-in-use",d);if(v==="EMAIL_EXISTS")throw Oc(s,"email-already-in-use",d);if(v==="USER_DISABLED")throw Oc(s,"user-disabled",d);const T=a[v]||v.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw K1(s,T,y);Xi(s,T)}}catch(o){if(o instanceof Ki)throw o;Xi(s,"network-request-failed",{message:String(o)})}}async function R2(s,e,i,a,o={}){const h=await ll(s,e,i,a,o);return"mfaPendingCredential"in h&&Xi(s,"multi-factor-auth-required",{_serverResponse:h}),h}async function $1(s,e,i,a){const o=`${e}${i}?${a}`,h=s,d=h.config.emulator?pg(s.config,o):`${s.config.apiScheme}://${o}`;return C2.includes(i)&&(await h._persistenceManagerAvailable,h._getPersistenceType()==="COOKIE")?h._getPersistence()._getFinalTarget(d).toString():d}class N2{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((i,a)=>{this.timer=setTimeout(()=>a(ci(this.auth,"network-request-failed")),A2.get())})}}function Oc(s,e,i){const a={appName:s.name};i.email&&(a.email=i.email),i.phoneNumber&&(a.phoneNumber=i.phoneNumber);const o=ci(s,e,a);return o.customData._tokenResponse=i,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I2(s,e){return ll(s,"POST","/v1/accounts:delete",e)}async function ih(s,e){return ll(s,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(s){if(s)try{const e=new Date(Number(s));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function O2(s,e=!1){const i=pn(s),a=await i.getIdToken(e),o=mg(a);de(o&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error");const h=typeof o.firebase=="object"?o.firebase:void 0,d=h?.sign_in_provider;return{claims:o,token:a,authTime:Ro(Yd(o.auth_time)),issuedAtTime:Ro(Yd(o.iat)),expirationTime:Ro(Yd(o.exp)),signInProvider:d||null,signInSecondFactor:h?.sign_in_second_factor||null}}function Yd(s){return Number(s)*1e3}function mg(s){const[e,i,a]=s.split(".");if(e===void 0||i===void 0||a===void 0)return kc("JWT malformed, contained fewer than 3 sections"),null;try{const o=Bc(i);return o?JSON.parse(o):(kc("Failed to decode base64 JWT payload"),null)}catch(o){return kc("Caught error parsing JWT payload as JSON",o?.toString()),null}}function Bv(s){const e=mg(s);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vo(s,e,i=!1){if(i)return e;try{return await e}catch(a){throw a instanceof Ki&&D2(a)&&s.auth.currentUser===s&&await s.auth.signOut(),a}}function D2({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const a=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const i=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e,i){this.createdAt=e,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ro(this.lastLoginAt),this.creationTime=Ro(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sh(s){const e=s.auth,i=await s.getIdToken(),a=await Vo(s,ih(e,{idToken:i}));de(a?.users.length,e,"internal-error");const o=a.users[0];s._notifyReloadListener(o);const h=o.providerUserInfo?.length?J1(o.providerUserInfo):[],d=k2(s.providerData,h),g=s.isAnonymous,v=!(s.email&&o.passwordHash)&&!d?.length,y=g?v:!1,T={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:d,metadata:new yp(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(s,T)}async function M2(s){const e=pn(s);await sh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function k2(s,e){return[...s.filter(a=>!e.some(o=>o.providerId===a.providerId)),...e]}function J1(s){return s.map(({providerId:e,...i})=>({providerId:e,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L2(s,e){const i=await Z1(s,{},async()=>{const a=sl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:h}=s.config,d=await $1(s,o,"/v1/token",`key=${h}`),g=await s._getAdditionalHeaders();g["Content-Type"]="application/x-www-form-urlencoded";const v={method:"POST",headers:g,body:a};return s.emulatorConfig&&qr(s.emulatorConfig.host)&&(v.credentials="include"),W1.fetch()(d,v)});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function U2(s,e){return ll(s,"POST","/v2/accounts:revokeToken",gg(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const i="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,i)}updateFromIdToken(e){de(e.length!==0,"internal-error");const i=Bv(e);this.updateTokensAndExpiration(e,null,i)}async getToken(e,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,i){const{accessToken:a,refreshToken:o,expiresIn:h}=await L2(e,i);this.updateTokensAndExpiration(a,o,Number(h))}updateTokensAndExpiration(e,i,a){this.refreshToken=i||null,this.accessToken=e||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(e,i){const{refreshToken:a,accessToken:o,expirationTime:h}=i,d=new Fa;return a&&(de(typeof a=="string","internal-error",{appName:e}),d.refreshToken=a),o&&(de(typeof o=="string","internal-error",{appName:e}),d.accessToken=o),h&&(de(typeof h=="number","internal-error",{appName:e}),d.expirationTime=h),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fa,this.toJSON())}_performRefresh(){return Bi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(s,e){de(typeof s=="string"||typeof s>"u","internal-error",{appName:e})}class Bn{constructor({uid:e,auth:i,stsTokenManager:a,...o}){this.providerId="firebase",this.proactiveRefresh=new x2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new yp(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const i=await Vo(this,this.stsTokenManager.getToken(this.auth,e));return de(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(e){return O2(this,e)}reload(){return M2(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(i=>({...i})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const i=new Bn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return i.metadata._copy(this.metadata),i}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,i=!1){let a=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),a=!0),i&&await sh(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(zn(this.auth.app))return Promise.reject(xr(this.auth));const e=await this.getIdToken();return await Vo(this,I2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,i){const a=i.displayName??void 0,o=i.email??void 0,h=i.phoneNumber??void 0,d=i.photoURL??void 0,g=i.tenantId??void 0,v=i._redirectEventId??void 0,y=i.createdAt??void 0,T=i.lastLoginAt??void 0,{uid:A,emailVerified:C,isAnonymous:X,providerData:F,stsTokenManager:Z}=i;de(A&&Z,e,"internal-error");const te=Fa.fromJSON(this.name,Z);de(typeof A=="string",e,"internal-error"),As(a,e.name),As(o,e.name),de(typeof C=="boolean",e,"internal-error"),de(typeof X=="boolean",e,"internal-error"),As(h,e.name),As(d,e.name),As(g,e.name),As(v,e.name),As(y,e.name),As(T,e.name);const re=new Bn({uid:A,auth:e,email:o,emailVerified:C,displayName:a,isAnonymous:X,photoURL:d,phoneNumber:h,tenantId:g,stsTokenManager:te,createdAt:y,lastLoginAt:T});return F&&Array.isArray(F)&&(re.providerData=F.map(ue=>({...ue}))),v&&(re._redirectEventId=v),re}static async _fromIdTokenResponse(e,i,a=!1){const o=new Fa;o.updateFromServerResponse(i);const h=new Bn({uid:i.localId,auth:e,stsTokenManager:o,isAnonymous:a});return await sh(h),h}static async _fromGetAccountInfoResponse(e,i,a){const o=i.users[0];de(o.localId!==void 0,"internal-error");const h=o.providerUserInfo!==void 0?J1(o.providerUserInfo):[],d=!(o.email&&o.passwordHash)&&!h?.length,g=new Fa;g.updateFromIdToken(a);const v=new Bn({uid:o.localId,auth:e,stsTokenManager:g,isAnonymous:d}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new yp(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!h?.length};return Object.assign(v,y),v}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv=new Map;function Vi(s){Qi(s instanceof Function,"Expected a class definition");let e=Vv.get(s);return e?(Qi(e instanceof s,"Instance stored in cache mismatched with class"),e):(e=new s,Vv.set(s,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,i){this.storage[e]=i}async _get(e){const i=this.storage[e];return i===void 0?null:i}async _remove(e){delete this.storage[e]}_addListener(e,i){}_removeListener(e,i){}}eS.type="NONE";const qv=eS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(s,e,i){return`firebase:${s}:${e}:${i}`}class Ya{constructor(e,i,a){this.persistence=e,this.auth=i,this.userKey=a;const{config:o,name:h}=this.auth;this.fullUserKey=Lc(this.userKey,o.apiKey,h),this.fullPersistenceKey=Lc("persistence",o.apiKey,h),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const i=await ih(this.auth,{idToken:e}).catch(()=>{});return i?Bn._fromGetAccountInfoResponse(this.auth,i,e):null}return Bn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,i,a="authUser"){if(!i.length)return new Ya(Vi(qv),e,a);const o=(await Promise.all(i.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let h=o[0]||Vi(qv);const d=Lc(a,e.config.apiKey,e.name);let g=null;for(const y of i)try{const T=await y._get(d);if(T){let A;if(typeof T=="string"){const C=await ih(e,{idToken:T}).catch(()=>{});if(!C)break;A=await Bn._fromGetAccountInfoResponse(e,C,T)}else A=Bn._fromJSON(e,T);y!==h&&(g=A),h=y;break}}catch{}const v=o.filter(y=>y._shouldAllowMigration);return!h._shouldAllowMigration||!v.length?new Ya(h,e,a):(h=v[0],g&&await h._set(d,g.toJSON()),await Promise.all(i.map(async y=>{if(y!==h)try{await y._remove(d)}catch{}})),new Ya(h,e,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(s){const e=s.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(aS(e))return"Blackberry";if(lS(e))return"Webos";if(nS(e))return"Safari";if((e.includes("chrome/")||iS(e))&&!e.includes("edge/"))return"Chrome";if(rS(e))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=s.match(i);if(a?.length===2)return a[1]}return"Other"}function tS(s=Wt()){return/firefox\//i.test(s)}function nS(s=Wt()){const e=s.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function iS(s=Wt()){return/crios\//i.test(s)}function sS(s=Wt()){return/iemobile/i.test(s)}function rS(s=Wt()){return/android/i.test(s)}function aS(s=Wt()){return/blackberry/i.test(s)}function lS(s=Wt()){return/webos/i.test(s)}function _g(s=Wt()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function P2(s=Wt()){return _g(s)&&!!window.navigator?.standalone}function z2(){return kT()&&document.documentMode===10}function oS(s=Wt()){return _g(s)||rS(s)||lS(s)||aS(s)||/windows phone/i.test(s)||sS(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(s,e=[]){let i;switch(s){case"Browser":i=Gv(Wt());break;case"Worker":i=`${Gv(Wt())}-${s}`;break;default:i=s}const a=e.length?e.join(","):"FirebaseCore-web";return`${i}/JsCore/${Gr}/${a}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,i){const a=h=>new Promise((d,g)=>{try{const v=e(h);d(v)}catch(v){g(v)}});a.onAbort=i,this.queue.push(a);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const i=[];try{for(const a of this.queue)await a(e),a.onAbort&&i.push(a.onAbort)}catch(a){i.reverse();for(const o of i)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H2(s,e={}){return ll(s,"GET","/v2/passwordPolicy",gg(s,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B2=6;class V2{constructor(e){const i=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=i.minPasswordLength??B2,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),i.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),i.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),i.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),i.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const i={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,i),this.validatePasswordCharacterOptions(e,i),i.isValid&&(i.isValid=i.meetsMinPasswordLength??!0),i.isValid&&(i.isValid=i.meetsMaxPasswordLength??!0),i.isValid&&(i.isValid=i.containsLowercaseLetter??!0),i.isValid&&(i.isValid=i.containsUppercaseLetter??!0),i.isValid&&(i.isValid=i.containsNumericCharacter??!0),i.isValid&&(i.isValid=i.containsNonAlphanumericCharacter??!0),i}validatePasswordLengthOptions(e,i){const a=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;a&&(i.meetsMinPasswordLength=e.length>=a),o&&(i.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let a;for(let o=0;o<e.length;o++)a=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(i,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(e,i,a,o,h){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(e,i,a,o){this.app=e,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=a,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fv(this),this.idTokenSubscription=new Fv(this),this.beforeStateQueue=new j2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Q1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(h=>this._resolvePersistenceManagerAvailable=h)}_initializeWithPersistence(e,i){return i&&(this._popupRedirectResolver=Vi(i)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ya.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const i=await ih(this,{idToken:e}),a=await Bn._fromGetAccountInfoResponse(this,i,e);await this.directlySetCurrentUser(a)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(zn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let a=i,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=this.redirectUser?._redirectEventId,d=a?._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===d)&&g?.user&&(a=g.user,o=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(a)}catch(h){a=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(e){try{await sh(e)}catch(i){if(i?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=b2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(zn(this.app))return Promise.reject(xr(this));const i=e?pn(e):null;return i&&de(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(e,i=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return zn(this.app)?Promise.reject(xr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return zn(this.app)?Promise.reject(xr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await H2(this),i=new V2(e);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Go("auth","Firebase",e())}onAuthStateChanged(e,i,a){return this.registerStateListener(this.authStateSubscription,e,i,a)}beforeAuthStateChanged(e,i){return this.beforeStateQueue.pushCallback(e,i)}onIdTokenChanged(e,i,a){return this.registerStateListener(this.idTokenSubscription,e,i,a)}authStateReady(){return new Promise((e,i)=>{if(this.currentUser)e();else{const a=this.onAuthStateChanged(()=>{a(),e()},i)}})}async revokeAccessToken(e){if(this.currentUser){const i=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:i};this.tenantId!=null&&(a.tenantId=this.tenantId),await U2(this,a)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,i){const a=await this.getOrInitRedirectPersistenceManager(i);return e===null?a.removeCurrentUser():a.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const i=e&&Vi(e)||this._popupRedirectResolver;de(i,this,"argument-error"),this.redirectPersistenceManager=await Ya.create(this,[Vi(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,i,a,o){if(this._deleted)return()=>{};const h=typeof i=="function"?i:i.next.bind(i);let d=!1;const g=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(g,this,"internal-error"),g.then(()=>{d||h(this.currentUser)}),typeof i=="function"){const v=e.addObserver(i,a,o);return()=>{d=!0,v()}}else{const v=e.addObserver(i);return()=>{d=!0,v()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=uS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const i=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();i&&(e["X-Firebase-Client"]=i);const a=await this._getAppCheckToken();return a&&(e["X-Firebase-AppCheck"]=a),e}async _getAppCheckToken(){if(zn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&S2(`Error while retrieving App Check token: ${e.error}`),e?.token}}function yg(s){return pn(s)}class Fv{constructor(e){this.auth=e,this.observer=null,this.addObserver=GT(i=>this.observer=i)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vg={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function G2(s){vg=s}function F2(s){return vg.loadJS(s)}function Y2(){return vg.gapiScript}function X2(s){return`__${s}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q2(s,e){const i=fh(s,"auth");if(i.isInitialized()){const o=i.getImmediate(),h=i.getOptions();if(Ls(h,e??{}))return o;Xi(o,"already-initialized")}return i.initialize({options:e})}function K2(s,e){const i=e?.persistence||[],a=(Array.isArray(i)?i:[i]).map(Vi);e?.errorMap&&s._updateErrorMap(e.errorMap),s._initializeWithPersistence(a,e?.popupRedirectResolver)}function W2(s,e,i){const a=yg(s);de(/^https?:\/\//.test(e),a,"invalid-emulator-scheme");const o=!1,h=cS(e),{host:d,port:g}=Z2(e),v=g===null?"":`:${g}`,y={url:`${h}//${d}${v}/`},T=Object.freeze({host:d,port:g,protocol:h.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!a._canInitEmulator){de(a.config.emulator&&a.emulatorConfig,a,"emulator-config-failed"),de(Ls(y,a.config.emulator)&&Ls(T,a.emulatorConfig),a,"emulator-config-failed");return}a.config.emulator=y,a.emulatorConfig=T,a.settings.appVerificationDisabledForTesting=!0,qr(d)?(Cp(`${h}//${d}${v}`),Ap("Auth",!0)):$2()}function cS(s){const e=s.indexOf(":");return e<0?"":s.substr(0,e+1)}function Z2(s){const e=cS(s),i=/(\/\/)?([^?#/]+)/.exec(s.substr(e.length));if(!i)return{host:"",port:null};const a=i[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(a);if(o){const h=o[1];return{host:h,port:Yv(a.substr(h.length+1))}}else{const[h,d]=a.split(":");return{host:h,port:Yv(d)}}}function Yv(s){if(!s)return null;const e=Number(s);return isNaN(e)?null:e}function $2(){function s(){const e=document.createElement("p"),i=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e,i){this.providerId=e,this.signInMethod=i}toJSON(){return Bi("not implemented")}_getIdTokenResponse(e){return Bi("not implemented")}_linkToIdToken(e,i){return Bi("not implemented")}_getReauthenticationResolver(e){return Bi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xa(s,e){return R2(s,"POST","/v1/accounts:signInWithIdp",gg(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J2="http://localhost";class Br extends hS{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const i=new Br(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(i.idToken=e.idToken),e.accessToken&&(i.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(i.nonce=e.nonce),e.pendingToken&&(i.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(i.accessToken=e.oauthToken,i.secret=e.oauthTokenSecret):Xi("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e,{providerId:a,signInMethod:o,...h}=i;if(!a||!o)return null;const d=new Br(a,o);return d.idToken=h.idToken||void 0,d.accessToken=h.accessToken||void 0,d.secret=h.secret,d.nonce=h.nonce,d.pendingToken=h.pendingToken||null,d}_getIdTokenResponse(e){const i=this.buildRequest();return Xa(e,i)}_linkToIdToken(e,i){const a=this.buildRequest();return a.idToken=i,Xa(e,a)}_getReauthenticationResolver(e){const i=this.buildRequest();return i.autoCreate=!1,Xa(e,i)}buildRequest(){const e={requestUri:J2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),e.postBody=sl(i)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo extends fS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs extends Jo{constructor(){super("facebook.com")}static credential(e){return Br._fromParams({providerId:Rs.PROVIDER_ID,signInMethod:Rs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rs.credentialFromTaggedObject(e)}static credentialFromError(e){return Rs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rs.credential(e.oauthAccessToken)}catch{return null}}}Rs.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rs.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns extends Jo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,i){return Br._fromParams({providerId:Ns.PROVIDER_ID,signInMethod:Ns.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:i})}static credentialFromResult(e){return Ns.credentialFromTaggedObject(e)}static credentialFromError(e){return Ns.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:i,oauthAccessToken:a}=e;if(!i&&!a)return null;try{return Ns.credential(i,a)}catch{return null}}}Ns.GOOGLE_SIGN_IN_METHOD="google.com";Ns.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is extends Jo{constructor(){super("github.com")}static credential(e){return Br._fromParams({providerId:Is.PROVIDER_ID,signInMethod:Is.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Is.credentialFromTaggedObject(e)}static credentialFromError(e){return Is.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Is.credential(e.oauthAccessToken)}catch{return null}}}Is.GITHUB_SIGN_IN_METHOD="github.com";Is.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os extends Jo{constructor(){super("twitter.com")}static credential(e,i){return Br._fromParams({providerId:Os.PROVIDER_ID,signInMethod:Os.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:i})}static credentialFromResult(e){return Os.credentialFromTaggedObject(e)}static credentialFromError(e){return Os.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:i,oauthTokenSecret:a}=e;if(!i||!a)return null;try{return Os.credential(i,a)}catch{return null}}}Os.TWITTER_SIGN_IN_METHOD="twitter.com";Os.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,i,a,o=!1){const h=await Bn._fromIdTokenResponse(e,a,o),d=Xv(a);return new el({user:h,providerId:d,_tokenResponse:a,operationType:i})}static async _forOperation(e,i,a){await e._updateTokensIfNecessary(a,!0);const o=Xv(a);return new el({user:e,providerId:o,_tokenResponse:a,operationType:i})}}function Xv(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh extends Ki{constructor(e,i,a,o){super(i.code,i.message),this.operationType=a,this.user=o,Object.setPrototypeOf(this,rh.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:i.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(e,i,a,o){return new rh(e,i,a,o)}}function dS(s,e,i,a){return(e==="reauthenticate"?i._getReauthenticationResolver(s):i._getIdTokenResponse(s)).catch(h=>{throw h.code==="auth/multi-factor-auth-required"?rh._fromErrorAndOperation(s,h,e,a):h})}async function eR(s,e,i=!1){const a=await Vo(s,e._linkToIdToken(s.auth,await s.getIdToken()),i);return el._forOperation(s,"link",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tR(s,e,i=!1){const{auth:a}=s;if(zn(a.app))return Promise.reject(xr(a));const o="reauthenticate";try{const h=await Vo(s,dS(a,o,e,s),i);de(h.idToken,a,"internal-error");const d=mg(h.idToken);de(d,a,"internal-error");const{sub:g}=d;return de(s.uid===g,a,"user-mismatch"),el._forOperation(s,o,h)}catch(h){throw h?.code==="auth/user-not-found"&&Xi(a,"user-mismatch"),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nR(s,e,i=!1){if(zn(s.app))return Promise.reject(xr(s));const a="signIn",o=await dS(s,a,e),h=await el._fromIdTokenResponse(s,a,o);return i||await s._updateCurrentUser(h.user),h}function iR(s,e,i,a){return pn(s).onIdTokenChanged(e,i,a)}function sR(s,e,i){return pn(s).beforeAuthStateChanged(e,i)}const ah="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e,i){this.storageRetriever=e,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(ah,"1"),this.storage.removeItem(ah),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,i){return this.storage.setItem(e,JSON.stringify(i)),Promise.resolve()}_get(e){const i=this.storage.getItem(e);return Promise.resolve(i?JSON.parse(i):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR=1e3,aR=10;class gS extends pS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,i)=>this.onStorageEvent(e,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=oS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const i of Object.keys(this.listeners)){const a=this.storage.getItem(i),o=this.localCache[i];a!==o&&e(i,o,a)}}onStorageEvent(e,i=!1){if(!e.key){this.forAllChangedKeys((d,g,v)=>{this.notifyListeners(d,v)});return}const a=e.key;i?this.detachListener():this.stopPolling();const o=()=>{const d=this.storage.getItem(a);!i&&this.localCache[a]===d||this.notifyListeners(a,d)},h=this.storage.getItem(a);z2()&&h!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,aR):o()}notifyListeners(e,i){this.localCache[e]=i;const a=this.listeners[e];if(a)for(const o of Array.from(a))o(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,i,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:i,newValue:a}),!0)})},rR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,i){await super._set(e,i),this.localCache[e]=JSON.stringify(i)}async _get(e){const i=await super._get(e);return this.localCache[e]=JSON.stringify(i),i}async _remove(e){await super._remove(e),delete this.localCache[e]}}gS.type="LOCAL";const lR=gS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS extends pS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,i){}_removeListener(e,i){}}mS.type="SESSION";const _S=mS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oR(s){return Promise.all(s.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const i=this.receivers.find(o=>o.isListeningto(e));if(i)return i;const a=new Ch(e);return this.receivers.push(a),a}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const i=e,{eventId:a,eventType:o,data:h}=i.data,d=this.handlersMap[o];if(!d?.size)return;i.ports[0].postMessage({status:"ack",eventId:a,eventType:o});const g=Array.from(d).map(async y=>y(i.origin,h)),v=await oR(g);i.ports[0].postMessage({status:"done",eventId:a,eventType:o,response:v})}_subscribe(e,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(i)}_unsubscribe(e,i){this.handlersMap[e]&&i&&this.handlersMap[e].delete(i),(!i||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ch.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(s="",e=10){let i="";for(let a=0;a<e;a++)i+=Math.floor(Math.random()*10);return s+i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,i,a=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let h,d;return new Promise((g,v)=>{const y=Sg("",20);o.port1.start();const T=setTimeout(()=>{v(new Error("unsupported_event"))},a);d={messageChannel:o,onMessage(A){const C=A;if(C.data.eventId===y)switch(C.data.status){case"ack":clearTimeout(T),h=setTimeout(()=>{v(new Error("timeout"))},3e3);break;case"done":clearTimeout(h),g(C.data.response);break;default:clearTimeout(T),clearTimeout(h),v(new Error("invalid_response"));break}}},this.handlers.add(d),o.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:y,data:i},[o.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(){return window}function cR(s){hi().location.href=s}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yS(){return typeof hi().WorkerGlobalScope<"u"&&typeof hi().importScripts=="function"}async function hR(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fR(){return navigator?.serviceWorker?.controller||null}function dR(){return yS()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS="firebaseLocalStorageDb",pR=1,lh="firebaseLocalStorage",SS="fbase_key";class eu{constructor(e){this.request=e}toPromise(){return new Promise((e,i)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function Ah(s,e){return s.transaction([lh],e?"readwrite":"readonly").objectStore(lh)}function gR(){const s=indexedDB.deleteDatabase(vS);return new eu(s).toPromise()}function vp(){const s=indexedDB.open(vS,pR);return new Promise((e,i)=>{s.addEventListener("error",()=>{i(s.error)}),s.addEventListener("upgradeneeded",()=>{const a=s.result;try{a.createObjectStore(lh,{keyPath:SS})}catch(o){i(o)}}),s.addEventListener("success",async()=>{const a=s.result;a.objectStoreNames.contains(lh)?e(a):(a.close(),await gR(),e(await vp()))})})}async function Qv(s,e,i){const a=Ah(s,!0).put({[SS]:e,value:i});return new eu(a).toPromise()}async function mR(s,e){const i=Ah(s,!1).get(e),a=await new eu(i).toPromise();return a===void 0?null:a.value}function Kv(s,e){const i=Ah(s,!0).delete(e);return new eu(i).toPromise()}const _R=800,yR=3;class ES{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vp(),this.db)}async _withRetries(e){let i=0;for(;;)try{const a=await this._openDb();return await e(a)}catch(a){if(i++>yR)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ch._getInstance(dR()),this.receiver._subscribe("keyChanged",async(e,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(e,i)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await hR(),!this.activeServiceWorker)return;this.sender=new uR(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vp();return await Qv(e,ah,"1"),await Kv(e,ah),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,i){return this._withPendingWrite(async()=>(await this._withRetries(a=>Qv(a,e,i)),this.localCache[e]=i,this.notifyServiceWorker(e)))}async _get(e){const i=await this._withRetries(a=>mR(a,e));return this.localCache[e]=i,i}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(i=>Kv(i,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const h=Ah(o,!1).getAll();return new eu(h).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const i=[],a=new Set;if(e.length!==0)for(const{fbase_key:o,value:h}of e)a.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(h)&&(this.notifyListeners(o,h),i.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!a.has(o)&&(this.notifyListeners(o,null),i.push(o));return i}notifyListeners(e,i){this.localCache[e]=i;const a=this.listeners[e];if(a)for(const o of Array.from(a))o(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_R)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ES.type="LOCAL";const vR=ES;new $o(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SR(s,e){return e?Vi(e):(de(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg extends hS{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xa(e,this._buildIdpRequest())}_linkToIdToken(e,i){return Xa(e,this._buildIdpRequest(i))}_getReauthenticationResolver(e){return Xa(e,this._buildIdpRequest())}_buildIdpRequest(e){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(i.idToken=e),i}}function ER(s){return nR(s.auth,new Eg(s),s.bypassAuthState)}function TR(s){const{auth:e,user:i}=s;return de(i,e,"internal-error"),tR(i,new Eg(s),s.bypassAuthState)}async function bR(s){const{auth:e,user:i}=s;return de(i,e,"internal-error"),eR(i,new Eg(s),s.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(e,i,a,o,h=!1){this.auth=e,this.resolver=a,this.user=o,this.bypassAuthState=h,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(e,i)=>{this.pendingPromise={resolve:e,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(e){const{urlResponse:i,sessionId:a,postBody:o,tenantId:h,error:d,type:g}=e;if(d){this.reject(d);return}const v={auth:this.auth,requestUri:i,sessionId:a,tenantId:h||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(v))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ER;case"linkViaPopup":case"linkViaRedirect":return bR;case"reauthViaPopup":case"reauthViaRedirect":return TR;default:Xi(this.auth,"internal-error")}}resolve(e){Qi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR=new $o(2e3,1e4);class Ba extends TS{constructor(e,i,a,o,h){super(e,i,o,h),this.provider=a,this.authWindow=null,this.pollId=null,Ba.currentPopupAction&&Ba.currentPopupAction.cancel(),Ba.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){Qi(this.filter.length===1,"Popup operations only handle one event");const e=Sg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(ci(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(ci(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ba.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ci(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,wR.get())};e()}}Ba.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR="pendingRedirect",Uc=new Map;class AR extends TS{constructor(e,i,a=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,a),this.eventId=null}async execute(){let e=Uc.get(this.auth._key());if(!e){try{const a=await RR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(a)}catch(i){e=()=>Promise.reject(i)}Uc.set(this.auth._key(),e)}return this.bypassAuthState||Uc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const i=await this.auth._redirectUserForId(e.eventId);if(i)return this.user=i,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RR(s,e){const i=OR(e),a=IR(s);if(!await a._isAvailable())return!1;const o=await a._get(i)==="true";return await a._remove(i),o}function NR(s,e){Uc.set(s._key(),e)}function IR(s){return Vi(s._redirectPersistence)}function OR(s){return Lc(CR,s.config.apiKey,s.name)}async function DR(s,e,i=!1){if(zn(s.app))return Promise.reject(xr(s));const a=yg(s),o=SR(a,e),d=await new AR(a,o,i).execute();return d&&!i&&(delete d.user._redirectEventId,await a._persistUserIfCurrent(d.user),await a._setRedirectUser(null,e)),d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR=600*1e3;class MR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let i=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(e,a)&&(i=!0,this.sendToConsumer(e,a),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kR(e)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=e,i=!0)),i}sendToConsumer(e,i){if(e.error&&!bS(e)){const a=e.error.code?.split("auth/")[1]||"internal-error";i.onError(ci(this.auth,a))}else i.onAuthEvent(e)}isEventForConsumer(e,i){const a=i.eventId===null||!!e.eventId&&e.eventId===i.eventId;return i.filter.includes(e.type)&&a}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wv(e))}saveEventToCache(e){this.cachedEventUids.add(Wv(e)),this.lastProcessedEventTime=Date.now()}}function Wv(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(e=>e).join("-")}function bS({type:s,error:e}){return s==="unknown"&&e?.code==="auth/no-auth-event"}function kR(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bS(s);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LR(s,e={}){return ll(s,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,PR=/^https?/;async function zR(s){if(s.config.emulator)return;const{authorizedDomains:e}=await LR(s);for(const i of e)try{if(jR(i))return}catch{}Xi(s,"unauthorized-domain")}function jR(s){const e=_p(),{protocol:i,hostname:a}=new URL(e);if(s.startsWith("chrome-extension://")){const d=new URL(s);return d.hostname===""&&a===""?i==="chrome-extension:"&&s.replace("chrome-extension://","")===e.replace("chrome-extension://",""):i==="chrome-extension:"&&d.hostname===a}if(!PR.test(i))return!1;if(UR.test(s))return a===s;const o=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(a)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR=new $o(3e4,6e4);function Zv(){const s=hi().___jsl;if(s?.H){for(const e of Object.keys(s.H))if(s.H[e].r=s.H[e].r||[],s.H[e].L=s.H[e].L||[],s.H[e].r=[...s.H[e].L],s.CP)for(let i=0;i<s.CP.length;i++)s.CP[i]=null}}function BR(s){return new Promise((e,i)=>{function a(){Zv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zv(),i(ci(s,"network-request-failed"))},timeout:HR.get()})}if(hi().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(hi().gapi?.load)a();else{const o=X2("iframefcb");return hi()[o]=()=>{gapi.load?a():i(ci(s,"network-request-failed"))},F2(`${Y2()}?onload=${o}`).catch(h=>i(h))}}).catch(e=>{throw Pc=null,e})}let Pc=null;function VR(s){return Pc=Pc||BR(s),Pc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR=new $o(5e3,15e3),GR="__/auth/iframe",FR="emulator/auth/iframe",YR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},XR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function QR(s){const e=s.config;de(e.authDomain,s,"auth-domain-config-required");const i=e.emulator?pg(e,FR):`https://${s.config.authDomain}/${GR}`,a={apiKey:e.apiKey,appName:s.name,v:Gr},o=XR.get(s.config.apiHost);o&&(a.eid=o);const h=s._getFrameworks();return h.length&&(a.fw=h.join(",")),`${i}?${sl(a).slice(1)}`}async function KR(s){const e=await VR(s),i=hi().gapi;return de(i,s,"internal-error"),e.open({where:document.body,url:QR(s),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:YR,dontclear:!0},a=>new Promise(async(o,h)=>{await a.restyle({setHideOnLeave:!1});const d=ci(s,"network-request-failed"),g=hi().setTimeout(()=>{h(d)},qR.get());function v(){hi().clearTimeout(g),o(a)}a.ping(v).then(v,()=>{h(d)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZR=500,$R=600,JR="_blank",eN="http://localhost";class $v{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tN(s,e,i,a=ZR,o=$R){const h=Math.max((window.screen.availHeight-o)/2,0).toString(),d=Math.max((window.screen.availWidth-a)/2,0).toString();let g="";const v={...WR,width:a.toString(),height:o.toString(),top:h,left:d},y=Wt().toLowerCase();i&&(g=iS(y)?JR:i),tS(y)&&(e=e||eN,v.scrollbars="yes");const T=Object.entries(v).reduce((C,[X,F])=>`${C}${X}=${F},`,"");if(P2(y)&&g!=="_self")return nN(e||"",g),new $v(null);const A=window.open(e||"",g,T);de(A,s,"popup-blocked");try{A.focus()}catch{}return new $v(A)}function nN(s,e){const i=document.createElement("a");i.href=s,i.target=e;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iN="__/auth/handler",sN="emulator/auth/handler",rN=encodeURIComponent("fac");async function Jv(s,e,i,a,o,h){de(s.config.authDomain,s,"auth-domain-config-required"),de(s.config.apiKey,s,"invalid-api-key");const d={apiKey:s.config.apiKey,appName:s.name,authType:i,redirectUrl:a,v:Gr,eventId:o};if(e instanceof fS){e.setDefaultLanguage(s.languageCode),d.providerId=e.providerId||"",Zd(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[T,A]of Object.entries({}))d[T]=A}if(e instanceof Jo){const T=e.getScopes().filter(A=>A!=="");T.length>0&&(d.scopes=T.join(","))}s.tenantId&&(d.tid=s.tenantId);const g=d;for(const T of Object.keys(g))g[T]===void 0&&delete g[T];const v=await s._getAppCheckToken(),y=v?`#${rN}=${encodeURIComponent(v)}`:"";return`${aN(s)}?${sl(g).slice(1)}${y}`}function aN({config:s}){return s.emulator?pg(s,sN):`https://${s.authDomain}/${iN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd="webStorageSupport";class lN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_S,this._completeRedirectFn=DR,this._overrideRedirectResult=NR}async _openPopup(e,i,a,o){Qi(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const h=await Jv(e,i,a,_p(),o);return tN(e,h,Sg())}async _openRedirect(e,i,a,o){await this._originValidation(e);const h=await Jv(e,i,a,_p(),o);return cR(h),new Promise(()=>{})}_initialize(e){const i=e._key();if(this.eventManagers[i]){const{manager:o,promise:h}=this.eventManagers[i];return o?Promise.resolve(o):(Qi(h,"If manager is not set, promise should be"),h)}const a=this.initAndGetManager(e);return this.eventManagers[i]={promise:a},a.catch(()=>{delete this.eventManagers[i]}),a}async initAndGetManager(e){const i=await KR(e),a=new MR(e);return i.register("authEvent",o=>(de(o?.authEvent,e,"invalid-auth-event"),{status:a.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:a},this.iframes[e._key()]=i,a}_isIframeWebStorageSupported(e,i){this.iframes[e._key()].send(Xd,{type:Xd},o=>{const h=o?.[0]?.[Xd];h!==void 0&&i(!!h),Xi(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const i=e._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=zR(e)),this.originValidationPromises[i]}get _shouldInitProactively(){return oS()||nS()||_g()}}const oN=lN;var e0="@firebase/auth",t0="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const i=this.auth.onIdTokenChanged(a=>{e(a?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,i),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const i=this.internalListeners.get(e);i&&(this.internalListeners.delete(e),i(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cN(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hN(s){Ur(new Us("auth",(e,{options:i})=>{const a=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),h=e.getProvider("app-check-internal"),{apiKey:d,authDomain:g}=a.options;de(d&&!d.includes(":"),"invalid-api-key",{appName:a.name});const v={apiKey:d,authDomain:g,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uS(s)},y=new q2(a,o,h,v);return K2(y,i),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,i,a)=>{e.getProvider("auth-internal").initialize()})),Ur(new Us("auth-internal",e=>{const i=yg(e.getProvider("auth").getImmediate());return(a=>new uN(a))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),ui(e0,t0,cN(s)),ui(e0,t0,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN=300,dN=D0("authIdTokenMaxAge")||fN;let n0=null;const pN=s=>async e=>{const i=e&&await e.getIdTokenResult(),a=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(a&&a>dN)return;const o=i?.token;n0!==o&&(n0=o,await fetch(s,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function gN(s=Ip()){const e=fh(s,"auth");if(e.isInitialized())return e.getImmediate();const i=Q2(s,{popupRedirectResolver:oN,persistence:[vR,lR,_S]}),a=D0("authTokenSyncURL");if(a&&typeof isSecureContext=="boolean"&&isSecureContext){const h=new URL(a,location.origin);if(location.origin===h.origin){const d=pN(h.toString());sR(i,d,()=>d(i.currentUser)),iR(i,g=>d(g))}}const o=N0("auth");return o&&W2(i,`http://${o}`),i}function mN(){return document.getElementsByTagName("head")?.[0]??document}G2({loadJS(s){return new Promise((e,i)=>{const a=document.createElement("script");a.setAttribute("src",s),a.onload=e,a.onerror=o=>{const h=ci("internal-error");h.customData=o,i(h)},a.type="text/javascript",a.charset="UTF-8",mN().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hN("Browser");var i0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tg;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(M,b){function N(){}N.prototype=b.prototype,M.D=b.prototype,M.prototype=new N,M.prototype.constructor=M,M.C=function(x,k,U){for(var R=Array(arguments.length-2),St=2;St<arguments.length;St++)R[St-2]=arguments[St];return b.prototype[k].apply(x,R)}}function i(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(a,i),a.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(M,b,N){N||(N=0);var x=Array(16);if(typeof b=="string")for(var k=0;16>k;++k)x[k]=b.charCodeAt(N++)|b.charCodeAt(N++)<<8|b.charCodeAt(N++)<<16|b.charCodeAt(N++)<<24;else for(k=0;16>k;++k)x[k]=b[N++]|b[N++]<<8|b[N++]<<16|b[N++]<<24;b=M.g[0],N=M.g[1],k=M.g[2];var U=M.g[3],R=b+(U^N&(k^U))+x[0]+3614090360&4294967295;b=N+(R<<7&4294967295|R>>>25),R=U+(k^b&(N^k))+x[1]+3905402710&4294967295,U=b+(R<<12&4294967295|R>>>20),R=k+(N^U&(b^N))+x[2]+606105819&4294967295,k=U+(R<<17&4294967295|R>>>15),R=N+(b^k&(U^b))+x[3]+3250441966&4294967295,N=k+(R<<22&4294967295|R>>>10),R=b+(U^N&(k^U))+x[4]+4118548399&4294967295,b=N+(R<<7&4294967295|R>>>25),R=U+(k^b&(N^k))+x[5]+1200080426&4294967295,U=b+(R<<12&4294967295|R>>>20),R=k+(N^U&(b^N))+x[6]+2821735955&4294967295,k=U+(R<<17&4294967295|R>>>15),R=N+(b^k&(U^b))+x[7]+4249261313&4294967295,N=k+(R<<22&4294967295|R>>>10),R=b+(U^N&(k^U))+x[8]+1770035416&4294967295,b=N+(R<<7&4294967295|R>>>25),R=U+(k^b&(N^k))+x[9]+2336552879&4294967295,U=b+(R<<12&4294967295|R>>>20),R=k+(N^U&(b^N))+x[10]+4294925233&4294967295,k=U+(R<<17&4294967295|R>>>15),R=N+(b^k&(U^b))+x[11]+2304563134&4294967295,N=k+(R<<22&4294967295|R>>>10),R=b+(U^N&(k^U))+x[12]+1804603682&4294967295,b=N+(R<<7&4294967295|R>>>25),R=U+(k^b&(N^k))+x[13]+4254626195&4294967295,U=b+(R<<12&4294967295|R>>>20),R=k+(N^U&(b^N))+x[14]+2792965006&4294967295,k=U+(R<<17&4294967295|R>>>15),R=N+(b^k&(U^b))+x[15]+1236535329&4294967295,N=k+(R<<22&4294967295|R>>>10),R=b+(k^U&(N^k))+x[1]+4129170786&4294967295,b=N+(R<<5&4294967295|R>>>27),R=U+(N^k&(b^N))+x[6]+3225465664&4294967295,U=b+(R<<9&4294967295|R>>>23),R=k+(b^N&(U^b))+x[11]+643717713&4294967295,k=U+(R<<14&4294967295|R>>>18),R=N+(U^b&(k^U))+x[0]+3921069994&4294967295,N=k+(R<<20&4294967295|R>>>12),R=b+(k^U&(N^k))+x[5]+3593408605&4294967295,b=N+(R<<5&4294967295|R>>>27),R=U+(N^k&(b^N))+x[10]+38016083&4294967295,U=b+(R<<9&4294967295|R>>>23),R=k+(b^N&(U^b))+x[15]+3634488961&4294967295,k=U+(R<<14&4294967295|R>>>18),R=N+(U^b&(k^U))+x[4]+3889429448&4294967295,N=k+(R<<20&4294967295|R>>>12),R=b+(k^U&(N^k))+x[9]+568446438&4294967295,b=N+(R<<5&4294967295|R>>>27),R=U+(N^k&(b^N))+x[14]+3275163606&4294967295,U=b+(R<<9&4294967295|R>>>23),R=k+(b^N&(U^b))+x[3]+4107603335&4294967295,k=U+(R<<14&4294967295|R>>>18),R=N+(U^b&(k^U))+x[8]+1163531501&4294967295,N=k+(R<<20&4294967295|R>>>12),R=b+(k^U&(N^k))+x[13]+2850285829&4294967295,b=N+(R<<5&4294967295|R>>>27),R=U+(N^k&(b^N))+x[2]+4243563512&4294967295,U=b+(R<<9&4294967295|R>>>23),R=k+(b^N&(U^b))+x[7]+1735328473&4294967295,k=U+(R<<14&4294967295|R>>>18),R=N+(U^b&(k^U))+x[12]+2368359562&4294967295,N=k+(R<<20&4294967295|R>>>12),R=b+(N^k^U)+x[5]+4294588738&4294967295,b=N+(R<<4&4294967295|R>>>28),R=U+(b^N^k)+x[8]+2272392833&4294967295,U=b+(R<<11&4294967295|R>>>21),R=k+(U^b^N)+x[11]+1839030562&4294967295,k=U+(R<<16&4294967295|R>>>16),R=N+(k^U^b)+x[14]+4259657740&4294967295,N=k+(R<<23&4294967295|R>>>9),R=b+(N^k^U)+x[1]+2763975236&4294967295,b=N+(R<<4&4294967295|R>>>28),R=U+(b^N^k)+x[4]+1272893353&4294967295,U=b+(R<<11&4294967295|R>>>21),R=k+(U^b^N)+x[7]+4139469664&4294967295,k=U+(R<<16&4294967295|R>>>16),R=N+(k^U^b)+x[10]+3200236656&4294967295,N=k+(R<<23&4294967295|R>>>9),R=b+(N^k^U)+x[13]+681279174&4294967295,b=N+(R<<4&4294967295|R>>>28),R=U+(b^N^k)+x[0]+3936430074&4294967295,U=b+(R<<11&4294967295|R>>>21),R=k+(U^b^N)+x[3]+3572445317&4294967295,k=U+(R<<16&4294967295|R>>>16),R=N+(k^U^b)+x[6]+76029189&4294967295,N=k+(R<<23&4294967295|R>>>9),R=b+(N^k^U)+x[9]+3654602809&4294967295,b=N+(R<<4&4294967295|R>>>28),R=U+(b^N^k)+x[12]+3873151461&4294967295,U=b+(R<<11&4294967295|R>>>21),R=k+(U^b^N)+x[15]+530742520&4294967295,k=U+(R<<16&4294967295|R>>>16),R=N+(k^U^b)+x[2]+3299628645&4294967295,N=k+(R<<23&4294967295|R>>>9),R=b+(k^(N|~U))+x[0]+4096336452&4294967295,b=N+(R<<6&4294967295|R>>>26),R=U+(N^(b|~k))+x[7]+1126891415&4294967295,U=b+(R<<10&4294967295|R>>>22),R=k+(b^(U|~N))+x[14]+2878612391&4294967295,k=U+(R<<15&4294967295|R>>>17),R=N+(U^(k|~b))+x[5]+4237533241&4294967295,N=k+(R<<21&4294967295|R>>>11),R=b+(k^(N|~U))+x[12]+1700485571&4294967295,b=N+(R<<6&4294967295|R>>>26),R=U+(N^(b|~k))+x[3]+2399980690&4294967295,U=b+(R<<10&4294967295|R>>>22),R=k+(b^(U|~N))+x[10]+4293915773&4294967295,k=U+(R<<15&4294967295|R>>>17),R=N+(U^(k|~b))+x[1]+2240044497&4294967295,N=k+(R<<21&4294967295|R>>>11),R=b+(k^(N|~U))+x[8]+1873313359&4294967295,b=N+(R<<6&4294967295|R>>>26),R=U+(N^(b|~k))+x[15]+4264355552&4294967295,U=b+(R<<10&4294967295|R>>>22),R=k+(b^(U|~N))+x[6]+2734768916&4294967295,k=U+(R<<15&4294967295|R>>>17),R=N+(U^(k|~b))+x[13]+1309151649&4294967295,N=k+(R<<21&4294967295|R>>>11),R=b+(k^(N|~U))+x[4]+4149444226&4294967295,b=N+(R<<6&4294967295|R>>>26),R=U+(N^(b|~k))+x[11]+3174756917&4294967295,U=b+(R<<10&4294967295|R>>>22),R=k+(b^(U|~N))+x[2]+718787259&4294967295,k=U+(R<<15&4294967295|R>>>17),R=N+(U^(k|~b))+x[9]+3951481745&4294967295,M.g[0]=M.g[0]+b&4294967295,M.g[1]=M.g[1]+(k+(R<<21&4294967295|R>>>11))&4294967295,M.g[2]=M.g[2]+k&4294967295,M.g[3]=M.g[3]+U&4294967295}a.prototype.u=function(M,b){b===void 0&&(b=M.length);for(var N=b-this.blockSize,x=this.B,k=this.h,U=0;U<b;){if(k==0)for(;U<=N;)o(this,M,U),U+=this.blockSize;if(typeof M=="string"){for(;U<b;)if(x[k++]=M.charCodeAt(U++),k==this.blockSize){o(this,x),k=0;break}}else for(;U<b;)if(x[k++]=M[U++],k==this.blockSize){o(this,x),k=0;break}}this.h=k,this.o+=b},a.prototype.v=function(){var M=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);M[0]=128;for(var b=1;b<M.length-8;++b)M[b]=0;var N=8*this.o;for(b=M.length-8;b<M.length;++b)M[b]=N&255,N/=256;for(this.u(M),M=Array(16),b=N=0;4>b;++b)for(var x=0;32>x;x+=8)M[N++]=this.g[b]>>>x&255;return M};function h(M,b){var N=g;return Object.prototype.hasOwnProperty.call(N,M)?N[M]:N[M]=b(M)}function d(M,b){this.h=b;for(var N=[],x=!0,k=M.length-1;0<=k;k--){var U=M[k]|0;x&&U==b||(N[k]=U,x=!1)}this.g=N}var g={};function v(M){return-128<=M&&128>M?h(M,function(b){return new d([b|0],0>b?-1:0)}):new d([M|0],0>M?-1:0)}function y(M){if(isNaN(M)||!isFinite(M))return A;if(0>M)return te(y(-M));for(var b=[],N=1,x=0;M>=N;x++)b[x]=M/N|0,N*=4294967296;return new d(b,0)}function T(M,b){if(M.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(M.charAt(0)=="-")return te(T(M.substring(1),b));if(0<=M.indexOf("-"))throw Error('number format error: interior "-" character');for(var N=y(Math.pow(b,8)),x=A,k=0;k<M.length;k+=8){var U=Math.min(8,M.length-k),R=parseInt(M.substring(k,k+U),b);8>U?(U=y(Math.pow(b,U)),x=x.j(U).add(y(R))):(x=x.j(N),x=x.add(y(R)))}return x}var A=v(0),C=v(1),X=v(16777216);s=d.prototype,s.m=function(){if(Z(this))return-te(this).m();for(var M=0,b=1,N=0;N<this.g.length;N++){var x=this.i(N);M+=(0<=x?x:4294967296+x)*b,b*=4294967296}return M},s.toString=function(M){if(M=M||10,2>M||36<M)throw Error("radix out of range: "+M);if(F(this))return"0";if(Z(this))return"-"+te(this).toString(M);for(var b=y(Math.pow(M,6)),N=this,x="";;){var k=ve(N,b).g;N=re(N,k.j(b));var U=((0<N.g.length?N.g[0]:N.h)>>>0).toString(M);if(N=k,F(N))return U+x;for(;6>U.length;)U="0"+U;x=U+x}},s.i=function(M){return 0>M?0:M<this.g.length?this.g[M]:this.h};function F(M){if(M.h!=0)return!1;for(var b=0;b<M.g.length;b++)if(M.g[b]!=0)return!1;return!0}function Z(M){return M.h==-1}s.l=function(M){return M=re(this,M),Z(M)?-1:F(M)?0:1};function te(M){for(var b=M.g.length,N=[],x=0;x<b;x++)N[x]=~M.g[x];return new d(N,~M.h).add(C)}s.abs=function(){return Z(this)?te(this):this},s.add=function(M){for(var b=Math.max(this.g.length,M.g.length),N=[],x=0,k=0;k<=b;k++){var U=x+(this.i(k)&65535)+(M.i(k)&65535),R=(U>>>16)+(this.i(k)>>>16)+(M.i(k)>>>16);x=R>>>16,U&=65535,R&=65535,N[k]=R<<16|U}return new d(N,N[N.length-1]&-2147483648?-1:0)};function re(M,b){return M.add(te(b))}s.j=function(M){if(F(this)||F(M))return A;if(Z(this))return Z(M)?te(this).j(te(M)):te(te(this).j(M));if(Z(M))return te(this.j(te(M)));if(0>this.l(X)&&0>M.l(X))return y(this.m()*M.m());for(var b=this.g.length+M.g.length,N=[],x=0;x<2*b;x++)N[x]=0;for(x=0;x<this.g.length;x++)for(var k=0;k<M.g.length;k++){var U=this.i(x)>>>16,R=this.i(x)&65535,St=M.i(k)>>>16,nt=M.i(k)&65535;N[2*x+2*k]+=R*nt,ue(N,2*x+2*k),N[2*x+2*k+1]+=U*nt,ue(N,2*x+2*k+1),N[2*x+2*k+1]+=R*St,ue(N,2*x+2*k+1),N[2*x+2*k+2]+=U*St,ue(N,2*x+2*k+2)}for(x=0;x<b;x++)N[x]=N[2*x+1]<<16|N[2*x];for(x=b;x<2*b;x++)N[x]=0;return new d(N,0)};function ue(M,b){for(;(M[b]&65535)!=M[b];)M[b+1]+=M[b]>>>16,M[b]&=65535,b++}function pe(M,b){this.g=M,this.h=b}function ve(M,b){if(F(b))throw Error("division by zero");if(F(M))return new pe(A,A);if(Z(M))return b=ve(te(M),b),new pe(te(b.g),te(b.h));if(Z(b))return b=ve(M,te(b)),new pe(te(b.g),b.h);if(30<M.g.length){if(Z(M)||Z(b))throw Error("slowDivide_ only works with positive integers.");for(var N=C,x=b;0>=x.l(M);)N=_e(N),x=_e(x);var k=Le(N,1),U=Le(x,1);for(x=Le(x,2),N=Le(N,2);!F(x);){var R=U.add(x);0>=R.l(M)&&(k=k.add(N),U=R),x=Le(x,1),N=Le(N,1)}return b=re(M,k.j(b)),new pe(k,b)}for(k=A;0<=M.l(b);){for(N=Math.max(1,Math.floor(M.m()/b.m())),x=Math.ceil(Math.log(N)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),U=y(N),R=U.j(b);Z(R)||0<R.l(M);)N-=x,U=y(N),R=U.j(b);F(U)&&(U=C),k=k.add(U),M=re(M,R)}return new pe(k,M)}s.A=function(M){return ve(this,M).h},s.and=function(M){for(var b=Math.max(this.g.length,M.g.length),N=[],x=0;x<b;x++)N[x]=this.i(x)&M.i(x);return new d(N,this.h&M.h)},s.or=function(M){for(var b=Math.max(this.g.length,M.g.length),N=[],x=0;x<b;x++)N[x]=this.i(x)|M.i(x);return new d(N,this.h|M.h)},s.xor=function(M){for(var b=Math.max(this.g.length,M.g.length),N=[],x=0;x<b;x++)N[x]=this.i(x)^M.i(x);return new d(N,this.h^M.h)};function _e(M){for(var b=M.g.length+1,N=[],x=0;x<b;x++)N[x]=M.i(x)<<1|M.i(x-1)>>>31;return new d(N,M.h)}function Le(M,b){var N=b>>5;b%=32;for(var x=M.g.length-N,k=[],U=0;U<x;U++)k[U]=0<b?M.i(U+N)>>>b|M.i(U+N+1)<<32-b:M.i(U+N);return new d(k,M.h)}a.prototype.digest=a.prototype.v,a.prototype.reset=a.prototype.s,a.prototype.update=a.prototype.u,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.A,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=y,d.fromString=T,Tg=d}).apply(typeof i0<"u"?i0:typeof self<"u"?self:typeof window<"u"?window:{});var Dc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var s,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,m){return u==Array.prototype||u==Object.prototype||(u[p]=m.value),u};function i(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Dc=="object"&&Dc];for(var p=0;p<u.length;++p){var m=u[p];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var a=i(this);function o(u,p){if(p)e:{var m=a;u=u.split(".");for(var E=0;E<u.length-1;E++){var P=u[E];if(!(P in m))break e;m=m[P]}u=u[u.length-1],E=m[u],p=p(E),p!=E&&p!=null&&e(m,u,{configurable:!0,writable:!0,value:p})}}function h(u,p){u instanceof String&&(u+="");var m=0,E=!1,P={next:function(){if(!E&&m<u.length){var V=m++;return{value:p(V,u[V]),done:!1}}return E=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}o("Array.prototype.values",function(u){return u||function(){return h(this,function(p,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var d=d||{},g=this||self;function v(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function y(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function T(u,p,m){return u.call.apply(u.bind,arguments)}function A(u,p,m){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,E),u.apply(p,P)}}return function(){return u.apply(p,arguments)}}function C(u,p,m){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?T:A,C.apply(null,arguments)}function X(u,p){var m=Array.prototype.slice.call(arguments,1);return function(){var E=m.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function F(u,p){function m(){}m.prototype=p.prototype,u.aa=p.prototype,u.prototype=new m,u.prototype.constructor=u,u.Qb=function(E,P,V){for(var ee=Array(arguments.length-2),je=2;je<arguments.length;je++)ee[je-2]=arguments[je];return p.prototype[P].apply(E,ee)}}function Z(u){const p=u.length;if(0<p){const m=Array(p);for(let E=0;E<p;E++)m[E]=u[E];return m}return[]}function te(u,p){for(let m=1;m<arguments.length;m++){const E=arguments[m];if(v(E)){const P=u.length||0,V=E.length||0;u.length=P+V;for(let ee=0;ee<V;ee++)u[P+ee]=E[ee]}else u.push(E)}}class re{constructor(p,m){this.i=p,this.j=m,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function ue(u){return/^[\s\xa0]*$/.test(u)}function pe(){var u=g.navigator;return u&&(u=u.userAgent)?u:""}function ve(u){return ve[" "](u),u}ve[" "]=function(){};var _e=pe().indexOf("Gecko")!=-1&&!(pe().toLowerCase().indexOf("webkit")!=-1&&pe().indexOf("Edge")==-1)&&!(pe().indexOf("Trident")!=-1||pe().indexOf("MSIE")!=-1)&&pe().indexOf("Edge")==-1;function Le(u,p,m){for(const E in u)p.call(m,u[E],E,u)}function M(u,p){for(const m in u)p.call(void 0,u[m],m,u)}function b(u){const p={};for(const m in u)p[m]=u[m];return p}const N="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(u,p){let m,E;for(let P=1;P<arguments.length;P++){E=arguments[P];for(m in E)u[m]=E[m];for(let V=0;V<N.length;V++)m=N[V],Object.prototype.hasOwnProperty.call(E,m)&&(u[m]=E[m])}}function k(u){var p=1;u=u.split(":");const m=[];for(;0<p&&u.length;)m.push(u.shift()),p--;return u.length&&m.push(u.join(":")),m}function U(u){g.setTimeout(()=>{throw u},0)}function R(){var u=Ne;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class St{constructor(){this.h=this.g=null}add(p,m){const E=nt.get();E.set(p,m),this.h?this.h.next=E:this.g=E,this.h=E}}var nt=new re(()=>new D,u=>u.reset());class D{constructor(){this.next=this.g=this.h=null}set(p,m){this.h=p,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let K,ie=!1,Ne=new St,I=()=>{const u=g.Promise.resolve(void 0);K=()=>{u.then(W)}};var W=()=>{for(var u;u=R();){try{u.h.call(u.g)}catch(m){U(m)}var p=nt;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}ie=!1};function ne(){this.s=this.s,this.C=this.C}ne.prototype.s=!1,ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function $(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}$.prototype.h=function(){this.defaultPrevented=!0};var le=(function(){if(!g.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const m=()=>{};g.addEventListener("test",m,p),g.removeEventListener("test",m,p)}catch{}return u})();function Ee(u,p){if($.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var m=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(_e){e:{try{ve(p.nodeName);var P=!0;break e}catch{}P=!1}P||(p=null)}}else m=="mouseover"?p=u.fromElement:m=="mouseout"&&(p=u.toElement);this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:ge[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ee.aa.h.call(this)}}F(Ee,$);var ge={2:"touch",3:"pen",4:"mouse"};Ee.prototype.h=function(){Ee.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Ct="closure_listenable_"+(1e6*Math.random()|0),$e=0;function Fn(u,p,m,E,P){this.listener=u,this.proxy=null,this.src=p,this.type=m,this.capture=!!E,this.ha=P,this.key=++$e,this.da=this.fa=!1}function Zi(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function fi(u){this.src=u,this.g={},this.h=0}fi.prototype.add=function(u,p,m,E,P){var V=u.toString();u=this.g[V],u||(u=this.g[V]=[],this.h++);var ee=Bs(u,p,E,P);return-1<ee?(p=u[ee],m||(p.fa=!1)):(p=new Fn(p,this.src,V,!!E,P),p.fa=m,u.push(p)),p};function Hs(u,p){var m=p.type;if(m in u.g){var E=u.g[m],P=Array.prototype.indexOf.call(E,p,void 0),V;(V=0<=P)&&Array.prototype.splice.call(E,P,1),V&&(Zi(p),u.g[m].length==0&&(delete u.g[m],u.h--))}}function Bs(u,p,m,E){for(var P=0;P<u.length;++P){var V=u[P];if(!V.da&&V.listener==p&&V.capture==!!m&&V.ha==E)return P}return-1}var Vs="closure_lm_"+(1e6*Math.random()|0),ol={};function iu(u,p,m,E,P){if(Array.isArray(p)){for(var V=0;V<p.length;V++)iu(u,p[V],m,E,P);return null}return m=su(m),u&&u[Ct]?u.K(p,m,y(E)?!!E.capture:!1,P):mn(u,p,m,!1,E,P)}function mn(u,p,m,E,P,V){if(!p)throw Error("Invalid event type");var ee=y(P)?!!P.capture:!!P,je=Kr(u);if(je||(u[Vs]=je=new fi(u)),m=je.add(p,m,E,ee,V),m.proxy)return m;if(E=Rh(),m.proxy=E,E.src=u,E.listener=m,u.addEventListener)le||(P=ee),P===void 0&&(P=!1),u.addEventListener(p.toString(),E,P);else if(u.attachEvent)u.attachEvent(qs(p.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return m}function Rh(){function u(m){return p.call(u.src,u.listener,m)}const p=Nh;return u}function ul(u,p,m,E,P){if(Array.isArray(p))for(var V=0;V<p.length;V++)ul(u,p[V],m,E,P);else E=y(E)?!!E.capture:!!E,m=su(m),u&&u[Ct]?(u=u.i,p=String(p).toString(),p in u.g&&(V=u.g[p],m=Bs(V,m,E,P),-1<m&&(Zi(V[m]),Array.prototype.splice.call(V,m,1),V.length==0&&(delete u.g[p],u.h--)))):u&&(u=Kr(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Bs(p,m,E,P)),(m=-1<u?p[u]:null)&&Qr(m))}function Qr(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[Ct])Hs(p.i,u);else{var m=u.type,E=u.proxy;p.removeEventListener?p.removeEventListener(m,E,u.capture):p.detachEvent?p.detachEvent(qs(m),E):p.addListener&&p.removeListener&&p.removeListener(E),(m=Kr(p))?(Hs(m,u),m.h==0&&(m.src=null,p[Vs]=null)):Zi(u)}}}function qs(u){return u in ol?ol[u]:ol[u]="on"+u}function Nh(u,p){if(u.da)u=!0;else{p=new Ee(p,this);var m=u.listener,E=u.ha||u.src;u.fa&&Qr(u),u=m.call(E,p)}return u}function Kr(u){return u=u[Vs],u instanceof fi?u:null}var cl="__closure_events_fn_"+(1e9*Math.random()>>>0);function su(u){return typeof u=="function"?u:(u[cl]||(u[cl]=function(p){return u.handleEvent(p)}),u[cl])}function ot(){ne.call(this),this.i=new fi(this),this.M=this,this.F=null}F(ot,ne),ot.prototype[Ct]=!0,ot.prototype.removeEventListener=function(u,p,m,E){ul(this,u,p,m,E)};function He(u,p){var m,E=u.F;if(E)for(m=[];E;E=E.F)m.push(E);if(u=u.M,E=p.type||p,typeof p=="string")p=new $(p,u);else if(p instanceof $)p.target=p.target||u;else{var P=p;p=new $(E,u),x(p,P)}if(P=!0,m)for(var V=m.length-1;0<=V;V--){var ee=p.g=m[V];P=rn(ee,E,!0,p)&&P}if(ee=p.g=u,P=rn(ee,E,!0,p)&&P,P=rn(ee,E,!1,p)&&P,m)for(V=0;V<m.length;V++)ee=p.g=m[V],P=rn(ee,E,!1,p)&&P}ot.prototype.N=function(){if(ot.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var m=u.g[p],E=0;E<m.length;E++)Zi(m[E]);delete u.g[p],u.h--}}this.F=null},ot.prototype.K=function(u,p,m,E){return this.i.add(String(u),p,!1,m,E)},ot.prototype.L=function(u,p,m,E){return this.i.add(String(u),p,!0,m,E)};function rn(u,p,m,E){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var P=!0,V=0;V<p.length;++V){var ee=p[V];if(ee&&!ee.da&&ee.capture==m){var je=ee.listener,st=ee.ha||ee.src;ee.fa&&Hs(u.i,ee),P=je.call(st,E)!==!1&&P}}return P&&!E.defaultPrevented}function Vt(u,p,m){if(typeof u=="function")m&&(u=C(u,m));else if(u&&typeof u.handleEvent=="function")u=C(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:g.setTimeout(u,p||0)}function ru(u){u.g=Vt(()=>{u.g=null,u.i&&(u.i=!1,ru(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class Ih extends ne{constructor(p,m){super(),this.m=p,this.l=m,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:ru(this)}N(){super.N(),this.g&&(g.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gs(u){ne.call(this),this.h=u,this.g={}}F(Gs,ne);var Fs=[];function Ys(u){Le(u.g,function(p,m){this.g.hasOwnProperty(m)&&Qr(p)},u),u.g={}}Gs.prototype.N=function(){Gs.aa.N.call(this),Ys(this)},Gs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Dn=g.JSON.stringify,Wr=g.JSON.parse,Xs=class{stringify(u){return g.JSON.stringify(u,void 0)}parse(u){return g.JSON.parse(u,void 0)}};function hl(){}hl.prototype.h=null;function fl(u){return u.h||(u.h=u.i())}function au(){}var di={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function pi(){$.call(this,"d")}F(pi,$);function dl(){$.call(this,"c")}F(dl,$);var gi={},pl=null;function Qs(){return pl=pl||new ot}gi.La="serverreachability";function Zr(u){$.call(this,gi.La,u)}F(Zr,$);function $i(u){const p=Qs();He(p,new Zr(p))}gi.STAT_EVENT="statevent";function lu(u,p){$.call(this,gi.STAT_EVENT,u),this.stat=p}F(lu,$);function it(u){const p=Qs();He(p,new lu(p,u))}gi.Ma="timingevent";function Et(u,p){$.call(this,gi.Ma,u),this.size=p}F(Et,$);function gt(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return g.setTimeout(function(){u()},p)}function _n(){this.g=!0}_n.prototype.xa=function(){this.g=!1};function gl(u,p,m,E,P,V){u.info(function(){if(u.g)if(V)for(var ee="",je=V.split("&"),st=0;st<je.length;st++){var Ie=je[st].split("=");if(1<Ie.length){var Rt=Ie[0];Ie=Ie[1];var Nt=Rt.split("_");ee=2<=Nt.length&&Nt[1]=="type"?ee+(Rt+"="+Ie+"&"):ee+(Rt+"=redacted&")}}else ee=null;else ee=V;return"XMLHTTP REQ ("+E+") [attempt "+P+"]: "+p+`
`+m+`
`+ee})}function Oh(u,p,m,E,P,V,ee){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+P+"]: "+p+`
`+m+`
`+V+" "+ee})}function Ji(u,p,m,E){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+Ks(u,m)+(E?" "+E:"")})}function ou(u,p){u.info(function(){return"TIMEOUT: "+p})}_n.prototype.info=function(){};function Ks(u,p){if(!u.g)return p;if(!p)return null;try{var m=JSON.parse(p);if(m){for(u=0;u<m.length;u++)if(Array.isArray(m[u])){var E=m[u];if(!(2>E.length)){var P=E[1];if(Array.isArray(P)&&!(1>P.length)){var V=P[0];if(V!="noop"&&V!="stop"&&V!="close")for(var ee=1;ee<P.length;ee++)P[ee]=""}}}}return Dn(m)}catch{return p}}var Ws={NO_ERROR:0,TIMEOUT:8},es={},Yn;function Xn(){}F(Xn,hl),Xn.prototype.g=function(){return new XMLHttpRequest},Xn.prototype.i=function(){return{}},Yn=new Xn;function Ft(u,p,m,E){this.j=u,this.i=p,this.l=m,this.R=E||1,this.U=new Gs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ft}function ft(){this.i=null,this.g="",this.h=!1}var ml={},$r={};function xn(u,p,m){u.L=1,u.v=tr(an(p)),u.m=m,u.P=!0,mi(u,null)}function mi(u,p){u.F=Date.now(),Zs(u),u.A=an(u.v);var m=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),Tl(m.i,"t",E),u.C=0,m=u.j.J,u.h=new ft,u.g=wu(u.j,m?p:null,!u.m),0<u.O&&(u.M=new Ih(C(u.Y,u,u.g),u.O)),p=u.U,m=u.g,E=u.ca;var P="readystatechange";Array.isArray(P)||(P&&(Fs[0]=P.toString()),P=Fs);for(var V=0;V<P.length;V++){var ee=iu(m,P[V],E||p.handleEvent,!1,p.h||p);if(!ee)break;p.g[ee.key]=ee}p=u.H?b(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),$i(),gl(u.i,u.u,u.A,u.l,u.R,u.m)}Ft.prototype.ca=function(u){u=u.target;const p=this.M;p&&En(u)==3?p.j():this.Y(u)},Ft.prototype.Y=function(u){try{if(u==this.g)e:{const Nt=En(this.g);var p=this.g.Ba();const wi=this.g.Z();if(!(3>Nt)&&(Nt!=3||this.g&&(this.h.h||this.g.oa()||mu(this.g)))){this.J||Nt!=4||p==7||(p==8||0>=wi?$i(3):$i(2)),ts(this);var m=this.g.Z();this.X=m;t:if(uu(this)){var E=mu(this.g);u="";var P=E.length,V=En(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ut(this),Qn(this);var ee="";break t}this.h.i=new g.TextDecoder}for(p=0;p<P;p++)this.h.h=!0,u+=this.h.i.decode(E[p],{stream:!(V&&p==P-1)});E.length=0,this.h.g+=u,this.C=0,ee=this.h.g}else ee=this.g.oa();if(this.o=m==200,Oh(this.i,this.u,this.A,this.l,this.R,Nt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var je,st=this.g;if((je=st.g?st.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ue(je)){var Ie=je;break t}}Ie=null}if(m=Ie)Ji(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$s(this,m);else{this.o=!1,this.s=3,it(12),Ut(this),Qn(this);break e}}if(this.P){m=!0;let $t;for(;!this.J&&this.C<ee.length;)if($t=cu(this,ee),$t==$r){Nt==4&&(this.s=4,it(14),m=!1),Ji(this.i,this.l,null,"[Incomplete Response]");break}else if($t==ml){this.s=4,it(15),Ji(this.i,this.l,ee,"[Invalid Chunk]"),m=!1;break}else Ji(this.i,this.l,$t,null),$s(this,$t);if(uu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Nt!=4||ee.length!=0||this.h.h||(this.s=1,it(16),m=!1),this.o=this.o&&m,!m)Ji(this.i,this.l,ee,"[Invalid Chunked Response]"),Ut(this),Qn(this);else if(0<ee.length&&!this.W){this.W=!0;var Rt=this.j;Rt.g==this&&Rt.ba&&!Rt.M&&(Rt.j.info("Great, no buffering proxy detected. Bytes received: "+ee.length),ur(Rt),Rt.M=!0,it(11))}}else Ji(this.i,this.l,ee,null),$s(this,ee);Nt==4&&Ut(this),this.o&&!this.J&&(Nt==4?Eu(this.j,this):(this.o=!1,Zs(this)))}else Lh(this.g),m==400&&0<ee.indexOf("Unknown SID")?(this.s=3,it(12)):(this.s=0,it(13)),Ut(this),Qn(this)}}}catch{}finally{}};function uu(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function cu(u,p){var m=u.C,E=p.indexOf(`
`,m);return E==-1?$r:(m=Number(p.substring(m,E)),isNaN(m)?ml:(E+=1,E+m>p.length?$r:(p=p.slice(E,E+m),u.C=E+m,p)))}Ft.prototype.cancel=function(){this.J=!0,Ut(this)};function Zs(u){u.S=Date.now()+u.I,hu(u,u.I)}function hu(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=gt(C(u.ba,u),p)}function ts(u){u.B&&(g.clearTimeout(u.B),u.B=null)}Ft.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(ou(this.i,this.A),this.L!=2&&($i(),it(17)),Ut(this),this.s=2,Qn(this)):hu(this,this.S-u)};function Qn(u){u.j.G==0||u.J||Eu(u.j,u)}function Ut(u){ts(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,Ys(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function $s(u,p){try{var m=u.j;if(m.G!=0&&(m.g==u||_l(m.h,u))){if(!u.K&&_l(m.h,u)&&m.G==3){try{var E=m.Da.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var P=E;if(P[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<u.F)ca(m),oa(m);else break e;Rl(m),it(18)}}else m.za=P[1],0<m.za-m.T&&37500>P[2]&&m.F&&m.v==0&&!m.C&&(m.C=gt(C(m.Za,m),6e3));if(1>=ea(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else bi(m,11)}else if((u.K||m.g==u)&&ca(m),!ue(p))for(P=m.Da.g.parse(p),p=0;p<P.length;p++){let Ie=P[p];if(m.T=Ie[0],Ie=Ie[1],m.G==2)if(Ie[0]=="c"){m.K=Ie[1],m.ia=Ie[2];const Rt=Ie[3];Rt!=null&&(m.la=Rt,m.j.info("VER="+m.la));const Nt=Ie[4];Nt!=null&&(m.Aa=Nt,m.j.info("SVER="+m.Aa));const wi=Ie[5];wi!=null&&typeof wi=="number"&&0<wi&&(E=1.5*wi,m.L=E,m.j.info("backChannelRequestTimeoutMs_="+E)),E=m;const $t=u.g;if($t){const ei=$t.g?$t.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ei){var V=E.h;V.g||ei.indexOf("spdy")==-1&&ei.indexOf("quic")==-1&&ei.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(ta(V,V.h),V.h=null))}if(E.D){const Ci=$t.g?$t.g.getResponseHeader("X-HTTP-Session-Id"):null;Ci&&(E.ya=Ci,Ge(E.I,E.D,Ci))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-u.F,m.j.info("Handshake RTT: "+m.R+"ms")),E=m;var ee=u;if(E.qa=bu(E,E.J?E.ia:null,E.W),ee.K){Yt(E.h,ee);var je=ee,st=E.L;st&&(je.I=st),je.B&&(ts(je),Zs(je)),E.g=ee}else vu(E);0<m.i.length&&ua(m)}else Ie[0]!="stop"&&Ie[0]!="close"||bi(m,7);else m.G==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?bi(m,7):Cl(m):Ie[0]!="noop"&&m.l&&m.l.ta(Ie),m.v=0)}}$i(4)}catch{}}var fu=class{constructor(u,p){this.g=u,this.map=p}};function _i(u){this.l=u||10,g.PerformanceNavigationTiming?(u=g.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(g.chrome&&g.chrome.loadTimes&&g.chrome.loadTimes()&&g.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Jr(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function ea(u){return u.h?1:u.g?u.g.size:0}function _l(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function ta(u,p){u.g?u.g.add(p):u.h=p}function Yt(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}_i.prototype.cancel=function(){if(this.i=yl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function yl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const m of u.g.values())p=p.concat(m.D);return p}return Z(u.i)}function Dh(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(v(u)){for(var p=[],m=u.length,E=0;E<m;E++)p.push(u[E]);return p}p=[],m=0;for(E in u)p[m++]=u[E];return p}function na(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(v(u)||typeof u=="string"){var p=[];u=u.length;for(var m=0;m<u;m++)p.push(m);return p}p=[],m=0;for(const E in u)p[m++]=E;return p}}}function vl(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(v(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var m=na(u),E=Dh(u),P=E.length,V=0;V<P;V++)p.call(void 0,E[V],m&&m[V],u)}var Js=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xh(u,p){if(u){u=u.split("&");for(var m=0;m<u.length;m++){var E=u[m].indexOf("="),P=null;if(0<=E){var V=u[m].substring(0,E);P=u[m].substring(E+1)}else V=u[m];p(V,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function mt(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof mt){this.h=u.h,er(this,u.j),this.o=u.o,this.g=u.g,ns(this,u.s),this.l=u.l;var p=u.i,m=new vi;m.i=p.i,p.g&&(m.g=new Map(p.g),m.h=p.h),yi(this,m),this.m=u.m}else u&&(p=String(u).match(Js))?(this.h=!1,er(this,p[1]||"",!0),this.o=yn(p[2]||""),this.g=yn(p[3]||"",!0),ns(this,p[4]),this.l=yn(p[5]||"",!0),yi(this,p[6]||"",!0),this.m=yn(p[7]||"")):(this.h=!1,this.i=new vi(null,this.h))}mt.prototype.toString=function(){var u=[],p=this.j;p&&u.push(nr(p,Sl,!0),":");var m=this.g;return(m||p=="file")&&(u.push("//"),(p=this.o)&&u.push(nr(p,Sl,!0),"@"),u.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&u.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&u.push("/"),u.push(nr(m,m.charAt(0)=="/"?Mh:El,!0))),(m=this.i.toString())&&u.push("?",m),(m=this.m)&&u.push("#",nr(m,ia)),u.join("")};function an(u){return new mt(u)}function er(u,p,m){u.j=m?yn(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function ns(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function yi(u,p,m){p instanceof vi?(u.i=p,pu(u.i,u.h)):(m||(p=nr(p,kh)),u.i=new vi(p,u.h))}function Ge(u,p,m){u.i.set(p,m)}function tr(u){return Ge(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function yn(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function nr(u,p,m){return typeof u=="string"?(u=encodeURI(u).replace(p,du),m&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function du(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Sl=/[#\/\?@]/g,El=/[#\?:]/g,Mh=/[#\?]/g,kh=/[#\?@]/g,ia=/#/g;function vi(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function vn(u){u.g||(u.g=new Map,u.h=0,u.i&&xh(u.i,function(p,m){u.add(decodeURIComponent(p.replace(/\+/g," ")),m)}))}s=vi.prototype,s.add=function(u,p){vn(this),this.i=null,u=Kn(this,u);var m=this.g.get(u);return m||this.g.set(u,m=[]),m.push(p),this.h+=1,this};function Si(u,p){vn(u),p=Kn(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function Ei(u,p){return vn(u),p=Kn(u,p),u.g.has(p)}s.forEach=function(u,p){vn(this),this.g.forEach(function(m,E){m.forEach(function(P){u.call(p,P,E,this)},this)},this)},s.na=function(){vn(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),m=[];for(let E=0;E<p.length;E++){const P=u[E];for(let V=0;V<P.length;V++)m.push(p[E])}return m},s.V=function(u){vn(this);let p=[];if(typeof u=="string")Ei(this,u)&&(p=p.concat(this.g.get(Kn(this,u))));else{u=Array.from(this.g.values());for(let m=0;m<u.length;m++)p=p.concat(u[m])}return p},s.set=function(u,p){return vn(this),this.i=null,u=Kn(this,u),Ei(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},s.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function Tl(u,p,m){Si(u,p),0<m.length&&(u.i=null,u.g.set(Kn(u,p),Z(m)),u.h+=m.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var m=0;m<p.length;m++){var E=p[m];const V=encodeURIComponent(String(E)),ee=this.V(E);for(E=0;E<ee.length;E++){var P=V;ee[E]!==""&&(P+="="+encodeURIComponent(String(ee[E]))),u.push(P)}}return this.i=u.join("&")};function Kn(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function pu(u,p){p&&!u.j&&(vn(u),u.i=null,u.g.forEach(function(m,E){var P=E.toLowerCase();E!=P&&(Si(this,E),Tl(this,P,m))},u)),u.j=p}function ir(u,p){const m=new _n;if(g.Image){const E=new Image;E.onload=X(Sn,m,"TestLoadImage: loaded",!0,p,E),E.onerror=X(Sn,m,"TestLoadImage: error",!1,p,E),E.onabort=X(Sn,m,"TestLoadImage: abort",!1,p,E),E.ontimeout=X(Sn,m,"TestLoadImage: timeout",!1,p,E),g.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else p(!1)}function Mn(u,p){const m=new _n,E=new AbortController,P=setTimeout(()=>{E.abort(),Sn(m,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:E.signal}).then(V=>{clearTimeout(P),V.ok?Sn(m,"TestPingServer: ok",!0,p):Sn(m,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(P),Sn(m,"TestPingServer: error",!1,p)})}function Sn(u,p,m,E,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),E(m)}catch{}}function sr(){this.g=new Xs}function Wn(u,p,m){const E=m||"";try{vl(u,function(P,V){let ee=P;y(P)&&(ee=Dn(P)),p.push(E+V+"="+encodeURIComponent(ee))})}catch(P){throw p.push(E+"type="+encodeURIComponent("_badmap")),P}}function is(u){this.l=u.Ub||null,this.j=u.eb||!1}F(is,hl),is.prototype.g=function(){return new Ti(this.l,this.j)},is.prototype.i=(function(u){return function(){return u}})({});function Ti(u,p){ot.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}F(Ti,ot),s=Ti.prototype,s.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,$n(this)},s.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||g).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zn(this)),this.readyState=0},s.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,$n(this)),this.g&&(this.readyState=3,$n(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof g.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;bl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function bl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}s.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?Zn(this):$n(this),this.readyState==3&&bl(this)}},s.Ra=function(u){this.g&&(this.response=this.responseText=u,Zn(this))},s.Qa=function(u){this.g&&(this.response=u,Zn(this))},s.ga=function(){this.g&&Zn(this)};function Zn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,$n(u)}s.setRequestHeader=function(u,p){this.u.append(u,p)},s.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var m=p.next();!m.done;)m=m.value,u.push(m[0]+": "+m[1]),m=p.next();return u.join(`\r
`)};function $n(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Ti.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function wl(u){let p="";return Le(u,function(m,E){p+=E,p+=":",p+=m,p+=`\r
`}),p}function At(u,p,m){e:{for(E in m){var E=!1;break e}E=!0}E||(m=wl(m),typeof u=="string"?m!=null&&encodeURIComponent(String(m)):Ge(u,p,m))}function Be(u){ot.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}F(Be,ot);var sa=/^https?$/i,rr=["POST","PUT"];s=Be.prototype,s.Ha=function(u){this.J=u},s.ea=function(u,p,m,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Yn.g(),this.v=this.o?fl(this.o):fl(Yn),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(V){gu(this,V);return}if(u=m||"",m=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var P in E)m.set(P,E[P]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const V of E.keys())m.set(V,E.get(V));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(m.keys()).find(V=>V.toLowerCase()=="content-type"),P=g.FormData&&u instanceof g.FormData,!(0<=Array.prototype.indexOf.call(rr,p,void 0))||E||P||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,ee]of m)this.g.setRequestHeader(V,ee);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ar(this),this.u=!0,this.g.send(u),this.u=!1}catch(V){gu(this,V)}};function gu(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,ra(u),Jn(u)}function ra(u){u.A||(u.A=!0,He(u,"complete"),He(u,"error"))}s.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,He(this,"complete"),He(this,"abort"),Jn(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Jn(this,!0)),Be.aa.N.call(this)},s.Ea=function(){this.s||(this.B||this.u||this.j?aa(this):this.bb())},s.bb=function(){aa(this)};function aa(u){if(u.h&&typeof d<"u"&&(!u.v[1]||En(u)!=4||u.Z()!=2)){if(u.u&&En(u)==4)Vt(u.Ea,0,u);else if(He(u,"readystatechange"),En(u)==4){u.h=!1;try{const ee=u.Z();e:switch(ee){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var m;if(!(m=p)){var E;if(E=ee===0){var P=String(u.D).match(Js)[1]||null;!P&&g.self&&g.self.location&&(P=g.self.location.protocol.slice(0,-1)),E=!sa.test(P?P.toLowerCase():"")}m=E}if(m)He(u,"complete"),He(u,"success");else{u.m=6;try{var V=2<En(u)?u.g.statusText:""}catch{V=""}u.l=V+" ["+u.Z()+"]",ra(u)}}finally{Jn(u)}}}}function Jn(u,p){if(u.g){ar(u);const m=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||He(u,"ready");try{m.onreadystatechange=E}catch{}}}function ar(u){u.I&&(g.clearTimeout(u.I),u.I=null)}s.isActive=function(){return!!this.g};function En(u){return u.g?u.g.readyState:0}s.Z=function(){try{return 2<En(this)?this.g.status:-1}catch{return-1}},s.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),Wr(p)}};function mu(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Lh(u){const p={};u=(u.g&&2<=En(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(ue(u[E]))continue;var m=k(u[E]);const P=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const V=p[P]||[];p[P]=V,V.push(m)}M(p,function(E){return E.join(", ")})}s.Ba=function(){return this.m},s.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function lr(u,p,m){return m&&m.internalChannelParams&&m.internalChannelParams[u]||p}function la(u){this.Aa=0,this.i=[],this.j=new _n,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=lr("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=lr("baseRetryDelayMs",5e3,u),this.cb=lr("retryDelaySeedMs",1e4,u),this.Wa=lr("forwardChannelMaxRetries",2,u),this.wa=lr("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new _i(u&&u.concurrentRequestLimit),this.Da=new sr,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}s=la.prototype,s.la=8,s.G=1,s.connect=function(u,p,m,E){it(0),this.W=u,this.H=p||{},m&&E!==void 0&&(this.H.OSID=m,this.H.OAID=E),this.F=this.X,this.I=bu(this,null,this.W),ua(this)};function Cl(u){if(_u(u),u.G==3){var p=u.U++,m=an(u.I);if(Ge(m,"SID",u.K),Ge(m,"RID",p),Ge(m,"TYPE","terminate"),or(u,m),p=new Ft(u,u.j,p),p.L=2,p.v=tr(an(m)),m=!1,g.navigator&&g.navigator.sendBeacon)try{m=g.navigator.sendBeacon(p.v.toString(),"")}catch{}!m&&g.Image&&(new Image().src=p.v,m=!0),m||(p.g=wu(p.j,null),p.g.ea(p.v)),p.F=Date.now(),Zs(p)}Tu(u)}function oa(u){u.g&&(ur(u),u.g.cancel(),u.g=null)}function _u(u){oa(u),u.u&&(g.clearTimeout(u.u),u.u=null),ca(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&g.clearTimeout(u.s),u.s=null)}function ua(u){if(!Jr(u.h)&&!u.s){u.s=!0;var p=u.Ga;K||I(),ie||(K(),ie=!0),Ne.add(p,u),u.B=0}}function Uh(u,p){return ea(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=gt(C(u.Ga,u,p),Nl(u,u.B)),u.B++,!0)}s.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const P=new Ft(this,this.j,u);let V=this.o;if(this.S&&(V?(V=b(V),x(V,this.S)):V=this.S),this.m!==null||this.O||(P.H=V,V=null),this.P)e:{for(var p=0,m=0;m<this.i.length;m++){t:{var E=this.i[m];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(p+=E,4096<p){p=m;break e}if(p===4096||m===this.i.length-1){p=m+1;break e}}p=1e3}else p=1e3;p=yu(this,P,p),m=an(this.I),Ge(m,"RID",u),Ge(m,"CVER",22),this.D&&Ge(m,"X-HTTP-Session-Id",this.D),or(this,m),V&&(this.O?p="headers="+encodeURIComponent(String(wl(V)))+"&"+p:this.m&&At(m,this.m,V)),ta(this.h,P),this.Ua&&Ge(m,"TYPE","init"),this.P?(Ge(m,"$req",p),Ge(m,"SID","null"),P.T=!0,xn(P,m,null)):xn(P,m,p),this.G=2}}else this.G==3&&(u?Al(this,u):this.i.length==0||Jr(this.h)||Al(this))};function Al(u,p){var m;p?m=p.l:m=u.U++;const E=an(u.I);Ge(E,"SID",u.K),Ge(E,"RID",m),Ge(E,"AID",u.T),or(u,E),u.m&&u.o&&At(E,u.m,u.o),m=new Ft(u,u.j,m,u.B+1),u.m===null&&(m.H=u.o),p&&(u.i=p.D.concat(u.i)),p=yu(u,m,1e3),m.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),ta(u.h,m),xn(m,E,p)}function or(u,p){u.H&&Le(u.H,function(m,E){Ge(p,E,m)}),u.l&&vl({},function(m,E){Ge(p,E,m)})}function yu(u,p,m){m=Math.min(u.i.length,m);var E=u.l?C(u.l.Na,u.l,u):null;e:{var P=u.i;let V=-1;for(;;){const ee=["count="+m];V==-1?0<m?(V=P[0].g,ee.push("ofs="+V)):V=0:ee.push("ofs="+V);let je=!0;for(let st=0;st<m;st++){let Ie=P[st].g;const Rt=P[st].map;if(Ie-=V,0>Ie)V=Math.max(0,P[st].g-100),je=!1;else try{Wn(Rt,ee,"req"+Ie+"_")}catch{E&&E(Rt)}}if(je){E=ee.join("&");break e}}}return u=u.i.splice(0,m),p.D=u,E}function vu(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;K||I(),ie||(K(),ie=!0),Ne.add(p,u),u.v=0}}function Rl(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=gt(C(u.Fa,u),Nl(u,u.v)),u.v++,!0)}s.Fa=function(){if(this.u=null,Su(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=gt(C(this.ab,this),u)}},s.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,it(10),oa(this),Su(this))};function ur(u){u.A!=null&&(g.clearTimeout(u.A),u.A=null)}function Su(u){u.g=new Ft(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=an(u.qa);Ge(p,"RID","rpc"),Ge(p,"SID",u.K),Ge(p,"AID",u.T),Ge(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&Ge(p,"TO",u.ja),Ge(p,"TYPE","xmlhttp"),or(u,p),u.m&&u.o&&At(p,u.m,u.o),u.L&&(u.g.I=u.L);var m=u.g;u=u.ia,m.L=1,m.v=tr(an(p)),m.m=null,m.P=!0,mi(m,u)}s.Za=function(){this.C!=null&&(this.C=null,oa(this),Rl(this),it(19))};function ca(u){u.C!=null&&(g.clearTimeout(u.C),u.C=null)}function Eu(u,p){var m=null;if(u.g==p){ca(u),ur(u),u.g=null;var E=2}else if(_l(u.h,p))m=p.D,Yt(u.h,p),E=1;else return;if(u.G!=0){if(p.o)if(E==1){m=p.m?p.m.length:0,p=Date.now()-p.F;var P=u.B;E=Qs(),He(E,new Et(E,m)),ua(u)}else vu(u);else if(P=p.s,P==3||P==0&&0<p.X||!(E==1&&Uh(u,p)||E==2&&Rl(u)))switch(m&&0<m.length&&(p=u.h,p.i=p.i.concat(m)),P){case 1:bi(u,5);break;case 4:bi(u,10);break;case 3:bi(u,6);break;default:bi(u,2)}}}function Nl(u,p){let m=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(m*=2),m*p}function bi(u,p){if(u.j.info("Error code "+p),p==2){var m=C(u.fb,u),E=u.Xa;const P=!E;E=new mt(E||"//www.google.com/images/cleardot.gif"),g.location&&g.location.protocol=="http"||er(E,"https"),tr(E),P?ir(E.toString(),m):Mn(E.toString(),m)}else it(2);u.G=0,u.l&&u.l.sa(p),Tu(u),_u(u)}s.fb=function(u){u?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function Tu(u){if(u.G=0,u.ka=[],u.l){const p=yl(u.h);(p.length!=0||u.i.length!=0)&&(te(u.ka,p),te(u.ka,u.i),u.h.i.length=0,Z(u.i),u.i.length=0),u.l.ra()}}function bu(u,p,m){var E=m instanceof mt?an(m):new mt(m);if(E.g!="")p&&(E.g=p+"."+E.g),ns(E,E.s);else{var P=g.location;E=P.protocol,p=p?p+"."+P.hostname:P.hostname,P=+P.port;var V=new mt(null);E&&er(V,E),p&&(V.g=p),P&&ns(V,P),m&&(V.l=m),E=V}return m=u.D,p=u.ya,m&&p&&Ge(E,m,p),Ge(E,"VER",u.la),or(u,E),E}function wu(u,p,m){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Be(new is({eb:m})):new Be(u.pa),p.Ha(u.J),p}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function Cu(){}s=Cu.prototype,s.ua=function(){},s.ta=function(){},s.sa=function(){},s.ra=function(){},s.isActive=function(){return!0},s.Na=function(){};function Zt(u,p){ot.call(this),this.g=new la(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!ue(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!ue(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new ss(this)}F(Zt,ot),Zt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Zt.prototype.close=function(){Cl(this.g)},Zt.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var m={};m.__data__=u,u=m}else this.u&&(m={},m.__data__=Dn(u),u=m);p.i.push(new fu(p.Ya++,u)),p.G==3&&ua(p)},Zt.prototype.N=function(){this.g.l=null,delete this.j,Cl(this.g),delete this.g,Zt.aa.N.call(this)};function Au(u){pi.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const m in p){u=m;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}F(Au,pi);function Ru(){dl.call(this),this.status=1}F(Ru,dl);function ss(u){this.g=u}F(ss,Cu),ss.prototype.ua=function(){He(this.g,"a")},ss.prototype.ta=function(u){He(this.g,new Au(u))},ss.prototype.sa=function(u){He(this.g,new Ru)},ss.prototype.ra=function(){He(this.g,"b")},Zt.prototype.send=Zt.prototype.o,Zt.prototype.open=Zt.prototype.m,Zt.prototype.close=Zt.prototype.close,Ws.NO_ERROR=0,Ws.TIMEOUT=8,Ws.HTTP_ERROR=6,es.COMPLETE="complete",au.EventType=di,di.OPEN="a",di.CLOSE="b",di.ERROR="c",di.MESSAGE="d",ot.prototype.listen=ot.prototype.K,Be.prototype.listenOnce=Be.prototype.L,Be.prototype.getLastError=Be.prototype.Ka,Be.prototype.getLastErrorCode=Be.prototype.Ba,Be.prototype.getStatus=Be.prototype.Z,Be.prototype.getResponseJson=Be.prototype.Oa,Be.prototype.getResponseText=Be.prototype.oa,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Ha}).apply(typeof Dc<"u"?Dc:typeof self<"u"?self:typeof window<"u"?window:{});const s0="@firebase/firestore",r0="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Qt.UNAUTHENTICATED=new Qt(null),Qt.GOOGLE_CREDENTIALS=new Qt("google-credentials-uid"),Qt.FIRST_PARTY=new Qt("first-party-uid"),Qt.MOCK_USER=new Qt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tu="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl=new hh("@firebase/firestore");function Vn(s,...e){if(tl.logLevel<=Pe.DEBUG){const i=e.map(bg);tl.debug(`Firestore (${tu}): ${s}`,...i)}}function wS(s,...e){if(tl.logLevel<=Pe.ERROR){const i=e.map(bg);tl.error(`Firestore (${tu}): ${s}`,...i)}}function _N(s,...e){if(tl.logLevel<=Pe.WARN){const i=e.map(bg);tl.warn(`Firestore (${tu}): ${s}`,...i)}}function bg(s){if(typeof s=="string")return s;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(i){return JSON.stringify(i)})(s)}catch{return s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(s,e,i){let a="Unexpected state";typeof e=="string"?a=e:i=e,CS(s,a,i)}function CS(s,e,i){let a=`FIRESTORE (${tu}) INTERNAL ASSERTION FAILED: ${e} (ID: ${s.toString(16)})`;if(i!==void 0)try{a+=" CONTEXT: "+JSON.stringify(i)}catch{a+=" CONTEXT: "+i}throw wS(a),new Error(a)}function No(s,e,i,a){let o="Unexpected state";typeof i=="string"?o=i:a=i,s||CS(e,o,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class Me extends Ki{constructor(e,i){super(e,i),this.code=e,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(){this.promise=new Promise(((e,i)=>{this.resolve=e,this.reject=i}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,i){e.enqueueRetryable((()=>i(Qt.UNAUTHENTICATED)))}shutdown(){}}class vN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,i){this.changeListener=i,e.enqueueRetryable((()=>i(this.token.user)))}shutdown(){this.changeListener=null}}class SN{constructor(e){this.t=e,this.currentUser=Qt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,i){No(this.o===void 0,42304);let a=this.i;const o=v=>this.i!==a?(a=this.i,i(v)):Promise.resolve();let h=new Io;this.o=()=>{this.i++,this.currentUser=this.u(),h.resolve(),h=new Io,e.enqueueRetryable((()=>o(this.currentUser)))};const d=()=>{const v=h;e.enqueueRetryable((async()=>{await v.promise,await o(this.currentUser)}))},g=v=>{Vn("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=v,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit((v=>g(v))),setTimeout((()=>{if(!this.auth){const v=this.t.getImmediate({optional:!0});v?g(v):(Vn("FirebaseAuthCredentialsProvider","Auth not yet detected"),h.resolve(),h=new Io)}}),0),d()}getToken(){const e=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then((a=>this.i!==e?(Vn("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(No(typeof a.accessToken=="string",31837,{l:a}),new AS(a.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return No(e===null||typeof e=="string",2055,{h:e}),new Qt(e)}}class EN{constructor(e,i,a){this.P=e,this.T=i,this.I=a,this.type="FirstParty",this.user=Qt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class TN{constructor(e,i,a){this.P=e,this.T=i,this.I=a}getToken(){return Promise.resolve(new EN(this.P,this.T,this.I))}start(e,i){e.enqueueRetryable((()=>i(Qt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class a0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bN{constructor(e,i){this.V=i,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,zn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,i){No(this.o===void 0,3512);const a=h=>{h.error!=null&&Vn("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${h.error.message}`);const d=h.token!==this.m;return this.m=h.token,Vn("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?i(h.token):Promise.resolve()};this.o=h=>{e.enqueueRetryable((()=>a(h)))};const o=h=>{Vn("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=h,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((h=>o(h))),setTimeout((()=>{if(!this.appCheck){const h=this.V.getImmediate({optional:!0});h?o(h):Vn("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new a0(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((i=>i?(No(typeof i.token=="string",44558,{tokenResult:i}),this.m=i.token,new a0(i.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wN(s){const e=typeof self<"u"&&(self.crypto||self.msCrypto),i=new Uint8Array(s);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(i);else for(let a=0;a<s;a++)i[a]=Math.floor(256*Math.random());return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=62*Math.floor(4.129032258064516);let a="";for(;a.length<20;){const o=wN(40);for(let h=0;h<o.length;++h)a.length<20&&o[h]<i&&(a+=e.charAt(o[h]%62))}return a}}function js(s,e){return s<e?-1:s>e?1:0}function AN(s,e){const i=Math.min(s.length,e.length);for(let a=0;a<i;a++){const o=s.charAt(a),h=e.charAt(a);if(o!==h)return Qd(o)===Qd(h)?js(o,h):Qd(o)?1:-1}return js(s.length,e.length)}const RN=55296,NN=57343;function Qd(s){const e=s.charCodeAt(0);return e>=RN&&e<=NN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0="__name__";class ai{constructor(e,i,a){i===void 0?i=0:i>e.length&&qo(637,{offset:i,range:e.length}),a===void 0?a=e.length-i:a>e.length-i&&qo(1746,{length:a,range:e.length-i}),this.segments=e,this.offset=i,this.len=a}get length(){return this.len}isEqual(e){return ai.comparator(this,e)===0}child(e){const i=this.segments.slice(this.offset,this.limit());return e instanceof ai?e.forEach((a=>{i.push(a)})):i.push(e),this.construct(i)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==e.get(i))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==e.get(i))return!1;return!0}forEach(e){for(let i=this.offset,a=this.limit();i<a;i++)e(this.segments[i])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,i){const a=Math.min(e.length,i.length);for(let o=0;o<a;o++){const h=ai.compareSegments(e.get(o),i.get(o));if(h!==0)return h}return js(e.length,i.length)}static compareSegments(e,i){const a=ai.isNumericId(e),o=ai.isNumericId(i);return a&&!o?-1:!a&&o?1:a&&o?ai.extractNumericId(e).compare(ai.extractNumericId(i)):AN(e,i)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Tg.fromString(e.substring(4,e.length-2))}}class Pn extends ai{construct(e,i,a){return new Pn(e,i,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const i=[];for(const a of e){if(a.indexOf("//")>=0)throw new Me(xe.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);i.push(...a.split("/").filter((o=>o.length>0)))}return new Pn(i)}static emptyPath(){return new Pn([])}}const IN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Nr extends ai{construct(e,i,a){return new Nr(e,i,a)}static isValidIdentifier(e){return IN.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Nr.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===l0}static keyField(){return new Nr([l0])}static fromServerFormat(e){const i=[];let a="",o=0;const h=()=>{if(a.length===0)throw new Me(xe.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);i.push(a),a=""};let d=!1;for(;o<e.length;){const g=e[o];if(g==="\\"){if(o+1===e.length)throw new Me(xe.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const v=e[o+1];if(v!=="\\"&&v!=="."&&v!=="`")throw new Me(xe.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);a+=v,o+=2}else g==="`"?(d=!d,o++):g!=="."||d?(a+=g,o++):(h(),o++)}if(h(),d)throw new Me(xe.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Nr(i)}static emptyPath(){return new Nr([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e){this.path=e}static fromPath(e){return new Or(Pn.fromString(e))}static fromName(e){return new Or(Pn.fromString(e).popFirst(5))}static empty(){return new Or(Pn.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pn.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,i){return Pn.comparator(e.path,i.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Or(new Pn(e.slice()))}}function ON(s,e,i,a){if(e===!0&&a===!0)throw new Me(xe.INVALID_ARGUMENT,`${s} and ${i} cannot be used together.`)}function DN(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}function xN(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const e=(function(a){return a.constructor?a.constructor.name:null})(s);return e?`a custom ${e} object`:"an object"}}return typeof s=="function"?"a function":qo(12329,{type:typeof s})}function MN(s,e){if("_delegate"in s&&(s=s._delegate),!(s instanceof e)){if(e.name===s.constructor.name)throw new Me(xe.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=xN(s);throw new Me(xe.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${i}`)}}return s}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(s,e){const i={typeString:s};return e&&(i.value=e),i}function nu(s,e){if(!DN(s))throw new Me(xe.INVALID_ARGUMENT,"JSON must be an object");let i;for(const a in e)if(e[a]){const o=e[a].typeString,h="value"in e[a]?{value:e[a].value}:void 0;if(!(a in s)){i=`JSON missing required field: '${a}'`;break}const d=s[a];if(o&&typeof d!==o){i=`JSON field '${a}' must be a ${o}.`;break}if(h!==void 0&&d!==h.value){i=`Expected '${a}' field to equal '${h.value}'`;break}}if(i)throw new Me(xe.INVALID_ARGUMENT,i);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0=-62135596800,u0=1e6;class li{static now(){return li.fromMillis(Date.now())}static fromDate(e){return li.fromMillis(e.getTime())}static fromMillis(e){const i=Math.floor(e/1e3),a=Math.floor((e-1e3*i)*u0);return new li(i,a)}constructor(e,i){if(this.seconds=e,this.nanoseconds=i,i<0)throw new Me(xe.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(i>=1e9)throw new Me(xe.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(e<o0)throw new Me(xe.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Me(xe.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/u0}_compareTo(e){return this.seconds===e.seconds?js(this.nanoseconds,e.nanoseconds):js(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:li._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(nu(e,li._jsonSchema))return new li(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-o0;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}li._jsonSchemaVersion="firestore/timestamp/1.0",li._jsonSchema={type:vt("string",li._jsonSchemaVersion),seconds:vt("number"),nanoseconds:vt("number")};function kN(s){return s.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e){this.binaryString=e}static fromBase64String(e){const i=(function(o){try{return atob(o)}catch(h){throw typeof DOMException<"u"&&h instanceof DOMException?new LN("Invalid base64 string: "+h):h}})(e);return new Vr(i)}static fromUint8Array(e){const i=(function(o){let h="";for(let d=0;d<o.length;++d)h+=String.fromCharCode(o[d]);return h})(e);return new Vr(i)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(i){return btoa(i)})(this.binaryString)}toUint8Array(){return(function(i){const a=new Uint8Array(i.length);for(let o=0;o<i.length;o++)a[o]=i.charCodeAt(o);return a})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return js(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Vr.EMPTY_BYTE_STRING=new Vr("");const Sp="(default)";class oh{constructor(e,i){this.projectId=e,this.database=i||Sp}static empty(){return new oh("","")}get isDefaultDatabase(){return this.database===Sp}isEqual(e){return e instanceof oh&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(e,i=null,a=[],o=[],h=null,d="F",g=null,v=null){this.path=e,this.collectionGroup=i,this.explicitOrderBy=a,this.filters=o,this.limit=h,this.limitType=d,this.startAt=g,this.endAt=v,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function PN(s){return new UN(s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var c0,De;(De=c0||(c0={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Tg([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zN=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jN=1048576;function Kd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(e,i,a=1e3,o=1.5,h=6e4){this.Mi=e,this.timerId=i,this.d_=a,this.A_=o,this.R_=h,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const i=Math.floor(this.V_+this.y_()),a=Math.max(0,Date.now()-this.f_),o=Math.max(0,i-a);o>0&&Vn("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${i} ms, last attempt: ${a} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e,i,a,o,h){this.asyncQueue=e,this.timerId=i,this.targetTimeMs=a,this.op=o,this.removalCallback=h,this.deferred=new Io,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((d=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,i,a,o,h){const d=Date.now()+a,g=new wg(e,i,d,o,h);return g.start(a),g}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Me(xe.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var h0,f0;(f0=h0||(h0={})).Ma="default",f0.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BN(s){const e={};return s.timeoutSeconds!==void 0&&(e.timeoutSeconds=s.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS="firestore.googleapis.com",p0=!0;class g0{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Me(xe.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=RS,this.ssl=p0}else this.host=e.host,this.ssl=e.ssl??p0;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=zN;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<jN)throw new Me(xe.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ON("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=BN(e.experimentalLongPollingOptions??{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new Me(xe.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new Me(xe.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new Me(xe.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(a,o){return a.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class NS{constructor(e,i,a,o){this._authCredentials=e,this._appCheckCredentials=i,this._databaseId=a,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new g0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Me(xe.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Me(xe.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new g0(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(a){if(!a)return new yN;switch(a.type){case"firstParty":return new TN(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new Me(xe.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(i){const a=d0.get(i);a&&(Vn("ComponentProvider","Removing Datastore"),d0.delete(i),a.terminate())})(this),Promise.resolve()}}function VN(s,e,i,a={}){s=MN(s,NS);const o=qr(e),h=s._getSettings(),d={...h,emulatorOptions:s._getEmulatorOptions()},g=`${e}:${i}`;o&&(Cp(`https://${g}`),Ap("Firestore",!0)),h.host!==RS&&h.host!==g&&_N("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const v={...h,host:g,ssl:o,emulatorOptions:a};if(!Ls(v,d)&&(s._setSettings(v),a.mockUserToken)){let y,T;if(typeof a.mockUserToken=="string")y=a.mockUserToken,T=Qt.MOCK_USER;else{y=x0(a.mockUserToken,s._app?.options.projectId);const A=a.mockUserToken.sub||a.mockUserToken.user_id;if(!A)throw new Me(xe.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new Qt(A)}s._authCredentials=new vN(new AS(y,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e,i,a){this.converter=i,this._query=a,this.type="query",this.firestore=e}withConverter(e){return new Cg(this.firestore,e,this._query)}}class oi{constructor(e,i,a){this.converter=i,this._key=a,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ag(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new oi(this.firestore,e,this._key)}toJSON(){return{type:oi._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,i,a){if(nu(i,oi._jsonSchema))return new oi(e,a||null,new Or(Pn.fromString(i.referencePath)))}}oi._jsonSchemaVersion="firestore/documentReference/1.0",oi._jsonSchema={type:vt("string",oi._jsonSchemaVersion),referencePath:vt("string")};class Ag extends Cg{constructor(e,i,a){super(e,i,PN(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new oi(this.firestore,null,new Or(e))}withConverter(e){return new Ag(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0="AsyncQueue";class _0{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new HN(this,"async_queue_retry"),this._c=()=>{const a=Kd();a&&Vn(m0,"Visibility state changed to "+a.visibilityState),this.M_.w_()},this.ac=e;const i=Kd();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const i=Kd();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const i=new Io;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(i.resolve,i.reject),i.promise))).then((()=>i.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!kN(e))throw e;Vn(m0,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const i=this.ac.then((()=>(this.rc=!0,e().catch((a=>{throw this.nc=a,this.rc=!1,wS("INTERNAL UNHANDLED ERROR: ",y0(a)),a})).then((a=>(this.rc=!1,a))))));return this.ac=i,i}enqueueAfterDelay(e,i,a){this.uc(),this.oc.indexOf(e)>-1&&(i=0);const o=wg.createAndSchedule(this,e,i,a,(h=>this.hc(h)));return this.tc.push(o),o}uc(){this.nc&&qo(47125,{Pc:y0(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const i of this.tc)if(i.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((i,a)=>i.targetTimeMs-a.targetTimeMs));for(const i of this.tc)if(i.skipDelay(),e!=="all"&&i.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const i=this.tc.indexOf(e);this.tc.splice(i,1)}}function y0(s){let e=s.message||"";return s.stack&&(e=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),e}class qN extends NS{constructor(e,i,a,o){super(e,i,a,o),this.type="firestore",this._queue=new _0,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new _0(e),this._firestoreClient=void 0,await e}}}function GN(s,e){const i=typeof s=="object"?s:Ip(),a=typeof s=="string"?s:Sp,o=fh(i,"firestore").getImmediate({identifier:a});if(!o._initialized){const h=I0("firestore");h&&VN(o,...h)}return o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ji(Vr.fromBase64String(e))}catch(i){throw new Me(xe.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(e){return new ji(Vr.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ji._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(nu(e,ji._jsonSchema))return ji.fromBase64String(e.bytes)}}ji._jsonSchemaVersion="firestore/bytes/1.0",ji._jsonSchema={type:vt("string",ji._jsonSchemaVersion),bytes:vt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(...e){for(let i=0;i<e.length;++i)if(e[i].length===0)throw new Me(xe.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Nr(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,i){if(!isFinite(e)||e<-90||e>90)throw new Me(xe.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(i)||i<-180||i>180)throw new Me(xe.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+i);this._lat=e,this._long=i}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return js(this._lat,e._lat)||js(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Mr._jsonSchemaVersion}}static fromJSON(e){if(nu(e,Mr._jsonSchema))return new Mr(e.latitude,e.longitude)}}Mr._jsonSchemaVersion="firestore/geoPoint/1.0",Mr._jsonSchema={type:vt("string",Mr._jsonSchemaVersion),latitude:vt("number"),longitude:vt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e){this._values=(e||[]).map((i=>i))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(a,o){if(a.length!==o.length)return!1;for(let h=0;h<a.length;++h)if(a[h]!==o[h])return!1;return!0})(this._values,e._values)}toJSON(){return{type:kr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(nu(e,kr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((i=>typeof i=="number")))return new kr(e.vectorValues);throw new Me(xe.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}kr._jsonSchemaVersion="firestore/vectorValue/1.0",kr._jsonSchema={type:vt("string",kr._jsonSchemaVersion),vectorValues:vt("object")};const FN=new RegExp("[~\\*/\\[\\]]");function YN(s,e,i){if(e.search(FN)>=0)throw v0(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,s);try{return new IS(...e.split("."))._internalPath}catch{throw v0(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s)}}function v0(s,e,i,a,o){let h=`Function ${e}() called with invalid data`;h+=". ";let d="";return new Me(xe.INVALID_ARGUMENT,h+s+d)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(e,i,a,o,h){this._firestore=e,this._userDataWriter=i,this._key=a,this._document=o,this._converter=h}get id(){return this._key.path.lastSegment()}get ref(){return new oi(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new XN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const i=this._document.data.field(DS("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i)}}}class XN extends OS{data(){return super.data()}}function DS(s,e){return typeof e=="string"?YN(s,e):e instanceof IS?e._internalPath:e._delegate._internalPath}class xc{constructor(e,i){this.hasPendingWrites=e,this.fromCache=i}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Qa extends OS{constructor(e,i,a,o,h,d){super(e,i,a,o,d),this._firestore=e,this._firestoreImpl=e,this.metadata=h}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const i=new zc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(i,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,i={}){if(this._document){const a=this._document.data.field(DS("DocumentSnapshot.get",e));if(a!==null)return this._userDataWriter.convertValue(a,i.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Me(xe.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,i={};return i.type=Qa._jsonSchemaVersion,i.bundle="",i.bundleSource="DocumentSnapshot",i.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?i:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),i.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),i)}}Qa._jsonSchemaVersion="firestore/documentSnapshot/1.0",Qa._jsonSchema={type:vt("string",Qa._jsonSchemaVersion),bundleSource:vt("string","DocumentSnapshot"),bundleName:vt("string"),bundle:vt("string")};class zc extends Qa{data(e={}){return super.data(e)}}class Oo{constructor(e,i,a,o){this._firestore=e,this._userDataWriter=i,this._snapshot=o,this.metadata=new xc(o.hasPendingWrites,o.fromCache),this.query=a}get docs(){const e=[];return this.forEach((i=>e.push(i))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,i){this._snapshot.docs.forEach((a=>{e.call(i,new zc(this._firestore,this._userDataWriter,a.key,a,new xc(this._snapshot.mutatedKeys.has(a.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const i=!!e.includeMetadataChanges;if(i&&this._snapshot.excludesMetadataChanges)throw new Me(xe.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===i||(this._cachedChanges=(function(o,h){if(o._snapshot.oldDocs.isEmpty()){let d=0;return o._snapshot.docChanges.map((g=>{const v=new zc(o._firestore,o._userDataWriter,g.doc.key,g.doc,new xc(o._snapshot.mutatedKeys.has(g.doc.key),o._snapshot.fromCache),o.query.converter);return g.doc,{type:"added",doc:v,oldIndex:-1,newIndex:d++}}))}{let d=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((g=>h||g.type!==3)).map((g=>{const v=new zc(o._firestore,o._userDataWriter,g.doc.key,g.doc,new xc(o._snapshot.mutatedKeys.has(g.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,T=-1;return g.type!==0&&(y=d.indexOf(g.doc.key),d=d.delete(g.doc.key)),g.type!==1&&(d=d.add(g.doc),T=d.indexOf(g.doc.key)),{type:QN(g.type),doc:v,oldIndex:y,newIndex:T}}))}})(this,i),this._cachedChangesIncludeMetadataChanges=i),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Me(xe.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Oo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=CN.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const i=[],a=[],o=[];return this.docs.forEach((h=>{h._document!==null&&(i.push(h._document),a.push(this._userDataWriter.convertObjectMap(h._document.data.value.mapValue.fields,"previous")),o.push(h.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function QN(s){switch(s){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return qo(61501,{type:s})}}Oo._jsonSchemaVersion="firestore/querySnapshot/1.0",Oo._jsonSchema={type:vt("string",Oo._jsonSchemaVersion),bundleSource:vt("string","QuerySnapshot"),bundleName:vt("string"),bundle:vt("string")};(function(e,i=!0){(function(o){tu=o})(Gr),Ur(new Us("firestore",((a,{instanceIdentifier:o,options:h})=>{const d=a.getProvider("app").getImmediate(),g=new qN(new SN(a.getProvider("auth-internal")),new bN(d,a.getProvider("app-check-internal")),(function(y,T){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new Me(xe.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new oh(y.options.projectId,T)})(d,o),d);return h={useFetchStreams:i,...h},g._setSettings(h),g}),"PUBLIC").setMultipleInstances(!0)),ui(s0,r0,e),ui(s0,r0,"esm2020")})();const KN={apiKey:"AIzaSyB87mpvHRLT1bjn8Tcqor7qzulV-T68vE0",authDomain:"chat-40d42.firebaseapp.com",databaseURL:"https://chat-40d42-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"chat-40d42",storageBucket:"chat-40d42.appspot.com",messagingSenderId:"1080730028272",appId:"1:1080730028272:web:18a313652e0ee721035a35",measurementId:"G-HG8E0J3W2W"},Rg=P0(KN);gN(Rg);GN(Rg);const Ze=h2(Rg);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WN=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ZN=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,a)=>a?a.toUpperCase():i.toLowerCase()),S0=s=>{const e=ZN(s);return e.charAt(0).toUpperCase()+e.slice(1)},xS=(...s)=>s.filter((e,i,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===i).join(" ").trim(),$N=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var JN={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eI=me.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:o="",children:h,iconNode:d,...g},v)=>me.createElement("svg",{ref:v,...JN,width:e,height:e,stroke:s,strokeWidth:a?Number(i)*24/Number(e):i,className:xS("lucide",o),...!h&&!$N(g)&&{"aria-hidden":"true"},...g},[...d.map(([y,T])=>me.createElement(y,T)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=(s,e)=>{const i=me.forwardRef(({className:a,...o},h)=>me.createElement(eI,{ref:h,iconNode:e,className:xS(`lucide-${WN(S0(s))}`,`lucide-${s}`,a),...o}));return i.displayName=S0(s),i};/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tI=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]],E0=gn("check-check",tI);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nI=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],iI=gn("check",nI);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sI=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],rI=gn("gamepad-2",sI);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aI=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],lI=gn("lock",aI);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oI=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],Ep=gn("log-out",oI);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uI=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],cI=gn("menu",uI);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hI=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],MS=gn("message-circle",hI);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fI=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],kS=gn("palette",fI);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dI=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],pI=gn("send",dI);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gI=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],mI=gn("smile",gI);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _I=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],LS=gn("wifi-off",_I);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yI=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],US=gn("wifi",yI);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vI=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],SI=gn("x",vI),EI=({setCurrentUser:s,isOnline:e})=>{const[i,a]=me.useState(""),[o,h]=me.useState(""),[d,g]=me.useState(""),v=()=>{if({boy:"1234",Saman:"hello"}[i]===o){const T={name:i,id:i};s(T),localStorage.setItem("chatUser",JSON.stringify(T)),g("");const A=We(Ze,`users/${i}`);kt(A,{name:i,lastSeen:Date.now(),isOnline:!0})}else g("Invalid credentials.")};return q.jsx("div",{className:"min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center p-4",children:q.jsxs("div",{className:"bg-white rounded-3xl shadow-xl p-6 sm:p-8 w-full max-w-sm sm:max-w-md",children:[q.jsxs("div",{className:"text-center mb-6",children:[q.jsx("div",{className:"bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3",children:q.jsx(lI,{className:"text-purple-600",size:20})}),q.jsx("h1",{className:"text-xl font-bold text-gray-800 mb-2",children:"CHAT APP"}),q.jsx("p",{className:"text-sm text-gray-600",children:"Enter your credentials to access"}),q.jsxs("div",{className:`flex items-center justify-center mt-2 text-xs ${e?"text-green-600":"text-red-600"}`,children:[e?q.jsx(US,{size:14}):q.jsx(LS,{size:14}),q.jsx("span",{className:"ml-1",children:e?"Online":"Offline"})]})]}),q.jsxs("div",{className:"space-y-3",children:[q.jsx("input",{type:"text",value:i,onChange:y=>a(y.target.value),placeholder:"Username",className:"w-full px-4 py-2 rounded-xl border"}),q.jsx("input",{type:"password",value:o,onChange:y=>h(y.target.value),placeholder:"Passcode",onKeyPress:y=>y.key==="Enter"&&v(),className:"w-full px-4 py-2 rounded-xl border"}),d&&q.jsx("p",{className:"text-red-500 text-sm",children:d}),q.jsx("button",{onClick:v,disabled:!e,className:"w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-xl",children:e?"Login":"No Internet"})]})]})})},TI=({currentUser:s,setCurrentUser:e,setActiveSection:i,activeSection:a,userPresence:o,usersMap:h={}})=>{const[d,g]=me.useState(!1),[v,y]=me.useState({}),T=dT.useMemo(()=>{if(!s)return null;const te=Object.keys(h||{}).filter(re=>re!==s.name);return te.length>0?h[te[0]]:null},[h,s]);me.useEffect(()=>{if(!s)return;const Z=We(Ze,"typing"),te=Dr(Z,re=>{const ue=re.val()||{};y(ue)});return()=>te()},[s]);const A=()=>{if(s?.name){const Z=We(Ze,`users/${s.name}`);kt(Z,{name:s.name,isOnline:!1,lastSeen:Date.now()});const te=We(Ze,`typing/${s.name}`);kt(te,{isTyping:!1,timestamp:Date.now()}).catch(re=>console.error("Error clearing typing on logout:",re))}localStorage.removeItem("chatUser"),e(null),i("chat"),g(!1)},C=[{key:"chat",label:"Chat",icon:q.jsx(MS,{size:18})},{key:"games",label:"Games",icon:q.jsx(rI,{size:18})},{key:"creative",label:"Creative",icon:q.jsx(kS,{size:18})}],X=({item:Z,isMobile:te=!1})=>q.jsxs("button",{onClick:()=>{i(Z.key),te&&g(!1)},className:`flex items-center gap-2 text-sm font-medium transition-all duration-200
        ${a===Z.key?"text-purple-400 md:border-b-2 md:border-purple-400 md:pb-1":"text-gray-300 hover:text-purple-300"}`,children:[Z.icon,q.jsx("span",{children:Z.label})]}),F=Z=>{if(!Z)return null;const te=v[Z.name]?.isTyping,re=v[Z.name]?.timestamp||0,ue=Date.now();return te&&ue-re<=5e3?q.jsxs("span",{className:"flex items-center gap-1 text-amber-400 animate-pulse",children:[q.jsx("span",{className:"inline-block w-1 h-1 bg-amber-400 rounded-full animate-bounce"}),q.jsx("span",{className:"inline-block w-1 h-1 bg-amber-400 rounded-full animate-bounce",style:{animationDelay:"0.2s"}}),q.jsx("span",{className:"inline-block w-1 h-1 bg-amber-400 rounded-full animate-bounce",style:{animationDelay:"0.4s"}}),q.jsx("span",{className:"ml-1",children:"typing..."})]}):Z.isOnline?q.jsx("span",{className:"text-emerald-400",children:"Online"}):Z.lastSeen?`Last seen ${new Date(Z.lastSeen).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}`:q.jsx("span",{className:"text-gray-500",children:"Offline"})};return q.jsx("header",{className:"sticky top-0 z-50",children:q.jsxs("nav",{className:"backdrop-blur-md bg-gray-900/95 border-b border-gray-800 text-white px-4 md:px-8 py-3 shadow-lg",children:[q.jsxs("div",{className:"mx-auto max-w-6xl flex items-center justify-between",children:[q.jsxs("div",{className:"flex items-center gap-3",children:[q.jsxs("div",{className:"flex items-center gap-2",children:[q.jsx("div",{className:"text-lg font-semibold tracking-wide",children:"Penguin"}),T&&q.jsx("div",{className:"text-xs",children:F(T)})]}),q.jsx("div",{className:"hidden md:flex items-center gap-8 ml-6",children:C.map(Z=>q.jsx(X,{item:Z},Z.key))})]}),q.jsxs("div",{className:"hidden md:flex items-center gap-5",children:[q.jsxs("div",{className:"flex items-center gap-3 bg-gray-800 px-4 py-1.5 rounded-full shadow",children:[q.jsx("span",{className:"text-sm font-medium text-gray-200",children:T?.name}),T&&q.jsx("span",{className:"text-xs",children:F(T)})]}),q.jsxs("button",{onClick:A,className:"flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-5 py-2 rounded-full text-sm font-medium shadow-md transition-all",children:[q.jsx(Ep,{size:18})," Logout"]})]}),q.jsx("button",{"aria-label":"Toggle menu","aria-expanded":d,onClick:()=>g(Z=>!Z),className:"md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-gray-800/60 transition",children:d?q.jsx(SI,{size:22}):q.jsx(cI,{size:22})})]}),q.jsx("div",{className:`md:hidden overflow-hidden transition-[max-height] duration-300 ${d?"max-h-80":"max-h-0"}`,children:q.jsxs("div",{className:"pt-3 pb-4 border-t border-gray-800",children:[q.jsx("div",{className:"flex flex-col gap-3",children:C.map(Z=>q.jsx(X,{item:Z,isMobile:!0},Z.key))}),q.jsx("div",{className:"mt-4 h-px bg-gray-800"}),q.jsxs("div",{className:"mt-4 flex items-center justify-between",children:[q.jsxs("div",{className:"flex items-center gap-2 bg-gray-800 px-3 py-1.5 rounded-full",children:[q.jsx("span",{className:"text-sm font-medium text-gray-200",children:T?.name}),T&&q.jsx("span",{className:"text-xs",children:F(T)})]}),q.jsxs("button",{onClick:A,className:"flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl text-sm font-medium shadow-md transition-all",children:[q.jsx(Ep,{size:16})," Logout"]})]})]})})]})})},bI=()=>{try{const s=window.navigator||{},e=window.screen||{},i=s.connection||s.mozConnection||s.webkitConnection||{},a=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;return{userAgent:s.userAgent||null,vendor:s.vendor||null,platform:s.platform||null,language:s.language||null,languages:s.languages||null,cookieEnabled:s.cookieEnabled||!1,hardwareConcurrency:s.hardwareConcurrency||null,deviceMemory:s.deviceMemory||null,maxTouchPoints:s.maxTouchPoints||0,touchSupported:"ontouchstart"in window||s.maxTouchPoints&&s.maxTouchPoints>0,screen:{width:e.width||null,height:e.height||null,availWidth:e.availWidth||null,availHeight:e.availHeight||null,colorDepth:e.colorDepth||null,pixelDepth:e.pixelDepth||null,devicePixelRatio:window.devicePixelRatio||null},viewport:{innerWidth:window.innerWidth||null,innerHeight:window.innerHeight||null},connection:{effectiveType:i.effectiveType||null,type:i.type||null,downlink:i.downlink||null,rtt:i.rtt||null,saveData:i.saveData||!1},battery:null,prefersDark:a,vendorSub:s.vendorSub||null,product:s.product||null,productSub:s.productSub||null,mimeTypesLength:s.mimeTypes&&s.mimeTypes.length||null,pluginsLength:s.plugins&&s.plugins.length||null,timezone:(()=>{try{return Intl.DateTimeFormat().resolvedOptions().timeZone||null}catch{return null}})(),locale:(()=>{try{return Intl.NumberFormat().resolvedOptions().locale||null}catch{return null}})(),clientTimestamp:Date.now()}}catch(s){return console.error("getDeviceInfo error",s),{error:"device-info-failed",clientTimestamp:Date.now()}}},wI=async()=>{try{if(!navigator.getBattery)return null;const s=await navigator.getBattery();return{charging:s.charging,level:typeof s.level=="number"?Math.round(s.level*100):null,chargingTime:s.chargingTime,dischargingTime:s.dischargingTime}}catch{return null}},PS=async s=>{try{const e=await fetch("https://ipapi.co/json/");if(!e.ok)throw new Error("Location API failed");const i=await e.json(),a={ip:i.ip||null,city:i.city||null,region:i.region||null,region_code:i.region_code||null,country:i.country_name||null,country_code:i.country||null,postal:i.postal||null,org:i.org||null,asn:i.asn||null,timezone:i.timezone||null,utc_offset:i.utc_offset||null,lastUpdated:Gi()};return await kt(We(Ze,`location/${s}`),a),a}catch(e){return console.warn("trackLocation error:",e),null}};let Rr={id:null,userId:null,pageStartTs:null,currentPage:null};const CI=async(s,e="home")=>{try{const i=hg(We(Ze,`sessions/${s}`)),a=i.key,o=bI(),h=await wI();h&&(o.battery=h);const d={startTime:Gi(),initialPage:e||null,pages:{},pageLoads:1,referrer:typeof document<"u"&&document.referrer?document.referrer:null,url:typeof window<"u"&&window.location&&window.location.href?window.location.href:null,utm:(()=>{try{const g=new URLSearchParams(window.location.search),v={};return["utm_source","utm_medium","utm_campaign","utm_term","utm_content"].forEach(y=>{g.has(y)&&(v[y]=g.get(y))}),Object.keys(v).length?v:null}catch{return null}})(),device:o,clientStart:Date.now()};await kt(i,d),PS(s).catch(()=>{}),Rr={id:a,userId:s,pageStartTs:Date.now(),currentPage:e||"home"};try{localStorage.setItem("activeSessionId",a)}catch{}return a}catch(i){return console.error("startSession error",i),null}},AI=async s=>{try{const e=Rr.id||localStorage.getItem("activeSessionId");if(!e)return;const i=Date.now();if(Rr.currentPage){const o=Rr.currentPage,h=i-(Rr.pageStartTs||i);await Bo(We(Ze,`sessions/${s}/${e}/pages/${o}`),{timeSpent:h,lastVisited:Gi()})}const a=We(Ze,`sessions/${s}/${e}`);await Bo(a,{endTime:Gi(),durationMs:i-(Rr.pageStartTs||i)}),Rr={id:null,userId:null,pageStartTs:null,currentPage:null};try{localStorage.removeItem("activeSessionId")}catch{}}catch(e){console.error("endSession error",e)}};let T0="home",b0=Date.now(),jc=null;const RI=(s,e)=>{jc={userId:s,sessionId:e}},Wd=s=>{if(!jc)return;const e=Date.now();kt(We(Ze,`sessions/${jc.userId}/${jc.sessionId}/pages/${T0}`),{timeSpent:e-b0,lastVisited:Gi()}),T0=s,b0=e},NI=s=>{window.onerror=function(e,i,a,o,h){hg(We(Ze,`crashes/${s}`),{msg:e,url:i,line:a,col:o,stack:h?.stack,time:Gi()})}},II=s=>{const e=We(Ze,`messages/${s}`);return Bo(e,{text:"🚫 Message deleted",deleted:!0})},OI=({currentUser:s,isOnline:e,messages:i,usersMap:a={},setCurrentUser:o})=>{const h=()=>{if(!s)return;const D=We(Ze,`envelopeClicks/${s.name}`);m2(D,K=>K===null?{count:1,lastClick:Date.now()}:{count:(K.count||0)+1,lastClick:Date.now()})},[d,g]=me.useState(""),[v,y]=me.useState(!1),T=me.useRef(null),A=me.useRef(null),[C,X]=me.useState(null),[F,Z]=me.useState(typeof window<"u"&&localStorage.getItem("unsendHintSeen")==="1"),te=me.useRef(null),re=me.useRef(null),[ue,pe]=me.useState({}),ve=me.useRef(null),_e=(D="auto")=>{T.current&&T.current.scrollIntoView({behavior:D}),A.current&&(A.current.scrollTop=A.current.scrollHeight)};me.useEffect(()=>{if(!s)return;CI(s.name),NI(s.name),PS(s.name);const D=localStorage.getItem("sessionId");return RI(s.name,D),Wd("chatRoom"),Wd("AuthScreen"),Wd("GamesSection"),()=>{AI(s.name)}},[s]),me.useEffect(()=>{if(!s)return;const D=We(Ze,"forceLogout"),K=Dr(D,ie=>{ie.val()===!0&&(alert("You have been logged out by admin!"),nt())});return()=>K()},[s]),me.useEffect(()=>{_e("auto")},[]),me.useEffect(()=>{_e("auto")},[i]),me.useEffect(()=>{if(!s)return;const K=Object.keys(a||{}).filter(ie=>ie!==s.name);if(K.length>0){const ie=a[K[0]];X(ie||null)}else X(null)},[a,s]),me.useEffect(()=>{if(!s)return;const D=We(Ze,"typing"),K=Dr(D,ie=>{const Ne=ie.val()||{};pe(Ne)});return()=>K()},[s]),me.useEffect(()=>()=>{if(s){const D=We(Ze,`typing/${s.name}`);kt(D,{isTyping:!1,timestamp:Date.now()}).catch(K=>console.error("Error clearing typing:",K)),ve.current&&clearTimeout(ve.current)}},[s]),me.useEffect(()=>{!s||!i.length||i.forEach(D=>{if(D.sender!==s.name&&D.status!=="read"){const K=We(Ze,`messages/${D.id}`);Bo(K,{status:"read",readAt:Gi()})}})},[i,s]);const Le=async()=>{if(d.trim()&&s&&e)try{const D=We(Ze,`typing/${s.name}`);await kt(D,{isTyping:!1,timestamp:Date.now()}),ve.current&&clearTimeout(ve.current);const K=We(Ze,"messages");await hg(K,{text:d,sender:s.name,timestamp:Gi(),createdAt:new Date().toISOString(),status:"sent"}),g(""),y(!1),setTimeout(()=>{_e("auto"),A.current&&(A.current.scrollTop=A.current.scrollHeight)},50)}catch(D){console.error("Error sending message:",D)}};me.useEffect(()=>{s&&i.forEach(D=>{if(D.sender===s.name&&D.status==="sent"&&D.createdAt){const K=new Date(D.createdAt).getTime();if(Date.now()-K>1e3){const Ne=We(Ze,`messages/${D.id}`);Bo(Ne,{status:"delivered",deliveredAt:Gi()})}}})},[i,s]);const M=D=>{g(d+D),y(!1)},b=D=>{if(g(D),!s)return;const K=We(Ze,`typing/${s.name}`);D.trim()?(kt(K,{isTyping:!0,timestamp:Date.now()}).catch(ie=>console.error("Error setting typing:",ie)),ve.current&&clearTimeout(ve.current),ve.current=setTimeout(()=>{kt(K,{isTyping:!1,timestamp:Date.now()}).catch(ie=>console.error("Error clearing typing:",ie))},2e3)):(kt(K,{isTyping:!1,timestamp:Date.now()}).catch(ie=>console.error("Error clearing typing:",ie)),ve.current&&clearTimeout(ve.current))},N=["😊","😂","❤️","👍","🎉","🔥","💯","🤔","😍","🥳"],x=D=>{if(!(!D||D.sender!==s?.name||!window.confirm("Unsend this message?"))&&(II(D.id),!F)){Z(!0);try{localStorage.setItem("unsendHintSeen","1")}catch{}}},k=D=>{D.sender===s?.name&&(re.current=D,te.current=setTimeout(()=>{x(re.current)},600))},U=()=>{te.current&&(clearTimeout(te.current),te.current=null,re.current=null)},R=({status:D})=>{const K="w-4 h-4";return D==="read"?q.jsx(E0,{className:`${K} text-green-400`}):D==="delivered"?q.jsx(E0,{className:`${K} text-zinc-400`}):q.jsx(iI,{className:`${K} text-zinc-400`})},St=Object.keys(ue).some(D=>{if(D===s?.name)return!1;const K=ue[D];if(!K?.isTyping)return!1;const ie=K.timestamp||0;return Date.now()-ie<=5e3}),nt=()=>{if(s?.name){const D=We(Ze,`users/${s.name}`);kt(D,{name:s.name,isOnline:!1,lastSeen:Date.now()});const K=We(Ze,`typing/${s.name}`);kt(K,{isTyping:!1,timestamp:Date.now()}).catch(ie=>console.error("Error clearing typing on logout:",ie))}localStorage.removeItem("chatUser"),o(null)};return q.jsxs("div",{className:"flex flex-col h-screen bg-black",children:[q.jsx("div",{className:"sticky top-0 z-50 px-4 py-2 border-b border-zinc-800 bg-zinc-900/95 backdrop-blur-md text-zinc-200",children:q.jsxs("div",{className:"flex items-center justify-between",children:[q.jsxs("div",{className:"flex flex-col",children:[q.jsx("span",{className:"text-sm font-semibold",children:C?.name||"Chat"}),q.jsx("span",{className:"text-xs text-zinc-400",children:St?"typing...":C?.isOnline?"Online":C?.lastSeen?`Last seen ${new Date(C.lastSeen).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}`:""})]}),q.jsxs("button",{onClick:nt,className:"flex items-center gap-1 bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded-lg text-xs font-medium transition-all shadow-md",children:[q.jsx(Ep,{size:14}),q.jsx("span",{children:"Logout"})]})]})}),q.jsxs("div",{ref:A,className:"flex-1 overflow-y-auto p-4 bg-gradient-to-b from-zinc-900 to-black",style:{scrollBehavior:"auto",overflowAnchor:"none"},children:[i.length===0?q.jsxs("div",{className:"text-center text-zinc-400 mt-32",children:[q.jsx(MS,{className:"w-16 h-16 mx-auto mb-4 opacity-30"}),q.jsx("h3",{className:"text-xl font-semibold mb-2 text-zinc-300",children:"No messages yet"}),q.jsx("p",{className:"text-zinc-500",children:"Start the conversation"})]}):q.jsx("div",{className:"space-y-4",children:i.map(D=>q.jsx("div",{className:`flex ${D.sender===s?.name?"justify-end":"justify-start"}`,children:q.jsx("div",{className:"max-w-xs sm:max-w-sm lg:max-w-md",children:q.jsxs("div",{className:`px-4 py-3 rounded-2xl shadow-lg ${D.sender===s?.name?"bg-gradient-to-r from-amber-500 to-yellow-600 text-black":"bg-gradient-to-r from-zinc-800 to-zinc-700 text-white border border-zinc-600"}`,onContextMenu:K=>{D.sender===s?.name&&(K.preventDefault(),x(D))},onTouchStart:()=>k(D),onTouchEnd:U,onTouchCancel:U,onTouchMove:U,children:[D.sender!==s?.name&&q.jsx("p",{className:"text-xs font-semibold text-amber-400 mb-2 tracking-wide",children:D.sender}),q.jsx("p",{className:"text-sm leading-relaxed mb-2",children:D.text}),q.jsxs("div",{className:"flex items-center justify-between",children:[q.jsx("p",{className:`text-xs opacity-70 ${D.sender===s?.name?"text-black":"text-zinc-400"}`,children:D.createdAt?new Date(D.createdAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"Sending..."}),D.sender===s?.name&&q.jsx("div",{className:"ml-2",children:q.jsx(R,{status:D.status||"sent"})})]}),D.sender===s?.name&&!F&&q.jsx("div",{className:"mt-1 text-[10px] text-zinc-500 select-none",children:"Long-press to Unsend"})]})})},D.id))}),q.jsx("div",{ref:T})]}),q.jsxs("div",{className:"p-4 bg-zinc-900",children:[v&&q.jsx("div",{className:"mb-4 p-3 bg-zinc-800 rounded-xl border border-zinc-700",children:q.jsx("div",{className:"grid grid-cols-5 sm:grid-cols-10 gap-2",children:N.map(D=>q.jsx("button",{onClick:()=>M(D),className:"text-xl p-2 hover:bg-zinc-700 rounded-lg transition-colors hover:scale-110 transform",children:D},D))})}),q.jsxs("div",{className:"flex items-center space-x-3",children:[q.jsx("button",{onClick:()=>y(!v),className:"p-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-colors border border-zinc-700",disabled:!e,children:q.jsx(mI,{className:"w-5 h-5 text-amber-400"})}),q.jsx("button",{onClick:()=>{h(),window.open("https://drive.google.com/drive/folders/162jFg9BAu0GCfe3O6NIHsLTd0IeMHbX9?usp=sharing","_blank")},className:"p-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-colors border border-zinc-700",disabled:!e,children:q.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 text-blue-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:q.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 0a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"})})}),q.jsx("div",{className:"flex-1 relative",children:q.jsx("input",{type:"text",value:d,onChange:D=>b(D.target.value),onKeyPress:D=>D.key==="Enter"&&Le(),placeholder:e?"Type a message...":"No connection",disabled:!e,className:"w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all disabled:opacity-50"})}),q.jsx("button",{onClick:Le,disabled:!e||!d.trim(),className:"p-3 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 disabled:from-zinc-700 disabled:to-zinc-600 text-black rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed",children:q.jsx(pI,{className:"w-5 h-5"})})]}),e&&q.jsx("div",{className:"flex items-center justify-center mt-3",children:q.jsxs("div",{className:"flex items-center space-x-2 text-xs text-zinc-500",children:[q.jsx("div",{className:"w-2 h-2 bg-emerald-400 rounded-full animate-pulse"}),q.jsx("span",{children:"Connected"})]})})]})]})},DI=({isOnline:s})=>q.jsxs("div",{className:"space-y-4 sm:space-y-6 p-2 sm:p-4",children:[q.jsxs("div",{className:"bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-2xl sm:rounded-t-3xl shadow-sm p-4 sm:p-6 text-white text-center mx-2 sm:mx-0",children:[q.jsx("h2",{className:"text-xl sm:text-2xl font-bold mb-2",children:"🎮 Fun Games"}),q.jsx("p",{className:"text-purple-100 text-sm sm:text-base",children:"Real-time multiplayer games!"}),q.jsxs("div",{className:`flex items-center justify-center mt-2 text-xs sm:text-sm ${s?"text-green-200":"text-red-200"}`,children:[s?q.jsx(US,{size:14}):q.jsx(LS,{size:14}),q.jsx("span",{className:"ml-1",children:s?"Synced":"Offline Mode"})]})]}),q.jsx("div",{className:"text-center p-6 sm:p-8 mx-2 sm:mx-0",children:q.jsx("p",{className:"text-gray-600 text-sm sm:text-base",children:"Games coming soon with real-time sync! 🎮"})})]}),xI=()=>q.jsx("div",{className:"p-2 sm:p-4 max-w-4xl mx-auto",children:q.jsxs("div",{className:"bg-white rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 text-center mx-2 sm:mx-0",children:[q.jsx("div",{className:"bg-gradient-to-r from-purple-100 to-pink-100 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6",children:q.jsx(kS,{size:28,className:"text-purple-600"})}),q.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-gray-800 mb-3",children:"🎨 Creative Zone"}),q.jsxs("div",{className:"text-gray-600 space-y-2",children:[q.jsx("p",{className:"text-base sm:text-lg",children:"Creative features coming soon!"}),q.jsxs("div",{className:"bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-3 sm:p-4 mt-3",children:[q.jsx("p",{className:"font-medium text-purple-700 text-sm",children:"Upcoming Features:"}),q.jsxs("div",{className:"mt-2 space-y-1 text-xs sm:text-sm",children:[q.jsx("p",{children:"🎨 Real-time Collaborative Doodle Board"}),q.jsx("p",{children:"😂 Meme Maker with Templates"}),q.jsx("p",{children:"📚 Story Builder (Build stories together)"}),q.jsx("p",{children:"🎭 Custom Avatar Creator"})]})]})]})]})}),MI=()=>{const[s,e]=me.useState(null),[i,a]=me.useState("chat"),[o,h]=me.useState([]),[d,g]=me.useState(navigator.onLine),[v,y]=me.useState({isOnline:!1,lastSeen:null}),[T,A]=me.useState({}),[C,X]=me.useState(null),[F,Z]=me.useState({rps:{scores:{player1:0,player2:0}},tictactoe:{board:Array(9).fill(null),currentPlayer:"X",winner:null,scores:{X:0,O:0}}});me.useEffect(()=>{const re=localStorage.getItem("chatUser");re&&e(JSON.parse(re))},[]),me.useEffect(()=>{const re=()=>g(!0),ue=()=>g(!1);return window.addEventListener("online",re),window.addEventListener("offline",ue),()=>{window.removeEventListener("online",re),window.removeEventListener("offline",ue)}},[]),me.useEffect(()=>{if(!s)return;const re=We(Ze,"messages"),ue=Dr(re,pe=>{const ve=pe.val();if(ve){const _e=Object.entries(ve).map(([Le,M])=>({id:Le,...M}));h(_e.sort((Le,M)=>new Date(Le.createdAt)-new Date(M.createdAt)))}});return()=>ue()},[s]),me.useEffect(()=>{if(!s)return;const re=We(Ze,`users/${s.name}`);kt(re,{name:s.name,isOnline:!0,lastSeen:Date.now()});const ue=setInterval(()=>{kt(re,{name:s.name,isOnline:!0,lastSeen:Date.now()})},3e4);return()=>{clearInterval(ue),kt(re,{name:s.name,isOnline:!1,lastSeen:Date.now()})}},[s]),me.useEffect(()=>{const re=We(Ze,"users"),ue=Dr(re,pe=>{A(pe.val()||{})});return()=>ue()},[]),me.useEffect(()=>{if(!s)return;const re=We(Ze,"gameStates"),ue=Dr(re,pe=>{const ve=pe.val();ve&&Z(ve)});return()=>ue()},[s]);const te=re=>{Z(re),kt(We(Ze,"gameStates"),re)};return s?q.jsxs("div",{className:"h-screen w-screen bg-gray-950 flex flex-col overflow-hidden",children:[q.jsx(TI,{currentUser:s,setCurrentUser:e,setActiveSection:a,activeSection:i,isOnline:d,userPresence:v,usersMap:T,setImpersonateUser:X}),q.jsxs("main",{className:"flex-1 flex flex-col overflow-hidden",children:[i==="chat"&&q.jsx(OI,{currentUser:s,isOnline:d,messages:o,usersMap:T}),i==="games"&&q.jsx(DI,{gameStates:F,updateGameState:te,isOnline:d}),i==="creative"&&q.jsx(xI,{})]})]}):q.jsx(EI,{setCurrentUser:e,isOnline:d})};ST.createRoot(document.getElementById("root")).render(q.jsx(me.StrictMode,{children:q.jsx(MI,{})}));
