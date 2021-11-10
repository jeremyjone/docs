# Vue 开发规范

<Description author="jeremyjone" version="v1" />

本规范适用于所有基于 Vue 框架的开发。

开发工具，推荐使用 `VS Code`，或者 `WebStorm`。

使用 `VS Code` 的话，需要安装 `eslint`、`HTML CSS Support`、`HTML Snippets`、`Live Server`、`Vetur`、`Vue VSCode Snippets` 等插件以实现更快、更好的开发。

## 1 命名规范

所有的命名应该具有明显的具象含义，尽可能的使用名词，不使用动词。

### 1.1 项目命名

采用全部小写的方式，并以下划线为分隔符。

```javascript
new_test_project;
```

### 1.2 目录命名

目录命名应遵循以下规则：

- 全部小写
- 使用具有显式意义的词语
- 如果是集合类别的，应当使用复数形式
- 应该尽可能使用一个单词，如果需要多个，使用下划线连接

```javascript
assets;
utils;
data_models;
```

### 1.3 文件命名

Vue 的文件应该从名称上区分组件的类型，它们可能是单一的组件，也可能是视图级别，甚至布局级别。应该以它们的功能结尾，分别使用 `Component`、`Item`、 `View`、`Page` 和 `Layout` 等。

组件类型文件的命名应该使用大驼峰的写法。

```javascript
IconComponent.vue;
IconItem.vue;

HomeView.vue;
HomePage.vue;

GlobalLayout.vue;
```

::: tip
组件功能有很多，不一定只可以使用 `Component`，也可以显式的使用例如 `Button`、`Toast` 等，这时可以与组件的 name 一致。参看 [组件的 name 属性](#_1-4-组件的name属性)
:::

有一个特例，如果当前视图文件夹下只有一个文件，则应当使用`index.vue`作为文件名。

```javascript
|—— user_page
|      |—— index.vue

// 引用时直接引用到目录即可
import("../user_page/");
// or
import UserPage from "../user_page";
```

::: tip
使用 `index.vue` 这个特例时，注意文件夹的名称需要具有显式意义。
:::

### 1.4 组件的 name 属性

每一个组件都应该具有一个单独的名称，并且组件名必须是多个单词组成的，这是为了避免和 HTML 本身元素相冲突。

#### 1.4.1 组件名的创建

为了更好地使用名称，作为组件名称的起始，应当是这个项目的全称或缩写。

```javascript
export default {
  name: "JzIconItem"
  // ...
};
```

#### 1.4.2 基础组件名

有一些组件应该是基础的，它适用于很多地方。这时，该组件名应当具有一个比较通用的名称。

```javascript
BaseButton.vue;
```

```javascript
export default {
  name: "JzBaseButton"
};
```

#### 1.4.3 父子组件名

有一些紧密耦合的组件，这时子组件应当继承父组件名作为前缀。

```javascript
DataList.vue;
DataListItem.vue;
DataListItemIcon.vue;
```

#### 1.4.4 组件名的使用

在使用时，需要使用小写+连接字符“-”的形式。

```javascript
import IconItem from "../IconItem.vue";
Vue.component("jz-icon-item", IconItem);
```

但是并不推荐直接这样使用，因为每一个组件都应该具有一个 name 属性，这是 [组件名的创建](#_1-4-1-组件名的创建) 的规范，所以更推荐如下使用方式：

```javascript{3,7}
import IconItem from "../IconItem.vue";
// 全局注册
Vue.component(IconItem.name, IconItem);

// 局部注册
component{
  [IconItem.name]: IconItem
}
```

## 2 Prop 属性

定义 Prop 时，始终应该以小驼峰方式命名。而在组件传值时，使用小写+连接符“-”的方式。这是遵循语言特性，保持良好的代码风格。

同时，应当尽可能详细的为每一个 Prop 属性进行良好的类型说明，同时给出默认值并验证。

定义：

```javascript
props: {
    itemId: {
        type: Number,
        required: true
    },
    itemName: {
        type: String,
        validator: function(v) {
            return v !== ""
        }
    },
    itemProps: {
        type: Object,
        // 需要注意，对象的默认值应该是一个工厂函数返回的
        default: function() {
            return {
                uri: "xxx/xxx/.."
            }
        }
    }
}
```

使用：

```vue
<project-item :item-id="1" item-name="projectName"></project-item>
```

## 3 Vue 指令的使用

Vue 指令的使用，应当严格按照 Vue 的官方文档的介绍，比如`v-for`中，必须使用`key`。

## 4 \*.vue 文件的格式

vue 文件定义了每一个组件、视图或者布局内容，方便开发。使用 vue 文件，可能需要配置对应的 `vue-loader`，使用 `vue-cli` 创建项目可以更方便的开发。

::: tip
对于 `vs code` 用户，可以添加 `Vetur`、`Vue 2 Snippets`、`Prettier` 等插件帮助快速开发。
:::

`*.vue`文件是 Vue 的模板文件，它应当具有三个顶级标签：

```vue
<template>
  <div></div>
</template>

<script>
export default {
  // content
};
</script>

<style scoped></style>
```

对于 `ts` 用户，它应当为：

```vue
<template>
  <div></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ClassName extends Vue {
  // content
}
</script>

<style lang="stylus" scoped></style>
```

这个样式是一种规范，虽然它并不是强制的，但我们在编写`*.vue`文件时仍然必须按照此格式和标签顺序。

### 4.1 template 的内容

`template` 标签中的内容是 html 部分，它应当**包含且只包含一个**顶级元素。

::: danger
顶级元素中不可以使用 `v-for` 这样的属性。
:::

### 4.2 script 内容格式

每一个`*.vue`文件都是一个组件，它具有自己的生命周期和属性方法等，这些都在`<script>`标签中完成。标签内容应当按照下面的顺序进行开发。

同时，每一个属性之间都应当有一个空行。

```vue
<script>
export default {
  name: "Item",

  props: {},

  //... 生命周期函数
  created() {},

  mounted() {},

  destroyed() {},
  // ...

  inject: [],

  provide: {},

  mixins: [],

  data() {return {}},

  computed: {}

  watch: {}

  directives: {}

  filters: {}

  methods: {}

  components: {}

  // 如果使用
  render(h){}
};
</script>
```

如果属性为空，则可以不用填写，但总体的顺序应当是上述的顺序。

::: tip
这个顺序不是必须的，但它至少应当在同一项目中是保持一致的。
:::

## 2 JavaScript 规范

所有 JavaScript 内容都应当基于 [JavaScript 开发规范](/standard/javascript/)。

### JSX

Vue 支持使用 `JSX` 进行开发，它使用在 `render(h)` 函数中。应当遵循以下原则：

- 参数 `createElement` 的缩写为 `h`，这是官方文档约定的。
- 尽可能使用 `h("div", {}, [])` 的方式创建元素。如果需要使用 `JSX`，需要书写工整，缩进整齐。

## 3 CSS 规范

所有 CSS 内容都应当基于 [CSS 开发规范](/standard/css/)。

在`*.vue`文件中的 css，应当是具有作用域属性的。

同时，所有 css 属性也必须使用扩展的嵌套规则，推荐使用`scss`，`sass`，`stylus`等扩展的 css 语言。最好使用`stylus`。

```vue
<style lang="stylus" scoped></style>
```

### 3.1 使用 CSS 文件注入

一种更好的方式，是单独写 CSS 文件。

CSS 文件应当符合小写+“\_”下划线的命名规范。

CSS 文件应当放在`styles`文件夹下，然后在以导入的方式进行注入：

```javascript
import "@/styles/user_page.styl";
```

::: tip
对于那些功能文件夹下只有 `index.vue` 的组件来说，对应的 css 文件可以放在同级目录下。

```
icon_item
  |-- index.vue
  └-- index.styl
```

:::

## 4 注释

所有注释都应当遵循 JsDoc 的规范填写。

- 每一个模块、类、函数，都应该有一个区块注释。
- 每一个关键操作方法，都应该有一个单行/多行注释。
- 注释不应当与代码在同一行。

```javascript{2-6,9}
// right
/**
 * 多行注释
 */

// 单行注释

// wrong
var age = 18; // 年龄
```

### 4.1 模块注释

每一个模块，应当是一个单独的文件，它应当包含某一类的多个方法。需要在头部注释内写清当前模块作用域哪些内容，具有哪些内容，如何使用，编写时间，编写人，版本等信息。

```javascript
/**
 * @fileOverview: 模块功能是：xxx
 * @author: jeremyjone
 * @date: 2020/03/25
 * @version: 1.0.0
```

### 4.2 类注释/方法注释

每一个类/方法，都应当包含一个注释，写明当前类/方法所具有的功能和属性等。

```javascript
/**
 * @constructor Person
 * @description 一个Person类
 * @example new Person("Jeremy", 23);
 * @param {String} username 姓名
 * @param {Number} age 年龄
 */
class Person {
  constructor(username, age) {
    this.username = username;
    this.age = age;
  }
}

/**
 * @description 加法运算
 * @param {Number} num1 加数
 * @param {Number} num2 被加数
 * @return {Number} 结果
 */
function add(num1, num2) {
  return num1 + num2;
}
```
