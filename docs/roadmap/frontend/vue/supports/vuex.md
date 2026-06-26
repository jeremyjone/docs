# Vuex

Vuex 是 Vue 2 时代的官方状态管理方案。Vue 3 推荐用 **Pinia**（下文有说明），但很多存量项目仍在使用 Vuex。

> Vuex 的核心思想：**单一数据源**（一个 store 存所有全局状态），通过"单向数据流"修改数据。

---

## State（状态）

组件通过 `this.$store.state.xxx` 读取 state。

```js
const store = new Vuex.Store({
  state: {
    count: 0,
    user: null,
  }
});

// 组件内使用
computed: {
  count() { return this.$store.state.count; }
}
```

### mapState 辅助函数

```js
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['count', 'user']),
    // 重命名或组合使用
    ...mapState({
      myCount: 'count',
      displayName(state) { return state.user?.name ?? '未登录'; }
    })
  }
}
```

---

## Getter（计算属性）

类似组件的 computed，对 state 做派生计算，结果会被缓存：

```js
const store = new Vuex.Store({
  state: { todos: [{ done: false }, { done: true }] },
  getters: {
    doneTodos: state => state.todos.filter(t => t.done),
    // getter 可以互相引用
    doneTodosCount: (state, getters) => getters.doneTodos.length,
    // 返回函数，支持传参
    getTodoById: state => id => state.todos.find(t => t.id === id),
  }
});
```

---

## Mutation（同步修改）

**唯一能改变 state 的方式**。mutation 是同步的：

```js
const store = new Vuex.Store({
  state: { count: 0 },
  mutations: {
    increment(state, payload) {
      state.count += payload.amount;
    }
  }
});

// 提交 mutation
store.commit('increment', { amount: 10 });
// 或使用 mapMutations
import { mapMutations } from 'vuex';
methods: { ...mapMutations(['increment']) }
```

> Mutation 必须是同步函数。异步操作需要在 Action 中处理。

---

## Action（异步操作）

Action 提交 mutation，本身可以包含异步逻辑：

```js
const store = new Vuex.Store({
  state: { user: null },
  mutations: {
    setUser(state, user) { state.user = user; }
  },
  actions: {
    async fetchUser({ commit }, userId) {
      const res = await api.getUser(userId);
      commit('setUser', res.data);
    }
  }
});

// 分发 action
store.dispatch('fetchUser', 123);
```

---

## Module（模块拆分）

项目大了以后，把所有状态写在一个 store 里会非常臃肿。module 用来拆分：

```js
const userModule = {
  namespaced: true,   // 启用命名空间
  state: () => ({ name: '' }),
  mutations: { setName(state, name) { state.name = name; } },
  actions: { /* ... */ },
  getters: { /* ... */ },
};

const cartModule = {
  namespaced: true,
  state: () => ({ items: [] }),
  mutations: { /* ... */ },
};

const store = new Vuex.Store({
  modules: {
    user: userModule,
    cart: cartModule,
  }
});

// 带命名空间访问
store.state.user.name;
store.commit('user/setName', 'Jeremy');
```

---

## 从 Vuex 到 Pinia

Vue 3 官方推荐使用 **Pinia** 替代 Vuex。核心差异：

| 对比 | Vuex | Pinia |
|------|------|-------|
| 语法 | Options API 风格 | Composition API 风格 ✅ |
| TypeScript | 支持较弱 | 原生完美支持 ✅ |
| Mutation | 需要 mutations + actions | 只有 actions，同步异步都行 ✅ |
| Module | namespaced 配置复杂 | 每个 defineStore 自动独立 ✅ |
| Devtools | 支持 | 支持 |
| 体积 | ~10KB | ~1KB ✅ |

**Pinia 示例：**

```js
// stores/user.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({ name: '', age: 0 }),
  getters: {
    displayName: (state) => state.name || '匿名用户',
  },
  actions: {
    async fetchUser(id) {
      const res = await api.getUser(id);
      this.name = res.data.name;   // 直接修改 state，不需要 commit
      this.age = res.data.age;
    }
  }
});

// 组件中使用
import { useUserStore } from '@/stores/user'
const user = useUserStore()
user.fetchUser(123)
```

> 新项目直接用 Pinia，不需要再学 Vuex。只有维护老项目才需要看 Vuex 的知识。
