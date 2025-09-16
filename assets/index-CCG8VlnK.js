(function(){const w=document.createElement("link").relList;if(w&&w.supports&&w.supports("modulepreload"))return;for(const O of document.querySelectorAll('link[rel="modulepreload"]'))d(O);new MutationObserver(O=>{for(const U of O)if(U.type==="childList")for(const A of U.addedNodes)A.tagName==="LINK"&&A.rel==="modulepreload"&&d(A)}).observe(document,{childList:!0,subtree:!0});function C(O){const U={};return O.integrity&&(U.integrity=O.integrity),O.referrerPolicy&&(U.referrerPolicy=O.referrerPolicy),O.crossOrigin==="use-credentials"?U.credentials="include":O.crossOrigin==="anonymous"?U.credentials="omit":U.credentials="same-origin",U}function d(O){if(O.ep)return;O.ep=!0;const U=C(O);fetch(O.href,U)}})();var ic={exports:{}},kn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm;function i0(){if(rm)return kn;rm=1;var p=Symbol.for("react.transitional.element"),w=Symbol.for("react.fragment");function C(d,O,U){var A=null;if(U!==void 0&&(A=""+U),O.key!==void 0&&(A=""+O.key),"key"in O){U={};for(var G in O)G!=="key"&&(U[G]=O[G])}else U=O;return O=U.ref,{$$typeof:p,type:d,key:A,ref:O!==void 0?O:null,props:U}}return kn.Fragment=w,kn.jsx=C,kn.jsxs=C,kn}var om;function n0(){return om||(om=1,ic.exports=i0()),ic.exports}var c=n0(),nc={exports:{}},P={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cm;function l0(){if(cm)return P;cm=1;var p=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),A=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),S=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),Q=Symbol.iterator;function L(u){return u===null||typeof u!="object"?null:(u=Q&&u[Q]||u["@@iterator"],typeof u=="function"?u:null)}var fe={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},re=Object.assign,we={};function $(u,y,D){this.props=u,this.context=y,this.refs=we,this.updater=D||fe}$.prototype.isReactComponent={},$.prototype.setState=function(u,y){if(typeof u!="object"&&typeof u!="function"&&u!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,u,y,"setState")},$.prototype.forceUpdate=function(u){this.updater.enqueueForceUpdate(this,u,"forceUpdate")};function Ve(){}Ve.prototype=$.prototype;function V(u,y,D){this.props=u,this.context=y,this.refs=we,this.updater=D||fe}var be=V.prototype=new Ve;be.constructor=V,re(be,$.prototype),be.isPureReactComponent=!0;var he=Array.isArray,J={H:null,A:null,T:null,S:null,V:null},Ne=Object.prototype.hasOwnProperty;function Ae(u,y,D,N,H,ae){return D=ae.ref,{$$typeof:p,type:u,key:y,ref:D!==void 0?D:null,props:ae}}function Ze(u,y){return Ae(u.type,y,void 0,void 0,void 0,u.props)}function Ye(u){return typeof u=="object"&&u!==null&&u.$$typeof===p}function St(u){var y={"=":"=0",":":"=2"};return"$"+u.replace(/[=:]/g,function(D){return y[D]})}var ut=/\/+/g;function Ue(u,y){return typeof u=="object"&&u!==null&&u.key!=null?St(""+u.key):y.toString(36)}function Nt(){}function yt(u){switch(u.status){case"fulfilled":return u.value;case"rejected":throw u.reason;default:switch(typeof u.status=="string"?u.then(Nt,Nt):(u.status="pending",u.then(function(y){u.status==="pending"&&(u.status="fulfilled",u.value=y)},function(y){u.status==="pending"&&(u.status="rejected",u.reason=y)})),u.status){case"fulfilled":return u.value;case"rejected":throw u.reason}}throw u}function Oe(u,y,D,N,H){var ae=typeof u;(ae==="undefined"||ae==="boolean")&&(u=null);var K=!1;if(u===null)K=!0;else switch(ae){case"bigint":case"string":case"number":K=!0;break;case"object":switch(u.$$typeof){case p:case w:K=!0;break;case _:return K=u._init,Oe(K(u._payload),y,D,N,H)}}if(K)return H=H(u),K=N===""?"."+Ue(u,0):N,he(H)?(D="",K!=null&&(D=K.replace(ut,"$&/")+"/"),Oe(H,y,D,"",function(Kt){return Kt})):H!=null&&(Ye(H)&&(H=Ze(H,D+(H.key==null||u&&u.key===H.key?"":(""+H.key).replace(ut,"$&/")+"/")+K)),y.push(H)),1;K=0;var Ie=N===""?".":N+":";if(he(u))for(var ve=0;ve<u.length;ve++)N=u[ve],ae=Ie+Ue(N,ve),K+=Oe(N,y,D,ae,H);else if(ve=L(u),typeof ve=="function")for(u=ve.call(u),ve=0;!(N=u.next()).done;)N=N.value,ae=Ie+Ue(N,ve++),K+=Oe(N,y,D,ae,H);else if(ae==="object"){if(typeof u.then=="function")return Oe(yt(u),y,D,N,H);throw y=String(u),Error("Objects are not valid as a React child (found: "+(y==="[object Object]"?"object with keys {"+Object.keys(u).join(", ")+"}":y)+"). If you meant to render a collection of children, use an array instead.")}return K}function x(u,y,D){if(u==null)return u;var N=[],H=0;return Oe(u,N,"","",function(ae){return y.call(D,ae,H++)}),N}function M(u){if(u._status===-1){var y=u._result;y=y(),y.then(function(D){(u._status===0||u._status===-1)&&(u._status=1,u._result=D)},function(D){(u._status===0||u._status===-1)&&(u._status=2,u._result=D)}),u._status===-1&&(u._status=0,u._result=y)}if(u._status===1)return u._result.default;throw u._result}var q=typeof reportError=="function"?reportError:function(u){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof u=="object"&&u!==null&&typeof u.message=="string"?String(u.message):String(u),error:u});if(!window.dispatchEvent(y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",u);return}console.error(u)};function E(){}return P.Children={map:x,forEach:function(u,y,D){x(u,function(){y.apply(this,arguments)},D)},count:function(u){var y=0;return x(u,function(){y++}),y},toArray:function(u){return x(u,function(y){return y})||[]},only:function(u){if(!Ye(u))throw Error("React.Children.only expected to receive a single React element child.");return u}},P.Component=$,P.Fragment=C,P.Profiler=O,P.PureComponent=V,P.StrictMode=d,P.Suspense=T,P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,P.__COMPILER_RUNTIME={__proto__:null,c:function(u){return J.H.useMemoCache(u)}},P.cache=function(u){return function(){return u.apply(null,arguments)}},P.cloneElement=function(u,y,D){if(u==null)throw Error("The argument must be a React element, but you passed "+u+".");var N=re({},u.props),H=u.key,ae=void 0;if(y!=null)for(K in y.ref!==void 0&&(ae=void 0),y.key!==void 0&&(H=""+y.key),y)!Ne.call(y,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&y.ref===void 0||(N[K]=y[K]);var K=arguments.length-2;if(K===1)N.children=D;else if(1<K){for(var Ie=Array(K),ve=0;ve<K;ve++)Ie[ve]=arguments[ve+2];N.children=Ie}return Ae(u.type,H,void 0,void 0,ae,N)},P.createContext=function(u){return u={$$typeof:A,_currentValue:u,_currentValue2:u,_threadCount:0,Provider:null,Consumer:null},u.Provider=u,u.Consumer={$$typeof:U,_context:u},u},P.createElement=function(u,y,D){var N,H={},ae=null;if(y!=null)for(N in y.key!==void 0&&(ae=""+y.key),y)Ne.call(y,N)&&N!=="key"&&N!=="__self"&&N!=="__source"&&(H[N]=y[N]);var K=arguments.length-2;if(K===1)H.children=D;else if(1<K){for(var Ie=Array(K),ve=0;ve<K;ve++)Ie[ve]=arguments[ve+2];H.children=Ie}if(u&&u.defaultProps)for(N in K=u.defaultProps,K)H[N]===void 0&&(H[N]=K[N]);return Ae(u,ae,void 0,void 0,null,H)},P.createRef=function(){return{current:null}},P.forwardRef=function(u){return{$$typeof:G,render:u}},P.isValidElement=Ye,P.lazy=function(u){return{$$typeof:_,_payload:{_status:-1,_result:u},_init:M}},P.memo=function(u,y){return{$$typeof:S,type:u,compare:y===void 0?null:y}},P.startTransition=function(u){var y=J.T,D={};J.T=D;try{var N=u(),H=J.S;H!==null&&H(D,N),typeof N=="object"&&N!==null&&typeof N.then=="function"&&N.then(E,q)}catch(ae){q(ae)}finally{J.T=y}},P.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},P.use=function(u){return J.H.use(u)},P.useActionState=function(u,y,D){return J.H.useActionState(u,y,D)},P.useCallback=function(u,y){return J.H.useCallback(u,y)},P.useContext=function(u){return J.H.useContext(u)},P.useDebugValue=function(){},P.useDeferredValue=function(u,y){return J.H.useDeferredValue(u,y)},P.useEffect=function(u,y,D){var N=J.H;if(typeof D=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return N.useEffect(u,y)},P.useId=function(){return J.H.useId()},P.useImperativeHandle=function(u,y,D){return J.H.useImperativeHandle(u,y,D)},P.useInsertionEffect=function(u,y){return J.H.useInsertionEffect(u,y)},P.useLayoutEffect=function(u,y){return J.H.useLayoutEffect(u,y)},P.useMemo=function(u,y){return J.H.useMemo(u,y)},P.useOptimistic=function(u,y){return J.H.useOptimistic(u,y)},P.useReducer=function(u,y,D){return J.H.useReducer(u,y,D)},P.useRef=function(u){return J.H.useRef(u)},P.useState=function(u){return J.H.useState(u)},P.useSyncExternalStore=function(u,y,D){return J.H.useSyncExternalStore(u,y,D)},P.useTransition=function(){return J.H.useTransition()},P.version="19.1.1",P}var um;function fc(){return um||(um=1,nc.exports=l0()),nc.exports}var ne=fc(),lc={exports:{}},zn={},rc={exports:{}},oc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm;function r0(){return sm||(sm=1,(function(p){function w(x,M){var q=x.length;x.push(M);e:for(;0<q;){var E=q-1>>>1,u=x[E];if(0<O(u,M))x[E]=M,x[q]=u,q=E;else break e}}function C(x){return x.length===0?null:x[0]}function d(x){if(x.length===0)return null;var M=x[0],q=x.pop();if(q!==M){x[0]=q;e:for(var E=0,u=x.length,y=u>>>1;E<y;){var D=2*(E+1)-1,N=x[D],H=D+1,ae=x[H];if(0>O(N,q))H<u&&0>O(ae,N)?(x[E]=ae,x[H]=q,E=H):(x[E]=N,x[D]=q,E=D);else if(H<u&&0>O(ae,q))x[E]=ae,x[H]=q,E=H;else break e}}return M}function O(x,M){var q=x.sortIndex-M.sortIndex;return q!==0?q:x.id-M.id}if(p.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var U=performance;p.unstable_now=function(){return U.now()}}else{var A=Date,G=A.now();p.unstable_now=function(){return A.now()-G}}var T=[],S=[],_=1,Q=null,L=3,fe=!1,re=!1,we=!1,$=!1,Ve=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,be=typeof setImmediate<"u"?setImmediate:null;function he(x){for(var M=C(S);M!==null;){if(M.callback===null)d(S);else if(M.startTime<=x)d(S),M.sortIndex=M.expirationTime,w(T,M);else break;M=C(S)}}function J(x){if(we=!1,he(x),!re)if(C(T)!==null)re=!0,Ne||(Ne=!0,Ue());else{var M=C(S);M!==null&&Oe(J,M.startTime-x)}}var Ne=!1,Ae=-1,Ze=5,Ye=-1;function St(){return $?!0:!(p.unstable_now()-Ye<Ze)}function ut(){if($=!1,Ne){var x=p.unstable_now();Ye=x;var M=!0;try{e:{re=!1,we&&(we=!1,V(Ae),Ae=-1),fe=!0;var q=L;try{t:{for(he(x),Q=C(T);Q!==null&&!(Q.expirationTime>x&&St());){var E=Q.callback;if(typeof E=="function"){Q.callback=null,L=Q.priorityLevel;var u=E(Q.expirationTime<=x);if(x=p.unstable_now(),typeof u=="function"){Q.callback=u,he(x),M=!0;break t}Q===C(T)&&d(T),he(x)}else d(T);Q=C(T)}if(Q!==null)M=!0;else{var y=C(S);y!==null&&Oe(J,y.startTime-x),M=!1}}break e}finally{Q=null,L=q,fe=!1}M=void 0}}finally{M?Ue():Ne=!1}}}var Ue;if(typeof be=="function")Ue=function(){be(ut)};else if(typeof MessageChannel<"u"){var Nt=new MessageChannel,yt=Nt.port2;Nt.port1.onmessage=ut,Ue=function(){yt.postMessage(null)}}else Ue=function(){Ve(ut,0)};function Oe(x,M){Ae=Ve(function(){x(p.unstable_now())},M)}p.unstable_IdlePriority=5,p.unstable_ImmediatePriority=1,p.unstable_LowPriority=4,p.unstable_NormalPriority=3,p.unstable_Profiling=null,p.unstable_UserBlockingPriority=2,p.unstable_cancelCallback=function(x){x.callback=null},p.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ze=0<x?Math.floor(1e3/x):5},p.unstable_getCurrentPriorityLevel=function(){return L},p.unstable_next=function(x){switch(L){case 1:case 2:case 3:var M=3;break;default:M=L}var q=L;L=M;try{return x()}finally{L=q}},p.unstable_requestPaint=function(){$=!0},p.unstable_runWithPriority=function(x,M){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var q=L;L=x;try{return M()}finally{L=q}},p.unstable_scheduleCallback=function(x,M,q){var E=p.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?E+q:E):q=E,x){case 1:var u=-1;break;case 2:u=250;break;case 5:u=1073741823;break;case 4:u=1e4;break;default:u=5e3}return u=q+u,x={id:_++,callback:M,priorityLevel:x,startTime:q,expirationTime:u,sortIndex:-1},q>E?(x.sortIndex=q,w(S,x),C(T)===null&&x===C(S)&&(we?(V(Ae),Ae=-1):we=!0,Oe(J,q-E))):(x.sortIndex=u,w(T,x),re||fe||(re=!0,Ne||(Ne=!0,Ue()))),x},p.unstable_shouldYield=St,p.unstable_wrapCallback=function(x){var M=L;return function(){var q=L;L=M;try{return x.apply(this,arguments)}finally{L=q}}}})(oc)),oc}var dm;function o0(){return dm||(dm=1,rc.exports=r0()),rc.exports}var cc={exports:{}},Le={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mm;function c0(){if(mm)return Le;mm=1;var p=fc();function w(T){var S="https://react.dev/errors/"+T;if(1<arguments.length){S+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)S+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+T+"; visit "+S+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function C(){}var d={d:{f:C,r:function(){throw Error(w(522))},D:C,C,L:C,m:C,X:C,S:C,M:C},p:0,findDOMNode:null},O=Symbol.for("react.portal");function U(T,S,_){var Q=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:Q==null?null:""+Q,children:T,containerInfo:S,implementation:_}}var A=p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function G(T,S){if(T==="font")return"";if(typeof S=="string")return S==="use-credentials"?S:""}return Le.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,Le.createPortal=function(T,S){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!S||S.nodeType!==1&&S.nodeType!==9&&S.nodeType!==11)throw Error(w(299));return U(T,S,null,_)},Le.flushSync=function(T){var S=A.T,_=d.p;try{if(A.T=null,d.p=2,T)return T()}finally{A.T=S,d.p=_,d.d.f()}},Le.preconnect=function(T,S){typeof T=="string"&&(S?(S=S.crossOrigin,S=typeof S=="string"?S==="use-credentials"?S:"":void 0):S=null,d.d.C(T,S))},Le.prefetchDNS=function(T){typeof T=="string"&&d.d.D(T)},Le.preinit=function(T,S){if(typeof T=="string"&&S&&typeof S.as=="string"){var _=S.as,Q=G(_,S.crossOrigin),L=typeof S.integrity=="string"?S.integrity:void 0,fe=typeof S.fetchPriority=="string"?S.fetchPriority:void 0;_==="style"?d.d.S(T,typeof S.precedence=="string"?S.precedence:void 0,{crossOrigin:Q,integrity:L,fetchPriority:fe}):_==="script"&&d.d.X(T,{crossOrigin:Q,integrity:L,fetchPriority:fe,nonce:typeof S.nonce=="string"?S.nonce:void 0})}},Le.preinitModule=function(T,S){if(typeof T=="string")if(typeof S=="object"&&S!==null){if(S.as==null||S.as==="script"){var _=G(S.as,S.crossOrigin);d.d.M(T,{crossOrigin:_,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0})}}else S==null&&d.d.M(T)},Le.preload=function(T,S){if(typeof T=="string"&&typeof S=="object"&&S!==null&&typeof S.as=="string"){var _=S.as,Q=G(_,S.crossOrigin);d.d.L(T,_,{crossOrigin:Q,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0,type:typeof S.type=="string"?S.type:void 0,fetchPriority:typeof S.fetchPriority=="string"?S.fetchPriority:void 0,referrerPolicy:typeof S.referrerPolicy=="string"?S.referrerPolicy:void 0,imageSrcSet:typeof S.imageSrcSet=="string"?S.imageSrcSet:void 0,imageSizes:typeof S.imageSizes=="string"?S.imageSizes:void 0,media:typeof S.media=="string"?S.media:void 0})}},Le.preloadModule=function(T,S){if(typeof T=="string")if(S){var _=G(S.as,S.crossOrigin);d.d.m(T,{as:typeof S.as=="string"&&S.as!=="script"?S.as:void 0,crossOrigin:_,integrity:typeof S.integrity=="string"?S.integrity:void 0})}else d.d.m(T)},Le.requestFormReset=function(T){d.d.r(T)},Le.unstable_batchedUpdates=function(T,S){return T(S)},Le.useFormState=function(T,S,_){return A.H.useFormState(T,S,_)},Le.useFormStatus=function(){return A.H.useHostTransitionStatus()},Le.version="19.1.1",Le}var fm;function Sm(){if(fm)return cc.exports;fm=1;function p(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p)}catch(w){console.error(w)}}return p(),cc.exports=c0(),cc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm;function u0(){if(gm)return zn;gm=1;var p=o0(),w=fc(),C=Sm();function d(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function O(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function U(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function A(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function G(e){if(U(e)!==e)throw Error(d(188))}function T(e){var t=e.alternate;if(!t){if(t=U(e),t===null)throw Error(d(188));return t!==e?null:e}for(var a=e,i=t;;){var n=a.return;if(n===null)break;var l=n.alternate;if(l===null){if(i=n.return,i!==null){a=i;continue}break}if(n.child===l.child){for(l=n.child;l;){if(l===a)return G(n),e;if(l===i)return G(n),t;l=l.sibling}throw Error(d(188))}if(a.return!==i.return)a=n,i=l;else{for(var r=!1,o=n.child;o;){if(o===a){r=!0,a=n,i=l;break}if(o===i){r=!0,i=n,a=l;break}o=o.sibling}if(!r){for(o=l.child;o;){if(o===a){r=!0,a=l,i=n;break}if(o===i){r=!0,i=l,a=n;break}o=o.sibling}if(!r)throw Error(d(189))}}if(a.alternate!==i)throw Error(d(190))}if(a.tag!==3)throw Error(d(188));return a.stateNode.current===a?e:t}function S(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=S(e),t!==null)return t;e=e.sibling}return null}var _=Object.assign,Q=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),fe=Symbol.for("react.portal"),re=Symbol.for("react.fragment"),we=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),Ve=Symbol.for("react.provider"),V=Symbol.for("react.consumer"),be=Symbol.for("react.context"),he=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),Ne=Symbol.for("react.suspense_list"),Ae=Symbol.for("react.memo"),Ze=Symbol.for("react.lazy"),Ye=Symbol.for("react.activity"),St=Symbol.for("react.memo_cache_sentinel"),ut=Symbol.iterator;function Ue(e){return e===null||typeof e!="object"?null:(e=ut&&e[ut]||e["@@iterator"],typeof e=="function"?e:null)}var Nt=Symbol.for("react.client.reference");function yt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Nt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case re:return"Fragment";case $:return"Profiler";case we:return"StrictMode";case J:return"Suspense";case Ne:return"SuspenseList";case Ye:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case fe:return"Portal";case be:return(e.displayName||"Context")+".Provider";case V:return(e._context.displayName||"Context")+".Consumer";case he:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ae:return t=e.displayName||null,t!==null?t:yt(e.type)||"Memo";case Ze:t=e._payload,e=e._init;try{return yt(e(t))}catch{}}return null}var Oe=Array.isArray,x=w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=C.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},E=[],u=-1;function y(e){return{current:e}}function D(e){0>u||(e.current=E[u],E[u]=null,u--)}function N(e,t){u++,E[u]=e.current,e.current=t}var H=y(null),ae=y(null),K=y(null),Ie=y(null);function ve(e,t){switch(N(K,t),N(ae,e),N(H,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?_d(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=_d(t),e=Rd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}D(H),N(H,e)}function Kt(){D(H),D(ae),D(K)}function Yl(e){e.memoizedState!==null&&N(Ie,e);var t=H.current,a=Rd(t,e.type);t!==a&&(N(ae,e),N(H,a))}function Sn(e){ae.current===e&&(D(H),D(ae)),Ie.current===e&&(D(Ie),hn._currentValue=q)}var Xl=Object.prototype.hasOwnProperty,Ql=p.unstable_scheduleCallback,Ll=p.unstable_cancelCallback,_m=p.unstable_shouldYield,Rm=p.unstable_requestPaint,jt=p.unstable_now,Cm=p.unstable_getCurrentPriorityLevel,gc=p.unstable_ImmediatePriority,pc=p.unstable_UserBlockingPriority,jn=p.unstable_NormalPriority,Bm=p.unstable_LowPriority,hc=p.unstable_IdlePriority,Gm=p.log,qm=p.unstable_setDisableYieldValue,Si=null,et=null;function Jt(e){if(typeof Gm=="function"&&qm(e),et&&typeof et.setStrictMode=="function")try{et.setStrictMode(Si,e)}catch{}}var tt=Math.clz32?Math.clz32:Xm,Hm=Math.log,Ym=Math.LN2;function Xm(e){return e>>>=0,e===0?32:31-(Hm(e)/Ym|0)|0}var En=256,Dn=4194304;function ya(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function wn(e,t,a){var i=e.pendingLanes;if(i===0)return 0;var n=0,l=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~l,i!==0?n=ya(i):(r&=o,r!==0?n=ya(r):a||(a=o&~e,a!==0&&(n=ya(a))))):(o=i&~l,o!==0?n=ya(o):r!==0?n=ya(r):a||(a=i&~e,a!==0&&(n=ya(a)))),n===0?0:t!==0&&t!==n&&(t&l)===0&&(l=n&-n,a=t&-t,l>=a||l===32&&(a&4194048)!==0)?t:n}function ji(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Qm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bc(){var e=En;return En<<=1,(En&4194048)===0&&(En=256),e}function vc(){var e=Dn;return Dn<<=1,(Dn&62914560)===0&&(Dn=4194304),e}function Vl(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Ei(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Lm(e,t,a,i,n,l){var r=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var o=e.entanglements,s=e.expirationTimes,h=e.hiddenUpdates;for(a=r&~a;0<a;){var k=31-tt(a),j=1<<k;o[k]=0,s[k]=-1;var b=h[k];if(b!==null)for(h[k]=null,k=0;k<b.length;k++){var v=b[k];v!==null&&(v.lane&=-536870913)}a&=~j}i!==0&&yc(e,i,0),l!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=l&~(r&~t))}function yc(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-tt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|a&4194090}function xc(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var i=31-tt(a),n=1<<i;n&t|e[i]&t&&(e[i]|=t),a&=~n}}function Zl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Kl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function kc(){var e=M.p;return e!==0?e:(e=window.event,e===void 0?32:em(e.type))}function Vm(e,t){var a=M.p;try{return M.p=e,t()}finally{M.p=a}}var $t=Math.random().toString(36).slice(2),Xe="__reactFiber$"+$t,Je="__reactProps$"+$t,Ba="__reactContainer$"+$t,Jl="__reactEvents$"+$t,Zm="__reactListeners$"+$t,Km="__reactHandles$"+$t,zc="__reactResources$"+$t,Di="__reactMarker$"+$t;function $l(e){delete e[Xe],delete e[Je],delete e[Jl],delete e[Zm],delete e[Km]}function Ga(e){var t=e[Xe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ba]||a[Xe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=qd(e);e!==null;){if(a=e[Xe])return a;e=qd(e)}return t}e=a,a=e.parentNode}return null}function qa(e){if(e=e[Xe]||e[Ba]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function wi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(d(33))}function Ha(e){var t=e[zc];return t||(t=e[zc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function _e(e){e[Di]=!0}var Sc=new Set,jc={};function xa(e,t){Ya(e,t),Ya(e+"Capture",t)}function Ya(e,t){for(jc[e]=t,e=0;e<t.length;e++)Sc.add(t[e])}var Jm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ec={},Dc={};function $m(e){return Xl.call(Dc,e)?!0:Xl.call(Ec,e)?!1:Jm.test(e)?Dc[e]=!0:(Ec[e]=!0,!1)}function An(e,t,a){if($m(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Tn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Ut(e,t,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+i)}}var Pl,wc;function Xa(e){if(Pl===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Pl=t&&t[1]||"",wc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Pl+e+wc}var Wl=!1;function Fl(e,t){if(!e||Wl)return"";Wl=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var j=function(){throw Error()};if(Object.defineProperty(j.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(j,[])}catch(v){var b=v}Reflect.construct(e,[],j)}else{try{j.call()}catch(v){b=v}e.call(j.prototype)}}else{try{throw Error()}catch(v){b=v}(j=e())&&typeof j.catch=="function"&&j.catch(function(){})}}catch(v){if(v&&b&&typeof v.stack=="string")return[v.stack,b.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=i.DetermineComponentFrameRoot(),r=l[0],o=l[1];if(r&&o){var s=r.split(`
`),h=o.split(`
`);for(n=i=0;i<s.length&&!s[i].includes("DetermineComponentFrameRoot");)i++;for(;n<h.length&&!h[n].includes("DetermineComponentFrameRoot");)n++;if(i===s.length||n===h.length)for(i=s.length-1,n=h.length-1;1<=i&&0<=n&&s[i]!==h[n];)n--;for(;1<=i&&0<=n;i--,n--)if(s[i]!==h[n]){if(i!==1||n!==1)do if(i--,n--,0>n||s[i]!==h[n]){var k=`
`+s[i].replace(" at new "," at ");return e.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",e.displayName)),k}while(1<=i&&0<=n);break}}}finally{Wl=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Xa(a):""}function Pm(e){switch(e.tag){case 26:case 27:case 5:return Xa(e.type);case 16:return Xa("Lazy");case 13:return Xa("Suspense");case 19:return Xa("SuspenseList");case 0:case 15:return Fl(e.type,!1);case 11:return Fl(e.type.render,!1);case 1:return Fl(e.type,!0);case 31:return Xa("Activity");default:return""}}function Ac(e){try{var t="";do t+=Pm(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function st(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Tc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wm(e){var t=Tc(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,l=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(r){i=""+r,l.call(this,r)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return i},setValue:function(r){i=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mn(e){e._valueTracker||(e._valueTracker=Wm(e))}function Mc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),i="";return e&&(i=Tc(e)?e.checked?"true":"false":e.value),e=i,e!==a?(t.setValue(e),!0):!1}function Nn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Fm=/[\n"\\]/g;function dt(e){return e.replace(Fm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Il(e,t,a,i,n,l,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+st(t)):e.value!==""+st(t)&&(e.value=""+st(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?er(e,r,st(t)):a!=null?er(e,r,st(a)):i!=null&&e.removeAttribute("value"),n==null&&l!=null&&(e.defaultChecked=!!l),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+st(o):e.removeAttribute("name")}function Nc(e,t,a,i,n,l,r,o){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),t!=null||a!=null){if(!(l!=="submit"&&l!=="reset"||t!=null))return;a=a!=null?""+st(a):"",t=t!=null?""+st(t):a,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??n,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r)}function er(e,t,a){t==="number"&&Nn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Qa(e,t,a,i){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&i&&(e[a].defaultSelected=!0)}else{for(a=""+st(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,i&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Uc(e,t,a){if(t!=null&&(t=""+st(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+st(a):""}function Oc(e,t,a,i){if(t==null){if(i!=null){if(a!=null)throw Error(d(92));if(Oe(i)){if(1<i.length)throw Error(d(93));i=i[0]}a=i}a==null&&(a=""),t=a}a=st(t),e.defaultValue=a,i=e.textContent,i===a&&i!==""&&i!==null&&(e.value=i)}function La(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Im=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _c(e,t,a){var i=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,a):typeof a!="number"||a===0||Im.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Rc(e,t,a){if(t!=null&&typeof t!="object")throw Error(d(62));if(e=e.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var n in t)i=t[n],t.hasOwnProperty(n)&&a[n]!==i&&_c(e,n,i)}else for(var l in t)t.hasOwnProperty(l)&&_c(e,l,t[l])}function tr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ef=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),tf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Un(e){return tf.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var ar=null;function ir(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Va=null,Za=null;function Cc(e){var t=qa(e);if(t&&(e=t.stateNode)){var a=e[Je]||null;e:switch(e=t.stateNode,t.type){case"input":if(Il(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+dt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var i=a[t];if(i!==e&&i.form===e.form){var n=i[Je]||null;if(!n)throw Error(d(90));Il(i,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)i=a[t],i.form===e.form&&Mc(i)}break e;case"textarea":Uc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Qa(e,!!a.multiple,t,!1)}}}var nr=!1;function Bc(e,t,a){if(nr)return e(t,a);nr=!0;try{var i=e(t);return i}finally{if(nr=!1,(Va!==null||Za!==null)&&(bl(),Va&&(t=Va,e=Za,Za=Va=null,Cc(t),e)))for(t=0;t<e.length;t++)Cc(e[t])}}function Ai(e,t){var a=e.stateNode;if(a===null)return null;var i=a[Je]||null;if(i===null)return null;a=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(d(231,t,typeof a));return a}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lr=!1;if(Ot)try{var Ti={};Object.defineProperty(Ti,"passive",{get:function(){lr=!0}}),window.addEventListener("test",Ti,Ti),window.removeEventListener("test",Ti,Ti)}catch{lr=!1}var Pt=null,rr=null,On=null;function Gc(){if(On)return On;var e,t=rr,a=t.length,i,n="value"in Pt?Pt.value:Pt.textContent,l=n.length;for(e=0;e<a&&t[e]===n[e];e++);var r=a-e;for(i=1;i<=r&&t[a-i]===n[l-i];i++);return On=n.slice(e,1<i?1-i:void 0)}function _n(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Rn(){return!0}function qc(){return!1}function $e(e){function t(a,i,n,l,r){this._reactName=a,this._targetInst=n,this.type=i,this.nativeEvent=l,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(a=e[o],this[o]=a?a(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Rn:qc,this.isPropagationStopped=qc,this}return _(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Rn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Rn)},persist:function(){},isPersistent:Rn}),t}var ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cn=$e(ka),Mi=_({},ka,{view:0,detail:0}),af=$e(Mi),or,cr,Ni,Bn=_({},Mi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ni&&(Ni&&e.type==="mousemove"?(or=e.screenX-Ni.screenX,cr=e.screenY-Ni.screenY):cr=or=0,Ni=e),or)},movementY:function(e){return"movementY"in e?e.movementY:cr}}),Hc=$e(Bn),nf=_({},Bn,{dataTransfer:0}),lf=$e(nf),rf=_({},Mi,{relatedTarget:0}),ur=$e(rf),of=_({},ka,{animationName:0,elapsedTime:0,pseudoElement:0}),cf=$e(of),uf=_({},ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sf=$e(uf),df=_({},ka,{data:0}),Yc=$e(df),mf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ff={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gf[e])?!!t[e]:!1}function sr(){return pf}var hf=_({},Mi,{key:function(e){if(e.key){var t=mf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_n(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ff[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sr,charCode:function(e){return e.type==="keypress"?_n(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_n(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bf=$e(hf),vf=_({},Bn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xc=$e(vf),yf=_({},Mi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sr}),xf=$e(yf),kf=_({},ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),zf=$e(kf),Sf=_({},Bn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jf=$e(Sf),Ef=_({},ka,{newState:0,oldState:0}),Df=$e(Ef),wf=[9,13,27,32],dr=Ot&&"CompositionEvent"in window,Ui=null;Ot&&"documentMode"in document&&(Ui=document.documentMode);var Af=Ot&&"TextEvent"in window&&!Ui,Qc=Ot&&(!dr||Ui&&8<Ui&&11>=Ui),Lc=" ",Vc=!1;function Zc(e,t){switch(e){case"keyup":return wf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ka=!1;function Tf(e,t){switch(e){case"compositionend":return Kc(t);case"keypress":return t.which!==32?null:(Vc=!0,Lc);case"textInput":return e=t.data,e===Lc&&Vc?null:e;default:return null}}function Mf(e,t){if(Ka)return e==="compositionend"||!dr&&Zc(e,t)?(e=Gc(),On=rr=Pt=null,Ka=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qc&&t.locale!=="ko"?null:t.data;default:return null}}var Nf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Nf[e.type]:t==="textarea"}function $c(e,t,a,i){Va?Za?Za.push(i):Za=[i]:Va=i,t=Sl(t,"onChange"),0<t.length&&(a=new Cn("onChange","change",null,a,i),e.push({event:a,listeners:t}))}var Oi=null,_i=null;function Uf(e){Td(e,0)}function Gn(e){var t=wi(e);if(Mc(t))return e}function Pc(e,t){if(e==="change")return t}var Wc=!1;if(Ot){var mr;if(Ot){var fr="oninput"in document;if(!fr){var Fc=document.createElement("div");Fc.setAttribute("oninput","return;"),fr=typeof Fc.oninput=="function"}mr=fr}else mr=!1;Wc=mr&&(!document.documentMode||9<document.documentMode)}function Ic(){Oi&&(Oi.detachEvent("onpropertychange",eu),_i=Oi=null)}function eu(e){if(e.propertyName==="value"&&Gn(_i)){var t=[];$c(t,_i,e,ir(e)),Bc(Uf,t)}}function Of(e,t,a){e==="focusin"?(Ic(),Oi=t,_i=a,Oi.attachEvent("onpropertychange",eu)):e==="focusout"&&Ic()}function _f(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gn(_i)}function Rf(e,t){if(e==="click")return Gn(t)}function Cf(e,t){if(e==="input"||e==="change")return Gn(t)}function Bf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var at=typeof Object.is=="function"?Object.is:Bf;function Ri(e,t){if(at(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var n=a[i];if(!Xl.call(t,n)||!at(e[n],t[n]))return!1}return!0}function tu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function au(e,t){var a=tu(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=t&&i>=t)return{node:a,offset:t-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=tu(a)}}function iu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?iu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function nu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Nn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Nn(e.document)}return t}function gr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Gf=Ot&&"documentMode"in document&&11>=document.documentMode,Ja=null,pr=null,Ci=null,hr=!1;function lu(e,t,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hr||Ja==null||Ja!==Nn(i)||(i=Ja,"selectionStart"in i&&gr(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ci&&Ri(Ci,i)||(Ci=i,i=Sl(pr,"onSelect"),0<i.length&&(t=new Cn("onSelect","select",null,t,a),e.push({event:t,listeners:i}),t.target=Ja)))}function za(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var $a={animationend:za("Animation","AnimationEnd"),animationiteration:za("Animation","AnimationIteration"),animationstart:za("Animation","AnimationStart"),transitionrun:za("Transition","TransitionRun"),transitionstart:za("Transition","TransitionStart"),transitioncancel:za("Transition","TransitionCancel"),transitionend:za("Transition","TransitionEnd")},br={},ru={};Ot&&(ru=document.createElement("div").style,"AnimationEvent"in window||(delete $a.animationend.animation,delete $a.animationiteration.animation,delete $a.animationstart.animation),"TransitionEvent"in window||delete $a.transitionend.transition);function Sa(e){if(br[e])return br[e];if(!$a[e])return e;var t=$a[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in ru)return br[e]=t[a];return e}var ou=Sa("animationend"),cu=Sa("animationiteration"),uu=Sa("animationstart"),qf=Sa("transitionrun"),Hf=Sa("transitionstart"),Yf=Sa("transitioncancel"),su=Sa("transitionend"),du=new Map,vr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vr.push("scrollEnd");function xt(e,t){du.set(e,t),xa(t,[e])}var mu=new WeakMap;function mt(e,t){if(typeof e=="object"&&e!==null){var a=mu.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Ac(t)},mu.set(e,t),t)}return{value:e,source:t,stack:Ac(t)}}var ft=[],Pa=0,yr=0;function qn(){for(var e=Pa,t=yr=Pa=0;t<e;){var a=ft[t];ft[t++]=null;var i=ft[t];ft[t++]=null;var n=ft[t];ft[t++]=null;var l=ft[t];if(ft[t++]=null,i!==null&&n!==null){var r=i.pending;r===null?n.next=n:(n.next=r.next,r.next=n),i.pending=n}l!==0&&fu(a,n,l)}}function Hn(e,t,a,i){ft[Pa++]=e,ft[Pa++]=t,ft[Pa++]=a,ft[Pa++]=i,yr|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function xr(e,t,a,i){return Hn(e,t,a,i),Yn(e)}function Wa(e,t){return Hn(e,null,null,t),Yn(e)}function fu(e,t,a){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a);for(var n=!1,l=e.return;l!==null;)l.childLanes|=a,i=l.alternate,i!==null&&(i.childLanes|=a),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(n=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,n&&t!==null&&(n=31-tt(a),e=l.hiddenUpdates,i=e[n],i===null?e[n]=[t]:i.push(t),t.lane=a|536870912),l):null}function Yn(e){if(50<cn)throw cn=0,wo=null,Error(d(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Fa={};function Xf(e,t,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,t,a,i){return new Xf(e,t,a,i)}function kr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _t(e,t){var a=e.alternate;return a===null?(a=it(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function gu(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Xn(e,t,a,i,n,l){var r=0;if(i=e,typeof e=="function")kr(e)&&(r=1);else if(typeof e=="string")r=Lg(e,a,H.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ye:return e=it(31,a,t,n),e.elementType=Ye,e.lanes=l,e;case re:return ja(a.children,n,l,t);case we:r=8,n|=24;break;case $:return e=it(12,a,t,n|2),e.elementType=$,e.lanes=l,e;case J:return e=it(13,a,t,n),e.elementType=J,e.lanes=l,e;case Ne:return e=it(19,a,t,n),e.elementType=Ne,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ve:case be:r=10;break e;case V:r=9;break e;case he:r=11;break e;case Ae:r=14;break e;case Ze:r=16,i=null;break e}r=29,a=Error(d(130,e===null?"null":typeof e,"")),i=null}return t=it(r,a,t,n),t.elementType=e,t.type=i,t.lanes=l,t}function ja(e,t,a,i){return e=it(7,e,i,t),e.lanes=a,e}function zr(e,t,a){return e=it(6,e,null,t),e.lanes=a,e}function Sr(e,t,a){return t=it(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ia=[],ei=0,Qn=null,Ln=0,gt=[],pt=0,Ea=null,Rt=1,Ct="";function Da(e,t){Ia[ei++]=Ln,Ia[ei++]=Qn,Qn=e,Ln=t}function pu(e,t,a){gt[pt++]=Rt,gt[pt++]=Ct,gt[pt++]=Ea,Ea=e;var i=Rt;e=Ct;var n=32-tt(i)-1;i&=~(1<<n),a+=1;var l=32-tt(t)+n;if(30<l){var r=n-n%5;l=(i&(1<<r)-1).toString(32),i>>=r,n-=r,Rt=1<<32-tt(t)+n|a<<n|i,Ct=l+e}else Rt=1<<l|a<<n|i,Ct=e}function jr(e){e.return!==null&&(Da(e,1),pu(e,1,0))}function Er(e){for(;e===Qn;)Qn=Ia[--ei],Ia[ei]=null,Ln=Ia[--ei],Ia[ei]=null;for(;e===Ea;)Ea=gt[--pt],gt[pt]=null,Ct=gt[--pt],gt[pt]=null,Rt=gt[--pt],gt[pt]=null}var Ke=null,ke=null,le=!1,wa=null,Et=!1,Dr=Error(d(519));function Aa(e){var t=Error(d(418,""));throw qi(mt(t,e)),Dr}function hu(e){var t=e.stateNode,a=e.type,i=e.memoizedProps;switch(t[Xe]=e,t[Je]=i,a){case"dialog":ee("cancel",t),ee("close",t);break;case"iframe":case"object":case"embed":ee("load",t);break;case"video":case"audio":for(a=0;a<sn.length;a++)ee(sn[a],t);break;case"source":ee("error",t);break;case"img":case"image":case"link":ee("error",t),ee("load",t);break;case"details":ee("toggle",t);break;case"input":ee("invalid",t),Nc(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),Mn(t);break;case"select":ee("invalid",t);break;case"textarea":ee("invalid",t),Oc(t,i.value,i.defaultValue,i.children),Mn(t)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||i.suppressHydrationWarning===!0||Od(t.textContent,a)?(i.popover!=null&&(ee("beforetoggle",t),ee("toggle",t)),i.onScroll!=null&&ee("scroll",t),i.onScrollEnd!=null&&ee("scrollend",t),i.onClick!=null&&(t.onclick=jl),t=!0):t=!1,t||Aa(e)}function bu(e){for(Ke=e.return;Ke;)switch(Ke.tag){case 5:case 13:Et=!1;return;case 27:case 3:Et=!0;return;default:Ke=Ke.return}}function Bi(e){if(e!==Ke)return!1;if(!le)return bu(e),le=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Qo(e.type,e.memoizedProps)),a=!a),a&&ke&&Aa(e),bu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){ke=zt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}ke=null}}else t===27?(t=ke,ma(e.type)?(e=Ko,Ko=null,ke=e):ke=t):ke=Ke?zt(e.stateNode.nextSibling):null;return!0}function Gi(){ke=Ke=null,le=!1}function vu(){var e=wa;return e!==null&&(Fe===null?Fe=e:Fe.push.apply(Fe,e),wa=null),e}function qi(e){wa===null?wa=[e]:wa.push(e)}var wr=y(null),Ta=null,Bt=null;function Wt(e,t,a){N(wr,t._currentValue),t._currentValue=a}function Gt(e){e._currentValue=wr.current,D(wr)}function Ar(e,t,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===a)break;e=e.return}}function Tr(e,t,a,i){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var l=n.dependencies;if(l!==null){var r=n.child;l=l.firstContext;e:for(;l!==null;){var o=l;l=n;for(var s=0;s<t.length;s++)if(o.context===t[s]){l.lanes|=a,o=l.alternate,o!==null&&(o.lanes|=a),Ar(l.return,a,e),i||(r=null);break e}l=o.next}}else if(n.tag===18){if(r=n.return,r===null)throw Error(d(341));r.lanes|=a,l=r.alternate,l!==null&&(l.lanes|=a),Ar(r,a,e),r=null}else r=n.child;if(r!==null)r.return=n;else for(r=n;r!==null;){if(r===e){r=null;break}if(n=r.sibling,n!==null){n.return=r.return,r=n;break}r=r.return}n=r}}function Hi(e,t,a,i){e=null;for(var n=t,l=!1;n!==null;){if(!l){if((n.flags&524288)!==0)l=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var r=n.alternate;if(r===null)throw Error(d(387));if(r=r.memoizedProps,r!==null){var o=n.type;at(n.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(n===Ie.current){if(r=n.alternate,r===null)throw Error(d(387));r.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(hn):e=[hn])}n=n.return}e!==null&&Tr(t,e,a,i),t.flags|=262144}function Vn(e){for(e=e.firstContext;e!==null;){if(!at(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ma(e){Ta=e,Bt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Qe(e){return yu(Ta,e)}function Zn(e,t){return Ta===null&&Ma(e),yu(e,t)}function yu(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Bt===null){if(e===null)throw Error(d(308));Bt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Bt=Bt.next=t;return a}var Qf=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Lf=p.unstable_scheduleCallback,Vf=p.unstable_NormalPriority,Te={$$typeof:be,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mr(){return{controller:new Qf,data:new Map,refCount:0}}function Yi(e){e.refCount--,e.refCount===0&&Lf(Vf,function(){e.controller.abort()})}var Xi=null,Nr=0,ti=0,ai=null;function Zf(e,t){if(Xi===null){var a=Xi=[];Nr=0,ti=_o(),ai={status:"pending",value:void 0,then:function(i){a.push(i)}}}return Nr++,t.then(xu,xu),t}function xu(){if(--Nr===0&&Xi!==null){ai!==null&&(ai.status="fulfilled");var e=Xi;Xi=null,ti=0,ai=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Kf(e,t){var a=[],i={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(i.status="rejected",i.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),i}var ku=x.S;x.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Zf(e,t),ku!==null&&ku(e,t)};var Na=y(null);function Ur(){var e=Na.current;return e!==null?e:ge.pooledCache}function Kn(e,t){t===null?N(Na,Na.current):N(Na,t.pool)}function zu(){var e=Ur();return e===null?null:{parent:Te._currentValue,pool:e}}var Qi=Error(d(460)),Su=Error(d(474)),Jn=Error(d(542)),Or={then:function(){}};function ju(e){return e=e.status,e==="fulfilled"||e==="rejected"}function $n(){}function Eu(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then($n,$n),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,wu(e),e;default:if(typeof t.status=="string")t.then($n,$n);else{if(e=ge,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=i}},function(i){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,wu(e),e}throw Li=t,Qi}}var Li=null;function Du(){if(Li===null)throw Error(d(459));var e=Li;return Li=null,e}function wu(e){if(e===Qi||e===Jn)throw Error(d(483))}var Ft=!1;function _r(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Rr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function It(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ea(e,t,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(oe&2)!==0){var n=i.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),i.pending=t,t=Yn(e),fu(e,null,a),t}return Hn(e,i,t,a),Yn(e)}function Vi(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,xc(e,a)}}function Cr(e,t){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var n=null,l=null;if(a=a.firstBaseUpdate,a!==null){do{var r={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};l===null?n=l=r:l=l.next=r,a=a.next}while(a!==null);l===null?n=l=t:l=l.next=t}else n=l=t;a={baseState:i.baseState,firstBaseUpdate:n,lastBaseUpdate:l,shared:i.shared,callbacks:i.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Br=!1;function Zi(){if(Br){var e=ai;if(e!==null)throw e}}function Ki(e,t,a,i){Br=!1;var n=e.updateQueue;Ft=!1;var l=n.firstBaseUpdate,r=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var s=o,h=s.next;s.next=null,r===null?l=h:r.next=h,r=s;var k=e.alternate;k!==null&&(k=k.updateQueue,o=k.lastBaseUpdate,o!==r&&(o===null?k.firstBaseUpdate=h:o.next=h,k.lastBaseUpdate=s))}if(l!==null){var j=n.baseState;r=0,k=h=s=null,o=l;do{var b=o.lane&-536870913,v=b!==o.lane;if(v?(te&b)===b:(i&b)===b){b!==0&&b===ti&&(Br=!0),k!==null&&(k=k.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var Z=e,Y=o;b=t;var de=a;switch(Y.tag){case 1:if(Z=Y.payload,typeof Z=="function"){j=Z.call(de,j,b);break e}j=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=Y.payload,b=typeof Z=="function"?Z.call(de,j,b):Z,b==null)break e;j=_({},j,b);break e;case 2:Ft=!0}}b=o.callback,b!==null&&(e.flags|=64,v&&(e.flags|=8192),v=n.callbacks,v===null?n.callbacks=[b]:v.push(b))}else v={lane:b,tag:o.tag,payload:o.payload,callback:o.callback,next:null},k===null?(h=k=v,s=j):k=k.next=v,r|=b;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;v=o,o=v.next,v.next=null,n.lastBaseUpdate=v,n.shared.pending=null}}while(!0);k===null&&(s=j),n.baseState=s,n.firstBaseUpdate=h,n.lastBaseUpdate=k,l===null&&(n.shared.lanes=0),ca|=r,e.lanes=r,e.memoizedState=j}}function Au(e,t){if(typeof e!="function")throw Error(d(191,e));e.call(t)}function Tu(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Au(a[e],t)}var ii=y(null),Pn=y(0);function Mu(e,t){e=Vt,N(Pn,e),N(ii,t),Vt=e|t.baseLanes}function Gr(){N(Pn,Vt),N(ii,ii.current)}function qr(){Vt=Pn.current,D(ii),D(Pn)}var ta=0,W=null,ue=null,Ee=null,Wn=!1,ni=!1,Ua=!1,Fn=0,Ji=0,li=null,Jf=0;function Se(){throw Error(d(321))}function Hr(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!at(e[a],t[a]))return!1;return!0}function Yr(e,t,a,i,n,l){return ta=l,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,x.H=e===null||e.memoizedState===null?fs:gs,Ua=!1,l=a(i,n),Ua=!1,ni&&(l=Uu(t,a,i,n)),Nu(e),l}function Nu(e){x.H=nl;var t=ue!==null&&ue.next!==null;if(ta=0,Ee=ue=W=null,Wn=!1,Ji=0,li=null,t)throw Error(d(300));e===null||Re||(e=e.dependencies,e!==null&&Vn(e)&&(Re=!0))}function Uu(e,t,a,i){W=e;var n=0;do{if(ni&&(li=null),Ji=0,ni=!1,25<=n)throw Error(d(301));if(n+=1,Ee=ue=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}x.H=tg,l=t(a,i)}while(ni);return l}function $f(){var e=x.H,t=e.useState()[0];return t=typeof t.then=="function"?$i(t):t,e=e.useState()[0],(ue!==null?ue.memoizedState:null)!==e&&(W.flags|=1024),t}function Xr(){var e=Fn!==0;return Fn=0,e}function Qr(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Lr(e){if(Wn){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Wn=!1}ta=0,Ee=ue=W=null,ni=!1,Ji=Fn=0,li=null}function Pe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?W.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function De(){if(ue===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=Ee===null?W.memoizedState:Ee.next;if(t!==null)Ee=t,ue=e;else{if(e===null)throw W.alternate===null?Error(d(467)):Error(d(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},Ee===null?W.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function Vr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $i(e){var t=Ji;return Ji+=1,li===null&&(li=[]),e=Eu(li,e,t),t=W,(Ee===null?t.memoizedState:Ee.next)===null&&(t=t.alternate,x.H=t===null||t.memoizedState===null?fs:gs),e}function In(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return $i(e);if(e.$$typeof===be)return Qe(e)}throw Error(d(438,String(e)))}function Zr(e){var t=null,a=W.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var i=W.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Vr(),W.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),i=0;i<e;i++)a[i]=St;return t.index++,a}function qt(e,t){return typeof t=="function"?t(e):t}function el(e){var t=De();return Kr(t,ue,e)}function Kr(e,t,a){var i=e.queue;if(i===null)throw Error(d(311));i.lastRenderedReducer=a;var n=e.baseQueue,l=i.pending;if(l!==null){if(n!==null){var r=n.next;n.next=l.next,l.next=r}t.baseQueue=n=l,i.pending=null}if(l=e.baseState,n===null)e.memoizedState=l;else{t=n.next;var o=r=null,s=null,h=t,k=!1;do{var j=h.lane&-536870913;if(j!==h.lane?(te&j)===j:(ta&j)===j){var b=h.revertLane;if(b===0)s!==null&&(s=s.next={lane:0,revertLane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),j===ti&&(k=!0);else if((ta&b)===b){h=h.next,b===ti&&(k=!0);continue}else j={lane:0,revertLane:h.revertLane,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},s===null?(o=s=j,r=l):s=s.next=j,W.lanes|=b,ca|=b;j=h.action,Ua&&a(l,j),l=h.hasEagerState?h.eagerState:a(l,j)}else b={lane:j,revertLane:h.revertLane,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},s===null?(o=s=b,r=l):s=s.next=b,W.lanes|=j,ca|=j;h=h.next}while(h!==null&&h!==t);if(s===null?r=l:s.next=o,!at(l,e.memoizedState)&&(Re=!0,k&&(a=ai,a!==null)))throw a;e.memoizedState=l,e.baseState=r,e.baseQueue=s,i.lastRenderedState=l}return n===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Jr(e){var t=De(),a=t.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=e;var i=a.dispatch,n=a.pending,l=t.memoizedState;if(n!==null){a.pending=null;var r=n=n.next;do l=e(l,r.action),r=r.next;while(r!==n);at(l,t.memoizedState)||(Re=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),a.lastRenderedState=l}return[l,i]}function Ou(e,t,a){var i=W,n=De(),l=le;if(l){if(a===void 0)throw Error(d(407));a=a()}else a=t();var r=!at((ue||n).memoizedState,a);r&&(n.memoizedState=a,Re=!0),n=n.queue;var o=Cu.bind(null,i,n,e);if(Pi(2048,8,o,[e]),n.getSnapshot!==t||r||Ee!==null&&Ee.memoizedState.tag&1){if(i.flags|=2048,ri(9,tl(),Ru.bind(null,i,n,a,t),null),ge===null)throw Error(d(349));l||(ta&124)!==0||_u(i,t,a)}return a}function _u(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=W.updateQueue,t===null?(t=Vr(),W.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Ru(e,t,a,i){t.value=a,t.getSnapshot=i,Bu(t)&&Gu(e)}function Cu(e,t,a){return a(function(){Bu(t)&&Gu(e)})}function Bu(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!at(e,a)}catch{return!0}}function Gu(e){var t=Wa(e,2);t!==null&&ct(t,e,2)}function $r(e){var t=Pe();if(typeof e=="function"){var a=e;if(e=a(),Ua){Jt(!0);try{a()}finally{Jt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:e},t}function qu(e,t,a,i){return e.baseState=a,Kr(e,ue,typeof i=="function"?i:qt)}function Pf(e,t,a,i,n){if(il(e))throw Error(d(485));if(e=t.action,e!==null){var l={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){l.listeners.push(r)}};x.T!==null?a(!0):l.isTransition=!1,i(l),a=t.pending,a===null?(l.next=t.pending=l,Hu(t,l)):(l.next=a.next,t.pending=a.next=l)}}function Hu(e,t){var a=t.action,i=t.payload,n=e.state;if(t.isTransition){var l=x.T,r={};x.T=r;try{var o=a(n,i),s=x.S;s!==null&&s(r,o),Yu(e,t,o)}catch(h){Pr(e,t,h)}finally{x.T=l}}else try{l=a(n,i),Yu(e,t,l)}catch(h){Pr(e,t,h)}}function Yu(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){Xu(e,t,i)},function(i){return Pr(e,t,i)}):Xu(e,t,a)}function Xu(e,t,a){t.status="fulfilled",t.value=a,Qu(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Hu(e,a)))}function Pr(e,t,a){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=a,Qu(t),t=t.next;while(t!==i)}e.action=null}function Qu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Lu(e,t){return t}function Vu(e,t){if(le){var a=ge.formState;if(a!==null){e:{var i=W;if(le){if(ke){t:{for(var n=ke,l=Et;n.nodeType!==8;){if(!l){n=null;break t}if(n=zt(n.nextSibling),n===null){n=null;break t}}l=n.data,n=l==="F!"||l==="F"?n:null}if(n){ke=zt(n.nextSibling),i=n.data==="F!";break e}}Aa(i)}i=!1}i&&(t=a[0])}}return a=Pe(),a.memoizedState=a.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lu,lastRenderedState:t},a.queue=i,a=ss.bind(null,W,i),i.dispatch=a,i=$r(!1),l=to.bind(null,W,!1,i.queue),i=Pe(),n={state:t,dispatch:null,action:e,pending:null},i.queue=n,a=Pf.bind(null,W,n,l,a),n.dispatch=a,i.memoizedState=e,[t,a,!1]}function Zu(e){var t=De();return Ku(t,ue,e)}function Ku(e,t,a){if(t=Kr(e,t,Lu)[0],e=el(qt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=$i(t)}catch(r){throw r===Qi?Jn:r}else i=t;t=De();var n=t.queue,l=n.dispatch;return a!==t.memoizedState&&(W.flags|=2048,ri(9,tl(),Wf.bind(null,n,a),null)),[i,l,e]}function Wf(e,t){e.action=t}function Ju(e){var t=De(),a=ue;if(a!==null)return Ku(t,a,e);De(),t=t.memoizedState,a=De();var i=a.queue.dispatch;return a.memoizedState=e,[t,i,!1]}function ri(e,t,a,i){return e={tag:e,create:a,deps:i,inst:t,next:null},t=W.updateQueue,t===null&&(t=Vr(),W.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,t.lastEffect=e),e}function tl(){return{destroy:void 0,resource:void 0}}function $u(){return De().memoizedState}function al(e,t,a,i){var n=Pe();i=i===void 0?null:i,W.flags|=e,n.memoizedState=ri(1|t,tl(),a,i)}function Pi(e,t,a,i){var n=De();i=i===void 0?null:i;var l=n.memoizedState.inst;ue!==null&&i!==null&&Hr(i,ue.memoizedState.deps)?n.memoizedState=ri(t,l,a,i):(W.flags|=e,n.memoizedState=ri(1|t,l,a,i))}function Pu(e,t){al(8390656,8,e,t)}function Wu(e,t){Pi(2048,8,e,t)}function Fu(e,t){return Pi(4,2,e,t)}function Iu(e,t){return Pi(4,4,e,t)}function es(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ts(e,t,a){a=a!=null?a.concat([e]):null,Pi(4,4,es.bind(null,t,e),a)}function Wr(){}function as(e,t){var a=De();t=t===void 0?null:t;var i=a.memoizedState;return t!==null&&Hr(t,i[1])?i[0]:(a.memoizedState=[e,t],e)}function is(e,t){var a=De();t=t===void 0?null:t;var i=a.memoizedState;if(t!==null&&Hr(t,i[1]))return i[0];if(i=e(),Ua){Jt(!0);try{e()}finally{Jt(!1)}}return a.memoizedState=[i,t],i}function Fr(e,t,a){return a===void 0||(ta&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=rd(),W.lanes|=e,ca|=e,a)}function ns(e,t,a,i){return at(a,t)?a:ii.current!==null?(e=Fr(e,a,i),at(e,t)||(Re=!0),e):(ta&42)===0?(Re=!0,e.memoizedState=a):(e=rd(),W.lanes|=e,ca|=e,t)}function ls(e,t,a,i,n){var l=M.p;M.p=l!==0&&8>l?l:8;var r=x.T,o={};x.T=o,to(e,!1,t,a);try{var s=n(),h=x.S;if(h!==null&&h(o,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var k=Kf(s,i);Wi(e,t,k,ot(e))}else Wi(e,t,i,ot(e))}catch(j){Wi(e,t,{then:function(){},status:"rejected",reason:j},ot())}finally{M.p=l,x.T=r}}function Ff(){}function Ir(e,t,a,i){if(e.tag!==5)throw Error(d(476));var n=rs(e).queue;ls(e,n,t,q,a===null?Ff:function(){return os(e),a(i)})}function rs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:q},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function os(e){var t=rs(e).next.queue;Wi(e,t,{},ot())}function eo(){return Qe(hn)}function cs(){return De().memoizedState}function us(){return De().memoizedState}function If(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=ot();e=It(a);var i=ea(t,e,a);i!==null&&(ct(i,t,a),Vi(i,t,a)),t={cache:Mr()},e.payload=t;return}t=t.return}}function eg(e,t,a){var i=ot();a={lane:i,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},il(e)?ds(t,a):(a=xr(e,t,a,i),a!==null&&(ct(a,e,i),ms(a,t,i)))}function ss(e,t,a){var i=ot();Wi(e,t,a,i)}function Wi(e,t,a,i){var n={lane:i,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(il(e))ds(t,n);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var r=t.lastRenderedState,o=l(r,a);if(n.hasEagerState=!0,n.eagerState=o,at(o,r))return Hn(e,t,n,0),ge===null&&qn(),!1}catch{}finally{}if(a=xr(e,t,n,i),a!==null)return ct(a,e,i),ms(a,t,i),!0}return!1}function to(e,t,a,i){if(i={lane:2,revertLane:_o(),action:i,hasEagerState:!1,eagerState:null,next:null},il(e)){if(t)throw Error(d(479))}else t=xr(e,a,i,2),t!==null&&ct(t,e,2)}function il(e){var t=e.alternate;return e===W||t!==null&&t===W}function ds(e,t){ni=Wn=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function ms(e,t,a){if((a&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,xc(e,a)}}var nl={readContext:Qe,use:In,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useLayoutEffect:Se,useInsertionEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useSyncExternalStore:Se,useId:Se,useHostTransitionStatus:Se,useFormState:Se,useActionState:Se,useOptimistic:Se,useMemoCache:Se,useCacheRefresh:Se},fs={readContext:Qe,use:In,useCallback:function(e,t){return Pe().memoizedState=[e,t===void 0?null:t],e},useContext:Qe,useEffect:Pu,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,al(4194308,4,es.bind(null,t,e),a)},useLayoutEffect:function(e,t){return al(4194308,4,e,t)},useInsertionEffect:function(e,t){al(4,2,e,t)},useMemo:function(e,t){var a=Pe();t=t===void 0?null:t;var i=e();if(Ua){Jt(!0);try{e()}finally{Jt(!1)}}return a.memoizedState=[i,t],i},useReducer:function(e,t,a){var i=Pe();if(a!==void 0){var n=a(t);if(Ua){Jt(!0);try{a(t)}finally{Jt(!1)}}}else n=t;return i.memoizedState=i.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},i.queue=e,e=e.dispatch=eg.bind(null,W,e),[i.memoizedState,e]},useRef:function(e){var t=Pe();return e={current:e},t.memoizedState=e},useState:function(e){e=$r(e);var t=e.queue,a=ss.bind(null,W,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Wr,useDeferredValue:function(e,t){var a=Pe();return Fr(a,e,t)},useTransition:function(){var e=$r(!1);return e=ls.bind(null,W,e.queue,!0,!1),Pe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var i=W,n=Pe();if(le){if(a===void 0)throw Error(d(407));a=a()}else{if(a=t(),ge===null)throw Error(d(349));(te&124)!==0||_u(i,t,a)}n.memoizedState=a;var l={value:a,getSnapshot:t};return n.queue=l,Pu(Cu.bind(null,i,l,e),[e]),i.flags|=2048,ri(9,tl(),Ru.bind(null,i,l,a,t),null),a},useId:function(){var e=Pe(),t=ge.identifierPrefix;if(le){var a=Ct,i=Rt;a=(i&~(1<<32-tt(i)-1)).toString(32)+a,t="«"+t+"R"+a,a=Fn++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=Jf++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:eo,useFormState:Vu,useActionState:Vu,useOptimistic:function(e){var t=Pe();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=to.bind(null,W,!0,a),a.dispatch=t,[e,t]},useMemoCache:Zr,useCacheRefresh:function(){return Pe().memoizedState=If.bind(null,W)}},gs={readContext:Qe,use:In,useCallback:as,useContext:Qe,useEffect:Wu,useImperativeHandle:ts,useInsertionEffect:Fu,useLayoutEffect:Iu,useMemo:is,useReducer:el,useRef:$u,useState:function(){return el(qt)},useDebugValue:Wr,useDeferredValue:function(e,t){var a=De();return ns(a,ue.memoizedState,e,t)},useTransition:function(){var e=el(qt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:$i(e),t]},useSyncExternalStore:Ou,useId:cs,useHostTransitionStatus:eo,useFormState:Zu,useActionState:Zu,useOptimistic:function(e,t){var a=De();return qu(a,ue,e,t)},useMemoCache:Zr,useCacheRefresh:us},tg={readContext:Qe,use:In,useCallback:as,useContext:Qe,useEffect:Wu,useImperativeHandle:ts,useInsertionEffect:Fu,useLayoutEffect:Iu,useMemo:is,useReducer:Jr,useRef:$u,useState:function(){return Jr(qt)},useDebugValue:Wr,useDeferredValue:function(e,t){var a=De();return ue===null?Fr(a,e,t):ns(a,ue.memoizedState,e,t)},useTransition:function(){var e=Jr(qt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:$i(e),t]},useSyncExternalStore:Ou,useId:cs,useHostTransitionStatus:eo,useFormState:Ju,useActionState:Ju,useOptimistic:function(e,t){var a=De();return ue!==null?qu(a,ue,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Zr,useCacheRefresh:us},oi=null,Fi=0;function ll(e){var t=Fi;return Fi+=1,oi===null&&(oi=[]),Eu(oi,e,t)}function Ii(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function rl(e,t){throw t.$$typeof===Q?Error(d(525)):(e=Object.prototype.toString.call(t),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ps(e){var t=e._init;return t(e._payload)}function hs(e){function t(f,m){if(e){var g=f.deletions;g===null?(f.deletions=[m],f.flags|=16):g.push(m)}}function a(f,m){if(!e)return null;for(;m!==null;)t(f,m),m=m.sibling;return null}function i(f){for(var m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function n(f,m){return f=_t(f,m),f.index=0,f.sibling=null,f}function l(f,m,g){return f.index=g,e?(g=f.alternate,g!==null?(g=g.index,g<m?(f.flags|=67108866,m):g):(f.flags|=67108866,m)):(f.flags|=1048576,m)}function r(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function o(f,m,g,z){return m===null||m.tag!==6?(m=zr(g,f.mode,z),m.return=f,m):(m=n(m,g),m.return=f,m)}function s(f,m,g,z){var R=g.type;return R===re?k(f,m,g.props.children,z,g.key):m!==null&&(m.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ze&&ps(R)===m.type)?(m=n(m,g.props),Ii(m,g),m.return=f,m):(m=Xn(g.type,g.key,g.props,null,f.mode,z),Ii(m,g),m.return=f,m)}function h(f,m,g,z){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=Sr(g,f.mode,z),m.return=f,m):(m=n(m,g.children||[]),m.return=f,m)}function k(f,m,g,z,R){return m===null||m.tag!==7?(m=ja(g,f.mode,z,R),m.return=f,m):(m=n(m,g),m.return=f,m)}function j(f,m,g){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=zr(""+m,f.mode,g),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case L:return g=Xn(m.type,m.key,m.props,null,f.mode,g),Ii(g,m),g.return=f,g;case fe:return m=Sr(m,f.mode,g),m.return=f,m;case Ze:var z=m._init;return m=z(m._payload),j(f,m,g)}if(Oe(m)||Ue(m))return m=ja(m,f.mode,g,null),m.return=f,m;if(typeof m.then=="function")return j(f,ll(m),g);if(m.$$typeof===be)return j(f,Zn(f,m),g);rl(f,m)}return null}function b(f,m,g,z){var R=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return R!==null?null:o(f,m,""+g,z);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case L:return g.key===R?s(f,m,g,z):null;case fe:return g.key===R?h(f,m,g,z):null;case Ze:return R=g._init,g=R(g._payload),b(f,m,g,z)}if(Oe(g)||Ue(g))return R!==null?null:k(f,m,g,z,null);if(typeof g.then=="function")return b(f,m,ll(g),z);if(g.$$typeof===be)return b(f,m,Zn(f,g),z);rl(f,g)}return null}function v(f,m,g,z,R){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return f=f.get(g)||null,o(m,f,""+z,R);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case L:return f=f.get(z.key===null?g:z.key)||null,s(m,f,z,R);case fe:return f=f.get(z.key===null?g:z.key)||null,h(m,f,z,R);case Ze:var F=z._init;return z=F(z._payload),v(f,m,g,z,R)}if(Oe(z)||Ue(z))return f=f.get(g)||null,k(m,f,z,R,null);if(typeof z.then=="function")return v(f,m,g,ll(z),R);if(z.$$typeof===be)return v(f,m,g,Zn(m,z),R);rl(m,z)}return null}function Z(f,m,g,z){for(var R=null,F=null,B=m,X=m=0,Be=null;B!==null&&X<g.length;X++){B.index>X?(Be=B,B=null):Be=B.sibling;var ie=b(f,B,g[X],z);if(ie===null){B===null&&(B=Be);break}e&&B&&ie.alternate===null&&t(f,B),m=l(ie,m,X),F===null?R=ie:F.sibling=ie,F=ie,B=Be}if(X===g.length)return a(f,B),le&&Da(f,X),R;if(B===null){for(;X<g.length;X++)B=j(f,g[X],z),B!==null&&(m=l(B,m,X),F===null?R=B:F.sibling=B,F=B);return le&&Da(f,X),R}for(B=i(B);X<g.length;X++)Be=v(B,f,X,g[X],z),Be!==null&&(e&&Be.alternate!==null&&B.delete(Be.key===null?X:Be.key),m=l(Be,m,X),F===null?R=Be:F.sibling=Be,F=Be);return e&&B.forEach(function(ba){return t(f,ba)}),le&&Da(f,X),R}function Y(f,m,g,z){if(g==null)throw Error(d(151));for(var R=null,F=null,B=m,X=m=0,Be=null,ie=g.next();B!==null&&!ie.done;X++,ie=g.next()){B.index>X?(Be=B,B=null):Be=B.sibling;var ba=b(f,B,ie.value,z);if(ba===null){B===null&&(B=Be);break}e&&B&&ba.alternate===null&&t(f,B),m=l(ba,m,X),F===null?R=ba:F.sibling=ba,F=ba,B=Be}if(ie.done)return a(f,B),le&&Da(f,X),R;if(B===null){for(;!ie.done;X++,ie=g.next())ie=j(f,ie.value,z),ie!==null&&(m=l(ie,m,X),F===null?R=ie:F.sibling=ie,F=ie);return le&&Da(f,X),R}for(B=i(B);!ie.done;X++,ie=g.next())ie=v(B,f,X,ie.value,z),ie!==null&&(e&&ie.alternate!==null&&B.delete(ie.key===null?X:ie.key),m=l(ie,m,X),F===null?R=ie:F.sibling=ie,F=ie);return e&&B.forEach(function(a0){return t(f,a0)}),le&&Da(f,X),R}function de(f,m,g,z){if(typeof g=="object"&&g!==null&&g.type===re&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case L:e:{for(var R=g.key;m!==null;){if(m.key===R){if(R=g.type,R===re){if(m.tag===7){a(f,m.sibling),z=n(m,g.props.children),z.return=f,f=z;break e}}else if(m.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ze&&ps(R)===m.type){a(f,m.sibling),z=n(m,g.props),Ii(z,g),z.return=f,f=z;break e}a(f,m);break}else t(f,m);m=m.sibling}g.type===re?(z=ja(g.props.children,f.mode,z,g.key),z.return=f,f=z):(z=Xn(g.type,g.key,g.props,null,f.mode,z),Ii(z,g),z.return=f,f=z)}return r(f);case fe:e:{for(R=g.key;m!==null;){if(m.key===R)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){a(f,m.sibling),z=n(m,g.children||[]),z.return=f,f=z;break e}else{a(f,m);break}else t(f,m);m=m.sibling}z=Sr(g,f.mode,z),z.return=f,f=z}return r(f);case Ze:return R=g._init,g=R(g._payload),de(f,m,g,z)}if(Oe(g))return Z(f,m,g,z);if(Ue(g)){if(R=Ue(g),typeof R!="function")throw Error(d(150));return g=R.call(g),Y(f,m,g,z)}if(typeof g.then=="function")return de(f,m,ll(g),z);if(g.$$typeof===be)return de(f,m,Zn(f,g),z);rl(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,m!==null&&m.tag===6?(a(f,m.sibling),z=n(m,g),z.return=f,f=z):(a(f,m),z=zr(g,f.mode,z),z.return=f,f=z),r(f)):a(f,m)}return function(f,m,g,z){try{Fi=0;var R=de(f,m,g,z);return oi=null,R}catch(B){if(B===Qi||B===Jn)throw B;var F=it(29,B,null,f.mode);return F.lanes=z,F.return=f,F}finally{}}}var ci=hs(!0),bs=hs(!1),ht=y(null),Dt=null;function aa(e){var t=e.alternate;N(Me,Me.current&1),N(ht,e),Dt===null&&(t===null||ii.current!==null||t.memoizedState!==null)&&(Dt=e)}function vs(e){if(e.tag===22){if(N(Me,Me.current),N(ht,e),Dt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Dt=e)}}else ia()}function ia(){N(Me,Me.current),N(ht,ht.current)}function Ht(e){D(ht),Dt===e&&(Dt=null),D(Me)}var Me=y(0);function ol(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Zo(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function ao(e,t,a,i){t=e.memoizedState,a=a(i,t),a=a==null?t:_({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var io={enqueueSetState:function(e,t,a){e=e._reactInternals;var i=ot(),n=It(i);n.payload=t,a!=null&&(n.callback=a),t=ea(e,n,i),t!==null&&(ct(t,e,i),Vi(t,e,i))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var i=ot(),n=It(i);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=ea(e,n,i),t!==null&&(ct(t,e,i),Vi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=ot(),i=It(a);i.tag=2,t!=null&&(i.callback=t),t=ea(e,i,a),t!==null&&(ct(t,e,a),Vi(t,e,a))}};function ys(e,t,a,i,n,l,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,l,r):t.prototype&&t.prototype.isPureReactComponent?!Ri(a,i)||!Ri(n,l):!0}function xs(e,t,a,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,i),t.state!==e&&io.enqueueReplaceState(t,t.state,null)}function Oa(e,t){var a=t;if("ref"in t){a={};for(var i in t)i!=="ref"&&(a[i]=t[i])}if(e=e.defaultProps){a===t&&(a=_({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}var cl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function ks(e){cl(e)}function zs(e){console.error(e)}function Ss(e){cl(e)}function ul(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function js(e,t,a){try{var i=e.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function no(e,t,a){return a=It(a),a.tag=3,a.payload={element:null},a.callback=function(){ul(e,t)},a}function Es(e){return e=It(e),e.tag=3,e}function Ds(e,t,a,i){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var l=i.value;e.payload=function(){return n(l)},e.callback=function(){js(t,a,i)}}var r=a.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){js(t,a,i),typeof n!="function"&&(ua===null?ua=new Set([this]):ua.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function ag(e,t,a,i,n){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=a.alternate,t!==null&&Hi(t,a,n,!0),a=ht.current,a!==null){switch(a.tag){case 13:return Dt===null?To():a.alternate===null&&ze===0&&(ze=3),a.flags&=-257,a.flags|=65536,a.lanes=n,i===Or?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([i]):t.add(i),No(e,i,n)),!1;case 22:return a.flags|=65536,i===Or?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([i]):a.add(i)),No(e,i,n)),!1}throw Error(d(435,a.tag))}return No(e,i,n),To(),!1}if(le)return t=ht.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,i!==Dr&&(e=Error(d(422),{cause:i}),qi(mt(e,a)))):(i!==Dr&&(t=Error(d(423),{cause:i}),qi(mt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,i=mt(i,a),n=no(e.stateNode,i,n),Cr(e,n),ze!==4&&(ze=2)),!1;var l=Error(d(520),{cause:i});if(l=mt(l,a),on===null?on=[l]:on.push(l),ze!==4&&(ze=2),t===null)return!0;i=mt(i,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=no(a.stateNode,i,e),Cr(a,e),!1;case 1:if(t=a.type,l=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(ua===null||!ua.has(l))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Es(n),Ds(n,e,a,i),Cr(a,n),!1}a=a.return}while(a!==null);return!1}var ws=Error(d(461)),Re=!1;function Ge(e,t,a,i){t.child=e===null?bs(t,null,a,i):ci(t,e.child,a,i)}function As(e,t,a,i,n){a=a.render;var l=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Ma(t),i=Yr(e,t,a,r,l,n),o=Xr(),e!==null&&!Re?(Qr(e,t,n),Yt(e,t,n)):(le&&o&&jr(t),t.flags|=1,Ge(e,t,i,n),t.child)}function Ts(e,t,a,i,n){if(e===null){var l=a.type;return typeof l=="function"&&!kr(l)&&l.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=l,Ms(e,t,l,i,n)):(e=Xn(a.type,null,i,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!fo(e,n)){var r=l.memoizedProps;if(a=a.compare,a=a!==null?a:Ri,a(r,i)&&e.ref===t.ref)return Yt(e,t,n)}return t.flags|=1,e=_t(l,i),e.ref=t.ref,e.return=t,t.child=e}function Ms(e,t,a,i,n){if(e!==null){var l=e.memoizedProps;if(Ri(l,i)&&e.ref===t.ref)if(Re=!1,t.pendingProps=i=l,fo(e,n))(e.flags&131072)!==0&&(Re=!0);else return t.lanes=e.lanes,Yt(e,t,n)}return lo(e,t,a,i,n)}function Ns(e,t,a){var i=t.pendingProps,n=i.children,l=e!==null?e.memoizedState:null;if(i.mode==="hidden"){if((t.flags&128)!==0){if(i=l!==null?l.baseLanes|a:a,e!==null){for(n=t.child=e.child,l=0;n!==null;)l=l|n.lanes|n.childLanes,n=n.sibling;t.childLanes=l&~i}else t.childLanes=0,t.child=null;return Us(e,t,i,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Kn(t,l!==null?l.cachePool:null),l!==null?Mu(t,l):Gr(),vs(t);else return t.lanes=t.childLanes=536870912,Us(e,t,l!==null?l.baseLanes|a:a,a)}else l!==null?(Kn(t,l.cachePool),Mu(t,l),ia(),t.memoizedState=null):(e!==null&&Kn(t,null),Gr(),ia());return Ge(e,t,n,a),t.child}function Us(e,t,a,i){var n=Ur();return n=n===null?null:{parent:Te._currentValue,pool:n},t.memoizedState={baseLanes:a,cachePool:n},e!==null&&Kn(t,null),Gr(),vs(t),e!==null&&Hi(e,t,i,!0),null}function sl(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(d(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function lo(e,t,a,i,n){return Ma(t),a=Yr(e,t,a,i,void 0,n),i=Xr(),e!==null&&!Re?(Qr(e,t,n),Yt(e,t,n)):(le&&i&&jr(t),t.flags|=1,Ge(e,t,a,n),t.child)}function Os(e,t,a,i,n,l){return Ma(t),t.updateQueue=null,a=Uu(t,i,a,n),Nu(e),i=Xr(),e!==null&&!Re?(Qr(e,t,l),Yt(e,t,l)):(le&&i&&jr(t),t.flags|=1,Ge(e,t,a,l),t.child)}function _s(e,t,a,i,n){if(Ma(t),t.stateNode===null){var l=Fa,r=a.contextType;typeof r=="object"&&r!==null&&(l=Qe(r)),l=new a(i,l),t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=io,t.stateNode=l,l._reactInternals=t,l=t.stateNode,l.props=i,l.state=t.memoizedState,l.refs={},_r(t),r=a.contextType,l.context=typeof r=="object"&&r!==null?Qe(r):Fa,l.state=t.memoizedState,r=a.getDerivedStateFromProps,typeof r=="function"&&(ao(t,a,r,i),l.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(r=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),r!==l.state&&io.enqueueReplaceState(l,l.state,null),Ki(t,i,l,n),Zi(),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){l=t.stateNode;var o=t.memoizedProps,s=Oa(a,o);l.props=s;var h=l.context,k=a.contextType;r=Fa,typeof k=="object"&&k!==null&&(r=Qe(k));var j=a.getDerivedStateFromProps;k=typeof j=="function"||typeof l.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,k||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o||h!==r)&&xs(t,l,i,r),Ft=!1;var b=t.memoizedState;l.state=b,Ki(t,i,l,n),Zi(),h=t.memoizedState,o||b!==h||Ft?(typeof j=="function"&&(ao(t,a,j,i),h=t.memoizedState),(s=Ft||ys(t,a,s,i,b,h,r))?(k||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=h),l.props=i,l.state=h,l.context=r,i=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{l=t.stateNode,Rr(e,t),r=t.memoizedProps,k=Oa(a,r),l.props=k,j=t.pendingProps,b=l.context,h=a.contextType,s=Fa,typeof h=="object"&&h!==null&&(s=Qe(h)),o=a.getDerivedStateFromProps,(h=typeof o=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(r!==j||b!==s)&&xs(t,l,i,s),Ft=!1,b=t.memoizedState,l.state=b,Ki(t,i,l,n),Zi();var v=t.memoizedState;r!==j||b!==v||Ft||e!==null&&e.dependencies!==null&&Vn(e.dependencies)?(typeof o=="function"&&(ao(t,a,o,i),v=t.memoizedState),(k=Ft||ys(t,a,k,i,b,v,s)||e!==null&&e.dependencies!==null&&Vn(e.dependencies))?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,v,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,v,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||r===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=v),l.props=i,l.state=v,l.context=s,i=k):(typeof l.componentDidUpdate!="function"||r===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),i=!1)}return l=i,sl(e,t),i=(t.flags&128)!==0,l||i?(l=t.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:l.render(),t.flags|=1,e!==null&&i?(t.child=ci(t,e.child,null,n),t.child=ci(t,null,a,n)):Ge(e,t,a,n),t.memoizedState=l.state,e=t.child):e=Yt(e,t,n),e}function Rs(e,t,a,i){return Gi(),t.flags|=256,Ge(e,t,a,i),t.child}var ro={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function oo(e){return{baseLanes:e,cachePool:zu()}}function co(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=bt),e}function Cs(e,t,a){var i=t.pendingProps,n=!1,l=(t.flags&128)!==0,r;if((r=l)||(r=e!==null&&e.memoizedState===null?!1:(Me.current&2)!==0),r&&(n=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(le){if(n?aa(t):ia(),le){var o=ke,s;if(s=o){e:{for(s=o,o=Et;s.nodeType!==8;){if(!o){o=null;break e}if(s=zt(s.nextSibling),s===null){o=null;break e}}o=s}o!==null?(t.memoizedState={dehydrated:o,treeContext:Ea!==null?{id:Rt,overflow:Ct}:null,retryLane:536870912,hydrationErrors:null},s=it(18,null,null,0),s.stateNode=o,s.return=t,t.child=s,Ke=t,ke=null,s=!0):s=!1}s||Aa(t)}if(o=t.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return Zo(o)?t.lanes=32:t.lanes=536870912,null;Ht(t)}return o=i.children,i=i.fallback,n?(ia(),n=t.mode,o=dl({mode:"hidden",children:o},n),i=ja(i,n,a,null),o.return=t,i.return=t,o.sibling=i,t.child=o,n=t.child,n.memoizedState=oo(a),n.childLanes=co(e,r,a),t.memoizedState=ro,i):(aa(t),uo(t,o))}if(s=e.memoizedState,s!==null&&(o=s.dehydrated,o!==null)){if(l)t.flags&256?(aa(t),t.flags&=-257,t=so(e,t,a)):t.memoizedState!==null?(ia(),t.child=e.child,t.flags|=128,t=null):(ia(),n=i.fallback,o=t.mode,i=dl({mode:"visible",children:i.children},o),n=ja(n,o,a,null),n.flags|=2,i.return=t,n.return=t,i.sibling=n,t.child=i,ci(t,e.child,null,a),i=t.child,i.memoizedState=oo(a),i.childLanes=co(e,r,a),t.memoizedState=ro,t=n);else if(aa(t),Zo(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var h=r.dgst;r=h,i=Error(d(419)),i.stack="",i.digest=r,qi({value:i,source:null,stack:null}),t=so(e,t,a)}else if(Re||Hi(e,t,a,!1),r=(a&e.childLanes)!==0,Re||r){if(r=ge,r!==null&&(i=a&-a,i=(i&42)!==0?1:Zl(i),i=(i&(r.suspendedLanes|a))!==0?0:i,i!==0&&i!==s.retryLane))throw s.retryLane=i,Wa(e,i),ct(r,e,i),ws;o.data==="$?"||To(),t=so(e,t,a)}else o.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,ke=zt(o.nextSibling),Ke=t,le=!0,wa=null,Et=!1,e!==null&&(gt[pt++]=Rt,gt[pt++]=Ct,gt[pt++]=Ea,Rt=e.id,Ct=e.overflow,Ea=t),t=uo(t,i.children),t.flags|=4096);return t}return n?(ia(),n=i.fallback,o=t.mode,s=e.child,h=s.sibling,i=_t(s,{mode:"hidden",children:i.children}),i.subtreeFlags=s.subtreeFlags&65011712,h!==null?n=_t(h,n):(n=ja(n,o,a,null),n.flags|=2),n.return=t,i.return=t,i.sibling=n,t.child=i,i=n,n=t.child,o=e.child.memoizedState,o===null?o=oo(a):(s=o.cachePool,s!==null?(h=Te._currentValue,s=s.parent!==h?{parent:h,pool:h}:s):s=zu(),o={baseLanes:o.baseLanes|a,cachePool:s}),n.memoizedState=o,n.childLanes=co(e,r,a),t.memoizedState=ro,i):(aa(t),a=e.child,e=a.sibling,a=_t(a,{mode:"visible",children:i.children}),a.return=t,a.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=a,t.memoizedState=null,a)}function uo(e,t){return t=dl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function dl(e,t){return e=it(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function so(e,t,a){return ci(t,e.child,null,a),e=uo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Bs(e,t,a){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Ar(e.return,t,a)}function mo(e,t,a,i,n){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:n}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=i,l.tail=a,l.tailMode=n)}function Gs(e,t,a){var i=t.pendingProps,n=i.revealOrder,l=i.tail;if(Ge(e,t,i.children,a),i=Me.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bs(e,a,t);else if(e.tag===19)Bs(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(N(Me,i),n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&ol(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),mo(t,!1,n,a,l);break;case"backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&ol(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}mo(t,!0,a,null,l);break;case"together":mo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Yt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ca|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Hi(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(d(153));if(t.child!==null){for(e=t.child,a=_t(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=_t(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function fo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Vn(e)))}function ig(e,t,a){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),Wt(t,Te,e.memoizedState.cache),Gi();break;case 27:case 5:Yl(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:Wt(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(aa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Cs(e,t,a):(aa(t),e=Yt(e,t,a),e!==null?e.sibling:null);aa(t);break;case 19:var n=(e.flags&128)!==0;if(i=(a&t.childLanes)!==0,i||(Hi(e,t,a,!1),i=(a&t.childLanes)!==0),n){if(i)return Gs(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),N(Me,Me.current),i)break;return null;case 22:case 23:return t.lanes=0,Ns(e,t,a);case 24:Wt(t,Te,e.memoizedState.cache)}return Yt(e,t,a)}function qs(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Re=!0;else{if(!fo(e,a)&&(t.flags&128)===0)return Re=!1,ig(e,t,a);Re=(e.flags&131072)!==0}else Re=!1,le&&(t.flags&1048576)!==0&&pu(t,Ln,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var i=t.elementType,n=i._init;if(i=n(i._payload),t.type=i,typeof i=="function")kr(i)?(e=Oa(i,e),t.tag=1,t=_s(null,t,i,e,a)):(t.tag=0,t=lo(null,t,i,e,a));else{if(i!=null){if(n=i.$$typeof,n===he){t.tag=11,t=As(null,t,i,e,a);break e}else if(n===Ae){t.tag=14,t=Ts(null,t,i,e,a);break e}}throw t=yt(i)||i,Error(d(306,t,""))}}return t;case 0:return lo(e,t,t.type,t.pendingProps,a);case 1:return i=t.type,n=Oa(i,t.pendingProps),_s(e,t,i,n,a);case 3:e:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(d(387));i=t.pendingProps;var l=t.memoizedState;n=l.element,Rr(e,t),Ki(t,i,null,a);var r=t.memoizedState;if(i=r.cache,Wt(t,Te,i),i!==l.cache&&Tr(t,[Te],a,!0),Zi(),i=r.element,l.isDehydrated)if(l={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){t=Rs(e,t,i,a);break e}else if(i!==n){n=mt(Error(d(424)),t),qi(n),t=Rs(e,t,i,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ke=zt(e.firstChild),Ke=t,le=!0,wa=null,Et=!0,a=bs(t,null,i,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Gi(),i===n){t=Yt(e,t,a);break e}Ge(e,t,i,a)}t=t.child}return t;case 26:return sl(e,t),e===null?(a=Qd(t.type,null,t.pendingProps,null))?t.memoizedState=a:le||(a=t.type,e=t.pendingProps,i=El(K.current).createElement(a),i[Xe]=t,i[Je]=e,He(i,a,e),_e(i),t.stateNode=i):t.memoizedState=Qd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Yl(t),e===null&&le&&(i=t.stateNode=Hd(t.type,t.pendingProps,K.current),Ke=t,Et=!0,n=ke,ma(t.type)?(Ko=n,ke=zt(i.firstChild)):ke=n),Ge(e,t,t.pendingProps.children,a),sl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&le&&((n=i=ke)&&(i=Ng(i,t.type,t.pendingProps,Et),i!==null?(t.stateNode=i,Ke=t,ke=zt(i.firstChild),Et=!1,n=!0):n=!1),n||Aa(t)),Yl(t),n=t.type,l=t.pendingProps,r=e!==null?e.memoizedProps:null,i=l.children,Qo(n,l)?i=null:r!==null&&Qo(n,r)&&(t.flags|=32),t.memoizedState!==null&&(n=Yr(e,t,$f,null,null,a),hn._currentValue=n),sl(e,t),Ge(e,t,i,a),t.child;case 6:return e===null&&le&&((e=a=ke)&&(a=Ug(a,t.pendingProps,Et),a!==null?(t.stateNode=a,Ke=t,ke=null,e=!0):e=!1),e||Aa(t)),null;case 13:return Cs(e,t,a);case 4:return ve(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ci(t,null,i,a):Ge(e,t,i,a),t.child;case 11:return As(e,t,t.type,t.pendingProps,a);case 7:return Ge(e,t,t.pendingProps,a),t.child;case 8:return Ge(e,t,t.pendingProps.children,a),t.child;case 12:return Ge(e,t,t.pendingProps.children,a),t.child;case 10:return i=t.pendingProps,Wt(t,t.type,i.value),Ge(e,t,i.children,a),t.child;case 9:return n=t.type._context,i=t.pendingProps.children,Ma(t),n=Qe(n),i=i(n),t.flags|=1,Ge(e,t,i,a),t.child;case 14:return Ts(e,t,t.type,t.pendingProps,a);case 15:return Ms(e,t,t.type,t.pendingProps,a);case 19:return Gs(e,t,a);case 31:return i=t.pendingProps,a=t.mode,i={mode:i.mode,children:i.children},e===null?(a=dl(i,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=_t(e.child,i),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return Ns(e,t,a);case 24:return Ma(t),i=Qe(Te),e===null?(n=Ur(),n===null&&(n=ge,l=Mr(),n.pooledCache=l,l.refCount++,l!==null&&(n.pooledCacheLanes|=a),n=l),t.memoizedState={parent:i,cache:n},_r(t),Wt(t,Te,n)):((e.lanes&a)!==0&&(Rr(e,t),Ki(t,null,null,a),Zi()),n=e.memoizedState,l=t.memoizedState,n.parent!==i?(n={parent:i,cache:i},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),Wt(t,Te,i)):(i=l.cache,Wt(t,Te,i),i!==n.cache&&Tr(t,[Te],a,!0))),Ge(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(d(156,t.tag))}function Xt(e){e.flags|=4}function Hs(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Jd(t)){if(t=ht.current,t!==null&&((te&4194048)===te?Dt!==null:(te&62914560)!==te&&(te&536870912)===0||t!==Dt))throw Li=Or,Su;e.flags|=8192}}function ml(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?vc():536870912,e.lanes|=t,mi|=t)}function en(e,t){if(!le)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,i|=n.subtreeFlags&65011712,i|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,i|=n.subtreeFlags,i|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=i,e.childLanes=a,t}function ng(e,t,a){var i=t.pendingProps;switch(Er(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(t),null;case 1:return xe(t),null;case 3:return a=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Gt(Te),Kt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Bi(t)?Xt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,vu())),xe(t),null;case 26:return a=t.memoizedState,e===null?(Xt(t),a!==null?(xe(t),Hs(t,a)):(xe(t),t.flags&=-16777217)):a?a!==e.memoizedState?(Xt(t),xe(t),Hs(t,a)):(xe(t),t.flags&=-16777217):(e.memoizedProps!==i&&Xt(t),xe(t),t.flags&=-16777217),null;case 27:Sn(t),a=K.current;var n=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Xt(t);else{if(!i){if(t.stateNode===null)throw Error(d(166));return xe(t),null}e=H.current,Bi(t)?hu(t):(e=Hd(n,i,a),t.stateNode=e,Xt(t))}return xe(t),null;case 5:if(Sn(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Xt(t);else{if(!i){if(t.stateNode===null)throw Error(d(166));return xe(t),null}if(e=H.current,Bi(t))hu(t);else{switch(n=El(K.current),e){case 1:e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?n.createElement("select",{is:i.is}):n.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?n.createElement(a,{is:i.is}):n.createElement(a)}}e[Xe]=t,e[Je]=i;e:for(n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}t.stateNode=e;e:switch(He(e,a,i),a){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Xt(t)}}return xe(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Xt(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(d(166));if(e=K.current,Bi(t)){if(e=t.stateNode,a=t.memoizedProps,i=null,n=Ke,n!==null)switch(n.tag){case 27:case 5:i=n.memoizedProps}e[Xe]=t,e=!!(e.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||Od(e.nodeValue,a)),e||Aa(t)}else e=El(e).createTextNode(i),e[Xe]=t,t.stateNode=e}return xe(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Bi(t),i!==null&&i.dehydrated!==null){if(e===null){if(!n)throw Error(d(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));n[Xe]=t}else Gi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;xe(t),n=!1}else n=vu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Ht(t),t):(Ht(t),null)}if(Ht(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=i!==null,e=e!==null&&e.memoizedState!==null,a){i=t.child,n=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(n=i.alternate.memoizedState.cachePool.pool);var l=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==n&&(i.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),ml(t,t.updateQueue),xe(t),null;case 4:return Kt(),e===null&&Go(t.stateNode.containerInfo),xe(t),null;case 10:return Gt(t.type),xe(t),null;case 19:if(D(Me),n=t.memoizedState,n===null)return xe(t),null;if(i=(t.flags&128)!==0,l=n.rendering,l===null)if(i)en(n,!1);else{if(ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=ol(e),l!==null){for(t.flags|=128,en(n,!1),e=l.updateQueue,t.updateQueue=e,ml(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)gu(a,e),a=a.sibling;return N(Me,Me.current&1|2),t.child}e=e.sibling}n.tail!==null&&jt()>pl&&(t.flags|=128,i=!0,en(n,!1),t.lanes=4194304)}else{if(!i)if(e=ol(l),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,ml(t,e),en(n,!0),n.tail===null&&n.tailMode==="hidden"&&!l.alternate&&!le)return xe(t),null}else 2*jt()-n.renderingStartTime>pl&&a!==536870912&&(t.flags|=128,i=!0,en(n,!1),t.lanes=4194304);n.isBackwards?(l.sibling=t.child,t.child=l):(e=n.last,e!==null?e.sibling=l:t.child=l,n.last=l)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=jt(),t.sibling=null,e=Me.current,N(Me,i?e&1|2:e&1),t):(xe(t),null);case 22:case 23:return Ht(t),qr(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(a&536870912)!==0&&(t.flags&128)===0&&(xe(t),t.subtreeFlags&6&&(t.flags|=8192)):xe(t),a=t.updateQueue,a!==null&&ml(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==a&&(t.flags|=2048),e!==null&&D(Na),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Gt(Te),xe(t),null;case 25:return null;case 30:return null}throw Error(d(156,t.tag))}function lg(e,t){switch(Er(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gt(Te),Kt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Sn(t),null;case 13:if(Ht(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(d(340));Gi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(Me),null;case 4:return Kt(),null;case 10:return Gt(t.type),null;case 22:case 23:return Ht(t),qr(),e!==null&&D(Na),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Gt(Te),null;case 25:return null;default:return null}}function Ys(e,t){switch(Er(t),t.tag){case 3:Gt(Te),Kt();break;case 26:case 27:case 5:Sn(t);break;case 4:Kt();break;case 13:Ht(t);break;case 19:D(Me);break;case 10:Gt(t.type);break;case 22:case 23:Ht(t),qr(),e!==null&&D(Na);break;case 24:Gt(Te)}}function tn(e,t){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var n=i.next;a=n;do{if((a.tag&e)===e){i=void 0;var l=a.create,r=a.inst;i=l(),r.destroy=i}a=a.next}while(a!==n)}}catch(o){me(t,t.return,o)}}function na(e,t,a){try{var i=t.updateQueue,n=i!==null?i.lastEffect:null;if(n!==null){var l=n.next;i=l;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,n=t;var s=a,h=o;try{h()}catch(k){me(n,s,k)}}}i=i.next}while(i!==l)}}catch(k){me(t,t.return,k)}}function Xs(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Tu(t,a)}catch(i){me(e,e.return,i)}}}function Qs(e,t,a){a.props=Oa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(i){me(e,t,i)}}function an(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(n){me(e,t,n)}}function wt(e,t){var a=e.ref,i=e.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(n){me(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){me(e,t,n)}else a.current=null}function Ls(e){var t=e.type,a=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break e;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(n){me(e,e.return,n)}}function go(e,t,a){try{var i=e.stateNode;Dg(i,e.type,a,t),i[Je]=t}catch(n){me(e,e.return,n)}}function Vs(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ma(e.type)||e.tag===4}function po(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ma(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ho(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=jl));else if(i!==4&&(i===27&&ma(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(ho(e,t,a),e=e.sibling;e!==null;)ho(e,t,a),e=e.sibling}function fl(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(i!==4&&(i===27&&ma(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(fl(e,t,a),e=e.sibling;e!==null;)fl(e,t,a),e=e.sibling}function Zs(e){var t=e.stateNode,a=e.memoizedProps;try{for(var i=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);He(t,i,a),t[Xe]=e,t[Je]=a}catch(l){me(e,e.return,l)}}var Qt=!1,je=!1,bo=!1,Ks=typeof WeakSet=="function"?WeakSet:Set,Ce=null;function rg(e,t){if(e=e.containerInfo,Yo=Nl,e=nu(e),gr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var n=i.anchorOffset,l=i.focusNode;i=i.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break e}var r=0,o=-1,s=-1,h=0,k=0,j=e,b=null;t:for(;;){for(var v;j!==a||n!==0&&j.nodeType!==3||(o=r+n),j!==l||i!==0&&j.nodeType!==3||(s=r+i),j.nodeType===3&&(r+=j.nodeValue.length),(v=j.firstChild)!==null;)b=j,j=v;for(;;){if(j===e)break t;if(b===a&&++h===n&&(o=r),b===l&&++k===i&&(s=r),(v=j.nextSibling)!==null)break;j=b,b=j.parentNode}j=v}a=o===-1||s===-1?null:{start:o,end:s}}else a=null}a=a||{start:0,end:0}}else a=null;for(Xo={focusedElem:e,selectionRange:a},Nl=!1,Ce=t;Ce!==null;)if(t=Ce,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Ce=e;else for(;Ce!==null;){switch(t=Ce,l=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,a=t,n=l.memoizedProps,l=l.memoizedState,i=a.stateNode;try{var Z=Oa(a.type,n,a.elementType===a.type);e=i.getSnapshotBeforeUpdate(Z,l),i.__reactInternalSnapshotBeforeUpdate=e}catch(Y){me(a,a.return,Y)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Vo(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=t.sibling,e!==null){e.return=t.return,Ce=e;break}Ce=t.return}}function Js(e,t,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:la(e,a),i&4&&tn(5,a);break;case 1:if(la(e,a),i&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(r){me(a,a.return,r)}else{var n=Oa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){me(a,a.return,r)}}i&64&&Xs(a),i&512&&an(a,a.return);break;case 3:if(la(e,a),i&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Tu(e,t)}catch(r){me(a,a.return,r)}}break;case 27:t===null&&i&4&&Zs(a);case 26:case 5:la(e,a),t===null&&i&4&&Ls(a),i&512&&an(a,a.return);break;case 12:la(e,a);break;case 13:la(e,a),i&4&&Ws(e,a),i&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=pg.bind(null,a),Og(e,a))));break;case 22:if(i=a.memoizedState!==null||Qt,!i){t=t!==null&&t.memoizedState!==null||je,n=Qt;var l=je;Qt=i,(je=t)&&!l?ra(e,a,(a.subtreeFlags&8772)!==0):la(e,a),Qt=n,je=l}break;case 30:break;default:la(e,a)}}function $s(e){var t=e.alternate;t!==null&&(e.alternate=null,$s(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&$l(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ye=null,We=!1;function Lt(e,t,a){for(a=a.child;a!==null;)Ps(e,t,a),a=a.sibling}function Ps(e,t,a){if(et&&typeof et.onCommitFiberUnmount=="function")try{et.onCommitFiberUnmount(Si,a)}catch{}switch(a.tag){case 26:je||wt(a,t),Lt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:je||wt(a,t);var i=ye,n=We;ma(a.type)&&(ye=a.stateNode,We=!1),Lt(e,t,a),mn(a.stateNode),ye=i,We=n;break;case 5:je||wt(a,t);case 6:if(i=ye,n=We,ye=null,Lt(e,t,a),ye=i,We=n,ye!==null)if(We)try{(ye.nodeType===9?ye.body:ye.nodeName==="HTML"?ye.ownerDocument.body:ye).removeChild(a.stateNode)}catch(l){me(a,t,l)}else try{ye.removeChild(a.stateNode)}catch(l){me(a,t,l)}break;case 18:ye!==null&&(We?(e=ye,Gd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),xn(e)):Gd(ye,a.stateNode));break;case 4:i=ye,n=We,ye=a.stateNode.containerInfo,We=!0,Lt(e,t,a),ye=i,We=n;break;case 0:case 11:case 14:case 15:je||na(2,a,t),je||na(4,a,t),Lt(e,t,a);break;case 1:je||(wt(a,t),i=a.stateNode,typeof i.componentWillUnmount=="function"&&Qs(a,t,i)),Lt(e,t,a);break;case 21:Lt(e,t,a);break;case 22:je=(i=je)||a.memoizedState!==null,Lt(e,t,a),je=i;break;default:Lt(e,t,a)}}function Ws(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{xn(e)}catch(a){me(t,t.return,a)}}function og(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ks),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ks),t;default:throw Error(d(435,e.tag))}}function vo(e,t){var a=og(e);t.forEach(function(i){var n=hg.bind(null,e,i);a.has(i)||(a.add(i),i.then(n,n))})}function nt(e,t){var a=t.deletions;if(a!==null)for(var i=0;i<a.length;i++){var n=a[i],l=e,r=t,o=r;e:for(;o!==null;){switch(o.tag){case 27:if(ma(o.type)){ye=o.stateNode,We=!1;break e}break;case 5:ye=o.stateNode,We=!1;break e;case 3:case 4:ye=o.stateNode.containerInfo,We=!0;break e}o=o.return}if(ye===null)throw Error(d(160));Ps(l,r,n),ye=null,We=!1,l=n.alternate,l!==null&&(l.return=null),n.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Fs(t,e),t=t.sibling}var kt=null;function Fs(e,t){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:nt(t,e),lt(e),i&4&&(na(3,e,e.return),tn(3,e),na(5,e,e.return));break;case 1:nt(t,e),lt(e),i&512&&(je||a===null||wt(a,a.return)),i&64&&Qt&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var n=kt;if(nt(t,e),lt(e),i&512&&(je||a===null||wt(a,a.return)),i&4){var l=a!==null?a.memoizedState:null;if(i=e.memoizedState,a===null)if(i===null)if(e.stateNode===null){e:{i=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(i){case"title":l=n.getElementsByTagName("title")[0],(!l||l[Di]||l[Xe]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=n.createElement(i),n.head.insertBefore(l,n.querySelector("head > title"))),He(l,i,a),l[Xe]=e,_e(l),i=l;break e;case"link":var r=Zd("link","href",n).get(i+(a.href||""));if(r){for(var o=0;o<r.length;o++)if(l=r[o],l.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&l.getAttribute("rel")===(a.rel==null?null:a.rel)&&l.getAttribute("title")===(a.title==null?null:a.title)&&l.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){r.splice(o,1);break t}}l=n.createElement(i),He(l,i,a),n.head.appendChild(l);break;case"meta":if(r=Zd("meta","content",n).get(i+(a.content||""))){for(o=0;o<r.length;o++)if(l=r[o],l.getAttribute("content")===(a.content==null?null:""+a.content)&&l.getAttribute("name")===(a.name==null?null:a.name)&&l.getAttribute("property")===(a.property==null?null:a.property)&&l.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&l.getAttribute("charset")===(a.charSet==null?null:a.charSet)){r.splice(o,1);break t}}l=n.createElement(i),He(l,i,a),n.head.appendChild(l);break;default:throw Error(d(468,i))}l[Xe]=e,_e(l),i=l}e.stateNode=i}else Kd(n,e.type,e.stateNode);else e.stateNode=Vd(n,i,e.memoizedProps);else l!==i?(l===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):l.count--,i===null?Kd(n,e.type,e.stateNode):Vd(n,i,e.memoizedProps)):i===null&&e.stateNode!==null&&go(e,e.memoizedProps,a.memoizedProps)}break;case 27:nt(t,e),lt(e),i&512&&(je||a===null||wt(a,a.return)),a!==null&&i&4&&go(e,e.memoizedProps,a.memoizedProps);break;case 5:if(nt(t,e),lt(e),i&512&&(je||a===null||wt(a,a.return)),e.flags&32){n=e.stateNode;try{La(n,"")}catch(v){me(e,e.return,v)}}i&4&&e.stateNode!=null&&(n=e.memoizedProps,go(e,n,a!==null?a.memoizedProps:n)),i&1024&&(bo=!0);break;case 6:if(nt(t,e),lt(e),i&4){if(e.stateNode===null)throw Error(d(162));i=e.memoizedProps,a=e.stateNode;try{a.nodeValue=i}catch(v){me(e,e.return,v)}}break;case 3:if(Al=null,n=kt,kt=Dl(t.containerInfo),nt(t,e),kt=n,lt(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{xn(t.containerInfo)}catch(v){me(e,e.return,v)}bo&&(bo=!1,Is(e));break;case 4:i=kt,kt=Dl(e.stateNode.containerInfo),nt(t,e),lt(e),kt=i;break;case 12:nt(t,e),lt(e);break;case 13:nt(t,e),lt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(jo=jt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,vo(e,i)));break;case 22:n=e.memoizedState!==null;var s=a!==null&&a.memoizedState!==null,h=Qt,k=je;if(Qt=h||n,je=k||s,nt(t,e),je=k,Qt=h,lt(e),i&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||s||Qt||je||_a(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){s=a=t;try{if(l=s.stateNode,n)r=l.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=s.stateNode;var j=s.memoizedProps.style,b=j!=null&&j.hasOwnProperty("display")?j.display:null;o.style.display=b==null||typeof b=="boolean"?"":(""+b).trim()}}catch(v){me(s,s.return,v)}}}else if(t.tag===6){if(a===null){s=t;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(v){me(s,s.return,v)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,vo(e,a))));break;case 19:nt(t,e),lt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,vo(e,i)));break;case 30:break;case 21:break;default:nt(t,e),lt(e)}}function lt(e){var t=e.flags;if(t&2){try{for(var a,i=e.return;i!==null;){if(Vs(i)){a=i;break}i=i.return}if(a==null)throw Error(d(160));switch(a.tag){case 27:var n=a.stateNode,l=po(e);fl(e,l,n);break;case 5:var r=a.stateNode;a.flags&32&&(La(r,""),a.flags&=-33);var o=po(e);fl(e,o,r);break;case 3:case 4:var s=a.stateNode.containerInfo,h=po(e);ho(e,h,s);break;default:throw Error(d(161))}}catch(k){me(e,e.return,k)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Is(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Is(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function la(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Js(e,t.alternate,t),t=t.sibling}function _a(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:na(4,t,t.return),_a(t);break;case 1:wt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Qs(t,t.return,a),_a(t);break;case 27:mn(t.stateNode);case 26:case 5:wt(t,t.return),_a(t);break;case 22:t.memoizedState===null&&_a(t);break;case 30:_a(t);break;default:_a(t)}e=e.sibling}}function ra(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,n=e,l=t,r=l.flags;switch(l.tag){case 0:case 11:case 15:ra(n,l,a),tn(4,l);break;case 1:if(ra(n,l,a),i=l,n=i.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(h){me(i,i.return,h)}if(i=l,n=i.updateQueue,n!==null){var o=i.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)Au(s[n],o)}catch(h){me(i,i.return,h)}}a&&r&64&&Xs(l),an(l,l.return);break;case 27:Zs(l);case 26:case 5:ra(n,l,a),a&&i===null&&r&4&&Ls(l),an(l,l.return);break;case 12:ra(n,l,a);break;case 13:ra(n,l,a),a&&r&4&&Ws(n,l);break;case 22:l.memoizedState===null&&ra(n,l,a),an(l,l.return);break;case 30:break;default:ra(n,l,a)}t=t.sibling}}function yo(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Yi(a))}function xo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Yi(e))}function At(e,t,a,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ed(e,t,a,i),t=t.sibling}function ed(e,t,a,i){var n=t.flags;switch(t.tag){case 0:case 11:case 15:At(e,t,a,i),n&2048&&tn(9,t);break;case 1:At(e,t,a,i);break;case 3:At(e,t,a,i),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Yi(e)));break;case 12:if(n&2048){At(e,t,a,i),e=t.stateNode;try{var l=t.memoizedProps,r=l.id,o=l.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(s){me(t,t.return,s)}}else At(e,t,a,i);break;case 13:At(e,t,a,i);break;case 23:break;case 22:l=t.stateNode,r=t.alternate,t.memoizedState!==null?l._visibility&2?At(e,t,a,i):nn(e,t):l._visibility&2?At(e,t,a,i):(l._visibility|=2,ui(e,t,a,i,(t.subtreeFlags&10256)!==0)),n&2048&&yo(r,t);break;case 24:At(e,t,a,i),n&2048&&xo(t.alternate,t);break;default:At(e,t,a,i)}}function ui(e,t,a,i,n){for(n=n&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var l=e,r=t,o=a,s=i,h=r.flags;switch(r.tag){case 0:case 11:case 15:ui(l,r,o,s,n),tn(8,r);break;case 23:break;case 22:var k=r.stateNode;r.memoizedState!==null?k._visibility&2?ui(l,r,o,s,n):nn(l,r):(k._visibility|=2,ui(l,r,o,s,n)),n&&h&2048&&yo(r.alternate,r);break;case 24:ui(l,r,o,s,n),n&&h&2048&&xo(r.alternate,r);break;default:ui(l,r,o,s,n)}t=t.sibling}}function nn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,i=t,n=i.flags;switch(i.tag){case 22:nn(a,i),n&2048&&yo(i.alternate,i);break;case 24:nn(a,i),n&2048&&xo(i.alternate,i);break;default:nn(a,i)}t=t.sibling}}var ln=8192;function si(e){if(e.subtreeFlags&ln)for(e=e.child;e!==null;)td(e),e=e.sibling}function td(e){switch(e.tag){case 26:si(e),e.flags&ln&&e.memoizedState!==null&&Zg(kt,e.memoizedState,e.memoizedProps);break;case 5:si(e);break;case 3:case 4:var t=kt;kt=Dl(e.stateNode.containerInfo),si(e),kt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=ln,ln=16777216,si(e),ln=t):si(e));break;default:si(e)}}function ad(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function rn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];Ce=i,nd(i,e)}ad(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)id(e),e=e.sibling}function id(e){switch(e.tag){case 0:case 11:case 15:rn(e),e.flags&2048&&na(9,e,e.return);break;case 3:rn(e);break;case 12:rn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,gl(e)):rn(e);break;default:rn(e)}}function gl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];Ce=i,nd(i,e)}ad(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:na(8,t,t.return),gl(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,gl(t));break;default:gl(t)}e=e.sibling}}function nd(e,t){for(;Ce!==null;){var a=Ce;switch(a.tag){case 0:case 11:case 15:na(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Yi(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,Ce=i;else e:for(a=e;Ce!==null;){i=Ce;var n=i.sibling,l=i.return;if($s(i),i===a){Ce=null;break e}if(n!==null){n.return=l,Ce=n;break e}Ce=l}}}var cg={getCacheForType:function(e){var t=Qe(Te),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},ug=typeof WeakMap=="function"?WeakMap:Map,oe=0,ge=null,I=null,te=0,ce=0,rt=null,oa=!1,di=!1,ko=!1,Vt=0,ze=0,ca=0,Ra=0,zo=0,bt=0,mi=0,on=null,Fe=null,So=!1,jo=0,pl=1/0,hl=null,ua=null,qe=0,sa=null,fi=null,gi=0,Eo=0,Do=null,ld=null,cn=0,wo=null;function ot(){if((oe&2)!==0&&te!==0)return te&-te;if(x.T!==null){var e=ti;return e!==0?e:_o()}return kc()}function rd(){bt===0&&(bt=(te&536870912)===0||le?bc():536870912);var e=ht.current;return e!==null&&(e.flags|=32),bt}function ct(e,t,a){(e===ge&&(ce===2||ce===9)||e.cancelPendingCommit!==null)&&(pi(e,0),da(e,te,bt,!1)),Ei(e,a),((oe&2)===0||e!==ge)&&(e===ge&&((oe&2)===0&&(Ra|=a),ze===4&&da(e,te,bt,!1)),Tt(e))}function od(e,t,a){if((oe&6)!==0)throw Error(d(327));var i=!a&&(t&124)===0&&(t&e.expiredLanes)===0||ji(e,t),n=i?mg(e,t):Mo(e,t,!0),l=i;do{if(n===0){di&&!i&&da(e,t,0,!1);break}else{if(a=e.current.alternate,l&&!sg(a)){n=Mo(e,t,!1),l=!1;continue}if(n===2){if(l=t,e.errorRecoveryDisabledLanes&l)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var o=e;n=on;var s=o.current.memoizedState.isDehydrated;if(s&&(pi(o,r).flags|=256),r=Mo(o,r,!1),r!==2){if(ko&&!s){o.errorRecoveryDisabledLanes|=l,Ra|=l,n=4;break e}l=Fe,Fe=n,l!==null&&(Fe===null?Fe=l:Fe.push.apply(Fe,l))}n=r}if(l=!1,n!==2)continue}}if(n===1){pi(e,0),da(e,t,0,!0);break}e:{switch(i=e,l=n,l){case 0:case 1:throw Error(d(345));case 4:if((t&4194048)!==t)break;case 6:da(i,t,bt,!oa);break e;case 2:Fe=null;break;case 3:case 5:break;default:throw Error(d(329))}if((t&62914560)===t&&(n=jo+300-jt(),10<n)){if(da(i,t,bt,!oa),wn(i,0,!0)!==0)break e;i.timeoutHandle=Cd(cd.bind(null,i,a,Fe,hl,So,t,bt,Ra,mi,oa,l,2,-0,0),n);break e}cd(i,a,Fe,hl,So,t,bt,Ra,mi,oa,l,0,-0,0)}}break}while(!0);Tt(e)}function cd(e,t,a,i,n,l,r,o,s,h,k,j,b,v){if(e.timeoutHandle=-1,j=t.subtreeFlags,(j&8192||(j&16785408)===16785408)&&(pn={stylesheets:null,count:0,unsuspend:Vg},td(t),j=Kg(),j!==null)){e.cancelPendingCommit=j(pd.bind(null,e,t,l,a,i,n,r,o,s,k,1,b,v)),da(e,l,r,!h);return}pd(e,t,l,a,i,n,r,o,s)}function sg(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var n=a[i],l=n.getSnapshot;n=n.value;try{if(!at(l(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function da(e,t,a,i){t&=~zo,t&=~Ra,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var n=t;0<n;){var l=31-tt(n),r=1<<l;i[l]=-1,n&=~r}a!==0&&yc(e,a,t)}function bl(){return(oe&6)===0?(un(0),!1):!0}function Ao(){if(I!==null){if(ce===0)var e=I.return;else e=I,Bt=Ta=null,Lr(e),oi=null,Fi=0,e=I;for(;e!==null;)Ys(e.alternate,e),e=e.return;I=null}}function pi(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ag(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ao(),ge=e,I=a=_t(e.current,null),te=t,ce=0,rt=null,oa=!1,di=ji(e,t),ko=!1,mi=bt=zo=Ra=ca=ze=0,Fe=on=null,So=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var n=31-tt(i),l=1<<n;t|=e[n],i&=~l}return Vt=t,qn(),a}function ud(e,t){W=null,x.H=nl,t===Qi||t===Jn?(t=Du(),ce=3):t===Su?(t=Du(),ce=4):ce=t===ws?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,rt=t,I===null&&(ze=1,ul(e,mt(t,e.current)))}function sd(){var e=x.H;return x.H=nl,e===null?nl:e}function dd(){var e=x.A;return x.A=cg,e}function To(){ze=4,oa||(te&4194048)!==te&&ht.current!==null||(di=!0),(ca&134217727)===0&&(Ra&134217727)===0||ge===null||da(ge,te,bt,!1)}function Mo(e,t,a){var i=oe;oe|=2;var n=sd(),l=dd();(ge!==e||te!==t)&&(hl=null,pi(e,t)),t=!1;var r=ze;e:do try{if(ce!==0&&I!==null){var o=I,s=rt;switch(ce){case 8:Ao(),r=6;break e;case 3:case 2:case 9:case 6:ht.current===null&&(t=!0);var h=ce;if(ce=0,rt=null,hi(e,o,s,h),a&&di){r=0;break e}break;default:h=ce,ce=0,rt=null,hi(e,o,s,h)}}dg(),r=ze;break}catch(k){ud(e,k)}while(!0);return t&&e.shellSuspendCounter++,Bt=Ta=null,oe=i,x.H=n,x.A=l,I===null&&(ge=null,te=0,qn()),r}function dg(){for(;I!==null;)md(I)}function mg(e,t){var a=oe;oe|=2;var i=sd(),n=dd();ge!==e||te!==t?(hl=null,pl=jt()+500,pi(e,t)):di=ji(e,t);e:do try{if(ce!==0&&I!==null){t=I;var l=rt;t:switch(ce){case 1:ce=0,rt=null,hi(e,t,l,1);break;case 2:case 9:if(ju(l)){ce=0,rt=null,fd(t);break}t=function(){ce!==2&&ce!==9||ge!==e||(ce=7),Tt(e)},l.then(t,t);break e;case 3:ce=7;break e;case 4:ce=5;break e;case 7:ju(l)?(ce=0,rt=null,fd(t)):(ce=0,rt=null,hi(e,t,l,7));break;case 5:var r=null;switch(I.tag){case 26:r=I.memoizedState;case 5:case 27:var o=I;if(!r||Jd(r)){ce=0,rt=null;var s=o.sibling;if(s!==null)I=s;else{var h=o.return;h!==null?(I=h,vl(h)):I=null}break t}}ce=0,rt=null,hi(e,t,l,5);break;case 6:ce=0,rt=null,hi(e,t,l,6);break;case 8:Ao(),ze=6;break e;default:throw Error(d(462))}}fg();break}catch(k){ud(e,k)}while(!0);return Bt=Ta=null,x.H=i,x.A=n,oe=a,I!==null?0:(ge=null,te=0,qn(),ze)}function fg(){for(;I!==null&&!_m();)md(I)}function md(e){var t=qs(e.alternate,e,Vt);e.memoizedProps=e.pendingProps,t===null?vl(e):I=t}function fd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Os(a,t,t.pendingProps,t.type,void 0,te);break;case 11:t=Os(a,t,t.pendingProps,t.type.render,t.ref,te);break;case 5:Lr(t);default:Ys(a,t),t=I=gu(t,Vt),t=qs(a,t,Vt)}e.memoizedProps=e.pendingProps,t===null?vl(e):I=t}function hi(e,t,a,i){Bt=Ta=null,Lr(t),oi=null,Fi=0;var n=t.return;try{if(ag(e,n,t,a,te)){ze=1,ul(e,mt(a,e.current)),I=null;return}}catch(l){if(n!==null)throw I=n,l;ze=1,ul(e,mt(a,e.current)),I=null;return}t.flags&32768?(le||i===1?e=!0:di||(te&536870912)!==0?e=!1:(oa=e=!0,(i===2||i===9||i===3||i===6)&&(i=ht.current,i!==null&&i.tag===13&&(i.flags|=16384))),gd(t,e)):vl(t)}function vl(e){var t=e;do{if((t.flags&32768)!==0){gd(t,oa);return}e=t.return;var a=ng(t.alternate,t,Vt);if(a!==null){I=a;return}if(t=t.sibling,t!==null){I=t;return}I=t=e}while(t!==null);ze===0&&(ze=5)}function gd(e,t){do{var a=lg(e.alternate,e);if(a!==null){a.flags&=32767,I=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){I=e;return}I=e=a}while(e!==null);ze=6,I=null}function pd(e,t,a,i,n,l,r,o,s){e.cancelPendingCommit=null;do yl();while(qe!==0);if((oe&6)!==0)throw Error(d(327));if(t!==null){if(t===e.current)throw Error(d(177));if(l=t.lanes|t.childLanes,l|=yr,Lm(e,a,l,r,o,s),e===ge&&(I=ge=null,te=0),fi=t,sa=e,gi=a,Eo=l,Do=n,ld=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,bg(jn,function(){return xd(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=x.T,x.T=null,n=M.p,M.p=2,r=oe,oe|=4;try{rg(e,t,a)}finally{oe=r,M.p=n,x.T=i}}qe=1,hd(),bd(),vd()}}function hd(){if(qe===1){qe=0;var e=sa,t=fi,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=x.T,x.T=null;var i=M.p;M.p=2;var n=oe;oe|=4;try{Fs(t,e);var l=Xo,r=nu(e.containerInfo),o=l.focusedElem,s=l.selectionRange;if(r!==o&&o&&o.ownerDocument&&iu(o.ownerDocument.documentElement,o)){if(s!==null&&gr(o)){var h=s.start,k=s.end;if(k===void 0&&(k=h),"selectionStart"in o)o.selectionStart=h,o.selectionEnd=Math.min(k,o.value.length);else{var j=o.ownerDocument||document,b=j&&j.defaultView||window;if(b.getSelection){var v=b.getSelection(),Z=o.textContent.length,Y=Math.min(s.start,Z),de=s.end===void 0?Y:Math.min(s.end,Z);!v.extend&&Y>de&&(r=de,de=Y,Y=r);var f=au(o,Y),m=au(o,de);if(f&&m&&(v.rangeCount!==1||v.anchorNode!==f.node||v.anchorOffset!==f.offset||v.focusNode!==m.node||v.focusOffset!==m.offset)){var g=j.createRange();g.setStart(f.node,f.offset),v.removeAllRanges(),Y>de?(v.addRange(g),v.extend(m.node,m.offset)):(g.setEnd(m.node,m.offset),v.addRange(g))}}}}for(j=[],v=o;v=v.parentNode;)v.nodeType===1&&j.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<j.length;o++){var z=j[o];z.element.scrollLeft=z.left,z.element.scrollTop=z.top}}Nl=!!Yo,Xo=Yo=null}finally{oe=n,M.p=i,x.T=a}}e.current=t,qe=2}}function bd(){if(qe===2){qe=0;var e=sa,t=fi,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=x.T,x.T=null;var i=M.p;M.p=2;var n=oe;oe|=4;try{Js(e,t.alternate,t)}finally{oe=n,M.p=i,x.T=a}}qe=3}}function vd(){if(qe===4||qe===3){qe=0,Rm();var e=sa,t=fi,a=gi,i=ld;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?qe=5:(qe=0,fi=sa=null,yd(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(ua=null),Kl(a),t=t.stateNode,et&&typeof et.onCommitFiberRoot=="function")try{et.onCommitFiberRoot(Si,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=x.T,n=M.p,M.p=2,x.T=null;try{for(var l=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];l(o.value,{componentStack:o.stack})}}finally{x.T=t,M.p=n}}(gi&3)!==0&&yl(),Tt(e),n=e.pendingLanes,(a&4194090)!==0&&(n&42)!==0?e===wo?cn++:(cn=0,wo=e):cn=0,un(0)}}function yd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Yi(t)))}function yl(e){return hd(),bd(),vd(),xd()}function xd(){if(qe!==5)return!1;var e=sa,t=Eo;Eo=0;var a=Kl(gi),i=x.T,n=M.p;try{M.p=32>a?32:a,x.T=null,a=Do,Do=null;var l=sa,r=gi;if(qe=0,fi=sa=null,gi=0,(oe&6)!==0)throw Error(d(331));var o=oe;if(oe|=4,id(l.current),ed(l,l.current,r,a),oe=o,un(0,!1),et&&typeof et.onPostCommitFiberRoot=="function")try{et.onPostCommitFiberRoot(Si,l)}catch{}return!0}finally{M.p=n,x.T=i,yd(e,t)}}function kd(e,t,a){t=mt(a,t),t=no(e.stateNode,t,2),e=ea(e,t,2),e!==null&&(Ei(e,2),Tt(e))}function me(e,t,a){if(e.tag===3)kd(e,e,a);else for(;t!==null;){if(t.tag===3){kd(t,e,a);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ua===null||!ua.has(i))){e=mt(a,e),a=Es(2),i=ea(t,a,2),i!==null&&(Ds(a,i,t,e),Ei(i,2),Tt(i));break}}t=t.return}}function No(e,t,a){var i=e.pingCache;if(i===null){i=e.pingCache=new ug;var n=new Set;i.set(t,n)}else n=i.get(t),n===void 0&&(n=new Set,i.set(t,n));n.has(a)||(ko=!0,n.add(a),e=gg.bind(null,e,t,a),t.then(e,e))}function gg(e,t,a){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ge===e&&(te&a)===a&&(ze===4||ze===3&&(te&62914560)===te&&300>jt()-jo?(oe&2)===0&&pi(e,0):zo|=a,mi===te&&(mi=0)),Tt(e)}function zd(e,t){t===0&&(t=vc()),e=Wa(e,t),e!==null&&(Ei(e,t),Tt(e))}function pg(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),zd(e,a)}function hg(e,t){var a=0;switch(e.tag){case 13:var i=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(d(314))}i!==null&&i.delete(t),zd(e,a)}function bg(e,t){return Ql(e,t)}var xl=null,bi=null,Uo=!1,kl=!1,Oo=!1,Ca=0;function Tt(e){e!==bi&&e.next===null&&(bi===null?xl=bi=e:bi=bi.next=e),kl=!0,Uo||(Uo=!0,yg())}function un(e,t){if(!Oo&&kl){Oo=!0;do for(var a=!1,i=xl;i!==null;){if(e!==0){var n=i.pendingLanes;if(n===0)var l=0;else{var r=i.suspendedLanes,o=i.pingedLanes;l=(1<<31-tt(42|e)+1)-1,l&=n&~(r&~o),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(a=!0,Dd(i,l))}else l=te,l=wn(i,i===ge?l:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(l&3)===0||ji(i,l)||(a=!0,Dd(i,l));i=i.next}while(a);Oo=!1}}function vg(){Sd()}function Sd(){kl=Uo=!1;var e=0;Ca!==0&&(wg()&&(e=Ca),Ca=0);for(var t=jt(),a=null,i=xl;i!==null;){var n=i.next,l=jd(i,t);l===0?(i.next=null,a===null?xl=n:a.next=n,n===null&&(bi=a)):(a=i,(e!==0||(l&3)!==0)&&(kl=!0)),i=n}un(e)}function jd(e,t){for(var a=e.suspendedLanes,i=e.pingedLanes,n=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var r=31-tt(l),o=1<<r,s=n[r];s===-1?((o&a)===0||(o&i)!==0)&&(n[r]=Qm(o,t)):s<=t&&(e.expiredLanes|=o),l&=~o}if(t=ge,a=te,a=wn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,a===0||e===t&&(ce===2||ce===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Ll(i),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ji(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(i!==null&&Ll(i),Kl(a)){case 2:case 8:a=pc;break;case 32:a=jn;break;case 268435456:a=hc;break;default:a=jn}return i=Ed.bind(null,e),a=Ql(a,i),e.callbackPriority=t,e.callbackNode=a,t}return i!==null&&i!==null&&Ll(i),e.callbackPriority=2,e.callbackNode=null,2}function Ed(e,t){if(qe!==0&&qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(yl()&&e.callbackNode!==a)return null;var i=te;return i=wn(e,e===ge?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(od(e,i,t),jd(e,jt()),e.callbackNode!=null&&e.callbackNode===a?Ed.bind(null,e):null)}function Dd(e,t){if(yl())return null;od(e,t,!0)}function yg(){Tg(function(){(oe&6)!==0?Ql(gc,vg):Sd()})}function _o(){return Ca===0&&(Ca=bc()),Ca}function wd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Un(""+e)}function Ad(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function xg(e,t,a,i,n){if(t==="submit"&&a&&a.stateNode===n){var l=wd((n[Je]||null).action),r=i.submitter;r&&(t=(t=r[Je]||null)?wd(t.formAction):r.getAttribute("formAction"),t!==null&&(l=t,r=null));var o=new Cn("action","action",null,i,n);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ca!==0){var s=r?Ad(n,r):new FormData(n);Ir(a,{pending:!0,data:s,method:n.method,action:l},null,s)}}else typeof l=="function"&&(o.preventDefault(),s=r?Ad(n,r):new FormData(n),Ir(a,{pending:!0,data:s,method:n.method,action:l},l,s))},currentTarget:n}]})}}for(var Ro=0;Ro<vr.length;Ro++){var Co=vr[Ro],kg=Co.toLowerCase(),zg=Co[0].toUpperCase()+Co.slice(1);xt(kg,"on"+zg)}xt(ou,"onAnimationEnd"),xt(cu,"onAnimationIteration"),xt(uu,"onAnimationStart"),xt("dblclick","onDoubleClick"),xt("focusin","onFocus"),xt("focusout","onBlur"),xt(qf,"onTransitionRun"),xt(Hf,"onTransitionStart"),xt(Yf,"onTransitionCancel"),xt(su,"onTransitionEnd"),Ya("onMouseEnter",["mouseout","mouseover"]),Ya("onMouseLeave",["mouseout","mouseover"]),Ya("onPointerEnter",["pointerout","pointerover"]),Ya("onPointerLeave",["pointerout","pointerover"]),xa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),xa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),xa("onBeforeInput",["compositionend","keypress","textInput","paste"]),xa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),xa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),xa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(sn));function Td(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],n=i.event;i=i.listeners;e:{var l=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],s=o.instance,h=o.currentTarget;if(o=o.listener,s!==l&&n.isPropagationStopped())break e;l=o,n.currentTarget=h;try{l(n)}catch(k){cl(k)}n.currentTarget=null,l=s}else for(r=0;r<i.length;r++){if(o=i[r],s=o.instance,h=o.currentTarget,o=o.listener,s!==l&&n.isPropagationStopped())break e;l=o,n.currentTarget=h;try{l(n)}catch(k){cl(k)}n.currentTarget=null,l=s}}}}function ee(e,t){var a=t[Jl];a===void 0&&(a=t[Jl]=new Set);var i=e+"__bubble";a.has(i)||(Md(t,e,2,!1),a.add(i))}function Bo(e,t,a){var i=0;t&&(i|=4),Md(a,e,i,t)}var zl="_reactListening"+Math.random().toString(36).slice(2);function Go(e){if(!e[zl]){e[zl]=!0,Sc.forEach(function(a){a!=="selectionchange"&&(Sg.has(a)||Bo(a,!1,e),Bo(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zl]||(t[zl]=!0,Bo("selectionchange",!1,t))}}function Md(e,t,a,i){switch(em(t)){case 2:var n=Pg;break;case 8:n=Wg;break;default:n=Fo}a=n.bind(null,t,a,e),n=void 0,!lr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),i?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function qo(e,t,a,i,n){var l=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===n)break;if(r===4)for(r=i.return;r!==null;){var s=r.tag;if((s===3||s===4)&&r.stateNode.containerInfo===n)return;r=r.return}for(;o!==null;){if(r=Ga(o),r===null)return;if(s=r.tag,s===5||s===6||s===26||s===27){i=l=r;continue e}o=o.parentNode}}i=i.return}Bc(function(){var h=l,k=ir(a),j=[];e:{var b=du.get(e);if(b!==void 0){var v=Cn,Z=e;switch(e){case"keypress":if(_n(a)===0)break e;case"keydown":case"keyup":v=bf;break;case"focusin":Z="focus",v=ur;break;case"focusout":Z="blur",v=ur;break;case"beforeblur":case"afterblur":v=ur;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Hc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=lf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=xf;break;case ou:case cu:case uu:v=cf;break;case su:v=zf;break;case"scroll":case"scrollend":v=af;break;case"wheel":v=jf;break;case"copy":case"cut":case"paste":v=sf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Xc;break;case"toggle":case"beforetoggle":v=Df}var Y=(t&4)!==0,de=!Y&&(e==="scroll"||e==="scrollend"),f=Y?b!==null?b+"Capture":null:b;Y=[];for(var m=h,g;m!==null;){var z=m;if(g=z.stateNode,z=z.tag,z!==5&&z!==26&&z!==27||g===null||f===null||(z=Ai(m,f),z!=null&&Y.push(dn(m,z,g))),de)break;m=m.return}0<Y.length&&(b=new v(b,Z,null,a,k),j.push({event:b,listeners:Y}))}}if((t&7)===0){e:{if(b=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",b&&a!==ar&&(Z=a.relatedTarget||a.fromElement)&&(Ga(Z)||Z[Ba]))break e;if((v||b)&&(b=k.window===k?k:(b=k.ownerDocument)?b.defaultView||b.parentWindow:window,v?(Z=a.relatedTarget||a.toElement,v=h,Z=Z?Ga(Z):null,Z!==null&&(de=U(Z),Y=Z.tag,Z!==de||Y!==5&&Y!==27&&Y!==6)&&(Z=null)):(v=null,Z=h),v!==Z)){if(Y=Hc,z="onMouseLeave",f="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(Y=Xc,z="onPointerLeave",f="onPointerEnter",m="pointer"),de=v==null?b:wi(v),g=Z==null?b:wi(Z),b=new Y(z,m+"leave",v,a,k),b.target=de,b.relatedTarget=g,z=null,Ga(k)===h&&(Y=new Y(f,m+"enter",Z,a,k),Y.target=g,Y.relatedTarget=de,z=Y),de=z,v&&Z)t:{for(Y=v,f=Z,m=0,g=Y;g;g=vi(g))m++;for(g=0,z=f;z;z=vi(z))g++;for(;0<m-g;)Y=vi(Y),m--;for(;0<g-m;)f=vi(f),g--;for(;m--;){if(Y===f||f!==null&&Y===f.alternate)break t;Y=vi(Y),f=vi(f)}Y=null}else Y=null;v!==null&&Nd(j,b,v,Y,!1),Z!==null&&de!==null&&Nd(j,de,Z,Y,!0)}}e:{if(b=h?wi(h):window,v=b.nodeName&&b.nodeName.toLowerCase(),v==="select"||v==="input"&&b.type==="file")var R=Pc;else if(Jc(b))if(Wc)R=Cf;else{R=_f;var F=Of}else v=b.nodeName,!v||v.toLowerCase()!=="input"||b.type!=="checkbox"&&b.type!=="radio"?h&&tr(h.elementType)&&(R=Pc):R=Rf;if(R&&(R=R(e,h))){$c(j,R,a,k);break e}F&&F(e,b,h),e==="focusout"&&h&&b.type==="number"&&h.memoizedProps.value!=null&&er(b,"number",b.value)}switch(F=h?wi(h):window,e){case"focusin":(Jc(F)||F.contentEditable==="true")&&(Ja=F,pr=h,Ci=null);break;case"focusout":Ci=pr=Ja=null;break;case"mousedown":hr=!0;break;case"contextmenu":case"mouseup":case"dragend":hr=!1,lu(j,a,k);break;case"selectionchange":if(Gf)break;case"keydown":case"keyup":lu(j,a,k)}var B;if(dr)e:{switch(e){case"compositionstart":var X="onCompositionStart";break e;case"compositionend":X="onCompositionEnd";break e;case"compositionupdate":X="onCompositionUpdate";break e}X=void 0}else Ka?Zc(e,a)&&(X="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(X="onCompositionStart");X&&(Qc&&a.locale!=="ko"&&(Ka||X!=="onCompositionStart"?X==="onCompositionEnd"&&Ka&&(B=Gc()):(Pt=k,rr="value"in Pt?Pt.value:Pt.textContent,Ka=!0)),F=Sl(h,X),0<F.length&&(X=new Yc(X,e,null,a,k),j.push({event:X,listeners:F}),B?X.data=B:(B=Kc(a),B!==null&&(X.data=B)))),(B=Af?Tf(e,a):Mf(e,a))&&(X=Sl(h,"onBeforeInput"),0<X.length&&(F=new Yc("onBeforeInput","beforeinput",null,a,k),j.push({event:F,listeners:X}),F.data=B)),xg(j,e,h,a,k)}Td(j,t)})}function dn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Sl(e,t){for(var a=t+"Capture",i=[];e!==null;){var n=e,l=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||l===null||(n=Ai(e,a),n!=null&&i.unshift(dn(e,n,l)),n=Ai(e,t),n!=null&&i.push(dn(e,n,l))),e.tag===3)return i;e=e.return}return[]}function vi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Nd(e,t,a,i,n){for(var l=t._reactName,r=[];a!==null&&a!==i;){var o=a,s=o.alternate,h=o.stateNode;if(o=o.tag,s!==null&&s===i)break;o!==5&&o!==26&&o!==27||h===null||(s=h,n?(h=Ai(a,l),h!=null&&r.unshift(dn(a,h,s))):n||(h=Ai(a,l),h!=null&&r.push(dn(a,h,s)))),a=a.return}r.length!==0&&e.push({event:t,listeners:r})}var jg=/\r\n?/g,Eg=/\u0000|\uFFFD/g;function Ud(e){return(typeof e=="string"?e:""+e).replace(jg,`
`).replace(Eg,"")}function Od(e,t){return t=Ud(t),Ud(e)===t}function jl(){}function se(e,t,a,i,n,l){switch(a){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||La(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&La(e,""+i);break;case"className":Tn(e,"class",i);break;case"tabIndex":Tn(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Tn(e,a,i);break;case"style":Rc(e,i,l);break;case"data":if(t!=="object"){Tn(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Un(""+i),e.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(a==="formAction"?(t!=="input"&&se(e,t,"name",n.name,n,null),se(e,t,"formEncType",n.formEncType,n,null),se(e,t,"formMethod",n.formMethod,n,null),se(e,t,"formTarget",n.formTarget,n,null)):(se(e,t,"encType",n.encType,n,null),se(e,t,"method",n.method,n,null),se(e,t,"target",n.target,n,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Un(""+i),e.setAttribute(a,i);break;case"onClick":i!=null&&(e.onclick=jl);break;case"onScroll":i!=null&&ee("scroll",e);break;case"onScrollEnd":i!=null&&ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(d(61));if(a=i.__html,a!=null){if(n.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}a=Un(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""+i):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":i===!0?e.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,i):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(a,i):e.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(a):e.setAttribute(a,i);break;case"popover":ee("beforetoggle",e),ee("toggle",e),An(e,"popover",i);break;case"xlinkActuate":Ut(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ut(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ut(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ut(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ut(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ut(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":An(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ef.get(a)||a,An(e,a,i))}}function Ho(e,t,a,i,n,l){switch(a){case"style":Rc(e,i,l);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(d(61));if(a=i.__html,a!=null){if(n.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"children":typeof i=="string"?La(e,i):(typeof i=="number"||typeof i=="bigint")&&La(e,""+i);break;case"onScroll":i!=null&&ee("scroll",e);break;case"onScrollEnd":i!=null&&ee("scrollend",e);break;case"onClick":i!=null&&(e.onclick=jl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!jc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),l=e[Je]||null,l=l!=null?l[a]:null,typeof l=="function"&&e.removeEventListener(t,l,n),typeof i=="function")){typeof l!="function"&&l!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,i,n);break e}a in e?e[a]=i:i===!0?e.setAttribute(a,""):An(e,a,i)}}}function He(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ee("error",e),ee("load",e);var i=!1,n=!1,l;for(l in a)if(a.hasOwnProperty(l)){var r=a[l];if(r!=null)switch(l){case"src":i=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:se(e,t,l,r,a,null)}}n&&se(e,t,"srcSet",a.srcSet,a,null),i&&se(e,t,"src",a.src,a,null);return;case"input":ee("invalid",e);var o=l=r=n=null,s=null,h=null;for(i in a)if(a.hasOwnProperty(i)){var k=a[i];if(k!=null)switch(i){case"name":n=k;break;case"type":r=k;break;case"checked":s=k;break;case"defaultChecked":h=k;break;case"value":l=k;break;case"defaultValue":o=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(d(137,t));break;default:se(e,t,i,k,a,null)}}Nc(e,l,o,s,h,r,n,!1),Mn(e);return;case"select":ee("invalid",e),i=r=l=null;for(n in a)if(a.hasOwnProperty(n)&&(o=a[n],o!=null))switch(n){case"value":l=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:se(e,t,n,o,a,null)}t=l,a=r,e.multiple=!!i,t!=null?Qa(e,!!i,t,!1):a!=null&&Qa(e,!!i,a,!0);return;case"textarea":ee("invalid",e),l=n=i=null;for(r in a)if(a.hasOwnProperty(r)&&(o=a[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":n=o;break;case"children":l=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(d(91));break;default:se(e,t,r,o,a,null)}Oc(e,i,n,l),Mn(e);return;case"option":for(s in a)if(a.hasOwnProperty(s)&&(i=a[s],i!=null))switch(s){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:se(e,t,s,i,a,null)}return;case"dialog":ee("beforetoggle",e),ee("toggle",e),ee("cancel",e),ee("close",e);break;case"iframe":case"object":ee("load",e);break;case"video":case"audio":for(i=0;i<sn.length;i++)ee(sn[i],e);break;case"image":ee("error",e),ee("load",e);break;case"details":ee("toggle",e);break;case"embed":case"source":case"link":ee("error",e),ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in a)if(a.hasOwnProperty(h)&&(i=a[h],i!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:se(e,t,h,i,a,null)}return;default:if(tr(t)){for(k in a)a.hasOwnProperty(k)&&(i=a[k],i!==void 0&&Ho(e,t,k,i,a,void 0));return}}for(o in a)a.hasOwnProperty(o)&&(i=a[o],i!=null&&se(e,t,o,i,a,null))}function Dg(e,t,a,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,l=null,r=null,o=null,s=null,h=null,k=null;for(v in a){var j=a[v];if(a.hasOwnProperty(v)&&j!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":s=j;default:i.hasOwnProperty(v)||se(e,t,v,null,i,j)}}for(var b in i){var v=i[b];if(j=a[b],i.hasOwnProperty(b)&&(v!=null||j!=null))switch(b){case"type":l=v;break;case"name":n=v;break;case"checked":h=v;break;case"defaultChecked":k=v;break;case"value":r=v;break;case"defaultValue":o=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(d(137,t));break;default:v!==j&&se(e,t,b,v,i,j)}}Il(e,r,o,s,h,k,l,n);return;case"select":v=r=o=b=null;for(l in a)if(s=a[l],a.hasOwnProperty(l)&&s!=null)switch(l){case"value":break;case"multiple":v=s;default:i.hasOwnProperty(l)||se(e,t,l,null,i,s)}for(n in i)if(l=i[n],s=a[n],i.hasOwnProperty(n)&&(l!=null||s!=null))switch(n){case"value":b=l;break;case"defaultValue":o=l;break;case"multiple":r=l;default:l!==s&&se(e,t,n,l,i,s)}t=o,a=r,i=v,b!=null?Qa(e,!!a,b,!1):!!i!=!!a&&(t!=null?Qa(e,!!a,t,!0):Qa(e,!!a,a?[]:"",!1));return;case"textarea":v=b=null;for(o in a)if(n=a[o],a.hasOwnProperty(o)&&n!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:se(e,t,o,null,i,n)}for(r in i)if(n=i[r],l=a[r],i.hasOwnProperty(r)&&(n!=null||l!=null))switch(r){case"value":b=n;break;case"defaultValue":v=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(d(91));break;default:n!==l&&se(e,t,r,n,i,l)}Uc(e,b,v);return;case"option":for(var Z in a)if(b=a[Z],a.hasOwnProperty(Z)&&b!=null&&!i.hasOwnProperty(Z))switch(Z){case"selected":e.selected=!1;break;default:se(e,t,Z,null,i,b)}for(s in i)if(b=i[s],v=a[s],i.hasOwnProperty(s)&&b!==v&&(b!=null||v!=null))switch(s){case"selected":e.selected=b&&typeof b!="function"&&typeof b!="symbol";break;default:se(e,t,s,b,i,v)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Y in a)b=a[Y],a.hasOwnProperty(Y)&&b!=null&&!i.hasOwnProperty(Y)&&se(e,t,Y,null,i,b);for(h in i)if(b=i[h],v=a[h],i.hasOwnProperty(h)&&b!==v&&(b!=null||v!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(d(137,t));break;default:se(e,t,h,b,i,v)}return;default:if(tr(t)){for(var de in a)b=a[de],a.hasOwnProperty(de)&&b!==void 0&&!i.hasOwnProperty(de)&&Ho(e,t,de,void 0,i,b);for(k in i)b=i[k],v=a[k],!i.hasOwnProperty(k)||b===v||b===void 0&&v===void 0||Ho(e,t,k,b,i,v);return}}for(var f in a)b=a[f],a.hasOwnProperty(f)&&b!=null&&!i.hasOwnProperty(f)&&se(e,t,f,null,i,b);for(j in i)b=i[j],v=a[j],!i.hasOwnProperty(j)||b===v||b==null&&v==null||se(e,t,j,b,i,v)}var Yo=null,Xo=null;function El(e){return e.nodeType===9?e:e.ownerDocument}function _d(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Rd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Qo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Lo=null;function wg(){var e=window.event;return e&&e.type==="popstate"?e===Lo?!1:(Lo=e,!0):(Lo=null,!1)}var Cd=typeof setTimeout=="function"?setTimeout:void 0,Ag=typeof clearTimeout=="function"?clearTimeout:void 0,Bd=typeof Promise=="function"?Promise:void 0,Tg=typeof queueMicrotask=="function"?queueMicrotask:typeof Bd<"u"?function(e){return Bd.resolve(null).then(e).catch(Mg)}:Cd;function Mg(e){setTimeout(function(){throw e})}function ma(e){return e==="head"}function Gd(e,t){var a=t,i=0,n=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(0<i&&8>i){a=i;var r=e.ownerDocument;if(a&1&&mn(r.documentElement),a&2&&mn(r.body),a&4)for(a=r.head,mn(a),r=a.firstChild;r;){var o=r.nextSibling,s=r.nodeName;r[Di]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=o}}if(n===0){e.removeChild(l),xn(t);return}n--}else a==="$"||a==="$?"||a==="$!"?n++:i=a.charCodeAt(0)-48;else i=0;a=l}while(a);xn(t)}function Vo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Vo(a),$l(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Ng(e,t,a,i){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Di])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var l=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=zt(e.nextSibling),e===null)break}return null}function Ug(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=zt(e.nextSibling),e===null))return null;return e}function Zo(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Og(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var i=function(){t(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Ko=null;function qd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function Hd(e,t,a){switch(t=El(a),e){case"html":if(e=t.documentElement,!e)throw Error(d(452));return e;case"head":if(e=t.head,!e)throw Error(d(453));return e;case"body":if(e=t.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function mn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);$l(e)}var vt=new Map,Yd=new Set;function Dl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Zt=M.d;M.d={f:_g,r:Rg,D:Cg,C:Bg,L:Gg,m:qg,X:Yg,S:Hg,M:Xg};function _g(){var e=Zt.f(),t=bl();return e||t}function Rg(e){var t=qa(e);t!==null&&t.tag===5&&t.type==="form"?os(t):Zt.r(e)}var yi=typeof document>"u"?null:document;function Xd(e,t,a){var i=yi;if(i&&typeof t=="string"&&t){var n=dt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Yd.has(n)||(Yd.add(n),e={rel:e,crossOrigin:a,href:t},i.querySelector(n)===null&&(t=i.createElement("link"),He(t,"link",e),_e(t),i.head.appendChild(t)))}}function Cg(e){Zt.D(e),Xd("dns-prefetch",e,null)}function Bg(e,t){Zt.C(e,t),Xd("preconnect",e,t)}function Gg(e,t,a){Zt.L(e,t,a);var i=yi;if(i&&e&&t){var n='link[rel="preload"][as="'+dt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+dt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+dt(a.imageSizes)+'"]')):n+='[href="'+dt(e)+'"]';var l=n;switch(t){case"style":l=xi(e);break;case"script":l=ki(e)}vt.has(l)||(e=_({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),vt.set(l,e),i.querySelector(n)!==null||t==="style"&&i.querySelector(fn(l))||t==="script"&&i.querySelector(gn(l))||(t=i.createElement("link"),He(t,"link",e),_e(t),i.head.appendChild(t)))}}function qg(e,t){Zt.m(e,t);var a=yi;if(a&&e){var i=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+dt(i)+'"][href="'+dt(e)+'"]',l=n;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=ki(e)}if(!vt.has(l)&&(e=_({rel:"modulepreload",href:e},t),vt.set(l,e),a.querySelector(n)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(gn(l)))return}i=a.createElement("link"),He(i,"link",e),_e(i),a.head.appendChild(i)}}}function Hg(e,t,a){Zt.S(e,t,a);var i=yi;if(i&&e){var n=Ha(i).hoistableStyles,l=xi(e);t=t||"default";var r=n.get(l);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(fn(l)))o.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":t},a),(a=vt.get(l))&&Jo(e,a);var s=r=i.createElement("link");_e(s),He(s,"link",e),s._p=new Promise(function(h,k){s.onload=h,s.onerror=k}),s.addEventListener("load",function(){o.loading|=1}),s.addEventListener("error",function(){o.loading|=2}),o.loading|=4,wl(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},n.set(l,r)}}}function Yg(e,t){Zt.X(e,t);var a=yi;if(a&&e){var i=Ha(a).hoistableScripts,n=ki(e),l=i.get(n);l||(l=a.querySelector(gn(n)),l||(e=_({src:e,async:!0},t),(t=vt.get(n))&&$o(e,t),l=a.createElement("script"),_e(l),He(l,"link",e),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(n,l))}}function Xg(e,t){Zt.M(e,t);var a=yi;if(a&&e){var i=Ha(a).hoistableScripts,n=ki(e),l=i.get(n);l||(l=a.querySelector(gn(n)),l||(e=_({src:e,async:!0,type:"module"},t),(t=vt.get(n))&&$o(e,t),l=a.createElement("script"),_e(l),He(l,"link",e),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(n,l))}}function Qd(e,t,a,i){var n=(n=K.current)?Dl(n):null;if(!n)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=xi(a.href),a=Ha(n).hoistableStyles,i=a.get(t),i||(i={type:"style",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=xi(a.href);var l=Ha(n).hoistableStyles,r=l.get(e);if(r||(n=n.ownerDocument||n,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,r),(l=n.querySelector(fn(e)))&&!l._p&&(r.instance=l,r.state.loading=5),vt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vt.set(e,a),l||Qg(n,e,a,r.state))),t&&i===null)throw Error(d(528,""));return r}if(t&&i!==null)throw Error(d(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ki(a),a=Ha(n).hoistableScripts,i=a.get(t),i||(i={type:"script",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function xi(e){return'href="'+dt(e)+'"'}function fn(e){return'link[rel="stylesheet"]['+e+"]"}function Ld(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function Qg(e,t,a,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),He(t,"link",a),_e(t),e.head.appendChild(t))}function ki(e){return'[src="'+dt(e)+'"]'}function gn(e){return"script[async]"+e}function Vd(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+dt(a.href)+'"]');if(i)return t.instance=i,_e(i),i;var n=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),_e(i),He(i,"style",n),wl(i,a.precedence,e),t.instance=i;case"stylesheet":n=xi(a.href);var l=e.querySelector(fn(n));if(l)return t.state.loading|=4,t.instance=l,_e(l),l;i=Ld(a),(n=vt.get(n))&&Jo(i,n),l=(e.ownerDocument||e).createElement("link"),_e(l);var r=l;return r._p=new Promise(function(o,s){r.onload=o,r.onerror=s}),He(l,"link",i),t.state.loading|=4,wl(l,a.precedence,e),t.instance=l;case"script":return l=ki(a.src),(n=e.querySelector(gn(l)))?(t.instance=n,_e(n),n):(i=a,(n=vt.get(l))&&(i=_({},a),$o(i,n)),e=e.ownerDocument||e,n=e.createElement("script"),_e(n),He(n,"link",i),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(d(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,wl(i,a.precedence,e));return t.instance}function wl(e,t,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=i.length?i[i.length-1]:null,l=n,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)l=o;else if(l!==n)break}l?l.parentNode.insertBefore(e,l.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Jo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function $o(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Al=null;function Zd(e,t,a){if(Al===null){var i=new Map,n=Al=new Map;n.set(a,i)}else n=Al,i=n.get(a),i||(i=new Map,n.set(a,i));if(i.has(e))return i;for(i.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var l=a[n];if(!(l[Di]||l[Xe]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var r=l.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(l):i.set(r,[l])}}return i}function Kd(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Lg(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Jd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var pn=null;function Vg(){}function Zg(e,t,a){if(pn===null)throw Error(d(475));var i=pn;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var n=xi(a.href),l=e.querySelector(fn(n));if(l){e=l._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=Tl.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=l,_e(l);return}l=e.ownerDocument||e,a=Ld(a),(n=vt.get(n))&&Jo(a,n),l=l.createElement("link"),_e(l);var r=l;r._p=new Promise(function(o,s){r.onload=o,r.onerror=s}),He(l,"link",a),t.instance=l}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(i.count++,t=Tl.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}function Kg(){if(pn===null)throw Error(d(475));var e=pn;return e.stylesheets&&e.count===0&&Po(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&Po(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Tl(){if(this.count--,this.count===0){if(this.stylesheets)Po(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ml=null;function Po(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ml=new Map,t.forEach(Jg,e),Ml=null,Tl.call(e))}function Jg(e,t){if(!(t.state.loading&4)){var a=Ml.get(e);if(a)var i=a.get(null);else{a=new Map,Ml.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<n.length;l++){var r=n[l];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(a.set(r.dataset.precedence,r),i=r)}i&&a.set(null,i)}n=t.instance,r=n.getAttribute("data-precedence"),l=a.get(r)||i,l===i&&a.set(null,n),a.set(r,n),this.count++,i=Tl.bind(this),n.addEventListener("load",i),n.addEventListener("error",i),l?l.parentNode.insertBefore(n,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var hn={$$typeof:be,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function $g(e,t,a,i,n,l,r,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vl(0),this.hiddenUpdates=Vl(null),this.identifierPrefix=i,this.onUncaughtError=n,this.onCaughtError=l,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function $d(e,t,a,i,n,l,r,o,s,h,k,j){return e=new $g(e,t,a,r,o,s,h,j),t=1,l===!0&&(t|=24),l=it(3,null,null,t),e.current=l,l.stateNode=e,t=Mr(),t.refCount++,e.pooledCache=t,t.refCount++,l.memoizedState={element:i,isDehydrated:a,cache:t},_r(l),e}function Pd(e){return e?(e=Fa,e):Fa}function Wd(e,t,a,i,n,l){n=Pd(n),i.context===null?i.context=n:i.pendingContext=n,i=It(t),i.payload={element:a},l=l===void 0?null:l,l!==null&&(i.callback=l),a=ea(e,i,t),a!==null&&(ct(a,e,t),Vi(a,e,t))}function Fd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Wo(e,t){Fd(e,t),(e=e.alternate)&&Fd(e,t)}function Id(e){if(e.tag===13){var t=Wa(e,67108864);t!==null&&ct(t,e,67108864),Wo(e,67108864)}}var Nl=!0;function Pg(e,t,a,i){var n=x.T;x.T=null;var l=M.p;try{M.p=2,Fo(e,t,a,i)}finally{M.p=l,x.T=n}}function Wg(e,t,a,i){var n=x.T;x.T=null;var l=M.p;try{M.p=8,Fo(e,t,a,i)}finally{M.p=l,x.T=n}}function Fo(e,t,a,i){if(Nl){var n=Io(i);if(n===null)qo(e,t,i,Ul,a),tm(e,i);else if(Ig(n,e,t,a,i))i.stopPropagation();else if(tm(e,i),t&4&&-1<Fg.indexOf(e)){for(;n!==null;){var l=qa(n);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var r=ya(l.pendingLanes);if(r!==0){var o=l;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var s=1<<31-tt(r);o.entanglements[1]|=s,r&=~s}Tt(l),(oe&6)===0&&(pl=jt()+500,un(0))}}break;case 13:o=Wa(l,2),o!==null&&ct(o,l,2),bl(),Wo(l,2)}if(l=Io(i),l===null&&qo(e,t,i,Ul,a),l===n)break;n=l}n!==null&&i.stopPropagation()}else qo(e,t,i,null,a)}}function Io(e){return e=ir(e),ec(e)}var Ul=null;function ec(e){if(Ul=null,e=Ga(e),e!==null){var t=U(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=A(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ul=e,null}function em(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Cm()){case gc:return 2;case pc:return 8;case jn:case Bm:return 32;case hc:return 268435456;default:return 32}default:return 32}}var tc=!1,fa=null,ga=null,pa=null,bn=new Map,vn=new Map,ha=[],Fg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function tm(e,t){switch(e){case"focusin":case"focusout":fa=null;break;case"dragenter":case"dragleave":ga=null;break;case"mouseover":case"mouseout":pa=null;break;case"pointerover":case"pointerout":bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vn.delete(t.pointerId)}}function yn(e,t,a,i,n,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:a,eventSystemFlags:i,nativeEvent:l,targetContainers:[n]},t!==null&&(t=qa(t),t!==null&&Id(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Ig(e,t,a,i,n){switch(t){case"focusin":return fa=yn(fa,e,t,a,i,n),!0;case"dragenter":return ga=yn(ga,e,t,a,i,n),!0;case"mouseover":return pa=yn(pa,e,t,a,i,n),!0;case"pointerover":var l=n.pointerId;return bn.set(l,yn(bn.get(l)||null,e,t,a,i,n)),!0;case"gotpointercapture":return l=n.pointerId,vn.set(l,yn(vn.get(l)||null,e,t,a,i,n)),!0}return!1}function am(e){var t=Ga(e.target);if(t!==null){var a=U(t);if(a!==null){if(t=a.tag,t===13){if(t=A(a),t!==null){e.blockedOn=t,Vm(e.priority,function(){if(a.tag===13){var i=ot();i=Zl(i);var n=Wa(a,i);n!==null&&ct(n,a,i),Wo(a,i)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ol(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Io(e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);ar=i,a.target.dispatchEvent(i),ar=null}else return t=qa(a),t!==null&&Id(t),e.blockedOn=a,!1;t.shift()}return!0}function im(e,t,a){Ol(e)&&a.delete(t)}function e0(){tc=!1,fa!==null&&Ol(fa)&&(fa=null),ga!==null&&Ol(ga)&&(ga=null),pa!==null&&Ol(pa)&&(pa=null),bn.forEach(im),vn.forEach(im)}function _l(e,t){e.blockedOn===t&&(e.blockedOn=null,tc||(tc=!0,p.unstable_scheduleCallback(p.unstable_NormalPriority,e0)))}var Rl=null;function nm(e){Rl!==e&&(Rl=e,p.unstable_scheduleCallback(p.unstable_NormalPriority,function(){Rl===e&&(Rl=null);for(var t=0;t<e.length;t+=3){var a=e[t],i=e[t+1],n=e[t+2];if(typeof i!="function"){if(ec(i||a)===null)continue;break}var l=qa(a);l!==null&&(e.splice(t,3),t-=3,Ir(l,{pending:!0,data:n,method:a.method,action:i},i,n))}}))}function xn(e){function t(s){return _l(s,e)}fa!==null&&_l(fa,e),ga!==null&&_l(ga,e),pa!==null&&_l(pa,e),bn.forEach(t),vn.forEach(t);for(var a=0;a<ha.length;a++){var i=ha[a];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ha.length&&(a=ha[0],a.blockedOn===null);)am(a),a.blockedOn===null&&ha.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var n=a[i],l=a[i+1],r=n[Je]||null;if(typeof l=="function")r||nm(a);else if(r){var o=null;if(l&&l.hasAttribute("formAction")){if(n=l,r=l[Je]||null)o=r.formAction;else if(ec(n)!==null)continue}else o=r.action;typeof o=="function"?a[i+1]=o:(a.splice(i,3),i-=3),nm(a)}}}function ac(e){this._internalRoot=e}Cl.prototype.render=ac.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(d(409));var a=t.current,i=ot();Wd(a,i,e,t,null,null)},Cl.prototype.unmount=ac.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wd(e.current,2,null,e,null,null),bl(),t[Ba]=null}};function Cl(e){this._internalRoot=e}Cl.prototype.unstable_scheduleHydration=function(e){if(e){var t=kc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ha.length&&t!==0&&t<ha[a].priority;a++);ha.splice(a,0,e),a===0&&am(e)}};var lm=w.version;if(lm!=="19.1.1")throw Error(d(527,lm,"19.1.1"));M.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=T(t),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var t0={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:x,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bl.isDisabled&&Bl.supportsFiber)try{Si=Bl.inject(t0),et=Bl}catch{}}return zn.createRoot=function(e,t){if(!O(e))throw Error(d(299));var a=!1,i="",n=ks,l=zs,r=Ss,o=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(l=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(o=t.unstable_transitionCallbacks)),t=$d(e,1,!1,null,null,a,i,n,l,r,o,null),e[Ba]=t.current,Go(e),new ac(t)},zn.hydrateRoot=function(e,t,a){if(!O(e))throw Error(d(299));var i=!1,n="",l=ks,r=zs,o=Ss,s=null,h=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(l=a.onUncaughtError),a.onCaughtError!==void 0&&(r=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(s=a.unstable_transitionCallbacks),a.formState!==void 0&&(h=a.formState)),t=$d(e,1,!0,t,a??null,i,n,l,r,o,s,h),t.context=Pd(null),a=t.current,i=ot(),i=Zl(i),n=It(i),n.callback=null,ea(a,n,i),a=i,t.current.lanes=a,Ei(t,a),Tt(t),e[Ba]=t.current,Go(e),new Cl(t)},zn.version="19.1.1",zn}var pm;function s0(){if(pm)return lc.exports;pm=1;function p(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p)}catch(w){console.error(w)}}return p(),lc.exports=u0(),lc.exports}var d0=s0();const jm=ne.createContext({theme:"dark",toggleTheme:()=>{},isDark:!0}),m0=({children:p})=>{const[w,C]=ne.useState("dark");ne.useEffect(()=>{const G=localStorage.getItem("portfolio-theme")||"dark";C(G),d(G)},[]);const d=A=>{A==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme")},U={theme:w,toggleTheme:()=>{const A=w==="dark"?"light":"dark";C(A),localStorage.setItem("portfolio-theme",A),d(A)},isDark:w==="dark"};return c.jsx(jm.Provider,{value:U,children:p})},f0=()=>{const p=ne.useContext(jm);if(!p)throw new Error("useTheme must be used within a ThemeProvider");return p},g0={personal:"Personal Info",experience:"Experience",projects:"Projects",education:"Education"},p0={greeting:"Hi, I'm",name:"Kelami Batuhan",title:"Computer Science Student • Software Developer",description:"I develop software solutions that meet real-world needs, from full-stack web and backend systems to mobile applications built with Kotlin. Alongside these, I also explore game development, which strengthens my creativity and broadens my problem-solving perspective. My goal is to grow as a versatile engineer who can deliver reliable, scalable, and user-focused digital products.",getInTouch:"Get In Touch",downloadCV:"Download CV",emailOpened:"Email Opened!",downloaded:"Downloaded!",emailSubject:"Portfolio Inquiry",emailBody:"Hello Kelami Batuhan, I would like to discuss...",githubProfile:"GitHub profile",linkedinProfile:"LinkedIn profile",emailContact:"Email contact",scrollToExperience:"Scroll to experience section"},h0={title:"Experience",description:"My professional journey and key achievements",experienceTitle:"Professional Experience",skillsTitle:"Technical Skills",skillsDescription:"Technologies and tools I work with",allFilter:"All",internshipFilter:"Internships",gamejamFilter:"Game Jams",page:"Page",of:"of",previous:"Previous",next:"Next",skills:{programmingLanguages:"Programming Languages",webTechnologies:"Web Technologies",mobileGameDevelopment:"Mobile & Game Development",testingAutomation:"Testing & Automation",databases:"Databases"},experiences:{secureComputing:{company:"Secure Computing",role:"Software Development Intern",duration:"Mar 2024 – Aug 2024",location:"Online",description:["Developed 'Collectify', a full-stack media collection management system as a portfolio project.","Designed and implemented a 3-tier architecture (React.js + Material-UI frontend, Node.js + Express.js backend, MongoDB database).","Built RESTful APIs, integrated database models, and implemented secure file upload with Multer.","Applied advanced React patterns: hooks, context, modular component architecture, and dynamic Material-UI theming.","Wrote unit, integration, and E2E tests using Jest and Playwright, achieving 80%+ code coverage.","Practiced clean code, SOLID principles, and modern Git workflow throughout the project.","Documented API endpoints and project setup for developer onboarding."]},ankuGameJam:{company:"ANKU GameJam (Ankara University)",role:"Backend & Gameplay Developer",duration:"May 2025",location:"Ankara, Turkey",description:["Developed all core gameplay scripts in C# for the puzzle game 'Axolotl Ascension' using Unity.","Designed and implemented unique puzzle mechanics: players place objects on the map, assign timers, and solve challenges before their own or the objects' time runs out.","Handled player controls, time-based puzzle logic, and interactive UI elements.","Collaborated with a multidisciplinary team on game design, UI/UX, and rapid prototyping.","Demonstrated strong teamwork, problem-solving, and creativity under strict time constraints."]},puraGameJam:{company:"PURA GameJam (Hacettepe University)",role:"Level Designer & Game Designer",duration:"March 2025",location:"Ankara, Turkey",description:["Co-developed the award-winning puzzle-adventure game 'Paper Tale', which placed 2nd in the competition.","Designed all game levels and crafted the core gameplay mechanics and story concept.","Created a unique narrative: the main character embarks on a magical journey inside a fairy tale book, collecting objects and powers from enchanted storybooks to progress.","Collaborated with a multidisciplinary team, contributing to both level design and overall game vision.","Demonstrated creativity, storytelling, and teamwork under tight deadlines."]},ayazJam:{company:"AyazJam (Gazi University)",role:"Backend Developer",duration:"Dec 2024",location:"Ankara, Turkey",description:["Participated in my first game jam as a backend developer.","Collaborated with a team to implement basic game mechanics and backend logic."]}}},b0=JSON.parse(`{"title":"Projects","description":"A showcase of my work and passion projects","viewLive":"View Live","viewCode":"View Code","viewImages":"View Images","featuredProject":"Featured Project","allFilter":"All Projects","webFilter":"Web Development","backendFilter":"Backend Development","gameFilter":"Game Development","mobileFilter":"Mobile Apps","toolsFilter":"Testing & Automation","page":"Page","of":"of","previous":"Previous","next":"Next","showing":"Showing","projects":"projects","modal":{"projectOverview":"Project Overview","keyFeatures":"Key Features","technicalStack":"Technical Stack","learningOutcomes":"Learning Outcomes"},"data":{"collectify":{"title":"Collectify","description":["Full-stack media collection management system","React.js frontend with Material-UI design","Node.js backend with MongoDB database","Comprehensive testing with Jest & Playwright"],"detailedInfo":{"overview":"Collectify is a comprehensive full-stack media collection management system built as a portfolio project to demonstrate modern web development practices and software engineering principles.","features":["3-tier architecture with React.js frontend, Node.js backend, and MongoDB database","Complete CRUD operations for books, movies, series, and games","Advanced React patterns: hooks, context, modular component architecture","Dynamic Material-UI theming with dark/light mode support","RESTful API design with proper HTTP methods and status codes","Secure file upload system using Multer middleware","Comprehensive testing suite with Jest and Playwright (80%+ coverage)","Interactive data visualization with Chart.js","Responsive design for all device types"],"learningOutcomes":["Full-stack application architecture and design patterns","RESTful API development and database integration","Modern React.js with hooks and context management","Responsive UI/UX design with Material-UI","Comprehensive testing strategies","Clean code principles and SOLID design patterns"]}},"projectManagement":{"title":"Project Management Panel","description":["Modern project tracking and management system","Interactive dashboard with charts and analytics","Real-time updates using React Query","Complete CRUD operations with responsive design"],"detailedInfo":{"overview":"A modern web application designed for efficient project tracking and management with visual analytics and real-time data updates.","features":["Interactive dashboard with pie charts and status cards","Complete project lifecycle management (To Do, In Progress, Completed)","Real-time data updates using React Query for optimized performance","Responsive Material-UI design system implementation","Advanced sorting, filtering, and pagination functionality","CRUD operations with intuitive modal dialogs","Data visualization with Recharts for project analytics","Error handling and user notification system"],"techDetails":{"Frontend":["React (Functional Components)","Material-UI (MUI)","Recharts","@tanstack/react-query"],"Backend":["Node.js","Express.js","MongoDB","CORS"],"Features":["Real-time Updates","Data Caching","Responsive Design","Interactive Charts"]},"learningOutcomes":["Modern React patterns with hooks and functional components","State management with React Query for server state","Data visualization techniques with Recharts","Material-UI component library mastery","REST API integration and error handling"]}},"pythonIn20Days":{"title":"Python in 20 Days (Mobile App)","description":["Educational Android app for Python learning","20 interactive lessons with gamified experience","Bilingual support (Turkish/English)","Modern Jetpack Compose UI with mascot guidance"],"detailedInfo":{"overview":"Python in 20 Days is an educational Android app designed to teach Python programming fundamentals through an engaging, interactive, and gamified experience. The app features a mascot (KOBOT) guiding users through 20 structured lessons, with bilingual support and modern UI/UX.","features":["20 progressive lessons from Python basics to intermediate concepts","Interactive learning: multiple choice, fill-in-the-blank, code output prediction","Bilingual support: Turkish and English with dynamic switching","Gamified experience: progress tracking, achievements, level system","Animated UI: mascot animations, smooth transitions, visual feedback","Modern architecture: Clean Architecture, MVVM, single-activity pattern","Custom Compose components and advanced animations","Persistent progress and language settings with SharedPreferences"],"techDetails":{"Frontend & UI":["Jetpack Compose","Material 3","Custom Animations","Responsive Design"],"Architecture":["MVVM","Single Activity","Repository Pattern","Manual DI"],"Data & Storage":["SharedPreferences","Local Storage"],"Development":["Kotlin","Gradle","Android Studio"]},"learningOutcomes":["Advanced Android development with Jetpack Compose","Clean Architecture and modular design","SOLID principles and maintainable code","UI/UX design and accessibility","Gamification and interactive learning design","Internationalization and localization","Performance optimization and memory management"]}},"paperTale":{"title":"Paper Tale","description":["Award-winning puzzle-adventure game (2nd place)","Unity-based magical journey game","Unique storytelling mechanics","Team collaboration project"],"detailedInfo":{"overview":"Paper Tale is an award-winning puzzle-adventure game developed during PURA GameJam at Hacettepe University, achieving 2nd place in the competition. The game features a touching narrative about a father's magical journey through fairy tale worlds to save his daughter, with innovative gameplay mechanics centered around collecting magical objects and powers from enchanted storybooks.","features":["Compelling narrative: Father's quest to find cure for his daughter through magical fairy tale worlds","Innovative story-driven gameplay: Progression through collecting magical objects and powers from storybooks","Multi-layered level design: Each level represents different fairy tale environments with unique challenges","Immersive storytelling: Deep narrative integration with gameplay mechanics","Puzzle-adventure mechanics: Strategic thinking required to progress through magical worlds","Award-winning design: Recognized with 2nd place at PURA GameJam competition","Collaborative team development: Worked with multidisciplinary team under tight deadlines","Emotional storytelling: Touching father-daughter relationship at the core of the narrative"],"techDetails":{"Game Engine":["Unity 2D","C# Scripting","Scene Management"],"Design Role":["Level Design","Game Design","Narrative Design","Storytelling"],"Game Mechanics":["Puzzle-Adventure Elements","Object Collection System","Story Progression"],"Team Collaboration":["Multidisciplinary Team","GameJam Environment","Rapid Prototyping"]},"learningOutcomes":["Advanced level design principles and spatial storytelling","Game narrative integration with gameplay mechanics","Collaborative game development in time-constrained environment","Player experience design and emotional engagement techniques","Storytelling through interactive media and game design","Team leadership and creative vision communication","Rapid iteration and creative problem-solving under pressure"]}},"axolotlAscension":{"title":"Axolotl Ascension","description":["Innovative puzzle game with time mechanics","Unity engine with C# gameplay scripts","Creative timer-based challenges","GameJam competition entry"],"detailedInfo":{"overview":"Axolotl Ascension is a 2D puzzle-platform game developed during the Ankara University ANKU GameJam. The game features a unique time-sharing mechanic where players distribute their character's lifetime to placed objects while racing to rescue axolotls.","features":["Strategic object placement system with limited resources","Unique time-sharing mechanic: character distributes lifetime to objects","Dynamic timer system with visual countdown warnings","Pixel-perfect camera tracking and pre-game exploration","Advanced level management and transition system","Complete audio integration with placement and animation sounds","Pause system with menu navigation","Modular architecture using design patterns","Performance optimizations with object pooling and coroutines"],"techDetails":{"Game Engine":["Unity 2022.3 LTS","C# .NET Framework","2D Universal Render Pipeline"],"Architecture":["Singleton Pattern","Component Pattern","Observer Pattern","State Machine"],"Core Systems":["Timer System","Level Manager","Object Placement","Camera Follow"],"Optimization":["Object Pooling","Coroutines","Event-Driven Architecture"]},"learningOutcomes":["Advanced Unity game development and C# programming","Game physics, collision detection, and 2D mechanics","Design patterns implementation in game development","Performance optimization and memory management","UI/UX programming and responsive game interfaces","Team collaboration and agile development in GameJam environment","Version control and code architecture in game projects"]}},"todoApi":{"title":"Todo-API","description":["RESTful API with Node.js and Express.js","Complete CRUD operations for todos","MongoDB integration with data validation","Swagger documentation and Jest testing"],"detailedInfo":{"overview":"A robust RESTful API built with Node.js and Express.js, demonstrating backend development best practices, API design patterns, and comprehensive testing methodologies.","features":["Complete CRUD operations for todo management","RESTful API design with proper HTTP methods and status codes","MongoDB integration with optimized data models","Swagger UI for interactive API documentation","Advanced data validation and error handling","UUID-based unique identifier generation","Environment variable management with dotenv","Comprehensive Jest testing suite","Modular project structure for maintainability"],"techDetails":{"Core":["Node.js","Express.js","MongoDB"],"Documentation":["Swagger UI Express","OpenAPI 3.0"],"Testing":["Jest","Supertest","Unit Tests","Integration Tests"],"Utilities":["UUID","dotenv","CORS","Morgan Logging"]},"learningOutcomes":["RESTful API architecture and design principles","MongoDB database design and optimization","API documentation with Swagger/OpenAPI","Test-driven development with Jest","Error handling and middleware patterns"]}},"softwareTestingSuite":{"title":"Software Testing Suite","description":["Comprehensive testing with Playwright & Jest","E2E testing for social media & e-commerce","Unit and integration test coverage","Cross-browser automation testing"],"detailedInfo":{"overview":"A comprehensive software testing suite demonstrating proficiency in various testing methodologies, from unit tests to end-to-end automation testing.","features":["End-to-end testing with Playwright for web applications","Social media workflow testing (X/Twitter authentication and messaging)","E-commerce functionality testing (Trendyol shopping cart operations)","Unit testing for basic operations and text analysis functions","Integration testing for database operations and MongoDB","Library management system testing","Shopping cart functionality validation","Cross-browser testing capabilities"],"techDetails":{"E2E Testing":["Playwright","Cross-browser Support","Web Automation"],"Unit Testing":["Jest","Function Testing","Text Analysis"],"Integration":["MongoDB Testing","Database Operations","API Testing"],"Applications":["Social Media Testing","E-commerce Testing","Library Systems"]},"learningOutcomes":["End-to-end testing strategies and implementation","Test automation with Playwright","Unit and integration testing methodologies","Cross-browser compatibility testing","Database testing and validation techniques"]}},"pythonSeleniumAutomation":{"title":"Python & Selenium Automation","description":["Python programming exercises collection","Selenium web automation projects","Data structures and web scraping","Browser automation techniques"],"detailedInfo":{"overview":"A comprehensive collection of Python programming exercises and Selenium web automation projects, showcasing progression from Python fundamentals to advanced web automation techniques.","features":["Python programming fundamentals and best practices","Data structures implementation and manipulation","Web automation using Selenium WebDriver","Browser interaction and element locating strategies","Web scraping techniques and data extraction","Progressive learning from basics to advanced concepts","Practical automation scenarios and use cases","Clean code practices and documentation"],"techDetails":{"Programming":["Python","Object-Oriented Programming","Data Structures"],"Automation":["Selenium WebDriver","Browser Automation","Element Location"],"Techniques":["Web Scraping","Data Extraction","Form Automation"],"Learning":["Progressive Exercises","Practical Examples","Best Practices"]},"learningOutcomes":["Python programming language mastery","Web automation and testing with Selenium","Data structures and algorithms in Python","Browser automation and web scraping techniques","Problem-solving and algorithmic thinking"]}},"vslikeGame":{"title":"VSlikeGame (Indie Game Development)","description":["🎮 Indie game inspired by Vampire Survivors","Enhanced weapon mechanics and progression","Solo development: code, design, marketing","Active YouTube development documentation"],"detailedInfo":{"overview":"VSlikeGame is an ambitious indie game project currently in development, inspired by Vampire Survivors but with enhanced weapon mechanics and progression systems. As a solo developer, I'm responsible for every aspect of the game including programming, design, UI/UX, marketing, and business development.","features":["Vampire Survivors-style gameplay with enhanced weapon mechanics","Progressive bullet enhancement system: new bullet properties each level","Weapon unlock system: new weapons every 5 levels","Complete solo development: programming, design, art, and marketing","Active YouTube marketing and development documentation","Custom gameplay mechanics and unique progression systems","Independent game development from concept to market","Ongoing development with regular updates and improvements"],"techDetails":{"Game Engine":["Unity","C# Programming","Unity 2D/3D Systems"],"Development Roles":["Solo Developer","Game Designer","Programmer","UI/UX Designer"],"Marketing":["YouTube Content Creation","Social Media Marketing","Community Building"],"Project Management":["Indie Development","Self-Publishing","Business Development"]},"learningOutcomes":["Complete indie game development lifecycle management","Solo development skills across multiple disciplines","Game design and mechanics balancing","Marketing and community building for indie games","Business aspects of independent game development","Project management and self-directed learning","Content creation and developer marketing strategies"]}}},"status":{"completed":"Completed","inProgress":"In Progress","planned":"Planned"}}`),v0={title:"Education",description:"My academic journey and continuous learning achievements",academicBackground:"Academic Background",achievements:"Achievements",current:"Current",completed:"Completed",educations:{gaziUniversity:{institution:"Gazi University",degree:"Computer Engineering",duration:"2024 - 2027 (Expected)",location:"Ankara, Turkey",gpa:"3.41/4.0",status:"current",description:"Currently pursuing Computer Engineering degree with focus on software development, algorithms, and system design. Transferred from Ankara Medipol University with lateral transfer. Active member of Gazi ACM club's R&D Game Development team, participating in GameJams and collaborative development projects.",achievements:["Member of Gazi ACM club's R&D Game Development team","Actively participating in GameJams and game development projects","Transferred via lateral transfer from Ankara Medipol University","Currently maintaining 3.41 GPA"]},ankaraMedipolUniversity:{institution:"Ankara Medipol University",degree:"Computer Engineering (Full Scholarship)",duration:"2022 - 2024",location:"Ankara, Turkey",gpa:"3.69/4.0",status:"completed",description:"Completed preparatory class and first year of Computer Engineering with full scholarship. Founded and led the Medipol E-Sports club, serving as president and vice president for one year. Also served as a board member of Medipol Extreme Sports club, demonstrating leadership and organizational skills.",achievements:["Founded Medipol E-Sports club","Served as President and Vice President of E-Sports club for 1 year","Board member of Medipol Extreme Sports club","Achieved 3.69 GPA","Completed preparatory class and 1st year with full scholarship"]}}},y0={getInTouch:"Get In Touch",description:"I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.",quickLinks:"Quick Links",connectWithMe:"Connect With Me",copyright:"All rights reserved.",madeWith:"Made with",using:"using React & Vite",sendEmail:"Send email",callPhone:"Call phone number",visitProfile:"Visit my",profile:"profile"},hm={navigation:g0,personalInfo:p0,experience:h0,projects:b0,education:v0,footer:y0},x0={personal:"Kişisel Bilgiler",experience:"Deneyim",projects:"Projeler",education:"Eğitim"},k0={greeting:"Ben",name:"Kelami Batuhan",title:"Bilgisayar Mühendisliği Öğrencisi • Yazılım Geliştirici",description:"Modern web teknolojileri ve yazılım mühendisliği prensiplerine odaklanarak, gerçek dünya problemlerine çözüm üreten yazılım geliştiriyorum. Full-stack web development'tan mobil uygulamalara, backend sistemlerden oyun geliştirmeye kadar geniş bir alanda deneyim kazanıyorum. Her proje benim için yeni bir öğrenme fırsatı ve yaratıcılığımı geliştirme şansı.",getInTouch:"İletişime Geç",downloadCV:"CV İndir",emailOpened:"E-posta Açıldı!",downloaded:"İndirildi!",emailSubject:"Portfolyo Sorusu",emailBody:"Merhaba Kelami Batuhan, görüşmek istediğim konular var...",githubProfile:"GitHub profili",linkedinProfile:"LinkedIn profili",emailContact:"E-posta iletişimi",scrollToExperience:"Deneyim bölümüne git"},z0={title:"Deneyim",description:"Profesyonel yolculuğum ve önemli başarılarım",experienceTitle:"Profesyonel Deneyim",skillsTitle:"Teknik Yetenekler",skillsDescription:"Çalıştığım teknolojiler ve araçlar",allFilter:"Hepsi",internshipFilter:"Stajlar",gamejamFilter:"Oyun Jam'leri",page:"Sayfa",of:"/",previous:"Önceki",next:"Sonraki",skills:{programmingLanguages:"Programlama Dilleri",webTechnologies:"Web Teknolojileri",mobileGameDevelopment:"Mobil ve Oyun Geliştirme",testingAutomation:"Test ve Otomasyon",databases:"Veritabanları"},experiences:{secureComputing:{company:"Secure Computing",role:"Yazılım Geliştirme Stajyeri",duration:"Mar 2024 – Ağu 2024",location:"Çevrimiçi",description:["Staj kapsamında 'Collectify' adlı full-stack medya koleksiyon yönetim sistemi geliştirdim.","3 katmanlı mimari tasarladım: React.js + Material-UI frontend, Node.js + Express.js backend, MongoDB database.","RESTful API'ler tasarladım, database modellerini entegre ettim ve Multer ile güvenli dosya yükleme sistemi kurdum.","Modern React pattern'leri uyguladım: hooks, context API, modüler component architecture ve dynamic Material-UI theming.","Jest ve Playwright ile kapsamlı testler yazdım: unit, integration ve E2E testler (%80+ code coverage).","Clean code, SOLID prensipleri ve modern Git workflow'unu proje boyunca uyguladım.","Developer engagement için API endpoints ve project setup'ını detaylı bir şekilde dokümante ettim."]},ankuGameJam:{company:"ANKU GameJam (Ankara Üniversitesi)",role:"Backend ve Oynanış Geliştiricisi",duration:"May 2025",location:"Ankara, Türkiye",description:["Unity kullanarak 'Axolotl Ascension' puzzle game için C# ile core gameplay scriptlerini geliştirdim.","Benzersiz puzzle mekanikleri tasarladım: oyuncular map'e nesneler yerleştiriyor, timer'lar set ediyor ve kendi zamanları veya nesnelerin zamanı dolmadan challenge'ları çözüyorlar.","Player kontrolleri, zaman bazlı puzzle logic'i ve interaktif UI elementlerini yönettim.","Game design, UI/UX ve rapid prototyping konularında multidisipliner ekiple işbirliği yaptım.","Sıkı deadline'lar altında güçlü teamwork, problem-solving ve yaratıcılık sergiledim."]},puraGameJam:{company:"PURA GameJam (Hacettepe Üniversitesi)",role:"Seviye Tasarımcısı ve Oyun Tasarımcısı",duration:"Mar 2025",location:"Ankara, Türkiye",description:["Yarışmada 2. sıra kazanan 'Paper Tale' puzzle-adventure game'ini ekip ile birlikte geliştirdim.","Tüm game level'larını tasarladım ve core gameplay mekanikleri ile story concept'ini oluşturdum.","Benzersiz bir anlatı yarattım: ana karakter fairy tale kitabının içinde magical bir yolculuğa çıkıyor, magical story book'lardan item'lar ve güçler toplayarak ilerliyor.","Multidisipliner ekiple işbirliği yaparak hem level design'a hem de overall game vision'a katkıda bulundum.","Sıkı deadline'lar altında yaratıcılık, hikaye anlatımı ve teamwork sergiledim."]},ayazJam:{company:"AyazJam (Gazi Üniversitesi)",role:"Backend Geliştirici",duration:"Ara 2024",location:"Ankara, Türkiye",description:["İlk GameJam deneyimimde backend developer olarak yer aldım.","Core game mekanikleri ve backend logic'i implement etmek için ekip ile işbirliği yaptım."]}}},S0=JSON.parse(`{"title":"Projeler","description":"Çalışmalarım ve tutkulu projelerimin vitrini","viewLive":"Canlı Görüntüle","viewCode":"Kodu Görüntüle","viewImages":"Görselleri Görüntüle","featuredProject":"Öne Çıkan Proje","allFilter":"Tüm Projeler","webFilter":"Web Geliştirme","backendFilter":"Backend Geliştirme","gameFilter":"Oyun Geliştirme","mobileFilter":"Mobil Uygulamalar","toolsFilter":"Test & Otomasyon","page":"Sayfa","of":"/","previous":"Önceki","next":"Sonraki","showing":"Gösteriliyor","projects":"proje","modal":{"projectOverview":"Proje Genel Bakış","keyFeatures":"Temel Özellikler","technicalStack":"Teknik Yığın","learningOutcomes":"Öğrenme Çıktıları"},"data":{"collectify":{"title":"Collectify","description":["Full-stack medya koleksiyon yönetim sistemi","Material-UI tasarımlı React.js frontend","MongoDB veritabanı ile Node.js backend","Jest & Playwright ile kapsamlı test"],"detailedInfo":{"overview":"Modern web teknolojilerini ve yazılım mühendisliği prensiplerini uygulayarak geliştirdiğim kapsamlı bir medya koleksiyon yönetim platformu. Kitap, film, dizi ve oyun koleksiyonlarını düzenlemek isteyenler için tasarlandı.","features":["React.js, Node.js ve MongoDB ile modern 3 katmanlı mimari","Kitap, film, dizi ve oyunlar için ekleme, güncelleme, silme işlemleri","Modern React yaklaşımları: hooks, context API, modüler component yapısı","Karanlık/aydınlık tema desteği ile dinamik Material-UI tasarımı","Doğru HTTP metodları ve status kodları ile RESTful API","Güvenli dosya yükleme sistemi (Multer middleware)","Jest ve Playwright ile %80+ code coverage kapsamında test suite","Chart.js ile interaktif veri görselleştirme","Tüm cihazlarda mükemmel responsive tasarım"],"learningOutcomes":["Full-stack uygulama mimarisi ve design pattern'lar","RESTful API geliştirme ve database entegrasyonu","Modern React.js ile hooks ve context yönetimi","Material-UI ile responsive UI/UX tasarımı","Kapsamlı test stratejileri ve best practice'ler","Clean code prensipleri ve SOLID design pattern'lar"]}},"projectManagement":{"title":"Proje Yönetim Paneli","description":["Modern proje takip ve yönetim sistemi","Grafikler ve analizler içeren etkileşimli dashboard","React Query kullanarak gerçek zamanlı güncellemeler","Duyarlı tasarım ile tam CRUD operasyonları"],"detailedInfo":{"overview":"Projelerinizi kolayca takip etmenizi ve yönetmenizi sağlayan modern bir web uygulaması. Gerçek zamanlı güncellemeler ve görsel analizlerle iş süreçlerinizi optimize edin.","features":["Pasta grafikler ve durum kartları ile interaktif dashboard","Proje yaşam döngüsü yönetimi (Planlanıyor, Devam Ediyor, Tamamlandı)","React Query ile optimize edilmiş performans ve gerçek zamanlı güncellemeler","Responsive Material-UI tasarım sistemi","Gelişmiş sıralama, filtreleme ve sayfalama özellikleri","Kullanıcı dostu modal pencereler ile kolay işlem yapma","Recharts ile detaylı proje analitiği ve veri görselleştirme","Kapsamlı hata yönetimi ve kullanıcı bildirimleri"],"techDetails":{"Frontend":["React (Functional Components)","Material-UI (MUI)","Recharts","@tanstack/react-query"],"Backend":["Node.js","Express.js","MongoDB","CORS"],"Özellikler":["Gerçek Zamanlı Updates","Data Caching","Responsive Design","Interactive Charts"]},"learningOutcomes":["Modern React pattern'leri ile hooks ve functional component'ler","React Query ile server state yönetimi","Recharts ile profesyonel veri görselleştirme","Material-UI component library kullanımı","REST API entegrasyonu ve error handling"]}},"pythonIn20Days":{"title":"20 Günde Python (Mobil Uygulama)","description":["Python öğrenmek için eğitsel Android uygulaması","Oyunlaştırılmış deneyim ile 20 etkileşimli ders","İki dilli destek (Türkçe/İngilizce)","Maskot rehberliği ile modern Jetpack Compose UI"],"detailedInfo":{"overview":"Python öğrenmek isteyenler için tasarladığım interaktif Android uygulaması. 20 gün boyunca KOBOT maskotumuzla Python temellerinden ileri seviye konulara kadar öğrenin.","features":["Python temellerinden orta seviyeye kadar 20 aşamalı ders programı","Çoktan seçmeli, boşluk doldurma ve kod çıktısı tahmin etme soruları","Türkçe ve İngilizce arasında anlık geçiş","İlerleme takibi, rozetler ve seviye sistemi ile gamification","KOBOT maskotu ile animasyonlar ve smooth geçişler","Clean Architecture, MVVM ve single-activity pattern ile modern mimari","Özel Jetpack Compose component'leri ve gelişmiş animasyonlar","SharedPreferences ile kalıcı progress ve dil ayarları"],"techDetails":{"Frontend & UI":["Jetpack Compose","Material 3","Custom Animations","Responsive Design"],"Architecture":["MVVM","Single Activity","Repository Pattern","Manual DI"],"Data & Storage":["SharedPreferences","Local Storage"],"Development":["Kotlin","Gradle","Android Studio"]},"learningOutcomes":["Jetpack Compose ile modern Android development","Clean Architecture ve modüler design","SOLID prensipleri ve maintainable code yazma","UI/UX design ve accessibility","Gamification ve interactive learning design","Internationalization ve localization","Performance optimization ve memory management"]}},"paperTale":{"title":"Paper Tale","description":["Ödüllü bulmaca-macera oyunu (2. sıra)","Unity tabanlı sihirli yolculuk oyunu","Benzersiz hikaye anlatım mekanikleri","Takım işbirliği projesi"],"detailedInfo":{"overview":"Hacettepe Üniversitesi PURA GameJam'de geliştirdiğim ve 2. sıra kazandığım ödüllü bulmaca-macera oyunu. Kızını kurtarmak için sihirli masal dünyalarında yolculuk yapan bir babanın dokunaklı hikayesi.","features":["Duygusal hikaye: Hasta kızı için sihirli masal dünyalarında tedavi arayan baba","Yenilikçi gameplay: Büyülü kitaplardan nesneler toplayarak ilerleme","Çok katmanlı level design: Her seviye farklı masal ortamı ve benzersiz zorluklar","Hikaye odaklı gameplay: Oyun mekanikleri ile hikaye entegrasyonu","Stratejik bulmaca-macera elementleri: Sihirli dünyalarda taktiksel düşünme","Ödüllü tasarım: PURA GameJam'de 2. sıra","Takım çalışması: Deadline altında multidisipliner ekiple geliştirme","Emotional storytelling: Baba-kız ilişkisi merkezde"],"techDetails":{"Game Engine":["Unity 2D","C# Scripting","Scene Management"],"Design Role":["Level Design","Game Design","Narrative Design","Storytelling"],"Game Mechanics":["Puzzle-Adventure Elements","Item Collection System","Story Progression"],"Team Collaboration":["Multidisciplinary Team","GameJam Environment","Rapid Prototyping"]},"learningOutcomes":["Advanced level design prensipleri ve spatial storytelling","Gameplay mechanics ile game narrative entegrasyonu","Zaman kısıtlı ortamda collaborative game development","Player experience design ve emotional connection teknikleri","Interactive media ve game design yoluyla storytelling","Team leadership ve creative vision communication","Baskı altında rapid iteration ve problem solving"]}},"axolotlAscension":{"title":"Axolotl Ascension","description":["Zaman mekaniği olan yenilikçi bulmaca oyunu","C# oynanış betikleri ile Unity engine","Yaratıcı zamanlayıcı tabanlı zorluklar","GameJam yarışma girdisi"],"detailedInfo":{"overview":"Ankara Üniversitesi ANKU GameJam'de geliştirdiğim 2D puzzle-platform oyunu. Karakterin yaşam süresini nesnelere paylaştırıp axolotl'ları kurtarmak için zamana karşı yarışılıyor.","features":["Sınırlı kaynaklarla stratejik nesne yerleştirme sistemi","Benzersiz time-sharing mechanic: karakterin yaşam süresini nesnelere dağıtma","Görsel countdown uyarıları ile dinamik timer sistemi","Pixel-perfect camera tracking ve pre-game exploration","Gelişmiş level management ve transition sistemi","Placement ve animation sound'ları ile tam ses entegrasyonu","Menu navigation ile pause sistemi","Design pattern'ları kullanarak modüler architecture","Object pooling ve coroutine'ler ile performance optimization"],"techDetails":{"Game Engine":["Unity 2022.3 LTS","C# .NET Framework","2D Universal Render Pipeline"],"Architecture":["Singleton Pattern","Component Pattern","Observer Pattern","State Machine"],"Core Systems":["Timer System","Level Manager","Object Placement","Camera Follow"],"Optimization":["Object Pooling","Coroutines","Event-Driven Architecture"]},"learningOutcomes":["Advanced Unity game development ve C# programming","Game physics, collision detection ve 2D mechanics","Design pattern implementation in game development","Performance optimization ve memory management","UI/UX programming ve responsive game interfaces","GameJam ortamında team collaboration ve agile development","Version control ve code architecture"]}},"todoApi":{"title":"Todo-API","description":["Node.js ve Express.js ile RESTful API","Todo'lar için tam CRUD operasyonları","Veri doğrulama ile MongoDB entegrasyonu","Swagger dokümantasyonu ve Jest testleri"],"detailedInfo":{"overview":"Node.js ve Express.js ile geliştirilmiş sağlam bir RESTful API. Backend best practice'lerini, API design pattern'larını ve kapsamlı test metodolojilerini içeriyor.","features":["Todo yönetimi için tam CRUD operasyonları","Doğru HTTP metodları ve status kodları ile RESTful API design","MongoDB entegrasyonu ile optimize veri modelleri","Swagger UI ile interaktif API dokümantasyonu","Gelişmiş veri doğrulama ve hata yönetimi","UUID tabanlı benzersiz ID üretimi","dotenv ile environment variable yönetimi","Kapsamlı Jest test paketi","Modüler proje yapısı ile sürdürülebilirlik"],"techDetails":{"Core":["Node.js","Express.js","MongoDB"],"Documentation":["Swagger UI Express","OpenAPI 3.0"],"Testing":["Jest","Supertest","Unit Test","Integration Test"],"Utilities":["UUID","dotenv","CORS","Morgan Logging"]},"learningOutcomes":["RESTful API mimarisi ve tasarım prensipleri","MongoDB veri tabanı tasarımı ve optimizasyonu","Swagger/OpenAPI ile API dokümantasyonu","Jest ile test odaklı geliştirme (TDD)","Middleware ve hata yönetim pattern'leri"]}},"softwareTestingSuite":{"title":"Yazılım Test Paketi","description":["Playwright ve Jest ile kapsamlı test","Sosyal medya ve e-ticaret için E2E testleri","Unit ve entegrasyon test kapsamı","Çapraz tarayıcı otomasyon testleri"],"detailedInfo":{"overview":"Unit testlerden end-to-end automation testlere kadar çeşitli test metodolojilerinde uzmanlığımı gösteren kapsamlı bir yazılım test paketi.","features":["Web uygulamaları için Playwright ile E2E testler","Sosyal medya workflow testleri (X/Twitter authentication ve messaging)","E-commerce işlemleri testleri (Trendyol alışveriş sepeti operations)","Unit test ile temel fonksiyon ve metin analizi testleri","MongoDB entegrasyon testleri","Kütüphane yönetim sistemi testleri","Alışveriş sepeti işlevselliği doğrulama","Çapraz tarayıcı test desteği"],"techDetails":{"E2E Testing":["Playwright","Cross-Browser Support","Web Automation"],"Unit Testing":["Jest","Fonksiyon Testleri","Metin Analizi"],"Integration":["MongoDB Testing","Database Operations","API Testing"],"Applications":["Sosyal Medya Testleri","E-commerce Testleri","Kütüphane Sistemleri"]},"learningOutcomes":["End-to-end test stratejileri ve uygulaması","Playwright ile test otomasyonu","Unit ve integration test metodolojileri","Çapraz tarayıcı uyumluluk testleri","Veritabanı testleri ve doğrulama teknikleri"]}},"pythonSeleniumAutomation":{"title":"Python ve Selenium Otomasyonu","description":["Python programlama alıştırmaları koleksiyonu","Selenium web otomasyon projeleri","Veri yapıları ve web kazıma","Tarayıcı otomasyon teknikleri"],"detailedInfo":{"overview":"Python temellerinden ileri seviye web otomasyon tekniklerine kadar ilerlemeyi gösteren Python programlama alıştırmaları ve Selenium web otomasyon projeleri koleksiyonu.","features":["Python programlama temelleri ve best practice'ler","Veri yapıları implementasyonu ve manipülasyonu","Selenium WebDriver ile web otomasyonu","Tarayıcı etkileşimi ve element bulma stratejileri","Web scraping teknikleri ve veri çıkarımı","Temellerden ileri seviyeye progressive learning","Pratik otomasyon senaryoları ve kullanım örnekleri","Clean code ve kapsamlı dokümantasyon"],"techDetails":{"Programming":["Python","Nesne Yönelimli Programlama","Veri Yapıları"],"Automation":["Selenium WebDriver","Tarayıcı Otomasyonu","Element Konumlandırma"],"Techniques":["Web Scraping","Veri Çıkarımı","Form Otomasyonu"],"Learning":["Progressive Exercises","Practical Examples","Best Practices"]},"learningOutcomes":["Python programlama dili hakimiyeti","Selenium ile web otomasyonu ve test","Python'da veri yapıları ve algoritmalar","Tarayıcı otomasyonu ve web kazıma teknikleri","Problem çözme ve algoritmik düşünme"]}},"vslikeGame":{"title":"VSlikeGame (Indie Oyun Geliştirme)","description":["🎮 Vampire Survivors'dan ilham alan indie oyun","Geliştirilmiş silah mekanikleri ve ilerleme","Solo geliştirme: kod, tasarım, pazarlama","YouTube üzerinden geliştirme dokümantasyonu"],"detailedInfo":{"overview":"Vampire Survivors'dan ilham alarak geliştirdiğim indie oyun. Solo developer olarak programlama, tasarım, UI/UX, pazarlama ve iş geliştirme dahil oyunun her aşamasını yönettim.","features":["Gelişmiş silah mekanikleri ile gameplay","Seviye bazlı ilerleme ve bullet upgrade sistemi","Silah kilit açma sistemi: her 5 level'da yeni silahlar","Tam solo geliştirme: programlama, tasarım, art ve pazarlama","YouTube üzerinden aktif marketing ve development documentation","Özel gameplay mekanikleri ve progression sistemleri","Fikri konseptten market'e bağımsız oyun geliştirme","Sürekli güncellemeler ve iyileştirmeler ile ongoing development"],"techDetails":{"Game Engine":["Unity","C# Programming","Unity 2D/3D Systems"],"Development Roles":["Solo Developer","Game Designer","Programmer","UI/UX Designer"],"Marketing":["YouTube Content Creation","Social Media Marketing","Community Building"],"Project Management":["Indie Development","Self-Publishing","Business Development"]},"learningOutcomes":["Bağımsız oyun geliştirme süreci yönetimi","Çok disiplinli solo geliştirme becerileri","Oyun tasarımı ve mekanik dengeleme","Indie oyunlar için marketing ve topluluk yönetimi","Bağımsız oyun geliştirmede iş yönetimi","Proje yönetimi ve self-directed learning","İçerik üretimi ve geliştirici pazarlama stratejileri"]}}},"status":{"completed":"Tamamlandı","inProgress":"Devam Ediyor","planned":"Planlandı"}}`),j0={title:"Eğitim",description:"Akademik yolculuğum ve sürekli öğrenme başarılarım",academicBackground:"Akademik Geçmiş",achievements:"Başarılar",current:"Mevcut",completed:"Tamamlandı",educations:{gaziUniversity:{institution:"Gazi Üniversitesi",degree:"Bilgisayar Mühendisliği",duration:"2024 - 2027 (Beklenen)",location:"Ankara, Türkiye",gpa:"3.41/4.0",status:"current",description:"Software development, algoritmalar ve sistem tasarımı odaklı Computer Engineering lisans programında eğitim görüyorum. Ankara Medipol University'den yatay geçiş yaptım. Gazi ACM club'ının R&D Game Development takımının aktif üyesiyim, GameJam'lere ve collaborative development projelerine katılıyorum.",achievements:["Gazi ACM club'ının R&D Game Development takım üyesi","GameJam'lere ve oyun geliştirme projelerine aktif katılım","Ankara Medipol University'den başarılı yatay geçiş","Şu anda 3.41 GPA"]},ankaraMedipolUniversity:{institution:"Ankara Medipol Üniversitesi",degree:"Bilgisayar Mühendisliği (Tam Burs)",duration:"2022 - 2024",location:"Ankara, Türkiye",gpa:"3.69/4.0",status:"completed",description:"Full scholarship ile hazırlık sınıfı ve Computer Engineering 1. sınıfı tamamladım. Medipol E-Sports kulübünü kurdum ve yönettim, bir yıl boyunca başkan ve başkan yardımcısı olarak görev yaptım. Ayrıca Medipol Extreme Sports kulübünde yönetim kurulu üyesi olarak liderlik ve organizasyon becerilerimi gösterdim.",achievements:["Medipol E-Sports kulübünü kurdu","E-Sports kulübünde 1 yıl Başkan ve Başkan Yardımcısı olarak görev yaptı","Medipol Extreme Sports kulübü yönetim kurulu üyesi","3.69 GPA elde etti","Tam burslu olarak hazırlık ve 1. sınıf tamamlandı"]}}},E0={getInTouch:"İletişime Geçin",description:"Her zaman yeni fırsatları, heyecan verici projeleri tartışmaya veya teknoloji hakkında sohbet etmeye açığım.",quickLinks:"Hızlı Bağlantılar",connectWithMe:"Benimle Bağlantı Kurun",copyright:"Tüm hakları saklıdır.",madeWith:"ile yapıldı",using:"React & Vite kullanılarak",sendEmail:"E-posta gönder",callPhone:"Telefon numarasını ara",visitProfile:"Profilimi ziyaret et",profile:"Profil"},D0={navigation:x0,personalInfo:k0,experience:z0,projects:S0,education:j0,footer:E0},Em=ne.createContext(),Mt={EN:"en",TR:"tr"},w0=({children:p})=>{const[w,C]=ne.useState(Mt.EN),d=()=>{C(L=>L===Mt.EN?Mt.TR:Mt.EN)},O=L=>{Object.values(Mt).includes(L)&&C(L)},U=(L,fe)=>{const re=fe.split(".");let $=L==="en"?hm:D0;for(const Ve of re)if($&&typeof $=="object"&&Ve in $)$=$[Ve];else{$=hm;for(const V of re)if($&&typeof $=="object"&&V in $)$=$[V];else return`[${fe}]`;break}return typeof $=="string"||Array.isArray($)||typeof $=="object"?$:`[${fe}]`},Q={language:w,currentLanguage:w,toggleLanguage:d,setLanguage:O,isTurkish:()=>w===Mt.TR,isEnglish:()=>w===Mt.EN,getLanguageDisplayName:()=>w===Mt.EN?"English":"Türkçe",getLanguageFlag:()=>w===Mt.EN?"🇺🇸":"🇹🇷",t:L=>U(w,L),LANGUAGES:Mt};return c.jsx(Em.Provider,{value:Q,children:p})},zi=()=>{const p=ne.useContext(Em);if(p===void 0)throw new Error("useLanguage must be used within a LanguageProvider");return p};/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=p=>p.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),T0=p=>p.replace(/^([A-Z])|[\s-_]+(\w)/g,(w,C,d)=>d?d.toUpperCase():C.toLowerCase()),bm=p=>{const w=T0(p);return w.charAt(0).toUpperCase()+w.slice(1)},Dm=(...p)=>p.filter((w,C,d)=>!!w&&w.trim()!==""&&d.indexOf(w)===C).join(" ").trim(),M0=p=>{for(const w in p)if(w.startsWith("aria-")||w==="role"||w==="title")return!0};/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var N0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=ne.forwardRef(({color:p="currentColor",size:w=24,strokeWidth:C=2,absoluteStrokeWidth:d,className:O="",children:U,iconNode:A,...G},T)=>ne.createElement("svg",{ref:T,...N0,width:w,height:w,stroke:p,strokeWidth:d?Number(C)*24/Number(w):C,className:Dm("lucide",O),...!U&&!M0(G)&&{"aria-hidden":"true"},...G},[...A.map(([S,_])=>ne.createElement(S,_)),...Array.isArray(U)?U:[U]]));/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=(p,w)=>{const C=ne.forwardRef(({className:d,...O},U)=>ne.createElement(U0,{ref:U,iconNode:w,className:Dm(`lucide-${A0(bm(p))}`,`lucide-${p}`,d),...O}));return C.displayName=bm(p),C};/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],vm=pe("award",O0);/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],R0=pe("book-open",_0);/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],Gl=pe("briefcase",C0);/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],wm=pe("calendar",B0);/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],ym=pe("check",G0);/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Am=pe("chevron-left",q0);/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Tm=pe("chevron-right",H0);/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],va=pe("code",Y0);/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Q0=pe("download",X0);/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],ql=pe("external-link",L0);/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],sc=pe("gamepad-2",V0);/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Hl=pe("github",Z0);/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],dc=pe("globe",K0);/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],$0=pe("graduation-cap",J0);/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],W0=pe("heart",P0);/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],Mm=pe("linkedin",F0);/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],mc=pe("mail",I0);/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Nm=pe("map-pin",ep);/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],ap=pe("menu",tp);/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],xm=pe("moon",ip);/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],lp=pe("phone",np);/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],op=pe("server",rp);/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],up=pe("smartphone",cp);/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Um=pe("star",sp);/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],km=pe("sun",dp);/**
 * @license lucide-react v0.543.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Om=pe("x",mp),uc=[{id:"personal"},{id:"experience"},{id:"projects"},{id:"education"}],fp=()=>{const[p,w]=ne.useState(!1),[C,d]=ne.useState("personal"),{theme:O,toggleTheme:U,isDark:A}=f0(),{language:G,toggleLanguage:T,t:S}=zi(),_=Q=>{const L=document.getElementById(Q);L&&L.scrollIntoView({behavior:"smooth",block:"start"}),w(!1)};return ne.useEffect(()=>{const Q=()=>{const L=uc.map(re=>re.id),fe=window.scrollY+100;for(const re of L){const we=document.getElementById(re);if(we){const{offsetTop:$,offsetHeight:Ve}=we;if(fe>=$&&fe<$+Ve){d(re);break}}}};return window.addEventListener("scroll",Q),()=>window.removeEventListener("scroll",Q)},[]),c.jsxs("nav",{className:"navigation",children:[c.jsxs("div",{className:"nav-container",children:[c.jsx("div",{className:"nav-brand",children:c.jsx("h3",{children:"KBB"})}),c.jsx("ul",{className:"nav-menu",children:uc.map(Q=>c.jsx("li",{className:"nav-item",children:c.jsx("button",{onClick:()=>_(Q.id),className:`nav-link ${C===Q.id?"active":""}`,"aria-label":`Navigate to ${S(`navigation.${Q.id}`)} section`,children:S(`navigation.${Q.id}`)})},Q.id))}),c.jsxs("div",{className:"control-buttons",children:[c.jsxs("button",{onClick:T,className:"language-toggle","aria-label":`Switch to ${G==="en"?"Turkish":"English"}`,title:`Switch to ${G==="en"?"Turkish":"English"}`,children:[c.jsx(dc,{size:18}),c.jsx("span",{className:"language-text",children:G.toUpperCase()})]}),c.jsx("button",{onClick:U,className:"theme-toggle","aria-label":`Switch to ${A?"light":"dark"} mode`,title:`Switch to ${A?"light":"dark"} mode`,children:A?c.jsx(km,{size:20}):c.jsx(xm,{size:20})})]}),c.jsx("button",{className:"mobile-menu-toggle",onClick:()=>w(!p),"aria-label":"Toggle mobile menu",children:p?c.jsx(Om,{size:24}):c.jsx(ap,{size:24})})]}),p&&c.jsxs("div",{className:"mobile-menu",children:[uc.map(Q=>c.jsx("button",{onClick:()=>_(Q.id),className:`mobile-nav-link ${C===Q.id?"active":""}`,children:S(`navigation.${Q.id}`)},Q.id)),c.jsxs("button",{onClick:T,className:"mobile-language-toggle","aria-label":`Switch to ${G==="en"?"Turkish":"English"}`,children:[c.jsx(dc,{size:20}),G==="en"?"Türkçe":"English"]}),c.jsxs("button",{onClick:U,className:"mobile-theme-toggle","aria-label":`Switch to ${A?"light":"dark"} mode`,children:[A?c.jsx(km,{size:20}):c.jsx(xm,{size:20}),A?G==="en"?"Light Mode":"Açık Mod":G==="en"?"Dark Mode":"Koyu Mod"]})]}),c.jsx("style",{jsx:!0,children:`
        .navigation {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .navigation::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(29, 78, 216, 0.6), 
            rgba(147, 51, 234, 0.6), 
            rgba(6, 182, 212, 0.6), 
            transparent
          );
        }

        [data-theme="light"] .navigation {
          background: rgba(255, 255, 255, 0.85);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
        }

        .nav-brand h3 {
          background: linear-gradient(135deg, #1D4ED8, #9333EA, #06B6D4);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
          margin: 0;
          font-size: 1.5rem;
          letter-spacing: -0.02em;
        }

        .nav-menu {
          display: flex;
          list-style: none;
          gap: 0.5rem;
          margin: 0;
          padding: 0;
        }

        .nav-item {
          margin: 0;
        }

        .nav-link {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          padding: 0.75rem 1.25rem;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-family: inherit;
          position: relative;
          overflow: hidden;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(29, 78, 216, 0.1), rgba(6, 182, 212, 0.1));
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 12px;
        }

        .nav-link:hover::before {
          opacity: 1;
        }

        .nav-link:hover {
          color: #1D4ED8;
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(29, 78, 216, 0.3);
        }

        .nav-link.active {
          color: #1D4ED8;
          background: linear-gradient(135deg, rgba(29, 78, 216, 0.15), rgba(6, 182, 212, 0.1));
          box-shadow: 0 2px 10px rgba(29, 78, 216, 0.2);
        }

        .control-buttons {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-left: auto;
        }

        .language-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          height: 44px;
          padding: 0 1rem;
          background: linear-gradient(135deg, rgba(29, 78, 216, 0.1), rgba(6, 182, 212, 0.05));
          border: 2px solid rgba(29, 78, 216, 0.3);
          border-radius: 22px;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-family: inherit;
          font-weight: 600;
          font-size: 0.875rem;
          backdrop-filter: blur(10px);
        }

        .language-toggle:hover {
          background: linear-gradient(135deg, #1D4ED8, #06B6D4);
          border-color: #1D4ED8;
          color: white;
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 25px rgba(29, 78, 216, 0.4);
        }

        .language-text {
          font-size: 0.8rem;
          letter-spacing: 0.5px;
        }

        .theme-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(29, 78, 216, 0.05));
          border: 2px solid rgba(147, 51, 234, 0.3);
          border-radius: 50%;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
        }

        .theme-toggle:hover {
          background: linear-gradient(135deg, #9333EA, #06B6D4);
          border-color: #9333EA;
          color: white;
          transform: scale(1.15) rotate(180deg);
          box-shadow: 0 8px 25px rgba(147, 51, 234, 0.4);
        }

        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 0.5rem;
          transition: all 0.3s ease;
        }

        .mobile-menu-toggle:hover {
          color: #1D4ED8;
          transform: scale(1.1);
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
        }

        [data-theme="light"] .mobile-menu {
          background: rgba(255, 255, 255, 0.95);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .mobile-nav-link {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          padding: 1.25rem 2rem;
          text-align: left;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-family: inherit;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
        }

        .mobile-nav-link::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(to bottom, #1D4ED8, #06B6D4);
          transform: scaleY(0);
          transition: transform 0.3s ease;
        }

        .mobile-nav-link:hover::before,
        .mobile-nav-link.active::before {
          transform: scaleY(1);
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          color: #1D4ED8;
          background: linear-gradient(135deg, rgba(29, 78, 216, 0.1), rgba(6, 182, 212, 0.05));
          padding-left: 2.5rem;
        }

        .mobile-language-toggle,
        .mobile-theme-toggle {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: none;
          border: none;
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          padding: 1.25rem 2rem;
          text-align: left;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-family: inherit;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .mobile-language-toggle:hover,
        .mobile-theme-toggle:hover {
          color: #1D4ED8;
          background: linear-gradient(135deg, rgba(29, 78, 216, 0.1), rgba(6, 182, 212, 0.05));
          padding-left: 2.5rem;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .nav-menu {
            display: none;
          }

          .mobile-menu-toggle {
            display: block;
          }

          .nav-container {
            padding: 0.875rem 1rem;
          }

          .nav-brand h3 {
            font-size: 1.375rem;
          }

          .control-buttons {
            margin-left: 0;
            gap: 0.5rem;
          }

          .language-toggle {
            height: 42px;
            padding: 0 0.875rem;
            font-size: 0.8rem;
            border-radius: 21px;
          }

          .theme-toggle {
            width: 42px;
            height: 42px;
          }

          .mobile-menu {
            background: rgba(15, 23, 42, 0.98);
            backdrop-filter: blur(25px);
            border-bottom: 1px solid rgba(29, 78, 216, 0.2);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
            padding: 1rem 0;
          }

          [data-theme="light"] .mobile-menu {
            background: rgba(255, 255, 255, 0.98);
            border-bottom: 1px solid rgba(29, 78, 216, 0.15);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
          }

          .mobile-nav-link {
            padding: 1rem 1.5rem;
            font-size: 1.125rem;
            margin: 0 1rem;
            border-radius: 12px;
            border-bottom: none;
            transition: all 0.3s ease;
          }

          .mobile-nav-link:hover,
          .mobile-nav-link.active {
            padding-left: 1.5rem;
            background: linear-gradient(135deg, rgba(29, 78, 216, 0.15), rgba(6, 182, 212, 0.08));
            border-left: 4px solid #1D4ED8;
          }

          .mobile-language-toggle,
          .mobile-theme-toggle {
            padding: 1rem 1.5rem;
            font-size: 1rem;
            margin: 0.5rem 1rem 0;
            border-radius: 12px;
            border-top: 1px solid rgba(29, 78, 216, 0.2);
            background: linear-gradient(135deg, rgba(29, 78, 216, 0.08), rgba(6, 182, 212, 0.03));
          }

          .mobile-language-toggle:hover,
          .mobile-theme-toggle:hover {
            padding-left: 1.5rem;
            background: linear-gradient(135deg, rgba(29, 78, 216, 0.12), rgba(6, 182, 212, 0.06));
            border-left: 4px solid #1D4ED8;
          }
        }

        @media (max-width: 480px) {
          .nav-container {
            padding: 0.75rem 0.875rem;
          }

          .nav-brand h3 {
            font-size: 1.25rem;
          }
          
          .language-toggle {
            height: 38px;
            padding: 0 0.75rem;
            font-size: 0.75rem;
          }
          
          .theme-toggle {
            width: 38px;
            height: 38px;
          }

          .mobile-nav-link {
            padding: 0.875rem 1.25rem;
            font-size: 1rem;
            margin: 0 0.75rem;
          }

          .mobile-language-toggle,
          .mobile-theme-toggle {
            padding: 0.875rem 1.25rem;
            font-size: 0.9rem;
            margin: 0.5rem 0.75rem 0;
          }

          .mobile-menu-toggle {
            padding: 0.375rem;
          }

          .control-buttons {
            gap: 0.375rem;
          }
        }
      `})]})},gp="/Portfolio/assets/MePhoto.jpg",pp=()=>{const[p,w]=ne.useState(!1),[C,d]=ne.useState(!1),{language:O,t:U}=zi(),A=()=>{w(!0);const T=encodeURIComponent(U("personalInfo.emailSubject")),S=encodeURIComponent(U("personalInfo.emailBody")),_=`https://mail.google.com/mail/?view=cm&to=batuhankelami@gmail.com&su=${T}&body=${S}`;window.open(_,"_blank"),setTimeout(()=>{w(!1)},3e3)},G=()=>{d(!0);const T=document.createElement("a");T.href="/cv.pdf",T.download="Kelami_Batuhan_CV.pdf",T.click(),setTimeout(()=>{d(!1)},3e3)};return c.jsxs("div",{className:"personal-info",children:[c.jsx("div",{className:"container",children:c.jsxs("div",{className:"personal-content",children:[c.jsxs("div",{className:"personal-text",children:[c.jsxs("div",{className:"intro-text fade-in-up",children:[c.jsxs("h1",{className:"main-title",children:[U("personalInfo.greeting")," ",c.jsx("span",{className:"highlight",children:U("personalInfo.name")})]}),c.jsx("h2",{className:"subtitle",children:U("personalInfo.title")}),c.jsx("p",{className:"description",children:U("personalInfo.description")})]}),c.jsxs("div",{className:"cta-buttons fade-in-up",children:[c.jsxs("button",{onClick:A,className:`btn btn-primary ${p?"btn-success":""}`,"aria-label":"Contact via email",disabled:p,children:[p?c.jsx(ym,{size:20}):c.jsx(mc,{size:20}),U(p?"personalInfo.emailOpened":"personalInfo.getInTouch")]}),c.jsxs("button",{onClick:G,className:`btn btn-outline ${C?"btn-success":""}`,"aria-label":"Download resume",disabled:C,children:[C?c.jsx(ym,{size:20}):c.jsx(Q0,{size:20}),U(C?"personalInfo.downloaded":"personalInfo.downloadCV")]})]}),c.jsxs("div",{className:"social-links fade-in-up",children:[c.jsx("a",{href:"https://github.com/KBatuhanB",target:"_blank",rel:"noopener noreferrer",className:"social-link","aria-label":U("personalInfo.githubProfile"),children:c.jsx(Hl,{size:24})}),c.jsx("a",{href:"https://www.linkedin.com/in/batuhan-b%C3%B6l%C3%BCkba%C5%9F%C4%B1-45b2b726b/",target:"_blank",rel:"noopener noreferrer",className:"social-link","aria-label":U("personalInfo.linkedinProfile"),children:c.jsx(Mm,{size:24})}),c.jsx("button",{className:"social-link","aria-label":U("personalInfo.emailContact"),type:"button",onClick:A,children:c.jsx(mc,{size:24})})]})]}),c.jsx("div",{className:"personal-image fade-in-up",children:c.jsxs("div",{className:"image-container",children:[c.jsx("div",{className:"profile-placeholder",children:c.jsx("img",{src:gp,alt:U("personalInfo.name"),className:"profile-image",style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"20px"}})}),c.jsx("div",{className:"image-decoration decoration-1"}),c.jsx("div",{className:"image-decoration decoration-2"})]})})]})}),c.jsx("style",{jsx:!0,children:`
        .personal-info {
          min-height: 90vh;
          display: flex;
          align-items: center;
          background: var(--background);
          padding-top: 20px; /* Account for fixed navigation */
          position: relative;
          overflow: hidden;
        }

        .personal-info::before {
          content: '';
          position: absolute;
          top: 10%;
          right: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(29, 78, 216, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }

        .personal-info::after {
          content: '';
          position: absolute;
          bottom: 10%;
          left: -10%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(147, 51, 234, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          animation: float 8s ease-in-out infinite reverse;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        .personal-content {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 5rem;
          align-items: center;
          width: 100%;
          position: relative;
          z-index: 1;
        }

        .personal-text {
          max-width: 800px;
        }

        .main-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          margin-bottom: 1rem;
          line-height: 1.1;
          letter-spacing: -0.02em;
          white-space: nowrap;
        }

        .highlight {
          background: linear-gradient(135deg, #1D4ED8, #9333EA, #06B6D4);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 200%;
          animation: gradientShift 4s ease infinite;
          position: relative;
        }

        .highlight::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #1D4ED8, #9333EA, #06B6D4);
          border-radius: 2px;
          animation: gradientShift 4s ease infinite;
          background-size: 200% 200%;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .subtitle {
          font-size: clamp(1rem, 2.5vw, 1.75rem);
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-weight: 600;
          line-height: 1.4;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .description {
          font-size: 1.125rem;
          line-height: 1.8;
          margin-bottom: 2.5rem;
          color: var(--text-secondary);
          max-width: 90%; 
        }

        .cta-buttons {
          display: flex;
          gap: 1.25rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          align-items: center;
          justify-content: center;
          max-width: 85%;
          margin: 0 auto;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 56px;
          background: linear-gradient(135deg, rgba(29, 78, 216, 0.1), rgba(6, 182, 212, 0.05));
          border: 2px solid rgba(29, 78, 216, 0.3);
          border-radius: 16px;
          color: var(--text-secondary);
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
          flex: 1;
        }

        .social-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .social-link:hover::before {
          left: 100%;
        }

        [data-theme="light"] .social-link {
          background: linear-gradient(135deg, rgba(29, 78, 216, 0.08), rgba(6, 182, 212, 0.03));
          border: 2px solid rgba(29, 78, 216, 0.2);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        }

        .social-link:hover {
          color: white;
          border-color: #1D4ED8;
          transform: translateY(-3px) scale(1.05);
          background: linear-gradient(135deg, #1D4ED8, #06B6D4);
          box-shadow: 0 8px 25px rgba(29, 78, 216, 0.4);
        }

        .personal-image {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-container {
          position: relative;
          width: 400px;
          height: 400px;
        }

        .profile-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #1D4ED8, #9333EA, #06B6D4);
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.3),
            0 0 80px rgba(29, 78, 216, 0.3);
          position: relative;
          z-index: 2;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .profile-placeholder:hover {
          transform: scale(1.05) rotate(2deg);
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.4),
            0 0 100px rgba(29, 78, 216, 0.4);
        }

        .profile-image {
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .profile-placeholder:hover .profile-image {
          transform: scale(1.1);
        }

        .placeholder-content {
          color: white;
          font-size: 1.25rem;
          font-weight: 600;
          text-align: center;
        }

        .image-decoration {
          position: absolute;
          border-radius: 24px;
          z-index: 1;
          animation: float 4s ease-in-out infinite;
        }

        .decoration-1 {
          top: -30px;
          right: -30px;
          width: 200px;
          height: 200px;
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(6, 182, 212, 0.1));
          animation-delay: -2s;
        }

        .decoration-2 {
          bottom: -30px;
          left: -30px;
          width: 150px;
          height: 150px;
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(29, 78, 216, 0.1));
          animation-delay: -1s;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .personal-content {
            gap: 3rem;
          }
          
          .image-container {
            width: 350px;
            height: 350px;
          }

          .main-title {
            font-size: clamp(2.25rem, 4.5vw, 3.5rem);
          }

          .subtitle {
            font-size: clamp(1rem, 2.2vw, 1.5rem);
          }
        }

        @media (max-width: 768px) {
          .personal-info {
            min-height: 85vh;
            padding-top: 2rem;
          }

          .personal-content {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            text-align: center;
            padding: 1rem 0;
          }

          .personal-text {
            max-width: 100%;
            order: 2;
          }

          .personal-image {
            order: 1;
          }

          .main-title {
            white-space: normal;
            line-height: 1.2;
            margin-bottom: 1.25rem;
          }

          .subtitle {
            white-space: normal;
            overflow: visible;
            text-overflow: unset;
            margin-bottom: 1.25rem;
          }

          .description {
            max-width: 100%;
            font-size: 1rem;
            margin-bottom: 2rem;
            line-height: 1.7;
          }

          .image-container {
            width: 280px;
            height: 280px;
            margin: 0 auto;
          }

          .cta-buttons {
            justify-content: center;
            gap: 1rem;
            margin-bottom: 2rem;
          }

          .btn {
            min-width: 140px;
            padding: 0.875rem 1.5rem;
            font-size: 0.95rem;
          }

          .social-links {
            justify-content: center;
            max-width: 100%;
            gap: 0.75rem;
          }

          .social-link {
            width: 48px;
            height: 48px;
            flex: none;
            border-radius: 12px;
          }
        }

        @media (max-width: 480px) {
          .personal-info {
            min-height: 80vh;
            padding-top: 1.5rem;
          }

          .personal-content {
            gap: 2rem;
            padding: 0.5rem 0;
          }

          .main-title {
            font-size: clamp(2rem, 8vw, 2.75rem);
            margin-bottom: 1rem;
          }

          .subtitle {
            font-size: clamp(0.9rem, 5vw, 1.25rem);
            margin-bottom: 1rem;
          }

          .description {
            font-size: 0.95rem;
            margin-bottom: 1.5rem;
            line-height: 1.6;
          }

          .image-container {
            width: 240px;
            height: 240px;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
            gap: 0.875rem;
            margin-bottom: 1.75rem;
          }

          .btn {
            width: 100%;
            max-width: 280px;
            min-width: unset;
            padding: 1rem 1.5rem;
            font-size: 1rem;
          }

          .social-links {
            gap: 0.625rem;
            max-width: 200px;
          }

          .social-link {
            width: 44px;
            height: 44px;
          }

          .decoration-1 {
            width: 120px;
            height: 120px;
            top: -20px;
            right: -20px;
          }

          .decoration-2 {
            width: 100px;
            height: 100px;
            bottom: -20px;
            left: -20px;
          }
        }

        @media (max-width: 375px) {
          .personal-content {
            gap: 1.5rem;
          }

          .main-title {
            font-size: clamp(1.75rem, 9vw, 2.5rem);
          }

          .subtitle {
            font-size: clamp(0.85rem, 5vw, 1.125rem);
          }

          .description {
            font-size: 0.9rem;
          }

          .image-container {
            width: 220px;
            height: 220px;
          }

          .btn {
            padding: 0.875rem 1.25rem;
            font-size: 0.95rem;
          }

          .social-link {
            width: 40px;
            height: 40px;
          }
        }
      `})]})},zm=[{id:1,key:"secureComputing",technologies:["React.js","Node.js","Express.js","MongoDB","TypeScript","Material-UI","Jest","Playwright","Multer","Git"],type:"internship"},{id:2,key:"ankuGameJam",technologies:["Unity","C#","UI/UX","Game Design"],type:"gamejam"},{id:3,key:"puraGameJam",technologies:["Unity","C#","Level Design","Game Design","Storytelling"],type:"gamejam"},{id:4,key:"ayazJam",technologies:["Unity","C#"],type:"gamejam"}],hp={programmingLanguages:["Java","Kotlin","Python","C#","C","JavaScript"],webTechnologies:["React","Node.js","Express.js","HTML5"],mobileGameDevelopment:["Unity","Kotlin"],testingAutomation:["Jest","Selenium","Playwright"],databases:["MongoDB"]},bp=()=>{const{t:p}=zi(),[w,C]=ne.useState(1),[d,O]=ne.useState("all"),U=3,A=d==="all"?zm:zm.filter(V=>V.type===d),G=Math.ceil(A.length/U),T=(w-1)*U,S=T+U,_=A.slice(T,S),Q=V=>({company:p(`experience.experiences.${V}.company`),role:p(`experience.experiences.${V}.role`),duration:p(`experience.experiences.${V}.duration`),location:p(`experience.experiences.${V}.location`),description:p(`experience.experiences.${V}.description`)}),L=V=>{O(V),C(1)},fe=V=>{C(V)},re=()=>{w>1&&C(w-1)},we=()=>{w<G&&C(w+1)},$=V=>{switch(V){case"internship":return c.jsx(Gl,{size:30});case"research":return c.jsx(va,{size:20});case"freelance":return c.jsx(ql,{size:20});case"gamejam":return c.jsx(sc,{size:30});default:return c.jsx(Gl,{size:20})}},Ve=V=>{switch(V){case"internship":return"var(--primary-color)";case"research":return"var(--accent-color)";case"freelance":return"#10b981";default:return"var(--primary-color)"}};return c.jsxs("div",{className:"experience",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header",children:[c.jsx("h2",{className:"section-title fade-in-up",children:p("experience.title")}),c.jsx("p",{className:"section-description fade-in-up",children:p("experience.description")})]}),c.jsxs("div",{className:"experience-content",children:[c.jsxs("div",{className:"experience-timeline",children:[c.jsx("h3",{className:"subsection-title",children:p("experience.experienceTitle")}),c.jsxs("div",{className:"filter-buttons",children:[c.jsxs("button",{onClick:()=>L("all"),className:`filter-btn ${d==="all"?"active":""}`,children:[c.jsx(Gl,{size:16}),p("experience.allFilter")]}),c.jsxs("button",{onClick:()=>L("internship"),className:`filter-btn ${d==="internship"?"active":""}`,children:[c.jsx(Gl,{size:16}),p("experience.internshipFilter")]}),c.jsxs("button",{onClick:()=>L("gamejam"),className:`filter-btn ${d==="gamejam"?"active":""}`,children:[c.jsx(sc,{size:16}),p("experience.gamejamFilter")]}),c.jsxs("button",{onClick:()=>L("freelance"),className:`filter-btn ${d==="freelance"?"active":""}`,children:[c.jsx(ql,{size:16}),"Freelance"]})]}),c.jsx("div",{className:"timeline",children:_.map((V,be)=>{const he=Q(V.key);return c.jsxs("div",{className:"timeline-item fade-in-up",children:[c.jsxs("div",{className:"timeline-connector",children:[c.jsx("div",{className:"timeline-icon",style:{backgroundColor:Ve(V.type)},children:$(V.type)}),be<_.length-1&&c.jsx("div",{className:"timeline-line"})]}),c.jsx("div",{className:"timeline-content",children:c.jsxs("div",{className:"experience-card card",children:[c.jsxs("div",{className:"experience-header",children:[c.jsx("h4",{className:"experience-role",children:he.role}),c.jsx("h5",{className:"experience-company",children:he.company}),c.jsxs("div",{className:"experience-meta",children:[c.jsxs("span",{className:"experience-duration",children:[c.jsx(wm,{size:16}),he.duration]}),c.jsxs("span",{className:"experience-location",children:[c.jsx(Nm,{size:16}),he.location]})]})]}),c.jsx("ul",{className:"experience-description",children:Array.isArray(he.description)?he.description.map((J,Ne)=>c.jsx("li",{children:J},Ne)):c.jsx("li",{children:he.description})}),c.jsx("div",{className:"experience-technologies",children:V.technologies.map(J=>c.jsx("span",{className:"tech-tag",children:J},J))})]})})]},V.id)})}),G>1&&c.jsxs("div",{className:"pagination-controls",children:[c.jsxs("button",{onClick:re,disabled:w===1,className:"pagination-btn",children:[c.jsx(Am,{size:16}),p("experience.previous")]}),c.jsx("div",{className:"pagination-numbers",children:Array.from({length:G},(V,be)=>be+1).map(V=>c.jsx("button",{onClick:()=>fe(V),className:`pagination-number ${w===V?"active":""}`,children:V},V))}),c.jsxs("button",{onClick:we,disabled:w===G,className:"pagination-btn",children:[p("experience.next"),c.jsx(Tm,{size:16})]})]}),A.length===0&&c.jsx("div",{className:"no-results",children:c.jsx("p",{children:"No experiences found for this category."})})]}),c.jsxs("div",{className:"skills-section",children:[c.jsx("h3",{className:"subsection-title",children:p("experience.skillsTitle")}),c.jsx("div",{className:"skills-grid",children:Object.entries(hp).map(([V,be])=>c.jsxs("div",{className:"skill-category card fade-in-up",children:[c.jsx("h4",{className:"skill-category-title",children:p(`experience.skills.${V}`)}),c.jsx("div",{className:"skill-items",children:be.map(he=>c.jsx("span",{className:"skill-item",children:he},he))})]},V))})]})]})]}),c.jsx("style",{jsx:!0,children:`
        .experience {
          position: relative;
          overflow: hidden;
        }

        .experience::before {
          content: '';
          position: absolute;
          top: 20%;
          left: -10%;
          width: 550px;
          height: 550px;
          background: radial-gradient(circle, rgba(147, 51, 234, 0.06) 0%, transparent 70%);
          border-radius: 50%;
          animation: floatExperience 14s ease-in-out infinite;
        }

        .experience::after {
          content: '';
          position: absolute;
          bottom: 15%;
          right: -15%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.05) 0%, transparent 70%);
          border-radius: 50%;
          animation: floatExperience 10s ease-in-out infinite reverse;
        }

        @keyframes floatExperience {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-35px) rotate(180deg);
          }
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
          z-index: 1;
        }

        .section-title {
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #9333EA, #1D4ED8, #06B6D4);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 200%;
          animation: gradientExperience 6s ease infinite;
        }

        @keyframes gradientExperience {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .section-description {
          font-size: 1.125rem;
          max-width: 600px;
          margin: 0 auto;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .experience-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          position: relative;
          z-index: 1;
        }

        .subsection-title {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          color: var(--text-primary);
        }

        /* Enhanced Filter Buttons */
        .filter-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 2rem;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(147, 51, 234, 0.2);
        }

        .filter-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(29, 78, 216, 0.05));
          border: 2px solid rgba(147, 51, 234, 0.3);
          border-radius: 25px;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-weight: 600;
          font-size: 0.9rem;
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }

        .filter-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .filter-btn:hover::before {
          left: 100%;
        }

        .filter-btn:hover {
          background: linear-gradient(135deg, #9333EA, #1D4ED8);
          color: white;
          border-color: #9333EA;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(147, 51, 234, 0.4);
        }

        .filter-btn.active {
          background: linear-gradient(135deg, #9333EA, #1D4ED8);
          color: white;
          border-color: #9333EA;
          box-shadow: 0 8px 25px rgba(147, 51, 234, 0.4);
        }

        [data-theme="light"] .filter-btn {
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.08), rgba(29, 78, 216, 0.03));
          border: 2px solid rgba(147, 51, 234, 0.2);
        }

        /* No Results */
        .no-results {
          text-align: center;
          padding: 3rem 0;
          color: var(--text-secondary);
        }

        .no-results p {
          font-size: 1.1rem;
          margin: 0;
        }

        /* Enhanced Timeline Styles */
        .timeline {
          position: relative;
        }

        .timeline-item {
          display: flex;
          margin-bottom: 2rem;
        }

        .timeline-connector {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-right: 2rem;
        }

        .timeline-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          background: linear-gradient(135deg, #9333EA, #1D4ED8);
          box-shadow: 0 8px 25px rgba(147, 51, 234, 0.4);
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .timeline-item:hover .timeline-icon {
          transform: scale(1.1) rotate(360deg);
          box-shadow: 0 12px 30px rgba(147, 51, 234, 0.5);
        }

        .timeline-line {
          width: 3px;
          height: 100%;
          background: linear-gradient(180deg, rgba(147, 51, 234, 0.3), rgba(29, 78, 216, 0.2));
          margin-top: 1rem;
          min-height: 60px;
          border-radius: 2px;
        }

        .timeline-content {
          flex: 1;
        }

        .experience-card {
          position: relative;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          background: linear-gradient(135deg, 
            rgba(147, 51, 234, 0.03) 0%, 
            rgba(29, 78, 216, 0.02) 50%, 
            rgba(6, 182, 212, 0.03) 100%);
          backdrop-filter: blur(20px);
          border: 2px solid rgba(147, 51, 234, 0.1);
          border-radius: 20px;
          border-left: 4px solid transparent;
          overflow: hidden;
        }

        .experience-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, 
            rgba(147, 51, 234, 0.05) 0%, 
            transparent 50%, 
            rgba(29, 78, 216, 0.05) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
          border-radius: 18px;
        }

        .experience-card:hover::before {
          opacity: 1;
        }

        .experience-card:hover {
          transform: translateX(4px);
          border-left-color: #9333EA;
          border-color: #9333EA;
          box-shadow: 
            0 20px 40px rgba(147, 51, 234, 0.2),
            0 8px 25px rgba(29, 78, 216, 0.15);
          background: var(--background-primary);
        }

        [data-theme="light"] .experience-card {
          background: linear-gradient(135deg, 
            rgba(147, 51, 234, 0.02) 0%, 
            rgba(29, 78, 216, 0.01) 50%, 
            rgba(6, 182, 212, 0.02) 100%);
          border: 2px solid rgba(147, 51, 234, 0.08);
        }

        [data-theme="dark"] .experience-card:hover {
          box-shadow: 
            0 20px 40px rgba(147, 51, 234, 0.3),
            0 8px 25px rgba(29, 78, 216, 0.25);
        }

        .experience-header {
          margin-bottom: 1rem;
          position: relative;
          z-index: 2;
        }

        .experience-role {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
          color: var(--text-primary);
          transition: all 0.3s ease;
        }

        .experience-card:hover .experience-role {
          background: linear-gradient(135deg, #9333EA, #1D4ED8);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .experience-company {
          font-size: 1.125rem;
          color: #9333EA;
          margin-bottom: 0.75rem;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .experience-card:hover .experience-company {
          color: #7c3aed;
        }

        .experience-meta {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1rem;
          position: relative;
          z-index: 2;
        }

        .experience-duration,
        .experience-location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .experience-card:hover .experience-duration,
        .experience-card:hover .experience-location {
          color: var(--text-primary);
        }

        .experience-description {
          margin: 1rem 0;
          padding-left: 1rem;
          position: relative;
          z-index: 2;
        }

        .experience-description li {
          margin-bottom: 0.5rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .experience-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1rem;
          position: relative;
          z-index: 2;
        }

        .tech-tag {
          background: linear-gradient(135deg, #9333EA, #1D4ED8);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(147, 51, 234, 0.3);
        }

        .tech-tag:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(147, 51, 234, 0.4);
        }

        [data-theme="light"] .tech-tag {
          background: linear-gradient(135deg, #9333EA, #1D4ED8);
          color: white;
        }

        /* Enhanced Skills Section */
        .skills-grid {
          display: grid;
          gap: 1.5rem;
        }

        .skill-category {
          padding: 1.5rem;
          transition: all 0.3s ease;
          background: linear-gradient(135deg, 
            rgba(147, 51, 234, 0.03) 0%, 
            rgba(29, 78, 216, 0.02) 100%);
          backdrop-filter: blur(20px);
          border: 2px solid rgba(147, 51, 234, 0.1);
          border-radius: 15px;
          border-left: 3px solid transparent;
          position: relative;
          overflow: hidden;
        }

        .skill-category::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .skill-category:hover::before {
          left: 100%;
        }

        .skill-category:hover {
          border-left-color: #9333EA;
          border-color: #9333EA;
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(147, 51, 234, 0.2);
        }

        [data-theme="light"] .skill-category {
          background: linear-gradient(135deg, 
            rgba(147, 51, 234, 0.02) 0%, 
            rgba(29, 78, 216, 0.01) 100%);
          border: 2px solid rgba(147, 51, 234, 0.08);
        }

        [data-theme="dark"] .skill-category:hover {
          box-shadow: 0 12px 30px rgba(147, 51, 234, 0.3);
        }

        [data-theme="dark"] .skill-category::before {
          background: linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.2), transparent);
        }

        .skill-category-title {
          font-size: 1.125rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .skill-category:hover .skill-category-title {
          background: linear-gradient(135deg, #9333EA, #1D4ED8);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .skill-items {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .skill-item {
          padding: 0.5rem 0;
          color: var(--text-secondary);
          border-bottom: 1px solid rgba(147, 51, 234, 0.1);
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
        }

        .skill-item::before {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, #9333EA, #1D4ED8);
          transition: width 0.3s ease;
        }

        .skill-item:hover {
          color: #9333EA;
          transform: translateX(4px);
        }

        .skill-item:hover::before {
          width: 100%;
        }

        .skill-item:last-child {
          border-bottom: none;
        }

        /* Enhanced Pagination Styles */
        .pagination-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          margin-top: 2rem;
          padding: 1rem 0;
        }

        .pagination-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(29, 78, 216, 0.05));
          border: 2px solid rgba(147, 51, 234, 0.3);
          border-radius: 12px;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
          backdrop-filter: blur(10px);
        }

        .pagination-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #9333EA, #1D4ED8);
          color: white;
          border-color: #9333EA;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(147, 51, 234, 0.4);
        }

        .pagination-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .pagination-numbers {
          display: flex;
          gap: 0.5rem;
        }

        .pagination-number {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(29, 78, 216, 0.05));
          border: 2px solid rgba(147, 51, 234, 0.3);
          border-radius: 12px;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
          backdrop-filter: blur(10px);
        }

        .pagination-number:hover {
          background: linear-gradient(135deg, #9333EA, #1D4ED8);
          color: white;
          border-color: #9333EA;
          transform: scale(1.1);
          box-shadow: 0 4px 15px rgba(147, 51, 234, 0.4);
        }

        .pagination-number.active {
          background: linear-gradient(135deg, #9333EA, #1D4ED8);
          color: white;
          border-color: #9333EA;
          box-shadow: 0 4px 15px rgba(147, 51, 234, 0.4);
        }

        [data-theme="light"] .pagination-btn,
        [data-theme="light"] .pagination-number {
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.08), rgba(29, 78, 216, 0.03));
          border: 2px solid rgba(147, 51, 234, 0.2);
        }

        /* Mobile Responsive */
        @media (max-width: 1024px) {
          .experience-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .section-description {
            font-size: 1rem;
            max-width: 500px;
          }

          .filter-buttons {
            justify-content: center;
          }

          .timeline-connector {
            margin-right: 1.5rem;
          }

          .timeline-icon {
            width: 44px;
            height: 44px;
          }
        }

        @media (max-width: 768px) {
          .section-header {
            margin-bottom: 3rem;
          }

          .section-title {
            font-size: 2.25rem;
          }

          .section-description {
            font-size: 1rem;
            max-width: 100%;
            padding: 0 1rem;
          }

          .subsection-title {
            font-size: 1.375rem;
            margin-bottom: 1.5rem;
            text-align: center;
          }

          .filter-buttons {
            justify-content: center;
            gap: 0.625rem;
            margin-bottom: 1.5rem;
            padding: 0.75rem 0;
          }

          .filter-btn {
            padding: 0.625rem 0.875rem;
            font-size: 0.85rem;
            border-radius: 20px;
            min-width: auto;
          }

          .timeline-item {
            margin-bottom: 1.5rem;
          }

          .timeline-connector {
            margin-right: 1rem;
          }

          .timeline-icon {
            width: 40px;
            height: 40px;
          }

          .timeline-line {
            width: 2px;
            min-height: 40px;
          }

          .experience-card {
            border-radius: 16px;
            padding: 1.25rem;
          }

          .experience-role {
            font-size: 1.125rem;
          }

          .experience-company {
            font-size: 1rem;
          }

          .experience-meta {
            flex-direction: column;
            gap: 0.5rem;
            margin-bottom: 1rem;
          }

          .experience-duration,
          .experience-location {
            font-size: 0.875rem;
          }

          .experience-description {
            padding-left: 0;
            margin: 1rem 0;
          }

          .experience-description li {
            font-size: 0.9rem;
            margin-bottom: 0.375rem;
          }

          .experience-technologies {
            margin-top: 1rem;
          }

          .tech-tag {
            padding: 0.375rem 0.75rem;
            font-size: 0.8rem;
            border-radius: 16px;
          }

          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.875rem;
          }

          .skill-category {
            padding: 0.875rem;
            border-radius: 12px;
          }

          .skill-category-title {
            font-size: 0.9rem;
            margin-bottom: 0.625rem;
            text-align: center;
          }

          .skill-items {
            gap: 0.25rem;
          }

          .skill-item {
            padding: 0.375rem 0;
            font-size: 0.8rem;
            border-bottom: 1px solid rgba(147, 51, 234, 0.08);
          }

          .pagination-controls {
            flex-direction: column;
            gap: 1rem;
            margin-top: 1.5rem;
          }

          .pagination-btn {
            padding: 0.625rem 0.875rem;
            font-size: 0.9rem;
            border-radius: 10px;
          }

          .pagination-numbers {
            gap: 0.375rem;
          }

          .pagination-number {
            width: 36px;
            height: 36px;
            font-size: 0.875rem;
            border-radius: 10px;
          }

          .experience::before,
          .experience::after {
            width: 350px;
            height: 350px;
          }
        }

        @media (max-width: 480px) {
          .section-header {
            margin-bottom: 2.5rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .section-description {
            font-size: 0.95rem;
            padding: 0 0.5rem;
          }

          .subsection-title {
            font-size: 1.25rem;
            margin-bottom: 1.25rem;
          }

          .filter-buttons {
            flex-wrap: wrap;
            gap: 0.5rem;
            padding: 0.5rem 0;
          }

          .filter-btn {
            padding: 0.5rem 0.75rem;
            font-size: 0.8rem;
            flex: 1;
            min-width: 120px;
            justify-content: center;
          }

          .timeline-item {
            margin-bottom: 1.25rem;
          }

          .timeline-connector {
            margin-right: 0.75rem;
          }

          .timeline-icon {
            width: 36px;
            height: 36px;
          }

          .timeline-line {
            width: 2px;
            min-height: 30px;
          }

          .experience-card {
            padding: 1rem;
            border-radius: 12px;
          }

          .experience-role {
            font-size: 1rem;
            margin-bottom: 0.375rem;
          }

          .experience-company {
            font-size: 0.9rem;
            margin-bottom: 0.625rem;
          }

          .experience-meta {
            gap: 0.375rem;
            margin-bottom: 0.875rem;
          }

          .experience-duration,
          .experience-location {
            font-size: 0.8rem;
          }

          .experience-description li {
            font-size: 0.85rem;
            margin-bottom: 0.25rem;
          }

          .tech-tag {
            padding: 0.25rem 0.625rem;
            font-size: 0.75rem;
            border-radius: 12px;
          }

          .skill-category {
            padding: 1rem;
          }

          .skill-category-title {
            font-size: 0.95rem;
            margin-bottom: 0.75rem;
          }

          .skill-item {
            padding: 0.5rem 0;
            font-size: 0.85rem;
          }

          .pagination-controls {
            gap: 0.75rem;
          }

          .pagination-btn {
            padding: 0.5rem 0.75rem;
            font-size: 0.85rem;
            width: 100%;
            max-width: 150px;
          }

          .pagination-number {
            width: 32px;
            height: 32px;
            font-size: 0.8rem;
          }

          .no-results {
            padding: 2rem 0;
          }

          .no-results p {
            font-size: 0.95rem;
          }

          .experience::before,
          .experience::after {
            width: 250px;
            height: 250px;
          }
        }

        @media (max-width: 375px) {
          .section-title {
            font-size: 1.875rem;
          }

          .section-description {
            font-size: 0.9rem;
          }

          .filter-btn {
            font-size: 0.75rem;
            padding: 0.5rem 0.625rem;
            min-width: 100px;
          }

          .timeline-icon {
            width: 32px;
            height: 32px;
          }

          .experience-card {
            padding: 0.875rem;
          }

          .experience-role {
            font-size: 0.95rem;
          }

          .experience-company {
            font-size: 0.85rem;
          }

          .tech-tag {
            padding: 0.25rem 0.5rem;
            font-size: 0.7rem;
          }

          .pagination-number {
            width: 28px;
            height: 28px;
            font-size: 0.75rem;
          }
        }
      `})]})};var vp=Sm();const yp=[{id:1,key:"collectify",categories:["web","backend"],technologies:["React.js","Node.js","Express.js","MongoDB","TypeScript","Material-UI","Jest","Playwright","Chart.js","Multer"],images:["/Portfolio/assets/Collectify1.png","/Portfolio/assets/Collectify2.png","/Portfolio/assets/Collectify3.png","/Portfolio/assets/Collectify4.png"],image:"/api/placeholder/400/250",demoUrl:null,githubUrl:"https://github.com/KBatuhanB/Collectify-Books-Movies-Games-Collection-Manager-Full-Stack-",featured:!0,status:"completed"},{id:2,key:"projectManagement",categories:["web","backend"],technologies:["React","Material-UI","Recharts","React Query","Node.js","Express","MongoDB","Axios"],images:["/Portfolio/assets/ProjectManagment.png","/Portfolio/assets/ProjectManagment2.png"],image:"/api/placeholder/400/250",demoUrl:null,githubUrl:"https://github.com/KBatuhanB/Project-Management-Panel",featured:!0,status:"completed"},{id:7,key:"pythonIn20Days",categories:["mobile"],technologies:["Kotlin","Jetpack Compose","Material 3","MVVM","Navigation Component","SharedPreferences","Custom Animations","Manual DI","Gradle","Android Studio"],images:["/Portfolio/assets/PyhtonIn20Days1.jpg","/Portfolio/assets/PyhtonIn20Days2.jpg","/Portfolio/assets/PyhtonIn20Days3.jpg","/Portfolio/assets/PyhtonIn20Days4.jpg"],image:"/api/placeholder/400/250",demoUrl:"https://drive.google.com/file/d/1AoQr3gtaGzhfCeQ5O3BWnc5oRgzJyWsZ/view?usp=sharing",githubUrl:"https://github.com/KBatuhanB/Kotlin-Mobill-App-PhytonIn20Days",featured:!0,status:"completed"},{id:8,key:"axolotlAscension",categories:["game"],technologies:["Unity","C#","Coroutines","Object Pooling","Singleton Pattern","State Machine","Git"],images:["/Portfolio/assets/AxoltlAccension1.png","/Portfolio/assets/AxoltlAccension2.png","/Portfolio/assets/AxoltlAccension3.png","/Portfolio/assets/AxoltlAccension4.png","/Portfolio/assets/AxoltlAccension5.png"],image:"/api/placeholder/400/250",demoUrl:"https://fiuby.com/games/axolotl-ascension",githubUrl:"https://github.com/KBatuhanB/Ankus-Axos-GameJam-Game",featured:!0,status:"completed"},{id:9,key:"paperTale",categories:["game"],technologies:["Unity","C#","Level Design","Game Design","Storytelling","Narrative Design"],images:["/Portfolio/assets/PaperTale.png","/Portfolio/assets/PaperTale1.png","/Portfolio/assets/PaperTale2.png","/Portfolio/assets/PaperTale3.png","/Portfolio/assets/PaperTale4.png","/Portfolio/assets/PaperTale5.png"],image:"/api/placeholder/400/250",demoUrl:"https://erque.itch.io/papertale",featured:!0,status:"completed"},{id:10,key:"vslikeGame",categories:["game"],technologies:["Unity","C#","Game Design","UI/UX Design","Marketing","Solo Development","Indie Game Development"],images:["/Portfolio/assets/vslike1.png","/Portfolio/assets/vslike2.png","/Portfolio/assets/vslike3.png","/Portfolio/assets/vslike4.png"],image:"/api/placeholder/400/250",demoUrl:"https://www.youtube.com/@0toMillion-dev",githubUrl:null,featured:!0,status:"in-progress"},{id:3,key:"todoApi",categories:["backend"],technologies:["Node.js","Express.js","MongoDB","Swagger","Jest","UUID","dotenv"],images:["/Portfolio/assets/TOD-API.png"],demoUrl:null,githubUrl:"https://github.com/KBatuhanB/Todo-API",featured:!1,status:"completed"},{id:4,key:"softwareTestingSuite",categories:["testing"],technologies:["Playwright","Jest","Node.js","MongoDB","JavaScript"],images:["/Portfolio/assets/Playwright1.png","/Portfolio/assets/Playwright2.png"],demoUrl:null,githubUrl:"https://github.com/KBatuhanB/Software-Tests",featured:!1,status:"completed"},{id:5,key:"pythonSeleniumAutomation",categories:["testing"],technologies:["Python","Selenium","Web Automation","Data Structures"],images:["/Portfolio/assets/pyhtonExample1.png"],demoUrl:null,githubUrl:"https://github.com/KBatuhanB/Phyton-Selenium-Tests-Examples",featured:!1,status:"completed"}],xp=[{id:"all",label:"projects.allFilter",icon:c.jsx(va,{size:20})},{id:"web",label:"projects.webFilter",icon:c.jsx(dc,{size:20})},{id:"backend",label:"projects.backendFilter",icon:c.jsx(op,{size:20})},{id:"game",label:"projects.gameFilter",icon:c.jsx(sc,{size:20})},{id:"mobile",label:"projects.mobileFilter",icon:c.jsx(up,{size:20})},{id:"testing",label:"projects.toolsFilter",icon:c.jsx(va,{size:20})}],kp=()=>{const{t:p}=zi(),[w,C]=ne.useState("all"),[d,O]=ne.useState(null),[U,A]=ne.useState(!1),[G,T]=ne.useState(1),[S,_]=ne.useState({}),[Q,L]=ne.useState({}),[fe,re]=ne.useState({}),[we,$]=ne.useState({}),V=yp.map(E=>{const y=p("projects.data")?.[E.key];return{...E,title:y?.title||E.key,description:y?.description||[],detailedInfo:y?.detailedInfo||{}}}),be=E=>{O(E),A(!0),document.body.style.overflow="hidden"},he=()=>{A(!1),O(null),document.body.style.overflow="unset"},J=w==="all"?V:V.filter(E=>E.categories.includes(w)),Ne=()=>window.innerWidth<=768?4:6,[Ae,Ze]=ne.useState(Ne());ne.useEffect(()=>{const E=()=>{const u=Ne();u!==Ae&&(Ze(u),T(1))};return window.addEventListener("resize",E),()=>window.removeEventListener("resize",E)},[Ae]);const Ye=Math.ceil(J.length/Ae),St=(G-1)*Ae,ut=St+Ae,Ue=J.slice(St,ut);ne.useEffect(()=>{const E={};return V.forEach(u=>{u.images&&u.images.length>1&&(E[u.id]=setInterval(()=>{re(y=>({...y,[u.id]:"fade-out"})),setTimeout(()=>{_(y=>({...y,[u.id]:((y[u.id]||0)+1)%u.images.length})),re(y=>({...y,[u.id]:"fade-in"})),setTimeout(()=>{re(y=>({...y,[u.id]:""}))},1200)},600)},4e3))}),()=>{Object.values(E).forEach(u=>clearInterval(u))}},[V]);const Nt=E=>{C(E),T(1)},yt=E=>{T(E),document.querySelector(".projects")?.scrollIntoView({behavior:"smooth"})},Oe=()=>{G>1&&yt(G-1)},x=()=>{G<Ye&&yt(G+1)};ne.useEffect(()=>{if(U&&d?.images&&d.images.length>1){const E=setInterval(()=>{$(u=>({...u,[d.id]:"fade-out"})),setTimeout(()=>{L(u=>({...u,[d.id]:((u[d.id]||0)+1)%d.images.length})),$(u=>({...u,[d.id]:"fade-in"})),setTimeout(()=>{$(u=>({...u,[d.id]:""}))},1200)},600)},4e3);return()=>clearInterval(E)}},[U,d]);const M=E=>{switch(E){case"completed":return"#9333EA";case"in-progress":return"#06B6D4";case"planned":return"#1D4ED8";default:return"#9333EA"}},q=E=>{switch(E){case"completed":return p("projects.status.completed");case"in-progress":return p("projects.status.inProgress");case"planned":return p("projects.status.planned");default:return p("projects.status.completed")}};return c.jsxs("div",{className:"projects",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header",children:[c.jsx("h2",{className:"section-title fade-in-up",children:p("projects.title")}),c.jsx("p",{className:"section-description fade-in-up",children:p("projects.description")})]}),c.jsx("div",{className:"project-filters fade-in-up",children:xp.map(E=>c.jsxs("button",{onClick:()=>Nt(E.id),className:`filter-button ${w===E.id?"active":""}`,"aria-label":`Filter by ${p(E.label)}`,children:[E.icon,p(E.label)]},E.id))}),c.jsx("div",{className:"projects-grid",children:Ue.map((E,u)=>c.jsxs("div",{className:`project-card card fade-in-up ${E.featured?"featured":""}`,style:{animationDelay:`${u*.1}s`},onClick:()=>be(E),children:[c.jsxs("div",{className:"project-image",children:[E.images&&E.images.length>0?c.jsxs("div",{className:"image-gallery",style:{"--bg-image":`url(${E.images[S[E.id]||0]})`},children:[c.jsx("img",{src:E.images[S[E.id]||0],alt:`${E.title} screenshot`,className:`project-screenshot ${fe[E.id]||""}`,onError:y=>{y.target.style.display="none",y.target.nextSibling.style.display="flex"}}),c.jsx("div",{className:"image-placeholder",style:{display:"none"},children:c.jsxs("div",{className:"placeholder-content",children:[c.jsx(va,{size:48}),c.jsx("p",{children:"Project Screenshot"})]})}),E.images.length>1&&c.jsx("div",{className:"image-indicators",children:E.images.map((y,D)=>c.jsx("div",{className:`indicator ${(S[E.id]||0)===D?"active":""}`},D))})]}):c.jsx("div",{className:"image-placeholder",children:c.jsxs("div",{className:"placeholder-content",children:[c.jsx(va,{size:48}),c.jsx("p",{children:"Project Screenshot"})]})}),c.jsx("div",{className:"status-badge",style:{backgroundColor:M(E.status)},children:q(E.status)}),E.featured&&c.jsx("div",{className:"featured-star",children:c.jsx(Um,{size:20})})]}),c.jsxs("div",{className:"project-content",children:[c.jsx("h3",{className:"project-title",children:E.title}),c.jsx("div",{className:"project-description",children:Array.isArray(E.description)?c.jsx("ul",{className:"description-list",children:E.description.map((y,D)=>c.jsx("li",{children:y},D))}):c.jsx("p",{children:E.description})}),c.jsx("div",{className:"project-technologies",children:c.jsxs("div",{className:"tech-carousel",children:[E.technologies.map(y=>c.jsx("span",{className:"tech-tag",children:y},y)),E.technologies.map((y,D)=>c.jsx("span",{className:"tech-tag",children:y},`${y}-duplicate-${D}`))]})}),c.jsxs("div",{className:`project-links ${E.demoUrl&&E.githubUrl?"multiple-links":"single-link"}`,children:[E.demoUrl&&c.jsxs("a",{href:E.demoUrl,target:"_blank",rel:"noopener noreferrer",className:"project-link demo-link","aria-label":`View live demo of ${E.title}`,onClick:y=>y.stopPropagation(),children:[c.jsx(ql,{size:18}),p("projects.viewLive")]}),E.githubUrl&&c.jsxs("a",{href:E.githubUrl,target:"_blank",rel:"noopener noreferrer",className:"project-link source-link","aria-label":`View source code of ${E.title}`,onClick:y=>y.stopPropagation(),children:[c.jsx(Hl,{size:18}),p("projects.viewCode")]})]})]})]},E.id))}),Ye>1&&c.jsxs("div",{className:"pagination-container fade-in-up",children:[c.jsxs("div",{className:"pagination",children:[c.jsxs("button",{className:`pagination-btn ${G===1?"disabled":""}`,onClick:Oe,disabled:G===1,"aria-label":"Go to previous page",children:[c.jsx(Am,{size:20}),p("projects.previous")]}),c.jsx("div",{className:"pagination-numbers",children:Array.from({length:Ye},(E,u)=>u+1).map(E=>c.jsx("button",{className:`pagination-number ${G===E?"active":""}`,onClick:()=>yt(E),"aria-label":`Go to page ${E}`,children:E},E))}),c.jsxs("button",{className:`pagination-btn ${G===Ye?"disabled":""}`,onClick:x,disabled:G===Ye,"aria-label":"Go to next page",children:[p("projects.next"),c.jsx(Tm,{size:20})]})]}),c.jsxs("div",{className:"pagination-info",children:[p("projects.showing")," ",St+1,"-",Math.min(ut,J.length)," ",p("projects.of")," ",J.length," ",p("projects.projects")]})]}),J.length===0&&c.jsxs("div",{className:"empty-state",children:[c.jsx(va,{size:64}),c.jsx("h3",{children:"No projects found"}),c.jsx("p",{children:"No projects match the selected category."})]})]}),U&&d&&vp.createPortal(c.jsx("div",{className:"modal-overlay",onClick:he,children:c.jsxs("div",{className:"modal-content",onClick:E=>E.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h2",{className:"modal-title",children:d.title}),c.jsx("button",{className:"modal-close-btn",onClick:he,"aria-label":"Close modal",children:c.jsx(Om,{size:24})})]}),c.jsxs("div",{className:"modal-body",children:[d.images&&d.images.length>0?c.jsxs("div",{className:"modal-image-gallery",style:{"--modal-bg-image":`url(${d.images[Q[d.id]||0]})`},children:[c.jsx("img",{src:d.images[Q[d.id]||0],alt:`${d.title} screenshot`,className:`modal-screenshot ${we[d.id]||""}`,onError:E=>{E.target.style.display="none",E.target.nextSibling.style.display="flex"}}),c.jsx("div",{className:"modal-image-placeholder",style:{display:"none"},children:c.jsxs("div",{className:"placeholder-content",children:[c.jsx(va,{size:64}),c.jsx("p",{children:"Project Screenshot"})]})}),d.images.length>1&&c.jsx("div",{className:"modal-image-indicators",children:d.images.map((E,u)=>c.jsx("div",{className:`modal-indicator ${(Q[d.id]||0)===u?"active":""}`,onClick:()=>{$(y=>({...y,[d.id]:"fade-out"})),setTimeout(()=>{L(y=>({...y,[d.id]:u})),$(y=>({...y,[d.id]:"fade-in"})),setTimeout(()=>{$(y=>({...y,[d.id]:""}))},1200)},600)}},u))})]}):c.jsx("div",{className:"modal-image",children:c.jsx("div",{className:"image-placeholder",children:c.jsxs("div",{className:"placeholder-content",children:[c.jsx(va,{size:64}),c.jsx("p",{children:"Project Screenshot"})]})})}),c.jsxs("div",{className:"modal-section",children:[c.jsx("h3",{children:p("projects.modal.projectOverview")}),c.jsx("p",{children:d.detailedInfo?.overview||"No detailed overview available."})]}),d.detailedInfo?.features&&c.jsxs("div",{className:"modal-section",children:[c.jsx("h3",{children:p("projects.modal.keyFeatures")}),c.jsx("ul",{className:"feature-list",children:d.detailedInfo.features.map((E,u)=>c.jsx("li",{children:E},u))})]}),d.detailedInfo?.techDetails&&c.jsxs("div",{className:"modal-section",children:[c.jsx("h3",{children:p("projects.modal.technicalStack")}),c.jsx("div",{className:"tech-details",children:Object.entries(d.detailedInfo.techDetails).map(([E,u])=>c.jsxs("div",{className:"tech-category",children:[c.jsx("h4",{children:E}),c.jsx("div",{className:"tech-items",children:u.map((y,D)=>c.jsx("span",{className:"tech-item",children:y},D))})]},E))})]}),d.detailedInfo?.learningOutcomes&&c.jsxs("div",{className:"modal-section",children:[c.jsx("h3",{children:p("projects.modal.learningOutcomes")}),c.jsx("ul",{className:"learning-list",children:d.detailedInfo.learningOutcomes.map((E,u)=>c.jsx("li",{children:E},u))})]}),c.jsxs("div",{className:"modal-links",children:[d.demoUrl&&c.jsxs("a",{href:d.demoUrl,target:"_blank",rel:"noopener noreferrer",className:"modal-link demo-link",children:[c.jsx(ql,{size:18}),p("projects.viewLive")]}),d.githubUrl&&c.jsxs("a",{href:d.githubUrl,target:"_blank",rel:"noopener noreferrer",className:"modal-link source-link",children:[c.jsx(Hl,{size:18}),p("projects.viewCode")]})]})]})]})}),document.body),c.jsx("style",{jsx:!0,children:`
        .projects {
          background: var(--background);
          position: relative;
          overflow: hidden;
          contain: layout style paint;
          transform: translateZ(0);
          z-index: 1;
        }

        .projects::before {
          content: '';
          position: absolute;
          top: 20%;
          left: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(29, 78, 216, 0.08) 0%, transparent 70%);
          border-radius: 50%;
        }

        .projects::after {
          content: '';
          position: absolute;
          bottom: 20%;
          right: -10%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(147, 51, 234, 0.06) 0%, transparent 70%);
          border-radius: 50%;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
          z-index: 1;
        }

        .section-title {
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #1D4ED8, #9333EA, #06B6D4);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 200%;
        }

        .project-count {
          background: linear-gradient(135deg, #ffffff, #f1f5f9);
          color: #1D4ED8;
          border: 2px solid #1D4ED8;
          padding: 0.375rem 0.875rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 2.5rem;
          box-shadow: 0 4px 15px rgba(29, 78, 216, 0.2);
          margin-left: 0.75rem;
        }
        [data-theme="light"] .project-count {
          background: linear-gradient(135deg, #1e293b, #0f172a);
          color: #ffffff;
          border: 2px solid #1D4ED8;
          box-shadow: 0 4px 15px rgba(29, 78, 216, 0.3);
        }

        .section-description {
          font-size: 1.125rem;
          max-width: 600px;
          margin: 0 auto;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Enhanced Filter Buttons */
        .project-filters {
          display: flex;
          justify-content: center;
          flex-wrap: nowrap;
          gap: 0.875rem;
          margin-bottom: 3rem;
          position: relative;
          z-index: 1;
          overflow-x: auto;
          padding: 0.5rem 0;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .project-filters::-webkit-scrollbar {
          display: none;
        }

        .filter-button {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          padding: 0.5rem 0.875rem;
          background: linear-gradient(135deg, rgba(29, 78, 216, 0.1), rgba(6, 182, 212, 0.05));
          border: 2px solid rgba(29, 78, 216, 0.3);
          border-radius: 20px;
          color: var(--text-secondary);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-family: inherit;
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
          font-size: 0.8rem;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .filter-button svg {
          width: 16px;
          height: 16px;
          flex-shrink: 0;
        }

        .filter-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .filter-button:hover::before {
          left: 100%;
        }

        [data-theme="light"] .filter-button {
          background: linear-gradient(135deg, rgba(29, 78, 216, 0.08), rgba(6, 182, 212, 0.03));
          border: 2px solid rgba(29, 78, 216, 0.2);
        }

        .filter-button:hover {
          border-color: #1D4ED8;
          color: #1D4ED8;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(29, 78, 216, 0.3);
        }

        .filter-button.active {
          background: linear-gradient(135deg, #1D4ED8, #06B6D4);
          border-color: #1D4ED8;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(29, 78, 216, 0.4);
        }

        /* Enhanced Projects Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          position: relative;
          z-index: 1;
        }

        /* Mobile Responsive */
        @media (max-width: 1024px) {
          .section-description {
            font-size: 1rem;
            max-width: 500px;
          }

          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }

          .project-filters {
            gap: 0.875rem;
            justify-content: center;
            margin-bottom: 2rem;
            padding: 0.75rem 0;
          }

          .filter-button {
            padding: 0.625rem 1.25rem;
            font-size: 0.9rem;
            min-width: auto;
          }
        }

        @media (max-width: 768px) {
          .section-header {
            margin-bottom: 3rem;
          }

          .section-title {
            font-size: 2.25rem;
          }

          .section-description {
            font-size: 1rem;
            max-width: 100%;
            padding: 0 1rem;
          }

          .project-filters {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 0.4rem;
            margin-bottom: 1.5rem;
            padding: 0.5rem 0;
          }

          .filter-button {
            padding: 0.4rem 0.7rem;
            font-size: 0.75rem;
            border-radius: 15px;
            min-width: auto;
            flex-shrink: 0;
            gap: 0.3rem;
          }

          .filter-button svg {
            width: 16px;
            height: 16px;
          }

          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .project-card {
            border-radius: 16px;
          }

          .project-image {
            height: 140px;
          }

          .image-gallery {
            border-radius: 16px 16px 0 0;
          }

          .project-content {
            padding: 1rem 0.75rem;
          }

          .project-title {
            font-size: 1rem;
            margin-bottom: 0.5rem;
          }

          .project-description {
            font-size: 0.8rem;
            margin-bottom: 0.75rem;
            padding: 0;
          }

          .description-list {
            padding: 0;
            margin: 0;
          }

          .description-list li {
            font-size: 0.8rem;
            margin-bottom: 0.3rem;
            padding-left: 1rem;
            line-height: 1.4;
          }

          .project-technologies {
            gap: 0.4rem;
            margin-bottom: 1rem;
          }

          .tech-tag {
            padding: 0.2rem 0.5rem;
            font-size: 0.6rem;
            font-weight: 500;
            border-radius: 12px;
            white-space: nowrap;
            flex-shrink: 0;
          }

          .project-links {
            gap: 0.5rem;
          }

          .project-link {
            padding: 0.5rem 0.8rem;
            font-size: 0.75rem;
          }

          .status-badge {
            top: 0.75rem;
            right: 0.75rem;
            padding: 0.2rem 0.5rem;
            font-size: 0.65rem;
          }

          .featured-star {
            top: 6px;
          }

          .indicator {
            width: 6px;
            height: 6px;
          }

          .pagination-btn {
            padding: 0.625rem 0.875rem;
            font-size: 0.875rem;
          }

          .pagination-number {
            width: 36px;
            height: 36px;
            font-size: 0.875rem;
          }

          .projects::before,
          .projects::after {
            width: 350px;
            height: 350px;
          }

          .modal-content {
            max-width: 95%;
            margin: 1rem;
            border-radius: 20px;
          }

          .modal-header {
            padding: 1.5rem 1.5rem 1rem;
          }

          .modal-title {
            font-size: 1.25rem;
          }

          .modal-body {
            padding: 1.5rem;
          }

          .modal-image-gallery {
            height: 200px;
            margin-bottom: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .section-header {
            margin-bottom: 2.5rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .section-description {
            font-size: 0.95rem;
            padding: 0 0.5rem;
          }

          .project-filters {
            gap: 0.3rem;
            margin-bottom: 1.25rem;
            padding: 0.4rem 0;
          }

          .filter-button {
            padding: 0.35rem 0.6rem;
            font-size: 0.7rem;
            border-radius: 12px;
            min-width: auto;
            flex-shrink: 0;
            gap: 0.25rem;
          }

          .filter-button svg {
            width: 14px;
            height: 14px;
          }

          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .project-card {
            border-radius: 12px;
          }

          .project-image {
            height: 120px;
          }

          .image-gallery {
            border-radius: 12px 12px 0 0;
          }

          .project-content {
            padding: 0.8rem 0.6rem;
          }

          .project-title {
            font-size: 0.9rem;
            margin-bottom: 0.4rem;
            line-height: 1.3;
          }

          .project-description {
            font-size: 0.75rem;
            margin-bottom: 0.6rem;
            line-height: 1.3;
            padding: 0;
          }

          .description-list li {
            font-size: 0.75rem;
            margin-bottom: 0.25rem;
            padding-left: 0.8rem;
            line-height: 1.3;
          }

          .project-technologies {
            gap: 0.25rem;
            margin-bottom: 0.8rem;
          }

          .tech-tag {
            padding: 0.15rem 0.4rem;
            font-size: 0.55rem;
            font-weight: 500;
            border-radius: 10px;
          }

          .project-links {
            gap: 0.4rem;
            flex-direction: column;
          }

          .project-link {
            padding: 0.4rem 0.7rem;
            font-size: 0.7rem;
            border-radius: 15px;
            justify-content: center;
          }

          .status-badge {
            top: 0.6rem;
            right: 0.6rem;
            padding: 0.15rem 0.4rem;
            font-size: 0.6rem;
          }

          .featured-star {
            top: 5px;
          }

          .indicator {
            width: 5px;
            height: 5px;
          }

          .pagination-container {
            margin-top: 2.5rem;
          }

          .pagination-btn {
            padding: 0.5rem 0.75rem;
            font-size: 0.8rem;
          }

          .pagination-number {
            width: 32px;
            height: 32px;
            font-size: 0.8rem;
          }

          .pagination-info {
            font-size: 0.8rem;
          }

          .projects::before,
          .projects::after {
            width: 250px;
            height: 250px;
          }

          .modal-content {
            max-width: 98%;
            margin: 0.5rem;
            border-radius: 18px;
          }

          .modal-header {
            padding: 1.25rem 1.25rem 0.875rem;
          }

          .modal-title {
            font-size: 1.125rem;
          }

          .modal-close-btn {
            width: 36px;
            height: 36px;
            padding: 0.625rem;
          }

          .modal-body {
            padding: 1.25rem;
          }

          .modal-image-gallery {
            height: 180px;
            margin-bottom: 1.25rem;
          }

          .modal-section {
            margin-bottom: 1.5rem;
          }

          .modal-section h3 {
            font-size: 1.125rem;
            margin-bottom: 0.875rem;
          }

          .modal-section p {
            font-size: 0.9rem;
            line-height: 1.6;
          }

          .feature-list li,
          .learning-list li {
            font-size: 0.875rem;
            margin-bottom: 0.625rem;
            padding-left: 1.25rem;
          }

          .tech-category h4 {
            font-size: 0.95rem;
            margin-bottom: 0.625rem;
          }

          .tech-item {
            padding: 0.3rem 0.75rem;
            font-size: 0.8rem;
          }

          .modal-links {
            gap: 0.75rem;
            margin-top: 1.5rem;
            padding-top: 1.5rem;
          }

          .modal-link {
            padding: 0.625rem 1.25rem;
            font-size: 0.85rem;
          }
        }

        @media (max-width: 375px) {
          .section-title {
            font-size: 1.875rem;
          }

          .section-description {
            font-size: 0.9rem;
          }

          .filter-button {
            padding: 0.3rem 0.5rem;
            font-size: 0.65rem;
            min-width: auto;
            flex-shrink: 0;
            gap: 0.2rem;
          }

          .filter-button svg {
            width: 12px;
            height: 12px;
          }

          .projects-grid {
            gap: 0.8rem;
          }

          .project-card {
            border-radius: 10px;
          }

          .project-image {
            height: 100px;
          }

          .image-gallery {
            border-radius: 10px 10px 0 0;
          }

          .project-content {
            padding: 0.7rem 0.5rem;
          }

          .project-title {
            font-size: 0.85rem;
            margin-bottom: 0.35rem;
            line-height: 1.2;
          }

          .project-description {
            font-size: 0.7rem;
            margin-bottom: 0.5rem;
            line-height: 1.2;
            padding: 0;
          }

          .description-list li {
            font-size: 0.7rem;
            padding-left: 0.7rem;
            margin-bottom: 0.2rem;
            line-height: 1.2;
          }

          .project-technologies {
            gap: 0.2rem;
            margin-bottom: 0.7rem;
          }

          .tech-tag {
            padding: 0.1rem 0.3rem;
            font-size: 0.5rem;
            font-weight: 500;
            border-radius: 8px;
          }

          .project-links {
            flex-direction: column;
            gap: 0.3rem;
          }

          .project-link {
            padding: 0.35rem 0.6rem;
            font-size: 0.65rem;
            justify-content: center;
          }

          .status-badge {
            padding: 0.1rem 0.35rem;
            font-size: 0.55rem;
          }

          .indicator {
            width: 4px;
            height: 4px;
          }

          .modal-indicator {
            width: 10px;
            height: 10px;
          }
        }

        .project-card {
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          background: linear-gradient(135deg, 
            rgba(147, 51, 234, 0.03) 0%, 
            rgba(29, 78, 216, 0.02) 50%, 
            rgba(6, 182, 212, 0.03) 100%);
          backdrop-filter: blur(20px);
          border: 2px solid rgba(147, 51, 234, 0.1);
          border-radius: 20px;
          border-bottom: 4px solid transparent;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          will-change: transform, box-shadow, border-color;
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        [data-theme="light"] .project-card {
          background: linear-gradient(135deg, 
            rgba(147, 51, 234, 0.02) 0%, 
            rgba(29, 78, 216, 0.01) 50%, 
            rgba(6, 182, 212, 0.02) 100%);
          border: 2px solid rgba(147, 51, 234, 0.08);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, 
            rgba(147, 51, 234, 0.05) 0%, 
            transparent 50%, 
            rgba(29, 78, 216, 0.05) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
          border-radius: 18px;
        }

        .project-card:hover::before {
          opacity: 1;
        }

        .project-card:hover {
          transform: translateY(-12px) scale(1.02);
          border-bottom-color: #9333EA;
          border-color: #9333EA;
          box-shadow: 
            0 20px 40px rgba(147, 51, 234, 0.2),
            0 8px 25px rgba(29, 78, 216, 0.15);
          background: var(--background-primary);
        }

        [data-theme="dark"] .project-card:hover {
          box-shadow: 
            0 20px 40px rgba(147, 51, 234, 0.3),
            0 8px 25px rgba(29, 78, 216, 0.25);
        }

        .project-card:active {
          transform: translateY(-8px) scale(1.01);
          transition: all 0.15s ease;
        }

        /* Enhanced Project Image */
        .project-image {
          position: relative;
          height: 200px;
          overflow: hidden;
          background: linear-gradient(135deg, 
            rgba(29, 78, 216, 0.05) 0%, 
            rgba(6, 182, 212, 0.03) 100%);
          border-radius: 18px 18px 0 0;
        }

        .image-gallery {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 18px 18px 0 0;
          contain: layout style paint;
          z-index: 1;
        }

        .project-screenshot {
          width: 100%;
          height: 100%;
          object-fit: contain;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 2;
          will-change: opacity, transform;
          opacity: 1;
          transform: translateX(0);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .project-screenshot.fade-in {
          animation: fadeSlideIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .project-screenshot.fade-out {
          animation: fadeSlideOut 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateX(30px) scale(0.95);
            filter: blur(3px);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes fadeSlideOut {
          from {
            opacity: 1;
            transform: translateX(0) scale(1);
            filter: blur(0);
          }
          to {
            opacity: 0;
            transform: translateX(-30px) scale(0.95);
            filter: blur(3px);
          }
        }

        .image-gallery::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: var(--bg-image);
          background-size: cover;
          background-position: center;
          filter: blur(10px);
          opacity: 0.3;
          z-index: 1;
          transition: background-image 0.8s ease;
        }

        .project-card:hover .project-screenshot {
          transform: scale(1.02);
        }

        .image-indicators {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 6px;
          z-index: 10;
        }

        .indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          transition: all 0.3s ease;
          border: 1px solid rgba(29, 78, 216, 0.3);
        }

        .indicator.active {
          background: linear-gradient(135deg, #1D4ED8, #06B6D4);
          transform: scale(1.2);
          border-color: #1D4ED8;
          box-shadow: 0 2px 8px rgba(29, 78, 216, 0.4);
        }

        .image-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #1D4ED8, #06B6D4);
          color: white;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          border-radius: 18px 18px 0 0;
        }

        .project-card:hover .image-placeholder {
          transform: scale(1.05);
          background: linear-gradient(135deg, #1E40AF, #0891B2);
        }

        .image-placeholder::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s ease;
        }

        .project-card:hover .image-placeholder::before {
          left: 100%;
        }

        .placeholder-content {
          text-align: center;
          z-index: 2;
        }

        .placeholder-content p {
          margin-top: 0.5rem;
          color: white;
          font-weight: 600;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .status-badge {
          position: absolute;
          top: 0.875rem;
          right: 0.875rem;
          padding: 0.375rem 0.875rem;
          border-radius: 20px;
          color: white;
          font-size: 0.75rem;
          font-weight: 700;
          z-index: 30;
          backdrop-filter: blur(15px);
          border: 2px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        }

        .featured-star {
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          color: #ffd700;
          z-index: 15;
          filter: drop-shadow(0 2px 8px rgba(255, 215, 0, 0.6));
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .project-card:hover .featured-star {
          transform: translateX(-50%) scale(1.3) rotate(360deg);
          color: #ffed4e;
          filter: drop-shadow(0 4px 12px rgba(255, 215, 0, 0.8));
        }

        /* Enhanced Project Content */
        .project-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
          position: relative;
          z-index: 2;
          justify-content: space-between;
        }

        .project-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
          transition: all 0.3s ease;
          background: linear-gradient(135deg, var(--text-primary), #1D4ED8);
          background-clip: text;
          -webkit-background-clip: text;
          background-size: 200% 200%;
        }

        .project-card:hover .project-title {
          background: linear-gradient(135deg, #9333EA, #1D4ED8);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .project-description {
          color: var(--text-secondary);
          margin-bottom: 1rem;
          flex: 1;
          line-height: 1.6;
          font-size: 0.9rem;
        }

        /* Enhanced Technology Tags */
        .project-technologies {
          display: flex;
          flex-wrap: nowrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          justify-content: flex-start;
          align-items: center;
          position: relative;
          overflow: hidden;
          height: 40px;
          mask: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
        }

        .tech-carousel {
          display: flex;
          gap: 0.5rem;
          animation: techSlide 25s linear infinite;
          white-space: nowrap;
          will-change: transform;
        }

        .tech-tag {
          padding: 0.4rem 1rem;
          background: linear-gradient(145deg, 
            rgba(29, 78, 216, 0.9), 
            rgba(6, 182, 212, 0.8));
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 25px;
          font-size: 0.75rem;
          font-weight: 600;
          color: white;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(15px);
          will-change: transform, box-shadow;
          box-shadow: 
            0 4px 15px rgba(29, 78, 216, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          position: relative;
          overflow: hidden;
          white-space: nowrap;
          flex-shrink: 0;
          min-width: fit-content;
        }

        .tech-tag::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 255, 255, 0.3), 
            transparent);
          transition: left 0.6s;
        }

        @keyframes techSlide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .tech-carousel:hover {
          animation-play-state: paused;
        }

        .project-card:hover .tech-carousel {
          animation-duration: 35s;
        }

        /* Desktop larger screens - faster animation */
        @media (min-width: 1200px) {
          .tech-carousel {
            animation: techSlide 30s linear infinite;
          }

          .project-card:hover .tech-carousel {
            animation-duration: 45s;
          }
        }

        /* Mobile Tech Carousel */
        @media (max-width: 768px) {
          .project-technologies {
            height: 32px;
            margin-bottom: 1rem;
            mask: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
            -webkit-mask: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
          }

          .tech-carousel {
            gap: 0.4rem;
            animation: techSlide 20s linear infinite;
          }

          .tech-tag {
            padding: 0.2rem 0.6rem;
            font-size: 0.6rem;
            font-weight: 500;
            border-radius: 12px;
          }

          .project-card:hover .tech-carousel {
            animation-duration: 30s;
          }
        }

        @media (max-width: 480px) {
          .project-technologies {
            height: 28px;
            margin-bottom: 0.8rem;
          }

          .tech-carousel {
            gap: 0.3rem;
            animation: techSlide 15s linear infinite;
          }

          .tech-tag {
            padding: 0.15rem 0.5rem;
            font-size: 0.55rem;
            border-radius: 10px;
          }
        }

        @media (max-width: 375px) {
          .project-technologies {
            height: 24px;
            margin-bottom: 0.7rem;
          }

          .tech-carousel {
            gap: 0.25rem;
            animation: techSlide 12s linear infinite;
          }

          .tech-tag {
            padding: 0.1rem 0.4rem;
            font-size: 0.5rem;
            border-radius: 8px;
          }
        }

        [data-theme="light"] .tech-tag {
          background: linear-gradient(145deg, 
            rgba(29, 78, 216, 0.95), 
            rgba(6, 182, 212, 0.9));
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 
            0 4px 15px rgba(29, 78, 216, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }

        .tech-tag:hover {
          background: linear-gradient(145deg, #1D4ED8, #06B6D4);
          transform: translateY(-3px) scale(1.05);
          box-shadow: 
            0 8px 25px rgba(29, 78, 216, 0.4),
            0 4px 15px rgba(6, 182, 212, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }

        .tech-tag:hover::before {
          left: 100%;
        }

        /* Enhanced Project Links */
        .project-links {
          display: flex;
          gap: 0.75rem;
          margin-top: auto;
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.875rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
        }

        .project-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .project-link:hover::before {
          left: 100%;
        }

        .primary-link {
          background: linear-gradient(135deg, #1D4ED8, #06B6D4);
          color: white;
          border: 2px solid transparent;
          box-shadow: 0 4px 15px rgba(29, 78, 216, 0.3);
        }

        .primary-link:hover {
          background: linear-gradient(135deg, #1e40af, #0891b2);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(29, 78, 216, 0.4);
        }

        .secondary-link {
          background: linear-gradient(135deg, 
            rgba(29, 78, 216, 0.1), 
            rgba(6, 182, 212, 0.05));
          color: #1D4ED8;
          border: 2px solid rgba(29, 78, 216, 0.3);
        }

        [data-theme="light"] .secondary-link {
          background: linear-gradient(135deg, 
            rgba(29, 78, 216, 0.08), 
            rgba(6, 182, 212, 0.03));
          border-color: rgba(29, 78, 216, 0.2);
        }

        .secondary-link:hover {
          background: linear-gradient(135deg, #1D4ED8, #06B6D4);
          color: white;
          border-color: #1D4ED8;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(29, 78, 216, 0.3);
        }
        /* Enhanced Description Styles */
        .project-description {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1rem;
          transition: all 0.3s ease;
        }

        .description-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .description-list li {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 0.5rem;
          padding-left: 1.2rem;
          position: relative;
          transition: all 0.3s ease;
        }

        .description-list li::before {
          content: "•";
          color: #1D4ED8;
          font-weight: bold;
          position: absolute;
          left: 0;
          top: 0;
          text-shadow: 0 0 8px rgba(29, 78, 216, 0.4);
        }

        .project-card:hover .project-description,
        .project-card:hover .description-list li {
          color: var(--text-primary);
        }

        /* Enhanced Technologies */
        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          justify-content: center;
          align-items: center;
        }

        .project-links.single-link {
          justify-content: center;
        }

        .project-links.multiple-links {
          justify-content: flex-start;
        }

        /* Enhanced Demo/Source Links */
        .demo-link {
          background: transparent;
          color: #9333EA;
          border: 2px solid #9333EA;
          box-shadow: none;
        }

        .demo-link:hover {
          background: rgba(147, 51, 234, 0.1);
          color: #9333EA;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(147, 51, 234, 0.2);
        }

        .source-link {
          background: transparent;
          color: #9333EA;
          border: 2px solid #9333EA;
        }

        [data-theme="light"] .source-link {
          background: transparent;
          color: #9333EA;
          border-color: #9333EA;
        }

        .source-link:hover {
          background: rgba(147, 51, 234, 0.1);
          color: #9333EA;
          border-color: #9333EA;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(147, 51, 234, 0.2);
        }

        /* Enhanced Pagination Styles */
        .pagination-container {
          margin-top: 3rem;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .pagination {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .pagination-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          background: linear-gradient(135deg, 
            rgba(29, 78, 216, 0.1), 
            rgba(6, 182, 212, 0.05));
          border: 2px solid rgba(29, 78, 216, 0.3);
          border-radius: 15px;
          color: #1D4ED8;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-family: inherit;
          backdrop-filter: blur(10px);
        }

        [data-theme="light"] .pagination-btn {
          background: linear-gradient(135deg, 
            rgba(29, 78, 216, 0.08), 
            rgba(6, 182, 212, 0.03));
          border-color: rgba(29, 78, 216, 0.2);
        }

        [data-theme="light"] .pagination-btn {
          background: white;
        }

        .pagination-btn:hover:not(.disabled) {
          border-color: #1D4ED8;
          color: white;
          background: linear-gradient(135deg, #1D4ED8, #06B6D4);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(29, 78, 216, 0.3);
        }

        .pagination-btn.disabled {
          opacity: 0.5;
          cursor: not-allowed;
          filter: grayscale(1);
        }

        .pagination-numbers {
          display: flex;
          gap: 0.5rem;
        }

        .pagination-number {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, 
            rgba(29, 78, 216, 0.1), 
            rgba(6, 182, 212, 0.05));
          border: 2px solid rgba(29, 78, 216, 0.3);
          border-radius: 12px;
          color: #1D4ED8;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: inherit;
          backdrop-filter: blur(10px);
        }

        [data-theme="light"] .pagination-number {
          background: linear-gradient(135deg, 
            rgba(29, 78, 216, 0.08), 
            rgba(6, 182, 212, 0.03));
          border-color: rgba(29, 78, 216, 0.2);
        }

        .pagination-number:hover {
          border-color: #1D4ED8;
          color: white;
          background: linear-gradient(135deg, #1D4ED8, #06B6D4);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(29, 78, 216, 0.3);
        }

        .pagination-number.active {
          background: linear-gradient(135deg, #1D4ED8, #06B6D4);
          border-color: #1D4ED8;
          color: white;
          box-shadow: 0 4px 15px rgba(29, 78, 216, 0.4);
        }

        .pagination-info {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin-top: 1rem;
        }

        /* Enhanced Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 2rem;
          animation: modalFadeIn 0.3s ease-out;
        }

        @keyframes modalFadeIn {
          from {
            opacity: 0;
            backdrop-filter: blur(0px);
          }
          to {
            opacity: 1;
            backdrop-filter: blur(10px);
          }
        }

        .modal-content {
          background: linear-gradient(135deg, 
            var(--background) 0%, 
            rgba(29, 78, 216, 0.02) 100%);
          border: 2px solid rgba(29, 78, 216, 0.1);
          border-radius: 24px;
          max-width: 800px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.25),
            0 12px 30px rgba(29, 78, 216, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          animation: modalSlideIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        [data-theme="light"] .modal-content {
          background: linear-gradient(135deg, 
            white 0%, 
            rgba(29, 78, 216, 0.01) 100%);
          border-color: rgba(29, 78, 216, 0.08);
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.15),
            0 12px 30px rgba(29, 78, 216, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2rem 2rem 1rem;
          border-bottom: 2px solid rgba(29, 78, 216, 0.1);
          position: relative;
        }

        .modal-header::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 2rem;
          right: 2rem;
          height: 2px;
          background: linear-gradient(90deg, #1D4ED8, #06B6D4, #9333EA);
          border-radius: 1px;
        }

        .modal-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
          background: linear-gradient(135deg, var(--text-primary), #1D4ED8);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .modal-close-btn {
          background: linear-gradient(135deg, 
            rgba(29, 78, 216, 0.1), 
            rgba(6, 182, 212, 0.05));
          border: 2px solid rgba(29, 78, 216, 0.2);
          color: #1D4ED8;
          cursor: pointer;
          padding: 0.75rem;
          border-radius: 50%;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-close-btn:hover {
          background: linear-gradient(135deg, #1D4ED8, #06B6D4);
          color: white;
          border-color: #1D4ED8;
          transform: scale(1.1) rotate(90deg);
          box-shadow: 0 4px 15px rgba(29, 78, 216, 0.3);
        }

        .modal-body {
          padding: 2rem;
          position: relative;
        }

        .modal-body::before {
          content: '';
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, rgba(29, 78, 216, 0.05) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .modal-image {
          width: 100%;
          height: 250px;
          margin-bottom: 2rem;
          border-radius: 16px;
          overflow: hidden;
          border: 2px solid rgba(29, 78, 216, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .modal-image-gallery {
          position: relative;
          width: 100%;
          height: 300px;
          margin-bottom: 2rem;
          border-radius: 12px;
          overflow: hidden;
        }

        .modal-image-gallery::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: var(--modal-bg-image);
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          filter: blur(15px);
          opacity: 0.3;
          z-index: 1;
          border-radius: 12px;
        }

        .modal-screenshot {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 8px;
          position: relative;
          z-index: 2;
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          visibility: visible;
        }

        .modal-screenshot.fade-in {
          animation: modalFadeSlideIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .modal-screenshot.fade-out {
          animation: modalFadeSlideOut 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        @keyframes modalFadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
            filter: blur(2px);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes modalFadeSlideOut {
          from {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
          to {
            opacity: 0;
            transform: translateY(-20px) scale(0.98);
            filter: blur(2px);
          }
        }

        .modal-image-gallery::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: var(--modal-bg-image);
          background-size: cover;
          background-position: center;
          filter: blur(15px);
          opacity: 0.2;
          border-radius: 8px;
          z-index: 1;
          transition: background-image 0.8s ease;
        }

        .modal-image-indicators {
          position: absolute;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 5;
        }

        .modal-indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.6);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .modal-indicator:hover {
          background: rgba(255, 255, 255, 0.8);
          transform: scale(1.1);
        }

        .modal-indicator.active {
          background: var(--primary-color);
          transform: scale(1.3);
        }

        .modal-image-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
          color: white;
          border-radius: 8px;
        }

        .modal-section {
          margin-bottom: 2rem;
        }

        .modal-section h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1rem;
          border-bottom: 2px solid var(--primary-color);
          padding-bottom: 0.5rem;
        }

        .modal-section p {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1rem;
        }

        .feature-list,
        .learning-list {
          list-style: none;
          padding: 0;
        }

        .feature-list li,
        .learning-list li {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 0.75rem;
          padding-left: 1.5rem;
          position: relative;
        }

        .feature-list li::before,
        .learning-list li::before {
          content: "✓";
          color: #1D4ED8;
          font-weight: bold;
          position: absolute;
          left: 0;
          text-shadow: 0 0 8px rgba(29, 78, 216, 0.4);
        }

        .tech-details {
          display: grid;
          gap: 1.5rem;
        }

        .tech-category h4 {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          background: linear-gradient(135deg, var(--text-primary), #1D4ED8);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .tech-items {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-item {
          background: linear-gradient(145deg, 
            rgba(29, 78, 216, 0.95), 
            rgba(6, 182, 212, 0.9));
          color: white;
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 600;
          border: 1px solid rgba(255, 255, 255, 0.25);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(15px);
          box-shadow: 
            0 4px 15px rgba(29, 78, 216, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          position: relative;
          overflow: hidden;
        }

        .tech-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 255, 255, 0.25), 
            transparent);
          transition: left 0.5s;
        }

        [data-theme="light"] .tech-item {
          background: linear-gradient(145deg, 
            rgba(29, 78, 216, 0.95), 
            rgba(6, 182, 212, 0.9));
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 
            0 4px 15px rgba(29, 78, 216, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }

        .tech-item:hover {
          transform: translateY(-2px) scale(1.08);
          box-shadow: 
            0 8px 25px rgba(29, 78, 216, 0.4),
            0 4px 15px rgba(6, 182, 212, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.4);
          background: linear-gradient(145deg, #1D4ED8, #06B6D4);
        }

        .tech-item:hover::before {
          left: 100%;
        }

        .modal-links {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 2px solid rgba(29, 78, 216, 0.1);
          position: relative;
        }

        .modal-links::before {
          content: '';
          position: absolute;
          top: -2px;
          left: 25%;
          right: 25%;
          height: 2px;
          background: linear-gradient(90deg, #1D4ED8, #06B6D4);
          border-radius: 1px;
        }

        .modal-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 15px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
        }

        .modal-link.demo-link {
          background: transparent;
          color: #9333EA;
          border: 2px solid #9333EA;
          box-shadow: none;
        }

        .modal-link.demo-link:hover {
          background: rgba(147, 51, 234, 0.1);
          color: #9333EA;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(147, 51, 234, 0.2);
        }

        .modal-link.source-link {
          background: transparent;
          color: #9333EA;
          border: 2px solid #9333EA;
        }

        .modal-link.source-link:hover {
          background: rgba(147, 51, 234, 0.1);
          color: #9333EA;
          border-color: #9333EA;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(147, 51, 234, 0.2);
        }

        /* Empty State */
        .empty-state {
          text-align: center;
          padding: 4rem 2rem;
          color: var(--text-secondary);
        }

        .empty-state h3 {
          margin: 1rem 0 0.5rem;
          color: var(--text-primary);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .project-filters {
            flex-direction: column;
            align-items: center;
          }

          .filter-button {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }

          .project-links {
            flex-direction: column;
          }

          .project-link {
            text-align: center;
            justify-content: center;
          }

          .pagination {
            flex-direction: column;
            gap: 1rem;
          }

          .modal-image-gallery {
            height: 200px;
            margin-bottom: 1.5rem;
          }

          .modal-image-gallery::before {
            transform: scale(0.95);
          }

          .pagination-btn {
            width: 100%;
            max-width: 200px;
            justify-content: center;
          }

          .pagination-numbers {
            justify-content: center;
            flex-wrap: wrap;
          }

          .modal-overlay {
            padding: 1rem;
          }

          .modal-header {
            padding: 1.5rem 1.5rem 1rem;
          }

          .modal-body {
            padding: 1.5rem;
          }

          .modal-links {
            flex-direction: column;
          }

          .modal-link {
            justify-content: center;
          }

          .tech-details {
            grid-template-columns: 1fr;
          }
        }
      `})]})},zp=[{id:1,key:"gaziUniversity",status:"current"},{id:2,key:"ankaraMedipolUniversity",status:"completed"}],Sp=()=>{const{t:p}=zi(),w=O=>({institution:p(`education.educations.${O}.institution`),degree:p(`education.educations.${O}.degree`),duration:p(`education.educations.${O}.duration`),location:p(`education.educations.${O}.location`),gpa:p(`education.educations.${O}.gpa`),description:p(`education.educations.${O}.description`),achievements:p(`education.educations.${O}.achievements`)}),C=O=>{switch(O){case"current":return"var(--primary-color)";case"completed":return"#9333EA";default:return"var(--primary-color)"}},d=O=>{switch(O){case"current":return p("education.current");case"completed":return p("education.completed");default:return p("education.current")}};return c.jsxs("div",{className:"education",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header",children:[c.jsx("h2",{className:"section-title fade-in-up",children:p("education.title")}),c.jsx("p",{className:"section-description fade-in-up",children:p("education.description")})]}),c.jsx("div",{className:"education-content",children:c.jsxs("div",{className:"formal-education",children:[c.jsxs("h3",{className:"subsection-title",children:[c.jsx($0,{size:24}),p("education.academicBackground")]}),c.jsx("div",{className:"education-timeline",children:zp.map((O,U)=>{const A=w(O.key);return c.jsx("div",{className:"education-item fade-in-up",children:c.jsxs("div",{className:"education-card card",children:[c.jsxs("div",{className:"education-header",children:[c.jsxs("div",{className:"education-main",children:[c.jsx("h4",{className:"education-degree",children:A.degree}),c.jsx("h5",{className:"education-institution",children:A.institution}),c.jsxs("div",{className:"education-meta",children:[c.jsxs("span",{className:"education-duration",children:[c.jsx(wm,{size:16}),A.duration]}),c.jsxs("span",{className:"education-location",children:[c.jsx(R0,{size:16}),A.location]}),A.gpa&&c.jsxs("span",{className:"education-gpa",children:[c.jsx(Um,{size:16}),"GPA: ",A.gpa]})]})]}),c.jsx("div",{className:"status-badge",style:{backgroundColor:C(O.status)},children:d(O.status)})]}),c.jsx("p",{className:"education-description",children:A.description}),c.jsxs("div",{className:"achievements-section",children:[c.jsx("h6",{className:"detail-title",children:p("education.achievements")}),c.jsx("ul",{className:"achievements-list",children:Array.isArray(A.achievements)?A.achievements.map((G,T)=>c.jsxs("li",{className:"achievement-item",children:[c.jsx(vm,{size:16}),G]},T)):c.jsxs("li",{className:"achievement-item",children:[c.jsx(vm,{size:16}),A.achievements]})})]})]})},O.id)})})]})})]}),c.jsx("style",{jsx:!0,children:`
        .education {
          position: relative;
          overflow: hidden;
        }

        .education::before {
          content: '';
          position: absolute;
          top: 15%;
          right: -15%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(29, 78, 216, 0.06) 0%, transparent 70%);
          border-radius: 50%;
          animation: floatEducation 12s ease-in-out infinite;
        }

        .education::after {
          content: '';
          position: absolute;
          bottom: 10%;
          left: -20%;
          width: 450px;
          height: 450px;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.05) 0%, transparent 70%);
          border-radius: 50%;
          animation: floatEducation 15s ease-in-out infinite reverse;
        }

        @keyframes floatEducation {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-40px) rotate(180deg);
          }
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
          z-index: 1;
        }

        .section-title {
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #1D4ED8, #9333EA, #06B6D4);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 200%;
          animation: gradientEducation 5s ease infinite;
        }

        @keyframes gradientEducation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .section-description {
          font-size: 1.125rem;
          max-width: 600px;
          margin: 0 auto;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .education-content {
          display: grid;
          gap: 4rem;
          position: relative;
          z-index: 1;
        }

        .subsection-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.5rem;
          margin-bottom: 2rem;
          color: var(--text-primary);
          font-weight: 600;
        }

        /* Enhanced Formal Education */
        .education-timeline {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .education-item {
          position: relative;
        }

        .education-card {
          position: relative;
          background: linear-gradient(135deg, 
            rgba(29, 78, 216, 0.03) 0%, 
            rgba(147, 51, 234, 0.02) 50%, 
            rgba(6, 182, 212, 0.03) 100%);
          backdrop-filter: blur(20px);
          border: 2px solid rgba(29, 78, 216, 0.1);
          border-radius: 20px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          overflow: hidden;
        }

        .education-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, 
            rgba(29, 78, 216, 0.05) 0%, 
            transparent 50%, 
            rgba(147, 51, 234, 0.05) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
          border-radius: 18px;
        }

        .education-card:hover::before {
          opacity: 1;
        }

        .education-card:hover {
          transform: translateY(-8px);
          border-color: #1D4ED8;
          box-shadow: 
            0 20px 40px rgba(29, 78, 216, 0.2),
            0 8px 25px rgba(147, 51, 234, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        [data-theme="light"] .education-card {
          background: linear-gradient(135deg, 
            rgba(29, 78, 216, 0.02) 0%, 
            rgba(147, 51, 234, 0.01) 50%, 
            rgba(6, 182, 212, 0.02) 100%);
          border: 2px solid rgba(29, 78, 216, 0.08);
        }

        .education-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
          position: relative;
          z-index: 2;
        }

        .education-degree {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
          color: var(--text-primary);
          transition: color 0.3s ease;
        }

        .education-card:hover .education-degree {
          background: linear-gradient(135deg, #1D4ED8, #9333EA);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .education-institution {
          font-size: 1.125rem;
          color: #1D4ED8;
          margin-bottom: 0.75rem;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .education-card:hover .education-institution {
          color: #1E40AF;
        }

        .education-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin-bottom: 1rem;
          position: relative;
          z-index: 2;
        }

        .education-duration,
        .education-location,
        .education-gpa {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .education-gpa {
          color: #06B6D4;
          font-weight: 600;
        }

        .education-card:hover .education-duration,
        .education-card:hover .education-location {
          color: var(--text-primary);
        }

        .status-badge {
          padding: 0.5rem 1rem;
          border-radius: 25px;
          color: white;
          font-size: 0.75rem;
          font-weight: 600;
          white-space: nowrap;
          background: linear-gradient(135deg, #1D4ED8, #06B6D4);
          box-shadow: 0 4px 15px rgba(29, 78, 216, 0.3);
          position: relative;
          z-index: 2;
        }

        .education-description {
          margin-bottom: 1.5rem;
          color: var(--text-secondary);
          line-height: 1.7;
          position: relative;
          z-index: 2;
        }

        .education-details {
          display: grid;
          gap: 2rem;
          position: relative;
          z-index: 2;
        }

        .detail-title {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .detail-title::before {
          content: '';
          width: 3px;
          height: 20px;
          background: linear-gradient(135deg, #1D4ED8, #06B6D4);
          border-radius: 2px;
        }

        /* Enhanced Achievements */
        .achievements-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .achievement-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 0;
          color: var(--text-secondary);
          border-bottom: 1px solid rgba(29, 78, 216, 0.1);
          font-size: 0.9rem;
          transition: all 0.3s ease;
          position: relative;
        }

        .achievement-item:hover {
          color: #1D4ED8;
          transform: translateX(8px);
        }

        .achievement-item:last-child {
          border-bottom: none;
        }

        .achievement-item svg {
          color: #1D4ED8;
          flex-shrink: 0;
        }

        /* Mobile Responsive */
        @media (max-width: 1024px) {
          .section-description {
            font-size: 1rem;
            max-width: 500px;
          }

          .education-content {
            gap: 3rem;
          }

          .subsection-title {
            font-size: 1.375rem;
          }
        }

        @media (max-width: 768px) {
          .section-header {
            margin-bottom: 3rem;
          }

          .section-title {
            font-size: 2.25rem;
          }

          .section-description {
            font-size: 1rem;
            max-width: 100%;
            padding: 0 1rem;
          }

          .education-content {
            gap: 2.5rem;
          }

          .subsection-title {
            font-size: 1.25rem;
            margin-bottom: 1.5rem;
            text-align: center;
            justify-content: center;
          }

          .education-timeline {
            gap: 1.5rem;
          }

          .education-card {
            border-radius: 16px;
            padding: 1.25rem;
          }

          .education-header {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }

          .status-badge {
            align-self: flex-start;
            padding: 0.375rem 0.875rem;
            font-size: 0.7rem;
            border-radius: 20px;
          }

          .education-degree {
            font-size: 1.125rem;
            margin-bottom: 0.375rem;
          }

          .education-institution {
            font-size: 1rem;
            margin-bottom: 0.625rem;
          }

          .education-meta {
            flex-direction: column;
            gap: 0.5rem;
            margin-bottom: 1rem;
          }

          .education-duration,
          .education-location,
          .education-gpa {
            font-size: 0.875rem;
          }

          .education-description {
            font-size: 0.9rem;
            margin-bottom: 1.25rem;
            line-height: 1.6;
          }

          .detail-title {
            font-size: 0.95rem;
            margin-bottom: 0.875rem;
          }

          .achievement-item {
            padding: 0.625rem 0;
            font-size: 0.85rem;
          }

          .education::before,
          .education::after {
            width: 350px;
            height: 350px;
          }
        }

        @media (max-width: 480px) {
          .section-header {
            margin-bottom: 2.5rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .section-description {
            font-size: 0.95rem;
            padding: 0 0.5rem;
          }

          .education-content {
            gap: 2rem;
          }

          .subsection-title {
            font-size: 1.125rem;
            margin-bottom: 1.25rem;
            flex-direction: column;
            gap: 0.5rem;
          }

          .education-timeline {
            gap: 1.25rem;
          }

          .education-card {
            padding: 1rem;
            border-radius: 12px;
          }

          .education-header {
            gap: 0.875rem;
          }

          .status-badge {
            padding: 0.25rem 0.75rem;
            font-size: 0.65rem;
            align-self: flex-start;
          }

          .education-degree {
            font-size: 1rem;
            margin-bottom: 0.25rem;
          }

          .education-institution {
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
          }

          .education-meta {
            gap: 0.375rem;
            margin-bottom: 0.875rem;
          }

          .education-duration,
          .education-location,
          .education-gpa {
            font-size: 0.8rem;
          }

          .education-description {
            font-size: 0.85rem;
            margin-bottom: 1rem;
            line-height: 1.5;
          }

          .detail-title {
            font-size: 0.9rem;
            margin-bottom: 0.75rem;
          }

          .achievement-item {
            padding: 0.5rem 0;
            font-size: 0.8rem;
            gap: 0.625rem;
          }

          .achievement-item svg {
            width: 14px;
            height: 14px;
          }

          .education::before,
          .education::after {
            width: 250px;
            height: 250px;
          }
        }

        @media (max-width: 375px) {
          .section-title {
            font-size: 1.875rem;
          }

          .section-description {
            font-size: 0.9rem;
          }

          .subsection-title {
            font-size: 1rem;
          }

          .education-card {
            padding: 0.875rem;
          }

          .education-degree {
            font-size: 0.95rem;
          }

          .education-institution {
            font-size: 0.85rem;
          }

          .education-duration,
          .education-location,
          .education-gpa {
            font-size: 0.75rem;
          }

          .education-description {
            font-size: 0.8rem;
          }

          .achievement-item {
            font-size: 0.75rem;
            gap: 0.5rem;
          }

          .achievement-item svg {
            width: 12px;
            height: 12px;
          }
        }
      `})]})},jp=()=>{const{t:p}=zi(),w=[{name:"GitHub",url:"https://github.com/KBatuhanB",icon:c.jsx(Hl,{size:20}),color:"#333"},{name:"LinkedIn",url:"https://www.linkedin.com/in/batuhan-b%C3%B6l%C3%BCkba%C5%9F%C4%B1-45b2b726b/",icon:c.jsx(Mm,{size:20}),color:"#0077b5"}],C=[{label:p("navigation.personal"),href:"#personal"},{label:p("navigation.experience"),href:"#experience"},{label:p("navigation.projects"),href:"#projects"},{label:p("navigation.education"),href:"#education"}],d=A=>{const G=document.querySelector(A);G&&G.scrollIntoView({behavior:"smooth"})},O=()=>{window.location.href="mailto:your.email@example.com?subject=Portfolio Inquiry"},U=()=>{window.location.href="tel:+1234567890"};return c.jsxs("footer",{className:"footer",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"footer-content",children:[c.jsxs("div",{className:"footer-section",children:[c.jsx("h3",{className:"footer-title",children:p("footer.getInTouch")}),c.jsx("p",{className:"footer-description",children:p("footer.description")}),c.jsxs("div",{className:"contact-info",children:[c.jsxs("button",{onClick:O,className:"contact-item","aria-label":p("footer.sendEmail"),children:[c.jsx(mc,{size:18}),"batuhankelami@gmail.com"]}),c.jsxs("button",{onClick:U,className:"contact-item","aria-label":p("footer.callPhone"),children:[c.jsx(lp,{size:18}),"+90 (505) 995-0859"]}),c.jsxs("div",{className:"contact-item",children:[c.jsx(Nm,{size:18}),"Ankara, Turkey"]})]})]}),c.jsxs("div",{className:"footer-section",children:[c.jsx("h3",{className:"footer-title",children:p("footer.quickLinks")}),c.jsx("nav",{className:"quick-links",children:C.map(A=>c.jsx("button",{onClick:()=>d(A.href),className:"quick-link","aria-label":`Navigate to ${A.label} section`,children:A.label},A.label))})]}),c.jsxs("div",{className:"footer-section",children:[c.jsx("h3",{className:"footer-title",children:p("footer.connectWithMe")}),c.jsx("div",{className:"social-links",children:w.map(A=>c.jsxs("a",{href:A.url,target:"_blank",rel:"noopener noreferrer",className:"social-link",style:{"--social-color":A.color},"aria-label":`${p("footer.visitProfile")} ${A.name} ${p("footer.profile")}`,children:[A.icon,A.name]},A.name))})]})]}),c.jsxs("div",{className:"footer-bottom",children:[c.jsx("div",{className:"footer-divider"}),c.jsxs("div",{className:"footer-bottom-content",children:[c.jsx("div",{className:"copyright",children:c.jsxs("p",{children:["© ",new Date().getFullYear()," Kelami Batuhan Bölükbaşı. ",p("footer.copyright")]})}),c.jsx("div",{className:"made-with",children:c.jsxs("p",{children:[p("footer.madeWith")," ",c.jsx(W0,{size:16,className:"heart-icon"})," ",p("footer.using")]})})]})]})]}),c.jsx("style",{jsx:!0,children:`
        .footer {
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #1e293b 100%);
          color: white;
          margin-top: 4rem;
          position: relative;
          overflow: hidden;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: -50%;
          left: 10%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(29, 78, 216, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          animation: floatFooter 18s ease-in-out infinite;
        }

        .footer::after {
          content: '';
          position: absolute;
          bottom: -30%;
          right: 15%;
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.06) 0%, transparent 70%);
          border-radius: 50%;
          animation: floatFooter 22s ease-in-out infinite reverse;
        }

        @keyframes floatFooter {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(90deg);
          }
        }

        [data-theme="light"] .footer {
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #1e293b 100%);
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 3rem;
          padding: 4rem 0 2rem;
          position: relative;
          z-index: 1;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
        }

        .footer-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #1D4ED8, #9333EA, #06B6D4);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 200%;
          animation: gradientFooter 4s ease infinite;
        }

        @keyframes gradientFooter {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .footer-description {
          color: #94a3b8;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        /* Enhanced Contact Information */
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #94a3b8;
          text-decoration: none;
          transition: all 0.3s ease;
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          font-size: 1rem;
          text-align: left;
          padding: 0.5rem 0;
          border-radius: 8px;
          position: relative;
          overflow: hidden;
        }

        .contact-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(29, 78, 216, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .contact-item:hover::before {
          left: 100%;
        }

        .contact-item:hover {
          color: #1D4ED8;
          transform: translateX(8px);
        }

        .contact-item svg {
          color: #1D4ED8;
          transition: transform 0.3s ease;
        }

        .contact-item:hover svg {
          transform: scale(1.2);
        }

        /* Enhanced Quick Links */
        .quick-links {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .quick-link {
          background: none;
          border: none;
          color: #94a3b8;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
          font-family: inherit;
          font-size: 1rem;
          text-align: left;
          padding: 0.5rem 0;
          border-radius: 8px;
          position: relative;
          overflow: hidden;
        }

        .quick-link::before {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #1D4ED8, #06B6D4);
          transition: width 0.3s ease;
        }

        .quick-link:hover {
          color: #1D4ED8;
          transform: translateX(8px);
        }

        .quick-link:hover::before {
          width: 100%;
        }

        /* Enhanced Social Links */
        .social-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #94a3b8;
          text-decoration: none;
          transition: all 0.3s ease;
          padding: 0.5rem 0;
          border-radius: 8px;
          position: relative;
          overflow: hidden;
        }

        .social-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .social-link:hover::before {
          left: 100%;
        }

        .social-link:hover {
          color: var(--social-color, #9333EA);
          transform: translateX(8px);
        }

        .social-link svg {
          transition: all 0.3s ease;
        }

        .social-link:hover svg {
          transform: scale(1.2) rotate(360deg);
          color: var(--social-color, #9333EA);
        }

        /* Enhanced Footer Bottom */
        .footer-bottom {
          padding-bottom: 2rem;
          position: relative;
          z-index: 1;
        }

        .footer-divider {
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(29, 78, 216, 0.5), rgba(147, 51, 234, 0.5), transparent);
          margin: 2rem 0;
          border-radius: 1px;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .copyright p,
        .made-with p {
          color: #94a3b8;
          font-size: 0.875rem;
          margin: 0;
          transition: color 0.3s ease;
        }

        .copyright:hover p,
        .made-with:hover p {
          color: #cbd5e1;
        }

        .made-with {
          display: flex;
          align-items: center;
        }

        .made-with p {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .heart-icon {
          color: #ef4444;
          animation: heartbeat 1.5s ease-in-out infinite;
          filter: drop-shadow(0 0 5px rgba(239, 68, 68, 0.5));
        }

        @keyframes heartbeat {
          0%, 50%, 100% {
            transform: scale(1);
          }
          25%, 75% {
            transform: scale(1.2);
          }
        }

        /* Responsive Design */
        @media (max-width: 968px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
            padding: 2.5rem 0 1.5rem;
          }

          .footer-section:first-child {
            grid-column: 1 / -1;
            text-align: center;
            max-width: 500px;
            margin: 0 auto;
          }

          .footer-title {
            font-size: 1.125rem;
          }

          .contact-info {
            align-items: center;
          }
        }

        @media (max-width: 768px) {
          .footer {
            margin-top: 2rem;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 2rem 0 1.25rem;
            text-align: center;
          }

          .footer-section {
            max-width: 320px;
            margin: 0 auto;
          }

          .footer-section:first-child {
            grid-column: 1;
            max-width: 350px;
          }

          .footer-title {
            font-size: 1rem;
            margin-bottom: 0.875rem;
          }

          .footer-description {
            font-size: 0.875rem;
            line-height: 1.5;
            margin-bottom: 1.25rem;
          }

          .contact-info {
            gap: 0.625rem;
            align-items: center;
          }

          .contact-item {
            padding: 0.5rem 0.75rem;
            border-radius: 8px;
            background: linear-gradient(135deg, rgba(29, 78, 216, 0.06), rgba(6, 182, 212, 0.02));
            border: 1px solid rgba(29, 78, 216, 0.15);
            justify-content: center;
            min-height: 40px;
            font-size: 0.875rem;
          }

          .footer-bottom-content {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .copyright p,
          .made-with p {
            font-size: 0.8rem;
            line-height: 1.4;
          }

          .social-links {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 0.625rem;
            justify-content: center;
            max-width: 280px;
            margin: 0 auto;
          }

          .social-link {
            min-height: 40px;
            padding: 0.5rem 0.75rem;
            border-radius: 8px;
            background: linear-gradient(135deg, rgba(147, 51, 234, 0.06), rgba(29, 78, 216, 0.02));
            border: 1px solid rgba(147, 51, 234, 0.15);
            flex: 1;
            max-width: 120px;
            font-size: 0.875rem;
          }

          .quick-links {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 0.5rem;
            justify-content: center;
            max-width: 300px;
            margin: 0 auto;
          }

          .quick-link {
            padding: 0.5rem 0.75rem;
            border-radius: 6px;
            background: linear-gradient(135deg, rgba(29, 78, 216, 0.05), rgba(6, 182, 212, 0.02));
            border: 1px solid rgba(29, 78, 216, 0.12);
            min-height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.8rem;
          }

          .footer::before,
          .footer::after {
            width: 250px;
            height: 250px;
          }
        }

        @media (max-width: 480px) {
          .footer-content {
            padding: 1.5rem 0 1rem;
            gap: 1.25rem;
          }

          .footer-section {
            max-width: 100%;
          }

          .footer-section:first-child {
            max-width: 100%;
          }

          .footer-title {
            font-size: 0.95rem;
            margin-bottom: 0.75rem;
          }

          .footer-description {
            font-size: 0.8rem;
            margin-bottom: 1rem;
          }

          .contact-info {
            gap: 0.5rem;
          }

          .contact-item {
            padding: 0.45rem 0.625rem;
            font-size: 0.8rem;
            min-height: 36px;
          }

          .social-links {
            flex-direction: column;
            gap: 0.5rem;
            max-width: 200px;
          }

          .social-link {
            width: 100%;
            max-width: none;
            min-height: 36px;
            font-size: 0.8rem;
            padding: 0.45rem 0.625rem;
          }

          .quick-links {
            flex-direction: column;
            gap: 0.375rem;
            max-width: 180px;
          }

          .quick-link {
            width: 100%;
            min-height: 32px;
            font-size: 0.75rem;
            padding: 0.375rem 0.5rem;
          }

          .footer-bottom-content {
            gap: 0.75rem;
          }

          .copyright p,
          .made-with p {
            font-size: 0.75rem;
          }

          .footer::before,
          .footer::after {
            width: 180px;
            height: 180px;
          }
        }

        @media (max-width: 375px) {
          .footer-content {
            padding: 1.25rem 0 0.875rem;
            gap: 1rem;
          }

          .footer-title {
            font-size: 0.9rem;
            margin-bottom: 0.625rem;
          }

          .footer-description {
            font-size: 0.75rem;
            margin-bottom: 0.875rem;
          }

          .contact-item {
            padding: 0.375rem 0.5rem;
            font-size: 0.75rem;
            min-height: 32px;
          }

          .social-link {
            min-height: 32px;
            font-size: 0.75rem;
            padding: 0.375rem 0.5rem;
          }

          .quick-link {
            min-height: 28px;
            font-size: 0.7rem;
            padding: 0.25rem 0.375rem;
          }

          .copyright p,
          .made-with p {
            font-size: 0.7rem;
          }

          .footer::before,
          .footer::after {
            width: 150px;
            height: 150px;
          }
        }
      `})]})};function Ep(){return c.jsx(m0,{children:c.jsx(w0,{children:c.jsxs("div",{className:"App",children:[c.jsx(fp,{}),c.jsxs("main",{children:[c.jsx("section",{id:"personal",className:"section",children:c.jsx(pp,{})}),c.jsx("section",{id:"experience",className:"section",children:c.jsx(bp,{})}),c.jsx("section",{id:"projects",className:"section",children:c.jsx(kp,{})}),c.jsx("section",{id:"education",className:"section",children:c.jsx(Sp,{})})]}),c.jsx(jp,{})]})})})}d0.createRoot(document.getElementById("root")).render(c.jsx(ne.StrictMode,{children:c.jsx(Ep,{})}));
