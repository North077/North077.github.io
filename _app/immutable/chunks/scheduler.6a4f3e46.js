function y(){}function w(t,n){for(const e in n)t[e]=n[e];return t}function j(t){return t()}function P(){return Object.create(null)}function E(t){t.forEach(j)}function q(t){return typeof t=="function"}function S(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let i;function U(t,n){return i||(i=document.createElement("a")),i.href=n,t===i.href}function A(t){return Object.keys(t).length===0}function v(t,...n){if(t==null){for(const r of n)r(void 0);return y}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function B(t,n,e){t.$$.on_destroy.push(v(n,e))}function C(t,n,e,r){if(t){const o=m(t,n,e,r);return t[0](o)}}function m(t,n,e,r){return t[1]&&r?w(e.ctx.slice(),t[1](r(n))):e.ctx}function D(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const a=[],d=Math.max(n.dirty.length,o.length);for(let s=0;s<d;s+=1)a[s]=n.dirty[s]|o[s];return a}return n.dirty|o}return n.dirty}function G(t,n,e,r,o,a){if(o){const d=m(n,e,r,a);t.p(d,o)}}function H(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function I(t){return t&&q(t.destroy)?t.destroy:y}let f;function _(t){f=t}function x(){if(!f)throw new Error("Function called outside component initialization");return f}function J(t){x().$$.on_mount.push(t)}function K(t){x().$$.after_update.push(t)}const l=[],b=[];let u=[];const g=[],k=Promise.resolve();let p=!1;function O(){p||(p=!0,k.then(z))}function L(){return O(),k}function M(t){u.push(t)}const h=new Set;let c=0;function z(){if(c!==0)return;const t=f;do{try{for(;c<l.length;){const n=l[c];c++,_(n),F(n.$$)}}catch(n){throw l.length=0,c=0,n}for(_(null),l.length=0,c=0;b.length;)b.pop()();for(let n=0;n<u.length;n+=1){const e=u[n];h.has(e)||(h.add(e),e())}u.length=0}while(l.length);for(;g.length;)g.pop()();p=!1,h.clear(),_(t)}function F(t){if(t.fragment!==null){t.update(),E(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(M)}}function N(t){const n=[],e=[];u.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),u=n}export{K as a,b,C as c,D as d,B as e,U as f,H as g,I as h,P as i,z as j,q as k,A as l,M as m,y as n,J as o,N as p,f as q,E as r,S as s,L as t,G as u,_ as v,j as w,l as x,O as y};
