# 判断方法

一些通用的判断方法。

## 判断类型

```js
// 是否为null
export const isNull = o => {
  return Object.prototype.toString.call(o).slice(8, -1) === "Null";
};

// 是否undefined
export const isUndefined = o => {
  return Object.prototype.toString.call(o).slice(8, -1) === "Undefined";
};

// 是否对象
export const isObject = o => {
  return Object.prototype.toString.call(o).slice(8, -1) === "Object";
};

// 是否数组
export const isArray = o => {
  return Object.prototype.toString.call(o).slice(8, -1) === "Array";
};

// 是否时间对象
export const isDate = o => {
  return Object.prototype.toString.call(o).slice(8, -1) === "Date";
};

// 是否函数
export const isFunction = o => {
  return Object.prototype.toString.call(o).slice(8, -1) === "Function";
};

// 是否boolean
export const isBoolean = o => {
  return Object.prototype.toString.call(o).slice(8, -1) === "Boolean";
};

// 是否字符串
export const isString = o => {
  return Object.prototype.toString.call(o).slice(8, -1) === "String";
};

// 是否数字
export const isNumber = o => {
  return Object.prototype.toString.call(o).slice(8, -1) === "Number";
};

// 是否正则对象
export const isRegExp = o => {
  return Object.prototype.toString.call(o).slice(8, -1) === "RegExp";
};

// 是否错误对象
export const isError = o => {
  return Object.prototype.toString.call(o).slice(8, -1) === "Error";
};

// 是否Symbol函数
export const isSymbol = o => {
  return Object.prototype.toString.call(o).slice(8, -1) === "Symbol";
};

// 是否Promise对象
export const isPromise = o => {
  return Object.prototype.toString.call(o).slice(8, -1) === "Promise";
};

// 是否Set对象
export const isSet = o => {
  return Object.prototype.toString.call(o).slice(8, -1) === "Set";
};
```

## 判断内容

### 是否为邮箱

```js
export const isEmail = s => {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(
    s
  );
};
```

### 是否为手机号

```js
export const isMobileNumber = s => {
  return /^1[3-9][0-9]{9}$/.test(s);
};
```

### 是否为座机号码

```js
export const isTel = s => {
  return /^(\d{3,4}-\d{7,8})(-\d{1,4})?$/.test(s);
};
```

### 是否 url 地址

```js
export const isURL = s => {
  return /^http[s]?:\/\/.*/.test(s);
};
```

### 是否为身份证号

```js
export const isCardID = sId => {
  if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
    console.log("你输入的身份证长度或格式错误");
    return false;
  }
  //身份证城市
  var aCity = {
    11: "北京",
    12: "天津",
    13: "河北",
    14: "山西",
    15: "内蒙古",
    21: "辽宁",
    22: "吉林",
    23: "黑龙江",
    31: "上海",
    32: "江苏",
    33: "浙江",
    34: "安徽",
    35: "福建",
    36: "江西",
    37: "山东",
    41: "河南",
    42: "湖北",
    43: "湖南",
    44: "广东",
    45: "广西",
    46: "海南",
    50: "重庆",
    51: "四川",
    52: "贵州",
    53: "云南",
    54: "西藏",
    61: "陕西",
    62: "甘肃",
    63: "青海",
    64: "宁夏",
    65: "新疆",
    71: "台湾",
    81: "香港",
    82: "澳门",
    91: "国外"
  };
  if (!aCity[parseInt(sId.substr(0, 2))]) {
    console.log("你的身份证地区非法");
    return false;
  }

  // 出生日期验证
  var sBirthday = (
      sId.substr(6, 4) +
      "-" +
      Number(sId.substr(10, 2)) +
      "-" +
      Number(sId.substr(12, 2))
    ).replace(/-/g, "/"),
    d = new Date(sBirthday);
  if (
    sBirthday !=
    d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate()
  ) {
    console.log("身份证上的出生日期非法");
    return false;
  }

  // 身份证号码校验
  var sum = 0,
    weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
    codes = "10X98765432";
  for (var i = 0; i < sId.length - 1; i++) {
    sum += sId[i] * weights[i];
  }
  var last = codes[sum % 11]; //计算出来的最后一位身份证号码
  if (sId[sId.length - 1] != last) {
    console.log("你输入的身份证号非法");
    return false;
  }

  return true;
};
```

### 通用判断内容的方法

```js
// 通用类型判断方法
export const checkStr = (str, type) => {
  switch (type) {
    case "phone": //手机号码
      return /^1[3-9][0-9]{9}$/.test(str);
    case "tel": //座机
      return /^(\d{3,4}-\d{7,8})(-\d{1,4})?$/.test(str);
    case "card": //身份证
      return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
    case "pwd": //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
      return /^[a-zA-Z]\w{5,17}$/.test(str);
    case "postal": //邮政编码
      return /[1-9]\d{5}(?!\d)/.test(str);
    case "QQ": //QQ号
      return /^[1-9][0-9]{4,9}$/.test(str);
    case "email": //邮箱
      return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
    case "money": //金额(小数点2位)
      return /^\d*(?:\.\d{0,2})?$/.test(str);
    case "URL": //网址
      return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(
        str
      );
    case "IP": //IP
      return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(
        str
      );
    case "date": //日期时间
      return (
        /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(
          str
        ) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
      );
    case "number": //数字
      return /^[0-9]$/.test(str);
    case "english": //英文
      return /^[a-zA-Z]+$/.test(str);
    case "chinese": //中文
      return /^[\\u4E00-\\u9FA5]+$/.test(str);
    case "lower": //小写
      return /^[a-z]+$/.test(str);
    case "upper": //大写
      return /^[A-Z]+$/.test(str);
    case "HTML": //HTML标记
      return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
    default:
      return true;
  }
};
```

## 判断设备

设备一般是通过 UserAgent 进行判断

### 获取 UserAgent

```js
const ua = navigator.userAgent.toLowerCase();
```

### 判断设备类型

```js
// 是否是微信浏览器
export const isWeiXin = () => {
  return ua.match(/microMessenger/i) == "micromessenger";
};

// 是否是移动端
export const isDeviceMobile = () => {
  return /android|webos|iphone|ipod|balckberry/i.test(ua);
};

// 是否是QQ浏览器
export const isQQBrowser = () => {
  return !!ua.match(/mqqbrowser|qzone|qqbrowser|qbwebviewtype/i);
};

// 是否是爬虫
export const isSpider = () => {
  return /adsbot|googlebot|bingbot|msnbot|yandexbot|baidubot|robot|careerbot|seznambot|bot|baiduspider|jikespider|symantecspider|scannerlwebcrawler|crawler|360spider|sosospider|sogou web sprider|sogou orion spider/.test(
    ua
  );
};

// 是否ios
export const isIos = () => {
  var u = navigator.userAgent;
  if (u.indexOf("Android") > -1 || u.indexOf("Linux") > -1) {
    //安卓手机
    return false;
  } else if (u.indexOf("iPhone") > -1) {
    //苹果手机
    return true;
  } else if (u.indexOf("iPad") > -1) {
    //iPad
    return false;
  } else if (u.indexOf("Windows Phone") > -1) {
    //winphone手机
    return false;
  } else {
    return false;
  }
};

// 是否ipad
export const isIpad = () => {
  var u = navigator.userAgent;
  if (u.indexOf("iPad") > -1) {
    return true;
  } else {
    return false;
  }
};

// 是否安卓
export const isAndroid = () => {
  var u = navigator.userAgent;
  if (u.indexOf("Android") > -1 || u.indexOf("Linux") > -1) {
    return true;
  } else {
    return false;
  }
};

// 是否windows phone
export const isWindowsPhone = () => {
  var u = navigator.userAgent;
  if (u.indexOf("Windows Phone") > -1) {
    return true;
  } else {
    return false;
  }
};

// 是否为PC端
export const isPC = () => {
  var userAgentInfo = navigator.userAgent;
  var Agents = [
    "Android",
    "iPhone",
    "SymbianOS",
    "Windows Phone",
    "iPad",
    "iPod"
  ];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
};
```

## 一些判断的扩展方法

### 检测密码强度

```js
export const checkPwdStrength = str => {
  var Lv = 0;
  if (str.length < 6) {
    return Lv;
  }
  if (/[0-9]/.test(str)) {
    Lv++;
  }
  if (/[a-z]/.test(str)) {
    Lv++;
  }
  if (/[A-Z]/.test(str)) {
    Lv++;
  }
  if (/[\.|-|_]/.test(str)) {
    Lv++;
  }
  return Lv;
};
```

### 对象相等

#### 对象完全相等，简易版本，足够使用

```js
export function isObjectValueEqual(a, b) {
  var o1 = a instanceof Object;
  var o2 = b instanceof Object;
  // 判断是不是对象
  if (!o1 || !o2) {
    return a === b;
  }

  //Object.keys() 返回一个由对象的自身可枚举属性(key值)组成的数组,
  //例如：数组返回下表：let arr = ["a", "b", "c"];console.log(Object.keys(arr))->0,1,2;
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }

  for (var o in a) {
    var t1 = a[o] instanceof Object;
    var t2 = b[o] instanceof Object;
    if (t1 && t2) {
      if (!isObjectValueEqual(a[o], b[o])) return false;
    } else if (a[o] !== b[o]) {
      return false;
    }
  }
  return true;
}
```

#### 对象完全相等，复杂版本，更加细致

```js
export function isDeepEqual(a, b) {
  const hasMap = typeof Map === "function",
    hasSet = typeof Set === "function",
    hasArrayBuffer = typeof ArrayBuffer === "function";

  if (a === b) {
    return true;
  }

  if (
    a !== null &&
    b !== null &&
    typeof a === "object" &&
    typeof b === "object"
  ) {
    if (a.constructor !== b.constructor) {
      return false;
    }

    let length, i;

    if (a.constructor === Array) {
      length = a.length;

      if (length !== b.length) {
        return false;
      }

      for (i = length; i-- !== 0; ) {
        if (isDeepEqual(a[i], b[i]) !== true) {
          return false;
        }
      }

      return true;
    }

    if (hasMap === true && a.constructor === Map) {
      if (a.size !== b.size) {
        return false;
      }

      i = a.entries().next();
      while (i.done !== true) {
        if (b.has(i.value[0]) !== true) {
          return false;
        }
        i = i.next();
      }

      i = a.entries().next();
      while (i.done !== true) {
        if (isDeepEqual(i.value[1], b.get(i.value[0])) !== true) {
          return false;
        }
        i = i.next();
      }

      return true;
    }

    if (hasSet === true && a.constructor === Set) {
      if (a.size !== b.size) {
        return false;
      }

      i = a.entries().next();
      while (i.done !== true) {
        if (b.has(i.value[0]) !== true) {
          return false;
        }
        i = i.next();
      }

      return true;
    }

    if (
      hasArrayBuffer === true &&
      a.buffer != null &&
      a.buffer.constructor === ArrayBuffer
    ) {
      length = a.length;

      if (length !== b.length) {
        return false;
      }

      for (i = length; i-- !== 0; ) {
        if (a[i] !== b[i]) {
          return false;
        }
      }

      return true;
    }

    if (a.constructor === RegExp) {
      return a.source === b.source && a.flags === b.flags;
    }

    if (a.valueOf !== Object.prototype.valueOf) {
      return a.valueOf() === b.valueOf();
    }

    if (a.toString !== Object.prototype.toString) {
      return a.toString() === b.toString();
    }

    const keys = Object.keys(a);
    length = keys.length;

    if (length !== Object.keys(b).length) {
      return false;
    }

    for (i = length; i-- !== 0; ) {
      const key = keys[i];
      if (isDeepEqual(a[key], b[key]) !== true) {
        return false;
      }
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a !== a && b !== b; // eslint-disable-line no-self-compare
}
```
