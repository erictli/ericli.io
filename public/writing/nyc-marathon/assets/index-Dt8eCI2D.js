const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/webgl-CQJAy8kk.js","assets/expression-E359vKZW.js","assets/array-utils-flat-BL8Cekj1.js","assets/get-attribute-from-layouts-Dd2gixpo.js"])))=>i.map(i=>d[i]);
import{C as e,S as t,_ as n,a as r,b as i,c as a,d as o,f as s,h as c,l,o as u,p as d,t as f,u as p,v as m,w as h,x as g,y as _}from"./array-utils-flat-BL8Cekj1.js";import{C as v,D as y,E as b,S as x,T as S,_ as C,a as w,b as T,c as E,d as D,f as O,g as k,h as A,i as j,l as M,m as N,n as P,o as F,p as I,r as L,s as ee,t as te,u as ne,w as R,x as re,y as ie}from"./expression-E359vKZW.js";import{a as ae,c as oe,d as se,f as ce,i as le,l as z,n as ue,o as de,r as fe,s as pe,t as me,u as he}from"./get-attribute-from-layouts-Dd2gixpo.js";var ge=Object.create,_e=Object.defineProperty,ve=Object.getOwnPropertyDescriptor,ye=Object.getOwnPropertyNames,be=Object.getPrototypeOf,B=Object.prototype.hasOwnProperty,xe=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),Se=(e,t)=>{let n={};for(var r in e)_e(n,r,{get:e[r],enumerable:!0});return t||_e(n,Symbol.toStringTag,{value:`Module`}),n},Ce=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(var i=ye(t),a=0,o=i.length,s;a<o;a++)s=i[a],!B.call(e,s)&&s!==n&&_e(e,s,{get:(e=>t[e]).bind(null,s),enumerable:!(r=ve(t,s))||r.enumerable});return e},we=(e,t,n)=>(n=e==null?{}:ge(be(e)),Ce(t||!e||!e.__esModule||!B.call(e,`default`)?_e(n,`default`,{value:e,enumerable:!0}):n,e));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),xe(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n||=self,n.scrollama=r())})(e,(function(){function e(e,t=document){return typeof e==`string`?Array.from(t.querySelectorAll(e)):e instanceof Element?[e]:e instanceof NodeList?Array.from(e):e instanceof Array?e:[]}function t(e){let t=document.createElement(`div`);t.className=`scrollama__debug-step ${e}`,t.style.position=`fixed`,t.style.left=`0`,t.style.width=`100%`,t.style.zIndex=`9999`,t.style.borderTop=`2px solid black`,t.style.borderBottom=`2px solid black`;let n=document.createElement(`p`);return n.style.position=`absolute`,n.style.left=`0`,n.style.height=`1px`,n.style.width=`100%`,n.style.borderTop=`1px dashed black`,t.appendChild(n),document.body.appendChild(t),t}function n({id:e,step:n,marginTop:r}){let{index:i,height:a}=n,o=`scrollama__debug-step--${e}-${i}`,s=document.querySelector(`.${o}`);s||=t(o),s.style.top=`${r*-1}px`,s.style.height=`${a}px`,s.querySelector(`p`).style.top=`${a/2}px`}function r(){let e=Date.now(),t=[];for(let e=0;e<6;e+=1){let e=`abcdefghijklmnopqrstuvwxyz`[Math.floor(Math.random()*26)];t.push(e)}return`${t.join(``)}${e}`}function i(e){console.error(`scrollama error: ${e}`)}function a(e){return+e.getAttribute(`data-scrollama-index`)}function o(e,t){let n=Math.ceil(e/t),r=[],i=1/n;for(let e=0;e<n+1;e+=1)r.push(e*i);return r}function s(e){if(typeof e==`string`&&e.indexOf(`px`)>0){let t=+e.replace(`px`,``);return isNaN(t)?(err(`offset value must be in 'px' format. Fallback to 0.5.`),{format:`percent`,value:.5}):{format:`pixels`,value:t}}return typeof e==`number`||!isNaN(+e)?(e>1&&err(`offset value is greater than 1. Fallback to 1.`),e<0&&err(`offset value is lower than 0. Fallback to 0.`),{format:`percent`,value:Math.min(Math.max(0,e),1)}):null}function c(e){e.forEach(e=>e.node.setAttribute(`data-scrollama-index`,e.index))}function l(e){let{top:t}=e.getBoundingClientRect(),n=window.pageYOffset,r=document.body.clientTop||0;return t+n-r}let u,d,f;function p(e){let t=e?e.scrollTop:window.pageYOffset;u!==t&&(u=t,u>d?f=`down`:u<d&&(f=`up`),d=u)}function m(e){u=0,d=0,document.addEventListener(`scroll`,()=>p(e))}function h(){let t={},u=r(),d=[],h,g,_,v=0,y=!1,b=!1,x=!1,S=!1,C=[];function w(){t={stepEnter:()=>{},stepExit:()=>{},stepProgress:()=>{}},C=[]}function T(e){e&&!y&&ne(),!e&&y&&N(),y=e}function E(e,n){let r=a(e),i=d[r];n!==void 0&&(i.progress=n);let o={element:e,index:r,progress:n,direction:f};i.state===`enter`&&t.stepProgress(o)}function D(e,n=!0){let r=a(e),i=d[r],o={element:e,index:r,direction:f};i.direction=f,i.state=`enter`,C[r]||t.stepEnter(o),S&&(C[r]=!0)}function O(e,n=!0){let r=a(e),i=d[r];if(!i.state)return!1;let o={element:e,index:r,direction:f};b&&(f===`down`&&i.progress<1?E(e,1):f===`up`&&i.progress>0&&E(e,0)),i.direction=f,i.state=`exit`,t.stepExit(o)}function k([e]){let t=a(e.target),n=d[t],r=e.target.offsetHeight;r!==n.height&&(n.height=r,M(n),I(n),P(n))}function A([e]){p(g);let{isIntersecting:t,target:n}=e;t?D(n):O(n)}function j([e]){let t=a(e.target),n=d[t],{isIntersecting:r,intersectionRatio:i,target:o}=e;r&&n.state===`enter`&&E(o,i)}function M({observers:e}){Object.keys(e).map(t=>{e[t].disconnect()})}function N(){d.forEach(M)}function P(e){let t=new ResizeObserver(k);t.observe(e.node),e.observers.resize=t}function F(){d.forEach(P)}function I(e){let t=window.innerHeight,r=e.offset||h,i=r.format===`pixels`?1:t,a=r.value*i,o=e.height/2-a,s=e.height/2-(t-a),c={rootMargin:`${o}px 0px ${s}px 0px`,threshold:.5,root:_},l=new IntersectionObserver(A,c);l.observe(e.node),e.observers.step=l,x&&n({id:u,step:e,marginTop:o,marginBottom:s})}function L(){d.forEach(I)}function ee(e){let t=window.innerHeight,n=e.offset||h,r=n.format===`pixels`?1:t,i=n.value*r,a={rootMargin:`${-i+e.height}px 0px ${i-t}px 0px`,threshold:o(e.height,v)},s=new IntersectionObserver(j,a);s.observe(e.node),e.observers.progress=s}function te(){d.forEach(ee)}function ne(){N(),F(),L(),b&&te()}let R={};return R.setup=({step:t,parent:n,offset:r=.5,threshold:a=4,progress:o=!1,once:u=!1,debug:f=!1,container:p=void 0,root:y=null})=>(m(p),d=e(t,n).map((e,t)=>({index:t,direction:void 0,height:e.offsetHeight,node:e,observers:{},offset:s(e.dataset.offset),top:l(e),progress:0,state:void 0})),d.length?(b=o,S=u,x=f,v=Math.max(1,+a),h=s(r),g=p,_=y,w(),c(d),T(!0),R):(i(`no step elements`),R)),R.enable=()=>(T(!0),R),R.disable=()=>(T(!1),R),R.destroy=()=>(T(!1),w(),R),R.resize=()=>(ne(),R),R.offset=e=>e==null?h.value:(h=s(e),ne(),R),R.onStepEnter=e=>(typeof e==`function`?t.stepEnter=e:i(`onStepEnter requires a function`),R),R.onStepExit=e=>(typeof e==`function`?t.stepExit=e:i(`onStepExit requires a function`),R),R.onStepProgress=e=>(typeof e==`function`?t.stepProgress=e:i(`onStepProgress requires a function`),R),R}return h}))}))();function Te(e){let t=document.querySelector(`meta[name="data-base"]`)?.content;if(t)return new URL(`${t.replace(/\/?$/,`/`)}${e}`,location.href).href;let n=location.href.split(/[?#]/)[0];return!n.endsWith(`/`)&&!/\.html?$/.test(n)&&(n+=`/`),new URL(`../../data/${e}`,n).href}async function Ee(e){let t=await fetch(Te(e));if(!t.ok)throw Error(`Failed to load ${e}: ${t.status}`);return t.json()}async function De(e){let t=await fetch(Te(e));if(!t.ok)throw Error(`Failed to load ${e}: ${t.status}`);return t.arrayBuffer()}function Oe(e,t=255,n=document.documentElement){return V(getComputedStyle(n).getPropertyValue(e).trim(),t)}function V(e,t=255){if(e.startsWith(`#`)){let n=e.slice(1);n.length===3&&(n=n.split(``).map(e=>e+e).join(``));let r=parseInt(n.slice(0,6),16);return[r>>16&255,r>>8&255,r&255,t]}let n=e.match(/rgba?\(([^)]+)\)/);if(n){let[e,r,i,a]=n[1].split(`,`).map(e=>parseFloat(e));return[e,r,i,a===void 0?t:Math.round(a*255)]}return[128,128,128,t]}function ke(){return matchMedia(`(prefers-color-scheme: dark)`).matches?document.documentElement.dataset.theme!==`light`:document.documentElement.dataset.theme===`dark`}function Ae(e){matchMedia(`(prefers-color-scheme: dark)`).addEventListener(`change`,()=>e(ke())),new MutationObserver(()=>e(ke())).observe(document.documentElement,{attributes:!0,attributeFilter:[`data-theme`]})}var je=()=>matchMedia(`(prefers-reduced-motion: reduce)`).matches,H={int:e=>Math.round(e).toLocaleString(`en-US`),pct:(e,t=0)=>`${(e*100).toFixed(t)}%`,hms(e){e=Math.round(e);let t=Math.floor(e/3600),n=Math.floor(e%3600/60),r=e%60;return`${t}:${String(n).padStart(2,`0`)}:${String(r).padStart(2,`0`)}`},ms(e){e=Math.round(e);let t=Math.floor(e/60),n=Math.abs(e%60);return`${t}:${String(n).padStart(2,`0`)}`}};function Me(e,t){if(!e)throw Error(t||`loader assertion failed.`)}var Ne={self:typeof self<`u`&&self,window:typeof window<`u`&&window,global:typeof global<`u`&&global,document:typeof document<`u`&&document};Ne.self||Ne.window||Ne.global,Ne.window||Ne.self||Ne.global,Ne.global||Ne.self||Ne.window,Ne.document;var Pe=!!(typeof process!=`object`||String(process)!==`[object process]`||process.browser),Fe=typeof process<`u`&&process.version&&/v([0-9]*)/.exec(process.version);Fe&&parseFloat(Fe[1]);function Ie(n){return!n&&!t()?`Node`:e(n)?`Electron`:(n||h.userAgent||``).indexOf(`Edge`)>-1?`Edge`:globalThis.chrome?`Chrome`:globalThis.safari?`Safari`:globalThis.mozInnerScreenX?`Firefox`:`Unknown`}var Le=`v4.5.2`;function Re(){let e=new g({id:`loaders.gl`});return globalThis.loaders||={},globalThis.loaders.log=e,globalThis.loaders.version=Le,globalThis.probe||={},globalThis.probe.loaders=e,e}var ze=Re(),Be=e=>typeof e==`boolean`,Ve=e=>typeof e==`function`,He=e=>typeof e==`object`&&!!e,Ue=e=>He(e)&&e.constructor==={}.constructor,We=e=>typeof SharedArrayBuffer<`u`&&e instanceof SharedArrayBuffer,Ge=e=>He(e)&&typeof e.byteLength==`number`&&typeof e.slice==`function`,Ke=e=>!!e&&Ve(e[Symbol.iterator]),qe=e=>!!e&&Ve(e[Symbol.asyncIterator]),Je=e=>typeof Response<`u`&&e instanceof Response||He(e)&&Ve(e.arrayBuffer)&&Ve(e.text)&&Ve(e.json),Ye=e=>typeof Blob<`u`&&e instanceof Blob,Xe=e=>typeof ReadableStream<`u`&&e instanceof ReadableStream||He(e)&&Ve(e.tee)&&Ve(e.cancel)&&Ve(e.getReader),Ze=e=>He(e)&&Ve(e.read)&&Ve(e.pipe)&&Be(e.readable),Qe=e=>Xe(e)||Ze(e);function $e(e,t){return et(e||{},t)}function et(e,t,n=0){if(n>3)return t;let r={...e};for(let[e,i]of Object.entries(t))r[e]=i&&typeof i==`object`&&!Array.isArray(i)?et(r[e]||{},t[e],n+1):t[e];return r}var tt=`latest`;function nt(){return globalThis._loadersgl_?.version||(globalThis._loadersgl_=globalThis._loadersgl_||{},globalThis._loadersgl_.version=`4.5.2`),globalThis._loadersgl_.version}var rt=nt();function it(e,t){if(!e)throw Error(t||`loaders.gl assertion failed.`)}var at={self:typeof self<`u`&&self,window:typeof window<`u`&&window,global:typeof global<`u`&&global,document:typeof document<`u`&&document};at.self||at.window||at.global,at.window||at.self||at.global,at.global||at.self||at.window,at.document;var ot=typeof process!=`object`||String(process)!==`[object process]`||process.browser,st=typeof window<`u`&&window.orientation!==void 0,ct=typeof process<`u`&&process.version&&/v([0-9]*)/.exec(process.version);ct&&parseFloat(ct[1]);var lt=class{name;workerThread;isRunning=!0;result;_resolve=()=>{};_reject=()=>{};constructor(e,t){this.name=e,this.workerThread=t,this.result=new Promise((e,t)=>{this._resolve=e,this._reject=t})}postMessage(e,t){this.workerThread.postMessage({source:`loaders.gl`,type:e,payload:t})}done(e){it(this.isRunning),this.isRunning=!1,this._resolve(e)}error(e){it(this.isRunning),this.isRunning=!1,this._reject(e)}},ut=class{terminate(){}},dt=new Map;function ft(e){it(e.source&&!e.url||!e.source&&e.url);let t=dt.get(e.source||e.url);return t||(e.url&&(t=pt(e.url),dt.set(e.url,t)),e.source&&(t=mt(e.source),dt.set(e.source,t))),it(t),t}function pt(e){return e.startsWith(`http`)?mt(ht(e)):e}function mt(e){let t=new Blob([e],{type:`application/javascript`});return URL.createObjectURL(t)}function ht(e){return`\
try {
  importScripts('${e}');
} catch (error) {
  console.error(error);
  throw error;
}`}function gt(e,t=!0,n){let r=n||new Set;if(e){if(_t(e))r.add(e);else if(_t(e.buffer))r.add(e.buffer);else if(!ArrayBuffer.isView(e)&&t&&typeof e==`object`)for(let n in e)gt(e[n],t,r)}return n===void 0?Array.from(r):[]}function _t(e){return e?e instanceof ArrayBuffer||typeof MessagePort<`u`&&e instanceof MessagePort||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof OffscreenCanvas<`u`&&e instanceof OffscreenCanvas:!1}var vt=()=>{},yt=class{name;source;url;terminated=!1;worker;onMessage;onError;_loadableURL=``;static isSupported(){return typeof Worker<`u`&&ot||ut!==void 0&&!ot}constructor(e){let{name:t,source:n,url:r}=e;it(n||r),this.name=t,this.source=n,this.url=r,this.onMessage=vt,this.onError=e=>console.log(e),this.worker=ot?this._createBrowserWorker():this._createNodeWorker()}destroy(){this.onMessage=vt,this.onError=vt,this.worker.terminate(),this.terminated=!0}get isRunning(){return!!this.onMessage}postMessage(e,t){t||=gt(e),this.worker.postMessage(e,t)}_getErrorFromErrorEvent(e){let t=`Failed to load `;return t+=`worker ${this.name} from ${this.url}. `,e.message&&(t+=`${e.message} in `),e.lineno&&(t+=`:${e.lineno}:${e.colno}`),Error(t)}_createBrowserWorker(){this._loadableURL=ft({source:this.source,url:this.url});let e=new Worker(this._loadableURL,{name:this.name});return e.onmessage=e=>{e.data?this.onMessage(e.data):this.onError(Error(`No data received`))},e.onerror=e=>{this.onError(this._getErrorFromErrorEvent(e)),this.terminated=!0},e.onmessageerror=e=>console.error(e),e}_createNodeWorker(){let e;if(this.url)e=new ut(this.url.includes(`:/`)||this.url.startsWith(`/`)?this.url:`./${this.url}`,{eval:!1,type:this.url.endsWith(`.ts`)||this.url.endsWith(`.mjs`)?`module`:`commonjs`});else if(this.source)e=new ut(this.source,{eval:!0});else throw Error(`no worker`);return e.on(`message`,e=>{this.onMessage(e)}),e.on(`error`,e=>{this.onError(e)}),e.on(`exit`,e=>{}),e}},bt=class{name=`unnamed`;source;url;maxConcurrency=1;maxMobileConcurrency=1;onDebug=()=>{};reuseWorkers=!0;props={};jobQueue=[];idleQueue=[];count=0;isDestroyed=!1;static isSupported(){return yt.isSupported()}constructor(e){this.source=e.source,this.url=e.url,this.setProps(e)}destroy(){this.idleQueue.forEach(e=>e.destroy()),this.isDestroyed=!0}setProps(e){this.props={...this.props,...e},e.name!==void 0&&(this.name=e.name),e.maxConcurrency!==void 0&&(this.maxConcurrency=e.maxConcurrency),e.maxMobileConcurrency!==void 0&&(this.maxMobileConcurrency=e.maxMobileConcurrency),e.reuseWorkers!==void 0&&(this.reuseWorkers=e.reuseWorkers),e.onDebug!==void 0&&(this.onDebug=e.onDebug)}async startJob(e,t=(e,t,n)=>e.done(n),n=(e,t)=>e.error(t)){let r=new Promise(r=>(this.jobQueue.push({name:e,onMessage:t,onError:n,onStart:r}),this));return this._startQueuedJob(),await r}async _startQueuedJob(){if(!this.jobQueue.length)return;let e=this._getAvailableWorker();if(!e)return;let t=this.jobQueue.shift();if(t){this.onDebug({message:`Starting job`,name:t.name,workerThread:e,backlog:this.jobQueue.length});let n=new lt(t.name,e);e.onMessage=e=>t.onMessage(n,e.type,e.payload),e.onError=e=>t.onError(n,e),t.onStart(n);try{await n.result}catch(e){console.error(`Worker exception: ${e}`)}finally{this.returnWorkerToQueue(e)}}}returnWorkerToQueue(e){!ot||this.isDestroyed||!this.reuseWorkers||this.count>this._getMaxConcurrency()?(e.destroy(),this.count--):this.idleQueue.push(e),this.isDestroyed||this._startQueuedJob()}_getAvailableWorker(){return this.idleQueue.length>0?this.idleQueue.shift()||null:this.count<this._getMaxConcurrency()?(this.count++,new yt({name:`${this.name.toLowerCase()} (#${this.count} of ${this.maxConcurrency})`,source:this.source,url:this.url})):null}_getMaxConcurrency(){return st?this.maxMobileConcurrency:this.maxConcurrency}},xt={maxConcurrency:3,maxMobileConcurrency:1,reuseWorkers:!0,onDebug:()=>{}},St=class e{props;workerPools=new Map;static _workerFarm;static isSupported(){return yt.isSupported()}static getWorkerFarm(t={}){return e._workerFarm=e._workerFarm||new e({}),e._workerFarm.setProps(t),e._workerFarm}constructor(e){this.props={...xt},this.setProps(e),this.workerPools=new Map}destroy(){for(let e of this.workerPools.values())e.destroy();this.workerPools=new Map}setProps(e){this.props={...this.props,...e};for(let e of this.workerPools.values())e.setProps(this._getWorkerPoolProps())}getWorkerPool(e){let{name:t,source:n,url:r}=e,i=this.workerPools.get(t);return i||(i=new bt({name:t,source:n,url:r}),i.setProps(this._getWorkerPoolProps()),this.workerPools.set(t,i)),i}_getWorkerPoolProps(){return{maxConcurrency:this.props.maxConcurrency,maxMobileConcurrency:this.props.maxMobileConcurrency,reuseWorkers:this.props.reuseWorkers,onDebug:this.props.onDebug}}};function Ct(e,t={}){let n=t[e.id]||{},r=ot?e.workerFile||`${e.id}-worker.js`:`${e.id}-worker-node.js`,i=n.workerUrl;if(!i&&e.id===`compression`&&(i=t.workerUrl),(t._workerType||t?.core?._workerType)===`test`&&(i=ot?`modules/${e.module}/dist/${r}`:`modules/${e.module}/src/workers/${e.id}-worker-node.ts`),!i){let t=e.version;t===`latest`&&(t=tt);let n=t?`@${t}`:``;i=`https://unpkg.com/@loaders.gl/${e.module}${n}/dist/${r}`}return it(i),i}function wt(e,t=rt){it(e,`no worker provided`);let n=e.version;return!(!t||!n)}function Tt(e,t){if(!St.isSupported())return!1;let n=t?._nodeWorkers??t?.core?._nodeWorkers;if(!ot&&!n)return!1;let r=t?.worker??t?.core?.worker;return!!(e.worker&&r)}async function Et(e,t,n,r,i){let a=e.id,o=Ct(e,n),s=St.getWorkerFarm(n?.core).getWorkerPool({name:a,url:o});n=JSON.parse(JSON.stringify(n||{})),n._workerLoaderId=e.id,r=JSON.parse(JSON.stringify(r||{}));let c=await s.startJob(`process-on-worker`,Dt.bind(null,i));return c.postMessage(`process`,{input:t,options:n,context:r}),await(await c.result).result}async function Dt(e,t,n,r){switch(n){case`done`:t.done(r);break;case`error`:t.error(Error(r.error));break;case`process`:let{id:i,input:a,options:o}=r;try{let n=await e(a,o);t.postMessage(`done`,{id:i,result:n})}catch(e){let n=e instanceof Error?e.message:`unknown error`;t.postMessage(`error`,{id:i,error:n})}break;default:console.warn(`parse-with-worker unknown message ${n}`)}}function Ot(e,t,n){if(n||=e.byteLength,e.byteLength<n||t.byteLength<n)return!1;let r=new Uint8Array(e),i=new Uint8Array(t);for(let e=0;e<r.length;++e)if(r[e]!==i[e])return!1;return!0}function kt(...e){return At(e)}function At(e){let t=e.map(e=>e instanceof ArrayBuffer?new Uint8Array(e):e),n=t.reduce((e,t)=>e+t.byteLength,0),r=new Uint8Array(n),i=0;for(let e of t)r.set(e,i),i+=e.byteLength;return r.buffer}async function jt(e){let t=[];for await(let n of e)t.push(Mt(n));return kt(...t)}function Mt(e){if(e instanceof ArrayBuffer)return e;if(ArrayBuffer.isView(e)){let{buffer:t,byteOffset:n,byteLength:r}=e;return Nt(t,n,r)}return Nt(e)}function Nt(e,t=0,n=e.byteLength-t){let r=new Uint8Array(e,t,n),i=new Uint8Array(r.length);return i.set(r),i.buffer}function Pt(){let e;if(typeof window<`u`&&window.performance)e=window.performance.now();else if(typeof process<`u`&&process.hrtime){let t=process.hrtime();e=t[0]*1e3+t[1]/1e6}else e=Date.now();return e}var Ft=class{constructor(e,t){this.sampleSize=1,this.time=0,this.count=0,this.samples=0,this.lastTiming=0,this.lastSampleTime=0,this.lastSampleCount=0,this._count=0,this._time=0,this._samples=0,this._startTime=0,this._timerPending=!1,this.name=e,this.type=t,this.reset()}reset(){return this.time=0,this.count=0,this.samples=0,this.lastTiming=0,this.lastSampleTime=0,this.lastSampleCount=0,this._count=0,this._time=0,this._samples=0,this._startTime=0,this._timerPending=!1,this}setSampleSize(e){return this.sampleSize=e,this}incrementCount(){return this.addCount(1),this}decrementCount(){return this.subtractCount(1),this}addCount(e){return this._count+=e,this._samples++,this._checkSampling(),this}subtractCount(e){return this._count-=e,this._samples++,this._checkSampling(),this}addTime(e){return this._time+=e,this.lastTiming=e,this._samples++,this._checkSampling(),this}timeStart(){return this._startTime=Pt(),this._timerPending=!0,this}timeEnd(){return this._timerPending?(this.addTime(Pt()-this._startTime),this._timerPending=!1,this._checkSampling(),this):this}getSampleAverageCount(){return this.sampleSize>0?this.lastSampleCount/this.sampleSize:0}getSampleAverageTime(){return this.sampleSize>0?this.lastSampleTime/this.sampleSize:0}getSampleHz(){return this.lastSampleTime>0?this.sampleSize/(this.lastSampleTime/1e3):0}getAverageCount(){return this.samples>0?this.count/this.samples:0}getAverageTime(){return this.samples>0?this.time/this.samples:0}getHz(){return this.time>0?this.samples/(this.time/1e3):0}_checkSampling(){this._samples===this.sampleSize&&(this.lastSampleTime=this._time,this.lastSampleCount=this._count,this.count+=this._count,this.time+=this._time,this.samples+=this._samples,this._time=0,this._count=0,this._samples=0)}},It=class{constructor(e){this.stats={},this.id=e.id,this.stats={},this._initializeStats(e.stats),Object.seal(this)}get(e,t=`count`){return this._getOrCreate({name:e,type:t})}get size(){return Object.keys(this.stats).length}reset(){for(let e of Object.values(this.stats))e.reset();return this}forEach(e){for(let t of Object.values(this.stats))e(t)}getTable(){let e={};return this.forEach(t=>{e[t.name]={time:t.time||0,count:t.count||0,average:t.getAverageTime()||0,hz:t.getHz()||0}}),e}_initializeStats(e=[]){e.forEach(e=>this._getOrCreate(e))}_getOrCreate(e){let{name:t,type:n}=e,r=this.stats[t];return r||(r=e instanceof Ft?e:new Ft(t,n),this.stats[t]=r),r}},Lt=``,Rt={};function zt(e){for(let t in Rt)if(e.startsWith(t)){let n=Rt[t];e=e.replace(t,n)}return!e.startsWith(`http://`)&&!e.startsWith(`https://`)&&(e=`${Lt}${e}`),e}function Bt(e){return e}function Vt(e){return e&&typeof e==`object`&&e.isBuffer}function Ht(e){if(Vt(e))return Bt(e);if(e instanceof ArrayBuffer)return e;if(We(e))return Wt(e);if(ArrayBuffer.isView(e)){let t=e.buffer;return e.byteOffset===0&&e.byteLength===e.buffer.byteLength?t:t.slice(e.byteOffset,e.byteOffset+e.byteLength)}if(typeof e==`string`){let t=e;return new TextEncoder().encode(t).buffer}if(e&&typeof e==`object`&&e._toArrayBuffer)return e._toArrayBuffer();throw Error(`toArrayBuffer`)}function Ut(e){if(e instanceof ArrayBuffer)return e;if(We(e))return Wt(e);let{buffer:t,byteOffset:n,byteLength:r}=e;return t instanceof ArrayBuffer&&n===0&&r===t.byteLength?t:Wt(t,n,r)}function Wt(e,t=0,n=e.byteLength-t){let r=new Uint8Array(e,t,n),i=new Uint8Array(r.length);return i.set(r),i.buffer}function Gt(e){return ArrayBuffer.isView(e)?e:new Uint8Array(e)}function Kt(e){let t=e?e.lastIndexOf(`/`):-1;return t>=0?e.substr(t+1):e}function qt(e){let t=e?e.lastIndexOf(`/`):-1;return t>=0?e.substr(0,t):``}var Jt=class extends Error{constructor(e,t){super(e),this.reason=t.reason,this.url=t.url,this.response=t.response}reason;url;response},Yt=/^data:([-\w.]+\/[-\w.+]+)(;|,)/,Xt=/^([-\w.]+\/[-\w.+]+)/;function Zt(e,t){return e.toLowerCase()===t.toLowerCase()}function Qt(e){let t=Xt.exec(e);return t?t[1]:e}function $t(e){let t=Yt.exec(e);return t?t[1]:``}var en=/\?.*/;function tn(e){let t=e.match(en);return t&&t[0]}function nn(e){return e.replace(en,``)}function rn(e){if(e.length<50)return e;let t=e.slice(e.length-15);return`${e.substr(0,32)}...${t}`}function an(e){return Je(e)?e.url:Ye(e)?(`name`in e?e.name:``)||``:typeof e==`string`?e:``}function on(e){if(Je(e)){let t=e.headers.get(`content-type`)||``,n=nn(e.url);return Qt(t)||$t(n)}return Ye(e)?e.type||``:typeof e==`string`?$t(e):``}function sn(e){return Je(e)?e.headers[`content-length`]||-1:Ye(e)?e.size:typeof e==`string`?e.length:e instanceof ArrayBuffer||ArrayBuffer.isView(e)?e.byteLength:-1}async function cn(e){if(Je(e))return e;let t={},n=sn(e);n>=0&&(t[`content-length`]=String(n));let r=an(e),i=on(e);i&&(t[`content-type`]=i);let a=await dn(e);a&&(t[`x-first-bytes`]=a),typeof e==`string`&&(e=new TextEncoder().encode(e));let o=new Response(e,{headers:t});return Object.defineProperty(o,"url",{value:r}),o}async function ln(e){if(!e.ok)throw await un(e)}async function un(e){let t=rn(e.url),n=`Failed to fetch resource (${e.status}) ${e.statusText}: ${t}`;n=n.length>100?`${n.slice(0,100)}...`:n;let r={reason:e.statusText,url:e.url,response:e};try{let t=e.headers.get(`Content-Type`);r.reason=!e.bodyUsed&&t?.includes(`application/json`)?await e.json():await e.text()}catch{}return new Jt(n,r)}async function dn(e){if(typeof e==`string`)return`data:,${e.slice(0,5)}`;if(e instanceof Blob){let t=e.slice(0,5);return await new Promise(e=>{let n=new FileReader;n.onload=t=>e(t?.target?.result),n.readAsDataURL(t)})}return e instanceof ArrayBuffer?`data:base64,${fn(e.slice(0,5))}`:null}function fn(e){let t=``,n=new Uint8Array(e);for(let e=0;e<n.byteLength;e++)t+=String.fromCharCode(n[e]);return btoa(t)}function pn(e){return!mn(e)&&!hn(e)}function mn(e){return e.startsWith(`http:`)||e.startsWith(`https:`)}function hn(e){return e.startsWith(`data:`)}async function gn(e,t){if(typeof e==`string`){let n=zt(e);return pn(n)&&globalThis.loaders?.fetchNode?globalThis.loaders?.fetchNode(n,t):await fetch(n,t)}return await cn(e)}var _n=new g({id:`loaders.gl`}),vn=class{log(){return()=>{}}info(){return()=>{}}warn(){return()=>{}}error(){return()=>{}}},yn={core:{baseUrl:void 0,fetch:null,mimeType:void 0,fallbackMimeType:void 0,ignoreRegisteredLoaders:void 0,nothrow:!1,log:new class{console;constructor(){this.console=console}log(...e){return this.console.log.bind(this.console,...e)}info(...e){return this.console.info.bind(this.console,...e)}warn(...e){return this.console.warn.bind(this.console,...e)}error(...e){return this.console.error.bind(this.console,...e)}},useLocalLibraries:!1,CDN:`https://unpkg.com/@loaders.gl`,worker:!0,maxConcurrency:3,maxMobileConcurrency:1,reuseWorkers:Pe,_nodeWorkers:!1,_workerType:``,limit:0,_limitMB:0,batchSize:`auto`,batchDebounceMs:0,metadata:!1,transforms:[]}},bn={baseUri:`core.baseUrl`,fetch:`core.fetch`,mimeType:`core.mimeType`,fallbackMimeType:`core.fallbackMimeType`,ignoreRegisteredLoaders:`core.ignoreRegisteredLoaders`,nothrow:`core.nothrow`,log:`core.log`,useLocalLibraries:`core.useLocalLibraries`,CDN:`core.CDN`,worker:`core.worker`,maxConcurrency:`core.maxConcurrency`,maxMobileConcurrency:`core.maxMobileConcurrency`,reuseWorkers:`core.reuseWorkers`,_nodeWorkers:`core.nodeWorkers`,_workerType:`core._workerType`,_worker:`core._workerType`,limit:`core.limit`,_limitMB:`core._limitMB`,batchSize:`core.batchSize`,batchDebounceMs:`core.batchDebounceMs`,metadata:`core.metadata`,transforms:`core.transforms`,throws:`nothrow`,dataType:`(no longer used)`,uri:`core.baseUrl`,method:`core.fetch.method`,headers:`core.fetch.headers`,body:`core.fetch.body`,mode:`core.fetch.mode`,credentials:`core.fetch.credentials`,cache:`core.fetch.cache`,redirect:`core.fetch.redirect`,referrer:`core.fetch.referrer`,referrerPolicy:`core.fetch.referrerPolicy`,integrity:`core.fetch.integrity`,keepalive:`core.fetch.keepalive`,signal:`core.fetch.signal`},xn=[`baseUrl`,`fetch`,`mimeType`,`fallbackMimeType`,`ignoreRegisteredLoaders`,`nothrow`,`log`,`useLocalLibraries`,`CDN`,`worker`,`maxConcurrency`,`maxMobileConcurrency`,`reuseWorkers`,`_nodeWorkers`,`_workerType`,`limit`,`_limitMB`,`batchSize`,`batchDebounceMs`,`metadata`,`transforms`];function Sn(){globalThis.loaders=globalThis.loaders||{};let{loaders:e}=globalThis;return e._state||={},e._state}function Cn(){let e=Sn();return e.globalOptions=e.globalOptions||{...yn,core:{...yn.core}},Tn(e.globalOptions)}function wn(e,t,n,r){return n||=[],n=Array.isArray(n)?n:[n],En(e,n),Tn(kn(t,e,r))}function Tn(e){let t=Mn(e);Nn(t);for(let e of xn)t.core&&t.core[e]!==void 0&&delete t[e];return t.core&&t.core._workerType!==void 0&&delete t._worker,t}function En(e,t){Dn(e,null,yn,bn,t);for(let n of t){let r=e&&e[n.id]||{},i=n.options&&n.options[n.id]||{},a=n.deprecatedOptions&&n.deprecatedOptions[n.id]||{};Dn(r,n.id,i,a,t)}}function Dn(e,t,n,r,i){let a=t||`Top level`,o=t?`${t}.`:``;for(let s in e){let c=!t&&He(e[s]),l=s===`baseUri`&&!t,u=s===`workerUrl`&&t;if(!(s in n)&&!l&&!u){if(s in r)_n.level>0&&_n.warn(`${a} loader option \'${o}${s}\' no longer supported, use \'${r[s]}\'`)();else if(!c&&_n.level>0){let e=On(s,i);_n.warn(`${a} loader option \'${o}${s}\' not recognized. ${e}`)()}}}}function On(e,t){let n=e.toLowerCase(),r=``;for(let i of t)for(let t in i.options){if(e===t)return`Did you mean \'${i.id}.${t}\'?`;let a=t.toLowerCase();(n.startsWith(a)||a.startsWith(n))&&(r||=`Did you mean \'${i.id}.${t}\'?`)}return r}function kn(e,t,n){let r=e.options||{},i={...r};return r.core&&(i.core={...r.core}),Nn(i),i.core?.log===null&&(i.core={...i.core,log:new vn}),An(i,Tn(Cn())),An(i,Tn(t)),jn(i,n),Pn(i),i}function An(e,t){for(let n in t)if(n in t){let r=t[n];e[n]=Ue(r)&&Ue(e[n])?{...e[n],...t[n]}:t[n]}}function jn(e,t){t&&e.core?.baseUrl===void 0&&(e.core||={},e.core.baseUrl=qt(nn(t)))}function Mn(e){let t={...e};return e.core&&(t.core={...e.core}),t}function Nn(e){e.baseUri!==void 0&&(e.core||={},e.core.baseUrl===void 0&&(e.core.baseUrl=e.baseUri));for(let t of xn)if(e[t]!==void 0){let n=e.core=e.core||{};n[t]===void 0&&(n[t]=e[t])}let t=e._worker;t!==void 0&&(e.core||={},e.core._workerType===void 0&&(e.core._workerType=t))}function Pn(e){let t=e.core;if(t)for(let n of xn)t[n]!==void 0&&(e[n]=t[n])}function Fn(e){return e?(Array.isArray(e)&&(e=e[0]),Array.isArray(e?.extensions)):!1}function In(e){Me(e,`null loader`),Me(Fn(e),`invalid loader`);let t;return Array.isArray(e)&&(t=e[1],e=e[0],e={...e,options:{...e.options,...t}}),(e?.parseTextSync||e?.parseText)&&(e.text=!0),e.text||(e.binary=!0),e}var Ln=()=>{let e=Sn();return e.loaderRegistry=e.loaderRegistry||[],e.loaderRegistry};function Rn(e){let t=Ln();e=Array.isArray(e)?e:[e];for(let n of e){let e=In(n);t.find(t=>e===t)||t.unshift(e)}}function zn(){return Ln()}var Bn=/\.([^.]+)$/;async function Vn(e,t=[],n,r){if(!Gn(e))return null;let i=Tn(n||{});if(i.core||={},e instanceof Response&&Hn(e)){let n=Un(await e.clone().text(),t,{...i,core:{...i.core,nothrow:!0}},r);if(n)return n}let a=Un(e,t,{...i,core:{...i.core,nothrow:!0}},r);if(a)return a;if(Ye(e)&&(e=await e.slice(0,10).arrayBuffer(),a=Un(e,t,i,r)),!a&&e instanceof Response&&Hn(e)&&(a=Un(await e.clone().text(),t,i,r)),!a&&!i.core.nothrow)throw Error(Kn(e));return a}function Hn(e){let t=on(e);return!!(t&&(t.startsWith(`text/`)||t===`application/json`||t.endsWith(`+json`)))}function Un(e,t=[],n,r){if(!Gn(e))return null;let i=Tn(n||{});if(i.core||={},t&&!Array.isArray(t))return In(t);let a=[];t&&(a=a.concat(t)),i.core.ignoreRegisteredLoaders||a.push(...zn()),qn(a);let o=Wn(e,a,i,r);if(!o&&!i.core.nothrow)throw Error(Kn(e));return o}function Wn(e,t,n,r){let i=an(e),a=on(e),o=nn(i)||r?.url,s=null,c=``;return n?.core?.mimeType&&(s=Xn(t,n?.core?.mimeType),c=`match forced by supplied MIME type ${n?.core?.mimeType}`),s||=Jn(t,o),c||=s?`matched url ${o}`:``,s||=Xn(t,a),c||=s?`matched MIME type ${a}`:``,s||=Zn(t,e),c||=s?`matched initial data ${tr(e)}`:``,n?.core?.fallbackMimeType&&(s||=Xn(t,n?.core?.fallbackMimeType),c||=s?`matched fallback MIME type ${a}`:``),c&&ze.log(1,`selectLoader selected ${s?.name}: ${c}.`),s}function Gn(e){return!(e instanceof Response&&e.status===204)}function Kn(e){let t=an(e),n=on(e),r=`No valid loader found (`;r+=t?`${Kt(t)}, `:`no url provided, `,r+=`MIME type: ${n?`"${n}"`:`not provided`}, `;let i=e?tr(e):``;return r+=i?` first bytes: "${i}"`:`first bytes: not available`,r+=`)`,r}function qn(e){for(let t of e)In(t)}function Jn(e,t){let n=t&&Bn.exec(t),r=n&&n[1];return r?Yn(e,r):null}function Yn(e,t){t=t.toLowerCase();for(let n of e)for(let e of n.extensions)if(e.toLowerCase()===t)return n;return null}function Xn(e,t){for(let n of e)if(n.mimeTypes?.some(e=>Zt(t,e))||Zt(t,`application/x.${n.id}`))return n;return null}function Zn(e,t){if(!t)return null;for(let n of e)if(typeof t==`string`){if(Qn(t,n))return n}else if(ArrayBuffer.isView(t)){if($n(t.buffer,t.byteOffset,n))return n}else if(t instanceof ArrayBuffer&&$n(t,0,n))return n;return null}function Qn(e,t){return t.testText?t.testText(e):(Array.isArray(t.tests)?t.tests:[t.tests]).some(t=>e.startsWith(t))}function $n(e,t,n){return(Array.isArray(n.tests)?n.tests:[n.tests]).some(r=>er(e,t,n,r))}function er(e,t,n,r){if(Ge(r))return Ot(r,e,r.byteLength);switch(typeof r){case`function`:return r(Ut(e));case`string`:return r===nr(e,t,r.length);default:return!1}}function tr(e,t=5){return typeof e==`string`?e.slice(0,t):ArrayBuffer.isView(e)?nr(e.buffer,e.byteOffset,t):e instanceof ArrayBuffer?nr(e,0,t):``}function nr(e,t,n){if(e.byteLength<t+n)return``;let r=new DataView(e),i=``;for(let e=0;e<n;e++)i+=String.fromCharCode(r.getUint8(t+e));return i}var rr=262144;function*ir(e,t){let n=t?.chunkSize||rr,r=0,i=new TextEncoder;for(;r<e.length;){let t=Math.min(e.length-r,n),a=e.slice(r,r+t);r+=t,yield Ut(i.encode(a))}}var ar=262144;function*or(e,t={}){let{chunkSize:n=ar}=t,r=0;for(;r<e.byteLength;){let t=Math.min(e.byteLength-r,n),i=new ArrayBuffer(t),a=new Uint8Array(e,r,t);new Uint8Array(i).set(a),r+=t,yield i}}var sr=1048576;async function*cr(e,t){let n=t?.chunkSize||sr,r=0;for(;r<e.size;){let t=r+n,i=await e.slice(r,t).arrayBuffer();r=t,yield i}}function lr(e,t){return Pe?ur(e,t):dr(e,t)}async function*ur(e,t){let n=e.getReader(),r;try{for(;;){let e=r||n.read();t?._streamReadAhead&&(r=n.read());let{done:i,value:a}=await e;if(i)return;yield Ht(a)}}catch{n.releaseLock()}}async function*dr(e,t){for await(let t of e)yield Ht(t)}function fr(e,t){if(typeof e==`string`)return ir(e,t);if(e instanceof ArrayBuffer)return or(e,t);if(Ye(e))return cr(e,t);if(Qe(e))return lr(e,t);if(Je(e)){let n=e.body;if(!n)throw Error(`Readable stream not available on Response`);return lr(n,t)}throw Error(`makeIterator`)}var pr=`Cannot convert supplied data type`;function mr(e,t,n){if(t.text&&typeof e==`string`)return e;if(Vt(e)&&(e=e.buffer),Ge(e)){let n=Gt(e);return t.text&&!t.binary?new TextDecoder(`utf8`).decode(n):Ht(n)}throw Error(pr)}async function hr(e,t,n){if(typeof e==`string`||Ge(e))return mr(e,t,n);if(Ye(e)&&(e=await cn(e)),Je(e))return await ln(e),t.binary?await e.arrayBuffer():await e.text();if(Qe(e)&&(e=fr(e,n)),Ke(e)||qe(e))return jt(e);throw Error(pr)}function gr(e,t){let n=Cn(),r=e||n,i=r.fetch??r.core?.fetch;return typeof i==`function`?i:He(i)?e=>gn(e,i):t?.fetch?t?.fetch:gn}function _r(e,t,n){if(n)return n;let r={fetch:gr(t,e),...e};if(r.url){let e=nn(r.url);r.baseUrl=e,r.queryString=tn(r.url),r.filename=Kt(e),r.baseUrl=qt(e)}return Array.isArray(r.loaders)||(r.loaders=null),r}function vr(e,t){if(e&&!Array.isArray(e))return e;let n;if(e&&(n=Array.isArray(e)?e:[e]),t&&t.loaders){let e=Array.isArray(t.loaders)?t.loaders:[t.loaders];n=n?[...n,...e]:e}return n&&n.length?n:void 0}async function yr(e,t,n,r){t&&!Array.isArray(t)&&!Fn(t)&&(r=void 0,n=t,t=void 0),e=await e,n||={};let i=an(e),a=vr(t,r),o=await Vn(e,a,n);if(!o)return null;let s=wn(n,o,a,i);return r=_r({url:i,_parse:yr,loaders:a},s,r||null),await br(o,e,s,r)}async function br(e,t,n,r){if(wt(e),n=$e(e.options,n),Je(t)){let{ok:e,redirected:n,status:i,statusText:a,type:o,url:s}=t;r.response={headers:Object.fromEntries(t.headers.entries()),ok:e,redirected:n,status:i,statusText:a,type:o,url:s}}t=await hr(t,e,n);let i=e;if(i.parseTextSync&&typeof t==`string`)return i.parseTextSync(t,n,r);if(Tt(e,n))return await Et(e,t,n,r,yr);if(i.parseText&&typeof t==`string`)return await i.parseText(t,n,r);if(i.parse)return await i.parse(t,n,r);throw it(!i.parseSync),Error(`${e.id} loader - no parser found and worker is disabled`)}async function xr(e,t,n,r){let i,a;!Array.isArray(t)&&!Fn(t)?(i=[],a=t,r=void 0):(i=t,a=n);let o=gr(a),s=e;return typeof e==`string`&&(s=await o(e)),Ye(e)&&(s=await o(e)),typeof e==`string`&&(Tn(a||{}).core?.baseUrl||(a={...a,core:{...a?.core,baseUrl:e}})),await yr(s,i,a)}var Sr=`4.5.2`,Cr=globalThis.loaders?.parseImageNode,wr=typeof Image<`u`,Tr=typeof ImageBitmap<`u`,Er=Pe?!0:!!Cr;function Dr(e){switch(e){case`auto`:return Tr||wr||Er;case`imagebitmap`:return Tr;case`image`:return wr;case`data`:return Er;default:throw Error(`@loaders.gl/images: image ${e} not supported in this environment`)}}function Or(){if(Tr)return`imagebitmap`;if(wr)return`image`;if(Er)return`data`;throw Error(`Install '@loaders.gl/polyfills' to parse images under Node.js`)}function kr(e){let t=jr(e);if(!t)throw Error(`Not an image`);return t}function Ar(e){switch(kr(e)){case`data`:return e;case`image`:case`imagebitmap`:let t=document.createElement(`canvas`),n=t.getContext(`2d`);if(!n)throw Error(`getImageData`);return t.width=e.width,t.height=e.height,n.drawImage(e,0,0),n.getImageData(0,0,e.width,e.height);default:throw Error(`getImageData`)}}function jr(e){return typeof ImageBitmap<`u`&&e instanceof ImageBitmap?`imagebitmap`:typeof Image<`u`&&e instanceof Image?`image`:e&&typeof e==`object`&&e.data&&e.width&&e.height?`data`:null}var Mr=/^data:image\/svg\+xml/,Nr=/\.svg((\?|#).*)?$/;function Pr(e){return e&&(Mr.test(e)||Nr.test(e))}function Fr(e,t){if(Pr(t)){let t=new TextDecoder().decode(e);try{typeof unescape==`function`&&typeof encodeURIComponent==`function`&&(t=unescape(encodeURIComponent(t)))}catch(e){throw Error(e.message)}return`data:image/svg+xml;base64,${btoa(t)}`}return Ir(e,t)}function Ir(e,t){if(Pr(t))throw Error(`SVG cannot be parsed directly to imagebitmap`);return new Blob([new Uint8Array(e)])}async function Lr(e,t,n){let r=Fr(e,n),i=self.URL||self.webkitURL,a=typeof r!=`string`&&i.createObjectURL(r);try{return await Rr(a||r,t)}finally{a&&i.revokeObjectURL(a)}}async function Rr(e,t){let n=new Image;return n.src=e,t.image&&t.image.decode&&n.decode?(await n.decode(),n):await new Promise((e,t)=>{try{n.onload=()=>e(n),n.onerror=e=>{let n=e instanceof Error?e.message:`error`;t(Error(n))}}catch(e){t(e)}})}var zr=!0;async function Br(e,t,n){let r;r=Pr(n)?await Lr(e,t,n):Ir(e,n);let i=t&&t.imagebitmap;return await Vr(r,i)}async function Vr(e,t=null){if((Hr(t)||!zr)&&(t=null),t)try{return await createImageBitmap(e,t)}catch(e){console.warn(e),zr=!1}return await createImageBitmap(e)}function Hr(e){if(!e)return!0;for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ur(e){return!qr(e,`ftyp`,4)||!(e[8]&96)?null:Wr(e)}function Wr(e){switch(Gr(e,8,12).replace(`\0`,` `).trim()){case`avif`:case`avis`:return{extension:`avif`,mimeType:`image/avif`};default:return null}}function Gr(e,t,n){return String.fromCharCode(...e.slice(t,n))}function Kr(e){return[...e].map(e=>e.charCodeAt(0))}function qr(e,t,n=0){let r=Kr(t);for(let t=0;t<r.length;++t)if(r[t]!==e[t+n])return!1;return!0}var Jr=!1,Yr=!0;function Xr(e){let t=ri(e);return Qr(t)||ti(t)||$r(t)||ei(t)||Zr(t)}function Zr(e){let t=Ur(new Uint8Array(e instanceof DataView?e.buffer:e));return t?{mimeType:t.mimeType,width:0,height:0}:null}function Qr(e){let t=ri(e);return t.byteLength>=24&&t.getUint32(0,Jr)===2303741511?{mimeType:`image/png`,width:t.getUint32(16,Jr),height:t.getUint32(20,Jr)}:null}function $r(e){let t=ri(e);return t.byteLength>=10&&t.getUint32(0,Jr)===1195984440?{mimeType:`image/gif`,width:t.getUint16(6,Yr),height:t.getUint16(8,Yr)}:null}function ei(e){let t=ri(e);return t.byteLength>=14&&t.getUint16(0,Jr)===16973&&t.getUint32(2,Yr)===t.byteLength?{mimeType:`image/bmp`,width:t.getUint32(18,Yr),height:t.getUint32(22,Yr)}:null}function ti(e){let t=ri(e);if(!(t.byteLength>=3&&t.getUint16(0,Jr)===65496&&t.getUint8(2)===255))return null;let{tableMarkers:n,sofMarkers:r}=ni(),i=2;for(;i+9<t.byteLength;){let e=t.getUint16(i,Jr);if(r.has(e))return{mimeType:`image/jpeg`,height:t.getUint16(i+5,Jr),width:t.getUint16(i+7,Jr)};if(!n.has(e))return null;i+=2,i+=t.getUint16(i,Jr)}return null}function ni(){let e=new Set([65499,65476,65484,65501,65534]);for(let t=65504;t<65520;++t)e.add(t);return{tableMarkers:e,sofMarkers:new Set([65472,65473,65474,65475,65477,65478,65479,65481,65482,65483,65485,65486,65487,65502])}}function ri(e){if(e instanceof DataView)return e;if(ArrayBuffer.isView(e))return new DataView(e.buffer);if(e instanceof ArrayBuffer)return new DataView(e);throw Error(`toDataView`)}async function ii(e,t){let{mimeType:n}=Xr(e)||{},r=globalThis.loaders?.parseImageNode;return Me(r),await r(e,n)}async function ai(e,t,n){t||={};let r=(t.image||{}).type||`auto`,{url:i}=n||{},a=oi(r),o;switch(a){case`imagebitmap`:o=await Br(e,t,i);break;case`image`:o=await Lr(e,t,i);break;case`data`:o=await ii(e,t);break;default:Me(!1)}return r===`data`&&(o=Ar(o)),o}function oi(e){switch(e){case`auto`:case`data`:return Or();default:return Dr(e),e}}var si={dataType:null,batchType:null,id:`image`,module:`images`,name:`Images`,version:Sr,mimeTypes:[`image/png`,`image/jpeg`,`image/gif`,`image/webp`,`image/avif`,`image/bmp`,`image/vnd.microsoft.icon`,`image/svg+xml`],extensions:[`png`,`jpg`,`jpeg`,`gif`,`webp`,`bmp`,`ico`,`svg`,`avif`],parse:ai,tests:[e=>!!Xr(new DataView(e))],options:{image:{type:`auto`,decode:!0}}},U=new g({id:`deck`}),ci={};function li(e){ci=e}function ui(e,t,n,r){U.level>0&&ci[e]&&ci[e].call(null,t,n,r)}function di(e){let t=e[0],n=e[e.length-1];return t===`{`&&n===`}`||t===`[`&&n===`]`}var fi={dataType:null,batchType:null,id:`JSON`,name:`JSON`,module:``,version:``,options:{},extensions:[`json`,`geojson`],mimeTypes:[`application/json`,`application/geo+json`],testText:di,parseTextSync:JSON.parse};function pi(){let e=`9.4.0`,t=globalThis.deck&&globalThis.deck.VERSION;if(t&&t!==e)throw Error(`deck.gl - multiple versions detected: ${t} vs ${e}`);return t||(U.log(1,`deck.gl ${e}`)(),globalThis.deck={...globalThis.deck,VERSION:e,version:e,log:U,_registerLoggers:li},Rn([fi,[si,{imagebitmap:{premultiplyAlpha:`none`}}]])),e}var mi=pi(),hi={id:null,powerPreference:`high-performance`,failIfMajorPerformanceCaveat:!1,featureLevel:void 0,optionalFeatures:[],xrCompatible:!1,createCanvasContext:void 0,webgl:{},onError:(e,t)=>{},onResize:(e,t)=>{let[n,r]=e.getDevicePixelSize();i.log(1,`${e} resized => ${n}x${r}px`)()},onPositionChange:(e,t)=>{let[n,r]=e.getPosition();i.log(1,`${e} repositioned => ${n},${r}`)()},onVisibilityChange:e=>i.log(1,`${e} Visibility changed ${e.isVisible}`)(),onDevicePixelRatioChange:(e,t)=>i.log(1,`${e} DPR changed ${t.oldRatio} => ${e.devicePixelRatio}`)(),debug:_i(),debugGPUTime:!1,debugShaders:i.get(`debug-shaders`)||void 0,debugFramebuffers:!!i.get(`debug-framebuffers`),debugFactories:!!i.get(`debug-factories`),debugWebGL:!!i.get(`debug-webgl`),debugSpectorJS:void 0,debugSpectorJSUrl:void 0,_reuseDevices:!1,_cacheShaders:!0,_destroyShaders:!1,_cachePipelines:!0,_sharePipelines:!0,_destroyPipelines:!1,_initializeFeatures:!0,_disabledFeatures:{"compilation-status-async-webgl":!0},_handle:void 0};function gi(e,t){return e==null?t!==void 0&&t!==`production`:!!e}function _i(){return gi(i.get(`debug`),vi())}function vi(){let e=globalThis.process;if(e?.env)return e.env.NODE_ENV}var yi=`GPU Time and Memory`,bi=[`Adapter`,`GPU`,`GPU Type`,`GPU Backend`,`Frame Rate`,`CPU Time`,`GPU Time`,`GPU Memory`,`Buffer Memory`,`Texture Memory`,`External Buffer Memory`,`External Texture Memory`,`Swap Chain Texture`],xi=new WeakMap,Si=new WeakMap,Ci=new class{stats=new Map;getStats(e){return this.get(e)}get(e){this.stats.has(e)||this.stats.set(e,new It({id:e}));let t=this.stats.get(e);return e===yi&&wi(t,bi),t}};function wi(e,t){let n=e.stats,r=!1;for(let i of t)n[i]||(e.get(i),r=!0);let i=Object.keys(n).length,a=xi.get(e);if(!r&&a?.orderedStatNames===t&&a.statCount===i)return;let o={},s=Si.get(t);s||(s=new Set(t),Si.set(t,s));for(let e of t)n[e]&&(o[e]=n[e]);for(let[e,t]of Object.entries(n))s.has(e)||(o[e]=t);for(let e of Object.keys(n))delete n[e];Object.assign(n,o),xi.set(e,{orderedStatNames:t,statCount:i})}var Ti=`set luma.log.level=1 (or higher) to trace rendering`,Ei="No matching device found. Ensure `@luma.gl/webgl` and/or `@luma.gl/webgpu` modules are imported.",Di=new class e{static defaultProps={...hi,type:`best-available`,adapters:void 0,waitForPageLoad:!0};stats=Ci;log=i;VERSION=`9.4.2`;spector;preregisteredAdapters=new Map;constructor(){if(globalThis.luma){if(globalThis.luma.VERSION!==this.VERSION)throw i.error(`Found luma.gl ${globalThis.luma.VERSION} while initialzing ${this.VERSION}`)(),i.error(`'yarn why @luma.gl/core' can help identify the source of the conflict`)(),Error(`luma.gl - multiple versions detected: see console log`);i.error(`This version of luma.gl has already been initialized`)()}i.log(1,`${this.VERSION} - ${Ti}`)(),globalThis.luma=this}async createDevice(t={}){let n={...e.defaultProps,...t},r=this.selectAdapter(n.type,n.adapters);if(!r)throw Error(Ei);return n.waitForPageLoad&&await r.pageLoaded,await r.create(n)}async attachDevice(e,t){let n=this._getTypeFromHandle(e,t.adapters),r=n&&this.selectAdapter(n,t.adapters);if(!r)throw Error(Ei);return await r?.attach?.(e,t)}registerAdapters(e){for(let t of e)this.preregisteredAdapters.set(t.type,t)}getSupportedAdapters(e=[]){let t=this._getAdapterMap(e);return Array.from(t).map(([,e])=>e).filter(e=>e.isSupported?.()).map(e=>e.type)}getBestAvailableAdapterType(e=[]){let t=[`webgpu`,`webgl`,`null`],n=this._getAdapterMap(e);for(let e of t)if(n.get(e)?.isSupported?.())return e;return null}selectAdapter(e,t=[]){let n=e;e===`best-available`&&(n=this.getBestAvailableAdapterType(t));let r=this._getAdapterMap(t);return n&&r.get(n)||null}enforceWebGL2(e=!0,t=[]){let n=this._getAdapterMap(t).get(`webgl`);n||i.warn(`enforceWebGL2: webgl adapter not found`)(),n?.enforceWebGL2?.(e)}setDefaultDeviceProps(t){Object.assign(e.defaultProps,t)}_getAdapterMap(e=[]){let t=new Map(this.preregisteredAdapters);for(let n of e)t.set(n.type,n);return t}_getTypeFromHandle(e,t=[]){return e instanceof WebGL2RenderingContext?`webgl`:typeof GPUDevice<`u`&&e instanceof GPUDevice||e?.queue?`webgpu`:e===null?`null`:(e instanceof WebGLRenderingContext?i.warn(`WebGL1 is not supported`,e)():i.warn(`Unknown handle type`,e)(),null)}},Oi=class{get pageLoaded(){return Mi()}},ki=t()&&typeof document<`u`,Ai=()=>ki&&document.readyState===`complete`,ji=null;function Mi(){return ji||=Ai()||typeof window>`u`?Promise.resolve():new Promise(e=>window.addEventListener(`load`,()=>e())),ji}function Ni(e){return typeof ImageData<`u`&&e instanceof ImageData||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLVideoElement<`u`&&e instanceof HTMLVideoElement||typeof VideoFrame<`u`&&e instanceof VideoFrame||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof OffscreenCanvas<`u`&&e instanceof OffscreenCanvas}function Pi(e){if(typeof ImageData<`u`&&e instanceof ImageData||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof OffscreenCanvas<`u`&&e instanceof OffscreenCanvas)return{width:e.width,height:e.height};if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement)return{width:e.naturalWidth,height:e.naturalHeight};if(typeof HTMLVideoElement<`u`&&e instanceof HTMLVideoElement)return{width:e.videoWidth,height:e.videoHeight};if(typeof VideoFrame<`u`&&e instanceof VideoFrame)return{width:e.displayWidth,height:e.displayHeight};throw Error(`Unknown image type`)}var Fi=class{};function Ii(e,t){return[Li(e),...t.map(Li).filter(e=>e!==void 0)].filter(e=>e!==void 0)}function Li(e){if(e!==void 0){if(e===null||typeof e==`string`||typeof e==`number`||typeof e==`boolean`)return e;if(e instanceof Error)return e.message;if(Array.isArray(e))return e.map(Li);if(typeof e==`object`){if(Ri(e)){let t=String(e);if(t!==`[object Object]`)return t}return zi(e)?Bi(e):e.constructor?.name||`Object`}return String(e)}}function Ri(e){return`toString`in e&&typeof e.toString==`function`&&e.toString!==Object.prototype.toString}function zi(e){return`message`in e&&`type`in e}function Bi(e){let t=typeof e.type==`string`?e.type:`message`,n=typeof e.message==`string`?e.message:``,r=typeof e.lineNum==`number`?e.lineNum:null,i=typeof e.linePos==`number`?e.linePos:null;return`${t}${r!==null&&i!==null?` @ ${r}:${i}`:r===null?``:` @ ${r}`}: ${n}`.trim()}var Vi=class{features;disabledFeatures;constructor(e=[],t){this.features=new Set(e),this.disabledFeatures=t||{}}*[Symbol.iterator](){yield*this.features}has(e){return!this.disabledFeatures?.[e]&&this.features.has(e)}};function Hi(){if(typeof HTMLCanvasElement>`u`)return!1;let e=HTMLCanvasElement.prototype;return`layoutSubtree`in e&&typeof e.requestPaint==`function`}var Ui=class e{static defaultProps={...hi};get[Symbol.toStringTag](){return`Device`}toString(){return`Device(${this.id})`}toJSON(){return this.toString()}id;props;userData={};statsManager=Ci;_factories={};timestamp=0;_reused=!1;_moduleData={};wgslLanguageFeatures=new Set;_textureCaps={};_debugGPUTimeQuery=null;constructor(t){this.props={...e.defaultProps,...t},this.id=this.props.id||_(this[Symbol.toStringTag].toLowerCase())}getVertexFormatInfo(e){return s.getVertexFormatInfo(e)}isVertexFormatSupported(e){return!0}getTextureFormatInfo(e){return se.getInfo(e)}getTextureFormatCapabilities(e){let t=this._textureCaps[e];if(!t){let n=this._getDeviceTextureFormatCapabilities(e);t=this._getDeviceSpecificTextureFormatCapabilities(n),this._textureCaps[e]=t}return t}getMipLevelCount(e,t,n=1){return 1+Math.floor(Math.log2(Math.max(e,t,n)))}isExternalImage(e){return Ni(e)}getExternalImageSize(e){return Pi(e)}isTextureFormatSupported(e){return this.getTextureFormatCapabilities(e).create}isTextureFormatFilterable(e){return this.getTextureFormatCapabilities(e).filter}isTextureFormatRenderable(e){return this.getTextureFormatCapabilities(e).render}isTextureFormatCompressed(e){return se.isCompressed(e)}getSupportedCompressedTextureFormats(){let e=[];for(let t of Object.keys(ce()))this.isTextureFormatCompressed(t)&&this.isTextureFormatSupported(t)&&e.push(t);return e}pushDebugGroup(e){this.commandEncoder.pushDebugGroup(e)}popDebugGroup(){this.commandEncoder?.popDebugGroup()}insertDebugMarker(e){this.commandEncoder?.insertDebugMarker(e)}loseDevice(){return!1}incrementTimestamp(){return this.timestamp++}reportError(e,t,...n){if(!this.props.onError(e,t)){let r=Ii(t,n);return i.error(this.type===`webgl`?`%cWebGL`:`%cWebGPU`,`color: white; background: red; padding: 2px 6px; border-radius: 3px;`,e.message,...r)}return()=>{}}debug(){if(this.props.debug)debugger;else i.once(0,`'Type luma.log.set({debug: true}) in console to enable debug breakpoints',
or create a device with the 'debug: true' prop.`)()}getDefaultCanvasContext(){if(!this.canvasContext)throw Error(`Device has no default CanvasContext. See props.createCanvasContext`);return this.canvasContext}createFence(){throw Error(`createFence() not implemented`)}beginRenderPass(e){return this.commandEncoder.beginRenderPass(e)}beginComputePass(e){return this.commandEncoder.beginComputePass(e)}writeBufferViaCommandEncoder(e,t,n,r=0){throw Error(`writeBufferViaCommandEncoder() not implemented`)}generateMipmapsWebGPU(e){throw Error(`not implemented`)}_createSharedRenderPipelineWebGL(e){throw Error(`_createSharedRenderPipelineWebGL() not implemented`)}_createBindGroupLayoutWebGPU(e,t){throw Error(`_createBindGroupLayoutWebGPU() not implemented`)}_createBindGroupWebGPU(e,t,n,r,i){throw Error(`_createBindGroupWebGPU() not implemented`)}_supportsDebugGPUTime(){return this.features.has(`timestamp-query`)&&!!(this.props.debug||this.props.debugGPUTime)}_enableDebugGPUTime(e=256){if(!this._supportsDebugGPUTime())return null;if(this._debugGPUTimeQuery)return this._debugGPUTimeQuery;try{this._debugGPUTimeQuery=this.createQuerySet({type:`timestamp`,count:e}),this.commandEncoder=this.createCommandEncoder({id:this.commandEncoder.props.id,timeProfilingQuerySet:this._debugGPUTimeQuery})}catch{this._debugGPUTimeQuery=null}return this._debugGPUTimeQuery}_disableDebugGPUTime(){this._debugGPUTimeQuery&&=(this.commandEncoder.getTimeProfilingQuerySet()===this._debugGPUTimeQuery&&(this.commandEncoder=this.createCommandEncoder({id:this.commandEncoder.props.id})),this._debugGPUTimeQuery.destroy(),null)}_isDebugGPUTimeEnabled(){return this._debugGPUTimeQuery!==null}getCanvasContext(){return this.getDefaultCanvasContext()}readPixelsToArrayWebGL(e,t){throw Error(`not implemented`)}readPixelsToBufferWebGL(e,t){throw Error(`not implemented`)}setParametersWebGL(e){throw Error(`not implemented`)}getParametersWebGL(e){throw Error(`not implemented`)}withParametersWebGL(e,t){throw Error(`not implemented`)}clearWebGL(e){throw Error(`not implemented`)}resetWebGL(){throw Error(`not implemented`)}getModuleData(e){return this._moduleData[e]||={},this._moduleData[e]}static _getCanvasContextProps(e){return e.createCanvasContext===!0?{}:e.createCanvasContext}_getDeviceTextureFormatCapabilities(e){let t=se.getCapabilities(e),n=e=>(typeof e==`string`?this.features.has(e):e)??!0,r=n(t.create);return{format:e,create:r,render:r&&n(t.render),filter:r&&n(t.filter),blend:r&&n(t.blend),store:r&&n(t.store)}}_normalizeBufferProps(e){(e instanceof ArrayBuffer||ArrayBuffer.isView(e))&&(e={data:e});let t={...e};if((e.usage||0)&n.INDEX&&(e.indexType||(e.data instanceof Uint32Array?t.indexType=`uint32`:e.data instanceof Uint16Array?t.indexType=`uint16`:e.data instanceof Uint8Array&&(t.data=new Uint16Array(e.data),t.indexType=`uint16`)),!t.indexType))throw Error(`indices buffer content must be of type uint16 or uint32`);return t}},Wi=class{props;_resizeObserver;_intersectionObserver;_observeDevicePixelRatioTimeout=null;_observeDevicePixelRatioMediaQuery=null;_handleDevicePixelRatioChange=()=>this._refreshDevicePixelRatio();_trackPositionInterval=null;_started=!1;get started(){return this._started}constructor(e){this.props=e}start(){if(this._started||!this.props.canvas)return;this._started=!0,this._intersectionObserver||=new IntersectionObserver(e=>this.props.onIntersection(e)),this._resizeObserver||=new ResizeObserver(e=>this.props.onResize(e)),this._intersectionObserver.observe(this.props.canvas);let e=this.props.resizeObserverBox;try{this._resizeObserver.observe(this.props.canvas,{box:e})}catch{this._resizeObserver.observe(this.props.canvas,{box:`content-box`})}this._observeDevicePixelRatioTimeout=setTimeout(()=>this._refreshDevicePixelRatio(),0),this.props.trackPosition&&this._trackPosition()}stop(){this._started&&(this._started=!1,this._observeDevicePixelRatioTimeout&&=(clearTimeout(this._observeDevicePixelRatioTimeout),null),this._observeDevicePixelRatioMediaQuery&&=(this._observeDevicePixelRatioMediaQuery.removeEventListener(`change`,this._handleDevicePixelRatioChange),null),this._trackPositionInterval&&=(clearInterval(this._trackPositionInterval),null),this._resizeObserver?.disconnect(),this._intersectionObserver?.disconnect())}_refreshDevicePixelRatio(){this._started&&(this.props.onDevicePixelRatioChange(),this._observeDevicePixelRatioMediaQuery?.removeEventListener(`change`,this._handleDevicePixelRatioChange),this._observeDevicePixelRatioMediaQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this._observeDevicePixelRatioMediaQuery.addEventListener(`change`,this._handleDevicePixelRatioChange,{once:!0}))}_trackPosition(e=100){this._trackPositionInterval||=setInterval(()=>{this._started?this.props.onPositionChange():this._trackPositionInterval&&=(clearInterval(this._trackPositionInterval),null)},e)}};function Gi(){let e,t;return{promise:new Promise((n,r)=>{e=n,t=r}),resolve:e,reject:t}}var Ki=class e{static isHTMLCanvas(e){return typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement}static isOffscreenCanvas(e){return typeof OffscreenCanvas<`u`&&e instanceof OffscreenCanvas}static defaultProps={id:void 0,canvas:null,width:800,height:600,useDevicePixels:!0,pixelSizeSource:`exact`,autoResize:!0,container:null,visible:!0,alphaMode:`opaque`,colorSpace:`srgb`,colorFormat:void 0,toneMapping:`standard`,trackPosition:!1};id;props;canvas;htmlCanvas;offscreenCanvas;type;initialized;isInitialized=!1;isVisible=!0;cssWidth;cssHeight;devicePixelRatio;devicePixelWidth;devicePixelHeight;drawingBufferWidth;drawingBufferHeight;_initializedResolvers=Gi();_canvasObserver;_position=[0,0];destroyed=!1;_needsDrawingBufferResize=!0;_configuredDrawingBufferSize=[0,0];toString(){return`${this[Symbol.toStringTag]}(${this.id})`}constructor(n){this.props={...e.defaultProps,...n},n=this.props,this.initialized=this._initializedResolvers.promise,this.canvas=t()?n.canvas?typeof n.canvas==`string`?Ji(n.canvas):n.canvas:Yi(n):{width:n.width||1,height:n.height||1},e.isHTMLCanvas(this.canvas)?(this.id=n.id||this.canvas.id,this.type=`html-canvas`,this.htmlCanvas=this.canvas):e.isOffscreenCanvas(this.canvas)?(this.id=n.id||`offscreen-canvas`,this.type=`offscreen-canvas`,this.offscreenCanvas=this.canvas):(this.id=n.id||`node-canvas-context`,this.type=`node`),this.cssWidth=this.htmlCanvas?.clientWidth||this.canvas.width,this.cssHeight=this.htmlCanvas?.clientHeight||this.canvas.height,this.devicePixelWidth=this.canvas.width,this.devicePixelHeight=this.canvas.height,this.drawingBufferWidth=this.canvas.width,this.drawingBufferHeight=this.canvas.height,this._configuredDrawingBufferSize=[this.canvas.width,this.canvas.height],this.devicePixelRatio=globalThis.devicePixelRatio||1,this._position=[0,0],this._canvasObserver=new Wi({canvas:this.htmlCanvas,trackPosition:this.props.trackPosition,resizeObserverBox:this.props.pixelSizeSource===`css-dpr`?`content-box`:`device-pixel-content-box`,onResize:e=>this._handleResize(e),onIntersection:e=>this._handleIntersection(e),onDevicePixelRatioChange:()=>this._observeDevicePixelRatio(),onPositionChange:()=>this.updatePosition()})}destroy(){this.destroyed||(this.destroyed=!0,this._stopObservers(),this.device=null)}setProps(e){return`useDevicePixels`in e&&(this.props.useDevicePixels=e.useDevicePixels||!1,this._updateDrawingBufferSize()),this}getCurrentFramebuffer(e){return this._resizeDrawingBufferIfNeeded(),this._getCurrentFramebuffer(e)}getCSSSize(){return[this.cssWidth,this.cssHeight]}getPosition(){return this._position}getDevicePixelSize(){return[this.devicePixelWidth,this.devicePixelHeight]}getDrawingBufferSize(){return[this.drawingBufferWidth,this.drawingBufferHeight]}getMaxDrawingBufferSize(){let e=this.device.limits.maxTextureDimension2D;return[e,e]}setDrawingBufferSize(e,t){e=Math.floor(e),t=Math.floor(t),(this.drawingBufferWidth!==e||this.drawingBufferHeight!==t)&&(this.drawingBufferWidth=e,this.drawingBufferHeight=t,this._needsDrawingBufferResize=!0)}getDevicePixelRatio(){return typeof window<`u`&&window.devicePixelRatio||1}cssToDevicePixels(e,t=!0){let n=this.cssToDeviceRatio(),[r,i]=this.getDrawingBufferSize();return Xi(e,n,r,i,t)}getPixelSize(){return this.getDevicePixelSize()}getAspect(){let[e,t]=this.getDrawingBufferSize();return e>0&&t>0?e/t:1}cssToDeviceRatio(){try{let[e]=this.getDrawingBufferSize(),[t]=this.getCSSSize();return t?e/t:1}catch{return 1}}resize(e){this.setDrawingBufferSize(e.width,e.height)}_setAutoCreatedCanvasId(e){this.htmlCanvas?.id===`lumagl-auto-created-canvas`&&(this.htmlCanvas.id=e)}_startObservers(){this.destroyed||this._canvasObserver.start()}_stopObservers(){this._canvasObserver.stop()}_handleIntersection(e){if(this.destroyed)return;let t=e.find(e=>e.target===this.canvas);if(!t)return;let n=t.isIntersecting;this.isVisible!==n&&(this.isVisible=n,this.device.props.onVisibilityChange(this))}_handleResize(e){if(this.destroyed)return;let t=e.find(e=>e.target===this.canvas);if(!t)return;let n=o(t.contentBoxSize?.[0]);this.cssWidth=n.inlineSize,this.cssHeight=n.blockSize;let r=this.getDevicePixelSize();this._setDevicePixelSize(this._getDevicePixelSizeFromResizeEntry(t)),this._updateDrawingBufferSize(),this.device.props.onResize(this,{oldPixelSize:r})}_updateDrawingBufferSize(){if(this.props.autoResize){if(typeof this.props.useDevicePixels==`number`){let e=this.props.useDevicePixels;this.setDrawingBufferSize(this.cssWidth*e,this.cssHeight*e)}else this.props.useDevicePixels?this.setDrawingBufferSize(this.devicePixelWidth,this.devicePixelHeight):this.setDrawingBufferSize(this.cssWidth,this.cssHeight)}this._initializedResolvers.resolve(),this.isInitialized=!0,this.updatePosition()}_getDevicePixelSizeFromResizeEntry(e){let t=o(e.contentBoxSize?.[0]);return this.props.pixelSizeSource===`css-dpr`?this._getDevicePixelSizeFromCSSSize(t.inlineSize,t.blockSize):{devicePixelWidth:e.devicePixelContentBoxSize?.[0]?.inlineSize||t.inlineSize*devicePixelRatio,devicePixelHeight:e.devicePixelContentBoxSize?.[0]?.blockSize||t.blockSize*devicePixelRatio}}_getDevicePixelSizeFromCSSSize(e,t){let n=this.getDevicePixelRatio();return{devicePixelWidth:Math.floor(e*n),devicePixelHeight:Math.floor(t*n)}}_setDevicePixelSize({devicePixelWidth:e,devicePixelHeight:t}){let[n,r]=this.getMaxDrawingBufferSize();this.devicePixelWidth=Math.max(1,Math.min(e,n)),this.devicePixelHeight=Math.max(1,Math.min(t,r))}_resizeDrawingBufferIfNeeded(){if(this._needsDrawingBufferResize){this._needsDrawingBufferResize=!1,(this.drawingBufferWidth!==this.canvas.width||this.drawingBufferHeight!==this.canvas.height)&&(this.canvas.width=this.drawingBufferWidth,this.canvas.height=this.drawingBufferHeight);let[e,t]=this._configuredDrawingBufferSize;(this.drawingBufferWidth!==e||this.drawingBufferHeight!==t)&&(this._configureDevice(),this._configuredDrawingBufferSize=[this.drawingBufferWidth,this.drawingBufferHeight])}}_observeDevicePixelRatio(){if(this.destroyed||!this._canvasObserver.started)return;let e=this.devicePixelRatio;if(this.devicePixelRatio=window.devicePixelRatio,this.props.pixelSizeSource===`css-dpr`){let e=this.getDevicePixelSize();this._setDevicePixelSize(this._getDevicePixelSizeFromCSSSize(this.cssWidth,this.cssHeight)),this._updateDrawingBufferSize(),this.device.props.onResize(this,{oldPixelSize:e})}this.updatePosition(),this.device.props.onDevicePixelRatioChange?.(this,{oldRatio:e})}updatePosition(){if(this.destroyed)return;let e=this.htmlCanvas?.getBoundingClientRect();if(e){let t=[e.left,e.top];if(this._position??=t,t[0]!==this._position[0]||t[1]!==this._position[1]){let e=this._position;this._position=t,this.device.props.onPositionChange?.(this,{oldPosition:e})}}}};function qi(e){if(typeof e==`string`){let t=document.getElementById(e);if(!t)throw Error(`${e} is not an HTML element`);return t}return e||document.body}function Ji(e){let t=document.getElementById(e);if(!Ki.isHTMLCanvas(t))throw Error(`Object is not a canvas element`);return t}function Yi(e){let{width:t,height:n}=e,r=document.createElement(`canvas`);r.id=_(`lumagl-auto-created-canvas`),r.width=t||1,r.height=n||1,r.style.width=Number.isFinite(t)?`${t}px`:`100%`,r.style.height=Number.isFinite(n)?`${n}px`:`100%`,e?.visible||(r.style.visibility=`hidden`);let i=qi(e?.container||null);return i.insertBefore(r,i.firstChild),r}function Xi(e,t,n,r,i){let a=e,o=Zi(a[0],t,n),s=Qi(a[1],t,r,i),c=Zi(a[0]+1,t,n),l=c===n-1?c:c-1;c=Qi(a[1]+1,t,r,i);let u;return i?(c=c===0?c:c+1,u=s,s=c):u=c===r-1?c:c-1,{x:o,y:s,width:Math.max(l-o+1,1),height:Math.max(u-s+1,1)}}function Zi(e,t,n){return Math.min(Math.round(e*t),n-1)}function Qi(e,t,n,r){return r?Math.max(0,n-1-Math.round(e*t)):Math.min(Math.round(e*t),n-1)}var $i=class extends Ki{static defaultProps=Ki.defaultProps},ea=class extends Ki{},ta=class e extends m{width;height;updateTimestamp;get[Symbol.toStringTag](){return`ExternalTexture`}constructor(t,n){super(t,n,e.defaultProps);let r=this.props.source?t.getExternalImageSize(this.props.source):null;this.width=this.props.width||r?.width||0,this.height=this.props.height||r?.height||0,this.updateTimestamp=t.incrementTimestamp()}static defaultProps={...m.defaultProps,source:void 0,width:0,height:0,colorSpace:`srgb`,sampler:{}}},na=class e extends m{get[Symbol.toStringTag](){return`Framebuffer`}width;height;constructor(t,n={}){super(t,n,e.defaultProps),this.width=this.props.width,this.height=this.props.height}clone(e){let t=this.colorAttachments.map(t=>t.texture.clone(e)),n=this.depthStencilAttachment&&this.depthStencilAttachment.texture.clone(e);return this.device.createFramebuffer({...this.props,...e,colorAttachments:t,depthStencilAttachment:n})}resize(e){let t=!e;if(e){let[n,r]=Array.isArray(e)?e:[e.width,e.height];t=t||r!==this.height||n!==this.width,this.width=n,this.height=r}t&&(i.log(2,`Resizing framebuffer ${this.id} to ${this.width}x${this.height}`)(),this.resizeAttachments(this.width,this.height))}autoCreateAttachmentTextures(){if(this.props.colorAttachments.length===0&&!this.props.depthStencilAttachment)throw Error(`Framebuffer has noattachments`);this.colorAttachments=this.props.colorAttachments.map((e,t)=>{if(typeof e==`string`){let n=this.createColorTexture(e,t);return this.attachResource(n),n.view}return e instanceof z?e.view:e});let e=this.props.depthStencilAttachment;if(e){if(typeof e==`string`){let t=this.createDepthStencilTexture(e);this.attachResource(t),this.depthStencilAttachment=t.view}else this.depthStencilAttachment=e instanceof z?e.view:e}}createColorTexture(e,t){return this.device.createTexture({id:`${this.id}-color-attachment-${t}`,usage:z.RENDER_ATTACHMENT,format:e,width:this.width,height:this.height,sampler:{magFilter:`linear`,minFilter:`linear`}})}createDepthStencilTexture(e){return this.device.createTexture({id:`${this.id}-depth-stencil-attachment`,usage:z.RENDER_ATTACHMENT|z.SAMPLE,format:e,width:this.width,height:this.height})}resizeAttachments(e,t){if(this.colorAttachments.forEach((n,r)=>{let i=n.texture.clone({width:e,height:t});this.destroyAttachedResource(n),this.colorAttachments[r]=i.view,this.attachResource(i.view)}),this.depthStencilAttachment){let n=this.depthStencilAttachment.texture.clone({width:e,height:t});this.destroyAttachedResource(this.depthStencilAttachment),this.depthStencilAttachment=n.view,this.attachResource(n)}this.updateAttachments()}static defaultProps={...m.defaultProps,width:1,height:1,colorAttachments:[],depthStencilAttachment:null}},ra=class extends m{get[Symbol.toStringTag](){return`SharedRenderPipeline`}constructor(e,t){super(e,t,{...m.defaultProps,handle:void 0,vs:void 0,fs:void 0,varyings:void 0,bufferMode:void 0})}},ia=class e extends m{static defaultClearColor=[0,0,0,1];static defaultClearDepth=1;static defaultClearStencil=0;get[Symbol.toStringTag](){return`RenderPass`}constructor(t,n,r=e.defaultProps){n=e.normalizeProps(t,n),super(t,n,r)}static normalizeProps(e,t){return t}static defaultProps={...m.defaultProps,framebuffer:null,resolveTargets:void 0,parameters:void 0,clearColor:e.defaultClearColor,clearColors:void 0,clearDepth:e.defaultClearDepth,clearStencil:e.defaultClearStencil,depthReadOnly:!1,stencilReadOnly:!1,discard:!1,occlusionQuerySet:void 0,timestampQuerySet:void 0,beginTimestampIndex:void 0,endTimestampIndex:void 0}},aa=class e extends m{get[Symbol.toStringTag](){return`CommandEncoder`}_timeProfilingQuerySet=null;_timeProfilingSlotCount=0;_gpuTimeMs;constructor(t,n){super(t,n,e.defaultProps),this._timeProfilingQuerySet=n.timeProfilingQuerySet??null,this._timeProfilingSlotCount=0,this._gpuTimeMs=void 0}async resolveTimeProfilingQuerySet(){if(this._gpuTimeMs=void 0,!this._timeProfilingQuerySet)return;let e=Math.floor(this._timeProfilingSlotCount/2);if(e<=0)return;let t=e*2,n=await this._timeProfilingQuerySet.readResults({firstQuery:0,queryCount:t}),r=0n;for(let e=0;e<t;e+=2)r+=n[e+1]-n[e];this._gpuTimeMs=Number(r)/1e6}getTimeProfilingSlotCount(){return this._timeProfilingSlotCount}getTimeProfilingQuerySet(){return this._timeProfilingQuerySet}_applyTimeProfilingToPassProps(e){let t=e||{};if(!this._supportsTimestampQueries()||!this._timeProfilingQuerySet||t.timestampQuerySet!==void 0||t.beginTimestampIndex!==void 0||t.endTimestampIndex!==void 0)return t;let n=this._timeProfilingSlotCount;return n+1>=this._timeProfilingQuerySet.props.count?t:(this._timeProfilingSlotCount+=2,{...t,timestampQuerySet:this._timeProfilingQuerySet,beginTimestampIndex:n,endTimestampIndex:n+1})}_supportsTimestampQueries(){return this.device.features.has(`timestamp-query`)}static defaultProps={...m.defaultProps,measureExecutionTime:void 0,timeProfilingQuerySet:void 0}},oa=class e extends m{get[Symbol.toStringTag](){return`CommandBuffer`}constructor(t,n){super(t,n,e.defaultProps)}static defaultProps={...m.defaultProps}},sa=class e extends m{static defaultProps={...m.defaultProps,shaderLayout:void 0,bufferLayout:[]};get[Symbol.toStringTag](){return`VertexArray`}maxVertexAttributes;indexBuffer=null;attributes;constructor(t,n){super(t,n,e.defaultProps),this.maxVertexAttributes=t.limits.maxVertexAttributes,this.attributes=Array(this.maxVertexAttributes).fill(null)}getBufferSlot(e){return null}getDrawValidationError(){return null}setConstantWebGL(e,t){this.device.reportError(Error(`constant attributes not supported`),this)()}},ca=class e extends m{static defaultProps={...m.defaultProps,layout:void 0,buffers:{}};get[Symbol.toStringTag](){return`TransformFeedback`}constructor(t,n){super(t,n,e.defaultProps)}},la=class e extends m{get[Symbol.toStringTag](){return`QuerySet`}constructor(t,n){super(t,n,e.defaultProps)}static defaultProps={...m.defaultProps,type:void 0,count:void 0}},ua=class e extends m{static defaultProps={...m.defaultProps};get[Symbol.toStringTag](){return`Fence`}constructor(t,n={}){super(t,n,e.defaultProps)}},da=`#version 300 es
out vec4 transform_output;
void main() {
  transform_output = vec4(0);
}`;function fa(e){let{input:t,inputChannels:n,output:r}=e||{};if(!t)return da;if(!n)throw Error(`inputChannels`);return`\
#version 300 es
in ${pa(n)} ${t};
out vec4 ${r};
void main() {
  ${r} = ${ma(t,n)};
}`}function pa(e){switch(e){case 1:return`float`;case 2:return`vec2`;case 3:return`vec3`;case 4:return`vec4`;default:throw Error(`invalid channels: ${e}`)}}function ma(e,t){switch(t){case 1:return`vec4(${e}, 0.0, 0.0, 1.0)`;case 2:return`vec4(${e}, 0.0, 1.0)`;case 3:return`vec4(${e}, 1.0)`;case 4:return e;default:throw Error(`invalid channels: ${t}`)}}globalThis.mathgl=globalThis.mathgl||{config:{EPSILON:1e-12,debug:!1,precision:4,printTypes:!1,printDegrees:!1,printRowMajor:!0,_cartographicRadians:!1}};var ha=globalThis.mathgl.config;function ga(e,{precision:t=ha.precision}={}){return e=xa(e),`${parseFloat(e.toPrecision(t))}`}function _a(e){return Array.isArray(e)||ArrayBuffer.isView(e)&&!(e instanceof DataView)}function va(e,t,n){return Ca(e,e=>Math.max(t,Math.min(n,e)))}function ya(e,t,n){return _a(e)?e.map((e,r)=>ya(e,t[r],n)):n*t+(1-n)*e}function ba(e,t,n){let r=ha.EPSILON;n&&(ha.EPSILON=n);try{if(e===t)return!0;if(_a(e)&&_a(t)){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(!ba(e[n],t[n]))return!1;return!0}return e&&e.equals?e.equals(t):t&&t.equals?t.equals(e):typeof e==`number`&&typeof t==`number`&&Math.abs(e-t)<=ha.EPSILON*Math.max(1,Math.abs(e),Math.abs(t))}finally{ha.EPSILON=r}}function xa(e){return Math.round(e/ha.EPSILON)*ha.EPSILON}function Sa(e){return e.clone?e.clone():Array(e.length)}function Ca(e,t,n){if(_a(e)){let r=e;n||=Sa(r);for(let i=0;i<n.length&&i<r.length;++i){let r=typeof e==`number`?e:e[i];n[i]=t(r,i,n)}return n}return t(e)}var wa=class extends Array{clone(){return new this.constructor().copy(this)}fromArray(e,t=0){for(let n=0;n<this.ELEMENTS;++n)this[n]=e[n+t];return this.check()}toArray(e=[],t=0){for(let n=0;n<this.ELEMENTS;++n)e[t+n]=this[n];return e}toObject(e){return e}from(e){return Array.isArray(e)?this.copy(e):this.fromObject(e)}to(e){return e===this?this:_a(e)?this.toArray(e):this.toObject(e)}toTarget(e){return e?this.to(e):this}toFloat32Array(){return new Float32Array(this)}toString(){return this.formatString(ha)}formatString(e){let t=``;for(let n=0;n<this.ELEMENTS;++n)t+=(n>0?`, `:``)+ga(this[n],e);return`${e.printTypes?this.constructor.name:``}[${t}]`}equals(e){if(!e||this.length!==e.length)return!1;for(let t=0;t<this.ELEMENTS;++t)if(!ba(this[t],e[t]))return!1;return!0}exactEquals(e){if(!e||this.length!==e.length)return!1;for(let t=0;t<this.ELEMENTS;++t)if(this[t]!==e[t])return!1;return!0}negate(){for(let e=0;e<this.ELEMENTS;++e)this[e]=-this[e];return this.check()}lerp(e,t,n){if(n===void 0)return this.lerp(this,e,t);for(let r=0;r<this.ELEMENTS;++r){let i=e[r],a=typeof t==`number`?t:t[r];this[r]=i+n*(a-i)}return this.check()}min(e){for(let t=0;t<this.ELEMENTS;++t)this[t]=Math.min(e[t],this[t]);return this.check()}max(e){for(let t=0;t<this.ELEMENTS;++t)this[t]=Math.max(e[t],this[t]);return this.check()}clamp(e,t){for(let n=0;n<this.ELEMENTS;++n)this[n]=Math.min(Math.max(this[n],e[n]),t[n]);return this.check()}add(...e){for(let t of e)for(let e=0;e<this.ELEMENTS;++e)this[e]+=t[e];return this.check()}subtract(...e){for(let t of e)for(let e=0;e<this.ELEMENTS;++e)this[e]-=t[e];return this.check()}scale(e){if(typeof e==`number`)for(let t=0;t<this.ELEMENTS;++t)this[t]*=e;else for(let t=0;t<this.ELEMENTS&&t<e.length;++t)this[t]*=e[t];return this.check()}multiplyByScalar(e){for(let t=0;t<this.ELEMENTS;++t)this[t]*=e;return this.check()}check(){if(ha.debug&&!this.validate())throw Error(`math.gl: ${this.constructor.name} some fields set to invalid numbers'`);return this}validate(){let e=this.length===this.ELEMENTS;for(let t=0;t<this.ELEMENTS;++t)e&&=Number.isFinite(this[t]);return e}sub(e){return this.subtract(e)}setScalar(e){for(let t=0;t<this.ELEMENTS;++t)this[t]=e;return this.check()}addScalar(e){for(let t=0;t<this.ELEMENTS;++t)this[t]+=e;return this.check()}subScalar(e){return this.addScalar(-e)}multiplyScalar(e){for(let t=0;t<this.ELEMENTS;++t)this[t]*=e;return this.check()}divideScalar(e){return this.multiplyByScalar(1/e)}clampScalar(e,t){for(let n=0;n<this.ELEMENTS;++n)this[n]=Math.min(Math.max(this[n],e),t);return this.check()}get elements(){return this}};function Ta(e,t){if(e.length!==t)return!1;for(let t=0;t<e.length;++t)if(!Number.isFinite(e[t]))return!1;return!0}function Ea(e){if(!Number.isFinite(e))throw Error(`Invalid number ${JSON.stringify(e)}`);return e}function Da(e,t,n=``){if(ha.debug&&!Ta(e,t))throw Error(`math.gl: ${n} some fields set to invalid numbers'`);return e}function Oa(e,t){if(!e)throw Error(`math.gl assertion ${t}`)}var ka=class extends wa{get x(){return this[0]}set x(e){this[0]=Ea(e)}get y(){return this[1]}set y(e){this[1]=Ea(e)}len(){return Math.sqrt(this.lengthSquared())}magnitude(){return this.len()}lengthSquared(){let e=0;for(let t=0;t<this.ELEMENTS;++t)e+=this[t]*this[t];return e}magnitudeSquared(){return this.lengthSquared()}distance(e){return Math.sqrt(this.distanceSquared(e))}distanceSquared(e){let t=0;for(let n=0;n<this.ELEMENTS;++n){let r=this[n]-e[n];t+=r*r}return Ea(t)}dot(e){let t=0;for(let n=0;n<this.ELEMENTS;++n)t+=this[n]*e[n];return Ea(t)}normalize(){let e=this.magnitude();if(e!==0)for(let t=0;t<this.ELEMENTS;++t)this[t]/=e;return this.check()}multiply(...e){for(let t of e)for(let e=0;e<this.ELEMENTS;++e)this[e]*=t[e];return this.check()}divide(...e){for(let t of e)for(let e=0;e<this.ELEMENTS;++e)this[e]/=t[e];return this.check()}lengthSq(){return this.lengthSquared()}distanceTo(e){return this.distance(e)}distanceToSquared(e){return this.distanceSquared(e)}getComponent(e){return Oa(e>=0&&e<this.ELEMENTS,`index is out of range`),Ea(this[e])}setComponent(e,t){return Oa(e>=0&&e<this.ELEMENTS,`index is out of range`),this[e]=t,this.check()}addVectors(e,t){return this.copy(e).add(t)}subVectors(e,t){return this.copy(e).subtract(t)}multiplyVectors(e,t){return this.copy(e).multiply(t)}addScaledVector(e,t){return this.add(new this.constructor(e).multiplyScalar(t))}},Aa=typeof Float32Array<`u`?Float32Array:Array;function ja(){let e=new Aa(2);return Aa!=Float32Array&&(e[0]=0,e[1]=0),e}function Ma(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e}function Na(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e}function Pa(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e}function Fa(e){let t=e[0],n=e[1];return Math.sqrt(t*t+n*n)}function Ia(e,t){return e[0]=-t[0],e[1]=-t[1],e}function La(e,t,n,r){let i=t[0],a=t[1];return e[0]=i+r*(n[0]-i),e[1]=a+r*(n[1]-a),e}function Ra(e,t,n){let r=t[0],i=t[1];return e[0]=n[0]*r+n[4]*i+n[12],e[1]=n[1]*r+n[5]*i+n[13],e}var za=Na;(function(){let e=ja();return function(t,n,r,i,a,o){let s,c;for(n||=2,r||=0,c=i?Math.min(i*n+r,t.length):t.length,s=r;s<c;s+=n)e[0]=t[s],e[1]=t[s+1],a(e,e,o),t[s]=e[0],t[s+1]=e[1];return t}})();function Ba(e,t,n){let r=t[0],i=t[1],a=n[3]*r+n[7]*i||1;return e[0]=(n[0]*r+n[4]*i)/a,e[1]=(n[1]*r+n[5]*i)/a,e}function Va(e,t,n){let r=t[0],i=t[1],a=t[2],o=n[3]*r+n[7]*i+n[11]*a||1;return e[0]=(n[0]*r+n[4]*i+n[8]*a)/o,e[1]=(n[1]*r+n[5]*i+n[9]*a)/o,e[2]=(n[2]*r+n[6]*i+n[10]*a)/o,e}function Ha(e,t,n){let r=t[0],i=t[1];return e[0]=n[0]*r+n[2]*i,e[1]=n[1]*r+n[3]*i,e[2]=t[2],e}function Ua(){let e=new Aa(3);return Aa!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function Wa(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e}function Ga(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}function Ka(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function qa(e,t,n){let r=t[0],i=t[1],a=t[2],o=n[0],s=n[1],c=n[2];return e[0]=i*c-a*s,e[1]=a*o-r*c,e[2]=r*s-i*o,e}function Ja(e,t,n){let r=t[0],i=t[1],a=t[2],o=n[3]*r+n[7]*i+n[11]*a+n[15];return o||=1,e[0]=(n[0]*r+n[4]*i+n[8]*a+n[12])/o,e[1]=(n[1]*r+n[5]*i+n[9]*a+n[13])/o,e[2]=(n[2]*r+n[6]*i+n[10]*a+n[14])/o,e}function Ya(e,t,n){let r=t[0],i=t[1],a=t[2];return e[0]=r*n[0]+i*n[3]+a*n[6],e[1]=r*n[1]+i*n[4]+a*n[7],e[2]=r*n[2]+i*n[5]+a*n[8],e}function Xa(e,t,n){let r=n[0],i=n[1],a=n[2],o=n[3],s=t[0],c=t[1],l=t[2],u=i*l-a*c,d=a*s-r*l,f=r*c-i*s,p=i*f-a*d,m=a*u-r*f,h=r*d-i*u,g=o*2;return u*=g,d*=g,f*=g,p*=2,m*=2,h*=2,e[0]=s+u+p,e[1]=c+d+m,e[2]=l+f+h,e}function Za(e,t,n,r){let i=[],a=[];return i[0]=t[0]-n[0],i[1]=t[1]-n[1],i[2]=t[2]-n[2],a[0]=i[0],a[1]=i[1]*Math.cos(r)-i[2]*Math.sin(r),a[2]=i[1]*Math.sin(r)+i[2]*Math.cos(r),e[0]=a[0]+n[0],e[1]=a[1]+n[1],e[2]=a[2]+n[2],e}function Qa(e,t,n,r){let i=[],a=[];return i[0]=t[0]-n[0],i[1]=t[1]-n[1],i[2]=t[2]-n[2],a[0]=i[2]*Math.sin(r)+i[0]*Math.cos(r),a[1]=i[1],a[2]=i[2]*Math.cos(r)-i[0]*Math.sin(r),e[0]=a[0]+n[0],e[1]=a[1]+n[1],e[2]=a[2]+n[2],e}function $a(e,t,n,r){let i=[],a=[];return i[0]=t[0]-n[0],i[1]=t[1]-n[1],i[2]=t[2]-n[2],a[0]=i[0]*Math.cos(r)-i[1]*Math.sin(r),a[1]=i[0]*Math.sin(r)+i[1]*Math.cos(r),a[2]=i[2],e[0]=a[0]+n[0],e[1]=a[1]+n[1],e[2]=a[2]+n[2],e}function eo(e,t){let n=e[0],r=e[1],i=e[2],a=t[0],o=t[1],s=t[2],c=Math.sqrt((n*n+r*r+i*i)*(a*a+o*o+s*s)),l=c&&Ka(e,t)/c;return Math.acos(Math.min(Math.max(l,-1),1))}var to=Wa;(function(){let e=Ua();return function(t,n,r,i,a,o){let s,c;for(n||=3,r||=0,c=i?Math.min(i*n+r,t.length):t.length,s=r;s<c;s+=n)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2];return t}})();var no=[0,0,0],ro,io=class e extends ka{static get ZERO(){return ro||(ro=new e(0,0,0),Object.freeze(ro)),ro}constructor(e=0,t=0,n=0){super(-0,-0,-0),arguments.length===1&&_a(e)?this.copy(e):(ha.debug&&(Ea(e),Ea(t),Ea(n)),this[0]=e,this[1]=t,this[2]=n)}set(e,t,n){return this[0]=e,this[1]=t,this[2]=n,this.check()}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this.check()}fromObject(e){return ha.debug&&(Ea(e.x),Ea(e.y),Ea(e.z)),this[0]=e.x,this[1]=e.y,this[2]=e.z,this.check()}toObject(e){return e.x=this[0],e.y=this[1],e.z=this[2],e}get ELEMENTS(){return 3}get z(){return this[2]}set z(e){this[2]=Ea(e)}angle(e){return eo(this,e)}cross(e){return qa(this,this,e),this.check()}rotateX({radians:e,origin:t=no}){return Za(this,this,t,e),this.check()}rotateY({radians:e,origin:t=no}){return Qa(this,this,t,e),this.check()}rotateZ({radians:e,origin:t=no}){return $a(this,this,t,e),this.check()}transform(e){return this.transformAsPoint(e)}transformAsPoint(e){return Ja(this,this,e),this.check()}transformAsVector(e){return Va(this,this,e),this.check()}transformByMatrix3(e){return Ya(this,this,e),this.check()}transformByMatrix2(e){return Ha(this,this,e),this.check()}transformByQuaternion(e){return Xa(this,this,e),this.check()}},ao=class extends wa{toString(){let e=`[`;if(ha.printRowMajor){e+=`row-major:`;for(let t=0;t<this.RANK;++t)for(let n=0;n<this.RANK;++n)e+=` ${this[n*this.RANK+t]}`}else{e+=`column-major:`;for(let t=0;t<this.ELEMENTS;++t)e+=` ${this[t]}`}return e+=`]`,e}getElementIndex(e,t){return t*this.RANK+e}getElement(e,t){return this[t*this.RANK+e]}setElement(e,t,n){return this[t*this.RANK+e]=Ea(n),this}getColumn(e,t=Array(this.RANK).fill(-0)){let n=e*this.RANK;for(let e=0;e<this.RANK;++e)t[e]=this[n+e];return t}setColumn(e,t){let n=e*this.RANK;for(let e=0;e<this.RANK;++e)this[n+e]=t[e];return this}};function oo(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function so(e,t){if(e===t){let n=t[1],r=t[2],i=t[3],a=t[6],o=t[7],s=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=n,e[6]=t[9],e[7]=t[13],e[8]=r,e[9]=a,e[11]=t[14],e[12]=i,e[13]=o,e[14]=s}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}function co(e,t){let n=t[0],r=t[1],i=t[2],a=t[3],o=t[4],s=t[5],c=t[6],l=t[7],u=t[8],d=t[9],f=t[10],p=t[11],m=t[12],h=t[13],g=t[14],_=t[15],v=n*s-r*o,y=n*c-i*o,b=n*l-a*o,x=r*c-i*s,S=r*l-a*s,C=i*l-a*c,w=u*h-d*m,T=u*g-f*m,E=u*_-p*m,D=d*g-f*h,O=d*_-p*h,k=f*_-p*g,A=v*k-y*O+b*D+x*E-S*T+C*w;return A?(A=1/A,e[0]=(s*k-c*O+l*D)*A,e[1]=(i*O-r*k-a*D)*A,e[2]=(h*C-g*S+_*x)*A,e[3]=(f*S-d*C-p*x)*A,e[4]=(c*E-o*k-l*T)*A,e[5]=(n*k-i*E+a*T)*A,e[6]=(g*b-m*C-_*y)*A,e[7]=(u*C-f*b+p*y)*A,e[8]=(o*O-s*E+l*w)*A,e[9]=(r*E-n*O-a*w)*A,e[10]=(m*S-h*b+_*v)*A,e[11]=(d*b-u*S-p*v)*A,e[12]=(s*T-o*D-c*w)*A,e[13]=(n*D-r*T+i*w)*A,e[14]=(h*y-m*x-g*v)*A,e[15]=(u*x-d*y+f*v)*A,e):null}function lo(e){let t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=n*s-r*o,b=l*m-u*p,x=l*h-d*p,S=u*h-d*m,C=t*S-n*x+r*b,w=a*S-o*x+s*b,T=l*y-u*v+d*_,E=p*y-m*v+h*_;return c*C-i*w+g*T-f*E}function uo(e,t,n){let r=t[0],i=t[1],a=t[2],o=t[3],s=t[4],c=t[5],l=t[6],u=t[7],d=t[8],f=t[9],p=t[10],m=t[11],h=t[12],g=t[13],_=t[14],v=t[15],y=n[0],b=n[1],x=n[2],S=n[3];return e[0]=y*r+b*s+x*d+S*h,e[1]=y*i+b*c+x*f+S*g,e[2]=y*a+b*l+x*p+S*_,e[3]=y*o+b*u+x*m+S*v,y=n[4],b=n[5],x=n[6],S=n[7],e[4]=y*r+b*s+x*d+S*h,e[5]=y*i+b*c+x*f+S*g,e[6]=y*a+b*l+x*p+S*_,e[7]=y*o+b*u+x*m+S*v,y=n[8],b=n[9],x=n[10],S=n[11],e[8]=y*r+b*s+x*d+S*h,e[9]=y*i+b*c+x*f+S*g,e[10]=y*a+b*l+x*p+S*_,e[11]=y*o+b*u+x*m+S*v,y=n[12],b=n[13],x=n[14],S=n[15],e[12]=y*r+b*s+x*d+S*h,e[13]=y*i+b*c+x*f+S*g,e[14]=y*a+b*l+x*p+S*_,e[15]=y*o+b*u+x*m+S*v,e}function fo(e,t,n){let r=n[0],i=n[1],a=n[2],o,s,c,l,u,d,f,p,m,h,g,_;return t===e?(e[12]=t[0]*r+t[4]*i+t[8]*a+t[12],e[13]=t[1]*r+t[5]*i+t[9]*a+t[13],e[14]=t[2]*r+t[6]*i+t[10]*a+t[14],e[15]=t[3]*r+t[7]*i+t[11]*a+t[15]):(o=t[0],s=t[1],c=t[2],l=t[3],u=t[4],d=t[5],f=t[6],p=t[7],m=t[8],h=t[9],g=t[10],_=t[11],e[0]=o,e[1]=s,e[2]=c,e[3]=l,e[4]=u,e[5]=d,e[6]=f,e[7]=p,e[8]=m,e[9]=h,e[10]=g,e[11]=_,e[12]=o*r+u*i+m*a+t[12],e[13]=s*r+d*i+h*a+t[13],e[14]=c*r+f*i+g*a+t[14],e[15]=l*r+p*i+_*a+t[15]),e}function po(e,t,n){let r=n[0],i=n[1],a=n[2];return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*i,e[5]=t[5]*i,e[6]=t[6]*i,e[7]=t[7]*i,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function mo(e,t,n,r){let i=r[0],a=r[1],o=r[2],s=Math.sqrt(i*i+a*a+o*o),c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;return s<1e-6?null:(s=1/s,i*=s,a*=s,o*=s,l=Math.sin(n),c=Math.cos(n),u=1-c,d=t[0],f=t[1],p=t[2],m=t[3],h=t[4],g=t[5],_=t[6],v=t[7],y=t[8],b=t[9],x=t[10],S=t[11],C=i*i*u+c,w=a*i*u+o*l,T=o*i*u-a*l,E=i*a*u-o*l,D=a*a*u+c,O=o*a*u+i*l,k=i*o*u+a*l,A=a*o*u-i*l,j=o*o*u+c,e[0]=d*C+h*w+y*T,e[1]=f*C+g*w+b*T,e[2]=p*C+_*w+x*T,e[3]=m*C+v*w+S*T,e[4]=d*E+h*D+y*O,e[5]=f*E+g*D+b*O,e[6]=p*E+_*D+x*O,e[7]=m*E+v*D+S*O,e[8]=d*k+h*A+y*j,e[9]=f*k+g*A+b*j,e[10]=p*k+_*A+x*j,e[11]=m*k+v*A+S*j,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}function ho(e,t,n){let r=Math.sin(n),i=Math.cos(n),a=t[4],o=t[5],s=t[6],c=t[7],l=t[8],u=t[9],d=t[10],f=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*i+l*r,e[5]=o*i+u*r,e[6]=s*i+d*r,e[7]=c*i+f*r,e[8]=l*i-a*r,e[9]=u*i-o*r,e[10]=d*i-s*r,e[11]=f*i-c*r,e}function go(e,t,n){let r=Math.sin(n),i=Math.cos(n),a=t[0],o=t[1],s=t[2],c=t[3],l=t[8],u=t[9],d=t[10],f=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*i-l*r,e[1]=o*i-u*r,e[2]=s*i-d*r,e[3]=c*i-f*r,e[8]=a*r+l*i,e[9]=o*r+u*i,e[10]=s*r+d*i,e[11]=c*r+f*i,e}function _o(e,t,n){let r=Math.sin(n),i=Math.cos(n),a=t[0],o=t[1],s=t[2],c=t[3],l=t[4],u=t[5],d=t[6],f=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*i+l*r,e[1]=o*i+u*r,e[2]=s*i+d*r,e[3]=c*i+f*r,e[4]=l*i-a*r,e[5]=u*i-o*r,e[6]=d*i-s*r,e[7]=f*i-c*r,e}function vo(e,t){let n=t[0],r=t[1],i=t[2],a=t[3],o=n+n,s=r+r,c=i+i,l=n*o,u=r*o,d=r*s,f=i*o,p=i*s,m=i*c,h=a*o,g=a*s,_=a*c;return e[0]=1-d-m,e[1]=u+_,e[2]=f-g,e[3]=0,e[4]=u-_,e[5]=1-l-m,e[6]=p+h,e[7]=0,e[8]=f+g,e[9]=p-h,e[10]=1-l-d,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function yo(e,t,n,r,i,a,o){let s=1/(n-t),c=1/(i-r),l=1/(a-o);return e[0]=a*2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a*2*c,e[6]=0,e[7]=0,e[8]=(n+t)*s,e[9]=(i+r)*c,e[10]=(o+a)*l,e[11]=-1,e[12]=0,e[13]=0,e[14]=o*a*2*l,e[15]=0,e}function bo(e,t,n,r,i){let a=1/Math.tan(t/2);if(e[0]=a/n,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,i!=null&&i!==1/0){let t=1/(r-i);e[10]=(i+r)*t,e[14]=2*i*r*t}else e[10]=-1,e[14]=-2*r;return e}var xo=bo;function So(e,t,n,r,i,a,o){let s=1/(t-n),c=1/(r-i),l=1/(a-o);return e[0]=-2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*c,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*l,e[11]=0,e[12]=(t+n)*s,e[13]=(i+r)*c,e[14]=(o+a)*l,e[15]=1,e}var Co=So;function wo(e,t,n,r){let i,a,o,s,c,l,u,d,f,p,m=t[0],h=t[1],g=t[2],_=r[0],v=r[1],y=r[2],b=n[0],x=n[1],S=n[2];return Math.abs(m-b)<1e-6&&Math.abs(h-x)<1e-6&&Math.abs(g-S)<1e-6?oo(e):(d=m-b,f=h-x,p=g-S,i=1/Math.sqrt(d*d+f*f+p*p),d*=i,f*=i,p*=i,a=v*p-y*f,o=y*d-_*p,s=_*f-v*d,i=Math.sqrt(a*a+o*o+s*s),i?(i=1/i,a*=i,o*=i,s*=i):(a=0,o=0,s=0),c=f*s-p*o,l=p*a-d*s,u=d*o-f*a,i=Math.sqrt(c*c+l*l+u*u),i?(i=1/i,c*=i,l*=i,u*=i):(c=0,l=0,u=0),e[0]=a,e[1]=c,e[2]=d,e[3]=0,e[4]=o,e[5]=l,e[6]=f,e[7]=0,e[8]=s,e[9]=u,e[10]=p,e[11]=0,e[12]=-(a*m+o*h+s*g),e[13]=-(c*m+l*h+u*g),e[14]=-(d*m+f*h+p*g),e[15]=1,e)}function To(){let e=new Aa(4);return Aa!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0,e[3]=0),e}function Eo(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e}function Do(e,t,n){let r=t[0],i=t[1],a=t[2],o=t[3];return e[0]=n[0]*r+n[4]*i+n[8]*a+n[12]*o,e[1]=n[1]*r+n[5]*i+n[9]*a+n[13]*o,e[2]=n[2]*r+n[6]*i+n[10]*a+n[14]*o,e[3]=n[3]*r+n[7]*i+n[11]*a+n[15]*o,e}(function(){let e=To();return function(t,n,r,i,a,o){let s,c;for(n||=4,r||=0,c=i?Math.min(i*n+r,t.length):t.length,s=r;s<c;s+=n)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],e[3]=t[s+3],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2],t[s+3]=e[3];return t}})();var Oo;(function(e){e[e.COL0ROW0=0]=`COL0ROW0`,e[e.COL0ROW1=1]=`COL0ROW1`,e[e.COL0ROW2=2]=`COL0ROW2`,e[e.COL0ROW3=3]=`COL0ROW3`,e[e.COL1ROW0=4]=`COL1ROW0`,e[e.COL1ROW1=5]=`COL1ROW1`,e[e.COL1ROW2=6]=`COL1ROW2`,e[e.COL1ROW3=7]=`COL1ROW3`,e[e.COL2ROW0=8]=`COL2ROW0`,e[e.COL2ROW1=9]=`COL2ROW1`,e[e.COL2ROW2=10]=`COL2ROW2`,e[e.COL2ROW3=11]=`COL2ROW3`,e[e.COL3ROW0=12]=`COL3ROW0`,e[e.COL3ROW1=13]=`COL3ROW1`,e[e.COL3ROW2=14]=`COL3ROW2`,e[e.COL3ROW3=15]=`COL3ROW3`})(Oo||={});var ko=45*Math.PI/180,Ao=1,jo=.1,Mo=500,No=Object.freeze([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),Po=class extends ao{static get IDENTITY(){return Ro()}static get ZERO(){return Lo()}get ELEMENTS(){return 16}get RANK(){return 4}get INDICES(){return Oo}constructor(e){super(-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0),arguments.length===1&&Array.isArray(e)?this.copy(e):this.identity()}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this[3]=e[3],this[4]=e[4],this[5]=e[5],this[6]=e[6],this[7]=e[7],this[8]=e[8],this[9]=e[9],this[10]=e[10],this[11]=e[11],this[12]=e[12],this[13]=e[13],this[14]=e[14],this[15]=e[15],this.check()}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){return this[0]=e,this[1]=t,this[2]=n,this[3]=r,this[4]=i,this[5]=a,this[6]=o,this[7]=s,this[8]=c,this[9]=l,this[10]=u,this[11]=d,this[12]=f,this[13]=p,this[14]=m,this[15]=h,this.check()}setRowMajor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){return this[0]=e,this[1]=i,this[2]=c,this[3]=f,this[4]=t,this[5]=a,this[6]=l,this[7]=p,this[8]=n,this[9]=o,this[10]=u,this[11]=m,this[12]=r,this[13]=s,this[14]=d,this[15]=h,this.check()}toRowMajor(e){return e[0]=this[0],e[1]=this[4],e[2]=this[8],e[3]=this[12],e[4]=this[1],e[5]=this[5],e[6]=this[9],e[7]=this[13],e[8]=this[2],e[9]=this[6],e[10]=this[10],e[11]=this[14],e[12]=this[3],e[13]=this[7],e[14]=this[11],e[15]=this[15],e}identity(){return this.copy(No)}fromObject(e){return this.check()}fromQuaternion(e){return vo(this,e),this.check()}frustum(e){let{left:t,right:n,bottom:r,top:i,near:a=jo,far:o=Mo}=e;return o===1/0?Bo(this,t,n,r,i,a):yo(this,t,n,r,i,a,o),this.check()}lookAt(e){let{eye:t,center:n=[0,0,0],up:r=[0,1,0]}=e;return wo(this,t,n,r),this.check()}ortho(e){let{left:t,right:n,bottom:r,top:i,near:a=jo,far:o=Mo}=e;return Co(this,t,n,r,i,a,o),this.check()}orthographic(e){let{fovy:t=ko,aspect:n=Ao,focalDistance:r=1,near:i=jo,far:a=Mo}=e;zo(t);let o=t/2,s=r*Math.tan(o),c=s*n;return this.ortho({left:-c,right:c,bottom:-s,top:s,near:i,far:a})}perspective(e){let{fovy:t=45*Math.PI/180,aspect:n=1,near:r=.1,far:i=500}=e;return zo(t),xo(this,t,n,r,i),this.check()}determinant(){return lo(this)}getScale(e=[-0,-0,-0]){return e[0]=Math.sqrt(this[0]*this[0]+this[1]*this[1]+this[2]*this[2]),e[1]=Math.sqrt(this[4]*this[4]+this[5]*this[5]+this[6]*this[6]),e[2]=Math.sqrt(this[8]*this[8]+this[9]*this[9]+this[10]*this[10]),e}getTranslation(e=[-0,-0,-0]){return e[0]=this[12],e[1]=this[13],e[2]=this[14],e}getRotation(e,t){e||=[-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0],t||=[-0,-0,-0];let n=this.getScale(t),r=1/n[0],i=1/n[1],a=1/n[2];return e[0]=this[0]*r,e[1]=this[1]*i,e[2]=this[2]*a,e[3]=0,e[4]=this[4]*r,e[5]=this[5]*i,e[6]=this[6]*a,e[7]=0,e[8]=this[8]*r,e[9]=this[9]*i,e[10]=this[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}getRotationMatrix3(e,t){e||=[-0,-0,-0,-0,-0,-0,-0,-0,-0],t||=[-0,-0,-0];let n=this.getScale(t),r=1/n[0],i=1/n[1],a=1/n[2];return e[0]=this[0]*r,e[1]=this[1]*i,e[2]=this[2]*a,e[3]=this[4]*r,e[4]=this[5]*i,e[5]=this[6]*a,e[6]=this[8]*r,e[7]=this[9]*i,e[8]=this[10]*a,e}transpose(){return so(this,this),this.check()}invert(){return co(this,this),this.check()}multiplyLeft(e){return uo(this,e,this),this.check()}multiplyRight(e){return uo(this,this,e),this.check()}rotateX(e){return ho(this,this,e),this.check()}rotateY(e){return go(this,this,e),this.check()}rotateZ(e){return _o(this,this,e),this.check()}rotateXYZ(e){return this.rotateX(e[0]).rotateY(e[1]).rotateZ(e[2])}rotateAxis(e,t){return mo(this,this,e,t),this.check()}scale(e){return po(this,this,Array.isArray(e)?e:[e,e,e]),this.check()}translate(e){return fo(this,this,e),this.check()}transform(e,t){return e.length===4?(t=Do(t||[-0,-0,-0,-0],e,this),Da(t,4),t):this.transformAsPoint(e,t)}transformAsPoint(e,t){let{length:n}=e,r;switch(n){case 2:r=Ra(t||[-0,-0],e,this);break;case 3:r=Ja(t||[-0,-0,-0],e,this);break;default:throw Error(`Illegal vector`)}return Da(r,e.length),r}transformAsVector(e,t){let n;switch(e.length){case 2:n=Ba(t||[-0,-0],e,this);break;case 3:n=Va(t||[-0,-0,-0],e,this);break;default:throw Error(`Illegal vector`)}return Da(n,e.length),n}transformPoint(e,t){return this.transformAsPoint(e,t)}transformVector(e,t){return this.transformAsPoint(e,t)}transformDirection(e,t){return this.transformAsVector(e,t)}makeRotationX(e){return this.identity().rotateX(e)}makeTranslation(e,t,n){return this.identity().translate([e,t,n])}},Fo,Io;function Lo(){return Fo||(Fo=new Po([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),Object.freeze(Fo)),Fo}function Ro(){return Io||(Io=new Po,Object.freeze(Io)),Io}function zo(e){if(e>Math.PI*2)throw Error(`expected radians`)}function Bo(e,t,n,r,i,a){let o=2*a/(n-t),s=2*a/(i-r),c=(n+t)/(n-t),l=(i+r)/(i-r),u=-2*a;return e[0]=o,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=s,e[6]=0,e[7]=0,e[8]=c,e[9]=l,e[10]=-1,e[11]=-1,e[12]=0,e[13]=0,e[14]=u,e[15]=0,e}function Vo(e,t=[],n=0){let r=Math.fround(e),i=e-r;return t[n]=r,t[n+1]=i,t}function Ho(e){return e-Math.fround(e)}function Uo(e){let t=new Float32Array(32);for(let n=0;n<4;++n)for(let r=0;r<4;++r){let i=n*4+r;Vo(e[r*4+n],t,i*2)}return t}function Wo(e,t=!0){return e??t}function Go(e=[0,0,0],t=!0){return t?e.map(e=>e/255):[...e]}function Ko(e,t=!0){let n=Go(e.slice(0,3),t),r=Number.isFinite(e[3]),i=r?e[3]:1;return[n[0],n[1],n[2],t&&r?i/255:i]}var qo=`
layout(std140) uniform fp64arithmeticUniforms {
  uniform float ONE;
  uniform float SPLIT;
} fp64;

/*
About LUMA_FP64_CODE_ELIMINATION_WORKAROUND

The purpose of this workaround is to prevent shader compilers from
optimizing away necessary arithmetic operations by swapping their sequences
or transform the equation to some 'equivalent' form.

These helpers implement Dekker/Veltkamp-style error tracking. If the compiler
folds constants or reassociates the arithmetic, the high/low split can stop
tracking the rounding error correctly. That failure mode tends to look fine in
simple coordinate setup, but then breaks down inside iterative arithmetic such
as fp64 Mandelbrot loops.

The method is to multiply an artifical variable, ONE, which will be known to
the compiler to be 1 only at runtime. The whole expression is then represented
as a polynomial with respective to ONE. In the coefficients of all terms, only one a
and one b should appear

err = (a + b) * ONE^6 - a * ONE^5 - (a + b) * ONE^4 + a * ONE^3 - b - (a + b) * ONE^2 + a * ONE
*/

float prevent_fp64_optimization(float value) {
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  return value + fp64.ONE * 0.0;
#else
  return value;
#endif
}

// Divide float number to high and low floats to extend fraction bits
vec2 split(float a) {
  // Keep SPLIT as a runtime uniform so the compiler cannot fold the Dekker
  // split into a constant expression and reassociate the recovery steps.
  float split = prevent_fp64_optimization(fp64.SPLIT);
  float t = prevent_fp64_optimization(a * split);
  float temp = t - a;
  float a_hi = t - temp;
  float a_lo = a - a_hi;
  return vec2(a_hi, a_lo);
}

// Divide float number again when high float uses too many fraction bits
vec2 split2(vec2 a) {
  vec2 b = split(a.x);
  b.y += a.y;
  return b;
}

// Special sum operation when a > b
vec2 quickTwoSum(float a, float b) {
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float sum = (a + b) * fp64.ONE;
  float err = b - (sum - a) * fp64.ONE;
#else
  float sum = a + b;
  float err = b - (sum - a);
#endif
  return vec2(sum, err);
}

// General sum operation
vec2 twoSum(float a, float b) {
  float s = (a + b);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float v = (s * fp64.ONE - a) * fp64.ONE;
  float err = (a - (s - v) * fp64.ONE) * fp64.ONE * fp64.ONE * fp64.ONE + (b - v);
#else
  float v = s - a;
  float err = (a - (s - v)) + (b - v);
#endif
  return vec2(s, err);
}

vec2 twoSub(float a, float b) {
  float s = (a - b);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float v = (s * fp64.ONE - a) * fp64.ONE;
  float err = (a - (s - v) * fp64.ONE) * fp64.ONE * fp64.ONE * fp64.ONE - (b + v);
#else
  float v = s - a;
  float err = (a - (s - v)) - (b + v);
#endif
  return vec2(s, err);
}

vec2 twoSqr(float a) {
  float prod = a * a;
  vec2 a_fp64 = split(a);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float err = ((a_fp64.x * a_fp64.x - prod) * fp64.ONE + 2.0 * a_fp64.x *
    a_fp64.y * fp64.ONE * fp64.ONE) + a_fp64.y * a_fp64.y * fp64.ONE * fp64.ONE * fp64.ONE;
#else
  float err = ((a_fp64.x * a_fp64.x - prod) + 2.0 * a_fp64.x * a_fp64.y) + a_fp64.y * a_fp64.y;
#endif
  return vec2(prod, err);
}

vec2 twoProd(float a, float b) {
  float prod = a * b;
  vec2 a_fp64 = split(a);
  vec2 b_fp64 = split(b);
  // twoProd is especially sensitive because mul_fp64 and div_fp64 both depend
  // on the split terms and cross terms staying in the original evaluation
  // order. If the compiler folds or reassociates them, the low part tends to
  // collapse to zero or NaN on some drivers.
  float highProduct = prevent_fp64_optimization(a_fp64.x * b_fp64.x);
  float crossProduct1 = prevent_fp64_optimization(a_fp64.x * b_fp64.y);
  float crossProduct2 = prevent_fp64_optimization(a_fp64.y * b_fp64.x);
  float lowProduct = prevent_fp64_optimization(a_fp64.y * b_fp64.y);
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  float err1 = (highProduct - prod) * fp64.ONE;
  float err2 = crossProduct1 * fp64.ONE * fp64.ONE;
  float err3 = crossProduct2 * fp64.ONE * fp64.ONE * fp64.ONE;
  float err4 = lowProduct * fp64.ONE * fp64.ONE * fp64.ONE * fp64.ONE;
#else
  float err1 = highProduct - prod;
  float err2 = crossProduct1;
  float err3 = crossProduct2;
  float err4 = lowProduct;
#endif
  float err = ((err1 + err2) + err3) + err4;
  return vec2(prod, err);
}

vec2 sum_fp64(vec2 a, vec2 b) {
  vec2 s, t;
  s = twoSum(a.x, b.x);
  t = twoSum(a.y, b.y);
  s.y += t.x;
  s = quickTwoSum(s.x, s.y);
  s.y += t.y;
  s = quickTwoSum(s.x, s.y);
  return s;
}

vec2 sub_fp64(vec2 a, vec2 b) {
  vec2 s, t;
  s = twoSub(a.x, b.x);
  t = twoSub(a.y, b.y);
  s.y += t.x;
  s = quickTwoSum(s.x, s.y);
  s.y += t.y;
  s = quickTwoSum(s.x, s.y);
  return s;
}

vec2 mul_fp64(vec2 a, vec2 b) {
  vec2 prod = twoProd(a.x, b.x);
  // y component is for the error
  prod.y += a.x * b.y;
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  prod.y += a.y * b.x;
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  return prod;
}

vec2 div_fp64(vec2 a, vec2 b) {
  float xn = 1.0 / b.x;
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  vec2 yn = mul_fp64(a, vec2(xn, 0));
#else
  vec2 yn = a * xn;
#endif
  float diff = (sub_fp64(a, mul_fp64(b, yn))).x;
  vec2 prod = twoProd(xn, diff);
  return sum_fp64(yn, prod);
}

vec2 sqrt_fp64(vec2 a) {
  if (a.x == 0.0 && a.y == 0.0) return vec2(0.0, 0.0);
  if (a.x < 0.0) return vec2(0.0 / 0.0, 0.0 / 0.0);

  float x = 1.0 / sqrt(a.x);
  float yn = a.x * x;
#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)
  vec2 yn_sqr = twoSqr(yn) * fp64.ONE;
#else
  vec2 yn_sqr = twoSqr(yn);
#endif
  float diff = sub_fp64(a, yn_sqr).x;
  vec2 prod = twoProd(x * 0.5, diff);
#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)
  return sum_fp64(split(yn), prod);
#else
  return sum_fp64(vec2(yn, 0.0), prod);
#endif
}
`,Jo={name:`fp64arithmetic`,source:`struct Fp64ArithmeticUniforms {
  ONE: f32,
  SPLIT: f32,
};

@group(0) @binding(auto) var<uniform> fp64arithmetic : Fp64ArithmeticUniforms;

#ifndef LUMA_FP64_F32_INPUT_ONLY
struct Fp64Bits {
  sign: u32,
  exponent: i32,
  significand: vec2u,
  isZero: bool,
  isInf: bool,
  isNan: bool,
};
#endif

#ifndef LUMA_FP64_PREDICATE_ONLY
fn fp64_nan(seed: f32) -> f32 {
  let nanBits = 0x7fc00000u | select(0u, 1u, seed < 0.0);
  return bitcast<f32>(nanBits);
}
#endif

fn fp64_u64_is_zero(value: vec2u) -> bool {
  return value.x == 0u && value.y == 0u;
}

fn fp64_u64_compare(a: vec2u, b: vec2u) -> i32 {
  if (a.x != b.x) {
    return select(-1, 1, a.x > b.x);
  }
  if (a.y != b.y) {
    return select(-1, 1, a.y > b.y);
  }
  return 0;
}

fn fp64_u64_add(a: vec2u, b: vec2u) -> vec2u {
  let low = a.y + b.y;
  let carry = select(0u, 1u, low < a.y);
  return vec2u(a.x + b.x + carry, low);
}

fn fp64_u64_sub(a: vec2u, b: vec2u) -> vec2u {
  let borrow = select(0u, 1u, a.y < b.y);
  return vec2u(a.x - b.x - borrow, a.y - b.y);
}

fn fp64_u64_shift_left(value: vec2u, shift: u32) -> vec2u {
  if (shift == 0u) {
    return value;
  }
  if (shift < 32u) {
    return vec2u((value.x << shift) | (value.y >> (32u - shift)), value.y << shift);
  }
  if (shift == 32u) {
    return vec2u(value.y, 0u);
  }
  if (shift < 64u) {
    return vec2u(value.y << (shift - 32u), 0u);
  }
  return vec2u(0u);
}

fn fp64_u64_shift_right(value: vec2u, shift: u32) -> vec2u {
  if (shift == 0u) {
    return value;
  }
  if (shift < 32u) {
    return vec2u(value.x >> shift, (value.y >> shift) | (value.x << (32u - shift)));
  }
  if (shift == 32u) {
    return vec2u(0u, value.x);
  }
  if (shift < 64u) {
    return vec2u(0u, value.x >> (shift - 32u));
  }
  return vec2u(0u);
}

fn fp64_u64_get_bit(value: vec2u, bitIndex: u32) -> bool {
  if (bitIndex >= 64u) {
    return false;
  }
  if (bitIndex >= 32u) {
    return ((value.x >> (bitIndex - 32u)) & 1u) != 0u;
  }
  return ((value.y >> bitIndex) & 1u) != 0u;
}

fn fp64_u64_has_bits_below(value: vec2u, bitCount: u32) -> bool {
  if (bitCount == 0u) {
    return false;
  }
  if (bitCount >= 64u) {
    return !fp64_u64_is_zero(value);
  }
  if (bitCount > 32u) {
    let highBitCount = bitCount - 32u;
    let highMask = (1u << highBitCount) - 1u;
    return value.y != 0u || (value.x & highMask) != 0u;
  }
  if (bitCount == 32u) {
    return value.y != 0u;
  }
  let lowMask = (1u << bitCount) - 1u;
  return (value.y & lowMask) != 0u;
}

#ifndef LUMA_FP64_F32_INPUT_ONLY
fn fp64_u64_shift_right_sticky(value: vec2u, shift: u32) -> vec2u {
  var shifted = fp64_u64_shift_right(value, shift);
  if (fp64_u64_has_bits_below(value, shift)) {
    shifted.y = shifted.y | 1u;
  }
  return shifted;
}
#endif

fn fp64_u64_count_leading_zeros(value: vec2u) -> u32 {
  if (value.x != 0u) {
    return countLeadingZeros(value.x);
  }
  return 32u + countLeadingZeros(value.y);
}

fn fp64_round_shift_right_to_u32(value: vec2u, shift: u32) -> u32 {
  if (shift == 0u) {
    return value.y;
  }

  let truncated = fp64_u64_shift_right(value, shift);
  var rounded = truncated.y;
  let guard = fp64_u64_get_bit(value, shift - 1u);
  let hasTrailingBits = fp64_u64_has_bits_below(value, shift - 1u);
  if (guard && (hasTrailingBits || (rounded & 1u) == 1u)) {
    rounded = rounded + 1u;
  }
  return rounded;
}

#ifndef LUMA_FP64_F32_INPUT_ONLY
fn fp64_round_shift_right(value: vec2u, shift: u32) -> vec2u {
  if (shift == 0u) {
    return value;
  }

  var rounded = fp64_u64_shift_right(value, shift);
  let guard = fp64_u64_get_bit(value, shift - 1u);
  let hasTrailingBits = fp64_u64_has_bits_below(value, shift - 1u);
  if (guard && (hasTrailingBits || (rounded.y & 1u) == 1u)) {
    rounded = fp64_u64_add(rounded, vec2u(0u, 1u));
  }
  return rounded;
}
#endif

fn fp64_make_f32_bits_from_u64(sign: u32, significand: vec2u, baseExponent: i32) -> u32 {
  if (fp64_u64_is_zero(significand)) {
    return sign << 31u;
  }

  let leadingZeros = fp64_u64_count_leading_zeros(significand);
  let mostSignificantBit = 63u - leadingZeros;
  var exponent = baseExponent + i32(mostSignificantBit);

  if (exponent > 127) {
    return (sign << 31u) | 0x7f800000u;
  }

  if (exponent >= -126) {
    let shift = i32(mostSignificantBit) - 23;
    var significand24: u32;
    if (shift > 0) {
      significand24 = fp64_round_shift_right_to_u32(significand, u32(shift));
    } else {
      significand24 = fp64_u64_shift_left(significand, u32(-shift)).y;
    }

    if (significand24 >= 0x1000000u) {
      significand24 = significand24 >> 1u;
      exponent = exponent + 1;
      if (exponent > 127) {
        return (sign << 31u) | 0x7f800000u;
      }
    }

    return (sign << 31u) | (u32(exponent + 127) << 23u) | (significand24 & 0x7fffffu);
  }

  let scaleExponent = baseExponent + 149;
  var mantissa: u32;
  if (scaleExponent >= 0) {
    mantissa = fp64_u64_shift_left(significand, u32(scaleExponent)).y;
  } else {
    mantissa = fp64_round_shift_right_to_u32(significand, u32(-scaleExponent));
  }

  if (mantissa >= 0x800000u) {
    return (sign << 31u) | 0x00800000u;
  }
  return (sign << 31u) | mantissa;
}

#ifndef LUMA_FP64_F32_INPUT_ONLY
fn fp64_decode_bits(bits: vec2u) -> Fp64Bits {
  let sign = bits.x >> 31u;
  let exponentBits = (bits.x >> 20u) & 0x7ffu;
  let fractionHigh = bits.x & 0xfffffu;
  let fractionLow = bits.y;
  let fraction = vec2u(fractionHigh, fractionLow);

  if (exponentBits == 0x7ffu) {
    let isInf = fp64_u64_is_zero(fraction);
    return Fp64Bits(sign, 0, vec2u(0u), false, isInf, !isInf);
  }

  if (exponentBits == 0u) {
    let isZero = fp64_u64_is_zero(fraction);
    return Fp64Bits(sign, -1022, fraction, isZero, false, false);
  }

  return Fp64Bits(sign, i32(exponentBits) - 1023, vec2u((1u << 20u) | fractionHigh, fractionLow), false, false, false);
}

fn fp64_finite_magnitude_compare(a: Fp64Bits, b: Fp64Bits) -> i32 {
  if (a.exponent != b.exponent) {
    return select(-1, 1, a.exponent > b.exponent);
  }
  return fp64_u64_compare(a.significand, b.significand);
}
#endif

#ifndef LUMA_FP64_F32_INPUT_ONLY
struct Fp64RawF32Bits {
  sign: u32,
  baseExponent: i32,
  significand: u32,
  isZero: bool,
  isInf: bool,
  isNan: bool,
};

// Decode an f32 as (-1)^sign * significand * 2^baseExponent. This shared
// integer representation lets normalization remain independent of the
// selected double-single arithmetic implementation.
fn fp64_decode_raw_f32_bits(bits: u32) -> Fp64RawF32Bits {
  let sign = bits >> 31u;
  let exponentBits = (bits >> 23u) & 0xffu;
  let fraction = bits & 0x7fffffu;

  if (exponentBits == 0xffu) {
    return Fp64RawF32Bits(sign, 0, 0u, false, fraction == 0u, fraction != 0u);
  }
  if (exponentBits == 0u) {
    return Fp64RawF32Bits(sign, -149, fraction, fraction == 0u, false, false);
  }
  return Fp64RawF32Bits(
    sign,
    i32(exponentBits) - 150,
    0x800000u | fraction,
    false,
    false,
    false
  );
}

fn fp64_raw_f32_magnitude_compare(aBits: u32, bBits: u32) -> i32 {
  let aMagnitude = aBits & 0x7fffffffu;
  let bMagnitude = bBits & 0x7fffffffu;
  if (aMagnitude == bMagnitude) {
    return 0;
  }
  return select(-1, 1, aMagnitude > bMagnitude);
}

fn fp64_make_raw_residual_f32_bits(
  exactSign: u32,
  exactMagnitude: vec2u,
  exactBaseExponent: i32,
  highBits: u32
) -> u32 {
  if (fp64_u64_is_zero(exactMagnitude)) {
    return 0u;
  }

  let high = fp64_decode_raw_f32_bits(highBits);
  if (high.isInf || high.isNan) {
    return 0u;
  }
  if (high.isZero) {
    return fp64_make_f32_bits_from_u64(exactSign, exactMagnitude, exactBaseExponent);
  }

  let commonBaseExponent = min(exactBaseExponent, high.baseExponent);
  let exactShift = exactBaseExponent - commonBaseExponent;
  let highShift = high.baseExponent - commonBaseExponent;
  if (exactShift >= 64 || highShift >= 64) {
    return 0u;
  }

  let exactAligned = fp64_u64_shift_left(exactMagnitude, u32(exactShift));
  let highAligned = fp64_u64_shift_left(vec2u(0u, high.significand), u32(highShift));
  let comparison = fp64_u64_compare(exactAligned, highAligned);
  if (comparison == 0) {
    return 0u;
  }

  var residualSign = exactSign;
  var residualMagnitude: vec2u;
  if (comparison > 0) {
    residualMagnitude = fp64_u64_sub(exactAligned, highAligned);
  } else {
    residualSign = exactSign ^ 1u;
    residualMagnitude = fp64_u64_sub(highAligned, exactAligned);
  }
  return fp64_make_f32_bits_from_u64(
    residualSign,
    residualMagnitude,
    commonBaseExponent
  );
}

fn fp64_split_raw_accumulator_bits(
  sign: u32,
  magnitude: vec2u,
  baseExponent: i32
) -> vec2u {
  if (fp64_u64_is_zero(magnitude)) {
    return vec2u(0u);
  }
  let highBits = fp64_make_f32_bits_from_u64(sign, magnitude, baseExponent);
  let rawLowBits = fp64_make_raw_residual_f32_bits(sign, magnitude, baseExponent, highBits);
  let lowBits = select(rawLowBits, 0u, (rawLowBits & 0x7fffffffu) == 0u);
  if ((highBits & 0x7fffffffu) == 0u && (lowBits & 0x7fffffffu) == 0u) {
    return vec2u(0u);
  }
  return vec2u(highBits, lowBits);
}
#endif

#ifndef LUMA_FP64_F32_INPUT_ONLY
// Round an arithmetic accumulator to binary64 before splitting it. The
// aligned add/subtract paths retain three guard bits plus a sticky bit, which
// is sufficient for round-to-nearest-even at the binary64 boundary.
fn fp64_split_binary64_accumulator_bits(
  sign: u32,
  magnitude: vec2u,
  baseExponent: i32
) -> vec2u {
  if (fp64_u64_is_zero(magnitude)) {
    return vec2u(0u);
  }

  let mostSignificantBit = 63u - fp64_u64_count_leading_zeros(magnitude);
  let exponent = baseExponent + i32(mostSignificantBit);
  if (exponent > 1023) {
    return vec2u((sign << 31u) | 0x7f800000u, 0u);
  }

  var roundedMagnitude = magnitude;
  var roundedBaseExponent = baseExponent;
  if (exponent >= -1022) {
    if (mostSignificantBit > 52u) {
      let shift = mostSignificantBit - 52u;
      roundedMagnitude = fp64_round_shift_right(magnitude, shift);
      roundedBaseExponent = baseExponent + i32(shift);
    }
  } else {
    let shift = -1074 - baseExponent;
    if (shift > 0) {
      roundedMagnitude = fp64_round_shift_right(magnitude, u32(shift));
      roundedBaseExponent = -1074;
    }
  }

  if (fp64_u64_is_zero(roundedMagnitude)) {
    return vec2u(0u);
  }
  return fp64_split_raw_accumulator_bits(sign, roundedMagnitude, roundedBaseExponent);
}
#endif

#ifndef LUMA_FP64_PREDICATE_ONLY
fn fp64_add_raw_f32_bits(aBits: u32, bBits: u32) -> vec2u {
  let a = fp64_decode_raw_f32_bits(aBits);
  let b = fp64_decode_raw_f32_bits(bBits);

  if (a.isNan || b.isNan) {
    return vec2u(0x7fc00000u, 0u);
  }
  if (a.isInf || b.isInf) {
    if (a.isInf && b.isInf && a.sign != b.sign) {
      return vec2u(0x7fc00000u, 0u);
    }
    return select(vec2u(bBits, 0u), vec2u(aBits, 0u), a.isInf);
  }
  if (a.isZero && b.isZero) {
    return vec2u(0u);
  }
  if (a.isZero) {
    return vec2u(bBits, 0u);
  }
  if (b.isZero) {
    return vec2u(aBits, 0u);
  }

  let exponentDifference = abs(a.baseExponent - b.baseExponent);
  if (exponentDifference > 25) {
    if (fp64_raw_f32_magnitude_compare(aBits, bBits) >= 0) {
      return vec2u(aBits, bBits);
    }
    return vec2u(bBits, aBits);
  }

  let commonBaseExponent = min(a.baseExponent, b.baseExponent);
  let aMagnitude = fp64_u64_shift_left(
    vec2u(0u, a.significand),
    u32(a.baseExponent - commonBaseExponent)
  );
  let bMagnitude = fp64_u64_shift_left(
    vec2u(0u, b.significand),
    u32(b.baseExponent - commonBaseExponent)
  );

  var resultSign = a.sign;
  var resultMagnitude: vec2u;
  if (a.sign == b.sign) {
    resultMagnitude = fp64_u64_add(aMagnitude, bMagnitude);
  } else {
    let comparison = fp64_u64_compare(aMagnitude, bMagnitude);
    if (comparison == 0) {
      return vec2u(0u);
    }
    if (comparison > 0) {
      resultMagnitude = fp64_u64_sub(aMagnitude, bMagnitude);
    } else {
      resultSign = b.sign;
      resultMagnitude = fp64_u64_sub(bMagnitude, aMagnitude);
    }
  }

  return fp64_split_raw_accumulator_bits(
    resultSign,
    resultMagnitude,
    commonBaseExponent
  );
}
#endif

#ifndef LUMA_FP64_F32_INPUT_ONLY
fn fp64_add_aligned_magnitudes_to_fp64_bits(
  sign: u32,
  larger: Fp64Bits,
  smaller: Fp64Bits
) -> vec2u {
  let largeSignificand = fp64_u64_shift_left(larger.significand, 3u);
  let smallSignificand = fp64_u64_shift_right_sticky(
    fp64_u64_shift_left(smaller.significand, 3u),
    u32(larger.exponent - smaller.exponent)
  );
  let resultSignificand = fp64_u64_add(largeSignificand, smallSignificand);
  return fp64_split_binary64_accumulator_bits(
    sign,
    resultSignificand,
    larger.exponent - 55
  );
}

fn fp64_sub_aligned_magnitudes_to_fp64_bits(
  sign: u32,
  larger: Fp64Bits,
  smaller: Fp64Bits
) -> vec2u {
  let largeSignificand = fp64_u64_shift_left(larger.significand, 3u);
  let smallSignificand = fp64_u64_shift_right_sticky(
    fp64_u64_shift_left(smaller.significand, 3u),
    u32(larger.exponent - smaller.exponent)
  );
  let resultSignificand = fp64_u64_sub(largeSignificand, smallSignificand);
  return fp64_split_binary64_accumulator_bits(
    sign,
    resultSignificand,
    larger.exponent - 55
  );
}

fn fp64_add_aligned_magnitudes_to_f32_bits(sign: u32, larger: Fp64Bits, smaller: Fp64Bits) -> u32 {
  let largeSignificand = fp64_u64_shift_left(larger.significand, 3u);
  let smallSignificand = fp64_u64_shift_right_sticky(
    fp64_u64_shift_left(smaller.significand, 3u),
    u32(larger.exponent - smaller.exponent)
  );
  let resultSignificand = fp64_u64_add(largeSignificand, smallSignificand);
  return fp64_make_f32_bits_from_u64(sign, resultSignificand, larger.exponent - 55);
}

fn fp64_sub_aligned_magnitudes_to_f32_bits(sign: u32, larger: Fp64Bits, smaller: Fp64Bits) -> u32 {
  let largeSignificand = fp64_u64_shift_left(larger.significand, 3u);
  let smallSignificand = fp64_u64_shift_right_sticky(
    fp64_u64_shift_left(smaller.significand, 3u),
    u32(larger.exponent - smaller.exponent)
  );
  let resultSignificand = fp64_u64_sub(largeSignificand, smallSignificand);
  return fp64_make_f32_bits_from_u64(sign, resultSignificand, larger.exponent - 55);
}

// Subtract two raw binary64 values and round the exact result once to f32.
// The input words are canonical high/low words: .x contains sign/exponent/high
// fraction bits, and .y contains the low 32 fraction bits.
fn sub_fp64u32_to_f32_bits(aBits: vec2u, bBits: vec2u) -> u32 {
  let a = fp64_decode_bits(aBits);
  let b = fp64_decode_bits(bBits);
  let bSubtractionSign = b.sign ^ 1u;

  if (a.isNan || b.isNan) {
    return 0x7fc00000u;
  }
  if (a.isInf && b.isInf) {
    if (a.sign == bSubtractionSign) {
      return (a.sign << 31u) | 0x7f800000u;
    }
    return 0x7fc00000u;
  }
  if (a.isInf) {
    return (a.sign << 31u) | 0x7f800000u;
  }
  if (b.isInf) {
    return (bSubtractionSign << 31u) | 0x7f800000u;
  }
  if (a.isZero && b.isZero) {
    return select(0u, 0x80000000u, a.sign == 1u && b.sign == 0u);
  }

  let magnitudeComparison = fp64_finite_magnitude_compare(a, b);
  if (a.sign == bSubtractionSign) {
    if (magnitudeComparison >= 0) {
      return fp64_add_aligned_magnitudes_to_f32_bits(a.sign, a, b);
    }
    return fp64_add_aligned_magnitudes_to_f32_bits(a.sign, b, a);
  }

  if (magnitudeComparison == 0) {
    return 0u;
  }
  if (magnitudeComparison > 0) {
    return fp64_sub_aligned_magnitudes_to_f32_bits(a.sign, a, b);
  }
  return fp64_sub_aligned_magnitudes_to_f32_bits(bSubtractionSign, b, a);
}

fn sub_fp64u32_to_f32(aBits: vec2u, bBits: vec2u) -> f32 {
  return bitcast<f32>(sub_fp64u32_to_f32_bits(aBits, bBits));
}

// Subtract two raw binary64 values, round once to binary64, then split the
// result into normalized f32 limbs. Finite results must fit within the f32
// exponent range; larger magnitudes map to infinity and smaller magnitudes
// map to zero. The input words use canonical high/low word order.
fn sub_fp64u32_to_fp64_bits(aBits: vec2u, bBits: vec2u) -> vec2u {
  let a = fp64_decode_bits(aBits);
  let b = fp64_decode_bits(bBits);
  let bSubtractionSign = b.sign ^ 1u;

  if (a.isNan || b.isNan) {
    return vec2u(0x7fc00000u, 0u);
  }
  if (a.isInf && b.isInf) {
    if (a.sign == bSubtractionSign) {
      return vec2u((a.sign << 31u) | 0x7f800000u, 0u);
    }
    return vec2u(0x7fc00000u, 0u);
  }
  if (a.isInf) {
    return vec2u((a.sign << 31u) | 0x7f800000u, 0u);
  }
  if (b.isInf) {
    return vec2u((bSubtractionSign << 31u) | 0x7f800000u, 0u);
  }
  if (a.isZero && b.isZero) {
    return vec2u(0u);
  }

  let magnitudeComparison = fp64_finite_magnitude_compare(a, b);
  if (a.sign == bSubtractionSign) {
    if (magnitudeComparison >= 0) {
      return fp64_add_aligned_magnitudes_to_fp64_bits(a.sign, a, b);
    }
    return fp64_add_aligned_magnitudes_to_fp64_bits(a.sign, b, a);
  }

  if (magnitudeComparison == 0) {
    return vec2u(0u);
  }
  if (magnitudeComparison > 0) {
    return fp64_sub_aligned_magnitudes_to_fp64_bits(a.sign, a, b);
  }
  return fp64_sub_aligned_magnitudes_to_fp64_bits(bSubtractionSign, b, a);
}

fn sub_fp64u32_to_fp64(aBits: vec2u, bBits: vec2u) -> vec2f {
  let resultBits = sub_fp64u32_to_fp64_bits(aBits, bBits);
  return vec2f(bitcast<f32>(resultBits.x), bitcast<f32>(resultBits.y));
}
#endif

#ifndef LUMA_FP64_PREDICATE_ONLY
fn fp64_runtime_zero() -> f32 {
  return fp64arithmetic.ONE * 0.0;
}

fn prevent_fp64_optimization(value: f32) -> f32 {
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  return value + fp64_runtime_zero();
#else
  return value;
#endif
}
#endif

#ifdef LUMA_FP64_INTEGER_ARITHMETIC
struct Fp64F32Bits {
  sign: u32,
  baseExponent: i32,
  significand: u32,
  isZero: bool,
  isInf: bool,
  isNan: bool,
};

// Decode an f32 as (-1)^sign * significand * 2^baseExponent.
fn fp64_decode_f32_bits(bits: u32) -> Fp64F32Bits {
  let sign = bits >> 31u;
  let exponentBits = (bits >> 23u) & 0xffu;
  let fraction = bits & 0x7fffffu;

  if (exponentBits == 0xffu) {
    return Fp64F32Bits(sign, 0, 0u, false, fraction == 0u, fraction != 0u);
  }
  if (exponentBits == 0u) {
    return Fp64F32Bits(sign, -149, fraction, fraction == 0u, false, false);
  }
  return Fp64F32Bits(sign, i32(exponentBits) - 150, 0x800000u | fraction, false, false, false);
}

fn fp64_f32_magnitude_compare(aBits: u32, bBits: u32) -> i32 {
  let aMagnitude = aBits & 0x7fffffffu;
  let bMagnitude = bBits & 0x7fffffffu;
  if (aMagnitude == bMagnitude) {
    return 0;
  }
  return select(-1, 1, aMagnitude > bMagnitude);
}

fn fp64_make_residual_f32_bits(
  exactSign: u32,
  exactMagnitude: vec2u,
  exactBaseExponent: i32,
  highBits: u32
) -> u32 {
  if (fp64_u64_is_zero(exactMagnitude)) {
    return 0u;
  }

  let high = fp64_decode_f32_bits(highBits);
  if (high.isInf || high.isNan) {
    return exactSign << 31u;
  }
  if (high.isZero) {
    return fp64_make_f32_bits_from_u64(exactSign, exactMagnitude, exactBaseExponent);
  }

  let commonBaseExponent = min(exactBaseExponent, high.baseExponent);
  let exactShift = exactBaseExponent - commonBaseExponent;
  let highShift = high.baseExponent - commonBaseExponent;

  // A normal two-sum/two-product residual never needs a shift this large.
  // This guard gives deterministic underflow behavior outside that contract.
  if (exactShift >= 64 || highShift >= 64) {
    return exactSign << 31u;
  }

  let exactAligned = fp64_u64_shift_left(exactMagnitude, u32(exactShift));
  let highAligned = fp64_u64_shift_left(vec2u(0u, high.significand), u32(highShift));
  let comparison = fp64_u64_compare(exactAligned, highAligned);
  if (comparison == 0) {
    return 0u;
  }

  var residualSign = exactSign;
  var residualMagnitude: vec2u;
  if (comparison > 0) {
    residualMagnitude = fp64_u64_sub(exactAligned, highAligned);
  } else {
    residualSign = exactSign ^ 1u;
    residualMagnitude = fp64_u64_sub(highAligned, exactAligned);
  }
  return fp64_make_f32_bits_from_u64(
    residualSign,
    residualMagnitude,
    commonBaseExponent
  );
}

fn fp64_split_accumulator_bits(
  sign: u32,
  magnitude: vec2u,
  baseExponent: i32
) -> vec2u {
  let highBits = fp64_make_f32_bits_from_u64(sign, magnitude, baseExponent);
  let lowBits = fp64_make_residual_f32_bits(sign, magnitude, baseExponent, highBits);
  return vec2u(highBits, lowBits);
}

fn fp64_two_sum_integer_bits(aBits: u32, bBits: u32) -> vec2u {
  let a = fp64_decode_f32_bits(aBits);
  let b = fp64_decode_f32_bits(bBits);

  if (a.isNan || b.isNan) {
    return vec2u(0x7fc00000u, 0u);
  }
  if (a.isInf || b.isInf) {
    if (a.isInf && b.isInf && a.sign != b.sign) {
      return vec2u(0x7fc00000u, 0u);
    }
    return select(vec2u(bBits, 0u), vec2u(aBits, 0u), a.isInf);
  }
  if (a.isZero && b.isZero) {
    return vec2u((a.sign & b.sign) << 31u, 0u);
  }
  if (a.isZero) {
    return vec2u(bBits, 0u);
  }
  if (b.isZero) {
    return vec2u(aBits, 0u);
  }

  let exponentDifference = select(
    b.baseExponent - a.baseExponent,
    a.baseExponent - b.baseExponent,
    a.baseExponent >= b.baseExponent
  );

  // Beyond half an ulp, rounding cannot change the larger operand. Returning
  // the smaller operand intact also avoids an unbounded integer alignment.
  // At a power-of-two boundary the spacing below the larger operand is half
  // the spacing above it, so an opposite-sign gap-25 operand can still change
  // the rounded high limb. Gap 26 is the first universally safe early-out.
  if (exponentDifference > 25) {
    if (fp64_f32_magnitude_compare(aBits, bBits) >= 0) {
      return vec2u(aBits, bBits);
    }
    return vec2u(bBits, aBits);
  }

  let commonBaseExponent = min(a.baseExponent, b.baseExponent);
  let aMagnitude = fp64_u64_shift_left(
    vec2u(0u, a.significand),
    u32(a.baseExponent - commonBaseExponent)
  );
  let bMagnitude = fp64_u64_shift_left(
    vec2u(0u, b.significand),
    u32(b.baseExponent - commonBaseExponent)
  );

  var resultSign = a.sign;
  var resultMagnitude: vec2u;
  if (a.sign == b.sign) {
    resultMagnitude = fp64_u64_add(aMagnitude, bMagnitude);
  } else {
    let comparison = fp64_u64_compare(aMagnitude, bMagnitude);
    if (comparison == 0) {
      return vec2u(0u, 0u);
    }
    if (comparison > 0) {
      resultMagnitude = fp64_u64_sub(aMagnitude, bMagnitude);
    } else {
      resultSign = b.sign;
      resultMagnitude = fp64_u64_sub(bMagnitude, aMagnitude);
    }
  }

  return fp64_split_accumulator_bits(resultSign, resultMagnitude, commonBaseExponent);
}

fn fp64_two_sum_integer(a: f32, b: f32) -> vec2f {
  let resultBits = fp64_two_sum_integer_bits(bitcast<u32>(a), bitcast<u32>(b));
  return vec2f(bitcast<f32>(resultBits.x), bitcast<f32>(resultBits.y));
}

fn fp64_multiply_significands(a: u32, b: u32) -> vec2u {
  let aLow = a & 0xffffu;
  let aHigh = a >> 16u;
  let bLow = b & 0xffffu;
  let bHigh = b >> 16u;
  let lowProduct = aLow * bLow;
  let crossProduct = aLow * bHigh + aHigh * bLow;
  let highProduct = aHigh * bHigh;

  var result = vec2u(0u, lowProduct);
  result = fp64_u64_add(
    result,
    fp64_u64_shift_left(vec2u(0u, crossProduct), 16u)
  );
  result = fp64_u64_add(result, vec2u(highProduct, 0u));
  return result;
}

fn fp64_two_prod_integer_bits(aBits: u32, bBits: u32) -> vec2u {
  let a = fp64_decode_f32_bits(aBits);
  let b = fp64_decode_f32_bits(bBits);
  let resultSign = a.sign ^ b.sign;

  if (a.isNan || b.isNan || ((a.isZero || b.isZero) && (a.isInf || b.isInf))) {
    return vec2u(0x7fc00000u, 0u);
  }
  if (a.isInf || b.isInf) {
    return vec2u((resultSign << 31u) | 0x7f800000u, resultSign << 31u);
  }
  if (a.isZero || b.isZero) {
    return vec2u(resultSign << 31u, resultSign << 31u);
  }

  let magnitude = fp64_multiply_significands(a.significand, b.significand);
  return fp64_split_accumulator_bits(
    resultSign,
    magnitude,
    a.baseExponent + b.baseExponent
  );
}

fn fp64_two_prod_integer(a: f32, b: f32) -> vec2f {
  let resultBits = fp64_two_prod_integer_bits(bitcast<u32>(a), bitcast<u32>(b));
  return vec2f(bitcast<f32>(resultBits.x), bitcast<f32>(resultBits.y));
}

fn fp64_round_add_integer(a: f32, b: f32) -> f32 {
  return fp64_two_sum_integer(a, b).x;
}

fn fp64_round_mul_integer(a: f32, b: f32) -> f32 {
  return fp64_two_prod_integer(a, b).x;
}

#ifndef LUMA_FP64_PREDICATE_ONLY
fn fp64_f32_finite_exponent(value: Fp64F32Bits) -> i32 {
  let mostSignificantBit = 31u - countLeadingZeros(value.significand);
  return value.baseExponent + i32(mostSignificantBit);
}

fn fp64_scale_f32_integer(value: f32, exponent: i32) -> f32 {
  let decoded = fp64_decode_f32_bits(bitcast<u32>(value));
  if (decoded.isZero || decoded.isInf || decoded.isNan) {
    return value;
  }
  let resultBits = fp64_make_f32_bits_from_u64(
    decoded.sign,
    vec2u(0u, decoded.significand),
    decoded.baseExponent + exponent
  );
  return bitcast<f32>(resultBits);
}

// Divide normalized significands so the hardware operation cannot overflow,
// underflow, or flush a subnormal result. Reapply the exponent with integer
// packing, which also produces subnormal correction limbs without relying on
// floating-point arithmetic to preserve them.
fn fp64_divide_f32_integer(aValue: f32, bValue: f32) -> f32 {
  let a = fp64_decode_f32_bits(bitcast<u32>(aValue));
  let b = fp64_decode_f32_bits(bitcast<u32>(bValue));
  if (a.isZero || b.isZero || a.isInf || b.isInf || a.isNan || b.isNan) {
    return aValue / bValue;
  }

  let aMostSignificantBit = 31u - countLeadingZeros(a.significand);
  let bMostSignificantBit = 31u - countLeadingZeros(b.significand);
  let normalizedABits = fp64_make_f32_bits_from_u64(
    a.sign,
    vec2u(0u, a.significand),
    -i32(aMostSignificantBit)
  );
  let normalizedBBits = fp64_make_f32_bits_from_u64(
    b.sign,
    vec2u(0u, b.significand),
    -i32(bMostSignificantBit)
  );
  let normalizedQuotient = bitcast<f32>(normalizedABits) / bitcast<f32>(normalizedBBits);
  let quotient = fp64_decode_f32_bits(bitcast<u32>(normalizedQuotient));
  let exponentShift =
    a.baseExponent + i32(aMostSignificantBit) -
    b.baseExponent - i32(bMostSignificantBit);
  let quotientBits = fp64_make_f32_bits_from_u64(
    quotient.sign,
    vec2u(0u, quotient.significand),
    quotient.baseExponent + exponentShift
  );
  return bitcast<f32>(quotientBits);
}
#endif

#ifndef LUMA_FP64_PREDICATE_ONLY
fn split(a: f32) -> vec2f {
  let aBits = bitcast<u32>(a);
  let decoded = fp64_decode_f32_bits(aBits);
  if (decoded.isZero || decoded.isInf || decoded.isNan) {
    return vec2f(a, 0.0);
  }

  var roundedHigh = decoded.significand >> 12u;
  let remainder = decoded.significand & 0xfffu;
  if (remainder > 0x800u || (remainder == 0x800u && (roundedHigh & 1u) == 1u)) {
    roundedHigh = roundedHigh + 1u;
  }
  var highMagnitude = vec2u(0u, roundedHigh << 12u);
  var highBits = fp64_make_f32_bits_from_u64(
    decoded.sign,
    highMagnitude,
    decoded.baseExponent
  );
  // Rounding the high limb of a maximum-exponent value can overflow even
  // though the original value is finite. Truncate only in that boundary case
  // so split remains an exact finite decomposition.
  if (fp64_decode_f32_bits(highBits).isInf) {
    roundedHigh = decoded.significand >> 12u;
    highMagnitude = vec2u(0u, roundedHigh << 12u);
    highBits = fp64_make_f32_bits_from_u64(
      decoded.sign,
      highMagnitude,
      decoded.baseExponent
    );
  }
  let lowBits = fp64_make_residual_f32_bits(
    decoded.sign,
    vec2u(0u, decoded.significand),
    decoded.baseExponent,
    highBits
  );
  return vec2f(bitcast<f32>(highBits), bitcast<f32>(lowBits));
}

fn split2(a: vec2f) -> vec2f {
  var result = split(a.x);
  result.y = fp64_round_add_integer(result.y, a.y);
  return result;
}
#endif

#ifndef LUMA_FP64_PREDICATE_ONLY
fn quickTwoSum(a: f32, b: f32) -> vec2f {
  return fp64_two_sum_integer(a, b);
}
#endif

fn twoSum(a: f32, b: f32) -> vec2f {
  return fp64_two_sum_integer(a, b);
}

fn twoSub(a: f32, b: f32) -> vec2f {
  let bBits = bitcast<u32>(b) ^ 0x80000000u;
  let resultBits = fp64_two_sum_integer_bits(bitcast<u32>(a), bBits);
  return vec2f(bitcast<f32>(resultBits.x), bitcast<f32>(resultBits.y));
}

#ifndef LUMA_FP64_PREDICATE_ONLY
fn twoSqr(a: f32) -> vec2f {
  return fp64_two_prod_integer(a, a);
}

fn twoProd(a: f32, b: f32) -> vec2f {
  return fp64_two_prod_integer(a, b);
}
#endif

fn sum_fp64(a: vec2f, b: vec2f) -> vec2f {
  var sum = fp64_two_sum_integer(a.x, b.x);
  let lowSum = fp64_two_sum_integer(a.y, b.y);
  sum.y = fp64_round_add_integer(sum.y, lowSum.x);
  sum = fp64_two_sum_integer(sum.x, sum.y);
  sum.y = fp64_round_add_integer(sum.y, lowSum.y);
  return fp64_two_sum_integer(sum.x, sum.y);
}

fn sub_fp64(a: vec2f, b: vec2f) -> vec2f {
  let negatedB = vec2f(
    bitcast<f32>(bitcast<u32>(b.x) ^ 0x80000000u),
    bitcast<f32>(bitcast<u32>(b.y) ^ 0x80000000u)
  );
  return sum_fp64(a, negatedB);
}

fn mul_fp64(a: vec2f, b: vec2f) -> vec2f {
  var product = fp64_two_prod_integer(a.x, b.x);
  let crossProduct1 = fp64_round_mul_integer(a.x, b.y);
  product.y = fp64_round_add_integer(product.y, crossProduct1);
  product = fp64_two_sum_integer(product.x, product.y);
  let crossProduct2 = fp64_round_mul_integer(a.y, b.x);
  product.y = fp64_round_add_integer(product.y, crossProduct2);
  return fp64_two_sum_integer(product.x, product.y);
}

#ifndef LUMA_FP64_PREDICATE_ONLY
fn fp64_scale_fp64_integer(value: vec2f, exponent: i32) -> vec2f {
  let high = fp64_scale_f32_integer(value.x, exponent);
  let low = fp64_scale_f32_integer(value.y, exponent);
  return sum_fp64(vec2f(high, 0.0), vec2f(low, 0.0));
}

fn fp64_div_fp64_normalized(a: vec2f, b: vec2f) -> vec2f {
  let quotientHigh = fp64_divide_f32_integer(a.x, b.x);
  var quotient = vec2f(quotientHigh, 0.0);

  let remainder = sub_fp64(a, mul_fp64(b, quotient));
  let quotientLow = fp64_divide_f32_integer(remainder.x, b.x);
  quotient = sum_fp64(quotient, vec2f(quotientLow, 0.0));

  let secondRemainder = sub_fp64(a, mul_fp64(b, quotient));
  let correction = fp64_divide_f32_integer(secondRemainder.x, b.x);
  return sum_fp64(quotient, vec2f(correction, 0.0));
}

fn div_fp64(a: vec2f, b: vec2f) -> vec2f {
  let decodedA = fp64_decode_f32_bits(bitcast<u32>(a.x));
  let decodedB = fp64_decode_f32_bits(bitcast<u32>(b.x));
  if (
    decodedA.isZero || decodedB.isZero ||
    decodedA.isInf || decodedB.isInf ||
    decodedA.isNan || decodedB.isNan
  ) {
    return fp64_div_fp64_normalized(a, b);
  }

  let exponentA = fp64_f32_finite_exponent(decodedA);
  let exponentB = fp64_f32_finite_exponent(decodedB);
  // Correct the quotient near unity so b * q and the remainder stay clear of
  // both f32 underflow and overflow. The exponent difference is applied once.
  let normalizedA = fp64_scale_fp64_integer(a, -exponentA);
  let normalizedB = fp64_scale_fp64_integer(b, -exponentB);
  let normalizedQuotient = fp64_div_fp64_normalized(normalizedA, normalizedB);
  return fp64_scale_fp64_integer(normalizedQuotient, exponentA - exponentB);
}

fn fp64_sqrt_fp64_normalized(a: vec2f) -> vec2f {
  let estimate = sqrt(a.x);
  let difference = sub_fp64(a, fp64_two_prod_integer(estimate, estimate)).x;
  let denominator = fp64_round_add_integer(estimate, estimate);
  let correction = fp64_divide_f32_integer(difference, denominator);
  return sum_fp64(vec2f(estimate, 0.0), vec2f(correction, 0.0));
}

fn sqrt_fp64(a: vec2f) -> vec2f {
  let decoded = fp64_decode_f32_bits(bitcast<u32>(a.x));
  let decodedLow = fp64_decode_f32_bits(bitcast<u32>(a.y));
  if (decoded.isZero && decodedLow.isZero) {
    return vec2f(0.0, 0.0);
  }
  if (decoded.sign == 1u) {
    let nanValue = fp64_nan(a.x);
    return vec2f(nanValue, nanValue);
  }

  if (decoded.isInf || decoded.isNan) {
    return fp64_sqrt_fp64_normalized(a);
  }
  let exponent = fp64_f32_finite_exponent(decoded);
  // An even scale lets the final square-root rescale use an integer exponent.
  let evenExponent = exponent - (exponent & 1);
  let normalizedA = fp64_scale_fp64_integer(a, -evenExponent);
  let normalizedRoot = fp64_sqrt_fp64_normalized(normalizedA);
  return fp64_scale_fp64_integer(normalizedRoot, evenExponent / 2);
}
#endif

#else
fn split(a: f32) -> vec2f {
  let splitValue = prevent_fp64_optimization(fp64arithmetic.SPLIT + fp64_runtime_zero());
  let t = prevent_fp64_optimization(a * splitValue);
  let temp = prevent_fp64_optimization(t - a);
  let aHi = prevent_fp64_optimization(t - temp);
  let aLo = prevent_fp64_optimization(a - aHi);
  return vec2f(aHi, aLo);
}

fn split2(a: vec2f) -> vec2f {
  var b = split(a.x);
  b.y = b.y + a.y;
  return b;
}

fn quickTwoSum(a: f32, b: f32) -> vec2f {
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let sum = prevent_fp64_optimization((a + b) * fp64arithmetic.ONE);
  let err = prevent_fp64_optimization(b - (sum - a) * fp64arithmetic.ONE);
#else
  let sum = prevent_fp64_optimization(a + b);
  let err = prevent_fp64_optimization(b - (sum - a));
#endif
  return vec2f(sum, err);
}

fn twoSum(a: f32, b: f32) -> vec2f {
  let s = prevent_fp64_optimization(a + b);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let v = prevent_fp64_optimization((s * fp64arithmetic.ONE - a) * fp64arithmetic.ONE);
  let err =
    prevent_fp64_optimization((a - (s - v) * fp64arithmetic.ONE) *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE) +
    prevent_fp64_optimization(b - v);
#else
  let v = prevent_fp64_optimization(s - a);
  let err = prevent_fp64_optimization(a - (s - v)) + prevent_fp64_optimization(b - v);
#endif
  return vec2f(s, err);
}

fn twoSub(a: f32, b: f32) -> vec2f {
  let s = prevent_fp64_optimization(a - b);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let v = prevent_fp64_optimization((s * fp64arithmetic.ONE - a) * fp64arithmetic.ONE);
  let err =
    prevent_fp64_optimization((a - (s - v) * fp64arithmetic.ONE) *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE *
      fp64arithmetic.ONE) -
    prevent_fp64_optimization(b + v);
#else
  let v = prevent_fp64_optimization(s - a);
  let err = prevent_fp64_optimization(a - (s - v)) - prevent_fp64_optimization(b + v);
#endif
  return vec2f(s, err);
}

fn twoSqr(a: f32) -> vec2f {
  let prod = prevent_fp64_optimization(a * a);
  let aFp64 = split(a);
  let highProduct = prevent_fp64_optimization(aFp64.x * aFp64.x);
  let crossProduct = prevent_fp64_optimization(2.0 * aFp64.x * aFp64.y);
  let lowProduct = prevent_fp64_optimization(aFp64.y * aFp64.y);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let err =
    (prevent_fp64_optimization(highProduct - prod) * fp64arithmetic.ONE +
      crossProduct * fp64arithmetic.ONE * fp64arithmetic.ONE) +
    lowProduct * fp64arithmetic.ONE * fp64arithmetic.ONE * fp64arithmetic.ONE;
#else
  let err = ((prevent_fp64_optimization(highProduct - prod) + crossProduct) + lowProduct);
#endif
  return vec2f(prod, err);
}

fn twoProd(a: f32, b: f32) -> vec2f {
  let prod = prevent_fp64_optimization(a * b);
  let aFp64 = split(a);
  let bFp64 = split(b);
  let highProduct = prevent_fp64_optimization(aFp64.x * bFp64.x);
  let crossProduct1 = prevent_fp64_optimization(aFp64.x * bFp64.y);
  let crossProduct2 = prevent_fp64_optimization(aFp64.y * bFp64.x);
  let lowProduct = prevent_fp64_optimization(aFp64.y * bFp64.y);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let err1 = (highProduct - prod) * fp64arithmetic.ONE;
  let err2 = crossProduct1 * fp64arithmetic.ONE * fp64arithmetic.ONE;
  let err3 = crossProduct2 * fp64arithmetic.ONE * fp64arithmetic.ONE * fp64arithmetic.ONE;
  let err4 =
    lowProduct *
    fp64arithmetic.ONE *
    fp64arithmetic.ONE *
    fp64arithmetic.ONE *
    fp64arithmetic.ONE;
#else
  let err1 = highProduct - prod;
  let err2 = crossProduct1;
  let err3 = crossProduct2;
  let err4 = lowProduct;
#endif
  let err12InputA = prevent_fp64_optimization(err1);
  let err12InputB = prevent_fp64_optimization(err2);
  let err12 = prevent_fp64_optimization(err12InputA + err12InputB);
  let err123InputA = prevent_fp64_optimization(err12);
  let err123InputB = prevent_fp64_optimization(err3);
  let err123 = prevent_fp64_optimization(err123InputA + err123InputB);
  let err1234InputA = prevent_fp64_optimization(err123);
  let err1234InputB = prevent_fp64_optimization(err4);
  let err = prevent_fp64_optimization(err1234InputA + err1234InputB);
  return vec2f(prod, err);
}

fn sum_fp64(a: vec2f, b: vec2f) -> vec2f {
  var s = twoSum(a.x, b.x);
  let t = twoSum(a.y, b.y);
  s.y = prevent_fp64_optimization(s.y + t.x);
  s = quickTwoSum(s.x, s.y);
  s.y = prevent_fp64_optimization(s.y + t.y);
  s = quickTwoSum(s.x, s.y);
  return s;
}

fn sub_fp64(a: vec2f, b: vec2f) -> vec2f {
  var s = twoSub(a.x, b.x);
  let t = twoSub(a.y, b.y);
  s.y = prevent_fp64_optimization(s.y + t.x);
  s = quickTwoSum(s.x, s.y);
  s.y = prevent_fp64_optimization(s.y + t.y);
  s = quickTwoSum(s.x, s.y);
  return s;
}

fn mul_fp64(a: vec2f, b: vec2f) -> vec2f {
  var prod = twoProd(a.x, b.x);
  let crossProduct1 = prevent_fp64_optimization(a.x * b.y);
  prod.y = prevent_fp64_optimization(prod.y + crossProduct1);
#ifdef LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  let crossProduct2 = prevent_fp64_optimization(a.y * b.x);
  prod.y = prevent_fp64_optimization(prod.y + crossProduct2);
#ifdef LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND
  prod = split2(prod);
#endif
  prod = quickTwoSum(prod.x, prod.y);
  return prod;
}

#ifndef LUMA_FP64_PREDICATE_ONLY
fn div_fp64(a: vec2f, b: vec2f) -> vec2f {
  let xn = prevent_fp64_optimization(1.0 / b.x);
  let yn = mul_fp64(a, vec2f(xn, fp64_runtime_zero()));
  let diff = prevent_fp64_optimization(sub_fp64(a, mul_fp64(b, yn)).x);
  let prod = twoProd(xn, diff);
  return sum_fp64(yn, prod);
}

fn sqrt_fp64(a: vec2f) -> vec2f {
  if (a.x == 0.0 && a.y == 0.0) {
    return vec2f(0.0, 0.0);
  }
  if (a.x < 0.0) {
    let nanValue = fp64_nan(a.x);
    return vec2f(nanValue, nanValue);
  }

  let x = prevent_fp64_optimization(1.0 / sqrt(a.x));
  let yn = prevent_fp64_optimization(a.x * x);
#ifdef LUMA_FP64_CODE_ELIMINATION_WORKAROUND
  let ynSqr = twoSqr(yn) * fp64arithmetic.ONE;
#else
  let ynSqr = twoSqr(yn);
#endif
  let diff = prevent_fp64_optimization(sub_fp64(a, ynSqr).x);
  let prod = twoProd(prevent_fp64_optimization(x * 0.5), diff);
#ifdef LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND
  return sum_fp64(split(yn), prod);
#else
  return sum_fp64(vec2f(yn, 0.0), prod);
#endif
}
#endif
#endif

#ifndef LUMA_FP64_PREDICATE_ONLY
fn fp64_f32_bits_is_nan(bits: u32) -> bool {
  return (bits & 0x7fffffffu) > 0x7f800000u;
}

fn fp64_f32_bits_is_inf(bits: u32) -> bool {
  return (bits & 0x7fffffffu) == 0x7f800000u;
}

fn fp64_compare_f32_bits(aBits: u32, bBits: u32) -> i32 {
  let aMagnitude = aBits & 0x7fffffffu;
  let bMagnitude = bBits & 0x7fffffffu;
  if (aMagnitude == 0u && bMagnitude == 0u) {
    return 0;
  }
  let aSign = aBits >> 31u;
  let bSign = bBits >> 31u;
  if (aSign != bSign) {
    return select(1, -1, aSign == 1u);
  }
  if (aMagnitude == bMagnitude) {
    return 0;
  }
  let magnitudeComparison = select(-1, 1, aMagnitude > bMagnitude);
  return select(magnitudeComparison, -magnitudeComparison, aSign == 1u);
}

// Normalize an arbitrary pair of finite f32 limbs with integer accumulation.
// This is independent of LUMA_FP64_INTEGER_ARITHMETIC and canonicalizes every
// representation of zero to vec2f(+0.0, +0.0).
fn normalize_fp64(value: vec2f) -> vec2f {
  let resultBits = fp64_add_raw_f32_bits(bitcast<u32>(value.x), bitcast<u32>(value.y));
  return vec2f(bitcast<f32>(resultBits.x), bitcast<f32>(resultBits.y));
}

fn is_nan_fp64(value: vec2f) -> bool {
  let normalized = normalize_fp64(value);
  return fp64_f32_bits_is_nan(bitcast<u32>(normalized.x)) ||
    fp64_f32_bits_is_nan(bitcast<u32>(normalized.y));
}

fn is_finite_fp64(value: vec2f) -> bool {
  let normalized = normalize_fp64(value);
  let highBits = bitcast<u32>(normalized.x);
  let lowBits = bitcast<u32>(normalized.y);
  return !fp64_f32_bits_is_nan(highBits) && !fp64_f32_bits_is_nan(lowBits) &&
    !fp64_f32_bits_is_inf(highBits) && !fp64_f32_bits_is_inf(lowBits);
}

// Returns -1, 0, or 1. NaN is unordered and returns 0; call is_nan_fp64 or
// is_finite_fp64 first when 0 must mean a finite zero.
fn sign_fp64(value: vec2f) -> i32 {
  let normalized = normalize_fp64(value);
  let highBits = bitcast<u32>(normalized.x);
  let lowBits = bitcast<u32>(normalized.y);
  if (fp64_f32_bits_is_nan(highBits) || fp64_f32_bits_is_nan(lowBits)) {
    return 0;
  }
  if ((highBits & 0x7fffffffu) != 0u) {
    return select(1, -1, (highBits >> 31u) == 1u);
  }
  if ((lowBits & 0x7fffffffu) != 0u) {
    return select(1, -1, (lowBits >> 31u) == 1u);
  }
  return 0;
}

// Compares double-single values and returns -1, 0, or 1. NaN is unordered
// and returns 0; callers that require equality semantics must first check
// is_nan_fp64 or is_finite_fp64.
fn compare_fp64(a: vec2f, b: vec2f) -> i32 {
  let normalizedA = normalize_fp64(a);
  let normalizedB = normalize_fp64(b);
  let aHighBits = bitcast<u32>(normalizedA.x);
  let aLowBits = bitcast<u32>(normalizedA.y);
  let bHighBits = bitcast<u32>(normalizedB.x);
  let bLowBits = bitcast<u32>(normalizedB.y);
  if (fp64_f32_bits_is_nan(aHighBits) || fp64_f32_bits_is_nan(aLowBits) ||
      fp64_f32_bits_is_nan(bHighBits) || fp64_f32_bits_is_nan(bLowBits)) {
    return 0;
  }
  let highComparison = fp64_compare_f32_bits(aHighBits, bHighBits);
  if (highComparison != 0) {
    return highComparison;
  }
  return fp64_compare_f32_bits(aLowBits, bLowBits);
}
#endif
`,fs:qo,vs:qo,defaultUniforms:{ONE:1,SPLIT:4097},uniformTypes:{ONE:`f32`,SPLIT:`f32`},fp64ify:Vo,fp64LowPart:Ho,fp64ifyMatrix4:Uo},Yo={RGBA8UNORM:0,RGBA16FLOAT:1,RGBA32FLOAT:2},Xo={rgba8unorm:4,rgba16float:8,rgba32float:16};Yo.RGBA8UNORM,Yo.RGBA16FLOAT,Yo.RGBA32FLOAT,Yo.RGBA8UNORM,Yo.RGBA16FLOAT,Yo.RGBA32FLOAT;var Zo={useByteColors:`f32`},Qo={useByteColors:!0};Yo.RGBA8UNORM,Xo.rgba8unorm/Uint32Array.BYTES_PER_ELEMENT,ts(`colors`);var $o=ts(`floatColors`);ns(`colors`);var es=ns(`floatColors`);`${Yo.RGBA8UNORM}${Yo.RGBA16FLOAT}`;function ts(e){return`\
layout(std140) uniform ${e}Uniforms {
  float useByteColors;
} ${e};

vec3 ${e}_normalize(vec3 inputColor) {
  return ${e}.useByteColors > 0.5 ? inputColor / 255.0 : inputColor;
}

vec4 ${e}_normalize(vec4 inputColor) {
  return ${e}.useByteColors > 0.5 ? inputColor / 255.0 : inputColor;
}

vec4 ${e}_premultiplyAlpha(vec4 inputColor) {
  return vec4(inputColor.rgb * inputColor.a, inputColor.a);
}

vec4 ${e}_unpremultiplyAlpha(vec4 inputColor) {
  return inputColor.a > 0.0 ? vec4(inputColor.rgb / inputColor.a, inputColor.a) : vec4(0.0);
}

vec4 ${e}_premultiply_alpha(vec4 inputColor) {
  return ${e}_premultiplyAlpha(inputColor);
}

vec4 ${e}_unpremultiply_alpha(vec4 inputColor) {
  return ${e}_unpremultiplyAlpha(inputColor);
}
`}function ns(e){return`\
struct ${e}Uniforms {
  useByteColors: f32
};

@group(0) @binding(auto) var<uniform> ${e} : ${e}Uniforms;

fn ${e}_normalize(inputColor: vec3<f32>) -> vec3<f32> {
  return select(inputColor, inputColor / 255.0, ${e}.useByteColors > 0.5);
}

fn ${e}_normalize4(inputColor: vec4<f32>) -> vec4<f32> {
  return select(inputColor, inputColor / 255.0, ${e}.useByteColors > 0.5);
}

fn ${e}_premultiplyAlpha(inputColor: vec4<f32>) -> vec4<f32> {
  return vec4<f32>(inputColor.rgb * inputColor.a, inputColor.a);
}

fn ${e}_unpremultiplyAlpha(inputColor: vec4<f32>) -> vec4<f32> {
  return select(
    vec4<f32>(0.0),
    vec4<f32>(inputColor.rgb / inputColor.a, inputColor.a),
    inputColor.a > 0.0
  );
}

fn ${e}_premultiply_alpha(inputColor: vec4<f32>) -> vec4<f32> {
  return ${e}_premultiplyAlpha(inputColor);
}

fn ${e}_unpremultiply_alpha(inputColor: vec4<f32>) -> vec4<f32> {
  return ${e}_unpremultiplyAlpha(inputColor);
}
`}var rs={name:`floatColors`,props:{},uniforms:{},vs:$o,fs:$o,source:es,uniformTypes:Zo,defaultUniforms:Qo},is={props:{},uniforms:{},name:`picking`,uniformTypes:{isActive:`f32`,isAttribute:`f32`,isHighlightActive:`f32`,useByteColors:`f32`,highlightedObjectColor:`vec3<f32>`,highlightColor:`vec4<f32>`},defaultUniforms:{isActive:!1,isAttribute:!1,isHighlightActive:!1,useByteColors:!0,highlightedObjectColor:[0,0,0],highlightColor:[0,1,1,1]},vs:`layout(std140) uniform pickingUniforms {
  float isActive;
  float isAttribute;
  float isHighlightActive;
  float useByteColors;
  vec3 highlightedObjectColor;
  vec4 highlightColor;
} picking;

out vec4 picking_vRGBcolor_Avalid;

// Normalize unsigned byte color to 0-1 range
vec3 picking_normalizeColor(vec3 color) {
  return picking.useByteColors > 0.5 ? color / 255.0 : color;
}

// Normalize unsigned byte color to 0-1 range
vec4 picking_normalizeColor(vec4 color) {
  return picking.useByteColors > 0.5 ? color / 255.0 : color;
}

bool picking_isColorZero(vec3 color) {
  return dot(color, vec3(1.0)) < 0.00001;
}

bool picking_isColorValid(vec3 color) {
  return dot(color, vec3(1.0)) > 0.00001;
}

// Check if this vertex is highlighted 
bool isVertexHighlighted(vec3 vertexColor) {
  vec3 highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
  return
    bool(picking.isHighlightActive) && picking_isColorZero(abs(vertexColor - highlightedObjectColor));
}

// Set the current picking color
void picking_setPickingColor(vec3 pickingColor) {
  pickingColor = picking_normalizeColor(pickingColor);

  if (bool(picking.isActive)) {
    // Use alpha as the validity flag. If pickingColor is [0, 0, 0] fragment is non-pickable
    picking_vRGBcolor_Avalid.a = float(picking_isColorValid(pickingColor));

    if (!bool(picking.isAttribute)) {
      // Stores the picking color so that the fragment shader can render it during picking
      picking_vRGBcolor_Avalid.rgb = pickingColor;
    }
  } else {
    // Do the comparison with selected item color in vertex shader as it should mean fewer compares
    picking_vRGBcolor_Avalid.a = float(isVertexHighlighted(pickingColor));
  }
}

void picking_setPickingAttribute(float value) {
  if (bool(picking.isAttribute)) {
    picking_vRGBcolor_Avalid.r = value;
  }
}

void picking_setPickingAttribute(vec2 value) {
  if (bool(picking.isAttribute)) {
    picking_vRGBcolor_Avalid.rg = value;
  }
}

void picking_setPickingAttribute(vec3 value) {
  if (bool(picking.isAttribute)) {
    picking_vRGBcolor_Avalid.rgb = value;
  }
}
`,fs:`layout(std140) uniform pickingUniforms {
  float isActive;
  float isAttribute;
  float isHighlightActive;
  float useByteColors;
  vec3 highlightedObjectColor;
  vec4 highlightColor;
} picking;

in vec4 picking_vRGBcolor_Avalid;

/*
 * Returns highlight color if this item is selected.
 */
vec4 picking_filterHighlightColor(vec4 color) {
  // If we are still picking, we don't highlight
  if (picking.isActive > 0.5) {
    return color;
  }

  bool selected = bool(picking_vRGBcolor_Avalid.a);

  if (selected) {
    // Blend in highlight color based on its alpha value
    float highLightAlpha = picking.highlightColor.a;
    float blendedAlpha = highLightAlpha + color.a * (1.0 - highLightAlpha);
    float highLightRatio = highLightAlpha / blendedAlpha;

    vec3 blendedRGB = mix(color.rgb, picking.highlightColor.rgb, highLightRatio);
    return vec4(blendedRGB, blendedAlpha);
  } else {
    return color;
  }
}

/*
 * Returns picking color if picking enabled else unmodified argument.
 */
vec4 picking_filterPickingColor(vec4 color) {
  if (bool(picking.isActive)) {
    if (picking_vRGBcolor_Avalid.a == 0.0) {
      discard;
    }
    return picking_vRGBcolor_Avalid;
  }
  return color;
}

/*
 * Returns picking color if picking is enabled if not
 * highlight color if this item is selected, otherwise unmodified argument.
 */
vec4 picking_filterColor(vec4 color) {
  vec4 highlightColor = picking_filterHighlightColor(color);
  return picking_filterPickingColor(highlightColor);
}
`,getUniforms:as};function as(e={},t){let n={},r=Wo(e.useByteColors,!0);return e.highlightedObjectColor===void 0||(e.highlightedObjectColor===null?n.isHighlightActive=!1:(n.isHighlightActive=!0,n.highlightedObjectColor=e.highlightedObjectColor.slice(0,3))),e.highlightColor&&(n.highlightColor=Ko(e.highlightColor,r)),e.isActive!==void 0&&(n.isActive=!!e.isActive,n.isAttribute=!!e.isAttribute),e.useByteColors!==void 0&&(n.useByteColors=!!e.useByteColors),n}var os=`precision highp int;

// #if (defined(SHADER_TYPE_FRAGMENT) && defined(LIGHTING_FRAGMENT)) || (defined(SHADER_TYPE_VERTEX) && defined(LIGHTING_VERTEX))
struct AmbientLight {
  vec3 color;
};

struct PointLight {
  vec3 color;
  vec3 position;
  vec3 attenuation; // 2nd order x:Constant-y:Linear-z:Exponential
};

struct SpotLight {
  vec3 color;
  vec3 position;
  vec3 direction;
  vec3 attenuation;
  vec2 coneCos;
};

struct DirectionalLight {
  vec3 color;
  vec3 direction;
};

struct UniformLight {
  vec3 color;
  vec3 position;
  vec3 direction;
  vec3 attenuation;
  vec2 coneCos;
};

layout(std140) uniform lightingUniforms {
  int enabled;
  int directionalLightCount;
  int pointLightCount;
  int spotLightCount;
  vec3 ambientColor;
  UniformLight lights[5];
} lighting;

PointLight lighting_getPointLight(int index) {
  UniformLight light = lighting.lights[index];
  return PointLight(light.color, light.position, light.attenuation);
}

SpotLight lighting_getSpotLight(int index) {
  UniformLight light = lighting.lights[lighting.pointLightCount + index];
  return SpotLight(light.color, light.position, light.direction, light.attenuation, light.coneCos);
}

DirectionalLight lighting_getDirectionalLight(int index) {
  UniformLight light =
    lighting.lights[lighting.pointLightCount + lighting.spotLightCount + index];
  return DirectionalLight(light.color, light.direction);
}

float getPointLightAttenuation(PointLight pointLight, float distance) {
  return pointLight.attenuation.x
       + pointLight.attenuation.y * distance
       + pointLight.attenuation.z * distance * distance;
}

float getSpotLightAttenuation(SpotLight spotLight, vec3 positionWorldspace) {
  vec3 light_direction = normalize(positionWorldspace - spotLight.position);
  float coneFactor = smoothstep(
    spotLight.coneCos.y,
    spotLight.coneCos.x,
    dot(normalize(spotLight.direction), light_direction)
  );
  float distanceAttenuation = getPointLightAttenuation(
    PointLight(spotLight.color, spotLight.position, spotLight.attenuation),
    distance(spotLight.position, positionWorldspace)
  );
  return distanceAttenuation / max(coneFactor, 0.0001);
}

// #endif
`,ss=`// #if (defined(SHADER_TYPE_FRAGMENT) && defined(LIGHTING_FRAGMENT)) || (defined(SHADER_TYPE_VERTEX) && defined(LIGHTING_VERTEX))
const MAX_LIGHTS: i32 = 5;

struct AmbientLight {
  color: vec3<f32>,
};

struct PointLight {
  color: vec3<f32>,
  position: vec3<f32>,
  attenuation: vec3<f32>, // 2nd order x:Constant-y:Linear-z:Exponential
};

struct SpotLight {
  color: vec3<f32>,
  position: vec3<f32>,
  direction: vec3<f32>,
  attenuation: vec3<f32>,
  coneCos: vec2<f32>,
};

struct DirectionalLight {
  color: vec3<f32>,
  direction: vec3<f32>,
};

struct UniformLight {
  color: vec3<f32>,
  position: vec3<f32>,
  direction: vec3<f32>,
  attenuation: vec3<f32>,
  coneCos: vec2<f32>,
};

struct lightingUniforms {
  enabled: i32,
  directionalLightCount: i32,
  pointLightCount: i32,
  spotLightCount: i32,
  ambientColor: vec3<f32>,
  lights: array<UniformLight, 5>,
};

@group(2) @binding(auto) var<uniform> lighting : lightingUniforms;

fn lighting_getPointLight(index: i32) -> PointLight {
  let light = lighting.lights[index];
  return PointLight(light.color, light.position, light.attenuation);
}

fn lighting_getSpotLight(index: i32) -> SpotLight {
  let light = lighting.lights[lighting.pointLightCount + index];
  return SpotLight(light.color, light.position, light.direction, light.attenuation, light.coneCos);
}

fn lighting_getDirectionalLight(index: i32) -> DirectionalLight {
  let light = lighting.lights[lighting.pointLightCount + lighting.spotLightCount + index];
  return DirectionalLight(light.color, light.direction);
}

fn getPointLightAttenuation(pointLight: PointLight, distance: f32) -> f32 {
  return pointLight.attenuation.x
       + pointLight.attenuation.y * distance
       + pointLight.attenuation.z * distance * distance;
}

fn getSpotLightAttenuation(spotLight: SpotLight, positionWorldspace: vec3<f32>) -> f32 {
  let lightDirection = normalize(positionWorldspace - spotLight.position);
  let coneFactor = smoothstep(
    spotLight.coneCos.y,
    spotLight.coneCos.x,
    dot(normalize(spotLight.direction), lightDirection)
  );
  let distanceAttenuation = getPointLightAttenuation(
    PointLight(spotLight.color, spotLight.position, spotLight.attenuation),
    distance(spotLight.position, positionWorldspace)
  );
  return distanceAttenuation / max(coneFactor, 0.0001);
}
`,cs=5,ls={props:{},uniforms:{},name:`lighting`,defines:{},uniformTypes:{enabled:`i32`,directionalLightCount:`i32`,pointLightCount:`i32`,spotLightCount:`i32`,ambientColor:`vec3<f32>`,lights:[{color:`vec3<f32>`,position:`vec3<f32>`,direction:`vec3<f32>`,attenuation:`vec3<f32>`,coneCos:`vec2<f32>`},cs]},defaultUniforms:ms(),bindingLayout:[{name:`lighting`,group:2}],firstBindingSlot:0,source:ss,vs:os,fs:os,getUniforms:us};function us(e,t={}){if(e&&={...e},!e)return ms();e.lights&&(e={...e,...fs(e.lights),lights:void 0});let{useByteColors:n,ambientLight:r,pointLights:i,spotLights:a,directionalLights:o}=e||{};if(!(r||i&&i.length>0||a&&a.length>0||o&&o.length>0))return{...ms(),enabled:0};let s={...ms(),...ds({useByteColors:n,ambientLight:r,pointLights:i,spotLights:a,directionalLights:o})};return e.enabled!==void 0&&(s.enabled=+!!e.enabled),s}function ds({useByteColors:e,ambientLight:t,pointLights:n=[],spotLights:r=[],directionalLights:a=[]}){let o=hs(),s=0,c=0,l=0,u=0;for(let t of n){if(s>=cs)break;o[s]={...o[s],color:ps(t,e),position:t.position,attenuation:t.attenuation||[1,0,0]},s++,c++}for(let t of r){if(s>=cs)break;o[s]={...o[s],color:ps(t,e),position:t.position,direction:t.direction,attenuation:t.attenuation||[1,0,0],coneCos:_s(t)},s++,l++}for(let t of a){if(s>=cs)break;o[s]={...o[s],color:ps(t,e),direction:t.direction},s++,u++}return n.length+r.length+a.length>cs&&i.warn(`MAX_LIGHTS exceeded, truncating to ${cs}`)(),{ambientColor:ps(t,e),directionalLightCount:u,pointLightCount:c,spotLightCount:l,lights:o}}function fs(e){let t={pointLights:[],spotLights:[],directionalLights:[]};for(let n of e||[])switch(n.type){case`ambient`:t.ambientLight=n;break;case`directional`:t.directionalLights?.push(n);break;case`point`:t.pointLights?.push(n);break;case`spot`:t.spotLights?.push(n)}return t}function ps(e={},t){let{color:n=[0,0,0],intensity:r=1}=e;return Go(n,Wo(t,!0)).map(e=>e*r)}function ms(){return{enabled:1,directionalLightCount:0,pointLightCount:0,spotLightCount:0,ambientColor:[.1,.1,.1],lights:hs()}}function hs(){return Array.from({length:cs},()=>gs())}function gs(){return{color:[1,1,1],position:[1,1,2],direction:[1,1,1],attenuation:[1,0,0],coneCos:[1,0]}}function _s(e){let t=e.innerConeAngle??0,n=e.outerConeAngle??Math.PI/4;return[Math.cos(t),Math.cos(n)]}var vs={props:{},name:`gouraudMaterial`,bindingLayout:[{name:`gouraudMaterial`,group:3}],vs:`layout(std140) uniform gouraudMaterialUniforms {
  uniform bool unlit;
  uniform float ambient;
  uniform float diffuse;
  uniform float shininess;
  uniform vec3  specularColor;
} material;

vec3 lighting_getLightColor(vec3 surfaceColor, vec3 light_direction, vec3 view_direction, vec3 normal_worldspace, vec3 color) {
  vec3 halfway_direction = normalize(light_direction + view_direction);
  float lambertian = dot(light_direction, normal_worldspace);
  float specular = 0.0;
  if (lambertian > 0.0) {
    float specular_angle = max(dot(normal_worldspace, halfway_direction), 0.0);
    specular = pow(specular_angle, material.shininess);
  }
  lambertian = max(lambertian, 0.0);
  return (lambertian * material.diffuse * surfaceColor + specular * floatColors_normalize(material.specularColor)) * color;
}

vec3 lighting_getLightColor(vec3 surfaceColor, vec3 cameraPosition, vec3 position_worldspace, vec3 normal_worldspace) {
  vec3 lightColor = surfaceColor;

  if (material.unlit) {
    return surfaceColor;
  }

  if (lighting.enabled == 0) {
    return lightColor;
  }

  vec3 view_direction = normalize(cameraPosition - position_worldspace);
  lightColor = material.ambient * surfaceColor * lighting.ambientColor;

  for (int i = 0; i < lighting.pointLightCount; i++) {
    PointLight pointLight = lighting_getPointLight(i);
    vec3 light_position_worldspace = pointLight.position;
    vec3 light_direction = normalize(light_position_worldspace - position_worldspace);
    float light_attenuation = getPointLightAttenuation(pointLight, distance(light_position_worldspace, position_worldspace));
    lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color / light_attenuation);
  }

  for (int i = 0; i < lighting.spotLightCount; i++) {
    SpotLight spotLight = lighting_getSpotLight(i);
    vec3 light_position_worldspace = spotLight.position;
    vec3 light_direction = normalize(light_position_worldspace - position_worldspace);
    float light_attenuation = getSpotLightAttenuation(spotLight, position_worldspace);
    lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, spotLight.color / light_attenuation);
  }

  for (int i = 0; i < lighting.directionalLightCount; i++) {
    DirectionalLight directionalLight = lighting_getDirectionalLight(i);
    lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
  }
  
  return lightColor;
}
`,fs:`layout(std140) uniform gouraudMaterialUniforms {
  uniform bool unlit;
  uniform float ambient;
  uniform float diffuse;
  uniform float shininess;
  uniform vec3  specularColor;
} material;
`,source:`struct gouraudMaterialUniforms {
  unlit: u32,
  ambient: f32,
  diffuse: f32,
  shininess: f32,
  specularColor: vec3<f32>,
};

@group(3) @binding(auto) var<uniform> gouraudMaterial : gouraudMaterialUniforms;

fn lighting_getLightColor(surfaceColor: vec3<f32>, light_direction: vec3<f32>, view_direction: vec3<f32>, normal_worldspace: vec3<f32>, color: vec3<f32>) -> vec3<f32> {
  let halfway_direction: vec3<f32> = normalize(light_direction + view_direction);
  var lambertian: f32 = dot(light_direction, normal_worldspace);
  var specular: f32 = 0.0;
  if (lambertian > 0.0) {
    let specular_angle = max(dot(normal_worldspace, halfway_direction), 0.0);
    specular = pow(specular_angle, gouraudMaterial.shininess);
  }
  lambertian = max(lambertian, 0.0);
  return (
    lambertian * gouraudMaterial.diffuse * surfaceColor +
    specular * floatColors_normalize(gouraudMaterial.specularColor)
  ) * color;
}

fn lighting_getLightColor2(surfaceColor: vec3<f32>, cameraPosition: vec3<f32>, position_worldspace: vec3<f32>, normal_worldspace: vec3<f32>) -> vec3<f32> {
  var lightColor: vec3<f32> = surfaceColor;

  if (gouraudMaterial.unlit != 0u) {
    return surfaceColor;
  }

  if (lighting.enabled == 0) {
    return lightColor;
  }

  let view_direction: vec3<f32> = normalize(cameraPosition - position_worldspace);
  lightColor = gouraudMaterial.ambient * surfaceColor * lighting.ambientColor;

  for (var i: i32 = 0; i < lighting.pointLightCount; i++) {
    let pointLight: PointLight = lighting_getPointLight(i);
    let light_position_worldspace: vec3<f32> = pointLight.position;
    let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
    let light_attenuation = getPointLightAttenuation(
      pointLight,
      distance(light_position_worldspace, position_worldspace)
    );
    lightColor += lighting_getLightColor(
      surfaceColor,
      light_direction,
      view_direction,
      normal_worldspace,
      pointLight.color / light_attenuation
    );
  }

  for (var i: i32 = 0; i < lighting.spotLightCount; i++) {
    let spotLight: SpotLight = lighting_getSpotLight(i);
    let light_position_worldspace: vec3<f32> = spotLight.position;
    let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
    let light_attenuation = getSpotLightAttenuation(spotLight, position_worldspace);
    lightColor += lighting_getLightColor(
      surfaceColor,
      light_direction,
      view_direction,
      normal_worldspace,
      spotLight.color / light_attenuation
    );
  }

  for (var i: i32 = 0; i < lighting.directionalLightCount; i++) {
    let directionalLight: DirectionalLight = lighting_getDirectionalLight(i);
    lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
  }  
  
  return lightColor;
}

fn lighting_getSpecularLightColor(cameraPosition: vec3<f32>, position_worldspace: vec3<f32>, normal_worldspace: vec3<f32>) -> vec3<f32>{
  var lightColor = vec3<f32>(0, 0, 0);
  let surfaceColor = vec3<f32>(0, 0, 0);

  if (lighting.enabled != 0) {
    let view_direction = normalize(cameraPosition - position_worldspace);

    for (var i: i32 = 0; i < lighting.pointLightCount; i++) {
      let pointLight: PointLight = lighting_getPointLight(i);
      let light_position_worldspace: vec3<f32> = pointLight.position;
      let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
      let light_attenuation = getPointLightAttenuation(
        pointLight,
        distance(light_position_worldspace, position_worldspace)
      );
      lightColor += lighting_getLightColor(
        surfaceColor,
        light_direction,
        view_direction,
        normal_worldspace,
        pointLight.color / light_attenuation
      );
    }

    for (var i: i32 = 0; i < lighting.spotLightCount; i++) {
      let spotLight: SpotLight = lighting_getSpotLight(i);
      let light_position_worldspace: vec3<f32> = spotLight.position;
      let light_direction: vec3<f32> = normalize(light_position_worldspace - position_worldspace);
      let light_attenuation = getSpotLightAttenuation(spotLight, position_worldspace);
      lightColor += lighting_getLightColor(
        surfaceColor,
        light_direction,
        view_direction,
        normal_worldspace,
        spotLight.color / light_attenuation
      );
    }

    for (var i: i32 = 0; i < lighting.directionalLightCount; i++) {
        let directionalLight: DirectionalLight = lighting_getDirectionalLight(i);
        lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
    }
  }
  return lightColor;
}
`,defines:{LIGHTING_VERTEX:!0},dependencies:[ls,rs],uniformTypes:{unlit:`i32`,ambient:`f32`,diffuse:`f32`,shininess:`f32`,specularColor:`vec3<f32>`},defaultUniforms:{unlit:!1,ambient:.35,diffuse:.6,shininess:32,specularColor:[38.25,38.25,38.25]},getUniforms(e){return{...vs.defaultUniforms,...e}}},ys=`struct LayerUniforms {
  opacity: f32,
};

@group(0) @binding(auto)
var<uniform> layer: LayerUniforms;
`,bs=`layout(std140) uniform layerUniforms {
  uniform float opacity;
} layer;
`,xs={name:`layer`,source:ys,vs:bs,fs:bs,getUniforms:e=>({opacity:e.opacity**(1/2.2)}),uniformTypes:{opacity:`f32`}},Ss={name:`color`,dependencies:[],source:`

@must_use
fn deckgl_premultiplied_alpha(fragColor: vec4<f32>) -> vec4<f32> {
    return vec4(fragColor.rgb * fragColor.a, fragColor.a); 
};
`,getUniforms:e=>({})},Cs=`const SMOOTH_EDGE_RADIUS: f32 = 0.5;

struct VertexGeometry {
  position: vec4<f32>,
  worldPosition: vec3<f32>,
  worldPositionAlt: vec3<f32>,
  normal: vec3<f32>,
  uv: vec2<f32>,
  pickingColor: vec3<f32>,
};

var<private> geometry_: VertexGeometry = VertexGeometry(
  vec4<f32>(0.0, 0.0, 1.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0),
  vec2<f32>(0.0, 0.0),
  vec3<f32>(0.0, 0.0, 0.0)
);

struct FragmentGeometry {
  uv: vec2<f32>,
};

var<private> fragmentGeometry: FragmentGeometry;

fn smoothedge(edge: f32, x: f32) -> f32 {
  return smoothstep(edge - SMOOTH_EDGE_RADIUS, edge + SMOOTH_EDGE_RADIUS, x);
}
`,ws=`#define SMOOTH_EDGE_RADIUS 0.5`,Ts={name:`geometry`,source:Cs,vs:`\
${ws}

struct VertexGeometry {
  vec4 position;
  vec3 worldPosition;
  vec3 worldPositionAlt;
  vec3 normal;
  vec2 uv;
  vec3 pickingColor;
} geometry = VertexGeometry(
  vec4(0.0, 0.0, 1.0, 0.0),
  vec3(0.0),
  vec3(0.0),
  vec3(0.0),
  vec2(0.0),
  vec3(0.0)
);
`,fs:`\
${ws}

struct FragmentGeometry {
  vec2 uv;
};
FragmentGeometry geometry;

float smoothedge(float edge, float x) {
  return smoothstep(edge - SMOOTH_EDGE_RADIUS, edge + SMOOTH_EDGE_RADIUS, x);
}
`},W;(function(e){e[e.Start=1]=`Start`,e[e.Move=2]=`Move`,e[e.End=4]=`End`,e[e.Cancel=8]=`Cancel`})(W||={});var G;(function(e){e[e.None=0]=`None`,e[e.Left=1]=`Left`,e[e.Right=2]=`Right`,e[e.Up=4]=`Up`,e[e.Down=8]=`Down`,e[e.Horizontal=3]=`Horizontal`,e[e.Vertical=12]=`Vertical`,e[e.All=15]=`All`})(G||={});var K;(function(e){e[e.Possible=1]=`Possible`,e[e.Began=2]=`Began`,e[e.Changed=4]=`Changed`,e[e.Ended=8]=`Ended`,e[e.Recognized=8]=`Recognized`,e[e.Cancelled=16]=`Cancelled`,e[e.Failed=32]=`Failed`})(K||={});var Es=`auto`,Ds=`manipulation`,Os=`none`,ks=`pan-x`,As=`pan-y`;function js(e){if(e.includes(`none`))return Os;let t=e.includes(ks),n=e.includes(As);return t&&n?Os:t||n?t?ks:As:e.includes(`manipulation`)?Ds:Es}var Ms=class{constructor(e,t){this.actions=``,this.manager=e,this.set(t)}set(e){e===`compute`&&(e=this.compute()),this.manager.element&&(this.manager.element.style.touchAction=e,this.actions=e)}update(){this.set(this.manager.options.touchAction)}compute(){let e=[];for(let t of this.manager.recognizers)t.options.enable&&(e=e.concat(t.getTouchAction()));return js(e.join(` `))}};function Ns(e){return e.trim().split(/\s+/g)}function Ps(e,t,n){if(e)for(let r of Ns(t))e.addEventListener(r,n,!1)}function Fs(e,t,n){if(e)for(let r of Ns(t))e.removeEventListener(r,n,!1)}function Is(e){return(e.ownerDocument||e).defaultView}function Ls(e,t){let n=e;for(;n;){if(n===t)return!0;n=n.parentNode}return!1}function Rs(e){let t=e.length;if(t===1)return{x:Math.round(e[0].clientX),y:Math.round(e[0].clientY)};let n=0,r=0,i=0;for(;i<t;)n+=e[i].clientX,r+=e[i].clientY,i++;return{x:Math.round(n/t),y:Math.round(r/t)}}function zs(e){let t=[],n=0;for(;n<e.pointers.length;)t[n]={clientX:Math.round(e.pointers[n].clientX),clientY:Math.round(e.pointers[n].clientY)},n++;return{timeStamp:Date.now(),pointers:t,center:Rs(t),deltaX:e.deltaX,deltaY:e.deltaY}}function Bs(e,t){let n=t.x-e.x,r=t.y-e.y;return Math.sqrt(n*n+r*r)}function Vs(e,t){let n=t.clientX-e.clientX,r=t.clientY-e.clientY;return Math.sqrt(n*n+r*r)}function Hs(e,t){let n=t.x-e.x,r=t.y-e.y;return Math.atan2(r,n)*180/Math.PI}function Us(e,t){let n=t.clientX-e.clientX,r=t.clientY-e.clientY;return Math.atan2(r,n)*180/Math.PI}function Ws(e,t){return e===t?G.None:Math.abs(e)>=Math.abs(t)?e<0?G.Left:G.Right:t<0?G.Up:G.Down}function Gs(e,t){let n=t.center,r=e.offsetDelta,i=e.prevDelta,a=e.prevInput;return(t.eventType===W.Start||a?.eventType===W.End)&&(i=e.prevDelta={x:a?.deltaX||0,y:a?.deltaY||0},r=e.offsetDelta={x:n.x,y:n.y}),{deltaX:i.x+(n.x-r.x),deltaY:i.y+(n.y-r.y)}}function Ks(e,t,n){return{x:t/e||0,y:n/e||0}}function qs(e,t){return Vs(t[0],t[1])/Vs(e[0],e[1])}function Js(e,t){return Us(t[1],t[0])-Us(e[1],e[0])}function Ys(e,t){let n=e.lastInterval||t,r=t.timeStamp-n.timeStamp,i,a,o,s;if(t.eventType!==W.Cancel&&(r>25||n.velocity===void 0)){let c=t.deltaX-n.deltaX,l=t.deltaY-n.deltaY,u=Ks(r,c,l);a=u.x,o=u.y,i=Math.abs(u.x)>Math.abs(u.y)?u.x:u.y,s=Ws(c,l),e.lastInterval=t}else i=n.velocity,a=n.velocityX,o=n.velocityY,s=n.direction;t.velocity=i,t.velocityX=a,t.velocityY=o,t.direction=s}function Xs(e,t){return`pointerId`in e?e.pointerId:t}function Zs(e,t){e.movementOrigin=new Map(t.map((e,t)=>[Xs(e,t),{clientX:e.clientX,clientY:e.clientY}])),e.firstMovementTime=void 0}function Qs(e,t){let n=t.pointers.map(Xs);if(e.movementOrigin?.size===n.length&&n.every(t=>e.movementOrigin.has(t))||Zs(e,t.pointers),t.distancePerPointer=t.pointers.map((t,r)=>Vs(e.movementOrigin.get(n[r]),t)),t.eventType&W.Move&&t.distancePerPointer.some(e=>e>0)&&(e.firstMovementTime??=t.timeStamp),t.movementDeltaTime=e.firstMovementTime===void 0?0:t.timeStamp-e.firstMovementTime,t.eventType&(W.End|W.Cancel)){let r=t.changedPointers.map(e=>Xs(e,t.pointers.indexOf(e)));Zs(e,t.pointers.filter((e,t)=>!r.includes(n[t])))}}function $s(e,t){let{session:n}=e,{pointers:r}=t,{length:i}=r;n.firstInput||=zs(t),i>1&&!n.firstMultiple?n.firstMultiple=zs(t):i===1&&(n.firstMultiple=!1);let{firstInput:a,firstMultiple:o}=n,s=o?o.center:a.center,c=t.center=Rs(r);t.timeStamp=Date.now(),t.deltaTime=t.timeStamp-a.timeStamp,Qs(n,t),t.angle=Hs(s,c),t.distance=Bs(s,c);let{deltaX:l,deltaY:u}=Gs(n,t);t.deltaX=l,t.deltaY=u,t.offsetDirection=Ws(t.deltaX,t.deltaY);let d=Ks(t.deltaTime,t.deltaX,t.deltaY);t.overallVelocityX=d.x,t.overallVelocityY=d.y,t.overallVelocity=Math.abs(d.x)>Math.abs(d.y)?d.x:d.y,t.scale=o?qs(o.pointers,r):1,t.rotation=o?Js(o.pointers,r):0,t.maxPointers=n.prevInput?t.pointers.length>n.prevInput.maxPointers?t.pointers.length:n.prevInput.maxPointers:t.pointers.length;let f=e.element;return Ls(t.srcEvent.target,f)&&(f=t.srcEvent.target),t.target=f,Ys(n,t),t}function ec(e,t,n){let r=n.pointers.length,i=n.changedPointers.length,a=t&W.Start&&r-i===0,o=t&(W.End|W.Cancel)&&r-i===0;n.isFirst=!!a,n.isFinal=!!o,a&&(e.session={}),n.eventType=t;let s=$s(e,n);e.emit(`hammer.input`,s),e.recognize(s),e.session.prevInput=s}var tc=class{constructor(e){this.evEl=``,this.evWin=``,this.evTarget=``,this.domHandler=e=>{this.manager.options.enable&&this.handler(e)},this.manager=e,this.element=e.element,this.target=e.options.inputTarget||e.element}callback(e,t){ec(this.manager,e,t)}init(){Ps(this.element,this.evEl,this.domHandler),Ps(this.target,this.evTarget,this.domHandler),Ps(Is(this.element),this.evWin,this.domHandler)}destroy(){Fs(this.element,this.evEl,this.domHandler),Fs(this.target,this.evTarget,this.domHandler),Fs(Is(this.element),this.evWin,this.domHandler)}},nc={pointerdown:W.Start,pointermove:W.Move,pointerup:W.End,pointercancel:W.Cancel,pointerout:W.Cancel},rc=`pointerdown`,ic=`pointermove pointerup pointercancel`,ac=class extends tc{constructor(e){super(e),this.evEl=rc,this.evWin=ic,this.store=this.manager.session.pointerEvents=[],this.init()}handler(e){let{store:t}=this,n=!1,r=nc[e.type],i=e.pointerType,a=i===`touch`,o=t.findIndex(t=>t.pointerId===e.pointerId);r&W.Start&&(e.buttons||a)?o<0&&(t.push(e),o=t.length-1):r&(W.End|W.Cancel)&&(n=!0),!(o<0)&&(t[o]=e,this.callback(r,{pointers:t,changedPointers:[e],eventType:r,pointerType:i,srcEvent:e}),n&&t.splice(o,1))}},oc=[``,`webkit`,`Moz`,`MS`,`ms`,`o`];function sc(e,t){let n=t[0].toUpperCase()+t.slice(1);for(let r of oc){let i=r?r+n:t;if(i in e)return i}}var cc=1,lc=2,uc={touchAction:`compute`,enable:!0,inputTarget:null,cssProps:{userSelect:`none`,userDrag:`none`,touchCallout:`none`,tapHighlightColor:`rgba(0,0,0,0)`}},dc=class{constructor(e,t){this.options={...uc,...t,cssProps:{...uc.cssProps,...t.cssProps},inputTarget:t.inputTarget||e},this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=e,this.input=new ac(this),this.touchAction=new Ms(this,this.options.touchAction),this.toggleCssProps(!0)}set(e){return Object.assign(this.options,e),e.touchAction&&this.touchAction.update(),e.inputTarget&&(this.input.destroy(),this.input.target=e.inputTarget,this.input.init()),this}stop(e){this.session.stopped=e?lc:cc}recognize(e){let{session:t}=this;if(t.stopped)return;this.session.prevented&&e.srcEvent.preventDefault();let n,{recognizers:r}=this,{curRecognizer:i}=t;(!i||i&&i.state&K.Recognized)&&(i=t.curRecognizer=null);let a=0;for(;a<r.length;)n=r[a],t.stopped!==lc&&(!i||n===i||n.canRecognizeWith(i))?n.recognize(e):n.reset(),!i&&n.state&(K.Began|K.Changed|K.Ended)&&(i=t.curRecognizer=n),a++}get(e){let{recognizers:t}=this;for(let n=0;n<t.length;n++)if(t[n].options.event===e)return t[n];return null}add(e){if(Array.isArray(e)){for(let t of e)this.add(t);return this}let t=this.get(e.options.event);return t&&this.remove(t),this.recognizers.push(e),e.manager=this,this.touchAction.update(),e}remove(e){if(Array.isArray(e)){for(let t of e)this.remove(t);return this}let t=typeof e==`string`?this.get(e):e;if(t){let{recognizers:e}=this,n=e.indexOf(t);n!==-1&&(e.splice(n,1),this.touchAction.update())}return this}on(e,t){if(!e||!t)return;let{handlers:n}=this;for(let r of Ns(e))n[r]=n[r]||[],n[r].push(t)}off(e,t){if(!e)return;let{handlers:n}=this;for(let r of Ns(e))t?n[r]&&n[r].splice(n[r].indexOf(t),1):delete n[r]}emit(e,t){let n=this.handlers[e]&&this.handlers[e].slice();if(!n||!n.length)return;let r=t;r.type=e,r.preventDefault=function(){t.srcEvent.preventDefault()};let i=0;for(;i<n.length;)n[i](r),i++}destroy(){this.toggleCssProps(!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}toggleCssProps(e){let{element:t}=this;if(t){for(let[n,r]of Object.entries(this.options.cssProps)){let i=sc(t.style,n);e?(this.oldCssProps[i]=t.style[i],t.style[i]=r):t.style[i]=this.oldCssProps[i]||``}e||(this.oldCssProps={})}}},fc=1;function pc(){return fc++}function mc(e){return e&K.Cancelled?`cancel`:e&K.Ended?`end`:e&K.Changed?`move`:e&K.Began?`start`:``}var hc=class{constructor(e){this.options=e,this.id=pc(),this.state=K.Possible,this.simultaneous={},this.requireFail=[]}set(e){return Object.assign(this.options,e),this.manager.touchAction.update(),this}recognizeWith(e){if(Array.isArray(e)){for(let t of e)this.recognizeWith(t);return this}let t;if(typeof e==`string`){if(t=this.manager.get(e),!t)throw Error(`Cannot find recognizer ${e}`)}else t=e;let{simultaneous:n}=this;return n[t.id]||(n[t.id]=t,t.recognizeWith(this)),this}dropRecognizeWith(e){if(Array.isArray(e)){for(let t of e)this.dropRecognizeWith(t);return this}let t;return t=typeof e==`string`?this.manager.get(e):e,t&&delete this.simultaneous[t.id],this}requireFailure(e){if(Array.isArray(e)){for(let t of e)this.requireFailure(t);return this}let t;if(typeof e==`string`){if(t=this.manager.get(e),!t)throw Error(`Cannot find recognizer ${e}`)}else t=e;let{requireFail:n}=this;return n.indexOf(t)===-1&&(n.push(t),t.requireFailure(this)),this}dropRequireFailure(e){if(Array.isArray(e)){for(let t of e)this.dropRequireFailure(t);return this}let t;if(t=typeof e==`string`?this.manager.get(e):e,t){let e=this.requireFail.indexOf(t);e>-1&&this.requireFail.splice(e,1)}return this}hasRequireFailures(){return!!this.requireFail.find(e=>e.options.enable)}canRecognizeWith(e){return!!this.simultaneous[e.id]}emit(e){if(!e)return;let{state:t}=this;t<K.Ended&&this.manager.emit(this.options.event+mc(t),e),this.manager.emit(this.options.event,e),e.additionalEvent&&this.manager.emit(e.additionalEvent,e),t>=K.Ended&&this.manager.emit(this.options.event+mc(t),e)}tryEmit(e){this.canEmit()?this.emit(e):this.state=K.Failed}canEmit(){let e=0;for(;e<this.requireFail.length;){if(!(this.requireFail[e].state&(K.Failed|K.Possible)))return!1;e++}return!0}recognize(e){let t={...e};if(!this.options.enable){this.reset(),this.state=K.Failed;return}this.state&(K.Recognized|K.Cancelled|K.Failed)&&(this.state=K.Possible),this.state=this.process(t),this.state&(K.Began|K.Changed|K.Ended|K.Cancelled)&&this.tryEmit(t)}getEventNames(){return[this.options.event]}reset(){}};function gc(e){return Math.abs(((e+180)%360+360)%360-180)}function _c(e,t){return(t.distance===void 0||e.distance>=t.distance)&&(t.distancePerPointer===void 0||e.distancePerPointer.length>0&&e.distancePerPointer.every(e=>e>=t.distancePerPointer))&&(t.movementDeltaTime===void 0||e.movementDeltaTime>=t.movementDeltaTime)&&(t.rotation===void 0||gc(e.rotation)>=t.rotation)&&(t.scale===void 0||Math.abs(e.scale-1)>=t.scale)}var vc=class extends hc{attrTest(e){let t=this.options.pointers;return t===0||e.pointers.length===t}coherentTest(e){let t=this.options.coherent;return!t?.length||t.some(t=>_c(e,t))}process(e){let{state:t}=this,{eventType:n}=e,r=t&(K.Began|K.Changed),i=this.attrTest(e);return r&&(n&W.Cancel||!i)?t|K.Cancelled:r||i?n&W.End?t|K.Ended:t&K.Began?t|K.Changed:K.Began:K.Failed}},yc=[``,`start`,`move`,`end`,`cancel`],bc=class extends hc{constructor(e={}){super({enable:!0,event:`doubleclickdrag`,pointers:1,interval:500,time:350,threshold:28,dragThreshold:1,pixelsPerScale:120,...e}),this._tapStart=null,this._lastTap=null,this._drag=null,this._emittedStart=!1}getTouchAction(){return[Ds]}getEventNames(){return yc.map(e=>this.options.event+e)}process(e){let{options:t}=this;return e.pointers.length===t.pointers?e.eventType&W.Start?this._handleStart(e):e.eventType&W.Move?this._handleMove(e):e.eventType&W.Cancel?this._handleEnd(e,!0):e.eventType&W.End?this._handleEnd(e,!1):K.Failed:(this.reset(),K.Failed)}reset(){this._tapStart=null,this._lastTap=null,this._drag=null,this._emittedStart=!1}emit(e){if(e){if(this.state===K.Began){if(!this._drag?.active||this._emittedStart)return;this._emittedStart=!0,this.manager.emit(`${this.options.event}start`,e),this.manager.emit(this.options.event,e);return}if(this.state===K.Changed){if(!this._emittedStart)return;this.manager.emit(`${this.options.event}move`,e),this.manager.emit(this.options.event,e);return}if(this.state===K.Ended){if(!this._emittedStart)return;this.manager.emit(this.options.event,e),this.manager.emit(`${this.options.event}end`,e),this._emittedStart=!1;return}if(this.state===K.Cancelled){if(!this._emittedStart)return;this.manager.emit(this.options.event,e),this.manager.emit(`${this.options.event}cancel`,e),this._emittedStart=!1}}}_handleStart(e){let t=this._getPointerId(e);return this._lastTap&&this._isTapMatch(e,this._lastTap)?(this._tapStart=null,this._lastTap=null,this._drag={startCenter:e.center,pointerId:t,active:!1},this._emittedStart=!1,K.Began):(this._tapStart={center:e.center,timeStamp:e.timeStamp,pointerId:t},this._lastTap=null,this._drag=null,this._emittedStart=!1,K.Failed)}_handleMove(e){if(!this._drag||!this._isSamePointer(e,this._drag.pointerId))return K.Failed;let t=this._drag.startCenter.y-e.center.y;return!this._drag.active&&Math.abs(t)<this.options.dragThreshold?K.Began:(this._drag.active=!0,e.scale=2**(t/this.options.pixelsPerScale),this._emittedStart?K.Changed:K.Began)}_handleEnd(e,t){if(this._drag&&this._isSamePointer(e,this._drag.pointerId)){let{active:n,startCenter:r}=this._drag;return this._drag=null,this._tapStart=null,this._lastTap=null,n?(e.scale=2**((r.y-e.center.y)/this.options.pixelsPerScale),t?K.Cancelled:K.Ended):(this._emittedStart=!1,K.Failed)}return!this._tapStart||!this._isSamePointer(e,this._tapStart.pointerId)?(t&&this.reset(),K.Failed):(this._lastTap=this._isValidTap(e)?{center:e.center,timeStamp:e.timeStamp,pointerId:this._tapStart.pointerId}:null,this._tapStart=null,K.Failed)}_isTapMatch(e,t){return e.timeStamp-t.timeStamp<=this.options.interval&&Bs(e.center,t.center)<=this.options.threshold}_isValidTap(e){return e.deltaTime<=this.options.time&&e.distance<=this.options.threshold}_getPointerId(e){return`pointerId`in e.srcEvent?e.srcEvent.pointerId:null}_isSamePointer(e,t){return t===null||this._getPointerId(e)===t}},xc=class extends hc{constructor(e={}){super({enable:!0,event:`tap`,pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10,...e}),this.pTime=null,this.pCenter=null,this._timer=null,this._input=null,this.count=0}getTouchAction(){return[Ds]}process(e){let{options:t}=this,n=e.pointers.length===t.pointers,r=e.distance<t.threshold,i=e.deltaTime<t.time;if(this.reset(),e.eventType&W.Start&&this.count===0)return this.failTimeout();if(r&&i&&n){if(e.eventType!==W.End)return this.failTimeout();let n=!this.pTime||e.timeStamp-this.pTime<t.interval,r=!this.pCenter||Bs(this.pCenter,e.center)<t.posThreshold;if(this.pTime=e.timeStamp,this.pCenter=e.center,!r||!n?this.count=1:this.count+=1,this._input=e,this.count%t.taps===0)return this.hasRequireFailures()?(this._timer=setTimeout(()=>{this.state=K.Recognized,this.tryEmit(this._input)},t.interval),K.Began):K.Recognized}return K.Failed}failTimeout(){return this._timer=setTimeout(()=>{this.state=K.Failed},this.options.interval),K.Failed}reset(){clearTimeout(this._timer)}emit(e){this.state===K.Recognized&&(e.tapCount=this.count,this.manager.emit(this.options.event,e))}},Sc=class extends vc{constructor(){super(...arguments),this.wheelSession=null,this.wheelSessionUnsubscribe=null,this.handleWheelSessionEvent=e=>{e.device===`trackpad`&&this.handleTrackpadEvent(e)}}set(e){let{wheelSession:t,...n}=e;return t&&t!==this.wheelSession&&(this.wheelSessionUnsubscribe?.(),this.wheelSessionUnsubscribe=null,this.wheelSession=t),super.set(n),this.updateWheelSessionSubscription(),this}getTrackpadInput(e,t={}){let{srcEvent:n}=e,r=t.deltaX??e.deltaX,i=t.deltaY??e.deltaY,a=Ws(r,i),o=Math.sqrt(e.deltaX*e.deltaX+e.deltaY*e.deltaY),s=n;return{pointers:[s,s],changedPointers:[s,s],pointerType:`trackpad`,srcEvent:s,eventType:e.eventType,timeStamp:e.timeStamp,deltaTime:e.deltaTime,center:e.center,deltaX:r,deltaY:i,angle:Math.atan2(i,r)*180/Math.PI,distance:Math.sqrt(r*r+i*i),distancePerPointer:[o,o],movementDeltaTime:e.deltaTime,scale:1,rotation:0,direction:a,offsetDirection:a,velocity:e.velocity,velocityX:e.velocityX,velocityY:e.velocityY,overallVelocity:e.overallVelocity,overallVelocityX:e.overallVelocityX,overallVelocityY:e.overallVelocityY,maxPointers:2,target:n.target||this.manager.element,additionalEvent:``,...t}}updateWheelSessionSubscription(){let e=!!(this.wheelSession&&this.options.enable&&this.options.trackpad&&this.options.pointers===2);e&&!this.wheelSessionUnsubscribe?this.wheelSessionUnsubscribe=this.wheelSession.on(this.handleWheelSessionEvent):!e&&this.wheelSessionUnsubscribe&&(this.wheelSessionUnsubscribe(),this.wheelSessionUnsubscribe=null)}},Cc=[``,`start`,`move`,`end`,`cancel`,`up`,`down`,`left`,`right`],wc=class extends Sc{constructor(e={}){super({enable:!0,pointers:1,event:`pan`,threshold:10,direction:G.All,trackpad:!1,coherent:[],...e}),this.trackpadGesture=!1,this.pX=null,this.pY=null}getTouchAction(){let{options:{direction:e}}=this,t=[];return e&G.Horizontal&&t.push(As),e&G.Vertical&&t.push(ks),t}getEventNames(){return Cc.map(e=>this.options.event+e)}directionTest(e){let{options:t}=this,n=!0,{distance:r}=e,{direction:i}=e,a=e.deltaX,o=e.deltaY;return i&t.direction||(t.direction&G.Horizontal?(i=a===0?G.None:a<0?G.Left:G.Right,n=a!==this.pX,r=Math.abs(e.deltaX)):(i=o===0?G.None:o<0?G.Up:G.Down,n=o!==this.pY,r=Math.abs(e.deltaY))),e.direction=i,n&&r>t.threshold&&!!(i&t.direction)}attrTest(e){let t=!!(this.state&K.Began),n=!(this.options.coherent?.length&&e.eventType&(W.End|W.Cancel));return super.attrTest(e)&&(t||n&&this.coherentTest(e)&&this.directionTest(e))}emit(e){this.pX=e.deltaX,this.pY=e.deltaY;let t=G[e.direction].toLowerCase();t&&(e.additionalEvent=this.options.event+t),super.emit(e)}handleTrackpadEvent(e){e.isFirst&&(this.trackpadGesture=!e.srcEvent.ctrlKey,!this.trackpadGesture&&this.state&(K.Recognized|K.Cancelled|K.Failed)&&(this.state=K.Possible)),this.trackpadGesture&&(this.recognize(this.getTrackpadInput(e,{deltaX:-e.deltaX,deltaY:-e.deltaY,velocity:-e.velocity,velocityX:-e.velocityX,velocityY:-e.velocityY,overallVelocity:-e.overallVelocity,overallVelocityX:-e.overallVelocityX,overallVelocityY:-e.overallVelocityY})),e.isFinal&&(this.trackpadGesture=!1))}},Tc=[``,`start`,`move`,`end`,`cancel`,`in`,`out`],Ec=class extends Sc{constructor(e={}){super({enable:!0,event:`pinch`,threshold:0,pointers:2,trackpad:!1,coherent:[],...e}),this.trackpadGesture=!1}getTouchAction(){return[Os]}getEventNames(){return Tc.map(e=>this.options.event+e)}attrTest(e){let t=!!this.options.coherent?.length,n=!!(this.state&K.Began),r=!(t&&e.eventType&(W.End|W.Cancel));return super.attrTest(e)&&(n||r&&(t?this.coherentTest(e):Math.abs(e.scale-1)>this.options.threshold))}emit(e){if(e.scale!==1){let t=e.scale<1?`in`:`out`;e.additionalEvent=this.options.event+t}super.emit(e)}handleTrackpadEvent(e){e.isFirst&&(this.trackpadGesture=e.srcEvent.ctrlKey,!this.trackpadGesture&&this.state&(K.Recognized|K.Cancelled|K.Failed)&&(this.state=K.Possible)),this.trackpadGesture&&(this.recognize(this.getTrackpadInput(e,{deltaX:0,deltaY:0,velocity:0,velocityX:0,velocityY:0,overallVelocity:0,overallVelocityX:0,overallVelocityY:0,scale:Math.exp(-e.deltaY/100)})),e.isFinal&&(this.trackpadGesture=!1))}},Dc=class{constructor(e,t,n){this.element=e,this.callback=t,this.options=n}listen(e,t){t?this.element.addEventListener(e,this.handleEvent,{passive:!1}):this.element.removeEventListener(e,this.handleEvent)}},Oc=(typeof navigator<`u`&&navigator.userAgent?navigator.userAgent.toLowerCase():``).indexOf(`firefox`)!==-1,kc=40,Ac=.25,jc=class extends Dc{constructor(e,t,n){n.enable=n.enable??!1,super(e,t,n),this.handleEvent=e=>{if(!this.options.enable)return;let t=e.deltaY;globalThis.WheelEvent&&(Oc&&e.deltaMode===globalThis.WheelEvent.DOM_DELTA_PIXEL&&(t/=globalThis.devicePixelRatio),e.deltaMode===globalThis.WheelEvent.DOM_DELTA_LINE&&(t*=kc)),e.shiftKey&&t&&(t*=Ac),this.callback({type:`wheel`,center:{x:e.clientX,y:e.clientY},delta:-t,device:this.options.wheelSession?.device??`unknown`,srcEvent:e,pointerType:`mouse`,target:e.target})},n.enable&&(this.wheelSessionUnsubscribe=this.options.wheelSession?.on(()=>{}),this.listen(`wheel`,!0))}destroy(){this.listen(`wheel`,!1),this.wheelSessionUnsubscribe?.(),this.wheelSessionUnsubscribe=void 0}enableEventType(e,t){e===`wheel`&&this.options.enable!==t&&(this.options.enable=t,t&&!this.wheelSessionUnsubscribe&&(this.wheelSessionUnsubscribe=this.options.wheelSession?.on(()=>{})),this.listen(`wheel`,t),t||(this.wheelSessionUnsubscribe?.(),this.wheelSessionUnsubscribe=void 0))}},Mc=4.000244140625,Nc=40,Pc=0,Fc=1,Ic=40,Lc=40,Rc=120,zc={classificationDelay:32,endDelay:80},Bc=class{constructor(e,t={}){this.subscriptions=new Map,this.session=null,this.classificationTimer=null,this.endTimer=null,this.pressedControlKeys=new Set,this.listeningForControlKeys=!1,this.handleEvent=e=>{if(!this.hasSubscribers)return`unknown`;let t=Hc(e,this.pressedControlKeys.size>0),n=this.session;if(n&&t.timeStamp-n.lastTimeStamp>=this.options.endDelay){if(this.end(),!this.hasSubscribers)return`unknown`;n=null}n?(this.scheduleEnd(),this.addSample(n,t)):(n=this.startPendingSession(t),this.scheduleEnd());let{device:r}=n;return r===`unknown`&&(r=Uc(n.samples,!1),r!==`unknown`&&this.begin(n,r)),r},this.finishClassification=()=>{if(this.classificationTimer=null,!this.session||this.session.device!==`unknown`)return;let e=this.session,t=Uc(e.samples,!0);this.begin(e,t===`unknown`?`mouse`:t)},this.end=()=>{if(!this.session)return;if(this.session.device===`unknown`){let e=this.session,t=Uc(e.samples,!0);this.begin(e,t===`unknown`?`mouse`:t)}if(!this.session)return;let e=this.session;this.emit(W.End,e.lastEvent),this.reset()},this.handleKeyDown=e=>{e.key===`Control`&&this.pressedControlKeys.add(e.code||e.key)},this.handleKeyUp=e=>{e.key===`Control`&&(e.code?this.pressedControlKeys.delete(e.code):this.pressedControlKeys.clear())},this.handleWindowBlur=()=>{this.pressedControlKeys.clear()},this.element=e,this.options={...zc,...t},this.element?.addEventListener(`wheel`,this.handleEvent,{passive:!0})}get hasSubscribers(){return this.subscriptions.size>0}get device(){return this.session?.device??`unknown`}on(e){let t={listener:e};return this.subscriptions.set(e,t),this.updateControlKeyEventListeners(),()=>{this.subscriptions.get(e)===t&&this.off(e)}}off(e){this.subscriptions.delete(e),this.updateControlKeyEventListeners(),this.hasSubscribers||this.reset()}cancel(){let e=this.session;e&&e.device!==`unknown`&&this.emit(W.Cancel,e.lastEvent),this.reset()}destroy(){this.cancel(),this.subscriptions.clear(),this.updateControlKeyEventListeners(),this.element?.removeEventListener(`wheel`,this.handleEvent)}startPendingSession(e){let t={samples:[e],device:`unknown`,firstTimeStamp:e.timeStamp,lastTimeStamp:e.timeStamp,totalDeltaX:e.deltaX,totalDeltaY:e.deltaY,velocityX:0,velocityY:0,lastEvent:e.event};return this.session=t,this.classificationTimer=globalThis.setTimeout(this.finishClassification,this.options.classificationDelay),t}addSample(e,t){if(e.samples.push(t),e.lastTimeStamp=t.timeStamp,e.lastEvent=t.event,e.totalDeltaX+=t.deltaX,e.totalDeltaY+=t.deltaY,e.device!==`unknown`){let n=e.samples[e.samples.length-2],r=t.timeStamp-n.timeStamp;e.velocityX=r>0?t.deltaX/r:0,e.velocityY=r>0?t.deltaY/r:0,this.emit(W.Move,t.event,{velocityX:e.velocityX,velocityY:e.velocityY})}}begin(e,t){e.device=t,this.clearClassificationTimer(),this.emit(W.Start,e.samples[0].event);let n=e.lastTimeStamp-e.firstTimeStamp;e.velocityX=n>0?e.totalDeltaX/n:0,e.velocityY=n>0?e.totalDeltaY/n:0,this.emit(W.Move,e.lastEvent,{velocityX:e.velocityX,velocityY:e.velocityY})}scheduleEnd(){this.clearEndTimer(),this.endTimer=globalThis.setTimeout(this.end,this.options.endDelay)}emit(e,t,n){let r=this.session;if(!r||r.device===`unknown`)return;let i=e===W.Start,a=e===W.End||e===W.Cancel,o=i?r.firstTimeStamp:r.lastTimeStamp,s=i?0:Math.max(0,o-r.firstTimeStamp),c=i?0:r.totalDeltaX,l=i?0:r.totalDeltaY,u=s>0?c/s:0,d=s>0?l/s:0,f=i?0:n?.velocityX??r.velocityX,p=i?0:n?.velocityY??r.velocityY,m={eventType:e,device:r.device,srcEvent:t,timeStamp:o,center:{x:t.clientX,y:t.clientY},deltaX:c,deltaY:l,deltaTime:s,velocity:Math.abs(f)>Math.abs(p)?f:p,velocityX:f,velocityY:p,overallVelocity:Math.abs(u)>Math.abs(d)?u:d,overallVelocityX:u,overallVelocityY:d,isFirst:i,isFinal:a};for(let{listener:e}of[...this.subscriptions.values()])e(m)}reset(){this.clearClassificationTimer(),this.clearEndTimer(),this.session=null}clearClassificationTimer(){this.classificationTimer!==null&&(globalThis.clearTimeout(this.classificationTimer),this.classificationTimer=null)}clearEndTimer(){this.endTimer!==null&&(globalThis.clearTimeout(this.endTimer),this.endTimer=null)}updateControlKeyEventListeners(){let e=this.hasSubscribers,t=Vc();t&&e!==this.listeningForControlKeys&&(this.listeningForControlKeys=e,e?(t.addEventListener(`keydown`,this.handleKeyDown,!0),t.addEventListener(`keyup`,this.handleKeyUp,!0),t.addEventListener(`blur`,this.handleWindowBlur)):(t.removeEventListener(`keydown`,this.handleKeyDown,!0),t.removeEventListener(`keyup`,this.handleKeyUp,!0),t.removeEventListener(`blur`,this.handleWindowBlur),this.pressedControlKeys.clear()))}};function Vc(){return typeof window<`u`?window:globalThis.document?.defaultView}function Hc(e,t){let n=e.deltaX,r=e.deltaY;return e.deltaMode===Fc&&(n*=Nc,r*=Nc),{event:e,timeStamp:e.timeStamp,deltaX:n,deltaY:r,isControlKeyDown:t}}function Uc(e,t){return e.some(({event:e,isControlKeyDown:t})=>e.ctrlKey&&!t)?`trackpad`:e.some(({event:e})=>e.deltaMode!==Pc)||e.some(Wc)||e.every(({event:e})=>{let t=e.wheelDelta;return t!==void 0&&Math.abs(t)%40==0})?`mouse`:e.some(({deltaX:e})=>e!==0)||e.length>1&&Gc(e)?`trackpad`:t?`mouse`:`unknown`}function Wc({event:e,deltaX:t,deltaY:n}){if(t!==0||n===0)return!1;let r=Math.abs(n/Mc);if(Number.isInteger(r))return!0;let i=e.wheelDelta;return typeof i==`number`&&i!==0&&i%Rc===0}function Gc(e){for(let t=0;t<e.length;t++){let n=e[t];if(Math.abs(n.deltaX)>Lc||Math.abs(n.deltaY)>Lc||t>0&&n.timeStamp-e[t-1].timeStamp>Ic)return!1}return!0}var Kc=[`mousedown`,`mousemove`,`mouseup`,`mouseover`,`mouseout`,`mouseenter`,`mouseleave`],qc=class extends Dc{constructor(e,t,n){super(e,t,{enable:!0,...n}),this.handleEvent=e=>{this.handleOverEvent(e),this.handleOutEvent(e),this.handleEnterEvent(e),this.handleLeaveEvent(e),this.handleMoveEvent(e)},this.pressed=!1;let{enable:r=!1}=this.options;this.enableMoveEvent=r,this.enableLeaveEvent=r,this.enableEnterEvent=r,this.enableOutEvent=r,this.enableOverEvent=r,r&&Kc.forEach(e=>this.listen(e,!0))}destroy(){Kc.forEach(e=>this.listen(e,!1))}enableEventType(e,t){switch(e){case`pointermove`:this.enableMoveEvent!==t&&(this.enableMoveEvent=t,this.listen(`mousedown`,t),this.listen(`mousemove`,t),this.listen(`mouseup`,t));break;case`pointerover`:this.enableOverEvent!==t&&(this.enableOverEvent=t,this.listen(`mouseover`,t));break;case`pointerout`:this.enableOutEvent!==t&&(this.enableOutEvent=t,this.listen(`mouseout`,t));break;case`pointerenter`:this.enableEnterEvent!==t&&(this.enableEnterEvent=t,this.listen(`mouseenter`,t));break;case`pointerleave`:this.enableLeaveEvent!==t&&(this.enableLeaveEvent=t,this.listen(`mouseleave`,t))}}handleOverEvent(e){this.enableOverEvent&&e.type===`mouseover`&&this._emit(`pointerover`,e)}handleOutEvent(e){this.enableOutEvent&&e.type===`mouseout`&&this._emit(`pointerout`,e)}handleEnterEvent(e){this.enableEnterEvent&&e.type===`mouseenter`&&this._emit(`pointerenter`,e)}handleLeaveEvent(e){this.enableLeaveEvent&&e.type===`mouseleave`&&this._emit(`pointerleave`,e)}handleMoveEvent(e){if(this.enableMoveEvent)switch(e.type){case`mousedown`:e.button>=0&&(this.pressed=!0);break;case`mousemove`:e.buttons===0&&(this.pressed=!1),this.pressed||this._emit(`pointermove`,e);break;case`mouseup`:this.pressed=!1}}_emit(e,t){this.callback({type:e,center:{x:t.clientX,y:t.clientY},srcEvent:t,pointerType:`mouse`,target:t.target})}},Jc=[`keydown`,`keyup`],Yc=class extends Dc{constructor(e,t,n){super(e,t,{enable:!0,tabIndex:0,...n}),this.handleEvent=e=>{let t=e.target||e.srcElement;t.tagName===`INPUT`&&t.type===`text`||t.tagName===`TEXTAREA`||(this.enableDownEvent&&e.type===`keydown`&&this.callback({type:`keydown`,srcEvent:e,key:e.key,target:e.target}),this.enableUpEvent&&e.type===`keyup`&&this.callback({type:`keyup`,srcEvent:e,key:e.key,target:e.target}))};let{enable:r=!1}=this.options;this.enableDownEvent=r,this.enableUpEvent=r,e.tabIndex=this.options.tabIndex,e.style.outline=`none`,r&&Jc.forEach(e=>this.listen(e,!0))}destroy(){Jc.forEach(e=>this.listen(e,!1))}enableEventType(e,t){e===`keydown`&&this.enableDownEvent!==t&&(this.enableDownEvent=t,this.listen(e,t)),e===`keyup`&&this.enableUpEvent!==t&&(this.enableUpEvent=t,this.listen(e,t))}},Xc=class extends Dc{constructor(e,t,n){n.enable=n.enable??!1,super(e,t,n),this.handleEvent=e=>{this.options.enable&&this.callback({type:`contextmenu`,center:{x:e.clientX,y:e.clientY},srcEvent:e,pointerType:`mouse`,target:e.target})},n.enable&&this.listen(`contextmenu`,!0)}destroy(){this.listen(`contextmenu`,!1)}enableEventType(e,t){e===`contextmenu`&&this.options.enable!==t&&(this.options.enable=t,this.listen(`contextmenu`,t))}},Zc=1,Qc=2,$c=4,el={pointerdown:Zc,pointermove:Qc,pointerup:$c,mousedown:Zc,mousemove:Qc,mouseup:$c},tl=0,nl=1,rl=2,il=1,al=2,ol=4;function sl(e){let t=el[e.srcEvent.type];if(!t)return null;let{buttons:n,button:r}=e.srcEvent,i=!1,a=!1,o=!1;return t===Qc?(i=!!(n&il),a=!!(n&ol),o=!!(n&al)):(i=r===tl,a=r===nl,o=r===rl),{leftButton:i,middleButton:a,rightButton:o}}function cl(e,t){let n=e.center;if(!n)return null;let r=t.getBoundingClientRect(),i=r.width/t.offsetWidth||1,a=r.height/t.offsetHeight||1;return{center:n,offsetCenter:{x:(n.x-r.left-t.clientLeft)/i,y:(n.y-r.top-t.clientTop)/a}}}var ll={srcElement:`root`,priority:0},ul=class{constructor(e,t){this.handleEvent=e=>{if(this.isEmpty())return;let t=this._normalizeEvent(e),n=e.srcEvent.target;for(;n&&n!==t.rootElement;){if(this._emit(t,n),t.handled)return;n=n.parentNode}this._emit(t,`root`)},this.eventManager=e,this.recognizerName=t,this.handlers=[],this.handlersByElement=new Map,this._active=!1}isEmpty(){return!this._active}add(e,t,n,r=!1,i=!1){let{handlers:a,handlersByElement:o}=this,s={...ll,...n},c=o.get(s.srcElement);c||(c=[],o.set(s.srcElement,c));let l={type:e,handler:t,srcElement:s.srcElement,priority:s.priority};r&&(l.once=!0),i&&(l.passive=!0),a.push(l),this._active=this._active||!l.passive;let u=c.length-1;for(;u>=0&&!(c[u].priority>=l.priority);)u--;c.splice(u+1,0,l)}remove(e,t){let{handlers:n,handlersByElement:r}=this;for(let i=n.length-1;i>=0;i--){let a=n[i];if(a.type===e&&a.handler===t){n.splice(i,1);let e=r.get(a.srcElement);e.splice(e.indexOf(a),1),e.length===0&&r.delete(a.srcElement)}}this._active=n.some(e=>!e.passive)}_emit(e,t){let n=this.handlersByElement.get(t);if(n){let t=!1,r=()=>{e.handled=!0},i=()=>{e.handled=!0,t=!0},a=[];for(let o=0;o<n.length;o++){let{type:s,handler:c,once:l}=n[o];if(c({...e,type:s,stopPropagation:r,stopImmediatePropagation:i}),l&&a.push(n[o]),t)break}for(let e=0;e<a.length;e++){let{type:t,handler:n}=a[e];this.remove(t,n)}}}_normalizeEvent(e){let t=this.eventManager.getElement();return{...e,...sl(e),...cl(e,t),preventDefault:()=>{e.srcEvent.preventDefault()},stopImmediatePropagation:null,stopPropagation:null,handled:!1,rootElement:t}}};function dl(e){if(`recognizer`in e)return e;let t,n=Array.isArray(e)?[...e]:[e];return t=typeof n[0]==`function`?new(n.shift())(n.shift()||{}):n.shift(),{recognizer:t,recognizeWith:typeof n[0]==`string`?[n[0]]:n[0],requireFailure:typeof n[1]==`string`?[n[1]]:n[1]}}var fl=class{constructor(e=null,t={}){if(this._onBasicInput=e=>{this.manager.emit(e.srcEvent.type,e)},this._onOtherEvent=e=>{this.manager.emit(e.type,e)},this.options={recognizers:[],events:{},touchAction:`compute`,tabIndex:0,cssProps:{},...t},this.events=new Map,this.element=e,this.wheelSession=new Bc(e),e){this.manager=new dc(e,this.options);for(let e of this.options.recognizers){let{recognizer:t,recognizeWith:n,requireFailure:r}=dl(e);this.manager.add(t),n&&t.recognizeWith(n),r&&t.requireFailure(r)}this.manager.on(`hammer.input`,this._onBasicInput),this.wheelInput=new jc(e,this._onOtherEvent,{enable:!1,wheelSession:this.wheelSession}),this.moveInput=new qc(e,this._onOtherEvent,{enable:!1}),this.keyInput=new Yc(e,this._onOtherEvent,{enable:!1,tabIndex:t.tabIndex}),this.contextmenuInput=new Xc(e,this._onOtherEvent,{enable:!1}),this.on(this.options.events)}}getElement(){return this.element}destroy(){if(!this.element){this.wheelSession.destroy();return}this.wheelInput.destroy(),this.wheelSession.destroy(),this.moveInput.destroy(),this.keyInput.destroy(),this.contextmenuInput.destroy(),this.manager.destroy()}on(e,t,n){this._addEventHandler(e,t,n,!1)}once(e,t,n){this._addEventHandler(e,t,n,!0)}watch(e,t,n){this._addEventHandler(e,t,n,!1,!0)}off(e,t){this._removeEventHandler(e,t)}emit(e){this.manager?.emit(e.type,e)}_toggleRecognizer(e,t){let{manager:n}=this;if(!n)return;let r=n.get(e);r&&(r.set({enable:t,wheelSession:this.wheelSession}),n.touchAction.update()),this.wheelInput?.enableEventType(e,t),this.moveInput?.enableEventType(e,t),this.keyInput?.enableEventType(e,t),this.contextmenuInput?.enableEventType(e,t)}_addEventHandler(e,t,n,r,i){if(typeof e!=`string`){n=t;for(let[t,a]of Object.entries(e))this._addEventHandler(t,a,n,r,i);return}let{manager:a,events:o}=this;if(!a)return;let s=o.get(e);if(!s){let t=this._getRecognizerName(e)||e;s=new ul(this,t),o.set(e,s),a&&a.on(e,s.handleEvent)}s.add(e,t,n,r,i),s.isEmpty()||this._toggleRecognizer(s.recognizerName,!0)}_removeEventHandler(e,t){if(typeof e!=`string`){for(let[t,n]of Object.entries(e))this._removeEventHandler(t,n);return}let{events:n}=this,r=n.get(e);if(r&&(r.remove(e,t),r.isEmpty())){let{recognizerName:e}=r,t=!1;for(let r of n.values())if(r.recognizerName===e&&!r.isEmpty()){t=!0;break}t||this._toggleRecognizer(e,!1)}}_getRecognizerName(e){return this.manager.recognizers.find(t=>t.getEventNames().includes(e))?.options.event}},pl={DEFAULT:`default`,LNGLAT:`lnglat`,METER_OFFSETS:`meter-offsets`,LNGLAT_OFFSETS:`lnglat-offsets`,CARTESIAN:`cartesian`};Object.defineProperty(pl,"IDENTITY",{get:()=>(U.deprecated(`COORDINATE_SYSTEM.IDENTITY`,`COORDINATE_SYSTEM.CARTESIAN`)(),pl.CARTESIAN)});var ml={WEB_MERCATOR:1,GLOBE:2,WEB_MERCATOR_AUTO_OFFSET:4,IDENTITY:0},hl={common:0,meters:1,pixels:2},gl={click:`onClick`,dblclick:`onClick`,panstart:`onDragStart`,panmove:`onDrag`,panend:`onDragEnd`},_l={multipan:[wc,{threshold:10,pointers:2,trackpad:!0}],pinch:[Ec,{trackpad:!0},null,[`multipan`]],pan:[wc,{threshold:1},[`pinch`],[`multipan`]],dblclick:[xc,{event:`dblclick`,taps:2,enable:!1}],dblclickdrag:[bc,{event:`dblclickdrag`,enable:!1},[`dblclick`],null],click:[xc,{event:`click`},[`dblclickdrag`],[`dblclick`,`dblclickdrag`]]};function vl(e,t){if(e===t)return!0;if(Array.isArray(e)){let n=e.length;if(!t||t.length!==n)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}return!1}function yl(e){let t={},n;return r=>{for(let i in r)if(!vl(r[i],t[i])){n=e(r),t=r;break}return n}}var bl=[0,0,0,0],xl=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0],Sl=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],Cl=[0,0,0],wl=[0,0,0],Tl={default:-1,cartesian:0,lnglat:1,"meter-offsets":2,"lnglat-offsets":3};function El(e){let t=Tl[e];if(t===void 0)throw Error(`Invalid coordinateSystem: ${e}`);return t}var Dl=yl(jl);function Ol(e,t,n=wl){n.length<3&&(n=[n[0],n[1],0]);let r=n,i,a=!0;switch(i=t===`lnglat-offsets`||t===`meter-offsets`?n:e.isGeospatial?[Math.fround(e.longitude),Math.fround(e.latitude),0]:null,e.projectionMode){case ml.WEB_MERCATOR:(t===`lnglat`||t===`cartesian`)&&(i=[0,0,0],a=!1);break;case ml.WEB_MERCATOR_AUTO_OFFSET:t===`lnglat`?r=i:t===`cartesian`&&(r=[Math.fround(e.center[0]),Math.fround(e.center[1]),0],i=e.unprojectPosition(r),r[0]-=n[0],r[1]-=n[1],r[2]-=n[2]);break;case ml.IDENTITY:r=e.position.map(Math.fround),r[2]=r[2]||0;break;case ml.GLOBE:a=!1,i=null;break;default:a=!1}return{geospatialOrigin:i,shaderCoordinateOrigin:r,offsetMode:a}}function kl(e,t,n){let{viewMatrixUncentered:r,projectionMatrix:i}=e,{viewMatrix:a,viewProjectionMatrix:o}=e,s=bl,c=bl,l=e.cameraPosition,{geospatialOrigin:u,shaderCoordinateOrigin:d,offsetMode:f}=Ol(e,t,n);return f&&(c=e.projectPosition(u||d),l=[l[0]-c[0],l[1]-c[1],l[2]-c[2]],c[3]=1,s=Do([],c,o),a=r||a,o=uo([],i,a),o=uo([],o,xl)),{viewMatrix:a,viewProjectionMatrix:o,projectionCenter:s,originCommon:c,cameraPosCommon:l,shaderCoordinateOrigin:d,geospatialOrigin:u}}function Al({viewport:e,devicePixelRatio:t=1,modelMatrix:n=null,coordinateSystem:r=`default`,coordinateOrigin:i=wl,autoWrapLongitude:a=!1}){r==="default"&&(r=e.isGeospatial?`lnglat`:`cartesian`);let o=Dl({viewport:e,devicePixelRatio:t,coordinateSystem:r,coordinateOrigin:i});return o.wrapLongitude=a,o.modelMatrix=n||Sl,o}function jl({viewport:e,devicePixelRatio:t,coordinateSystem:n,coordinateOrigin:r}){let{projectionCenter:i,viewProjectionMatrix:a,originCommon:o,cameraPosCommon:s,shaderCoordinateOrigin:c,geospatialOrigin:l}=kl(e,n,r),u=e.getDistanceScales(),d=[e.width*t,e.height*t],f=Do([],[0,0,-e.focalDistance,1],e.projectionMatrix)[3]||1,p={coordinateSystem:El(n),projectionMode:e.projectionMode,coordinateOrigin:c,commonOrigin:o.slice(0,3),center:i,pseudoMeters:!!e._pseudoMeters,viewportSize:d,devicePixelRatio:t,focalDistance:f,commonUnitsPerMeter:u.unitsPerMeter,commonUnitsPerWorldUnit:u.unitsPerMeter,commonUnitsPerWorldUnit2:Cl,scale:e.scale,wrapLongitude:!1,viewProjectionMatrix:a,modelMatrix:Sl,cameraPosition:s};if(l){let t=e.getDistanceScales(l);switch(n){case`meter-offsets`:p.commonUnitsPerWorldUnit=t.unitsPerMeter,p.commonUnitsPerWorldUnit2=t.unitsPerMeter2;break;case`lnglat`:case`lnglat-offsets`:e._pseudoMeters||(p.commonUnitsPerMeter=t.unitsPerMeter),p.commonUnitsPerWorldUnit=t.unitsPerDegree,p.commonUnitsPerWorldUnit2=t.unitsPerDegree2;break;case`cartesian`:p.commonUnitsPerWorldUnit=[1,1,t.unitsPerMeter[2]],p.commonUnitsPerWorldUnit2=[0,0,t.unitsPerMeter2[2]]}}if(e.projectionMode===ml.GLOBE&&n===`meter-offsets`){let e=r[0]*Math.PI/180,t=r[1]*Math.PI/180,n=Math.cos(t),i=((r[2]||0)/6370972+1)*256;p.commonOrigin=[Math.sin(e)*n*i,-Math.cos(e)*n*i,Math.sin(t)*i]}return p}var Ml=`\
${`\
${[`default`,`lnglat`,`meter-offsets`,`lnglat-offsets`,`cartesian`].map(e=>`const COORDINATE_SYSTEM_${e.toUpperCase().replaceAll(`-`,`_`)}: i32 = ${El(e)};`).join(``)}
${Object.keys(ml).map(e=>`const PROJECTION_MODE_${e}: i32 = ${ml[e]};`).join(``)}
${Object.keys(hl).map(e=>`const UNIT_${e.toUpperCase()}: i32 = ${hl[e]};`).join(``)}

const TILE_SIZE: f32 = 512.0;
const PI: f32 = 3.1415926536;
const WORLD_SCALE: f32 = TILE_SIZE / (PI * 2.0);
const ZERO_64_LOW: vec3<f32> = vec3<f32>(0.0, 0.0, 0.0);
const EARTH_RADIUS: f32 = 6370972.0; // meters
const GLOBE_RADIUS: f32 = 256.0;

// -----------------------------------------------------------------------------
// Uniform block (converted from GLSL uniform block)
// -----------------------------------------------------------------------------
struct ProjectUniforms {
  wrapLongitude: i32,
  coordinateSystem: i32,
  commonUnitsPerMeter: vec3<f32>,
  projectionMode: i32,
  scale: f32,
  commonUnitsPerWorldUnit: vec3<f32>,
  commonUnitsPerWorldUnit2: vec3<f32>,
  center: vec4<f32>,
  modelMatrix: mat4x4<f32>,
  viewProjectionMatrix: mat4x4<f32>,
  viewportSize: vec2<f32>,
  devicePixelRatio: f32,
  focalDistance: f32,
  cameraPosition: vec3<f32>,
  coordinateOrigin: vec3<f32>,
  commonOrigin: vec3<f32>,
  pseudoMeters: i32,
};

@group(0) @binding(auto)
var<uniform> project: ProjectUniforms;

// -----------------------------------------------------------------------------
// Geometry data shared across the project helpers.
// The active layer shader is responsible for populating this private module
// state before calling the project functions below.
// -----------------------------------------------------------------------------

// Structure to carry additional geometry data used by deck.gl filters.
struct Geometry {
  worldPosition: vec3<f32>,
  worldPositionAlt: vec3<f32>,
  position: vec4<f32>,
  normal: vec3<f32>,
  uv: vec2<f32>,
  pickingColor: vec3<f32>,
};

var<private> geometry: Geometry;
`}

// -----------------------------------------------------------------------------
// Functions
// -----------------------------------------------------------------------------

// Returns an adjustment factor for commonUnitsPerMeter
fn _project_size_at_latitude(lat: f32) -> f32 {
  let y = clamp(lat, -89.9, 89.9);
  return 1.0 / cos(radians(y));
}

// Overloaded version: scales a value in meters at a given latitude.
fn _project_size_at_latitude_m(meters: f32, lat: f32) -> f32 {
  return meters * project.commonUnitsPerMeter.z * _project_size_at_latitude(lat);
}

// Computes a non-linear scale factor based on geometry.
// (Note: This function relies on "geometry" being provided.)
fn project_size() -> f32 {
  if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR &&
      project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT &&
      project.pseudoMeters == 0) {
    if (geometry.position.w == 0.0) {
      return _project_size_at_latitude(geometry.worldPosition.y);
    }
    let y: f32 = geometry.position.y / TILE_SIZE * 2.0 - 1.0;
    let y2 = y * y;
    let y4 = y2 * y2;
    let y6 = y4 * y2;
    return 1.0 + 4.9348 * y2 + 4.0587 * y4 + 1.5642 * y6;
  }
  return 1.0;
}

// Overloads to scale offsets (meters to world units)
fn project_size_float(meters: f32) -> f32 {
  return meters * project.commonUnitsPerMeter.z * project_size();
}

fn project_size_vec2(meters: vec2<f32>) -> vec2<f32> {
  return meters * project.commonUnitsPerMeter.xy * project_size();
}

fn project_size_vec3(meters: vec3<f32>) -> vec3<f32> {
  return meters * project.commonUnitsPerMeter * project_size();
}

fn project_size_vec4(meters: vec4<f32>) -> vec4<f32> {
  return vec4<f32>(meters.xyz * project.commonUnitsPerMeter, meters.w);
}

// Returns a rotation matrix aligning the z‑axis with the given up vector.
fn project_get_orientation_matrix(up: vec3<f32>) -> mat3x3<f32> {
  let uz = normalize(up);
  let ux = select(
    vec3<f32>(1.0, 0.0, 0.0),
    normalize(vec3<f32>(uz.y, -uz.x, 0.0)),
    abs(uz.z) == 1.0
  );
  let uy = cross(uz, ux);
  return mat3x3<f32>(ux, uy, uz);
}

// Since WGSL does not support "out" parameters, we return a struct.
struct RotationResult {
  needsRotation: bool,
  transform: mat3x3<f32>,
};

fn project_needs_rotation(commonPosition: vec3<f32>) -> RotationResult {
  if (project.projectionMode == PROJECTION_MODE_GLOBE) {
    return RotationResult(true, project_get_orientation_matrix(commonPosition));
  } else {
    return RotationResult(false, mat3x3<f32>());  // identity alternative if needed
  };
}

// Projects a normal vector from the current coordinate system to world space.
fn project_normal(vector: vec3<f32>) -> vec3<f32> {
  let normal_modelspace = project.modelMatrix * vec4<f32>(vector, 0.0);
  var n = normalize(normal_modelspace.xyz * project.commonUnitsPerMeter);
  let rotResult = project_needs_rotation(geometry.position.xyz);
  if (rotResult.needsRotation) {
    n = rotResult.transform * n;
  }
  return n;
}

// Applies a scale offset based on y-offset (dy)
fn project_offset_(offset: vec4<f32>) -> vec4<f32> {
  let dy: f32 = offset.y;
  let commonUnitsPerWorldUnit = project.commonUnitsPerWorldUnit + project.commonUnitsPerWorldUnit2 * dy;
  return vec4<f32>(offset.xyz * commonUnitsPerWorldUnit, offset.w);
}

// Projects lng/lat coordinates to a unit tile [0,1]
fn project_mercator_(lnglat: vec2<f32>) -> vec2<f32> {
  var x = lnglat.x;
  if (project.wrapLongitude != 0) {
    x = ((x + 180.0) % 360.0) - 180.0;
  }
  let y = clamp(lnglat.y, -89.9, 89.9);
  return vec2<f32>(
    radians(x) + PI,
    PI + log(tan_fp32(PI * 0.25 + radians(y) * 0.5))
  ) * WORLD_SCALE;
}

// Projects lng/lat/z coordinates for a globe projection.
fn project_globe_(lnglatz: vec3<f32>) -> vec3<f32> {
  let lambda = radians(lnglatz.x);
  let phi = radians(lnglatz.y);
  let cosPhi = cos(phi);
  let D = (lnglatz.z / EARTH_RADIUS + 1.0) * GLOBE_RADIUS;
  return vec3<f32>(
    sin(lambda) * cosPhi,
    -cos(lambda) * cosPhi,
    sin(phi)
  ) * D;
}

// Projects positions (with an optional 64-bit low part) from the input
// coordinate system to the common space.
fn project_position_vec4_f64(position: vec4<f32>, position64Low: vec3<f32>) -> vec4<f32> {
  var position_world = project.modelMatrix * position;

  // Work around for a Mac+NVIDIA bug:
  if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR) {
    if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
      return vec4<f32>(
        project_mercator_(position_world.xy),
        _project_size_at_latitude_m(position_world.z, position_world.y),
        position_world.w
      );
    }
    if (project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN) {
      position_world = vec4f(position_world.xyz + project.coordinateOrigin, position_world.w);
    }
  }
  if (project.projectionMode == PROJECTION_MODE_GLOBE) {
    if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
      return vec4<f32>(
        project_globe_(position_world.xyz),
        position_world.w
      );
    }
    if (project.coordinateSystem == COORDINATE_SYSTEM_METER_OFFSETS) {
      let enuMatrix = project_get_orientation_matrix(project.commonOrigin);
      let metersToCommon = GLOBE_RADIUS / EARTH_RADIUS;
      let offsetCommon = (enuMatrix * vec3<f32>(-position_world.x, -position_world.y, position_world.z)) * metersToCommon;
      return vec4<f32>(project.commonOrigin + offsetCommon, position_world.w);
    }
  }
  if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET) {
    if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
      if (abs(position_world.y - project.coordinateOrigin.y) > 0.25) {
        return vec4<f32>(
          project_mercator_(position_world.xy) - project.commonOrigin.xy,
          project_size_float(position_world.z),
          position_world.w
        );
      }
    }
  }
  if (project.projectionMode == PROJECTION_MODE_IDENTITY ||
      (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET &&
       (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
        project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN))) {
    position_world = vec4f(position_world.xyz - project.coordinateOrigin, position_world.w);
  }

  return project_offset_(position_world) +
         project_offset_(project.modelMatrix * vec4<f32>(position64Low, 0.0));
}

// Overloaded versions for different input types.
fn project_position_vec4_f32(position: vec4<f32>) -> vec4<f32> {
  return project_position_vec4_f64(position, ZERO_64_LOW);
}

fn project_position_vec3_f64(position: vec3<f32>, position64Low: vec3<f32>) -> vec3<f32> {
  let projected_position = project_position_vec4_f64(vec4<f32>(position, 1.0), position64Low);
  return projected_position.xyz;
}

fn project_position_vec3_f32(position: vec3<f32>) -> vec3<f32> {
  let projected_position = project_position_vec4_f64(vec4<f32>(position, 1.0), ZERO_64_LOW);
  return projected_position.xyz;
}

fn project_position_vec2_f32(position: vec2<f32>) -> vec2<f32> {
  let projected_position = project_position_vec4_f64(vec4<f32>(position, 0.0, 1.0), ZERO_64_LOW);
  return projected_position.xy;
}

// Transforms a common space position to clip space.
fn project_common_position_to_clipspace_with_projection(position: vec4<f32>, viewProjectionMatrix: mat4x4<f32>, center: vec4<f32>) -> vec4<f32> {
  var clipPosition = viewProjectionMatrix * position + center;
  // deck.gl projection matrices use WebGL's [-w, w] depth range; WebGPU clips z to [0, w].
  clipPosition.z = (clipPosition.z + clipPosition.w) * 0.5;
  return clipPosition;
}

// Uses the project viewProjectionMatrix and center.
fn project_common_position_to_clipspace(position: vec4<f32>) -> vec4<f32> {
  return project_common_position_to_clipspace_with_projection(position, project.viewProjectionMatrix, project.center);
}

// Returns a clip space offset corresponding to a given number of screen pixels.
fn project_pixel_size_to_clipspace(pixels: vec2<f32>) -> vec2<f32> {
  let offset = pixels / project.viewportSize * project.devicePixelRatio * 2.0;
  return offset * project.focalDistance;
}

fn project_meter_size_to_pixel(meters: f32) -> f32 {
  return project_size_float(meters) * project.scale;
}

fn project_unit_size_to_pixel(size: f32, unit: i32) -> f32 {
  if (unit == UNIT_METERS) {
    return project_meter_size_to_pixel(size);
  } else if (unit == UNIT_COMMON) {
    return size * project.scale;
  }
  // UNIT_PIXELS: no scaling applied.
  return size;
}

fn project_pixel_size_float(pixels: f32) -> f32 {
  return pixels / project.scale;
}

fn project_pixel_size_vec2(pixels: vec2<f32>) -> vec2<f32> {
  return pixels / project.scale;
}
`,Nl=`\
${[`default`,`lnglat`,`meter-offsets`,`lnglat-offsets`,`cartesian`].map(e=>`const int COORDINATE_SYSTEM_${e.toUpperCase().replaceAll(`-`,`_`)} = ${El(e)};`).join(``)}
${Object.keys(ml).map(e=>`const int PROJECTION_MODE_${e} = ${ml[e]};`).join(``)}
${Object.keys(hl).map(e=>`const int UNIT_${e.toUpperCase()} = ${hl[e]};`).join(``)}
layout(std140) uniform projectUniforms {
bool wrapLongitude;
int coordinateSystem;
vec3 commonUnitsPerMeter;
int projectionMode;
float scale;
vec3 commonUnitsPerWorldUnit;
vec3 commonUnitsPerWorldUnit2;
vec4 center;
mat4 modelMatrix;
mat4 viewProjectionMatrix;
vec2 viewportSize;
float devicePixelRatio;
float focalDistance;
vec3 cameraPosition;
vec3 coordinateOrigin;
vec3 commonOrigin;
bool pseudoMeters;
} project;
const float TILE_SIZE = 512.0;
const float PI = 3.1415926536;
const float WORLD_SCALE = TILE_SIZE / (PI * 2.0);
const vec3 ZERO_64_LOW = vec3(0.0);
const float EARTH_RADIUS = 6370972.0;
const float GLOBE_RADIUS = 256.0;
float project_size_at_latitude(float lat) {
float y = clamp(lat, -89.9, 89.9);
return 1.0 / cos(radians(y));
}
float project_size() {
if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR &&
project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT &&
project.pseudoMeters == false) {
if (geometry.position.w == 0.0) {
return project_size_at_latitude(geometry.worldPosition.y);
}
float y = geometry.position.y / TILE_SIZE * 2.0 - 1.0;
float y2 = y * y;
float y4 = y2 * y2;
float y6 = y4 * y2;
return 1.0 + 4.9348 * y2 + 4.0587 * y4 + 1.5642 * y6;
}
return 1.0;
}
float project_size_at_latitude(float meters, float lat) {
return meters * project.commonUnitsPerMeter.z * project_size_at_latitude(lat);
}
float project_size(float meters) {
return meters * project.commonUnitsPerMeter.z * project_size();
}
vec2 project_size(vec2 meters) {
return meters * project.commonUnitsPerMeter.xy * project_size();
}
vec3 project_size(vec3 meters) {
return meters * project.commonUnitsPerMeter * project_size();
}
vec4 project_size(vec4 meters) {
return vec4(meters.xyz * project.commonUnitsPerMeter, meters.w);
}
mat3 project_get_orientation_matrix(vec3 up) {
vec3 uz = normalize(up);
vec3 ux = abs(uz.z) == 1.0 ? vec3(1.0, 0.0, 0.0) : normalize(vec3(uz.y, -uz.x, 0));
vec3 uy = cross(uz, ux);
return mat3(ux, uy, uz);
}
bool project_needs_rotation(vec3 commonPosition, out mat3 transform) {
if (project.projectionMode == PROJECTION_MODE_GLOBE) {
transform = project_get_orientation_matrix(commonPosition);
return true;
}
return false;
}
vec3 project_normal(vec3 vector) {
vec4 normal_modelspace = project.modelMatrix * vec4(vector, 0.0);
vec3 n = normalize(normal_modelspace.xyz * project.commonUnitsPerMeter);
mat3 rotation;
if (project_needs_rotation(geometry.position.xyz, rotation)) {
n = rotation * n;
}
return n;
}
vec4 project_offset_(vec4 offset) {
float dy = offset.y;
vec3 commonUnitsPerWorldUnit = project.commonUnitsPerWorldUnit + project.commonUnitsPerWorldUnit2 * dy;
return vec4(offset.xyz * commonUnitsPerWorldUnit, offset.w);
}
vec2 project_mercator_(vec2 lnglat) {
float x = lnglat.x;
if (project.wrapLongitude) {
x = mod(x + 180., 360.0) - 180.;
}
float y = clamp(lnglat.y, -89.9, 89.9);
return vec2(
radians(x) + PI,
PI + log(tan_fp32(PI * 0.25 + radians(y) * 0.5))
) * WORLD_SCALE;
}
vec3 project_globe_(vec3 lnglatz) {
float lambda = radians(lnglatz.x);
float phi = radians(lnglatz.y);
float cosPhi = cos(phi);
float D = (lnglatz.z / EARTH_RADIUS + 1.0) * GLOBE_RADIUS;
return vec3(
sin(lambda) * cosPhi,
-cos(lambda) * cosPhi,
sin(phi)
) * D;
}
vec4 project_position(vec4 position, vec3 position64Low) {
vec4 position_world = project.modelMatrix * position;
if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
return vec4(
project_mercator_(position_world.xy),
project_size_at_latitude(position_world.z, position_world.y),
position_world.w
);
}
if (project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN) {
position_world.xyz += project.coordinateOrigin;
}
}
if (project.projectionMode == PROJECTION_MODE_GLOBE) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
return vec4(
project_globe_(position_world.xyz),
position_world.w
);
}
if (project.coordinateSystem == COORDINATE_SYSTEM_METER_OFFSETS) {
mat3 enuMatrix = project_get_orientation_matrix(project.commonOrigin);
float metersToCommon = GLOBE_RADIUS / EARTH_RADIUS;
vec3 offsetCommon = (enuMatrix * vec3(-position_world.xy, position_world.z)) * metersToCommon;
return vec4(project.commonOrigin + offsetCommon, position_world.w);
}
}
if (project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT) {
if (abs(position_world.y - project.coordinateOrigin.y) > 0.25) {
return vec4(
project_mercator_(position_world.xy) - project.commonOrigin.xy,
project_size(position_world.z),
position_world.w
);
}
}
}
if (project.projectionMode == PROJECTION_MODE_IDENTITY ||
(project.projectionMode == PROJECTION_MODE_WEB_MERCATOR_AUTO_OFFSET &&
(project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
project.coordinateSystem == COORDINATE_SYSTEM_CARTESIAN))) {
position_world.xyz -= project.coordinateOrigin;
}
return project_offset_(position_world) + project_offset_(project.modelMatrix * vec4(position64Low, 0.0));
}
vec4 project_position(vec4 position) {
return project_position(position, ZERO_64_LOW);
}
vec3 project_position(vec3 position, vec3 position64Low) {
vec4 projected_position = project_position(vec4(position, 1.0), position64Low);
return projected_position.xyz;
}
vec3 project_position(vec3 position) {
vec4 projected_position = project_position(vec4(position, 1.0), ZERO_64_LOW);
return projected_position.xyz;
}
vec2 project_position(vec2 position) {
vec4 projected_position = project_position(vec4(position, 0.0, 1.0), ZERO_64_LOW);
return projected_position.xy;
}
vec4 project_common_position_to_clipspace(vec4 position, mat4 viewProjectionMatrix, vec4 center) {
return viewProjectionMatrix * position + center;
}
vec4 project_common_position_to_clipspace(vec4 position) {
return project_common_position_to_clipspace(position, project.viewProjectionMatrix, project.center);
}
vec2 project_pixel_size_to_clipspace(vec2 pixels) {
vec2 offset = pixels / project.viewportSize * project.devicePixelRatio * 2.0;
return offset * project.focalDistance;
}
float project_size_to_pixel(float meters) {
return project_size(meters) * project.scale;
}
vec2 project_size_to_pixel(vec2 meters) {
return project_size(meters) * project.scale;
}
float project_size_to_pixel(float size, int unit) {
if (unit == UNIT_METERS) return project_size_to_pixel(size);
if (unit == UNIT_COMMON) return size * project.scale;
return size;
}
float project_pixel_size(float pixels) {
return pixels / project.scale;
}
vec2 project_pixel_size(vec2 pixels) {
return pixels / project.scale;
}
`,Pl={};function Fl(e=Pl){return`viewport`in e?Al(e):{}}var Il={name:`project`,dependencies:[C,Ts],source:Ml,vs:Nl,getUniforms:Fl,uniformTypes:{wrapLongitude:`f32`,coordinateSystem:`i32`,commonUnitsPerMeter:`vec3<f32>`,projectionMode:`i32`,scale:`f32`,commonUnitsPerWorldUnit:`vec3<f32>`,commonUnitsPerWorldUnit2:`vec3<f32>`,center:`vec4<f32>`,modelMatrix:`mat4x4<f32>`,viewProjectionMatrix:`mat4x4<f32>`,viewportSize:`vec2<f32>`,devicePixelRatio:`f32`,focalDistance:`f32`,cameraPosition:`vec3<f32>`,coordinateOrigin:`vec3<f32>`,commonOrigin:`vec3<f32>`,pseudoMeters:`f32`}},Ll={name:`project32`,dependencies:[Il],source:`// Define a structure to hold both the clip-space position and the common position.
struct ProjectResult {
  clipPosition: vec4<f32>,
  commonPosition: vec4<f32>,
};

// This function mimics the GLSL version with the 'out' parameter by returning both values.
fn project_position_to_clipspace_and_commonspace(
    position: vec3<f32>,
    position64Low: vec3<f32>,
    offset: vec3<f32>
) -> ProjectResult {
  // Compute the projected position.
  let projectedPosition: vec3<f32> = project_position_vec3_f64(position, position64Low);

  // Start with the provided offset.
  var finalOffset: vec3<f32> = offset;

  // Get whether a rotation is needed and the rotation matrix.
  let rotationResult = project_needs_rotation(projectedPosition);

  // If rotation is needed, update the offset.
  if (rotationResult.needsRotation) {
    finalOffset = rotationResult.transform * offset;
  }

  // Compute the common position.
  let commonPosition: vec4<f32> = vec4<f32>(projectedPosition + finalOffset, 1.0);

  // Convert to clip-space.
  let clipPosition: vec4<f32> = project_common_position_to_clipspace(commonPosition);

  return ProjectResult(clipPosition, commonPosition);
}

// A convenience overload that returns only the clip-space position.
fn project_position_to_clipspace(
    position: vec3<f32>,
    position64Low: vec3<f32>,
    offset: vec3<f32>
) -> vec4<f32> {
  return project_position_to_clipspace_and_commonspace(position, position64Low, offset).clipPosition;
}
`,vs:`vec4 project_position_to_clipspace(
  vec3 position, vec3 position64Low, vec3 offset, out vec4 commonPosition
) {
  vec3 projectedPosition = project_position(position, position64Low);
  mat3 rotation;
  if (project_needs_rotation(projectedPosition, rotation)) {
    // offset is specified as ENU
    // when in globe projection, rotate offset so that the ground alighs with the surface of the globe
    offset = rotation * offset;
  }
  commonPosition = vec4(projectedPosition + offset, 1.0);
  return project_common_position_to_clipspace(commonPosition);
}

vec4 project_position_to_clipspace(
  vec3 position, vec3 position64Low, vec3 offset
) {
  vec4 commonPosition;
  return project_position_to_clipspace(position, position64Low, offset, commonPosition);
}
`};function Rl(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function zl(e,t){let n=Do([],t,e);return Eo(n,n,1/n[3]),n}function Bl(e,t,n){return n*t+(1-n)*e}function Vl(e,t,n){return e<t?t:e>n?n:e}function Hl(e){return Math.log(e)*Math.LOG2E}var Ul=Math.log2||Hl;function Wl(e,t){if(!e)throw Error(t||`@math.gl/web-mercator: assertion failed.`)}var Gl=Math.PI,Kl=Gl/4,ql=Gl/180,Jl=180/Gl,Yl=512,Xl=4003e4,Zl=85.051129,Ql=1.5;function $l(e){return 2**e}function eu(e){return Ul(e)}function tu(e){let[t,n]=e;Wl(Number.isFinite(t)),Wl(Number.isFinite(n)&&n>=-90&&n<=90,`invalid latitude`);let r=t*ql,i=n*ql;return[Yl*(r+Gl)/(2*Gl),Yl*(Gl+Math.log(Math.tan(Kl+i*.5)))/(2*Gl)]}function nu(e){let[t,n]=e,r=t/Yl*(2*Gl)-Gl,i=2*(Math.atan(Math.exp(n/Yl*(2*Gl)-Gl))-Kl);return[r*Jl,i*Jl]}function ru(e){let{latitude:t}=e;return Wl(Number.isFinite(t)),eu(Xl*Math.cos(t*ql))-9}function iu(e){let t=Math.cos(e*ql);return Yl/Xl/t}function au(e){let{latitude:t,longitude:n,highPrecision:r=!1}=e;Wl(Number.isFinite(t)&&Number.isFinite(n));let i=Yl,a=Math.cos(t*ql),o=i/360,s=o/a,c=i/Xl/a,l={unitsPerMeter:[c,c,c],metersPerUnit:[1/c,1/c,1/c],unitsPerDegree:[o,s,c],degreesPerUnit:[1/o,1/s,1/c]};if(r){let e=ql*Math.tan(t*ql)/a,n=o*e/2,r=i/Xl*e,u=r/s*c;l.unitsPerDegree2=[0,n,r],l.unitsPerMeter2=[u,0,u]}return l}function ou(e,t){let[n,r,i]=e,[a,o,s]=t,{unitsPerMeter:c,unitsPerMeter2:l}=au({longitude:n,latitude:r,highPrecision:!0}),u=tu(e);u[0]+=a*(c[0]+l[0]*o),u[1]+=o*(c[1]+l[1]*o);let d=nu(u),f=(i||0)+(s||0);return Number.isFinite(i)||Number.isFinite(s)?[d[0],d[1],f]:d}function su(e){let{height:t,pitch:n,bearing:r,altitude:i,scale:a,center:o}=e,s=Rl();fo(s,s,[0,0,-i]),ho(s,s,-n*ql),_o(s,s,r*ql);let c=a/t;return po(s,s,[c,c,c]),o&&fo(s,s,Ga([],o)),s}function cu(e){let{width:t,height:n,altitude:r,pitch:i=0,offset:a,center:o,scale:s,nearZMultiplier:c=1,farZMultiplier:l=1}=e,{fovy:u=lu(Ql)}=e;r!==void 0&&(u=lu(r));let d=u*ql,f=i*ql,p=uu(u),m=p;o&&(m+=o[2]*s/Math.cos(f)/n);let h=d*(.5+(a?a[1]:0)/n),g=Math.sin(h)*m/Math.sin(Vl(Math.PI/2-f-h,.01,Math.PI-.01)),_=Math.sin(f)*g+m,v=m*10,y=Math.min(_*l,v);return{fov:d,aspect:t/n,focalDistance:p,near:c,far:y}}function lu(e){return 2*Math.atan(.5/e)*Jl}function uu(e){return .5/Math.tan(.5*e*ql)}function du(e,t){let[n,r,i=0]=e;return Wl(Number.isFinite(n)&&Number.isFinite(r)&&Number.isFinite(i)),zl(t,[n,r,i,1])}function fu(e,t,n=0){let[r,i,a]=e;if(Wl(Number.isFinite(r)&&Number.isFinite(i),`invalid pixel coordinate`),Number.isFinite(a))return zl(t,[r,i,a,1]);let o=zl(t,[r,i,0,1]),s=zl(t,[r,i,1,1]),c=o[2],l=s[2];return La([],o,s,c===l?0:((n||0)-c)/(l-c))}function pu(e){let{width:t,height:n,bounds:r,minExtent:i=0,maxZoom:a=24,offset:o=[0,0]}=e,[[s,c],[l,u]]=r,d=mu(e.padding),f=tu([s,Vl(u,-Zl,Zl)]),p=tu([l,Vl(c,-Zl,Zl)]),m=[Math.max(Math.abs(p[0]-f[0]),i),Math.max(Math.abs(p[1]-f[1]),i)],h=[t-d.left-d.right-Math.abs(o[0])*2,n-d.top-d.bottom-Math.abs(o[1])*2];Wl(h[0]>0&&h[1]>0);let g=h[0]/m[0],_=h[1]/m[1],v=(d.right-d.left)/2/g,y=(d.top-d.bottom)/2/_,b=nu([(p[0]+f[0])/2+v,(p[1]+f[1])/2+y]),x=Math.min(a,Ul(Math.abs(Math.min(g,_))));return Wl(Number.isFinite(x)),{longitude:b[0],latitude:b[1],zoom:x}}function mu(e=0){return typeof e==`number`?{top:e,bottom:e,left:e,right:e}:(Wl(Number.isFinite(e.top)&&Number.isFinite(e.bottom)&&Number.isFinite(e.left)&&Number.isFinite(e.right)),e)}var hu=Math.PI/180;function gu(e,t=0){let{width:n,height:r,unproject:i}=e,a={targetZ:t},o=i([0,r],a),s=i([n,r],a),c,l;return(e.fovy?.5*e.fovy*hu:Math.atan(.5/e.altitude))>(90-e.pitch)*hu-.01?(c=_u(e,0,t),l=_u(e,n,t)):(c=i([0,0],a),l=i([n,0],a)),[o,s,l,c]}function _u(e,t,n){let{pixelUnprojectionMatrix:r}=e,i=zl(r,[t,0,1,1]),a=zl(r,[t,e.height,1,1]),o=nu(La([],i,a,(n*e.distanceScales.unitsPerMeter[2]-i[2])/(a[2]-i[2])));return o.push(n),o}var vu=.01,yu=[`longitude`,`latitude`,`zoom`],bu={curve:1.414,speed:1.2};function xu(e,t,n,r){let{startZoom:i,startCenterXY:a,uDelta:o,w0:s,u1:c,S:l,rho:u,rho2:d,r0:f}=Cu(e,t,r);if(c<vu){let r={};for(let i of yu){let a=e[i],o=t[i];r[i]=Bl(a,o,n)}return r}let p=n*l,m=Math.cosh(f)/Math.cosh(f+u*p),h=s*((Math.cosh(f)*Math.tanh(f+u*p)-Math.sinh(f))/d)/c,g=i+eu(1/m),_=Pa([],o,h);Ma(_,_,a);let v=nu(_);return{longitude:v[0],latitude:v[1],zoom:g}}function Su(e,t,n){let r={...bu,...n},{screenSpeed:i,speed:a,maxDuration:o}=r,{S:s,rho:c}=Cu(e,t,r),l=1e3*s,u;return u=Number.isFinite(i)?l/(i/c):l/a,Number.isFinite(o)&&u>o?0:u}function Cu(e,t,n){n=Object.assign({},bu,n);let r=n.curve,i=e.zoom,a=[e.longitude,e.latitude],o=$l(i),s=t.zoom,c=[t.longitude,t.latitude],l=$l(s-i),u=tu(a),d=za([],tu(c),u),f=Math.max(e.width,e.height),p=f/l,m=Fa(d)*o,h=Math.max(m,vu),g=r*r,_=(p*p-f*f+g*g*h*h)/(2*f*g*h),v=(p*p-f*f-g*g*h*h)/(2*p*g*h),y=Math.log(Math.sqrt(_*_+1)-_),b=Math.log(Math.sqrt(v*v+1)-v);return{startZoom:i,startCenterXY:u,uDelta:d,w0:f,u1:m,S:(b-y)/r,rho:r,rho2:g,r0:y,r1:b}}var wu=`
layout(std140) uniform shadowUniforms {
  bool drawShadowMap;
  bool useShadowMap;
  vec4 color;
  highp int lightId;
  float lightCount;
  mat4 viewProjectionMatrix0;
  mat4 viewProjectionMatrix1;
  vec4 projectCenter0;
  vec4 projectCenter1;
} shadow;
`,Tu=`
${wu}

const int max_lights = 2;

out vec3 shadow_vPosition[max_lights];

vec4 shadow_setVertexPosition(vec4 position_commonspace) {
  mat4 viewProjectionMatrices[max_lights];
  viewProjectionMatrices[0] = shadow.viewProjectionMatrix0;
  viewProjectionMatrices[1] = shadow.viewProjectionMatrix1;
  vec4 projectCenters[max_lights];
  projectCenters[0] = shadow.projectCenter0;
  projectCenters[1] = shadow.projectCenter1;

  if (shadow.drawShadowMap) {
    return project_common_position_to_clipspace(position_commonspace, viewProjectionMatrices[shadow.lightId], projectCenters[shadow.lightId]);
  }
  if (shadow.useShadowMap) {
    for (int i = 0; i < max_lights; i++) {
      if(i < int(shadow.lightCount)) {
        vec4 shadowMap_position = project_common_position_to_clipspace(position_commonspace, viewProjectionMatrices[i], projectCenters[i]);
        shadow_vPosition[i] = (shadowMap_position.xyz / shadowMap_position.w + 1.0) / 2.0;
      }
    }
  }
  return gl_Position;
}

`,Eu=`
${wu}

const int max_lights = 2;
uniform sampler2D shadow_uShadowMap0;
uniform sampler2D shadow_uShadowMap1;

in vec3 shadow_vPosition[max_lights];

const vec4 bitPackShift = vec4(1.0, 255.0, 65025.0, 16581375.0);
const vec4 bitUnpackShift = 1.0 / bitPackShift;
const vec4 bitMask = vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0,  0.0);

float shadow_getShadowWeight(vec3 position, sampler2D shadowMap) {
  vec4 rgbaDepth = texture(shadowMap, position.xy);

  float z = dot(rgbaDepth, bitUnpackShift);
  return smoothstep(0.001, 0.01, position.z - z);
}

vec4 shadow_filterShadowColor(vec4 color) {
  if (shadow.drawShadowMap) {
    vec4 rgbaDepth = fract(gl_FragCoord.z * bitPackShift);
    rgbaDepth -= rgbaDepth.gbaa * bitMask;
    return rgbaDepth;
  }
  if (shadow.useShadowMap) {
    float shadowAlpha = 0.0;
    shadowAlpha += shadow_getShadowWeight(shadow_vPosition[0], shadow_uShadowMap0);
    if(shadow.lightCount > 1.0) {
      shadowAlpha += shadow_getShadowWeight(shadow_vPosition[1], shadow_uShadowMap1);
    }
    shadowAlpha *= shadow.color.a / shadow.lightCount;
    float blendedAlpha = shadowAlpha + color.a * (1.0 - shadowAlpha);

    return vec4(
      mix(color.rgb, shadow.color.rgb, shadowAlpha / blendedAlpha),
      blendedAlpha
    );
  }
  return color;
}

`,Du=yl(Mu),Ou=yl(Nu),ku=[0,0,0,1],Au=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0];function ju(e,t){let[n,r,i]=e,a=fu([n,r,i],t);return Number.isFinite(i)?a:[a[0],a[1],0]}function Mu({viewport:e,center:t}){return new Po(e.viewProjectionMatrix).invert().transform(t)}function Nu({viewport:e,shadowMatrices:t}){let n=[],r=e.pixelUnprojectionMatrix,i=e.isGeospatial?void 0:1,a=[[0,0,i],[e.width,0,i],[0,e.height,i],[e.width,e.height,i],[0,0,-1],[e.width,0,-1],[0,e.height,-1],[e.width,e.height,-1]].map(e=>ju(e,r));for(let r of t){let t=r.clone().translate(new io(e.center).negate()),i=a.map(e=>t.transform(e)),o=new Po().ortho({left:Math.min(...i.map(e=>e[0])),right:Math.max(...i.map(e=>e[0])),bottom:Math.min(...i.map(e=>e[1])),top:Math.max(...i.map(e=>e[1])),near:Math.min(...i.map(e=>-e[2])),far:Math.max(...i.map(e=>-e[2]))});n.push(o.multiplyRight(r))}return n}function Pu(e){let{shadowEnabled:t=!0,project:n}=e;if(!t||!n||!e.shadowMatrices||!e.shadowMatrices.length)return{drawShadowMap:!1,useShadowMap:!1,shadow_uShadowMap0:e.dummyShadowMap,shadow_uShadowMap1:e.dummyShadowMap};let r=Il.getUniforms(n),i=Du({viewport:n.viewport,center:r.center}),a=[],o=Ou({shadowMatrices:e.shadowMatrices,viewport:n.viewport}).slice();for(let t=0;t<e.shadowMatrices.length;t++){let e=o[t],s=e.clone().translate(new io(n.viewport.center).negate());r.coordinateSystem===El(`lnglat`)&&r.projectionMode===ml.WEB_MERCATOR?(o[t]=s,a[t]=i):(o[t]=e.clone().multiplyRight(Au),a[t]=s.transform(i))}let s={drawShadowMap:!!e.drawToShadowMap,useShadowMap:e.shadowMaps?e.shadowMaps.length>0:!1,color:e.shadowColor||ku,lightId:e.shadowLightId||0,lightCount:e.shadowMatrices.length,shadow_uShadowMap0:e.dummyShadowMap,shadow_uShadowMap1:e.dummyShadowMap};for(let e=0;e<o.length;e++)s[`viewProjectionMatrix${e}`]=o[e],s[`projectCenter${e}`]=a[e];for(let t=0;t<2;t++)s[`shadow_uShadowMap${t}`]=e.shadowMaps&&e.shadowMaps[t]||e.dummyShadowMap;return s}var Fu={name:`shadow`,dependencies:[Il],vs:Tu,fs:Eu,inject:{"vs:DECKGL_FILTER_GL_POSITION":`
    position = shadow_setVertexPosition(geometry.position);
    `,"fs:DECKGL_FILTER_COLOR":`
    color = shadow_filterShadowColor(color);
    `},getUniforms:Pu,uniformTypes:{drawShadowMap:`f32`,useShadowMap:`f32`,color:`vec4<f32>`,lightId:`i32`,lightCount:`f32`,viewProjectionMatrix0:`mat4x4<f32>`,viewProjectionMatrix1:`mat4x4<f32>`,projectCenter0:`vec4<f32>`,projectCenter1:`vec4<f32>`}},Iu=16777215;function Lu(e,t){e.length===10?U.warn(`pickMultipleObjects can only exclude 10 previously picked objects for layers without picking buffers`)():e.push(t)}var Ru=`  float disabledPickingIndexCount;
  vec4 disabledPickingIndices0;
  vec4 disabledPickingIndices1;
  vec4 disabledPickingIndices2;
`;function zu(e){return e.replace(`  vec4 highlightColor;
} picking;`,`  vec4 highlightColor;\n${Ru}} picking;`)}function Bu(e,t){return[e[t]||0,e[t+1]||0,e[t+2]||0,e[t+3]||0]}var Vu=`\
vec3 picking_getPickingColorFromIndex(float objectIndex) {
  if (objectIndex < 0.0 || objectIndex >= ${Iu}.0) {
    return vec3(0.0);
  }

  for (int i = 0; i < 10; i++) {
    if (float(i) >= picking.disabledPickingIndexCount) {
      break;
    }
    vec4 disabledIndices = i < 4
      ? picking.disabledPickingIndices0
      : (i < 8 ? picking.disabledPickingIndices1 : picking.disabledPickingIndices2);
    float disabledIndex = disabledIndices[i - (i / 4) * 4];
    if (disabledIndex == objectIndex) {
      return vec3(0.0);
    }
  }

  float encodedIndex = objectIndex + 1.0;
  return vec3(
    mod(encodedIndex, 256.0),
    mod(floor(encodedIndex / 256.0), 256.0),
    mod(floor(encodedIndex / 65536.0), 256.0)
  );
}

vec3 picking_getPickingColorFromIndex(uint objectIndex) {
  return picking_getPickingColorFromIndex(float(objectIndex));
}

vec3 picking_getPickingColorFromInstanceID() {
  return picking_getPickingColorFromIndex(float(gl_InstanceID));
}

void picking_setPickingColorFromInstanceID() {
  picking_setPickingColor(picking_getPickingColorFromInstanceID());
}
`,Hu=`\
struct pickingUniforms {
  isActive: f32,
  isAttribute: f32,
  isHighlightActive: f32,
  useByteColors: f32,
  highlightedObjectColor: vec3<f32>,
  highlightColor: vec4<f32>,
  disabledPickingIndexCount: f32,
  disabledPickingIndices0: vec4<f32>,
  disabledPickingIndices1: vec4<f32>,
  disabledPickingIndices2: vec4<f32>,
};

@group(0) @binding(auto) var<uniform> picking: pickingUniforms;

fn picking_normalizeColor(color: vec3<f32>) -> vec3<f32> {
  return select(color, color / 255.0, picking.useByteColors > 0.5);
}

fn picking_normalizeColor4(color: vec4<f32>) -> vec4<f32> {
  return select(color, color / 255.0, picking.useByteColors > 0.5);
}

fn picking_isColorZero(color: vec3<f32>) -> bool {
  return dot(color, vec3<f32>(1.0)) < 0.00001;
}

fn picking_isColorValid(color: vec3<f32>) -> bool {
  return dot(color, vec3<f32>(1.0)) > 0.00001;
}

fn picking_getPickingColorFromIndex(objectIndex: u32) -> vec3<f32> {
  if (objectIndex >= ${Iu}u) {
    return vec3<f32>(0.0);
  }

  for (var i = 0; i < 10; i = i + 1) {
    if (f32(i) >= picking.disabledPickingIndexCount) {
      break;
    }
    let disabledIndices = select(
      picking.disabledPickingIndices2,
      select(picking.disabledPickingIndices1, picking.disabledPickingIndices0, i < 4),
      i < 8
    );
    let disabledIndex = disabledIndices[i % 4];
    if (disabledIndex == f32(objectIndex)) {
      return vec3<f32>(0.0);
    }
  }

  let encodedIndex = objectIndex + 1u;
  return vec3<f32>(
    f32(encodedIndex % 256u),
    f32((encodedIndex / 256u) % 256u),
    f32((encodedIndex / 65536u) % 256u)
  ) / 255.0;
}
`,Uu={...is,vs:`${zu(is.vs)}\n${Vu}`,fs:zu(is.fs),source:Hu,uniformTypes:{...is.uniformTypes,disabledPickingIndexCount:`f32`,disabledPickingIndices0:`vec4<f32>`,disabledPickingIndices1:`vec4<f32>`,disabledPickingIndices2:`vec4<f32>`},defaultUniforms:{...is.defaultUniforms,useByteColors:!0,disabledPickingIndexCount:0,disabledPickingIndices0:[0,0,0,0],disabledPickingIndices1:[0,0,0,0],disabledPickingIndices2:[0,0,0,0]},getUniforms(e,t){let n=is.getUniforms(e,t),r=e.disabledPickingIndices||[];return n.disabledPickingIndexCount=r.length,n.disabledPickingIndices0=Bu(r,0),n.disabledPickingIndices1=Bu(r,4),n.disabledPickingIndices2=Bu(r,8),n},inject:{"vs:DECKGL_FILTER_GL_POSITION":`
    // for picking depth values
    picking_setPickingAttribute(position.z / position.w);
  `,"vs:DECKGL_FILTER_COLOR":`
  picking_setPickingColor(geometry.pickingColor);
  `,"fs:DECKGL_FILTER_COLOR":{order:99,injection:`
  // use highlight color if this fragment belongs to the selected object.
  color = picking_filterHighlightColor(color);

  // use picking color if rendering to picking FBO.
  color = picking_filterPickingColor(color);
    `}}},Wu=[Ts],Gu=[`vs:DECKGL_FILTER_SIZE(inout vec3 size, VertexGeometry geometry)`,`vs:DECKGL_FILTER_GL_POSITION(inout vec4 position, VertexGeometry geometry)`,`vs:DECKGL_FILTER_COLOR(inout vec4 color, VertexGeometry geometry)`,`fs:DECKGL_FILTER_COLOR(inout vec4 color, FragmentGeometry geometry)`],Ku=[];function qu(e){let t=ie.getDefaultShaderAssembler(e);for(let e of Wu)t.addDefaultModule(e);t._hookFunctions.length=0;let n=e===`glsl`?Gu:Ku;for(let e of n)t.addShaderHook(e);return t}var Ju=[255,255,255],Yu=1,Xu=0,Zu=class{constructor(e={}){this.type=`ambient`;let{color:t=Ju}=e,{intensity:n=Yu}=e;this.id=e.id||`ambient-${Xu++}`,this.color=t,this.intensity=n}},Qu=[255,255,255],$u=1,ed=[0,0,-1],td=0,nd=class{constructor(e={}){this.type=`directional`;let{color:t=Qu}=e,{intensity:n=$u}=e,{direction:r=ed}=e,{_shadow:i=!1}=e;this.id=e.id||`directional-${td++}`,this.color=t,this.intensity=n,this.type=`directional`,this.direction=new io(r).normalize().toArray(),this.shadow=i}getProjectedLight(e){return this}},rd=class{constructor(e,t={id:`pass`}){let{id:n}=t;this.id=n,this.device=e,this.props={...t}}setProps(e){Object.assign(this.props,e)}render(e){}cleanup(){}},id={depthWriteEnabled:!0,depthCompare:`less-equal`,blendColorOperation:`add`,blendColorSrcFactor:`one`,blendColorDstFactor:`one-minus-src-alpha`,blendAlphaOperation:`add`,blendAlphaSrcFactor:`one`,blendAlphaDstFactor:`one-minus-src-alpha`},ad=class extends rd{constructor(){super(...arguments),this._lastRenderIndex=-1}render(e){this._render(e)}_render(e){let{canvasContext:t=this.device.canvasContext}=e,n=e.target??t.getCurrentFramebuffer(),[r,i]=t.getDrawingBufferSize(),a=e.clearCanvas??!0,o=e.clearColor??(a?[0,0,0,0]:!1),s=a?1:!1,c=a?0:!1,l=e.colorMask??15,u={viewport:[0,0,r,i]};e.colorMask&&(u.colorMask=l),e.scissorRect&&(u.scissorRect=e.scissorRect);let{shaderModuleProps:d,viewports:f,views:p,onViewportActive:m,clearStack:h=!0}=e,g=e.pass||`unknown`,_=this.device.type===`webgpu`;h&&(this._lastRenderIndex=-1);let v=[];if(!f.length)return this.device.beginRenderPass({framebuffer:n,parameters:u,clearColor:o,clearDepth:s,clearStencil:c}).end(),this.device.submit(),v;try{for(let r of f){m?.(r);let i=this._getDrawLayerParams(r,e),a=p&&p[r.id],l=r.subViewports||[r],f=_?l.map(e=>[e]):[l];for(let r of f){let l=this.device.beginRenderPass({framebuffer:n,parameters:u,clearColor:o,clearDepth:s,clearStencil:c});try{for(let o of r){let r=this._drawLayersInViewport(l,{target:n,canvasContext:t,shaderModuleProps:d,viewport:o,view:a,pass:g,layers:e.layers,isPicking:e.isPicking},i);v.push(r)}}finally{l.end(),_&&this.device.submit()}o=!1,s=!1,c=!1}}return v}finally{_||this.device.submit()}}_getDrawLayerParams(e,{layers:t,pass:n,isPicking:r=!1,layerFilter:i,cullRect:a,views:o,effects:s,canvasContext:c=this.device.canvasContext,shaderModuleProps:l},u=!1){let d=[],f=od(this._lastRenderIndex+1),p={layer:t[0],viewport:e,isPicking:r,renderPass:n,cullRect:a},m={};for(let r=0;r<t.length;r++){let a=t[r],h=this._shouldDrawLayer(a,p,i,m),g={shouldDrawLayer:h};h&&!u&&(g.shouldDrawLayer=!0,g.layerRenderIndex=f(a,h),g.shaderModuleProps=this._getShaderModuleProps(a,s,n,c,l),g.layerParameters={...a.context.device.type===`webgpu`?id:null,...a.context.deck?.props.parameters,...o?.[e.id]?.props.parameters,...this.getLayerParameters(a,r,e)}),d[r]=g}return d}_drawLayersInViewport(e,{layers:t,shaderModuleProps:n,pass:r,target:i,canvasContext:a,viewport:o,view:s,isPicking:c},l){let u=sd(this.device,{canvasContext:a,shaderModuleProps:n,target:i,viewport:o});if(s){let{clear:e,clearColor:t,clearDepth:n,clearStencil:r}=s.props;if(e){let e=[0,0,0,0],a=1,o=0;Array.isArray(t)&&!c?e=[...t.slice(0,3),t[3]||255].map(e=>e/255):t===!1&&(e=!1),n!==void 0&&(a=n),r!==void 0&&(o=r),this.device.beginRenderPass({framebuffer:i,parameters:{viewport:u,scissorRect:u},clearColor:e,clearDepth:a,clearStencil:o}).end()}}let d={totalCount:t.length,visibleCount:0,compositeCount:0,pickableCount:0};e.setParameters({viewport:u});for(let n=0;n<t.length;n++){let i=t[n],a=l[n],{shouldDrawLayer:s}=a;if(s&&i.props.pickable&&d.pickableCount++,i.isComposite&&d.compositeCount++,i.isDrawable&&a.shouldDrawLayer){let{layerRenderIndex:t,shaderModuleProps:n,layerParameters:s}=a;d.visibleCount++,this._lastRenderIndex=Math.max(this._lastRenderIndex,t),n.project&&(n.project.viewport=o),i.context.renderPass=e;try{i._drawLayer({renderPass:e,shaderModuleProps:n,uniforms:{layerIndex:t},parameters:s})}catch(e){i.raiseError(e,`drawing ${i} to ${r}`)}}}return d}shouldDrawLayer(e){return!0}getShaderModuleProps(e,t,n){return null}getLayerParameters(e,t,n){return e.props.parameters}_shouldDrawLayer(e,t,n,r){if(!(e.props.visible&&this.shouldDrawLayer(e)))return!1;t.layer=e;let i=e.parent;for(;i;){if(!i.props.visible||!i.filterSubLayer(t))return!1;t.layer=i,i=i.parent}if(n){let e=t.layer.id;if(e in r||(r[e]=n(t)),!r[e])return!1}return e.activateViewport(t.viewport),!0}_getShaderModuleProps(e,t,n,r,i){let a=r.cssToDeviceRatio(),o=e.internalState?.propsInTransition||e.props,s={layer:o,picking:{isActive:!1},project:{viewport:e.context.viewport,devicePixelRatio:a,modelMatrix:o.modelMatrix,coordinateSystem:o.coordinateSystem,coordinateOrigin:o.coordinateOrigin,autoWrapLongitude:e.wrapLongitude}};if(t)for(let n of t)cd(s,n.getShaderModuleProps?.(e,s));for(let t of e.context.defaultShaderModules)t.name in s||(s[t.name]={});return cd(s,this.getShaderModuleProps(e,t,s),i)}};function od(e=0,t={}){let n={},r=(i,a)=>{let o=i.props._offset,s=i.id,c=i.parent&&i.parent.id,l;if(c&&!(c in t)&&r(i.parent,!1),c in n){let e=n[c]=n[c]||od(t[c],t);l=e(i,a),n[s]=e}else Number.isFinite(o)?(l=o+(t[c]||0),n[s]=null):l=e;return a&&l>=e&&(e=l+1),t[s]=l,l};return r}function sd(e,{canvasContext:t=e.canvasContext,shaderModuleProps:n,target:r,viewport:i}){let a=n?.project?.devicePixelRatio??t.cssToDeviceRatio(),[,o]=t.getDrawingBufferSize(),s=r?r.height:o,c=i;return[c.x*a,s-(c.y+c.height)*a,c.width*a,c.height*a]}function cd(e,...t){for(let n of t)if(n)for(let t in n)e[t]?Object.assign(e[t],n[t]):e[t]=n[t];return e}var ld=class extends ad{constructor(e,t){super(e,t);let n=e.createTexture({format:`rgba8unorm`,width:1,height:1,sampler:{minFilter:`linear`,magFilter:`linear`,addressModeU:`clamp-to-edge`,addressModeV:`clamp-to-edge`}}),r=e.createTexture({format:`depth16unorm`,width:1,height:1});this.fbo=e.createFramebuffer({id:`shadowmap`,width:1,height:1,colorAttachments:[n],depthStencilAttachment:r})}delete(){this.fbo&&=(this.fbo.destroy(),null)}getShadowMap(){return this.fbo.colorAttachments[0].texture}render(e){let t=this.fbo,n=this.device.canvasContext.cssToDeviceRatio(),r=e.viewports[0],i=r.width*n,a=r.height*n,o=[1,1,1,1];(i!==t.width||a!==t.height)&&t.resize({width:i,height:a}),super.render({...e,clearColor:o,target:t,pass:`shadow`})}getLayerParameters(e,t,n){return{...e.props.parameters,blend:!1,depthWriteEnabled:!0,depthCompare:`less-equal`}}shouldDrawLayer(e){return e.props.shadowEnabled!==!1}getShaderModuleProps(e,t,n){return{shadow:{project:n.project,drawToShadowMap:!0}}}},ud={color:[255,255,255],intensity:1},dd=[{color:[255,255,255],intensity:1,direction:[-1,3,-1]},{color:[255,255,255],intensity:.9,direction:[1,-8,-2.5]}],fd=[0,0,0,200/255],pd=class{constructor(e={}){this.id=`lighting-effect`,this.shadowColor=fd,this.shadow=!1,this.directionalLights=[],this.pointLights=[],this.shadowPasses=[],this.dummyShadowMap=null,this.setProps(e)}setup(e){this.context=e;let{device:t,deck:n}=e;this.shadow&&!this.dummyShadowMap&&(this._createShadowPasses(t),n._addDefaultShaderModule(Fu),this.dummyShadowMap=t.createTexture({width:1,height:1}))}setProps(e){this.ambientLight=void 0,this.directionalLights=[],this.pointLights=[];for(let t in e){let n=e[t];switch(n.type){case`ambient`:this.ambientLight=n;break;case`directional`:this.directionalLights.push(n);break;case`point`:this.pointLights.push(n)}}this._applyDefaultLights(),this.shadow=this.directionalLights.some(e=>e.shadow),this.context&&this.setup(this.context),this.props=e}preRender({layers:e,layerFilter:t,viewports:n,onViewportActive:r,views:i}){if(this.shadow){this.shadowMatrices=this._calculateMatrices();for(let a=0;a<this.shadowPasses.length;a++)this.shadowPasses[a].render({layers:e,layerFilter:t,viewports:n,onViewportActive:r,views:i,shaderModuleProps:{shadow:{shadowLightId:a,dummyShadowMap:this.dummyShadowMap,shadowMatrices:this.shadowMatrices}}})}}getShaderModuleProps(e,t){let n=this.shadow?{project:t.project,shadowMaps:this.shadowPasses.map(e=>e.getShadowMap()),dummyShadowMap:this.dummyShadowMap,shadowColor:this.shadowColor,shadowMatrices:this.shadowMatrices}:{},r={enabled:!0,lights:this._getLights(e)},i=e.props.material;return{shadow:n,lighting:r,phongMaterial:i,gouraudMaterial:i}}cleanup(e){for(let e of this.shadowPasses)e.delete();this.shadowPasses.length=0,this.dummyShadowMap&&(this.dummyShadowMap.destroy(),this.dummyShadowMap=null,e.deck._removeDefaultShaderModule(Fu))}_calculateMatrices(){let e=[];for(let t of this.directionalLights){let n=new Po().lookAt({eye:new io(t.direction).negate()});e.push(n)}return e}_createShadowPasses(e){for(let t=0;t<this.directionalLights.length;t++){let n=new ld(e);this.shadowPasses[t]=n}}_applyDefaultLights(){let{ambientLight:e,pointLights:t,directionalLights:n}=this;!e&&t.length===0&&n.length===0&&(this.ambientLight=new Zu(ud),this.directionalLights.push(new nd(dd[0]),new nd(dd[1])))}_getLights(e){let t=[];this.ambientLight&&t.push(this.ambientLight);for(let n of this.pointLights)t.push(n.getProjectedLight({layer:e}));for(let n of this.directionalLights)t.push(n.getProjectedLight({layer:e}));return t}},md=new class{constructor(e={}){this._pool=[],this.opts={overAlloc:2,poolSize:100},this.setOptions(e)}setOptions(e){Object.assign(this.opts,e)}allocate(e,t,{size:n=1,type:r,padding:i=0,copy:a=!1,initialize:o=!1,maxCount:s}){let c=r||e&&e.constructor||Float32Array,l=t*n+i;if(ArrayBuffer.isView(e)){if(l<=e.length)return e;if(l*e.BYTES_PER_ELEMENT<=e.buffer.byteLength)return new c(e.buffer,0,l)}let u=1/0;s&&(u=s*n+i);let d=this._allocate(c,l,o,u);return e&&a?d.set(e):o||d.fill(0,0,4),this._release(e),d}release(e){this._release(e)}_allocate(e,t,n,r){let i=Math.max(Math.ceil(t*this.opts.overAlloc),1);i>r&&(i=r);let a=this._pool,o=e.BYTES_PER_ELEMENT*i,s=a.findIndex(e=>e.byteLength>=o);if(s>=0){let t=new e(a.splice(s,1)[0],0,i);return n&&t.fill(0),t}return new e(i)}_release(e){if(!ArrayBuffer.isView(e))return;let t=this._pool,{buffer:n}=e,{byteLength:r}=n,i=t.findIndex(e=>e.byteLength>=r);i<0?t.push(n):(i>0||t.length<this.opts.poolSize)&&t.splice(i,0,n),t.length>this.opts.poolSize&&t.shift()}};function hd(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function gd(e,t){let n=e%t;return n<0?t+n:n}function _d(e){return[e[12],e[13],e[14]]}function vd(e){return{left:bd(e[3]+e[0],e[7]+e[4],e[11]+e[8],e[15]+e[12]),right:bd(e[3]-e[0],e[7]-e[4],e[11]-e[8],e[15]-e[12]),bottom:bd(e[3]+e[1],e[7]+e[5],e[11]+e[9],e[15]+e[13]),top:bd(e[3]-e[1],e[7]-e[5],e[11]-e[9],e[15]-e[13]),near:bd(e[3]+e[2],e[7]+e[6],e[11]+e[10],e[15]+e[14]),far:bd(e[3]-e[2],e[7]-e[6],e[11]-e[10],e[15]-e[14])}}var yd=new io;function bd(e,t,n,r){yd.set(e,t,n);let i=yd.len();return{distance:r/i,normal:new io(-e/i,-t/i,-n/i)}}function xd(e){return e-Math.fround(e)}var Sd;function Cd(e,t){let{size:n=1,startIndex:r=0}=t,i=t.endIndex===void 0?e.length:t.endIndex,a=(i-r)/n;Sd=md.allocate(Sd,a,{type:Float32Array,size:n*2});let o=r,s=0;for(;o<i;){for(let t=0;t<n;t++){let r=e[o++];Sd[s+t]=r,Sd[s+t+n]=xd(r)}s+=n*2}return Sd.subarray(0,a*n*2)}function wd(e){let t=null,n=!1;for(let r of e)r&&(t?(n||=(t=[[t[0][0],t[0][1]],[t[1][0],t[1][1]]],!0),t[0][0]=Math.min(t[0][0],r[0][0]),t[0][1]=Math.min(t[0][1],r[0][1]),t[1][0]=Math.max(t[1][0],r[1][0]),t[1][1]=Math.max(t[1][1],r[1][1])):t=r);return t}var Td=Math.PI/180,Ed=hd(),Dd=[0,0,0],Od={unitsPerMeter:[1,1,1],metersPerUnit:[1,1,1]};function kd({width:e,height:t,orthographic:n,fovyRadians:r,focalDistance:i,padding:a,near:o,far:s}){let c=e/t,l=n?new Po().orthographic({fovy:r,aspect:c,focalDistance:i,near:o,far:s}):new Po().perspective({fovy:r,aspect:c,near:o,far:s});if(a){let{left:n=0,right:r=0,top:i=0,bottom:o=0}=a,s=va((n+e-r)/2,0,e)-e/2,c=va((i+t-o)/2,0,t)-t/2;l[8]-=s*2/e,l[9]+=c*2/t}return l}var Ad=class e{constructor(e={}){this._frustumPlanes={},this.id=e.id||this.constructor.displayName||`viewport`,this.x=e.x||0,this.y=e.y||0,this.width=e.width||1,this.height=e.height||1,this.zoom=e.zoom||0,this.padding=e.padding,this.distanceScales=e.distanceScales||Od,this.focalDistance=e.focalDistance||1,this.position=e.position||Dd,this.modelMatrix=e.modelMatrix||null;let{longitude:t,latitude:n}=e;this.isGeospatial=Number.isFinite(n)&&Number.isFinite(t),this._initProps(e),this._initMatrices(e),this.equals=this.equals.bind(this),this.project=this.project.bind(this),this.unproject=this.unproject.bind(this),this.projectPosition=this.projectPosition.bind(this),this.unprojectPosition=this.unprojectPosition.bind(this),this.projectFlat=this.projectFlat.bind(this),this.unprojectFlat=this.unprojectFlat.bind(this)}get subViewports(){return null}get metersPerPixel(){return this.distanceScales.metersPerUnit[2]/this.scale}get projectionMode(){return this.isGeospatial?this.zoom<12?ml.WEB_MERCATOR:ml.WEB_MERCATOR_AUTO_OFFSET:ml.IDENTITY}equals(t){return t instanceof e?this===t||t.width===this.width&&t.height===this.height&&t.scale===this.scale&&t.projectionMode===this.projectionMode&&t.resolution===this.resolution&&ba(t.distanceScales.unitsPerMeter,this.distanceScales.unitsPerMeter)&&ba(t.projectionMatrix,this.projectionMatrix)&&ba(t.viewMatrix,this.viewMatrix):!1}project(e,{topLeft:t=!0}={}){let n=du(this.projectPosition(e),this.pixelProjectionMatrix),[r,i]=n,a=t?i:this.height-i;return e.length===2?[r,a]:[r,a,n[2]]}unproject(e,{topLeft:t=!0,targetZ:n}={}){let[r,i,a]=e,o=t?i:this.height-i,s=n&&n*this.distanceScales.unitsPerMeter[2],c=fu([r,o,a],this.pixelUnprojectionMatrix,s),[l,u,d]=this.unprojectPosition(c);return Number.isFinite(a)?[l,u,d]:Number.isFinite(n)?[l,u,n]:[l,u]}projectPosition(e){let[t,n]=this.projectFlat(e);return[t,n,(e[2]||0)*this.distanceScales.unitsPerMeter[2]]}unprojectPosition(e){let[t,n]=this.unprojectFlat(e);return[t,n,(e[2]||0)*this.distanceScales.metersPerUnit[2]]}projectFlat(e){if(this.isGeospatial){let t=tu(e);return t[1]=va(t[1],-318,830),t}return e}unprojectFlat(e){return this.isGeospatial?nu(e):e}getBounds(e={}){let t={targetZ:e.z||0},n=this.unproject([0,0],t),r=this.unproject([this.width,0],t),i=this.unproject([0,this.height],t),a=this.unproject([this.width,this.height],t);return[Math.min(n[0],r[0],i[0],a[0]),Math.min(n[1],r[1],i[1],a[1]),Math.max(n[0],r[0],i[0],a[0]),Math.max(n[1],r[1],i[1],a[1])]}getDistanceScales(e){return e&&this.isGeospatial?au({longitude:e[0],latitude:e[1],highPrecision:!0}):this.distanceScales}containsPixel({x:e,y:t,width:n=1,height:r=1}){return e<this.x+this.width&&this.x<e+n&&t<this.y+this.height&&this.y<t+r}getFrustumPlanes(){return this._frustumPlanes.near||Object.assign(this._frustumPlanes,vd(this.viewProjectionMatrix)),this._frustumPlanes}panByPosition(e,t,n){return null}_initProps(e){let t=e.longitude,n=e.latitude;this.isGeospatial&&(Number.isFinite(e.zoom)||(this.zoom=ru({latitude:n})+Math.log2(this.focalDistance)),this.distanceScales=e.distanceScales||au({latitude:n,longitude:t}));let r=2**this.zoom;this.scale=r;let{position:i,modelMatrix:a}=e,o=Dd;if(i&&(o=a?new Po(a).transformAsVector(i,[]):i),this.isGeospatial){let e=this.projectPosition([t,n,0]);this.center=new io(o).scale(this.distanceScales.unitsPerMeter).add(e)}else this.center=this.projectPosition(o)}_initMatrices(e){let{viewMatrix:t=Ed,projectionMatrix:n=null,orthographic:r=!1,fovyRadians:i,fovy:a=75,near:o=.1,far:s=1e3,padding:c=null,focalDistance:l=1}=e;this.viewMatrixUncentered=t,this.viewMatrix=new Po().multiplyRight(t).translate(new io(this.center).negate()),this.projectionMatrix=n||kd({width:this.width,height:this.height,orthographic:r,fovyRadians:i||a*Td,focalDistance:l,padding:c,near:o,far:s});let u=hd();uo(u,u,this.projectionMatrix),uo(u,u,this.viewMatrix),this.viewProjectionMatrix=u,this.viewMatrixInverse=co([],this.viewMatrix)||this.viewMatrix,this.cameraPosition=_d(this.viewMatrixInverse);let d=hd(),f=hd();po(d,d,[this.width/2,-this.height/2,1]),fo(d,d,[1,-1,0]),uo(f,d,this.viewProjectionMatrix),this.pixelProjectionMatrix=f,this.pixelUnprojectionMatrix=co(hd(),this.pixelProjectionMatrix),this.pixelUnprojectionMatrix||U.warn(`Pixel project matrix not invertible`)()}};Ad.displayName=`Viewport`;var jd=class e extends Ad{constructor(e={}){let{latitude:t=0,longitude:n=0,zoom:r=0,pitch:i=0,bearing:a=0,nearZMultiplier:o=.1,farZMultiplier:s=1.01,nearZ:c,farZ:l,orthographic:u=!1,projectionMatrix:d,repeat:f=!1,worldOffset:p=0,position:m,padding:h,legacyMeterSizes:g=!1}=e,{width:_,height:v,altitude:y=1.5}=e,b=2**r;_||=1,v||=1;let x,S=null;if(d)y=d[5]/2,x=lu(y);else{e.fovy?(x=e.fovy,y=uu(x)):x=lu(y);let n;if(h){let{top:e=0,bottom:t=0}=h;n=[0,va((e+v-t)/2,0,v)-v/2]}S=cu({width:_,height:v,scale:b,center:m&&[0,0,m[2]*iu(t)],offset:n,pitch:i,fovy:x,nearZMultiplier:o,farZMultiplier:s}),Number.isFinite(c)&&(S.near=c),Number.isFinite(l)&&(S.far=l)}let C=su({height:v,pitch:i,bearing:a,scale:b,altitude:y});p&&(C=new Po().translate([512*p,0,0]).multiplyLeft(C)),super({...e,width:_,height:v,viewMatrix:C,longitude:n,latitude:t,zoom:r,...S,fovy:x,focalDistance:y}),this.latitude=t,this.longitude=n,this.zoom=r,this.pitch=i,this.bearing=a,this.altitude=y,this.fovy=x,this.orthographic=u,this._subViewports=f?[]:null,this._pseudoMeters=g,Object.freeze(this)}get subViewports(){if(this._subViewports&&!this._subViewports.length){let t=this.getBounds(),n=Math.floor((t[0]+180)/360),r=Math.ceil((t[2]-180)/360);for(let t=n;t<=r;t++){let n=t?new e({...this,worldOffset:t}):this;this._subViewports.push(n)}}return this._subViewports}equals(t){return t instanceof e&&t._pseudoMeters===this._pseudoMeters&&super.equals(t)}projectPosition(e){if(this._pseudoMeters)return super.projectPosition(e);let[t,n]=this.projectFlat(e);return[t,n,(e[2]||0)*iu(e[1])]}unprojectPosition(e){if(this._pseudoMeters)return super.unprojectPosition(e);let[t,n]=this.unprojectFlat(e);return[t,n,(e[2]||0)/iu(n)]}addMetersToLngLat(e,t){return ou(e,t)}panByPosition(e,t,n){let r=fu(t,this.pixelUnprojectionMatrix),i=Ma([],this.projectFlat(e),Ia([],r)),a=Ma([],this.center,i),[o,s]=this.unprojectFlat(a);return{longitude:o,latitude:s}}panByPosition3D(e,t){let n=e[2]||0,r=za([],e,this.unproject(t,{targetZ:n}));return{longitude:this.longitude+r[0],latitude:this.latitude+r[1]}}getBounds(e={}){let t=gu(this,e.z||0);return[Math.min(t[0][0],t[1][0],t[2][0],t[3][0]),Math.min(t[0][1],t[1][1],t[2][1],t[3][1]),Math.max(t[0][0],t[1][0],t[2][0],t[3][0]),Math.max(t[0][1],t[1][1],t[2][1],t[3][1])]}fitBounds(t,n={}){let{width:r,height:i}=this,{longitude:a,latitude:o,zoom:s}=pu({width:r,height:i,bounds:t,...n});return new e({width:r,height:i,longitude:a,latitude:o,zoom:s})}};jd.displayName=`WebMercatorViewport`;var Md=[0,0,0];function Nd(e,t,n=!1){let r=t.projectPosition(e);if(n&&t instanceof jd){let[n,i,a=0]=e;r[2]=a*t.getDistanceScales([n,i]).unitsPerMeter[2]}return r}function Pd(e){let{viewport:t,modelMatrix:n,coordinateOrigin:r}=e,{coordinateSystem:i,fromCoordinateSystem:a,fromCoordinateOrigin:o}=e;return i==="default"&&(i=t.isGeospatial?`lnglat`:`cartesian`),a===void 0?a=i:a==="default"&&(a=t.isGeospatial?`lnglat`:`cartesian`),o===void 0&&(o=r),{viewport:t,coordinateSystem:i,coordinateOrigin:r,modelMatrix:n,fromCoordinateSystem:a,fromCoordinateOrigin:o}}function Fd(e,{viewport:t,modelMatrix:n,coordinateSystem:r,coordinateOrigin:i,offsetMode:a}){let[o,s,c=0]=e;switch(n&&([o,s,c]=Do([],[o,s,c,1],n)),r){case`default`:return Fd(e,{viewport:t,modelMatrix:n,coordinateSystem:t.isGeospatial?`lnglat`:`cartesian`,coordinateOrigin:i,offsetMode:a});case`lnglat`:return Nd([o,s,c],t,a);case`lnglat-offsets`:return Nd([o+i[0],s+i[1],c+(i[2]||0)],t,a);case`meter-offsets`:return Nd(ou(i,[o,s,c]),t,a);case`cartesian`:return t.isGeospatial?[o+i[0],s+i[1],c+i[2]]:t.projectPosition([o,s,c]);default:throw Error(`Invalid coordinateSystem: ${r}`)}}function Id(e,t){let{viewport:n,coordinateSystem:r,coordinateOrigin:i,modelMatrix:a,fromCoordinateSystem:o,fromCoordinateOrigin:s}=Pd(t),{autoOffset:c=!0}=t,{geospatialOrigin:l=Md,shaderCoordinateOrigin:u=Md,offsetMode:d=!1}=c?Ol(n,r,i):{},f=Fd(e,{viewport:n,modelMatrix:a,coordinateSystem:o,coordinateOrigin:s,offsetMode:d});return d&&to(f,f,n.projectPosition(l||u)),f}var Ld=class{id;topology;vertexCount;indices;attributes;bufferLayout;userData={};constructor(e){let{attributes:t={},indices:n=null,vertexCount:r=null}=e;this.id=e.id||k(`geometry`),this.topology=e.topology,n&&(this.indices=ArrayBuffer.isView(n)?{value:n,size:1}:n),this.attributes={};for(let[e,n]of Object.entries(t)){let t=ArrayBuffer.isView(n)?{value:n}:n;if(!ArrayBuffer.isView(t.value))throw Error(`${this._print(e)}: must be typed array or object with value as typed array`);if((e===`POSITION`||e===`positions`)&&!t.size&&(t.size=3),e===`indices`){if(this.indices)throw Error(`Multiple indices detected`);this.indices=t}else{let n=Rd(e),r=Object.keys(this.attributes).find(e=>Rd(e)===n);r&&delete this.attributes[r],this.attributes[e]=t}}this.indices&&this.indices.isIndexed!==void 0&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this.vertexCount=r||this._calculateVertexCount(this.attributes,this.indices),this.bufferLayout=e.bufferLayout||zd(this.attributes)}getVertexCount(){return this.vertexCount}getAttributes(){return this.indices?{indices:this.indices,...this.attributes}:this.attributes}_print(e){return`Geometry ${this.id} attribute ${e}`}_setAttributes(e,t){return this}_calculateVertexCount(e,t){if(t)return t.value.length;let n=1/0;for(let t of Object.values(e)){if(!t)continue;let{value:e,size:r,constant:i}=t;!i&&e&&r!==void 0&&r>=1&&(n=Math.min(n,e.length/r))}return n}};function Rd(e){switch(e){case`POSITION`:return`positions`;case`NORMAL`:return`normals`;case`TEXCOORD_0`:return`texCoords`;case`TEXCOORD_1`:return`texCoords1`;case`COLOR_0`:return`colors`;default:return e}}function zd(e){let t=[];for(let[n,r]of Object.entries(e)){if(!r)continue;let{value:e,size:i,normalized:a}=r;if(i===void 0)throw Error(`Attribute ${n} is missing a size`);t.push({name:Rd(n),format:s.getVertexFormatFromAttribute(e,i,a)})}return t}function Bd(e,t={}){let n=t.bufferName||`geometry`;if(Vd(e,n))return e;let r=t.minAttributeAlignment||4,i=Hd(e,t.attributes),a=[],o=0,c=1/0;for(let[e,t]of i){if(!t)continue;if(t.constant)throw Error(`Attribute ${e} is constant`);let{value:n,size:i,normalized:l}=t;if(!ArrayBuffer.isView(n))throw Error(`Attribute ${e} is missing typed array data`);if(i===void 0)throw Error(`Attribute ${e} is missing a size`);let u=s.getVertexFormatFromAttribute(n,i,l),d=s.getVertexFormatInfo(u);o=Wd(o,r),a.push({sourceName:e,attributeName:Rd(e),value:n,size:i,format:u,byteOffset:o,byteLength:d.byteLength}),o+=d.byteLength;let f=n.length/i;if(!Number.isInteger(f))throw Error(`Attribute ${e} length is not divisible by size`);c=Math.min(c,f)}if(a.length===0||!Number.isFinite(c))throw Error(`Geometry ${e.id} has no interleavable attributes`);let l=Wd(o,r),u=new ArrayBuffer(c*l);for(let e of a)Ud(u,c,l,e);return new Ld({id:e.id,topology:e.topology||`triangle-list`,vertexCount:e.vertexCount,indices:e.indices,attributes:{[n]:{value:new Uint8Array(u),size:l,byteStride:l}},bufferLayout:[{name:n,stepMode:`vertex`,byteStride:l,attributes:a.map(e=>({attribute:e.attributeName,format:e.format,byteOffset:e.byteOffset}))}]})}function Vd(e,t){if(e.bufferLayout.length!==1)return!1;let n=e.bufferLayout[0];return n.name===t&&!!n.attributes?.length&&!!e.attributes[t]}function Hd(e,t){return t?t.map(t=>[t,e.attributes[t]]):Object.entries(e.attributes)}function Ud(e,t,n,r){let i=r.value.constructor,a=i.BYTES_PER_ELEMENT;if(r.byteOffset%a!==0||n%a!==0)throw Error(`Attribute ${r.sourceName} is not aligned to its component type`);let o=new i(e),s=r.value,c=r.byteOffset/a,l=n/a;for(let e=0;e<t;e++){let t=e*r.size,n=e*l+c;for(let e=0;e<r.size;e++)o[n+e]=s[t+e]}}function Wd(e,t){return Math.ceil(e/t)*t}var Gd=1,Kd=1,qd=class{time=0;channels=new Map;animations=new Map;playing=!1;lastEngineTime=-1;constructor(){}addChannel(e){let{delay:t=0,duration:n=1/0,rate:r=1,repeat:i=1}=e,a=Gd++,o={time:0,delay:t,duration:n,rate:r,repeat:i};return this._setChannelTime(o,this.time),this.channels.set(a,o),a}removeChannel(e){this.channels.delete(e);for(let[t,n]of this.animations)n.channel===e&&this.detachAnimation(t)}isFinished(e){let t=this.channels.get(e);return t!==void 0&&this.time>=t.delay+t.duration*t.repeat}getTime(e){if(e===void 0)return this.time;let t=this.channels.get(e);return t===void 0?-1:t.time}setTime(e){this.time=Math.max(0,e);let t=this.channels.values();for(let e of t)this._setChannelTime(e,this.time);let n=this.animations.values();for(let e of n){let{animation:t,channel:n}=e;t.setTime(this.getTime(n))}}play(){this.playing=!0}pause(){this.playing=!1,this.lastEngineTime=-1}reset(){this.setTime(0)}attachAnimation(e,t){let n=Kd++;return this.animations.set(n,{animation:e,channel:t}),e.setTime(this.getTime(t)),n}detachAnimation(e){this.animations.delete(e)}update(e){this.playing&&(this.lastEngineTime===-1&&(this.lastEngineTime=e),this.setTime(this.time+(e-this.lastEngineTime)),this.lastEngineTime=e)}_setChannelTime(e,t){let n=t-e.delay;n>=e.duration*e.repeat?e.time=e.duration*e.rate:(e.time=Math.max(0,n)%e.duration,e.time*=e.rate)}};function Jd(e){let t=typeof window<`u`?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame:null;return t?t.call(window,e):setTimeout(()=>e(typeof performance<`u`?performance.now():Date.now()),1e3/60)}function Yd(e){let t=typeof window<`u`?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame:null;if(t){t.call(window,e);return}clearTimeout(e)}var Xd=0,Zd=`Animation Loop`,Qd={requestAnimationFrame:e=>Jd(e),cancelAnimationFrame:e=>Yd(e)},$d=class e{static defaultAnimationLoopProps={device:null,onAddHTML:()=>``,onInitialize:async()=>null,onRender:()=>{},onFinalize:()=>{},onError:e=>{console.error(e)},stats:void 0,autoResizeViewport:!1,animationFrameProvider:Qd};device=null;canvas=null;props;animationProps=null;timeline=null;stats;sharedStats;cpuTime;gpuTime;frameRate;display;_needsRedraw=`initialized`;_initialized=!1;_running=!1;_animationFrameId=null;_nextFramePromise=null;_resolveNextFrame=null;_cpuStartTime=0;_error=null;_lastFrameTime=0;constructor(t){if(this.props={...e.defaultAnimationLoopProps,...t},t=this.props,!t.device)throw Error(`No device provided`);this.stats=t.stats||new It({id:`animation-loop-${Xd++}`}),this.sharedStats=Di.stats.get(Zd),this.frameRate=this.stats.get(`Frame Rate`),this.frameRate.setSampleSize(1),this.cpuTime=this.stats.get(`CPU Time`),this.gpuTime=this.stats.get(`GPU Time`),this.setProps({autoResizeViewport:t.autoResizeViewport,animationFrameProvider:t.animationFrameProvider}),this.start=this.start.bind(this),this.stop=this.stop.bind(this),this._onMousemove=this._onMousemove.bind(this),this._onMouseleave=this._onMouseleave.bind(this)}destroy(){this.stop(),this._setDisplay(null),this.device?._disableDebugGPUTime()}delete(){this.destroy()}reportError(t){this._error=t,this.props.onError(t),this.props.onError===e.defaultAnimationLoopProps.onError&&typeof window<`u`&&typeof ErrorEvent<`u`&&window.dispatchEvent(new ErrorEvent(`error`,{error:t,message:t.message}))}setNeedsRedraw(e){return this._needsRedraw=this._needsRedraw||e,this}needsRedraw(){let e=this._needsRedraw;return this._needsRedraw=!1,e}setProps(e){if(`autoResizeViewport`in e&&(this.props.autoResizeViewport=e.autoResizeViewport||!1),`animationFrameProvider`in e){let t=e.animationFrameProvider||Qd;if(t!==this.props.animationFrameProvider){let e=this._animationFrameId!==null;e&&this._cancelAnimationFrame(),this.props.animationFrameProvider=t,e&&this._requestAnimationFrame()}}return this}async start(){if(this._running)return this;this._running=!0;try{if(!this._initialized){if(this._initialized=!0,await this._initDevice(),this._initialize(),!this._running)return null;await this.props.onInitialize(this._getAnimationProps())}return this._running?(this._cancelAnimationFrame(),this._requestAnimationFrame(),this):null}catch(e){let t=e instanceof Error?e:Error(`Unknown error`);throw this.props.onError(t),t}}stop(){if(this._running){let e=this.animationProps;this._cancelAnimationFrame(),this._nextFramePromise=null,this._resolveNextFrame=null,this._running=!1,this._lastFrameTime=0,e&&this.props.onFinalize(e)}return this}redraw(e,t=null){return this.device?.isLost||this._error?this:(this._beginFrameTimers(e),this._setupFrame(),this.animationProps&&(this.animationProps.animationFrame=t),this._updateAnimationProps(),this._renderFrame(this._getAnimationProps()),this._clearNeedsRedraw(),this._resolveNextFrame&&=(this._resolveNextFrame(this),this._nextFramePromise=null,null),this._endFrameTimers(),this)}attachTimeline(e){return this.timeline=e,this.timeline}detachTimeline(){this.timeline=null}waitForRender(){return this.setNeedsRedraw(`waitForRender`),this._nextFramePromise||=new Promise(e=>{this._resolveNextFrame=e}),this._nextFramePromise}async toDataURL(){if(this.setNeedsRedraw(`toDataURL`),await this.waitForRender(),this.canvas instanceof HTMLCanvasElement)return this.canvas.toDataURL();throw Error(`OffscreenCanvas`)}_initialize(){this._startEventHandling(),this._initializeAnimationProps(),this._updateAnimationProps(),this._resizeViewport(),this.device?._enableDebugGPUTime()}_setDisplay(e){this.display&&(this.display.destroy(),this.display.animationLoop=null),e&&(e.animationLoop=this),this.display=e}_requestAnimationFrame(){this._running&&(this._animationFrameId=this.props.animationFrameProvider.requestAnimationFrame(this._animationFrame.bind(this)))}_cancelAnimationFrame(){this._animationFrameId!==null&&(this.props.animationFrameProvider.cancelAnimationFrame(this._animationFrameId),this._animationFrameId=null)}_animationFrame(e,t){if(this._running)try{this.redraw(e,t??null),this._requestAnimationFrame()}catch(e){let t=e instanceof Error?e:Error(String(e));this.reportError(t),this.stop()}}_renderFrame(e){if(this.display){this.display._renderFrame(e);return}let t=this.props.onRender(this._getAnimationProps());this.device&&t!==!1&&this.device.submit()}_clearNeedsRedraw(){this._needsRedraw=!1}_setupFrame(){this._resizeViewport()}_initializeAnimationProps(){let e=this.device?.getDefaultCanvasContext();if(!this.device||!e)throw Error(`loop`);let t=e?.canvas,n=e.props.useDevicePixels;this.animationProps={animationLoop:this,device:this.device,canvasContext:e,canvas:t,useDevicePixels:n,timeline:this.timeline,needsRedraw:!1,width:1,height:1,aspect:1,time:0,startTime:Date.now(),engineTime:0,tick:0,tock:0,animationFrame:null,_mousePosition:null}}_getAnimationProps(){if(!this.animationProps)throw Error(`animationProps`);return this.animationProps}_updateAnimationProps(){if(!this.animationProps)return;let{width:e,height:t,aspect:n}=this._getSizeAndAspect();(e!==this.animationProps.width||t!==this.animationProps.height)&&this.setNeedsRedraw(`drawing buffer resized`),n!==this.animationProps.aspect&&this.setNeedsRedraw(`drawing buffer aspect changed`),this.animationProps.width=e,this.animationProps.height=t,this.animationProps.aspect=n,this.animationProps.needsRedraw=this._needsRedraw,this.animationProps.engineTime=Date.now()-this.animationProps.startTime,this.timeline&&this.timeline.update(this.animationProps.engineTime),this.animationProps.tick=Math.floor(this.animationProps.time/1e3*60),this.animationProps.tock++,this.animationProps.time=this.timeline?this.timeline.getTime():this.animationProps.engineTime}async _initDevice(){if(this.device=await this.props.device,!this.device)throw Error(`No device provided`);this.canvas=this.device.getDefaultCanvasContext().canvas||null}_createInfoDiv(){if(this.canvas&&this.props.onAddHTML){let e=document.createElement(`div`);document.body.appendChild(e),e.style.position=`relative`;let t=document.createElement(`div`);t.style.position=`absolute`,t.style.left=`10px`,t.style.bottom=`10px`,t.style.width=`300px`,t.style.background=`white`,this.canvas instanceof HTMLCanvasElement&&e.appendChild(this.canvas),e.appendChild(t);let n=this.props.onAddHTML(t);n&&(t.innerHTML=n)}}_getSizeAndAspect(){if(!this.device)return{width:1,height:1,aspect:1};let[e,t]=this.device.getDefaultCanvasContext().getDrawingBufferSize();return{width:e,height:t,aspect:e>0&&t>0?e/t:1}}_resizeViewport(){this.props.autoResizeViewport&&this.device.gl&&this.device.gl.viewport(0,0,this.device.gl.drawingBufferWidth,this.device.gl.drawingBufferHeight)}_beginFrameTimers(e){let t=e??(typeof performance<`u`?performance.now():Date.now());if(this._lastFrameTime){let e=t-this._lastFrameTime;e>0&&this.frameRate.addTime(e)}this._lastFrameTime=t,this.device?._isDebugGPUTimeEnabled()&&this._consumeEncodedGpuTime(),this.cpuTime.timeStart()}_endFrameTimers(){this.device?._isDebugGPUTimeEnabled()&&this._consumeEncodedGpuTime(),this.cpuTime.timeEnd(),this._updateSharedStats()}_consumeEncodedGpuTime(){if(!this.device)return;let e=this.device.commandEncoder._gpuTimeMs;e!==void 0&&(this.gpuTime.addTime(e),this.device.commandEncoder._gpuTimeMs=void 0)}_updateSharedStats(){if(this.stats!==this.sharedStats){for(let e of Object.keys(this.sharedStats.stats))this.stats.stats[e]||delete this.sharedStats.stats[e];this.stats.forEach(e=>{let t=this.sharedStats.get(e.name,e.type);t.sampleSize=e.sampleSize,t.time=e.time,t.count=e.count,t.samples=e.samples,t.lastTiming=e.lastTiming,t.lastSampleTime=e.lastSampleTime,t.lastSampleCount=e.lastSampleCount,t._count=e._count,t._time=e._time,t._samples=e._samples,t._startTime=e._startTime,t._timerPending=e._timerPending})}}_startEventHandling(){this.canvas&&(this.canvas.addEventListener(`mousemove`,this._onMousemove.bind(this)),this.canvas.addEventListener(`mouseleave`,this._onMouseleave.bind(this)))}_onMousemove(e){e instanceof MouseEvent&&(this._getAnimationProps()._mousePosition=[e.offsetX,e.offsetY])}_onMouseleave(e){this._getAnimationProps()._mousePosition=null}},ef=class{id;userData={};topology;bufferLayout=[];vertexCount;indices;attributes;constructor(e){if(this.id=e.id||k(`geometry`),this.topology=e.topology,this.indices=e.indices||null,this.attributes=e.attributes,this.vertexCount=e.vertexCount,this.bufferLayout=e.bufferLayout||[],this.indices&&!(this.indices.usage&n.INDEX))throw Error(`Index buffer must have INDEX usage`)}destroy(){this.indices?.destroy();for(let e of Object.values(this.attributes))e.destroy()}getVertexCount(){return this.vertexCount}getAttributes(){return this.attributes}getIndexes(){return this.indices||null}_calculateVertexCount(e){return e.byteLength/12}};function tf(e,t){if(t instanceof ef)return t;let n=Bd(t),r=nf(e,n),{attributes:i,bufferLayout:a}=rf(e,n);return new ef({topology:n.topology||`triangle-list`,bufferLayout:a,vertexCount:n.vertexCount,indices:r,attributes:i})}function nf(e,t){if(!t.indices)return;let r=t.indices.value;return e.createBuffer({usage:n.INDEX,data:r})}function rf(e,t){let n={};for(let[r,i]of Object.entries(t.attributes)){let a=t.bufferLayout.find(e=>e.name===r)?.name||Rd(r);i&&(n[a]=e.createBuffer({data:i.value,id:`${r}-buffer`}))}return{attributes:n,bufferLayout:t.bufferLayout,vertexCount:t.vertexCount}}function af(e,t){let n={},r=`Values`;if(e.attributes.length===0&&!e.varyings?.length)return{"No attributes or varyings":{[r]:`N/A`}};for(let t of e.attributes)if(t){let e=`${t.location} ${t.name}: ${t.type}`;n[`in ${e}`]={[r]:t.stepMode||`vertex`}}for(let t of e.varyings||[]){let e=`${t.location} ${t.name}`;n[`out ${e}`]={[r]:JSON.stringify(t)}}return n}var of=`__debugFramebufferState`,sf=8;function cf(e,t,n){if(e.device.type!==`webgl`)return;let r=df(e.device);if(!r.flushing){if(pf(e)){lf(e,n,r);return}t&&ff(t)&&t.handle!==null&&(r.queuedFramebuffers.includes(t)||r.queuedFramebuffers.push(t))}}function lf(e,t,n){if(n.queuedFramebuffers.length===0)return;let{gl:r}=e.device,i=r.getParameter(36010),a=r.getParameter(36006),[o,s]=e.device.getDefaultCanvasContext().getDrawingBufferSize(),c=mf(t.top,sf),l=mf(t.left,sf);n.flushing=!0;try{for(let e of n.queuedFramebuffers){let[n,i,a,u,d]=uf({framebuffer:e,targetWidth:o,targetHeight:s,topPx:c,leftPx:l,minimap:t.minimap});r.bindFramebuffer(36008,e.handle),r.bindFramebuffer(36009,null),r.blitFramebuffer(0,0,e.width,e.height,n,i,a,u,16384,9728),c+=d+sf}}finally{r.bindFramebuffer(36008,i),r.bindFramebuffer(36009,a),n.flushing=!1}}function uf(e){let{framebuffer:t,targetWidth:n,targetHeight:r,topPx:i,leftPx:a,minimap:o}=e,s=o?Math.max(Math.floor(n/4),1):n,c=o?Math.max(Math.floor(r/4),1):r,l=Math.min(s/t.width,c/t.height),u=Math.max(Math.floor(t.width*l),1),d=Math.max(Math.floor(t.height*l),1),f=a,p=Math.max(r-i-d,0);return[f,p,f+u,p+d,d]}function df(e){return e.userData[of]||={flushing:!1,queuedFramebuffers:[]},e.userData[of]}function ff(e){return`colorAttachments`in e}function pf(e){let t=e.props.framebuffer;return!t||t.handle===null}function mf(e,t){if(!e)return t;let n=Number.parseInt(e,10);return Number.isFinite(n)?n:t}function hf(e,t,n){if(e===t)return!0;if(!n||!e||!t)return!1;if(Array.isArray(e)){if(!Array.isArray(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!hf(e[r],t[r],n-1))return!1;return!0}if(Array.isArray(t))return!1;if(typeof e==`object`&&typeof t==`object`){let r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(let i of r)if(!t.hasOwnProperty(i)||!hf(e[i],t[i],n-1))return!1;return!0}return!1}var gf=class{bufferLayouts;constructor(e){this.bufferLayouts=e}getBufferLayout(e){return this.bufferLayouts.find(t=>t.name===e)||null}getAttributeNamesForBuffer(e){return ue(e)}mergeBufferLayouts(e,t){let n=[...e];for(let e of t){let t=n.findIndex(t=>t.name===e.name);t<0?n.push(e):n[t]=e}return n}};function _f(e,t){let n=le(e),r=t.slice();return r.sort((e,t)=>fe(ue(e).map(e=>n[e]))-fe(ue(t).map(e=>n[e]))),r}function vf(e){return typeof e==`object`&&!!e&&`resolveTextureBinding`in e&&typeof e.resolveTextureBinding==`function`}function yf(e){return e?.type===`texture`||e?.type===`external-texture`}function bf(e,t,n){let r=de(e,t,{ignoreWarnings:!0});return yf(r)?r:e.bindings.length===0&&n?.fallbackGroup!==void 0?{type:`texture`,name:t,group:n.fallbackGroup,location:0}:null}var xf=2,Sf=1e4,Cf=`render pipeline initialization failed`,wf=[`stencil8`,`depth16unorm`,`depth24plus`,`depth24plus-stencil8`,`depth32float`,`depth32float-stencil8`],Tf=class e{static defaultProps={...a.defaultProps,source:void 0,vs:null,fs:null,id:`unnamed`,handle:void 0,userData:{},defines:{},modules:[],plugins:[],geometry:null,indexBuffer:null,indexCount:void 0,firstVertex:0,firstIndex:0,attributes:{},constantAttributes:{},bindings:{},uniforms:{},varyings:[],isInstanced:void 0,instanceCount:0,vertexCount:0,shaderInputs:void 0,material:void 0,pipelineFactory:void 0,shaderFactory:void 0,transformFeedback:void 0,shaderAssembler:ie.getDefaultShaderAssembler(`glsl`),debugShaders:void 0,disableWarnings:void 0};device;id;source;vs;fs;pipelineFactory;shaderFactory;userData={};parameters;topology;bufferLayout;isInstanced=void 0;instanceCount=0;vertexCount;indexCount;firstVertex;firstIndex;indexBuffer=null;bufferAttributes={};constantAttributes={};bindings={};vertexArray;transformFeedback=null;pipeline;shaderInputs;material=null;_uniformStore;_attributeInfos={};_gpuGeometry=null;props;_dynamicIndexBufferSource=null;_dynamicAttributeBufferSources={};_colorAttachmentFormats;_depthStencilAttachmentFormat;_pipelineNeedsUpdate=`newly created`;_needsRedraw=`initializing`;_drawBlockedReason=!1;_destroyed=!1;_vertexCountSet=!1;_lastDrawTimestamp=-1;_bindingTable=[];get[Symbol.toStringTag](){return`Model`}toString(){return`Model(${this.id})`}constructor(t,n){let r=e.defaultProps.shaderAssembler,i=n.vertexCount!==void 0;this.props={...e.defaultProps,...n,shaderAssembler:n.shaderAssembler??(Ef(r,t.info.shadingLanguage)?r:ie.getDefaultShaderAssembler(t.info.shadingLanguage))},this._vertexCountSet=i,n=this.props,this.id=n.id||k(`model`),this.device=t,Object.assign(this.userData,n.userData),this.material=n.material||null;let a=Mf(t),o=x(this.props.plugins,a.shaderLanguage),s=re(this.props.modules,o.modules),c=Object.fromEntries(s.map(e=>[e.name,e])),l=n.shaderInputs||new ne(c,{disableWarnings:this.props.disableWarnings});n.shaderInputs&&o.modules.length>0&&l.addModules(o.modules),this.setShaderInputs(l);let u=N(this.props.modules,l.getModules()),d={...o.defines,...this.props.defines};if(this.device.type===`webgl`&&(this.props._uniformBlockLayouts=D(u)),this.props.shaderLayout=I(this.props.shaderLayout,u)||null,this.device.type===`webgpu`&&this.props.source){let e=this.props.shaderAssembler;p(Ef(e,`wgsl`));let{source:n,getUniforms:r,bindingTable:i,shaderLayout:s}=e.assembleWGSLShader({platformInfo:a,...this.props,modules:u,defines:d,pluginInjections:o.injections,pluginVertexInputs:o.vertexInputs,pluginVaryings:o.varyings});this.source=n,this._getModuleUniforms=r,this._bindingTable=i;let c=Df(s??t.getShaderLayout?.(this.source),o.vertexInputs),l=O(this.props.shaderLayout,c,Object.keys(o.vertexInputs));this.props.shaderLayout=I(l||null,u)||null}else{let e=this.props.shaderAssembler;p(Ef(e,`glsl`));let{vs:t,fs:n,getUniforms:r}=e.assembleGLSLShaderPair({platformInfo:a,...this.props,modules:u,defines:d,pluginInjections:o.injections,pluginVertexInputs:o.vertexInputs,pluginVaryings:o.varyings});this.vs=t,this.fs=n,this._getModuleUniforms=r,this._bindingTable=[]}this.vertexCount=this.props.vertexCount,this.indexCount=this.props.indexCount,this.firstVertex=this.props.firstVertex,this.firstIndex=this.props.firstIndex,this.instanceCount=this.props.instanceCount,this.topology=this.props.topology,this.bufferLayout=this.props.bufferLayout,this.parameters=this.props.parameters,this._colorAttachmentFormats=this.props.colorAttachmentFormats,this._depthStencilAttachmentFormat=this.props.depthStencilAttachmentFormat,n.geometry&&this.setGeometry(n.geometry),this.pipelineFactory=n.pipelineFactory||S.getDefaultPipelineFactory(this.device),this.shaderFactory=n.shaderFactory||R.getDefaultShaderFactory(this.device),this.pipeline=this._updatePipeline(),this.vertexArray=t.createVertexArray({shaderLayout:this.pipeline.shaderLayout,bufferLayout:this.pipeline.bufferLayout}),this._gpuGeometry&&this._setGeometryAttributes(this._gpuGeometry),`isInstanced`in n&&(this.isInstanced=n.isInstanced),n.instanceCount&&this.setInstanceCount(n.instanceCount),n.vertexCount&&this.setVertexCount(n.vertexCount),n.indexBuffer&&this.setIndexBuffer(n.indexBuffer),n.attributes&&this.setAttributes(n.attributes),n.constantAttributes&&this.setConstantAttributes(n.constantAttributes),n.bindings&&this.setBindings(n.bindings),n.transformFeedback&&(this.transformFeedback=n.transformFeedback)}destroy(){this._destroyed||=(this.pipelineFactory.release(this.pipeline),this.shaderFactory.release(this.pipeline.vs),this.pipeline.fs&&this.pipeline.fs!==this.pipeline.vs&&this.shaderFactory.release(this.pipeline.fs),this._uniformStore.destroy(),this._gpuGeometry?.destroy(),!0)}needsRedraw(){this._getBindingsUpdateTimestamp()>this._lastDrawTimestamp&&this.setNeedsRedraw(`contents of bound textures or buffers updated`);let e=this._needsRedraw;return this._needsRedraw=!1,e}setNeedsRedraw(e){this._needsRedraw||=e}getBindingDebugTable(){return this._bindingTable}predraw(e){this._syncDynamicBuffers(),this.updateShaderInputs(e),this.material?.updateShaderInputs(e),this.pipeline=this._updatePipeline()}draw(e){if(this._drawBlockedReason&&!this._pipelineNeedsUpdate)return i.info(xf,`>>> DRAWING ABORTED ${this.id}: ${this._drawBlockedReason}`)(),!1;let t=this._areBindingsLoading();if(t)return i.info(xf,`>>> DRAWING ABORTED ${this.id}: ${t} not loaded`)(),!1;this._syncAttachmentFormats(e);try{e.pushDebugGroup(`${this}.predraw(${e})`),this.device.type===`webgpu`?(this.updateShaderInputs(),this.material?.updateShaderInputs(),this._syncDynamicBuffers(),this.pipeline=this._updatePipeline()):this.predraw(this.device.commandEncoder)}finally{e.popDebugGroup()}let n,r=this.pipeline.isErrored;try{if(e.pushDebugGroup(`${this}.draw(${e})`),this._logDrawCallStart(),this.pipeline=this._updatePipeline(),r=this.pipeline.isErrored,r)i.info(xf,`>>> DRAWING ABORTED ${this.id}: ${Cf}`)(),n=!1;else{let t=this.vertexArray.getDrawValidationError();if(t)i.info(xf,`>>> DRAWING ABORTED ${this.id}: ${t}`)(),this._drawBlockedReason=t,n=!1;else{let t=this._getCurrentShaderLayout(),r=this._getBindings(t),i=this._getBindGroups(t,r),{indexBuffer:a}=this.vertexArray,o=a?this.indexCount??(this._vertexCountSet?this.vertexCount:a.byteLength/(a.indexType===`uint32`?4:2)):void 0;e.setPipeline(this.pipeline),e.setBindings(i,{_bindGroupCacheKeys:this._getBindGroupCacheKeys()}),e.setVertexArray(this.vertexArray),n=this.isInstanced===!0&&this.instanceCount===0||e.draw({isInstanced:this.isInstanced,vertexCount:this.vertexCount,instanceCount:this.isInstanced?this.instanceCount:void 0,indexCount:o,firstVertex:this.firstVertex,firstIndex:this.firstIndex,transformFeedback:this.transformFeedback||void 0,uniforms:this.props.uniforms,parameters:this.parameters,topology:this.topology})}}}finally{e.popDebugGroup(),this._logDrawCallEnd()}return this._logFramebuffer(e),n?(this._lastDrawTimestamp=this.device.timestamp,this._needsRedraw=!1):r?(this._needsRedraw=Cf,this._drawBlockedReason=Cf):this._needsRedraw=this._drawBlockedReason?this._drawBlockedReason:`waiting for resource initialization`,n}setGeometry(e){this._gpuGeometry?.destroy();let t=e&&tf(this.device,e);if(t){this.setTopology(t.topology||`triangle-list`);let e=new gf(this.bufferLayout);this.bufferLayout=e.mergeBufferLayouts(t.bufferLayout,this.bufferLayout),this.vertexArray&&this._setGeometryAttributes(t)}this._gpuGeometry=t}setTopology(e){e!==this.topology&&(this.topology=e,this._setPipelineNeedsUpdate(`topology`))}setBufferLayout(e){let t=new gf(this.bufferLayout),n=this._gpuGeometry?t.mergeBufferLayouts(e,this._gpuGeometry.bufferLayout):e;hf(n,this.bufferLayout,-1)||(this.bufferLayout=n,this._setPipelineNeedsUpdate(`bufferLayout`),this.pipeline=this._updatePipeline(),this.vertexArray=this.device.createVertexArray({shaderLayout:this.pipeline.shaderLayout,bufferLayout:this.pipeline.bufferLayout}),this._gpuGeometry&&this._setGeometryAttributes(this._gpuGeometry))}setParameters(e){hf(e,this.parameters,2)||(this.parameters=e,this._setPipelineNeedsUpdate(`parameters`))}setInstanceCount(e){this.instanceCount=e,this.isInstanced===void 0&&e>0&&(this.isInstanced=!0),this.setNeedsRedraw(`instanceCount`)}setVertexCount(e){this.vertexCount=e,this._vertexCountSet=!0,this.setNeedsRedraw(`vertexCount`)}setIndexCount(e){this.indexCount=e,this.setNeedsRedraw(`indexCount`)}setDrawOffsets({firstVertex:e,firstIndex:t}){this.firstVertex=e,this.firstIndex=t,this.setNeedsRedraw(`drawOffsets`)}setShaderInputs(e){this.shaderInputs=e,this._uniformStore=new v(this.device,this.shaderInputs.modules);for(let[e,t]of Object.entries(this.shaderInputs.modules))if(A(t)&&!this.material?.ownsModule(e)){let t=this._uniformStore.getManagedUniformBuffer(e);this.bindings[`${e}Uniforms`]=t}this.setNeedsRedraw(`shaderInputs`)}setMaterial(e){this.material=e,this.setNeedsRedraw(`material`)}updateShaderInputs(e){this._uniformStore.setUniforms(this.shaderInputs.getUniformValues(),e),this.setBindings(this._getNonMaterialBindings(this.shaderInputs.getBindingValues())),this.setNeedsRedraw(`shaderInputs`)}setBindings(e){Object.assign(this.bindings,e),this.setNeedsRedraw(`bindings`)}setTransformFeedback(e){this.transformFeedback=e,this.setNeedsRedraw(`transformFeedback`)}setIndexBuffer(e){let t=e instanceof ee?e.buffer:e;this.indexBuffer=t,this._dynamicIndexBufferSource=e instanceof ee?{source:e,generation:e.generation}:null,this.vertexArray.setIndexBuffer(t),this.setNeedsRedraw(`indexBuffer`)}setAttributes(e,t){this._drawBlockedReason=!1;let n=t?.disableWarnings??this.props.disableWarnings;e.indices&&i.warn(`Model:${this.id} setAttributes() - indexBuffer should be set using setIndexBuffer()`)(),this.bufferLayout=_f(this.pipeline.shaderLayout,this.bufferLayout);let r=new gf(this.bufferLayout);for(let[t,a]of Object.entries(e)){let e=a instanceof ee?a.buffer:a,o=r.getBufferLayout(t);if(!o){n||i.warn(`Model(${this.id}): Missing layout for buffer "${t}".`)();continue}let s=r.getAttributeNamesForBuffer(o),c=!1;for(let t of s){let r=this._attributeInfos[t];if(r){let t=this.device.type===`webgpu`?this.vertexArray.getBufferSlot(r.bufferName):r.location;if(t===null){n||i.warn(`Model(${this.id}): Missing vertex array slot for buffer "${r.bufferName}".`)();continue}this.vertexArray.setBuffer(t,e),a instanceof ee?this._dynamicAttributeBufferSources[t]={source:a,generation:a.generation}:delete this._dynamicAttributeBufferSources[t],c=!0}}!c&&!n&&i.warn(`Model(${this.id}): Ignoring buffer "${e.id}" for unknown attribute "${t}"`)()}this.setNeedsRedraw(`attributes`)}setConstantAttributes(e,t){for(let[n,r]of Object.entries(e)){let e=this._attributeInfos[n];e?this.vertexArray.setConstantWebGL(e.location,r):(t?.disableWarnings??this.props.disableWarnings)||i.warn(`Model "${this.id}: Ignoring constant supplied for unknown attribute "${n}"`)()}this.setNeedsRedraw(`constants`)}_areBindingsLoading(){for(let e of Object.values(this.bindings))if(vf(e)&&!e.isReady)return e.id;for(let e of Object.values(this.material?.bindings||{}))if(vf(e)&&!e.isReady)return e.id;return!1}_getBindings(e=this._getCurrentShaderLayout()){let t={};for(let[n,r]of Object.entries(this.bindings)){let i=Of(n,r,e);i&&(t[n]=i)}return t}_getBindGroups(e=this._getCurrentShaderLayout(),t=this._getBindings(e)){let n=e.bindings.length?pe(e,t):{0:t};if(!this.material)return n;for(let[t,r]of Object.entries(this.material.getBindingsByGroup(e))){let e=Number(t);n[e]={...n[e]||{},...r}}return n}_getBindGroupCacheKeys(){let e=this.material?.getBindGroupCacheKey(3);return e?{3:e}:{}}_getBindingsUpdateTimestamp(){let e=0;this._dynamicIndexBufferSource&&(e=Math.max(e,this._dynamicIndexBufferSource.source.updateTimestamp));for(let t of Object.values(this._dynamicAttributeBufferSources))e=Math.max(e,t.source.updateTimestamp);for(let t of Object.values(this.bindings))t instanceof oe?e=Math.max(e,t.texture.updateTimestamp):t instanceof n||t instanceof z||t instanceof ta||t instanceof ee?e=Math.max(e,t.updateTimestamp):vf(t)?e=t.isReady?Math.max(e,t.updateTimestamp):1/0:E(t)&&(e=Math.max(e,(t.buffer instanceof ee,t.buffer.updateTimestamp)));return Math.max(e,this.material?.getBindingsUpdateTimestamp()||0)}_setGeometryAttributes(e){let t={...e.attributes};for(let[e]of Object.entries(t))!this.pipeline.shaderLayout.attributes.find(t=>t.name===e)&&e!==`positions`&&delete t[e];this.vertexCount=e.vertexCount,this._vertexCountSet=!0,this.setIndexBuffer(e.indices||null),this.setAttributes(e.attributes,{disableWarnings:!0}),this.setAttributes(t,{disableWarnings:this.props.disableWarnings}),this.setNeedsRedraw(`geometry attributes`)}_setPipelineNeedsUpdate(e){this._pipelineNeedsUpdate||=e,this._drawBlockedReason=!1,this.setNeedsRedraw(e)}_updatePipeline(){if(this._pipelineNeedsUpdate){let e=null,t=null;this.pipeline&&(i.log(1,`Model ${this.id}: Recreating pipeline because "${this._pipelineNeedsUpdate}".`)(),e=this.pipeline.vs,t=this.pipeline.fs),this._pipelineNeedsUpdate=!1;let n=this.shaderFactory.createShader({id:`${this.id}-vertex`,stage:`vertex`,source:this.source||this.vs,debugShaders:this.props.debugShaders}),r=null;this.source?r=n:this.fs&&(r=this.shaderFactory.createShader({id:`${this.id}-fragment`,stage:`fragment`,source:this.source||this.fs,debugShaders:this.props.debugShaders})),this.pipeline=this.pipelineFactory.createRenderPipeline({...this.props,bindings:void 0,bufferLayout:this.bufferLayout,colorAttachmentFormats:this._colorAttachmentFormats,depthStencilAttachmentFormat:this._depthStencilAttachmentFormat,topology:this.topology,parameters:this.parameters,bindGroups:void 0,vs:n,fs:r}),this._attributeInfos=me(this.pipeline.shaderLayout,this.bufferLayout),e&&this.shaderFactory.release(e),t&&t!==e&&this.shaderFactory.release(t)}return this.pipeline}_lastLogTime=0;_logOpen=!1;_logDrawCallStart(){let e=i.level>3?0:Sf;i.level<2||Date.now()-this._lastLogTime<e||(this._lastLogTime=Date.now(),this._logOpen=!0,i.group(xf,`>>> DRAWING MODEL ${this.id}`,{collapsed:i.level<=2})())}_logDrawCallEnd(){if(this._logOpen){let e=af(this.pipeline.shaderLayout,this.id);i.table(xf,e)();let t=this.shaderInputs.getDebugTable();i.table(xf,t)();let n=this._getAttributeDebugTable();i.table(xf,this._attributeInfos)(),i.table(xf,n)(),i.groupEnd(xf)(),this._logOpen=!1}}_drawCount=0;_logFramebuffer(e){let t=this.device.props.debugFramebuffers;if(this._drawCount++,!t)return;let n=e.props.framebuffer;cf(e,n,{id:n?.id||`${this.id}-framebuffer`,minimap:!0})}_getAttributeDebugTable(){let e={};for(let[t,n]of Object.entries(this._attributeInfos)){let r=this.vertexArray.attributes[n.location];e[n.location]={name:t,type:n.shaderType,values:r?this._getBufferOrConstantValues(r,n.bufferDataType):`null`}}if(this.vertexArray.indexBuffer){let{indexBuffer:t}=this.vertexArray,n=t.indexType===`uint32`?new Uint32Array(t.debugData):new Uint16Array(t.debugData);e.indices={name:`indices`,type:t.indexType,values:n.toString()}}return e}_getBufferOrConstantValues(e,t){let r=d.getTypedArrayConstructor(t);return(e instanceof n?new r(e.debugData):e).toString()}_getNonMaterialBindings(e){if(!this.material)return e;let t={};for(let[n,r]of Object.entries(e))this.material.ownsBinding(n)||(t[n]=r);return t}_getCurrentShaderLayout(){return this.pipeline?.shaderLayout||this.props.shaderLayout||{bindings:[]}}_syncDynamicBuffers(){if(this._dynamicIndexBufferSource&&this._dynamicIndexBufferSource.generation!==this._dynamicIndexBufferSource.source.generation){let e=this._dynamicIndexBufferSource.source.buffer;this.indexBuffer=e,this.vertexArray.setIndexBuffer(e),this._dynamicIndexBufferSource.generation=this._dynamicIndexBufferSource.source.generation,this.setNeedsRedraw(`dynamic index buffer`)}for(let[e,t]of Object.entries(this._dynamicAttributeBufferSources))t.generation!==t.source.generation&&(this.vertexArray.setBuffer(Number(e),t.source.buffer),t.generation=t.source.generation,this.setNeedsRedraw(`dynamic attribute buffer`))}_syncAttachmentFormats(e){if(this.device.type!==`webgpu`)return;let t=e.framebuffer||e.props.framebuffer,n=e.props,r=n.colorAttachmentFormats??t?.colorAttachments?.map(e=>kf(e?.texture?.format)),i=n.depthStencilAttachmentFormat===!1?void 0:n.depthStencilAttachmentFormat??Af(t?.depthStencilAttachment?.texture?.format);(!hf(this._colorAttachmentFormats,r,1)||this._depthStencilAttachmentFormat!==i)&&(this._colorAttachmentFormats=r,this._depthStencilAttachmentFormat=i,this._setPipelineNeedsUpdate(`attachment formats`))}};function Ef(e,t){return e.shaderLanguage!==void 0&&e.shaderLanguage!==t?!1:t===`glsl`?`assembleGLSLShaderPair`in e&&typeof e.assembleGLSLShaderPair==`function`:`assembleWGSLShader`in e&&typeof e.assembleWGSLShader==`function`}function Df(e,t){return!e||Object.keys(t).length===0?e:{...e,attributes:e.attributes.map(e=>{let n=e.name.startsWith(`_luma_`)?e.name.slice(6):null;return n&&t[n]?{...e,name:n}:e})}}function Of(e,t,n){if(vf(t)){let r=bf(n,e,{fallbackGroup:0});return r?t.resolveTextureBinding(r):null}return t instanceof ee?t.buffer:E(t)?M(t):t}function kf(e){return e&&!jf(e)?e:null}function Af(e){return e&&jf(e)?e:void 0}function jf(e){return wf.includes(e)}function Mf(e){return{type:e.type,shaderLanguage:e.info.shadingLanguage,shaderLanguageVersion:e.info.shadingLanguageVersion,gpu:e.info.gpu,limits:e.limits,features:e.features}}var Nf=35980,Pf=35981,Ff=class e{device;model;transformFeedback;static defaultProps={...Tf.defaultProps,feedbackBufferMode:`separate`,outputs:void 0,feedbackBuffers:void 0};static isSupported(e){return e?.info?.type===`webgl`}constructor(t,n=e.defaultProps){if(!e.isSupported(t))throw Error(`BufferTransform not yet implemented on WebGPU`);this.device=t,this.model=new Tf(this.device,{id:n.id||`buffer-transform-model`,fs:n.fs||fa(),topology:n.topology||`point-list`,varyings:n.outputs||n.varyings,...n,bufferMode:n.bufferMode||(n.feedbackBufferMode===`interleaved`?Nf:Pf)}),this.transformFeedback=this.device.createTransformFeedback({layout:this.model.pipeline.shaderLayout,buffers:n.feedbackBuffers}),this.model.setTransformFeedback(this.transformFeedback)}destroy(){this.model&&this.model.destroy()}delete(){this.destroy()}run(e){e?.inputBuffers&&this.model.setAttributes(e.inputBuffers),e?.outputBuffers&&this.transformFeedback.setBuffers(e.outputBuffers);let t=this.device.beginRenderPass({discard:!0,...e});this.model.draw(t),t.end()}getBuffer(e){return this.transformFeedback.getBuffer(e)}readAsync(e){let t=this.getBuffer(e);if(!t)throw Error(`BufferTransform#getBuffer`);if(t instanceof n)return t.readAsync();let{buffer:r,byteOffset:i=0,byteLength:a=r.byteLength}=t;return r.readAsync(i,a)}},If=2,Lf=1e4,Rf=class e{static defaultProps={...b.defaultProps,id:`unnamed`,handle:void 0,userData:{},source:``,modules:[],defines:{},plugins:[],bindings:void 0,shaderInputs:void 0,pipelineFactory:void 0,shaderFactory:void 0,shaderAssembler:ie.getDefaultShaderAssembler(`wgsl`),debugShaders:void 0};device;id;pipelineFactory;shaderFactory;userData={};bindings={};pipeline;source;shader;shaderInputs;_uniformStore;_pipelineNeedsUpdate=`newly created`;_getModuleUniforms;props;_destroyed=!1;constructor(t,n){if(t.type!==`webgpu`)throw Error(`Computation is only supported in WebGPU`);this.props={...e.defaultProps,...n},n=this.props,this.id=n.id||k(`model`),this.device=t,Object.assign(this.userData,n.userData);let r=zf(t),i=x(this.props.plugins,r.shaderLanguage);if(Object.keys(i.vertexInputs).length>0||Object.keys(i.varyings).length>0)throw Error(`Computation does not support ShaderPlugin vertex inputs or varyings`);let a=re(this.props.modules,i.modules),o=Object.fromEntries(a.map(e=>[e.name,e]));this.shaderInputs=n.shaderInputs||new ne(o),n.shaderInputs&&i.modules.length>0&&this.shaderInputs.addModules(i.modules),this.setShaderInputs(this.shaderInputs);let s=N(this.props.modules,this.shaderInputs?.getModules()),c={...i.defines,...this.props.defines};this.props.shaderLayout=I(this.props.shaderLayout,s)||null,this.pipelineFactory=n.pipelineFactory||S.getDefaultPipelineFactory(this.device),this.shaderFactory=n.shaderFactory||R.getDefaultShaderFactory(this.device);let l=this.props.shaderAssembler;p(l instanceof T);let{source:u,getUniforms:d,shaderLayout:f}=l.assembleWGSLShader({platformInfo:r,...this.props,modules:s,defines:c,scanVertexAttributes:!1,pluginInjections:i.injections});this.source=u,this._getModuleUniforms=d;let m=f??t.getShaderLayout?.(this.source,{scanVertexAttributes:!1});this.props.shaderLayout=I(this.props.shaderLayout||m||null,s)||null,this.pipeline=this._updatePipeline(),n.bindings&&this.setBindings(n.bindings)}destroy(){this._destroyed||=(this.pipelineFactory.release(this.pipeline),this.shaderFactory.release(this.shader),this._uniformStore.destroy(),!0)}predraw(e){this.updateShaderInputs(e)}dispatch(e,t,n,r){try{this._logDrawCallStart(),this._setPipeline(e),e.dispatch(t,n,r)}finally{this._logDrawCallEnd()}}dispatchIndirect(e,t,n=0){try{this._logDrawCallStart(),this._setPipeline(e),e.dispatchIndirect(t,n)}finally{this._logDrawCallEnd()}}_setPipeline(e){this.pipeline=this._updatePipeline(),this.pipeline.setBindings(this.bindings),e.setPipeline(this.pipeline),e.setBindings({})}setVertexCount(e){}setInstanceCount(e){}setShaderInputs(e){this.shaderInputs=e,this._uniformStore=new v(this.device,this.shaderInputs.modules);for(let[e,t]of Object.entries(this.shaderInputs.modules))if(A(t)){let t=this._uniformStore.getManagedUniformBuffer(e);this.bindings[`${e}Uniforms`]=t}}setShaderModuleProps(e){let t=this._getModuleUniforms(e),n=Object.keys(t).filter(e=>{let n=t[e];return!y(n)&&typeof n!=`number`&&typeof n!=`boolean`}),r={};for(let e of n)r[e]=t[e],delete t[e]}updateShaderInputs(e){this._uniformStore.setUniforms(this.shaderInputs.getUniformValues(),e)}setBindings(e){Object.assign(this.bindings,e)}_setPipelineNeedsUpdate(e){this._pipelineNeedsUpdate=this._pipelineNeedsUpdate||e}_updatePipeline(){if(this._pipelineNeedsUpdate){let e=null;this.pipeline&&(i.log(1,`Model ${this.id}: Recreating pipeline because "${this._pipelineNeedsUpdate}".`)(),e=this.shader),this._pipelineNeedsUpdate=!1,this.shader=this.shaderFactory.createShader({id:`${this.id}-fragment`,stage:`compute`,source:this.source,debugShaders:this.props.debugShaders}),this.pipeline=this.pipelineFactory.createComputePipeline({...this.props,shader:this.shader}),e&&this.shaderFactory.release(e)}return this.pipeline}_lastLogTime=0;_logOpen=!1;_logDrawCallStart(){let e=i.level>3?0:Lf;i.level<2||Date.now()-this._lastLogTime<e||(this._lastLogTime=Date.now(),this._logOpen=!0,i.group(If,`>>> DRAWING MODEL ${this.id}`,{collapsed:i.level<=2})())}_logDrawCallEnd(){if(this._logOpen){let e=this.shaderInputs.getDebugTable();i.table(If,e)(),i.groupEnd(If)(),this._logOpen=!1}}_drawCount=0;_getBufferOrConstantValues(e,t){let r=d.getTypedArrayConstructor(t);return(e instanceof n?new r(e.debugData):e).toString()}};function zf(e){return{type:e.type,shaderLanguage:e.info.shadingLanguage,shaderLanguageVersion:e.info.shadingLanguageVersion,gpu:e.info.gpu,limits:e.limits,features:e.features}}var Bf={blendColorOperation:`add`,blendColorSrcFactor:`one`,blendColorDstFactor:`zero`,blendAlphaOperation:`add`,blendAlphaSrcFactor:`constant`,blendAlphaDstFactor:`zero`},Vf=class extends ad{constructor(){super(...arguments),this._colorEncoderState=null}render(e){return`pickingFBO`in e?this._drawPickingBuffer(e):{decodePickingColor:null,stats:super._render(e)}}_drawPickingBuffer({layers:e,layerFilter:t,views:n,viewports:r,onViewportActive:i,pickingFBO:a,deviceRect:{x:o,y:s,width:c,height:l},cullRect:u,effects:d,pass:f=`picking`,pickZ:p,canvasContext:m,shaderModuleProps:h,clearColor:g}){this.pickZ=p;let _=this._resetColorEncoder(p),v=[o,s,c,l],y=super._render({target:a,layers:e,layerFilter:t,views:n,viewports:r,onViewportActive:i,cullRect:u,effects:d?.filter(e=>e.useInPicking),pass:f,canvasContext:m,isPicking:!0,shaderModuleProps:h,clearColor:g??[0,0,0,0],colorMask:15,scissorRect:v});return this._colorEncoderState=null,{decodePickingColor:_&&Uf.bind(null,_),stats:y}}shouldDrawLayer(e){let{pickable:t,operation:n}=e.props;return t&&n.includes(`draw`)||n.includes(`terrain`)||n.includes(`mask`)}getShaderModuleProps(e,t,n){return{picking:{isActive:1,isAttribute:this.pickZ,disabledPickingIndices:e.internalState?.disabledPickingIndices},lighting:{enabled:!1}}}getLayerParameters(e,t,n){let r={...e.props.parameters},{pickable:i,operation:a}=e.props;return this._colorEncoderState?i&&a.includes(`draw`)?(Object.assign(r,Bf),r.blend=!0,this.device.type===`webgpu`?r.blendConstant=Hf(this._colorEncoderState,e,n):r.blendColor=Hf(this._colorEncoderState,e,n),a.includes(`terrain`)&&e.state?._hasPickingCover&&(r.blendAlphaSrcFactor=`one`)):a.includes(`terrain`)&&(r.blend=!1):r.blend=!1,r}_resetColorEncoder(e){return this._colorEncoderState=e?null:{byLayer:new Map,byAlpha:[]},this._colorEncoderState}};function Hf(e,t,n){let{byLayer:r,byAlpha:i}=e,a,o=r.get(t);return o?(o.viewports.push(n),a=o.a):(a=r.size+1,a<=255?(o={a,layer:t,viewports:[n]},r.set(t,o),i[a]=o):(U.warn(`Too many pickable layers, only picking the first 255`)(),a=0)),[0,0,0,a/255]}function Uf(e,t){let n=e.byAlpha[t[3]];return n&&{pickedLayer:n.layer,pickedViewports:n.viewports,pickedObjectIndex:n.layer.decodePickingColor(t)}}var Wf={NO_STATE:`Awaiting state`,MATCHED:`Matched. State transferred from previous layer`,INITIALIZED:`Initialized`,AWAITING_GC:`Discarded. Awaiting garbage collection`,AWAITING_FINALIZATION:`No longer matched. Awaiting garbage collection`,FINALIZED:`Finalized! Awaiting garbage collection`},Gf=Symbol.for(`component`),Kf=Symbol.for(`propTypes`),qf=Symbol.for(`deprecatedProps`),Jf=Symbol.for(`asyncPropDefaults`),Yf=Symbol.for(`asyncPropOriginal`),Xf=Symbol.for(`asyncPropResolved`);function Zf(e,t=()=>!0){return Array.isArray(e)?Qf(e,t,[]):t(e)?[e]:[]}function Qf(e,t,n){let r=-1;for(;++r<e.length;){let i=e[r];Array.isArray(i)?Qf(i,t,n):t(i)&&n.push(i)}return n}function $f({target:e,source:t,start:n=0,count:r=1}){let i=t.length,a=r*i,o=0;for(let r=n;o<i;o++)e[r++]=t[o];for(;o<a;)o<a-o?(e.copyWithin(n+o,n,n+o),o*=2):(e.copyWithin(n+o,n,n+a-o),o=a);return e}var ep=class{constructor(e,t,n){this._loadCount=0,this._subscribers=new Set,this.id=e,this.context=n,this.setData(t)}subscribe(e){this._subscribers.add(e)}unsubscribe(e){this._subscribers.delete(e)}inUse(){return this._subscribers.size>0}delete(){}getData(){return this.isLoaded?this._error?Promise.reject(this._error):this._content:this._loader.then(()=>this.getData())}setData(e,t){if(e===this._data&&!t)return;this._data=e;let n=++this._loadCount,r=e;typeof e==`string`&&(r=xr(e)),r instanceof Promise?(this.isLoaded=!1,this._loader=r.then(e=>{this._loadCount===n&&(this.isLoaded=!0,this._error=void 0,this._content=e)}).catch(e=>{this._loadCount===n&&(this.isLoaded=!0,this._error=e||!0)})):(this.isLoaded=!0,this._error=void 0,this._content=e);for(let e of this._subscribers)e.onChange(this.getData())}},tp=class{constructor(e){this.protocol=e.protocol||`resource://`,this._context={device:e.device,gl:e.device?.gl,resourceManager:this},this._resources={},this._consumers={},this._pruneRequest=null}contains(e){return e.startsWith(this.protocol)?!0:e in this._resources}add({resourceId:e,data:t,forceUpdate:n=!1,persistent:r=!0}){let i=this._resources[e];i?i.setData(t,n):(i=new ep(e,t,this._context),this._resources[e]=i),i.persistent=r}remove(e){let t=this._resources[e];t&&(t.delete(),delete this._resources[e])}unsubscribe({consumerId:e}){let t=this._consumers[e];if(t){for(let e in t){let n=t[e],r=this._resources[n.resourceId];r&&r.unsubscribe(n)}delete this._consumers[e],this.prune()}}subscribe({resourceId:e,onChange:t,consumerId:n,requestId:r=`default`}){let{_resources:i,protocol:a}=this;e.startsWith(a)&&(e=e.replace(a,``),i[e]||this.add({resourceId:e,data:null,persistent:!1}));let o=i[e];if(this._track(n,r,o,t),o)return o.getData()}prune(){this._pruneRequest||=setTimeout(()=>this._prune(),0)}finalize(){for(let e in this._resources)this._resources[e].delete()}_track(e,t,n,r){let i=this._consumers,a=i[e]=i[e]||{},o=a[t],s=o&&o.resourceId&&this._resources[o.resourceId];s&&(s.unsubscribe(o),this.prune()),n&&(o?(o.onChange=r,o.resourceId=n.id):o={onChange:r,resourceId:n.id},a[t]=o,n.subscribe(o))}_prune(){this._pruneRequest=null;for(let e of Object.keys(this._resources)){let t=this._resources[e];!t.persistent&&!t.inUse()&&(t.delete(),delete this._resources[e])}}},np=`layerManager.setLayers`,rp=`layerManager.activateViewport`,ip=class{constructor(e,t){this._lastRenderedLayers=[],this._needsRedraw=!1,this._needsUpdate=!1,this._nextLayers=null,this._debug=!1,this._defaultShaderModulesChanged=!1,this.activateViewport=e=>{ui(rp,this,e),e&&(this.context.viewport=e)};let{deck:n,stats:r,viewport:i,timeline:a}=t||{};this.layers=[],this.resourceManager=new tp({device:e,protocol:`deck://`}),this.context={mousePosition:null,userData:{},layerManager:this,device:e,gl:e?.gl,deck:n,shaderAssembler:qu(e?.info?.shadingLanguage||`glsl`),defaultShaderModules:[xs],renderPass:void 0,stats:r||new It({id:`deck.gl`}),viewport:i||new Ad({id:`DEFAULT-INITIAL-VIEWPORT`}),timeline:a||new qd,resourceManager:this.resourceManager,onError:void 0},Object.seal(this)}finalize(){this.resourceManager.finalize();for(let e of this.layers)this._finalizeLayer(e)}needsRedraw(e={clearRedrawFlags:!1}){let t=this._needsRedraw;e.clearRedrawFlags&&(this._needsRedraw=!1);for(let n of this.layers){let r=n.getNeedsRedraw(e);t||=r}return t}needsUpdate(){return this._nextLayers&&this._nextLayers!==this._lastRenderedLayers?`layers changed`:this._defaultShaderModulesChanged?`shader modules changed`:this._needsUpdate}setNeedsRedraw(e){this._needsRedraw=this._needsRedraw||e}setNeedsUpdate(e){this._needsUpdate=this._needsUpdate||e}getLayers({layerIds:e}={}){return e?this.layers.filter(t=>e.find(e=>t.id.indexOf(e)===0)):this.layers}setProps(e){`debug`in e&&(this._debug=e.debug),`userData`in e&&(this.context.userData=e.userData),`layers`in e&&(this._nextLayers=e.layers),`onError`in e&&(this.context.onError=e.onError)}setLayers(e,t){ui(np,this,t,e),this._lastRenderedLayers=e;let n=Zf(e,Boolean);for(let e of n)e.context=this.context;this._updateLayers(this.layers,n)}updateLayers(){let e=this.needsUpdate();e&&(this.setNeedsRedraw(`updating layers: ${e}`),this.setLayers(this._nextLayers||this._lastRenderedLayers,e)),this._nextLayers=null}addDefaultShaderModule(e){let{defaultShaderModules:t}=this.context;t.find(t=>t.name===e.name)||(t.push(e),this._defaultShaderModulesChanged=!0)}removeDefaultShaderModule(e){let{defaultShaderModules:t}=this.context,n=t.findIndex(t=>t.name===e.name);n>=0&&(t.splice(n,1),this._defaultShaderModulesChanged=!0)}_handleError(e,t,n){n.raiseError(t,`${e} of ${n}`)}_updateLayers(e,t){let n={};for(let t of e)n[t.id]?U.warn(`Multiple old layers with same id ${t.id}`)():n[t.id]=t;if(this._defaultShaderModulesChanged){for(let t of e)t.setNeedsUpdate(),t.setChangeFlags({extensionsChanged:!0});this._defaultShaderModulesChanged=!1}let r=[];this._updateSublayersRecursively(t,n,r),this._finalizeOldLayers(n);let i=!1;for(let e of r)if(e.hasUniformTransition()){i=`Uniform transition in ${e}`;break}this._needsUpdate=i,this.layers=r}_updateSublayersRecursively(e,t,n){for(let r of e){r.context=this.context;let e=t[r.id];e===null&&U.warn(`Multiple new layers with same id ${r.id}`)(),t[r.id]=null;let i=null;try{this._debug&&e!==r&&r.validateProps(),e?(this._transferLayerState(e,r),this._updateLayer(r)):this._initializeLayer(r),n.push(r),i=r.isComposite?r.getSubLayers():null}catch(e){this._handleError(`matching`,e,r)}i&&this._updateSublayersRecursively(i,t,n)}}_finalizeOldLayers(e){for(let t in e){let n=e[t];n&&this._finalizeLayer(n)}}_initializeLayer(e){try{e._initialize(),e.lifecycle=Wf.INITIALIZED}catch(t){this._handleError(`initialization`,t,e)}}_transferLayerState(e,t){t._transferState(e),t.lifecycle=Wf.MATCHED,t!==e&&(e.lifecycle=Wf.AWAITING_GC)}_updateLayer(e){try{e._update()}catch(t){this._handleError(`update`,t,e)}}_finalizeLayer(e){this._needsRedraw=this._needsRedraw||`finalized ${e}`,e.lifecycle=Wf.AWAITING_FINALIZATION;try{e._finalize(),e.lifecycle=Wf.FINALIZED}catch(t){this._handleError(`finalization`,t,e)}}};function ap(e,t,n){if(e===t)return!0;if(!n||!e||!t)return!1;if(Array.isArray(e)){if(!Array.isArray(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!ap(e[r],t[r],n-1))return!1;return!0}if(Array.isArray(t))return!1;if(typeof e==`object`&&typeof t==`object`){let r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(let i of r)if(!t.hasOwnProperty(i)||!ap(e[i],t[i],n-1))return!1;return!0}return!1}var op=`default-canvas`,sp=class{constructor(e){this.views=[],this.width=100,this.height=100,this.viewState={},this.controllers={},this.timeline=e.timeline,this._viewports=[],this._viewportMap={},this._isUpdating=!1,this._needsRedraw=`First render`,this._needsUpdate=`Initialize`,this._eventManager=e.eventManager,this._eventManagers=e.eventManagers||{},this._viewEventManagers={},this._eventCallbacks={onViewStateChange:e.onViewStateChange,onInteractionStateChange:e.onInteractionStateChange},this._pickPosition=e.pickPosition,this._getCanvasContext=e.getCanvasContext,Object.seal(this),this.setProps(e)}finalize(){for(let e in this.controllers){let t=this.controllers[e];t&&t.finalize()}this.controllers={}}needsRedraw(e={clearRedrawFlags:!1}){let t=this._needsRedraw;return e.clearRedrawFlags&&(this._needsRedraw=!1),t}setNeedsUpdate(e){this._needsUpdate=this._needsUpdate||e,this._needsRedraw=this._needsRedraw||e}updateViewStates(){for(let e in this.controllers){let t=this.controllers[e];t&&t.updateTransition()}}getViewports(e){return e?this._viewports.filter(t=>{let n=!e.canvasId||this.getCanvasId(t.id)===e.canvasId,r=!(`x`in e)||t.containsPixel(e);return n&&r}):this._viewports}getViews(){let e={};return this.views.forEach(t=>{e[t.id]=t}),e}getView(e){return this.views.find(t=>t.id===e)}getViewState(e){let t=typeof e==`string`?this.getView(e):e,n=t&&this.viewState[t.getViewStateId()]||this.viewState;return t?t.filterViewState(n):n}getViewport(e){return this._viewportMap[e]}getCanvasId(e){let t=typeof e==`string`?this.getView(e):e;return t?this._viewEventManagers[t.id]?.canvasId||this._getCanvasIdFromView(t):void 0}unproject(e,t){let n=this.getViewports(),r={x:e[0],y:e[1]};for(let i=n.length-1;i>=0;--i){let a=n[i];if(a.containsPixel(r)){let n=e.slice();return n[0]-=a.x,n[1]-=a.y,a.unproject(n,t)}}return null}setProps(e){e.views&&this._setViews(e.views),e.viewState&&this._setViewState(e.viewState),(`width`in e||`height`in e)&&this._setSize(e.width,e.height),`pickPosition`in e&&(this._pickPosition=e.pickPosition),`eventManagers`in e&&this._setEventManagers(e.eventManagers||{}),this._isUpdating||this._update()}_update(){this._isUpdating=!0,this._needsUpdate&&(this._needsUpdate=!1,this._rebuildViewports()),this._needsUpdate&&(this._needsUpdate=!1,this._rebuildViewports()),this._isUpdating=!1}_setSize(e,t){(e!==this.width||t!==this.height)&&(this.width=e,this.height=t,this.setNeedsUpdate(`Size changed`))}_setViews(e){e=Zf(e,Boolean),this._diffViews(e,this.views)&&this.setNeedsUpdate(`views changed`),this.views=e}_setViewState(e){e?(ap(e,this.viewState,3)||this.setNeedsUpdate(`viewState changed`),this.viewState=e):U.warn("missing `viewState` or `initialViewState`")()}_setEventManagers(e){this._eventManagers!==e&&(this._eventManagers=e,this.setNeedsUpdate(`eventManagers changed`))}_getCanvasIdFromView(e){return e.props.canvasId||this._getCanvasContext?.(e.id)?.id||`default-canvas`}_getCanvasDimensions(e){let[t,n]=(this._getCanvasContext?.(e.id))?.getCSSSize()||[this.width,this.height];return{width:t,height:n}}_getViewEventManager(e){let t=this.getCanvasId(e)||`default-canvas`;return{canvasId:t,eventManager:this._eventManagers[t]||this._eventManager}}_startViewportRebuild(){let e=this.controllers,t=this._viewEventManagers;return this._viewports=[],this.controllers={},this._viewEventManagers={},{oldControllers:e,oldViewEventManagers:t}}_getReusableController(e,t,n){return e&&(t?.canvasId!==n.canvasId||t?.eventManager!==n.eventManager)?(e.finalize(),null):e}_createController(e,t){let n=t.type;return new n({timeline:this.timeline,eventManager:this._getViewEventManager(e).eventManager,onViewStateChange:this._eventCallbacks.onViewStateChange,onStateChange:this._eventCallbacks.onInteractionStateChange,makeViewport:t=>this.getView(e.id)?.makeViewport({viewState:t,...this._getCanvasDimensions(e)}),pickPosition:(t,n)=>this._pickPosition?.(t,n,e.id)})}_updateController(e,t,n,r){let i=e.controller;if(i&&n){let a={...t,...i,id:e.id,x:n.x,y:n.y,width:n.width,height:n.height};return(!r||r.constructor!==i.type)&&(r=this._createController(e,a)),r&&r.setProps(a),r}return null}_rebuildViewports(){let{views:e}=this,{oldControllers:t,oldViewEventManagers:n}=this._startViewportRebuild(),r=!1;for(let i=e.length;i--;){let a=e[i],{width:o,height:s}=this._getCanvasDimensions(a),c=this._getViewEventManager(a);this._viewEventManagers[a.id]=c;let l=this.getViewState(a),u=a.makeViewport({viewState:l,width:o,height:s}),d=this._getReusableController(t[a.id],n[a.id],c),f=!!a.controller;f&&!d&&(r=!0),(r||!f)&&d&&(d.finalize(),d=null),this.controllers[a.id]=this._updateController(a,l,u,d),u&&this._viewports.unshift(u)}for(let e in t){let n=t[e];n&&!this.controllers[e]&&n.finalize()}this._buildViewportMap()}_buildViewportMap(){this._viewportMap={},this._viewports.forEach(e=>{e.id&&(this._viewportMap[e.id]=this._viewportMap[e.id]||e)})}_diffViews(e,t){return e.length!==t.length||e.some((n,r)=>!e[r].equals(t[r]))}},cp=/^(?:\d+\.?\d*|\.\d+)$/;function lp(e){switch(typeof e){case`number`:if(!Number.isFinite(e))throw Error(`Could not parse position string ${e}`);return{type:`literal`,value:e};case`string`:try{return new pp(fp(e)).parseExpression()}catch(t){let n=t instanceof Error?t.message:String(t);throw Error(`Could not parse position string ${e}: ${n}`)}default:throw Error(`Could not parse position string ${e}`)}}function up(e,t){switch(e.type){case`literal`:return e.value;case`percentage`:return Math.round(e.value*t);case`binary`:let n=up(e.left,t),r=up(e.right,t);return e.operator===`+`?n+r:n-r;default:throw Error(`Unknown layout expression type`)}}function dp(e,t){return up(e,t)}function fp(e){let t=[],n=0;for(;n<e.length;){let r=e[n];if(/\s/.test(r)){n++;continue}if(r===`+`||r===`-`||r===`(`||r===`)`||r===`%`){t.push({type:`symbol`,value:r}),n++;continue}if(mp(r)||r===`.`){let i=n,a=r===`.`;for(n++;n<e.length;){let t=e[n];if(mp(t)){n++;continue}if(t===`.`&&!a){a=!0,n++;continue}break}let o=e.slice(i,n);if(!cp.test(o))throw Error(`Invalid number token`);t.push({type:`number`,value:parseFloat(o)});continue}if(hp(r)){let r=n;for(;n<e.length&&hp(e[n]);)n++;let i=e.slice(r,n).toLowerCase();t.push({type:`word`,value:i});continue}throw Error(`Invalid token in position string`)}return t}var pp=class{constructor(e){this.index=0,this.tokens=e}parseExpression(){let e=this.parseBinaryExpression();if(this.index<this.tokens.length)throw Error(`Unexpected token at end of expression`);return e}parseBinaryExpression(){let e=this.parseFactor(),t=this.peek();for(;gp(t);){this.index++;let n=this.parseFactor();e={type:`binary`,operator:t.value,left:e,right:n},t=this.peek()}return e}parseFactor(){let e=this.peek();if(!e)throw Error(`Unexpected end of expression`);if(e.type===`symbol`&&e.value===`+`)return this.index++,this.parseFactor();if(e.type===`symbol`&&e.value===`-`)return this.index++,{type:`binary`,operator:`-`,left:{type:`literal`,value:0},right:this.parseFactor()};if(e.type===`symbol`&&e.value===`(`){this.index++;let e=this.parseBinaryExpression();if(!this.consumeSymbol(`)`))throw Error(`Missing closing parenthesis`);return e}if(e.type===`word`&&e.value===`calc`){if(this.index++,!this.consumeSymbol(`(`))throw Error(`Missing opening parenthesis after calc`);let e=this.parseBinaryExpression();if(!this.consumeSymbol(`)`))throw Error(`Missing closing parenthesis`);return e}if(e.type===`number`){this.index++;let t=e.value,n=this.peek();return n&&n.type===`symbol`&&n.value===`%`?(this.index++,{type:`percentage`,value:t/100}):(n&&n.type===`word`&&n.value===`px`&&this.index++,{type:`literal`,value:t})}throw Error(`Unexpected token in expression`)}consumeSymbol(e){let t=this.peek();return t&&t.type===`symbol`&&t.value===e?(this.index++,!0):!1}peek(){return this.tokens[this.index]||null}};function mp(e){return e>=`0`&&e<=`9`}function hp(e){return e>=`a`&&e<=`z`||e>=`A`&&e<=`Z`}function gp(e){return!(!e||e.type!==`symbol`||e.value!==`+`&&e.value!==`-`)}function _p(e,t){let n={...e};for(let e in t)e!==`id`&&(n[e]=Array.isArray(n[e])&&Array.isArray(t[e])?vp(n[e],t[e]):t[e]);return n}function vp(e,t){e=e.slice();for(let n=0;n<t.length;n++){let r=t[n];Number.isFinite(r)&&(e[n]=r)}return e}var yp=class{constructor(e){let{id:t,x:n=0,y:r=0,width:i=`100%`,height:a=`100%`,padding:o=null}=e;this.id=t||this.constructor.displayName||`view`,this.props={...e,id:this.id},this._x=lp(n),this._y=lp(r),this._width=lp(i),this._height=lp(a),this._padding=o&&{left:lp(o.left||0),right:lp(o.right||0),top:lp(o.top||0),bottom:lp(o.bottom||0)},this.equals=this.equals.bind(this),Object.seal(this)}equals(e){return this===e||this.constructor===e.constructor&&ap(this.props,e.props,2)}clone(e){let t=this.constructor;return new t({...this.props,...e})}makeViewport({width:e,height:t,viewState:n}){n=this.filterViewState(n);let r=this.getDimensions({width:e,height:t});return!r.height||!r.width?null:new(this.getViewportType(n))({...n,...this.props,...r})}getViewStateId(){let{viewState:e}=this.props;return typeof e==`string`?e:e?.id||this.id}filterViewState(e){return this.props.viewState&&typeof this.props.viewState==`object`?this.props.viewState.id?_p(e,this.props.viewState):this.props.viewState:e}getDimensions({width:e,height:t}){let n={x:dp(this._x,e),y:dp(this._y,t),width:dp(this._width,e),height:dp(this._height,t)};return this._padding&&(n.padding={left:dp(this._padding.left,e),top:dp(this._padding.top,t),right:dp(this._padding.right,e),bottom:dp(this._padding.bottom,t)}),n}get controller(){let e=this.props.controller;return e?e===!0?{type:this.ControllerType}:typeof e==`function`?{type:e}:{type:this.ControllerType,...e}:null}},bp=class{constructor(e){this._inProgress=!1,this._handle=null,this.time=0,this.settings={duration:0},this._timeline=e}get inProgress(){return this._inProgress}start(e){this.cancel(),this.settings=e,this._inProgress=!0,this.settings.onStart?.(this)}end(){this._inProgress&&(this._timeline.removeChannel(this._handle),this._handle=null,this._inProgress=!1,this.settings.onEnd?.(this))}cancel(){this._inProgress&&=(this.settings.onInterrupt?.(this),this._timeline.removeChannel(this._handle),this._handle=null,!1)}update(){if(!this._inProgress)return!1;if(this._handle===null){let{_timeline:e,settings:t}=this;this._handle=e.addChannel({delay:e.getTime(),duration:t.duration})}return this.time=this._timeline.getTime(this._handle),this._onUpdate(),this.settings.onUpdate?.(this),this._timeline.isFinished(this._handle)&&this.end(),!0}_onUpdate(){}},xp=()=>{},Sp={mode:`preserve`},Cp={mode:`hard`},wp={BREAK:1,SNAP_TO_END:2,IGNORE:3},Tp=e=>e,Ep=wp.BREAK,Dp=class{constructor(e){this._onTransitionUpdate=e=>{let{time:t,settings:{interpolator:n,startProps:r,endProps:i,duration:a,easing:o}}=e,s=o(t/a),c=n.interpolateProps(r,i,s);this.propsInTransition=this.getControllerState({...this.props,...c},Sp).getViewportProps(),this.onViewStateChange({viewState:this.propsInTransition,oldViewState:this.props})},this.getControllerState=e.getControllerState,this.propsInTransition=null,this.transition=new bp(e.timeline),this.onViewStateChange=e.onViewStateChange||xp,this.onStateChange=e.onStateChange||xp}finalize(){this.transition.cancel()}getViewportInTransition(){return this.propsInTransition}processViewStateChange(e){let t=!1,n=this.props;if(this.props=e,!n||this._shouldIgnoreViewportChange(n,e))return!1;if(this._isTransitionEnabled(e)){let r=n;if(this.transition.inProgress){let{interruption:e,endProps:t}=this.transition.settings;r={...n,...e===wp.SNAP_TO_END?t:this.propsInTransition||n}}this._triggerTransition(r,e),t=!0}else this.transition.cancel();return t}updateTransition(){this.transition.update()}_isTransitionEnabled(e){let{transitionDuration:t,transitionInterpolator:n}=e;return(t>0||t===`auto`)&&!!n}_isUpdateDueToCurrentTransition(e){return this.transition.inProgress&&this.propsInTransition?this.transition.settings.interpolator.arePropsEqual(e,this.propsInTransition):!1}_shouldIgnoreViewportChange(e,t){return this.transition.inProgress?this.transition.settings.interruption===wp.IGNORE||this._isUpdateDueToCurrentTransition(t):!this._isTransitionEnabled(t)||t.transitionInterpolator.arePropsEqual(e,t)}_triggerTransition(e,t){let n=this.getControllerState(e,Sp),r=this.getControllerState(t,Cp).shortestPathFrom(n),i=t.transitionInterpolator,a=i.getDuration?i.getDuration(e,t):t.transitionDuration;if(a===0)return;let o=i.initializeProps(e,r);this.propsInTransition={};let s={duration:a,easing:t.transitionEasing||Tp,interpolator:i,interruption:t.transitionInterruption||Ep,startProps:o.start,endProps:o.end,onStart:t.onTransitionStart,onUpdate:this._onTransitionUpdate,onInterrupt:this._onTransitionEnd(t.onTransitionInterrupt),onEnd:this._onTransitionEnd(t.onTransitionEnd)};this.transition.start(s),this.onStateChange({inTransition:!0}),this.updateTransition()}_onTransitionEnd(e){return t=>{this.propsInTransition=null,this.onStateChange({inTransition:!1,isZooming:!1,isPanning:!1,isRotating:!1}),e?.(t)}}};function q(e,t){if(!e)throw Error(t||`deck.gl: assertion failed.`)}var Op=class{constructor(e){let{compare:t,extract:n,required:r}=e;this._propsToCompare=t,this._propsToExtract=n||t,this._requiredProps=r}arePropsEqual(e,t){for(let n of this._propsToCompare)if(!(n in e)||!(n in t)||!ba(e[n],t[n]))return!1;return!0}initializeProps(e,t){let n={},r={};for(let i of this._propsToExtract)(i in e||i in t)&&(n[i]=e[i],r[i]=t[i]);return this._checkRequiredProps(n),this._checkRequiredProps(r),{start:n,end:r}}getDuration(e,t){return t.transitionDuration}_checkRequiredProps(e){this._requiredProps&&this._requiredProps.forEach(t=>{let n=e[t];q(Number.isFinite(n)||Array.isArray(n),`${t} is required for transition`)})}},kp=[`longitude`,`latitude`,`zoom`,`bearing`,`pitch`],Ap=[`longitude`,`latitude`,`zoom`],jp=class extends Op{constructor(e={}){let t=Array.isArray(e)?e:e.transitionProps,n=Array.isArray(e)?{}:e;n.transitionProps=Array.isArray(t)?{compare:t,required:t}:t||{compare:kp,required:Ap},super(n.transitionProps),this.opts=n}initializeProps(e,t){let n=super.initializeProps(e,t),{makeViewport:r,around:i}=this.opts;if(r&&i){let a=r(e),o=r(t),s=a.unproject(i);n.start.around=i,Object.assign(n.end,{around:o.project(s),aroundPosition:s,width:t.width,height:t.height})}return n}interpolateProps(e,t,n){let r={};for(let i of this._propsToExtract)r[i]=ya(e[i]||0,t[i]||0,n);if(t.aroundPosition&&this.opts.makeViewport){let i=this.opts.makeViewport({...t,...r});Object.assign(r,i.panByPosition(t.aroundPosition,ya(e.around,t.around,n)))}return r}},Mp={transitionDuration:0},Np=300,Pp=300,Fp=e=>1-(1-e)*(1-e),Ip=e=>e===1?1:1-2**(-10*e),Lp={WHEEL:[`wheel`],PAN:[`panstart`,`panmove`,`panend`],PINCH:[`pinchstart`,`pinchmove`,`pinchend`],MULTI_PAN:[`multipanstart`,`multipanmove`,`multipanend`],DOUBLE_CLICK:[`dblclick`],DOUBLE_CLICK_DRAG:[`dblclickdragstart`,`dblclickdragmove`,`dblclickdragend`,`dblclickdragcancel`],KEYBOARD:[`keydown`]},Rp={},zp=class{constructor(e){this.state={},this._events={},this._interactionState={isDragging:!1},this._customEvents=[],this._eventStartBlocked=null,this._panMove=!1,this._multiPanMode=null,this._multiPanStartCenter=null,this._doubleClickDragAnchor=null,this._suppressDoubleClickUntil=0,this.invertPan=!1,this.dragMode=`rotate`,this.inertia=0,this.scrollZoom=!0,this.dragPan=!0,this.dragRotate=!0,this.doubleClickZoom=!0,this.doubleClickDragZoom=!0,this.touchZoom=!0,this.touchRotate=!1,this.multiTouchDrag=null,this.trackpadGesture=!1,this.zoomAround=`pointer`,this.keyboard=!0,this.transitionManager=new Dp({...e,getControllerState:(t,n)=>new this.ControllerState({...t,constraintContext:n,makeViewport:e.makeViewport}),onViewStateChange:this._onTransition.bind(this),onStateChange:this._setInteractionState.bind(this)}),this.handleEvent=this.handleEvent.bind(this),this.eventManager=e.eventManager,this.onViewStateChange=e.onViewStateChange||(()=>{}),this.onStateChange=e.onStateChange||(()=>{}),this.makeViewport=e.makeViewport,this.pickPosition=e.pickPosition}set events(e){this.toggleEvents(this._customEvents,!1),this.toggleEvents(e,!0),this._customEvents=e,this.props&&this.setProps(this.props)}finalize(){for(let e in this._events)this._events[e]&&this.eventManager?.off(e,this.handleEvent);this.transitionManager.finalize()}handleEvent(e){this._controllerState=void 0;let t=this._eventStartBlocked;switch(e.type){case`panstart`:return!t&&this._onPanStart(e);case`panmove`:return this._onPan(e);case`panend`:return this._onPanEnd(e);case`pinchstart`:return t||!this._isTrackpadGestureAllowed(e)?!1:this._onPinchStart(e);case`pinchmove`:return this._isTrackpadGestureAllowed(e)?this._onPinch(e):!1;case`pinchend`:return this._isTrackpadGestureAllowed(e)?this._onPinchEnd(e):!1;case`multipanstart`:return!t&&this._onMultiPanStart(e);case`multipanmove`:return this._onMultiPan(e);case`multipanend`:return this._onMultiPanEnd(e);case`dblclick`:return this._onDoubleClick(e);case`dblclickdragstart`:return!t&&this._onDoubleClickDragStart(e);case`dblclickdragmove`:return this._onDoubleClickDrag(e);case`dblclickdragend`:case`dblclickdragcancel`:return this._onDoubleClickDragEnd(e);case`wheel`:return this._onWheel(e);case`keydown`:return this._onKeyDown(e);default:return!1}}get controllerState(){return this._controllerState=this._controllerState||new this.ControllerState({makeViewport:this.makeViewport,...this.props,...this.state}),this._controllerState}getCenter(e){let{x:t,y:n}=this.props,{offsetCenter:r}=e;return[r.x-t,r.y-n]}getZoomPosition(e){if(this.zoomAround===`pointer`)return e;let t=this.makeViewport(this.controllerState.getViewportProps()),[n,r]=du(t.center,t.pixelProjectionMatrix);return[n,r]}isPointInBounds(e,t){let{width:n,height:r}=this.props;if(t&&t.handled)return!1;let i=e[0]>=0&&e[0]<=n&&e[1]>=0&&e[1]<=r;return i&&t&&t.stopPropagation(),i}isFunctionKeyPressed(e){let{srcEvent:t}=e;return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}isDragging(){return this._interactionState.isDragging||!1}blockEvents(e){let t=setTimeout(()=>{this._eventStartBlocked===t&&(this._eventStartBlocked=null)},e);this._eventStartBlocked=t}setProps(e){e.maxBoundsPadding===void 0&&(e.maxBoundsPadding=null),e.dragMode&&(this.dragMode=e.dragMode);let t=this.props;this.props=e,`transitionInterpolator`in e||(e.transitionInterpolator=this._getTransitionProps().transitionInterpolator),this.transitionManager.processViewStateChange(e);let{inertia:n}=e;this.inertia=Number.isFinite(n)?n:n===!0?Np:0;let{scrollZoom:r=!0,dragPan:i=!0,dragRotate:a=!0,doubleClickZoom:o=!0,doubleClickDragZoom:s=!1,touchZoom:c=!0,touchRotate:l=!1,multiTouchDrag:u=l?`rotate`:null,trackpadGesture:d=!1,zoomAround:f=`pointer`,keyboard:p=!0}=e,m=!!this.onViewStateChange;if(this.toggleEvents(Lp.WHEEL,m&&r),this.toggleEvents(Lp.PAN,m),this.toggleEvents(Lp.PINCH,m&&(c||u===`rotate`)),this.toggleEvents(Lp.MULTI_PAN,m&&!!u),this.toggleEvents(Lp.DOUBLE_CLICK,m&&o),this.toggleEvents(Lp.DOUBLE_CLICK_DRAG,m&&s),this.toggleEvents(Lp.KEYBOARD,m&&p),this.scrollZoom=r,this.dragPan=i,this.dragRotate=a,this.doubleClickZoom=o,this.doubleClickDragZoom=s,this.touchZoom=c,this.touchRotate=u===`rotate`,this.multiTouchDrag=u,this.trackpadGesture=d,this.zoomAround=f,this.keyboard=p,(!t||t.height!==e.height||t.width!==e.width||t.maxBounds!==e.maxBounds||t.maxBoundsPadding!==e.maxBoundsPadding)&&e.maxBounds){let t=new this.ControllerState({...e,makeViewport:this.makeViewport}),n=t.getViewportProps();Object.keys(n).some(t=>!ap(n[t],e[t],1))&&this.updateViewport(t)}}updateTransition(){this.transitionManager.updateTransition()}toggleEvents(e,t){this.eventManager&&e.forEach(e=>{this._events[e]!==t&&(this._events[e]=t,t?this.eventManager.on(e,this.handleEvent):this.eventManager.off(e,this.handleEvent))})}updateViewport(e,t=null,n={}){let r={...e.getViewportProps(),...t},i=this.controllerState!==e;if(this.state=e.getState(),this._setInteractionState(n),i){let e=this.controllerState&&this.controllerState.getViewportProps();this.onViewStateChange&&this.onViewStateChange({viewState:r,interactionState:this._interactionState,oldViewState:e,viewId:this.props.id})}}_onTransition(e){this.onViewStateChange({...e,interactionState:this._interactionState,viewId:this.props.id})}_setInteractionState(e){Object.assign(this._interactionState,e),this.onStateChange(this._interactionState)}_getConstraintContext(e,t){return this.props.rubberBand?{mode:t===`update`?`elastic`:t===`end`?`rebound`:`hard`}:{mode:`hard`}}_getReboundTransition(e,t){if(e.mode!==`rebound`)return null;let n=t.getViewportProps();return Object.keys(n).some(e=>!ap(this.props[e],n[e],1))?{...this._getTransitionProps(),transitionDuration:Pp,transitionEasing:Ip}:null}_onPanStart(e){let t=this.getCenter(e);if(!this.isPointInBounds(t,e))return!1;let n=this.isFunctionKeyPressed(e)||e.rightButton||!1;(this.invertPan||this.dragMode===`pan`)&&(n=!n);let r=n?`pan`:`rotate`,i=this._getConstraintContext(r,`start`),a=n?this.controllerState.panStart({pos:t},i):this.controllerState.rotateStart({pos:t},i);return this._panMove=n,this.updateViewport(a,Mp,{isDragging:!0}),!0}_onPan(e){return this.isDragging()?this._panMove?this._onPanMove(e):this._onPanRotate(e):!1}_onPanEnd(e){return this.isDragging()?this._panMove?this._onPanMoveEnd(e):this._onPanRotateEnd(e):!1}_onPanMove(e){if(!this.dragPan)return!1;let t=this.getCenter(e),n=this.controllerState.pan({pos:t},this._getConstraintContext(`pan`,`update`));return this.updateViewport(n,Mp,{isDragging:!0,isPanning:!0}),!0}_onPanMoveEnd(e){let{inertia:t}=this;if(this.dragPan&&t&&e.velocity){let n=this.getCenter(e),r=[n[0]+e.velocityX*t/2,n[1]+e.velocityY*t/2],i=this.controllerState.pan({pos:r}).panEnd();this.updateViewport(i,{...this._getTransitionProps(),transitionDuration:t,transitionEasing:Fp},{isDragging:!1,isPanning:!0})}else{let e=this.controllerState,t=this._getConstraintContext(`pan`,`end`),n=e.panEnd(t),r=this._getReboundTransition(t,n);this.updateViewport(n,r,{isDragging:!1,isPanning:!!r})}return!0}_onPanRotate(e){if(!this.dragRotate)return!1;let t=this.getCenter(e),n=this.controllerState.rotate({pos:t},this._getConstraintContext(`rotate`,`update`));return this.updateViewport(n,Mp,{isDragging:!0,isRotating:!0}),!0}_onPanRotateEnd(e){let{inertia:t}=this;if(this.dragRotate&&t&&e.velocity){let n=this.getCenter(e),r=[n[0]+e.velocityX*t/2,n[1]+e.velocityY*t/2],i=this.controllerState.rotate({pos:r}).rotateEnd();this.updateViewport(i,{...this._getTransitionProps(),transitionDuration:t,transitionEasing:Fp},{isDragging:!1,isRotating:!0})}else{let e=this.controllerState,t=this._getConstraintContext(`rotate`,`end`),n=e.rotateEnd(t),r=this._getReboundTransition(t,n);this.updateViewport(n,r,{isDragging:!1,isRotating:!!r})}return!0}_onWheel(e){if(!this.scrollZoom||this.trackpadGesture&&e.device!==`mouse`)return!1;let t=this.getCenter(e);if(!this.isPointInBounds(t,e))return!1;e.srcEvent.preventDefault();let{speed:n=.01,smooth:r=!1}=this.scrollZoom===!0?{}:this.scrollZoom,{delta:i}=e,a=2/(1+Math.exp(-Math.abs(i*n)));i<0&&a!==0&&(a=1/a);let o=this.getZoomPosition(t),s=r?{...this._getTransitionProps({around:o}),transitionDuration:250}:Mp,c=this.controllerState.zoom({pos:o,scale:a});return this.updateViewport(c,s,{isZooming:!0,isPanning:!0}),r||this._setInteractionState({isZooming:!1,isPanning:!1}),!0}_onMultiPanStart(e){let{multiTouchDrag:t}=this;if(!t||!this._isMultiPanEventAllowed(e,t))return!1;let n=e.offsetCenter;if(!this.isPointInBounds(this.getCenter(e),e))return!1;let r=e.pointerType===`trackpad`,i={x:n.x-(r?0:e.deltaX),y:n.y-(r?0:e.deltaY)},a={...e,offsetCenter:i},o=this.getCenter(a),s=t===`pan`?this.controllerState.panStart({pos:o},this._getConstraintContext(`pan`,`start`)):this.controllerState.rotateStart({pos:o},this._getConstraintContext(`rotate`,`start`));return this._multiPanMode=t,this._multiPanStartCenter=i,this.updateViewport(s,Mp,{isDragging:!0}),!0}_onMultiPan(e){let{mode:t,event:n}=this._getMultiPanEvent(e);return!t||!n||!this.isDragging()?!1:t===`pan`?this._onPanMove(n):this._onPanRotate(n)}_onMultiPanEnd(e){let{mode:t,event:n}=this._getMultiPanEvent(e);if(!t||!n||!this.isDragging())return this._resetMultiPan(),!1;let r=t===`pan`?this._onPanMoveEnd(n):this._onPanRotateEnd(n);return this._resetMultiPan(),r}_isTrackpadGestureAllowed(e){return e.pointerType!==`trackpad`||this.trackpadGesture}_isMultiPanEventAllowed(e,t){return e.pointerType===`trackpad`?this.trackpadGesture&&(t===`pan`?this.dragPan:this.dragRotate):e.pointerType===`touch`&&(t===`pan`?this.dragPan:this.dragRotate)}_getMultiPanEvent(e){let t=this._multiPanMode,n=this._multiPanStartCenter;return!t||!n?{mode:null,event:null}:{mode:t,event:{...e,offsetCenter:{x:n.x+e.deltaX,y:n.y+e.deltaY}}}}_resetMultiPan(){this._multiPanMode=null,this._multiPanStartCenter=null}_onPinchStart(e){this._doubleClickDragAnchor=null;let t=this.getCenter(e);if(!this.isPointInBounds(t,e))return!1;let n=this.controllerState.zoomStart({pos:this.getZoomPosition(t)},this._getConstraintContext(`zoom`,`start`)).rotateStart({pos:t},this._getConstraintContext(`rotate`,`start`));return Rp._startPinchRotation=e.rotation,Rp._lastPinchEvent=e,this.updateViewport(n,Mp,{isDragging:!0}),!0}_onPinch(e){if(!this.touchZoom&&!this.touchRotate||!this.isDragging())return!1;let t=this.controllerState;if(this.touchZoom){let{scale:n}=e,r=this.getCenter(e);t=t.zoom({pos:this.getZoomPosition(r),scale:n},this._getConstraintContext(`zoom`,`update`))}if(this.touchRotate){let{rotation:n}=e;t=t.rotate({deltaAngleX:Rp._startPinchRotation-n},this._getConstraintContext(`rotate`,`update`))}return this.updateViewport(t,Mp,{isDragging:!0,isPanning:this.touchZoom,isZooming:this.touchZoom,isRotating:this.touchRotate}),Rp._lastPinchEvent=e,!0}_onPinchEnd(e){if(!this.isDragging())return!1;let{inertia:t}=this,{_lastPinchEvent:n}=Rp;if(this.touchZoom&&t&&n&&e.scale!==n.scale){let r=this.getCenter(e),i=this.getZoomPosition(r),a=this.controllerState.rotateEnd(),o=Math.log2(e.scale),s=2**(o+(o-Math.log2(n.scale))/(e.deltaTime-n.deltaTime)*t/2);a=a.zoom({pos:i,scale:s}).zoomEnd(),this.updateViewport(a,{...this._getTransitionProps({around:i}),transitionDuration:t,transitionEasing:Fp},{isDragging:!1,isPanning:this.touchZoom,isZooming:this.touchZoom,isRotating:!1}),this.blockEvents(t)}else{let e=this.controllerState,t=this._getConstraintContext(`zoom`,`end`),n=this._getConstraintContext(`rotate`,`end`),r=e.zoomEnd(t).rotateEnd(n),i=this._getReboundTransition(this.touchZoom?t:n,r);this.updateViewport(r,i,{isDragging:!1,isPanning:!!i&&this.touchZoom,isZooming:!!i&&this.touchZoom,isRotating:!!i&&this.touchRotate})}return Rp._startPinchRotation=null,Rp._lastPinchEvent=null,!0}_onDoubleClick(e){if(!this.doubleClickZoom||Date.now()<this._suppressDoubleClickUntil)return!1;let t=this.getCenter(e);if(!this.isPointInBounds(t,e))return!1;let n=this.isFunctionKeyPressed(e),r=this.getZoomPosition(t),i=this.controllerState.zoom({pos:r,scale:n?.5:2});return this.updateViewport(i,this._getTransitionProps({around:r}),{isZooming:!0,isPanning:!0}),this.blockEvents(100),!0}_onDoubleClickDragStart(e){if(!this.doubleClickDragZoom)return this._doubleClickDragAnchor=null,!1;let t=this.getCenter(e);if(!this.isPointInBounds(t,e))return this._doubleClickDragAnchor=null,!1;this._doubleClickDragAnchor=this.getZoomPosition(t);let n=this.controllerState.zoomStart({pos:this._doubleClickDragAnchor},this._getConstraintContext(`zoom`,`start`));return e.scale!==1&&(n=n.zoom({pos:this._doubleClickDragAnchor,scale:e.scale},this._getConstraintContext(`zoom`,`update`))),this.updateViewport(n,Mp,{isDragging:!0,isPanning:!0,isZooming:!0}),!0}_onDoubleClickDrag(e){let t=this._doubleClickDragAnchor;if(!t)return!1;let n=this.controllerState.zoom({pos:t,scale:e.scale},this._getConstraintContext(`zoom`,`update`));return this.updateViewport(n,Mp,{isDragging:!0,isPanning:!0,isZooming:!0}),!0}_onDoubleClickDragEnd(e){if(!this._doubleClickDragAnchor)return!1;this._doubleClickDragAnchor=null;let t=this.controllerState,n=this._getConstraintContext(`zoom`,`end`),r=t.zoomEnd(n),i=this._getReboundTransition(n,r);return this.updateViewport(r,i,{isDragging:!1,isPanning:!!i,isZooming:!!i}),this._suppressDoubleClickUntil=Date.now()+100,this.blockEvents(100),!0}_onKeyDown(e){if(!this.keyboard)return!1;let t=this.isFunctionKeyPressed(e),{zoomSpeed:n,moveSpeed:r,rotateSpeedX:i,rotateSpeedY:a}=this.keyboard===!0?{}:this.keyboard,{controllerState:o}=this,s,c={};switch(e.srcEvent.code){case`Minus`:s=t?o.zoomOut(n).zoomOut(n):o.zoomOut(n),c.isZooming=!0;break;case`Equal`:s=t?o.zoomIn(n).zoomIn(n):o.zoomIn(n),c.isZooming=!0;break;case`ArrowLeft`:t?(s=o.rotateLeft(i),c.isRotating=!0):(s=o.moveLeft(r),c.isPanning=!0);break;case`ArrowRight`:t?(s=o.rotateRight(i),c.isRotating=!0):(s=o.moveRight(r),c.isPanning=!0);break;case`ArrowUp`:t?(s=o.rotateUp(a),c.isRotating=!0):(s=o.moveUp(r),c.isPanning=!0);break;case`ArrowDown`:t?(s=o.rotateDown(a),c.isRotating=!0):(s=o.moveDown(r),c.isPanning=!0);break;default:return!1}return this.updateViewport(s,this._getTransitionProps(),c),!0}_getTransitionProps(e){let{transition:t}=this;return!t||!t.transitionInterpolator?Mp:e?{...t,transitionInterpolator:new jp({...e,...t.transitionInterpolator.opts,makeViewport:this.controllerState.makeViewport})}:t}},Bp=Symbol(`constraintAround`),Vp=class{constructor(e,t,n,r){this.makeViewport=n,this._viewportProps=this.applyConstraints(e,r),this._state=t}getViewportProps(){return this._viewportProps}getState(){return this._state}};function Hp(e,t,n){let r=e-t;return r&&Number.isFinite(r)?t+r*n/(n+Math.abs(r)):t}function Up(e,t,n){let r=dp(lp(n?.left??0),e),i=dp(lp(n?.right??0),e),a=dp(lp(n?.top??0),t),o=dp(lp(n?.bottom??0),t);return{x:r,y:a,width:e-r-i,height:t-a-o}}function Wp(e,t,n){let[r,i]=e.project(t);return r=Number.isFinite(r)?r:e.width/2,i=Number.isFinite(i)?i:e.height/2,{left:r-n.x,right:n.x+n.width-r,top:i-n.y,bottom:n.y+n.height-i}}var Gp=5,Kp=1.2,qp=512,Jp=[[-1/0,-90],[1/0,90]],Yp=1;function Xp([e,t]){if(Math.abs(t)>90&&(t=Math.sign(t)*90),Number.isFinite(e)){let[n,r]=tu([e,t]);return[n,va(r,0,qp)]}let[,n]=tu([0,t]);return[e,va(n,0,qp)]}var Zp=class extends Vp{constructor(e){let{width:t,height:n,latitude:r,longitude:i,zoom:a,bearing:o=0,pitch:s=0,altitude:c=1.5,position:l=[0,0,0],maxZoom:u=20,minZoom:d=0,maxPitch:f=60,minPitch:p=0,startPanLngLat:m,startZoomLngLat:h,startRotatePos:g,startRotateLngLat:_,startBearing:v,startPitch:y,startZoom:b,normalize:x=!0,rubberBand:S=!1}=e,{[Bp]:C}=e;q(Number.isFinite(i)),q(Number.isFinite(r)),q(Number.isFinite(a));let w=e.maxBounds||(x?Jp:null),T=e.maxBoundsPadding||null;super({width:t,height:n,latitude:r,longitude:i,zoom:a,bearing:o,pitch:s,altitude:c,maxZoom:u,minZoom:d,maxPitch:f,minPitch:p,normalize:x,position:l,maxBounds:w,maxBoundsPadding:T,rubberBand:S,[Bp]:C},{startPanLngLat:m,startZoomLngLat:h,startRotatePos:g,startRotateLngLat:_,startBearing:v,startPitch:y,startZoom:b},e.makeViewport,e.constraintContext),this.getAltitude=e.getAltitude}panStart({pos:e},t){return this._getUpdatedState({startPanLngLat:this._unproject(e)},t)}pan({pos:e,startPos:t},n){let r=this.getState().startPanLngLat||this._unproject(t);if(!r)return this;let i=this.makeViewport(this.getViewportProps()).panByPosition(r,e);return this._getUpdatedState(i,n)}panEnd(e){return this._getUpdatedState({startPanLngLat:null},e)}rotateStart({pos:e}){let t=this.getAltitude?.(e);return this._getUpdatedState({startRotatePos:e,startRotateLngLat:t===void 0?void 0:this._unproject3D(e,t),startBearing:this.getViewportProps().bearing,startPitch:this.getViewportProps().pitch})}rotate({pos:e,deltaAngleX:t=0,deltaAngleY:n=0}){let{startRotatePos:r,startRotateLngLat:i,startBearing:a,startPitch:o}=this.getState();if(!r||a===void 0||o===void 0)return this;let s;if(s=e?this._getNewRotation(e,r,o,a):{bearing:a+t,pitch:o+n},i){let e=this.makeViewport({...this.getViewportProps(),...s}),t=`panByPosition3D`in e?`panByPosition3D`:`panByPosition`;return this._getUpdatedState({...s,...e[t](i,r)})}return this._getUpdatedState(s)}rotateEnd(){return this._getUpdatedState({startRotatePos:null,startRotateLngLat:null,startBearing:null,startPitch:null})}zoomStart({pos:e},t){return this._getUpdatedState({startZoomLngLat:this._unproject(e),startZoom:this.getViewportProps().zoom},t)}zoom({pos:e,startPos:t,scale:n},r){let{startZoom:i,startZoomLngLat:a}=this.getState();return a||=(i=this.getViewportProps().zoom,this._unproject(t)||this._unproject(e)),a?this._getUpdatedState({zoom:i+Math.log2(n),[Bp]:{position:a,screenPosition:e}},r):this}zoomEnd(e){return this._getUpdatedState({startZoomLngLat:null,startZoom:null},e)}zoomIn(e=2,t){return this._zoomFromCenter(e,t)}zoomOut(e=2,t){return this._zoomFromCenter(1/e,t)}moveLeft(e=100,t){return this._panFromCenter([e,0],t)}moveRight(e=100,t){return this._panFromCenter([-e,0],t)}moveUp(e=100,t){return this._panFromCenter([0,e],t)}moveDown(e=100,t){return this._panFromCenter([0,-e],t)}rotateLeft(e=15){return this._getUpdatedState({bearing:this.getViewportProps().bearing-e})}rotateRight(e=15){return this._getUpdatedState({bearing:this.getViewportProps().bearing+e})}rotateUp(e=10){return this._getUpdatedState({pitch:this.getViewportProps().pitch+e})}rotateDown(e=10){return this._getUpdatedState({pitch:this.getViewportProps().pitch-e})}shortestPathFrom(e){let t=e.getViewportProps(),n={...this.getViewportProps()},{bearing:r,longitude:i}=n;return Math.abs(r-t.bearing)>180&&(n.bearing=r<0?r+360:r-360),Math.abs(i-t.longitude)>180&&(n.longitude=i<0?i+360:i-360),n}applyConstraints(e,t){let n=e,r=n[Bp];delete n[Bp];let{maxPitch:i,minPitch:a,pitch:o,bearing:s,normalize:c,maxBounds:l,rubberBand:u}=e;c&&(s<-180||s>180)&&(e.bearing=gd(s+180,360)-180),e.pitch=va(o,a,i);let d=this._constrainZoom(e.zoom,e),f=u&&t?.mode===`elastic`;if(e.zoom=t?.mode===`preserve`?e.zoom:f?Hp(e.zoom,d,Yp):d,r){let t=this.makeViewport(e);Object.assign(e,t.panByPosition(r.position,r.screenPosition))}if(c&&(e.longitude<-180||e.longitude>180)&&(e.longitude=gd(e.longitude+180,360)-180),l){let n=Up(e.width,e.height,e.maxBoundsPadding),r=Wp(this.makeViewport({...e,bearing:0,pitch:0}),[e.longitude,e.latitude],n),i=Xp(l[0]),a=Xp(l[1]),o=2**e.zoom,s=[i[0]+r.left/o,i[1]+r.bottom/o],c=[a[0]-r.right/o,a[1]-r.top/o],u=Xp([e.longitude,e.latitude]),d=[va(u[0],s[0],c[0]),va(u[1],s[1],c[1])],p=u.slice();if(n.width>=0&&(p[0]=t?.mode===`preserve`?u[0]:f?Hp(u[0],d[0],n.width/2/o):d[0]),n.height>=0&&(p[1]=t?.mode===`preserve`?u[1]:f?Hp(u[1],d[1],n.height/2/o):d[1]),p[0]!==u[0]||p[1]!==u[1]){let[t,n]=nu(p);p[0]!==u[0]&&(e.longitude=t),p[1]!==u[1]&&(e.latitude=n)}}return e}_constrainZoom(e,t){t||=this.getViewportProps();let{maxZoom:n,maxBounds:r}=t,i=r!==null&&t.width>0&&t.height>0,{minZoom:a}=t;if(i){let e=Up(t.width,t.height,t.maxBoundsPadding),i=Xp(r[0]),o=Xp(r[1]),s=o[0]-i[0],c=o[1]-i[1];e.width>0&&Number.isFinite(s)&&s>0&&(a=Math.max(a,Math.log2(e.width/s))),e.height>0&&Number.isFinite(c)&&c>0&&(a=Math.max(a,Math.log2(e.height/c))),a>n&&(a=n)}return va(e,a,n)}_zoomFromCenter(e,t){let{width:n,height:r}=this.getViewportProps();return this.zoom({pos:[n/2,r/2],scale:e},t)}_panFromCenter(e,t){let{width:n,height:r}=this.getViewportProps();return this.pan({startPos:[n/2,r/2],pos:[n/2+e[0],r/2+e[1]]},t)}_getUpdatedState(e,t){return new this.constructor({makeViewport:this.makeViewport,...this.getViewportProps(),...this.getState(),...e,constraintContext:t})}_unproject(e){let t=this.makeViewport(this.getViewportProps());return e&&t.unproject(e)}_unproject3D(e,t){return this.makeViewport(this.getViewportProps()).unproject(e,{targetZ:t})}_getNewRotation(e,t,n,r){let i=e[0]-t[0],a=e[1]-t[1],o=e[1],s=t[1],{width:c,height:l}=this.getViewportProps(),u=i/c,d=0;a>0?Math.abs(l-s)>Gp&&(d=a/(s-l)*Kp):a<0&&s>Gp&&(d=1-o/s),d=va(d,-1,1);let{minPitch:f,maxPitch:p}=this.getViewportProps(),m=r+180*u,h=n;return d>0?h=n+d*(p-n):d<0&&(h=n-d*(f-n)),{pitch:h,bearing:m}}},Qp=class extends zp{constructor(){super(...arguments),this.ControllerState=Zp,this.transition={transitionDuration:300,transitionInterpolator:new jp({transitionProps:{compare:[`longitude`,`latitude`,`zoom`,`bearing`,`pitch`,`position`],required:[`longitude`,`latitude`,`zoom`]}})},this.dragMode=`pan`,this.rotationPivot=`center`,this._getAltitude=e=>{if(this.rotationPivot===`2d`)return 0;if(this.rotationPivot===`3d`&&this.pickPosition){let{x:t,y:n}=this.props,r=this.pickPosition(t+e[0],n+e[1]);if(r&&r.coordinate&&r.coordinate.length>=3)return r.coordinate[2]}}}setProps(e){`rotationPivot`in e&&(this.rotationPivot=e.rotationPivot||`center`),e.getAltitude=this._getAltitude,e.position=e.position||[0,0,0],e.maxBounds=e.maxBounds||(e.normalize===!1?null:Jp),super.setProps(e)}updateViewport(e,t=null,n={}){let r=e.getState();n.isDragging&&r.startRotateLngLat?n={...n,rotationPivotPosition:r.startRotateLngLat}:n.isDragging===!1&&(n={...n,rotationPivotPosition:void 0}),super.updateViewport(e,t,n)}},$p=class extends yp{constructor(e={}){super(e)}getViewportType(){return jd}get ControllerType(){return Qp}};$p.displayName=`MapView`;var em=new pd;function tm(e,t){return(e.order??1/0)-(t.order??1/0)}var nm=class{constructor(e){this._resolvedEffects=[],this._defaultEffects=[],this.effects=[],this._context=e,this._needsRedraw=`Initial render`,this._setEffects([])}addDefaultEffect(e){let t=this._defaultEffects;if(!t.find(t=>t.id===e.id)){let n=t.findIndex(t=>tm(t,e)>0);n<0?t.push(e):t.splice(n,0,e),e.setup(this._context),this._setEffects(this.effects)}}setProps(e){`effects`in e&&(ap(e.effects,this.effects,1)||this._setEffects(e.effects))}needsRedraw(e={clearRedrawFlags:!1}){let t=this._needsRedraw;return e.clearRedrawFlags&&(this._needsRedraw=!1),t}getEffects(){return this._resolvedEffects}_setEffects(e){let t={};for(let e of this.effects)t[e.id]=e;let n=[];for(let r of e){let e=t[r.id],i=r;e&&e!==r?e.setProps?(e.setProps(r.props),i=e):e.cleanup(this._context):e||r.setup(this._context),n.push(i),delete t[r.id]}for(let e in t)t[e].cleanup(this._context);this.effects=n,this._resolvedEffects=n.concat(this._defaultEffects),e.some(e=>e instanceof pd)||this._resolvedEffects.push(em),this._needsRedraw=`effects changed`}finalize(){for(let e of this._resolvedEffects)e.cleanup(this._context);this.effects.length=0,this._resolvedEffects.length=0,this._defaultEffects.length=0}},rm=class extends ad{shouldDrawLayer(e){let{operation:t}=e.props;return t.includes(`draw`)||t.includes(`terrain`)}render(e){return this._render(e)}},im=`deckRenderer.renderLayers`,am=class{constructor(e,t={}){this.device=e,this.stats=t.stats,this.layerFilter=null,this.drawPickingColors=!1,this.drawLayersPass=new rm(e),this.pickLayersPass=new Vf(e),this.renderCount=0,this._needsRedraw=`Initial render`,this.renderBuffers=[],this.lastPostProcessEffect=null}setProps(e){this.layerFilter!==e.layerFilter&&(this.layerFilter=e.layerFilter,this._needsRedraw=`layerFilter changed`),this.drawPickingColors!==e.drawPickingColors&&(this.drawPickingColors=e.drawPickingColors,this._needsRedraw=`drawPickingColors changed`)}renderLayers(e){let t=this.drawPickingColors?this.pickLayersPass:this.drawLayersPass,n={layerFilter:this.layerFilter,isPicking:this.drawPickingColors,...e};if(!e.viewports.length){let e=t.render(n),r=`stats`in e?e.stats:e;this._updateStats(r);return}n.effects&&this._preRender(n.effects,n);let r=this.lastPostProcessEffect?this.renderBuffers[0]:n.target;this.lastPostProcessEffect&&(n.clearColor=[0,0,0,0],n.clearCanvas=!0);let i=t.render({...n,target:r}),a=`stats`in i?i.stats:i;n.effects&&(this.lastPostProcessEffect&&(n.clearCanvas=e.clearCanvas===void 0||e.clearCanvas),this._postRender(n.effects,n)),this.renderCount++,ui(im,this,a,e),this._updateStats(a)}needsRedraw(e={clearRedrawFlags:!1}){let t=this._needsRedraw;return e.clearRedrawFlags&&(this._needsRedraw=!1),t}finalize(){let{renderBuffers:e}=this;for(let t of e)t.delete();e.length=0}_updateStats(e){if(!this.stats)return;let t=0;for(let{visibleCount:n}of e)t+=n;this.stats.get(`Layers rendered`).addCount(t)}_preRender(e,t){this.lastPostProcessEffect=null,t.preRenderStats=t.preRenderStats||{};for(let n of e)t.preRenderStats[n.id]=n.preRender(t),n.postRender&&(this.lastPostProcessEffect=n.id);this.lastPostProcessEffect&&this._resizeRenderBuffers(t.canvasContext)}_resizeRenderBuffers(e=this.device.canvasContext){let{renderBuffers:t}=this,n=e.getDrawingBufferSize(),[r,i]=n;t.length===0&&[0,1].map(e=>{let n=this.device.createTexture({sampler:{minFilter:`linear`,magFilter:`linear`},width:r,height:i});t.push(this.device.createFramebuffer({id:`deck-renderbuffer-${e}`,colorAttachments:[n]}))});for(let e of t)e.resize(n)}_postRender(e,t){let{renderBuffers:n}=this,r=t.target??t.canvasContext?.getCurrentFramebuffer()??t.target,i={...t,inputBuffer:n[0],swapBuffer:n[1]};for(let t of e)if(t.postRender){i.target=t.id===this.lastPostProcessEffect?r:void 0;let e=t.postRender(i);i.inputBuffer=e,i.swapBuffer=e===n[0]?n[1]:n[0]}}},om={pickedColor:null,pickedObjectIndex:-1};function sm({pickedColors:e,decodePickingColor:t,deviceX:n,deviceY:r,deviceRadius:i,deviceRect:a}){let{x:o,y:s,width:c,height:l}=a,u=i*i,d=-1,f=0;for(let t=0;t<l;t++){let i=t+s-r,a=i*i;if(a>u)f+=4*c;else for(let t=0;t<c;t++){if(e[f+3]-1>=0){let e=t+o-n,r=e*e+a;r<=u&&(u=r,d=f)}f+=4}}if(d>=0){let n=e.slice(d,d+4),r=t(n);if(r){let e=Math.floor(d/4/c),t=d/4-e*c;return{...r,pickedColor:n,pickedX:o+t,pickedY:s+e}}U.error(`Picked non-existent layer. Is picking buffer corrupt?`)()}return om}function cm({pickedColors:e,decodePickingColor:t}){let n=new Map;if(e){for(let r=0;r<e.length;r+=4)if(e[r+3]-1>=0){let i=e.slice(r,r+4),a=i.join(`,`);if(!n.has(a)){let e=t(i);e?n.set(a,{...e,color:i}):U.error(`Picked non-existent layer. Is picking buffer corrupt?`)()}}}return Array.from(n.values())}function lm({pickInfo:e,viewports:t,pixelRatio:n,x:r,y:i,z:a}){let o=t[0];t.length>1&&(o=fm(e?.pickedViewports||t,{x:r,y:i}));let s;if(o){let e=[r-o.x,i-o.y];a!==void 0&&(e[2]=a),s=o.unproject(e)}return{color:null,layer:null,viewport:o,index:-1,picked:!1,x:r,y:i,pixel:[r,i],coordinate:s,devicePixel:e&&`pickedX`in e?[e.pickedX,e.pickedY]:void 0,pixelRatio:n}}function um(e){let{pickInfo:t,lastPickedInfo:n,mode:r,layers:i}=e,{pickedColor:a,pickedLayer:o,pickedObjectIndex:s}=t,c=o?[o]:[];if(r===`hover`){let e=n.index,t=n.layerId,r=o?o.props.id:null;if(r!==t||s!==e){if(r!==t){let e=i.find(e=>e.props.id===t);e&&c.unshift(e)}n.layerId=r,n.index=s,n.info=null}}let l=lm(e),u=new Map;return u.set(null,l),c.forEach(e=>{let t={...l};e===o&&(t.color=a,t.index=s,t.picked=!0),t=dm({layer:e,info:t,mode:r});let i=t.layer;e===o&&r===`hover`&&(n.info=t),u.set(i.id,t),r===`hover`&&i.updateAutoHighlight(t)}),u}function dm({layer:e,info:t,mode:n}){for(;e&&t;){let r=t.layer||null;t.sourceLayer=r,t.layer=e,t=e.getPickingInfo({info:t,mode:n,sourceLayer:r}),e=e.parent}return t}function fm(e,t){for(let n=e.length-1;n>=0;n--){let r=e[n];if(r.containsPixel(t))return r}return e[0]}var pm=class{constructor(e,t={}){this._pickable=!0,this.device=e,this.stats=t.stats,this.pickLayersPass=new Vf(e),this.lastPickedInfo={index:-1,layerId:null,info:null}}setProps(e){`layerFilter`in e&&(this.layerFilter=e.layerFilter),`_pickable`in e&&(this._pickable=e._pickable)}finalize(){this.pickingFBO&&this.pickingFBO.destroy(),this.depthFBO&&this.depthFBO.destroy()}pickObjectAsync(e){return this._pickClosestObjectAsync(e)}pickObjectsAsync(e){return this._pickVisibleObjectsAsync(e)}pickObject(e){return this._pickClosestObject(e)}pickObjects(e){return this._pickVisibleObjects(e)}getLastPickedObject({x:e,y:t,layers:n,viewports:r},i=this.lastPickedInfo.info){let a=i&&i.layer&&i.layer.id,o=i&&i.viewport&&i.viewport.id,s=a?n.find(e=>e.id===a):null,c=o&&r.find(e=>e.id===o)||r[0],l={x:e,y:t,viewport:c,coordinate:c&&c.unproject([e-c.x,t-c.y]),layer:s};return{...i,...l}}_resizeBuffer(e=this.device.getDefaultCanvasContext()){if(!this.pickingFBO){let e=this.device.createTexture({format:`rgba8unorm`,width:1,height:1,usage:z.RENDER_ATTACHMENT|z.COPY_SRC});if(this.pickingFBO=this.device.createFramebuffer({colorAttachments:[e],depthStencilAttachment:`depth16unorm`}),this.device.isTextureFormatRenderable(`rgba32float`)){let e=this.device.createTexture({format:`rgba32float`,width:1,height:1,usage:z.RENDER_ATTACHMENT|z.COPY_SRC}),t=this.device.createFramebuffer({colorAttachments:[e],depthStencilAttachment:`depth16unorm`});this.depthFBO=t}}let[t,n]=e.getDrawingBufferSize();this.pickingFBO?.resize({width:t,height:n}),this.depthFBO?.resize({width:t,height:n})}_getPickable(e){if(this._pickable===!1)return null;let t=e.filter(e=>this.pickLayersPass.shouldDrawLayer(e)&&!e.isComposite);return t.length?t:null}async _pickClosestObjectAsync({layers:e,views:t,viewports:n,x:r,y:i,radius:a=0,depth:o=1,mode:s=`query`,unproject3D:c,canvasContext:l=this.device.getDefaultCanvasContext(),onViewportActive:u,effects:d}){let f=l.cssToDeviceRatio(),p=this._getPickable(e);if(!p||n.length===0)return{result:[],emptyInfo:lm({viewports:n,x:r,y:i,pixelRatio:f})};this._resizeBuffer(l);let m=l.cssToDevicePixels([r,i],!0),h=[m.x+Math.floor(m.width/2),m.y+Math.floor(m.height/2)],g=Math.round(a*f),{width:_,height:v}=this.pickingFBO,y=this._getPickingRect({deviceX:h[0],deviceY:h[1],deviceRadius:g,deviceWidth:_,deviceHeight:v}),b={x:r-a,y:i-a,width:a*2+1,height:a*2+1},x,S=[],C=new Set;for(let e=0;e<o;e++){let a;a=y?sm({...await this._drawAndSampleAsync({layers:p,views:t,viewports:n,onViewportActive:u,deviceRect:y,cullRect:b,effects:d,pass:`picking:${s}`,canvasContext:l}),deviceX:h[0],deviceY:h[1],deviceRadius:g,deviceRect:y}):{pickedColor:null,pickedObjectIndex:-1};let m,_=this._getDepthLayers(a,p,c);if(_.length>0){let{pickedColors:e}=await this._drawAndSampleAsync({layers:_,views:t,viewports:n,onViewportActive:u,deviceRect:{x:a.pickedX??h[0],y:a.pickedY??h[1],width:1,height:1},cullRect:b,effects:d,pass:`picking:${s}:z`,canvasContext:l},!0);e[3]&&(m=e[0])}a.pickedLayer&&e+1<o&&(C.add(a.pickedLayer),a.pickedLayer.disablePickingIndex(a.pickedObjectIndex)),x=um({pickInfo:a,lastPickedInfo:this.lastPickedInfo,mode:s,layers:p,viewports:n,x:r,y:i,z:m,pixelRatio:f});for(let e of x.values())e.layer&&S.push(e);if(!a.pickedColor)break}for(let e of C)e.restorePickingColors();return{result:S,emptyInfo:x.get(null)}}_pickClosestObject({layers:e,views:t,viewports:n,x:r,y:i,radius:a=0,depth:o=1,mode:s=`query`,unproject3D:c,canvasContext:l=this.device.getDefaultCanvasContext(),onViewportActive:u,effects:d}){let f=l.cssToDeviceRatio(),p=this._getPickable(e);if(!p||n.length===0)return{result:[],emptyInfo:lm({viewports:n,x:r,y:i,pixelRatio:f})};this._resizeBuffer(l);let m=l.cssToDevicePixels([r,i],!0),h=[m.x+Math.floor(m.width/2),m.y+Math.floor(m.height/2)],g=Math.round(a*f),{width:_,height:v}=this.pickingFBO,y=this._getPickingRect({deviceX:h[0],deviceY:h[1],deviceRadius:g,deviceWidth:_,deviceHeight:v}),b={x:r-a,y:i-a,width:a*2+1,height:a*2+1},x,S=[],C=new Set;for(let e=0;e<o;e++){let a;a=y?sm({...this._drawAndSample({layers:p,views:t,viewports:n,onViewportActive:u,deviceRect:y,cullRect:b,effects:d,pass:`picking:${s}`,canvasContext:l}),deviceX:h[0],deviceY:h[1],deviceRadius:g,deviceRect:y}):{pickedColor:null,pickedObjectIndex:-1};let m,_=this._getDepthLayers(a,p,c);if(_.length>0){let{pickedColors:e}=this._drawAndSample({layers:_,views:t,viewports:n,onViewportActive:u,deviceRect:{x:a.pickedX??h[0],y:a.pickedY??h[1],width:1,height:1},cullRect:b,effects:d,pass:`picking:${s}:z`,canvasContext:l},!0);e[3]&&(m=e[0])}a.pickedLayer&&e+1<o&&(C.add(a.pickedLayer),a.pickedLayer.disablePickingIndex(a.pickedObjectIndex)),x=um({pickInfo:a,lastPickedInfo:this.lastPickedInfo,mode:s,layers:p,viewports:n,x:r,y:i,z:m,pixelRatio:f});for(let e of x.values())e.layer&&S.push(e);if(!a.pickedColor)break}for(let e of C)e.restorePickingColors();return{result:S,emptyInfo:x.get(null)}}async _pickVisibleObjectsAsync({layers:e,views:t,viewports:n,x:r,y:i,width:a=1,height:o=1,mode:s=`query`,maxObjects:c=null,canvasContext:l=this.device.getDefaultCanvasContext(),onViewportActive:u,effects:d}){let f=this._getPickable(e);if(!f||n.length===0)return[];this._resizeBuffer(l);let p=l.cssToDeviceRatio(),m=l.cssToDevicePixels([r,i],!0),h=m.x,g=m.y+m.height,_=l.cssToDevicePixels([r+a,i+o],!0),v=_.x+_.width,y=_.y,b={x:h,y,width:v-h,height:g-y},x=cm(await this._drawAndSampleAsync({layers:f,views:t,viewports:n,onViewportActive:u,deviceRect:b,cullRect:{x:r,y:i,width:a,height:o},effects:d,pass:`picking:${s}`,canvasContext:l})),S=new Map,C=[],w=Number.isFinite(c);for(let e=0;e<x.length&&!(w&&C.length>=c);e++){let t=x[e],n={color:t.pickedColor,layer:null,index:t.pickedObjectIndex,picked:!0,x:r,y:i,pixelRatio:p};n=dm({layer:t.pickedLayer,info:n,mode:s});let a=n.layer.id;S.has(a)||S.set(a,new Set);let o=S.get(a),c=n.object??n.index;o.has(c)||(o.add(c),C.push(n))}return C}_pickVisibleObjects({layers:e,views:t,viewports:n,x:r,y:i,width:a=1,height:o=1,mode:s=`query`,maxObjects:c=null,canvasContext:l=this.device.getDefaultCanvasContext(),onViewportActive:u,effects:d}){let f=this._getPickable(e);if(!f||n.length===0)return[];this._resizeBuffer(l);let p=l.cssToDeviceRatio(),m=l.cssToDevicePixels([r,i],!0),h=m.x,g=m.y+m.height,_=l.cssToDevicePixels([r+a,i+o],!0),v=_.x+_.width,y=_.y,b={x:h,y,width:v-h,height:g-y},x=cm(this._drawAndSample({layers:f,views:t,viewports:n,onViewportActive:u,deviceRect:b,cullRect:{x:r,y:i,width:a,height:o},effects:d,pass:`picking:${s}`,canvasContext:l})),S=new Map,C=[],w=Number.isFinite(c);for(let e=0;e<x.length&&!(w&&C.length>=c);e++){let t=x[e],n={color:t.pickedColor,layer:null,index:t.pickedObjectIndex,picked:!0,x:r,y:i,pixelRatio:p};n=dm({layer:t.pickedLayer,info:n,mode:s});let a=n.layer.id;S.has(a)||S.set(a,new Set);let o=S.get(a),c=n.object??n.index;o.has(c)||(o.add(c),C.push(n))}return C}async _drawAndSampleAsync({layers:e,views:t,viewports:n,onViewportActive:r,deviceRect:i,cullRect:a,effects:o,pass:s,canvasContext:c},l=!1){let u=l?this.depthFBO:this.pickingFBO,d={layers:e,layerFilter:this.layerFilter,views:t,viewports:n,onViewportActive:r,pickingFBO:u,deviceRect:i,cullRect:a,effects:o,pass:s,canvasContext:c,pickZ:l,preRenderStats:{},isPicking:!0};for(let e of o)e.useInPicking&&(d.preRenderStats[e.id]=e.preRender(d));let{decodePickingColor:f,stats:p}=this.pickLayersPass.render(d);this._updateStats(p);let{x:m,y:h,width:g,height:_}=i,v=u.colorAttachments[0]?.texture;if(!v)throw Error(`Picking framebuffer color attachment is missing`);let y=await this._readTextureDataAsync(v,{x:m,y:h,width:g,height:_},l?Float32Array:Uint8Array);if(!l){let e=!1;for(let t=3;t<y.length;t+=4)if(y[t]!==0){e=!0;break}!e&&y.length>0&&U.warn(`Async pick readback returned only zero alpha values`,{deviceRect:i,bytes:Array.from(y.subarray(0,Math.min(y.length,16)))})()}return{pickedColors:y,decodePickingColor:f}}async _readTextureDataAsync(e,t,r){let{width:i,height:a}=t,o=e.computeMemoryLayout(t),s=this.device.createBuffer({byteLength:o.byteLength,usage:n.COPY_DST|n.MAP_READ});try{e.readBuffer(t,s);let n=await s.readAsync(0,o.byteLength),c=r.BYTES_PER_ELEMENT;if(o.bytesPerRow%c!==0)throw Error(`Texture readback row stride ${o.bytesPerRow} is not aligned to ${c}-byte elements.`);let l=new r(n.buffer,n.byteOffset,o.byteLength/c),u=i*4,d=o.bytesPerRow/c;if(d<u)throw Error(`Texture readback row stride ${d} is smaller than packed row length ${u}.`);let f=new r(i*a*4);for(let e=0;e<a;e++){let t=e*d;f.set(l.subarray(t,t+u),e*u)}return f}finally{s.destroy()}}_drawAndSample({layers:e,views:t,viewports:n,onViewportActive:r,deviceRect:i,cullRect:a,effects:o,pass:s,canvasContext:c},l=!1){let u=l?this.depthFBO:this.pickingFBO,d={layers:e,layerFilter:this.layerFilter,views:t,viewports:n,onViewportActive:r,pickingFBO:u,deviceRect:i,cullRect:a,effects:o,pass:s,canvasContext:c,pickZ:l,preRenderStats:{},isPicking:!0};for(let e of o)e.useInPicking&&(d.preRenderStats[e.id]=e.preRender(d));let{decodePickingColor:f,stats:p}=this.pickLayersPass.render(d);this._updateStats(p);let{x:m,y:h,width:g,height:_}=i,v=new(l?Float32Array:Uint8Array)(g*_*4);return this.device.readPixelsToArrayWebGL(u,{sourceX:m,sourceY:h,sourceWidth:g,sourceHeight:_,target:v}),{pickedColors:v,decodePickingColor:f}}_updateStats(e){if(!this.stats)return;let t=0;for(let{visibleCount:n}of e)t+=n;this.stats.get(`Layers picked`).addCount(t)}_getDepthLayers(e,t,n){if(!n||!this.depthFBO)return[];let{pickedLayer:r}=e,i=r?.state?.terrainDrawMode===`drape`;return r&&!i?[r]:t.filter(e=>e.props.operation.includes(`terrain`))}_getPickingRect({deviceX:e,deviceY:t,deviceRadius:n,deviceWidth:r,deviceHeight:i}){let a=Math.max(0,e-n),o=Math.max(0,t-n),s=Math.min(r,e+n+1)-a,c=Math.min(i,t+n+1)-o;return s<=0||c<=0?null:{x:a,y:o,width:s,height:c}}},mm={"top-left":{top:0,left:0},"top-right":{top:0,right:0},"bottom-left":{bottom:0,left:0},"bottom-right":{bottom:0,right:0},fill:{top:0,left:0,bottom:0,right:0}},hm=`top-left`,gm=`root`,_m=class{constructor({deck:e,parentElement:t}){this.defaultWidgets=[],this.widgets=[],this.resolvedWidgets=[],this.containers={},this.lastViewports={},this.deck=e,t?.classList.add(`deck-widget-container`),this.parentElement=t}getWidgets(){return this.resolvedWidgets}setProps(e){if(e.widgets&&!ap(e.widgets,this.widgets,1)){let t=e.widgets.filter(Boolean);this._setWidgets(t)}}finalize(){for(let e of this.getWidgets())this._removeWidget(e);this.defaultWidgets.length=0,this.resolvedWidgets.length=0;for(let e in this.containers)this.containers[e].remove()}addDefault(e){this.defaultWidgets.find(t=>t.id===e.id)||(this._addWidget(e),this.defaultWidgets.push(e),this._setWidgets(this.widgets))}onRedraw({viewports:e,layers:t}){let n=e.reduce((e,t)=>(e[t.id]=t,e),{});for(let r of this.getWidgets()){let{viewId:i}=r;if(i){let e=n[i];e&&(r.onViewportChange&&r.onViewportChange(e),r.onRedraw?.({viewports:[e],layers:t}))}else{if(r.onViewportChange)for(let t of e)r.onViewportChange(t);r.onRedraw?.({viewports:e,layers:t})}}this.lastViewports=n,this._updateContainers()}onHover(e,t){for(let n of this.getWidgets()){let{viewId:r}=n;(!r||r===e.viewport?.id)&&n.onHover?.(e,t)}}getCanvasBounds(e){let t=(this.deck?.getCanvas?.())?.getBoundingClientRect(),n=this.parentElement?.getBoundingClientRect(),r=this.deck?.getCanvasContext?.(e?.id);if(r&&n){r.updatePosition();let[e,t]=r.getPosition(),[i,a]=r.getCSSSize();return{x:e-n.left,y:t-n.top,width:i,height:a}}return{x:t&&n?t.left-n.left:0,y:t&&n?t.top-n.top:0,width:t?.width||this.deck?.width||0,height:t?.height||this.deck?.height||0}}onEvent(e,t){let n=gl[t.type];if(n)for(let r of this.getWidgets()){let{viewId:i}=r;(!i||i===e.viewport?.id)&&r[n]?.(e,t)}}_setWidgets(e){let t={};for(let e of this.resolvedWidgets)t[e.id]=e;this.resolvedWidgets.length=0;for(let e of this.defaultWidgets)t[e.id]=null,this.resolvedWidgets.push(e);for(let n of e){let e=t[n.id];e?e.viewId!==n.viewId||e.placement!==n.placement?(this._removeWidget(e),this._addWidget(n)):n!==e&&(e.setProps(n.props),n=e):this._addWidget(n),t[n.id]=null,this.resolvedWidgets.push(n)}for(let e in t){let n=t[e];n&&this._removeWidget(n)}this.widgets=e}_addWidget(e){let{viewId:t=null,placement:n=hm}=e,r=e.props._container??t;e.widgetManager=this,e.deck=this.deck,e.rootElement=e._onAdd({deck:this.deck,viewId:t}),e.rootElement&&this._getContainer(r,n).append(e.rootElement),e.updateHTML()}_removeWidget(e){e.onRemove?.(),e.rootElement&&e.rootElement.remove(),e.rootElement=void 0,e.deck=void 0,e.widgetManager=void 0}_getContainer(e,t){if(e&&typeof e!=`string`)return e;let n=e||gm,r=this.containers[n];r||(r=document.createElement(`div`),r.style.pointerEvents=`none`,r.style.position=`absolute`,r.style.overflow=`hidden`,this.parentElement?.append(r),this.containers[n]=r);let i=r.querySelector(`.${t}`);return i||(i=globalThis.document.createElement(`div`),i.className=t,i.style.position=`absolute`,i.style.zIndex=`2`,Object.assign(i.style,mm[t]),r.append(i)),i}_updateContainers(){for(let e in this.containers){let t=this.lastViewports[e]||null,n=e===gm||t,r=this.containers[e];if(n){let e=this._getContainerBounds(t);r.style.display=`block`,r.style.left=`${e.x}px`,r.style.top=`${e.y}px`,r.style.width=`${e.width}px`,r.style.height=`${e.height}px`}else r.style.display=`none`}}_getContainerBounds(e){if(!e)return{x:0,y:0,width:this.parentElement?.clientWidth||this.deck.width,height:this.parentElement?.clientHeight||this.deck.height};let t=this.getCanvasBounds(e);return{x:t.x+e.x,y:t.y+e.y,width:e.width,height:e.height}}};function vm(e,t){t&&Object.entries(t).map(([t,n])=>{t.startsWith(`--`)?e.style.setProperty(t,n):e.style[t]=n})}function ym(e,t){t&&Object.keys(t).map(t=>{t.startsWith(`--`)?e.style.removeProperty(t):e.style[t]=``})}var bm=class{constructor(e){this.viewId=null,this.props={...this.constructor.defaultProps,...e},this.id=this.props.id}setProps(e){let t=this.props,n=this.rootElement;n&&t.className!==e.className&&(t.className&&n.classList.remove(t.className),e.className&&n.classList.add(e.className)),n&&!ap(t.style,e.style,1)&&(ym(n,t.style),vm(n,e.style)),Object.assign(this.props,e),this.updateHTML()}updateHTML(){this.rootElement&&this.onRenderHTML(this.rootElement)}get viewIds(){return this.viewId?[this.viewId]:this.deck?.getViews().map(e=>e.id)??[]}getViewState(e){return this.deck?.viewManager?.getViewState(e)||{}}setViewState(e,t){this.deck?._onViewStateChange({viewId:e,viewState:t,interactionState:{}})}onCreateRootElement(){let e=[`deck-widget`,this.className,this.props.className],t=document.createElement(`div`);return e.filter(e=>typeof e==`string`&&e.length>0).forEach(e=>t.classList.add(e)),vm(t,this.props.style),t}_onAdd(e){return this.onAdd(e)??this.onCreateRootElement()}onAdd(e){}onRemove(){}onViewportChange(e){}onRedraw(e){}onHover(e,t){}onClick(e,t){}onDrag(e,t){}onDragStart(e,t){}onDragEnd(e,t){}};bm.defaultProps={id:`widget`,style:{},_container:null,className:``};var xm={zIndex:`1`,position:`absolute`,pointerEvents:`none`,color:`#a0a7b4`,backgroundColor:`#29323c`,padding:`10px`,top:`0`,left:`0`,display:`none`},Sm=class extends bm{constructor(e={}){super(e),this.id=`default-tooltip`,this.placement=`fill`,this.className=`deck-tooltip`,this.isVisible=!1,this.setProps(e)}onCreateRootElement(){let e=document.createElement(`div`);return e.className=this.className,Object.assign(e.style,xm),e}onRenderHTML(e){}onViewportChange(e){this.isVisible&&e.id===this.lastViewport?.id&&!e.equals(this.lastViewport)&&this.setTooltip(null),this.lastViewport=e}onHover(e){let{deck:t}=this,n=t&&t.props.getTooltip;if(!n)return;let r=n(e),i=this.widgetManager?.getCanvasBounds(e.viewport),a=e.x+(i?.x||0),o=e.y+(i?.y||0);this.setTooltip(r,a,o)}setTooltip(e,t,n){let r=this.rootElement;if(r){if(typeof e==`string`)r.innerText=e;else if(e)e.text&&(r.innerText=e.text),e.html&&(r.innerHTML=e.html),e.className&&(r.className=e.className);else{this.isVisible=!1,r.style.display=`none`;return}this.isVisible=!0,r.style.display=`block`,r.style.transform=`translate(${t}px, ${n}px)`,e&&typeof e==`object`&&`style`in e&&Object.assign(r.style,e.style)}}};Sm.defaultProps={...bm.defaultProps};var Cm=class{constructor(e){this.targets={},this.order=[],this.eventManagers={},this._eventRootToCanvasId=new WeakMap,this._createEventManager=e.createEventManager,this._getEventRoot=e.getEventRoot}finalize(){for(let e of Object.values(this.targets))e.eventManager.destroy(),e.presentationContext.destroy();this.targets={},this.order=[],this.eventManagers={},this._eventRootToCanvasId=new WeakMap}syncCanvasEntries(e){let t=this._normalizeCanvasList(e.canvases),n={},r=[],i=new Map;for(let{canvas:e}of t){let t=this._getEventRoot(e);i.set(t,(i.get(t)||0)+1)}for(let{id:a,canvas:o}of t){let t=this._getEventRoot(o),s=i.get(t)===1?t:o,c=this.targets[a];if(!c||c.device!==e.device||c.canvas!==o||c.eventRoot!==s){c?.eventManager.destroy(),c?.presentationContext.destroy();let t=e.device.createPresentationContext({id:a,canvas:o,useDevicePixels:e.useDevicePixels,autoResize:!0});c={id:a,device:e.device,canvas:o,eventRoot:s,presentationContext:t,eventManager:this._createEventManager(s)}}this._eventRootToCanvasId.set(s,a),this._eventRootToCanvasId.set(o,a),n[a]=c,r.push(a)}for(let[e,t]of Object.entries(this.targets))n[e]||(t.eventManager.destroy(),t.presentationContext.destroy());this.targets=n,this.order=r;let a=Object.fromEntries(Object.entries(n).map(([e,t])=>[e,t.eventManager]));this._haveSameEventManagers(a)||(this.eventManagers=a)}getCanvasIdFromEvent(e){return e?this._eventRootToCanvasId.get(e):void 0}getTarget(e){return this.targets[e||this.order[0]||`default-canvas`]||null}_normalizeCanvasList(e=[]){let t=new Set;return e.map((e,n)=>{let r,i;return typeof e==`string`?(r=document.getElementById(e),q(r,`Canvas with id ${e} not found`),i=e):(r=e,i=r.id||`deckgl-canvas-${n}`),q(!t.has(i),`Duplicate canvas id ${i}`),t.add(i),{id:i,canvas:r}})}_haveSameEventManagers(e){let t=Object.keys(e),n=Object.keys(this.eventManagers);return t.length===n.length&&t.every(t=>e[t]===this.eventManagers[t])}},wm={WEBGL_depth_texture:{UNSIGNED_INT_24_8_WEBGL:34042},OES_element_index_uint:{},OES_texture_float:{},OES_texture_half_float:{HALF_FLOAT_OES:5131},EXT_color_buffer_float:{},OES_standard_derivatives:{FRAGMENT_SHADER_DERIVATIVE_HINT_OES:35723},EXT_frag_depth:{},EXT_blend_minmax:{MIN_EXT:32775,MAX_EXT:32776},EXT_shader_texture_lod:{}},Tm=e=>({drawBuffersWEBGL(t){return e.drawBuffers(t)},COLOR_ATTACHMENT0_WEBGL:36064,COLOR_ATTACHMENT1_WEBGL:36065,COLOR_ATTACHMENT2_WEBGL:36066,COLOR_ATTACHMENT3_WEBGL:36067}),Em=e=>({VERTEX_ARRAY_BINDING_OES:34229,createVertexArrayOES(){return e.createVertexArray()},deleteVertexArrayOES(t){return e.deleteVertexArray(t)},isVertexArrayOES(t){return e.isVertexArray(t)},bindVertexArrayOES(t){return e.bindVertexArray(t)}}),Dm=e=>({VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE:35070,drawArraysInstancedANGLE(...t){return e.drawArraysInstanced(...t)},drawElementsInstancedANGLE(...t){return e.drawElementsInstanced(...t)},vertexAttribDivisorANGLE(...t){return e.vertexAttribDivisor(...t)}});function Om(e=!0){let t=HTMLCanvasElement.prototype;if(!e&&t.originalGetContext){t.getContext=t.originalGetContext,t.originalGetContext=void 0;return}t.originalGetContext=t.getContext,t.getContext=function(e,t){if(e===`webgl`||e===`experimental-webgl`){let e=this.originalGetContext(`webgl2`,t);return e instanceof HTMLElement&&km(e),e}return this.originalGetContext(e,t)}}function km(e){e.getExtension(`EXT_color_buffer_float`);let t={...wm,WEBGL_disjoint_timer_query:e.getExtension(`EXT_disjoint_timer_query_webgl2`),WEBGL_draw_buffers:Tm(e),OES_vertex_array_object:Em(e),ANGLE_instanced_arrays:Dm(e)},n=e.getExtension.bind(e);e.getExtension=function(e){return n(e)||(e in t?t[e]:null)};let r=e.getSupportedExtensions;e.getSupportedExtensions=function(){return(r.apply(e)||[])?.concat(Object.keys(t))}}var Am=null,jm=!1;async function Mm(){Im()}function Nm(e,t){return Im(),e}async function Pm(e){Im()}function Fm(e){return Am?.initialize(e)||null}function Im(){jm||(jm=!0,i.warn(`Import @luma.gl/webgl/debug before enabling WebGL debugging.`)())}var Lm=`modulepreload`,Rm=function(e){return`/writing/nyc-marathon/`+e},zm={},Bm=function(e){return e.pathname.endsWith(`.css`)},Vm=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Rm(t,n);let r=s(t);if(r.href in zm)return;zm[r.href]=!0;let i=Bm(r);if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let o=document.createElement(`link`);if(o.rel=i?`stylesheet`:Lm,i||(o.as=`script`),o.crossOrigin=``,o.href=r.href,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),i)return new Promise((e,t)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${r}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Hm=1,Um=class extends Oi{type=`webgl`;enforceWebGL2(e){Om(e)}isSupported(){return typeof WebGL2RenderingContext<`u`}isDeviceHandle(e){return typeof WebGL2RenderingContext<`u`&&e instanceof WebGL2RenderingContext||(typeof WebGLRenderingContext<`u`&&e instanceof WebGLRenderingContext&&i.warn(`WebGL1 is not supported`,e)(),!1)}async attach(e,t={}){let{WebGLDevice:n}=await Vm(async()=>{let{WebGLDevice:e}=await Promise.resolve().then(()=>G_);return{WebGLDevice:e}},void 0);if(e instanceof n)return e;let r=n.getDeviceFromContext(e);if(r)return r;if(!Wm(e))throw Error(`Invalid WebGL2RenderingContext`);t=Km(t),await qm(t);let i=t.createCanvasContext===!0?{}:t.createCanvasContext;return new n({...t,_handle:e,createCanvasContext:{canvas:e.canvas,autoResize:!1,...i}})}async create(e={}){let{WebGLDevice:t}=await Vm(async()=>{let{WebGLDevice:e}=await Promise.resolve().then(()=>G_);return{WebGLDevice:e}},void 0);e=Km(e),await qm(e);try{let n=new t(e);i.groupCollapsed(Hm,`WebGLDevice ${n.id} created`)();let r=`\
${n._reused?`Reusing`:`Created`} device with WebGL2 ${n.props.debug?`debug `:``}context: \
${n.info.vendor}, ${n.info.renderer} for canvas: ${n.canvasContext.id}`;return i.probe(Hm,r)(),i.table(Hm,n.info)(),n}finally{i.groupEnd(Hm)(),i.info(Hm,`%cWebGL call tracing: luma.log.set('debug-webgl') `,`color: white; background: blue; padding: 2px 6px; border-radius: 3px;`)()}}};function Wm(e){return typeof WebGL2RenderingContext<`u`&&e instanceof WebGL2RenderingContext||!!(e&&typeof e.createVertexArray==`function`)}var Gm=new Um;function Km(e){return{...e,debug:e.debug??Ui.defaultProps.debug,debugWebGL:e.debugWebGL??Ui.defaultProps.debugWebGL,debugSpectorJS:e.debugSpectorJS??!!i.get(`debug-spectorjs`)}}async function qm(e){let t=[];(e.debugWebGL||e.debug)&&t.push(Mm()),e.debugSpectorJS&&t.push(Pm(e));let n=await Promise.allSettled(t);for(let e of n)e.status===`rejected`&&i.error(`Failed to initialize debug libraries ${e.reason}`)()}var Jm={3042:!1,32773:new Float32Array([0,0,0,0]),32777:32774,34877:32774,32969:1,32968:0,32971:1,32970:0,3106:new Float32Array([0,0,0,0]),3107:[!0,!0,!0,!0],2884:!1,2885:1029,2929:!1,2931:1,2932:513,2928:new Float32Array([0,1]),2930:!0,3024:!0,35725:null,36006:null,36007:null,34229:null,34964:null,2886:2305,33170:4352,2849:1,32823:!1,32824:0,10752:0,32926:!1,32928:!1,32938:1,32939:!1,3089:!1,3088:new Int32Array([0,0,1024,1024]),2960:!1,2961:0,2968:4294967295,36005:4294967295,2962:519,2967:0,2963:4294967295,34816:519,36003:0,36004:4294967295,2964:7680,2965:7680,2966:7680,34817:7680,34818:7680,34819:7680,2978:[0,0,1024,1024],36389:null,36662:null,36663:null,35053:null,35055:null,35723:4352,36010:null,35977:!1,3333:4,3317:4,37440:!1,37441:!1,37443:37444,3330:0,3332:0,3331:0,3314:0,32878:0,3316:0,3315:0,32877:0},J=(e,t,n)=>t?e.enable(n):e.disable(n),Ym=(e,t,n)=>e.hint(n,t),Xm=(e,t,n)=>e.pixelStorei(n,t),Zm=(e,t,n)=>{let r=n===36006?36009:36008;return e.bindFramebuffer(r,t)},Qm=(e,t,n)=>{let r={34964:34962,36662:36662,36663:36663,35053:35051,35055:35052}[n];e.bindBuffer(r,t)};function $m(e){return Array.isArray(e)||ArrayBuffer.isView(e)&&!(e instanceof DataView)}var eh={3042:J,32773:(e,t)=>e.blendColor(...t),32777:`blendEquation`,34877:`blendEquation`,32969:`blendFunc`,32968:`blendFunc`,32971:`blendFunc`,32970:`blendFunc`,3106:(e,t)=>e.clearColor(...t),3107:(e,t)=>e.colorMask(...t),2884:J,2885:(e,t)=>e.cullFace(t),2929:J,2931:(e,t)=>e.clearDepth(t),2932:(e,t)=>e.depthFunc(t),2928:(e,t)=>e.depthRange(...t),2930:(e,t)=>e.depthMask(t),3024:J,35723:Ym,35725:(e,t)=>e.useProgram(t),36007:(e,t)=>e.bindRenderbuffer(36161,t),36389:(e,t)=>e.bindTransformFeedback?.(36386,t),34229:(e,t)=>e.bindVertexArray(t),36006:Zm,36010:Zm,34964:Qm,36662:Qm,36663:Qm,35053:Qm,35055:Qm,2886:(e,t)=>e.frontFace(t),33170:Ym,2849:(e,t)=>e.lineWidth(t),32823:J,32824:`polygonOffset`,10752:`polygonOffset`,35977:J,32926:J,32928:J,32938:`sampleCoverage`,32939:`sampleCoverage`,3089:J,3088:(e,t)=>e.scissor(...t),2960:J,2961:(e,t)=>e.clearStencil(t),2968:(e,t)=>e.stencilMaskSeparate(1028,t),36005:(e,t)=>e.stencilMaskSeparate(1029,t),2962:`stencilFuncFront`,2967:`stencilFuncFront`,2963:`stencilFuncFront`,34816:`stencilFuncBack`,36003:`stencilFuncBack`,36004:`stencilFuncBack`,2964:`stencilOpFront`,2965:`stencilOpFront`,2966:`stencilOpFront`,34817:`stencilOpBack`,34818:`stencilOpBack`,34819:`stencilOpBack`,2978:(e,t)=>e.viewport(...t),34383:J,10754:J,12288:J,12289:J,12290:J,12291:J,12292:J,12293:J,12294:J,12295:J,3333:Xm,3317:Xm,37440:Xm,37441:Xm,37443:Xm,3330:Xm,3332:Xm,3331:Xm,3314:Xm,32878:Xm,3316:Xm,3315:Xm,32877:Xm,framebuffer:(e,t)=>{let n=t&&`handle`in t?t.handle:t;return e.bindFramebuffer(36160,n)},blend:(e,t)=>t?e.enable(3042):e.disable(3042),blendColor:(e,t)=>e.blendColor(...t),blendEquation:(e,t)=>{let n=typeof t==`number`?[t,t]:t;e.blendEquationSeparate(...n)},blendFunc:(e,t)=>{let n=t?.length===2?[...t,...t]:t;e.blendFuncSeparate(...n)},clearColor:(e,t)=>e.clearColor(...t),clearDepth:(e,t)=>e.clearDepth(t),clearStencil:(e,t)=>e.clearStencil(t),colorMask:(e,t)=>e.colorMask(...t),cull:(e,t)=>t?e.enable(2884):e.disable(2884),cullFace:(e,t)=>e.cullFace(t),depthTest:(e,t)=>t?e.enable(2929):e.disable(2929),depthFunc:(e,t)=>e.depthFunc(t),depthMask:(e,t)=>e.depthMask(t),depthRange:(e,t)=>e.depthRange(...t),dither:(e,t)=>t?e.enable(3024):e.disable(3024),derivativeHint:(e,t)=>{e.hint(35723,t)},frontFace:(e,t)=>e.frontFace(t),mipmapHint:(e,t)=>e.hint(33170,t),lineWidth:(e,t)=>e.lineWidth(t),polygonOffsetFill:(e,t)=>t?e.enable(32823):e.disable(32823),polygonOffset:(e,t)=>e.polygonOffset(...t),sampleCoverage:(e,t)=>e.sampleCoverage(t[0],t[1]||!1),scissorTest:(e,t)=>t?e.enable(3089):e.disable(3089),scissor:(e,t)=>e.scissor(...t),stencilTest:(e,t)=>t?e.enable(2960):e.disable(2960),stencilMask:(e,t)=>{t=$m(t)?t:[t,t];let[n,r]=t;e.stencilMaskSeparate(1028,n),e.stencilMaskSeparate(1029,r)},stencilFunc:(e,t)=>{t=$m(t)&&t.length===3?[...t,...t]:t;let[n,r,i,a,o,s]=t;e.stencilFuncSeparate(1028,n,r,i),e.stencilFuncSeparate(1029,a,o,s)},stencilOp:(e,t)=>{t=$m(t)&&t.length===3?[...t,...t]:t;let[n,r,i,a,o,s]=t;e.stencilOpSeparate(1028,n,r,i),e.stencilOpSeparate(1029,a,o,s)},viewport:(e,t)=>e.viewport(...t)};function Y(e,t,n){return t[e]===void 0?n[e]:t[e]}var th={blendEquation:(e,t,n)=>e.blendEquationSeparate(Y(32777,t,n),Y(34877,t,n)),blendFunc:(e,t,n)=>e.blendFuncSeparate(Y(32969,t,n),Y(32968,t,n),Y(32971,t,n),Y(32970,t,n)),polygonOffset:(e,t,n)=>e.polygonOffset(Y(32824,t,n),Y(10752,t,n)),sampleCoverage:(e,t,n)=>e.sampleCoverage(Y(32938,t,n),Y(32939,t,n)),stencilFuncFront:(e,t,n)=>e.stencilFuncSeparate(1028,Y(2962,t,n),Y(2967,t,n),Y(2963,t,n)),stencilFuncBack:(e,t,n)=>e.stencilFuncSeparate(1029,Y(34816,t,n),Y(36003,t,n),Y(36004,t,n)),stencilOpFront:(e,t,n)=>e.stencilOpSeparate(1028,Y(2964,t,n),Y(2965,t,n),Y(2966,t,n)),stencilOpBack:(e,t,n)=>e.stencilOpSeparate(1029,Y(34817,t,n),Y(34818,t,n),Y(34819,t,n))},nh={enable:(e,t)=>e({[t]:!0}),disable:(e,t)=>e({[t]:!1}),pixelStorei:(e,t,n)=>e({[t]:n}),hint:(e,t,n)=>e({[t]:n}),useProgram:(e,t)=>e({35725:t}),bindRenderbuffer:(e,t,n)=>e({36007:n}),bindTransformFeedback:(e,t,n)=>e({36389:n}),bindVertexArray:(e,t)=>e({34229:t}),bindFramebuffer:(e,t,n)=>{switch(t){case 36160:return e({36006:n,36010:n});case 36009:return e({36006:n});case 36008:return e({36010:n});default:return null}},bindBuffer:(e,t,n)=>{let r={34962:[34964],36662:[36662],36663:[36663],35051:[35053],35052:[35055]}[t];return r?e({[r]:n}):{valueChanged:!0}},blendColor:(e,t,n,r,i)=>e({32773:new Float32Array([t,n,r,i])}),blendEquation:(e,t)=>e({32777:t,34877:t}),blendEquationSeparate:(e,t,n)=>e({32777:t,34877:n}),blendFunc:(e,t,n)=>e({32969:t,32968:n,32971:t,32970:n}),blendFuncSeparate:(e,t,n,r,i)=>e({32969:t,32968:n,32971:r,32970:i}),clearColor:(e,t,n,r,i)=>e({3106:new Float32Array([t,n,r,i])}),clearDepth:(e,t)=>e({2931:t}),clearStencil:(e,t)=>e({2961:t}),colorMask:(e,t,n,r,i)=>e({3107:[t,n,r,i]}),cullFace:(e,t)=>e({2885:t}),depthFunc:(e,t)=>e({2932:t}),depthRange:(e,t,n)=>e({2928:new Float32Array([t,n])}),depthMask:(e,t)=>e({2930:t}),frontFace:(e,t)=>e({2886:t}),lineWidth:(e,t)=>e({2849:t}),polygonOffset:(e,t,n)=>e({32824:t,10752:n}),sampleCoverage:(e,t,n)=>e({32938:t,32939:n}),scissor:(e,t,n,r,i)=>e({3088:new Int32Array([t,n,r,i])}),stencilMask:(e,t)=>e({2968:t,36005:t}),stencilMaskSeparate:(e,t,n)=>e({[t===1028?2968:36005]:n}),stencilFunc:(e,t,n,r)=>e({2962:t,2967:n,2963:r,34816:t,36003:n,36004:r}),stencilFuncSeparate:(e,t,n,r,i)=>e({[t===1028?2962:34816]:n,[t===1028?2967:36003]:r,[t===1028?2963:36004]:i}),stencilOp:(e,t,n,r)=>e({2964:t,2965:n,2966:r,34817:t,34818:n,34819:r}),stencilOpSeparate:(e,t,n,r,i)=>e({[t===1028?2964:34817]:n,[t===1028?2965:34818]:r,[t===1028?2966:34819]:i}),viewport:(e,t,n,r,i)=>e({2978:[t,n,r,i]})},rh=(e,t)=>e.isEnabled(t),ih={3042:rh,2884:rh,2929:rh,3024:rh,32823:rh,32926:rh,32928:rh,3089:rh,2960:rh,35977:rh},ah=new Set([34016,36388,36387,35983,35368,34965,35739,35738,3074,34853,34854,34855,34856,34857,34858,34859,34860,34861,34862,34863,34864,34865,34866,34867,34868,35097,32873,35869,32874,34068]);function oh(e,t){if(lh(t))return;let n={};for(let r in t){let i=Number(r),a=eh[r];a&&(typeof a==`string`?n[a]=!0:a(e,t[r],i))}let r=e.lumaState?.cache;if(r)for(let i in n){let n=th[i];n(e,t,r)}}function sh(e,t=Jm){if(typeof t==`number`){let n=t,r=ih[n];return r?r(e,n):e.getParameter(n)}let n=Array.isArray(t)?t:Object.keys(t),r={};for(let t of n){let n=ih[t];r[t]=n?n(e,Number(t)):e.getParameter(Number(t))}return r}function ch(e){oh(e,Jm)}function lh(e){for(let t in e)return!1;return!0}function uh(e,t){if(e===t)return!0;if(dh(e)&&dh(t)&&e.length===t.length){for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}return!1}function dh(e){return Array.isArray(e)||ArrayBuffer.isView(e)}var fh=class{static get(e){return e.lumaState}gl;program=null;stateStack=[];enable=!0;cache=null;log;initialized=!1;constructor(e,t){this.gl=e,this.log=t?.log||(()=>{}),this._updateCache=this._updateCache.bind(this),Object.seal(this)}push(e={}){this.stateStack.push({})}pop(){let e=this.stateStack[this.stateStack.length-1];oh(this.gl,e),this.stateStack.pop()}trackState(e,t){if(this.cache=t?.copyState?sh(e):Object.assign({},Jm),this.initialized)throw Error(`WebGLStateTracker`);this.initialized=!0,this.gl.lumaState=this,hh(e);for(let t in nh){let n=nh[t];mh(e,t,n)}ph(e,`getParameter`),ph(e,`isEnabled`)}_updateCache(e){let t=!1,n,r=this.stateStack.length>0?this.stateStack[this.stateStack.length-1]:null;for(let i in e){let a=e[i],o=this.cache[i];uh(a,o)||(t=!0,n=o,r&&!(i in r)&&(r[i]=o),this.cache[i]=a)}return{valueChanged:t,oldValue:n}}};function ph(e,t){let n=e[t].bind(e);e[t]=function(t){if(t===void 0||ah.has(t))return n(t);let r=fh.get(e);return t in r.cache||(r.cache[t]=n(t)),r.enable?r.cache[t]:n(t)},Object.defineProperty(e[t],"name",{value:`${t}-from-cache`,configurable:!1})}function mh(e,t,n){if(!e[t])return;let r=e[t].bind(e);e[t]=function(...t){let{valueChanged:i,oldValue:a}=n(fh.get(e)._updateCache,...t);return i&&r(...t),a},Object.defineProperty(e[t],"name",{value:`${t}-to-cache`,configurable:!1})}function hh(e){let t=e.useProgram.bind(e);e.useProgram=function(n){let r=fh.get(e);r.program!==n&&(t(n),r.program=n)}}function gh(e){let t=e.luma||{_polyfilled:!1,extensions:{},softwareRenderer:!1};return t._polyfilled??=!1,t.extensions||={},e.luma=t,t}function _h(e,t,n){let r=``,i=e=>{let t=e.statusMessage;t&&(r||=t)};e.addEventListener(`webglcontextcreationerror`,i,!1);let a=n.failIfMajorPerformanceCaveat!==!0,o={preserveDrawingBuffer:!0,...n,failIfMajorPerformanceCaveat:!0},s=null;try{s||=e.getContext(`webgl2`,o),!s&&o.failIfMajorPerformanceCaveat&&(r||="Only software GPU is available. Set `failIfMajorPerformanceCaveat: false` to allow.");let n=!1;if(!s&&a&&(o.failIfMajorPerformanceCaveat=!1,s=e.getContext(`webgl2`,o),n=!0),s||(s=e.getContext(`webgl`,{}),s&&(s=null,r||=`Your browser only supports WebGL1`)),!s)throw r||=`Your browser does not support WebGL`,Error(`Failed to create WebGL context: ${r}`);let i=gh(s);i.softwareRenderer=n;let{onContextLost:c,onContextRestored:l}=t;return e.addEventListener(`webglcontextlost`,e=>c(e),!1),e.addEventListener(`webglcontextrestored`,e=>l(e),!1),s}finally{e.removeEventListener(`webglcontextcreationerror`,i,!1)}}function vh(e,t,n){return n[t]===void 0&&(n[t]=e.getExtension(t)||null),n[t]}function yh(e,t){let n=e.getParameter(7936),r=e.getParameter(7937);vh(e,`WEBGL_debug_renderer_info`,t);let i=t.WEBGL_debug_renderer_info,a=e.getParameter(i?i.UNMASKED_VENDOR_WEBGL:7936),o=e.getParameter(i?i.UNMASKED_RENDERER_WEBGL:7937),s=a||n,c=o||r,l=e.getParameter(7938),u=bh(s,c),d=xh(s,c);return{type:`webgl`,gpu:u,gpuType:Sh(s,c),gpuBackend:d,vendor:s,renderer:c,version:l,shadingLanguage:`glsl`,shadingLanguageVersion:300}}function bh(e,t){return/NVIDIA/i.exec(e)||/NVIDIA/i.exec(t)?`nvidia`:/INTEL/i.exec(e)||/INTEL/i.exec(t)?`intel`:/Apple/i.exec(e)||/Apple/i.exec(t)?`apple`:/AMD/i.exec(e)||/AMD/i.exec(t)||/ATI/i.exec(e)||/ATI/i.exec(t)?`amd`:/SwiftShader/i.exec(e)||/SwiftShader/i.exec(t)?`software`:`unknown`}function xh(e,t){return/Metal/i.exec(e)||/Metal/i.exec(t)?`metal`:/ANGLE/i.exec(e)||/ANGLE/i.exec(t)?`opengl`:`unknown`}function Sh(e,t){if(/SwiftShader/i.exec(e)||/SwiftShader/i.exec(t))return`cpu`;switch(bh(e,t)){case`apple`:return Ch(e,t)?`integrated`:`unknown`;case`intel`:return`integrated`;case`software`:return`cpu`;case`unknown`:return`unknown`;default:return`discrete`}}function Ch(e,t){return/Apple (M\d|A\d|GPU)/i.test(`${e} ${t}`)}function wh(e){switch(e){case`uint8`:return 5121;case`sint8`:return 5120;case`unorm8`:return 5121;case`snorm8`:return 5120;case`uint16`:return 5123;case`sint16`:return 5122;case`unorm16`:return 5123;case`snorm16`:return 5122;case`uint32`:return 5125;case`sint32`:return 5124;case`float16`:return 5131;case`float32`:return 5126}throw Error(String(e))}var Th=`WEBGL_compressed_texture_s3tc`,Eh=`WEBGL_compressed_texture_s3tc_srgb`,Dh=`EXT_texture_compression_rgtc`,Oh=`EXT_texture_compression_bptc`,kh=`WEBGL_compressed_texture_etc`,Ah=`WEBGL_compressed_texture_astc`,jh=`WEBGL_compressed_texture_etc1`,Mh=`WEBGL_compressed_texture_pvrtc`,Nh=`WEBGL_compressed_texture_atc`,Ph=`EXT_texture_norm16`,Fh=`EXT_render_snorm`,Ih=`EXT_color_buffer_float`,Lh=`snorm8-renderable-webgl`,Rh=`norm16-renderable-webgl`,zh=`snorm16-renderable-webgl`,Bh=`float16-renderable-webgl`,Vh=`float32-renderable-webgl`,Hh=`rgb9e5ufloat-renderable-webgl`,Uh={"float32-renderable-webgl":{extensions:[Ih]},"float16-renderable-webgl":{extensions:[`EXT_color_buffer_half_float`]},"rgb9e5ufloat-renderable-webgl":{extensions:[`WEBGL_render_shared_exponent`]},"snorm8-renderable-webgl":{extensions:[Fh]},"norm16-webgl":{extensions:[Ph]},"norm16-renderable-webgl":{features:[`norm16-webgl`]},"snorm16-renderable-webgl":{features:[`norm16-webgl`],extensions:[Fh]},"float32-filterable":{extensions:[`OES_texture_float_linear`]},"float16-filterable-webgl":{extensions:[`OES_texture_half_float_linear`]},"texture-filterable-anisotropic-webgl":{extensions:[`EXT_texture_filter_anisotropic`]},"texture-blend-float-webgl":{extensions:[`EXT_float_blend`]},"texture-compression-bc":{extensions:[Th,Eh,Dh,Oh]},"texture-compression-bc5-webgl":{extensions:[Dh]},"texture-compression-bc7-webgl":{extensions:[Oh]},"texture-compression-etc2":{extensions:[kh]},"texture-compression-astc":{extensions:[Ah]},"texture-compression-etc1-webgl":{extensions:[jh]},"texture-compression-pvrtc-webgl":{extensions:[Mh]},"texture-compression-atc-webgl":{extensions:[Nh]}};function Wh(e){return e in Uh}function Gh(e,t,n){return Kh(e,t,n,new Set)}function Kh(e,t,n,r){let i=Uh[t];if(!i||r.has(t))return!1;r.add(t);let a=(i.features||[]).every(t=>Kh(e,t,n,r));return r.delete(t),a?(i.extensions||[]).every(t=>!!vh(e,t,n)):!1}var qh={r8unorm:{gl:33321,rb:!0},r8snorm:{gl:36756,r:Lh},r8uint:{gl:33330,rb:!0},r8sint:{gl:33329,rb:!0},rg8unorm:{gl:33323,rb:!0},rg8snorm:{gl:36757,r:Lh},rg8uint:{gl:33336,rb:!0},rg8sint:{gl:33335,rb:!0},r16uint:{gl:33332,rb:!0},r16sint:{gl:33331,rb:!0},r16float:{gl:33325,rb:!0,r:Bh},r16unorm:{gl:33322,rb:!0,r:Rh},r16snorm:{gl:36760,r:zh},"rgba4unorm-webgl":{gl:32854,rb:!0},"rgb565unorm-webgl":{gl:36194,rb:!0},"rgb5a1unorm-webgl":{gl:32855,rb:!0},"rgb8unorm-webgl":{gl:32849},"rgb8snorm-webgl":{gl:36758},rgba8unorm:{gl:32856},"rgba8unorm-srgb":{gl:35907},rgba8snorm:{gl:36759,r:Lh},rgba8uint:{gl:36220},rgba8sint:{gl:36238},bgra8unorm:{},"bgra8unorm-srgb":{},rg16uint:{gl:33338},rg16sint:{gl:33337},rg16float:{gl:33327,rb:!0,r:Bh},rg16unorm:{gl:33324,r:Rh},rg16snorm:{gl:36761,r:zh},r32uint:{gl:33334,rb:!0},r32sint:{gl:33333,rb:!0},r32float:{gl:33326,r:Vh},rgb9e5ufloat:{gl:35901,r:Hh},rg11b10ufloat:{gl:35898,rb:!0},rgb10a2unorm:{gl:32857,rb:!0},rgb10a2uint:{gl:36975,rb:!0},"rgb16unorm-webgl":{gl:32852,r:!1},"rgb16snorm-webgl":{gl:36762,r:!1},rg32uint:{gl:33340,rb:!0},rg32sint:{gl:33339,rb:!0},rg32float:{gl:33328,rb:!0,r:Vh},rgba16uint:{gl:36214,rb:!0},rgba16sint:{gl:36232,rb:!0},rgba16float:{gl:34842,r:Bh},rgba16unorm:{gl:32859,rb:!0,r:Rh},rgba16snorm:{gl:36763,r:zh},"rgb32float-webgl":{gl:34837,x:Ih,r:Vh,dataFormat:6407,types:[5126]},rgba32uint:{gl:36208,rb:!0},rgba32sint:{gl:36226,rb:!0},rgba32float:{gl:34836,rb:!0,r:Vh},stencil8:{gl:36168,rb:!0},depth16unorm:{gl:33189,dataFormat:6402,types:[5123],rb:!0},depth24plus:{gl:33190,dataFormat:6402,types:[5125]},depth32float:{gl:36012,dataFormat:6402,types:[5126],rb:!0},"depth24plus-stencil8":{gl:35056,rb:!0,depthTexture:!0,dataFormat:34041,types:[34042]},"depth32float-stencil8":{gl:36013,dataFormat:34041,types:[36269],rb:!0},"bc1-rgb-unorm-webgl":{gl:33776,x:Th},"bc1-rgb-unorm-srgb-webgl":{gl:35916,x:Eh},"bc1-rgba-unorm":{gl:33777,x:Th},"bc1-rgba-unorm-srgb":{gl:35916,x:Eh},"bc2-rgba-unorm":{gl:33778,x:Th},"bc2-rgba-unorm-srgb":{gl:35918,x:Eh},"bc3-rgba-unorm":{gl:33779,x:Th},"bc3-rgba-unorm-srgb":{gl:35919,x:Eh},"bc4-r-unorm":{gl:36283,x:Dh},"bc4-r-snorm":{gl:36284,x:Dh},"bc5-rg-unorm":{gl:36285,x:Dh},"bc5-rg-snorm":{gl:36286,x:Dh},"bc6h-rgb-ufloat":{gl:36495,x:Oh},"bc6h-rgb-float":{gl:36494,x:Oh},"bc7-rgba-unorm":{gl:36492,x:Oh},"bc7-rgba-unorm-srgb":{gl:36493,x:Oh},"etc2-rgb8unorm":{gl:37492},"etc2-rgb8unorm-srgb":{gl:37494},"etc2-rgb8a1unorm":{gl:37496},"etc2-rgb8a1unorm-srgb":{gl:37497},"etc2-rgba8unorm":{gl:37493},"etc2-rgba8unorm-srgb":{gl:37495},"eac-r11unorm":{gl:37488},"eac-r11snorm":{gl:37489},"eac-rg11unorm":{gl:37490},"eac-rg11snorm":{gl:37491},"astc-4x4-unorm":{gl:37808},"astc-4x4-unorm-srgb":{gl:37840},"astc-5x4-unorm":{gl:37809},"astc-5x4-unorm-srgb":{gl:37841},"astc-5x5-unorm":{gl:37810},"astc-5x5-unorm-srgb":{gl:37842},"astc-6x5-unorm":{gl:37811},"astc-6x5-unorm-srgb":{gl:37843},"astc-6x6-unorm":{gl:37812},"astc-6x6-unorm-srgb":{gl:37844},"astc-8x5-unorm":{gl:37813},"astc-8x5-unorm-srgb":{gl:37845},"astc-8x6-unorm":{gl:37814},"astc-8x6-unorm-srgb":{gl:37846},"astc-8x8-unorm":{gl:37815},"astc-8x8-unorm-srgb":{gl:37847},"astc-10x5-unorm":{gl:37816},"astc-10x5-unorm-srgb":{gl:37848},"astc-10x6-unorm":{gl:37817},"astc-10x6-unorm-srgb":{gl:37849},"astc-10x8-unorm":{gl:37818},"astc-10x8-unorm-srgb":{gl:37850},"astc-10x10-unorm":{gl:37819},"astc-10x10-unorm-srgb":{gl:37851},"astc-12x10-unorm":{gl:37820},"astc-12x10-unorm-srgb":{gl:37852},"astc-12x12-unorm":{gl:37821},"astc-12x12-unorm-srgb":{gl:37853},"pvrtc-rgb4unorm-webgl":{gl:35840},"pvrtc-rgba4unorm-webgl":{gl:35842},"pvrtc-rgb2unorm-webgl":{gl:35841},"pvrtc-rgba2unorm-webgl":{gl:35843},"etc1-rbg-unorm-webgl":{gl:36196},"atc-rgb-unorm-webgl":{gl:35986},"atc-rgba-unorm-webgl":{gl:35986},"atc-rgbai-unorm-webgl":{gl:34798}};function Jh(e,t,n){let r=t.create,i=qh[t.format];i?.gl===void 0&&(r=!1),i?.x&&(r&&=!!vh(e,i.x,n)),t.format===`stencil8`&&(r=!1);let a=i?.r===!1?!1:i?.r===void 0||Gh(e,i.r,n),o=r&&t.render&&a&&Yh(e,t.format,n);return{format:t.format,create:r&&t.create,render:o,filter:r&&t.filter,blend:r&&t.blend,store:r&&t.store}}function Yh(e,t,n){let r=qh[t],i=r?.gl;if(i===void 0||r?.x&&!vh(e,r.x,n))return!1;let a=e.getParameter(32873),o=e.getParameter(36006),s=e.createTexture(),c=e.createFramebuffer();if(!s||!c)return!1;let l=Number(e.getError());for(;l!==0;)l=e.getError();let u=!1;try{if(e.bindTexture(3553,s),e.texStorage2D(3553,1,i,1,1),Number(e.getError())!==0)return!1;e.bindFramebuffer(36160,c),e.framebufferTexture2D(36160,36064,3553,s,0),u=Number(e.checkFramebufferStatus(36160))===36053&&Number(e.getError())===0}finally{e.bindFramebuffer(36160,o),e.deleteFramebuffer(c),e.bindTexture(3553,a),e.deleteTexture(s)}return u}function Xh(e){let t=qh[e],n=$h(e),r=se.getInfo(e);return r.compressed&&(t.dataFormat=n),{internalFormat:n,format:t?.dataFormat||Qh(r.channels,r.integer,r.normalized,n),type:r.dataType?wh(r.dataType):t?.types?.[0]||5121,compressed:r.compressed||!1}}function Zh(e){switch(se.getInfo(e).attachment){case`depth`:return 36096;case`stencil`:return 36128;case`depth-stencil`:return 33306;default:throw Error(`Not a depth stencil format: ${e}`)}}function Qh(e,t,n,r){if(r===6408||r===6407)return r;switch(e){case`r`:return t&&!n?36244:6403;case`rg`:return t&&!n?33320:33319;case`rgb`:return t&&!n?36248:6407;case`rgba`:return t&&!n?36249:6408;case`bgra`:throw Error(`bgra pixels not supported by WebGL`);default:return 6408}}function $h(e){let t=qh[e]?.gl;if(t===void 0)throw Error(`Unsupported texture format ${e}`);return t}var eg={"depth-clip-control":`EXT_depth_clamp`,"timestamp-query":`EXT_disjoint_timer_query_webgl2`,"compilation-status-async-webgl":`KHR_parallel_shader_compile`,"html-in-canvas":e=>Hi()&&typeof e.texElementImage2D==`function`,"polygon-mode-webgl":`WEBGL_polygon_mode`,"provoking-vertex-webgl":`WEBGL_provoking_vertex`,"shader-clip-cull-distance-webgl":`WEBGL_clip_cull_distance`,"shader-noperspective-interpolation-webgl":`NV_shader_noperspective_interpolation`,"shader-conservative-depth-webgl":`EXT_conservative_depth`},tg=class extends Vi{gl;extensions;testedFeatures=new Set;constructor(e,t,n){super([],n),this.gl=e,this.extensions=t,vh(e,`EXT_color_buffer_float`,t)}*[Symbol.iterator](){let e=this.getFeatures();for(let t of e)this.has(t)&&(yield t);return[]}has(e){return!this.disabledFeatures?.[e]&&(this.testedFeatures.has(e)||(this.testedFeatures.add(e),Wh(e)&&Gh(this.gl,e,this.extensions)&&this.features.add(e),this.getWebGLFeature(e)&&this.features.add(e)),this.features.has(e))}initializeFeatures(){let e=this.getFeatures().filter(e=>e!==`polygon-mode-webgl`);for(let t of e)this.has(t)}getFeatures(){return[...Object.keys(eg),...Object.keys(Uh)]}getWebGLFeature(e){let t=eg[e];return typeof t==`string`?!!vh(this.gl,t,this.extensions):typeof t==`function`?t(this.gl):!!t}},ng=class extends Fi{get maxTextureDimension1D(){return 0}get maxTextureDimension2D(){return this.getParameter(3379)}get maxTextureDimension3D(){return this.getParameter(32883)}get maxTextureArrayLayers(){return this.getParameter(35071)}get maxBindGroups(){return 0}get maxBindGroupsPlusVertexBuffers(){return 0}get maxBindingsPerBindGroup(){return 0}get maxDynamicUniformBuffersPerPipelineLayout(){return 0}get maxDynamicStorageBuffersPerPipelineLayout(){return 0}get maxSampledTexturesPerShaderStage(){return this.getParameter(35660)}get maxSamplersPerShaderStage(){return this.getParameter(35661)}get maxStorageBuffersPerShaderStage(){return 0}get maxStorageBuffersInVertexStage(){return 0}get maxStorageBuffersInFragmentStage(){return 0}get maxStorageTexturesPerShaderStage(){return 0}get maxStorageTexturesInVertexStage(){return 0}get maxStorageTexturesInFragmentStage(){return 0}get maxUniformBuffersPerShaderStage(){return this.getParameter(35375)}get maxUniformBufferBindingSize(){return this.getParameter(35376)}get maxStorageBufferBindingSize(){return 0}get maxBufferSize(){return 2**53-1}get minUniformBufferOffsetAlignment(){return this.getParameter(35380)}get minStorageBufferOffsetAlignment(){return 0}get maxVertexBuffers(){return 16}get maxVertexAttributes(){return this.getParameter(34921)}get maxVertexBufferArrayStride(){return 2048}get maxInterStageShaderVariables(){return this.getParameter(35659)}get maxColorAttachments(){return this.getParameter(36063)}get maxColorAttachmentBytesPerSample(){return 0}get maxComputeWorkgroupStorageSize(){return 0}get maxComputeInvocationsPerWorkgroup(){return 0}get maxComputeWorkgroupSizeX(){return 0}get maxComputeWorkgroupSizeY(){return 0}get maxComputeWorkgroupSizeZ(){return 0}get maxComputeWorkgroupsPerDimension(){return 0}gl;limits={};constructor(e){super(),this.gl=e}getParameter(e){return this.limits[e]===void 0&&(this.limits[e]=this.gl.getParameter(e)),this.limits[e]||0}},rg=class extends na{device;gl;handle;colorAttachments=[];depthStencilAttachment=null;constructor(e,t){super(e,t);let n=t.handle,r=n===null;this.device=e,this.gl=e.gl,this.handle=n||r?n:this.gl.createFramebuffer(),r||(e._setWebGLDebugMetadata(this.handle,this,{spector:this.props}),t.handle||(this.autoCreateAttachmentTextures(),this.updateAttachments()))}destroy(){super.destroy(),!this.destroyed&&this.handle!==null&&!this.props.handle&&this.gl.deleteFramebuffer(this.handle)}updateAttachments(){let e=this.gl.bindFramebuffer(36160,this.handle);for(let e=0;e<this.colorAttachments.length;++e){let t=this.colorAttachments[e];if(t){let n=36064+e;this._attachTextureView(n,t)}}if(this.depthStencilAttachment){let e=Zh(this.depthStencilAttachment.props.format);this._attachTextureView(e,this.depthStencilAttachment)}if(this.device.props.debug){let e=this.gl.checkFramebufferStatus(36160);if(e!==36053)throw Error(`Framebuffer ${ag(e)}`)}this.gl.bindFramebuffer(36160,e)}_attachTextureView(e,t){let{gl:n}=this.device,{texture:r}=t,i=t.props.baseMipLevel,a=t.props.baseArrayLayer;switch(n.bindTexture(r.glTarget,r.handle),r.glTarget){case 35866:case 32879:n.framebufferTextureLayer(36160,e,r.handle,i,a);break;case 34067:let t=ig(a);n.framebufferTexture2D(36160,e,t,r.handle,i);break;case 3553:n.framebufferTexture2D(36160,e,3553,r.handle,i);break;default:throw Error(`Illegal texture type`)}n.bindTexture(r.glTarget,null)}resizeAttachments(e,t){if(this.handle===null){this.width=e,this.height=t;return}super.resizeAttachments(e,t)}};function ig(e){return e<34069?e+34069:e}function ag(e){switch(e){case 36053:return`success`;case 36054:return`Mismatched attachments`;case 36055:return`No attachments`;case 36057:return`Height/width mismatch`;case 36061:return`Unsupported or split attachments`;case 36182:return`Samples mismatch`;default:return`${e}`}}var og=class extends $i{device;handle=null;_framebuffer=null;get[Symbol.toStringTag](){return`WebGLCanvasContext`}constructor(e,t){super(t),this.device=e,this._setAutoCreatedCanvasId(`${this.device.id}-canvas`),this._configureDevice()}_configureDevice(){(this.drawingBufferWidth!==this._framebuffer?.width||this.drawingBufferHeight!==this._framebuffer?.height)&&this._framebuffer?.resize([this.drawingBufferWidth,this.drawingBufferHeight])}_getCurrentFramebuffer(){return this._framebuffer||=new rg(this.device,{id:`canvas-context-framebuffer`,handle:null,width:this.drawingBufferWidth,height:this.drawingBufferHeight}),this._framebuffer}},sg=class extends ea{device;handle=null;context2d;get[Symbol.toStringTag](){return`WebGLPresentationContext`}constructor(e,t={}){super(t),this.device=e;let n=`${this[Symbol.toStringTag]}(${this.id})`;if(!this.device.getDefaultCanvasContext().offscreenCanvas)throw Error(`${n}: WebGL PresentationContext requires the default CanvasContext canvas to be an OffscreenCanvas`);let r=this.canvas.getContext(`2d`);if(!r)throw Error(`${n}: Failed to create 2d presentation context`);this.context2d=r,this._setAutoCreatedCanvasId(`${this.device.id}-presentation-canvas`),this._configureDevice(),this._startObservers()}present(){this._resizeDrawingBufferIfNeeded(),this.device.submit();let e=this.device.getDefaultCanvasContext(),[t,n]=e.getDrawingBufferSize();if(this.drawingBufferWidth!==0&&this.drawingBufferHeight!==0&&t!==0&&n!==0&&e.canvas.width!==0&&e.canvas.height!==0){if(t!==this.drawingBufferWidth||n!==this.drawingBufferHeight||e.canvas.width!==this.drawingBufferWidth||e.canvas.height!==this.drawingBufferHeight)throw Error(`${this[Symbol.toStringTag]}(${this.id}): Default canvas context size ${t}x${n} does not match presentation size ${this.drawingBufferWidth}x${this.drawingBufferHeight}`);this.context2d.clearRect(0,0,this.drawingBufferWidth,this.drawingBufferHeight),this.context2d.drawImage(e.canvas,0,0)}}_configureDevice(){}_getCurrentFramebuffer(e){let t=this.device.getDefaultCanvasContext();return t.setDrawingBufferSize(this.drawingBufferWidth,this.drawingBufferHeight),t.getCurrentFramebuffer(e)}},cg={};function lg(e=`id`){return cg[e]=cg[e]||1,`${e}-${cg[e]++}`}var ug=class extends n{device;gl;handle;glTarget;glUsage;glIndexType=5123;byteLength=0;bytesUsed=0;constructor(e,t={}){super(e,t),this.device=e,this.gl=this.device.gl;let n=typeof t==`object`?t.handle:void 0;this.handle=n||this.gl.createBuffer(),e._setWebGLDebugMetadata(this.handle,this,{spector:{...this.props,data:typeof this.props.data}}),this.glTarget=dg(this.props.usage),this.glUsage=fg(this.props.usage),this.glIndexType=this.props.indexType===`uint32`?5125:5123,t.data?this._initWithData(t.data,t.byteOffset,t.byteLength):this._initWithByteLength(t.byteLength||0)}destroy(){!this.destroyed&&this.handle&&(this.removeStats(),this.props.handle?this.trackDeallocatedReferencedMemory(`Buffer`):(this.trackDeallocatedMemory(),this.gl.deleteBuffer(this.handle)),this.destroyed=!0,this.handle=null)}_initWithData(e,t=0,n=e.byteLength+t){let r=this.glTarget;this.gl.bindBuffer(r,this.handle),this.gl.bufferData(r,n,this.glUsage),this.gl.bufferSubData(r,t,e),this.gl.bindBuffer(r,null),this.bytesUsed=n,this.byteLength=n,this._setDebugData(e,t,n),this.props.handle?this.trackReferencedMemory(n,`Buffer`):this.trackAllocatedMemory(n)}_initWithByteLength(e){let t=e;e===0&&(t=new Float32Array);let n=this.glTarget;return this.gl.bindBuffer(n,this.handle),this.gl.bufferData(n,t,this.glUsage),this.gl.bindBuffer(n,null),this.bytesUsed=e,this.byteLength=e,this._setDebugData(null,0,e),this.props.handle?this.trackReferencedMemory(e,`Buffer`):this.trackAllocatedMemory(e),this}write(e,t=0){let n=ArrayBuffer.isView(e)?e:new Uint8Array(e),r=36663;this.gl.bindBuffer(r,this.handle),this.gl.bufferSubData(r,t,n),this.gl.bindBuffer(r,null),this._setDebugData(e,t,e.byteLength)}async mapAndWriteAsync(e,t=0,n=this.byteLength-t){let r=new ArrayBuffer(n);await e(r,`copied`),this.write(r,t)}async readAsync(e=0,t){return this.readSyncWebGL(e,t)}async mapAndReadAsync(e,t=0,n){return await e((await this.readAsync(t,n)).buffer,`copied`)}readSyncWebGL(e=0,t){t??=this.byteLength-e;let n=new Uint8Array(t);return this.gl.bindBuffer(36662,this.handle),this.gl.getBufferSubData(36662,e,n,0,t),this.gl.bindBuffer(36662,null),this._setDebugData(n,e,t),n}};function dg(e){return e&n.INDEX?34963:e&n.VERTEX?34962:e&n.UNIFORM?35345:34962}function fg(e){return e&n.INDEX||e&n.VERTEX?35044:e&n.UNIFORM?35048:35044}function pg(e){let t=e.split(/\r?\n/),n=[];for(let e of t){if(e.length<=1)continue;let t=e.trim(),r=e.split(`:`),i=r[0]?.trim();if(r.length===2){let[e,a]=r;if(!e||!a){n.push({message:t,type:mg(i||`info`),lineNum:0,linePos:0});continue}n.push({message:a.trim(),type:mg(e),lineNum:0,linePos:0});continue}let[a,o,s,...c]=r;if(!a||!o||!s){n.push({message:r.slice(1).join(`:`).trim()||t,type:mg(i||`info`),lineNum:0,linePos:0});continue}let l=parseInt(s,10);Number.isNaN(l)&&(l=0);let u=parseInt(o,10);Number.isNaN(u)&&(u=0),n.push({message:c.join(`:`).trim(),type:mg(a),lineNum:l,linePos:u})}return n}function mg(e){let t=[`warning`,`error`,`info`],n=e.toLowerCase();return t.includes(n)?n:`info`}var hg=class extends l{device;handle;_compilationInfoLog=``;constructor(e,t){super(e,t),this.device=e;let n=this.props.handle;switch(this.props.stage){case`vertex`:this.handle=n||this.device.gl.createShader(35633);break;case`fragment`:this.handle=n||this.device.gl.createShader(35632);break;default:throw Error(this.props.stage)}e._setWebGLDebugMetadata(this.handle,this,{spector:this.props});let r=this._compile(this.source);r&&typeof r.catch==`function`&&r.catch(()=>{this.compilationStatus=`error`})}destroy(){this.handle&&(this.removeStats(),this.device.gl.deleteShader(this.handle),this.destroyed=!0,this.handle.destroyed=!0)}get asyncCompilationStatus(){return this._waitForCompilationComplete().then(()=>(this._getCompilationStatus(),this.compilationStatus))}async getCompilationInfo(){return await this._waitForCompilationComplete(),this.getCompilationInfoSync()}getCompilationInfoSync(){let e=this._getCompilationInfoLog();return e?pg(e):[]}getTranslatedSource(){return this.device.getExtension(`WEBGL_debug_shaders`).WEBGL_debug_shaders?.getTranslatedShaderSource(this.handle)||null}_compile(e){e=e.startsWith(`#version `)?e:`#version 300 es\n${e}`;let{gl:t}=this.device;if(t.shaderSource(this.handle,e),t.compileShader(this.handle),!this.device.props.debug){this.compilationStatus=`pending`;return}if(!this.device.features.has(`compilation-status-async-webgl`)){if(this._getCompilationStatus(),this.debugShader(),this.compilationStatus===`error`)throw Error(this._getCompilationErrorMessage(e));return}return i.once(1,`Shader compilation is asynchronous`)(),this._waitForCompilationComplete().then(()=>{i.info(2,`Shader ${this.id} - async compilation complete: ${this.compilationStatus}`)(),this._getCompilationStatus(),this.debugShader()})}async _waitForCompilationComplete(){let e=async e=>await new Promise(t=>setTimeout(t,e));if(!this.device.features.has(`compilation-status-async-webgl`)){await e(10);return}let{gl:t}=this.device;for(;;){if(t.getShaderParameter(this.handle,37297))return;await e(10)}}_getCompilationStatus(){this.compilationStatus=this.device.gl.getShaderParameter(this.handle,35713)?`success`:`error`,this.compilationStatus===`error`&&this._getCompilationInfoLog()}_getCompilationErrorMessage(e){let t=`${this.props.stage} shader ${this.props.id}`,n=gg(this._getCompilationInfoLog()),r=this.getCompilationInfoSync(),i=r.find(e=>e.type===`error`&&e.message.trim())||r.find(e=>e.message.trim())||r.find(e=>e.type===`error`)||r[0];if(!i)return n?`GLSL compilation errors in ${t}: ${n}`:`GLSL compilation errors in ${t}: WebGL did not provide a shader compiler log`;let a=i.lineNum?e.split(/\r?\n/)[i.lineNum-1]?.trim():void 0,o=i.lineNum?` line ${i.lineNum}`:``,s=a?`\nSource: ${a}`:``;return`GLSL compilation errors in ${t}:${o}: ${i.message.trim()||n||`WebGL did not provide a shader compiler log`}${s}`}_getCompilationInfoLog(){let e=this.device.gl.getShaderInfoLog(this.handle)?.trim();return e&&(this._compilationInfoLog=e),this._compilationInfoLog}};function gg(e){return e.split(/\r?\n/).find(e=>e.trim())?.trim()}function _g(e,t,n,r){if(Eg(t))return r(e);let i=e;i.pushState();try{return vg(e,t),oh(i.gl,n),r(e)}finally{i.popState()}}function vg(e,t){let n=e,{gl:r}=n;if(t.cullMode)switch(t.cullMode){case`none`:r.disable(2884);break;case`front`:r.enable(2884),r.cullFace(1028);break;case`back`:r.enable(2884),r.cullFace(1029)}if(t.frontFace&&r.frontFace(wg(`frontFace`,t.frontFace,{ccw:2305,cw:2304})),t.unclippedDepth&&e.features.has(`depth-clip-control`)&&r.enable(34383),t.depthBias!==void 0&&(r.enable(32823),r.polygonOffset(t.depthBias,t.depthBiasSlopeScale||0)),t.provokingVertex&&e.features.has(`provoking-vertex-webgl`)){let e=n.getExtension(`WEBGL_provoking_vertex`).WEBGL_provoking_vertex,r=wg(`provokingVertex`,t.provokingVertex,{first:36429,last:36430});e?.provokingVertexWEBGL(r)}if((t.polygonMode||t.polygonOffsetLine)&&e.features.has(`polygon-mode-webgl`)){if(t.polygonMode){let e=n.getExtension(`WEBGL_polygon_mode`).WEBGL_polygon_mode,r=wg(`polygonMode`,t.polygonMode,{fill:6914,line:6913});e?.polygonModeWEBGL(1028,r),e?.polygonModeWEBGL(1029,r)}t.polygonOffsetLine&&r.enable(10754)}if(e.features.has(`shader-clip-cull-distance-webgl`)&&(t.clipDistance0&&r.enable(12288),t.clipDistance1&&r.enable(12289),t.clipDistance2&&r.enable(12290),t.clipDistance3&&r.enable(12291),t.clipDistance4&&r.enable(12292),t.clipDistance5&&r.enable(12293),t.clipDistance6&&r.enable(12294),t.clipDistance7&&r.enable(12295)),t.depthWriteEnabled!==void 0&&r.depthMask(Tg(`depthWriteEnabled`,t.depthWriteEnabled)),t.depthCompare&&(t.depthCompare===`always`?r.disable(2929):r.enable(2929),r.depthFunc(yg(`depthCompare`,t.depthCompare))),t.clearDepth!==void 0&&r.clearDepth(t.clearDepth),t.stencilWriteMask){let e=t.stencilWriteMask;r.stencilMaskSeparate(1028,e),r.stencilMaskSeparate(1029,e)}if(t.stencilReadMask&&i.warn(`stencilReadMask not supported under WebGL`),t.stencilCompare){let e=t.stencilReadMask||4294967295,n=yg(`depthCompare`,t.stencilCompare);t.stencilCompare===`always`?r.disable(2960):r.enable(2960),r.stencilFuncSeparate(1028,n,0,e),r.stencilFuncSeparate(1029,n,0,e)}if(t.stencilPassOperation&&t.stencilFailOperation&&t.stencilDepthFailOperation){let e=bg(`stencilPassOperation`,t.stencilPassOperation),n=bg(`stencilFailOperation`,t.stencilFailOperation),i=bg(`stencilDepthFailOperation`,t.stencilDepthFailOperation);r.stencilOpSeparate(1028,n,i,e),r.stencilOpSeparate(1029,n,i,e)}switch(t.blend){case!0:r.enable(3042);break;case!1:r.disable(3042)}if(t.blendColorOperation||t.blendAlphaOperation){let e=xg(`blendColorOperation`,t.blendColorOperation||`add`),n=xg(`blendAlphaOperation`,t.blendAlphaOperation||`add`);r.blendEquationSeparate(e,n);let i=Sg(`blendColorSrcFactor`,t.blendColorSrcFactor||`one`),a=Sg(`blendColorDstFactor`,t.blendColorDstFactor||`zero`),o=Sg(`blendAlphaSrcFactor`,t.blendAlphaSrcFactor||`one`),s=Sg(`blendAlphaDstFactor`,t.blendAlphaDstFactor||`zero`);r.blendFuncSeparate(i,a,o,s)}}function yg(e,t){return wg(e,t,{never:512,less:513,equal:514,"less-equal":515,greater:516,"not-equal":517,"greater-equal":518,always:519})}function bg(e,t){return wg(e,t,{keep:7680,zero:0,replace:7681,invert:5386,"increment-clamp":7682,"decrement-clamp":7683,"increment-wrap":34055,"decrement-wrap":34056})}function xg(e,t){return wg(e,t,{add:32774,subtract:32778,"reverse-subtract":32779,min:32775,max:32776})}function Sg(e,t,n=`color`){return wg(e,t,{one:1,zero:0,src:768,"one-minus-src":769,dst:774,"one-minus-dst":775,"src-alpha":770,"one-minus-src-alpha":771,"dst-alpha":772,"one-minus-dst-alpha":773,"src-alpha-saturated":776,constant:n===`color`?32769:32771,"one-minus-constant":n===`color`?32770:32772,src1:768,"one-minus-src1":769,"src1-alpha":770,"one-minus-src1-alpha":771})}function Cg(e,t){return`Illegal parameter ${t} for ${e}`}function wg(e,t,n){if(!(t in n))throw Error(Cg(e,t));return n[t]}function Tg(e,t){return t}function Eg(e){let t=!0;for(let n in e){t=!1;break}return t}function Dg(e){let t={};return e.addressModeU&&(t[10242]=Og(e.addressModeU)),e.addressModeV&&(t[10243]=Og(e.addressModeV)),e.addressModeW&&(t[32882]=Og(e.addressModeW)),e.magFilter&&(t[10240]=kg(e.magFilter)),(e.minFilter||e.mipmapFilter)&&(t[10241]=Ag(e.minFilter||`linear`,e.mipmapFilter)),e.lodMinClamp!==void 0&&(t[33082]=e.lodMinClamp),e.lodMaxClamp!==void 0&&(t[33083]=e.lodMaxClamp),e.type===`comparison-sampler`&&(t[34892]=34894),e.compare&&(t[34893]=yg(`compare`,e.compare)),e.maxAnisotropy&&(t[34046]=e.maxAnisotropy),t}function Og(e){switch(e){case`clamp-to-edge`:return 33071;case`repeat`:return 10497;case`mirror-repeat`:return 33648}}function kg(e){switch(e){case`nearest`:return 9728;case`linear`:return 9729}}function Ag(e,t=`none`){if(!t)return kg(e);switch(t){case`none`:return kg(e);case`nearest`:switch(e){case`nearest`:return 9984;case`linear`:return 9985}break;case`linear`:switch(e){case`nearest`:return 9986;case`linear`:return 9987}}}var jg=class extends he{device;handle;parameters;constructor(e,t){super(e,t),this.device=e,this.parameters=Dg(t),this.handle=t.handle||this.device.gl.createSampler(),this._setSamplerParameters(this.parameters)}destroy(){this.handle&&=(this.device.gl.deleteSampler(this.handle),void 0)}toString(){return`Sampler(${this.id},${JSON.stringify(this.props)})`}_setSamplerParameters(e){for(let[t,n]of Object.entries(e)){let e=Number(t);switch(e){case 33082:case 33083:this.device.gl.samplerParameterf(this.handle,e,n);break;default:this.device.gl.samplerParameteri(this.handle,e,n)}}}};function Mg(e,t,n){if(Ng(t))return n(e);let{nocatch:r=!0}=t,i=fh.get(e);i.push(),oh(e,t);let a;if(r)a=n(e),i.pop();else try{a=n(e)}finally{i.pop()}return a}function Ng(e){for(let t in e)return!1;return!0}var Pg=class extends oe{device;gl;handle;texture;constructor(e,t){super(e,{...z.defaultProps,...t}),this.device=e,this.gl=this.device.gl,this.handle=null,this.texture=t.texture}};function Fg(e){return Ig[e]}var Ig={5124:`sint32`,5125:`uint32`,5122:`sint16`,5123:`uint16`,5120:`sint8`,5121:`uint8`,5126:`float32`,5131:`float16`,33635:`uint16`,32819:`uint16`,32820:`uint16`,33640:`uint32`,35899:`uint32`,35902:`uint32`,34042:`uint32`,36269:`uint32`},Lg=class extends z{device;gl;handle;sampler=void 0;view;glTarget;glFormat;glType;glInternalFormat;compressed;_textureUnit=0;_framebuffer=null;_framebufferAttachmentKey=null;constructor(e,t){super(e,t,{byteAlignment:1}),this.device=e,this.gl=this.device.gl;let n=Xh(this.props.format);if(this.glTarget=Bg(this.props.dimension),this.glInternalFormat=n.internalFormat,this.glFormat=n.format,this.glType=n.type,this.compressed=n.compressed,this.isHandleBorrowed&&this.props.handle===void 0)throw Error(`Borrowed WebGL textures require a texture handle`);if(this.handle=this.props.handle||this.gl.createTexture(),this.device._setWebGLDebugMetadata(this.handle,this,{spector:this.props}),!this.isHandleBorrowed){this.gl.bindTexture(this.glTarget,this.handle);let{dimension:e,width:n,height:r,depth:i,mipLevels:a,glTarget:o,glInternalFormat:s}=this;if(!this.compressed)switch(e){case`2d`:case`cube`:this.gl.texStorage2D(o,a,s,n,r);break;case`2d-array`:case`3d`:this.gl.texStorage3D(o,a,s,n,r,i);break;default:throw Error(e)}this.gl.bindTexture(this.glTarget,null),this._initializeData(t.data)}this.ownsHandle?this.trackAllocatedMemory(this.getAllocatedByteLength(),`Texture`):this.trackReferencedMemory(this.getAllocatedByteLength(),`Texture`),this.isHandleBorrowed||this.setSampler(this.props.sampler),this.view=new Pg(this.device,{...this.props,texture:this}),Object.seal(this)}destroy(){this.handle&&(this._framebuffer?.destroy(),this._framebuffer=null,this._framebufferAttachmentKey=null,this.removeStats(),this.ownsHandle?(this.gl.deleteTexture(this.handle),this.trackDeallocatedMemory(`Texture`)):this.trackDeallocatedReferencedMemory(`Texture`),this.destroyed=!0)}createView(e){return new Pg(this.device,{...e,texture:this})}clone(e){if(this.isHandleBorrowed&&e&&(e.width!==this.width||e.height!==this.height))throw Error(`Cannot resize borrowed read-only ${this}`);return super.clone(e)}setSampler(e={}){this._assertWritable(`set sampler parameters on`),super.setSampler(e);let t=Dg(this.sampler.props);this._setSamplerParameters(t)}copyExternalImage(e){this._assertWritable(`copy external image data into`);let t=this._normalizeCopyExternalImageOptions(e);if(t.sourceX||t.sourceY)throw Error(`WebGL does not support sourceX/sourceY)`);let{glFormat:n,glType:r}=this,{image:i,depth:a,mipLevel:o,x:s,y:c,z:l,width:u,height:d}=t,f=Vg(this.glTarget,this.dimension,l),p=t.flipY?{37440:!0}:{};return this.gl.bindTexture(this.glTarget,this.handle),Mg(this.gl,p,()=>{switch(this.dimension){case`2d`:case`cube`:this.gl.texSubImage2D(f,o,s,c,u,d,n,r,i);break;case`2d-array`:case`3d`:this.gl.texSubImage3D(f,o,s,c,l,u,d,a,n,r,i)}}),this.gl.bindTexture(this.glTarget,null),{width:t.width,height:t.height}}copyElementImage(e){this._assertWritable(`copy element image data into`);let t=this._normalizeCopyElementImageOptions(e),{glFormat:n}=this,{element:r,depth:i,mipLevel:a,sourceX:o,sourceY:s,sourceWidth:c,sourceHeight:l,x:u,y:d,z:f,width:p,height:m}=t,h=Vg(this.glTarget,this.dimension,f),g=t.flipY?{37440:!0}:{},_=this.gl;if(i!==1||this.dimension!==`2d`&&this.dimension!==`cube`)throw Error(`${this} copyElementImage only supports 2d and cube textures on WebGL`);if(a!==0||u!==0||d!==0)throw Error(`${this} copyElementImage only supports full base-level uploads on WebGL`);if(typeof _.texElementImage2D!=`function`)throw Error(`${this} copyElementImage is not supported by this WebGL implementation`);return this.gl.bindTexture(this.glTarget,this.handle),Mg(this.gl,g,()=>{_.texElementImage2D?.(h,n,r,{sx:o,sy:s,swidth:c??p,sheight:l??m,width:p,height:m})}),this.gl.bindTexture(this.glTarget,null),{width:t.width,height:t.height}}copyImageData(e){super.copyImageData(e)}readBuffer(e={},t){if(!t)throw Error(`${this} readBuffer requires a destination buffer`);let n=this._getSupportedColorReadOptions(e),r=e.byteOffset??0,i=this.computeMemoryLayout(n);if(t.byteLength<r+i.byteLength)throw Error(`${this} readBuffer target is too small (${t.byteLength} < ${r+i.byteLength})`);let a=t;this.gl.bindBuffer(35051,a.handle);try{this._readColorTextureLayers(n,i,e=>{this.gl.readPixels(n.x,n.y,n.width,n.height,this.glFormat,this.glType,r+e)})}finally{this.gl.bindBuffer(35051,null)}return t}async readDataAsync(e={}){throw Error(`${this} readDataAsync is deprecated; use readBuffer() with an explicit destination buffer or DynamicTexture.readAsync()`)}writeBuffer(e,t={}){this._assertWritable(`write buffer data into`);let n=this._normalizeTextureWriteOptions(t),{width:r,height:i,depthOrArrayLayers:a,mipLevel:o,byteOffset:s,x:c,y:l,z:u}=n,{glFormat:d,glType:f,compressed:p}=this,m=Vg(this.glTarget,this.dimension,u);if(p)throw Error(`writeBuffer for compressed textures is not implemented in WebGL`);let{bytesPerPixel:h}=this.device.getTextureFormatInfo(this.format),g=h?n.bytesPerRow/h:void 0,_={3317:this.byteAlignment,...g===void 0?{}:{3314:g},32878:n.rowsPerImage};this.gl.bindTexture(this.glTarget,this.handle),this.gl.bindBuffer(35052,e.handle),Mg(this.gl,_,()=>{switch(this.dimension){case`2d`:case`cube`:this.gl.texSubImage2D(m,o,c,l,r,i,d,f,s);break;case`2d-array`:case`3d`:this.gl.texSubImage3D(m,o,c,l,u,r,i,a,d,f,s)}}),this.gl.bindBuffer(35052,null),this.gl.bindTexture(this.glTarget,null)}writeData(e,t={}){this._assertWritable(`write data into`);let n=this._normalizeTextureWriteOptions(t),r=ArrayBuffer.isView(e)?e:new Uint8Array(e),{width:i,height:a,depthOrArrayLayers:o,mipLevel:s,x:c,y:l,z:u,byteOffset:d}=n,{glFormat:f,glType:p,compressed:m}=this,h=Vg(this.glTarget,this.dimension,u),g;if(!m){let{bytesPerPixel:e}=this.device.getTextureFormatInfo(this.format);e&&(g=n.bytesPerRow/e)}let _=this.compressed?{}:{3317:this.byteAlignment,...g===void 0?{}:{3314:g},32878:n.rowsPerImage},v=zg(r,d),y=m?Rg(r,d):r,b=this._getMipLevelSize(s),x=c===0&&l===0&&u===0&&i===b.width&&a===b.height&&o===b.depthOrArrayLayers;this.gl.bindTexture(this.glTarget,this.handle),this.gl.bindBuffer(35052,null),Mg(this.gl,_,()=>{switch(this.dimension){case`2d`:case`cube`:m?x?this.gl.compressedTexImage2D(h,s,f,i,a,0,y):this.gl.compressedTexSubImage2D(h,s,c,l,i,a,f,y):this.gl.texSubImage2D(h,s,c,l,i,a,f,p,r,v);break;case`2d-array`:case`3d`:m?x?this.gl.compressedTexImage3D(h,s,f,i,a,o,0,y):this.gl.compressedTexSubImage3D(h,s,c,l,u,i,a,o,f,y):this.gl.texSubImage3D(h,s,c,l,u,i,a,o,f,p,r,v)}}),this.gl.bindTexture(this.glTarget,null)}_getRowByteAlignment(e,t){return 1}_getFramebuffer(){return this._framebuffer||=this.device.createFramebuffer({id:`framebuffer-for-${this.id}`,width:this.width,height:this.height,colorAttachments:[this]}),this._framebuffer}readDataSyncWebGL(e={}){let t=this._getSupportedColorReadOptions(e),n=this.computeMemoryLayout(t),r=Fg(this.glType),i=c(r),a=new i(n.byteLength/i.BYTES_PER_ELEMENT);return this._readColorTextureLayers(t,n,e=>{let r=new i(a.buffer,a.byteOffset+e,n.bytesPerImage/i.BYTES_PER_ELEMENT);this.gl.readPixels(t.x,t.y,t.width,t.height,this.glFormat,this.glType,r)}),a.buffer}_readColorTextureLayers(e,t,n){let r=this._getFramebuffer(),i=t.bytesPerRow/t.bytesPerPixel,a={3333:this.byteAlignment,...i===e.width?{}:{3330:i}},o=this.gl.getParameter(3074),s=this.gl.bindFramebuffer(36160,r.handle);try{this.gl.readBuffer(36064),Mg(this.gl,a,()=>{for(let i=0;i<e.depthOrArrayLayers;i++)this._attachReadSubresource(r,e.mipLevel,e.z+i),n(i*t.bytesPerImage)})}finally{this.gl.bindFramebuffer(36160,s||null),this.gl.readBuffer(o)}}_attachReadSubresource(e,t,n){let r=`${t}:${n}`;if(this._framebufferAttachmentKey!==r){switch(this.dimension){case`2d`:this.gl.framebufferTexture2D(36160,36064,3553,this.handle,t);break;case`cube`:this.gl.framebufferTexture2D(36160,36064,Vg(this.glTarget,this.dimension,n),this.handle,t);break;case`2d-array`:case`3d`:this.gl.framebufferTextureLayer(36160,36064,this.handle,t,n);break;default:throw Error(`${this} color readback does not support ${this.dimension} textures`)}if(this.device.props.debug){let t=Number(this.gl.checkFramebufferStatus(36160));if(t!==36053)throw Error(`${e} incomplete for ${this} readback (${t})`)}this._framebufferAttachmentKey=r}}generateMipmapsWebGL(e){if(this._assertWritable(`generate mipmaps for`),!(!(this.device.isTextureFormatRenderable(this.props.format)&&this.device.isTextureFormatFilterable(this.props.format))&&(i.warn(`${this} is not renderable or filterable, may not be able to generate mipmaps`)(),!e?.force)))try{this.gl.bindTexture(this.glTarget,this.handle),this.gl.generateMipmap(this.glTarget)}catch(e){i.warn(`Error generating mipmap for ${this}: ${e.message}`)()}finally{this.gl.bindTexture(this.glTarget,null)}}_setSamplerParameters(e){i.level>=2&&i.log(2,`${this.id} sampler parameters`,this.device.getGLKeys(e))(),this.gl.bindTexture(this.glTarget,this.handle);for(let[t,n]of Object.entries(e)){let e=Number(t),r=n;switch(e){case 33082:case 33083:this.gl.texParameterf(this.glTarget,e,r);break;case 10240:case 10241:this.gl.texParameteri(this.glTarget,e,r);break;case 10242:case 10243:case 32882:this.gl.texParameteri(this.glTarget,e,r);break;case 34046:this.device.features.has(`texture-filterable-anisotropic-webgl`)&&this.gl.texParameteri(this.glTarget,e,r);break;case 34892:case 34893:this.gl.texParameteri(this.glTarget,e,r)}}this.gl.bindTexture(this.glTarget,null)}_getActiveUnit(){return this.gl.getParameter(34016)-33984}_bind(e){let{gl:t}=this;return e!==void 0&&(this._textureUnit=e,t.activeTexture(33984+e)),t.bindTexture(this.glTarget,this.handle),e}_unbind(e){let{gl:t}=this;return e!==void 0&&(this._textureUnit=e,t.activeTexture(33984+e)),t.bindTexture(this.glTarget,null),e}_assertWritable(e){if(this.isHandleBorrowed)throw Error(`Cannot ${e} borrowed read-only ${this}`)}};function Rg(e,t=0){return t?new e.constructor(e.buffer,e.byteOffset+t,(e.byteLength-t)/e.BYTES_PER_ELEMENT):e}function zg(e,t){if(t%e.BYTES_PER_ELEMENT!==0)throw Error(`Texture byteOffset ${t} must align to typed array element size ${e.BYTES_PER_ELEMENT}`);return t/e.BYTES_PER_ELEMENT}function Bg(e){switch(e){case`1d`:break;case`2d`:return 3553;case`3d`:return 32879;case`cube`:return 34067;case`2d-array`:return 35866}throw Error(e)}function Vg(e,t,n){return t===`cube`?34069+n:e}function Hg(e,t,n,r){let i=e,a=r;a===!0&&(a=1),a===!1&&(a=0);let o=typeof a==`number`?[a]:a;switch(n){case 35678:case 35680:case 35679:case 35682:case 36289:case 36292:case 36293:case 36298:case 36299:case 36300:case 36303:case 36306:case 36307:case 36308:case 36311:if(typeof r!=`number`)throw Error(`samplers must be set to integers`);return e.uniform1i(t,r);case 5126:return e.uniform1fv(t,o);case 35664:return e.uniform2fv(t,o);case 35665:return e.uniform3fv(t,o);case 35666:return e.uniform4fv(t,o);case 5124:return e.uniform1iv(t,o);case 35667:return e.uniform2iv(t,o);case 35668:return e.uniform3iv(t,o);case 35669:return e.uniform4iv(t,o);case 35670:return e.uniform1iv(t,o);case 35671:return e.uniform2iv(t,o);case 35672:return e.uniform3iv(t,o);case 35673:return e.uniform4iv(t,o);case 5125:return i.uniform1uiv(t,o,1);case 36294:return i.uniform2uiv(t,o,2);case 36295:return i.uniform3uiv(t,o,3);case 36296:return i.uniform4uiv(t,o,4);case 35674:return e.uniformMatrix2fv(t,!1,o);case 35675:return e.uniformMatrix3fv(t,!1,o);case 35676:return e.uniformMatrix4fv(t,!1,o);case 35685:return i.uniformMatrix2x3fv(t,!1,o);case 35686:return i.uniformMatrix2x4fv(t,!1,o);case 35687:return i.uniformMatrix3x2fv(t,!1,o);case 35688:return i.uniformMatrix3x4fv(t,!1,o);case 35689:return i.uniformMatrix4x2fv(t,!1,o);case 35690:return i.uniformMatrix4x3fv(t,!1,o)}throw Error(`Illegal uniform`)}function Ug(e){return Yg[e]}function Wg(e){return qg[e]}function Gg(e){return!!Jg[e]}function Kg(e){return Jg[e]}var qg={5126:`f32`,35664:`vec2<f32>`,35665:`vec3<f32>`,35666:`vec4<f32>`,5124:`i32`,35667:`vec2<i32>`,35668:`vec3<i32>`,35669:`vec4<i32>`,5125:`u32`,36294:`vec2<u32>`,36295:`vec3<u32>`,36296:`vec4<u32>`,35670:`f32`,35671:`vec2<f32>`,35672:`vec3<f32>`,35673:`vec4<f32>`,35674:`mat2x2<f32>`,35685:`mat2x3<f32>`,35686:`mat2x4<f32>`,35687:`mat3x2<f32>`,35675:`mat3x3<f32>`,35688:`mat3x4<f32>`,35689:`mat4x2<f32>`,35690:`mat4x3<f32>`,35676:`mat4x4<f32>`},Jg={35678:{viewDimension:`2d`,sampleType:`float`},35680:{viewDimension:`cube`,sampleType:`float`},35679:{viewDimension:`3d`,sampleType:`float`},35682:{viewDimension:`3d`,sampleType:`depth`},36289:{viewDimension:`2d-array`,sampleType:`float`},36292:{viewDimension:`2d-array`,sampleType:`depth`},36293:{viewDimension:`cube`,sampleType:`float`},36298:{viewDimension:`2d`,sampleType:`sint`},36299:{viewDimension:`3d`,sampleType:`sint`},36300:{viewDimension:`cube`,sampleType:`sint`},36303:{viewDimension:`2d-array`,sampleType:`uint`},36306:{viewDimension:`2d`,sampleType:`uint`},36307:{viewDimension:`3d`,sampleType:`uint`},36308:{viewDimension:`cube`,sampleType:`uint`},36311:{viewDimension:`2d-array`,sampleType:`uint`}},Yg={uint8:5121,sint8:5120,unorm8:5121,snorm8:5120,uint16:5123,sint16:5122,unorm16:5123,snorm16:5122,uint32:5125,sint32:5124,float16:5131,float32:5126};function Xg(e,t,n={}){let r={attributes:[],bindings:[]};r.attributes=Zg(e,t);let i=e_(e,t,n);for(let e of i){let t=e.uniforms.map(e=>({name:e.name,format:e.format,byteOffset:e.byteOffset,byteStride:e.byteStride,arrayLength:e.arrayLength}));r.bindings.push({type:`uniform`,name:e.name,group:0,location:e.location,visibility:+!!e.vertex|(e.fragment?2:0),minBindingSize:e.byteLength,uniforms:t})}let a=$g(e,t),o=0;for(let e of a)if(Gg(e.type)){let{viewDimension:t,sampleType:n}=Kg(e.type);r.bindings.push({type:`texture`,name:e.name,group:0,location:o,viewDimension:t,sampleType:n}),e.textureUnit=o,o+=1}a.length&&(r.uniforms=a);let s=Qg(e,t);return s?.length&&(r.varyings=s),r}function Zg(e,t){let n=[],r=e.getProgramParameter(t,35721);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i);if(!r)throw Error(`activeInfo`);let{name:a,type:o}=r,s=e.getAttribLocation(t,a);if(s>=0){let e=Wg(o),t=/instance/i.test(a)?`instance`:`vertex`;n.push({name:a,location:s,stepMode:t,type:e})}}return n.sort((e,t)=>e.location-t.location),n}function Qg(e,t){let n=[],r=e.getProgramParameter(t,35971);for(let i=0;i<r;i++){let r=e.getTransformFeedbackVarying(t,i);if(!r)throw Error(`activeInfo`);let{name:a,type:o,size:s}=r,c=Wg(o),{type:l,components:d}=u(c);n.push({location:i,name:a,type:l,size:s*d})}return n.sort((e,t)=>e.location-t.location),n}function $g(e,t){let n=[],r=e.getProgramParameter(t,35718);for(let i=0;i<r;i++){let r=e.getActiveUniform(t,i);if(!r)throw Error(`activeInfo`);let{name:a,size:o,type:s}=r,{name:c,isArray:l}=d_(a),u=e.getUniformLocation(t,c),d={location:u,name:c,size:o,type:s,isArray:l};if(n.push(d),d.size>1)for(let r=0;r<d.size;r++){let i=`${c}[${r}]`;u=e.getUniformLocation(t,i);let a={...d,name:i,location:u};n.push(a)}}return n}function e_(e,t,n){let r=[],a=n_(e,t,n);for(let[n,o]of a){r.push(o);try{t_(i_(e,t,n,o.name),o)}catch(e){let t=e instanceof Error?e.message:String(e);i.once(0,`WebGL uniform block reflection failed for "${o.name}"; using supplied std140 metadata. ${t}`)()}}let o=e.getProgramParameter(t,35382);if(!Number.isInteger(o)||o<0)throw Error(`Failed to reflect WebGL uniform blocks: ACTIVE_UNIFORM_BLOCKS returned ${String(o)}`);for(let n=0;n<o;n++)a.has(n)||r.push(i_(e,t,n));return r.sort((e,t)=>e.location-t.location),r}function t_(e,t){for(let n of e.uniforms){let e=t.uniforms.find(e=>n.name===e.name||n.name.endsWith(`.${e.name}`));if(!e)throw Error(`Failed to validate WebGL uniform block "${t.name}": reflected unexpected member "${n.name}"`);if(n.format!==e.format||n.arrayLength!==e.arrayLength||n.byteOffset!==e.byteOffset||n.byteStride!==e.byteStride)throw Error(`Failed to validate WebGL uniform block "${t.name}": reflected layout for "${n.name}" does not match supplied std140 metadata`)}}function n_(e,t,n){let r=new Map;for(let e of n.uniformBlockLayouts||[])r.set(e.name,c_(e));for(let e of n.shaderLayout?.bindings||[])u_(e)&&r.set(e.name,e);let i=new Map;for(let n of r.values()){let r=r_(e,t,n.name);if(!r)continue;let{blockIndex:a,blockName:o}=r;if(i.has(a))throw Error(`Multiple supplied uniform block layouts resolve to active WebGL block "${o}"`);i.set(a,{name:o,location:a,byteLength:n.minBindingSize,vertex:!!(n.visibility&&n.visibility&1),fragment:!!(n.visibility&&n.visibility&2),uniformCount:n.uniforms.length,uniforms:n.uniforms.map(e=>({...e}))})}return i}function r_(e,t,n){let r=n.endsWith(`Uniforms`)?[n,n.slice(0,-8)]:[n,`${n}Uniforms`];for(let n of r){let r=e.getUniformBlockIndex(t,n);if(r!==4294967295){if(!Number.isInteger(r)||r<0)throw Error(`Failed to resolve WebGL uniform block "${n}": getUniformBlockIndex returned ${String(r)}`);return{blockIndex:r,blockName:n}}}return null}function i_(e,t,n,r){let a=r||e.getActiveUniformBlockName(t,n);if(!a)throw Error(`Failed to reflect WebGL uniform block at index ${n}: missing block name`);let o=(r,i)=>{let o=e.getActiveUniformBlockParameter(t,n,r);if(o==null)throw Error(`Failed to reflect WebGL uniform block "${a}": ${i} returned null`);return o},s=s_(o(35391,`UNIFORM_BLOCK_BINDING`),a,`UNIFORM_BLOCK_BINDING`,0),c=s_(o(35392,`UNIFORM_BLOCK_DATA_SIZE`),a,`UNIFORM_BLOCK_DATA_SIZE`,0),l=s_(o(35394,`UNIFORM_BLOCK_ACTIVE_UNIFORMS`),a,`UNIFORM_BLOCK_ACTIVE_UNIFORMS`,0),u=o_(o(35395,`UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES`),a,`UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES`,l),d=a_(e,t,u,35383,`UNIFORM_TYPE`,a,l),f=a_(e,t,u,35384,`UNIFORM_SIZE`,a,l),p=a_(e,t,u,35386,`UNIFORM_BLOCK_INDEX`,a,l),m=a_(e,t,u,35387,`UNIFORM_OFFSET`,a,l),h=a_(e,t,u,35388,`UNIFORM_ARRAY_STRIDE`,a,l),g=[];for(let r=0;r<l;r++){if(p[r]!==n)throw Error(`Failed to reflect WebGL uniform block "${a}": active uniform index ${u[r]} belongs to block ${p[r]}, expected ${n}`);let i=u[r],o=e.getActiveUniform(t,i);if(!o)throw Error(`Failed to reflect WebGL uniform block "${a}": getActiveUniform(${i}) returned null`);let s=s_(d[r],a,`UNIFORM_TYPE[${r}]`,1),c=s_(f[r],a,`UNIFORM_SIZE[${r}]`,1),l=s_(m[r],a,`UNIFORM_OFFSET[${r}]`,0),_=s_(h[r],a,`UNIFORM_ARRAY_STRIDE[${r}]`,0);if(o.type!==s||o.size!==c)throw Error(`Failed to reflect WebGL uniform block "${a}": getActiveUniform(${i}) disagrees with getActiveUniforms`);g.push({name:o.name,format:Wg(s),arrayLength:c,byteOffset:l,byteStride:_})}let _={name:a,location:s,byteLength:c,vertex:!!o(35396,`UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER`),fragment:!!o(35398,`UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER`),uniformCount:l,uniforms:g},v=new Set(_.uniforms.map(e=>e.name.split(`.`)[0]).filter(e=>!!e)),y=_.name.replace(/Uniforms$/,``);if(v.size===1&&!v.has(_.name)&&!v.has(y)){let[e]=v;i.warn(`Uniform block "${_.name}" uses GLSL instance "${e}". luma.gl binds uniform buffers by block name ("${_.name}") and alias ("${y}"). Prefer matching the instance name to one of those to avoid confusing silent mismatches.`)()}return _}function a_(e,t,n,r,i,a,o){let s=e.getActiveUniforms(t,n,r);if(s===null)throw Error(`Failed to reflect WebGL uniform block "${a}": ${i} returned null`);return o_(s,a,i,o)}function o_(e,t,n,r){if(!Array.isArray(e)&&!ArrayBuffer.isView(e))throw Error(`Failed to reflect WebGL uniform block "${t}": ${n} returned a non-array value`);let i=Array.from(e);if(i.length!==r||i.some(e=>!Number.isInteger(e)))throw Error(`Failed to reflect WebGL uniform block "${t}": ${n} returned ${i.length} invalid values, expected ${r}`);return i}function s_(e,t,n,r){if(!Number.isInteger(e)||e<r)throw Error(`Failed to reflect WebGL uniform block "${t}": ${n} returned ${String(e)}`);return e}function c_(e){let t=r(e.uniformTypes,{layout:`std140`}),n=l_(e.uniformTypes,t.fields);return{type:`uniform`,name:e.name,group:0,location:0,minBindingSize:t.byteLength,uniforms:n}}function l_(e,t){let n=[],r=(e,a)=>{if(typeof a==`string`){let r=t[e];if(!r)throw Error(`Missing std140 layout field ${e}`);n.push({name:e,format:r.shaderType,arrayLength:1,byteOffset:r.offset*4,byteStride:0});return}if(Array.isArray(a)){i(e,a[0],a[1]);return}for(let[t,n]of Object.entries(a))r(`${e}.${t}`,n)},i=(e,r,i)=>{if(typeof r==`string`){let r=t[`${e}[0]`],a=i>1?t[`${e}[1]`]:void 0;if(!r)throw Error(`Missing std140 array layout field ${e}[0]`);n.push({name:`${e}[0]`,format:r.shaderType,arrayLength:i,byteOffset:r.offset*4,byteStride:a?(a.offset-r.offset)*4:0});return}if(Array.isArray(r))throw Error(`Nested uniform arrays are not supported for ${e}`);for(let[a,o]of Object.entries(r)){if(typeof o!=`string`)throw Error(`Composite uniform array members are not supported for ${e}`);let r=`${e}[0].${a}`,s=`${e}[1].${a}`,c=t[r],l=i>1?t[s]:void 0;if(!c)throw Error(`Missing std140 array layout field ${r}`);n.push({name:r,format:c.shaderType,arrayLength:i,byteOffset:c.offset*4,byteStride:l?(l.offset-c.offset)*4:0})}};for(let[t,n]of Object.entries(e))r(t,n);return n}function u_(e){return e.type===`uniform`&&Number.isInteger(e.minBindingSize)&&e.minBindingSize>=0&&Array.isArray(e.uniforms)&&e.uniforms.every(e=>typeof e.name==`string`&&typeof e.format==`string`&&Number.isInteger(e.arrayLength)&&e.arrayLength>0&&Number.isInteger(e.byteOffset)&&e.byteOffset>=0&&Number.isInteger(e.byteStride)&&e.byteStride>=0)}function d_(e){if(e[e.length-1]!==`]`)return{name:e,length:1,isArray:!1};let t=/([^[]*)(\[[0-9]+\])?/.exec(e);return{name:o(t?.[1],`Failed to parse GLSL uniform name ${e}`),length:+!!t?.[2],isArray:!!t?.[2]}}var f_=class extends a{device;handle;vs;fs;introspectedLayout;bindings={};uniforms={};varyings=null;_uniformCount=0;_uniformSetters={};get[Symbol.toStringTag](){return`WEBGLRenderPipeline`}constructor(e,t){super(e,t),this.device=e;let n=this.sharedRenderPipeline||this.device._createSharedRenderPipelineWebGL(t);this.sharedRenderPipeline=n,this.handle=n.handle,this.vs=n.vs,this.fs=n.fs,this.linkStatus=n.linkStatus,this.introspectedLayout=Xg(this.device.gl,this.handle,{uniformBlockLayouts:t._uniformBlockLayouts,shaderLayout:t.shaderLayout}),this.device._setWebGLDebugMetadata(this.handle,this,{spector:{id:this.props.id}}),this.shaderLayout=t.shaderLayout?p_(this.introspectedLayout,t.shaderLayout):this.introspectedLayout}destroy(){this.destroyed||(this.sharedRenderPipeline&&!this.props._sharedRenderPipeline&&this.sharedRenderPipeline.destroy(),this.destroyResource())}setBindings(e,t){let n=ae(pe(this.shaderLayout,e));for(let[e,r]of Object.entries(n)){let n=m_(this.shaderLayout,e);if(n){switch(r||i.warn(`Unsetting binding "${e}" in render pipeline "${this.id}"`)(),n.type){case`uniform`:if(!(r instanceof ug)&&!(r.buffer instanceof ug))throw Error(`buffer value`);break;case`texture`:if(!(r instanceof Pg||r instanceof Lg||r instanceof rg))throw Error(`${this} Bad texture binding for ${e}`);break;case`sampler`:i.warn(`Ignoring sampler ${e}`)();break;default:throw Error(n.type)}this.bindings[e]=r}else{let n=this.shaderLayout.bindings.map(e=>`"${e.name}"`).join(`, `);t?.disableWarnings||i.warn(`No binding "${e}" in render pipeline "${this.id}", expected one of ${n}`,r)()}}}draw(e){let t=e.renderPass,n=e.bindGroups?ae(e.bindGroups):e.bindings||this.bindings;return t.setPipeline(this),t.setBindings(n),t.setVertexArray(e.vertexArray),t.draw({parameters:e.parameters,topology:e.topology,isInstanced:e.isInstanced,vertexCount:e.vertexCount,indexCount:e.indexCount,instanceCount:e.instanceCount,firstVertex:e.firstVertex,firstIndex:e.firstIndex,firstInstance:e.firstInstance,baseVertex:e.baseVertex,transformFeedback:e.transformFeedback,uniforms:e.uniforms})}_areTexturesRenderable(e){let t=!0;for(let n of this.shaderLayout.bindings)h_(e,n.name)||(i.warn(`Binding ${n.name} not found in ${this.id}`)(),t=!1);return t}_applyBindings(e,t){if(this._syncLinkStatus(),this.linkStatus!==`success`)return;let{gl:n}=this.device;n.useProgram(this.handle);let r=0,a=0;for(let t of this.shaderLayout.bindings){let o=h_(e,t.name);if(!o)throw Error(`No value for binding ${t.name} in ${this.id}`);switch(t.type){case`uniform`:let{name:e}=t,s=n.getUniformBlockIndex(this.handle,e);if(s===4294967295)throw Error(`Invalid uniform block name ${e}`);if(n.uniformBlockBinding(this.handle,s,a),o instanceof ug)n.bindBufferBase(35345,a,o.handle);else{let e=o;n.bindBufferRange(35345,a,e.buffer.handle,e.offset||0,e.size||e.buffer.byteLength-(e.offset||0))}a+=1;break;case`texture`:if(!(o instanceof Pg||o instanceof Lg||o instanceof rg))throw Error(`texture`);let c;if(o instanceof Pg)c=o.texture;else if(o instanceof Lg)c=o;else if(o instanceof rg&&o.colorAttachments[0]instanceof Pg)i.warn(`Passing framebuffer in texture binding may be deprecated. Use fbo.colorAttachments[0] instead`)(),c=o.colorAttachments[0].texture;else throw Error(`No texture`);n.activeTexture(33984+r),n.bindTexture(c.glTarget,c.handle),r+=1;break;case`sampler`:break;case`storage`:case`read-only-storage`:throw Error(`binding type '${t.type}' not supported in WebGL`)}}}_applyUniforms(e){for(let t of this.shaderLayout.uniforms||[]){let{name:n,location:r,type:i,textureUnit:a}=t,o=e[n]??a;o!==void 0&&Hg(this.device.gl,r,i,o)}}_syncLinkStatus(){this.linkStatus=this.sharedRenderPipeline.linkStatus}};function p_(e,t){let n={...e,attributes:e.attributes.map(e=>({...e})),bindings:e.bindings.map(e=>({...e}))};for(let e of t?.attributes||[]){let t=n.attributes.find(t=>t.name===e.name);t?(t.type=e.type||t.type,t.stepMode=e.stepMode||t.stepMode):i.warn(`shader layout attribute ${e.name} not present in shader`)}for(let e of t?.bindings||[]){let t=m_(n,e.name);if(!t){i.warn(`shader layout binding ${e.name} not present in shader`);continue}Object.assign(t,e)}return n}function m_(e,t){return e.bindings.find(e=>e.name===t||e.name===`${t}Uniforms`||`${e.name}Uniforms`===t)}function h_(e,t){return e[t]||e[`${t}Uniforms`]||e[t.replace(/Uniforms$/,``)]}var g_=4,__=class extends ra{device;handle;vs;fs;linkStatus=`pending`;constructor(e,t){super(e,t),this.device=e,this.handle=t.handle||this.device.gl.createProgram(),this.vs=t.vs,this.fs=t.fs,t.varyings&&t.varyings.length>0&&this.device.gl.transformFeedbackVaryings(this.handle,t.varyings,t.bufferMode||35981),this._linkShaders()}destroy(){this.destroyed||(this.device.gl.useProgram(null),this.device.gl.deleteProgram(this.handle),this.handle.destroyed=!0,this.destroyResource())}async _linkShaders(){let{gl:e}=this.device;if(e.attachShader(this.handle,this.vs.handle),e.attachShader(this.handle,this.fs.handle),i.time(g_,`linkProgram for ${this.id}`)(),e.linkProgram(this.handle),i.timeEnd(g_,`linkProgram for ${this.id}`)(),!this.device.features.has(`compilation-status-async-webgl`)){let e=this._getLinkStatus();this._reportLinkStatus(e);return}i.once(1,`RenderPipeline linking is asynchronous`)(),await this._waitForLinkComplete(),i.info(2,`RenderPipeline ${this.id} - async linking complete: ${this.linkStatus}`)();let t=this._getLinkStatus();this._reportLinkStatus(t)}async _reportLinkStatus(e){switch(e){case`success`:return;default:let t=e===`link-error`?`Link error`:`Validation error`;switch(this.vs.compilationStatus){case`error`:throw this.vs.debugShader(),Error(`${this} ${t} during compilation of ${this.vs}`);case`pending`:await this.vs.asyncCompilationStatus,this.vs.debugShader()}switch(this.fs?.compilationStatus){case`error`:throw this.fs.debugShader(),Error(`${this} ${t} during compilation of ${this.fs}`);case`pending`:await this.fs.asyncCompilationStatus,this.fs.debugShader()}let n=this.device.gl.getProgramInfoLog(this.handle);this.device.reportError(Error(`${t} during ${e}: ${n}`),this)(),this.device.debug()}}_getLinkStatus(){let{gl:e}=this.device;return e.getProgramParameter(this.handle,35714)?(this._initializeSamplerUniforms(),e.validateProgram(this.handle),e.getProgramParameter(this.handle,35715)?(this.linkStatus=`success`,`success`):(this.linkStatus=`error`,`validation-error`)):(this.linkStatus=`error`,`link-error`)}_initializeSamplerUniforms(){let{gl:e}=this.device;e.useProgram(this.handle);let t=0,n=e.getProgramParameter(this.handle,35718);for(let r=0;r<n;r++){let n=e.getActiveUniform(this.handle,r);if(n&&Gg(n.type)){let r=n.name.endsWith(`[0]`),i=r?n.name.slice(0,-3):n.name,a=e.getUniformLocation(this.handle,i);a!==null&&(t=this._assignSamplerUniform(a,n,r,t))}}}_assignSamplerUniform(e,t,n,r){let{gl:i}=this.device;if(n&&t.size>1){let n=Int32Array.from({length:t.size},(e,t)=>r+t);return i.uniform1iv(e,n),r+t.size}return i.uniform1i(e,r),r+1}async _waitForLinkComplete(){let e=async e=>await new Promise(t=>setTimeout(t,e));if(!this.device.features.has(`compilation-status-async-webgl`)){await e(10);return}let{gl:t}=this.device;for(;;){if(t.getProgramParameter(this.handle,37297))return;await e(10)}}},v_=class extends oa{device;handle=null;commands=[];constructor(e,t={}){super(e,t),this.device=e}_executeCommands(e=this.commands){for(let t of e)switch(t.name){case`copy-buffer-to-buffer`:y_(this.device,t.options);break;case`copy-buffer-to-texture`:b_(this.device,t.options);break;case`copy-texture-to-buffer`:x_(this.device,t.options);break;case`copy-texture-to-texture`:S_(this.device,t.options);break;default:throw Error(t.name)}}};function y_(e,t){let n=t.sourceBuffer,r=t.destinationBuffer;e.gl.bindBuffer(36662,n.handle),e.gl.bindBuffer(36663,r.handle),e.gl.copyBufferSubData(36662,36663,t.sourceOffset??0,t.destinationOffset??0,t.size),e.gl.bindBuffer(36662,null),e.gl.bindBuffer(36663,null)}function b_(e,t){let{sourceBuffer:n,byteOffset:r=0,destinationTexture:i,mipLevel:a=0,origin:o=[0,0,0],aspect:s=`all`,bytesPerRow:c,rowsPerImage:l,size:u}=t;if(s!==`all`)throw Error(`copyBufferToTexture aspect is not supported in WebGL`);i.writeBuffer(n,{byteOffset:r,bytesPerRow:c,rowsPerImage:l,mipLevel:a,x:o[0]??0,y:o[1]??0,z:o[2]??0,width:u[0],height:u[1],depthOrArrayLayers:u[2]})}function x_(e,t){let{sourceTexture:n,mipLevel:r=0,aspect:i=`all`,width:a=t.sourceTexture.width,height:s=t.sourceTexture.height,depthOrArrayLayers:c,origin:l=[0,0,0],destinationBuffer:u,byteOffset:d=0,bytesPerRow:f,rowsPerImage:p}=t;if(n instanceof z){n.readBuffer({x:l[0]??0,y:l[1]??0,z:l[2]??0,width:a,height:s,depthOrArrayLayers:c,mipLevel:r,aspect:i,byteOffset:d},u);return}if(i!==`all`)throw Error(`aspect not supported in WebGL`);if(r!==0||c!==void 0||f||p)throw Error(`not implemented`);let{framebuffer:m,destroyFramebuffer:h}=C_(n),g;try{let t=u,n=a||m.width,r=s||m.height,i=Xh(o(m.colorAttachments[0]).texture.props.format),c=i.format,f=i.type;e.gl.bindBuffer(35051,t.handle),g=e.gl.bindFramebuffer(36160,m.handle),e.gl.readPixels(l[0],l[1],n,r,c,f,d)}finally{e.gl.bindBuffer(35051,null),g!==void 0&&e.gl.bindFramebuffer(36160,g),h&&m.destroy()}}function S_(e,t){let{sourceTexture:n,destinationMipLevel:r=0,origin:i=[0,0],destinationOrigin:a=[0,0,0],destinationTexture:o}=t,{width:s=t.destinationTexture.width,height:c=t.destinationTexture.height}=t,{framebuffer:l,destroyFramebuffer:u}=C_(n),[d=0,f=0]=i,[p,m,h]=a,g=e.gl.bindFramebuffer(36160,l.handle),_,v;if(o instanceof Lg)_=o,s=Number.isFinite(s)?s:_.width,c=Number.isFinite(c)?c:_.height,_._bind(0),v=_.glTarget;else throw Error(`invalid destination`);switch(v){case 3553:case 34067:e.gl.copyTexSubImage2D(v,r,p,m,d,f,s,c);break;case 35866:case 32879:e.gl.copyTexSubImage3D(v,r,p,m,h,d,f,s,c)}_&&_._unbind(),e.gl.bindFramebuffer(36160,g),u&&l.destroy()}function C_(e){if(e instanceof z){let{width:t,height:n,id:r}=e;return{framebuffer:e.device.createFramebuffer({id:`framebuffer-for-${r}`,width:t,height:n,colorAttachments:[e]}),destroyFramebuffer:!0}}return{framebuffer:e,destroyFramebuffer:!1}}function w_(e){switch(e){case`point-list`:return 0;case`line-list`:return 1;case`line-strip`:return 3;case`triangle-list`:return 4;case`triangle-strip`:return 5;default:throw Error(e)}}function T_(e){switch(e){case`point-list`:return 0;case`line-list`:return 1;case`line-strip`:return 1;case`triangle-list`:return 4;case`triangle-strip`:return 4;default:throw Error(e)}}var E_=[1,2,4,8],D_=class extends ia{device;handle=null;glParameters={};pipeline=null;bindings={};bindingsPipeline=null;vertexArray=null;constructor(e,t){super(e,t),this.device=e;let n=this.props.framebuffer,r=!n||n.handle===null;r&&e.getDefaultCanvasContext()._resizeDrawingBufferIfNeeded();let i;if(!t?.parameters?.viewport){if(!r&&n){let{width:e,height:t}=n;i=[0,0,e,t]}else{let[t,n]=e.getDefaultCanvasContext().getDrawingBufferSize();i=[0,0,t,n]}}if(this.device.pushState(),this.setParameters({viewport:i,...this.props.parameters}),!r&&n?.colorAttachments.length){let e=n.colorAttachments.map((e,t)=>36064+t);this.device.gl.drawBuffers(e)}else r&&this.device.gl.drawBuffers([1029]);this.clear(),this.props.timestampQuerySet&&this.props.beginTimestampIndex!==void 0&&this.props.timestampQuerySet.writeTimestamp(this.props.beginTimestampIndex)}end(){this.destroyed||(this.props.timestampQuerySet&&this.props.endTimestampIndex!==void 0&&this.props.timestampQuerySet.writeTimestamp(this.props.endTimestampIndex),this.device.popState(),this.destroy())}pushDebugGroup(e){}popDebugGroup(){}insertDebugMarker(e){}executeBundles(e){throw Error(`Render bundles are only supported in WebGPU`)}setParameters(e={}){let t={...this.glParameters};t.framebuffer=this.props.framebuffer||null,this.props.depthReadOnly&&(t.depthMask=!this.props.depthReadOnly),t.stencilMask=+!this.props.stencilReadOnly,t[35977]=this.props.discard,e.viewport&&(e.viewport.length>=6?(t.viewport=e.viewport.slice(0,4),t.depthRange=[e.viewport[4],e.viewport[5]]):t.viewport=e.viewport),e.scissorRect&&(t.scissorTest=!0,t.scissor=e.scissorRect),e.blendConstant&&(t.blendColor=e.blendConstant),e.stencilReference!==void 0&&(t[2967]=e.stencilReference,t[36003]=e.stencilReference),`colorMask`in e&&(t.colorMask=E_.map(t=>!!(t&e.colorMask))),this.glParameters=t,oh(this.device.gl,t)}setPipeline(e){this.pipeline=e}setBindings(e,t){if(!this.pipeline)throw Error(`RenderPass.setPipeline() must be called before setBindings()`);this.bindings=ae(pe(this.pipeline.shaderLayout,e)),this.bindingsPipeline=this.pipeline}setVertexArray(e){this.vertexArray=e}draw(e){let t=this.pipeline,n=this.vertexArray;if(!t)throw Error(`RenderPass.setPipeline() must be called before draw()`);if(!n)throw Error(`RenderPass.setVertexArray() must be called before draw()`);if(t.shaderLayout.bindings.length>0&&this.bindingsPipeline!==t)throw Error(`RenderPass.setBindings() must be called after setPipeline() before draw()`);t._syncLinkStatus();let{parameters:r=t.props.parameters,topology:a=t.props.topology,vertexCount:o,indexCount:s,instanceCount:c,isInstanced:l=!1,firstVertex:u=0,transformFeedback:d,uniforms:f=t.uniforms}=e,p=w_(a),m=!!n.indexBuffer,h=n.indexBuffer?.glIndexType,g=s??o??0;if(t.linkStatus!==`success`)return i.info(2,`RenderPipeline:${t.id}.draw() aborted - waiting for shader linking`)(),!1;if(!t._areTexturesRenderable(this.bindings))return i.info(2,`RenderPipeline:${t.id}.draw() aborted - textures not yet loaded`)(),!1;this.device.gl.useProgram(t.handle),n.bindBeforeRender(this);let _=d;return _&&_.begin(t.props.topology),t._applyBindings(this.bindings,{disableWarnings:t.props.disableWarnings}),t._applyUniforms(f),_g(this.device,r,this.glParameters,()=>{m&&l?this.device.gl.drawElementsInstanced(p,g,h,u,c||0):m?this.device.gl.drawElements(p,g,h,u):l?this.device.gl.drawArraysInstanced(p,u,o||0,c||0):this.device.gl.drawArrays(p,u,o||0),_&&_.end()}),n.unbindAfterRender(this),!0}drawIndirect(e,t=0){throw Error(`Indirect drawing is only supported in WebGPU`)}drawIndexedIndirect(e,t=0){throw Error(`Indirect drawing is only supported in WebGPU`)}beginOcclusionQuery(e){this.props.occlusionQuerySet?.beginOcclusionQuery()}endOcclusionQuery(){this.props.occlusionQuerySet?.endOcclusionQuery()}clear(){let e={...this.glParameters},t=0;this.props.clearColors&&this.props.clearColors.forEach((e,t)=>{e&&this.clearColorBuffer(t,e)}),this.props.clearColor!==!1&&this.props.clearColors===void 0&&(t|=16384,e.clearColor=this.props.clearColor),this.props.clearDepth!==!1&&(t|=256,e.clearDepth=this.props.clearDepth),this.props.clearStencil!==!1&&(t|=1024,e.clearStencil=this.props.clearStencil),t!==0&&Mg(this.device.gl,e,()=>{this.device.gl.clear(t)})}clearColorBuffer(e=0,t=[0,0,0,0]){Mg(this.device.gl,{framebuffer:this.props.framebuffer},()=>{switch(t.constructor){case Int8Array:case Int16Array:case Int32Array:this.device.gl.clearBufferiv(6144,e,t);break;case Uint8Array:case Uint8ClampedArray:case Uint16Array:case Uint32Array:this.device.gl.clearBufferuiv(6144,e,t);break;case Float32Array:this.device.gl.clearBufferfv(6144,e,t);break;default:throw Error(`clearColorBuffer: color must be typed array`)}})}},O_=class extends aa{device;handle=null;commandBuffer;constructor(e,t){super(e,t),this.device=e,this.commandBuffer=new v_(e,{id:this.id,userData:this.userData})}destroy(){this.destroyResource()}finish(){return this.destroy(),this.commandBuffer}beginRenderPass(e={}){return new D_(this.device,this._applyTimeProfilingToPassProps(e))}beginComputePass(e={}){throw Error(`ComputePass not supported in WebGL`)}copyBufferToBuffer(e){this.commandBuffer.commands.push({name:`copy-buffer-to-buffer`,options:e})}copyBufferToTexture(e){this.commandBuffer.commands.push({name:`copy-buffer-to-texture`,options:e})}copyTextureToBuffer(e){this.commandBuffer.commands.push({name:`copy-texture-to-buffer`,options:e})}copyTextureToTexture(e){this.commandBuffer.commands.push({name:`copy-texture-to-texture`,options:e})}pushDebugGroup(e){}popDebugGroup(){}insertDebugMarker(e){}resolveQuerySet(e,t,n){throw Error(`resolveQuerySet is not supported in WebGL`)}writeTimestamp(e,t){e.writeTimestamp(t)}};function k_(e){let{target:t,source:n,start:r=0,count:i=1}=e,a=n.length,o=i*a,s=0;for(let e=r;s<a;s++)t[e++]=n[s]??0;for(;s<o;)s<o-s?(t.copyWithin(r+s,r,r+s),s*=2):(t.copyWithin(r+s,r,r+o-s),s=o);return e.target}var A_=class e extends sa{get[Symbol.toStringTag](){return`VertexArray`}device;handle;attributeInfosByLocation;buffer=null;bufferValue=null;static isConstantAttributeZeroSupported(e){return Ie()===`Chrome`}constructor(e,t){super(e,t),this.device=e,this.handle=this.device.gl.createVertexArray(),this.attributeInfosByLocation=Array(this.maxVertexAttributes).fill(null);for(let e of Object.values(me(t.shaderLayout,t.bufferLayout)))this.attributeInfosByLocation[e.location]=e}destroy(){super.destroy(),this.buffer&&this.buffer?.destroy(),this.handle&&=(this.device.gl.deleteVertexArray(this.handle),void 0)}setIndexBuffer(e){let t=e;if(t&&t.glTarget!==34963)throw Error(`Use .setBuffer()`);this.device.gl.bindVertexArray(this.handle),this.device.gl.bindBuffer(34963,t?t.handle:null),this.indexBuffer=t,this.device.gl.bindVertexArray(null)}setBuffer(e,t){let n=t;if(n.glTarget===34963)throw Error(`Use .setIndexBuffer()`);let{size:r,type:i,stride:a,offset:o,normalized:s,integer:c,divisor:l}=this._getAccessor(e);this.device.gl.bindVertexArray(this.handle),this.device.gl.bindBuffer(34962,n.handle),c?this.device.gl.vertexAttribIPointer(e,r,i,a,o):this.device.gl.vertexAttribPointer(e,r,i,s,a,o),this.device.gl.bindBuffer(34962,null),this.device.gl.enableVertexAttribArray(e),this.device.gl.vertexAttribDivisor(e,l||0),this.attributes[e]=n,this.device.gl.bindVertexArray(null)}setConstantWebGL(e,t){this._enable(e,!1),this.attributes[e]=t}bindBeforeRender(){this.device.gl.bindVertexArray(this.handle),this._applyConstantAttributes()}unbindAfterRender(){this.device.gl.bindVertexArray(null)}_applyConstantAttributes(){for(let e=0;e<this.maxVertexAttributes;++e){let t=this.attributes[e];ArrayBuffer.isView(t)&&this.device.setConstantAttributeWebGL(e,t)}}_getAccessor(e){let t=this.attributeInfosByLocation[e];if(!t)throw Error(`Unknown attribute location ${e}`);let n=wh(t.bufferDataType);return{size:t.bufferComponents,type:n,stride:t.byteStride,offset:t.byteOffset,normalized:t.normalized,integer:t.integer,divisor:+(t.stepMode===`instance`)}}_enable(t,n=!0){let r=e.isConstantAttributeZeroSupported(this.device)||t!==0;(n||r)&&(t=Number(t),this.device.gl.bindVertexArray(this.handle),n?this.device.gl.enableVertexAttribArray(t):this.device.gl.disableVertexAttribArray(t),this.device.gl.bindVertexArray(null))}getConstantBuffer(e,t){let n=j_(t),r=n.byteLength*e,i=n.length*e;if(this.buffer&&r!==this.buffer.byteLength)throw Error(`Buffer size is immutable, byte length ${r} !== ${this.buffer.byteLength}.`);let a=!this.buffer;if(this.buffer=this.buffer||this.device.createBuffer({byteLength:r}),a||=!M_(n,this.bufferValue),a){let e=f(t.constructor,i);k_({target:e,source:n,start:0,count:i}),this.buffer.write(e),this.bufferValue=t}return this.buffer}};function j_(e){return Array.isArray(e)?new Float32Array(e):e}function M_(e,t){if(!e||!t||e.length!==t.length||e.constructor!==t.constructor)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}var N_=class extends ca{device;gl;handle;layout;buffers={};unusedBuffers={};bindOnUse=!0;_bound=!1;constructor(e,t){super(e,t),this.device=e,this.gl=e.gl,this.handle=this.props.handle||this.gl.createTransformFeedback(),this.layout=this.props.layout,t.buffers&&this.setBuffers(t.buffers),Object.seal(this)}destroy(){this.gl.deleteTransformFeedback(this.handle),super.destroy()}begin(e=`point-list`){this.gl.bindTransformFeedback(36386,this.handle),this.bindOnUse&&this._bindBuffers(),this.gl.beginTransformFeedback(T_(e))}end(){this.gl.endTransformFeedback(),this.bindOnUse&&this._unbindBuffers(),this.gl.bindTransformFeedback(36386,null)}setBuffers(e){this.buffers={},this.unusedBuffers={},this.bind(()=>{for(let[t,n]of Object.entries(e))this.setBuffer(t,n)})}setBuffer(e,t){let n=this._getVaryingIndex(e),{buffer:r,byteLength:a,byteOffset:o}=this._getBufferRange(t);if(n<0){this.unusedBuffers[e]=r,i.warn(`${this.id} unusedBuffers varying buffer ${e}`)();return}this.buffers[n]={buffer:r,byteLength:a,byteOffset:o},this.bindOnUse||this._bindBuffer(n,r,o,a)}getBuffer(e){if(P_(e))return this.buffers[e]||null;let t=this._getVaryingIndex(e);return this.buffers[t]??null}bind(e=this.handle){if(typeof e!=`function`)return this.gl.bindTransformFeedback(36386,e),this;let t;return this._bound?t=e():(this.gl.bindTransformFeedback(36386,this.handle),this._bound=!0,t=e(),this._bound=!1,this.gl.bindTransformFeedback(36386,null)),t}unbind(){this.bind(null)}_getBufferRange(e){if(e instanceof ug)return{buffer:e,byteOffset:0,byteLength:e.byteLength};let{buffer:t,byteOffset:n=0,byteLength:r=e.buffer.byteLength}=e;return{buffer:t,byteOffset:n,byteLength:r}}_getVaryingIndex(e){if(P_(e))return Number(e);for(let t of this.layout.varyings||[])if(e===t.name)return t.location;return-1}_bindBuffers(){for(let[e,t]of Object.entries(this.buffers)){let{buffer:n,byteLength:r,byteOffset:i}=this._getBufferRange(t);this._bindBuffer(Number(e),n,i,r)}}_unbindBuffers(){for(let e in this.buffers)this.gl.bindBufferBase(35982,Number(e),null)}_bindBuffer(e,t,n=0,r){let i=t&&t.handle;!i||r===void 0?this.gl.bindBufferBase(35982,e,i):this.gl.bindBufferRange(35982,e,i,n,r)}};function P_(e){return typeof e==`number`?Number.isInteger(e):/^\d+$/.test(e)}var F_=class extends la{device;handle;_timestampPairs=[];_pendingReads=new Set;_occlusionQuery=null;_occlusionActive=!1;get[Symbol.toStringTag](){return`QuerySet`}constructor(e,t){if(super(e,t),this.device=e,t.type===`timestamp`){if(t.count<2)throw Error(`Timestamp QuerySet requires at least two query slots`);this._timestampPairs=Array(Math.ceil(t.count/2)).fill(null).map(()=>({activeQuery:null,completedQueries:[]})),this.handle=null}else{if(t.count>1)throw Error(`WebGL occlusion QuerySet can only have one value`);let e=this.device.gl.createQuery();if(!e)throw Error(`WebGL query not supported`);this.handle=e}Object.seal(this)}destroy(){if(!this.destroyed){this.handle&&this.device.gl.deleteQuery(this.handle);for(let e of this._timestampPairs){e.activeQuery&&(this._cancelPendingQuery(e.activeQuery),this.device.gl.deleteQuery(e.activeQuery.handle));for(let t of e.completedQueries)this._cancelPendingQuery(t),this.device.gl.deleteQuery(t.handle)}this._occlusionQuery&&(this._cancelPendingQuery(this._occlusionQuery),this.device.gl.deleteQuery(this._occlusionQuery.handle));for(let e of Array.from(this._pendingReads))this._cancelPendingQuery(e);this.destroyResource()}}isResultAvailable(e){return this.props.type===`timestamp`?e===void 0?this._timestampPairs.some((e,t)=>this._isTimestampPairAvailable(t)):this._isTimestampPairAvailable(this._getTimestampPairIndex(e)):this._occlusionQuery?this._pollQueryAvailability(this._occlusionQuery):!1}async readResults(e){let t=e?.firstQuery||0,n=e?.queryCount||this.props.count-t;if(this._validateRange(t,n),this.props.type===`timestamp`){let e=Array(n).fill(0n),r=Math.floor(t/2),i=Math.floor((t+n-1)/2);for(let a=r;a<=i;a++){let r=await this._consumeTimestampPairResult(a),i=a*2,o=i+1;i>=t&&i<t+n&&(e[i-t]=0n),o>=t&&o<t+n&&(e[o-t]=r)}return e}if(!this._occlusionQuery)throw Error(`Occlusion query has not been started`);return[await this._consumeQueryResult(this._occlusionQuery)]}async readTimestampDuration(e,t){if(this.props.type!==`timestamp`)throw Error(`Timestamp durations require a timestamp QuerySet`);if(e<0||t>=this.props.count||t<=e)throw Error(`Timestamp duration range is out of bounds`);if(e%2!=0||t!==e+1)throw Error(`WebGL timestamp durations require adjacent even/odd query indices`);let n=await this._consumeTimestampPairResult(this._getTimestampPairIndex(e));return Number(n)/1e6}beginOcclusionQuery(){if(this.props.type!==`occlusion`)throw Error(`Occlusion queries require an occlusion QuerySet`);if(!this.handle)throw Error(`WebGL occlusion query is not available`);if(this._occlusionActive)throw Error(`Occlusion query is already active`);this.device.gl.beginQuery(35887,this.handle),this._occlusionQuery={handle:this.handle,promise:null,result:null,disjoint:!1,cancelled:!1,pollRequestId:null,resolve:null,reject:null},this._occlusionActive=!0}endOcclusionQuery(){if(!this._occlusionActive)throw Error(`Occlusion query is not active`);this.device.gl.endQuery(35887),this._occlusionActive=!1}writeTimestamp(e){if(this.props.type!==`timestamp`)throw Error(`Timestamp writes require a timestamp QuerySet`);let t=this._getTimestampPairIndex(e),n=this._timestampPairs[t];if(e%2==0){if(n.activeQuery)throw Error(`Timestamp query pair is already active`);let e=this.device.gl.createQuery();if(!e)throw Error(`WebGL query not supported`);let t={handle:e,promise:null,result:null,disjoint:!1,cancelled:!1,pollRequestId:null,resolve:null,reject:null};this.device.gl.beginQuery(35007,e),n.activeQuery=t;return}if(!n.activeQuery)throw Error(`Timestamp query pair was ended before it was started`);this.device.gl.endQuery(35007),n.completedQueries.push(n.activeQuery),n.activeQuery=null}_validateRange(e,t){if(e<0||t<0||e+t>this.props.count)throw Error(`Query read range is out of bounds`)}_getTimestampPairIndex(e){if(e<0||e>=this.props.count)throw Error(`Query index is out of bounds`);return Math.floor(e/2)}_isTimestampPairAvailable(e){let t=this._timestampPairs[e];return!t||t.completedQueries.length===0?!1:this._pollQueryAvailability(t.completedQueries[0])}_pollQueryAvailability(e){if(e.cancelled||this.destroyed)return e.result=0n,!0;if(e.result!==null||e.disjoint)return!0;if(!this.device.gl.getQueryParameter(e.handle,34919))return!1;let t=!!this.device.gl.getParameter(36795);return e.disjoint=t,e.result=t?0n:BigInt(this.device.gl.getQueryParameter(e.handle,34918)),!0}async _consumeTimestampPairResult(e){let t=this._timestampPairs[e];if(!t||t.completedQueries.length===0)throw Error(`Timestamp query pair has no completed result`);let n=t.completedQueries.shift();try{return await this._consumeQueryResult(n)}finally{this.device.gl.deleteQuery(n.handle)}}_consumeQueryResult(e){return e.promise?e.promise:(this._pendingReads.add(e),e.promise=new Promise((t,n)=>{e.resolve=t,e.reject=n;let r=()=>{if(e.pollRequestId=null,e.cancelled||this.destroyed){this._pendingReads.delete(e),e.promise=null,e.resolve=null,e.reject=null,t(0n);return}if(!this._pollQueryAvailability(e)){e.pollRequestId=this._requestAnimationFrame(r);return}this._pendingReads.delete(e),e.promise=null,e.resolve=null,e.reject=null,e.disjoint?n(Error(`GPU timestamp query was invalidated by a disjoint event`)):t(e.result||0n)};r()}),e.promise)}_cancelPendingQuery(e){if(this._pendingReads.delete(e),e.cancelled=!0,e.pollRequestId!==null&&(this._cancelAnimationFrame(e.pollRequestId),e.pollRequestId=null),e.resolve){let t=e.resolve;e.promise=null,e.resolve=null,e.reject=null,t(0n)}}_requestAnimationFrame(e){return requestAnimationFrame(e)}_cancelAnimationFrame(e){cancelAnimationFrame(e)}},I_=class extends ua{device;gl;handle;signaled;_signaled=!1;constructor(e,t={}){super(e,{}),this.device=e,this.gl=e.gl;let n=this.props.handle||this.gl.fenceSync(this.gl.SYNC_GPU_COMMANDS_COMPLETE,0);if(!n)throw Error(`Failed to create WebGL fence`);this.handle=n,this.signaled=new Promise(e=>{let t=()=>{let n=this.gl.clientWaitSync(this.handle,0,0);n===this.gl.ALREADY_SIGNALED||n===this.gl.CONDITION_SATISFIED?(this._signaled=!0,e()):setTimeout(t,1)};t()})}isSignaled(){if(this._signaled)return!0;let e=this.gl.getSyncParameter(this.handle,this.gl.SYNC_STATUS);return this._signaled=e===this.gl.SIGNALED,this._signaled}destroy(){this.destroyed||this.gl.deleteSync(this.handle)}};function L_(e){switch(e){case 6406:case 33326:case 6403:case 36244:return 1;case 33339:case 33340:case 33328:case 33320:case 33319:return 2;case 6407:case 36248:case 34837:return 3;case 6408:case 36249:case 34836:return 4;default:return 0}}function R_(e){switch(e){case 5121:return 1;case 33635:case 32819:case 32820:return 2;case 5126:return 4;default:return 0}}function z_(e,t){let{sourceX:n=0,sourceY:r=0,sourceAttachment:i=0}=t||{},{target:a=null,sourceWidth:o,sourceHeight:s,sourceDepth:c,sourceFormat:l,sourceType:u}=t||{},{framebuffer:f,deleteFramebuffer:p}=V_(e),{gl:m,handle:h}=f;o||=f.width,s||=f.height;let g=f.colorAttachments[i]?.texture;if(!g)throw Error(`Invalid framebuffer attachment ${i}`);c=g?.depth||1,l||=g?.glFormat||6408,u||=g?.glType||5121,a=U_(a,u,l,o,s,c);let _=d.getDataType(a);u||=Ug(_);let v=m.bindFramebuffer(36160,h);return m.readBuffer(36064+i),m.readPixels(n,r,o,s,l,u,a),m.readBuffer(36064),m.bindFramebuffer(36160,v||null),p&&f.destroy(),a}function B_(e,t){let{target:n,sourceX:r=0,sourceY:i=0,sourceFormat:a=6408,targetByteOffset:o=0}=t||{},{sourceWidth:s,sourceHeight:c,sourceType:l}=t||{},{framebuffer:u,deleteFramebuffer:d}=V_(e);s||=u.width,c||=u.height;let f=u;l||=5121;let p=n;if(!p){let e=L_(a),t=R_(l),n=o+s*c*e*t;p=f.device.createBuffer({byteLength:n})}let m=e.device.createCommandEncoder();return m.copyTextureToBuffer({sourceTexture:e,width:s,height:c,origin:[r,i],destinationBuffer:p,byteOffset:o}),m.destroy(),d&&u.destroy(),p}function V_(e){return e instanceof na?{framebuffer:e,deleteFramebuffer:!1}:{framebuffer:H_(e),deleteFramebuffer:!0}}function H_(e,t){let{device:n,width:r,height:i,id:a}=e;return n.createFramebuffer({...t,id:`framebuffer-for-${a}`,width:r,height:i,colorAttachments:[e]})}function U_(e,t,n,r,i,a){if(e)return e;t||=5121;let o=Fg(t),s=d.getTypedArrayConstructor(o),c=L_(n);return new s(r*i*c)}function W_(e){let t=new Map;for(let n in e){let r=e[n];if(n<`a`){let e=t.get(r);t.set(r,e?`${e}, GL.${n}`:`GL.${n}`)}}return t}var G_=Se({WebGLDevice:()=>K_}),K_=class e extends Ui{static getDeviceFromContext(e){return e?e.luma?.device??null:null}type=`webgl`;handle;features;limits;info;canvasContext;preferredColorFormat=`rgba8unorm`;preferredDepthFormat=`depth24plus`;commandEncoder;lost;_resolveContextLost;_isLost=!1;gl;_glKeyByValue=null;_constants;extensions;_polyfilled=!1;spectorJS;get[Symbol.toStringTag](){return`WebGLDevice`}toString(){return`${this[Symbol.toStringTag]}(${this.id})`}isVertexFormatSupported(e){switch(e){case`unorm8x4-bgra`:return!1;default:return!0}}constructor(t){super({...t,id:t.id||lg(`webgl-device`)});let n=Ui._getCanvasContextProps(t);if(!n)throw Error(`WebGLDevice requires props.createCanvasContext to be set`);let r=n.canvas?.gl??null,a=e.getDeviceFromContext(r);if(a)throw Error(`WebGL context already attached to device ${a.id}`);this.canvasContext=new og(this,n),this.lost=new Promise(e=>{this._resolveContextLost=e});let o={...t.webgl};n.alphaMode===`premultiplied`&&(o.premultipliedAlpha=!0),t.powerPreference!==void 0&&(o.powerPreference=t.powerPreference),t.failIfMajorPerformanceCaveat!==void 0&&(o.failIfMajorPerformanceCaveat=t.failIfMajorPerformanceCaveat);let s=this.props._handle||_h(this.canvasContext.canvas,{onContextLost:e=>this._resolveContextLost?.({reason:`destroyed`,message:`Entered sleep mode, or too many apps or browser tabs are using the GPU.`}),onContextRestored:e=>{console.log(`WebGL context restored`)}},o);if(!s)throw Error(`WebGL context creation failed`);if(a=e.getDeviceFromContext(s),a){if(t._reuseDevices)return i.log(1,`Not creating a new Device, instead returning a reference to Device ${a.id} already attached to WebGL context`,a)(),this.canvasContext.destroy(),a._reused=!0,a;throw Error(`WebGL context already attached to device ${a.id}`)}this.handle=s,this.gl=s,this.spectorJS=Fm({...this.props,gl:this.handle});let c=gh(this.handle);c.device=this,c.extensions||={},this.extensions=c.extensions,this.info=yh(this.gl,this.extensions),this.limits=new ng(this.gl),this.features=new tg(this.gl,this.extensions,this.props._disabledFeatures),this.props._initializeFeatures&&this.features.initializeFeatures(),new fh(this.gl,{log:(...e)=>i.log(1,...e)()}).trackState(this.gl,{copyState:!1}),(t.debug||t.debugWebGL)&&(this.gl=Nm(this.gl,{debugWebGL:!0,traceWebGL:t.debugWebGL}),i.warn(`WebGL debug mode activated. Performance reduced.`)()),t.debugWebGL&&(i.level=Math.max(i.level,1)),this.commandEncoder=new O_(this,{id:`${this}-command-encoder`}),this.canvasContext._startObservers()}destroy(){if(!this.props._reuseDevices&&!this._reused){this._isLost=!0,this.commandEncoder?.destroy();let e=gh(this.handle);e.device=null}}get isLost(){return this._isLost||this.gl.isContextLost()}createCanvasContext(e){throw Error(`WebGL only supports a single canvas`)}createPresentationContext(e){return new sg(this,e||{})}createBuffer(e){let t=this._normalizeBufferProps(e);return new ug(this,t)}createTexture(e){return new Lg(this,e)}createExternalTexture(e){throw Error(`ExternalTexture is not available on WebGL`)}createSampler(e){return new jg(this,e)}createShader(e){return new hg(this,e)}createFramebuffer(e){return new rg(this,e)}createVertexArray(e){return new A_(this,e)}createTransformFeedback(e){return new N_(this,e)}createQuerySet(e){return new F_(this,e)}createFence(){return new I_(this)}createRenderPipeline(e){return new f_(this,e)}_createSharedRenderPipelineWebGL(e){return new __(this,e)}createComputePipeline(e){throw Error(`ComputePipeline not supported in WebGL`)}createRenderBundleEncoder(e){throw Error(`Render bundles are only supported in WebGPU`)}createCommandEncoder(e={}){return new O_(this,e)}submit(e){let t=null;e||({submittedCommandEncoder:t,commandBuffer:e}=this._finalizeDefaultCommandEncoderForSubmit());try{e._executeCommands(),t&&t.resolveTimeProfilingQuerySet().then(()=>{this.commandEncoder._gpuTimeMs=t._gpuTimeMs}).catch(()=>{})}finally{e.destroy()}}writeBufferViaCommandEncoder(e,t,n,r=0){t.write(n,r)}_finalizeDefaultCommandEncoderForSubmit(){let e=this.commandEncoder,t=e.finish();return this.commandEncoder.destroy(),this.commandEncoder=this.createCommandEncoder({id:e.props.id,timeProfilingQuerySet:e.getTimeProfilingQuerySet()}),{submittedCommandEncoder:e,commandBuffer:t}}readPixelsToArrayWebGL(e,t){return z_(e,t)}readPixelsToBufferWebGL(e,t){return B_(e,t)}setParametersWebGL(e){oh(this.gl,e)}getParametersWebGL(e){return sh(this.gl,e)}withParametersWebGL(e,t){return Mg(this.gl,e,t)}resetWebGL(){i.warn(`WebGLDevice.resetWebGL is deprecated, use only for debugging`)(),ch(this.gl)}_getDeviceSpecificTextureFormatCapabilities(e){return Jh(this.gl,e,this.extensions)}loseDevice(){let e=!1,t=this.getExtension(`WEBGL_lose_context`).WEBGL_lose_context;return t&&(e=!0,t.loseContext()),this._resolveContextLost?.({reason:`destroyed`,message:`Application triggered context loss`}),e}pushState(){fh.get(this.gl).push()}popState(){fh.get(this.gl).pop()}getGLKey(e,t){return this._getGLKeyByValue().get(Number(e))||(t?.emptyIfUnknown?``:String(e))}getGLKeys(e){let t={emptyIfUnknown:!0};return Object.entries(e).reduce((e,[n,r])=>(e[`${n}:${this.getGLKey(n,t)}`]=`${r}:${this.getGLKey(r,t)}`,e),{})}_getGLKeyByValue(){return this._glKeyByValue??=W_(this.gl),this._glKeyByValue}setConstantAttributeWebGL(e,t){let n=this.limits.maxVertexAttributes;this._constants=this._constants||Array(n).fill(null);let r=this._constants[e];switch(r&&X_(r,t)&&i.info(1,`setConstantAttributeWebGL(${e}) could have been skipped, value unchanged`)(),this._constants[e]=t,t.constructor){case Float32Array:q_(this,e,t);break;case Int32Array:J_(this,e,t);break;case Uint32Array:Y_(this,e,t);break;default:throw Error(`constant`)}}getExtension(e){return vh(this.gl,e,this.extensions),this.extensions}_setWebGLDebugMetadata(e,t,n){e.luma=t,e.__SPECTOR_Metadata={props:n.spector,id:n.spector.id}}};function q_(e,t,n){switch(n.length){case 1:e.gl.vertexAttrib1fv(t,n);break;case 2:e.gl.vertexAttrib2fv(t,n);break;case 3:e.gl.vertexAttrib3fv(t,n);break;case 4:e.gl.vertexAttrib4fv(t,n)}}function J_(e,t,n){e.gl.vertexAttribI4iv(t,n)}function Y_(e,t,n){e.gl.vertexAttribI4uiv(t,n)}function X_(e,t){if(!e||!t||e.length!==t.length||e.constructor!==t.constructor)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}function Z_(){}var Q_={id:``,width:`100%`,height:`100%`,style:null,viewState:null,initialViewState:null,pickingRadius:0,pickAsync:`auto`,layerFilter:null,parameters:{},parent:null,device:null,deviceProps:{},gl:null,canvas:null,_canvases:null,layers:[],effects:[],views:null,controller:null,useDevicePixels:!0,touchAction:`none`,eventRecognizerOptions:{},_framebuffer:null,_animate:!1,_pickable:!0,_typedArrayManagerProps:{},_customRender:null,widgets:[],onDeviceInitialized:Z_,onWebGLInitialized:Z_,onResize:Z_,onViewStateChange:Z_,onInteractionStateChange:Z_,onBeforeRender:Z_,onAfterRender:Z_,onLoad:Z_,onError:e=>U.error(e.message,e.cause)(),onHover:null,onClick:null,onDragStart:null,onDrag:null,onDragEnd:null,_onMetrics:null,getCursor:({isDragging:e})=>e?`grabbing`:`grab`,getTooltip:null,debug:!1,drawPickingColors:!1},$_=class{constructor(e){this.width=0,this.height=0,this.userData={},this.device=null,this.canvas=null,this.viewManager=null,this.layerManager=null,this.effectManager=null,this.deckRenderer=null,this.deckPicker=null,this.eventManager=null,this.eventManagers={},this.widgetManager=null,this.tooltip=null,this.animationLoop=null,this._canvasContext=null,this._deviceResizeHandler=null,this.cursorState={isHovering:!1,isDragging:!1},this.stats=new It({id:`deck.gl`}),this.metrics={fps:0,setPropsTime:0,layersCount:0,drawLayersCount:0,updateLayersCount:0,updateAttributesCount:0,updateAttributesTime:0,framesRedrawn:0,pickTime:0,pickCount:0,pickLayersCount:0,gpuTime:0,gpuTimePerFrame:0,cpuTime:0,cpuTimePerFrame:0,bufferMemory:0,textureMemory:0,renderbufferMemory:0,gpuMemory:0},this._metricsCounter=0,this._hoverPickSequence=0,this._pointerDownPickSequence=0,this._needsRedraw=`Initial render`,this._canvasManager=new Cm({createEventManager:e=>this._createEventManager(e),getEventRoot:e=>this._getEventRoot(e)}),this._ownedCanvas=null,this._pickRequest={mode:`hover`,x:-1,y:-1,radius:0,canvasId:void 0,event:null,unproject3D:!1},this._lastPointerDownInfo=null,this._lastPointerDownInfoPromise=null,this._onPointerMove=e=>{let{_pickRequest:t}=this,n=this._getCanvasIdFromEvent(e);if(e.type===`pointerleave`)t.x=-1,t.y=-1,t.radius=0,t.canvasId=n;else if(e.leftButton||e.rightButton)return;else{let r=e.offsetCenter;if(!r)return;t.x=r.x,t.y=r.y,t.radius=this.props.pickingRadius,t.canvasId=n}this.layerManager&&(this.layerManager.context.mousePosition={x:t.x,y:t.y}),t.event=e},this._onEvent=e=>{let t=gl[e.type],n=e.offsetCenter,r=this._getCanvasIdFromEvent(e);if(!t||!n||!this.layerManager)return;let i=this.layerManager.getLayers(),a=this._getInternalPickingMode();if(a){if(a===`sync`){let t=e.type===`click`&&this._shouldUnproject3D(i)?this._getFirstPickedInfo(this._pickPointSync(this._getPointPickOptions(n.x,n.y,{unproject3D:!0,canvasId:r},i))):this._getLastPointerDownPickingInfo(n.x,n.y,r,i);this._dispatchPickingEvent(t,e);return}(this._lastPointerDownInfoPromise||Promise.resolve(this._getLastPointerDownPickingInfo(n.x,n.y,r,i))).then(t=>{this._dispatchPickingEvent(t,e)}).catch(e=>this.props.onError?.(e))}},this._onPointerDown=e=>{let t=e.offsetCenter,n=this._getCanvasIdFromEvent(e);if(!t)return;let r=this._getInternalPickingMode();if(!r)return;let i=this.layerManager?.getLayers()||[],a=++this._pointerDownPickSequence;if(r===`sync`){let e=this._pickPointSync({x:t.x,y:t.y,canvasId:n,radius:this.props.pickingRadius}),r=this._getFirstPickedInfo(e);this._lastPointerDownInfo=r,this._lastPointerDownInfoPromise=Promise.resolve(r);return}let o=this._pickPointAsync(this._getPointPickOptions(t.x,t.y,{canvasId:n},i)).then(e=>this._getFirstPickedInfo(e)).then(e=>(a===this._pointerDownPickSequence&&(this._lastPointerDownInfo=e),e)).catch(e=>{this.props.onError?.(e);let r=this.deckPicker&&this.viewManager?this._getLastPointerDownPickingInfo(t.x,t.y,n,i):{};return a===this._pointerDownPickSequence&&(this._lastPointerDownInfo=r),r});this._lastPointerDownInfo=null,this._lastPointerDownInfoPromise=o};let t=e;this.props={...Q_,...e},e=this.props,this._validateCanvasConfiguration(e),e.viewState&&e.initialViewState&&U.warn("View state tracking is disabled. Use either `initialViewState` for auto update or `viewState` for manual update.")(),this.viewState=this.props.initialViewState,e.device&&(this.device=e.device,this._setDeviceCanvasContext(e.device));let n=this.device;!n&&e.gl&&(e.gl instanceof WebGLRenderingContext&&U.error(`WebGL1 context not supported.`)(),n=Gm.attach(e.gl,{_cacheShaders:!0,_cachePipelines:!0,...this.props.deviceProps})),n||=this._createDevice(e),this.animationLoop=this._createAnimationLoop(n,e),this.setProps(t),e._typedArrayManagerProps&&md.setOptions(e._typedArrayManagerProps),this.animationLoop.start()}finalize(){this._restoreDeviceResizeHandler(),this.animationLoop?.stop(),this.animationLoop?.destroy(),this.animationLoop=null,this._hoverPickSequence++,this._pointerDownPickSequence++,this._lastPointerDownInfo=null,this._lastPointerDownInfoPromise=null,this.layerManager?.finalize(),this.layerManager=null,this.viewManager?.finalize(),this.viewManager=null,this.effectManager?.finalize(),this.effectManager=null,this.deckRenderer?.finalize(),this.deckRenderer=null,this.deckPicker?.finalize(),this.deckPicker=null,Object.keys(this._canvasManager.targets).length||this.eventManager?.destroy(),this.eventManager=null,this.eventManagers={},this.widgetManager?.finalize(),this.widgetManager=null,this._canvasManager.finalize(),this._isMultiCanvasMode()?this.canvas=null:this.canvas&&this.canvas===this._ownedCanvas&&(this.canvas.parentElement?.removeChild(this.canvas),this.canvas=null,this._ownedCanvas=null),this._canvasContext=null}setProps(e){this.stats.get(`setProps Time`).timeStart(),`onLayerHover`in e&&U.removed(`onLayerHover`,`onHover`)(),`onLayerClick`in e&&U.removed(`onLayerClick`,`onClick`)(),e.initialViewState&&!ap(this.props.initialViewState,e.initialViewState,3)&&(this.viewState=e.initialViewState),q(!(`_canvases`in e)||Array.isArray(e._canvases)===this._isMultiCanvasMode()),Object.assign(this.props,e),this._validateCanvasConfiguration(this.props),this._validateInternalPickingMode(),this.device&&this._isMultiCanvasMode()&&this._syncCanvasTargets(),this._setCanvasSize(this.props);let t=Object.create(this.props);if(Object.assign(t,{views:this._getViews(),width:this.width,height:this.height,viewState:this._getViewState(),eventManagers:this.eventManagers}),e.device&&e.device.id!==this.device?.id){let t=e.device.getDefaultCanvasContext();this.animationLoop?.stop(),!this._isMultiCanvasMode()&&this.canvas!==t.canvas&&(this.canvas?.remove(),this.eventManager?.destroy(),this.canvas=null),this._setDeviceCanvasContext(e.device),U.log(`recreating animation loop for new device! id=${e.device.id}`)(),this.animationLoop=this._createAnimationLoop(e.device,e),this.animationLoop.start()}if(this.animationLoop?.setProps(t),e.useDevicePixels!==void 0&&this._canvasContext?.setProps){this._canvasContext.setProps({useDevicePixels:e.useDevicePixels});for(let t of Object.values(this._canvasManager.targets))t.presentationContext.setProps({useDevicePixels:e.useDevicePixels})}this.layerManager&&(this.viewManager.setProps(t),this.layerManager.activateViewport(this.getViewports()[0]),this.layerManager.setProps(t),this.effectManager.setProps(t),this.deckRenderer.setProps(t),this.deckPicker.setProps(t),this.widgetManager.setProps(t)),this.stats.get(`setProps Time`).timeEnd()}needsRedraw(e={clearRedrawFlags:!1}){if(!this.layerManager)return!1;if(this.props._animate)return`Deck._animate`;let t=this._needsRedraw;e.clearRedrawFlags&&(this._needsRedraw=!1);let n=this.viewManager.needsRedraw(e),r=this.layerManager.needsRedraw(e),i=this.effectManager.needsRedraw(e),a=this.deckRenderer.needsRedraw(e);return t=t||n||r||i||a,t}redraw(e){if(!this.layerManager)return;let t=this.needsRedraw({clearRedrawFlags:!0});t=e||t,t&&(this.stats.get(`Redraw Count`).incrementCount(),this.props._customRender?this.props._customRender(t):this._drawLayers(t))}get isInitialized(){return this.viewManager!==null}getViews(){return q(this.viewManager),this.viewManager.views}getView(e){return q(this.viewManager),this.viewManager.getView(e)}getViewports(e){return q(this.viewManager),this.viewManager.getViewports(e)}getCanvas(){return this.canvas}getCanvasContext(e){let t=e?this.viewManager?.getView(e)?.props.canvasId:void 0;return this._getCanvasContext(t)}getEventManager(e){if(!e||!this.viewManager)return this.eventManager;let t=this.viewManager.getCanvasId(e)||`default-canvas`;return this.eventManagers[t]||this.eventManager}async pickObjectAsync(e){let t=(await this._pickAsync(`pickObjectAsync`,`pickObject Time`,e)).result;return t.length?t[0]:null}async pickObjectsAsync(e){return await this._pickAsync(`pickObjectsAsync`,`pickObjects Time`,e)}pickObject(e){let t=this._pick(`pickObject`,`pickObject Time`,e).result;return t.length?t[0]:null}pickMultipleObjects(e){return e.depth=e.depth||10,this._pick(`pickObject`,`pickMultipleObjects Time`,e).result}pickObjects(e){return this._pick(`pickObjects`,`pickObjects Time`,e)}_pickPositionForController(e,t,n){return this._getInternalPickingMode()===`sync`?this.pickObject({x:e,y:t,radius:0,unproject3D:!0,canvasId:n?this.viewManager?.getCanvasId(n):void 0}):null}_addResources(e,t=!1){for(let n in e)this.layerManager.resourceManager.add({resourceId:n,data:e[n],forceUpdate:t})}_removeResources(e){for(let t of e)this.layerManager.resourceManager.remove(t)}_addDefaultEffect(e){this.effectManager.addDefaultEffect(e)}_addDefaultShaderModule(e){this.layerManager.addDefaultShaderModule(e)}_removeDefaultShaderModule(e){this.layerManager?.removeDefaultShaderModule(e)}_resolveInternalPickingMode(){let{pickAsync:e}=this.props,t=this.device?.type||this.props.deviceProps?.type;if(e===`auto`)return t===`webgpu`?`async`:`sync`;if(e===`sync`&&t===`webgpu`)throw Error('`pickAsync: "sync"` is not supported when Deck is using a WebGPU device.');return e}_getInternalPickingMode(){try{return this._resolveInternalPickingMode()}catch(e){return this.props.onError?.(e),null}}_validateInternalPickingMode(){this._getInternalPickingMode()}_getFirstPickedInfo({result:e,emptyInfo:t}){return e[0]||t}_shouldUnproject3D(e=this.layerManager?.getLayers()||[]){return e.some(e=>e.props.pickable===`3d`)}_getPointPickOptions(e,t,n={},r=this.layerManager?.getLayers()||[]){return{x:e,y:t,canvasId:n.canvasId,radius:this.props.pickingRadius,unproject3D:this._shouldUnproject3D(r),...n}}_pickPointSync(e){return this._pick(`pickObject`,`pickObject Time`,e)}_pickPointAsync(e){return this._pickAsync(`pickObjectAsync`,`pickObject Time`,e)}_getLastPointerDownPickingInfo(e,t,n,r=this.layerManager?.getLayers()||[]){return this.deckPicker.getLastPickedObject({x:e,y:t,layers:r,viewports:this.getViewports({x:e,y:t,canvasId:n})},this._lastPointerDownInfo)}_applyHoverCallbacks({result:e,emptyInfo:t},n){if(!this.widgetManager)return;this.cursorState.isHovering=e.length>0;let r=t,i=!1;for(let t of e)r=t,i=t.layer?.onHover(t,n)||i;i||(this.props.onHover?.(r,n),this.widgetManager.onHover(r,n))}_dispatchPickingEvent(e,t){if(!this.layerManager||!this.widgetManager)return;let n=gl[t.type];if(!n)return;let{layer:r}=e,i=r&&(r[n]||r.props[n]),a=this.props[n],o=!1;i&&(o=i.call(r,e,t)),o||(a?.(e,t),this.widgetManager.onEvent(e,t))}_pickAsync(e,t,n){q(this.deckPicker);let{stats:r}=this,i=this._isMultiCanvasMode()?n.canvasId||this._getDefaultCanvasId():n.canvasId,a=this._getCanvasContext(i)||void 0;r.get(`Pick Count`).incrementCount(),r.get(t).timeStart(),this._resizeForCanvasTarget(i);let o=this.deckPicker[e]({layers:this.layerManager.getLayers(n),views:this.viewManager.getViews(),viewports:this.getViewports({...n,canvasId:i}),onViewportActive:this.layerManager.activateViewport,effects:this.effectManager.getEffects(),...n,canvasId:i,canvasContext:a});return r.get(t).timeEnd(),o}_pick(e,t,n){q(this.deckPicker);let{stats:r}=this,i=this._isMultiCanvasMode()?n.canvasId||this._getDefaultCanvasId():n.canvasId,a=this._getCanvasContext(i)||void 0;r.get(`Pick Count`).incrementCount(),r.get(t).timeStart(),this._resizeForCanvasTarget(i);let o=this.deckPicker[e]({layers:this.layerManager.getLayers(n),views:this.viewManager.getViews(),viewports:this.getViewports({...n,canvasId:i}),onViewportActive:this.layerManager.activateViewport,effects:this.effectManager.getEffects(),...n,canvasId:i,canvasContext:a});return r.get(t).timeEnd(),o}_createCanvas(e){let t=e.canvas;return typeof t==`string`&&(t=document.getElementById(t),q(t)),t?this._ownedCanvas=null:(t=document.createElement(`canvas`),t.id=e.id||`deckgl-overlay`,e.width&&typeof e.width==`number`&&(t.width=e.width),e.height&&typeof e.height==`number`&&(t.height=e.height),(e.parent||document.body).appendChild(t),this._ownedCanvas=t),Object.assign(t.style,e.style),t}_isMultiCanvasMode(){return Array.isArray(this.props._canvases)}_getDefaultCanvasId(){return this._canvasManager.order[0]||`default-canvas`}_validateCanvasConfiguration(e){Array.isArray(e._canvases)&&(q(!e.canvas),q(!e.gl),q(!e.device?.canvasContext||e.device.getDefaultCanvasContext().offscreenCanvas))}_createEventManager(e){let t=new fl(e,{touchAction:this.props.touchAction,recognizers:Object.keys(_l).map(e=>{let[t,n,r,i]=_l[e],a=this.props.eventRecognizerOptions?.[e];return{recognizer:new t({...n,...a,event:e}),recognizeWith:r,requireFailure:i}}),events:{pointerdown:this._onPointerDown,pointermove:this._onPointerMove,pointerleave:this._onPointerMove}});for(let e in gl)e===`dblclick`?t.watch(e,this._onEvent):t.on(e,this._onEvent);return t}_getEventRoot(e){return e.closest(`.deck-events-root`)||this.props.parent?.querySelector(`.deck-events-root`)||e}_syncCanvasTargets(){if(!this.device||!this._isMultiCanvasMode())return;this._canvasManager.syncCanvasEntries({device:this.device,canvases:this.props._canvases||[],useDevicePixels:this.props.useDevicePixels}),this.eventManagers=this._canvasManager.eventManagers;let e=this._getDefaultCanvasId();this.eventManager=this.eventManagers[e]||null,this.canvas=this._canvasManager.targets[e]?.canvas||null}_setCanvasContext(e){this._canvasContext=e,`style`in e.canvas&&(this.canvas=e.canvas)}_setDeviceCanvasContext(e,t={}){let n=e.getDefaultCanvasContext();this._setCanvasContext(n),this._setDeviceResizeHandler(e,t)}_setDeviceResizeHandler(e,t={}){let n=!!t.syncDrawingBuffer;if(this._deviceResizeHandler?.device===e){this._deviceResizeHandler.syncDrawingBuffer=n;return}this._restoreDeviceResizeHandler();let r=e=>{this._isMultiCanvasMode()?this._updateMultiCanvasDimensions():e===this._canvasContext&&this._canvasContext&&this._onCanvasContextResize(this._canvasContext,{syncDrawingBuffer:this._deviceResizeHandler?.syncDrawingBuffer})};e.props.onResize=r,this._deviceResizeHandler={device:e,onResize:r,syncDrawingBuffer:n}}_restoreDeviceResizeHandler(){let e=this._deviceResizeHandler;e&&e.device.props?.onResize===e.onResize&&(e.device.props.onResize=Z_),this._deviceResizeHandler=null}_setCanvasSize(e){if(this._isMultiCanvasMode()||!this.canvas)return;let{width:t,height:n}=e;if(t||t===0){let e=Number.isFinite(t)?`${t}px`:t;this.canvas.style.width=e}if(n||n===0){let t=Number.isFinite(n)?`${n}px`:n;this.canvas.style.position=e.style?.position||`absolute`,this.canvas.style.height=t}}_getCanvasIdFromEvent(e){return this._canvasManager.getCanvasIdFromEvent(e?.rootElement)}_getCanvasContext(e){return this._canvasManager.getTarget(e)?.presentationContext||this._canvasContext}_resizeForCanvasTarget(e){let t=this._canvasManager.getTarget(e);if(!t||!this.device?.canvasContext)return;let[n,r]=t.presentationContext.getDrawingBufferSize();this.device.canvasContext.setDrawingBufferSize(n,r)}_createDeviceCanvas(e){if(this._isMultiCanvasMode()){let t=globalThis.OffscreenCanvas;if(!t)throw Error("`_canvases` requires OffscreenCanvas support.");return new t(typeof e.width==`number`&&Number.isFinite(e.width)?e.width:1,typeof e.height==`number`&&Number.isFinite(e.height)?e.height:1)}return this._createCanvas(e)}_updateCanvasSize(e=this._canvasContext){if(this._isMultiCanvasMode()){this._updateMultiCanvasDimensions();return}let{canvas:t}=this,[n,r]=e?e.getCSSSize():[t?.clientWidth??t?.width??0,t?.clientHeight??t?.height??0];(n!==this.width||r!==this.height)&&(this.width=n,this.height=r,this.viewManager?.setProps({width:n,height:r}),this.layerManager?.activateViewport(this.getViewports()[0]),this.props.onResize({width:n,height:r},e||void 0))}_onCanvasContextResize(e,t={}){if(t.syncDrawingBuffer){let{width:t,height:n}=e.canvas;e.setDrawingBufferSize(t,n)}this._needsRedraw=`Canvas resized`,this._updateCanvasSize(e)}_updateMultiCanvasDimensions(){let[e,t]=this._getCanvasContext()?.getCSSSize()||[0,0];(e!==this.width||t!==this.height)&&(this.width=e,this.height=t,this.props.onResize({width:e,height:t})),this._needsRedraw=`Canvas resized`,this.viewManager?.setNeedsUpdate(`Canvas resized`),this.viewManager?.setProps({width:this.width,height:this.height})}_createAnimationLoop(e,t){let{gl:n,onError:r}=t;return new $d({device:e,autoResizeDrawingBuffer:!n&&!Array.isArray(t._canvases),autoResizeViewport:!1,onInitialize:e=>this._setDevice(e.device),onRender:this._onRenderFrame.bind(this),onError:r})}_createDevice(e){let t=this.props.deviceProps?.createCanvasContext,n=typeof t==`object`?t:void 0,r={adapters:[],_cacheShaders:!0,_cachePipelines:!0,...e.deviceProps};r.adapters.includes(Gm)||r.adapters.push(Gm);let i={alphaMode:this.props.deviceProps?.type===`webgpu`?`premultiplied`:void 0};return Di.createDevice({_reuseDevices:!0,type:`webgl`,...r,createCanvasContext:{...i,...n,canvas:this._createDeviceCanvas(e),useDevicePixels:this.props.useDevicePixels,autoResize:!0}})}_getViewState(){return this.props.viewState||this.viewState}_getViews(){let{views:e}=this.props,t=Array.isArray(e)?e:e?[e]:[new $p({id:`default-view`})];return t.length&&this.props.controller&&(t[0]=t[0].clone({controller:this.props.controller})),t}_onContextLost(){let{onError:e}=this.props;this.animationLoop&&e&&e(Error(`WebGL context is lost`))}_pickAndCallback(){let{_pickRequest:e}=this;if(e.event){let t=e.event,n=this.layerManager?.getLayers()||[],r=this._getPointPickOptions(e.x,e.y,{canvasId:e.canvasId,radius:e.radius,mode:e.mode},n),i=this._getInternalPickingMode(),a=++this._hoverPickSequence;if(e.event=null,e.canvasId=void 0,!i)return;if(i===`sync`){this._applyHoverCallbacks(this._pickPointSync(r),t);return}this._pickPointAsync(r).then(({result:e,emptyInfo:n})=>{a===this._hoverPickSequence&&this._applyHoverCallbacks({result:e,emptyInfo:n},t)}).catch(e=>this.props.onError?.(e))}}_updateCursor(){let e=this.props.getCursor(this.cursorState);if(this._isMultiCanvasMode()){for(let t of Object.values(this._canvasManager.targets))t.canvas.style.cursor=e;return}let t=this.props.parent||this.canvas;t&&(t.style.cursor=e)}_setDevice(e){if(this.device=e,this._validateInternalPickingMode(),!this.animationLoop)return;this._setDeviceCanvasContext(e,{syncDrawingBuffer:!!(this.props.gl&&this.props.device!==e)}),this._isMultiCanvasMode()?this._syncCanvasTargets():this.canvas&&!this.canvas.isConnected&&this.props.parent&&this.props.parent.insertBefore(this.canvas,this.props.parent.firstChild),this.device.type===`webgl`&&this.device.setParametersWebGL({blend:!0,blendFunc:[770,771,1,771],polygonOffsetFill:!0,depthTest:!0,depthFunc:515}),this.props.onDeviceInitialized(this.device),this.device.type===`webgl`&&this.props.onWebGLInitialized(this.device.gl);let t=new qd;if(t.play(),this.animationLoop.attachTimeline(t),!this._isMultiCanvasMode()){let e=this.canvas&&this._getEventRoot(this.canvas);q(e),this.eventManager=this._createEventManager(e),this.eventManagers={[op]:this.eventManager}}this.viewManager=new sp({timeline:t,eventManager:this.eventManager,eventManagers:this.eventManagers,getCanvasContext:this._isMultiCanvasMode()?this.getCanvasContext.bind(this):void 0,onViewStateChange:this._onViewStateChange.bind(this),onInteractionStateChange:this._onInteractionStateChange.bind(this),pickPosition:this._pickPositionForController.bind(this),views:this._getViews(),viewState:this._getViewState(),width:this.width,height:this.height});let n=this.viewManager.getViewports()[0];this.layerManager=new ip(this.device,{deck:this,stats:this.stats,viewport:n,timeline:t}),this.effectManager=new nm({deck:this,device:this.device}),this.deckRenderer=new am(this.device,{stats:this.stats}),this.deckPicker=new pm(this.device,{stats:this.stats});let r=this.props.parent?.querySelector(`.deck-widgets-root`)||(this._isMultiCanvasMode()?this.props.parent||this.canvas?.parentElement:null)||this.canvas?.parentElement;this.widgetManager=new _m({deck:this,parentElement:r}),this.widgetManager.addDefault(new Sm),this.setProps({}),this._updateCanvasSize(this._canvasContext),this.props.onLoad()}_drawLayers(e,t){let{device:n,gl:r}=this.layerManager.context;this.props.onBeforeRender({device:n,gl:r});let i={target:this.props._framebuffer,layers:this.layerManager.getLayers(),viewports:this.viewManager.getViewports(),onViewportActive:this.layerManager.activateViewport,views:this.viewManager.getViews(),pass:`screen`,effects:this.effectManager.getEffects(),...t};if(this._isMultiCanvasMode()&&i.pass===`screen`&&!i.target&&this._canvasManager.order.length)for(let e of this._canvasManager.order){let t=i.viewports.filter(t=>this.viewManager.getCanvasId(t.id)===e);if(!t.length){let t=this._canvasManager.targets[e];this._resizeForCanvasTarget(e),this.deckRenderer?.renderLayers({...i,canvasContext:t.presentationContext,target:t.presentationContext.getCurrentFramebuffer(),viewports:[],clearCanvas:!0}),t.presentationContext.present();continue}let n=this._canvasManager.targets[e];this._resizeForCanvasTarget(e);let r=n.presentationContext.getCurrentFramebuffer();this.deckRenderer?.renderLayers({...i,canvasContext:n.presentationContext,target:r,viewports:t}),n.presentationContext.present()}else this.deckRenderer?.renderLayers(i);i.pass===`screen`&&this.widgetManager.onRedraw({viewports:i.viewports,layers:i.layers}),this.props.onAfterRender({device:n,gl:r})}_onRenderFrame(){this._getFrameStats(),this._metricsCounter++%60==0&&(this._getMetrics(),this.stats.reset(),U.table(4,this.metrics)(),this.props._onMetrics&&this.props._onMetrics(this.metrics)),this._updateCursor(),this.layerManager.updateLayers(),this._pickAndCallback(),this.redraw(),this.viewManager&&this.viewManager.updateViewStates()}_onViewStateChange(e){let t=this.props.onViewStateChange(e)||e.viewState;this.viewState&&(this.viewState={...this.viewState,[e.viewId]:t},this.props.viewState||this.viewManager&&this.viewManager.setProps({viewState:this.viewState}))}_onInteractionStateChange(e){this.cursorState.isDragging=e.isDragging||!1,this.props.onInteractionStateChange(e)}_getFrameStats(){let{stats:e}=this;e.get(`frameRate`).timeEnd(),e.get(`frameRate`).timeStart();let t=this.animationLoop.stats;e.get(`GPU Time`).addTime(t.get(`GPU Time`).lastTiming),e.get(`CPU Time`).addTime(t.get(`CPU Time`).lastTiming)}_getMetrics(){let{metrics:e,stats:t}=this;e.fps=t.get(`frameRate`).getHz(),e.setPropsTime=t.get(`setProps Time`).time,e.updateAttributesTime=t.get(`Update Attributes`).time,e.framesRedrawn=t.get(`Redraw Count`).count,e.pickTime=t.get(`pickObject Time`).time+t.get(`pickMultipleObjects Time`).time+t.get(`pickObjects Time`).time,e.pickCount=t.get(`Pick Count`).count,e.layersCount=this.layerManager?.layers.length??0,e.drawLayersCount=t.get(`Layers rendered`).lastSampleCount,e.pickLayersCount=t.get(`Layers picked`).lastSampleCount,e.updateLayersCount=t.get(`Layer updates`).count,e.updateAttributesCount=t.get(`Attributes updated`).count,e.gpuTime=t.get(`GPU Time`).time,e.cpuTime=t.get(`CPU Time`).time,e.gpuTimePerFrame=t.get(`GPU Time`).getAverageTime(),e.cpuTimePerFrame=t.get(`CPU Time`).getAverageTime();let n=Di.stats.get(`GPU Time and Memory`);e.bufferMemory=n.get(`Buffer Memory`).count,e.textureMemory=n.get(`Texture Memory`).count,e.renderbufferMemory=n.get(`Renderbuffer Memory`).count,e.gpuMemory=n.get(`GPU Memory`).count}};$_.defaultProps=Q_,$_.VERSION=mi;function ev(e){switch(e){case`float64`:return Float64Array;case`uint8`:case`unorm8`:return Uint8ClampedArray;default:return c(e)}}var tv=d.getDataType.bind(d);function nv(e,t,n){if(t.size>4)return null;let r=n===`webgpu`&&t.type===`uint8`?`unorm8`:t.type,i=t.size,a=!!(n!==`webgpu`&&i===3&&r&&[`uint8`,`sint8`,`unorm8`,`snorm8`,`uint16`,`sint16`,`unorm16`,`snorm16`].includes(r));return{attribute:e,format:i>1?`${r}x${i}${a?`-webgl`:``}`:t.type,byteOffset:t.offset||0}}function rv(e){return e.stride||e.size*e.bytesPerElement}function iv(e,t){return e.type===t.type&&e.size===t.size&&rv(e)===rv(t)&&(e.offset||0)===(t.offset||0)}function av(e,t){t.offset&&U.removed(`shaderAttribute.offset`,`vertexOffset, elementOffset`)();let n=rv(e),r=t.vertexOffset===void 0?e.vertexOffset||0:t.vertexOffset,i=t.elementOffset||0,a=r*n+i*e.bytesPerElement+(e.offset||0);return{...t,offset:a,stride:n}}function ov(e,t){let n=av(e,t);return{high:n,low:{...n,offset:n.offset+e.size*4}}}var sv=class{constructor(e,t,n){this._buffer=null,this.device=e,this.id=t.id||``,this.size=t.size||1;let r=t.logicalType||t.type,i=r===`float64`,{defaultValue:a}=t;a=Number.isFinite(a)?[a]:a||Array(this.size).fill(0);let o;o=i?`float32`:!r&&t.isIndexed?`uint32`:r||`float32`;let s=ev(r||o);this.doublePrecision=i,i&&t.fp64===!1&&(s=Float32Array),this.value=null,this.settings={...t,defaultType:s,defaultValue:a,logicalType:r,type:o,normalized:o.includes(`norm`),size:this.size,bytesPerElement:s.BYTES_PER_ELEMENT},this.state={...n,externalBuffer:null,bufferAccessor:this.settings,allocatedValue:null,numInstances:0,bounds:null,constant:!1}}get isConstant(){return this.state.constant}get buffer(){return this._buffer}get byteOffset(){let e=this.getAccessor();return e.vertexOffset?e.vertexOffset*rv(e):0}get numInstances(){return this.state.numInstances}set numInstances(e){this.state.numInstances=e}get isDoublePrecisionBuffer(){return this._shouldSplitDoublePrecisionValue(this.value)}delete(){this._buffer&&=(this._buffer.delete(),null),md.release(this.state.allocatedValue),this.state.allocatedValue=null}getBuffer(){return this.state.constant&&this.device.type!==`webgpu`?null:this.state.externalBuffer||this._buffer}getValue(e=this.id,t=null){let n={};if(this.state.constant){let r=this.value;if(this.device.type===`webgpu`&&this._buffer)n[e]=this._buffer;else if(t){let i=av(this.getAccessor(),t),a=i.offset/r.BYTES_PER_ELEMENT,o=i.size||this.size;n[e]=r.subarray(a,a+o)}else n[e]=r}else n[e]=this.getBuffer();return this.doublePrecision&&(this.isDoublePrecisionBuffer?n[`${e}64Low`]=n[e]:n[`${e}64Low`]=new Float32Array(this.size)),n}_getBufferLayout(e=this.id,t=null){let n=this.getAccessor(),r=[],i={name:this.id,byteStride:this.device.type===`webgpu`&&this.state.constant?0:rv(n)};if(this.doublePrecision){let i=ov(n,t||{});r.push(nv(e,{...n,...i.high},this.device.type),nv(`${e}64Low`,{...n,...i.low},this.device.type))}else if(t){let i=av(n,t);r.push(nv(e,{...n,...i},this.device.type))}else r.push(nv(e,n,this.device.type));return i.attributes=r.filter(Boolean),i}setAccessor(e){this.state.bufferAccessor=e}getAccessor(){return this.state.bufferAccessor}getBounds(){if(this.state.bounds)return this.state.bounds;let e=null;if(this.state.constant&&this.value){let t=Array.from(this.value);e=[t,t]}else{let{value:t,numInstances:n,size:r}=this,i=n*r;if(t&&i&&t.length>=i){let n=Array(r).fill(1/0),a=Array(r).fill(-1/0);for(let e=0;e<i;)for(let i=0;i<r;i++){let r=t[e++];r<n[i]&&(n[i]=r),r>a[i]&&(a[i]=r)}e=[n,a]}}return this.state.bounds=e,e}setData(e){let{state:t}=this,r;r=ArrayBuffer.isView(e)?{value:e}:e instanceof n?{buffer:e}:e;let i={...this.settings,...r};if(ArrayBuffer.isView(r.value)){if(!r.type){if(this.doublePrecision&&r.value instanceof Float64Array)i.type=`float32`;else{let e=tv(r.value);i.type=i.normalized?e.replace(`int`,`norm`):e}}i.bytesPerElement=r.value.BYTES_PER_ELEMENT,i.stride=rv(i)}if(t.bounds=null,r.constant){let e=r.value;if(e=this._normalizeValue(e,[],0),this.settings.normalized&&(e=this.normalizeConstant(e)),t.constant&&this._areValuesEqual(e,this.value))return!1;t.externalBuffer=null,t.constant=!0,this.value=ArrayBuffer.isView(e)?e:new Float32Array(e)}else if(r.buffer)t.externalBuffer=r.buffer,t.constant=!1,this.value=r.value||null;else if(r.value){this._checkExternalBuffer(r);let e=r.value,n=e;t.externalBuffer=null,t.constant=!1,this.value=e,this._shouldSplitDoublePrecisionValue(n)&&(n=Cd(n,i),e instanceof Float32Array&&(i.stride=i.size*2*Float32Array.BYTES_PER_ELEMENT));let{buffer:a}=this,o=rv(i),s=(i.vertexOffset||0)*o;if(this.settings.isIndexed){let e=this.settings.defaultType;n.constructor!==e&&(n=new e(n))}let c=n.byteLength+s+o*2;(!a||a.byteLength<c)&&(a=this._createBuffer(c)),a.write(n,s)}return this.setAccessor(i),!0}updateSubBuffer(e={}){this.state.bounds=null;let t=this.value,{startOffset:n=0,endOffset:r}=e,i=this._shouldSplitDoublePrecisionValue(t);this.buffer.write(i?Cd(t,{size:this.size,startIndex:n,endIndex:r}):t.subarray(n,r),n*(i?8:t.BYTES_PER_ELEMENT)+this.byteOffset)}allocate(e,t=!1){let{state:n}=this,r=n.allocatedValue,i=md.allocate(r,e+1,{size:this.size,type:this.settings.defaultType,copy:t});this.value=i;let a=this._shouldSplitDoublePrecisionValue(i),o=a&&i instanceof Float32Array?{...this.settings,stride:this.size*2*Float32Array.BYTES_PER_ELEMENT}:this.settings;this.setAccessor(o);let{byteOffset:s}=this,{buffer:c}=this,l=i.byteLength*(a&&i instanceof Float32Array?2:1);return(!c||c.byteLength<l+s)&&(c=this._createBuffer(l+s),t&&r&&c.write(this._shouldSplitDoublePrecisionValue(r)?Cd(r,this):r,s)),n.allocatedValue=i,n.constant=!1,n.externalBuffer=null,!0}_shouldSplitDoublePrecisionValue(e){return!!(this.doublePrecision&&(e instanceof Float64Array||this.device.type===`webgpu`&&e instanceof Float32Array))}_checkExternalBuffer(e){let{value:t}=e;if(!ArrayBuffer.isView(t))throw Error(`Attribute ${this.id} value is not TypedArray`);let n=this.settings.defaultType,r=!1;if(this.doublePrecision&&(r=t.BYTES_PER_ELEMENT<4),r)throw Error(`Attribute ${this.id} does not support ${t.constructor.name}`);!(t instanceof n)&&this.settings.normalized&&!(`normalized`in e)&&U.warn(`Attribute ${this.id} is normalized`)()}normalizeConstant(e){switch(this.settings.type){case`snorm8`:return new Float32Array(e).map(e=>(e+128)/255*2-1);case`snorm16`:return new Float32Array(e).map(e=>(e+32768)/65535*2-1);case`unorm8`:return new Float32Array(e).map(e=>e/255);case`unorm16`:return new Float32Array(e).map(e=>e/65535);default:return e}}_normalizeValue(e,t,n){let{defaultValue:r,size:i}=this.settings;if(Number.isFinite(e))return t[n]=e,t;if(!e){let e=i;for(;--e>=0;)t[n+e]=r[e];return t}switch(i){case 4:t[n+3]=Number.isFinite(e[3])?e[3]:r[3];case 3:t[n+2]=Number.isFinite(e[2])?e[2]:r[2];case 2:t[n+1]=Number.isFinite(e[1])?e[1]:r[1];case 1:t[n+0]=Number.isFinite(e[0])?e[0]:r[0];break;default:let a=i;for(;--a>=0;)t[n+a]=Number.isFinite(e[a])?e[a]:r[a]}return t}_areValuesEqual(e,t){if(!e||!t)return!1;let{size:n}=this;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}_createBuffer(e){this._buffer&&this._buffer.destroy();let{isIndexed:t,type:r}=this.settings,i=this.device.type===`webgpu`&&!t?n.VERTEX|n.STORAGE|n.COPY_DST|n.COPY_SRC:(t?n.INDEX:n.VERTEX)|n.COPY_DST;return this._buffer=this.device.createBuffer({...this._buffer?.props,id:this.id,usage:i,indexType:t?r:void 0,byteLength:e}),this._buffer}},cv=[],lv=[];function uv(e,t=0,n=1/0){let r=cv,i={index:-1,data:e,target:[]};return e?typeof e[Symbol.iterator]==`function`?r=e:e.length>0&&(lv.length=e.length,r=lv):r=cv,(t>0||Number.isFinite(n))&&(r=(Array.isArray(r)?r:Array.from(r)).slice(t,n),i.index=t-1),{iterable:r,objectInfo:i}}function dv(e){return e&&e[Symbol.asyncIterator]}function fv(e,t){let{size:n,stride:r,offset:i,startIndices:a,nested:o}=t,s=e.BYTES_PER_ELEMENT,c=r?r/s:n,l=i?i/s:0,u=Math.floor((e.length-l)/c);return(t,{index:r,target:i})=>{if(!a){let t=r*c+l;for(let r=0;r<n;r++)i[r]=e[t+r];return i}let s=a[r],d=a[r+1]||u,f;if(o){f=Array(d-s);for(let t=s;t<d;t++){let r=t*c+l;i=Array(n);for(let t=0;t<n;t++)i[t]=e[r+t];f[t-s]=i}}else if(c===n)f=e.subarray(s*n+l,d*n+l);else{f=new e.constructor((d-s)*n);let t=0;for(let r=s;r<d;r++){let i=r*c+l;for(let r=0;r<n;r++)f[t++]=e[i+r]}}return f}}var pv=[],mv=[[0,1/0]];function hv(e,t){if(e===mv||(t[0]<0&&(t[0]=0),t[0]>=t[1]))return e;let n=[],r=e.length,i=0;for(let a=0;a<r;a++){let r=e[a];r[1]<t[0]?(n.push(r),i=a+1):r[0]>t[1]?n.push(r):t=[Math.min(r[0],t[0]),Math.max(r[1],t[1])]}return n.splice(i,0,t),n}var gv={interpolation:{duration:0,easing:e=>e},spring:{stiffness:.05,damping:.5}};function _v(e,t){if(!e)return null;Number.isFinite(e)&&(e={type:`interpolation`,duration:e});let n=e.type||`interpolation`;return{...gv[n],...t,...e,type:n}}var vv=class extends sv{constructor(e,t){super(e,t,{startIndices:null,constantValue:null,lastExternalBuffer:null,binaryValue:null,binaryAccessor:null,needsUpdate:!0,needsRedraw:!1,layoutChanged:!1,updateRanges:mv}),this.constant=!1,this.settings.update=t.update||(t.accessor?this._autoUpdater:void 0),Object.seal(this.settings),Object.seal(this.state),this._validateAttributeUpdaters()}get startIndices(){return this.state.startIndices}set startIndices(e){this.state.startIndices=e}needsUpdate(){return this.state.needsUpdate}needsRedraw({clearChangedFlags:e=!1}={}){let t=this.state.needsRedraw;return this.state.needsRedraw=t&&!e,t}layoutChanged(){return this.state.layoutChanged}setAccessor(e){var t;(t=this.state).layoutChanged||(t.layoutChanged=!iv(e,this.getAccessor())),super.setAccessor(e)}getUpdateTriggers(){let{accessor:e}=this.settings;return[this.id].concat(typeof e!=`function`&&e||[])}supportsTransition(){return!!this.settings.transition}getTransitionSetting(e){if(!e||!this.supportsTransition())return null;let{accessor:t}=this.settings,n=this.settings.transition;return _v(Array.isArray(t)?e[t.find(t=>e[t])]:e[t],n)}setNeedsUpdate(e=this.id,t){if(this.state.needsUpdate=this.state.needsUpdate||e,this.setNeedsRedraw(e),t){let{startRow:e=0,endRow:n=1/0}=t;this.state.updateRanges=hv(this.state.updateRanges,[e,n])}else this.state.updateRanges=mv}clearNeedsUpdate(){this.state.needsUpdate=!1,this.state.updateRanges=pv}setNeedsRedraw(e=this.id){this.state.needsRedraw=this.state.needsRedraw||e}allocate(e){let{state:t,settings:n}=this;if(n.noAlloc)return!1;if(n.update){let n=this.isConstant;return super.allocate(e,t.updateRanges!==mv),t.layoutChanged||=n&&this.device.type===`webgpu`,!0}return!1}updateBuffer({numInstances:e,data:t,props:n,context:r}){if(!this.needsUpdate())return!1;let{state:{updateRanges:i},settings:{update:a,noAlloc:o}}=this,s=!0;if(a){for(let[o,s]of i)a.call(r,this,{data:t,startRow:o,endRow:s,props:n,numInstances:e});if(this.value){if(this.constant||!this.buffer||this.buffer.byteLength<this.value.byteLength+this.byteOffset){if(this.constant){let e=this.value;this.value=null,this.setConstantValue(r,e)}else this.setData({value:this.value,constant:this.constant});this.constant=!1}else for(let[t,n]of i){let r=Number.isFinite(t)?this.getVertexOffset(t):0,i=Number.isFinite(n)?this.getVertexOffset(n):o||!Number.isFinite(e)?this.value.length:e*this.size;super.updateSubBuffer({startOffset:r,endOffset:i})}}this._checkAttributeArray()}else s=!1;return this.clearNeedsUpdate(),this.setNeedsRedraw(),s}setConstantValue(e,t){var n;if(t===void 0||typeof t==`function`)return!1;let r=this.isConstant,i=this.settings.transform&&e?this.settings.transform.call(e,t):t,a=this.settings.defaultType;this.state.constantValue=this._normalizeValue(i,new a(this.size),0);let o=this.setData({constant:!0,value:i});if(this.device.type===`webgpu`){let e=this.state.constantValue;this.doublePrecision&&(e instanceof Float32Array||e instanceof Float64Array)&&(e=Cd(e,{size:this.size}),this.setAccessor({...this.getAccessor(),stride:this.size*2*Float32Array.BYTES_PER_ELEMENT}));let t=this._buffer;(!t||t.byteLength<e.byteLength)&&(t=this._createBuffer(e.byteLength)),t.write(e),(n=this.state).layoutChanged||(n.layoutChanged=!r),this.constant=!1}return o&&this.setNeedsRedraw(),this.clearNeedsUpdate(),!0}getConstantValue(){return this.isConstant?this.state.constantValue:null}setExternalBuffer(e){let{state:t}=this;return e?(this.clearNeedsUpdate(),t.lastExternalBuffer===e||(t.lastExternalBuffer=e,this.setNeedsRedraw(),this.setData(e),!0)):(t.lastExternalBuffer=null,!1)}setBinaryValue(e,t=null){let{state:n,settings:r}=this;if(!e)return n.binaryValue=null,n.binaryAccessor=null,!1;if(r.noAlloc)return!1;if(n.binaryValue===e)return this.clearNeedsUpdate(),!0;if(n.binaryValue=e,this.setNeedsRedraw(),r.transform||t!==this.startIndices){ArrayBuffer.isView(e)&&(e={value:e});let i=e;q(ArrayBuffer.isView(i.value),`invalid ${r.accessor}`);let a=!!i.size&&i.size!==this.size;return n.binaryAccessor=fv(i.value,{size:i.size||this.size,stride:i.stride,offset:i.offset,startIndices:t,nested:a}),!1}return this.clearNeedsUpdate(),this.setData(e),!0}getVertexOffset(e){let{startIndices:t}=this;return(t?e<t.length?t[e]:this.numInstances:e)*this.size}getValue(){let e=this.settings.shaderAttributes,t=super.getValue();if(!e)return t;for(let n in e)Object.assign(t,super.getValue(n,e[n]));return t}getBufferLayout(e){this.state.layoutChanged=!1;let t=this.settings.shaderAttributes,n=super._getBufferLayout(),{stepMode:r}=this.settings;if(n.stepMode=r===`dynamic`?e?e.isInstanced?`instance`:`vertex`:`instance`:r??`vertex`,!t)return n;for(let e in t){let r=super._getBufferLayout(e,t[e]);n.attributes.push(...r.attributes)}return n}_autoUpdater(e,{data:t,startRow:n,endRow:r,props:i,numInstances:a}){let{settings:o,state:s,value:c,size:l,startIndices:u}=e,{accessor:d,transform:f}=o,p=s.binaryAccessor||(typeof d==`function`?d:i[d]);q(typeof p==`function`,`accessor "${d}" is not a function`);let m=e.getVertexOffset(n),{iterable:h,objectInfo:g}=uv(t,n,r);for(let t of h){g.index++;let n=p(t,g);if(f&&(n=f.call(this,n)),u){let t=(g.index<u.length-1?u[g.index+1]:a)-u[g.index];if(n&&Array.isArray(n[0])){let t=m;for(let r of n)e._normalizeValue(r,c,t),t+=l}else n&&n.length>l?c.set(n,m):(e._normalizeValue(n,g.target,0),$f({target:c,source:g.target,start:m,count:t}));m+=t*l}else e._normalizeValue(n,c,m),m+=l}}_validateAttributeUpdaters(){let{settings:e}=this;if(!(e.noAlloc||typeof e.update==`function`))throw Error(`Attribute ${this.id} missing update or accessor`)}_checkAttributeArray(){let{value:e}=this,t=Math.min(4,this.size);if(e&&e.length>=t){let n=!0;switch(t){case 4:n&&=Number.isFinite(e[3]);case 3:n&&=Number.isFinite(e[2]);case 2:n&&=Number.isFinite(e[1]);case 1:n&&=Number.isFinite(e[0]);break;default:n=!1}if(!n)throw Error(`Illegal attribute generated for ${this.id}`)}}},yv=class e{gpuDataEvaluators;format;length;id;_gpuVector;_ownsGPUDataEvaluators;_destroyed=!1;static fromGPUVector(t){if(t.bufferLayout)throw Error(`GPUVectorEvaluator.fromGPUVector() does not accept interleaved vector "${t.name}"`);if(t.data.length===0)throw Error(`GPUVectorEvaluator.fromGPUVector() requires GPUData for "${t.name}"`);return new e({id:t.name,gpuDataEvaluators:t.data.map(e=>L.fromGPUData(e,{id:t.name})),gpuVector:t,format:t.format})}static fromGPUDataEvaluators(t,n={}){return new e({id:n.id,gpuDataEvaluators:t,format:n.format})}constructor({id:e,gpuDataEvaluators:t,gpuVector:n,format:r}){if(t.length===0)throw Error(`GPUVectorEvaluator requires at least one GPUData evaluator`);bv(t),this.id=e,this.gpuDataEvaluators=t,this.format=r??t[0].format,this.length=t.reduce((e,t)=>e+t.length,0),this._gpuVector=n,this._ownsGPUDataEvaluators=!n}get evaluated(){return!!this._gpuVector}get gpuVector(){if(!this._gpuVector)throw Error(`${this} not evaluated`);return this._gpuVector}mapGPUData(t){return e.fromGPUDataEvaluators(this.gpuDataEvaluators.map((e,n)=>t(e,n)),{id:this.id})}async evaluate(e,t={}){if(this._destroyed)throw Error(`GPUVectorEvaluator ${this} already destroyed`);if(this._gpuVector)return this._gpuVector;let n=await Promise.all(this.gpuDataEvaluators.map(n=>n.evaluate(e,t))),r=n[0],i=n.map(xv),a=t.format??this.format??r.format;return this._gpuVector=new F({type:`data`,name:t.name??this.id??`vector`,format:a,data:i,stride:r.stride,byteStride:r.byteStride,rowByteLength:r.rowByteLength,bufferLayout:r.bufferLayout}),this._gpuVector}evaluateSync(e,t={}){if(this._destroyed)throw Error(`GPUVectorEvaluator ${this} already destroyed`);if(this._gpuVector)return this._gpuVector;let n=this.gpuDataEvaluators.map(n=>n.evaluateSync(e,t)),r=n[0],i=n.map(xv),a=t.format??this.format??r.format;return this._gpuVector=new F({type:`data`,name:t.name??this.id??`vector`,format:a,data:i,stride:r.stride,byteStride:r.byteStride,rowByteLength:r.rowByteLength,bufferLayout:r.bufferLayout}),this._gpuVector}destroy(){if(this._ownsGPUDataEvaluators)for(let e of this.gpuDataEvaluators)e.destroy();this._gpuVector=void 0,this._destroyed=!0}toString(){return this.id??this.constructor.name}};function bv(e){let t=e[0];for(let n of e.slice(1))if(n.type!==t.type||n.size!==t.size||n.normalized!==t.normalized||n.format!==t.format)throw Error(`GPUVectorEvaluator requires matching GPUData evaluator layouts`)}function xv(e){let[t,...n]=e.data;if(!t||n.length>0)throw Error(`GPUVectorEvaluator requires one GPUData chunk for "${e.name}"`);return t}function Sv({elementWise:e,func:t,inputs:n,output:r,outputBuffer:i}){let a=Array.isArray(n)?n:Object.values(n);for(let e of a)if(!e.value)throw Error(`${e} does not have CPU value`);let o=r.length,s=r.size,c=new r.ValueType(o*s);for(let n=0;n<o;n++){let r=a.map(e=>Cv(e,n));if(e)for(let e=0;e<s;e++)c[n*s+e]=t.apply(null,r.map(t=>t[e]));else t.call(null,c.subarray(n*s,n*s+s),...r)}let l=r.ValueType.BYTES_PER_ELEMENT,u=r.offset/l,d=r.stride/l,f=s,p=c;if(u!==0||d!==f){p=new r.ValueType(u+r.byteLength/l);for(let e=0;e<o;e++){let t=e*f,n=u+e*d,r=c.subarray(t,t+s);p.set(r,n),i.write(r,n*l)}}else i.write(c);return{success:!0,value:p}}function Cv(e,t){let n=e.value,r=e.size,i=e.offset/e.ValueType.BYTES_PER_ELEMENT,a=e.stride/e.ValueType.BYTES_PER_ELEMENT,o=i+(e.isConstant?0:t)*a,s=n.slice(o,o+r);if(!e.normalized)return s;let c=new Float32Array(r);for(let t=0;t<r;t++)c[t]=wv(s[t],e.type);return c}function wv(e,t){switch(t){case`uint8`:return e/255;case`uint16`:return e/65535;case`uint32`:return e/4294967295;case`sint8`:return Math.max(e/127,-1);case`sint16`:return Math.max(e/32767,-1);case`sint32`:return Math.max(e/2147483647,-1);case`float32`:return e;default:throw Error(`Unsupported normalized source type ${t}`)}}var Tv=({inputs:e,output:t,target:n})=>{for(let t of Object.values(e.namedInputs))if(!t.value)throw Error(`${t} does not have CPU value`);let r=new t.ValueType(t.length*t.size);for(let n=0;n<t.length;n++){let i=Object.fromEntries(Object.entries(e.namedInputs).map(([e,t])=>[e,Cv(t,n)]));for(let a=0;a<t.size;a++)r[n*t.size+a]=Ev(e.expression,i,a)}return n.write(r),{success:!0,value:r}};function Ev(e,t,n){switch(e.kind){case`input`:{let r=t[e.name];return n<r.length?r[n]:r.length===1?r[0]:0}case`literal`:return Array.isArray(e.value)?e.value[n]??0:e.value;case`call`:{Dv(e.op,e.args.length);let r=e.args.map(e=>Ev(e,t,n));switch(e.op){case`add`:return r[0]+r[1];case`subtract`:return r[0]-r[1];case`multiply`:return r[0]*r[1];case`divide`:return r[0]/r[1];case`pow`:return r[0]**+r[1];case`sqrt`:return Math.sqrt(r[0]);case`abs`:return Math.abs(r[0]);case`sin`:return Math.sin(r[0]);case`cos`:return Math.cos(r[0]);case`tan`:return Math.tan(r[0]);case`exp`:return Math.exp(r[0]);case`log`:return Math.log(r[0]);default:{let t=e.op;throw Error(`Unsupported arithmetic op ${t}`)}}}default:throw Error(`Unsupported expression node ${e.kind}`)}}function Dv(e,t){let n=P[e].arity;if(t!==n)throw Error(`Arithmetic op '${e}' expects ${n} args, got ${t}`)}var Ov=({inputs:e,output:t,target:n})=>{let{sourceValues:r}=e;if(!r.value)throw Error(`${r} does not have CPU value`);let i=new t.ValueType(t.length*t.size);if(r.length===0)return{success:!1,error:Error(`${r} is empty`)};for(let e=0;e<r.size;e++){let n=Cv(r,0)[e],a=e*t.size,o=a+1;i[a]=n,i[o]=n;for(let t=1;t<r.length;t++){let n=Cv(r,t)[e];n<i[a]&&(i[a]=n),n>i[o]&&(i[o]=n)}}return n.write(i),{success:!0,value:i}},kv=({inputs:e,output:t,target:n})=>Sv({func:(e,t)=>{let n=e.length/2,r=new Float64Array(t.buffer);for(let t=0;t<n;t++){let i=r[t];e[t]=Math.fround(i),e[t+n]=i-e[t]}return e},inputs:e,output:t,outputBuffer:n}),Av=async({inputs:e,output:t,target:n})=>{let{ids:r,sourceValues:i}=e,a=r.value,o=i.value;if(!a)throw Error(`${r} does not have CPU value`);if(!o)throw Error(`${i} does not have CPU value`);let s=new t.ValueType(t.length*t.size),c=Array(t.size).fill(0);for(let e=0;e<t.length;e++){let n=Cv(r,e),a=Number(n[0]),o=jv(a,i.length)?Cv(i,a):c;s.set(o,e*t.size)}return n.write(s),{success:!0,value:s}};function jv(e,t){return Number.isInteger(e)&&e>=0&&e<t}var Mv=({inputs:e,output:t,target:n})=>Sv({func:(e,...t)=>{let n=0;for(let r of t)e.set(r,n),n+=r.length},inputs:e,output:t,outputBuffer:n}),Nv=({inputs:e,output:t,target:n})=>{let{x:r,y:i}=e,a=new t.ValueType(t.length);for(let e=0;e<t.length;e++){let t=Cv(r,e),n=Cv(i,e),o=0;for(let e=0;e<r.size;e++)o+=t[e]*n[e];a[e]=o}return n.write(a),{success:!0,value:a}},Pv=({inputs:e,output:t,target:n})=>{let{x:r,y:i}=e,a=new t.ValueType(t.length);for(let e=0;e<t.length;e++){let t=Cv(r,e),n=Cv(i,e),o=1;for(let e=0;e<r.size;e++)if(t[e]!==n[e]){o=0;break}a[e]=o}return n.write(a),{success:!0,value:a}},Fv=({inputs:e,output:t,target:n})=>{let{x:r}=e,i=new t.ValueType(t.length);for(let e=0;e<t.length;e++){let t=Cv(r,e),n=0;for(let e=0;e<r.size;e++)n+=t[e]*t[e];i[e]=Math.sqrt(n)}return n.write(i),{success:!0,value:i}},Iv=async({inputs:e,output:t,target:n})=>{let{segments:r,vertexCount:i}=e,a=r.value;if(!a)throw Error(`${r} does not have CPU value`);Lv(a,r,i);let o=new t.ValueType(t.length*t.size),s=0;for(let e=0;e<i;e++){for(;s+1<r.length&&a[Rv(r,s+1)]<=e;)s++;let n=a[Rv(r,s)],i=e*t.size;o[i]=s,o[i+1]=e-n}return n.write(o),{success:!0,value:o}};function Lv(e,t,n){if(t.length<1)throw Error(`segmentedMap segments must contain at least one segment start`);let r=0;for(let n=0;n<t.length;n++){let i=e[Rv(t,n)];if(n===0&&i!==0)throw Error(`segmentedMap segments must start at 0, got ${i}`);if(n>0&&i<r)throw Error(`segmentedMap segments must be non-decreasing, got ${i} after ${r}`);r=i}if(r>n)throw Error(`segmentedMap last segment start must be <= vertexCount, got ${r} > ${n}`)}function Rv(e,t){return e.offset/e.ValueType.BYTES_PER_ELEMENT+t*(e.stride/e.ValueType.BYTES_PER_ELEMENT)}var zv=async({inputs:e,output:t,target:n})=>{let{condition:r,whenTrue:i,whenFalse:a}=e,o=new t.ValueType(t.length*t.size);for(let e=0;e<t.length;e++){let n=Cv(r,e),s=Cv(i,e),c=Cv(a,e);for(let l=0;l<t.size;l++){let u=Bv(n,r.size,l);o[e*t.size+l]=u===0?Bv(c,a.size,l):Bv(s,i.size,l)}}return n.write(o),{success:!0,value:o}};function Bv(e,t,n){return n<t?e[n]:t===1?e[0]:0}var Vv=({inputs:e,output:t,target:n})=>{let r=new t.ValueType(t.length);for(let n=0;n<t.length;n++)r[n]=e.start+n*e.step;return n.write(r),{success:!0,value:r}},Hv=({inputs:e,output:t,target:n})=>{let{columns:r}=e;return Sv({func:(e,t)=>{for(let n=0;n<r.length;n++)e[n]=t[r[n]]},inputs:{x:e.x},output:t,outputBuffer:n})},Uv=Se({arithmetic:()=>Tv,dot:()=>Nv,equalAll:()=>Pv,extent:()=>Ov,fround:()=>kv,gather:()=>Av,interleave:()=>Mv,length:()=>Fv,segmentedMap:()=>Iv,select:()=>zv,sequence:()=>Vv,swizzle:()=>Hv}),Wv=new class{_modules={cpu:Uv};add(e,t){let n=this._modules[e];if(typeof t.then==`function`){let r=Promise.all([Promise.resolve(n||{}),t]).then(([e,t])=>({...e,...t}));return this._modules[e]=r,r.then(t=>{this._modules[e]=t}).catch(t=>{i.error(`Failed to register ${e} backend: ${t}`)()}),r}if(n&&typeof n.then==`function`){let r=Promise.resolve(n).then(e=>({...e,...t})).then(t=>(this._modules[e]=t,t)).catch(t=>{throw i.error(`Failed to register ${e} backend: ${t}`)(),t});return this._modules[e]=r,r}let r={...n||{},...t};return this._modules[e]=r,Promise.resolve(r)}async get(e,t){let n=this._modules[e];if(!n){if(e===`webgl`)n=this.add(`webgl`,Vm(()=>import(`./webgl-CQJAy8kk.js`),__vite__mapDeps([0,1,2,3])));else if(e===`webgpu`)n=this.add(`webgpu`,Vm(()=>Promise.resolve().then(()=>ab),void 0));else throw Error(`${e} backend not registered`)}let r=(await n)[t];if(typeof r!=`function`)throw Error(`${e} backend does not implement ${t}`);return r}getSync(e,t){let n=this._modules[e];if(!n)throw Error(`${e} backend not registered`);if(typeof n.then==`function`)throw Error(`${e} backend is not loaded yet`);let r=n[t];if(typeof r!=`function`)throw Error(`${e} backend does not implement ${t}`);return r}clear(){this._modules={}}},Gv=class{inputs;dependencies;constructor(e){this.inputs=e,this.dependencies=Array.from(e instanceof Array?e:Object.values(e)).filter(e=>e instanceof L)}async execute(e,t){return await this._resolveDependencies(e),await this._executeWithHandler(await Wv.get(this._getHandlerRegistry(e),this.name),t)}executeSync(e,t){this._resolveDependenciesSync(e);let n=this._executeWithHandler(Wv.getSync(this._getHandlerRegistry(e),this.name),t);if(Kv(n))throw Error(`${this.name} returned a Promise in executeSync()`);return n}shouldExecuteOnCPU(){return this.output.length<=1&&Array.from(this.dependencies).every(e=>!!e.value)}_getHandlerRegistry(e){return this.shouldExecuteOnCPU()?`cpu`:e.type}async _resolveDependencies(e){for(let t of this.dependencies)await t.evaluate(e);if(this._getHandlerRegistry(e)===`cpu`||e.type===`null`)for(let e of this.dependencies)await e.ensureCPUValue()}_resolveDependenciesSync(e){for(let t of this.dependencies)t.evaluateSync(e);if(this._getHandlerRegistry(e)===`cpu`||e.type===`null`)for(let e of this.dependencies)e.ensureCPUValueSync()}_executeWithHandler(e,t){return e({device:t.device,inputs:this.inputs,output:this.output,target:t})}};function Kv(e){return typeof e?.then==`function`}function qv(...e){let t=Jv(e.map(e=>e.type));return t[0]!==`f`&&e.some(e=>e.normalized)&&(t=`float32`),{isConstant:e.every(e=>e.isConstant),type:t,size:e.reduce((e,t)=>Math.max(e,t.size),0),length:e.reduce((e,t)=>Math.max(e,t.length),0)}}function Jv(e){let t=0,n=0;for(let r of e){if(r[0]===`f`)return`float32`;let e=r.endsWith(`8`)?8:r.endsWith(`6`)?16:32;r[0]===`u`?t=Math.max(t,e):n=Math.max(n,e)}return t&&!n?`uint${t}`:n&&t<32?`sint${Math.max(n,t*2)}`:`float32`}var Yv=class extends Gv{name=`interleave`;output;constructor(e){super(e);let{isConstant:t,type:n,length:r}=qv(...e);this.output=new L({isConstant:t,type:n,size:e.reduce((e,t)=>e+t.size,0),length:r,source:this})}toString(){return`_${this.inputs.join(`_`)}_`}};function Xv(...e){if(e.length===0)throw Error(`interleave() requires at least one input`);return e.length===1?j(e[0]):new Yv(e.map(j)).output}function Zv(e,t){let n=$v(t);for(let t of n)t.evaluateSync(e);return Qv(n),t}function Qv(e){let t=new Set(e.flatMap(ry)),n=new Set;for(let t of e)ny(t,n);for(let e of n)e.evaluated&&!t.has(e.buffer)&&e.destroy()}function $v(e){let t=new Set;return ey(e,t,new Set),Array.from(t)}function ey(e,t,n){if(iy(e)){t.add(e);return}if(e&&typeof e==`object`&&!n.has(e)){if(n.add(e),Array.isArray(e)){for(let r of e)ey(r,t,n);return}if(ty(e))for(let r of Object.values(e))ey(r,t,n)}}function ty(e){let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null}function ny(e,t){if(e instanceof yv){for(let n of e.gpuDataEvaluators)ny(n,t);return}let n=e.source;if(n){if(n instanceof L){t.has(n)||(t.add(n),ny(n,t));return}for(let e of n.dependencies)t.has(e)||(t.add(e),ny(e,t))}}function ry(e){return e instanceof L?[e.buffer]:e.gpuVector.data.map(e=>e.buffer instanceof ee?e.buffer.buffer:e.buffer)}function iy(e){return e instanceof L||e instanceof yv}var ay=65535;function oy(e,t){let n=ly(t),r=Math.max(1,Math.ceil(e)),i=Math.min(r,n),a=Math.min(Math.ceil(r/i),n),o=Math.ceil(r/i/a);if(o>n)throw Error(`WebGPU dispatch requires ${r} workgroups, exceeding the 3D dispatch limit of ${n} per dimension`);return{x:i,y:a,z:o}}function sy(e,t=`workgroupId`){return`((${t}.z * ${e.y}u + ${t}.y) * ${e.x}u + ${t}.x)`}function cy(e,t,n=`workgroupId`,r=`localId`){return`(${sy(e,n)} * ${t}u + ${r}.x)`}function ly(e){return Number.isFinite(e)&&e>0?Math.floor(e):ay}function uy(e,t){switch(e){case`u32`:return`${t}u`;case`f32`:return Number.isInteger(t)?`${t}.0`:`${t}`;default:return`${t}`}}function dy(e,t){switch(e){case`uint32`:return uy(`u32`,Math.trunc(t));case`sint32`:return`${Math.trunc(t)}`;case`float32`:return uy(`f32`,t);default:throw Error(`WebGPU operations only support 32-bit output types, got ${e}`)}}function fy(e){switch(e){case`uint32`:return`0u`;case`sint32`:return`0`;case`float32`:return`0.0`;default:throw Error(`WebGPU operations only support 32-bit output types, got ${e}`)}}function X(e){switch(e){case`uint32`:return`u32`;case`sint32`:return`i32`;case`float32`:return`f32`;default:throw Error(`WebGPU operations only support 32-bit storage types, got ${e}`)}}var py=64,my=`GPGPU Operation Counts`,hy=`Computation Runs`,gy=new T;function _y({module:e,elementWise:t=!1,expression:n,inputs:r,output:i,operationType:a=i.type,outputBuffer:o}){if(!e.source)throw Error(`WebGPU computation ${e.name} requires WGSL source`);let s=Cy(r),c=s.map(([e,t])=>({name:e,input:t})),l=c.filter(({input:e})=>!e.isConstant).map((e,t)=>({...e,index:t})),u=X(a),d=X(i.type),f={TYPE:u,RESULT_LEN:i.size.toString()},p=oy(Math.ceil(i.length/py),o.device.limits.maxComputeWorkgroupsPerDimension);for(let[e,t]of s)f[`${e.toUpperCase()}_LEN`]=t.size.toString();let m=`
${Ty(e.source,f)}
${l.map(({name:e,input:t,index:n})=>vy(e,t,n)).join(`
`)}
${c.map(({name:e,input:t})=>yy(e,t,a)).join(`
`)}
${by(i,l.length)}
${xy(i)}

@compute @workgroup_size(${py}) fn main(
  @builtin(workgroup_id) workgroupId: vec3<u32>,
  @builtin(local_invocation_id) localId: vec3<u32>
) {
  let rowIndex = ${cy(p,py)};
  if (rowIndex >= ${i.length}u) {
    return;
  }

${c.map(({name:e})=>`  let ${e} = read_${e}(rowIndex);`).join(`
`)}
  var result: array<${d}, ${i.size}>;
${Sy(e.name,s,i,t,n)}
  write_result(rowIndex, result);
}
`,h=new Rf(o.device,{source:m,modules:e.dependencies,shaderAssembler:gy,shaderLayout:{bindings:[...l.map(({name:e},t)=>({name:e,type:`storage`,group:0,location:t})),{name:`result`,type:`storage`,group:0,location:l.length}]}}),g=Object.fromEntries(l.map(({name:e,input:t})=>[e,t.buffer]));g.result=o,h.setBindings(g);let _=o.device.beginComputePass({});o.device.statsManager.getStats(my).get(hy).incrementCount(),h.dispatch(_,p.x,p.y,p.z),_.end(),o.device.submit(),h.destroy()}function vy(e,t,n){return t.isConstant?``:`@group(0) @binding(${n}) var<storage, read> ${e}: array<${X(t.type)}>;`}function yy(e,t,n){let r=X(n),i=t.type===n?``:r,a=t.stride/t.ValueType.BYTES_PER_ELEMENT,o=t.offset/t.ValueType.BYTES_PER_ELEMENT;return t.isConstant?`fn read_${e}(_rowIndex: u32) -> array<${r}, ${t.size}> {
  return array<${r}, ${t.size}>(${wy(t,i)});
}`:`fn read_${e}(rowIndex: u32) -> array<${r}, ${t.size}> {
  var value: array<${r}, ${t.size}>;
  let rowOffset = ${o}u + rowIndex * ${a}u;
${Array.from({length:t.size},(t,n)=>i?`  value[${n}] = ${i}(${e}[rowOffset + ${n}u]);`:`  value[${n}] = ${e}[rowOffset + ${n}u];`).join(`
`)}
  return value;
}`}function by(e,t){return`@group(0) @binding(${t}) var<storage, read_write> result: array<${X(e.type)}>;`}function xy(e){let t=e.stride/e.ValueType.BYTES_PER_ELEMENT,n=e.offset/e.ValueType.BYTES_PER_ELEMENT;return`fn write_result(rowIndex: u32, value: array<${X(e.type)}, ${e.size}>) {
  let rowOffset = ${n}u + rowIndex * ${t}u;
${Array.from({length:e.size},(e,t)=>`  result[rowOffset + ${t}u] = value[${t}];`).join(`
`)}
}`}function Sy(e,t,n,r,i){let a=``;if(i)for(let e=0;e<n.size;e++)a+=`  result[${e}] = ${i(e)};\n`;else if(r){let r=fy(n.type),i=X(n.type);for(let o=0;o<n.size;o++){let n=t.map(([e,t])=>o<t.size?X(t.type)===i?`${e}[${o}]`:`${i}(${e}[${o}])`:r);a+=`  result[${o}] = ${e}(${n.join(`, `)});\n`}}else a+=`result = ${e}(${t.map(([e])=>e).join(`, `)});`;return a.trimEnd()}function Cy(e){return Array.isArray(e)?e.map((e,t)=>[`x${t}`,e]):Object.entries(e)}function wy(e,t){let n=e.value;if(!n)throw Error(`Constant input ${e} is missing CPU values`);return Array.from({length:e.size},(e,r)=>uy(t,n[r]??0)).join(`, `)}function Ty(e,t){for(let n in t)e=e.replaceAll(`{${n}}`,t[n]);return e}var Ey=`fn arithmetic_add(x: {TYPE}, y: {TYPE}) -> {TYPE} {
  return x + y;
}

fn arithmetic_subtract(x: {TYPE}, y: {TYPE}) -> {TYPE} {
  return x - y;
}

fn arithmetic_multiply(x: {TYPE}, y: {TYPE}) -> {TYPE} {
  return x * y;
}

fn arithmetic_divide(x: {TYPE}, y: {TYPE}) -> {TYPE} {
  return x / y;
}

fn arithmetic_tan(x: f32) -> f32 {
  return tan_fp32(x);
}
`,Dy=({inputs:e,output:t,target:n})=>{let r=t.type,i=X(r),a=fy(r),o=e.namedInputs;return _y({module:{name:`arithmetic`,source:Ey,dependencies:[C]},inputs:o,output:t,operationType:r,outputBuffer:n,expression:t=>te(e.expression,{operations:P,inputs:o,laneIndex:t,formatInput:e=>`${e}[${t}]`,formatOutOfBoundsInput:e=>o[e].size===1?`${e}[0]`:a,formatLiteral:e=>{let n=Array.isArray(e)?e[t]??0:e;return`${i}(${dy(r,n)})`},formatCall:(e,t)=>`${e}(${t.join(`, `)})`})}),{success:!0}},Oy=`fn row_dot(x: array<{TYPE}, {X_LEN}>, y: array<{TYPE}, {Y_LEN}>) -> array<f32, 1> {
  var sum = 0.0;
  for (var i = 0u; i < {X_LEN}u; i = i + 1u) {
    sum += f32(x[i]) * f32(y[i]);
  }
  return array<f32, 1>(sum);
}
`,ky=({inputs:e,output:t,target:n})=>(_y({module:{name:`row_dot`,source:Oy},inputs:e,output:t,operationType:`float32`,outputBuffer:n}),{success:!0}),Ay=`fn equalAll(x: array<{TYPE}, {X_LEN}>, y: array<{TYPE}, {Y_LEN}>) -> array<u32, 1> {
  var allEqual = 1u;
  for (var i = 0u; i < {X_LEN}u; i = i + 1u) {
    if (x[i] != y[i]) {
      allEqual = 0u;
      break;
    }
  }
  return array<u32, 1>(allEqual);
}
`,jy=({inputs:e,output:t,target:n})=>(_y({module:{name:`equalAll`,source:Ay},inputs:e,output:t,operationType:e.x.type,outputBuffer:n}),{success:!0});function My(e,t,n){return`@group(0) @binding(${n}) var<storage, read> ${e}: array<${X(t.type)}>;`}function Ny(e,t,n,r=e){let i=X(n);if(t.isConstant){let e=t.value;if(!e)throw Error(`Constant input ${t} is missing CPU values`);return`fn read_${r}(_sourceIndex: u32) -> array<${i}, ${t.size}> {
  return array<${i}, ${t.size}>(${Array.from({length:t.size},(t,n)=>uy(i,e[n]??0)).join(`, `)});
}`}let a=t.stride/t.ValueType.BYTES_PER_ELEMENT,o=t.offset/t.ValueType.BYTES_PER_ELEMENT,s=X(t.type)===i?``:`${i}`;return`fn read_${r}(sourceIndex: u32) -> array<${i}, ${t.size}> {
  var value: array<${i}, ${t.size}>;
  let rowOffset = ${o}u + sourceIndex * ${a}u;
${Array.from({length:t.size},(t,n)=>s?`  value[${n}] = ${s}(${e}[rowOffset + ${n}u]);`:`  value[${n}] = ${e}[rowOffset + ${n}u];`).join(`
`)}
  return value;
}`}function Py(e,t){return Ny(`sourceValues`,e,t,`source_values`)}function Fy(e,t){return`@group(0) @binding(${t}) var<storage, read_write> result: array<${X(e.type)}>;`}function Iy(e){let t=e.stride/e.ValueType.BYTES_PER_ELEMENT,n=e.offset/e.ValueType.BYTES_PER_ELEMENT;return`fn write_result(rowIndex: u32, value: array<${X(e.type)}, ${e.size}>) {
  let rowOffset = ${n}u + rowIndex * ${t}u;
${Array.from({length:e.size},(e,t)=>`  result[rowOffset + ${t}u] = value[${t}];`).join(`
`)}
}`}function Ly(e,t){let n=fy(e);return`fn zero_result() -> array<${X(e)}, ${t}> {
  var result: array<${X(e)}, ${t}>;
${Array.from({length:t},(e,t)=>`  result[${t}] = ${n};`).join(`
`)}
  return result;
}`}var Ry=({inputs:e,output:t,target:n})=>{let{sourceValues:r}=e;if(r.length===0){let e=new t.ValueType(t.length*t.size);return n.write(e),{success:!0,value:e}}if(r.isConstant){let e=r.value;if(!e)throw Error(`Constant input ${r} is missing CPU values`);let i=new t.ValueType(t.length*t.size);for(let n=0;n<t.length;n++){let t=e[n];i[n*2]=t,i[n*2+1]=t}return n.write(i),{success:!0,value:i}}let i=[],a=r,o=`raw`,s=r.length;try{for(;;){let e=Math.ceil(s/64),r=t.length*e,c=e===1?n:w.createOrReuse(n.device,r*t.stride);if(e>1&&i.push(c),zy({input:a,inputMode:o,inputGroupCount:s,channelCount:t.length,outputType:t.type,outputBuffer:c,outputLength:r,outputStride:t.stride,outputOffset:t.offset}),e===1)break;a=new L({buffer:c,type:t.type,size:2,length:r}),o=`partial`,s=e}return{success:!0}}finally{for(let e of i)w.recycle(e)}};function zy({input:e,inputMode:t,inputGroupCount:n,channelCount:r,outputType:i,outputBuffer:a,outputLength:o,outputStride:s,outputOffset:c}){let l=X(i),u=oy(o,a.device.limits.maxComputeWorkgroupsPerDimension),d=new L({buffer:a,type:i,size:2,length:o,stride:s,offset:c}),f=`
${e.isConstant?``:My(`sourceValues`,e,0)}
${Py(e,i)}
${Fy(d,+!e.isConstant)}
${Iy(d)}
${By(t,i,r,n)}

var<workgroup> sharedMin: array<${l}, 64>;
var<workgroup> sharedMax: array<${l}, 64>;

@compute @workgroup_size(64) fn main(
  @builtin(workgroup_id) workgroupId: vec3<u32>,
  @builtin(local_invocation_id) localId: vec3<u32>
) {
  let outputRowIndex = ${sy(u)};
  if (outputRowIndex >= ${o}u) {
    return;
  }

  let channelIndex = outputRowIndex % ${r}u;
  let outputGroupIndex = outputRowIndex / ${r}u;
  let inputGroupIndex = outputGroupIndex * 64u + localId.x;

  let result = extent_pass(channelIndex, inputGroupIndex);
  sharedMin[localId.x] = result[0];
  sharedMax[localId.x] = result[1];
  workgroupBarrier();

  var stride = 32u;
  loop {
    if (stride == 0u) {
      break;
    }
    if (localId.x < stride) {
      let compareIndex = localId.x + stride;
      if (sharedMin[compareIndex] < sharedMin[localId.x]) {
        sharedMin[localId.x] = sharedMin[compareIndex];
      }
      if (sharedMax[compareIndex] > sharedMax[localId.x]) {
        sharedMax[localId.x] = sharedMax[compareIndex];
      }
    }
    workgroupBarrier();
    stride = stride / 2u;
  }

  if (localId.x == 0u) {
    write_result(outputRowIndex, array<${l}, 2>(sharedMin[0], sharedMax[0]));
  }
}
`,p=new Rf(a.device,{source:f,shaderLayout:{bindings:[...e.isConstant?[]:[{name:`sourceValues`,type:`storage`,group:0,location:0}],{name:`result`,type:`storage`,group:0,location:+!e.isConstant}]}}),m={result:a};e.isConstant||(m.sourceValues=e.buffer),p.setBindings(m);let h=a.device.beginComputePass({});p.dispatch(h,u.x,u.y,u.z),h.end(),a.device.submit(),p.destroy()}function By(e,t,n,r){let i=X(t),[a,o]=Vy(t);return e===`raw`?`fn extent_pass(channelIndex: u32, inputGroupIndex: u32) -> array<${i}, 2> {
  var result: array<${i}, 2>;
  result[0] = ${a};
  result[1] = ${o};

  if (inputGroupIndex < ${r}u) {
    let value = read_source_values(inputGroupIndex);
    result[0] = value[channelIndex];
    result[1] = value[channelIndex];
  }

  return result;
}`:`fn extent_pass(channelIndex: u32, inputGroupIndex: u32) -> array<${i}, 2> {
  var result: array<${i}, 2>;
  result[0] = ${a};
  result[1] = ${o};

  if (inputGroupIndex < ${r}u) {
    let rowIndex = inputGroupIndex * ${n}u + channelIndex;
    let value = read_source_values(rowIndex);
    result[0] = value[0];
    result[1] = value[1];
  }

  return result;
}`}function Vy(e){switch(e){case`uint32`:return[`0xffffffffu`,`0u`];case`sint32`:return[`2147483647`,`-2147483648`];case`float32`:return[`3.402823e38`,`-3.402823e38`];default:throw Error(`Unsupported WebGPU extent type for ${e}`)}}function Hy(){let e=new Uint16Array([255]);return new Uint8Array(e.buffer)[0]>0}var Uy=`\
const LE: bool = ${Hy()?`true`:`false`};
const F32_NAN: u32 = 0xffffffffu;
const F32_INF: u32 = 0x7f800000u;

fn roundShiftRight(value: u32, shift: i32) -> u32 {
  if (shift <= 0) {
    return value << u32(-shift);
  }

  if (shift >= 32) {
    if (shift == 32 && value > 0x80000000u) {
      return 1u;
    }
    return 0u;
  }

  let shiftU32 = u32(shift);
  let truncated = value >> shiftU32;
  let halfShift = 1u << u32(shift - 1);
  let remainder = value & ((1u << shiftU32) - 1u);
  if (remainder > halfShift || (remainder == halfShift && (truncated & 1u) == 1u)) {
    return truncated + 1u;
  }
  return truncated;
}

fn makeFloatImmediate(sign: u32, exponent: i32, mantissa: u32) -> u32 {
  return (sign << 31u) | (u32(exponent + 127) << 23u) | (mantissa & 0x7fffffu);
}

fn makeFloat(sign: u32, exponent: i32, significand: u32) -> u32 {
  if (significand == 0u) {
    return sign << 31u;
  }

  let leadingZeros = i32(countLeadingZeros(significand));
  var normalizedExponent = exponent + 31 - leadingZeros;

  if (normalizedExponent > 127) {
    return (sign << 31u) | F32_INF;
  }

  var mantissa: u32;
  if (normalizedExponent >= -126) {
    mantissa = roundShiftRight(significand, 8 - leadingZeros);
    if (mantissa >= 0x1000000u) {
      mantissa = mantissa >> 1u;
      normalizedExponent += 1;
      if (normalizedExponent > 127) {
        return (sign << 31u) | F32_INF;
      }
    }
    return makeFloatImmediate(sign, normalizedExponent, mantissa);
  }

  let subnormalShift = -149 - exponent;
  mantissa = roundShiftRight(significand, subnormalShift);
  if (mantissa >= 0x800000u) {
    return (sign << 31u) | (1u << 23u);
  }
  return (sign << 31u) | mantissa;
}

fn parseAsDouble(words: vec2<u32>) -> vec2<u32> {
  var d = words;
  if (LE) {
    d = d.yx;
  }

  let sign = (d.x >> 31u) & 1u;
  let exponentBits = (d.x >> 20u) & 0x7ffu;
  let exponent = i32(exponentBits) - 1023;
  let fractionHigh = d.x & 0xfffffu;
  let fractionLow = d.y;

  if (exponentBits == 0x7ffu) {
    if (fractionHigh == 0u && fractionLow == 0u) {
      return vec2<u32>((sign << 31u) | F32_INF, F32_NAN);
    }
    return vec2<u32>(F32_NAN);
  }

  if (exponentBits == 0u) {
    return vec2<u32>(sign << 31u);
  }

  if (exponent > 127) {
    return vec2<u32>((sign << 31u) | F32_INF, ((1u - sign) << 31u) | F32_INF);
  }

  let highSignificand = 0x800000u | (fractionHigh << 3u) | (fractionLow >> 29u);
  let lowSignificand = fractionLow & 0x1fffffffu;

  if (exponent < -126) {
    let highPart = makeFloat(sign, exponent - 23, highSignificand);
    let lowPart = makeFloat(sign, exponent - 52, lowSignificand);
    return vec2<u32>(highPart, lowPart);
  }

  let roundUp = lowSignificand > 0x10000000u ||
    (lowSignificand == 0x10000000u && (highSignificand & 1u) == 1u);

  var roundedSignificand = highSignificand + select(0u, 1u, roundUp);
  var highExponent = exponent;
  if (roundedSignificand == 0x1000000u) {
    roundedSignificand = 0x800000u;
    highExponent += 1;
  }

  if (highExponent > 127) {
    return vec2<u32>((sign << 31u) | F32_INF, ((1u - sign) << 31u) | F32_INF);
  }

  let highPart = makeFloatImmediate(sign, highExponent, roundedSignificand);

  var remainder = i32(lowSignificand);
  var lowSign = sign;
  if (roundUp) {
    remainder -= 0x20000000;
  }
  if (remainder < 0) {
    lowSign = 1u - sign;
    remainder = -remainder;
  }

  let lowPart = makeFloat(lowSign, exponent - 52, u32(remainder));
  return vec2<u32>(highPart, lowPart);
}

fn fround(x: array<u32, {X_LEN}>) -> array<f32, {RESULT_LEN}> {
  var result: array<f32, {RESULT_LEN}>;
  let n = {X_LEN}u / 2u;
  for (var i = 0u; i < n; i = i + 1u) {
    let parts = parseAsDouble(vec2<u32>(x[i * 2u], x[i * 2u + 1u]));
    result[i] = bitcast<f32>(parts.x);
    result[i + n] = bitcast<f32>(parts.y);
  }
  return result;
}
`,Wy=({inputs:e,output:t,target:n})=>(_y({module:{name:`fround`,source:Uy},inputs:e,output:t,operationType:`uint32`,outputBuffer:n}),{success:!0}),Gy=async({inputs:e,output:t,target:n})=>{let{ids:r,sourceValues:i}=e,a=X(r.type),o=[];r.isConstant||o.push({name:`ids`,input:r,index:o.length}),i.isConstant||o.push({name:`sourceValues`,input:i,index:o.length});let s=oy(Math.ceil(t.length/64),n.device.limits.maxComputeWorkgroupsPerDimension),c=`
${o.map(({name:e,input:t,index:n})=>My(e,t,n)).join(`
`)}
${Ky(r,a)}
${Py(i,t.type)}
${Fy(t,o.length)}
${Iy(t)}
${Ly(t.type,t.size)}
${qy(r.type,t.type,t.size,i.length)}

@compute @workgroup_size(64) fn main(
  @builtin(workgroup_id) workgroupId: vec3<u32>,
  @builtin(local_invocation_id) localId: vec3<u32>
) {
  let rowIndex = ${cy(s,64)};
  if (rowIndex >= ${t.length}u) {
    return;
  }

  let idsValue = read_ids(rowIndex);
  let result = gather(idsValue);
  write_result(rowIndex, result);
}
`,l=new Rf(n.device,{source:c,shaderLayout:{bindings:[...o.map(({name:e,index:t})=>({name:e,type:`storage`,group:0,location:t})),{name:`result`,type:`storage`,group:0,location:o.length}]}}),u={};r.isConstant||(u.ids=r.buffer),i.isConstant||(u.sourceValues=i.buffer),u.result=n,l.setBindings(u);let d=n.device.beginComputePass({});return l.dispatch(d,s.x,s.y,s.z),d.end(),n.device.submit(),l.destroy(),{success:!0}};function Ky(e,t){if(e.isConstant){let n=e.value;if(!n)throw Error(`Constant input ${e} is missing CPU values`);return`fn read_ids(_rowIndex: u32) -> ${t} {
  return ${uy(t,n[0]??0)};
}`}let n=e.stride/e.ValueType.BYTES_PER_ELEMENT;return`fn read_ids(rowIndex: u32) -> ${t} {
  let rowOffset = ${e.offset/e.ValueType.BYTES_PER_ELEMENT}u + rowIndex * ${n}u;
  return ids[rowOffset];
}`}function qy(e,t,n,r){let i=X(e);return`fn gather(idsValue: ${i}) -> array<${X(t)}, ${n}> {
  let sourceIndex = ${i===`u32`?`i32(idsValue)`:i===`i32`?`idsValue`:`i32(idsValue)`};
  if (sourceIndex < 0 || sourceIndex >= ${r}) {
    return zero_result();
  }
  return read_source_values(u32(sourceIndex));
}`}var Jy=async({inputs:e,output:t,target:n})=>{let{segments:r}=e,i=r.isConstant?[]:[{name:`segments`,input:r,index:0}],a=oy(Math.ceil(t.length/64),n.device.limits.maxComputeWorkgroupsPerDimension),o=`
${i.map(({name:e,input:t,index:n})=>My(e,t,n)).join(`
`)}
${Ny(`segments`,r,`uint32`)}
${Fy(t,i.length)}
${Iy(t)}
${Yy(r.length)}

@compute @workgroup_size(64) fn main(
  @builtin(workgroup_id) workgroupId: vec3<u32>,
  @builtin(local_invocation_id) localId: vec3<u32>
) {
  let rowIndex = ${cy(a,64)};
  if (rowIndex >= ${t.length}u) {
    return;
  }

  let result = segmented_map(rowIndex);
  write_result(rowIndex, result);
}
`,s=new Rf(n.device,{source:o,shaderLayout:{bindings:[...i.map(({name:e,index:t})=>({name:e,type:`storage`,group:0,location:t})),{name:`result`,type:`storage`,group:0,location:i.length}]}}),c=Object.fromEntries(i.map(({name:e,input:t})=>[e,t.buffer]));c.result=n,s.setBindings(c);let l=n.device.beginComputePass({});return s.dispatch(l,a.x,a.y,a.z),l.end(),n.device.submit(),s.destroy(),{success:!0}};function Yy(e){return`fn segmented_map(vertexIndex: u32) -> array<u32, 2> {
  var low = 0i;
  var high = ${e}i;
  while (low < high) {
    let mid = low + (high - low) / 2i;
    let midStart = read_segments(u32(mid))[0];
    if (midStart <= vertexIndex) {
      low = mid + 1i;
    } else {
      high = mid;
    }
  }

  let segmentIndex = u32(max(low - 1i, 0i));
  let segmentStart = read_segments(segmentIndex)[0];
  return array<u32, 2>(segmentIndex, vertexIndex - segmentStart);
}`}var Xy=({inputs:e,output:t,target:n})=>{let r=e.map((e,t)=>[`x${t}`,e]);Zy(n.device.limits,r);let i=r.map(([e,t])=>`${e}: array<{TYPE}, ${t.size}>`).join(`, `),a=0;return _y({module:{name:`interleave`,source:`\
fn interleave(${i}) -> array<{TYPE}, {RESULT_LEN}> {
  var out: array<{TYPE}, {RESULT_LEN}>;
${r.map(([e,t])=>{let n=Array.from({length:t.size},(t,n)=>`  out[${a+n}] = ${e}[${n}];`).join(`
`);return a+=t.size,n}).join(`
`)}
  return out;
}
`},inputs:e,output:t,outputBuffer:n}),{success:!0}};function Zy(e,t){let n=t.filter(([,e])=>!e.isConstant).length+1;if(n>e.maxStorageBuffersPerShaderStage)throw Error(`interleave() requires ${n} storage buffers, exceeding device limit ${e.maxStorageBuffersPerShaderStage}`);if(n>e.maxBindingsPerBindGroup)throw Error(`interleave() requires ${n} bindings, exceeding bind group limit ${e.maxBindingsPerBindGroup}`)}var Qy=`fn row_length(x: array<{TYPE}, {X_LEN}>) -> array<f32, 1> {
  var sum = 0.0;
  for (var i = 0u; i < {X_LEN}u; i = i + 1u) {
    sum += f32(x[i]) * f32(x[i]);
  }
  return array<f32, 1>(sqrt(sum));
}
`,$y=({inputs:e,output:t,target:n})=>(_y({module:{name:`row_length`,source:Qy},inputs:e,output:t,operationType:`float32`,outputBuffer:n}),{success:!0}),eb=async({inputs:e,output:t,target:n})=>{let r=fy(t.type);return _y({module:{name:`select`,source:`// inline expression select
`},inputs:e,output:t,operationType:t.type,outputBuffer:n,expression:t=>{let n=tb(`condition`,e.condition,t,r),i=tb(`whenTrue`,e.whenTrue,t,r);return`select(${tb(`whenFalse`,e.whenFalse,t,r)}, ${i}, ${n} != ${r})`}}),{success:!0}};function tb(e,t,n,r){return n<t.size?`${e}[${n}]`:t.size===1?`${e}[0]`:r}var nb=64,rb=({inputs:e,output:t,target:n})=>{let r=oy(Math.ceil(t.length/nb),n.device.limits.maxComputeWorkgroupsPerDimension),i=`\
@group(0) @binding(0) var<storage, read_write> result: array<i32>;

@compute @workgroup_size(${nb}) fn main(
  @builtin(workgroup_id) workgroupId: vec3<u32>,
  @builtin(local_invocation_id) localId: vec3<u32>
) {
  let rowIndex = ${cy(r,nb)};
  if (rowIndex >= ${t.length}u) {
    return;
  }

  let rowOffset = ${t.offset/t.ValueType.BYTES_PER_ELEMENT}u + rowIndex * ${t.stride/t.ValueType.BYTES_PER_ELEMENT}u;
  result[rowOffset] = ${e.start} + i32(rowIndex) * ${e.step};
}
`,a=new Rf(n.device,{source:i,shaderLayout:{bindings:[{name:`result`,type:`storage`,group:0,location:0}]}});a.setBindings({result:n});let o=n.device.beginComputePass({});return a.dispatch(o,r.x,r.y,r.z),o.end(),n.device.submit(),a.destroy(),{success:!0}},ib=({inputs:e,output:t,target:n})=>{let{columns:r}=e;return _y({module:{name:`swizzle`,source:`// swizzle expression handled inline`},expression:e=>`x[${r[e]}]`,inputs:{x:e.x},output:t,outputBuffer:n}),{success:!0}},ab=Se({arithmetic:()=>Dy,dot:()=>ky,equalAll:()=>jy,extent:()=>Ry,fround:()=>Wy,gather:()=>Gy,interleave:()=>Xy,length:()=>$y,segmentedMap:()=>Jy,select:()=>eb,sequence:()=>rb,swizzle:()=>ib}),ob=class{constructor(e,{id:t,isTransitionAttribute:n}){this.packedBuffers={},this.device=e,this.id=t,this.isTransitionAttribute=n,this.device.type===`webgpu`&&Wv.add(`webgpu`,{interleave:Xy})}hasGroups(e){return this.device.type===`webgpu`&&Object.values(e).some(e=>!!e.settings.bufferGroup)}finalize(){for(let e of Object.values(this.packedBuffers))e.packed.destroy();this.packedBuffers={}}getBufferLayouts(e,t){let n=this._getPackedGroups(e,t,{requireValues:!1,excludeAttributes:{}});return this._getBufferLayouts(e,n,t)}getBindings(e,t,n,r){let i=this._getPackedGroups(e,n,{requireValues:!0,excludeAttributes:r}),a={},o=new Set;for(let e of i.values()){let n=!this.packedBuffers[e.id]||e.attributes.some(e=>!!t[e.id]);a[e.id]=this._getPackedBuffer(e,n);for(let t of e.attributes)o.add(t.id)}return{bufferLayouts:this._getBufferLayouts(e,i,n).filter(t=>!r[t.name]&&!e[t.name]?.settings.isIndexed),buffers:a,groupedAttributeIds:o}}_getPackedGroups(e,t,{requireValues:n,excludeAttributes:r}){let i=new Map;for(let t of Object.values(e)){let e=t.settings.bufferGroup;if(!e)continue;let n=i.get(e)||[];n.push(t),i.set(e,n)}let a=new Map;for(let[e,o]of i){let i=this._getPackedGroup(e,o,t,n,r);i&&a.set(e,i)}return a}_getPackedGroup(e,t,n,r,i){if(t.length<2)return null;let a=t.map(e=>e.getBufferLayout(n)),o=a[0].stepMode,s=Math.max(1,t[0].numInstances),c=r&&t.every(e=>e.isConstant);for(let e=0;e<t.length;e++){let n=t[e],c=n.getAccessor(),l=c.size*c.bytesPerElement;if(i[n.id]||n.settings.isIndexed||n.settings.noAlloc||n.doublePrecision||this.isTransitionAttribute(n.id)||a[e].stepMode!==o||n.numInstances!==t[0].numInstances||(c.offset||0)!==0||(c.vertexOffset||0)!==0||rv(c)!==l||r&&(n.isConstant?!n.getConstantValue()||n.getConstantValue().byteLength<l:!ArrayBuffer.isView(n.value)||n.value.byteLength<s*l))return null}let l={},u=[],d=0;for(let e=0;e<t.length;e++){let n=t[e];d=sb(d),l[n.id]=d;for(let t of a[e].attributes||[])u.push({...t,byteOffset:d+(t.byteOffset||0)});d+=rv(n.getAccessor())}return d=sb(d),{id:e,attributes:t,byteStride:d,byteOffsets:l,rowCount:s,layout:{name:e,byteStride:c?0:d,stepMode:o,attributes:u}}}_getBufferLayouts(e,t,n){let r=[],i=new Set,a=new Set;for(let e of t.values())for(let t of e.attributes)a.add(t.id);for(let o of Object.values(e)){let e=o.settings.bufferGroup,s=e&&t.get(e);s&&a.has(o.id)?i.has(s.id)||(r.push(s.layout),i.add(s.id)):r.push(o.getBufferLayout(n))}return r}_getPackedBuffer(e,t){let n=JSON.stringify({byteStride:e.layout.byteStride,attributes:e.layout.attributes}),r=this.packedBuffers[e.id];if((!r||r.layoutKey!==n)&&(t=!0),t){r&&(r.packed.destroy(),delete this.packedBuffers[e.id]);let t=this._interleavePackedGroup(e);return this.packedBuffers[e.id]={packed:t,layoutKey:n},t.buffer}if(!r)throw Error(`Attribute buffer group ${e.id} has no packed buffer`);return r.packed.buffer}_interleavePackedGroup(e){let t=Xv(...e.attributes.map(t=>this._getInterleaveInput(e,t)));return Zv(this.device,t),t}_getInterleaveInput(e,t){let n=rv(t.getAccessor()),r=e.byteOffsets[t.id];if(cb(`${e.id}.${t.id} rowByteLength`,n),cb(`${e.id}.${t.id} groupByteOffset`,r),t.isConstant){let r=t.getConstantValue();if(!r)throw Error(`Attribute group ${e.id} is missing constant value ${t.id}`);return cb(`${e.id}.${t.id} constant byteOffset`,r.byteOffset),new L({id:t.id,type:`uint32`,size:n/4,isConstant:!0,value:new Uint32Array(r.buffer,r.byteOffset,n/Uint32Array.BYTES_PER_ELEMENT)})}let i=t.getBuffer(),a=t.byteOffset,o=t.getAccessor().stride||n;if(cb(`${e.id}.${t.id} byteOffset`,a),cb(`${e.id}.${t.id} stride`,o),!i)throw Error(`Attribute group ${e.id} cannot interleave missing buffer ${t.id}`);return new L({id:t.id,type:`uint32`,size:n/4,offset:a,stride:o,length:e.rowCount,buffer:i})}};function sb(e){return Math.ceil(e/4)*4}function cb(e,t){if(t%4!=0)throw Error(`Attribute buffer groups require 32-bit alignment: ${e}=${t}`)}function lb(e){let{source:t,target:n,start:r=0,size:i,getData:a}=e,o=e.end||n.length,s=t.length,c=o-r;if(s>c){n.set(t.subarray(0,c),r);return}if(n.set(t,r),!a)return;let l=s;for(;l<c;){let e=a(l,t);for(let t=0;t<i;t++)n[r+l]=e[t]||0,l++}}function ub({source:e,target:t,size:n,getData:r,sourceStartIndices:i,targetStartIndices:a}){if(!i||!a)return lb({source:e,target:t,size:n,getData:r}),t;let o=0,s=0,c=r&&((e,t)=>r(e+s,t)),l=Math.min(i.length,a.length);for(let r=1;r<l;r++){let l=i[r]*n,u=a[r]*n;lb({source:e.subarray(o,l),target:t,start:s,end:u,size:n,getData:c}),o=l,s=u}return s<t.length&&lb({source:[],target:t,start:s,size:n,getData:c}),t}function db(e){let{device:t,settings:n,value:r}=e,i=new vv(t,n);return i.setData({value:r instanceof Float64Array?new Float64Array:new Float32Array,normalized:n.normalized}),i}function fb(e){switch(e){case 1:return`float`;case 2:return`vec2`;case 3:return`vec3`;case 4:return`vec4`;default:throw Error(`No defined attribute type for size "${e}"`)}}function pb(e){switch(e){case 1:return`float32`;case 2:return`float32x2`;case 3:return`float32x3`;case 4:return`float32x4`;default:throw Error(`invalid type size`)}}function mb(e){e.push(e.shift())}function hb(e,t){let{settings:n,value:r,size:i}=e,a=e.isDoublePrecisionBuffer?2:1,o=0,{shaderAttributes:s}=e.settings;if(s)for(let e of Object.values(s))o=Math.max(o,e.vertexOffset??0);return(n.noAlloc?r.length:(t+o)*i)*a}function gb({device:e,source:t,target:n}){return(!n||n.byteLength<t.byteLength)&&(n?.destroy(),n=e.createBuffer({byteLength:t.byteLength,usage:t.usage})),n}function _b({device:e,buffer:t,attribute:n,fromLength:r,toLength:i,fromStartIndices:a,getData:o=e=>e}){let s=n.isDoublePrecisionBuffer?2:1,c=n.size*s,l=n.byteOffset,u=n.settings.bytesPerElement<4?l/n.settings.bytesPerElement*4:l,d=n.startIndices,f=a&&d,p=n.isConstant;if(!f&&t&&r>=i)return t;let m=n.value instanceof Float64Array?Float32Array:n.value.constructor,h=p?n.value:new m(n.getBuffer().readSyncWebGL(l,i*m.BYTES_PER_ELEMENT).buffer);if(n.settings.normalized&&!p){let e=o;o=(t,r)=>n.normalizeConstant(e(t,r))}let g=p?(e,t)=>o(h,t):(e,t)=>o(h.subarray(e+l,e+l+c),t),_=t?new Float32Array(t.readSyncWebGL(u,r*4).buffer):new Float32Array,v=new Float32Array(i);return ub({source:_,target:v,sourceStartIndices:a,targetStartIndices:d,size:c,getData:g}),(!t||t.byteLength<v.byteLength+u)&&(t?.destroy(),t=e.createBuffer({byteLength:v.byteLength+u,usage:35050})),t.write(v,u),t}var vb=class{constructor({device:e,attribute:t,timeline:n}){this.buffers=[],this.currentLength=0,this.device=e,this.transition=new bp(n),this.attribute=t,this.attributeInTransition=db(t),this.currentStartIndices=t.startIndices}get inProgress(){return this.transition.inProgress}start(e,t,n=1/0){this.settings=e,this.currentStartIndices=this.attribute.startIndices,this.currentLength=hb(this.attribute,t),this.transition.start({...e,duration:n})}update(){let e=this.transition.update();return e&&this.onUpdate(),e}setBuffer(e){let{stride:t}=this.attributeInTransition.getAccessor();this.attributeInTransition.setData({buffer:e,normalized:this.attribute.settings.normalized,value:this.attributeInTransition.value,stride:t})}cancel(){this.transition.cancel()}delete(){this.cancel();for(let e of this.buffers)e.destroy();this.buffers.length=0}},yb=class extends vb{constructor({device:e,attribute:t,timeline:n}){super({device:e,attribute:t,timeline:n}),this.type=`interpolation`,this.transform=wb(e,t)}start(e,t){let n=this.currentLength,r=this.currentStartIndices;if(super.start(e,t,e.duration),e.duration<=0){this.transition.cancel();return}let{buffers:i,attribute:a}=this;mb(i),i[0]=_b({device:this.device,buffer:i[0],attribute:a,fromLength:n,toLength:this.currentLength,fromStartIndices:r,getData:e.enter}),i[1]=gb({device:this.device,source:i[0],target:i[1]}),this.setBuffer(i[1]);let{transform:o}=this,s=o.model,c=Math.floor(this.currentLength/a.size);Cb(a)&&(c/=2),s.setVertexCount(c),a.isConstant?(s.setAttributes({aFrom:i[0]}),s.setConstantAttributes({aTo:a.value})):s.setAttributes({aFrom:i[0],aTo:a.getBuffer()}),o.transformFeedback.setBuffers({vCurrent:i[1]})}onUpdate(){let{duration:e,easing:t}=this.settings,{time:n}=this.transition,r=n/e;t&&(r=t(r));let{model:i}=this.transform,a={time:r};i.shaderInputs.setProps({interpolation:a}),this.transform.run({discard:!0})}delete(){super.delete(),this.transform.destroy()}},bb={name:`interpolation`,vs:`layout(std140) uniform interpolationUniforms {
  float time;
} interpolation;
`,uniformTypes:{time:`f32`}},xb=`#version 300 es
#define SHADER_NAME interpolation-transition-vertex-shader

in ATTRIBUTE_TYPE aFrom;
in ATTRIBUTE_TYPE aTo;
out ATTRIBUTE_TYPE vCurrent;

void main(void) {
  vCurrent = mix(aFrom, aTo, interpolation.time);
  gl_Position = vec4(0.0);
}
`,Sb=`#version 300 es
#define SHADER_NAME interpolation-transition-vertex-shader

in ATTRIBUTE_TYPE aFrom;
in ATTRIBUTE_TYPE aFrom64Low;
in ATTRIBUTE_TYPE aTo;
in ATTRIBUTE_TYPE aTo64Low;
out ATTRIBUTE_TYPE vCurrent;
out ATTRIBUTE_TYPE vCurrent64Low;

vec2 mix_fp64(vec2 a, vec2 b, float x) {
  vec2 range = sub_fp64(b, a);
  return sum_fp64(a, mul_fp64(range, vec2(x, 0.0)));
}

void main(void) {
  for (int i=0; i<ATTRIBUTE_SIZE; i++) {
    vec2 value = mix_fp64(vec2(aFrom[i], aFrom64Low[i]), vec2(aTo[i], aTo64Low[i]), interpolation.time);
    vCurrent[i] = value.x;
    vCurrent64Low[i] = value.y;
  }
  gl_Position = vec4(0.0);
}
`;function Cb(e){return e.isDoublePrecisionBuffer}function wb(e,t){let n=t.size,r=fb(n),i=pb(n),a=t.getBufferLayout();return Cb(t)?new Ff(e,{vs:Sb,bufferLayout:[{name:`aFrom`,byteStride:8*n,attributes:[{attribute:`aFrom`,format:i,byteOffset:0},{attribute:`aFrom64Low`,format:i,byteOffset:4*n}]},{name:`aTo`,byteStride:8*n,attributes:[{attribute:`aTo`,format:i,byteOffset:0},{attribute:`aTo64Low`,format:i,byteOffset:4*n}]}],modules:[Jo,bb],defines:{ATTRIBUTE_TYPE:r,ATTRIBUTE_SIZE:n},moduleSettings:{},varyings:[`vCurrent`,`vCurrent64Low`],bufferMode:35980,disableWarnings:!0}):new Ff(e,{vs:xb,bufferLayout:[{name:`aFrom`,format:i},{name:`aTo`,format:a.attributes[0].format}],modules:[bb],defines:{ATTRIBUTE_TYPE:r},varyings:[`vCurrent`],disableWarnings:!0})}var Tb=class extends vb{constructor({device:e,attribute:t,timeline:n}){super({device:e,attribute:t,timeline:n}),this.type=`spring`,this.texture=Ab(e),this.framebuffer=jb(e,this.texture),this.transform=kb(e,t)}start(e,t){let n=this.currentLength,r=this.currentStartIndices;super.start(e,t);let{buffers:i,attribute:a}=this;for(let t=0;t<2;t++)i[t]=_b({device:this.device,buffer:i[t],attribute:a,fromLength:n,toLength:this.currentLength,fromStartIndices:r,getData:e.enter});i[2]=gb({device:this.device,source:i[0],target:i[2]}),this.setBuffer(i[1]);let{model:o}=this.transform;o.setVertexCount(Math.floor(this.currentLength/a.size)),a.isConstant?o.setConstantAttributes({aTo:a.value}):o.setAttributes({aTo:a.getBuffer()})}onUpdate(){let{buffers:e,transform:t,framebuffer:n,transition:r}=this,i=this.settings;t.model.setAttributes({aPrev:e[0],aCur:e[1]}),t.transformFeedback.setBuffers({vNext:e[2]});let a={stiffness:i.stiffness,damping:i.damping};t.model.shaderInputs.setProps({spring:a}),t.run({framebuffer:n,discard:!1,parameters:{viewport:[0,0,1,1]},clearColor:[0,0,0,0]}),mb(e),this.setBuffer(e[1]),this.device.readPixelsToArrayWebGL(n)[0]>0||r.end()}delete(){super.delete(),this.transform.destroy(),this.texture.destroy(),this.framebuffer.destroy()}},Eb={name:`spring`,vs:`layout(std140) uniform springUniforms {
  float damping;
  float stiffness;
} spring;
`,uniformTypes:{damping:`f32`,stiffness:`f32`}},Db=`#version 300 es
#define SHADER_NAME spring-transition-vertex-shader

#define EPSILON 0.00001

in ATTRIBUTE_TYPE aPrev;
in ATTRIBUTE_TYPE aCur;
in ATTRIBUTE_TYPE aTo;
out ATTRIBUTE_TYPE vNext;
out float vIsTransitioningFlag;

ATTRIBUTE_TYPE getNextValue(ATTRIBUTE_TYPE cur, ATTRIBUTE_TYPE prev, ATTRIBUTE_TYPE dest) {
  ATTRIBUTE_TYPE velocity = cur - prev;
  ATTRIBUTE_TYPE delta = dest - cur;
  ATTRIBUTE_TYPE force = delta * spring.stiffness;
  ATTRIBUTE_TYPE resistance = velocity * spring.damping;
  return force - resistance + velocity + cur;
}

void main(void) {
  bool isTransitioning = length(aCur - aPrev) > EPSILON || length(aTo - aCur) > EPSILON;
  vIsTransitioningFlag = isTransitioning ? 1.0 : 0.0;

  vNext = getNextValue(aCur, aPrev, aTo);
  gl_Position = vec4(0, 0, 0, 1);
  gl_PointSize = 100.0;
}
`,Ob=`#version 300 es
#define SHADER_NAME spring-transition-is-transitioning-fragment-shader

in float vIsTransitioningFlag;

out vec4 fragColor;

void main(void) {
  if (vIsTransitioningFlag == 0.0) {
    discard;
  }
  fragColor = vec4(1.0);
}`;function kb(e,t){let n=fb(t.size),r=pb(t.size);return new Ff(e,{vs:Db,fs:Ob,bufferLayout:[{name:`aPrev`,format:r},{name:`aCur`,format:r},{name:`aTo`,format:t.getBufferLayout().attributes[0].format}],varyings:[`vNext`],modules:[Eb],defines:{ATTRIBUTE_TYPE:n},parameters:{depthCompare:`always`,blendColorOperation:`max`,blendColorSrcFactor:`one`,blendColorDstFactor:`one`,blendAlphaOperation:`max`,blendAlphaSrcFactor:`one`,blendAlphaDstFactor:`one`}})}function Ab(e){return e.createTexture({data:new Uint8Array(4),format:`rgba8unorm`,width:1,height:1})}function jb(e,t){return e.createFramebuffer({id:`spring-transition-is-transitioning-framebuffer`,width:1,height:1,colorAttachments:[t]})}var Mb={interpolation:yb,spring:Tb},Nb=class{constructor(e,{id:t,timeline:n}){if(!e)throw Error(`AttributeTransitionManager is constructed without device`);this.id=t,this.device=e,this.timeline=n,this.transitions={},this.needsRedraw=!1,this.numInstances=1}finalize(){for(let e in this.transitions)this._removeTransition(e)}update({attributes:e,transitions:t,numInstances:n}){this.numInstances=n||1;for(let n in e){let r=e[n],i=r.getTransitionSetting(t);i&&this._updateAttribute(n,r,i)}for(let n in this.transitions){let r=e[n];(!r||!r.getTransitionSetting(t))&&this._removeTransition(n)}}hasAttribute(e){let t=this.transitions[e];return t&&t.inProgress}getAttributes(){let e={};for(let t in this.transitions){let n=this.transitions[t];n.inProgress&&(e[t]=n.attributeInTransition)}return e}run(){if(this.numInstances===0)return!1;for(let e in this.transitions)this.transitions[e].update()&&(this.needsRedraw=!0);let e=this.needsRedraw;return this.needsRedraw=!1,e}_removeTransition(e){this.transitions[e].delete(),delete this.transitions[e]}_updateAttribute(e,t,n){let r=this.transitions[e],i=!r||r.type!==n.type;if(i){r&&this._removeTransition(e);let a=Mb[n.type];a?this.transitions[e]=new a({attribute:t,timeline:this.timeline,device:this.device}):(U.error(`unsupported transition type '${n.type}'`)(),i=!1)}(i||t.needsRedraw())&&(this.needsRedraw=!0,this.transitions[e].start(n,this.numInstances))}},Pb=`attributeManager.invalidate`,Fb=`attributeManager.updateStart`,Ib=`attributeManager.updateEnd`,Lb=`attribute.updateStart`,Rb=`attribute.allocate`,zb=`attribute.updateEnd`,Bb=class{constructor(e,{id:t=`attribute-manager`,stats:n,timeline:r}={}){this.mergeBoundsMemoized=yl(wd),this.id=t,this.device=e,this.attributes={},this.updateTriggers={},this.needsRedraw=!0,this.userData={},this.stats=n,this.attributeTransitionManager=new Nb(e,{id:`${t}-transitions`,timeline:r}),this.attributeBufferGroups=e.type===`webgpu`?new ob(e,{id:t,isTransitionAttribute:e=>this.attributeTransitionManager.hasAttribute(e)}):null,Object.seal(this)}finalize(){this.attributeBufferGroups?.finalize();for(let e in this.attributes)this.attributes[e].delete();this.attributeTransitionManager.finalize()}getNeedsRedraw(e={clearRedrawFlags:!1}){let t=this.needsRedraw;return this.needsRedraw=this.needsRedraw&&!e.clearRedrawFlags,t&&this.id}setNeedsRedraw(){this.needsRedraw=!0}add(e){this._add(e)}addInstanced(e){this._add(e,{stepMode:`instance`})}remove(e){for(let t of e)this.attributes[t]!==void 0&&(this.attributes[t].delete(),delete this.attributes[t])}invalidate(e,t){let n=this._invalidateTrigger(e,t);ui(Pb,this,e,n)}invalidateAll(e){for(let t in this.attributes)this.attributes[t].setNeedsUpdate(t,e);ui(Pb,this,`all`)}update({data:e,numInstances:t,startIndices:n=null,transitions:r,props:i={},buffers:a={},context:o={}}){let s=!1;ui(Fb,this),this.stats&&this.stats.get(`Update Attributes`).timeStart();for(let r in this.attributes){let c=this.attributes[r],l=c.settings.accessor;c.startIndices=n,c.numInstances=t,i[r]&&U.removed(`props.${r}`,`data.attributes.${r}`)(),c.setExternalBuffer(a[r])||c.setBinaryValue(typeof l==`string`?a[l]:void 0,e.startIndices)||typeof l==`string`&&!a[l]&&c.setConstantValue(o,i[l])||c.needsUpdate()&&(s=!0,this._updateAttribute({attribute:c,numInstances:t,data:e,props:i,context:o})),this.needsRedraw=this.needsRedraw||c.needsRedraw()}s&&ui(Ib,this,t),this.stats&&(this.stats.get(`Update Attributes`).timeEnd(),s&&this.stats.get(`Attributes updated`).incrementCount()),this.attributeTransitionManager.update({attributes:this.attributes,numInstances:t,transitions:r})}updateTransition(){let{attributeTransitionManager:e}=this,t=e.run();return this.needsRedraw=this.needsRedraw||t,t}getAttributes(){return{...this.attributes,...this.attributeTransitionManager.getAttributes()}}getBounds(e){let t=e.map(e=>this.attributes[e]?.getBounds());return this.mergeBoundsMemoized(t)}getChangedAttributes(e={clearChangedFlags:!1}){let{attributes:t,attributeTransitionManager:n}=this,r={...n.getAttributes()};for(let i in t){let a=t[i];a.needsRedraw(e)&&!n.hasAttribute(i)&&(r[i]=a)}return r}getBufferLayouts(e){return this.hasBufferGroups()?this.attributeBufferGroups.getBufferLayouts(this.getAttributes(),e):Object.values(this.getAttributes()).map(t=>t.getBufferLayout(e))}hasBufferGroups(){return!!this.attributeBufferGroups?.hasGroups(this.attributes)}getBufferGroupBindings(e,t,n={}){return this.attributeBufferGroups?this.attributeBufferGroups.getBindings(this.getAttributes(),e,t,n):{bufferLayouts:this.getBufferLayouts(t),buffers:{},groupedAttributeIds:new Set}}_add(e,t){for(let n in e){let r=e[n],i={...r,id:n,size:r.isIndexed&&1||r.size||1,...t};this.attributes[n]=new vv(this.device,i)}this._mapUpdateTriggersToAttributes()}_mapUpdateTriggersToAttributes(){let e={};for(let t in this.attributes)this.attributes[t].getUpdateTriggers().forEach(n=>{e[n]||(e[n]=[]),e[n].push(t)});this.updateTriggers=e}_invalidateTrigger(e,t){let{attributes:n,updateTriggers:r}=this,i=r[e];return i&&i.forEach(e=>{let r=n[e];r&&r.setNeedsUpdate(r.id,t)}),i}_updateAttribute(e){let{attribute:t,numInstances:n}=e;if(ui(Lb,t),t.constant){t.setConstantValue(e.context,t.value);return}t.allocate(n)&&ui(Rb,t,n),t.updateBuffer(e)&&(this.needsRedraw=!0,ui(zb,t,n))}},Vb=class extends bp{get value(){return this._value}_onUpdate(){let{time:e,settings:{fromValue:t,toValue:n,duration:r,easing:i}}=this,a=i(e/r);this._value=ya(t,n,a)}},Hb=1e-5;function Ub(e,t,n,r,i){let a=t-e;return(n-t)*i+-a*r+a+t}function Wb(e,t,n,r,i){if(Array.isArray(n)){let a=[];for(let o=0;o<n.length;o++)a[o]=Ub(e[o],t[o],n[o],r,i);return a}return Ub(e,t,n,r,i)}function Gb(e,t){if(Array.isArray(e)){let n=0;for(let r=0;r<e.length;r++){let i=e[r]-t[r];n+=i*i}return Math.sqrt(n)}return Math.abs(e-t)}var Kb={interpolation:Vb,spring:class extends bp{get value(){return this._currValue}_onUpdate(){let{fromValue:e,toValue:t,damping:n,stiffness:r}=this.settings,{_prevValue:i=e,_currValue:a=e}=this,o=Wb(i,a,t,n,r),s=Gb(o,t),c=Gb(o,a);s<Hb&&c<Hb&&(o=t,this.end()),this._prevValue=a,this._currValue=o}}},qb=class{constructor(e){this.transitions=new Map,this.timeline=e}get active(){return this.transitions.size>0}add(e,t,n,r){let{transitions:i}=this;if(i.has(e)){let n=i.get(e),{value:r=n.settings.fromValue}=n;t=r,this.remove(e)}if(r=_v(r),!r)return;let a=Kb[r.type];if(!a){U.error(`unsupported transition type '${r.type}'`)();return}let o=new a(this.timeline);o.start({...r,fromValue:t,toValue:n}),i.set(e,o)}remove(e){let{transitions:t}=this;t.has(e)&&(t.get(e).cancel(),t.delete(e))}update(){let e={};for(let[t,n]of this.transitions)n.update(),e[t]=n.value,n.inProgress||this.remove(t);return e}clear(){for(let e of this.transitions.keys())this.remove(e)}};function Jb(e){let t=e[Kf];for(let n in t){let r=t[n],{validate:i}=r;if(i&&!i(e[n],r))throw Error(`Invalid prop ${n}: ${e[n]}`)}}function Yb(e,t){let n=Zb({newProps:e,oldProps:t,propTypes:e[Kf],ignoreProps:{data:null,updateTriggers:null,extensions:null,transitions:null}}),r=$b(e,t),i=!1;return r||(i=ex(e,t)),{dataChanged:r,propsChanged:n,updateTriggersChanged:i,extensionsChanged:tx(e,t),transitionsChanged:Xb(e,t)}}function Xb(e,t){if(!e.transitions)return!1;let n={},r=e[Kf],i=!1;for(let a in e.transitions){let o=r[a],s=o&&o.type;(s===`number`||s===`color`||s===`array`)&&Qb(e[a],t[a],o)&&(n[a]=!0,i=!0)}return i?n:!1}function Zb({newProps:e,oldProps:t,ignoreProps:n={},propTypes:r={},triggerName:i=`props`}){if(t===e)return!1;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return`${i} changed shallowly`;for(let a of Object.keys(e))if(!(a in n)){if(!(a in t))return`${i}.${a} added`;let n=Qb(e[a],t[a],r[a]);if(n)return`${i}.${a} ${n}`}for(let a of Object.keys(t))if(!(a in n)){if(!(a in e))return`${i}.${a} dropped`;if(!Object.hasOwnProperty.call(e,a)){let n=Qb(e[a],t[a],r[a]);if(n)return`${i}.${a} ${n}`}}return!1}function Qb(e,t,n){let r=n&&n.equal;return r&&!r(e,t,n)||!r&&(r=e&&t&&e.equals,r&&!r.call(e,t))?`changed deeply`:!r&&t!==e?`changed shallowly`:null}function $b(e,t){if(t===null)return`oldProps is null, initial diff`;let n=!1,{dataComparator:r,_dataDiff:i}=e;return r?r(e.data,t.data)||(n=`Data comparator detected a change`):e.data!==t.data&&(n=`A new data container was supplied`),n&&i&&(n=i(e.data,t.data)||n),n}function ex(e,t){if(t===null||`all`in e.updateTriggers&&nx(e,t,`all`))return{all:!0};let n={},r=!1;for(let i in e.updateTriggers)i!==`all`&&nx(e,t,i)&&(n[i]=!0,r=!0);return r?n:!1}function tx(e,t){if(t===null)return!0;let n=t.extensions,{extensions:r}=e;if(r===n)return!1;if(!n||!r||r.length!==n.length)return!0;for(let e=0;e<r.length;e++)if(!r[e].equals(n[e]))return!0;return!1}function nx(e,t,n){let r=e.updateTriggers[n];r??={};let i=t.updateTriggers[n];return i??={},Zb({oldProps:i,newProps:r,triggerName:n})}var rx=`count(): argument not an object`,ix=`count(): argument not a container`;function ax(e){if(!sx(e))throw Error(rx);if(typeof e.count==`function`)return e.count();if(Number.isFinite(e.size))return e.size;if(Number.isFinite(e.length))return e.length;if(ox(e))return Object.keys(e).length;throw Error(ix)}function ox(e){return typeof e==`object`&&!!e&&e.constructor===Object}function sx(e){return typeof e==`object`&&!!e}function cx(e,t){if(!t)return e;let n={...e,...t};if(`defines`in t&&(n.defines={...e.defines,...t.defines}),`modules`in t&&(n.modules=(e.modules||[]).concat(t.modules),t.modules.some(e=>e.name===`project64`))){let e=n.modules.findIndex(e=>e.name===`project32`);e>=0&&n.modules.splice(e,1)}if(`inject`in t){if(!e.inject)n.inject=t.inject;else{let r={...e.inject};for(let e in t.inject)r[e]=(r[e]||``)+t.inject[e];n.inject=r}}return n}var lx={minFilter:`linear`,mipmapFilter:`linear`,magFilter:`linear`,addressModeU:`clamp-to-edge`,addressModeV:`clamp-to-edge`},ux={};function dx(e,t,n,r){if(n instanceof z)return n;n.constructor&&n.constructor.name!==`Object`&&(n={data:n});let i=null;n.compressed&&(i={minFilter:`linear`,mipmapFilter:n.data.length>1?`nearest`:`linear`});let{width:a,height:o}=n.data,s=t.createTexture({...n,sampler:{...lx,...i,...r},mipLevels:t.getMipLevelCount(a,o)});return t.type===`webgl`?s.generateMipmapsWebGL():t.type===`webgpu`&&t.generateMipmapsWebGPU(s),ux[s.id]=e,s}function fx(e,t){t&&t instanceof z&&ux[t.id]===e&&(t.delete(),delete ux[t.id])}var px={boolean:{validate(e,t){return!0},equal(e,t,n){return!!e==!!t}},number:{validate(e,t){return Number.isFinite(e)&&(!(`max`in t)||e<=t.max)&&(!(`min`in t)||e>=t.min)}},color:{validate(e,t){return t.optional&&!e||_x(e)&&(e.length===3||e.length===4)},equal(e,t,n){return ap(e,t,1)}},accessor:{validate(e,t){let n=vx(e);return n===`function`||n===vx(t.value)},equal(e,t,n){return typeof t==`function`||ap(e,t,1)}},array:{validate(e,t){return t.optional&&!e||_x(e)},equal(e,t,n){let{compare:r}=n;return r?ap(e,t,Number.isInteger(r)?r:+!!r):e===t}},object:{equal(e,t,n){if(n.ignore)return!0;let{compare:r}=n;return r?ap(e,t,Number.isInteger(r)?r:+!!r):e===t}},function:{validate(e,t){return t.optional&&!e||typeof e==`function`},equal(e,t,n){return!n.compare&&n.ignore!==!1||e===t}},data:{transform:(e,t,n)=>{if(!e)return e;let{dataTransform:r}=n.props;return r?r(e):typeof e.shape==`string`&&e.shape.endsWith(`-table`)&&Array.isArray(e.data)?e.data:e}},image:{transform:(e,t,n)=>{let r=n.context;return!r||!r.device?null:dx(n.id,r.device,e,{...t.parameters,...n.props.textureParameters})},release:(e,t,n)=>{fx(n.id,e)}}};function mx(e){let t={},n={},r={};for(let[i,a]of Object.entries(e)){let e=a?.deprecatedFor;if(e)r[i]=Array.isArray(e)?e:[e];else{let e=hx(i,a);t[i]=e,n[i]=e.value}}return{propTypes:t,defaultProps:n,deprecatedProps:r}}function hx(e,t){switch(vx(t)){case`object`:return gx(e,t);case`array`:return gx(e,{type:`array`,value:t,compare:!1});case`boolean`:return gx(e,{type:`boolean`,value:t});case`number`:return gx(e,{type:`number`,value:t});case`function`:return gx(e,{type:`function`,value:t,compare:!0});default:return{name:e,type:`unknown`,value:t}}}function gx(e,t){return`type`in t?{name:e,...px[t.type],...t}:`value`in t?{name:e,type:vx(t.value),...t}:{name:e,type:`object`,value:t}}function _x(e){return Array.isArray(e)||ArrayBuffer.isView(e)}function vx(e){return _x(e)?`array`:e===null?`null`:typeof e}function yx(e,t){let n;for(let e=t.length-1;e>=0;e--){let r=t[e];`extensions`in r&&(n=r.extensions)}let r=xx(e.constructor,n),i=Object.create(r);i[Gf]=e,i[Yf]={},i[Xf]={};for(let e=0;e<t.length;++e){let n=t[e];for(let e in n)i[e]=n[e]}return Object.freeze(i),i}var bx=`_mergedDefaultProps`;function xx(e,t){if(!(e instanceof jx.constructor))return{};let n=bx;if(t)for(let e of t){let t=e.constructor;t&&(n+=`:${t.extensionName||t.name}`)}return Ox(e,n)||(e[n]=Sx(e,t||[]))}function Sx(e,t){if(!e.prototype)return null;let n=xx(Object.getPrototypeOf(e)),r=mx(Ox(e,`defaultProps`)||{}),i=Object.assign(Object.create(null),n,r.defaultProps),a=Object.assign(Object.create(null),n?.[Kf],r.propTypes),o=Object.assign(Object.create(null),n?.[qf],r.deprecatedProps);for(let e of t){let t=xx(e.constructor);t&&(Object.assign(i,t),Object.assign(a,t[Kf]),Object.assign(o,t[qf]))}return Cx(i,e),Tx(i,a),wx(i,o),i[Kf]=a,i[qf]=o,t.length===0&&!Dx(e,`_propTypes`)&&(e._propTypes=a),i}function Cx(e,t){let n=kx(t);Object.defineProperties(e,{id:{writable:!0,value:n}})}function wx(e,t){for(let n in t)Object.defineProperty(e,n,{enumerable:!1,set(e){let r=`${this.id}: ${n}`;for(let r of t[n])Dx(this,r)||(this[r]=e);U.deprecated(r,t[n].join(`/`))()}})}function Tx(e,t){let n={},r={};for(let e in t){let i=t[e],{name:a,value:o}=i;i.async&&(n[a]=o,r[a]=Ex(a))}e[Jf]=n,e[Yf]={},Object.defineProperties(e,r)}function Ex(e){return{enumerable:!0,set(t){typeof t==`string`||t instanceof Promise||dv(t)?this[Yf][e]=t:this[Xf][e]=t},get(){if(this[Xf]){if(e in this[Xf])return this[Xf][e]||this[Jf][e];if(e in this[Yf]){let t=this[Gf]&&this[Gf].internalState;if(t&&t.hasAsyncProp(e))return t.getAsyncProp(e)||this[Jf][e]}}return this[Jf][e]}}}function Dx(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Ox(e,t){return Dx(e,t)&&e[t]}function kx(e){let t=e.componentName;return t||U.warn(`${e.name}.componentName not specified`)(),t||e.name}var Ax=0,jx=class{constructor(...e){this.props=yx(this,e),this.id=this.props.id,this.count=Ax++}clone(e){let{props:t}=this,n={};for(let e in t[Jf])e in t[Xf]?n[e]=t[Xf][e]:e in t[Yf]&&(n[e]=t[Yf][e]);return new this.constructor({...t,...n,...e})}};jx.componentName=`Component`,jx.defaultProps={};var Mx=Object.freeze({}),Nx=class{constructor(e){this.component=e,this.asyncProps={},this.onAsyncPropUpdated=()=>{},this.oldProps=null,this.oldAsyncProps=null}finalize(){for(let e in this.asyncProps){let t=this.asyncProps[e];t&&t.type&&t.type.release&&t.type.release(t.resolvedValue,t.type,this.component)}this.asyncProps={},this.component=null,this.resetOldProps()}getOldProps(){return this.oldAsyncProps||this.oldProps||Mx}resetOldProps(){this.oldAsyncProps=null,this.oldProps=this.component?this.component.props:null}hasAsyncProp(e){return e in this.asyncProps}getAsyncProp(e){let t=this.asyncProps[e];return t&&t.resolvedValue}isAsyncPropLoading(e){if(e){let t=this.asyncProps[e];return!!(t&&t.pendingLoadCount>0&&t.pendingLoadCount!==t.resolvedLoadCount)}for(let e in this.asyncProps)if(this.isAsyncPropLoading(e))return!0;return!1}reloadAsyncProp(e,t){this._watchPromise(e,Promise.resolve(t))}setAsyncProps(e){this.component=e[Gf]||this.component;let t=e[Xf]||{},n=e[Yf]||e,r=e[Jf]||{};for(let e in t){let n=t[e];this._createAsyncPropData(e,r[e]),this._updateAsyncProp(e,n),t[e]=this.getAsyncProp(e)}for(let e in n){let t=n[e];this._createAsyncPropData(e,r[e]),this._updateAsyncProp(e,t)}}_fetch(e,t){return null}_onResolve(e,t){}_onError(e,t){}_updateAsyncProp(e,t){if(this._didAsyncInputValueChange(e,t)){if(typeof t==`string`&&(t=this._fetch(e,t)),t instanceof Promise){this._watchPromise(e,t);return}if(dv(t)){this._resolveAsyncIterable(e,t);return}this._setPropValue(e,t)}}_freezeAsyncOldProps(){if(!this.oldAsyncProps&&this.oldProps){this.oldAsyncProps=Object.create(this.oldProps);for(let e in this.asyncProps)Object.defineProperty(this.oldAsyncProps,e,{enumerable:!0,value:this.oldProps[e]})}}_didAsyncInputValueChange(e,t){let n=this.asyncProps[e];return t===n.resolvedValue||t===n.lastValue?!1:(n.lastValue=t,!0)}_setPropValue(e,t){this._freezeAsyncOldProps();let n=this.asyncProps[e];n&&(t=this._postProcessValue(n,t),n.resolvedValue=t,n.pendingLoadCount++,n.resolvedLoadCount=n.pendingLoadCount)}_setAsyncPropValue(e,t,n){let r=this.asyncProps[e];r&&n>=r.resolvedLoadCount&&t!==void 0&&(this._freezeAsyncOldProps(),r.resolvedValue=t,r.resolvedLoadCount=n,this.onAsyncPropUpdated(e,t))}_watchPromise(e,t){let n=this.asyncProps[e];if(n){n.pendingLoadCount++;let r=n.pendingLoadCount;t.then(t=>{this.component&&(t=this._postProcessValue(n,t),this._setAsyncPropValue(e,t,r),this._onResolve(e,t))}).catch(t=>{this._onError(e,t)})}}async _resolveAsyncIterable(e,t){if(e!==`data`){this._setPropValue(e,t);return}let n=this.asyncProps[e];if(!n)return;n.pendingLoadCount++;let r=n.pendingLoadCount,i=[],a=0;for await(let n of t){if(!this.component)return;let{dataTransform:t}=this.component.props;i=t?t(n,i):i.concat(n),Object.defineProperty(i,"__diff",{enumerable:!1,value:[{startRow:a,endRow:i.length}]}),a=i.length,this._setAsyncPropValue(e,i,r)}this._onResolve(e,i)}_postProcessValue(e,t){let n=e.type;return n&&this.component&&(n.release&&n.release(e.resolvedValue,n,this.component),n.transform)?n.transform(t,n,this.component):t}_createAsyncPropData(e,t){if(!this.asyncProps[e]){let n=this.component&&this.component.props[Kf];this.asyncProps[e]={type:n&&n[e],lastValue:null,resolvedValue:t,pendingLoadCount:0,resolvedLoadCount:0}}}},Px=class extends Nx{constructor({attributeManager:e,layer:t}){super(t),this.attributeManager=e,this.needsRedraw=!0,this.needsUpdate=!0,this.subLayers=null,this.usesPickingColorCache=!1,this.disabledPickingIndices=[]}get layer(){return this.component}_fetch(e,t){let n=this.layer,r=n?.props.fetch;return r?r(t,{propName:e,layer:n}):super._fetch(e,t)}_onResolve(e,t){let n=this.layer;if(n){let r=n.props.onDataLoad;e===`data`&&r&&r(t,{propName:e,layer:n})}}_onError(e,t){let n=this.layer;n&&n.raiseError(t,`loading ${e} of ${this.layer}`)}},Fx=`layer.changeFlag`,Ix=`layer.initialize`,Lx=`layer.update`,Rx=`layer.finalize`,zx=`layer.matched`,Bx=2**24-1,Vx=Object.freeze([]),Hx=yl(({oldViewport:e,viewport:t})=>e.equals(t)),Ux=new Uint8ClampedArray;function Wx(e){return e.rowIndexes||e.pickingColors||e.instancePickingColors}function Gx(e){return e.rowIndexes}function Kx(e){return e.pickingColors||e.instancePickingColors}var qx={data:{type:`data`,value:Vx,async:!0},dataComparator:{type:`function`,value:null,optional:!0},_dataDiff:{type:`function`,value:e=>e&&e.__diff,optional:!0},dataTransform:{type:`function`,value:null,optional:!0},onDataLoad:{type:`function`,value:null,optional:!0},onError:{type:`function`,value:null,optional:!0},fetch:{type:`function`,value:(e,{propName:t,layer:n,loaders:r,loadOptions:i,signal:a})=>{let{resourceManager:o}=n.context;i||=n.getLoadOptions(),r||=n.props.loaders,a&&(i={...i,core:{...i?.core,fetch:{...i?.core?.fetch,signal:a}}});let s=o.contains(e);return!s&&!i&&(o.add({resourceId:e,data:xr(e,r),persistent:!1}),s=!0),s?o.subscribe({resourceId:e,onChange:e=>n.internalState?.reloadAsyncProp(t,e),consumerId:n.id,requestId:t}):xr(e,r,i)}},updateTriggers:{},visible:!0,pickable:!1,opacity:{type:`number`,min:0,max:1,value:1},operation:`draw`,onHover:{type:`function`,value:null,optional:!0},onClick:{type:`function`,value:null,optional:!0},onDragStart:{type:`function`,value:null,optional:!0},onDrag:{type:`function`,value:null,optional:!0},onDragEnd:{type:`function`,value:null,optional:!0},coordinateSystem:`default`,coordinateOrigin:{type:`array`,value:[0,0,0],compare:!0},modelMatrix:{type:`array`,value:null,compare:!0,optional:!0},wrapLongitude:!1,positionFormat:`XYZ`,colorFormat:`RGBA`,parameters:{type:`object`,value:{},optional:!0,compare:2},loadOptions:{type:`object`,value:null,optional:!0,ignore:!0},transitions:null,extensions:[],loaders:{type:`array`,value:[],optional:!0,ignore:!0},getPolygonOffset:{type:`function`,value:({layerIndex:e})=>[0,-e*100]},highlightedObjectIndex:null,autoHighlight:!1,highlightColor:{type:`accessor`,value:[0,0,128,128]}},Jx=class extends jx{constructor(){super(...arguments),this.internalState=null,this.lifecycle=Wf.NO_STATE,this.parent=null}static get componentName(){return Object.prototype.hasOwnProperty.call(this,`layerName`)?this.layerName:``}get root(){let e=this;for(;e.parent;)e=e.parent;return e}toString(){return`${this.constructor.layerName||this.constructor.name}({id: '${this.props.id}'})`}project(e){q(this.internalState);let t=this.internalState.viewport||this.context.viewport,[n,r,i]=du(Fd(e,{viewport:t,modelMatrix:this.props.modelMatrix,coordinateOrigin:this.props.coordinateOrigin,coordinateSystem:this.props.coordinateSystem}),t.pixelProjectionMatrix);return e.length===2?[n,r]:[n,r,i]}unproject(e){return q(this.internalState),(this.internalState.viewport||this.context.viewport).unproject(e)}projectPosition(e,t){return q(this.internalState),Id(e,{viewport:this.internalState.viewport||this.context.viewport,modelMatrix:this.props.modelMatrix,coordinateOrigin:this.props.coordinateOrigin,coordinateSystem:this.props.coordinateSystem,...t})}get isComposite(){return!1}get isDrawable(){return!0}setState(e){this.setChangeFlags({stateChanged:!0}),Object.assign(this.state,e),this.setNeedsRedraw()}setNeedsRedraw(){this.internalState&&(this.internalState.needsRedraw=!0)}setNeedsUpdate(){this.internalState&&(this.context.layerManager.setNeedsUpdate(String(this)),this.internalState.needsUpdate=!0)}get isLoaded(){return this.internalState?!this.internalState.isAsyncPropLoading():!1}get wrapLongitude(){return this.props.wrapLongitude}isPickable(){return this.props.pickable&&this.props.visible}getModels(){let e=this.state;return e&&(e.models||e.model&&[e.model])||[]}setShaderModuleProps(...e){for(let t of this.getModels())t.shaderInputs.setProps(...e)}getAttributeManager(){return this.internalState&&this.internalState.attributeManager}getCurrentLayer(){return this.internalState&&this.internalState.layer}getLoadOptions(){return this.props.loadOptions}use64bitPositions(){let{coordinateSystem:e}=this.props;return e==="default"||e===`lnglat`||e===`cartesian`}onHover(e,t){return this.props.onHover&&this.props.onHover(e,t)||!1}onClick(e,t){return this.props.onClick&&this.props.onClick(e,t)||!1}nullPickingColor(){return[0,0,0]}encodePickingColor(e,t=[]){return t[0]=e+1&255,t[1]=e+1>>8&255,t[2]=e+1>>8>>8&255,t}decodePickingColor(e){q(e instanceof Uint8Array);let[t,n,r]=e;return t+n*256+r*65536-1}getNumInstances(){return Number.isFinite(this.props.numInstances)?this.props.numInstances:this.state&&this.state.numInstances!==void 0?this.state.numInstances:ax(this.props.data)}getStartIndices(){return this.props.startIndices?this.props.startIndices:this.state&&this.state.startIndices?this.state.startIndices:null}getBounds(){return this.getAttributeManager()?.getBounds([`positions`,`instancePositions`])}getShaders(e){e=cx(e,{disableWarnings:!0,modules:this.context.defaultShaderModules});for(let t of this.props.extensions)e=cx(e,t.getShaders.call(this,t));return e}shouldUpdateState(e){return e.changeFlags.propsOrDataChanged}updateState(e){let t=this.getAttributeManager(),{dataChanged:n}=e.changeFlags;if(n&&t){if(Array.isArray(n))for(let e of n)t.invalidateAll(e);else t.invalidateAll()}if(t){let{props:n}=e,r=this.internalState.hasPickingBuffer,i=Number.isInteger(n.highlightedObjectIndex)||!!n.pickable||n.extensions.some(e=>e.getNeedsPickingBuffer.call(this,e));if(r!==i){this.internalState.hasPickingBuffer=i;let e=Wx(t.attributes);e&&(i&&e.constant&&(e.constant=!1,t.invalidate(e.id)),!e.value&&!i&&(e.constant=!0,e.value=Gx(t.attributes)?[Iu]:[0,0,0]))}}}finalizeState(e){for(let e of this.getModels())e.destroy();let t=this.getAttributeManager();t&&t.finalize(),this.context&&this.context.resourceManager.unsubscribe({consumerId:this.id}),this.internalState&&(this.internalState.uniformTransitions.clear(),this.internalState.finalize())}draw(e){for(let t of this.getModels())t.draw(e.renderPass)}getPickingInfo({info:e,mode:t,sourceLayer:n}){let{index:r}=e;return r>=0&&Array.isArray(this.props.data)&&(e.object=this.props.data[r]),e}raiseError(e,t){t&&(e=Error(`${t}: ${e.message}`,{cause:e})),this.props.onError?.(e)||this.context?.onError?.(e,this)}getNeedsRedraw(e={clearRedrawFlags:!1}){return this._getNeedsRedraw(e)}needsUpdate(){return this.internalState?this.internalState.needsUpdate||this.hasUniformTransition()||this.shouldUpdateState(this._getUpdateParams()):!1}hasUniformTransition(){return this.internalState?.uniformTransitions.active||!1}activateViewport(e){if(!this.internalState)return;let t=this.internalState.viewport;this.internalState.viewport=e,(!t||!Hx({oldViewport:t,viewport:e}))&&(this.setChangeFlags({viewportChanged:!0}),this.isComposite?this.needsUpdate()&&this.setNeedsUpdate():this._update())}invalidateAttribute(e=`all`){let t=this.getAttributeManager();t&&(e===`all`?t.invalidateAll():t.invalidate(e))}updateAttributes(e){let t=!1;for(let n in e)e[n].layoutChanged()&&(t=!0);for(let n of this.getModels())this._setModelAttributes(n,e,t)}_updateAttributes(){let e=this.getAttributeManager();if(!e)return;let t=this.props,n=this.getNumInstances(),r=this.getStartIndices();e.update({data:t.data,numInstances:n,startIndices:r,props:t,transitions:t.transitions,buffers:t.data.attributes,context:this});let i=e.getChangedAttributes({clearChangedFlags:!0});this.updateAttributes(i)}_updateAttributeTransition(){let e=this.getAttributeManager();e&&e.updateTransition()}_updateUniformTransition(){let{uniformTransitions:e}=this.internalState;if(e.active){let t=e.update(),n=Object.create(this.props);for(let e in t)Object.defineProperty(n,e,{value:t[e]});return n}return this.props}calculateInstancePickingColors(e,{numInstances:t}){if(e.constant)return;let n=Math.floor(Ux.length/4);this.internalState.usesPickingColorCache=!0;let r=t>0&&Ux[0]===0;if(n<t||r){t>Bx&&U.warn(`Layer has too many data objects. Picking might not be able to distinguish all objects.`)(),Ux=md.allocate(Ux,t,{size:4,copy:!0,maxCount:Math.max(t,Bx)});let e=Math.floor(Ux.length/4),i=[0,0,0],a=r?0:n;for(let t=a;t<e;t++)this.encodePickingColor(t,i),Ux[t*4+0]=i[0],Ux[t*4+1]=i[1],Ux[t*4+2]=i[2],Ux[t*4+3]=0}e.value=Ux.subarray(0,t*4)}_setModelAttributes(e,t,r=!1){if(!Object.keys(t).length)return;let i=this.getAttributeManager();if(i?.hasBufferGroups()){this._setGroupedModelAttributes(e,i,t);return}if(r){let n=this.getAttributeManager();e.setBufferLayout(n.getBufferLayouts(e)),t=n.getAttributes()}let a=e.userData?.excludeAttributes||{},o={},s={};for(let r in t){if(a[r])continue;let i=t[r].getValue();for(let a in i){let c=i[a];c instanceof n?t[r].settings.isIndexed?e.setIndexBuffer(c):o[a]=c:c&&(s[a]=c)}}e.setAttributes(o),e.setConstantAttributes(s)}_setGroupedModelAttributes(e,t,r){let i=e.userData?.excludeAttributes||{},a=t.getBufferGroupBindings(r,e,i);e.setBufferLayout(a.bufferLayouts);let o={...a.buffers},s={},c=t.getAttributes();for(let t in c){if(i[t]||a.groupedAttributeIds.has(t))continue;let r=c[t],l=r.getValue();for(let t in l){let i=l[t];i instanceof n?r.settings.isIndexed?e.setIndexBuffer(i):o[t]=i:i&&(s[t]=i)}}e.setAttributes(o),e.setConstantAttributes(s)}disablePickingIndex(e){let t=this.props.data;if(!(`attributes`in t)){this._disablePickingIndex(e);return}let n=this.getAttributeManager().attributes,r=Gx(n),i=Kx(n),a=r&&t.attributes&&t.attributes[r.id];if(a&&a.value){let n=a.value;for(let i=0;i<t.length;i++)n[r.getVertexOffset(i)]===e&&this._disablePickingIndex(i);return}let o=i&&t.attributes&&t.attributes[i.id];if(o&&o.value){let n=o.value,r=this.encodePickingColor(e);for(let e=0;e<t.length;e++){let t=i.getVertexOffset(e);n[t]===r[0]&&n[t+1]===r[1]&&n[t+2]===r[2]&&this._disablePickingIndex(e)}}else this._disablePickingIndex(e)}_disablePickingIndex(e){let t=this.getAttributeManager().attributes,n=Gx(t);if(n){let t=n.getVertexOffset(e),r=n.getVertexOffset(e+1),i=new Uint32Array(r-t);i.fill(Iu),n.buffer.write(i,t*i.BYTES_PER_ELEMENT);return}let r=Kx(t);if(!r){this.internalState&&Lu(this.internalState.disabledPickingIndices,e);return}let i=r.getVertexOffset(e),a=r.getVertexOffset(e+1);r.buffer.write(new Uint8Array(a-i),i)}restorePickingColors(){let e=this.getAttributeManager().attributes,t=Wx(e);if(!t){this.internalState&&(this.internalState.disabledPickingIndices.length=0);return}let n=Kx(e);this.internalState.usesPickingColorCache&&n&&n.value.buffer!==Ux.buffer&&(n.value=Ux.subarray(0,n.value.length)),t.updateSubBuffer({startOffset:0})}_initialize(){q(!this.internalState),ui(Ix,this);let e=this._getAttributeManager();this.internalState=new Px({attributeManager:e,layer:this}),this._clearChangeFlags(),this.state={},Object.defineProperty(this.state,"attributeManager",{get:()=>(U.deprecated(`layer.state.attributeManager`,`layer.getAttributeManager()`)(),e)}),this.internalState.uniformTransitions=new qb(this.context.timeline),this.internalState.onAsyncPropUpdated=this._onAsyncPropUpdated.bind(this),this.internalState.setAsyncProps(this.props),this.initializeState(this.context);for(let e of this.props.extensions)e.initializeState.call(this,this.context,e);this.setChangeFlags({dataChanged:`init`,propsChanged:`init`,viewportChanged:!0,extensionsChanged:!0}),this._update()}_transferState(e){ui(zx,this,this===e);let{state:t,internalState:n}=e;this!==e&&(this.internalState=n,this.state=t,this.internalState.setAsyncProps(this.props),this._diffProps(this.props,this.internalState.getOldProps()))}_update(){let e=this.needsUpdate();if(ui(Lx,this,e),!e)return;this.context.stats.get(`Layer updates`).incrementCount();let t=this.props,n=this.context,r=this.internalState,i=n.viewport,a=this._updateUniformTransition();r.propsInTransition=a,n.viewport=r.viewport||i,this.props=a;try{let e=this._getUpdateParams(),t=this.getModels();if(n.device)this.updateState(e);else try{this.updateState(e)}catch{}for(let t of this.props.extensions)t.updateState.call(this,e,t);this.setNeedsRedraw(),this._updateAttributes();let r=this.getModels()[0]!==t[0];this._postUpdate(e,r)}finally{n.viewport=i,this.props=t,this._clearChangeFlags(),r.needsUpdate=!1,r.resetOldProps()}}_finalize(){ui(Rx,this),this.finalizeState(this.context);for(let e of this.props.extensions)e.finalizeState.call(this,this.context,e)}_drawLayer({renderPass:e,shaderModuleProps:t=null,uniforms:n={},parameters:r={}}){this._updateAttributeTransition();let i=this.props,a=this.context;this.props=this.internalState.propsInTransition||i;try{t&&this.setShaderModuleProps(t);let{getPolygonOffset:i}=this.props,o=i&&i(n)||[0,0];a.device instanceof K_&&a.device.setParametersWebGL({polygonOffset:o});let s=a.device instanceof K_?null:Yx(r);if(Xx(this.getModels(),e,r,s),a.device instanceof K_)a.device.withParametersWebGL(r,()=>{let i={renderPass:e,shaderModuleProps:t,uniforms:n,parameters:r,context:a};for(let e of this.props.extensions)e.draw.call(this,i,e);this.draw(i)});else{s?.renderPassParameters&&e.setParameters(s.renderPassParameters);let i={renderPass:e,shaderModuleProps:t,uniforms:n,parameters:r,context:a};for(let e of this.props.extensions)e.draw.call(this,i,e);this.draw(i)}}finally{this.props=i}}getChangeFlags(){return this.internalState?.changeFlags}setChangeFlags(e){if(!this.internalState)return;let{changeFlags:t}=this.internalState;for(let n in e)if(e[n]){let r=!1;switch(n){case`dataChanged`:let i=e[n],a=t[n];i&&Array.isArray(a)&&(t.dataChanged=Array.isArray(i)?a.concat(i):i,r=!0);default:t[n]||(t[n]=e[n],r=!0)}r&&ui(Fx,this,n,e)}let n=!!(t.dataChanged||t.updateTriggersChanged||t.propsChanged||t.extensionsChanged);t.propsOrDataChanged=n,t.somethingChanged=n||t.viewportChanged||t.stateChanged}_clearChangeFlags(){this.internalState.changeFlags={dataChanged:!1,propsChanged:!1,updateTriggersChanged:!1,viewportChanged:!1,stateChanged:!1,extensionsChanged:!1,propsOrDataChanged:!1,somethingChanged:!1}}_diffProps(e,t){let n=Yb(e,t);if(n.updateTriggersChanged)for(let e in n.updateTriggersChanged)n.updateTriggersChanged[e]&&this.invalidateAttribute(e);if(n.transitionsChanged)for(let r in n.transitionsChanged)this.internalState.uniformTransitions.add(r,t[r],e[r],e.transitions?.[r]);return this.setChangeFlags(n)}validateProps(){Jb(this.props)}updateAutoHighlight(e){this.props.autoHighlight&&!Number.isInteger(this.props.highlightedObjectIndex)&&this._updateAutoHighlight(e)}_updateAutoHighlight(e){let t={highlightedObjectColor:e.picked?e.color:null},{highlightColor:n}=this.props;e.picked&&typeof n==`function`&&(t.highlightColor=n(e)),this.setShaderModuleProps({picking:t}),this.setNeedsRedraw()}_getAttributeManager(){let e=this.context;return new Bb(e.device,{id:this.props.id,stats:e.stats,timeline:e.timeline})}_postUpdate(e,t){let{props:n,oldProps:r}=e,i=this.state.model;i?.isInstanced&&i.setInstanceCount(this.getNumInstances());let{autoHighlight:a,highlightedObjectIndex:o,highlightColor:s}=n;if(t||r.autoHighlight!==a||r.highlightedObjectIndex!==o||r.highlightColor!==s){let e={};Array.isArray(s)&&(e.highlightColor=s),(t||r.autoHighlight!==a||o!==r.highlightedObjectIndex)&&(e.highlightedObjectColor=Number.isFinite(o)&&o>=0?this.encodePickingColor(o):null),this.setShaderModuleProps({picking:e})}}_getUpdateParams(){return{props:this.props,oldProps:this.internalState.getOldProps(),context:this.context,changeFlags:this.internalState.changeFlags}}_getNeedsRedraw(e){if(!this.internalState)return!1;let t=!1;t||=this.internalState.needsRedraw&&this.id;let n=this.getAttributeManager(),r=n?n.getNeedsRedraw(e):!1;if(t||=r,t)for(let e of this.props.extensions)e.onNeedsRedraw.call(this,e);return this.internalState.needsRedraw=this.internalState.needsRedraw&&!e.clearRedrawFlags,t}_onAsyncPropUpdated(){this._diffProps(this.props,this.internalState.getOldProps()),this.setNeedsUpdate()}};Jx.defaultProps=qx,Jx.layerName=`Layer`;function Yx(e){let{blendConstant:t,...n}=e;return t?{pipelineParameters:n,renderPassParameters:{blendConstant:t}}:{pipelineParameters:n}}function Xx(e,t,n,r){for(let i of e)i.device.type===`webgpu`?(Zx(i,t),i.setParameters({...i.parameters,...r?.pipelineParameters})):i.setParameters(n)}function Zx(e,t){let n=t.props.framebuffer||(t.framebuffer??null);if(!n)return;let r=n.colorAttachments.map(e=>e?.texture?.format??null),i=n.depthStencilAttachment?.texture?.format,a=e;(!Qx(a.props.colorAttachmentFormats,r)||a.props.depthStencilAttachmentFormat!==i)&&(a.props.colorAttachmentFormats=r,a.props.depthStencilAttachmentFormat=i,a._setPipelineNeedsUpdate(`attachment formats`))}function Qx(e,t){if(e===t)return!0;if(!e||!t||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}var $x=`compositeLayer.renderLayers`,eS=class extends Jx{get isComposite(){return!0}get isDrawable(){return!1}get isLoaded(){return super.isLoaded&&this.getSubLayers().every(e=>e.isLoaded)}getSubLayers(){return this.internalState&&this.internalState.subLayers||[]}initializeState(e){}setState(e){super.setState(e),this.setNeedsUpdate()}getPickingInfo({info:e}){let{object:t}=e;return t&&t.__source&&t.__source.parent&&t.__source.parent.id===this.id?(e.object=t.__source.object,e.index=t.__source.index,e):e}filterSubLayer(e){return!0}shouldRenderSubLayer(e,t){return t&&t.length}getSubLayerClass(e,t){let{_subLayerProps:n}=this.props;return n&&n[e]&&n[e].type||t}getSubLayerRow(e,t,n){return e.__source={parent:this,object:t,index:n},e}getSubLayerAccessor(e){if(typeof e==`function`){let t={index:-1,data:this.props.data,target:[]};return(n,r)=>n&&n.__source?(t.index=n.__source.index,e(n.__source.object,t)):e(n,r)}return e}getSubLayerProps(e={}){let{opacity:t,pickable:n,visible:r,parameters:i,getPolygonOffset:a,highlightedObjectIndex:o,autoHighlight:s,highlightColor:c,coordinateSystem:l,coordinateOrigin:u,wrapLongitude:d,positionFormat:f,modelMatrix:p,extensions:m,fetch:h,operation:g,_subLayerProps:_}=this.props,v={id:``,updateTriggers:{},opacity:t,pickable:n,visible:r,parameters:i,getPolygonOffset:a,highlightedObjectIndex:o,autoHighlight:s,highlightColor:c,coordinateSystem:l,coordinateOrigin:u,wrapLongitude:d,positionFormat:f,modelMatrix:p,extensions:m,fetch:h,operation:g},y=_&&e.id&&_[e.id],b=y&&y.updateTriggers,x=e.id||`sublayer`;if(y){let t=this.props[Kf],n=e.type?e.type._propTypes:{};for(let e in y){let r=n[e]||t[e];r&&r.type===`accessor`&&(y[e]=this.getSubLayerAccessor(y[e]))}}Object.assign(v,e,y),v.id=`${this.props.id}-${x}`,v.updateTriggers={all:this.props.updateTriggers?.all,...e.updateTriggers,...b};for(let e of m){let t=e.getSubLayerProps.call(this,e);t&&Object.assign(v,t,{updateTriggers:Object.assign(v.updateTriggers,t.updateTriggers)})}return v}_updateAutoHighlight(e){for(let t of this.getSubLayers())t.updateAutoHighlight(e)}_getAttributeManager(){return null}_postUpdate(e,t){let n=this.internalState.subLayers,r=!n||this.needsUpdate();r&&(n=Zf(this.renderLayers(),Boolean),this.internalState.subLayers=n),ui($x,this,r,n);for(let e of n)e.parent=this}};eS.layerName=`CompositeLayer`;var tS={bearing:0,pitch:0,position:[0,0,0]},nS={speed:1.2,curve:1.414},rS=class extends Op{constructor(e={}){super({compare:[`longitude`,`latitude`,`zoom`,`bearing`,`pitch`,`position`],extract:[`width`,`height`,`longitude`,`latitude`,`zoom`,`bearing`,`pitch`,`position`],required:[`width`,`height`,`latitude`,`longitude`,`zoom`]}),this.opts={...nS,...e}}interpolateProps(e,t,n){let r=xu(e,t,n,this.opts);for(let i in tS)r[i]=ya(e[i]||tS[i],t[i]||tS[i],n);return r}getDuration(e,t){let{transitionDuration:n}=t;return n===`auto`&&(n=Su(e,t,this.opts)),n}},iS=class{constructor(e){this.indexStarts=[0],this.vertexStarts=[0],this.vertexCount=0,this.instanceCount=0;let{attributes:t={}}=e;this.typedArrayManager=md,this.attributes={},this._attributeDefs=t,this.opts=e,this.updateGeometry(e)}updateGeometry(e){Object.assign(this.opts,e);let{data:t,buffers:n={},getGeometry:r,geometryBuffer:i,positionFormat:a,dataChanged:o,normalize:s=!0}=this.opts;if(this.data=t,this.getGeometry=r,this.positionSize=i&&i.size||(a===`XY`?2:3),this.buffers=n,this.normalize=s,i&&(q(t.startIndices),this.getGeometry=this.getGeometryFromBuffer(i),s||(n.vertexPositions=i)),this.geometryBuffer=n.vertexPositions,Array.isArray(o))for(let e of o)this._rebuildGeometry(e);else this._rebuildGeometry()}updatePartialGeometry({startRow:e,endRow:t}){this._rebuildGeometry({startRow:e,endRow:t})}getGeometryFromBuffer(e){let t=e.value||e;return ArrayBuffer.isView(t)?fv(t,{size:this.positionSize,offset:e.offset,stride:e.stride,startIndices:this.data.startIndices}):null}_allocate(e,t){let{attributes:n,buffers:r,_attributeDefs:i,typedArrayManager:a}=this;for(let o in i)if(o in r)a.release(n[o]),n[o]=null;else{let r=i[o];r.copy=t,n[o]=a.allocate(n[o],e,r)}}_forEachGeometry(e,t,n){let{data:r,getGeometry:i}=this,{iterable:a,objectInfo:o}=uv(r,t,n);for(let t of a)o.index++,e(i?i(t,o):null,o.index)}_rebuildGeometry(e){if(!this.data)return;let{indexStarts:t,vertexStarts:r,instanceCount:i}=this,{data:a,geometryBuffer:o}=this,{startRow:s=0,endRow:c=1/0}=e||{},l={};if(e||(t=[0],r=[0]),this.normalize||!o)this._forEachGeometry((e,t)=>{let n=e&&this.normalizeGeometry(e);l[t]=n,r[t+1]=r[t]+(n?this.getGeometrySize(n):0)},s,c),i=r[r.length-1];else if(r=a.startIndices,i=r[a.length]||0,ArrayBuffer.isView(o))i||=o.length/this.positionSize;else if(o instanceof n){let e=this.positionSize*4;i||=o.byteLength/e}else if(o.buffer){let e=o.stride||this.positionSize*4;i||=o.buffer.byteLength/e}else if(o.value){let e=o.value,t=o.stride/e.BYTES_PER_ELEMENT||this.positionSize;i||=e.length/t}this._allocate(i,!!e),this.indexStarts=t,this.vertexStarts=r,this.instanceCount=i;let u={};this._forEachGeometry((e,n)=>{let a=l[n]||e;u.vertexStart=r[n],u.indexStart=t[n];let o=n<r.length-1?r[n+1]:i;u.geometrySize=o-r[n],u.geometryIndex=n,this.updateGeometryAttributes(a,u)},s,c),this.vertexCount=t[t.length-1]}},aS=`layout(std140) uniform iconUniforms {
  float sizeScale;
  vec2 iconsTextureDim;
  float sizeBasis;
  float sizeMinPixels;
  float sizeMaxPixels;
  bool billboard;
  highp int sizeUnits;
  float alphaCutoff;
} icon;
`,oS={name:`icon`,vs:aS,fs:aS,uniformTypes:{sizeScale:`f32`,iconsTextureDim:`vec2<f32>`,sizeBasis:`f32`,sizeMinPixels:`f32`,sizeMaxPixels:`f32`,billboard:`f32`,sizeUnits:`i32`,alphaCutoff:`f32`}},sS=`#version 300 es
#define SHADER_NAME icon-layer-vertex-shader
in vec2 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in float instanceSizes;
in float instanceAngles;
in vec4 instanceColors;
#ifdef USE_ROW_INDEXES
in float rowIndexes;
#endif
in vec4 instanceIconFrames;
in float instanceColorModes;
in vec2 instanceOffsets;
in vec2 instancePixelOffset;
out float vColorMode;
out vec4 vColor;
out vec2 vTextureCoords;
out vec2 uv;
vec2 rotate_by_angle(vec2 vertex, float angle) {
float angle_radian = angle * PI / 180.0;
float cos_angle = cos(angle_radian);
float sin_angle = sin(angle_radian);
mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
return rotationMatrix * vertex;
}
void main(void) {
geometry.worldPosition = instancePositions;
geometry.uv = positions;
#ifdef USE_ROW_INDEXES
geometry.pickingColor = picking_getPickingColorFromIndex(rowIndexes);
#else
geometry.pickingColor = picking_getPickingColorFromInstanceID();
#endif
uv = positions;
vec2 iconSize = instanceIconFrames.zw;
float sizePixels = clamp(
project_size_to_pixel(instanceSizes * icon.sizeScale, icon.sizeUnits),
icon.sizeMinPixels, icon.sizeMaxPixels
);
float iconConstraint = icon.sizeBasis == 0.0 ? iconSize.x : iconSize.y;
float instanceScale = iconConstraint == 0.0 ? 0.0 : sizePixels / iconConstraint;
vec2 pixelOffset = positions / 2.0 * iconSize + instanceOffsets;
pixelOffset = rotate_by_angle(pixelOffset, instanceAngles) * instanceScale;
pixelOffset += instancePixelOffset;
pixelOffset.y *= -1.0;
if (icon.billboard)  {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = vec3(pixelOffset, 0.0);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
DECKGL_FILTER_SIZE(offset_common, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
vTextureCoords = mix(
instanceIconFrames.xy,
instanceIconFrames.xy + iconSize,
(positions.xy + 1.0) / 2.0
) / icon.iconsTextureDim;
vColor = instanceColors;
DECKGL_FILTER_COLOR(vColor, geometry);
vColorMode = instanceColorModes;
}
`,cS=`#version 300 es
#define SHADER_NAME icon-layer-fragment-shader
precision highp float;
uniform sampler2D iconsTexture;
in float vColorMode;
in vec4 vColor;
in vec2 vTextureCoords;
in vec2 uv;
out vec4 fragColor;
void main(void) {
geometry.uv = uv;
vec4 texColor = texture(iconsTexture, vTextureCoords);
vec3 color = mix(texColor.rgb, vColor.rgb, vColorMode);
float a = texColor.a * layer.opacity * vColor.a;
if (a < icon.alphaCutoff) {
discard;
}
fragColor = vec4(color, a);
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,lS=`struct IconUniforms {
  sizeScale: f32,
  iconsTextureDim: vec2<f32>,
  sizeBasis: f32,
  sizeMinPixels: f32,
  sizeMaxPixels: f32,
  billboard: i32,
  sizeUnits: i32,
  alphaCutoff: f32
};

@group(0) @binding(auto) var<uniform> icon: IconUniforms;
@group(0) @binding(auto) var iconsTexture : texture_2d<f32>;
@group(0) @binding(auto) var iconsTextureSampler : sampler;

fn rotate_by_angle(vertex: vec2<f32>, angle_deg: f32) -> vec2<f32> {
  let angle_radian = angle_deg * PI / 180.0;
  let c = cos(angle_radian);
  let s = sin(angle_radian);
  let rotation = mat2x2<f32>(vec2<f32>(c, s), vec2<f32>(-s, c));
  return rotation * vertex;
}

struct Attributes {
  @builtin(instance_index) instanceIndex : u32,
  @location(0) positions: vec2<f32>,

  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceSizes: f32,
  @location(4) instanceAngles: f32,
  @location(5) instanceColors: vec4<f32>,
  @location(6) instanceIconFrames: vec4<f32>,
  @location(7) instanceColorModes: f32,
  @location(8) instanceOffsets: vec2<f32>,
  @location(9) instancePixelOffset: vec2<f32>,
  PICKING_COLOR_ATTRIBUTE
};

struct Varyings {
  @builtin(position) position: vec4<f32>,

  @location(0) vColorMode: f32,
  @location(1) vColor: vec4<f32>,
  @location(2) vTextureCoords: vec2<f32>,
  @location(3) uv: vec2<f32>,
  @location(4) pickingColor: vec3<f32>,
};

@vertex
fn vertexMain(inp: Attributes) -> Varyings {
  // write geometry fields used by filters + FS
  geometry.worldPosition = inp.instancePositions;
  geometry.uv = inp.positions;
  geometry.pickingColor = PICKING_COLOR_VALUE;

  var outp: Varyings;
  outp.uv = inp.positions;

  let iconSize = inp.instanceIconFrames.zw;

  // convert size in meters to pixels, then clamp
  let sizePixels = clamp(
    project_unit_size_to_pixel(inp.instanceSizes * icon.sizeScale, icon.sizeUnits),
    icon.sizeMinPixels, icon.sizeMaxPixels
  );

  // scale icon height to match instanceSize
  let iconConstraint = select(iconSize.y, iconSize.x, icon.sizeBasis == 0.0);
  let instanceScale = select(sizePixels / iconConstraint, 0.0, iconConstraint == 0.0);

  // scale and rotate vertex in "pixel" units; then add per-instance pixel offset
  var pixelOffset = inp.positions / 2.0 * iconSize + inp.instanceOffsets;
  pixelOffset = rotate_by_angle(pixelOffset, inp.instanceAngles) * instanceScale;
  pixelOffset = pixelOffset + inp.instancePixelOffset;
  pixelOffset.y = pixelOffset.y * -1.0;

  if (icon.billboard != 0) {
    var pos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, vec3<f32>(0.0)); // TODO, &geometry.position);
    // DECKGL_FILTER_GL_POSITION(pos, geometry);

    var offset = vec3<f32>(pixelOffset, 0.0);
    // DECKGL_FILTER_SIZE(offset, geometry);
    let clipOffset = project_pixel_size_to_clipspace(offset.xy);
    pos = vec4<f32>(pos.x + clipOffset.x, pos.y + clipOffset.y, pos.z, pos.w);
    outp.position = pos;
  } else {
    var offset_common = vec3<f32>(project_pixel_size_vec2(pixelOffset), 0.0);
    // DECKGL_FILTER_SIZE(offset_common, geometry);
    var pos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, offset_common); // TODO, &geometry.position);
    // DECKGL_FILTER_GL_POSITION(pos, geometry);
    outp.position = pos;
  }

  let uvMix = (inp.positions.xy + vec2<f32>(1.0, 1.0)) * 0.5;
  outp.vTextureCoords = mix(inp.instanceIconFrames.xy, inp.instanceIconFrames.xy + iconSize, uvMix) / icon.iconsTextureDim;

  outp.vColor = inp.instanceColors;
  // DECKGL_FILTER_COLOR(outp.vColor, geometry);

  outp.vColorMode = inp.instanceColorModes;
  outp.pickingColor = geometry.pickingColor;

  return outp;
}

@fragment
fn fragmentMain(inp: Varyings) -> @location(0) vec4<f32> {
  // expose to deck.gl filter hooks
  geometry.uv = inp.uv;

  let texColor = textureSample(iconsTexture, iconsTextureSampler, inp.vTextureCoords);

  // if colorMode == 0, use pixel color from the texture
  // if colorMode == 1 (or picking), use texture as transparency mask
  let rgb = mix(texColor.rgb, inp.vColor.rgb, inp.vColorMode);
  let a = texColor.a * layer.opacity * inp.vColor.a;

  if (a < icon.alphaCutoff) {
    discard;
  }

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(inp.pickingColor)) {
      discard;
    }
    return vec4<f32>(inp.pickingColor, 1.0);
  }

  var fragColor = deckgl_premultiplied_alpha(vec4<f32>(rgb, a));

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(inp.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  return fragColor;
}
`;function uS(e){return lS.replace(`PICKING_COLOR_ATTRIBUTE`,e?`@location(10) rowIndexes: u32,`:``).replace(`PICKING_COLOR_VALUE`,e?`picking_getPickingColorFromIndex(inp.rowIndexes)`:`picking_getPickingColorFromIndex(inp.instanceIndex)`)}var dS=1024,fS=4,pS=()=>{},mS={minFilter:`linear`,mipmapFilter:`linear`,magFilter:`linear`,addressModeU:`clamp-to-edge`,addressModeV:`clamp-to-edge`},hS={x:0,y:0,width:0,height:0};function gS(e){return 2**Math.ceil(Math.log2(e))}function _S(e,t,n,r){let i=Math.min(n/t.width,r/t.height),a=Math.floor(t.width*i),o=Math.floor(t.height*i);return i===1?{image:t,width:a,height:o}:(e.canvas.height=o,e.canvas.width=a,e.clearRect(0,0,a,o),e.drawImage(t,0,0,t.width,t.height,0,0,a,o),{image:e.canvas,width:a,height:o})}function vS(e){return e&&(e.id||e.url)}function yS(e){let{device:t}=e;t.type===`webgl`?e.generateMipmapsWebGL():t.type===`webgpu`&&t.generateMipmapsWebGPU(e)}function bS(e,t,n,r){let{width:i,height:a,device:o}=e,s=o.createTexture({format:`rgba8unorm`,width:t,height:n,sampler:r,mipLevels:o.getMipLevelCount(t,n)}),c=o.createCommandEncoder();c.copyTextureToTexture({sourceTexture:e,destinationTexture:s,width:i,height:a});let l=c.finish();return o.submit(l),yS(s),e.destroy(),s}function xS(e,t,n){for(let r=0;r<t.length;r++){let{icon:i,xOffset:a}=t[r],o=vS(i);e[o]={...i,x:a,y:n}}}function SS({icons:e,buffer:t,mapping:n={},xOffset:r=0,yOffset:i=0,rowHeight:a=0,canvasWidth:o}){let s=[];for(let c=0;c<e.length;c++){let l=e[c];if(!n[vS(l)]){let{height:e,width:c}=l;r+c+t>o&&(xS(n,s,i),r=0,i=a+i+t,a=0,s=[]),s.push({icon:l,xOffset:r}),r=r+c+t,a=Math.max(a,e)}}return s.length>0&&xS(n,s,i),{mapping:n,rowHeight:a,xOffset:r,yOffset:i,canvasWidth:o,canvasHeight:gS(a+i+t)}}function CS(e,t,n){if(!e||!t)return null;n||={};let r={},{iterable:i,objectInfo:a}=uv(e);for(let e of i){a.index++;let i=t(e,a),o=vS(i);if(!i)throw Error(`Icon is missing.`);if(!i.url)throw Error(`Icon url is missing.`);!r[o]&&(!n[o]||i.url!==n[o].url)&&(r[o]={...i,source:e,sourceIndex:a.index})}return r}var wS=class{constructor(e,{onUpdate:t=pS,onError:n=pS}){this._loadOptions=null,this._texture=null,this._externalTexture=null,this._mapping={},this._samplerParameters=null,this._pendingCount=0,this._autoPacking=!1,this._xOffset=0,this._yOffset=0,this._rowHeight=0,this._buffer=fS,this._canvasWidth=dS,this._canvasHeight=0,this._canvas=null,this.device=e,this.onUpdate=t,this.onError=n}finalize(){this._texture?.delete()}getTexture(){return this._texture||this._externalTexture}getIconMapping(e){let t=this._autoPacking?vS(e):e;return this._mapping[t]||hS}setProps({loadOptions:e,autoPacking:t,iconAtlas:n,iconMapping:r,textureParameters:i}){e&&(this._loadOptions=e),t!==void 0&&(this._autoPacking=t),r&&(this._mapping=r),n&&(this._texture?.delete(),this._texture=null,this._externalTexture=n),i&&(this._samplerParameters=i)}get isLoaded(){return this._pendingCount===0}packIcons(e,t){if(!this._autoPacking||typeof document>`u`)return;let n=Object.values(CS(e,t,this._mapping)||{});if(n.length>0){let{mapping:e,xOffset:t,yOffset:r,rowHeight:i,canvasHeight:a}=SS({icons:n,buffer:this._buffer,canvasWidth:this._canvasWidth,mapping:this._mapping,rowHeight:this._rowHeight,xOffset:this._xOffset,yOffset:this._yOffset});this._rowHeight=i,this._mapping=e,this._xOffset=t,this._yOffset=r,this._canvasHeight=a,this._texture||=this.device.createTexture({format:`rgba8unorm`,data:null,width:this._canvasWidth,height:this._canvasHeight,sampler:this._samplerParameters||mS,mipLevels:this.device.getMipLevelCount(this._canvasWidth,this._canvasHeight)}),this._texture.height!==this._canvasHeight&&(this._texture=bS(this._texture,this._canvasWidth,this._canvasHeight,this._samplerParameters||mS)),this.onUpdate(!0),this._canvas=this._canvas||document.createElement(`canvas`),this._loadIcons(n)}}_loadIcons(e){let t=this._canvas.getContext(`2d`,{willReadFrequently:!0});for(let n of e)this._pendingCount++,xr(n.url,this._loadOptions).then(e=>{let r=vS(n),i=this._mapping[r],{x:a,y:o,width:s,height:c}=i,{image:l,width:u,height:d}=_S(t,e,s,c),f=a+(s-u)/2,p=o+(c-d)/2;this._texture?.copyExternalImage({image:l,x:f,y:p,width:u,height:d}),i.x=f,i.y=p,i.width=u,i.height=d,this._texture&&yS(this._texture),this.onUpdate(u!==s||d!==c)}).catch(e=>{this.onError({url:n.url,source:n.source,sourceIndex:n.sourceIndex,loadOptions:this._loadOptions,error:e})}).finally(()=>{this._pendingCount--})}},TS=[0,0,0,255],ES={iconAtlas:{type:`image`,value:null,async:!0},iconMapping:{type:`object`,value:{},async:!0},sizeScale:{type:`number`,value:1,min:0},billboard:!0,sizeUnits:`pixels`,sizeBasis:`height`,sizeMinPixels:{type:`number`,min:0,value:0},sizeMaxPixels:{type:`number`,min:0,value:2**53-1},alphaCutoff:{type:`number`,value:.05,min:0,max:1},getPosition:{type:`accessor`,value:e=>e.position},getIcon:{type:`accessor`,value:e=>e.icon},getColor:{type:`accessor`,value:TS},getSize:{type:`accessor`,value:1},getAngle:{type:`accessor`,value:0},getPixelOffset:{type:`accessor`,value:[0,0]},onIconError:{type:`function`,value:null,optional:!0},textureParameters:{type:`object`,ignore:!0,value:null}},DS=class extends Jx{getShaders(){let e=!!this.props.data?.attributes?.rowIndexes;return super.getShaders({vs:sS,fs:cS,source:uS(e),defines:e?{USE_ROW_INDEXES:!0}:{},modules:[Ll,Ss,Uu,oS]})}initializeState(){this.state={iconManager:new wS(this.context.device,{onUpdate:this._onUpdate.bind(this),onError:this._onError.bind(this)})},this.getAttributeManager().addInstanced({instancePositions:{size:3,type:`float64`,fp64:this.use64bitPositions(),transition:!0,accessor:`getPosition`},instanceSizes:{size:1,transition:!0,bufferGroup:`icon-instance-data`,accessor:`getSize`,defaultValue:1},instanceIconDefs:{size:7,bufferGroup:`icon-instance-data`,accessor:`getIcon`,transform:this.getInstanceIconDef,shaderAttributes:{instanceOffsets:{size:2,elementOffset:0},instanceIconFrames:{size:4,elementOffset:2},instanceColorModes:{size:1,elementOffset:6}}},instanceColors:{size:this.props.colorFormat.length,type:`unorm8`,transition:!0,bufferGroup:`icon-instance-data`,accessor:`getColor`,defaultValue:TS},instanceAngles:{size:1,transition:!0,bufferGroup:`icon-instance-data`,accessor:`getAngle`},instancePixelOffset:{size:2,transition:!0,bufferGroup:`icon-instance-data`,accessor:`getPixelOffset`},...this.props.data?.attributes?.rowIndexes?{rowIndexes:{size:1,type:`uint32`,noAlloc:!0}}:{}})}updateState(e){super.updateState(e);let{props:t,oldProps:n,changeFlags:r}=e,i=this.getAttributeManager(),{iconAtlas:a,iconMapping:o,data:s,getIcon:c,textureParameters:l}=t,{iconManager:u}=this.state;if(typeof a==`string`)return;let d=a||this.internalState.isAsyncPropLoading(`iconAtlas`);u.setProps({loadOptions:t.loadOptions,autoPacking:!d,iconAtlas:a,iconMapping:d?o:null,textureParameters:l}),d?n.iconMapping!==t.iconMapping&&i.invalidate(`getIcon`):(r.dataChanged||r.updateTriggersChanged&&(r.updateTriggersChanged.all||r.updateTriggersChanged.getIcon))&&u.packIcons(s,c),r.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),i.invalidateAll())}get isLoaded(){return super.isLoaded&&this.state.iconManager.isLoaded}finalizeState(e){super.finalizeState(e),this.state.iconManager.finalize()}draw({uniforms:e}){this._drawModel(this.state.model)}_drawModel(e){let{sizeScale:t,sizeBasis:n,sizeMinPixels:r,sizeMaxPixels:i,sizeUnits:a,billboard:o,alphaCutoff:s}=this.props,{iconManager:c}=this.state,l=c.getTexture();if(l){let c={iconsTexture:l,iconsTextureDim:[l.width,l.height],sizeUnits:hl[a],sizeScale:t,sizeBasis:+(n===`height`),sizeMinPixels:r,sizeMaxPixels:i,billboard:o,alphaCutoff:s};e.shaderInputs.setProps({icon:c}),e.draw(this.context.renderPass)}}_getModel(e=this.props.id){let t=[-1,-1,1,-1,-1,1,1,1];return new Tf(this.context.device,{...this.getShaders(),id:e,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new Ld({topology:`triangle-strip`,attributes:{positions:{size:2,value:new Float32Array(t)}}}),isInstanced:!0})}_onUpdate(e){e?(this.getAttributeManager()?.invalidate(`getIcon`),this.setNeedsUpdate()):this.setNeedsRedraw()}_onError(e){let t=this.getCurrentLayer()?.props.onIconError;t?t(e):U.error(e.error.message)()}getInstanceIconDef(e){let{x:t,y:n,width:r,height:i,mask:a,anchorX:o=r/2,anchorY:s=i/2}=this.state.iconManager.getIconMapping(e);return[r/2-o,i/2-s,t,n,r,i,+!!a]}};DS.defaultProps=ES,DS.layerName=`IconLayer`;var OS=`layout(std140) uniform scatterplotUniforms {
  float radiusScale;
  float radiusMinPixels;
  float radiusMaxPixels;
  float lineWidthScale;
  float lineWidthMinPixels;
  float lineWidthMaxPixels;
  float stroked;
  float filled;
  bool antialiasing;
  bool billboard;
  highp int radiusUnits;
  highp int lineWidthUnits;
} scatterplot;
`,kS={name:`scatterplot`,vs:OS,fs:OS,source:``,uniformTypes:{radiusScale:`f32`,radiusMinPixels:`f32`,radiusMaxPixels:`f32`,lineWidthScale:`f32`,lineWidthMinPixels:`f32`,lineWidthMaxPixels:`f32`,stroked:`f32`,filled:`f32`,antialiasing:`f32`,billboard:`f32`,radiusUnits:`i32`,lineWidthUnits:`i32`}},AS=`#version 300 es
#define SHADER_NAME scatterplot-layer-vertex-shader
in vec3 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in float instanceRadius;
in float instanceLineWidths;
in vec4 instanceFillColors;
in vec4 instanceLineColors;
#ifdef USE_ROW_INDEXES
in float rowIndexes;
#endif
in vec2 instancePixelOffset;
out vec4 vFillColor;
out vec4 vLineColor;
out vec2 unitPosition;
out float innerUnitRadius;
out float outerRadiusPixels;
void main(void) {
geometry.worldPosition = instancePositions;
outerRadiusPixels = clamp(
project_size_to_pixel(scatterplot.radiusScale * instanceRadius, scatterplot.radiusUnits),
scatterplot.radiusMinPixels, scatterplot.radiusMaxPixels
);
float lineWidthPixels = clamp(
project_size_to_pixel(scatterplot.lineWidthScale * instanceLineWidths, scatterplot.lineWidthUnits),
scatterplot.lineWidthMinPixels, scatterplot.lineWidthMaxPixels
);
outerRadiusPixels += scatterplot.stroked * lineWidthPixels / 2.0;
float edgePadding = scatterplot.antialiasing ? (outerRadiusPixels + SMOOTH_EDGE_RADIUS) / outerRadiusPixels : 1.0;
unitPosition = edgePadding * positions.xy;
geometry.uv = unitPosition;
#ifdef USE_ROW_INDEXES
geometry.pickingColor = picking_getPickingColorFromIndex(rowIndexes);
#else
geometry.pickingColor = picking_getPickingColorFromInstanceID();
#endif
innerUnitRadius = 1.0 - scatterplot.stroked * lineWidthPixels / outerRadiusPixels;
if (scatterplot.billboard) {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = edgePadding * positions * outerRadiusPixels;
offset.xy += instancePixelOffset;
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset = edgePadding * positions * project_pixel_size(outerRadiusPixels);
offset.xy += project_pixel_size(instancePixelOffset);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vFillColor, geometry);
vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vLineColor, geometry);
}
`,jS=`#version 300 es
#define SHADER_NAME scatterplot-layer-fragment-shader
precision highp float;
in vec4 vFillColor;
in vec4 vLineColor;
in vec2 unitPosition;
in float innerUnitRadius;
in float outerRadiusPixels;
out vec4 fragColor;
void main(void) {
geometry.uv = unitPosition;
float distToCenter = length(unitPosition) * outerRadiusPixels;
float inCircle = scatterplot.antialiasing ?
smoothedge(distToCenter, outerRadiusPixels) :
step(distToCenter, outerRadiusPixels);
if (inCircle == 0.0) {
discard;
}
if (scatterplot.stroked > 0.5) {
float isLine = scatterplot.antialiasing ?
smoothedge(innerUnitRadius * outerRadiusPixels, distToCenter) :
step(innerUnitRadius * outerRadiusPixels, distToCenter);
if (scatterplot.filled > 0.5) {
fragColor = mix(vFillColor, vLineColor, isLine);
} else {
if (isLine == 0.0) {
discard;
}
fragColor = vec4(vLineColor.rgb, vLineColor.a * isLine);
}
} else if (scatterplot.filled < 0.5) {
discard;
} else {
fragColor = vFillColor;
}
fragColor.a *= inCircle;
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,MS=`// Main shaders

struct ScatterplotUniforms {
  radiusScale: f32,
  radiusMinPixels: f32,
  radiusMaxPixels: f32,
  lineWidthScale: f32,
  lineWidthMinPixels: f32,
  lineWidthMaxPixels: f32,
  stroked: f32,
  filled: i32,
  antialiasing: i32,
  billboard: i32,
  radiusUnits: i32,
  lineWidthUnits: i32,
};

@group(0) @binding(0) var<uniform> scatterplot: ScatterplotUniforms;

struct Attributes {
  @builtin(instance_index) instanceIndex : u32,
  @builtin(vertex_index) vertexIndex : u32,
  @location(0) positions: vec3<f32>,
  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceRadius: f32,
  @location(4) instanceLineWidths: f32,
  @location(5) instanceFillColors: vec4<f32>,
  @location(6) instanceLineColors: vec4<f32>,
  @location(7) instancePixelOffset: vec2<f32>,
  PICKING_COLOR_ATTRIBUTE
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vFillColor: vec4<f32>,
  @location(1) vLineColor: vec4<f32>,
  @location(2) unitPosition: vec2<f32>,
  @location(3) innerUnitRadius: f32,
  @location(4) outerRadiusPixels: f32,
  @location(5) pickingColor: vec3<f32>,
  @location(6) clipCoordinates: vec2<f32>,
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var varyings: Varyings;

  // Draw an inline geometry constant array clip space triangle to verify that rendering works.
  // var positions = array<vec2<f32>, 3>(vec2(0.0, 0.5), vec2(-0.5, -0.5), vec2(0.5, -0.5));
  // if (attributes.instanceIndex == 0) {
  //   varyings.position = vec4<f32>(positions[attributes.vertexIndex], 0.0, 1.0);
  //   return varyings;
  // }

  geometry.worldPosition = attributes.instancePositions;

  // Multiply out radius and clamp to limits
  varyings.outerRadiusPixels = clamp(
    project_unit_size_to_pixel(scatterplot.radiusScale * attributes.instanceRadius, scatterplot.radiusUnits),
    scatterplot.radiusMinPixels, scatterplot.radiusMaxPixels
  );

  // Multiply out line width and clamp to limits
  let lineWidthPixels = clamp(
    project_unit_size_to_pixel(scatterplot.lineWidthScale * attributes.instanceLineWidths, scatterplot.lineWidthUnits),
    scatterplot.lineWidthMinPixels, scatterplot.lineWidthMaxPixels
  );

  // outer radius needs to offset by half stroke width
  varyings.outerRadiusPixels += scatterplot.stroked * lineWidthPixels / 2.0;
  // Expand geometry to accommodate edge smoothing
  // WGSL selects the second value when the condition is true, so keep the antialiased path second.
  let edgePadding = select(
    1.0,
    (varyings.outerRadiusPixels + SMOOTH_EDGE_RADIUS) / varyings.outerRadiusPixels,
    scatterplot.antialiasing != 0
  );

  // position on the containing square in [-1, 1] space
  varyings.unitPosition = edgePadding * attributes.positions.xy;
  geometry.uv = varyings.unitPosition;
  geometry.pickingColor = PICKING_COLOR_VALUE;

  varyings.innerUnitRadius = 1.0 - scatterplot.stroked * lineWidthPixels / varyings.outerRadiusPixels;

  if (scatterplot.billboard != 0) {
    let projectedPosition = project_position_to_clipspace_and_commonspace(
      attributes.instancePositions,
      attributes.instancePositions64Low,
      vec3<f32>(0.0)
    );
    geometry.position = projectedPosition.commonPosition;
    varyings.position = projectedPosition.clipPosition;
    // DECKGL_FILTER_GL_POSITION(varyings.position, geometry);
    var offset = edgePadding * attributes.positions * varyings.outerRadiusPixels;
    offset = vec3<f32>(offset.xy + attributes.instancePixelOffset, offset.z);
    // DECKGL_FILTER_SIZE(offset, geometry);
    let clipPixels = project_pixel_size_to_clipspace(offset.xy);
    varyings.position = vec4<f32>(varyings.position.x + clipPixels.x, varyings.position.y + clipPixels.y, varyings.position.z, varyings.position.w);
    geometry.position = vec4<f32>(
      geometry.position.xy + project_pixel_size_vec2(offset.xy),
      geometry.position.zw
    );
  } else {
    var offset = edgePadding * attributes.positions * project_pixel_size_float(varyings.outerRadiusPixels);
    offset = vec3<f32>(offset.xy + project_pixel_size_vec2(attributes.instancePixelOffset), offset.z);
    // DECKGL_FILTER_SIZE(offset, geometry);
    let projectedPosition = project_position_to_clipspace_and_commonspace(
      attributes.instancePositions,
      attributes.instancePositions64Low,
      offset
    );
    geometry.position = projectedPosition.commonPosition;
    varyings.position = projectedPosition.clipPosition;
    // DECKGL_FILTER_GL_POSITION(varyings.position, geometry);
  }

  varyings.clipCoordinates = geometry.position.xy;
  clip_filterPosition(&varyings.position, geometry.worldPosition.xy);

  // Apply opacity to instance color, or return instance picking color
  varyings.vFillColor = vec4<f32>(attributes.instanceFillColors.rgb, attributes.instanceFillColors.a * layer.opacity);
  // DECKGL_FILTER_COLOR(varyings.vFillColor, geometry);
  varyings.vLineColor = vec4<f32>(attributes.instanceLineColors.rgb, attributes.instanceLineColors.a * layer.opacity);
  // DECKGL_FILTER_COLOR(varyings.vLineColor, geometry);
  varyings.pickingColor = geometry.pickingColor;

  return varyings;
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  // var geometry: Geometry;
  // geometry.uv = unitPosition;

  let distToCenter = length(varyings.unitPosition) * varyings.outerRadiusPixels;
  let inCircle = select(
    step(distToCenter, varyings.outerRadiusPixels),
    smoothedge(distToCenter, varyings.outerRadiusPixels),
    scatterplot.antialiasing != 0
  );

  if (inCircle == 0.0) {
    discard;
  }

  var fragColor: vec4<f32>;

  if (scatterplot.stroked != 0) {
    let isLine = select(
      step(varyings.innerUnitRadius * varyings.outerRadiusPixels, distToCenter),
      smoothedge(varyings.innerUnitRadius * varyings.outerRadiusPixels, distToCenter),
      scatterplot.antialiasing != 0
    );

    if (scatterplot.filled != 0) {
      fragColor = mix(varyings.vFillColor, varyings.vLineColor, isLine);
    } else {
      if (isLine == 0.0) {
        discard;
      }
      fragColor = vec4<f32>(varyings.vLineColor.rgb, varyings.vLineColor.a * isLine);
    }
  } else if (scatterplot.filled == 0) {
    discard;
  } else {
    fragColor = varyings.vFillColor;
  }

  fragColor.a *= inCircle;

  clip_filterColor(varyings.clipCoordinates);

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(varyings.pickingColor)) {
      discard;
    }
    return vec4<f32>(varyings.pickingColor, 1.0);
  }

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(varyings.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  // Apply premultiplied alpha as required by transparent canvas
  fragColor = deckgl_premultiplied_alpha(fragColor);

  return fragColor;
  // return vec4<f32>(0, 0, 1, 1);
}
`;function NS(e){return MS.replace(`PICKING_COLOR_ATTRIBUTE`,e?`@location(8) rowIndexes: u32,`:``).replace(`PICKING_COLOR_VALUE`,e?`picking_getPickingColorFromIndex(attributes.rowIndexes)`:`picking_getPickingColorFromIndex(attributes.instanceIndex)`)}var PS=0,FS=1,IS={name:`clip`,source:`\
struct ClipUniforms {
  enabled: i32,
  mode: i32,
  bounds: vec4<f32>,
};

@group(2) @binding(auto) var<uniform> clipUniforms: ClipUniforms;

fn clip_isInBounds(coordinates: vec2<f32>) -> bool {
  return coordinates.x >= clipUniforms.bounds.x &&
    coordinates.y >= clipUniforms.bounds.y &&
    coordinates.x < clipUniforms.bounds.z &&
    coordinates.y < clipUniforms.bounds.w;
}

fn clip_filterPosition(position: ptr<function, vec4<f32>>, instanceCoordinates: vec2<f32>) {
  if (
    clipUniforms.enabled != 0 &&
    clipUniforms.mode == ${FS} &&
    !clip_isInBounds(instanceCoordinates)
  ) {
    *position = vec4<f32>(2.0, 2.0, 2.0, 1.0);
  }
}

fn clip_filterColor(geometryCoordinates: vec2<f32>) {
  if (
    clipUniforms.enabled != 0 &&
    clipUniforms.mode == ${PS} &&
    !clip_isInBounds(geometryCoordinates)
  ) {
    discard;
  }
}
`,props:{},uniforms:{},bindingLayout:[{name:`clip`,group:2}],uniformTypes:{enabled:`i32`,mode:`i32`,bounds:`vec4<f32>`},defaultUniforms:{enabled:0,mode:PS,bounds:[0,0,1,1]},getUniforms(e={}){let t={};return e.enabled!==void 0&&(t.enabled=+!!e.enabled),e.mode!==void 0&&(t.mode=e.mode===`instance`?FS:PS),e.bounds!==void 0&&(t.bounds=e.bounds),t}},LS=[0,0,0,255],RS={radiusUnits:`meters`,radiusScale:{type:`number`,min:0,value:1},radiusMinPixels:{type:`number`,min:0,value:0},radiusMaxPixels:{type:`number`,min:0,value:2**53-1},lineWidthUnits:`meters`,lineWidthScale:{type:`number`,min:0,value:1},lineWidthMinPixels:{type:`number`,min:0,value:0},lineWidthMaxPixels:{type:`number`,min:0,value:2**53-1},stroked:!1,filled:!0,billboard:!1,antialiasing:!0,getPosition:{type:`accessor`,value:e=>e.position},getRadius:{type:`accessor`,value:1},getFillColor:{type:`accessor`,value:LS},getLineColor:{type:`accessor`,value:LS},getLineWidth:{type:`accessor`,value:1},getPixelOffset:{type:`accessor`,value:[0,0]},strokeWidth:{deprecatedFor:`getLineWidth`},outline:{deprecatedFor:`stroked`},getColor:{deprecatedFor:[`getFillColor`,`getLineColor`]}},zS=class extends Jx{getShaders(){let e=!!this.props.data?.attributes?.rowIndexes;return super.getShaders({vs:AS,fs:jS,source:NS(e),defines:e?{USE_ROW_INDEXES:!0}:{},modules:[Ll,Ss,Uu,kS,...this.context.device.type===`webgpu`?[IS]:[]]})}initializeState(){let e=this.props.data?.attributes?.rowIndexes?{rowIndexes:{size:1,type:`uint32`,noAlloc:!0}}:{};this.getAttributeManager().addInstanced({instancePositions:{size:3,type:`float64`,fp64:this.use64bitPositions(),transition:!0,accessor:`getPosition`},instanceRadius:{size:1,transition:!0,accessor:`getRadius`,defaultValue:1,bufferGroup:`scatterplot-instance-data`},instanceFillColors:{size:this.props.colorFormat.length,transition:!0,type:`unorm8`,accessor:`getFillColor`,defaultValue:[0,0,0,255],bufferGroup:`scatterplot-instance-data`},instanceLineColors:{size:this.props.colorFormat.length,transition:!0,type:`unorm8`,accessor:`getLineColor`,defaultValue:[0,0,0,255],bufferGroup:`scatterplot-instance-data`},instanceLineWidths:{size:1,transition:!0,accessor:`getLineWidth`,defaultValue:1,bufferGroup:`scatterplot-instance-data`},instancePixelOffset:{size:2,transition:!0,accessor:`getPixelOffset`,bufferGroup:`scatterplot-instance-data`},...e})}updateState(e){super.updateState(e),e.changeFlags.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),this.getAttributeManager().invalidateAll())}draw({uniforms:e}){let{radiusUnits:t,radiusScale:n,radiusMinPixels:r,radiusMaxPixels:i,stroked:a,filled:o,billboard:s,antialiasing:c,lineWidthUnits:l,lineWidthScale:u,lineWidthMinPixels:d,lineWidthMaxPixels:f}=this.props,p={stroked:a,filled:o,billboard:s,antialiasing:c,radiusUnits:hl[t],radiusScale:n,radiusMinPixels:r,radiusMaxPixels:i,lineWidthUnits:hl[l],lineWidthScale:u,lineWidthMinPixels:d,lineWidthMaxPixels:f},m=this.state.model;m.shaderInputs.setProps({scatterplot:p}),m.draw(this.context.renderPass)}_getModel(){let e=[-1,-1,0,1,-1,0,-1,1,0,1,1,0];return new Tf(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new Ld({topology:`triangle-strip`,attributes:{positions:{size:3,value:new Float32Array(e)}}}),isInstanced:!0})}};zS.defaultProps=RS,zS.layerName=`ScatterplotLayer`;var BS={CLOCKWISE:1,COUNTER_CLOCKWISE:-1};function VS(e,t,n={}){return HS(e,n)!==t&&(GS(e,n),!0)}function HS(e,t={}){return Math.sign(WS(e,t))}var US={x:0,y:1,z:2};function WS(e,t={}){let{start:n=0,end:r=e.length,plane:i=`xy`}=t,a=t.size||2,o=0,s=US[i[0]],c=US[i[1]];for(let t=n,i=r-a;t<r;t+=a)o+=(e[t+s]-e[i+s])*(e[t+c]+e[i+c]),i=t;return o/2}function GS(e,t){let{start:n=0,end:r=e.length,size:i=2}=t,a=(r-n)/i,o=Math.floor(a/2);for(let t=0;t<o;++t){let r=n+t*i,o=n+(a-1-t)*i;for(let t=0;t<i;++t){let n=e[r+t];e[r+t]=e[o+t],e[o+t]=n}}}function KS(e,t){let n=t.length,r=e.length;if(r>0){let i=!0;for(let a=0;a<n;a++)if(e[r-n+a]!==t[a]){i=!1;break}if(i)return!1}for(let i=0;i<n;i++)e[r+i]=t[i];return!0}function qS(e,t){let n=t.length;for(let r=0;r<n;r++)e[r]=t[r]}function JS(e,t,n,r,i=[]){let a=r+t*n;for(let t=0;t<n;t++)i[t]=e[a+t];return i}function YS(e,t,n,r,i=[]){let a,o;if(n&8)a=(r[3]-e[1])/(t[1]-e[1]),o=3;else if(n&4)a=(r[1]-e[1])/(t[1]-e[1]),o=1;else if(n&2)a=(r[2]-e[0])/(t[0]-e[0]),o=2;else if(n&1)a=(r[0]-e[0])/(t[0]-e[0]),o=0;else return null;for(let n=0;n<e.length;n++)i[n]=(o&1)===n?r[o]:a*(t[n]-e[n])+e[n];return i}function XS(e,t){let n=0;return e[0]<t[0]?n|=1:e[0]>t[2]&&(n|=2),e[1]<t[1]?n|=4:e[1]>t[3]&&(n|=8),n}function ZS(e,t){let{size:n=2,broken:r=!1,gridResolution:i=10,gridOffset:a=[0,0],startIndex:o=0,endIndex:s=e.length}=t||{},c=(s-o)/n,l=[],u=[l],d=JS(e,0,n,o),f,p,m=nC(d,i,a,[]),h=[];KS(l,d);for(let t=1;t<c;t++){for(f=JS(e,t,n,o,f),p=XS(f,m);p;){YS(d,f,p,m,h);let e=XS(h,m);e&&(YS(d,h,e,m,h),p=e),KS(l,h),qS(d,h),rC(m,i,p),r&&l.length>n&&(l=[],u.push(l),KS(l,d)),p=XS(f,m)}KS(l,f),qS(d,f)}return r?u:u[0]}var QS=0,$S=1;function eC(e,t=null,n){if(!e.length)return[];let{size:r=2,gridResolution:i=10,gridOffset:a=[0,0],edgeTypes:o=!1}=n||{},s=[],c=[{pos:e,types:o?Array(e.length/r).fill($S):null,holes:t||[]}],l=[[],[]],u=[];for(;c.length;){let{pos:e,types:t,holes:n}=c.shift();iC(e,r,n[0]||e.length,l),u=nC(l[0],i,a,u);let d=XS(l[1],u);if(d){let i=tC(e,t,r,0,n[0]||e.length,u,d),a={pos:i[0].pos,types:i[0].types,holes:[]},s={pos:i[1].pos,types:i[1].types,holes:[]};c.push(a,s);for(let c=0;c<n.length;c++)i=tC(e,t,r,n[c],n[c+1]||e.length,u,d),i[0]&&(a.holes.push(a.pos.length),a.pos=aC(a.pos,i[0].pos),o&&(a.types=aC(a.types,i[0].types))),i[1]&&(s.holes.push(s.pos.length),s.pos=aC(s.pos,i[1].pos),o&&(s.types=aC(s.types,i[1].types)))}else{let r={positions:e};o&&(r.edgeTypes=t),n.length&&(r.holeIndices=n),s.push(r)}}return s}function tC(e,t,n,r,i,a,o){let s=(i-r)/n,c=[],l=[],u=[],d=[],f=[],p,m,h,g=JS(e,s-1,n,r),_=Math.sign(o&8?g[1]-a[3]:g[0]-a[2]),v=t&&t[s-1],y=0,b=0;for(let i=0;i<s;i++)p=JS(e,i,n,r,p),m=Math.sign(o&8?p[1]-a[3]:p[0]-a[2]),h=t&&t[r/n+i],m&&_&&_!==m&&(YS(g,p,o,a,f),KS(c,f)&&u.push(v),KS(l,f)&&d.push(v)),m<=0?(KS(c,p)&&u.push(h),y-=m):u.length&&(u[u.length-1]=QS),m>=0?(KS(l,p)&&d.push(h),b+=m):d.length&&(d[d.length-1]=QS),qS(g,p),_=m,v=h;return[y?{pos:c,types:t&&u}:null,b?{pos:l,types:t&&d}:null]}function nC(e,t,n,r){let i=Math.floor((e[0]-n[0])/t)*t+n[0],a=Math.floor((e[1]-n[1])/t)*t+n[1];return r[0]=i,r[1]=a,r[2]=i+t,r[3]=a+t,r}function rC(e,t,n){n&8?(e[1]+=t,e[3]+=t):n&4?(e[1]-=t,e[3]-=t):n&2?(e[0]+=t,e[2]+=t):n&1&&(e[0]-=t,e[2]-=t)}function iC(e,t,n,r){let i=1/0,a=-1/0,o=1/0,s=-1/0;for(let r=0;r<n;r+=t){let t=e[r],n=e[r+1];i=t<i?t:i,a=t>a?t:a,o=n<o?n:o,s=n>s?n:s}return r[0][0]=i,r[0][1]=o,r[1][0]=a,r[1][1]=s,r}function aC(e,t){for(let n=0;n<t.length;n++)e.push(t[n]);return e}var oC=85.051129;function sC(e,t){let{size:n=2,startIndex:r=0,endIndex:i=e.length,normalize:a=!0}=t||{},o=e.slice(r,i);dC(o,n,0,i-r);let s=ZS(o,{size:n,broken:!0,gridResolution:360,gridOffset:[-180,-180]});if(a)for(let e of s)fC(e,n);return s}function cC(e,t=null,n){let{size:r=2,normalize:i=!0,edgeTypes:a=!1}=n||{};t||=[];let o=[],s=[],c=0,l=0;for(let i=0;i<=t.length;i++){let a=t[i]||e.length,u=l,d=lC(e,r,c,a);for(let t=d;t<a;t++)o[l++]=e[t];for(let t=c;t<d;t++)o[l++]=e[t];dC(o,r,u,l),uC(o,r,u,l,n?.maxLatitude),c=a,s[i]=l}s.pop();let u=eC(o,s,{size:r,gridResolution:360,gridOffset:[-180,-180],edgeTypes:a});if(i)for(let e of u)fC(e.positions,r);return u}function lC(e,t,n,r){let i=-1,a=-1;for(let o=n+1;o<r;o+=t){let t=Math.abs(e[o]);t>i&&(i=t,a=o-1)}return a}function uC(e,t,n,r,i=oC){let a=e[n],o=e[r-t];if(Math.abs(a-o)>180){let r=JS(e,0,t,n);r[0]+=Math.round((o-a)/360)*360,KS(e,r),r[1]=Math.sign(r[1])*i,KS(e,r),r[0]=a,KS(e,r)}}function dC(e,t,n,r){let i=e[0],a;for(let o=n;o<r;o+=t){a=e[o];let t=a-i;(t>180||t<-180)&&(a-=Math.round(t/360)*360),e[o]=i=a}}function fC(e,t){let n,r=e.length/t;for(let i=0;i<r&&(n=e[i*t],(n+180)%360==0);i++);let i=-Math.round(n/360)*360;if(i!==0)for(let n=0;n<r;n++)e[n*t]+=i}function pC(e,t,n,r){let i;if(Array.isArray(e[0])){let n=e.length*t;i=Array(n);for(let n=0;n<e.length;n++)for(let r=0;r<t;r++)i[n*t+r]=e[n][r]||0}else i=e;return n?ZS(i,{size:t,gridResolution:n}):r?sC(i,{size:t}):i}var mC=1,hC=2,gC=4,_C=class extends iS{constructor(e){super({...e,attributes:{positions:{size:3,padding:18,initialize:!0,type:e.fp64?Float64Array:Float32Array},segmentTypes:{size:1,type:e.isWebGPU?Float32Array:Uint8ClampedArray}}})}get(e){return this.attributes[e]}getPathSegmentIndices(e){let t=this.attributes.segmentTypes,n=this.vertexStarts[e],r=Math.min(this.vertexStarts[e+1]??this.instanceCount,this.instanceCount),i=[];for(let e=n;e<r-1;e++)(t[e]&gC)===0&&i.push(e);return i.length&&(t[n]&gC)!==0&&i.unshift(i.pop()),i}getGeometryFromBuffer(e){return this.normalize||this.opts.isWebGPU?super.getGeometryFromBuffer(e):null}normalizeGeometry(e){return this.normalize?pC(e,this.positionSize,this.opts.resolution,this.opts.wrapLongitude):e}getGeometrySize(e){if(vC(e)){let t=0;for(let n of e)t+=this.getGeometrySize(n);return t}let t=this.getPathLength(e);return t<2?0:this.isClosed(e)?t<3?0:t+2:t}updateGeometryAttributes(e,t){if(t.geometrySize!==0){if(e&&vC(e))for(let n of e){let e=this.getGeometrySize(n);t.geometrySize=e,this.updateGeometryAttributes(n,t),t.vertexStart+=e}else this._updateSegmentTypes(e,t),this._updatePositions(e,t)}}_updateSegmentTypes(e,t){let n=this.attributes.segmentTypes,r=e?this.isClosed(e):!1,{vertexStart:i,geometrySize:a}=t;n.fill(0,i,i+a),r?(n[i]=gC,n[i+a-2]=gC):(n[i]+=mC,n[i+a-2]+=hC),n[i+a-1]=gC}_updatePositions(e,t){let{positions:n}=this.attributes;if(!n||!e)return;let{vertexStart:r,geometrySize:i}=t,a=[,,,];for(let t=r,o=0;o<i;t++,o++)this.getPointOnPath(e,o,a),n[t*3]=a[0],n[t*3+1]=a[1],n[t*3+2]=a[2]}getPathLength(e){return e.length/this.positionSize}getPointOnPath(e,t,n=[]){let{positionSize:r}=this;t*r>=e.length&&(t+=1-e.length/r);let i=t*r;return n[0]=e[i],n[1]=e[i+1],n[2]=r===3&&e[i+2]||0,n}isClosed(e){if(!this.normalize)return!!this.opts.loop;let{positionSize:t}=this,n=e.length-t;return e[0]===e[n]&&e[1]===e[n+1]&&(t===2||e[2]===e[n+2])}};function vC(e){return Array.isArray(e[0])}var yC=`struct PathUniforms {
  widthScale: f32,
  widthMinPixels: f32,
  widthMaxPixels: f32,
  jointType: f32,
  capType: f32,
  miterLimit: f32,
  billboard: f32,
  widthUnits: i32,
};

@group(0) @binding(auto)
var<uniform> path: PathUniforms;
`,bC=`layout(std140) uniform pathUniforms {
  float widthScale;
  float widthMinPixels;
  float widthMaxPixels;
  float jointType;
  float capType;
  float miterLimit;
  bool billboard;
  highp int widthUnits;
} path;
`,xC={name:`path`,source:yC,vs:bC,fs:bC,uniformTypes:{widthScale:`f32`,widthMinPixels:`f32`,widthMaxPixels:`f32`,jointType:`f32`,capType:`f32`,miterLimit:`f32`,billboard:`f32`,widthUnits:`i32`}},SC=`const EPSILON: f32 = 0.001;
const ZERO_OFFSET: vec3<f32> = vec3<f32>(0.0, 0.0, 0.0);

struct JoinResult {
  offset: vec3<f32>,
  cornerOffset: vec2<f32>,
  miterLength: f32,
  pathPosition: vec2<f32>,
  pathLength: f32,
  jointType: f32,
};

struct Attributes {
  @location(0) positions: vec2<f32>,
  @location(1) instanceTypes: f32,
  @location(2) instanceLeftPositions: vec3<f32>,
  @location(3) instanceStartPositions: vec3<f32>,
  @location(4) instanceEndPositions: vec3<f32>,
  @location(5) instanceRightPositions: vec3<f32>,
  @location(6) instanceLeftPositions64Low: vec3<f32>,
  @location(7) instanceStartPositions64Low: vec3<f32>,
  @location(8) instanceEndPositions64Low: vec3<f32>,
  @location(9) instanceRightPositions64Low: vec3<f32>,
  @location(10) instanceStrokeWidths: f32,
  @location(11) instanceColors: vec4<f32>,
  @location(12) rowIndexes: u32,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vColor: vec4<f32>,
  @location(1) vCornerOffset: vec2<f32>,
  @location(2) vMiterLength: f32,
  @location(3) vPathPosition: vec2<f32>,
  @location(4) vPathLength: f32,
  @location(5) vJointType: f32,
  // Location 6 is reserved for TripsLayer's injected vTime varying.
  @location(7) clipCoordinates: vec2<f32>,
#ifdef DASH_ENABLED
  @location(8) vPathBounds: vec2<f32>,
#endif
};

fn flipIfTrue(flag: bool) -> f32 {
  return select(1.0, -1.0, flag);
}

fn clipLine(position: vec4<f32>, refPosition: vec4<f32>) -> vec4<f32> {
  if (position.w < EPSILON) {
    let r = (EPSILON - refPosition.w) / (position.w - refPosition.w);
    return refPosition + (position - refPosition) * r;
  }
  return position;
}

#ifdef DASH_ENABLED
// Return the visible interval of the original segment before clipLine moves either endpoint.
fn getClippedPathRange(startW: f32, endW: f32) -> vec2<f32> {
  let startClipped = startW < EPSILON;
  let endClipped = endW < EPSILON;
  if (startClipped && endClipped) {
    return vec2<f32>(0.0, 0.0);
  }
  if (startClipped || endClipped) {
    let intersection = clamp((EPSILON - startW) / (endW - startW), 0.0, 1.0);
    if (startClipped) {
      return vec2<f32>(intersection, 1.0);
    }
    return vec2<f32>(0.0, intersection);
  }
  return vec2<f32>(0.0, 1.0);
}
#endif

fn getLineJoinOffset(
  prevPoint: vec3<f32>,
  currPoint: vec3<f32>,
  nextPoint: vec3<f32>,
  width: vec2<f32>,
#ifdef DASH_ENABLED
  sourcePathLength: f32,
  sourcePathRange: vec2<f32>,
#endif
#ifdef ANTIALIASING
  coverageScale: f32,
#endif
  positions: vec2<f32>,
  instanceTypes: f32
) -> JoinResult {
  let isEnd = positions.x > 0.0;
  let sideOfPath = positions.y;
  let isJoint = select(0.0, 1.0, sideOfPath == 0.0);

  var deltaA3 = currPoint - prevPoint;
  var deltaB3 = nextPoint - currPoint;

  let rotationResult = project_needs_rotation(currPoint);
  if (path.billboard == 0.0 && rotationResult.needsRotation) {
    deltaA3 = rotationResult.transform * deltaA3;
    deltaB3 = rotationResult.transform * deltaB3;
  }

  let deltaA = deltaA3.xy / width;
  let deltaB = deltaB3.xy / width;

  let lenA = length(deltaA);
  let lenB = length(deltaB);

  let dirA = select(vec2<f32>(0.0, 0.0), normalize(deltaA), lenA > 0.0);
  let dirB = select(vec2<f32>(0.0, 0.0), normalize(deltaB), lenB > 0.0);

  let perpA = vec2<f32>(-dirA.y, dirA.x);
  let perpB = vec2<f32>(-dirB.y, dirB.x);

  var tangent = dirA + dirB;
  tangent = select(perpA, normalize(tangent), length(tangent) > 0.0);
  let miterVec = vec2<f32>(-tangent.y, tangent.x);
  let dir = select(dirB, dirA, isEnd);
  let perp = select(perpB, perpA, isEnd);
#ifdef DASH_ENABLED
  let segmentLength2D = select(lenB, lenA, isEnd);

  // Extrusion happens in the XY plane, so segmentLength2D is a 2D length and pathPosition.y
  // below measures 2D distance along the segment. For a path that also moves in Z the true
  // arc length is longer by this ratio. Scaling pathLength and pathPosition.y by it makes
  // the coordinate measure real 3D distance while leaving the joint tests unchanged, since
  // they compare the two against each other and both are scaled alike. Billboard mode
  // extrudes in clip space, where the perspective divide has already reduced the segment to
  // its screen projection, so its complete common-space length is supplied by the caller.
  // Mirrors path-layer-vertex.glsl.ts.
  let currDelta3 = select(deltaB3, deltaA3, isEnd);
  let currLength2D = length(currDelta3.xy);
  // Do not clamp a valid denominator to EPSILON: high-zoom Web Mercator deltas are often
  // smaller than that in common space, and changing their scale corrupts even flat paths.
  let safeLength2D = select(1.0, currLength2D, currLength2D > 0.0);
  var arcLengthRatio = 1.0;
  var pathPositionOffset = 0.0;
  var pathLength = segmentLength2D;
  if (path.billboard != 0.0) {
    // clipLine may shorten the visible screen-space segment. Preserve the corresponding interval
    // of the complete common-space arclength instead of compressing the full dash period into the
    // visible span. Keep pathLength complete so justification is stable as the camera clips it.
    let visiblePathLength = sourcePathLength * (sourcePathRange.y - sourcePathRange.x);
    arcLengthRatio = 0.0;
    if (segmentLength2D > 0.0) {
      arcLengthRatio = visiblePathLength / segmentLength2D;
    }
    pathPositionOffset = sourcePathLength * sourcePathRange.x;
    pathLength = sourcePathLength;
  } else if (currLength2D > 0.0) {
    arcLengthRatio = length(currDelta3) / safeLength2D;
    pathLength = segmentLength2D * arcLengthRatio;
  }
#else
  let pathLength = select(lenB, lenA, isEnd);
#endif

  let sinHalfA = abs(dot(miterVec, perp));
  let cosHalfA = abs(dot(dirA, miterVec));
  let turnDirection = flipIfTrue(dirA.x * dirB.y >= dirA.y * dirB.x);
  let cornerPosition = sideOfPath * turnDirection;

  var miterSize = 1.0 / max(sinHalfA, EPSILON);
  miterSize = mix(
    min(miterSize, max(lenA, lenB) / max(cosHalfA, EPSILON)),
    miterSize,
    step(0.0, cornerPosition)
  );

  var offsetVec =
    mix(miterVec * miterSize, perp, step(0.5, cornerPosition)) *
    (sideOfPath + isJoint * turnDirection);

  let isStartCap = lenA == 0.0 || (!isEnd && (instanceTypes == 1.0 || instanceTypes == 3.0));
  let isEndCap = lenB == 0.0 || (isEnd && (instanceTypes == 2.0 || instanceTypes == 3.0));
  let isCap = isStartCap || isEndCap;

  var jointType = path.jointType;
  if (isCap) {
    offsetVec = mix(
      perp * sideOfPath,
      dir * path.capType * 4.0 * flipIfTrue(isStartCap),
      isJoint
    );
    jointType = path.capType;
  }

#ifdef ANTIALIASING
  let coverageOffsetVec = offsetVec * coverageScale;
  var miterLength = dot(coverageOffsetVec, miterVec * turnDirection);
#else
  var miterLength = dot(offsetVec, miterVec * turnDirection);
#endif
  miterLength = select(miterLength, isJoint, isCap);

#ifdef ANTIALIASING
  let offsetFromStartOfPath = coverageOffsetVec + deltaA * select(0.0, 1.0, isEnd);
#else
  let offsetFromStartOfPath = offsetVec + deltaA * select(0.0, 1.0, isEnd);
#endif
  let pathPosition = vec2<f32>(
    dot(offsetFromStartOfPath, perp),
#ifdef DASH_ENABLED
    pathPositionOffset + dot(offsetFromStartOfPath, dir) * arcLengthRatio
#else
    dot(offsetFromStartOfPath, dir)
#endif
  );
  let isValid = step(f32(instanceTypes), 3.5);
#ifdef ANTIALIASING
  var offset = vec3<f32>(coverageOffsetVec * width * isValid, 0.0);
#else
  var offset = vec3<f32>(offsetVec * width * isValid, 0.0);
#endif

  if (path.billboard == 0.0 && rotationResult.needsRotation) {
    offset = rotationResult.transform * offset;
  }

#ifdef ANTIALIASING
  return JoinResult(
    offset, coverageOffsetVec, miterLength, pathPosition, pathLength, jointType
  );
#else
  return JoinResult(offset, offsetVec, miterLength, pathPosition, pathLength, jointType);
#endif
}

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var varyings: Varyings;

  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.rowIndexes);

  let isEnd = attributes.positions.x;

  let prevPosition = mix(attributes.instanceLeftPositions, attributes.instanceStartPositions, isEnd);
  let prevPosition64Low = mix(
    attributes.instanceLeftPositions64Low,
    attributes.instanceStartPositions64Low,
    isEnd
  );
  let currPosition = mix(attributes.instanceStartPositions, attributes.instanceEndPositions, isEnd);
  let currPosition64Low = mix(
    attributes.instanceStartPositions64Low,
    attributes.instanceEndPositions64Low,
    isEnd
  );
  let nextPosition = mix(attributes.instanceEndPositions, attributes.instanceRightPositions, isEnd);
  let nextPosition64Low = mix(
    attributes.instanceEndPositions64Low,
    attributes.instanceRightPositions64Low,
    isEnd
  );

  geometry.worldPosition = currPosition;

  let widthPixels =
    clamp(
      project_unit_size_to_pixel(attributes.instanceStrokeWidths * path.widthScale, path.widthUnits),
      path.widthMinPixels,
      path.widthMaxPixels
    ) / 2.0;

  if (path.billboard != 0.0) {
#ifdef DASH_ENABLED
    let prevProjection = project_position_to_clipspace_and_commonspace(
      prevPosition, prevPosition64Low, ZERO_OFFSET
    );
    let nextProjection = project_position_to_clipspace_and_commonspace(
      nextPosition, nextPosition64Low, ZERO_OFFSET
    );
    let prevPositionCommon = prevProjection.commonPosition.xyz;
    let nextPositionCommon = nextProjection.commonPosition.xyz;
    var prevPositionScreen = prevProjection.clipPosition;
    var nextPositionScreen = nextProjection.clipPosition;
#else
    var prevPositionScreen = project_position_to_clipspace(
      prevPosition, prevPosition64Low, ZERO_OFFSET
    );
    var nextPositionScreen = project_position_to_clipspace(
      nextPosition, nextPosition64Low, ZERO_OFFSET
    );
#endif
    let currProjection = project_position_to_clipspace_and_commonspace(
      currPosition, currPosition64Low, ZERO_OFFSET
    );
    geometry.position = currProjection.commonPosition;
    var currPositionScreen = currProjection.clipPosition;
#ifdef DASH_ENABLED
    let currPositionCommon = currProjection.commonPosition.xyz;
    let sourcePathStartScreen = mix(currPositionScreen, prevPositionScreen, isEnd);
    let sourcePathEndScreen = mix(nextPositionScreen, currPositionScreen, isEnd);
    let billboardPathRange = getClippedPathRange(
      sourcePathStartScreen.w, sourcePathEndScreen.w
    );
#endif

    prevPositionScreen = clipLine(prevPositionScreen, currPositionScreen);
    nextPositionScreen = clipLine(nextPositionScreen, currPositionScreen);
    currPositionScreen = clipLine(currPositionScreen, mix(nextPositionScreen, prevPositionScreen, isEnd));

#ifdef ANTIALIASING
    let coverageScale = select(
      1.0,
      (widthPixels + 0.5 / project.devicePixelRatio) / max(widthPixels, 1e-6),
      widthPixels > 0.0
    );
#endif
#ifdef DASH_ENABLED
    let currentDeltaCommon = select(
      nextPositionCommon - currPositionCommon,
      currPositionCommon - prevPositionCommon,
      isEnd > 0.0
    );
    let billboardPathLength = select(
      0.0,
      length(currentDeltaCommon) * project.scale / (widthPixels * project.focalDistance),
      widthPixels > 0.0
    );
#endif
    let join = getLineJoinOffset(
      prevPositionScreen.xyz / prevPositionScreen.w,
      currPositionScreen.xyz / currPositionScreen.w,
      nextPositionScreen.xyz / nextPositionScreen.w,
      project_pixel_size_to_clipspace(vec2<f32>(widthPixels, widthPixels)),
#ifdef DASH_ENABLED
      billboardPathLength,
      billboardPathRange,
#endif
#ifdef ANTIALIASING
      coverageScale,
#endif
      attributes.positions,
      attributes.instanceTypes
    );
#ifdef DASH_ENABLED
    // Phase and justification use the complete source segment, while cap and joint coverage
    // must still recognize the endpoints moved by clipLine.
    varyings.vPathBounds = billboardPathLength * billboardPathRange;
#endif

    geometry.uv = join.pathPosition;
    varyings.position = vec4<f32>(
      currPositionScreen.xyz + join.offset * currPositionScreen.w,
      currPositionScreen.w
    );
    varyings.vCornerOffset = join.cornerOffset;
    varyings.vMiterLength = join.miterLength;
    varyings.vPathPosition = join.pathPosition;
    varyings.vPathLength = join.pathLength;
    varyings.vJointType = join.jointType;
  } else {
    let prevPositionCommon = project_position_vec3_f64(prevPosition, prevPosition64Low);
    let currPositionCommon = project_position_vec3_f64(currPosition, currPosition64Low);
    let nextPositionCommon = project_position_vec3_f64(nextPosition, nextPosition64Low);

    let width = vec2<f32>(
      project_pixel_size_float(widthPixels),
      project_pixel_size_float(widthPixels)
    );
#ifdef ANTIALIASING
    let coverageScale = select(
      1.0,
      (widthPixels + 0.5 / project.devicePixelRatio) / max(widthPixels, 1e-6),
      widthPixels > 0.0
    );
#endif
    let join = getLineJoinOffset(
      prevPositionCommon,
      currPositionCommon,
      nextPositionCommon,
      width,
#ifdef DASH_ENABLED
      1.0,
      vec2<f32>(0.0, 1.0),
#endif
#ifdef ANTIALIASING
      coverageScale,
#endif
      attributes.positions,
      attributes.instanceTypes
    );
#ifdef DASH_ENABLED
    varyings.vPathBounds = vec2<f32>(0.0, join.pathLength);
#endif

    geometry.position = vec4<f32>(currPositionCommon + join.offset, 1.0);
    geometry.uv = join.pathPosition;
    varyings.position = project_common_position_to_clipspace(geometry.position);
    varyings.vCornerOffset = join.cornerOffset;
    varyings.vMiterLength = join.miterLength;
    varyings.vPathPosition = join.pathPosition;
    varyings.vPathLength = join.pathLength;
    varyings.vJointType = join.jointType;
  }

  varyings.clipCoordinates = geometry.position.xy;
  clip_filterPosition(&varyings.position, geometry.worldPosition.xy);

  varyings.vColor = vec4<f32>(
    attributes.instanceColors.rgb,
    attributes.instanceColors.a * layer.opacity
  );
  return varyings;
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  geometry.uv = varyings.vPathPosition;

#ifdef ANTIALIASING
  // Coordinates of the outer silhouette, in units of half-width: rounded joints and caps are
  // bounded by the corner offset, everywhere else by the edge of the stroke. Dividing by the
  // screen-space derivative converts the distance to the boundary into device pixels, which stays
  // correct under perspective foreshortening and under extensions that rescale the stroke.
#ifdef DASH_ENABLED
  let isCorner =
    varyings.vPathPosition.y < varyings.vPathBounds.x ||
    varyings.vPathPosition.y > varyings.vPathBounds.y;
#else
  let isCorner = varyings.vPathPosition.y < 0.0 || varyings.vPathPosition.y > varyings.vPathLength;
#endif
  let isRound = varyings.vJointType > 0.5;

  // Distance to the silhouette in device pixels, from the derivative of the coordinate that
  // bounds it. Computed before the discards below: derivatives need uniform control flow and are
  // undefined after a discard in the quad. See dev-docs/RFCs/v9.4/analytic-antialiasing-rfc.md
  let bodyCoord = abs(varyings.vPathPosition.x);
  let cornerCoord = length(varyings.vCornerOffset);
  // Both evaluated so each derivative stays on one field across the corner/body boundary
  let bodyPixels = (1.0 - bodyCoord) / max(fwidth(bodyCoord), 1e-6);
  let cornerPixels = (1.0 - cornerCoord) / max(fwidth(cornerCoord), 1e-6);
#ifdef PATH_STYLE_OFFSET
  // Rounded corners still intersect the stroke-width envelope. Extensions may remap
  // vPathPosition.x independently of vCornerOffset, as PathStyleExtension does for offsets.
  let edgePixels = select(bodyPixels, min(cornerPixels, bodyPixels), isRound && isCorner);
#else
  let edgePixels = select(bodyPixels, cornerPixels, isRound && isCorner);
#endif

  // Fragments outside the coverage ramp must not write depth or picking colors.
  if (edgePixels <= -SMOOTH_EDGE_RADIUS) {
    discard;
  }

  if (isCorner) {
    if (!isRound && varyings.vMiterLength > path.miterLimit + 1.0) {
      discard;
    }
  }

  var color = varyings.vColor;

  // Feather one device pixel across the width only, before premultiplication. edgePixels is a
  // signed device-pixel distance and SMOOTH_EDGE_RADIUS is 0.5, so this ramps across one pixel.
  color.a *= smoothedge(0.0, edgePixels);
#else
#ifdef DASH_ENABLED
  if (
    varyings.vPathPosition.y < varyings.vPathBounds.x ||
    varyings.vPathPosition.y > varyings.vPathBounds.y
  ) {
#else
  if (
    varyings.vPathPosition.y < 0.0 ||
    varyings.vPathPosition.y > varyings.vPathLength
  ) {
#endif
    if (varyings.vJointType > 0.5 && length(varyings.vCornerOffset) > 1.0) {
      discard;
    }
    if (
      varyings.vJointType < 0.5 &&
      varyings.vMiterLength > path.miterLimit + 1.0
    ) {
      discard;
    }
  }
#endif

  // Fragment-layer injections that discard pixels must run after analytic coverage derivatives.
  // See TripsLayer, which rejects fragments outside of the active time window at this anchor.
  // DECKGL_FILTER_COLOR
  clip_filterColor(varyings.clipCoordinates);
#ifdef ANTIALIASING
  return deckgl_premultiplied_alpha(color);
#else
  return deckgl_premultiplied_alpha(varyings.vColor);
#endif
}
`,CC=`#version 300 es
#define SHADER_NAME path-layer-vertex-shader
in vec2 positions;
in float instanceTypes;
in vec3 instanceStartPositions;
in vec3 instanceEndPositions;
in vec3 instanceLeftPositions;
in vec3 instanceRightPositions;
in vec3 instanceLeftPositions64Low;
in vec3 instanceStartPositions64Low;
in vec3 instanceEndPositions64Low;
in vec3 instanceRightPositions64Low;
in float instanceStrokeWidths;
in vec4 instanceColors;
in float rowIndexes;
uniform float opacity;
out vec4 vColor;
out vec2 vCornerOffset;
out float vMiterLength;
out vec2 vPathPosition;
out float vPathLength;
out float vJointType;
#ifdef DASH_ENABLED
out vec2 vPathBounds;
#endif
const float EPSILON = 0.001;
const vec3 ZERO_OFFSET = vec3(0.0);
float flipIfTrue(bool flag) {
return -(float(flag) * 2. - 1.);
}
vec3 getLineJoinOffset(
vec3 prevPoint, vec3 currPoint, vec3 nextPoint,
vec2 width
#ifdef DASH_ENABLED
, float sourcePathLength, vec2 sourcePathRange
#endif
#ifdef ANTIALIASING
, float coverageScale
#endif
) {
bool isEnd = positions.x > 0.0;
float sideOfPath = positions.y;
float isJoint = float(sideOfPath == 0.0);
vec3 deltaA3 = (currPoint - prevPoint);
vec3 deltaB3 = (nextPoint - currPoint);
mat3 rotationMatrix;
bool needsRotation = !path.billboard && project_needs_rotation(currPoint, rotationMatrix);
if (needsRotation) {
deltaA3 = deltaA3 * rotationMatrix;
deltaB3 = deltaB3 * rotationMatrix;
}
vec2 deltaA = deltaA3.xy / width;
vec2 deltaB = deltaB3.xy / width;
float lenA = length(deltaA);
float lenB = length(deltaB);
vec2 dirA = lenA > 0. ? normalize(deltaA) : vec2(0.0, 0.0);
vec2 dirB = lenB > 0. ? normalize(deltaB) : vec2(0.0, 0.0);
vec2 perpA = vec2(-dirA.y, dirA.x);
vec2 perpB = vec2(-dirB.y, dirB.x);
vec2 tangent = dirA + dirB;
tangent = length(tangent) > 0. ? normalize(tangent) : perpA;
vec2 miterVec = vec2(-tangent.y, tangent.x);
vec2 dir = isEnd ? dirA : dirB;
vec2 perp = isEnd ? perpA : perpB;
float L = isEnd ? lenA : lenB;
#ifdef DASH_ENABLED
vec3 currDelta3 = isEnd ? deltaA3 : deltaB3;
float currLength2D = length(currDelta3.xy);
float arcLengthRatio = 1.0;
float pathPositionOffset = 0.0;
float pathLength = L;
if (path.billboard) {
float visiblePathLength = sourcePathLength * (sourcePathRange.y - sourcePathRange.x);
arcLengthRatio = L > 0.0 ? visiblePathLength / L : 0.0;
pathPositionOffset = sourcePathLength * sourcePathRange.x;
pathLength = sourcePathLength;
} else if (currLength2D > 0.0) {
arcLengthRatio = length(currDelta3) / currLength2D;
pathLength = L * arcLengthRatio;
}
#endif
float sinHalfA = abs(dot(miterVec, perp));
float cosHalfA = abs(dot(dirA, miterVec));
float turnDirection = flipIfTrue(dirA.x * dirB.y >= dirA.y * dirB.x);
float cornerPosition = sideOfPath * turnDirection;
float miterSize = 1.0 / max(sinHalfA, EPSILON);
miterSize = mix(
min(miterSize, max(lenA, lenB) / max(cosHalfA, EPSILON)),
miterSize,
step(0.0, cornerPosition)
);
vec2 offsetVec = mix(miterVec * miterSize, perp, step(0.5, cornerPosition))
* (sideOfPath + isJoint * turnDirection);
bool isStartCap = lenA == 0.0 || (!isEnd && (instanceTypes == 1.0 || instanceTypes == 3.0));
bool isEndCap = lenB == 0.0 || (isEnd && (instanceTypes == 2.0 || instanceTypes == 3.0));
bool isCap = isStartCap || isEndCap;
if (isCap) {
offsetVec = mix(perp * sideOfPath, dir * path.capType * 4.0 * flipIfTrue(isStartCap), isJoint);
vJointType = path.capType;
} else {
vJointType = path.jointType;
}
#ifdef ANTIALIASING
vec2 coverageOffsetVec = offsetVec * coverageScale;
#ifdef DASH_ENABLED
vPathLength = pathLength;
#else
vPathLength = L;
#endif
vCornerOffset = coverageOffsetVec;
vMiterLength = dot(vCornerOffset, miterVec * turnDirection);
vMiterLength = isCap ? isJoint : vMiterLength;
vec2 offsetFromStartOfPath = coverageOffsetVec + deltaA * float(isEnd);
vPathPosition = vec2(
dot(offsetFromStartOfPath, perp),
#ifdef DASH_ENABLED
pathPositionOffset + dot(offsetFromStartOfPath, dir) * arcLengthRatio
#else
dot(offsetFromStartOfPath, dir)
#endif
);
geometry.uv = vPathPosition;
float isValid = step(instanceTypes, 3.5);
vec3 offset = vec3(coverageOffsetVec * width * isValid, 0.0);
#else
#ifdef DASH_ENABLED
vPathLength = pathLength;
#else
vPathLength = L;
#endif
vCornerOffset = offsetVec;
vMiterLength = dot(vCornerOffset, miterVec * turnDirection);
vMiterLength = isCap ? isJoint : vMiterLength;
vec2 offsetFromStartOfPath = vCornerOffset + deltaA * float(isEnd);
vPathPosition = vec2(
dot(offsetFromStartOfPath, perp),
#ifdef DASH_ENABLED
pathPositionOffset + dot(offsetFromStartOfPath, dir) * arcLengthRatio
#else
dot(offsetFromStartOfPath, dir)
#endif
);
geometry.uv = vPathPosition;
float isValid = step(instanceTypes, 3.5);
vec3 offset = vec3(offsetVec * width * isValid, 0.0);
#endif
if (needsRotation) {
offset = rotationMatrix * offset;
}
return offset;
}
void clipLine(inout vec4 position, vec4 refPosition) {
if (position.w < EPSILON) {
float r = (EPSILON - refPosition.w) / (position.w - refPosition.w);
position = refPosition + (position - refPosition) * r;
}
}
#ifdef DASH_ENABLED
vec2 getClippedPathRange(float startW, float endW) {
bool startClipped = startW < EPSILON;
bool endClipped = endW < EPSILON;
if (startClipped && endClipped) {
return vec2(0.0);
}
if (startClipped || endClipped) {
float intersection = clamp((EPSILON - startW) / (endW - startW), 0.0, 1.0);
return startClipped ? vec2(intersection, 1.0) : vec2(0.0, intersection);
}
return vec2(0.0, 1.0);
}
#endif
void main() {
geometry.pickingColor = picking_getPickingColorFromIndex(rowIndexes);
vColor = vec4(instanceColors.rgb, instanceColors.a * layer.opacity);
float isEnd = positions.x;
vec3 prevPosition = mix(instanceLeftPositions, instanceStartPositions, isEnd);
vec3 prevPosition64Low = mix(instanceLeftPositions64Low, instanceStartPositions64Low, isEnd);
vec3 currPosition = mix(instanceStartPositions, instanceEndPositions, isEnd);
vec3 currPosition64Low = mix(instanceStartPositions64Low, instanceEndPositions64Low, isEnd);
vec3 nextPosition = mix(instanceEndPositions, instanceRightPositions, isEnd);
vec3 nextPosition64Low = mix(instanceEndPositions64Low, instanceRightPositions64Low, isEnd);
geometry.worldPosition = currPosition;
vec2 widthPixels = vec2(clamp(
project_size_to_pixel(instanceStrokeWidths * path.widthScale, path.widthUnits),
path.widthMinPixels, path.widthMaxPixels) / 2.0);
vec3 width;
if (path.billboard) {
#ifdef DASH_ENABLED
vec4 prevPositionCommon;
vec4 nextPositionCommon;
vec4 prevPositionScreen = project_position_to_clipspace(
prevPosition, prevPosition64Low, ZERO_OFFSET, prevPositionCommon
);
#else
vec4 prevPositionScreen = project_position_to_clipspace(
prevPosition, prevPosition64Low, ZERO_OFFSET
);
#endif
vec4 currPositionScreen = project_position_to_clipspace(currPosition, currPosition64Low, ZERO_OFFSET, geometry.position);
#ifdef DASH_ENABLED
vec4 nextPositionScreen = project_position_to_clipspace(
nextPosition, nextPosition64Low, ZERO_OFFSET, nextPositionCommon
);
#else
vec4 nextPositionScreen = project_position_to_clipspace(
nextPosition, nextPosition64Low, ZERO_OFFSET
);
#endif
#ifdef DASH_ENABLED
vec4 sourcePathStartScreen = mix(currPositionScreen, prevPositionScreen, isEnd);
vec4 sourcePathEndScreen = mix(nextPositionScreen, currPositionScreen, isEnd);
vec2 billboardPathRange = getClippedPathRange(
sourcePathStartScreen.w, sourcePathEndScreen.w
);
#endif
clipLine(prevPositionScreen, currPositionScreen);
clipLine(nextPositionScreen, currPositionScreen);
clipLine(currPositionScreen, mix(nextPositionScreen, prevPositionScreen, isEnd));
width = vec3(widthPixels, 0.0);
DECKGL_FILTER_SIZE(width, geometry);
#ifdef ANTIALIASING
vec2 coveragePadding = vec2(0.5 / project.devicePixelRatio);
float coverageScale = length(width.xy) > 0.0
? length(width.xy + coveragePadding) / length(width.xy)
: 1.0;
#endif
#ifdef DASH_ENABLED
vec3 currentDeltaCommon = isEnd > 0.0
? geometry.position.xyz - prevPositionCommon.xyz
: nextPositionCommon.xyz - geometry.position.xyz;
float billboardPathLength = width.x > 0.0
? length(currentDeltaCommon) * project.scale / (width.x * project.focalDistance)
: 0.0;
#endif
vec3 offset = getLineJoinOffset(
prevPositionScreen.xyz / prevPositionScreen.w,
currPositionScreen.xyz / currPositionScreen.w,
nextPositionScreen.xyz / nextPositionScreen.w,
project_pixel_size_to_clipspace(width.xy)
#ifdef DASH_ENABLED
,
billboardPathLength, billboardPathRange
#endif
#ifdef ANTIALIASING
,
coverageScale
#endif
);
#ifdef DASH_ENABLED
vPathBounds = billboardPathLength * billboardPathRange;
#endif
DECKGL_FILTER_GL_POSITION(currPositionScreen, geometry);
gl_Position = vec4(currPositionScreen.xyz + offset * currPositionScreen.w, currPositionScreen.w);
} else {
prevPosition = project_position(prevPosition, prevPosition64Low);
currPosition = project_position(currPosition, currPosition64Low);
nextPosition = project_position(nextPosition, nextPosition64Low);
width = vec3(project_pixel_size(widthPixels), 0.0);
DECKGL_FILTER_SIZE(width, geometry);
#ifdef ANTIALIASING
vec2 coveragePadding = project_pixel_size(vec2(0.5 / project.devicePixelRatio));
float coverageScale = length(width.xy) > 0.0
? length(width.xy + coveragePadding) / length(width.xy)
: 1.0;
#endif
vec3 offset = getLineJoinOffset(
prevPosition, currPosition, nextPosition, width.xy
#ifdef DASH_ENABLED
, 1.0, vec2(0.0, 1.0)
#endif
#ifdef ANTIALIASING
, coverageScale
#endif
);
#ifdef DASH_ENABLED
vPathBounds = vec2(0.0, vPathLength);
#endif
geometry.position = vec4(currPosition + offset, 1.0);
gl_Position = project_common_position_to_clipspace(geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,wC=`#version 300 es
#define SHADER_NAME path-layer-fragment-shader
precision highp float;
in vec4 vColor;
in vec2 vCornerOffset;
in float vMiterLength;
in vec2 vPathPosition;
in float vPathLength;
in float vJointType;
#ifdef DASH_ENABLED
in vec2 vPathBounds;
#endif
out vec4 fragColor;
void main(void) {
geometry.uv = vPathPosition;
#ifdef ANTIALIASING
#ifdef DASH_ENABLED
bool isCorner = vPathPosition.y < vPathBounds.x || vPathPosition.y > vPathBounds.y;
#else
bool isCorner = vPathPosition.y < 0.0 || vPathPosition.y > vPathLength;
#endif
bool isRound = vJointType > 0.5;
float bodyCoord = abs(vPathPosition.x);
float cornerCoord = length(vCornerOffset);
float bodyPixels = (1.0 - bodyCoord) / max(fwidth(bodyCoord), 1e-6);
float cornerPixels = (1.0 - cornerCoord) / max(fwidth(cornerCoord), 1e-6);
#ifdef PATH_STYLE_OFFSET
float edgePixels = isRound && isCorner ? min(cornerPixels, bodyPixels) : bodyPixels;
#else
float edgePixels = isRound && isCorner ? cornerPixels : bodyPixels;
#endif
if (edgePixels <= -SMOOTH_EDGE_RADIUS) {
discard;
}
if (isCorner) {
if (!isRound && vMiterLength > path.miterLimit + 1.0) {
discard;
}
}
fragColor = vColor;
fragColor.a *= smoothedge(0.0, edgePixels);
#else
#ifdef DASH_ENABLED
if (vPathPosition.y < vPathBounds.x || vPathPosition.y > vPathBounds.y) {
#else
if (vPathPosition.y < 0.0 || vPathPosition.y > vPathLength) {
#endif
if (vJointType > 0.5 && length(vCornerOffset) > 1.0) {
discard;
}
if (vJointType < 0.5 && vMiterLength > path.miterLimit + 1.0) {
discard;
}
}
fragColor = vColor;
#endif
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,TC=[0,0,0,255],EC={widthUnits:`meters`,widthScale:{type:`number`,min:0,value:1},widthMinPixels:{type:`number`,min:0,value:0},widthMaxPixels:{type:`number`,min:0,value:2**53-1},jointRounded:!1,capRounded:!1,miterLimit:{type:`number`,min:0,value:4},antialiasing:!1,billboard:!1,_pathType:null,getPath:{type:`accessor`,value:e=>e.path},getColor:{type:`accessor`,value:TC},getWidth:{type:`accessor`,value:1},rounded:{deprecatedFor:[`jointRounded`,`capRounded`]}},DC={enter:(e,t)=>t.length?t.subarray(t.length-e.length):e};function OC(e){if(e.isGeospatial)return null;let{unitsPerMeter:t}=e.distanceScales;return[t[0],t[1],t[2]]}function kC(e,t){return e===t||!!(e&&t&&e.length===t.length&&e.every((e,n)=>e===t[n]))}var AC=class extends Jx{getShaders(){let{antialiasing:e}=this.props;return super.getShaders({vs:CC,fs:wC,source:SC,defines:e?{ANTIALIASING:1}:{},modules:[Ll,Ss,Uu,xC,...this.context.device.type===`webgpu`?[IS]:[]]})}get wrapLongitude(){return!1}getBounds(){return this.context.device.type===`webgpu`?null:this.getAttributeManager()?.getBounds([`vertexPositions`])}getPathProjectionScale(e){let t=this.props.coordinateSystem;if(!this.getAttributeManager()?.getAttributes().instanceDashOffsets)return null;if(e instanceof jd&&e.zoom>=12&&(t==="default"||t===`lnglat`||t===`cartesian`)){let n=Il.getUniforms({viewport:e,coordinateSystem:t,coordinateOrigin:this.props.coordinateOrigin,autoWrapLongitude:this.wrapLongitude});return[e.projectionMode,n.coordinateOrigin[1],n.commonOrigin[1],...n.commonUnitsPerWorldUnit,...n.commonUnitsPerWorldUnit2,n.commonUnitsPerMeter[2]]}let n=OC(e);return n?[e.projectionMode,...n]:[e.projectionMode]}shouldUpdateState(e){let{viewport:t}=this.context;return super.shouldUpdateState(e)||this.state?.tessellationResolution!==t.resolution||!kC(this.state?.pathProjectionScale,this.getPathProjectionScale(t))}initializeState(){let e=this.context.device.type===`webgpu`;this.getAttributeManager().addInstanced({...e?{pathPositions:{size:24,type:`float32`,transition:!1,accessor:`getPath`,update:this.calculateWebGPUPositions,shaderAttributes:{instanceLeftPositions:{size:3,elementOffset:0},instanceStartPositions:{size:3,elementOffset:3},instanceEndPositions:{size:3,elementOffset:6},instanceRightPositions:{size:3,elementOffset:9},instanceLeftPositions64Low:{size:3,elementOffset:12},instanceStartPositions64Low:{size:3,elementOffset:15},instanceEndPositions64Low:{size:3,elementOffset:18},instanceRightPositions64Low:{size:3,elementOffset:21}},noAlloc:!0}}:{vertexPositions:{size:3,vertexOffset:1,type:`float64`,fp64:this.use64bitPositions(),transition:DC,accessor:`getPath`,update:this.calculatePositions,noAlloc:!0,shaderAttributes:{instanceLeftPositions:{vertexOffset:0},instanceStartPositions:{vertexOffset:1},instanceEndPositions:{vertexOffset:2},instanceRightPositions:{vertexOffset:3}}}},instanceTypes:{size:1,type:e?`float32`:`uint8`,update:this.calculateSegmentTypes,noAlloc:!0},instanceStrokeWidths:{size:1,accessor:`getWidth`,transition:!e&&DC,defaultValue:1,bufferGroup:`path-instance-data`},instanceColors:{size:this.props.colorFormat.length,type:`unorm8`,accessor:`getColor`,transition:!e&&DC,defaultValue:TC,bufferGroup:`path-instance-data`},rowIndexes:{size:1,type:`uint32`,accessor:(e,{index:t})=>e&&e.__source?e.__source.index:t,bufferGroup:`path-instance-data`}}),this.setState({pathTesselator:new _C({fp64:this.use64bitPositions(),isWebGPU:e}),tessellationResolution:this.context.viewport.resolution,pathProjectionScale:this.getPathProjectionScale(this.context.viewport)})}updateState(e){super.updateState(e);let{props:t,oldProps:n,changeFlags:r}=e,i=this.getAttributeManager(),{viewport:a}=this.context,o=this.state.tessellationResolution!==a.resolution,s=this.getPathProjectionScale(a),c=!kC(this.state.pathProjectionScale,s),l=r.updateTriggersChanged&&(r.updateTriggersChanged.all||r.updateTriggersChanged.getPath)||t._pathType!==n._pathType||t.positionFormat!==n.positionFormat||t.wrapLongitude!==n.wrapLongitude||o;if(r.dataChanged||l){let{pathTesselator:e}=this.state,n=t.data.attributes||{};e.updateGeometry({data:t.data,geometryBuffer:n.getPath,buffers:n,normalize:!t._pathType,loop:t._pathType===`loop`,getGeometry:t.getPath,positionFormat:t.positionFormat,wrapLongitude:t.wrapLongitude,resolution:a.resolution,dataChanged:l?void 0:r.dataChanged}),this.setState({numInstances:e.instanceCount,startIndices:e.vertexStarts,tessellationResolution:a.resolution,pathProjectionScale:s}),!r.dataChanged||l?i.invalidateAll():c&&i.invalidate(`instanceDashOffsets`)}else c&&(this.setState({pathProjectionScale:s}),i.invalidate(`instanceDashOffsets`));(r.extensionsChanged||t.antialiasing!==n.antialiasing)&&(this.state.model?.destroy(),this.state.model=this._getModel(),i.invalidateAll())}getPickingInfo(e){let t=super.getPickingInfo(e),{index:n}=t,r=this.props.data;return r[0]&&r[0].__source&&(t.object=r.find(e=>e.__source.index===n)),t}disablePickingIndex(e){let t=this.props.data;if(t[0]&&t[0].__source)for(let n=0;n<t.length;n++)t[n].__source.index===e&&this._disablePickingIndex(n);else super.disablePickingIndex(e)}draw({uniforms:e}){let{jointRounded:t,capRounded:n,billboard:r,miterLimit:i,widthUnits:a,widthScale:o,widthMinPixels:s,widthMaxPixels:c}=this.props,l=this.state.model,u={jointType:Number(t),capType:Number(n),billboard:r,widthUnits:hl[a],widthScale:o,miterLimit:i,widthMinPixels:s,widthMaxPixels:c};l.shaderInputs.setProps({path:u}),l.draw(this.context.renderPass)}_getModel(){let e=[0,1,2,1,4,2,1,3,4,3,5,4],t=[0,0,0,-1,0,1,1,-1,1,1,1,0];return new Tf(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new Ld({topology:`triangle-list`,attributes:{indices:new Uint16Array(e),positions:{value:new Float32Array(t),size:2}}}),isInstanced:!0})}calculatePositions(e){let{pathTesselator:t}=this.state;e.startIndices=t.vertexStarts,e.value=t.get(`positions`)}calculateSegmentTypes(e){let{pathTesselator:t}=this.state;e.startIndices=t.vertexStarts,e.value=t.get(`segmentTypes`)}calculateWebGPUPositions(e){let{pathTesselator:t}=this.state,n=t.get(`positions`);if(!n){e.value=null;return}let r=t.instanceCount,i=new Float32Array(r*24),a=[-1,0,1,2];for(let e=0;e<r;e++){let t=e*24;for(let o=0;o<4;o++){let s=e+a[o],c=t+o*3;for(let e=0;e<3;e++){let t=s>=0&&s<r?n[s*3+e]:0,a=Math.fround(t);i[c+e]=a,i[c+e+12]=t-a}}}e.startIndices=t.vertexStarts,e.value=i}};AC.defaultProps=EC,AC.layerName=`PathLayer`;var jC=we(xe(((e,t)=>{t.exports=n,t.exports.default=n;function n(e,t,n){n||=2;var i=t&&t.length,o=i?t[0]*n:e.length,s=r(e,0,o,n,!0),c=[];if(!s||s.next===s.prev)return c;var l,d,f,p,m,h,g;if(i&&(s=u(e,t,s,n)),e.length>80*n){l=f=e[0],d=p=e[1];for(var _=n;_<o;_+=n)m=e[_],h=e[_+1],m<l&&(l=m),h<d&&(d=h),m>f&&(f=m),h>p&&(p=h);g=Math.max(f-l,p-d),g=g===0?0:32767/g}return a(s,c,n,l,d,g,0),c}function r(e,t,n,r,i){var a,o;if(i===N(e,t,n,r)>0)for(a=t;a<n;a+=r)o=A(a,e[a],e[a+1],o);else for(a=n-r;a>=t;a-=r)o=A(a,e[a],e[a+1],o);return o&&S(o,o.next)&&(j(o),o=o.next),o}function i(e,t){if(!e)return e;t||=e;var n=e,r;do if(r=!1,!n.steiner&&(S(n,n.next)||x(n.prev,n,n.next)===0)){if(j(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function a(e,t,n,r,u,d,f){if(e){!f&&d&&h(e,r,u,d);for(var p=e,m,g;e.prev!==e.next;){if(m=e.prev,g=e.next,d?s(e,r,u,d):o(e)){t.push(m.i/n|0),t.push(e.i/n|0),t.push(g.i/n|0),j(e),e=g.next,p=g.next;continue}if(e=g,e===p){f?f===1?(e=c(i(e),t,n),a(e,t,n,r,u,d,2)):f===2&&l(e,t,n,r,u,d):a(i(e),t,n,r,u,d,1);break}}}}function o(e){var t=e.prev,n=e,r=e.next;if(x(t,n,r)>=0)return!1;for(var i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=i<a?i<o?i:o:a<o?a:o,d=s<c?s<l?s:l:c<l?c:l,f=i>a?i>o?i:o:a>o?a:o,p=s>c?s>l?s:l:c>l?c:l,m=r.next;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&y(i,s,a,c,o,l,m.x,m.y)&&x(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function s(e,t,n,r){var i=e.prev,a=e,o=e.next;if(x(i,a,o)>=0)return!1;for(var s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=s<c?s<l?s:l:c<l?c:l,m=u<d?u<f?u:f:d<f?d:f,h=s>c?s>l?s:l:c>l?c:l,g=u>d?u>f?u:f:d>f?d:f,v=_(p,m,t,n,r),b=_(h,g,t,n,r),S=e.prevZ,C=e.nextZ;S&&S.z>=v&&C&&C.z<=b;){if(S.x>=p&&S.x<=h&&S.y>=m&&S.y<=g&&S!==i&&S!==o&&y(s,u,c,d,l,f,S.x,S.y)&&x(S.prev,S,S.next)>=0||(S=S.prevZ,C.x>=p&&C.x<=h&&C.y>=m&&C.y<=g&&C!==i&&C!==o&&y(s,u,c,d,l,f,C.x,C.y)&&x(C.prev,C,C.next)>=0))return!1;C=C.nextZ}for(;S&&S.z>=v;){if(S.x>=p&&S.x<=h&&S.y>=m&&S.y<=g&&S!==i&&S!==o&&y(s,u,c,d,l,f,S.x,S.y)&&x(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;C&&C.z<=b;){if(C.x>=p&&C.x<=h&&C.y>=m&&C.y<=g&&C!==i&&C!==o&&y(s,u,c,d,l,f,C.x,C.y)&&x(C.prev,C,C.next)>=0)return!1;C=C.nextZ}return!0}function c(e,t,n){var r=e;do{var a=r.prev,o=r.next.next;!S(a,o)&&C(a,r,r.next,o)&&D(a,o)&&D(o,a)&&(t.push(a.i/n|0),t.push(r.i/n|0),t.push(o.i/n|0),j(r),j(r.next),r=e=o),r=r.next}while(r!==e);return i(r)}function l(e,t,n,r,o,s){var c=e;do{for(var l=c.next.next;l!==c.prev;){if(c.i!==l.i&&b(c,l)){var u=k(c,l);c=i(c,c.next),u=i(u,u.next),a(c,t,n,r,o,s,0),a(u,t,n,r,o,s,0);return}l=l.next}c=c.next}while(c!==e)}function u(e,t,n,i){for(var a=[],o=0,s=t.length,c,l,u;o<s;o++)c=t[o]*i,l=o<s-1?t[o+1]*i:e.length,u=r(e,c,l,i,!1),u===u.next&&(u.steiner=!0),a.push(v(u));for(a.sort(d),o=0;o<a.length;o++)n=f(a[o],n);return n}function d(e,t){return e.x-t.x}function f(e,t){var n=p(e,t);if(!n)return t;var r=k(n,e);return i(r,r.next),i(n,n.next)}function p(e,t){var n=t,r=e.x,i=e.y,a=-1/0,o;do{if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){var s=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(s<=r&&s>a&&(a=s,o=n.x<n.next.x?n:n.next,s===r))return o}n=n.next}while(n!==t);if(!o)return null;var c=o,l=o.x,u=o.y,d=1/0,f;n=o;do r>=n.x&&n.x>=l&&r!==n.x&&y(i<u?r:a,i,l,u,i<u?a:r,i,n.x,n.y)&&(f=Math.abs(i-n.y)/(r-n.x),D(n,e)&&(f<d||f===d&&(n.x>o.x||n.x===o.x&&m(o,n)))&&(o=n,d=f)),n=n.next;while(n!==c);return o}function m(e,t){return x(e.prev,e,t.prev)<0&&x(t.next,e,e.next)<0}function h(e,t,n,r){var i=e;do i.z===0&&(i.z=_(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,g(i)}function g(e){var t,n,r,i,a,o,s,c,l=1;do{for(n=e,e=null,a=null,o=0;n;){for(o++,r=n,s=0,t=0;t<l&&(s++,r=r.nextZ,r);t++);for(c=l;s>0||c>0&&r;)s!==0&&(c===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,s--):(i=r,r=r.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;n=r}a.nextZ=null,l*=2}while(o>1);return e}function _(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function v(e){var t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function y(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function b(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!E(e,t)&&(D(e,t)&&D(t,e)&&O(e,t)&&(x(e.prev,e,t.prev)||x(e,t.prev,t))||S(e,t)&&x(e.prev,e,e.next)>0&&x(t.prev,t,t.next)>0)}function x(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function S(e,t){return e.x===t.x&&e.y===t.y}function C(e,t,n,r){var i=T(x(e,t,n)),a=T(x(e,t,r)),o=T(x(n,r,e)),s=T(x(n,r,t));return!!(i!==a&&o!==s||i===0&&w(e,n,t)||a===0&&w(e,r,t)||o===0&&w(n,e,r)||s===0&&w(n,t,r))}function w(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function T(e){return e>0?1:e<0?-1:0}function E(e,t){var n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&C(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function D(e,t){return x(e.prev,e,e.next)<0?x(e,t,e.next)>=0&&x(e,e.prev,t)>=0:x(e,t,e.prev)<0||x(e,e.next,t)<0}function O(e,t){var n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function k(e,t){var n=new M(e.i,e.x,e.y),r=new M(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function A(e,t,n,r){var i=new M(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function j(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function M(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}n.deviation=function(e,t,n,r){var i=t&&t.length,a=i?t[0]*n:e.length,o=Math.abs(N(e,0,a,n));if(i)for(var s=0,c=t.length;s<c;s++){var l=t[s]*n,u=s<c-1?t[s+1]*n:e.length;o-=Math.abs(N(e,l,u,n))}var d=0;for(s=0;s<r.length;s+=3){var f=r[s]*n,p=r[s+1]*n,m=r[s+2]*n;d+=Math.abs((e[f]-e[m])*(e[p+1]-e[f+1])-(e[f]-e[p])*(e[m+1]-e[f+1]))}return o===0&&d===0?0:Math.abs((d-o)/o)};function N(e,t,n,r){for(var i=0,a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}n.flatten=function(e){for(var t=e[0][0].length,n={vertices:[],holes:[],dimensions:t},r=0,i=0;i<e.length;i++){for(var a=0;a<e[i].length;a++)for(var o=0;o<t;o++)n.vertices.push(e[i][a][o]);i>0&&(r+=e[i-1].length,n.holes.push(r))}return n}}))(),1),MC=BS.CLOCKWISE,NC=BS.COUNTER_CLOCKWISE,PC={isClosed:!0};function FC(e){if(e=e&&e.positions||e,!Array.isArray(e)&&!ArrayBuffer.isView(e))throw Error(`invalid polygon`)}function IC(e){return`positions`in e?e.positions:e}function LC(e){return`holeIndices`in e?e.holeIndices:null}function RC(e){return Array.isArray(e[0])}function zC(e){return e.length>=1&&e[0].length>=2&&Number.isFinite(e[0][0])}function BC(e){let t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]}function VC(e,t,n,r){for(let i=0;i<t;i++)if(e[n+i]!==e[r-t+i])return!1;return!0}function HC(e,t,n,r,i){let a=t,o=n.length;for(let t=0;t<o;t++)for(let i=0;i<r;i++)e[a++]=n[t][i]||0;if(!BC(n))for(let t=0;t<r;t++)e[a++]=n[0][t]||0;return PC.start=t,PC.end=a,PC.size=r,VS(e,i,PC),a}function UC(e,t,n,r,i=0,a,o){a||=n.length;let s=a-i;if(s<=0)return t;let c=t;for(let t=0;t<s;t++)e[c++]=n[i+t];if(!VC(n,r,i,a))for(let t=0;t<r;t++)e[c++]=n[i+t];return PC.start=t,PC.end=c,PC.size=r,VS(e,o,PC),c}function WC(e,t){FC(e);let n=[],r=[];if(`positions`in e){let{positions:i,holeIndices:a}=e;if(a){let e=0;for(let o=0;o<=a.length;o++)e=UC(n,e,i,t,a[o-1],a[o],o===0?MC:NC),r.push(e);return r.pop(),{positions:n,holeIndices:r}}e=i}if(!RC(e))return UC(n,0,e,t,0,n.length,MC),n;if(!zC(e)){let i=0;for(let[a,o]of e.entries())i=HC(n,i,o,t,a===0?MC:NC),r.push(i);return r.pop(),{positions:n,holeIndices:r}}return HC(n,0,e,t,MC),n}function GC(e,t,n){let r=e.length/3,i=0;for(let a=0;a<r;a++){let o=(a+1)%r;i+=e[a*3+t]*e[o*3+n],i-=e[o*3+t]*e[a*3+n]}return Math.abs(i/2)}function KC(e,t,n,r){let i=e.length/3;for(let a=0;a<i;a++){let i=a*3,o=e[i+0],s=e[i+1],c=e[i+2];e[i+t]=o,e[i+n]=s,e[i+r]=c}}function qC(e,t,n,r){let i=LC(e);i&&=i.map(e=>e/t);let a=IC(e),o=r&&t===3;if(n){let e=a.length;a=a.slice();let r=[];for(let i=0;i<e;i+=t){r[0]=a[i],r[1]=a[i+1],o&&(r[2]=a[i+2]);let e=n(r);a[i]=e[0],a[i+1]=e[1],o&&(a[i+2]=e[2])}}if(o){let e=GC(a,0,1),t=GC(a,0,2),r=GC(a,1,2);if(!e&&!t&&!r)return[];e>t&&e>r||(t>r?(n||(a=a.slice()),KC(a,0,2,1)):(n||(a=a.slice()),KC(a,2,0,1)))}return(0,jC.default)(a,i,t)}var JC=class extends iS{constructor(e){let{fp64:t,IndexType:n=Uint32Array}=e;super({...e,attributes:{positions:{size:3,type:t?Float64Array:Float32Array},vertexValid:{type:Uint16Array,size:1},indices:{type:n,size:1}}})}get(e){let{attributes:t}=this;return e===`indices`?t.indices&&t.indices.subarray(0,this.vertexCount):t[e]}updateGeometry(e){super.updateGeometry(e);let t=this.buffers.indices;if(t)this.vertexCount=(t.value||t).length;else if(this.data&&!this.getGeometry)throw Error(`missing indices buffer`)}normalizeGeometry(e){if(this.normalize){let t=WC(e,this.positionSize);return this.opts.resolution?eC(IC(t),LC(t),{size:this.positionSize,gridResolution:this.opts.resolution,edgeTypes:!0}):this.opts.wrapLongitude?cC(IC(t),LC(t),{size:this.positionSize,maxLatitude:86,edgeTypes:!0}):t}return e}getGeometrySize(e){if(YC(e)){let t=0;for(let n of e)t+=this.getGeometrySize(n);return t}return IC(e).length/this.positionSize}getGeometryFromBuffer(e){return this.normalize||!this.buffers.indices?super.getGeometryFromBuffer(e):null}updateGeometryAttributes(e,t){if(e&&YC(e))for(let n of e){let e=this.getGeometrySize(n);t.geometrySize=e,this.updateGeometryAttributes(n,t),t.vertexStart+=e,t.indexStart=this.indexStarts[t.geometryIndex+1]}else{let n=e;this._updateIndices(n,t),this._updatePositions(n,t),this._updateVertexValid(n,t)}}_updateIndices(e,{geometryIndex:t,vertexStart:n,indexStart:r}){let{attributes:i,indexStarts:a,typedArrayManager:o}=this,s=i.indices;if(!s||!e)return;let c=r,l=qC(e,this.positionSize,this.opts.preproject,this.opts.full3d);s=o.allocate(s,r+l.length,{copy:!0});for(let e=0;e<l.length;e++)s[c++]=l[e]+n;a[t+1]=r+l.length,i.indices=s}_updatePositions(e,{vertexStart:t,geometrySize:n}){let{attributes:{positions:r},positionSize:i}=this;if(!r||!e)return;let a=IC(e);for(let e=t,o=0;o<n;e++,o++){let t=a[o*i],n=a[o*i+1],s=i>2?a[o*i+2]:0;r[e*3]=t,r[e*3+1]=n,r[e*3+2]=s}}_updateVertexValid(e,{vertexStart:t,geometrySize:n}){let{positionSize:r}=this,i=this.attributes.vertexValid,a=e&&LC(e);if(e&&e.edgeTypes?i.set(e.edgeTypes,t):i.fill(1,t,t+n),a)for(let e=0;e<a.length;e++)i[t+a[e]/r-1]=0;i[t+n-1]=0}};function YC(e){return Array.isArray(e)&&e.length>0&&!Number.isFinite(e[0])}var XC=`struct SolidPolygonUniforms {
  extruded: f32,
  isWireframe: f32,
  elevationScale: f32,
};

@group(0) @binding(auto) var<uniform> solidPolygon: SolidPolygonUniforms;
`,ZC=`layout(std140) uniform solidPolygonUniforms {
  bool extruded;
  bool isWireframe;
  float elevationScale;
} solidPolygon;
`,QC={name:`solidPolygon`,source:XC,vs:ZC,fs:ZC,uniformTypes:{extruded:`f32`,isWireframe:`f32`,elevationScale:`f32`}},$C=`in vec4 fillColors;
in vec4 lineColors;
in float rowIndexes;
out vec4 vColor;
struct PolygonProps {
vec3 positions;
vec3 positions64Low;
vec3 normal;
float elevations;
};
vec3 project_offset_normal(vec3 vector) {
if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSETS) {
return normalize(vector * project.commonUnitsPerWorldUnit);
}
return project_normal(vector);
}
void calculatePosition(PolygonProps props) {
vec3 pos = props.positions;
vec3 pos64Low = props.positions64Low;
vec3 normal = props.normal;
vec4 colors = solidPolygon.isWireframe ? lineColors : fillColors;
geometry.worldPosition = props.positions;
geometry.pickingColor = picking_getPickingColorFromIndex(rowIndexes);
if (solidPolygon.extruded) {
pos.z += props.elevations * solidPolygon.elevationScale;
}
gl_Position = project_position_to_clipspace(pos, pos64Low, vec3(0.), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
if (solidPolygon.extruded) {
#ifdef IS_SIDE_VERTEX
normal = project_offset_normal(normal);
#else
normal = project_normal(normal);
#endif
geometry.normal = normal;
vec3 lightColor = lighting_getLightColor(colors.rgb, project.cameraPosition, geometry.position.xyz, geometry.normal);
vColor = vec4(lightColor, colors.a * layer.opacity);
} else {
vColor = vec4(colors.rgb, colors.a * layer.opacity);
}
DECKGL_FILTER_COLOR(vColor, geometry);
}
`,ew=`\
#version 300 es
#define SHADER_NAME solid-polygon-layer-vertex-shader
in vec3 vertexPositions;
in vec3 vertexPositions64Low;
in float elevations;
${$C}
void main(void) {
PolygonProps props;
props.positions = vertexPositions;
props.positions64Low = vertexPositions64Low;
props.elevations = elevations;
props.normal = vec3(0.0, 0.0, 1.0);
calculatePosition(props);
}
`,tw=`\
#version 300 es
#define SHADER_NAME solid-polygon-layer-vertex-shader-side
#define IS_SIDE_VERTEX
in vec2 positions;
in vec3 vertexPositions;
in vec3 nextVertexPositions;
in vec3 vertexPositions64Low;
in vec3 nextVertexPositions64Low;
in float elevations;
in float instanceVertexValid;
${$C}
void main(void) {
if(instanceVertexValid < 0.5){
gl_Position = vec4(0.);
return;
}
PolygonProps props;
vec3 pos;
vec3 pos64Low;
vec3 nextPos;
vec3 nextPos64Low;
#if RING_WINDING_ORDER_CW == 1
pos = vertexPositions;
pos64Low = vertexPositions64Low;
nextPos = nextVertexPositions;
nextPos64Low = nextVertexPositions64Low;
#else
pos = nextVertexPositions;
pos64Low = nextVertexPositions64Low;
nextPos = vertexPositions;
nextPos64Low = vertexPositions64Low;
#endif
props.positions = mix(pos, nextPos, positions.x);
props.positions64Low = mix(pos64Low, nextPos64Low, positions.x);
props.normal = vec3(
pos.y - nextPos.y + (pos64Low.y - nextPos64Low.y),
nextPos.x - pos.x + (nextPos64Low.x - pos64Low.x),
0.0);
props.elevations = elevations * positions.y;
calculatePosition(props);
}
`,nw=`#version 300 es
#define SHADER_NAME solid-polygon-layer-fragment-shader
precision highp float;
in vec4 vColor;
out vec4 fragColor;
void main(void) {
fragColor = vColor;
geometry.uv = vec2(0.);
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`;function rw(){return`fn project_offset_normal(vector: vec3<f32>) -> vec3<f32> {
  if (project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT ||
      project.coordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSETS) {
    return normalize(vector * project.commonUnitsPerWorldUnit);
  }
  return project_normal(vector);
}

fn apply_polygon_color(
  colors: vec4<f32>,
  normal: vec3<f32>,
  position: vec4<f32>
) -> vec4<f32> {
  if (solidPolygon.extruded > 0.5) {
    let lightColor = lighting_getLightColor2(
      colors.rgb,
      project.cameraPosition,
      position.xyz,
      normal
    );
    return vec4<f32>(lightColor, colors.a * layer.opacity);
  }
  return vec4<f32>(colors.rgb, colors.a * layer.opacity);
}
`}function iw(){return`@fragment
fn fragmentMain(inp: Varyings) -> @location(0) vec4<f32> {
  geometry.uv = vec2<f32>(0.0, 0.0);

  clip_filterColor(inp.clipCoordinates);

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(inp.pickingColor)) {
      discard;
    }
    return vec4<f32>(inp.pickingColor, 1.0);
  }

  var fragColor = inp.vColor;

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(inp.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  return deckgl_premultiplied_alpha(fragColor);
}
`}function aw(){return`\
${rw()}

struct Attributes {
  @location(0) vertexPositions: vec3<f32>,
  @location(1) vertexPositions64Low: vec3<f32>,
  @location(2) elevations: f32,
  @location(3) fillColors: vec4<f32>,
  @location(4) lineColors: vec4<f32>,
  @location(5) rowIndexes: u32,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vColor: vec4<f32>,
  @location(1) pickingColor: vec3<f32>,
  @location(2) clipCoordinates: vec2<f32>,
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var outp: Varyings;

  var pos = attributes.vertexPositions;
  if (solidPolygon.extruded > 0.5) {
    pos.z += attributes.elevations * solidPolygon.elevationScale;
  }

  geometry.worldPosition = attributes.vertexPositions;
  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.rowIndexes);

  let projectedPosition = project_position_to_clipspace_and_commonspace(
    pos,
    attributes.vertexPositions64Low,
    vec3<f32>(0.0)
  );
  geometry.position = projectedPosition.commonPosition;
  outp.position = projectedPosition.clipPosition;

  let normal = project_normal(vec3<f32>(0.0, 0.0, 1.0));
  geometry.normal = normal;

  let colors = select(
    attributes.fillColors,
    attributes.lineColors,
    solidPolygon.isWireframe > 0.5
  );
  outp.vColor = apply_polygon_color(colors, normal, geometry.position);
  outp.pickingColor = geometry.pickingColor;

  outp.clipCoordinates = geometry.position.xy;
  clip_filterPosition(&outp.position, geometry.worldPosition.xy);

  return outp;
}

${iw()}
`}function ow(e){return`\
const RING_WINDING_ORDER_CW: bool = ${e?`true`:`false`};

${rw()}

struct Attributes {
  @location(0) positions: vec2<f32>,
  @location(1) vertexPositions: vec3<f32>,
  @location(2) vertexPositions64Low: vec3<f32>,
  @location(3) nextVertexPositions: vec3<f32>,
  @location(4) nextVertexPositions64Low: vec3<f32>,
  @location(5) vertexValid: f32,
  @location(6) elevations: f32,
  @location(7) fillColors: vec4<f32>,
  @location(8) lineColors: vec4<f32>,
  @location(9) rowIndexes: u32,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vColor: vec4<f32>,
  @location(1) pickingColor: vec3<f32>,
  @location(2) clipCoordinates: vec2<f32>,
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  var outp: Varyings;
  outp.position = vec4<f32>(0.0);
  outp.vColor = vec4<f32>(0.0);
  outp.pickingColor = picking_getPickingColorFromIndex(attributes.rowIndexes);
  outp.clipCoordinates = vec2<f32>(0.0);

  if (attributes.vertexValid < 0.5) {
    return outp;
  }

  let pos = select(attributes.nextVertexPositions, attributes.vertexPositions, RING_WINDING_ORDER_CW);
  let pos64Low = select(
    attributes.nextVertexPositions64Low,
    attributes.vertexPositions64Low,
    RING_WINDING_ORDER_CW
  );
  let nextPos = select(attributes.vertexPositions, attributes.nextVertexPositions, RING_WINDING_ORDER_CW);
  let nextPos64Low = select(
    attributes.vertexPositions64Low,
    attributes.nextVertexPositions64Low,
    RING_WINDING_ORDER_CW
  );

  let position = mix(pos, nextPos, attributes.positions.x);
  let position64Low = mix(pos64Low, nextPos64Low, attributes.positions.x);

  var worldPosition = position;
  if (solidPolygon.extruded > 0.5) {
    worldPosition.z += attributes.elevations * attributes.positions.y * solidPolygon.elevationScale;
  }

  geometry.worldPosition = position;
  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.rowIndexes);

  let projectedPosition = project_position_to_clipspace_and_commonspace(
    worldPosition,
    position64Low,
    vec3<f32>(0.0)
  );
  geometry.position = projectedPosition.commonPosition;
  outp.position = projectedPosition.clipPosition;

  let normal = project_offset_normal(vec3<f32>(
    pos.y - nextPos.y + (pos64Low.y - nextPos64Low.y),
    nextPos.x - pos.x + (nextPos64Low.x - pos64Low.x),
    0.0
  ));
  geometry.normal = normal;

  let colors = select(
    attributes.fillColors,
    attributes.lineColors,
    solidPolygon.isWireframe > 0.5
  );
  outp.vColor = apply_polygon_color(colors, normal, geometry.position);
  outp.pickingColor = geometry.pickingColor;

  outp.clipCoordinates = geometry.position.xy;
  clip_filterPosition(&outp.position, geometry.worldPosition.xy);

  return outp;
}

${iw()}
`}function sw(e,t){return e===`top`?aw():ow(t)}var cw=[0,0,0,255],lw={filled:!0,extruded:!1,wireframe:!1,_normalize:!0,_windingOrder:`CW`,_full3d:!1,elevationScale:{type:`number`,min:0,value:1},getPolygon:{type:`accessor`,value:e=>e.polygon},getElevation:{type:`accessor`,value:1e3},getFillColor:{type:`accessor`,value:cw},getLineColor:{type:`accessor`,value:cw},material:!0},uw={enter:(e,t)=>t.length?t.subarray(t.length-e.length):e},dw=class extends Jx{getShaders(e){let t=!this.props._normalize&&this.props._windingOrder===`CCW`?0:1;return super.getShaders({vs:e===`top`?ew:tw,fs:nw,source:sw(e,!!t),defines:{RING_WINDING_ORDER_CW:t},modules:[Ll,Ss,vs,Uu,QC,...this.context.device.type===`webgpu`?[IS]:[]]})}get wrapLongitude(){return!1}getBounds(){return this.getAttributeManager()?.getBounds([`vertexPositions`])}initializeState(){let{viewport:e}=this.context,{coordinateSystem:t}=this.props,{_full3d:n}=this.props;e.isGeospatial&&t==="default"&&(t=`lnglat`);let r;t===`lnglat`&&(r=n?e.projectPosition.bind(e):e.projectFlat.bind(e)),this.setState({numInstances:0,polygonTesselator:new JC({preproject:r,fp64:this.use64bitPositions(),IndexType:Uint32Array})});let i=this.getAttributeManager(),a=this.context.device.type===`webgpu`;i.add({indices:{size:1,isIndexed:!0,update:this.calculateIndices,noAlloc:!0},vertexPositions:{size:3,type:`float64`,stepMode:`dynamic`,fp64:this.use64bitPositions(),transition:uw,accessor:`getPolygon`,update:this.calculatePositions,noAlloc:!0,...a?{}:{shaderAttributes:{nextVertexPositions:{vertexOffset:1}}}},...a?{nextVertexPositions:{size:3,type:`float64`,stepMode:`dynamic`,fp64:this.use64bitPositions(),transition:!1,update:this.calculateNextPositions,noAlloc:!0}}:{},[a?`vertexValid`:`instanceVertexValid`]:{size:1,type:a?`float32`:`uint16`,stepMode:`instance`,update:this.calculateVertexValid,noAlloc:!0},elevations:{size:1,stepMode:`dynamic`,transition:uw,accessor:`getElevation`,bufferGroup:`solid-polygon-instance-data`},fillColors:{size:this.props.colorFormat.length,type:`unorm8`,stepMode:`dynamic`,transition:uw,accessor:`getFillColor`,defaultValue:cw,bufferGroup:`solid-polygon-instance-data`},lineColors:{size:this.props.colorFormat.length,type:`unorm8`,stepMode:`dynamic`,transition:uw,accessor:`getLineColor`,defaultValue:cw,bufferGroup:`solid-polygon-instance-data`},rowIndexes:{size:1,type:`uint32`,stepMode:`dynamic`,accessor:(e,{index:t})=>e&&e.__source?e.__source.index:t,bufferGroup:`solid-polygon-instance-data`}})}getPickingInfo(e){let t=super.getPickingInfo(e),{index:n}=t,r=this.props.data;return r[0]&&r[0].__source&&(t.object=r.find(e=>e.__source.index===n)),t}disablePickingIndex(e){let t=this.props.data;if(t[0]&&t[0].__source)for(let n=0;n<t.length;n++)t[n].__source.index===e&&this._disablePickingIndex(n);else super.disablePickingIndex(e)}draw({uniforms:e}){let{extruded:t,filled:n,wireframe:r,elevationScale:i}=this.props,{topModel:a,sideModel:o,wireframeModel:s,polygonTesselator:c}=this.state,l={extruded:!!t,elevationScale:i,isWireframe:!1};s&&r&&(s.setInstanceCount(c.instanceCount-1),s.shaderInputs.setProps({solidPolygon:{...l,isWireframe:!0}}),s.draw(this.context.renderPass)),o&&n&&(o.setInstanceCount(c.instanceCount-1),o.shaderInputs.setProps({solidPolygon:l}),o.draw(this.context.renderPass)),a&&n&&(a.setVertexCount(c.vertexCount),a.shaderInputs.setProps({solidPolygon:l}),a.draw(this.context.renderPass))}updateState(e){super.updateState(e),this.updateGeometry(e);let{props:t,oldProps:n,changeFlags:r}=e,i=this.getAttributeManager();(r.extensionsChanged||t.filled!==n.filled||t.extruded!==n.extruded)&&(this.state.models?.forEach(e=>e.destroy()),this.setState(this._getModels()),i.invalidateAll())}updateGeometry({props:e,oldProps:t,changeFlags:n}){if(n.dataChanged||n.updateTriggersChanged&&(n.updateTriggersChanged.all||n.updateTriggersChanged.getPolygon)){let{polygonTesselator:t}=this.state,r=e.data.attributes||{};t.updateGeometry({data:e.data,normalize:e._normalize,geometryBuffer:r.getPolygon,buffers:this.context.device.type===`webgpu`?{...r}:r,getGeometry:e.getPolygon,positionFormat:e.positionFormat,wrapLongitude:e.wrapLongitude,resolution:this.context.viewport.resolution,fp64:this.use64bitPositions(),dataChanged:n.dataChanged,full3d:e._full3d}),this.setState({numInstances:t.instanceCount,startIndices:t.vertexStarts}),n.dataChanged||this.getAttributeManager().invalidateAll()}}_getModels(){let{id:e,filled:t,extruded:n}=this.props,r,i,a;if(t){let t=this.getShaders(`top`);t.defines={...t.defines,NON_INSTANCED_MODEL:1};let n=this.getAttributeManager().getBufferLayouts({isInstanced:!1});this.context.device.type===`webgpu`&&(n=n.filter(e=>e.name!==`indices`&&e.name!==`vertexValid`&&e.name!==`instanceVertexValid`&&e.name!==`nextVertexPositions`)),r=new Tf(this.context.device,{...t,id:`${e}-top`,topology:`triangle-list`,bufferLayout:n,isIndexed:!0,userData:{excludeAttributes:{vertexValid:!0,instanceVertexValid:!0,nextVertexPositions:!0}}})}if(n){let t=this.getAttributeManager().getBufferLayouts({isInstanced:!0});this.context.device.type===`webgpu`&&(t=t.filter(e=>e.name!==`indices`)),i=new Tf(this.context.device,{...this.getShaders(`side`),id:`${e}-side`,bufferLayout:t,geometry:new Ld({topology:`triangle-strip`,attributes:{positions:{size:2,value:new Float32Array([1,0,0,0,1,1,0,1])}}}),isInstanced:!0,userData:{excludeAttributes:{indices:!0}}}),a=new Tf(this.context.device,{...this.getShaders(`side`),id:`${e}-wireframe`,bufferLayout:t,geometry:new Ld({topology:`line-strip`,attributes:{positions:{size:2,value:new Float32Array([1,0,0,0,0,1,1,1])}}}),isInstanced:!0,userData:{excludeAttributes:{indices:!0}}})}return{models:[i,a,r].filter(Boolean),topModel:r,sideModel:i,wireframeModel:a}}calculateIndices(e){let{polygonTesselator:t}=this.state;e.startIndices=t.indexStarts,e.value=t.get(`indices`)}calculatePositions(e){let{polygonTesselator:t}=this.state;e.startIndices=t.vertexStarts;let n=this.props.data.attributes?.getPolygon;if(this.context.device.type===`webgpu`&&ArrayBuffer.isView(n?.value)){let{value:r,size:i=3,offset:a=0,stride:o}=n,s=a/r.BYTES_PER_ELEMENT,c=o?o/r.BYTES_PER_ELEMENT:i,l=new Float64Array(t.instanceCount*3);for(let e=0;e<t.instanceCount;e++){let t=s+e*c,n=e*3;l[n]=r[t],l[n+1]=r[t+1],l[n+2]=i>2?r[t+2]:0}e.value=l;return}e.value=t.get(`positions`)}calculateVertexValid(e){let t=this.props.data.attributes?.instanceVertexValid?.value,n=this.context.device.type===`webgpu`&&t?t:this.state.polygonTesselator.get(`vertexValid`);e.value=this.context.device.type===`webgpu`&&n?Float32Array.from(n):n}calculateNextPositions(e){let{polygonTesselator:t}=this.state,n=this.getAttributeManager().getAttributes(),r=n.vertexPositions.value,i=this.props.data.attributes?.instanceVertexValid?.value||n.vertexValid?.value||t.get(`vertexValid`);if(e.startIndices=t.vertexStarts,!r){e.value=r;return}let a=r.length/3,o=new r.constructor(r.length);for(let e=0;e<a;e++){let t=e*3,n=i?.[e]&&e+1<a?t+3:t;for(let e=0;e<3;e++)o[t+e]=r[n+e]}e.value=o}};dw.defaultProps=lw,dw.layerName=`SolidPolygonLayer`;function fw({data:e,getIndex:t,dataRange:n,replace:r}){let{startRow:i=0,endRow:a=1/0}=n,o=e.length,s=o,c=o;for(let n=0;n<o;n++){let r=t(e[n]);if(s>n&&r>=i&&(s=n),r>=a){c=n;break}}let l=s,u=c-s===r.length?void 0:e.slice(c);for(let t=0;t<r.length;t++)e[l++]=r[t];if(u){for(let t=0;t<u.length;t++)e[l++]=u[t];e.length=l}return{startRow:s,endRow:s+r.length}}function pw(e,t){if(!e)return null;let n=`startIndices`in e?e.startIndices[t]:t,r=e.featureIds.value[n];return n===-1?null:mw(e,r,n)}function mw(e,t,n){let r={properties:{...e.properties[t]}};for(let t in e.numericProps)r.properties[t]=e.numericProps[t].value[n];return r}function hw(e){let t={points:null,lines:null,polygons:null};for(let n in t){let r=e[n].globalFeatureIds.value;t[n]=new Uint32Array(r)}return t}var gw=`layout(std140) uniform sdfUniforms {
  float gamma;
  bool enabled;
  float buffer;
  float outlineBuffer;
  vec4 outlineColor;
} sdf;
`,_w={name:`sdf`,vs:gw,fs:gw,uniformTypes:{gamma:`f32`,enabled:`f32`,buffer:`f32`,outlineBuffer:`f32`,outlineColor:`vec4<f32>`}},vw={none:0,start:1,center:2,end:3},yw={name:`text`,vs:`\
layout(std140) uniform textUniforms {
  highp vec2 cutoffPixels;
  highp ivec2 align;
  highp float fontSize;
  bool flipY;
} text;

#define ALIGN_MODE_START ${vw.start}
#define ALIGN_MODE_CENTER ${vw.center}
#define ALIGN_MODE_END ${vw.end}
`,getUniforms:({contentCutoffPixels:e=[0,0],contentAlignHorizontal:t=`none`,contentAlignVertical:n=`none`,fontSize:r,viewport:i})=>({cutoffPixels:e,align:[vw[t],vw[n]],fontSize:r,flipY:i?.flipY??!1}),uniformTypes:{cutoffPixels:`vec2<f32>`,align:`vec2<i32>`,fontSize:`f32`,flipY:`f32`}},bw=`#version 300 es
#define SHADER_NAME multi-icon-layer-vertex-shader
in vec2 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in float instanceSizes;
in float instanceAngles;
in vec4 instanceColors;
in float rowIndexes;
in vec4 instanceIconFrames;
in float instanceColorModes;
in vec2 instanceOffsets;
in vec2 instancePixelOffset;
in vec4 instanceClipRect;
out float vColorMode;
out vec4 vColor;
out vec2 vTextureCoords;
out vec2 uv;
vec2 rotate_by_angle(vec2 vertex, float angle) {
float angle_radian = angle * PI / 180.0;
float cos_angle = cos(angle_radian);
float sin_angle = sin(angle_radian);
mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
return rotationMatrix * vertex;
}
float getPixelOffsetFromAlignment(float anchor, float extent, float clipStart, float clipEnd, int mode) {
if (clipEnd < clipStart) return 0.0;
if (mode == ALIGN_MODE_START) {
return max(- (anchor + clipStart), 0.0);
}
if (mode == ALIGN_MODE_CENTER) {
float _min = max(0., anchor + clipStart);
float _max = min(extent, anchor + clipEnd);
return _min < _max ? (_min + _max) / 2.0 - anchor : 0.0;
}
if (mode == ALIGN_MODE_END) {
return min(extent - (anchor + clipEnd), 0.);
}
return 0.0;
}
void main(void) {
geometry.worldPosition = instancePositions;
geometry.uv = positions;
geometry.pickingColor = picking_getPickingColorFromIndex(rowIndexes);
uv = positions;
vec2 iconSize = instanceIconFrames.zw;
float sizePixels = clamp(
project_size_to_pixel(instanceSizes * icon.sizeScale, icon.sizeUnits),
icon.sizeMinPixels, icon.sizeMaxPixels
);
float instanceScale = sizePixels / text.fontSize;
vec2 pixelOffset = positions / 2.0 * iconSize + instanceOffsets;
pixelOffset = rotate_by_angle(pixelOffset, instanceAngles) * instanceScale;
pixelOffset += instancePixelOffset;
pixelOffset.y *= -1.0;
vec2 anchorPosScreen;
if (icon.billboard)  {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
anchorPosScreen = gl_Position.xy / gl_Position.w;
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = vec3(pixelOffset, 0.0);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
if (text.flipY) {
offset_common.y *= -1.;
}
DECKGL_FILTER_SIZE(offset_common, geometry);
vec4 anchorPos = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0));
anchorPosScreen = anchorPos.xy / anchorPos.w;
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
anchorPosScreen = vec2(anchorPosScreen.x + 1.0, 1.0 - anchorPosScreen.y) / 2.0 * project.viewportSize / project.devicePixelRatio;
vec2 xy = project_size_to_pixel(instanceClipRect.xy);
vec2 wh = project_size_to_pixel(instanceClipRect.zw);
if (text.flipY) {
xy.y = -xy.y - wh.y;
}
if (text.align.x > 0 || text.align.y > 0) {
vec2 viewportPixels = project.viewportSize / project.devicePixelRatio;
vec2 scrollPixels = vec2(
getPixelOffsetFromAlignment(anchorPosScreen.x, viewportPixels.x, xy.x, xy.x + wh.x, text.align.x),
-getPixelOffsetFromAlignment(anchorPosScreen.y, viewportPixels.y, -xy.y - wh.y, -xy.y, text.align.y)
);
pixelOffset += scrollPixels;
gl_Position.xy += project_pixel_size_to_clipspace(scrollPixels);
}
if (instanceClipRect.z >= 0.) {
if (pixelOffset.x < xy.x || pixelOffset.x > xy.x + wh.x) {
gl_Position = vec4(0.0);
}
else if (text.cutoffPixels.x > 0.) {
float vpWidth = project.viewportSize.x / project.devicePixelRatio;
float l = max(anchorPosScreen.x + xy.x, 0.0);
float r = min(anchorPosScreen.x + xy.x + wh.x, vpWidth);
if (r - l < text.cutoffPixels.x) {
gl_Position = vec4(0.0);
}
}
}
if (instanceClipRect.w >= 0.) {
if (pixelOffset.y < xy.y || pixelOffset.y > xy.y + wh.y) {
gl_Position = vec4(0.0);
}
else if (text.cutoffPixels.y > 0.) {
float vpHeight = project.viewportSize.y / project.devicePixelRatio;
float t = max(anchorPosScreen.y - xy.y - wh.y, 0.0);
float b = min(anchorPosScreen.y - xy.y, vpHeight);
if (b - t < text.cutoffPixels.y) {
gl_Position = vec4(0.0);
}
}
}
vTextureCoords = mix(
instanceIconFrames.xy,
instanceIconFrames.xy + iconSize,
(positions.xy + 1.0) / 2.0
) / icon.iconsTextureDim;
vColor = instanceColors;
DECKGL_FILTER_COLOR(vColor, geometry);
vColorMode = instanceColorModes;
}
`,xw=`#version 300 es
#define SHADER_NAME multi-icon-layer-fragment-shader
precision highp float;
uniform sampler2D iconsTexture;
in vec4 vColor;
in vec2 vTextureCoords;
in vec2 uv;
out vec4 fragColor;
void main(void) {
geometry.uv = uv;
if (!bool(picking.isActive)) {
float alpha = texture(iconsTexture, vTextureCoords).a;
vec4 color = vColor;
if (sdf.enabled) {
float distance = alpha;
alpha = smoothstep(sdf.buffer - sdf.gamma, sdf.buffer + sdf.gamma, distance);
if (sdf.outlineBuffer > 0.0) {
float inFill = alpha;
float inBorder = smoothstep(sdf.outlineBuffer - sdf.gamma, sdf.outlineBuffer + sdf.gamma, distance);
color = mix(sdf.outlineColor, vColor, inFill);
alpha = inBorder;
}
}
float a = alpha * color.a;
if (a < icon.alphaCutoff) {
discard;
}
fragColor = vec4(color.rgb, a * layer.opacity);
}
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`;function Sw({collision:e=!1}={}){return`\
struct IconUniforms {
  sizeScale: f32,
  iconsTextureDim: vec2<f32>,
  sizeBasis: f32,
  sizeMinPixels: f32,
  sizeMaxPixels: f32,
  billboard: i32,
  sizeUnits: i32,
  alphaCutoff: f32
};

struct TextUniforms {
  cutoffPixels: vec2<f32>,
  align: vec2<i32>,
  fontSize: f32,
  flipY: f32
};

struct SdfUniforms {
  gamma: f32,
  enabled: f32,
  buffer: f32,
  outlineBuffer: f32,
  outlineColor: vec4<f32>
};

${e?`struct CollisionUniforms {
  sort: i32,
  enabled: i32
};
`:``}

const ALIGN_MODE_START: i32 = 1;
const ALIGN_MODE_CENTER: i32 = 2;
const ALIGN_MODE_END: i32 = 3;

@group(0) @binding(auto) var<uniform> icon: IconUniforms;
@group(0) @binding(auto) var<uniform> text: TextUniforms;
@group(0) @binding(auto) var<uniform> sdf: SdfUniforms;
${e?`@group(0) @binding(auto) var<uniform> collision: CollisionUniforms;`:``}
@group(0) @binding(auto) var iconsTexture : texture_2d<f32>;
@group(0) @binding(auto) var iconsTextureSampler : sampler;
${e?`@group(0) @binding(auto) var collision_texture : texture_2d<f32>;
`:``}

fn rotate_by_angle(vertex: vec2<f32>, angle_deg: f32) -> vec2<f32> {
  let angle_radian = angle_deg * PI / 180.0;
  let c = cos(angle_radian);
  let s = sin(angle_radian);
  let rotation = mat2x2<f32>(vec2<f32>(c, -s), vec2<f32>(s, c));
  return rotation * vertex;
}

fn get_pixel_offset_from_alignment(
  anchor: f32,
  extent: f32,
  clipStart: f32,
  clipEnd: f32,
  mode: i32
) -> f32 {
  if (clipEnd < clipStart) {
    return 0.0;
  }
  if (mode == ALIGN_MODE_START) {
    return max(-(anchor + clipStart), 0.0);
  }
  if (mode == ALIGN_MODE_CENTER) {
    let minValue = max(0.0, anchor + clipStart);
    let maxValue = min(extent, anchor + clipEnd);
    if (minValue < maxValue) {
      return (minValue + maxValue) / 2.0 - anchor;
    }
    return 0.0;
  }
  if (mode == ALIGN_MODE_END) {
    return min(extent - (anchor + clipEnd), 0.0);
  }
  return 0.0;
}

${e?`fn collision_match(texCoords: vec2<f32>, pickingColor: vec3<f32>) -> f32 {
  let textureSize = vec2<i32>(textureDimensions(collision_texture));
  let pixelCoords = clamp(
    vec2<i32>(texCoords * vec2<f32>(textureSize)),
    vec2<i32>(0),
    textureSize - vec2<i32>(1)
  );
  let collisionPickingColor = textureLoad(collision_texture, pixelCoords, 0);
  let delta = dot(abs(collisionPickingColor.rgb - pickingColor), vec3<f32>(1.0));
  return step(delta, 0.001);
}

fn collision_is_visible(texCoords: vec2<f32>, pickingColor: vec3<f32>) -> f32 {
  if (collision.enabled == 0) {
    return 1.0;
  }

  var accumulator = 0.0;
  let stepSize = vec2<f32>(1.0) / project.viewportSize;

  for (var i: i32 = -2; i <= 2; i = i + 1) {
    for (var j: i32 = -2; j <= 2; j = j + 1) {
      let delta = vec2<f32>(f32(j), f32(i)) * stepSize;
      accumulator = accumulator + collision_match(texCoords + delta, pickingColor);
    }
  }

  return pow(accumulator / 25.0, 2.2);
}
`:``}

struct Attributes {
  @location(0) positions: vec2<f32>,

  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceSizes: f32,
  @location(4) instanceAngles: f32,
  @location(5) instanceColors: vec4<f32>,
  @location(6) instanceIconFrames: vec4<f32>,
  @location(7) instanceColorModes: f32,
  @location(8) instanceOffsets: vec2<f32>,
  @location(9) instancePixelOffset: vec2<f32>,
  @location(10) rowIndexes: u32,
  @location(11) instanceClipRect: vec4<f32>,
  ${e?`@location(12) collisionPriorities: f32,`:``}
};

struct Varyings {
  @builtin(position) position: vec4<f32>,

  @location(0) vColorMode: f32,
  @location(1) vColor: vec4<f32>,
  @location(2) vTextureCoords: vec2<f32>,
  @location(3) uv: vec2<f32>,
  @location(4) pickingColor: vec3<f32>,
};

@vertex
fn vertexMain(inp: Attributes) -> Varyings {
  geometry.worldPosition = inp.instancePositions;
  geometry.uv = inp.positions;
  geometry.pickingColor = picking_getPickingColorFromIndex(inp.rowIndexes);

  var outp: Varyings;
  outp.uv = inp.positions;

  let iconSize = inp.instanceIconFrames.zw;

  let sizePixels = clamp(
    project_unit_size_to_pixel(inp.instanceSizes * icon.sizeScale, icon.sizeUnits),
    icon.sizeMinPixels, icon.sizeMaxPixels
  );
  let instanceScale = sizePixels / text.fontSize;

  var pixelOffset = inp.positions / 2.0 * iconSize + inp.instanceOffsets;
  pixelOffset = rotate_by_angle(pixelOffset, inp.instanceAngles) * instanceScale;
  pixelOffset = pixelOffset + inp.instancePixelOffset;
  pixelOffset.y = pixelOffset.y * -1.0;

  var pos: vec4<f32>;
  var anchorPosScreen: vec2<f32>;
  if (icon.billboard != 0) {
    pos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, vec3<f32>(0.0));
    anchorPosScreen = pos.xy / pos.w;

    let clipOffset = project_pixel_size_to_clipspace(pixelOffset);
    pos = vec4<f32>(pos.x + clipOffset.x, pos.y + clipOffset.y, pos.z, pos.w);
  } else {
    var offsetCommon = vec3<f32>(project_pixel_size_vec2(pixelOffset), 0.0);
    if (text.flipY > 0.5) {
      offsetCommon.y = offsetCommon.y * -1.0;
    }
    let anchorPos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, vec3<f32>(0.0));
    anchorPosScreen = anchorPos.xy / anchorPos.w;
    pos = project_position_to_clipspace(inp.instancePositions, inp.instancePositions64Low, offsetCommon);
  }

  anchorPosScreen = vec2<f32>(anchorPosScreen.x + 1.0, 1.0 - anchorPosScreen.y) / 2.0 *
    project.viewportSize / project.devicePixelRatio;
  var xy = project_size_vec2(inp.instanceClipRect.xy) * project.scale;
  var wh = project_size_vec2(inp.instanceClipRect.zw) * project.scale;

  if (text.flipY > 0.5) {
    xy.y = -xy.y - wh.y;
  }
  if (text.align.x > 0 || text.align.y > 0) {
    let viewportPixels = project.viewportSize / project.devicePixelRatio;
    let scrollPixels = vec2<f32>(
      get_pixel_offset_from_alignment(anchorPosScreen.x, viewportPixels.x, xy.x, xy.x + wh.x, text.align.x),
      -get_pixel_offset_from_alignment(anchorPosScreen.y, viewportPixels.y, -xy.y - wh.y, -xy.y, text.align.y)
    );
    pixelOffset = pixelOffset + scrollPixels;
    let scrollClipOffset = project_pixel_size_to_clipspace(scrollPixels);
    pos.x = pos.x + scrollClipOffset.x;
    pos.y = pos.y + scrollClipOffset.y;
  }

  if (inp.instanceClipRect.z >= 0.0) {
    if (pixelOffset.x < xy.x || pixelOffset.x > xy.x + wh.x) {
      pos = vec4<f32>(0.0);
    } else if (text.cutoffPixels.x > 0.0) {
      let viewportWidth = project.viewportSize.x / project.devicePixelRatio;
      let left = max(anchorPosScreen.x + xy.x, 0.0);
      let right = min(anchorPosScreen.x + xy.x + wh.x, viewportWidth);
      if (right - left < text.cutoffPixels.x) {
        pos = vec4<f32>(0.0);
      }
    }
  }
  if (inp.instanceClipRect.w >= 0.0) {
    if (pixelOffset.y < xy.y || pixelOffset.y > xy.y + wh.y) {
      pos = vec4<f32>(0.0);
    } else if (text.cutoffPixels.y > 0.0) {
      let viewportHeight = project.viewportSize.y / project.devicePixelRatio;
      let top = max(anchorPosScreen.y - xy.y - wh.y, 0.0);
      let bottom = min(anchorPosScreen.y - xy.y, viewportHeight);
      if (bottom - top < text.cutoffPixels.y) {
        pos = vec4<f32>(0.0);
      }
    }
  }

  ${e?`  if (collision.sort != 0) {
    pos.z = -0.001 * inp.collisionPriorities * pos.w;
  }
  `:``}

  let uvMix = (inp.positions.xy + vec2<f32>(1.0, 1.0)) * 0.5;
  outp.vTextureCoords = mix(inp.instanceIconFrames.xy, inp.instanceIconFrames.xy + iconSize, uvMix) / icon.iconsTextureDim;

  outp.position = pos;
  outp.vColor = inp.instanceColors;
  outp.vColorMode = inp.instanceColorModes;
  outp.pickingColor = picking_getPickingColorFromIndex(inp.rowIndexes);

  return outp;
}

@fragment
fn fragmentMain(inp: Varyings) -> @location(0) vec4<f32> {
  geometry.uv = inp.uv;

  let texColor = textureSample(iconsTexture, iconsTextureSampler, inp.vTextureCoords);
  var alpha = texColor.a;
  var color = inp.vColor;

  if (sdf.enabled > 0.5) {
    let distance = alpha;
    alpha = smoothstep(sdf.buffer - sdf.gamma, sdf.buffer + sdf.gamma, distance);

    if (sdf.outlineBuffer > 0.0) {
      let inFill = alpha;
      let inBorder = smoothstep(sdf.outlineBuffer - sdf.gamma, sdf.outlineBuffer + sdf.gamma, distance);
      color = mix(sdf.outlineColor, inp.vColor, inFill);
      alpha = inBorder;
    }
  } else if (inp.vColorMode == 0.0) {
    color = texColor;
  }

  var a = alpha * color.a * layer.opacity;
  if (a < icon.alphaCutoff) {
    discard;
  }

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(inp.pickingColor)) {
      discard;
    }
    return vec4<f32>(inp.pickingColor, 1.0);
  }

  ${e?`  let collisionFade = collision_is_visible(inp.position.xy / project.viewportSize, inp.pickingColor);
  a = a * collisionFade;
  if (a <= 0.0001) {
    discard;
  }
  `:``}

  var fragColor = deckgl_premultiplied_alpha(vec4<f32>(color.rgb, a));

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(inp.pickingColor - highlightedObjectColor))) {
      let highLightAlpha = picking.highlightColor.a;
      let blendedAlpha = highLightAlpha + fragColor.a * (1.0 - highLightAlpha);
      if (blendedAlpha > 0.0) {
        let highLightRatio = highLightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highLightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  return fragColor;
}
`}var Cw=Sw(),ww=192/256,Tw={getIconOffsets:{type:`accessor`,value:e=>e.offsets},getContentBox:{type:`accessor`,value:[0,0,-1,-1]},fontSize:1,alphaCutoff:.001,smoothing:.1,outlineWidth:0,outlineColor:{type:`color`,value:[0,0,0,255]},contentCutoffPixels:{type:`array`,value:[0,0]},contentAlignHorizontal:`none`,contentAlignVertical:`none`},Ew=class extends DS{getShaders(){let e=super.getShaders();return{...e,modules:[...e.modules,yw,_w],vs:bw,fs:xw,source:Cw}}initializeState(){super.initializeState();let e=this.getAttributeManager(),t=e.attributes.instanceIconDefs;t.settings.update=this.calculateInstanceIconDefs,e.addInstanced({rowIndexes:{type:`uint32`,size:1,bufferGroup:`icon-instance-data`,accessor:(e,{index:t})=>t},instanceClipRect:{size:4,bufferGroup:`icon-instance-data`,accessor:`getContentBox`,defaultValue:[0,0,-1,-1]}})}updateState(e){super.updateState(e);let{props:t,oldProps:n,changeFlags:r}=e,{outlineColor:i}=t;if(r.extensionsChanged){this.state.fillModel?.destroy();let e=this.context.device.type===`webgpu`?this._getModel(`${this.props.id}-fill`):void 0;this.setState({fillModel:e,models:e?[this.state.model,e]:[this.state.model]})}if(r.updateTriggersChanged&&(r.updateTriggersChanged.getIcon||r.updateTriggersChanged.getIconOffsets)&&this.getAttributeManager().invalidate(`instanceIconDefs`),i!==n.outlineColor){let e=[i[0]/255,i[1]/255,i[2]/255,(i[3]??255)/255];this.setState({outlineColor:e})}!t.sdf&&t.outlineWidth&&U.warn(`${this.id}: fontSettings.sdf is required to render outline`)()}draw(e){let{sdf:t,smoothing:n,fontSize:r,outlineWidth:i,contentCutoffPixels:a,contentAlignHorizontal:o,contentAlignVertical:s}=this.props,{outlineColor:c}=this.state,l=i?Math.max(n,ww*(1-i)):-1,u=this.state.model,d={buffer:ww,outlineBuffer:l,gamma:n,enabled:!!t,outlineColor:c},f={contentCutoffPixels:a,contentAlignHorizontal:o,contentAlignVertical:s,fontSize:r,viewport:this.context.viewport};if(u.shaderInputs.setProps({sdf:d,text:f}),super.draw(e),t&&i){let{iconManager:e}=this.state;if(e.getTexture()){let e=this.state.fillModel||u;e.shaderInputs.setProps({sdf:{...d,outlineBuffer:ww},text:f}),this._drawModel(e)}}}calculateInstanceIconDefs(e,{startRow:t,endRow:n}){let{data:r,getIcon:i,getIconOffsets:a}=this.props,o=e.getVertexOffset(t),s=e.value,{iterable:c,objectInfo:l}=uv(r,t,n);for(let t of c){l.index++;let n=i(t,l),r=a(t,l);if(n){let t=0;for(let i of Array.from(n)){let n=super.getInstanceIconDef(i);n[0]=r[t*2],n[1]+=r[t*2+1],n[6]=1,s.set(n,o),o+=e.size,t++}}}}};Ew.defaultProps=Tw,Ew.layerName=`MultiIconLayer`;var Dw=0x56bc75e2d63100000,Ow=new Float64Array(256);for(let e=0;e<256;e++){let t=.5-(e/255)**(1/2.2);Ow[e]=t*Math.abs(t)}Ow[255]=-0x56bc75e2d63100000;var kw=class{constructor({fontSize:e=24,buffer:t=3,radius:n=8,cutoff:r=.25,fontFamily:i=`sans-serif`,fontWeight:a=`normal`,fontStyle:o=`normal`,lang:s=null}={}){this.buffer=t,this.radius=n,this.cutoff=r,this.lang=s;let c=this.size=e+t*4,l=this._createCanvas(c),u=this.ctx=l.getContext(`2d`,{willReadFrequently:!0});u.font=`${o} ${a} ${e}px ${i}`,u.textBaseline=`alphabetic`,u.textAlign=`left`,u.fillStyle=`black`,this.gridOuter=new Float64Array(c*c),this.gridInner=new Float64Array(c*c),this.f=new Float64Array(c),this.z=new Float64Array(c+1),this.v=new Uint16Array(c)}_createCanvas(e){if(typeof OffscreenCanvas<`u`)return new OffscreenCanvas(e,e);let t=document.createElement(`canvas`);return t.width=t.height=e,t}draw(e){let{width:t,actualBoundingBoxAscent:n,actualBoundingBoxDescent:r,actualBoundingBoxLeft:i,actualBoundingBoxRight:a}=this.ctx.measureText(e),o=Math.ceil(n),s=Math.floor(-i),c=Math.max(0,Math.min(this.size-this.buffer,Math.ceil(a)-s)),l=Math.max(0,Math.min(this.size-this.buffer,o+Math.ceil(r))),u=c+2*this.buffer,d=l+2*this.buffer,f=Math.max(u*d,0),p=new Uint8ClampedArray(f),m={data:p,width:u,height:d,glyphWidth:c,glyphHeight:l,glyphTop:o,glyphLeft:s,glyphAdvance:t};if(c===0||l===0)return m;let{ctx:h,buffer:g,gridInner:_,gridOuter:v}=this;this.lang&&(h.lang=this.lang),h.clearRect(g,g,c,l),h.fillText(e,g-s,g+o);let y=h.getImageData(g,g,c,l);v.fill(Dw,0,f),_.fill(0,0,f);let b=3;for(let e=0;e<l;e++){let t=(e+g)*u+g;for(let e=0;e<c;e++,b+=4,t++){let e=y.data[b];if(e===0)continue;let n=Ow[e];v[t]=Math.max(0,n),_[t]=Math.max(0,-n)}}Aw(v,0,0,u,d,u,this.f,this.v,this.z);let x=Math.min(g,1);Aw(_,g-x,g-x,c+2*x,l+2*x,u,this.f,this.v,this.z);let S=255/this.radius,C=255*(1-this.cutoff);for(let e=0;e<f;e++){let t=Math.sqrt(v[e])-Math.sqrt(_[e]);p[e]=Math.round(C-S*t)}return m}};function Aw(e,t,n,r,i,a,o,s,c){for(let l=t;l<t+r;l++)jw(e,n*a+l,a,i,o,s,c);for(let l=n;l<n+i;l++)jw(e,l*a+t,1,r,o,s,c)}function jw(e,t,n,r,i,a,o){a[0]=0,o[0]=-0x56bc75e2d63100000,o[1]=Dw,i[0]=e[t];for(let s=1,c=0,l=0;s<r;s++){i[s]=e[t+s*n];let r=s*s;do{let e=a[c];l=(i[s]-i[e]+r-e*e)/(s-e)/2}while(l<=o[c]&&--c>-1);c++,a[c]=s,o[c]=l,o[c+1]=Dw}for(let s=0,c=0;s<r;s++){for(;o[c+1]<s;)c++;let r=a[c],l=s-r;e[t+s*n]=i[r]+l*l}}var Mw=32,Nw=[];function Pw(e){return 2**Math.ceil(Math.log2(e))}function Fw({characterSet:e,measureText:t,buffer:n,maxCanvasWidth:r,mapping:i={},xOffset:a=0,yOffsetMin:o=0,yOffsetMax:s=0}){let c=a,l=o,u=s;for(let a of e)if(!i[a]){let{advance:e,width:o,ascent:s,descent:d}=t(a),f=s+d;c+o+n*2>r&&(c=0,l=u),i[a]={x:c+n,y:l+n,width:o,height:f,advance:e,anchorX:o/2,anchorY:s},c+=o+n*2,u=Math.max(u,l+f+n*2)}return{mapping:i,xOffset:c,yOffsetMin:l,yOffsetMax:u,canvasHeight:Pw(u)}}function Iw(e,t,n,r){let i=0;for(let a=t;a<n;a++){let t=e[a];i+=r[t]?.advance||0}return i}function Lw(e,t,n,r,i,a){let o=t,s=0;for(let c=t;c<n;c++){let t=Iw(e,c,c+1,i);s+t>r&&(o<c&&a.push(c),o=c,s=0),s+=t}return s}function Rw(e,t,n,r,i,a){let o=t,s=t,c=t,l=0;for(let u=t;u<n;u++)if((e[u]===` `||e[u+1]===` `||u+1===n)&&(c=u+1),c>s){let t=Iw(e,s,c,i);l+t>r&&(o<s&&(a.push(s),o=s,l=0),t>r&&(t=Lw(e,s,c,r,i,a),o=a[a.length-1])),s=c,l+=t}return l}function zw(e,t,n,r,i=0,a){a===void 0&&(a=e.length);let o=[];return t===`break-all`?Lw(e,i,a,n,r,o):Rw(e,i,a,n,r,o),o}function Bw(e,t,n,r,i,a){let o=0,s=0;for(let i=t;i<n;i++){let t=r[e[i]];t&&(s=Math.max(s,t.height))}for(let a=t;a<n;a++){let t=e[a],n=r[t];n?(i[a]=o+n.anchorX,o+=n.advance):(U.warn(`Missing character: ${t} (${t.codePointAt(0)})`)(),i[a]=o,o+=Mw)}a[0]=o,a[1]=s}function Vw(e,t,n,r,i,a){let o=Array.from(e),s=o.length,c=Array(s),l=Array(s),u=Array(s),d=(r===`break-word`||r===`break-all`)&&isFinite(i)&&i>0,f=[0,0],p=[0,0],m=0,h=t+n/2,g=0,_=0;for(let e=0;e<=s;e++){let t=o[e];if((t===`
`||e===s)&&(_=e),_>g){let e=d?zw(o,r,i,a,g,_):Nw;for(let t=0;t<=e.length;t++){let r=t===0?g:e[t-1],i=t<e.length?e[t]:_;Bw(o,r,i,a,c,p);for(let e=r;e<i;e++)l[e]=h,u[e]=p[0];m++,h+=n,f[0]=Math.max(f[0],p[0])}g=_}t===`
`&&(c[g]=0,l[g]=0,u[g]=0,g++)}return f[1]=m*n,{x:c,y:l,rowWidth:u,size:f}}function Hw({value:e,length:t,stride:n,offset:r,startIndices:i,characterSet:a}){let o=e.BYTES_PER_ELEMENT,s=n?n/o:1,c=r?r/o:0,l=i[t]||Math.ceil((e.length-c)/s),u=a&&new Set,d=Array(t),f=e;if(s>1||c>0){let t=e.constructor;f=new t(l);for(let t=0;t<l;t++)f[t]=e[t*s+c]}for(let e=0;e<t;e++){let t=i[e],n=i[e+1]||l,r=f.subarray(t,n);d[e]=String.fromCodePoint.apply(null,r),u&&r.forEach(u.add,u)}if(u)for(let e of u)a.add(String.fromCodePoint(e));return{texts:d,characterCount:l}}var Uw=class{constructor(e=5){this._cache={},this._order=[],this.limit=e}get(e){let t=this._cache[e];return t&&(this._deleteOrder(e),this._appendOrder(e)),t}set(e,t){this._cache[e]?(this.delete(e),this._cache[e]=t,this._appendOrder(e)):(Object.keys(this._cache).length===this.limit&&this.delete(this._order[0]),this._cache[e]=t,this._appendOrder(e))}delete(e){this._cache[e]&&(delete this._cache[e],this._deleteOrder(e))}_deleteOrder(e){let t=this._order.indexOf(e);t>=0&&this._order.splice(t,1)}_appendOrder(e){this._order.push(e)}};function Ww(){let e=[];for(let t=32;t<128;t++)e.push(String.fromCharCode(t));return e}var Gw={fontFamily:`Monaco, monospace`,fontWeight:`normal`,characterSet:Ww(),fontSize:64,buffer:4,sdf:!1,cutoff:.25,radius:12,smoothing:.1},Kw=1024,qw=.9,Jw=.3,Yw=3,Xw=new Uw(Yw);function Zw(e,t){let n;n=typeof t==`string`?new Set(Array.from(t)):new Set(t);let r=Xw.get(e);if(!r)return n;for(let e in r.mapping)n.has(e)&&n.delete(e);return n}function Qw(e,t){for(let n=0;n<e.length;n++)t.data[4*n+3]=e[n]}function $w(e,t,n,r){e.font=`${r} ${n}px ${t}`,e.fillStyle=`#000`,e.textBaseline=`alphabetic`,e.textAlign=`left`}function eT(e,t,n){if(n===void 0){let n=e.measureText(`A`);return n.fontBoundingBoxAscent?{advance:0,width:0,ascent:Math.ceil(n.fontBoundingBoxAscent),descent:Math.ceil(n.fontBoundingBoxDescent)}:{advance:0,width:0,ascent:t*qw,descent:t*Jw}}let r=e.measureText(n);return r.actualBoundingBoxAscent?{advance:r.width,width:Math.ceil(r.actualBoundingBoxRight-r.actualBoundingBoxLeft),ascent:Math.ceil(r.actualBoundingBoxAscent),descent:Math.ceil(r.actualBoundingBoxDescent)}:{advance:r.width,width:r.width,ascent:t*qw,descent:t*Jw}}function tT(e){U.assert(Number.isFinite(e)&&e>=Yw,`Invalid cache limit`),Xw=new Uw(e)}var nT=class{constructor(){this.props={...Gw}}get atlas(){return this._atlas}get mapping(){return this._atlas&&this._atlas.mapping}setProps(e={}){Object.assign(this.props,e),e._getFontRenderer&&(this._getFontRenderer=e._getFontRenderer),this._key=this._getKey();let t=Zw(this._key,this.props.characterSet),n=Xw.get(this._key);if(n&&t.size===0){this._atlas!==n&&(this._atlas=n);return}let r=this._generateFontAtlas(t,n);this._atlas=r,Xw.set(this._key,r)}_generateFontAtlas(e,t){let{fontFamily:n,fontWeight:r,fontSize:i,buffer:a,sdf:o,radius:s,cutoff:c}=this.props,l=t&&t.data;l||(l=document.createElement(`canvas`),l.width=Kw);let u=l.getContext(`2d`,{willReadFrequently:!0});$w(u,n,i,r);let d=e=>eT(u,i,e),f;this._getFontRenderer?f=this._getFontRenderer(this.props):o&&(f={measure:d,draw:rT(this.props)});let{mapping:p,canvasHeight:m,xOffset:h,yOffsetMin:g,yOffsetMax:_}=Fw({measureText:e=>f?f.measure(e):d(e),buffer:a,characterSet:e,maxCanvasWidth:Kw,...t&&{mapping:t.mapping,xOffset:t.xOffset,yOffsetMin:t.yOffsetMin,yOffsetMax:t.yOffsetMax}});if(l.height!==m){let e=l.height>0?u.getImageData(0,0,l.width,l.height):null;l.height=m,e&&u.putImageData(e,0,0)}if($w(u,n,i,r),f)for(let t of e){let e=p[t],n=e.width,{data:r,left:i=0,top:a=0}=f.draw(t),o=e.x-i,s=e.y-a,c=Math.max(0,Math.round(o)),d=Math.max(0,Math.round(s)),m=Math.min(r.width,l.width-c),h=Math.min(r.height,l.height-d);u.putImageData(r,c,d,0,0,m,h),e.x=c,e.y=d,e.width=m,e.height=h,e.anchorX+=m/2-i-n/2,e.anchorY+=a}else for(let t of e){let e=p[t];u.fillText(t,e.x,e.y+e.anchorY)}let v=f?f.measure():d();return{baselineOffset:(v.ascent-v.descent)/2,xOffset:h,yOffsetMin:g,yOffsetMax:_,mapping:p,data:l,width:l.width,height:l.height}}_getKey(){let{fontFamily:e,fontWeight:t,fontSize:n,buffer:r,sdf:i,radius:a,cutoff:o}=this.props;return i?`${e} ${t} ${n} ${r} ${a} ${o}`:`${e} ${t} ${n} ${r}`}};function rT({fontSize:e,buffer:t,radius:n,cutoff:r,fontFamily:i,fontWeight:a}){let o=new kw({fontSize:e,buffer:t,radius:n,cutoff:r,fontFamily:i,fontWeight:`${a}`});return e=>{let{data:n,width:r,height:i}=o.draw(e),a=new ImageData(r,i);return Qw(n,a),{data:a,left:t,top:t}}}var iT=`struct TextBackgroundUniforms {
  billboard: f32,
  sizeScale: f32,
  sizeMinPixels: f32,
  sizeMaxPixels: f32,
  borderRadius: vec4<f32>,
  padding: vec4<f32>,
  sizeUnits: i32,
  stroked: f32,
};

@group(0) @binding(auto) var<uniform> textBackground: TextBackgroundUniforms;
`,aT=`layout(std140) uniform textBackgroundUniforms {
  bool billboard;
  float sizeScale;
  float sizeMinPixels;
  float sizeMaxPixels;
  vec4 borderRadius;
  vec4 padding;
  highp int sizeUnits;
  bool stroked;
} textBackground;
`,oT={name:`textBackground`,source:iT,vs:aT,fs:aT,uniformTypes:{billboard:`f32`,sizeScale:`f32`,sizeMinPixels:`f32`,sizeMaxPixels:`f32`,borderRadius:`vec4<f32>`,padding:`vec4<f32>`,sizeUnits:`i32`,stroked:`f32`}},sT=`#version 300 es
#define SHADER_NAME text-background-layer-vertex-shader
in vec2 positions;
in vec3 instancePositions;
in vec3 instancePositions64Low;
in vec4 instanceRects;
in vec4 instanceClipRect;
in float instanceSizes;
in float instanceAngles;
in vec2 instancePixelOffsets;
in float instanceLineWidths;
in vec4 instanceFillColors;
in vec4 instanceLineColors;
out vec4 vFillColor;
out vec4 vLineColor;
out float vLineWidth;
out vec2 uv;
out vec2 dimensions;
vec2 rotate_by_angle(vec2 vertex, float angle) {
float angle_radian = radians(angle);
float cos_angle = cos(angle_radian);
float sin_angle = sin(angle_radian);
mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);
return rotationMatrix * vertex;
}
void main(void) {
geometry.worldPosition = instancePositions;
geometry.uv = positions;
geometry.pickingColor = picking_getPickingColorFromInstanceID();
uv = positions;
vLineWidth = instanceLineWidths;
float sizePixels = clamp(
project_size_to_pixel(instanceSizes * textBackground.sizeScale, textBackground.sizeUnits),
textBackground.sizeMinPixels, textBackground.sizeMaxPixels
);
float instanceScale = sizePixels / text.fontSize;
dimensions = instanceRects.zw * instanceScale + textBackground.padding.xy + textBackground.padding.zw;
vec2 pixelOffset = (positions * instanceRects.zw + instanceRects.xy) * instanceScale + mix(-textBackground.padding.xy, textBackground.padding.zw, positions);
pixelOffset = rotate_by_angle(pixelOffset, instanceAngles);
pixelOffset += instancePixelOffsets;
pixelOffset.y *= -1.0;
vec2 xy = project_size_to_pixel(instanceClipRect.xy);
vec2 wh = project_size_to_pixel(instanceClipRect.zw);
if (text.flipY) {
xy.y = -xy.y - wh.y;
}
if (instanceClipRect.z >= 0.0) {
dimensions.x = wh.x;
pixelOffset.x = xy.x + uv.x * wh.x + mix(-textBackground.padding.x, textBackground.padding.z, uv.x);
}
if (instanceClipRect.w >= 0.0) {
dimensions.y = wh.y;
pixelOffset.y = xy.y + uv.y * wh.y + mix(-textBackground.padding.y, textBackground.padding.w, uv.y);
}
if (textBackground.billboard)  {
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.0), geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
vec3 offset = vec3(pixelOffset, 0.0);
DECKGL_FILTER_SIZE(offset, geometry);
gl_Position.xy += project_pixel_size_to_clipspace(offset.xy);
} else {
vec3 offset_common = vec3(project_pixel_size(pixelOffset), 0.0);
if (text.flipY) {
offset_common.y *= -1.;
}
DECKGL_FILTER_SIZE(offset_common, geometry);
gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, offset_common, geometry.position);
DECKGL_FILTER_GL_POSITION(gl_Position, geometry);
}
vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vFillColor, geometry);
vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * layer.opacity);
DECKGL_FILTER_COLOR(vLineColor, geometry);
}
`,cT=`#version 300 es
#define SHADER_NAME text-background-layer-fragment-shader
precision highp float;
in vec4 vFillColor;
in vec4 vLineColor;
in float vLineWidth;
in vec2 uv;
in vec2 dimensions;
out vec4 fragColor;
float round_rect(vec2 p, vec2 size, vec4 radii) {
vec2 pixelPositionCB = (p - 0.5) * size;
vec2 sizeCB = size * 0.5;
float maxBorderRadius = min(size.x, size.y) * 0.5;
vec4 borderRadius = vec4(min(radii, maxBorderRadius));
borderRadius.xy =
(pixelPositionCB.x > 0.0) ? borderRadius.xy : borderRadius.zw;
borderRadius.x = (pixelPositionCB.y > 0.0) ? borderRadius.x : borderRadius.y;
vec2 q = abs(pixelPositionCB) - sizeCB + borderRadius.x;
return -(min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - borderRadius.x);
}
float rect(vec2 p, vec2 size) {
vec2 pixelPosition = p * size;
return min(min(pixelPosition.x, size.x - pixelPosition.x),
min(pixelPosition.y, size.y - pixelPosition.y));
}
vec4 get_stroked_fragColor(float dist) {
float isBorder = smoothedge(dist, vLineWidth);
return mix(vFillColor, vLineColor, isBorder);
}
void main(void) {
geometry.uv = uv;
if (textBackground.borderRadius != vec4(0.0)) {
float distToEdge = round_rect(uv, dimensions, textBackground.borderRadius);
float shapeAlpha = smoothedge(-distToEdge, 0.0);
if (shapeAlpha == 0.0) {
discard;
}
if (textBackground.stroked) {
fragColor = get_stroked_fragColor(distToEdge);
} else {
fragColor = vFillColor;
}
fragColor.a *= shapeAlpha;
} else {
if (textBackground.stroked) {
float distToEdge = rect(uv, dimensions);
fragColor = get_stroked_fragColor(distToEdge);
} else {
fragColor = vFillColor;
}
}
DECKGL_FILTER_COLOR(fragColor, geometry);
}
`,lT=`struct TextUniforms {
  cutoffPixels: vec2<f32>,
  align: vec2<i32>,
  fontSize: f32,
  flipY: f32,
};

@group(0) @binding(auto) var<uniform> text: TextUniforms;

fn rotate_by_angle(vertex: vec2<f32>, angle: f32) -> vec2<f32> {
  let angleRadian = radians(angle);
  let cosine = cos(angleRadian);
  let sine = sin(angleRadian);
  let rotationMatrix = mat2x2<f32>(
    vec2<f32>(cosine, -sine),
    vec2<f32>(sine, cosine)
  );
  return rotationMatrix * vertex;
}

struct Attributes {
  @builtin(instance_index) instanceIndex: u32,
  @location(0) positions: vec2<f32>,
  @location(1) instancePositions: vec3<f32>,
  @location(2) instancePositions64Low: vec3<f32>,
  @location(3) instanceSizes: f32,
  @location(4) instanceAngles: f32,
  @location(5) instanceRects: vec4<f32>,
  @location(6) instanceClipRect: vec4<f32>,
  @location(7) instancePixelOffsets: vec2<f32>,
  @location(8) instanceFillColors: vec4<f32>,
  @location(9) instanceLineColors: vec4<f32>,
  @location(10) instanceLineWidths: f32,
};

struct Varyings {
  @builtin(position) position: vec4<f32>,
  @location(0) vFillColor: vec4<f32>,
  @location(1) vLineColor: vec4<f32>,
  @location(2) vLineWidth: f32,
  @location(3) uv: vec2<f32>,
  @location(4) dimensions: vec2<f32>,
  @location(5) pickingColor: vec3<f32>,
};

@vertex
fn vertexMain(attributes: Attributes) -> Varyings {
  geometry.worldPosition = attributes.instancePositions;
  geometry.uv = attributes.positions;
  geometry.pickingColor = picking_getPickingColorFromIndex(attributes.instanceIndex);

  var varyings: Varyings;
  varyings.uv = attributes.positions;
  varyings.vLineWidth = attributes.instanceLineWidths;

  let sizePixels = clamp(
    project_unit_size_to_pixel(
      attributes.instanceSizes * textBackground.sizeScale,
      textBackground.sizeUnits
    ),
    textBackground.sizeMinPixels,
    textBackground.sizeMaxPixels
  );
  let instanceScale = sizePixels / text.fontSize;

  varyings.dimensions = attributes.instanceRects.zw * instanceScale +
    textBackground.padding.xy + textBackground.padding.zw;

  var pixelOffset =
    (attributes.positions * attributes.instanceRects.zw + attributes.instanceRects.xy) *
      instanceScale +
    mix(-textBackground.padding.xy, textBackground.padding.zw, attributes.positions);
  pixelOffset = rotate_by_angle(pixelOffset, attributes.instanceAngles);
  pixelOffset = pixelOffset + attributes.instancePixelOffsets;
  pixelOffset.y = pixelOffset.y * -1.0;

  var xy = project_size_vec2(attributes.instanceClipRect.xy) * project.scale;
  let wh = project_size_vec2(attributes.instanceClipRect.zw) * project.scale;
  if (text.flipY > 0.5) {
    xy.y = -xy.y - wh.y;
  }
  if (attributes.instanceClipRect.z >= 0.0) {
    varyings.dimensions.x = wh.x;
    pixelOffset.x = xy.x + varyings.uv.x * wh.x + mix(
      -textBackground.padding.x,
      textBackground.padding.z,
      varyings.uv.x
    );
  }
  if (attributes.instanceClipRect.w >= 0.0) {
    varyings.dimensions.y = wh.y;
    pixelOffset.y = xy.y + varyings.uv.y * wh.y + mix(
      -textBackground.padding.y,
      textBackground.padding.w,
      varyings.uv.y
    );
  }

  if (textBackground.billboard > 0.5) {
    var position = project_position_to_clipspace(
      attributes.instancePositions,
      attributes.instancePositions64Low,
      vec3<f32>(0.0)
    );
    let clipOffset = project_pixel_size_to_clipspace(pixelOffset);
    position = vec4<f32>(
      position.x + clipOffset.x,
      position.y + clipOffset.y,
      position.z,
      position.w
    );
    varyings.position = position;
  } else {
    var offsetCommon = vec3<f32>(project_pixel_size_vec2(pixelOffset), 0.0);
    if (text.flipY > 0.5) {
      offsetCommon.y = offsetCommon.y * -1.0;
    }
    varyings.position = project_position_to_clipspace(
      attributes.instancePositions,
      attributes.instancePositions64Low,
      offsetCommon
    );
  }

  varyings.vFillColor = vec4<f32>(
    attributes.instanceFillColors.rgb,
    attributes.instanceFillColors.a * layer.opacity
  );
  varyings.vLineColor = vec4<f32>(
    attributes.instanceLineColors.rgb,
    attributes.instanceLineColors.a * layer.opacity
  );
  varyings.pickingColor = geometry.pickingColor;
  return varyings;
}

fn round_rect(point: vec2<f32>, size: vec2<f32>, radii: vec4<f32>) -> f32 {
  let pixelPosition = (point - 0.5) * size;
  let halfSize = size * 0.5;
  let maxBorderRadius = min(size.x, size.y) * 0.5;
  var borderRadius = min(radii, vec4<f32>(maxBorderRadius));

  borderRadius = select(borderRadius.zwxy, borderRadius, pixelPosition.x > 0.0);
  let radius = select(borderRadius.y, borderRadius.x, pixelPosition.y > 0.0);
  let q = abs(pixelPosition) - halfSize + radius;
  return -(min(max(q.x, q.y), 0.0) + length(max(q, vec2<f32>(0.0))) - radius);
}

fn rect(point: vec2<f32>, size: vec2<f32>) -> f32 {
  let pixelPosition = point * size;
  return min(
    min(pixelPosition.x, size.x - pixelPosition.x),
    min(pixelPosition.y, size.y - pixelPosition.y)
  );
}

fn get_stroked_frag_color(
  distanceToEdge: f32,
  lineWidth: f32,
  fillColor: vec4<f32>,
  lineColor: vec4<f32>
) -> vec4<f32> {
  let isBorder = smoothedge(distanceToEdge, lineWidth);
  return mix(fillColor, lineColor, isBorder);
}

@fragment
fn fragmentMain(varyings: Varyings) -> @location(0) vec4<f32> {
  geometry.uv = varyings.uv;
  var fragColor: vec4<f32>;

  if (any(textBackground.borderRadius != vec4<f32>(0.0))) {
    let distanceToEdge = round_rect(
      varyings.uv,
      varyings.dimensions,
      textBackground.borderRadius
    );
    let shapeAlpha = smoothedge(-distanceToEdge, 0.0);
    if (shapeAlpha == 0.0) {
      discard;
    }
    if (textBackground.stroked > 0.5) {
      fragColor = get_stroked_frag_color(
        distanceToEdge,
        varyings.vLineWidth,
        varyings.vFillColor,
        varyings.vLineColor
      );
    } else {
      fragColor = varyings.vFillColor;
    }
    fragColor.a = fragColor.a * shapeAlpha;
  } else if (textBackground.stroked > 0.5) {
    let distanceToEdge = rect(varyings.uv, varyings.dimensions);
    fragColor = get_stroked_frag_color(
      distanceToEdge,
      varyings.vLineWidth,
      varyings.vFillColor,
      varyings.vLineColor
    );
  } else {
    fragColor = varyings.vFillColor;
  }

  if (picking.isActive > 0.5) {
    if (!picking_isColorValid(varyings.pickingColor)) {
      discard;
    }
    return vec4<f32>(varyings.pickingColor, 1.0);
  }

  if (picking.isHighlightActive > 0.5) {
    let highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
    if (picking_isColorZero(abs(varyings.pickingColor - highlightedObjectColor))) {
      let highlightAlpha = picking.highlightColor.a;
      let blendedAlpha = highlightAlpha + fragColor.a * (1.0 - highlightAlpha);
      if (blendedAlpha > 0.0) {
        let highlightRatio = highlightAlpha / blendedAlpha;
        fragColor = vec4<f32>(
          mix(fragColor.rgb, picking.highlightColor.rgb, highlightRatio),
          blendedAlpha
        );
      } else {
        fragColor = vec4<f32>(fragColor.rgb, 0.0);
      }
    }
  }

  return deckgl_premultiplied_alpha(fragColor);
}
`,uT={billboard:!0,sizeScale:1,sizeUnits:`pixels`,sizeMinPixels:0,sizeMaxPixels:2**53-1,fontSize:1,borderRadius:{type:`object`,value:0},padding:{type:`array`,value:[0,0,0,0]},getPosition:{type:`accessor`,value:e=>e.position},getSize:{type:`accessor`,value:1},getAngle:{type:`accessor`,value:0},getPixelOffset:{type:`accessor`,value:[0,0]},getBoundingRect:{type:`accessor`,value:[0,0,0,0]},getClipRect:{type:`accessor`,value:[0,0,-1,-1]},getFillColor:{type:`accessor`,value:[0,0,0,255]},getLineColor:{type:`accessor`,value:[0,0,0,255]},getLineWidth:{type:`accessor`,value:1}},dT=class extends Jx{getShaders(){return super.getShaders({vs:sT,fs:cT,source:lT,modules:[Ll,Ss,Uu,oT,yw]})}initializeState(){this.getAttributeManager().addInstanced({instancePositions:{size:3,type:`float64`,fp64:this.use64bitPositions(),transition:!0,accessor:`getPosition`},instanceSizes:{size:1,transition:!0,bufferGroup:`text-background-instance-data`,accessor:`getSize`,defaultValue:1},instanceAngles:{size:1,transition:!0,bufferGroup:`text-background-instance-data`,accessor:`getAngle`},instanceRects:{size:4,bufferGroup:`text-background-instance-data`,accessor:`getBoundingRect`},instanceClipRect:{size:4,bufferGroup:`text-background-instance-data`,accessor:`getClipRect`,defaultValue:[0,0,-1,-1]},instancePixelOffsets:{size:2,transition:!0,bufferGroup:`text-background-instance-data`,accessor:`getPixelOffset`},instanceFillColors:{size:4,transition:!0,type:`unorm8`,accessor:`getFillColor`,defaultValue:[0,0,0,255]},instanceLineColors:{size:4,transition:!0,type:`unorm8`,accessor:`getLineColor`,defaultValue:[0,0,0,255]},instanceLineWidths:{size:1,transition:!0,bufferGroup:`text-background-instance-data`,accessor:`getLineWidth`,defaultValue:1}})}updateState(e){super.updateState(e);let{changeFlags:t}=e;t.extensionsChanged&&(this.state.model?.destroy(),this.state.model=this._getModel(),this.getAttributeManager().invalidateAll())}draw({uniforms:e}){let{billboard:t,sizeScale:n,sizeUnits:r,sizeMinPixels:i,sizeMaxPixels:a,getLineWidth:o,fontSize:s}=this.props,{padding:c,borderRadius:l}=this.props;c.length<4&&(c=[c[0],c[1],c[0],c[1]]),Array.isArray(l)||(l=[l,l,l,l]);let u=this.state.model,d={billboard:t,stroked:!!o,borderRadius:l,padding:c,sizeUnits:hl[r],sizeScale:n,sizeMinPixels:i,sizeMaxPixels:a},f={fontSize:s,viewport:this.context.viewport};u.shaderInputs.setProps({textBackground:d,text:f}),u.draw(this.context.renderPass)}_getModel(){let e=[0,0,1,0,0,1,1,1];return new Tf(this.context.device,{...this.getShaders(),id:this.props.id,bufferLayout:this.getAttributeManager().getBufferLayouts(),geometry:new Ld({topology:`triangle-strip`,vertexCount:4,attributes:{positions:{size:2,value:new Float32Array(e)}}}),isInstanced:!0})}};dT.defaultProps=uT,dT.layerName=`TextBackgroundLayer`;var fT={start:1,middle:0,end:-1},pT={top:1,center:0,bottom:-1},mT=[0,0,0,255],hT={billboard:!0,sizeScale:1,sizeUnits:`pixels`,sizeMinPixels:0,sizeMaxPixels:2**53-1,background:!1,getBackgroundColor:{type:`accessor`,value:[255,255,255,255]},getBorderColor:{type:`accessor`,value:mT},getBorderWidth:{type:`accessor`,value:0},backgroundBorderRadius:{type:`object`,value:0},backgroundPadding:{type:`array`,value:[0,0,0,0]},characterSet:{type:`object`,value:Gw.characterSet},fontFamily:Gw.fontFamily,fontWeight:Gw.fontWeight,lineHeight:1,outlineWidth:{type:`number`,value:0,min:0},outlineColor:{type:`color`,value:mT},fontSettings:{type:`object`,value:{},compare:1},wordBreak:`break-word`,maxWidth:{type:`number`,value:-1},contentCutoffPixels:{type:`array`,value:[0,0]},contentAlignHorizontal:`none`,contentAlignVertical:`none`,getText:{type:`accessor`,value:e=>e.text},getPosition:{type:`accessor`,value:e=>e.position},getColor:{type:`accessor`,value:mT},getSize:{type:`accessor`,value:32},getAngle:{type:`accessor`,value:0},getTextAnchor:{type:`accessor`,value:`middle`},getAlignmentBaseline:{type:`accessor`,value:`center`},getPixelOffset:{type:`accessor`,value:[0,0]},getContentBox:{type:`accessor`,value:[0,0,-1,-1]},backgroundColor:{deprecatedFor:[`background`,`getBackgroundColor`]}},gT=class extends eS{constructor(){super(...arguments),this.getBoundingRect=(e,t)=>{let{size:[n,r]}=this.transformParagraph(e,t),{getTextAnchor:i,getAlignmentBaseline:a}=this.props,o=fT[typeof i==`function`?i(e,t):i],s=pT[typeof a==`function`?a(e,t):a];return[(o-1)*n/2,(s-1)*r/2,n,r]},this.getIconOffsets=(e,t)=>{let{getTextAnchor:n,getAlignmentBaseline:r}=this.props,{x:i,y:a,rowWidth:o,size:[,s]}=this.transformParagraph(e,t),c=fT[typeof n==`function`?n(e,t):n],l=pT[typeof r==`function`?r(e,t):r],u=i.length,d=Array(u*2),f=0;for(let e=0;e<u;e++)d[f++]=(c-1)*o[e]/2+i[e],d[f++]=(l-1)*s/2+a[e];return d}}initializeState(){this.state={styleVersion:0,fontAtlasManager:new nT},this.props.maxWidth>0&&U.once(1,`v8.9 breaking change: TextLayer maxWidth is now relative to text size`)()}updateState(e){let{props:t,oldProps:n,changeFlags:r}=e;(r.dataChanged||r.updateTriggersChanged&&(r.updateTriggersChanged.all||r.updateTriggersChanged.getText))&&this._updateText(),(this._updateFontAtlas()||t.lineHeight!==n.lineHeight||t.wordBreak!==n.wordBreak||t.maxWidth!==n.maxWidth)&&this.setState({styleVersion:this.state.styleVersion+1})}getPickingInfo({info:e}){return e.object=e.index>=0?this.props.data[e.index]:null,e}_updateFontAtlas(){let{fontSettings:e,fontFamily:t,fontWeight:n,_getFontRenderer:r}=this.props,{fontAtlasManager:i,characterSet:a}=this.state,o={...e,characterSet:a,fontFamily:t,fontWeight:n,_getFontRenderer:r};if(!i.mapping)return i.setProps(o),!0;for(let e in o)if(o[e]!==i.props[e])return i.setProps(o),!0;return!1}_updateText(){let{data:e,characterSet:t}=this.props,n=e.attributes?.getText,{getText:r}=this.props,i=e.startIndices,a,o=t===`auto`&&new Set;if(n&&i){let{texts:t,characterCount:s}=Hw({...ArrayBuffer.isView(n)?{value:n}:n,length:e.length,startIndices:i,characterSet:o});a=s,r=(e,{index:n})=>t[n]}else{let{iterable:t,objectInfo:n}=uv(e);i=[0],a=0;for(let e of t){n.index++;let t=Array.from(r(e,n)||``);o&&t.forEach(o.add,o),a+=t.length,i.push(a)}}this.setState({getText:r,startIndices:i,numInstances:a,characterSet:o||t})}transformParagraph(e,t){let{fontAtlasManager:n}=this.state,r=n.mapping,{baselineOffset:i}=n.atlas,{fontSize:a}=n.props,o=this.state.getText,{wordBreak:s,lineHeight:c,maxWidth:l}=this.props;return Vw(o(e,t)||``,i,c*a,s,l*a,r)}renderLayers(){let{startIndices:e,numInstances:t,getText:n,fontAtlasManager:{atlas:r,mapping:i},styleVersion:a}=this.state,{data:o,_dataDiff:s,getPosition:c,getColor:l,getSize:u,getAngle:d,getPixelOffset:f,getBackgroundColor:p,getBorderColor:m,getBorderWidth:h,getContentBox:g,backgroundBorderRadius:_,backgroundPadding:v,background:y,billboard:b,fontSettings:x,outlineWidth:S,outlineColor:C,sizeScale:w,sizeUnits:T,sizeMinPixels:E,sizeMaxPixels:D,contentCutoffPixels:O,contentAlignHorizontal:k,contentAlignVertical:A,transitions:j,updateTriggers:M}=this.props,N=this.getSubLayerClass(`characters`,Ew),P=this.getSubLayerClass(`background`,dT),{fontSize:F}=this.state.fontAtlasManager.props;return[y&&new P({getFillColor:p,getLineColor:m,getLineWidth:h,borderRadius:_,padding:v,getPosition:c,getSize:u,getAngle:d,getPixelOffset:f,getClipRect:g,billboard:b,sizeScale:w,sizeUnits:T,sizeMinPixels:E,sizeMaxPixels:D,fontSize:F,transitions:j&&{getPosition:j.getPosition,getAngle:j.getAngle,getSize:j.getSize,getFillColor:j.getBackgroundColor,getLineColor:j.getBorderColor,getLineWidth:j.getBorderWidth,getPixelOffset:j.getPixelOffset}},this.getSubLayerProps({id:`background`,updateTriggers:{getPosition:M.getPosition,getAngle:M.getAngle,getSize:M.getSize,getFillColor:M.getBackgroundColor,getLineColor:M.getBorderColor,getLineWidth:M.getBorderWidth,getPixelOffset:M.getPixelOffset,getBoundingRect:{getText:M.getText,getTextAnchor:M.getTextAnchor,getAlignmentBaseline:M.getAlignmentBaseline,styleVersion:a}}}),{data:o.attributes&&o.attributes.background?{length:o.length,attributes:o.attributes.background}:o,_dataDiff:s,autoHighlight:!1,getBoundingRect:this.getBoundingRect}),new N({sdf:x.sdf,smoothing:Number.isFinite(x.smoothing)?x.smoothing:Gw.smoothing,outlineWidth:S/(x.radius||Gw.radius),outlineColor:C,iconAtlas:r,iconMapping:i,getPosition:c,getColor:l,getSize:u,getAngle:d,getPixelOffset:f,getContentBox:g,billboard:b,sizeScale:w,sizeUnits:T,sizeMinPixels:E,sizeMaxPixels:D,fontSize:F,contentCutoffPixels:O,contentAlignHorizontal:k,contentAlignVertical:A,transitions:j&&{getPosition:j.getPosition,getAngle:j.getAngle,getColor:j.getColor,getSize:j.getSize,getPixelOffset:j.getPixelOffset,getContentBox:j.getContentBox}},this.getSubLayerProps({id:`characters`,updateTriggers:{all:M.getText,getPosition:M.getPosition,getAngle:M.getAngle,getColor:M.getColor,getSize:M.getSize,getPixelOffset:M.getPixelOffset,getContentBox:M.getContentBox,getIconOffsets:{getTextAnchor:M.getTextAnchor,getAlignmentBaseline:M.getAlignmentBaseline,styleVersion:a}}}),{data:o,_dataDiff:s,startIndices:e,numInstances:t,getIconOffsets:this.getIconOffsets,getIcon:n})]}static set fontAtlasCacheLimit(e){tT(e)}};gT.defaultProps=hT,gT.layerName=`TextLayer`;var _T={circle:{type:zS,props:{filled:`filled`,stroked:`stroked`,lineWidthMaxPixels:`lineWidthMaxPixels`,lineWidthMinPixels:`lineWidthMinPixels`,lineWidthScale:`lineWidthScale`,lineWidthUnits:`lineWidthUnits`,pointRadiusMaxPixels:`radiusMaxPixels`,pointRadiusMinPixels:`radiusMinPixels`,pointRadiusScale:`radiusScale`,pointRadiusUnits:`radiusUnits`,pointAntialiasing:`antialiasing`,pointBillboard:`billboard`,getFillColor:`getFillColor`,getLineColor:`getLineColor`,getLineWidth:`getLineWidth`,getPointRadius:`getRadius`}},icon:{type:DS,props:{iconAtlas:`iconAtlas`,iconMapping:`iconMapping`,iconSizeMaxPixels:`sizeMaxPixels`,iconSizeMinPixels:`sizeMinPixels`,iconSizeScale:`sizeScale`,iconSizeUnits:`sizeUnits`,iconAlphaCutoff:`alphaCutoff`,iconBillboard:`billboard`,getIcon:`getIcon`,getIconAngle:`getAngle`,getIconColor:`getColor`,getIconPixelOffset:`getPixelOffset`,getIconSize:`getSize`}},text:{type:gT,props:{textSizeMaxPixels:`sizeMaxPixels`,textSizeMinPixels:`sizeMinPixels`,textSizeScale:`sizeScale`,textSizeUnits:`sizeUnits`,textBackground:`background`,textBackgroundPadding:`backgroundPadding`,textFontFamily:`fontFamily`,textFontWeight:`fontWeight`,textLineHeight:`lineHeight`,textMaxWidth:`maxWidth`,textOutlineColor:`outlineColor`,textOutlineWidth:`outlineWidth`,textWordBreak:`wordBreak`,textCharacterSet:`characterSet`,textBillboard:`billboard`,textFontSettings:`fontSettings`,getText:`getText`,getTextAngle:`getAngle`,getTextColor:`getColor`,getTextPixelOffset:`getPixelOffset`,getTextSize:`getSize`,getTextAnchor:`getTextAnchor`,getTextAlignmentBaseline:`getAlignmentBaseline`,getTextBackgroundColor:`getBackgroundColor`,getTextBorderColor:`getBorderColor`,getTextBorderWidth:`getBorderWidth`}}},vT={type:AC,props:{lineWidthUnits:`widthUnits`,lineWidthScale:`widthScale`,lineWidthMinPixels:`widthMinPixels`,lineWidthMaxPixels:`widthMaxPixels`,lineJointRounded:`jointRounded`,lineCapRounded:`capRounded`,lineMiterLimit:`miterLimit`,lineBillboard:`billboard`,lineAntialiasing:`antialiasing`,getLineColor:`getColor`,getLineWidth:`getWidth`}},yT={type:dw,props:{extruded:`extruded`,filled:`filled`,wireframe:`wireframe`,elevationScale:`elevationScale`,material:`material`,_full3d:`_full3d`,getElevation:`getElevation`,getFillColor:`getFillColor`,getLineColor:`getLineColor`}};function bT({type:e,props:t}){let n={};for(let r in t)n[r]=e.defaultProps[t[r]];return n}function xT(e,t){let{transitions:n,updateTriggers:r}=e.props,i={updateTriggers:{},transitions:n&&{getPosition:n.geometry}};for(let a in t){let o=t[a],s=e.props[a];a.startsWith(`get`)&&(s=e.getSubLayerAccessor(s),i.updateTriggers[o]=r[a],n&&(i.transitions[o]=n[a])),i[o]=s}return i}function ST(e){if(Array.isArray(e))return e;switch(U.assert(e.type,`GeoJSON does not have type`),e.type){case`Feature`:return[e];case`FeatureCollection`:return U.assert(Array.isArray(e.features),`GeoJSON does not have features array`),e.features;default:return[{geometry:e}]}}function CT(e,t,n={}){let r={pointFeatures:[],lineFeatures:[],polygonFeatures:[],polygonOutlineFeatures:[]},{startRow:i=0,endRow:a=e.length}=n;for(let n=i;n<a;n++){let i=e[n],{geometry:a}=i;if(a){if(a.type===`GeometryCollection`){U.assert(Array.isArray(a.geometries),`GeoJSON does not have geometries array`);let{geometries:e}=a;for(let a=0;a<e.length;a++){let o=e[a];wT(o,r,t,i,n)}}else wT(a,r,t,i,n)}}return r}function wT(e,t,n,r,i){let{type:a,coordinates:o}=e,{pointFeatures:s,lineFeatures:c,polygonFeatures:l,polygonOutlineFeatures:u}=t;if(!ET(a,o)){U.warn(`${a} coordinates are malformed`)();return}switch(a){case`Point`:s.push(n({geometry:e},r,i));break;case`MultiPoint`:o.forEach(e=>{s.push(n({geometry:{type:`Point`,coordinates:e}},r,i))});break;case`LineString`:c.push(n({geometry:e},r,i));break;case`MultiLineString`:o.forEach(e=>{c.push(n({geometry:{type:`LineString`,coordinates:e}},r,i))});break;case`Polygon`:l.push(n({geometry:e},r,i)),o.forEach(e=>{u.push(n({geometry:{type:`LineString`,coordinates:e}},r,i))});break;case`MultiPolygon`:o.forEach(e=>{l.push(n({geometry:{type:`Polygon`,coordinates:e}},r,i)),e.forEach(e=>{u.push(n({geometry:{type:`LineString`,coordinates:e}},r,i))})})}}var TT={Point:1,MultiPoint:2,LineString:2,MultiLineString:3,Polygon:3,MultiPolygon:4};function ET(e,t){let n=TT[e];for(U.assert(n,`Unknown GeoJSON type ${e}`);t&&--n>0;)t=t[0];return t&&Number.isFinite(t[0])}function DT(){return{points:{},lines:{},polygons:{},polygonsOutline:{}}}function OT(e){return e.geometry.coordinates}function kT(e,t){let n=DT(),{pointFeatures:r,lineFeatures:i,polygonFeatures:a,polygonOutlineFeatures:o}=e;return n.points.data=r,n.points._dataDiff=t.pointFeatures&&(()=>t.pointFeatures),n.points.getPosition=OT,n.lines.data=i,n.lines._dataDiff=t.lineFeatures&&(()=>t.lineFeatures),n.lines.getPath=OT,n.polygons.data=a,n.polygons._dataDiff=t.polygonFeatures&&(()=>t.polygonFeatures),n.polygons.getPolygon=OT,n.polygonsOutline.data=o,n.polygonsOutline._dataDiff=t.polygonOutlineFeatures&&(()=>t.polygonOutlineFeatures),n.polygonsOutline.getPath=OT,n}function AT(e){let t=DT(),{points:n,lines:r,polygons:i}=e,a=hw(e);t.points.data={length:n.positions.value.length/n.positions.size,attributes:{...n.attributes,getPosition:n.positions,rowIndexes:{size:1,type:`uint32`,value:a.points}},properties:n.properties,numericProps:n.numericProps,featureIds:n.featureIds},t.lines.data={length:r.pathIndices.value.length-1,startIndices:r.pathIndices.value,attributes:{...r.attributes,getPath:r.positions,rowIndexes:{size:1,type:`uint32`,value:a.lines}},properties:r.properties,numericProps:r.numericProps,featureIds:r.featureIds},t.lines._pathType=`open`;let o=i.positions.value.length/i.positions.size,s=Array(o).fill(1);for(let e of i.primitivePolygonIndices.value)s[e-1]=0;return t.polygons.data={length:i.polygonIndices.value.length-1,startIndices:i.polygonIndices.value,attributes:{...i.attributes,getPolygon:i.positions,instanceVertexValid:{size:1,value:new Uint16Array(s)},rowIndexes:{size:1,type:`uint32`,value:a.polygons}},properties:i.properties,numericProps:i.numericProps,featureIds:i.featureIds},t.polygons._normalize=!1,i.triangles&&(t.polygons.data.attributes.indices=i.triangles.value),t.polygonsOutline.data={length:i.primitivePolygonIndices.value.length-1,startIndices:i.primitivePolygonIndices.value,attributes:{...i.attributes,getPath:i.positions,rowIndexes:{size:1,type:`uint32`,value:a.polygons}},properties:i.properties,numericProps:i.numericProps,featureIds:i.featureIds},t.polygonsOutline._pathType=`open`,t}var jT=[`points`,`linestrings`,`polygons`],MT={...bT(_T.circle),...bT(_T.icon),...bT(_T.text),...bT(vT),...bT(yT),stroked:!0,filled:!0,extruded:!1,wireframe:!1,_full3d:!1,iconAtlas:{type:`object`,value:null},iconMapping:{type:`object`,value:{}},getIcon:{type:`accessor`,value:e=>e.properties.icon},getText:{type:`accessor`,value:e=>e.properties.text},pointType:`circle`,getRadius:{deprecatedFor:`getPointRadius`}},NT=class extends eS{initializeState(){this.state={layerProps:{},features:{},featuresDiff:{}}}updateState({props:e,changeFlags:t}){if(!t.dataChanged)return;let{data:n}=this.props,r=n&&`points`in n&&`polygons`in n&&`lines`in n;this.setState({binary:r}),r?this._updateStateBinary({props:e,changeFlags:t}):this._updateStateJSON({props:e,changeFlags:t})}_updateStateBinary({props:e,changeFlags:t}){let n=AT(e.data);this.setState({layerProps:n})}_updateStateJSON({props:e,changeFlags:t}){let n=ST(e.data),r=this.getSubLayerRow.bind(this),i={},a={};if(Array.isArray(t.dataChanged)){let e=this.state.features;for(let t in e)i[t]=e[t].slice(),a[t]=[];for(let o of t.dataChanged){let t=CT(n,r,o);for(let n in e)a[n].push(fw({data:i[n],getIndex:e=>e.__source.index,dataRange:o,replace:t[n]}))}}else i=CT(n,r);let o=kT(i,a);this.setState({features:i,featuresDiff:a,layerProps:o})}getPickingInfo(e){let t=super.getPickingInfo(e),{index:n,sourceLayer:r}=t;return t.featureType=jT.find(e=>r.id.startsWith(`${this.id}-${e}-`)),n>=0&&r.id.startsWith(`${this.id}-points-text`)&&this.state.binary&&(t.index=this.props.data.points.globalFeatureIds.value[n]),t}_updateAutoHighlight(e){let t=`${this.id}-points-`,n=e.featureType===`points`;for(let r of this.getSubLayers())r.id.startsWith(t)===n&&r.updateAutoHighlight(e)}_renderPolygonLayer(){let{extruded:e,wireframe:t}=this.props,{layerProps:n}=this.state,r=`polygons-fill`,i=this.shouldRenderSubLayer(r,n.polygons?.data)&&this.getSubLayerClass(r,yT.type);if(i){let a=xT(this,yT.props),o=e&&t;return o||delete a.getLineColor,a.updateTriggers.lineColors=o,new i(a,this.getSubLayerProps({id:r,updateTriggers:a.updateTriggers}),n.polygons)}return null}_renderLineLayers(){let{extruded:e,stroked:t}=this.props,{layerProps:n}=this.state,r=`polygons-stroke`,i=`linestrings`,a=!e&&t&&this.shouldRenderSubLayer(r,n.polygonsOutline?.data)&&this.getSubLayerClass(r,vT.type),o=this.shouldRenderSubLayer(i,n.lines?.data)&&this.getSubLayerClass(i,vT.type);if(a||o){let e=xT(this,vT.props);return[a&&new a(e,this.getSubLayerProps({id:r,updateTriggers:e.updateTriggers}),n.polygonsOutline),o&&new o(e,this.getSubLayerProps({id:i,updateTriggers:e.updateTriggers}),n.lines)]}return null}_renderPointLayers(){let{pointType:e}=this.props,{layerProps:t,binary:n}=this.state,{highlightedObjectIndex:r}=this.props;!n&&Number.isFinite(r)&&(r=t.points.data.findIndex(e=>e.__source.index===r));let i=new Set(e.split(`+`)),a=[];for(let e of i){let i=`points-${e}`,o=_T[e],s=o&&this.shouldRenderSubLayer(i,t.points?.data)&&this.getSubLayerClass(i,o.type);if(s){let c=xT(this,o.props),l=t.points;if(e===`text`&&n){let{rowIndexes:e,...t}=l.data.attributes;l={...l,data:{...l.data,attributes:t}}}a.push(new s(c,this.getSubLayerProps({id:i,updateTriggers:c.updateTriggers,highlightedObjectIndex:r}),l))}}return a}renderLayers(){let{extruded:e}=this.props,t=this._renderPolygonLayer(),n=this._renderLineLayers(),r=this._renderPointLayers();return[!e&&t,n,r,e&&t]}getSubLayerAccessor(e){let{binary:t}=this.state;return!t||typeof e!=`function`?super.getSubLayerAccessor(e):(t,n)=>{let{data:r,index:i}=n;return e(pw(r,i),n)}}};NT.layerName=`GeoJsonLayer`,NT.defaultProps=MT;var PT=78271.517,FT=110540,IT=111320*Math.cos(40.72*Math.PI/180),LT=[[-73.97297,40.76462],[-73.98154,40.76804],[-73.95816,40.8004],[-73.94929,40.79689]],RT={gyor:{light:{stops:[[-.08,`#14663a`],[0,`#d9ad18`],[.05,`#ee8530`],[.1,`#f05a4a`]]},dark:{stops:[[-.08,`#3fae66`],[0,`#e0b423`],[.05,`#f08a33`],[.1,`#c94032`]]},oklch:!0},gr:{light:{fast:`#006300`,mid:`#8f8d86`,slow:`#e66767`},dark:{fast:`#008300`,mid:`#8a8984`,slow:`#e66767`}},br:{light:{fast:`#2a78d6`,mid:`#9a9892`,slow:`#e34948`},dark:{fast:`#3987e5`,mid:`#6b6e74`,slow:`#e66767`}},po:{light:{fast:`#5e3c99`,mid:`#9a9892`,slow:`#e66101`},dark:{fast:`#8e6cc7`,mid:`#6b6e74`,slow:`#e66101`}},gyr:{light:{fast:`#0a6b37`,mid:`#d4a017`,slow:`#f0624d`},dark:{fast:`#2f9e5b`,mid:`#d9a521`,slow:`#ee5d48`},oklch:!0},tgo:{light:{fast:`#00897b`,mid:`#d4a017`,slow:`#e8590c`},dark:{fast:`#14a090`,mid:`#d9a521`,slow:`#ee4630`},oklch:!0}},zT=e=>(e/=255,e<=.04045?e/12.92:((e+.055)/1.055)**2.4),BT=e=>Math.round(255*Math.min(1,Math.max(0,e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055)));function VT([e,t,n]){let r=zT(e),i=zT(t),a=zT(n),o=Math.cbrt(.4122214708*r+.5363325363*i+.0514459929*a),s=Math.cbrt(.2119034982*r+.6806995451*i+.1073969566*a),c=Math.cbrt(.0883024619*r+.2817188376*i+.6299787005*a),l=.2104542553*o+.793617785*s-.0040720468*c,u=1.9779984951*o-2.428592205*s+.4505937099*c,d=.0259040371*o+.7827717662*s-.808675766*c;return[l,Math.hypot(u,d),Math.atan2(d,u)]}function HT([e,t,n]){let r=t*Math.cos(n),i=t*Math.sin(n),a=(e+.3963377774*r+.2158037573*i)**3,o=(e-.1055613458*r-.0638541728*i)**3,s=(e-.0894841775*r-1.291485548*i)**3;return[BT(4.0767416621*a-3.3077115913*o+.2309699292*s),BT(-1.2684380046*a+2.6097574011*o-.3413193965*s),BT(-.0041960863*a-.7034186147*o+1.707614701*s)]}function UT(e,t,n){let r=VT(e),i=VT(t),a=i[2]-r[2];return a>Math.PI&&(a-=2*Math.PI),a<-Math.PI&&(a+=2*Math.PI),HT([r[0]+(i[0]-r[0])*n,r[1]+(i[1]-r[1])*n,r[2]+a*n])}var WT=(e,t,n)=>[0,1,2].map(r=>Math.round(e[r]+(t[r]-e[r])*n));function GT(e,t,n,r,i){let a=2/r,o=a*i,s=1/(1+o+.48*o*o+.235*o*o*o),c=e-t,l=(n+a*c)*i;return[t+(c+l)*s,(n-a*l)*s]}var KT=e=>Math.round(Math.min(1200,Math.max(400,400+Math.abs(e)/3600*300))),qT=.55,JT=.2,YT=e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2,XT=.0015,ZT=(e,t,n)=>{let r=Math.max(0,Math.min(1,(n-e)/(t-e)));return r*r*(3-2*r)},QT=class{constructor(e,{course:t,runners:n,basemap:r,onFrame:i}){this.el=e,this.course=t,this.runners=n,this.basemap=r,this.onFrame=i,this.clock=0,this.mode=`overview`,this.showRunners=!1,this.runnerAlpha=0,this.labelSets=new Set,this.showTracked=!1,this.trackedOnly=null,this.holdAtFinish=null,this.fadeA=new Map,this._fadeTarget=new Set,this._fadeSet=0,this._fadeFrame=0,this.buildings=null,this.chaseD=0,this.chaseTarget=0,this._prepCourse(),n&&this._prepRunners();let a=document.createElement(`div`);a.className=`scene`,e.appendChild(a),this.labelLayer=document.createElement(`div`),this.labelLayer.className=`scene-labels`,this.labelLayer.setAttribute(`aria-hidden`,`true`),e.appendChild(this.labelLayer),this.viewState={longitude:-73.97,latitude:40.71,zoom:10.5,pitch:40,bearing:-20,maxPitch:75},this.deck=new $_({parent:a,views:new $p({repeat:!1,farZMultiplier:4,nearZMultiplier:.05}),viewState:this.viewState,controller:!1,touchAction:`pan-y`,useDevicePixels:Math.min(window.devicePixelRatio||1,2),onAfterRender:()=>{this._placeLabels(),this.onAfterRender?.()},getTooltip:null,layers:[]});let o=a.querySelector(`canvas`);o&&(o.setAttribute(`role`,`img`),o.setAttribute(`aria-label`,`3D map of the New York City Marathon course through the five boroughs, with buildings along the route and runners shown as moving dots.`)),this.readTheme(),this._loop=this._loop.bind(this),this._last=performance.now(),requestAnimationFrame(this._loop),addEventListener(`resize`,()=>{if(this.mode===`chase`)this._setView(this.chaseView(this.chaseD));else if(this.path)this._pathFrom=null,this._buildPath(),this._pathDirty=!0;else if(this.follow){let e=this.followView();e&&this.flyTo(e,{instant:!0})}else this._lastCam&&this.flyTo(this._lastCam,{instant:!0})})}_prepCourse(){let{pts:e,ground_m:t,bridges:n,step_m:r}=this.course,i=e.length;this.np=i,this.step=r,this.lon=new Float64Array(i),this.lat=new Float64Array(i),this.z=new Float32Array(i),this.h=new Float32Array(i);for(let a=0;a<i;a++){this.lon[a]=e[a][0],this.lat[a]=e[a][1],this.z[a]=e[a][2];let i=a*r,o=n.some(e=>i>=e.from_m&&i<=e.to_m);this.h[a]=o?Math.max(0,e[a][2]-Math.max(0,t[a])):0}this.nx=new Float64Array(i),this.ny=new Float64Array(i);for(let e=0;e<i;e++){let t=Math.max(0,e-2),n=Math.min(i-1,e+2),r=(this.lon[n]-this.lon[t])*IT,a=(this.lat[n]-this.lat[t])*FT,o=Math.hypot(r,a)||1;this.nx[e]=-a/o/IT,this.ny[e]=r/o/FT}this._bridgeGeometry();let a=new Float32Array(i);for(let e=0;e<i;e++){let t=this.heading(e*r+200,150,150)-this.heading(e*r-200,150,150);for(;t>180;)t-=360;for(;t<-180;)t+=360;a[e]=ZT(15,75,Math.abs(t))}this.turn=new Float32Array(i);for(let e=0;e<i;e++){let t=0;for(let n=Math.max(0,e-6);n<=Math.min(i-1,e+6);n++)t=Math.max(t,a[n]*(1-Math.abs(n-e)/7));this.turn[e]=t}}at(e,t=0){let n=Math.max(0,Math.min(this.np-1.001,e/this.step)),r=Math.floor(n),i=n-r;return[this.lon[r]+(this.lon[r+1]-this.lon[r])*i+this.nx[r]*t,this.lat[r]+(this.lat[r+1]-this.lat[r])*i+this.ny[r]*t,this.h[r]+(this.h[r+1]-this.h[r])*i]}heading(e,t=300,n=400){let r=this.at(e-t),i=this.at(e+n);return Math.atan2((i[0]-r[0])*IT,(i[1]-r[1])*FT)*180/Math.PI}_bridgeGeometry(){let e=this.step;this.fascia=[];for(let e=0;e<this.np-1;e++)this.h[e]<1&&this.h[e+1]<1||this.fascia.push([[this.lon[e],this.lat[e],Math.max(0,this.h[e]-3.5)],[this.lon[e+1],this.lat[e+1],Math.max(0,this.h[e+1]-3.5)],[this.lon[e+1],this.lat[e+1],this.h[e+1]],[this.lon[e],this.lat[e],this.h[e]]]);this.decks=[];let t=null;for(let e=0;e<this.np;e++)this.h[e]>=1?(t??=[],t.push([this.lon[e],this.lat[e],this.h[e]+.2])):t&&=(this.decks.push(t),null);t&&this.decks.push(t);let n=this.course.bridges.find(e=>e.short===`Verrazzano`);if(this.towers=[],this.cables=[],n){let t=n.peak_at_m,r=e=>this.at(e)[2];for(let n of[t-649,t+649])for(let t of[-1,1]){let r=this.at(n,t*17),i=Math.floor(n/e),a=this.nx[i]*6,o=this.ny[i]*6,s=(this.lon[i+1]-this.lon[i])/(Math.hypot((this.lon[i+1]-this.lon[i])*IT,(this.lat[i+1]-this.lat[i])*FT)||1)*5,c=(this.lat[i+1]-this.lat[i])/(Math.hypot((this.lon[i+1]-this.lon[i])*IT,(this.lat[i+1]-this.lat[i])*FT)||1)*5;this.towers.push({poly:[[r[0]-a-s,r[1]-o-c],[r[0]+a-s,r[1]+o-c],[r[0]+a+s,r[1]+o+c],[r[0]-a+s,r[1]-o+c]],h:211})}for(let e of[-1,1]){let n=[];for(let i=t-649-370;i<=t+649+370;i+=25){let a=i-t,o;o=Math.abs(a)<=649?r(t)+4+(211-r(t)-4)*(a/649)**2:211-(211-r(i)-1)*((Math.abs(a)-649)/370);let s=this.at(i,e*17);n.push([s[0],s[1],o])}this.cables.push(n)}}}_prepRunners(){let e=this.runners;this.pos=new Float32Array(e.n*3),this.col=new Uint8Array(e.n*4),this.edge=new Uint8Array(e.n*4),this.seg=new Uint8Array(e.n),this.lat01=new Float32Array(e.n);for(let t=0;t<e.n;t++){let e=Math.imul(t+1,2654435761)^1540483477;e=Math.imul(e^e>>>15,739982445),e^=e>>>12,this.lat01[t]=(e>>>0)/4294967295*2-1}this.hist=new Uint32Array(107),this.counts={waiting:0,running:0,finished:0}}setBuildings(e,t){let n=e.n,r=new Uint16Array(t,0,n),i=new Uint16Array(t,2*n,n),a=new Uint8Array(t,4*n,n),o=new Int16Array(t,5*n+e.pad,e.nv*2),s=new Float64Array(e.nv*2);for(let t=0;t<e.nv;t++)s[2*t]=e.lon0+o[2*t]*e.unit,s[2*t+1]=e.lat0+o[2*t+1]*e.unit;let c=new Uint32Array(n+1);for(let e=0;e<n;e++)c[e+1]=c[e]+r[e];let l=new Float64Array(n),u=new Float64Array(n),d=new Float32Array(n);for(let e=0;e<n;e++){let t=c[e],n=c[e+1]-1,r=0,i=0;for(let e=t;e<n;e++)r+=s[2*e],i+=s[2*e+1];l[e]=r/(n-t),u[e]=i/(n-t);let a=0;for(let r=t;r<n;r++)a=Math.max(a,Math.hypot((s[2*r]-l[e])*IT,(s[2*r+1]-u[e])*FT));d[e]=a}let f=new Float32Array(n).fill(1);this.buildings={n,heights:i,dist:a,cx:l,cy:u,rad:d,fade:f,data:{length:n,startIndices:c,attributes:{getPolygon:{value:s,size:2}}}};let p=new Map;for(let e=0;e<n;e++){let t=`${Math.floor(l[e]/XT)},${Math.floor(u[e]/XT)}`;p.has(t)||p.set(t,[]),p.get(t).push(e)}this.buildings.grid=p,this._canyonProfile(),this._colorBuildings(),this._dirty=!0}setFaded(e){this._fadeTarget=new Set(e);for(let t of e)this.fadeA.has(t)||(this.fadeA.set(t,1),this._fadeSet++);je()&&this._stepFades(1),this._dirty=!0}_stepFades(e){if(!this.fadeA.size)return!1;let t=!1;for(let[n,r]of this.fadeA){let i=this._fadeTarget.has(n)?.25:1;if(r===i)continue;let a=r<i?Math.min(i,r+e*2.5):Math.max(i,r-e*2.5);t=!0,a>=1&&!this._fadeTarget.has(n)?(this.fadeA.delete(n),this._fadeSet++):this.fadeA.set(n,a)}return t&&this._fadeFrame++,t}_canyonProfile(){let e=this.buildings,t=this.np,n=new Float32Array(t),r=.0012,i=new Map,a=(e,t)=>`${Math.floor(e/r)},${Math.floor(t/r)}`;for(let e=0;e<t;e++){let t=a(this.lon[e],this.lat[e]);i.has(t)||i.set(t,[]),i.get(t).push(e)}for(let t=0;t<e.n;t++){if(e.dist[t]*2>90)continue;let a=Math.floor(e.cx[t]/r),o=Math.floor(e.cy[t]/r),s=-1,c=1/0;for(let n=-1;n<=1;n++)for(let r=-1;r<=1;r++)for(let l of i.get(`${a+n},${o+r}`)??[]){let n=((this.lon[l]-e.cx[t])*IT)**2+((this.lat[l]-e.cy[t])*FT)**2;n<c&&(c=n,s=l)}s>=0&&(n[s]=Math.max(n[s],e.heights[t]/10))}let o=new Float32Array(t);for(let e=0;e<t;e++){let r=0;for(let i=Math.max(0,e-4);i<=Math.min(t-1,e+4);i++)r=Math.max(r,n[i]);o[e]=ZT(25,110,r)}let s=new Float32Array(t);for(let e=0;e<t;e++){let n=0,r=0;for(let i=Math.max(0,e-8);i<=Math.min(t-1,e+8);i++)n+=o[i],r++;s[e]=n/r}this.canyon=s}_colorBuildings(){let e=this.buildings;if(!e)return;let t=this.dark?WT(this.c.building,this.c.ink,.18):this.c.building,n=this.c.land,r=this.mode===`field`?.6:0,i=Array(e.n);for(let a=0;a<e.n;a++){let o=Math.max(r,ZT(110,300,e.dist[a]*2)*.8);i[a]=[...WT(t,n,o),255]}e.colors=i,e.version=(e.version||0)+1}readTheme(){let e=ke();this.dark=e,this.c={water:Oe(`--water`),land:Oe(`--land`),edge:Oe(`--land-edge`),park:Oe(`--park`),building:Oe(`--building`),road:Oe(`--road`),roadEdge:Oe(`--road-edge`),ink:Oe(`--ink`),page:Oe(`--page`)};let t=RT[document.documentElement.dataset.pal]??RT.gyor,n=t[e?`dark`:`light`];this.paceStops=n.stops?n.stops.map(([e,t])=>[e,$T(t)]):null,this.paceEnds=n.stops?{fast:$T(n.stops[0][1]),mid:$T(n.stops.find(e=>e[0]===0)[1]),slow:$T(n.stops.at(-1)[1])}:{fast:$T(n.fast),mid:$T(n.mid),slow:$T(n.slow)},this.paceOklch=!!t.oklch,this.paceLUT=new Uint8Array(183),this.paceEdgeLUT=new Uint8Array(183);for(let e=0;e<=60;e++){let t=this.paceColor(1+(e-30)*.005);this.paceLUT.set(t.slice(0,3),e*3);let[n,r,i]=VT(t);this.paceEdgeLUT.set(HT([Math.max(0,n-.18),r,i]),e*3)}this.el.style.background=`rgb(${this.c.water.slice(0,3).join(`,`)})`,this.deck.setProps({effects:[new pd({ambient:new Zu({color:[255,255,255],intensity:e?.55:.75}),key:new nd({color:[255,250,240],intensity:e?.75:.95,direction:[1,2,-3]}),fill:new nd({color:[235,240,255],intensity:e?.25:.35,direction:[-2,-1,-1]})})]}),this.runners&&this._colorRunners(),this._colorBuildings(),this._dirty=!0}_colorRunners(){let e=this.runners;for(let t=0;t<e.n;t++)this.col[t*4+3]=this.dark?170:190,this.edge[t*4+3]=this.dark?170:210;this._colVersion=(this._colVersion||0)+1}_updateRunners(){let e=this.runners;if(!e)return;let t=this.clock,n=e.K,r=e.cpm,i=this.step,a=this.np,o=PT*Math.cos(40.72*Math.PI/180)/2**this.viewState.zoom,s=Math.max(9,o*2.5),c=this.hist;c.fill(0);let l=0,u=0,d=0,f=this.pos,p=this.lon,m=this.lat,h=this.h,g=this.col,_=this.paceLUT,v=this.edge,y=this.paceEdgeLUT,b=1/0,x=-1/0;for(let o=0;o<e.n;o++){let S=t-e.start[o],C=o*n;if(S<0||S>=e.times[C+n-1]){S<0?l++:d++,f[o*3]=0,f[o*3+1]=0,f[o*3+2]=-1e5;continue}u++;let w=this.seg[o];for(;w>0&&S<e.times[C+w-1];)w--;for(;w<n-1&&S>=e.times[C+w];)w++;this.seg[o]=w;let T=w===0?0:e.times[C+w-1],E=e.times[C+w],D=w===0?0:r[w-1],O=D+(S-T)/Math.max(1,E-T)*(r[w]-D),k=O/i,A=Math.floor(k);A>=a-1&&(A=a-2,k=a-1);let j=k-A;c[Math.min(c.length-1,Math.floor(O/400))]++;let M=(E-T)/Math.max(1,r[w]-D)/(e.times[C+n-1]/42195),N=Math.max(0,Math.min(60,Math.round((M-1)/.005)+30))*3;g[o*4]=_[N],g[o*4+1]=_[N+1],g[o*4+2]=_[N+2],v[o*4]=y[N],v[o*4+1]=y[N+1],v[o*4+2]=y[N+2];let P=this.lat01[o]*s;f[o*3]=p[A]+(p[A+1]-p[A])*j+this.nx[A]*P,f[o*3+1]=m[A]+(m[A+1]-m[A])*j+this.ny[A]*P,f[o*3+2]=h[A]+(h[A+1]-h[A])*j+1.4,O<b&&(b=O),O>x&&(x=O)}this.counts={waiting:l,running:u,finished:d},this.extent=u?[b,x]:null,this._posVersion=(this._posVersion||0)+1,this._colVersion=(this._colVersion||0)+1,this._updateTracked()}_posFor(e,t,n){let r=this.runners,i=t.length,a=r.cpm,o=n-e;if(o<0||o>=t[i-1])return null;let s=0;for(;s<i-1&&o>=t[s];)s++;let c=s===0?0:t[s-1],l=s===0?0:a[s-1],u=l+(o-c)/Math.max(1,t[s]-c)*(a[s]-l),d=this.at(u);return[d[0],d[1],d[2]+2,u,s]}setTracked(e){this.tracked=e,this._dirty=!0}_updateTracked(){if(this.tracked)for(let e of this.tracked){if(this.trackedOnly&&!this.trackedOnly.has(e.key)){e.now=null;continue}if(e.now=this._posFor(e.start,e.times,this.clock),!e.now&&this.holdAtFinish?.has(e.key)&&this.clock>=e.start+e.times[e.times.length-1]){let t=this.at(42195);e.now=[t[0],t[1],t[2]+2,42195,e.times.length-1]}}}runnerPos(e){if(!this.pos||e<0||this.runnerAlpha<.5)return null;let t=this.pos[e*3+2];return t<-1e3?null:[this.pos[e*3],this.pos[e*3+1],t]}clockAt(e,t){let n=this.runners,r=n.K,i=e*r,a=0;for(;a<r-1&&n.cpm[a]<t;)a++;let o=a===0?0:n.cpm[a-1],s=a===0?0:n.times[i+a-1],c=n.times[i+a],l=n.cpm[a];return n.start[e]+s+(Math.min(t,l)-o)/Math.max(1,l-o)*(c-s)}setClock(e,{transition:t=0,instant:n=!1}={}){this.clockTarget=e,n||je()?(this.clock=e,this._clockV=0,this._clockBlend=null):t>0&&Math.abs(e-this.clock)>1&&(this._clockBlend={from:this.clock,t0:null,ms:t},this._clockV=0),this._dirty=!0}blendClock(e){je()||(this._clockBlend={from:this.clock,t0:null,ms:e},this._clockV=0)}_stepClock(e,t){let n=this.clockTarget??this.clock;if(this._clockBlend){let t=this._clockBlend;t.t0??=e-16;let r=Math.min(1,(e-t.t0)/t.ms);return this.clock=t.from+(n-t.from)*YT(r),r>=1&&(this._clockBlend=null),!0}return this.clock===n?!1:this.mode===`chase`||Math.abs(n-this.clock)<.5&&Math.abs(this._clockV??0)<1?(this.clock=n,this._clockV=0,!0):([this.clock,this._clockV]=GT(this.clock,n,this._clockV??0,.15,t),!0)}_loop(e){let t=Math.max(0,Math.min(.1,(e-this._last)/1e3));this._last=e;let n=this._dirty;this._dirty=!1,this._stepChase(t)&&(n=!0),this._stepClock(e,t)&&(n=!0);let r=+!!this.showRunners;if(this.runnerAlpha!==r){let e=je()?1:t*2.5;this.runnerAlpha=r>this.runnerAlpha?Math.min(1,this.runnerAlpha+e):Math.max(0,this.runnerAlpha-e),n=!0}this._stepFades(t)&&(n=!0),this._stepCamera(e)&&(n=!0),this._stepPath(t)&&(n=!0),this._stepFollow(e,t)&&(n=!0),(n||this._viewChanged)&&(this.runnerAlpha>0&&this.runners&&this._updateRunners(),this.render(),this.onFrame?.(this),this._viewChanged=!1),requestAnimationFrame(this._loop)}computeView(e){let t=this.el.clientWidth||innerWidth,n=this.el.clientHeight||innerHeight,r=innerWidth<900,i=r&&e.mobile?{...e,...e.mobile}:e,a=i.fill??.9,o=0,s=this.el.getBoundingClientRect();this.el.querySelectorAll(`.viz-overlay`).forEach(e=>{if(!(e.classList.contains(`hidden`)||getComputedStyle(e).display===`none`))for(let t of e.children){let e=t.getBoundingClientRect();e.height&&e.top-s.top<n*.3&&(o=Math.max(o,e.bottom-s.top))}});let c=Math.max(this.fullRegion?100:140,Math.min(n*.45,o+20)),l=this.bottomInset??0,u=[],d=this.captionBox?.();i.full?u.push({x0:24,x1:t-24,y0:24,y1:n-24}):r?u.push({x0:12,x1:t-12,y0:Math.max(112,o+12),y1:n*.56}):this.fullRegion?u.push({x0:36,x1:t-36,y0:c,y1:n-56}):d?(u.push({x0:d[2]+32,x1:t-36,y0:c,y1:n-Math.max(40,l+20)}),d[1]-24-c>n*.35&&u.push({x0:36,x1:t-36,y0:c,y1:d[1]-24})):u.push({x0:Math.max(t*.4,470),x1:t-36,y0:c,y1:n-56});let f=[];if(i.fit){let e=Math.max(0,Math.round(i.fit[0]/this.step)),t=Math.min(this.np-1,Math.round(i.fit[1]/this.step)),n=Math.max(1,Math.floor((t-e)/80));for(let r=e;r<=t;r+=n)f.push([this.lon[r],this.lat[r],this.h[r]],[this.lon[r],this.lat[r],0])}for(let e of i.pts||[])f.push([e[0],e[1],0]);let p=0,m=0,h=1/0,g=-1/0,_=1/0,v=-1/0;for(let e of f)p+=e[0],m+=e[1],h=Math.min(h,e[0]),g=Math.max(g,e[0]),_=Math.min(_,e[1]),v=Math.max(v,e[1]);p/=f.length,m/=f.length;let y=Math.max((g-h)*IT,(v-_)*FT,300),b=(e,t)=>{try{let n=e.unproject(t);return Number.isFinite(n[0])&&Number.isFinite(n[1])?n:null}catch{return null}},x={pitch:i.pitch,bearing:i.bearing},{lng:S,lat:C,zoom:w}=u.map(e=>{let r=(e.x1-e.x0)*a,i=(e.y1-e.y0)*a,o=(e.x0+e.x1)/2,s=(e.y0+e.y1)/2,c=p,l=m,u=Math.log2(PT*Math.cos(l*Math.PI/180)*Math.min(r,i)/y);for(let e=0;e<12;e++){let a=new jd({width:t,height:n,longitude:c,latitude:l,zoom:u,...x}),d=1/0,p=-1/0,m=1/0,h=-1/0;for(let e of f){let[t,n,r]=a.project(e);r<1&&(t<d&&(d=t),t>p&&(p=t),n<m&&(m=n),n>h&&(h=n))}let g=Math.min(r/Math.max(1,p-d),i/Math.max(1,h-m)),_=(d+p)/2,v=(m+h)/2,y=1,S=null;for(;!S&&y>.03;)S=b(a,[t/2+(_-o)*y,n/2+(v-s)*y]),y*=.5;S&&(c=S[0],l=S[1]),Number.isFinite(g)&&g>0&&(u=Math.min(16.5,u+Math.log2(g)*(e<8?.85:1)))}return{lng:c,lat:l,zoom:u}}).reduce((e,t)=>t.zoom>e.zoom?t:e);return{longitude:S,latitude:C,zoom:w,pitch:i.pitch,bearing:i.bearing,maxPitch:75}}chaseView(e){let t=this.el.clientWidth||innerWidth,n=this.el.clientHeight||innerHeight,r=innerWidth<900,i=this.at(e),a=this.chaseBearing??this.heading(e),o=Math.max(0,Math.min(this.np-1,Math.round(e/this.step))),s=this.canyon?this.canyon[o]:0,c=this.turn[o],l=(r?15.35:15.85)+Math.log2(Math.min(t,1440)/(r?400:1280))*.5+(this.chaseZoomAdd??0)-.4*s-.15*c,u=(r?60:62)-Math.max(24*s,14*c)-6*s*c,d={longitude:i[0],latitude:i[1],zoom:l,pitch:u,bearing:a,position:[0,0,i[2]]},f=r?[t*.5,n*.42]:[t*.5,n*.62],p=new jd({width:t,height:n,...d}),[m,h]=p.project([i[0],i[1],0]);try{let e=p.unproject([t/2+(m-f[0]),n/2+(h-f[1])]);Number.isFinite(e[0])&&(d.longitude=e[0],d.latitude=e[1])}catch{}return{...d,maxPitch:75}}sightBlockers(e,t=[0,100],n=0){let r=this.buildings;if(!r)return[];let i=this.el.clientWidth||innerWidth,a=this.el.clientHeight||innerHeight,o=this.chaseBearing;this.chaseBearing=this.heading(e-n);let s=this.chaseView(e);this.chaseBearing=o;let c=new jd({width:i,height:a,...s}),l;try{l=c.unprojectPosition(c.cameraPosition)}catch{return[]}let u=new Set;for(let n of t){let t=this.at(e+n),i=(l[0]-t[0])*IT,a=(l[1]-t[1])*FT,o=l[2]+(s.position?.[2]??0),c=i*i+a*a,d=Math.sqrt(c),f=8e-4,p=Math.floor((Math.min(l[0],t[0])-f)/XT),m=Math.floor((Math.max(l[0],t[0])+f)/XT),h=Math.floor((Math.min(l[1],t[1])-f)/XT),g=Math.floor((Math.max(l[1],t[1])+f)/XT);for(let e=p;e<=m;e++)for(let n=h;n<=g;n++)for(let s of r.grid.get(`${e},${n}`)??[]){let e=(r.cx[s]-t[0])*IT,n=(r.cy[s]-t[1])*FT,l=(e*i+n*a)/c;l<.02||l>.98||Math.abs(e*a-n*i)/d>r.rad[s]*.8||r.heights[s]/10>t[2]+(o-t[2])*l+1&&u.add(s)}}return[...u]}setChase(e,{jump:t=!1}={}){if(this.chaseTarget=e,this.mode!==`chase`){this.mode=`chase`,this.follow=null,this.chaseD=e,this._chaseV=0,this.chaseBearing=this.heading(e);let n=this.clock;this._pacerClock(),!t&&Math.abs(this.clockTarget-n)>1&&(this.clock=n,this._clockBlend={from:n,t0:null,ms:KT(this.clockTarget-n)}),this._colorBuildings(),this.flyTo(this.chaseView(e),{ms:t?0:2e3,instant:t});return}(t||je())&&(this.chaseD=e,this.chaseBearing=this.heading(e),this._pacerClock(),this._camTween=null,this._setView(this.chaseView(e)),this._dirty=!0)}_pacerClock(){this.pacer!=null&&this.runners&&(this.clockTarget=this.clockAt(this.pacer,this.chaseD),this._clockBlend||(this.clock=this.clockTarget))}setMode(e){this.mode!==e&&(this.mode=e,this._colorBuildings(),this._dirty=!0)}_stepChase(e){if(this.mode!==`chase`||this._camTween)return!1;let t=this.chaseTarget-this.chaseD,n=this.heading(this.chaseD),r=n-(this.chaseBearing??n);for(;r>180;)r-=360;for(;r<-180;)r+=360;return Math.abs(t)<.3&&Math.abs(r)<.05&&Math.abs(this._chaseV??0)<.5?!1:(je()?(this.chaseD=this.chaseTarget,this._chaseV=0):[this.chaseD,this._chaseV]=GT(this.chaseD,this.chaseTarget,this._chaseV??0,.16,e),this.chaseBearing=(this.chaseBearing??n)+r*(je()?1:1-Math.exp(-e*2.5)),this._pacerClock(),this._setView(this.chaseView(this.chaseD)),!0)}flyTo(e,{instant:t=!1,ms:n}={}){this._lastCam=e;let r=e.longitude==null?this.computeView(e):{...e};this._followTarget=null;let i=r.bearing-this.viewState.bearing;for(;i>180;)i-=360;for(;i<-180;)i+=360;if(r.bearing=this.viewState.bearing+i,t||je()||n===0){this._camTween=null,this._setView(r),this.labelLayer.classList.remove(`moving`);return}let a=this.el.clientWidth||innerWidth,o=this.el.clientHeight||innerHeight,s={...this.viewState,width:a,height:o},c={...r,width:a,height:o},l=Math.hypot((c.longitude-s.longitude)*IT,(c.latitude-s.latitude)*FT),u=PT*Math.cos(40.72*Math.PI/180)/2**Math.min(s.zoom,c.zoom),d=l/u<Math.max(a,o)*1.2,f=n??Math.min(3e3,1500+(d?l/u:1500)*.6+Math.abs(i)*3);this._camTween={from:s,to:c,t0:null,ms:f,linear:d,interp:new rS({curve:1.2})},this._followVel={lon:0,lat:0,z:0},this.labelLayer.classList.add(`moving`)}_setView(e){let t=e.position??[0,0,0];this.viewState={longitude:e.longitude,latitude:e.latitude,zoom:e.zoom,pitch:e.pitch,bearing:e.bearing,position:t,maxPitch:75},this.deck.setProps({viewState:this.viewState}),this._viewChanged=!0}_stepCamera(e){let t=this._camTween;if(!t)return!1;t.t0??=e-16;let n=Math.min(1,(e-t.t0)/t.ms),r=n<.5?4*n*n*n:1-(-2*n+2)**3/2,i=(e,t)=>e+(t-e)*r,a=t.linear?{longitude:i(t.from.longitude,t.to.longitude),latitude:i(t.from.latitude,t.to.latitude),zoom:i(t.from.zoom,t.to.zoom)}:t.interp.interpolateProps(t.from,t.to,r),o=i(t.from.position?.[2]??0,t.to.position?.[2]??0);return this._setView({...a,pitch:i(t.from.pitch,t.to.pitch),bearing:i(t.from.bearing,t.to.bearing),position:[0,0,o]}),n>=1&&(this._camTween=null,this.labelLayer.classList.remove(`moving`)),!0}get settled(){return!this._camTween&&!this._clockBlend&&this.clock===this.clockTarget&&(!this.path||this.pathT===this.pathTarget)}backExtent(e=300){let t=this.hist,n=-1,r=0,i=-1;for(let a=0;a<t.length;a++)if(t[a]&&(n<0&&(n=a),r+=t[a],r>=e)){i=a;break}if(n<0)return null;if(i<0){for(let e=t.length-1;e>=0;e--)if(t[e]){i=e;break}}return[n*400,Math.min(42195,(i+1)*400)]}fieldExtent(e=.005){let t=this.hist,n=0;for(let e=0;e<t.length;e++)n+=t[e];if(n<30)return null;let r=0,i=0,a=t.length-1;for(let a=0;a<t.length;a++)if(r+=t[a],r>=n*e){i=a;break}r=0;for(let i=t.length-1;i>=0;i--)if(r+=t[i],r>=n*e){a=i;break}return[i*400,Math.min(42195,(a+1)*400)]}setFollow(e){this.follow=e,this._followT=0,e&&this.setMode(`field`)}followView(){if(!this.follow||!this.runners)return null;this.runnerAlpha||this._updateRunners();let e=this.followExtent?this.followExtent():this.fieldExtent();if(!e)return null;let[t,n]=e,r=this.followMinSpan??5e3;if(n-t<r){let e=(t+n)/2;t=Math.max(0,e-r/2),n=Math.min(42195,t+r)}return this.computeView({...this.follow,fit:[t,n],mobile:this.follow.mobile&&{...this.follow.mobile,fit:[t,n]}})}setPath(e,{t=0,fromHere:n=!1}={}){this._pathViews=e,this._pathRelease=null,this._pathFrom=n?{...this.viewState}:null,this._buildPath(),this.pathT=this.pathTarget=t,this._pathV=0;let r=this._pathView(t),i=this.viewState,a=this._camVel??{},o=i.bearing-r.bearing;for(;o>180;)o-=360;for(;o<-180;)o+=360;this._pathOff={lon:i.longitude-r.longitude,lat:i.latitude-r.latitude,z:i.zoom-r.zoom,pitch:i.pitch-r.pitch,bearing:o},this._pathOffV={lon:a.lon??0,lat:a.lat??0,z:a.z??0,pitch:0,bearing:0},this.follow=null,this._followTarget=null,this._camTween=null,this.labelLayer.classList.remove(`moving`),this.setMode(`field`),this._pathDirty=!0,this._dirty=!0}_buildPath(){let[e,t]=this._pathViews(),n=this._pathFrom??e,r=this.el.clientWidth||innerWidth,i=this.el.clientHeight||innerHeight;this.path={from:{...n,width:r,height:i},to:{...t,width:r,height:i},interp:new rS({curve:1.414})}}_pathView(e){let t=this.path,n=e<=0?t.from:e>=1?t.to:t.interp.interpolateProps(t.from,t.to,e);return{longitude:n.longitude,latitude:n.latitude,zoom:n.zoom,pitch:t.from.pitch+(t.to.pitch-t.from.pitch)*e,bearing:t.from.bearing+(t.to.bearing-t.from.bearing)*e}}setPathT(e,{jump:t=!1}={}){if(this.path&&this._pathRelease==null){if(this.pathTarget=Math.max(0,Math.min(1,e)),t||je()){this.pathT=this.pathTarget,this._pathV=0;for(let e in this._pathOff)this._pathOff[e]=0,this._pathOffV[e]=0;this._pathDirty=!0}this._dirty=!0}}clearPath(){this.path&&(this.path=null,this._pathRelease=null,this._followVel={...this._camVel??{lon:0,lat:0,z:0}})}releasePath(e){this.path&&(this.pathTarget=e,this._pathRelease=e,this._dirty=!0)}_stepPath(e){if(!this.path||this._camTween)return!1;let t=this._pathOff,n=this._pathOffV,r=Math.abs(this.pathTarget-this.pathT)>1e-5||Math.abs(this._pathV)>1e-4;for(let e in t)(Math.abs(t[e])>1e-7||Math.abs(n[e])>1e-6)&&(r=!0);if(this._pathRelease!=null&&Math.abs(this.pathT-this._pathRelease)<.01&&Math.abs(this._pathV)<.5)return this.clearPath(),!1;if(!r&&!this._pathDirty)return this._camVel={lon:0,lat:0,z:0},!1;this._pathDirty=!1,[this.pathT,this._pathV]=GT(this.pathT,this.pathTarget,this._pathV,JT,e);for(let r in t)[t[r],n[r]]=GT(t[r],0,n[r],JT*2,e);let i=this._pathView(Math.max(0,Math.min(1,this.pathT))),a=this.viewState,o={longitude:i.longitude+t.lon,latitude:i.latitude+t.lat,zoom:i.zoom+t.z,pitch:i.pitch+t.pitch,bearing:i.bearing+t.bearing};return e>0&&(this._camVel={lon:(o.longitude-a.longitude)/e,lat:(o.latitude-a.latitude)/e,z:(o.zoom-a.zoom)/e}),this._setView(o),!0}_stepFollow(e,t){if(!this.follow||this._camTween||this.path||this.mode!==`field`)return!1;(e-this._followT>250||!this._followTarget)&&(this._followT=e,this._followTarget=this.followView());let n=this._followTarget;if(!n)return!1;let r=this.viewState,i=this._followVel??={lon:0,lat:0,z:0},a=n.zoom-r.zoom,o=n.longitude-r.longitude,s=n.latitude-r.latitude;if(Math.abs(a)<.002&&Math.abs(o)<1e-6&&Math.abs(s)<1e-6&&Math.abs(i.z)<.01&&Math.abs(i.lon)+Math.abs(i.lat)<1e-5)return!1;let c=n.longitude,l=n.latitude,u=n.zoom;return je()?i.lon=i.lat=i.z=0:([c,i.lon]=GT(r.longitude,n.longitude,i.lon,qT,t),[l,i.lat]=GT(r.latitude,n.latitude,i.lat,qT,t),[u,i.z]=GT(r.zoom,n.zoom,i.z,qT,t)),this._camVel={...i},this._setView({longitude:c,latitude:l,zoom:u,pitch:n.pitch,bearing:r.bearing}),!0}setLabels(e){this.labelSets=new Set(e),this._labelsDirty=!0,this._dirty=!0,this.deck?.redraw?.(!0)}paceColor(e){let t=this.paceEnds;if(e==null)return[...t.mid.slice(0,3),255];if(this.paceStops){let t=this.paceStops,n=Math.max(t[0][0],Math.min(t.at(-1)[0],e-1)),r=0;for(;r<t.length-2&&n>t[r+1][0];)r++;let i=(n-t[r][0])/(t[r+1][0]-t[r][0]);return[...UT(t[r][1],t[r+1][1],i),255]}let n=Math.abs(e-1),r=Math.max(0,Math.min(1,(n-.02)/.08)),i=e<1?t.fast:t.slow;return[...this.paceOklch?UT(t.mid,i,r):WT(t.mid,i,r),255]}render(){if(!this.deck)return;let e=this.c,t=this.lon,n=this.lat,r=this.h,i=this.mode===`chase`,a=[new NT({id:`land`,data:this.basemap.region,filled:!0,stroked:!0,getFillColor:e.land,getLineColor:e.edge,lineWidthUnits:`pixels`,getLineWidth:.8,material:!1,updateTriggers:{getFillColor:this.dark,getLineColor:this.dark}}),new dw({id:`park`,data:[LT],getPolygon:e=>e,getFillColor:e.park,material:!1,updateTriggers:{getFillColor:this.dark}}),new NT({id:`boroughs`,data:this.basemap.boroughs,filled:!1,stroked:!0,getLineColor:[...e.edge.slice(0,3),160],lineWidthUnits:`pixels`,getLineWidth:.6,updateTriggers:{getLineColor:this.dark}})],o=[...e.road.slice(0,3),255],s=[...WT(e.building,e.ink,this.dark?.15:.25),255];if(a.push(new dw({id:`fascia`,data:this.fascia,_full3d:!0,getPolygon:e=>e,getFillColor:s,material:!1,parameters:{cullMode:`none`},updateTriggers:{getFillColor:this.dark}}),new AC({id:`decks`,data:this.decks,getPath:e=>e,getColor:o,widthUnits:`meters`,getWidth:26,widthMinPixels:2,billboard:!1,updateTriggers:{getColor:this.dark}}),new dw({id:`towers`,data:this.towers,getPolygon:e=>e.poly,extruded:!0,getElevation:e=>e.h,getFillColor:[...e.building.slice(0,3),255],material:{ambient:.5,diffuse:.6,shininess:8,specularColor:[20,20,20]},updateTriggers:{getFillColor:this.dark}}),new AC({id:`cables`,data:this.cables,getPath:e=>e,getColor:[...WT(e.land,e.ink,.45),200],widthUnits:`pixels`,getWidth:1.2,updateTriggers:{getColor:this.dark}})),this.buildings){let e=this.buildings,t=this.fadeA;a.push(new dw({id:`buildings`,data:e.data,_normalize:!1,_windingOrder:`CCW`,extruded:!0,wireframe:!1,getElevation:(n,{index:r})=>t.has(r)?0:e.heights[r]/10,getFillColor:(n,{index:r})=>t.has(r)?[0,0,0,0]:e.colors[r],material:{ambient:.55,diffuse:.6,shininess:12,specularColor:[25,25,25]},updateTriggers:{getFillColor:[e.version,this._fadeSet],getElevation:this._fadeSet}}))}this._roadPath||=Array.from(t,(e,t)=>[e,n[t],r[t]+.4]);let c=e=>this._hover(e.picked?this._segOf(this._roadIndex(e)):null,e);if(i)a.push(new AC({id:`road`,data:[0],getPath:()=>this._roadPath,getColor:[...WT(e.land,e.ink,.12),255],widthUnits:`meters`,getWidth:16,widthMinPixels:2,jointRounded:!0,pickable:!0,onHover:c,updateTriggers:{getColor:this.dark}}));else{let t=PT*Math.cos(40.72*Math.PI/180)/2**this.viewState.zoom,n=this.bigDots?10:8,r={data:[0],getPath:()=>this._roadPath,widthUnits:`meters`,getWidth:1,jointRounded:!0,capRounded:!0,parameters:{depthCompare:`always`}};a.push(new AC({...r,id:`road-edge`,getColor:[...e.roadEdge.slice(0,3),255],widthScale:22+1.5*t,widthMinPixels:n+1.5,updateTriggers:{getColor:this.dark}}),new AC({...r,id:`road`,getColor:[...e.road.slice(0,3),255],widthScale:22,widthMinPixels:n,pickable:!0,onHover:c,updateTriggers:{getColor:this.dark}}))}if(this.runners&&this.runnerAlpha>0&&a.push(new zS({id:`runners`,data:{length:this.runners.n,attributes:{getPosition:{value:this.pos,size:3},getFillColor:{value:this.col,size:4,normalized:!0},getLineColor:{value:this.edge,size:4,normalized:!0}}},stroked:!0,lineWidthUnits:`pixels`,getLineWidth:i?.4:.6,lineWidthMinPixels:i?.4:.6,radiusUnits:`meters`,getRadius:i?1.9:1.4,radiusMinPixels:this.bigDots?3:innerWidth<600?1.5:1.7,radiusMaxPixels:i?9:6,opacity:this.runnerAlpha,billboard:!0,antialiasing:!0,parameters:i||this.depthDots?{}:{depthCompare:`always`},updateTriggers:{getPosition:this._posVersion,getFillColor:this._colVersion,getLineColor:this._colVersion}})),i&&this.pacer!=null&&this.runners&&this.runnerAlpha>0){let t=this.runners,n=t.K,r=this.pacer*n;this.pacer;let i=0;for(;i<n-1&&t.cpm[i]<this.chaseD;)i++;let o=this.at(this.chaseD),s=[o[0],o[1],o[2]+2,this.chaseD,i];{let i=s[3],o=[],c=t.times[r+n-1]/42195;for(let e=0;e<n;e++){let n=e?t.cpm[e-1]:0,a=Math.min(t.cpm[e],i);if(a<=n||a<i-2400)continue;let s=Math.max(n,i-2400),l=(t.times[r+e]-(e?t.times[r+e-1]:0))/(t.cpm[e]-n)/c,u=[];for(let e=s;e<a;e+=25){let t=this.at(e);u.push([t[0],t[1],t[2]+.8])}let d=this.at(a);u.push([d[0],d[1],d[2]+.8]),u.length>1&&o.push({path:u,color:this.paceColor(l)})}a.push(new AC({id:`pacer-trail`,data:o,getPath:e=>e.path,getColor:e=>e.color,widthUnits:`meters`,getWidth:7,widthMinPixels:3,capRounded:!0,jointRounded:!0,updateTriggers:{getPath:this._posVersion,getColor:this._posVersion}}));let l=s[4],u=l?t.times[r+l-1]:0,d=l?t.cpm[l-1]:0;this.pacerRel=(t.times[r+l]-u)/(t.cpm[l]-d)/c,this.pacerSeg=l;let f=this.paceColor(this.pacerRel);a.push(new zS({id:`pacer`,data:[s],getPosition:e=>[e[0],e[1],e[2]+.5],radiusUnits:`pixels`,getRadius:8,stroked:!0,lineWidthUnits:`pixels`,getLineWidth:2.5,getFillColor:f,getLineColor:[...e.ink.slice(0,3),255],parameters:{depthCompare:`always`},updateTriggers:{getPosition:this._posVersion,getFillColor:this._posVersion,getLineColor:this.dark}}))}}if(this.buildings&&this.fadeA.size){let e=this.buildings,t=e.data.attributes.getPolygon.value,n=e.data.startIndices;this._fadeDataSet!==this._fadeSet&&(this._fadeData=[...this.fadeA.keys()].map(e=>{let r=[];for(let i=n[e];i<n[e+1];i++)r.push([t[2*i],t[2*i+1]]);return{i:e,ring:r}}),this._fadeDataSet=this._fadeSet),a.push(new dw({id:`buildings-faded`,data:this._fadeData,getPolygon:e=>e.ring,extruded:!0,getElevation:t=>e.heights[t.i]/10,getFillColor:t=>[...e.colors[t.i].slice(0,3),Math.round(255*(this.fadeA.get(t.i)??1))],material:{ambient:.55,diffuse:.6,shininess:12,specularColor:[25,25,25]},parameters:{depthWriteEnabled:!1},updateTriggers:{getFillColor:[e.version,this._fadeFrame]}}))}if(this.tracked&&this.showTracked){let t=this.tracked.filter(e=>e.now);a.push(new zS({id:`tracked`,data:t,getPosition:e=>[e.now[0],e.now[1],e.now[2]],radiusUnits:`pixels`,getRadius:5.5,stroked:!0,lineWidthUnits:`pixels`,getLineWidth:2,getFillColor:[...e.ink.slice(0,3),255],getLineColor:[...e.page.slice(0,3),255],parameters:{depthCompare:`always`},updateTriggers:{getPosition:this._posVersion,getFillColor:this.dark,getLineColor:this.dark}}))}this.deck.setProps({layers:a})}_roadIndex(e){let[t,n]=e.coordinate||[0,0],r=0,i=1/0;for(let e=0;e<this.np;e+=2){let a=((this.lon[e]-t)*IT)**2+((this.lat[e]-n)*FT)**2;a<i&&(i=a,r=e)}return r*this.step}_segOf(e){let t=this.segments||[],n=t.findIndex(t=>e<=t.to_m);return n<0?t.length-1:n}_hover(e,t){this.onHover?.(e,t.x,t.y)}setLabelCatalog(e){this.catalog=e,this._labelsDirty=!0}_placeLabels(){let e=this.deck.getViewports?.();if(!e||!e.length||!this.catalog)return;let t=e[0],n=t.width,r=t.height;if(this._labelsDirty){this.labelLayer.innerHTML=``,this._labelEls=[];let e=this.catalog.filter(e=>this.labelSets.has(e.set));for(let t of e){let e=document.createElement(`div`);e.className=`slabel ${t.kind||``}`,e.innerHTML=t.text,e.style.opacity=0,this.labelLayer.appendChild(e),this._labelEls.push({l:t,div:e,w:0,h:0})}this._labelsDirty=!1,this._measureAt=0}let i=performance.now();if(!this._measureAt||!this._fontsReady&&document.fonts?.status===`loaded`){this._fontsReady=document.fonts?.status===`loaded`;for(let e of this._labelEls)e.w=e.div.offsetWidth,e.h=e.div.offsetHeight;this._measureAt=i}if(!this._panelBoxes||i-this._panelBoxesAt>250){let e=this.el.getBoundingClientRect(),t=[];this.el.querySelectorAll(`.viz-overlay, .caption`).forEach(n=>{let r=getComputedStyle(n);if(!(n.classList.contains(`hidden`)||r.opacity===`0`||r.display===`none`))for(let r of n.classList.contains(`caption`)?[n]:n.children){let n=r.getBoundingClientRect();n.width&&n.height&&t.push([n.left-e.left-4,n.top-e.top-4,n.right-e.left+4,n.bottom-e.top+4])}}),this._panelBoxes=t,this._panelBoxesAt=i}let a=[[0,0,60,60],...this._panelBoxes],o=this.mode===`chase`,s=[];if(this.tracked&&this.showTracked)for(let e of this.tracked){if(!e.now)continue;let[n,r,i]=t.project([e.now[0],e.now[1],e.now[2]]);i<1&&s.push([n-8,r-8,n+8,r+8])}let c=e=>(e.l.kind===`lead`?100:0)+(e.l.priority||0),l=[...this._labelEls].sort((e,t)=>c(t)-c(e));for(let e of l){let i=e.l,c;if(typeof i.at==`function`){if(c=i.at(),!c){e.div.style.opacity=0;continue}}else if(typeof i.at==`number`){if(o&&(i.at<this.chaseD-60||i.at>this.chaseD+(i.ahead??1600))){e.div.style.opacity=0;continue}let t=this.at(i.at);c=[t[0],t[1],t[2]+(i.lift??0)]}else c=[i.at[0],i.at[1],i.at[2]||0];let[l,u,d]=t.project(c),f=(i.minZoom==null||t.zoom>=i.minZoom)&&(i.maxZoom==null||t.zoom<=i.maxZoom),p=i.alts||([`bridge`,`mile`,`lead`].includes(i.kind)?[i.anchor||`bottom`,`left`,`right`,`below`]:[i.anchor||`bottom`]),m=null;for(let t of p){let o=l+(i.dx||0),c=u+(i.dy||0);t===`bottom`?(o-=e.w/2,c-=e.h+6):t===`below`?(o-=e.w/2,c+=7):t===`center`?(o-=e.w/2,c-=e.h/2):t===`left`?(o+=8,c-=e.h/2):t===`right`&&(o-=e.w+8,c-=e.h/2);let p=[o-3,c-2,o+e.w+3,c+e.h+2],h=d<1&&p[0]>=4&&p[1]>=4&&p[2]<=n-4&&p[3]<=r-4,g=e=>!(p[2]<e[0]||p[0]>e[2]||p[3]<e[1]||p[1]>e[3]),_=a.some(g)||i.kind!==`lead`&&s.some(g),v=n>=900&&p[0]<Math.min(560,n*.4)&&this.avoidLeft;if(h&&!_&&!v&&f){m={left:o,top:c,box:p,anchor:t};break}m||={left:o,top:c,box:null,anchor:t}}m.box&&a.push(m.box),e.div.dataset.anchor=m.anchor,e.div.style.transform=`translate(${Math.round(m.left)}px, ${Math.round(m.top)}px)`,e.div.style.opacity=+!!m.box}}};function $T(e){let t=parseInt(e.slice(1),16);return[t>>16&255,t>>8&255,t&255,255]}var eE=1609.344,tE=`http://www.w3.org/2000/svg`;function nE(e,{course:t,analysis:n,paceColor:r,mode:i=`current`,height:a=null}){let o=(e,t={},n)=>{let r=document.createElementNS(tE,e);for(let[e,n]of Object.entries(t))r.setAttribute(e,n);return n?.appendChild(r),r},s=n.segments,c=t.length_m,l=e=>t.pts[e][2]*3.28084,u=n.profiles.all,d,f,p,m=[],h=280,g=0,_=e=>{let t=r(e);return`rgb(${t[0]},${t[1]},${t[2]})`},v=i===`profile`?a?{H:a,top:3,eh:a-17,maxFt:270}:{H:70,top:6,eh:46,maxFt:270}:i===`minimal`?{H:3}:{H:74,top:4,eh:40,cellY:50,cellH:9,maxFt:270};function y(e){if(e&&(u=e),i===`minimal`){S(g);return}m.forEach((e,t)=>e.setAttribute(`fill`,_(u[t])))}function b(e){for(let[t,n]of[[0,`Start`],[13.1,`13.1`],[20,`20`],[26.2188,`26.2`]])o(`text`,{x:e(t*eE),y:v.H-3,class:`strip-tick`,"text-anchor":t===0?`start`:t>26?`end`:`middle`},d).textContent=n}function x(){e.innerHTML=``,m=[],h=Math.max(200,e.clientWidth||280),d=o(`svg`,{viewBox:`0 0 ${h} ${v.H}`,width:h,height:v.H,preserveAspectRatio:`none`,role:`img`,"aria-label":i===`minimal`?`Progress along the course, coloured by pace in each mile`:`Course elevation and the followed group's pace in each mile`},e);let n=e=>e/c*(h-2)+1;if(i===`minimal`){m=s.map(e=>({sg:e,done:o(`rect`,{y:0,height:v.H},d),rest:o(`rect`,{y:0,height:v.H,class:`strip-rest`},d)})),S(g);return}let r=e=>v.top+v.eh-e/v.maxFt*v.eh,a=(e,i)=>{let a=`M${n(e*t.step_m).toFixed(1)},${v.top+v.eh}`;for(let o=e;o<=i;o++)a+=`L${n(o*t.step_m).toFixed(1)},${r(l(o)).toFixed(1)}`;return a+`L${n(i*t.step_m).toFixed(1)},${v.top+v.eh}Z`};if(i===`profile`){m=s.map(e=>{let n=Math.round(e.from_m/t.step_m),r=Math.min(t.pts.length-1,Math.round(e.to_m/t.step_m));return o(`path`,{d:a(n,r),class:`strip-slice`},d)});let e=``;t.pts.forEach((i,a)=>{e+=`${a?`L`:`M`}${n(a*t.step_m).toFixed(1)},${r(l(a)).toFixed(1)}`}),o(`path`,{d:e,class:`strip-top`},d),o(`line`,{x1:0,x2:h,y1:v.top+v.eh+.5,y2:v.top+v.eh+.5,class:`strip-base`},d),b(n),f=o(`line`,{x1:0,x2:0,y1:v.top-4,y2:v.top+v.eh,class:`strip-marker`},d),p=o(`circle`,{r:3.5,class:`strip-dot`},d),y(u),S(g);return}for(let e of t.bridges)o(`rect`,{x:n(e.water_from_m),y:v.top,width:Math.max(1,n(e.water_to_m)-n(e.water_from_m)),height:v.eh,class:`strip-band`},d);o(`path`,{d:a(0,t.pts.length-1),class:`strip-elev`},d),m=s.map(e=>o(`rect`,{x:n(e.from_m)+.5,y:v.cellY,width:Math.max(1,n(e.to_m)-n(e.from_m)-1),height:v.cellH},d)),y(u),b(n),f=o(`line`,{x1:0,x2:0,y1:v.top-2,y2:v.cellY+v.cellH+2,class:`strip-marker`},d),p=o(`circle`,{r:4,class:`strip-dot`},d),S(g)}function S(e){if(g=e,!d)return;let n=e=>e/c*(h-2)+1;if(i===`minimal`){for(let t of m){let r=n(t.sg.from_m),i=n(t.sg.to_m),a=Math.max(r,Math.min(i,n(e))),o=s.indexOf(t.sg);t.done.setAttribute(`x`,r),t.done.setAttribute(`width`,Math.max(0,a-r)),t.done.setAttribute(`fill`,_(u[o])),t.rest.setAttribute(`x`,a),t.rest.setAttribute(`width`,Math.max(0,i-a))}return}let r=n(e),a=Math.min(t.pts.length-1,Math.round(e/t.step_m));f.setAttribute(`x1`,r),f.setAttribute(`x2`,r),p.setAttribute(`cx`,r),p.setAttribute(`cy`,v.top+v.eh-l(a)/v.maxFt*v.eh)}return x(),{draw:x,update:S,setPace:y}}var rE=[`zero`,`one`,`two`,`three`,`four`,`five`,`six`,`seven`,`eight`,`nine`],iE=e=>e>=0&&e<10?rE[e]:H.int(e),aE=e=>`${Math.floor(e/3600)}:${String(Math.round(e%3600/60)).padStart(2,`0`)}`,oE=e=>e===`Final 0.2`?`the last 0.2 mile`:e.replace(/^Miles?/,e=>e.toLowerCase()),sE=e=>Math.round((e-1)*100);function cE(e){let t=Math.abs(sE(e));return t===0?`at about their average pace`:`${t} percent ${e>1?`slower`:`faster`} than their average`}function lE(e){let t=e.map(e=>Math.abs(sE(e))),n=Math.min(...t),r=Math.max(...t);return n===r?`about ${n}`:`${n} to ${r}`}function uE(e){let t=e.map(sE),n=Math.min(...t),r=Math.max(...t);return r<0?`${lE(e)} percent faster than their average`:n>0?`${lE(e)} percent slower than their average`:n<0&&r>0?`between ${-n} percent faster and ${r} percent slower than their average`:n<0?`up to ${-n} percent faster than their average`:r>0?`up to ${r} percent slower than their average`:`at about their average pace`}function dE(e){let t=Math.abs(Math.round(e));return`${iE(t)} second${t===1?``:`s`}`}function fE(e){let t=Math.abs(Math.round(e));if(t<60)return dE(t);let n=Math.floor(t/60),r=t%60;return`${iE(n)} minute${n===1?``:`s`}${r?` and ${dE(r)}`:``}`}function pE(e){let t=Math.round(Math.abs(e)/60);return`${iE(t)} minute${t===1?``:`s`}`}function mE(e,t){let n=e=>t.segments.findIndex(t=>t.label===e),r=t=>e.rel[n(t)],i=e=>r(`Mile ${e}`),a=aE(e.target),o={};o.vz=`The race starts on the Verrazzano-Narrows Bridge, the highest point of the course, and runners who finished near ${a} ran the first three miles ${cE(r(`Miles 1–3`))}.`;let s=[4,5,6,7,8,9,10,11,12].map(i);o.bk=s.every(e=>sE(e)<0)?`Through the flat miles of Brooklyn, they ${sE(r(`Miles 1–3`))<0?`kept running`:`ran`} ${lE(s)} percent faster than their average.`:`Through the flat miles of Brooklyn, they ran ${uE(s)}.`;let c=Math.round(e.loss_s/60);o.pul=`They reached halfway, on the Pulaski Bridge, in ${e.half1}, and the second half took them ${c===0?`about the same time`:`about ${pE(e.loss_s)} ${e.loss_s>0?`longer`:`less`}`}.`,o.qb=e.qb_sec<=0?`They ran the two miles over the Queensboro Bridge, 15 and 16, about ${fE(e.qb_sec)} faster than miles 13 and 14.`:e.qb_first_slow?`On the Queensboro Bridge, miles 15 and 16, they ran slower than their average for the first time, and the two bridge miles cost them about ${fE(e.qb_sec)} compared with miles 13 and 14.`:`The two miles over the Queensboro Bridge, 15 and 16, cost them about ${fE(e.qb_sec)} compared with miles 13 and 14.`;let l=[i(17),i(18)],u=(l[0]+l[1])/2-1,d=Math.abs(u)<=.02?`even`:u<0?`fast`:`slow`;if(d===`even`){let e=i(19)-1;o.first=e>.02?`On First Avenue they ran close to their average pace until mile 19, in East Harlem.`:e>=-.02?`On First Avenue they ran close to their average pace through mile 19.`:`On First Avenue they ran close to their average pace.`}else o.first=d===`fast`?`On First Avenue they ran slightly faster than their average, coming off the bridge.`:`On First Avenue they stayed ${lE(l)} percent slower than their average.`;let f=i(20),p=[21,22,23].map(i),m=p.every(e=>Math.abs(sE(e)-sE(f))<=2),h;h=m?sE(f)>2?`miles 21 to 23 stayed about that slow`:`miles 21 to 23 were about the same`:p.every(e=>sE(e)>sE(f)+2)?`the slowing continued through mile 23`:p.every(e=>sE(e)>0)?`miles 21 to 23 were ${lE(p)} percent slower`:`miles 21 to 23 were ${uE(p)}`,o.bx=`Mile 20, over the Willis Avenue Bridge into the Bronx, was ${cE(f)}, and ${h}.`;let g=t.segments.map((t,n)=>[t.label,e.rel[n]]).filter(e=>e[1]!=null).sort((e,t)=>t[1]-e[1]),_=g.findIndex(e=>e[0]===`Mile 24`);return o.fifth=_===0?`The climb up Fifth Avenue in mile 24 was their slowest mile, ${cE(i(24))}.`:_===1?`The climb up Fifth Avenue in mile 24 was ${cE(i(24))}, second only to ${oE(g[0][0])}.`:`The climb up Fifth Avenue in mile 24 was ${cE(i(24))}, behind ${oE(g[0][0])}, their slowest.`,o.fin=`They ran the rolling last two miles through Central Park, and the runner on the map finished in ${H.hms(e.pacer_net)}.`,o}function hE(e){let t=(e,t)=>console.warn(`[copy check] ${aE(e.target)} cohort: ${t}`),n=t=>e.segments.findIndex(e=>e.label===t);for(let r of e.cohorts){let i=e=>r.rel[n(e)];Math.abs(r.pacer_net-r.target)>120&&t(r,`followed runner finished ${H.hms(r.pacer_net)}, more than 2 min off`),r.n<100&&t(r,`only ${r.n} finishers within five minutes`),r.rel.some(e=>e==null)&&t(r,`a mile has no pace data`);for(let e of[`sec_15_14`,`half1`,`half2`,`first_slow`,`slowest`,`loss_s`])r[e]??t(r,`${e} missing`);for(let e of[`qb_rel`,`qb_sec`,`qb_first_slow`])r[e]??t(r,`${e} missing`);r.qb_first_slow&&!(r.qb_rel>1&&r.rel.slice(0,n(`Mile 15`)).every(e=>e<=1))&&t(r,`Queensboro is not where they first ran slower than average`),r.slowest!==`Mile 24`&&i(r.slowest)<i(`Mile 24`)&&t(r,`slowest mile label inconsistent`);let a=[i(`Mile 17`),i(`Mile 18`)];(a[0]+a[1])/2>1.02&&!(i(`Mile 16`)>1)&&t(r,`First Avenue 'stayed slower' but mile 16 was not slower`),i(`Mile 25`)<i(`Mile 24`)||t(r,`mile 25 not faster than mile 24`);let o=mE(r,e);for(let[e,n]of Object.entries(o))/undefined|NaN|null/.test(n)&&t(r,`card ${e} has a missing value`),((n.match(/\.(\s|$)/g)||[]).length!==1||!n.endsWith(`.`))&&t(r,`card ${e} is not one sentence`)}}function gE(e,t){return e==null||t==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function _E(e,t){return e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function vE(e){let t,n,r;e.length===2?(t=e===gE||e===_E?e:yE,n=e,r=e):(t=gE,n=(t,n)=>gE(e(t),n),r=(t,n)=>e(t)-n);function i(e,r,i=0,a=e.length){if(i<a){if(t(r,r)!==0)return a;do{let t=i+a>>>1;n(e[t],r)<0?i=t+1:a=t}while(i<a)}return i}function a(e,r,i=0,a=e.length){if(i<a){if(t(r,r)!==0)return a;do{let t=i+a>>>1;n(e[t],r)<=0?i=t+1:a=t}while(i<a)}return i}function o(e,t,n=0,a=e.length){let o=i(e,t,n,a-1);return o>n&&r(e[o-1],t)>-r(e[o],t)?o-1:o}return{left:i,center:o,right:a}}function yE(){return 0}function bE(e){return e===null?NaN:+e}var xE=vE(gE),SE=xE.right;xE.left,vE(bE).center;var CE=Math.sqrt(50),wE=Math.sqrt(10),TE=Math.sqrt(2);function EE(e,t,n){let r=(t-e)/Math.max(0,n),i=Math.floor(Math.log10(r)),a=r/10**i,o=a>=CE?10:a>=wE?5:a>=TE?2:1,s,c,l;return i<0?(l=10**-i/o,s=Math.round(e*l),c=Math.round(t*l),s/l<e&&++s,c/l>t&&--c,l=-l):(l=10**i*o,s=Math.round(e/l),c=Math.round(t/l),s*l<e&&++s,c*l>t&&--c),c<s&&.5<=n&&n<2?EE(e,t,n*2):[s,c,l]}function DE(e,t,n){if(t=+t,e=+e,n=+n,!(n>0))return[];if(e===t)return[e];let r=t<e,[i,a,o]=r?EE(t,e,n):EE(e,t,n);if(!(a>=i))return[];let s=a-i+1,c=Array(s);if(r){if(o<0)for(let e=0;e<s;++e)c[e]=(a-e)/-o;else for(let e=0;e<s;++e)c[e]=(a-e)*o}else if(o<0)for(let e=0;e<s;++e)c[e]=(i+e)/-o;else for(let e=0;e<s;++e)c[e]=(i+e)*o;return c}function OE(e,t,n){return t=+t,e=+e,n=+n,EE(e,t,n)[2]}function kE(e,t,n){t=+t,e=+e,n=+n;let r=t<e,i=r?OE(t,e,n):OE(e,t,n);return(r?-1:1)*(i<0?1/-i:i)}function AE(e,t){let n;if(t===void 0)for(let t of e)t!=null&&(n<t||n===void 0&&t>=t)&&(n=t);else{let r=-1;for(let i of e)(i=t(i,++r,e))!=null&&(n<i||n===void 0&&i>=i)&&(n=i)}return n}function jE(e,t){let n;if(t===void 0)for(let t of e)t!=null&&(n>t||n===void 0&&t>=t)&&(n=t);else{let r=-1;for(let i of e)(i=t(i,++r,e))!=null&&(n>i||n===void 0&&i>=i)&&(n=i)}return n}function ME(e){return e}var NE=1,PE=2,FE=3,IE=4,LE=1e-6;function RE(e){return`translate(`+e+`,0)`}function zE(e){return`translate(0,`+e+`)`}function BE(e){return t=>+e(t)}function VE(e,t){return t=Math.max(0,e.bandwidth()-t*2)/2,e.round()&&(t=Math.round(t)),n=>+e(n)+t}function HE(){return!this.__axis}function UE(e,t){var n=[],r=null,i=null,a=6,o=6,s=3,c=typeof window<`u`&&window.devicePixelRatio>1?0:.5,l=e===NE||e===IE?-1:1,u=e===IE||e===PE?`x`:`y`,d=e===NE||e===FE?RE:zE;function f(f){var p=r??(t.ticks?t.ticks.apply(t,n):t.domain()),m=i??(t.tickFormat?t.tickFormat.apply(t,n):ME),h=Math.max(a,0)+s,g=t.range(),_=+g[0]+c,v=+g[g.length-1]+c,y=(t.bandwidth?VE:BE)(t.copy(),c),b=f.selection?f.selection():f,x=b.selectAll(`.domain`).data([null]),S=b.selectAll(`.tick`).data(p,t).order(),C=S.exit(),w=S.enter().append(`g`).attr(`class`,`tick`),T=S.select(`line`),E=S.select(`text`);x=x.merge(x.enter().insert(`path`,`.tick`).attr(`class`,`domain`).attr(`stroke`,`currentColor`)),S=S.merge(w),T=T.merge(w.append(`line`).attr(`stroke`,`currentColor`).attr(u+`2`,l*a)),E=E.merge(w.append(`text`).attr(`fill`,`currentColor`).attr(u,l*h).attr(`dy`,e===NE?`0em`:e===FE?`0.71em`:`0.32em`)),f!==b&&(x=x.transition(f),S=S.transition(f),T=T.transition(f),E=E.transition(f),C=C.transition(f).attr(`opacity`,LE).attr(`transform`,function(e){return isFinite(e=y(e))?d(e+c):this.getAttribute(`transform`)}),w.attr(`opacity`,LE).attr(`transform`,function(e){var t=this.parentNode.__axis;return d((t&&isFinite(t=t(e))?t:y(e))+c)})),C.remove(),x.attr(`d`,e===IE||e===PE?o?`M`+l*o+`,`+_+`H`+c+`V`+v+`H`+l*o:`M`+c+`,`+_+`V`+v:o?`M`+_+`,`+l*o+`V`+c+`H`+v+`V`+l*o:`M`+_+`,`+c+`H`+v),S.attr(`opacity`,1).attr(`transform`,function(e){return d(y(e)+c)}),T.attr(u+`2`,l*a),E.attr(u,l*h).text(m),b.filter(HE).attr(`fill`,`none`).attr(`font-size`,10).attr(`font-family`,`sans-serif`).attr(`text-anchor`,e===PE?`start`:e===IE?`end`:`middle`),b.each(function(){this.__axis=y})}return f.scale=function(e){return arguments.length?(t=e,f):t},f.ticks=function(){return n=Array.from(arguments),f},f.tickArguments=function(e){return arguments.length?(n=e==null?[]:Array.from(e),f):n.slice()},f.tickValues=function(e){return arguments.length?(r=e==null?null:Array.from(e),f):r&&r.slice()},f.tickFormat=function(e){return arguments.length?(i=e,f):i},f.tickSize=function(e){return arguments.length?(a=o=+e,f):a},f.tickSizeInner=function(e){return arguments.length?(a=+e,f):a},f.tickSizeOuter=function(e){return arguments.length?(o=+e,f):o},f.tickPadding=function(e){return arguments.length?(s=+e,f):s},f.offset=function(e){return arguments.length?(c=+e,f):c},f}function WE(e){return UE(FE,e)}function GE(e){return UE(IE,e)}var KE={value:()=>{}};function qE(){for(var e=0,t=arguments.length,n={},r;e<t;++e){if(!(r=arguments[e]+``)||r in n||/[\s.]/.test(r))throw Error(`illegal type: `+r);n[r]=[]}return new JE(n)}function JE(e){this._=e}function YE(e,t){return e.trim().split(/^|\s+/).map(function(e){var n=``,r=e.indexOf(`.`);if(r>=0&&(n=e.slice(r+1),e=e.slice(0,r)),e&&!t.hasOwnProperty(e))throw Error(`unknown type: `+e);return{type:e,name:n}})}JE.prototype=qE.prototype={constructor:JE,on:function(e,t){var n=this._,r=YE(e+``,n),i,a=-1,o=r.length;if(arguments.length<2){for(;++a<o;)if((i=(e=r[a]).type)&&(i=XE(n[i],e.name)))return i;return}if(t!=null&&typeof t!=`function`)throw Error(`invalid callback: `+t);for(;++a<o;)if(i=(e=r[a]).type)n[i]=ZE(n[i],e.name,t);else if(t==null)for(i in n)n[i]=ZE(n[i],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new JE(e)},call:function(e,t){if((i=arguments.length-2)>0)for(var n=Array(i),r=0,i,a;r<i;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(e))throw Error(`unknown type: `+e);for(a=this._[e],r=0,i=a.length;r<i;++r)a[r].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw Error(`unknown type: `+e);for(var r=this._[e],i=0,a=r.length;i<a;++i)r[i].value.apply(t,n)}};function XE(e,t){for(var n=0,r=e.length,i;n<r;++n)if((i=e[n]).name===t)return i.value}function ZE(e,t,n){for(var r=0,i=e.length;r<i;++r)if(e[r].name===t){e[r]=KE,e=e.slice(0,r).concat(e.slice(r+1));break}return n!=null&&e.push({name:t,value:n}),e}var QE={svg:`http://www.w3.org/2000/svg`,xhtml:`http://www.w3.org/1999/xhtml`,xlink:`http://www.w3.org/1999/xlink`,xml:`http://www.w3.org/XML/1998/namespace`,xmlns:`http://www.w3.org/2000/xmlns/`};function $E(e){var t=e+=``,n=t.indexOf(`:`);return n>=0&&(t=e.slice(0,n))!==`xmlns`&&(e=e.slice(n+1)),QE.hasOwnProperty(t)?{space:QE[t],local:e}:e}function eD(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===`http://www.w3.org/1999/xhtml`&&t.documentElement.namespaceURI===`http://www.w3.org/1999/xhtml`?t.createElement(e):t.createElementNS(n,e)}}function tD(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function nD(e){var t=$E(e);return(t.local?tD:eD)(t)}function rD(){}function iD(e){return e==null?rD:function(){return this.querySelector(e)}}function aD(e){typeof e!=`function`&&(e=iD(e));for(var t=this._groups,n=t.length,r=Array(n),i=0;i<n;++i)for(var a=t[i],o=a.length,s=r[i]=Array(o),c,l,u=0;u<o;++u)(c=a[u])&&(l=e.call(c,c.__data__,u,a))&&(`__data__`in c&&(l.__data__=c.__data__),s[u]=l);return new qO(r,this._parents)}function oD(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function sD(){return[]}function cD(e){return e==null?sD:function(){return this.querySelectorAll(e)}}function lD(e){return function(){return oD(e.apply(this,arguments))}}function uD(e){e=typeof e==`function`?lD(e):cD(e);for(var t=this._groups,n=t.length,r=[],i=[],a=0;a<n;++a)for(var o=t[a],s=o.length,c,l=0;l<s;++l)(c=o[l])&&(r.push(e.call(c,c.__data__,l,o)),i.push(c));return new qO(r,i)}function dD(e){return function(){return this.matches(e)}}function fD(e){return function(t){return t.matches(e)}}var pD=Array.prototype.find;function mD(e){return function(){return pD.call(this.children,e)}}function hD(){return this.firstElementChild}function gD(e){return this.select(e==null?hD:mD(typeof e==`function`?e:fD(e)))}var _D=Array.prototype.filter;function vD(){return Array.from(this.children)}function yD(e){return function(){return _D.call(this.children,e)}}function bD(e){return this.selectAll(e==null?vD:yD(typeof e==`function`?e:fD(e)))}function xD(e){typeof e!=`function`&&(e=dD(e));for(var t=this._groups,n=t.length,r=Array(n),i=0;i<n;++i)for(var a=t[i],o=a.length,s=r[i]=[],c,l=0;l<o;++l)(c=a[l])&&e.call(c,c.__data__,l,a)&&s.push(c);return new qO(r,this._parents)}function SD(e){return Array(e.length)}function CD(){return new qO(this._enter||this._groups.map(SD),this._parents)}function wD(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}wD.prototype={constructor:wD,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function TD(e){return function(){return e}}function ED(e,t,n,r,i,a){for(var o=0,s,c=t.length,l=a.length;o<l;++o)(s=t[o])?(s.__data__=a[o],r[o]=s):n[o]=new wD(e,a[o]);for(;o<c;++o)(s=t[o])&&(i[o]=s)}function DD(e,t,n,r,i,a,o){var s,c,l=new Map,u=t.length,d=a.length,f=Array(u),p;for(s=0;s<u;++s)(c=t[s])&&(f[s]=p=o.call(c,c.__data__,s,t)+``,l.has(p)?i[s]=c:l.set(p,c));for(s=0;s<d;++s)p=o.call(e,a[s],s,a)+``,(c=l.get(p))?(r[s]=c,c.__data__=a[s],l.delete(p)):n[s]=new wD(e,a[s]);for(s=0;s<u;++s)(c=t[s])&&l.get(f[s])===c&&(i[s]=c)}function OD(e){return e.__data__}function kD(e,t){if(!arguments.length)return Array.from(this,OD);var n=t?DD:ED,r=this._parents,i=this._groups;typeof e!=`function`&&(e=TD(e));for(var a=i.length,o=Array(a),s=Array(a),c=Array(a),l=0;l<a;++l){var u=r[l],d=i[l],f=d.length,p=AD(e.call(u,u&&u.__data__,l,r)),m=p.length,h=s[l]=Array(m),g=o[l]=Array(m);n(u,d,h,g,c[l]=Array(f),p,t);for(var _=0,v=0,y,b;_<m;++_)if(y=h[_]){for(_>=v&&(v=_+1);!(b=g[v])&&++v<m;);y._next=b||null}}return o=new qO(o,r),o._enter=s,o._exit=c,o}function AD(e){return typeof e==`object`&&`length`in e?e:Array.from(e)}function jD(){return new qO(this._exit||this._groups.map(SD),this._parents)}function MD(e,t,n){var r=this.enter(),i=this,a=this.exit();return typeof e==`function`?(r=e(r),r&&=r.selection()):r=r.append(e+``),t!=null&&(i=t(i),i&&=i.selection()),n==null?a.remove():n(a),r&&i?r.merge(i).order():i}function ND(e){for(var t=e.selection?e.selection():e,n=this._groups,r=t._groups,i=n.length,a=r.length,o=Math.min(i,a),s=Array(i),c=0;c<o;++c)for(var l=n[c],u=r[c],d=l.length,f=s[c]=Array(d),p,m=0;m<d;++m)(p=l[m]||u[m])&&(f[m]=p);for(;c<i;++c)s[c]=n[c];return new qO(s,this._parents)}function PD(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var r=e[t],i=r.length-1,a=r[i],o;--i>=0;)(o=r[i])&&(a&&o.compareDocumentPosition(a)^4&&a.parentNode.insertBefore(o,a),a=o);return this}function FD(e){e||=ID;function t(t,n){return t&&n?e(t.__data__,n.__data__):!t-!n}for(var n=this._groups,r=n.length,i=Array(r),a=0;a<r;++a){for(var o=n[a],s=o.length,c=i[a]=Array(s),l,u=0;u<s;++u)(l=o[u])&&(c[u]=l);c.sort(t)}return new qO(i,this._parents).order()}function ID(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function LD(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function RD(){return Array.from(this)}function zD(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,a=r.length;i<a;++i){var o=r[i];if(o)return o}return null}function BD(){let e=0;for(let t of this)++e;return e}function VD(){return!this.node()}function HD(e){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var i=t[n],a=0,o=i.length,s;a<o;++a)(s=i[a])&&e.call(s,s.__data__,a,i);return this}function UD(e){return function(){this.removeAttribute(e)}}function WD(e){return function(){this.removeAttributeNS(e.space,e.local)}}function GD(e,t){return function(){this.setAttribute(e,t)}}function KD(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function qD(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function JD(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function YD(e,t){var n=$E(e);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((t==null?n.local?WD:UD:typeof t==`function`?n.local?JD:qD:n.local?KD:GD)(n,t))}function XD(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function ZD(e){return function(){this.style.removeProperty(e)}}function QD(e,t,n){return function(){this.style.setProperty(e,t,n)}}function $D(e,t,n){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(e):this.style.setProperty(e,r,n)}}function eO(e,t,n){return arguments.length>1?this.each((t==null?ZD:typeof t==`function`?$D:QD)(e,t,n??``)):tO(this.node(),e)}function tO(e,t){return e.style.getPropertyValue(t)||XD(e).getComputedStyle(e,null).getPropertyValue(t)}function nO(e){return function(){delete this[e]}}function rO(e,t){return function(){this[e]=t}}function iO(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function aO(e,t){return arguments.length>1?this.each((t==null?nO:typeof t==`function`?iO:rO)(e,t)):this.node()[e]}function oO(e){return e.trim().split(/^|\s+/)}function sO(e){return e.classList||new cO(e)}function cO(e){this._node=e,this._names=oO(e.getAttribute(`class`)||``)}cO.prototype={add:function(e){this._names.indexOf(e)<0&&(this._names.push(e),this._node.setAttribute(`class`,this._names.join(` `)))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute(`class`,this._names.join(` `)))},contains:function(e){return this._names.indexOf(e)>=0}};function lO(e,t){for(var n=sO(e),r=-1,i=t.length;++r<i;)n.add(t[r])}function uO(e,t){for(var n=sO(e),r=-1,i=t.length;++r<i;)n.remove(t[r])}function dO(e){return function(){lO(this,e)}}function fO(e){return function(){uO(this,e)}}function pO(e,t){return function(){(t.apply(this,arguments)?lO:uO)(this,e)}}function mO(e,t){var n=oO(e+``);if(arguments.length<2){for(var r=sO(this.node()),i=-1,a=n.length;++i<a;)if(!r.contains(n[i]))return!1;return!0}return this.each((typeof t==`function`?pO:t?dO:fO)(n,t))}function hO(){this.textContent=``}function gO(e){return function(){this.textContent=e}}function _O(e){return function(){var t=e.apply(this,arguments);this.textContent=t??``}}function vO(e){return arguments.length?this.each(e==null?hO:(typeof e==`function`?_O:gO)(e)):this.node().textContent}function yO(){this.innerHTML=``}function bO(e){return function(){this.innerHTML=e}}function xO(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??``}}function SO(e){return arguments.length?this.each(e==null?yO:(typeof e==`function`?xO:bO)(e)):this.node().innerHTML}function CO(){this.nextSibling&&this.parentNode.appendChild(this)}function wO(){return this.each(CO)}function TO(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function EO(){return this.each(TO)}function DO(e){var t=typeof e==`function`?e:nD(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function OO(){return null}function kO(e,t){var n=typeof e==`function`?e:nD(e),r=t==null?OO:typeof t==`function`?t:iD(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})}function AO(){var e=this.parentNode;e&&e.removeChild(this)}function jO(){return this.each(AO)}function MO(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function NO(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function PO(e){return this.select(e?NO:MO)}function FO(e){return arguments.length?this.property(`__data__`,e):this.node().__data__}function IO(e){return function(t){e.call(this,t,this.__data__)}}function LO(e){return e.trim().split(/^|\s+/).map(function(e){var t=``,n=e.indexOf(`.`);return n>=0&&(t=e.slice(n+1),e=e.slice(0,n)),{type:e,name:t}})}function RO(e){return function(){var t=this.__on;if(t){for(var n=0,r=-1,i=t.length,a;n<i;++n)a=t[n],(!e.type||a.type===e.type)&&a.name===e.name?this.removeEventListener(a.type,a.listener,a.options):t[++r]=a;++r?t.length=r:delete this.__on}}}function zO(e,t,n){return function(){var r=this.__on,i,a=IO(t);if(r){for(var o=0,s=r.length;o<s;++o)if((i=r[o]).type===e.type&&i.name===e.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=a,i.options=n),i.value=t;return}}this.addEventListener(e.type,a,n),i={type:e.type,name:e.name,value:t,listener:a,options:n},r?r.push(i):this.__on=[i]}}function BO(e,t,n){var r=LO(e+``),i,a=r.length,o;if(arguments.length<2){var s=this.node().__on;if(s){for(var c=0,l=s.length,u;c<l;++c)for(i=0,u=s[c];i<a;++i)if((o=r[i]).type===u.type&&o.name===u.name)return u.value}return}for(s=t?zO:RO,i=0;i<a;++i)this.each(s(r[i],t,n));return this}function VO(e,t,n){var r=XD(e),i=r.CustomEvent;typeof i==`function`?i=new i(t,n):(i=r.document.createEvent(`Event`),n?(i.initEvent(t,n.bubbles,n.cancelable),i.detail=n.detail):i.initEvent(t,!1,!1)),e.dispatchEvent(i)}function HO(e,t){return function(){return VO(this,e,t)}}function UO(e,t){return function(){return VO(this,e,t.apply(this,arguments))}}function WO(e,t){return this.each((typeof t==`function`?UO:HO)(e,t))}function*GO(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,a=r.length,o;i<a;++i)(o=r[i])&&(yield o)}var KO=[null];function qO(e,t){this._groups=e,this._parents=t}function JO(){return new qO([[document.documentElement]],KO)}function YO(){return this}qO.prototype=JO.prototype={constructor:qO,select:aD,selectAll:uD,selectChild:gD,selectChildren:bD,filter:xD,data:kD,enter:CD,exit:jD,join:MD,merge:ND,selection:YO,order:PD,sort:FD,call:LD,nodes:RD,node:zD,size:BD,empty:VD,each:HD,attr:YD,style:eO,property:aO,classed:mO,text:vO,html:SO,raise:wO,lower:EO,append:DO,insert:kO,remove:jO,clone:PO,datum:FO,on:BO,dispatch:WO,[Symbol.iterator]:GO};function XO(e){return typeof e==`string`?new qO([[document.querySelector(e)]],[document.documentElement]):new qO([[e]],KO)}function ZO(e){let t;for(;t=e.sourceEvent;)e=t;return e}function QO(e,t){if(e=ZO(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var r=n.createSVGPoint();return r.x=e.clientX,r.y=e.clientY,r=r.matrixTransform(t.getScreenCTM().inverse()),[r.x,r.y]}if(t.getBoundingClientRect){var i=t.getBoundingClientRect();return[e.clientX-i.left-t.clientLeft,e.clientY-i.top-t.clientTop]}}return[e.pageX,e.pageY]}function $O(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function ek(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function tk(){}var nk=.7,rk=1/nk,ik=`\\s*([+-]?\\d+)\\s*`,ak=`\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*`,ok=`\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*`,sk=/^#([0-9a-f]{3,8})$/,ck=RegExp(`^rgb\\(${ik},${ik},${ik}\\)$`),lk=RegExp(`^rgb\\(${ok},${ok},${ok}\\)$`),uk=RegExp(`^rgba\\(${ik},${ik},${ik},${ak}\\)$`),dk=RegExp(`^rgba\\(${ok},${ok},${ok},${ak}\\)$`),fk=RegExp(`^hsl\\(${ak},${ok},${ok}\\)$`),pk=RegExp(`^hsla\\(${ak},${ok},${ok},${ak}\\)$`),mk={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};$O(tk,yk,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:hk,formatHex:hk,formatHex8:gk,formatHsl:_k,formatRgb:vk,toString:vk});function hk(){return this.rgb().formatHex()}function gk(){return this.rgb().formatHex8()}function _k(){return Mk(this).formatHsl()}function vk(){return this.rgb().formatRgb()}function yk(e){var t,n;return e=(e+``).trim().toLowerCase(),(t=sk.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?bk(t):n===3?new wk(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?xk(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?xk(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=ck.exec(e))?new wk(t[1],t[2],t[3],1):(t=lk.exec(e))?new wk(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=uk.exec(e))?xk(t[1],t[2],t[3],t[4]):(t=dk.exec(e))?xk(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=fk.exec(e))?jk(t[1],t[2]/100,t[3]/100,1):(t=pk.exec(e))?jk(t[1],t[2]/100,t[3]/100,t[4]):mk.hasOwnProperty(e)?bk(mk[e]):e===`transparent`?new wk(NaN,NaN,NaN,0):null}function bk(e){return new wk(e>>16&255,e>>8&255,e&255,1)}function xk(e,t,n,r){return r<=0&&(e=t=n=NaN),new wk(e,t,n,r)}function Sk(e){return e instanceof tk||(e=yk(e)),e?(e=e.rgb(),new wk(e.r,e.g,e.b,e.opacity)):new wk}function Ck(e,t,n,r){return arguments.length===1?Sk(e):new wk(e,t,n,r??1)}function wk(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}$O(wk,Ck,ek(tk,{brighter(e){return e=e==null?rk:rk**+e,new wk(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?nk:nk**+e,new wk(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new wk(kk(this.r),kk(this.g),kk(this.b),Ok(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Tk,formatHex:Tk,formatHex8:Ek,formatRgb:Dk,toString:Dk}));function Tk(){return`#${Ak(this.r)}${Ak(this.g)}${Ak(this.b)}`}function Ek(){return`#${Ak(this.r)}${Ak(this.g)}${Ak(this.b)}${Ak((isNaN(this.opacity)?1:this.opacity)*255)}`}function Dk(){let e=Ok(this.opacity);return`${e===1?`rgb(`:`rgba(`}${kk(this.r)}, ${kk(this.g)}, ${kk(this.b)}${e===1?`)`:`, ${e})`}`}function Ok(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function kk(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Ak(e){return e=kk(e),(e<16?`0`:``)+e.toString(16)}function jk(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new Pk(e,t,n,r)}function Mk(e){if(e instanceof Pk)return new Pk(e.h,e.s,e.l,e.opacity);if(e instanceof tk||(e=yk(e)),!e)return new Pk;if(e instanceof Pk)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,i=Math.min(t,n,r),a=Math.max(t,n,r),o=NaN,s=a-i,c=(a+i)/2;return s?(o=t===a?(n-r)/s+(n<r)*6:n===a?(r-t)/s+2:(t-n)/s+4,s/=c<.5?a+i:2-a-i,o*=60):s=c>0&&c<1?0:o,new Pk(o,s,c,e.opacity)}function Nk(e,t,n,r){return arguments.length===1?Mk(e):new Pk(e,t,n,r??1)}function Pk(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}$O(Pk,Nk,ek(tk,{brighter(e){return e=e==null?rk:rk**+e,new Pk(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?nk:nk**+e,new Pk(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,i=2*n-r;return new wk(Lk(e>=240?e-240:e+120,i,r),Lk(e,i,r),Lk(e<120?e+240:e-120,i,r),this.opacity)},clamp(){return new Pk(Fk(this.h),Ik(this.s),Ik(this.l),Ok(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=Ok(this.opacity);return`${e===1?`hsl(`:`hsla(`}${Fk(this.h)}, ${Ik(this.s)*100}%, ${Ik(this.l)*100}%${e===1?`)`:`, ${e})`}`}}));function Fk(e){return e=(e||0)%360,e<0?e+360:e}function Ik(e){return Math.max(0,Math.min(1,e||0))}function Lk(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}var Rk=e=>()=>e;function zk(e,t){return function(n){return e+n*t}}function Bk(e,t,n){return e**=+n,t=t**+n-e,n=1/n,function(r){return(e+r*t)**+n}}function Vk(e){return(e=+e)==1?Hk:function(t,n){return n-t?Bk(t,n,e):Rk(isNaN(t)?n:t)}}function Hk(e,t){var n=t-e;return n?zk(e,n):Rk(isNaN(e)?t:e)}var Uk=(function e(t){var n=Vk(t);function r(e,t){var r=n((e=Ck(e)).r,(t=Ck(t)).r),i=n(e.g,t.g),a=n(e.b,t.b),o=Hk(e.opacity,t.opacity);return function(t){return e.r=r(t),e.g=i(t),e.b=a(t),e.opacity=o(t),e+``}}return r.gamma=e,r})(1);function Wk(e,t){t||=[];var n=e?Math.min(t.length,e.length):0,r=t.slice(),i;return function(a){for(i=0;i<n;++i)r[i]=e[i]*(1-a)+t[i]*a;return r}}function Gk(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Kk(e,t){for(var n=t?t.length:0,r=e?Math.min(n,e.length):0,i=Array(r),a=Array(n),o=0;o<r;++o)i[o]=tA(e[o],t[o]);for(;o<n;++o)a[o]=t[o];return function(e){for(o=0;o<r;++o)a[o]=i[o](e);return a}}function qk(e,t){var n=new Date;return e=+e,t=+t,function(r){return n.setTime(e*(1-r)+t*r),n}}function Jk(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function Yk(e,t){var n={},r={},i;for(i in(typeof e!=`object`||!e)&&(e={}),(typeof t!=`object`||!t)&&(t={}),t)i in e?n[i]=tA(e[i],t[i]):r[i]=t[i];return function(e){for(i in n)r[i]=n[i](e);return r}}var Xk=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Zk=new RegExp(Xk.source,`g`);function Qk(e){return function(){return e}}function $k(e){return function(t){return e(t)+``}}function eA(e,t){var n=Xk.lastIndex=Zk.lastIndex=0,r,i,a,o=-1,s=[],c=[];for(e+=``,t+=``;(r=Xk.exec(e))&&(i=Zk.exec(t));)(a=i.index)>n&&(a=t.slice(n,a),s[o]?s[o]+=a:s[++o]=a),(r=r[0])===(i=i[0])?s[o]?s[o]+=i:s[++o]=i:(s[++o]=null,c.push({i:o,x:Jk(r,i)})),n=Zk.lastIndex;return n<t.length&&(a=t.slice(n),s[o]?s[o]+=a:s[++o]=a),s.length<2?c[0]?$k(c[0].x):Qk(t):(t=c.length,function(e){for(var n=0,r;n<t;++n)s[(r=c[n]).i]=r.x(e);return s.join(``)})}function tA(e,t){var n=typeof t,r;return t==null||n===`boolean`?Rk(t):(n===`number`?Jk:n===`string`?(r=yk(t))?(t=r,Uk):eA:t instanceof yk?Uk:t instanceof Date?qk:Gk(t)?Wk:Array.isArray(t)?Kk:typeof t.valueOf!=`function`&&typeof t.toString!=`function`||isNaN(t)?Yk:Jk)(e,t)}function nA(e,t){return e=+e,t=+t,function(n){return Math.round(e*(1-n)+t*n)}}var rA=180/Math.PI,iA={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function aA(e,t,n,r,i,a){var o,s,c;return(o=Math.sqrt(e*e+t*t))&&(e/=o,t/=o),(c=e*n+t*r)&&(n-=e*c,r-=t*c),(s=Math.sqrt(n*n+r*r))&&(n/=s,r/=s,c/=s),e*r<t*n&&(e=-e,t=-t,c=-c,o=-o),{translateX:i,translateY:a,rotate:Math.atan2(t,e)*rA,skewX:Math.atan(c)*rA,scaleX:o,scaleY:s}}var oA;function sA(e){let t=new(typeof DOMMatrix==`function`?DOMMatrix:WebKitCSSMatrix)(e+``);return t.isIdentity?iA:aA(t.a,t.b,t.c,t.d,t.e,t.f)}function cA(e){return e==null||(oA||=document.createElementNS(`http://www.w3.org/2000/svg`,`g`),oA.setAttribute(`transform`,e),!(e=oA.transform.baseVal.consolidate()))?iA:(e=e.matrix,aA(e.a,e.b,e.c,e.d,e.e,e.f))}function lA(e,t,n,r){function i(e){return e.length?e.pop()+` `:``}function a(e,r,i,a,o,s){if(e!==i||r!==a){var c=o.push(`translate(`,null,t,null,n);s.push({i:c-4,x:Jk(e,i)},{i:c-2,x:Jk(r,a)})}else(i||a)&&o.push(`translate(`+i+t+a+n)}function o(e,t,n,a){e===t?t&&n.push(i(n)+`rotate(`+t+r):(e-t>180?t+=360:t-e>180&&(e+=360),a.push({i:n.push(i(n)+`rotate(`,null,r)-2,x:Jk(e,t)}))}function s(e,t,n,a){e===t?t&&n.push(i(n)+`skewX(`+t+r):a.push({i:n.push(i(n)+`skewX(`,null,r)-2,x:Jk(e,t)})}function c(e,t,n,r,a,o){if(e!==n||t!==r){var s=a.push(i(a)+`scale(`,null,`,`,null,`)`);o.push({i:s-4,x:Jk(e,n)},{i:s-2,x:Jk(t,r)})}else(n!==1||r!==1)&&a.push(i(a)+`scale(`+n+`,`+r+`)`)}return function(t,n){var r=[],i=[];return t=e(t),n=e(n),a(t.translateX,t.translateY,n.translateX,n.translateY,r,i),o(t.rotate,n.rotate,r,i),s(t.skewX,n.skewX,r,i),c(t.scaleX,t.scaleY,n.scaleX,n.scaleY,r,i),t=n=null,function(e){for(var t=-1,n=i.length,a;++t<n;)r[(a=i[t]).i]=a.x(e);return r.join(``)}}}var uA=lA(sA,`px, `,`px)`,`deg)`),dA=lA(cA,`, `,`)`,`)`),fA=0,pA=0,mA=0,hA=1e3,gA,_A,vA=0,yA=0,bA=0,xA=typeof performance==`object`&&performance.now?performance:Date,SA=typeof window==`object`&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function CA(){return yA||=(SA(wA),xA.now()+bA)}function wA(){yA=0}function TA(){this._call=this._time=this._next=null}TA.prototype=EA.prototype={constructor:TA,restart:function(e,t,n){if(typeof e!=`function`)throw TypeError(`callback is not a function`);n=(n==null?CA():+n)+(t==null?0:+t),!this._next&&_A!==this&&(_A?_A._next=this:gA=this,_A=this),this._call=e,this._time=n,jA()},stop:function(){this._call&&(this._call=null,this._time=1/0,jA())}};function EA(e,t,n){var r=new TA;return r.restart(e,t,n),r}function DA(){CA(),++fA;for(var e=gA,t;e;)(t=yA-e._time)>=0&&e._call.call(void 0,t),e=e._next;--fA}function OA(){yA=(vA=xA.now())+bA,fA=pA=0;try{DA()}finally{fA=0,AA(),yA=0}}function kA(){var e=xA.now(),t=e-vA;t>hA&&(bA-=t,vA=e)}function AA(){for(var e,t=gA,n,r=1/0;t;)t._call?(r>t._time&&(r=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:gA=n);_A=e,jA(r)}function jA(e){fA||(pA&&=clearTimeout(pA),e-yA>24?(e<1/0&&(pA=setTimeout(OA,e-xA.now()-bA)),mA&&=clearInterval(mA)):(mA||=(vA=xA.now(),setInterval(kA,hA)),fA=1,SA(OA)))}function MA(e,t,n){var r=new TA;return t=t==null?0:+t,r.restart(n=>{r.stop(),e(n+t)},t,n),r}var NA=qE(`start`,`end`,`cancel`,`interrupt`),PA=[];function FA(e,t,n,r,i,a){var o=e.__transition;if(!o)e.__transition={};else if(n in o)return;zA(e,n,{name:t,index:r,group:i,on:NA,tween:PA,time:a.time,delay:a.delay,duration:a.duration,ease:a.ease,timer:null,state:0})}function IA(e,t){var n=RA(e,t);if(n.state>0)throw Error(`too late; already scheduled`);return n}function LA(e,t){var n=RA(e,t);if(n.state>3)throw Error(`too late; already running`);return n}function RA(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw Error(`transition not found`);return n}function zA(e,t,n){var r=e.__transition,i;r[t]=n,n.timer=EA(a,0,n.time);function a(e){n.state=1,n.timer.restart(o,n.delay,n.time),n.delay<=e&&o(e-n.delay)}function o(a){var l,u,d,f;if(n.state!==1)return c();for(l in r)if(f=r[l],f.name===n.name){if(f.state===3)return MA(o);f.state===4?(f.state=6,f.timer.stop(),f.on.call(`interrupt`,e,e.__data__,f.index,f.group),delete r[l]):+l<t&&(f.state=6,f.timer.stop(),f.on.call(`cancel`,e,e.__data__,f.index,f.group),delete r[l])}if(MA(function(){n.state===3&&(n.state=4,n.timer.restart(s,n.delay,n.time),s(a))}),n.state=2,n.on.call(`start`,e,e.__data__,n.index,n.group),n.state===2){for(n.state=3,i=Array(d=n.tween.length),l=0,u=-1;l<d;++l)(f=n.tween[l].value.call(e,e.__data__,n.index,n.group))&&(i[++u]=f);i.length=u+1}}function s(t){for(var r=t<n.duration?n.ease.call(null,t/n.duration):(n.timer.restart(c),n.state=5,1),a=-1,o=i.length;++a<o;)i[a].call(e,r);n.state===5&&(n.on.call(`end`,e,e.__data__,n.index,n.group),c())}function c(){for(var i in n.state=6,n.timer.stop(),delete r[t],r)return;delete e.__transition}}function BA(e,t){var n=e.__transition,r,i,a=!0,o;if(n){for(o in t=t==null?null:t+``,n){if((r=n[o]).name!==t){a=!1;continue}i=r.state>2&&r.state<5,r.state=6,r.timer.stop(),r.on.call(i?`interrupt`:`cancel`,e,e.__data__,r.index,r.group),delete n[o]}a&&delete e.__transition}}function VA(e){return this.each(function(){BA(this,e)})}function HA(e,t){var n,r;return function(){var i=LA(this,e),a=i.tween;if(a!==n){r=n=a;for(var o=0,s=r.length;o<s;++o)if(r[o].name===t){r=r.slice(),r.splice(o,1);break}}i.tween=r}}function UA(e,t,n){var r,i;if(typeof n!=`function`)throw Error();return function(){var a=LA(this,e),o=a.tween;if(o!==r){i=(r=o).slice();for(var s={name:t,value:n},c=0,l=i.length;c<l;++c)if(i[c].name===t){i[c]=s;break}c===l&&i.push(s)}a.tween=i}}function WA(e,t){var n=this._id;if(e+=``,arguments.length<2){for(var r=RA(this.node(),n).tween,i=0,a=r.length,o;i<a;++i)if((o=r[i]).name===e)return o.value;return null}return this.each((t==null?HA:UA)(n,e,t))}function GA(e,t,n){var r=e._id;return e.each(function(){var e=LA(this,r);(e.value||={})[t]=n.apply(this,arguments)}),function(e){return RA(e,r).value[t]}}function KA(e,t){var n;return(typeof t==`number`?Jk:t instanceof yk?Uk:(n=yk(t))?(t=n,Uk):eA)(e,t)}function qA(e){return function(){this.removeAttribute(e)}}function JA(e){return function(){this.removeAttributeNS(e.space,e.local)}}function YA(e,t,n){var r,i=n+``,a;return function(){var o=this.getAttribute(e);return o===i?null:o===r?a:a=t(r=o,n)}}function XA(e,t,n){var r,i=n+``,a;return function(){var o=this.getAttributeNS(e.space,e.local);return o===i?null:o===r?a:a=t(r=o,n)}}function ZA(e,t,n){var r,i,a;return function(){var o,s=n(this),c;return s==null?void this.removeAttribute(e):(o=this.getAttribute(e),c=s+``,o===c?null:o===r&&c===i?a:(i=c,a=t(r=o,s)))}}function QA(e,t,n){var r,i,a;return function(){var o,s=n(this),c;return s==null?void this.removeAttributeNS(e.space,e.local):(o=this.getAttributeNS(e.space,e.local),c=s+``,o===c?null:o===r&&c===i?a:(i=c,a=t(r=o,s)))}}function $A(e,t){var n=$E(e),r=n===`transform`?dA:KA;return this.attrTween(e,typeof t==`function`?(n.local?QA:ZA)(n,r,GA(this,`attr.`+e,t)):t==null?(n.local?JA:qA)(n):(n.local?XA:YA)(n,r,t))}function ej(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function tj(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function nj(e,t){var n,r;function i(){var i=t.apply(this,arguments);return i!==r&&(n=(r=i)&&tj(e,i)),n}return i._value=t,i}function rj(e,t){var n,r;function i(){var i=t.apply(this,arguments);return i!==r&&(n=(r=i)&&ej(e,i)),n}return i._value=t,i}function ij(e,t){var n=`attr.`+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!=`function`)throw Error();var r=$E(e);return this.tween(n,(r.local?nj:rj)(r,t))}function aj(e,t){return function(){IA(this,e).delay=+t.apply(this,arguments)}}function oj(e,t){return t=+t,function(){IA(this,e).delay=t}}function sj(e){var t=this._id;return arguments.length?this.each((typeof e==`function`?aj:oj)(t,e)):RA(this.node(),t).delay}function cj(e,t){return function(){LA(this,e).duration=+t.apply(this,arguments)}}function lj(e,t){return t=+t,function(){LA(this,e).duration=t}}function uj(e){var t=this._id;return arguments.length?this.each((typeof e==`function`?cj:lj)(t,e)):RA(this.node(),t).duration}function dj(e,t){if(typeof t!=`function`)throw Error();return function(){LA(this,e).ease=t}}function fj(e){var t=this._id;return arguments.length?this.each(dj(t,e)):RA(this.node(),t).ease}function pj(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!=`function`)throw Error();LA(this,e).ease=n}}function mj(e){if(typeof e!=`function`)throw Error();return this.each(pj(this._id,e))}function hj(e){typeof e!=`function`&&(e=dD(e));for(var t=this._groups,n=t.length,r=Array(n),i=0;i<n;++i)for(var a=t[i],o=a.length,s=r[i]=[],c,l=0;l<o;++l)(c=a[l])&&e.call(c,c.__data__,l,a)&&s.push(c);return new Wj(r,this._parents,this._name,this._id)}function gj(e){if(e._id!==this._id)throw Error();for(var t=this._groups,n=e._groups,r=t.length,i=n.length,a=Math.min(r,i),o=Array(r),s=0;s<a;++s)for(var c=t[s],l=n[s],u=c.length,d=o[s]=Array(u),f,p=0;p<u;++p)(f=c[p]||l[p])&&(d[p]=f);for(;s<r;++s)o[s]=t[s];return new Wj(o,this._parents,this._name,this._id)}function _j(e){return(e+``).trim().split(/^|\s+/).every(function(e){var t=e.indexOf(`.`);return t>=0&&(e=e.slice(0,t)),!e||e===`start`})}function vj(e,t,n){var r,i,a=_j(t)?IA:LA;return function(){var o=a(this,e),s=o.on;s!==r&&(i=(r=s).copy()).on(t,n),o.on=i}}function yj(e,t){var n=this._id;return arguments.length<2?RA(this.node(),n).on.on(e):this.each(vj(n,e,t))}function bj(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function xj(){return this.on(`end.remove`,bj(this._id))}function Sj(e){var t=this._name,n=this._id;typeof e!=`function`&&(e=iD(e));for(var r=this._groups,i=r.length,a=Array(i),o=0;o<i;++o)for(var s=r[o],c=s.length,l=a[o]=Array(c),u,d,f=0;f<c;++f)(u=s[f])&&(d=e.call(u,u.__data__,f,s))&&(`__data__`in u&&(d.__data__=u.__data__),l[f]=d,FA(l[f],t,n,f,l,RA(u,n)));return new Wj(a,this._parents,t,n)}function Cj(e){var t=this._name,n=this._id;typeof e!=`function`&&(e=cD(e));for(var r=this._groups,i=r.length,a=[],o=[],s=0;s<i;++s)for(var c=r[s],l=c.length,u,d=0;d<l;++d)if(u=c[d]){for(var f=e.call(u,u.__data__,d,c),p,m=RA(u,n),h=0,g=f.length;h<g;++h)(p=f[h])&&FA(p,t,n,h,f,m);a.push(f),o.push(u)}return new Wj(a,o,t,n)}var wj=JO.prototype.constructor;function Tj(){return new wj(this._groups,this._parents)}function Ej(e,t){var n,r,i;return function(){var a=tO(this,e),o=(this.style.removeProperty(e),tO(this,e));return a===o?null:a===n&&o===r?i:i=t(n=a,r=o)}}function Dj(e){return function(){this.style.removeProperty(e)}}function Oj(e,t,n){var r,i=n+``,a;return function(){var o=tO(this,e);return o===i?null:o===r?a:a=t(r=o,n)}}function kj(e,t,n){var r,i,a;return function(){var o=tO(this,e),s=n(this),c=s+``;return s??(c=s=(this.style.removeProperty(e),tO(this,e))),o===c?null:o===r&&c===i?a:(i=c,a=t(r=o,s))}}function Aj(e,t){var n,r,i,a=`style.`+t,o=`end.`+a,s;return function(){var c=LA(this,e),l=c.on,u=c.value[a]==null?s||=Dj(t):void 0;(l!==n||i!==u)&&(r=(n=l).copy()).on(o,i=u),c.on=r}}function jj(e,t,n){var r=(e+=``)==`transform`?uA:KA;return t==null?this.styleTween(e,Ej(e,r)).on(`end.style.`+e,Dj(e)):typeof t==`function`?this.styleTween(e,kj(e,r,GA(this,`style.`+e,t))).each(Aj(this._id,e)):this.styleTween(e,Oj(e,r,t),n).on(`end.style.`+e,null)}function Mj(e,t,n){return function(r){this.style.setProperty(e,t.call(this,r),n)}}function Nj(e,t,n){var r,i;function a(){var a=t.apply(this,arguments);return a!==i&&(r=(i=a)&&Mj(e,a,n)),r}return a._value=t,a}function Pj(e,t,n){var r=`style.`+(e+=``);if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!=`function`)throw Error();return this.tween(r,Nj(e,t,n??``))}function Fj(e){return function(){this.textContent=e}}function Ij(e){return function(){var t=e(this);this.textContent=t??``}}function Lj(e){return this.tween(`text`,typeof e==`function`?Ij(GA(this,`text`,e)):Fj(e==null?``:e+``))}function Rj(e){return function(t){this.textContent=e.call(this,t)}}function zj(e){var t,n;function r(){var r=e.apply(this,arguments);return r!==n&&(t=(n=r)&&Rj(r)),t}return r._value=e,r}function Bj(e){var t=`text`;if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!=`function`)throw Error();return this.tween(t,zj(e))}function Vj(){for(var e=this._name,t=this._id,n=Gj(),r=this._groups,i=r.length,a=0;a<i;++a)for(var o=r[a],s=o.length,c,l=0;l<s;++l)if(c=o[l]){var u=RA(c,t);FA(c,e,n,l,o,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new Wj(r,this._parents,e,n)}function Hj(){var e,t,n=this,r=n._id,i=n.size();return new Promise(function(a,o){var s={value:o},c={value:function(){--i===0&&a()}};n.each(function(){var n=LA(this,r),i=n.on;i!==e&&(t=(e=i).copy(),t._.cancel.push(s),t._.interrupt.push(s),t._.end.push(c)),n.on=t}),i===0&&a()})}var Uj=0;function Wj(e,t,n,r){this._groups=e,this._parents=t,this._name=n,this._id=r}function Gj(){return++Uj}var Kj=JO.prototype;Wj.prototype={constructor:Wj,select:Sj,selectAll:Cj,selectChild:Kj.selectChild,selectChildren:Kj.selectChildren,filter:hj,merge:gj,selection:Tj,transition:Vj,call:Kj.call,nodes:Kj.nodes,node:Kj.node,size:Kj.size,empty:Kj.empty,each:Kj.each,on:yj,attr:$A,attrTween:ij,style:jj,styleTween:Pj,text:Lj,textTween:Bj,remove:xj,tween:WA,delay:sj,duration:uj,ease:fj,easeVarying:mj,end:Hj,[Symbol.iterator]:Kj[Symbol.iterator]};function qj(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var Jj={time:null,delay:0,duration:250,ease:qj};function Yj(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw Error(`transition ${t} not found`);return n}function Xj(e){var t,n;e instanceof Wj?(t=e._id,e=e._name):(t=Gj(),(n=Jj).time=CA(),e=e==null?null:e+``);for(var r=this._groups,i=r.length,a=0;a<i;++a)for(var o=r[a],s=o.length,c,l=0;l<s;++l)(c=o[l])&&FA(c,e,t,l,o,n||Yj(c,t));return new Wj(r,this._parents,e,t)}JO.prototype.interrupt=VA,JO.prototype.transition=Xj;var{abs:Zj,max:Qj,min:$j}=Math;[`w`,`e`].map(eM),[`n`,`s`].map(eM),[`n`,`w`,`e`,`s`,`nw`,`ne`,`sw`,`se`].map(eM);function eM(e){return{type:e}}var tM=Math.PI,nM=2*tM,rM=1e-6,iM=nM-rM;function aM(e){this._+=e[0];for(let t=1,n=e.length;t<n;++t)this._+=arguments[t]+e[t]}function oM(e){let t=Math.floor(e);if(!(t>=0))throw Error(`invalid digits: ${e}`);if(t>15)return aM;let n=10**t;return function(e){this._+=e[0];for(let t=1,r=e.length;t<r;++t)this._+=Math.round(arguments[t]*n)/n+e[t]}}var sM=class{constructor(e){this._x0=this._y0=this._x1=this._y1=null,this._=``,this._append=e==null?aM:oM(e)}moveTo(e,t){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(e,t){this._append`L${this._x1=+e},${this._y1=+t}`}quadraticCurveTo(e,t,n,r){this._append`Q${+e},${+t},${this._x1=+n},${this._y1=+r}`}bezierCurveTo(e,t,n,r,i,a){this._append`C${+e},${+t},${+n},${+r},${this._x1=+i},${this._y1=+a}`}arcTo(e,t,n,r,i){if(e=+e,t=+t,n=+n,r=+r,i=+i,i<0)throw Error(`negative radius: ${i}`);let a=this._x1,o=this._y1,s=n-e,c=r-t,l=a-e,u=o-t,d=l*l+u*u;if(this._x1===null)this._append`M${this._x1=e},${this._y1=t}`;else if(d>rM){if(!(Math.abs(u*s-c*l)>rM)||!i)this._append`L${this._x1=e},${this._y1=t}`;else{let f=n-a,p=r-o,m=s*s+c*c,h=f*f+p*p,g=Math.sqrt(m),_=Math.sqrt(d),v=i*Math.tan((tM-Math.acos((m+d-h)/(2*g*_)))/2),y=v/_,b=v/g;Math.abs(y-1)>rM&&this._append`L${e+y*l},${t+y*u}`,this._append`A${i},${i},0,0,${+(u*f>l*p)},${this._x1=e+b*s},${this._y1=t+b*c}`}}}arc(e,t,n,r,i,a){if(e=+e,t=+t,n=+n,a=!!a,n<0)throw Error(`negative radius: ${n}`);let o=n*Math.cos(r),s=n*Math.sin(r),c=e+o,l=t+s,u=1^a,d=a?r-i:i-r;this._x1===null?this._append`M${c},${l}`:(Math.abs(this._x1-c)>rM||Math.abs(this._y1-l)>rM)&&this._append`L${c},${l}`,n&&(d<0&&(d=d%nM+nM),d>iM?this._append`A${n},${n},0,1,${u},${e-o},${t-s}A${n},${n},0,1,${u},${this._x1=c},${this._y1=l}`:d>rM&&this._append`A${n},${n},0,${+(d>=tM)},${u},${this._x1=e+n*Math.cos(i)},${this._y1=t+n*Math.sin(i)}`)}rect(e,t,n,r){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}h${n=+n}v${+r}h${-n}Z`}toString(){return this._}};sM.prototype;function cM(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString(`en`).replace(/,/g,``):e.toString(10)}function lM(e,t){if(!isFinite(e)||e===0)return null;var n=(e=t?e.toExponential(t-1):e.toExponential()).indexOf(`e`),r=e.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+e.slice(n+1)]}function uM(e){return e=lM(Math.abs(e)),e?e[1]:NaN}function dM(e,t){return function(n,r){for(var i=n.length,a=[],o=0,s=e[0],c=0;i>0&&s>0&&(c+s+1>r&&(s=Math.max(1,r-c)),a.push(n.substring(i-=s,i+s)),!((c+=s+1)>r));)s=e[o=(o+1)%e.length];return a.reverse().join(t)}}function fM(e){return function(t){return t.replace(/[0-9]/g,function(t){return e[+t]})}}var pM=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function mM(e){if(!(t=pM.exec(e)))throw Error(`invalid format: `+e);var t;return new hM({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}mM.prototype=hM.prototype;function hM(e){this.fill=e.fill===void 0?` `:e.fill+``,this.align=e.align===void 0?`>`:e.align+``,this.sign=e.sign===void 0?`-`:e.sign+``,this.symbol=e.symbol===void 0?``:e.symbol+``,this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?``:e.type+``}hM.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?`0`:``)+(this.width===void 0?``:Math.max(1,this.width|0))+(this.comma?`,`:``)+(this.precision===void 0?``:`.`+Math.max(0,this.precision|0))+(this.trim?`~`:``)+this.type};function gM(e){out:for(var t=e.length,n=1,r=-1,i;n<t;++n)switch(e[n]){case`.`:r=i=n;break;case`0`:r===0&&(r=n),i=n;break;default:if(!+e[n])break out;r>0&&(r=0)}return r>0?e.slice(0,r)+e.slice(i+1):e}var _M;function vM(e,t){var n=lM(e,t);if(!n)return _M=void 0,e.toPrecision(t);var r=n[0],i=n[1],a=i-(_M=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,o=r.length;return a===o?r:a>o?r+Array(a-o+1).join(`0`):a>0?r.slice(0,a)+`.`+r.slice(a):`0.`+Array(1-a).join(`0`)+lM(e,Math.max(0,t+a-1))[0]}function yM(e,t){var n=lM(e,t);if(!n)return e+``;var r=n[0],i=n[1];return i<0?`0.`+Array(-i).join(`0`)+r:r.length>i+1?r.slice(0,i+1)+`.`+r.slice(i+1):r+Array(i-r.length+2).join(`0`)}var bM={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+``,d:cM,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>yM(e*100,t),r:yM,s:vM,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function xM(e){return e}var SM=Array.prototype.map,CM=[`y`,`z`,`a`,`f`,`p`,`n`,`µ`,`m`,``,`k`,`M`,`G`,`T`,`P`,`E`,`Z`,`Y`];function wM(e){var t=e.grouping===void 0||e.thousands===void 0?xM:dM(SM.call(e.grouping,Number),e.thousands+``),n=e.currency===void 0?``:e.currency[0]+``,r=e.currency===void 0?``:e.currency[1]+``,i=e.decimal===void 0?`.`:e.decimal+``,a=e.numerals===void 0?xM:fM(SM.call(e.numerals,String)),o=e.percent===void 0?`%`:e.percent+``,s=e.minus===void 0?`−`:e.minus+``,c=e.nan===void 0?`NaN`:e.nan+``;function l(e,l){e=mM(e);var u=e.fill,d=e.align,f=e.sign,p=e.symbol,m=e.zero,h=e.width,g=e.comma,_=e.precision,v=e.trim,y=e.type;y===`n`?(g=!0,y=`g`):bM[y]||(_===void 0&&(_=12),v=!0,y=`g`),(m||u===`0`&&d===`=`)&&(m=!0,u=`0`,d=`=`);var b=(l&&l.prefix!==void 0?l.prefix:``)+(p===`$`?n:p===`#`&&/[boxX]/.test(y)?`0`+y.toLowerCase():``),x=(p===`$`?r:/[%p]/.test(y)?o:``)+(l&&l.suffix!==void 0?l.suffix:``),S=bM[y],C=/[defgprs%]/.test(y);_=_===void 0?6:/[gprs]/.test(y)?Math.max(1,Math.min(21,_)):Math.max(0,Math.min(20,_));function w(e){var n=b,r=x,o,l,p;if(y===`c`)r=S(e)+r,e=``;else{e=+e;var w=e<0||1/e<0;if(e=isNaN(e)?c:S(Math.abs(e),_),v&&(e=gM(e)),w&&+e==0&&f!==`+`&&(w=!1),n=(w?f===`(`?f:s:f===`-`||f===`(`?``:f)+n,r=(y===`s`&&!isNaN(e)&&_M!==void 0?CM[8+_M/3]:``)+r+(w&&f===`(`?`)`:``),C){for(o=-1,l=e.length;++o<l;)if(p=e.charCodeAt(o),48>p||p>57){r=(p===46?i+e.slice(o+1):e.slice(o))+r,e=e.slice(0,o);break}}}g&&!m&&(e=t(e,1/0));var T=n.length+e.length+r.length,E=T<h?Array(h-T+1).join(u):``;switch(g&&m&&(e=t(E+e,E.length?h-r.length:1/0),E=``),d){case`<`:e=n+e+r+E;break;case`=`:e=n+E+e+r;break;case`^`:e=E.slice(0,T=E.length>>1)+n+e+r+E.slice(T);break;default:e=E+n+e+r}return a(e)}return w.toString=function(){return e+``},w}function u(e,t){var n=Math.max(-8,Math.min(8,Math.floor(uM(t)/3)))*3,r=10**-n,i=l((e=mM(e),e.type=`f`,e),{suffix:CM[8+n/3]});return function(e){return i(r*e)}}return{format:l,formatPrefix:u}}var TM,EM,DM;OM({thousands:`,`,grouping:[3],currency:[`$`,``]});function OM(e){return TM=wM(e),EM=TM.format,DM=TM.formatPrefix,TM}function kM(e){return Math.max(0,-uM(Math.abs(e)))}function AM(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(uM(t)/3)))*3-uM(Math.abs(e)))}function jM(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,uM(t)-uM(e))+1}function MM(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e)}return this}function NM(e){return function(){return e}}function PM(e){return+e}var FM=[0,1];function IM(e){return e}function LM(e,t){return(t-=e=+e)?function(n){return(n-e)/t}:NM(isNaN(t)?NaN:.5)}function RM(e,t){var n;return e>t&&(n=e,e=t,t=n),function(n){return Math.max(e,Math.min(t,n))}}function zM(e,t,n){var r=e[0],i=e[1],a=t[0],o=t[1];return i<r?(r=LM(i,r),a=n(o,a)):(r=LM(r,i),a=n(a,o)),function(e){return a(r(e))}}function BM(e,t,n){var r=Math.min(e.length,t.length)-1,i=Array(r),a=Array(r),o=-1;for(e[r]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++o<r;)i[o]=LM(e[o],e[o+1]),a[o]=n(t[o],t[o+1]);return function(t){var n=SE(e,t,1,r)-1;return a[n](i[n](t))}}function VM(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function HM(){var e=FM,t=FM,n=tA,r,i,a,o=IM,s,c,l;function u(){var n=Math.min(e.length,t.length);return o!==IM&&(o=RM(e[0],e[n-1])),s=n>2?BM:zM,c=l=null,d}function d(i){return i==null||isNaN(i=+i)?a:(c||=s(e.map(r),t,n))(r(o(i)))}return d.invert=function(n){return o(i((l||=s(t,e.map(r),Jk))(n)))},d.domain=function(t){return arguments.length?(e=Array.from(t,PM),u()):e.slice()},d.range=function(e){return arguments.length?(t=Array.from(e),u()):t.slice()},d.rangeRound=function(e){return t=Array.from(e),n=nA,u()},d.clamp=function(e){return arguments.length?(o=e?!0:IM,u()):o!==IM},d.interpolate=function(e){return arguments.length?(n=e,u()):n},d.unknown=function(e){return arguments.length?(a=e,d):a},function(e,t){return r=e,i=t,u()}}function UM(){return HM()(IM,IM)}function WM(e,t,n,r){var i=kE(e,t,n),a;switch(r=mM(r??`,f`),r.type){case`s`:var o=Math.max(Math.abs(e),Math.abs(t));return r.precision==null&&!isNaN(a=AM(i,o))&&(r.precision=a),DM(r,o);case``:case`e`:case`g`:case`p`:case`r`:r.precision==null&&!isNaN(a=jM(i,Math.max(Math.abs(e),Math.abs(t))))&&(r.precision=a-(r.type===`e`));break;case`f`:case`%`:r.precision==null&&!isNaN(a=kM(i))&&(r.precision=a-(r.type===`%`)*2)}return EM(r)}function GM(e){var t=e.domain;return e.ticks=function(e){var n=t();return DE(n[0],n[n.length-1],e??10)},e.tickFormat=function(e,n){var r=t();return WM(r[0],r[r.length-1],e??10,n)},e.nice=function(n){n??=10;var r=t(),i=0,a=r.length-1,o=r[i],s=r[a],c,l,u=10;for(s<o&&(l=o,o=s,s=l,l=i,i=a,a=l);u-->0;){if(l=OE(o,s,n),l===c)return r[i]=o,r[a]=s,t(r);if(l>0)o=Math.floor(o/l)*l,s=Math.ceil(s/l)*l;else if(l<0)o=Math.ceil(o*l)/l,s=Math.floor(s*l)/l;else break;c=l}return e},e}function KM(){var e=UM();return e.copy=function(){return VM(e,KM())},MM.apply(e,arguments),GM(e)}function Z(e){return function(){return e}}function qM(e){let t=3;return e.digits=function(n){if(!arguments.length)return t;if(n==null)t=null;else{let e=Math.floor(n);if(!(e>=0))throw RangeError(`invalid digits: ${n}`);t=e}return e},()=>new sM(t)}Array.prototype.slice;function JM(e){return typeof e==`object`&&`length`in e?e:Array.from(e)}function YM(e){this._context=e}YM.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:this._context.lineTo(e,t)}}};function XM(e){return new YM(e)}function ZM(e){return e[0]}function QM(e){return e[1]}function $M(e,t){var n=Z(!0),r=null,i=XM,a=null,o=qM(s);e=typeof e==`function`?e:e===void 0?ZM:Z(e),t=typeof t==`function`?t:t===void 0?QM:Z(t);function s(s){var c,l=(s=JM(s)).length,u,d=!1,f;for(r??(a=i(f=o())),c=0;c<=l;++c)!(c<l&&n(u=s[c],c,s))===d&&((d=!d)?a.lineStart():a.lineEnd()),d&&a.point(+e(u,c,s),+t(u,c,s));if(f)return a=null,f+``||null}return s.x=function(t){return arguments.length?(e=typeof t==`function`?t:Z(+t),s):e},s.y=function(e){return arguments.length?(t=typeof e==`function`?e:Z(+e),s):t},s.defined=function(e){return arguments.length?(n=typeof e==`function`?e:Z(!!e),s):n},s.curve=function(e){return arguments.length?(i=e,r!=null&&(a=i(r)),s):i},s.context=function(e){return arguments.length?(e==null?r=a=null:a=i(r=e),s):r},s}function eN(e,t,n){var r=null,i=Z(!0),a=null,o=XM,s=null,c=qM(l);e=typeof e==`function`?e:e===void 0?ZM:Z(+e),t=typeof t==`function`?t:Z(t===void 0?0:+t),n=typeof n==`function`?n:n===void 0?QM:Z(+n);function l(l){var u,d,f,p=(l=JM(l)).length,m,h=!1,g,_=Array(p),v=Array(p);for(a??(s=o(g=c())),u=0;u<=p;++u){if(!(u<p&&i(m=l[u],u,l))===h){if(h=!h)d=u,s.areaStart(),s.lineStart();else{for(s.lineEnd(),s.lineStart(),f=u-1;f>=d;--f)s.point(_[f],v[f]);s.lineEnd(),s.areaEnd()}}h&&(_[u]=+e(m,u,l),v[u]=+t(m,u,l),s.point(r?+r(m,u,l):_[u],n?+n(m,u,l):v[u]))}if(g)return s=null,g+``||null}function u(){return $M().defined(i).curve(o).context(a)}return l.x=function(t){return arguments.length?(e=typeof t==`function`?t:Z(+t),r=null,l):e},l.x0=function(t){return arguments.length?(e=typeof t==`function`?t:Z(+t),l):e},l.x1=function(e){return arguments.length?(r=e==null?null:typeof e==`function`?e:Z(+e),l):r},l.y=function(e){return arguments.length?(t=typeof e==`function`?e:Z(+e),n=null,l):t},l.y0=function(e){return arguments.length?(t=typeof e==`function`?e:Z(+e),l):t},l.y1=function(e){return arguments.length?(n=e==null?null:typeof e==`function`?e:Z(+e),l):n},l.lineX0=l.lineY0=function(){return u().x(e).y(t)},l.lineY1=function(){return u().x(e).y(n)},l.lineX1=function(){return u().x(r).y(t)},l.defined=function(e){return arguments.length?(i=typeof e==`function`?e:Z(!!e),l):i},l.curve=function(e){return arguments.length?(o=e,a!=null&&(s=o(a)),l):o},l.context=function(e){return arguments.length?(e==null?a=s=null:s=o(a=e),l):a},l}function tN(e){return e<0?-1:1}function nN(e,t,n){var r=e._x1-e._x0,i=t-e._x1,a=(e._y1-e._y0)/(r||i<0&&-0),o=(n-e._y1)/(i||r<0&&-0),s=(a*i+o*r)/(r+i);return(tN(a)+tN(o))*Math.min(Math.abs(a),Math.abs(o),.5*Math.abs(s))||0}function rN(e,t){var n=e._x1-e._x0;return n?(3*(e._y1-e._y0)/n-t)/2:t}function iN(e,t,n){var r=e._x0,i=e._y0,a=e._x1,o=e._y1,s=(a-r)/3;e._context.bezierCurveTo(r+s,i+s*t,a-s,o-s*n,a,o)}function aN(e){this._context=e}aN.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:iN(this,this._t0,rN(this,this._t0))}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){var n=NaN;if(e=+e,t=+t,e!==this._x1||t!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,iN(this,rN(this,n=nN(this,e,t)),n);break;default:iN(this,this._t0,n=nN(this,e,t))}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t,this._t0=n}}},Object.create(aN.prototype).point=function(e,t){aN.prototype.point.call(this,t,e)};function oN(e){return new aN(e)}function sN(e,t,n){this.k=e,this.x=t,this.y=n}sN.prototype={constructor:sN,scale:function(e){return e===1?this:new sN(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new sN(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return`translate(`+this.x+`,`+this.y+`) scale(`+this.k+`)`}};var cN=new sN(1,0,0);lN.prototype=sN.prototype;function lN(e){for(;!e.__zoom;)if(!(e=e.parentNode))return cN;return e.__zoom}var uN=1609.344,dN=e=>e/uN,fN=()=>ke()?[`#cde2fb`,`#86b6ef`,`#3987e5`,`#1c5cab`]:[`#0d366b`,`#1c5cab`,`#3987e5`,`#6da7ec`];function pN(e){let t=e.querySelector(`.viz-tooltip`);return t||(t=document.createElement(`div`),t.className=`viz-tooltip`,e.appendChild(t)),{show(n,r,i){t.innerHTML=n,t.classList.add(`visible`);let a=e.clientWidth,o=t.offsetWidth,s=r+14;s+o>a-4&&(s=r-o-14),t.style.left=`${Math.max(0,s)}px`,t.style.top=`${Math.max(0,i-10)}px`},hide(){t.classList.remove(`visible`)}}}function mN(e,{course:t,analysis:n}){let r=n.segments,i=n.groups,a=i.length,o=fN(),s=i.map((e,t)=>({key:e.key,label:e.label,short:e.short,color:o[t],values:n.profiles[e.key],extreme:t===0||t===a-1})),c={pinned:null,hover:null},l=()=>c.hover??c.pinned;e.innerHTML=``;let u=document.createElement(`div`);u.className=`chart-legend`,e.appendChild(u);let d=document.createElement(`div`);d.className=`chart`,e.appendChild(d);let f=pN(d),p=null,m=null;function h(e){let t=l();return t?t===e.key?{w:2.5,o:1}:{w:1.25,o:.2}:e.extreme?{w:2.25,o:1}:{w:1.5,o:.75}}function g(){p&&(p.attr(`stroke-width`,e=>h(e).w).attr(`stroke-opacity`,e=>h(e).o),m.style(`opacity`,e=>l()&&l()!==e.key?.35:1),u.querySelectorAll(`button[data-key]`).forEach(e=>e.setAttribute(`aria-pressed`,c.pinned===e.dataset.key)))}u.innerHTML=``;for(let e of s){let t=document.createElement(`button`);t.className=`key`,t.type=`button`,t.dataset.key=e.key,t.setAttribute(`aria-pressed`,`false`),t.title=`Highlight this group (click to pin)`,t.innerHTML=`<span class="ln" style="background:${e.color}"></span>${e.label}`,t.onmouseenter=()=>{c.hover=e.key,g()},t.onmouseleave=()=>{c.hover=null,g()},t.onfocus=t.onmouseenter,t.onblur=t.onmouseleave,t.onclick=()=>{c.pinned=c.pinned===e.key?null:e.key,g()},u.appendChild(t)}function _(){d.querySelector(`svg`)?.remove();let e=d.clientWidth||700,n=e<560,i={t:12,r:n?46:100,b:30,l:40},a=n?240:300,o=i.t+a+i.b,u=e-i.l-i.r,h=XO(d).append(`svg`).attr(`viewBox`,`0 0 ${e} ${o}`).attr(`role`,`img`).attr(`aria-label`,`Line chart of each finish-time group's pace in every mile, relative to its own average pace.`),_=KM().domain([0,26.2188]).range([0,u]),v=h.append(`g`).attr(`transform`,`translate(${i.l},${i.t})`),y=s.flatMap(e=>e.values).filter(e=>e!=null),b=Math.min(-8,Math.floor((jE(y)-1)*100/5)*5),x=Math.max(10,Math.ceil((AE(y)-1)*100/5)*5),S=KM().domain([b,x]).range([a,0]),C=[b,0,x].filter((e,t,n)=>n.indexOf(e)===t);v.append(`g`).attr(`class`,`viz-grid`).call(GE(S).tickValues(C).tickSize(-u).tickFormat(``)),v.append(`g`).attr(`class`,`viz-axis`).call(GE(S).tickValues(C).tickSize(0).tickPadding(6).tickFormat(e=>e>0?`+${e}%`:`${e}%`)),v.append(`line`).attr(`class`,`zero`).attr(`x1`,0).attr(`x2`,u).attr(`y1`,S(0)).attr(`y2`,S(0)),v.append(`g`).attr(`class`,`viz-axis`).attr(`transform`,`translate(0,${a})`).call(WE(_).tickValues([0,13.1,20,26.2]).tickSize(0).tickPadding(8).tickFormat(e=>e===0?`Start`:e===13.1?`Half`:e===26.2?`Finish`:`Mile ${e}`)),v.append(`text`).attr(`class`,`ylabel`).attr(`x`,4).attr(`y`,S(x)+13).text(`Slower than their average`),v.append(`text`).attr(`class`,`ylabel`).attr(`x`,4).attr(`y`,S(b)-6).text(`Faster`);let w=e=>r.map((t,n)=>({x:dN((t.from_m+t.to_m)/2),v:e.values[n],j:n})).filter(e=>e.v!=null),T=$M().x(e=>_(e.x)).y(e=>S((e.v-1)*100)).curve(oN),E=[...s.filter(e=>!e.extreme),...s.filter(e=>e.extreme)];p=v.append(`g`).selectAll(`path`).data(E).join(`path`).attr(`class`,`series`).attr(`stroke`,e=>e.color).attr(`d`,e=>T(w(e)));let D=_(w(s[0]).at(-1).x),O=s.map(e=>{let t=w(e).at(-1);return{s:e,y0:S((t.v-1)*100),y:S((t.v-1)*100)}}).sort((e,t)=>e.y0-t.y0);for(let e=1;e<O.length;e++)O[e].y=Math.max(O[e].y,O[e-1].y+15);let k=O.at(-1).y-(a-4);if(k>0)for(let e of O)e.y-=k;for(let e=O.length-2;e>=0;e--)O[e].y=Math.min(O[e].y,O[e+1].y-15);let A=u+16,j=v.append(`g`);j.selectAll(`path`).data(O).join(`path`).attr(`class`,`ann-line`).attr(`fill`,`none`).attr(`d`,e=>`M${D+3},${e.y0} C${D+10},${e.y0} ${A-10},${e.y} ${A-3},${e.y}`),m=j.selectAll(`g.lab`).data(O.map(e=>Object.assign(e.s,{ly:e.y}))).join(`g`).attr(`class`,`lab`).attr(`transform`,e=>`translate(${A},${e.ly})`),m.append(`rect`).attr(`x`,0).attr(`y`,-1).attr(`width`,10).attr(`height`,2).attr(`rx`,1).attr(`fill`,e=>e.color),m.append(`text`).attr(`class`,`end-label`).attr(`x`,14).attr(`y`,4).text(e=>n?e.short:e.label);let M=v.append(`line`).attr(`class`,`hover-line`).attr(`y1`,0).attr(`y2`,a).style(`opacity`,0),N=v.append(`g`);v.append(`rect`).attr(`width`,u).attr(`height`,a).attr(`fill`,`transparent`).on(`pointermove`,e=>{let[n,a]=QO(e),o=_.invert(n),s=r.findIndex(e=>dN(e.to_m)>=o);s<0&&(s=r.length-1);let u=r[s],d=_(dN((u.from_m+u.to_m)/2)),p=E.filter(e=>e.values[s]!=null),m=null,h=14;for(let e of p){let t=Math.abs(S((e.values[s]-1)*100)-a);t<h&&(h=t,m=e)}c.hover!==(m?.key??null)&&(c.hover=m?.key??null,g()),M.attr(`x1`,d).attr(`x2`,d).style(`opacity`,1),N.selectAll(`circle`).data(p).join(`circle`).attr(`class`,`hover-dot`).attr(`r`,4).attr(`cx`,d).attr(`cy`,e=>S((e.values[s]-1)*100)).attr(`fill`,e=>e.color).style(`opacity`,e=>l()&&l()!==e.key?.25:1);let v=p.map(e=>{let t=(e.values[s]-1)*100;return`<div><span class="swatch" style="background:${e.color}"></span>${e.label} <strong>${t>=0?`+`:`−`}${Math.abs(t).toFixed(1)}%</strong></div>`}).join(``),y=t.bridges.find(e=>e.from_m<u.to_m&&e.to_m>u.from_m);f.show(`<strong>${u.label}</strong>${y?`, ${y.name}`:``}${v}`,n+i.l,i.t+10)}).on(`pointerleave`,()=>{M.style(`opacity`,0),N.selectAll(`circle`).remove(),f.hide(),c.hover=null,g()}),g()}return _(),new ResizeObserver(()=>_()).observe(d),{redraw:_}}function hN(e,{course:t,analysis:n,paceColor:r,notes:i}){let a=n.segments,o=n.elev_effect,s=o.map(e=>e.rel.all),c=document.createElement(`div`);c.className=`chart`,e.innerHTML=``,e.appendChild(c);let l=pN(c),u=e=>{let t=r(1+e/100);return`rgb(${t[0]},${t[1]},${t[2]})`};function d(){c.querySelector(`svg`)?.remove();let e=c.clientWidth||700,r=e<560,d={t:24,r:12,b:30,l:40},f=r?80:104,p=r?190:220,m=d.t+f+18+p+d.b,h=e-d.l-d.r,g=XO(c).append(`svg`).attr(`viewBox`,`0 0 ${e} ${m}`).attr(`role`,`img`).attr(`aria-label`,`The course elevation profile, with the typical runner's pace in each mile, compared with their own average, beneath it.`),_=KM().domain([0,26.2188]).range([0,h]),v=g.append(`g`).attr(`transform`,`translate(${d.l},${d.t})`),y=n.hills;v.append(`g`).selectAll(`rect`).data(y).join(`rect`).attr(`class`,`hill-band`).attr(`x`,e=>_(e.from_mi)).attr(`width`,e=>Math.max(2,_(e.to_mi)-_(e.from_mi))).attr(`y`,0).attr(`height`,f+18+p);let b=t.pts.map((e,n)=>[n*t.step_m,e[2]*3.28084]),x=KM().domain([0,270]).range([f,0]),S=e=>t.pts[Math.min(t.pts.length-1,Math.round(e*uN/t.step_m))][2]*3.28084;v.append(`path`).attr(`class`,`elev-area`).attr(`d`,eN().x(e=>_(dN(e[0]))).y0(f).y1(e=>x(e[1]))(b)),v.append(`path`).attr(`class`,`elev-line`).attr(`d`,$M().x(e=>_(dN(e[0]))).y(e=>x(e[1]))(b)),v.append(`g`).attr(`class`,`viz-axis`).call(GE(x).tickValues([100,200]).tickSize(0).tickPadding(6).tickFormat(e=>`${e} ft`));let C=v.append(`g`).attr(`transform`,`translate(0,${f+18})`),w=Math.min(-8,Math.floor(jE(s)/4)*4),T=Math.max(12,Math.ceil(AE(s)/4)*4),E=KM().domain([w,T]).range([p,0]),D=[w,0,T];C.append(`g`).attr(`class`,`viz-grid`).call(GE(E).tickValues(D).tickSize(-h).tickFormat(``)),C.append(`g`).attr(`class`,`viz-axis`).call(GE(E).tickValues(D).tickSize(0).tickPadding(6).tickFormat(e=>e>0?`+${e}%`:`${e}%`)),C.append(`line`).attr(`class`,`zero`).attr(`x1`,0).attr(`x2`,h).attr(`y1`,E(0)).attr(`y2`,E(0)),C.append(`g`).attr(`class`,`viz-axis`).attr(`transform`,`translate(0,${p})`).call(WE(_).tickValues([0,13.1,20,26.2]).tickSize(0).tickPadding(8).tickFormat(e=>e===0?`Start`:e===13.1?`Half`:e===26.2?`Finish`:`Mile ${e}`)),C.append(`text`).attr(`class`,`ylabel`).attr(`x`,_(1.2)).attr(`y`,E(T)+13).text(`Slower than their average`);let O=a.map((e,t)=>({j:t,x0:dN(e.from_m),x1:dN(e.to_m),v:s[t]})).filter(e=>e.v!=null),k=``;O.forEach((e,t)=>{k+=`${t?`L`:`M`}${_(e.x0)},${E(e.v)}L${_(e.x1)},${E(e.v)}`}),C.append(`path`).attr(`class`,`step-line`).attr(`d`,k),C.append(`g`).selectAll(`line`).data(O).join(`line`).attr(`class`,`step-seg`).attr(`x1`,e=>_(e.x0)+1).attr(`x2`,e=>_(e.x1)-1).attr(`y1`,e=>E(e.v)).attr(`y2`,e=>E(e.v)).attr(`stroke`,e=>u(e.v));let A=i.filter(e=>!r||e.phone),j=v.append(`g`),M=[],N=e=>e[0]>=-d.l+2&&e[2]<=h+d.r-2&&e[1]>=-d.t+2&&M.every(t=>e[2]<t[0]||e[0]>t[2]||e[3]<t[1]||e[1]>t[3]);for(let e of A){let t,n;if(e.hill)t=_(e.hill.to_mi),n=x(S(e.hill.to_mi));else{let r=e.pace.map(e=>a.findIndex(t=>t.label===e));t=(_(dN(a[r[0]].from_m))+_(dN(a[r.at(-1)].to_m)))/2,n=f+18+E(Math.max(...r.map(e=>s[e])))}let i=j.append(`text`).attr(`class`,`ann`);i.text(r&&e.short?e.short:e.text);let o=i.node().getComputedTextLength?.()||e.text.length*6.5,c=[[-o/2,-10],[6,-10],[-o-6,-10],[6,-22],[-o-6,-22],[-o/2,-24],[-o/2,-38],[-o-6,-38]],l=c[0],u=null;for(let[e,r]of c){let i=[t+e-2,n+r-13+2,t+e+o+2,n+r+3];if(N(i)){l=[e,r],u=i;break}}u||=[t+l[0]-2,n+l[1]-13+2,t+l[0]+o+2,n+l[1]+3],M.push(u),i.attr(`x`,t+l[0]).attr(`y`,n+l[1]),j.insert(`line`,`text`).attr(`class`,`ann-line`).attr(`x1`,t).attr(`x2`,Math.min(Math.max(t,u[0]+2),u[2]-2)).attr(`y1`,n-2).attr(`y2`,u[3]-1),j.insert(`circle`,`text`).attr(`class`,`ann-dot`).attr(`cx`,t).attr(`cy`,n).attr(`r`,2.5)}let P=C.append(`line`).attr(`class`,`hover-line`).attr(`y1`,0).attr(`y2`,p).style(`opacity`,0);C.append(`rect`).attr(`y`,-(f+18)).attr(`width`,h).attr(`height`,p+f+18).attr(`fill`,`transparent`).on(`pointermove`,e=>{let[t]=QO(e),n=_.invert(t),r=a.findIndex(e=>dN(e.to_m)>=n);r<0&&(r=a.length-1);let i=o[r],s=_(dN((a[r].from_m+a[r].to_m)/2));P.attr(`x1`,s).attr(`x2`,s).style(`opacity`,1);let c=i.rel.all;l.show(`<strong>${i.label}</strong><br>Climb ${i.climb_ft} ft, descent ${i.descent_ft} ft<br>${Math.abs(c)<.5?`About their average`:`${Math.abs(c).toFixed(1)}% ${c>0?`slower`:`faster`} than their average`}`,t+d.l,d.t+10)}).on(`pointerleave`,()=>{P.style(`opacity`,0),l.hide()})}return d(),new ResizeObserver(()=>d()).observe(c),{redraw:d}}function gN(e,{analysis:t,paceColor:n}){let r=t.climbs,i=e=>{let t=e.segments.flatMap(e=>e.match(/\d+/g).map(Number)),n=Math.min(...t),r=Math.max(...t);return n===r?`mile ${n}`:`miles ${n}–${r}`},a=e=>Math.abs(e)<.5?`<1%`:`${e<0?`−`:``}${Math.abs(Math.round(e))}%`,o=r.filter(e=>e.measurable&&e.cost!=null).sort((e,t)=>t.cost-e.cost),s=r.filter(e=>!(e.measurable&&e.cost!=null)).sort((e,t)=>e.from_mi-t.from_mi),c=Math.min(0,...o.map(e=>e.cost)),l=Math.max(0,...o.map(e=>e.cost)),u=e=>(e-c)/(l-c)*100,d=u(0);e.innerHTML=``;let f=document.createElement(`div`);f.className=`chart climbs`;let p=document.createElement(`div`);p.className=`cl-row cl-head`,p.setAttribute(`aria-hidden`,`true`),p.innerHTML=`<span class="cl-label"></span><span class="cl-track"><span class="cl-plot">${c<0?`<span class="cl-dir left" style="right:${100-d}%">faster</span>`:``}<span class="cl-dir right" style="left:${d}%">slower</span></span></span>`,f.appendChild(p);let m=document.createElement(`ol`);m.className=`cl-list`;for(let e of[...o,...s]){let t=document.createElement(`li`);t.className=`cl-row`+(e.measurable&&e.cost!=null?``:` cl-short`);let n=`<span class="cl-label"><span class="cl-name">${e.name}</span> <span class="cl-meta">${i(e)} · ${e.climb_ft} ft</span></span>`,r;if(e.measurable&&e.cost!=null){let n=u(Math.min(0,e.cost)),o=u(Math.max(0,e.cost)),s=e.cost>=0?`<span class="cl-val" style="left:${o}%">${a(e.cost)}</span>`:`<span class="cl-val neg" style="right:${100-n}%">${a(e.cost)}</span>`;r=`<span class="cl-bar" style="left:${n}%;width:${Math.max(.6,o-n)}%"></span>${s}`,t.setAttribute(`aria-label`,`${e.name}, ${i(e)}, climbs ${e.climb_ft} feet: ${Math.abs(e.cost).toFixed(1)} percent ${e.cost>=0?`slower`:`faster`} than the nearby flat miles`)}else r=`<span class="cl-val cl-na" style="left:${d}%">too short to measure</span>`,t.setAttribute(`aria-label`,`${e.name}, ${i(e)}, climbs ${e.climb_ft} feet: too short to measure`);t.innerHTML=`${n}<span class="cl-track"><span class="cl-plot"><span class="cl-zero" style="left:${d}%"></span>${r}</span></span>`,m.appendChild(t)}f.appendChild(m),e.appendChild(f);let h=document.createElement(`span`);h.className=`cl-label`,h.style.cssText=`position:absolute;visibility:hidden;white-space:nowrap;left:0;top:0`,f.appendChild(h);let g=0;for(let e of m.querySelectorAll(`.cl-label`))h.innerHTML=e.innerHTML,g=Math.max(g,h.getBoundingClientRect().width);return h.remove(),g&&f.style.setProperty(`--cl-w`,`${Math.ceil(g)+2}px`),{redraw:()=>gN(e,{analysis:t,paceColor:n})}}var _N=`<svg class="sel-chev" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="m6 9 6 6 6-6" stroke-width="1.5" vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round"/></svg>`,vN=`<svg class="sel-check" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M20 6 9 17l-5-5" stroke-width="1.5" vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round"/></svg>`;function yN({options:e,value:t,label:n,onChange:r}){let i=t,a=-1,o=null,s=document.createElement(`div`);s.className=`sel-pop`,s.id=`sel-pop`,s.setAttribute(`role`,`listbox`),s.setAttribute(`tabindex`,`-1`),s.setAttribute(`aria-label`,n),s.hidden=!0,s.innerHTML=e.map((e,t)=>`<div class="sel-opt" role="option" id="sel-opt-${t}" data-value="${e.value}" aria-selected="false">${vN}<span>${e.label}</span></div>`).join(``),document.body.appendChild(s);let c=[...s.querySelectorAll(`.sel-opt`)],l=()=>[...document.querySelectorAll(`[data-sel]`)];function u(){let t=e.find(e=>e.value===i);for(let e of l())e.querySelector(`.sel-v`)||(e.innerHTML=`<span class="sel-v"></span>`),e.querySelector(`.sel-chev`)||e.insertAdjacentHTML(`beforeend`,_N),e.querySelector(`.sel-v`).textContent=t?.label??``,e.setAttribute(`aria-label`,`${n}: ${t?.label??``}`),e.setAttribute(`aria-haspopup`,`listbox`),e.setAttribute(`aria-controls`,`sel-pop`),e.hasAttribute(`aria-expanded`)||e.setAttribute(`aria-expanded`,`false`);c.forEach(e=>e.setAttribute(`aria-selected`,String(e.dataset.value===i)))}function d(e){a=Math.max(0,Math.min(c.length-1,e)),c.forEach((e,t)=>e.classList.toggle(`active`,t===a)),s.setAttribute(`aria-activedescendant`,c[a].id),c[a].scrollIntoView?.({block:`nearest`})}function f(){let e=o.getBoundingClientRect();s.style.minWidth=`${Math.max(120,e.width)}px`;let t=s.offsetHeight,n=s.offsetWidth,r=e.bottom+4+t<=innerHeight-8||e.top-4-t<8;s.dataset.side=r?`bottom`:`top`,s.style.top=`${r?e.bottom+4:e.top-4-t}px`,s.style.left=`${Math.max(8,Math.min(e.left,innerWidth-n-8))}px`}function p(t,{focusList:n=!0}={}){s.hidden||m({restore:!1}),o=t,s.hidden=!1,s.classList.toggle(`no-motion`,je()),f(),requestAnimationFrame(()=>s.classList.add(`open`)),t.setAttribute(`aria-expanded`,`true`),d(Math.max(0,e.findIndex(e=>e.value===i))),n&&s.focus({preventScroll:!0})}function m({restore:e=!0}={}){s.hidden||(s.classList.remove(`open`),s.hidden=!0,o?.setAttribute(`aria-expanded`,`false`),e&&o?.focus({preventScroll:!0}),o=null)}function h(t){let n=e[t].value;m(),n!==i&&(i=n,u(),r(n))}return document.addEventListener(`click`,e=>{let t=e.target.closest?.(`[data-sel]`);t&&(e.preventDefault(),o===t&&!s.hidden?m():p(t))}),document.addEventListener(`keydown`,e=>{let t=e.target.closest?.(`[data-sel]`);t&&[`Enter`,` `,`ArrowDown`,`ArrowUp`].includes(e.key)&&(e.preventDefault(),p(t),e.key===`ArrowUp`&&d(a-1))}),s.addEventListener(`keydown`,e=>{let t=e.key;if(t===`ArrowDown`)d(a+1);else if(t===`ArrowUp`)d(a-1);else if(t===`Home`)d(0);else if(t===`End`)d(c.length-1);else if(t===`Enter`||t===` `)h(a);else if(t===`Escape`)m();else if(t===`Tab`){m();return}else return;e.preventDefault()}),s.addEventListener(`pointermove`,e=>{let t=e.target.closest(`.sel-opt`);t&&d(c.indexOf(t))}),s.addEventListener(`click`,e=>{let t=e.target.closest(`.sel-opt`);t&&h(c.indexOf(t))}),document.addEventListener(`pointerdown`,e=>{if(s.hidden||s.contains(e.target)||e.target.closest?.(`[data-sel]`)===o)return;let t=o;m(),e.target.closest?.(`[data-sel], a, button, input, select, textarea`)||setTimeout(()=>t?.focus({preventScroll:!0}),0)},!0),addEventListener(`resize`,()=>m({restore:!1})),addEventListener(`scroll`,()=>{!s.hidden&&o&&f()},{passive:!0}),u(),{set(e){i=e,u()},paint:u}}var Q=1609.344,bN=2100,xN={overview:{fit:[0,42195],pitch:45,bearing:-12,fill:.97,mobile:{pitch:40,bearing:-22}},field:{fit:[0,42195],pitch:50,bearing:-12,fill:.95,mobile:{pitch:42,bearing:-22}},finish:{fit:[41500,42195],pts:[[-73.97525,40.77458]],pitch:52,bearing:-64,fill:.9,mobile:{pitch:50,bearing:-64,fill:.9}}},SN={intro:{mode:`overview`,cam:`overview`,labels:[`boroughs`,`bridges-short`,`ends`],runners:!0,legend:`dots`,atStart:!0},leaders:{mode:`field`,cam:`field`,follow:`leaders`,labels:[`boroughs`,`bridges-short`,`leaders`],runners:!0,legend:`dots`},handoff:{mode:`field`,cam:`field`,path:!0,labels:[`boroughs`,`leaders`],runners:!0,legend:`dots`},tail:{mode:`field`,cam:`field`,follow:`tail`,labels:[`leaders`,`tail-ends`],runners:!0,legend:`dots`,tail:!0},end:{mode:`finale`,cam:`finish`,labels:[`ends`,`leaders`],runners:!0,legend:`none`}},CN={mode:`chase`,labels:[`route`,`miles`],runners:!0,legend:`none`},wN=200,TN=78271.517,EN=110540,DN=111320*Math.cos(40.72*Math.PI/180),ON=new URLSearchParams(location.search),kN=ON.get(`still`);(ON.get(`theme`)===`light`||ON.get(`theme`)===`dark`)&&(document.documentElement.dataset.theme=ON.get(`theme`)),kN&&document.documentElement.classList.add(`still`);var $=document.documentElement.dataset,AN=parseInt(ON.get(`step`),10),jN=(e,t)=>(e*60+t-515)*60,MN={firstave:{chase:17.6*Q,cohort:16200,zoomAdd:.6,bigDots:!0},queensboro:{mode:`overview`,clock:jN(12,15),bigDots:!0,view:{longitude:-73.955,latitude:40.762,zoom:14.7,pitch:57,bearing:-76}},manhattan:{mode:`field`,clock:jN(12,45),bigDots:!0,cam:{fit:[6.5*Q,22.3*Q],pitch:58,bearing:-42,fill:1,full:!0}}};function NN(e,t){let n=e.facts,r=(e,t)=>{e||console.warn(`[copy check] ${t}`)},i=t.bridges.find(e=>e.short===`Verrazzano`),a=e.tracked,o=n.n_splits,s=n.n_official,c=(n.crawl_coverage??o/s)>=.99,l=Object.fromEntries(e.tail.map(e=>[e.hour,e])),u=a.last.start+a.last.net,d=Math.floor(a.last.net/3600),f=Math.floor(a.last.net%3600/60);r(t.pts.every(e=>e[2]<=i.peak_ft/3.28084+1),`the Verrazzano crest is not the highest point of the course`),r(n.last_finish_net===H.hms(a.last.net),`tracked last finisher is not the last finisher`),r(Math.abs(u-(e.anim.last_finish??u))<60,`tracked last finisher does not cross last on the race clock`);let p=a.win_m.start+a.win_m.net;r(p>3900,`men's winner finishes before the first race-clock card starts`);let m=n.last_at_mwin;r(m&&m.started&&m.mi>0&&m.mi<26.2,`the last finisher had not started (or had finished) when the men's winner finished`),r(m&&Math.abs(m.remaining_s-(u-p))<60,`last finisher's remaining time does not match the race clock`),r(m&&/^(in|on) /.test(m.place),`no place for the last finisher at the men's winner's finish`);let h=Math.round((m?.remaining_s??0)/60);for(let t=1;t<e.tail.length;t++)r(e.tail[t].n<e.tail[t-1].n,`runners on the course did not fall hour by hour`);r(l[18].max_mi>=26.1,`at 6 p.m. the remaining field did not reach the finish ("the last N miles")`);let g=Object.fromEntries(e.pos_split.map(e=>[e.key,e])),_=e.groups.map(e=>e.key);r(Math.abs(n.pct_positive_split-g.all.share)<.001,`the positive-split share differs between facts and pos_split`),r(Math.abs(n.median_loss_min-g.all.median_diff_s/60)<.2&&n.median_loss_min>0,`the median second-half loss differs between facts and pos_split`);let v=e.profiles.all;r(e.segments.map(e=>e.label)[0]===`Miles 1–3`&&v[0]<1,`the first split is not miles 1–3, or it was not faster than average`);let y=(t,n)=>e.elev_effect.filter(e=>{let r=+(e.label.match(/(\d+)$/)||[])[1];return r>=t&&r<=n}).map(e=>e.rel.all),b=y(3,13),x=y(14,19),S=y(20,26);r(b.length===11&&x.length===6&&S.length===7,`the arc sentence's mile ranges are missing splits`),r(b.every(e=>e<0)&&S.every(e=>e>0),`not every mile through 13 was fast, or not every mile from 20 to 26 was slow`);let C=e=>[Math.round(Math.min(...e.map(Math.abs))),Math.round(Math.max(...e.map(Math.abs)))],[w,T]=C(b),[E,D]=C(S),O=Math.max(...x.map(Math.abs));r(O<Math.min(...b.map(Math.abs),...S.map(Math.abs))+1,`miles 14–19 are not the steady stretch between the fast start and the slow finish`);let k=`Runners ran the first 13 miles ${w} to ${T} percent faster than their average pace, stayed within about ${Math.round(O)} percent of it through mile 19, and ran every mile from 20 to 26 slower, by ${E} to ${D} percent.`,A=e.climb_halves,j=(A.second_ft-A.first_ft)/Math.min(A.first_ft,A.second_ft),M=Math.abs(j)<=.05?`The two halves of the course climb about the same, about ${Math.round(A.first_ft/10)*10} feet in the first and ${Math.round(A.second_ft/10)*10} in the second.`:`The ${j>0?`second`:`first`} half of the course climbs more, about ${Math.round(Math.max(A.first_ft,A.second_ft)/10)*10} feet against ${Math.round(Math.min(A.first_ft,A.second_ft)/10)*10} in the ${j>0?`first`:`second`}.`;r(_.every(e=>g[e].median_diff_s>0&&g[e].share>.5),`not every group ran the second half slower`),r(_.every((e,t)=>!t||g[e].median_pct>g[_[t-1]].median_pct),`slower groups did not slow more (median % between the halves)`);let N=Object.fromEntries(e.elev_effect.map(e=>[e.label,e])),P=Object.fromEntries(e.hills.map(e=>[e.name,e])),F=P.Verrazzano,I=P.Queensboro,L=P[`Fifth Avenue`],ee=[`Mile 21`,`Mile 22`,`Mile 23`].map(e=>N[e]);r(F.to_mi<=3,`the Verrazzano climb is not inside miles 1–3`),r(I.from_mi<15&&I.to_mi>15&&I.to_mi<=16&&I.segments.join()===`Mile 15,Mile 16`,`the Queensboro climb does not span split miles 15 and 16`),r(L.to_mi<=24&&(L.to_mi-Math.max(23,L.from_mi))/(L.to_mi-L.from_mi)>.6,`the Fifth Avenue climb is not mostly in split mile 24`),r(F.climb_ft>I.climb_ft&&F.climb_ft>L.climb_ft,`the Verrazzano is not the biggest climb`),r(F.excess.all<I.excess.all&&F.excess.all<L.excess.all,`the Verrazzano climb did not cost less than the Queensboro and Fifth Avenue`),r(ee.every(e=>e.flat&&e.rel.all>=5),`miles 21–23 are not flat and slow`),r(F.baseline.join()===`Mile 4,Mile 5`&&F.baseline.every(e=>N[e].flat),`the Verrazzano is not compared with the flat miles 4 and 5`),r(I.baseline.join()===`Mile 13,Mile 14`&&L.baseline.join()===`Mile 22,Mile 23`,`the Queensboro and Fifth Avenue are not compared with the two miles before them`);let te=[F,I].flatMap(e=>e.segments.map(e=>N[e].rel.all));r(ee.every(e=>e.rel.all>Math.max(...te)),`the flat miles 21–23 were not slower than the Verrazzano and Queensboro miles`);let ne=n.median_finish_s/(t.length_m/Q),R=[I,L].reduce((e,t)=>e+t.excess.all/100*t.segments.length*ne,0);r(I.from_mi>13.1&&L.from_mi>13.1,`the Queensboro or Fifth Avenue climb is not in the second half`);let re=R<45?`${Math.round(R/5)*5} seconds`:R<80?`a minute`:R<100?`a minute and a half`:`${Math.round(R/60)} minutes`;r(R<.25*n.median_loss_min*60,`the second-half climbs are more than a quarter of the second half's extra time ("Not mostly")`);let ie=e.climbs,ae=ie.filter(e=>e.measurable&&e.cost!=null),oe=ae.reduce((e,t)=>t.cost>e.cost?t:e,ae[0]),se=Object.fromEntries(ie.map(e=>[e.name,e])),ce=[...ae].sort((e,t)=>t.cost-e.cost).map(e=>e.name);r(ce[0]===`Fifth Avenue`&&ce[1]===`Queensboro Bridge`,`the costliest climbs are ${ce.slice(0,2).join(` and `)}, not Fifth Avenue and the Queensboro`),r(ie.every(e=>e.climb_ft<=se[`Verrazzano-Narrows Bridge`].climb_ft),`the Verrazzano is not the biggest climb on the course`),r(L.from_mi>=22.5,`the Fifth Avenue climb does not come after 23 miles`),r(se[`Verrazzano-Narrows Bridge`]?.cost===F.excess.all&&se[`Queensboro Bridge`]?.cost===I.excess.all&&se[`Fifth Avenue`]?.cost===L.excess.all,`the climbs chart and the elevation chart disagree on the big three`);for(let e of[`Verrazzano-Narrows Bridge`,`Pulaski Bridge`,`Queensboro Bridge`,`Willis Avenue Bridge`,`Madison Avenue Bridge`,`Fifth Avenue`])r(se[e],`the climbs chart has no ${e}`);r(ie.every(e=>e.measurable===(e.cost!=null)),`a climb has a cost but is marked too short to measure (or the reverse)`);let le=se[`Central Park South`],z=le&&le.measurable&&le.cost<0&&le.segments.join()===`Mile 26`&&le.baseline.join()===`Mile 23`&&N[`Mile 26`].rel.all<N[`Mile 25`].rel.all;r(!le||z,`Central Park South: not mile 26 vs mile 23, or not run faster`);let ue=ie.filter(e=>!e.measurable);r(ue.every(e=>e.bridge),`a climb too short to measure is not a bridge (the sentence names bridges)`),r(n.slowest_segment===`Mile 24`,`the slowest mile is ${n.slowest_segment}, not mile 24`);let de=e=>String(Math.round(e/10)*10),fe=e.tail.filter(e=>e.per_dot>1),pe=e=>e.length<2?e.join(``):`${e.slice(0,-1).join(`, `)} and ${e[e.length-1]}`;return{n_official:H.int(s),list_phrase:n.n_finishers===s?`, which list all ${H.int(s)} finishers. Counts on the race clock use that list`:`. The official count is ${H.int(s)} finishers; the results list has ${H.int(n.n_finishers)} of them, and the counts on the race clock use that list`,n_splits:H.int(o),n_interp:H.int(e.anim.n_interpolated??0),splits_phrase:c?`the ${H.int(o)} finishers with complete records`:`a random sample of ${H.int(o)} finishers`,win_m_clock:n.win_m_clock,not_started_at_mwin:H.int(n.not_started_at_mwin),win_pace:H.ms(a.win_m.net/42195*Q),last_pace:H.ms(a.last.net/42195*Q),last_dur:`${d} hours and ${f} minutes`,last_split:String(a.last.last_split_mi).replace(/\.0$/,``),last_finish_clock:n.last_finish_clock,pos_split_pct:String(Math.round(n.pct_positive_split*100)),median_loss:String(Math.round(n.median_loss_min)),halves_sentence:M,arc_sentence:k,hills_lead:R<.25*n.median_loss_min*60?`Not mostly.`:`Partly.`,climbs2_cost:re,fifth_climb:de(L.climb_ft),vz_climb:de(F.climb_ft),vz_excess:String(Math.round(F.excess.all)),qb_excess:String(Math.round(I.excess.all)),fifth_excess:String(Math.round(L.excess.all)),climbs_title:`The climb ${oe.name===`Fifth Avenue`?`up Fifth Avenue`:`over the ${oe.name}`} cost runners the most.`,cps_sentence:z?`Runners sped up near the finish, and ran mile 26, with its rise along Central Park South, faster than mile 23.`:``,short_sentence:ue.length?`The ${pe(ue.map(e=>e.name.replace(/ Bridge$/,``)))} ${ue.length>1?`bridges are`:`Bridge is`} too short for the split times to measure.`:``,m21_23:String(Math.round(ee.reduce((e,t)=>e+t.rel.all,0)/3)),last_at_mi:m?m.mi.toFixed(1):``,last_at_place:m?.place??``,last_at_left:`${Math.floor(h/60)} hours and ${h%60} minutes`,tail_n6:H.int(l[18].n),tail_span6:(t.length_m/Q-l[18].min_mi).toFixed(1),tail_sampled:fe.length&&$.layout!==`stack`?` In the chart of the end of the race, a dot stands for about ${pe(fe.map((e,t)=>`${Math.round(e.per_dot)}${t?``:` runners`} at ${e.label}`))}`.replace(/\.?$/,`.`):``}}function PN(e){document.querySelectorAll(`[data-f]`).forEach(t=>{let n=e[t.dataset.f];n!=null&&(t.textContent=n)})}function FN(e){let t=Math.round(e)+30900,n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=n<12?`a.m.`:`p.m.`;return`${n<=12?n:n-12}:${String(r).padStart(2,`0`)} ${i}`}var IN=null,LN=[];function RN(e,{tracked:t,runners:n,scene:r,compact:i=!1}){let a=n,o=a.K,s=42195,c=i?{lab1:10,strip:20,axis:33,tick:46,h:48}:{lab1:11,lab2:27,top:32,strip:36,axis:70,tick:83,lab3:99,h:103},l={win_m:`Men`,win_w:`Women`,last:`Last`},u=268,d,f=[],p={},m={},h={},g=2e3,_=(t,n,r=e)=>{let i=document.createElementNS(`http://www.w3.org/2000/svg`,t);for(let e in n)i.setAttribute(e,n[e]);return r.appendChild(i),i},v=e=>1+Math.min(s,Math.max(0,e))/s*(u-2),y=(e,t)=>{let n=t-e.start;if(n<0)return`start`;if(n>=e.times[e.times.length-1])return`done`;let r=0;for(;r<o-1&&n>=e.times[r];)r++;let i=r?e.times[r-1]:0,s=r?a.cpm[r-1]:0;return s+(n-i)/Math.max(1,e.times[r]-i)*(a.cpm[r]-s)};function b(){e.innerHTML=``;let n=e.parentElement,a=getComputedStyle(n);u=Math.max(i?120:200,Math.round(n.clientWidth-parseFloat(a.paddingLeft)-parseFloat(a.paddingRight))),e.setAttribute(`viewBox`,`0 0 ${u} ${c.h}`),e.setAttribute(`width`,u),e.setAttribute(`height`,c.h),d=_(`path`,{class:`rh-bars`}),_(`line`,{class:`rh-axis`,x1:0,x2:u,y1:c.axis+.5,y2:c.axis+.5}),f=[[0,`Start`,`start`],[21097.5,`13.1`,`middle`],[s,`Finish`,`end`]].map(([e,t,n])=>{let r=_(`text`,{class:`rh-tick`,x:v(e),y:c.tick,"text-anchor":n});return r.textContent=t,r});for(let e of t)h[e.key]=_(`line`,{class:`rh-leader`}),p[e.key]=_(`circle`,{class:e.key===`last`?`rh-mark hollow`:`rh-mark`,r:3.5,cy:c.axis}),m[e.key]=_(`text`,{class:`rh-label`,y:i||e.key===`win_m`?c.lab1:e.key===`win_w`?c.lab2:c.lab3});S(r,!0)}let x=``;function S(e,n=!1){if(!d)return;let r=e.hist,a=``,o=(u-2)/r.length*.82;for(let e=0;e<r.length;e++){if(!r[e])continue;let t=Math.max(1,Math.sqrt(Math.min(1,r[e]/g))*c.strip);a+=`M${(v(e*400)+.2).toFixed(1)},${c.axis}h${o.toFixed(1)}v${(-t).toFixed(1)}h${(-o).toFixed(1)}z`}(n||a!==x)&&(d.setAttribute(`d`,a),x=a);let _={};for(let n of t){let t=y(n,e.clock),r=t===`start`?0:t===`done`?s:t,a=i?l[n.key]:t===`done`?`${n.label}, finished ${H.hms(n.net)}`:t===`start`?`${n.label}, not started`:`${n.label}, mile ${(r/Q).toFixed(1)}`,o=m[n.key];o.textContent!==a&&(o.textContent=a);let c=o.getComputedTextLength?.()??a.length*6;_[n.key]={px:v(r),tw:c},p[n.key].setAttribute(`cx`,v(r))}if(i){let e=[`win_m`,`win_w`,`last`].sort((e,t)=>_[e].px-_[t].px),t=[];for(let n of e){let e=t.at(-1);e&&Math.abs(_[n].px-_[e[0]].px)<3?e.push(n):t.push([n])}let n=-1/0,r=t.map(e=>{let t=e.map(e=>l[e]).join(`, `);m[e[0]].textContent=t,e.slice(1).forEach(e=>{m[e].textContent=``});let r=m[e[0]].getComputedTextLength?.()??t.length*6,i=Math.max(n+6,Math.min(u-r,_[e[0]].px-r/2));return n=i+r,{g:e,x0:i,tw:r}}),i=u;for(let e=r.length-1;e>=0;e--)r[e].x0=Math.min(r[e].x0,i-r[e].tw),i=r[e].x0-6;for(let{g:e,x0:t}of r){let n=m[e[0]];n.setAttribute(`x`,Math.max(0,t)),n.setAttribute(`text-anchor`,`start`);for(let t of e){let n=h[t],r=_[t].px;n.setAttribute(`x1`,r),n.setAttribute(`x2`,r),n.setAttribute(`y1`,c.lab1+3),n.setAttribute(`y2`,c.axis-4),n.style.opacity=+(t===e[0])}}return}let b=e=>[Math.max(0,e.px-e.tw+2),Math.max(0,Math.min(u-e.tw,e.px-2))],S=(e,t=null)=>{let[n,r]=b(e);return[r,n,...t==null?[]:[t+3,t-e.tw-3]].map(e=>Math.min(r,Math.max(n,e))).find(n=>t==null||t<n-1||t>n+e.tw+1||Math.abs(t-e.px)<3)},C=null;for(let[e,t]of[[`win_m`,`win_w`],[`win_w`,`win_m`]]){let n=S(_[t],_[e].px);if(n!=null){C={up:e,low:t,xu:S(_[e]),xl:n};break}}C??={up:`win_m`,low:`win_w`,xu:S(_.win_m),xl:S(_.win_w)};let w=(e,t,n)=>{let r=_[e],i=m[e],a=h[e];i.setAttribute(`y`,t),i.setAttribute(`x`,n),i.setAttribute(`text-anchor`,`start`);let o=t<c.axis;a.setAttribute(`x1`,r.px),a.setAttribute(`x2`,r.px),a.setAttribute(`y1`,o?t+3:t-10),a.setAttribute(`y2`,o?c.axis-4:c.axis+4)};w(C.up,c.lab1,C.xu),w(C.low,c.lab2,C.xl),h[C.up].style.opacity=Math.abs(_[C.up].px-_[C.low].px)<3?0:1;let T=_.last;w(`last`,c.lab3,S(T));let E=f.map(e=>e.getBBox?.()??null);f.forEach((e,t)=>{let n=E[t];e.style.opacity=n&&T.px>n.x-3&&T.px<n.x+n.width+3?0:1})}let C=window.requestIdleCallback??(e=>setTimeout(e,200)),w=e=>{g=e,x=``,S(r,!0)};return IN==null?LN.push(w)===1&&C(()=>{let e=new Uint32Array(107),t=0;for(let n=0;n<50400;n+=300){e.fill(0);for(let t=0;t<a.n;t+=2){let r=n-a.start[t],i=t*o;if(r<0||r>=a.times[i+o-1])continue;let s=0;for(;s<o-1&&r>=a.times[i+s];)s++;let c=s?a.times[i+s-1]:0,l=s?a.cpm[s-1]:0;e[Math.floor((l+(r-c)/Math.max(1,a.times[i+s]-c)*(a.cpm[s]-l))/400)]+=2}for(let n of e)n>t&&(t=n)}IN=Math.max(500,t),LN.splice(0).forEach(e=>e(IN))}):C(()=>w(IN)),b(),addEventListener(`resize`,b),{update:S,build:b}}async function zN(){let e=document.getElementById(`scene`),[t,n,r,i,a]=await Promise.all([Ee(`marathon/course.json`),Ee(`marathon/analysis.json`),De(`marathon/runners.bin`),Ee(`marathon/land.geojson`),Ee(`marathon/boroughs.geojson`)]),o=n.facts,s=n.anim.n,c=n.anim.checkpoints_m.length,l={n:s,K:c,start:new Uint16Array(r,0,s),times:new Uint16Array(r,2*s,s*c),group:new Uint8Array(r,2*s+2*s*c,s),cpm:Float64Array.from(n.anim.checkpoints_m)},u=n.cohorts,d=Math.max(0,u.findIndex(e=>e.target===16200)),f=u[d].pacer,p=u[d].pacer_net;hE(n);let m=n.segments,h=document.getElementById(`hud-wrap`),g=document.getElementById(`course-wrap`),_=document.querySelector(`#hud .rh-time`),v=document.querySelector(`#hud .rh-counts`),y=n.clock_series,b=y.finished[y.finished.length-1],x=1/0,S=document.querySelector(`#course-hud .ch-mile`),C=document.querySelector(`#course-hud .ch-place`),w=document.querySelector(`#course-hud .ch-pace`),T=Object.fromEntries(t.bridges.map(e=>[e.short,e])),E=(e,t)=>{let n=!1,r=LT;for(let i=0,a=r.length-1;i<r.length;a=i++)r[i][1]>t!=r[a][1]>t&&e<(r[a][0]-r[i][0])*(t-r[i][1])/(r[a][1]-r[i][1])+r[i][0]&&(n=!n);return n};function D(e){for(let n of t.bridges)if(e>=n.water_from_m-150&&e<=n.water_to_m+150)return n.name;if(e<T.Verrazzano.water_from_m)return`Staten Island`;if(e<T.Pulaski.water_from_m)return`Brooklyn`;if(e<T.Queensboro.water_from_m)return`Queens`;if(e<T[`Willis Ave.`].water_from_m)return e>16.35*Q?`First Avenue, Manhattan`:`Manhattan`;if(e<T[`Madison Ave.`].water_from_m)return`The Bronx`;let n=Math.min(t.pts.length-1,Math.round(e/t.step_m)),[r,i]=t.pts[n];return E(r,i)?`Central Park`:i<40.7685&&e>25*Q?`Central Park South`:e>21.2*Q?`Fifth Avenue, Manhattan`:`Manhattan`}$.layout===`stack`&&document.querySelector(`.tail-chart`)?.remove();let O=document.querySelector(`.tail-chart`);function k(){if(!O)return;let e=n.tail,t=Math.max(260,O.clientWidth||320),r=4+e.length*18+20,i=Math.floor(Math.min(...e.map(e=>e.min_mi))-.5),a=26.2188,o=e=>46+(e-i)/(a-i)*(t-46-46),s=`<svg viewBox="0 0 ${t} ${r}" width="100%" role="img" aria-label="Positions of the runners still on the course at each hour from 4 to 9 p.m.">`;for(let t of[15,20])t>i&&(s+=`<line class="tc-grid" x1="${o(t)}" x2="${o(t)}" y1="4" y2="${4+e.length*18}"/><text class="tc-tick" x="${o(t)}" y="${r-4}" text-anchor="middle">Mile ${t}</text>`);s+=`<text class="tc-tick" x="${o(a)}" y="${r-4}" text-anchor="end">Finish</text>`,e.forEach((e,n)=>{let r=4+n*18+9;s+=`<g class="tc-row" data-hour="${e.hour}"><text class="tc-lbl" x="0" y="${r+4}">${e.label}</text>`;let i=e.pos.length>600?.25:e.pos.length>100?.5:.85;for(let t of e.pos)s+=`<circle cx="${o(t).toFixed(1)}" cy="${r}" r="1.6" fill-opacity="${i}"/>`;s+=`<text class="tc-n" x="${t}" y="${r+4}" text-anchor="end">${H.int(e.n)}</text></g>`}),O.innerHTML=s+`</svg><figcaption>Runners still on the course at each hour, and how many</figcaption>`}k(),addEventListener(`resize`,k);let A=null;function j(e){if(!O)return;let t=Math.floor((e+28800+2100)/3600);t!==A&&(A=t,O.querySelectorAll(`.tc-row`).forEach(e=>e.classList.toggle(`now`,+e.dataset.hour===t)))}let M=null,N=null,P=null,F=null,I=``,L=e.querySelector(`.cs-text`),ee=e.querySelector(`.cl-text`),te=(e,t)=>{e&&e.textContent!==t&&(e.textContent=t)},ne=e=>{if(e.mode===`chase`){let t=e.chaseD,n=t<30?`Start`:`Mile ${(t/Q).toFixed(1)}`,r=$.hud===`current`?n:`${n}, ${D(t).replace(/, Manhattan$/,``)}`,i=$.hud===`current`?D(t):``;if(S.textContent!==r&&(S.textContent=r),C.textContent!==i&&(C.textContent=i),e.pacerRel!=null){let t=e.pacerSeg??0,n=f*c,r=(l.times[n+t]-(t?l.times[n+t-1]:0))/(l.cpm[t]-(t?l.cpm[t-1]:0))*Q,i=e.paceColor(e.pacerRel),a=H.ms(p/42195*Q),o=`${$.hud}|${t}|${Math.round(r)}|${p}|${i.join()}`;if(o!==I){if(I=o,$.hud===`current`)w.innerHTML=`<span class="swatch" style="background:rgb(${i[0]},${i[1]},${i[2]})"></span>${t===0?`Miles 1 to 3`:`This mile`} ${H.ms(r)}/mi · Race average ${a}/mi`;else if($.layout===`stack`){let t=Math.round((e.pacerRel-1)*100),n=t===0?`even`:`${Math.abs(t)}% ${t>0?`slower`:`faster`}`;w.innerHTML=`${H.ms(r)}/mi, <span class="chip" style="--c:rgb(${i[0]},${i[1]},${i[2]})">${n}</span> ${t===0?`with`:`than`} their ${a} average`}else{let n=Math.round((e.pacerRel-1)*100),o=n===0?`even`:`${Math.abs(n)}% ${n>0?`slower`:`faster`}`;w.innerHTML=`${H.ms(r)}/mi ${t===0?`in miles 1 to 3`:`this mile`}, <span class="chip" style="--c:rgb(${i[0]},${i[1]},${i[2]})">${o}</span> ${n===0?`with`:`than`} their ${a} average`}}}if(M?.update(t),P?.update(t),e.pacerRel!=null&&($.layout===`strip`||$.layout===`inline`)){let t=e.pacerSeg??0,r=f*c,i=(l.times[r+t]-(t?l.times[r+t-1]:0))/(l.cpm[t]-(t?l.cpm[t-1]:0))*Q,a=Math.round((e.pacerRel-1)*100),o=a===0?`about even`:`${Math.abs(a)}% ${a>0?`slower`:`faster`}`;$.layout===`strip`?te(L,`${n} · ${H.ms(i)}/mi · ${o}`):te(ee,`${n} · ${H.ms(i)}/mi, ${a===0?`about their average`:`${o} than average`}`)}}else{let t=Math.max(0,Math.min(y.waiting.length-1,Math.round(e.clock/y.step))),n=y.waiting[t],r=y.finished[t],i=e.clock>=x,a=i?0:Math.max(0,b-n-r),s=i?Math.max(o.n_official,r):r,c=FN(e.clock),l=[a?`${H.int(a)} running`:``,n?`${H.int(n)} yet to start`:``,s?`${H.int(s)} finished`:`none finished yet`].filter(Boolean).join(` · `),u=[a?`${H.int(a)} running`:``,n?`${H.int(n)} yet to start`:``,s?`${H.int(s)} finished`:``].filter(Boolean).join(` · `);te(_,c),te(v,$.layout===`stack`?u:l),$.layout===`strip`&&te(L,`${c} · ${a?`${H.int(a)} running`:`${H.int(s)} finished`}`),$.layout===`inline`&&te(ee,`${c} · ${u}`),N?.update(e),F?.update(e),j(e.clock)}},R=new QT(e,{course:t,runners:l,basemap:{region:i,boroughs:a},onFrame:ne});R.segments=m,R.pacer=f;let re=n.tracked,ie=[{key:`win_m`,label:`Men’s winner`,...re.win_m},{key:`win_w`,label:`Women’s winner`,...re.win_w},{key:`last`,label:`Last finisher`,...re.last}];R.setTracked(ie),$.layout===`stack`&&e.querySelector(`.cap-data`).append(document.getElementById(`course-hud`),document.getElementById(`hud`)),N=RN(document.querySelector(`#hud .rh-field`),{tracked:ie,runners:l,scene:R}),$.layout===`strip`&&(F=RN(e.querySelector(`.cs-field`),{tracked:ie,runners:l,scene:R,compact:!0})),x=0;for(let e=0;e<s;e++)x=Math.max(x,l.start[e]+l.times[e*c+c-1]);x=Math.max(x,n.anim.last_finish??0,re.last.start+re.last.net);let ae=re.win_m.start+re.win_m.net,oe=(ae-bN)/60;document.querySelector(`[data-step="leaders"]`).dataset.t1=String(oe);let se=document.querySelector(`[data-step="handoff"]`);se.dataset.t0=se.dataset.t1=String(oe),document.querySelector(`[data-step="tail"]`).dataset.t0=String(oe);let ce=()=>l.start[f],le=re.last.start+re.last.net,z=e=>Math.min(x,le-720+720*Math.min(1,Math.max(0,(e-.04)/.6)));window.__marathon={scene:R,STEPS:SN,CAMS:xN},Promise.all([Ee(`marathon/buildings.json`),De(`marathon/buildings.bin`)]).then(([e,t])=>{R.setBuildings(e,t),Oe()}).catch(e=>console.error(`buildings`,e)),M=nE(document.querySelector(`#course-hud .ch-strip`),{course:t,analysis:n,paceColor:e=>R.paceColor(e),mode:$.hud,height:$.layout===`stack`&&$.hud===`profile`?44:null}),$.layout===`strip`&&(P=nE(e.querySelector(`.cs-profile`),{course:t,analysis:n,paceColor:e=>R.paceColor(e),mode:`profile`,height:innerWidth<900?36:44}));let ue=e=>`rgb(${e[0]},${e[1]},${e[2]})`,de=()=>`linear-gradient(90deg,${[.9,.92,.94,.96,.98,1,1.02,1.04,1.06,1.08,1.1].map(e=>ue(R.paceColor(e))).join(`,`)})`,fe=()=>{let e=document.documentElement.style;e.setProperty(`--pace-fast`,ue(R.paceEnds.fast)),e.setProperty(`--pace-mid`,ue(R.paceEnds.mid)),e.setProperty(`--pace-slow`,ue(R.paceEnds.slow))};fe();let pe={gr:[`green`,`red`],br:[`blue`,`red`],po:[`purple`,`orange`],gyr:[`green`,`red`],tgo:[`teal`,`orange`],gyor:[`green`,`red`]}[$.pal]??[`green`,`red`];document.querySelectorAll(`[data-pal-word]`).forEach(e=>{e.textContent=pe[e.dataset.palWord===`fast`?0:1]});let me=`<span class="kd fast"><i></i>Faster than their average</span><span class="kd mid"><i></i>About even</span><span class="kd slow"><i></i>Slower</span>`;document.querySelectorAll(`.hud-key`).forEach(e=>{e.innerHTML=me});let he=e=>{if($.key!==`inline`||!e)return;let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),n=[];for(;t.nextNode();)/\b(faster|slower)\b/.test(t.currentNode.nodeValue)&&n.push(t.currentNode);for(let e of n){let t=document.createElement(`span`);t.innerHTML=e.nodeValue.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/\b(faster|slower)\b/g,e=>`<span class="sw ${e===`faster`?`fast`:`slow`}" aria-hidden="true"></span>${e}`),e.replaceWith(...t.childNodes)}},ge=document.createElement(`div`);ge.className=`viz-tooltip`,e.appendChild(ge),R.onHover=(r,i,a)=>{if(r==null||R.mode===`chase`){ge.classList.remove(`visible`);return}let o=m[r],s=(n.profiles.all[r]-1)*100,c=t.bridges.find(e=>e.from_m<o.to_m&&e.to_m>o.from_m),l=Math.min(t.pts.length-1,Math.round((o.from_m+o.to_m)/2/t.step_m));ge.innerHTML=`<strong>${o.label}</strong>${c?` · ${c.short}`:``}<br>Typical runner: <strong>${Math.abs(s).toFixed(1)}% ${s>=0?`slower`:`faster`}</strong> than their average<br>Elevation about ${Math.round(t.pts[l][2]*3.28084)} ft · climb in this mile ${o.climb_ft} ft`,ge.classList.add(`visible`);let u=e.clientWidth;ge.style.left=`${Math.min(i+14,u-ge.offsetWidth-8)}px`,ge.style.top=`${Math.max(8,a-12)}px`};let _e=e=>e*Q,ve=[{set:`boroughs`,at:[-74.135,40.585],text:`Staten Island`,kind:`borough`,anchor:`center`,priority:2},{set:`boroughs`,at:[-73.945,40.645],text:`Brooklyn`,kind:`borough`,anchor:`center`,priority:2},{set:`boroughs`,at:[-73.865,40.735],text:`Queens`,kind:`borough`,anchor:`center`,priority:2},{set:`boroughs`,at:[-73.995,40.745],text:`Manhattan`,kind:`borough`,anchor:`center`,priority:2},{set:`boroughs`,at:[-73.885,40.845],text:`The Bronx`,kind:`borough`,anchor:`center`,priority:2},{set:`boroughs`,at:[-74.11,40.705],text:`New Jersey`,kind:`borough`,anchor:`center`,priority:1},{set:`ends`,at:0,text:`Start`,kind:`bridge`,priority:9},{set:`ends`,at:42195,text:`Finish`,kind:`bridge`,priority:9}];for(let e of t.bridges){let t=e.short===`Queensboro`?8:e.short===`Verrazzano`?7:6;ve.push({set:`bridges-short`,at:e.peak_at_m,text:e.short,kind:`bridge`,priority:t})}let ye=[[.02,`Start`],[.93,`Verrazzano-Narrows Bridge, ${T.Verrazzano.peak_ft} ft`],[3.4,`Fourth Avenue`],[8.6,`Lafayette Avenue`],[10.2,`Bedford Avenue`],[13.1094,`Halfway`],[T.Pulaski.peak_at_m/Q,`Pulaski Bridge`],[T.Queensboro.peak_at_m/Q,`Queensboro Bridge, ${T.Queensboro.peak_ft} ft`],[16.7,`First Avenue`],[T[`Willis Ave.`].peak_at_m/Q,`Willis Avenue Bridge`],[T[`Madison Ave.`].peak_at_m/Q,`Madison Avenue Bridge`],[21.6,`Fifth Avenue`],[23.75,`Central Park`],[25.45,`Central Park South`],[26.2188,`Finish`]];for(let[e,t]of ye)ve.push({set:`route`,at:_e(e),text:t,kind:`bridge`,priority:8,lift:6,ahead:2200});for(let e=1;e<=26;e++)ve.push({set:`miles`,at:_e(e),text:`Mile ${e}`,kind:`mile`,priority:5,lift:3,ahead:1400});for(let e of ie)ve.push({set:`leaders`,at:()=>e.now?[e.now[0],e.now[1],e.now[2]]:null,text:e.label,kind:`lead`,priority:9,anchor:`left`});ve.push({set:`tail-ends`,at:()=>R.extent?R.at(R.extent[0]):null,text:`Back of the field`,kind:`lead`,priority:8,anchor:`right`}),ve.push({set:`tail-ends`,at:()=>R.extent&&R.extent[1]<42100?R.at(R.extent[1]):null,text:`Front`,kind:`lead`,priority:8,anchor:`left`}),R.setLabelCatalog(ve);let be=()=>{let t=innerWidth>=900,n=$.cards===`column`&&t;R.avoidLeft=($.cards===`float`||$.cards===`plain`)&&t,R.fullRegion=n,R.bottomInset=$.layout===`strip`?t?56:82:0;let r=e.querySelector(`.caption`);R.captionBox=$.cards===`caption`&&t&&r?()=>{let t=r.getBoundingClientRect(),n=e.getBoundingClientRect();if(!t.width)return null;let i=Math.min(t.top-n.top,n.height-24-150);return[t.left-n.left,i,t.right-n.left,t.bottom-n.top]}:null};be(),addEventListener(`resize`,be);let B=null,xe=document.getElementById(`scene-legend`);function Se(e){let t=e===`dots`&&($.key===`bar`||$.key===`dots`);xe.parentElement.classList.toggle(`hidden`,!t),xe.innerHTML=t?$.key===`dots`?`<div class="key-dots">${me}</div>`:`<div class="ramp" style="background:${de()}"></div><div class="ramp-lbl"><span>Faster than their average</span><span>Slower</span></div>`:``}if(addEventListener(`resize`,()=>B&&Se(Le(B).legend)),kN){let t=MN[kN]??MN.manhattan,n=u.findIndex(e=>e.target===(t.cohort??16200));n>=0&&(d=n,f=u[n].pacer,p=u[n].pacer_net,R.pacer=f),e.querySelector(`.loading`)?.classList.add(`done`),R.showRunners=!0,R.runnerAlpha=1,R.showTracked=!1,R.bigDots=!!t.bigDots,R.depthDots=!!t.depthDots,R.setLabels(t.labels??[]),R.chaseZoomAdd=t.zoomAdd??0,t.chase==null?(R.setMode(t.mode),R.setClock(t.clock,{instant:!0}),R.flyTo(t.view??t.cam,{instant:!0})):R.setChase(t.chase,{jump:!0});let r=document.documentElement,i=!1;R.onAfterRender=()=>{i&&!r.dataset.stillReady&&setTimeout(()=>{r.dataset.stillReady=`1`},50)};let a=setInterval(()=>{let e=R.deck.layerManager?.getLayers?.()??[],t=t=>e.some(e=>e.id===t||e.id.startsWith(`${t}-`));t(`land`)&&t(`road`)&&t(`buildings`)&&t(`runners`)&&e.every(e=>e.isLoaded)&&(clearInterval(a),i=!0,R.deck.redraw(`still frame ready`))},100);return}let Ce=[...document.querySelectorAll(`.scrolly-steps .step`)],we=new Map;function Te(e){if(!R.buildings||!e?.classList.contains(`step-chase`))return[];let t=`${e.dataset.step}|${innerWidth}x${innerHeight}`;if(we.has(t))return we.get(t);let n=+e.dataset.from*Q,r=+e.dataset.to*Q,i=new Set;for(let e=n;e<=r;e+=40)for(let t of[0,100])for(let n of R.sightBlockers(e,[0,60],t))R.buildings.heights[n]/10>=60&&i.add(n);let a=[...i];return we.set(t,a),a}function Oe(){B&&R.setFaded(Te(B));let e=window.requestIdleCallback??(e=>setTimeout(e,50)),t=Ce.filter(e=>e.classList.contains(`step-chase`)),n=()=>{let r=t.shift();r&&(Te(r),e(n))};e(n)}let V=$.cards===`caption`?e.querySelector(`.caption`):null,ke=V?.querySelector(`.cap-body`),Me=null,Ne=null;function Pe(e,{instant:t=!1}={}){if(!V)return;let n=e.querySelector(`.step-card`);if(Me===n)return;let r=()=>Fe(()=>{Me&&Me.append(...ke.childNodes),ke.append(...n.childNodes),Me=n,ke.contains(O)&&k(),ke.classList.remove(`fading`)});if(clearTimeout(Ne),t||je()){r();return}ke.classList.add(`fading`),Ne=setTimeout(r,125)}function Fe(e){if($.layout!==`stack`||!V||je()){e();return}let t=V.offsetHeight;V.style.transition=`none`,V.style.height=``,e();let n=V.offsetHeight;Math.abs(n-t)<1||(V.style.height=`${t}px`,V.offsetHeight,V.style.transition=`height 200ms ease`,V.style.height=`${n}px`,clearTimeout(V._hT),V._hT=setTimeout(()=>{V.style.transition=``,V.style.height=``},230))}function Ie(e,t){if(!V)return;let n=(Ce.indexOf(e)+Math.min(1,Math.max(0,t)))/Ce.length;V.querySelector(`.cap-bar i`).style.width=`${(n*100).toFixed(1)}%`}let Le=e=>e.classList.contains(`step-chase`)?CN:SN[e.dataset.step],Re=(e,t)=>{let n=+e.dataset.from*Q,r=+e.dataset.to*Q,i=Math.min(1,Math.max(0,t));return je()&&(i=Math.round(i*2)/2),n+(r-n)*i},ze=new Map,Be=innerHeight*.55,Ve=()=>{Be=innerHeight*.55,ze=new Map(Ce.map(e=>{let t=e.getBoundingClientRect();return[e,{top:t.top+scrollY,h:t.height}]}))};Ve(),addEventListener(`resize`,()=>{Ve(),nt=-1}),new ResizeObserver(()=>{Ve(),nt=-1}).observe(document.querySelector(`.scrolly-steps`));let He=e=>{let t=ze.get(e);return(scrollY+Be-t.top)/t.h},Ue=(e,t)=>{let n=bN+(+e.dataset.t0||50)*60;return n+(bN+(+e.dataset.t1||420)*60-n)*Math.min(1,Math.max(0,(t-.04)/.9))};function We(e,t){let n=Le(e);Ie(e,t),e.classList.contains(`step-chase`)?R.setChase(Re(e,t),{jump:je()}):n?.mode===`field`?(R.setClock(Ue(e,t)),n.path&&R.setPathT(Xe(t))):n?.mode===`finale`?R.setClock(z(t)):n?.atStart&&R.setClock(ce())}let Ge=(e,t)=>{let n=ie.find(t=>t.key===e);if(t==null&&n.now)return n.now[3];t??=R.clock;let r=R._posFor(n.start,n.times,t);return r?r[3]:t>=n.start+n.net?42195:0},Ke={leaders:{min:2500,extent:e=>{let t=Ge(`win_m`,e),n=Ge(`win_w`,e);return[Math.max(0,Math.min(t,n)-1200),Math.min(42195,Math.max(t,n)+600)]}},last:{min:4e3,extent:e=>{let t=Ge(`last`,e);return[Math.max(0,t-2e3),Math.min(42195,t+2e3)]}},back:{min:3e3,extent:()=>R.backExtent(300)},tail:{min:4e3,extent:e=>{let t=Ge(`last`,e),n=R.backExtent(300),r=Math.min(42195,t+2e3);return n&&n[1]>r&&(r=Math.min(42195,n[1],t+12e3)),[Math.max(0,t-2e3),r]}}};function qe(e){let t=Ke[e.follow];R.followExtent=t?.extent??null,R.followMinSpan=t?.min??null}let Je=(e,t)=>{let n=Ke[e],[r,i]=n.extent(t);if(i-r<n.min){let e=(r+i)/2;r=Math.max(0,e-n.min/2),i=Math.min(42195,r+n.min)}let a=xN.field;return R.computeView({...a,fit:[r,i],mobile:a.mobile&&{...a.mobile,fit:[r,i]}})},Ye=()=>[Je(`leaders`,ae),Je(`last`,ae)],Xe=e=>{let t=Math.min(1,Math.max(0,e/.85));return je()?Math.round(t):(1-Math.cos(Math.PI*t))/2};function Ze({fromBelow:e=!1,fromHere:t=!e}={}){qe({}),R.setPath(Ye,{t:+!!e,fromHere:t}),R.setPathT(Xe(He(B)))}let Qe=e=>{let t=R.viewState,n=innerWidth,r=innerHeight,i=TN*Math.cos(t.latitude*Math.PI/180)/2**Math.min(t.zoom,e.zoom);return Math.hypot((e.longitude-t.longitude)*DN,(e.latitude-t.latitude)*EN)/i>Math.max(n,r)*1.5||Math.abs(e.zoom-t.zoom)>2};function $e(t){if(B===t)return;let n=B,r=B?Le(B):null;Pe(t,{instant:!B}),B=t,R.setFaded(Te(t));let i=Le(t),a=i.mode===`finale`;if(R.trackedOnly=a?new Set([`last`]):null,R.holdAtFinish=a?new Set([`last`]):null,r?.mode===`field`&&i.mode===`field`){if(R.setLabels(i.labels),R.bigDots=!!i.tail,e.classList.toggle(`tail-mode`,!!i.tail),Se(i.legend),R.setClock(Ue(t,He(t))),i.path){Ze({fromBelow:n?.dataset.step===`tail`});return}let r=!!R.path;r&&R.releasePath(+!!i.tail),qe(i),R._updateRunners(),R.follow||R.setFollow(xN.field);let a=R.followView();a&&!r&&Qe(a)&&R.flyTo(a);return}R.clearPath(),R.showRunners=i.runners,R.setLabels(i.labels),Se(i.legend);let o=i.mode===`field`||a;if(Fe(()=>{let t=i.mode===`chase`?`chase`:o?`clock`:`none`;e.dataset.live!==t&&(e.dataset.live=t,$.layout!==`split`&&(M?.draw(),N?.build(),P?.draw(),F?.build(),ne(R)))}),h.classList.toggle(`hidden`,!o),e.classList.toggle(`clock-mode`,o),g.classList.toggle(`hidden`,i.mode!==`chase`),R.showTracked=o,R.bigDots=!!i.tail||a,e.classList.toggle(`tail-mode`,!!i.tail),i.mode===`chase`){R.setChase(Re(t,He(t)));return}if(R.setFollow(null),qe({}),i.mode===`field`){let e=Ue(t,He(t));if(R.setClock(e,{transition:KT(e-R.clock)}),i.path){Ze({fromHere:!1}),R.setPathT(Xe(He(t)),{jump:!0});return}qe(i),R._updateRunners(),R.setFollow(xN.field);let n=R.followView();R.flyTo(n??xN.field);return}R.setMode(`overview`);let s=i.atStart?ce():a?z(He(t)):null;s!=null&&R.setClock(s,{transition:KT(s-R.clock),instant:!r}),R.flyTo(xN[i.cam])}let et=!1,tt=()=>{et=!1;let e=scrollY+Be,t=Ce[0];for(let n of Ce)ze.get(n).top<e&&(t=n);let n=t!==B;n&&(Ce.forEach(e=>e.classList.toggle(`is-active`,e===t)),$e(t)),(scrollY!==nt||n)&&(nt=scrollY,We(t,He(t)))},nt=-1;window.__marathon.sync=()=>tt(),addEventListener(`scroll`,()=>{et||(et=!0,requestAnimationFrame(tt))},{passive:!0}),setInterval(()=>{et||tt()},400);let rt=Ce[0];for(let e of Ce)ze.get(e).top<scrollY+Be&&(rt=e);Ce.forEach(e=>e.classList.toggle(`is-active`,e===rt)),$e(rt),R.mode!==`chase`&&R.flyTo(R._lastCam??xN.overview,{instant:!0}),e.querySelector(`.loading`)?.classList.add(`done`),PN(NN(n,t));function it(){let e=mE(u[d],n);document.querySelectorAll(`[data-cc]`).forEach(t=>{t.textContent=e[t.dataset.cc]??``,he(t)})}let at=null;function ot(){at??=yN({options:u.map((e,t)=>({value:String(t),label:aE(e.target)})),value:String(d),label:`Finish time of the runner to follow`,onChange:e=>st(+e)}),at.set(String(d))}function st(e){d=e,f=u[e].pacer,p=u[e].pacer_net,R.pacer=f,R.mode===`chase`?(R.blendClock(600),R._pacerClock(),R._dirty=!0):B&&Le(B)?.atStart&&R.setClock(ce(),{transition:600}),M.setPace(u[e].rel),P?.setPace(u[e].rel),ot(),it()}st(d),document.querySelectorAll(`.scrolly-steps .step-card p:not([data-cc]), .caption .cap-body p:not([data-cc])`).forEach(he);let ct=Object.fromEntries(n.hills.map(e=>[e.name,e])),lt=Object.fromEntries(n.elev_effect.map(e=>[e.label,e])),ut=Math.round([`Mile 21`,`Mile 22`,`Mile 23`].reduce((e,t)=>e+lt[t].rel.all,0)/3),dt=[{text:`Verrazzano: ${Math.round(ct.Verrazzano.excess.all)}% cost`,short:`Verrazzano ${Math.round(ct.Verrazzano.excess.all)}%`,hill:ct.Verrazzano,phone:!0},{text:`Queensboro: ${Math.round(ct.Queensboro.excess.all)}% cost`,short:`Queensboro ${Math.round(ct.Queensboro.excess.all)}%`,hill:ct.Queensboro,phone:!0},{text:`Miles 21–23: flat, ${ut}% slower`,pace:[`Mile 21`,`Mile 22`,`Mile 23`]},{text:`Fifth Ave.: ${Math.round(ct[`Fifth Avenue`].excess.all)}% cost`,short:`Fifth Ave. ${Math.round(ct[`Fifth Avenue`].excess.all)}%`,hill:ct[`Fifth Avenue`],phone:!0}],ft=()=>{mN(document.getElementById(`chart-profile`),{course:t,analysis:n}),hN(document.getElementById(`chart-elev`),{course:t,analysis:n,paceColor:e=>R.paceColor(e),notes:dt}),gN(document.getElementById(`chart-climbs`),{analysis:n,paceColor:e=>R.paceColor(e)})};if(ft(),BN(),Ae(()=>{R.readTheme(),fe(),Se(Le(B).legend),M.draw(),P?.draw(),ft()}),AN>=1&&AN<=Ce.length){let e=Ce[AN-1],t=$.cards===`column`&&innerWidth>=900,n=e.dataset.step===`end`?.75:e.dataset.step===`handoff`?.92:t?.2:.5,r=e.getBoundingClientRect().top+scrollY;scrollTo(0,r+e.offsetHeight*n-innerHeight*.55);let i=e.querySelector(`.step-card`).getBoundingClientRect();$.cards!==`caption`&&(i.bottom>innerHeight-8||i.top<8)&&scrollBy(0,i.bottom>innerHeight-8?i.bottom-innerHeight+24:i.top-24),tt(),Pe(e,{instant:!0});let a=()=>{if(R.runnerAlpha=+!!R.showRunners,R.setClock(R.mode===`chase`?R.clockAt(R.pacer,R.chaseTarget):R.clockTarget,{instant:!0}),R.mode===`chase`)R.setChase(R.chaseTarget,{jump:!0});else if(R.path)R.setPathT(R.pathTarget,{jump:!0});else if(R.follow){let e=R.followView();e&&R.flyTo(e,{instant:!0})}else R._lastCam&&R.flyTo(R._lastCam,{instant:!0});R._dirty=!0};a();let o=document.documentElement,s=setInterval(()=>{let e=R.deck.layerManager?.getLayers?.()??[];if(!R.buildings||!e.some(e=>e.id===`buildings`)||!e.every(e=>e.isLoaded))return;clearInterval(s),a();let t=!1;R.onAfterRender=()=>{t&&!o.dataset.stepReady&&setTimeout(()=>{o.dataset.stepReady=`1`},50)},setTimeout(()=>{t=!0,R._dirty=!0,R.deck.redraw(`step ready`)},450)},100)}}function BN(){let e=[...document.querySelectorAll(`.article-header h1, .prose, .scrolly-steps, .fig-head, .fig-note, .about-data`)].map(e=>{let t=e.cloneNode(!0);return t.querySelectorAll(`[data-sel], svg`).forEach(e=>e.remove()),t.textContent}).join(` `).split(/\s+/).filter(Boolean).length,t=Math.max(1,Math.ceil(e/wN)),n=parseInt(document.getElementById(`read-time`)?.textContent,10);t!==n&&console.warn(`[copy check] read time: ${e} words is ${t} min at ${wN} wpm, header says ${n}`)}zN().catch(e=>{console.error(e);let t=document.querySelector(`#scene .loading`);t&&(t.textContent=`The graphic could not load.`)});export{Tf as n,Ff as t};