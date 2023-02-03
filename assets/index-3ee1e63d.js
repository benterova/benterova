var Ql=Object.defineProperty;var Xl=(a,u,e)=>u in a?Ql(a,u,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[u]=e;var za=(a,u,e)=>(Xl(a,typeof u!="symbol"?u+"":u,e),e);(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&i(t)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();function Iu(){}function Hr(a,u){for(const e in u)a[e]=u[e];return a}function c1(a){return a()}function Ht(){return Object.create(null)}function fe(a){a.forEach(c1)}function ai(a){return typeof a=="function"}function $u(a,u){return a!=a?u==u:a!==u||a&&typeof a=="object"||typeof a=="function"}function u3(a){return Object.keys(a).length===0}function Nn(a,...u){if(a==null)return Iu;const e=a.subscribe(...u);return e.unsubscribe?()=>e.unsubscribe():e}function ua(a){let u;return Nn(a,e=>u=e)(),u}function S0(a,u,e){a.$$.on_destroy.push(Nn(u,e))}function be(a,u,e,i){if(a){const n=d1(a,u,e,i);return a[0](n)}}function d1(a,u,e,i){return a[1]&&i?Hr(e.ctx.slice(),a[1](i(u))):e.ctx}function Ae(a,u,e,i){if(a[2]&&i){const n=a[2](i(e));if(u.dirty===void 0)return n;if(typeof n=="object"){const r=[],t=Math.max(u.dirty.length,n.length);for(let o=0;o<t;o+=1)r[o]=u.dirty[o]|n[o];return r}return u.dirty|n}return u.dirty}function Be(a,u,e,i,n,r){if(n){const t=d1(u,e,i,r);a.p(t,n)}}function ye(a){if(a.ctx.length>32){const u=[],e=a.ctx.length/32;for(let i=0;i<e;i++)u[i]=-1;return u}return-1}function e3(a){const u={};for(const e in a)e[0]!=="$"&&(u[e]=a[e]);return u}function Gt(a,u){const e={};u=new Set(u);for(const i in a)!u.has(i)&&i[0]!=="$"&&(e[i]=a[i]);return e}function ce(a,u,e){return a.set(e),u}function a3(a){return a&&ai(a.destroy)?a.destroy:Iu}function eu(a,u){a.appendChild(u)}function Bu(a,u,e){a.insertBefore(u,e||null)}function Au(a){a.parentNode&&a.parentNode.removeChild(a)}function m1(a,u){for(let e=0;e<a.length;e+=1)a[e]&&a[e].d(u)}function Du(a){return document.createElement(a)}function oe(a){return document.createTextNode(a)}function fu(){return oe(" ")}function Dt(){return oe("")}function m0(a,u,e,i){return a.addEventListener(u,e,i),()=>a.removeEventListener(u,e,i)}function X(a,u,e){e==null?a.removeAttribute(u):a.getAttribute(u)!==e&&a.setAttribute(u,e)}function i3(a){return Array.from(a.childNodes)}function Fa(a,u){u=""+u,a.wholeText!==u&&(a.data=u)}function jn(a,u){a.value=u??""}function n3(a,u,{bubbles:e=!1,cancelable:i=!1}={}){const n=document.createEvent("CustomEvent");return n.initCustomEvent(a,e,i,u),n}let Pi;function zi(a){Pi=a}function ii(){if(!Pi)throw new Error("Function called outside component initialization");return Pi}function xt(a){ii().$$.on_mount.push(a)}function D0(a){ii().$$.on_destroy.push(a)}function Vi(){const a=ii();return(u,e,{cancelable:i=!1}={})=>{const n=a.$$.callbacks[u];if(n){const r=n3(u,e,{cancelable:i});return n.slice().forEach(t=>{t.call(a,r)}),!r.defaultPrevented}return!0}}function te(a,u){return ii().$$.context.set(a,u),u}function Ce(a){return ii().$$.context.get(a)}function X0(a,u){const e=a.$$.callbacks[u.type];e&&e.slice().forEach(i=>i.call(this,u))}const Oa=[],ba=[],vn=[],Gr=[],h1=Promise.resolve();let Vr=!1;function p1(){Vr||(Vr=!0,h1.then(F1))}function Ti(){return p1(),h1}function Ir(a){vn.push(a)}function ct(a){Gr.push(a)}const Qn=new Set;let Sa=0;function F1(){if(Sa!==0)return;const a=Pi;do{try{for(;Sa<Oa.length;){const u=Oa[Sa];Sa++,zi(u),r3(u.$$)}}catch(u){throw Oa.length=0,Sa=0,u}for(zi(null),Oa.length=0,Sa=0;ba.length;)ba.pop()();for(let u=0;u<vn.length;u+=1){const e=vn[u];Qn.has(e)||(Qn.add(e),e())}vn.length=0}while(Oa.length);for(;Gr.length;)Gr.pop()();Vr=!1,Qn.clear(),zi(a)}function r3(a){if(a.fragment!==null){a.update(),fe(a.before_update);const u=a.dirty;a.dirty=[-1],a.fragment&&a.fragment.p(a.ctx,u),a.after_update.forEach(Ir)}}const fn=new Set;let ga;function Fe(){ga={r:0,c:[],p:ga}}function ge(){ga.r||fe(ga.c),ga=ga.p}function au(a,u){a&&a.i&&(fn.delete(a),a.i(u))}function su(a,u,e,i){if(a&&a.o){if(fn.has(a))return;fn.add(a),ga.c.push(()=>{fn.delete(a),i&&(e&&a.d(1),i())}),a.o(u)}else i&&i()}function dt(a,u,e){const i=a.$$.props[u];i!==void 0&&(a.$$.bound[i]=e,e(a.$$.ctx[i]))}function ju(a){a&&a.c()}function Su(a,u,e,i){const{fragment:n,after_update:r}=a.$$;n&&n.m(u,e),i||Ir(()=>{const t=a.$$.on_mount.map(c1).filter(ai);a.$$.on_destroy?a.$$.on_destroy.push(...t):fe(t),a.$$.on_mount=[]}),r.forEach(Ir)}function Mu(a,u){const e=a.$$;e.fragment!==null&&(fe(e.on_destroy),e.fragment&&e.fragment.d(u),e.on_destroy=e.fragment=null,e.ctx=[])}function t3(a,u){a.$$.dirty[0]===-1&&(Oa.push(a),p1(),a.$$.dirty.fill(0)),a.$$.dirty[u/31|0]|=1<<u%31}function Qu(a,u,e,i,n,r,t,o=[-1]){const s=Pi;zi(a);const l=a.$$={fragment:null,ctx:[],props:r,update:Iu,not_equal:n,bound:Ht(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u.context||(s?s.$$.context:[])),callbacks:Ht(),dirty:o,skip_bound:!1,root:u.target||s.$$.root};t&&t(l.root);let E=!1;if(l.ctx=e?e(a,u.props||{},(D,x,...c)=>{const p=c.length?c[0]:x;return l.ctx&&n(l.ctx[D],l.ctx[D]=p)&&(!l.skip_bound&&l.bound[D]&&l.bound[D](p),E&&t3(a,D)),x}):[],l.update(),E=!0,fe(l.before_update),l.fragment=i?i(l.ctx):!1,u.target){if(u.hydrate){const D=i3(u.target);l.fragment&&l.fragment.l(D),D.forEach(Au)}else l.fragment&&l.fragment.c();u.intro&&au(a.$$.fragment),Su(a,u.target,u.anchor,u.customElement),F1()}zi(s)}class Xu{$destroy(){Mu(this,1),this.$destroy=Iu}$on(u,e){if(!ai(e))return Iu;const i=this.$$.callbacks[u]||(this.$$.callbacks[u]=[]);return i.push(e),()=>{const n=i.indexOf(e);n!==-1&&i.splice(n,1)}}$set(u){this.$$set&&!u3(u)&&(this.$$.skip_bound=!0,this.$$set(u),this.$$.skip_bound=!1)}}function Vt(a){let u,e;const i=a[2].default,n=be(i,a,a[1],null);return{c(){u=Du("div"),n&&n.c(),X(u,"class","hero-background svelte-4njsb7")},m(r,t){Bu(r,u,t),n&&n.m(u,null),e=!0},p(r,t){n&&n.p&&(!e||t&2)&&Be(n,i,r,r[1],e?Ae(i,r[1],t,null):ye(r[1]),null)},i(r){e||(au(n,r),e=!0)},o(r){su(n,r),e=!1},d(r){r&&Au(u),n&&n.d(r)}}}function o3(a){let u,e,i,n,r=a[0]&&Vt(a);return{c(){u=Du("section"),e=Du("div"),i=Du("div"),r&&r.c(),X(i,"class","hero-body"),X(e,"class","hero is-large"),X(u,"class","section main-hero svelte-4njsb7")},m(t,o){Bu(t,u,o),eu(u,e),eu(e,i),r&&r.m(i,null),n=!0},p(t,[o]){t[0]?r?(r.p(t,o),o&1&&au(r,1)):(r=Vt(t),r.c(),au(r,1),r.m(i,null)):r&&(Fe(),su(r,1,1,()=>{r=null}),ge())},i(t){n||(au(r),n=!0)},o(t){su(r),n=!1},d(t){t&&Au(u),r&&r.d()}}}function s3(a,u,e){let{$$slots:i={},$$scope:n}=u,{showBackground:r=!1}=u;return a.$$set=t=>{"showBackground"in t&&e(0,r=t.showBackground),"$$scope"in t&&e(1,n=t.$$scope)},[r,n,i]}class l3 extends Xu{constructor(u){super(),Qu(this,u,s3,o3,$u,{showBackground:0})}}function E3(a){let u;return{c(){u=Du("div"),u.innerHTML=`<div class="column is-one-third"><div id="work-section"><img src="/img/cqc-example.jpg"/></div></div> 
  <div class="is-divider-vertical"></div> 
  <div class="column"><h1 class="title">Cultural Intelligence Center</h1> 
    <h2 class="subtitle">Lead Software Engineer</h2> 
    <div class="content"><div class="block"><p>An e-learning platform for cultural intelligence training. I was the
          acting lead software engineer of the application, and I was
          responsible for the development of the platform&#39;s front-end and
          back-end. I also educated the other developers on the application
          structure, trained them on best practices, and helped them to become
          familiar with our technology stack.</p></div> 
      <div class="block"><p>The project I&#39;m most proud of during my time developing this
          application is the development of a scalable PDF report generation
          solution. Using AWS Lambda to handle the rendering and storage of
          generated reports allowed for us to reduce worker and web load, and
          decrease costs due to AWS&#39;s pay-per-use model, which ended up being
          nearly free with current usage.</p></div> 
      <div class="block"><h3>Technologies Used:</h3> 
        <ul><li>Ruby on Rails</li> 
          <li>React</li> 
          <li>PostgreSQL</li> 
          <li>Redis</li> 
          <li>Redux</li> 
          <li>GraphQL (Apollo)</li> 
          <li>Webpack</li> 
          <li>TypeScript</li> 
          <li>CircleCI</li> 
          <li>Cypress</li> 
          <li>AWS Lambda</li></ul></div></div></div>`,X(u,"class","columns")},m(e,i){Bu(e,u,i)},p:Iu,i:Iu,o:Iu,d(e){e&&Au(u)}}}class D3 extends Xu{constructor(u){super(),Qu(this,u,null,E3,$u,{})}}function x3(a){let u;return{c(){u=Du("div"),u.innerHTML=`<div class="column"><h1 class="title">Spry Ideas</h1> 
    <h2 class="subtitle">Lead Developer / Marketing Automation Specialist</h2> 
    <div class="content"><div class="block"><p>A full-service marketing agency that specialized in marketing
          automation, SEO, and web development. I was the lead developer and
          marketing automation specialist for the agency, and I was responsible
          for implementing marketing automation solutions for both the agency
          and it&#39;s clients.</p></div> 
      <div class="block"><p>The project I&#39;m most proud of during my time with Spry Ideas is the
          WordPress plugin development I did for the agency. I developed several
          reporting and design solutions for client websites using the WordPress
          API.</p></div> 
      <div class="block"><h3>Technologies Used:</h3> 
        <ul><li>WordPress</li> 
          <li>WebFlow</li> 
          <li>PHP</li> 
          <li>MySQL</li> 
          <li>Litmus</li> 
          <li>MJML</li> 
          <li>Ruby on Rails</li> 
          <li>Salesforce Pardot</li> 
          <li>SharpSpring</li></ul></div> 
      <div class="block"><p><i>Spry Ideas has been closed as of 2020</i></p></div></div></div> 
  <div class="is-divider-vertical"></div> 
  <div class="column is-one-third"><div id="work-section"><figure class="image is-centered"><img src="/img/spry.png"/></figure></div></div>`,X(u,"class","columns")},m(e,i){Bu(e,u,i)},p:Iu,i:Iu,o:Iu,d(e){e&&Au(u)}}}class c3 extends Xu{constructor(u){super(),Qu(this,u,null,x3,$u,{})}}function d3(a){let u,e,i,n,r,t,o,s,l,E,D;return t=new D3({}),E=new c3({}),{c(){u=Du("section"),e=Du("div"),e.innerHTML=`<h1 class="title has-text-centered m-6">Professional Work</h1> 
    <p class="subtitle has-text-centered">Stuff I did for money.</p>`,i=fu(),n=Du("div"),r=fu(),ju(t.$$.fragment),o=fu(),s=Du("div"),l=fu(),ju(E.$$.fragment),X(e,"class","block"),X(n,"class","is-divider"),X(s,"class","is-divider"),X(u,"id","work"),X(u,"class","section")},m(x,c){Bu(x,u,c),eu(u,e),eu(u,i),eu(u,n),eu(u,r),Su(t,u,null),eu(u,o),eu(u,s),eu(u,l),Su(E,u,null),D=!0},p:Iu,i(x){D||(au(t.$$.fragment,x),au(E.$$.fragment,x),D=!0)},o(x){su(t.$$.fragment,x),su(E.$$.fragment,x),D=!1},d(x){x&&Au(u),Mu(t),Mu(E)}}}class m3 extends Xu{constructor(u){super(),Qu(this,u,null,d3,$u,{})}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mt="149",h3=0,It=1,p3=2,g1=1,k1=2,fi=3,aa=0,ae=1,Qe=2,ea=0,qa=1,Jt=2,Ot=3,Wt=4,F3=5,Wa=100,g3=101,k3=102,Ut=103,$t=104,C3=200,v3=201,f3=202,b3=203,C1=204,v1=205,A3=206,B3=207,y3=208,z3=209,S3=210,M3=0,j3=1,P3=2,Jr=3,T3=4,w3=5,_3=6,L3=7,ht=0,R3=1,K3=2,je=0,N3=1,H3=2,G3=3,f1=4,V3=5,b1=300,Qa=301,Xa=302,Or=303,Wr=304,Hn=306,Ur=1e3,de=1001,$r=1002,h0=1003,qt=1004,Xn=1005,re=1006,I3=1007,wi=1008,Aa=1009,J3=1010,O3=1011,A1=1012,W3=1013,ka=1014,Ca=1015,_i=1016,U3=1017,$3=1018,Za=1020,q3=1021,me=1023,Z3=1024,Y3=1025,va=1026,ui=1027,Q3=1028,X3=1029,uE=1030,eE=1031,aE=1033,ur=33776,er=33777,ar=33778,ir=33779,Zt=35840,Yt=35841,Qt=35842,Xt=35843,iE=36196,uo=37492,eo=37496,ao=37808,io=37809,no=37810,ro=37811,to=37812,oo=37813,so=37814,lo=37815,Eo=37816,Do=37817,xo=37818,co=37819,mo=37820,ho=37821,nr=36492,nE=36283,po=36284,Fo=36285,go=36286,ia=3e3,t0=3001,rE=3200,tE=3201,pt=0,oE=1,ze="srgb",Li="srgb-linear",rr=7680,sE=519,ko=35044,Co="300 es",qr=1035;class ni{addEventListener(u,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[u]===void 0&&(i[u]=[]),i[u].indexOf(e)===-1&&i[u].push(e)}hasEventListener(u,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[u]!==void 0&&i[u].indexOf(e)!==-1}removeEventListener(u,e){if(this._listeners===void 0)return;const n=this._listeners[u];if(n!==void 0){const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(u){if(this._listeners===void 0)return;const i=this._listeners[u.type];if(i!==void 0){u.target=this;const n=i.slice(0);for(let r=0,t=n.length;r<t;r++)n[r].call(this,u);u.target=null}}}const L0=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tr=Math.PI/180,vo=180/Math.PI;function ri(){const a=Math.random()*4294967295|0,u=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(L0[a&255]+L0[a>>8&255]+L0[a>>16&255]+L0[a>>24&255]+"-"+L0[u&255]+L0[u>>8&255]+"-"+L0[u>>16&15|64]+L0[u>>24&255]+"-"+L0[e&63|128]+L0[e>>8&255]+"-"+L0[e>>16&255]+L0[e>>24&255]+L0[i&255]+L0[i>>8&255]+L0[i>>16&255]+L0[i>>24&255]).toLowerCase()}function V0(a,u,e){return Math.max(u,Math.min(e,a))}function lE(a,u){return(a%u+u)%u}function or(a,u,e){return(1-e)*a+e*u}function fo(a){return(a&a-1)===0&&a!==0}function Zr(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Wi(a,u){switch(u.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Z0(a,u){switch(u.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class du{constructor(u=0,e=0){du.prototype.isVector2=!0,this.x=u,this.y=e}get width(){return this.x}set width(u){this.x=u}get height(){return this.y}set height(u){this.y=u}set(u,e){return this.x=u,this.y=e,this}setScalar(u){return this.x=u,this.y=u,this}setX(u){return this.x=u,this}setY(u){return this.y=u,this}setComponent(u,e){switch(u){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+u)}return this}getComponent(u){switch(u){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+u)}}clone(){return new this.constructor(this.x,this.y)}copy(u){return this.x=u.x,this.y=u.y,this}add(u){return this.x+=u.x,this.y+=u.y,this}addScalar(u){return this.x+=u,this.y+=u,this}addVectors(u,e){return this.x=u.x+e.x,this.y=u.y+e.y,this}addScaledVector(u,e){return this.x+=u.x*e,this.y+=u.y*e,this}sub(u){return this.x-=u.x,this.y-=u.y,this}subScalar(u){return this.x-=u,this.y-=u,this}subVectors(u,e){return this.x=u.x-e.x,this.y=u.y-e.y,this}multiply(u){return this.x*=u.x,this.y*=u.y,this}multiplyScalar(u){return this.x*=u,this.y*=u,this}divide(u){return this.x/=u.x,this.y/=u.y,this}divideScalar(u){return this.multiplyScalar(1/u)}applyMatrix3(u){const e=this.x,i=this.y,n=u.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(u){return this.x=Math.min(this.x,u.x),this.y=Math.min(this.y,u.y),this}max(u){return this.x=Math.max(this.x,u.x),this.y=Math.max(this.y,u.y),this}clamp(u,e){return this.x=Math.max(u.x,Math.min(e.x,this.x)),this.y=Math.max(u.y,Math.min(e.y,this.y)),this}clampScalar(u,e){return this.x=Math.max(u,Math.min(e,this.x)),this.y=Math.max(u,Math.min(e,this.y)),this}clampLength(u,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(u,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(u){return this.x*u.x+this.y*u.y}cross(u){return this.x*u.y-this.y*u.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(u){return Math.sqrt(this.distanceToSquared(u))}distanceToSquared(u){const e=this.x-u.x,i=this.y-u.y;return e*e+i*i}manhattanDistanceTo(u){return Math.abs(this.x-u.x)+Math.abs(this.y-u.y)}setLength(u){return this.normalize().multiplyScalar(u)}lerp(u,e){return this.x+=(u.x-this.x)*e,this.y+=(u.y-this.y)*e,this}lerpVectors(u,e,i){return this.x=u.x+(e.x-u.x)*i,this.y=u.y+(e.y-u.y)*i,this}equals(u){return u.x===this.x&&u.y===this.y}fromArray(u,e=0){return this.x=u[e],this.y=u[e+1],this}toArray(u=[],e=0){return u[e]=this.x,u[e+1]=this.y,u}fromBufferAttribute(u,e){return this.x=u.getX(e),this.y=u.getY(e),this}rotateAround(u,e){const i=Math.cos(e),n=Math.sin(e),r=this.x-u.x,t=this.y-u.y;return this.x=r*i-t*n+u.x,this.y=r*n+t*i+u.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ee{constructor(){ee.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(u,e,i,n,r,t,o,s,l){const E=this.elements;return E[0]=u,E[1]=n,E[2]=o,E[3]=e,E[4]=r,E[5]=s,E[6]=i,E[7]=t,E[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(u){const e=this.elements,i=u.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(u,e,i){return u.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(u){const e=u.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(u){return this.multiplyMatrices(this,u)}premultiply(u){return this.multiplyMatrices(u,this)}multiplyMatrices(u,e){const i=u.elements,n=e.elements,r=this.elements,t=i[0],o=i[3],s=i[6],l=i[1],E=i[4],D=i[7],x=i[2],c=i[5],p=i[8],d=n[0],m=n[3],h=n[6],F=n[1],g=n[4],C=n[7],v=n[2],A=n[5],M=n[8];return r[0]=t*d+o*F+s*v,r[3]=t*m+o*g+s*A,r[6]=t*h+o*C+s*M,r[1]=l*d+E*F+D*v,r[4]=l*m+E*g+D*A,r[7]=l*h+E*C+D*M,r[2]=x*d+c*F+p*v,r[5]=x*m+c*g+p*A,r[8]=x*h+c*C+p*M,this}multiplyScalar(u){const e=this.elements;return e[0]*=u,e[3]*=u,e[6]*=u,e[1]*=u,e[4]*=u,e[7]*=u,e[2]*=u,e[5]*=u,e[8]*=u,this}determinant(){const u=this.elements,e=u[0],i=u[1],n=u[2],r=u[3],t=u[4],o=u[5],s=u[6],l=u[7],E=u[8];return e*t*E-e*o*l-i*r*E+i*o*s+n*r*l-n*t*s}invert(){const u=this.elements,e=u[0],i=u[1],n=u[2],r=u[3],t=u[4],o=u[5],s=u[6],l=u[7],E=u[8],D=E*t-o*l,x=o*s-E*r,c=l*r-t*s,p=e*D+i*x+n*c;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/p;return u[0]=D*d,u[1]=(n*l-E*i)*d,u[2]=(o*i-n*t)*d,u[3]=x*d,u[4]=(E*e-n*s)*d,u[5]=(n*r-o*e)*d,u[6]=c*d,u[7]=(i*s-l*e)*d,u[8]=(t*e-i*r)*d,this}transpose(){let u;const e=this.elements;return u=e[1],e[1]=e[3],e[3]=u,u=e[2],e[2]=e[6],e[6]=u,u=e[5],e[5]=e[7],e[7]=u,this}getNormalMatrix(u){return this.setFromMatrix4(u).invert().transpose()}transposeIntoArray(u){const e=this.elements;return u[0]=e[0],u[1]=e[3],u[2]=e[6],u[3]=e[1],u[4]=e[4],u[5]=e[7],u[6]=e[2],u[7]=e[5],u[8]=e[8],this}setUvTransform(u,e,i,n,r,t,o){const s=Math.cos(r),l=Math.sin(r);return this.set(i*s,i*l,-i*(s*t+l*o)+t+u,-n*l,n*s,-n*(-l*t+s*o)+o+e,0,0,1),this}scale(u,e){return this.premultiply(sr.makeScale(u,e)),this}rotate(u){return this.premultiply(sr.makeRotation(-u)),this}translate(u,e){return this.premultiply(sr.makeTranslation(u,e)),this}makeTranslation(u,e){return this.set(1,0,u,0,1,e,0,0,1),this}makeRotation(u){const e=Math.cos(u),i=Math.sin(u);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(u,e){return this.set(u,0,0,0,e,0,0,0,1),this}equals(u){const e=this.elements,i=u.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(u,e=0){for(let i=0;i<9;i++)this.elements[i]=u[i+e];return this}toArray(u=[],e=0){const i=this.elements;return u[e]=i[0],u[e+1]=i[1],u[e+2]=i[2],u[e+3]=i[3],u[e+4]=i[4],u[e+5]=i[5],u[e+6]=i[6],u[e+7]=i[7],u[e+8]=i[8],u}clone(){return new this.constructor().fromArray(this.elements)}}const sr=new ee;function B1(a){for(let u=a.length-1;u>=0;--u)if(a[u]>=65535)return!0;return!1}function Ri(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function fa(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function bn(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const lr={[ze]:{[Li]:fa},[Li]:{[ze]:bn}},H0={legacyMode:!0,get workingColorSpace(){return Li},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,u,e){if(this.legacyMode||u===e||!u||!e)return a;if(lr[u]&&lr[u][e]!==void 0){const i=lr[u][e];return a.r=i(a.r),a.g=i(a.g),a.b=i(a.b),a}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(a,u){return this.convert(a,this.workingColorSpace,u)},toWorkingColorSpace:function(a,u){return this.convert(a,u,this.workingColorSpace)}},y1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},k0={r:0,g:0,b:0},Ee={h:0,s:0,l:0},Ui={h:0,s:0,l:0};function Er(a,u,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?a+(u-a)*6*e:e<1/2?u:e<2/3?a+(u-a)*6*(2/3-e):a}function $i(a,u){return u.r=a.r,u.g=a.g,u.b=a.b,u}class a0{constructor(u,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&i===void 0?this.set(u):this.setRGB(u,e,i)}set(u){return u&&u.isColor?this.copy(u):typeof u=="number"?this.setHex(u):typeof u=="string"&&this.setStyle(u),this}setScalar(u){return this.r=u,this.g=u,this.b=u,this}setHex(u,e=ze){return u=Math.floor(u),this.r=(u>>16&255)/255,this.g=(u>>8&255)/255,this.b=(u&255)/255,H0.toWorkingColorSpace(this,e),this}setRGB(u,e,i,n=H0.workingColorSpace){return this.r=u,this.g=e,this.b=i,H0.toWorkingColorSpace(this,n),this}setHSL(u,e,i,n=H0.workingColorSpace){if(u=lE(u,1),e=V0(e,0,1),i=V0(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,t=2*i-r;this.r=Er(t,r,u+1/3),this.g=Er(t,r,u),this.b=Er(t,r,u-1/3)}return H0.toWorkingColorSpace(this,n),this}setStyle(u,e=ze){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+u+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(u)){let r;const t=n[1],o=n[2];switch(t){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,H0.toWorkingColorSpace(this,e),i(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,H0.toWorkingColorSpace(this,e),i(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const s=parseFloat(r[1])/360,l=parseFloat(r[2])/100,E=parseFloat(r[3])/100;return i(r[4]),this.setHSL(s,l,E,e)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(u)){const r=n[1],t=r.length;if(t===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,H0.toWorkingColorSpace(this,e),this;if(t===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,H0.toWorkingColorSpace(this,e),this}return u&&u.length>0?this.setColorName(u,e):this}setColorName(u,e=ze){const i=y1[u.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+u),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(u){return this.r=u.r,this.g=u.g,this.b=u.b,this}copySRGBToLinear(u){return this.r=fa(u.r),this.g=fa(u.g),this.b=fa(u.b),this}copyLinearToSRGB(u){return this.r=bn(u.r),this.g=bn(u.g),this.b=bn(u.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(u=ze){return H0.fromWorkingColorSpace($i(this,k0),u),V0(k0.r*255,0,255)<<16^V0(k0.g*255,0,255)<<8^V0(k0.b*255,0,255)<<0}getHexString(u=ze){return("000000"+this.getHex(u).toString(16)).slice(-6)}getHSL(u,e=H0.workingColorSpace){H0.fromWorkingColorSpace($i(this,k0),e);const i=k0.r,n=k0.g,r=k0.b,t=Math.max(i,n,r),o=Math.min(i,n,r);let s,l;const E=(o+t)/2;if(o===t)s=0,l=0;else{const D=t-o;switch(l=E<=.5?D/(t+o):D/(2-t-o),t){case i:s=(n-r)/D+(n<r?6:0);break;case n:s=(r-i)/D+2;break;case r:s=(i-n)/D+4;break}s/=6}return u.h=s,u.s=l,u.l=E,u}getRGB(u,e=H0.workingColorSpace){return H0.fromWorkingColorSpace($i(this,k0),e),u.r=k0.r,u.g=k0.g,u.b=k0.b,u}getStyle(u=ze){return H0.fromWorkingColorSpace($i(this,k0),u),u!==ze?`color(${u} ${k0.r} ${k0.g} ${k0.b})`:`rgb(${k0.r*255|0},${k0.g*255|0},${k0.b*255|0})`}offsetHSL(u,e,i){return this.getHSL(Ee),Ee.h+=u,Ee.s+=e,Ee.l+=i,this.setHSL(Ee.h,Ee.s,Ee.l),this}add(u){return this.r+=u.r,this.g+=u.g,this.b+=u.b,this}addColors(u,e){return this.r=u.r+e.r,this.g=u.g+e.g,this.b=u.b+e.b,this}addScalar(u){return this.r+=u,this.g+=u,this.b+=u,this}sub(u){return this.r=Math.max(0,this.r-u.r),this.g=Math.max(0,this.g-u.g),this.b=Math.max(0,this.b-u.b),this}multiply(u){return this.r*=u.r,this.g*=u.g,this.b*=u.b,this}multiplyScalar(u){return this.r*=u,this.g*=u,this.b*=u,this}lerp(u,e){return this.r+=(u.r-this.r)*e,this.g+=(u.g-this.g)*e,this.b+=(u.b-this.b)*e,this}lerpColors(u,e,i){return this.r=u.r+(e.r-u.r)*i,this.g=u.g+(e.g-u.g)*i,this.b=u.b+(e.b-u.b)*i,this}lerpHSL(u,e){this.getHSL(Ee),u.getHSL(Ui);const i=or(Ee.h,Ui.h,e),n=or(Ee.s,Ui.s,e),r=or(Ee.l,Ui.l,e);return this.setHSL(i,n,r),this}equals(u){return u.r===this.r&&u.g===this.g&&u.b===this.b}fromArray(u,e=0){return this.r=u[e],this.g=u[e+1],this.b=u[e+2],this}toArray(u=[],e=0){return u[e]=this.r,u[e+1]=this.g,u[e+2]=this.b,u}fromBufferAttribute(u,e){return this.r=u.getX(e),this.g=u.getY(e),this.b=u.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}a0.NAMES=y1;let Ma;class z1{static getDataURL(u){if(/^data:/i.test(u.src)||typeof HTMLCanvasElement>"u")return u.src;let e;if(u instanceof HTMLCanvasElement)e=u;else{Ma===void 0&&(Ma=Ri("canvas")),Ma.width=u.width,Ma.height=u.height;const i=Ma.getContext("2d");u instanceof ImageData?i.putImageData(u,0,0):i.drawImage(u,0,0,u.width,u.height),e=Ma}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",u),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(u){if(typeof HTMLImageElement<"u"&&u instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&u instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&u instanceof ImageBitmap){const e=Ri("canvas");e.width=u.width,e.height=u.height;const i=e.getContext("2d");i.drawImage(u,0,0,u.width,u.height);const n=i.getImageData(0,0,u.width,u.height),r=n.data;for(let t=0;t<r.length;t++)r[t]=fa(r[t]/255)*255;return i.putImageData(n,0,0),e}else if(u.data){const e=u.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(fa(e[i]/255)*255):e[i]=fa(e[i]);return{data:e,width:u.width,height:u.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),u}}class S1{constructor(u=null){this.isSource=!0,this.uuid=ri(),this.data=u,this.version=0}set needsUpdate(u){u===!0&&this.version++}toJSON(u){const e=u===void 0||typeof u=="string";if(!e&&u.images[this.uuid]!==void 0)return u.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let t=0,o=n.length;t<o;t++)n[t].isDataTexture?r.push(Dr(n[t].image)):r.push(Dr(n[t]))}else r=Dr(n);i.url=r}return e||(u.images[this.uuid]=i),i}}function Dr(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?z1.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let EE=0;class W0 extends ni{constructor(u=W0.DEFAULT_IMAGE,e=W0.DEFAULT_MAPPING,i=de,n=de,r=re,t=wi,o=me,s=Aa,l=W0.DEFAULT_ANISOTROPY,E=ia){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:EE++}),this.uuid=ri(),this.name="",this.source=new S1(u),this.mipmaps=[],this.mapping=e,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=t,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=s,this.offset=new du(0,0),this.repeat=new du(1,1),this.center=new du(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=E,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(u){this.source.data=u}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(u){return this.name=u.name,this.source=u.source,this.mipmaps=u.mipmaps.slice(0),this.mapping=u.mapping,this.wrapS=u.wrapS,this.wrapT=u.wrapT,this.magFilter=u.magFilter,this.minFilter=u.minFilter,this.anisotropy=u.anisotropy,this.format=u.format,this.internalFormat=u.internalFormat,this.type=u.type,this.offset.copy(u.offset),this.repeat.copy(u.repeat),this.center.copy(u.center),this.rotation=u.rotation,this.matrixAutoUpdate=u.matrixAutoUpdate,this.matrix.copy(u.matrix),this.generateMipmaps=u.generateMipmaps,this.premultiplyAlpha=u.premultiplyAlpha,this.flipY=u.flipY,this.unpackAlignment=u.unpackAlignment,this.encoding=u.encoding,this.userData=JSON.parse(JSON.stringify(u.userData)),this.needsUpdate=!0,this}toJSON(u){const e=u===void 0||typeof u=="string";if(!e&&u.textures[this.uuid]!==void 0)return u.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(u).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(u.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(u){if(this.mapping!==b1)return u;if(u.applyMatrix3(this.matrix),u.x<0||u.x>1)switch(this.wrapS){case Ur:u.x=u.x-Math.floor(u.x);break;case de:u.x=u.x<0?0:1;break;case $r:Math.abs(Math.floor(u.x)%2)===1?u.x=Math.ceil(u.x)-u.x:u.x=u.x-Math.floor(u.x);break}if(u.y<0||u.y>1)switch(this.wrapT){case Ur:u.y=u.y-Math.floor(u.y);break;case de:u.y=u.y<0?0:1;break;case $r:Math.abs(Math.floor(u.y)%2)===1?u.y=Math.ceil(u.y)-u.y:u.y=u.y-Math.floor(u.y);break}return this.flipY&&(u.y=1-u.y),u}set needsUpdate(u){u===!0&&(this.version++,this.source.needsUpdate=!0)}}W0.DEFAULT_IMAGE=null;W0.DEFAULT_MAPPING=b1;W0.DEFAULT_ANISOTROPY=1;class M0{constructor(u=0,e=0,i=0,n=1){M0.prototype.isVector4=!0,this.x=u,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(u){this.z=u}get height(){return this.w}set height(u){this.w=u}set(u,e,i,n){return this.x=u,this.y=e,this.z=i,this.w=n,this}setScalar(u){return this.x=u,this.y=u,this.z=u,this.w=u,this}setX(u){return this.x=u,this}setY(u){return this.y=u,this}setZ(u){return this.z=u,this}setW(u){return this.w=u,this}setComponent(u,e){switch(u){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+u)}return this}getComponent(u){switch(u){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+u)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(u){return this.x=u.x,this.y=u.y,this.z=u.z,this.w=u.w!==void 0?u.w:1,this}add(u){return this.x+=u.x,this.y+=u.y,this.z+=u.z,this.w+=u.w,this}addScalar(u){return this.x+=u,this.y+=u,this.z+=u,this.w+=u,this}addVectors(u,e){return this.x=u.x+e.x,this.y=u.y+e.y,this.z=u.z+e.z,this.w=u.w+e.w,this}addScaledVector(u,e){return this.x+=u.x*e,this.y+=u.y*e,this.z+=u.z*e,this.w+=u.w*e,this}sub(u){return this.x-=u.x,this.y-=u.y,this.z-=u.z,this.w-=u.w,this}subScalar(u){return this.x-=u,this.y-=u,this.z-=u,this.w-=u,this}subVectors(u,e){return this.x=u.x-e.x,this.y=u.y-e.y,this.z=u.z-e.z,this.w=u.w-e.w,this}multiply(u){return this.x*=u.x,this.y*=u.y,this.z*=u.z,this.w*=u.w,this}multiplyScalar(u){return this.x*=u,this.y*=u,this.z*=u,this.w*=u,this}applyMatrix4(u){const e=this.x,i=this.y,n=this.z,r=this.w,t=u.elements;return this.x=t[0]*e+t[4]*i+t[8]*n+t[12]*r,this.y=t[1]*e+t[5]*i+t[9]*n+t[13]*r,this.z=t[2]*e+t[6]*i+t[10]*n+t[14]*r,this.w=t[3]*e+t[7]*i+t[11]*n+t[15]*r,this}divideScalar(u){return this.multiplyScalar(1/u)}setAxisAngleFromQuaternion(u){this.w=2*Math.acos(u.w);const e=Math.sqrt(1-u.w*u.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=u.x/e,this.y=u.y/e,this.z=u.z/e),this}setAxisAngleFromRotationMatrix(u){let e,i,n,r;const s=u.elements,l=s[0],E=s[4],D=s[8],x=s[1],c=s[5],p=s[9],d=s[2],m=s[6],h=s[10];if(Math.abs(E-x)<.01&&Math.abs(D-d)<.01&&Math.abs(p-m)<.01){if(Math.abs(E+x)<.1&&Math.abs(D+d)<.1&&Math.abs(p+m)<.1&&Math.abs(l+c+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const g=(l+1)/2,C=(c+1)/2,v=(h+1)/2,A=(E+x)/4,M=(D+d)/4,k=(p+m)/4;return g>C&&g>v?g<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(g),n=A/i,r=M/i):C>v?C<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(C),i=A/n,r=k/n):v<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(v),i=M/r,n=k/r),this.set(i,n,r,e),this}let F=Math.sqrt((m-p)*(m-p)+(D-d)*(D-d)+(x-E)*(x-E));return Math.abs(F)<.001&&(F=1),this.x=(m-p)/F,this.y=(D-d)/F,this.z=(x-E)/F,this.w=Math.acos((l+c+h-1)/2),this}min(u){return this.x=Math.min(this.x,u.x),this.y=Math.min(this.y,u.y),this.z=Math.min(this.z,u.z),this.w=Math.min(this.w,u.w),this}max(u){return this.x=Math.max(this.x,u.x),this.y=Math.max(this.y,u.y),this.z=Math.max(this.z,u.z),this.w=Math.max(this.w,u.w),this}clamp(u,e){return this.x=Math.max(u.x,Math.min(e.x,this.x)),this.y=Math.max(u.y,Math.min(e.y,this.y)),this.z=Math.max(u.z,Math.min(e.z,this.z)),this.w=Math.max(u.w,Math.min(e.w,this.w)),this}clampScalar(u,e){return this.x=Math.max(u,Math.min(e,this.x)),this.y=Math.max(u,Math.min(e,this.y)),this.z=Math.max(u,Math.min(e,this.z)),this.w=Math.max(u,Math.min(e,this.w)),this}clampLength(u,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(u,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(u){return this.x*u.x+this.y*u.y+this.z*u.z+this.w*u.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(u){return this.normalize().multiplyScalar(u)}lerp(u,e){return this.x+=(u.x-this.x)*e,this.y+=(u.y-this.y)*e,this.z+=(u.z-this.z)*e,this.w+=(u.w-this.w)*e,this}lerpVectors(u,e,i){return this.x=u.x+(e.x-u.x)*i,this.y=u.y+(e.y-u.y)*i,this.z=u.z+(e.z-u.z)*i,this.w=u.w+(e.w-u.w)*i,this}equals(u){return u.x===this.x&&u.y===this.y&&u.z===this.z&&u.w===this.w}fromArray(u,e=0){return this.x=u[e],this.y=u[e+1],this.z=u[e+2],this.w=u[e+3],this}toArray(u=[],e=0){return u[e]=this.x,u[e+1]=this.y,u[e+2]=this.z,u[e+3]=this.w,u}fromBufferAttribute(u,e){return this.x=u.getX(e),this.y=u.getY(e),this.z=u.getZ(e),this.w=u.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class se extends ni{constructor(u=1,e=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=u,this.height=e,this.depth=1,this.scissor=new M0(0,0,u,e),this.scissorTest=!1,this.viewport=new M0(0,0,u,e);const n={width:u,height:e,depth:1};this.texture=new W0(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:re,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(u,e,i=1){(this.width!==u||this.height!==e||this.depth!==i)&&(this.width=u,this.height=e,this.depth=i,this.texture.image.width=u,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,u,e),this.scissor.set(0,0,u,e)}clone(){return new this.constructor().copy(this)}copy(u){this.width=u.width,this.height=u.height,this.depth=u.depth,this.viewport.copy(u.viewport),this.texture=u.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},u.texture.image);return this.texture.source=new S1(e),this.depthBuffer=u.depthBuffer,this.stencilBuffer=u.stencilBuffer,u.depthTexture!==null&&(this.depthTexture=u.depthTexture.clone()),this.samples=u.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class M1 extends W0{constructor(u=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:u,width:e,height:i,depth:n},this.magFilter=h0,this.minFilter=h0,this.wrapR=de,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class DE extends W0{constructor(u=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:u,width:e,height:i,depth:n},this.magFilter=h0,this.minFilter=h0,this.wrapR=de,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ii{constructor(u=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=u,this._y=e,this._z=i,this._w=n}static slerpFlat(u,e,i,n,r,t,o){let s=i[n+0],l=i[n+1],E=i[n+2],D=i[n+3];const x=r[t+0],c=r[t+1],p=r[t+2],d=r[t+3];if(o===0){u[e+0]=s,u[e+1]=l,u[e+2]=E,u[e+3]=D;return}if(o===1){u[e+0]=x,u[e+1]=c,u[e+2]=p,u[e+3]=d;return}if(D!==d||s!==x||l!==c||E!==p){let m=1-o;const h=s*x+l*c+E*p+D*d,F=h>=0?1:-1,g=1-h*h;if(g>Number.EPSILON){const v=Math.sqrt(g),A=Math.atan2(v,h*F);m=Math.sin(m*A)/v,o=Math.sin(o*A)/v}const C=o*F;if(s=s*m+x*C,l=l*m+c*C,E=E*m+p*C,D=D*m+d*C,m===1-o){const v=1/Math.sqrt(s*s+l*l+E*E+D*D);s*=v,l*=v,E*=v,D*=v}}u[e]=s,u[e+1]=l,u[e+2]=E,u[e+3]=D}static multiplyQuaternionsFlat(u,e,i,n,r,t){const o=i[n],s=i[n+1],l=i[n+2],E=i[n+3],D=r[t],x=r[t+1],c=r[t+2],p=r[t+3];return u[e]=o*p+E*D+s*c-l*x,u[e+1]=s*p+E*x+l*D-o*c,u[e+2]=l*p+E*c+o*x-s*D,u[e+3]=E*p-o*D-s*x-l*c,u}get x(){return this._x}set x(u){this._x=u,this._onChangeCallback()}get y(){return this._y}set y(u){this._y=u,this._onChangeCallback()}get z(){return this._z}set z(u){this._z=u,this._onChangeCallback()}get w(){return this._w}set w(u){this._w=u,this._onChangeCallback()}set(u,e,i,n){return this._x=u,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(u){return this._x=u.x,this._y=u.y,this._z=u.z,this._w=u.w,this._onChangeCallback(),this}setFromEuler(u,e){const i=u._x,n=u._y,r=u._z,t=u._order,o=Math.cos,s=Math.sin,l=o(i/2),E=o(n/2),D=o(r/2),x=s(i/2),c=s(n/2),p=s(r/2);switch(t){case"XYZ":this._x=x*E*D+l*c*p,this._y=l*c*D-x*E*p,this._z=l*E*p+x*c*D,this._w=l*E*D-x*c*p;break;case"YXZ":this._x=x*E*D+l*c*p,this._y=l*c*D-x*E*p,this._z=l*E*p-x*c*D,this._w=l*E*D+x*c*p;break;case"ZXY":this._x=x*E*D-l*c*p,this._y=l*c*D+x*E*p,this._z=l*E*p+x*c*D,this._w=l*E*D-x*c*p;break;case"ZYX":this._x=x*E*D-l*c*p,this._y=l*c*D+x*E*p,this._z=l*E*p-x*c*D,this._w=l*E*D+x*c*p;break;case"YZX":this._x=x*E*D+l*c*p,this._y=l*c*D+x*E*p,this._z=l*E*p-x*c*D,this._w=l*E*D-x*c*p;break;case"XZY":this._x=x*E*D-l*c*p,this._y=l*c*D-x*E*p,this._z=l*E*p+x*c*D,this._w=l*E*D+x*c*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+t)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(u,e){const i=e/2,n=Math.sin(i);return this._x=u.x*n,this._y=u.y*n,this._z=u.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(u){const e=u.elements,i=e[0],n=e[4],r=e[8],t=e[1],o=e[5],s=e[9],l=e[2],E=e[6],D=e[10],x=i+o+D;if(x>0){const c=.5/Math.sqrt(x+1);this._w=.25/c,this._x=(E-s)*c,this._y=(r-l)*c,this._z=(t-n)*c}else if(i>o&&i>D){const c=2*Math.sqrt(1+i-o-D);this._w=(E-s)/c,this._x=.25*c,this._y=(n+t)/c,this._z=(r+l)/c}else if(o>D){const c=2*Math.sqrt(1+o-i-D);this._w=(r-l)/c,this._x=(n+t)/c,this._y=.25*c,this._z=(s+E)/c}else{const c=2*Math.sqrt(1+D-i-o);this._w=(t-n)/c,this._x=(r+l)/c,this._y=(s+E)/c,this._z=.25*c}return this._onChangeCallback(),this}setFromUnitVectors(u,e){let i=u.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(u.x)>Math.abs(u.z)?(this._x=-u.y,this._y=u.x,this._z=0,this._w=i):(this._x=0,this._y=-u.z,this._z=u.y,this._w=i)):(this._x=u.y*e.z-u.z*e.y,this._y=u.z*e.x-u.x*e.z,this._z=u.x*e.y-u.y*e.x,this._w=i),this.normalize()}angleTo(u){return 2*Math.acos(Math.abs(V0(this.dot(u),-1,1)))}rotateTowards(u,e){const i=this.angleTo(u);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(u,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(u){return this._x*u._x+this._y*u._y+this._z*u._z+this._w*u._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let u=this.length();return u===0?(this._x=0,this._y=0,this._z=0,this._w=1):(u=1/u,this._x=this._x*u,this._y=this._y*u,this._z=this._z*u,this._w=this._w*u),this._onChangeCallback(),this}multiply(u){return this.multiplyQuaternions(this,u)}premultiply(u){return this.multiplyQuaternions(u,this)}multiplyQuaternions(u,e){const i=u._x,n=u._y,r=u._z,t=u._w,o=e._x,s=e._y,l=e._z,E=e._w;return this._x=i*E+t*o+n*l-r*s,this._y=n*E+t*s+r*o-i*l,this._z=r*E+t*l+i*s-n*o,this._w=t*E-i*o-n*s-r*l,this._onChangeCallback(),this}slerp(u,e){if(e===0)return this;if(e===1)return this.copy(u);const i=this._x,n=this._y,r=this._z,t=this._w;let o=t*u._w+i*u._x+n*u._y+r*u._z;if(o<0?(this._w=-u._w,this._x=-u._x,this._y=-u._y,this._z=-u._z,o=-o):this.copy(u),o>=1)return this._w=t,this._x=i,this._y=n,this._z=r,this;const s=1-o*o;if(s<=Number.EPSILON){const c=1-e;return this._w=c*t+e*this._w,this._x=c*i+e*this._x,this._y=c*n+e*this._y,this._z=c*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(s),E=Math.atan2(l,o),D=Math.sin((1-e)*E)/l,x=Math.sin(e*E)/l;return this._w=t*D+this._w*x,this._x=i*D+this._x*x,this._y=n*D+this._y*x,this._z=r*D+this._z*x,this._onChangeCallback(),this}slerpQuaternions(u,e,i){return this.copy(u).slerp(e,i)}random(){const u=Math.random(),e=Math.sqrt(1-u),i=Math.sqrt(u),n=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(r),i*Math.cos(r),e*Math.sin(n))}equals(u){return u._x===this._x&&u._y===this._y&&u._z===this._z&&u._w===this._w}fromArray(u,e=0){return this._x=u[e],this._y=u[e+1],this._z=u[e+2],this._w=u[e+3],this._onChangeCallback(),this}toArray(u=[],e=0){return u[e]=this._x,u[e+1]=this._y,u[e+2]=this._z,u[e+3]=this._w,u}fromBufferAttribute(u,e){return this._x=u.getX(e),this._y=u.getY(e),this._z=u.getZ(e),this._w=u.getW(e),this}_onChange(u){return this._onChangeCallback=u,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class _{constructor(u=0,e=0,i=0){_.prototype.isVector3=!0,this.x=u,this.y=e,this.z=i}set(u,e,i){return i===void 0&&(i=this.z),this.x=u,this.y=e,this.z=i,this}setScalar(u){return this.x=u,this.y=u,this.z=u,this}setX(u){return this.x=u,this}setY(u){return this.y=u,this}setZ(u){return this.z=u,this}setComponent(u,e){switch(u){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+u)}return this}getComponent(u){switch(u){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+u)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(u){return this.x=u.x,this.y=u.y,this.z=u.z,this}add(u){return this.x+=u.x,this.y+=u.y,this.z+=u.z,this}addScalar(u){return this.x+=u,this.y+=u,this.z+=u,this}addVectors(u,e){return this.x=u.x+e.x,this.y=u.y+e.y,this.z=u.z+e.z,this}addScaledVector(u,e){return this.x+=u.x*e,this.y+=u.y*e,this.z+=u.z*e,this}sub(u){return this.x-=u.x,this.y-=u.y,this.z-=u.z,this}subScalar(u){return this.x-=u,this.y-=u,this.z-=u,this}subVectors(u,e){return this.x=u.x-e.x,this.y=u.y-e.y,this.z=u.z-e.z,this}multiply(u){return this.x*=u.x,this.y*=u.y,this.z*=u.z,this}multiplyScalar(u){return this.x*=u,this.y*=u,this.z*=u,this}multiplyVectors(u,e){return this.x=u.x*e.x,this.y=u.y*e.y,this.z=u.z*e.z,this}applyEuler(u){return this.applyQuaternion(bo.setFromEuler(u))}applyAxisAngle(u,e){return this.applyQuaternion(bo.setFromAxisAngle(u,e))}applyMatrix3(u){const e=this.x,i=this.y,n=this.z,r=u.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(u){return this.applyMatrix3(u).normalize()}applyMatrix4(u){const e=this.x,i=this.y,n=this.z,r=u.elements,t=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*t,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*t,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*t,this}applyQuaternion(u){const e=this.x,i=this.y,n=this.z,r=u.x,t=u.y,o=u.z,s=u.w,l=s*e+t*n-o*i,E=s*i+o*e-r*n,D=s*n+r*i-t*e,x=-r*e-t*i-o*n;return this.x=l*s+x*-r+E*-o-D*-t,this.y=E*s+x*-t+D*-r-l*-o,this.z=D*s+x*-o+l*-t-E*-r,this}project(u){return this.applyMatrix4(u.matrixWorldInverse).applyMatrix4(u.projectionMatrix)}unproject(u){return this.applyMatrix4(u.projectionMatrixInverse).applyMatrix4(u.matrixWorld)}transformDirection(u){const e=this.x,i=this.y,n=this.z,r=u.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(u){return this.x/=u.x,this.y/=u.y,this.z/=u.z,this}divideScalar(u){return this.multiplyScalar(1/u)}min(u){return this.x=Math.min(this.x,u.x),this.y=Math.min(this.y,u.y),this.z=Math.min(this.z,u.z),this}max(u){return this.x=Math.max(this.x,u.x),this.y=Math.max(this.y,u.y),this.z=Math.max(this.z,u.z),this}clamp(u,e){return this.x=Math.max(u.x,Math.min(e.x,this.x)),this.y=Math.max(u.y,Math.min(e.y,this.y)),this.z=Math.max(u.z,Math.min(e.z,this.z)),this}clampScalar(u,e){return this.x=Math.max(u,Math.min(e,this.x)),this.y=Math.max(u,Math.min(e,this.y)),this.z=Math.max(u,Math.min(e,this.z)),this}clampLength(u,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(u,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(u){return this.x*u.x+this.y*u.y+this.z*u.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(u){return this.normalize().multiplyScalar(u)}lerp(u,e){return this.x+=(u.x-this.x)*e,this.y+=(u.y-this.y)*e,this.z+=(u.z-this.z)*e,this}lerpVectors(u,e,i){return this.x=u.x+(e.x-u.x)*i,this.y=u.y+(e.y-u.y)*i,this.z=u.z+(e.z-u.z)*i,this}cross(u){return this.crossVectors(this,u)}crossVectors(u,e){const i=u.x,n=u.y,r=u.z,t=e.x,o=e.y,s=e.z;return this.x=n*s-r*o,this.y=r*t-i*s,this.z=i*o-n*t,this}projectOnVector(u){const e=u.lengthSq();if(e===0)return this.set(0,0,0);const i=u.dot(this)/e;return this.copy(u).multiplyScalar(i)}projectOnPlane(u){return xr.copy(this).projectOnVector(u),this.sub(xr)}reflect(u){return this.sub(xr.copy(u).multiplyScalar(2*this.dot(u)))}angleTo(u){const e=Math.sqrt(this.lengthSq()*u.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(u)/e;return Math.acos(V0(i,-1,1))}distanceTo(u){return Math.sqrt(this.distanceToSquared(u))}distanceToSquared(u){const e=this.x-u.x,i=this.y-u.y,n=this.z-u.z;return e*e+i*i+n*n}manhattanDistanceTo(u){return Math.abs(this.x-u.x)+Math.abs(this.y-u.y)+Math.abs(this.z-u.z)}setFromSpherical(u){return this.setFromSphericalCoords(u.radius,u.phi,u.theta)}setFromSphericalCoords(u,e,i){const n=Math.sin(e)*u;return this.x=n*Math.sin(i),this.y=Math.cos(e)*u,this.z=n*Math.cos(i),this}setFromCylindrical(u){return this.setFromCylindricalCoords(u.radius,u.theta,u.y)}setFromCylindricalCoords(u,e,i){return this.x=u*Math.sin(e),this.y=i,this.z=u*Math.cos(e),this}setFromMatrixPosition(u){const e=u.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(u){const e=this.setFromMatrixColumn(u,0).length(),i=this.setFromMatrixColumn(u,1).length(),n=this.setFromMatrixColumn(u,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(u,e){return this.fromArray(u.elements,e*4)}setFromMatrix3Column(u,e){return this.fromArray(u.elements,e*3)}setFromEuler(u){return this.x=u._x,this.y=u._y,this.z=u._z,this}equals(u){return u.x===this.x&&u.y===this.y&&u.z===this.z}fromArray(u,e=0){return this.x=u[e],this.y=u[e+1],this.z=u[e+2],this}toArray(u=[],e=0){return u[e]=this.x,u[e+1]=this.y,u[e+2]=this.z,u}fromBufferAttribute(u,e){return this.x=u.getX(e),this.y=u.getY(e),this.z=u.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const u=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-u**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=u,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xr=new _,bo=new Ii;class ti{constructor(u=new _(1/0,1/0,1/0),e=new _(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=u,this.max=e}set(u,e){return this.min.copy(u),this.max.copy(e),this}setFromArray(u){let e=1/0,i=1/0,n=1/0,r=-1/0,t=-1/0,o=-1/0;for(let s=0,l=u.length;s<l;s+=3){const E=u[s],D=u[s+1],x=u[s+2];E<e&&(e=E),D<i&&(i=D),x<n&&(n=x),E>r&&(r=E),D>t&&(t=D),x>o&&(o=x)}return this.min.set(e,i,n),this.max.set(r,t,o),this}setFromBufferAttribute(u){let e=1/0,i=1/0,n=1/0,r=-1/0,t=-1/0,o=-1/0;for(let s=0,l=u.count;s<l;s++){const E=u.getX(s),D=u.getY(s),x=u.getZ(s);E<e&&(e=E),D<i&&(i=D),x<n&&(n=x),E>r&&(r=E),D>t&&(t=D),x>o&&(o=x)}return this.min.set(e,i,n),this.max.set(r,t,o),this}setFromPoints(u){this.makeEmpty();for(let e=0,i=u.length;e<i;e++)this.expandByPoint(u[e]);return this}setFromCenterAndSize(u,e){const i=sa.copy(e).multiplyScalar(.5);return this.min.copy(u).sub(i),this.max.copy(u).add(i),this}setFromObject(u,e=!1){return this.makeEmpty(),this.expandByObject(u,e)}clone(){return new this.constructor().copy(this)}copy(u){return this.min.copy(u.min),this.max.copy(u.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(u){return this.isEmpty()?u.set(0,0,0):u.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(u){return this.isEmpty()?u.set(0,0,0):u.subVectors(this.max,this.min)}expandByPoint(u){return this.min.min(u),this.max.max(u),this}expandByVector(u){return this.min.sub(u),this.max.add(u),this}expandByScalar(u){return this.min.addScalar(-u),this.max.addScalar(u),this}expandByObject(u,e=!1){u.updateWorldMatrix(!1,!1);const i=u.geometry;if(i!==void 0)if(e&&i.attributes!=null&&i.attributes.position!==void 0){const r=i.attributes.position;for(let t=0,o=r.count;t<o;t++)sa.fromBufferAttribute(r,t).applyMatrix4(u.matrixWorld),this.expandByPoint(sa)}else i.boundingBox===null&&i.computeBoundingBox(),cr.copy(i.boundingBox),cr.applyMatrix4(u.matrixWorld),this.union(cr);const n=u.children;for(let r=0,t=n.length;r<t;r++)this.expandByObject(n[r],e);return this}containsPoint(u){return!(u.x<this.min.x||u.x>this.max.x||u.y<this.min.y||u.y>this.max.y||u.z<this.min.z||u.z>this.max.z)}containsBox(u){return this.min.x<=u.min.x&&u.max.x<=this.max.x&&this.min.y<=u.min.y&&u.max.y<=this.max.y&&this.min.z<=u.min.z&&u.max.z<=this.max.z}getParameter(u,e){return e.set((u.x-this.min.x)/(this.max.x-this.min.x),(u.y-this.min.y)/(this.max.y-this.min.y),(u.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(u){return!(u.max.x<this.min.x||u.min.x>this.max.x||u.max.y<this.min.y||u.min.y>this.max.y||u.max.z<this.min.z||u.min.z>this.max.z)}intersectsSphere(u){return this.clampPoint(u.center,sa),sa.distanceToSquared(u.center)<=u.radius*u.radius}intersectsPlane(u){let e,i;return u.normal.x>0?(e=u.normal.x*this.min.x,i=u.normal.x*this.max.x):(e=u.normal.x*this.max.x,i=u.normal.x*this.min.x),u.normal.y>0?(e+=u.normal.y*this.min.y,i+=u.normal.y*this.max.y):(e+=u.normal.y*this.max.y,i+=u.normal.y*this.min.y),u.normal.z>0?(e+=u.normal.z*this.min.z,i+=u.normal.z*this.max.z):(e+=u.normal.z*this.max.z,i+=u.normal.z*this.min.z),e<=-u.constant&&i>=-u.constant}intersectsTriangle(u){if(this.isEmpty())return!1;this.getCenter(ci),qi.subVectors(this.max,ci),ja.subVectors(u.a,ci),Pa.subVectors(u.b,ci),Ta.subVectors(u.c,ci),Ue.subVectors(Pa,ja),$e.subVectors(Ta,Pa),la.subVectors(ja,Ta);let e=[0,-Ue.z,Ue.y,0,-$e.z,$e.y,0,-la.z,la.y,Ue.z,0,-Ue.x,$e.z,0,-$e.x,la.z,0,-la.x,-Ue.y,Ue.x,0,-$e.y,$e.x,0,-la.y,la.x,0];return!dr(e,ja,Pa,Ta,qi)||(e=[1,0,0,0,1,0,0,0,1],!dr(e,ja,Pa,Ta,qi))?!1:(Zi.crossVectors(Ue,$e),e=[Zi.x,Zi.y,Zi.z],dr(e,ja,Pa,Ta,qi))}clampPoint(u,e){return e.copy(u).clamp(this.min,this.max)}distanceToPoint(u){return sa.copy(u).clamp(this.min,this.max).sub(u).length()}getBoundingSphere(u){return this.getCenter(u.center),u.radius=this.getSize(sa).length()*.5,u}intersect(u){return this.min.max(u.min),this.max.min(u.max),this.isEmpty()&&this.makeEmpty(),this}union(u){return this.min.min(u.min),this.max.max(u.max),this}applyMatrix4(u){return this.isEmpty()?this:(Re[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(u),Re[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(u),Re[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(u),Re[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(u),Re[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(u),Re[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(u),Re[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(u),Re[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(u),this.setFromPoints(Re),this)}translate(u){return this.min.add(u),this.max.add(u),this}equals(u){return u.min.equals(this.min)&&u.max.equals(this.max)}}const Re=[new _,new _,new _,new _,new _,new _,new _,new _],sa=new _,cr=new ti,ja=new _,Pa=new _,Ta=new _,Ue=new _,$e=new _,la=new _,ci=new _,qi=new _,Zi=new _,Ea=new _;function dr(a,u,e,i,n){for(let r=0,t=a.length-3;r<=t;r+=3){Ea.fromArray(a,r);const o=n.x*Math.abs(Ea.x)+n.y*Math.abs(Ea.y)+n.z*Math.abs(Ea.z),s=u.dot(Ea),l=e.dot(Ea),E=i.dot(Ea);if(Math.max(-Math.max(s,l,E),Math.min(s,l,E))>o)return!1}return!0}const xE=new ti,di=new _,mr=new _;class Ft{constructor(u=new _,e=-1){this.center=u,this.radius=e}set(u,e){return this.center.copy(u),this.radius=e,this}setFromPoints(u,e){const i=this.center;e!==void 0?i.copy(e):xE.setFromPoints(u).getCenter(i);let n=0;for(let r=0,t=u.length;r<t;r++)n=Math.max(n,i.distanceToSquared(u[r]));return this.radius=Math.sqrt(n),this}copy(u){return this.center.copy(u.center),this.radius=u.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(u){return u.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(u){return u.distanceTo(this.center)-this.radius}intersectsSphere(u){const e=this.radius+u.radius;return u.center.distanceToSquared(this.center)<=e*e}intersectsBox(u){return u.intersectsSphere(this)}intersectsPlane(u){return Math.abs(u.distanceToPoint(this.center))<=this.radius}clampPoint(u,e){const i=this.center.distanceToSquared(u);return e.copy(u),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(u){return this.isEmpty()?(u.makeEmpty(),u):(u.set(this.center,this.center),u.expandByScalar(this.radius),u)}applyMatrix4(u){return this.center.applyMatrix4(u),this.radius=this.radius*u.getMaxScaleOnAxis(),this}translate(u){return this.center.add(u),this}expandByPoint(u){if(this.isEmpty())return this.center.copy(u),this.radius=0,this;di.subVectors(u,this.center);const e=di.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(di,n/i),this.radius+=n}return this}union(u){return u.isEmpty()?this:this.isEmpty()?(this.copy(u),this):(this.center.equals(u.center)===!0?this.radius=Math.max(this.radius,u.radius):(mr.subVectors(u.center,this.center).setLength(u.radius),this.expandByPoint(di.copy(u.center).add(mr)),this.expandByPoint(di.copy(u.center).sub(mr))),this)}equals(u){return u.center.equals(this.center)&&u.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ke=new _,hr=new _,Yi=new _,qe=new _,pr=new _,Qi=new _,Fr=new _;class j1{constructor(u=new _,e=new _(0,0,-1)){this.origin=u,this.direction=e}set(u,e){return this.origin.copy(u),this.direction.copy(e),this}copy(u){return this.origin.copy(u.origin),this.direction.copy(u.direction),this}at(u,e){return e.copy(this.direction).multiplyScalar(u).add(this.origin)}lookAt(u){return this.direction.copy(u).sub(this.origin).normalize(),this}recast(u){return this.origin.copy(this.at(u,Ke)),this}closestPointToPoint(u,e){e.subVectors(u,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(u){return Math.sqrt(this.distanceSqToPoint(u))}distanceSqToPoint(u){const e=Ke.subVectors(u,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(u):(Ke.copy(this.direction).multiplyScalar(e).add(this.origin),Ke.distanceToSquared(u))}distanceSqToSegment(u,e,i,n){hr.copy(u).add(e).multiplyScalar(.5),Yi.copy(e).sub(u).normalize(),qe.copy(this.origin).sub(hr);const r=u.distanceTo(e)*.5,t=-this.direction.dot(Yi),o=qe.dot(this.direction),s=-qe.dot(Yi),l=qe.lengthSq(),E=Math.abs(1-t*t);let D,x,c,p;if(E>0)if(D=t*s-o,x=t*o-s,p=r*E,D>=0)if(x>=-p)if(x<=p){const d=1/E;D*=d,x*=d,c=D*(D+t*x+2*o)+x*(t*D+x+2*s)+l}else x=r,D=Math.max(0,-(t*x+o)),c=-D*D+x*(x+2*s)+l;else x=-r,D=Math.max(0,-(t*x+o)),c=-D*D+x*(x+2*s)+l;else x<=-p?(D=Math.max(0,-(-t*r+o)),x=D>0?-r:Math.min(Math.max(-r,-s),r),c=-D*D+x*(x+2*s)+l):x<=p?(D=0,x=Math.min(Math.max(-r,-s),r),c=x*(x+2*s)+l):(D=Math.max(0,-(t*r+o)),x=D>0?r:Math.min(Math.max(-r,-s),r),c=-D*D+x*(x+2*s)+l);else x=t>0?-r:r,D=Math.max(0,-(t*x+o)),c=-D*D+x*(x+2*s)+l;return i&&i.copy(this.direction).multiplyScalar(D).add(this.origin),n&&n.copy(Yi).multiplyScalar(x).add(hr),c}intersectSphere(u,e){Ke.subVectors(u.center,this.origin);const i=Ke.dot(this.direction),n=Ke.dot(Ke)-i*i,r=u.radius*u.radius;if(n>r)return null;const t=Math.sqrt(r-n),o=i-t,s=i+t;return o<0&&s<0?null:o<0?this.at(s,e):this.at(o,e)}intersectsSphere(u){return this.distanceSqToPoint(u.center)<=u.radius*u.radius}distanceToPlane(u){const e=u.normal.dot(this.direction);if(e===0)return u.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(u.normal)+u.constant)/e;return i>=0?i:null}intersectPlane(u,e){const i=this.distanceToPlane(u);return i===null?null:this.at(i,e)}intersectsPlane(u){const e=u.distanceToPoint(this.origin);return e===0||u.normal.dot(this.direction)*e<0}intersectBox(u,e){let i,n,r,t,o,s;const l=1/this.direction.x,E=1/this.direction.y,D=1/this.direction.z,x=this.origin;return l>=0?(i=(u.min.x-x.x)*l,n=(u.max.x-x.x)*l):(i=(u.max.x-x.x)*l,n=(u.min.x-x.x)*l),E>=0?(r=(u.min.y-x.y)*E,t=(u.max.y-x.y)*E):(r=(u.max.y-x.y)*E,t=(u.min.y-x.y)*E),i>t||r>n||((r>i||isNaN(i))&&(i=r),(t<n||isNaN(n))&&(n=t),D>=0?(o=(u.min.z-x.z)*D,s=(u.max.z-x.z)*D):(o=(u.max.z-x.z)*D,s=(u.min.z-x.z)*D),i>s||o>n)||((o>i||i!==i)&&(i=o),(s<n||n!==n)&&(n=s),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(u){return this.intersectBox(u,Ke)!==null}intersectTriangle(u,e,i,n,r){pr.subVectors(e,u),Qi.subVectors(i,u),Fr.crossVectors(pr,Qi);let t=this.direction.dot(Fr),o;if(t>0){if(n)return null;o=1}else if(t<0)o=-1,t=-t;else return null;qe.subVectors(this.origin,u);const s=o*this.direction.dot(Qi.crossVectors(qe,Qi));if(s<0)return null;const l=o*this.direction.dot(pr.cross(qe));if(l<0||s+l>t)return null;const E=-o*qe.dot(Fr);return E<0?null:this.at(E/t,r)}applyMatrix4(u){return this.origin.applyMatrix4(u),this.direction.transformDirection(u),this}equals(u){return u.origin.equals(this.origin)&&u.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class x0{constructor(){x0.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(u,e,i,n,r,t,o,s,l,E,D,x,c,p,d,m){const h=this.elements;return h[0]=u,h[4]=e,h[8]=i,h[12]=n,h[1]=r,h[5]=t,h[9]=o,h[13]=s,h[2]=l,h[6]=E,h[10]=D,h[14]=x,h[3]=c,h[7]=p,h[11]=d,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new x0().fromArray(this.elements)}copy(u){const e=this.elements,i=u.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(u){const e=this.elements,i=u.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(u){const e=u.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(u,e,i){return u.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(u,e,i){return this.set(u.x,e.x,i.x,0,u.y,e.y,i.y,0,u.z,e.z,i.z,0,0,0,0,1),this}extractRotation(u){const e=this.elements,i=u.elements,n=1/wa.setFromMatrixColumn(u,0).length(),r=1/wa.setFromMatrixColumn(u,1).length(),t=1/wa.setFromMatrixColumn(u,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*t,e[9]=i[9]*t,e[10]=i[10]*t,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(u){const e=this.elements,i=u.x,n=u.y,r=u.z,t=Math.cos(i),o=Math.sin(i),s=Math.cos(n),l=Math.sin(n),E=Math.cos(r),D=Math.sin(r);if(u.order==="XYZ"){const x=t*E,c=t*D,p=o*E,d=o*D;e[0]=s*E,e[4]=-s*D,e[8]=l,e[1]=c+p*l,e[5]=x-d*l,e[9]=-o*s,e[2]=d-x*l,e[6]=p+c*l,e[10]=t*s}else if(u.order==="YXZ"){const x=s*E,c=s*D,p=l*E,d=l*D;e[0]=x+d*o,e[4]=p*o-c,e[8]=t*l,e[1]=t*D,e[5]=t*E,e[9]=-o,e[2]=c*o-p,e[6]=d+x*o,e[10]=t*s}else if(u.order==="ZXY"){const x=s*E,c=s*D,p=l*E,d=l*D;e[0]=x-d*o,e[4]=-t*D,e[8]=p+c*o,e[1]=c+p*o,e[5]=t*E,e[9]=d-x*o,e[2]=-t*l,e[6]=o,e[10]=t*s}else if(u.order==="ZYX"){const x=t*E,c=t*D,p=o*E,d=o*D;e[0]=s*E,e[4]=p*l-c,e[8]=x*l+d,e[1]=s*D,e[5]=d*l+x,e[9]=c*l-p,e[2]=-l,e[6]=o*s,e[10]=t*s}else if(u.order==="YZX"){const x=t*s,c=t*l,p=o*s,d=o*l;e[0]=s*E,e[4]=d-x*D,e[8]=p*D+c,e[1]=D,e[5]=t*E,e[9]=-o*E,e[2]=-l*E,e[6]=c*D+p,e[10]=x-d*D}else if(u.order==="XZY"){const x=t*s,c=t*l,p=o*s,d=o*l;e[0]=s*E,e[4]=-D,e[8]=l*E,e[1]=x*D+d,e[5]=t*E,e[9]=c*D-p,e[2]=p*D-c,e[6]=o*E,e[10]=d*D+x}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(u){return this.compose(cE,u,dE)}lookAt(u,e,i){const n=this.elements;return Y0.subVectors(u,e),Y0.lengthSq()===0&&(Y0.z=1),Y0.normalize(),Ze.crossVectors(i,Y0),Ze.lengthSq()===0&&(Math.abs(i.z)===1?Y0.x+=1e-4:Y0.z+=1e-4,Y0.normalize(),Ze.crossVectors(i,Y0)),Ze.normalize(),Xi.crossVectors(Y0,Ze),n[0]=Ze.x,n[4]=Xi.x,n[8]=Y0.x,n[1]=Ze.y,n[5]=Xi.y,n[9]=Y0.y,n[2]=Ze.z,n[6]=Xi.z,n[10]=Y0.z,this}multiply(u){return this.multiplyMatrices(this,u)}premultiply(u){return this.multiplyMatrices(u,this)}multiplyMatrices(u,e){const i=u.elements,n=e.elements,r=this.elements,t=i[0],o=i[4],s=i[8],l=i[12],E=i[1],D=i[5],x=i[9],c=i[13],p=i[2],d=i[6],m=i[10],h=i[14],F=i[3],g=i[7],C=i[11],v=i[15],A=n[0],M=n[4],k=n[8],B=n[12],y=n[1],L=n[5],N=n[9],j=n[13],T=n[2],S=n[6],J=n[10],O=n[14],K=n[3],Q=n[7],uu=n[11],mu=n[15];return r[0]=t*A+o*y+s*T+l*K,r[4]=t*M+o*L+s*S+l*Q,r[8]=t*k+o*N+s*J+l*uu,r[12]=t*B+o*j+s*O+l*mu,r[1]=E*A+D*y+x*T+c*K,r[5]=E*M+D*L+x*S+c*Q,r[9]=E*k+D*N+x*J+c*uu,r[13]=E*B+D*j+x*O+c*mu,r[2]=p*A+d*y+m*T+h*K,r[6]=p*M+d*L+m*S+h*Q,r[10]=p*k+d*N+m*J+h*uu,r[14]=p*B+d*j+m*O+h*mu,r[3]=F*A+g*y+C*T+v*K,r[7]=F*M+g*L+C*S+v*Q,r[11]=F*k+g*N+C*J+v*uu,r[15]=F*B+g*j+C*O+v*mu,this}multiplyScalar(u){const e=this.elements;return e[0]*=u,e[4]*=u,e[8]*=u,e[12]*=u,e[1]*=u,e[5]*=u,e[9]*=u,e[13]*=u,e[2]*=u,e[6]*=u,e[10]*=u,e[14]*=u,e[3]*=u,e[7]*=u,e[11]*=u,e[15]*=u,this}determinant(){const u=this.elements,e=u[0],i=u[4],n=u[8],r=u[12],t=u[1],o=u[5],s=u[9],l=u[13],E=u[2],D=u[6],x=u[10],c=u[14],p=u[3],d=u[7],m=u[11],h=u[15];return p*(+r*s*D-n*l*D-r*o*x+i*l*x+n*o*c-i*s*c)+d*(+e*s*c-e*l*x+r*t*x-n*t*c+n*l*E-r*s*E)+m*(+e*l*D-e*o*c-r*t*D+i*t*c+r*o*E-i*l*E)+h*(-n*o*E-e*s*D+e*o*x+n*t*D-i*t*x+i*s*E)}transpose(){const u=this.elements;let e;return e=u[1],u[1]=u[4],u[4]=e,e=u[2],u[2]=u[8],u[8]=e,e=u[6],u[6]=u[9],u[9]=e,e=u[3],u[3]=u[12],u[12]=e,e=u[7],u[7]=u[13],u[13]=e,e=u[11],u[11]=u[14],u[14]=e,this}setPosition(u,e,i){const n=this.elements;return u.isVector3?(n[12]=u.x,n[13]=u.y,n[14]=u.z):(n[12]=u,n[13]=e,n[14]=i),this}invert(){const u=this.elements,e=u[0],i=u[1],n=u[2],r=u[3],t=u[4],o=u[5],s=u[6],l=u[7],E=u[8],D=u[9],x=u[10],c=u[11],p=u[12],d=u[13],m=u[14],h=u[15],F=D*m*l-d*x*l+d*s*c-o*m*c-D*s*h+o*x*h,g=p*x*l-E*m*l-p*s*c+t*m*c+E*s*h-t*x*h,C=E*d*l-p*D*l+p*o*c-t*d*c-E*o*h+t*D*h,v=p*D*s-E*d*s-p*o*x+t*d*x+E*o*m-t*D*m,A=e*F+i*g+n*C+r*v;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/A;return u[0]=F*M,u[1]=(d*x*r-D*m*r-d*n*c+i*m*c+D*n*h-i*x*h)*M,u[2]=(o*m*r-d*s*r+d*n*l-i*m*l-o*n*h+i*s*h)*M,u[3]=(D*s*r-o*x*r-D*n*l+i*x*l+o*n*c-i*s*c)*M,u[4]=g*M,u[5]=(E*m*r-p*x*r+p*n*c-e*m*c-E*n*h+e*x*h)*M,u[6]=(p*s*r-t*m*r-p*n*l+e*m*l+t*n*h-e*s*h)*M,u[7]=(t*x*r-E*s*r+E*n*l-e*x*l-t*n*c+e*s*c)*M,u[8]=C*M,u[9]=(p*D*r-E*d*r-p*i*c+e*d*c+E*i*h-e*D*h)*M,u[10]=(t*d*r-p*o*r+p*i*l-e*d*l-t*i*h+e*o*h)*M,u[11]=(E*o*r-t*D*r-E*i*l+e*D*l+t*i*c-e*o*c)*M,u[12]=v*M,u[13]=(E*d*n-p*D*n+p*i*x-e*d*x-E*i*m+e*D*m)*M,u[14]=(p*o*n-t*d*n-p*i*s+e*d*s+t*i*m-e*o*m)*M,u[15]=(t*D*n-E*o*n+E*i*s-e*D*s-t*i*x+e*o*x)*M,this}scale(u){const e=this.elements,i=u.x,n=u.y,r=u.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){const u=this.elements,e=u[0]*u[0]+u[1]*u[1]+u[2]*u[2],i=u[4]*u[4]+u[5]*u[5]+u[6]*u[6],n=u[8]*u[8]+u[9]*u[9]+u[10]*u[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(u,e,i){return this.set(1,0,0,u,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(u){const e=Math.cos(u),i=Math.sin(u);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(u){const e=Math.cos(u),i=Math.sin(u);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(u){const e=Math.cos(u),i=Math.sin(u);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(u,e){const i=Math.cos(e),n=Math.sin(e),r=1-i,t=u.x,o=u.y,s=u.z,l=r*t,E=r*o;return this.set(l*t+i,l*o-n*s,l*s+n*o,0,l*o+n*s,E*o+i,E*s-n*t,0,l*s-n*o,E*s+n*t,r*s*s+i,0,0,0,0,1),this}makeScale(u,e,i){return this.set(u,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(u,e,i,n,r,t){return this.set(1,i,r,0,u,1,t,0,e,n,1,0,0,0,0,1),this}compose(u,e,i){const n=this.elements,r=e._x,t=e._y,o=e._z,s=e._w,l=r+r,E=t+t,D=o+o,x=r*l,c=r*E,p=r*D,d=t*E,m=t*D,h=o*D,F=s*l,g=s*E,C=s*D,v=i.x,A=i.y,M=i.z;return n[0]=(1-(d+h))*v,n[1]=(c+C)*v,n[2]=(p-g)*v,n[3]=0,n[4]=(c-C)*A,n[5]=(1-(x+h))*A,n[6]=(m+F)*A,n[7]=0,n[8]=(p+g)*M,n[9]=(m-F)*M,n[10]=(1-(x+d))*M,n[11]=0,n[12]=u.x,n[13]=u.y,n[14]=u.z,n[15]=1,this}decompose(u,e,i){const n=this.elements;let r=wa.set(n[0],n[1],n[2]).length();const t=wa.set(n[4],n[5],n[6]).length(),o=wa.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),u.x=n[12],u.y=n[13],u.z=n[14],De.copy(this);const l=1/r,E=1/t,D=1/o;return De.elements[0]*=l,De.elements[1]*=l,De.elements[2]*=l,De.elements[4]*=E,De.elements[5]*=E,De.elements[6]*=E,De.elements[8]*=D,De.elements[9]*=D,De.elements[10]*=D,e.setFromRotationMatrix(De),i.x=r,i.y=t,i.z=o,this}makePerspective(u,e,i,n,r,t){const o=this.elements,s=2*r/(e-u),l=2*r/(i-n),E=(e+u)/(e-u),D=(i+n)/(i-n),x=-(t+r)/(t-r),c=-2*t*r/(t-r);return o[0]=s,o[4]=0,o[8]=E,o[12]=0,o[1]=0,o[5]=l,o[9]=D,o[13]=0,o[2]=0,o[6]=0,o[10]=x,o[14]=c,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(u,e,i,n,r,t){const o=this.elements,s=1/(e-u),l=1/(i-n),E=1/(t-r),D=(e+u)*s,x=(i+n)*l,c=(t+r)*E;return o[0]=2*s,o[4]=0,o[8]=0,o[12]=-D,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-x,o[2]=0,o[6]=0,o[10]=-2*E,o[14]=-c,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(u){const e=this.elements,i=u.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(u,e=0){for(let i=0;i<16;i++)this.elements[i]=u[i+e];return this}toArray(u=[],e=0){const i=this.elements;return u[e]=i[0],u[e+1]=i[1],u[e+2]=i[2],u[e+3]=i[3],u[e+4]=i[4],u[e+5]=i[5],u[e+6]=i[6],u[e+7]=i[7],u[e+8]=i[8],u[e+9]=i[9],u[e+10]=i[10],u[e+11]=i[11],u[e+12]=i[12],u[e+13]=i[13],u[e+14]=i[14],u[e+15]=i[15],u}}const wa=new _,De=new x0,cE=new _(0,0,0),dE=new _(1,1,1),Ze=new _,Xi=new _,Y0=new _,Ao=new x0,Bo=new Ii;class Gn{constructor(u=0,e=0,i=0,n=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=u,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(u){this._x=u,this._onChangeCallback()}get y(){return this._y}set y(u){this._y=u,this._onChangeCallback()}get z(){return this._z}set z(u){this._z=u,this._onChangeCallback()}get order(){return this._order}set order(u){this._order=u,this._onChangeCallback()}set(u,e,i,n=this._order){return this._x=u,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(u){return this._x=u._x,this._y=u._y,this._z=u._z,this._order=u._order,this._onChangeCallback(),this}setFromRotationMatrix(u,e=this._order,i=!0){const n=u.elements,r=n[0],t=n[4],o=n[8],s=n[1],l=n[5],E=n[9],D=n[2],x=n[6],c=n[10];switch(e){case"XYZ":this._y=Math.asin(V0(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-E,c),this._z=Math.atan2(-t,r)):(this._x=Math.atan2(x,l),this._z=0);break;case"YXZ":this._x=Math.asin(-V0(E,-1,1)),Math.abs(E)<.9999999?(this._y=Math.atan2(o,c),this._z=Math.atan2(s,l)):(this._y=Math.atan2(-D,r),this._z=0);break;case"ZXY":this._x=Math.asin(V0(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-D,c),this._z=Math.atan2(-t,l)):(this._y=0,this._z=Math.atan2(s,r));break;case"ZYX":this._y=Math.asin(-V0(D,-1,1)),Math.abs(D)<.9999999?(this._x=Math.atan2(x,c),this._z=Math.atan2(s,r)):(this._x=0,this._z=Math.atan2(-t,l));break;case"YZX":this._z=Math.asin(V0(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-E,l),this._y=Math.atan2(-D,r)):(this._x=0,this._y=Math.atan2(o,c));break;case"XZY":this._z=Math.asin(-V0(t,-1,1)),Math.abs(t)<.9999999?(this._x=Math.atan2(x,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-E,c),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(u,e,i){return Ao.makeRotationFromQuaternion(u),this.setFromRotationMatrix(Ao,e,i)}setFromVector3(u,e=this._order){return this.set(u.x,u.y,u.z,e)}reorder(u){return Bo.setFromEuler(this),this.setFromQuaternion(Bo,u)}equals(u){return u._x===this._x&&u._y===this._y&&u._z===this._z&&u._order===this._order}fromArray(u){return this._x=u[0],this._y=u[1],this._z=u[2],u[3]!==void 0&&(this._order=u[3]),this._onChangeCallback(),this}toArray(u=[],e=0){return u[e]=this._x,u[e+1]=this._y,u[e+2]=this._z,u[e+3]=this._order,u}_onChange(u){return this._onChangeCallback=u,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class gt{constructor(){this.mask=1}set(u){this.mask=(1<<u|0)>>>0}enable(u){this.mask|=1<<u|0}enableAll(){this.mask=-1}toggle(u){this.mask^=1<<u|0}disable(u){this.mask&=~(1<<u|0)}disableAll(){this.mask=0}test(u){return(this.mask&u.mask)!==0}isEnabled(u){return(this.mask&(1<<u|0))!==0}}let mE=0;const yo=new _,_a=new Ii,Ne=new x0,un=new _,mi=new _,hE=new _,pE=new Ii,zo=new _(1,0,0),So=new _(0,1,0),Mo=new _(0,0,1),FE={type:"added"},jo={type:"removed"};class v0 extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=v0.DEFAULT_UP.clone();const u=new _,e=new Gn,i=new Ii,n=new _(1,1,1);function r(){i.setFromEuler(e,!1)}function t(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(t),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:u},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new x0},normalMatrix:{value:new ee}}),this.matrix=new x0,this.matrixWorld=new x0,this.matrixAutoUpdate=v0.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=v0.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new gt,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(u){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(u),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(u){return this.quaternion.premultiply(u),this}setRotationFromAxisAngle(u,e){this.quaternion.setFromAxisAngle(u,e)}setRotationFromEuler(u){this.quaternion.setFromEuler(u,!0)}setRotationFromMatrix(u){this.quaternion.setFromRotationMatrix(u)}setRotationFromQuaternion(u){this.quaternion.copy(u)}rotateOnAxis(u,e){return _a.setFromAxisAngle(u,e),this.quaternion.multiply(_a),this}rotateOnWorldAxis(u,e){return _a.setFromAxisAngle(u,e),this.quaternion.premultiply(_a),this}rotateX(u){return this.rotateOnAxis(zo,u)}rotateY(u){return this.rotateOnAxis(So,u)}rotateZ(u){return this.rotateOnAxis(Mo,u)}translateOnAxis(u,e){return yo.copy(u).applyQuaternion(this.quaternion),this.position.add(yo.multiplyScalar(e)),this}translateX(u){return this.translateOnAxis(zo,u)}translateY(u){return this.translateOnAxis(So,u)}translateZ(u){return this.translateOnAxis(Mo,u)}localToWorld(u){return this.updateWorldMatrix(!0,!1),u.applyMatrix4(this.matrixWorld)}worldToLocal(u){return this.updateWorldMatrix(!0,!1),u.applyMatrix4(Ne.copy(this.matrixWorld).invert())}lookAt(u,e,i){u.isVector3?un.copy(u):un.set(u,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),mi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ne.lookAt(mi,un,this.up):Ne.lookAt(un,mi,this.up),this.quaternion.setFromRotationMatrix(Ne),n&&(Ne.extractRotation(n.matrixWorld),_a.setFromRotationMatrix(Ne),this.quaternion.premultiply(_a.invert()))}add(u){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return u===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",u),this):(u&&u.isObject3D?(u.parent!==null&&u.parent.remove(u),u.parent=this,this.children.push(u),u.dispatchEvent(FE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",u),this)}remove(u){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(u);return e!==-1&&(u.parent=null,this.children.splice(e,1),u.dispatchEvent(jo)),this}removeFromParent(){const u=this.parent;return u!==null&&u.remove(this),this}clear(){for(let u=0;u<this.children.length;u++){const e=this.children[u];e.parent=null,e.dispatchEvent(jo)}return this.children.length=0,this}attach(u){return this.updateWorldMatrix(!0,!1),Ne.copy(this.matrixWorld).invert(),u.parent!==null&&(u.parent.updateWorldMatrix(!0,!1),Ne.multiply(u.parent.matrixWorld)),u.applyMatrix4(Ne),this.add(u),u.updateWorldMatrix(!1,!0),this}getObjectById(u){return this.getObjectByProperty("id",u)}getObjectByName(u){return this.getObjectByProperty("name",u)}getObjectByProperty(u,e){if(this[u]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const t=this.children[i].getObjectByProperty(u,e);if(t!==void 0)return t}}getObjectsByProperty(u,e){let i=[];this[u]===e&&i.push(this);for(let n=0,r=this.children.length;n<r;n++){const t=this.children[n].getObjectsByProperty(u,e);t.length>0&&(i=i.concat(t))}return i}getWorldPosition(u){return this.updateWorldMatrix(!0,!1),u.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(u){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mi,u,hE),u}getWorldScale(u){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mi,pE,u),u}getWorldDirection(u){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return u.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(u){u(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(u)}traverseVisible(u){if(this.visible===!1)return;u(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(u)}traverseAncestors(u){const e=this.parent;e!==null&&(u(e),e.traverseAncestors(u))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(u){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||u)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,u=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++){const r=e[i];(r.matrixWorldAutoUpdate===!0||u===!0)&&r.updateMatrixWorld(u)}}updateWorldMatrix(u,e){const i=this.parent;if(u===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const n=this.children;for(let r=0,t=n.length;r<t;r++){const o=n[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(u){const e=u===void 0||typeof u=="string",i={};e&&(u={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function r(o,s){return o[s.uuid]===void 0&&(o[s.uuid]=s.toJSON(u)),s.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(u).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(u).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(u.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const s=o.shapes;if(Array.isArray(s))for(let l=0,E=s.length;l<E;l++){const D=s[l];r(u.shapes,D)}else r(u.shapes,s)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(u.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let s=0,l=this.material.length;s<l;s++)o.push(r(u.materials,this.material[s]));n.material=o}else n.material=r(u.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(u).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const s=this.animations[o];n.animations.push(r(u.animations,s))}}if(e){const o=t(u.geometries),s=t(u.materials),l=t(u.textures),E=t(u.images),D=t(u.shapes),x=t(u.skeletons),c=t(u.animations),p=t(u.nodes);o.length>0&&(i.geometries=o),s.length>0&&(i.materials=s),l.length>0&&(i.textures=l),E.length>0&&(i.images=E),D.length>0&&(i.shapes=D),x.length>0&&(i.skeletons=x),c.length>0&&(i.animations=c),p.length>0&&(i.nodes=p)}return i.object=n,i;function t(o){const s=[];for(const l in o){const E=o[l];delete E.metadata,s.push(E)}return s}}clone(u){return new this.constructor().copy(this,u)}copy(u,e=!0){if(this.name=u.name,this.up.copy(u.up),this.position.copy(u.position),this.rotation.order=u.rotation.order,this.quaternion.copy(u.quaternion),this.scale.copy(u.scale),this.matrix.copy(u.matrix),this.matrixWorld.copy(u.matrixWorld),this.matrixAutoUpdate=u.matrixAutoUpdate,this.matrixWorldNeedsUpdate=u.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=u.matrixWorldAutoUpdate,this.layers.mask=u.layers.mask,this.visible=u.visible,this.castShadow=u.castShadow,this.receiveShadow=u.receiveShadow,this.frustumCulled=u.frustumCulled,this.renderOrder=u.renderOrder,this.userData=JSON.parse(JSON.stringify(u.userData)),e===!0)for(let i=0;i<u.children.length;i++){const n=u.children[i];this.add(n.clone())}return this}}v0.DEFAULT_UP=new _(0,1,0);v0.DEFAULT_MATRIX_AUTO_UPDATE=!0;v0.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xe=new _,He=new _,gr=new _,Ge=new _,La=new _,Ra=new _,Po=new _,kr=new _,Cr=new _,vr=new _;class Oe{constructor(u=new _,e=new _,i=new _){this.a=u,this.b=e,this.c=i}static getNormal(u,e,i,n){n.subVectors(i,e),xe.subVectors(u,e),n.cross(xe);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(u,e,i,n,r){xe.subVectors(n,e),He.subVectors(i,e),gr.subVectors(u,e);const t=xe.dot(xe),o=xe.dot(He),s=xe.dot(gr),l=He.dot(He),E=He.dot(gr),D=t*l-o*o;if(D===0)return r.set(-2,-1,-1);const x=1/D,c=(l*s-o*E)*x,p=(t*E-o*s)*x;return r.set(1-c-p,p,c)}static containsPoint(u,e,i,n){return this.getBarycoord(u,e,i,n,Ge),Ge.x>=0&&Ge.y>=0&&Ge.x+Ge.y<=1}static getUV(u,e,i,n,r,t,o,s){return this.getBarycoord(u,e,i,n,Ge),s.set(0,0),s.addScaledVector(r,Ge.x),s.addScaledVector(t,Ge.y),s.addScaledVector(o,Ge.z),s}static isFrontFacing(u,e,i,n){return xe.subVectors(i,e),He.subVectors(u,e),xe.cross(He).dot(n)<0}set(u,e,i){return this.a.copy(u),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(u,e,i,n){return this.a.copy(u[e]),this.b.copy(u[i]),this.c.copy(u[n]),this}setFromAttributeAndIndices(u,e,i,n){return this.a.fromBufferAttribute(u,e),this.b.fromBufferAttribute(u,i),this.c.fromBufferAttribute(u,n),this}clone(){return new this.constructor().copy(this)}copy(u){return this.a.copy(u.a),this.b.copy(u.b),this.c.copy(u.c),this}getArea(){return xe.subVectors(this.c,this.b),He.subVectors(this.a,this.b),xe.cross(He).length()*.5}getMidpoint(u){return u.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(u){return Oe.getNormal(this.a,this.b,this.c,u)}getPlane(u){return u.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(u,e){return Oe.getBarycoord(u,this.a,this.b,this.c,e)}getUV(u,e,i,n,r){return Oe.getUV(u,this.a,this.b,this.c,e,i,n,r)}containsPoint(u){return Oe.containsPoint(u,this.a,this.b,this.c)}isFrontFacing(u){return Oe.isFrontFacing(this.a,this.b,this.c,u)}intersectsBox(u){return u.intersectsTriangle(this)}closestPointToPoint(u,e){const i=this.a,n=this.b,r=this.c;let t,o;La.subVectors(n,i),Ra.subVectors(r,i),kr.subVectors(u,i);const s=La.dot(kr),l=Ra.dot(kr);if(s<=0&&l<=0)return e.copy(i);Cr.subVectors(u,n);const E=La.dot(Cr),D=Ra.dot(Cr);if(E>=0&&D<=E)return e.copy(n);const x=s*D-E*l;if(x<=0&&s>=0&&E<=0)return t=s/(s-E),e.copy(i).addScaledVector(La,t);vr.subVectors(u,r);const c=La.dot(vr),p=Ra.dot(vr);if(p>=0&&c<=p)return e.copy(r);const d=c*l-s*p;if(d<=0&&l>=0&&p<=0)return o=l/(l-p),e.copy(i).addScaledVector(Ra,o);const m=E*p-c*D;if(m<=0&&D-E>=0&&c-p>=0)return Po.subVectors(r,n),o=(D-E)/(D-E+(c-p)),e.copy(n).addScaledVector(Po,o);const h=1/(m+d+x);return t=d*h,o=x*h,e.copy(i).addScaledVector(La,t).addScaledVector(Ra,o)}equals(u){return u.a.equals(this.a)&&u.b.equals(this.b)&&u.c.equals(this.c)}}let gE=0;class oi extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gE++}),this.uuid=ri(),this.name="",this.type="Material",this.blending=qa,this.side=aa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=C1,this.blendDst=v1,this.blendEquation=Wa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(u){this._alphaTest>0!=u>0&&this.version++,this._alphaTest=u}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(u){if(u!==void 0)for(const e in u){const i=u[e];if(i===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const n=this[e];if(n===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(u){const e=u===void 0||typeof u=="string";e&&(u={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(u).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(u).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(u).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(u).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(u).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(u).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(u).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(u).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(u).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(u).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(u).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(u).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(u).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(u).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(u).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(u).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(u).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(u).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(u).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(u).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(u).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(u).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(u).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qa&&(i.blending=this.blending),this.side!==aa&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const t=[];for(const o in r){const s=r[o];delete s.metadata,t.push(s)}return t}if(e){const r=n(u.textures),t=n(u.images);r.length>0&&(i.textures=r),t.length>0&&(i.images=t)}return i}clone(){return new this.constructor().copy(this)}copy(u){this.name=u.name,this.blending=u.blending,this.side=u.side,this.vertexColors=u.vertexColors,this.opacity=u.opacity,this.transparent=u.transparent,this.blendSrc=u.blendSrc,this.blendDst=u.blendDst,this.blendEquation=u.blendEquation,this.blendSrcAlpha=u.blendSrcAlpha,this.blendDstAlpha=u.blendDstAlpha,this.blendEquationAlpha=u.blendEquationAlpha,this.depthFunc=u.depthFunc,this.depthTest=u.depthTest,this.depthWrite=u.depthWrite,this.stencilWriteMask=u.stencilWriteMask,this.stencilFunc=u.stencilFunc,this.stencilRef=u.stencilRef,this.stencilFuncMask=u.stencilFuncMask,this.stencilFail=u.stencilFail,this.stencilZFail=u.stencilZFail,this.stencilZPass=u.stencilZPass,this.stencilWrite=u.stencilWrite;const e=u.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=u.clipIntersection,this.clipShadows=u.clipShadows,this.shadowSide=u.shadowSide,this.colorWrite=u.colorWrite,this.precision=u.precision,this.polygonOffset=u.polygonOffset,this.polygonOffsetFactor=u.polygonOffsetFactor,this.polygonOffsetUnits=u.polygonOffsetUnits,this.dithering=u.dithering,this.alphaTest=u.alphaTest,this.alphaToCoverage=u.alphaToCoverage,this.premultipliedAlpha=u.premultipliedAlpha,this.forceSinglePass=u.forceSinglePass,this.visible=u.visible,this.toneMapped=u.toneMapped,this.userData=JSON.parse(JSON.stringify(u.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(u){u===!0&&this.version++}}class Ji extends oi{constructor(u){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new a0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ht,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(u)}copy(u){return super.copy(u),this.color.copy(u.color),this.map=u.map,this.lightMap=u.lightMap,this.lightMapIntensity=u.lightMapIntensity,this.aoMap=u.aoMap,this.aoMapIntensity=u.aoMapIntensity,this.specularMap=u.specularMap,this.alphaMap=u.alphaMap,this.envMap=u.envMap,this.combine=u.combine,this.reflectivity=u.reflectivity,this.refractionRatio=u.refractionRatio,this.wireframe=u.wireframe,this.wireframeLinewidth=u.wireframeLinewidth,this.wireframeLinecap=u.wireframeLinecap,this.wireframeLinejoin=u.wireframeLinejoin,this.fog=u.fog,this}}const g0=new _,en=new du;class ke{constructor(u,e,i=!1){if(Array.isArray(u))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=u,this.itemSize=e,this.count=u!==void 0?u.length/e:0,this.normalized=i,this.usage=ko,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(u){u===!0&&this.version++}setUsage(u){return this.usage=u,this}copy(u){return this.name=u.name,this.array=new u.array.constructor(u.array),this.itemSize=u.itemSize,this.count=u.count,this.normalized=u.normalized,this.usage=u.usage,this}copyAt(u,e,i){u*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[u+n]=e.array[i+n];return this}copyArray(u){return this.array.set(u),this}applyMatrix3(u){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyMatrix3(u),this.setXY(e,en.x,en.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)g0.fromBufferAttribute(this,e),g0.applyMatrix3(u),this.setXYZ(e,g0.x,g0.y,g0.z);return this}applyMatrix4(u){for(let e=0,i=this.count;e<i;e++)g0.fromBufferAttribute(this,e),g0.applyMatrix4(u),this.setXYZ(e,g0.x,g0.y,g0.z);return this}applyNormalMatrix(u){for(let e=0,i=this.count;e<i;e++)g0.fromBufferAttribute(this,e),g0.applyNormalMatrix(u),this.setXYZ(e,g0.x,g0.y,g0.z);return this}transformDirection(u){for(let e=0,i=this.count;e<i;e++)g0.fromBufferAttribute(this,e),g0.transformDirection(u),this.setXYZ(e,g0.x,g0.y,g0.z);return this}set(u,e=0){return this.array.set(u,e),this}getX(u){let e=this.array[u*this.itemSize];return this.normalized&&(e=Wi(e,this.array)),e}setX(u,e){return this.normalized&&(e=Z0(e,this.array)),this.array[u*this.itemSize]=e,this}getY(u){let e=this.array[u*this.itemSize+1];return this.normalized&&(e=Wi(e,this.array)),e}setY(u,e){return this.normalized&&(e=Z0(e,this.array)),this.array[u*this.itemSize+1]=e,this}getZ(u){let e=this.array[u*this.itemSize+2];return this.normalized&&(e=Wi(e,this.array)),e}setZ(u,e){return this.normalized&&(e=Z0(e,this.array)),this.array[u*this.itemSize+2]=e,this}getW(u){let e=this.array[u*this.itemSize+3];return this.normalized&&(e=Wi(e,this.array)),e}setW(u,e){return this.normalized&&(e=Z0(e,this.array)),this.array[u*this.itemSize+3]=e,this}setXY(u,e,i){return u*=this.itemSize,this.normalized&&(e=Z0(e,this.array),i=Z0(i,this.array)),this.array[u+0]=e,this.array[u+1]=i,this}setXYZ(u,e,i,n){return u*=this.itemSize,this.normalized&&(e=Z0(e,this.array),i=Z0(i,this.array),n=Z0(n,this.array)),this.array[u+0]=e,this.array[u+1]=i,this.array[u+2]=n,this}setXYZW(u,e,i,n,r){return u*=this.itemSize,this.normalized&&(e=Z0(e,this.array),i=Z0(i,this.array),n=Z0(n,this.array),r=Z0(r,this.array)),this.array[u+0]=e,this.array[u+1]=i,this.array[u+2]=n,this.array[u+3]=r,this}onUpload(u){return this.onUploadCallback=u,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const u={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(u.name=this.name),this.usage!==ko&&(u.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(u.updateRange=this.updateRange),u}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class P1 extends ke{constructor(u,e,i){super(new Uint16Array(u),e,i)}}class T1 extends ke{constructor(u,e,i){super(new Uint32Array(u),e,i)}}class U0 extends ke{constructor(u,e,i){super(new Float32Array(u),e,i)}}let kE=0;const ne=new x0,fr=new v0,Ka=new _,Q0=new ti,hi=new ti,z0=new _;class Pe extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kE++}),this.uuid=ri(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(u){return Array.isArray(u)?this.index=new(B1(u)?T1:P1)(u,1):this.index=u,this}getAttribute(u){return this.attributes[u]}setAttribute(u,e){return this.attributes[u]=e,this}deleteAttribute(u){return delete this.attributes[u],this}hasAttribute(u){return this.attributes[u]!==void 0}addGroup(u,e,i=0){this.groups.push({start:u,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(u,e){this.drawRange.start=u,this.drawRange.count=e}applyMatrix4(u){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(u),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ee().getNormalMatrix(u);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(u),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(u){return ne.makeRotationFromQuaternion(u),this.applyMatrix4(ne),this}rotateX(u){return ne.makeRotationX(u),this.applyMatrix4(ne),this}rotateY(u){return ne.makeRotationY(u),this.applyMatrix4(ne),this}rotateZ(u){return ne.makeRotationZ(u),this.applyMatrix4(ne),this}translate(u,e,i){return ne.makeTranslation(u,e,i),this.applyMatrix4(ne),this}scale(u,e,i){return ne.makeScale(u,e,i),this.applyMatrix4(ne),this}lookAt(u){return fr.lookAt(u),fr.updateMatrix(),this.applyMatrix4(fr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ka).negate(),this.translate(Ka.x,Ka.y,Ka.z),this}setFromPoints(u){const e=[];for(let i=0,n=u.length;i<n;i++){const r=u[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new U0(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);const u=this.attributes.position,e=this.morphAttributes.position;if(u&&u.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new _(-1/0,-1/0,-1/0),new _(1/0,1/0,1/0));return}if(u!==void 0){if(this.boundingBox.setFromBufferAttribute(u),e)for(let i=0,n=e.length;i<n;i++){const r=e[i];Q0.setFromBufferAttribute(r),this.morphTargetsRelative?(z0.addVectors(this.boundingBox.min,Q0.min),this.boundingBox.expandByPoint(z0),z0.addVectors(this.boundingBox.max,Q0.max),this.boundingBox.expandByPoint(z0)):(this.boundingBox.expandByPoint(Q0.min),this.boundingBox.expandByPoint(Q0.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ft);const u=this.attributes.position,e=this.morphAttributes.position;if(u&&u.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new _,1/0);return}if(u){const i=this.boundingSphere.center;if(Q0.setFromBufferAttribute(u),e)for(let r=0,t=e.length;r<t;r++){const o=e[r];hi.setFromBufferAttribute(o),this.morphTargetsRelative?(z0.addVectors(Q0.min,hi.min),Q0.expandByPoint(z0),z0.addVectors(Q0.max,hi.max),Q0.expandByPoint(z0)):(Q0.expandByPoint(hi.min),Q0.expandByPoint(hi.max))}Q0.getCenter(i);let n=0;for(let r=0,t=u.count;r<t;r++)z0.fromBufferAttribute(u,r),n=Math.max(n,i.distanceToSquared(z0));if(e)for(let r=0,t=e.length;r<t;r++){const o=e[r],s=this.morphTargetsRelative;for(let l=0,E=o.count;l<E;l++)z0.fromBufferAttribute(o,l),s&&(Ka.fromBufferAttribute(u,l),z0.add(Ka)),n=Math.max(n,i.distanceToSquared(z0))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const u=this.index,e=this.attributes;if(u===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=u.array,n=e.position.array,r=e.normal.array,t=e.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ke(new Float32Array(4*o),4));const s=this.getAttribute("tangent").array,l=[],E=[];for(let y=0;y<o;y++)l[y]=new _,E[y]=new _;const D=new _,x=new _,c=new _,p=new du,d=new du,m=new du,h=new _,F=new _;function g(y,L,N){D.fromArray(n,y*3),x.fromArray(n,L*3),c.fromArray(n,N*3),p.fromArray(t,y*2),d.fromArray(t,L*2),m.fromArray(t,N*2),x.sub(D),c.sub(D),d.sub(p),m.sub(p);const j=1/(d.x*m.y-m.x*d.y);isFinite(j)&&(h.copy(x).multiplyScalar(m.y).addScaledVector(c,-d.y).multiplyScalar(j),F.copy(c).multiplyScalar(d.x).addScaledVector(x,-m.x).multiplyScalar(j),l[y].add(h),l[L].add(h),l[N].add(h),E[y].add(F),E[L].add(F),E[N].add(F))}let C=this.groups;C.length===0&&(C=[{start:0,count:i.length}]);for(let y=0,L=C.length;y<L;++y){const N=C[y],j=N.start,T=N.count;for(let S=j,J=j+T;S<J;S+=3)g(i[S+0],i[S+1],i[S+2])}const v=new _,A=new _,M=new _,k=new _;function B(y){M.fromArray(r,y*3),k.copy(M);const L=l[y];v.copy(L),v.sub(M.multiplyScalar(M.dot(L))).normalize(),A.crossVectors(k,L);const j=A.dot(E[y])<0?-1:1;s[y*4]=v.x,s[y*4+1]=v.y,s[y*4+2]=v.z,s[y*4+3]=j}for(let y=0,L=C.length;y<L;++y){const N=C[y],j=N.start,T=N.count;for(let S=j,J=j+T;S<J;S+=3)B(i[S+0]),B(i[S+1]),B(i[S+2])}}computeVertexNormals(){const u=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let x=0,c=i.count;x<c;x++)i.setXYZ(x,0,0,0);const n=new _,r=new _,t=new _,o=new _,s=new _,l=new _,E=new _,D=new _;if(u)for(let x=0,c=u.count;x<c;x+=3){const p=u.getX(x+0),d=u.getX(x+1),m=u.getX(x+2);n.fromBufferAttribute(e,p),r.fromBufferAttribute(e,d),t.fromBufferAttribute(e,m),E.subVectors(t,r),D.subVectors(n,r),E.cross(D),o.fromBufferAttribute(i,p),s.fromBufferAttribute(i,d),l.fromBufferAttribute(i,m),o.add(E),s.add(E),l.add(E),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(d,s.x,s.y,s.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let x=0,c=e.count;x<c;x+=3)n.fromBufferAttribute(e,x+0),r.fromBufferAttribute(e,x+1),t.fromBufferAttribute(e,x+2),E.subVectors(t,r),D.subVectors(n,r),E.cross(D),i.setXYZ(x+0,E.x,E.y,E.z),i.setXYZ(x+1,E.x,E.y,E.z),i.setXYZ(x+2,E.x,E.y,E.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const u=this.attributes.normal;for(let e=0,i=u.count;e<i;e++)z0.fromBufferAttribute(u,e),z0.normalize(),u.setXYZ(e,z0.x,z0.y,z0.z)}toNonIndexed(){function u(o,s){const l=o.array,E=o.itemSize,D=o.normalized,x=new l.constructor(s.length*E);let c=0,p=0;for(let d=0,m=s.length;d<m;d++){o.isInterleavedBufferAttribute?c=s[d]*o.data.stride+o.offset:c=s[d]*E;for(let h=0;h<E;h++)x[p++]=l[c++]}return new ke(x,E,D)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pe,i=this.index.array,n=this.attributes;for(const o in n){const s=n[o],l=u(s,i);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const s=[],l=r[o];for(let E=0,D=l.length;E<D;E++){const x=l[E],c=u(x,i);s.push(c)}e.morphAttributes[o]=s}e.morphTargetsRelative=this.morphTargetsRelative;const t=this.groups;for(let o=0,s=t.length;o<s;o++){const l=t[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const u={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(u.uuid=this.uuid,u.type=this.type,this.name!==""&&(u.name=this.name),Object.keys(this.userData).length>0&&(u.userData=this.userData),this.parameters!==void 0){const s=this.parameters;for(const l in s)s[l]!==void 0&&(u[l]=s[l]);return u}u.data={attributes:{}};const e=this.index;e!==null&&(u.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const s in i){const l=i[s];u.data.attributes[s]=l.toJSON(u.data)}const n={};let r=!1;for(const s in this.morphAttributes){const l=this.morphAttributes[s],E=[];for(let D=0,x=l.length;D<x;D++){const c=l[D];E.push(c.toJSON(u.data))}E.length>0&&(n[s]=E,r=!0)}r&&(u.data.morphAttributes=n,u.data.morphTargetsRelative=this.morphTargetsRelative);const t=this.groups;t.length>0&&(u.data.groups=JSON.parse(JSON.stringify(t)));const o=this.boundingSphere;return o!==null&&(u.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),u}clone(){return new this.constructor().copy(this)}copy(u){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=u.name;const i=u.index;i!==null&&this.setIndex(i.clone(e));const n=u.attributes;for(const l in n){const E=n[l];this.setAttribute(l,E.clone(e))}const r=u.morphAttributes;for(const l in r){const E=[],D=r[l];for(let x=0,c=D.length;x<c;x++)E.push(D[x].clone(e));this.morphAttributes[l]=E}this.morphTargetsRelative=u.morphTargetsRelative;const t=u.groups;for(let l=0,E=t.length;l<E;l++){const D=t[l];this.addGroup(D.start,D.count,D.materialIndex)}const o=u.boundingBox;o!==null&&(this.boundingBox=o.clone());const s=u.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=u.drawRange.start,this.drawRange.count=u.drawRange.count,this.userData=u.userData,u.parameters!==void 0&&(this.parameters=Object.assign({},u.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const To=new x0,Na=new j1,br=new Ft,pi=new _,Fi=new _,gi=new _,Ar=new _,an=new _,nn=new du,rn=new du,tn=new du,Br=new _,on=new _;class I0 extends v0{constructor(u=new Pe,e=new Ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=u,this.material=e,this.updateMorphTargets()}copy(u,e){return super.copy(u,e),u.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=u.morphTargetInfluences.slice()),u.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},u.morphTargetDictionary)),this.material=u.material,this.geometry=u.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,t=n.length;r<t;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(u,e){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,t=i.morphTargetsRelative;e.fromBufferAttribute(n,u);const o=this.morphTargetInfluences;if(r&&o){an.set(0,0,0);for(let s=0,l=r.length;s<l;s++){const E=o[s],D=r[s];E!==0&&(Ar.fromBufferAttribute(D,u),t?an.addScaledVector(Ar,E):an.addScaledVector(Ar.sub(e),E))}e.add(an)}return this.isSkinnedMesh&&this.boneTransform(u,e),e}raycast(u,e){const i=this.geometry,n=this.material,r=this.matrixWorld;if(n===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),br.copy(i.boundingSphere),br.applyMatrix4(r),u.ray.intersectsSphere(br)===!1)||(To.copy(r).invert(),Na.copy(u.ray).applyMatrix4(To),i.boundingBox!==null&&Na.intersectsBox(i.boundingBox)===!1))return;let t;const o=i.index,s=i.attributes.position,l=i.attributes.uv,E=i.attributes.uv2,D=i.groups,x=i.drawRange;if(o!==null)if(Array.isArray(n))for(let c=0,p=D.length;c<p;c++){const d=D[c],m=n[d.materialIndex],h=Math.max(d.start,x.start),F=Math.min(o.count,Math.min(d.start+d.count,x.start+x.count));for(let g=h,C=F;g<C;g+=3){const v=o.getX(g),A=o.getX(g+1),M=o.getX(g+2);t=sn(this,m,u,Na,l,E,v,A,M),t&&(t.faceIndex=Math.floor(g/3),t.face.materialIndex=d.materialIndex,e.push(t))}}else{const c=Math.max(0,x.start),p=Math.min(o.count,x.start+x.count);for(let d=c,m=p;d<m;d+=3){const h=o.getX(d),F=o.getX(d+1),g=o.getX(d+2);t=sn(this,n,u,Na,l,E,h,F,g),t&&(t.faceIndex=Math.floor(d/3),e.push(t))}}else if(s!==void 0)if(Array.isArray(n))for(let c=0,p=D.length;c<p;c++){const d=D[c],m=n[d.materialIndex],h=Math.max(d.start,x.start),F=Math.min(s.count,Math.min(d.start+d.count,x.start+x.count));for(let g=h,C=F;g<C;g+=3){const v=g,A=g+1,M=g+2;t=sn(this,m,u,Na,l,E,v,A,M),t&&(t.faceIndex=Math.floor(g/3),t.face.materialIndex=d.materialIndex,e.push(t))}}else{const c=Math.max(0,x.start),p=Math.min(s.count,x.start+x.count);for(let d=c,m=p;d<m;d+=3){const h=d,F=d+1,g=d+2;t=sn(this,n,u,Na,l,E,h,F,g),t&&(t.faceIndex=Math.floor(d/3),e.push(t))}}}}function CE(a,u,e,i,n,r,t,o){let s;if(u.side===ae?s=i.intersectTriangle(t,r,n,!0,o):s=i.intersectTriangle(n,r,t,u.side===aa,o),s===null)return null;on.copy(o),on.applyMatrix4(a.matrixWorld);const l=e.ray.origin.distanceTo(on);return l<e.near||l>e.far?null:{distance:l,point:on.clone(),object:a}}function sn(a,u,e,i,n,r,t,o,s){a.getVertexPosition(t,pi),a.getVertexPosition(o,Fi),a.getVertexPosition(s,gi);const l=CE(a,u,e,i,pi,Fi,gi,Br);if(l){n&&(nn.fromBufferAttribute(n,t),rn.fromBufferAttribute(n,o),tn.fromBufferAttribute(n,s),l.uv=Oe.getUV(Br,pi,Fi,gi,nn,rn,tn,new du)),r&&(nn.fromBufferAttribute(r,t),rn.fromBufferAttribute(r,o),tn.fromBufferAttribute(r,s),l.uv2=Oe.getUV(Br,pi,Fi,gi,nn,rn,tn,new du));const E={a:t,b:o,c:s,normal:new _,materialIndex:0};Oe.getNormal(pi,Fi,gi,E.normal),l.face=E}return l}class si extends Pe{constructor(u=1,e=1,i=1,n=1,r=1,t=1){super(),this.type="BoxGeometry",this.parameters={width:u,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:t};const o=this;n=Math.floor(n),r=Math.floor(r),t=Math.floor(t);const s=[],l=[],E=[],D=[];let x=0,c=0;p("z","y","x",-1,-1,i,e,u,t,r,0),p("z","y","x",1,-1,i,e,-u,t,r,1),p("x","z","y",1,1,u,i,e,n,t,2),p("x","z","y",1,-1,u,i,-e,n,t,3),p("x","y","z",1,-1,u,e,i,n,r,4),p("x","y","z",-1,-1,u,e,-i,n,r,5),this.setIndex(s),this.setAttribute("position",new U0(l,3)),this.setAttribute("normal",new U0(E,3)),this.setAttribute("uv",new U0(D,2));function p(d,m,h,F,g,C,v,A,M,k,B){const y=C/M,L=v/k,N=C/2,j=v/2,T=A/2,S=M+1,J=k+1;let O=0,K=0;const Q=new _;for(let uu=0;uu<J;uu++){const mu=uu*L-j;for(let V=0;V<S;V++){const Z=V*y-N;Q[d]=Z*F,Q[m]=mu*g,Q[h]=T,l.push(Q.x,Q.y,Q.z),Q[d]=0,Q[m]=0,Q[h]=A>0?1:-1,E.push(Q.x,Q.y,Q.z),D.push(V/M),D.push(1-uu/k),O+=1}}for(let uu=0;uu<k;uu++)for(let mu=0;mu<M;mu++){const V=x+mu+S*uu,Z=x+mu+S*(uu+1),ou=x+(mu+1)+S*(uu+1),lu=x+(mu+1)+S*uu;s.push(V,Z,lu),s.push(Z,ou,lu),K+=6}o.addGroup(c,K,B),c+=K,x+=O}}static fromJSON(u){return new si(u.width,u.height,u.depth,u.widthSegments,u.heightSegments,u.depthSegments)}}function ei(a){const u={};for(const e in a){u[e]={};for(const i in a[e]){const n=a[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?u[e][i]=n.clone():Array.isArray(n)?u[e][i]=n.slice():u[e][i]=n}}return u}function G0(a){const u={};for(let e=0;e<a.length;e++){const i=ei(a[e]);for(const n in i)u[n]=i[n]}return u}function vE(a){const u=[];for(let e=0;e<a.length;e++)u.push(a[e].clone());return u}function w1(a){return a.getRenderTarget()===null&&a.outputEncoding===t0?ze:Li}const kt={clone:ei,merge:G0};var fE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ve extends oi{constructor(u){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fE,this.fragmentShader=bE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,u!==void 0&&this.setValues(u)}copy(u){return super.copy(u),this.fragmentShader=u.fragmentShader,this.vertexShader=u.vertexShader,this.uniforms=ei(u.uniforms),this.uniformsGroups=vE(u.uniformsGroups),this.defines=Object.assign({},u.defines),this.wireframe=u.wireframe,this.wireframeLinewidth=u.wireframeLinewidth,this.fog=u.fog,this.lights=u.lights,this.clipping=u.clipping,this.extensions=Object.assign({},u.extensions),this.glslVersion=u.glslVersion,this}toJSON(u){const e=super.toJSON(u);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const t=this.uniforms[n].value;t&&t.isTexture?e.uniforms[n]={type:"t",value:t.toJSON(u).uuid}:t&&t.isColor?e.uniforms[n]={type:"c",value:t.getHex()}:t&&t.isVector2?e.uniforms[n]={type:"v2",value:t.toArray()}:t&&t.isVector3?e.uniforms[n]={type:"v3",value:t.toArray()}:t&&t.isVector4?e.uniforms[n]={type:"v4",value:t.toArray()}:t&&t.isMatrix3?e.uniforms[n]={type:"m3",value:t.toArray()}:t&&t.isMatrix4?e.uniforms[n]={type:"m4",value:t.toArray()}:e.uniforms[n]={value:t}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class _1 extends v0{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new x0,this.projectionMatrix=new x0,this.projectionMatrixInverse=new x0}copy(u,e){return super.copy(u,e),this.matrixWorldInverse.copy(u.matrixWorldInverse),this.projectionMatrix.copy(u.projectionMatrix),this.projectionMatrixInverse.copy(u.projectionMatrixInverse),this}getWorldDirection(u){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return u.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(u){super.updateMatrixWorld(u),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(u,e){super.updateWorldMatrix(u,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ue extends _1{constructor(u=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=u,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(u,e){return super.copy(u,e),this.fov=u.fov,this.zoom=u.zoom,this.near=u.near,this.far=u.far,this.focus=u.focus,this.aspect=u.aspect,this.view=u.view===null?null:Object.assign({},u.view),this.filmGauge=u.filmGauge,this.filmOffset=u.filmOffset,this}setFocalLength(u){const e=.5*this.getFilmHeight()/u;this.fov=vo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const u=Math.tan(tr*.5*this.fov);return .5*this.getFilmHeight()/u}getEffectiveFOV(){return vo*2*Math.atan(Math.tan(tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(u,e,i,n,r,t){this.aspect=u/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=u,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=t,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const u=this.near;let e=u*Math.tan(tr*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n;const t=this.view;if(this.view!==null&&this.view.enabled){const s=t.fullWidth,l=t.fullHeight;r+=t.offsetX*n/s,e-=t.offsetY*i/l,n*=t.width/s,i*=t.height/l}const o=this.filmOffset;o!==0&&(r+=u*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,u,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(u){const e=super.toJSON(u);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ha=-90,Ga=1;class AE extends v0{constructor(u,e,i){super(),this.type="CubeCamera",this.renderTarget=i;const n=new ue(Ha,Ga,u,e);n.layers=this.layers,n.up.set(0,1,0),n.lookAt(1,0,0),this.add(n);const r=new ue(Ha,Ga,u,e);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const t=new ue(Ha,Ga,u,e);t.layers=this.layers,t.up.set(0,0,-1),t.lookAt(0,1,0),this.add(t);const o=new ue(Ha,Ga,u,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const s=new ue(Ha,Ga,u,e);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(0,0,1),this.add(s);const l=new ue(Ha,Ga,u,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(u,e){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[n,r,t,o,s,l]=this.children,E=u.getRenderTarget(),D=u.toneMapping,x=u.xr.enabled;u.toneMapping=je,u.xr.enabled=!1;const c=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,u.setRenderTarget(i,0),u.render(e,n),u.setRenderTarget(i,1),u.render(e,r),u.setRenderTarget(i,2),u.render(e,t),u.setRenderTarget(i,3),u.render(e,o),u.setRenderTarget(i,4),u.render(e,s),i.texture.generateMipmaps=c,u.setRenderTarget(i,5),u.render(e,l),u.setRenderTarget(E),u.toneMapping=D,u.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class L1 extends W0{constructor(u,e,i,n,r,t,o,s,l,E){u=u!==void 0?u:[],e=e!==void 0?e:Qa,super(u,e,i,n,r,t,o,s,l,E),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(u){this.image=u}}class BE extends se{constructor(u=1,e={}){super(u,u,e),this.isWebGLCubeRenderTarget=!0;const i={width:u,height:u,depth:1},n=[i,i,i,i,i,i];this.texture=new L1(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:re}fromEquirectangularTexture(u,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new si(5,5,5),r=new ve({name:"CubemapFromEquirect",uniforms:ei(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ae,blending:ea});r.uniforms.tEquirect.value=e;const t=new I0(n,r),o=e.minFilter;return e.minFilter===wi&&(e.minFilter=re),new AE(1,10,this).update(u,t),e.minFilter=o,t.geometry.dispose(),t.material.dispose(),this}clear(u,e,i,n){const r=u.getRenderTarget();for(let t=0;t<6;t++)u.setRenderTarget(this,t),u.clear(e,i,n);u.setRenderTarget(r)}}const yr=new _,yE=new _,zE=new ee;class ma{constructor(u=new _(1,0,0),e=0){this.isPlane=!0,this.normal=u,this.constant=e}set(u,e){return this.normal.copy(u),this.constant=e,this}setComponents(u,e,i,n){return this.normal.set(u,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(u,e){return this.normal.copy(u),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(u,e,i){const n=yr.subVectors(i,e).cross(yE.subVectors(u,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,u),this}copy(u){return this.normal.copy(u.normal),this.constant=u.constant,this}normalize(){const u=1/this.normal.length();return this.normal.multiplyScalar(u),this.constant*=u,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(u){return this.normal.dot(u)+this.constant}distanceToSphere(u){return this.distanceToPoint(u.center)-u.radius}projectPoint(u,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(u)).add(u)}intersectLine(u,e){const i=u.delta(yr),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(u.start)===0?e.copy(u.start):null;const r=-(u.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(i).multiplyScalar(r).add(u.start)}intersectsLine(u){const e=this.distanceToPoint(u.start),i=this.distanceToPoint(u.end);return e<0&&i>0||i<0&&e>0}intersectsBox(u){return u.intersectsPlane(this)}intersectsSphere(u){return u.intersectsPlane(this)}coplanarPoint(u){return u.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(u,e){const i=e||zE.getNormalMatrix(u),n=this.coplanarPoint(yr).applyMatrix4(u),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(u){return this.constant-=u.dot(this.normal),this}equals(u){return u.normal.equals(this.normal)&&u.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Va=new Ft,ln=new _;class Ct{constructor(u=new ma,e=new ma,i=new ma,n=new ma,r=new ma,t=new ma){this.planes=[u,e,i,n,r,t]}set(u,e,i,n,r,t){const o=this.planes;return o[0].copy(u),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(t),this}copy(u){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(u.planes[i]);return this}setFromProjectionMatrix(u){const e=this.planes,i=u.elements,n=i[0],r=i[1],t=i[2],o=i[3],s=i[4],l=i[5],E=i[6],D=i[7],x=i[8],c=i[9],p=i[10],d=i[11],m=i[12],h=i[13],F=i[14],g=i[15];return e[0].setComponents(o-n,D-s,d-x,g-m).normalize(),e[1].setComponents(o+n,D+s,d+x,g+m).normalize(),e[2].setComponents(o+r,D+l,d+c,g+h).normalize(),e[3].setComponents(o-r,D-l,d-c,g-h).normalize(),e[4].setComponents(o-t,D-E,d-p,g-F).normalize(),e[5].setComponents(o+t,D+E,d+p,g+F).normalize(),this}intersectsObject(u){const e=u.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Va.copy(e.boundingSphere).applyMatrix4(u.matrixWorld),this.intersectsSphere(Va)}intersectsSprite(u){return Va.center.set(0,0,0),Va.radius=.7071067811865476,Va.applyMatrix4(u.matrixWorld),this.intersectsSphere(Va)}intersectsSphere(u){const e=this.planes,i=u.center,n=-u.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(u){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(ln.x=n.normal.x>0?u.max.x:u.min.x,ln.y=n.normal.y>0?u.max.y:u.min.y,ln.z=n.normal.z>0?u.max.z:u.min.z,n.distanceToPoint(ln)<0)return!1}return!0}containsPoint(u){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(u)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function R1(){let a=null,u=!1,e=null,i=null;function n(r,t){e(r,t),i=a.requestAnimationFrame(n)}return{start:function(){u!==!0&&e!==null&&(i=a.requestAnimationFrame(n),u=!0)},stop:function(){a.cancelAnimationFrame(i),u=!1},setAnimationLoop:function(r){e=r},setContext:function(r){a=r}}}function SE(a,u){const e=u.isWebGL2,i=new WeakMap;function n(l,E){const D=l.array,x=l.usage,c=a.createBuffer();a.bindBuffer(E,c),a.bufferData(E,D,x),l.onUploadCallback();let p;if(D instanceof Float32Array)p=5126;else if(D instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)p=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else p=5123;else if(D instanceof Int16Array)p=5122;else if(D instanceof Uint32Array)p=5125;else if(D instanceof Int32Array)p=5124;else if(D instanceof Int8Array)p=5120;else if(D instanceof Uint8Array)p=5121;else if(D instanceof Uint8ClampedArray)p=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+D);return{buffer:c,type:p,bytesPerElement:D.BYTES_PER_ELEMENT,version:l.version}}function r(l,E,D){const x=E.array,c=E.updateRange;a.bindBuffer(D,l),c.count===-1?a.bufferSubData(D,0,x):(e?a.bufferSubData(D,c.offset*x.BYTES_PER_ELEMENT,x,c.offset,c.count):a.bufferSubData(D,c.offset*x.BYTES_PER_ELEMENT,x.subarray(c.offset,c.offset+c.count)),c.count=-1),E.onUploadCallback()}function t(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const E=i.get(l);E&&(a.deleteBuffer(E.buffer),i.delete(l))}function s(l,E){if(l.isGLBufferAttribute){const x=i.get(l);(!x||x.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const D=i.get(l);D===void 0?i.set(l,n(l,E)):D.version<l.version&&(r(D.buffer,l,E),D.version=l.version)}return{get:t,remove:o,update:s}}class vt extends Pe{constructor(u=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:u,height:e,widthSegments:i,heightSegments:n};const r=u/2,t=e/2,o=Math.floor(i),s=Math.floor(n),l=o+1,E=s+1,D=u/o,x=e/s,c=[],p=[],d=[],m=[];for(let h=0;h<E;h++){const F=h*x-t;for(let g=0;g<l;g++){const C=g*D-r;p.push(C,-F,0),d.push(0,0,1),m.push(g/o),m.push(1-h/s)}}for(let h=0;h<s;h++)for(let F=0;F<o;F++){const g=F+l*h,C=F+l*(h+1),v=F+1+l*(h+1),A=F+1+l*h;c.push(g,C,A),c.push(C,v,A)}this.setIndex(c),this.setAttribute("position",new U0(p,3)),this.setAttribute("normal",new U0(d,3)),this.setAttribute("uv",new U0(m,2))}static fromJSON(u){return new vt(u.width,u.height,u.widthSegments,u.heightSegments)}}var ME=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,jE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PE=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,TE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_E=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,LE="vec3 transformed = vec3( position );",RE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KE=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,NE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,HE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,GE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,VE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,IE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,JE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,OE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,WE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,UE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$E=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,qE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,ZE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,YE=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,QE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,uD=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eD=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aD="gl_FragColor = linearToOutputTexel( gl_FragColor );",iD=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nD=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rD=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tD=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,oD=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sD=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lD=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ED=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DD=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xD=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cD=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dD=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,mD=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hD=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pD=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FD=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gD=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,kD=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,CD=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vD=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fD=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bD=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,AD=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,BD=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yD=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zD=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,SD=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,MD=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jD=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,PD=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,TD=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wD=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_D=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,LD=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RD=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KD=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ND=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,HD=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,GD=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,VD=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ID=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,JD=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,OD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UD=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$D=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,qD=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ZD=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,YD=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,QD=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XD=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,u5=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,e5=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,a5=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i5=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n5=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r5=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,t5=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,o5=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,s5=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,l5=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,E5=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,D5=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,x5=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,c5=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,d5=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,m5=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,h5=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,p5=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,F5=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,g5=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,k5=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,C5=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,v5=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,f5=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,b5=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,A5=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,B5=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,y5=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const z5=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,S5=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,M5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j5=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,P5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T5=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,w5=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_5=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,L5=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,R5=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,K5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,N5=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,H5=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,G5=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,V5=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,I5=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J5=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O5=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W5=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,U5=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$5=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,q5=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Z5=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y5=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q5=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,X5=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ux=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ex=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ax=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ix=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nx=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,tx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ox=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ou={alphamap_fragment:ME,alphamap_pars_fragment:jE,alphatest_fragment:PE,alphatest_pars_fragment:TE,aomap_fragment:wE,aomap_pars_fragment:_E,begin_vertex:LE,beginnormal_vertex:RE,bsdfs:KE,iridescence_fragment:NE,bumpmap_pars_fragment:HE,clipping_planes_fragment:GE,clipping_planes_pars_fragment:VE,clipping_planes_pars_vertex:IE,clipping_planes_vertex:JE,color_fragment:OE,color_pars_fragment:WE,color_pars_vertex:UE,color_vertex:$E,common:qE,cube_uv_reflection_fragment:ZE,defaultnormal_vertex:YE,displacementmap_pars_vertex:QE,displacementmap_vertex:XE,emissivemap_fragment:uD,emissivemap_pars_fragment:eD,encodings_fragment:aD,encodings_pars_fragment:iD,envmap_fragment:nD,envmap_common_pars_fragment:rD,envmap_pars_fragment:tD,envmap_pars_vertex:oD,envmap_physical_pars_fragment:gD,envmap_vertex:sD,fog_vertex:lD,fog_pars_vertex:ED,fog_fragment:DD,fog_pars_fragment:xD,gradientmap_pars_fragment:cD,lightmap_fragment:dD,lightmap_pars_fragment:mD,lights_lambert_fragment:hD,lights_lambert_pars_fragment:pD,lights_pars_begin:FD,lights_toon_fragment:kD,lights_toon_pars_fragment:CD,lights_phong_fragment:vD,lights_phong_pars_fragment:fD,lights_physical_fragment:bD,lights_physical_pars_fragment:AD,lights_fragment_begin:BD,lights_fragment_maps:yD,lights_fragment_end:zD,logdepthbuf_fragment:SD,logdepthbuf_pars_fragment:MD,logdepthbuf_pars_vertex:jD,logdepthbuf_vertex:PD,map_fragment:TD,map_pars_fragment:wD,map_particle_fragment:_D,map_particle_pars_fragment:LD,metalnessmap_fragment:RD,metalnessmap_pars_fragment:KD,morphcolor_vertex:ND,morphnormal_vertex:HD,morphtarget_pars_vertex:GD,morphtarget_vertex:VD,normal_fragment_begin:ID,normal_fragment_maps:JD,normal_pars_fragment:OD,normal_pars_vertex:WD,normal_vertex:UD,normalmap_pars_fragment:$D,clearcoat_normal_fragment_begin:qD,clearcoat_normal_fragment_maps:ZD,clearcoat_pars_fragment:YD,iridescence_pars_fragment:QD,output_fragment:XD,packing:u5,premultiplied_alpha_fragment:e5,project_vertex:a5,dithering_fragment:i5,dithering_pars_fragment:n5,roughnessmap_fragment:r5,roughnessmap_pars_fragment:t5,shadowmap_pars_fragment:o5,shadowmap_pars_vertex:s5,shadowmap_vertex:l5,shadowmask_pars_fragment:E5,skinbase_vertex:D5,skinning_pars_vertex:x5,skinning_vertex:c5,skinnormal_vertex:d5,specularmap_fragment:m5,specularmap_pars_fragment:h5,tonemapping_fragment:p5,tonemapping_pars_fragment:F5,transmission_fragment:g5,transmission_pars_fragment:k5,uv_pars_fragment:C5,uv_pars_vertex:v5,uv_vertex:f5,uv2_pars_fragment:b5,uv2_pars_vertex:A5,uv2_vertex:B5,worldpos_vertex:y5,background_vert:z5,background_frag:S5,backgroundCube_vert:M5,backgroundCube_frag:j5,cube_vert:P5,cube_frag:T5,depth_vert:w5,depth_frag:_5,distanceRGBA_vert:L5,distanceRGBA_frag:R5,equirect_vert:K5,equirect_frag:N5,linedashed_vert:H5,linedashed_frag:G5,meshbasic_vert:V5,meshbasic_frag:I5,meshlambert_vert:J5,meshlambert_frag:O5,meshmatcap_vert:W5,meshmatcap_frag:U5,meshnormal_vert:$5,meshnormal_frag:q5,meshphong_vert:Z5,meshphong_frag:Y5,meshphysical_vert:Q5,meshphysical_frag:X5,meshtoon_vert:ux,meshtoon_frag:ex,points_vert:ax,points_frag:ix,shadow_vert:nx,shadow_frag:rx,sprite_vert:tx,sprite_frag:ox},cu={common:{diffuse:{value:new a0(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new ee},uv2Transform:{value:new ee},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new du(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new a0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new a0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new a0(16777215)},opacity:{value:1},center:{value:new du(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ee}}},Se={basic:{uniforms:G0([cu.common,cu.specularmap,cu.envmap,cu.aomap,cu.lightmap,cu.fog]),vertexShader:Ou.meshbasic_vert,fragmentShader:Ou.meshbasic_frag},lambert:{uniforms:G0([cu.common,cu.specularmap,cu.envmap,cu.aomap,cu.lightmap,cu.emissivemap,cu.bumpmap,cu.normalmap,cu.displacementmap,cu.fog,cu.lights,{emissive:{value:new a0(0)}}]),vertexShader:Ou.meshlambert_vert,fragmentShader:Ou.meshlambert_frag},phong:{uniforms:G0([cu.common,cu.specularmap,cu.envmap,cu.aomap,cu.lightmap,cu.emissivemap,cu.bumpmap,cu.normalmap,cu.displacementmap,cu.fog,cu.lights,{emissive:{value:new a0(0)},specular:{value:new a0(1118481)},shininess:{value:30}}]),vertexShader:Ou.meshphong_vert,fragmentShader:Ou.meshphong_frag},standard:{uniforms:G0([cu.common,cu.envmap,cu.aomap,cu.lightmap,cu.emissivemap,cu.bumpmap,cu.normalmap,cu.displacementmap,cu.roughnessmap,cu.metalnessmap,cu.fog,cu.lights,{emissive:{value:new a0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ou.meshphysical_vert,fragmentShader:Ou.meshphysical_frag},toon:{uniforms:G0([cu.common,cu.aomap,cu.lightmap,cu.emissivemap,cu.bumpmap,cu.normalmap,cu.displacementmap,cu.gradientmap,cu.fog,cu.lights,{emissive:{value:new a0(0)}}]),vertexShader:Ou.meshtoon_vert,fragmentShader:Ou.meshtoon_frag},matcap:{uniforms:G0([cu.common,cu.bumpmap,cu.normalmap,cu.displacementmap,cu.fog,{matcap:{value:null}}]),vertexShader:Ou.meshmatcap_vert,fragmentShader:Ou.meshmatcap_frag},points:{uniforms:G0([cu.points,cu.fog]),vertexShader:Ou.points_vert,fragmentShader:Ou.points_frag},dashed:{uniforms:G0([cu.common,cu.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ou.linedashed_vert,fragmentShader:Ou.linedashed_frag},depth:{uniforms:G0([cu.common,cu.displacementmap]),vertexShader:Ou.depth_vert,fragmentShader:Ou.depth_frag},normal:{uniforms:G0([cu.common,cu.bumpmap,cu.normalmap,cu.displacementmap,{opacity:{value:1}}]),vertexShader:Ou.meshnormal_vert,fragmentShader:Ou.meshnormal_frag},sprite:{uniforms:G0([cu.sprite,cu.fog]),vertexShader:Ou.sprite_vert,fragmentShader:Ou.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ou.background_vert,fragmentShader:Ou.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ou.backgroundCube_vert,fragmentShader:Ou.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ou.cube_vert,fragmentShader:Ou.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ou.equirect_vert,fragmentShader:Ou.equirect_frag},distanceRGBA:{uniforms:G0([cu.common,cu.displacementmap,{referencePosition:{value:new _},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ou.distanceRGBA_vert,fragmentShader:Ou.distanceRGBA_frag},shadow:{uniforms:G0([cu.lights,cu.fog,{color:{value:new a0(0)},opacity:{value:1}}]),vertexShader:Ou.shadow_vert,fragmentShader:Ou.shadow_frag}};Se.physical={uniforms:G0([Se.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new du(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new a0(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new du},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new a0(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new a0(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ou.meshphysical_vert,fragmentShader:Ou.meshphysical_frag};const En={r:0,b:0,g:0};function sx(a,u,e,i,n,r,t){const o=new a0(0);let s=r===!0?0:1,l,E,D=null,x=0,c=null;function p(m,h){let F=!1,g=h.isScene===!0?h.background:null;g&&g.isTexture&&(g=(h.backgroundBlurriness>0?e:u).get(g));const C=a.xr,v=C.getSession&&C.getSession();v&&v.environmentBlendMode==="additive"&&(g=null),g===null?d(o,s):g&&g.isColor&&(d(g,1),F=!0),(a.autoClear||F)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Hn)?(E===void 0&&(E=new I0(new si(1,1,1),new ve({name:"BackgroundCubeMaterial",uniforms:ei(Se.backgroundCube.uniforms),vertexShader:Se.backgroundCube.vertexShader,fragmentShader:Se.backgroundCube.fragmentShader,side:ae,depthTest:!1,depthWrite:!1,fog:!1})),E.geometry.deleteAttribute("normal"),E.geometry.deleteAttribute("uv"),E.onBeforeRender=function(A,M,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(E.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(E)),E.material.uniforms.envMap.value=g,E.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,E.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,E.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,E.material.toneMapped=g.encoding!==t0,(D!==g||x!==g.version||c!==a.toneMapping)&&(E.material.needsUpdate=!0,D=g,x=g.version,c=a.toneMapping),E.layers.enableAll(),m.unshift(E,E.geometry,E.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new I0(new vt(2,2),new ve({name:"BackgroundMaterial",uniforms:ei(Se.background.uniforms),vertexShader:Se.background.vertexShader,fragmentShader:Se.background.fragmentShader,side:aa,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,l.material.toneMapped=g.encoding!==t0,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(D!==g||x!==g.version||c!==a.toneMapping)&&(l.material.needsUpdate=!0,D=g,x=g.version,c=a.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function d(m,h){m.getRGB(En,w1(a)),i.buffers.color.setClear(En.r,En.g,En.b,h,t)}return{getClearColor:function(){return o},setClearColor:function(m,h=1){o.set(m),s=h,d(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(m){s=m,d(o,s)},render:p}}function lx(a,u,e,i){const n=a.getParameter(34921),r=i.isWebGL2?null:u.get("OES_vertex_array_object"),t=i.isWebGL2||r!==null,o={},s=m(null);let l=s,E=!1;function D(T,S,J,O,K){let Q=!1;if(t){const uu=d(O,J,S);l!==uu&&(l=uu,c(l.object)),Q=h(T,O,J,K),Q&&F(T,O,J,K)}else{const uu=S.wireframe===!0;(l.geometry!==O.id||l.program!==J.id||l.wireframe!==uu)&&(l.geometry=O.id,l.program=J.id,l.wireframe=uu,Q=!0)}K!==null&&e.update(K,34963),(Q||E)&&(E=!1,k(T,S,J,O),K!==null&&a.bindBuffer(34963,e.get(K).buffer))}function x(){return i.isWebGL2?a.createVertexArray():r.createVertexArrayOES()}function c(T){return i.isWebGL2?a.bindVertexArray(T):r.bindVertexArrayOES(T)}function p(T){return i.isWebGL2?a.deleteVertexArray(T):r.deleteVertexArrayOES(T)}function d(T,S,J){const O=J.wireframe===!0;let K=o[T.id];K===void 0&&(K={},o[T.id]=K);let Q=K[S.id];Q===void 0&&(Q={},K[S.id]=Q);let uu=Q[O];return uu===void 0&&(uu=m(x()),Q[O]=uu),uu}function m(T){const S=[],J=[],O=[];for(let K=0;K<n;K++)S[K]=0,J[K]=0,O[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:J,attributeDivisors:O,object:T,attributes:{},index:null}}function h(T,S,J,O){const K=l.attributes,Q=S.attributes;let uu=0;const mu=J.getAttributes();for(const V in mu)if(mu[V].location>=0){const ou=K[V];let lu=Q[V];if(lu===void 0&&(V==="instanceMatrix"&&T.instanceMatrix&&(lu=T.instanceMatrix),V==="instanceColor"&&T.instanceColor&&(lu=T.instanceColor)),ou===void 0||ou.attribute!==lu||lu&&ou.data!==lu.data)return!0;uu++}return l.attributesNum!==uu||l.index!==O}function F(T,S,J,O){const K={},Q=S.attributes;let uu=0;const mu=J.getAttributes();for(const V in mu)if(mu[V].location>=0){let ou=Q[V];ou===void 0&&(V==="instanceMatrix"&&T.instanceMatrix&&(ou=T.instanceMatrix),V==="instanceColor"&&T.instanceColor&&(ou=T.instanceColor));const lu={};lu.attribute=ou,ou&&ou.data&&(lu.data=ou.data),K[V]=lu,uu++}l.attributes=K,l.attributesNum=uu,l.index=O}function g(){const T=l.newAttributes;for(let S=0,J=T.length;S<J;S++)T[S]=0}function C(T){v(T,0)}function v(T,S){const J=l.newAttributes,O=l.enabledAttributes,K=l.attributeDivisors;J[T]=1,O[T]===0&&(a.enableVertexAttribArray(T),O[T]=1),K[T]!==S&&((i.isWebGL2?a:u.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](T,S),K[T]=S)}function A(){const T=l.newAttributes,S=l.enabledAttributes;for(let J=0,O=S.length;J<O;J++)S[J]!==T[J]&&(a.disableVertexAttribArray(J),S[J]=0)}function M(T,S,J,O,K,Q){i.isWebGL2===!0&&(J===5124||J===5125)?a.vertexAttribIPointer(T,S,J,K,Q):a.vertexAttribPointer(T,S,J,O,K,Q)}function k(T,S,J,O){if(i.isWebGL2===!1&&(T.isInstancedMesh||O.isInstancedBufferGeometry)&&u.get("ANGLE_instanced_arrays")===null)return;g();const K=O.attributes,Q=J.getAttributes(),uu=S.defaultAttributeValues;for(const mu in Q){const V=Q[mu];if(V.location>=0){let Z=K[mu];if(Z===void 0&&(mu==="instanceMatrix"&&T.instanceMatrix&&(Z=T.instanceMatrix),mu==="instanceColor"&&T.instanceColor&&(Z=T.instanceColor)),Z!==void 0){const ou=Z.normalized,lu=Z.itemSize,G=e.get(Z);if(G===void 0)continue;const ru=G.buffer,vu=G.type,pu=G.bytesPerElement;if(Z.isInterleavedBufferAttribute){const xu=Z.data,Ju=xu.stride,P=Z.offset;if(xu.isInstancedInterleavedBuffer){for(let I=0;I<V.locationSize;I++)v(V.location+I,xu.meshPerAttribute);T.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=xu.meshPerAttribute*xu.count)}else for(let I=0;I<V.locationSize;I++)C(V.location+I);a.bindBuffer(34962,ru);for(let I=0;I<V.locationSize;I++)M(V.location+I,lu/V.locationSize,vu,ou,Ju*pu,(P+lu/V.locationSize*I)*pu)}else{if(Z.isInstancedBufferAttribute){for(let xu=0;xu<V.locationSize;xu++)v(V.location+xu,Z.meshPerAttribute);T.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let xu=0;xu<V.locationSize;xu++)C(V.location+xu);a.bindBuffer(34962,ru);for(let xu=0;xu<V.locationSize;xu++)M(V.location+xu,lu/V.locationSize,vu,ou,lu*pu,lu/V.locationSize*xu*pu)}}else if(uu!==void 0){const ou=uu[mu];if(ou!==void 0)switch(ou.length){case 2:a.vertexAttrib2fv(V.location,ou);break;case 3:a.vertexAttrib3fv(V.location,ou);break;case 4:a.vertexAttrib4fv(V.location,ou);break;default:a.vertexAttrib1fv(V.location,ou)}}}}A()}function B(){N();for(const T in o){const S=o[T];for(const J in S){const O=S[J];for(const K in O)p(O[K].object),delete O[K];delete S[J]}delete o[T]}}function y(T){if(o[T.id]===void 0)return;const S=o[T.id];for(const J in S){const O=S[J];for(const K in O)p(O[K].object),delete O[K];delete S[J]}delete o[T.id]}function L(T){for(const S in o){const J=o[S];if(J[T.id]===void 0)continue;const O=J[T.id];for(const K in O)p(O[K].object),delete O[K];delete J[T.id]}}function N(){j(),E=!0,l!==s&&(l=s,c(l.object))}function j(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:D,reset:N,resetDefaultState:j,dispose:B,releaseStatesOfGeometry:y,releaseStatesOfProgram:L,initAttributes:g,enableAttribute:C,disableUnusedAttributes:A}}function Ex(a,u,e,i){const n=i.isWebGL2;let r;function t(l){r=l}function o(l,E){a.drawArrays(r,l,E),e.update(E,r,1)}function s(l,E,D){if(D===0)return;let x,c;if(n)x=a,c="drawArraysInstanced";else if(x=u.get("ANGLE_instanced_arrays"),c="drawArraysInstancedANGLE",x===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[c](r,l,E,D),e.update(E,r,D)}this.setMode=t,this.render=o,this.renderInstances=s}function Dx(a,u,e){let i;function n(){if(i!==void 0)return i;if(u.has("EXT_texture_filter_anisotropic")===!0){const M=u.get("EXT_texture_filter_anisotropic");i=a.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(M){if(M==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";M="mediump"}return M==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const t=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext;let o=e.precision!==void 0?e.precision:"highp";const s=r(o);s!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",s,"instead."),o=s);const l=t||u.has("WEBGL_draw_buffers"),E=e.logarithmicDepthBuffer===!0,D=a.getParameter(34930),x=a.getParameter(35660),c=a.getParameter(3379),p=a.getParameter(34076),d=a.getParameter(34921),m=a.getParameter(36347),h=a.getParameter(36348),F=a.getParameter(36349),g=x>0,C=t||u.has("OES_texture_float"),v=g&&C,A=t?a.getParameter(36183):0;return{isWebGL2:t,drawBuffers:l,getMaxAnisotropy:n,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:E,maxTextures:D,maxVertexTextures:x,maxTextureSize:c,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:F,vertexTextures:g,floatFragmentTextures:C,floatVertexTextures:v,maxSamples:A}}function xx(a){const u=this;let e=null,i=0,n=!1,r=!1;const t=new ma,o=new ee,s={value:null,needsUpdate:!1};this.uniform=s,this.numPlanes=0,this.numIntersection=0,this.init=function(D,x){const c=D.length!==0||x||i!==0||n;return n=x,i=D.length,c},this.beginShadows=function(){r=!0,E(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(D,x){e=E(D,x,0)},this.setState=function(D,x,c){const p=D.clippingPlanes,d=D.clipIntersection,m=D.clipShadows,h=a.get(D);if(!n||p===null||p.length===0||r&&!m)r?E(null):l();else{const F=r?0:i,g=F*4;let C=h.clippingState||null;s.value=C,C=E(p,x,g,c);for(let v=0;v!==g;++v)C[v]=e[v];h.clippingState=C,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=F}};function l(){s.value!==e&&(s.value=e,s.needsUpdate=i>0),u.numPlanes=i,u.numIntersection=0}function E(D,x,c,p){const d=D!==null?D.length:0;let m=null;if(d!==0){if(m=s.value,p!==!0||m===null){const h=c+d*4,F=x.matrixWorldInverse;o.getNormalMatrix(F),(m===null||m.length<h)&&(m=new Float32Array(h));for(let g=0,C=c;g!==d;++g,C+=4)t.copy(D[g]).applyMatrix4(F,o),t.normal.toArray(m,C),m[C+3]=t.constant}s.value=m,s.needsUpdate=!0}return u.numPlanes=d,u.numIntersection=0,m}}function cx(a){let u=new WeakMap;function e(t,o){return o===Or?t.mapping=Qa:o===Wr&&(t.mapping=Xa),t}function i(t){if(t&&t.isTexture&&t.isRenderTargetTexture===!1){const o=t.mapping;if(o===Or||o===Wr)if(u.has(t)){const s=u.get(t).texture;return e(s,t.mapping)}else{const s=t.image;if(s&&s.height>0){const l=new BE(s.height/2);return l.fromEquirectangularTexture(a,t),u.set(t,l),t.addEventListener("dispose",n),e(l.texture,t.mapping)}else return null}}return t}function n(t){const o=t.target;o.removeEventListener("dispose",n);const s=u.get(o);s!==void 0&&(u.delete(o),s.dispose())}function r(){u=new WeakMap}return{get:i,dispose:r}}class K1 extends _1{constructor(u=-1,e=1,i=1,n=-1,r=.1,t=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=u,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=t,this.updateProjectionMatrix()}copy(u,e){return super.copy(u,e),this.left=u.left,this.right=u.right,this.top=u.top,this.bottom=u.bottom,this.near=u.near,this.far=u.far,this.zoom=u.zoom,this.view=u.view===null?null:Object.assign({},u.view),this}setViewOffset(u,e,i,n,r,t){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=u,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=t,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const u=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-u,t=i+u,o=n+e,s=n-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,E=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,t=r+l*this.view.width,o-=E*this.view.offsetY,s=o-E*this.view.height}this.projectionMatrix.makeOrthographic(r,t,o,s,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(u){const e=super.toJSON(u);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ua=4,wo=[.125,.215,.35,.446,.526,.582],pa=20,zr=new K1,_o=new a0;let Sr=null;const ha=(1+Math.sqrt(5))/2,Ia=1/ha,Lo=[new _(1,1,1),new _(-1,1,1),new _(1,1,-1),new _(-1,1,-1),new _(0,ha,Ia),new _(0,ha,-Ia),new _(Ia,0,ha),new _(-Ia,0,ha),new _(ha,Ia,0),new _(-ha,Ia,0)];class Ro{constructor(u){this._renderer=u,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(u,e=0,i=.1,n=100){Sr=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(u,i,n,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(u,e=null){return this._fromTexture(u,e)}fromCubemap(u,e=null){return this._fromTexture(u,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ho(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=No(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(u){this._lodMax=Math.floor(Math.log2(u)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let u=0;u<this._lodPlanes.length;u++)this._lodPlanes[u].dispose()}_cleanup(u){this._renderer.setRenderTarget(Sr),u.scissorTest=!1,Dn(u,0,0,u.width,u.height)}_fromTexture(u,e){u.mapping===Qa||u.mapping===Xa?this._setSize(u.image.length===0?16:u.image[0].width||u.image[0].image.width):this._setSize(u.image.width/4),Sr=this._renderer.getRenderTarget();const i=e||this._allocateTargets();return this._textureToCubeUV(u,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const u=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:re,minFilter:re,generateMipmaps:!1,type:_i,format:me,encoding:ia,depthBuffer:!1},n=Ko(u,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==u||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ko(u,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dx(r)),this._blurMaterial=mx(r,u,e)}return n}_compileMaterial(u){const e=new I0(this._lodPlanes[0],u);this._renderer.compile(e,zr)}_sceneToCubeUV(u,e,i,n){const o=new ue(90,1,e,i),s=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],E=this._renderer,D=E.autoClear,x=E.toneMapping;E.getClearColor(_o),E.toneMapping=je,E.autoClear=!1;const c=new Ji({name:"PMREM.Background",side:ae,depthWrite:!1,depthTest:!1}),p=new I0(new si,c);let d=!1;const m=u.background;m?m.isColor&&(c.color.copy(m),u.background=null,d=!0):(c.color.copy(_o),d=!0);for(let h=0;h<6;h++){const F=h%3;F===0?(o.up.set(0,s[h],0),o.lookAt(l[h],0,0)):F===1?(o.up.set(0,0,s[h]),o.lookAt(0,l[h],0)):(o.up.set(0,s[h],0),o.lookAt(0,0,l[h]));const g=this._cubeSize;Dn(n,F*g,h>2?g:0,g,g),E.setRenderTarget(n),d&&E.render(p,o),E.render(u,o)}p.geometry.dispose(),p.material.dispose(),E.toneMapping=x,E.autoClear=D,u.background=m}_textureToCubeUV(u,e){const i=this._renderer,n=u.mapping===Qa||u.mapping===Xa;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ho()),this._cubemapMaterial.uniforms.flipEnvMap.value=u.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=No());const r=n?this._cubemapMaterial:this._equirectMaterial,t=new I0(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=u;const s=this._cubeSize;Dn(e,0,0,3*s,2*s),i.setRenderTarget(e),i.render(t,zr)}_applyPMREM(u){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const r=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),t=Lo[(n-1)%Lo.length];this._blur(u,n-1,n,r,t)}e.autoClear=i}_blur(u,e,i,n,r){const t=this._pingPongRenderTarget;this._halfBlur(u,t,e,i,n,"latitudinal",r),this._halfBlur(t,u,i,i,n,"longitudinal",r)}_halfBlur(u,e,i,n,r,t,o){const s=this._renderer,l=this._blurMaterial;t!=="latitudinal"&&t!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const E=3,D=new I0(this._lodPlanes[n],l),x=l.uniforms,c=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*c):2*Math.PI/(2*pa-1),d=r/p,m=isFinite(r)?1+Math.floor(E*d):pa;m>pa&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${pa}`);const h=[];let F=0;for(let M=0;M<pa;++M){const k=M/d,B=Math.exp(-k*k/2);h.push(B),M===0?F+=B:M<m&&(F+=2*B)}for(let M=0;M<h.length;M++)h[M]=h[M]/F;x.envMap.value=u.texture,x.samples.value=m,x.weights.value=h,x.latitudinal.value=t==="latitudinal",o&&(x.poleAxis.value=o);const{_lodMax:g}=this;x.dTheta.value=p,x.mipInt.value=g-i;const C=this._sizeLods[n],v=3*C*(n>g-Ua?n-g+Ua:0),A=4*(this._cubeSize-C);Dn(e,v,A,3*C,2*C),s.setRenderTarget(e),s.render(D,zr)}}function dx(a){const u=[],e=[],i=[];let n=a;const r=a-Ua+1+wo.length;for(let t=0;t<r;t++){const o=Math.pow(2,n);e.push(o);let s=1/o;t>a-Ua?s=wo[t-a+Ua-1]:t===0&&(s=0),i.push(s);const l=1/(o-2),E=-l,D=1+l,x=[E,E,D,E,D,D,E,E,D,D,E,D],c=6,p=6,d=3,m=2,h=1,F=new Float32Array(d*p*c),g=new Float32Array(m*p*c),C=new Float32Array(h*p*c);for(let A=0;A<c;A++){const M=A%3*2/3-1,k=A>2?0:-1,B=[M,k,0,M+2/3,k,0,M+2/3,k+1,0,M,k,0,M+2/3,k+1,0,M,k+1,0];F.set(B,d*p*A),g.set(x,m*p*A);const y=[A,A,A,A,A,A];C.set(y,h*p*A)}const v=new Pe;v.setAttribute("position",new ke(F,d)),v.setAttribute("uv",new ke(g,m)),v.setAttribute("faceIndex",new ke(C,h)),u.push(v),n>Ua&&n--}return{lodPlanes:u,sizeLods:e,sigmas:i}}function Ko(a,u,e){const i=new se(a,u,e);return i.texture.mapping=Hn,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Dn(a,u,e,i,n){a.viewport.set(u,e,i,n),a.scissor.set(u,e,i,n)}function mx(a,u,e){const i=new Float32Array(pa),n=new _(0,1,0);return new ve({name:"SphericalGaussianBlur",defines:{n:pa,CUBEUV_TEXEL_WIDTH:1/u,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:ft(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ea,depthTest:!1,depthWrite:!1})}function No(){return new ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ft(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ea,depthTest:!1,depthWrite:!1})}function Ho(){return new ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ft(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ea,depthTest:!1,depthWrite:!1})}function ft(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hx(a){let u=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const s=o.mapping,l=s===Or||s===Wr,E=s===Qa||s===Xa;if(l||E)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let D=u.get(o);return e===null&&(e=new Ro(a)),D=l?e.fromEquirectangular(o,D):e.fromCubemap(o,D),u.set(o,D),D.texture}else{if(u.has(o))return u.get(o).texture;{const D=o.image;if(l&&D&&D.height>0||E&&D&&n(D)){e===null&&(e=new Ro(a));const x=l?e.fromEquirectangular(o):e.fromCubemap(o);return u.set(o,x),o.addEventListener("dispose",r),x.texture}else return null}}}return o}function n(o){let s=0;const l=6;for(let E=0;E<l;E++)o[E]!==void 0&&s++;return s===l}function r(o){const s=o.target;s.removeEventListener("dispose",r);const l=u.get(s);l!==void 0&&(u.delete(s),l.dispose())}function t(){u=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:t}}function px(a){const u={};function e(i){if(u[i]!==void 0)return u[i];let n;switch(i){case"WEBGL_depth_texture":n=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=a.getExtension(i)}return u[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Fx(a,u,e,i){const n={},r=new WeakMap;function t(D){const x=D.target;x.index!==null&&u.remove(x.index);for(const p in x.attributes)u.remove(x.attributes[p]);x.removeEventListener("dispose",t),delete n[x.id];const c=r.get(x);c&&(u.remove(c),r.delete(x)),i.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,e.memory.geometries--}function o(D,x){return n[x.id]===!0||(x.addEventListener("dispose",t),n[x.id]=!0,e.memory.geometries++),x}function s(D){const x=D.attributes;for(const p in x)u.update(x[p],34962);const c=D.morphAttributes;for(const p in c){const d=c[p];for(let m=0,h=d.length;m<h;m++)u.update(d[m],34962)}}function l(D){const x=[],c=D.index,p=D.attributes.position;let d=0;if(c!==null){const F=c.array;d=c.version;for(let g=0,C=F.length;g<C;g+=3){const v=F[g+0],A=F[g+1],M=F[g+2];x.push(v,A,A,M,M,v)}}else{const F=p.array;d=p.version;for(let g=0,C=F.length/3-1;g<C;g+=3){const v=g+0,A=g+1,M=g+2;x.push(v,A,A,M,M,v)}}const m=new(B1(x)?T1:P1)(x,1);m.version=d;const h=r.get(D);h&&u.remove(h),r.set(D,m)}function E(D){const x=r.get(D);if(x){const c=D.index;c!==null&&x.version<c.version&&l(D)}else l(D);return r.get(D)}return{get:o,update:s,getWireframeAttribute:E}}function gx(a,u,e,i){const n=i.isWebGL2;let r;function t(x){r=x}let o,s;function l(x){o=x.type,s=x.bytesPerElement}function E(x,c){a.drawElements(r,c,o,x*s),e.update(c,r,1)}function D(x,c,p){if(p===0)return;let d,m;if(n)d=a,m="drawElementsInstanced";else if(d=u.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](r,c,o,x*s,p),e.update(c,r,p)}this.setMode=t,this.setIndex=l,this.render=E,this.renderInstances=D}function kx(a){const u={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,t,o){switch(e.calls++,t){case 4:e.triangles+=o*(r/3);break;case 1:e.lines+=o*(r/2);break;case 3:e.lines+=o*(r-1);break;case 2:e.lines+=o*r;break;case 0:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",t);break}}function n(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:u,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Cx(a,u){return a[0]-u[0]}function vx(a,u){return Math.abs(u[1])-Math.abs(a[1])}function fx(a,u,e){const i={},n=new Float32Array(8),r=new WeakMap,t=new M0,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function s(l,E,D,x){const c=l.morphTargetInfluences;if(u.isWebGL2===!0){const d=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,m=d!==void 0?d.length:0;let h=r.get(E);if(h===void 0||h.count!==m){let J=function(){T.dispose(),r.delete(E),E.removeEventListener("dispose",J)};var p=J;h!==void 0&&h.texture.dispose();const C=E.morphAttributes.position!==void 0,v=E.morphAttributes.normal!==void 0,A=E.morphAttributes.color!==void 0,M=E.morphAttributes.position||[],k=E.morphAttributes.normal||[],B=E.morphAttributes.color||[];let y=0;C===!0&&(y=1),v===!0&&(y=2),A===!0&&(y=3);let L=E.attributes.position.count*y,N=1;L>u.maxTextureSize&&(N=Math.ceil(L/u.maxTextureSize),L=u.maxTextureSize);const j=new Float32Array(L*N*4*m),T=new M1(j,L,N,m);T.type=Ca,T.needsUpdate=!0;const S=y*4;for(let O=0;O<m;O++){const K=M[O],Q=k[O],uu=B[O],mu=L*N*4*O;for(let V=0;V<K.count;V++){const Z=V*S;C===!0&&(t.fromBufferAttribute(K,V),j[mu+Z+0]=t.x,j[mu+Z+1]=t.y,j[mu+Z+2]=t.z,j[mu+Z+3]=0),v===!0&&(t.fromBufferAttribute(Q,V),j[mu+Z+4]=t.x,j[mu+Z+5]=t.y,j[mu+Z+6]=t.z,j[mu+Z+7]=0),A===!0&&(t.fromBufferAttribute(uu,V),j[mu+Z+8]=t.x,j[mu+Z+9]=t.y,j[mu+Z+10]=t.z,j[mu+Z+11]=uu.itemSize===4?t.w:1)}}h={count:m,texture:T,size:new du(L,N)},r.set(E,h),E.addEventListener("dispose",J)}let F=0;for(let C=0;C<c.length;C++)F+=c[C];const g=E.morphTargetsRelative?1:1-F;x.getUniforms().setValue(a,"morphTargetBaseInfluence",g),x.getUniforms().setValue(a,"morphTargetInfluences",c),x.getUniforms().setValue(a,"morphTargetsTexture",h.texture,e),x.getUniforms().setValue(a,"morphTargetsTextureSize",h.size)}else{const d=c===void 0?0:c.length;let m=i[E.id];if(m===void 0||m.length!==d){m=[];for(let v=0;v<d;v++)m[v]=[v,0];i[E.id]=m}for(let v=0;v<d;v++){const A=m[v];A[0]=v,A[1]=c[v]}m.sort(vx);for(let v=0;v<8;v++)v<d&&m[v][1]?(o[v][0]=m[v][0],o[v][1]=m[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(Cx);const h=E.morphAttributes.position,F=E.morphAttributes.normal;let g=0;for(let v=0;v<8;v++){const A=o[v],M=A[0],k=A[1];M!==Number.MAX_SAFE_INTEGER&&k?(h&&E.getAttribute("morphTarget"+v)!==h[M]&&E.setAttribute("morphTarget"+v,h[M]),F&&E.getAttribute("morphNormal"+v)!==F[M]&&E.setAttribute("morphNormal"+v,F[M]),n[v]=k,g+=k):(h&&E.hasAttribute("morphTarget"+v)===!0&&E.deleteAttribute("morphTarget"+v),F&&E.hasAttribute("morphNormal"+v)===!0&&E.deleteAttribute("morphNormal"+v),n[v]=0)}const C=E.morphTargetsRelative?1:1-g;x.getUniforms().setValue(a,"morphTargetBaseInfluence",C),x.getUniforms().setValue(a,"morphTargetInfluences",n)}}return{update:s}}function bx(a,u,e,i){let n=new WeakMap;function r(s){const l=i.render.frame,E=s.geometry,D=u.get(s,E);return n.get(D)!==l&&(u.update(D),n.set(D,l)),s.isInstancedMesh&&(s.hasEventListener("dispose",o)===!1&&s.addEventListener("dispose",o),e.update(s.instanceMatrix,34962),s.instanceColor!==null&&e.update(s.instanceColor,34962)),D}function t(){n=new WeakMap}function o(s){const l=s.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:t}}const N1=new W0,H1=new M1,G1=new DE,V1=new L1,Go=[],Vo=[],Io=new Float32Array(16),Jo=new Float32Array(9),Oo=new Float32Array(4);function li(a,u,e){const i=a[0];if(i<=0||i>0)return a;const n=u*e;let r=Go[n];if(r===void 0&&(r=new Float32Array(n),Go[n]=r),u!==0){i.toArray(r,0);for(let t=1,o=0;t!==u;++t)o+=e,a[t].toArray(r,o)}return r}function f0(a,u){if(a.length!==u.length)return!1;for(let e=0,i=a.length;e<i;e++)if(a[e]!==u[e])return!1;return!0}function b0(a,u){for(let e=0,i=u.length;e<i;e++)a[e]=u[e]}function Vn(a,u){let e=Vo[u];e===void 0&&(e=new Int32Array(u),Vo[u]=e);for(let i=0;i!==u;++i)e[i]=a.allocateTextureUnit();return e}function Ax(a,u){const e=this.cache;e[0]!==u&&(a.uniform1f(this.addr,u),e[0]=u)}function Bx(a,u){const e=this.cache;if(u.x!==void 0)(e[0]!==u.x||e[1]!==u.y)&&(a.uniform2f(this.addr,u.x,u.y),e[0]=u.x,e[1]=u.y);else{if(f0(e,u))return;a.uniform2fv(this.addr,u),b0(e,u)}}function yx(a,u){const e=this.cache;if(u.x!==void 0)(e[0]!==u.x||e[1]!==u.y||e[2]!==u.z)&&(a.uniform3f(this.addr,u.x,u.y,u.z),e[0]=u.x,e[1]=u.y,e[2]=u.z);else if(u.r!==void 0)(e[0]!==u.r||e[1]!==u.g||e[2]!==u.b)&&(a.uniform3f(this.addr,u.r,u.g,u.b),e[0]=u.r,e[1]=u.g,e[2]=u.b);else{if(f0(e,u))return;a.uniform3fv(this.addr,u),b0(e,u)}}function zx(a,u){const e=this.cache;if(u.x!==void 0)(e[0]!==u.x||e[1]!==u.y||e[2]!==u.z||e[3]!==u.w)&&(a.uniform4f(this.addr,u.x,u.y,u.z,u.w),e[0]=u.x,e[1]=u.y,e[2]=u.z,e[3]=u.w);else{if(f0(e,u))return;a.uniform4fv(this.addr,u),b0(e,u)}}function Sx(a,u){const e=this.cache,i=u.elements;if(i===void 0){if(f0(e,u))return;a.uniformMatrix2fv(this.addr,!1,u),b0(e,u)}else{if(f0(e,i))return;Oo.set(i),a.uniformMatrix2fv(this.addr,!1,Oo),b0(e,i)}}function Mx(a,u){const e=this.cache,i=u.elements;if(i===void 0){if(f0(e,u))return;a.uniformMatrix3fv(this.addr,!1,u),b0(e,u)}else{if(f0(e,i))return;Jo.set(i),a.uniformMatrix3fv(this.addr,!1,Jo),b0(e,i)}}function jx(a,u){const e=this.cache,i=u.elements;if(i===void 0){if(f0(e,u))return;a.uniformMatrix4fv(this.addr,!1,u),b0(e,u)}else{if(f0(e,i))return;Io.set(i),a.uniformMatrix4fv(this.addr,!1,Io),b0(e,i)}}function Px(a,u){const e=this.cache;e[0]!==u&&(a.uniform1i(this.addr,u),e[0]=u)}function Tx(a,u){const e=this.cache;if(u.x!==void 0)(e[0]!==u.x||e[1]!==u.y)&&(a.uniform2i(this.addr,u.x,u.y),e[0]=u.x,e[1]=u.y);else{if(f0(e,u))return;a.uniform2iv(this.addr,u),b0(e,u)}}function wx(a,u){const e=this.cache;if(u.x!==void 0)(e[0]!==u.x||e[1]!==u.y||e[2]!==u.z)&&(a.uniform3i(this.addr,u.x,u.y,u.z),e[0]=u.x,e[1]=u.y,e[2]=u.z);else{if(f0(e,u))return;a.uniform3iv(this.addr,u),b0(e,u)}}function _x(a,u){const e=this.cache;if(u.x!==void 0)(e[0]!==u.x||e[1]!==u.y||e[2]!==u.z||e[3]!==u.w)&&(a.uniform4i(this.addr,u.x,u.y,u.z,u.w),e[0]=u.x,e[1]=u.y,e[2]=u.z,e[3]=u.w);else{if(f0(e,u))return;a.uniform4iv(this.addr,u),b0(e,u)}}function Lx(a,u){const e=this.cache;e[0]!==u&&(a.uniform1ui(this.addr,u),e[0]=u)}function Rx(a,u){const e=this.cache;if(u.x!==void 0)(e[0]!==u.x||e[1]!==u.y)&&(a.uniform2ui(this.addr,u.x,u.y),e[0]=u.x,e[1]=u.y);else{if(f0(e,u))return;a.uniform2uiv(this.addr,u),b0(e,u)}}function Kx(a,u){const e=this.cache;if(u.x!==void 0)(e[0]!==u.x||e[1]!==u.y||e[2]!==u.z)&&(a.uniform3ui(this.addr,u.x,u.y,u.z),e[0]=u.x,e[1]=u.y,e[2]=u.z);else{if(f0(e,u))return;a.uniform3uiv(this.addr,u),b0(e,u)}}function Nx(a,u){const e=this.cache;if(u.x!==void 0)(e[0]!==u.x||e[1]!==u.y||e[2]!==u.z||e[3]!==u.w)&&(a.uniform4ui(this.addr,u.x,u.y,u.z,u.w),e[0]=u.x,e[1]=u.y,e[2]=u.z,e[3]=u.w);else{if(f0(e,u))return;a.uniform4uiv(this.addr,u),b0(e,u)}}function Hx(a,u,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),e.setTexture2D(u||N1,n)}function Gx(a,u,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(u||G1,n)}function Vx(a,u,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(u||V1,n)}function Ix(a,u,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(u||H1,n)}function Jx(a){switch(a){case 5126:return Ax;case 35664:return Bx;case 35665:return yx;case 35666:return zx;case 35674:return Sx;case 35675:return Mx;case 35676:return jx;case 5124:case 35670:return Px;case 35667:case 35671:return Tx;case 35668:case 35672:return wx;case 35669:case 35673:return _x;case 5125:return Lx;case 36294:return Rx;case 36295:return Kx;case 36296:return Nx;case 35678:case 36198:case 36298:case 36306:case 35682:return Hx;case 35679:case 36299:case 36307:return Gx;case 35680:case 36300:case 36308:case 36293:return Vx;case 36289:case 36303:case 36311:case 36292:return Ix}}function Ox(a,u){a.uniform1fv(this.addr,u)}function Wx(a,u){const e=li(u,this.size,2);a.uniform2fv(this.addr,e)}function Ux(a,u){const e=li(u,this.size,3);a.uniform3fv(this.addr,e)}function $x(a,u){const e=li(u,this.size,4);a.uniform4fv(this.addr,e)}function qx(a,u){const e=li(u,this.size,4);a.uniformMatrix2fv(this.addr,!1,e)}function Zx(a,u){const e=li(u,this.size,9);a.uniformMatrix3fv(this.addr,!1,e)}function Yx(a,u){const e=li(u,this.size,16);a.uniformMatrix4fv(this.addr,!1,e)}function Qx(a,u){a.uniform1iv(this.addr,u)}function Xx(a,u){a.uniform2iv(this.addr,u)}function uc(a,u){a.uniform3iv(this.addr,u)}function ec(a,u){a.uniform4iv(this.addr,u)}function ac(a,u){a.uniform1uiv(this.addr,u)}function ic(a,u){a.uniform2uiv(this.addr,u)}function nc(a,u){a.uniform3uiv(this.addr,u)}function rc(a,u){a.uniform4uiv(this.addr,u)}function tc(a,u,e){const i=this.cache,n=u.length,r=Vn(e,n);f0(i,r)||(a.uniform1iv(this.addr,r),b0(i,r));for(let t=0;t!==n;++t)e.setTexture2D(u[t]||N1,r[t])}function oc(a,u,e){const i=this.cache,n=u.length,r=Vn(e,n);f0(i,r)||(a.uniform1iv(this.addr,r),b0(i,r));for(let t=0;t!==n;++t)e.setTexture3D(u[t]||G1,r[t])}function sc(a,u,e){const i=this.cache,n=u.length,r=Vn(e,n);f0(i,r)||(a.uniform1iv(this.addr,r),b0(i,r));for(let t=0;t!==n;++t)e.setTextureCube(u[t]||V1,r[t])}function lc(a,u,e){const i=this.cache,n=u.length,r=Vn(e,n);f0(i,r)||(a.uniform1iv(this.addr,r),b0(i,r));for(let t=0;t!==n;++t)e.setTexture2DArray(u[t]||H1,r[t])}function Ec(a){switch(a){case 5126:return Ox;case 35664:return Wx;case 35665:return Ux;case 35666:return $x;case 35674:return qx;case 35675:return Zx;case 35676:return Yx;case 5124:case 35670:return Qx;case 35667:case 35671:return Xx;case 35668:case 35672:return uc;case 35669:case 35673:return ec;case 5125:return ac;case 36294:return ic;case 36295:return nc;case 36296:return rc;case 35678:case 36198:case 36298:case 36306:case 35682:return tc;case 35679:case 36299:case 36307:return oc;case 35680:case 36300:case 36308:case 36293:return sc;case 36289:case 36303:case 36311:case 36292:return lc}}class Dc{constructor(u,e,i){this.id=u,this.addr=i,this.cache=[],this.setValue=Jx(e.type)}}class xc{constructor(u,e,i){this.id=u,this.addr=i,this.cache=[],this.size=e.size,this.setValue=Ec(e.type)}}class cc{constructor(u){this.id=u,this.seq=[],this.map={}}setValue(u,e,i){const n=this.seq;for(let r=0,t=n.length;r!==t;++r){const o=n[r];o.setValue(u,e[o.id],i)}}}const Mr=/(\w+)(\])?(\[|\.)?/g;function Wo(a,u){a.seq.push(u),a.map[u.id]=u}function dc(a,u,e){const i=a.name,n=i.length;for(Mr.lastIndex=0;;){const r=Mr.exec(i),t=Mr.lastIndex;let o=r[1];const s=r[2]==="]",l=r[3];if(s&&(o=o|0),l===void 0||l==="["&&t+2===n){Wo(e,l===void 0?new Dc(o,a,u):new xc(o,a,u));break}else{let D=e.map[o];D===void 0&&(D=new cc(o),Wo(e,D)),e=D}}}class An{constructor(u,e){this.seq=[],this.map={};const i=u.getProgramParameter(e,35718);for(let n=0;n<i;++n){const r=u.getActiveUniform(e,n),t=u.getUniformLocation(e,r.name);dc(r,t,this)}}setValue(u,e,i,n){const r=this.map[e];r!==void 0&&r.setValue(u,i,n)}setOptional(u,e,i){const n=e[i];n!==void 0&&this.setValue(u,i,n)}static upload(u,e,i,n){for(let r=0,t=e.length;r!==t;++r){const o=e[r],s=i[o.id];s.needsUpdate!==!1&&o.setValue(u,s.value,n)}}static seqWithValue(u,e){const i=[];for(let n=0,r=u.length;n!==r;++n){const t=u[n];t.id in e&&i.push(t)}return i}}function Uo(a,u,e){const i=a.createShader(u);return a.shaderSource(i,e),a.compileShader(i),i}let mc=0;function hc(a,u){const e=a.split(`
`),i=[],n=Math.max(u-6,0),r=Math.min(u+6,e.length);for(let t=n;t<r;t++){const o=t+1;i.push(`${o===u?">":" "} ${o}: ${e[t]}`)}return i.join(`
`)}function pc(a){switch(a){case ia:return["Linear","( value )"];case t0:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function $o(a,u,e){const i=a.getShaderParameter(u,35713),n=a.getShaderInfoLog(u).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const t=parseInt(r[1]);return e.toUpperCase()+`

`+n+`

`+hc(a.getShaderSource(u),t)}else return n}function Fc(a,u){const e=pc(u);return"vec4 "+a+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function gc(a,u){let e;switch(u){case N3:e="Linear";break;case H3:e="Reinhard";break;case G3:e="OptimizedCineon";break;case f1:e="ACESFilmic";break;case V3:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",u),e="Linear"}return"vec3 "+a+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function kc(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(bi).join(`
`)}function Cc(a){const u=[];for(const e in a){const i=a[e];i!==!1&&u.push("#define "+e+" "+i)}return u.join(`
`)}function vc(a,u){const e={},i=a.getProgramParameter(u,35721);for(let n=0;n<i;n++){const r=a.getActiveAttrib(u,n),t=r.name;let o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),e[t]={type:r.type,location:a.getAttribLocation(u,t),locationSize:o}}return e}function bi(a){return a!==""}function qo(a,u){const e=u.numSpotLightShadows+u.numSpotLightMaps-u.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,u.numDirLights).replace(/NUM_SPOT_LIGHTS/g,u.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,u.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,u.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,u.numPointLights).replace(/NUM_HEMI_LIGHTS/g,u.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,u.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,u.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,u.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,u.numPointLightShadows)}function Zo(a,u){return a.replace(/NUM_CLIPPING_PLANES/g,u.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,u.numClippingPlanes-u.numClipIntersection)}const fc=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yr(a){return a.replace(fc,bc)}function bc(a,u){const e=Ou[u];if(e===void 0)throw new Error("Can not resolve #include <"+u+">");return Yr(e)}const Ac=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yo(a){return a.replace(Ac,Bc)}function Bc(a,u,e,i){let n="";for(let r=parseInt(u);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Qo(a){let u="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?u+=`
#define HIGH_PRECISION`:a.precision==="mediump"?u+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(u+=`
#define LOW_PRECISION`),u}function yc(a){let u="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===g1?u="SHADOWMAP_TYPE_PCF":a.shadowMapType===k1?u="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===fi&&(u="SHADOWMAP_TYPE_VSM"),u}function zc(a){let u="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Qa:case Xa:u="ENVMAP_TYPE_CUBE";break;case Hn:u="ENVMAP_TYPE_CUBE_UV";break}return u}function Sc(a){let u="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Xa:u="ENVMAP_MODE_REFRACTION";break}return u}function Mc(a){let u="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case ht:u="ENVMAP_BLENDING_MULTIPLY";break;case R3:u="ENVMAP_BLENDING_MIX";break;case K3:u="ENVMAP_BLENDING_ADD";break}return u}function jc(a){const u=a.envMapCubeUVHeight;if(u===null)return null;const e=Math.log2(u)-2,i=1/u;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Pc(a,u,e,i){const n=a.getContext(),r=e.defines;let t=e.vertexShader,o=e.fragmentShader;const s=yc(e),l=zc(e),E=Sc(e),D=Mc(e),x=jc(e),c=e.isWebGL2?"":kc(e),p=Cc(r),d=n.createProgram();let m,h,F=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=[p].filter(bi).join(`
`),m.length>0&&(m+=`
`),h=[c,p].filter(bi).join(`
`),h.length>0&&(h+=`
`)):(m=[Qo(e),"#define SHADER_NAME "+e.shaderName,p,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+E:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+s:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bi).join(`
`),h=[c,Qo(e),"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+E:"",e.envMap?"#define "+D:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+s:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==je?"#define TONE_MAPPING":"",e.toneMapping!==je?Ou.tonemapping_pars_fragment:"",e.toneMapping!==je?gc("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ou.encodings_pars_fragment,Fc("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(bi).join(`
`)),t=Yr(t),t=qo(t,e),t=Zo(t,e),o=Yr(o),o=qo(o,e),o=Zo(o,e),t=Yo(t),o=Yo(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",e.glslVersion===Co?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Co?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const g=F+m+t,C=F+h+o,v=Uo(n,35633,g),A=Uo(n,35632,C);if(n.attachShader(d,v),n.attachShader(d,A),e.index0AttributeName!==void 0?n.bindAttribLocation(d,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(d,0,"position"),n.linkProgram(d),a.debug.checkShaderErrors){const B=n.getProgramInfoLog(d).trim(),y=n.getShaderInfoLog(v).trim(),L=n.getShaderInfoLog(A).trim();let N=!0,j=!0;if(n.getProgramParameter(d,35714)===!1){N=!1;const T=$o(n,v,"vertex"),S=$o(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(d,35715)+`

Program Info Log: `+B+`
`+T+`
`+S)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(y===""||L==="")&&(j=!1);j&&(this.diagnostics={runnable:N,programLog:B,vertexShader:{log:y,prefix:m},fragmentShader:{log:L,prefix:h}})}n.deleteShader(v),n.deleteShader(A);let M;this.getUniforms=function(){return M===void 0&&(M=new An(n,d)),M};let k;return this.getAttributes=function(){return k===void 0&&(k=vc(n,d)),k},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(d),this.program=void 0},this.name=e.shaderName,this.id=mc++,this.cacheKey=u,this.usedTimes=1,this.program=d,this.vertexShader=v,this.fragmentShader=A,this}let Tc=0;class wc{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(u){const e=u.vertexShader,i=u.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),t=this._getShaderCacheForMaterial(u);return t.has(n)===!1&&(t.add(n),n.usedTimes++),t.has(r)===!1&&(t.add(r),r.usedTimes++),this}remove(u){const e=this.materialCache.get(u);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(u),this}getVertexShaderID(u){return this._getShaderStage(u.vertexShader).id}getFragmentShaderID(u){return this._getShaderStage(u.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(u){const e=this.materialCache;let i=e.get(u);return i===void 0&&(i=new Set,e.set(u,i)),i}_getShaderStage(u){const e=this.shaderCache;let i=e.get(u);return i===void 0&&(i=new _c(u),e.set(u,i)),i}}class _c{constructor(u){this.id=Tc++,this.code=u,this.usedTimes=0}}function Lc(a,u,e,i,n,r,t){const o=new gt,s=new wc,l=[],E=n.isWebGL2,D=n.logarithmicDepthBuffer,x=n.vertexTextures;let c=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(k,B,y,L,N){const j=L.fog,T=N.geometry,S=k.isMeshStandardMaterial?L.environment:null,J=(k.isMeshStandardMaterial?e:u).get(k.envMap||S),O=J&&J.mapping===Hn?J.image.height:null,K=p[k.type];k.precision!==null&&(c=n.getMaxPrecision(k.precision),c!==k.precision&&console.warn("THREE.WebGLProgram.getParameters:",k.precision,"not supported, using",c,"instead."));const Q=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,uu=Q!==void 0?Q.length:0;let mu=0;T.morphAttributes.position!==void 0&&(mu=1),T.morphAttributes.normal!==void 0&&(mu=2),T.morphAttributes.color!==void 0&&(mu=3);let V,Z,ou,lu;if(K){const Ju=Se[K];V=Ju.vertexShader,Z=Ju.fragmentShader}else V=k.vertexShader,Z=k.fragmentShader,s.update(k),ou=s.getVertexShaderID(k),lu=s.getFragmentShaderID(k);const G=a.getRenderTarget(),ru=k.alphaTest>0,vu=k.clearcoat>0,pu=k.iridescence>0;return{isWebGL2:E,shaderID:K,shaderName:k.type,vertexShader:V,fragmentShader:Z,defines:k.defines,customVertexShaderID:ou,customFragmentShaderID:lu,isRawShaderMaterial:k.isRawShaderMaterial===!0,glslVersion:k.glslVersion,precision:c,instancing:N.isInstancedMesh===!0,instancingColor:N.isInstancedMesh===!0&&N.instanceColor!==null,supportsVertexTextures:x,outputEncoding:G===null?a.outputEncoding:G.isXRRenderTarget===!0?G.texture.encoding:ia,map:!!k.map,matcap:!!k.matcap,envMap:!!J,envMapMode:J&&J.mapping,envMapCubeUVHeight:O,lightMap:!!k.lightMap,aoMap:!!k.aoMap,emissiveMap:!!k.emissiveMap,bumpMap:!!k.bumpMap,normalMap:!!k.normalMap,objectSpaceNormalMap:k.normalMapType===oE,tangentSpaceNormalMap:k.normalMapType===pt,decodeVideoTexture:!!k.map&&k.map.isVideoTexture===!0&&k.map.encoding===t0,clearcoat:vu,clearcoatMap:vu&&!!k.clearcoatMap,clearcoatRoughnessMap:vu&&!!k.clearcoatRoughnessMap,clearcoatNormalMap:vu&&!!k.clearcoatNormalMap,iridescence:pu,iridescenceMap:pu&&!!k.iridescenceMap,iridescenceThicknessMap:pu&&!!k.iridescenceThicknessMap,displacementMap:!!k.displacementMap,roughnessMap:!!k.roughnessMap,metalnessMap:!!k.metalnessMap,specularMap:!!k.specularMap,specularIntensityMap:!!k.specularIntensityMap,specularColorMap:!!k.specularColorMap,opaque:k.transparent===!1&&k.blending===qa,alphaMap:!!k.alphaMap,alphaTest:ru,gradientMap:!!k.gradientMap,sheen:k.sheen>0,sheenColorMap:!!k.sheenColorMap,sheenRoughnessMap:!!k.sheenRoughnessMap,transmission:k.transmission>0,transmissionMap:!!k.transmissionMap,thicknessMap:!!k.thicknessMap,combine:k.combine,vertexTangents:!!k.normalMap&&!!T.attributes.tangent,vertexColors:k.vertexColors,vertexAlphas:k.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,vertexUvs:!!k.map||!!k.bumpMap||!!k.normalMap||!!k.specularMap||!!k.alphaMap||!!k.emissiveMap||!!k.roughnessMap||!!k.metalnessMap||!!k.clearcoatMap||!!k.clearcoatRoughnessMap||!!k.clearcoatNormalMap||!!k.iridescenceMap||!!k.iridescenceThicknessMap||!!k.displacementMap||!!k.transmissionMap||!!k.thicknessMap||!!k.specularIntensityMap||!!k.specularColorMap||!!k.sheenColorMap||!!k.sheenRoughnessMap,uvsVertexOnly:!(k.map||k.bumpMap||k.normalMap||k.specularMap||k.alphaMap||k.emissiveMap||k.roughnessMap||k.metalnessMap||k.clearcoatNormalMap||k.iridescenceMap||k.iridescenceThicknessMap||k.transmission>0||k.transmissionMap||k.thicknessMap||k.specularIntensityMap||k.specularColorMap||k.sheen>0||k.sheenColorMap||k.sheenRoughnessMap)&&!!k.displacementMap,fog:!!j,useFog:k.fog===!0,fogExp2:j&&j.isFogExp2,flatShading:!!k.flatShading,sizeAttenuation:k.sizeAttenuation,logarithmicDepthBuffer:D,skinning:N.isSkinnedMesh===!0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:uu,morphTextureStride:mu,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numSpotLightMaps:B.spotLightMap.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numSpotLightShadowsWithMaps:B.numSpotLightShadowsWithMaps,numClippingPlanes:t.numPlanes,numClipIntersection:t.numIntersection,dithering:k.dithering,shadowMapEnabled:a.shadowMap.enabled&&y.length>0,shadowMapType:a.shadowMap.type,toneMapping:k.toneMapped?a.toneMapping:je,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:k.premultipliedAlpha,doubleSided:k.side===Qe,flipSided:k.side===ae,useDepthPacking:!!k.depthPacking,depthPacking:k.depthPacking||0,index0AttributeName:k.index0AttributeName,extensionDerivatives:k.extensions&&k.extensions.derivatives,extensionFragDepth:k.extensions&&k.extensions.fragDepth,extensionDrawBuffers:k.extensions&&k.extensions.drawBuffers,extensionShaderTextureLOD:k.extensions&&k.extensions.shaderTextureLOD,rendererExtensionFragDepth:E||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:E||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:E||i.has("EXT_shader_texture_lod"),customProgramCacheKey:k.customProgramCacheKey()}}function m(k){const B=[];if(k.shaderID?B.push(k.shaderID):(B.push(k.customVertexShaderID),B.push(k.customFragmentShaderID)),k.defines!==void 0)for(const y in k.defines)B.push(y),B.push(k.defines[y]);return k.isRawShaderMaterial===!1&&(h(B,k),F(B,k),B.push(a.outputEncoding)),B.push(k.customProgramCacheKey),B.join()}function h(k,B){k.push(B.precision),k.push(B.outputEncoding),k.push(B.envMapMode),k.push(B.envMapCubeUVHeight),k.push(B.combine),k.push(B.vertexUvs),k.push(B.fogExp2),k.push(B.sizeAttenuation),k.push(B.morphTargetsCount),k.push(B.morphAttributeCount),k.push(B.numDirLights),k.push(B.numPointLights),k.push(B.numSpotLights),k.push(B.numSpotLightMaps),k.push(B.numHemiLights),k.push(B.numRectAreaLights),k.push(B.numDirLightShadows),k.push(B.numPointLightShadows),k.push(B.numSpotLightShadows),k.push(B.numSpotLightShadowsWithMaps),k.push(B.shadowMapType),k.push(B.toneMapping),k.push(B.numClippingPlanes),k.push(B.numClipIntersection),k.push(B.depthPacking)}function F(k,B){o.disableAll(),B.isWebGL2&&o.enable(0),B.supportsVertexTextures&&o.enable(1),B.instancing&&o.enable(2),B.instancingColor&&o.enable(3),B.map&&o.enable(4),B.matcap&&o.enable(5),B.envMap&&o.enable(6),B.lightMap&&o.enable(7),B.aoMap&&o.enable(8),B.emissiveMap&&o.enable(9),B.bumpMap&&o.enable(10),B.normalMap&&o.enable(11),B.objectSpaceNormalMap&&o.enable(12),B.tangentSpaceNormalMap&&o.enable(13),B.clearcoat&&o.enable(14),B.clearcoatMap&&o.enable(15),B.clearcoatRoughnessMap&&o.enable(16),B.clearcoatNormalMap&&o.enable(17),B.iridescence&&o.enable(18),B.iridescenceMap&&o.enable(19),B.iridescenceThicknessMap&&o.enable(20),B.displacementMap&&o.enable(21),B.specularMap&&o.enable(22),B.roughnessMap&&o.enable(23),B.metalnessMap&&o.enable(24),B.gradientMap&&o.enable(25),B.alphaMap&&o.enable(26),B.alphaTest&&o.enable(27),B.vertexColors&&o.enable(28),B.vertexAlphas&&o.enable(29),B.vertexUvs&&o.enable(30),B.vertexTangents&&o.enable(31),B.uvsVertexOnly&&o.enable(32),k.push(o.mask),o.disableAll(),B.fog&&o.enable(0),B.useFog&&o.enable(1),B.flatShading&&o.enable(2),B.logarithmicDepthBuffer&&o.enable(3),B.skinning&&o.enable(4),B.morphTargets&&o.enable(5),B.morphNormals&&o.enable(6),B.morphColors&&o.enable(7),B.premultipliedAlpha&&o.enable(8),B.shadowMapEnabled&&o.enable(9),B.physicallyCorrectLights&&o.enable(10),B.doubleSided&&o.enable(11),B.flipSided&&o.enable(12),B.useDepthPacking&&o.enable(13),B.dithering&&o.enable(14),B.specularIntensityMap&&o.enable(15),B.specularColorMap&&o.enable(16),B.transmission&&o.enable(17),B.transmissionMap&&o.enable(18),B.thicknessMap&&o.enable(19),B.sheen&&o.enable(20),B.sheenColorMap&&o.enable(21),B.sheenRoughnessMap&&o.enable(22),B.decodeVideoTexture&&o.enable(23),B.opaque&&o.enable(24),k.push(o.mask)}function g(k){const B=p[k.type];let y;if(B){const L=Se[B];y=kt.clone(L.uniforms)}else y=k.uniforms;return y}function C(k,B){let y;for(let L=0,N=l.length;L<N;L++){const j=l[L];if(j.cacheKey===B){y=j,++y.usedTimes;break}}return y===void 0&&(y=new Pc(a,B,k,r),l.push(y)),y}function v(k){if(--k.usedTimes===0){const B=l.indexOf(k);l[B]=l[l.length-1],l.pop(),k.destroy()}}function A(k){s.remove(k)}function M(){s.dispose()}return{getParameters:d,getProgramCacheKey:m,getUniforms:g,acquireProgram:C,releaseProgram:v,releaseShaderCache:A,programs:l,dispose:M}}function Rc(){let a=new WeakMap;function u(r){let t=a.get(r);return t===void 0&&(t={},a.set(r,t)),t}function e(r){a.delete(r)}function i(r,t,o){a.get(r)[t]=o}function n(){a=new WeakMap}return{get:u,remove:e,update:i,dispose:n}}function Kc(a,u){return a.groupOrder!==u.groupOrder?a.groupOrder-u.groupOrder:a.renderOrder!==u.renderOrder?a.renderOrder-u.renderOrder:a.material.id!==u.material.id?a.material.id-u.material.id:a.z!==u.z?a.z-u.z:a.id-u.id}function Xo(a,u){return a.groupOrder!==u.groupOrder?a.groupOrder-u.groupOrder:a.renderOrder!==u.renderOrder?a.renderOrder-u.renderOrder:a.z!==u.z?u.z-a.z:a.id-u.id}function us(){const a=[];let u=0;const e=[],i=[],n=[];function r(){u=0,e.length=0,i.length=0,n.length=0}function t(D,x,c,p,d,m){let h=a[u];return h===void 0?(h={id:D.id,object:D,geometry:x,material:c,groupOrder:p,renderOrder:D.renderOrder,z:d,group:m},a[u]=h):(h.id=D.id,h.object=D,h.geometry=x,h.material=c,h.groupOrder=p,h.renderOrder=D.renderOrder,h.z=d,h.group=m),u++,h}function o(D,x,c,p,d,m){const h=t(D,x,c,p,d,m);c.transmission>0?i.push(h):c.transparent===!0?n.push(h):e.push(h)}function s(D,x,c,p,d,m){const h=t(D,x,c,p,d,m);c.transmission>0?i.unshift(h):c.transparent===!0?n.unshift(h):e.unshift(h)}function l(D,x){e.length>1&&e.sort(D||Kc),i.length>1&&i.sort(x||Xo),n.length>1&&n.sort(x||Xo)}function E(){for(let D=u,x=a.length;D<x;D++){const c=a[D];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:o,unshift:s,finish:E,sort:l}}function Nc(){let a=new WeakMap;function u(i,n){const r=a.get(i);let t;return r===void 0?(t=new us,a.set(i,[t])):n>=r.length?(t=new us,r.push(t)):t=r[n],t}function e(){a=new WeakMap}return{get:u,dispose:e}}function Hc(){const a={};return{get:function(u){if(a[u.id]!==void 0)return a[u.id];let e;switch(u.type){case"DirectionalLight":e={direction:new _,color:new a0};break;case"SpotLight":e={position:new _,direction:new _,color:new a0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new _,color:new a0,distance:0,decay:0};break;case"HemisphereLight":e={direction:new _,skyColor:new a0,groundColor:new a0};break;case"RectAreaLight":e={color:new a0,position:new _,halfWidth:new _,halfHeight:new _};break}return a[u.id]=e,e}}}function Gc(){const a={};return{get:function(u){if(a[u.id]!==void 0)return a[u.id];let e;switch(u.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new du};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new du};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new du,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[u.id]=e,e}}}let Vc=0;function Ic(a,u){return(u.castShadow?2:0)-(a.castShadow?2:0)+(u.map?1:0)-(a.map?1:0)}function Jc(a,u){const e=new Hc,i=Gc(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let E=0;E<9;E++)n.probe.push(new _);const r=new _,t=new x0,o=new x0;function s(E,D){let x=0,c=0,p=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let d=0,m=0,h=0,F=0,g=0,C=0,v=0,A=0,M=0,k=0;E.sort(Ic);const B=D!==!0?Math.PI:1;for(let L=0,N=E.length;L<N;L++){const j=E[L],T=j.color,S=j.intensity,J=j.distance,O=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)x+=T.r*S*B,c+=T.g*S*B,p+=T.b*S*B;else if(j.isLightProbe)for(let K=0;K<9;K++)n.probe[K].addScaledVector(j.sh.coefficients[K],S);else if(j.isDirectionalLight){const K=e.get(j);if(K.color.copy(j.color).multiplyScalar(j.intensity*B),j.castShadow){const Q=j.shadow,uu=i.get(j);uu.shadowBias=Q.bias,uu.shadowNormalBias=Q.normalBias,uu.shadowRadius=Q.radius,uu.shadowMapSize=Q.mapSize,n.directionalShadow[d]=uu,n.directionalShadowMap[d]=O,n.directionalShadowMatrix[d]=j.shadow.matrix,C++}n.directional[d]=K,d++}else if(j.isSpotLight){const K=e.get(j);K.position.setFromMatrixPosition(j.matrixWorld),K.color.copy(T).multiplyScalar(S*B),K.distance=J,K.coneCos=Math.cos(j.angle),K.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),K.decay=j.decay,n.spot[h]=K;const Q=j.shadow;if(j.map&&(n.spotLightMap[M]=j.map,M++,Q.updateMatrices(j),j.castShadow&&k++),n.spotLightMatrix[h]=Q.matrix,j.castShadow){const uu=i.get(j);uu.shadowBias=Q.bias,uu.shadowNormalBias=Q.normalBias,uu.shadowRadius=Q.radius,uu.shadowMapSize=Q.mapSize,n.spotShadow[h]=uu,n.spotShadowMap[h]=O,A++}h++}else if(j.isRectAreaLight){const K=e.get(j);K.color.copy(T).multiplyScalar(S),K.halfWidth.set(j.width*.5,0,0),K.halfHeight.set(0,j.height*.5,0),n.rectArea[F]=K,F++}else if(j.isPointLight){const K=e.get(j);if(K.color.copy(j.color).multiplyScalar(j.intensity*B),K.distance=j.distance,K.decay=j.decay,j.castShadow){const Q=j.shadow,uu=i.get(j);uu.shadowBias=Q.bias,uu.shadowNormalBias=Q.normalBias,uu.shadowRadius=Q.radius,uu.shadowMapSize=Q.mapSize,uu.shadowCameraNear=Q.camera.near,uu.shadowCameraFar=Q.camera.far,n.pointShadow[m]=uu,n.pointShadowMap[m]=O,n.pointShadowMatrix[m]=j.shadow.matrix,v++}n.point[m]=K,m++}else if(j.isHemisphereLight){const K=e.get(j);K.skyColor.copy(j.color).multiplyScalar(S*B),K.groundColor.copy(j.groundColor).multiplyScalar(S*B),n.hemi[g]=K,g++}}F>0&&(u.isWebGL2||a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=cu.LTC_FLOAT_1,n.rectAreaLTC2=cu.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=cu.LTC_HALF_1,n.rectAreaLTC2=cu.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=x,n.ambient[1]=c,n.ambient[2]=p;const y=n.hash;(y.directionalLength!==d||y.pointLength!==m||y.spotLength!==h||y.rectAreaLength!==F||y.hemiLength!==g||y.numDirectionalShadows!==C||y.numPointShadows!==v||y.numSpotShadows!==A||y.numSpotMaps!==M)&&(n.directional.length=d,n.spot.length=h,n.rectArea.length=F,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=A+M-k,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=k,y.directionalLength=d,y.pointLength=m,y.spotLength=h,y.rectAreaLength=F,y.hemiLength=g,y.numDirectionalShadows=C,y.numPointShadows=v,y.numSpotShadows=A,y.numSpotMaps=M,n.version=Vc++)}function l(E,D){let x=0,c=0,p=0,d=0,m=0;const h=D.matrixWorldInverse;for(let F=0,g=E.length;F<g;F++){const C=E[F];if(C.isDirectionalLight){const v=n.directional[x];v.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(h),x++}else if(C.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(C.matrixWorld),v.position.applyMatrix4(h),v.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(h),p++}else if(C.isRectAreaLight){const v=n.rectArea[d];v.position.setFromMatrixPosition(C.matrixWorld),v.position.applyMatrix4(h),o.identity(),t.copy(C.matrixWorld),t.premultiply(h),o.extractRotation(t),v.halfWidth.set(C.width*.5,0,0),v.halfHeight.set(0,C.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),d++}else if(C.isPointLight){const v=n.point[c];v.position.setFromMatrixPosition(C.matrixWorld),v.position.applyMatrix4(h),c++}else if(C.isHemisphereLight){const v=n.hemi[m];v.direction.setFromMatrixPosition(C.matrixWorld),v.direction.transformDirection(h),m++}}}return{setup:s,setupView:l,state:n}}function es(a,u){const e=new Jc(a,u),i=[],n=[];function r(){i.length=0,n.length=0}function t(D){i.push(D)}function o(D){n.push(D)}function s(D){e.setup(i,D)}function l(D){e.setupView(i,D)}return{init:r,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:s,setupLightsView:l,pushLight:t,pushShadow:o}}function Oc(a,u){let e=new WeakMap;function i(r,t=0){const o=e.get(r);let s;return o===void 0?(s=new es(a,u),e.set(r,[s])):t>=o.length?(s=new es(a,u),o.push(s)):s=o[t],s}function n(){e=new WeakMap}return{get:i,dispose:n}}class Wc extends oi{constructor(u){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(u)}copy(u){return super.copy(u),this.depthPacking=u.depthPacking,this.map=u.map,this.alphaMap=u.alphaMap,this.displacementMap=u.displacementMap,this.displacementScale=u.displacementScale,this.displacementBias=u.displacementBias,this.wireframe=u.wireframe,this.wireframeLinewidth=u.wireframeLinewidth,this}}class Uc extends oi{constructor(u){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new _,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(u)}copy(u){return super.copy(u),this.referencePosition.copy(u.referencePosition),this.nearDistance=u.nearDistance,this.farDistance=u.farDistance,this.map=u.map,this.alphaMap=u.alphaMap,this.displacementMap=u.displacementMap,this.displacementScale=u.displacementScale,this.displacementBias=u.displacementBias,this}}const $c=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qc=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Zc(a,u,e){let i=new Ct;const n=new du,r=new du,t=new M0,o=new Wc({depthPacking:tE}),s=new Uc,l={},E=e.maxTextureSize,D={[aa]:ae,[ae]:aa,[Qe]:Qe},x=new ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new du},radius:{value:4}},vertexShader:$c,fragmentShader:qc}),c=x.clone();c.defines.HORIZONTAL_PASS=1;const p=new Pe;p.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new I0(p,x),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=g1,this.render=function(C,v,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const M=a.getRenderTarget(),k=a.getActiveCubeFace(),B=a.getActiveMipmapLevel(),y=a.state;y.setBlending(ea),y.buffers.color.setClear(1,1,1,1),y.buffers.depth.setTest(!0),y.setScissorTest(!1);for(let L=0,N=C.length;L<N;L++){const j=C[L],T=j.shadow;if(T===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(T.autoUpdate===!1&&T.needsUpdate===!1)continue;n.copy(T.mapSize);const S=T.getFrameExtents();if(n.multiply(S),r.copy(T.mapSize),(n.x>E||n.y>E)&&(n.x>E&&(r.x=Math.floor(E/S.x),n.x=r.x*S.x,T.mapSize.x=r.x),n.y>E&&(r.y=Math.floor(E/S.y),n.y=r.y*S.y,T.mapSize.y=r.y)),T.map===null){const O=this.type!==fi?{minFilter:h0,magFilter:h0}:{};T.map=new se(n.x,n.y,O),T.map.texture.name=j.name+".shadowMap",T.camera.updateProjectionMatrix()}a.setRenderTarget(T.map),a.clear();const J=T.getViewportCount();for(let O=0;O<J;O++){const K=T.getViewport(O);t.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),y.viewport(t),T.updateMatrices(j,O),i=T.getFrustum(),g(v,A,T.camera,j,this.type)}T.isPointLightShadow!==!0&&this.type===fi&&h(T,A),T.needsUpdate=!1}m.needsUpdate=!1,a.setRenderTarget(M,k,B)};function h(C,v){const A=u.update(d);x.defines.VSM_SAMPLES!==C.blurSamples&&(x.defines.VSM_SAMPLES=C.blurSamples,c.defines.VSM_SAMPLES=C.blurSamples,x.needsUpdate=!0,c.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new se(n.x,n.y)),x.uniforms.shadow_pass.value=C.map.texture,x.uniforms.resolution.value=C.mapSize,x.uniforms.radius.value=C.radius,a.setRenderTarget(C.mapPass),a.clear(),a.renderBufferDirect(v,null,A,x,d,null),c.uniforms.shadow_pass.value=C.mapPass.texture,c.uniforms.resolution.value=C.mapSize,c.uniforms.radius.value=C.radius,a.setRenderTarget(C.map),a.clear(),a.renderBufferDirect(v,null,A,c,d,null)}function F(C,v,A,M,k,B){let y=null;const L=A.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)y=L;else if(y=A.isPointLight===!0?s:o,a.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0){const N=y.uuid,j=v.uuid;let T=l[N];T===void 0&&(T={},l[N]=T);let S=T[j];S===void 0&&(S=y.clone(),T[j]=S),y=S}return y.visible=v.visible,y.wireframe=v.wireframe,B===fi?y.side=v.shadowSide!==null?v.shadowSide:v.side:y.side=v.shadowSide!==null?v.shadowSide:D[v.side],y.alphaMap=v.alphaMap,y.alphaTest=v.alphaTest,y.map=v.map,y.clipShadows=v.clipShadows,y.clippingPlanes=v.clippingPlanes,y.clipIntersection=v.clipIntersection,y.displacementMap=v.displacementMap,y.displacementScale=v.displacementScale,y.displacementBias=v.displacementBias,y.wireframeLinewidth=v.wireframeLinewidth,y.linewidth=v.linewidth,A.isPointLight===!0&&y.isMeshDistanceMaterial===!0&&(y.referencePosition.setFromMatrixPosition(A.matrixWorld),y.nearDistance=M,y.farDistance=k),y}function g(C,v,A,M,k){if(C.visible===!1)return;if(C.layers.test(v.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&k===fi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,C.matrixWorld);const L=u.update(C),N=C.material;if(Array.isArray(N)){const j=L.groups;for(let T=0,S=j.length;T<S;T++){const J=j[T],O=N[J.materialIndex];if(O&&O.visible){const K=F(C,O,M,A.near,A.far,k);a.renderBufferDirect(A,null,L,K,C,J)}}}else if(N.visible){const j=F(C,N,M,A.near,A.far,k);a.renderBufferDirect(A,null,L,j,C,null)}}const y=C.children;for(let L=0,N=y.length;L<N;L++)g(y[L],v,A,M,k)}}function Yc(a,u,e){const i=e.isWebGL2;function n(){let w=!1;const U=new M0;let iu=null;const ku=new M0(0,0,0,0);return{setMask:function(zu){iu!==zu&&!w&&(a.colorMask(zu,zu,zu,zu),iu=zu)},setLocked:function(zu){w=zu},setClear:function(zu,i0,B0,_0,na){na===!0&&(zu*=_0,i0*=_0,B0*=_0),U.set(zu,i0,B0,_0),ku.equals(U)===!1&&(a.clearColor(zu,i0,B0,_0),ku.copy(U))},reset:function(){w=!1,iu=null,ku.set(-1,0,0,0)}}}function r(){let w=!1,U=null,iu=null,ku=null;return{setTest:function(zu){zu?ru(2929):vu(2929)},setMask:function(zu){U!==zu&&!w&&(a.depthMask(zu),U=zu)},setFunc:function(zu){if(iu!==zu){switch(zu){case M3:a.depthFunc(512);break;case j3:a.depthFunc(519);break;case P3:a.depthFunc(513);break;case Jr:a.depthFunc(515);break;case T3:a.depthFunc(514);break;case w3:a.depthFunc(518);break;case _3:a.depthFunc(516);break;case L3:a.depthFunc(517);break;default:a.depthFunc(515)}iu=zu}},setLocked:function(zu){w=zu},setClear:function(zu){ku!==zu&&(a.clearDepth(zu),ku=zu)},reset:function(){w=!1,U=null,iu=null,ku=null}}}function t(){let w=!1,U=null,iu=null,ku=null,zu=null,i0=null,B0=null,_0=null,na=null;return{setTest:function(l0){w||(l0?ru(2960):vu(2960))},setMask:function(l0){U!==l0&&!w&&(a.stencilMask(l0),U=l0)},setFunc:function(l0,_e,ie){(iu!==l0||ku!==_e||zu!==ie)&&(a.stencilFunc(l0,_e,ie),iu=l0,ku=_e,zu=ie)},setOp:function(l0,_e,ie){(i0!==l0||B0!==_e||_0!==ie)&&(a.stencilOp(l0,_e,ie),i0=l0,B0=_e,_0=ie)},setLocked:function(l0){w=l0},setClear:function(l0){na!==l0&&(a.clearStencil(l0),na=l0)},reset:function(){w=!1,U=null,iu=null,ku=null,zu=null,i0=null,B0=null,_0=null,na=null}}}const o=new n,s=new r,l=new t,E=new WeakMap,D=new WeakMap;let x={},c={},p=new WeakMap,d=[],m=null,h=!1,F=null,g=null,C=null,v=null,A=null,M=null,k=null,B=!1,y=null,L=null,N=null,j=null,T=null;const S=a.getParameter(35661);let J=!1,O=0;const K=a.getParameter(7938);K.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(K)[1]),J=O>=1):K.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),J=O>=2);let Q=null,uu={};const mu=a.getParameter(3088),V=a.getParameter(2978),Z=new M0().fromArray(mu),ou=new M0().fromArray(V);function lu(w,U,iu){const ku=new Uint8Array(4),zu=a.createTexture();a.bindTexture(w,zu),a.texParameteri(w,10241,9728),a.texParameteri(w,10240,9728);for(let i0=0;i0<iu;i0++)a.texImage2D(U+i0,0,6408,1,1,0,6408,5121,ku);return zu}const G={};G[3553]=lu(3553,3553,1),G[34067]=lu(34067,34069,6),o.setClear(0,0,0,1),s.setClear(1),l.setClear(0),ru(2929),s.setFunc(Jr),hu(!1),Gu(It),ru(2884),tu(ea);function ru(w){x[w]!==!0&&(a.enable(w),x[w]=!0)}function vu(w){x[w]!==!1&&(a.disable(w),x[w]=!1)}function pu(w,U){return c[w]!==U?(a.bindFramebuffer(w,U),c[w]=U,i&&(w===36009&&(c[36160]=U),w===36160&&(c[36009]=U)),!0):!1}function xu(w,U){let iu=d,ku=!1;if(w)if(iu=p.get(U),iu===void 0&&(iu=[],p.set(U,iu)),w.isWebGLMultipleRenderTargets){const zu=w.texture;if(iu.length!==zu.length||iu[0]!==36064){for(let i0=0,B0=zu.length;i0<B0;i0++)iu[i0]=36064+i0;iu.length=zu.length,ku=!0}}else iu[0]!==36064&&(iu[0]=36064,ku=!0);else iu[0]!==1029&&(iu[0]=1029,ku=!0);ku&&(e.isWebGL2?a.drawBuffers(iu):u.get("WEBGL_draw_buffers").drawBuffersWEBGL(iu))}function Ju(w){return m!==w?(a.useProgram(w),m=w,!0):!1}const P={[Wa]:32774,[g3]:32778,[k3]:32779};if(i)P[Ut]=32775,P[$t]=32776;else{const w=u.get("EXT_blend_minmax");w!==null&&(P[Ut]=w.MIN_EXT,P[$t]=w.MAX_EXT)}const I={[C3]:0,[v3]:1,[f3]:768,[C1]:770,[S3]:776,[y3]:774,[A3]:772,[b3]:769,[v1]:771,[z3]:775,[B3]:773};function tu(w,U,iu,ku,zu,i0,B0,_0){if(w===ea){h===!0&&(vu(3042),h=!1);return}if(h===!1&&(ru(3042),h=!0),w!==F3){if(w!==F||_0!==B){if((g!==Wa||A!==Wa)&&(a.blendEquation(32774),g=Wa,A=Wa),_0)switch(w){case qa:a.blendFuncSeparate(1,771,1,771);break;case Jt:a.blendFunc(1,1);break;case Ot:a.blendFuncSeparate(0,769,0,1);break;case Wt:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case qa:a.blendFuncSeparate(770,771,1,771);break;case Jt:a.blendFunc(770,1);break;case Ot:a.blendFuncSeparate(0,769,0,1);break;case Wt:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}C=null,v=null,M=null,k=null,F=w,B=_0}return}zu=zu||U,i0=i0||iu,B0=B0||ku,(U!==g||zu!==A)&&(a.blendEquationSeparate(P[U],P[zu]),g=U,A=zu),(iu!==C||ku!==v||i0!==M||B0!==k)&&(a.blendFuncSeparate(I[iu],I[ku],I[i0],I[B0]),C=iu,v=ku,M=i0,k=B0),F=w,B=!1}function bu(w,U){w.side===Qe?vu(2884):ru(2884);let iu=w.side===ae;U&&(iu=!iu),hu(iu),w.blending===qa&&w.transparent===!1?tu(ea):tu(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.premultipliedAlpha),s.setFunc(w.depthFunc),s.setTest(w.depthTest),s.setMask(w.depthWrite),o.setMask(w.colorWrite);const ku=w.stencilWrite;l.setTest(ku),ku&&(l.setMask(w.stencilWriteMask),l.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),l.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),Pu(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?ru(32926):vu(32926)}function hu(w){y!==w&&(w?a.frontFace(2304):a.frontFace(2305),y=w)}function Gu(w){w!==h3?(ru(2884),w!==L&&(w===It?a.cullFace(1029):w===p3?a.cullFace(1028):a.cullFace(1032))):vu(2884),L=w}function Lu(w){w!==N&&(J&&a.lineWidth(w),N=w)}function Pu(w,U,iu){w?(ru(32823),(j!==U||T!==iu)&&(a.polygonOffset(U,iu),j=U,T=iu)):vu(32823)}function o0(w){w?ru(3089):vu(3089)}function r0(w){w===void 0&&(w=33984+S-1),Q!==w&&(a.activeTexture(w),Q=w)}function z(w,U,iu){iu===void 0&&(Q===null?iu=33984+S-1:iu=Q);let ku=uu[iu];ku===void 0&&(ku={type:void 0,texture:void 0},uu[iu]=ku),(ku.type!==w||ku.texture!==U)&&(Q!==iu&&(a.activeTexture(iu),Q=iu),a.bindTexture(w,U||G[w]),ku.type=w,ku.texture=U)}function f(){const w=uu[Q];w!==void 0&&w.type!==void 0&&(a.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function W(){try{a.compressedTexImage2D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function nu(){try{a.compressedTexImage3D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Eu(){try{a.texSubImage2D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Fu(){try{a.texSubImage3D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Hu(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function gu(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Y(){try{a.texStorage2D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Tu(){try{a.texStorage3D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Nu(){try{a.texImage2D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function yu(){try{a.texImage3D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ru(w){Z.equals(w)===!1&&(a.scissor(w.x,w.y,w.z,w.w),Z.copy(w))}function wu(w){ou.equals(w)===!1&&(a.viewport(w.x,w.y,w.z,w.w),ou.copy(w))}function u0(w,U){let iu=D.get(U);iu===void 0&&(iu=new WeakMap,D.set(U,iu));let ku=iu.get(w);ku===void 0&&(ku=a.getUniformBlockIndex(U,w.name),iu.set(w,ku))}function s0(w,U){const ku=D.get(U).get(w);E.get(U)!==ku&&(a.uniformBlockBinding(U,ku,w.__bindingPointIndex),E.set(U,ku))}function A0(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),i===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),x={},Q=null,uu={},c={},p=new WeakMap,d=[],m=null,h=!1,F=null,g=null,C=null,v=null,A=null,M=null,k=null,B=!1,y=null,L=null,N=null,j=null,T=null,Z.set(0,0,a.canvas.width,a.canvas.height),ou.set(0,0,a.canvas.width,a.canvas.height),o.reset(),s.reset(),l.reset()}return{buffers:{color:o,depth:s,stencil:l},enable:ru,disable:vu,bindFramebuffer:pu,drawBuffers:xu,useProgram:Ju,setBlending:tu,setMaterial:bu,setFlipSided:hu,setCullFace:Gu,setLineWidth:Lu,setPolygonOffset:Pu,setScissorTest:o0,activeTexture:r0,bindTexture:z,unbindTexture:f,compressedTexImage2D:W,compressedTexImage3D:nu,texImage2D:Nu,texImage3D:yu,updateUBOMapping:u0,uniformBlockBinding:s0,texStorage2D:Y,texStorage3D:Tu,texSubImage2D:Eu,texSubImage3D:Fu,compressedTexSubImage2D:Hu,compressedTexSubImage3D:gu,scissor:Ru,viewport:wu,reset:A0}}function Qc(a,u,e,i,n,r,t){const o=n.isWebGL2,s=n.maxTextures,l=n.maxCubemapSize,E=n.maxTextureSize,D=n.maxSamples,x=u.has("WEBGL_multisampled_render_to_texture")?u.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new WeakMap;let d;const m=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function F(z,f){return h?new OffscreenCanvas(z,f):Ri("canvas")}function g(z,f,W,nu){let Eu=1;if((z.width>nu||z.height>nu)&&(Eu=nu/Math.max(z.width,z.height)),Eu<1||f===!0)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap){const Fu=f?Zr:Math.floor,Hu=Fu(Eu*z.width),gu=Fu(Eu*z.height);d===void 0&&(d=F(Hu,gu));const Y=W?F(Hu,gu):d;return Y.width=Hu,Y.height=gu,Y.getContext("2d").drawImage(z,0,0,Hu,gu),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+Hu+"x"+gu+")."),Y}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),z;return z}function C(z){return fo(z.width)&&fo(z.height)}function v(z){return o?!1:z.wrapS!==de||z.wrapT!==de||z.minFilter!==h0&&z.minFilter!==re}function A(z,f){return z.generateMipmaps&&f&&z.minFilter!==h0&&z.minFilter!==re}function M(z){a.generateMipmap(z)}function k(z,f,W,nu,Eu=!1){if(o===!1)return f;if(z!==null){if(a[z]!==void 0)return a[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let Fu=f;return f===6403&&(W===5126&&(Fu=33326),W===5131&&(Fu=33325),W===5121&&(Fu=33321)),f===33319&&(W===5126&&(Fu=33328),W===5131&&(Fu=33327),W===5121&&(Fu=33323)),f===6408&&(W===5126&&(Fu=34836),W===5131&&(Fu=34842),W===5121&&(Fu=nu===t0&&Eu===!1?35907:32856),W===32819&&(Fu=32854),W===32820&&(Fu=32855)),(Fu===33325||Fu===33326||Fu===33327||Fu===33328||Fu===34842||Fu===34836)&&u.get("EXT_color_buffer_float"),Fu}function B(z,f,W){return A(z,W)===!0||z.isFramebufferTexture&&z.minFilter!==h0&&z.minFilter!==re?Math.log2(Math.max(f.width,f.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?f.mipmaps.length:1}function y(z){return z===h0||z===qt||z===Xn?9728:9729}function L(z){const f=z.target;f.removeEventListener("dispose",L),j(f),f.isVideoTexture&&p.delete(f)}function N(z){const f=z.target;f.removeEventListener("dispose",N),S(f)}function j(z){const f=i.get(z);if(f.__webglInit===void 0)return;const W=z.source,nu=m.get(W);if(nu){const Eu=nu[f.__cacheKey];Eu.usedTimes--,Eu.usedTimes===0&&T(z),Object.keys(nu).length===0&&m.delete(W)}i.remove(z)}function T(z){const f=i.get(z);a.deleteTexture(f.__webglTexture);const W=z.source,nu=m.get(W);delete nu[f.__cacheKey],t.memory.textures--}function S(z){const f=z.texture,W=i.get(z),nu=i.get(f);if(nu.__webglTexture!==void 0&&(a.deleteTexture(nu.__webglTexture),t.memory.textures--),z.depthTexture&&z.depthTexture.dispose(),z.isWebGLCubeRenderTarget)for(let Eu=0;Eu<6;Eu++)a.deleteFramebuffer(W.__webglFramebuffer[Eu]),W.__webglDepthbuffer&&a.deleteRenderbuffer(W.__webglDepthbuffer[Eu]);else{if(a.deleteFramebuffer(W.__webglFramebuffer),W.__webglDepthbuffer&&a.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&a.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let Eu=0;Eu<W.__webglColorRenderbuffer.length;Eu++)W.__webglColorRenderbuffer[Eu]&&a.deleteRenderbuffer(W.__webglColorRenderbuffer[Eu]);W.__webglDepthRenderbuffer&&a.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(z.isWebGLMultipleRenderTargets)for(let Eu=0,Fu=f.length;Eu<Fu;Eu++){const Hu=i.get(f[Eu]);Hu.__webglTexture&&(a.deleteTexture(Hu.__webglTexture),t.memory.textures--),i.remove(f[Eu])}i.remove(f),i.remove(z)}let J=0;function O(){J=0}function K(){const z=J;return z>=s&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+s),J+=1,z}function Q(z){const f=[];return f.push(z.wrapS),f.push(z.wrapT),f.push(z.wrapR||0),f.push(z.magFilter),f.push(z.minFilter),f.push(z.anisotropy),f.push(z.internalFormat),f.push(z.format),f.push(z.type),f.push(z.generateMipmaps),f.push(z.premultiplyAlpha),f.push(z.flipY),f.push(z.unpackAlignment),f.push(z.encoding),f.join()}function uu(z,f){const W=i.get(z);if(z.isVideoTexture&&o0(z),z.isRenderTargetTexture===!1&&z.version>0&&W.__version!==z.version){const nu=z.image;if(nu===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nu.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{vu(W,z,f);return}}e.bindTexture(3553,W.__webglTexture,33984+f)}function mu(z,f){const W=i.get(z);if(z.version>0&&W.__version!==z.version){vu(W,z,f);return}e.bindTexture(35866,W.__webglTexture,33984+f)}function V(z,f){const W=i.get(z);if(z.version>0&&W.__version!==z.version){vu(W,z,f);return}e.bindTexture(32879,W.__webglTexture,33984+f)}function Z(z,f){const W=i.get(z);if(z.version>0&&W.__version!==z.version){pu(W,z,f);return}e.bindTexture(34067,W.__webglTexture,33984+f)}const ou={[Ur]:10497,[de]:33071,[$r]:33648},lu={[h0]:9728,[qt]:9984,[Xn]:9986,[re]:9729,[I3]:9985,[wi]:9987};function G(z,f,W){if(W?(a.texParameteri(z,10242,ou[f.wrapS]),a.texParameteri(z,10243,ou[f.wrapT]),(z===32879||z===35866)&&a.texParameteri(z,32882,ou[f.wrapR]),a.texParameteri(z,10240,lu[f.magFilter]),a.texParameteri(z,10241,lu[f.minFilter])):(a.texParameteri(z,10242,33071),a.texParameteri(z,10243,33071),(z===32879||z===35866)&&a.texParameteri(z,32882,33071),(f.wrapS!==de||f.wrapT!==de)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(z,10240,y(f.magFilter)),a.texParameteri(z,10241,y(f.minFilter)),f.minFilter!==h0&&f.minFilter!==re&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),u.has("EXT_texture_filter_anisotropic")===!0){const nu=u.get("EXT_texture_filter_anisotropic");if(f.magFilter===h0||f.minFilter!==Xn&&f.minFilter!==wi||f.type===Ca&&u.has("OES_texture_float_linear")===!1||o===!1&&f.type===_i&&u.has("OES_texture_half_float_linear")===!1)return;(f.anisotropy>1||i.get(f).__currentAnisotropy)&&(a.texParameterf(z,nu.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(f.anisotropy,n.getMaxAnisotropy())),i.get(f).__currentAnisotropy=f.anisotropy)}}function ru(z,f){let W=!1;z.__webglInit===void 0&&(z.__webglInit=!0,f.addEventListener("dispose",L));const nu=f.source;let Eu=m.get(nu);Eu===void 0&&(Eu={},m.set(nu,Eu));const Fu=Q(f);if(Fu!==z.__cacheKey){Eu[Fu]===void 0&&(Eu[Fu]={texture:a.createTexture(),usedTimes:0},t.memory.textures++,W=!0),Eu[Fu].usedTimes++;const Hu=Eu[z.__cacheKey];Hu!==void 0&&(Eu[z.__cacheKey].usedTimes--,Hu.usedTimes===0&&T(f)),z.__cacheKey=Fu,z.__webglTexture=Eu[Fu].texture}return W}function vu(z,f,W){let nu=3553;(f.isDataArrayTexture||f.isCompressedArrayTexture)&&(nu=35866),f.isData3DTexture&&(nu=32879);const Eu=ru(z,f),Fu=f.source;e.bindTexture(nu,z.__webglTexture,33984+W);const Hu=i.get(Fu);if(Fu.version!==Hu.__version||Eu===!0){e.activeTexture(33984+W),a.pixelStorei(37440,f.flipY),a.pixelStorei(37441,f.premultiplyAlpha),a.pixelStorei(3317,f.unpackAlignment),a.pixelStorei(37443,0);const gu=v(f)&&C(f.image)===!1;let Y=g(f.image,gu,!1,E);Y=r0(f,Y);const Tu=C(Y)||o,Nu=r.convert(f.format,f.encoding);let yu=r.convert(f.type),Ru=k(f.internalFormat,Nu,yu,f.encoding,f.isVideoTexture);G(nu,f,Tu);let wu;const u0=f.mipmaps,s0=o&&f.isVideoTexture!==!0,A0=Hu.__version===void 0||Eu===!0,w=B(f,Y,Tu);if(f.isDepthTexture)Ru=6402,o?f.type===Ca?Ru=36012:f.type===ka?Ru=33190:f.type===Za?Ru=35056:Ru=33189:f.type===Ca&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),f.format===va&&Ru===6402&&f.type!==A1&&f.type!==ka&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),f.type=ka,yu=r.convert(f.type)),f.format===ui&&Ru===6402&&(Ru=34041,f.type!==Za&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),f.type=Za,yu=r.convert(f.type))),A0&&(s0?e.texStorage2D(3553,1,Ru,Y.width,Y.height):e.texImage2D(3553,0,Ru,Y.width,Y.height,0,Nu,yu,null));else if(f.isDataTexture)if(u0.length>0&&Tu){s0&&A0&&e.texStorage2D(3553,w,Ru,u0[0].width,u0[0].height);for(let U=0,iu=u0.length;U<iu;U++)wu=u0[U],s0?e.texSubImage2D(3553,U,0,0,wu.width,wu.height,Nu,yu,wu.data):e.texImage2D(3553,U,Ru,wu.width,wu.height,0,Nu,yu,wu.data);f.generateMipmaps=!1}else s0?(A0&&e.texStorage2D(3553,w,Ru,Y.width,Y.height),e.texSubImage2D(3553,0,0,0,Y.width,Y.height,Nu,yu,Y.data)):e.texImage2D(3553,0,Ru,Y.width,Y.height,0,Nu,yu,Y.data);else if(f.isCompressedTexture)if(f.isCompressedArrayTexture){s0&&A0&&e.texStorage3D(35866,w,Ru,u0[0].width,u0[0].height,Y.depth);for(let U=0,iu=u0.length;U<iu;U++)wu=u0[U],f.format!==me?Nu!==null?s0?e.compressedTexSubImage3D(35866,U,0,0,0,wu.width,wu.height,Y.depth,Nu,wu.data,0,0):e.compressedTexImage3D(35866,U,Ru,wu.width,wu.height,Y.depth,0,wu.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):s0?e.texSubImage3D(35866,U,0,0,0,wu.width,wu.height,Y.depth,Nu,yu,wu.data):e.texImage3D(35866,U,Ru,wu.width,wu.height,Y.depth,0,Nu,yu,wu.data)}else{s0&&A0&&e.texStorage2D(3553,w,Ru,u0[0].width,u0[0].height);for(let U=0,iu=u0.length;U<iu;U++)wu=u0[U],f.format!==me?Nu!==null?s0?e.compressedTexSubImage2D(3553,U,0,0,wu.width,wu.height,Nu,wu.data):e.compressedTexImage2D(3553,U,Ru,wu.width,wu.height,0,wu.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):s0?e.texSubImage2D(3553,U,0,0,wu.width,wu.height,Nu,yu,wu.data):e.texImage2D(3553,U,Ru,wu.width,wu.height,0,Nu,yu,wu.data)}else if(f.isDataArrayTexture)s0?(A0&&e.texStorage3D(35866,w,Ru,Y.width,Y.height,Y.depth),e.texSubImage3D(35866,0,0,0,0,Y.width,Y.height,Y.depth,Nu,yu,Y.data)):e.texImage3D(35866,0,Ru,Y.width,Y.height,Y.depth,0,Nu,yu,Y.data);else if(f.isData3DTexture)s0?(A0&&e.texStorage3D(32879,w,Ru,Y.width,Y.height,Y.depth),e.texSubImage3D(32879,0,0,0,0,Y.width,Y.height,Y.depth,Nu,yu,Y.data)):e.texImage3D(32879,0,Ru,Y.width,Y.height,Y.depth,0,Nu,yu,Y.data);else if(f.isFramebufferTexture){if(A0)if(s0)e.texStorage2D(3553,w,Ru,Y.width,Y.height);else{let U=Y.width,iu=Y.height;for(let ku=0;ku<w;ku++)e.texImage2D(3553,ku,Ru,U,iu,0,Nu,yu,null),U>>=1,iu>>=1}}else if(u0.length>0&&Tu){s0&&A0&&e.texStorage2D(3553,w,Ru,u0[0].width,u0[0].height);for(let U=0,iu=u0.length;U<iu;U++)wu=u0[U],s0?e.texSubImage2D(3553,U,0,0,Nu,yu,wu):e.texImage2D(3553,U,Ru,Nu,yu,wu);f.generateMipmaps=!1}else s0?(A0&&e.texStorage2D(3553,w,Ru,Y.width,Y.height),e.texSubImage2D(3553,0,0,0,Nu,yu,Y)):e.texImage2D(3553,0,Ru,Nu,yu,Y);A(f,Tu)&&M(nu),Hu.__version=Fu.version,f.onUpdate&&f.onUpdate(f)}z.__version=f.version}function pu(z,f,W){if(f.image.length!==6)return;const nu=ru(z,f),Eu=f.source;e.bindTexture(34067,z.__webglTexture,33984+W);const Fu=i.get(Eu);if(Eu.version!==Fu.__version||nu===!0){e.activeTexture(33984+W),a.pixelStorei(37440,f.flipY),a.pixelStorei(37441,f.premultiplyAlpha),a.pixelStorei(3317,f.unpackAlignment),a.pixelStorei(37443,0);const Hu=f.isCompressedTexture||f.image[0].isCompressedTexture,gu=f.image[0]&&f.image[0].isDataTexture,Y=[];for(let U=0;U<6;U++)!Hu&&!gu?Y[U]=g(f.image[U],!1,!0,l):Y[U]=gu?f.image[U].image:f.image[U],Y[U]=r0(f,Y[U]);const Tu=Y[0],Nu=C(Tu)||o,yu=r.convert(f.format,f.encoding),Ru=r.convert(f.type),wu=k(f.internalFormat,yu,Ru,f.encoding),u0=o&&f.isVideoTexture!==!0,s0=Fu.__version===void 0||nu===!0;let A0=B(f,Tu,Nu);G(34067,f,Nu);let w;if(Hu){u0&&s0&&e.texStorage2D(34067,A0,wu,Tu.width,Tu.height);for(let U=0;U<6;U++){w=Y[U].mipmaps;for(let iu=0;iu<w.length;iu++){const ku=w[iu];f.format!==me?yu!==null?u0?e.compressedTexSubImage2D(34069+U,iu,0,0,ku.width,ku.height,yu,ku.data):e.compressedTexImage2D(34069+U,iu,wu,ku.width,ku.height,0,ku.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):u0?e.texSubImage2D(34069+U,iu,0,0,ku.width,ku.height,yu,Ru,ku.data):e.texImage2D(34069+U,iu,wu,ku.width,ku.height,0,yu,Ru,ku.data)}}}else{w=f.mipmaps,u0&&s0&&(w.length>0&&A0++,e.texStorage2D(34067,A0,wu,Y[0].width,Y[0].height));for(let U=0;U<6;U++)if(gu){u0?e.texSubImage2D(34069+U,0,0,0,Y[U].width,Y[U].height,yu,Ru,Y[U].data):e.texImage2D(34069+U,0,wu,Y[U].width,Y[U].height,0,yu,Ru,Y[U].data);for(let iu=0;iu<w.length;iu++){const zu=w[iu].image[U].image;u0?e.texSubImage2D(34069+U,iu+1,0,0,zu.width,zu.height,yu,Ru,zu.data):e.texImage2D(34069+U,iu+1,wu,zu.width,zu.height,0,yu,Ru,zu.data)}}else{u0?e.texSubImage2D(34069+U,0,0,0,yu,Ru,Y[U]):e.texImage2D(34069+U,0,wu,yu,Ru,Y[U]);for(let iu=0;iu<w.length;iu++){const ku=w[iu];u0?e.texSubImage2D(34069+U,iu+1,0,0,yu,Ru,ku.image[U]):e.texImage2D(34069+U,iu+1,wu,yu,Ru,ku.image[U])}}}A(f,Nu)&&M(34067),Fu.__version=Eu.version,f.onUpdate&&f.onUpdate(f)}z.__version=f.version}function xu(z,f,W,nu,Eu){const Fu=r.convert(W.format,W.encoding),Hu=r.convert(W.type),gu=k(W.internalFormat,Fu,Hu,W.encoding);i.get(f).__hasExternalTextures||(Eu===32879||Eu===35866?e.texImage3D(Eu,0,gu,f.width,f.height,f.depth,0,Fu,Hu,null):e.texImage2D(Eu,0,gu,f.width,f.height,0,Fu,Hu,null)),e.bindFramebuffer(36160,z),Pu(f)?x.framebufferTexture2DMultisampleEXT(36160,nu,Eu,i.get(W).__webglTexture,0,Lu(f)):(Eu===3553||Eu>=34069&&Eu<=34074)&&a.framebufferTexture2D(36160,nu,Eu,i.get(W).__webglTexture,0),e.bindFramebuffer(36160,null)}function Ju(z,f,W){if(a.bindRenderbuffer(36161,z),f.depthBuffer&&!f.stencilBuffer){let nu=33189;if(W||Pu(f)){const Eu=f.depthTexture;Eu&&Eu.isDepthTexture&&(Eu.type===Ca?nu=36012:Eu.type===ka&&(nu=33190));const Fu=Lu(f);Pu(f)?x.renderbufferStorageMultisampleEXT(36161,Fu,nu,f.width,f.height):a.renderbufferStorageMultisample(36161,Fu,nu,f.width,f.height)}else a.renderbufferStorage(36161,nu,f.width,f.height);a.framebufferRenderbuffer(36160,36096,36161,z)}else if(f.depthBuffer&&f.stencilBuffer){const nu=Lu(f);W&&Pu(f)===!1?a.renderbufferStorageMultisample(36161,nu,35056,f.width,f.height):Pu(f)?x.renderbufferStorageMultisampleEXT(36161,nu,35056,f.width,f.height):a.renderbufferStorage(36161,34041,f.width,f.height),a.framebufferRenderbuffer(36160,33306,36161,z)}else{const nu=f.isWebGLMultipleRenderTargets===!0?f.texture:[f.texture];for(let Eu=0;Eu<nu.length;Eu++){const Fu=nu[Eu],Hu=r.convert(Fu.format,Fu.encoding),gu=r.convert(Fu.type),Y=k(Fu.internalFormat,Hu,gu,Fu.encoding),Tu=Lu(f);W&&Pu(f)===!1?a.renderbufferStorageMultisample(36161,Tu,Y,f.width,f.height):Pu(f)?x.renderbufferStorageMultisampleEXT(36161,Tu,Y,f.width,f.height):a.renderbufferStorage(36161,Y,f.width,f.height)}}a.bindRenderbuffer(36161,null)}function P(z,f){if(f&&f.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,z),!(f.depthTexture&&f.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(f.depthTexture).__webglTexture||f.depthTexture.image.width!==f.width||f.depthTexture.image.height!==f.height)&&(f.depthTexture.image.width=f.width,f.depthTexture.image.height=f.height,f.depthTexture.needsUpdate=!0),uu(f.depthTexture,0);const nu=i.get(f.depthTexture).__webglTexture,Eu=Lu(f);if(f.depthTexture.format===va)Pu(f)?x.framebufferTexture2DMultisampleEXT(36160,36096,3553,nu,0,Eu):a.framebufferTexture2D(36160,36096,3553,nu,0);else if(f.depthTexture.format===ui)Pu(f)?x.framebufferTexture2DMultisampleEXT(36160,33306,3553,nu,0,Eu):a.framebufferTexture2D(36160,33306,3553,nu,0);else throw new Error("Unknown depthTexture format")}function I(z){const f=i.get(z),W=z.isWebGLCubeRenderTarget===!0;if(z.depthTexture&&!f.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");P(f.__webglFramebuffer,z)}else if(W){f.__webglDepthbuffer=[];for(let nu=0;nu<6;nu++)e.bindFramebuffer(36160,f.__webglFramebuffer[nu]),f.__webglDepthbuffer[nu]=a.createRenderbuffer(),Ju(f.__webglDepthbuffer[nu],z,!1)}else e.bindFramebuffer(36160,f.__webglFramebuffer),f.__webglDepthbuffer=a.createRenderbuffer(),Ju(f.__webglDepthbuffer,z,!1);e.bindFramebuffer(36160,null)}function tu(z,f,W){const nu=i.get(z);f!==void 0&&xu(nu.__webglFramebuffer,z,z.texture,36064,3553),W!==void 0&&I(z)}function bu(z){const f=z.texture,W=i.get(z),nu=i.get(f);z.addEventListener("dispose",N),z.isWebGLMultipleRenderTargets!==!0&&(nu.__webglTexture===void 0&&(nu.__webglTexture=a.createTexture()),nu.__version=f.version,t.memory.textures++);const Eu=z.isWebGLCubeRenderTarget===!0,Fu=z.isWebGLMultipleRenderTargets===!0,Hu=C(z)||o;if(Eu){W.__webglFramebuffer=[];for(let gu=0;gu<6;gu++)W.__webglFramebuffer[gu]=a.createFramebuffer()}else{if(W.__webglFramebuffer=a.createFramebuffer(),Fu)if(n.drawBuffers){const gu=z.texture;for(let Y=0,Tu=gu.length;Y<Tu;Y++){const Nu=i.get(gu[Y]);Nu.__webglTexture===void 0&&(Nu.__webglTexture=a.createTexture(),t.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&z.samples>0&&Pu(z)===!1){const gu=Fu?f:[f];W.__webglMultisampledFramebuffer=a.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,W.__webglMultisampledFramebuffer);for(let Y=0;Y<gu.length;Y++){const Tu=gu[Y];W.__webglColorRenderbuffer[Y]=a.createRenderbuffer(),a.bindRenderbuffer(36161,W.__webglColorRenderbuffer[Y]);const Nu=r.convert(Tu.format,Tu.encoding),yu=r.convert(Tu.type),Ru=k(Tu.internalFormat,Nu,yu,Tu.encoding,z.isXRRenderTarget===!0),wu=Lu(z);a.renderbufferStorageMultisample(36161,wu,Ru,z.width,z.height),a.framebufferRenderbuffer(36160,36064+Y,36161,W.__webglColorRenderbuffer[Y])}a.bindRenderbuffer(36161,null),z.depthBuffer&&(W.__webglDepthRenderbuffer=a.createRenderbuffer(),Ju(W.__webglDepthRenderbuffer,z,!0)),e.bindFramebuffer(36160,null)}}if(Eu){e.bindTexture(34067,nu.__webglTexture),G(34067,f,Hu);for(let gu=0;gu<6;gu++)xu(W.__webglFramebuffer[gu],z,f,36064,34069+gu);A(f,Hu)&&M(34067),e.unbindTexture()}else if(Fu){const gu=z.texture;for(let Y=0,Tu=gu.length;Y<Tu;Y++){const Nu=gu[Y],yu=i.get(Nu);e.bindTexture(3553,yu.__webglTexture),G(3553,Nu,Hu),xu(W.__webglFramebuffer,z,Nu,36064+Y,3553),A(Nu,Hu)&&M(3553)}e.unbindTexture()}else{let gu=3553;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(o?gu=z.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(gu,nu.__webglTexture),G(gu,f,Hu),xu(W.__webglFramebuffer,z,f,36064,gu),A(f,Hu)&&M(gu),e.unbindTexture()}z.depthBuffer&&I(z)}function hu(z){const f=C(z)||o,W=z.isWebGLMultipleRenderTargets===!0?z.texture:[z.texture];for(let nu=0,Eu=W.length;nu<Eu;nu++){const Fu=W[nu];if(A(Fu,f)){const Hu=z.isWebGLCubeRenderTarget?34067:3553,gu=i.get(Fu).__webglTexture;e.bindTexture(Hu,gu),M(Hu),e.unbindTexture()}}}function Gu(z){if(o&&z.samples>0&&Pu(z)===!1){const f=z.isWebGLMultipleRenderTargets?z.texture:[z.texture],W=z.width,nu=z.height;let Eu=16384;const Fu=[],Hu=z.stencilBuffer?33306:36096,gu=i.get(z),Y=z.isWebGLMultipleRenderTargets===!0;if(Y)for(let Tu=0;Tu<f.length;Tu++)e.bindFramebuffer(36160,gu.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+Tu,36161,null),e.bindFramebuffer(36160,gu.__webglFramebuffer),a.framebufferTexture2D(36009,36064+Tu,3553,null,0);e.bindFramebuffer(36008,gu.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,gu.__webglFramebuffer);for(let Tu=0;Tu<f.length;Tu++){Fu.push(36064+Tu),z.depthBuffer&&Fu.push(Hu);const Nu=gu.__ignoreDepthValues!==void 0?gu.__ignoreDepthValues:!1;if(Nu===!1&&(z.depthBuffer&&(Eu|=256),z.stencilBuffer&&(Eu|=1024)),Y&&a.framebufferRenderbuffer(36008,36064,36161,gu.__webglColorRenderbuffer[Tu]),Nu===!0&&(a.invalidateFramebuffer(36008,[Hu]),a.invalidateFramebuffer(36009,[Hu])),Y){const yu=i.get(f[Tu]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,yu,0)}a.blitFramebuffer(0,0,W,nu,0,0,W,nu,Eu,9728),c&&a.invalidateFramebuffer(36008,Fu)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),Y)for(let Tu=0;Tu<f.length;Tu++){e.bindFramebuffer(36160,gu.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+Tu,36161,gu.__webglColorRenderbuffer[Tu]);const Nu=i.get(f[Tu]).__webglTexture;e.bindFramebuffer(36160,gu.__webglFramebuffer),a.framebufferTexture2D(36009,36064+Tu,3553,Nu,0)}e.bindFramebuffer(36009,gu.__webglMultisampledFramebuffer)}}function Lu(z){return Math.min(D,z.samples)}function Pu(z){const f=i.get(z);return o&&z.samples>0&&u.has("WEBGL_multisampled_render_to_texture")===!0&&f.__useRenderToTexture!==!1}function o0(z){const f=t.render.frame;p.get(z)!==f&&(p.set(z,f),z.update())}function r0(z,f){const W=z.encoding,nu=z.format,Eu=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||z.format===qr||W!==ia&&(W===t0?o===!1?u.has("EXT_sRGB")===!0&&nu===me?(z.format=qr,z.minFilter=re,z.generateMipmaps=!1):f=z1.sRGBToLinear(f):(nu!==me||Eu!==Aa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",W)),f}this.allocateTextureUnit=K,this.resetTextureUnits=O,this.setTexture2D=uu,this.setTexture2DArray=mu,this.setTexture3D=V,this.setTextureCube=Z,this.rebindTextures=tu,this.setupRenderTarget=bu,this.updateRenderTargetMipmap=hu,this.updateMultisampleRenderTarget=Gu,this.setupDepthRenderbuffer=I,this.setupFrameBufferTexture=xu,this.useMultisampledRTT=Pu}function Xc(a,u,e){const i=e.isWebGL2;function n(r,t=null){let o;if(r===Aa)return 5121;if(r===U3)return 32819;if(r===$3)return 32820;if(r===J3)return 5120;if(r===O3)return 5122;if(r===A1)return 5123;if(r===W3)return 5124;if(r===ka)return 5125;if(r===Ca)return 5126;if(r===_i)return i?5131:(o=u.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===q3)return 6406;if(r===me)return 6408;if(r===Z3)return 6409;if(r===Y3)return 6410;if(r===va)return 6402;if(r===ui)return 34041;if(r===qr)return o=u.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Q3)return 6403;if(r===X3)return 36244;if(r===uE)return 33319;if(r===eE)return 33320;if(r===aE)return 36249;if(r===ur||r===er||r===ar||r===ir)if(t===t0)if(o=u.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ur)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===er)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ar)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ir)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=u.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ur)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===er)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ar)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ir)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Zt||r===Yt||r===Qt||r===Xt)if(o=u.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Zt)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Yt)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Qt)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Xt)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===iE)return o=u.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===uo||r===eo)if(o=u.get("WEBGL_compressed_texture_etc"),o!==null){if(r===uo)return t===t0?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===eo)return t===t0?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ao||r===io||r===no||r===ro||r===to||r===oo||r===so||r===lo||r===Eo||r===Do||r===xo||r===co||r===mo||r===ho)if(o=u.get("WEBGL_compressed_texture_astc"),o!==null){if(r===ao)return t===t0?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===io)return t===t0?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===no)return t===t0?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ro)return t===t0?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===to)return t===t0?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===oo)return t===t0?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===so)return t===t0?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===lo)return t===t0?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Eo)return t===t0?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Do)return t===t0?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===xo)return t===t0?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===co)return t===t0?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===mo)return t===t0?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ho)return t===t0?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===nr)if(o=u.get("EXT_texture_compression_bptc"),o!==null){if(r===nr)return t===t0?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===nE||r===po||r===Fo||r===go)if(o=u.get("EXT_texture_compression_rgtc"),o!==null){if(r===nr)return o.COMPRESSED_RED_RGTC1_EXT;if(r===po)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Fo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===go)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Za?i?34042:(o=u.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):a[r]!==void 0?a[r]:null}return{convert:n}}class ud extends ue{constructor(u=[]){super(),this.isArrayCamera=!0,this.cameras=u}}class Xe extends v0{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ed={type:"move"};class jr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new _,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new _),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new _,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new _),this._grip}dispatchEvent(u){return this._targetRay!==null&&this._targetRay.dispatchEvent(u),this._grip!==null&&this._grip.dispatchEvent(u),this._hand!==null&&this._hand.dispatchEvent(u),this}connect(u){if(u&&u.hand){const e=this._hand;if(e)for(const i of u.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:u}),this}disconnect(u){return this.dispatchEvent({type:"disconnected",data:u}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(u,e,i){let n=null,r=null,t=null;const o=this._targetRay,s=this._grip,l=this._hand;if(u&&e.session.visibilityState!=="visible-blurred"){if(l&&u.hand){t=!0;for(const d of u.hand.values()){const m=e.getJointPose(d,i),h=this._getHandJoint(l,d);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.jointRadius=m.radius),h.visible=m!==null}const E=l.joints["index-finger-tip"],D=l.joints["thumb-tip"],x=E.position.distanceTo(D.position),c=.02,p=.005;l.inputState.pinching&&x>c+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:u.handedness,target:this})):!l.inputState.pinching&&x<=c-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:u.handedness,target:this}))}else s!==null&&u.gripSpace&&(r=e.getPose(u.gripSpace,i),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(n=e.getPose(u.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ed)))}return o!==null&&(o.visible=n!==null),s!==null&&(s.visible=r!==null),l!==null&&(l.visible=t!==null),this}_getHandJoint(u,e){if(u.joints[e.jointName]===void 0){const i=new Xe;i.matrixAutoUpdate=!1,i.visible=!1,u.joints[e.jointName]=i,u.add(i)}return u.joints[e.jointName]}}class I1 extends W0{constructor(u,e,i,n,r,t,o,s,l,E){if(E=E!==void 0?E:va,E!==va&&E!==ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&E===va&&(i=ka),i===void 0&&E===ui&&(i=Za),super(null,n,r,t,o,s,E,i,l),this.isDepthTexture=!0,this.image={width:u,height:e},this.magFilter=o!==void 0?o:h0,this.minFilter=s!==void 0?s:h0,this.flipY=!1,this.generateMipmaps=!1}}class ad extends ni{constructor(u,e){super();const i=this;let n=null,r=1,t=null,o="local-floor",s=1,l=null,E=null,D=null,x=null,c=null,p=null;const d=e.getContextAttributes();let m=null,h=null;const F=[],g=[],C=new Set,v=new Map,A=new ue;A.layers.enable(1),A.viewport=new M0;const M=new ue;M.layers.enable(2),M.viewport=new M0;const k=[A,M],B=new ud;B.layers.enable(1),B.layers.enable(2);let y=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Z=F[V];return Z===void 0&&(Z=new jr,F[V]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(V){let Z=F[V];return Z===void 0&&(Z=new jr,F[V]=Z),Z.getGripSpace()},this.getHand=function(V){let Z=F[V];return Z===void 0&&(Z=new jr,F[V]=Z),Z.getHandSpace()};function N(V){const Z=g.indexOf(V.inputSource);if(Z===-1)return;const ou=F[Z];ou!==void 0&&ou.dispatchEvent({type:V.type,data:V.inputSource})}function j(){n.removeEventListener("select",N),n.removeEventListener("selectstart",N),n.removeEventListener("selectend",N),n.removeEventListener("squeeze",N),n.removeEventListener("squeezestart",N),n.removeEventListener("squeezeend",N),n.removeEventListener("end",j),n.removeEventListener("inputsourceschange",T);for(let V=0;V<F.length;V++){const Z=g[V];Z!==null&&(g[V]=null,F[V].disconnect(Z))}y=null,L=null,u.setRenderTarget(m),c=null,x=null,D=null,n=null,h=null,mu.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||t},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return x!==null?x:c},this.getBinding=function(){return D},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(V){if(n=V,n!==null){if(m=u.getRenderTarget(),n.addEventListener("select",N),n.addEventListener("selectstart",N),n.addEventListener("selectend",N),n.addEventListener("squeeze",N),n.addEventListener("squeezestart",N),n.addEventListener("squeezeend",N),n.addEventListener("end",j),n.addEventListener("inputsourceschange",T),d.xrCompatible!==!0&&await e.makeXRCompatible(),n.renderState.layers===void 0||u.capabilities.isWebGL2===!1){const Z={antialias:n.renderState.layers===void 0?d.antialias:!0,alpha:d.alpha,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};c=new XRWebGLLayer(n,e,Z),n.updateRenderState({baseLayer:c}),h=new se(c.framebufferWidth,c.framebufferHeight,{format:me,type:Aa,encoding:u.outputEncoding,stencilBuffer:d.stencil})}else{let Z=null,ou=null,lu=null;d.depth&&(lu=d.stencil?35056:33190,Z=d.stencil?ui:va,ou=d.stencil?Za:ka);const G={colorFormat:32856,depthFormat:lu,scaleFactor:r};D=new XRWebGLBinding(n,e),x=D.createProjectionLayer(G),n.updateRenderState({layers:[x]}),h=new se(x.textureWidth,x.textureHeight,{format:me,type:Aa,depthTexture:new I1(x.textureWidth,x.textureHeight,ou,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:d.stencil,encoding:u.outputEncoding,samples:d.antialias?4:0});const ru=u.properties.get(h);ru.__ignoreDepthValues=x.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(s),l=null,t=await n.requestReferenceSpace(o),mu.setContext(n),mu.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function T(V){for(let Z=0;Z<V.removed.length;Z++){const ou=V.removed[Z],lu=g.indexOf(ou);lu>=0&&(g[lu]=null,F[lu].disconnect(ou))}for(let Z=0;Z<V.added.length;Z++){const ou=V.added[Z];let lu=g.indexOf(ou);if(lu===-1){for(let ru=0;ru<F.length;ru++)if(ru>=g.length){g.push(ou),lu=ru;break}else if(g[ru]===null){g[ru]=ou,lu=ru;break}if(lu===-1)break}const G=F[lu];G&&G.connect(ou)}}const S=new _,J=new _;function O(V,Z,ou){S.setFromMatrixPosition(Z.matrixWorld),J.setFromMatrixPosition(ou.matrixWorld);const lu=S.distanceTo(J),G=Z.projectionMatrix.elements,ru=ou.projectionMatrix.elements,vu=G[14]/(G[10]-1),pu=G[14]/(G[10]+1),xu=(G[9]+1)/G[5],Ju=(G[9]-1)/G[5],P=(G[8]-1)/G[0],I=(ru[8]+1)/ru[0],tu=vu*P,bu=vu*I,hu=lu/(-P+I),Gu=hu*-P;Z.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Gu),V.translateZ(hu),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const Lu=vu+hu,Pu=pu+hu,o0=tu-Gu,r0=bu+(lu-Gu),z=xu*pu/Pu*Lu,f=Ju*pu/Pu*Lu;V.projectionMatrix.makePerspective(o0,r0,z,f,Lu,Pu)}function K(V,Z){Z===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Z.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(n===null)return;B.near=M.near=A.near=V.near,B.far=M.far=A.far=V.far,(y!==B.near||L!==B.far)&&(n.updateRenderState({depthNear:B.near,depthFar:B.far}),y=B.near,L=B.far);const Z=V.parent,ou=B.cameras;K(B,Z);for(let G=0;G<ou.length;G++)K(ou[G],Z);B.matrixWorld.decompose(B.position,B.quaternion,B.scale),V.matrix.copy(B.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale);const lu=V.children;for(let G=0,ru=lu.length;G<ru;G++)lu[G].updateMatrixWorld(!0);ou.length===2?O(B,A,M):B.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return B},this.getFoveation=function(){if(!(x===null&&c===null))return s},this.setFoveation=function(V){s=V,x!==null&&(x.fixedFoveation=V),c!==null&&c.fixedFoveation!==void 0&&(c.fixedFoveation=V)},this.getPlanes=function(){return C};let Q=null;function uu(V,Z){if(E=Z.getViewerPose(l||t),p=Z,E!==null){const ou=E.views;c!==null&&(u.setRenderTargetFramebuffer(h,c.framebuffer),u.setRenderTarget(h));let lu=!1;ou.length!==B.cameras.length&&(B.cameras.length=0,lu=!0);for(let G=0;G<ou.length;G++){const ru=ou[G];let vu=null;if(c!==null)vu=c.getViewport(ru);else{const xu=D.getViewSubImage(x,ru);vu=xu.viewport,G===0&&(u.setRenderTargetTextures(h,xu.colorTexture,x.ignoreDepthValues?void 0:xu.depthStencilTexture),u.setRenderTarget(h))}let pu=k[G];pu===void 0&&(pu=new ue,pu.layers.enable(G),pu.viewport=new M0,k[G]=pu),pu.matrix.fromArray(ru.transform.matrix),pu.projectionMatrix.fromArray(ru.projectionMatrix),pu.viewport.set(vu.x,vu.y,vu.width,vu.height),G===0&&B.matrix.copy(pu.matrix),lu===!0&&B.cameras.push(pu)}}for(let ou=0;ou<F.length;ou++){const lu=g[ou],G=F[ou];lu!==null&&G!==void 0&&G.update(lu,Z,l||t)}if(Q&&Q(V,Z),Z.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:Z.detectedPlanes});let ou=null;for(const lu of C)Z.detectedPlanes.has(lu)||(ou===null&&(ou=[]),ou.push(lu));if(ou!==null)for(const lu of ou)C.delete(lu),v.delete(lu),i.dispatchEvent({type:"planeremoved",data:lu});for(const lu of Z.detectedPlanes)if(!C.has(lu))C.add(lu),v.set(lu,Z.lastChangedTime),i.dispatchEvent({type:"planeadded",data:lu});else{const G=v.get(lu);lu.lastChangedTime>G&&(v.set(lu,lu.lastChangedTime),i.dispatchEvent({type:"planechanged",data:lu}))}}p=null}const mu=new R1;mu.setAnimationLoop(uu),this.setAnimationLoop=function(V){Q=V},this.dispose=function(){}}}function id(a,u){function e(d,m){m.color.getRGB(d.fogColor.value,w1(a)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function i(d,m,h,F,g){m.isMeshBasicMaterial||m.isMeshLambertMaterial?n(d,m):m.isMeshToonMaterial?(n(d,m),E(d,m)):m.isMeshPhongMaterial?(n(d,m),l(d,m)):m.isMeshStandardMaterial?(n(d,m),D(d,m),m.isMeshPhysicalMaterial&&x(d,m,g)):m.isMeshMatcapMaterial?(n(d,m),c(d,m)):m.isMeshDepthMaterial?n(d,m):m.isMeshDistanceMaterial?(n(d,m),p(d,m)):m.isMeshNormalMaterial?n(d,m):m.isLineBasicMaterial?(r(d,m),m.isLineDashedMaterial&&t(d,m)):m.isPointsMaterial?o(d,m,h,F):m.isSpriteMaterial?s(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function n(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.bumpMap&&(d.bumpMap.value=m.bumpMap,d.bumpScale.value=m.bumpScale,m.side===ae&&(d.bumpScale.value*=-1)),m.displacementMap&&(d.displacementMap.value=m.displacementMap,d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap),m.normalMap&&(d.normalMap.value=m.normalMap,d.normalScale.value.copy(m.normalScale),m.side===ae&&d.normalScale.value.negate()),m.specularMap&&(d.specularMap.value=m.specularMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const h=u.get(m).envMap;if(h&&(d.envMap.value=h,d.flipEnvMap.value=h.isCubeTexture&&h.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap){d.lightMap.value=m.lightMap;const C=a.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=m.lightMapIntensity*C}m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity);let F;m.map?F=m.map:m.specularMap?F=m.specularMap:m.displacementMap?F=m.displacementMap:m.normalMap?F=m.normalMap:m.bumpMap?F=m.bumpMap:m.roughnessMap?F=m.roughnessMap:m.metalnessMap?F=m.metalnessMap:m.alphaMap?F=m.alphaMap:m.emissiveMap?F=m.emissiveMap:m.clearcoatMap?F=m.clearcoatMap:m.clearcoatNormalMap?F=m.clearcoatNormalMap:m.clearcoatRoughnessMap?F=m.clearcoatRoughnessMap:m.iridescenceMap?F=m.iridescenceMap:m.iridescenceThicknessMap?F=m.iridescenceThicknessMap:m.specularIntensityMap?F=m.specularIntensityMap:m.specularColorMap?F=m.specularColorMap:m.transmissionMap?F=m.transmissionMap:m.thicknessMap?F=m.thicknessMap:m.sheenColorMap?F=m.sheenColorMap:m.sheenRoughnessMap&&(F=m.sheenRoughnessMap),F!==void 0&&(F.isWebGLRenderTarget&&(F=F.texture),F.matrixAutoUpdate===!0&&F.updateMatrix(),d.uvTransform.value.copy(F.matrix));let g;m.aoMap?g=m.aoMap:m.lightMap&&(g=m.lightMap),g!==void 0&&(g.isWebGLRenderTarget&&(g=g.texture),g.matrixAutoUpdate===!0&&g.updateMatrix(),d.uv2Transform.value.copy(g.matrix))}function r(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity}function t(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function o(d,m,h,F){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*h,d.scale.value=F*.5,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let g;m.map?g=m.map:m.alphaMap&&(g=m.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),d.uvTransform.value.copy(g.matrix))}function s(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let h;m.map?h=m.map:m.alphaMap&&(h=m.alphaMap),h!==void 0&&(h.matrixAutoUpdate===!0&&h.updateMatrix(),d.uvTransform.value.copy(h.matrix))}function l(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function E(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function D(d,m){d.roughness.value=m.roughness,d.metalness.value=m.metalness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap),u.get(m).envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function x(d,m,h){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),d.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===ae&&d.clearcoatNormalScale.value.negate())),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=h.texture,d.transmissionSamplerSize.value.set(h.width,h.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap)}function c(d,m){m.matcap&&(d.matcap.value=m.matcap)}function p(d,m){d.referencePosition.value.copy(m.referencePosition),d.nearDistance.value=m.nearDistance,d.farDistance.value=m.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:i}}function nd(a,u,e,i){let n={},r={},t=[];const o=e.isWebGL2?a.getParameter(35375):0;function s(F,g){const C=g.program;i.uniformBlockBinding(F,C)}function l(F,g){let C=n[F.id];C===void 0&&(p(F),C=E(F),n[F.id]=C,F.addEventListener("dispose",m));const v=g.program;i.updateUBOMapping(F,v);const A=u.render.frame;r[F.id]!==A&&(x(F),r[F.id]=A)}function E(F){const g=D();F.__bindingPointIndex=g;const C=a.createBuffer(),v=F.__size,A=F.usage;return a.bindBuffer(35345,C),a.bufferData(35345,v,A),a.bindBuffer(35345,null),a.bindBufferBase(35345,g,C),C}function D(){for(let F=0;F<o;F++)if(t.indexOf(F)===-1)return t.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(F){const g=n[F.id],C=F.uniforms,v=F.__cache;a.bindBuffer(35345,g);for(let A=0,M=C.length;A<M;A++){const k=C[A];if(c(k,A,v)===!0){const B=k.__offset,y=Array.isArray(k.value)?k.value:[k.value];let L=0;for(let N=0;N<y.length;N++){const j=y[N],T=d(j);typeof j=="number"?(k.__data[0]=j,a.bufferSubData(35345,B+L,k.__data)):j.isMatrix3?(k.__data[0]=j.elements[0],k.__data[1]=j.elements[1],k.__data[2]=j.elements[2],k.__data[3]=j.elements[0],k.__data[4]=j.elements[3],k.__data[5]=j.elements[4],k.__data[6]=j.elements[5],k.__data[7]=j.elements[0],k.__data[8]=j.elements[6],k.__data[9]=j.elements[7],k.__data[10]=j.elements[8],k.__data[11]=j.elements[0]):(j.toArray(k.__data,L),L+=T.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,B,k.__data)}}a.bindBuffer(35345,null)}function c(F,g,C){const v=F.value;if(C[g]===void 0){if(typeof v=="number")C[g]=v;else{const A=Array.isArray(v)?v:[v],M=[];for(let k=0;k<A.length;k++)M.push(A[k].clone());C[g]=M}return!0}else if(typeof v=="number"){if(C[g]!==v)return C[g]=v,!0}else{const A=Array.isArray(C[g])?C[g]:[C[g]],M=Array.isArray(v)?v:[v];for(let k=0;k<A.length;k++){const B=A[k];if(B.equals(M[k])===!1)return B.copy(M[k]),!0}}return!1}function p(F){const g=F.uniforms;let C=0;const v=16;let A=0;for(let M=0,k=g.length;M<k;M++){const B=g[M],y={boundary:0,storage:0},L=Array.isArray(B.value)?B.value:[B.value];for(let N=0,j=L.length;N<j;N++){const T=L[N],S=d(T);y.boundary+=S.boundary,y.storage+=S.storage}if(B.__data=new Float32Array(y.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=C,M>0){A=C%v;const N=v-A;A!==0&&N-y.boundary<0&&(C+=v-A,B.__offset=C)}C+=y.storage}return A=C%v,A>0&&(C+=v-A),F.__size=C,F.__cache={},this}function d(F){const g={boundary:0,storage:0};return typeof F=="number"?(g.boundary=4,g.storage=4):F.isVector2?(g.boundary=8,g.storage=8):F.isVector3||F.isColor?(g.boundary=16,g.storage=12):F.isVector4?(g.boundary=16,g.storage=16):F.isMatrix3?(g.boundary=48,g.storage=48):F.isMatrix4?(g.boundary=64,g.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),g}function m(F){const g=F.target;g.removeEventListener("dispose",m);const C=t.indexOf(g.__bindingPointIndex);t.splice(C,1),a.deleteBuffer(n[g.id]),delete n[g.id],delete r[g.id]}function h(){for(const F in n)a.deleteBuffer(n[F]);t=[],n={},r={}}return{bind:s,update:l,dispose:h}}function rd(){const a=Ri("canvas");return a.style.display="block",a}function J1(a={}){this.isWebGLRenderer=!0;const u=a.canvas!==void 0?a.canvas:rd(),e=a.context!==void 0?a.context:null,i=a.depth!==void 0?a.depth:!0,n=a.stencil!==void 0?a.stencil:!0,r=a.antialias!==void 0?a.antialias:!1,t=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,o=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,s=a.powerPreference!==void 0?a.powerPreference:"default",l=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let E;e!==null?E=e.getContextAttributes().alpha:E=a.alpha!==void 0?a.alpha:!1;let D=null,x=null;const c=[],p=[];this.domElement=u,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ia,this.physicallyCorrectLights=!1,this.toneMapping=je,this.toneMappingExposure=1;const d=this;let m=!1,h=0,F=0,g=null,C=-1,v=null;const A=new M0,M=new M0;let k=null,B=u.width,y=u.height,L=1,N=null,j=null;const T=new M0(0,0,B,y),S=new M0(0,0,B,y);let J=!1;const O=new Ct;let K=!1,Q=!1,uu=null;const mu=new x0,V=new du,Z=new _,ou={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function lu(){return g===null?L:1}let G=e;function ru(b,H){for(let $=0;$<b.length;$++){const R=b[$],q=u.getContext(R,H);if(q!==null)return q}return null}try{const b={alpha:!0,depth:i,stencil:n,antialias:r,premultipliedAlpha:t,preserveDrawingBuffer:o,powerPreference:s,failIfMajorPerformanceCaveat:l};if("setAttribute"in u&&u.setAttribute("data-engine",`three.js r${mt}`),u.addEventListener("webglcontextlost",Ru,!1),u.addEventListener("webglcontextrestored",wu,!1),u.addEventListener("webglcontextcreationerror",u0,!1),G===null){const H=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&H.shift(),G=ru(H,b),G===null)throw ru(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let vu,pu,xu,Ju,P,I,tu,bu,hu,Gu,Lu,Pu,o0,r0,z,f,W,nu,Eu,Fu,Hu,gu,Y,Tu;function Nu(){vu=new px(G),pu=new Dx(G,vu,a),vu.init(pu),gu=new Xc(G,vu,pu),xu=new Yc(G,vu,pu),Ju=new kx,P=new Rc,I=new Qc(G,vu,xu,P,pu,gu,Ju),tu=new cx(d),bu=new hx(d),hu=new SE(G,pu),Y=new lx(G,vu,hu,pu),Gu=new Fx(G,hu,Ju,Y),Lu=new bx(G,Gu,hu,Ju),Eu=new fx(G,pu,I),f=new xx(P),Pu=new Lc(d,tu,bu,vu,pu,Y,f),o0=new id(d,P),r0=new Nc,z=new Oc(vu,pu),nu=new sx(d,tu,bu,xu,Lu,E,t),W=new Zc(d,Lu,pu),Tu=new nd(G,Ju,pu,xu),Fu=new Ex(G,vu,Ju,pu),Hu=new gx(G,vu,Ju,pu),Ju.programs=Pu.programs,d.capabilities=pu,d.extensions=vu,d.properties=P,d.renderLists=r0,d.shadowMap=W,d.state=xu,d.info=Ju}Nu();const yu=new ad(d,G);this.xr=yu,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const b=vu.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=vu.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(b){b!==void 0&&(L=b,this.setSize(B,y,!1))},this.getSize=function(b){return b.set(B,y)},this.setSize=function(b,H,$){if(yu.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=b,y=H,u.width=Math.floor(b*L),u.height=Math.floor(H*L),$!==!1&&(u.style.width=b+"px",u.style.height=H+"px"),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set(B*L,y*L).floor()},this.setDrawingBufferSize=function(b,H,$){B=b,y=H,L=$,u.width=Math.floor(b*$),u.height=Math.floor(H*$),this.setViewport(0,0,b,H)},this.getCurrentViewport=function(b){return b.copy(A)},this.getViewport=function(b){return b.copy(T)},this.setViewport=function(b,H,$,R){b.isVector4?T.set(b.x,b.y,b.z,b.w):T.set(b,H,$,R),xu.viewport(A.copy(T).multiplyScalar(L).floor())},this.getScissor=function(b){return b.copy(S)},this.setScissor=function(b,H,$,R){b.isVector4?S.set(b.x,b.y,b.z,b.w):S.set(b,H,$,R),xu.scissor(M.copy(S).multiplyScalar(L).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(b){xu.setScissorTest(J=b)},this.setOpaqueSort=function(b){N=b},this.setTransparentSort=function(b){j=b},this.getClearColor=function(b){return b.copy(nu.getClearColor())},this.setClearColor=function(){nu.setClearColor.apply(nu,arguments)},this.getClearAlpha=function(){return nu.getClearAlpha()},this.setClearAlpha=function(){nu.setClearAlpha.apply(nu,arguments)},this.clear=function(b=!0,H=!0,$=!0){let R=0;b&&(R|=16384),H&&(R|=256),$&&(R|=1024),G.clear(R)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){u.removeEventListener("webglcontextlost",Ru,!1),u.removeEventListener("webglcontextrestored",wu,!1),u.removeEventListener("webglcontextcreationerror",u0,!1),r0.dispose(),z.dispose(),P.dispose(),tu.dispose(),bu.dispose(),Lu.dispose(),Y.dispose(),Tu.dispose(),Pu.dispose(),yu.dispose(),yu.removeEventListener("sessionstart",ku),yu.removeEventListener("sessionend",zu),uu&&(uu.dispose(),uu=null),i0.stop()};function Ru(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function wu(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const b=Ju.autoReset,H=W.enabled,$=W.autoUpdate,R=W.needsUpdate,q=W.type;Nu(),Ju.autoReset=b,W.enabled=H,W.autoUpdate=$,W.needsUpdate=R,W.type=q}function u0(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function s0(b){const H=b.target;H.removeEventListener("dispose",s0),A0(H)}function A0(b){w(b),P.remove(b)}function w(b){const H=P.get(b).programs;H!==void 0&&(H.forEach(function($){Pu.releaseProgram($)}),b.isShaderMaterial&&Pu.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,$,R,q,_u){H===null&&(H=ou);const Vu=q.isMesh&&q.matrixWorld.determinant()<0,Wu=$l(b,H,$,R,q);xu.setMaterial(R,Vu);let Uu=$.index,e0=1;R.wireframe===!0&&(Uu=Gu.getWireframeAttribute($),e0=2);const qu=$.drawRange,Zu=$.attributes.position;let p0=qu.start*e0,$0=(qu.start+qu.count)*e0;_u!==null&&(p0=Math.max(p0,_u.start*e0),$0=Math.min($0,(_u.start+_u.count)*e0)),Uu!==null?(p0=Math.max(p0,0),$0=Math.min($0,Uu.count)):Zu!=null&&(p0=Math.max(p0,0),$0=Math.min($0,Zu.count));const Le=$0-p0;if(Le<0||Le===1/0)return;Y.setup(q,R,Wu,$,Uu);let ra,F0=Fu;if(Uu!==null&&(ra=hu.get(Uu),F0=Hu,F0.setIndex(ra)),q.isMesh)R.wireframe===!0?(xu.setLineWidth(R.wireframeLinewidth*lu()),F0.setMode(1)):F0.setMode(4);else if(q.isLine){let Yu=R.linewidth;Yu===void 0&&(Yu=1),xu.setLineWidth(Yu*lu()),q.isLineSegments?F0.setMode(1):q.isLineLoop?F0.setMode(2):F0.setMode(3)}else q.isPoints?F0.setMode(0):q.isSprite&&F0.setMode(4);if(q.isInstancedMesh)F0.renderInstances(p0,Le,q.count);else if($.isInstancedBufferGeometry){const Yu=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,$n=Math.min($.instanceCount,Yu);F0.renderInstances(p0,Le,$n)}else F0.render(p0,Le)},this.compile=function(b,H){function $(R,q,_u){R.transparent===!0&&R.side===Qe&&R.forceSinglePass===!1?(R.side=ae,R.needsUpdate=!0,ie(R,q,_u),R.side=aa,R.needsUpdate=!0,ie(R,q,_u),R.side=Qe):ie(R,q,_u)}x=z.get(b),x.init(),p.push(x),b.traverseVisible(function(R){R.isLight&&R.layers.test(H.layers)&&(x.pushLight(R),R.castShadow&&x.pushShadow(R))}),x.setupLights(d.physicallyCorrectLights),b.traverse(function(R){const q=R.material;if(q)if(Array.isArray(q))for(let _u=0;_u<q.length;_u++){const Vu=q[_u];$(Vu,b,R)}else $(q,b,R)}),p.pop(),x=null};let U=null;function iu(b){U&&U(b)}function ku(){i0.stop()}function zu(){i0.start()}const i0=new R1;i0.setAnimationLoop(iu),typeof self<"u"&&i0.setContext(self),this.setAnimationLoop=function(b){U=b,yu.setAnimationLoop(b),b===null?i0.stop():i0.start()},yu.addEventListener("sessionstart",ku),yu.addEventListener("sessionend",zu),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),yu.enabled===!0&&yu.isPresenting===!0&&(yu.cameraAutoUpdate===!0&&yu.updateCamera(H),H=yu.getCamera()),b.isScene===!0&&b.onBeforeRender(d,b,H,g),x=z.get(b,p.length),x.init(),p.push(x),mu.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),O.setFromProjectionMatrix(mu),Q=this.localClippingEnabled,K=f.init(this.clippingPlanes,Q),D=r0.get(b,c.length),D.init(),c.push(D),B0(b,H,0,d.sortObjects),D.finish(),d.sortObjects===!0&&D.sort(N,j),K===!0&&f.beginShadows();const $=x.state.shadowsArray;if(W.render($,b,H),K===!0&&f.endShadows(),this.info.autoReset===!0&&this.info.reset(),nu.render(D,b),x.setupLights(d.physicallyCorrectLights),H.isArrayCamera){const R=H.cameras;for(let q=0,_u=R.length;q<_u;q++){const Vu=R[q];_0(D,b,Vu,Vu.viewport)}}else _0(D,b,H);g!==null&&(I.updateMultisampleRenderTarget(g),I.updateRenderTargetMipmap(g)),b.isScene===!0&&b.onAfterRender(d,b,H),Y.resetDefaultState(),C=-1,v=null,p.pop(),p.length>0?x=p[p.length-1]:x=null,c.pop(),c.length>0?D=c[c.length-1]:D=null};function B0(b,H,$,R){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLight)x.pushLight(b),b.castShadow&&x.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||O.intersectsSprite(b)){R&&Z.setFromMatrixPosition(b.matrixWorld).applyMatrix4(mu);const Vu=Lu.update(b),Wu=b.material;Wu.visible&&D.push(b,Vu,Wu,$,Z.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==Ju.render.frame&&(b.skeleton.update(),b.skeleton.frame=Ju.render.frame),!b.frustumCulled||O.intersectsObject(b))){R&&Z.setFromMatrixPosition(b.matrixWorld).applyMatrix4(mu);const Vu=Lu.update(b),Wu=b.material;if(Array.isArray(Wu)){const Uu=Vu.groups;for(let e0=0,qu=Uu.length;e0<qu;e0++){const Zu=Uu[e0],p0=Wu[Zu.materialIndex];p0&&p0.visible&&D.push(b,Vu,p0,$,Z.z,Zu)}}else Wu.visible&&D.push(b,Vu,Wu,$,Z.z,null)}}const _u=b.children;for(let Vu=0,Wu=_u.length;Vu<Wu;Vu++)B0(_u[Vu],H,$,R)}function _0(b,H,$,R){const q=b.opaque,_u=b.transmissive,Vu=b.transparent;x.setupLightsView($),K===!0&&f.setGlobalState(d.clippingPlanes,$),_u.length>0&&na(q,H,$),R&&xu.viewport(A.copy(R)),q.length>0&&l0(q,H,$),_u.length>0&&l0(_u,H,$),Vu.length>0&&l0(Vu,H,$),xu.buffers.depth.setTest(!0),xu.buffers.depth.setMask(!0),xu.buffers.color.setMask(!0),xu.setPolygonOffset(!1)}function na(b,H,$){const R=pu.isWebGL2;uu===null&&(uu=new se(1,1,{generateMipmaps:!0,type:vu.has("EXT_color_buffer_half_float")?_i:Aa,minFilter:wi,samples:R&&r===!0?4:0})),d.getDrawingBufferSize(V),R?uu.setSize(V.x,V.y):uu.setSize(Zr(V.x),Zr(V.y));const q=d.getRenderTarget();d.setRenderTarget(uu),d.clear();const _u=d.toneMapping;d.toneMapping=je,l0(b,H,$),d.toneMapping=_u,I.updateMultisampleRenderTarget(uu),I.updateRenderTargetMipmap(uu),d.setRenderTarget(q)}function l0(b,H,$){const R=H.isScene===!0?H.overrideMaterial:null;for(let q=0,_u=b.length;q<_u;q++){const Vu=b[q],Wu=Vu.object,Uu=Vu.geometry,e0=R===null?Vu.material:R,qu=Vu.group;Wu.layers.test($.layers)&&_e(Wu,H,$,Uu,e0,qu)}}function _e(b,H,$,R,q,_u){b.onBeforeRender(d,H,$,R,q,_u),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),q.onBeforeRender(d,H,$,R,b,_u),q.transparent===!0&&q.side===Qe&&q.forceSinglePass===!1?(q.side=ae,q.needsUpdate=!0,d.renderBufferDirect($,H,R,q,b,_u),q.side=aa,q.needsUpdate=!0,d.renderBufferDirect($,H,R,q,b,_u),q.side=Qe):d.renderBufferDirect($,H,R,q,b,_u),b.onAfterRender(d,H,$,R,q,_u)}function ie(b,H,$){H.isScene!==!0&&(H=ou);const R=P.get(b),q=x.state.lights,_u=x.state.shadowsArray,Vu=q.state.version,Wu=Pu.getParameters(b,q.state,_u,H,$),Uu=Pu.getProgramCacheKey(Wu);let e0=R.programs;R.environment=b.isMeshStandardMaterial?H.environment:null,R.fog=H.fog,R.envMap=(b.isMeshStandardMaterial?bu:tu).get(b.envMap||R.environment),e0===void 0&&(b.addEventListener("dispose",s0),e0=new Map,R.programs=e0);let qu=e0.get(Uu);if(qu!==void 0){if(R.currentProgram===qu&&R.lightsStateVersion===Vu)return Rt(b,Wu),qu}else Wu.uniforms=Pu.getUniforms(b),b.onBuild($,Wu,d),b.onBeforeCompile(Wu,d),qu=Pu.acquireProgram(Wu,Uu),e0.set(Uu,qu),R.uniforms=Wu.uniforms;const Zu=R.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Zu.clippingPlanes=f.uniform),Rt(b,Wu),R.needsLights=Zl(b),R.lightsStateVersion=Vu,R.needsLights&&(Zu.ambientLightColor.value=q.state.ambient,Zu.lightProbe.value=q.state.probe,Zu.directionalLights.value=q.state.directional,Zu.directionalLightShadows.value=q.state.directionalShadow,Zu.spotLights.value=q.state.spot,Zu.spotLightShadows.value=q.state.spotShadow,Zu.rectAreaLights.value=q.state.rectArea,Zu.ltc_1.value=q.state.rectAreaLTC1,Zu.ltc_2.value=q.state.rectAreaLTC2,Zu.pointLights.value=q.state.point,Zu.pointLightShadows.value=q.state.pointShadow,Zu.hemisphereLights.value=q.state.hemi,Zu.directionalShadowMap.value=q.state.directionalShadowMap,Zu.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Zu.spotShadowMap.value=q.state.spotShadowMap,Zu.spotLightMatrix.value=q.state.spotLightMatrix,Zu.spotLightMap.value=q.state.spotLightMap,Zu.pointShadowMap.value=q.state.pointShadowMap,Zu.pointShadowMatrix.value=q.state.pointShadowMatrix);const p0=qu.getUniforms(),$0=An.seqWithValue(p0.seq,Zu);return R.currentProgram=qu,R.uniformsList=$0,qu}function Rt(b,H){const $=P.get(b);$.outputEncoding=H.outputEncoding,$.instancing=H.instancing,$.skinning=H.skinning,$.morphTargets=H.morphTargets,$.morphNormals=H.morphNormals,$.morphColors=H.morphColors,$.morphTargetsCount=H.morphTargetsCount,$.numClippingPlanes=H.numClippingPlanes,$.numIntersection=H.numClipIntersection,$.vertexAlphas=H.vertexAlphas,$.vertexTangents=H.vertexTangents,$.toneMapping=H.toneMapping}function $l(b,H,$,R,q){H.isScene!==!0&&(H=ou),I.resetTextureUnits();const _u=H.fog,Vu=R.isMeshStandardMaterial?H.environment:null,Wu=g===null?d.outputEncoding:g.isXRRenderTarget===!0?g.texture.encoding:ia,Uu=(R.isMeshStandardMaterial?bu:tu).get(R.envMap||Vu),e0=R.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,qu=!!R.normalMap&&!!$.attributes.tangent,Zu=!!$.morphAttributes.position,p0=!!$.morphAttributes.normal,$0=!!$.morphAttributes.color,Le=R.toneMapped?d.toneMapping:je,ra=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,F0=ra!==void 0?ra.length:0,Yu=P.get(R),$n=x.state.lights;if(K===!0&&(Q===!0||b!==v)){const q0=b===v&&R.id===C;f.setState(R,b,q0)}let y0=!1;R.version===Yu.__version?(Yu.needsLights&&Yu.lightsStateVersion!==$n.state.version||Yu.outputEncoding!==Wu||q.isInstancedMesh&&Yu.instancing===!1||!q.isInstancedMesh&&Yu.instancing===!0||q.isSkinnedMesh&&Yu.skinning===!1||!q.isSkinnedMesh&&Yu.skinning===!0||Yu.envMap!==Uu||R.fog===!0&&Yu.fog!==_u||Yu.numClippingPlanes!==void 0&&(Yu.numClippingPlanes!==f.numPlanes||Yu.numIntersection!==f.numIntersection)||Yu.vertexAlphas!==e0||Yu.vertexTangents!==qu||Yu.morphTargets!==Zu||Yu.morphNormals!==p0||Yu.morphColors!==$0||Yu.toneMapping!==Le||pu.isWebGL2===!0&&Yu.morphTargetsCount!==F0)&&(y0=!0):(y0=!0,Yu.__version=R.version);let ta=Yu.currentProgram;y0===!0&&(ta=ie(R,H,q));let Kt=!1,xi=!1,qn=!1;const N0=ta.getUniforms(),oa=Yu.uniforms;if(xu.useProgram(ta.program)&&(Kt=!0,xi=!0,qn=!0),R.id!==C&&(C=R.id,xi=!0),Kt||v!==b){if(N0.setValue(G,"projectionMatrix",b.projectionMatrix),pu.logarithmicDepthBuffer&&N0.setValue(G,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),v!==b&&(v=b,xi=!0,qn=!0),R.isShaderMaterial||R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshStandardMaterial||R.envMap){const q0=N0.map.cameraPosition;q0!==void 0&&q0.setValue(G,Z.setFromMatrixPosition(b.matrixWorld))}(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial)&&N0.setValue(G,"isOrthographic",b.isOrthographicCamera===!0),(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial||R.isShadowMaterial||q.isSkinnedMesh)&&N0.setValue(G,"viewMatrix",b.matrixWorldInverse)}if(q.isSkinnedMesh){N0.setOptional(G,q,"bindMatrix"),N0.setOptional(G,q,"bindMatrixInverse");const q0=q.skeleton;q0&&(pu.floatVertexTextures?(q0.boneTexture===null&&q0.computeBoneTexture(),N0.setValue(G,"boneTexture",q0.boneTexture,I),N0.setValue(G,"boneTextureSize",q0.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Zn=$.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0&&pu.isWebGL2===!0)&&Eu.update(q,$,R,ta),(xi||Yu.receiveShadow!==q.receiveShadow)&&(Yu.receiveShadow=q.receiveShadow,N0.setValue(G,"receiveShadow",q.receiveShadow)),R.isMeshGouraudMaterial&&R.envMap!==null&&(oa.envMap.value=Uu,oa.flipEnvMap.value=Uu.isCubeTexture&&Uu.isRenderTargetTexture===!1?-1:1),xi&&(N0.setValue(G,"toneMappingExposure",d.toneMappingExposure),Yu.needsLights&&ql(oa,qn),_u&&R.fog===!0&&o0.refreshFogUniforms(oa,_u),o0.refreshMaterialUniforms(oa,R,L,y,uu),An.upload(G,Yu.uniformsList,oa,I)),R.isShaderMaterial&&R.uniformsNeedUpdate===!0&&(An.upload(G,Yu.uniformsList,oa,I),R.uniformsNeedUpdate=!1),R.isSpriteMaterial&&N0.setValue(G,"center",q.center),N0.setValue(G,"modelViewMatrix",q.modelViewMatrix),N0.setValue(G,"normalMatrix",q.normalMatrix),N0.setValue(G,"modelMatrix",q.matrixWorld),R.isShaderMaterial||R.isRawShaderMaterial){const q0=R.uniformsGroups;for(let Yn=0,Yl=q0.length;Yn<Yl;Yn++)if(pu.isWebGL2){const Nt=q0[Yn];Tu.update(Nt,ta),Tu.bind(Nt,ta)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ta}function ql(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function Zl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return h},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return g},this.setRenderTargetTextures=function(b,H,$){P.get(b.texture).__webglTexture=H,P.get(b.depthTexture).__webglTexture=$;const R=P.get(b);R.__hasExternalTextures=!0,R.__hasExternalTextures&&(R.__autoAllocateDepthBuffer=$===void 0,R.__autoAllocateDepthBuffer||vu.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),R.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,H){const $=P.get(b);$.__webglFramebuffer=H,$.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(b,H=0,$=0){g=b,h=H,F=$;let R=!0,q=null,_u=!1,Vu=!1;if(b){const Uu=P.get(b);Uu.__useDefaultFramebuffer!==void 0?(xu.bindFramebuffer(36160,null),R=!1):Uu.__webglFramebuffer===void 0?I.setupRenderTarget(b):Uu.__hasExternalTextures&&I.rebindTextures(b,P.get(b.texture).__webglTexture,P.get(b.depthTexture).__webglTexture);const e0=b.texture;(e0.isData3DTexture||e0.isDataArrayTexture||e0.isCompressedArrayTexture)&&(Vu=!0);const qu=P.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(q=qu[H],_u=!0):pu.isWebGL2&&b.samples>0&&I.useMultisampledRTT(b)===!1?q=P.get(b).__webglMultisampledFramebuffer:q=qu,A.copy(b.viewport),M.copy(b.scissor),k=b.scissorTest}else A.copy(T).multiplyScalar(L).floor(),M.copy(S).multiplyScalar(L).floor(),k=J;if(xu.bindFramebuffer(36160,q)&&pu.drawBuffers&&R&&xu.drawBuffers(b,q),xu.viewport(A),xu.scissor(M),xu.setScissorTest(k),_u){const Uu=P.get(b.texture);G.framebufferTexture2D(36160,36064,34069+H,Uu.__webglTexture,$)}else if(Vu){const Uu=P.get(b.texture),e0=H||0;G.framebufferTextureLayer(36160,36064,Uu.__webglTexture,$||0,e0)}C=-1},this.readRenderTargetPixels=function(b,H,$,R,q,_u,Vu){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wu=P.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Vu!==void 0&&(Wu=Wu[Vu]),Wu){xu.bindFramebuffer(36160,Wu);try{const Uu=b.texture,e0=Uu.format,qu=Uu.type;if(e0!==me&&gu.convert(e0)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Zu=qu===_i&&(vu.has("EXT_color_buffer_half_float")||pu.isWebGL2&&vu.has("EXT_color_buffer_float"));if(qu!==Aa&&gu.convert(qu)!==G.getParameter(35738)&&!(qu===Ca&&(pu.isWebGL2||vu.has("OES_texture_float")||vu.has("WEBGL_color_buffer_float")))&&!Zu){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-R&&$>=0&&$<=b.height-q&&G.readPixels(H,$,R,q,gu.convert(e0),gu.convert(qu),_u)}finally{const Uu=g!==null?P.get(g).__webglFramebuffer:null;xu.bindFramebuffer(36160,Uu)}}},this.copyFramebufferToTexture=function(b,H,$=0){const R=Math.pow(2,-$),q=Math.floor(H.image.width*R),_u=Math.floor(H.image.height*R);I.setTexture2D(H,0),G.copyTexSubImage2D(3553,$,0,0,b.x,b.y,q,_u),xu.unbindTexture()},this.copyTextureToTexture=function(b,H,$,R=0){const q=H.image.width,_u=H.image.height,Vu=gu.convert($.format),Wu=gu.convert($.type);I.setTexture2D($,0),G.pixelStorei(37440,$.flipY),G.pixelStorei(37441,$.premultiplyAlpha),G.pixelStorei(3317,$.unpackAlignment),H.isDataTexture?G.texSubImage2D(3553,R,b.x,b.y,q,_u,Vu,Wu,H.image.data):H.isCompressedTexture?G.compressedTexSubImage2D(3553,R,b.x,b.y,H.mipmaps[0].width,H.mipmaps[0].height,Vu,H.mipmaps[0].data):G.texSubImage2D(3553,R,b.x,b.y,Vu,Wu,H.image),R===0&&$.generateMipmaps&&G.generateMipmap(3553),xu.unbindTexture()},this.copyTextureToTexture3D=function(b,H,$,R,q=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _u=b.max.x-b.min.x+1,Vu=b.max.y-b.min.y+1,Wu=b.max.z-b.min.z+1,Uu=gu.convert(R.format),e0=gu.convert(R.type);let qu;if(R.isData3DTexture)I.setTexture3D(R,0),qu=32879;else if(R.isDataArrayTexture)I.setTexture2DArray(R,0),qu=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,R.flipY),G.pixelStorei(37441,R.premultiplyAlpha),G.pixelStorei(3317,R.unpackAlignment);const Zu=G.getParameter(3314),p0=G.getParameter(32878),$0=G.getParameter(3316),Le=G.getParameter(3315),ra=G.getParameter(32877),F0=$.isCompressedTexture?$.mipmaps[0]:$.image;G.pixelStorei(3314,F0.width),G.pixelStorei(32878,F0.height),G.pixelStorei(3316,b.min.x),G.pixelStorei(3315,b.min.y),G.pixelStorei(32877,b.min.z),$.isDataTexture||$.isData3DTexture?G.texSubImage3D(qu,q,H.x,H.y,H.z,_u,Vu,Wu,Uu,e0,F0.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(qu,q,H.x,H.y,H.z,_u,Vu,Wu,Uu,F0.data)):G.texSubImage3D(qu,q,H.x,H.y,H.z,_u,Vu,Wu,Uu,e0,F0),G.pixelStorei(3314,Zu),G.pixelStorei(32878,p0),G.pixelStorei(3316,$0),G.pixelStorei(3315,Le),G.pixelStorei(32877,ra),q===0&&R.generateMipmaps&&G.generateMipmap(qu),xu.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?I.setTextureCube(b,0):b.isData3DTexture?I.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?I.setTexture2DArray(b,0):I.setTexture2D(b,0),xu.unbindTexture()},this.resetState=function(){h=0,F=0,g=null,xu.reset(),Y.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class td extends J1{}td.prototype.isWebGL1Renderer=!0;class O1 extends v0{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(u,e){return super.copy(u,e),u.background!==null&&(this.background=u.background.clone()),u.environment!==null&&(this.environment=u.environment.clone()),u.fog!==null&&(this.fog=u.fog.clone()),this.backgroundBlurriness=u.backgroundBlurriness,this.backgroundIntensity=u.backgroundIntensity,u.overrideMaterial!==null&&(this.overrideMaterial=u.overrideMaterial.clone()),this.matrixAutoUpdate=u.matrixAutoUpdate,this}toJSON(u){const e=super.toJSON(u);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(u){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=u}}class as extends ke{constructor(u,e,i,n=1){super(u,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(u){return super.copy(u),this.meshPerAttribute=u.meshPerAttribute,this}toJSON(){const u=super.toJSON();return u.meshPerAttribute=this.meshPerAttribute,u.isInstancedBufferAttribute=!0,u}}const is=new x0,ns=new x0,xn=[],od=new x0,ki=new I0;let rs=class extends I0{constructor(u,e,i){super(u,e),this.isInstancedMesh=!0,this.instanceMatrix=new as(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.frustumCulled=!1;for(let n=0;n<i;n++)this.setMatrixAt(n,od)}copy(u,e){return super.copy(u,e),this.instanceMatrix.copy(u.instanceMatrix),u.instanceColor!==null&&(this.instanceColor=u.instanceColor.clone()),this.count=u.count,this}getColorAt(u,e){e.fromArray(this.instanceColor.array,u*3)}getMatrixAt(u,e){e.fromArray(this.instanceMatrix.array,u*16)}raycast(u,e){const i=this.matrixWorld,n=this.count;if(ki.geometry=this.geometry,ki.material=this.material,ki.material!==void 0)for(let r=0;r<n;r++){this.getMatrixAt(r,is),ns.multiplyMatrices(i,is),ki.matrixWorld=ns,ki.raycast(u,xn);for(let t=0,o=xn.length;t<o;t++){const s=xn[t];s.instanceId=r,s.object=this,e.push(s)}xn.length=0}}setColorAt(u,e){this.instanceColor===null&&(this.instanceColor=new as(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,u*3)}setMatrixAt(u,e){e.toArray(this.instanceMatrix.array,u*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};class Te{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(u,e){const i=this.getUtoTmapping(u);return this.getPoint(i,e)}getPoints(u=5){const e=[];for(let i=0;i<=u;i++)e.push(this.getPoint(i/u));return e}getSpacedPoints(u=5){const e=[];for(let i=0;i<=u;i++)e.push(this.getPointAt(i/u));return e}getLength(){const u=this.getLengths();return u[u.length-1]}getLengths(u=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===u+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),r=0;e.push(0);for(let t=1;t<=u;t++)i=this.getPoint(t/u),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(u,e){const i=this.getLengths();let n=0;const r=i.length;let t;e?t=e:t=u*i[r-1];let o=0,s=r-1,l;for(;o<=s;)if(n=Math.floor(o+(s-o)/2),l=i[n]-t,l<0)o=n+1;else if(l>0)s=n-1;else{s=n;break}if(n=s,i[n]===t)return n/(r-1);const E=i[n],x=i[n+1]-E,c=(t-E)/x;return(n+c)/(r-1)}getTangent(u,e){let n=u-1e-4,r=u+1e-4;n<0&&(n=0),r>1&&(r=1);const t=this.getPoint(n),o=this.getPoint(r),s=e||(t.isVector2?new du:new _);return s.copy(o).sub(t).normalize(),s}getTangentAt(u,e){const i=this.getUtoTmapping(u);return this.getTangent(i,e)}computeFrenetFrames(u,e){const i=new _,n=[],r=[],t=[],o=new _,s=new x0;for(let c=0;c<=u;c++){const p=c/u;n[c]=this.getTangentAt(p,new _)}r[0]=new _,t[0]=new _;let l=Number.MAX_VALUE;const E=Math.abs(n[0].x),D=Math.abs(n[0].y),x=Math.abs(n[0].z);E<=l&&(l=E,i.set(1,0,0)),D<=l&&(l=D,i.set(0,1,0)),x<=l&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),t[0].crossVectors(n[0],r[0]);for(let c=1;c<=u;c++){if(r[c]=r[c-1].clone(),t[c]=t[c-1].clone(),o.crossVectors(n[c-1],n[c]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(V0(n[c-1].dot(n[c]),-1,1));r[c].applyMatrix4(s.makeRotationAxis(o,p))}t[c].crossVectors(n[c],r[c])}if(e===!0){let c=Math.acos(V0(r[0].dot(r[u]),-1,1));c/=u,n[0].dot(o.crossVectors(r[0],r[u]))>0&&(c=-c);for(let p=1;p<=u;p++)r[p].applyMatrix4(s.makeRotationAxis(n[p],c*p)),t[p].crossVectors(n[p],r[p])}return{tangents:n,normals:r,binormals:t}}clone(){return new this.constructor().copy(this)}copy(u){return this.arcLengthDivisions=u.arcLengthDivisions,this}toJSON(){const u={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return u.arcLengthDivisions=this.arcLengthDivisions,u.type=this.type,u}fromJSON(u){return this.arcLengthDivisions=u.arcLengthDivisions,this}}class bt extends Te{constructor(u=0,e=0,i=1,n=1,r=0,t=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=u,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=t,this.aClockwise=o,this.aRotation=s}getPoint(u,e){const i=e||new du,n=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const t=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(t?r=0:r=n),this.aClockwise===!0&&!t&&(r===n?r=-n:r=r-n);const o=this.aStartAngle+u*r;let s=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const E=Math.cos(this.aRotation),D=Math.sin(this.aRotation),x=s-this.aX,c=l-this.aY;s=x*E-c*D+this.aX,l=x*D+c*E+this.aY}return i.set(s,l)}copy(u){return super.copy(u),this.aX=u.aX,this.aY=u.aY,this.xRadius=u.xRadius,this.yRadius=u.yRadius,this.aStartAngle=u.aStartAngle,this.aEndAngle=u.aEndAngle,this.aClockwise=u.aClockwise,this.aRotation=u.aRotation,this}toJSON(){const u=super.toJSON();return u.aX=this.aX,u.aY=this.aY,u.xRadius=this.xRadius,u.yRadius=this.yRadius,u.aStartAngle=this.aStartAngle,u.aEndAngle=this.aEndAngle,u.aClockwise=this.aClockwise,u.aRotation=this.aRotation,u}fromJSON(u){return super.fromJSON(u),this.aX=u.aX,this.aY=u.aY,this.xRadius=u.xRadius,this.yRadius=u.yRadius,this.aStartAngle=u.aStartAngle,this.aEndAngle=u.aEndAngle,this.aClockwise=u.aClockwise,this.aRotation=u.aRotation,this}}class sd extends bt{constructor(u,e,i,n,r,t){super(u,e,i,i,n,r,t),this.isArcCurve=!0,this.type="ArcCurve"}}function At(){let a=0,u=0,e=0,i=0;function n(r,t,o,s){a=r,u=o,e=-3*r+3*t-2*o-s,i=2*r-2*t+o+s}return{initCatmullRom:function(r,t,o,s,l){n(t,o,l*(o-r),l*(s-t))},initNonuniformCatmullRom:function(r,t,o,s,l,E,D){let x=(t-r)/l-(o-r)/(l+E)+(o-t)/E,c=(o-t)/E-(s-t)/(E+D)+(s-o)/D;x*=E,c*=E,n(t,o,x,c)},calc:function(r){const t=r*r,o=t*r;return a+u*r+e*t+i*o}}}const cn=new _,Pr=new At,Tr=new At,wr=new At;class ld extends Te{constructor(u=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=u,this.closed=e,this.curveType=i,this.tension=n}getPoint(u,e=new _){const i=e,n=this.points,r=n.length,t=(r-(this.closed?0:1))*u;let o=Math.floor(t),s=t-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:s===0&&o===r-1&&(o=r-2,s=1);let l,E;this.closed||o>0?l=n[(o-1)%r]:(cn.subVectors(n[0],n[1]).add(n[0]),l=cn);const D=n[o%r],x=n[(o+1)%r];if(this.closed||o+2<r?E=n[(o+2)%r]:(cn.subVectors(n[r-1],n[r-2]).add(n[r-1]),E=cn),this.curveType==="centripetal"||this.curveType==="chordal"){const c=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(D),c),d=Math.pow(D.distanceToSquared(x),c),m=Math.pow(x.distanceToSquared(E),c);d<1e-4&&(d=1),p<1e-4&&(p=d),m<1e-4&&(m=d),Pr.initNonuniformCatmullRom(l.x,D.x,x.x,E.x,p,d,m),Tr.initNonuniformCatmullRom(l.y,D.y,x.y,E.y,p,d,m),wr.initNonuniformCatmullRom(l.z,D.z,x.z,E.z,p,d,m)}else this.curveType==="catmullrom"&&(Pr.initCatmullRom(l.x,D.x,x.x,E.x,this.tension),Tr.initCatmullRom(l.y,D.y,x.y,E.y,this.tension),wr.initCatmullRom(l.z,D.z,x.z,E.z,this.tension));return i.set(Pr.calc(s),Tr.calc(s),wr.calc(s)),i}copy(u){super.copy(u),this.points=[];for(let e=0,i=u.points.length;e<i;e++){const n=u.points[e];this.points.push(n.clone())}return this.closed=u.closed,this.curveType=u.curveType,this.tension=u.tension,this}toJSON(){const u=super.toJSON();u.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];u.points.push(n.toArray())}return u.closed=this.closed,u.curveType=this.curveType,u.tension=this.tension,u}fromJSON(u){super.fromJSON(u),this.points=[];for(let e=0,i=u.points.length;e<i;e++){const n=u.points[e];this.points.push(new _().fromArray(n))}return this.closed=u.closed,this.curveType=u.curveType,this.tension=u.tension,this}}function ts(a,u,e,i,n){const r=(i-u)*.5,t=(n-e)*.5,o=a*a,s=a*o;return(2*e-2*i+r+t)*s+(-3*e+3*i-2*r-t)*o+r*a+e}function Ed(a,u){const e=1-a;return e*e*u}function Dd(a,u){return 2*(1-a)*a*u}function xd(a,u){return a*a*u}function Si(a,u,e,i){return Ed(a,u)+Dd(a,e)+xd(a,i)}function cd(a,u){const e=1-a;return e*e*e*u}function dd(a,u){const e=1-a;return 3*e*e*a*u}function md(a,u){return 3*(1-a)*a*a*u}function hd(a,u){return a*a*a*u}function Mi(a,u,e,i,n){return cd(a,u)+dd(a,e)+md(a,i)+hd(a,n)}class W1 extends Te{constructor(u=new du,e=new du,i=new du,n=new du){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=u,this.v1=e,this.v2=i,this.v3=n}getPoint(u,e=new du){const i=e,n=this.v0,r=this.v1,t=this.v2,o=this.v3;return i.set(Mi(u,n.x,r.x,t.x,o.x),Mi(u,n.y,r.y,t.y,o.y)),i}copy(u){return super.copy(u),this.v0.copy(u.v0),this.v1.copy(u.v1),this.v2.copy(u.v2),this.v3.copy(u.v3),this}toJSON(){const u=super.toJSON();return u.v0=this.v0.toArray(),u.v1=this.v1.toArray(),u.v2=this.v2.toArray(),u.v3=this.v3.toArray(),u}fromJSON(u){return super.fromJSON(u),this.v0.fromArray(u.v0),this.v1.fromArray(u.v1),this.v2.fromArray(u.v2),this.v3.fromArray(u.v3),this}}class pd extends Te{constructor(u=new _,e=new _,i=new _,n=new _){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=u,this.v1=e,this.v2=i,this.v3=n}getPoint(u,e=new _){const i=e,n=this.v0,r=this.v1,t=this.v2,o=this.v3;return i.set(Mi(u,n.x,r.x,t.x,o.x),Mi(u,n.y,r.y,t.y,o.y),Mi(u,n.z,r.z,t.z,o.z)),i}copy(u){return super.copy(u),this.v0.copy(u.v0),this.v1.copy(u.v1),this.v2.copy(u.v2),this.v3.copy(u.v3),this}toJSON(){const u=super.toJSON();return u.v0=this.v0.toArray(),u.v1=this.v1.toArray(),u.v2=this.v2.toArray(),u.v3=this.v3.toArray(),u}fromJSON(u){return super.fromJSON(u),this.v0.fromArray(u.v0),this.v1.fromArray(u.v1),this.v2.fromArray(u.v2),this.v3.fromArray(u.v3),this}}class Bt extends Te{constructor(u=new du,e=new du){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=u,this.v2=e}getPoint(u,e=new du){const i=e;return u===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(u).add(this.v1)),i}getPointAt(u,e){return this.getPoint(u,e)}getTangent(u,e){const i=e||new du;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(u){return super.copy(u),this.v1.copy(u.v1),this.v2.copy(u.v2),this}toJSON(){const u=super.toJSON();return u.v1=this.v1.toArray(),u.v2=this.v2.toArray(),u}fromJSON(u){return super.fromJSON(u),this.v1.fromArray(u.v1),this.v2.fromArray(u.v2),this}}class Fd extends Te{constructor(u=new _,e=new _){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=u,this.v2=e}getPoint(u,e=new _){const i=e;return u===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(u).add(this.v1)),i}getPointAt(u,e){return this.getPoint(u,e)}copy(u){return super.copy(u),this.v1.copy(u.v1),this.v2.copy(u.v2),this}toJSON(){const u=super.toJSON();return u.v1=this.v1.toArray(),u.v2=this.v2.toArray(),u}fromJSON(u){return super.fromJSON(u),this.v1.fromArray(u.v1),this.v2.fromArray(u.v2),this}}class U1 extends Te{constructor(u=new du,e=new du,i=new du){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=u,this.v1=e,this.v2=i}getPoint(u,e=new du){const i=e,n=this.v0,r=this.v1,t=this.v2;return i.set(Si(u,n.x,r.x,t.x),Si(u,n.y,r.y,t.y)),i}copy(u){return super.copy(u),this.v0.copy(u.v0),this.v1.copy(u.v1),this.v2.copy(u.v2),this}toJSON(){const u=super.toJSON();return u.v0=this.v0.toArray(),u.v1=this.v1.toArray(),u.v2=this.v2.toArray(),u}fromJSON(u){return super.fromJSON(u),this.v0.fromArray(u.v0),this.v1.fromArray(u.v1),this.v2.fromArray(u.v2),this}}class gd extends Te{constructor(u=new _,e=new _,i=new _){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=u,this.v1=e,this.v2=i}getPoint(u,e=new _){const i=e,n=this.v0,r=this.v1,t=this.v2;return i.set(Si(u,n.x,r.x,t.x),Si(u,n.y,r.y,t.y),Si(u,n.z,r.z,t.z)),i}copy(u){return super.copy(u),this.v0.copy(u.v0),this.v1.copy(u.v1),this.v2.copy(u.v2),this}toJSON(){const u=super.toJSON();return u.v0=this.v0.toArray(),u.v1=this.v1.toArray(),u.v2=this.v2.toArray(),u}fromJSON(u){return super.fromJSON(u),this.v0.fromArray(u.v0),this.v1.fromArray(u.v1),this.v2.fromArray(u.v2),this}}class $1 extends Te{constructor(u=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=u}getPoint(u,e=new du){const i=e,n=this.points,r=(n.length-1)*u,t=Math.floor(r),o=r-t,s=n[t===0?t:t-1],l=n[t],E=n[t>n.length-2?n.length-1:t+1],D=n[t>n.length-3?n.length-1:t+2];return i.set(ts(o,s.x,l.x,E.x,D.x),ts(o,s.y,l.y,E.y,D.y)),i}copy(u){super.copy(u),this.points=[];for(let e=0,i=u.points.length;e<i;e++){const n=u.points[e];this.points.push(n.clone())}return this}toJSON(){const u=super.toJSON();u.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];u.points.push(n.toArray())}return u}fromJSON(u){super.fromJSON(u),this.points=[];for(let e=0,i=u.points.length;e<i;e++){const n=u.points[e];this.points.push(new du().fromArray(n))}return this}}var q1=Object.freeze({__proto__:null,ArcCurve:sd,CatmullRomCurve3:ld,CubicBezierCurve:W1,CubicBezierCurve3:pd,EllipseCurve:bt,LineCurve:Bt,LineCurve3:Fd,QuadraticBezierCurve:U1,QuadraticBezierCurve3:gd,SplineCurve:$1});class kd extends Te{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(u){this.curves.push(u)}closePath(){const u=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);u.equals(e)||this.curves.push(new Bt(e,u))}getPoint(u,e){const i=u*this.getLength(),n=this.getCurveLengths();let r=0;for(;r<n.length;){if(n[r]>=i){const t=n[r]-i,o=this.curves[r],s=o.getLength(),l=s===0?0:1-t/s;return o.getPointAt(l,e)}r++}return null}getLength(){const u=this.getCurveLengths();return u[u.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const u=[];let e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),u.push(e);return this.cacheLengths=u,u}getSpacedPoints(u=40){const e=[];for(let i=0;i<=u;i++)e.push(this.getPoint(i/u));return this.autoClose&&e.push(e[0]),e}getPoints(u=12){const e=[];let i;for(let n=0,r=this.curves;n<r.length;n++){const t=r[n],o=t.isEllipseCurve?u*2:t.isLineCurve||t.isLineCurve3?1:t.isSplineCurve?u*t.points.length:u,s=t.getPoints(o);for(let l=0;l<s.length;l++){const E=s[l];i&&i.equals(E)||(e.push(E),i=E)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(u){super.copy(u),this.curves=[];for(let e=0,i=u.curves.length;e<i;e++){const n=u.curves[e];this.curves.push(n.clone())}return this.autoClose=u.autoClose,this}toJSON(){const u=super.toJSON();u.autoClose=this.autoClose,u.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const n=this.curves[e];u.curves.push(n.toJSON())}return u}fromJSON(u){super.fromJSON(u),this.autoClose=u.autoClose,this.curves=[];for(let e=0,i=u.curves.length;e<i;e++){const n=u.curves[e];this.curves.push(new q1[n.type]().fromJSON(n))}return this}}class Qr extends kd{constructor(u){super(),this.type="Path",this.currentPoint=new du,u&&this.setFromPoints(u)}setFromPoints(u){this.moveTo(u[0].x,u[0].y);for(let e=1,i=u.length;e<i;e++)this.lineTo(u[e].x,u[e].y);return this}moveTo(u,e){return this.currentPoint.set(u,e),this}lineTo(u,e){const i=new Bt(this.currentPoint.clone(),new du(u,e));return this.curves.push(i),this.currentPoint.set(u,e),this}quadraticCurveTo(u,e,i,n){const r=new U1(this.currentPoint.clone(),new du(u,e),new du(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(u,e,i,n,r,t){const o=new W1(this.currentPoint.clone(),new du(u,e),new du(i,n),new du(r,t));return this.curves.push(o),this.currentPoint.set(r,t),this}splineThru(u){const e=[this.currentPoint.clone()].concat(u),i=new $1(e);return this.curves.push(i),this.currentPoint.copy(u[u.length-1]),this}arc(u,e,i,n,r,t){const o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(u+o,e+s,i,n,r,t),this}absarc(u,e,i,n,r,t){return this.absellipse(u,e,i,i,n,r,t),this}ellipse(u,e,i,n,r,t,o,s){const l=this.currentPoint.x,E=this.currentPoint.y;return this.absellipse(u+l,e+E,i,n,r,t,o,s),this}absellipse(u,e,i,n,r,t,o,s){const l=new bt(u,e,i,n,r,t,o,s);if(this.curves.length>0){const D=l.getPoint(0);D.equals(this.currentPoint)||this.lineTo(D.x,D.y)}this.curves.push(l);const E=l.getPoint(1);return this.currentPoint.copy(E),this}copy(u){return super.copy(u),this.currentPoint.copy(u.currentPoint),this}toJSON(){const u=super.toJSON();return u.currentPoint=this.currentPoint.toArray(),u}fromJSON(u){return super.fromJSON(u),this.currentPoint.fromArray(u.currentPoint),this}}class Bn extends Qr{constructor(u){super(u),this.uuid=ri(),this.type="Shape",this.holes=[]}getPointsHoles(u){const e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(u);return e}extractPoints(u){return{shape:this.getPoints(u),holes:this.getPointsHoles(u)}}copy(u){super.copy(u),this.holes=[];for(let e=0,i=u.holes.length;e<i;e++){const n=u.holes[e];this.holes.push(n.clone())}return this}toJSON(){const u=super.toJSON();u.uuid=this.uuid,u.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const n=this.holes[e];u.holes.push(n.toJSON())}return u}fromJSON(u){super.fromJSON(u),this.uuid=u.uuid,this.holes=[];for(let e=0,i=u.holes.length;e<i;e++){const n=u.holes[e];this.holes.push(new Qr().fromJSON(n))}return this}}const Cd={triangulate:function(a,u,e=2){const i=u&&u.length,n=i?u[0]*e:a.length;let r=Z1(a,0,n,e,!0);const t=[];if(!r||r.next===r.prev)return t;let o,s,l,E,D,x,c;if(i&&(r=Bd(a,u,r,e)),a.length>80*e){o=l=a[0],s=E=a[1];for(let p=e;p<n;p+=e)D=a[p],x=a[p+1],D<o&&(o=D),x<s&&(s=x),D>l&&(l=D),x>E&&(E=x);c=Math.max(l-o,E-s),c=c!==0?32767/c:0}return Ki(r,t,e,o,s,c,0),t}};function Z1(a,u,e,i,n){let r,t;if(n===Rd(a,u,e,i)>0)for(r=u;r<e;r+=i)t=os(r,a[r],a[r+1],t);else for(r=e-i;r>=u;r-=i)t=os(r,a[r],a[r+1],t);return t&&In(t,t.next)&&(Hi(t),t=t.next),t}function Ba(a,u){if(!a)return a;u||(u=a);let e=a,i;do if(i=!1,!e.steiner&&(In(e,e.next)||c0(e.prev,e,e.next)===0)){if(Hi(e),e=u=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==u);return u}function Ki(a,u,e,i,n,r,t){if(!a)return;!t&&r&&jd(a,i,n,r);let o=a,s,l;for(;a.prev!==a.next;){if(s=a.prev,l=a.next,r?fd(a,i,n,r):vd(a)){u.push(s.i/e|0),u.push(a.i/e|0),u.push(l.i/e|0),Hi(a),a=l.next,o=l.next;continue}if(a=l,a===o){t?t===1?(a=bd(Ba(a),u,e),Ki(a,u,e,i,n,r,2)):t===2&&Ad(a,u,e,i,n,r):Ki(Ba(a),u,e,i,n,r,1);break}}}function vd(a){const u=a.prev,e=a,i=a.next;if(c0(u,e,i)>=0)return!1;const n=u.x,r=e.x,t=i.x,o=u.y,s=e.y,l=i.y,E=n<r?n<t?n:t:r<t?r:t,D=o<s?o<l?o:l:s<l?s:l,x=n>r?n>t?n:t:r>t?r:t,c=o>s?o>l?o:l:s>l?s:l;let p=i.next;for(;p!==u;){if(p.x>=E&&p.x<=x&&p.y>=D&&p.y<=c&&$a(n,o,r,s,t,l,p.x,p.y)&&c0(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function fd(a,u,e,i){const n=a.prev,r=a,t=a.next;if(c0(n,r,t)>=0)return!1;const o=n.x,s=r.x,l=t.x,E=n.y,D=r.y,x=t.y,c=o<s?o<l?o:l:s<l?s:l,p=E<D?E<x?E:x:D<x?D:x,d=o>s?o>l?o:l:s>l?s:l,m=E>D?E>x?E:x:D>x?D:x,h=Xr(c,p,u,e,i),F=Xr(d,m,u,e,i);let g=a.prevZ,C=a.nextZ;for(;g&&g.z>=h&&C&&C.z<=F;){if(g.x>=c&&g.x<=d&&g.y>=p&&g.y<=m&&g!==n&&g!==t&&$a(o,E,s,D,l,x,g.x,g.y)&&c0(g.prev,g,g.next)>=0||(g=g.prevZ,C.x>=c&&C.x<=d&&C.y>=p&&C.y<=m&&C!==n&&C!==t&&$a(o,E,s,D,l,x,C.x,C.y)&&c0(C.prev,C,C.next)>=0))return!1;C=C.nextZ}for(;g&&g.z>=h;){if(g.x>=c&&g.x<=d&&g.y>=p&&g.y<=m&&g!==n&&g!==t&&$a(o,E,s,D,l,x,g.x,g.y)&&c0(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;C&&C.z<=F;){if(C.x>=c&&C.x<=d&&C.y>=p&&C.y<=m&&C!==n&&C!==t&&$a(o,E,s,D,l,x,C.x,C.y)&&c0(C.prev,C,C.next)>=0)return!1;C=C.nextZ}return!0}function bd(a,u,e){let i=a;do{const n=i.prev,r=i.next.next;!In(n,r)&&Y1(n,i,i.next,r)&&Ni(n,r)&&Ni(r,n)&&(u.push(n.i/e|0),u.push(i.i/e|0),u.push(r.i/e|0),Hi(i),Hi(i.next),i=a=r),i=i.next}while(i!==a);return Ba(i)}function Ad(a,u,e,i,n,r){let t=a;do{let o=t.next.next;for(;o!==t.prev;){if(t.i!==o.i&&wd(t,o)){let s=Q1(t,o);t=Ba(t,t.next),s=Ba(s,s.next),Ki(t,u,e,i,n,r,0),Ki(s,u,e,i,n,r,0);return}o=o.next}t=t.next}while(t!==a)}function Bd(a,u,e,i){const n=[];let r,t,o,s,l;for(r=0,t=u.length;r<t;r++)o=u[r]*i,s=r<t-1?u[r+1]*i:a.length,l=Z1(a,o,s,i,!1),l===l.next&&(l.steiner=!0),n.push(Td(l));for(n.sort(yd),r=0;r<n.length;r++)e=zd(n[r],e);return e}function yd(a,u){return a.x-u.x}function zd(a,u){const e=Sd(a,u);if(!e)return u;const i=Q1(e,a);return Ba(i,i.next),Ba(e,e.next)}function Sd(a,u){let e=u,i=-1/0,n;const r=a.x,t=a.y;do{if(t<=e.y&&t>=e.next.y&&e.next.y!==e.y){const x=e.x+(t-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(x<=r&&x>i&&(i=x,n=e.x<e.next.x?e:e.next,x===r))return n}e=e.next}while(e!==u);if(!n)return null;const o=n,s=n.x,l=n.y;let E=1/0,D;e=n;do r>=e.x&&e.x>=s&&r!==e.x&&$a(t<l?r:i,t,s,l,t<l?i:r,t,e.x,e.y)&&(D=Math.abs(t-e.y)/(r-e.x),Ni(e,a)&&(D<E||D===E&&(e.x>n.x||e.x===n.x&&Md(n,e)))&&(n=e,E=D)),e=e.next;while(e!==o);return n}function Md(a,u){return c0(a.prev,a,u.prev)<0&&c0(u.next,a,a.next)<0}function jd(a,u,e,i){let n=a;do n.z===0&&(n.z=Xr(n.x,n.y,u,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==a);n.prevZ.nextZ=null,n.prevZ=null,Pd(n)}function Pd(a){let u,e,i,n,r,t,o,s,l=1;do{for(e=a,a=null,r=null,t=0;e;){for(t++,i=e,o=0,u=0;u<l&&(o++,i=i.nextZ,!!i);u++);for(s=l;o>0||s>0&&i;)o!==0&&(s===0||!i||e.z<=i.z)?(n=e,e=e.nextZ,o--):(n=i,i=i.nextZ,s--),r?r.nextZ=n:a=n,n.prevZ=r,r=n;e=i}r.nextZ=null,l*=2}while(t>1);return a}function Xr(a,u,e,i,n){return a=(a-e)*n|0,u=(u-i)*n|0,a=(a|a<<8)&16711935,a=(a|a<<4)&252645135,a=(a|a<<2)&858993459,a=(a|a<<1)&1431655765,u=(u|u<<8)&16711935,u=(u|u<<4)&252645135,u=(u|u<<2)&858993459,u=(u|u<<1)&1431655765,a|u<<1}function Td(a){let u=a,e=a;do(u.x<e.x||u.x===e.x&&u.y<e.y)&&(e=u),u=u.next;while(u!==a);return e}function $a(a,u,e,i,n,r,t,o){return(n-t)*(u-o)>=(a-t)*(r-o)&&(a-t)*(i-o)>=(e-t)*(u-o)&&(e-t)*(r-o)>=(n-t)*(i-o)}function wd(a,u){return a.next.i!==u.i&&a.prev.i!==u.i&&!_d(a,u)&&(Ni(a,u)&&Ni(u,a)&&Ld(a,u)&&(c0(a.prev,a,u.prev)||c0(a,u.prev,u))||In(a,u)&&c0(a.prev,a,a.next)>0&&c0(u.prev,u,u.next)>0)}function c0(a,u,e){return(u.y-a.y)*(e.x-u.x)-(u.x-a.x)*(e.y-u.y)}function In(a,u){return a.x===u.x&&a.y===u.y}function Y1(a,u,e,i){const n=mn(c0(a,u,e)),r=mn(c0(a,u,i)),t=mn(c0(e,i,a)),o=mn(c0(e,i,u));return!!(n!==r&&t!==o||n===0&&dn(a,e,u)||r===0&&dn(a,i,u)||t===0&&dn(e,a,i)||o===0&&dn(e,u,i))}function dn(a,u,e){return u.x<=Math.max(a.x,e.x)&&u.x>=Math.min(a.x,e.x)&&u.y<=Math.max(a.y,e.y)&&u.y>=Math.min(a.y,e.y)}function mn(a){return a>0?1:a<0?-1:0}function _d(a,u){let e=a;do{if(e.i!==a.i&&e.next.i!==a.i&&e.i!==u.i&&e.next.i!==u.i&&Y1(e,e.next,a,u))return!0;e=e.next}while(e!==a);return!1}function Ni(a,u){return c0(a.prev,a,a.next)<0?c0(a,u,a.next)>=0&&c0(a,a.prev,u)>=0:c0(a,u,a.prev)<0||c0(a,a.next,u)<0}function Ld(a,u){let e=a,i=!1;const n=(a.x+u.x)/2,r=(a.y+u.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&n<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==a);return i}function Q1(a,u){const e=new ut(a.i,a.x,a.y),i=new ut(u.i,u.x,u.y),n=a.next,r=u.prev;return a.next=u,u.prev=a,e.next=n,n.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function os(a,u,e,i){const n=new ut(a,u,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Hi(a){a.next.prev=a.prev,a.prev.next=a.next,a.prevZ&&(a.prevZ.nextZ=a.nextZ),a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function ut(a,u,e){this.i=a,this.x=u,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Rd(a,u,e,i){let n=0;for(let r=u,t=e-i;r<e;r+=i)n+=(a[t]-a[r])*(a[r+1]+a[t+1]),t=r;return n}class Ya{static area(u){const e=u.length;let i=0;for(let n=e-1,r=0;r<e;n=r++)i+=u[n].x*u[r].y-u[r].x*u[n].y;return i*.5}static isClockWise(u){return Ya.area(u)<0}static triangulateShape(u,e){const i=[],n=[],r=[];ss(u),ls(i,u);let t=u.length;e.forEach(ss);for(let s=0;s<e.length;s++)n.push(t),t+=e[s].length,ls(i,e[s]);const o=Cd.triangulate(i,n);for(let s=0;s<o.length;s+=3)r.push(o.slice(s,s+3));return r}}function ss(a){const u=a.length;u>2&&a[u-1].equals(a[0])&&a.pop()}function ls(a,u){for(let e=0;e<u.length;e++)a.push(u[e].x),a.push(u[e].y)}class yt extends Pe{constructor(u=new Bn([new du(.5,.5),new du(-.5,.5),new du(-.5,-.5),new du(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:u,options:e},u=Array.isArray(u)?u:[u];const i=this,n=[],r=[];for(let o=0,s=u.length;o<s;o++){const l=u[o];t(l)}this.setAttribute("position",new U0(n,3)),this.setAttribute("uv",new U0(r,2)),this.computeVertexNormals();function t(o){const s=[],l=e.curveSegments!==void 0?e.curveSegments:12,E=e.steps!==void 0?e.steps:1,D=e.depth!==void 0?e.depth:1;let x=e.bevelEnabled!==void 0?e.bevelEnabled:!0,c=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:c-.1,d=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const h=e.extrudePath,F=e.UVGenerator!==void 0?e.UVGenerator:Kd;let g,C=!1,v,A,M,k;h&&(g=h.getSpacedPoints(E),C=!0,x=!1,v=h.computeFrenetFrames(E,!1),A=new _,M=new _,k=new _),x||(m=0,c=0,p=0,d=0);const B=o.extractPoints(l);let y=B.shape;const L=B.holes;if(!Ya.isClockWise(y)){y=y.reverse();for(let P=0,I=L.length;P<I;P++){const tu=L[P];Ya.isClockWise(tu)&&(L[P]=tu.reverse())}}const j=Ya.triangulateShape(y,L),T=y;for(let P=0,I=L.length;P<I;P++){const tu=L[P];y=y.concat(tu)}function S(P,I,tu){return I||console.error("THREE.ExtrudeGeometry: vec does not exist"),I.clone().multiplyScalar(tu).add(P)}const J=y.length,O=j.length;function K(P,I,tu){let bu,hu,Gu;const Lu=P.x-I.x,Pu=P.y-I.y,o0=tu.x-P.x,r0=tu.y-P.y,z=Lu*Lu+Pu*Pu,f=Lu*r0-Pu*o0;if(Math.abs(f)>Number.EPSILON){const W=Math.sqrt(z),nu=Math.sqrt(o0*o0+r0*r0),Eu=I.x-Pu/W,Fu=I.y+Lu/W,Hu=tu.x-r0/nu,gu=tu.y+o0/nu,Y=((Hu-Eu)*r0-(gu-Fu)*o0)/(Lu*r0-Pu*o0);bu=Eu+Lu*Y-P.x,hu=Fu+Pu*Y-P.y;const Tu=bu*bu+hu*hu;if(Tu<=2)return new du(bu,hu);Gu=Math.sqrt(Tu/2)}else{let W=!1;Lu>Number.EPSILON?o0>Number.EPSILON&&(W=!0):Lu<-Number.EPSILON?o0<-Number.EPSILON&&(W=!0):Math.sign(Pu)===Math.sign(r0)&&(W=!0),W?(bu=-Pu,hu=Lu,Gu=Math.sqrt(z)):(bu=Lu,hu=Pu,Gu=Math.sqrt(z/2))}return new du(bu/Gu,hu/Gu)}const Q=[];for(let P=0,I=T.length,tu=I-1,bu=P+1;P<I;P++,tu++,bu++)tu===I&&(tu=0),bu===I&&(bu=0),Q[P]=K(T[P],T[tu],T[bu]);const uu=[];let mu,V=Q.concat();for(let P=0,I=L.length;P<I;P++){const tu=L[P];mu=[];for(let bu=0,hu=tu.length,Gu=hu-1,Lu=bu+1;bu<hu;bu++,Gu++,Lu++)Gu===hu&&(Gu=0),Lu===hu&&(Lu=0),mu[bu]=K(tu[bu],tu[Gu],tu[Lu]);uu.push(mu),V=V.concat(mu)}for(let P=0;P<m;P++){const I=P/m,tu=c*Math.cos(I*Math.PI/2),bu=p*Math.sin(I*Math.PI/2)+d;for(let hu=0,Gu=T.length;hu<Gu;hu++){const Lu=S(T[hu],Q[hu],bu);ru(Lu.x,Lu.y,-tu)}for(let hu=0,Gu=L.length;hu<Gu;hu++){const Lu=L[hu];mu=uu[hu];for(let Pu=0,o0=Lu.length;Pu<o0;Pu++){const r0=S(Lu[Pu],mu[Pu],bu);ru(r0.x,r0.y,-tu)}}}const Z=p+d;for(let P=0;P<J;P++){const I=x?S(y[P],V[P],Z):y[P];C?(M.copy(v.normals[0]).multiplyScalar(I.x),A.copy(v.binormals[0]).multiplyScalar(I.y),k.copy(g[0]).add(M).add(A),ru(k.x,k.y,k.z)):ru(I.x,I.y,0)}for(let P=1;P<=E;P++)for(let I=0;I<J;I++){const tu=x?S(y[I],V[I],Z):y[I];C?(M.copy(v.normals[P]).multiplyScalar(tu.x),A.copy(v.binormals[P]).multiplyScalar(tu.y),k.copy(g[P]).add(M).add(A),ru(k.x,k.y,k.z)):ru(tu.x,tu.y,D/E*P)}for(let P=m-1;P>=0;P--){const I=P/m,tu=c*Math.cos(I*Math.PI/2),bu=p*Math.sin(I*Math.PI/2)+d;for(let hu=0,Gu=T.length;hu<Gu;hu++){const Lu=S(T[hu],Q[hu],bu);ru(Lu.x,Lu.y,D+tu)}for(let hu=0,Gu=L.length;hu<Gu;hu++){const Lu=L[hu];mu=uu[hu];for(let Pu=0,o0=Lu.length;Pu<o0;Pu++){const r0=S(Lu[Pu],mu[Pu],bu);C?ru(r0.x,r0.y+g[E-1].y,g[E-1].x+tu):ru(r0.x,r0.y,D+tu)}}}ou(),lu();function ou(){const P=n.length/3;if(x){let I=0,tu=J*I;for(let bu=0;bu<O;bu++){const hu=j[bu];vu(hu[2]+tu,hu[1]+tu,hu[0]+tu)}I=E+m*2,tu=J*I;for(let bu=0;bu<O;bu++){const hu=j[bu];vu(hu[0]+tu,hu[1]+tu,hu[2]+tu)}}else{for(let I=0;I<O;I++){const tu=j[I];vu(tu[2],tu[1],tu[0])}for(let I=0;I<O;I++){const tu=j[I];vu(tu[0]+J*E,tu[1]+J*E,tu[2]+J*E)}}i.addGroup(P,n.length/3-P,0)}function lu(){const P=n.length/3;let I=0;G(T,I),I+=T.length;for(let tu=0,bu=L.length;tu<bu;tu++){const hu=L[tu];G(hu,I),I+=hu.length}i.addGroup(P,n.length/3-P,1)}function G(P,I){let tu=P.length;for(;--tu>=0;){const bu=tu;let hu=tu-1;hu<0&&(hu=P.length-1);for(let Gu=0,Lu=E+m*2;Gu<Lu;Gu++){const Pu=J*Gu,o0=J*(Gu+1),r0=I+bu+Pu,z=I+hu+Pu,f=I+hu+o0,W=I+bu+o0;pu(r0,z,f,W)}}}function ru(P,I,tu){s.push(P),s.push(I),s.push(tu)}function vu(P,I,tu){xu(P),xu(I),xu(tu);const bu=n.length/3,hu=F.generateTopUV(i,n,bu-3,bu-2,bu-1);Ju(hu[0]),Ju(hu[1]),Ju(hu[2])}function pu(P,I,tu,bu){xu(P),xu(I),xu(bu),xu(I),xu(tu),xu(bu);const hu=n.length/3,Gu=F.generateSideWallUV(i,n,hu-6,hu-3,hu-2,hu-1);Ju(Gu[0]),Ju(Gu[1]),Ju(Gu[3]),Ju(Gu[1]),Ju(Gu[2]),Ju(Gu[3])}function xu(P){n.push(s[P*3+0]),n.push(s[P*3+1]),n.push(s[P*3+2])}function Ju(P){r.push(P.x),r.push(P.y)}}}toJSON(){const u=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Nd(e,i,u)}static fromJSON(u,e){const i=[];for(let r=0,t=u.shapes.length;r<t;r++){const o=e[u.shapes[r]];i.push(o)}const n=u.options.extrudePath;return n!==void 0&&(u.options.extrudePath=new q1[n.type]().fromJSON(n)),new yt(i,u.options)}}const Kd={generateTopUV:function(a,u,e,i,n){const r=u[e*3],t=u[e*3+1],o=u[i*3],s=u[i*3+1],l=u[n*3],E=u[n*3+1];return[new du(r,t),new du(o,s),new du(l,E)]},generateSideWallUV:function(a,u,e,i,n,r){const t=u[e*3],o=u[e*3+1],s=u[e*3+2],l=u[i*3],E=u[i*3+1],D=u[i*3+2],x=u[n*3],c=u[n*3+1],p=u[n*3+2],d=u[r*3],m=u[r*3+1],h=u[r*3+2];return Math.abs(o-E)<Math.abs(t-l)?[new du(t,1-s),new du(l,1-D),new du(x,1-p),new du(d,1-h)]:[new du(o,1-s),new du(E,1-D),new du(c,1-p),new du(m,1-h)]}};function Nd(a,u,e){if(e.shapes=[],Array.isArray(a))for(let i=0,n=a.length;i<n;i++){const r=a[i];e.shapes.push(r.uuid)}else e.shapes.push(a.uuid);return e.options=Object.assign({},u),u.extrudePath!==void 0&&(e.options.extrudePath=u.extrudePath.toJSON()),e}class zt extends Pe{constructor(u=1,e=32,i=16,n=0,r=Math.PI*2,t=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:u,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:t,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const s=Math.min(t+o,Math.PI);let l=0;const E=[],D=new _,x=new _,c=[],p=[],d=[],m=[];for(let h=0;h<=i;h++){const F=[],g=h/i;let C=0;h==0&&t==0?C=.5/e:h==i&&s==Math.PI&&(C=-.5/e);for(let v=0;v<=e;v++){const A=v/e;D.x=-u*Math.cos(n+A*r)*Math.sin(t+g*o),D.y=u*Math.cos(t+g*o),D.z=u*Math.sin(n+A*r)*Math.sin(t+g*o),p.push(D.x,D.y,D.z),x.copy(D).normalize(),d.push(x.x,x.y,x.z),m.push(A+C,1-g),F.push(l++)}E.push(F)}for(let h=0;h<i;h++)for(let F=0;F<e;F++){const g=E[h][F+1],C=E[h][F],v=E[h+1][F],A=E[h+1][F+1];(h!==0||t>0)&&c.push(g,C,A),(h!==i-1||s<Math.PI)&&c.push(C,v,A)}this.setIndex(c),this.setAttribute("position",new U0(p,3)),this.setAttribute("normal",new U0(d,3)),this.setAttribute("uv",new U0(m,2))}static fromJSON(u){return new zt(u.radius,u.widthSegments,u.heightSegments,u.phiStart,u.phiLength,u.thetaStart,u.thetaLength)}}class Es extends oi{constructor(u){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new a0(16777215),this.specular=new a0(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new a0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pt,this.normalScale=new du(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ht,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(u)}copy(u){return super.copy(u),this.color.copy(u.color),this.specular.copy(u.specular),this.shininess=u.shininess,this.map=u.map,this.lightMap=u.lightMap,this.lightMapIntensity=u.lightMapIntensity,this.aoMap=u.aoMap,this.aoMapIntensity=u.aoMapIntensity,this.emissive.copy(u.emissive),this.emissiveMap=u.emissiveMap,this.emissiveIntensity=u.emissiveIntensity,this.bumpMap=u.bumpMap,this.bumpScale=u.bumpScale,this.normalMap=u.normalMap,this.normalMapType=u.normalMapType,this.normalScale.copy(u.normalScale),this.displacementMap=u.displacementMap,this.displacementScale=u.displacementScale,this.displacementBias=u.displacementBias,this.specularMap=u.specularMap,this.alphaMap=u.alphaMap,this.envMap=u.envMap,this.combine=u.combine,this.reflectivity=u.reflectivity,this.refractionRatio=u.refractionRatio,this.wireframe=u.wireframe,this.wireframeLinewidth=u.wireframeLinewidth,this.wireframeLinecap=u.wireframeLinecap,this.wireframeLinejoin=u.wireframeLinejoin,this.flatShading=u.flatShading,this.fog=u.fog,this}}class Hd extends oi{constructor(u){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pt,this.normalScale=new du(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(u)}copy(u){return super.copy(u),this.bumpMap=u.bumpMap,this.bumpScale=u.bumpScale,this.normalMap=u.normalMap,this.normalMapType=u.normalMapType,this.normalScale.copy(u.normalScale),this.displacementMap=u.displacementMap,this.displacementScale=u.displacementScale,this.displacementBias=u.displacementBias,this.wireframe=u.wireframe,this.wireframeLinewidth=u.wireframeLinewidth,this.flatShading=u.flatShading,this}}const Pn={enabled:!1,files:{},add:function(a,u){this.enabled!==!1&&(this.files[a]=u)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class Gd{constructor(u,e,i){const n=this;let r=!1,t=0,o=0,s;const l=[];this.onStart=void 0,this.onLoad=u,this.onProgress=e,this.onError=i,this.itemStart=function(E){o++,r===!1&&n.onStart!==void 0&&n.onStart(E,t,o),r=!0},this.itemEnd=function(E){t++,n.onProgress!==void 0&&n.onProgress(E,t,o),t===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(E){n.onError!==void 0&&n.onError(E)},this.resolveURL=function(E){return s?s(E):E},this.setURLModifier=function(E){return s=E,this},this.addHandler=function(E,D){return l.push(E,D),this},this.removeHandler=function(E){const D=l.indexOf(E);return D!==-1&&l.splice(D,2),this},this.getHandler=function(E){for(let D=0,x=l.length;D<x;D+=2){const c=l[D],p=l[D+1];if(c.global&&(c.lastIndex=0),c.test(E))return p}return null}}}const X1=new Gd;class Jn{constructor(u){this.manager=u!==void 0?u:X1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(u,e){const i=this;return new Promise(function(n,r){i.load(u,n,e,r)})}parse(){}setCrossOrigin(u){return this.crossOrigin=u,this}setWithCredentials(u){return this.withCredentials=u,this}setPath(u){return this.path=u,this}setResourcePath(u){return this.resourcePath=u,this}setRequestHeader(u){return this.requestHeader=u,this}}const Ve={};class Vd extends Error{constructor(u,e){super(u),this.response=e}}class Id extends Jn{constructor(u){super(u)}load(u,e,i,n){u===void 0&&(u=""),this.path!==void 0&&(u=this.path+u),u=this.manager.resolveURL(u);const r=Pn.get(u);if(r!==void 0)return this.manager.itemStart(u),setTimeout(()=>{e&&e(r),this.manager.itemEnd(u)},0),r;if(Ve[u]!==void 0){Ve[u].push({onLoad:e,onProgress:i,onError:n});return}Ve[u]=[],Ve[u].push({onLoad:e,onProgress:i,onError:n});const t=new Request(u,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,s=this.responseType;fetch(t).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const E=Ve[u],D=l.body.getReader(),x=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),c=x?parseInt(x):0,p=c!==0;let d=0;const m=new ReadableStream({start(h){F();function F(){D.read().then(({done:g,value:C})=>{if(g)h.close();else{d+=C.byteLength;const v=new ProgressEvent("progress",{lengthComputable:p,loaded:d,total:c});for(let A=0,M=E.length;A<M;A++){const k=E[A];k.onProgress&&k.onProgress(v)}h.enqueue(C),F()}})}}});return new Response(m)}else throw new Vd(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(s){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(E=>new DOMParser().parseFromString(E,o));case"json":return l.json();default:if(o===void 0)return l.text();{const D=/charset="?([^;"\s]*)"?/i.exec(o),x=D&&D[1]?D[1].toLowerCase():void 0,c=new TextDecoder(x);return l.arrayBuffer().then(p=>c.decode(p))}}}).then(l=>{Pn.add(u,l);const E=Ve[u];delete Ve[u];for(let D=0,x=E.length;D<x;D++){const c=E[D];c.onLoad&&c.onLoad(l)}}).catch(l=>{const E=Ve[u];if(E===void 0)throw this.manager.itemError(u),l;delete Ve[u];for(let D=0,x=E.length;D<x;D++){const c=E[D];c.onError&&c.onError(l)}this.manager.itemError(u)}).finally(()=>{this.manager.itemEnd(u)}),this.manager.itemStart(u)}setResponseType(u){return this.responseType=u,this}setMimeType(u){return this.mimeType=u,this}}class Jd extends Jn{constructor(u){super(u)}load(u,e,i,n){this.path!==void 0&&(u=this.path+u),u=this.manager.resolveURL(u);const r=this,t=Pn.get(u);if(t!==void 0)return r.manager.itemStart(u),setTimeout(function(){e&&e(t),r.manager.itemEnd(u)},0),t;const o=Ri("img");function s(){E(),Pn.add(u,this),e&&e(this),r.manager.itemEnd(u)}function l(D){E(),n&&n(D),r.manager.itemError(u),r.manager.itemEnd(u)}function E(){o.removeEventListener("load",s,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",s,!1),o.addEventListener("error",l,!1),u.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(u),o.src=u,o}}class Ds extends Jn{constructor(u){super(u)}load(u,e,i,n){const r=new W0,t=new Jd(this.manager);return t.setCrossOrigin(this.crossOrigin),t.setPath(this.path),t.load(u,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},i,n),r}}class Od extends v0{constructor(u,e=1){super(),this.isLight=!0,this.type="Light",this.color=new a0(u),this.intensity=e}dispose(){}copy(u,e){return super.copy(u,e),this.color.copy(u.color),this.intensity=u.intensity,this}toJSON(u){const e=super.toJSON(u);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Wd extends Od{constructor(u,e){super(u,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class u4{constructor(u=!0){this.autoStart=u,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xs(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let u=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=xs();u=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=u}return u}}function xs(){return(typeof performance>"u"?Date:performance).now()}class Ud{constructor(u,e,i=0,n=1/0){this.ray=new j1(u,e),this.near=i,this.far=n,this.camera=null,this.layers=new gt,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(u,e){this.ray.set(u,e)}setFromCamera(u,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(u.x,u.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(u.x,u.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(u,e=!0,i=[]){return et(u,this,i,e),i.sort(cs),i}intersectObjects(u,e=!0,i=[]){for(let n=0,r=u.length;n<r;n++)et(u[n],this,i,e);return i.sort(cs),i}}function cs(a,u){return a.distance-u.distance}function et(a,u,e,i){if(a.layers.test(u.layers)&&a.raycast(u,e),i===!0){const n=a.children;for(let r=0,t=n.length;r<t;r++)et(n[r],u,e,!0)}}class $d{constructor(){this.type="ShapePath",this.color=new a0,this.subPaths=[],this.currentPath=null}moveTo(u,e){return this.currentPath=new Qr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(u,e),this}lineTo(u,e){return this.currentPath.lineTo(u,e),this}quadraticCurveTo(u,e,i,n){return this.currentPath.quadraticCurveTo(u,e,i,n),this}bezierCurveTo(u,e,i,n,r,t){return this.currentPath.bezierCurveTo(u,e,i,n,r,t),this}splineThru(u){return this.currentPath.splineThru(u),this}toShapes(u){function e(h){const F=[];for(let g=0,C=h.length;g<C;g++){const v=h[g],A=new Bn;A.curves=v.curves,F.push(A)}return F}function i(h,F){const g=F.length;let C=!1;for(let v=g-1,A=0;A<g;v=A++){let M=F[v],k=F[A],B=k.x-M.x,y=k.y-M.y;if(Math.abs(y)>Number.EPSILON){if(y<0&&(M=F[A],B=-B,k=F[v],y=-y),h.y<M.y||h.y>k.y)continue;if(h.y===M.y){if(h.x===M.x)return!0}else{const L=y*(h.x-M.x)-B*(h.y-M.y);if(L===0)return!0;if(L<0)continue;C=!C}}else{if(h.y!==M.y)continue;if(k.x<=h.x&&h.x<=M.x||M.x<=h.x&&h.x<=k.x)return!0}}return C}const n=Ya.isClockWise,r=this.subPaths;if(r.length===0)return[];let t,o,s;const l=[];if(r.length===1)return o=r[0],s=new Bn,s.curves=o.curves,l.push(s),l;let E=!n(r[0].getPoints());E=u?!E:E;const D=[],x=[];let c=[],p=0,d;x[p]=void 0,c[p]=[];for(let h=0,F=r.length;h<F;h++)o=r[h],d=o.getPoints(),t=n(d),t=u?!t:t,t?(!E&&x[p]&&p++,x[p]={s:new Bn,p:d},x[p].s.curves=o.curves,E&&p++,c[p]=[]):c[p].push({h:o,p:d[0]});if(!x[0])return e(r);if(x.length>1){let h=!1,F=0;for(let g=0,C=x.length;g<C;g++)D[g]=[];for(let g=0,C=x.length;g<C;g++){const v=c[g];for(let A=0;A<v.length;A++){const M=v[A];let k=!0;for(let B=0;B<x.length;B++)i(M.p,x[B].p)&&(g!==B&&F++,k?(k=!1,D[B].push(M)):h=!0);k&&D[g].push(M)}}F>0&&h===!1&&(c=D)}let m;for(let h=0,F=x.length;h<F;h++){s=x[h].s,l.push(s),m=c[h];for(let g=0,C=m.length;g<C;g++)s.holes.push(m[g].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mt}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mt);const Ja=[];function e4(a,u){return{subscribe:C0(a,u).subscribe}}function C0(a,u=Iu){let e;const i=new Set;function n(o){if($u(a,o)&&(a=o,e)){const s=!Ja.length;for(const l of i)l[1](),Ja.push(l,a);if(s){for(let l=0;l<Ja.length;l+=2)Ja[l][0](Ja[l+1]);Ja.length=0}}}function r(o){n(o(a))}function t(o,s=Iu){const l=[o,s];return i.add(l),i.size===1&&(e=u(n)||Iu),o(a),()=>{i.delete(l),i.size===0&&(e(),e=null)}}return{set:n,update:r,subscribe:t}}function qd(a,u,e){const i=!Array.isArray(a),n=i?[a]:a,r=u.length<2;return e4(e,t=>{let o=!1;const s=[];let l=0,E=Iu;const D=()=>{if(l)return;E();const c=u(i?s[0]:s,t);r?t(c):E=ai(c)?c:Iu},x=n.map((c,p)=>Nn(c,d=>{s[p]=d,l&=~(1<<p),o&&D()},()=>{l|=1<<p}));return o=!0,D(),function(){fe(x),E()}})}const Zd={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};let Ei=class{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}};const Yd=new K1(-1,1,1,-1,0,1),St=new Pe;St.setAttribute("position",new U0([-1,3,0,-1,-1,0,3,-1,0],3));St.setAttribute("uv",new U0([0,2,0,0,2,0],2));class Tn{constructor(u){this._mesh=new I0(St,u)}dispose(){this._mesh.geometry.dispose()}render(u){u.render(this._mesh,Yd)}get material(){return this._mesh.material}set material(u){this._mesh.material=u}}class Qd extends Ei{constructor(u,e){super(),this.textureID=e!==void 0?e:"tDiffuse",u instanceof ve?(this.uniforms=u.uniforms,this.material=u):u&&(this.uniforms=kt.clone(u.uniforms),this.material=new ve({defines:Object.assign({},u.defines),uniforms:this.uniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader})),this.fsQuad=new Tn(this.material)}render(u,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(u.setRenderTarget(null),this.fsQuad.render(u)):(u.setRenderTarget(e),this.clear&&u.clear(u.autoClearColor,u.autoClearDepth,u.autoClearStencil),this.fsQuad.render(u))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class ds extends Ei{constructor(u,e){super(),this.scene=u,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(u,e,i){const n=u.getContext(),r=u.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let t,o;this.inverse?(t=0,o=1):(t=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,t,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),u.setRenderTarget(i),this.clear&&u.clear(),u.render(this.scene,this.camera),u.setRenderTarget(e),this.clear&&u.clear(),u.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}}class Xd extends Ei{constructor(){super(),this.needsSwap=!1}render(u){u.state.buffers.stencil.setLocked(!1),u.state.buffers.stencil.setTest(!1)}}class um{constructor(u,e){if(this.renderer=u,e===void 0){const i=u.getSize(new du);this._pixelRatio=u.getPixelRatio(),this._width=i.width,this._height=i.height,e=new se(this._width*this._pixelRatio,this._height*this._pixelRatio),e.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Qd(Zd),this.clock=new u4}swapBuffers(){const u=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=u}addPass(u){this.passes.push(u),u.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(u,e){this.passes.splice(e,0,u),u.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(u){const e=this.passes.indexOf(u);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(u){for(let e=u+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(u){u===void 0&&(u=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let n=0,r=this.passes.length;n<r;n++){const t=this.passes[n];if(t.enabled!==!1){if(t.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),t.render(this.renderer,this.writeBuffer,this.readBuffer,u,i),t.needsSwap){if(i){const o=this.renderer.getContext(),s=this.renderer.state.buffers.stencil;s.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,u),s.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ds!==void 0&&(t instanceof ds?i=!0:t instanceof Xd&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(u){if(u===void 0){const e=this.renderer.getSize(new du);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,u=this.renderTarget1.clone(),u.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=u,this.renderTarget2=u.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(u,e){this._width=u,this._height=e;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(u){this._pixelRatio=u,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class a4 extends Ei{constructor(u,e,i,n,r){super(),this.scene=u,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new a0}render(u,e,i){const n=u.autoClear;u.autoClear=!1;let r,t;this.overrideMaterial!==void 0&&(t=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(u.getClearColor(this._oldClearColor),r=u.getClearAlpha(),u.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&u.clearDepth(),u.setRenderTarget(this.renderToScreen?null:i),this.clear&&u.clear(u.autoClearColor,u.autoClearDepth,u.autoClearStencil),u.render(this.scene,this.camera),this.clearColor&&u.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=t),u.autoClear=n}}const em=(a,u,e)=>{a.renderer=new J1({powerPreference:"high-performance",canvas:u,antialias:!0,alpha:!0,...e}),a.composer=new um(a.renderer),a.composer.addPass(new a4(a.scene,ua(a.camera)))},ms=(a,u,e)=>{a.renderer&&(u?a.renderer.outputEncoding=ia:a.renderer.outputEncoding=t0,e?a.renderer.toneMapping=je:a.renderer.toneMapping=f1)},hs=(a,u,e)=>{var i,n,r,t,o,s,l,E;!a.renderer||!a.composer||((n=(i=a.renderer).setSize)==null||n.call(i,u.width,u.height),(t=(r=a.renderer).setPixelRatio)==null||t.call(r,e),(s=(o=a.composer).setSize)==null||s.call(o,u.width,u.height),(E=(l=a.composer).setPixelRatio)==null||E.call(l,e))},ps=(a,u,e)=>{a.renderer&&(a.renderer.shadowMap.enabled=u,a.renderer.shadowMap.type=e)},Me=a=>a.userData,am=(a,u)=>{a.pointer.update(e=>a.renderer?e.set(u.offsetX/a.renderer.domElement.clientWidth*2-1,-(u.offsetY/a.renderer.domElement.clientHeight)*2+1):e)},i4=(a,u,e,i)=>(a.raycaster.setFromCamera(u,e),a.raycaster.intersectObjects(i,!1)),im=(a,u)=>a.object.uuid!==u.object.uuid||a.instanceId!==u.instanceId,nm=(a,u,e)=>{let i=ua(a.camera);const n=a.camera.subscribe(l=>i=l);D0(n);let r=ua(a.pointer);const t=a.pointer.subscribe(l=>r=l);D0(t);let o;const s=l=>{var x,c;l.preventDefault();const E=l.type;a.pointerOverCanvas.set(!0),e.pointerInvalidated=!0,am(a,l);const D=rm(u,r,i);if(E==="pointerdown"&&(o=D?{object:D.object,instanceId:D.instanceId}:null),E==="click"){if(!tm(D,o)){o=null;return}o=null}D&&((c=(x=Me(D.object)).eventDispatcher)==null||c.call(x,E,{...D,event:l}))};return{onClick:s,onContextMenu:s,onPointerUp:s,onPointerDown:s,onPointerMove:s}};function rm(a,u,e){if(a.interactiveObjects.size===0||a.raycastableObjects.size===0)return null;const i=i4(a,u,e,Array.from(a.raycastableObjects));return i.length===0||!a.interactiveObjects.has(i[0].object)?null:i[0]}function tm(a,u){return!a||!u?!1:a.object.uuid===u.object.uuid&&a.instanceId===u.instanceId}const om=(a,u)=>{let e=ua(a.pointerOverCanvas);const i=a.pointerOverCanvas.subscribe(l=>e=l);D0(i);let n=ua(a.camera);const r=a.camera.subscribe(l=>n=l);D0(r);let t=ua(a.pointer);const o=a.pointer.subscribe(l=>t=l);return D0(o),{raycast:()=>{var D,x,c,p,d,m,h,F;if(u.interactiveObjects.size===0||u.raycastableObjects.size===0)return;const l=e?i4(u,t,n,Array.from(u.raycastableObjects)):[],E=l.length&&u.interactiveObjects.has(l[0].object)?l[0]:null;E?u.lastIntersection?u.lastIntersection&&im(u.lastIntersection,E)&&((m=(d=Me(u.lastIntersection.object)).eventDispatcher)==null||m.call(d,"pointerleave",u.lastIntersection),(F=(h=Me(E.object)).eventDispatcher)==null||F.call(h,"pointerenter",E)):(p=(c=Me(E.object)).eventDispatcher)==null||p.call(c,"pointerenter",E):u.lastIntersection&&((x=(D=Me(u.lastIntersection.object)).eventDispatcher)==null||x.call(D,"pointerleave",u.lastIntersection)),u.lastIntersection=E}}},On=typeof window<"u",sm=a=>{if(!On)return;let u;const e=()=>{a(),u=requestAnimationFrame(e)};e(),D0(()=>{u&&cancelAnimationFrame(u)})},lm=(a,u)=>{if(u.frameHandlers.size===0)return;if(u.debugFrameloop){let n=0;u.frameHandlers.forEach(r=>{r.debugFrameloopMessage?u.invalidations[r.debugFrameloopMessage]=r.debugFrameloopMessage in u.invalidations?u.invalidations[r.debugFrameloopMessage]+1:1:++n}),n>0&&(u.invalidations.onFrame=u.frameHandlers.size)}const e=Array.from(u.frameHandlers).reduce((n,r)=>r.order?!0:n,!1),i=a.clock.getDelta();e?Array.from(u.frameHandlers).sort((n,r)=>(n.order??0)>(r.order??0)?1:-1).forEach(n=>n.fn(a,i)):u.frameHandlers.forEach(n=>n.fn(a,i))},Em=a=>{a.debugFrameloop&&(a.frame+=1,console.log(`frame: ${a.frame}${Object.keys(a.invalidations).length>0?", requested by ↴":""}`),Object.keys(a.invalidations).length>0&&console.table(a.invalidations),a.invalidations={})},Dm=(a,u,e,i)=>{let n=ua(a.camera);const r=a.camera.subscribe(o=>n=o);D0(r);const{raycast:t}=om(a,u);sm(()=>{i.dispose();const o=e.frameloop==="always"||e.frameloop==="demand"&&(e.frameInvalidated||e.frameHandlers.size>0)||e.frameloop==="never"&&e.advance;(o||e.pointerInvalidated)&&(t(),e.pointerInvalidated=!1),o&&(!n||!a.composer||!a.renderer||(lm(a,e),a.composer.passes.length>1?a.composer.render():a.renderer.render(a.scene,n),Em(e),e.frameInvalidated=!1,e.advance=!1))})},xm=()=>{const a=new ue(75,0,.1,1e3);return Me(a).threlteDefaultCamera=!0,a.position.z=5,a.lookAt(0,0,0),a},cm=a=>{const u=a.size.subscribe(e=>{Me(ua(a.camera)).threlteDefaultCamera&&a.camera.update(i=>{const n=i;return n.aspect=e.width/e.height,n.updateProjectionMatrix(),a.invalidate("Default camera: aspect ratio changed"),n})});D0(u)},dm=(a,u,e,i,n,r,t)=>{const o={audioListeners:new Map,addAudioListener:(h,F)=>{if(F=F??"default",o.audioListeners.has(F)){console.warn(`An AudioListener with the id "${F}" has already been added, aborting.`);return}o.audioListeners.set(F,h)},removeAudioListener:h=>{if(h=h??"default",!o.audioListeners.has(h)){console.warn(`No AudioListener with the id "${h}" found, aborting.`);return}o.audioListeners.delete(h)},getAudioListener:h=>{if(h=h??"default",!o.audioListeners.has(h)){console.warn(`No AudioListener with the id "${h}" found, aborting.`);return}return o.audioListeners.get(h)}},s={debugFrameloop:r,frameloop:t,frame:0,frameInvalidated:!0,pointerInvalidated:!0,invalidations:{},frameHandlers:new Set,advance:!1},l={size:qd([i,n],([h,F])=>h||F),pointer:C0(new du),pointerOverCanvas:C0(!1),clock:new u4,camera:C0(xm()),scene:new O1,renderer:void 0,composer:void 0,invalidate:h=>{s.frameInvalidated=!0,s.debugFrameloop&&h&&(s.invalidations[h]=s.invalidations[h]?s.invalidations[h]+1:1)},advance:()=>{s.advance=!0}},E={flat:C0(u),linear:C0(a),dpr:C0(e),setCamera:h=>{l.camera.set(h),l.composer&&(l.composer.passes.forEach(F=>{F instanceof a4&&(F.camera=h)}),l.invalidate("Canvas: setting camera"))},raycastableObjects:new Set,interactiveObjects:new Set,raycaster:new Ud,lastIntersection:null,addRaycastableObject:h=>{E.raycastableObjects.add(h)},removeRaycastableObject:h=>{E.raycastableObjects.delete(h)},addInteractiveObject:h=>{E.interactiveObjects.add(h)},removeInteractiveObject:h=>{E.interactiveObjects.delete(h)},addPass:h=>{l.composer&&(l.composer.addPass(h),l.invalidate("Canvas: adding pass"))},removePass:h=>{l.composer&&(l.composer.removePass(h),l.invalidate("Canvas: removing pass"))}},D={dispose:async(h=!1)=>{await Ti(),!(!D.shouldDispose&&!h)&&(D.disposableObjects.forEach((F,g)=>{var C;(F===0||h)&&((C=g==null?void 0:g.dispose)==null||C.call(g),D.disposableObjects.delete(g))}),D.shouldDispose=!1)},collectDisposableObjects:(h,F)=>{const g=F??[];return h&&(h!=null&&h.dispose&&typeof h.dispose=="function"&&h.type!=="Scene"&&g.push(h),Object.entries(h).forEach(([C,v])=>{if(C==="parent"||C==="children"||typeof v!="object")return;const A=v;A!=null&&A.dispose&&D.collectDisposableObjects(A,g)})),g},addDisposableObjects:h=>{h.forEach(F=>{const g=D.disposableObjects.get(F);g?D.disposableObjects.set(F,g+1):D.disposableObjects.set(F,1)})},removeDisposableObjects:h=>{h.length!==0&&(h.forEach(F=>{const g=D.disposableObjects.get(F);g&&g>0&&D.disposableObjects.set(F,g-1)}),D.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1};return te("threlte",l),te("threlte-root",E),te("threlte-render-context",s),te("threlte-audio-context",o),te("threlte-disposal-context",D),{ctx:l,rootCtx:E,renderCtx:s,audioCtx:o,disposalCtx:D,getCtx:()=>l,getRootCtx:()=>E,getRenderCtx:()=>s,getAudioCtx:()=>o,getDisposalCtx:()=>D}};function Mt(a,u){const e=C0(a);let i=a;const n=e.subscribe(o=>i=o);return D0(n),{...e,set:o=>{if((o==null?void 0:o.uuid)===(i==null?void 0:i.uuid))return;const s=i;e.set(o),u==null||u(o,s)},update:o=>{const s=o(i);if((s==null?void 0:s.uuid)===(i==null?void 0:i.uuid))return;const l=i;e.set(s),u==null||u(s,l)}}}const le=()=>Ce("threlte");function mm(a){let u;const e=a[8].default,i=be(e,a,a[7],null);return{c(){i&&i.c()},m(n,r){i&&i.m(n,r),u=!0},p(n,[r]){i&&i.p&&(!u||r&128)&&Be(i,e,n,n[7],u?Ae(e,n[7],r,null):ye(n[7]),null)},i(n){u||(au(i,n),u=!0)},o(n){su(i,n),u=!1},d(n){i&&i.d(n)}}}const hm=()=>({onChildMount:Ce("threlte-hierarchical-object-on-mount"),onChildDestroy:Ce("threlte-hierarchical-object-on-destroy")}),pm=()=>Ce("threlte-hierarchical-parent-context");function Fm(a,u,e){var h;let i,{$$slots:n={},$$scope:r}=u,{object:t=void 0}=u,{children:o=[]}=u,{onChildMount:s=void 0}=u;const l=F=>{o.push(F),e(1,o),s==null||s(F)};let{onChildDestroy:E=void 0}=u;const D=F=>{const g=o.findIndex(C=>C.uuid===F.uuid);g!==-1&&o.splice(g,1),e(1,o),E==null||E(F)},{invalidate:x}=le(),c=pm();S0(a,c,F=>e(6,i=F));let{parent:p=i}=u;const d=hm();t&&((h=d.onChildMount)==null||h.call(d,t),x("HierarchicalObject: object added"));const m=Mt(t,(F,g)=>{var C,v;g&&((C=d.onChildDestroy)==null||C.call(d,g),x("HierarchicalObject: object added")),F&&((v=d.onChildMount)==null||v.call(d,F),x("HierarchicalObject: object removed"))});return D0(()=>{var F;t&&((F=d.onChildDestroy)==null||F.call(d,t),x("HierarchicalObject: object removed"))}),te("threlte-hierarchical-object-on-mount",l),te("threlte-hierarchical-object-on-destroy",D),te("threlte-hierarchical-parent-context",m),a.$$set=F=>{"object"in F&&e(3,t=F.object),"children"in F&&e(1,o=F.children),"onChildMount"in F&&e(4,s=F.onChildMount),"onChildDestroy"in F&&e(5,E=F.onChildDestroy),"parent"in F&&e(2,p=F.parent),"$$scope"in F&&e(7,r=F.$$scope)},a.$$.update=()=>{a.$$.dirty&64&&e(2,p=i),a.$$.dirty&8&&m.set(t)},[c,o,p,t,s,E,i,r,n]}class gm extends Xu{constructor(u){super(),Qu(this,u,Fm,mm,$u,{object:3,children:1,onChildMount:4,onChildDestroy:5,parent:2})}}function km(a){let u;const e=a[1].default,i=be(e,a,a[4],null);return{c(){i&&i.c()},m(n,r){i&&i.m(n,r),u=!0},p(n,r){i&&i.p&&(!u||r&16)&&Be(i,e,n,n[4],u?Ae(e,n[4],r,null):ye(n[4]),null)},i(n){u||(au(i,n),u=!0)},o(n){su(i,n),u=!1},d(n){i&&i.d(n)}}}function Cm(a){let u,e;return u=new gm({props:{object:a[0],onChildMount:a[2],onChildDestroy:a[3],$$slots:{default:[km]},$$scope:{ctx:a}}}),{c(){ju(u.$$.fragment)},m(i,n){Su(u,i,n),e=!0},p(i,[n]){const r={};n&1&&(r.object=i[0]),n&1&&(r.onChildMount=i[2]),n&1&&(r.onChildDestroy=i[3]),n&16&&(r.$$scope={dirty:n,ctx:i}),u.$set(r)},i(i){e||(au(u.$$.fragment,i),e=!0)},o(i){su(u.$$.fragment,i),e=!1},d(i){Mu(u,i)}}}function vm(a,u,e){let{$$slots:i={},$$scope:n}=u,{object:r}=u;const t=s=>r.add(s),o=s=>r.remove(s);return a.$$set=s=>{"object"in s&&e(0,r=s.object),"$$scope"in s&&e(4,n=s.$$scope)},[r,i,t,o,n]}class Wn extends Xu{constructor(u){super(),Qu(this,u,vm,Cm,$u,{object:0})}}const fm=()=>{const a=C0({width:0,height:0});let u={width:0,height:0};const e=a.subscribe(t=>u=t);D0(e);let i;const n=()=>{const t=u;if(!i||!i.parentElement)return;const{clientWidth:o,clientHeight:s}=i.parentElement;(o!==t.width||s!==t.height)&&a.set({width:o,height:s})},r=t=>{i=t,n(),window.addEventListener("resize",n)};return On?(D0(()=>{window.removeEventListener("resize",n)}),{parentSizeAction:r,parentSize:a}):{parentSize:a,parentSizeAction:r}};function Fs(a){let u,e;return u=new Wn({props:{object:a[0].scene,$$slots:{default:[bm]},$$scope:{ctx:a}}}),{c(){ju(u.$$.fragment)},m(i,n){Su(u,i,n),e=!0},p(i,n){const r={};n[1]&4&&(r.$$scope={dirty:n,ctx:i}),u.$set(r)},i(i){e||(au(u.$$.fragment,i),e=!0)},o(i){su(u.$$.fragment,i),e=!1},d(i){Mu(u,i)}}}function bm(a){let u;const e=a[29].default,i=be(e,a,a[33],null);return{c(){i&&i.c()},m(n,r){i&&i.m(n,r),u=!0},p(n,r){i&&i.p&&(!u||r[1]&4)&&Be(i,e,n,n[33],u?Ae(e,n[33],r,null):ye(n[33]),null)},i(n){u||(au(i,n),u=!0)},o(n){su(i,n),u=!1},d(n){i&&i.d(n)}}}function Am(a){let u,e,i,n,r=a[2]&&Fs(a);return{c(){u=Du("canvas"),r&&r.c(),X(u,"class","svelte-o3oskp")},m(t,o){Bu(t,u,o),r&&r.m(u,null),a[30](u),e=!0,i||(n=[a3(a[3].call(null,u)),m0(u,"click",a[9]),m0(u,"contextmenu",a[10]),m0(u,"pointerup",a[13]),m0(u,"pointerdown",a[11]),m0(u,"pointermove",a[12]),m0(u,"pointerenter",a[31]),m0(u,"pointerleave",a[32])],i=!0)},p(t,o){t[2]?r?(r.p(t,o),o[0]&4&&au(r,1)):(r=Fs(t),r.c(),au(r,1),r.m(u,null)):r&&(Fe(),su(r,1,1,()=>{r=null}),ge())},i(t){e||(au(r),e=!0)},o(t){su(r),e=!1},d(t){t&&Au(u),r&&r.d(),a[30](null),i=!1,fe(n)}}}const gs=new Set;function Bm(a,u,e){let i,n,r,t,{$$slots:o={},$$scope:s}=u,{dpr:l=On?window.devicePixelRatio:1}=u,{flat:E=!1}=u,{linear:D=!1}=u,{frameloop:x="demand"}=u,{debugFrameloop:c=!1}=u,{shadows:p=!0}=u,{shadowMapType:d=k1}=u,{size:m=void 0}=u,{rendererParameters:h=void 0}=u,F,g=!1;const C=C0(m),{parentSize:v,parentSizeAction:A}=fm(),M=dm(D,E,l,C,v,c,x),{getCtx:k,renderCtx:B,disposalCtx:y}=M,{ctx:L,rootCtx:N,audioCtx:j}=M;cm(L),gs.add(L.invalidate),D0(()=>{gs.delete(L.invalidate)});const{size:T,scene:S}=L;S0(a,T,ru=>e(26,n=ru));const{flat:J,linear:O,dpr:K}=N;S0(a,J,ru=>e(27,r=ru)),S0(a,O,ru=>e(28,t=ru)),S0(a,K,ru=>e(25,i=ru)),te("threlte-parent",C0(S)),xt(()=>{F&&(em(L,F,h),ms(L,t,r),hs(L,n,i),ps(L,p,d),e(2,g=!0))}),Dm(L,N,B,y);const{onClick:Q,onContextMenu:uu,onPointerDown:mu,onPointerMove:V,onPointerUp:Z}=nm(L,N,B);D0(()=>{y.dispose(!0)});function ou(ru){ba[ru?"unshift":"push"](()=>{F=ru,e(1,F)})}const lu=()=>k().pointerOverCanvas.set(!0),G=()=>k().pointerOverCanvas.set(!1);return a.$$set=ru=>{"dpr"in ru&&e(14,l=ru.dpr),"flat"in ru&&e(15,E=ru.flat),"linear"in ru&&e(16,D=ru.linear),"frameloop"in ru&&e(17,x=ru.frameloop),"debugFrameloop"in ru&&e(18,c=ru.debugFrameloop),"shadows"in ru&&e(19,p=ru.shadows),"shadowMapType"in ru&&e(20,d=ru.shadowMapType),"size"in ru&&e(21,m=ru.size),"rendererParameters"in ru&&e(22,h=ru.rendererParameters),"$$scope"in ru&&e(33,s=ru.$$scope)},a.$$.update=()=>{a.$$.dirty[0]&2097152&&C.set(m),a.$$.dirty[0]&65536&&ce(O,t=D,t),a.$$.dirty[0]&32768&&ce(J,r=E,r),a.$$.dirty[0]&16384&&ce(K,i=l,i),a.$$.dirty[0]&402653184&&ms(k(),t,r),a.$$.dirty[0]&100663296&&hs(k(),n,i),a.$$.dirty[0]&1572864&&ps(k(),p,d)},[L,F,g,A,k,T,J,O,K,Q,uu,mu,V,Z,l,E,D,x,c,p,d,m,h,N,j,i,n,r,t,o,ou,lu,G,s]}class ym extends Xu{constructor(u){super(),Qu(this,u,Bm,Am,$u,{dpr:14,flat:15,linear:16,frameloop:17,debugFrameloop:18,shadows:19,shadowMapType:20,size:21,rendererParameters:22,ctx:0,rootCtx:23,audioCtx:24},null,[-1,-1])}get ctx(){return this.$$.ctx[0]}get rootCtx(){return this.$$.ctx[23]}get audioCtx(){return this.$$.ctx[24]}}const jt=()=>Ce("threlte-root"),zm=()=>Ce("threlte-disposal-context");function Sm(a){let u;const e=a[9].default,i=be(e,a,a[8],null);return{c(){i&&i.c()},m(n,r){i&&i.m(n,r),u=!0},p(n,[r]){i&&i.p&&(!u||r&256)&&Be(i,e,n,n[8],u?Ae(e,n[8],r,null):ye(n[8]),null)},i(n){u||(au(i,n),u=!0)},o(n){su(i,n),u=!1},d(n){i&&i.d(n)}}}const ks="threlte-disposable-object-context";function Mm(a,u,e){let i,n,{$$slots:r={},$$scope:t}=u;const{collectDisposableObjects:o,addDisposableObjects:s,removeDisposableObjects:l}=zm();let{object:E=void 0}=u,D=E,{dispose:x=void 0}=u;const c=Ce(ks);S0(a,c,m=>e(7,n=m));const p=C0(x??n??!0);S0(a,p,m=>e(6,i=m)),te(ks,p);let d=i?o(E):[];return s(d),D0(()=>{l(d)}),a.$$set=m=>{"object"in m&&e(2,E=m.object),"dispose"in m&&e(3,x=m.dispose),"$$scope"in m&&e(8,t=m.$$scope)},a.$$.update=()=>{a.$$.dirty&136&&p.set(x??n??!0),a.$$.dirty&116&&E!==D&&(l(d),e(5,d=i?o(E):[]),s(d),e(4,D=E))},[c,p,E,x,D,d,i,n,t,r]}class wn extends Xu{constructor(u){super(),Qu(this,u,Mm,Sm,$u,{object:2,dispose:3})}}function jm(a,u,e){let i,n,{object:r}=u;const t=Mt(r);S0(a,t,l=>e(4,n=l));const o=Ce("threlte-layers");S0(a,o,l=>e(3,i=l));const{invalidate:s}=le();return a.$$set=l=>{"object"in l&&e(2,r=l.object)},a.$$.update=()=>{if(a.$$.dirty&4&&t.set(r),a.$$.dirty&24){if(i==="all")n.layers.enableAll();else if(i==="none")n.layers.disableAll();else if(Array.isArray(i))for(let l=0;l<32;l+=1){const E=l;i.includes(E)?n.layers.enable(l):n.layers.disable(l)}else i!==void 0&&n.layers.set(i);s("LayerableObject")}},[t,o,r,i,n]}class Pm extends Xu{constructor(u){super(),Qu(this,u,jm,null,$u,{object:2})}}const ya=(a,u)=>{if(!On)return{start:()=>{},stop:()=>{},started:e4(!1)};const e=Ce("threlte-render-context"),i={fn:a,order:u==null?void 0:u.order,debugFrameloopMessage:u==null?void 0:u.debugFrameloopMessage},n=C0(!1),r=()=>{e.frameHandlers.delete(i),n.set(!1)},t=()=>{e.frameHandlers.add(i),n.set(!0)};return((u==null?void 0:u.autostart)??!0)&&t(),D0(()=>{r()}),{start:t,stop:r,started:{subscribe:n.subscribe}}},n4=()=>{const a=C0(!1);return(async()=>{await Ti(),a.set(!0)})(),a};function Tm(a,u,e){let i,n,{object:r}=u,{position:t=void 0}=u,{scale:o=void 0}=u,{rotation:s=void 0}=u,{lookAt:l=void 0}=u;const E=new _,D=Vi(),{invalidate:x}=le(),c=n4();S0(a,c,g=>e(8,n=g));const p=async()=>{n||await Ti(),D("transform")},d=async()=>{x("TransformableObject: transformed"),await p()};Me(r).onTransform=d;const{start:m,stop:h}=ya(async()=>{l&&!s&&l instanceof v0&&(l.getWorldPosition(E),r.lookAt(E),await p())},{autostart:!1,debugFrameloopMessage:"TransformableObject: tracking object"}),F=Mt(r);return S0(a,F,g=>e(7,i=g)),a.$$set=g=>{"object"in g&&e(2,r=g.object),"position"in g&&e(3,t=g.position),"scale"in g&&e(4,o=g.scale),"rotation"in g&&e(5,s=g.rotation),"lookAt"in g&&e(6,l=g.lookAt)},a.$$.update=()=>{a.$$.dirty&4&&F.set(r),a.$$.dirty&232&&(t&&(i.position.set(t.x??0,t.y??0,t.z??0),d()),l&&!s&&(l instanceof v0?m():(h(),i.lookAt(l.x??0,l.y??0,l.z??0),d())),l||h()),a.$$.dirty&144&&o&&(typeof o=="number"?i.scale.set(o,o,o):i.scale.set(o.x??1,o.y??1,o.z??1),d()),a.$$.dirty&160&&s&&(i.rotation.set(s.x??0,s.y??0,s.z??0,s.order??"XYZ"),d())},[c,F,r,t,o,s,l,i]}class r4 extends Xu{constructor(u){super(),Qu(this,u,Tm,null,$u,{object:2,position:3,scale:4,rotation:5,lookAt:6})}}function wm(a,u,e){let i,n,r,{object:t}=u,{viewportAware:o=!1}=u;const s=Vi(),{camera:l,invalidate:E}=le();S0(a,l,A=>e(8,r=A));const D=new Ct,x=new x0,c=A=>A.type==="Mesh",p=new _,d=()=>r?(x.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),D.setFromProjectionMatrix(x),c(t)?D.intersectsObject(t):(t.getWorldPosition(p),D.containsPoint(p))):!0,m=n4();S0(a,m,A=>e(7,n=A));let{inViewport:h=d()}=u;const F=async A=>{A?(n||await Ti(),s("viewportenter",t)):(n||await Ti(),s("viewportleave",t))},{start:g,stop:C,started:v}=ya(()=>{const A=d();h===void 0?(e(3,h=d()),F(h)):A!==h&&(F(A),e(3,h=A))},{autostart:o,debugFrameloopMessage:"ViewportAwareObject: tracking viewport visibility"});return S0(a,v,A=>e(6,i=A)),E("ViewportAwareObject"),a.$$set=A=>{"object"in A&&e(4,t=A.object),"viewportAware"in A&&e(5,o=A.viewportAware),"inViewport"in A&&e(3,h=A.inViewport)},a.$$.update=()=>{a.$$.dirty&96&&(o&&!i?g():!o&&i&&C())},[l,m,v,h,t,o,i]}class _m extends Xu{constructor(u){super(),Qu(this,u,wm,null,$u,{object:4,viewportAware:5,inViewport:3})}}function Lm(a){let u;const e=a[14].default,i=be(e,a,a[18],null);return{c(){i&&i.c()},m(n,r){i&&i.m(n,r),u=!0},p(n,r){i&&i.p&&(!u||r&262144)&&Be(i,e,n,n[18],u?Ae(e,n[18],r,null):ye(n[18]),null)},i(n){u||(au(i,n),u=!0)},o(n){su(i,n),u=!1},d(n){i&&i.d(n)}}}function Rm(a){let u,e;return u=new Wn({props:{object:a[1],$$slots:{default:[Lm]},$$scope:{ctx:a}}}),{c(){ju(u.$$.fragment)},m(i,n){Su(u,i,n),e=!0},p(i,n){const r={};n&2&&(r.object=i[1]),n&262144&&(r.$$scope={dirty:n,ctx:i}),u.$set(r)},i(i){e||(au(u.$$.fragment,i),e=!0)},o(i){su(u.$$.fragment,i),e=!1},d(i){Mu(u,i)}}}function Km(a){let u,e,i,n,r,t,o,s,l;u=new Pm({props:{object:a[1]}}),i=new r4({props:{object:a[1],position:a[2],rotation:a[4],scale:a[3],lookAt:a[5]}}),r=new wn({props:{object:a[1],dispose:a[7],$$slots:{default:[Rm]},$$scope:{ctx:a}}});function E(x){a[15](x)}let D={object:a[1],viewportAware:a[6]};return a[0]!==void 0&&(D.inViewport=a[0]),o=new _m({props:D}),ba.push(()=>dt(o,"inViewport",E)),o.$on("viewportenter",a[16]),o.$on("viewportleave",a[17]),{c(){ju(u.$$.fragment),e=fu(),ju(i.$$.fragment),n=fu(),ju(r.$$.fragment),t=fu(),ju(o.$$.fragment)},m(x,c){Su(u,x,c),Bu(x,e,c),Su(i,x,c),Bu(x,n,c),Su(r,x,c),Bu(x,t,c),Su(o,x,c),l=!0},p(x,[c]){const p={};c&2&&(p.object=x[1]),u.$set(p);const d={};c&2&&(d.object=x[1]),c&4&&(d.position=x[2]),c&16&&(d.rotation=x[4]),c&8&&(d.scale=x[3]),c&32&&(d.lookAt=x[5]),i.$set(d);const m={};c&2&&(m.object=x[1]),c&128&&(m.dispose=x[7]),c&262146&&(m.$$scope={dirty:c,ctx:x}),r.$set(m);const h={};c&2&&(h.object=x[1]),c&64&&(h.viewportAware=x[6]),!s&&c&1&&(s=!0,h.inViewport=x[0],ct(()=>s=!1)),o.$set(h)},i(x){l||(au(u.$$.fragment,x),au(i.$$.fragment,x),au(r.$$.fragment,x),au(o.$$.fragment,x),l=!0)},o(x){su(u.$$.fragment,x),su(i.$$.fragment,x),su(r.$$.fragment,x),su(o.$$.fragment,x),l=!1},d(x){Mu(u,x),x&&Au(e),Mu(i,x),x&&Au(n),Mu(r,x),x&&Au(t),Mu(o,x)}}}function Nm(a,u,e){let{$$slots:i={},$$scope:n}=u,{object:r}=u,{position:t=void 0}=u,{scale:o=void 0}=u,{rotation:s=void 0}=u,{lookAt:l=void 0}=u,{viewportAware:E=!1}=u,{inViewport:D=!1}=u,{castShadow:x=void 0}=u,{receiveShadow:c=void 0}=u,{frustumCulled:p=void 0}=u,{renderOrder:d=void 0}=u,{visible:m=void 0}=u,{dispose:h=void 0}=u,{userData:F=void 0}=u;const{invalidate:g}=le(),C=()=>r;function v(k){D=k,e(0,D)}function A(k){X0.call(this,a,k)}function M(k){X0.call(this,a,k)}return a.$$set=k=>{"object"in k&&e(1,r=k.object),"position"in k&&e(2,t=k.position),"scale"in k&&e(3,o=k.scale),"rotation"in k&&e(4,s=k.rotation),"lookAt"in k&&e(5,l=k.lookAt),"viewportAware"in k&&e(6,E=k.viewportAware),"inViewport"in k&&e(0,D=k.inViewport),"castShadow"in k&&e(8,x=k.castShadow),"receiveShadow"in k&&e(9,c=k.receiveShadow),"frustumCulled"in k&&e(10,p=k.frustumCulled),"renderOrder"in k&&e(11,d=k.renderOrder),"visible"in k&&e(12,m=k.visible),"dispose"in k&&e(7,h=k.dispose),"userData"in k&&e(13,F=k.userData),"$$scope"in k&&e(18,n=k.$$scope)},a.$$.update=()=>{a.$$.dirty&16128&&(m!==void 0&&(C().visible=m),x!==void 0&&(C().castShadow=x),c!==void 0&&(C().receiveShadow=c),p!==void 0&&(C().frustumCulled=p),d!==void 0&&(C().renderOrder=d),F!==void 0&&(C().userData={...C().userData,...F}),g("Object3DInstance: props changed"))},[D,r,t,o,s,l,E,h,x,c,p,d,m,F,i,v,A,M,n]}class t4 extends Xu{constructor(u){super(),Qu(this,u,Nm,Km,$u,{object:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:8,receiveShadow:9,frustumCulled:10,renderOrder:11,visible:12,dispose:7,userData:13})}}const Cs=[],Hm=(a,u)=>{const e=Cs.find(n=>n instanceof a);if(e)return e;const i=u();return Cs.push(i),i};function Gm(a,u,e){let{pass:i}=u;const{addPass:n,removePass:r}=jt();return n(i),ya(()=>{},{debugFrameloopMessage:"Pass component"}),D0(()=>{r(i)}),a.$$set=t=>{"pass"in t&&e(0,i=t.pass)},[i]}class vs extends Xu{constructor(u){super(),Qu(this,u,Gm,null,$u,{pass:0})}}function Vm(a,u,e){let{object:i}=u,n=i,{interactive:r=!1}=u,{ignorePointer:t=!1}=u;const o=Vi(),{addInteractiveObject:s,removeInteractiveObject:l,addRaycastableObject:E,removeRaycastableObject:D}=jt(),{invalidate:x}=le(),c=d=>{D(d),l(d),delete Me(d).eventDispatcher},p=(d,m,h)=>{Me(d).eventDispatcher=o,m?(D(d),l(d)):(E(d),h?s(d):l(d))};return D0(()=>{c(i),x("InteractiveObject: object removed")}),a.$$set=d=>{"object"in d&&e(0,i=d.object),"interactive"in d&&e(1,r=d.interactive),"ignorePointer"in d&&e(2,t=d.ignorePointer)},a.$$.update=()=>{a.$$.dirty&15&&(i!==n?(c(n),p(i,t,r),x("InteractiveObject: object changed"),e(3,n=i)):i===n&&(p(i,t,r),x("InteractiveObject: props changed")))},[i,r,t,n]}class Im extends Xu{constructor(u){super(),Qu(this,u,Vm,null,$u,{object:0,interactive:1,ignorePointer:2})}}function Jm(a){let u;const e=a[16].default,i=be(e,a,a[27],null);return{c(){i&&i.c()},m(n,r){i&&i.m(n,r),u=!0},p(n,r){i&&i.p&&(!u||r&134217728)&&Be(i,e,n,n[27],u?Ae(e,n[27],r,null):ye(n[27]),null)},i(n){u||(au(i,n),u=!0)},o(n){su(i,n),u=!1},d(n){i&&i.d(n)}}}function Om(a){let u,e,i,n,r;function t(s){a[17](s)}let o={object:a[1],lookAt:a[5],position:a[2],scale:a[3],rotation:a[4],castShadow:a[7],receiveShadow:a[8],frustumCulled:a[9],renderOrder:a[10],visible:a[11],userData:a[12],dispose:a[13],viewportAware:a[6],$$slots:{default:[Jm]},$$scope:{ctx:a}};return a[0]!==void 0&&(o.inViewport=a[0]),u=new t4({props:o}),ba.push(()=>dt(u,"inViewport",t)),u.$on("viewportenter",a[18]),u.$on("viewportleave",a[19]),n=new Im({props:{object:a[1],interactive:a[14],ignorePointer:a[15]}}),n.$on("click",a[20]),n.$on("contextmenu",a[21]),n.$on("pointerup",a[22]),n.$on("pointerdown",a[23]),n.$on("pointerenter",a[24]),n.$on("pointerleave",a[25]),n.$on("pointermove",a[26]),{c(){ju(u.$$.fragment),i=fu(),ju(n.$$.fragment)},m(s,l){Su(u,s,l),Bu(s,i,l),Su(n,s,l),r=!0},p(s,[l]){const E={};l&2&&(E.object=s[1]),l&32&&(E.lookAt=s[5]),l&4&&(E.position=s[2]),l&8&&(E.scale=s[3]),l&16&&(E.rotation=s[4]),l&128&&(E.castShadow=s[7]),l&256&&(E.receiveShadow=s[8]),l&512&&(E.frustumCulled=s[9]),l&1024&&(E.renderOrder=s[10]),l&2048&&(E.visible=s[11]),l&4096&&(E.userData=s[12]),l&8192&&(E.dispose=s[13]),l&64&&(E.viewportAware=s[6]),l&134217728&&(E.$$scope={dirty:l,ctx:s}),!e&&l&1&&(e=!0,E.inViewport=s[0],ct(()=>e=!1)),u.$set(E);const D={};l&2&&(D.object=s[1]),l&16384&&(D.interactive=s[14]),l&32768&&(D.ignorePointer=s[15]),n.$set(D)},i(s){r||(au(u.$$.fragment,s),au(n.$$.fragment,s),r=!0)},o(s){su(u.$$.fragment,s),su(n.$$.fragment,s),r=!1},d(s){Mu(u,s),s&&Au(i),Mu(n,s)}}}function Wm(a,u,e){let{$$slots:i={},$$scope:n}=u,{mesh:r}=u,{position:t=void 0}=u,{scale:o=void 0}=u,{rotation:s=void 0}=u,{lookAt:l=void 0}=u,{viewportAware:E=!1}=u,{inViewport:D=!1}=u,{castShadow:x=void 0}=u,{receiveShadow:c=void 0}=u,{frustumCulled:p=void 0}=u,{renderOrder:d=void 0}=u,{visible:m=void 0}=u,{userData:h=void 0}=u,{dispose:F=void 0}=u,{interactive:g=!1}=u,{ignorePointer:C=!1}=u;function v(S){D=S,e(0,D)}function A(S){X0.call(this,a,S)}function M(S){X0.call(this,a,S)}function k(S){X0.call(this,a,S)}function B(S){X0.call(this,a,S)}function y(S){X0.call(this,a,S)}function L(S){X0.call(this,a,S)}function N(S){X0.call(this,a,S)}function j(S){X0.call(this,a,S)}function T(S){X0.call(this,a,S)}return a.$$set=S=>{"mesh"in S&&e(1,r=S.mesh),"position"in S&&e(2,t=S.position),"scale"in S&&e(3,o=S.scale),"rotation"in S&&e(4,s=S.rotation),"lookAt"in S&&e(5,l=S.lookAt),"viewportAware"in S&&e(6,E=S.viewportAware),"inViewport"in S&&e(0,D=S.inViewport),"castShadow"in S&&e(7,x=S.castShadow),"receiveShadow"in S&&e(8,c=S.receiveShadow),"frustumCulled"in S&&e(9,p=S.frustumCulled),"renderOrder"in S&&e(10,d=S.renderOrder),"visible"in S&&e(11,m=S.visible),"userData"in S&&e(12,h=S.userData),"dispose"in S&&e(13,F=S.dispose),"interactive"in S&&e(14,g=S.interactive),"ignorePointer"in S&&e(15,C=S.ignorePointer),"$$scope"in S&&e(27,n=S.$$scope)},[D,r,t,o,s,l,E,x,c,p,d,m,h,F,g,C,i,v,A,M,k,B,y,L,N,j,T,n]}class Um extends Xu{constructor(u){super(),Qu(this,u,Wm,Om,$u,{mesh:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,interactive:14,ignorePointer:15})}}const $m=(a,u)=>{let e=a;return{onChange:(n,r)=>{(u&&!u(n,e)||!u&&n!==e)&&(r(n,e),e=n)}}};function fs(a){let u,e,i;function n(t){a[24](t)}let r={mesh:a[17],castShadow:a[5],receiveShadow:a[6],frustumCulled:void 0,renderOrder:a[7],visible:a[8],userData:a[9],dispose:a[10],interactive:a[11],ignorePointer:a[12],viewportAware:a[4]};return a[0]!==void 0&&(r.inViewport=a[0]),u=new Um({props:r}),ba.push(()=>dt(u,"inViewport",n)),u.$on("click",a[20]),u.$on("contextmenu",a[20]),u.$on("pointerup",a[20]),u.$on("pointerdown",a[20]),u.$on("pointerenter",a[20]),u.$on("pointerleave",a[20]),u.$on("pointermove",a[20]),u.$on("viewportenter",a[25]),u.$on("viewportleave",a[26]),{c(){ju(u.$$.fragment)},m(t,o){Su(u,t,o),i=!0},p(t,o){const s={};o[0]&131072&&(s.mesh=t[17]),o[0]&32&&(s.castShadow=t[5]),o[0]&64&&(s.receiveShadow=t[6]),o[0]&128&&(s.renderOrder=t[7]),o[0]&256&&(s.visible=t[8]),o[0]&512&&(s.userData=t[9]),o[0]&1024&&(s.dispose=t[10]),o[0]&2048&&(s.interactive=t[11]),o[0]&4096&&(s.ignorePointer=t[12]),o[0]&16&&(s.viewportAware=t[4]),!e&&o[0]&1&&(e=!0,s.inViewport=t[0],ct(()=>e=!1)),u.$set(s)},i(t){i||(au(u.$$.fragment,t),i=!0)},o(t){su(u.$$.fragment,t),i=!1},d(t){Mu(u,t)}}}function qm(a){let u=a[17].uuid,e,i,n=fs(a);const r=a[23].default,t=be(r,a,a[27],null);return{c(){n.c(),e=fu(),t&&t.c()},m(o,s){n.m(o,s),Bu(o,e,s),t&&t.m(o,s),i=!0},p(o,s){s[0]&131072&&$u(u,u=o[17].uuid)?(Fe(),su(n,1,1,Iu),ge(),n=fs(o),n.c(),au(n,1),n.m(e.parentNode,e)):n.p(o,s),t&&t.p&&(!i||s[0]&134217728)&&Be(t,r,o,o[27],i?Ae(r,o[27],s,null):ye(o[27]),null)},i(o){i||(au(n),au(t,o),i=!0)},o(o){su(n),su(t,o),i=!1},d(o){n.d(o),o&&Au(e),t&&t.d(o)}}}function Zm(a){let u,e,i,n,r,t;return u=new wn({props:{dispose:a[10],object:a[14]}}),i=new wn({props:{dispose:a[10],object:a[15]}}),r=new t4({props:{object:a[18],position:a[1],scale:a[2],rotation:a[3],lookAt:a[13],$$slots:{default:[qm]},$$scope:{ctx:a}}}),{c(){ju(u.$$.fragment),e=fu(),ju(i.$$.fragment),n=fu(),ju(r.$$.fragment)},m(o,s){Su(u,o,s),Bu(o,e,s),Su(i,o,s),Bu(o,n,s),Su(r,o,s),t=!0},p(o,s){const l={};s[0]&1024&&(l.dispose=o[10]),s[0]&16384&&(l.object=o[14]),u.$set(l);const E={};s[0]&1024&&(E.dispose=o[10]),s[0]&32768&&(E.object=o[15]),i.$set(E);const D={};s[0]&2&&(D.position=o[1]),s[0]&4&&(D.scale=o[2]),s[0]&8&&(D.rotation=o[3]),s[0]&8192&&(D.lookAt=o[13]),s[0]&134356977&&(D.$$scope={dirty:s,ctx:o}),r.$set(D)},i(o){t||(au(u.$$.fragment,o),au(i.$$.fragment,o),au(r.$$.fragment,o),t=!0)},o(o){su(u.$$.fragment,o),su(i.$$.fragment,o),su(r.$$.fragment,o),t=!1},d(o){Mu(u,o),o&&Au(e),Mu(i,o),o&&Au(n),Mu(r,o)}}}const o4=new v0;o4.scale.set(0,0,0);const bs={matrix:o4.matrix,color:null},Ym=new x0().fromArray(new Array(16).fill(0)),_r=new a0(16777215),s4="threlte-instanced-mesh-context",Qm=a=>Ce(s4+a);function Xm(a,u,e){let i,n=Iu,r=()=>(n(),n=Nn(j,P=>e(17,i=P)),j),t;a.$$.on_destroy.push(()=>n());let{$$slots:o={},$$scope:s}=u,{position:l=void 0}=u,{scale:E=void 0}=u,{rotation:D=void 0}=u,{viewportAware:x=!1}=u,{inViewport:c=!1}=u,{castShadow:p=void 0}=u,{receiveShadow:d=void 0}=u,{renderOrder:m=void 0}=u,{visible:h=void 0}=u,{userData:F=void 0}=u,{dispose:g=void 0}=u,{interactive:C=!1}=u,{ignorePointer:v=!1}=u,{lookAt:A=void 0}=u,{geometry:M}=u,{material:k}=u,{count:B=void 0}=u,{id:y=""}=u;const{onChange:L}=$m(k),N=P=>P===void 0,j=C0(new rs(M,k,N(B)?0:B));r();const T=new v0,S=[],{invalidate:J}=le(),O=(P,I)=>{const tu=S.findIndex(bu=>bu===P);if(tu===-1){console.warn("Instanced Mesh: Instance not found");return}I(tu)},{start:K,stop:Q,started:uu}=ya(()=>{i.dispose(),ce(j,i=new rs(M,k,S.length),i),S.forEach((P,I)=>{lu(P,I),P.color?i.setColorAt(I,P.color):i.setColorAt(I,_r)}),ce(j,i.instanceMatrix.needsUpdate=!0,i),i.instanceColor&&ce(j,i.instanceColor.needsUpdate=!0,i),Q()},{autostart:!1,debugFrameloopMessage:"Instanced Mesh: auto instance count change queued"});S0(a,uu,P=>e(29,t=P));const mu=P=>{if(N(B))S.push(P),t||K();else{const I=S.findIndex(tu=>tu===bs);I!==-1?S[I]=P:S.push(P),S.length>B&&console.warn("Instanced Mesh: More instances requested than allocated, increase count on <")}Z(P),J("Instanced Mesh: Instance added")},V=P=>{if(N(B)){const I=S.findIndex(tu=>tu===P);S.splice(I,1),t||K()}else{ou(P);const I=S.findIndex(tu=>tu===P);I>=B?S.splice(I,1):S.splice(I,1,bs)}J("Instanced Mesh: Instance removed")},Z=P=>{P.color||O(P,I=>{i.setColorAt(I,_r),i.instanceColor&&ce(j,i.instanceColor.needsUpdate=!0,i)})},ou=P=>{O(P,I=>{i.setMatrixAt(I,Ym),ce(j,i.instanceMatrix.needsUpdate=!0,i),J("Instanced Mesh: instance matrix resetted")})},lu=(P,I)=>{i.setMatrixAt(I,P.matrix),ce(j,i.instanceMatrix.needsUpdate=!0,i),J("Instanced Mesh: instance matrix set")},G=P=>{O(P,I=>{lu(P,I)})},ru=P=>{O(P,I=>{i.setColorAt(I,P.color??_r),i.instanceColor&&ce(j,i.instanceColor.needsUpdate=!0,i),J("Instanced Mesh: instance color set")})};te(s4+y,{registerInstance:mu,removeInstance:V,setInstanceMatrix:G,setInstanceColor:ru,parentObject:T});const vu=P=>{if(P.detail.instanceId===void 0)return;const I=S[P.detail.instanceId];I&&I.pointerEventDispatcher&&I.pointerEventDispatcher(P.type,P.detail)};function pu(P){c=P,e(0,c)}function xu(P){X0.call(this,a,P)}function Ju(P){X0.call(this,a,P)}return a.$$set=P=>{"position"in P&&e(1,l=P.position),"scale"in P&&e(2,E=P.scale),"rotation"in P&&e(3,D=P.rotation),"viewportAware"in P&&e(4,x=P.viewportAware),"inViewport"in P&&e(0,c=P.inViewport),"castShadow"in P&&e(5,p=P.castShadow),"receiveShadow"in P&&e(6,d=P.receiveShadow),"renderOrder"in P&&e(7,m=P.renderOrder),"visible"in P&&e(8,h=P.visible),"userData"in P&&e(9,F=P.userData),"dispose"in P&&e(10,g=P.dispose),"interactive"in P&&e(11,C=P.interactive),"ignorePointer"in P&&e(12,v=P.ignorePointer),"lookAt"in P&&e(13,A=P.lookAt),"geometry"in P&&e(14,M=P.geometry),"material"in P&&e(15,k=P.material),"count"in P&&e(21,B=P.count),"id"in P&&e(22,y=P.id),"$$scope"in P&&e(27,s=P.$$scope)},a.$$.update=()=>{a.$$.dirty[0]&32768&&L(k,P=>{ce(j,i.material=P,i)})},[c,l,E,D,x,p,d,m,h,F,g,C,v,A,M,k,j,i,T,uu,vu,B,y,o,pu,xu,Ju,s]}class u6 extends Xu{constructor(u){super(),Qu(this,u,Xm,Zm,$u,{position:1,scale:2,rotation:3,viewportAware:4,inViewport:0,castShadow:5,receiveShadow:6,renderOrder:7,visible:8,userData:9,dispose:10,interactive:11,ignorePointer:12,lookAt:13,geometry:14,material:15,count:21,id:22,instancedMesh:16},null,[-1,-1])}get instancedMesh(){return this.$$.ctx[16]}}function e6(a){let u;const e=a[8].default,i=be(e,a,a[9],null);return{c(){i&&i.c()},m(n,r){i&&i.m(n,r),u=!0},p(n,r){i&&i.p&&(!u||r&512)&&Be(i,e,n,n[9],u?Ae(e,n[9],r,null):ye(n[9]),null)},i(n){u||(au(i,n),u=!0)},o(n){su(i,n),u=!1},d(n){i&&i.d(n)}}}function a6(a){let u,e,i,n;return u=new Wn({props:{object:a[4],$$slots:{default:[e6]},$$scope:{ctx:a}}}),i=new r4({props:{object:a[4],position:a[0],scale:a[1],rotation:a[2],lookAt:a[3]}}),i.$on("transform",a[5]),{c(){ju(u.$$.fragment),e=fu(),ju(i.$$.fragment)},m(r,t){Su(u,r,t),Bu(r,e,t),Su(i,r,t),n=!0},p(r,[t]){const o={};t&512&&(o.$$scope={dirty:t,ctx:r}),u.$set(o);const s={};t&1&&(s.position=r[0]),t&2&&(s.scale=r[1]),t&4&&(s.rotation=r[2]),t&8&&(s.lookAt=r[3]),i.$set(s)},i(r){n||(au(u.$$.fragment,r),au(i.$$.fragment,r),n=!0)},o(r){su(u.$$.fragment,r),su(i.$$.fragment,r),n=!1},d(r){Mu(u,r),r&&Au(e),Mu(i,r)}}}function i6(a,u,e){let{$$slots:i={},$$scope:n}=u,{position:r=void 0}=u,{scale:t=void 0}=u,{rotation:o=void 0}=u,{lookAt:s=void 0}=u,{color:l=void 0}=u,{id:E=""}=u;const{registerInstance:D,setInstanceMatrix:x,removeInstance:c,setInstanceColor:p,parentObject:d}=Qm(E),m=new v0,h=new x0,F=Vi(),g=()=>{var N;return d.uuid===((N=m.parent)==null?void 0:N.uuid)},C=N=>N!==void 0?N instanceof a0?N:new a0(N):null,v={color:C(l),matrix:m.matrix,pointerEventDispatcher:F},A=N=>{v.color=C(N),p(v)},M=()=>{let N=m.parent;const j=[];for(;N&&d&&N.uuid!==d.uuid&&(j.push(N),!!N.parent);)N=N.parent;m.updateMatrix(),h.copy(m.matrix),j.forEach(T=>{T.updateMatrix(),h.premultiply(T.matrix)}),v.matrix=h},k=()=>{m.updateMatrix(),v.matrix=m.matrix},B=()=>{k(),x(v)},{start:y}=ya(()=>{M(),x(v)},{autostart:!1,debugFrameloopMessage:"Instance: tracking non-direct child instance"});D(v),xt(()=>{g()?B():y(),A(l)});const L=()=>{g()&&B()};return D0(()=>{c(v)}),a.$$set=N=>{"position"in N&&e(0,r=N.position),"scale"in N&&e(1,t=N.scale),"rotation"in N&&e(2,o=N.rotation),"lookAt"in N&&e(3,s=N.lookAt),"color"in N&&e(6,l=N.color),"id"in N&&e(7,E=N.id),"$$scope"in N&&e(9,n=N.$$scope)},a.$$.update=()=>{a.$$.dirty&64&&A(l)},[r,t,o,s,m,L,l,E,i,n]}class n6 extends Xu{constructor(u){super(),Qu(this,u,i6,a6,$u,{position:0,scale:1,rotation:2,lookAt:3,color:6,id:7})}}const l4=(a,u)=>{if(u.includes(".")){const e=u.split("."),i=e.pop();for(let n=0;n<e.length;n+=1)a=a[e[n]];return{target:a,key:i}}else return{target:a,key:u}},Lr=Symbol("initialValueBeforeAttach"),r6=()=>{const{invalidate:a}=le();let u=!1,e=Lr,i,n,r;const t=(s,l,E)=>{if(o(),!E){const D=s;((D==null?void 0:D.isMaterial)||!1)&&(E="material"),((D==null?void 0:D.isBufferGeometry)||(D==null?void 0:D.isGeometry)||!1)&&(E="geometry")}if(E){if(typeof E=="function")i=E(l,s);else{const{target:D,key:x}=l4(l,E);e=D[x],D[x]=s,n=D,r=x}u=!0,a()}},o=()=>{u&&(i?(i(),i=void 0):n&&r&&e!==Lr&&(n[r]=e,e=Lr,n=void 0,r=void 0),u=!1,a())};return D0(()=>{o()}),{update:t}},t6=a=>a&&a.isCamera,E4=a=>a&&a.isOrthographicCamera,D4=a=>a&&a.isPerspectiveCamera,o6=a=>D4(a)||E4(a),s6=()=>{const{invalidate:a,size:u}=le(),{setCamera:e}=jt();let i,n;D0(()=>{n==null||n()});const r=s=>{i&&(E4(i)?(i.left=s.width/-2,i.right=s.width/2,i.top=s.height/2,i.bottom=s.height/-2,i.updateProjectionMatrix(),i.updateMatrixWorld(),a()):D4(i)&&(i.aspect=s.width/s.height,i.updateProjectionMatrix(),i.updateMatrixWorld(),a()))};return{update:(s,l)=>{if(n==null||n(),l||!o6(s)){i=void 0;return}i=s,n=u.subscribe(r)},makeDefaultCamera:(s,l)=>{!t6(s)||!l||(e(s),a())}}},As=a=>!!(a!=null&&a.addEventListener),l6=()=>{const a=Vi(),u=ii(),e=x=>{x!=null&&x.type&&a(x.type,x)},i=(x,c)=>{As(x)&&c.forEach(p=>{x.removeEventListener(p,e)})},n=(x,c)=>{As(x)&&c.forEach(p=>{x.addEventListener(p,e)})};let r=[],t;const o=C0([]),s=o.subscribe(x=>{i(t,r),n(t,x),r=x});D0(s);const l=C0(),E=l.subscribe(x=>{i(t,r),n(x,r),t=x});return D0(E),D0(()=>{i(t,r)}),xt(()=>{o.set(Object.keys(u.$$.callbacks))}),{updateRef:x=>{l.set(x)}}},E6=["$$scope","$$slots","type","args","attach","instance"],D6=["fov","aspect","near","far","left","right","top","bottom","zoom"],x6=a=>typeof a=="string"||typeof a=="number"||typeof a=="boolean"||typeof a>"u"||a===null,c6=()=>{const{invalidate:a}=le(),u=new Map,e=(n,r,t,o)=>{var E,D;if(x6(t)){const x=u.get(r);if(x&&x.instance===n&&x.value===t)return;u.set(r,{instance:n,value:t})}const{key:s,target:l}=l4(n,r);if(!Array.isArray(t)&&typeof t=="number"&&typeof((E=l[s])==null?void 0:E.setScalar)=="function")l[s].setScalar(t);else if(typeof((D=l[s])==null?void 0:D.set)=="function")Array.isArray(t)?l[s].set(...t):l[s].set(t);else{if(l[s]=t,o.manualCamera)return;D6.includes(s)&&(l.isPerspectiveCamera||l.isOrthographicCamera)&&l.updateProjectionMatrix()}};return{updateProps:(n,r,t)=>{for(const o in r)E6.includes(o)||e(n,o,r[o],t),a()}}},d6=a=>({ref:a&1}),Bs=a=>({ref:a[0]}),m6=a=>({ref:a&1}),ys=a=>({ref:a[0]});function zs(a){let u,e;return u=new wn({props:{object:a[0],dispose:a[1]}}),{c(){ju(u.$$.fragment)},m(i,n){Su(u,i,n),e=!0},p(i,n){const r={};n&1&&(r.object=i[0]),n&2&&(r.dispose=i[1]),u.$set(r)},i(i){e||(au(u.$$.fragment,i),e=!0)},o(i){su(u.$$.fragment,i),e=!1},d(i){Mu(u,i)}}}function h6(a){let u;const e=a[12].default,i=be(e,a,a[13],Bs);return{c(){i&&i.c()},m(n,r){i&&i.m(n,r),u=!0},p(n,r){i&&i.p&&(!u||r&8193)&&Be(i,e,n,n[13],u?Ae(e,n[13],r,d6):ye(n[13]),Bs)},i(n){u||(au(i,n),u=!0)},o(n){su(i,n),u=!1},d(n){i&&i.d(n)}}}function p6(a){let u,e;return u=new Wn({props:{object:a[0],$$slots:{default:[F6]},$$scope:{ctx:a}}}),{c(){ju(u.$$.fragment)},m(i,n){Su(u,i,n),e=!0},p(i,n){const r={};n&1&&(r.object=i[0]),n&8193&&(r.$$scope={dirty:n,ctx:i}),u.$set(r)},i(i){e||(au(u.$$.fragment,i),e=!0)},o(i){su(u.$$.fragment,i),e=!1},d(i){Mu(u,i)}}}function F6(a){let u;const e=a[12].default,i=be(e,a,a[13],ys);return{c(){i&&i.c()},m(n,r){i&&i.m(n,r),u=!0},p(n,r){i&&i.p&&(!u||r&8193)&&Be(i,e,n,n[13],u?Ae(e,n[13],r,m6):ye(n[13]),ys)},i(n){u||(au(i,n),u=!0)},o(n){su(i,n),u=!1},d(n){i&&i.d(n)}}}function g6(a){let u=a[4](a[0]),e,i,n,r,t,o,s=u&&zs(a);const l=[p6,h6],E=[];function D(x,c){return c&1&&(i=null),i==null&&(i=!!x[3](x[0])),i?0:1}return n=D(a,-1),r=E[n]=l[n](a),{c(){s&&s.c(),e=fu(),r.c(),t=Dt()},m(x,c){s&&s.m(x,c),Bu(x,e,c),E[n].m(x,c),Bu(x,t,c),o=!0},p(x,[c]){c&1&&(u=x[4](x[0])),u?s?(s.p(x,c),c&1&&au(s,1)):(s=zs(x),s.c(),au(s,1),s.m(e.parentNode,e)):s&&(Fe(),su(s,1,1,()=>{s=null}),ge());let p=n;n=D(x,c),n===p?E[n].p(x,c):(Fe(),su(E[p],1,1,()=>{E[p]=null}),ge(),r=E[n],r?r.p(x,c):(r=E[n]=l[n](x),r.c()),au(r,1),r.m(t.parentNode,t))},i(x){o||(au(s),au(r),o=!0)},o(x){su(s),su(r),o=!1},d(x){s&&s.d(x),x&&Au(e),E[n].d(x),x&&Au(t)}}}function k6(a,u,e){const i=["type","args","attach","manual","makeDefault","dispose","ref"];let n=Gt(u,i),r,{$$slots:t={},$$scope:o}=u,{type:s}=u,{args:l=void 0}=u,{attach:E=void 0}=u,{manual:D=void 0}=u,{makeDefault:x=void 0}=u,{dispose:c=void 0}=u;const p=Ce("threlte-hierarchical-parent-context");S0(a,p,y=>e(11,r=y));const d=y=>typeof y=="function"&&/^\s*class\s+/.test(y.toString()),m=y=>Array.isArray(y);let{ref:h=d(s)&&m(l)?new s(...l):d(s)?new s:s}=u,F=!1;const g=C0(h);te("threlte-hierarchical-parent-context",g);const C=c6(),v=s6(),A=r6(),M=l6(),k=y=>!!y.isObject3D,B=y=>y.dispose!==void 0;return a.$$set=y=>{u=Hr(Hr({},u),e3(y)),e(21,n=Gt(u,i)),"type"in y&&e(5,s=y.type),"args"in y&&e(6,l=y.args),"attach"in y&&e(7,E=y.attach),"manual"in y&&e(8,D=y.manual),"makeDefault"in y&&e(9,x=y.makeDefault),"dispose"in y&&e(1,c=y.dispose),"ref"in y&&e(0,h=y.ref),"$$scope"in y&&e(13,o=y.$$scope)},a.$$.update=()=>{a.$$.dirty&1120&&(F?e(0,h=d(s)&&m(l)?new s(...l):d(s)?new s:s):e(10,F=!0)),a.$$.dirty&1&&g.set(h),C.updateProps(h,n,{manualCamera:D}),a.$$.dirty&257&&v.update(h,D),a.$$.dirty&513&&v.makeDefaultCamera(h,x),a.$$.dirty&2177&&A.update(h,r,E),a.$$.dirty&1&&M.updateRef(h)},[h,c,p,k,B,s,l,E,D,x,F,r,t,o]}class he extends Xu{constructor(u){super(),Qu(this,u,k6,g6,$u,{type:5,args:6,attach:7,manual:8,makeDefault:9,dispose:1,ref:0})}}function C6(a){return console.error("The component <T> can only be used in conjunction with the custom preprocessor."),[]}class Ss extends Xu{constructor(u){super(),Qu(this,u,C6,null,$u,{})}}new Proxy(Ss,{get(a,u){return a[u]||Ss}});Hm(Ds,()=>new Ds(X1));function Ms(a,u,e){const i=a.slice();return i[3]=u[e],i}function js(a){let u,e;return u=new n6({props:{position:a[3].position,rotation:a[3].rotation,scale:a[3].scale}}),{c(){ju(u.$$.fragment)},m(i,n){Su(u,i,n),e=!0},p(i,n){const r={};n&1&&(r.position=i[3].position),n&1&&(r.rotation=i[3].rotation),n&1&&(r.scale=i[3].scale),u.$set(r)},i(i){e||(au(u.$$.fragment,i),e=!0)},o(i){su(u.$$.fragment,i),e=!1},d(i){Mu(u,i)}}}function v6(a){let u,e,i=a[0],n=[];for(let t=0;t<i.length;t+=1)n[t]=js(Ms(a,i,t));const r=t=>su(n[t],1,1,()=>{n[t]=null});return{c(){for(let t=0;t<n.length;t+=1)n[t].c();u=Dt()},m(t,o){for(let s=0;s<n.length;s+=1)n[s].m(t,o);Bu(t,u,o),e=!0},p(t,o){if(o&1){i=t[0];let s;for(s=0;s<i.length;s+=1){const l=Ms(t,i,s);n[s]?(n[s].p(l,o),au(n[s],1)):(n[s]=js(l),n[s].c(),au(n[s],1),n[s].m(u.parentNode,u))}for(Fe(),s=i.length;s<n.length;s+=1)r(s);ge()}},i(t){if(!e){for(let o=0;o<i.length;o+=1)au(n[o]);e=!0}},o(t){n=n.filter(Boolean);for(let o=0;o<n.length;o+=1)su(n[o]);e=!1},d(t){m1(n,t),t&&Au(u)}}}function f6(a){let u,e;return u=new u6({props:{geometry:a[1].geometry,material:a[1].material,position:new _(5,0,0),$$slots:{default:[v6]},$$scope:{ctx:a}}}),{c(){ju(u.$$.fragment)},m(i,n){Su(u,i,n),e=!0},p(i,[n]){const r={};n&65&&(r.$$scope={dirty:n,ctx:i}),u.$set(r)},i(i){e||(au(u.$$.fragment,i),e=!0)},o(i){su(u.$$.fragment,i),e=!1},d(i){Mu(u,i)}}}const b6=50,A6=.3;function B6(a,u,e){const i=new I0(new si(1),new Ji({color:"white",wireframe:!0})),n=t=>{const o=new du(-120,120),s=new du(-120,120),l=new du(-350,5);t.position.set(Math.floor(Math.random()*(o.x-o.y+1)+o.y),Math.floor(Math.random()*(s.x-s.y+1)+s.y),Math.floor(Math.random()*(l.x-l.y+1)+l.y))},r=[];for(let t=0;t<b6;t++){const o=i.clone();n(o),r.push(o)}return ya(t=>{r.forEach((o,s)=>{for(o.rotation.x+=.01,o.rotation.y+=.005,o.rotation.z+=.01;o.position.z>1;){n(o);return}o.position.z+=A6,e(0,r[s]=o,r)})}),[r,i]}class y6 extends Xu{constructor(u){super(),Qu(this,u,B6,f6,$u,{})}}class z6 extends yt{constructor(u,e={}){const i=e.font;if(i===void 0)super();else{const n=i.generateShapes(u,e.size);e.depth=e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(n,e)}this.type="TextGeometry"}}class S6 extends Jn{constructor(u){super(u)}load(u,e,i,n){const r=this,t=new Id(this.manager);t.setPath(this.path),t.setRequestHeader(this.requestHeader),t.setWithCredentials(this.withCredentials),t.load(u,function(o){const s=r.parse(JSON.parse(o));e&&e(s)},i,n)}parse(u){return new M6(u)}}class M6{constructor(u){this.isFont=!0,this.type="Font",this.data=u}generateShapes(u,e=100){const i=[],n=j6(u,e,this.data);for(let r=0,t=n.length;r<t;r++)i.push(...n[r].toShapes());return i}}function j6(a,u,e){const i=Array.from(a),n=u/e.resolution,r=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*n,t=[];let o=0,s=0;for(let l=0;l<i.length;l++){const E=i[l];if(E===`
`)o=0,s-=r;else{const D=P6(E,n,o,s,e);o+=D.offsetX,t.push(D.path)}}return t}function P6(a,u,e,i,n){const r=n.glyphs[a]||n.glyphs["?"];if(!r){console.error('THREE.Font: character "'+a+'" does not exists in font family '+n.familyName+".");return}const t=new $d;let o,s,l,E,D,x,c,p;if(r.o){const d=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let m=0,h=d.length;m<h;)switch(d[m++]){case"m":o=d[m++]*u+e,s=d[m++]*u+i,t.moveTo(o,s);break;case"l":o=d[m++]*u+e,s=d[m++]*u+i,t.lineTo(o,s);break;case"q":l=d[m++]*u+e,E=d[m++]*u+i,D=d[m++]*u+e,x=d[m++]*u+i,t.quadraticCurveTo(D,x,l,E);break;case"b":l=d[m++]*u+e,E=d[m++]*u+i,D=d[m++]*u+e,x=d[m++]*u+i,c=d[m++]*u+e,p=d[m++]*u+i,t.bezierCurveTo(D,x,c,p,l,E);break}}return{offsetX:r.ha*u,path:t}}function Ps(a){let u,e;return u=new he({props:{type:Xe,position:[0,0,0],$$slots:{default:[T6]},$$scope:{ctx:a}}}),{c(){ju(u.$$.fragment)},m(i,n){Su(u,i,n),e=!0},p(i,n){const r={};n&257&&(r.$$scope={dirty:n,ctx:i}),u.$set(r)},i(i){e||(au(u.$$.fragment,i),e=!0)},o(i){su(u.$$.fragment,i),e=!1},d(i){Mu(u,i)}}}function T6(a){let u,e;return u=new he({props:{type:I0,geometry:a[0].geometry,material:a[0].material,position:a[0].position.toArray()}}),{c(){ju(u.$$.fragment)},m(i,n){Su(u,i,n),e=!0},p(i,n){const r={};n&1&&(r.geometry=i[0].geometry),n&1&&(r.material=i[0].material),n&1&&(r.position=i[0].position.toArray()),u.$set(r)},i(i){e||(au(u.$$.fragment,i),e=!0)},o(i){su(u.$$.fragment,i),e=!1},d(i){Mu(u,i)}}}function w6(a){let u,e,i=a[0]&&Ps(a);return{c(){i&&i.c(),u=Dt()},m(n,r){i&&i.m(n,r),Bu(n,u,r),e=!0},p(n,[r]){n[0]?i?(i.p(n,r),r&1&&au(i,1)):(i=Ps(n),i.c(),au(i,1),i.m(u.parentNode,u)):i&&(Fe(),su(i,1,1,()=>{i=null}),ge())},i(n){e||(au(i),e=!0)},o(n){su(i),e=!1},d(n){i&&i.d(n),n&&Au(u)}}}function _6(a,u,e){let i,{textHeight:n=.05}=u,{textSize:r=.6}=u,{text:t}=u,{lookAtCamera:o=!1}=u;const s=new S6;let l,{camera:E}=le();return S0(a,E,D=>e(6,i=D)),o&&ya(D=>{l&&l.lookAt(i.position)}),a.$$set=D=>{"textHeight"in D&&e(2,n=D.textHeight),"textSize"in D&&e(3,r=D.textSize),"text"in D&&e(4,t=D.text),"lookAtCamera"in D&&e(5,o=D.lookAtCamera)},a.$$.update=()=>{a.$$.dirty&29&&t&&s.load("/Roboto_Regular.json",D=>{e(0,l=new I0(new z6(t,{font:D,size:r,height:n}),[new Es({color:"white"}),new Es({color:"white"})]));let x=new _,c=new _,p=new ti().setFromObject(l);p.getCenter(x),p.getSize(c);var d=Math.max(c.x,c.y,c.z);l.scale.multiplyScalar(1/d),e(0,l.position.x=-x.x,l),e(0,l.position.y=0,l),e(0,l.position.z=-x.z,l),e(0,l),e(4,t),e(3,r),e(2,n)})},[l,E,n,r,t,o]}class Pt extends Xu{constructor(u){super(),Qu(this,u,_6,w6,$u,{textHeight:2,textSize:3,text:4,lookAtCamera:5})}}const Ts=[{phrase:"look who's here..."},{phrase:"i missed you..."},{phrase:"where am i???"},{phrase:"i meant to do that..."},{phrase:"oh, it's just you..."},{phrase:"gas pedal... gas pedal..."},{phrase:"who let you in here..."}],L6={uniforms:{damp:{value:.96},tOld:{value:null},tNew:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float damp;

		uniform sampler2D tOld;
		uniform sampler2D tNew;

		varying vec2 vUv;

		vec4 when_gt( vec4 x, float y ) {

			return max( sign( x - y ), 0.0 );

		}

		void main() {

			vec4 texelOld = texture2D( tOld, vUv );
			vec4 texelNew = texture2D( tNew, vUv );

			texelOld *= damp * when_gt( texelOld, 0.1 );

			gl_FragColor = max(texelNew, texelOld);

		}`};class R6 extends Ei{constructor(u=.96){super(),this.shader=L6,this.uniforms=kt.clone(this.shader.uniforms),this.uniforms.damp.value=u,this.textureComp=new se(window.innerWidth,window.innerHeight,{magFilter:h0}),this.textureOld=new se(window.innerWidth,window.innerHeight,{magFilter:h0}),this.compFsMaterial=new ve({uniforms:this.uniforms,vertexShader:this.shader.vertexShader,fragmentShader:this.shader.fragmentShader}),this.compFsQuad=new Tn(this.compFsMaterial),this.copyFsMaterial=new Ji,this.copyFsQuad=new Tn(this.copyFsMaterial)}render(u,e,i){this.uniforms.tOld.value=this.textureOld.texture,this.uniforms.tNew.value=i.texture,u.setRenderTarget(this.textureComp),this.compFsQuad.render(u),this.copyFsQuad.material.map=this.textureComp.texture,this.renderToScreen?(u.setRenderTarget(null),this.copyFsQuad.render(u)):(u.setRenderTarget(e),this.clear&&u.clear(),this.copyFsQuad.render(u));const n=this.textureOld;this.textureOld=this.textureComp,this.textureComp=n}setSize(u,e){this.textureComp.setSize(u,e),this.textureOld.setSize(u,e)}dispose(){this.textureComp.dispose(),this.textureOld.dispose(),this.compFsMaterial.dispose(),this.copyFsMaterial.dispose(),this.compFsQuad.dispose(),this.copyFsQuad.dispose()}}class ws extends Ei{constructor(u,e,i,n={}){super(),this.pixelSize=u,this.resolution=new du,this.renderResolution=new du,this.pixelatedMaterial=this.createPixelatedMaterial(),this.normalMaterial=new Hd,this.fsQuad=new Tn(this.pixelatedMaterial),this.scene=e,this.camera=i,this.normalEdgeStrength=n.normalEdgeStrength||.3,this.depthEdgeStrength=n.depthEdgeStrength||.4,this.beautyRenderTarget=new se,this.beautyRenderTarget.texture.minFilter=h0,this.beautyRenderTarget.texture.magFilter=h0,this.beautyRenderTarget.depthTexture=new I1,this.normalRenderTarget=new se,this.normalRenderTarget.texture.minFilter=h0,this.normalRenderTarget.texture.magFilter=h0}dispose(){this.beautyRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.pixelatedMaterial.dispose(),this.normalMaterial.dispose(),this.fsQuad.dispose()}setSize(u,e){this.resolution.set(u,e),this.renderResolution.set(u/this.pixelSize|0,e/this.pixelSize|0);const{x:i,y:n}=this.renderResolution;this.beautyRenderTarget.setSize(i,n),this.normalRenderTarget.setSize(i,n),this.fsQuad.material.uniforms.resolution.value.set(i,n,1/i,1/n)}setPixelSize(u){this.pixelSize=u,this.setSize(this.resolution.x,this.resolution.y)}render(u,e){const i=this.fsQuad.material.uniforms;i.normalEdgeStrength.value=this.normalEdgeStrength,i.depthEdgeStrength.value=this.depthEdgeStrength,u.setRenderTarget(this.beautyRenderTarget),u.render(this.scene,this.camera);const n=this.scene.overrideMaterial;u.setRenderTarget(this.normalRenderTarget),this.scene.overrideMaterial=this.normalMaterial,u.render(this.scene,this.camera),this.scene.overrideMaterial=n,i.tDiffuse.value=this.beautyRenderTarget.texture,i.tDepth.value=this.beautyRenderTarget.depthTexture,i.tNormal.value=this.normalRenderTarget.texture,this.renderToScreen?u.setRenderTarget(null):(u.setRenderTarget(e),this.clear&&u.clear()),this.fsQuad.render(u)}createPixelatedMaterial(){return new ve({uniforms:{tDiffuse:{value:null},tDepth:{value:null},tNormal:{value:null},resolution:{value:new M0(this.renderResolution.x,this.renderResolution.y,1/this.renderResolution.x,1/this.renderResolution.y)},normalEdgeStrength:{value:0},depthEdgeStrength:{value:0}},vertexShader:`
				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`
				uniform sampler2D tDiffuse;
				uniform sampler2D tDepth;
				uniform sampler2D tNormal;
				uniform vec4 resolution;
				uniform float normalEdgeStrength;
				uniform float depthEdgeStrength;
				varying vec2 vUv;

				float getDepth(int x, int y) {

					return texture2D( tDepth, vUv + vec2(x, y) * resolution.zw ).r;

				}

				vec3 getNormal(int x, int y) {

					return texture2D( tNormal, vUv + vec2(x, y) * resolution.zw ).rgb * 2.0 - 1.0;

				}

				float depthEdgeIndicator(float depth, vec3 normal) {

					float diff = 0.0;
					diff += clamp(getDepth(1, 0) - depth, 0.0, 1.0);
					diff += clamp(getDepth(-1, 0) - depth, 0.0, 1.0);
					diff += clamp(getDepth(0, 1) - depth, 0.0, 1.0);
					diff += clamp(getDepth(0, -1) - depth, 0.0, 1.0);
					return floor(smoothstep(0.01, 0.02, diff) * 2.) / 2.;

				}

				float neighborNormalEdgeIndicator(int x, int y, float depth, vec3 normal) {

					float depthDiff = getDepth(x, y) - depth;
					vec3 neighborNormal = getNormal(x, y);

					// Edge pixels should yield to faces who's normals are closer to the bias normal.
					vec3 normalEdgeBias = vec3(1., 1., 1.); // This should probably be a parameter.
					float normalDiff = dot(normal - neighborNormal, normalEdgeBias);
					float normalIndicator = clamp(smoothstep(-.01, .01, normalDiff), 0.0, 1.0);

					// Only the shallower pixel should detect the normal edge.
					float depthIndicator = clamp(sign(depthDiff * .25 + .0025), 0.0, 1.0);

					return (1.0 - dot(normal, neighborNormal)) * depthIndicator * normalIndicator;

				}

				float normalEdgeIndicator(float depth, vec3 normal) {

					float indicator = 0.0;

					indicator += neighborNormalEdgeIndicator(0, -1, depth, normal);
					indicator += neighborNormalEdgeIndicator(0, 1, depth, normal);
					indicator += neighborNormalEdgeIndicator(-1, 0, depth, normal);
					indicator += neighborNormalEdgeIndicator(1, 0, depth, normal);

					return step(0.1, indicator);

				}

				void main() {

					vec4 texel = texture2D( tDiffuse, vUv );

					float depth = 0.0;
					vec3 normal = vec3(0.0);

					if (depthEdgeStrength > 0.0 || normalEdgeStrength > 0.0) {

						depth = getDepth(0, 0);
						normal = getNormal(0, 0);

					}

					float dei = 0.0;
					if (depthEdgeStrength > 0.0)
						dei = depthEdgeIndicator(depth, normal);

					float nei = 0.0;
					if (normalEdgeStrength > 0.0)
						nei = normalEdgeIndicator(depth, normal);

					float Strength = dei > 0.0 ? (1.0 - depthEdgeStrength * dei) : (1.0 + normalEdgeStrength * nei);

					gl_FragColor = texel * Strength;

				}
			`})}}function K6(a){let u,e,i,n;return u=new he({props:{type:zt,args:[1,6,6]}}),i=new he({props:{type:Ji,wireframe:!0,color:"#1f1f1f"}}),{c(){ju(u.$$.fragment),e=fu(),ju(i.$$.fragment)},m(r,t){Su(u,r,t),Bu(r,e,t),Su(i,r,t),n=!0},p:Iu,i(r){n||(au(u.$$.fragment,r),au(i.$$.fragment,r),n=!0)},o(r){su(u.$$.fragment,r),su(i.$$.fragment,r),n=!1},d(r){Mu(u,r),r&&Au(e),Mu(i,r)}}}function N6(a){let u,e;return u=new Pt({props:{text:a[0]}}),{c(){ju(u.$$.fragment)},m(i,n){Su(u,i,n),e=!0},p(i,n){const r={};n&1&&(r.text=i[0]),u.$set(r)},i(i){e||(au(u.$$.fragment,i),e=!0)},o(i){su(u.$$.fragment,i),e=!1},d(i){Mu(u,i)}}}function H6(a){let u,e;return u=new Pt({props:{text:"V",lookAtCamera:!0,textHeight:.03,textSize:.2}}),{c(){ju(u.$$.fragment)},m(i,n){Su(u,i,n),e=!0},p:Iu,i(i){e||(au(u.$$.fragment,i),e=!0)},o(i){su(u.$$.fragment,i),e=!1},d(i){Mu(u,i)}}}function G6(a){let u,e,i,n;return u=new Pt({props:{text:"scroll for portfolio",lookAtCamera:!0,textHeight:.05,textSize:.3}}),i=new he({props:{type:Xe,position:[0,-.75,0],lookAt:a[3].position,$$slots:{default:[H6]},$$scope:{ctx:a}}}),{c(){ju(u.$$.fragment),e=fu(),ju(i.$$.fragment)},m(r,t){Su(u,r,t),Bu(r,e,t),Su(i,r,t),n=!0},p(r,t){const o={};t&8&&(o.lookAt=r[3].position),t&1024&&(o.$$scope={dirty:t,ctx:r}),i.$set(o)},i(r){n||(au(u.$$.fragment,r),au(i.$$.fragment,r),n=!0)},o(r){su(u.$$.fragment,r),su(i.$$.fragment,r),n=!1},d(r){Mu(u,r),r&&Au(e),Mu(i,r)}}}function V6(a){let u,e,i,n,r,t,o,s,l,E,D,x,c,p,d,m;return u=new vs({props:{pass:new R6(2)}}),i=new vs({props:{pass:new ws(1.5,a[4],a[3])}}),r=new he({props:{type:I0,scale:a[6].toArray(),position:a[7].toArray(),rotation:a[2].toArray(),$$slots:{default:[K6]},$$scope:{ctx:a}}}),o=new he({props:{type:ue,fov:50,primary:!0}}),l=new he({props:{type:Wd,color:16777215}}),D=new he({props:{type:Xe,position:[0,0,0],$$slots:{default:[N6]},$$scope:{ctx:a}}}),c=new he({props:{type:Xe,position:[0,-2+a[1],0],$$slots:{default:[G6]},$$scope:{ctx:a}}}),d=new y6({}),{c(){ju(u.$$.fragment),e=fu(),ju(i.$$.fragment),n=fu(),ju(r.$$.fragment),t=fu(),ju(o.$$.fragment),s=fu(),ju(l.$$.fragment),E=fu(),ju(D.$$.fragment),x=fu(),ju(c.$$.fragment),p=fu(),ju(d.$$.fragment)},m(h,F){Su(u,h,F),Bu(h,e,F),Su(i,h,F),Bu(h,n,F),Su(r,h,F),Bu(h,t,F),Su(o,h,F),Bu(h,s,F),Su(l,h,F),Bu(h,E,F),Su(D,h,F),Bu(h,x,F),Su(c,h,F),Bu(h,p,F),Su(d,h,F),m=!0},p(h,F){const g={};F&8&&(g.pass=new ws(1.5,h[4],h[3])),i.$set(g);const C={};F&4&&(C.rotation=h[2].toArray()),F&1024&&(C.$$scope={dirty:F,ctx:h}),r.$set(C);const v={};F&1025&&(v.$$scope={dirty:F,ctx:h}),D.$set(v);const A={};F&2&&(A.position=[0,-2+h[1],0]),F&1032&&(A.$$scope={dirty:F,ctx:h}),c.$set(A)},i(h){m||(au(u.$$.fragment,h),au(i.$$.fragment,h),au(r.$$.fragment,h),au(o.$$.fragment,h),au(l.$$.fragment,h),au(D.$$.fragment,h),au(c.$$.fragment,h),au(d.$$.fragment,h),m=!0)},o(h){su(u.$$.fragment,h),su(i.$$.fragment,h),su(r.$$.fragment,h),su(o.$$.fragment,h),su(l.$$.fragment,h),su(D.$$.fragment,h),su(c.$$.fragment,h),su(d.$$.fragment,h),m=!1},d(h){Mu(u,h),h&&Au(e),Mu(i,h),h&&Au(n),Mu(r,h),h&&Au(t),Mu(o,h),h&&Au(s),Mu(l,h),h&&Au(E),Mu(D,h),h&&Au(x),Mu(c,h),h&&Au(p),Mu(d,h)}}}function I6(a){let u,e;return u=new he({props:{type:O1,$$slots:{default:[V6]},$$scope:{ctx:a}}}),{c(){ju(u.$$.fragment)},m(i,n){Su(u,i,n),e=!0},p(i,[n]){const r={};n&1039&&(r.$$scope={dirty:n,ctx:i}),u.$set(r)},i(i){e||(au(u.$$.fragment,i),e=!0)},o(i){su(u.$$.fragment,i),e=!1},d(i){Mu(u,i)}}}function J6(a,u,e){let i;const{renderer:n,scene:r,camera:t}=le();S0(a,t,x=>e(3,i=x));let o=Ts[Math.floor(Math.random()*Ts.length)].phrase.toLowerCase();setInterval(()=>{e(0,o=o.endsWith("|")?o.slice(0,-1):o+"|")},1e3);let s=0;setInterval(()=>{e(1,s=s===0?.1:0)},300);let l=new _(75,75,50),E=new _(0,0,0),D=new _(0,0,0);return setInterval(()=>{e(2,D.x+=.001,D),e(2,D.y+=.001,D),e(2,D.z+=.001,D)},1e3/60),[o,s,D,i,r,t,l,E]}class O6 extends Xu{constructor(u){super(),Qu(this,u,J6,I6,$u,{})}}var _n={},W6={get exports(){return _n},set exports(a){_n=a}};(function(a){var u={};u.useBlobBuilder=function(){try{return new Blob([]),!1}catch{return!0}}(),u.useArrayBufferView=!u.useBlobBuilder&&function(){try{return new Blob([new Uint8Array([])]).size===0}catch{return!0}}(),a.exports.binaryFeatures=u;var e=a.exports.BlobBuilder;typeof window<"u"&&(e=a.exports.BlobBuilder=window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder||window.BlobBuilder);function i(){this._pieces=[],this._parts=[]}i.prototype.append=function(n){typeof n=="number"?this._pieces.push(n):(this.flush(),this._parts.push(n))},i.prototype.flush=function(){if(this._pieces.length>0){var n=new Uint8Array(this._pieces);u.useArrayBufferView||(n=n.buffer),this._parts.push(n),this._pieces=[]}},i.prototype.getBuffer=function(){if(this.flush(),u.useBlobBuilder){for(var n=new e,r=0,t=this._parts.length;r<t;r++)n.append(this._parts[r]);return n.getBlob()}else return new Blob(this._parts)},a.exports.BufferBuilder=i})(W6);var U6=_n.BufferBuilder,_s=_n.binaryFeatures,$6={unpack:function(a){var u=new T0(a);return u.unpack()},pack:function(a){var u=new w0;u.pack(a);var e=u.getBuffer();return e}},Ls=$6;function T0(a){this.index=0,this.dataBuffer=a,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}T0.prototype.unpack=function(){var a=this.unpack_uint8();if(a<128)return a;if((a^224)<32)return(a^224)-32;var u;if((u=a^160)<=15)return this.unpack_raw(u);if((u=a^176)<=15)return this.unpack_string(u);if((u=a^144)<=15)return this.unpack_array(u);if((u=a^128)<=15)return this.unpack_map(u);switch(a){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return u=this.unpack_uint16(),this.unpack_string(u);case 217:return u=this.unpack_uint32(),this.unpack_string(u);case 218:return u=this.unpack_uint16(),this.unpack_raw(u);case 219:return u=this.unpack_uint32(),this.unpack_raw(u);case 220:return u=this.unpack_uint16(),this.unpack_array(u);case 221:return u=this.unpack_uint32(),this.unpack_array(u);case 222:return u=this.unpack_uint16(),this.unpack_map(u);case 223:return u=this.unpack_uint32(),this.unpack_map(u)}};T0.prototype.unpack_uint8=function(){var a=this.dataView[this.index]&255;return this.index++,a};T0.prototype.unpack_uint16=function(){var a=this.read(2),u=(a[0]&255)*256+(a[1]&255);return this.index+=2,u};T0.prototype.unpack_uint32=function(){var a=this.read(4),u=((a[0]*256+a[1])*256+a[2])*256+a[3];return this.index+=4,u};T0.prototype.unpack_uint64=function(){var a=this.read(8),u=((((((a[0]*256+a[1])*256+a[2])*256+a[3])*256+a[4])*256+a[5])*256+a[6])*256+a[7];return this.index+=8,u};T0.prototype.unpack_int8=function(){var a=this.unpack_uint8();return a<128?a:a-(1<<8)};T0.prototype.unpack_int16=function(){var a=this.unpack_uint16();return a<32768?a:a-(1<<16)};T0.prototype.unpack_int32=function(){var a=this.unpack_uint32();return a<Math.pow(2,31)?a:a-Math.pow(2,32)};T0.prototype.unpack_int64=function(){var a=this.unpack_uint64();return a<Math.pow(2,63)?a:a-Math.pow(2,64)};T0.prototype.unpack_raw=function(a){if(this.length<this.index+a)throw new Error("BinaryPackFailure: index is out of range "+this.index+" "+a+" "+this.length);var u=this.dataBuffer.slice(this.index,this.index+a);return this.index+=a,u};T0.prototype.unpack_string=function(a){for(var u=this.read(a),e=0,i="",n,r;e<a;)n=u[e],n<128?(i+=String.fromCharCode(n),e++):(n^192)<32?(r=(n^192)<<6|u[e+1]&63,i+=String.fromCharCode(r),e+=2):(r=(n&15)<<12|(u[e+1]&63)<<6|u[e+2]&63,i+=String.fromCharCode(r),e+=3);return this.index+=a,i};T0.prototype.unpack_array=function(a){for(var u=new Array(a),e=0;e<a;e++)u[e]=this.unpack();return u};T0.prototype.unpack_map=function(a){for(var u={},e=0;e<a;e++){var i=this.unpack(),n=this.unpack();u[i]=n}return u};T0.prototype.unpack_float=function(){var a=this.unpack_uint32(),u=a>>31,e=(a>>23&255)-127,i=a&8388607|8388608;return(u===0?1:-1)*i*Math.pow(2,e-23)};T0.prototype.unpack_double=function(){var a=this.unpack_uint32(),u=this.unpack_uint32(),e=a>>31,i=(a>>20&2047)-1023,n=a&1048575|1048576,r=n*Math.pow(2,i-20)+u*Math.pow(2,i-52);return(e===0?1:-1)*r};T0.prototype.read=function(a){var u=this.index;if(u+a<=this.length)return this.dataView.subarray(u,u+a);throw new Error("BinaryPackFailure: read index out of range")};function w0(){this.bufferBuilder=new U6}w0.prototype.getBuffer=function(){return this.bufferBuilder.getBuffer()};w0.prototype.pack=function(a){var u=typeof a;if(u==="string")this.pack_string(a);else if(u==="number")Math.floor(a)===a?this.pack_integer(a):this.pack_double(a);else if(u==="boolean")a===!0?this.bufferBuilder.append(195):a===!1&&this.bufferBuilder.append(194);else if(u==="undefined")this.bufferBuilder.append(192);else if(u==="object")if(a===null)this.bufferBuilder.append(192);else{var e=a.constructor;if(e==Array)this.pack_array(a);else if(e==Blob||e==File||a instanceof Blob||a instanceof File)this.pack_bin(a);else if(e==ArrayBuffer)_s.useArrayBufferView?this.pack_bin(new Uint8Array(a)):this.pack_bin(a);else if("BYTES_PER_ELEMENT"in a)_s.useArrayBufferView?this.pack_bin(new Uint8Array(a.buffer)):this.pack_bin(a.buffer);else if(e==Object||e.toString().startsWith("class"))this.pack_object(a);else if(e==Date)this.pack_string(a.toString());else if(typeof a.toBinaryPack=="function")this.bufferBuilder.append(a.toBinaryPack());else throw new Error('Type "'+e.toString()+'" not yet supported')}else throw new Error('Type "'+u+'" not yet supported');this.bufferBuilder.flush()};w0.prototype.pack_bin=function(a){var u=a.length||a.byteLength||a.size;if(u<=15)this.pack_uint8(160+u);else if(u<=65535)this.bufferBuilder.append(218),this.pack_uint16(u);else if(u<=4294967295)this.bufferBuilder.append(219),this.pack_uint32(u);else throw new Error("Invalid length");this.bufferBuilder.append(a)};w0.prototype.pack_string=function(a){var u=Z6(a);if(u<=15)this.pack_uint8(176+u);else if(u<=65535)this.bufferBuilder.append(216),this.pack_uint16(u);else if(u<=4294967295)this.bufferBuilder.append(217),this.pack_uint32(u);else throw new Error("Invalid length");this.bufferBuilder.append(a)};w0.prototype.pack_array=function(a){var u=a.length;if(u<=15)this.pack_uint8(144+u);else if(u<=65535)this.bufferBuilder.append(220),this.pack_uint16(u);else if(u<=4294967295)this.bufferBuilder.append(221),this.pack_uint32(u);else throw new Error("Invalid length");for(var e=0;e<u;e++)this.pack(a[e])};w0.prototype.pack_integer=function(a){if(a>=-32&&a<=127)this.bufferBuilder.append(a&255);else if(a>=0&&a<=255)this.bufferBuilder.append(204),this.pack_uint8(a);else if(a>=-128&&a<=127)this.bufferBuilder.append(208),this.pack_int8(a);else if(a>=0&&a<=65535)this.bufferBuilder.append(205),this.pack_uint16(a);else if(a>=-32768&&a<=32767)this.bufferBuilder.append(209),this.pack_int16(a);else if(a>=0&&a<=4294967295)this.bufferBuilder.append(206),this.pack_uint32(a);else if(a>=-2147483648&&a<=2147483647)this.bufferBuilder.append(210),this.pack_int32(a);else if(a>=-9223372036854776e3&&a<=9223372036854776e3)this.bufferBuilder.append(211),this.pack_int64(a);else if(a>=0&&a<=18446744073709552e3)this.bufferBuilder.append(207),this.pack_uint64(a);else throw new Error("Invalid integer")};w0.prototype.pack_double=function(a){var u=0;a<0&&(u=1,a=-a);var e=Math.floor(Math.log(a)/Math.LN2),i=a/Math.pow(2,e)-1,n=Math.floor(i*Math.pow(2,52)),r=Math.pow(2,32),t=u<<31|e+1023<<20|n/r&1048575,o=n%r;this.bufferBuilder.append(203),this.pack_int32(t),this.pack_int32(o)};w0.prototype.pack_object=function(a){var u=Object.keys(a),e=u.length;if(e<=15)this.pack_uint8(128+e);else if(e<=65535)this.bufferBuilder.append(222),this.pack_uint16(e);else if(e<=4294967295)this.bufferBuilder.append(223),this.pack_uint32(e);else throw new Error("Invalid length");for(var i in a)a.hasOwnProperty(i)&&(this.pack(i),this.pack(a[i]))};w0.prototype.pack_uint8=function(a){this.bufferBuilder.append(a)};w0.prototype.pack_uint16=function(a){this.bufferBuilder.append(a>>8),this.bufferBuilder.append(a&255)};w0.prototype.pack_uint32=function(a){var u=a&4294967295;this.bufferBuilder.append((u&4278190080)>>>24),this.bufferBuilder.append((u&16711680)>>>16),this.bufferBuilder.append((u&65280)>>>8),this.bufferBuilder.append(u&255)};w0.prototype.pack_uint64=function(a){var u=a/Math.pow(2,32),e=a%Math.pow(2,32);this.bufferBuilder.append((u&4278190080)>>>24),this.bufferBuilder.append((u&16711680)>>>16),this.bufferBuilder.append((u&65280)>>>8),this.bufferBuilder.append(u&255),this.bufferBuilder.append((e&4278190080)>>>24),this.bufferBuilder.append((e&16711680)>>>16),this.bufferBuilder.append((e&65280)>>>8),this.bufferBuilder.append(e&255)};w0.prototype.pack_int8=function(a){this.bufferBuilder.append(a&255)};w0.prototype.pack_int16=function(a){this.bufferBuilder.append((a&65280)>>8),this.bufferBuilder.append(a&255)};w0.prototype.pack_int32=function(a){this.bufferBuilder.append(a>>>24&255),this.bufferBuilder.append((a&16711680)>>>16),this.bufferBuilder.append((a&65280)>>>8),this.bufferBuilder.append(a&255)};w0.prototype.pack_int64=function(a){var u=Math.floor(a/Math.pow(2,32)),e=a%Math.pow(2,32);this.bufferBuilder.append((u&4278190080)>>>24),this.bufferBuilder.append((u&16711680)>>>16),this.bufferBuilder.append((u&65280)>>>8),this.bufferBuilder.append(u&255),this.bufferBuilder.append((e&4278190080)>>>24),this.bufferBuilder.append((e&16711680)>>>16),this.bufferBuilder.append((e&65280)>>>8),this.bufferBuilder.append(e&255)};function q6(a){var u=a.charCodeAt(0);return u<=2047?"00":u<=65535?"000":u<=2097151?"0000":u<=67108863?"00000":"000000"}function Z6(a){return a.length>600?new Blob([a]).size:a.replace(/[^\u0000-\u007F]/g,q6).length}let x4=!0,c4=!0;function Ai(a,u,e){const i=a.match(u);return i&&i.length>=e&&parseInt(i[e],10)}function Di(a,u,e){if(!a.RTCPeerConnection)return;const i=a.RTCPeerConnection.prototype,n=i.addEventListener;i.addEventListener=function(t,o){if(t!==u)return n.apply(this,arguments);const s=l=>{const E=e(l);E&&(o.handleEvent?o.handleEvent(E):o(E))};return this._eventMap=this._eventMap||{},this._eventMap[u]||(this._eventMap[u]=new Map),this._eventMap[u].set(o,s),n.apply(this,[t,s])};const r=i.removeEventListener;i.removeEventListener=function(t,o){if(t!==u||!this._eventMap||!this._eventMap[u])return r.apply(this,arguments);if(!this._eventMap[u].has(o))return r.apply(this,arguments);const s=this._eventMap[u].get(o);return this._eventMap[u].delete(o),this._eventMap[u].size===0&&delete this._eventMap[u],Object.keys(this._eventMap).length===0&&delete this._eventMap,r.apply(this,[t,s])},Object.defineProperty(i,"on"+u,{get(){return this["_on"+u]},set(t){this["_on"+u]&&(this.removeEventListener(u,this["_on"+u]),delete this["_on"+u]),t&&this.addEventListener(u,this["_on"+u]=t)},enumerable:!0,configurable:!0})}function Y6(a){return typeof a!="boolean"?new Error("Argument type: "+typeof a+". Please use a boolean."):(x4=a,a?"adapter.js logging disabled":"adapter.js logging enabled")}function Q6(a){return typeof a!="boolean"?new Error("Argument type: "+typeof a+". Please use a boolean."):(c4=!a,"adapter.js deprecation warnings "+(a?"disabled":"enabled"))}function Tt(){if(typeof window=="object"){if(x4)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function Un(a,u){c4&&console.warn(a+" is deprecated, please use "+u+" instead.")}function X6(a){const u={browser:null,version:null};if(typeof a>"u"||!a.navigator)return u.browser="Not a browser.",u;const{navigator:e}=a;if(e.mozGetUserMedia)u.browser="firefox",u.version=Ai(e.userAgent,/Firefox\/(\d+)\./,1);else if(e.webkitGetUserMedia||a.isSecureContext===!1&&a.webkitRTCPeerConnection&&!a.RTCIceGatherer)u.browser="chrome",u.version=Ai(e.userAgent,/Chrom(e|ium)\/(\d+)\./,2);else if(e.mediaDevices&&e.userAgent.match(/Edge\/(\d+).(\d+)$/))u.browser="edge",u.version=Ai(e.userAgent,/Edge\/(\d+).(\d+)$/,2);else if(a.RTCPeerConnection&&e.userAgent.match(/AppleWebKit\/(\d+)\./))u.browser="safari",u.version=Ai(e.userAgent,/AppleWebKit\/(\d+)\./,1),u.supportsUnifiedPlan=a.RTCRtpTransceiver&&"currentDirection"in a.RTCRtpTransceiver.prototype;else return u.browser="Not a supported browser.",u;return u}function Rs(a){return Object.prototype.toString.call(a)==="[object Object]"}function d4(a){return Rs(a)?Object.keys(a).reduce(function(u,e){const i=Rs(a[e]),n=i?d4(a[e]):a[e],r=i&&!Object.keys(n).length;return n===void 0||r?u:Object.assign(u,{[e]:n})},{}):a}function at(a,u,e){!u||e.has(u.id)||(e.set(u.id,u),Object.keys(u).forEach(i=>{i.endsWith("Id")?at(a,a.get(u[i]),e):i.endsWith("Ids")&&u[i].forEach(n=>{at(a,a.get(n),e)})}))}function Ks(a,u,e){const i=e?"outbound-rtp":"inbound-rtp",n=new Map;if(u===null)return n;const r=[];return a.forEach(t=>{t.type==="track"&&t.trackIdentifier===u.id&&r.push(t)}),r.forEach(t=>{a.forEach(o=>{o.type===i&&o.trackId===t.id&&at(a,o,n)})}),n}const Ns=Tt;function m4(a,u){const e=a&&a.navigator;if(!e.mediaDevices)return;const i=function(o){if(typeof o!="object"||o.mandatory||o.optional)return o;const s={};return Object.keys(o).forEach(l=>{if(l==="require"||l==="advanced"||l==="mediaSource")return;const E=typeof o[l]=="object"?o[l]:{ideal:o[l]};E.exact!==void 0&&typeof E.exact=="number"&&(E.min=E.max=E.exact);const D=function(x,c){return x?x+c.charAt(0).toUpperCase()+c.slice(1):c==="deviceId"?"sourceId":c};if(E.ideal!==void 0){s.optional=s.optional||[];let x={};typeof E.ideal=="number"?(x[D("min",l)]=E.ideal,s.optional.push(x),x={},x[D("max",l)]=E.ideal,s.optional.push(x)):(x[D("",l)]=E.ideal,s.optional.push(x))}E.exact!==void 0&&typeof E.exact!="number"?(s.mandatory=s.mandatory||{},s.mandatory[D("",l)]=E.exact):["min","max"].forEach(x=>{E[x]!==void 0&&(s.mandatory=s.mandatory||{},s.mandatory[D(x,l)]=E[x])})}),o.advanced&&(s.optional=(s.optional||[]).concat(o.advanced)),s},n=function(o,s){if(u.version>=61)return s(o);if(o=JSON.parse(JSON.stringify(o)),o&&typeof o.audio=="object"){const l=function(E,D,x){D in E&&!(x in E)&&(E[x]=E[D],delete E[D])};o=JSON.parse(JSON.stringify(o)),l(o.audio,"autoGainControl","googAutoGainControl"),l(o.audio,"noiseSuppression","googNoiseSuppression"),o.audio=i(o.audio)}if(o&&typeof o.video=="object"){let l=o.video.facingMode;l=l&&(typeof l=="object"?l:{ideal:l});const E=u.version<66;if(l&&(l.exact==="user"||l.exact==="environment"||l.ideal==="user"||l.ideal==="environment")&&!(e.mediaDevices.getSupportedConstraints&&e.mediaDevices.getSupportedConstraints().facingMode&&!E)){delete o.video.facingMode;let D;if(l.exact==="environment"||l.ideal==="environment"?D=["back","rear"]:(l.exact==="user"||l.ideal==="user")&&(D=["front"]),D)return e.mediaDevices.enumerateDevices().then(x=>{x=x.filter(p=>p.kind==="videoinput");let c=x.find(p=>D.some(d=>p.label.toLowerCase().includes(d)));return!c&&x.length&&D.includes("back")&&(c=x[x.length-1]),c&&(o.video.deviceId=l.exact?{exact:c.deviceId}:{ideal:c.deviceId}),o.video=i(o.video),Ns("chrome: "+JSON.stringify(o)),s(o)})}o.video=i(o.video)}return Ns("chrome: "+JSON.stringify(o)),s(o)},r=function(o){return u.version>=64?o:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[o.name]||o.name,message:o.message,constraint:o.constraint||o.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},t=function(o,s,l){n(o,E=>{e.webkitGetUserMedia(E,s,D=>{l&&l(r(D))})})};if(e.getUserMedia=t.bind(e),e.mediaDevices.getUserMedia){const o=e.mediaDevices.getUserMedia.bind(e.mediaDevices);e.mediaDevices.getUserMedia=function(s){return n(s,l=>o(l).then(E=>{if(l.audio&&!E.getAudioTracks().length||l.video&&!E.getVideoTracks().length)throw E.getTracks().forEach(D=>{D.stop()}),new DOMException("","NotFoundError");return E},E=>Promise.reject(r(E))))}}}function uh(a,u){if(!(a.navigator.mediaDevices&&"getDisplayMedia"in a.navigator.mediaDevices)&&a.navigator.mediaDevices){if(typeof u!="function"){console.error("shimGetDisplayMedia: getSourceId argument is not a function");return}a.navigator.mediaDevices.getDisplayMedia=function(i){return u(i).then(n=>{const r=i.video&&i.video.width,t=i.video&&i.video.height,o=i.video&&i.video.frameRate;return i.video={mandatory:{chromeMediaSource:"desktop",chromeMediaSourceId:n,maxFrameRate:o||3}},r&&(i.video.mandatory.maxWidth=r),t&&(i.video.mandatory.maxHeight=t),a.navigator.mediaDevices.getUserMedia(i)})}}}function h4(a){a.MediaStream=a.MediaStream||a.webkitMediaStream}function p4(a){if(typeof a=="object"&&a.RTCPeerConnection&&!("ontrack"in a.RTCPeerConnection.prototype)){Object.defineProperty(a.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(e){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=e)},enumerable:!0,configurable:!0});const u=a.RTCPeerConnection.prototype.setRemoteDescription;a.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=i=>{i.stream.addEventListener("addtrack",n=>{let r;a.RTCPeerConnection.prototype.getReceivers?r=this.getReceivers().find(o=>o.track&&o.track.id===n.track.id):r={track:n.track};const t=new Event("track");t.track=n.track,t.receiver=r,t.transceiver={receiver:r},t.streams=[i.stream],this.dispatchEvent(t)}),i.stream.getTracks().forEach(n=>{let r;a.RTCPeerConnection.prototype.getReceivers?r=this.getReceivers().find(o=>o.track&&o.track.id===n.id):r={track:n};const t=new Event("track");t.track=n,t.receiver=r,t.transceiver={receiver:r},t.streams=[i.stream],this.dispatchEvent(t)})},this.addEventListener("addstream",this._ontrackpoly)),u.apply(this,arguments)}}else Di(a,"track",u=>(u.transceiver||Object.defineProperty(u,"transceiver",{value:{receiver:u.receiver}}),u))}function F4(a){if(typeof a=="object"&&a.RTCPeerConnection&&!("getSenders"in a.RTCPeerConnection.prototype)&&"createDTMFSender"in a.RTCPeerConnection.prototype){const u=function(n,r){return{track:r,get dtmf(){return this._dtmf===void 0&&(r.kind==="audio"?this._dtmf=n.createDTMFSender(r):this._dtmf=null),this._dtmf},_pc:n}};if(!a.RTCPeerConnection.prototype.getSenders){a.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const n=a.RTCPeerConnection.prototype.addTrack;a.RTCPeerConnection.prototype.addTrack=function(o,s){let l=n.apply(this,arguments);return l||(l=u(this,o),this._senders.push(l)),l};const r=a.RTCPeerConnection.prototype.removeTrack;a.RTCPeerConnection.prototype.removeTrack=function(o){r.apply(this,arguments);const s=this._senders.indexOf(o);s!==-1&&this._senders.splice(s,1)}}const e=a.RTCPeerConnection.prototype.addStream;a.RTCPeerConnection.prototype.addStream=function(r){this._senders=this._senders||[],e.apply(this,[r]),r.getTracks().forEach(t=>{this._senders.push(u(this,t))})};const i=a.RTCPeerConnection.prototype.removeStream;a.RTCPeerConnection.prototype.removeStream=function(r){this._senders=this._senders||[],i.apply(this,[r]),r.getTracks().forEach(t=>{const o=this._senders.find(s=>s.track===t);o&&this._senders.splice(this._senders.indexOf(o),1)})}}else if(typeof a=="object"&&a.RTCPeerConnection&&"getSenders"in a.RTCPeerConnection.prototype&&"createDTMFSender"in a.RTCPeerConnection.prototype&&a.RTCRtpSender&&!("dtmf"in a.RTCRtpSender.prototype)){const u=a.RTCPeerConnection.prototype.getSenders;a.RTCPeerConnection.prototype.getSenders=function(){const i=u.apply(this,[]);return i.forEach(n=>n._pc=this),i},Object.defineProperty(a.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function g4(a){if(!a.RTCPeerConnection)return;const u=a.RTCPeerConnection.prototype.getStats;a.RTCPeerConnection.prototype.getStats=function(){const[i,n,r]=arguments;if(arguments.length>0&&typeof i=="function")return u.apply(this,arguments);if(u.length===0&&(arguments.length===0||typeof i!="function"))return u.apply(this,[]);const t=function(s){const l={};return s.result().forEach(D=>{const x={id:D.id,timestamp:D.timestamp,type:{localcandidate:"local-candidate",remotecandidate:"remote-candidate"}[D.type]||D.type};D.names().forEach(c=>{x[c]=D.stat(c)}),l[x.id]=x}),l},o=function(s){return new Map(Object.keys(s).map(l=>[l,s[l]]))};if(arguments.length>=2){const s=function(l){n(o(t(l)))};return u.apply(this,[s,i])}return new Promise((s,l)=>{u.apply(this,[function(E){s(o(t(E)))},l])}).then(n,r)}}function k4(a){if(!(typeof a=="object"&&a.RTCPeerConnection&&a.RTCRtpSender&&a.RTCRtpReceiver))return;if(!("getStats"in a.RTCRtpSender.prototype)){const e=a.RTCPeerConnection.prototype.getSenders;e&&(a.RTCPeerConnection.prototype.getSenders=function(){const r=e.apply(this,[]);return r.forEach(t=>t._pc=this),r});const i=a.RTCPeerConnection.prototype.addTrack;i&&(a.RTCPeerConnection.prototype.addTrack=function(){const r=i.apply(this,arguments);return r._pc=this,r}),a.RTCRtpSender.prototype.getStats=function(){const r=this;return this._pc.getStats().then(t=>Ks(t,r.track,!0))}}if(!("getStats"in a.RTCRtpReceiver.prototype)){const e=a.RTCPeerConnection.prototype.getReceivers;e&&(a.RTCPeerConnection.prototype.getReceivers=function(){const n=e.apply(this,[]);return n.forEach(r=>r._pc=this),n}),Di(a,"track",i=>(i.receiver._pc=i.srcElement,i)),a.RTCRtpReceiver.prototype.getStats=function(){const n=this;return this._pc.getStats().then(r=>Ks(r,n.track,!1))}}if(!("getStats"in a.RTCRtpSender.prototype&&"getStats"in a.RTCRtpReceiver.prototype))return;const u=a.RTCPeerConnection.prototype.getStats;a.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof a.MediaStreamTrack){const i=arguments[0];let n,r,t;return this.getSenders().forEach(o=>{o.track===i&&(n?t=!0:n=o)}),this.getReceivers().forEach(o=>(o.track===i&&(r?t=!0:r=o),o.track===i)),t||n&&r?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):n?n.getStats():r?r.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return u.apply(this,arguments)}}function C4(a){a.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(t=>this._shimmedLocalStreams[t][0])};const u=a.RTCPeerConnection.prototype.addTrack;a.RTCPeerConnection.prototype.addTrack=function(t,o){if(!o)return u.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const s=u.apply(this,arguments);return this._shimmedLocalStreams[o.id]?this._shimmedLocalStreams[o.id].indexOf(s)===-1&&this._shimmedLocalStreams[o.id].push(s):this._shimmedLocalStreams[o.id]=[o,s],s};const e=a.RTCPeerConnection.prototype.addStream;a.RTCPeerConnection.prototype.addStream=function(t){this._shimmedLocalStreams=this._shimmedLocalStreams||{},t.getTracks().forEach(l=>{if(this.getSenders().find(D=>D.track===l))throw new DOMException("Track already exists.","InvalidAccessError")});const o=this.getSenders();e.apply(this,arguments);const s=this.getSenders().filter(l=>o.indexOf(l)===-1);this._shimmedLocalStreams[t.id]=[t].concat(s)};const i=a.RTCPeerConnection.prototype.removeStream;a.RTCPeerConnection.prototype.removeStream=function(t){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[t.id],i.apply(this,arguments)};const n=a.RTCPeerConnection.prototype.removeTrack;a.RTCPeerConnection.prototype.removeTrack=function(t){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},t&&Object.keys(this._shimmedLocalStreams).forEach(o=>{const s=this._shimmedLocalStreams[o].indexOf(t);s!==-1&&this._shimmedLocalStreams[o].splice(s,1),this._shimmedLocalStreams[o].length===1&&delete this._shimmedLocalStreams[o]}),n.apply(this,arguments)}}function v4(a,u){if(!a.RTCPeerConnection)return;if(a.RTCPeerConnection.prototype.addTrack&&u.version>=65)return C4(a);const e=a.RTCPeerConnection.prototype.getLocalStreams;a.RTCPeerConnection.prototype.getLocalStreams=function(){const E=e.apply(this);return this._reverseStreams=this._reverseStreams||{},E.map(D=>this._reverseStreams[D.id])};const i=a.RTCPeerConnection.prototype.addStream;a.RTCPeerConnection.prototype.addStream=function(E){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},E.getTracks().forEach(D=>{if(this.getSenders().find(c=>c.track===D))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[E.id]){const D=new a.MediaStream(E.getTracks());this._streams[E.id]=D,this._reverseStreams[D.id]=E,E=D}i.apply(this,[E])};const n=a.RTCPeerConnection.prototype.removeStream;a.RTCPeerConnection.prototype.removeStream=function(E){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},n.apply(this,[this._streams[E.id]||E]),delete this._reverseStreams[this._streams[E.id]?this._streams[E.id].id:E.id],delete this._streams[E.id]},a.RTCPeerConnection.prototype.addTrack=function(E,D){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const x=[].slice.call(arguments,1);if(x.length!==1||!x[0].getTracks().find(d=>d===E))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(d=>d.track===E))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const p=this._streams[D.id];if(p)p.addTrack(E),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const d=new a.MediaStream([E]);this._streams[D.id]=d,this._reverseStreams[d.id]=D,this.addStream(d)}return this.getSenders().find(d=>d.track===E)};function r(l,E){let D=E.sdp;return Object.keys(l._reverseStreams||[]).forEach(x=>{const c=l._reverseStreams[x],p=l._streams[c.id];D=D.replace(new RegExp(p.id,"g"),c.id)}),new RTCSessionDescription({type:E.type,sdp:D})}function t(l,E){let D=E.sdp;return Object.keys(l._reverseStreams||[]).forEach(x=>{const c=l._reverseStreams[x],p=l._streams[c.id];D=D.replace(new RegExp(c.id,"g"),p.id)}),new RTCSessionDescription({type:E.type,sdp:D})}["createOffer","createAnswer"].forEach(function(l){const E=a.RTCPeerConnection.prototype[l],D={[l](){const x=arguments;return arguments.length&&typeof arguments[0]=="function"?E.apply(this,[p=>{const d=r(this,p);x[0].apply(null,[d])},p=>{x[1]&&x[1].apply(null,p)},arguments[2]]):E.apply(this,arguments).then(p=>r(this,p))}};a.RTCPeerConnection.prototype[l]=D[l]});const o=a.RTCPeerConnection.prototype.setLocalDescription;a.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?o.apply(this,arguments):(arguments[0]=t(this,arguments[0]),o.apply(this,arguments))};const s=Object.getOwnPropertyDescriptor(a.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(a.RTCPeerConnection.prototype,"localDescription",{get(){const l=s.get.apply(this);return l.type===""?l:r(this,l)}}),a.RTCPeerConnection.prototype.removeTrack=function(E){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!E._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(E._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let x;Object.keys(this._streams).forEach(c=>{this._streams[c].getTracks().find(d=>E.track===d)&&(x=this._streams[c])}),x&&(x.getTracks().length===1?this.removeStream(this._reverseStreams[x.id]):x.removeTrack(E.track),this.dispatchEvent(new Event("negotiationneeded")))}}function it(a,u){!a.RTCPeerConnection&&a.webkitRTCPeerConnection&&(a.RTCPeerConnection=a.webkitRTCPeerConnection),a.RTCPeerConnection&&u.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(e){const i=a.RTCPeerConnection.prototype[e],n={[e](){return arguments[0]=new(e==="addIceCandidate"?a.RTCIceCandidate:a.RTCSessionDescription)(arguments[0]),i.apply(this,arguments)}};a.RTCPeerConnection.prototype[e]=n[e]})}function f4(a,u){Di(a,"negotiationneeded",e=>{const i=e.target;if(!((u.version<72||i.getConfiguration&&i.getConfiguration().sdpSemantics==="plan-b")&&i.signalingState!=="stable"))return e})}const Hs=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:f4,shimAddTrackRemoveTrack:v4,shimAddTrackRemoveTrackWithNative:C4,shimGetDisplayMedia:uh,shimGetSendersWithDtmf:F4,shimGetStats:g4,shimGetUserMedia:m4,shimMediaStream:h4,shimOnTrack:p4,shimPeerConnection:it,shimSenderReceiverGetStats:k4},Symbol.toStringTag,{value:"Module"}));function eh(a,u){let e=!1;return a=JSON.parse(JSON.stringify(a)),a.filter(i=>{if(i&&(i.urls||i.url)){let n=i.urls||i.url;i.url&&!i.urls&&Un("RTCIceServer.url","RTCIceServer.urls");const r=typeof n=="string";return r&&(n=[n]),n=n.filter(t=>{if(t.indexOf("stun:")===0)return!1;const o=t.startsWith("turn")&&!t.startsWith("turn:[")&&t.includes("transport=udp");return o&&!e?(e=!0,!0):o&&!e}),delete i.url,i.urls=r?n[0]:n,!!n.length}})}var Ln={},ah={get exports(){return Ln},set exports(a){Ln=a}};(function(a){var u={};u.generateIdentifier=function(){return Math.random().toString(36).substr(2,10)},u.localCName=u.generateIdentifier(),u.splitLines=function(e){return e.trim().split(`
`).map(function(i){return i.trim()})},u.splitSections=function(e){var i=e.split(`
m=`);return i.map(function(n,r){return(r>0?"m="+n:n).trim()+`\r
`})},u.getDescription=function(e){var i=u.splitSections(e);return i&&i[0]},u.getMediaSections=function(e){var i=u.splitSections(e);return i.shift(),i},u.matchPrefix=function(e,i){return u.splitLines(e).filter(function(n){return n.indexOf(i)===0})},u.parseCandidate=function(e){var i;e.indexOf("a=candidate:")===0?i=e.substring(12).split(" "):i=e.substring(10).split(" ");for(var n={foundation:i[0],component:parseInt(i[1],10),protocol:i[2].toLowerCase(),priority:parseInt(i[3],10),ip:i[4],address:i[4],port:parseInt(i[5],10),type:i[7]},r=8;r<i.length;r+=2)switch(i[r]){case"raddr":n.relatedAddress=i[r+1];break;case"rport":n.relatedPort=parseInt(i[r+1],10);break;case"tcptype":n.tcpType=i[r+1];break;case"ufrag":n.ufrag=i[r+1],n.usernameFragment=i[r+1];break;default:n[i[r]]=i[r+1];break}return n},u.writeCandidate=function(e){var i=[];i.push(e.foundation),i.push(e.component),i.push(e.protocol.toUpperCase()),i.push(e.priority),i.push(e.address||e.ip),i.push(e.port);var n=e.type;return i.push("typ"),i.push(n),n!=="host"&&e.relatedAddress&&e.relatedPort&&(i.push("raddr"),i.push(e.relatedAddress),i.push("rport"),i.push(e.relatedPort)),e.tcpType&&e.protocol.toLowerCase()==="tcp"&&(i.push("tcptype"),i.push(e.tcpType)),(e.usernameFragment||e.ufrag)&&(i.push("ufrag"),i.push(e.usernameFragment||e.ufrag)),"candidate:"+i.join(" ")},u.parseIceOptions=function(e){return e.substr(14).split(" ")},u.parseRtpMap=function(e){var i=e.substr(9).split(" "),n={payloadType:parseInt(i.shift(),10)};return i=i[0].split("/"),n.name=i[0],n.clockRate=parseInt(i[1],10),n.channels=i.length===3?parseInt(i[2],10):1,n.numChannels=n.channels,n},u.writeRtpMap=function(e){var i=e.payloadType;e.preferredPayloadType!==void 0&&(i=e.preferredPayloadType);var n=e.channels||e.numChannels||1;return"a=rtpmap:"+i+" "+e.name+"/"+e.clockRate+(n!==1?"/"+n:"")+`\r
`},u.parseExtmap=function(e){var i=e.substr(9).split(" ");return{id:parseInt(i[0],10),direction:i[0].indexOf("/")>0?i[0].split("/")[1]:"sendrecv",uri:i[1]}},u.writeExtmap=function(e){return"a=extmap:"+(e.id||e.preferredId)+(e.direction&&e.direction!=="sendrecv"?"/"+e.direction:"")+" "+e.uri+`\r
`},u.parseFmtp=function(e){for(var i={},n,r=e.substr(e.indexOf(" ")+1).split(";"),t=0;t<r.length;t++)n=r[t].trim().split("="),i[n[0].trim()]=n[1];return i},u.writeFmtp=function(e){var i="",n=e.payloadType;if(e.preferredPayloadType!==void 0&&(n=e.preferredPayloadType),e.parameters&&Object.keys(e.parameters).length){var r=[];Object.keys(e.parameters).forEach(function(t){e.parameters[t]?r.push(t+"="+e.parameters[t]):r.push(t)}),i+="a=fmtp:"+n+" "+r.join(";")+`\r
`}return i},u.parseRtcpFb=function(e){var i=e.substr(e.indexOf(" ")+1).split(" ");return{type:i.shift(),parameter:i.join(" ")}},u.writeRtcpFb=function(e){var i="",n=e.payloadType;return e.preferredPayloadType!==void 0&&(n=e.preferredPayloadType),e.rtcpFeedback&&e.rtcpFeedback.length&&e.rtcpFeedback.forEach(function(r){i+="a=rtcp-fb:"+n+" "+r.type+(r.parameter&&r.parameter.length?" "+r.parameter:"")+`\r
`}),i},u.parseSsrcMedia=function(e){var i=e.indexOf(" "),n={ssrc:parseInt(e.substr(7,i-7),10)},r=e.indexOf(":",i);return r>-1?(n.attribute=e.substr(i+1,r-i-1),n.value=e.substr(r+1)):n.attribute=e.substr(i+1),n},u.parseSsrcGroup=function(e){var i=e.substr(13).split(" ");return{semantics:i.shift(),ssrcs:i.map(function(n){return parseInt(n,10)})}},u.getMid=function(e){var i=u.matchPrefix(e,"a=mid:")[0];if(i)return i.substr(6)},u.parseFingerprint=function(e){var i=e.substr(14).split(" ");return{algorithm:i[0].toLowerCase(),value:i[1]}},u.getDtlsParameters=function(e,i){var n=u.matchPrefix(e+i,"a=fingerprint:");return{role:"auto",fingerprints:n.map(u.parseFingerprint)}},u.writeDtlsParameters=function(e,i){var n="a=setup:"+i+`\r
`;return e.fingerprints.forEach(function(r){n+="a=fingerprint:"+r.algorithm+" "+r.value+`\r
`}),n},u.parseCryptoLine=function(e){var i=e.substr(9).split(" ");return{tag:parseInt(i[0],10),cryptoSuite:i[1],keyParams:i[2],sessionParams:i.slice(3)}},u.writeCryptoLine=function(e){return"a=crypto:"+e.tag+" "+e.cryptoSuite+" "+(typeof e.keyParams=="object"?u.writeCryptoKeyParams(e.keyParams):e.keyParams)+(e.sessionParams?" "+e.sessionParams.join(" "):"")+`\r
`},u.parseCryptoKeyParams=function(e){if(e.indexOf("inline:")!==0)return null;var i=e.substr(7).split("|");return{keyMethod:"inline",keySalt:i[0],lifeTime:i[1],mkiValue:i[2]?i[2].split(":")[0]:void 0,mkiLength:i[2]?i[2].split(":")[1]:void 0}},u.writeCryptoKeyParams=function(e){return e.keyMethod+":"+e.keySalt+(e.lifeTime?"|"+e.lifeTime:"")+(e.mkiValue&&e.mkiLength?"|"+e.mkiValue+":"+e.mkiLength:"")},u.getCryptoParameters=function(e,i){var n=u.matchPrefix(e+i,"a=crypto:");return n.map(u.parseCryptoLine)},u.getIceParameters=function(e,i){var n=u.matchPrefix(e+i,"a=ice-ufrag:")[0],r=u.matchPrefix(e+i,"a=ice-pwd:")[0];return n&&r?{usernameFragment:n.substr(12),password:r.substr(10)}:null},u.writeIceParameters=function(e){return"a=ice-ufrag:"+e.usernameFragment+`\r
a=ice-pwd:`+e.password+`\r
`},u.parseRtpParameters=function(e){for(var i={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},n=u.splitLines(e),r=n[0].split(" "),t=3;t<r.length;t++){var o=r[t],s=u.matchPrefix(e,"a=rtpmap:"+o+" ")[0];if(s){var l=u.parseRtpMap(s),E=u.matchPrefix(e,"a=fmtp:"+o+" ");switch(l.parameters=E.length?u.parseFmtp(E[0]):{},l.rtcpFeedback=u.matchPrefix(e,"a=rtcp-fb:"+o+" ").map(u.parseRtcpFb),i.codecs.push(l),l.name.toUpperCase()){case"RED":case"ULPFEC":i.fecMechanisms.push(l.name.toUpperCase());break}}}return u.matchPrefix(e,"a=extmap:").forEach(function(D){i.headerExtensions.push(u.parseExtmap(D))}),i},u.writeRtpDescription=function(e,i){var n="";n+="m="+e+" ",n+=i.codecs.length>0?"9":"0",n+=" UDP/TLS/RTP/SAVPF ",n+=i.codecs.map(function(t){return t.preferredPayloadType!==void 0?t.preferredPayloadType:t.payloadType}).join(" ")+`\r
`,n+=`c=IN IP4 0.0.0.0\r
`,n+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,i.codecs.forEach(function(t){n+=u.writeRtpMap(t),n+=u.writeFmtp(t),n+=u.writeRtcpFb(t)});var r=0;return i.codecs.forEach(function(t){t.maxptime>r&&(r=t.maxptime)}),r>0&&(n+="a=maxptime:"+r+`\r
`),n+=`a=rtcp-mux\r
`,i.headerExtensions&&i.headerExtensions.forEach(function(t){n+=u.writeExtmap(t)}),n},u.parseRtpEncodingParameters=function(e){var i=[],n=u.parseRtpParameters(e),r=n.fecMechanisms.indexOf("RED")!==-1,t=n.fecMechanisms.indexOf("ULPFEC")!==-1,o=u.matchPrefix(e,"a=ssrc:").map(function(x){return u.parseSsrcMedia(x)}).filter(function(x){return x.attribute==="cname"}),s=o.length>0&&o[0].ssrc,l,E=u.matchPrefix(e,"a=ssrc-group:FID").map(function(x){var c=x.substr(17).split(" ");return c.map(function(p){return parseInt(p,10)})});E.length>0&&E[0].length>1&&E[0][0]===s&&(l=E[0][1]),n.codecs.forEach(function(x){if(x.name.toUpperCase()==="RTX"&&x.parameters.apt){var c={ssrc:s,codecPayloadType:parseInt(x.parameters.apt,10)};s&&l&&(c.rtx={ssrc:l}),i.push(c),r&&(c=JSON.parse(JSON.stringify(c)),c.fec={ssrc:s,mechanism:t?"red+ulpfec":"red"},i.push(c))}}),i.length===0&&s&&i.push({ssrc:s});var D=u.matchPrefix(e,"b=");return D.length&&(D[0].indexOf("b=TIAS:")===0?D=parseInt(D[0].substr(7),10):D[0].indexOf("b=AS:")===0?D=parseInt(D[0].substr(5),10)*1e3*.95-50*40*8:D=void 0,i.forEach(function(x){x.maxBitrate=D})),i},u.parseRtcpParameters=function(e){var i={},n=u.matchPrefix(e,"a=ssrc:").map(function(o){return u.parseSsrcMedia(o)}).filter(function(o){return o.attribute==="cname"})[0];n&&(i.cname=n.value,i.ssrc=n.ssrc);var r=u.matchPrefix(e,"a=rtcp-rsize");i.reducedSize=r.length>0,i.compound=r.length===0;var t=u.matchPrefix(e,"a=rtcp-mux");return i.mux=t.length>0,i},u.parseMsid=function(e){var i,n=u.matchPrefix(e,"a=msid:");if(n.length===1)return i=n[0].substr(7).split(" "),{stream:i[0],track:i[1]};var r=u.matchPrefix(e,"a=ssrc:").map(function(t){return u.parseSsrcMedia(t)}).filter(function(t){return t.attribute==="msid"});if(r.length>0)return i=r[0].value.split(" "),{stream:i[0],track:i[1]}},u.parseSctpDescription=function(e){var i=u.parseMLine(e),n=u.matchPrefix(e,"a=max-message-size:"),r;n.length>0&&(r=parseInt(n[0].substr(19),10)),isNaN(r)&&(r=65536);var t=u.matchPrefix(e,"a=sctp-port:");if(t.length>0)return{port:parseInt(t[0].substr(12),10),protocol:i.fmt,maxMessageSize:r};var o=u.matchPrefix(e,"a=sctpmap:");if(o.length>0){var s=u.matchPrefix(e,"a=sctpmap:")[0].substr(10).split(" ");return{port:parseInt(s[0],10),protocol:s[1],maxMessageSize:r}}},u.writeSctpDescription=function(e,i){var n=[];return e.protocol!=="DTLS/SCTP"?n=["m="+e.kind+" 9 "+e.protocol+" "+i.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctp-port:"+i.port+`\r
`]:n=["m="+e.kind+" 9 "+e.protocol+" "+i.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctpmap:"+i.port+" "+i.protocol+` 65535\r
`],i.maxMessageSize!==void 0&&n.push("a=max-message-size:"+i.maxMessageSize+`\r
`),n.join("")},u.generateSessionId=function(){return Math.random().toString().substr(2,21)},u.writeSessionBoilerplate=function(e,i,n){var r,t=i!==void 0?i:2;e?r=e:r=u.generateSessionId();var o=n||"thisisadapterortc";return`v=0\r
o=`+o+" "+r+" "+t+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`},u.writeMediaSection=function(e,i,n,r){var t=u.writeRtpDescription(e.kind,i);if(t+=u.writeIceParameters(e.iceGatherer.getLocalParameters()),t+=u.writeDtlsParameters(e.dtlsTransport.getLocalParameters(),n==="offer"?"actpass":"active"),t+="a=mid:"+e.mid+`\r
`,e.direction?t+="a="+e.direction+`\r
`:e.rtpSender&&e.rtpReceiver?t+=`a=sendrecv\r
`:e.rtpSender?t+=`a=sendonly\r
`:e.rtpReceiver?t+=`a=recvonly\r
`:t+=`a=inactive\r
`,e.rtpSender){var o="msid:"+r.id+" "+e.rtpSender.track.id+`\r
`;t+="a="+o,t+="a=ssrc:"+e.sendEncodingParameters[0].ssrc+" "+o,e.sendEncodingParameters[0].rtx&&(t+="a=ssrc:"+e.sendEncodingParameters[0].rtx.ssrc+" "+o,t+="a=ssrc-group:FID "+e.sendEncodingParameters[0].ssrc+" "+e.sendEncodingParameters[0].rtx.ssrc+`\r
`)}return t+="a=ssrc:"+e.sendEncodingParameters[0].ssrc+" cname:"+u.localCName+`\r
`,e.rtpSender&&e.sendEncodingParameters[0].rtx&&(t+="a=ssrc:"+e.sendEncodingParameters[0].rtx.ssrc+" cname:"+u.localCName+`\r
`),t},u.getDirection=function(e,i){for(var n=u.splitLines(e),r=0;r<n.length;r++)switch(n[r]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return n[r].substr(2)}return i?u.getDirection(i):"sendrecv"},u.getKind=function(e){var i=u.splitLines(e),n=i[0].split(" ");return n[0].substr(2)},u.isRejected=function(e){return e.split(" ",2)[1]==="0"},u.parseMLine=function(e){var i=u.splitLines(e),n=i[0].substr(2).split(" ");return{kind:n[0],port:parseInt(n[1],10),protocol:n[2],fmt:n.slice(3).join(" ")}},u.parseOLine=function(e){var i=u.matchPrefix(e,"o=")[0],n=i.substr(2).split(" ");return{username:n[0],sessionId:n[1],sessionVersion:parseInt(n[2],10),netType:n[3],addressType:n[4],address:n[5]}},u.isValidSDP=function(e){if(typeof e!="string"||e.length===0)return!1;for(var i=u.splitLines(e),n=0;n<i.length;n++)if(i[n].length<2||i[n].charAt(1)!=="=")return!1;return!0},a.exports=u})(ah);const yn=Ln;var Ku=Ln;function ih(a){return{inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"}[a.type]||a.type}function Gs(a,u,e,i,n){var r=Ku.writeRtpDescription(a.kind,u);if(r+=Ku.writeIceParameters(a.iceGatherer.getLocalParameters()),r+=Ku.writeDtlsParameters(a.dtlsTransport.getLocalParameters(),e==="offer"?"actpass":n||"active"),r+="a=mid:"+a.mid+`\r
`,a.rtpSender&&a.rtpReceiver?r+=`a=sendrecv\r
`:a.rtpSender?r+=`a=sendonly\r
`:a.rtpReceiver?r+=`a=recvonly\r
`:r+=`a=inactive\r
`,a.rtpSender){var t=a.rtpSender._initialTrackId||a.rtpSender.track.id;a.rtpSender._initialTrackId=t;var o="msid:"+(i?i.id:"-")+" "+t+`\r
`;r+="a="+o,r+="a=ssrc:"+a.sendEncodingParameters[0].ssrc+" "+o,a.sendEncodingParameters[0].rtx&&(r+="a=ssrc:"+a.sendEncodingParameters[0].rtx.ssrc+" "+o,r+="a=ssrc-group:FID "+a.sendEncodingParameters[0].ssrc+" "+a.sendEncodingParameters[0].rtx.ssrc+`\r
`)}return r+="a=ssrc:"+a.sendEncodingParameters[0].ssrc+" cname:"+Ku.localCName+`\r
`,a.rtpSender&&a.sendEncodingParameters[0].rtx&&(r+="a=ssrc:"+a.sendEncodingParameters[0].rtx.ssrc+" cname:"+Ku.localCName+`\r
`),r}function nh(a,u){var e=!1;return a=JSON.parse(JSON.stringify(a)),a.filter(function(i){if(i&&(i.urls||i.url)){var n=i.urls||i.url;i.url&&!i.urls&&console.warn("RTCIceServer.url is deprecated! Use urls instead.");var r=typeof n=="string";return r&&(n=[n]),n=n.filter(function(t){var o=t.indexOf("turn:")===0&&t.indexOf("transport=udp")!==-1&&t.indexOf("turn:[")===-1&&!e;return o?(e=!0,!0):t.indexOf("stun:")===0&&u>=14393&&t.indexOf("?transport=udp")===-1}),delete i.url,i.urls=r?n[0]:n,!!n.length}})}function hn(a,u){var e={codecs:[],headerExtensions:[],fecMechanisms:[]},i=function(r,t){r=parseInt(r,10);for(var o=0;o<t.length;o++)if(t[o].payloadType===r||t[o].preferredPayloadType===r)return t[o]},n=function(r,t,o,s){var l=i(r.parameters.apt,o),E=i(t.parameters.apt,s);return l&&E&&l.name.toLowerCase()===E.name.toLowerCase()};return a.codecs.forEach(function(r){for(var t=0;t<u.codecs.length;t++){var o=u.codecs[t];if(r.name.toLowerCase()===o.name.toLowerCase()&&r.clockRate===o.clockRate){if(r.name.toLowerCase()==="rtx"&&r.parameters&&o.parameters.apt&&!n(r,o,a.codecs,u.codecs))continue;o=JSON.parse(JSON.stringify(o)),o.numChannels=Math.min(r.numChannels,o.numChannels),e.codecs.push(o),o.rtcpFeedback=o.rtcpFeedback.filter(function(s){for(var l=0;l<r.rtcpFeedback.length;l++)if(r.rtcpFeedback[l].type===s.type&&r.rtcpFeedback[l].parameter===s.parameter)return!0;return!1});break}}}),a.headerExtensions.forEach(function(r){for(var t=0;t<u.headerExtensions.length;t++){var o=u.headerExtensions[t];if(r.uri===o.uri){e.headerExtensions.push(o);break}}}),e}function Vs(a,u,e){return{offer:{setLocalDescription:["stable","have-local-offer"],setRemoteDescription:["stable","have-remote-offer"]},answer:{setLocalDescription:["have-remote-offer","have-local-pranswer"],setRemoteDescription:["have-local-offer","have-remote-pranswer"]}}[u][a].indexOf(e)!==-1}function Rr(a,u){var e=a.getRemoteCandidates().find(function(i){return u.foundation===i.foundation&&u.ip===i.ip&&u.port===i.port&&u.priority===i.priority&&u.protocol===i.protocol&&u.type===i.type});return e||a.addRemoteCandidate(u),!e}function R0(a,u){var e=new Error(u);return e.name=a,e.code={NotSupportedError:9,InvalidStateError:11,InvalidAccessError:15,TypeError:void 0,OperationError:void 0}[a],e}var rh=function(a,u){function e(s,l){l.addTrack(s),l.dispatchEvent(new a.MediaStreamTrackEvent("addtrack",{track:s}))}function i(s,l){l.removeTrack(s),l.dispatchEvent(new a.MediaStreamTrackEvent("removetrack",{track:s}))}function n(s,l,E,D){var x=new Event("track");x.track=l,x.receiver=E,x.transceiver={receiver:E},x.streams=D,a.setTimeout(function(){s._dispatchEvent("track",x)})}var r=function(s){var l=this,E=document.createDocumentFragment();if(["addEventListener","removeEventListener","dispatchEvent"].forEach(function(x){l[x]=E[x].bind(E)}),this.canTrickleIceCandidates=null,this.needNegotiation=!1,this.localStreams=[],this.remoteStreams=[],this._localDescription=null,this._remoteDescription=null,this.signalingState="stable",this.iceConnectionState="new",this.connectionState="new",this.iceGatheringState="new",s=JSON.parse(JSON.stringify(s||{})),this.usingBundle=s.bundlePolicy==="max-bundle",s.rtcpMuxPolicy==="negotiate")throw R0("NotSupportedError","rtcpMuxPolicy 'negotiate' is not supported");switch(s.rtcpMuxPolicy||(s.rtcpMuxPolicy="require"),s.iceTransportPolicy){case"all":case"relay":break;default:s.iceTransportPolicy="all";break}switch(s.bundlePolicy){case"balanced":case"max-compat":case"max-bundle":break;default:s.bundlePolicy="balanced";break}if(s.iceServers=nh(s.iceServers||[],u),this._iceGatherers=[],s.iceCandidatePoolSize)for(var D=s.iceCandidatePoolSize;D>0;D--)this._iceGatherers.push(new a.RTCIceGatherer({iceServers:s.iceServers,gatherPolicy:s.iceTransportPolicy}));else s.iceCandidatePoolSize=0;this._config=s,this.transceivers=[],this._sdpSessionId=Ku.generateSessionId(),this._sdpSessionVersion=0,this._dtlsRole=void 0,this._isClosed=!1};Object.defineProperty(r.prototype,"localDescription",{configurable:!0,get:function(){return this._localDescription}}),Object.defineProperty(r.prototype,"remoteDescription",{configurable:!0,get:function(){return this._remoteDescription}}),r.prototype.onicecandidate=null,r.prototype.onaddstream=null,r.prototype.ontrack=null,r.prototype.onremovestream=null,r.prototype.onsignalingstatechange=null,r.prototype.oniceconnectionstatechange=null,r.prototype.onconnectionstatechange=null,r.prototype.onicegatheringstatechange=null,r.prototype.onnegotiationneeded=null,r.prototype.ondatachannel=null,r.prototype._dispatchEvent=function(s,l){this._isClosed||(this.dispatchEvent(l),typeof this["on"+s]=="function"&&this["on"+s](l))},r.prototype._emitGatheringStateChange=function(){var s=new Event("icegatheringstatechange");this._dispatchEvent("icegatheringstatechange",s)},r.prototype.getConfiguration=function(){return this._config},r.prototype.getLocalStreams=function(){return this.localStreams},r.prototype.getRemoteStreams=function(){return this.remoteStreams},r.prototype._createTransceiver=function(s,l){var E=this.transceivers.length>0,D={track:null,iceGatherer:null,iceTransport:null,dtlsTransport:null,localCapabilities:null,remoteCapabilities:null,rtpSender:null,rtpReceiver:null,kind:s,mid:null,sendEncodingParameters:null,recvEncodingParameters:null,stream:null,associatedRemoteMediaStreams:[],wantReceive:!0};if(this.usingBundle&&E)D.iceTransport=this.transceivers[0].iceTransport,D.dtlsTransport=this.transceivers[0].dtlsTransport;else{var x=this._createIceAndDtlsTransports();D.iceTransport=x.iceTransport,D.dtlsTransport=x.dtlsTransport}return l||this.transceivers.push(D),D},r.prototype.addTrack=function(s,l){if(this._isClosed)throw R0("InvalidStateError","Attempted to call addTrack on a closed peerconnection.");var E=this.transceivers.find(function(c){return c.track===s});if(E)throw R0("InvalidAccessError","Track already exists.");for(var D,x=0;x<this.transceivers.length;x++)!this.transceivers[x].track&&this.transceivers[x].kind===s.kind&&(D=this.transceivers[x]);return D||(D=this._createTransceiver(s.kind)),this._maybeFireNegotiationNeeded(),this.localStreams.indexOf(l)===-1&&this.localStreams.push(l),D.track=s,D.stream=l,D.rtpSender=new a.RTCRtpSender(s,D.dtlsTransport),D.rtpSender},r.prototype.addStream=function(s){var l=this;if(u>=15025)s.getTracks().forEach(function(D){l.addTrack(D,s)});else{var E=s.clone();s.getTracks().forEach(function(D,x){var c=E.getTracks()[x];D.addEventListener("enabled",function(p){c.enabled=p.enabled})}),E.getTracks().forEach(function(D){l.addTrack(D,E)})}},r.prototype.removeTrack=function(s){if(this._isClosed)throw R0("InvalidStateError","Attempted to call removeTrack on a closed peerconnection.");if(!(s instanceof a.RTCRtpSender))throw new TypeError("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.");var l=this.transceivers.find(function(x){return x.rtpSender===s});if(!l)throw R0("InvalidAccessError","Sender was not created by this connection.");var E=l.stream;l.rtpSender.stop(),l.rtpSender=null,l.track=null,l.stream=null;var D=this.transceivers.map(function(x){return x.stream});D.indexOf(E)===-1&&this.localStreams.indexOf(E)>-1&&this.localStreams.splice(this.localStreams.indexOf(E),1),this._maybeFireNegotiationNeeded()},r.prototype.removeStream=function(s){var l=this;s.getTracks().forEach(function(E){var D=l.getSenders().find(function(x){return x.track===E});D&&l.removeTrack(D)})},r.prototype.getSenders=function(){return this.transceivers.filter(function(s){return!!s.rtpSender}).map(function(s){return s.rtpSender})},r.prototype.getReceivers=function(){return this.transceivers.filter(function(s){return!!s.rtpReceiver}).map(function(s){return s.rtpReceiver})},r.prototype._createIceGatherer=function(s,l){var E=this;if(l&&s>0)return this.transceivers[0].iceGatherer;if(this._iceGatherers.length)return this._iceGatherers.shift();var D=new a.RTCIceGatherer({iceServers:this._config.iceServers,gatherPolicy:this._config.iceTransportPolicy});return Object.defineProperty(D,"state",{value:"new",writable:!0}),this.transceivers[s].bufferedCandidateEvents=[],this.transceivers[s].bufferCandidates=function(x){var c=!x.candidate||Object.keys(x.candidate).length===0;D.state=c?"completed":"gathering",E.transceivers[s].bufferedCandidateEvents!==null&&E.transceivers[s].bufferedCandidateEvents.push(x)},D.addEventListener("localcandidate",this.transceivers[s].bufferCandidates),D},r.prototype._gather=function(s,l){var E=this,D=this.transceivers[l].iceGatherer;if(!D.onlocalcandidate){var x=this.transceivers[l].bufferedCandidateEvents;this.transceivers[l].bufferedCandidateEvents=null,D.removeEventListener("localcandidate",this.transceivers[l].bufferCandidates),D.onlocalcandidate=function(c){if(!(E.usingBundle&&l>0)){var p=new Event("icecandidate");p.candidate={sdpMid:s,sdpMLineIndex:l};var d=c.candidate,m=!d||Object.keys(d).length===0;if(m)(D.state==="new"||D.state==="gathering")&&(D.state="completed");else{D.state==="new"&&(D.state="gathering"),d.component=1,d.ufrag=D.getLocalParameters().usernameFragment;var h=Ku.writeCandidate(d);p.candidate=Object.assign(p.candidate,Ku.parseCandidate(h)),p.candidate.candidate=h,p.candidate.toJSON=function(){return{candidate:p.candidate.candidate,sdpMid:p.candidate.sdpMid,sdpMLineIndex:p.candidate.sdpMLineIndex,usernameFragment:p.candidate.usernameFragment}}}var F=Ku.getMediaSections(E._localDescription.sdp);m?F[p.candidate.sdpMLineIndex]+=`a=end-of-candidates\r
`:F[p.candidate.sdpMLineIndex]+="a="+p.candidate.candidate+`\r
`,E._localDescription.sdp=Ku.getDescription(E._localDescription.sdp)+F.join("");var g=E.transceivers.every(function(C){return C.iceGatherer&&C.iceGatherer.state==="completed"});E.iceGatheringState!=="gathering"&&(E.iceGatheringState="gathering",E._emitGatheringStateChange()),m||E._dispatchEvent("icecandidate",p),g&&(E._dispatchEvent("icecandidate",new Event("icecandidate")),E.iceGatheringState="complete",E._emitGatheringStateChange())}},a.setTimeout(function(){x.forEach(function(c){D.onlocalcandidate(c)})},0)}},r.prototype._createIceAndDtlsTransports=function(){var s=this,l=new a.RTCIceTransport(null);l.onicestatechange=function(){s._updateIceConnectionState(),s._updateConnectionState()};var E=new a.RTCDtlsTransport(l);return E.ondtlsstatechange=function(){s._updateConnectionState()},E.onerror=function(){Object.defineProperty(E,"state",{value:"failed",writable:!0}),s._updateConnectionState()},{iceTransport:l,dtlsTransport:E}},r.prototype._disposeIceAndDtlsTransports=function(s){var l=this.transceivers[s].iceGatherer;l&&(delete l.onlocalcandidate,delete this.transceivers[s].iceGatherer);var E=this.transceivers[s].iceTransport;E&&(delete E.onicestatechange,delete this.transceivers[s].iceTransport);var D=this.transceivers[s].dtlsTransport;D&&(delete D.ondtlsstatechange,delete D.onerror,delete this.transceivers[s].dtlsTransport)},r.prototype._transceive=function(s,l,E){var D=hn(s.localCapabilities,s.remoteCapabilities);l&&s.rtpSender&&(D.encodings=s.sendEncodingParameters,D.rtcp={cname:Ku.localCName,compound:s.rtcpParameters.compound},s.recvEncodingParameters.length&&(D.rtcp.ssrc=s.recvEncodingParameters[0].ssrc),s.rtpSender.send(D)),E&&s.rtpReceiver&&D.codecs.length>0&&(s.kind==="video"&&s.recvEncodingParameters&&u<15019&&s.recvEncodingParameters.forEach(function(x){delete x.rtx}),s.recvEncodingParameters.length?D.encodings=s.recvEncodingParameters:D.encodings=[{}],D.rtcp={compound:s.rtcpParameters.compound},s.rtcpParameters.cname&&(D.rtcp.cname=s.rtcpParameters.cname),s.sendEncodingParameters.length&&(D.rtcp.ssrc=s.sendEncodingParameters[0].ssrc),s.rtpReceiver.receive(D))},r.prototype.setLocalDescription=function(s){var l=this;if(["offer","answer"].indexOf(s.type)===-1)return Promise.reject(R0("TypeError",'Unsupported type "'+s.type+'"'));if(!Vs("setLocalDescription",s.type,l.signalingState)||l._isClosed)return Promise.reject(R0("InvalidStateError","Can not set local "+s.type+" in state "+l.signalingState));var E,D;if(s.type==="offer")E=Ku.splitSections(s.sdp),D=E.shift(),E.forEach(function(c,p){var d=Ku.parseRtpParameters(c);l.transceivers[p].localCapabilities=d}),l.transceivers.forEach(function(c,p){l._gather(c.mid,p)});else if(s.type==="answer"){E=Ku.splitSections(l._remoteDescription.sdp),D=E.shift();var x=Ku.matchPrefix(D,"a=ice-lite").length>0;E.forEach(function(c,p){var d=l.transceivers[p],m=d.iceGatherer,h=d.iceTransport,F=d.dtlsTransport,g=d.localCapabilities,C=d.remoteCapabilities,v=Ku.isRejected(c)&&Ku.matchPrefix(c,"a=bundle-only").length===0;if(!v&&!d.rejected){var A=Ku.getIceParameters(c,D),M=Ku.getDtlsParameters(c,D);x&&(M.role="server"),(!l.usingBundle||p===0)&&(l._gather(d.mid,p),h.state==="new"&&h.start(m,A,x?"controlling":"controlled"),F.state==="new"&&F.start(M));var k=hn(g,C);l._transceive(d,k.codecs.length>0,!1)}})}return l._localDescription={type:s.type,sdp:s.sdp},s.type==="offer"?l._updateSignalingState("have-local-offer"):l._updateSignalingState("stable"),Promise.resolve()},r.prototype.setRemoteDescription=function(s){var l=this;if(["offer","answer"].indexOf(s.type)===-1)return Promise.reject(R0("TypeError",'Unsupported type "'+s.type+'"'));if(!Vs("setRemoteDescription",s.type,l.signalingState)||l._isClosed)return Promise.reject(R0("InvalidStateError","Can not set remote "+s.type+" in state "+l.signalingState));var E={};l.remoteStreams.forEach(function(h){E[h.id]=h});var D=[],x=Ku.splitSections(s.sdp),c=x.shift(),p=Ku.matchPrefix(c,"a=ice-lite").length>0,d=Ku.matchPrefix(c,"a=group:BUNDLE ").length>0;l.usingBundle=d;var m=Ku.matchPrefix(c,"a=ice-options:")[0];return m?l.canTrickleIceCandidates=m.substr(14).split(" ").indexOf("trickle")>=0:l.canTrickleIceCandidates=!1,x.forEach(function(h,F){var g=Ku.splitLines(h),C=Ku.getKind(h),v=Ku.isRejected(h)&&Ku.matchPrefix(h,"a=bundle-only").length===0,A=g[0].substr(2).split(" ")[2],M=Ku.getDirection(h,c),k=Ku.parseMsid(h),B=Ku.getMid(h)||Ku.generateIdentifier();if(v||C==="application"&&(A==="DTLS/SCTP"||A==="UDP/DTLS/SCTP")){l.transceivers[F]={mid:B,kind:C,protocol:A,rejected:!0};return}!v&&l.transceivers[F]&&l.transceivers[F].rejected&&(l.transceivers[F]=l._createTransceiver(C,!0));var y,L,N,j,T,S,J,O,K,Q=Ku.parseRtpParameters(h),uu,mu;v||(uu=Ku.getIceParameters(h,c),mu=Ku.getDtlsParameters(h,c),mu.role="client"),J=Ku.parseRtpEncodingParameters(h);var V=Ku.parseRtcpParameters(h),Z=Ku.matchPrefix(h,"a=end-of-candidates",c).length>0,ou=Ku.matchPrefix(h,"a=candidate:").map(function(pu){return Ku.parseCandidate(pu)}).filter(function(pu){return pu.component===1});if((s.type==="offer"||s.type==="answer")&&!v&&d&&F>0&&l.transceivers[F]&&(l._disposeIceAndDtlsTransports(F),l.transceivers[F].iceGatherer=l.transceivers[0].iceGatherer,l.transceivers[F].iceTransport=l.transceivers[0].iceTransport,l.transceivers[F].dtlsTransport=l.transceivers[0].dtlsTransport,l.transceivers[F].rtpSender&&l.transceivers[F].rtpSender.setTransport(l.transceivers[0].dtlsTransport),l.transceivers[F].rtpReceiver&&l.transceivers[F].rtpReceiver.setTransport(l.transceivers[0].dtlsTransport)),s.type==="offer"&&!v){y=l.transceivers[F]||l._createTransceiver(C),y.mid=B,y.iceGatherer||(y.iceGatherer=l._createIceGatherer(F,d)),ou.length&&y.iceTransport.state==="new"&&(Z&&(!d||F===0)?y.iceTransport.setRemoteCandidates(ou):ou.forEach(function(pu){Rr(y.iceTransport,pu)})),O=a.RTCRtpReceiver.getCapabilities(C),u<15019&&(O.codecs=O.codecs.filter(function(pu){return pu.name!=="rtx"})),S=y.sendEncodingParameters||[{ssrc:(2*F+2)*1001}];var lu=!1;if(M==="sendrecv"||M==="sendonly"){if(lu=!y.rtpReceiver,T=y.rtpReceiver||new a.RTCRtpReceiver(y.dtlsTransport,C),lu){var G;K=T.track,k&&k.stream==="-"||(k?(E[k.stream]||(E[k.stream]=new a.MediaStream,Object.defineProperty(E[k.stream],"id",{get:function(){return k.stream}})),Object.defineProperty(K,"id",{get:function(){return k.track}}),G=E[k.stream]):(E.default||(E.default=new a.MediaStream),G=E.default)),G&&(e(K,G),y.associatedRemoteMediaStreams.push(G)),D.push([K,T,G])}}else y.rtpReceiver&&y.rtpReceiver.track&&(y.associatedRemoteMediaStreams.forEach(function(pu){var xu=pu.getTracks().find(function(Ju){return Ju.id===y.rtpReceiver.track.id});xu&&i(xu,pu)}),y.associatedRemoteMediaStreams=[]);y.localCapabilities=O,y.remoteCapabilities=Q,y.rtpReceiver=T,y.rtcpParameters=V,y.sendEncodingParameters=S,y.recvEncodingParameters=J,l._transceive(l.transceivers[F],!1,lu)}else if(s.type==="answer"&&!v){y=l.transceivers[F],L=y.iceGatherer,N=y.iceTransport,j=y.dtlsTransport,T=y.rtpReceiver,S=y.sendEncodingParameters,O=y.localCapabilities,l.transceivers[F].recvEncodingParameters=J,l.transceivers[F].remoteCapabilities=Q,l.transceivers[F].rtcpParameters=V,ou.length&&N.state==="new"&&((p||Z)&&(!d||F===0)?N.setRemoteCandidates(ou):ou.forEach(function(pu){Rr(y.iceTransport,pu)})),(!d||F===0)&&(N.state==="new"&&N.start(L,uu,"controlling"),j.state==="new"&&j.start(mu));var ru=hn(y.localCapabilities,y.remoteCapabilities),vu=ru.codecs.filter(function(pu){return pu.name.toLowerCase()==="rtx"}).length;!vu&&y.sendEncodingParameters[0].rtx&&delete y.sendEncodingParameters[0].rtx,l._transceive(y,M==="sendrecv"||M==="recvonly",M==="sendrecv"||M==="sendonly"),T&&(M==="sendrecv"||M==="sendonly")?(K=T.track,k?(E[k.stream]||(E[k.stream]=new a.MediaStream),e(K,E[k.stream]),D.push([K,T,E[k.stream]])):(E.default||(E.default=new a.MediaStream),e(K,E.default),D.push([K,T,E.default]))):delete y.rtpReceiver}}),l._dtlsRole===void 0&&(l._dtlsRole=s.type==="offer"?"active":"passive"),l._remoteDescription={type:s.type,sdp:s.sdp},s.type==="offer"?l._updateSignalingState("have-remote-offer"):l._updateSignalingState("stable"),Object.keys(E).forEach(function(h){var F=E[h];if(F.getTracks().length){if(l.remoteStreams.indexOf(F)===-1){l.remoteStreams.push(F);var g=new Event("addstream");g.stream=F,a.setTimeout(function(){l._dispatchEvent("addstream",g)})}D.forEach(function(C){var v=C[0],A=C[1];F.id===C[2].id&&n(l,v,A,[F])})}}),D.forEach(function(h){h[2]||n(l,h[0],h[1],[])}),a.setTimeout(function(){l&&l.transceivers&&l.transceivers.forEach(function(h){h.iceTransport&&h.iceTransport.state==="new"&&h.iceTransport.getRemoteCandidates().length>0&&(console.warn("Timeout for addRemoteCandidate. Consider sending an end-of-candidates notification"),h.iceTransport.addRemoteCandidate({}))})},4e3),Promise.resolve()},r.prototype.close=function(){this.transceivers.forEach(function(s){s.iceTransport&&s.iceTransport.stop(),s.dtlsTransport&&s.dtlsTransport.stop(),s.rtpSender&&s.rtpSender.stop(),s.rtpReceiver&&s.rtpReceiver.stop()}),this._isClosed=!0,this._updateSignalingState("closed")},r.prototype._updateSignalingState=function(s){this.signalingState=s;var l=new Event("signalingstatechange");this._dispatchEvent("signalingstatechange",l)},r.prototype._maybeFireNegotiationNeeded=function(){var s=this;this.signalingState!=="stable"||this.needNegotiation===!0||(this.needNegotiation=!0,a.setTimeout(function(){if(s.needNegotiation){s.needNegotiation=!1;var l=new Event("negotiationneeded");s._dispatchEvent("negotiationneeded",l)}},0))},r.prototype._updateIceConnectionState=function(){var s,l={new:0,closed:0,checking:0,connected:0,completed:0,disconnected:0,failed:0};if(this.transceivers.forEach(function(D){D.iceTransport&&!D.rejected&&l[D.iceTransport.state]++}),s="new",l.failed>0?s="failed":l.checking>0?s="checking":l.disconnected>0?s="disconnected":l.new>0?s="new":l.connected>0?s="connected":l.completed>0&&(s="completed"),s!==this.iceConnectionState){this.iceConnectionState=s;var E=new Event("iceconnectionstatechange");this._dispatchEvent("iceconnectionstatechange",E)}},r.prototype._updateConnectionState=function(){var s,l={new:0,closed:0,connecting:0,connected:0,completed:0,disconnected:0,failed:0};if(this.transceivers.forEach(function(D){D.iceTransport&&D.dtlsTransport&&!D.rejected&&(l[D.iceTransport.state]++,l[D.dtlsTransport.state]++)}),l.connected+=l.completed,s="new",l.failed>0?s="failed":l.connecting>0?s="connecting":l.disconnected>0?s="disconnected":l.new>0?s="new":l.connected>0&&(s="connected"),s!==this.connectionState){this.connectionState=s;var E=new Event("connectionstatechange");this._dispatchEvent("connectionstatechange",E)}},r.prototype.createOffer=function(){var s=this;if(s._isClosed)return Promise.reject(R0("InvalidStateError","Can not call createOffer after close"));var l=s.transceivers.filter(function(p){return p.kind==="audio"}).length,E=s.transceivers.filter(function(p){return p.kind==="video"}).length,D=arguments[0];if(D){if(D.mandatory||D.optional)throw new TypeError("Legacy mandatory/optional constraints not supported.");D.offerToReceiveAudio!==void 0&&(D.offerToReceiveAudio===!0?l=1:D.offerToReceiveAudio===!1?l=0:l=D.offerToReceiveAudio),D.offerToReceiveVideo!==void 0&&(D.offerToReceiveVideo===!0?E=1:D.offerToReceiveVideo===!1?E=0:E=D.offerToReceiveVideo)}for(s.transceivers.forEach(function(p){p.kind==="audio"?(l--,l<0&&(p.wantReceive=!1)):p.kind==="video"&&(E--,E<0&&(p.wantReceive=!1))});l>0||E>0;)l>0&&(s._createTransceiver("audio"),l--),E>0&&(s._createTransceiver("video"),E--);var x=Ku.writeSessionBoilerplate(s._sdpSessionId,s._sdpSessionVersion++);s.transceivers.forEach(function(p,d){var m=p.track,h=p.kind,F=p.mid||Ku.generateIdentifier();p.mid=F,p.iceGatherer||(p.iceGatherer=s._createIceGatherer(d,s.usingBundle));var g=a.RTCRtpSender.getCapabilities(h);u<15019&&(g.codecs=g.codecs.filter(function(v){return v.name!=="rtx"})),g.codecs.forEach(function(v){v.name==="H264"&&v.parameters["level-asymmetry-allowed"]===void 0&&(v.parameters["level-asymmetry-allowed"]="1"),p.remoteCapabilities&&p.remoteCapabilities.codecs&&p.remoteCapabilities.codecs.forEach(function(A){v.name.toLowerCase()===A.name.toLowerCase()&&v.clockRate===A.clockRate&&(v.preferredPayloadType=A.payloadType)})}),g.headerExtensions.forEach(function(v){var A=p.remoteCapabilities&&p.remoteCapabilities.headerExtensions||[];A.forEach(function(M){v.uri===M.uri&&(v.id=M.id)})});var C=p.sendEncodingParameters||[{ssrc:(2*d+1)*1001}];m&&u>=15019&&h==="video"&&!C[0].rtx&&(C[0].rtx={ssrc:C[0].ssrc+1}),p.wantReceive&&(p.rtpReceiver=new a.RTCRtpReceiver(p.dtlsTransport,h)),p.localCapabilities=g,p.sendEncodingParameters=C}),s._config.bundlePolicy!=="max-compat"&&(x+="a=group:BUNDLE "+s.transceivers.map(function(p){return p.mid}).join(" ")+`\r
`),x+=`a=ice-options:trickle\r
`,s.transceivers.forEach(function(p,d){x+=Gs(p,p.localCapabilities,"offer",p.stream,s._dtlsRole),x+=`a=rtcp-rsize\r
`,p.iceGatherer&&s.iceGatheringState!=="new"&&(d===0||!s.usingBundle)&&(p.iceGatherer.getLocalCandidates().forEach(function(m){m.component=1,x+="a="+Ku.writeCandidate(m)+`\r
`}),p.iceGatherer.state==="completed"&&(x+=`a=end-of-candidates\r
`))});var c=new a.RTCSessionDescription({type:"offer",sdp:x});return Promise.resolve(c)},r.prototype.createAnswer=function(){var s=this;if(s._isClosed)return Promise.reject(R0("InvalidStateError","Can not call createAnswer after close"));if(!(s.signalingState==="have-remote-offer"||s.signalingState==="have-local-pranswer"))return Promise.reject(R0("InvalidStateError","Can not call createAnswer in signalingState "+s.signalingState));var l=Ku.writeSessionBoilerplate(s._sdpSessionId,s._sdpSessionVersion++);s.usingBundle&&(l+="a=group:BUNDLE "+s.transceivers.map(function(x){return x.mid}).join(" ")+`\r
`),l+=`a=ice-options:trickle\r
`;var E=Ku.getMediaSections(s._remoteDescription.sdp).length;s.transceivers.forEach(function(x,c){if(!(c+1>E)){if(x.rejected){x.kind==="application"?x.protocol==="DTLS/SCTP"?l+=`m=application 0 DTLS/SCTP 5000\r
`:l+="m=application 0 "+x.protocol+` webrtc-datachannel\r
`:x.kind==="audio"?l+=`m=audio 0 UDP/TLS/RTP/SAVPF 0\r
a=rtpmap:0 PCMU/8000\r
`:x.kind==="video"&&(l+=`m=video 0 UDP/TLS/RTP/SAVPF 120\r
a=rtpmap:120 VP8/90000\r
`),l+=`c=IN IP4 0.0.0.0\r
a=inactive\r
a=mid:`+x.mid+`\r
`;return}if(x.stream){var p;x.kind==="audio"?p=x.stream.getAudioTracks()[0]:x.kind==="video"&&(p=x.stream.getVideoTracks()[0]),p&&u>=15019&&x.kind==="video"&&!x.sendEncodingParameters[0].rtx&&(x.sendEncodingParameters[0].rtx={ssrc:x.sendEncodingParameters[0].ssrc+1})}var d=hn(x.localCapabilities,x.remoteCapabilities),m=d.codecs.filter(function(h){return h.name.toLowerCase()==="rtx"}).length;!m&&x.sendEncodingParameters[0].rtx&&delete x.sendEncodingParameters[0].rtx,l+=Gs(x,d,"answer",x.stream,s._dtlsRole),x.rtcpParameters&&x.rtcpParameters.reducedSize&&(l+=`a=rtcp-rsize\r
`)}});var D=new a.RTCSessionDescription({type:"answer",sdp:l});return Promise.resolve(D)},r.prototype.addIceCandidate=function(s){var l=this,E;return s&&!(s.sdpMLineIndex!==void 0||s.sdpMid)?Promise.reject(new TypeError("sdpMLineIndex or sdpMid required")):new Promise(function(D,x){if(l._remoteDescription)if(!s||s.candidate==="")for(var c=0;c<l.transceivers.length&&!(!l.transceivers[c].rejected&&(l.transceivers[c].iceTransport.addRemoteCandidate({}),E=Ku.getMediaSections(l._remoteDescription.sdp),E[c]+=`a=end-of-candidates\r
`,l._remoteDescription.sdp=Ku.getDescription(l._remoteDescription.sdp)+E.join(""),l.usingBundle));c++);else{var p=s.sdpMLineIndex;if(s.sdpMid){for(var d=0;d<l.transceivers.length;d++)if(l.transceivers[d].mid===s.sdpMid){p=d;break}}var m=l.transceivers[p];if(m){if(m.rejected)return D();var h=Object.keys(s.candidate).length>0?Ku.parseCandidate(s.candidate):{};if(h.protocol==="tcp"&&(h.port===0||h.port===9)||h.component&&h.component!==1)return D();if((p===0||p>0&&m.iceTransport!==l.transceivers[0].iceTransport)&&!Rr(m.iceTransport,h))return x(R0("OperationError","Can not add ICE candidate"));var F=s.candidate.trim();F.indexOf("a=")===0&&(F=F.substr(2)),E=Ku.getMediaSections(l._remoteDescription.sdp),E[p]+="a="+(h.type?F:"end-of-candidates")+`\r
`,l._remoteDescription.sdp=Ku.getDescription(l._remoteDescription.sdp)+E.join("")}else return x(R0("OperationError","Can not add ICE candidate"))}else return x(R0("InvalidStateError","Can not add ICE candidate without a remote description"));D()})},r.prototype.getStats=function(s){if(s&&s instanceof a.MediaStreamTrack){var l=null;if(this.transceivers.forEach(function(D){D.rtpSender&&D.rtpSender.track===s?l=D.rtpSender:D.rtpReceiver&&D.rtpReceiver.track===s&&(l=D.rtpReceiver)}),!l)throw R0("InvalidAccessError","Invalid selector.");return l.getStats()}var E=[];return this.transceivers.forEach(function(D){["rtpSender","rtpReceiver","iceGatherer","iceTransport","dtlsTransport"].forEach(function(x){D[x]&&E.push(D[x].getStats())})}),Promise.all(E).then(function(D){var x=new Map;return D.forEach(function(c){c.forEach(function(p){x.set(p.id,p)})}),x})};var t=["RTCRtpSender","RTCRtpReceiver","RTCIceGatherer","RTCIceTransport","RTCDtlsTransport"];t.forEach(function(s){var l=a[s];if(l&&l.prototype&&l.prototype.getStats){var E=l.prototype.getStats;l.prototype.getStats=function(){return E.apply(this).then(function(D){var x=new Map;return Object.keys(D).forEach(function(c){D[c].type=ih(D[c]),x.set(c,D[c])}),x})}}});var o=["createOffer","createAnswer"];return o.forEach(function(s){var l=r.prototype[s];r.prototype[s]=function(){var E=arguments;return typeof E[0]=="function"||typeof E[1]=="function"?l.apply(this,[arguments[2]]).then(function(D){typeof E[0]=="function"&&E[0].apply(null,[D])},function(D){typeof E[1]=="function"&&E[1].apply(null,[D])}):l.apply(this,arguments)}}),o=["setLocalDescription","setRemoteDescription","addIceCandidate"],o.forEach(function(s){var l=r.prototype[s];r.prototype[s]=function(){var E=arguments;return typeof E[1]=="function"||typeof E[2]=="function"?l.apply(this,arguments).then(function(){typeof E[1]=="function"&&E[1].apply(null)},function(D){typeof E[2]=="function"&&E[2].apply(null,[D])}):l.apply(this,arguments)}}),["getStats"].forEach(function(s){var l=r.prototype[s];r.prototype[s]=function(){var E=arguments;return typeof E[1]=="function"?l.apply(this,arguments).then(function(){typeof E[1]=="function"&&E[1].apply(null)}):l.apply(this,arguments)}}),r};function b4(a){const u=a&&a.navigator,e=function(n){return{name:{PermissionDeniedError:"NotAllowedError"}[n.name]||n.name,message:n.message,constraint:n.constraint,toString(){return this.name}}},i=u.mediaDevices.getUserMedia.bind(u.mediaDevices);u.mediaDevices.getUserMedia=function(n){return i(n).catch(r=>Promise.reject(e(r)))}}function A4(a){"getDisplayMedia"in a.navigator&&a.navigator.mediaDevices&&(a.navigator.mediaDevices&&"getDisplayMedia"in a.navigator.mediaDevices||(a.navigator.mediaDevices.getDisplayMedia=a.navigator.getDisplayMedia.bind(a.navigator)))}function nt(a,u){if(a.RTCIceGatherer&&(a.RTCIceCandidate||(a.RTCIceCandidate=function(n){return n}),a.RTCSessionDescription||(a.RTCSessionDescription=function(n){return n}),u.version<15025)){const i=Object.getOwnPropertyDescriptor(a.MediaStreamTrack.prototype,"enabled");Object.defineProperty(a.MediaStreamTrack.prototype,"enabled",{set(n){i.set.call(this,n);const r=new Event("enabled");r.enabled=n,this.dispatchEvent(r)}})}a.RTCRtpSender&&!("dtmf"in a.RTCRtpSender.prototype)&&Object.defineProperty(a.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=new a.RTCDtmfSender(this):this.track.kind==="video"&&(this._dtmf=null)),this._dtmf}}),a.RTCDtmfSender&&!a.RTCDTMFSender&&(a.RTCDTMFSender=a.RTCDtmfSender);const e=rh(a,u.version);a.RTCPeerConnection=function(n){return n&&n.iceServers&&(n.iceServers=eh(n.iceServers,u.version),Tt("ICE servers after filtering:",n.iceServers)),new e(n)},a.RTCPeerConnection.prototype=e.prototype}function B4(a){a.RTCRtpSender&&!("replaceTrack"in a.RTCRtpSender.prototype)&&(a.RTCRtpSender.prototype.replaceTrack=a.RTCRtpSender.prototype.setTrack)}const Is=Object.freeze(Object.defineProperty({__proto__:null,shimGetDisplayMedia:A4,shimGetUserMedia:b4,shimPeerConnection:nt,shimReplaceTrack:B4},Symbol.toStringTag,{value:"Module"}));function y4(a,u){const e=a&&a.navigator,i=a&&a.MediaStreamTrack;if(e.getUserMedia=function(n,r,t){Un("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),e.mediaDevices.getUserMedia(n).then(r,t)},!(u.version>55&&"autoGainControl"in e.mediaDevices.getSupportedConstraints())){const n=function(t,o,s){o in t&&!(s in t)&&(t[s]=t[o],delete t[o])},r=e.mediaDevices.getUserMedia.bind(e.mediaDevices);if(e.mediaDevices.getUserMedia=function(t){return typeof t=="object"&&typeof t.audio=="object"&&(t=JSON.parse(JSON.stringify(t)),n(t.audio,"autoGainControl","mozAutoGainControl"),n(t.audio,"noiseSuppression","mozNoiseSuppression")),r(t)},i&&i.prototype.getSettings){const t=i.prototype.getSettings;i.prototype.getSettings=function(){const o=t.apply(this,arguments);return n(o,"mozAutoGainControl","autoGainControl"),n(o,"mozNoiseSuppression","noiseSuppression"),o}}if(i&&i.prototype.applyConstraints){const t=i.prototype.applyConstraints;i.prototype.applyConstraints=function(o){return this.kind==="audio"&&typeof o=="object"&&(o=JSON.parse(JSON.stringify(o)),n(o,"autoGainControl","mozAutoGainControl"),n(o,"noiseSuppression","mozNoiseSuppression")),t.apply(this,[o])}}}}function th(a,u){a.navigator.mediaDevices&&"getDisplayMedia"in a.navigator.mediaDevices||a.navigator.mediaDevices&&(a.navigator.mediaDevices.getDisplayMedia=function(i){if(!(i&&i.video)){const n=new DOMException("getDisplayMedia without video constraints is undefined");return n.name="NotFoundError",n.code=8,Promise.reject(n)}return i.video===!0?i.video={mediaSource:u}:i.video.mediaSource=u,a.navigator.mediaDevices.getUserMedia(i)})}function z4(a){typeof a=="object"&&a.RTCTrackEvent&&"receiver"in a.RTCTrackEvent.prototype&&!("transceiver"in a.RTCTrackEvent.prototype)&&Object.defineProperty(a.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function rt(a,u){if(typeof a!="object"||!(a.RTCPeerConnection||a.mozRTCPeerConnection))return;!a.RTCPeerConnection&&a.mozRTCPeerConnection&&(a.RTCPeerConnection=a.mozRTCPeerConnection),u.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(n){const r=a.RTCPeerConnection.prototype[n],t={[n](){return arguments[0]=new(n==="addIceCandidate"?a.RTCIceCandidate:a.RTCSessionDescription)(arguments[0]),r.apply(this,arguments)}};a.RTCPeerConnection.prototype[n]=t[n]});const e={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},i=a.RTCPeerConnection.prototype.getStats;a.RTCPeerConnection.prototype.getStats=function(){const[r,t,o]=arguments;return i.apply(this,[r||null]).then(s=>{if(u.version<53&&!t)try{s.forEach(l=>{l.type=e[l.type]||l.type})}catch(l){if(l.name!=="TypeError")throw l;s.forEach((E,D)=>{s.set(D,Object.assign({},E,{type:e[E.type]||E.type}))})}return s}).then(t,o)}}function S4(a){if(!(typeof a=="object"&&a.RTCPeerConnection&&a.RTCRtpSender)||a.RTCRtpSender&&"getStats"in a.RTCRtpSender.prototype)return;const u=a.RTCPeerConnection.prototype.getSenders;u&&(a.RTCPeerConnection.prototype.getSenders=function(){const n=u.apply(this,[]);return n.forEach(r=>r._pc=this),n});const e=a.RTCPeerConnection.prototype.addTrack;e&&(a.RTCPeerConnection.prototype.addTrack=function(){const n=e.apply(this,arguments);return n._pc=this,n}),a.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function M4(a){if(!(typeof a=="object"&&a.RTCPeerConnection&&a.RTCRtpSender)||a.RTCRtpSender&&"getStats"in a.RTCRtpReceiver.prototype)return;const u=a.RTCPeerConnection.prototype.getReceivers;u&&(a.RTCPeerConnection.prototype.getReceivers=function(){const i=u.apply(this,[]);return i.forEach(n=>n._pc=this),i}),Di(a,"track",e=>(e.receiver._pc=e.srcElement,e)),a.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function j4(a){!a.RTCPeerConnection||"removeStream"in a.RTCPeerConnection.prototype||(a.RTCPeerConnection.prototype.removeStream=function(e){Un("removeStream","removeTrack"),this.getSenders().forEach(i=>{i.track&&e.getTracks().includes(i.track)&&this.removeTrack(i)})})}function P4(a){a.DataChannel&&!a.RTCDataChannel&&(a.RTCDataChannel=a.DataChannel)}function T4(a){if(!(typeof a=="object"&&a.RTCPeerConnection))return;const u=a.RTCPeerConnection.prototype.addTransceiver;u&&(a.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];const i=arguments[1],n=i&&"sendEncodings"in i;n&&i.sendEncodings.forEach(t=>{if("rid"in t&&!/^[a-z0-9]{0,16}$/i.test(t.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in t&&!(parseFloat(t.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in t&&!(parseFloat(t.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const r=u.apply(this,arguments);if(n){const{sender:t}=r,o=t.getParameters();(!("encodings"in o)||o.encodings.length===1&&Object.keys(o.encodings[0]).length===0)&&(o.encodings=i.sendEncodings,t.sendEncodings=i.sendEncodings,this.setParametersPromises.push(t.setParameters(o).then(()=>{delete t.sendEncodings}).catch(()=>{delete t.sendEncodings})))}return r})}function w4(a){if(!(typeof a=="object"&&a.RTCRtpSender))return;const u=a.RTCRtpSender.prototype.getParameters;u&&(a.RTCRtpSender.prototype.getParameters=function(){const i=u.apply(this,arguments);return"encodings"in i||(i.encodings=[].concat(this.sendEncodings||[{}])),i})}function _4(a){if(!(typeof a=="object"&&a.RTCPeerConnection))return;const u=a.RTCPeerConnection.prototype.createOffer;a.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>u.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):u.apply(this,arguments)}}function L4(a){if(!(typeof a=="object"&&a.RTCPeerConnection))return;const u=a.RTCPeerConnection.prototype.createAnswer;a.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>u.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):u.apply(this,arguments)}}const Js=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:T4,shimCreateAnswer:L4,shimCreateOffer:_4,shimGetDisplayMedia:th,shimGetParameters:w4,shimGetUserMedia:y4,shimOnTrack:z4,shimPeerConnection:rt,shimRTCDataChannel:P4,shimReceiverGetStats:M4,shimRemoveStream:j4,shimSenderGetStats:S4},Symbol.toStringTag,{value:"Module"}));function R4(a){if(!(typeof a!="object"||!a.RTCPeerConnection)){if("getLocalStreams"in a.RTCPeerConnection.prototype||(a.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in a.RTCPeerConnection.prototype)){const u=a.RTCPeerConnection.prototype.addTrack;a.RTCPeerConnection.prototype.addStream=function(i){this._localStreams||(this._localStreams=[]),this._localStreams.includes(i)||this._localStreams.push(i),i.getAudioTracks().forEach(n=>u.call(this,n,i)),i.getVideoTracks().forEach(n=>u.call(this,n,i))},a.RTCPeerConnection.prototype.addTrack=function(i,...n){return n&&n.forEach(r=>{this._localStreams?this._localStreams.includes(r)||this._localStreams.push(r):this._localStreams=[r]}),u.apply(this,arguments)}}"removeStream"in a.RTCPeerConnection.prototype||(a.RTCPeerConnection.prototype.removeStream=function(e){this._localStreams||(this._localStreams=[]);const i=this._localStreams.indexOf(e);if(i===-1)return;this._localStreams.splice(i,1);const n=e.getTracks();this.getSenders().forEach(r=>{n.includes(r.track)&&this.removeTrack(r)})})}}function K4(a){if(!(typeof a!="object"||!a.RTCPeerConnection)&&("getRemoteStreams"in a.RTCPeerConnection.prototype||(a.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in a.RTCPeerConnection.prototype))){Object.defineProperty(a.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(e){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=e),this.addEventListener("track",this._onaddstreampoly=i=>{i.streams.forEach(n=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(n))return;this._remoteStreams.push(n);const r=new Event("addstream");r.stream=n,this.dispatchEvent(r)})})}});const u=a.RTCPeerConnection.prototype.setRemoteDescription;a.RTCPeerConnection.prototype.setRemoteDescription=function(){const i=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(n){n.streams.forEach(r=>{if(i._remoteStreams||(i._remoteStreams=[]),i._remoteStreams.indexOf(r)>=0)return;i._remoteStreams.push(r);const t=new Event("addstream");t.stream=r,i.dispatchEvent(t)})}),u.apply(i,arguments)}}}function N4(a){if(typeof a!="object"||!a.RTCPeerConnection)return;const u=a.RTCPeerConnection.prototype,e=u.createOffer,i=u.createAnswer,n=u.setLocalDescription,r=u.setRemoteDescription,t=u.addIceCandidate;u.createOffer=function(l,E){const D=arguments.length>=2?arguments[2]:arguments[0],x=e.apply(this,[D]);return E?(x.then(l,E),Promise.resolve()):x},u.createAnswer=function(l,E){const D=arguments.length>=2?arguments[2]:arguments[0],x=i.apply(this,[D]);return E?(x.then(l,E),Promise.resolve()):x};let o=function(s,l,E){const D=n.apply(this,[s]);return E?(D.then(l,E),Promise.resolve()):D};u.setLocalDescription=o,o=function(s,l,E){const D=r.apply(this,[s]);return E?(D.then(l,E),Promise.resolve()):D},u.setRemoteDescription=o,o=function(s,l,E){const D=t.apply(this,[s]);return E?(D.then(l,E),Promise.resolve()):D},u.addIceCandidate=o}function H4(a){const u=a&&a.navigator;if(u.mediaDevices&&u.mediaDevices.getUserMedia){const e=u.mediaDevices,i=e.getUserMedia.bind(e);u.mediaDevices.getUserMedia=n=>i(G4(n))}!u.getUserMedia&&u.mediaDevices&&u.mediaDevices.getUserMedia&&(u.getUserMedia=function(i,n,r){u.mediaDevices.getUserMedia(i).then(n,r)}.bind(u))}function G4(a){return a&&a.video!==void 0?Object.assign({},a,{video:d4(a.video)}):a}function V4(a){if(!a.RTCPeerConnection)return;const u=a.RTCPeerConnection;a.RTCPeerConnection=function(i,n){if(i&&i.iceServers){const r=[];for(let t=0;t<i.iceServers.length;t++){let o=i.iceServers[t];!o.hasOwnProperty("urls")&&o.hasOwnProperty("url")?(Un("RTCIceServer.url","RTCIceServer.urls"),o=JSON.parse(JSON.stringify(o)),o.urls=o.url,delete o.url,r.push(o)):r.push(i.iceServers[t])}i.iceServers=r}return new u(i,n)},a.RTCPeerConnection.prototype=u.prototype,"generateCertificate"in u&&Object.defineProperty(a.RTCPeerConnection,"generateCertificate",{get(){return u.generateCertificate}})}function I4(a){typeof a=="object"&&a.RTCTrackEvent&&"receiver"in a.RTCTrackEvent.prototype&&!("transceiver"in a.RTCTrackEvent.prototype)&&Object.defineProperty(a.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function J4(a){const u=a.RTCPeerConnection.prototype.createOffer;a.RTCPeerConnection.prototype.createOffer=function(i){if(i){typeof i.offerToReceiveAudio<"u"&&(i.offerToReceiveAudio=!!i.offerToReceiveAudio);const n=this.getTransceivers().find(t=>t.receiver.track.kind==="audio");i.offerToReceiveAudio===!1&&n?n.direction==="sendrecv"?n.setDirection?n.setDirection("sendonly"):n.direction="sendonly":n.direction==="recvonly"&&(n.setDirection?n.setDirection("inactive"):n.direction="inactive"):i.offerToReceiveAudio===!0&&!n&&this.addTransceiver("audio"),typeof i.offerToReceiveVideo<"u"&&(i.offerToReceiveVideo=!!i.offerToReceiveVideo);const r=this.getTransceivers().find(t=>t.receiver.track.kind==="video");i.offerToReceiveVideo===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):i.offerToReceiveVideo===!0&&!r&&this.addTransceiver("video")}return u.apply(this,arguments)}}function O4(a){typeof a!="object"||a.AudioContext||(a.AudioContext=a.webkitAudioContext)}const Os=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:O4,shimCallbacksAPI:N4,shimConstraints:G4,shimCreateOfferLegacy:J4,shimGetUserMedia:H4,shimLocalStreamsAPI:R4,shimRTCIceServerUrls:V4,shimRemoteStreamsAPI:K4,shimTrackEventTransceiver:I4},Symbol.toStringTag,{value:"Module"}));function zn(a){if(!a.RTCIceCandidate||a.RTCIceCandidate&&"foundation"in a.RTCIceCandidate.prototype)return;const u=a.RTCIceCandidate;a.RTCIceCandidate=function(i){if(typeof i=="object"&&i.candidate&&i.candidate.indexOf("a=")===0&&(i=JSON.parse(JSON.stringify(i)),i.candidate=i.candidate.substr(2)),i.candidate&&i.candidate.length){const n=new u(i),r=yn.parseCandidate(i.candidate),t=Object.assign(n,r);return t.toJSON=function(){return{candidate:t.candidate,sdpMid:t.sdpMid,sdpMLineIndex:t.sdpMLineIndex,usernameFragment:t.usernameFragment}},t}return new u(i)},a.RTCIceCandidate.prototype=u.prototype,Di(a,"icecandidate",e=>(e.candidate&&Object.defineProperty(e,"candidate",{value:new a.RTCIceCandidate(e.candidate),writable:"false"}),e))}function Bi(a,u){if(!a.RTCPeerConnection)return;"sctp"in a.RTCPeerConnection.prototype||Object.defineProperty(a.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const e=function(o){if(!o||!o.sdp)return!1;const s=yn.splitSections(o.sdp);return s.shift(),s.some(l=>{const E=yn.parseMLine(l);return E&&E.kind==="application"&&E.protocol.indexOf("SCTP")!==-1})},i=function(o){const s=o.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(s===null||s.length<2)return-1;const l=parseInt(s[1],10);return l!==l?-1:l},n=function(o){let s=65536;return u.browser==="firefox"&&(u.version<57?o===-1?s=16384:s=2147483637:u.version<60?s=u.version===57?65535:65536:s=2147483637),s},r=function(o,s){let l=65536;u.browser==="firefox"&&u.version===57&&(l=65535);const E=yn.matchPrefix(o.sdp,"a=max-message-size:");return E.length>0?l=parseInt(E[0].substr(19),10):u.browser==="firefox"&&s!==-1&&(l=2147483637),l},t=a.RTCPeerConnection.prototype.setRemoteDescription;a.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,u.browser==="chrome"&&u.version>=76){const{sdpSemantics:s}=this.getConfiguration();s==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(e(arguments[0])){const s=i(arguments[0]),l=n(s),E=r(arguments[0],s);let D;l===0&&E===0?D=Number.POSITIVE_INFINITY:l===0||E===0?D=Math.max(l,E):D=Math.min(l,E);const x={};Object.defineProperty(x,"maxMessageSize",{get(){return D}}),this._sctp=x}return t.apply(this,arguments)}}function yi(a){if(!(a.RTCPeerConnection&&"createDataChannel"in a.RTCPeerConnection.prototype))return;function u(i,n){const r=i.send;i.send=function(){const o=arguments[0],s=o.length||o.size||o.byteLength;if(i.readyState==="open"&&n.sctp&&s>n.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+n.sctp.maxMessageSize+" bytes)");return r.apply(i,arguments)}}const e=a.RTCPeerConnection.prototype.createDataChannel;a.RTCPeerConnection.prototype.createDataChannel=function(){const n=e.apply(this,arguments);return u(n,this),n},Di(a,"datachannel",i=>(u(i.channel,i.target),i))}function tt(a){if(!a.RTCPeerConnection||"connectionState"in a.RTCPeerConnection.prototype)return;const u=a.RTCPeerConnection.prototype;Object.defineProperty(u,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(u,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(e){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),e&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=e)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(e=>{const i=u[e];u[e]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=n=>{const r=n.target;if(r._lastConnectionState!==r.connectionState){r._lastConnectionState=r.connectionState;const t=new Event("connectionstatechange",n);r.dispatchEvent(t)}return n},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),i.apply(this,arguments)}})}function ot(a,u){if(!a.RTCPeerConnection||u.browser==="chrome"&&u.version>=71||u.browser==="safari"&&u.version>=605)return;const e=a.RTCPeerConnection.prototype.setRemoteDescription;a.RTCPeerConnection.prototype.setRemoteDescription=function(n){if(n&&n.sdp&&n.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const r=n.sdp.split(`
`).filter(t=>t.trim()!=="a=extmap-allow-mixed").join(`
`);a.RTCSessionDescription&&n instanceof a.RTCSessionDescription?arguments[0]=new a.RTCSessionDescription({type:n.type,sdp:r}):n.sdp=r}return e.apply(this,arguments)}}function Sn(a,u){if(!(a.RTCPeerConnection&&a.RTCPeerConnection.prototype))return;const e=a.RTCPeerConnection.prototype.addIceCandidate;!e||e.length===0||(a.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(u.browser==="chrome"&&u.version<78||u.browser==="firefox"&&u.version<68||u.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():e.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}const oh=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:ot,shimAddIceCandidateNullOrEmpty:Sn,shimConnectionState:tt,shimMaxMessageSize:Bi,shimRTCIceCandidate:zn,shimSendThrowTypeError:yi},Symbol.toStringTag,{value:"Module"}));function sh({window:a}={},u={shimChrome:!0,shimFirefox:!0,shimEdge:!0,shimSafari:!0}){const e=Tt,i=X6(a),n={browserDetails:i,commonShim:oh,extractVersion:Ai,disableLog:Y6,disableWarnings:Q6};switch(i.browser){case"chrome":if(!Hs||!it||!u.shimChrome)return e("Chrome shim is not included in this adapter release."),n;if(i.version===null)return e("Chrome shim can not determine version, not shimming."),n;e("adapter.js shimming chrome."),n.browserShim=Hs,Sn(a,i),m4(a,i),h4(a),it(a,i),p4(a),v4(a,i),F4(a),g4(a),k4(a),f4(a,i),zn(a),tt(a),Bi(a,i),yi(a),ot(a,i);break;case"firefox":if(!Js||!rt||!u.shimFirefox)return e("Firefox shim is not included in this adapter release."),n;e("adapter.js shimming firefox."),n.browserShim=Js,Sn(a,i),y4(a,i),rt(a,i),z4(a),j4(a),S4(a),M4(a),P4(a),T4(a),w4(a),_4(a),L4(a),zn(a),tt(a),Bi(a,i),yi(a);break;case"edge":if(!Is||!nt||!u.shimEdge)return e("MS edge shim is not included in this adapter release."),n;e("adapter.js shimming edge."),n.browserShim=Is,b4(a),A4(a),nt(a,i),B4(a),Bi(a,i),yi(a);break;case"safari":if(!Os||!u.shimSafari)return e("Safari shim is not included in this adapter release."),n;e("adapter.js shimming safari."),n.browserShim=Os,Sn(a,i),V4(a),J4(a),N4(a),R4(a),K4(a),I4(a),H4(a),O4(a),zn(a),Bi(a,i),yi(a),ot(a,i);break;default:e("Unsupported browser!");break}return n}const Ws=sh({window:typeof window>"u"?void 0:window});function we(a,u,e,i){Object.defineProperty(a,u,{get:e,set:i,enumerable:!0,configurable:!0})}var Kr=Ws.default||Ws,Ci=new(function(){function a(){this.isIOS=["iPad","iPhone","iPod"].includes(navigator.platform),this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}return a.prototype.isWebRTCSupported=function(){return typeof RTCPeerConnection<"u"},a.prototype.isBrowserSupported=function(){var u=this.getBrowser(),e=this.getVersion(),i=this.supportedBrowsers.includes(u);return i?u==="chrome"?e>=this.minChromeVersion:u==="firefox"?e>=this.minFirefoxVersion:u==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1},a.prototype.getBrowser=function(){return Kr.browserDetails.browser},a.prototype.getVersion=function(){return Kr.browserDetails.version||0},a.prototype.isUnifiedPlanSupported=function(){var u=this.getBrowser(),e=Kr.browserDetails.version||0;if(u==="chrome"&&e<this.minChromeVersion)return!1;if(u==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;var i,n=!1;try{i=new RTCPeerConnection,i.addTransceiver("audio"),n=!0}catch{}finally{i&&i.close()}return n},a.prototype.toString=function(){return`Supports:
    browser:`.concat(this.getBrowser(),`
    version:`).concat(this.getVersion(),`
    isIOS:`).concat(this.isIOS,`
    isWebRTCSupported:`).concat(this.isWebRTCSupported(),`
    isBrowserSupported:`).concat(this.isBrowserSupported(),`
`:`
`;return i.join(n)}commitMessage(){return`${this.faker.hacker.verb()} ${this.faker.hacker.adjective()} ${this.faker.hacker.noun()}`}commitSha(){return this.faker.datatype.hexadecimal({length:40,case:"lower",prefix:""})}shortSha(){return this.faker.datatype.hexadecimal({length:7,case:"lower",prefix:""})}},jl=class{constructor(a){this.faker=a;for(let u of Object.getOwnPropertyNames(jl.prototype))u==="constructor"||typeof this[u]!="function"||(this[u]=this[u].bind(this))}abbreviation(){return this.faker.helpers.arrayElement(this.faker.definitions.hacker.abbreviation)}adjective(){return this.faker.helpers.arrayElement(this.faker.definitions.hacker.adjective)}noun(){return this.faker.helpers.arrayElement(this.faker.definitions.hacker.noun)}verb(){return this.faker.helpers.arrayElement(this.faker.definitions.hacker.verb)}ingverb(){return this.faker.helpers.arrayElement(this.faker.definitions.hacker.ingverb)}phrase(){let a={abbreviation:this.abbreviation,adjective:this.adjective,ingverb:this.ingverb,noun:this.noun,verb:this.verb},u=this.faker.helpers.arrayElement(this.faker.definitions.hacker.phrase);return this.faker.helpers.mustache(u,a)}};function H0u(a){let u=G0u(a.replace(/L?$/,"0"));return u===0?0:10-u}function G0u(a){a=a.replace(/[\s-]/g,"");let u=0,e=!1;for(let i=a.length-1;i>=0;i--){let n=parseInt(a.substring(i,i+1));e&&(n*=2,n>9&&(n=n%10+1)),u+=n,e=!e}return u%10}var V0u={},I0u=[];function J0u(a,u){return a[u]===void 0?-1:0}function n1(a,u,e,i,n){throw console.error("Error",e),console.log(`Found ${Object.keys(i).length} unique entries before throwing error.
retried: ${n}
total time: ${u-a}ms`),new j0(`${e} for uniqueness check.

May not be able to generate any more unique values with current settings.
Try adjusting maxTime or maxRetries parameters for faker.helpers.unique().`)}function Pl(a,u,e={}){var i;let n=new Date().getTime(),{startTime:r=new Date().getTime(),maxTime:t=50,maxRetries:o=50,compare:s=J0u,store:l=V0u}=e,{exclude:E=I0u}=e;if(e.currentIterations=(i=e.currentIterations)!=null?i:0,Array.isArray(E)||(E=[E]),n-r>=t)return n1(r,n,`Exceeded maxTime: ${t}`,l,e.currentIterations);if(e.currentIterations>=o)return n1(r,n,`Exceeded maxRetries: ${o}`,l,e.currentIterations);let D=a.apply(this,u);return s(l,D)===-1&&E.indexOf(D)===-1?(l[D]=D,e.currentIterations=0,D):(e.currentIterations++,Pl(a,u,{...e,startTime:r,maxTime:t,maxRetries:o,compare:s,exclude:E}))}var Tl=class{constructor(a){this.faker=a;for(let u of Object.getOwnPropertyNames(Tl.prototype))u==="constructor"||typeof this[u]!="function"||(this[u]=this[u].bind(this))}slugify(a=""){return a.replace(/ /g,"-").replace(/[^\一-龠\ぁ-ゔ\ァ-ヴー\w\.\-]+/g,"")}replaceSymbolWithNumber(a="",u="#"){let e="";for(let i=0;i<a.length;i++)a.charAt(i)===u?e+=this.faker.datatype.number(9):a.charAt(i)==="!"?e+=this.faker.datatype.number({min:2,max:9}):e+=a.charAt(i);return e}replaceSymbols(a=""){let u=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],e="";for(let i=0;i<a.length;i++)a.charAt(i)==="#"?e+=this.faker.datatype.number(9):a.charAt(i)==="?"?e+=this.arrayElement(u):a.charAt(i)==="*"?e+=this.faker.datatype.boolean()?this.arrayElement(u):this.faker.datatype.number(9):e+=a.charAt(i);return e}replaceCreditCardSymbols(a="6453-####-####-####-###L",u="#"){a=this.regexpStyleStringParse(a),a=this.replaceSymbolWithNumber(a,u);let e=H0u(a);return a.replace("L",String(e))}repeatString(a="",u=0){return E0({deprecated:"faker.helpers.repeatString()",proposed:"String.prototype.repeat()",since:"7.5",until:"8.0"}),a.repeat(u)}regexpStyleStringParse(a=""){let u=/(.)\{(\d+)\,(\d+)\}/,e=/(.)\{(\d+)\}/,i=/\[(\d+)\-(\d+)\]/,n,r,t,o,s=a.match(u);for(;s!=null;)n=parseInt(s[2]),r=parseInt(s[3]),n>r&&(t=r,r=n,n=t),o=this.faker.datatype.number({min:n,max:r}),a=a.slice(0,s.index)+s[1].repeat(o)+a.slice(s.index+s[0].length),s=a.match(u);for(s=a.match(e);s!=null;)o=parseInt(s[2]),a=a.slice(0,s.index)+s[1].repeat(o)+a.slice(s.index+s[0].length),s=a.match(e);for(s=a.match(i);s!=null;)n=parseInt(s[1]),r=parseInt(s[2]),n>r&&(t=r,r=n,n=t),a=a.slice(0,s.index)+this.faker.datatype.number({min:n,max:r}).toString()+a.slice(s.index+s[0].length),s=a.match(i);return a}shuffle(a){if(a==null||a.length===0)return a||[];for(let u=a.length-1;u>0;--u){let e=this.faker.datatype.number(u),i=a[u];a[u]=a[e],a[e]=i}return a}uniqueArray(a,u){if(Array.isArray(a)){let i=new Set(a),n=Array.from(i);return this.shuffle(n).splice(0,u)}let e=new Set;try{if(typeof a=="function")for(;e.size<u;)e.add(a())}catch{}return Array.from(e)}mustache(a,u){if(a==null)return"";for(let e in u){let i=new RegExp(`{{${e}}}`,"g"),n=u[e];a=a.replace(i,n)}return a}maybe(a,u={}){let{probability:e=.5}=u;if(this.faker.datatype.float({min:0,max:1})<e)return a()}objectKey(a){let u=Object.keys(a);return this.arrayElement(u)}objectValue(a){let u=this.faker.helpers.objectKey(a);return a[u]}arrayElement(a=["a","b","c"]){let u=a.length>1?this.faker.datatype.number({max:a.length-1}):0;return a[u]}arrayElements(a=["a","b","c"],u){typeof u!="number"?u=a.length===0?0:this.faker.datatype.number({min:1,max:a.length}):u>a.length?u=a.length:u<0&&(u=0);let e=a.slice(0),i=a.length,n=i-u,r,t;for(;i-- >n;)t=Math.floor((i+1)*this.faker.datatype.float({min:0,max:.99})),r=e[t],e[t]=e[i],e[i]=r;return e.slice(n)}fake(a){if(typeof a!="string"||a.length===0)throw new j0("string parameter is required!");let u=a.search(/{{[a-z]/),e=a.indexOf("}}",u);if(u===-1||e===-1)return a;let i=a.substring(u+2,e+2).replace("}}","").replace("{{",""),n=/\(([^)]+)\)/,r=n.exec(i),t="";r&&(i=i.replace(n,""),t=r[1]);let o=i.split("."),s=this.faker,l=this.faker.definitions;for(let p of o)s=s==null?void 0:s[p],l=l==null?void 0:l[p];let E;if(typeof s=="function")E=s;else if(Array.isArray(l))E=()=>this.faker.helpers.arrayElement(l);else throw new j0(`Invalid module method or definition: ${i}
- faker.${i} is not a function
- faker.definitions.${i} is not an array`);E=E.bind(this);let D;try{D=JSON.parse(t)}catch{D=t}let x;typeof D=="string"&&D.length===0?x=String(E()):x=String(E(D));let c=a.substring(0,u)+x+a.substring(e+2);return c===""?"":this.fake(c)}unique(a,u,e={}){let{maxTime:i=50,maxRetries:n=50}=e;return Pl(a,u,{...e,startTime:new Date().getTime(),maxTime:i,maxRetries:n,currentIterations:0})}},O0u=class{constructor(a){this.faker=a}image(a,u,e,i){return this.imageUrl(a,u,e,i)}imageGrayscale(a,u,e){return this.imageUrl(a,u,e)}imageBlurred(a,u,e){return this.imageUrl(a,u,void 0,e)}imageRandomSeeded(a,u,e,i,n){return this.imageUrl(a,u,e,i,n)}avatar(){return E0({deprecated:"faker.image.lorempicsum.avatar()",proposed:"faker.internet.avatar()",since:"7.3",until:"8.0"}),this.faker.internet.avatar()}imageUrl(a,u,e,i,n){a=a||640,u=u||480;let r="https://picsum.photos";return n&&(r+=`/seed/${n}`),r+=`/${a}/${u}`,e&&i?`${r}?grayscale&blur=${i}`:e?`${r}?grayscale`:i?`${r}?blur=${i}`:r}},W0u=class{constructor(a){this.faker=a}image(a,u,e){let i=["abstract","animals","business","cats","city","food","nightlife","fashion","people","nature","sports","technics","transport"];return this[this.faker.helpers.arrayElement(i)](a,u,e)}avatar(){return E0({deprecated:"faker.image.lorempixel.avatar()",proposed:"faker.internet.avatar()",since:"7.3",until:"8.0"}),this.faker.internet.avatar()}imageUrl(a,u,e,i){a=a||640,u=u||480;let n=`https://lorempixel.com/${a}/${u}`;return e!=null&&(n+=`/${e}`),i&&(n+=`?${this.faker.datatype.number()}`),n}abstract(a,u,e){return this.faker.image.lorempixel.imageUrl(a,u,"abstract",e)}animals(a,u,e){return this.faker.image.lorempixel.imageUrl(a,u,"animals",e)}business(a,u,e){return this.faker.image.lorempixel.imageUrl(a,u,"business",e)}cats(a,u,e){return this.faker.image.lorempixel.imageUrl(a,u,"cats",e)}city(a,u,e){return this.faker.image.lorempixel.imageUrl(a,u,"city",e)}food(a,u,e){return this.faker.image.lorempixel.imageUrl(a,u,"food",e)}nightlife(a,u,e){return this.faker.image.lorempixel.imageUrl(a,u,"nightlife",e)}fashion(a,u,e){return this.faker.image.lorempixel.imageUrl(a,u,"fashion",e)}people(a,u,e){return this.faker.image.lorempixel.imageUrl(a,u,"people",e)}nature(a,u,e){return this.faker.image.lorempixel.imageUrl(a,u,"nature",e)}sports(a,u,e){return this.faker.image.lorempixel.imageUrl(a,u,"sports",e)}technics(a,u,e){return this.faker.image.lorempixel.imageUrl(a,u,"technics",e)}transport(a,u,e){return this.faker.image.lorempixel.imageUrl(a,u,"transport",e)}},wl=class{constructor(a){this.faker=a;for(let u of Object.getOwnPropertyNames(wl.prototype))u==="constructor"||typeof this[u]!="function"||(this[u]=this[u].bind(this))}imageUrl(a,u,e,i,n,r){a=a||640,u=u||a;let t="https://via.placeholder.com";return t+=`/${a}x${u}`,n!=null&&(t+=`/${n.replace("#","").toUpperCase()}`,r!=null&&(t+=`/${r.replace("#","").toUpperCase()}`)),i!=null&&(t+=`.${i}`),e!=null&&(t+=`?${new URLSearchParams({text:e}).toString()}`),t}randomUrl(a,u,e){return this.imageUrl(a,u,this.faker.lorem.word(),e,this.faker.color.rgb({casing:"upper",prefix:""}),this.faker.color.rgb({casing:"upper",prefix:""}))}},U0u=class{constructor(a){this.faker=a}get categories(){return E0({deprecated:"faker.image.unsplash.categories",since:"7.3",until:"8.0"}),["food","nature","people","technology","objects","buildings"]}image(a,u,e){return this.imageUrl(a,u,void 0,e)}avatar(){return E0({deprecated:"faker.image.unsplash.avatar()",proposed:"faker.internet.avatar()",since:"7.3",until:"8.0"}),this.faker.internet.avatar()}imageUrl(a,u,e,i){a=a||640,u=u||480;let n="https://source.unsplash.com";return e!=null&&(n+=`/category/${e}`),n+=`/${a}x${u}`,i!=null&&/^([A-Za-z0-9].+,[A-Za-z0-9]+)$|^([A-Za-z0-9]+)$/.test(i)&&(n+=`?${i}`),n}food(a,u,e){return this.faker.image.unsplash.imageUrl(a,u,"food",e)}people(a,u,e){return this.faker.image.unsplash.imageUrl(a,u,"people",e)}nature(a,u,e){return this.faker.image.unsplash.imageUrl(a,u,"nature",e)}technology(a,u,e){return this.faker.image.unsplash.imageUrl(a,u,"technology",e)}objects(a,u,e){return this.faker.image.unsplash.imageUrl(a,u,"objects",e)}buildings(a,u,e){return this.faker.image.unsplash.imageUrl(a,u,"buildings",e)}},_l=class{constructor(a){this.faker=a;for(let u of Object.getOwnPropertyNames(_l.prototype))u==="constructor"||typeof this[u]!="function"||(this[u]=this[u].bind(this));this.lorempixel=new W0u(this.faker),this.unsplash=new U0u(this.faker),this.lorempicsum=new O0u(this.faker),this.placeholder=new wl(this.faker)}image(a,u,e){let i=["abstract","animals","business","cats","city","food","nightlife","fashion","people","nature","sports","technics","transport"];return this[this.faker.helpers.arrayElement(i)](a,u,e)}avatar(){return this.faker.internet.avatar()}imageUrl(a,u,e,i){a=a||640,u=u||480;let n=`https://loremflickr.com/${a}/${u}`;return e!=null&&(n+=`/${e}`),i&&(n+=`?lock=${this.faker.datatype.number()}`),n}abstract(a,u,e){return this.imageUrl(a,u,"abstract",e)}animals(a,u,e){return this.imageUrl(a,u,"animals",e)}business(a,u,e){return this.imageUrl(a,u,"business",e)}cats(a,u,e){return this.imageUrl(a,u,"cats",e)}city(a,u,e){return this.imageUrl(a,u,"city",e)}food(a,u,e){return this.imageUrl(a,u,"food",e)}nightlife(a,u,e){return this.imageUrl(a,u,"nightlife",e)}fashion(a,u,e){return this.imageUrl(a,u,"fashion",e)}people(a,u,e){return this.imageUrl(a,u,"people",e)}nature(a,u,e){return this.imageUrl(a,u,"nature",e)}sports(a,u,e){return this.imageUrl(a,u,"sports",e)}technics(a,u,e){return this.imageUrl(a,u,"technics",e)}transport(a,u,e){return this.imageUrl(a,u,"transport",e)}dataUri(a,u,e="grey"){let i=`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" baseProfile="full" width="${a}" height="${u}"><rect width="100%" height="100%" fill="${e}"/><text x="${a/2}" y="${u/2}" font-size="20" alignment-baseline="middle" text-anchor="middle" fill="white">${a}x${u}</text></svg>`;return"data:image/svg+xml;charset=UTF-8,"+encodeURIComponent(i)}};function $0u(a){let u=E=>{let D=a.datatype.number({min:0,max:100})/100,x=0,c=0,p;for(let d in E)if(Object.prototype.hasOwnProperty.call(E,d)){if(c=E[d]+x,p=d,D>=x&&D<=c)break;x=x+E[d]}return p},e=()=>a.helpers.arrayElement(["AB","AF","AN","AR","AS","AZ","BE","BG","BN","BO","BR","BS","CA","CE","CO","CS","CU","CY","DA","DE","EL","EN","EO","ES","ET","EU","FA","FI","FJ","FO","FR","FY","GA","GD","GL","GV","HE","HI","HR","HT","HU","HY","ID","IS","IT","JA","JV","KA","KG","KO","KU","KW","KY","LA","LB","LI","LN","LT","LV","MG","MK","MN","MO","MS","MT","MY","NB","NE","NL","NN","NO","OC","PL","PT","RM","RO","RU","SC","SE","SK","SL","SO","SQ","SR","SV","SW","TK","TR","TY","UK","UR","UZ","VI","VO","YI","ZH"]),i=()=>{let E=u({chrome:.45132810566,iexplorer:.27477061836,firefox:.19384170608,safari:.06186781118,opera:.01574236955}),D=u({chrome:{win:.89,mac:.09,lin:.02},firefox:{win:.83,mac:.16,lin:.01},opera:{win:.91,mac:.03,lin:.06},safari:{win:.04,mac:.96},iexplorer:{win:1}}[E]);return[E,D]},n=E=>{let D={lin:["i686","x86_64"],mac:{Intel:.48,PPC:.01,"U; Intel":.48,"U; PPC":.01},win:["","WOW64","Win64; x64"]}[E];return Array.isArray(D)?a.helpers.arrayElement(D):u(D)},r=E=>{let D="";for(let x=0;x<E;x++)D+=`.${a.datatype.number({min:0,max:9})}`;return D},t={net(){return[a.datatype.number({min:1,max:4}),a.datatype.number({min:0,max:9}),a.datatype.number({min:1e4,max:99999}),a.datatype.number({min:0,max:9})].join(".")},nt(){return[a.datatype.number({min:5,max:6}),a.datatype.number({min:0,max:3})].join(".")},ie(){return a.datatype.number({min:7,max:11})},trident(){return[a.datatype.number({min:3,max:7}),a.datatype.number({min:0,max:1})].join(".")},osx(E){return[10,a.datatype.number({min:5,max:10}),a.datatype.number({min:0,max:9})].join(E||".")},chrome(){return[a.datatype.number({min:13,max:39}),0,a.datatype.number({min:800,max:899}),0].join(".")},presto(){return`2.9.${a.datatype.number({min:160,max:190})}`},presto2(){return`${a.datatype.number({min:10,max:12})}.00`},safari(){return[a.datatype.number({min:531,max:538}),a.datatype.number({min:0,max:2}),a.datatype.number({min:0,max:2})].join(".")}},o={firefox(E){let D=`${a.datatype.number({min:5,max:15})}${r(2)}`,x=`Gecko/20100101 Firefox/${D}`,c=n(E);return`Mozilla/5.0 ${E==="win"?`(Windows NT ${t.nt()}${c?`; ${c}`:""}`:E==="mac"?`(Macintosh; ${c} Mac OS X ${t.osx()}`:`(X11; Linux ${c}`}; rv:${D.slice(0,-2)}) ${x}`},iexplorer(){let E=t.ie();return E>=11?`Mozilla/5.0 (Windows NT 6.${a.datatype.number({min:1,max:3})}; Trident/7.0; ${a.datatype.boolean()?"Touch; ":""}rv:11.0) like Gecko`:`Mozilla/5.0 (compatible; MSIE ${E}.0; Windows NT ${t.nt()}; Trident/${t.trident()}${a.datatype.boolean()?`; .NET CLR ${t.net()}`:""})`},opera(E){let D=` Presto/${t.presto()} Version/${t.presto2()})`,x=E==="win"?`(Windows NT ${t.nt()}; U; ${e()}${D}`:E==="lin"?`(X11; Linux ${n(E)}; U; ${e()}${D}`:`(Macintosh; Intel Mac OS X ${t.osx()} U; ${e()} Presto/${t.presto()} Version/${t.presto2()})`;return`Opera/${a.datatype.number({min:9,max:14})}.${a.datatype.number({min:0,max:99})} ${x}`},safari(E){let D=t.safari(),x=`${a.datatype.number({min:4,max:7})}.${a.datatype.number({min:0,max:1})}.${a.datatype.number({min:0,max:10})}`;return`Mozilla/5.0 ${E==="mac"?`(Macintosh; ${n("mac")} Mac OS X ${t.osx("_")} rv:${a.datatype.number({min:2,max:6})}.0; ${e()}) `:`(Windows; U; Windows NT ${t.nt()})`}AppleWebKit/${D} (KHTML, like Gecko) Version/${x} Safari/${D}`},chrome(E){let D=t.safari();return`Mozilla/5.0 ${E==="mac"?`(Macintosh; ${n("mac")} Mac OS X ${t.osx("_")}) `:E==="win"?`(Windows; U; Windows NT ${t.nt()})`:`(X11; Linux ${n(E)}`} AppleWebKit/${D} (KHTML, like Gecko) Chrome/${t.chrome()} Safari/${D}`}},[s,l]=i();return o[s](l)}var Ll=class{constructor(a){this.faker=a;for(let u of Object.getOwnPropertyNames(Ll.prototype))u==="constructor"||typeof this[u]!="function"||(this[u]=this[u].bind(this))}avatar(){return`https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${this.faker.datatype.number(1249)}.jpg`}email(a,u,e,i){e=e||this.faker.helpers.arrayElement(this.faker.definitions.internet.free_email);let n=this.faker.helpers.slugify(this.userName(a,u));if(i!=null&&i.allowSpecialCharacters){let r="._-".split(""),t=".!#$%&'*+-/=?^_`{|}~".split("");n=n.replace(this.faker.helpers.arrayElement(r),this.faker.helpers.arrayElement(t))}return`${n}@${e}`}exampleEmail(a,u,e){let i=this.faker.helpers.arrayElement(this.faker.definitions.internet.example_email);return this.email(a,u,i,e)}userName(a,u){let e;switch(a=a||this.faker.name.firstName(),u=u||this.faker.name.lastName(),this.faker.datatype.number(2)){case 0:e=`${a}${this.faker.datatype.number(99)}`;break;case 1:e=a+this.faker.helpers.arrayElement([".","_"])+u;break;case 2:e=`${a}${this.faker.helpers.arrayElement([".","_"])}${u}${this.faker.datatype.number(99)}`;break}return e=e.toString().replace(/'/g,""),e=e.replace(/ /g,""),e}protocol(){let a=["http","https"];return this.faker.helpers.arrayElement(a)}httpMethod(){let a=["GET","POST","PUT","DELETE","PATCH"];return this.faker.helpers.arrayElement(a)}httpStatusCode(a={}){let{types:u=Object.keys(this.faker.definitions.internet.http_status_code)}=a,e=this.faker.helpers.arrayElement(u);return this.faker.helpers.arrayElement(this.faker.definitions.internet.http_status_code[e])}url(){return`${this.protocol()}://${this.domainName()}`}domainName(){return`${this.domainWord()}.${this.domainSuffix()}`}domainSuffix(){return this.faker.helpers.arrayElement(this.faker.definitions.internet.domain_suffix)}domainWord(){return`${this.faker.word.adjective()}-${this.faker.word.noun()}`.replace(/([\\~#&*{}/:<>?|\"'])/gi,"").replace(/\s/g,"-").replace(/-{2,}/g,"-").toLowerCase()}ip(){return this.ipv4()}ipv4(){let a=()=>this.faker.datatype.number(255).toFixed(0),u=[];for(let e=0;e<4;e++)u[e]=a();return u.join(".")}ipv6(){let a=()=>{let e="";for(let i=0;i<4;i++)e+=this.faker.helpers.arrayElement(["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]);return e},u=[];for(let e=0;e<8;e++)u[e]=a();return u.join(":")}port(){return this.faker.datatype.number({min:0,max:65535})}userAgent(){return $0u(this.faker)}color(a=0,u=0,e=0){let i=o=>Math.floor((this.faker.datatype.number(256)+o)/2).toString(16).padStart(2,"0"),n=i(a),r=i(u),t=i(e);return`#${n}${r}${t}`}mac(a){let u,e="",i=":";for(["-",""].indexOf(a)!==-1&&(i=a),u=0;u<12;u++)e+=this.faker.datatype.number(15).toString(16),u%2===1&&u!==11&&(e+=i);return e}password(a=15,u=!1,e=/\w/,i=""){let n=/[aeiouAEIOU]$/,r=/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]$/,t=(o,s,l,E)=>{if(E.length>=o)return E;s&&(E.match(r)?l=n:l=r);let D=this.faker.datatype.number(94)+33,x=String.fromCharCode(D);return s&&(x=x.toLowerCase()),x.match(l)?t(o,s,l,E+x):t(o,s,l,E)};return t(a,u,e,i)}emoji(a={}){let{types:u=Object.keys(this.faker.definitions.internet.emoji)}=a,e=this.faker.helpers.arrayElement(u);return this.faker.helpers.arrayElement(this.faker.definitions.internet.emoji[e])}},Nr={fail:()=>{throw new j0("No words found that match the given length.")},closest:(a,u)=>{let e=a.reduce((o,s)=>{var l;return(o[s.length]=(l=o[s.length])!=null?l:[]).push(s),o},{}),i=Object.keys(e).map(Number),n=Math.min(...i),r=Math.max(...i),t=Math.min(u.min-n,r-u.max);return a.filter(o=>o.length===u.min-t||o.length===u.max+t)},shortest:a=>{let u=Math.min(...a.map(e=>e.length));return a.filter(e=>e.length===u)},longest:a=>{let u=Math.max(...a.map(e=>e.length));return a.filter(e=>e.length===u)},"any-length":a=>[...a]};function Ye(a){let{wordList:u,length:e,strategy:i="any-length"}=a;if(e){let n=typeof e=="number"?t=>t.length===e:t=>t.length>=e.min&&t.length<=e.max,r=u.filter(n);return r.length>0?r:typeof e=="number"?Nr[i](u,{min:e,max:e}):Nr[i](u,e)}else return i==="shortest"||i==="longest"?Nr[i](u):[...u]}var Rl=class{constructor(a){this.faker=a;for(let u of Object.getOwnPropertyNames(Rl.prototype))u==="constructor"||typeof this[u]!="function"||(this[u]=this[u].bind(this))}word(a={}){let u=typeof a=="number"?{length:a}:a;return this.faker.helpers.arrayElement(Ye({...u,wordList:this.faker.definitions.lorem.words}))}words(a=3){let u=[];for(let e=0;e<a;e++)u.push(this.word());return u.join(" ")}sentence(a){a==null&&(a=this.faker.datatype.number({min:3,max:10}));let u=this.words(a);return`${u.charAt(0).toUpperCase()+u.slice(1)}.`}slug(a){let u=this.words(a);return this.faker.helpers.slugify(u)}sentences(a,u=" "){a==null&&(a=this.faker.datatype.number({min:2,max:6}));let e=[];for(a;a>0;a--)e.push(this.sentence());return e.join(u)}paragraph(a=3){return this.sentences(a+this.faker.datatype.number(3))}paragraphs(a=3,u=`
`){let e=[];for(a;a>0;a--)e.push(this.paragraph());return e.join(u)}text(){let a=["word","words","sentence","sentences","paragraph","paragraphs","lines"],u=this.faker.helpers.arrayElement(a);return`${this[u]()}`}lines(a){return a==null&&(a=this.faker.datatype.number({min:1,max:5})),this.sentences(a,`
`;){const N=E.buildMessage(L,s,n);E.sendMessage(N),e(4,t="");return}for(;!s;){e(0,l="Please enter a username");return}e(4,t=""),e(0,l="Please enter a message")},c=L=>()=>{for(;L;){e(0,l=null),e(6,s=L),e(5,o=null);return}e(0,l="Please enter a username")},p=()=>{document.getElementById("disconnect-modal").classList.toggle("is-active")},d=()=>{e(1,E=null),e(6,s=null),e(3,r=[])};i.on("open",function(L){e(2,n=L),localStorage.setItem("peerId",L),i.on("connection",function(N){e(1,E=new E1(N,()=>{},d))})});const m=()=>p(),h=()=>p(),F=()=>{E.close(),p()},g=()=>p(),C=L=>{L.key==="Enter"&&c(document.getElementById("username-field").value)()},v=()=>c(document.getElementById("username-field").value)();function A(){o=this.value,e(5,o)}const M=L=>{L.key==="Enter"&&D(o)()};function k(){t=this.value,e(4,t)}const B=L=>{L.key==="Enter"&&x(t)()},y=()=>p();return a.$$.update=()=>{a.$$.dirty&2&&E&&E.messages().subscribe(L=>{e(3,r=L)}),a.$$.dirty&1&&l&&setTimeout(()=>{e(0,l=null)},5e3)},[l,E,n,r,t,o,s,D,x,c,p,m,h,F,g,C,v,A,M,k,B,y]}class Snu extends Xu{constructor(u){super(),Qu(this,u,znu,ynu,$u,{})}}function Mnu(a){let u,e,i,n,r,t,o,s,l;return n=new Snu({}),{c(){u=Du("div"),e=Du("div"),i=Du("div"),ju(n.$$.fragment),r=fu(),t=Du("div"),o=fu(),s=Du("div"),s.innerHTML=`<h1 class="title">Realtime Chat Application</h1> 
    <p>A basic chat application built with PeerJS, Svelte and TypeScript. Enter a
      Remote Peer ID (opening the same page in another tab will generate a new
      ID), choose a username, and click connect. Once connected, you can send
      messages to the other peer. The chat history is stored in the browser&#39;s
      local storage, although currently can&#39;t be re-used due to using default
      PeerJS connection negotiation servers.</p> 
    <a href="https://github.com/benterova/benterova/tree/master/src/lib/chat" target="_blank" rel="noopener noreferrer" class="mt-4 button">View on GitHub</a>`,X(i,"id","chat-section"),X(i,"class","box"),X(e,"class","column is-one-third"),X(t,"class","is-divider-vertical"),X(s,"class","column"),X(u,"class","columns")},m(E,D){Bu(E,u,D),eu(u,e),eu(e,i),Su(n,i,null),eu(u,r),eu(u,t),eu(u,o),eu(u,s),l=!0},p:Iu,i(E){l||(au(n.$$.fragment,E),l=!0)},o(E){su(n.$$.fragment,E),l=!1},d(E){E&&Au(u),Mu(n)}}}class jnu extends Xu{constructor(u){super(),Qu(this,u,null,Mnu,$u,{})}}function Pnu(a){let u;return{c(){u=Du("div")},m(e,i){Bu(e,u,i)},p:Iu,i:Iu,o:Iu,d(e){e&&Au(u)}}}class Tnu extends Xu{constructor(u){super(),Qu(this,u,null,Pnu,$u,{})}}function wnu(a){let u,e,i,n,r,t,o,s,l;return s=new Tnu({}),{c(){u=Du("div"),e=Du("div"),e.innerHTML=`<h1 class="title">Todo List</h1> 
    <p>An example of a todo list application that uses local storage to store the
      todo list. The todo list is also sortable, and the user can filter the
      list by completed or uncompleted tasks.</p> 
    <a href="https://github.com/benterova/benterova/tree/master/src/lib/todo" target="_blank" rel="noopener noreferrer" class="mt-4 button">View on GitHub</a>`,i=fu(),n=Du("div"),r=fu(),t=Du("div"),o=Du("div"),ju(s.$$.fragment),X(e,"class","column"),X(n,"class","is-divider-vertical"),X(o,"id","todo-section"),X(o,"class","box"),X(t,"class","column"),X(u,"class","columns")},m(E,D){Bu(E,u,D),eu(u,e),eu(u,i),eu(u,n),eu(u,r),eu(u,t),eu(t,o),Su(s,o,null),l=!0},p:Iu,i(E){l||(au(s.$$.fragment,E),l=!0)},o(E){su(s.$$.fragment,E),l=!1},d(E){E&&Au(u),Mu(s)}}}class _nu extends Xu{constructor(u){super(),Qu(this,u,null,wnu,$u,{})}}function Lnu(a){let u,e,i,n,r,t,o,s,l,E,D;return t=new jnu({}),E=new _nu({}),{c(){u=Du("section"),e=Du("div"),e.innerHTML=`<h1 class="title has-text-centered m-6">Example Projects</h1> 
    <p class="subtitle has-text-centered">Stuff I did for fun.</p>`,i=fu(),n=Du("div"),r=fu(),ju(t.$$.fragment),o=fu(),s=Du("div"),l=fu(),ju(E.$$.fragment),X(e,"class","block"),X(n,"class","is-divider"),X(s,"class","is-divider"),X(u,"class","section"),X(u,"id","projects")},m(x,c){Bu(x,u,c),eu(u,e),eu(u,i),eu(u,n),eu(u,r),Su(t,u,null),eu(u,o),eu(u,s),eu(u,l),Su(E,u,null),D=!0},p:Iu,i(x){D||(au(t.$$.fragment,x),au(E.$$.fragment,x),D=!0)},o(x){su(t.$$.fragment,x),su(E.$$.fragment,x),D=!1},d(x){x&&Au(u),Mu(t),Mu(E)}}}class Rnu extends Xu{constructor(u){super(),Qu(this,u,null,Lnu,$u,{})}}function Knu(a){let u,e,i,n,r,t,o;return{c(){u=Du("nav"),e=Du("div"),i=Du("a"),i.innerHTML=`<span aria-hidden="true"></span> 
      <span aria-hidden="true"></span> 
      <span aria-hidden="true"></span>`,n=fu(),r=Du("div"),r.innerHTML=`<div class="navbar-start"><a class="navbar-item" href="#work">Work</a> 

      <a class="navbar-item" href="#projects">Side-Projects</a></div>`,X(i,"role","button"),X(i,"class","navbar-burger"),X(i,"aria-label","menu"),X(i,"aria-expanded","false"),X(i,"href","#"),X(e,"class","navbar-brand"),X(r,"id","navbar"),X(r,"class","navbar-menu"),X(u,"class","navbar"),X(u,"role","navigation"),X(u,"aria-label","main navigation")},m(s,l){Bu(s,u,l),eu(u,e),eu(e,i),eu(u,n),eu(u,r),t||(o=m0(i,"click",a[0]),t=!0)},p:Iu,i:Iu,o:Iu,d(s){s&&Au(u),t=!1,o()}}}function Nnu(a){return[()=>{document.getElementById("navbar").classList.toggle("is-active")}]}class Hnu extends Xu{constructor(u){super(),Qu(this,u,Nnu,Knu,$u,{})}}function Gnu(a){let u,e;return u=new O6({}),{c(){ju(u.$$.fragment)},m(i,n){Su(u,i,n),e=!0},i(i){e||(au(u.$$.fragment,i),e=!0)},o(i){su(u.$$.fragment,i),e=!1},d(i){Mu(u,i)}}}function Vnu(a){let u,e;return u=new ym({props:{$$slots:{default:[Gnu]},$$scope:{ctx:a}}}),{c(){ju(u.$$.fragment)},m(i,n){Su(u,i,n),e=!0},p(i,[n]){const r={};n&1&&(r.$$scope={dirty:n,ctx:i}),u.$set(r)},i(i){e||(au(u.$$.fragment,i),e=!0)},o(i){su(u.$$.fragment,i),e=!1},d(i){Mu(u,i)}}}class Inu extends Xu{constructor(u){super(),Qu(this,u,null,Vnu,$u,{})}}function Jnu(a){let u,e;return u=new Inu({}),{c(){ju(u.$$.fragment)},m(i,n){Su(u,i,n),e=!0},i(i){e||(au(u.$$.fragment,i),e=!0)},o(i){su(u.$$.fragment,i),e=!1},d(i){Mu(u,i)}}}function Onu(a){let u,e,i,n,r,t,o,s,l,E,D;return i=new Hnu({}),r=new l3({props:{showBackground:!0,$$slots:{default:[Jnu]},$$scope:{ctx:a}}}),s=new m3({}),E=new Rnu({}),{c(){u=fu(),e=Du("main"),ju(i.$$.fragment),n=fu(),ju(r.$$.fragment),t=fu(),o=Du("div"),ju(s.$$.fragment),l=fu(),ju(E.$$.fragment),document.title="Ben Terova",X(o,"class","container")},m(x,c){Bu(x,u,c),Bu(x,e,c),Su(i,e,null),eu(e,n),Su(r,e,null),eu(e,t),eu(e,o),Su(s,o,null),eu(o,l),Su(E,o,null),D=!0},p(x,[c]){const p={};c&1&&(p.$$scope={dirty:c,ctx:x}),r.$set(p)},i(x){D||(au(i.$$.fragment,x),au(r.$$.fragment,x),au(s.$$.fragment,x),au(E.$$.fragment,x),D=!0)},o(x){su(i.$$.fragment,x),su(r.$$.fragment,x),su(s.$$.fragment,x),su(E.$$.fragment,x),D=!1},d(x){x&&Au(u),x&&Au(e),Mu(i),Mu(r),Mu(s),Mu(E)}}}class Wnu extends Xu{constructor(u){super(),Qu(this,u,null,Onu,$u,{})}}new Wnu({target:document.getElementById("app")});