import{r as e,m as t,a as n,n as a,i as o,d as s,h as r,b as l,w as i,p as c,c as u,o as d,e as p,f as h,t as f,g as v,j as m,k as g,l as b,q as k,s as w,u as y,v as x,F as $,x as C,y as _,z as L,A as S,B as E,C as A,D as I,E as T}from"./framework.c00dda38.js";const q="undefined"!=typeof window;function B(e,t){return`${e}${t}`.replace(/\/+/g,"/")}function U(e){let t=e.replace(/\.html$/,"");if(t.endsWith("/")&&(t+="index"),q){const e="/swire-docs/";t=t.slice(e.length).replace(/\//g,"_")+".md";t=`${e}_assets/${t}.${__VP_HASH_MAP__[t]}.js`}else t=`./${t.slice(1).replace(/\//g,"_")}.md.js`;return t}const j=Symbol();function D(){const e=o(j);if(!e)throw new Error("useRouter() is called without provider.");return e}function H(){return D().route}function R(e,t,n=!1){const a=document.querySelector(".nav-bar").offsetHeight,o=e.classList.contains(".header-anchor")?e:document.querySelector(decodeURIComponent(t));if(o){const e=o.offsetTop-a-15;!n||Math.abs(e-window.scrollY)>window.innerHeight?window.scrollTo(0,e):window.scrollTo({left:0,top:e,behavior:"smooth"})}}const O=s({name:"VitePressContent",setup(){const e=H();return()=>e.component?r(e.component):null}});var P=s({setup(){const e=l(null),t=l(!1);return i(t,(t=>{!1===t&&(e.value.scrollTop=0)})),{el:e,open:t}}});const W=v("data-v-5c157e32");c("data-v-5c157e32");const M=h("p",{class:"title"},"Debug",-1),z={class:"block"},F={class:"block"},N={class:"block"};u();const V=W(((e,t,n,a,o,s)=>(d(),p("div",{class:["debug",{open:e.open}],ref:"el",onClick:t[1]||(t[1]=t=>e.open=!e.open)},[M,h("pre",z,"$page "+f(e.$page),1),h("pre",F,"$siteByRoute "+f(e.$siteByRoute),1),h("pre",N,"$site "+f(e.$site),1)],2))));P.render=V,P.__scopeId="data-v-5c157e32";const K=s({setup(e,{slots:t}){const n=l(!1);return m((()=>{n.value=!0})),()=>n.value&&t.default?t.default():null}});const G=l((Y='{"lang":"en-US","title":"Swire Docs","description":"The official Docs for Swire.","base":"/swire-docs/","head":[["link",{"rel":"icon","href":"/logo.png"}],["script",{"src":"https://unpkg.com/thesemetrics@latest","async":""}]],"themeConfig":{"locales":{"/":{"nav":[{"text":"Doc","link":"/doc/"}],"sidebar":[{"text":"Introduction","link":"/introduction.html"}]}}},"locales":{"/":{"lang":"en-US","title":"Swire docs","description":"The official router for Vue.js."}}}',n(JSON.parse(Y))));var Y;function J(){return G}const X="undefined"!=typeof window;function Q(e,t){const n=function(e,t){t.sort(((e,t)=>{const n=t.split("/").length-e.split("/").length;return 0!==n?n:t.length-e.length}));for(const n of t)if(e.startsWith(n))return n}(t,Object.keys(e));return n?e[n]:void 0}function Z(e,t){t=function(e,t){if(!X)return t;const n=e.base,a=n.endsWith("/")?n.slice(0,-1):n;return t.slice(a.length)}(e,t);const n=Q(e.locales||{},t)||{},a=Q(e.themeConfig&&e.themeConfig.locales||{},t)||{};return{...e,...n,themeConfig:{...e.themeConfig,...a,locales:{}},locales:{}}}function ee(e){const t=e||H();return g((()=>Z(G.value,t.path)))}function te(e){const t=e||H();return g((()=>t.data))}function ne(e,t){const n=Array.from(document.querySelectorAll("meta"));let a=!0;const o=e=>{a?a=!1:(n.forEach((e=>document.head.removeChild(e))),n.length=0,e&&e.length&&e.forEach((e=>{const t=function([e,t,n]){const a=document.createElement(e);for(const e in t)a.setAttribute(e,t[e]);n&&(a.innerHTML=n);return a}(e);document.head.appendChild(t),n.push(t)})))};b((()=>{const n=e.data,a=t.value,s=n&&n.title;document.title=(s?s+" | ":"")+a.title,o([["meta",{charset:"utf-8"}],["meta",{name:"viewport",content:"width=device-width,initial-scale=1"}],["meta",{name:"description",content:a.description}],...a.head,...n&&n.frontmatter.head||[]])}))}const ae=v("data-v-4f592d84")(((e,t)=>(d(),p("a",{class:"nav-bar-title",href:e.$site.base,"aria-label":`${e.$site.title}, back to home`},[e.$themeConfig.logo?(d(),p("img",{key:0,class:"logo",src:e.$withBase(e.$themeConfig.logo),alt:"Logo"},null,8,["src"])):k("v-if",!0),w(" "+f(e.$site.title),1)],8,["href","aria-label"])))),oe={};oe.render=ae,oe.__scopeId="data-v-4f592d84";const se=["GitHub","GitLab","Bitbucket"].map((e=>[e,new RegExp(e,"i")]));function re(){const e=ee();return g((()=>{const t=e.value.themeConfig,n=t.docsRepo||t.repo;if(!n)return null;const a=/^https?:/.test(o=n)?o:`https://github.com/${o}`;var o;return{text:function(e,t){if(t)return t;const n=e.match(/^https?:\/\/[^/]+/);if(!n)return"Source";const a=se.find((([e,t])=>t.test(n[0])));if(a&&a[0])return a[0];return"Source"}(a,t.repoLabel),link:a}}))}const le=/#.*$/,ie=/(index)?\.(md|html)$/,ce=/\/$/,ue=/^[a-z]+:/i;function de(e){return Array.isArray(e)}function pe(e){return ue.test(e)}function he(e){return decodeURI(e).replace(le,"").replace(ie,"")}function fe(e){return function(e){return/(\.html|\/)$/.test(e)?e:`${e}/`}(ve(e))}function ve(e){return/^\//.test(e)?e:`/${e}`}function me(e){return e.replace(/(index)?(\.(md|html))?$/,"")||"/"}function ge(e){const t=H(),{withBase:n}=function(){const e=J();return{withBase:function(t){return B(e.value.base,t)}}}(),a=pe(e.link);return{props:g((()=>({class:{active:be(n(e.link))===be(t.path),isExternal:a},href:a?e.link:n(e.link),target:e.target||a?"_blank":null,rel:e.rel||a?"noopener noreferrer":null,"aria-label":e.ariaLabel}))),isExternal:a}}function be(e){return(e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\.html$/,"")).endsWith("/")&&(e+="index"),e}const ke={class:"icon outbound",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},we=h("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"},null,-1),ye=h("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"},null,-1);const xe={render:function(e,t){return d(),p("svg",ke,[we,ye])}},$e=v("data-v-58e79b0c");c("data-v-58e79b0c");const Ce={class:"nav-link"};u();var _e=s({expose:[],props:{item:{type:null,required:!0}},setup(e){const{item:t}=e,{props:n,isExternal:a}=ge(t);return $e(((e,o)=>(d(),p("div",Ce,[h("a",x({class:"item"},y(n)),[w(f(t.text)+" ",1),y(a)?(d(),p(xe,{key:0})):k("v-if",!0)],16)]))))}});_e.__scopeId="data-v-58e79b0c";const Le=v("data-v-69835a64");c("data-v-69835a64");const Se={class:"nav-dropdown-link-item"},Ee=h("span",{class:"arrow"},null,-1),Ae={class:"text"},Ie={class:"icon"};u();var Te=s({expose:[],props:{item:{type:null,required:!0}},setup(e){const{item:t}=e,{props:n,isExternal:a}=ge(t);return Le(((e,o)=>(d(),p("div",Se,[h("a",x({class:"item"},y(n)),[Ee,h("span",Ae,f(t.text),1),h("span",Ie,[y(a)?(d(),p(xe,{key:0})):k("v-if",!0)])],16)]))))}});Te.__scopeId="data-v-69835a64";const qe=v("data-v-7019a383");c("data-v-7019a383");const Be={class:"button-text"},Ue={class:"dialog"};u();var je=s({expose:[],props:{item:{type:null,required:!0}},setup(e){const t=H(),n=l(!1);function a(){n.value=!n.value}return i((()=>t.path),(()=>{n.value=!1})),qe(((t,o)=>(d(),p("div",{class:["nav-dropdown-link",{open:n.value}]},[h("button",{class:"button","aria-label":e.item.ariaLabel,onClick:a},[h("span",Be,f(e.item.text),1),h("span",{class:["button-arrow",n.value?"down":"right"]},null,2)],8,["aria-label"]),h("ul",Ue,[(d(!0),p($,null,C(e.item.items,(e=>(d(),p("li",{key:e.text,class:"dialog-item"},[h(Te,{item:e},null,8,["item"])])))),128))])],2))))}});je.__scopeId="data-v-7019a383";const De=v("data-v-7e43412a");c("data-v-7e43412a");const He={key:0,class:"nav-links"},Re={key:1,class:"item"},Oe={key:2,class:"item"};u();var Pe=s({expose:[],setup(e){const t=ee(),n=function(){const e=H(),t=J();return g((()=>{const n=t.value.themeConfig.locales;if(!n)return null;const a=Object.keys(n);if(a.length<=1)return null;const o=q?t.value.base:"/",s=o.endsWith("/")?o.slice(0,-1):o,r=e.path.slice(s.length),l=a.find((e=>"/"!==e&&r.startsWith(e))),i=l?r.substring(l.length-1):r,c=a.map((e=>{const t=e.endsWith("/")?e.slice(0,-1):e;return{text:n[e].label,link:`${t}${i}`}})),u=l||"/";return{text:n[u].selectText?n[u].selectText:"Languages",items:c}}))}(),a=re(),o=g((()=>s.value||a.value)),s=g((()=>t.value.themeConfig.nav));return De(((e,t)=>y(o)?(d(),p("nav",He,[y(s)?(d(!0),p($,{key:0},C(y(s),(e=>(d(),p("div",{key:e.text,class:"item"},[e.items?(d(),p(je,{key:0,item:e},null,8,["item"])):(d(),p(_e,{key:1,item:e},null,8,["item"]))])))),128)):k("v-if",!0),y(n)?(d(),p("div",Re,[h(je,{item:y(n)},null,8,["item"])])):k("v-if",!0),y(a)?(d(),p("div",Oe,[h(_e,{item:y(a)},null,8,["item"])])):k("v-if",!0)])):k("v-if",!0)))}});Pe.__scopeId="data-v-7e43412a";var We={emits:["toggle"]};const Me=h("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[h("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",class:""})],-1);We.render=function(e,t,n,a,o,s){return d(),p("div",{class:"sidebar-button",onClick:t[1]||(t[1]=t=>e.$emit("toggle"))},[Me])};const ze=v("data-v-6e9501ba");c("data-v-6e9501ba");const Fe={class:"nav-bar"},Ne=h("div",{class:"flex-grow"},null,-1),Ve={class:"nav"};u();var Ke=s({expose:[],emits:["toggle"],setup:e=>ze(((e,t)=>(d(),p("header",Fe,[h(We,{onToggle:t[1]||(t[1]=t=>e.$emit("toggle"))}),h(oe),Ne,h("div",Ve,[h(Pe)]),_(e.$slots,"search")]))))});function Ge(){let e=null,t=null;const n=function(e,t){let n,a=!1;return()=>{n&&clearTimeout(n),a?n=setTimeout(e,t):(e(),a=!0,setTimeout((()=>{a=!1}),t))}}(a,300);function a(){const e=function(e){return[].slice.call(document.querySelectorAll(".header-anchor")).filter((t=>e.some((e=>e.hash===t.hash))))}([].slice.call(document.querySelectorAll(".sidebar a.sidebar-link-item")));for(let t=0;t<e.length;t++){const n=e[t],a=e[t+1],[s,r]=Je(t,n,a);if(s)return history.replaceState(null,document.title,r||" "),void o(r)}}function o(n){if(s(t),s(e),t=document.querySelector(`.sidebar a[href="${n}"]`),!t)return;t.classList.add("active");const a=t.closest(".sidebar-links > ul > li");a&&a!==t.parentElement?(e=a.querySelector("a"),e&&e.classList.add("active")):e=null}function s(e){e&&e.classList.remove("active")}m((()=>{a(),window.addEventListener("scroll",n)})),L((()=>{o(decodeURIComponent(location.hash))})),S((()=>{window.removeEventListener("scroll",n)}))}function Ye(e){const t=document.querySelector(".nav-bar").offsetHeight;return e.parentElement.offsetTop-t-15}function Je(e,t,n){const a=window.scrollY;return 0===e&&0===a?[!0,null]:a<Ye(t)?[!1,null]:!n||a<Ye(n)?[!0,decodeURIComponent(t.hash)]:[!1,null]}function Xe(e,t){if(function(e){return!1===e||"auto"===e||de(e)}(e))return e;t=fe(t=ve(t=me(t)).split("/")[1]||"/");for(const n in e)if(t===fe(n))return e[n];return"auto"}function Qe(e){return e.reduce(((e,t)=>(t.link&&e.push({text:t.text,link:me(t.link)}),function(e){return void 0!==e.children}(t)&&(e=[...e,...Qe(t.children)]),e)),[])}function Ze(e,t){const n=[];if(void 0===e)return[];let a;return e.forEach((({level:e,title:o,slug:s})=>{if(e-1>t)return;const r={text:o,link:`#${s}`};2===e?(a=r,n.push(r)):a&&(a.children||(a.children=[])).push(r)})),n}Ke.__scopeId="data-v-6e9501ba";const et=e=>{const t=H(),n=J(),a=t.data.headers,o=e.item.text,s=function(e,t){if(void 0===t)return t;if(t.startsWith("#"))return t;return function(e,t){const n=e.endsWith("/"),a=t.startsWith("/");return n&&a?e.slice(0,-1)+t:n||a?e+t:`${e}/${t}`}(e,t)}(n.value.base,e.item.link),l=e.item.children,i=function(e,t){return void 0!==t&&he(e.path)===he(t)}(t,s),c=tt(i,l,a);return r("li",{class:"sidebar-link"},[r(s?"a":"p",{class:{"sidebar-link-item":!0,active:i},href:s},o),c])};function tt(e,t,n){return t&&t.length>0?r("ul",{class:"sidebar-links"},t.map((e=>r(et,{item:e})))):e&&n?tt(!1,function(e){return nt(function(e){let t;return(e=e.map((e=>Object.assign({},e)))).forEach((e=>{2===e.level?t=e:t&&(t.children||(t.children=[])).push(e)})),e.filter((e=>2===e.level))}(e))}(n)):null}function nt(e){return e.map((e=>({text:e.title,link:`#${e.slug}`,children:e.children?nt(e.children):void 0})))}const at={key:0,class:"sidebar-links"};var ot=s({expose:[],setup(e){const t=function(){const e=H(),t=ee();return Ge(),g((()=>{const n=e.data.headers,a=e.data.frontmatter.sidebar,o=e.data.frontmatter.sidebarDepth;if(!1===a)return[];if("auto"===a)return Ze(n,o);const s=Xe(t.value.themeConfig.sidebar,e.path);return!1===s?[]:"auto"===s?Ze(n,o):s}))}();return(e,n)=>y(t).length>0?(d(),p("ul",at,[(d(!0),p($,null,C(y(t),(e=>(d(),p(y(et),{key:e.text,item:e},null,8,["item"])))),128))])):k("v-if",!0)}});const st=v("data-v-6d3fedc6");var rt=s({expose:[],props:{open:{type:Boolean,required:!0}},setup:e=>st(((t,n)=>(d(),p("aside",{class:["sidebar",{open:e.open}]},[h(Pe,{class:"nav"}),_(t.$slots,"sidebar-top"),h(ot),_(t.$slots,"sidebar-bottom")],2))))});rt.__scopeId="data-v-6d3fedc6";const lt=/bitbucket.org/;function it(){const e=ee(),t=te();return{url:g((()=>{const n=null==t.value.frontmatter.editLink?e.value.themeConfig.editLinks:t.value.frontmatter.editLink;const{repo:a,docsDir:o="",docsBranch:s="master",docsRepo:r=a}=e.value.themeConfig,{relativePath:l}=t.value;return n&&l&&a?function(e,t,n,a,o){return lt.test(e)?function(e,t,n,a,o){return(pe(t)?t:e).replace(ce,"")+`/src/${a}/`+(n?n.replace(ce,"")+"/":"")+o+`?mode=edit&spa=0&at=${a}&fileviewer=file-view-default`}(e,t,n,a,o):function(e,t,n,a,o){return(pe(t)?t:`https://github.com/${t}`).replace(ce,"")+`/edit/${a}/`+(n?n.replace(ce,"")+"/":"")+o}(0,t,n,a,o)}(a,r,o,s,l):null})),text:g((()=>e.value.themeConfig.editLinkText||"Edit this page"))}}const ct=v("data-v-fff8e848");c("data-v-fff8e848");const ut={class:"edit-link"};u();var dt=s({expose:[],setup(e){const{url:t,text:n}=it();return ct(((e,a)=>(d(),p("div",ut,[y(t)?(d(),p("a",{key:0,class:"link",href:y(t),target:"_blank",rel:"noopener noreferrer"},[w(f(y(n))+" ",1),h(xe,{class:"icon"})],8,["href"])):k("v-if",!0)]))))}});dt.__scopeId="data-v-fff8e848";var pt=s({setup(){const e=ee(),t=te(),n=l(""),a=g((()=>{const t=e.value.themeConfig.lastUpdated;return void 0!==t&&!1!==t})),o=g((()=>{const t=e.value.themeConfig.lastUpdated;return!0===t?"Last Updated":t}));return m((()=>{n.value=new Date(t.value.lastUpdated).toLocaleString("en-US")})),{hasLastUpdated:a,prefix:o,datetime:n}}});const ht=v("data-v-d5f61e8a");c("data-v-d5f61e8a");const ft={key:0,class:"last-updated"},vt={class:"prefix"},mt={class:"datetime"};u();const gt=ht(((e,t,n,a,o,s)=>e.hasLastUpdated?(d(),p("p",ft,[h("span",vt,f(e.prefix)+":",1),h("span",mt,f(e.datetime),1)])):k("v-if",!0)));pt.render=gt,pt.__scopeId="data-v-d5f61e8a";var bt=s({components:{EditLink:dt,LastUpdated:pt}});const kt=v("data-v-ae772eca");c("data-v-ae772eca");const wt={class:"page-footer"},yt={class:"edit"},xt={class:"updated"};u();const $t=kt(((e,t,n,a,o,s)=>{const r=E("EditLink"),l=E("LastUpdated");return d(),p("footer",wt,[h("div",yt,[h(r)]),h("div",xt,[h(l)])])}));function Ct(){const e=ee(),t=te(),n=g((()=>me(ve(t.value.relativePath)))),a=g((()=>{const t=Xe(e.value.themeConfig.sidebar,n.value);return de(t)?Qe(t):[]})),o=g((()=>a.value.findIndex((e=>e.link===n.value)))),s=g((()=>{if(!1!==e.value.themeConfig.nextLinks&&o.value>-1&&o.value<a.value.length-1)return a.value[o.value+1]})),r=g((()=>{if(!1!==e.value.themeConfig.prevLinks&&o.value>0)return a.value[o.value-1]})),l=g((()=>!!s.value||!!r.value));return{next:s,prev:r,hasLinks:l}}bt.render=$t,bt.__scopeId="data-v-ae772eca";const _t={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Lt=h("path",{d:"M19,11H7.4l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-7,7c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8c0.1,0.1,0.1,0.2,0.2,0.3l7,7c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.4,13H19c0.6,0,1-0.4,1-1S19.6,11,19,11z"},null,-1);const St={render:function(e,t){return d(),p("svg",_t,[Lt])}},Et={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},At=h("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1);const It={render:function(e,t){return d(),p("svg",Et,[At])}},Tt=v("data-v-3a05b423");c("data-v-3a05b423");const qt={key:0,class:"next-and-prev-link"},Bt={class:"container"},Ut={class:"prev"},jt={class:"text"},Dt={class:"next"},Ht={class:"text"};u();var Rt=s({expose:[],setup(e){const{hasLinks:t,prev:n,next:a}=Ct();return Tt(((e,o)=>y(t)?(d(),p("div",qt,[h("div",Bt,[h("div",Ut,[y(n)?(d(),p("a",{key:0,class:"link",href:e.$withBase(y(n).link)},[h(St,{class:"icon icon-prev"}),h("span",jt,f(y(n).text),1)],8,["href"])):k("v-if",!0)]),h("div",Dt,[y(a)?(d(),p("a",{key:0,class:"link",href:e.$withBase(y(a).link)},[h("span",Ht,f(y(a).text),1),h(It,{class:"icon icon-next"})],8,["href"])):k("v-if",!0)])])])):k("v-if",!0)))}});Rt.__scopeId="data-v-3a05b423";const Ot=v("data-v-aa5adba8");c("data-v-aa5adba8");const Pt={class:"page"},Wt={class:"container"},Mt={class:"content"};u();var zt=s({expose:[],setup:e=>Ot(((e,t)=>{const n=E("Content");return d(),p("main",Pt,[h("div",Wt,[_(e.$slots,"top"),h("div",Mt,[h(n)]),h(bt),h(Rt),_(e.$slots,"bottom")])])}))});zt.__scopeId="data-v-aa5adba8";var Ft=s({expose:[],setup(e){const t=A((()=>import("./Home.747eae25.js"))),n=A((()=>import("./CarbonAds.adf9e0dc.js"))),a=A((()=>import("./BuySellAds.6ab72551.js"))),o=A((()=>import("./AlgoliaSearchBox.fb8aaa78.js"))),s=H(),r=J(),c=ee(),u=g((()=>r.value.themeConfig)),f=te(),v=g((()=>!!s.data.frontmatter.customLayout)),m=g((()=>!!s.data.frontmatter.home)),b=g((()=>{const{themeConfig:e}=c.value,{frontmatter:t}=s.data;return!1!==t.navbar&&!1!==e.navbar&&(r.value.title||e.logo||e.repo||e.nav)})),w=l(!1),x=g((()=>{const{frontmatter:e}=s.data,{themeConfig:t}=c.value;return!e.home&&!1!==e.sidebar&&("object"==typeof t.sidebar&&0!=Object.keys(t.sidebar).length||Array.isArray(t.sidebar)&&0!=t.sidebar.length)})),C=e=>{w.value="boolean"==typeof e?e:!w.value},L=C.bind(null,!1);i(s,L);const S=g((()=>[{"no-navbar":!b.value,"sidebar-open":w.value,"no-sidebar":!x.value}]));return(e,s)=>{const r=E("Content"),l=E("Debug");return d(),p($,null,[h("div",{class:["theme",y(S)]},[y(b)?(d(),p(Ke,{key:0,onToggle:C},{search:I((()=>[_(e.$slots,"navbar-search",{},(()=>[y(u).algolia?(d(),p(y(o),{key:0,options:y(u).algolia},null,8,["options"])):k("v-if",!0)]))])),_:1})):k("v-if",!0),h(rt,{open:w.value},{"sidebar-top":I((()=>[_(e.$slots,"sidebar-top")])),"sidebar-bottom":I((()=>[_(e.$slots,"sidebar-bottom")])),_:1},8,["open"]),k(" TODO: make this button accessible "),h("div",{class:"sidebar-mask",onClick:s[1]||(s[1]=e=>C(!1))}),y(v)?(d(),p(r,{key:1})):y(m)?(d(),p(y(t),{key:2},{hero:I((()=>[_(e.$slots,"home-hero")])),features:I((()=>[_(e.$slots,"home-features")])),footer:I((()=>[_(e.$slots,"home-footer")])),_:1})):(d(),p(zt,{key:3},{top:I((()=>[_(e.$slots,"page-top-ads",{},(()=>[y(u).carbonAds?(d(),p(y(n),{key:"carbon"+y(f).relativePath,code:y(u).carbonAds.carbon,placement:y(u).carbonAds.placement},null,8,["code","placement"])):k("v-if",!0)])),_(e.$slots,"page-top")])),bottom:I((()=>[_(e.$slots,"page-bottom"),_(e.$slots,"page-bottom-ads",{},(()=>[y(u).carbonAds&&y(u).carbonAds.custom?(d(),p(y(a),{key:"custom"+y(f).relativePath,code:y(u).carbonAds.custom,placement:y(u).carbonAds.placement},null,8,["code","placement"])):k("v-if",!0)]))])),_:1}))],2),h(l)],64)}}});const Nt={class:"theme"},Vt=h("h1",null,"404",-1);const Kt={Layout:Ft,NotFound:s({expose:[],setup(e){const t=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."];return(e,n)=>(d(),p("div",Nt,[Vt,h("blockquote",null,f(t[Math.floor(Math.random()*t.length)]),1),h("a",{href:e.$site.base,"aria-label":"go to home"},"Take me home.",8,["href"])]))}})},Gt=new Set,Yt=()=>document.createElement("link");let Jt;const Xt=q&&(Jt=Yt())&&Jt.relList&&Jt.relList.supports&&Jt.relList.supports("prefetch")?e=>{const t=Yt();t.rel="prefetch",t.href=e,document.head.appendChild(t)}:e=>{const t=new XMLHttpRequest;t.open("GET",e,t.withCredentials=!0),t.send()};const Qt=Kt.NotFound||(()=>"404 Not Found"),Zt={name:"VitePressApp",setup:()=>(function(){if(!q)return;if(!window.IntersectionObserver)return;let e;if((e=navigator.connection)&&(e.saveData||/2g/.test(e.effectiveType)))return;const t=window.requestIdleCallback||setTimeout;let n=null;const a=()=>{n&&n.disconnect(),n=new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting){const t=e.target;n.unobserve(t);const{pathname:a}=t;if(!Gt.has(a)){Gt.add(a);const e=U(a);Xt(e)}}}))})),t((()=>{document.querySelectorAll("#app a").forEach((e=>{const{target:t,hostname:a,pathname:o}=e;"_blank"!==t&&a===location.hostname&&(o!==location.pathname?n.observe(e):Gt.add(o))}))}))};m(a);const o=H();i((()=>o.path),a),S((()=>{n&&n.disconnect()}))}(),()=>r(Kt.Layout))};function en(){const o=function(){let o,s=q;return function(o,s){const r=e({path:"/",component:null,data:null}),l="undefined"!=typeof window;function i(e=(l?location.href:"/")){const t=new URL(e,"http://a.com");return t.pathname.endsWith("/")||t.pathname.endsWith(".html")||(t.pathname+=".html",e=t.pathname+t.search+t.hash),l&&(history.replaceState({scrollPosition:window.scrollY},document.title),history.pushState(null,"",e)),u(e)}let c=null;async function u(e,i=0){const u=new URL(e,"http://a.com"),d=c=u.pathname;try{let e=o(d);if("then"in e&&"function"==typeof e.then&&(e=await e),c===d){c=null;const{default:o,__pageData:s}=e;if(!o)throw new Error(`Invalid route component: ${o}`);r.path=d,r.component=t(o),r.data=n(JSON.parse(s)),l&&a((()=>{if(u.hash&&!i){const e=document.querySelector(decodeURIComponent(u.hash));if(e)return void R(e,u.hash)}window.scrollTo(0,i)}))}}catch(e){e.message.match(/fetch/)||console.error(e),c===d&&(c=null,r.path=d,r.component=s?t(s):null)}}return l&&(window.addEventListener("click",(e=>{const t=e.target.closest("a");if(t){const{href:n,protocol:a,hostname:o,pathname:s,hash:r,target:l}=t,c=window.location;e.ctrlKey||e.shiftKey||e.altKey||e.metaKey||"_blank"===l||a!==c.protocol||o!==c.hostname||(e.preventDefault(),s===c.pathname?r&&r!==c.hash&&(history.pushState(null,"",r),R(t,r,t.classList.contains("header-anchor"))):i(n))}}),{capture:!0}),window.addEventListener("popstate",(e=>{u(location.href,e.state&&e.state.scrollPosition||0)})),window.addEventListener("hashchange",(e=>{e.preventDefault()}))),{route:r,go:i}}((e=>{let t=U(e);return s&&(o=t),(s||o===t)&&(t=t.replace(/\.js$/,".lean.js")),q?(s=!1,import(t)):require(t)}),Qt)}(),s=T(Zt);s.provide(j,o);const r=ee(o.route),l=te(o.route);return q&&ne(o.route,r),function(e,t,n,a){Object.defineProperties(e.config.globalProperties,{$site:{get:()=>t.value},$siteByRoute:{get:()=>n.value},$themeConfig:{get:()=>n.value.themeConfig},$page:{get:()=>a.value},$frontmatter:{get:()=>a.value.frontmatter},$title:{get:()=>a.value.title?a.value.title+" | "+n.value.title:n.value.title},$description:{get:()=>a.value.description||n.value.description},$withBase:{value:e=>B(t.value.base,e)}})}(s,G,r,l),function(e){e.component("Content",O),e.component("ClientOnly",K),e.component("Debug",(()=>null))}(s),Kt.enhanceApp&&Kt.enhanceApp({app:s,router:o,siteData:G}),{app:s,router:o}}if(q){const{app:e,router:t}=en();t.go().then((()=>{e.mount("#app")}))}export{ee as a,H as b,D as c,en as createApp,_e as s,te as u};