# GIT 命令

## 安装

- ### Linux

  - Linux 下

    ```shell
    # ubuntu
    sudo apt-get install git

    # centos
    yum install -y git
    ```

  - 老一点的 Debian 或 Ubuntu Linux，要把命令改为

    sudo apt-get install git-core

- ### Windows

  - 在 Windows 上使用 Git，可以从 Git 官网直接[下载安装程序](https://git-scm.com/downloads)，然后按默认选项安装即可。安装完成后，在开始菜单里找到“Git”->“Git Bash”，蹦出一个类似命令行窗口的东西，就说明 Git 安装成功！

  <img :src="$withBase('/assets/pic/bash.png')" alt="git bash">

- ### Mac OS X

  - 一是安装 homebrew，然后通过 homebrew 安装 Git，具体方法请参考 homebrew 的文档：[http://brew.sh/](http://brew.sh/)。

  - 第二种方法更简单，也是推荐的方法，就是直接从 AppStore 安装 Xcode，Xcode 集成了 Git，不过默认没有安装，你需要运行 Xcode，选择菜单“Xcode”->“Preferences”，在弹出窗口中找到“Downloads”，选择“Command Line Tools”，点“Install”就可以完成安装了。

安装完成后，可以在 shell 或 bash 中查看 git

```shell
git --version
```

显示当前安装的 git 版本信息，说明已经安装成功了。

## 配置

- 提交名字

```shell
# 全局
git config --global user.name "yourname"

# 当前仓库
git config user.name "yourname"
```

- 提交邮箱

```shell
# 全局
git config --global user.email "yourname@example.com"

# 当前仓库
git config user.email "yourname@example.com"
```

- 创建 SSH

  ```shell
  ssh-keygen -t rsa -C "youremail@example.com"
  ```

- 将新生成的 SSH 全部拷贝并添加到远程仓库的相应设置中。

### 多用户行为

在配置全局 `--global` 用户之后，我们默认与远程仓库的联系都是该用户。如果我们需要通过其他账户进行远程操作，则可以变更远程仓库路径的办法。

- 只是在域名前面加上用户名和 `token` 即可：

```shell
# 之前的路径
https://github.com/<username>/<repository_name>.git

# 那么现在天上用户名即可
https://<username>:<personal_access_token>@github.com/<username>/<repository_name>.git
```

- 如果不希望 `git` 保存我们的 `token`，则可以只填用户名：

```shell
https://<username>@github.com/<username>/<repository_name>.git
```

之后会要求输入 ~~密码~~ 或 `token`。

::: warning 注意
**密码** 不再是认证方式之一。
:::

::: tip 提示
`token` 需要在 [https://github.com/settings/tokens](https://github.com/settings/tokens) 中申请。

填写一个描述（Note），选择有效时间，最后选择域（scopes）即可，通常选择第一个 `repo` 即可，点击 `生成 token`。

页面会显示一个 `token` 字串，保存它，它就是每次需要填写的内容，该字串只显示一次，后续看不到它。

<img :src="$withBase('/assets/pic/generate-token.png')" alt="">
:::

## 使用

### 初始化本地仓库

```shell
git init
```

### 帮助

`git` 提供了完整的帮助，可以通过 `--help` 命令来查看。同时，在任何命令下使用 `--help` 就会显示当前命令的帮助文档。

```shell
git --help  # 会列出所有可用的命令

git add --help  # 会打开关于 add 命令的帮助

git log --help  # 会打开关于 log 命令的帮助
```

### Git 的流程

Git 分成 `local（本地）`、`staged（暂存区）` 以及 `Git（仓库）`，另外还包括 `远程仓库（Remote）`，如 GitHub 等。

它的操作流程如下：

<img :src="$withBase('/assets/pic/git-flow.png')" alt="">

## 提交

### 添加到暂存区

- 存放指定文件

  ```shell
  git add <filename>

  # 支持多个文件
  git add <filename1> <filename2> [...]

  # 支持通配符，比如添加所有 js 文件
  git add *.js
  ```

- 将所有文件的修改、新建添加到暂存区

  该命令可以将所有内容都添加到暂存区

  ```shell
  git add -A
  # 或者
  git add --all
  ```

  该命令只能够添加当前目录或者子目录的文件

  ```shell
  git add . # 注意 add 后面的一个点，它表示所有文件
  ```

- 将文件的修改、删除添加到暂存区

  ```shell
  git add -u
  ```

### 取消暂存区文件

该命令会将暂存区的文件回退到工作区，并不会改变文件内容，如果需要重新添加到咱群去，只需要重新执行 `git add` 命令即可。

```shell
git reset HEAD  # 取消全部文件

git reset HEAD <filename>  # 取消指定文件
```

### 删除文件

如果文件还没有提交，可以通过 `.gitignore` 文件来忽略它。

但是如果文件已经纳入管理，那么需要删除它：

- 文件不再纳入版本管理，同时删除本地文件

  ```shell
  git rm filename
  ```

- 文件不再纳入版本管理，同时保留本地文件

  ```shell
  git rm --cached filename
  ```

### 暂存工作现场

将所有未提交的更改保存到本地，并隐藏它们，回退到当前分支的提交状态，通常是 `HEAD`。

```shell
git stash

# 不跟参数等同于
git stash push
```

### 查看工作现场

查看已保存的工作现场列表，可以获取到工作现场的索引：

```shell
git stash list
```

<img :src="$withBase('/assets/pic/stash_index.png')" alt="">

### 恢复工作现场

- 恢复最近一次保存的工作现场

```shell
git stash apply
```

- 恢复后删除该工作现场

```shell
git stash pop
```

上面两个命令都支持通过索引恢复指定工作现场，具体索引按照实际填写即可：

```shell
git stash apply stash@{0}

git stash pop stash@{0}
```

### 删除工作现场

- 删除最近的一个工作现场

```shell
git stash drop
```

- 删除所有工作现场

```shell
git stash clear
```

### 查看工作区状态

显示当前工作区中所有变化文件的状态

```shell
git status
```

### 提交修改内容

```shell
git commit -m "desc"
```

```shell
# 多行desc
# 这里需要先暂时输入一个单引号，然后写多行信息，写完之后再输入下一个单引号
git commit -m '
1. log1
2. log2
3. log3
'
```

::: tip 建议
提交内容应该严格按照现代[提交规范](#提交规范)，使用规范工具，不自行填写内容。
:::

### 重新提交

这将与上次提交内容合并为一次提交。

```shell
git commit --amend -m "desc"  # 注意 --amend 必须在 -m 的前面
```

### 撤销修改

撤销对工作区文件的修改，若修改后没有放到暂存区，则与上个版本一致，若修改后放到暂存区，则和暂存区一致。

```shell
git checkout -- <filename>
```

### 删除某次提交

```shell
git log  # 获取提交信息
git rebase -i <commit-id>  # commit-id 为提交版本的hash code
```

**注意：** 这里有个坑，commit-id 是需要删除的前一个 hash code，用图说明：

 <img :src="$withBase('/assets/pic/rebase1.png')" alt="rebase">

使用命令后，打开一个文件，将需要删除版本前面的 `pick` 改为 `drop`，用图说明：

 <img :src="$withBase('/assets/pic/rebase2.png')" alt="rebase">

修改后保存关闭，`ZZ` 或者 `:wq`，vim 的命令这里不赘述。

退出后使用`git log`再次查看，可以看到对应版本已经没有了。

### 合并提交

分支开发时，会有很多提交，但是合并到主分支时，希望只有一个提交，此时需要合并提交。

- 修改 HEAD 并重新提交

```shell
git reset HEAD~<n>  # n 为需要合并提交的数量
git add .
git commit -am "desc"
```

- 通过 rebase 界面自定义

此方法更适合需要保留之前的所有/部分提交信息。

```shell
git rebase -i <remoteRepo>/<branchname>

# 通常为
git rebase -i origin/master
```

此时会打开一个 `vim` 界面：

<img :src="$withBase('/assets/pic/rebase-merge-commit.png')" alt="">

最上面会列出当前本地提交的所有内容（自与远程仓库不一致开始），按时间顺序依次向下列出，所以越下面的内容越新，最下面一行是最新提交的。

根据下面的注释：

```text
pick：  正常选中
reword：选中，并且修改提交信息；
edit：  选中，rebase 时会暂停，允许你修改这个 commit（参考这里）
squash：选中，会将当前 commit 与上一个 commit 合并
fixup： 与 squash 相同，但不会保存当前 commit 的提交信息
exec：  执行其他shell命令
```

根据需要将指定提交的 `pick` 修改为 `squash`（或 `s`） 或者 `fixup`（或 `f`），注意第一行不能修改，可以修改后面的内容。

然后保存文件（`ZZ` 或者 `:wq`），就可以进行合并提交了。

保存文件后，会跳转到另一个 `vim` 界面，显示了提交信息，如果填写的是 `squash`，则会显示所有提交的信息，这里做了一个合并。如果填写的是 `fixup`，则不会保留其他提交信息。

填写好信息，保存文件，就可以看到只有一个（如果在基变文件中只保留了一个 `pick` 的话）提交信息了。

## 日志

### 查看提交日志

```shell
git log  # 从近到远显示提交日志
```

通过日志我们可以查询很多需要的数据

```shell
git log --pretty=oneline  # 将每个提交记录放在一行显示，其它参数：oneline、short、full、fuller等
```

可以显示每次提交的轨迹，这在多分支下非常有用

```shell
git log --graph

# 查看分支合并情况
git log --graph --pretty=oneline --abbrev-commit
```

- 统计提交的行数

```shell
git log --stat | perl -ne 'END { print $c } $c += $1 if /(\d+) insertions/;'

# 指定起始日期开始
git log --stat --since 2020-06-01 |perl -ne 'END { print $c } $c += $1 if /(\d+) insertions/;'
```

- 查看指定日期的日志

```shell
git log --since 2020-06-01

# 统计日志的行数
git log --since 2020-06-01 | wc -l
```

- 查看提交的次数

```shell
git log --oneline | wc -l
```

- 按用户查看添加、删除的行信息

```shell
git log --author="$(git config --get user.name)" --pretty=tformat: --numstat| gawk '{ add += $1 ; subs += $2 ; loc += $1 - $2 } END { printf "added lines: %s removed lines : %s total lines: %s\n",add,subs,loc }'

# 上面的方法可以直接使用，会使用当前账户的用户，如果想查看其他人，可以将--author后面的参数直接换成指定用户名即可。例如：
git log --author="jeremyjone" --pretty=tformat: --numstat| gawk '{ add += $1 ; subs += $2 ; loc += $1 - $2 } END { printf "added lines: %s removed lines : %s total lines: %s\n",add,subs,loc }'
```

- 查看仓库的提交者名称

```shell
git log --pretty='%aN' | sort | uniq -c | sort -k1 -n -r

# 查看前几名，比如 5
git log --pretty='%aN' | sort | uniq -c | sort -k1 -n -r | head -n 5
```

## 回退

### 记录回退的命令

该命令可以查看历史提交以及被回退的记录。但该记录仅在本地，且有时限。

```shell
git reflog
```

### 回退到当前最新提交

```shell
git reset --hard HEAD
```

### 回退到上次提交

```shell
git reset --hard HEAD^
```

### 回退到上 n 次提交

```shell
git reset --hard HEAD~<n>  #n 为一个数字
```

### 回退到指定版本

该命令既可以回退到过去版本，也可以回到未来版本。

```shell
git reset --hard <commitId>  # commitId 可以使用 reflog 命令查看
```

## 分支

### 查看分支

```shell
# 仅查看本地
git branch

# 查看本地和远程。远程名称为 <remoteRepo>/<branchname>
git branch -a
```

### 创建分支

```shell
git branch <branchname>
```

### 切换分支

```shell
git checkout <branchname>
git checkout -b <branchname>  # 创建并切换到该分支
git checkout -f <branchname>  # 强制切换到该分支
```

### 删除分支

```shell
# 删除为合并分支
git branch -D <branchname>

# 删除已合并分支
git branch -d <branchname>
```

### 合并分支

将某个分支合并到当前分支。

```shell
git merge <branchname>
```

### 查看合并记录

```shell
# 查看分支合并情况
git log --graph --pretty=oneline --abbrev-commit

# 查看已合并到当前分支的分支、上游分支
git branch --merged

# 查看尚未合并的分支
git branch --no-merged
```

### 将本地分支关联到远程分支

```shell
git branch --set-upstream <localBranch> origin/<remoteBranch>
```

## 比较

### 比较工作区与暂存区的差异

```shell
git diff
```

### 检查多余的空白字符

```shell
git diff --check
```

### 比较工作区与当前分支库的差异

```shell
git diff HEAD
git diff HEAD -- path  # 与当前分支库同一目录比较
```

### 比较暂存区与版本库的差异

```shell
git diff --cached (或 --staged)
```

### 比较不同版本库中不同文件的差异

```shell
git diff HEAD:<filename> HEAD:<filename>
```

### 查看每次提交差异

```shell
git log -p -2  # 查询每次提交的行差异， 2查询的是提交次数，-p是展开显示每次提交的内容差异
git log -U1 --word-diff  # 查询每次提交的单词差异
git log --stat  # 显示改动的概要信息
```

## 标签

标签是用于特定版本的标记。

### 查看标签

```shell
git tag
```

### 创建标签

```shell
# 给当前版本添加标签
git tag <content>

# 给历史版本添加标签
git tag <content> <commitId>
```

### 删除标签

```shell
# 删除本地标签
git tag -d <content>

# 删除远程标签
git push <remoteRepo> -d <content>
```

### 发布标签

```shell
# 发布指定标签
git push -u <remoteRepo> <content>

# 发布所有未提交的标签
git push <remoteRepo> --tags
```

### 拉取标签

从远程仓库更新本地标签内容。

```shell
git pull <remoteRepo> --tags
```

## 远程操作

### 查看仓库信息

```shell
# 不详细信息
git remote

# 详细信息
git remote -v
```

### 添加远程仓库

```shell
git remote add <remoteRepo> <url>
```

- `remoteRepo` 名称可以随意填写，通常默认填写 `origin`
- `url` 可以在远程仓库网站找到

### 将远程仓库分支添加到本地

该命令仅仅是拉取远程仓库内容并更新到本地，永远不会影响当前的工作区。

```shell
git fetch <remoteRepo> <branchname>
```

### 克隆远程仓库到本地

```shell
git clone <url>
```

### 拉取所有远程分支到本地

三种方法都可以：

```shell
# 1  注意 remoteRepo 需要根据实际需要进行替换
git branch -r | grep -v '\->' | while read remote; do git branch --track "${remote#remoteRepo/}" "$remote"; done

# 2
git fetch --all

# 3 慎用，会覆盖当前工作区
git pull --all
```

### 更新分支

该命令相当于是 `git fetch` 与 `git merge FETCH_HEAD` 的合体，拉取远程仓库内容并且合并到当前工作区，该操作可能会出现冲突，需要注意。

- 更新当前分支

```shell
git pull
```

- 获取远程仓库的 master 分支，并合并到本地的 work 分支

```shell
git pull <remoteRepo> master:work
```

- 将远程仓库分支拉取到本地，分支名称相同

```shell
git pull <remoteRepo> <branchname>
```

### 推送分支

- 向远程仓库推送当前分支

```shell
git push
```

- 将本地仓库提交到远程仓库

```shell
git push <remoteRepo> <branchname>

# 向远程仓库推送 master 分支
git push <remoteRepo> master
```

- 强制推送需要添加参数 `-f`

```shell
git push -f <remoteRepo> <branchname>
```

- 第一次推送时需要参数 `-u`

```shell
git push -u <remoteRepo> <branchname>
```

- 推送发布版本时同时推送 tag

```shell
git push --follow-tags <remoteRepo> <branchname>
```

### 合并远程分支

```shell
git merge fork               # 将fork分支合并到当前分支
git checkout fork a.c b.c    # 将fork分支的a.c b.c文件强制覆盖当前分支的对应文件
git merge origin branchname  # 将本地分支与远程分支合并
git mergetool                # 使用工具比较查看冲突
```

### 将最近两次提交合并为一个提交，并强制提交到远程仓库

```shell
git reset --soft HEAD
git commit -m "..."
git push --force
```

### 删除远程分支

```shell
git push <remoteRepo> -d <branchname>
```

## 提交规范

在工程化项目中，随着项目越来越大，开发人员越来越多，为避免风格迥异，都会有各种各样的风格约束。`Git` 的提交信息也不例外，它在实践过程中，逐渐形成了一种规范化的提交内容规范。

Tim Pope 在他的 [博客](https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html) 中主张采用特定的消息样式。具体的讨论帖子可以参考 [这里](https://stackoverflow.com/questions/2290016/git-commit-messages-50-72-formatting)，各路大神在这里讨论的很详尽，有兴趣可以去看看。

在实践中，越来越多的开发者参与进来，逐渐形成了现在流行的提交规范。在这其中，最知名的应该是 [Angular 规范](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/)，它具有如下好处：

- 允许通过脚本直接生成 `CHANGELOG.md`
- 允许忽略 `git bisect` 提交（不像格式化那样重要的提交）
- 浏览记录时可以提供更清晰的历史信息

具体示例，可以参考 [Angular 提交实例](https://github.com/angular/angular/commits/master)

<img :src="$withBase('/assets/pic/git_angular_commit.png')" alt="">

### 提交格式

每次提交，都应当包含三部分内容 `Header`、`Body` 和 `Footer`：

```text
<type>(<scope>): <subject>
// 空一行
<Body>
// 空一行
<Footer>
```

其中，`Header` 是必须的，它由 `type` 与 `subject` 构成，而 `Body` 与 `Footer` 是可选的。

提交消息的任何一行都不能超过 100 个字符（或 72 个字符）! 这使得消息在 github 以及各种 git 工具中更容易阅读。

### Header

消息头只有一行，其中包含了对包含类型、可选范围和主题的更改的简洁描述。

#### type（类型）

`type` 用于说明提交的类型，只允许使用如下标识：

- `feat`：添加一个新功能
- `fix`：修复一个 bug
- `docs`：文档变更
- `style`：不影响功能的代码格式修正（如空格、分号等格式的修改）
- `refactor`：不包含修复 bug、功能新增的代码重构
- `test`：添加、修改测试用例
- `chore`：对构建过程或辅助工具和库的更改（不影响源文件、测试用例等）

随着技术的更迭，现在也可以有如下标识（[commitlint](https://github.com/conventional-changelog/commitlint)）：

- `build`：对构建流程、外部依赖等的变更（如升级 npm 包、修改 webpack 配置等）
- `ci`：修改 CI 配置、脚本
- `perf`：性能优化
- `revert`：回滚 commit

其中，`feat` 与 `fix` 类型的内容会自动生成在 `CHANGELOG.md` 中，其它内容可以自由配置，但建议使用默认即可。

#### scope（范围）

`scope` 用于说明提交影响的范围，比如数据层、控制层等，视项目而定，也可以不填。

#### subject（主题）

`subject` 是提交的简短描述。最好不超过 50 个字。最好使用**英文**，并且：

- 以动词开头，使用祈使句、现在时，如 `change`，而不是 `changed` 或者 `changes`
- 第一个词小写即可
- 最后不要加句号（`.`）

### Body

消息体是针对本次提交的详细描述，可以分成多行，同时也有两点需要注意：

- 与在 `subject` 中一样，内容使用祈使句、现在时，如 `change`，而不是 `changed` 或者 `changes`
- 具体说明改变的动机，以及与以前行为的对比

### Footer

`Footer` 只包含以下两种情况：

- 不兼容变更
- 关闭 ISSUE

#### BREAK CHANGE（不兼容变更）

所有的 `BREAK CHANGE` 都必须作为中断更改块出现在 `Footer` 中，应该以 `BREAKING CHANGE:` 开始，用一个空格或者两个换行符。提交消息的其余部分是对更改、理由和迁移说明的描述。如：

```text
BREAKING CHANGE: isolate scope bindings definition has changed and
    the inject option for the directive controller injection was removed.

    To migrate the code follow the example below:

    Before:

    scope: {
      myAttr: 'attribute',
      myBind: 'bind',
      myExpression: 'expression',
      myEval: 'evaluate',
      myAccessor: 'accessor'
    }

    After:

    scope: {
      myAttr: '@',
      myBind: '@',
      myExpression: '&',
      // myEval - usually not useful, but in cases where the expression is assignable, you can use '='
      myAccessor: '=' // in directive's template change myAccessor() to myAccessor
    }

    The removed `inject` wasn't generaly useful for directives so there should be no code using it.
```

#### 关闭 ISSUE

如果当前提交时针对某个 `ISSUE`，则可以在 `Footer` 中关闭该 `ISSUE`，可以同时关闭多个。如：

```text
Closes #1
// or
Closes #1, #2
```

## 操作 git 中的文件

### 查看 git 占用空间

```shell
du -sh
```

### 查找 git 中的文件

```shell
git verify-pack -v .git/objects/pack/pack-*.idx | sort -k 3 -g | tail -5  // 找出git中占空间最大的前5个文件的id

git rev-list --objects --all | grep .  // 查看文件列表，可以和grep一起使用，grep后跟需要查找的文件名或id
```

### 删除匹配的\*.rar 文件

```shell
git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch *.rar' --prune-empty --tag-name-filter cat -- --all
```

### 回收空间

```shell
rm -r .git/refs/original
git reflog expire --expire=now --all
git gc --prune=now
git gc --aggressive --prune=now
```

## 常见操作

一些具体的问题解决方案

### 解决上游（fork 源）冲突

- 从当前自己的项目中签出一个新的分支用于测试修改

```sh
git checkout -b <newBranch> [<oldBranch>]
git pull <forkSource> <oldBranch>
```

- 尝试合修改冲突并更新

```sh
git checkout <oldBranch>   # 如果有修改，无法切换，尝试先 git commit
git merge --no-ff <newBranch>
git push <remoteRepo> <oldBranch>
```
