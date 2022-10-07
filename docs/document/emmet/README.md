# Emmet 使用文档

`Emmet` 可以帮助我们快速开发页面代码，通过固定语法，快速生成 `HTML`、`CSS` 代码的一种工具。

## 使用方法

所有语法写完之后，直接使用 tab 键，就可以生成对应的代码。

## HTML 语法

### 生成结构文档

通过 `!` 可以快速生成完整的结构文档。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>
```

使用 `!!!` 可以只生成声明语句：

```html
<!DOCTYPE html>
```

### 生成空元素

语法：元素名，如：`div`

```html
<!-- div -->
<div></div>
```

### 生成带 id 的元素

语法：`#`，如：`div#id`

```html
<!-- div#id -->
<div id="id"></div>
```

### 生成带 class 的元素

语法：`.`，如：`div.className`

```html
<!-- div.className -->
<div class="className"></div>
```

### 生成带有其他属性的元素

语法：`[]`，多个属性空格分开，如：`div[name=jeremyjone value=20]`

```html
<!-- div[name=jeremyjone value=20] -->
<div name="jeremyjone" value="20"></div>
```

### 生成标签内容

语法：`{}`，可以生成文本内容，如：`div{jeremyjone}`

```html
<!-- div{jeremyjone} -->
<div>jeremyjone</div>
```

### 生成多个重复元素

语法：`*n`，会自动将元素重复n次，如：`div.className*2`

```html
<!-- div.className*2 -->
<div class="className"></div>
<div class="className"></div>
```

### 生成序号

语法：`$`，序列从1开始，遇到多个自动增加1，如：`div.className$`、`div{$}*3`

```html
<!-- div.className$ -->
<div class="className1"></div>

<!-- div{$}*3 -->
<div>1</div>
<div>2</div>
<div>3</div>
```

### 序号的高级用法

- 多位数字

    多个 `$` 使用可以生成多占位字符的数字，如：`div{jeremyjone$$}*20`

    ```html
    <!-- div{jeremyjone$$}*20 -->
    <div>jeremyjone01</div>
    <div>jeremyjone02</div>
    <div>jeremyjone03</div>
    <div>jeremyjone04</div>
    <div>jeremyjone05</div>
    <div>jeremyjone06</div>
    <div>jeremyjone07</div>
    <div>jeremyjone08</div>
    <div>jeremyjone09</div>
    <div>jeremyjone10</div>
    <div>jeremyjone11</div>
    <div>jeremyjone12</div>
    ...
    ```

    可以看到个位数字时，会用 0 占位十位部分。

- 倒序序号

    使用 `@-` 跟在 `$` 后面即可，如：`div{$@-}*3`

    ```html
    <!-- div{$@-}*3 -->
    <div>3</div>
    <div>2</div>
    <div>1</div>
    ```

- 指定起始序号

    使用 `@n` 跟在 `$` 后面即可，如：`div{$@3}*3`

    ```html
    <!-- div{$@3}*3 -->
    <div>3</div>
    <div>4</div>
    <div>5</div>
    ```

    该方法如果是倒叙，则指定的是截止序号，如：`div{$@-3}*3`

    ```html
    <!-- div{$@-3}*3 -->
    <div>5</div>
    <div>4</div>
    <div>3</div>
    ```

### 生成子节点

语法：`>`，如：`div>span>ul>li*3`

```html
<!-- div>span>ul>li*3 -->
<div>
    <span>
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </span>
</div>
```

### 生成兄弟节点

语法：`+`，如：`div>span+ul>li*2`

```html
<!-- div>span+ul>li*2 -->
<div>
    <span></span>
    <ul>
        <li></li>
        <li></li>
    </ul>
</div>
```

### 生成父级的兄弟节点

语法：`^`，它会在当前元素的父级元素之后生成接下来的元素，如：`div>span^ul>li`

```html
<!-- div>span^ul>li -->
<div>
    <span></span>
</div>
<ul>
    <li></li>
</ul>
```

遇到多层元素，还可以使用多个 `^` 来返回更高层级，每一个 `^` 表示返回一层，这在编写多层级多元素时非常高效。如：`div>span>div>ul>li*2^^^span>img`

```html
<!-- div>span>div>ul>li*2^^^span>img -->
<div>
    <span>
        <div>
            <ul>
                <li></li>
                <li></li>
            </ul>
        </div>
    </span>
    <span>
        <img src="" alt="">
    </span>
</div>
```

### 分组

语法：`()`，分组在多级元素中非常有用，如：`div>span>(ul>li*3)+img`、`div>(span>img.className$[alt=imgName$])*3`

```html
<!-- div>span>(ul>li*3)+img -->
<div>
    <span>
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <img src="" alt="">
    </span>
</div>

<!-- div>(span>img.className$[alt=imgName$])*3 -->
<div>
    <span>
        <img src="" alt="imgName1" class="className1">
    </span>
    <span>
        <img src="" alt="imgName2" class="className2">
    </span>
    <span>
        <img src="" alt="imgName3" class="className3">
    </span>
</div>
```

## CSS 语法

### 属性快速拼写

CSS 语法基本上都是一些常用属性键值的缩写，如：

- `fwb` - `font-weight: bold`
- `jcc` - `justify-content: center`
- `poa` - `position: absolute`

一般来说，取完整属性的每一个单词的头一个字母，如果没有，尝试头两个字母即可。

### 快速赋值

还有一个常用可以跟数字以及单位的变量：

- `w100`- `width: 100px`
- `w100%` - `width: 100%`
- `w100vw` - `width: 100vw`
- `m10` - `margin: 10px`
- `mt10` - `margin-top: 10px`
- `m10m20m30pm20` - `margin: 10px 20px 30% 20px`

### 对应的单位

- `p` - `%`
- `e` - `em`
- `x` - `ex`

如：`p10p` - `padding: 10%`

### 对应的颜色

- `#1` - `#111111`
- `#e0` - `#e0e0e0`
- `#fc0` - `#ffcc00`

### !important

`!` 可以在属性后面添加 `!important`

- `pb24!` - `padding-bottom: 24px !important`

### 多属性同时生成

支持多属性快速生成，通过 `+` 来实现：

- `p10+m20`:

    ```css
    padding: 10px;
    margin: 20px;
    ```

- `p!+m10e!`:

    ```css
    padding:  !important;
    margin: 10em !important;
    ```

## 更多

更多内容，可以参考 [官网](https://docs.emmet.io/)
