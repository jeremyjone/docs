# 组件间的数据传递

有时候，我们的一些组件需要传递数据，这些数据是用户提供的，但是需要组件内隐性传递，此时可以使用注入的方式传递数据。

我们以 `checkbox` 为例，它应当具有 `checkbox` 和 `checkbox-group` 两个组件，但它们属于强相关，甚至 `checkbox` 应当是 `checkbox-group` 的子组件，此时我们可以使用注入的方式传递数据。

## 通过 provide 和 inject 传递数据

我们首先定义传递的数据类型：

```typescript
export type CheckboxGroupContext = {
  name: string;
  modelValue: Ref<(string | number)[]>;
  disabled: Ref<boolean>;
  size: Ref<ComponentSize>;
  type: Ref<ComponentType>;
  direction: Ref<Direction>;
  gap: Ref<string | number>;
  registerChild?: (value: string | number) => void;
  unregisterChild?: (value: string | number) => void;
  changeEvent: (value: (string | number)[]) => void;
};
```

因为数据需要联动，所以我们需要定义为响应式的数据，才可以实现上下层联动。

然后我们在 `checkbox-group` 组件中定义一个 `provide`：

```typescript
// 提供给子组件的上下文
provide<CheckboxGroupContext>("checkbox-group", {
  name: "checkboxGroup",
  modelValue: computed(() => props.modelValue),
  disabled: computed(() => props.disabled),
  size: computed(() => props.size ?? "medium"),
  type: computed(() => props.type ?? "default"),
  direction: computed(() => props.direction ?? "horizontal"),
  gap: computed(() => props.gap ?? 0),
  registerChild,
  unregisterChild,
  changeEvent: value => {
    emit("update:modelValue", value);
    emit("change", value);
  }
});
```

在 `checkbox` 组件中使用 `inject`：

```typescript
// 注入 group 上下文
const checkboxGroup = inject<CheckboxGroupContext | null>(
  "checkbox-group",
  null
);
```

这样，我们就可以正常在 `checkbox` 组件对应的参数了。它们应当具有优先级：

`inject` > `props` > `default`。

```typescript
const currentSize = computed(
  () => checkboxGroup?.size?.value || props.size || "medium"
);
const currentType = computed(
  () => checkboxGroup?.type?.value || props.type || "default"
);
const currentDisabled = computed(
  () => checkboxGroup?.disabled?.value || props.disabled
);
```

这样，我们就可以实现组件间的数据传递了。

## 注册组件

在 `checkbox-group` 中，我们需要有一个操作，判断是否全选，这时候我们需要注册子组件。我们已经在 provide 中提供了注册方法，所以直接调用即可：

```typescript
// checkbox 组件
onMounted(() => {
  if (checkboxGroup && props.value) {
    checkboxGroup.registerChild?.(props.value);
  }
});

// 在组件卸载时注销
onUnmounted(() => {
  if (checkboxGroup && props.value) {
    checkboxGroup.unregisterChild?.(props.value);
  }
});

// checkbox-group 组件
// 存储子组件的值列表
const childValues = ref<(string | number)[]>([]);
// 注册子组件
const registerChild = (value: string | number) => {
  if (value && !childValues.value.includes(value)) {
    childValues.value.push(value);
  }
};

// 注销子组件
const unregisterChild = (value: string | number) => {
  const index = childValues.value.indexOf(value);
  if (index > -1) {
    childValues.value.splice(index, 1);
  }
};
```
