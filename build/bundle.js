var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t){return null==t?"":t}function l(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode&&t.parentNode.removeChild(t)}function u(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function p(){return d(" ")}function h(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function g(t,e){t.value=null==e?"":e}let $;function b(t){$=t}function w(){const t=function(){if(!$)throw new Error("Function called outside component initialization");return $}();return(e,n,{cancelable:o=!1}={})=>{const s=t.$$.callbacks[e];if(s){const r=function(t,e,{bubbles:n=!1,cancelable:o=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,o,e),s}(e,n,{cancelable:o});return s.slice().forEach((e=>{e.call(t,r)})),!r.defaultPrevented}return!0}}const y=[],k=[];let x=[];const _=[],j=Promise.resolve();let C=!1;function L(t){x.push(t)}const E=new Set;let H=0;function q(){if(0!==H)return;const t=$;do{try{for(;H<y.length;){const t=y[H];H++,b(t),M(t.$$)}}catch(t){throw y.length=0,H=0,t}for(b(null),y.length=0,H=0;k.length;)k.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];E.has(e)||(E.add(e),e())}x.length=0}while(y.length);for(;_.length;)_.pop()();C=!1,E.clear(),b(t)}function M(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}const T=new Set;let S;function A(t,e){t&&t.i&&(T.delete(t),t.i(e))}function V(t,e,n,o){if(t&&t.o){if(T.has(t))return;T.add(t),S.c.push((()=>{T.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}function D(t,e){t.d(1),e.delete(t.key)}function z(t){t&&t.c()}function B(t,n,r,c){const{fragment:l,after_update:i}=t.$$;l&&l.m(n,r),c||L((()=>{const n=t.$$.on_mount.map(e).filter(s);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),i.forEach(L)}function O(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];x.forEach((o=>-1===t.indexOf(o)?e.push(o):n.push(o))),n.forEach((t=>t())),x=e}(n.after_update),o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function N(t,e){-1===t.$$.dirty[0]&&(y.push(t),C||(C=!0,j.then(q)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function P(e,s,r,c,l,i,u,f=[-1]){const d=$;b(e);const p=e.$$={fragment:null,ctx:[],props:i,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(d?d.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:s.target||d.$$.root};u&&u(p.root);let h=!1;if(p.ctx=r?r(e,s.props||{},((t,n,...o)=>{const s=o.length?o[0]:n;return p.ctx&&l(p.ctx[t],p.ctx[t]=s)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](s),h&&N(e,t)),n})):[],p.update(),h=!0,o(p.before_update),p.fragment=!!c&&c(p.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);p.fragment&&p.fragment.l(t),t.forEach(a)}else p.fragment&&p.fragment.c();s.intro&&A(e.$$.fragment),B(e,s.target,s.anchor,s.customElement),q()}b(d)}class Z{$destroy(){O(this,1),this.$destroy=t}$on(e,n){if(!s(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function R(e){let n,o,s;return{c(){n=f("link"),o=p(),s=f("div"),s.innerHTML='<div class="wrapper svelte-utlrxw"><div class="label svelte-utlrxw">Google Search</div> \n    <form class="search-bar svelte-utlrxw"><input id="search-query-input" type="text" onfocus="this.value=&#39;&#39;" name="search-query-input" placeholder="Search" value="" class="svelte-utlrxw"/> \n      <button id="search-query-submit" name="search-query-submit" type="" class="svelte-utlrxw"><svg style="width:24px; height:24px" viewBox="0 0 24 24"><path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"></path></svg></button></form></div>',m(n,"href","https://fonts.googleapis.com/css?family=Roboto&display=swap"),m(n,"rel","stylesheet"),m(s,"class","search-body svelte-utlrxw")},m(t,e){i(t,n,e),i(t,o,e),i(t,s,e)},p:t,i:t,o:t,d(t){t&&a(n),t&&a(o),t&&a(s)}}}function F(t){return window.onload=function(){const t=document.querySelector(".search-bar");t.addEventListener("submit",(function(e){e.preventDefault();const n=t.querySelector("input").value;window.location.href=`https://www.google.com/search?q=${n}`}))},[]}class G extends Z{constructor(t){super(),P(this,t,F,R,r,{})}}function I(e){let n,o,s;return{c(){n=f("link"),o=p(),s=f("div"),s.innerHTML='<div class="stack-wrapper svelte-14pvdjn"><div class="stack-label svelte-14pvdjn">Stack Overflow</div> \n        <form class="stack-search-bar svelte-14pvdjn"><input id="stack-search-query-input" type="text" onfocus="this.value=&#39;&#39;" name="stack-search-query-input" placeholder="Search" value="" class="svelte-14pvdjn"/> \n            <button id="stack-search-query-submit" name="stack-search-query-submit" type="" class="svelte-14pvdjn"><svg style="width:24px; height:24px" viewBox="0 0 24 24"><path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"></path></svg></button></form></div>',m(n,"href","https://fonts.googleapis.com/css?family=Roboto&display=swap"),m(n,"rel","stylesheet"),m(s,"class","stack-search-body svelte-14pvdjn")},m(t,e){i(t,n,e),i(t,o,e),i(t,s,e)},p:t,i:t,o:t,d(t){t&&a(n),t&&a(o),t&&a(s)}}}function J(t){return window.onload=function(){const t=document.querySelector(".stack-search-bar");t.addEventListener("submit",(function(e){e.preventDefault();const n=t.querySelector("input").value;window.location.href=`https://stackoverflow.com/search?q=${n}`}))},[]}class K extends Z{constructor(t){super(),P(this,t,J,I,r,{})}}function Q(t,e,n){const o=t.slice();return o[3]=e[n],o}function U(t){let e,n,s,r,u,d;function v(){return t[1](t[3])}function g(...e){return t[2](t[3],...e)}return{c(){e=f("div"),n=f("i"),r=p(),m(n,"class",s=c(t[3].icon)+" svelte-zgl39d"),m(e,"class","social-media-favorite svelte-zgl39d"),m(e,"tabindex","0")},m(t,o){i(t,e,o),l(e,n),l(e,r),u||(d=[h(e,"click",v),h(e,"keydown",g)],u=!0)},p(e,o){t=e,1&o&&s!==(s=c(t[3].icon)+" svelte-zgl39d")&&m(n,"class",s)},d(t){t&&a(e),u=!1,o(d)}}}function W(e){let n,o,s,r=e[0],c=[];for(let t=0;t<r.length;t+=1)c[t]=U(Q(e,r,t));return{c(){n=f("link"),o=p(),s=f("div");for(let t=0;t<c.length;t+=1)c[t].c();m(n,"rel","stylesheet"),m(n,"href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"),m(s,"class","social-media-favorites svelte-zgl39d")},m(t,e){i(t,n,e),i(t,o,e),i(t,s,e);for(let t=0;t<c.length;t+=1)c[t]&&c[t].m(s,null)},p(t,[e]){if(1&e){let n;for(r=t[0],n=0;n<r.length;n+=1){const o=Q(t,r,n);c[n]?c[n].p(o,e):(c[n]=U(o),c[n].c(),c[n].m(s,null))}for(;n<c.length;n+=1)c[n].d(1);c.length=r.length}},i:t,o:t,d(t){t&&a(n),t&&a(o),t&&a(s),u(c,t)}}}function X(t,e,n){let{favorites:o=[{link:"https://www.twitter.com/your_twitter_username",icon:"fab fa-twitter"},{link:"https://www.facebook.com/your_facebook_username",icon:"fab fa-facebook-f"},{link:"https://www.instagram.com/your_instagram_username",icon:"fab fa-instagram"},{link:"https://www.linkedin.com/in/your_linkedin_username",icon:"fab fa-linkedin-in"}]}=e;return t.$$set=t=>{"favorites"in t&&n(0,o=t.favorites)},[o,t=>window.open(t.link,"_blank"),(t,e)=>{13===e.which&&window.open(t.link,"_blank")}]}class Y extends Z{constructor(t){super(),P(this,t,X,W,r,{favorites:0})}}function tt(e){let n,o,s,r,c;return{c(){n=f("footer"),o=f("p"),s=d(e[0]),r=d(" @v"),c=d(e[1]),m(o,"class","svelte-1se7cwe"),m(n,"class","svelte-1se7cwe")},m(t,e){i(t,n,e),l(n,o),l(o,s),l(o,r),l(o,c)},p(t,[e]){1&e&&v(s,t[0]),2&e&&v(c,t[1])},i:t,o:t,d(t){t&&a(n)}}}function et(t,e,n){let{name:o}=e,{version:s}=e;return t.$$set=t=>{"name"in t&&n(0,o=t.name),"version"in t&&n(1,s=t.version)},[o,s]}class nt extends Z{constructor(t){super(),P(this,t,et,tt,r,{name:0,version:1})}}function ot(t,e,n){const o=t.slice();return o[5]=e[n],o}function st(t){let e,n,o,s,r,u,v,g=t[5].icon+"";function $(){return t[3](t[5])}return{c(){e=f("button"),n=f("span"),o=d(g),s=p(),m(n,"class","nav-icon svelte-6xmn42"),m(e,"class",r=c("nav-button "+(t[0]===t[5].name?"active":""))+" svelte-6xmn42")},m(t,r){i(t,e,r),l(e,n),l(n,o),l(e,s),u||(v=h(e,"click",$),u=!0)},p(n,o){t=n,1&o&&r!==(r=c("nav-button "+(t[0]===t[5].name?"active":""))+" svelte-6xmn42")&&m(e,"class",r)},d(t){t&&a(e),u=!1,v()}}}function rt(e){let n,o=e[1],s=[];for(let t=0;t<o.length;t+=1)s[t]=st(ot(e,o,t));return{c(){n=f("nav");for(let t=0;t<s.length;t+=1)s[t].c();m(n,"class","svelte-6xmn42")},m(t,e){i(t,n,e);for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(n,null)},p(t,[e]){if(7&e){let r;for(o=t[1],r=0;r<o.length;r+=1){const c=ot(t,o,r);s[r]?s[r].p(c,e):(s[r]=st(c),s[r].c(),s[r].m(n,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=o.length}},i:t,o:t,d(t){t&&a(n),u(s,t)}}}function ct(t,e,n){const o=w();let{activeTab:s=""}=e;function r(t){n(0,s=t.name),o("tabSelected",s)}return t.$$set=t=>{"activeTab"in t&&n(0,s=t.activeTab)},[s,[{name:"Home",icon:"🏠"},{name:"Profile",icon:"👤"},{name:"Developer",icon:"💻"},{name:"To-Do",icon:"📝"}],r,t=>r(t)]}class lt extends Z{constructor(t){super(),P(this,t,ct,rt,r,{activeTab:0})}}function it(t,e,n){const o=t.slice();return o[7]=e[n],o}function at(t,e){let n,o,s,r,c,u,g,$=e[7].title+"";function b(){return e[5](e[7])}return{key:t,first:null,c(){n=f("li"),o=d($),s=p(),r=f("button"),r.innerHTML='<svg style="width:24px; height:24px" viewBox="0 0 24 24"><path d="M5 12H19V10H5V12Z" fill="#728292"></path></svg>',c=p(),m(r,"class","todo-delete svelte-spi88j"),m(r,"id","todo-delete"),m(n,"class","svelte-spi88j"),this.first=n},m(t,e){i(t,n,e),l(n,o),l(n,s),l(n,r),l(n,c),u||(g=h(r,"click",b),u=!0)},p(t,n){e=t,2&n&&$!==($=e[7].title+"")&&v(o,$)},d(t){t&&a(n),u=!1,g()}}}function ut(e){let n,s,r,c,u,d,v,$,b=[],w=new Map,y=e[1];const k=t=>t[7].id;for(let t=0;t<y.length;t+=1){let n=it(e,y,t),o=k(n);w.set(o,b[t]=at(o,n))}return{c(){n=f("todolist"),s=f("input"),r=p(),c=f("button"),c.innerHTML='<svg style="width:24px; height:24px" viewBox="0 0 24 24"><path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#666666"></path></svg>',u=p(),d=f("ul");for(let t=0;t<b.length;t+=1)b[t].c();m(s,"class","todo-input svelte-spi88j"),m(s,"type","text"),m(s,"placeholder","Create a new todo"),m(c,"class","todo-submit svelte-spi88j"),m(c,"id","todo-submit"),m(n,"class","svelte-spi88j")},m(t,o){i(t,n,o),l(n,s),g(s,e[0]),l(n,r),l(n,c),l(n,u),l(n,d);for(let t=0;t<b.length;t+=1)b[t]&&b[t].m(d,null);v||($=[h(s,"input",e[4]),h(c,"click",e[2])],v=!0)},p(t,[e]){1&e&&s.value!==t[0]&&g(s,t[0]),10&e&&(y=t[1],b=function(t,e,n,s,r,c,l,i,a,u,f,d){let p=t.length,h=c.length,m=p;const v={};for(;m--;)v[t[m].key]=m;const g=[],$=new Map,b=new Map,w=[];for(m=h;m--;){const t=d(r,c,m),o=n(t);let i=l.get(o);i?s&&w.push((()=>i.p(t,e))):(i=u(o,t),i.c()),$.set(o,g[m]=i),o in v&&b.set(o,Math.abs(m-v[o]))}const y=new Set,k=new Set;function x(t){A(t,1),t.m(i,f),l.set(t.key,t),f=t.first,h--}for(;p&&h;){const e=g[h-1],n=t[p-1],o=e.key,s=n.key;e===n?(f=e.first,p--,h--):$.has(s)?!l.has(o)||y.has(o)?x(e):k.has(s)?p--:b.get(o)>b.get(s)?(k.add(o),x(e)):(y.add(s),p--):(a(n,l),p--)}for(;p--;){const e=t[p];$.has(e.key)||a(e,l)}for(;h;)x(g[h-1]);return o(w),g}(b,e,k,1,t,y,w,d,D,at,null,it))},i:t,o:t,d(t){t&&a(n);for(let t=0;t<b.length;t+=1)b[t].d();v=!1,o($)}}}function ft(t,e,n){let o="",s=[];function r(t){n(1,s=s.filter((e=>e.id!==t)))}return[o,s,function(){n(1,s=[...s,{id:Date.now(),title:o,completed:!1}]),n(0,o="")},r,function(){o=this.value,n(0,o)},t=>r(t.id)]}class dt extends Z{constructor(t){super(),P(this,t,ft,ut,r,{})}}function pt(t){let e,n;return e=new dt({}),{c(){z(e.$$.fragment)},m(t,o){B(e,t,o),n=!0},i(t){n||(A(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function ht(t){let e,n;return e=new K({}),{c(){z(e.$$.fragment)},m(t,o){B(e,t,o),n=!0},i(t){n||(A(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function mt(t){let e,n;return e=new Y({}),{c(){z(e.$$.fragment)},m(t,o){B(e,t,o),n=!0},i(t){n||(A(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function vt(t){let e,n;return e=new G({}),{c(){z(e.$$.fragment)},m(t,o){B(e,t,o),n=!0},i(t){n||(A(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function gt(t){let e,n,s,r,c,u,d,h,v,g,$;function b(e){t[1](e)}let w={};void 0!==t[0]&&(w.activeTab=t[0]),n=new lt({props:w}),k.push((()=>function(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}(n,"activeTab",b)));const y=[vt,mt,ht,pt],x=[];function j(t,e){return"Home"==t[0]?0:"Profile"==t[0]?1:"Developer"==t[0]?2:"To-Do"==t[0]?3:-1}return~(d=j(t))&&(h=x[d]=y[d](t)),g=new nt({props:{name:$t,version:bt}}),{c(){e=f("main"),z(n.$$.fragment),r=p(),c=f("h1"),c.textContent=`${$t}`,u=p(),h&&h.c(),v=p(),z(g.$$.fragment),m(c,"class","svelte-1tky8bj"),m(e,"class","svelte-1tky8bj")},m(t,o){i(t,e,o),B(n,e,null),l(e,r),l(e,c),l(e,u),~d&&x[d].m(e,null),i(t,v,o),B(g,t,o),$=!0},p(t,[r]){const c={};var l;!s&&1&r&&(s=!0,c.activeTab=t[0],l=()=>s=!1,_.push(l)),n.$set(c);let i=d;d=j(t),d!==i&&(h&&(S={r:0,c:[],p:S},V(x[i],1,1,(()=>{x[i]=null})),S.r||o(S.c),S=S.p),~d?(h=x[d],h||(h=x[d]=y[d](t),h.c()),A(h,1),h.m(e,null)):h=null)},i(t){$||(A(n.$$.fragment,t),A(h),A(g.$$.fragment,t),$=!0)},o(t){V(n.$$.fragment,t),V(h),V(g.$$.fragment,t),$=!1},d(t){t&&a(e),O(n),~d&&x[d].d(),t&&a(v),O(g,t)}}}let $t="Startpage",bt="0.0.1";function wt(t,e,n){let o="Home";return[o,function(t){o=t,n(0,o)}]}return new class extends Z{constructor(t){super(),P(this,t,wt,gt,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
