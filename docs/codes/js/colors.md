# 处理颜色的方法

相信对于前端来说，颜色的处理一定是越来越多的。

下面这些属性可以任意变换，使用时需要注意引用关系。

## 颜色的转换

- rgb：一个颜色的 RGB 表示，{r:255, g:255, b:255[, a:100]}
- hex：一个颜色的 HEX 表示，#123456[FF]
- hsv：一个颜色的 HSV 表示，{h:360, s:100, v:100[, a:100]}

### rgb -> hex

```js
export function rgbToHex({ r, g, b, a }) {
  const alpha = a !== void 0;

  r = Math.round(r);
  g = Math.round(g);
  b = Math.round(b);

  if (r > 255 || g > 255 || b > 255 || (alpha && a > 100)) {
    throw new TypeError(
      "Expected 3 numbers below 256 (and optionally one below 100)"
    );
  }

  a = alpha
    ? (Math.round((255 * a) / 100) | (1 << 8)).toString(16).slice(1)
    : "";

  return "#" + (b | (g << 8) | (r << 16) | (1 << 24)).toString(16).slice(1) + a;
}
```

### hex -> rgb

```js
export function hexToRgb(hex) {
  if (typeof hex !== "string") {
    throw new TypeError("Expected a string");
  }

  hex = hex.replace(/^#/, "");

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  } else if (hex.length === 4) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
  }

  const num = parseInt(hex, 16);

  return hex.length > 6
    ? {
        r: (num >> 24) & 255,
        g: (num >> 16) & 255,
        b: (num >> 8) & 255,
        a: Math.round((num & 255) / 2.55)
      }
    : { r: num >> 16, g: (num >> 8) & 255, b: num & 255 };
}
```

### hsv -> rgb

```js
export function hsvToRgb({ h, s, v, a }) {
  let r, g, b;
  s = s / 100;
  v = v / 100;

  h = h / 360;
  const i = Math.floor(h * 6),
    f = h * 6 - i,
    p = v * (1 - s),
    q = v * (1 - f * s),
    t = v * (1 - (1 - f) * s);

  switch (i % 6) {
    case 0:
      r = v;
      g = t;
      b = p;
      break;
    case 1:
      r = q;
      g = v;
      b = p;
      break;
    case 2:
      r = p;
      g = v;
      b = t;
      break;
    case 3:
      r = p;
      g = q;
      b = v;
      break;
    case 4:
      r = t;
      g = p;
      b = v;
      break;
    case 5:
      r = v;
      g = p;
      b = q;
      break;
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
    a
  };
}
```

### rgb -> hsv

```js
export function rgbToHsv({ r, g, b, a }) {
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b),
    d = max - min,
    s = max === 0 ? 0 : d / max,
    v = max / 255;
  let h;

  switch (max) {
    case min:
      h = 0;
      break;
    case r:
      h = g - b + d * (g < b ? 6 : 0);
      h /= 6 * d;
      break;
    case g:
      h = b - r + d * 2;
      h /= 6 * d;
      break;
    case b:
      h = r - g + d * 4;
      h /= 6 * d;
      break;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    v: Math.round(v * 100),
    a
  };
}
```

## 颜色的处理

### 变亮/变暗

percent 为正值变亮，负值变暗

```js
export function lighten(color, percent) {
  if (typeof color !== "string") {
    throw new TypeError("Expected a string as color");
  }
  if (typeof percent !== "number") {
    throw new TypeError("Expected a numeric percent");
  }

  const rgb = textToRgb(color),
    t = percent < 0 ? 0 : 255,
    p = Math.abs(percent) / 100,
    R = rgb.r,
    G = rgb.g,
    B = rgb.b;

  return (
    "#" +
    (
      0x1000000 +
      (Math.round((t - R) * p) + R) * 0x10000 +
      (Math.round((t - G) * p) + G) * 0x100 +
      (Math.round((t - B) * p) + B)
    )
      .toString(16)
      .slice(1)
  );
}
```

### 计算颜色的相对亮度

给出一个 color，返回 0-1

```js
export function luminosity(color) {
  if (typeof color !== "string" && (!color || color.r === void 0)) {
    throw new TypeError("Expected a string or a {r, g, b} object as color");
  }

  const rgb = typeof color === "string" ? textToRgb(color) : color,
    r = rgb.r / 255,
    g = rgb.g / 255,
    b = rgb.b / 255,
    R = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4),
    G = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4),
    B = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}
```

### 计算颜色的亮度

给出一个 color，返回 0-255。小于 128 应视为暗色。

```js
export function brightness(color) {
  if (typeof color !== "string" && (!color || color.r === void 0)) {
    throw new TypeError("Expected a string or a {r, g, b} object as color");
  }

  const rgb = typeof color === "string" ? textToRgb(color) : color;

  return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
}
```

### 混合两种颜色

接收两个颜色，第一个为前景色，第二个为背景色。

- 前景色需要具有透明属性，才会混合背景色，否则返回的仍然是前景色。
- 如果背景色具有透明属性，那么返回的属性也会具有一定的透明性。

```js
export function blend(fgColor, bgColor) {
  if (typeof fgColor !== "string" && (!fgColor || fgColor.r === void 0)) {
    throw new TypeError(
      "Expected a string or a {r, g, b[, a]} object as fgColor"
    );
  }

  if (typeof bgColor !== "string" && (!bgColor || bgColor.r === void 0)) {
    throw new TypeError(
      "Expected a string or a {r, g, b[, a]} object as bgColor"
    );
  }

  const rgb1 = typeof fgColor === "string" ? textToRgb(fgColor) : fgColor,
    r1 = rgb1.r / 255,
    g1 = rgb1.g / 255,
    b1 = rgb1.b / 255,
    a1 = rgb1.a !== void 0 ? rgb1.a / 100 : 1,
    rgb2 = typeof bgColor === "string" ? textToRgb(bgColor) : bgColor,
    r2 = rgb2.r / 255,
    g2 = rgb2.g / 255,
    b2 = rgb2.b / 255,
    a2 = rgb2.a !== void 0 ? rgb2.a / 100 : 1,
    a = a1 + a2 * (1 - a1),
    r = Math.round(((r1 * a1 + r2 * a2 * (1 - a1)) / a) * 255),
    g = Math.round(((g1 * a1 + g2 * a2 * (1 - a1)) / a) * 255),
    b = Math.round(((b1 * a1 + b2 * a2 * (1 - a1)) / a) * 255);

  const ret = { r, g, b, a: Math.round(a * 100) };
  return typeof fgColor === "string" ? rgbToHex(ret) : ret;
}
```

### 修改颜色的透明属性

给出一个 color，然后给定其透明度的偏移量。

- offset 需要接收 (-1, 1) 之间的浮点数。 -0.1 表示减少10%，0.1 表示增加10%。

```js
export function changeAlpha(color, offset) {
  if (typeof color !== "string") {
    throw new TypeError("Expected a string as color");
  }

  if (offset === void 0 || offset < -1 || offset > 1) {
    throw new TypeError("Expected offset to be between -1 and 1");
  }

  const { r, g, b, a } = textToRgb(color);
  const alpha = a !== void 0 ? a / 100 : 0;

  return rgbToHex({
    r,
    g,
    b,
    a: Math.round(Math.min(1, Math.max(0, alpha + offset)) * 100)
  });
}
```
