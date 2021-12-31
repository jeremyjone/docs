(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{539:function(e,t,v){"use strict";v.r(t);var _=v(1),r=Object(_.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"http"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[e._v("#")]),e._v(" HTTP")]),e._v(" "),v("p",[v("code",[e._v("HTTP")]),e._v("："),v("code",[e._v("hypertext transform protocol")]),e._v("，超文本传输协议。它允许将超文本标记语言（"),v("code",[e._v("HTML")]),e._v("）从 web 服务器传送到客户端的浏览器。为了使超文本的链接能够高效率的完成，需要使用 "),v("code",[e._v("HTTP")]),e._v(" 协议来出阿松一些必需的信息。")]),e._v(" "),v("p",[e._v("从层次的角度看，"),v("code",[e._v("HTTP")]),e._v(" 是面向事务的应用层协议，它是万维网上能够可靠地交换文件的重要基础。")]),e._v(" "),v("p",[e._v("其特点为：")]),e._v(" "),v("ul",[v("li",[e._v("支持典型的客户端服务器模式（B/S）")]),e._v(" "),v("li",[e._v("灵活、简单")]),e._v(" "),v("li",[e._v("几乎支持所有的数据格式")]),e._v(" "),v("li",[e._v("无状态")])]),e._v(" "),v("p",[e._v("一个简单的通信示例：")]),e._v(" "),v("img",{attrs:{src:e.$withBase("/assets/roadmap/frontend/http.png"),alt:""}}),e._v(" "),v("p",[e._v("上面图中过程，显示了一个完整的 "),v("code",[e._v("HTTP")]),e._v(" 请求过程：")]),e._v(" "),v("ul",[v("li",[e._v("浏览器分析超链接指向页面的 URL")]),e._v(" "),v("li",[e._v("浏览器向域名系统（DNS）请求解析 "),v("code",[e._v("www.tsinghua.edu.cn")]),e._v(" 的 IP 地址")]),e._v(" "),v("li",[e._v("域名系统（DNS）解析出该服务器的 IP 地址并告知浏览器")]),e._v(" "),v("li",[e._v("浏览器与服务器建立 TCP 连接")]),e._v(" "),v("li",[e._v("浏览器发出请求文档指令（一个 GET 请求）")]),e._v(" "),v("li",[e._v("服务器给出响应，把文档发送给浏览器")]),e._v(" "),v("li",[e._v("TCP 连接被释放")]),e._v(" "),v("li",[e._v("浏览器将获取到的文件内容进行渲染，呈现到浏览器中")])]),e._v(" "),v("h2",{attrs:{id:"请求-request"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#请求-request"}},[e._v("#")]),e._v(" 请求 Request")]),e._v(" "),v("p",[v("code",[e._v("HTTP")]),e._v(" 的请求格式：")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("请求行")]),e._v(" 发送什么类型的请求")]),e._v(" "),v("li",[v("code",[e._v("请求头")]),e._v(" 对发送请求信息的描述")]),e._v(" "),v("li",[v("code",[e._v("空行")])]),e._v(" "),v("li",[v("code",[e._v("请求体")]),e._v(" 根据请求类型不同，请求体内容也不尽相同")])]),e._v(" "),v("img",{attrs:{src:e.$withBase("/assets/roadmap/frontend/http-request-message.png"),alt:""}}),e._v(" "),v("p",[e._v("这是一个具体的示例：")]),e._v(" "),v("img",{attrs:{src:e.$withBase("/assets/roadmap/frontend/http-request.png"),alt:""}}),e._v(" "),v("h3",{attrs:{id:"请求行"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#请求行"}},[e._v("#")]),e._v(" 请求行")]),e._v(" "),v("p",[e._v("请求行定义了请求方法、地址、以及协议版本。其语法：")]),e._v(" "),v("div",{staticClass:"language-text line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("&lt;METHOD> &lt;URI> &lt;protocol>\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br")])]),v("p",[e._v("例如：")]),e._v(" "),v("div",{staticClass:"language-text line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("GET /index.html HTTP/1.1\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br")])]),v("p",[e._v("不同的请求方法有不同的用法。根据 "),v("code",[e._v("HTTP")]),e._v(" 标准，可以使用多种请求方法。")]),e._v(" "),v("ul",[v("li",[e._v("在 "),v("code",[e._v("HTTP1.0")]),e._v(" 中，定义了 "),v("code",[e._v("GET")]),e._v("、"),v("code",[e._v("POST")]),e._v(" 和 "),v("code",[e._v("HEAD")]),e._v(" 方法。")]),e._v(" "),v("li",[e._v("在 "),v("code",[e._v("HTTP1.1")]),e._v(" 中，新增了 "),v("code",[e._v("OPTIONS")]),e._v("、"),v("code",[e._v("PUT")]),e._v("、"),v("code",[e._v("DELETE")]),e._v("、"),v("code",[e._v("TRACE")]),e._v(" 和 "),v("code",[e._v("CONNECT")]),e._v(" 方法。")])]),e._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[e._v("方法")]),e._v(" "),v("th",{staticStyle:{"text-align":"center"}},[e._v("描述")])])]),e._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[v("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/GET",target:"_blank",rel:"noopener noreferrer"}},[e._v("GET"),v("OutboundLink")],1)]),e._v(" "),v("td",{staticStyle:{"text-align":"center"}},[e._v("GET 方法请求一个指定资源的表示形式，使用 GET 的请求应该只被用于获取数据。")])]),e._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[v("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/POST",target:"_blank",rel:"noopener noreferrer"}},[e._v("POST"),v("OutboundLink")],1)]),e._v(" "),v("td",{staticStyle:{"text-align":"center"}},[e._v("POST 方法用于将实体提交到指定的资源，通常导致在服务器上的状态变化或副作用。")])]),e._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[v("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/HEAD",target:"_blank",rel:"noopener noreferrer"}},[e._v("HEAD"),v("OutboundLink")],1)]),e._v(" "),v("td",{staticStyle:{"text-align":"center"}},[e._v("HEAD 方法请求一个与 GET 请求的响应相同的响应，但没有响应体。")])]),e._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[v("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/PUT",target:"_blank",rel:"noopener noreferrer"}},[e._v("PUT"),v("OutboundLink")],1)]),e._v(" "),v("td",{staticStyle:{"text-align":"center"}},[e._v("PUT 方法用请求有效载荷替换目标资源的所有当前表示。")])]),e._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[v("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/DELETE",target:"_blank",rel:"noopener noreferrer"}},[e._v("DELETE"),v("OutboundLink")],1)]),e._v(" "),v("td",{staticStyle:{"text-align":"center"}},[e._v("DELETE 方法删除指定的资源。")])]),e._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[v("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/CONNECT",target:"_blank",rel:"noopener noreferrer"}},[e._v("CONNECT"),v("OutboundLink")],1)]),e._v(" "),v("td",{staticStyle:{"text-align":"center"}},[e._v("CONNECT 方法建立一个到由目标资源标识的服务器的隧道。")])]),e._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[v("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/OPTIONS",target:"_blank",rel:"noopener noreferrer"}},[e._v("OPTIONS"),v("OutboundLink")],1)]),e._v(" "),v("td",{staticStyle:{"text-align":"center"}},[e._v("OPTIONS 方法用于描述目标资源的通信选项。")])]),e._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[v("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/TRACE",target:"_blank",rel:"noopener noreferrer"}},[e._v("TRACE"),v("OutboundLink")],1)]),e._v(" "),v("td",{staticStyle:{"text-align":"center"}},[e._v("TRACE 方法沿着到目标资源的路径执行一个消息环回测试。")])])])]),e._v(" "),v("p",[e._v("所有请求方法的具体定义，可以参考 "),v("a",{attrs:{href:"https://httpwg.org/specs/rfc7231.html#GET",target:"_blank",rel:"noopener noreferrer"}},[e._v("rfc7231"),v("OutboundLink")],1),e._v("。")]),e._v(" "),v("h3",{attrs:{id:"请求头"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#请求头"}},[e._v("#")]),e._v(" 请求头")]),e._v(" "),v("p",[e._v("请求头允许客户端和服务器传递附加信息。一个请求头由名称（不区分大小写）狗跟一个冒号"),v("code",[e._v(":")]),e._v("，冒号后根跟具体的值（不带换行符）组成。该值前面的引导空白会被忽略。")]),e._v(" "),v("p",[e._v("之前可通过 "),v("code",[e._v("X-")]),e._v(" 前缀来描述自定义专用消息头，但该方法在 2012 年因为会造成不便而被弃用（"),v("a",{attrs:{href:"https://tools.ietf.org/html/rfc6648",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC6648"),v("OutboundLink")],1),e._v("）。")]),e._v(" "),v("p",[e._v("请求头是 "),v("code",[e._v("HTTP")]),e._v(" 头的一种，与请求主体无关。一些请求头还描述了请求的具体操作等。")]),e._v(" "),v("p",[e._v("完整的请求头列表，可以参考 "),v("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN"),v("OutboundLink")],1),e._v("。")]),e._v(" "),v("h2",{attrs:{id:"响应-response"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#响应-response"}},[e._v("#")]),e._v(" 响应 Response")]),e._v(" "),v("p",[v("code",[e._v("HTTP")]),e._v(" 的响应格式：")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("响应行")]),e._v(" 反馈响应情况")]),e._v(" "),v("li",[v("code",[e._v("响应头")]),e._v(" 对响应内容的描述")]),e._v(" "),v("li",[v("code",[e._v("空行")])]),e._v(" "),v("li",[v("code",[e._v("响应体")]),e._v(" 根据请求返回给客户端的内容")])]),e._v(" "),v("img",{attrs:{src:e.$withBase("/assets/roadmap/frontend/http-response-message.png"),alt:""}}),e._v(" "),v("p",[e._v("这是一个具体的示例：")]),e._v(" "),v("img",{attrs:{src:e.$withBase("/assets/roadmap/frontend/http-response.png"),alt:""}}),e._v(" "),v("h3",{attrs:{id:"响应行"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#响应行"}},[e._v("#")]),e._v(" 响应行")]),e._v(" "),v("p",[e._v("响应行定义了协议版本、响应码，以及响应信息：")]),e._v(" "),v("div",{staticClass:"language-text line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("&lt;protocol> &lt;code> &lt;message>\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br")])]),v("p",[e._v("例如：")]),e._v(" "),v("div",{staticClass:"language-text line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("HTTP/1.1 200 OK\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br")])]),v("p",[e._v("不同响应码表示不同的返回结果，通常规定：")]),e._v(" "),v("ul",[v("li",[e._v("100~199：提示信息，表示请求已经接受，正在处理")]),e._v(" "),v("li",[e._v("200~299：访问成功")]),e._v(" "),v("li",[e._v("300~399：重定向，完成任务需要其他操作")]),e._v(" "),v("li",[e._v("400~499：客户端错误")]),e._v(" "),v("li",[e._v("500~599：服务器端错误")])]),e._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),v("p",[e._v("响应码是一种规定，并不是固定的，这是在 "),v("a",{attrs:{href:"https://tools.ietf.org/html/rfc2616#section-10",target:"_blank",rel:"noopener noreferrer"}},[e._v("section 10 of RFC 2616"),v("OutboundLink")],1),e._v(" 中定义的。它可以通过后端服务器进行自定义，但是我们仍然需要根据具体情况分别按规定定义，否则会带来很多不便。")]),e._v(" "),v("p",[v("strong",[e._v("例如：")])]),e._v(" "),v("p",[e._v("我们通常使用 "),v("code",[e._v("404")]),e._v(" 来表示资源不存在。我们同样可以在后端服务器定义 "),v("code",[e._v("444")]),e._v(" 为资源不存在，这是允许的。")]),e._v(" "),v("p",[e._v("我们也可以使用 "),v("code",[e._v("222")]),e._v(" 来表示资源不存在，这样虽然可以，但是绝对不能这样用。")])]),e._v(" "),v("h3",{attrs:{id:"响应头"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#响应头"}},[e._v("#")]),e._v(" 响应头")]),e._v(" "),v("p",[e._v("响应头可以被定义为：被用于 "),v("code",[e._v("HTTP")]),e._v(" 响应中并且和响应消息主体无关的那一类头信息。")]),e._v(" "),v("p",[e._v("并非所有出现在响应中的响应头内容都属于响应头，例如 "),v("code",[e._v("Content-Length")]),e._v(" 表示响应体消息大小的实体头，虽然也可以叫做响应头。")]),e._v(" "),v("p",[e._v("完整的请求头列表，可以参考 "),v("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN"),v("OutboundLink")],1),e._v("。")]),e._v(" "),v("h2",{attrs:{id:"常见的响应码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常见的响应码"}},[e._v("#")]),e._v(" 常见的响应码")]),e._v(" "),v("h3",{attrs:{id:"_1xx：信息请求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1xx：信息请求"}},[e._v("#")]),e._v(" 1xx：信息请求")]),e._v(" "),v("p",[e._v("它们表示服务器接收并理解了请求，浏览器应该等待服务器处理信息的时间更长一些。这些状态码不太常见，不会直接影响您的 SEO。")]),e._v(" "),v("h3",{attrs:{id:"_2xx：请求成功"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2xx：请求成功"}},[e._v("#")]),e._v(" 2xx：请求成功")]),e._v(" "),v("p",[e._v("这意味着，您访问文件的请求已成功。对于 SEO，2xx HTTP 状态码仅表明一切正常。")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("200 OK")]),e._v("：请求成功。")]),e._v(" "),v("li",[v("code",[e._v("201 Created")]),e._v("：服务器确认创建的资源。")]),e._v(" "),v("li",[v("code",[e._v("202 Accepted")]),e._v("：客户端的请求已收到，但服务器仍在处理它。")]),e._v(" "),v("li",[v("code",[e._v("203 Non-Authoritative Information")]),e._v("：服务器发送给客户端的响应与服务器发送时的响应不一样。")]),e._v(" "),v("li",[v("code",[e._v("204 No Content")]),e._v("：服务器处理了请求，但没有给出任何内容。")]),e._v(" "),v("li",[v("code",[e._v("205 Reset Content")]),e._v("：客户端应刷新文档样本。")]),e._v(" "),v("li",[v("code",[e._v("206 Partial Content")]),e._v("：服务器只发送资源的一部分。")]),e._v(" "),v("li",[v("code",[e._v("207 Multi-Status")]),e._v("：默认情况下，消息正文是 XML 消息，可以包含多个单独的响应代码。")]),e._v(" "),v("li",[v("code",[e._v("208 Already Reported")]),e._v("：WebDAV 绑定的成员已在（多状态）响应的前面部分中列举，不再包括在内。")])]),e._v(" "),v("h3",{attrs:{id:"_3xx：重定向"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3xx：重定向"}},[e._v("#")]),e._v(" 3xx：重定向")]),e._v(" "),v("p",[e._v("当用户或搜索引擎遇到 3xx 状态码时，他们将被重定向到与初始 URL 不同的 URL。如果 SEO 对您的业务成功至关重要，那么您必须自学这些代码以及如何正确使用它们。")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("300 Multiple Choices")]),e._v("：客户端发出的请求有几种可能的响应。")]),e._v(" "),v("li",[v("code",[e._v("301 Moved Permanently")]),e._v("：服务器告诉客户端他们寻找的资源已经永久移动到另一个 URL。所有用户和机器人都将被重定向到新的 URL。这是 SEO 的一个非常重要的状态- 代码。")]),e._v(" "),v("li",[v("code",[e._v("302 Found")]),e._v("：网站或页面已临时移动到不同的 URL。这是另一个与 SEO 相关的状态代- 码。")]),e._v(" "),v("li",[v("code",[e._v("303 See Other")]),e._v("：此代码告诉客户端服务器不是将它们重定向到请求的资源，而是重定向到另一个页面。")]),e._v(" "),v("li",[v("code",[e._v("304 Not Modified")]),e._v("：请求的资源自上次传输后没有改变。")]),e._v(" "),v("li",[v("code",[e._v("305 Use Proxy")]),e._v("：客户端只能通过响应中给出的代理访问请求的资源。")]),e._v(" "),v("li",[v("code",[e._v("307 Temporary Redirect")]),e._v("：服务器告诉客户端他们寻找的资源已经被临时重定向到另一个 URL。它与 SEO 性能有关。")]),e._v(" "),v("li",[v("code",[e._v("308 Permanent Redirect")]),e._v("：服务器告诉客户端他们寻找的资源已被临时重定向到另一个 URL。")])]),e._v(" "),v("h3",{attrs:{id:"_4xx：客户端错误"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4xx：客户端错误"}},[e._v("#")]),e._v(" 4xx：客户端错误")]),e._v(" "),v("p",[e._v("这意味着找不到该页面，并且请求有问题。客户端发生的事情就是问题所在。这可能是不正确的数据格式、未经授权的访问或请求中的错误。")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("400 Bad Request")]),e._v("：客户端发送的请求包含不完整的数据、构造不良的数据或无效的数据。")]),e._v(" "),v("li",[v("code",[e._v("401 Unauthorized")]),e._v("：客户端访问请求的资源需要授权。")]),e._v(" "),v("li",[v("code",[e._v("403 Forbidden")]),e._v("：客户端尝试访问的资源被禁止。")]),e._v(" "),v("li",[v("code",[e._v("404 Not Found")]),e._v("：服务器可访问，但客户端查找的特定页面不可访问。如果一个网站有太多的 404 错误，谷歌和雅虎等搜索引擎就会得到负面印象。修复 404 错误代码的最简单和最简单的方法是使用 301 重定向来重定向页面。")]),e._v(" "),v("li",[v("code",[e._v("405 Method Not Allowed")]),e._v("：服务器已接收并识别请求，但拒绝了特定的请求方法。")]),e._v(" "),v("li",[v("code",[e._v("406 Not Acceptable")]),e._v("：状态码是一条错误消息，表示您的网站或 Web 应用程序不支持具有特定协议的客户端请求")]),e._v(" "),v("li",[v("code",[e._v("407 Proxy Authentication Required")]),e._v("：此状态码类似于 401 未授权。唯一的区别是授权需要由代理完成。")]),e._v(" "),v("li",[v("code",[e._v("408 Request Timeout")]),e._v("：客户端发送给网站服务器的请求已经过期。")]),e._v(" "),v("li",[v("code",[e._v("409 Conflict")]),e._v("：发送的请求与服务器内部操作冲突。")]),e._v(" "),v("li",[v("code",[e._v("410 Gone")]),e._v("：客户端想要访问的资源已被永久删除。")])]),e._v(" "),v("p",[e._v("另外，还应该了解以下 4xx 状态码：")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("402 Payment Required")]),e._v("：需要付款")]),e._v(" "),v("li",[v("code",[e._v("412 Precondition Failed")]),e._v("：前置条件失败")]),e._v(" "),v("li",[v("code",[e._v("415 Unsupported Media Type")]),e._v("：不支持的媒体类型")]),e._v(" "),v("li",[v("code",[e._v("416 Requested Range Not Satisfiable")]),e._v("：请求范围不满足")]),e._v(" "),v("li",[v("code",[e._v("417 Expectation Failed")]),e._v("：期待落空")]),e._v(" "),v("li",[v("code",[e._v("422 Unprocessable Entity")]),e._v("：不可处理的实体")]),e._v(" "),v("li",[v("code",[e._v("423 Locked")]),e._v("：锁定")]),e._v(" "),v("li",[v("code",[e._v("424 Failed Dependency")]),e._v("：依赖失败")]),e._v(" "),v("li",[v("code",[e._v("426 Upgrade Required")]),e._v("：需要升级")]),e._v(" "),v("li",[v("code",[e._v("429 Too Many Requests")]),e._v("：请求过多")]),e._v(" "),v("li",[v("code",[e._v("431 Request Header Fields Too Large")]),e._v("：请求头字段太大")]),e._v(" "),v("li",[v("code",[e._v("451 Unavailable for Legal Reasons")]),e._v("：因法律原因不可用")])]),e._v(" "),v("h3",{attrs:{id:"_5xx：服务器错误"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5xx：服务器错误"}},[e._v("#")]),e._v(" 5xx：服务器错误")]),e._v(" "),v("p",[e._v("这些错误不是客户端的错，而是表明服务器端存在问题。客户端发出的请求是好的，但是服务器无法生成请求的资源。")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("500 Internal Server Error")]),e._v("：服务器在处理客户端请求时遇到无法处理的情况。")]),e._v(" "),v("li",[v("code",[e._v("501 Not Implemented")]),e._v("：服务器不知道或无法解析客户端发送的请求方法。")]),e._v(" "),v("li",[v("code",[e._v("502 Bad Gateway")]),e._v("：服务器充当网关或代理并从入站服务器收到无效消息。")]),e._v(" "),v("li",[v("code",[e._v("503 Service Unavailable")]),e._v("：服务器可能已关闭并且无法处理客户端的请求。此 HTTP 状态码是您在 Web 上可能遇到的最常见的服务器问题之一。它也会对您的 SEO 产生负面影响。如果 503 错误没有很快得到解决，搜索引擎会将其注册为永久性问题并取消对页面的索引。")]),e._v(" "),v("li",[v("code",[e._v("511 Network Authentication Required")]),e._v("：客户端需要在网络上进行身份验证才能访问资源。")])]),e._v(" "),v("p",[e._v("另外，还应该了解以下 5xx 状态码：")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("504 Gateway Timeout")]),e._v("：网关超时")]),e._v(" "),v("li",[v("code",[e._v("505 HTTP Version Not Supported")]),e._v("：不支持 HTTP 版本")]),e._v(" "),v("li",[v("code",[e._v("506 Variant Also Negotiates")]),e._v("：变种也商量")]),e._v(" "),v("li",[v("code",[e._v("507 Insufficient Storage")]),e._v("：存储空间不足")]),e._v(" "),v("li",[v("code",[e._v("508 Loop Detected")]),e._v("：检测到环路")]),e._v(" "),v("li",[v("code",[e._v("510 Not Extended")]),e._v("：未扩展")])]),e._v(" "),v("h3",{attrs:{id:"更多"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#更多"}},[e._v("#")]),e._v(" 更多")]),e._v(" "),v("p",[e._v("更多状态码的内容，可以参考 "),v("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN"),v("OutboundLink")],1),e._v("。")]),e._v(" "),v("h2",{attrs:{id:"http-1-1-的持续链接"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-1-1-的持续链接"}},[e._v("#")]),e._v(" HTTP 1.1 的持续链接")]),e._v(" "),v("p",[e._v("HTTP 1.1 的持续链接有两种工作方式，即：")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("非流水线方式：客户在收到前一个响应后才能发出下一个请求。")]),e._v(" "),v("p",[e._v("这比非持续链接的两倍 RTT 开销节省了建立 TCP 连接所需的一个 RTT 时间。但服务器在发送完一个对象后，其 TCP 就处于空闲状态，浪费了服务器的资源。")])]),e._v(" "),v("li",[v("p",[e._v("流水线方式：客户在收到 HTTP 的响应报文之前就能够接着发送新的请求报文。")]),e._v(" "),v("p",[e._v("使用流水线方式时，一个接一个的请求报文到达服务器后，服务器就可以连续发回响应报文。这样客户访问所有对象就只需花费一个 RTT 时间，使 TCP 连接中的空间时间减少，提高了下载文档的效率。")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);