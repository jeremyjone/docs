# 网络请求

## XMLHttpRequest

随着网络应用的广泛，通过网络地址刷新整个页面的内容有时显得过于冗余，于是出现了 `XMLHttpRequest` 技术。它用于与服务器进行交互，在不刷新页面的情况下请求特定 `URL`。这允许网页在不影响用户操作的情况下，更新页面的局部内容。

`XMLHttpRequest` 是一个内建的浏览器对象，允许使用 `JavaScript` 发送 `HTTP` 请求。虽然它有 `XML` 一词，但它不仅仅能发送 `XML`，而是可以发送任何数据内容。

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

## Ajax

`Ajax`，`Asynchronous JavaScript and XML`，它本身并不是新技术，而是一种利用现有技术创新的技术集合。它利用了 `XMLHttpRequest` 以及多种数据格式，能够让网页应用快速地增量更新呈现在用户界面上，而不是重载整个页面，这使得页面的交互更加友好。

## Fetch
