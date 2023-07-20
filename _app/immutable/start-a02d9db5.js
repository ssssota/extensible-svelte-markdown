import{S as rt,i as ot,s as it,a as st,e as T,c as lt,b as B,g as X,t as j,d as Z,f as D,h as q,j as ct,o as Ae,k as ft,l as ut,m as dt,n as ke,p as z,q as pt,r as ht,u as mt,v as H,w as G,x as se,y as J,z as K,A as he}from"./chunks/index-54267bab.js";import{S as et,I as M,g as Ke,f as ze,a as $e,b as me,s as W,i as We,c as oe,P as Ye,d as _t}from"./chunks/singletons-7679ea28.js";import{_ as ee}from"./chunks/preload-helper-41c905a7.js";import{s as gt,a as wt}from"./chunks/shared-23917130.js";function yt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function bt(r){return r.split("%25").map(decodeURI).join("%25")}function vt(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const Et=["href","pathname","search","searchParams","toString","toJSON"];function kt(r,e){const n=new URL(r);for(const o of Et){let a=n[o];Object.defineProperty(n,o,{get(){return e(),a},enumerable:!0,configurable:!0})}return $t(n),n}function $t(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Rt="/__data.json";function St(r){return r.replace(/\/$/,"")+Rt}function It(...r){let e=5381;for(const n of r)if(typeof n=="string"){let o=n.length;for(;o;)e=e*33^n.charCodeAt(--o)}else if(ArrayBuffer.isView(n)){const o=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=o.length;for(;a;)e=e*33^o[--a]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const _e=window.fetch;window.fetch=(r,e)=>((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"&&ie.delete(Ne(r)),_e(r,e));const ie=new Map;function Lt(r,e){const n=Ne(r,e),o=document.querySelector(n);if(o!=null&&o.textContent){const{body:a,...h}=JSON.parse(o.textContent),t=o.getAttribute("data-ttl");return t&&ie.set(n,{body:a,init:h,ttl:1e3*Number(t)}),Promise.resolve(new Response(a,h))}return _e(r,e)}function At(r,e,n){if(ie.size>0){const o=Ne(r,n),a=ie.get(o);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);ie.delete(o)}}return _e(e,n)}function Ne(r,e){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;if(e!=null&&e.headers||e!=null&&e.body){const a=[];e.headers&&a.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&a.push(e.body),o+=`[data-hash="${It(...a)}"]`}return o}const Ot=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Pt(r){const e=[];return{pattern:r==="/"?/^\/$/:new RegExp(`^${Ut(r).map(o=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(o);if(a)return e.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const h=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(o);if(h)return e.push({name:h[1],matcher:h[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!o)return;const t=o.split(/\[(.+?)\](?!\])/);return"/"+t.map((u,m)=>{if(m%2){if(u.startsWith("x+"))return Re(String.fromCharCode(parseInt(u.slice(2),16)));if(u.startsWith("u+"))return Re(String.fromCharCode(...u.slice(2).split("-").map(I=>parseInt(I,16))));const w=Ot.exec(u);if(!w)throw new Error(`Invalid param: ${u}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,v,N,k,F]=w;return e.push({name:k,matcher:F,optional:!!v,rest:!!N,chained:N?m===1&&t[0]==="":!1}),N?"(.*?)":v?"([^/]*)?":"([^/]+?)"}return Re(u)}).join("")}).join("")}/?$`),params:e}}function Nt(r){return!/^\([^)]+\)$/.test(r)}function Ut(r){return r.slice(1).split("/").filter(Nt)}function Tt(r,e,n){const o={},a=r.slice(1);let h=0;for(let t=0;t<e.length;t+=1){const f=e[t],u=a[t-h];if(f.chained&&f.rest&&h){o[f.name]=a.slice(t-h,t+1).filter(m=>m).join("/"),h=0;continue}if(u===void 0){f.rest&&(o[f.name]="");continue}if(!f.matcher||n[f.matcher](u)){o[f.name]=u;continue}if(f.optional&&f.chained){h++;continue}return}if(!h)return o}function Re(r){return r.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function jt(r,e,n,o){const a=new Set(e);return Object.entries(n).map(([f,[u,m,w]])=>{const{pattern:v,params:N}=Pt(f),k={id:f,exec:F=>{const I=v.exec(F);if(I)return Tt(I,N,o)},errors:[1,...w||[]].map(F=>r[F]),layouts:[0,...m||[]].map(t),leaf:h(u)};return k.errors.length=k.layouts.length=Math.max(k.errors.length,k.layouts.length),k});function h(f){const u=f<0;return u&&(f=~f),[u,r[f]]}function t(f){return f===void 0?f:[a.has(f),r[f]]}}function Dt(r){let e,n,o;var a=r[0][0];function h(t){return{props:{data:t[2],form:t[1]}}}return a&&(e=H(a,h(r))),{c(){e&&G(e.$$.fragment),n=T()},l(t){e&&se(e.$$.fragment,t),n=T()},m(t,f){e&&J(e,t,f),B(t,n,f),o=!0},p(t,f){const u={};if(f&4&&(u.data=t[2]),f&2&&(u.form=t[1]),a!==(a=t[0][0])){if(e){X();const m=e;j(m.$$.fragment,1,0,()=>{K(m,1)}),Z()}a?(e=H(a,h(t)),G(e.$$.fragment),D(e.$$.fragment,1),J(e,n.parentNode,n)):e=null}else a&&e.$set(u)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&j(e.$$.fragment,t),o=!1},d(t){t&&q(n),e&&K(e,t)}}}function Vt(r){let e,n,o;var a=r[0][0];function h(t){return{props:{data:t[2],$$slots:{default:[Mt]},$$scope:{ctx:t}}}}return a&&(e=H(a,h(r))),{c(){e&&G(e.$$.fragment),n=T()},l(t){e&&se(e.$$.fragment,t),n=T()},m(t,f){e&&J(e,t,f),B(t,n,f),o=!0},p(t,f){const u={};if(f&4&&(u.data=t[2]),f&1051&&(u.$$scope={dirty:f,ctx:t}),a!==(a=t[0][0])){if(e){X();const m=e;j(m.$$.fragment,1,0,()=>{K(m,1)}),Z()}a?(e=H(a,h(t)),G(e.$$.fragment),D(e.$$.fragment,1),J(e,n.parentNode,n)):e=null}else a&&e.$set(u)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&j(e.$$.fragment,t),o=!1},d(t){t&&q(n),e&&K(e,t)}}}function Ct(r){let e,n,o;var a=r[0][1];function h(t){return{props:{data:t[3],form:t[1]}}}return a&&(e=H(a,h(r))),{c(){e&&G(e.$$.fragment),n=T()},l(t){e&&se(e.$$.fragment,t),n=T()},m(t,f){e&&J(e,t,f),B(t,n,f),o=!0},p(t,f){const u={};if(f&8&&(u.data=t[3]),f&2&&(u.form=t[1]),a!==(a=t[0][1])){if(e){X();const m=e;j(m.$$.fragment,1,0,()=>{K(m,1)}),Z()}a?(e=H(a,h(t)),G(e.$$.fragment),D(e.$$.fragment,1),J(e,n.parentNode,n)):e=null}else a&&e.$set(u)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&j(e.$$.fragment,t),o=!1},d(t){t&&q(n),e&&K(e,t)}}}function qt(r){let e,n,o;var a=r[0][1];function h(t){return{props:{data:t[3],$$slots:{default:[Ft]},$$scope:{ctx:t}}}}return a&&(e=H(a,h(r))),{c(){e&&G(e.$$.fragment),n=T()},l(t){e&&se(e.$$.fragment,t),n=T()},m(t,f){e&&J(e,t,f),B(t,n,f),o=!0},p(t,f){const u={};if(f&8&&(u.data=t[3]),f&1043&&(u.$$scope={dirty:f,ctx:t}),a!==(a=t[0][1])){if(e){X();const m=e;j(m.$$.fragment,1,0,()=>{K(m,1)}),Z()}a?(e=H(a,h(t)),G(e.$$.fragment),D(e.$$.fragment,1),J(e,n.parentNode,n)):e=null}else a&&e.$set(u)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&j(e.$$.fragment,t),o=!1},d(t){t&&q(n),e&&K(e,t)}}}function Ft(r){let e,n,o;var a=r[0][2];function h(t){return{props:{data:t[4],form:t[1]}}}return a&&(e=H(a,h(r))),{c(){e&&G(e.$$.fragment),n=T()},l(t){e&&se(e.$$.fragment,t),n=T()},m(t,f){e&&J(e,t,f),B(t,n,f),o=!0},p(t,f){const u={};if(f&16&&(u.data=t[4]),f&2&&(u.form=t[1]),a!==(a=t[0][2])){if(e){X();const m=e;j(m.$$.fragment,1,0,()=>{K(m,1)}),Z()}a?(e=H(a,h(t)),G(e.$$.fragment),D(e.$$.fragment,1),J(e,n.parentNode,n)):e=null}else a&&e.$set(u)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&j(e.$$.fragment,t),o=!1},d(t){t&&q(n),e&&K(e,t)}}}function Mt(r){let e,n,o,a;const h=[qt,Ct],t=[];function f(u,m){return u[0][2]?0:1}return e=f(r),n=t[e]=h[e](r),{c(){n.c(),o=T()},l(u){n.l(u),o=T()},m(u,m){t[e].m(u,m),B(u,o,m),a=!0},p(u,m){let w=e;e=f(u),e===w?t[e].p(u,m):(X(),j(t[w],1,1,()=>{t[w]=null}),Z(),n=t[e],n?n.p(u,m):(n=t[e]=h[e](u),n.c()),D(n,1),n.m(o.parentNode,o))},i(u){a||(D(n),a=!0)},o(u){j(n),a=!1},d(u){t[e].d(u),u&&q(o)}}}function Xe(r){let e,n=r[6]&&Ze(r);return{c(){e=ft("div"),n&&n.c(),this.h()},l(o){e=ut(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var a=dt(e);n&&n.l(a),a.forEach(q),this.h()},h(){ke(e,"id","svelte-announcer"),ke(e,"aria-live","assertive"),ke(e,"aria-atomic","true"),z(e,"position","absolute"),z(e,"left","0"),z(e,"top","0"),z(e,"clip","rect(0 0 0 0)"),z(e,"clip-path","inset(50%)"),z(e,"overflow","hidden"),z(e,"white-space","nowrap"),z(e,"width","1px"),z(e,"height","1px")},m(o,a){B(o,e,a),n&&n.m(e,null)},p(o,a){o[6]?n?n.p(o,a):(n=Ze(o),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(o){o&&q(e),n&&n.d()}}}function Ze(r){let e;return{c(){e=pt(r[7])},l(n){e=ht(n,r[7])},m(n,o){B(n,e,o)},p(n,o){o&128&&mt(e,n[7])},d(n){n&&q(e)}}}function Bt(r){let e,n,o,a,h;const t=[Vt,Dt],f=[];function u(w,v){return w[0][1]?0:1}e=u(r),n=f[e]=t[e](r);let m=r[5]&&Xe(r);return{c(){n.c(),o=st(),m&&m.c(),a=T()},l(w){n.l(w),o=lt(w),m&&m.l(w),a=T()},m(w,v){f[e].m(w,v),B(w,o,v),m&&m.m(w,v),B(w,a,v),h=!0},p(w,[v]){let N=e;e=u(w),e===N?f[e].p(w,v):(X(),j(f[N],1,1,()=>{f[N]=null}),Z(),n=f[e],n?n.p(w,v):(n=f[e]=t[e](w),n.c()),D(n,1),n.m(o.parentNode,o)),w[5]?m?m.p(w,v):(m=Xe(w),m.c(),m.m(a.parentNode,a)):m&&(m.d(1),m=null)},i(w){h||(D(n),h=!0)},o(w){j(n),h=!1},d(w){f[e].d(w),w&&q(o),m&&m.d(w),w&&q(a)}}}function Ht(r,e,n){let{stores:o}=e,{page:a}=e,{components:h}=e,{form:t}=e,{data_0:f=null}=e,{data_1:u=null}=e,{data_2:m=null}=e;ct(o.page.notify);let w=!1,v=!1,N=null;return Ae(()=>{const k=o.page.subscribe(()=>{w&&(n(6,v=!0),n(7,N=document.title||"untitled page"))});return n(5,w=!0),k}),r.$$set=k=>{"stores"in k&&n(8,o=k.stores),"page"in k&&n(9,a=k.page),"components"in k&&n(0,h=k.components),"form"in k&&n(1,t=k.form),"data_0"in k&&n(2,f=k.data_0),"data_1"in k&&n(3,u=k.data_1),"data_2"in k&&n(4,m=k.data_2)},r.$$.update=()=>{r.$$.dirty&768&&o.page.set(a)},[h,t,f,u,m,w,v,N,o,a]}class Gt extends rt{constructor(e){super(),ot(this,e,Ht,Bt,it,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const Jt={},ge=[()=>ee(()=>import("./chunks/0-bd864188.js"),["./chunks/0-bd864188.js","./chunks/_layout-da46b06b.js","./components/pages/_layout.svelte-cb704cb4.js","./chunks/index-54267bab.js","./assets/_layout-4d40d855.css"],import.meta.url),()=>ee(()=>import("./chunks/1-82ec51b8.js"),["./chunks/1-82ec51b8.js","./components/error.svelte-1d17b724.js","./chunks/index-54267bab.js","./chunks/singletons-7679ea28.js","./chunks/index-4ca5149e.js","./chunks/shared-23917130.js"],import.meta.url),()=>ee(()=>import("./chunks/2-110168f8.js"),["./chunks/2-110168f8.js","./components/pages/docs/_layout.svelte-d5d168ea.js","./chunks/index-54267bab.js","./chunks/Header-1c514ea3.js","./chunks/shared-23917130.js","./assets/Header-1bce78ea.css","./assets/_layout-78e299c4.css"],import.meta.url),()=>ee(()=>import("./chunks/3-90bd4b5d.js"),["./chunks/3-90bd4b5d.js","./components/pages/_page.svelte-5b63644a.js","./chunks/index-54267bab.js","./chunks/index-446c282d.js","./chunks/index-4ca5149e.js","./chunks/_commonjsHelpers-725317a4.js","./assets/index-312500d6.css","./chunks/Header-1c514ea3.js","./chunks/shared-23917130.js","./assets/Header-1bce78ea.css","./assets/_page-e6e9b4b2.css"],import.meta.url),()=>ee(()=>import("./chunks/4-9c6fe88f.js"),["./chunks/4-9c6fe88f.js","./components/pages/docs/_page.svelte-b665a5c4.js","./chunks/index-54267bab.js","./chunks/shared-23917130.js"],import.meta.url),()=>ee(()=>import("./chunks/5-430e0fcb.js"),["./chunks/5-430e0fcb.js","./components/pages/docs/_slug_/_page.svelte-c9358472.js","./chunks/index-54267bab.js","./chunks/shared-23917130.js","./chunks/index-446c282d.js","./chunks/index-4ca5149e.js","./chunks/_commonjsHelpers-725317a4.js","./assets/index-312500d6.css","./chunks/transform-ed2986dc.js","./chunks/utils-3cbdbddf-710ae659.js","./chunks/setupGraphViewbox-e1099da8-7d9fc626.js","./chunks/commonDb-7528607a-b9182d78.js","./chunks/mermaidAPI-a1a81019-7545cd9a.js","./chunks/preload-helper-41c905a7.js","./chunks/errorRenderer-11917bdc-9254c795.js","./assets/_page-6243df82.css"],import.meta.url)],tt=[],Kt={"/":[3],"/docs":[-5,[2]],"/docs/[slug]":[-6,[2]]},zt={handleError:({error:r})=>{console.error(r)}};let Oe=class{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}},Qe=class{constructor(e,n){this.status=e,this.location=n}};async function Wt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([o,a])=>[o,await a])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Yt=-1,Xt=-2,Zt=-3,Qt=-4,xt=-5,en=-6;function tn(r){if(typeof r=="number")return o(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,n=Array(e.length);function o(a,h=!1){if(a===Yt)return;if(a===Zt)return NaN;if(a===Qt)return 1/0;if(a===xt)return-1/0;if(a===en)return-0;if(h)throw new Error("Invalid input");if(a in n)return n[a];const t=e[a];if(!t||typeof t!="object")n[a]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[a]=new Date(t[1]);break;case"Set":const u=new Set;n[a]=u;for(let v=1;v<t.length;v+=1)u.add(o(t[v]));break;case"Map":const m=new Map;n[a]=m;for(let v=1;v<t.length;v+=2)m.set(o(t[v]),o(t[v+1]));break;case"RegExp":n[a]=new RegExp(t[1],t[2]);break;case"Object":n[a]=Object(t[1]);break;case"BigInt":n[a]=BigInt(t[1]);break;case"null":const w=Object.create(null);n[a]=w;for(let v=1;v<t.length;v+=2)w[t[v]]=o(t[v+1]);break}else{const f=new Array(t.length);n[a]=f;for(let u=0;u<t.length;u+=1){const m=t[u];m!==Xt&&(f[u]=o(m))}}else{const f={};n[a]=f;for(const u in t){const m=t[u];f[u]=o(m)}}return n[a]}return o(0)}function nn(r){return r.filter(e=>e!=null)}const Se=jt(ge,tt,Kt,Jt),nt=ge[0],Pe=ge[1];nt();Pe();let te={};try{te=JSON.parse(sessionStorage[et])}catch{}function Ie(r){te[r]=oe()}function an({target:r,base:e}){var He;const n=document.documentElement,o=[];let a=null;const h={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,u=!1,m=!0,w=!1,v=!1,N=!1,k=!1,F,I=(He=history.state)==null?void 0:He[M];I||(I=Date.now(),history.replaceState({...history.state,[M]:I},"",location.href));const we=te[I];we&&(history.scrollRestoration="manual",scrollTo(we.x,we.y));let Y,Ue,le;async function Te(){le=le||Promise.resolve(),await le,le=null;const i=new URL(location.href),s=ue(i,!0);a=null,await De(s,i,[])}async function ye(i,{noScroll:s=!1,replaceState:c=!1,keepFocus:l=!1,state:p={},invalidateAll:d=!1},_,b){return typeof i=="string"&&(i=new URL(i,Ke(document))),pe({url:i,scroll:s?oe():null,keepfocus:l,redirect_chain:_,details:{state:p,replaceState:c},nav_token:b,accepted:()=>{d&&(k=!0)},blocked:()=>{},type:"goto"})}async function je(i){const s=ue(i,!1);if(!s)throw new Error(`Attempted to preload a URL that does not belong to this app: ${i}`);return a={id:s.id,promise:qe(s).then(c=>(c.type==="loaded"&&c.state.error&&(a=null),c))},a.promise}async function ce(...i){const c=Se.filter(l=>i.some(p=>l.exec(p))).map(l=>Promise.all([...l.layouts,l.leaf].map(p=>p==null?void 0:p[1]())));await Promise.all(c)}async function De(i,s,c,l,p={},d){var b,y;Ue=p;let _=i&&await qe(i);if(_||(_=await Be(s,{id:null},await re(new Error(`Not found: ${s.pathname}`),{url:s,params:{},route:{id:null}}),404)),s=(i==null?void 0:i.url)||s,Ue!==p)return!1;if(_.type==="redirect")if(c.length>10||c.includes(s.pathname))_=await fe({status:500,error:await re(new Error("Redirect loop"),{url:s,params:{},route:{id:null}}),url:s,route:{id:null}});else return ye(new URL(_.location,s).href,{},[...c,s.pathname],p),!1;else((y=(b=_.props)==null?void 0:b.page)==null?void 0:y.status)>=400&&await W.updated.check()&&await ae(s);if(o.length=0,k=!1,w=!0,l&&l.details){const{details:g}=l,$=g.replaceState?0:1;g.state[M]=I+=$,history[g.replaceState?"replaceState":"pushState"](g.state,"",s)}if(a=null,u?(t=_.state,_.props.page&&(_.props.page.url=s),F.$set(_.props)):Ve(_),l){const{scroll:g,keepfocus:$}=l,{activeElement:O}=document;await he();const C=document.activeElement!==O&&document.activeElement!==document.body;if(!$&&!C&&await Le(),m){const S=s.hash&&document.getElementById(decodeURIComponent(s.hash.slice(1)));g?scrollTo(g.x,g.y):S?S.scrollIntoView():scrollTo(0,0)}}else await he();m=!0,_.props.page&&(Y=_.props.page),d&&d(),w=!1}function Ve(i){var l;t=i.state;const s=document.querySelector("style[data-sveltekit]");s&&s.remove(),Y=i.props.page,F=new Gt({target:r,props:{...i.props,stores:W},hydrate:!0});const c={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};h.after_navigate.forEach(p=>p(c)),u=!0}async function ne({url:i,params:s,branch:c,status:l,error:p,route:d,form:_}){let b="never";for(const S of c)(S==null?void 0:S.slash)!==void 0&&(b=S.slash);i.pathname=yt(i.pathname,b),i.search=i.search;const y={type:"loaded",state:{url:i,params:s,branch:c,error:p,route:d},props:{components:nn(c).map(S=>S.node.component)}};_!==void 0&&(y.props.form=_);let g={},$=!Y,O=0;for(let S=0;S<Math.max(c.length,t.branch.length);S+=1){const E=c[S],P=t.branch[S];(E==null?void 0:E.data)!==(P==null?void 0:P.data)&&($=!0),E&&(g={...g,...E.data},$&&(y.props[`data_${O}`]=g),O+=1)}return(!t.url||i.href!==t.url.href||t.error!==p||_!==void 0&&_!==Y.form||$)&&(y.props.page={error:p,params:s,route:{id:(d==null?void 0:d.id)??null},status:l,url:new URL(i),form:_??null,data:$?g:Y.data}),y}async function be({loader:i,parent:s,url:c,params:l,route:p,server_data_node:d}){var g,$,O;let _=null;const b={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},y=await i();if((g=y.universal)!=null&&g.load){let C=function(...E){for(const P of E){const{href:V}=new URL(P,c);b.dependencies.add(V)}};const S={route:{get id(){return b.route=!0,p.id}},params:new Proxy(l,{get:(E,P)=>(b.params.add(P),E[P])}),data:(d==null?void 0:d.data)??null,url:kt(c,()=>{b.url=!0}),async fetch(E,P){let V;E instanceof Request?(V=E.url,P={body:E.method==="GET"||E.method==="HEAD"?void 0:await E.blob(),cache:E.cache,credentials:E.credentials,headers:E.headers,integrity:E.integrity,keepalive:E.keepalive,method:E.method,mode:E.mode,redirect:E.redirect,referrer:E.referrer,referrerPolicy:E.referrerPolicy,signal:E.signal,...P}):V=E;const R=new URL(V,c).href;return C(R),u?At(V,R,P):Lt(V,P)},setHeaders:()=>{},depends:C,parent(){return b.parent=!0,s()}};_=await y.universal.load.call(null,S)??null,_=_?await Wt(_):null}return{node:y,loader:i,server:d,universal:($=y.universal)!=null&&$.load?{type:"data",data:_,uses:b}:null,data:_??(d==null?void 0:d.data)??null,slash:((O=y.universal)==null?void 0:O.trailingSlash)??(d==null?void 0:d.slash)}}function Ce(i,s,c,l,p){if(k)return!0;if(!l)return!1;if(l.parent&&i||l.route&&s||l.url&&c)return!0;for(const d of l.params)if(p[d]!==t.params[d])return!0;for(const d of l.dependencies)if(o.some(_=>_(new URL(d))))return!0;return!1}function ve(i,s){return(i==null?void 0:i.type)==="data"?{type:"data",data:i.data,uses:{dependencies:new Set(i.uses.dependencies??[]),params:new Set(i.uses.params??[]),parent:!!i.uses.parent,route:!!i.uses.route,url:!!i.uses.url},slash:i.slash}:(i==null?void 0:i.type)==="skip"?s??null:null}async function qe({id:i,invalidating:s,url:c,params:l,route:p}){if((a==null?void 0:a.id)===i)return a.promise;const{errors:d,layouts:_,leaf:b}=p,y=[..._,b];d.forEach(R=>R==null?void 0:R().catch(()=>{})),y.forEach(R=>R==null?void 0:R[1]().catch(()=>{}));let g=null;const $=t.url?i!==t.url.pathname+t.url.search:!1,O=t.route?p.id!==t.route.id:!1,C=y.reduce((R,A,U)=>{var x;const L=t.branch[U],Q=!!(A!=null&&A[0])&&((L==null?void 0:L.loader)!==A[1]||Ce(R.some(Boolean),O,$,(x=L.server)==null?void 0:x.uses,l));return R.push(Q),R},[]);if(C.some(Boolean)){try{g=await xe(c,C)}catch(R){return fe({status:500,error:await re(R,{url:c,params:l,route:{id:p.id}}),url:c,route:p})}if(g.type==="redirect")return g}const S=g==null?void 0:g.nodes;let E=!1;const P=y.map(async(R,A)=>{var x;if(!R)return;const U=t.branch[A],L=S==null?void 0:S[A];if((!L||L.type==="skip")&&R[1]===(U==null?void 0:U.loader)&&!Ce(E,O,$,(x=U.universal)==null?void 0:x.uses,l))return U;if(E=!0,(L==null?void 0:L.type)==="error")throw L;return be({loader:R[1],url:c,params:l,route:p,parent:async()=>{var Je;const Ge={};for(let Ee=0;Ee<A;Ee+=1)Object.assign(Ge,(Je=await P[Ee])==null?void 0:Je.data);return Ge},server_data_node:ve(L===void 0&&R[0]?{type:"skip"}:L??null,U==null?void 0:U.server)})});for(const R of P)R.catch(()=>{});const V=[];for(let R=0;R<y.length;R+=1)if(y[R])try{V.push(await P[R])}catch(A){if(A instanceof Qe)return{type:"redirect",location:A.location};let U=500,L;if(S!=null&&S.includes(A))U=A.status??U,L=A.error;else if(A instanceof Oe)U=A.status,L=A.body;else{if(await W.updated.check())return await ae(c);L=await re(A,{params:l,url:c,route:{id:p.id}})}const Q=await Fe(R,V,d);return Q?await ne({url:c,params:l,branch:V.slice(0,Q.idx).concat(Q.node),status:U,error:L,route:p}):await Be(c,{id:p.id},L,U)}else V.push(void 0);return await ne({url:c,params:l,branch:V,status:200,error:null,route:p,form:s?void 0:null})}async function Fe(i,s,c){for(;i--;)if(c[i]){let l=i;for(;!s[l];)l-=1;try{return{idx:l+1,node:{node:await c[i](),loader:c[i],data:{},server:null,universal:null}}}catch{continue}}}async function fe({status:i,error:s,url:c,route:l}){const p={};let d=null;if(tt[0]===0)try{const g=await xe(c,[!0]);if(g.type!=="data"||g.nodes[0]&&g.nodes[0].type!=="data")throw 0;d=g.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await ae(c)}const b=await be({loader:nt,url:c,params:p,route:l,parent:()=>Promise.resolve({}),server_data_node:ve(d)}),y={node:await Pe(),loader:Pe,universal:null,server:null,data:null};return await ne({url:c,params:p,branch:[b,y],status:i,error:s,route:null})}function ue(i,s){if(We(i,e))return;const c=de(i);for(const l of Se){const p=l.exec(c);if(p)return{id:i.pathname+i.search,invalidating:s,route:l,params:vt(p),url:i}}}function de(i){return bt(i.pathname.slice(e.length)||"/")}function Me({url:i,type:s,intent:c,delta:l}){var b,y;let p=!1;const d={from:{params:t.params,route:{id:((b=t.route)==null?void 0:b.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((y=c==null?void 0:c.route)==null?void 0:y.id)??null},url:i},willUnload:!c,type:s};l!==void 0&&(d.delta=l);const _={...d,cancel:()=>{p=!0}};return v||h.before_navigate.forEach(g=>g(_)),p?null:d}async function pe({url:i,scroll:s,keepfocus:c,redirect_chain:l,details:p,type:d,delta:_,nav_token:b,accepted:y,blocked:g}){const $=ue(i,!1),O=Me({url:i,type:d,delta:_,intent:$});if(!O){g();return}Ie(I),y(),v=!0,u&&W.navigating.set(O),await De($,i,l,{scroll:s,keepfocus:c,details:p},b,()=>{v=!1,h.after_navigate.forEach(C=>C(O)),W.navigating.set(null)})}async function Be(i,s,c,l){return i.origin===location.origin&&i.pathname===location.pathname&&!f?await fe({status:l,error:c,url:i,route:s}):await ae(i)}function ae(i){return location.href=i.href,new Promise(()=>{})}function at(){let i;n.addEventListener("mousemove",d=>{const _=d.target;clearTimeout(i),i=setTimeout(()=>{l(_,2)},20)});function s(d){l(d.composedPath()[0],1)}n.addEventListener("mousedown",s),n.addEventListener("touchstart",s,{passive:!0});const c=new IntersectionObserver(d=>{for(const _ of d)_.isIntersecting&&(ce(de(new URL(_.target.href))),c.unobserve(_.target))},{threshold:0});function l(d,_){const b=ze(d,n);if(!b)return;const{url:y,external:g}=$e(b,e);if(g)return;const $=me(b);$.reload||(_<=$.preload_data?je(y):_<=$.preload_code&&ce(de(y)))}function p(){c.disconnect();for(const d of n.querySelectorAll("a")){const{url:_,external:b}=$e(d,e);if(b)continue;const y=me(d);y.reload||(y.preload_code===Ye.viewport&&c.observe(d),y.preload_code===Ye.eager&&ce(de(_)))}}h.after_navigate.push(p),p()}return{after_navigate:i=>{Ae(()=>(h.after_navigate.push(i),()=>{const s=h.after_navigate.indexOf(i);h.after_navigate.splice(s,1)}))},before_navigate:i=>{Ae(()=>(h.before_navigate.push(i),()=>{const s=h.before_navigate.indexOf(i);h.before_navigate.splice(s,1)}))},disable_scroll_handling:()=>{(w||!u)&&(m=!1)},goto:(i,s={})=>ye(i,s,[]),invalidate:i=>{if(typeof i=="function")o.push(i);else{const{href:s}=new URL(i,location.href);o.push(c=>c.href===s)}return Te()},invalidateAll:()=>(k=!0,Te()),preload_data:async i=>{const s=new URL(i,Ke(document));await je(s)},preload_code:ce,apply_action:async i=>{if(i.type==="error"){const s=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const p=await Fe(t.branch.length,c,l.errors);if(p){const d=await ne({url:s,params:t.params,branch:c.slice(0,p.idx).concat(p.node),status:i.status??500,error:i.error,route:l});t=d.state,F.$set(d.props),he().then(Le)}}else if(i.type==="redirect")ye(i.location,{invalidateAll:!0},[]);else{const s={form:i.data,page:{...Y,form:i.data,status:i.status}};F.$set(s),i.type==="success"&&he().then(Le)}},_start_router:()=>{var i;history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var l;let c=!1;if(!v){const p={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};h.before_navigate.forEach(d=>d(p))}c?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Ie(I);try{sessionStorage[et]=JSON.stringify(te)}catch{}}}),(i=navigator.connection)!=null&&i.saveData||at(),n.addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const c=ze(s.composedPath()[0],n);if(!c)return;const{url:l,external:p,target:d}=$e(c,e);if(!l)return;if(d==="_parent"||d==="_top"){if(window.parent!==window)return}else if(d&&d!=="_self")return;const _=me(c);if(!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:"))return;if(p||_.reload){Me({url:l,type:"link"})||s.preventDefault(),v=!0;return}const[y,g]=l.href.split("#");if(g!==void 0&&y===location.href.split("#")[0]){N=!0,Ie(I),t.url=l,W.page.set({...Y,url:l}),W.page.notify();return}pe({url:l,scroll:_.noscroll?oe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),n.addEventListener("submit",s=>{if(s.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(s.target),l=s.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const d=new URL((l==null?void 0:l.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(We(d,e))return;const _=s.target,{noscroll:b,reload:y}=me(_);if(y)return;s.preventDefault(),s.stopPropagation();const g=new FormData(_),$=l==null?void 0:l.getAttribute("name");$&&g.append($,(l==null?void 0:l.getAttribute("value"))??""),d.search=new URLSearchParams(g).toString(),pe({url:d,scroll:b?oe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",s=>{var c;if((c=s.state)!=null&&c[M]){if(s.state[M]===I)return;const l=te[s.state[M]];if(t.url.href.split("#")[0]===location.href.split("#")[0]){te[I]=oe(),I=s.state[M],scrollTo(l.x,l.y);return}const p=s.state[M]-I;pe({url:new URL(location.href),scroll:l,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{I=s.state[M]},blocked:()=>{history.go(-p)},type:"popstate",delta:p})}}),addEventListener("hashchange",()=>{N&&(N=!1,history.replaceState({...history.state,[M]:++I},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&W.navigating.set(null)})},_hydrate:async({status:i=200,error:s,node_ids:c,params:l,route:p,data:d,form:_})=>{f=!0;const b=new URL(location.href);({params:l={},route:p={id:null}}=ue(b,!1)||{});let y;try{const g=c.map(async($,O)=>{const C=d[O];return be({loader:ge[$],url:b,params:l,route:p,parent:async()=>{const S={};for(let E=0;E<O;E+=1)Object.assign(S,(await g[E]).data);return S},server_data_node:ve(C)})});y=await ne({url:b,params:l,branch:await Promise.all(g),status:i,error:s,form:_,route:Se.find(({id:$})=>$===p.id)??null})}catch(g){if(g instanceof Qe){await ae(new URL(g.location,location.href));return}y=await fe({status:g instanceof Oe?g.status:500,error:await re(g,{url:b,params:l,route:p}),url:b,route:p})}Ve(y)}}}async function xe(r,e){var h;const n=new URL(r);n.pathname=St(r.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const o=await _e(n.href),a=await o.json();if(!o.ok)throw new Error(a);return(h=a.nodes)==null||h.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=tn(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),a}function re(r,e){return r instanceof Oe?r.body:zt.handleError({error:r,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Le(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,n=e.getAttribute("tabindex");return e.tabIndex=-1,e.focus({preventScroll:!0}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex"),new Promise(o=>{setTimeout(()=>{var a;o((a=getSelection())==null?void 0:a.removeAllRanges())})})}}async function un({env:r,hydrate:e,paths:n,target:o,version:a}){gt(n),wt(a);const h=an({target:o,base:n.base});_t({client:h}),e?await h._hydrate(e):h.goto(location.href,{replaceState:!0}),h._start_router()}export{un as start};
