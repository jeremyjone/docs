# 开发一个使用优雅的对话框

对话框是一个十分常用的组件，它在与用户交互时，可以提供有效信息，并帮助用户正确做出决策。在这一节中，我们将学习如何使用对话框组件。

## 对话框的需求

那么，我们首先来看一下对话框的需求。对话框的需求主要包括以下几个方面：

- 对话框的标题区
- 对话框的内容区
- 对话框的操作区

对话框的样式大体上都是分成三大块，这个不会变。我希望从使用上来说，对话框可以更加简洁。

## 对话框的实现

因为我们已经实现了 modal，所以对话框直接继承 modal 即可。

```ts

export interface DialogProps extends ModalProps {
  /**
   * 是否显示
   */
  visible?: boolean;
  /**
   * 标题
   */
  title?: string;
  /**
   * 是否显示关闭按钮
   */
  showClose?: boolean;
  /**
   * 宽度
   */
  width?: string | number;
  /**
   * 顶部距离（当 vertical 不为 center 时生效）
   */
  top?: string | number;
  /**
   * 内容是否水平居中
   */
  center?: boolean;
  /**
   * 垂直对齐方式
   */
  vertical?: VerticalAlign;
  /**
   * 固定内容高度
   */
  bodyHeight?: string | number;
  /**
   * 是否显示底部
   */
  showFooter?: boolean;
  /**
   * 自定义类名
   */
  customClass?: string;
}
```

有了 props，我们就可以开始实现对话框了。

```vue
<template>
  <XModal
    v-model:visible="dialogVisible"
    v-bind="omit($attrs, 'visible')"
    @show="emit('show')"
    @shown="emit('shown')"
    @hide="emit('hide')"
    @hidden="emit('hidden')"
  >
    <!-- 对话框主体 -->
    <div
      ref="dialogRef"
      :class="[
        'x-dialog',
        customClass,
        {
          'x-dialog--center': center,
          'x-dialog--fullscreen': fullscreen
        }
      ]"
      :style="{
        'z-index': 'var(--z-index)',
        width: wrapSize(props.width),
        ...dialogStyle
      }"
      role="dialog"
      aria-modal="true"
    >
      <!-- 头部 -->
      <div class="x-dialog__header">
        <slot name="title">
          <span class="x-dialog__title">{{ title }}</span>
        </slot>
        <XButton
          v-if="showClose"
          class="x-dialog__close"
          variant="text"
          @click="dialogVisible = false"
        >
          <XIcon name="line-md:close" />
        </XButton>
      </div>

      <!-- 内容区 -->
      <div
        class="x-dialog__body"
        :style="{ height: wrapSize(props.bodyHeight) }"
      >
        <XScroll content-style="padding: var(--x-dialog-padding);">
          <slot></slot>
        </XScroll>
      </div>

      <!-- 底部 -->
      <div v-if="showFooter && $slots.footer" class="x-dialog__footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </XModal>
</template>

<script lang="ts" setup>

defineOptions({
  name: "XDialog"
});

const props = withDefaults(defineProps<DialogProps>(), {
  visible: false,
  title: "标题",
  showClose: true,
  width: "50%",
  top: "15vh",
  showFooter: true
});
const emit = defineEmits(dialogEmits);
const dialogRef = ref<HTMLElement>();

const dialogVisible = computed({
  get() {
    return props.visible;
  },
  set(val) {
    emit("update:visible", val);
    emit("close", val);
  }
});

const dialogWidth = ref(0);
const dialogHeight = ref(0);
// 对话框位置计算
watch(
  () => dialogRef.value,
  () => {
    const rect = getBoundingClientRect(dialogRef.value);
    dialogWidth.value = rect?.offsetWidth ?? 0;
    dialogHeight.value = rect?.offsetHeight ?? 0;
  },
  { immediate: true }
);

// 对话框样式计算
const dialogStyle = ref({});
watchEffect(() => {
  if (props.fullscreen) return;

  const left = `calc(50% - ${dialogWidth.value / 2}px)`;
  if (props.vertical === "top") {
    dialogStyle.value = {
      top: 0,
      left
    };
  } else if (props.vertical === "bottom") {
    dialogStyle.value = {
      bottom: 0,
      left
    };
  } else if (props.vertical === "center") {
    dialogStyle.value = {
      top: `calc(50% - ${dialogHeight.value / 2}px)`,
      left
    };
  } else {
    dialogStyle.value = {
      top: wrapSize(props.top),
      left
    };
  }
});
</script>
```

这里，我特意处理了一下样式，我是希望对话框可以根据用户需求，可以自动东计算当前位置，包括整体 body 的高度。但这只是简单的大体处理了一下，可以保证对话框可以在页面内，超高时会自动出现滚动条。

当然，还有样式，这里就不写了，有兴趣的朋友可以去看源码，或者自己尝试写一下，很简单。

## 对话框的使用需求

有了对话框组件，接下来就是使用了。传统的使用来说，以 element 为例：

- 在 template 中写好对话框的内容
- 在 script 中写好对话框的逻辑
- 在 style 中写好对话框的样式

```vue
<template>
    <div>
        // ...当前组件内容
    </div>

    <el-dialog :visible.sync="dialogVisible">
        // ...对话框内容
    </el-dialog>
</template>

<script>
export default {
    data() {
        return {
            dialogVisible: false
        }
    }
}
</script>

<style>
// ...一些样式
</style>
```

这样的使用方式，对于开发者来说，是比较繁琐的。我们希望对话框的使用方式更加简洁。

```ts
showDialog() {
    this.$dialog(DialogComponent, {
        // ...对话框的参数
    });
}
```

这里，我们直接用函数，创建了一个对话框，传递一个对话框组件，保持了自定义内容的效果，同时可以使用不同参数进行个性化。

当时，我认为这还不够好，因为对于回调来说，这不够友好。这里有两种回调的方式：

- 参数回调。这种更加自由，允许用户任意使用任何回调，毕竟参数是自己写的。
- 通过 Promise 回调。我更喜欢这种编写方式。但是它有一些约束。下面我们来实现这种方式。

## 对话框的回调

首先，我们需要实现创建对话框的方法：

```ts
export function createDialog(
  content: typeof XDialogInstance,
  options: DialogOptions = {}
): DialogReturn {
  const { ...dialogProps } = options;

  const id = "x-dialog-" + generateId(12);

  // 创建容器
  const container = document.createElement("div");
  container.id = id;
  document.body.appendChild(container);

  // 这就是实现回调的关键
  let resolvePromise: (value: any) => void;
  let rejectPromise: (reason?: any) => void;

  // 创建包装组件
  const visible = ref(false);
  const Wrapper = defineComponent({
    setup() {
      // 处理确认
      const handleConfirm = (value?: any) => {
        visible.value = false;
        resolvePromise(value);
      };

      // 处理取消
      const handleCancel = (reason?: any) => {
        visible.value = false;
        rejectPromise(reason);
      };

      // 处理关闭
      const handleClose = () => {
        visible.value = false;
        rejectPromise("closed");
      };

      return () =>
        h(content, {
          dialogProps,
          visible: visible.value,
          "onUpdate:visible": (val: boolean) => {
            visible.value = val;
            if (!val) handleClose();
          },
          // 我们会发现在对话框里，需要提供这三个方法
          onConfirm: handleConfirm,
          onCancel: handleCancel,
          onClose: handleClose
        });
    }
  });

  const dialogInstance: DialogInstance = {
    // 提供手动关闭方法
    close: (value?: any) => {
      resolvePromise(value);
    },
    // 提供更新配置方法
    update: (newOptions: DialogOptions) => {
      Object.assign(options, newOptions);
    }
  };

  // 创建Promise
  const promise = new Promise((resolve, reject) => {
    resolvePromise = resolve;
    rejectPromise = reject;

    // 渲染对话框
    render(h(Wrapper), container);
    visible.value = true;
  }) as DialogReturn;

  // 附加实例方法到Promise
  promise.instance = dialogInstance;

  return promise;
}
```

仔细查看，这里有几个细节：

- 最后返回的一定是一个 Promise，或者 PromiseLike 对象，这样才可以使用 `then` 实现我们期望的回调。
- 创建组件时，没有使用常用的 `createApp`，而是直接使用 `render`，这样可以保证对话框的实例与当前页面实例不会有冲突。
- 为了实现回调，我们需要提供三个方法：`onConfirm`、`onCancel`、`onClose`，这三个方法是对话框的核心方法。

当然，这里没有实现对话框的销毁，这个可以根据实际情况来实现。

## 如何使用回调

为了使用，我们对即将创建的对话框组件需要有一些约定：

- 组件应当使用我们提供的 XDialog 作为根组件
- 组件中务必提供 `onConfirm`、`onCancel`、`onClose` 三个方法中的一个或多个，这个根据使用 then(需要 onConfirm)、catch(需要 onCancel/onClose) 来决定。

```vue
<template>
  <XDialog
    v-model:visible="visible"
    @update:visible="visible = $event"
    @confirm="handleConfirm"
    @cancel="handleCancel"
    @close="handleClose"
  >
    <slot></slot>
  </XDialog>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps<{
  visible: boolean;
  // ...其他参数
}>();
const emits = defineEmits(["update:visible", "confirm", "cancel", "close"]);

const handleConfirm = () => {
  emits("confirm");
};
const handleCancel = () => {
  emits("cancel");
};
const handleClose = () => {
  emits("close");
};
```

然后，我们就可以在需要的地方创建组件了：

```ts
const createDialog = () => {
    this.$dialog(DialogComponent, {
        // ...对话框的参数
    }).then(() => {
        // ...确认回调
    }).catch(() => {
        // ...取消回调
    });
}
```

这样使用起来，就会更加简洁，同时也可以保证对话框的回调更加友好。
