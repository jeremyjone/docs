(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{400:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),a("p",[t._v("在互联网中，因为服务器性能、网络带宽等各种原因，传输数据时需要考虑的问题相比单机程序要更多。缓存的出现有效解决了这个问题。缓存可以有效降低服务器的重复工作量，进而提高服务器的性能和效率。")]),t._v(" "),a("p",[t._v("缓存适用于不经常修改的数据，如媒体文件等。而且缓存一般存在于高速介质中，同时网络中各个节点均可设置缓存，所以使用缓存的效率会更高。")]),t._v(" "),a("h2",{attrs:{id:"响应缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应缓存"}},[t._v("#")]),t._v(" 响应缓存")]),t._v(" "),a("p",[t._v("在 HTTP 1.1 的缓存规范中，详细介绍了互联网的缓存行为方式。它使用 "),a("code",[t._v("Cache-Control")]),t._v(" 报头指令通知浏览器缓存当前数据，同时配合 "),a("code",[t._v("max-age")]),t._v(" 报头设置最大的缓存时间。更多详细内容可以参看 "),a("a",{attrs:{href:"https://datatracker.ietf.org/doc/html/rfc7234",target:"_blank",rel:"noopener noreferrer"}},[t._v("缓存规范"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("这种缓存方式简单方便，对于一些媒体文件是非常有效的方式，可以降低客户端、代理和服务器网络中的开销。但是开发人员无法控制缓存行为，因为它需要遵循上述规范。")]),t._v(" "),a("h2",{attrs:{id:"在-asp-net-中启用响应缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-asp-net-中启用响应缓存"}},[t._v("#")]),t._v(" 在 ASP.NET 中启用响应缓存")]),t._v(" "),a("p",[t._v("ASP.NET 使用响应缓存非常简单，它通过 "),a("code",[t._v("ResponseCache")]),t._v(" 来实现。")]),t._v(" "),a("p",[t._v("首先，在 "),a("code",[t._v("Startup.cs")]),t._v(" 中添加：")]),t._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConfigureServices")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IServiceCollection")]),t._v(" services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddResponseCaching")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("然后将中间件添加到管道中：")]),t._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Configure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IApplicationBuilder")]),t._v(" app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IWebHostEnvironment")]),t._v(" env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果启用了 CORS，则必须在缓存之前调用")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// app.UseCors("myAllowSpecificOrigins");')]),t._v("\n\n    app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("UseResponseCaching")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 控制缓存")]),t._v("\n    app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetTypedHeaders")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CacheControl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("Microsoft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Net"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CacheControlHeaderValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                Public "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置响应缓存时长为10秒")]),t._v("\n                MaxAge "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" TimeSpan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("FromSeconds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加 Vary 报头，接受编码报头与请求编码报头匹配才提供缓存响应，该报头信息可以查看 https://datatracker.ietf.org/doc/html/rfc7231#section-7.1.4")]),t._v("\n        context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Microsoft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Net"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HeaderNames"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Vary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Accept-Encoding"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br")])]),a("h3",{attrs:{id:"缓存条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存条件"}},[t._v("#")]),t._v(" 缓存条件")]),t._v(" "),a("p",[t._v("只有当如下条件时，响应缓存才会生效：")]),t._v(" "),a("ul",[a("li",[t._v("请求必须使用 "),a("code",[t._v("200")]),t._v(" 状态代码来生成服务器响应。")]),t._v(" "),a("li",[t._v("请求方法必须为 "),a("code",[t._v("GET")]),t._v(" 或 "),a("code",[t._v("HEAD")]),t._v("。")]),t._v(" "),a("li",[t._v("在 "),a("code",[t._v("Startup.Configure")]),t._v(" 中，必须将响应缓存中间件置于需要缓存的中间件之前。")]),t._v(" "),a("li",[t._v("确保不存在 "),a("code",[t._v("Authorization")]),t._v(" 报头。")]),t._v(" "),a("li",[a("code",[t._v("Cache-Control")]),t._v(" 报头参数必须是有效的，并且响应必须标记为 "),a("code",[t._v("public")]),t._v("。")]),t._v(" "),a("li",[t._v("如果 "),a("code",[t._v("Cache-Control")]),t._v(" 报头不存在，则 "),a("code",[t._v("Pragma: no-cache")]),t._v(" 报头不得出现。")]),t._v(" "),a("li",[a("code",[t._v("Set-Cookie")]),t._v(" 报头不得存在。")]),t._v(" "),a("li",[a("code",[t._v("Vary")]),t._v(" 报头参数必须有效且不应为 "),a("code",[t._v("*")]),t._v("。")]),t._v(" "),a("li",[t._v("如果设置了 "),a("code",[t._v("Content-Length")]),t._v(" 报头，则其值必须与响应正文的大小匹配。")])]),t._v(" "),a("h3",{attrs:{id:"缓存相关报头信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存相关报头信息"}},[t._v("#")]),t._v(" 缓存相关报头信息")]),t._v(" "),a("p",[t._v("ASP.NET 提供了完整的报头信息，具体如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("报头")]),t._v(" "),a("th",[t._v("详细信息")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("Authorization")])]),t._v(" "),a("td",[t._v("包含身份验证的客户端内容，响应必须标记为不可缓存，以防止中间件存储和服务这些响应")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("Cache-Control")])]),t._v(" "),a("td",[t._v("中间件应该使用 "),a("code",[t._v("public")]),t._v(" 来标记")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("Pragma")])]),t._v(" "),a("td",[t._v("HTTP 1.0 内容。"),a("code",[t._v("Pragma: no-cache")]),t._v(" 与 "),a("code",[t._v("Cache-Control: no-cache")]),t._v(" 效果相同。它会被 "),a("code",[t._v("Cache-Control")]),t._v(" 报头覆盖（如果有）")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("Set-Cookie")])]),t._v(" "),a("td",[t._v("如果该报头存在，则响应不会被缓存。请求处理管道中设置一个或多个 cookie 的任何中间件都将阻止响应缓存中间件缓存响应")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("Vary")])]),t._v(" "),a("td",[a("code",[t._v("Vary")]),t._v(" 报头用于改变另一个报头的缓存响应。例如，通过包含 "),a("code",[t._v("Vary: Accept-Encoding")]),t._v(" 报头来缓存响应，它分别缓存带有报头 "),a("code",[t._v("Accept-Encoding: gzip")]),t._v(" 和 "),a("code",[t._v("Accept-Encoding: text/plain")]),t._v(" 的请求响应。头值为 "),a("code",[t._v("*")]),t._v(" 的响应不会被存储。")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("Expires")])]),t._v(" "),a("td",[t._v("除非被其他 "),a("code",[t._v("Cache-Control")]),t._v(" 标头覆盖，否则该标头认为过期的响应不会被存储或检索。")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("If-None-Match")])]),t._v(" "),a("td",[t._v("如果值不是 "),a("code",[t._v("*")]),t._v("，并且响应的 ETag 不匹配提供的任何值，则从缓存提供完整的响应。否则，将提供一个 304（未修改）的响应。")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("If-Modified-Since")])]),t._v(" "),a("td",[t._v("如果 "),a("code",[t._v("If-none-match")]),t._v(" 报头不存在，当缓存的响应日期比提供的值新，则从缓存提供完整响应。否则，将提供一个 304（未修改）的响应。")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("Date")])]),t._v(" "),a("td",[t._v("当从缓存提供服务时，如果没有在原始响应上提供日期头，则中间件将设置它。")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("Content-Length")])]),t._v(" "),a("td",[t._v("当从缓存提供服务时，如果 "),a("code",[t._v("Content-Length")]),t._v(" 报头没有在原始响应上提供，则由中间件设置。")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("Age")])]),t._v(" "),a("td",[t._v("原始响应中发送的 "),a("code",[t._v("Age")]),t._v(" 报头将被忽略。中间件在提供缓存响应时计算一个新值。")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);