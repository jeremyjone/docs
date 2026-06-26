# Vue Router

Vue Router 是 Vue.js 的官方路由管理器，负责 URL 与页面组件的映射。

---

## 路由原理

前端路由有两种实现方式：

### Hash 模式

URL 中 `#` 后面的部分变化不会触发浏览器刷新，通过监听 `hashchange` 事件切换视图。

```
https://example.com/#/user/123
                  └── hash 部分，变化时不触发服务器请求
```

**优点**：兼容性好，无需服务端配置
**缺点**：URL 不美观，SEO 不友好

### History 模式

利用 HTML5 的 `pushState` 和 `replaceState` API 改变 URL，浏览器不会发送请求。

```
https://example.com/user/123
```

**优点**：URL 干净、真实
**缺点**：需要服务端做 fallback 配置（否则直接访问子路径会 404）

```nginx
# Nginx fallback 配置
location / {
  try_files $uri $uri/ /index.html;
}
```

---

## 基本用法

```js
// router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/user/:id', component: User },  // 动态匹配
];

const router = new VueRouter({
  mode: 'history',   // history 模式
  routes,
});

export default router;
```

```vue
<!-- App.vue -->
<template>
  <div>
    <router-link to="/">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-view />  <!-- 路由组件渲染位置 -->
  </div>
</template>
```

---

## 动态路由匹配

`:id` 是动态路径参数：

```js
{ path: '/user/:id', component: User }
// /user/123  →  params: { id: '123' }
// /user/abc  →  params: { id: 'abc' }
```

组件内获取参数：

```js
// 方式一：$route 对象（响应式）
this.$route.params.id

// 方式二：props 传递（推荐，更易测试）
{ path: '/user/:id', component: User, props: true }
// User 组件 props: { id: String }
```

### 匹配规则

```js
// 可选参数
{ path: '/user/:id?' }

// 多参数
{ path: '/user/:id/post/:postId' }

// 通配匹配（Vue Router 3 用 *，4 用 :pathMatch）
{ path: '/files/*' }       // 匹配 /files/xxx/yyy
```

> 路由匹配遵循**优先匹配原则**：定义越精确的规则越优先。通配符放在最后。

---

## 嵌套路由

页面有公共布局时，用嵌套路由减少重复：

```js
const routes = [
  {
    path: '/dashboard',
    component: DashboardLayout,   // 父组件，包含 <router-view>
    children: [
      { path: '', component: Overview },        // /dashboard
      { path: 'settings', component: Settings }, // /dashboard/settings
      { path: 'users', component: UserList },   // /dashboard/users
    ]
  }
];
```

---

## 导航守卫

在路由跳转前后执行逻辑：

### 全局守卫

```js
// 前置守卫——每次路由跳转前执行
router.beforeEach((to, from, next) => {
  const isLoggedIn = store.state.user.isLoggedIn;

  if (to.meta.requiresAuth && !isLoggedIn) {
    next('/login');     // 重定向到登录页
  } else {
    next();             // 放行
  }
});

// 后置守卫
router.afterEach((to, from) => {
  // 页面标题随路由变化
  document.title = to.meta.title || '默认标题';
});
```

### 路由独享守卫

```js
{
  path: '/admin',
  component: Admin,
  beforeEnter: (to, from, next) => {
    if (!isAdmin) next('/403');
    else next();
  }
}
```

### 组件内守卫

```js
export default {
  beforeRouteEnter(to, from, next) {
    // 进入路由前，组件实例还未创建（不能访问 this）
    next(vm => { /* vm 就是组件实例 */ });
  },
  beforeRouteUpdate(to, from, next) {
    // 路由参数变化但组件被复用时（如 /user/1 → /user/2）
    this.fetchUser(to.params.id);
    next();
  },
  beforeRouteLeave(to, from, next) {
    // 离开路由前，常用于提示未保存的更改
    if (this.hasUnsavedChanges) {
      const ok = confirm('有未保存的修改，确定离开吗？');
      if (!ok) next(false);   // 取消导航
    }
    next();
  }
}
```

---

## 路由懒加载

把组件切分成独立的 chunk，访问时才加载：

```js
// ❌ 打包成一个文件
import User from '@/views/User.vue';

// ✅ 按路由拆分，首屏只加载需要的
const User = () => import('@/views/User.vue');

// Vue Router 4 + Vue 3
const User = () => import('@/views/User.vue');
```

结合 `webpackChunkName` 给 chunk 命名：

```js
const User = () => import(/* webpackChunkName: "user" */ '@/views/User.vue');
const Admin = () => import(/* webpackChunkName: "admin" */ '@/views/Admin.vue');
```

---

## Vue Router 3 vs 4

| 特性 | Vue Router 3（Vue 2） | Vue Router 4（Vue 3） |
|------|----------------------|----------------------|
| 创建方式 | `new VueRouter()` | `createRouter()` |
| 历史模式 | `mode: 'history'` | `history: createWebHistory()` |
| API | Options API | Composition API |
| 通配符 | `*` | `/:pathMatch(.*)*` |
| TypeScript | 支持一般 | 原生支持 |

> 项目中用哪个取决于 Vue 版本：Vue 2 用 Router 3，Vue 3 用 Router 4，两者 API 基本兼容。
