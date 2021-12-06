# GitHub Pages action 配置

GitHub 给我们提供了非常方便的部署功能 [GitHub Pages action](https://github.com/marketplace/actions/github-pages-action)。它可以帮助我们快速部署静态页面，省去了每次单独部署的繁琐操作，我们只需要通过简单的配置就可以实现该功能。

我们以该 vuepress 文档为例。

## 添加工作流

首先在项目中添加工作流文件：`.github/workflows/gh-pages.yml`，`yml` 文件名可以是任意名称。

这里我们用一个比较通用的解决方案 `peaceiris/actions-gh-pages@v3`：

```yml
name: Build and Deploy # 工作流名称。可选，任意填写
on:
  push: # 指定自动触发工作流程的事件
    branches: [docs] # 指定触发事件的分支
jobs:
  build-and-deploy: # 作业名称。任意填写
    runs-on: ubuntu-latest # 运行环境
    concurrency: # 并发设置。确保只有使用相同并发组的单一作业或工作流才会同时运行
      group: ${{ github.workflow }}-${{ github.ref }} # 并发组名
    steps: # 作业步骤
      - name: Checkout # 步骤名称
        uses: actions/checkout@v2 # 检索仓库并将其下载到运行器。只要工作流针对仓库的代码运行，都必须使用检出操作

      - name: Setup Node.js ${{ env.NODE_VERSION }} # 步骤名称
        uses: actions/setup-node@v1 # 安装指定版本的 node 包。这步之后可以使用 npm 命令
        with:
          node-version: ${{ env.NODE_VERSION }} # 指定版本。 env 是当前环境变量，它随作业步骤改变而改变

      - name: Install # 步骤名称
        run: yarn # 安装依赖

      - name: Build # 步骤名称
        run: yarn docs:build # 打包

      - name: Deploy # 步骤名称
        uses: peaceiris/actions-gh-pages@v3 # 将指定内容发布到 gh-pages 分支
        if: ${{ github.ref == 'refs/heads/docs' }} # 确保当前分支为 docs 才执行下面内容
        with:
          publish_dir: ./docs/.vuepress/dist # 文件目录
          github_token: ${{ secrets.GITHUB_TOKEN }} # 自动创建 GITHUB_TOKEN
          deploy_key: ${{ secrets.ACTIONS_DEPLOY_KEY }} # 秘钥 SSH Deploy Key。生成和配置方法看下面
          commit_message: Update docs # 提交信息，任意填写
```

配置好之后，就可以上传我们的代码，现在 GitHub 就可以根据我们的需求进行自动化部署了。

## 解构文件内容

下面我们一点一点解读配置文件。也可以阅读 [官方文档](https://docs.github.com/cn/actions/learn-github-actions/workflow-syntax-for-github-actions)，这里更加全面和详细。

我们的目标是每当我们 push 文档内容到 github，都会自动构建静态页面。

将上面事件内容模型化：**每当有预期事件发生，就会执行指定任务。**

所以我们可以通过上面 `yml` 文件看出：

- 每当有事件符合触发条件 `on`，就会执行作业 `jobs`。

<img :src="$withBase('/assets/pic/overview-actions-simple.png')" alt="">

### 名称 name

设置工作流程的名称。GitHub 在仓库的操作页面上显示工作流程的名称。如果省略 `name`，GitHub 将其设置为相对于仓库根目录的工作流程文件路径。

### 触发条件 on

所以我们需要定义一个触发条件，也就是 `on`。这是一个 **必填** 内容。可以提供单一事件 `string`，事件的 `array`，或者事件 `types` 的 `array` 甚至是事件配置 `map`。

```yml
on: push

on: [push, pull_request]

on:
  push:
    branches:
      - main

  pull_request:
    branches:
      - main

  page_build:
  release:
    types:
      - created
```

更多内容，可以参考 [文档](https://docs.github.com/cn/actions/learn-github-actions/events-that-trigger-workflows)。

### 作业 jobs

工作流运行包括一项或多项作业。默认为并行作业。

每个作业在 `runs-on` 指定的运行器环境中运行。

作业的配置内容十分丰富，可以参考 [官方文档](https://docs.github.com/cn/actions/learn-github-actions/workflow-syntax-for-github-actions#jobs) 仔细阅读。

#### github 上下文

`github` 上下文包含有关工作流运行并触发运行事件的信息，可以通过读取上下文内容获取大部分数据。具体参照 [文档](https://docs.github.com/en/actions/learn-github-actions/contexts#github-context)。

例如，我们在配置中用到的：

- `github.workflow`：工作流名称。如果工作流文件未指定名称，则默认为工作流文件的完整路径。
- `github.ref`：出发工作流运行的分支或标记。`refs/heads/<branch_name>` 或 `refs/tags/<tag_name>`

## 添加 SSH Deploy Key

我们在部署时需要用到 `deploy key`，如果没有，则会报找不到 `key` 的错误。

在上面 `yml` 文件中我们用到：

```yml
deploy_key: ${{ secrets.ACTIONS_DEPLOY_KEY }}
```

名称可以随意起。

### 生成 SSH Deploy Key

通过命令在本地生成一个 `deploy key`：

```sh
ssh-keygen -t rsa -b 4096 -C "$(git config user.email)" -f gh-pages -N ""
# 可以在当前路径下得到两个文件:
#   gh-pages.pub (public key)
#   gh-pages     (private key)
```

::: tip 提示
执行上面命令时，`Windows` 用户不要使用 `PowerShell`，需要使用 `Git Bash`。
:::

### 应用 SSH Deploy Key

到 GitHub 仓库的 `settings` 页面：

- 转到 `Deploy Keys` 页面并添加新 `key`：

|                                                                                                             添加路径                                                                                                             |                                                                                                         添加 public key                                                                                                          |                                                                                                             添加成功                                                                                                             |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <a href="https://github.com/jeremyjone/docs/blob/docs/docs/.vuepress/public/assets/pic/github_workflow_add_deploy_key1.png" target="_blank"><img :src="$withBase('/assets/pic/github_workflow_add_deploy_key1.png')" alt=""></a> | <a href="https://github.com/jeremyjone/docs/blob/docs/docs/.vuepress/public/assets/pic/github_workflow_add_deploy_key2.png" target="_blank"><img :src="$withBase('/assets/pic/github_workflow_add_deploy_key2.png')" alt=""></a> | <a href="https://github.com/jeremyjone/docs/blob/docs/docs/.vuepress/public/assets/pic/github_workflow_add_deploy_key3.png" target="_blank"><img :src="$withBase('/assets/pic/github_workflow_add_deploy_key3.png')" alt=""></a> |

- 转到 `Secrets` 页面并添加新 `secret`：

|                                                                                                             添加路径                                                                                                             |                                                                                                         添加 private key                                                                                                         |                                                                                                             添加成功                                                                                                             |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <a href="https://github.com/jeremyjone/docs/blob/docs/docs/.vuepress/public/assets/pic/github_workflow_add_secret_key1.png" target="_blank"><img :src="$withBase('/assets/pic/github_workflow_add_secret_key1.png')" alt=""></a> | <a href="https://github.com/jeremyjone/docs/blob/docs/docs/.vuepress/public/assets/pic/github_workflow_add_secret_key2.png" target="_blank"><img :src="$withBase('/assets/pic/github_workflow_add_secret_key2.png')" alt=""></a> | <a href="https://github.com/jeremyjone/docs/blob/docs/docs/.vuepress/public/assets/pic/github_workflow_add_secret_key3.png" target="_blank"><img :src="$withBase('/assets/pic/github_workflow_add_secret_key3.png')" alt=""></a> |

> 注意，需要记住填写的私钥名称，这个需要用在 `secrets.ACTIONS_DEPLOY_KEY` 中。

## 自动部署到自己的服务器

上面都是在部署 Github Page，如果需要部署到自己的网站，当然也是可以的。

这里我们以阿里云 ECS 为例。其部署流程也是差不多的，首先打包，然后连接到服务器，将指定文件拷贝到目标服务器的指定文件夹中即可。

这里我们用到另一个插件：`easingthemes/ssh-deploy`，它可以帮助我们连接服务器并拷贝文件，只需要经过简单配置，就可以使用。

### 生成连接秘钥

首先，我们仍然需要 SSH Key 作为连接的钥匙。可以在服务器中生成：

```sh
ssh-keygen -m PEM -t rsa -b 4096
```

此时服务器 `~/.ssh` 下会生成 `id_ras` 与 `id_ras.pub`，后者是公钥，前者是私钥。

### 部署公钥

将公钥追加到 `~/.ssh/authorized_keys` 文件中，如果没有，就创建一个：

```sh
cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys

# 然后给整个文件夹 600 权限即可
chmod 600 -R ~/.ssh
```

::: tip 提示
如果管理多个 SSH Key，每一次追加都需要确保有 `换行符` 存在。
:::

如果是 `root` 登录，需要修改 `/etc/ssh/sshd_config` 中的 `PermitRootLogin` 为 `yes`，然后重启 `service sshd restart` 即可。

这样服务器就可以等待验证连接了。

### 部署私钥

将私钥 `id_rsa` 内容拷贝到 GitHub 中，添加方法与 [应用 SSH Deploy Key](#应用-SSH-Deploy-Key) 添加私钥的方法一样。

### 配置变量

需要用到 4 个变量：

- `SSH_PRIVATE_KEY`：刚才添加的私钥
- `REMOTE_HOST`：远程服务器地址，可以是域名，也可以是 IP
- `REMOTE_USER`：远程服务器用户，需要有访问权限的用户
- `TARGET`：服务器目标地址

以上 4 个变量最好是添加到私钥用，这样就可以通过 `secrets.XXX` 的方式读取到，文件中看不到私密信息。

除此之外，还有几个变量，可以直接填写：

- `REMOTE_PORT`：远程服务器端口，默认 22，如果没变，就不用写了
- `ARGS`：参数，默认为 `-rltgoDzvO`，根据不同服务器进行修改。阿里云为 `-avzr --delete`
- `SOURCE`：源地址，这个一般是打包时固定好的，默认为 `''`，通常打包路径为 `dist/`
- `EXCLUDE`：排除的目录、文件等。默认为 `''`，根据需要填写即可。

### 部署工作流

最后就是完整的工作流配置文件：

```yml{26-35}
name: Deploy to my server
on:
  push:
    branches:
      - main
    path-ignore:
      - README.md
      - gitignore

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      # 切换分支
      - name: Checkout
        uses: actions/checkout@master

      # 安装依赖
      - name: Install dependencies
        run: yarn

      # 构建
      - name: Build
        run: yarn build

      # 部署
      - name: Deploy
        uses: easingthemes/ssh-deploy@main
        env:
          SSH_PRIVATE_KEY: ${{ secrets.REMOTE_SERVER_ACCESS_TOKEN }}
          ARGS: "-avzr --delete"
          SOURCE: "dist/"
          REMOTE_HOST: ${{ secrets.REMOTE_SERVER_HOST }}
          REMOTE_USER: ${{ secrets.REMOTE_SERVER_USER }}
          TARGET: "${{ secrets.REMOTE_SERVER_TARGET }}"
```
