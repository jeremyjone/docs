# 栅格布局（Grid）

与弹性布局不同，栅格布局是一个**二维布局系统**。它可以用于布局页面中主要的区域以及小型组件。

栅格布局是一组水平和垂直的 **栅格线** 相交，划分了 **行** 和 **列** 的轨道。

<img :src="$withBase('/assets/roadmap/frontend/css/grid.png')" alt="grid">

栅格布局系统中的每一个栅格元素都可以通过行号、列号进行精准定位，同时还可以控制未给出明确位置的元素。

要是用栅格布局，只需要在父级容器元素中设置 `display:grid` 即可，所有子元素都将按照 `grid` 进行布局。同样的，我们还可以设置 `display: inline-grid` 来创建栅格布局，并将内部子元素设置为行内块。

## 轨道

通过 `grid-template-rows` 与 `grid-template-columns` 可以定义栅格布局中的行和列。

在一个方向上的所有栅格内容的集合，都可以称为一个**轨道**，也就是说，每一行或每一列都叫做一个轨道。

### 轨道的尺寸

它可以使用多种单位：

- 固定尺寸：比如 100px
- 百分比：比如 20%
- `auto`：自动填充
- `fr`：它表示剩余可用空间的 **等分份额**。`2fr` 表示占两份，而 `1fr` 则表示占用一份。
- `repeat(number, width)`：表示按照 `width` 重复 `number` 次。
  - `repeat(3, 1fr)`：表示按照 `1fr` 重复三次
  - `repeat(6, 100px)`：表示创建 6 个 `100px` 的轨道
  - `repeat(5, 1fr 2fr)`：表示创建 10 个轨道，每次创建一个 `1fr` 的轨道，后跟一个 `2fr` 的轨道，创建 5 次，共 10 个轨道

写几个就会生成几个轨道。

::: tip 练习

尝试修改 `grid-template-rows`、`grid-template-columns` 这两个属性：

<iframe height="300" style="width: 100%;" scrolling="no" title="grid-rows-columns" src="https://codepen.io/jeremyjone/embed/YzrPQba?default-tab=css%2Cresult&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/jeremyjone/pen/YzrPQba">
  grid-rows-columns</a> by jeremyjone (<a href="https://codepen.io/jeremyjone">@jeremyjone</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

:::

### grid-template

除了分别定义，上面两个属性也支持简写：

```css
/* `grid-template-rows 与 grid-template-columns 的简写 */
grid-template: repeat(3, 100px) / repeat(2, 200px);
```

结果会生成三行两列的布局。

> 注意，该属性其实还包含 [grid-template-area](#命名区域) 属性，是三个属性的简写。

### 隐式轨道

通过上面方法定义轨道的宽高，这是显式轨道。但是当我们添加的元素超过了显式轨道的区域，系统会默认添加更多的轨道网格来填充内容，此时系统将按照内容的宽高来自动设置隐式轨道的大小。

假设我们现在有 8 个元素：

```html
<div id="container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
</div>
```

但是我们现在只有三行两列，共 6 个元素内容的栅格布局：

```css
grid-template: repeat(3, 100px) / repeat(2, 200px);
```

那么我们得到的将是：

<img :src="$withBase('/assets/roadmap/frontend/css/grid-element-more-than-container.png')" alt="grid-element-more-than-container">

很明显，最下面两个不符合我们的预期。它是系统自动创建的内容，并且按照内容大小来填充的宽高。这个最下面的行，就是 **隐式轨道**。

我们需要设定或者改变隐式轨道的属性，可以通过 `grid-auto-rows` 和 `grid-auto-columns` 来定义：

```css
grid-auto-rows: 100px;

grid-auto-columns: 200px;
```

这样可以确保隐式轨道的轨道高度 100px，轨道宽度 200px。

还可以传入一个轨道列表，这样就会让轨道的宽高按照列表重复设置：

```css
/* 第一行 40px， 第二行 80px， 第三行 40px， 第四行 80px，以此类推 */
grid-auto-rows: 40px 80px;
```

<img :src="$withBase('/assets/roadmap/frontend/css/grid-auto-rows-list.png')" alt="grid-auto-rows-list">

::: tip 练习

尝试打开 `grid-auto-rows` 的注释来查看变化：

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/jeremyjone/embed/ZEXGGLr?default-tab=css%2Cresult&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/jeremyjone/pen/ZEXGGLr">
  Untitled</a> by jeremyjone (<a href="https://codepen.io/jeremyjone">@jeremyjone</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

:::

### minmax

通过 `minmax()` 方法来设置取值区间，它可以应用于上述所有属性中：

```css
/* 最小 100px，最大则可以按照尺寸自动变换 */
grid-auto-rows: minmax(100px, auto);

/* 最小 100px，最大按照均分 */
grid-template-rows: minmax(100px, 1fr);
```

## 栅格间距

通过 `grid-column-gap` 和 `grid-row-gap` 可以设置轨道间的间距。

支持各种单位。

### grid-column-gap

设置列间距。`grid-column-gap`，一般简写成 `column-gap`：

```css
grid-column-gap: 10px;
column-gap: 10px;
```

### grid-row-gap

设置行间距。`grid-row-gap` 一般简写成 `row-gap`：

```css
grid-row-gap: 1em;
row-gap: 1em;
```

### grid-gap

`grid-row-gap` 与 `grid-column-gap` 的简写，同样一般简写成 `gap`：

```css
/* 行、列间距统一设置 */
grid-gap: 1em;
gap: 1em;

/* 分别设置行、列 */
grid-gap: 10px 1em;
gap: 10px 1em;

/* 还可以使用 calc */
gap: calc(10% + 20px);
gap: calc(20px + 10%) calc(10% - 5px);
```

## 栅格线

行和列都是内容区域，划分内容区域的线，就是栅格线。假如我们有一个两行三列的栅格布局，那么它的栅格线则为：`三条横向栅格线` 和 `四条纵向栅格线`。

栅格线具有编号，以起始点（这个与弹性布局起始线的原理一样，按照书写习惯，从左向右书写文字，则以左为起始点，反之则为右侧）为 `1`。

### 指定位置

有了这样的栅格线编号，我们可以随意将内容放置到指定栅格中。

现在有一个 `3 × 3` 的栅格布局：

```css
grid-template: repeat(3, 1fr) / repeat(3, 1fr);
```

但我们只有一个元素，那么它默认应该放在 `(1,1)` 这个坐标格中：

<img :src="$withBase('/assets/roadmap/frontend/css/grid-default-position.png')" alt="grid-default-position">

现在我们想让它居中，也就是放到 `(2,2)` 坐标格中，那么需要给这个元素添加：

```css
grid-row-start: 2;
grid-column-start: 2;
```

<img :src="$withBase('/assets/roadmap/frontend/css/grid-assigned-position.png')" alt="grid-assigned-position">

### 栅格跨行、列

内容不仅可以指定位置，还可以跨行、列，通过 `grid-column-start`、`grid-column-end`、`grid-row-start`、`grid-row-end` 属性，分别表示起始列、终止列、起始行、终止行。

```css
div1 {
  /* 横向跨域 1-4 栅格线 */
  grid-column-start: 1;
  grid-column-end: 4;

  /* 纵向跨越 1-3 栅格线 */
  grid-row-start: 1;
  grid-row-end: 3;
}

div2 {
  /* 从第一列起始 */
  grid-column-start: 1;

  /* 纵向跨越 3-5 栅格线 */
  grid-row-start: 3;
  grid-row-end: 5;
}

div3 {
  /* 横向跨越 3-4 列 */
  grid-column-start: 2;
  grid-column-end: 4;
}
```

如上，元素通过改变栅格线的起止，完成了跨行、跨列的操作。

<img :src="$withBase('/assets/roadmap/frontend/css/grid-over-span.png')" alt="grid-over-span">

::: tip 练习

尝试修改上述四个属性值：

<iframe height="300" style="width: 100%;" scrolling="no" title="grid-line" src="https://codepen.io/jeremyjone/embed/KKXwvxN?default-tab=css%2Cresult&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/jeremyjone/pen/KKXwvxN">
  grid-line</a> by jeremyjone (<a href="https://codepen.io/jeremyjone">@jeremyjone</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

:::

### grid-column 与 grid-row

`grid-column` 与 `grid-row` 是 上面四个属性的简写：

```css
/* 横向跨 1-2 栅格线 */
grid-column: 1 / 2;

/* 纵向跨 1-4 栅格线 */
grid-row: 1 / 4;

/* 仅在第二列 */
grid-column: 2;

/* 仅在第一行 */
grid-row: 1;
```

### 反向计数

默认序号都是 `1` 起始，那么从末尾端作为起始的话，可以使用 `-1` 来表示。这样一来，我们跨越整个栅格系统的话，就不必数整个栅格系统有多少栅格线，而是通过：

```css
grid-column: 1 / -1;
```

就可以完成。

而相应的，倒数第二根栅格线就是 `-2`，以此类推，直到最后一根栅格线。

### span 关键字

除了上面一根一根数栅格线的方式，一般情况下，我们可以通过 `span` 关键字来跨越指定数量的栅格：

```css
/* 从第一行开始，跨越两个栅格线 */
grid-row: 1 / span 2;

/* 从第二列开始，跨越四个栅格线 */
grid-column: 2 / span 4;
```

这样的方式更有利于我们进行更加复杂的布局定义。

### 栅格线的命名

定义栅格线的名称，最基本的方式时在定义栅格宽高的时候进行定义：

```css
grid-template-columns: [main-start] 1fr [content-start] 1fr [content-end] 1fr [main-end];
grid-template-rows: [main-start] 100px [content-start] 100px [content-end] 100px [main-end];
```

然后我们就可以使用它了，不再需要之前的栅格线序号，而是直接调用名称：

```css
grid-row-start: main-start;
grid-column-end: content-end;
```

名称可以随便起，当然也可以只针对关键线起名。只要符合[规范](https://drafts.csswg.org/css-values-4/#custom-idents)，就是有效名称。

#### 为栅格线定义多个名称

我们还可以为一条线定义多个名称：

```css
grid-template-columns: [main-start header-start] 1fr [header-end content-start] 1fr [content-end footer-start] 1fr [footer-end main-end];
grid-template-rows: [main-start header-start] 100px [header-end content-start] 100px [content-end footer-start] 100px [footer-end main-end];
```

> 多个名称，我们可以随意使用任意一个，因为它们本身指向的就是同一条栅格线。

如果我们按照上面的方式，在一个区域的两边都使用了同一个 **词汇** 并且具有 `-start` 和 `-end` 后缀，那么系统会隐式地为我们将该区域命名，名称则是该词汇。比如：`content-start` 与 `content-end`，那么该区域就被命名为 `content`。这样我们就可以快速使用 [命名区域](#命名区域) 放置元素了。

#### 通过 repeat 添加名称

上面一个一个设置显得过于繁琐，我们可以通过 `repeat(3, [name] 1fr)` 的方式来快速命名。

但是需要注意：

- 生成的命名线，名称是一样的，需要通过 `[name] [n]` 的方式获取

  ```css
  grid-column: col-start / col-start 5;
  ```

- 可以生成多个名称

  ```css
  <!--设置单独名称-->grid-template-columns: repeat(4, [col1] 1fr [col2] 3fr);

  <!--前后都设置名称-->grid-template-columns: repeat(
    4,
    [col-start] 1fr [col-end]
  );
  ```

### 控制层叠顺序

栅格内容可以通过栅格线重叠，默认后面的内容可以覆盖到前面的内容。但我们可以通过 `z-index` 来控制层叠顺序。

::: tip 练习

尝试取消已注释的 `z-index` 属性：

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/jeremyjone/embed/oNGXXrX?default-tab=css%2Cresult&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/jeremyjone/pen/oNGXXrX">
  Untitled</a> by jeremyjone (<a href="https://codepen.io/jeremyjone">@jeremyjone</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

:::

## 栅格区域

通常我们都是按照栅格线来定位，但是我们同样可以通过栅格本身进行定位。

### grid-area

该属性作用域栅格内部元素，用于确定该元素应当放置在哪一个栅格中。

它有多种使用用法：

#### 根据栅格线来确定一个区域

```css
/* 横向跨 1-2 栅格线，纵向跨 1-4 栅格线 */
grid-area: 1 / 1 / 4 / 2;
```

这个数值看起来有点奇怪，它的顺序为：

- `grid-row-start`
- `grid-column-start`
- `grid-row-end`
- `grid-column-end`

#### 通过命名来确定一个区域

前面已经知道通过栅格线来隐式命名一个区域（[为栅格线定义多个名称](#为栅格线定义多个名称)），接下来还将学习到如何直接[对区域进行命名](#命名区域)。那么直接指定区域就可以将元素放在指定栅格中。

```css
grid-area: content;
```

### 命名区域

通过 `grid-template-areas` 可以命名整个栅格内容。通过栅格名称可以快速将指定内容放置在栅格中。

> 栅格命名必须是 **矩形** 的，否则无效。

```css
#container {
  display: grid;
  border: 2px solid purple;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b b" "a c c" "a d e";
}

#container > div {
  border: 1px solid grey;
  text-align: center;
  background-clip: content-box;
  padding: 4px;
  font-size: 20px;
  background-color: greenyellow;
}

#container > div:nth-child(1) {
  grid-area: a;
}

#container > div:nth-child(2) {
  grid-area: b;
}

#container > div:nth-child(3) {
  grid-area: c;
}
```

那么第一个元素将占满 `a` 区域，也就是第一列，第二个元素将占满 `b` 区域，第三个元素将占满 `c` 区域，而剩下的将依次排列：

<img :src="$withBase('/assets/roadmap/frontend/css/grid-template-areas.png')" alt="grid-template-areas">

与 [栅格线的多命名](#为栅格线定义多个名称) 类似，当我们为一个区域命名，那么它四周的栅格线同样也就有了名称，比如上面的例子：

<img :src="$withBase('/assets/roadmap/frontend/css/grid-template-areas-line-name.png')" alt="grid-template-areas-line-name">

它为每一个区域的每一个边都进行了命名，我们可以使用任意一个名称都可以。比如我们通过栅格线名称让 4 号元素和 5 号元素进行对调：

```css
#container > div:nth-child(4) {
  grid-area: d-start / e-start / d-end / e-end;
}

#container > div:nth-child(5) {
  grid-area: e-start / d-start / e-end / d-end;
}
```

<img :src="$withBase('/assets/roadmap/frontend/css/grid-template-areas-exchange.png')" alt="grid-template-areas-exchange">

#### 栅格不命名占位符

有时候，我们只需要给关键的栅格区域命名，其他区域并不需要命名，那么我们可以通过 `.` 来忽略它：

```css
grid-template-areas:
  "header   header   header"
  "sidebar  content  content"
  ".        footer   footer";
```

这样就得到一个类似这样的区域：

<img :src="$withBase('/assets/roadmap/frontend/css/grid-template-areas-no-name.png')" alt="grid-template-areas-no-name">

#### 区域命名使用小技巧

因为元素是通过 `grid-area: [name]` 放到指定栅格中的，所以只要名称不变，元素就一直跟着栅格位置走。

这样一来，我们只需要通过调整布局，就可以调整元素显示的位置。

## 定位流向

默认情况下，所有元素都会把自己摆放到网格中，每个栅格放一个元素。默认流向是按行排列，也就是横向排列，当第一行填满，会自动折行继续排列，直到占满所有网格，此时如果还有元素，会添加 [隐式轨道](#隐式轨道) 继续排列，直到所有元素被填充。

### 纵向流向

我们也可以手动设置流向，使其成为纵向：

```css
grid-template-rows: repeat(3, 1fr);
grid-auto-flow: column;
```

这样，所有元素会按列进行依次排列:

<img :src="$withBase('/assets/roadmap/frontend/css/grid-auto-flow.png')" alt="grid-auto-flow">

#### 修改书写方向时也会改变流向

当我们调整书写方向时 `writing-mode: vertical-rl;`，也会导致流向发生 90° 转变。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Logical_Values_and_Writing_Modes#css_%E4%B9%A6%E5%86%99%E6%A8%A1%E5%BC%8F)。

### 缺口和填充

在使用 `span` 关键字来调整元素占位的时候，其他自动定位的元素会自动检索轨道的大小，如果当前轨道不适合放入元素，那么就会转入下一行，直到找到可以容纳它的空间。

`span` 的意思是表示起始位置是自动规定的，结束线则需要跨越 `span` 后面跟的数字的数量的轨道。

类似下面的例子：

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/jeremyjone/embed/PoJqdNd?default-tab=css%2Cresult&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/jeremyjone/pen/PoJqdNd">
  Untitled</a> by jeremyjone (<a href="https://codepen.io/jeremyjone">@jeremyjone</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

- `div(1)` 使用 `span` 来确定大小，所以它的起始位置是自动的。因为横向流中前两行都没有足够空间放置它，所以转到 `(3,1)` 这个栅格位置放置。
- `div(3)` 起始位置也是自动的，它应该跟随 `div(1)` 后面放置，所以找到了 `(3,4)` 这个栅格位置。
- `div(2)` 与 `div(5)` 都是显式给出的位置，所以固定了位置，也就导致了前面 1 和 3 的位置出现怪异。
- 后面其他元素都依次排列

以上就是出现缺口的原因。

那么如何解决它呢？

使用 `dense` 关键字：

```css
grid-auto-flow: dense;
```

尝试解除上面例子中 `#container` 里面的注释属性，会发现元素会自动填充前面的缺口。

如果需要设置列紧凑效果，则可以通过 `grid-auto-flow: column dense;` 来实现。

## 盒模型对齐

与 `flex` 弹性盒模型的对齐方式类似，栅格布局也具有两条轴线：

- `行轴`：文字方向的轴
- `列轴`：垂直于文字方向的轴

<img :src="$withBase('/assets/roadmap/frontend/css/grid-box-align.png')" alt="grid-box-align">

### 栅格行轴对齐

行轴对齐有两种方式：`justify-items` 与 `justify-self`。

从名字能看出：

- `justify-items` 应用在栅格布局中，会将所有栅格元素统一对齐
- `justify-self` 应用在栅格元素上，用于单独设置某一元素的对齐方式

它具有如下值：

- `auto`：自动设置。在行轴中，代表 `normal`，也就是类似 `stretch` 的行为
- `normal`：类似 `stretch` 的行为
- `strctch`：水平撑满栅格
- `start`/`flex-start`：对齐到栅格起始端
- `end`/`flex-end`：对齐到栅格结束端
- `center`：对齐到栅格中央
- `baseline`：对齐到栅格的基准线上
- `first baseline`：对齐到栅格的第一个基准线上
- `last baseline`：对齐到栅格的最后一个基准线上

::: tip 练习

尝试修改元素属性：

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/jeremyjone/embed/poWJxoN?default-tab=css%2Cresult&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/jeremyjone/pen/poWJxoN">
  Untitled</a> by jeremyjone (<a href="https://codepen.io/jeremyjone">@jeremyjone</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

:::

### 栅格列轴对齐

列轴对齐有两种方式：`align-items` 与 `align-self`。

从名字能看出：

- `align-items` 应用在栅格布局中，会将所有栅格元素统一对齐
- `align-self` 应用在栅格元素上，用于单独设置某一元素的对齐方式

它的值与 [行轴对齐](#行轴对齐) 的值一样。

::: tip 练习

尝试修改元素属性：

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/jeremyjone/embed/QWqbZwE?default-tab=css%2Cresult&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/jeremyjone/pen/QWqbZwE">
  Untitled</a> by jeremyjone (<a href="https://codepen.io/jeremyjone">@jeremyjone</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

:::

### 轨道对齐

上面都是针对栅格内部元素进行对齐。**如果栅格布局本身比内部栅格大很多**，就需要用到针对行和列轨道的对齐。

默认情况下，栅格是基于起始位置对齐的。

假设布局宽高都是 `500px`，而每个栅格只有 `100px × 100px`，且只有 9 个栅格内容，那么：

<img :src="$withBase('/assets/roadmap/frontend/css/grid-align-base.png')" alt="grid-align-base">

此时将横向轨道看做横轴，纵向轨道看成纵轴，可以按行/列进行整体对齐。

- `justify-content`：将行按一定规则对齐
- `align-content`：将列按一定规则对齐

它们都具有如下值：

- `strctch`：自动拉伸元素以充满容器
- `normal`：类似 `stretch` 的行为
- `start`/ `flex-start`：对齐到起始位置
- `end`/ `flex-end`：对齐到结束位置
- `space-between`：均匀排列每个元素，相邻两行间距相等。首个元素放置于起点，末尾元素放置于终点
- `space-around`：均匀排列每个元素。每个元素周围分配相同的空间
- `space-evenly`：均匀排列每个元素。每个元素之间的间隔相等

::: tip 练习

尝试修改下面代码的对齐属性：

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/jeremyjone/embed/dyVoQmp?default-tab=css%2Cresult&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/jeremyjone/pen/dyVoQmp">
  Untitled</a> by jeremyjone (<a href="https://codepen.io/jeremyjone">@jeremyjone</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

:::

### 对齐简写

对齐也可以简写：

```css
place-content: <align-content> [<justify-content>];
```

```css
place-items: <align-items> [<justify-items>];
```

```css
place-self: <align-self> [<justify-self>];
```

全部可以简写成一个值，表示两个值是一样的。

## grid 写法

`grid` 属性是一个简写属性，它用来设置：

- 显示栅格属性：`grid-template-rows`、`grid-template-columns`、`grid-template-areas`
- 隐式栅格属性：`grid-auto-rows`、`grid-auto-columns`、`grid-auto-flow`
- 间距属性：`grid-column-gap`、`grid-row-gap`

要注意的是，仅可以在一个 `grid` 属性中声明显示或隐式栅格。

其语法：

```css
grid: <grid-template> | <grid-template-rows> / [ auto-flow && dense? ] <grid-auto-columns>? | [ auto-flow && dense? ] <grid-auto-rows>? / <grid-template-columns>;
```

语法看上去有点复杂，它分成三个写法，分别是：

- \<grid-template\>

  定义了 [grid-template](#grid-template)，可以直接等同于该属性的用法。

- \<grid-template-rows\> / [ auto-flow && dense? ] \<grid-auto-columns\>?

  设置为纵向流向。先写 `grid-template-rows` 属性，后面写 `grid-auto-columns` 属性，在写属性之前，要先声明 `auto-flow`，同时可以包含 `dense` 关键字。它们之间使用 `/` 分割。

  > 通过 `grid-template-rows` 属性显式设置行轨道来设置流向（`grid-template-columns` 设置为 `none`），并通过 `grid-auto-columns` 明确该如何自动重复列轨道（`grid-auto-rows` 设置为 `auto`）。`grid-auto-flow` 也被设置为 `column`，并可以附加 `dense` 属性。

- [ auto-flow && dense? ] \<grid-auto-rows\>? / \<grid-template-columns\>

  设置为横向流向。先写 `grid-template-rows` 属性，在写属性之前，要先声明 `auto-flow`，同时可以包含 `dense` 关键字。后面写 `grid-auto-columns` 属性，它们之间使用 `/` 分割。

  > 通过 `grid-template-columns` 属性显式设置行轨道来设置流向（`grid-template-rows` 设置为 `none`），并通过 `grid-auto-rows` 明确该如何自动重复列轨道（`grid-auto-columns` 设置为 `auto`）。`grid-auto-flow` 也被设置为 `row`，并可以附加 `dense` 属性。

可以看出，因为设置的复杂性，关键在于设置 `grid-template-rows` 与 `grid-template-columns` 两个属性。要么单独设置，要么系统设置一个，需要在指定流向前面给出 `auto-flow` 关键字。

例如：

```css
/* <grid-template> */
grid: "a" 100px "b" 1fr;
grid: [linename1] "a" 100px [linename2];
grid: 100px / 200px;
grid: minmax(400px, min-content) / repeat(auto-fill, 50px);
```

```css
/* <grid-template-rows> / [ auto-flow && dense? ] <grid-auto-columns>? */
grid: repeat(2, 60px) / auto-flow 80px;

/* 相当于 */
grid-template-columns: none;
grid-template-rows: repeat(2, 60px);
grid-auto-columns: 80px;
grid-auto-rows: auto;
grid-auto-flow: column;
```

```css
/* [ auto-flow && dense? ] <grid-auto-rows>? / <grid-template-columns> */
grid: auto-flow dense 40% / [line1] minmax(20em, max-content);

/* 相当于 */
grid-template-rows: none;
grid-template-columns: [line1] minmax(20em, max-content);
grid-auto-rows: 40%;
grid-auto-columns: auto;
grid-auto-flow: row;
```
