# 实现一个全局指令

我们在按钮组件中用到了一个水波纹指令，我们以它为例，来实现一个全局指令的开发。

作为一个指令，首先我们要在 `directives` 文件夹下创建一个 `ripple` 文件夹，然后在里面创建一个 `index.ts` 文件。

## 指令的实现

首先，我们来思考一下，水波纹效果是怎么实现的？

最简单的实现方案，就是在点击的时候，创建一个元素，然后设置它的样式，然后在一段时间后移除它。

这里我们需要考虑的是：

- 水波纹的颜色
- 水波纹的大小
- 水波纹的位置
- 水波纹的动画
- 水波纹的持续时间

### 指令代码框架

```ts
import { type Directive, type DirectiveBinding } from "vue";
import "@/styles/base/_ripple.scss";

export interface RippleBinding {
  color?: string;
  disabled?: boolean;
}

export const vRipple: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding<RippleBinding>) {
  },

  unmounted(el: HTMLElement) {
    // 清理事件监听
  }
};
```

对于一个水波纹指令来说，它的逻辑为：用户点击触发后，挂载一个水波纹元素，然后在一段时间后移除它。

> 所以，我们只需要关注 `mounted` 和 `unmounted` 钩子即可。对于那种有更新的指令，我们还需要关注 `updated` 钩子。

```ts

export const vRipple: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding<RippleBinding>) {
    if (binding.value?.disabled) return;

    const { createRipple } = useRipple();

    // 确保元素有定位属性
    if (getComputedStyle(el).position === "static") {
      el.style.position = "relative";
    }

    el.classList.add("x-ripple-container");

    // 使用 mousedown 而不是 click
    const onMouseDown = (event: MouseEvent) => {
      createRipple(event, el, binding.value);
    };

    // 保存原始的点击事件处理器
    const originalClick = el.onclick;

    // 重写点击事件
    el.onclick = null; // 移除原始点击事件
    el.addEventListener("mousedown", onMouseDown);

    if (originalClick) {
      el.addEventListener("click", originalClick);
    }

    // 存储清理函数
    (el as any)._rippleCleanup = () => {
      el.removeEventListener("mousedown", onMouseDown);
      if (originalClick) {
        el.removeEventListener("click", originalClick);
      }
    };
  },

  unmounted(el: HTMLElement) {
    // 清理事件监听
    if ((el as any)._rippleCleanup) {
      (el as any)._rippleCleanup();
    }
  }
};
```

### 实现水波纹效果

上面的指令代码中，我们挂载后开始在元素上监听鼠标事件，当鼠标按下后，触发 `createRipple` 函数，创建一个水波纹元素。那么我们是如何创建的呢？我写了一个钩子方法。

```ts

export function useRipple() {
  const createRipple = (
    event: MouseEvent,
    el: HTMLElement,
    options: RippleOptions = {}
  ) => {
    if (options.disabled) return;

    const ripple = document.createElement("span");
    const rect = el.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    ripple.className = "x-ripple";
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    // 设置 ripple 的大小
    ripple.style.setProperty(
      "--x-ripple-size",
      `${Math.max(rect.width, rect.height) * 2}px`
    );

    if (options.color) {
      ripple.style.backgroundColor = options.color;
    }

    el.appendChild(ripple);

    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });
  };

  return {
    createRipple
  };
}
```

最后编写样式即可：

```scss
.x-ripple-container {
  overflow: hidden;
  position: relative;

  .x-ripple {
    position: absolute;
    border-radius: 50%;
    background-color: currentColor;
    opacity: 0;
    pointer-events: none;
    // 设置固定大小
    width: 0;
    height: 0;
    transform: translate(-50%, -50%);
    animation: x-ripple-enter 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }
}

@keyframes x-ripple-enter {
  0% {
    opacity: 0.6;
    width: 0;
    height: 0;
  }
  100% {
    opacity: 0;
    width: var(--x-ripple-size, 500px);
    height: var(--x-ripple-size, 500px);
  }
}
```

这样，一个完整的水波纹指令就可以正常创建了。
