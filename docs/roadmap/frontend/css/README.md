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

## 选择器

CSS 有一套完整的选择器规则，可以帮助我们快速获取任意指定元素或元素集。

### 元素选择器

直接写元素名称即可，可以匹配页面中所有对应元素：

```css
h1 {
  color: blue;
}
```

### 类选择器

可以选择包含该 class 名称的元素：

```css
.box {
  color: blue;
}

/* 获取 div 中包含 box 类名的元素 */
div.box {
  color: blue;
}
```

### ID 选择器

一个页面中的任何元素都可以设置 ID 属性，但是每个 ID 都应该是全局唯一的。也就是说，通过 ID 获取到的元素应该是唯一的：

```css
#unique {
  color: blue;
}
```

### 群组选择器

同样的样式，可以通过多个标签共享，它们之间通过 `,` 分开即可，在这个群组列表中，无效的名称会被自动忽略：

```css
h1,
.box,
..box, /* 该名称无效，会被自动忽略 */
#unique {
  color: blue;
}
```

### 属性选择器

根据一个元素上的某个标签属性来选择元素：

```css
/* 是否包含 title 属性 */
a[title] {
  color: blue;
}

/* 给定 title 属性的特定值 */
a[title="jeremyjone"] {
  color: blue;
}
```

那么只有符合条件的 `a` 标签才会生效：

```html
<!-- 会生效 -->
<a href="https://www.jeremyjone.com" title="jeremyjone">JeremyJone.COM</a>

<!-- 并不会生效 -->
<a href="https://www.baidu.com">百度</a>
```

<img :src="$withBase('/assets/roadmap/frontend/css-attr-selector.png')" alt="">

另外，筛选还可以通过类似正则的方式：

| 方法 | 说明                            |
| ---- | ------------------------------- |
| ^=   | 起始等                          |
| \$=  | 结尾等                          |
| \*=  | 任意等                          |
| ~=   | 值等（独立的单词）              |
| \|=  | 起始等，或之后以 `-` 连接的值等 |

### 兄弟选择器

- `+` 选择相邻兄弟（当前元素的后一个）

- `~` 当前层级的所有兄弟元素

```css
h1 + p {
  color: blue;
}

h1 ~ p {
  color: blue;
}
```

下例中，`h1 + p` 会选择第三行，而 `h1 ~ p` 则会选择第一行和第三行：

```html
<p>This is a paragraph before h1</p>
<h1>This is a top level heading</h1>
<p>This is a paragraph after h1</p>
<div>
  <p>This is a paragraph in div</p>
</div>
```

### 子代选择器

`>` 选择当前层级的下一层元素

```css
article > p {
  color: blue;
}
```

下例中，只会选择第二行：

```html{2}
<article>
  <p>This is a paragraph in article</p>
  <div>
    <p>This is a paragraph in div</p>
  </div>
</article>
```

### 后代选择器

选择所有后代，使用 `空格` 可以实现：

```css
article p {
  color: blue;
}
```

下例中，会选择第二行和第四行：

```html{2,4}
<article>
  <p>This is a paragraph in article</p>
  <div>
    <p>This is a paragraph in div</p>
  </div>
</article>
```

### 伪类/伪元素选择器

伪类通常表示一个元素的特定状态，例如 `:hover` 伪类会在鼠标指针悬浮到元素上时使用：

```css
a:hover {
  color: blue;
}
```

- 链接伪类

| 属性     | 描述                       |
| -------- | -------------------------- |
| :link    | 匹配超链接未被访问时的状态 |
| :visited | 匹配超链接未被访问时的状态 |

- 动态伪类

| 属性    | 描述                     |
| ------- | ------------------------ |
| :hover  | 匹配鼠标悬停时的状态     |
| :active | 匹配元素被激活时的状态   |
| :focus  | 匹配元素获取焦点时的状态 |

- 表单伪类

| 属性      | 描述                   |
| --------- | ---------------------- |
| :checked  | 匹配所有选中的表单元素 |
| :disabled | 匹配所有禁用的表单元素 |
| :enabled  | 匹配所有启用的表单元素 |

- 伪元素

| 属性                 | 描述                                                                    |
| -------------------- | ----------------------------------------------------------------------- |
| :root                | 选择文档的根元素                                                        |
| :before              | 在当前元素之前插入内容（需要使用 `content` 属性来指定要插入的内容）     |
| :after               | 在当前元素之后插入内容（需要使用 `content` 属性来指定要插入的内容）     |
| :empty               | 匹配所有没有子元素的元素                                                |
| :invalid             | 匹配所有无效元素                                                        |
| :not(selector)       | 匹配当前元素以外的所有元素                                              |
| :first-of-type       | 匹配元素其父级是特定类型的第一个子元素。等同于 `:nth-of-type(1)`        |
| :last-of-type        | 匹配元素其父级是特定类型的最后一个子元素。等同于 `:nth-last-of-type(1)` |
| :in-range            | 匹配元素指定范围内的值                                                  |
| :first-child         | 匹配当前元素的第一个子元素                                              |
| :last-child          | 匹配当前元素的最后一个子元素                                            |
| :nth-child(n)        | 匹配当前元素的指定序列子元素                                            |
| :nth-last-child(n)   | 匹配当前元素的指定倒序序列子元素                                        |
| :nth-of-type(n)      | 匹配元素其父级是特定类型的第 n 个子元素                                 |
| :nth-last-of-type(n) | 匹配元素其父级是特定类型的倒序第 n 个子元素                             |
| :only-of-type        | 匹配所有仅有一个子元素为特定元素的元素                                  |
| :only-child          | 匹配属于父元素中唯一子元素的元素                                        |
| :first-letter        | 匹配当前元素的第一个字母（仅适用于块级元素中）                          |
| :first-line          | 匹配当前元素的第一行（仅适用于块级元素中）                              |

### 选择器的权重

选择器是有权重的，根据权重，可以计算出使用的优先级，权值越大，优先级越高：

| 选择器        | 权值 |
| ------------- | ---- |
| 元素选择器    | 1    |
| 类/伪类选择器 | 10   |
| ID 选择器     | 100  |
| 内联方式      | 1000 |

权值的计算：所有选择器权值相加。

---

参考 [MDN](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors)。

## 定位

## 布局

### float

### flex

### display

### box

## 响应式与媒体查询

## 高级应用
