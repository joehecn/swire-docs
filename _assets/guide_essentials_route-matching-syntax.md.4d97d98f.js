import{o as a,e as s,G as n}from"./framework.c00dda38.js";const t='{"title":"Routes\' Matching Syntax","description":"","frontmatter":{},"headers":[{"level":2,"title":"Custom Regexp in params","slug":"custom-regexp-in-params"},{"level":2,"title":"Repeatable params","slug":"repeatable-params"},{"level":2,"title":"Optional parameters","slug":"optional-parameters"},{"level":2,"title":"Debugging","slug":"debugging"}],"relativePath":"guide/essentials/route-matching-syntax.md","lastUpdated":1607561054500.6162}';var e={};const o=n('<h1 id="routes-matching-syntax"><a class="header-anchor" href="#routes-matching-syntax" aria-hidden="true">#</a> Routes&#39; Matching Syntax</h1><p>Most applications will use static routes like <code>/about</code> and dynamic routes like <code>/users/:userId</code> like we just saw in <a href="./dynamic-matching.html">Dynamic Route Matching</a>, but Vue Router has much more to offer!</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>For the sake of simplicity, all, route records <strong>are omitting the <code>component</code> property</strong> to focus on the <code>path</code> value.</p></div><h2 id="custom-regexp-in-params"><a class="header-anchor" href="#custom-regexp-in-params" aria-hidden="true">#</a> Custom Regexp in params</h2><p>When defining a param like <code>:userId</code>, we internally use the following regexp <code>([^/]+)</code> (at least one character that isn&#39;t a slash <code>/</code>) to extract params from URLs. This works well unless you need to differentiate two routes based on the param content. Imagine two routes <code>/:orderId</code> and <code>/:productName</code>, both would match the exact same URLs, so we need a way to differentiate them. The easiest way would be to add a static section to the path that differentiates them:</p><div class="language-js"><pre><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token comment">// matches /o/3549</span>\n  <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;/o/:orderId&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// matches /p/books</span>\n  <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;/p/:productName&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span>\n</code></pre></div><p>But in some scenarios we don&#39;t want to add that static section <code>/o</code>/<code>p</code>. However, <code>orderId</code> is always a number while <code>productName</code> can be anything, so we can specify a custom regexp for a param in parentheses:</p><div class="language-js"><pre><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token comment">// /:orderId -&gt; matches only numbers</span>\n  <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;/:orderId(\\\\d+)&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// /:productName -&gt; matches anything else</span>\n  <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;/:productName&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span>\n</code></pre></div><p>Now, going to <code>/25</code> will match <code>/:orderId</code> while going to anything else will match <code>/:productName</code>. The order of the <code>routes</code> array doesn&#39;t even matter!</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Make sure to <strong>escape backslashes (<code>\\</code>)</strong> like we did with <code>\\d</code> (becomes <code>\\\\d</code>) to actually pass the backslash character in a string in JavaScript.</p></div><h2 id="repeatable-params"><a class="header-anchor" href="#repeatable-params" aria-hidden="true">#</a> Repeatable params</h2><p>If you need to match routes with multiple sections like <code>/first/second/third</code>, you should mark a param as repeatable with <code>*</code> (0 or more) and <code>+</code> (1 or more):</p><div class="language-js"><pre><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token comment">// /:chapters -&gt; matches /one, /one/two, /one/two/three, etc</span>\n  <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;/:chapters+&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// /:chapters -&gt; matches /, /one, /one/two, /one/two/three, etc</span>\n  <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;/:chapters*&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span>\n</code></pre></div><p>This will give you an array of params instead of a string and will also require you to pass an array when using named routes:</p><div class="language-js"><pre><code><span class="token comment">// given { path: &#39;/:chapters*&#39;, name: &#39;chapters&#39; },</span>\nrouter<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;chapters&#39;</span><span class="token punctuation">,</span> params<span class="token operator">:</span> <span class="token punctuation">{</span> chapters<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>href\n<span class="token comment">// produces /</span>\nrouter<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;chapters&#39;</span><span class="token punctuation">,</span> params<span class="token operator">:</span> <span class="token punctuation">{</span> chapters<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>href\n<span class="token comment">// produces /a/b</span>\n\n<span class="token comment">// given { path: &#39;/:chapters+&#39;, name: &#39;chapters&#39; },</span>\nrouter<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;chapters&#39;</span><span class="token punctuation">,</span> params<span class="token operator">:</span> <span class="token punctuation">{</span> chapters<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>href\n<span class="token comment">// throws an Error because `chapters` is empty</span>\n</code></pre></div><p>These can also be combined with custom Regexp by adding them <strong>after the closing parentheses</strong>:</p><div class="language-js"><pre><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token comment">// only match numbers</span>\n  <span class="token comment">// matches /1, /1/2, etc</span>\n  <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;/:chapters(\\\\d+)+&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// matches /, /1, /1/2, etc</span>\n  <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;/:chapters(\\\\d+)*&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span>\n</code></pre></div><h2 id="optional-parameters"><a class="header-anchor" href="#optional-parameters" aria-hidden="true">#</a> Optional parameters</h2><p>You can also mark a parameter as optional by using the <code>?</code> modifier (0 or 1):</p><div class="language-js"><pre><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token comment">// will match /users and /users/posva</span>\n  <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;/users/:userId?&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// will match /users and /users/42</span>\n  <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;/users/:userId(\\\\d+)?&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span>\n</code></pre></div><p>Note that <code>*</code> technically also marks a parameter as optional but <code>?</code> parameters cannot be repeated.</p><h2 id="debugging"><a class="header-anchor" href="#debugging" aria-hidden="true">#</a> Debugging</h2><p>If you need to dig how your routes are transformed into Regexp to understand why a route isn&#39;t being matched or, to report a bug, you can use the <a href="https://paths.esm.dev/?p=AAMeJSyAwR4UbFDAFxAcAGAIJXMAAA..#" target="_blank" rel="noopener noreferrer">path ranker tool</a>. It supports sharing your routes through the URL.</p>',23);e.render=function(n,t,e,p,c,r){return a(),s("div",null,[o])};export default e;export{t as __pageData};