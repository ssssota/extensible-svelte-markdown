function x(){}function k(t,n){for(const e in n)t[e]=n[e];return t}function w(t){return t()}function C(){return Object.create(null)}function j(t){t.forEach(w)}function M(t){return typeof t=="function"}function A(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function B(t){return Object.keys(t).length===0}function v(t,...n){if(t==null){for(const o of n)o(void 0);return x}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function F(t,n,e){t.$$.on_destroy.push(v(n,e))}function P(t,n,e,o){if(t){const r=y(t,n,e,o);return t[0](r)}}function y(t,n,e,o){return t[1]&&o?k(e.ctx.slice(),t[1](o(n))):e.ctx}function S(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],_=Math.max(n.dirty.length,r.length);for(let s=0;s<_;s+=1)l[s]=n.dirty[s]|r[s];return l}return n.dirty|r}return n.dirty}function U(t,n,e,o,r,l){if(r){const _=y(n,e,o,l);t.p(_,r)}}function D(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function G(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}const H=["",!0,1,"true","contenteditable"];let i;function d(t){i=t}function f(){if(!i)throw new Error("Function called outside component initialization");return i}function I(t){f().$$.on_mount.push(t)}function J(t){f().$$.after_update.push(t)}function K(t,n){return f().$$.context.set(t,n),n}function L(t){return f().$$.context.get(t)}const a=[],b=[];let u=[];const g=[],m=Promise.resolve();let p=!1;function E(){p||(p=!0,m.then(q))}function N(){return E(),m}function O(t){u.push(t)}const h=new Set;let c=0;function q(){if(c!==0)return;const t=i;do{try{for(;c<a.length;){const n=a[c];c++,d(n),z(n.$$)}}catch(n){throw a.length=0,c=0,n}for(d(null),a.length=0,c=0;b.length;)b.pop()();for(let n=0;n<u.length;n+=1){const e=u[n];h.has(e)||(h.add(e),e())}u.length=0}while(a.length);for(;g.length;)g.pop()();p=!1,h.clear(),d(t)}function z(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function Q(t){const n=[],e=[];u.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),u=n}export{a as A,E as B,J as a,b,P as c,S as d,F as e,k as f,D as g,G as h,K as i,L as j,H as k,C as l,q as m,x as n,I as o,M as p,B as q,j as r,A as s,N as t,U as u,O as v,Q as w,i as x,d as y,w as z};
