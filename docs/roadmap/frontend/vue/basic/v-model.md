# 双向绑定

在 Vue 中，双向绑定是一个非常实用的技术。它本身是用来进行表单的输入绑定。

```html
<input :value="text" @input="e => text = e.target.value" />
```

它等效于 

```html
<input v-model="text" />
```

这极大简化了开发成本。

## 在组件上使用

很多时候，这种双向绑定机制希望可以在更多地方使用，幸运的是，通过自定义事件，我们可以在任何组件实现数据的双向绑定，这可以大大提高生产效率。

父组件向子组件传递一个 `value`，子组件通过 `$emit('input', value)` 将值返回给父组件即可。

<img :src="$withBase('/assets/roadmap/vue/v-model.png')" alt="v-model">

### vue2 中的实现

```html
<custom-component :value="value" @input="v => value = v" />
```

它等效于

```html
<custom-component v-model="value" />
```

vue2 中，默认是 `value` 参数接收 `v-model` 的参数。有时候，我们需要改变参数名，可以通过 `model` 选项来实现：

```js{5-8}
export default {
    props: {
        checked: Boolean
    },
    model: {
        prop: 'checked',  // 将 checked 等效于 value
        event: 'change'   // 将 change 事件等效于 input
    }
}
```

此时，外部仍然使用 `v-model`，它会自动绑定到 `checked` 属性上，并监听 `change` 事件。

此外，在 `2.3.0+` 中，推荐使用以 `update` 开头并附加属性名的事件替代 `input`（`update:myPropName`），为了方便这样的使用，提供了一个新的解决方案，一个全新的 `.sync` 修饰符：

```html
<text-document v-bind:title.sync="doc.title"></text-document>
```

它等效于：

```html
<text-document
  v-bind:title="doc.title"
  v-on:update:title="doc.title = $event"
></text-document>
```

### vue3 中的实现

在 vue3 中，默认使用 `modelValue` 作为参数，自定义事件继承了 `2.3.0+` 的实现方式，应该以 `update` 开头：

```html
<custom-component :modelValue="value" @update:modelValue="v => value = v" />
```

它等效于

```html
<custom-component v-model="value" />
```

子组件的实现：

```vue
<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue']
}
</script>

<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
```

我们可以通过显式的给出一个参数名，来绑定指定名称：

```html
<MyComponent v-model:title="bookTitle" />
```

它对应的子组件实现：

```vue
<script>
export default {
  props: ['title'],
  emits: ['update:title']
}
</script>

<template>
  <input
    type="text"
    :value="title"
    @input="$emit('update:title', $event.target.value)"
  />
</template>
```

因为这样的方式，vue3 可以完成多个参数绑定：

```html
<UserName
  v-model:first-name="first"
  v-model:last-name="last"
/>
```

对应的子组件：

```vue
<script>
export default {
  props: {
    firstName: String,
    lastName: String
  },
  emits: ['update:firstName', 'update:lastName']
}
</script>

<template>
  <input
    type="text"
    :value="firstName"
    @input="$emit('update:firstName', $event.target.value)"
  />
  <input
    type="text"
    :value="lastName"
    @input="$emit('update:lastName', $event.target.value)"
  />
</template>
```

### 自定义修饰符

vue3中，修饰符会自动包装在 `modelModifiers` 中，它需要显式的在 `props` 中声明：

```js
export default {
    props: {
        modelValue: String,
        modelModifiers: {
            default: () => ({})
        }
    }
}
```

然后就可以使用自定义内容了。它们都是 bool 值。

对于类似 `<MyComponent v-model:title.capitalize="bookTitle" />` 这样的自定义属性绑定，同样可以使用自定义的方式：

```vue
export default {
    props: {
        titleValue: String,
        titleModifiers: {
            default: () => ({})
        }
    },
    emits: ['update:title'],
    created() {
        console.log(this.titleModifiers) // { capitalize: true }
    }
}
```