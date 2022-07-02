# 通用方法

一些通用函数。

## 拷贝

通过递归进行深拷贝

```js
function clone(data) {
  if (!isObject(data)) {
    return data;
  } else {
    var d = isArray(data) ? [] : {};
    for (var i in data) {
      d[i] = isObject(data[i]) ? clone(data[i]) : data[i];
    }
    return d;
  }
}
```

对 JSON 转换做了一些小处理，避免了转换出错，但仍然可能出现问题。

```js
function clone(data) {
  const s = JSON.stringify(data);
  if (s) {
    return JSON.parse(s);
  }
}
```

::: warning 注意
该方法通常情况下不能用于生产环境。

因为：

- 转换时会抛弃一些值，比如 `undefined`、`Symbol`
- 转换时会做类型转换，比如 `RegExp`、`Map`

<img :src="$withBase('/assets/code/json-stringify.png')" alt="">

:::

## 无聊的等待方式

有时候，需要一些无聊的等待，比如等待某个 Element 挂载，所以就有了一个无聊的它。

```js
/**
 * 它是一个 Promise，使用 `await` 等待它，需要一个回调方法，它会定时检查传入的条件是否为真。10秒超时返回错误。
 * @param { () => boolean } cond
 * @example await boringWait(() => condition)
 */
const boringWait = cond => {
  return new Promise((resolve, reject) => {
    let timeout = 0;
    const t = setInterval(() => {
      timeout++;
      if (cond()) {
        clearInterval(t);
        resolve();
      }
      if (timeout > 100) {
        // 大于10秒，超时
        clearInterval(t);
        reject();
      }
    }, 100);
  });
};
```

## 字符串去掉空格内容

```js
/**
 * @param {Number} type 1-所有空格 2-前后空格 3-前空格 4-后空格
 */
export const trim = (str, type) => {
  type = type || 1;
  switch (type) {
    case 1:
      return str.replace(/\s+/g, "");
    case 2:
      return str.replace(/(^\s*)|(\s*$)/g, "");
    case 3:
      return str.replace(/(^\s*)/g, "");
    case 4:
      return str.replace(/(\s*$)/g, "");
    default:
      return str;
  }
};
```
