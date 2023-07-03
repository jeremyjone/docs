# 响应式的原理

## 一个简单的例子

让我们通过一个简单的例子来说明 Vue 的响应式原理。

假设我们有一个数据对象 `data`，其中包含一个属性 `message`：

```javascript
const data = {
  message: 'Hello, JeremJone!'
}
```

我们希望在页面上显示这个消息，并且当我们修改 `message` 时，页面上的内容也会相应地更新。

为了实现这个效果，我们可以使用 Vue 提供的 `Vue` 构造函数来创建一个 Vue 实例，并将 `data` 对象传递给它：

```javascript
const vm = new Vue({
  data: data
})
```

现在，我们可以在页面上使用 `{{ message }}` 的语法来显示 `data.message` 的值。当我们修改 `data.message` 时，页面上的内容也会自动更新。

Vue是如何实现这一奇迹般的 [双向绑定](./basic/v-model.html) 的呢？让我们来逐步讲解其实现原理。

## Vue2 的实现
在 Vue2 中，响应式原理是基于 JavaScript 的 `Object.defineProperty` 方法实现的。它通过将一个普通的 JavaScript 对象转化为响应式的数据对象，从而实现了数据的双向绑定。这意味着当我们修改数据时，相关的视图会自动更新，反之亦然。

首先，Vue 会遍历 `data` 对象的所有属性，并使用 `Object.defineProperty` 方法将它们转化为 getter 和 setter。这样，当我们访问 `data.message` 时，实际上会调用 getter 方法，而当我们修改 `data.message` 时，实际上会调用 setter 方法。

```javascript
Object.keys(data).forEach(key => {
  Object.defineProperty(data, key, {
    get() {
      console.log('Getter called')
      return data[key]
    },
    set(newValue) {
      console.log('Setter called')
      data[key] = newValue
    }
  })
})
```

- 在 getter 方法中，我们可以执行一些额外的逻辑，比如依赖收集。Vue 会在 getter 方法中记录当前正在访问的属性，并将其与正在渲染的视图关联起来。这样，当属性发生变化时，Vue 就知道该更新哪些视图。
- 在 setter 方法中，我们可以执行一些额外的逻辑，比如通知视图进行更新。当我们修改属性的值时，setter 方法会被调用，Vue 会检查该属性是否有相关的视图，并更新它们的内容。

Vue 的响应式原理的优点之一是它的简洁性。我们只需要将数据对象传递给 Vue 实例，然后在模板中使用相应的语法，就能实现数据的双向绑定。这大大简化了我们的开发工作，减少了手动更新视图的工作量。

然而，Vue 的响应式原理也有一些缺点。

- 它只对已经存在的属性起作用。这意味着如果我们在数据对象上添加新的属性，它将不会成为响应式的。为了解决这个问题，我们需要使用 Vue 提供的 `Vue.set` 方法或者直接使用 `this.$set` 来添加新的属性。
- Vue 的响应式原理对于数组的处理并不完美。当我们修改数组的长度时，Vue 并不会检测到这个变化。为了解决这个问题，我们需要使用 Vue 提供的数组方法，比如 `push`、`pop` 等，或者使用数组的 `splice` 方法。

总结起来，Vue 的响应式原理是通过使用 `Object.defineProperty` 方法将数据对象转化为响应式的。它的优点是简洁性和高效性，能够自动更新视图。然而，它也有一些缺点，比如对新属性的处理和对数组的处理不完美。尽管如此，Vue 的响应式原理仍然是 Vue 框架的核心特性之一，为我们提供了一种优雅而高效的方式来构建动态的用户界面。

## Vue3 的实现

作为 Vue2 的继任者，Vue3 带来了许多令人兴奋的新特性和改进。其中之一是它的响应式原理，这是 Vue.js 的核心机制之一。在 Vue3 中，它引入了一系列响应式的方法，我们以 `reactive` 函数为例，创建响应式数据。

假设我们有一个数据对象 `data`，其中包含名为 `message` 的属性。我们可以使用以下代码将其转换为响应式数据：

```javascript
import { reactive } from 'vue';

const data = reactive({
  message: 'Hello, JeremyJone'
});
```

在上面的代码中，我们导入了 `reactive` 函数，并使用它将 `data` 对象转换为响应式数据。现在，如果我们修改 `data.message` 的值，相关的界面将自动更新以反映这个变化。

一切看起来就是这样简洁简单。那么它是如何实现这样的响应式机制的呢？让我们一步步地来说明一下。

首先，Vue 创建了一个称为 `reactiveProxy` 的代理对象。当我们访问 `data.message` 时，代理对象会捕获这个访问，并追踪它。Vue 还提供了一个称为 `watchEffect` 的函数，它会在响应式数据发生变化时触发执行。当 `data.message` 更新时，`watchEffect` 函数会被触发，从而更新相关的界面。

要实现这个机制，Vue 使用了 JavaScript 的 [`Proxy`](/roadmap/frontend/js/proxy/) 对象。`Proxy` 对象允许我们拦截对对象的访问，以便执行自定义的行为。通过使用 `Proxy`，Vue 能够捕获对响应式数据的访问，并在数据发生变化时触发相关的操作。

> 注：这也是 Vue3 仅面向现代浏览器的原因之一。

让我们通过一个具体的例子来进一步说明。假设我们有以下代码：

```javascript
import { reactive, watchEffect } from 'vue';

const data = reactive({
  message: 'Hello, JeremyJone!'
});

watchEffect(() => {
  console.log(data.message); // 当 data.message 发生变化，自动触发
});

data.message = 'Hello, Vue 3!';
```

在上面的代码中，我们将 `data` 对象转换为响应式数据，`watchEffect` 函数接收一个回调函数，当响应式数据发生变化时，它就会触发并执行这个回调函数。最后触发打印的应该是 `Hello, Vue 3!`。

Vue3 的响应式原理具有以下优点：

- 简洁明了：Vue.js 的响应式机制非常直观和易于理解，使得开发更为简单。
- 高效性能：由于使用了 `Proxy` 对象，Vue3 能够精确地捕获数据的变化，从而实现高效的更新机制。
- 延迟更新：Vue.js 使用了计算依赖图的技术，从而能够推迟对组件的更新，提高了性能。
- 较低的内存占用：Vue.js 使用了惰性计算的方式来更新界面，从而减少了不必要的内存占用。

然而，Vue.js 3的响应式原理也有一些缺点：

- 依赖传递：由于响应式数据是通过代理对象来实现的，当数据结构较为复杂时，可能会导致依赖传递变得复杂。
- 项目体积：虽然 Vue3 已经采取了代码压缩和 Tree-shaking 等措施来减少体积，但其响应式机制本身会增加一些额外的代码量。

Vue3 为我们提供了一种比 Vue2 更加简洁而且高效的方式来构建响应式。但同时这种使用 `Proxy` 的方式也带来了一定的约束，比如它只面向更加现代的浏览器版本，这导致在某些项目需要兼容如 IE 等，还需要继续使用 Vue2，这也算是时代产物，让它遗留在历史中。
