import{o as n,e as t,f as s,s as a}from"./framework.c00dda38.js";import{_ as e,a as o}from"./future.b48dede7.js";const c='{"title":"Getting Started","description":"","frontmatter":{},"headers":[{"level":2,"title":"HTML","slug":"html"},{"level":3,"title":"router-link","slug":"router-link"},{"level":3,"title":"router-view","slug":"router-view"},{"level":2,"title":"JavaScript","slug":"javascript"}],"relativePath":"guide/index.md","lastUpdated":1607559931863.911}';var p={};const u=s("h1",{id:"getting-started"},[s("a",{class:"header-anchor",href:"#getting-started","aria-hidden":"true"},"#"),a(" Getting Started")],-1),l=s("p",null,[s("img",{src:e,alt:"Now pu"}),s("img",{src:o,alt:"Future pu"})],-1),i=s("p",null,"Creating a Single-page Application with Vue + Vue Router feels natural: with Vue.js, we are already composing our application with components. When adding Vue Router to the mix, all we need to do is map our components to the routes and let Vue Router know where to render them. Here's a basic example:",-1),r=s("h2",{id:"html"},[s("a",{class:"header-anchor",href:"#html","aria-hidden":"true"},"#"),a(" HTML")],-1),k=s("div",{class:"language-html"},[s("pre",null,[s("code",null,[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),a("script")]),a(),s("span",{class:"token attr-name"},"src"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),a("https://unpkg.com/vue@4"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token script"}),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),a("script")]),s("span",{class:"token punctuation"},">")]),a("\n"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),a("script")]),a(),s("span",{class:"token attr-name"},"src"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),a("https://unpkg.com/vue-router@4"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token script"}),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),a("script")]),s("span",{class:"token punctuation"},">")]),a("\n\n"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),a("div")]),a(),s("span",{class:"token attr-name"},"id"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),a("app"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),a("\n  "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),a("h1")]),s("span",{class:"token punctuation"},">")]),a("Hello App!"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),a("h1")]),s("span",{class:"token punctuation"},">")]),a("\n  "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),a("p")]),s("span",{class:"token punctuation"},">")]),a("\n    "),s("span",{class:"token comment"},"\x3c!-- use the router-link component for navigation. --\x3e"),a("\n    "),s("span",{class:"token comment"},"\x3c!-- specify the link by passing the `to` prop. --\x3e"),a("\n    "),s("span",{class:"token comment"},"\x3c!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute --\x3e"),a("\n    "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),a("router-link")]),a(),s("span",{class:"token attr-name"},"to"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),a("/"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),a("Go to Home"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),a("router-link")]),s("span",{class:"token punctuation"},">")]),a("\n    "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),a("router-link")]),a(),s("span",{class:"token attr-name"},"to"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),a("/about"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),a("Go to About"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),a("router-link")]),s("span",{class:"token punctuation"},">")]),a("\n  "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),a("p")]),s("span",{class:"token punctuation"},">")]),a("\n  "),s("span",{class:"token comment"},"\x3c!-- route outlet --\x3e"),a("\n  "),s("span",{class:"token comment"},"\x3c!-- component matched by the route will render here --\x3e"),a("\n  "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),a("router-view")]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),a("router-view")]),s("span",{class:"token punctuation"},">")]),a("\n"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),a("div")]),s("span",{class:"token punctuation"},">")]),a("\n")])])],-1),h=s("h3",{id:"router-link"},[s("a",{class:"header-anchor",href:"#router-link","aria-hidden":"true"},"#"),a(),s("code",null,"router-link")],-1),d=s("p",null,[a("Note how instead of using regular "),s("code",null,"a"),a(" tags, we use a custom component "),s("code",null,"router-link"),a(" to create links. This allows Vue Router to change the URL without reloading the page, handle URL generation as well as its encoding. We will see later how to benefit from these features.")],-1),m=s("h3",{id:"router-view"},[s("a",{class:"header-anchor",href:"#router-view","aria-hidden":"true"},"#"),a(),s("code",null,"router-view")],-1),g=s("p",null,[s("code",null,"router-view"),a(" will display the component that corresponds to the url. You can put it anywhere to adapt it to your layout.")],-1),w=s("h2",{id:"javascript"},[s("a",{class:"header-anchor",href:"#javascript","aria-hidden":"true"},"#"),a(" JavaScript")],-1),f=s("div",{class:"language-js"},[s("pre",null,[s("code",null,[s("span",{class:"token comment"},"// 1. Define route components."),a("\n"),s("span",{class:"token comment"},"// These can be imported from other files"),a("\n"),s("span",{class:"token keyword"},"const"),a(" Home "),s("span",{class:"token operator"},"="),a(),s("span",{class:"token punctuation"},"{"),a(" template"),s("span",{class:"token operator"},":"),a(),s("span",{class:"token string"},"'<div>Home</div>'"),a(),s("span",{class:"token punctuation"},"}"),a("\n"),s("span",{class:"token keyword"},"const"),a(" About "),s("span",{class:"token operator"},"="),a(),s("span",{class:"token punctuation"},"{"),a(" template"),s("span",{class:"token operator"},":"),a(),s("span",{class:"token string"},"'<div>About</div>'"),a(),s("span",{class:"token punctuation"},"}"),a("\n\n"),s("span",{class:"token comment"},"// 2. Define some routes"),a("\n"),s("span",{class:"token comment"},"// Each route should map to a component."),a("\n"),s("span",{class:"token comment"},"// We'll talk about nested routes later."),a("\n"),s("span",{class:"token keyword"},"const"),a(" routes "),s("span",{class:"token operator"},"="),a(),s("span",{class:"token punctuation"},"["),a("\n  "),s("span",{class:"token punctuation"},"{"),a(" path"),s("span",{class:"token operator"},":"),a(),s("span",{class:"token string"},"'/'"),s("span",{class:"token punctuation"},","),a(" component"),s("span",{class:"token operator"},":"),a(" Home "),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),a("\n  "),s("span",{class:"token punctuation"},"{"),a(" path"),s("span",{class:"token operator"},":"),a(),s("span",{class:"token string"},"'/about'"),s("span",{class:"token punctuation"},","),a(" component"),s("span",{class:"token operator"},":"),a(" About "),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),a("\n"),s("span",{class:"token punctuation"},"]"),a("\n\n"),s("span",{class:"token comment"},"// 3. Create the router instance and pass the `routes` option"),a("\n"),s("span",{class:"token comment"},"// You can pass in additional options here, but let's"),a("\n"),s("span",{class:"token comment"},"// keep it simple for now."),a("\n"),s("span",{class:"token keyword"},"const"),a(" router "),s("span",{class:"token operator"},"="),a(" VueRouter"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"createRouter"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),a("\n  "),s("span",{class:"token comment"},"// 4. Provide the history implementation to use. We are using the hash history for simplicity here."),a("\n  history"),s("span",{class:"token operator"},":"),a(" VueRouter"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"createWebHashHistory"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},","),a("\n  routes"),s("span",{class:"token punctuation"},","),a(),s("span",{class:"token comment"},"// short for `routes: routes`"),a("\n"),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),a("\n\n"),s("span",{class:"token comment"},"// 5. Create and mount the root instance."),a("\n"),s("span",{class:"token keyword"},"const"),a(" app "),s("span",{class:"token operator"},"="),a(" Vue"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"createApp"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),a("\n"),s("span",{class:"token comment"},"// Make sure to _use_ the router instance to make the"),a("\n"),s("span",{class:"token comment"},"// whole app router-aware."),a("\napp"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"use"),s("span",{class:"token punctuation"},"("),a("router"),s("span",{class:"token punctuation"},")"),a("\n\napp"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"mount"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},"'#app'"),s("span",{class:"token punctuation"},")"),a("\n\n"),s("span",{class:"token comment"},"// Now the app has started!"),a("\n")])])],-1),v=s("p",null,[a("By calling "),s("code",null,"app.use(router)"),a(", we get access to it as "),s("code",null,"this.$router"),a(" as well as the current route as "),s("code",null,"this.$route"),a(" inside of any component:")],-1),y=s("div",{class:"language-js"},[s("pre",null,[s("code",null,[s("span",{class:"token comment"},"// Home.vue"),a("\n"),s("span",{class:"token keyword"},"export"),a(),s("span",{class:"token keyword"},"default"),a(),s("span",{class:"token punctuation"},"{"),a("\n  computed"),s("span",{class:"token operator"},":"),a(),s("span",{class:"token punctuation"},"{"),a("\n    "),s("span",{class:"token function"},"username"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),a(),s("span",{class:"token punctuation"},"{"),a("\n      "),s("span",{class:"token comment"},"// We will see what `params` is shortly"),a("\n      "),s("span",{class:"token keyword"},"return"),a(),s("span",{class:"token keyword"},"this"),s("span",{class:"token punctuation"},"."),a("$route"),s("span",{class:"token punctuation"},"."),a("params"),s("span",{class:"token punctuation"},"."),a("username\n    "),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),a("\n  "),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),a("\n  methods"),s("span",{class:"token operator"},":"),a(),s("span",{class:"token punctuation"},"{"),a("\n    "),s("span",{class:"token function"},"goToDashboard"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),a(),s("span",{class:"token punctuation"},"{"),a("\n      "),s("span",{class:"token keyword"},"if"),a(),s("span",{class:"token punctuation"},"("),a("isAuthenticated"),s("span",{class:"token punctuation"},")"),a(),s("span",{class:"token punctuation"},"{"),a("\n        "),s("span",{class:"token keyword"},"this"),s("span",{class:"token punctuation"},"."),a("$router"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"push"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},"'/dashboard'"),s("span",{class:"token punctuation"},")"),a("\n      "),s("span",{class:"token punctuation"},"}"),a(),s("span",{class:"token keyword"},"else"),a(),s("span",{class:"token punctuation"},"{"),a("\n        "),s("span",{class:"token keyword"},"this"),s("span",{class:"token punctuation"},"."),a("$router"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"push"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},"'/login'"),s("span",{class:"token punctuation"},")"),a("\n      "),s("span",{class:"token punctuation"},"}"),a("\n    "),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),a("\n  "),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),a("\n"),s("span",{class:"token punctuation"},"}"),a("\n")])])],-1),b=s("p",null,[a("To access the router or the route inside the "),s("code",null,"setup"),a(" function, call the "),s("code",null,"useRouter"),a(" or "),s("code",null,"useRoute"),a(" functions. We will learn more about this in "),s("a",{href:"/guide/advanced/composition-api.html#accessing-the-router-and-current-route-inside-setup"},"the Composition API")],-1),x=s("p",null,[a("Throughout the docs, we will often use the "),s("code",null,"router"),a(" instance. Keep in mind that "),s("code",null,"this.$router"),a(" is exactly the same as directly using the "),s("code",null,"router"),a(" instance created through "),s("code",null,"createRouter"),a(". The reason we use "),s("code",null,"this.$router"),a(" is because we don't want to import the router in every single component that needs to manipulate routing.")],-1);p.render=function(s,a,e,o,c,p){return n(),t("div",null,[u,l,i,r,k,h,d,m,g,w,f,v,y,b,x])};export default p;export{c as __pageData};
