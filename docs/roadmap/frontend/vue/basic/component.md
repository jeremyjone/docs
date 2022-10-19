# 组件

组件允许我们将 UI 划分为独立的、可重用的部分，并且可以对每个部分进行单独的思考。在实际应用中，组件常常被组织成层层嵌套的树状结构：

<img :src="$withBase('/assets/roadmap/vue/component-base.png')" alt="component-base">

## Web Components

`Web Components` 是一套不同的技术，它允许创建可重复使用的定制元素。

它由三项主要技术组成：

- **Custom element**：自定义元素，一组 JavaScript API，允许定义 custom elements 以及其行为，然后可以在界面中按照需要使用他们
- **Shadow DOM**：影子 DOM，一组 JavaScript API，用于将封装的影子 DOM 树附加到元素（与主文档 DOM 分开呈现）并控制其关联的功能。它可以保持元素功能私有，这样就可以被脚本化和样式化，同时不必担心冲突。
- **HTML template**：HTML 模板，`<template>` 和 `<slot>` 元素可以编写不在页面中呈现的标记模板，然后它们将作为自定义元素结构被多次使用。

`Vue` 为使用 `Web Components` 提供了非常出色的支持，它们是互补的。更多关于 `Web Components` 的内容可以参考 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components) 或 [webcomponents.org](https://www.webcomponents.org/)

当然，`Vue` 与 `Web Components` 作为互补，在逻辑上也有一些区别，比如解析的过程。详细内容可以参考 [文档](https://cn.vuejs.org/guide/extras/web-components.html#using-custom-elements-in-vue)。

## 定义组件

`Vue` 定义组件的方式有多种：

- 单文件组件
- 对象组件

通常情况下，都会使用单文件组件（SFC）来使用。它需要单独定义在 `.vue` 文件中，它包含三个部分：

- script：代码部分，这会抛出一个 vue 对象，包含所有数据与方法
- template：模板部分，定义了该组件的结构
- style：样式部分，定义了组件的样式

```vue
<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>

<style>
button {
  width: 24px;
}
</style>
```


## 注册组件

### 全局注册

通过全局注册的组件，可以在整个项目中使用。

- 直接编写组件

    ```js
    // vue2
    import Vue from 'vue';
    Vue.component('my-component', { /* 组件的实现 */ });
    new Vue({ el: '#app' });
    
    // vue3
    import { createApp } from 'vue';
    const app = createApp({});
    app.component('MyComponent', {
        // 组件的实现部分
    });
    ```

- 导入组件注册
    
    ```js
    // vue2
    import Vue from 'vue';
    import MyComponent from './App.vue'
    Vue.component('MyComponent', MyComponent);
    new Vue({ el: '#app' });
  
    // vue3
    import { createApp } from 'vue';
    const app = createApp({});
    import MyComponent from './App.vue'
    app.component('MyComponent', MyComponent);
    ```


### 局部注册

当我们使用 SFC 定义一个组件之后，它就以默认导出的形式对外暴露自身。我们直接引入该文件即可。

```vue
<script>
import ButtonCounter from './ButtonCounter.vue'

export default {
  components: {
    ButtonCounter
  }
}
</script>

<template>
  <h1>Here is a child component!</h1>
  <ButtonCounter />
</template>
```

## 动态组件

有时候，我们需要通过参数来控制一个地方展示不同的组件，可以通过动态组件来实现：

```html
<component :is="currentTab"></component>
```

`<component>` 是 Vue 的内置组件，用于渲染要替换的组件。

`:is` 的值可以是：

- 被注册的组件名
- 导入的组件对象

当然，它也可以是一般的 HTML 元素，但不建议这样使用。

## 数据是单向流的

在父子组件传值中，数据永远是从父级流向子级的，并且在传递过程中，子级接收的数据永远应当是只读的。这意味着，我们不能修改 `props` 中接收的任何数据。

当我们确实需要改变该值时，应当想办法通知父级组件进行修改，这就用到了 `this.$emit()` 方法。

通过 `props` 和 `$emit()`，我们可以编写双向流动的数据结构。

### 多层传递数据

默认情况下，数据只会在父子之间传递，如果需要数据穿透，在子组件中不必写 `props`，这样父级传递的数据就会呗绑定到 `$attrs` 中，再通过 `v-bind` 方法绑定到下一级即可：

```html
// 在子组件中
<child-component v-bind="$attrs"></child-component>
```

也就是说，所有父级数据初始都会绑定到 `$attrs` 中，一旦子组件 `props` 中定义了对应的字段，该属性就会从 `$attrs` 中移出，并添加到 `props` 中去。

## 传值 Props

`props` 可以让子组件接收父组件传递的值。

### 基础使用

```js{2}
export default {
    props: ['title']
}
```

### 定义参数类型

```js{3}
export default {
  props: {
      title: String
  }
}
```

#### TypeScript 中的自定义类型

js 中是没有自定义类型的，在 ts 中可以设定：

```ts{2}
props: {
    prop1: Object as PropType<CustomType> 
}

// vue3 允许提供一个自定义类或构造函数，它会通过 instanceof 方法来判断
props: {
    prop1: CustomClass 
}
```

### 定义参数默认值

```js{4}
export default {
  props: {
      title: String,
      default: '标题'
  }
}
```

默认值里，引用对象需要传递方法：

```js{4}
export default {
  props: {
      title: Object,
      default: () => ({})
  }
}
```

### 数据的可选性

所有 `props` 参数都是可选的，在没有默认值的情况下，`Boolean` 类型会得到 false，除此之外的 `props` 会得到 `undefined`。

```js{4}
export default {
  props: {
      title: String,
      required: true
  }
}
```

### 绑定多个属性

直接在父组件绑定一个对象，它会自动解构成多个对象的键值进行单独绑定：

将该对象绑定到组件中：

```js
post: {
  id: 1;
  title: 'My Journey with Vue';
}
```

```html
// 父组件
<blog-post v-bind="post"></blog-post>

// 等价
<blog-post :id="post.id" :title="post.title"></blog-post>
```

### 数据的校验

```js{5-7}
export default {
  props: {
      age: Number,
      required: true,
      validator(v) {
          return v > 0;
      }
  }
}
```

## 事件的触发与监听

在子组件中，触发事件需要通过 `this.$emit()` 来实现：

```html
<button @click="$emit('someEvent')">click me</button>
```

父组件通过 `v-on` 或 `@` 来监听事件：

```html
<MyButton @some-event="handleSomeEvent"></MyButton>
```

`$emit()` 方法第一个参数接收一个字符串，用于定义方法名，后面可以传递多个参数，如：

> `$emit('click-me', 1, 2, 3)`，这样在父组件可以接收到多个参数。

### 与原生事件的区别

- 没有冒泡
- 当与原生事件重名时，优先使用自定义事件，原生事件不会生效

