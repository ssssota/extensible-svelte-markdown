import{s as J,r as O,n as B}from"../chunks/scheduler.957c803e.js";import{S as X,i as Y,g,r as U,s as A,h as _,j as y,u as V,c as S,f as p,k as I,a as M,v as F,y as u,A as C,B as P,t as T,b as q,d as L,w as G,m as N,n as x,p as K,o as W}from"../chunks/index.3faef6f6.js";import{c as z,M as Q}from"../chunks/Markdown.944cc1c8.js";import{g as Z,h as ee,m as te,r as ne}from"../chunks/index.7bcd1ef4.js";import{H as se}from"../chunks/Header.42a121c6.js";const ae=`# svelte-exmarkdown

[![CI](https://github.com/ssssota/svelte-exmarkdown/actions/workflows/ci.yml/badge.svg)](https://github.com/ssssota/svelte-exmarkdown/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/ssssota/svelte-exmarkdown/branch/main/graph/badge.svg?token=5I9YNJ57R3)](https://codecov.io/gh/ssssota/svelte-exmarkdown)
[![License MIT](https://img.shields.io/npm/l/svelte-exmarkdown)](https://github.com/ssssota/svelte-exmarkdown/blob/main/LICENSE)

Svelte component to render markdown. Dynamic and Extensible.

## Motivation

[svelte-markdown](https://www.npmjs.com/package/svelte-markdown) is a good component package.
However, it is not extensible. You cannot use custom syntax(e.g. KaTeX).

[MDsveX](https://www.npmjs.com/package/mdsvex) is another good package.
However, it is a preprocessor. Not suitable for dynamic rendering.

We need **pluggable** and **dynamic** markdown renderer in svelte like [react-markdown](https://www.npmjs.com/package/react-markdown).

## Usage

\`\`\`svelte
<script>
	import Markdown from 'svelte-exmarkdown';
	let md = '# Hello world!';
<\/script>

<textarea bind:value={md} />
<Markdown {md} />
\`\`\`

with GFM

\`\`\`svelte
<script>
	import Markdown from 'svelte-exmarkdown';
	import { gfmPlugin } from 'svelte-exmarkdown/gfm';
	let md = '# Hello world!';
	const plugins = [gfmPlugin()];
<\/script>

<textarea bind:value={md} />
<Markdown {md} {plugins} />
\`\`\`

## Playground & Documents

https://ssssota.github.io/svelte-exmarkdown
`;function oe(r){let e,n,t,s,o,f,m,l,d,w,v,b,k,h,$,i;return{c(){e=g("div"),n=g("label"),t=g("input"),s=N("HTML"),o=A(),f=g("div"),m=g("label"),l=g("input"),d=N("GFM"),w=A(),v=g("div"),b=g("label"),k=g("input"),h=N("AST"),this.h()},l(a){e=_(a,"DIV",{});var c=y(e);n=_(c,"LABEL",{});var E=y(n);t=_(E,"INPUT",{type:!0}),s=x(E,"HTML"),E.forEach(p),c.forEach(p),o=S(a),f=_(a,"DIV",{});var R=y(f);m=_(R,"LABEL",{});var H=y(m);l=_(H,"INPUT",{type:!0}),d=x(H,"GFM"),H.forEach(p),R.forEach(p),w=S(a),v=_(a,"DIV",{});var j=y(v);b=_(j,"LABEL",{});var D=y(b);k=_(D,"INPUT",{type:!0}),h=x(D,"AST"),D.forEach(p),j.forEach(p),this.h()},h(){I(t,"type","checkbox"),I(l,"type","checkbox"),I(k,"type","checkbox")},m(a,c){M(a,e,c),u(e,n),u(n,t),t.checked=r[0],u(n,s),M(a,o,c),M(a,f,c),u(f,m),u(m,l),l.checked=r[1],u(m,d),M(a,w,c),M(a,v,c),u(v,b),u(b,k),k.checked=r[3],u(b,h),$||(i=[P(t,"change",r[6]),P(l,"change",r[7]),P(k,"change",r[8])],$=!0)},p(a,c){c&1&&(t.checked=a[0]),c&2&&(l.checked=a[1]),c&8&&(k.checked=a[3])},d(a){a&&(p(e),p(o),p(f),p(w),p(v)),$=!1,O(i)}}}function re(r){let e,n;return e=new Q({props:{md:r[4],plugins:r[2]}}),{c(){U(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,s){F(e,t,s),n=!0},p(t,s){const o={};s&16&&(o.md=t[4]),s&4&&(o.plugins=t[2]),e.$set(o)},i(t){n||(L(e.$$.fragment,t),n=!0)},o(t){T(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}function le(r){let e,n=JSON.stringify(r[5](r[4]),r[10],"  ")+"",t;return{c(){e=g("pre"),t=N(n)},l(s){e=_(s,"PRE",{});var o=y(e);t=x(o,n),o.forEach(p)},m(s,o){M(s,e,o),u(e,t)},p(s,o){o&48&&n!==(n=JSON.stringify(s[5](s[4]),s[10],"  ")+"")&&W(t,n)},i:B,o:B,d(s){s&&p(e)}}}function ie(r){let e,n,t,s,o,f,m,l,d,w,v,b;n=new se({props:{$$slots:{default:[oe]},$$scope:{ctx:r}}});const k=[le,re],h=[];function $(i,a){return i[3]?0:1}return l=$(r),d=h[l]=k[l](r),{c(){e=g("div"),U(n.$$.fragment),t=A(),s=g("main"),o=g("textarea"),f=A(),m=g("section"),d.c(),this.h()},l(i){e=_(i,"DIV",{class:!0});var a=y(e);V(n.$$.fragment,a),t=S(a),s=_(a,"MAIN",{class:!0});var c=y(s);o=_(c,"TEXTAREA",{class:!0}),y(o).forEach(p),f=S(c),m=_(c,"SECTION",{class:!0});var E=y(m);d.l(E),E.forEach(p),c.forEach(p),a.forEach(p),this.h()},h(){I(o,"class","input svelte-1omid97"),I(m,"class","output svelte-1omid97"),I(s,"class","svelte-1omid97"),I(e,"class","wrapper svelte-1omid97")},m(i,a){M(i,e,a),F(n,e,null),u(e,t),u(e,s),u(s,o),C(o,r[4]),u(s,f),u(s,m),h[l].m(m,null),w=!0,v||(b=P(o,"input",r[9]),v=!0)},p(i,[a]){const c={};a&2059&&(c.$$scope={dirty:a,ctx:i}),n.$set(c),a&16&&C(o,i[4]);let E=l;l=$(i),l===E?h[l].p(i,a):(K(),T(h[E],1,1,()=>{h[E]=null}),q(),d=h[l],d?d.p(i,a):(d=h[l]=k[l](i),d.c()),L(d,1),d.m(m,null))},i(i){w||(L(n.$$.fragment,i),L(d),w=!0)},o(i){T(n.$$.fragment,i),T(d),w=!1},d(i){i&&p(e),G(n),h[l].d(),v=!1,b()}}}function ce(r,e,n){let t=!1,s=!0,o=!1,f=ae,m,l;function d(){t=this.checked,n(0,t)}function w(){s=this.checked,n(1,s)}function v(){o=this.checked,n(3,o)}function b(){f=this.value,n(4,f)}const k=(h,$)=>h==="position"?void 0:$;return r.$$.update=()=>{r.$$.dirty&3&&n(2,m=[...s?[Z()]:[],...t?[{rehypePlugin:ne}]:[],ee,te]),r.$$.dirty&4&&n(5,l=z(m))},[t,s,m,o,f,l,d,w,v,b,k]}class he extends X{constructor(e){super(),Y(this,e,ce,ie,J,{})}}export{he as component};
