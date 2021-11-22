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
