# this 关键字

JavaScript 中的 `this` 关键字与其他语言略有不同，**在绝大多数情况下，函数的调用方式决定了 `this` 的值（运行时绑定）**。`this` 不能在执行期间被赋值，并且在每次函数被调用时 `this` 的值也可能不同。

ES5 引入了 `bind` 方法来设置函数的 `this` 值，而不用考虑函数是如何被调用的。同时，箭头函数不提供自身的 `this` 绑定。

在不同模式下，`this` 返回的值有所不同：

```js
// 普通模式下，this 永远指向一个对象。默认为全局对象
function f1() {
    return this;
}

// 在浏览器中
f1() === window; // true

// 在 Node 中：
f1() === globalThis; // true
```

```js
// 在严格模式下，this 可以是任意值。如果没有设置，保持为 undefined
function f2() {
    "use strict" // 严格模式
    return this;
}

// 直接调用，没有在进行执行环境时设置 this 的值，保持 undefined
f1() === undefined; // true

// 通过 window 进入执行环境，此时 this 的值应为 window
window.f2() === window; // true
```

上面两个例子可以很好的说明 `this` 的用法以及指向。

## 对象上下文

当调用一个对象中的方法时，函数内的 `this` 是会绑定到对象上的。

```js
var o = {
  prop: 37,
  f: function() {
    return this.prop;
  }
};

console.log(o.f()); // 37
```

## 函数上下文

一个对象（A）可以作为 `bind`、`apply`、`call` 函数的第一个参数绑定到另一个对象（B）上，此时对象（B）的 `this` 会指向对象（A）。如果没有指向，它默认就是 window 对象。

```js
var obj = {a: 'Custom'};
var a = 'Global';

function whatsThis() {
  return this.a;  // this 的值取决于函数被调用的方式
}

whatsThis(); // 'Global' 因为在这个函数中 this 没有被设定，所以它默认为 全局/ window 对象
whatsThis.call(obj); // 'Custom' 因为函数中的 this 被设置为obj
whatsThis.apply(obj); // 'Custom' 因为函数中的 this 被设置为obj
```

### this 和对象转换

在非严格模式下，使用 `call` 和 `apply` 时，如果用作 `this` 的值不是对象，则会尝试将其转换为对象，`null` 与 `undefined` 全部被转换为全局对象。例如：`7 => new Number(7)`：

```js
function bar() {
  console.log(Object.prototype.toString.call(this));
}

bar.call(7);     // [object Number]
bar.call('foo'); // [object String]
bar.call(undefined); // [object global]
```

### 箭头函数

在箭头函数中，`this` 与封闭词法环境的 `this` 保持一致：

- 全局代码中，`this` 为全局对象
- 函数中，为当前调用对象

如果将 `this` 传递给 `call`、`apply`、 或 `bind` 来调用箭头函数，它将被忽略，不过仍然可以传递参数。最好的方法，第一个参数应该设置为 `null`。

```js
// 刚接触到 JavaScript 的时候，对于这样的 this 绑定一定头疼过
var obj = {
    bar: function() {
        var x = (() => this);
        return x;
    }
}

var fn = obj.bar();
fn() === obj;

var fn2 = obj.bar;
fn2()() === window;
```

::: info 解析

`obj` 是一个对象，它内里面有一个 `bar` 属性，该属性绑定了一个匿名方法，这个匿名方法返回了一个 `x` 对象，该对象同样绑定了一个匿名的箭头函数，返回的一个 `this`，这个 `this` 指向的是 `bar` 所引用的匿名方法，这点要清楚。

当我们创建 `fn` 时，`fn` 绑定了 `obj.bar()`，这里直接执行了 `bar()`，是通过 `obj` 执行的，所以 `bar` 所绑定的匿名方法的 `this`，此时指向的是 `obj`，所以当执行 `fn()` 的时候，返回的自然是 `obj`，故 `fn() === obj` 为 `true`。

如果第一步清楚了，再看 `fn2`。它绑定的是 `obj.bar`，也就是说 `fn2` 节间绑定了 `bar` 所绑定的匿名函数，好，那么也表示 `fn2` 绑定了一个匿名函数。此时执行 `fn2()`，它应该返回 `x` 的内容，也就是 `(() => this)`，但是 `fn2()` 是在全局下执行的，所以此时 `fn2` 的 `this` 应该是 `window`，那么再执行一次 `fn2()` 的结果，也就是 `fn2()()`，此时返回了 `this`，也就是 `window`。所以 `fn2()() === window` 也为 `true`。

:::

### bind 方法

`bind` 会创建一个与调用者相同函数体和作用域的函数，并且将其永久地绑定到 `bind` 的第一个参数上，无论它后续是如何调用的。同时，`bind` 只生效一次。

```js
function f() {
    return this.a;
}

var a = "a";

var g = f.bind({a: "g"});
var h = f.bind({a: "h"});

console.log(g()); // g
console.log(h()); // h
```

#### 手写 bind

手写 `bind` 方法需要注意几点：

- 它会返回一个新的函数，并且不执行
- 处理绑定的对象，如果没有应当绑定 `window`
- 支持多个参数，使用列表元素填充参数列表
- 使用 `new` 关键字进行构造时，应当有类的原型

```js
Function.prototype.myBind = function() {
    // 参数转列表
    var args = Array.prototype.slice.call(arguments);
    // 取出第一个参数，作为要 bind 的对象
    var contenxt = args.shift();
    // 保存当前 this
    var self = this;

    // 创建一个空方法
    var Fn = function() {};

    var result = function() {
        // 获取执行时的参数
        var rest = Array.prototype.slice.call(arguments);
        self.apply(this instanceof Fn ? this : contenxt, args.concat(rest));
    }

    // 通过 new 创建的，重新绑定原型链
    result.prototype = this.prototype;
    return result;
}
```

### call 方法与 apply 方法

这两个方法也可以改变 `this` 的指向，与 `bind` 不同的是，它们是立即执行方法。

它们之间的区别也很简单，`call` 接受的是一个参数列表，而 `apply` 接受的是一个包含多个参数的数组。

```js
function.call(thisArg, arg1, arg2, ...)
function.apply(thisArg, [argsArray])
```

使用 `call` 或 `apply` 都可以改变 `this` 的指向，这在很多时候都非常有用。

#### 手写 call

手写 `call` 方法需要注意的是，该方法接受的是一个参数列表：

```js
Function.prototype.myCall = function(context) {
    const ctx = context || window;
    // 获取参数列表
    var args = Array.prototype.slice.call(arguments, 1);
    ctx.fn = this;
    ctx.fn(...args);
    delete ctx.fn;
}
```

#### 手写 apply

手写 `apply` 方法需要注意的是，该方法接受的是一个包含多个参数的数组：

```js
Function.prototype.myApply = function(context, arr) {
    const ctx = context || window;
    // 获取参数数组
    if (arr && !Array.isArray(arr)) {
        throw new TypeError("参数类型不正确");
    }

    ctx.fn = this;
    ctx.fn(arr);
    delete ctx.fn;
}
```

### 构造函数

当一个函数用作构造函数时，它的 `this` 被绑定到正在构造的新对象上。

## 类上下文

`this` 在类中的表现与函数类似，因为类本身也是一种函数，在构造过程中，所有费静态方法都会被添加到 `this` 原型中。

```js
class Example {
  constructor() {
    const proto = Object.getPrototypeOf(this);
    console.log(Object.getOwnPropertyNames(proto));
  }
  first(){}
  second(){}
  static third(){} // 静态方法不会添加到 this 中。它是类本身的方法 / 属性
}

new Example(); // ['constructor', 'first', 'second']
```

### 类中的 this

和普通函数一样，方法中的 `this` 值取决于它们何时被调用。

```js
class Car {
  constructor() {
    // Bind sayBye but not sayHi to show the difference
    this.sayBye = this.sayBye.bind(this);
  }
  sayHi() {
    console.log(`Hello from ${this.name}`);
  }
  sayBye() {
    console.log(`Bye from ${this.name}`);
  }
  get name() {
    return 'Ferrari';
  }
}

class Bird {
  get name() {
    return 'Tweety';
  }
}

const car = new Car();
const bird = new Bird();

// The value of 'this' in methods depends on their caller
car.sayHi(); // Hello from Ferrari
bird.sayHi = car.sayHi;
bird.sayHi(); // Hello from Tweety

// For bound methods, 'this' doesn't depend on the caller
bird.sayBye = car.sayBye;
bird.sayBye();  // Bye from Ferrari
```

### 派生类

与普通基类不同，派生类的构造函数没有初始的 `this` 绑定，而是在构造函数中通过调用 `super()` 生成一个 `this` 绑定，从而达到派生的效果。

具体可以参考 [super 关键字](./prototype/#super-关键字)

## 原型链中的 this

对于在对象原型链上某处定义的方法，`this` 调用该方法就像在指向对象上调用一样。

```js
var o = {
  f: function() {
    return this.a + this.b;
  }
};
var p = Object.create(o);
p.a = 1;
p.b = 4;

console.log(p.f()); // 5
```

这里，对象 `p` 并没有 `f` 方法，但是其原型链中有，那么就可以直接使用，但原型链中没有 `a` 和 `b` 属性，`this` 可以始终指向 `p`，同时调用原型链上游的 `f` 属性，一切就像都在 `p` 中一样。（因为 `this` 始终是从 `p` 开始查找，所以它始终都会指向 `p`，这是原型链的特殊性）
