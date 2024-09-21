var ee=Object.defineProperty;var te=(e,t,n)=>t in e?ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var C=(e,t,n)=>(te(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&c(f)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function c(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();function N(){}function Q(e){return e()}function R(){return Object.create(null)}function P(e){e.forEach(Q)}function W(e){return typeof e=="function"}function ne(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function le(e){return Object.keys(e).length===0}function _(e,t){e.appendChild(t)}function S(e,t,n){e.insertBefore(t,n||null)}function x(e){e.parentNode&&e.parentNode.removeChild(e)}function X(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function g(e){return document.createElement(e)}function Y(e){return document.createTextNode(e)}function O(){return Y(" ")}function re(e,t,n,c){return e.addEventListener(t,n,c),()=>e.removeEventListener(t,n,c)}function E(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ce(e){return Array.from(e.childNodes)}function oe(e,t){t=""+t,e.data!==t&&(e.data=t)}let T;function A(e){T=e}const j=[],q=[];let L=[];const F=[],fe=Promise.resolve();let M=!1;function se(){M||(M=!0,fe.then(Z))}function B(e){L.push(e)}const I=new Set;let k=0;function Z(){if(k!==0)return;const e=T;do{try{for(;k<j.length;){const t=j[k];k++,A(t),ie(t.$$)}}catch(t){throw j.length=0,k=0,t}for(A(null),j.length=0,k=0;q.length;)q.pop()();for(let t=0;t<L.length;t+=1){const n=L[t];I.has(n)||(I.add(n),n())}L.length=0}while(j.length);for(;F.length;)F.pop()();M=!1,I.clear(),A(e)}function ie(e){if(e.fragment!==null){e.update(),P(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(B)}}function ue(e){const t=[],n=[];L.forEach(c=>e.indexOf(c)===-1?t.push(c):n.push(c)),n.forEach(c=>c()),L=t}const ae=new Set;function de(e,t){e&&e.i&&(ae.delete(e),e.i(t))}function z(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function he(e,t,n){const{fragment:c,after_update:r}=e.$$;c&&c.m(t,n),B(()=>{const l=e.$$.on_mount.map(Q).filter(W);e.$$.on_destroy?e.$$.on_destroy.push(...l):P(l),e.$$.on_mount=[]}),r.forEach(B)}function _e(e,t){const n=e.$$;n.fragment!==null&&(ue(n.after_update),P(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function pe(e,t){e.$$.dirty[0]===-1&&(j.push(e),se(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function me(e,t,n,c,r,l,f=null,o=[-1]){const i=T;A(e);const s=e.$$={fragment:null,ctx:[],props:l,update:N,not_equal:r,bound:R(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(i?i.$$.context:[])),callbacks:R(),dirty:o,skip_bound:!1,root:t.target||i.$$.root};f&&f(s.root);let b=!1;if(s.ctx=n?n(e,t.props||{},(p,y,...$)=>{const w=$.length?$[0]:y;return s.ctx&&r(s.ctx[p],s.ctx[p]=w)&&(!s.skip_bound&&s.bound[p]&&s.bound[p](w),b&&pe(e,p)),y}):[],s.update(),b=!0,P(s.before_update),s.fragment=c?c(s.ctx):!1,t.target){if(t.hydrate){const p=ce(t.target);s.fragment&&s.fragment.l(p),p.forEach(x)}else s.fragment&&s.fragment.c();t.intro&&de(e.$$.fragment),he(e,t.target,t.anchor),Z()}A(i)}class ge{constructor(){C(this,"$$");C(this,"$$set")}$destroy(){_e(this,1),this.$destroy=N}$on(t,n){if(!W(n))return N;const c=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return c.push(n),()=>{const r=c.indexOf(n);r!==-1&&c.splice(r,1)}}$set(t){this.$$set&&!le(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const be="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(be);function K(e,t,n){const c=e.slice();return c[6]=t[n],c[8]=n,c}function U(e,t,n){const c=e.slice();return c[9]=t[n],c[10]=t,c[11]=n,c}function V(e){let t,n,c;return{c(){t=g("table"),n=g("td"),E(n,"class",c="z"+e[9])},m(r,l){S(r,t,l),_(t,n)},p(r,l){l&1&&c!==(c="z"+r[9])&&E(n,"class",c)},d(r){r&&x(t)}}}function D(e){let t,n,c,r,l=e[9]&&V(e);function f(){return e[3](e[8],e[11],e[9],e[10])}return{c(){t=g("td"),l&&l.c(),E(t,"class",n=[e[1],e[9]].map(J).join(" "))},m(o,i){S(o,t,i),l&&l.m(t,null),c||(r=re(t,"click",f),c=!0)},p(o,i){e=o,e[9]?l?l.p(e,i):(l=V(e),l.c(),l.m(t,null)):l&&(l.d(1),l=null),i&3&&n!==(n=[e[1],e[9]].map(J).join(" "))&&E(t,"class",n)},d(o){o&&x(t),l&&l.d(),c=!1,r()}}}function G(e){let t,n,c=z(e[6]),r=[];for(let l=0;l<c.length;l+=1)r[l]=D(U(e,c,l));return{c(){t=g("tr");for(let l=0;l<r.length;l+=1)r[l].c();n=O()},m(l,f){S(l,t,f);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(t,null);_(t,n)},p(l,f){if(f&7){c=z(l[6]);let o;for(o=0;o<c.length;o+=1){const i=U(l,c,o);r[o]?r[o].p(i,f):(r[o]=D(i),r[o].c(),r[o].m(t,n))}for(;o<r.length;o+=1)r[o].d(1);r.length=c.length}},d(l){l&&x(t),X(r,l)}}}function ye(e){let t,n,c,r,l,f,o,i,s,b,p,y=e[2].join(" - ")+"",$,w,m,h=z(e[0]),a=[];for(let u=0;u<h.length;u+=1)a[u]=G(K(e,h,u));return{c(){t=g("main"),n=g("h1"),n.textContent="Reversi",c=O(),r=g("table");for(let u=0;u<a.length;u+=1)a[u].c();l=O(),f=g("hr"),o=O(),i=g("table"),s=g("td"),s.innerHTML='<table><td class="z1"></td></table>',b=O(),p=g("td"),$=Y(y),w=O(),m=g("td"),m.innerHTML='<table><td class="z2"></td></table>',E(s,"class","x1-1"),E(p,"class","ej"),E(m,"class","x1-2")},m(u,v){S(u,t,v),_(t,n),_(t,c),_(t,r);for(let d=0;d<a.length;d+=1)a[d]&&a[d].m(r,null);_(t,l),_(t,f),_(t,o),_(t,i),_(i,s),_(i,b),_(i,p),_(p,$),_(i,w),_(i,m)},p(u,[v]){if(v&7){h=z(u[0]);let d;for(d=0;d<h.length;d+=1){const H=K(u,h,d);a[d]?a[d].p(H,v):(a[d]=G(H),a[d].c(),a[d].m(r,null))}for(;d<a.length;d+=1)a[d].d(1);a.length=h.length}v&4&&y!==(y=u[2].join(" - ")+"")&&oe($,y)},i:N,o:N,d(u){u&&x(t),X(a,u)}}}const J=(e,t)=>`x${t}-${e}`;function $e(e,t,n){const[c,r]=[10,15];var l=Array(c).fill().map(()=>Array(r).fill(0)),f=1,o=[0,0];return[l,f,o,(s,b,p,y)=>{l[s][b]||(n(0,y[b]=f,l),n(2,o[f-1]++,o),[[1,1],[1,0],[0,1],[1,-1],[-1,1],[-1,0],[0,-1],[-1,-1]].forEach(([$,w])=>{let[m,h]=[b,s],a=[];for(m=m+$,h=h+w;l[h]&&l[h][m]===[0,2,1][f];)a.push([h,m]),m=m+$,h=h+w;l[h]&&l[h][m]===f&&a.forEach(([u,v])=>{n(0,l[u][v]=f,l),n(2,o[f-1]++,o),n(2,o[[0,2,1][f]-1]--,o)})}),n(1,f=[2,1][f-1]),n(0,l))}]}class we extends ge{constructor(t){super(),me(this,t,$e,ye,ne,{})}}new we({target:document.getElementById("app")});
