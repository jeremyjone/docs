# HTML 规范

<Description author="jeremyjone" version="v1" />

本规范适用于所有Html页面的开发。

开发工具，推荐使用 `VS Code`，或者 `WebStorm`。

使用 `VS Code` 的话，需要安装 `HTML CSS Support`、`HTML Snippets`、`Live Server` 等插件以实现更快、更好的开发。

Html 文档总是应当使用 HTML5 标准。

```html
<!DOCTYPE html>
```

Html 标签应当按照 H5 的使用规则，适当使用语义化标签，可以使整个页面变得更加具有可读性。

所有没有子标签的标签，都应当使用闭合方式。
所有的子标签，都应当自动缩进。

```html
<img />

<div>
  <button />
</div>
```
