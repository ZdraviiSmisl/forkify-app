function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},o={},i=t.parcelRequire7e89;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire7e89=i),i.register("27Lyk",(function(t,n){var r,o;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>o),(e=>o=e));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("27Lyk").register(JSON.parse('{"f9fpV":"index.409c259d.js","hfd23":"icons.c14567a0.svg","eyyUD":"icons.c14567a0.svg"}'));var a={},s=function(e){return e&&e.Math==Math&&e};a=s("object"==typeof globalThis&&globalThis)||s("object"==typeof window&&window)||s("object"==typeof self&&self)||s("object"==typeof t&&t)||function(){return this}()||Function("return this")();var c,u;c=!(u=function(e){try{return!!e()}catch(e){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var l,f,d,p={};d=!u((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}));var h=Function.prototype,g=h.call,v=d&&h.bind.bind(g,g);p=d?v:function(e){return function(){return g.apply(e,arguments)}};var m,y={},b="object"==typeof document&&document.all,_=(m={all:b,IS_HTMLDDA:void 0===b&&void 0!==b}).all;y=m.IS_HTMLDDA?function(e){return"function"==typeof e||e===_}:function(e){return"function"==typeof e};var w,k,E,S={};E=function(e){return null==e};var O=TypeError;k=function(e){if(E(e))throw O("Can't call method on "+e);return e};var j=Object;w=function(e){return j(k(e))};var L=p({}.hasOwnProperty);S=Object.hasOwn||function(e,t){return L(w(e),t)};var F,M=Function.prototype,T=c&&Object.getOwnPropertyDescriptor,$=S(M,"name"),x={EXISTS:$,PROPER:$&&"something"===function(){}.name,CONFIGURABLE:$&&(!c||c&&T(M,"name").configurable)}.CONFIGURABLE,P={},I={},H=Object.defineProperty;F=function(e,t){try{H(a,e,{value:t,configurable:!0,writable:!0})}catch(n){a[e]=t}return t};var A="__core-js_shared__",q=a[A]||F(A,{});I=q;var C=p(Function.toString);y(I.inspectSource)||(I.inspectSource=function(e){return C(e)}),P=I.inspectSource;var N,R,D=a.WeakMap;R=y(D)&&/native code/.test(String(D));var U={},z=m.all;U=m.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:y(e)||e===z}:function(e){return"object"==typeof e?null!==e:y(e)};var W,B,G,J={},Y=a.document,V=U(Y)&&U(Y.createElement);G=function(e){return V?Y.createElement(e):{}},B=!c&&!u((function(){return 7!=Object.defineProperty(G("div"),"a",{get:function(){return 7}}).a}));var Q;Q=c&&u((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var K,X=String,Z=TypeError;K=function(e){if(U(e))return e;throw Z(X(e)+" is not an object")};var ee,te,ne={},re=Function.prototype.call;ne=d?re.bind(re):function(){return re.apply(re,arguments)};var oe,ie={},ae=function(e){return y(e)?e:void 0};oe=function(e,t){return arguments.length<2?ae(a[e]):a[e]&&a[e][t]};var se={};se=p({}.isPrototypeOf);var ce,ue,le,fe={};fe="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var de,pe,he=a.process,ge=a.Deno,ve=he&&he.versions||ge&&ge.version,me=ve&&ve.v8;me&&(pe=(de=me.split("."))[0]>0&&de[0]<4?1:+(de[0]+de[1])),!pe&&fe&&(!(de=fe.match(/Edge\/(\d+)/))||de[1]>=74)&&(de=fe.match(/Chrome\/(\d+)/))&&(pe=+de[1]),le=pe,ce=(ue=!!Object.getOwnPropertySymbols&&!u((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&le&&le<41})))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ye=Object;ie=ce?function(e){return"symbol"==typeof e}:function(e){var t=oe("Symbol");return y(t)&&se(t.prototype,ye(e))};var be,_e,we,ke=String;we=function(e){try{return ke(e)}catch(e){return"Object"}};var Ee=TypeError;_e=function(e){if(y(e))return e;throw Ee(we(e)+" is not a function")},be=function(e,t){var n=e[t];return E(n)?void 0:_e(n)};var Se,Oe=TypeError;Se=function(e,t){var n,r;if("string"===t&&y(n=e.toString)&&!U(r=ne(n,e)))return r;if(y(n=e.valueOf)&&!U(r=ne(n,e)))return r;if("string"!==t&&y(n=e.toString)&&!U(r=ne(n,e)))return r;throw Oe("Can't convert object to primitive value")};var je;(je=function(e,t){return I[e]||(I[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.28.0",mode:"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.28.0/LICENSE",source:"https://github.com/zloirock/core-js"});var Le,Fe=0,Me=Math.random(),Te=p(1..toString);Le=function(e){return"Symbol("+(void 0===e?"":e)+")_"+Te(++Fe+Me,36)};var $e=a.Symbol,xe=je("wks"),Pe=ce?$e.for||$e:$e&&$e.withoutSetter||Le,Ie=TypeError,He=function(e){return S(xe,e)||(xe[e]=ue&&S($e,e)?$e[e]:Pe("Symbol."+e)),xe[e]}("toPrimitive");te=function(e,t){if(!U(e)||ie(e))return e;var n,r=be(e,He);if(r){if(void 0===t&&(t="default"),n=ne(r,e,t),!U(n)||ie(n))return n;throw Ie("Can't convert object to primitive value")}return void 0===t&&(t="number"),Se(e,t)},ee=function(e){var t=te(e,"string");return ie(t)?t:t+""};var Ae=TypeError,qe=Object.defineProperty,Ce=Object.getOwnPropertyDescriptor,Ne="enumerable",Re="configurable",De="writable";W=c?Q?function(e,t,n){if(K(e),t=ee(t),K(n),"function"==typeof e&&"prototype"===t&&"value"in n&&De in n&&!n[De]){var r=Ce(e,t);r&&r[De]&&(e[t]=n.value,n={configurable:Re in n?n[Re]:r[Re],enumerable:Ne in n?n[Ne]:r[Ne],writable:!1})}return qe(e,t,n)}:qe:function(e,t,n){if(K(e),t=ee(t),K(n),B)try{return qe(e,t,n)}catch(e){}if("get"in n||"set"in n)throw Ae("Accessors not supported");return"value"in n&&(e[t]=n.value),e};var Ue;Ue=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},J=c?function(e,t,n){return W(e,t,Ue(1,n))}:function(e,t,n){return e[t]=n,e};var ze,We=je("keys");ze=function(e){return We[e]||(We[e]=Le(e))};var Be={};Be={};var Ge,Je,Ye,Ve="Object already initialized",Qe=a.TypeError,Ke=a.WeakMap;if(R||I.state){var Xe=I.state||(I.state=new Ke);Xe.get=Xe.get,Xe.has=Xe.has,Xe.set=Xe.set,Ge=function(e,t){if(Xe.has(e))throw Qe(Ve);return t.facade=e,Xe.set(e,t),t},Je=function(e){return Xe.get(e)||{}},Ye=function(e){return Xe.has(e)}}else{var Ze=ze("state");Be[Ze]=!0,Ge=function(e,t){if(S(e,Ze))throw Qe(Ve);return t.facade=e,J(e,Ze,t),t},Je=function(e){return S(e,Ze)?e[Ze]:{}},Ye=function(e){return S(e,Ze)}}var et=(N={set:Ge,get:Je,has:Ye,enforce:function(e){return Ye(e)?Je(e):Ge(e,{})},getterFor:function(e){return function(t){var n;if(!U(t)||(n=Je(t)).type!==e)throw Qe("Incompatible receiver, "+e+" required");return n}}}).enforce,tt=N.get,nt=String,rt=Object.defineProperty,ot=p("".slice),it=p("".replace),at=p([].join),st=c&&!u((function(){return 8!==rt((function(){}),"length",{value:8}).length})),ct=String(String).split("String"),ut=f=function(e,t,n){"Symbol("===ot(nt(t),0,7)&&(t="["+it(nt(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!S(e,"name")||x&&e.name!==t)&&(c?rt(e,"name",{value:t,configurable:!0}):e.name=t),st&&n&&S(n,"arity")&&e.length!==n.arity&&rt(e,"length",{value:n.arity});try{n&&S(n,"constructor")&&n.constructor?c&&rt(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var r=et(e);return S(r,"source")||(r.source=at(ct,"string"==typeof t?t:"")),e};Function.prototype.toString=ut((function(){return y(this)&&tt(this).source||P(this)}),"toString"),l=function(e,t,n){return n.get&&f(n.get,t,{getter:!0}),n.set&&f(n.set,t,{setter:!0}),W(e,t,n)};var lt;lt=function(){var e=K(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t};var ft=a.RegExp,dt=ft.prototype;c&&u((function(){var e=!0;try{ft(".","d")}catch(t){e=!1}var t={},n="",r=e?"dgimsy":"gimsy",o=function(e,r){Object.defineProperty(t,e,{get:function(){return n+=r,!0}})},i={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var a in e&&(i.hasIndices="d"),i)o(a,i[a]);return Object.getOwnPropertyDescriptor(dt,"flags").get.call(t)!==r||n!==r}))&&l(dt,"flags",{configurable:!0,get:lt});var pt,ht,gt,vt={}.propertyIsEnumerable,mt=Object.getOwnPropertyDescriptor,yt=mt&&!vt.call({1:2},1);gt=yt?function(e){var t=mt(this,e);return!!t&&t.enumerable}:vt;var bt,_t,wt={},kt=p({}.toString),Et=p("".slice);_t=function(e){return Et(kt(e),8,-1)};var St=Object,Ot=p("".split);wt=u((function(){return!St("z").propertyIsEnumerable(0)}))?function(e){return"String"==_t(e)?Ot(e,""):St(e)}:St,bt=function(e){return wt(k(e))};var jt,Lt=Object.getOwnPropertyDescriptor,Ft=ht=c?Lt:function(e,t){if(e=bt(e),t=ee(t),B)try{return Lt(e,t)}catch(e){}if(S(e,t))return Ue(!ne(gt,e,t),e[t])};jt=function(e,t,n,r){r||(r={});var o=r.enumerable,i=void 0!==r.name?r.name:t;if(y(n)&&f(n,i,r),r.global)o?e[t]=n:F(t,n);else{try{r.unsafe?e[t]&&(o=!0):delete e[t]}catch(e){}o?e[t]=n:W(e,t,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return e};var Mt,Tt,$t,xt,Pt,It={},Ht={},At=Math.ceil,qt=Math.floor;Ht=Math.trunc||function(e){var t=+e;return(t>0?qt:At)(t)},Pt=function(e){var t=+e;return t!=t||0===t?0:Ht(t)};var Ct=Math.max,Nt=Math.min;xt=function(e,t){var n=Pt(e);return n<0?Ct(n+t,0):Nt(n,t)};var Rt,Dt,Ut=Math.min;Dt=function(e){return e>0?Ut(Pt(e),9007199254740991):0},Rt=function(e){return Dt(e.length)};var zt=function(e){return function(t,n,r){var o,i=bt(t),a=Rt(i),s=xt(r,a);if(e&&n!=n){for(;a>s;)if((o=i[s++])!=o)return!0}else for(;a>s;s++)if((e||s in i)&&i[s]===n)return e||s||0;return!e&&-1}},Wt={includes:zt(!0),indexOf:zt(!1)}.indexOf,Bt=p([].push);$t=function(e,t){var n,r=bt(e),o=0,i=[];for(n in r)!S(Be,n)&&S(r,n)&&Bt(i,n);for(;t.length>o;)S(r,n=t[o++])&&(~Wt(i,n)||Bt(i,n));return i};var Gt,Jt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");Tt=Object.getOwnPropertyNames||function(e){return $t(e,Jt)},Gt=Object.getOwnPropertySymbols;var Yt=p([].concat);It=oe("Reflect","ownKeys")||function(e){var t=Tt(K(e));return Gt?Yt(t,Gt(e)):t},Mt=function(e,t,n){for(var r=It(t),o=W,i=ht,a=0;a<r.length;a++){var s=r[a];S(e,s)||n&&S(n,s)||o(e,s,i(t,s))}};var Vt={},Qt=/#|\.prototype\./,Kt=function(e,t){var n=Zt[Xt(e)];return n==tn||n!=en&&(y(t)?u(t):!!t)},Xt=Kt.normalize=function(e){return String(e).replace(Qt,".").toLowerCase()},Zt=Kt.data={},en=Kt.NATIVE="N",tn=Kt.POLYFILL="P";Vt=Kt,pt=function(e,t){var n,r,o,i,s,c=e.target,u=e.global,l=e.stat;if(n=u?a:l?a[c]||F(c,{}):(a[c]||{}).prototype)for(r in t){if(i=t[r],o=e.dontCallGetSet?(s=Ft(n,r))&&s.value:n[r],!Vt(u?r:c+(l?".":"#")+r,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;Mt(i,o)}(e.sham||o&&o.sham)&&J(i,"sham",!0),jt(n,r,i,e)}};var nn,rn={},on=Function.prototype,an=on.apply,sn=on.call;rn="object"==typeof Reflect&&Reflect.apply||(d?sn.bind(an):function(){return sn.apply(an,arguments)});var cn,un,ln=(un=function(e){if("Function"===_t(e))return p(e)})(un.bind);cn=function(e,t){return _e(e),void 0===t?e:d?ln(e,t):function(){return e.apply(t,arguments)}};var fn={};fn=oe("document","documentElement");var dn={};dn=p([].slice);var pn={},hn=TypeError;pn=function(e,t){if(e<t)throw hn("Not enough arguments");return e};var gn;gn=/(?:ipad|iphone|ipod).*applewebkit/i.test(fe);var vn,mn,yn,bn,_n=mn={};function wn(){throw new Error("setTimeout has not been defined")}function kn(){throw new Error("clearTimeout has not been defined")}function En(e){if(yn===setTimeout)return setTimeout(e,0);if((yn===wn||!yn)&&setTimeout)return yn=setTimeout,setTimeout(e,0);try{return yn(e,0)}catch(t){try{return yn.call(null,e,0)}catch(t){return yn.call(this,e,0)}}}!function(){try{yn="function"==typeof setTimeout?setTimeout:wn}catch(e){yn=wn}try{bn="function"==typeof clearTimeout?clearTimeout:kn}catch(e){bn=kn}}();var Sn,On=[],jn=!1,Ln=-1;function Fn(){jn&&Sn&&(jn=!1,Sn.length?On=Sn.concat(On):Ln=-1,On.length&&Mn())}function Mn(){if(!jn){var e=En(Fn);jn=!0;for(var t=On.length;t;){for(Sn=On,On=[];++Ln<t;)Sn&&Sn[Ln].run();Ln=-1,t=On.length}Sn=null,jn=!1,function(e){if(bn===clearTimeout)return clearTimeout(e);if((bn===kn||!bn)&&clearTimeout)return bn=clearTimeout,clearTimeout(e);try{return bn(e)}catch(t){try{return bn.call(null,e)}catch(t){return bn.call(this,e)}}}(e)}}function Tn(e,t){this.fun=e,this.array=t}function $n(){}_n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];On.push(new Tn(e,t)),1!==On.length||jn||En(Mn)},Tn.prototype.run=function(){this.fun.apply(null,this.array)},_n.title="browser",_n.browser=!0,_n.env={},_n.argv=[],_n.version="",_n.versions={},_n.on=$n,_n.addListener=$n,_n.once=$n,_n.off=$n,_n.removeListener=$n,_n.removeAllListeners=$n,_n.emit=$n,_n.prependListener=$n,_n.prependOnceListener=$n,_n.listeners=function(e){return[]},_n.binding=function(e){throw new Error("process.binding is not supported")},_n.cwd=function(){return"/"},_n.chdir=function(e){throw new Error("process.chdir is not supported")},_n.umask=function(){return 0},vn=void 0!==mn&&"process"==_t(mn);var xn,Pn,In,Hn,An=a.setImmediate,qn=a.clearImmediate,Cn=a.process,Nn=a.Dispatch,Rn=a.Function,Dn=a.MessageChannel,Un=a.String,zn=0,Wn={},Bn="onreadystatechange";u((function(){xn=a.location}));var Gn=function(e){if(S(Wn,e)){var t=Wn[e];delete Wn[e],t()}},Jn=function(e){return function(){Gn(e)}},Yn=function(e){Gn(e.data)},Vn=function(e){a.postMessage(Un(e),xn.protocol+"//"+xn.host)};An&&qn||(An=function(e){pn(arguments.length,1);var t=y(e)?e:Rn(e),n=dn(arguments,1);return Wn[++zn]=function(){rn(t,void 0,n)},Pn(zn),zn},qn=function(e){delete Wn[e]},vn?Pn=function(e){Cn.nextTick(Jn(e))}:Nn&&Nn.now?Pn=function(e){Nn.now(Jn(e))}:Dn&&!gn?(Hn=(In=new Dn).port2,In.port1.onmessage=Yn,Pn=cn(Hn.postMessage,Hn)):a.addEventListener&&y(a.postMessage)&&!a.importScripts&&xn&&"file:"!==xn.protocol&&!u(Vn)?(Pn=Vn,a.addEventListener("message",Yn,!1)):Pn=Bn in G("script")?function(e){fn.appendChild(G("script"))[Bn]=function(){fn.removeChild(this),Gn(e)}}:function(e){setTimeout(Jn(e),0)});var Qn=(nn={set:An,clear:qn}).clear;pt({global:!0,bind:!0,enumerable:!0,forced:a.clearImmediate!==Qn},{clearImmediate:Qn});var Kn,Xn,Zn=nn.set;Xn="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var er,tr=a.Function,nr=/MSIE .\./.test(fe)||Xn&&((er=a.Bun.version.split(".")).length<3||0==er[0]&&(er[1]<3||3==er[1]&&0==er[2]));Kn=function(e,t){var n=t?2:1;return nr?function(r,o){var i=pn(arguments.length,1)>n,a=y(r)?r:tr(r),s=i?dn(arguments,n):[],c=i?function(){rn(a,this,s)}:a;return t?e(c,o):e(c)}:e};var rr=a.setImmediate?Kn(Zn,!1):Zn;pt({global:!0,bind:!0,enumerable:!0,forced:a.setImmediate!==rr},{setImmediate:rr});var or=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var i=t&&t.prototype instanceof m?t:m,a=Object.create(i.prototype),s=new T(r||[]);return o(a,"_invoke",{value:j(e,n,s)}),a}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d="suspendedStart",p="suspendedYield",h="executing",g="completed",v={};function m(){}function y(){}function b(){}var _={};u(_,a,(function(){return this}));var w=Object.getPrototypeOf,k=w&&w(w($([])));k&&k!==n&&r.call(k,a)&&(_=k);var E=b.prototype=m.prototype=Object.create(_);function S(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function n(o,i,a,s){var c=f(e[o],e,i);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&r.call(l,"__await")?t.resolve(l.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(l).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}var i;o(this,"_invoke",{value:function(e,r){function o(){return new t((function(t,o){n(e,r,t,o)}))}return i=i?i.then(o,o):o()}})}function j(e,t,n){var r=d;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===g){if("throw"===o)throw i;return x()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=L(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=f(e,t,n);if("normal"===c.type){if(r=n.done?g:p,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=g,n.method="throw",n.arg=c.arg)}}}function L(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,L(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var i=f(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function F(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function M(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(F,this),this.reset(!0)}function $(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:x}}function x(){return{value:t,done:!0}}return y.prototype=b,o(E,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:y,configurable:!0}),y.displayName=u(b,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,u(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},S(O.prototype),u(O.prototype,s,(function(){return this})),e.AsyncIterator=O,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new O(l(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},S(E),u(E,c,"Generator"),u(E,a,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=$,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(M),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return s.type="throw",s.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),M(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;M(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:$(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}({});try{regeneratorRuntime=or}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=or:Function("r","regeneratorRuntime = r")(or)}const ir="https://forkify-api.herokuapp.com/api/v2/recipes/",ar="aa15cafc-4417-4671-be1e-e3ea77187007",sr=function(e){return{...Object.fromEntries(Object.entries(e).map((([e,t])=>{return[(n=e,n.split("_").map(((e,t)=>0===t?e:e[0].toUpperCase()+e.slice(1))).join("")),t];var n}))),...e.key&&{key:e.key}}},cr=async function(e,t){try{const r=t?fetch(e,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)}):fetch(e),o=await Promise.race([r,(n=10,new Promise((function(e,t){setTimeout((function(){t(new Error(`Request took too long! Timeout after ${n} second`))}),1e3*n)})))]),i=await o.json();if(console.log(i),!o.ok)throw new Error(`${i.message} ${o.status}`);return i}catch(e){throw e}var n},ur={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},lr=function(e=ur.search.page){ur.search.page=e;const t=(e-1)*ur.search.resultsPerPage,n=e*ur.search.resultsPerPage;return ur.search.results.slice(t,n)},fr=function(){localStorage.setItem("bookmarks",JSON.stringify(ur.bookmarks))},dr=function(e){ur.bookmarks.push(e),console.log(e),console.log(ur.bookmarks),e.id===ur.recipe.id&&(ur.recipe.bookmarked=!0),fr()};!function(){const e=localStorage.getItem("bookmarks");e&&(ur.bookmarks=JSON.parse(e))}(),console.log(ur.bookmarks);var pr,hr,gr,vr;pr=new URL(i("27Lyk").resolve("hfd23"),import.meta.url).toString();class mr{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const n=this._generateMarkup();if(!t)return n;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}update(e){this._data=e;const t=this._generateMarkup(),n=document.createRange().createContextualFragment(t),r=Array.from(n.querySelectorAll("*")),o=Array.from(this._parentElement.querySelectorAll("*"));r.forEach(((e,t)=>{const n=o[t];e.isEqualNode(n)||""===e.firstChild?.nodeValue.trim()||(n.textContent=e.textContent),e.isEqualNode(n)||Array.from(e.attributes).forEach((e=>n.setAttribute(e.name,e.value)))}))}renderSpiner(){const e=`\n      <div class="spinner">\n        <svg>\n          <use href="${n(pr)}#icon-loader"></use>\n        </svg>\n      </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){const t=`\n      <div class="error">\n        <div>\n          <svg>\n            <use href="${n(pr)}#icon-alert-triangle"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div> \n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){const t=`\n    <div class="message">\n      <div>\n        <svg>\n          <use href="${n(pr)}#icon-smile"></use>\n        </svg>\n        </div>\n      <p>${e}</p>\n    </div> \n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentElement.innerHTML=""}}Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t)if(num=e,"number"==typeof num)this.numerator=num,this.denominator=1;else if("string"==typeof num){var n,r,o=num.split(" ");if(o[0]&&(n=o[0]),o[1]&&(r=o[1]),n%1==0&&r&&r.match("/"))return new Fraction(n).add(new Fraction(r));if(!n||r)return;if("string"==typeof n&&n.match("/")){var i=n.split("/");this.numerator=i[0],this.denominator=i[1]}else{if("string"==typeof n&&n.match("."))return new Fraction(parseFloat(n));this.numerator=parseInt(n),this.denominator=1}}this.normalize()},Fraction.prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,n=this.denominator,r=[];return 0!=e&&r.push(e),0!=t&&r.push((0===e?t:Math.abs(t))+"/"+n),r.length>0?r.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize();e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(gr=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},vr=function(e,t){if(t){var n=Math.pow(10,t);return Math.round(e*n)/n}return Math.round(e)},function(){if(gr(this.denominator)){var e=vr(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}gr(this.numerator)&&(e=vr(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length),this.numerator=Math.round(this.numerator*t),this.denominator*=t);var n=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=n,this.denominator/=n,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var n=[],r=Fraction.primeFactors(e),o=Fraction.primeFactors(t);return r.forEach((function(e){var t=o.indexOf(e);t>=0&&(n.push(e),o.splice(t,1))})),0===n.length?1:function(){var e,t=n[0];for(e=1;e<n.length;e++)t*=n[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),n=[],r=2;r*r<=t;)t%r==0?(n.push(r),t/=r):r++;return 1!=t&&n.push(t),n},hr=Fraction;var yr=new class extends mr{_parentElement=document.querySelector(".recipe");_errorMessage="This recipe not found please chose another one ore check you input";_message="";addHandlerRender(e){["hashchange","load"].forEach((t=>window.addEventListener(t,e)))}addHandlerUpdateRecipe(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--update-servings");if(!n)return;const{update:r}=n.dataset;+r>0&&e(+r)}))}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",(function(t){t.target.closest(".btn--bookmark")&&e()}))}_generateMarkup(){return console.log(this._data),`\n    <figure class="recipe__fig">\n    <img src="${this._data.imageUrl}" alt="${this._data.title}" class="recipe__img" />\n          <h1 class="recipe__title">\n          <span>${this._data.title}</span>\n          </h1>\n      </figure>\n\n      <div class="recipe__details">\n      <div class="recipe__info">\n          <svg class="recipe__info-icon">\n          <use href="${n(pr)}#icon-clock"></use>\n          </svg>\n          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n          <span class="recipe__info-text">minutes</span>\n      </div>\n      <div class="recipe__info">\n          <svg class="recipe__info-icon">\n          <use href="${n(pr)}#icon-users"></use>\n          </svg>\n          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n          <span class="recipe__info-text">servings</span>\n\n          <div class="recipe__info-buttons">\n          <button class="btn--tiny btn--update-servings" data-update="${this._data.servings-1}">\n              <svg>\n              <use href="${n(pr)}#icon-minus-circle"></use>\n              </svg>\n          </button>\n          <button class="btn--tiny btn--update-servings" data-update="${this._data.servings+1}">\n              <svg>\n              <use href="${n(pr)}#icon-plus-circle"></use>\n              </svg>\n          </button>\n          </div>\n      </div>\n\n      <div class="recipe__user-generated ${this._data.key?"":"hidden"}">\n      <svg>\n        <use href="${n(pr)}svg#icon-user"></use>\n      </svg>\n    </div>\n      <button class="btn--round btn--bookmark">\n          <svg class="">\n          <use href="${n(pr)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>\n          </svg>\n      </button>\n      </div>\n\n      <div class="recipe__ingredients">\n      <h2 class="heading--2">Recipe ingredients</h2>\n      <ul class="recipe__ingredient-list">\n          ${this._data.ingredients.map(this._generateMarcupIngridient).join("")}\n      </ul>\n      </div>\n\n      <div class="recipe__directions">\n      <h2 class="heading--2">How to cook it</h2>\n      <p class="recipe__directions-text">\n          This recipe was carefully designed and tested by\n          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n          directions at their website.\n      </p>\n      <a\n          class="btn--small recipe__btn"\n          href="${this._data.sourceUrl}"\n          target="_blank"\n      >\n          <span>Directions</span>\n          <svg class="search__icon">\n          <use href="${n(pr)}#icon-arrow-right"></use>\n          </svg>\n      </a>\n      </div>\n  `}_generateMarcupIngridient(e){return`\n  <li class="recipe__ingredient">\n  <svg class="recipe__icon">\n      <use href="${n(pr)}#icon-check"></use>\n  </svg>\n  <div class="recipe__quantity">${e.quantity?new hr(e.quantity).toString():""}</div>\n  <div class="recipe__description">\n      <span class="recipe__unit">${e.unit}</span>\n      ${e.description}\n  </div>\n  </li>\n  `}};var br,_r=new class extends mr{_parentElement="";_generateMarkup(){const e=window.location.hash.slice(1);return`\n      <li class="preview">\n        <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">\n          <figure class="preview__fig">\n            <img src="${this._data.imageUrl}" alt="Test" />\n          </figure>\n          <div class="preview__data">\n            <h4 class="preview__title">${this._data.title}</h4>\n            <p class="preview__publisher">${this._data.publisher}</p>\n            <div class="preview__user-generated ${this._data.key?"":"hidden"}">\n              <svg>\n              <use href="${n(pr)}svg#icon-user"></use>\n              </svg>\n            </div>\n          </div>\n        </a>\n      </li>\n      `}};br=new URL(i("27Lyk").resolve("eyyUD"),import.meta.url).toString();var wr=new class extends mr{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="You have not any bookmarks yet. Please add your favorite recepie ;)";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return console.log(this._data),this._data.map((e=>_r.render(e,!1))).join("")}};var kr=new class{_parentElement=document.querySelector(".search");getQuery(){const e=this._parentElement.querySelector(".search__field").value;return this._clearInput(),e}addHandlerSearch(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault(),e()}))}_clearInput(){this._parentElement.querySelector(".search__field").value=""}};var Er=new class extends mr{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--inline");if(!n)return;console.log(n);const r=+n.dataset.goto;console.log(r),e(r)}))}_generateMarkup(){const e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);console.log(e,t);const n=1===e&&t>1,r=e===t&&t>1,o=e<t;return n||r?(console.log(!!n,!!r),this._generateMarkupBtn(n,e)):o?`${this._generateMarkupBtn(!1,e)}\n      ${this._generateMarkupBtn(!0,e)}`:""}_generateMarkupBtn(e,t){const r=e?t+1:t-1;return`\n      <button data-goto='${r}' class="btn--inline pagination__btn--${e?"next":"prev"}">\n        <svg class="search__icon">\n          <use href="${n(br)}#icon-arrow-${e?"right":"left"}"></use>\n        </svg>\n        <span>Page ${r}</span>\n      </button>\n      `}};var Sr=new class extends mr{_parentElement=document.querySelector(".results");_errorMessage="No recepies found for you query!Please try again ;)";_message="";_generateMarkup(){return console.log(this._data),this._data.map((e=>_r.render(e,!1))).join("")}};var Or=new class extends mr{_parentElement=document.querySelector(".upload");_message="Congratulation you have just uploaded your own recipe!";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowingWindow(),this._addHandlerHideWindow()}toggleWindow(){this._window.classList.toggle("hidden"),this._overlay.classList.toggle("hidden")}_addHandlerShowingWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault();const n=[...new FormData(this)],r=Object.fromEntries(n);e(r),console.log(r)}))}_generateMarkup(){}};const jr=async function(){try{const e=window.location.hash.slice(1);if(!e)return;Sr.update(lr()),wr.update(ur.bookmarks),yr.renderSpiner(),await async function(e){console.log(e);try{const t=await cr(`${ir}${e}?key=${ar}`),{recipe:n}=t.data,r=sr(n);ur.recipe=r,console.log(ur.recipe),ur.bookmarks.some((t=>t.id===e))&&(ur.recipe.bookmarked=!0)}catch(e){throw console.error(`${e} 🧨💥💥💥`),e}}(e),yr.render(ur.recipe)}catch(e){yr.renderError(),console.error(e)}},Lr=async function(){try{Sr.renderSpiner();const e=kr.getQuery();if(!e)return;await async function(e){try{const t=await cr(`${ir}?search=${e}&key=${ar}`);console.log(t),ur.search.results=t.data.recipes.map((e=>({id:e.id,title:e.title,publisher:e.publisher,imageUrl:e.image_url,...e.key&&{key:e.key}}))),ur.search.page=1}catch(e){throw console.error(`${e} 🧨💥💥💥`),e}}(e),Sr.render(lr()),Er.render(ur.search)}catch(e){console.error(e)}},Fr=function(e){Sr.render(lr(e)),Er.render(ur.search)},Mr=function(e){!function(e){ur.recipe.ingredients.forEach((t=>{t.quantity=t.quantity*e/ur.recipe.servings})),ur.recipe.servings=e}(e),yr.update(ur.recipe)},Tr=function(){ur.recipe.bookmarked?function(e){const t=ur.bookmarks.findIndex((t=>t.id===e));ur.bookmarks.splice(t,1),e===ur.recipe.id&&(ur.recipe.bookmarked=!1),fr()}(ur.recipe.id):dr(ur.recipe),yr.update(ur.recipe),wr.render(ur.bookmarks)},$r=function(){wr.render(ur.bookmarks)},xr=async function(e){console.log(e);try{Or.renderSpiner(),await async function(e){try{const t=Object.entries(e).filter((e=>e[0].startsWith("ingredient")&&""!==e[1])).map((e=>{const t=e[1].split(",").map((e=>e.trim()));if(console.log(t),3!==t.length)throw new Error("Wrong ingrediten format.Plese the correct format.");const[n,r,o]=t;return{quantity:n?+n:null,unit:r,description:o}})),n={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},r=await cr(`${ir}?key=${ar}`,n);ur.recipe=sr(r.data.recipe),dr(ur.recipe),console.log(ur.recipe)}catch(e){throw e}}(e),console.log(ur.recipe),yr.render(ur.recipe),Or.renderMessage(),wr.render(ur.bookmarks),window.history.pushState(null,"",`#${ur.recipe.id}`),setTimeout((()=>{Or.toggleWindow()}),2500)}catch(e){console.error("💥",e),Or.renderError(e.message)}};wr.addHandlerRender($r),yr.addHandlerRender(jr),yr.addHandlerUpdateRecipe(Mr),yr.addHandlerAddBookmark(Tr),kr.addHandlerSearch(Lr),Er.addHandlerClick(Fr),Or.addHandlerUpload(xr);
//# sourceMappingURL=index.409c259d.js.map
