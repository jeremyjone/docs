# CSS 规范

<Description author="jeremyjone" version="v1" />

本文档适用于所有css文件的开发编写。

同时，推荐使用`scss`，`sass`，`stylus`等扩展的 css 语言。最好使用`stylus`。

## 1 CSS 属性的命名

css 的 ID 应当尽量少用，可以在一个页面使用一个，这样可以有效减少 ID 的使用，同时降低了 className 重复命名的概率（使用作用域/嵌套方式）。

css 的 className 应当同样具有语义化，通过名字就知道它对应的标签元素和内容。
cssclassName 应当使用 `小写 + “-”` 连接符进行拼接。

```scss
#header-menu {
  font-size: 20px;
  background-color: #0ff;
}
```

## 2 使用 CSS 的属性缩写

如果在一个 css 的 class 中有多个同一范围的属性，则应当尽可能的使用它的缩写。

```scss
// 错误的写法
#header-menu {
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 20px;
  margin-bottom: 5px;
}

// 正确的写法
#header-menu {
  margin: 20px 10px 5px 10px;
}
```

## 3 CSS 语言规范

- 每一个 CSS 属性都应当跟一个`;`（stylus 除外）
- CSS 的选择器应当间可能的简单，每个选择器和声明都应当是独立的一行
- 对于`url()`方法，可以省略协议，直接使用 uri 内容而不需要加引号
