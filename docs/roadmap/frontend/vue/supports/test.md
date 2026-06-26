# Vue 测试

测试是保证组件质量和防止回归的重要手段。Vue 生态中主要有两套测试方案。

---

## 测试类型

| 类型 | 衡量什么 | 速度 | 典型工具 |
|------|---------|------|---------|
| 单元测试 | 单个函数/组件逻辑 | 极快 | Vitest / Jest |
| 组件测试 | 组件渲染和交互 | 快 | Vue Test Utils |
| 端到端测试 | 用户真实操作流程 | 慢 | Playwright / Cypress |

> 推荐测试金字塔：**多写单元测试，适量组件测试，少量 E2E 测试**。

---

## Vue Test Utils + Vitest

Vue Test Utils 是 Vue 官方提供的组件测试工具库。

### 安装

```bash
# Vue 3 + Vitest（推荐）
npm install -D @vue/test-utils vitest jsdom
```

### 基本测试

```js
// MyComponent.spec.js
import { mount } from '@vue/test-utils';
import Counter from './Counter.vue';

describe('Counter', () => {
  it('renders initial count', () => {
    const wrapper = mount(Counter);
    expect(wrapper.text()).toContain('Count: 0');
  });

  it('increments on click', async () => {
    const wrapper = mount(Counter);
    await wrapper.find('button').trigger('click');
    expect(wrapper.text()).toContain('Count: 1');
  });
});
```

### 测试 Props

```js
import { mount } from '@vue/test-utils';
import Greeting from './Greeting.vue';

it('displays greeting from props', () => {
  const wrapper = mount(Greeting, {
    props: { name: 'Jeremy' }
  });
  expect(wrapper.text()).toBe('Hello, Jeremy!');
});
```

### 测试事件

```js
it('emits submit event', async () => {
  const wrapper = mount(LoginForm);
  await wrapper.find('form').trigger('submit.prevent');
  expect(wrapper.emitted()).toHaveProperty('submit');
  expect(wrapper.emitted('submit')[0]).toEqual([{ username: '' }]);
});
```

### 测试异步组件

```js
it('loads data on mount', async () => {
  const wrapper = mount(UserProfile, {
    global: {
      // 模拟 API 调用
      mocks: { $api: { getUser: () => Promise.resolve({ name: 'Test' }) } }
    }
  });

  await flushPromises();   // 等待所有异步操作完成
  expect(wrapper.text()).toContain('Test');
});
```

---

## 端到端测试（Playwright）

E2E 测试模拟真实用户操作，验证整个应用是否正常工作。

```js
import { test, expect } from '@playwright/test';

test('登录成功', async ({ page }) => {
  await page.goto('/login');
  await page.fill('[data-testid=username]', 'admin');
  await page.fill('[data-testid=password]', '123456');
  await page.click('[data-testid=submit]');

  await expect(page).toHaveURL('/dashboard');
  await expect(page.locator('.welcome')).toContainText('欢迎回来');
});
```

---

## 测试建议

1. **不要测试实现细节**——测"组件渲染了什么、用户交互后发生了什么"，不测"调用了哪个方法"
2. **用 data-testid 定位元素**——比 CSS class 更稳定，改样式不会破坏测试
3. **异步操作记得 await**——`trigger`、`setValue` 等操作是异步的
4. **外部依赖用 mock**——API 调用、路由、store 都 Mock 掉，只测组件自身逻辑
5. **CI 中运行**——`npm test` 集成到 CI pipeline，每次提交自动跑
