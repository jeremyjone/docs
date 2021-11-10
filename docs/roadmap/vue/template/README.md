# 使用项目模板

## 如何添加模板

### 方法一

通过 [`degit`](https://github.com/Rich-Harris/degit) 安装：

首先安装 `degit`

```sh
npm install -g degit
```

然后可以下载模板。例如：

```sh
npx degit jeremyjone/<repertory_name> <project-name>
```

::: tip 提示
方法一创建的项目模板不包含 `git`，需要进入目录后手动执行 `git init` 方可。
:::

### 方法二

可以直接 clone 项目到本地即可。例如：

```sh
git clone https://github.com/jeremyjone/<repertory_name>.git
mv <repertory_name> <project-name>
```

## 模板地址

- [vue3-ts-template](https://github.com/jeremyjone/vue3-ts-template) - 包括 `vue 3`、`vue-router 4`、`axios`、`vuex 4`、`vite 2` 等工程化项目模板。

## 社区模板

vite 社区提供了很多免费模板，可以 [参考](https://github.com/vitejs/awesome-vite#templates)。
