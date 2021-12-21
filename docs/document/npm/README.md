# npm 使用

## 安装

`npm` 是 `Node` 默认的模块管理器，同时也是模块登记和管理系统，它随 `Node` 环境一起安装，不需要单独安装。

安装 `Node`，可以到 [官网](https://nodejs.org/en/) 下载最新版本。

检查是否正确安装 `npm`，可以：

```sh
npm -v # 查看版本
```

如果升级 `npm`，可以通过命令升级：

```sh
npm install npm@latest -g
```

## 查看基本信息

### 查看命令列表

```sh
npm help
```

该命令会显示所有命令列表。

### 查看命令用法

```sh
npm -l
```

该命令会显示所有命令的使用说明，含各个命令的详细参数。

### 查看版本

```sh
npm -v
```

### 查看当前已安装的所有模块

```sh
npm list -global
# or
npm list --g

# 显示这些包的第一层依赖关系，默认是 0
npm list --g --depth=1 # 2 就是显示两层依赖关系

# 显示项目中的模块结构
npm list
```

## 配置

### 查看配置

```sh
npm config list -json
```

该命令查看 `npm` 的详细配置信息。

### 设置配置内容

所有配置内容都会存放到 `~/.npmrc` 文件中。

```sh
# 设置开发者名称
npm config set init.author.name 'your name'

# 设置开发者邮箱
npm config set init.author.email 'your email'

# 设置开发者地址
npm config set init.author.url 'your url'

# 设置许可证
npm config set init.license 'MIT' # 可以换成其他的，默认 ISC

# 设置初始版本
npm config set init.version '0.0.1' # 随意填写，默认 1.0.0
```

还有很多选项，可以参考查看命令自行修改。

修改完成后，每次初始化项目时，都会按照设置的内容创建 `package.json`，就不用每次单独修改了。

## 查看、查找包

### 查看包信息

```sh
npm info <module_name>
# or
npm view <module_name>
```

所有模块都可以通过 `npm info` 命令查看具体信息，并且还可以快速获取字段内容：

```sh
npm info <module_name> <field_name>

# 例如
npm info jz-gantt version
```

它可以快速查看任何包管理器中的所有包内容，无论是否安装在本地。

### 查看包版本

```sh
npm info <module_name> versions
# or
npm view <module_name> versions
```

可以查看该包的所有版本

### 打开包的地址

如果觉得信息不够多，可以尝试打开包的主页、仓库或者提交问题页面（如果存在）：

```sh
# 打开主页，对应 homepage 或者 repository 字段
npm home <package_name>

# 打开仓库，对应 repository 字段
npm repo <package_name>

# 提交 bug，对应 bugs 字段
npm bug <package_name>
```

### 查找包

```sh
npm search <keyword>
```

用于搜索 `npm` 仓库，支持字符串和正则表达式（需要用 `//` 包裹，与 `JavaScript` 用法一样，例如：`npm serach /jz*/`）。

## 初始化项目

初始化用来生成一个 `package.json` 文件，可以快速生成一个 `npm` 初始项目。

```sh
npm init [-y -f]
```

生成过程中会对用户进行提问，附加参数可以免去

- `-y`：全部 yes
- `-f`：强制生成

> 反正我在使用过程中没有发现什么区别，一般来说使用 `-y`

## 安装包

```sh
npm install <package_name>
```

模块可以被安装到项目中（默认），也可以安装到全局中。一般安装到全局的模块应该是工具模块，它可以被所有项目用到。

除了包名，还支持多种格式：

```sh
npm install [<@scope>/]<pkg>
npm install [<@scope>/]<pkg>@<tag>
npm install [<@scope>/]<pkg>@<version>
npm install [<@scope>/]<pkg>@<version range>
npm install <alias>@npm:<name>
npm install <folder>
npm install <tarball file>
npm install <tarball url>
npm install <git:// url>
npm install <github username>/<github project>
```

### 强制重新安装

安装会首先检查是否存在，如果已经安装，则不会重复安装，即使有版本更新。如果希望覆盖安装，则需要使用 `-f` 来强制安装：

```sh
npm install <package_name> -f
```

或者也可以 [更新包](#更新包)。

### 安装指定版本

```sh
npm install <package_name>@<version>
```

version 参数：

- `latest`：安装最新的正式版本
- `beta`：安装最新的预览版
- `1.0.0`：安装指定版本
- `>=1.0.0 <2.0.0`：安装指定范围的最新版本

如果使用 `--save-exact` 参数，则保证安装确切版本

### 安装的依赖关系

安装的依赖关系分为两种：

- `dependencies`：生产环境依赖
- `devDependencies`：开发环境依赖

简单理解，就是在开发中需要用到的环境，和生产中需要用到的环境。比如一个 `vue` 项目，`vue` 一定是生产环境依赖，而类似 `scss-loader`、`babel` 等则属于开发环境依赖。

它们安装的参数也有所不同：

- `--save` / `-S`：安装到生产环境依赖
- `--save-dev` / `-D`：安装到开发环境依赖

在 `package.json` 文件中，可以看到会保存到不同字段中。

```sh
npm install jz-gantt -S
npm install jest -D
```

### 安装所有内容

在项目中，可以通过 `npm install` 来安装所有包。

```sh
npm install

# 仅安装生产环境包
npm install --production
```

### 检查项目中是否存在多余的包

随着项目增大，可能会出现 `node_modules` 中包含多余的包，这些包已经在 `package.json` 中移除，通过命令可以快速查看：

```sh
npm prune
```

## 更新包

```sh
npm update <package_name>

# 升级全局包
npm update -g <package_name>
```

还可以先查看是否有新版本，然后再决定是否升级：

```sh
npm outdated [<package_name>]
```

## 卸载包

```sh
npm uninstall <package_name>

# 卸载全局包
npm uninstall -g <package_name>
```

## 发布、管理包

### 注册账户

首先需要在 [npm 官网](https://www.npmjs.com/) 注册一个账号，然后添加到本地 `npm` 环境中：

```sh
npm adduser
```

输入后按照要求依次填入内容即可。

### 登录账户

```sh
npm login
```

依次填入对应信息即可登录，登录后就可以发布自己的包了。

### 管理维护者

默认情况下，维护者就是作者本人，其他人无权操作。

```sh
# 查看维护者
npm owner ls <package_name>

# 新增维护者
npm owner add <user> <package_name>

# 删除维护者
npm owner rm <user> <package_name>
```

### 发布包

通过命令：

```sh
npm publish
```

即可发布包。在发布前，需要将所有信息核对准确后方可发布。

- `name` 与 `version` 字段：系统使用 `name` 字段生成包名，`version` 字段生成版本，所以这两个字段是必须且应该正确的。
- 所有即将公开发布的包，都应当是 `public` 状态的，即在 `package.json` 中：

  ```json
  {
    "private": false
  }
  ```

  这样才可以正常发布。该字段为 `true` 适合发布到私有服务器中。

- 仓库地址要保证正确。可以通过 [源管理](#管理源) 来查看和设置。

::: tip 提示

发布时需要注意，同一版本不能发布多次，它不会覆盖发布。

:::

#### 发布测试版

默认发布正式版，也就是 `latest`，如果想发布测试版，可以通过 `beta` 来标注：

```sh
npm publish --tag beta
```

注意，无论版本号是什么，必须带有 `--tag beta` 才会发布成为测试版。

通常来说，测试版本号为 `v1.0.0-beta.0`，但如果不带 `beta` 标签，也会按照正式版发布，这显然是很不友好的。

如果这样发布错了，也是可以通过命令修改的：

```sh
# 将某个包的某个版本修改为 beta 版本
npm dist-tag add <package_name>@<version> beta

# 将某个包的某个版本修改为正式版本
npm dist-tag add <package_name>@<version> latest

# 将某个包的某个版本修改为先行版本
npm dist-tag add <package_name>@<version> next
```

#### 发布带作用域的包

很多包都带有 `@xxx/yyy` 样式的作用域，这通常是私有包，需要付费发布。但是随着包越来越多，很多人也开始通过作用域作为一种区分。

- 项目名就应该有作用域：

  - 新建一个带作用域的项目：

  ```sh
  npm init --scope=@<username> -y
  ```

  这里需要使用你注册的用户名作为**作用域名**。

  - 或者将 `name` 字段修改为 `@<username>/<package_name>` 样式。

- 然后可以发布包。与正常发布不一样，由于是带有域的包，必须添加参数：

```sh
npm publish --access public
```

::: tip 提示

我试了一下，免费用户想发布作用域应该只能是用户名，填写其它域名都发布失败，返回 403。

:::

### 升级包

升级与发布一样，只是每次迭代之后，需要更新版本号。版本号的更新，应当按照变更规范进行：

| 等级  |              规则              | 示例  |
| :---: | :----------------------------: | :---: |
| patch |       补丁版本，修复错误       | 1.0.1 |
| minor | 小版本，有一些向后兼容的新功能 | 1.1.1 |
| major |       大版本，有重大变更       | 2.0.0 |

这在 [语义化版本](https://semver.org/) 中有详细的解释。

通过脚本可以修改版本号：

```sh
npm version <level>
```

- `level`：支持具体版本号，也支持等级名称。

最后可以通过 `npm publish` 进行发布。

### 废弃包

废弃是指不再维护或者不再使用，但仓库中保留该包，安装时会有提示。

```sh
npm deprecate [<@scope>/]<package_name>[@<version>] <message>
```

### 删除包

删除则是将某个包完全从库中移除，从此安装不了了。

```sh
# 删除某个版本
npm unpublish [<@scope>/]<package_name>@<version>

# 删除整个包的所有版本内容
npm unpublish [<@scope>/]<package_name> --force
```

::: danger 警告

与其他操作不同，删除包可能会带来很多负面效果，所以具有如下限制：

- 删除的版本 24 小时以后才可以再次发布
- 发布 72 小时之内的包才可以被删除

:::

## 运行脚本

`npm` 还有一个很重要的功能，就是执行项目脚本。

在项目根目录下的 `package.json` 文件中，有一个 `scripts` 字段，里面是可执行的所有脚本内容，可以自定义，通过 `npm run` 可以执行。

```sh
# 例如一般的
npm run dev
npm run serve
npm run build
npm run test
# 等等
```

这些在不同项目中都会有不同的具体定义。

### 钩子脚本

每一条指令，都可以配置 `前置指令` 与 `后置指令`，分别对应：

- `pre`：前置
- `post`：后置

运行一条指令，系统会自动按照：`前置指令`、`指令`、`后置指令` 的顺序执行。

举个例子。有这么一段指令：

```json
scripts: {
    "test": "echo \"This is test\" && exit 0",
    "pretest": "echo \"This is pretest\" && exit 0",
    "posttest": "echo \"This is posttest\" && exit 0"
}
```

当我们执行 `npm run test` 的时候，系统会先执行 `pretest`，然后执行 `test`，最后执行 `posttest`。

<img :src="$withBase('/assets/pic/npm-hook-script.png')" alt="npm-hook-script">

## 管理源

对于多个仓库源，可以通过 `nrm` 快速管理。

### 安装 nrm

```sh
npm i nrm -g
```

### 查看 nrm 版本

安装成功后，通过：

```sh
nrm -V
```

### 查看 nrm 文档

可以查看安装版本，验证是否安装成功，然后可以查看帮助文档：

```sh
nrm help
```

### 查看源列表

```sh
nrm ls
```

### 新增源

```sh
nrm add <registry> <url>
```

### 删除源

```sh
nrm del <registry>
```

### 切换源

```sh
nrm use <registry>
```

### 测试仓库的链接

```sh
nrm test [<registry>]
```

不给 `registry` 则测试所有链接。
