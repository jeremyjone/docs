# Vue CLI

Vue CLI 是 Vue 2 时代的官方脚手架工具。Vue 3 官方推荐使用 **Vite**（[见构建工具](/roadmap/frontend/engineer/build.html)）作为替代。

> Vue CLI 基于 Webpack，Vite 基于 ESBuild + Rollup。**新项目直接用 Vite，不要再装 Vue CLI。**

---

## 基本命令

```bash
# 安装
npm install -g @vue/cli

# 创建项目
vue create my-project

# 运行开发服务
npm run serve

# 构建生产版本
npm run build
```

---

## Vue CLI 的主要能力

| 功能 | 说明 |
|------|------|
| 项目脚手架 | 交互式选择 Babel、TS、Router、Vuex、CSS 预处理器 |
| 插件系统 | `vue add router`、`vue add vuex` 等 |
| Webpack 配置 | 通过 `vue.config.js` 覆盖，无需 eject |
| 环境变量 | `.env`、`.env.development`、`.env.production` |
| PWA 支持 | `vue add pwa` |

### vue.config.js 常用配置

```js
module.exports = {
  publicPath: '/',             // 部署路径
  outputDir: 'dist',           // 构建输出目录
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      }
    }
  },
  chainWebpack: config => {
    // 自定义 webpack 配置
    config.plugins.delete('prefetch');
  }
};
```

---

## 迁移到 Vite

从 Vue CLI 迁移到 Vite 的主要改动：

| 项目 | Vue CLI | Vite |
|------|---------|------|
| 开发服务器 | Webpack Dev Server | 基于 ESBuild，冷启动快 10x |
| 构建 | Webpack | Rollup |
| 配置文件 | `vue.config.js` | `vite.config.ts` |
| 环境变量 | `process.env.VUE_APP_*` | `import.meta.env.VITE_*` |
| 图片引用 | `require('./assets/logo.png')` | `import logo from './assets/logo.png'` |

> 如果项目已经是 Vue CLI，没有特殊问题不建议迁移。但**新项目一律用 Vite**。
