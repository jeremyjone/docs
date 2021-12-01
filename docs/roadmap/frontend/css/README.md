# CSS 基础

## 什么是 CSS

CSS，`Cascading Style Sheets`，即 `层叠样式表`。它是一种样式表语言，用来描述 `HTML` 或 `XML` 文档的呈现。`CSS` 描述了在屏幕、纸质、音频等其他媒体上的元素应该如何被渲染的问题。

CSS 是网络的核心语言之一。它可以通过 `*.css` 文件保存，同时控制多个网页的布局。

## CSS 的工作原理

- 浏览器载入 HTML 文件后，会转化为成一个 [DOM](../html/#dom)
- 之后浏览器会处理资源文件，包括图片、视频、CSS 文件等
- 获取到 CSS 文件，浏览器开始解析，并根据选择器类型的不同，将它们分别放入不同的容器中。浏览器会按照不同的规则将样式应用在 DOM 节点中，并为其添加节点依赖的样式（CSSOM）
- 全部应用完成之后，会按照结果进行布局渲染，并展示在页面上

<img :src="$withBase('/assets/roadmap/frontend/css-principle.svg')" alt="">

### 应用你的 CSS

应用 CSS，可以有三种选择：

- 外部样式表

外部样式表就是将所有 CSS 样式保存在单独的 `*.css` 文件中，通过 `<link>` 标签引入并使用：

```html{6}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>My CSS experiment</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is my first CSS example</p>
  </body>
</html>
```

该引用可以是本地、也可以是远程路径。

- 内部样式表

内部样式表是指不必使用外部样式表，而是将完整的 CSS 样式放在 HTML 文件中：

```html{6-16}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>My CSS experiment</title>
    <style>
      h1 {
        color: blue;
        background-color: yellow;
        border: 1px solid black;
      }

      p {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is my first CSS example</p>
  </body>
</html>
```

该方法比外部样式表更加低效，因为所有样式仅仅针对当前 HTML 文档有效，这意味着可能存在大量重复的样式，并且在修改时需要按照文件分别修改。

- 内联样式表

内联样式表存在于 HTML 元素中，它是 `style` 属性的值，其特点是只影响当前元素：

```html{8,11}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>My CSS experiment</title>
  </head>
  <body>
    <h1 style="color: blue;background-color: yellow;border: 1px solid black;">
      Hello World!
    </h1>
    <p style="color:red;">This is my first CSS example</p>
  </body>
</html>
```

::: warning 注意
除非必须针对当前元素，否则不要使用内联样式表。
:::

### 覆盖 CSS 样式

因为 CSS 样式是允许继承，同时允许层叠，如果 CSS 样式遇到重复，则会按照以下规则进行覆盖：

- 由于继承而发生的样式冲突，最近祖先优先
- 当前元素的样式与继承样式冲突，使用当前元素的样式
- 相同元素的外联样式表，选择器的权重高者优先
- 内联样式的优先级高于其他样式表
- 含 `! important` 的样式不会被覆盖

更多具体内容，可以参考 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity)。
