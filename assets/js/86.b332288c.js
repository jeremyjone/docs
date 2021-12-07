(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{442:function(t,s,a){"use strict";a.r(s);var e=a(42),v=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"原理部分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理部分"}},[t._v("#")]),t._v(" 原理部分")]),t._v(" "),a("h2",{attrs:{id:"浏览器的渲染机制和原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的渲染机制和原理"}},[t._v("#")]),t._v(" 浏览器的渲染机制和原理")]),t._v(" "),a("p",[t._v("当我们在浏览器地址栏中键入一个地址，然后按下回车，此时一个请求便开始了。")]),t._v(" "),a("p",[t._v("这个过程分成两个阶段：")]),t._v(" "),a("ul",[a("li",[t._v("请求阶段：负责从服务器获取内容")]),t._v(" "),a("li",[t._v("渲染阶段：负责将获取到的内容呈现在浏览器中")])]),t._v(" "),a("h3",{attrs:{id:"请求阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求阶段"}},[t._v("#")]),t._v(" 请求阶段")]),t._v(" "),a("p",[t._v("1、当客户端开输入一个网址后，会向服务器发送一个 "),a("RouterLink",{attrs:{to:"/roadmap/base/network/www/http.html#请求-request"}},[t._v("Request 请求")]),t._v("，首先需要 "),a("code",[t._v("DNS")]),t._v(" 解析，然后进行 "),a("code",[t._v("TCP")]),t._v(" 连接。")],1),t._v(" "),a("p",[t._v("2、服务器收到请求后，会发送一个 "),a("RouterLink",{attrs:{to:"/roadmap/base/network/www/http.html#响应-response"}},[t._v("Response 响应")]),t._v("给客户端，并将文件内容返回给客户端。")],1),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/roadmap/base/network/www/http.html"}},[t._v("实际请求")]),t._v("要比上述过程更加繁琐，但并不影响对于渲染的理解。")],1)]),t._v(" "),a("h3",{attrs:{id:"渲染阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渲染阶段"}},[t._v("#")]),t._v(" 渲染阶段")]),t._v(" "),a("p",[t._v("1、客户端拿到页面内容后，浏览器会在内存中开辟一块"),a("strong",[t._v("栈内存")]),t._v("，用来给代码的执行提供环境，同时分配一个主线程一行一行解析和执行代码。")]),t._v(" "),a("blockquote",[a("p",[t._v("因为 "),a("code",[t._v("JavaScript")]),t._v(" 是单线程，所以每执行完一条语句，都需要执行出栈操作，然后将下一条语句执行进栈操作")])]),t._v(" "),a("p",[t._v("2、当浏览器遇到 "),a("code",[t._v("link")]),t._v("、"),a("code",[t._v("script")]),t._v("、"),a("code",[t._v("img")]),t._v("、"),a("code",[t._v("video")]),t._v(" 等资源请求，都会开辟一个全新的线程去加载资源文件，这个全新的线程叫 "),a("strong",[t._v("任务队列（Task Queue）")]),t._v("。")]),t._v(" "),a("p",[t._v("3、当主文件（不包含资源文件）第一次自上而下加载完成后，会生成 "),a("code",[t._v("DOM-Tree")]),t._v("。")]),t._v(" "),a("p",[t._v("4、加载完 "),a("code",[t._v("DOM-Tree")]),t._v(" 后，浏览器会去"),a("strong",[t._v("任务队列")]),t._v("循环查看那些任务已经完成，然后将已完成的任务一个一个插入到 "),a("code",[t._v("DOM-Tree")]),t._v(" 中，知道所有任务全部完成。这叫 "),a("strong",[t._v("事件循环（Event Loop）")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[t._v("任务队列又分成 "),a("strong",[t._v("微任务")]),t._v(" 和 "),a("strong",[t._v("宏任务")]),t._v("，"),a("strong",[t._v("微任务")]),t._v(" 的优先级高于 "),a("strong",[t._v("宏任务")])])]),t._v(" "),a("p",[t._v("5、当 CSS 处理完成后，会生成 "),a("code",[t._v("CSSOM")]),t._v("，浏览器会将 "),a("code",[t._v("DOM-Tree")]),t._v(" 与 "),a("code",[t._v("CSSOM")]),t._v(" 合并成一个 "),a("strong",[t._v("渲染树（Render Tree）")]),t._v("。")]),t._v(" "),a("p",[t._v("6、回流。浏览器根据生成的 "),a("code",[t._v("Render Tree")]),t._v("，计算它们在设备视口内的确切位置和大小，这个计算阶段叫做 "),a("strong",[t._v("回流（Reflow）")]),t._v("。")]),t._v(" "),a("p",[t._v("7、重绘。根据 "),a("code",[t._v("Render Tree")]),t._v(" 以及 "),a("strong",[t._v("回流")]),t._v(" 得到的几何信息，得到节点的绝对像素，这个阶段叫做 "),a("strong",[t._v("重绘（Repaint）")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[t._v("在首次加载阶段，一定会发生 "),a("strong",[t._v("回流")]),t._v(" 和 "),a("strong",[t._v("重绘")]),t._v("，并且一定先 "),a("strong",[t._v("回流")]),t._v(" 再 "),a("strong",[t._v("重绘")])])]),t._v(" "),a("p",[t._v("8、最后，浏览器会调用 GPU 进行图形渲染，将 "),a("code",[t._v("Render Tree")]),t._v(" 的内容渲染并展示给用户。")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/assets/roadmap/frontend/render-process.png"),alt:""}}),t._v(" "),a("h2",{attrs:{id:"页面加载时的阻塞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页面加载时的阻塞"}},[t._v("#")]),t._v(" 页面加载时的阻塞")]),t._v(" "),a("p",[t._v("页面加载时，浏览器会逐行解析 "),a("code",[t._v("html")]),t._v(" 内容，这是由 GUI 渲染线程所控制的。在此过程中，GUI 渲染线程会逐行解析，同时生成 "),a("code",[t._v("DOM")]),t._v(" 树。")]),t._v(" "),a("ul",[a("li",[t._v("当所有内容都解析完成，会触发 "),a("code",[t._v("DOMContentLoaded")]),t._v(" 事件，此事件的触发无需等待样式表、图片、脚本等资源的加载。")]),t._v(" "),a("li",[t._v("当一个页面包含所有资源被加载完成并解析成功后，执行 "),a("code",[t._v("load")]),t._v(" 事件。这也是为什么我们之前写 js 总是需要 "),a("code",[t._v("window.onload = function() {}")]),t._v("。")])]),t._v(" "),a("h3",{attrs:{id:"加载时遇到-js-代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加载时遇到-js-代码"}},[t._v("#")]),t._v(" 加载时遇到 js 代码")]),t._v(" "),a("p",[t._v("如果在加载页面时，遇到了 "),a("code",[t._v("<script>")]),t._v(" 标签，GUI 渲染线程会暂停渲染，并将控制权移交给 JS 引擎。此时浏览器将执行 JS 代码，如果是内联代码，则直接执行。如果是外部文件，则等待下载后再执行（"),a("a",{attrs:{href:"#%E6%B8%B2%E6%9F%93%E9%98%B6%E6%AE%B5"}},[t._v("渲染阶段")]),t._v("）。所有代码执行完毕之后将控制权再移交给 GUI 渲染线程，浏览器继续渲染 DOM。")]),t._v(" "),a("p",[t._v("为了减少 "),a("code",[t._v("<script>")]),t._v(" 标签对页面渲染的影响，可以通过：")]),t._v(" "),a("ul",[a("li",[t._v("将所有 "),a("code",[t._v("<script>")]),t._v(" 标签写在页面底部")]),t._v(" "),a("li",[t._v("使用 async 关键字来加载外部文件。此时浏览器不会阻塞，当下载完成它会自动执行文件内容")]),t._v(" "),a("li",[t._v("使用 defer 关键字来加载外部文件。此时浏览器会在 "),a("code",[t._v("DOMContentLoaded")]),t._v(" 事件触发之前执行该文件内容")])]),t._v(" "),a("h3",{attrs:{id:"加载时遇到-css-代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加载时遇到-css-代码"}},[t._v("#")]),t._v(" 加载时遇到 css 代码")]),t._v(" "),a("p",[t._v("加载页面时，遇到 "),a("code",[t._v("<link>")]),t._v(" 标签与 "),a("code",[t._v("<style>")]),t._v(" 标签同样会影响页面的渲染。但是它不会阻塞 DOM 树的构建，只影响页面的渲染。")]),t._v(" "),a("p",[t._v("比如：我们有:")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hello World"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".title")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".text")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hello World"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("页面会首先渲染 "),a("code",[t._v("<h1>")]),t._v(" 元素到页面上，然后读取到 "),a("code",[t._v("<style>")]),t._v(" 标签从而开始构建 CSSOM 树，构建完成后重新渲染 "),a("code",[t._v("<h1>")]),t._v(" 元素，并继续渲染 "),a("code",[t._v("<div>")]),t._v(" 元素。")]),t._v(" "),a("p",[t._v("这样会导致：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("<div>")]),t._v(" 标签在 CSSOM 构建完毕之前不会渲染，也就是阻塞在了标签这里。")]),t._v(" "),a("li",[t._v("标签之前的内容被渲染了两次，因为样式的变化，可能出现 "),a("strong",[t._v("屏闪")]),t._v(" 现象。")])]),t._v(" "),a("p",[t._v("所以正确的方式我们应该将 "),a("code",[t._v("<link>")]),t._v(" 与 "),a("code",[t._v("<style>")]),t._v(" 放在页面最开始的位置，通常放在 "),a("code",[t._v("head")]),t._v(" 中。")]),t._v(" "),a("h2",{attrs:{id:"回流-reflow-与重绘-repaint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回流-reflow-与重绘-repaint"}},[t._v("#")]),t._v(" 回流 Reflow 与重绘 Repaint")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("回流：当元素的宽高、大小或者位置等影响布局的属性发生了变化，会触发重弄更新布局，导致渲染树重新计算布局和渲染，这个过程叫做回流。")]),t._v(" "),a("p",[t._v("如下等情况会发生回流：")]),t._v(" "),a("ul",[a("li",[t._v("页面初始化（即首次渲染）")]),t._v(" "),a("li",[t._v("添加或删除 DOM 元素")]),t._v(" "),a("li",[t._v("元素位置发生变化（left、right、top、bottom 等）")]),t._v(" "),a("li",[t._v("元素尺寸发生变化（size、width、height、margin、padding 等）")]),t._v(" "),a("li",[t._v("内容发生变化（图片大小、文本大小、内容增减等）")]),t._v(" "),a("li",[t._v("浏览器窗口发生变化")])])]),t._v(" "),a("li",[a("p",[t._v("重绘：当元素样式发生改变，但是宽高、大小、位置等影响布局的属性不发生变化时，浏览器会进行重绘。")]),t._v(" "),a("p",[t._v("如：outline、visibility、color 等不影响布局的属性发生变化")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("页面首次加载一定会回流\n回流一定触发重绘，而重绘不一定回流")])]),t._v(" "),a("h3",{attrs:{id:"避免-dom-的回流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#避免-dom-的回流"}},[t._v("#")]),t._v(" 避免 DOM 的回流")]),t._v(" "),a("p",[t._v("避免 DOM 的回流，可以有效提高前端性能。可以通过如下几点来避免：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("放弃传统操作 DOM 的方式（原生 js、jQuery 等），而是采用基于 vue、react 等框架，用数据影响视图的模式（MVVM）")])]),t._v(" "),a("li",[a("p",[t._v("读写分离，利用现代浏览器的渲染队列机制")]),t._v(" "),a("p",[t._v("现代浏览器一般都会自动维护一个"),a("strong",[t._v("渲染队列")]),t._v("，把所有会引起回流、重绘的操作放入队列，当操作一定数量或到达一定时间后，浏览器会自动刷新队列，批处理所有内容。")]),t._v(" "),a("p",[t._v("但是有一些属性，会导致浏览器立即刷新渲染队列：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("offsetTop/Left/Width/Height")])]),t._v(" "),a("li",[a("code",[t._v("clientTop/Left/Width/Height")])]),t._v(" "),a("li",[a("code",[t._v("scrollTop/Left/Width/Height")])]),t._v(" "),a("li",[a("code",[t._v("width")]),t._v("、"),a("code",[t._v("height")])]),t._v(" "),a("li",[a("code",[t._v("getComputedStyle")]),t._v("、"),a("code",[t._v("currentStyle")])])]),t._v(" "),a("p",[t._v("这些属性为了获取到最精确的数值，会立即刷新所有需要回流的内容。")])]),t._v(" "),a("li",[a("p",[t._v("样式集中改变")]),t._v(" "),a("p",[t._v("不要一个一个属性的去改变，最好是一起写完样式，统一改变，这样可以减少回流次数。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("✔ div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cssText "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"width:20px;height:20px"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 而不是")]),t._v("\n❌ div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"20px"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n❌ div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"20px"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("当然，现代浏览器已经在很大程度上帮我们做好了这样的规划，当读取到样式改变的内容时，不会第一时间去回流，而是尝试继续读取后面的内容，尽可能将所有改变样式都做完后再一次性的进行回流和重绘。但我们仍然需要养成良好的习惯。")])]),t._v(" "),a("li",[a("p",[t._v("集中添加元素")]),t._v(" "),a("p",[t._v("添加元素时，不要一个一个直接往 DOM 中添加，而是将所有内容添加到 "),a("code",[t._v("fragment")]),t._v(" 中，最后添加一次就好。")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("document.createDocumentFragment()")]),t._v(" 创建临时容器，再把新元素添加到该容器中，最后将该容器添加到 DOM 中，引发一次回流：")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/assets/roadmap/frontend/create-document-fragment.png"),alt:""}}),t._v(" "),a("p",[t._v("当然还可以使用文档字符串，拼接之后一次性添加到 HTML 中：")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/assets/roadmap/frontend/document-str.png"),alt:""}})]),t._v(" "),a("li",[a("p",[t._v("让动画效果脱离文档流")]),t._v(" "),a("p",[t._v("将具有动画效果的元素尽可能脱离文档流。通过 "),a("code",[t._v("position:absolute / fixed")]),t._v(" 的方式，让元素在一个全新层级，这样就不会影响大部分的页面元素，减少回流的计算。")])]),t._v(" "),a("li",[a("p",[t._v("使用 CSS3 的硬件加速")]),t._v(" "),a("p",[t._v("CSS3 提供了 GPU 加速功能。使用 "),a("code",[t._v("transform")]),t._v("、"),a("code",[t._v("opacity")]),t._v("、"),a("code",[t._v("filters")]),t._v(" 等属性时会触发硬件加速，避免回流和重绘。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transform "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"translateX(200px)"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 效果等同于")]),t._v("\ndiv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"200px"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("同时也要注意，过多使用可能会导致大量占用内存，性能消耗严重，字体模糊等问题。这些是需要兼顾考虑的。")])]),t._v(" "),a("li",[a("p",[t._v("牺牲平滑度换取速度")]),t._v(" "),a("p",[t._v("有时我们可以通过牺牲掉平滑度来换取更快的速度。因为每次元素移动 "),a("code",[t._v("1px")]),t._v(" 都会引发回流，所以我们可以加大移动间距，比如尝试 "),a("code",[t._v("2px")]),t._v(" 甚至 "),a("code",[t._v("3px")]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("避免 table 布局和使用 CSS 的 JavaScript 表达式")]),t._v(" "),a("p",[t._v("页面中 table 布局层级太多，会导致多次计算才能确定元素的属性，从而导致大量回流。")])])])])}),[],!1,null,null,null);s.default=v.exports}}]);