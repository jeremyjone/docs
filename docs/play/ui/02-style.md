# 如何编写样式

想编写好一个组件库的样式内容，可不是简简单单的把每个组件的样式写好就可以了。你需要考虑把样式内容变成一个系统，即样式系统，按照做系统的思维去思考，这样才能更好的编写样式。

## 样式系统

样式系统是一个系统，它包含了一系列的样式内容，这些样式内容是有规律的，是有组织的，是有层次的。这样的样式系统，可以让你更好的去编写样式，更好的去维护样式。

样式系统的内容包括：

- 基础样式
- 主题样式
- 复用样式
- 工具方法
- 用户自定义样式
- ~~响应式样式~~  // 这个我们这里暂时不考虑，但需要知道应该怎么做

还有一些其他内容，也是需要我们在编写样式系统的时候考虑的，但这里我们认为它们和响应式一样，暂时不考虑。

## 系统结构

我们这个项目采用 SCSS 来编写。

> SCSS 是 Sass 3 引入新的语法，完全兼容 CSS3，并且继承了 Sass 的强大功能。SCSS 是 Sass 3 引入新的语法，完全兼容 CSS3，并且继承了 Sass 的强大功能。

大体结构如下：

```bash
├── styles
│   ├── base
│   │   ├── _color.scss   // 颜色
│   │   ├── ...           // 其他基础样式
│   ├── components        // 组件样式
│   │   ├── button.scss  // 按钮
│   │   ├── ...           // 其他组件
│   ├── functions         // 函数
│   ├── transitions       // 过渡
│   ├── vars.scss         // 变量
│   ├── index.scss        // 入口文件
```

我们做最简单的示例，真正的项目中，你需要更多的内容。

## 基础样式

我们首先编写变量，这是所有样式的基础。

我们定义最基本的主题颜色变量：

```scss
// vars.scss

$base-colors: (
  "primary": #8b7ae5,    // 主色
  "secondary": #c48be0,  // 次色
  "success": #52b898,    // 成功
  "warning": #e6ba69,    // 警告
  "error": #e67373,      // 错误
  "info": #7991b3,       // 信息
  "neutral": #504e5a     // 中性
);
```

所有颜色类别与我们之前定义的 button 以及后续组件类型保持一致，这样我们可以在组件中直接使用这些颜色。

们要这里要考虑一个问题，就是我们的样式系统是不是要支持用户自定义样式。如果支持，那么我们需要考虑如何让用户自定义样式。

这里我们参考了 ElementPlus 的做法，使用 `default` 来实现替换：

```scss
// vars.scss

$base-colors: () !default;
$base-colors: map.deep-merge((
  "primary": #8b7ae5,
  "secondary": #c48be0,
  "success": #52b898,
  "warning": #e6ba69,
  "error": #e67373,
  "info": #7991b3,
  "neutral": #504e5a
), $base-colors);
```

这样做，可以让用户直接覆盖我们的默认颜色。

```scss
//如何替换

@forward "@xpyjs/x-ui" with (
    $base-colors: (
        "primary": #ff0000,
        "secondary": #00ff00,
        "success": #0000ff,
        "warning": #ffff00,
        "error": #ff00ff,
        "info": #00ffff,
        "neutral": #ffffff
    )
)
```

这样的写法，可以让用户对每一个具有 !default 的变量进行覆盖。在使用时注意要把 forward 后面的路径替换成正确的路径。比如这里已经正确安装了组件库，那么这么写（`@xpyjs/x-ui`）就没有问题。

### 其他默认变量

可能我们还需要文本颜色、边框颜色、背景颜色等等，这些都是我们的基础样式。我们参考 `$base-colors` 的写法实现即可。这里以背景色为例：

```scss
// vars.scss

$background-colors: () !default;
$background-colors: map.deep-merge(
  (
    "base": (
      "light": #ffffff,
      "dark": #121212
    ),
    "hover": (
      "light": #f5f5f5,
      "dark": #212121
    ),
    "disabled": (
      "light": #e0e0e0,
      "dark": #333333
    ),
    "mask": (
      "light": rgba(0, 0, 0, 0.15),
      "dark": rgba(255, 255, 255, 0.15)
    )
  ),
  $background-colors
);
```

对的，写法不限制，但是替换时需要结构保持一致即可。

## 生成标准颜色

有了变量，我们便可以在 base/_color.scss 中生成我们的颜色了。

我们要考虑使用情况。在当前现代化浏览器中，使用 css 变量是一个很不错的选择，所以我们可以生成 css 变量，然后在需要的地方直接使用即可。

CSS 变量的优点：

- 生成简单，使用方便
- 可以在运行时修改
- 可以在媒体查询中使用

```scss
// base/_color.scss

@use "sass:map";
@use "sass:color";
@use "../vars" as vars;

// 获取颜色
$base-colors: vars.$base-colors;
$background-colors: vars.$background-colors;
```

基础配置工作就做好了，下面就可以生成了。

我们把所有的变量声称在 `:root` 上：

```scss
// base/_color.scss

:root {
    @each $name, $color in $base-colors {
        --x-color-#{$name}: #{$color};
    }

    @each $name, $color in $background-colors {
        --x-bg-color-#{$name}: #{map.get($colors, 'light')};
    }
}
```

此时我们已经有了最基础的颜色模板，我们可以在任何地方使用像 `var(--x-color-primary)` 这样的变量。

但是，我们既然是要编写一套颜色系统，那么色阶是必须的。
色阶有很多方式，可以通过函数，还可以适用对象。我们这里使用对象来生成色阶，我认为这样更灵活一些。

```scss
// base/_color.scss


// 配置色阶。用于生成不同百分比浓度的主题颜色
$color-mode-steps: (
  "50": (
    percent: 90%,
    color: #ffffff
  ),
  "100": (
    percent: 80%,
    color: #ffffff
  ),
  "200": (
    percent: 60%,
    color: #ffffff
  ),
  "300": (
    percent: 40%,
    color: #ffffff
  ),
  "400": (
    percent: 20%,
    color: #ffffff
  ),
  "500": (
    percent: 0%,
    color: #ffffff
  ),
  "600": (
    percent: 20%,
    color: #000000
  ),
  "700": (
    percent: 40%,
    color: #000000
  ),
  "800": (
    percent: 60%,
    color: #000000
  ),
  "900": (
    percent: 70%,
    color: #000000
  )
);
```

然后我们来生成色阶：

```scss
// base/_color.scss

@use "sass:map";
@use "sass:color";

:root {
    // 生成颜色
    @each $name, $color in $base-colors {
        --x-color-#{$name}: #{$color};

        @each $step, $value in $color-mode-steps {
            --x-color-#{$name}-#{$step}: color.mix($color, map.get($value, "color"), map.get($value, "percent"));
        }
    }

    // 生成背景色
    @each $name, $color in $background-colors {
        --x-bg-color-#{$name}: #{map.get($colors, 'light')};
    }
}
```

## 主题模式

我们的组件库是支持主题模式的，所以我们需要考虑主题模式下的样式。在不同情况下，我们都要考虑。

目前通用的亮暗主题配置方案：

- `dark class`
- `prefers-color-scheme`
- `data-theme`

我们把这两种方案都适配就可以了。

```scss
:root {}
:root.dark {}

[data-theme="dark"] {}
[data-theme="light"] {}

@media (prefers-color-scheme: dark) {}
@media (prefers-color-scheme: light) {}
```

我们需要把之前在 `:root` 上写的内容，都复制一份到这些地方。

为了方便，我们可以使用 mixin 来实现：

```scss
@mixin generate-color-variables($is-dark: false) {
    $mode: if($is-dark, "dark", "light");  // 利用变量，来判断是亮色还是暗色

    // 生成颜色
    @each $name, $color in $base-colors {
        --x-color-#{$name}: #{$color};

        @each $step, $value in $color-mode-steps {
            --x-color-#{$name}-#{$step}: color.mix($color, map.get($value, "color"), map.get($value, "percent"));
        }
    }

    // 生成背景色
    @each $name, $color in $background-colors {
        --x-bg-color-#{$name}: #{map.get($colors, $mode)};  // 这里使用了 $mode
    }
}
```

然后我们在所有地方使用这个 mixin：

```scss
:root {
    @include generate-color-variables(false);
}
:root.dark {
    @include generate-color-variables(true);
}

[data-theme="light"] {
    @include generate-color-variables(false);
}
[data-theme="dark"] {
    @include generate-color-variables(true);
}

@media (prefers-color-scheme: light) {
    @include generate-color-variables(false);
}
@media (prefers-color-scheme: dark) {
    :root:not([data-theme]) {  // 这个操作是为了避免无切换时自动生效
        @include generate-color-variables(true);
    }
}
```

这样生成的色阶，我们不用考虑 light/dark 对颜色的影响，因为我们已经在生成色阶的时候考虑了。

现在，我们在大体上就完成了所有的基础样式的编写。它目前就有了一套完整的色阶。

## 组件样式

有了像上面的样式系统结构，我们的组件样式就可以完全基于这些样式去编写了。

就比如我们现在要编写的按钮样式，就可以直接使用我们的颜色变量：

```scss
// components/button.scss

@use "../vars" as vars;
@use "sass:map";

$types: (
  "default": (
    "bg": --x-color-neutral
  ),
  "primary": (
    "bg": --x-color-primary
  ),
  "secondary": (
    "bg": --x-color-secondary
  ),
  "success": (
    "bg": --x-color-success
  ),
  "warning": (
    "bg": --x-color-warning
  ),
  "error": (
    "bg": --x-color-error
  ),
  "info": (
    "bg": --x-color-info
  )
)

@each $type, $value in $types {
    .x-button-#{$type} {
        background-color: var(#{map.get($value, "bg")});
    }
}
```

这样就通过我们之前定义的变量，来完成背景颜色的设置。

> 为什么要用 --x-color-primary 这样的变量名，而不是直接使用 var(--x-color-primary) 这样的变量值。是因为我们可以更加灵活的改变它们。

```scss
@each $type, $value in $types {
    .x-button-#{$type} {
        background-color: var(#{map.get($value, "bg")});

        // 这样通过尾值来改变颜色
        &:hover {
            background-color: var(#{map.get($value, "bg")}-100);
        }

        &:active {
            background-color: var(#{map.get($value, "bg")}-200);
        }
    }
}
```
