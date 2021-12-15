# 网络请求

## Ajax

`Ajax`，`Asynchronous JavaScript and XML`，它本身并不是新技术，而是一种利用现有技术创新的技术集合。它利用了 `XMLHttpRequest` 以及多种数据格式，能够让网页应用快速地增量更新呈现在用户界面上，而不是重载整个页面，这使得页面的交互更加友好。

### XMLHttpRequest

随着网络应用的广泛，通过网络地址刷新整个页面的内容有时显得过于冗余，于是出现了 `XMLHttpRequest` 技术。它用于与服务器进行交互，在不刷新页面的情况下请求特定 `URL`。这允许网页在不影响用户操作的情况下，更新页面的局部内容。

`XMLHttpRequest` 是一个内建的浏览器对象，允许使用 `JavaScript` 发送 `HTTP` 请求。虽然它有 `XML` 一词，但它不仅仅能发送 `XML`，而是可以发送任何数据内容。

其工作原理：

<img :src="$withBase('/assets/roadmap/frontend/js/xhr.gif')" alt="工作原理">

### 发送请求

发送一个 `XMLHttpRequest` 请求，大致需要三步：

- 1、创建 `XMLHttpRequest` 对象

  ```js
  let xhr = new XMLHttpRequest(); // 没有任何参数
  ```

- 2、初始化对象

  ```js
  xhr.open(method, URL, [async, user, password]);
  ```

  - `method`：要是用的 `HTTP` 方法
  - `URL`：请求路径
  - `async`：可选，默认 `true`，表示是否异步执行。如果为 `true`，则在 `send()` 方法受到答复前不会返回
  - `user`：认证用户名，默认 `null`
  - `password`：认证密码，默认 `null`

  这里的 `open` 并不会真正建立连接，而是仅仅配置请求对象。

  ::: warning 注意

  需要注意的是，`async` 参数在很多浏览器上已经废弃支持同步，因为它在主线程上，容易破坏用户体验。但在 [Worker](https://developer.mozilla.org/zh-CN/docs/Web/API/Worker) 线程上允许同步请求。

  :::

- 3、发送请求

  ```js
  xhr.send([body]);
  ```

  - `body`：发送请求时的可选请求体。在某些请求中（如 GET 请求），是不包含请求体的。

  该方法会建立连接，并将请求发送到服务器。

### 接收响应

发送之后，可以通过回调方法获取响应：

```js
// 请求完成，响应已经完全下载，可以显示响应信息
xhr.onload = function() {
  console.log(`${xhr.status}, ${xhr.response}`);
};

// 请求错误，或无法发出请求
xhr.onerror = function() {
  console.log("error");
};

// 定时触发，可以显示进度
xhr.onprogress = function(event) {
  // 如果服务器发送了 Content-Length 响应头，event.lengthComputable 会为 true，此时可以调用 event.total 属性
  console.log(`${event.loaded} / ${event.total}`);
};
```

一旦接收到响应，`xhr` 中会接收到：

- `status`：状态码
- `statusText`：状态消息，一般对应于状态码
- `response`：服务器返回的响应体

### 设置参数

此外，我们在发送请求之前，还可以设置一些常用参数。

#### 设置响应时间

```js
xhr.timeout = 10000; // 10秒超时
```

#### 设置响应格式

```js
xhr.responseType = "json";
```

格式可以是如下内容：

- `""`：默认，响应格式为字符串
- `"text"`：响应格式为字符串
- `"arraybuffer"`：响应格式为 `ArrayBuffer`一组二进制数据
- `"blob"`：响应格式为 `Blob`，一组二进制数据
- `"document"`：响应格式为 `XML document`
- `"json"`：响应格式为 `JSON`

### 状态

`XMLHttpRequest` 的状态会随着进度变化而变化。通过 `readyState` 可以了解实时状态。

具体状态分为：

- UNSENT = 0; // 初始状态
- OPENED = 1; // open 被调用
- HEADERS_RECEIVED = 2; // 接收到响应头
- LOADING = 3; // 响应体正在加载
- DONE = 4; // 请求完成

```js
var xhr = new XMLHttpRequest();
console.log("UNSENT", xhr.readyState); // readyState 为 0

xhr.open("GET", "/api", true);
console.log("OPENED", xhr.readyState); // readyState 为 1

xhr.onprogress = function() {
  console.log("LOADING", xhr.readyState); // readyState 为 3
};

xhr.onload = function() {
  console.log("DONE", xhr.readyState); // readyState 为 4
};

xhr.send(null);
```

::: tip 提示

在一些比较旧的代码中，会看到 `onreadystatechange` 方法：

```js
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    // 请求完成
    if (xhr.status === 200) {
      // 请求成功，可以拿到响应体
      console.log(xhr.response);
    } else {
      // 请求失败
    }
  } else {
    // 未完成，状态还在继续
  }
};
```

这种方式现在基本上已经被 `onload`、`onerror` 的形式所取代。

:::

### 终止请求

在请求过程中，我们可以随时终止请求，让状态变为 `0`。

```js
xhr.abort();
```

### 设置请求头

我们可以自定义请求头：

```js
xhr.setRequestHeader("Content-Type", "application/json");
```

注意该方法不会覆盖请求头，只是添加值。如果一个请求头被多次赋值，那么会生成一个合并多值的请求头。

### FormData

如果建立一个 POST 请求，很多时候需要使用 `FormData` 对象，它用来创建一个表单数据对象。

```js
let formData = new FormData(data);
formData.append(name, value);

// 让表单以 json 格式发送。还可以以 multipart/form-data 格式发送，但 json 更加灵活高效
xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
xhr.send(formData);
```

### 跨域请求

通过设置 `withCredentials` 属性来实现跨域请求。它指示了是否该使用类似 `cookie`、`authorization headers` 或者 `TLS` 客户端证书这一类资格证书来创建一个跨站点访问控制请求。

这个属性在同站点下无效。同时，该指示也会被用作响应中 `cookie` 被忽视的标识。

```js{2}
let xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.open("GET", "https://www.jeremyjone.com");
```

## Fetch

`fetch` 提供了一个获取资源的接口，相比 `XMLHttpRequest`，它们本质上做的都是同一件事，但是它更强大，也更灵活。

### 基本语法

```js
let promise = fetch(input[, init]);
```

- `input`：要访问的资源，它可以是一个 URL，也可以是一个 Request 对象
- `init`：配置对象，包含 `method`、`headers` 等。默认没有就是一个普通 GET 请求。

它返回一个 `Promise` 对象，这个对象会在请求响应后被 `resolve`，并传回 `Response` 对象。

当遇到网络错误时，它会被 `reject`，并传回 `TypeError`信息。

::: warning 注意

与 `XMLHttpRequest` 不同，`fetch` 只要服务器有返回值就算成功，没有返回值才算失败。所以在判断返回值是否成功时，我们不仅要判断 `Promise` 对象是否被 `resolve`，而且还要判断 `Response.status` 或 `Response.ok` 的值。

:::

### 接收响应

响应体具有多种方法，用于返回不同格式的内容：

- `response.text()`：直接返回文本格式
- `response.json()`：解析为 JSON 格式内容
- `response.formData()`：返回一个 FormData 对象
- `response.blob()`：返回 Blob 格式对象
- `response.arrayBuffer()`：返回 ArrayBuffer 对象

这些方法同样返回一个 `Promise` 对象：

```js{2,3}
fetch(url, options)
  .then(response => response.json())
  .then(info => console.log(info));
```

### 设置请求头

我们同样可以设置请求头：

```js{3-5}
let promise = fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json;charset=utf-8"
  },
  body: JSON.stringify(info)
});
```

### 跨域请求

通过设置 `credentials` 可以设置跨域请求，`fetch` 会携带我们的 `cookie` 发送到指定网站服务器：

```js{2}
fetch(url, {
  credentials: "include"
});
```

它可以设置三个值：

- `same-origin`：同源可以，默认值
- `include`：是否同源都可以
- `omit`：都拒绝

如果服务器同意了请求，那么会返回带有：

```json
Access-Control-Allow-Origin: * / URL // * 或具体的 URL 地址。非简单请求必须是具体地址
Access-Control-Allow-Credentials: true // 非简单请求的响应头一定包含此项
```

的响应头内容。

#### 简单的请求

- 使用简单的方法，如 `GET`、`POST`、`HEAD`。
- 简单的请求头
  - `Accept`
  - `Accept-Language`
  - `Content-Language`
  - `Content-Type`: 仅限 `application/x-www-form-urlencoded`，`multipart/form-data` 或 `text/plain`

#### 非简单请求

除了简单请求，剩下都是非简单请求。比如 `PATCH`、`DELETE` 方法，或者包含其他请求头内容（例如 `'API-Key'` 头，或者 `'Content-Type': 'application/json'`）的 `GET`、`POST` 请求等。

非简单请求在实际过程中会比简单请求更加复杂，主要体现在它会有一次 `预检请求`。浏览器通过 `预检请求` 来请求服务器的许可，如果服务器同意处理请求，那么才会真正进行响应。

<img :src="$withBase('/assets/roadmap/frontend/js/fetch-unsample-request.png')" alt="fetch-unsample-request">

### 封装

对 `fetch` 可以进行二次封装，从而方便正常使用。

[封装实例](https://www.jeremyjone.com/612/)
