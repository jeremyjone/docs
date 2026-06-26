# 构建工具

构建工具把源码转换成浏览器能运行的静态文件——编译模板、转译 JS、打包资源、压缩代码。现代前端基本离不开它。

---

## 三个时代

| 时代 | 代表工具 | 特点 |
|------|---------|------|
| 1.0（2015~2019） | Webpack 4 | 配置复杂但功能最强 |
| 2.0（2020~2022） | Webpack 5 + Vite 初始 | Vite 凭速度崛起 |
| 3.0（2023~至今） | **Vite**（主流） | 默认方案，ESBuild + Rollup |

> 新项目用 Vite，存量项目如果已经是 Webpack 且运行正常，不急着迁移。

---

## Vite（推荐）

Vite 是 Vue 作者尤雨溪开发的新一代构建工具。

### 为什么快

| 阶段 | Webpack | Vite |
|------|---------|------|
| 冷启动 | 需要先打包整个项目（秒→分钟级） | 按需编译入口文件即可（毫秒级） |
| 热更新 | 修改后重新打包受影响的部分 | 只编译修改的文件，毫秒级 |
| 构建 | Webpack（JS 打包） | Rollup（更优化的 tree-shake） |

Vite 开发时利用浏览器原生 ES Module，启动时不需要打包，所以冷启动极快。

### 配置文件

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: { '@': resolve(__dirname, 'src') }
  },
  server: {
    port: 3000,
    proxy: {
      '/api': { target: 'http://localhost:8080', changeOrigin: true }
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router', 'pinia'],  // 框架代码独立打包
        }
      }
    }
  }
});
```

### 常用命令

```bash
npm create vite@latest     # 创建项目
npm run dev                # 启动开发服务器（秒级）
npm run build              # 构建生产版本
npm run preview            # 预览构建结果
```

---

## Webpack（维护期）

大量存量项目仍在用 Webpack。核心概念：

```js
// webpack.config.js
module.exports = {
  entry: './src/main.js',        // 入口
  output: { filename: 'bundle.js', path: './dist' },
  module: {
    rules: [
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './index.html' }),
  ],
  devServer: { port: 8080 }
};
```

---

## Rollup

Rollup 专注于 ES Module 打包，生成的代码更干净。主要用于**库（library）**的构建，而非应用。

Vite 在构建阶段也使用 Rollup。

| | Webpack | Rollup | Vite |
|--|---------|--------|------|
| 定位 | 应用打包 | 库打包 | 应用开发+构建 |
| 配置复杂度 | 高 | 中 | 低 |
| 开发速度 | 慢 | 慢（无 HMR） | 极快 |
| 使用场景 | 现存 Webpack 项目 | npm 包发布 | 新项目首选 |

> **一句话总结**：新项目用 Vite，写库用 Rollup，维护老项目用 Webpack。
