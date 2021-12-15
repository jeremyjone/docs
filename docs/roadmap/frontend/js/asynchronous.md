# 异步编程

## 异步的由来与实现

JS 在设计之初就是单线程的，所以本质上并不存在异步编程。在经过不断的进化和改良之后，现在所谓的异步编程也只是利用任务队列来改变事件的触发顺序，从而在效果上达到异步。

### 一个生活中的例子

好比我们要吃饭，那就要先做饭，假设焖米饭需要 20 分钟，炒个菜需要 10 分钟。

如果我们一步一步来（全部我们自己动手）：

- 1、焖米饭（20 分钟）
- 2、炒菜（10 分钟）
- 3、吃饭

很显然，我们需要 30 分钟才可以吃到饭。

如何加快速度呢？我们可以使用电饭锅来焖米饭。那现在就是：

- 1、焖米饭（电饭锅用时 20 分钟）
- 2、炒菜（自身用时 10 分钟）
- 3、吃饭

我们一开始将焖米饭的事情丢给电饭锅去做，我们只需要关心炒菜这个事情了。等电饭锅做好了饭，它会告诉我们。这样一来，我们要吃上饭，只需要等待 20 分钟，缩短了 10 分钟。

### 由生活到代码的转换

上面这个例子体现了异步带来的好处。我们自身就是主线程，而电饭锅就是一个任务队列的任务，它会自己处理自己的事情，我们并不需要关心，只需要等待结果即可。就像我们请求后台任务，等待返回结果即可，此时我们的主线程不需要等待结果，还可以做其他事情，有了结果再调用一下就可以了。

上张图说明关系：

<img :src="$withBase('/assets/roadmap/frontend/js/taskqueueexample.png')" alt="taskqueueexample.png">

上例转换代码：

```js
console.log("我要开始做饭了。");

// 焖米饭，饭好了就可以开饭了
setTimeout(() => {
  console.log("米饭焖好了，可以开饭了。");
}, 2000); // 以2秒替代20分钟

// 炒菜，主线程一直在炒菜
console.log("开始炒菜。");
```

上例的结果：

```js
我要开始做饭了。
开始炒菜。
米饭焖好了，可以开饭了。
```

### 异步操作的执行顺序

上例确实是我们想要的结果，但是没有体现出来炒菜的时间。假设现在炒菜用 30 分钟呢？会不会在 20 分钟的时候就告诉我们可以开饭了呢？

这就要说到异步操作的执行顺序了。

在 JS 中，有如下执行顺序规则：

- 主线程优先级最高
- 主线程执行完毕之后，轮询微任务队列并执行
- 最后轮询宏任务队列并执行

这里引入了两个概念：`微任务` 和 `宏任务`，我们稍后介绍。

我们对上例中的代码稍加修改：

```js
console.log("我要开始做饭了。");

// 焖米饭，饭好了就可以开饭了
setTimeout(() => {
  console.log("米饭焖好了，可以开饭了。");
}, 2000); // 以2秒替代20分钟

// 炒菜，让它在主线程中运行一段时间，使用循环模拟
console.log("开始炒菜。");
for (let i = 0; i < 10000000; i++) {
  console.log(" ");
}
console.log("菜炒好了。");
```

运行的结果显示，它并不会影响“米饭焖好了”在最后调用。这也证明了执行顺序是正确的。

#### 宏任务

JS 中的宏任务有以下几种方式：

- setTimeout
- setInterval
- I/O
- script

当主线程遇到它们时，会创建一个宏任务，并按时间丢到宏任务队列中去。

#### 微任务

JS 中的微任务有以下几种方式：

- Promise
- process.nextTick

同样的，主线程遇到它们也会创建一个微任务，并丢到微任务队列中。

#### 事件循环

在同一次事件循环（event loop）中，永远基于上面提到的执行顺序：主线程 > 微任务 > 宏任务。

<img :src="$withBase('/assets/roadmap/frontend/js/eventloop.png')" alt="eventloop.png">

##### 举个简单的例子

看如下代码深入理解：

```js
console.log("main start");

// 宏任务
setTimeout(() => {
  console.log("setTimeout 1");
});

// 微任务
new Promise((resolve, reject) => {
  console.log("promise 1"); // Promise 中的代码是同步代码
  resolve("resolve"); // 回调
  console.log("promise 2");
}).then( // 接收回调，这里属于
  val => console.log(val),微任务
  err => {}
);

console.log("main end");
```

代码经过运行，它的执行结果如下：

```js
main start
promise 1
promise 2
main end
resolve
setTimeout 1
```

这是比较基本的循环。如果在微任务或者宏任务中再添加微任务/宏任务的话，就会按照事件循环的执行顺序，依次调用执行。

##### 复杂一些的例子

网上看到一个比较复杂的题，图解很详细，我就直接贴过来了：

```js
setTimeout(() => console.log("setTimeout1"), 0); //1宏任务
setTimeout(() => {
  //2宏任务
  console.log("setTimeout2");
  Promise.resolve().then(() => {
    console.log("promise3");
    Promise.resolve().then(() => {
      console.log("promise4");
    });
    console.log(5);
  });
  setTimeout(() => console.log("setTimeout4"), 0); //4宏任务
}, 0);
setTimeout(() => console.log("setTimeout3"), 0); //3宏任务
Promise.resolve().then(() => {
  //1微任务
  console.log("promise1");
});
```

<img :src="$withBase('/assets/roadmap/frontend/js/eventloop1.png')" alt="eventloop1.png">

<img :src="$withBase('/assets/roadmap/frontend/js/eventloop2.png')" alt="eventloop2.png">

这个例子还是很有特点的，要搞明白了它，就对事件循环没什么难理解的了。

## Promise

由于 JS 的单线程和任务队列，造成了很多函数嵌套，当这种嵌套激增，就会造成所谓的 `回调地狱`，这是我们深恶痛绝的。

### 创建一个 Promise

基于几方面原因，JS 催生了 `Promise`，它解决了很多问题。先看用法：

```js
new Promise(
  (
    resolve, // 成功状态回调
    reject // 失败状态回调
  ) => {
    // 执行体
  }
);
```

这是一个最基本的创建一个 Promise 的方式。

### Promise 的状态

Promise 官方定义了三种状态：

- pending：准备阶段
- fulfilled：完成，可以理解为成功
- rejected：失败，理解为失败

当一个 Promise 被创建之后，它的状态是 `pending`，此时会执行 `执行体` 的内容。

当遇到回调时：

- `resolve` 会将 Promise 的状态改为成功（fulfilled）
- `reject` 会将 Promise 的状态改为失败（rejected）

`resolve()` 和 `reject()` 在同一执行体时，只有第一个会被执行。

```js
new Promise((resolve, reject) => {
  // ... 执行逻辑
  resolve("succeed");
});
```

> 可能有些人会有疑问了，好像还见过 `resolved` 状态。这里解释一下，它不是标准状态。总的来说，一个 Promise 被创建之后，一定是 `pending`，之后无论执行了 `resolve()` 还是 `reject()`，状态都属于 `resolved`，它表示已处理，不会再改变的状态。所以，`fulfilled` 与 `rejected` 都属于 `resolved` 的一种状态。

总结如下：

```text
pending -> resolve() -> fulfilled -> resolved
pending -> reject() -> rejected -> resolved
```

只有当改变 Promise 状态的时候，才会创建微任务，也就是只有当执行到 `resolve()` 或 `reject()` 时，才会有微任务生成。

#### Promise 状态的中转

`resolve()` 和 `reject()` 方法如果返回一个值，它会按照上面的逻辑改变状态。但是返回的是一个 Promise 呢？此时它将返回该 Promise 的状态，而与自身无关。

```js
const p1 = new Promise((resolve, reject) => {
  reject("failed");
});

new Promise((resolve, reject) => {
  resolve(p1); // 虽然我们调用的是成功回调，但是它返回的是 p1 的失败状态
}).then(
  val => console.log("val: " + val),
  err => console.log("err: " + err)
);
```

此时，其打印的应该是：

```js
err: failed;
```

## 使用 then 处理 Promise 的返回状态

上面已经创建了一个 Promise，回调时需要通过 `then` 方法。

它接收两个参数，一个成功，一个失败。

```js
console.log("start");

let promise = new Promise((resolve, reject) => {
  console.log("promise");
  resolve("succeed");
}).then(
  val => console.log("val: " + val),
  err => console.log("err: " + err)
);

console.log("end");
```

现在应该很明显可以看出来，它的执行结果应该是：

```js
start;
promise;
end;
val: succeed;
```

### then 的链式操作

一个 Promise 可以有多个 `then`，这是链式的，这也就解决了我们之前的 `回调地狱` 的问题。

那么为什么 `then` 可以是链式操作呢？ 因为一个 `then` 本身也会返回一个 Promise，同时默认执行的是成功状态。

简单理解，**就是一个 `then` 仅仅是对前面的 Promise 的状态的处理**。遇到多个 `then` 时，仅仅是把当前 `then` 前面的内容看成一个 Promise 即可。

#### then 状态的传递

如果前一个 `then` 没有处理对应的状态，那会该状态会自动坠入后面一个 `then`，这样的方式有点像 `try...catch`：

```js
new Promise((resolve, reject) => {
  reject("failed");
})
  .then(val => console.log("val: " + val))
  .then(null, err => console.log("err: " + err));
```

很显然，失败状态由第二个 `then` 来接收。

#### then 值的传递

如果我们需要在前一个 `then` 里面处理数据，然后传递给后面一个 `then`，我们可以通过 `return` 来进行传递：

```js
new Promise((resolve, reject) => {
  resolve();
})
  .then(
    val => {
      return "jeremyjone";
    },
    err => {}
  )
  .then(val => console.log(val));
```

此时，我们得到的打印应该是前一个 `then` 返回的值。

这样的方式提供了链式操作中，分批分次处理数据的需求。

#### 改变 then 的默认状态

前面提到 `then` 默认返回成功状态，这是它返回一个值的时候。但是当它本身 `return` 了一个 Promise，则会根据当前返回的 Promise 的状态来向下坠入。

```js
new Promise((resolve, reject) => {
  resolve();
})
  .then(val => {
    return new Promise((resolve, reject) => {
      reject("failed");
    });
  })
  .then(
    val => console.log("val: " + val),
    err => console.log("err: " + err)
  );
```

此时打印的将会是：

```js
err: failed;
```

这里有个细节，一定是要将 Promise 返回，如果不是返回的 Promise，那么下一个 `then` 将处理的就是前一个 `then` 抛出的 Promise。

### then 作为方法单独使用

有时候，需要封装一个类、对象或者方法，来返回给下一个 `then`。此时可以通过 `then` 方法来对类、对象或者方法加以封装。

`then` 方法的用法与 Promise 本身无异，它也接收两个参数，并可以执行参数回调。系统会检查返回的类、对象或者方法中是否包含一个名为 `then` 的方法，如果有，将会封装为一个 Promise 返回。

```js
new Promise((resolve, reject) => {
  resolve();
})
  .then(val => {
    // 以对象为例
    return {
      then(resolve, reject) {
        resolve("success");
      }
    };
  })
  .then(
    val => console.log("val: " + val),
    err => console.log("err: " + err)
  );
```

这样的写法大大简化了代码，看上去也更加简洁。

### catch 捕获异常

前面 `then` 方法中都可以用第二个参数来捕获异常，如果有很多 `then`，同时并不想每一次单独捕获，那么可以在最后添加一个 `catch` 来一并捕获。

_当然，`catch` 可以放在链式的任意位置，但是通常它放在最后面。_

```js
new Promise((resolve, reject) => {
  resolve();
})
  .then(val => console.log(val))
  .then(val => console.log("val: " + val))
  .catch(err => console.log("catch: " + err));
```

### finally 执行

跟异常捕获一样，Promise 的链式也可以有一个 `finally` 方法，当所有链式执行完成之后，无论成功还是失败，这里的代码都会执行。

```js
new Promise((resolve, reject) => {
  resolve();
})
  .then(val => console.log(val))
  .then(val => console.log("val: " + val))
  .catch(err => console.log("catch: " + err))
  .finally(() => console.log("finally"));
```

## Promise 的方法

除了上面使用 `new` 关键字声明的 Promise，它本身还提供了一些简写形式。

### Promise.resolve

看名字就知道，这是直接返回成功状态的 Promise。

```js
Promise.resolve("jeremyjone").then(val => console.log(val));
```

很好理解，它相当于实现了一个方法：

```js
Promise.resolve = function(val) {
  return new Promise(resolve => {
    resolve(val);
  });
};
```

### Promise.reject

该方法可以抛出一个 Promise 的异常，用以改变 Promise 本身的状态。

```js
new Promise((resolve, reject) => {
  resolve("jeremyjone");
})
  .then(val => {
    if (val !== "a") {
      return Promise.reject("参数不正确");
    }
    return val;
  })
  .catch(err => console.log(err));
```

### Promise.all

该方法会批量处理多个 Promise，接收一个 Promise 的数组。如果都成功，则返回成功状态；只要有一个错误，就返回错误状态。

所以，参数中的 Promise 最好每一个都处理好失败状态，这样 `all` 中就可以成功获取数据了。失败的数据经过处理后就返回 `undefined`。

返回的结果也是一个数组，其值对应传入的参数。

看下面的示例作为理解。

1、当都成功时：

```js
const p1 = new Promise((resolve, reject) => {
  resolve("p1");
});

const p2 = new Promise((resolve, reject) => {
  resolve("p2");
});

Promise.all([p1, p2]).then(res => console.log(res)); // ["p1", "p2"]
```

2、某一个失败时：

```js
const p1 = new Promise((resolve, reject) => {
  reject("p1");
});

const p2 = new Promise((resolve, reject) => {
  resolve("p2");
});

Promise.all([p1, p2]).then(res => console.log(res)); // 返回失败（Uncaught (in promise) p1），此时可以使用 catch 获取失败
```

3、每一个 Promise 都处理好异常

```js
const p1 = new Promise((resolve, reject) => {
  reject("p1");
}).catch(err => console.log(err));

const p2 = new Promise((resolve, reject) => {
  resolve("p2");
});

Promise.all([p1, p2]).then(res => console.log(res)); // [undefined, "p2"]
```

这样就可以更好的使用批处理结果了。

### Promise.allSettled

该方法比上面的 `all` 更宽泛一些，无论成功还是失败，它都可以接收。用法是一样的，这里就不再赘述了。

### Promise.race

该方法比较有意思，它同样需要一个 Promise 的数组，只不过返回的值比较特殊，哪一个 Promise 返回的快，它就用哪一个。

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p1");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2");
  }, 2000);
});

Promise.race([p1, p2])
  .then(val => console.log("val: " + val))
  .catch(err => console.log("err: " + err));
```

上例会返回 p1 的结果，在 `catch` 语句中执行，打印：

```js
err: p1;
```

**小技巧：** 可以配合 `Promise.reject` 对超时进行处理。

## async / await

这两个写法是 ES6 新加的特性，这让我们的代码更加简单明了。但是这并不是什么新技术，只是一个语法糖而已，它的本质还是 Promise。

### await

我个人理解，`await` 是这两个语法糖的重点。它具有以下特点：

- 它后面需要跟一个 Promise，如果是一个值，则会自动包裹成一个 Promise
- 它需要在异步函数内部使用，也就是函数必须使用 `async` 修饰。

`await` 相当于前面提到过的 `then`，使用 `await` 等待其后 Promise 的结果，只有获取了结果，程序才会继续执行，否则会一直等待。

```js
async function get() {
  let name = await new Promise(resolve => {
    setTimeout(() => resolve("jeremyjone"), 1000);
  });
  console.log(name);
}

get(); // 等待1秒后，打印：jeremyjone
```

### async

先来看一下 `async` 的写法：

```js
async function get() {
  return "jeremyjone";
}
```

此时 `get` 方法摇身一变，成了一个异步函数，它本质上返回一个 Promise，我们在使用的时候仍然可以通过 `then` 来使用。这也就是为什么 `await` 需要在 `async` 修饰的函数中，它们相互又可以成为一个链式操作：

```js
// 接上例
get().then(v => console.log(v)); // jeremyjone

// 或者使用 await
let r = await get();
console.log(r); // jeremyjone
```

此时的 `get` 方法就相当于：

```js
function get() {
  return new Promise(resolve => {
    resolve("jeremyjone");
  });
}
```

这就是两个异步语法糖的用法。

## 捕获异常

### 捕获 async 的异常

因为 async 方法返回的是一个 Promise，所以和普通 Promise 的异常捕获一样，在调用时通过 `.catch()` 即可捕获。

```js
async function get() {
  return "jeremyjone";
}

// 调用
get()
  .then(v => console.log(v))
  .catch(err => console.log(err));
```

这是不存在任何问题的。

### 捕获 await 的异常

最简单的方式，我们可以通过 `try...catch` 直接捕获 `await` 语句的异常：

```js
async function get() {
  try {
    let name = await new Promise(resolve => {
      setTimeout(() => resolve("jeremyjone"), 1000);
    });
    console.log(name);
  } catch (error) {
    console.log(error);
  }
}
```

但是这样不够优雅，结合我之前写过的内容，可以使用大神封装好的库。但是我又不想安装，所以直接自己封装成函数。

它的思路是这样的：写一个方法，包装所有的 Promise，让所有 Promise 同时返回成功的数据和异常的错误，然后由使用者抉择如何使用它们。如果成功，那么异常为 `null`；如果失败，那么数据则为 `undefined`。

不得不说，大神的思路简单清晰，而且代码非常简单，易于理解。

PS：有时候我们与大神差的真的只是思路。[偷笑]

```js
function to(promise, errExt) {
  return promise
    .then(data => [null, data])
    .catch(err => {
      if (errExt) {
        Object.assign(err, errExt);
      }
      return [err, undefined];
    });
}
```

多么的清晰。将这个函数包装到所有需要使用的 Promise，现在 `await` 返回的将是一个具有两个参数的数组，第一个值是异常，第二个值是数据，随便使用。

```js
async function get() {
  const [err, name] = await to(
    new Promise(resolve => {
      setTimeout(() => resolve("jeremyjone"), 1000);
    })
  );
  console.log(name);
}
```

是不是优雅了很多~~~

## 手写 Promise

了解 Promise，从手动重写一个简易版的开始。

### 最简易的 Promise

最基本的 Promise 的样子是这样的：

```js
new Promise((resolve, reject) => {});
```

那么照猫画虎写一个：

```js
class MyPromise {
  constructor(executor) {
    this.status = "pending";
    this.value = null;

    try {
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }

  resolve(val) {
    if (this.status === "pending") {
      this.status = "fulfilled";
      this.value = val;
    }
  }

  reject(err) {
    if (this.status === "pending") {
      this.status = "rejected";
      this.value = err;
    }
  }
}
```

这样就得到了一个最基本的样子，来试一下：

```js
let p1 = new MyPromise((resolve, reject) => {}); // 此时为 pending 状态

let p2 = new MyPromise((resolve, reject) => {
  resolve();
}); // 此时为 fulfilled 状态

let p3 = new MyPromise((resolve, reject) => {
  reject();
}); // 此时为 rejected 状态
```

好像没什么毛病了。接下来实现 then 的链式操作。

### then 的实现

前文已经提到过，它应该也是一个方法，所以我们继续在 MyPromise 类中添加一个 then 方法：

```js
// 继续添加代码，已有代码不再重复
class MyPromise {
  constructor(executor) {
    // 添加两个回调接收，用于 then 的异步回调
    this.cbFulfilled = null;
    this.cbRejected = null;
  }

  then(resolve, reject) {
    // 先判断两个参数是否为函数，如果不是或者没有，给一个默认值
    if (typeof resolve !== "function") {
      resolve = () => {};
    }

    if (typeof reject !== "function") {
      reject = () => {};
    }

    // 初始状态，异步情况下会是这个状态
    if (this.status === "pending") {
      this.cbFulfilled = resolve;
      this.cbRjected = reject;
    }

    // 成功状态
    if (this.status === "fulfilled") {
      setTimeout(() => {
        try {
          resolve(this.value);
        } catch (error) {
          reject(error);
        }
      });
    }

    // 失败
    if (this.status === "rejected") {
      setTimeout(() => {
        try {
          reject(this.value);
        } catch (error) {
          reject(error);
        }
      });
    }
  }

  // 修改之前的代码
  resolve(val) {
    if (this.status === "pending") {
      this.status = "fulfilled";
      this.value = val;

      // 添加回调
      setTimeout(() => {
        this.cbFulfilled && this.cbFulfilled("timeout " + this.value);
      });
    }
  }

  reject(err) {
    if (this.status === "pending") {
      this.status = "rejected";
      this.value = err;

      // 添加回调
      setTimeout(() => {
        this.cbRejected && this.cbRejected("timeout " + this.value);
      });
    }
  }
}
```

这里我们通过使用 `setTimeout` 来对执行顺序加以控制，使回调成为一个异步调用。测试一下：

```js
let p1 = new MyPromise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    resolve("jeremyjone");
    console.log(4);
  });
  console.log(2);
}).then(val => console.log(val));

console.log(3);
```

它的打印顺序：

```text
1
2
3
4
jeremyjone
```

现在看上去已经和原生的效果差不多了。下一步我们让它成为链式的。

### then 的链式实现

要实现链式操作，首先要明确：

- 它本身返回一个 Promise
- 它接收的状态并不会影响它新返回 Promise 的状态

既然是要一个 Promise，那么我们首先将 `then` 里面的方法包装在一个 Promise 中。然后稍微修改一下逻辑就可以实现链式操作了。

```js
class MyPromise {
  // ... 其他代码省略

  then(resolve, reject) {
    // 先判断两个参数是否为函数，如果不是或者没有，给一个默认值
    if (typeof resolve !== "function") {
      resolve = () => {};
    }

    if (typeof reject !== "function") {
      reject = () => {};
    }

    // 将改变值的内容包装在一个新的 Promise 中
    return new MyPromise((newResolve, newReject) => {
      if (this.status === "pending") {
        this.cbFulfilled = val => {
          try {
            // 将当前 then 中的返回值，赋值给下一次的 then，并使其改变状态
            let res = resolve(val);
            newResolve(res);
          } catch (error) {
            // 当前 then 的异常，交给下一个 then 去解决，直接调用 reject 回调函数即可
            newReject(error);
          }
        };
        this.cbRejected = val => {
          try {
            let res = reject(val);
            // 当前接收的状态，并不影响下一次 then 的状态，所以当前的拒绝状态也返回成功状态给下一次，只有当前的异常才会修改为拒绝
            newResolve(res);
          } catch (error) {
            newReject(error);
          }
        };
      }

      if (this.status === "fulfilled") {
        setTimeout(() => {
          try {
            let res = resolve(this.value);
            newResolve(res);
          } catch (error) {
            newReject(error);
          }
        });
      }

      if (this.status === "rejected") {
        setTimeout(() => {
          try {
            let res = reject(this.value);
            newResolve(res);
          } catch (error) {
            newReject(error);
          }
        });
      }
    });
  }
}
```

上面代码替换完之后，现在 `then` 每次返回的将是一个 Promise，它已经可以链式操作了。我在代码中的对应行也添加了一些注释，以方便理解。

- 1、最重要的是要返回我们的 MyPromise 对象，而且是一个新的对象。
- 2、因为与在外部创建 MyPromise 对象不一样，它具有默认的修改状态的动作，所以我们需要对内部代码稍加修改：
  - 1. 接收当前回调函数的返回值，它由外部定义 `then` 方法时返回，如果外部的 `then` 方法内部并没有 return 语句，那么则为 `undefined`。
  - 2. 当前接收到的状态，并不会影响下一次的状态。所以，只要没有出现异常，统一调用 `resolve`。

在外面，我们可以通过链式操作测试一下：

```js
new MyPromise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    // resolve("jeremyjone");
    reject("failed");
    console.log(4);
  }, 1000);
  console.log(2);
})
  .then(
    val => {
      setTimeout(() => {
        console.log(val);
      }, 1000);
      return "p1";
    },
    err => {
      console.log("err1 ", err);
      return "p1 err";
    }
  )
  .then(
    val => console.log("2 " + val),
    err => console.log("2 err ", err)
  );

console.log(3);
```

执行结果：

```text
1
2
3
4
err1  timeout failed
2 timeout p1 err
```

可以看到，已经可以执行，而且第二个 `then` 中使用成功的回调方法接收了前一个 `then` 里面拒绝方法中的返回值。

#### then 的状态穿透

上面的代码中，不能实现状态穿透，也就是当前 `then` 不处理结果时，需要向下继续穿透，类似：

```js
new MyPromise((resolve, reject) => {})
  .then() // 此处属于状态穿透
  .then(
    val => console.log(),
    err => console.log(err)
  );
```

为了解决这个问题，我们继续稍加修改上面的 `then` 方法。

```js
class MyPromise {
  // ... 其他代码省略

  then(resolve, reject) {
    // 如果是成功状态，直接返回值，没有值就是空着即可
    if (typeof resolve !== "function") {
      resolve = () => this.value;
    }

    // 拒绝的状态需要处理。因为我们之前的逻辑是当前 then 的状态不会影响下一次的。现在需要除了穿透的状态，所以要先判断一下是否为函数属性
    // 添加一个判断是否为函数的属性
    const isRejectFunc = typeof reject === "function";
    if (typeof reject !== "function") {
      reject = () => this.value;
    }

    // 将改变值的内容包装在一个新的 Promise 中
    return new MyPromise((newResolve, newReject) => {
      if (this.status === "pending") {
        this.cbFulfilled = val => {
          try {
            let res = resolve(val);
            newResolve(res);
          } catch (error) {
            newReject(error);
          }
        };
        this.cbRejected = val => {
          try {
            // 两个拒绝的地方需要修改，如果是一个函数，走之前的方式。如果不是函数，则使用默认的拒绝方法将值继续向下传递
            if (isRejectFunc) {
              let res = reject(val);
              newResolve(res);
            } else {
              newReject(val || this.value);
            }
          } catch (error) {
            newReject(error);
          }
        };
      }

      if (this.status === "fulfilled") {
        setTimeout(() => {
          try {
            let res = resolve(this.value);
            newResolve(res);
          } catch (error) {
            newReject(error);
          }
        });
      }

      if (this.status === "rejected") {
        setTimeout(() => {
          try {
            // 第二个拒绝的地方
            if (isRejectFunc) {
              let res = reject(this.value);
              newResolve(res);
            } else {
              newReject(this.value);
            }
          } catch (error) {
            newReject(error);
          }
        });
      }
    });
  }
}
```

现在就可以实现状态的穿透了。

#### then 处理返回 Promise 对象

解决了上面的穿透问题，现在处理返回 Promise 对象的问题。

这个问题其实很好解决，只需要在 `then` 方法内部判断一下类型，然后如果是 Promise 对象等待其值，不是直接返回结果即可。

直接看修改的代码：

```js
// ... 其他内容不写了

if (this.status === "fulfilled") {
  setTimeout(() => {
    try {
      let res = resolve(this.value);
      // newResolve(res);

      // 刚才我们直接调用回调函数，现在判断一下再调用
      if (res instanceof MyPromise) {
        res.then(newResolve, newReject);
      } else {
        newResolve(res);
      }
    } catch (error) {
      newReject(error);
    }
  });
}
```

其内部有 4 处相同内容，全部修改即可。现在返回的是一个 MyPromise 也不会有什么问题。

```js
new MyPromise((resolve, reject) => {
  resolve("jeremyjone");
})
  .then(
    val => {
      console.log(val);
      return new MyPromise((resolve, reject) => {
        resolve("22222");
      });
    },
    err => console.log(err)
  )
  .then(
    val => console.log("2then ok " + val),
    err => console.log("2then err " + err)
  );

console.log("11111");
```

执行结果：

```text
11111
jeremyjone
2then ok timeout 22222
```

### 一些静态方法

其实核心内容已经差不多了，现在写一些静态方法，让我们自定义的 MyPromise 看上去更像 Promise。

注意静态方法不要忘记 `static`。

#### MyPromise.resolve

前面已经讲过，它返回一个成功状态，所以很简单，只需要新建一个 Promise 并返回成功即可。

```js
class MyPromise {
  static resolve(value) {
    return new MyPromise((resolve, reject) => {
      if (value instanceof MyPromise) {
        // 如果传入的参数本身是一个 Promise，则按照其本身返回的状态返回。
        value.then(resolve, reject);
      } else {
        resolve(value);
      }
    });
  }
}
```

#### MyPromise.reject

与上面的同理，只需要修改为拒绝状态即可。

```js
class MyPromise {
  static reject(value) {
    return new MyPromise((resolve, reject) => {
      if (value instanceof MyPromise) {
        value.then(resolve, reject);
      } else {
        reject(value);
      }
    });
  }
}
```

#### MyPromise.all

它稍微有一些复杂，但是并不会比核心的 `then` 还困难。只需要一个循环，将所有值放在一个数组中，同时遇到错误直接抛出。最后，将结果返回即可。

```js
class MyPromise {
  static all(promises) {
    const res = [];
    return new MyPromise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        const promise = promises[i];
        if (promise instanceof MyPromise) {
          promise.then(
            val => {
              // 使用 push 会有位置影响
              res[i] = val;

              // 因为使用赋值，所以可能存在空，需要判空
              res.filter(x => !!x).length === promises.length && resolve(res);
            },
            err => reject(err)
          );
        } else {
          res[i] = promise;
        }
      }
    });
  }
}
```

#### Mypromise.race

这个更简单。它返回最快返回的值。一次循环，只要拿到了值就返回即可。

它利用了 Promise 只修改一次状态的特性，这是我们前面写过的。

```js
class MyPromise {
  static race(promises) {
    return new MyPromise((resolve, reject) => {
      promises.map(promise => {
        if (promise instanceof MyPromise) {
          promise.then(
            val => resolve(val),
            err => reject(err)
          );
        } else {
          resolve(promise);
        }
      });
    });
  }
}
```

### MyPromise 完整版

前面已经把大部分代码都按部分总结了，最后整理一下。

```js
class MyPromise {
  constructor(executor) {
    this.status = "pending";
    this.value = null;
    this.cbFulfilled = null;
    this.cbRejected = null;

    try {
      executor(this._resolve.bind(this), this._reject.bind(this));
    } catch (error) {
      this._reject(error);
    }
  }

  _exec(promise, isRejectFunc, res, resolve, reject) {
    // 在 promise 中返回自身，抛出错误
    if (promise === res) throw Error("Chaining cycle detected for promise");

    try {
      if (res instanceof MyPromise) {
        res.then(resolve, reject);
      } else {
        isRejectFunc ? resolve(res) : reject(res);
      }
    } catch (error) {
      reject(error);
    }
  }

  _resolve(val) {
    if (this.status === "pending") {
      this.status = "fulfilled";
      this.value = val;

      // 添加回调
      setTimeout(() => {
        this.cbFulfilled && this.cbFulfilled(this.value);
      });
    }
  }

  _reject(err) {
    if (this.status === "pending") {
      this.status = "rejected";
      this.value = err;

      // 添加回调
      setTimeout(() => {
        this.cbRejected && this.cbRejected(this.value);
      });
    }
  }

  then(resolve, reject) {
    // 先判断两个参数是否为函数，如果不是或者没有，给一个默认值
    if (typeof resolve !== "function") {
      resolve = () => this.value;
    }

    const isRejectFunc = typeof reject === "function";
    if (typeof reject !== "function") {
      reject = () => this.value;
    }

    // 将改变值的内容包装在一个新的 Promise 中
    let p = new MyPromise((newResolve, newReject) => {
      // 初始状态，异步情况下会是这个状态
      if (this.status === "pending") {
        this.cbFulfilled = val => {
          let res = resolve(val);
          this._exec(p, true, res, newResolve, newReject);
        };
        this.cbRejected = val => {
          let res = reject(val);
          this._exec(p, isRejectFunc, res, newResolve, newReject);
        };
      }

      // 成功状态
      if (this.status === "fulfilled") {
        setTimeout(() => {
          let res = resolve(this.value);
          this._exec(p, true, res, newResolve, newReject);
        });
      }

      // 失败
      if (this.status === "rejected") {
        setTimeout(() => {
          let res = reject(this.value);
          this._exec(p, isRejectFunc, res, newResolve, newReject);
        });
      }
    });

    return p;
  }

  catch(reject) {
    return this.then(null, reject);
  }

  static resolve(value) {
    return new MyPromise((resolve, reject) => {
      if (value instanceof MyPromise) {
        // 如果传入的参数本身是一个 Promise，则按照其本身返回的状态返回。
        value.then(resolve, reject);
      } else {
        resolve(value);
      }
    });
  }

  static reject(value) {
    return new MyPromise((resolve, reject) => {
      if (value instanceof MyPromise) {
        value.then(resolve, reject);
      } else {
        reject(value);
      }
    });
  }

  static all(promises) {
    const res = [];
    return new MyPromise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        const promise = promises[i];
        if (promise instanceof MyPromise) {
          promise.then(
            val => {
              // 使用 push 会有位置影响
              res[i] = val;

              // 因为使用赋值，所以可能存在空，需要判空
              res.filter(x => !!x).length === promises.length && resolve(res);
            },
            err => reject(err)
          );
        } else {
          res[i] = promise;
        }
      }
    });
  }

  static race(promises) {
    return new MyPromise((resolve, reject) => {
      promises.map(promise => {
        if (promise instanceof MyPromise) {
          promise.then(
            val => resolve(val),
            err => reject(err)
          );
        } else {
          resolve(promise);
        }
      });
    });
  }
}
```

测试用例：

```js
new MyPromise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    resolve("jeremyjone");
    // reject("failed");
    console.log(4);
  }, 1000);
  console.log(2);
})
  .then()
  .catch(err => console.log("catch:", err))
  .then(
    val => {
      setTimeout(() => {
        console.log(val);
      }, 1000);
      const p2 = new MyPromise((resolve, reject) => {
        resolve("小鹰");
      });
      console.log("111", val);
      return p2;
    },
    err => {
      console.log("err1 ", err);
      return "p1 err";
    }
  )
  .then(
    val => console.log("2 " + val),
    err => console.log("2 err ", err)
  );

console.log(3);

MyPromise.resolve("resolve jeremyjone").then(val => console.log(val));
MyPromise.reject("reject jeremyjone").then(null, err => console.log(err));

MyPromise.resolve(
  new MyPromise((resolve, reject) => {
    reject("reject in resolve");
  })
).then(
  val => console.log("rr1", val),
  err => console.log("rr2", err)
);

let p1 = new MyPromise((resolve, reject) => {
  resolve("p1");
});

let p2 = new MyPromise((resolve, reject) => {
  resolve("p2");
});

MyPromise.all([p1, p2, 3, 4]).then(
  val => console.log("all ok", val),
  err => console.log("all err", err)
);

let p3 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3");
  }, 1000);
});

let p4 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    reject("p4");
  }, 1000);
});

MyPromise.race([p3, p4]).then(
  val => console.log("race ok", val),
  err => console.log("race err", err)
);
```

## 总结

通过本文，你应该掌握了：

- 异步原理
- 事件循环
- 宏任务与微任务
- Promise 原理
- Promise 链式操作
- Promise 常用方法
- Promise 核心实现
- async / await 实现方式

当然，这个完整版不能和原生的比较，还有很多细节没有实现。这里只是总结一下其实现的核心，了解并掌握其实现的原理，通过这个实例，掌握异步核心，了解 JS 异步运行机制，才是我们应该学到的。
