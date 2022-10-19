# 响应式与媒体查询

媒体查询是 `CSS2` 引入的，它让不同媒体类型定义不同样式成为了可能。

## 媒体查询的作用

媒体查询可以：

- 查询设备类型
- 查询设备视口
- 查询属性
- 查询横屏/竖屏

等等。

媒体查询使用 `@media` 语法使用：

```css
body {
    display: block;
}

@media screen and (max-width: 768px) {
    body {
        display: flex;
    }
}
```

上面语法的意义：当浏览器视口为 `768px` 或更小时，`body` 标签的 `display` 属性值改为 `flex`。

## 关键字

### `and`、`,`、`not`
 
分别对应 与、或、非

- 多个混合媒体特征，使用 `and` 来关联：
  > ```css
  > @media screen and (min-width: 400px) and (orientation: landscape) {
  >   body {
  >     color: blue;
  >   }
  > }
  > ```  

- 多个条件，匹配任何一个都可以生效，使用 `,` 直接分隔开即可：
  > ```css
  > @media screen and (min-width: 400px), screen and (orientation: landscape) {
  >   body {
  >     color: blue;
  >   }
  > }
  > ```

- 让某个媒体失效，使用 `not` 来实现：
  > ```css
  > @media not all and (orientation: landscape) {
  >   body {
  >     color: blue;
  >   }
  > }
  > ```

### `only`   

`only` 可防止旧版浏览器应用指定样式，这对现代浏览器没有任何影响。

### 使用范围

这些关键字不仅可以在 css 中使用，还可以在 link 标签中使用：

```html
<link rel="stylesheet" media="screen and (min-width: 900px)" href="widescreen.css">
<link rel="stylesheet" media="screen and (max-width: 600px)" href="smallscreen.css">
```

这样可以根据不同尺寸来导入不同样式文件。

## 创建响应式

编写不同的样式文件，再通过媒体查询，根据不同视口大小来分别引入，这样就可以编写出一套响应式界面。