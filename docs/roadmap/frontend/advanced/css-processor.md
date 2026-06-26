# CSS 预处理器

CSS 预处理器是一种扩展 CSS 的语言工具，它给 CSS 加上了变量、嵌套、函数、逻辑控制等编程特性，编译后输出标准 CSS。

三种主流方案：**Sass/SCSS**、**Less**、**PostCSS**。

---

## 为什么需要预处理器

原生 CSS 的几个痛点：

- **没有变量** — 一个颜色值要在几十个地方写，改起来想哭
- **没有嵌套** — 写选择器要重复父级路径 `.nav .nav-item .nav-link {}`
- **没有复用机制** — 相同的样式段只能复制粘贴
- **没有计算能力** — 颜色、尺寸都得手算

预处理器用一套"增强语法"解决了这些问题。

---

## Sass / SCSS

Sass 是最早也最成熟的预处理器。它有两种语法：

| 语法 | 扩展名 | 特点 |
|------|--------|------|
| 缩进式（Sass） | `.sass` | 无花括号、无分号，靠缩进 |
| 花括号式（SCSS） | `.scss` | 完全兼容 CSS 语法，推荐 |

实际项目基本都用 **SCSS**。

### 变量

```scss
$primary-color: #3498db;
$font-stack: 'Helvetica', sans-serif;
$base-padding: 1rem;

.header {
  color: $primary-color;
  font-family: $font-stack;
  padding: $base-padding;
}
```

### 嵌套

```scss
// 编译前
nav {
  ul { margin: 0; list-style: none; }
  li { display: inline-block; }
  a {
    text-decoration: none;
    &:hover { text-decoration: underline; }  // & 引用父选择器
  }
}

// 编译后
nav ul { margin: 0; list-style: none; }
nav li { display: inline-block; }
nav a { text-decoration: none; }
nav a:hover { text-decoration: underline; }
```

> `&` 是 SCSS 中引用父选择器的特殊符号，伪类、BEM 命名经常用到。

### Mixin（混入）

可复用的样式片段，还可以传参：

```scss
@mixin flex-center($direction: row) {
  display: flex;
  flex-direction: $direction;
  justify-content: center;
  align-items: center;
}

.card {
  @include flex-center(column);  // 使用 mixin
}

.modal-overlay {
  @include flex-center();         // 使用默认值
}
```

编译后：

```css
.card { display: flex; flex-direction: column; justify-content: center; align-items: center; }
.modal-overlay { display: flex; flex-direction: row; justify-content: center; align-items: center; }
```

### @extend（继承）

让一个选择器继承另一个选择器的全部样式：

```scss
.btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

.btn-primary {
  @extend .btn;
  background: $primary-color;
  color: #fff;
}
```

### 函数与计算

```scss
$base-font: 16px;

.title {
  font-size: $base-font * 2;       // 32px
  color: darken($primary-color, 10%); // 颜色加深 10%
  width: calc(100% - 40px);        // 原生 calc 也能用
}
```

---

## Less

Less 语法上更接近原生 CSS，学习成本更低。不过近年项目使用率在下降，逐渐被 SCSS 取代。

Less 与 SCSS 的核心差异：

| 特性 | SCSS | Less |
|------|------|------|
| 变量前缀 | `$` | `@` |
| Mixin 传参 | `@mixin / @include` | 直接 `.mixin(@param) {}` |
| 逻辑控制 | `@if/@else/@for/@each` | 无原生控制 |
| 社区生态 | 更丰富 | 较少 |

基本用法（Less）：

```less
@primary-color: #3498db;
@padding: 1rem;

.card {
  color: @primary-color;
  padding: @padding;
}
```

---

## PostCSS

PostCSS 不是传统的预处理器，而是一个**用 JS 插件处理 CSS 的工具链**。它不写新语法，而是通过插件对标准 CSS 做转换。

**常用插件**：

| 插件 | 作用 |
|------|------|
| Autoprefixer | 自动添加浏览器前缀 `-webkit-`、`-moz-` |
| PostCSS Preset Env | 让你使用未来的 CSS 语法（`color()`、`nesting`） |
| CSS Nano | 压缩和优化 CSS 代码 |
| Stylelint | CSS 代码检查 |

```bash
# 原始代码
::placeholder { color: gray; }

# 经过 Autoprefixer 后
::-webkit-input-placeholder { color: gray; }
:-ms-input-placeholder { color: gray; }
::placeholder { color: gray; }
```

PostCSS 更像是一个构建工具，通常集成在 webpack / Vite 中自动执行。

---

## 选择建议

| 场景 | 推荐方案 |
|------|---------|
| 传统项目，需要完整预处理器功能 | **SCSS** — 最成熟、生态最好 |
| 简单项目，希望快速上手 | **SCSS** — 学一次到处用 |
| 想用未来 CSS 语法，不需要新语法 | **PostCSS** — 保持标准 CSS |
| 新项目 + 组件化框架（React/Vue） | **SCSS + CSS Modules** 或直接上 **CSS-in-JS** / **Tailwind** |

> 现在的趋势：CSS 本身在不断进化（CSS Variables、`@layer`、`@container`），预处理器的必要性在降低。但 SCSS 的嵌套和 mixin 在组件化项目中仍然非常实用。
