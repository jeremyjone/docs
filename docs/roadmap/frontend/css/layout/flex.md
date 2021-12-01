# 弹性布局（Flexbox）

弹性盒子布局是专门用于创建横向/纵向的一维页面布局。虽然它是一维页面布局，但是通过嵌套，可以在两个维度构建更加丰富的布局内容。

要使用弹性盒子，只需要在父级元素中设置 `display:flex` 即可，所有子元素都将按照 `flex` 进行布局。

该方法会将该父级容器变为块级元素，其内部变为 `flex` 布局。同样的，我们还可以设置 `display:inline-flex` 将其设置为行内块元素。

## 主轴与交叉轴

### 主轴

要想理解弹性盒子，必须要理解主轴与副轴的概念。前面已经说到，弹性盒子是在一维页面进行布局，那么一维上就是一条线，也就是主轴。弹性盒子内的所有元素都会沿着主轴进行排列，它确定了内部元素如何在 `flex` 容器中布局。

默认情况下，主轴是水平方向从左向右延伸的。

通过 `flex-direction` 可以修改主轴方向：

```css
/* 默认值，水平方向 */
flex-direction: row;

/* 垂直方向 */
flex-direction: column;

/* 水平反向 */
flex-direction: row-reverse;

/* 垂直反向 */
flex-direction: column-reverse;
```

<img :src="$withBase('/assets/roadmap/frontend/css/flex-direction-row.png')" alt="flex-direction-row.png">

<img :src="$withBase('/assets/roadmap/frontend/css/flex-direction-column.png')" alt="flex-direction-column.png">

::: warning 注意
`row` 和 `row-reverse` 的方向受 `dir` 属性影响。如果是 `ltr`，则 `row` 表示从左至右，`row-reverse` 表示从右至左。如果 `dir` 属性为 `rtl`，则相反。
:::

### 交叉轴

相应的，垂直于主轴方向的轴，就是交叉轴。虽然弹性布局是一维层面的，但是后面我们会遇到有用到副轴的情况。它与主轴方向的逻辑一样，也是可以反转的。默认同样是从左至右、或从上至下。

<img :src="$withBase('/assets/roadmap/frontend/css/cross-direction-row.png')" alt="cross-direction-row.png">

<img :src="$withBase('/assets/roadmap/frontend/css/cross-direction-column.png')" alt="cross-direction-column.png">

理解主轴和交叉轴的概念对于对齐 `flexbox` 里面的元素是很重要的；`flexbox` 的特性是沿着主轴或者交叉轴对齐之中的元素。

## 对齐方式

主轴和交叉轴具有方向性，这类似于我们学过的数学坐标系，假设 `x` 轴为主轴，那么 `y` 轴就是交叉轴。箭头方向就表示为对齐的方式。

<img :src="$withBase('/assets/roadmap/frontend/css/flex-direction-align.png')" alt="flex-direction-align">

这是根据现代书写习惯和阅读方式定义的。假设我们正在使用英文或者中文，那么很自然，我们习惯从左上到右下：

<img :src="$withBase('/assets/roadmap/frontend/css/english-align.png')" alt="english-align">

而如果我们正在阅读阿拉伯文，那么就会从右上到左下：

<img :src="$withBase('/assets/roadmap/frontend/css/arab-align.png')" alt="arab-align">

交叉轴在上述情况下始终都是自上而下的。

为了避免用词上的误会，所以在弹性布局中，对于主轴和交叉轴的起始和终止端，我们不用左右和上下，而是采用 `起始端` 和 `终止端`，这样可以更好的描述轴的方向性。

所以在上面的实际用法中，`row-reverse`、`column-reverse` 是将起始端和终止端互换位置。

## 堆叠方式

一般来说，`flex` 可以将子元素都放在主轴上，哪怕空间不够，它会将子元素压缩，这也是为什么叫 **弹性盒子** 的原因之一。但很多时候这并不符合设计要求，随着视口尺寸不一，这样的显示效果会有很大差别。

### flex-wrap

所以 `flex` 也支持溢出换行。它默认是不换行的，如果我们设置了换行，那么它不会压缩子元素，而是遇到溢出直接换行。

```css
/* 默认值 */
flex-wrap: nowrap;

/* 设置换行 */
flex-wrap: wrap;

/* 还可以设置反向换行 */
flex-wrap: wrap-reverse;
```

### flex-flow

`flex-flow` 是 `flex-direction` 与 `flex-wrap` 的组合简写。

```css
/* 默认值 */
flex-flow: row nowrap;

/* 横向主轴，换行 */
flex-flow: row wrap;

/* 纵向反向主轴，反向换行 */
flex-flow: column-reverse wrap-reverse;
```

## 元素属性

上面说的是 `flex` 容器的内容。下面将介绍 `flex` 容器中的元素的相关内容。

### flex-basis

`flex-basis` 属性指定元素在主轴方向上的初始大小。

整体来说，`min-width`、`max-width`、`min-height`、`max-height`、 这些属性优先级高于 `flex-basis`，而 `flex-basis` 的优先级（除设置 `auto` 外）高于 `width`、`height`。

```css
/* 默认值，以内容大小显示 */
/* 只要父元素设置为 flex，如果没有给定宽高或者 flex-basis，那么就会自动分配大小充分展示元素的内容 */
flex-basis: content;

/* 指定<'width'> */
flex-basis: 10em;
flex-basis: 3px;
flex-basis: auto; /* auto 表示参照 width、height 属性 */

/* 固有的尺寸关键词 */
flex-basis: fill;
flex-basis: max-content;
flex-basis: min-content;
flex-basis: fit-content;

/* 全局数值 */
flex-basis: inherit;
flex-basis: initial;
flex-basis: unset;
```

### flex-grow

`flex-grow` 若被赋一个正整数，那么元素会以 `flex-basis` 为基础，沿主轴方向增长尺寸，占据此方向上的可用空间。如果有多个元素增长，那么它们将各自占据一部分可用空间。

- `flex` 容器大小减去所有元素的大小，就是可用空间
- 数值越大，增长越大，小于 1 的小数反而是会变小
- 如果所有元素的 `flex-grow` 系数相同，那么它们将平均分配可用空间

```css
/* 默认值，不增长 */
flex-grow: 0;

/* 任意的正数 <number> 值，会按照比例增长。负数无效 */
flex-grow: 3;
flex-grow: 0.6;

/* 全局值 */
flex-grow: inherit;
flex-grow: initial;
flex-grow: revert;
flex-grow: unset;
```

计算方法：

新的元素宽度 = 自身 `flex-grow` 系数 × (容器可用空间 / 所有元素 `flex-grow` 之和)

### flex-shrink

`flex-shrink` 可以处理元素收缩，它与 `flex-grow` 正好相反。当然，这仅在元素默认宽度之和大于容器的时候才会收缩。

```css
/* 默认值，不收缩 */
flex-shrink: 1;

/* 任意的整数 <number> 值，会按照比例缩小。负数无效 */
flex-shrink: 2;
flex-shrink: 0.6;

/* 全局值 */
flex-shrink: inherit;
flex-shrink: initial;
flex-shrink: unset;
```

计算方法：

新的元素宽度 = (1 - 自身 `flex-shrink` 系数 ÷ 所有元素 `flex-shrink` 之和) × 原本自身元素宽度

### flex 属性简写

上面的三个属性，可以通过 `flex` 进行简写。按照：

```css
flex: flex-grow flex-shrink flex-basis;
```

的格式顺序依次填入具体内容即可。

大多数情况下，它们还可以：

```css
/* 默认值，相当于 flex: 0 1 auto */
flex: initial;

/* 等同于 flex:1 1 auto。元素在需要的时候既可以拉伸，也可以收缩 */
flex: auto;

/* 等同于 flex:0 0 auto。元素既不能拉伸，也不能收缩，但会根据 flex-basis:auto 布局 */
flex: none;

/* 等同于 flex:number 1 0。只给 flex-grow 的值，元素可以在 flex-basis 为 0 情况下进行拉伸。 */
flex: <positive-number>;
```

::: tip 练习

尝试修改 `flex` 属性，并修改容器宽度或者增减 `div`：

<iframe height="300" style="width: 100%;" scrolling="no" title="flex attr" src="https://codepen.io/jeremyjone/embed/RwLNVoP?default-tab=css%2Cresult&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/jeremyjone/pen/RwLNVoP">
  flex attr</a> by jeremyjone (<a href="https://codepen.io/jeremyjone">@jeremyjone</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

:::

### 控制 flex 子元素在主轴上的比例

通过上面三个属性可以随心控制子元素的比例。为了更好的深入理解，推荐阅读一下 MDN 文章：

[控制 flex 子元素在主轴上的比例](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)

### order

`order` 属性规定了元素在布局中的顺序。默认都是 `0`，它们按照默认顺序排列，一旦元素给出了 `order` 属性，那么会按照从小到大的顺序进行排列。

```css
order: -10;
order: 1;
order: 10;
```

## 元素对齐

元素对齐可以通过 `flex` 容器统一设定，也可以通过 `flex` 元素单独设定。

### justify-content

`justify-content` 属性作用在 `flex` 容器上，用来对齐主轴方向上的元素。

```css
/* 默认值。对齐到起始端 */
justify-content: flex-start;

/* 对齐到终止端 */
justify-content: flex-end;
/* 居中排列 */
justify-content: center;
/* 对齐到起始端，类似 flex-start */
justify-content: start;
/* 对齐到终止端，类似 flex-end */
justify-content: end;
/* 对齐到左侧。不随主轴方向变换而变化 */
justify-content: left;
/* 对齐到右侧。不随主轴方向变换而变化 */
justify-content: right;

/* 均匀排列每个元素，相邻两行间距相等。首个元素放置于起点，末尾元素放置于终点 */
justify-content: space-between;
/* 均匀排列每个元素。每个元素周围分配相同的空间 */
justify-content: space-around;
/* 均匀排列每个元素。每个元素之间的间隔相等 */
justify-content: space-evenly;
/* 均匀排列每个元素。'auto'-sized 的元素会被拉伸以适应容器的大小 */
justify-content: stretch;
```

::: tip 练习

尝试修改 `justify-content` 属性：

<iframe height="300" style="width: 100%;" scrolling="no" title="justify-content" src="https://codepen.io/jeremyjone/embed/poWvPgd?default-tab=css%2Cresult&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/jeremyjone/pen/poWvPgd">
  justify-content</a> by jeremyjone (<a href="https://codepen.io/jeremyjone">@jeremyjone</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
:::

### align-items

`align-items` 属性作用在 `flex` 容器上，用来对齐交叉轴方向上的元素。

```css
/* 默认值。自动拉伸元素与容器对齐 */
align-items: stretch;

align-items: normal;

/* 元素在侧轴居中。如果元素在侧轴上的高度高于其容器，那么在两个方向上溢出距离相同。 */
align-items: center;
/* 元素向交叉轴起点对齐 */
align-items: flex-start;
/* 元素向交叉轴终点对齐 */
align-items: flex-end;
/* 元素向交叉轴起点对齐。类似 flex-start */
align-items: start;
/* 元素向交叉轴终点对齐。类似 flex-end */
align-items: end;
/* 元素向交叉轴起点对齐。类似 flex-start */
align-items: self-start;
/* 元素向交叉轴终点对齐。类似 flex-end */
align-items: self-end;
```

重点理解一下 `normal` 这个值。该值的效果取决于我们处在什么布局模式中：

- 在绝对定位的布局中，对于被替代的绝对定位盒子，这个效果和 `start` 的效果的一样；对于其他所有绝对定位的盒子，这个效果和 `stretch` 的效果一样。
- 在绝对定位布局的静态位置上，效果和 `stretch` 一样。
- 对于那些弹性项目而言，效果和 `stretch` 一样。
- 对于那些网格项目而言，效果和 `stretch` 一样，除了有部分比例或者一个固定大小的盒子的效果像 `start`。
- 这个属性不适用于会计盒子和表格。

另外，如果子元素设置了高度，`stretch` 是不会拉伸子元素的。

::: tip 练习

尝试修改 `align-items` 属性：

<iframe height="300" style="width: 100%;" scrolling="no" title="align-items" src="https://codepen.io/jeremyjone/embed/NWaPpBx?default-tab=css%2Cresult&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/jeremyjone/pen/NWaPpBx">
  Untitled</a> by jeremyjone (<a href="https://codepen.io/jeremyjone">@jeremyjone</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
:::

### align-content

`align-content` 属性作用在 `flex` 容器上，用来对齐交叉轴方向上的**多行**元素。

需要理解一下**多行**，这里的多行是指针对 `flex-wrap:wrap;` 状态下的换行。

```css
/* 对齐到起始端，每行紧邻 */
align-content: flex-start;
/* 对齐到终止端，每行紧邻 */
align-content: flex-end;
/* 居中排列，每行紧邻 */
align-content: center;
/* 对齐到起始端，类似 flex-start */
align-content: start;
/* 对齐到终止端，类似 flex-end */
align-content: end;

/* 均匀排列每个元素，相邻两行间距相等。首个元素放置于起点，末尾元素放置于终点 */
align-content: space-between;
/* 均匀排列每个元素。每个元素周围分配相同的空间 */
align-content: space-around;
/* 均匀排列每个元素。每个元素之间的间隔相等 */
align-content: space-evenly;
/* 均匀排列每个元素。'auto'-sized 的元素会被拉伸以适应容器的大小 */
align-content: stretch;
```

::: tip 练习

尝试修改 `align-content` 属性：

<iframe height="300" style="width: 100%;" scrolling="no" title="align-content" src="https://codepen.io/jeremyjone/embed/abLzWoa?default-tab=css%2Cresult&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/jeremyjone/pen/abLzWoa">
  align-content</a> by jeremyjone (<a href="https://codepen.io/jeremyjone">@jeremyjone</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

:::

### place-content

`place-content` 是 `align-content`（第一个值）与 `justify-content`（第二个值）的简写，例如：

```css
place-content: center start;
place-content: start center;
place-content: space-around center;
place-content: end space-between;
place-content: space-evenly stretch;
```

### align-self

`align-items` 属性作用在 `flex` 内部元素上，用来单独设置元素在交叉轴方向上的对齐方式。

其值与 `align-items` 也一致。而 `align-items` 也相当于将每一个元素的 `align-self` 给统一赋值。

::: tip 练习

尝试修改每一个子元素的 `align-self` 属性：

<iframe height="300" style="width: 100%;" scrolling="no" title="align-self" src="https://codepen.io/jeremyjone/embed/qBPEmxe?default-tab=css%2Cresult&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/jeremyjone/pen/qBPEmxe">
  align-self</a> by jeremyjone (<a href="https://codepen.io/jeremyjone">@jeremyjone</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

:::
