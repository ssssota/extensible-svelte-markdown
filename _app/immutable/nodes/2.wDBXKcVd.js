import{s as Y,a as z,u as B,g as G,b as J}from"../chunks/scheduler.rhMduGLH.js";import{S as K,i as P,e as g,k as Q,s as w,c as k,a as b,l as W,f as A,v as X,d as v,m as M,g as U,o as Z,h as u,q as H,r as N,u as x,t as ee,b as te,j as ae}from"../chunks/index.G9-W_JG9.js";import{e as V,u as se,d as le}from"../chunks/each.b3u9AODM.js";import{b as j}from"../chunks/paths.36mdMkUv.js";import{H as ne}from"../chunks/Header.4tHVS1zf.js";import{g as F}from"../chunks/utils.NkIrR4Yw.js";function O(f,t,a){const l=f.slice();return l[3]=t[a].slug,l[4]=t[a].markdown,l}function R(f,t){let a,l,n=F(t[4])+"",r,o,d;return{key:f,first:null,c(){a=g("li"),l=g("a"),r=ee(n),d=w(),this.h()},l(h){a=k(h,"LI",{});var c=b(a);l=k(c,"A",{href:!0});var p=b(l);r=te(p,n),p.forEach(v),d=A(c),c.forEach(v),this.h()},h(){M(l,"href",o=j+"/docs/"+t[3]),this.first=a},m(h,c){U(h,a,c),u(a,l),u(l,r),u(a,d)},p(h,c){t=h,c&1&&n!==(n=F(t[4])+"")&&ae(r,n),c&1&&o!==(o=j+"/docs/"+t[3])&&M(l,"href",o)},d(h){h&&v(a)}}}function oe(f){let t,a,l,n,r,o,d,h="Table of contents",c,p,_=[],S=new Map,C,y;a=new ne({});let E=V(f[0].docs);const T=e=>e[3];for(let e=0;e<E.length;e+=1){let s=O(f,E,e),m=T(s);S.set(m,_[e]=R(m,s))}const I=f[2].default,i=z(I,f,f[1],null);return{c(){t=g("div"),Q(a.$$.fragment),l=w(),n=g("main"),r=g("nav"),o=g("details"),d=g("summary"),d.textContent=h,c=w(),p=g("ol");for(let e=0;e<_.length;e+=1)_[e].c();C=w(),i&&i.c(),this.h()},l(e){t=k(e,"DIV",{class:!0});var s=b(t);W(a.$$.fragment,s),l=A(s),n=k(s,"MAIN",{class:!0});var m=b(n);r=k(m,"NAV",{});var q=b(r);o=k(q,"DETAILS",{});var $=b(o);d=k($,"SUMMARY",{"data-svelte-h":!0}),X(d)!=="svelte-1745bx1"&&(d.textContent=h),c=A($),p=k($,"OL",{});var D=b(p);for(let L=0;L<_.length;L+=1)_[L].l(D);D.forEach(v),$.forEach(v),q.forEach(v),C=A(m),i&&i.l(m),m.forEach(v),s.forEach(v),this.h()},h(){M(n,"class","svelte-12ei7v3"),M(t,"class","wrapper")},m(e,s){U(e,t,s),Z(a,t,null),u(t,l),u(t,n),u(n,r),u(r,o),u(o,d),u(o,c),u(o,p);for(let m=0;m<_.length;m+=1)_[m]&&_[m].m(p,null);u(n,C),i&&i.m(n,null),y=!0},p(e,[s]){s&1&&(E=V(e[0].docs),_=se(_,s,T,1,e,E,S,p,le,R,null,O)),i&&i.p&&(!y||s&2)&&B(i,I,e,e[1],y?J(I,e[1],s,null):G(e[1]),null)},i(e){y||(H(a.$$.fragment,e),H(i,e),y=!0)},o(e){N(a.$$.fragment,e),N(i,e),y=!1},d(e){e&&v(t),x(a);for(let s=0;s<_.length;s+=1)_[s].d();i&&i.d(e)}}}function re(f,t,a){let{$$slots:l={},$$scope:n}=t,{data:r}=t;return f.$$set=o=>{"data"in o&&a(0,r=o.data),"$$scope"in o&&a(1,n=o.$$scope)},[r,n,l]}class de extends K{constructor(t){super(),P(this,t,re,oe,Y,{data:0})}}export{de as component};
