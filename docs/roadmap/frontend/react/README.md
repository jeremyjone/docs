# React 学习之路

React 是一个声明式、组件化的 JavaScript UI 库，由 Meta（Facebook）开发和维护。

## 与 Vue 的核心差异

| 对比 | React | Vue |
|------|-------|-----|
| 数据绑定 | 单向（state + setState） | 双向（v-model） |
| 响应式 | 手动触发更新（setState） | 自动追踪依赖 |
| 模板语法 | JSX（JavaScript in HTML） | 模板（HTML in JavaScript） |
| 状态管理 | Redux / Zustand / Jotai | Pinia / Vuex |
| 学习曲线 | 相对陡峭（JSX + hooks + 生态选择） | 相对平缓 |
| 适用场景 | 大型复杂应用、跨平台（React Native） | 中小型到大型 |

## 学习路线

1. **JSX 语法** — HTML 和 JavaScript 混写的方式
2. **组件** — 函数组件 + Props
3. **Hooks** — `useState`、`useEffect`、`useContext`
4. **状态管理** — useState 足够就用，不够上 Zustand 或 Redux
5. **路由** — React Router
6. **构建** — Vite + React 模板
7. **进阶** — 性能优化（memo、useMemo、useCallback）、自定义 Hooks

## 推荐学习资源

- [React 官方文档](https://react.dev/) — 交互式教程，讲得很清楚
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

> React 和 Vue 没有绝对的优劣，取决于团队的技术栈偏好和项目需求。两者的核心思想（组件化、单向数据流、虚拟 DOM）本质相通。
