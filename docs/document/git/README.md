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
  git config --global user.name "yourname"
  ```

- 提交邮箱

  ```shell
  git config --global user.email "yourname@example.com"
  ```

- 创建 SSH

  ```shell
  ssh-keygen -t rsa -C "youremail@example.com"
  ```

- 将新生成的 SSH 全部拷贝并添加到远程仓库的相应设置中。

## 提交

### 初始化本地仓库

```shell
git init
```

### 检查多余的空白字符

```shell
git diff --check
```

### 暂存区

- 存放指定文件

  ```shell
  git add filename
  ```

- 将文件的修改、新建添加到暂存区

  ```shell
  git add . //注意add后面是一个点,你没看错
  ```

- 将文件的修改、删除添加到暂存区

  ```shell
  git add -u
  ```

- 将文件的修改、删除和新建添加到暂存区

  ```shell
  git add -A
  ```

### 提交修改内容

```shell
git commit -m "desc"
```

```shell
// 多行desc
// 这里需要先暂时输入一个单引号，然后写多行信息，写完之后再输入下一个单引号
git commit -m '
1. log1
2. log2
3. log3
'
```

### 重新提交

```shell
git commit --amend -m "desc"
```

### 撤销修改

撤销对工作区文件的修改，若修改后没有放到暂存区，则与上个版本一致，若修改后放到暂存区，则和暂存区一致。

```shell
git checkout -- filename
```

### 取消暂存区的指定文件

```shell
git reset HEAD filename
```

### 查看当前状态

显示当前工作区的状态

```shell
git status
```

### 查看提交日志

```shell
git log  // 从近到远显示提交日志
```

```shell
git log --pretty=oneline  // 将每个提交记录放在一行显示，其它参数：oneline、short、full、fuller等
```

**通过日志我们可以查询很多需要的数据**

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

### 删除文件

- 删除本地文件，不再纳入版本管理

  ```shell
  git rm filename
  ```

- 不纳入版本管理，但本地不删除文件

  ```shell
  git rm --cached filename
  ```

### 删除某次提交

```shell
git log  // 获取提交信息
git rebase -i (commit-id)  // commit-id 为提交版本的hash code
```

**注意：** 这里有个坑，commit-id 是需要删除的前一个 hash code，用图说明：

 <img :src="$withBase('/assets/pic/rebase1.png')" alt="rebase">

使用命令后，打开一个文件，将需要删除版本前面的 pick 改为 drop，用图说明：

 <img :src="$withBase('/assets/pic/rebase2.png')" alt="rebase">

修改后保存关闭，`ZZ` 或者 `:wq`，vim 的命令这里不赘述。

退出后使用`git log`再次查看，可以看到对应版本已经没有了。

## 回退

### 记录回退的命令

```shell
git reflog
```

### 回退到上一版本

```shell
git reset --hard HEAD
```

### 回退到指定版本

```shell
git reset --hard 哈希值  // 哈希值可以使用reflog命令查看
```

## 分支

### 查看分支

```shell
git branch
```

### 创建分支

```shell
git branch branchname
```

### 切换分支

```shell
git checkout branchname
git checkout -b branchname  // 创建并切换到该分支
git checkout -f branchname  // 强制切换到该分支
```

### 删除分支

```shell
git branch -D branchname
```

### 合并分支

```shell
git merge branchname
```

### 查看合并记录

```shell
git log --graph --pretty=oneline --abbrev-commit  // 查看分支合并情况
git branch --merged  // 查看已合并到当前分支的分支、上游分支
git branch --no-merged  // 查看尚未合并的分支
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
rm -rm .git/refs/original
git reflog expire --expire=now --all
git gc --prune=now
git gc --aggressive --prune=now
```

## 比较

### 比较工作区与暂存区的差异

```shell
git diff
```

### 比较工作区与当前分支库的差异

```shell
git diff HEAD
git diff HEAD -- path  // 与当前分支库同一目录比较
```

### 比较暂存区与版本库的差异

```shell
git diff --cached (或 --staged)
```

### 比较不同版本库中不同文件的差异

```shell
git diff HEAD:filename HEAD:filename
```

### 查看每次提交差异

```shell
git log -p -2  // 查询每次提交的行差异， 2查询的是提交次数，-p是展开显示每次提交的内容差异
git log -U1 --word-diff  // 查询每次提交的单词差异
git log --stat  // 显示改动的概要信息
```

## 标签

### 查看标签

```shell
git tag
```

### 创建标签

```shell
git tag content  // content填写标签内容
```

### 删除本地标签

```shell
git tag -d content
```

### 发布标签

```shell
git push -u origin content
```

### 删除远程标签

```shell
git push origin --delete tag content
```

## 远程操作

### 查看仓库信息

```shell
git remote
```

### 添加远程仓库

```shell
git remote add [name] [url]
```

### 将远程仓库分支添加到本地

```shell
git fetch origin mbranchname
```

### 克隆远程仓库到本地

```shell
git clone [url]  // [url]从远程仓库获取
```

### 拉取所有远程分支到本地

```shell
git branch -r | grep -v '\->' | while read remote; do git branch --track "${remote#origin/}" "$remote"; done
git fetch --all
git pull --all
```

### 更新分支

```shell
git pull  // 更新当前分支
git pull branchname master  // 获取并合并远程分支到本地master分支
git pull origin branchname  // 将远程仓库分支拉取到本地
```

### 推送分支

```shell
git push  // 向远程仓库推送当前分支
git push -f ...  // 强制推送
git push branchname master  // 向远程仓库推送master分支
git push origin branchname  // 将本地仓库提交到远程仓库
git push -u origin branchname  // 第一次推送时需要 -u 参数
```

### 合并远程分支

```shell
git merge fork  // 将fork分支合并到当前分支
git checkout fork a.c b.c  // 将fork分支的a.c b.c文件强制覆盖当前分支的对应文件
git merge origin branchname  // 将本地分支与远程分支合并
git mergetool  // 使用工具比较查看冲突
```

### 将最近两次提交合并为一个提交，并强制提交到远程仓库

```shell
git reset --soft HEAD
git commit -m "..."
git push --force
```

### _实例_

<font color="#0E6DB0">将共享库添加到自己的仓库并拉到本地</font>

```shell
git remote add gitignore https://github.com/github/gitignore
git pull origin gitignore
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

## 常见操作

一些具体的问题解决方案

### 解决上游（fork 源）冲突

- 从当前自己的项目中签出一个新的分支用于测试修改

```sh
git checkout -b <new_branch_name> [<old_branch_name>]
git pull <fork_source> <old_branch_name>
```

- 尝试合修改冲突并更新

```sh
git checkout <old_branch_name>   # 如果有修改，无法切换，尝试先 git commit
git merge --no-ff <new_branch_name>
git push <remote_origin> <old_branch_name>
```
