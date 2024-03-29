# 布局

`CSS` 页面布局技术允许我们拾取网页中的元素，并且控制它们相对正常布局流、周边元素、父容器或主视口的位置。

## 正常布局流

正常布局流是指在不对页面进行任何布局控制时，浏览器默认的布局方式。它其实就是 [普通定位（文档流）](#普通定位（文档流）)。

大多数情况下，正常布局流已经可以搭建一个良好的页面。选择合适的布局流是关键，而不是一味的脱离正常布局流进行复杂的搭建工作。

以下技术会覆盖默认的布局行为：

- `display` 属性设置为 `flex` 或者 `grid` 等
- 浮动（`float`）
- `position` 属性的修改
- 表格布局（`display: table`）。但并不建议过多使用
- 多列布局
