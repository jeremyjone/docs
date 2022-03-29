# Proxy 与 Reflect

## Proxy

`Proxy` 是一个对象，用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。

简单来说，`Proxy` 就是一个对象代理器，它可以劫持一个对象，并且当这个对象发生变化时，代理器可以同步进行一些变化操作，这也就是 `vue3` 会使用它的根本。

举个栗子：

> 我们有一个明星 `张xx`，他很忙，不可能每件事情都自己处理，所以他需要一个代理人，也就是我们平时说的经纪人。当公司A希望请该明星做代言时，公司A会无法直接联系到明星，而是联系经纪人。这个经纪人就是我们说的代理模式，他就是一个代理器。

```js
// 定义一个明星 张xx
let star = {
    name: "张xx",
    age : 25,
    phone: "138123456789"
}

// 使用 Proxy 对张xx明星进行代理
let agent = new Proxy(star, {
    // 我们在这里对代理做了一些配置：
    // 1、当寻求明星电话时，返回经纪人的电话
    // 2、当询问代言费用时，直接返回一个心理价位
    get: function(target, key) {
        if (key === "phone") {
            return "agent phone: 13555555555";
        }
        else if (key === "price") {
            return 150000;
        }
        return target[key];
    },
    set: function(target, key, val) {
        // 对报价进行一个自定义设置，如果低于了10000，那么直接报错，也就是谈崩了
        if (key === "customPrice") {
            if (val < 10000) {
                throw new Error("价格太低");
            } else {
                target[key] = val;
                return true;
            }
        }
    }
})

// test
console.log(agent.name);     // 张xx
console.log(agent.phone);    // agent phone: 13555555555
console.log(agent.age);      // 25
console.log(agent.price);    // 150000

agent.customPrice = 120000;
console.log(agent.customPrice);  // 120000

agent.customPrice = 1000; // Uncaught Error: 价格太低
console.log(agent.customPrice)  // 120000
```

可以看到，代理器可以将目标对象进行有效的保护，同时也可以对某些数据、方法进行特定的修改。

### Proxy 的语法

从上面的例子可以看出，它的语法应该是：

```js
const p = new Proxy(target, handler);
```

其中：

- target：要包装的目标对象，可以是任何类型，包括原生数组、函数、甚至是另一个代理
- handler：一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理的行为

#### 创建可撤销的 Proxy

```js
const p = Proxy.revocable(target, handler);
```

这可以创建一个可撤销的 `Proxy` 对象，创建后 `p` 结构为：

```json
{
    "proxy": proxy,   // 新生成的代理对象本身，与 new Proxy(target, handler) 生成的一样
    "revoke": revoke  // 撤销方法，直接调用它可以撤销代理
}
```

一旦某个代理对象被撤销，它将变得几乎完全不可调用，所有可代理操作都将抛出异常。同时这个代理对象也不可能被恢复到原来状态，其目标对象和处理器对象都有可能被垃圾回收掉。再次调用无任何效果。

```js
// 官方示例

var revocable = Proxy.revocable({}, {
  get(target, name) {
    return "[[" + name + "]]";
  }
});
var proxy = revocable.proxy;
proxy.foo;              // "[[foo]]"

revocable.revoke();

console.log(proxy.foo); // 抛出 TypeError
proxy.foo = 1           // 还是 TypeError
delete proxy.foo;       // 又是 TypeError
typeof proxy            // "object"，因为 typeof 不属于可代理操作
```

## Reflect

`Reflect` 是一个内置对象，它提供拦截 `JavaScript` 操作的方法。与大多数全局对象不同，`Reflect` 不是一个构造函数，所以不能通过 `new` 运算符调用，或者作为一个函数调用。`Reflect` 的所有属性和方法都是静态的，类似 `Math` 对象。

`Reflect` 提供的方法与 `Proxy` 保持完全对应，帮助我们在使用上更加便捷。

`Reflect` 的方法与 `Obejct` 的一些方法非常相似，甚至看上去是一样的，但还是存在一些差别。具体内容可以参看 [官方文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/Comparing_Reflect_and_Object_methods)。

`Reflect` 提供的方法与 `Object` 一样，可以单独使用，但通常它都是配合 `Proxy` 一起使用的。

```js
const star = { name: "张xx" };

// 以下两个效果类似
Object.getOwnPropertyNames(star1); // ['name']
Reflect.ownKeys(star); // ['name']
```

> 实际上 `Reflect.ownKeys` 的结果等于 `Object.getOwnPropertyNames` 与 `Object.getOwnPropertySymbols` 的总和。

### Reflect 的静态方法

静态方法一共 13 个。

- 1、`Reflect.apply(target, thisArgument, aargumentsList)`

  对一个函数进行调用操作，同时传入一个数组作为调用参数。与 `Function.prototype.apply()` 方法一样。

  ```js
  Reflect.apply(Math.floor, undefined, [1.75]);  // 1
  Function.prototype.apply.call(Math.floor, undefined, [1.75]);  // 1
  ```

- 2、`Reflect.construct(target, argumentsList[, newTarget])`

  对构造函数进行 `new` 操作，相当于 `new target(...args)`。这里的 `target` 如果存在 `newTarget` 则为 `newTarget`，否则就是 `target`。

  ```js
  var obj = new Foo(...args);
  var obj = Reflect.construct(Foo, args);
  ```

  同样的，它基本等效于 `Object.create()` 与 `Function.prototype.apply()` 的和。区别在于构造函数内部的 `new.target` 指向不同，前者明确指向了 `target`，而后者则为 `undefined`。[参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/construct#reflect.construct_vs_object.create)

- 3、`Reflect.defineProperty(target, propertyKey, attributes)`

  与 `Object.defineProperty()` 类似，唯一不同的就是返回 `Boolean` 值，设置成功就会返回 `true`，失败则返回 `false`。

- 4、`Reflect.deleteProperty(target, propertyKey)`

  作为函数的 `delete` 操作符，相当于执行了 `delete target[propertyKey]`。该方法同样返回一个 `Boolean` 值用于判断是否操作成功。

- 5、`Reflect.get(target, propertyKey[, receiver])`

  获取对象身上某个属性的值，类似于 `target[propertyKey]`。对于 `receiver`，如果 `target` 对象中指定了 `getter`，那么 `receiver` 则为 `getter` 调用时的 `this` 值。

  举个简单的例子：

  ```js
  var obj1 = {
      a: 1,
      b: 2,
      get add() {
          return this.a + this.b;
      }
  }

  var obj2 = {
      a: 3,
      b: 4
  }

  Reflect.get(obj1, 'add'); // 3
  Reflect.get(obj1, 'add', obj2); // 7
  ```

  那这有什么用呢？这在 `Proxy` 的 `get` 捕获器中有很多作用，最重要的是解决 `this` 指向问题。*具体看下面的捕获器的内容。*

- 6、`Reflect.getOwnPropertyDescriptor(target, propertyKey)`

  该方法类似于 `Object.getOwnPropertyDescriptor()`。如果存在该属性，则返回对应的描述符，否则返回 `undefined`。

  注意该方法第一个参数如果不是一个对象的话，那么将造成 `TypeError` 错误，而 `Object.getOwnPropertyDescriptor` 则会强制转为对象处理。

  ```js
  Reflect.getOwnPropertyDescriptor({x: "hello"}, "x"); // {value: "hello", writable: true, enumerable: true, configurable: true}
  Reflect.getOwnPropertyDescriptor([], "length"); // {value: 0, writable: true, enumerable: false, configurable: false}

  Reflect.getOwnPropertyDescriptor("foo", 0); // TypeError: "foo" is not non-null object
  Object.getOwnPropertyDescriptor("foo", 0); // { value: "f", writable: false, enumerable: true, configurable: false }
  ```

- 7、`Reflect.getPrototypeOf(target)`

  该方法几乎与 `Object.getPrototypeOf()` 一样，都是返回指定对象的原型。区别在于参数如果不是对象，则抛出 `TypeError` 异常。

  ```js
  // 如果参数为 Object，返回结果相同
  Reflect.getPrototypeOf({})  // Object.prototype
  Object.getPrototypeOf({})   // Object.prototype

  Reflect.getPrototypeOf('foo')  // Throws TypeError
  // 在 ES5 规范下，Object 抛异常；而在 ES2015 规范下，Object 强转为对象
  Object.getPrototypeOf('foo')   // String.prototype
  ```

- 8、`Reflect.has(target, propertyKey)`

  判断一个对象是否存在某个属性，并返回 `Boolean` 值，和 `in` 运算符完全相同。

- 9、`Reflect.isExtensible(target)`

  类似 `Object.isExtensible()`，判断一个对象是否可扩展。与上面类似，当 `target` 不是对象时，抛出 `TypeError` 异常，而 `Object.isExtensible` 则返回 `false`。

- 10、`Reflect.ownKeys(target)`

  返回一个包含所有自身元素的数组（不包含继承属性），类似 `Object.keys`。它等同于 `Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target))`，这样的写法更加简洁。

- 11、`Reflect.preventExtensions(target)`

  该方法阻止新属性添加到对象，与 `Object.preventExtensions()` 类似，与上面相同，它的第一个参数如果不是对象，则抛出 `TypeError` 异常，而 `Object.preventExtensions` 则会强转处理。

- 12、`Reflect.set(target, propertyKey, value[, receiver])`

  该方法将值分配给一个属性，并返回 `Boolean` 值表示成功与否。相当于 `target[propertyKey] = value`，如果成功，则返回 `true`，否则返回 `false`。

  至于 `receiver`，与 `get` 类似，遇到 `setter`，则为 `setter` 调用时的 `this` 值。举个栗子：

  ```js
  var obj1 = {
      a: 1,
      b: 2,
      set add(val) {
          this.a += val;
      }
  }

  var obj2 = {
      a: "a",
      b: "b"
  }

  Reflect.set(obj1, 'add', 1);
  console.log(obj1.a); // 2

  Reflect.set(obj1, 'add', 1, obj2);
  console.log(obj1.a); // 2
  console.log(obj2.a); // 'a1'
  ```

- 13、`Reflect.setPrototypeOf(target, prototype)`

  设置对象原型的函数，返回 `Boolean` 值表示是否成功。它与 `Object.setPrototypeOf()` 方法除了返回类型，其余是一样的。

## handler 对象

`handler` 对象是一个容纳一批特性属性的占位符对象，它包含有 `Proxy` 的各个捕获器。这些捕获器其实都类似 `Object` 的方法。所有捕获器如果没有定义，那么就是默认行为。捕获器最大的作用就是修改目标值的一系列默认动作。

> 上面例子的 `get` 和 `set` 就是其中两个捕获器。

整个 `handler` 对象支持 13 种捕获拦截，对应 `Reflect` 的方法，且方法名相同，参数相同。如果没有自定义某种捕获操作，则会默认转发到目标身上。

这里重点讨论一下常用用法，其他方法可以参考 [官方文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy#handler_%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95)。

### handler.apply()

用于拦截函数的调用操作：

- proxy(...args)
- Function.prototype.apply()
- Function.prototype.call()
- Reflect.apply()

同时：

- `target` 必须是可被调用的，它应当是一个对象，否则抛出 `TypeError` 错误

```js
var p = new Proxy(function() {}, {
  apply: function(target, thisArg, argumentsList) {
    console.log('called: ' + argumentsList.join(', '));
    return argumentsList[0] + argumentsList[1] + argumentsList[2];
  }
});

console.log(p(1, 2, 3)); // "called: 1, 2, 3"
                         // 6
```

### handler.construct()

用于拦截 `new` 操作符的相关操作：

- new proxy(...args)
- Reflect.construct()

同时：

- 用于初始化的代理目标必须具有 `[[Construct]]` 内部方法，即 `new target` 必须是有效的
- 必须返回一个对象

```js
var p1 = new Proxy(function() {}, {
  construct: function(target, argumentsList, newTarget) {
    console.log('called: ' + argumentsList.join(', '));
    return { value: argumentsList[0] * 10 };
  }
});

console.log(new p1(1).value); // "called: 1"
                              // 10


// 反例1
var p2 = new Proxy({}, {
  construct: function(target, argumentsList, newTarget) {
    return {};
  }
});

new p2(); // TypeError is thrown, "p2" is not a constructor

// 反例2
var p3 = new Proxy(function() {}, {
  construct: function(target, argumentsList, newTarget) {
    return 1;
  }
});

new p3(); // TypeError is thrown
```

### handler.defineProperty()

用于拦截对象的 `Object.defineProperty()` 操作：

- Object.defineProperty()
- Reflect.defineProperty()
- proxy.property = 'value'

同时：

- 如果目标对象不可扩展（non-extensible），则不能添加属性
- 如果属性不是目标对象自身的不可配置属性（non-configurable），则不能将其添加或修改为不可配置属性

在传递时，只有如下属性才有作用：

- enumerable
- configurable
- writable
- value
- get
- set

其余的非标准属性将被无视。

```js
var p = new Proxy({}, {
  defineProperty(target, prop, descriptor) {
    console.log(descriptor);
    return Reflect.defineProperty(target, prop, descriptor);
  }
});

Object.defineProperty(p, 'name', {
  value: 'proxy',
  type: 'custom'
});  // { value: 'proxy' }
```

### handler.deleteProperty()

用于拦截对象的删除属性操作：

- delete proxy[key]
- delete proxy.key
- Reflect.deleteProperty()

同时：

- 如果目标对象的属性是不可配置的，那么该属性不能被删除

需要注意的是，该方法必须返回一个 `Boolean` 类型的值，表示是否成功删除。

```js
var p = new Proxy({}, {
  deleteProperty: function(target, prop) {
    console.log('called: ' + prop);
    return true;
  }
});

delete p.a; // "called: a"
```

### handler.get()

用于拦截对象的读取属性操作：

- 访问属性：proxy[key]
- 访问原型链上的属性：Object.create(proxy)\[key]
- Reflect.get()

同时：

- 如果要访问的目标属性是不可写或者不可配置的，则返回的值必须与目标的值相同
- 如果要访问的目标属性没有配置访问方法（`get` 方法是 `undefined` 的），则返回值也必须是 `undefined`

```js
var p = new Proxy(target, {
    /**
     * @param target {any} 目标对象
     * @param property {string | Symbol} 被获取的属性名
     * @param receiver {Proxy} 指向 Proxy 或者继承 Proxy 的对象
     */
    get: function(target, property, receiver) {
        // ...自定义内容
    }
})
```

针对前两个参数，其实很简单，就是目标对象和键名，通过 `target[property]` 可以获取到具体的数据。但是最后一个参数就有一些复杂了，它其实是配合 `Reflect.get()` 来使用会有预期效果。主要是可以正确的将 `this` 值绑定在目标数据中。举个栗子：

```js
// 还是上面 star 的例子。做一些简化

// 定义一个明星 张xx，名字是不能随便更改的，但是可以有昵称。
// 这里 _name 表示昵称，刚开始只有真实名字，没有昵称
let star = {
    _name: "张xx",
    get name() {return this._name}
}

let agent = new Proxy(star, {
    get: function(target, key, receiver) {
        if (key === "name") {
            return target.name
        } else {
            return target[key]
        }
    }
})

console.log(agent.name); // 此时打印的是 张xx
agent._name = "爱豆"; // 此时流量上来了，大家叫他 爱豆
console.log(agent.name); // 此时打印的是 爱豆
```

这看上去好像没什么问题，但是如果我们现在又有了一个包装对象，此时要保证 `this` 值的指向，就需要用到 `receiver`：

```js
let agent = Object.create(new Proxy(star, {
    get: function(target, key, receiver) {
        if (key === "name") {
            return target.name
        } else {
            return target[key]
        }
    }
}))

console.log(agent.name); // 此时打印的是 张xx
agent._name = "爱豆"; // 此时流量上来了，大家叫他 爱豆
console.log(agent.name); // 此时打印的还是 张xx
```

最后打印出来的结果这说明 this 指向出现了偏差，这时就需要通过对应的 `Reflect` 来解决，否则自己写一个方法还是很麻烦的~

```js
let agent = Object.create(new Proxy(star, {
    get: function(target, key, receiver) {
        if (key === "name") {
            // return target.name
            return Reflect.get(target, "name", receiver)
        } else {
            return target[key]
        }
    }
}))

console.log(agent.name); // 此时打印的是 张xx
agent._name = "爱豆"; // 此时流量上来了，大家叫他 爱豆
console.log(agent.name); // 此时打印的是 爱豆
```

通过 `Reflect.get()` 可以保持 `this` 的指向。


### handler.getPrototypeOf()

它是一个代理方法，当通过如下方法读取代理对象的原型时，该方法就会被调用：

- Object.getPrototypeOf()
- Reflect.getPrototypeOf()
- __proto__
- Object.prototype.isPrototypeOf()
- instanceof

同时：

- `getPrototypeOf()` 方法返回的不是对象也不是 `null`，则会抛出 `TypeError` 异常
- 目标对象是不可扩展的，且 `getPrototypeOf()` 方法返回的原型不是目标对象本身的原型，也会抛出 `TypeError` 异常

### handler.has()

用于拦截 `in` 操作符方法的操作：

- key in proxy
- key in Object.create(proxy)
- with(proxy) {(key);}
- Reflect.has()

同时遇到如下情况，会抛出异常：

- 如果目标对象的某一属性本身是不可配置的，则该属性不能被代理隐藏
- 如果目标对象为不可扩展的，则该对象的属性不能够被代理隐藏

### handler.ownKeys()

该方法用于拦截 `Reflect.ownKeys()` 操作：

- Object.getOwnPropertyNames()
- Object.getOwnPropertySymbols()
- Object.keys()
- Reflect.ownKeys()

同时：

- 结果必须是一个数组
- 数组的元素类型必须是 `String` 或 `Symbol`
- 结果数组必须包含目标对象的所有不可配置、自有属性的 key
- 如果目标对象不可扩展，那么结果数组必须包含目标对象的所有自有属性的 key，不能有其他值

### handler.set()

该方法用于拦截设置属性值的操作：

- 指定属性值：proxy[key] = val
- 指定继承者的属性值：Object.create(proxy)\[key] = val
- Reflect.set()

同时：

- 若目标属性是一个不可写以及不可配置的属性，那么就不能改变它的值
- 如果目标属性没有配置存储方法（`set` 方法为 `undefined` 的），则不能设置它的值
- 在严格模式下，如果 `set()` 方法返回 `false`，则会抛出 `TypeError` 异常

```js
const p = new Proxy(target, {
    /**
     * @param target {any} 目标对象
     * @param property {string | Symbol} 被获取的属性名
     * @param value {any} 新的值
     * @param receiver {Proxy} 最初被调用的对象
     */
    set: function(target, property, value, receiver) {
        // 自定义内容
    }
});
```

通过 `target[property] = value` 同时配上 `return true` 来表示赋值成功。

针对 `receiver` 的作用对象，通常是 `proxy` 本身，但 `handler` 的 `set` 方法也可能在原型链上，或以其他方式被间接调用。可以理解为父类可以对子类进行一些作用：

```js
const star = {name: "张xx"};

const p = new Proxy(star, {
    set: function(target, property, value, receiver) {
        console.log(target, receiver);
        return Reflect.set(target, property, value, receiver);
    }
})

const star2 = {};
star2.__proto__ = p;

star2.name = "王xx"; // 此时触发打印：{name: '张xx'} {}，可以看到 target 指向 star，而 receiver 指向 star2
```

通常，`set` 方法可以进行对数据的验证、处理等非常有用的操作。
