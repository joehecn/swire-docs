import{o as n,e as s,G as a}from"./framework.c00dda38.js";const t='{"title":"Nested Routes","description":"","frontmatter":{},"relativePath":"guide/essentials/nested-routes.md","lastUpdated":1607897288613.3352}';var e={};const o=a('<h1 id="nested-routes"><a class="header-anchor" href="#nested-routes" aria-hidden="true">#</a> Nested Routes</h1><p>Some application&#39;s UIs are composed of components that are nested multiple levels deep. In this case, it is very common that the segments of a URL corresponds to a certain structure of nested components, for example:</p><div class="language-"><pre><code>/user/johnny/profile                     /user/johnny/posts\n+------------------+                  +-----------------+\n| User             |                  | User            |\n| +--------------+ |                  | +-------------+ |\n| | Profile      | |  +------------&gt;  | | Posts       | |\n| |              | |                  | |             | |\n| +--------------+ |                  | +-------------+ |\n+------------------+                  +-----------------+\n</code></pre></div><p>With Vue Router, you can express this relationship using nested route configurations.</p><p>Given the app we created in the last chapter:</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="language-js"><pre><code><span class="token keyword">const</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>\n  template<span class="token operator">:</span> <span class="token string">&#39;&lt;div&gt;User {{ $route.params.id }}&lt;/div&gt;&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// these are passed to `createRouter`</span>\n<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;/user/:id&#39;</span><span class="token punctuation">,</span> component<span class="token operator">:</span> User <span class="token punctuation">}</span><span class="token punctuation">]</span>\n</code></pre></div><p>The <code>&lt;router-view&gt;</code> here is a top-level <code>router-view</code>. It renders the component matched by a top level route. Similarly, a rendered component can also contain its own, nested <code>&lt;router-view&gt;</code>. For example, if we add one inside the <code>User</code> component&#39;s template:</p><div class="language-js"><pre><code><span class="token keyword">const</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>\n  template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\n    &lt;div class=&quot;user&quot;&gt;\n      &lt;h2&gt;User {{ $route.params.id }}&lt;/h2&gt;\n      &lt;router-view&gt;&lt;/router-view&gt;\n    &lt;/div&gt;\n  </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>To render components into this nested <code>router-view</code>, we need to use the <code>children</code> option in any of the routes:</p><div class="language-js"><pre><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    path<span class="token operator">:</span> <span class="token string">&#39;/user/:id&#39;</span><span class="token punctuation">,</span>\n    component<span class="token operator">:</span> User<span class="token punctuation">,</span>\n    children<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        <span class="token comment">// UserProfile will be rendered inside User&#39;s &lt;router-view&gt;</span>\n        <span class="token comment">// when /user/:id/profile is matched</span>\n        path<span class="token operator">:</span> <span class="token string">&#39;profile&#39;</span><span class="token punctuation">,</span>\n        component<span class="token operator">:</span> UserProfile<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        <span class="token comment">// UserPosts will be rendered inside User&#39;s &lt;router-view&gt;</span>\n        <span class="token comment">// when /user/:id/posts is matched</span>\n        path<span class="token operator">:</span> <span class="token string">&#39;posts&#39;</span><span class="token punctuation">,</span>\n        component<span class="token operator">:</span> UserPosts<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span>\n</code></pre></div><p><strong>Note that nested paths that start with <code>/</code> will be treated as a root path. This allows you to leverage the component nesting without having to use a nested URL.</strong></p><p>As you can see the <code>children</code> option is just another Array of routes like <code>routes</code> itself. Therefore, you can keep nesting views as much as you need.</p><p>At this point, with the above configuration, when you visit <code>/user/eduardo</code>, nothing will be rendered inside <code>User</code>&#39;s <code>router-view</code>, because no nested route is matched. Maybe you do want to render something there. In such case you can provide an empty nested path:</p><div class="language-js"><pre><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    path<span class="token operator">:</span> <span class="token string">&#39;/user/:id&#39;</span><span class="token punctuation">,</span>\n    component<span class="token operator">:</span> User<span class="token punctuation">,</span>\n    children<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token comment">// UserHome will be rendered inside User&#39;s &lt;router-view&gt;</span>\n      <span class="token comment">// when /user/:id is matched</span>\n      <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> component<span class="token operator">:</span> UserHome <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n      <span class="token comment">// ...other sub routes</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span>\n</code></pre></div><p>A working demo of this example can be found <a href="https://codesandbox.io/s/nested-views-vue-router-4-examples-hl326?initialpath=%2Fusers%2Feduardo" target="_blank" rel="noopener noreferrer">here</a>.</p>',16);e.render=function(a,t,e,p,c,r){return n(),s("div",null,[o])};export default e;export{t as __pageData};