# HTML 处理方法

## 去除 html 标签

```js
export const removeHtmltag = str => {
  return str.replace(/<[^>]+>/g, "");
};
```

## 获取 url 参数

```js
export const getQueryString = name => {
  const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  const search = window.location.search.split("?")[1] || "";
  const r = search.match(reg) || [];
  return r[2];
};
```

## 动态引入 js

```js
const injectScript = (src, type = "text/javascript") => {
  const s = document.createElement("script");
  s.type = type;
  s.async = false;
  s.src = src;
  document.body.appendChild(s);
};
```

## 根据 url 地址下载

```js
export const download = url => {
  var isChrome = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
  var isSafari = navigator.userAgent.toLowerCase().indexOf("safari") > -1;
  if (isChrome || isSafari) {
    var link = document.createElement("a");
    link.href = url;
    if (link.download !== undefined) {
      var fileName = url.substring(url.lastIndexOf("/") + 1, url.length);
      link.download = fileName;
    }
    if (document.createEvent) {
      var e = document.createEvent("MouseEvents");
      e.initEvent("click", true, true);
      link.dispatchEvent(e);
      return true;
    }
  }
  if (url.indexOf("?") === -1) {
    url += "?download";
  }
  window.open(url, "_self");
  return true;
};
```

## el 是否包含某个 class

```js
export const hasClass = (el, className) => {
  let reg = new RegExp("(^|\\s)" + className + "(\\s|$)");
  return reg.test(el.className);
};
```

## el 添加某个 class

```js
export const addClass = (el, className) => {
  if (hasClass(el, className)) {
    return;
  }
  let newClass = el.className.split(" ");
  newClass.push(className);
  el.className = newClass.join(" ");
};
```

## el 去除某个 class

```js
export const removeClass = (el, className) => {
  if (!hasClass(el, className)) {
    return;
  }
  let reg = new RegExp("(^|\\s)" + className + "(\\s|$)", "g");
  el.className = el.className.replace(reg, " ");
};
```

## 获取滚动的坐标

```js
export const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});
```

## 页面滚动到顶部

```js
export const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};
```

## el 是否在视口范围内

```js
/**
 * @param {Boolean} partiallyVisible 是否可以部分显示
 */
export const isElementVisible = (el, partiallyVisible = false) => {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) ||
        (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};
```

## 劫持粘贴板

```js
export const copyTextToClipboard = value => {
  var textArea = document.createElement("textarea");
  textArea.style.background = "transparent";
  textArea.value = value;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    var successful = document.execCommand("copy");
  } catch (err) {
    console.log("Oops, unable to copy");
  }
  document.body.removeChild(textArea);
};
```

## 给某个元素绑定滚动事件

```js
/**
 * 给指定元素绑定滚动事件
 * @param {Object} opt
 * @example
 *      handleScroll({
 *          target: el,
 *          callback: dosomething(e, delta)
 *      })
 */
export const handleScroll = opt => {
  if (!opt.target) {
    return;
  }
  let callback = opt.callback || function() {};
  let target = opt.target;

  //获取兼容事件
  let mouseWheel = /Firefox/i.test(navigator.userAgent)
    ? "DOMMouseScroll"
    : "mousewheel";

  //IE
  if (document.attachEvent) {
    document.attachEvent("on" + mouseWheel, function(e) {
      if (e.target.parentElement == target) {
        callback(e, e.wheelDelta);
      }
    });
  }

  //FF、Chrome、Opera、safari
  else {
    document.addEventListener(mouseWheel, function(e) {
      e = e || window.event;
      if (e.target.parentElement == target) {
        if (e.detail) {
          //FF
          callback(e, e.detail * 40);
        } else {
          callback(e, e.wheelDelta);
        }
      }
    });
  }
};
```
