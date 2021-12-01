# 盒模型

盒模型是 `CSS` 中一个非常重要的概念。所有元素都被一个个盒子包裹，理解盒模型的原理，是我们使用 `CSS` 实现准确布局、处理元素排列的关键所在。

## 块级与内联

在 `CSS` 中，常用的有两种盒子，`块级盒子` 与 `内联盒子`。这两种盒子会在页面流和元素之间表现出不同的行为。

### 块级盒子的行为

- 盒子会在内联的方向上扩展并占据父容器在该方向上的所有可用空间，绝大多数情况下，盒子会和父容器一样宽
- 每个盒子都会换行
- 可以块级盒子使用 `width` 与 `height` 属性
- 内边距（`padding`）、外边距（`margin`）以及边框（`border`）会将其他元素从当前盒子周围推开

### 内联盒子的行为

- 盒子不会换行
- `width` 与 `height` 属性不会生效
- 垂直方向的内边距、外边距以及边框都会被应用，但不会推开其他内联盒子
- 水平方向的内边距、外边距以及边框都会被应用，并且会把周围内联盒子推开

### 控制盒子的显示类型

通过 `display` 属性，可以改变盒子的显示类型：

```css
/* 设置为块级 */
display: block;

/* 设置为内联 */
display: inline;
```

## 什么是盒模型

完整的 `CSS` 盒模型应用于块级盒子，内联盒子只使用和模型中定义的部分内容。

在这个模型中，定义了 `margin`、`padding`、`border` 和 `content`。

- `margin`：盒模型最外层区域，设置该盒模型与其他元素之间的空白区域
- `border`：设置盒模型的边框属性
- `padding`：盒模型内容与边框的空白区域
- `content`：用来显示内容，像 `width`、`height` 这样的属性作用于这里

<img :src="$withBase('/assets/roadmap/frontend/box-model.png')" alt="box-model">

### 标准盒模型

一个盒模型的标准宽高，应该是：

> 宽度：`border-width` + `padding-left` + `width` + `padding-right` + `border-width`
>
> 高度：`border-width` + `padding-top` + `height` + `padding-bottom` + `border-width`

`margin` 不计入实际大小。当然它也影响盒子在页面中所占空间，但影响的是外部空间，盒子的大小并不计算在内。

<img :src="$withBase('/assets/roadmap/frontend/standard-box-model.png')" alt="standard-box-model.png">

这是默认模式，如果希望显式指定，可以通过 `box-sizing: content-box;` 来设置。

### 替代盒模型

有时候，希望我们的宽高设置后，就是盒子本身的大小，而不用单独计算边框和边距，这时可以使用 **替代盒模型**。它的宽高就是我们给出的 `width` 和 `height`，而盒模型里面内容的宽高会自动从这个总宽高中减去对应的边框和边距大小。

<img :src="$withBase('/assets/roadmap/frontend/alternate-box-model.png')" alt="alternate-box-model.png">

浏览器默认为标准盒模型，如果我们使用替代盒模型，可以通过 `box-sizing: border-box;` 来设置。

## 外边距

外边距总是在可见部分之外单独计算添加，它用于将当前盒子与其他元素拉开距离。

外边距有四个属性：

```css
margin-top: 10px;
margin-right: 10px;
margin-bottom: 10px;
margin-left: 10px;
```

同时支持简写，可以定义多种方式：

```css
/* 四周外边距都为 10px */
margin: 10px;

/* 上下 10px，左右 20px */
margin: 10px 20px;

/* 上 10px，左右 20px，右 5px */
margin: 10px 20px 5px;

/* 上 10px，右 20px，下 5px，左 15px */
margin: 10px 20px 5px 15px;
```

取值支持：

- `px`：绝对数值单位
- `%`：百分比，占父元素宽高的比例
- `auto`：自动计算，只能设置左右，设置后块级元素会水平居中。（上下无效）

同时取值支持 **负值**，可以减少边距，相当于移动元素位置。

### 外边距折叠

如果两个具有外边距的元素相接，那么它们会合并为一个外边距，即最大的单个外边距大小。

比如一个块级元素具有 `margin-bottom: 50px`，另一个块级元素具有 `margin-top:10px`，那么它们上下相连并不会出现 `60px` 的边距，而是选取两者的最大值，即 `50px` 作为外边距。

::: tip 提示
当设置了外边距之后，并没有得到我们希望的效果，很大概率是因为外边距折叠导致。
:::

触发外边距折叠的情况：

- 相连盒模型都是块级的

  > 只有块级元素才会出现外边距折叠。此外，设置了 `float` 或 `position:absolute` 的元素，也不会出现该情况。

- 同一层相邻元素之间

  > 这是比较常见的情况。除非后一元素使用 `clear-fix` 清除浮动

- 没有内容将父元素和后代元素分开

  > 父元素与后代之间没有任何内容，包括 `border`、`padding`、`content`、`min-height`、`max-height`，导致父元素的 `margin` 与 后代元素的 `margin` 直接相连，就会出现父元素和后代元素外边界重叠。

- 空的块级元素

  > 当一个块元素的上边界与下边界相连，中间没有任何内容，包括 `border`、`padding`、`content`、`min-height`、`max-height`，或内容设定为 `inline` 或加上 `clear-fix` 的时候，会导致上下边界重叠。

## 边框

边框是在边距和填充框之间绘制的。边框有大量属性，主要分为：

- 边框宽度
- 边框样式
- 边框颜色

支持统一设定，也支持单独设定：

```css
/* 统一设置 */
border: 1px solid black;

/* 单独设置一边 */
border-top: 1px dotted;

/* 单独设置宽度、样式、颜色，支持1-4个参数风格 */
border-width: 1px 2px 3px 4px;
border-style: none groove inset double;
border-color: red yellow green blue;

/* 还支持上下左右单独设置每个属性 */
border-left-style: dashed;
border-bottom-color: pink;
```

完整内容，参考 [MDN](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model#%E8%BE%B9%E6%A1%86)

## 内边距

内边距用于将内容与边框分开。与外边距不同，内边距不能出现负值，它必须大于等于 0 的值。

与外边距 `margin` 一样，内边距有四个属性：

```css
padding-top: 10px;
padding-right: 10px;
padding-bottom: 10px;
padding-left: 10px;
```

它同样支持 1-4 个参数方式：

```css
/* 四周内边距都为 10px */
padding: 10px;

/* 上下 10px，左右 20px */
padding: 10px 20px;

/* 上 10px，左右 20px，右 5px */
padding: 10px 20px 5px;

/* 上 10px，右 20px，下 5px，左 15px */
padding: 10px 20px 5px 15px;
```
