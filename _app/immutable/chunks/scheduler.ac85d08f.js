function x(){}function k(t,n){for(const e in n)t[e]=n[e];return t}function w(t){return t()}function z(){return Object.create(null)}function j(t){t.forEach(w)}function M(t){return typeof t=="function"}function S(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function A(t){return Object.keys(t).length===0}function v(t,...n){if(t==null){for(const o of n)o(void 0);return x}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function B(t,n,e){t.$$.on_destroy.push(v(n,e))}function F(t,n,e,o){if(t){const r=m(t,n,e,o);return t[0](r)}}function m(t,n,e,o){return t[1]&&o?k(e.ctx.slice(),t[1](o(n))):e.ctx}function P(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const i=[],_=Math.max(n.dirty.length,r.length);for(let u=0;u<_;u+=1)i[u]=n.dirty[u]|r[u];return i}return n.dirty|r}return n.dirty}function U(t,n,e,o,r,i){if(r){const _=m(n,e,o,i);t.p(_,r)}}function D(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function G(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function H(t,n){const e={};n=new Set(n);for(const o in t)!n.has(o)&&o[0]!=="$"&&(e[o]=t[o]);return e}const I=["",!0,1,"true","contenteditable"];let l;function d(t){l=t}function f(){if(!l)throw new Error("Function called outside component initialization");return l}function J(t){f().$$.on_mount.push(t)}function K(t){f().$$.after_update.push(t)}function L(t,n){return f().$$.context.set(t,n),n}function N(t){return f().$$.context.get(t)}const a=[],b=[];let s=[];const g=[],y=Promise.resolve();let p=!1;function E(){p||(p=!0,y.then(O))}function Q(){return E(),y}function C(t){s.push(t)}const h=new Set;let c=0;function O(){if(c!==0)return;const t=l;do{try{for(;c<a.length;){const n=a[c];c++,d(n),q(n.$$)}}catch(n){throw a.length=0,c=0,n}for(d(null),a.length=0,c=0;b.length;)b.pop()();for(let n=0;n<s.length;n+=1){const e=s[n];h.has(e)||(h.add(e),e())}s.length=0}while(a.length);for(;g.length;)g.pop()();p=!1,h.clear(),d(t)}function q(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(C)}}function R(t){const n=[],e=[];s.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),s=n}export{w as A,a as B,E as C,K as a,b,F as c,P as d,B as e,k as f,D as g,G as h,L as i,N as j,H as k,I as l,z as m,x as n,J as o,O as p,M as q,j as r,S as s,Q as t,U as u,A as v,C as w,R as x,l as y,d as z};
