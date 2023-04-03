var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function l(t){return null==t?"":t}function i(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode&&t.parentNode.removeChild(t)}function f(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function h(){return p(" ")}function m(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function g(t,e){t.value=null==e?"":e}let b;function w(t){b=t}function y(){if(!b)throw new Error("Function called outside component initialization");return b}function k(){const t=y();return(e,n,{cancelable:o=!1}={})=>{const s=t.$$.callbacks[e];if(s){const r=function(t,e,{bubbles:n=!1,cancelable:o=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,o,e),s}(e,n,{cancelable:o});return s.slice().forEach((e=>{e.call(t,r)})),!r.defaultPrevented}return!0}}const x=[],_=[];let C=[];const S=[],q=Promise.resolve();let E=!1;function L(t){C.push(t)}const T=new Set;let j=0;function M(){if(0!==j)return;const t=b;do{try{for(;j<x.length;){const t=x[j];j++,w(t),A(t.$$)}}catch(t){throw x.length=0,j=0,t}for(w(null),x.length=0,j=0;_.length;)_.pop()();for(let t=0;t<C.length;t+=1){const e=C[t];T.has(e)||(T.add(e),e())}C.length=0}while(x.length);for(;S.length;)S.pop()();E=!1,T.clear(),w(t)}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}const z=new Set;let D;function H(t,e){t&&t.i&&(z.delete(t),t.i(e))}function O(t,e,n,o){if(t&&t.o){if(z.has(t))return;z.add(t),D.c.push((()=>{z.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}function N(t,e){t.d(1),e.delete(t.key)}function P(t){t&&t.c()}function B(t,n,r,c){const{fragment:l,after_update:i}=t.$$;l&&l.m(n,r),c||L((()=>{const n=t.$$.on_mount.map(e).filter(s);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),i.forEach(L)}function R(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];C.forEach((o=>-1===t.indexOf(o)?e.push(o):n.push(o))),n.forEach((t=>t())),C=e}(n.after_update),o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function I(t,e){-1===t.$$.dirty[0]&&(x.push(t),E||(E=!0,q.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function J(e,s,r,c,l,i,a,f=[-1]){const d=b;w(e);const p=e.$$={fragment:null,ctx:[],props:i,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(d?d.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:s.target||d.$$.root};a&&a(p.root);let h=!1;if(p.ctx=r?r(e,s.props||{},((t,n,...o)=>{const s=o.length?o[0]:n;return p.ctx&&l(p.ctx[t],p.ctx[t]=s)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](s),h&&I(e,t)),n})):[],p.update(),h=!0,o(p.before_update),p.fragment=!!c&&c(p.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);p.fragment&&p.fragment.l(t),t.forEach(u)}else p.fragment&&p.fragment.c();s.intro&&H(e.$$.fragment),B(e,s.target,s.anchor,s.customElement),M()}w(d)}class V{$destroy(){R(this,1),this.$destroy=t}$on(e,n){if(!s(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Z(e){let n,o,s,r;return{c(){n=d("link"),o=h(),s=d("h1"),r=p(e[0]),v(n,"href","https://fonts.googleapis.com/css?family=Roboto&display=swap"),v(n,"rel","stylesheet"),v(s,"class","svelte-m1lt79")},m(t,e){a(t,n,e),a(t,o,e),a(t,s,e),i(s,r)},p(t,[e]){1&e&&$(r,t[0])},i:t,o:t,d(t){t&&u(n),t&&u(o),t&&u(s)}}}function F(t,e,n){let{name:o=""}=e;return t.$$set=t=>{"name"in t&&n(0,o=t.name)},[o]}class G extends V{constructor(t){super(),J(this,t,F,Z,r,{name:0})}}function K(e){let n,o,s,r,c,l,f,p,$,g,b,w;return{c(){n=d("link"),o=h(),s=d("div"),r=d("div"),c=d("div"),c.textContent="Google Search",l=h(),f=d("form"),p=d("input"),$=h(),g=d("button"),g.innerHTML='<svg style="width:24px; height:24px" viewBox="0 0 24 24"><path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"></path></svg>',v(n,"href","https://fonts.googleapis.com/css?family=Roboto&display=swap"),v(n,"rel","stylesheet"),v(c,"class","label svelte-utlrxw"),v(p,"id","search-query-input"),v(p,"type","text"),v(p,"onfocus","this.value=''"),v(p,"name","search-query-input"),v(p,"placeholder","Search"),p.value="",v(p,"class","svelte-utlrxw"),v(g,"id","search-query-submit"),v(g,"name","search-query-submit"),v(g,"type",""),v(g,"class","svelte-utlrxw"),v(f,"class","search-bar svelte-utlrxw"),v(r,"class","wrapper svelte-utlrxw"),v(s,"class","search-body svelte-utlrxw")},m(t,e){a(t,n,e),a(t,o,e),a(t,s,e),i(s,r),i(r,c),i(r,l),i(r,f),i(f,p),i(f,$),i(f,g),b||(w=m(g,"click",Q),b=!0)},p:t,i:t,o:t,d(t){t&&u(n),t&&u(o),t&&u(s),b=!1,w()}}}function Q(){const t=document.querySelector(".search-bar");t.addEventListener("submit",(function(e){e.preventDefault();const n=t.querySelector("#search-query-input").value;window.location=`https://www.google.com/search?q=${n}`}))}class U extends V{constructor(t){super(),J(this,t,null,K,r,{})}}function W(e){let n,o,s,r,c,l,f,p,$,g,b,w;return{c(){n=d("link"),o=h(),s=d("div"),r=d("div"),c=d("div"),c.textContent="Stack Overflow",l=h(),f=d("form"),p=d("input"),$=h(),g=d("button"),g.innerHTML='<svg style="width:24px; height:24px" viewBox="0 0 24 24"><path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"></path></svg>',v(n,"href","https://fonts.googleapis.com/css?family=Roboto&display=swap"),v(n,"rel","stylesheet"),v(c,"class","stack-label svelte-14pvdjn"),v(p,"id","stack-search-query-input"),v(p,"type","text"),v(p,"onfocus","this.value=''"),v(p,"name","stack-search-query-input"),v(p,"placeholder","Search"),p.value="",v(p,"class","svelte-14pvdjn"),v(g,"id","stack-search-query-submit"),v(g,"name","stack-search-query-submit"),v(g,"type",""),v(g,"class","svelte-14pvdjn"),v(f,"class","stack-search-bar svelte-14pvdjn"),v(r,"class","stack-wrapper svelte-14pvdjn"),v(s,"class","stack-search-body svelte-14pvdjn")},m(t,e){a(t,n,e),a(t,o,e),a(t,s,e),i(s,r),i(r,c),i(r,l),i(r,f),i(f,p),i(f,$),i(f,g),b||(w=m(g,"click",X),b=!0)},p:t,i:t,o:t,d(t){t&&u(n),t&&u(o),t&&u(s),b=!1,w()}}}function X(){const t=document.querySelector(".stack-search-bar");t.addEventListener("submit",(function(e){e.preventDefault();const n=t.querySelector("#stack-search-query-input").value;window.location=`https://stackoverflow.com/search?q=${n}}}`}))}class Y extends V{constructor(t){super(),J(this,t,null,W,r,{})}}function tt(t,e,n){const o=t.slice();return o[3]=e[n],o}function et(t){let e,n,s,r,c,f;function p(){return t[1](t[3])}function $(...e){return t[2](t[3],...e)}return{c(){e=d("div"),n=d("i"),r=h(),v(n,"class",s=l(t[3].icon)+" svelte-zgl39d"),v(e,"class","social-media-favorite svelte-zgl39d"),v(e,"tabindex","0")},m(t,o){a(t,e,o),i(e,n),i(e,r),c||(f=[m(e,"click",p),m(e,"keydown",$)],c=!0)},p(e,o){t=e,1&o&&s!==(s=l(t[3].icon)+" svelte-zgl39d")&&v(n,"class",s)},d(t){t&&u(e),c=!1,o(f)}}}function nt(e){let n,o,s,r=e[0],c=[];for(let t=0;t<r.length;t+=1)c[t]=et(tt(e,r,t));return{c(){n=d("link"),o=h(),s=d("div");for(let t=0;t<c.length;t+=1)c[t].c();v(n,"rel","stylesheet"),v(n,"href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"),v(s,"class","social-media-favorites svelte-zgl39d")},m(t,e){a(t,n,e),a(t,o,e),a(t,s,e);for(let t=0;t<c.length;t+=1)c[t]&&c[t].m(s,null)},p(t,[e]){if(1&e){let n;for(r=t[0],n=0;n<r.length;n+=1){const o=tt(t,r,n);c[n]?c[n].p(o,e):(c[n]=et(o),c[n].c(),c[n].m(s,null))}for(;n<c.length;n+=1)c[n].d(1);c.length=r.length}},i:t,o:t,d(t){t&&u(n),t&&u(o),t&&u(s),f(c,t)}}}function ot(t,e,n){let{favorites:o=[{link:"https://www.twitter.com/your_twitter_username",icon:"fab fa-twitter"},{link:"https://www.facebook.com/your_facebook_username",icon:"fab fa-facebook-f"},{link:"https://www.instagram.com/your_instagram_username",icon:"fab fa-instagram"},{link:"https://www.linkedin.com/in/your_linkedin_username",icon:"fab fa-linkedin-in"}]}=e;return t.$$set=t=>{"favorites"in t&&n(0,o=t.favorites)},[o,t=>window.open(t.link,"_blank"),(t,e)=>{13===e.which&&window.open(t.link,"_blank")}]}class st extends V{constructor(t){super(),J(this,t,ot,nt,r,{favorites:0})}}function rt(e){let n,o,s,r,c;return{c(){n=d("footer"),o=d("p"),s=p(e[0]),r=p(" @v"),c=p(e[1]),v(o,"class","svelte-1rodyvk"),v(n,"class","svelte-1rodyvk")},m(t,e){a(t,n,e),i(n,o),i(o,s),i(o,r),i(o,c)},p(t,[e]){1&e&&$(s,t[0]),2&e&&$(c,t[1])},i:t,o:t,d(t){t&&u(n)}}}function ct(t,e,n){let{name:o}=e,{version:s}=e;return t.$$set=t=>{"name"in t&&n(0,o=t.name),"version"in t&&n(1,s=t.version)},[o,s]}class lt extends V{constructor(t){super(),J(this,t,ct,rt,r,{name:0,version:1})}}function it(t,e,n){const o=t.slice();return o[5]=e[n],o}function at(t){let e,n,o,s,r,c,f,$=t[5].icon+"";function g(){return t[3](t[5])}return{c(){e=d("button"),n=d("span"),o=p($),s=h(),v(n,"class","nav-icon svelte-6xmn42"),v(e,"class",r=l("nav-button "+(t[0]===t[5].name?"active":""))+" svelte-6xmn42")},m(t,r){a(t,e,r),i(e,n),i(n,o),i(e,s),c||(f=m(e,"click",g),c=!0)},p(n,o){t=n,1&o&&r!==(r=l("nav-button "+(t[0]===t[5].name?"active":""))+" svelte-6xmn42")&&v(e,"class",r)},d(t){t&&u(e),c=!1,f()}}}function ut(e){let n,o=e[1],s=[];for(let t=0;t<o.length;t+=1)s[t]=at(it(e,o,t));return{c(){n=d("nav");for(let t=0;t<s.length;t+=1)s[t].c();v(n,"class","svelte-6xmn42")},m(t,e){a(t,n,e);for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(n,null)},p(t,[e]){if(7&e){let r;for(o=t[1],r=0;r<o.length;r+=1){const c=it(t,o,r);s[r]?s[r].p(c,e):(s[r]=at(c),s[r].c(),s[r].m(n,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=o.length}},i:t,o:t,d(t){t&&u(n),f(s,t)}}}function ft(t,e,n){const o=k();let{activeTab:s=""}=e;function r(t){n(0,s=t.name),o("tabSelected",s)}return t.$$set=t=>{"activeTab"in t&&n(0,s=t.activeTab)},[s,[{name:"Home",icon:"🏠"},{name:"Profile",icon:"👤"},{name:"Developer",icon:"💻"},{name:"To-Do",icon:"📝"}],r,t=>r(t)]}class dt extends V{constructor(t){super(),J(this,t,ft,ut,r,{activeTab:0})}}const pt=[];function ht(t,e,n){const o=t.slice();return o[8]=e[n],o}function mt(t,e){let n,o,s,r,c,l,f,g,b,w,y,k=e[8].title+"";function x(){return e[6](e[8])}return{key:t,first:null,c(){n=d("li"),o=d("label"),s=d("input"),r=h(),c=d("span"),l=p(k),f=h(),g=d("button"),g.textContent="-",b=h(),v(s,"type","checkbox"),v(s,"class","svelte-itw65e"),v(c,"class","svelte-itw65e"),v(o,"class","svelte-itw65e"),v(g,"class","svelte-itw65e"),v(n,"class","todo-item svelte-itw65e"),this.first=n},m(t,e){a(t,n,e),i(n,o),i(o,s),i(o,r),i(o,c),i(c,l),i(n,f),i(n,g),i(n,b),w||(y=m(g,"click",x),w=!0)},p(t,n){e=t,1&n&&k!==(k=e[8].title+"")&&$(l,k)},d(t){t&&u(n),w=!1,y()}}}function vt(e){let n,s,r,c,l,f,p,$,b,w=[],y=new Map,k=e[0];const x=t=>t[8].id;for(let t=0;t<k.length;t+=1){let n=ht(e,k,t),o=x(n);y.set(o,w[t]=mt(o,n))}return{c(){n=d("div"),s=d("div"),r=d("input"),c=h(),l=d("button"),l.textContent="+",f=h(),p=d("ul");for(let t=0;t<w.length;t+=1)w[t].c();v(r,"type","text"),v(r,"placeholder","Create a new todo"),v(r,"class","svelte-itw65e"),v(l,"class","svelte-itw65e"),v(s,"class","todo-input svelte-itw65e"),v(p,"class","todo-list svelte-itw65e"),v(n,"class","todo-wrapper svelte-itw65e")},m(t,o){a(t,n,o),i(n,s),i(s,r),g(r,e[1]),i(s,c),i(s,l),i(n,f),i(n,p);for(let t=0;t<w.length;t+=1)w[t]&&w[t].m(p,null);$||(b=[m(r,"input",e[5]),m(l,"click",e[3])],$=!0)},p(t,[e]){2&e&&r.value!==t[1]&&g(r,t[1]),17&e&&(k=t[0],w=function(t,e,n,s,r,c,l,i,a,u,f,d){let p=t.length,h=c.length,m=p;const v={};for(;m--;)v[t[m].key]=m;const $=[],g=new Map,b=new Map,w=[];for(m=h;m--;){const t=d(r,c,m),o=n(t);let i=l.get(o);i?s&&w.push((()=>i.p(t,e))):(i=u(o,t),i.c()),g.set(o,$[m]=i),o in v&&b.set(o,Math.abs(m-v[o]))}const y=new Set,k=new Set;function x(t){H(t,1),t.m(i,f),l.set(t.key,t),f=t.first,h--}for(;p&&h;){const e=$[h-1],n=t[p-1],o=e.key,s=n.key;e===n?(f=e.first,p--,h--):g.has(s)?!l.has(o)||y.has(o)?x(e):k.has(s)?p--:b.get(o)>b.get(s)?(k.add(o),x(e)):(y.add(s),p--):(a(n,l),p--)}for(;p--;){const e=t[p];g.has(e.key)||a(e,l)}for(;h;)x($[h-1]);return o(w),$}(w,e,x,1,t,k,y,p,N,mt,null,ht))},i:t,o:t,d(t){t&&u(n);for(let t=0;t<w.length;t+=1)w[t].d();$=!1,o(b)}}}function $t(e,n,o){let s,l="";const i=function(e,n=t){let o;const s=new Set;function c(t){if(r(e,t)&&(e=t,o)){const t=!pt.length;for(const t of s)t[1](),pt.push(t,e);if(t){for(let t=0;t<pt.length;t+=2)pt[t][0](pt[t+1]);pt.length=0}}}return{set:c,update:function(t){c(t(e))},subscribe:function(r,l=t){const i=[r,l];return s.add(i),1===s.size&&(o=n(c)||t),r(e),()=>{s.delete(i),0===s.size&&o&&(o(),o=null)}}}}([]);function a(t){i.update((e=>e.filter((e=>e.id!==t))))}var u;c(e,i,(t=>o(0,s=t))),u=()=>{const t=JSON.parse(localStorage.getItem("tasks"));t&&i.set(t)},y().$$.on_mount.push(u);return e.$$.update=()=>{1&e.$$.dirty&&localStorage.setItem("tasks",JSON.stringify(s))},[s,l,i,function(){i.update((t=>[...t,{id:Date.now(),title:l,completed:!1}])),o(1,l="")},a,function(){l=this.value,o(1,l)},t=>a(t.id)]}class gt extends V{constructor(t){super(),J(this,t,$t,vt,r,{})}}function bt(t){let e,n;return e=new gt({}),{c(){P(e.$$.fragment)},m(t,o){B(e,t,o),n=!0},i(t){n||(H(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function wt(t){let e,n;return e=new Y({}),{c(){P(e.$$.fragment)},m(t,o){B(e,t,o),n=!0},i(t){n||(H(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function yt(t){let e,n;return e=new st({}),{c(){P(e.$$.fragment)},m(t,o){B(e,t,o),n=!0},i(t){n||(H(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function kt(t){let e,n;return e=new U({}),{c(){P(e.$$.fragment)},m(t,o){B(e,t,o),n=!0},i(t){n||(H(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function xt(t){let e,n,s,r,c,l,f,p,m,$,g;function b(e){t[1](e)}let w={};void 0!==t[0]&&(w.activeTab=t[0]),n=new dt({props:w}),_.push((()=>function(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}(n,"activeTab",b))),c=new G({props:{name:_t}});const y=[kt,yt,wt,bt],k=[];function x(t,e){return"Home"==t[0]?0:"Profile"==t[0]?1:"Developer"==t[0]?2:"To-Do"==t[0]?3:-1}return~(f=x(t))&&(p=k[f]=y[f](t)),$=new lt({props:{name:_t,version:Ct}}),{c(){e=d("main"),P(n.$$.fragment),r=h(),P(c.$$.fragment),l=h(),p&&p.c(),m=h(),P($.$$.fragment),v(e,"class","svelte-1h6otfa")},m(t,o){a(t,e,o),B(n,e,null),i(e,r),B(c,e,null),i(e,l),~f&&k[f].m(e,null),a(t,m,o),B($,t,o),g=!0},p(t,[r]){const c={};var l;!s&&1&r&&(s=!0,c.activeTab=t[0],l=()=>s=!1,S.push(l)),n.$set(c);let i=f;f=x(t),f!==i&&(p&&(D={r:0,c:[],p:D},O(k[i],1,1,(()=>{k[i]=null})),D.r||o(D.c),D=D.p),~f?(p=k[f],p||(p=k[f]=y[f](t),p.c()),H(p,1),p.m(e,null)):p=null)},i(t){g||(H(n.$$.fragment,t),H(c.$$.fragment,t),H(p),H($.$$.fragment,t),g=!0)},o(t){O(n.$$.fragment,t),O(c.$$.fragment,t),O(p),O($.$$.fragment,t),g=!1},d(t){t&&u(e),R(n),R(c),~f&&k[f].d(),t&&u(m),R($,t)}}}let _t="Startpage",Ct="0.0.1";function St(t,e,n){let o="Home";return[o,function(t){o=t,n(0,o)}]}return new class extends V{constructor(t){super(),J(this,t,St,xt,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
