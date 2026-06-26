# Vue Devtools

Vue Devtools 是 Vue 官方提供的浏览器调试插件，支持 Chrome、Firefox、Edge。

> 开发阶段必备工具。没有它你就得靠 `console.log` 一点一点打，效率差太多。

---

## 安装

- **Chrome**：[Vue.js Devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
- **Firefox**：[Vue.js Devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
- **独立版**：`npm install -g @vue/devtools`（用于非浏览器环境，如 Electron）

---

## 核心功能

### Components 面板

查看组件树，包括：

- 组件的层级关系
- 组件的 props、data、computed
- 组件的 slots、事件、$refs
- 实时编辑数据（改值后页面立即更新）

### Timeline 面板

录制和查看：

- 组件生命周期（created、mounted、updated）
- Pinia / Vuex 的 mutation 和 action
- 性能火焰图（每个组件渲染耗时）
- 路由导航事件

### Pinia / Vuex 面板

- 查看和修改 store 中的 state
- 回放 mutation / action 历史
- 时间旅行调试（回到任意历史状态）

---

## 使用技巧

1. **审查事件**：在 Components 面板选中组件，Events 选项可以看到该组件触发的所有事件
2. **编辑实时数据**：在 Components 面板直接双击数值修改，页面同步生效——用来调试样式和状态变化非常方便
3. **性能录制**：Timeline → Performance，录制一段操作，找出渲染最慢的组件
4. **路由追踪**：安装 `vue-router` 后，Devtools 会显示路由切换历史

> 如果 Vue Devtools 不显示，检查：① 是否在生产模式下 ② Vue 版本是否兼容 ③ 扩展程序是否有权限访问该页面。
