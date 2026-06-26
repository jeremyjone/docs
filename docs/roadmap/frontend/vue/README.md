# Vue 学习之路

Vue 是国产前端框架，以**易上手、渐进式**著称。从简单的页面交互到复杂的大型应用，Vue 都能覆盖。

## 学习路线

建议按以下顺序学习：

1. **[Vue 基础](/roadmap/frontend/vue/basic/component.html)** — 组件基础、模板语法、响应式绑定
2. **[组件通信](/roadmap/frontend/vue/basic/component.html)** — props、emit、slot、provide/inject
3. **[v-model](/roadmap/frontend/vue/basic/v-model.html)** — 双向绑定的原理与自定义组件实现
4. **[MVVM](/roadmap/frontend/vue/mvvm.html)** — 理解 Vue 的数据驱动视图模式
5. **[响应式原理](/roadmap/frontend/vue/reactive.html)** — 深入 Vue 3 的 Proxy 响应式系统
6. **[虚拟 DOM](/roadmap/frontend/vue/virtualdom.html)** — 理解 Diff 算法和渲染更新过程
7. **Vue 生态**
   - 路由：[Vue Router](/roadmap/frontend/vue/supports/router.html)
   - 状态管理：[Vuex / Pinia](/roadmap/frontend/vue/supports/vuex.html)
   - 构建工具：[Vue CLI 与 Vite](/roadmap/frontend/vue/supports/cli.html)
   - 测试：[Vue Test Utils](/roadmap/frontend/vue/supports/test.html)
8. **工程化实践**
   - [从零搭建项目](/roadmap/frontend/vue/template/) — 从创建到部署的完整流程
   - [框架对比](/roadmap/frontend/vue/framework.html) — Vue vs React vs Angular

## Vue 2 vs Vue 3

| 特性 | Vue 2 | Vue 3 |
|------|-------|-------|
| 响应式 | Object.defineProperty | Proxy ✅ |
| API | Options API | Options API + Composition API ✅ |
| TypeScript | 支持较弱 | 原生支持 ✅ |
| 性能 | 基础 | 快 1.3~2x ✅ |
| 包体积 | 约 30KB | 约 20KB（gzip）✅ |
| 状态管理 | Vuex | Pinia（推荐） |
| 脚手架 | Vue CLI | Vite |

> **现在是 2025 年，新项目直接用 Vue 3**。Vue 2 已进入维护状态（2023.12 停止维护）。
