# 处理日期方法

## 判断日期

### 日期是否有效

给出一个任意参数，检查是否为一个日期

```js
/**
 * 判断给定的日期是否有效
 * @param {String | Number | Date} date 日期
 */
export function isValidDate(date) {
  return typeof date === "number" ? true : isNaN(Date.parse(date)) === false;
}
```

### 两个日期是否相等

给定两个日期，同时可以判断相等精度。

```js
/**
 * 判断两个日期是否相等
 * @param {String | Number | Date} date 日期
 * @param {String | Number | Date} date 日期
 * @param {undefined | String} unit 精度 undefined | "second" | "minute" | "hour" | "day" | "month" | "year"
 */
export function isSameDate(date, date2, unit) {
  if (!isValidDate(date) || !isValidDate(date2))
    throw new Error("The parameter requires a date type.");

  const t = new Date(date),
    d = new Date(date2);

  if (unit === void 0) {
    return t.getTime() === d.getTime();
  }

  switch (unit) {
    case "second":
      if (t.getSeconds() !== d.getSeconds()) {
        return false;
      }
    case "minute":
      if (t.getMinutes() !== d.getMinutes()) {
        return false;
      }
    case "hour":
      if (t.getHours() !== d.getHours()) {
        return false;
      }
    case "day":
      if (t.getDate() !== d.getDate()) {
        return false;
      }
    case "month":
      if (t.getMonth() !== d.getMonth()) {
        return false;
      }
    case "year":
      if (t.getFullYear() !== d.getFullYear()) {
        return false;
      }
      break;
    default:
      throw new Error(`date isSameDate unknown unit ${unit}`);
  }

  return true;
}
```

## 操作日期

### 日期工厂

创建一个指定的日期，如果给出的参数无法转为日期，则返回当日

```js
/**
 * 创建日期的工厂函数，生成一个指定日期，如果无效，返回当日日期
 * @param {String | Number | Date} date 日期
 */
export function createDate(date) {
  if (isDate(date)) {
    return date;
  } else if (isValidDate(date)) {
    return new Date(date);
  } else {
    return new Date();
  }
}
```

### 获取日期间隔

```js
/**
 * 获取两个时间的间隔时间戳
 * @param {String | Number | Date} startDate 起始日期
 * @param {String | Number | Date} endDate 截止日期
 */
export function getDateInterval(startDate, endDate) {
  return parseInt(
    createDate(endDate).getTime() - createDate(startDate).getTime()
  );
}
```

## 格式化日期

```js
/**
 * 格式化时间
 * @param {Date | String | Number} date 日期对象，或一个日期字符串，对其进行格式化
 * @param {String} fmt 格式文本，y:年，q:季度，M:月，d:日，D:星期，H:小时，m:分钟，s:秒，S:毫秒。例：`yyyy-MM-dd`
 * @param {String} lang 显示星期的文本，中文或者英文
 * @return {String} 格式化的内容
 */
export function formatDate(date, fmt = "yyyy-MM-dd", lang = "zh") {
  const WEEK = {
    zh: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    en: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ]
  };

  if (["zh", "en"].indexOf(lang) === -1) lang = "zh";

  date = createDate(date);

  var o = {
    "M+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "h+": date.getHours() % 12 == 0 ? 12 : date.getHours() % 12, //小时
    "H+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds(), //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    S: date.getMilliseconds() //毫秒
  };
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );

  // 年份
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  // 星期
  if (/(D+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, WEEK[lang][date.getDay()]);
  }
  return fmt;
}
```
