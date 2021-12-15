# JavaScript 基础

## 什么是 JavaScript

`JavaScript` 是一种具有函数优先的轻量级、解释型的脚本语言。它最初的设计是用来操作浏览器中的 `DOM` 元素的，但现在它也被应用到了很多非浏览器环境中，甚至开发后端应用。

## DOM 操作

[DOM](../html/#dom) 是浏览器解析页面后自动生成的，但是它只是已经静态页面。我们可以通过 `JavaScript` 让它们做出一些有趣的改变。

### 获取 DOM

```js
var element = document.querySelector(selector); // 获取一个选择器对象。如果有多个，返回第一个

var elementList = document.querySelectAll(selector); // 获取所有选择器对象集合

// 还有上古方法
Document.getElementById(id);
Document.getElementsByTagName(name);
// ...
```

通过上述方法可以快速获取 `DOM` 元素，其中 `selector` 可以是任意有效 css 选择器，它可以很简单，也可以很复杂，只要是正确的，就可以找到对应元素。

能够获取到 `DOM`，就意味着我们可以获取到 `DOM` 的一切信息。我们可以获取对应的位置信息、大小信息、以及样式信息等。

```js
var div = document.querySelector("div");
var top = div.offsetTop;
var left = div.offsetLeft;
var width = div.offsetWidth;
var height = div.offsetHeight;
var style = div.style; // CSSStyleDeclaration Object
```

同样还可以修改对应的样式：

```js
div.style.color = "red"; // 文字变为红色
div.className = "my-class"; // 给 div 添加样式类
```

### 创建 DOM

```js
element.appendChild(newElement);
```

通过 `appendChild` 属性可以将新元素插入到指定元素的子项中。

::: tip 提示

通常，为了减少回流，都是先创建一个片段（`Fragment`），将所有内容都放到片段之中，最后再将片段一次性添加到 `DOM` 中。

```js
var p1 = document.createElement("p");
p1.text = "这是文本段落1";

var p2 = document.createElement("p");
p2.text = "这是文本段落2";

var newElem = docuemnt.createDocumentFragment();
newElem.appendChild(p1);
newElem.appendChild(p2);

div.appendChild(newElem);
```

:::

### 删除 DOM

```js
div.removeChild(node);
```

这将把元素从整个 `DOM` 树中移除。

## 事件

事件是 `JavaScript` 中一个非常重要，也是最最常用的功能。有了事件，意味着用户可以同页面进行交互，然后通过一系列响应得到反馈。

> 事件本质是系统在特定条件下产生或触发的某种信号，并提供一系列动作的机制。

在 `WEB` 中，事件在浏览器中被触发并且通常被绑定到窗口内部的特定部分 —— 一个元素、一系列元素、甚至是整个窗口等等。

### 添加事件

事件是绑定在元素上的，所以我们需要有一个元素：

```js
var btn = querySelector("button");
```

然后我们就可以添加事件：

```js
btn.onclick = function() {
  //...
};
```

它绑定一个方法，用于事件触发时回调。

除了 `onclick` 之外，事件还有很多，比如：

- `onmouseenter`
- `onmouseout`
- `onfocus`
- `ondblcilck`

等等。常见事件可以参考 [MDN Events](https://developer.mozilla.org/zh-CN/docs/Web/Events)。

### 新的事件触发机制

在 `DOM Level 2` 以上，增添了新的事件触发机制，相比之前的直接绑定事件，新的方法提供了更加统一的接口、更加灵活的处理机制：

```js
target.addEventListener(type, listener, options);
target.addEventListener(type, listener, useCapture);
```

- `type`：[事件类型](https://developer.mozilla.org/zh-CN/docs/Web/Events) 字符串
- `listener`：事件触发的回调函数
- `options`：指定回调函数的可选参数对象。
  - `capture`：是否在 [捕获阶段](#冒泡及捕获) 触发
  - `once`：是否只调用一次。如果为 true，调用后时间被自动移除
  - `passive`：是否禁用 `preventDefault()`
  - `signal`：当 `AbortSignal` 的 `abort()` 方法被调用时，监听器被移除
- `useCapture`：是否在 [捕获阶段](#冒泡及捕获) 触发，默认 `false`

在最开始，第三个参数仅仅是一个 Boolean 值，表示是否在捕获阶段调用事件处理程序。随着时间推移，需要的选项越来越多，就添加了 `options` 选项。

`addEventListener` 相比之前的直接绑定函数，它具有如下优点：

- 允许给一个事件注册多个监听器
- 提供了一种更精细的手段控制 `listener` 的触发阶段
- 对任何 `DOM` 元素都有效

#### 新旧方法的区别

虽然都是添加事件，但是新方法与旧方法还是有一些区别的。

- 旧的方法会替换该元素上已经存在的事件，没有兼容性问题
- 而新的方法则会追加方法，允许在一个元素上添加多个监听事件，但存在兼容性问题

### 移除事件

移除事件也非常方便，只需要通过 `removeEventListener` 即可。

### 阻止与冒泡

#### 阻止默认行为

有时候会需要禁止元素的默认行为，此时可以通过 `preventDefault()` 方法实现。

#### 冒泡及捕获

首先要知道，**冒泡**和**捕获**是两个不同阶段。当一个事件发生在一个具有父元素的元素上时，它分成：

- 捕获阶段：
  - 浏览器检查元素的最外层 `<html>` 元素，是否在捕获阶段中注册了对应的事件处理程序，如果有，则运行
  - 依次寻找下一层元素，执行相同操作（捕获事件并运行），直到到达实际点击的元素
- 冒泡阶段：
  - 浏览器检查实际点击元素是否在冒泡阶段中注册了对应的事件处理程序，如果有，则运行
  - 依次寻找上一层元素，执行相同操作，直到 `<html>` 元素

<img :src="$withBase('/assets/roadmap/frontend/js/bubble.png')" alt="">

默认情况下，所有事件都在冒泡阶段注册，所以上图的示例中，先执行 `<button>` 的 `onclick` 事件，然后执行 `<div>` 的 `onclick` 事件。

但是通常我们希望事件仅仅停留在 `<button>` 中，这就需要用到 `stopPropagation()` 方法来阻止事件冒泡。

::: tip 历史问题

现在，我们不需要非常清楚捕获和冒泡的区别，因为现代浏览器已经默认将所有事件都在冒泡阶段注册。

但是在最开始，网景只使用捕获，而 IE 则只使用冒泡。

:::

#### 委托

冒泡允许我们利用事件委托。它允许我们在父节点上设置事件，然后所有子节点都可以通过冒泡调用到父节点的对应事件。这样的方式适用于每一个子节点都需要执行相同内容，它省去了为每一个子节点单独设置事件监听器。_例如一个列表。_

### Promise
