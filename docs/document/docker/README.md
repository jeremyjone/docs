# Docker 使用文档

## 安装

以下以 `CentOS7+` 为例，其余请参考[官方文档](https://docs.docker.com/engine/install/)：

### 先卸载旧版本

```sh
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
```

### 安装新版本（使用仓库）

#### 安装需要的安装包

```sh
sudo yum install -y yum-utils
```

#### 设置安装仓库地址

```sh
sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo # 可以将地址改为国内镜像（百度搜 "docker镜像地址" 即可）

# 阿里云镜像地址：http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

#### 更新 yum

```sh
sudo yum makecache fast
```

#### 安装 docker 引擎

```sh
sudo yum install docker-ce docker-ce-cli containerd.io
```

### 测试启动

```sh
systemctl start docker

docker verion
```

显示如下内容，即安装成功。

<img :src="$withBase('/assets/pic/docker-version.png')" alt="docker-version">

#### 运行测试程序

```sh
docker run hello-world
```

该命令会尝试寻找名称为 `hello-world` 的仓库，如果没有找到，则会去远程仓库寻找并尝试拉取。

如果显示：

<img :src="$withBase('/assets/pic/docker-run-hello-world.png')" alt="docker-run-hello-world">

则说明已经运行成功。

### 卸载 docker

#### 卸载 docker 引擎

```sh
sudo yum remove docker-ce docker-ce-cli containerd.io
```

#### 删除 docker 资源

```sh
sudo rm -rf /var/lib/docker # docker 默认路径
```

## 镜像常用命令

### 查看信息

#### 查看 docker 版本

```sh
docker version
```

#### 查看 docker 信息

```sh
docker info
```

更多可以查看[官方文档](https://docs.docker.com/engine/reference/commandline/docker/)。

### 查看镜像

#### 查看主机上的所有镜像

```sh
docker images [-a] [-q]
```

- `-a` 显示全部
- `-q` 只显示 ID

#### 查找远程镜像

可以通过名称直接搜索远程仓库中的镜像：

```sh
docker search <image> [-f=<condition>]
```

- `-f=<condition>` 搜索条件，如：

```sh
-f=STARS=500  # stars 数量大于500
```

### 拉取镜像

```sh
docker pull <image-name>[:<tag>]
```

- tag 如果不写，默认为 `lastest`，一般需要指定版本时填写，`tag` 必须在镜像库中存在。

### 删除镜像

```sh
docker rmi -f <image> [[<image>] [<image>] ...]
```

- image 可以写镜像 ID 或者镜像名，通常写 ID。支持删除多个镜像

#### 条件删除

可以结合 linux 系统命令进行条件删除。如删除全部：

```sh
docker rmi -f $(docker images -aq)
```

### 给镜像添加标签

有时需要单独给已经存在的镜像添加标签，可以通过：

```sh
docker tag <镜像ID> <tag>
```

### 官方镜像的文档

所有远程镜像一般都有详细的[文档](https://hub.docker.com)，直接搜索对应镜像名称后方可自行查看。

## 容器常用命令

容器，就是镜像在运行时的环境。同一个镜像可以多次启动，同时会生成多个容器，每一个容器虽然环境一样，但是它们的 ID 却不一样，说明它们不是同一个容器。

### 查看启动的容器

查看当前正在运行的容器

```sh
docker ps [参数们]
```

- `-a` 查看历史启动记录
- `-n=<number>` 查看最近 n 条创建的容器
- `-q` 只显示容器 ID

### 删除容器

```sh
docker rm [-f] <容器ID>
```

- `-f` 加上该参数，会强制删除包括正在运行的容器。

还可以与删除镜像类似，使用参数方式：

```sh
docker rm -f $(docker ps -aq) # 删除全部容器
```

### 运行容器

通过 `run` 命令可以直接启动容器，同时如果本地找不到，则会去远程仓库搜索并拉取（参照[测试运行](#运行测试程序)）。

```sh
docker run [参数们] <image>
```

- `--name=<name>` 给容器起个名字
- `-d` 以后台方式运行
- `-i` 使用交互方式运行
- `-t` 分配一个虚拟终端（与 `-i` 一起使用，通常为 `-it`）
- `-p` 指定容器端口。还可以与主机端口进行映射，格式：`主机端口:容器端口`，如：`8080:8080`
- `-P` 指定一个随机端口
- `-v [<容器卷名>:][/<本地目录>:]<容器目录>[:<权限>]` 挂载目录。
  - 以 `/` 开头的为目录，否则是置顶的卷名。卷名一般在 `/var/lib/docker/volumes/<容器卷名>/_data` 中。
  - 权限通常是 `ro` 或 `rw`，意为 `readonly` 或 `readwrite`

### 进入容器

通常启动容器都是以 `-d` 的后台方式，有时需要进入容器内部，此时需要命令：

```sh
docker exec -it <容器ID>
```

上面的命令会创建一个新的交互环境。

还可以通过下面命令进入容器内部，只不过会进入到容器内正在执行的环境：

```sh
docker attach <容器ID>
```

### 退出容器

在容器交互模式下，可以选择仅退出容器或者退出并关闭容器。

#### 仅退出容器

该退出方式不影响容器的运行，使用快捷键直接退出：

```
Ctrl + P + Q
```

#### 退出并关闭容器

该退出方式会直接关闭容器，使用交互命令：

```sh
exit
```

### 启动与停止容器

容器可以停止，也可以继续启动。

```sh
docker start <容器ID>    # 启动容器
docker restart <容器ID>  # 重启容器
docker pause <容器ID>    # 暂停容器
docker unpause <容器ID>  # 取消暂停容器
docker stop <容器ID>     # 停止容器
docker kill <容器ID>     # 强制停止容器
```

### 查看容器日志

```sh
docker logs [参数们] <容器ID>
```

- `-f` 跟踪日志输出
- `-t` 时间戳
- `--tail <数量>` 显示的条数，默认 `all`，显示全部。
- `--details` 显示详细信息
- `since <time>` 日志起始时间。格式 UTC（2020-01-01T00:00:01），或者相对时间，如：30m，30 minutes
- `until <time>` 日志截止时间。格式同上

### 查看容器内进程

与 linux 类似：

```sh
docker top <容器ID>
```

### 查看容器详细信息

```sh
docker inspect <容器ID>
```

### 文件操作

#### 拷贝容器内部文件到主机

```sh
docker cp <容器ID>:<容器内路径> <主机路径>
```

## DockerFile

DokcerFile 是构建一个自定义 Docker 镜像的文件，如：

```dockerfile
# syntax=docker/dockerfile:1
FROM ubuntu:18.04
COPY . /app
RUN make /app
CMD python /app/app.py
```

Docker 镜像由只读层组成，每层代表一个 Dockerfile 指令。这些层是堆叠的，每一层都是前一层变化的增量。

### DockerFile 常用指令

指令速览：

```dockerfile
FROM        # 基础镜像名称
LABEL       # 镜像维护者信息
RUN         # 构建镜像时需要执行的命令
ENTRYPOINT  # 指定容器启动时运行的命令，可执行多个命令
CMD         # 指定容器启动时运行的命令，只有最后一个命令生效
EXPOSE      # 保留端口
ENV         # 设置环境变量
ADD         # 需要添加内容的压缩包，会自动解压
COPY        # 拷贝文件到镜像中
VOLUME      # 挂载主机目录
WORKDIR     # 设置当前工作目录
ONBUILD     # 子镜像构建时触发
```

#### FROM

尽可能使用官方镜像作为镜像的基础。如：

```dockerfile
FROM ubuntu:18.04
```

#### LABEL

像镜像中添加标签，包括维护者、组织、记录许可信息等

一个镜像可以有多个标签，每个标签都应该是一行以 `LABEL` 开头并跟一个键值对，如：

```dockerfile
LABEL com.example.version="0.0.1-beta"
LABEL vendor1="ACME Incorporated"
LABEL vendor2=ZENITH\ Incorporated
LABEL com.example.release-date="2015-02-12"
LABEL com.example.version.is-production=""
```

空格必须**转义**或者**使用`"`引起来**。

#### RUN

构建镜像时需要执行的命令。

多条`RUN` 语句单独可能会导致不确定问题，所以可以通过 `&&` 将多条命令连接，同时命令可以在用反斜杠(`\`)分割的多行上拆分，使语句更具可读性、维护性。如：

```dockerfile
RUN apt-get update && apt-get install -y \
    package-bar \
    package-baz \
    package-foo=1.3.*
```

#### ENTRYPOINT 与 CMD

两个指令都是用于镜像内要执行的命令。

`ENTRYPOINT` 可以设置镜像的主命令，允许镜像像该命令一样运行。如：

```dockerfile
ENTRYPOINT ["executable", "param1", "param2", ...]

# 举例：
ENTRYPOINT ["ls", "-a"]
```

`CMD` 指令应用于运行镜像中包含的软件以及任何参数。`CMD` 通常应以如下方式出现：

```dockerfile
CMD ["Executable", "param1", "param2", ...]
```

但是当只有参数时，会作为 `ENTRYPOINT` 的参数传入。如：

```dockerfile
ENTRYPOINT ["ls", "-a"]
CMD ["-l"]
```

最后会被编译为 `ls -al`。

**如果**：

- 使用 `CMD` 指令，当启动镜像并传入一些附加指令时，会替换掉原有 `CMD` 指令。
- 使用 `ENTRYPOINT` 指令，则该指令为主指令，并且将 `CMD` 指令内容与启动镜像时传入的附加指令一同作为附属指令一起执行。

#### EXPOSE

`EXPOSE` 指令告知容器侦听连接的端口。

#### ENV

使用 `ENV` 与 `PATH` 容器安装软件的环境变量，还可用于提供特定容器化服务所需的环境变量，同时还可以设置常用的版本号。如：

```dockerfile
ENV PG_MAJOR=9.3
ENV PG_VERSION=9.3.4
RUN curl -SL https://example.com/postgres-$PG_VERSION.tar.xz | tar -xJC /usr/src/postgres && …
ENV PATH=/usr/local/postgres-$PG_MAJOR/bin:$PATH
```

#### ADD 与 COPY

两者功能类似，都可以将宿主文件赋值到容器中。但是官方更推荐使用 `COPY`。

::: warning 注意
虽然 `ADD` 具备从远程拉取文件的能力，例如：

```dockerfile
ADD https://example.com/big.tar.xz /usr/src/things/
```

但是强烈不鼓励这样做，应该通过 `curl` 或者 `wget` 等命令进行获取。这样可以最大化控制镜像的大小。
:::

#### VOLUME

`VOLUME` 指令用于挂载文件/文件夹到容器中。

#### WORKDIR

`WORKDIR` 指令用于设置当前工作目录。为了清晰可靠，应该始终保持 `WORKDIR` 为绝对路径。

#### ONBUILD

当一个 `DockerFile` 构建完成后，`ONBUILD` 指令将被触发执行。该指令会在任何当前镜像所衍生出来的子镜像中执行。

### DockerFile 官方参考

[官方参考](https://docs.docker.com/engine/reference/builder/) 把 DockerFile 每个指令讲解的很详细。

### 构建镜像

```shell
docker build [-f <filename>] -t <target_name>[:<tag>] .
```

- `filename` 如果文件名为 Dockerfile 就不用写了，指令会自动在当前目录下查找。
- `tag` 如果给了 tag，则会生成指定版本。默认生成 `lastest` 的版本。

### 本地打包

如果修改了本地容器，可以先提交更改：

```shell
docker commit <容器ID>
```

然后打包镜像

```shell
docker save <镜像名称>[:<版本>] > [路径]<包名>.tar
```

此时本地对应路径细啊会多一个 tar 文件。可以将该文件发送给别人直接使用

### 使用打包的镜像

收到别人打包的镜像 tar 文件，通过 load 加载：

```shell
docker load -i <包名>.tar
```