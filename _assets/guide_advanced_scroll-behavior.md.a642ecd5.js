import{o as n,e as s,G as a}from"./framework.c00dda38.js";const t='{"title":"Scroll Behavior","description":"","frontmatter":{},"headers":[{"level":2,"title":"Delaying the scroll","slug":"delaying-the-scroll"}],"relativePath":"guide/advanced/scroll-behavior.md","lastUpdated":1607559931863.911}';var o={};const p=a('<h1 id="scroll-behavior"><a class="header-anchor" href="#scroll-behavior" aria-hidden="true">#</a> Scroll Behavior</h1><p>When using client-side routing, we may want to scroll to top when navigating to a new route, or preserve the scrolling position of history entries just like real page reload does. Vue Router allows you to achieve these and even better, allows you to completely customize the scroll behavior on route navigation.</p><p><strong>Note: this feature only works if the browser supports <code>history.pushState</code>.</strong></p><p>When creating the router instance, you can provide the <code>scrollBehavior</code> function:</p><div class="language-js"><pre><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  history<span class="token operator">:</span> <span class="token function">createWebHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  routes<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token function">scrollBehavior</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span><span class="token punctuation">,</span> savedPosition</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// return desired position</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p>The <code>scrollBehavior</code> function receives the <code>to</code> and <code>from</code> route objects, like <a href="./navigation-guards.html">Navigation Guards</a>. The third argument, <code>savedPosition</code>, is only available if this is a <code>popstate</code> navigation (triggered by the browser&#39;s back/forward buttons).</p><p>The function can return a <a href="https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions" target="_blank" rel="noopener noreferrer"><code>ScrollToOptions</code></a> position object:</p><div class="language-js"><pre><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">scrollBehavior</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span><span class="token punctuation">,</span> savedPosition</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// always scroll to top</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span> top<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p>You can also pass a CSS selector or a DOM element via <code>el</code>. In that scenario, <code>top</code> and <code>left</code> will be treated as relative offsets to that element.</p><div class="language-js"><pre><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">scrollBehavior</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span><span class="token punctuation">,</span> savedPosition</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// always scroll 10px above the element #main</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      <span class="token comment">// could also be</span>\n      <span class="token comment">// el: document.getElementById(&#39;main&#39;),</span>\n      el<span class="token operator">:</span> <span class="token string">&#39;#main&#39;</span><span class="token punctuation">,</span>\n      top<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p>If a falsy value or an empty object is returned, no scrolling will happen.</p><p>Returning the <code>savedPosition</code> will result in a native-like behavior when navigating with back/forward buttons:</p><div class="language-js"><pre><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">scrollBehavior</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span><span class="token punctuation">,</span> savedPosition</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>savedPosition<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> savedPosition\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span> top<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p>If you want to simulate the &quot;scroll to anchor&quot; behavior:</p><div class="language-js"><pre><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">scrollBehavior</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span><span class="token punctuation">,</span> savedPosition</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>to<span class="token punctuation">.</span>hash<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        el<span class="token operator">:</span> to<span class="token punctuation">.</span>hash<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p>If your browser supports <a href="https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions/behavior" target="_blank" rel="noopener noreferrer">scroll behavior</a>, you can make it smooth:</p><div class="language-js"><pre><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">scrollBehavior</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span><span class="token punctuation">,</span> savedPosition</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>to<span class="token punctuation">.</span>hash<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        el<span class="token operator">:</span> to<span class="token punctuation">.</span>hash\n        behavior<span class="token operator">:</span> <span class="token string">&#39;smooth&#39;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><h2 id="delaying-the-scroll"><a class="header-anchor" href="#delaying-the-scroll" aria-hidden="true">#</a> Delaying the scroll</h2><p>Sometimes we need to wait a bit before scrolling in the page. For example, when dealing with transitions, we want to wait for the transition to finish before scrolling. To do this you can return a Promise that returns the desired position descriptor. Here is an example where we wait 500ms before scrolling:</p><div class="language-js"><pre><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">scrollBehavior</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span><span class="token punctuation">,</span> savedPosition</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span> left<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> top<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p>It&#39;s possible to hook this up with events from a page-level transition component to make the scroll behavior play nicely with your page transitions, but due to the possible variance and complexity in use cases, we simply provide this primitive to enable specific userland implementations.</p>',21);o.render=function(a,t,o,e,c,l){return n(),s("div",null,[p])};export default o;export{t as __pageData};
