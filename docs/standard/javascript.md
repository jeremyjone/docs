# JavaScript 开发规范

<Description author="jeremyjone" version="v1" />

本规范适用于所有使用 JavaScript 以及相关框架的开发。

开发工具，推荐使用 `VS Code`，或者 `WebStorm`。

## 1 变量

### 1.1 变量定义

变量的定义，不建议使用`var`，应该使用`let`或者`const`，进而优先使用`const`。

- 变量应当尽可能的在当前作用域的起始位置，而不是随便什么地方
- 变量应当赋初值，而非直接使用`let a`这样的方式直接定义，如果没有初值，可以赋值为`null`
- 通常情况下，应当避免使用`,`逗号运算符

```javascript
let itemId = 1;
const itemList = [];
let itemObj = null;
```

#### 1.1.1 变量定义时的数据类型

数据类型应当遵循如下规则：

- 6 种基本类型直接赋值（Symbol 除外）
- 数组应当直接使用`[]`创建
- 对象应当直接使用`{}`创建

```javascript
const itemObj = {};
```

### 1.2 变量的命名

变量应当使用小驼峰的格式，而常量应当是全大写并以“\_”下划线作为连接字符。
变量名应当合乎逻辑，容易阅读和理解。

```javascript
let itemId = 1;
const USER_ID = "USERID";
```

#### 1.2.1 命名的用词

有一些词汇可以特定针对某一类属性、方法进行定义。

- 以`is`，`can`，`has`等状态词汇开头的，应当是`boolean`类型
- 一个复杂类型，应当是以它对应的类型首字母开头，或以全名结尾的，如`oItem`，`itemList`等
- 以`get`，`set`等操作词汇开头的，应当是一个取值/赋值的方法

## 2 模板字符串

字符串不应当拼接，而应当使用 ES6 提供的模板字符串格式。
这个约束规范同样适用于包括 vue 文件的`template`标签在内的所有语句。

```javascript
const message = `${userName}: online`;
```

## 3 对象的使用

### 3.1 判断对象类型

不要尝试通过 `typeof` 判断的对象类型，**尤其是对象**，因为它不够严谨。

```javascript{8-10}
var a = 1;
var b = "b";
var c = {};
var d = [];
var p = new Person();
typeof a; // => "number"
typeof b; // => "string"
typeof c; // => "object"
typeof d; // => "object"
typeof p; // => "object"
```

可以看到，c、d、p 这些变量都被判断为 object。为了避免这个问题，可以通过原型来获取类型。为了更好的判断自定义，可以使用 `instanceof`。

我对此封装了一些常用函数，这样可以提高利用度。

```javascript
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
```

### 3.1 对象的拷贝

对象的拷贝属于浅拷贝，所以不可以使用`=`直接赋值。但是，也不建议使用`Object.assign(target, ...sources)`，应当直接使用扩展运算符。

```javascript
const oldObject = {a: 1, b: 2}
conost newObject = {...oldObject, c: 3}

// 或者使用下面JSON方式，但同样不是非常好的方案。
const newObject = JSON.parse(JSON.stringify(oldObject))

// 应当使用递归的方法封装一个clone函数。
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

### 3.2 对象添加属性

对象添加属性，不应当直接对对象直接操作，而是使用`Object.assign()`的方法。

```javascript
const object1 = { a: 1, b: 2 };
Object.assign(object1, { c: 3 });
```

::: danger
禁止使用下面方式：

```javascript
object1.d = 4;
```

:::

## 4 条件语句

当条件较少或条件过于复杂的时候，使用`if`语句；而当条件分支多于 3 个的时候，可以考虑尽可能的使用`switch`语句。

### 4.1 if 语句

对于在条件内需要 `return` 的，需要有一个 else，如果为空，可以返回 `void 0`。

```javascript
if (condition) {
  // ...
}

if (condition1) {
  // ...
  return xxx;
} else if (condition2) {
  // ...
  return yyy;
} else {
  return void 0
}
```

::: tip
尽可能将 `return` 语句置于条件块之外，作为函数的最后一条语句。
:::

### 4.2 switch 语句

所有 switch 分支都应该具有一个`break`语句，并且最后都应该具有一个`default`分支，哪怕它只具有一个`break`语句。

```javascript
switch(condition) {
    case c1:
        // ...
        break;
    case c2:
        // ...
        break;
    ...

    case c8:
    case c9:
    case c10:
        // ...，可以批量处理多个分支，这是被允许的
        break;
    default:
        // ...
        break;
}
```

## 5 循环

如果不是完整的需要遍历整个对象，则尽可能不使用`foreach`方法，而是使用`for`的方案。

```javascript
// 第一种，普通方式，不推荐
for (let i = 0; i < arr.length; i++) {}

// 第二种，优化方案，推荐
for (let i = 0, j = arr.length; i < j; i++) {}
```

上面的方案，更加推荐使用第二种方式，因为如果 arr 是 DOM 对象的时候，每一次迭代都会访问 DOM 层，使用第二种方式，就只会访问一次 DOM 层，效率更高。

注意：第二种方式并不适用 DOM 动态更新的场景。

## 6 null 与 undefined

- 创建一个对象时，可以将其赋值为`null`，但不可以赋值为`undefined`
- 判断一个对象是否存在时，需要使用`obj === null`或`obj !== null`，而不是标准相等符`==`。同时也不可以使用`obj === undefined`来进行判断。

::: tip
如果需要使用 `undefined`，可以通过如下方式获取：

```javascript
void 0;
```

它减少了代码量，同时减少了输入性的错误可能性。
:::

## 7 函数

通常情况下，函数应当使用显示方法声明，而不是直接使用`fun()`这样的方式直接创建。这点在`*.vue`文件的`method`属性中尤其需要注意。

函数的命名应当遵循小驼峰的方式。

```javascript
method: {
    myMethod: function() {
        // ...
    }
}

myMethod: function() {
    // ...
}
```

### 7.1 工具类的函数

对于在 utils 等文件夹中的工具函数，如果需要直接导出，可以通过下面方式：

```javascript
export function myMethod() {
  // ...
}
```

这样可以单独调用某一个函数。

```javascript
import { myMethod } from "./utils";
```

## 8 JavaScript ES6 规范

应当完全遵循 ES6 的规范编写代码，以提高代码质量。
