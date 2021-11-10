# 从 0 搭建项目模板（vue3）

为简化每次初始化项目，最好的方法就是搭建一个项目模板，这样每次初始化的时候直接拉取就好，不用再一个一个进行配置，省去了大量时间。

该内容模板已经在 [Github](https://github.com/jeremyjone/vue3-ts-template)，如果需要，可以直接下载使用。具体使用方法可以查看 [Github](https://github.com/jeremyjone/vue3-ts-template) 或者 [模板文档](./)

## 项目技术方案

这套模板采用如下方案：

- 搭建工具 [vite 2.x](https://cn.vitejs.dev/)
- 项目框架 [vue 3.x](https://v3.cn.vuejs.org/)
- 网络连接 [axios 4.x](https://axios-http.com/)
- 路由工具 [vue-router 4.x](https://next.router.vuejs.org/zh/index.html)
- 状态管理 [vuex 4.x](https://next.vuex.vuejs.org/zh/guide)
- 编程语言 [TypeScript](https://www.typescriptlang.org/)

同时预装了如下内容：

- CSS 编译[^1] [sass](https://www.sass.hk/docs/) / [less](https://less.bootcss.com/) / [stylus](https://www.stylus-lang.cn/)
  [^1]: 使用时注意使用一个即可。请添加后自行删除 `package.json` 中 `devDependencies` 字段中的多余内容即可。
- 单元测试 [vue-test-utils](https://next.vue-test-utils.vuejs.org/guide/) + [jest](https://jestjs.io/)
- 代码规范 [eslint](https://eslint.org/) + [prettier](https://prettier.io/)
- 提交规范 [commitizen](https://github.com/commitizen/cz-cli) + [commitlint](https://commitlint.js.org/#/) + [standard-version](https://github.com/conventional-changelog/standard-version)
- Git hooks [husky](https://typicode.github.io/husky)

## 项目结构

最终的目录文件结构如下图：

<img :src="$withBase('/assets/roadmap/vue/template/template_dir.png')" alt="">

> 注：目录结构仅供参考，可以根据自行需求进行修改。

## 环境检测

因为采用了 `vite` 进行搭建，所以需要 [Node.js](https://nodejs.org/en/) 版本 >= 12.0.0。

查看版本的方法：

```sh
node -v
```

<img :src="$withBase('/assets/roadmap/vue/template/check_node_version.png')" alt="">

## 搭建项目结构

### 初始化项目

首先使用 `vite` 创建项目。根据 [vite 官方文档](https://cn.vitejs.dev/guide/#scaffolding-your-first-vite-project)，可以快速开始：

```sh
npm init vite@lastest
// or
yarn create vite
```

<img :src="$withBase('/assets/roadmap/vue/template/create_app.png')" alt="">

然后按照提示一步一步操作即可。

1、填写名称

这里填写 `vite-vue3-ts-template`，方便我们大致知道模板的架构。

2、选择框架

这里我们选择 `vue`，

<img :src="$withBase('/assets/roadmap/vue/template/create_app_select_framework.png')" alt="">

然后选择 `vue-ts`。

<img :src="$withBase('/assets/roadmap/vue/template/create_app_select_ts.png')" alt="">

这样，我们就成功初始化了一个项目。

<img :src="$withBase('/assets/roadmap/vue/template/create_app_finish.png')" alt="">

此时根据提示，进入项目根目录，并执行 `yarn` 命令，会自动安装相应的内容。

```sh
cd vite-vue3-ts-template
yarn
```

在执行之后，启动项目，会看到已经成功运行了。

<img :src="$withBase('/assets/roadmap/vue/template/app_first_run.png')" alt="">

### 整理项目结构

在 `src` 文件夹下，新建如下文件/文件夹：

```sh
└── src/
    ├── assets/             # 静态资源目录
    ├── components/         # 公共组件目录
    ├── pages/              # 页面组件目录
    ├── router/             # 路由配置目录
    ├── store/              # 状态管理配置目录
    ├── typings/            # 类型文件目录
    ├── styles/             # 通用 CSS 目录
    ├── utils/              # 工具方法目录
    ├── App.vue             # 根组件
    ├── env.d.ts            # vue 环境声明，不同版本的 vite 文件可能会有所差异
    ├── main.ts             # 主文件
```

我们之后的内容，基本都是基于上面结构进行的。

### 修改 vite 的配置文件

`vite` 的配置在根目录下的 `vite.config.ts` 中，我们根据需要进行一些修改：

```ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve: {
    // 配置 @ 映射到 src 目录
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
  base: "./", // 打包路径

  server: {
    port: 3000, // 端口
    open: true, // 启动打开浏览器
    cors: true, // 跨域
    proxy: {
      "/api": {
        target: "http://localhost:8080/api/", // 目标地址
        changeOrigin: true, // 修改源
        secure: false, // ssl
        rewrite: path => path.replace("/api/", "/")
      }
    }
  }
});
```

::: tip 提示
在这里，当导入 `"path"` 时，可能会提示 `找不到模块的类型声明`：

<img :src="$withBase('/assets/roadmap/vue/template/cannot_find_path_module_declare.png')" alt="">

此时按照提示直接安装 `@types/node` 即可。

或者手动安装：

```sh
yarn add @types/node -D
```

:::

### 安装网络工具 axios

1、直接命令安装最新版即可：

```sh
yarn add axios
```

2、配置

为了方便使用，我们需要进行简单配置。

在 `utils` 文件夹下创建一个 `http` 的文件夹，并在其中创建一个 `index.ts` 文件，结构如下：

```sh
src
└── utils/
    ├── http/
        ├── index.ts      # axios 配置文件
```

在文件中填入如下内容：

```ts
import Axios from "axios";

const baseURL = "";
const axios = Axios.create({
  baseURL, // 基础 url
  timeout: 10000 // 超时 10s
});

// 请求拦截器
axios.interceptors.request.use(
  config => {
    // TODO: 配置请求内容

    // config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  response => {
    // TODO: 配置对响应内容的处理

    return response;
  },
  error => {
    let { response } = error;
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          response.message = "未知错误";
          break;
        case 401:
          response.message = "未授权";
          break;
        case 403:
          response.message = "权限不足";
          break;
        case 404:
          response.message = "数据不存在";
          break;
        case 405:
          response.message = "不允许的请求方法";
          break;
        case 408:
          response.message = "请求超时";
          break;
        case 415:
          response.message = "不支持的媒体类型";
          break;
        case 500:
          response.message = "服务器出现异常";
          break;
        case 501:
          response.message = "网络未实现";
          break;
        case 502:
          response.message = "网络错误";
          break;
        case 503:
          response.message = "服务不可用";
          break;
        case 504:
          response.message = "网络超时";
          break;
        case 505:
          response.message = "http版本不支持该请求";
          break;
        default:
          response.message = `其他错误。错误代码：${error.response.status}`;
      }
    } else {
      response = { message: "无法连接到服务器！" };
    }
    return Promise.reject(response);
  }
);

export default axios;
```

3、封装使用方法

为了方便使用，我们最好将其常用的 `get`、`post`、`put`、`delete` 进行二次封装。

在 `index.ts` 同级目录下创建一个 `requests.ts` 文件，结构如下：

```sh
src
└── utils/
    ├── http/
        ├── index.ts      # axios 配置文件
        ├── requests.ts   # 方法封装
```

在文件中键入如下内容：

```ts
import axios from ".";

/**
 * @param  promise
 * @param errorExt - Additional Information you can pass to the err object
 */
function to<T, U = unknown>(
  promise: Promise<T>,
  errorExt?: object
): Promise<[U | null, T | undefined]> {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[U, undefined]>(err => {
      if (errorExt) {
        Object.assign(err, errorExt);
      }

      return [err, undefined];
    });
}

/**
 * GET methods
 * @param url
 * @param data
 * @returns {Promise}
 */
export function get<T>(url: string, params = {}): TO<T> {
  return to(
    new Promise((resolve, reject) => {
      axios
        .get(url, {
          params
        })
        .then(result => {
          resolve(result.data as T);
        })
        .catch(err => {
          reject(err);
        });
    })
  );
}

/**
 * POST methods
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post<T>(url: string, data?: Record<string, unknown>): TO<T> {
  return to(
    new Promise((resolve, reject) => {
      axios
        .post(url, data)
        .then(result => {
          resolve(result.data as T);
        })
        .catch(err => {
          reject(err);
        });
    })
  );
}

/**
 * PUT methods
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put<T>(url: string, data?: Record<string, unknown>): TO<T> {
  return to(
    new Promise((resolve, reject) => {
      axios
        .put(url, data)
        .then(result => {
          resolve(result.data as T);
        })
        .catch(err => {
          reject(err);
        });
    })
  );
}

/**
 * DELETE methods
 * @param url
 * @param data
 * @returns {Promise}
 */
export function del<T>(url: string, data?: Record<string, unknown>): TO<T> {
  return to(
    new Promise((resolve, reject) => {
      axios
        .delete(url, data)
        .then(result => {
          resolve(result.data as T);
        })
        .catch(err => {
          reject(err);
        });
    })
  );
}
```

4、类型声明

注意到我这里为了更好的使用 `Promise`，对其返回值进行了一个封装，但是其返回类型 `TO` 并没有定义，编译器同时会报错。我们在 `typings` 文件夹中创建一个 `http.d.ts` 的文件，并进行声明：

```ts
declare type TO<T = unknown> = Promise<[unknown, T | undefined]>;
```

此时声明好了，同时错误也没有了。

### 安装路由工具 vue-router

1、安装 vue-router

因为我们用的是 `vue3`，所以需要 `vue-router 4.x`，直接带版本安装即可：

```sh
yarn add vue-router@4
```

在 `router` 文件夹下创建 `index.ts` 文件，结构如下：

```sh
src
└── router/
    ├── index.ts      # vue-router 配置文件
```

并键入如下内容：

```ts
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/pages/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  // TODO: 填写其他页面路由内容
  {
    // 匹配全部其他内容
    path: "/:pathMatch(.*)*",
    component: () => import(/* webpackChunkName: "404" */ "@/pages/404.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// 路由拦截器
router.beforeEach((to, from, next) => {
  // TODO: 自定义拦截内容

  next();
});

export default router;
```

2、挂载路由

打开 `main.ts` 文件，并修改挂载路由：

```ts{3,6}
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";

createApp(App)
  .use(router)
  .mount("#app");
```

3、配置路由页面

为了测试它的效果，我们需要添加几个简单页面，同时配置路由页面。

打开 `App.vue` 文件，删除 `HelloWorld` 组件，并在模板中替换为 `<router-view />` 组件：

```vue{5}
<script setup lang="ts"></script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

然后在 `pages` 文件夹中创建两个文件，`Home.vue` 和 `404.vue`：

```sh
src
└── pages/
    ├── 404.vue
    ├── Home.vue
```

内容分别如下：

- Home.vue

```vue
<template>
  <h1>Home Page</h1>

  <HelloWorld msg="Welcome to Vite + Vue3 + TypeScript Template" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default defineComponent({
  name: "HomePage",

  components: { HelloWorld },

  setup() {}
});
</script>
```

- 404.vue

```vue
<template>
  <h1>页面不存在</h1>
  <div>对不起，您访问的页面不存在。</div>
  <button @click="onBack">返回</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },

  methods: {
    onBack() {
      this.$router.go(-1);
    }
  }
});
</script>
```

现在启动项目，会打开 Home 页，随意输入一个路由，它会匹配到 404 页面，点击 `返回` 按钮，又回到了 Home 页面。

到这里，路由就配置完成。

### 安装状态管理工具 vuex

1、安装 vuex

与 [vue-router](#安装路由工具-vue-router) 一样，因为我们用的是 `vue3`，所以需要 `vuex 4.x`，直接带版本安装即可：

```sh
yarn add vuex@next --save
```

在 `store` 文件夹下创建 `index.ts` 文件，结构如下：

```sh
src
└── store/
    ├── index.ts      # vuex 配置文件
```

并键入如下内容：

```ts
import { createStore } from "vuex";

export default createStore({
  state: {
    // TODO: 根据实际内容修改
    count: 0
  },
  mutations: {},
  actions: {},
  modules: {}
});
```

2、全局挂载 vuex

打开 `main.ts` 文件，并添加 `vuex`，挂载到全局中：

```ts{4,8}
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";

createApp(App)
  .use(router)
  .use(store)
  .mount("#app");
```

3、在组件中使用 vuex

此时可以使用。为了方便测试，我们在 `store/index.ts` 文件中添加修改方法：

```ts
export default createStore({
  state: {
    // TODO: 根据实际内容修改
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {
    increment: ({ commit }) => {
      commit("increment");
    }
  },
  modules: {}
});
```

同时修改 `HelloWorld.vue` 中的内容，删除原来的 `count` 属性，使用 `store` 中的属性：

```vue{2,6-7,9-11,19-22}
<script setup lang="ts">
import { useStore } from "vuex";

defineProps<{ msg: string }>();

// const count = ref(0)
const store = useStore();

function increment() {
  store.dispatch("increment");
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <!-- ... other code ... -->

  <!-- <button type="button" @click="count++">count is: {{ count }}</button> -->
  <button type="button" @click="increment">
    count is: {{ store.state.count }}
  </button>
</template>
```

运行项目测试，可以正常运行。

4、类型声明

此时虽然可以正常，但是我们可以看到，当我们使用 `store.state` 时，类型是任意的，我们看不到内部任何属性，当然就更看不到属性值的类型了，这显然不符合我们使用 TypeScript 的需求。

<img :src="$withBase('/assets/roadmap/vue/template/vuex_any_type.png')" alt="">

为解决这个问题，我们需要对 `store/index.ts` 进行一些改造。

首先声明一个 `State` 的类型：

```ts
export interface State {
  // TODO: 根据 state 实际内容修改
  count: number;
}
```

然后声明一个 `Key`，这里 `vue` 已经帮我们提供了一个解决方案：

```ts
import { InjectionKey } from "vue";
export const key: InjectionKey<Store<State>> = Symbol("store_key"); // key 内容随便填
```

现在我们可以通过传入对应的 `key` 来访问对应的 `State`。

再次打开 `HelloWorld.vue`，现在我们把 `key` 值传入 `useStore` 中，即：

```ts{2,3}
import { useStore } from "vuex";
import { key } from "../store";
const store = useStore(key);
```

现在就可以看到类型已经可以正常显示了：

<img :src="$withBase('/assets/roadmap/vue/template/vuex_state_type.png')" alt="">

到目前，它好像看起来很正常了。但是随着页面变多，我们需要在每一个页面都传入 `key` 值，这是一个相当繁琐的事情，我们需要一个更简便的方法，有没有呢？答案是肯定的。

5、改造类型声明，简化它

在 `store/index.ts` 中简单封装一个 `useStore`：

```ts{2,21-23}
import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

export interface State {
  // TODO: 根据 state 实际内容修改
  count: number;
}

export const key: InjectionKey<Store<State>> = Symbol("store_key"); // key 内容随便填

export default createStore({
  state: {
    // TODO: 根据实际内容修改
    count: 0
  },
  mutations: {},
  actions: {},
  modules: {}
});

export function useStore() {
  return baseUseStore(key);
}
```

然后在 `main.ts` 文件中挂载这个 `key` 值即可：

```ts{4,8}
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import store, { key } from "./store/index";

createApp(App)
  .use(router)
  .use(store, key)
  .mount("#app");
```

现在我们每次导入 `useStore` 时，不需要再从 `vuex` 中导入，而是通过 `@/store` 导入即可，使用上没有其他区别。

这样，我们就将 `vuex` 完整的配置好了。

### 安装 CSS 预编译器

根据项目需要添加对应的预编译器：

```sh
yarn add stylus -D  # stylus
yarn add sass -D    # sass / scss
yarn add less -D    # less
```

这个根据需要对应安装即可。

## 安装 husky

`husky` 是一个钩子工具，它可以帮助我们在一些特定时候触发一些特定的功能。比如我们在提交代码的时候，需要验证代码是否符合规则，这时候可以通过 `husky` 很方便的实现。

> 因为后面的内容基本都需要用到 `husky`，所以我们首先把它添加到模板中。

1、通过脚本直接安装并配置 `husky`：

```sh
npx husky-init
```

它会在项目根目录下创建一个名为 `.husky` 的文件夹，同时在里面生成相关文件。

<img :src="$withBase('/assets/roadmap/vue/template/husky_added.png')" alt="">

2、然后执行：

```sh
yarn
# or
npm install
```

安装 `husky` 到项目中。

`husky` 包含很多钩子，我们常用的有 `pre-commit`、`pre-push` 等，从名字就很清晰的知道它应该在什么时候调用。我们在后面需要经常用到这些钩子还帮助我们规范项目。

### husky 的错误解决方案

- Yarn on Windows

对于 `Windows 10` 的用户，在使用 `yarn` 的时候，可能存在执行 `pre-push` 的时候出现 `stdin is not a tty` 的错误。

这时需要在 `.husky` 文件夹下创建一个名为 `common.sh` 的文件，并键入如下内容：

```sh
command_exists () {
  command -v "$1" >/dev/null 2>&1
}

# Workaround for Windows 10, Git Bash and Yarn
if command_exists winpty && test -t 1; then
  exec < /dev/tty
fi
```

然后就可以在钩子文件中使用 `yarn` 命令了。[参考](https://typicode.github.io/husky/#/?id=yarn-on-windows)

## 添加代码规范

随着代码越来越复杂，写代码的人越来越多，代码的格式可能会越来越眼花缭乱。为避免这些问题，代码规范就必不可少。

良好的代码规范可以有效避免团队之间的代码风格差异化，提高审查代码效率等等。

通常情况下，使用简单的 [eslint](https://eslint.org/) + [prettier](https://prettier.io/) 就可以保持大部分规范，同时 `vue` 也提供了对应的 [vue-eslint](https://eslint.vuejs.org/rules)，也可以查看 `vue` 的 [风格指南](https://v3.cn.vuejs.org/style-guide)。

### 配置 EditorConfig

`EditorConfig` 是编辑器风格配置，可以帮助多人或者多设备统一编辑器风格。

::: tip 提示
`VS Code` 中需要插件 `EditorConfig for VS Code`

<img :src="$withBase('/assets/roadmap/vue/template/vscode_editorconfig.png')" alt="">

在 `JetBrains` 系列如 `WebStorm` 中，则默认支持。
:::

在根目录下创建一个名为 `.editorconfig` 的配置文件：

```config
# Editor configuration, see http://editorconfig.org

root = true                        # 是否为根目录，支持不同层级单独配置

[*]                                # 适用所有文件
indent_style = space               # tab | space
indent_size = 4                    # 缩进
end_of_line = crlf                 # lf | cr | crlf
charset = utf-8                    # 字符集
trim_trailing_whitespace = true    # 自动切掉首尾空格
insert_final_newline = true        # 末尾空行

[*.{js,ts,vue,jsx,tsx}]            # 如何处理这些文件
indent_size = 2                    # 缩进为 2

[*.md]                             # 如何处理这些文件
trim_trailing_whitespace = false   # 不自动切掉首尾空格
```

### 配置 Prettier

`Prettier` 是一个格式化文档工具，可以快速将我们的代码格式化为统一风格。

::: tip 提示
`VS Code` 中需要插件 `Prettier - Code formatter`

<img :src="$withBase('/assets/roadmap/vue/template/vscode_prettier_plugin.png')" alt="">

在 `JetBrains` 系列如 `WebStorm` 中，则默认支持。
:::

1、安装 Prettier

```sh
yarn add prettier -D
```

2、配置 Prettier

在根目录下创建名为 `.prettierrc` 的文件，并键入如下内容：

```json
{
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "none",
  "bracketSpacing": true,
  "semi": true,
  "arrowParens": "avoid"
}
```

具体内容可以根据需要调整，具体可以参考 [官方文档](https://prettier.io/docs/en/options.html)。

3、使用 Prettier

通过命令可以快速对指定文档进行格式化，也可以通过右键或者快捷方式(`Alt`+`Shift`+`F`)进行格式化。

格式化命令：

```sh
npx prettier --write .    # . 表示所有文档
```

### 配置 ESLint

`ESLint` 可以查找并提示代码中的问题，并支持自动修复（如果可以），通过严格的规范检查来控制代码质量。

相信不少人都被 `ESLint` 虐过，初接触时，满屏的红色，那叫一个酸爽，但是随着使用的深入，它一定会给你带来质的变化。

::: tip 提示
`VS Code` 中需要插件 `ESLint`

<img :src="$withBase('/assets/roadmap/vue/template/vscode_eslint_plugin.png')" alt="">

在 `JetBrains` 系列如 `WebStorm` 中，则默认支持。
:::

1、安装 ESLint

```sh
yarn add eslint -D
```

2、配置 ESLint

安装后，通过 `npx eslint --init` 可以快速创建配置：

<img :src="$withBase('/assets/roadmap/vue/template/add_eslint_init.png')" alt="">

这里我们直接依次照图选择即可，并选择一个最流行的规则，即 [Airbnb](https://github.com/airbnb/javascript)。

最后，如果不选择使用 npm 安装，可以手动进行安装：

```sh
yarn add eslint-plugin-vue eslint-config-airbnb-base eslint-plugin-import @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
```

执行完成，会在根目录下创建一个名为 `.eslintrc.js` 的配置文件：

```js{10}
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ["plugin:vue/essential", "airbnb-base"],
  parserOptions: {
    ecmaVersion: 13,
    parser: "@typescript-eslint/parser",
    sourceType: "module"
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {}
};
```

可以根据实际情况增删内容。

然后添加针对 `vue` 的规则配置：

- 添加高亮行内容到文件中：

```js{5}
module.exports = {
  extends: [
    "plugin:vue/essential",
    "airbnb-base",
    "plugin:vue/vue3-recommended" // 添加该行内容，针对 vue3 的规则。如果是 vue2，则是 plugin:vue/recommended
  ]
};
```

- 添加 parser

```js{2}
module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module"
  }
};
```

此时如果文件有错误，则会显示出来。**如果没显示出来，重启编译器再试。**

3、添加 TypeScript 支持

对于 `airbnb-base` 来说，需要单独添加 `TypeScript` 的支持。

安装插件：

```sh
yarn add eslint-config-airbnb-typescript -D
```

在 `.eslintrc.js` 中添加如下内容：

```js{5}
module.exports = {
  extends: [
    "plugin:vue/essential",
    "airbnb-base",
    "airbnb-typescript/base", // 添加 typescript 支持
    "plugin:vue/vue3-recommended"
  ]
};
```

4、使用 ESLint

在 `package.json` 文件的 `scripts` 字段中添加如下内容：

```json
"scripts": {
    "lint": "eslint src/**/*.{js,vue,ts,jsx,tsx}",
    "lint:fix": "eslint src/**/*.{js,vue,ts,jsx,tsx} --fix",
    "lint:create": "eslint --init"
}
```

然后执行：`yarn lint:fix` 即可修复所有内容，如果此时报错，则需要手动修复。

5、常用的 vue 规则

```js
module.exports = {
  rules: {
    "vue/no-multiple-template-root": "off", // 启用根层级多个标签
    "vue/script-setup-uses-vars": "error" // 标记 setup 中的变量为 used
  }
};
```

### 在 husky 中集成样式规范

我们不想每次都手动执行命令来修正代码样式，那么可以通过 `husky` 的钩子，在每次提交代码之前首先修改样式即可。

只需要在 `.husky/pre-commit` 文件中修改命令：

```sh
# 如果是全局安装 eslint，则可以直接使用 eslint 命令
yarn eslint --fix ./src --ext .js,.jsx,.ts,.tsx,.vue
```

在每次预提交的时候，都会触发该方法进行检查并修复内容，同时如果出现错误，不会继续。

但是这样会有一个问题，每次都会检查所有文件，这在开发中并不常用，因为通常代码不是我们一个人写的，同时项目可能包含远古代码，修改格式会导致未知错误。这时候就需要仅仅针对当前我们修改过的文件进行检查即可。

### 使用 lint-staged

想要做到上述要求，我们需要使用 `lint-staged` 工具帮助我们仅仅检查暂存区的内容。

#### 安装 `lint-staged`

```sh
yarn add lint-staged -D
```

#### 配置 lint-staged

在 `package.json` 中增加配置内容：

```json
{
  "lint-staged": {
    "*.{vue,js,ts,jsx,tsx}": "eslint --fix"
  }
}
```

::: tip 提示
有时候我们看到有些项目或者一些文章，在该字段中同时添加 `eslint --fix` 与 `git add`，也就是 `"*.{vue,js,ts,jsx,tsx}": ["eslint --fix", "git add"]`，这是 `lint-staged` v10 以下版本的写法，在 v10 及以上版本不再需要 `git add`。
:::

这表示检查并修复暂存区中所有的 `vue`、`js`、`ts`、`jsx`、`tsx` 文件。

#### 修改 husky 的钩子内容

将之前在 `.husky/pre-commit` 中的指令修改为：`npx lint-staged`。

这样就配置好了。当我们提交一个有错误的文件时，它会报错并拒绝提交：

<img :src="$withBase('/assets/roadmap/vue/template/husky_eslint_error.png')" alt="">

## 解决样式配置后出现的问题

### 解决 Prettier 行尾换行符报错

有时候当我们安装了 `Prettier` 之后，发现每一行的行尾都会报错，这是因为行尾换行符的冲突配置所致。此时我们需要在 `.eslintrc.js` 中的 `rules` 字段中添加一条规则：

```js
rules: {
    // 解决 prettier 行尾报错
    "prettier/prettier": ["error", { endOfLine: "auto" }],
}
```

所有文件的结尾错误就可以解决。

### 解决 Prettier 与 ESLint 的冲突问题

这两个的规则有时存在冲突，一般情况下以 `Prettier` 为优先。

安装插件：

```sh
yarn add eslint-plugin-prettier eslint-config-prettier -D
```

在 `.eslintrc.js` 中添加：

```js{6}
extends: [
  'plugin:vue/essential',
  'airbnb-base',
  "airbnb-typescript/base",
  "plugin:vue/vue3-recommended",
  'plugin:prettier/recommended' // 添加解决冲突插件
],
```

### 解决通过 `@` 引入的路径问题

如果在使用了 `@` 字符的路径中出现该问题，则可以按如下方法解决。

<img :src="$withBase('/assets/roadmap/vue/template/import_no_unresolved.png')" alt="">

安装工具：

```sh
yarn add eslint-import-resolver-alias eslint-import-resolver-typescript -D
```

在 `tsconfig.json` 中添加：

```json{3-7}
{
  "compilerOptions": {
    "baseUrl": ".",
    "types": ["vite/client", "node"],
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

在 `.eslintrc.js` 中添加：

```js{6,8-22}
module.exports = {
  parserOptions: {
    ecmaVersion: 12,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    project: ["./tsconfig.json"]
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      alias: {
        map: [["@", "./src"]],
        extensions: [".js", ".jsx"]
      },
      typescript: {
        alwaysTryTypes: true,
        project: "./tsconfig.json"
      }
    }
  }
};
```

### 尝试保存文件时自动修复错误

在当前项目的根目录下创建文件夹 `.vscode`，在其中新建文件 `settings.json` 并键入：

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

如果需要在全局生效，则进入设置页面（`文件` -> `首选项` -> `设置`），搜索 `editor.codeActionsOnSave`，打开 `settings.json` 配置上述内容即可。

### 修复所有 vue 文件第一行首字符处出现 `Parsing error: "parserOptions.project"...` 的错误

<img :src="$withBase('/assets/roadmap/vue/template/error_parseroptions_project.png')" alt="">

如遇到上面问题，配置 `.eslintrc.js` 中的 `extraFileExtensions` 字段即可：

```js{3}
module.exports = {
  parserOptions: {
    extraFileExtensions: [".vue"]
  }
};
```

> 如果配置后未生效，重启编辑器即可。

### 修复 defineProps 等未定义的错误

使用 `<script setup>` 标签时，常用的 `defineProps` 等属于全局宏定义，不需要二次引入，但是可能会导致规则报错，需要在 `.eslintrc.js` 中添加配置：

```js
module.exports = {
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly"
  }
};
```

### 修复 [plugin:vite:eslint] 的相关错误

有时候浏览器会报 `[plugin:vite:eslint]` 的相关错误，此时可以通过安装 `vite-plugin-eslint` 并配置来解决。

- 安装：

```sh
yarn add vite-plugin-eslint -D
```

- 配置

在 `vite.config.ts` 文件中配置：

```ts
import eslintPlugin from "vite-plugin-eslint";

export default defineConfig({
  plugins: [vue(), eslintPlugin()]
});
```

如果你需要指定文件，可以添加参数：

```ts{3-5}
plugins: [
  vue(),
  eslintPlugin({
    include: ["src/**/*.js", "src/**/*.vue", "src/**/*.ts"]
  })
];
```

此时如果还报错，可以重启编译器和服务器尝试，通常会好。

## 添加提交规范

`GIT` 的具体提交规范，可以参考 [提交规范](/document/git/#提交规范)，这里只涉及规范工具的使用。

### 集成 Commitizen

[Commitizen](https://github.com/commitizen/cz-cli) 是一个撰写规范提交信息的工具。

我们可以全局安装该工具：

```sh
npm install -g commitizen
```

::: tip 提示
`Commitizen` 最好是全局安装，否则不可以在全局使用 `git cz` 命令，而是需要在项目中使用 `yarn git-cz`
:::

然后在项目中初始化：

```sh
npx commitizen init cz-conventional-changelog --save-dev --save-exact
```

这样就可以通过命令行直接使用 `Commitizen` 了。以后但凡使用 `git commit` 命令，一律改为使用 `git cz` 即可，根据 cli 的提示一步步选择就可以生成符合规范的提交消息了。

<img :src="$withBase('/assets/roadmap/vue/template/cz_select_type.png')" alt="">

> 注意：要先使用 `git add` 添加要提交的文件。

按照提示依次填写完成，就可以成功提交了。

<img :src="$withBase('/assets/roadmap/vue/template/cz_commit_finish.png')" alt="">

### 自定义提交配置

因为提交的提示都是英文的，也没有配置内容，这时我们就需要 `cz-customizable` 来个性化。

在项目中初始化它：

```sh
npx commitizen init cz-customizable --save-dev --save-exact --force
```

注意上面的 `--force` 参数，因为之前已经初始化了 `cz-conventional-changelog`，我们在这里需要覆盖它。

执行完成后，我们在根目录下创建一个 `.cz-config.js` 的文件，然后根据 [官方文档](https://github.com/leoforfree/cz-customizable/blob/master/cz-config-EXAMPLE.js) 进行配置即可。

可以参考下面的中文示例进行配置：

```js
// 官方示例：https://github.com/leoforfree/cz-customizable/blob/master/cz-config-EXAMPLE.js
module.exports = {
  types: [
    { value: "feat", name: "feat:\t\t新增功能" },
    { value: "fix", name: "fix:\t\t修复 bug" },
    { value: "docs", name: "docs:\t\t文档变更" },
    {
      value: "style",
      name: "style:\t代码格式（不影响功能，例如空格、分号等格式修正）"
    },
    {
      value: "refactor",
      name: "refactor:\t代码重构（不包括 bug 修复、功能新增）"
    },
    { value: "perf", name: "perf:\t\t性能优化" },
    { value: "test", name: "test:\t\t添加、修改测试用例" },
    {
      value: "build",
      name:
        "build:\t构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）"
    },
    { value: "ci", name: "ci:\t\t修改 CI 配置、脚本" },
    {
      value: "chore",
      name: "chore:\t对构建过程或辅助工具和库的更改（不影响源文件、测试用例）"
    },
    { value: "revert", name: "revert:\t回滚 commit" }
  ],

  scopes: [
    { value: "components", name: "components:\t组件相关" },
    { value: "composables", name: "composables:\tcomposables相关" },
    { value: "utils", name: "utils:\tutils相关" },
    { value: "styles", name: "styles:\t样式相关" },
    { value: "dependencies", name: "dependencies:\t依赖相关" },
    { value: "other", name: "other:\t其他" },
    // 选中自定义可以自行填写，或者开启 allowCustomScopes 亦可
    { value: "custom", name: "custom:\t自定义" }
  ],

  // allowCustomScopes: true,
  // allowTicketNumber: false,
  // isTicketNumberRequired: false,
  // ticketNumberPrefix: 'TICKET-',
  // ticketNumberRegExp: '\\d{1,5}',

  scopeOverrides: {
    fix: [
      { name: "merge" },
      { name: "style" },
      { name: "e2eTest" },
      { name: "unitTest" }
    ]
  },

  messages: {
    type: "确保本次提交遵循 Angular 规范！\n选择你要提交的类型：",
    scope: "\n选择一个 scope（可选）：",
    // 选择 scope: custom 时会出下面的提示
    customScope: "请输入自定义的 scope：",
    subject: "填写本次提交的主题：\n",
    body: '填写详细的变更描述（可选）。使用 "|" 换行：\n',
    breaking: "是否存在非兼容性的变更。如果有，请填写：\n",
    footer: "请填写相应的 ISSUES（可选）。 例如: #1, #2：\n",
    confirmCommit: "确认提交？"
  },

  // 设置只有 type 选择了 feat 或 fix，才询问 breaking message
  allowBreakingChanges: ["feat", "fix"],
  // askForBreakingChangeFirst : true,

  // 跳过要询问的步骤
  // skipQuestions: ["body", "footer"],

  // subject 限制长度
  subjectLimit: 100,
  breaklineChar: "|" // 支持 body 和 footer
  // footerPrefix : 'ISSUES CLOSED:'
};
```

此时再运行 `git cz` 的时候，就可以看到中文了。

<img :src="$withBase('/assets/roadmap/vue/template/cz_select_type_cn.png')" alt="">

现在的提示，对于我这种英语学渣来说，就友好了很多~ :D

### 集成 commitlint

尽管我们添加了 `Commitizen`，但是我们仍然可以通过 `git commit` 填写任意内容进行提交。为了保证规范，我们需要添加一个限制，就是 `如果没有按照规范填写提交信息，就不可以提交成功`，此时就需要通过 `commitlint` 来实现。

#### 安装 commitlint

```sh
yarn add @commitlint/config-conventional @commitlint/cli -D
```

#### 配置 commitlint

在根目录下创建一个名为 `commitlint.config.js` 的文件，并填写如下内容：

```js
module.exports = {
  extends: ["@commitlint/config-conventional"]
};
```

配置好 `commitlint`，我们使用 `husky` 的钩子方法来验证提交信息。执行下面命令：

```sh
npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
```

> 如果没有安装 husky，请参考前面的内容 [安装 husky](#安装-husky)。

我们现在再来试一下通过 `git commit` 命令随意填写提交信息：

<img :src="$withBase('/assets/roadmap/vue/template/husky_commitlint_error.png')" alt="">

可以看到已经不能正常提交了，同时给出错误的提示。

当我们按照要求填写内容的时候，它就可以正常提交了：

<img :src="$withBase('/assets/roadmap/vue/template/husky_commitlint_ok.png')" alt="">

毕竟我们手写很可能出错，所以还是尽量选用 `git cz` 命令来按照提示选择最为稳妥。

### 集成 Standard-Version

生成 `CHANGELOG.md` 的方式有很多种，我们选择 [standard-version](https://github.com/conventional-changelog/standard-version) 来帮助我们实现。

它是一个命令行工具，可以通过我们提交的内容，自动更新项目的版本，同时添加 `git tag` 和更新 `CHANGELOG.md`，很方便。

我们的版本号分为 `major`、`minor`、`patch`，分别是`主版本`、`次版本`、`补丁版本`，它们分别对应项目的重构级别、新功能的增加、bug 的修复等。这在 [语义化版本](https://semver.org/) 中有详细的解释。

#### 安装 Standard-Version

```sh
npm install -g standard-version  # 推荐全局安装
# or
yarn add standard-version -D
```

#### 配置 Standard-Version

在 `package.json` 中添加如下脚本：

```json
{
  "scripts": {
    "release": "standard-version"
  }
}
```

#### 使用 Standard-Version

##### 1、自动生成版本号

默认情况下，工具会根据规则自动生成版本号：

```sh
# 全局安装执行
standard-version

# 脚本运行则执行
yarn release
# or
npm run release
```

- 如果提交的 `type` 是 `feat`，则 `minor` +1
- 如果提交的 `type` 是 `fix`，则 `patch` +1

##### 2、指定版本号

我们可以通过参数，指定我们需要的版本号，但是这仍然需要遵循 [语义化版本](https://semver.org/)。

假如当前版本号为 `v1.0.0`：

```sh
standard-version -r major            # 2.0.0
standard-version -r 2.0.0-t          # 2.0.0-t
standard-version -r minor            # 1.1.0
standard-version -r 1.1.0-t          # 1.1.0-t
standard-version -r patch            # 1.0.1
standard-version -r 1.0.1-t          # 1.0.1-t

# 脚本运行
yarn release -- --release-as minor   # 1.1.0
```

> - `-r` 表示 `--release-as`，指定版本号

##### 3、预发布版本

预发布版本用来发布预发版本，通常在版本号之后添加 `alpha` 或 `beta` 等字样。

假如当前版本为 `v1.0.0`：

```sh
standard-version --prerelease         # 1.0.1-0
standard-version --prerelease alpha   # 1.0.1-alpha.0

# 脚本运行
yarn release -- -p beta               # 1.0.1-beta.0
```

##### 4、添加 tag 前缀

有时候我们需要为 `tag` 添加一些前缀内容，如 `@scope/package@2.0.0`，则需要：

```sh
standard-version --tag-prefix @scope/package@  # @scope/package@2.0.1

# 脚本运行
yarn release -- -t @scope/package@             # @scope/package@2.0.1
```

#### Standard-Version 的一些问题

如果版本为 `0.x.x` 时，例如 `0.1.1`，当我们的提交中包含 `feat` 特性时，执行 `yarn release` 不会变成 `0.2.1`，而是 `0.1.2`，这是因为没有主版本号。

这时需要手动给定版本号，或者修改主版本号后再执行。

## 添加单元测试

对于任何项目，尤其是大型项目，单元测试是一个非常重要的环节。完整的测试可以有效保证代码质量。

### 添加测试依赖

```sh
yarn add jest@26 ts-jest@26 @vue/test-utils@next vue-jest@next @types/jest eslint-plugin-jest -D
```

::: tip 安装提示
错误日期：2021.11.8

`jest` 和 `ts-jest` 由于版本冲突，最新如果直接安装，则为版本 27，此时运行测试内容会报错：

<img :src="$withBase('/assets/roadmap/vue/template/jest_version_error.png')" alt="">

需要指定版本 26，会解决该问题。

详见 [ISSUE #351](https://github.com/vuejs/vue-jest/issues/351)
:::

同时测试需要 `babel`，所以再安装 `babel` 依赖：

```sh
yarn add babel-jest @babel/core @babel/preset-env @babel/preset-typescript @vue/babel-plugin-jsx -D
```

### 配置 jest

- 在根目录下添加 `jest.config.js` 文件，并键入如下内容：

```js
module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  moduleFileExtensions: ["vue", "js", "json", "jsx", "ts", "tsx", "node"],
  testMatch: ["**/tests/units/**/?(*.)+(unit|test|spec).[jt]s?(x)"],
  testPathIgnorePatterns: ["/node_modules/"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.vue?$": "vue-jest",
    "^.+\\.tsx$": "ts-jest"
  },
  moduleNameMapper: {
    // 支持源代码中相同的 `@` -> `src` 别名
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  preset: "ts-jest",
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx,vue}", "!**/node_modules/**"]
  // coverageReporters: ["text", "text-summary", "html"],
};
```

- 在根目录下添加 `babel.config.js` 文件，并键入：

```js
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript"
  ],
  plugins: ["@vue/babel-plugin-jsx"]
};
```

- 在 `tsconfig.json` 中添加：

```json{3,10}
{
  "compilerOptions": {
    "types": ["vite/client", "node", "jest"]
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.d.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "tests/**/*.ts"
  ]
}
```

在 `.eslintrc.js` 中添加：

```js{3}
extends: [
    'plugin:vue/essential',
    'plugin:jest/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended' // 添加 prettier 插件
],
```

### 执行测试

在 `package.json` 中添加脚本：

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

执行 `yarn test`，会根据 `jest.config.js` 的配置内容进行测试：

<img :src="$withBase('/assets/roadmap/vue/template/jest_result.png')" alt="">

### 将测试集成到 husky 中

默认情况下，`husky` 提供的代码是每次提交都进行测试，这样对于开发来说比较麻烦，我们之前也删除了对应的代码。我们希望在 `push` 的时候测试代码，这样可以减少测试数量，同时也保证了代码的有效性。

使用 `pre-push` 钩子就可以实现。

```sh
npx husky add .husky/pre-push "yarn test $1"
```

该命令会在 `.husky` 文件夹下创建一个 `pre-push` 的钩子文件。

现在，每次我们提交的时候都会执行测试，只有当测试通过才会进行 `push` 操作。
