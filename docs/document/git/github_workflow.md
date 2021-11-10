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

|                                                                            添加路径                                                                            |                                                                        添加 public key                                                                         |                                                                            添加成功                                                                            |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <a href="/assets/pic/github_workflow_add_deploy_key1.png" target="_blank"><img :src="$withBase('/assets/pic/github_workflow_add_deploy_key1.png')" alt=""></a> | <a href="/assets/pic/github_workflow_add_deploy_key2.png" target="_blank"><img :src="$withBase('/assets/pic/github_workflow_add_deploy_key2.png')" alt=""></a> | <a href="/assets/pic/github_workflow_add_deploy_key3.png" target="_blank"><img :src="$withBase('/assets/pic/github_workflow_add_deploy_key3.png')" alt=""></a> |

- 转到 `Secrets` 页面并添加新 `secret`：

|                                                                            添加路径                                                                            |                                                                        添加 private key                                                                        |                                                                            添加成功                                                                            |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <a href="/assets/pic/github_workflow_add_secret_key1.png" target="_blank"><img :src="$withBase('/assets/pic/github_workflow_add_secret_key1.png')" alt=""></a> | <a href="/assets/pic/github_workflow_add_secret_key2.png" target="_blank"><img :src="$withBase('/assets/pic/github_workflow_add_secret_key2.png')" alt=""></a> | <a href="/assets/pic/github_workflow_add_secret_key3.png" target="_blank"><img :src="$withBase('/assets/pic/github_workflow_add_secret_key3.png')" alt=""></a> |

> 注意，需要记住填写的私钥名称，这个需要用在 `secrets.ACTIONS_DEPLOY_KEY` 中。
