# 数组的一些扩展方法

## 判断元素是否在数组中

```js
export const contains = (arr, val) => {
  return arr.indexOf(val) != -1 ? true : false;
};
```

也可以将刚发挂载到 Array 中，但是不推荐。

## 随机洗牌方法

```js
export const shuffle = arr => {
  var result = [],
    random;
  while (arr.length > 0) {
    random = Math.floor(Math.random() * arr.length);
    result.push(arr[random]);
    arr.splice(random, 1);
  }
  return result;
};
```

## 数组排序

```js
/**
 *  @param {Number} type 1：从小到大 2：从大到小 3：随机
 */
export const sort = (arr, type = 1) => {
  return arr.sort((a, b) => {
    switch (type) {
      case 1:
        return a - b;
      case 2:
        return b - a;
      case 3:
        return Math.random() - 0.5;
      default:
        return arr;
    }
  });
};
```

## 数组去重

```js
export const unique = arr => {
  if (Array.hasOwnProperty("from")) {
    return Array.from(new Set(arr));
  } else {
    var n = {},
      r = [];
    for (var i = 0; i < arr.length; i++) {
      if (!n[arr[i]]) {
        n[arr[i]] = true;
        r.push(arr[i]);
      }
    }
    return r;
  }
};
```

## 求两个集合的并集

```js
export const union = (a, b) => {
  var newArr = a.concat(b);
  return this.unique(newArr);
};
```

## 求两个集合的交集

```js
export const intersect = (a, b) => {
  var _this = this;
  a = this.unique(a);
  return this.map(a, function(o) {
    return _this.contains(b, o) ? o : null;
  });
};
```

## 删除其中一个元素

```js
export const remove = (arr, ele) => {
  var index = arr.indexOf(ele);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
};
```

## 将类数组转换为数组

```js
export const formArray = ary => {
  var arr = [];
  if (Array.isArray(ary)) {
    arr = ary;
  } else {
    arr = Array.prototype.slice.call(ary);
  }
  return arr;
};
```

## 取数组中的最大值

```js
export const max = arr => {
  return Math.max.apply(null, arr);
};
```

## 取数组中的最小值

```js
export const min = arr => {
  return Math.min.apply(null, arr);
};
```

## 取数组中的平均值

```js
export const average = arr => {
  return this.sum(arr) / arr.length;
};
```

## 数组求和

```js
export const sum = arr => {
  return arr.reduce((pre, cur) => {
    return pre + cur;
  });
};
```
