# 生成方法

一些生成、创建的方法。

## 生成 uuid

```js
/**
 * 生成uuid
 * @param {Number} len 指定uuid的长度
 * @param {Number} radix 进制，默认16进制
 */
function uuid(len, radix = 16) {
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
  const uuid = [];
  let i;
  radix = radix || chars.length;

  if (len) {
    for (i = 0; i < len; i++) {
      uuid[i] = chars[0 | (Math.random() * radix)];
    }
  } else {
    let r;
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
    uuid[14] = "4";

    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | (Math.random() * 16);
        uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r];
      }
    }
  }

  return uuid.join("");
}
```

## 生成指定范围内的随机数

```js
export const random = (min, max) => {
  if (arguments.length === 2) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  } else {
    return null;
  }
};
```

## base64 转 文件

```js
// base64 转文件
export function base64toFile(base64) {
  const arr = base64.split(",");
  const mime = arr[0].match(/:(.*?);/)?.[1] ?? "";
  const ext = mime.split("/")?.[1] ?? "";
  const bstr = atob(arr?.[1] ?? "");
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  const name = `${new Date().getTime()}.${ext}`;

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], name, { type: mime });
}
```
