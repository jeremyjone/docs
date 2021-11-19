# HTML 学习之路

## \<!DOCTYPE html\> 的用处

`<!DOCTYPE html>` 是 `WEB` 的文档类型。它不是 HTML 标签，只是告诉浏览器当前 HTML 使用什么版本的文档类型编写的，该如何解析。

`<!DOCTYPE html>` 是 `HTML5` 的协议。

之前还有 `HTML4`、`XHTML 1.0` 等。它们的写法就相对比较繁琐了。

- HTML 4

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

- XHTML 1.0

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```

如果没有提供声明标识，那么浏览器就会使用默认方式进行渲染，也就是 `BackCompat` 模式，这样就会造成在不同浏览器下的显示会有所不同。

而提供了声明标识，那么浏览器就会按照 `W3C` 的标准模式进行渲染，这样所有浏览器会得到同样的显示效果。

## HTML5 的变化
