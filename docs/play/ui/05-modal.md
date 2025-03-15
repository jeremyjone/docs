# 创建一个蒙层

蒙层是一个遮罩层，它是一个通用基础模板，主要阻止用户与页面的交互。蒙层可以用在多个地方，比如创建模态框、弹出框等组件。

## 蒙层需要做什么

首先我们需要思考一个蒙层应该具有什么功能：

- 蒙层需要遮住整个页面，阻止用户与页面的交互。
- 蒙层需要有一定的透明度，以便用户能够看到页面的内容。
- 蒙层需要提供关闭功能，以便用户可以关闭蒙层。
- 挂载到 body 中
- 层级问题
- 动画

## 实现一个蒙层

### 声明 props

```ts
export type AppendTo = string | HTMLElement | null;

export interface ModalProps {
  /**
   * 是否显示
   */
  visible?: boolean;
  /**
   * 挂载节点
   */
  appendTo?: AppendTo;
  /**
   * 是否在按下 Esc 键时关闭
   */
  esc?: boolean;
  /**
   * 是否锁定滚动
   */
  lockScroll?: boolean;
  /**
   * 是否显示遮罩
   */
  mask?: boolean;
  /**
   * 是否在点击遮罩时关闭
   */
  maskClosable?: boolean;
  /**
   * 是否全屏
   */
  fullscreen?: boolean;
  /**
   * 遮罩层z-index
   */
  zIndex?: number;
  /**
   * 过渡动画名称
   */
  transitionName?: TransitionName | false;
}
```

### 创建组件

```vue
<template>
  <Teleport :to="appendTo || 'body'" :disabled="!appendTo || !visible">
    <Transition
      :name="currentTransitionName"
      @before-enter="emit('show')"
      @after-enter="emit('shown')"
      @before-leave="emit('hide')"
      @after-leave="emit('hidden')"
    >
      <template v-if="visible">
        <div
          v-if="mask"
          class="x-modal"
          :style="{
            '--z-index': zIndex ?? zIndexModal
          }"
          @click.self="handleMaskClick"
        >
          <slot />
        </div>

        <slot v-else />
      </template>
    </Transition>
  </Teleport>
</template>

<script lang="ts" setup>
import { computed, toRef, watch } from "vue";
import { type ModalProps, modalEmits } from "./props";
import { useModal } from "./useModal";
import { useEsc } from "@/hooks/useEsc";
import { useTransition } from "@/hooks/useTransition";
import "./style.ts";

const props = withDefaults(defineProps<ModalProps>(), {
  visible: false,
  appendTo: "body",
  esc: true,
  lockScroll: true,
  mask: true,
  maskClosable: true,
  fullscreen: false,
  zIndex: 4000,
  transitionName: "x-fade"
});
const emit = defineEmits(modalEmits);
const { zIndex: zIndexModal, handleVisibilityChange } = useModal({
  visible: toRef(props, "visible"),
  lockScroll: toRef(props, "lockScroll")
});

// 监听可见性变化
watch(
  () => props.visible,
  async val => {
    handleVisibilityChange(val);
  }
);

const handleMaskClick = () => {
  if (props.maskClosable) {
    emit("update:visible", false);
  }
};

useEsc(toRef(props, "visible"), toRef(props, "esc"), () =>
  emit("update:visible", false)
);

const { transitionName: currentTransitionName } = useTransition(
  computed(() => props.transitionName)
);
</script>
```

### 实现钩子方法

```ts
import { type Ref, watch } from "vue";
import { useZIndex } from "@/hooks/useZIndex";
import { useScrollLock } from "@/hooks/useScrollLock";

export function useModal(props: {
  visible: Ref<boolean>;
  lockScroll: Ref<boolean>;
}) {
  const { zIndex, generateZIndex } = useZIndex();
  const { lock, unlock } = useScrollLock(props.visible, props.lockScroll);

  const handleVisibilityChange = (visible: boolean) => {
    if (visible) {
      generateZIndex();
      if (props.lockScroll.value) lock();
    } else {
      if (props.lockScroll.value) unlock();
    }
  };

  watch(
    () => props.visible.value,
    val => {
      handleVisibilityChange(val);
    }
  );
  return {
    zIndex: zIndex.value,
    handleVisibilityChange
  };
}
```

其中，这里有几个通用的钩子方法：

- `useEsc`：用于处理按下 Esc 键时的操作
- `useTransition`：用于处理过渡动画
- `useZIndex`：用于生成一个 z-index
- `useScrollLock`：用于锁定滚动

它们都在全局 hooks 中定义和实现。

```ts
// useEsc.ts

import { useEventListener } from "@/hooks/useEvent";
import { type Ref } from "vue";

export function useEsc(
  visible: Ref<boolean>,
  esc: Ref<boolean>,
  onEsc?: () => void
) {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape" && esc.value && visible.value) {
      onEsc?.();
    }
  };

  useEventListener(document, "keydown", handleKeyDown);
}
```

```ts
// useTransition.ts
import { type TransitionName } from "@/types/basic";
import { type Ref, computed } from "vue";

const TransitionMap: Record<TransitionName, string> = {
  "x-fade": "x-fade",
  "x-zoom": "x-zoom",
  "x-slide": "x-slide",
  "x-slide-up": "x-slide-up",
  "x-slide-down": "x-slide-down",
  "x-slide-left": "x-slide-left",
  "x-slide-right": "x-slide-right"
};

export function useTransition(transition: Ref<TransitionName | false>) {
  const transitionName = computed(() =>
    transition.value === false
      ? "no-transition"
      : TransitionMap[transition.value] || "x-fade"
  );

  return {
    transitionName
  };
}
```

```ts
// useZIndex.ts
import { computed, ref } from "vue";

const zIndexCounter = ref(4000);

export function useZIndex() {
  const generateZIndex = () => {
    zIndexCounter.value += 1;
  };

  const resetZIndex = () => {
    zIndexCounter.value = 4000;
  };

  return {
    zIndex: computed(() => zIndexCounter.value),
    generateZIndex,
    resetZIndex
  };
}
```

```ts
// useScrollLock.ts
import { watch, type Ref } from "vue";

let lockCount = 0;
const originalStyles = new Map<HTMLElement, string>();

export function useScrollLock(visible: Ref<boolean>, lockScroll: Ref<boolean>) {
  const lock = (el: HTMLElement = document.body) => {
    if (lockCount === 0) {
      originalStyles.set(el, el.style.overflow);
      el.style.overflow = "hidden";
    }
    lockCount++;
  };

  const unlock = (el: HTMLElement = document.body) => {
    lockCount--;
    if (lockCount === 0) {
      const originalStyle = originalStyles.get(el);
      if (originalStyle !== undefined) {
        el.style.overflow = originalStyle;
        originalStyles.delete(el);
      }
    }
  };

  watch(
    () => visible.value && lockScroll.value,
    value => {
      if (value) {
        lock();
      } else {
        unlock();
      }
    }
  );

  return { lock, unlock };
}
```

## 样式编写

样式很简单，只需要一个的蒙层基础样式即可。重点就是需要全屏，所以需要设置 `position: fixed`，并且设置 `top: 0; right: 0; bottom: 0; left: 0;`。

```scss
.x-modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--x-bg-color-mask);
  backdrop-filter: blur(10px);
  z-index: var(--z-index);
}
```
