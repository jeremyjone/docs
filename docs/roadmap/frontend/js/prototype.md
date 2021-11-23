# 原型和原型链详解

网上有很多相关的文章、视频等资料，但很多都是片面的，不完全的。我也为了自身加深理解，所以对其进行一下简单的总结。

## 两个属性

可以说 JavaScript 的很多特性都是基于原型和原型链展开的，这就要提到两个属性：

- `__proto__`
- `prototype`

下面先理解这两个属性。

### `__proto__` 属性

首先，它不是一个 JavaScript 的规范属性，只是浏览器方便获取对象的原型而创建的一个属性，但是它仍然需要理解。

_它并不被推荐直接使用，而是使用其他方法代替，这个后面说。_

> **该属性服务于对象实例，指向创建实例的构造函数的原型对象**

我们从下面几个方面理解：

#### 1、它保存着继承关系

大多数情况下，每一个对象都包含 `__proto__` 属性，我们可以通过它来查看一个对象的从属关系。

一个简单的例子：

```js
let arr = [];
```

<img :src="$withBase('/assets/roadmap/frontend/prototype/arrexample.png')" alt="">

其中，`arr` 是我们创建的一个对象，它是一个数组。我们都知道数组有内置方法，但是我们创建的 `arr` 并没有给出，于是它调用了父级的 `Array` 构造器成功创建了数组对象。而其父级内容，还有父级，它是一个 Object 对象。

至此，一个简单的 `arr` 对象实例创建完成，它具有三层继承关系。

#### 2、对象中也可以不包含该属性

上面讲到了绝大对数情况。但有时候，一个对象也可以不包含该属性，比如：

```js
// 1
var obj = { name: "jeremyjone" }; // 包含 __proto__

// 2
var obj2 = Object.create(null, { name: { value: "jeremyjone" } }); // 纯属性对象，只有 name 字段
```

类似上述方法 2，创建的对象是没有原型的，它仅仅是一个具有 `name` 字段的属性对象。

<img :src="$withBase('/assets/roadmap/frontend/prototype/noproto.png')" alt="">

#### 3、它是一个对象

在创建一个对象时，`__proto__` 会引用父级原型的 `prototype` 属性。对于对象继承时，直接使用它的属性；而对于函数继承时，可以通过调用它的 `apply` 方法来执行函数。

<img :src="$withBase('/assets/roadmap/frontend/prototype/protoclone.png')" alt="">

```js
function User() {}
```

<img :src="$withBase('/assets/roadmap/frontend/prototype/protoapply.png')" alt="">

在创建对象的过程中，`__proto__` 属性本身会做判断，如果给该属性赋一个非对象的值，它将是无效的，因为该属性在顶层可以看到，它是一个属性访问器。

所以，它本身可以算作一个对象。更严格的说，它是一个对象属性访问器（getter / setter）。

<img :src="$withBase('/assets/roadmap/frontend/prototype/protovalueisobject.png')" alt="">

### `prototype` 属性

它是 ECMAScript 的一个标准属性，也是继承机制里面非常重要的一个属性。

> **该属性服务于原型（构造器），包含了可以被继承的所有属性/方法**

我们从下面几方面理解：

#### 1、它是函数的一个属性

每一个 JS 函数都包含一个 `prototype` 属性。我们都知道 JS 的类是基于 Function 的，所以该属性也成为了继承机制的重要方式。

```js
function User() {}

console.log(User.prototype);
```

<img :src="$withBase('/assets/roadmap/frontend/prototype/funsprototype.png')" alt="">

可以看到 User 对象中的原型 `prototype` 中包含一个构造方法。

这个构造方法 `constructor` 尤为重要，尤其是在手动编写继承代码时，一定要注意它。

#### 2、它是一个可以被继承的对象

当初 Brendan Eich 为了解决继承问题，设置了两个属性：

- `constructor`：将不需要共享的属性和方法，放在构造函数中。
- `prototype`：将需要共享的属性和方法，放在 prototype 对象中。

也就是说，我们现在使用 `new` 关键字创建的对象，其实 `new` 后面跟的是对象的构造函数，而不是类。

而创建的对象，直接引用了 `prototype` 中的属性，也就相当于“继承”了父类属性和方法。

所以，当使用 `new` 关键字时，使用的都是该属性。这也是我们在往原型中添加属性时，为啥使用该属性的原因。

### 它们之间的关系

上面提到，实例的对象，直接引用 `prototype`，同时 `__proto__` 保存着该对象的构造函数的 `prototype`。

那么，实例对象则会有如下等式：

```js
obj.__proto__ === obj.constructor.prototype; // true
```

那么扩展开来，对于系统构造函数，它有如下等式：

```js
let arr = [];
arr.__proto__ === Array.prototype;

let str = "";
str.__proto__ === String.prototype;

// ...Object、RegExp等都同理
```

针对自定义的对象，则有：

```js
function User() {}
let user = new User();

user.__proto__ === user.constructor.prototype; // true
user.__proto__ === User.prototype; // true
```

这也验证了上面着重要理解的两句话：

- `__proto__` 属性作用于对象，它服务于对象实例
- `prototype` 属性作用于原型（构造器）

#### constructor 的作用

它是一个构造方法，在 JS 的每一个函数中都会默认有这样一个构造方法。每当 new 出来一个对象，这个函数就会被当成一个原型，每一个实例对象的 `__proto__` 属性也都会指向该函数的原型。

我们也可以通过实例对象的 `__proto__` 属性找到构造函数，从而继续 new 出来其他相关对象。

```js
function User() {}

let user1 = new User();

let constructor = user.__proto__.constructor;
let user2 = new constructor();

console.log(User === constructor); // true
console.log(user1.__proto__ === user2.__proto__); // true
```

上例中，其实也就说明了原型的构造函数就是原型本身。

```js
// 接上例
console.log(User.prototype.constructor === User); // true
```

这在平时我们需要通过对象实例创建新对象时，将会很有用。

## 原型和原型链

理解继承，首先要搞懂什么是原型和原型链。

### 理解原型和原型链

上面已经介绍了关于原型的两个属性：

- `__proto__`
- `prototype`

那么这里就可以推导出：

1、什么是原型

> 原型即一个对象的构造器(`prototype`)，可以通过该原型构造器创造无数实例，每一个实例都具有指向该原型的属性(`__proto__`)。

2、什么是原型链

> 在对象中通过原型，一层一层向上查找父级引用，直到没有父级(null)。整个这条引用链，即为原型链。原型链定义了对象可以继承的的属性/方法和相互之间的关系。

### 理解原型继承

有了这两个概念，尝试理解一下原型继承。

#### 回到最开始的例子

让我们重新来看一开始那个数组的例子：

```js
let arr = [];
```

我们尝试使用数组的方法：

```js
arr.concat(["jeremyjone"]);
```

它会成功，但是我们并没有给 `arr` 添加 `concat` 的方法。它调用的是其父级 --也就是 Array 构造器-- 中的方法。

<img :src="$withBase('/assets/roadmap/frontend/prototype/arrconcatexample.png')" alt="">

这其实就是继承。我们创建的 `arr` 数组实例，调用了其原型链父级的方法。

#### 一个原型继承的例子

如果是函数呢？再来看一个例子：

```js
function User() {}
```

这时候我们都知道这个 User 没有方法任何自己的方法。

<img :src="$withBase('/assets/roadmap/frontend/prototype/emptyuser.png')" alt="">

万物都是从 Object 继承的。此时，User 也是从 Object 继承的。

那么现在给 Object 添加一个方法：

```js
Object.prototype.print = function() {
  console.log("Hi jeremyjone, this is Object print.");
};
```

##### 原型本身也可以继承

我们首先尝试让 User 调用这个 print 方法，要明确 User 是一个原型，但是当我们直接使用 User 的时候，它本身也是一个对象：

<img :src="$withBase('/assets/roadmap/frontend/prototype/usercallprint.png')" alt="">

没有错，它可以被调用。这说明在原型链上，是可以找到该方法，这说明了 User 确实是从 Object 继承的。

<img :src="$withBase('/assets/roadmap/frontend/prototype/userextendobject.png')" alt="">

从图中可以看到在继承的原型中有 `print` 方法，即有如下等式关系：

```js
User.__proto__.__proto__ === Object.prototype; // true
```

##### 原型创建的实例来继承

同样还是刚才的例子，现在我们实例化一个 user，那么 User 现在作为一个原型，被 user 实例对象继承：

```js
// 接上例
let user = new User();
```

这样得到一个 user 实例。它也可以使用其原型属性和方法。

<img :src="$withBase('/assets/roadmap/frontend/prototype/userobjectproto.png')" alt="">

该 user 实例中，只有一个 `__proto__` 属性，它指向了其原型，也就是 `User.prototype`，而其原型的父级正是 Object，即：

```js
user.__proto__ === User.prototype; // true
user.__proto__.__proto__ === Object.prototype; // true
```

这个例子也印证了我们上面提到的 `__proto__` 属性是作用于对象的。所以，实例和原型的 `__proto__` 的值是不一样的：

```js
user.__proto__ === User.__proto__; // false
```

同时也可以得出，最顶级的 Object 一定是一致的（Object 里面确实比较混乱，可以不用考虑），即：

```js
user.__proto__.__proto__ === User.__proto__.__proto__; // true。它们都指向 Object.prototype
```

针对该例子，可以作如下理解：

<img :src="$withBase('/assets/roadmap/frontend/prototype/userexampleimage.png')" alt="">

### 原型链中的优先级

现在我们知道，对象的属性/方法都是一层一层向上查找，那么如果遇到相同的内容，它的优先级是如何的呢？

举一个例子：

```js
function User(name) {
  this.name = name;
}

let user = new User("jeremyjone");
```

现在创建了一个对象，并生成一个对象实例，它现在的样子应该是：

<img :src="$withBase('/assets/roadmap/frontend/prototype/createuser.png')" alt="">

现在往 Object 的原型中添加几个属性：

```js
Object.prototype.a = "a";
Object.prototype.b = "b";
Object.prototype.c = "c";
```

添加之后，这条原型链应该是这样的：

<img :src="$withBase('/assets/roadmap/frontend/prototype/createuseraddabc.png')" alt="">

根据上面提过的，现在：

```js
console.log(user.a); // "a"
console.log(user.b); // "b"
console.log(user.c); // "c"
```

应该是可用的。

现在分别修改值：

```js
user.a = "aa"; // 修改 user 对象的 a 属性
User.b = "bb"; // 修改 User 模型的 b 属性
User.prototype.c = "cc"; // 修改 User 原型的 c 属性
```

其结果如下：

```js
console.log(user.a); // "aa"
console.log(user.b); // "b"
console.log(user.c); // "cc"

console.log(User.a); // "a"
console.log(User.b); // "bb"
console.log(User.c); // "c"
```

分析一下三条执行语句：

1、当执行 `user.a = "aa"` 语句时，`user` 对象中没有 `a` 属性，所以添加了一个值为 `"aa"` 的 `a` 属性。这样，当读取 `a` 属性时，就不会从原型中查找。

2、而 `User.b = "bb"` 语句是给 `User` 模型添加一个属性，该属性没有添加在原型中，而是添加在了 `constructor` 中，根据上面我们讲过的内容，`constructor` 保存私有属性/方法，而 `prototype` 保存共享的属性/方法，所以 `User.b` 属于私有，并不被 `user` 所继承。

3、最后 `User.prototype.c = "cc"` 语句，是在 `User` 的原型中添加一个值为 `cc` 的 `c` 属性，所以它可以被继承到 `user`，也就有了打印的结果。

现在对象 user 的原型如下：

<img :src="$withBase('/assets/roadmap/frontend/prototype/modifyvaluea.png')" alt="">

而 User 的原型如下：

<img :src="$withBase('/assets/roadmap/frontend/prototype/modifyvalueb.png')" alt="">

图中可以看到和分析的一致。

这与主流语言的继承相似，即当前对象属性/方法的优先级最高。隐约看到了多态的影子~

### 操作对象的原型关系

前面说不建议直接操作 `__proto__` 属性，那么我们需要通过更规范的方式进行操作，用到两个方法：

- `Object.setPrototypeOf`
- `Object.getPrototypeOf`

除了名字长一些，其实还是很规范的。

#### Object.setPrototypeOf

该方法修改对象的原型关系，可以变更当前对象的从属关系。

```js
let a = { a: "-a" };
let b = { b: "-b" };

Object.setPrototypeOf(a, b); // 将 a 从属于 b
// 这等同于 a.__proto__ = b;
```

得到如下关系：

<img :src="$withBase('/assets/roadmap/frontend/prototype/ainb.png')" alt="">

这样就改变了两个对象之间的从属关系，那么现在 `a` 已经继承了 `b` 的属性：

```js
console.log(a.b); // -b
```

#### Object.getPrototypeOf

使用该方法可以查看一个对象的原型。

```js
// 续上例
Object.getPrototypeOf(a) === a.__proto__; // true

console.log(Object.getPrototypeOf(a)); // {name: "bb", b: "-b"}
```

<img :src="$withBase('/assets/roadmap/frontend/prototype/ainbproto.png')" alt="">

### 原型链的检测

#### instanceof 运算符

使用 `instanceof` 运算符，可以向上查找原型链中的从属关系。

```js
function A() {}
function B() {}

let a = new A();
let b = new B();

console.log(a instanceof A); // true
console.log(a instanceof B); // false
console.log(a instanceof Object); // true
```

稍微改变一下：

```js
// 接上例
A.prototype.__proto__ = B.prototype; // 修改 A 的原型关系，现在 B 是 A 的父级

console.log(a instanceof A); // true
console.log(a instanceof B); // true
console.log(a instanceof Object); // true
console.log(b instanceof B); // true
console.log(b instanceof A); // false
```

可以看到，当 A 的原型链发生改变的时候，下面的判断也会发生改变，a 已经从属于 B 了。

甚至我们添加方法，也可以使用了：

```js
a.show(); // 报错，因为没有方法

B.prototype.show = function() {
  console.log("B show");
};

// 此时，对象 a 可以调用 show 方法了。它在原型链中
a.show(); // B show
```

#### Object.isPrototypeOf 方法

作为与上面 `instanceof` 运算符的区别，使用 `Object.isPrototypeOf` 方式，可以明确检测一个**对象**是否在另一个对象的原型链上。

```js
let a = {};
let b = {};
let c = {};

Object.setPrototypeOf(a, b);

console.log(a.isPrototypeOf(b)); // false
console.log(b.isPrototypeOf(a)); // true
console.log(c.isPrototypeOf(a)); // false
console.log(Object.prototype.isPrototypeOf(a)); // true
console.log(Object.isPrototypeOf(a)); // false
```

#### 检测是否存在属性/方法

##### in 运算符检测原型链

使用 `in` 运算符检测原型链中是否存在属性/方法，该方法会在原型链中逐级检测。

```js
let a = { name: "jeremyjone" };
Object.prototype.url = "jeremyjone.com";

console.log("name" in a); // true
console.log("a" in a); // false
console.log("url" in a); // true
```

##### Object.hasOwnProperty 方法检测

使用 `Object.hasOwnProperty` 方法只检测当前对象的属性。

```js
let a = { name: "jeremyjone" };
Object.prototype.url = "jeremyjone.com";

for (const key in a) {
  if (a.hasOwnProperty(key)) {
    console.log(a[key]);
  }
}
// 只有一条 "jeremyjone"
```

## JS 中的继承

首先明确，JS 中的继承是原型继承。有了上面的前置知识，我们可以深入理解 JS 中的原型继承了。

### 继承不是改变原型的事

我们现在创建一个 User：

```js
function User() {
  this.name = "User";
}

let user = new User();
```

它可以表示为：

<img :src="$withBase('/assets/roadmap/frontend/prototype/extend01.png')" alt="">

> 1、当声明一个 User 模型时，系统会自动给出这个模型和其对应的原型 `prototype`，并将原型的父级指向全局的 Object 原型。
>
> 2、实例化 user 的时候，系统会生成一个对象实例，同时将其父级指向 User 的原型。
>
> 3、此时，user 实例处于一个三层的原型链中：`user -> User.prototype -> Object.prototype`

```js
user.__proto__.__proto__ === Object.prototype; // true
```

我们现在希望添加几个基于 User 的模型：

```js
function Admin() {
  this.name = "Admin";
}

function Member() {
  this.name = "Member";
}

function Guest() {
  this.name = "Guest";
}
```

它们现在的父级都是 Object，如何将这些模型的父级指向 User 呢？

可能很容易想到，使用：

```js
Admin.prototype = User.prototype;
Member.prototype = User.prototype;
Guest.prototype = User.prototype;
```

的方式，然后我们看一下继承的效果：

```js
// 我们给 User 的原型添加一个方法
User.prototype.show = function() {
  console.log("show function");
};

// 看看实现继承没有
let admin = new Admin();
admin.show(); // show function
```

成功调用了 show 方法。

它看似很好，但是这样的操作其实也会导致问题：

```js
// 比如我们现在需要在不同角色里面分别设置一个 role 的方法
Admin.prototype.role = function() {
  console.log("admin role");
};

Member.prototype.role = function() {
  console.log("member role");
};

Guest.prototype.role = function() {
  console.log("guest role");
};

// 再来执行一下
admin.role(); // guest role
```

很显然，这并不是我们期望的结果。原因在于这三个模型的原型都是 User，它们同时设置了 role 方法，那么结果就是谁在最后，这个方法就是谁。

它可以表示为：

<img :src="$withBase('/assets/roadmap/frontend/prototype/extend02.png')" alt="">

从图中可以看到，模型已经抛弃了它自身的原型，直接指向了父级，也就是 User 的原型。所以，当模型需要单独修改原型属性/方法时，就会同时叠加到 User 的原型中，那么所有公用 User 原型的对象，都将受到影响，这就是**原型的改变**，它不是继承。

### 继承是原型的继承

#### 修改父级引用

那么如何正确操作，不修改原型呢？其实前面在说 `instanceof` 时已经用到了：

```js
// 接上例，将原型赋值改为如下
Admin.prototype.__proto__ = User.prototype;
Member.prototype.__proto__ = User.prototype;
Guest.prototype.__proto__ = User.prototype;
```

将它们原型的父级指向 User 的原型，它们可以表示为：

<img :src="$withBase('/assets/roadmap/frontend/prototype/extend03.png')" alt="">

我们同样执行以下上面例子的代码：

```js
// 接上例
admin.role(); // admin role

let member = new Member();
member.role(); // member role

let guest = new Guest();
guest.role(); // guest role
```

这样，它们各自的方式都属于它们自己，而不会修改 User 的原型。

#### 创建新的原型

还有一种改变方式，通过 `Object.create()` 方法来创建一个新的原型对象，该方法可以使用第一个参数对象作为新对象的原型。

所以，我们还是以 Admin 为例，可以如下操作：

```js
function User() {}
function Admin() {}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.role = function() {}; // 需要在 Object.create 方法之后执行
```

这样也可以做到 Admin 继承自 User。

##### 新建原型的语句顺序

像上例中的最后一句，因为新建原型等于给 Admin.prototype 重新赋值，所以其自有属性/方法都应该在此语句之后。如果把新建原型语句放在最后，那么所有其他方法都将找不到。

##### 新建原型对已创建对象的影响

还是根据上例，假设我们现在作如下实现：

```js
function User() {}
function Admin() {}

let admin = new Admin(); // 在修改之前创建实例

Admin.prototype = Object.create(User.prototype);
Admin.prototype.role = function() {};

admin.role(); // 报错，找不到 role
```

我们在新建原型语句之前创建一个实例对象，那么无论之后如何修改原型，admin 对象都不会跟着改变。

它可以表示为：

<img :src="$withBase('/assets/roadmap/frontend/prototype/extend04.png')" alt="">

##### 新建原型中的构造函数

在新建的原型中，会发现没有构造函数，但是它仍然可以正常工作，因为它继承了父级的构造方法。

在创建新原型之后，不要忘记添加当前的构造函数，这一点是一定的，这会避免很多意想不到的问题。

```js
Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin; // 添加构造函数
```

添加上了构造函数就可以了么？并没有，你还需要为构造函数设置为不可遍历，那么就要用到 `Object.defineProperty` 方法：

```js
Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Object.defineProperty(
  Admin.prototype,
  "constructor",
  {
    value: Admin,
    enumerable: false // 设置不可遍历
  }
);
```

### 基类的调用

既然是继承，那么肯定会有父类的方法调用。JS 中的调用方式如下：

```js
// 定义基类
function User(name, age) {
  this.name = name;
  this.age = age;
}

// 定义一个基类方法
User.prototype.show = function() {
  console.log(this.name, this.age);
};

// 定义子类
function Admin(name, age) {
  // 不能使用这样的方式，在 JS 中会有 this 的指向问题
  // User(name, age);

  // 通过 call 方法传入指向
  User.call(this, name, age);
}
Admin.prototype.__proto__ = User.prototype;

let admin = new Admin("jermeyjone", 20);
admin.show(); // jeremyjone 20
```

因为 this 指向问题，需要用到 call 方法。当然，参数较多时，还可以使用 apply 方法。

```js
function Admin(...args) {
  User.apply(this, args);
}
```

## ES6 的语法糖 - 类(class)

ES6 有了更加清晰明确的面向对象的关键字，但其实它们只不过是经过修饰的语法糖。

### 类的基础概念和语法

我们之前在原型链中创建一个对象，需要使用函数的形式，然后在其原型中添加方法/属性，最后通过 `new` 关键字来创建实例。

```js
function User(name) {
  this.name = name;
}
User.prototype.show = function() {
  console.log("Hi, " + this.name);
};

let user = new User("jeremyjone");
user.show(); // Hi, jeremyjone
```

那么在 ES6 之后，我们可以使用类的方式：

```js
class User2 {
  constructor(name) {
    this.name = name;
  }

  show() {
    console.log("Hi, " + this.name);
  }
}

let user2 = new User2("jeremyjone");
user2.show(); // Hi, jeremyjone
```

看上去确实清晰了很多。需要明确几点：

- 1、`constructor` 是一个构造函数，创建对象时会自动调用。即使你不写，它也默认存在。
- 2、所有写在 `constructor` 中的属性都是实例属性，是定义在实例中的。那么相对的，在 `constructor` 之外的属性，都是定义在类中的，也就是原型属性。
- 3、`this` 指向的是调用的实例对象，静态方法指向类本身。
- 4、子类使用构造器时，必须使用 `super` 关键字来扩展构造器，并且需要先调用 `super`。
- 5、子类会覆盖父类同名属性/方法，这与原型优先级一致。如果需要使用父类属性/方法，使用 `super` 关键字。
- 6、使用 `static` 关键字标明类属性/方法，它们无法在实例中使用，而是通过类直接调用的。

### 类与原型的关系

为了深入理解，首先来看一下它们的原型结构：

<img :src="$withBase('/assets/roadmap/frontend/prototype/class1.png')" alt="">

看上去差不多，只是一个标记为函数，一个标记为类。

测试一下发现：

```js
// 接上例
user2.__proto__ === User2.prototype; // true
User2.prototype.constructor === User2; // true
```

这也符合我们之前说过的原型方式，所以 `class` 本质上还是一个函数，只不过是一个语法糖，一个原型的另一种写法而已。

在此基础上，我们甚至可以通过原型的方式来修改/新增方法：

```js
// 接上例
User2.prototype.print = function() {
  console.log("hello, " + this.name);
};

user2.print(); // hello, jeremyjone
```

### 实例属性和原型属性的分别

上面提到，`constructor` 属性内的是实例属性，之外的是原型属性，可以使用之前提到的检测方法来实践：

```js
// 接上例
// 检测自身属性
console.log(user2.hasOwnProperty("name")); // true
console.log(user2.hasOwnProperty("print")); // false

// 检测原型属性
console.log("name" in user2); // true
console.log("print" in user2); // true
```

可以看到实例中自身只有 name 属性，而 print 方法确实在其原型链中可以被找到。

### 类的静态方法/属性

通过关键字 `static` 可以声明一个静态方法/属性。和其他语言一样，静态方法/属性只会挂载到类中，而不会通过类创建的实例调用。

```js
class User {
  static type = "JZ";

  constructor(name) {
    this.name = name;
  }

  show() {
    console.log("show: " + this.name);
  }

  static print() {
    console.log("static print by: " + this.type); // 静态方法里的 this 指向类本身
  }
}

let user = new User("jeremyjone");

// 实例调用类方法
user.print(); // 报错。找不到对象方法

// 使用类方法
User.print(); // static print by: JZ
```

### 类的继承

ES6 中通过 `extends` 关键字来实现类之间的继承。

```js
// 接上例
class Child extends User {} // 最基本的继承

let child = new Child("child jz");
child.show(); // show: child jz
```

同时，静态属性/方法是会被继承的。

```js
// 接上例
Child.print(); // static print by: JZ
```

### super 关键字

在继承过程中，经常会看到 `super` 关键字，它有两个作用：

- 1、子类调用构造函数 `constructor` 时，必须在构造函数内部先调用 `super` 关键字，然后才可以使用 `this` 对象。
- 2、子类同名方法会覆盖父类方法，这时使用 `super` 关键字可以调用父类方法。

#### 构造函数中使用 super

```js
// 接上例
// 错误示例
class Child2 extends User {
  constructor() {} // 空
}

// 当子类调用了构造函数，却没有在内部使用 super，新建实例会报错
let child2 = new Child2("c2"); // 报错
```

<img :src="$withBase('/assets/roadmap/frontend/prototype/constructornosuper.png')" alt="">

所以需要在使用到 `this` 地方之前，调用一下 `super`。

```js
// 接上例
// 正确示例
class Child2 extends User {
  constructor(name) {
    super(name);
  }
}

let child2 = new Child2("c2"); // 正确
```

#### 调用父级属性/方法

作为对父类的扩展，有时候需要覆写父类，但是又需要用到父类的功能，这时可以在子类中使用 `super` 调用父类功能作为子类方法的一部分。

```js
// 接上例
class Child3 extends User {
  show() {
    console.log("Blessings from child3");
    super.show();
  }
}

let child3 = new Child3("c3");
child3.show();
// Blessings from child3
// show: c3
```

#### super 指向哪里

ES6 给我们提供的 `super` 会指向父级的原型。所以我们可以通过 `super` 找到其原型链中的所有属性/方法，但是无法找到 `static` 方法/属性。

举一个例子，我们可以将上面的例子转换为：

```js
// 修改上例
class Child3 extends User {
  show() {
    console.log("Blessings from child3");
    // super.show();
    // 转换为如下方式：
    User.prototype.show.call(this, this.name);
    // 或者：
    this.__proto__.show.call(this, this.name);
  }
}

let child3 = new Child3("c3");
child3.show();
// Blessings from child3
// show: c3
```

从上面可以看到，其实 `super` 就是指向了原型，同时给我们提供了 `this` 的指向。

## 总结

到此为止，基于 JS 的原型和原型链的内容基本就总结完毕了，学习 JS 一定要搞明白原型的内容。JS 的灵活之处就在于原型和原型链，其继承的方式也基于此，之后的类的概念也是在此基础上的。

总之，这段内容还是要多多练习领悟，才能通透。
