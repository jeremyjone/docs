# 性能优化

前端性能优化直接影响用户体验——加载速度、交互响应、动画流畅度，每一项都决定用户是否愿意留下来。

---

## 衡量标准

### Core Web Vitals（核心网页指标）

Google 在 2020 年推出的用户体验量化标准，直接影响搜索排名：

| 指标 | 全称 | 衡量什么 | 合格线 | 好 |
|------|------|---------|--------|------|
| **LCP** | Largest Contentful Paint | 最大内容元素加载时间 | ≤ 2.5s | ≤ 1.8s |
| **FID** | First Input Delay | 首次交互响应延迟 | ≤ 100ms | ≤ 50ms |
| **CLS** | Cumulative Layout Shift | 页面布局累计偏移量 | ≤ 0.1 | ≤ 0.05 |

> 2024 年起 **INP**（Interaction to Next Paint）将取代 FID，衡量页面所有交互的响应速度。

### RAIL 模型

Google 提出的用户体验模型，关注用户操作的生命周期：

| 维度 | 目标 | 为什么 |
|------|------|--------|
| Response | 事件处理 ≤ 50ms | 用户点击后 50ms 内必须有反馈 |
| Animation | 每帧 ≤ 10ms | 60fps = 16.6ms/帧，留 6ms 给 JS |
| Idle | 充分利用空闲时间 | 用 `requestIdleCallback` 做非紧急任务 |
| Load | 加载 ≤ 5s（移动端） | 5s 后仍未加载完，53% 用户会离开 |

---

## 加载优化

### 1. 资源压缩

```nginx
# Nginx 启用 Gzip / Brotli
gzip on;
gzip_types text/css application/javascript image/svg+xml;
gzip_comp_level 6;

# Brotli 压缩率比 Gzip 高 20~30%，但需要额外安装
brotli on;
brotli_types text/css application/javascript;
```

**效果**：CSS/JS 可压缩 70~80%，JSON API 响应可压缩 85%+。

### 2. 代码拆分（Code Splitting）

不要把所有代码打包成一个 JS 文件：

```js
// 路由级拆分（React）
const Dashboard = React.lazy(() => import('./Dashboard'));

// Vue 3 动态导入
const Dashboard = () => import('@/views/Dashboard.vue');

// 组件级拆分：只在需要时加载
const Editor = lazy(() => import('./Editor'));
```

**效果**：首页 JS 减少 60~80%，首屏加载时间减半。

### 3. Tree Shaking

利用 ES Module 的静态分析能力，去掉没用的代码：

```json
// package.json
{
  "sideEffects": false,  // 告诉打包器可以安全删除未引用代码
  "sideEffects": ["*.css"]  // CSS 有副作用，不能摇掉
}
```

> 确保项目使用 ES Module（`import/export`），CommonJS（`require`）无法 tree shake。

### 4. 图片优化

图片通常是页面体积最大的资源：

| 格式 | 压缩率(相对JPEG) | 浏览器支持 | 适用场景 |
|------|-----------------|-----------|---------|
| WebP | 小 25~35% | 95%+ | 通用替代 JPEG/PNG |
| AVIF | 小 50%+ | ~85% | 新项目优先尝试 |
| SVG | 无损 | 100% | 图标、插画、Logo |

**响应式图片**：

```html
<img
  src="photo-800w.webp"
  srcset="
    photo-400w.webp 400w,
    photo-800w.webp 800w,
    photo-1200w.webp 1200w
  "
  sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
  loading="lazy"
  alt=""
>
```

**懒加载**：

```html
<!-- 原生懒加载，不用任何 JS 库 -->
<img loading="lazy" src="photo.jpg" alt="">
<iframe loading="lazy" src="map.html"></iframe>
```

### 5. 资源提示（Resource Hints）

告诉浏览器提前做什么：

```html
<!-- 提前解析 DNS（几乎零成本） -->
<link rel="dns-prefetch" href="//api.example.com">

<!-- 提前建立 TCP 连接（比 DNS 多一步） -->
<link rel="preconnect" href="//cdn.example.com">

<!-- 提前加载关键资源（慎用，会消耗带宽） -->
<link rel="preload" href="critical.css" as="style">

<!-- 下个页面可能需要的资源（浏览器空闲时加载） -->
<link rel="prefetch" href="next-page.js" as="script">
```

> `preconnect` 比 `dns-prefetch` 更激进，建议只对关键第三方域名使用。

### 6. 关键 CSS（Critical CSS）

首屏所需的 CSS 内联到 HTML 中，非关键 CSS 异步加载：

```html
<head>
  <!-- 关键 CSS 直接内联 -->
  <style>
    .header { position: fixed; ... }
    .hero { min-height: 100vh; ... }
  </style>

  <!-- 剩余 CSS 异步加载 -->
  <link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="styles.css"></noscript>
</head>
```

### 7. HTTP 缓存策略

```nginx
# 静态资源：内容哈希命名，可以永久缓存
location /static/ {
  expires 1y;
  add_header Cache-Control "public, immutable";
}

# HTML：不能缓存，必须每次检查最新
location / {
  add_header Cache-Control "no-cache";
}

# API 响应：按业务需求
location /api/ {
  add_header Cache-Control "private, max-age=60";
}
```

---

## 运行时优化

### 1. 减少重排重绘

详细内容见 [原理部分——避免 DOM 的回流](/roadmap/frontend/advanced/principle.html#避免-dom-的回流)。核心原则：

- 批量修改样式（`cssText` 或 class）
- 使用 `transform` 替代 `left/top` 做动画
- 动画元素用 `position: fixed/absolute` 脱离文档流
- 用 `documentFragment` 批量插入 DOM

### 2. 长任务拆分（Long Tasks）

超过 50ms 的 JS 任务会阻塞主线程，导致用户操作无响应：

```js
// ❌ 一个长任务阻塞主线程 200ms
function processBigData(items) {
  items.forEach(item => heavyWork(item));
}

// ✅ 拆分成多个小任务，每帧只做一部分
function processBigData(items) {
  let i = 0;
  function chunk() {
    const start = performance.now();
    while (i < items.length && performance.now() - start < 30) {
      heavyWork(items[i]);
      i++;
    }
    if (i < items.length) {
      requestAnimationFrame(chunk);  // 下一帧继续
    }
  }
  requestAnimationFrame(chunk);
}
```

对于 Vue/React 这类框架，虚拟列表（仅渲染可视区域内的元素）是处理大数据列表的标准做法。

### 3. requestAnimationFrame

所有动画效果都用 `requestAnimationFrame`，不要用 `setTimeout/setInterval`：

```js
// ❌ 不精确，可能丢帧
setInterval(() => moveElement(), 16);

// ✅ 与屏幕刷新同步，CPU 不使用时停止
function animate() {
  moveElement();
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
```

### 4. Web Workers

CPU 密集型任务放到 Worker 线程，避免阻塞 UI：

```js
// main.js
const worker = new Worker('worker.js');
worker.postMessage(largeData);
worker.onmessage = (e) => {
  updateUI(e.data);
};

// worker.js
self.onmessage = (e) => {
  const result = processHeavyData(e.data);
  self.postMessage(result);
};
```

不能访问 DOM，但适合：数据处理、加密、图像处理、编译。

---

## 网络优化

### HTTP/2 与 HTTP/3

| | HTTP/1.1 | HTTP/2 | HTTP/3 |
|--|----------|--------|--------|
| 连接 | 每个域名 6~8 个 | 多路复用（1 个连接） | 多路复用 |
| 队头阻塞 | 有 | 解决了（TCP 层仍有） | 彻底解决（QUIC） |
| 推送 | 无 | Server Push（已移除） | 无 |
| 加密 | 可选 | 事实必须 | 强制 |

**HTTP/2 注意事项**：
- 不再需要合并文件（资源分散反而利于缓存）
- 不再需要域名分片（一个连接就够了）
- 使用 CDN 支持 HTTP/2

### 预渲染与服务端渲染（SSR）

| 方案 | 首屏加载 | SEO | 交互 | 适用场景 |
|------|---------|-----|------|---------|
| SPA | 慢（先加载 JS） | 差 | 快（hydration 后） | 后台管理 |
| SSR | 快（直接返回 HTML） | 好 | 慢（hydrate 前不可交互） | 内容站、电商 |
| SSG | 极快（纯静态 HTML） | 好 | 快 | 文档站、博客 |
| Islands | 按需激活交互组件 | 好 | 快 | 内容为主的页面 |

---

## 性能分析工具

| 工具 | 用途 |
|------|------|
| **Lighthouse** | 综合评分（LCP/FID/CLS 等），CI 可集成 |
| **Chrome DevTools Performance** | 录制分析 JS 执行、布局、绘制、内存 |
| **WebPageTest** | 多地区、多设备真实测试，瀑布图 |
| **BundlePhobia** | 检查 npm 包的体积和依赖 |
| **source-map-explorer** | 分析打包后的 JS 中各模块占比 |

> 性能优化的黄金法则：**先测量，再优化，不要猜**。在 Lighthouse 拿到 90+ 之前，不要盲目折腾微优化。
