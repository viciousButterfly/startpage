var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function o(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(e,n,s){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}(n,s))}function l(t){return null==t?"":t}function a(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode&&t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function d(){return p(" ")}function h(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function $(t,e){t.value=null==e?"":e}let g;function w(t){g=t}function b(){if(!g)throw new Error("Function called outside component initialization");return g}function y(t){b().$$.on_mount.push(t)}function x(){const t=b();return(e,n,{cancelable:s=!1}={})=>{const o=t.$$.callbacks[e];if(o){const c=function(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,s,e),o}(e,n,{cancelable:s});return o.slice().forEach((e=>{e.call(t,c)})),!c.defaultPrevented}return!0}}const k=[],_=[];let C=[];const E=[],L=Promise.resolve();let S=!1;function q(t){C.push(t)}const T=new Set;let z=0;function M(){if(0!==z)return;const t=g;do{try{for(;z<k.length;){const t=k[z];z++,w(t),A(t.$$)}}catch(t){throw k.length=0,z=0,t}for(w(null),k.length=0,z=0;_.length;)_.pop()();for(let t=0;t<C.length;t+=1){const e=C[t];T.has(e)||(T.add(e),e())}C.length=0}while(k.length);for(;E.length;)E.pop()();S=!1,T.clear(),w(t)}function A(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}const H=new Set;let j;function D(t,e){t&&t.i&&(H.delete(t),t.i(e))}function N(t,e,n,s){if(t&&t.o){if(H.has(t))return;H.add(t),j.c.push((()=>{H.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}else s&&s()}function O(t,e){t.d(1),e.delete(t.key)}function R(t){t&&t.c()}function B(t,n,c,r){const{fragment:l,after_update:a}=t.$$;l&&l.m(n,c),r||q((()=>{const n=t.$$.on_mount.map(e).filter(o);t.$$.on_destroy?t.$$.on_destroy.push(...n):s(n),t.$$.on_mount=[]})),a.forEach(q)}function P(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];C.forEach((s=>-1===t.indexOf(s)?e.push(s):n.push(s))),n.forEach((t=>t())),C=e}(n.after_update),s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function G(t,e){-1===t.$$.dirty[0]&&(k.push(t),S||(S=!0,L.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function I(e,o,c,r,l,a,u,f=[-1]){const p=g;w(e);const d=e.$$={fragment:null,ctx:[],props:a,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(p?p.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:o.target||p.$$.root};u&&u(d.root);let h=!1;if(d.ctx=c?c(e,o.props||{},((t,n,...s)=>{const o=s.length?s[0]:n;return d.ctx&&l(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),h&&G(e,t)),n})):[],d.update(),h=!0,s(d.before_update),d.fragment=!!r&&r(d.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);d.fragment&&d.fragment.l(t),t.forEach(i)}else d.fragment&&d.fragment.c();o.intro&&D(e.$$.fragment),B(e,o.target,o.anchor,o.customElement),M()}w(p)}class J{$destroy(){P(this,1),this.$destroy=t}$on(e,n){if(!o(n))return t;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const t=s.indexOf(n);-1!==t&&s.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function V(e){let n,s,o,c;return{c(){n=f("link"),s=d(),o=f("h1"),c=p(e[0]),m(n,"href","https://fonts.googleapis.com/css?family=Roboto&display=swap"),m(n,"rel","stylesheet"),m(o,"class","svelte-m1lt79")},m(t,e){u(t,n,e),u(t,s,e),u(t,o,e),a(o,c)},p(t,[e]){1&e&&v(c,t[0])},i:t,o:t,d(t){t&&i(n),t&&i(s),t&&i(o)}}}function Z(t,e,n){let{name:s=""}=e;return t.$$set=t=>{"name"in t&&n(0,s=t.name)},[s]}class F extends J{constructor(t){super(),I(this,t,Z,V,c,{name:0})}}function K(e){let n,s,o,c,r,l,p,v,$,g,w,b;return{c(){n=f("link"),s=d(),o=f("div"),c=f("div"),r=f("div"),r.textContent="Google Search",l=d(),p=f("form"),v=f("input"),$=d(),g=f("button"),g.innerHTML='<svg style="width:24px; height:24px" viewBox="0 0 24 24"><path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"></path></svg>',m(n,"href","https://fonts.googleapis.com/css?family=Roboto&display=swap"),m(n,"rel","stylesheet"),m(r,"class","label svelte-utlrxw"),m(v,"id","search-query-input"),m(v,"type","text"),m(v,"onfocus","this.value=''"),m(v,"name","search-query-input"),m(v,"placeholder","Search Google or Type a URL"),v.value="",m(v,"class","svelte-utlrxw"),m(g,"id","search-query-submit"),m(g,"name","search-query-submit"),m(g,"type",""),m(g,"class","svelte-utlrxw"),m(p,"class","search-bar svelte-utlrxw"),m(c,"class","wrapper svelte-utlrxw"),m(o,"class","search-body svelte-utlrxw")},m(t,e){u(t,n,e),u(t,s,e),u(t,o,e),a(o,c),a(c,r),a(c,l),a(c,p),a(p,v),a(p,$),a(p,g),w||(b=h(g,"click",U),w=!0)},p:t,i:t,o:t,d(t){t&&i(n),t&&i(s),t&&i(o),w=!1,b()}}}function U(){const t=document.querySelector(".search-bar");t.addEventListener("submit",(function(e){e.preventDefault();const n=t.querySelector("#search-query-input").value;window.location=`https://www.google.com/search?q=${n}`}))}function Q(t){return document.addEventListener("keydown",(function(t){if(t.ctrlKey&&"b"===t.key){console.log("Hello");const t=document.getElementById("search-query-input");t.setSelectionRange(0,0),t.focus()}})),[]}class W extends J{constructor(t){super(),I(this,t,Q,K,c,{})}}function X(e){let n,s,o,c,r,l,p,v,$,g,w,b;return{c(){n=f("link"),s=d(),o=f("div"),c=f("div"),r=f("div"),r.textContent="Stack Overflow",l=d(),p=f("form"),v=f("input"),$=d(),g=f("button"),g.innerHTML='<svg style="width:24px; height:24px" viewBox="0 0 24 24"><path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"></path></svg>',m(n,"href","https://fonts.googleapis.com/css?family=Roboto&display=swap"),m(n,"rel","stylesheet"),m(r,"class","stack-label svelte-1wnbn1v"),m(v,"id","stack-search-query-input"),m(v,"type","text"),m(v,"onfocus","this.value=''"),m(v,"name","stack-search-query-input"),m(v,"placeholder"," Search..."),v.value="",m(v,"class","svelte-1wnbn1v"),m(g,"id","stack-search-query-submit"),m(g,"name","stack-search-query-submit"),m(g,"type",""),m(g,"class","svelte-1wnbn1v"),m(p,"class","stack-search-bar svelte-1wnbn1v"),m(c,"class","stack-wrapper svelte-1wnbn1v"),m(o,"class","stack-search-body svelte-1wnbn1v")},m(t,e){u(t,n,e),u(t,s,e),u(t,o,e),a(o,c),a(c,r),a(c,l),a(c,p),a(p,v),a(p,$),a(p,g),w||(b=h(g,"click",Y),w=!0)},p:t,i:t,o:t,d(t){t&&i(n),t&&i(s),t&&i(o),w=!1,b()}}}function Y(){const t=document.querySelector(".stack-search-bar");t.addEventListener("submit",(function(e){e.preventDefault();const n=t.querySelector("#stack-search-query-input").value;window.location=`https://stackoverflow.com/search?q=${n}}}`}))}class tt extends J{constructor(t){super(),I(this,t,null,X,c,{})}}function et(e){let n,s,o;return{c(){n=f("link"),s=d(),o=f("fa"),o.innerHTML='<a href="https://www.github.com/" class="fa fa-github svelte-1134ycw"></a> \n  <a href="https://www.gitlab.com/" class="fa fa-gitlab svelte-1134ycw"></a> \n  <a href="https://www.facebook.com/" class="fa fa-facebook svelte-1134ycw"></a> \n  <a href="https://www.twitter.com" class="fa fa-twitter svelte-1134ycw"></a> \n  <a href="https://www.instagram.com/" class="fa fa-instagram svelte-1134ycw"></a> \n  <a href="https://web.whatsapp.com/" class="fa fa-whatsapp svelte-1134ycw"></a>',m(n,"rel","stylesheet"),m(n,"href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"),m(o,"class","svelte-1134ycw")},m(t,e){u(t,n,e),u(t,s,e),u(t,o,e)},p:t,i:t,o:t,d(t){t&&i(n),t&&i(s),t&&i(o)}}}class nt extends J{constructor(t){super(),I(this,t,null,et,c,{})}}function st(e){let n,s,o,c,r;return{c(){n=f("footer"),s=f("p"),o=p(e[0]),c=p("       v"),r=p(e[1]),m(s,"class","svelte-o9c8c1"),m(n,"class","svelte-o9c8c1")},m(t,e){u(t,n,e),a(n,s),a(s,o),a(s,c),a(s,r)},p(t,[e]){1&e&&v(o,t[0]),2&e&&v(r,t[1])},i:t,o:t,d(t){t&&i(n)}}}function ot(t,e,n){let{name:s}=e,{version:o}=e;return t.$$set=t=>{"name"in t&&n(0,s=t.name),"version"in t&&n(1,o=t.version)},[s,o]}class ct extends J{constructor(t){super(),I(this,t,ot,st,c,{name:0,version:1})}}function rt(t,e,n){const s=t.slice();return s[5]=e[n],s}function lt(t){let e,n,s,o,c,r,v,$=t[5].icon+"";function g(){return t[3](t[5])}return{c(){e=f("button"),n=f("span"),s=p($),o=d(),m(n,"class","nav-icon svelte-6xmn42"),m(e,"class",c=l("nav-button "+(t[0]===t[5].name?"active":""))+" svelte-6xmn42")},m(t,c){u(t,e,c),a(e,n),a(n,s),a(e,o),r||(v=h(e,"click",g),r=!0)},p(n,s){t=n,1&s&&c!==(c=l("nav-button "+(t[0]===t[5].name?"active":""))+" svelte-6xmn42")&&m(e,"class",c)},d(t){t&&i(e),r=!1,v()}}}function at(e){let n,s=e[1],o=[];for(let t=0;t<s.length;t+=1)o[t]=lt(rt(e,s,t));return{c(){n=f("nav");for(let t=0;t<o.length;t+=1)o[t].c();m(n,"class","svelte-6xmn42")},m(t,e){u(t,n,e);for(let t=0;t<o.length;t+=1)o[t]&&o[t].m(n,null)},p(t,[e]){if(7&e){let c;for(s=t[1],c=0;c<s.length;c+=1){const r=rt(t,s,c);o[c]?o[c].p(r,e):(o[c]=lt(r),o[c].c(),o[c].m(n,null))}for(;c<o.length;c+=1)o[c].d(1);o.length=s.length}},i:t,o:t,d(t){t&&i(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(o,t)}}}function ut(t,e,n){const s=x();let{activeTab:o=""}=e;function c(t){n(0,o=t.name),s("tabSelected",o)}return t.$$set=t=>{"activeTab"in t&&n(0,o=t.activeTab)},[o,[{name:"Home",icon:"🏠"},{name:"Profile",icon:"👤"},{name:"Developer",icon:"💻"},{name:"To-Do",icon:"📝"}],c,t=>c(t)]}class it extends J{constructor(t){super(),I(this,t,ut,at,c,{activeTab:0})}}const ft=[];function pt(t,e,n){const s=t.slice();return s[8]=e[n],s}function dt(t,e){let n,s,o,c,r,l,$,g,w,b,y,x=e[8].title+"";function k(){return e[6](e[8])}return{key:t,first:null,c(){n=f("li"),s=f("label"),o=f("input"),c=d(),r=f("span"),l=p(x),$=d(),g=f("button"),g.textContent="-",w=d(),m(o,"type","checkbox"),m(o,"class","svelte-1825luz"),m(r,"class","svelte-1825luz"),m(s,"class","svelte-1825luz"),m(g,"class","svelte-1825luz"),m(n,"class","todo-item svelte-1825luz"),this.first=n},m(t,e){u(t,n,e),a(n,s),a(s,o),a(s,c),a(s,r),a(r,l),a(n,$),a(n,g),a(n,w),b||(y=h(g,"click",k),b=!0)},p(t,n){e=t,1&n&&x!==(x=e[8].title+"")&&v(l,x)},d(t){t&&i(n),b=!1,y()}}}function ht(e){let n,o,c,r,l,p,v,g,w,b=[],y=new Map,x=e[0];const k=t=>t[8].id;for(let t=0;t<x.length;t+=1){let n=pt(e,x,t),s=k(n);y.set(s,b[t]=dt(s,n))}return{c(){n=f("div"),o=f("div"),c=f("input"),r=d(),l=f("button"),l.textContent="+",p=d(),v=f("ul");for(let t=0;t<b.length;t+=1)b[t].c();m(c,"type","text"),m(c,"placeholder","Create a new todo"),m(c,"class","svelte-1825luz"),m(l,"class","svelte-1825luz"),m(o,"class","todo-input svelte-1825luz"),m(v,"class","todo-list svelte-1825luz"),m(n,"class","todo-wrapper svelte-1825luz")},m(t,s){u(t,n,s),a(n,o),a(o,c),$(c,e[1]),a(o,r),a(o,l),a(n,p),a(n,v);for(let t=0;t<b.length;t+=1)b[t]&&b[t].m(v,null);g||(w=[h(c,"input",e[5]),h(l,"click",e[3])],g=!0)},p(t,[e]){2&e&&c.value!==t[1]&&$(c,t[1]),17&e&&(x=t[0],b=function(t,e,n,o,c,r,l,a,u,i,f,p){let d=t.length,h=r.length,m=d;const v={};for(;m--;)v[t[m].key]=m;const $=[],g=new Map,w=new Map,b=[];for(m=h;m--;){const t=p(c,r,m),s=n(t);let a=l.get(s);a?o&&b.push((()=>a.p(t,e))):(a=i(s,t),a.c()),g.set(s,$[m]=a),s in v&&w.set(s,Math.abs(m-v[s]))}const y=new Set,x=new Set;function k(t){D(t,1),t.m(a,f),l.set(t.key,t),f=t.first,h--}for(;d&&h;){const e=$[h-1],n=t[d-1],s=e.key,o=n.key;e===n?(f=e.first,d--,h--):g.has(o)?!l.has(s)||y.has(s)?k(e):x.has(o)?d--:w.get(s)>w.get(o)?(x.add(s),k(e)):(y.add(o),d--):(u(n,l),d--)}for(;d--;){const e=t[d];g.has(e.key)||u(e,l)}for(;h;)k($[h-1]);return s(b),$}(b,e,k,1,t,x,y,v,O,dt,null,pt))},i:t,o:t,d(t){t&&i(n);for(let t=0;t<b.length;t+=1)b[t].d();g=!1,s(w)}}}function mt(e,n,s){let o,l="";const a=function(e,n=t){let s;const o=new Set;function r(t){if(c(e,t)&&(e=t,s)){const t=!ft.length;for(const t of o)t[1](),ft.push(t,e);if(t){for(let t=0;t<ft.length;t+=2)ft[t][0](ft[t+1]);ft.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(c,l=t){const a=[c,l];return o.add(a),1===o.size&&(s=n(r)||t),c(e),()=>{o.delete(a),0===o.size&&s&&(s(),s=null)}}}}([]);function u(t){a.update((e=>e.filter((e=>e.id!==t))))}r(e,a,(t=>s(0,o=t))),y((()=>{const t=JSON.parse(localStorage.getItem("tasks"));t&&a.set(t)}));return e.$$.update=()=>{1&e.$$.dirty&&localStorage.setItem("tasks",JSON.stringify(o))},[o,l,a,function(){a.update((t=>[...t,{id:Date.now(),title:l,completed:!1}])),s(1,l="")},u,function(){l=this.value,s(1,l)},t=>u(t.id)]}class vt extends J{constructor(t){super(),I(this,t,mt,ht,c,{})}}function $t(t){let e,n,s,o,c,r,l;return{c(){e=f("div"),n=f("p"),s=p(t[0]),o=d(),c=f("button"),c.innerHTML='<svg fill="#000000" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 489.645 489.645" xml:space="preserve" class="svelte-18ks7o1"><path d="M460.656,132.911c-58.7-122.1-212.2-166.5-331.8-104.1c-9.4,5.2-13.5,16.6-8.3,27c5.2,9.4,16.6,13.5,27,8.3\n                  c99.9-52,227.4-14.9,276.7,86.3c65.4,134.3-19,236.7-87.4,274.6c-93.1,51.7-211.2,17.4-267.6-70.7l69.3,14.5\n                  c10.4,2.1,21.8-4.2,23.9-15.6c2.1-10.4-4.2-21.8-15.6-23.9l-122.8-25c-20.6-2-25,16.6-23.9,22.9l15.6,123.8\n                  c1,10.4,9.4,17.7,19.8,17.7c12.8,0,20.8-12.5,19.8-23.9l-6-50.5c57.4,70.8,170.3,131.2,307.4,68.2\n                  C414.856,432.511,548.256,314.811,460.656,132.911z" class="svelte-18ks7o1"></path></svg>',m(c,"class","svelte-18ks7o1"),m(e,"class","fact-container svelte-18ks7o1")},m(i,f){u(i,e,f),a(e,n),a(n,s),a(e,o),a(e,c),r||(l=h(c,"click",t[1]),r=!0)},p(t,e){1&e&&v(s,t[0])},d(t){t&&i(e),r=!1,l()}}}function gt(e){let n,s=e[0]&&$t(e);return{c(){s&&s.c(),n=p("")},m(t,e){s&&s.m(t,e),u(t,n,e)},p(t,[e]){t[0]?s?s.p(t,e):(s=$t(t),s.c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null)},i:t,o:t,d(t){s&&s.d(t),t&&i(n)}}}function wt(t,e,n){let s="";const o=async()=>{const t=await fetch("https://uselessfacts.jsph.pl/random.json?category=programming"),e=await t.json();n(0,s=e.text)};return y((async()=>{o()})),[s,o]}class bt extends J{constructor(t){super(),I(this,t,wt,gt,c,{})}}function yt(t){let e,n;return e=new vt({}),{c(){R(e.$$.fragment)},m(t,s){B(e,t,s),n=!0},i(t){n||(D(e.$$.fragment,t),n=!0)},o(t){N(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function xt(t){let e,n,s,o;return e=new tt({}),s=new bt({}),{c(){R(e.$$.fragment),n=d(),R(s.$$.fragment)},m(t,c){B(e,t,c),u(t,n,c),B(s,t,c),o=!0},i(t){o||(D(e.$$.fragment,t),D(s.$$.fragment,t),o=!0)},o(t){N(e.$$.fragment,t),N(s.$$.fragment,t),o=!1},d(t){P(e,t),t&&i(n),P(s,t)}}}function kt(t){let e,n;return e=new nt({}),{c(){R(e.$$.fragment)},m(t,s){B(e,t,s),n=!0},i(t){n||(D(e.$$.fragment,t),n=!0)},o(t){N(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function _t(t){let e,n;return e=new W({}),{c(){R(e.$$.fragment)},m(t,s){B(e,t,s),n=!0},i(t){n||(D(e.$$.fragment,t),n=!0)},o(t){N(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function Ct(t){let e,n,o,c,r,l,p,h,v,$,g;function w(e){t[1](e)}let b={};void 0!==t[0]&&(b.activeTab=t[0]),n=new it({props:b}),_.push((()=>function(t,e,n){const s=t.$$.props[e];void 0!==s&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}(n,"activeTab",w))),r=new F({props:{name:Et}});const y=[_t,kt,xt,yt],x=[];function k(t,e){return"Home"==t[0]?0:"Profile"==t[0]?1:"Developer"==t[0]?2:"To-Do"==t[0]?3:-1}return~(p=k(t))&&(h=x[p]=y[p](t)),$=new ct({props:{name:Et,version:Lt}}),{c(){e=f("main"),R(n.$$.fragment),c=d(),R(r.$$.fragment),l=d(),h&&h.c(),v=d(),R($.$$.fragment),m(e,"class","svelte-1h6otfa")},m(t,s){u(t,e,s),B(n,e,null),a(e,c),B(r,e,null),a(e,l),~p&&x[p].m(e,null),u(t,v,s),B($,t,s),g=!0},p(t,[c]){const r={};var l;!o&&1&c&&(o=!0,r.activeTab=t[0],l=()=>o=!1,E.push(l)),n.$set(r);let a=p;p=k(t),p!==a&&(h&&(j={r:0,c:[],p:j},N(x[a],1,1,(()=>{x[a]=null})),j.r||s(j.c),j=j.p),~p?(h=x[p],h||(h=x[p]=y[p](t),h.c()),D(h,1),h.m(e,null)):h=null)},i(t){g||(D(n.$$.fragment,t),D(r.$$.fragment,t),D(h),D($.$$.fragment,t),g=!0)},o(t){N(n.$$.fragment,t),N(r.$$.fragment,t),N(h),N($.$$.fragment,t),g=!1},d(t){t&&i(e),P(n),P(r),~p&&x[p].d(),t&&i(v),P($,t)}}}let Et="STARTPAGE",Lt="0.0.1";function St(t,e,n){let s="Home";return[s,function(t){s=t,n(0,s)}]}return new class extends J{constructor(t){super(),I(this,t,St,Ct,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map