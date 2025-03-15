# 开始着手创建一个组件库

根据上一章节的项目结构，我们先创建基本的项目结构。

## 开始之前

在开始之前，我想说：我之前写过一篇叫 [《搭建一个 UI 框架》](/roadmap/frontend/vue/framework/) 的文章，如果没有看过，我建议你先看一下，这样你会对整个流程有一个更好的认识。

如果已经看过了或者不想看，也没有关系，我们从这里开始也是可以的。

## 准备创建组件？

一般来说，我们首先尝试去创建一个最简单的组件，比如一个按钮组件。那么我们来思考一下，一个按钮组件需要哪些内容？

- 按钮的样式
- 按钮的大小
- 按钮的类型
- 按钮的禁用状态
- 按钮的点击事件

还有其他吗？

- 可能还需要一个图标
- 可能还需要一个加载状态

我们还想它可以更炫酷一点，比如按钮的点击时有一个波纹效果，这个时候我们就需要考虑到按钮的交互效果。

- 按钮的交互效果

## 创建组件文件结构

我们思考了一些，然后我们开始创建一个按钮组件。

首先，我们在 `packages/components` 目录下创建一个 `Button` 组件。

```bash
├──packages
│  ├──components
│  │  ├──button                   # 按钮组件
│  │  │  ├──__tests__             # 测试文件夹
│  │  │  │    ├──button.test.ts   # 按钮组件测试文件
│  │  │  ├──src                   # 源码文件夹
│  │  │  │    ├──button.vue       # 按钮组件文件
│  │  │  │    ├──prop.ts          # 属性文件
│  │  │  │    ├──style.ts         # 样式引入文件
│  │  │  ├──index.ts              # 入口文件
```

嗯，我们给组件规划了一个基础结构，后面我们每一个组件都按要大体上按照这个结构来操作，这样方便我们后续自动化打包。

我们来简单说明一下他们的作用：

- `__tests__`：测试文件夹，用来存放测试文件，在 vitest 中配置后，就会自动执行这里面的所有测试文件。当然，我们还特意规划了测试文件以 `.test.ts` 结尾，这样我们在查找测试文件的时候会更加方便。
- `src`：源码文件夹，用来存放组件的源码文件，我们会在这里面写我们的组件代码。
  - `button.vue`：所有源码文件默认以文件夹名称命名，这样我们在查找文件的时候会更加方便。如果是 SFC 文件，我们就以 `.vue` 结尾。如果是 jsx/tsx 文件，我们就以 `.tsx` 结尾。
  - `prop.ts`：属性文件。这里面包含了每一个组件的 props、emit、slots 等信息，方便我们导出类型声明，这在使用中会很有用。
  - `style.ts`：样式引入文件。为什么是一个 ts 文件？因为这样会避免用户没有单独引入样式文件，导致样式没有被引入的问题。这主要用在仅仅引入一个单文件的时候。真正的样式文件，会放在 `styles/components` 文件夹下。
- `index.ts`：入口文件。这个文件主要用来导出组件，方便用户引入。

这样我们就完成了一个组件的基本结构，接下来我们就可以开始写我们的组件了。

## 编写 Props

上面我们思考了一个按钮都需要哪些内容，那么我们接下来先把对应的 props 写出来。

```ts
export interface IButtonProps {
  /**
   * 按钮类型
   * @default 'default'
   */
  type?: "default" | "primary" | "secondary" | "success" | "warning" | "error" | "info";
  /**
   * 按钮大小
   * @default 'medium'
   */
  size?: "small" | "medium" | "large";
  /**
   * 按钮变体款式
   * @default 'filled'
   */
  variant?: "filled" | "light" | "outlined" | "text";
  /**
   * 按钮外观形状
   * @default 'default'
   */
  shape?: "default" | "round" | "circle" | "square";
  /**
   * 按钮是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 按钮是否加载中
   * @default false
   */
  loading?: boolean;
  /**
   * 按钮加载选项
   */
  loadingOptions?: Record<string, any>;
  /**
   * 按钮是否扁平化
   * @default false
   */
  flat?: boolean;
  /**
   * 按钮水波纹效果
   * @default true
   */
  ripple?: boolean;
}
```

::: info 为什么不用 对象 + PropType？

这其实是我踩过的一个坑，当我们使用对象 + PropType 的时候，打包完成后在使用时，类型提示会变得困难。

当我们用对象 + PropType 的时候，导出的类型需要：

```ts
const buttonProps = {
    type: {
        type: String as PropType<"default" | "primary" | "secondary" | "success" | "warning" | "error" | "info">,
        default: "default",
    },
    size: {
        type: String as PropType<"small" | "medium" | "large">,
        default: "medium",
    },
    ...
}

// 导出类型
export type IButtonProps = ExtractPropTypes<typeof buttonProps>;
```

这样导出的内容，因为我们使用了 default，会导致它是必填项，这是错误的。然而当我们套一个 `Partial` 的时候，类型提示就会丢失。

我没有去深究这个问题，因为我认为这归根到底是 TypeScript 的问题，所以我选择了直接使用接口的方式，这样我们就可以直接使用默认值，而不会导致必填项的问题。

那么有人会问了，这样会丢失默认值，吗？

答案是会的。所以我们需要在组件中做一些调整，使用 `withDefaults` 来处理默认值，就不会出现问题。比如：

```vue
<script setup lang="ts">
import { withDefaults } from "vue";

const props = withDefaults(defineProps<IButtonProps>(), {
  type: "default",
  size: "medium",
  ...
});
</script>
```

:::

## 编写组件

接下来我们就可以开始编写我们的组件了。

```vue
<template>
  <button
    :class="[
      'x-button',
      `x-button--${type}`,
      `x-button--${variant}`,
      `x-button--${shape}`,
      `x-button--${size}`,
      {
        'x-button--flat': flat,
        'x-button--disabled': disabled,
        'x-button--loading': loading
      }
    ]"
    :disabled="disabled || loading"
    v-ripple="{
      disabled: !ripple || variant === 'text' || disabled || loading
    }"
    v-loading="[loading ?? false, loadingOptions ?? {}]"
    @click="handleClick"
    @mousedown="handleLongPress"
    @mouseup="clearLongPress"
    @mouseleave="clearLongPress"
  >
    <!-- 前置图标 -->
    <span v-if="$slots.icon" class="x-button__icon">
      <slot name="icon"></slot>
    </span>

    <!-- 默认内容 -->
    <span class="x-button__content">
      <slot></slot>
    </span>
  </button>
</template>
```

这里我们使用了一些特性：

- `v-ripple`：水波纹效果，这个是我们自己封装的一个指令，后面我们会讲到。
- `v-loading`：加载中效果，这个是我们自己封装的一个指令，后面我们会讲到。
- 除了普通的点击事件，还添加了一个长按事件。为了实现长按事件，我们需要在 `mousedown` 事件中设置一个定时器，然后在 `mouseup` 和 `mouseleave` 事件中清除定时器。
- 具有图标插槽，可以在按钮前面插入一个图标。
- 内容需要用一个 content 样式类包裹一下

总体来说还是比较简单的。下面继续来实现 js 部分：

```vue
<script lang="ts" setup>
import { ref } from "vue";
import { vRipple } from "@/directives/ripple/index.ts";    // 水波纹指令
import { vLoading } from "@/directives/loading/index.ts";  // 加载指示指令
import { buttonEmits, type ButtonProps } from "./props";

defineOptions({
  name: "XButton"
});

const props = withDefaults(defineProps<ButtonProps>(), {
  ripple: true,
  loading: false,
  disabled: false,
  flat: false,
  type: "default",
  variant: "filled",
  shape: "default"
});
const emit = defineEmits(buttonEmits);

const longPressTimer = ref<number | null>(null);

const handleClick = (event: MouseEvent) => {
  if (props.disabled || props.loading) return;
  emit("click", event);
};

const handleLongPress = (event: MouseEvent) => {
  if (props.disabled || props.loading) return;

  longPressTimer.value = window.setTimeout(() => {
    emit("longpress", event);
  }, 500);
};

const clearLongPress = () => {
  if (longPressTimer.value) {
    clearTimeout(longPressTimer.value);
    longPressTimer.value = null;
  }
};
</script>
```

没有多余的内容，仅仅是传入的 props 完成了所有样式，然后处理一下事件。

接下来，我们将会处理样式、指令等内容。
