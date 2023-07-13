# 虚拟 DOM

在现代的 Web 开发中，虚拟 DOM（Virtual DOM）已经成为一个非常重要的概念。它的出现极大地改变了前端开发的方式，并且被广泛应用于各种流行的 JavaScript 框架和库，如React、Vue等。

首先，我们需要了解什么是 [DOM](/roadmap/frontend/html/#dom)。它将文档中的每个元素都抽象为一个对象，通过操作这些对象，我们可以动态地改变页面的内容和结构。但是，直接操作 DOM 是一项非常昂贵的操作，特别是在需要频繁更新页面内容的情况下，会出现性能问题。

虚拟 DOM（Virtual DOM）的概念就是为了解决这个性能问题而提出的。虚拟 DOM 是一种用于提高 Web 应用性能的技术。它是一个虚拟的 JavaScript 对象树，是对真实 DOM 的一种轻量级的描述，用于表示真实的 DOM 结构。当应用状态发生变化时，虚拟 DOM 会被更新，然后通过对比新旧两个虚拟 DOM 树的差异，只将差异部分更新到真实的 DOM 上，从而减少了真实 DOM 操作的次数，提高了性能。

## 对比 innerHTML 和 虚拟 DOM

<img :src="$withBase('/assets/roadmap/vue/v-dom.png')" alt="">

<img :src="$withBase('/assets/roadmap/vue/v-dom2.png')" alt="">

> 图片来源：《Vue.js设计与实现》

如图所示，虚拟 DOM 在可维护性、心智负担和性能上，排在中等位置，它很好的平衡了模板和原生 JS 之间的差异，索虽然有一些性能损失，但是可以有效提高开发效率。

## 虚拟 DOM 的工作原理

- 通过 JavaScript 对象树来表示真实的 DOM 结构，每个节点都是一个 JavaScript 对象，包含节点类型、属性、子节点等信息。
- 当应用状态发生变化时，生成一个新的虚拟 DOM 树。
- 使用 diff 算法对比新旧两个虚拟 DOM 树的差异，找出需要更新的部分。
- 将差异部分更新到真实的 DOM 上，只进行必要的 DOM 操作。

虚拟 DOM 的原理是通过 diff 算法来比较虚拟 DOM 和真实 DOM 的差异。当我们修改了虚拟 DOM 的状态后，比较算法会找出哪些地方发生了改变，并且只更新这些部分。这种只更新差异部分的方式，相比于直接操作真实 DOM，可以大大减少浏览器的重绘和重排，提升页面的性能。

一个简单的虚拟 DOM 示例：

```js
// 定义一个虚拟 DOM
const virtualDOM = {
  tag: 'ul',
  props: { id: 'list' },
  children: [
    { tag: 'li', props: {}, children: ['Item 1'] },
    { tag: 'li', props: {}, children: ['Item 2'] },
    { tag: 'li', props: {}, children: ['Item 3'] },
  ]
};

// 渲染虚拟 DOM 到页面上
function render(virtualDOM, container) {
  const element = document.createElement(virtualDOM.tag);
  for (let key in virtualDOM.props) {
    element.setAttribute(key, virtualDOM.props[key]);
  }
  if (typeof virtualDOM.children === 'string') {
    element.textContent = virtualDOM.children;
  } else {
    virtualDOM.children.forEach(child => {
      render(child, element);
    });
  }
  container.appendChild(element);
}

// 更新虚拟 DOM 的状态
function update() {
  virtualDOM.children.reverse();
  const container = document.getElementById('list');
  container.innerHTML = '';
  render(virtualDOM, container);
}

// 绑定按钮点击事件
const button = document.getElementById('button');
button.addEventListener('click', update);

// 初始化渲染
const container = document.getElementById('container');
render(virtualDOM, container);
```

在上面的示例代码中，我们定义了一个虚拟 DOM 对象 virtualDOM，它描述了一个包含三个列表项的无序列表。然后，我们通过 render 函数将虚拟 DOM 渲染到页面上。当用户点击按钮时，我们通过 update 函数来更新虚拟 DOM 的状态，并重新渲染到页面上。

通过使用虚拟 DOM，我们可以避免直接操作真实 DOM，而是通过比较虚拟 DOM 和真实 DOM 的差异来更新页面，从而提高页面的性能。虽然虚拟 DOM 的引入增加了一定的复杂性，但它带来的性能提升是非常明显的，特别是在需要频繁更新页面内容的场景下。

## 虚拟 DOM 的优势

- 提高性能：由于真实 DOM 操作比较昂贵，通过使用虚拟 DOM 可以减少真实 DOM 操作的次数，提高性能。
- 简化开发：虚拟 DOM 可以将应用状态的变化抽象为 JavaScript 对象的操作，简化了开发过程。
- 跨平台：虚拟 DOM 不依赖于具体的平台或浏览器，可以在不同的环境中使用。

 
## 虚拟 DOM 的缺点

- 需要额外的内存开销：虚拟 DOM 需要在内存中维护一份完整的 DOM 结构，会占用一定的内存空间。
- 学习成本较高：使用虚拟 DOM 需要学习相关的库或框架，对开发人员的要求较高。