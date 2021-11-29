# HTML 基础

## 什么是 HTML

`HTML`：`Hyper Text Markup Language`，超文本标记语言。它不是编程语言，而是一种定义了网页内容的含义和结构的标记语言。

`超文本` 是指链接单个网站内或多个网站间的网页的链接。链接是网络的一个基本方面，只要将内容上传到互联网，并将其与他人创建的页面相连接，你就是万维网的积极参与者。

在 `HTML` 中，所有内容都应该包裹在 `标签` 中，`标签` 注明了文本、图片和其他内容，以便浏览器显示，除了首行的解释类型：

<img :src="$withBase('/assets/roadmap/frontend/html-struct.png')" alt="">

## HTML5 的变化

`HTML5` 在 2014 年正式发布，并推荐使用。

它添加了许多新的语法特性。

- 添加了一些新的标签内容：

  - 语义化标签：`section`、`header`、`nav` 等
  - 内容标签：`<video>`、`<audio>`、`canvas` 等
  - 集成了 `SVG` 内容

- 修改了部分标签的定义。如 `<a>`、`<menu>` 等
- 删除了部分标签和属性。如 `<font>`、`<center>` 等

同时，`APIs` 和 `DOM` 已经成为 `HTML5` 的基础部分。

- 新的 API

  - Canvas
  - 定时媒体播放
  - 离线
  - 可编辑内容
  - 拖放
  - 历史
  - MIME 和协议进程时表头登记
  - 微数据
  - 网络信息
  - 网络存储
  - 地理位置
  - IndexedDB

等等。

## 文档解释类型

不同版本的 `HTML` 其解释类型也不尽相同。最新的 `HTML5` 解释类型，写法非常简便：

```html
<!DOCTYPE html>
```

`<!DOCTYPE html>` 是 `WEB` 的文档类型。它不是 HTML 标签，只是告诉浏览器当前 HTML 使用什么版本的文档类型编写的，该如何解析。

之前还有 `HTML4`、`XHTML 1.0` 等。它们的写法就相对比较繁琐了。

- HTML 4

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

- XHTML 1.0

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```

如果没有提供声明标识，那么浏览器就会使用默认方式进行渲染，也就是 `BackCompat` 模式，这样就会造成在不同浏览器下的显示会有所不同。

而提供了声明标识，那么浏览器就会按照 `W3C` 的标准模式进行渲染，这样所有浏览器会得到同样的显示效果。

## 标签

`HTML` 中的所有内容都应该包裹在 `标签` 中。我们可以为标签设置内容、样式等。所有 `标签` 都需要放在 `<` 与 `>` 中，这样的一个标记叫做一个完整的标签。

例如，键入下面内容：

```text
我的猫非常脾气暴躁
```

可以将这行文字封装成一个段落（`<p>`）元素来使其在单独一行呈现：

```html
<p>我的猫非常脾气暴躁</p>
```

<img :src="$withBase('/assets/roadmap/frontend/html-element.png')" alt="">

### 标签属性

还可以为标签添加属性。属性需要放在起始标签中，格式都为 `attr="xxx"`，用空格分开：

<img :src="$withBase('/assets/roadmap/frontend/html-element-attribute.png')" alt="">

通常属性作用于当前标签与内容。不同标签自带不同的默认属性。

### 嵌套标签

标签还可以嵌套：

```html
<p>我的猫咪脾气<strong>暴躁</strong>:)</p>
```

不过嵌套需要确保正确，所有嵌套都应该遵循 `开始` 和 `结束` 标签相连。如下面的例子就会错误渲染：

:::danger 错误示例

```html
<p>我的猫咪脾气<strong>爆:)</p></strong>
```

:::

所有元素内容，可以参考 [Mozilla docs](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element)。

### 自闭合标签

对于无内容的标签，可以通过在 `开始标签` 的最后添加 `/` 的方式来结束，即：

```html
<img />

<div />
<!-- 等于 -->
<div></div>
```

它开始是一些单标签、空标签的结束简便写法。现在很多 `eslint` 中有明确要求。

## 注释

`HTML` 拥有自己的注释风格。与 `标签` 的要求一样，注释也必须在 `<>` 中。它可以是单行，也可以是多行。它的写法如下：

```html
<!-- 这是一段注释 -->

<!-- 这是一个
多行
注释 -->
```

- 注释不能写在 `标签` 内部，

:::danger 错误示例

```html
<p <!-- 不能在这里写注释 -->>xxx</p>
```

:::

- 注释不能嵌套

:::danger 错误示例

```html{3}
<!--
  注释1
  <!-- 注释2 -->
-->
```

:::

## 语义化

语义化就是用正确的标签来做正确的是。它让一个标签具有一定的意义，这种意义是可以让人和机器从字面上就能理解的。HTML 语义化可以让页面内容更加结构化，方便浏览器、搜索引擎进行分析，更有利于 SEO。

语义化类似于给编程语言起变量名，可以一目了然看出这段内容的用处和含义。

例如：

我们可以使用 `h1` 标签来定义一个以及标题：

```html
<h1>This is a top level heading</h1>
```

很简单的定义。但是我们同样可以通过其他标签来模拟实现该内容：

```html
<span style="font-size: 32px; margin: 21px 0; font-weight: bold;">
  This is a top level heading
</span>
```

它们呈现的效果式样的：

<img :src="$withBase('/assets/roadmap/frontend/html-semantics.png')" alt="">

但是这样并不是我们推荐的。HTML 的编写应该着重于填充的数据，而不是表现样式，那是 CSS 的任务。

使用语义化具有如下好处：

- 搜索引擎将其内容视为影响页面搜索排名的重要关键字（[SEO](https://developer.mozilla.org/zh-CN/docs/Glossary/SEO)）
- 屏幕阅读器可以把它作为一个路标，帮助视障用户更高效地浏览页面
- 找到有意义的代码块要比在无穷无尽的 `div` 中搜索语义类或命名空间类要容易的多
- 向开发人员建议要填充的数据类型
- 语义命名反映了恰当的自定义元素/组件命名

随着 web 信息量的扩大，这样的优势/好处越来越突出，语义化可以让机器高效处理，为我们提供更准确的信息。

---

**参考：**

- [语义化元素](https://developer.mozilla.org/zh-CN/docs/Glossary/Semantics#%E8%AF%AD%E4%B9%89%E5%8C%96%E5%85%83%E7%B4%A0)
- [如何理解 web 语义化](https://www.zhihu.com/question/20455165)

## DOM

DOM: `Document Object Module`，即 `文档对象模型`。

一个 DOM 有一个树形结构，标记语言中的每一个元素、属性以及每一段文字都对应着结构树中的一个节点。节点由节点本身和其他 DOM 节点的关系定义，有些节点有父节点，有些节点有兄弟节点。

例如，我们有 html 以下代码：

```html
<p>
  Let's use:
  <span>Cascading</span>
  <span>Style</span>
  <span>Sheets</span>
</p>
```

这段代码转换成 DOM 树之后，就变成了：

```text
P
├─ "Let's use:"
├─ SPAN
|  └─ "Cascading"
├─ SPAN
|  └─ "Style"
└─ SPAN
   └─ "Sheets"
```

## 习惯与最佳实践

良好的习惯会带来无穷的好处，最佳实践会帮助我们养成良好的习惯。

### 始终声明 Doctype

`doctype` 声明应该是编写 `HTML` 文档的第一件事。

### 使用语义化标签

使用语义化标签可以带来更好的使用体验。

### 使用描述性元标记

元标记使页面可以在面对搜索引擎、爬虫等的时候更有意义。

常用 meta 属性：

|    属性    | 值                                                                         | 描述                                       |
| :--------: | -------------------------------------------------------------------------- | ------------------------------------------ |
|    name    | `author` / `description` / `keywords` / `generator` / `revised` / `others` | 指定名称                                   |
|  content   | 任意                                                                       | 信息内容                                   |
| http-equiv | `content-type` / `expire` / `refresh` / `set-cookie`                       | 指定属性，该属性的值会添加到 `HTTP` 请求头 |

例如：

```html
<!DOCTYPE html>
<html>
  <head>
    <title>HTML Best Practices in Website Design</title>
    <meta name="keywords" content="HTML, Website Design, HTML Best Practices" />
    <meta name="description" content="Learn about HTML best practices." />
    <meta name="author" content="John Doe" />
    <meta http-equiv="Content-Type" content="text/html; charset = UTF-8" />
  </head>
  <body>
    <p>Let's learn how to code HTML5!</p>
  </body>
</html>
```

### 良好的布局

一个页面应该具有一定的布局结构，而不仅仅是标题、文本、链接等。

通常来说，它可以是 `<header>`、`<section>`、`<footer>` 组成。大部分内容应该包含在 `<section>` 中，比如标题、图片等。

### 使用外部样式表

尽量避免使用内联样式，大量内联样式会导致文件过大，加载缓慢，代码难以维护等问题。

同样的，避免在 CSS 文件中使用 import 语句，这样会产生额外的服务器请求。

### 验证您的代码

永远要验证代码。验证代码可以尽早识别错误，避免上线后带来的诸多不便和不友好的体验。

最重要的，这是一个**良好的，也是必须的习惯**。

---

参考：

[构建可维护和可扩展网站的 HTML 最佳实践](https://www.wbolt.com/html-best-practices.html)

## SEO

- 高效的使用 H 标签（h1-h6）
- 填写完整的 meta 标签内容
- 使用语义化标签
- 合理命名 css 变量
- 图片添加 alt 属性
