# 网络基础

## URI、URL 与 URN

- `URI`：`Uniform Resource Identifier`，统一资源标识符。一个紧凑的字符串，用来表示抽象或物理资源
- `URL`：`Uniform Resource Locator`，统一资源定位符。是 URI 的子集，除了确定一个资源，还提供一种定位该资源的主要访问机制
- `URN`：`Uniform Resource Name`，统一资源名称。作为特定内容的唯一名称使用的，与当前资源的所在地无关。使用 URN，就可以将资源四处迁移，而不用担心迁移后无法访问。

::: tip 题外话
P2P 下载中使用的磁力链接是 URN 的一种实现，它可以持久化的标识一个 BT 资源，资源分布式的存储在 P2P 网络中，无需中心服务器用户即可找到并下载它。
:::

它们的关系：

<img :src="$withBase('/assets/roadmap/frontend/uri.png')" alt="">

更详细的内容可以参考 [stackoverflow](https://stackoverflow.com/questions/4913343/what-is-the-difference-between-uri-url-and-urn)

对于 `URL` 的设计，可以参考 [网站 URL 设计远没那么简单](https://www.biaodianfu.com/url-design.html)

## HTTP

`HTTP`：`hypertext transform protocol`，超文本传输协议。它允许将超文本标记语言（`HTML`）从 web 服务器传送到客户端的浏览器。为了使超文本的链接能够高效率的完成，需要使用 `HTTP` 协议来出阿松一些必需的信息。

从层次的角度看，`HTTP` 是面向事务的应用层协议，它是万维网上能够可靠地交换文件的重要基础。

其特点为：

- 支持典型的客户端服务器模式（B/S）
- 灵活、简单
- 几乎支持所有的数据格式
- 无状态

一个简单的通信示例：

<img :src="$withBase('/assets/roadmap/frontend/http.png')" alt="">

上面图中过程，显示了一个完整的 `HTTP` 请求过程：

- 浏览器分析超链接指向页面的 URL
- 浏览器向域名系统（DNS）请求解析 `www.tsinghua.edu.cn` 的 IP 地址
- 域名系统（DNS）解析出该服务器的 IP 地址并告知浏览器
- 浏览器与服务器建立 TCP 连接
- 浏览器发出请求文档指令（一个 GET 请求）
- 服务器给出响应，把文档发送给浏览器
- TCP 连接被释放
- 浏览器将获取到的文件内容进行渲染，呈现到浏览器中

### 请求 Request

`HTTP` 的请求格式：

- `请求行` 发送什么类型的请求
- `请求头` 对发送请求信息的描述
- `空行`
- `请求体` 根据请求类型不同，请求体内容也不尽相同

<img :src="$withBase('/assets/roadmap/frontend/http-request.png')" alt="">

#### 请求行

请求行定义了请求方法、地址，以及协议版本。其语法：

```text
<METHOD> <URI> <protocol>
```

例如：

```text
GET /index.html HTTP/1.1
```

不同的请求方法有不同的用法。根据 `HTTP` 标准，可以使用多种请求方法。

- 在 `HTTP1.0` 中，定义了 `GET`、`POST` 和 `HEAD` 方法。
- 在 `HTTP1.1` 中，新增了 `OPTIONS`、`PUT`、`DELETE`、`TRACE` 和 `CONNECT` 方法。

|                                     方法                                     |                                    描述                                     |
| :--------------------------------------------------------------------------: | :-------------------------------------------------------------------------: |
|     [GET](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/GET)     |  GET 方法请求一个指定资源的表示形式，使用 GET 的请求应该只被用于获取数据。  |
|    [POST](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/POST)    | POST 方法用于将实体提交到指定的资源，通常导致在服务器上的状态变化或副作用。 |
|    [HEAD](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/HEAD)    |        HEAD 方法请求一个与 GET 请求的响应相同的响应，但没有响应体。         |
|     [PUT](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/PUT)     |             PUT 方法用请求有效载荷替换目标资源的所有当前表示。              |
|  [DELETE](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/DELETE)  |                         DELETE 方法删除指定的资源。                         |
| [CONNECT](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/CONNECT) |            CONNECT 方法建立一个到由目标资源标识的服务器的隧道。             |
| [OPTIONS](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/OPTIONS) |                  OPTIONS 方法用于描述目标资源的通信选项。                   |
|   [TRACE](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/TRACE)   |            TRACE 方法沿着到目标资源的路径执行一个消息环回测试。             |

所有请求方法的具体定义，可以参考 [rfc7231](https://httpwg.org/specs/rfc7231.html#GET)。

#### 请求头

请求头允许客户端和服务器传递附加信息。一个请求头由名称（不区分大小写）狗跟一个冒号`:`，冒号后根跟具体的值（不带换行符）组成。该值前面的引导空白会被忽略。

之前可通过 `X-` 前缀来描述自定义专用消息头，但该方法在 2012 年因为会造成不便而被弃用（[RFC6648](https://tools.ietf.org/html/rfc6648)）。

请求头是 `HTTP` 头的一种，与请求主体无关。一些请求头还描述了请求的具体操作等。

完整的请求头列表，可以参考 [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)。

### 响应 Response

`HTTP` 的响应格式：

- `响应行` 反馈响应情况
- `响应头` 对响应内容的描述
- `空行`
- `响应体` 根据请求返回给客户端的内容

<img :src="$withBase('/assets/roadmap/frontend/http-response.png')" alt="">

#### 响应行

响应行定义了协议版本、响应码，以及响应信息：

```text
<protocol> <code> <message>
```

例如：

```text
HTTP/1.1 200 OK
```

不同响应码表示不同的返回结果，通常规定：

- 100~199：提示信息，表示请求已经接受，正在处理
- 200~299：访问成功
- 300~399：重定向，完成任务需要其他操作
- 400~499：客户端错误
- 500~599：服务器端错误

::: tip 提示
响应码是一种规定，并不是固定的，这是在 [section 10 of RFC 2616](https://tools.ietf.org/html/rfc2616#section-10) 中定义的。它可以通过后端服务器进行自定义，但是我们仍然需要根据具体情况分别按规定定义，否则会带来很多不便。

**例如：**

我们通常使用 `404` 来表示资源不存在。我们同样可以在后端服务器定义 `444` 为资源不存在，这是允许的。

我们也可以使用 `222` 来表示资源不存在，这样虽然可以，但是绝对不能这样用。
:::

常见的响应码：

- 1xx：信息请求

  它们表示服务器接收并理解了请求，浏览器应该等待服务器处理信息的时间更长一些。这些状态码不太常见，不会直接影响您的 SEO。

- 2xx：请求成功

  这意味着，您访问文件的请求已成功。对于 SEO，2xx HTTP 状态码仅表明一切正常。

  - `200 OK`：请求成功。
  - `201 Created`：服务器确认创建的资源。
  - `202 Accepted`：客户端的请求已收到，但服务器仍在处理它。
  - `203 Non-Authoritative Information`：服务器发送给客户端的响应与服务器发送时的响应不一样。
  - `204 No Content`：服务器处理了请求，但没有给出任何内容。
  - `205 Reset Content`：客户端应刷新文档样本。
  - `206 Partial Content`：服务器只发送资源的一部分。
  - `207 Multi-Status`：默认情况下，消息正文是 XML 消息，可以包含多个单独的响应代码。
  - `208 Already Reported`：WebDAV 绑定的成员已在（多状态）响应的前面部分中列举，不再包括在内。

- 3xx：重定向

  当用户或搜索引擎遇到 3xx 状态码时，他们将被重定向到与初始 URL 不同的 URL。如果 SEO 对您的业务成功至关重要，那么您必须自学这些代码以及如何正确使用它们。

  - `300 Multiple Choices`：客户端发出的请求有几种可能的响应。
  - `301 Moved Permanently`：服务器告诉客户端他们寻找的资源已经永久移动到另一个 URL。所有用户和机器人都将被重定向到新的 URL。这是 SEO 的一个非常重要的状态- 代码。
  - `302 Found`：网站或页面已临时移动到不同的 URL。这是另一个与 SEO 相关的状态代- 码。
  - `303 See Other`：此代码告诉客户端服务器不是将它们重定向到请求的资源，而是重定向到另一个页面。
  - `304 Not Modified`：请求的资源自上次传输后没有改变。
  - `305 Use Proxy`：客户端只能通过响应中给出的代理访问请求的资源。
  - `307 Temporary Redirect`：服务器告诉客户端他们寻找的资源已经被临时重定向到另一个 URL。它与 SEO 性能有关。
  - `308 Permanent Redirect`：服务器告诉客户端他们寻找的资源已被临时重定向到另一个 URL。

- 4xx：客户端错误

  这意味着找不到该页面，并且请求有问题。客户端发生的事情就是问题所在。这可能是不正确的数据格式、未经授权的访问或请求中的错误。

  - `400 Bad Request`：客户端发送的请求包含不完整的数据、构造不良的数据或无效的数据。
  - `401 Unauthorized`：客户端访问请求的资源需要授权。
  - `403 Forbidden`：客户端尝试访问的资源被禁止。
  - `404 Not Found`：服务器可访问，但客户端查找的特定页面不可访问。如果一个网站有太多的 404 错误，谷歌和雅虎等搜索引擎就会得到负面印象。修复 404 错误代码的最简单和最简单的方法是使用 301 重定向来重定向页面。
  - `405 Method Not Allowed`：服务器已接收并识别请求，但拒绝了特定的请求方法。
  - `406 Not Acceptable`：状态码是一条错误消息，表示您的网站或 Web 应用程序不支持具有特定协议的客户端请求
  - `407 Proxy Authentication Required`：此状态码类似于 401 未授权。唯一的区别是授权需要由代理完成。
  - `408 Request Timeout`：客户端发送给网站服务器的请求已经过期。
  - `409 Conflict`：发送的请求与服务器内部操作冲突。
  - `410 Gone`：客户端想要访问的资源已被永久删除。

  另外，还应该了解以下 4xx 状态码：

  - `402 Payment Required`：需要付款
  - `412 Precondition Failed`：前置条件失败
  - `415 Unsupported Media Type`：不支持的媒体类型
  - `416 Requested Range Not Satisfiable`：请求范围不满足
  - `417 Expectation Failed`：期待落空
  - `422 Unprocessable Entity`：不可处理的实体
  - `423 Locked`：锁定
  - `424 Failed Dependency`：依赖失败
  - `426 Upgrade Required`：需要升级
  - `429 Too Many Requests`：请求过多
  - `431 Request Header Fields Too Large`：请求头字段太大
  - `451 Unavailable for Legal Reasons`：因法律原因不可用

- 5xx：服务器错误

  这些错误不是客户端的错，而是表明服务器端存在问题。客户端发出的请求是好的，但是服务器无法生成请求的资源。

  - `500 Internal Server Error`：服务器在处理客户端请求时遇到无法处理的情况。
  - `501 Not Implemented`：服务器不知道或无法解析客户端发送的请求方法。
  - `502 Bad Gateway`：服务器充当网关或代理并从入站服务器收到无效消息。
  - `503 Service Unavailable`：服务器可能已关闭并且无法处理客户端的请求。此 HTTP 状态码是您在 Web 上可能遇到的最常见的服务器问题之一。它也会对您的 SEO 产生负面影响。如果 503 错误没有很快得到解决，搜索引擎会将其注册为永久性问题并取消对页面的索引。
  - `511 Network Authentication Required`：客户端需要在网络上进行身份验证才能访问资源。

  另外，还应该了解以下 5xx 状态码：

  - `504 Gateway Timeout`：网关超时
  - `505 HTTP Version Not Supported`：不支持 HTTP 版本
  - `506 Variant Also Negotiates`：变种也商量
  - `507 Insufficient Storage`：存储空间不足
  - `508 Loop Detected`：检测到环路
  - `510 Not Extended`：未扩展

更多状态码的内容，可以参考 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status)。

#### 响应头

响应头可以被定义为：被用于 `HTTP` 响应中并且和响应消息主体无关的那一类头信息。

并非所有出现在响应中的响应头内容都属于响应头，例如 `Content-Length` 表示响应体消息大小的实体头，虽然也可以叫做响应头。

完整的请求头列表，可以参考 [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)。
