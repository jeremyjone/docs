# 包管理器

包管理器负责安装、更新、卸载项目依赖。前端三个主流：**npm**、**yarn**、**pnpm**。

---

## npm

Node.js 自带，不用额外安装。

```bash
npm init -y              # 初始化项目，创建 package.json
npm install <pkg>        # 安装依赖
npm install -D <pkg>     # 安装开发依赖
npm uninstall <pkg>      # 卸载依赖
npm run <script>         # 运行脚本
```

**npm 的工作机制**：读取 `package.json` → 解析依赖树 → 下载到 `node_modules`。

### package-lock.json

锁定每个依赖的精确版本号，确保团队成员和 CI 环境安装的版本一致。

> `package-lock.json` 应该提交到 Git，不要忽略它。

---

## yarn

Facebook 开发的 npm 替代品，比早期的 npm 更快更稳定。

```bash
npm install -g yarn     # 安装
yarn init               # 初始化
yarn add <pkg>          # 添加依赖
yarn add -D <pkg>       # 添加开发依赖
yarn remove <pkg>       # 卸载
yarn <script>           # 运行脚本
```

### yarn.lock

功能同 `package-lock.json`，锁定依赖版本。

---

## pnpm（推荐）

pnpm 用**硬链接 + 符号链接**的方式存储依赖，相比 npm/yarn 有两个核心优势：

| 特性 | npm / yarn | pnpm |
|------|-----------|------|
| 磁盘占用 | 每个项目都复制一份依赖 | 全局 store 一份，项目间共享 |
| 安装速度 | 慢（重复下载） | 快（如果别的项目装过，直接链接） |
| 严格性 | 可以访问未声明的依赖 | 只能访问 `package.json` 里声明的依赖 |

```bash
npm install -g pnpm
pnpm init
pnpm add <pkg>
pnpm run dev
```

> **新项目推荐 pnpm**。它解决了 npm 的幽灵依赖问题，而且更省磁盘空间。在一个团队里有 10 个前端项目的电脑上，pnpm 能省几十 GB。
