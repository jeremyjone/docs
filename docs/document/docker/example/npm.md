# Docker 快速搭建 NPM 服务器

我们使用 [verdaccio](https://verdaccio.org/docs/docker/) 来快速搭建 NPM 服务器。

## 拉取镜像

从 `v2.x` 开始，可以拉取指定版本：

```docker
docker pull verdaccio/cerdaccio

docker pull verdaccio/cerdaccio:4

docker pull verdaccio/cerdaccio:4.0

docker pull verdaccio/cerdaccio:4.0.0
```

## 运行

docker run -it --rm --name verdaccio -p 4873:4873 verdaccio/verdaccio

这样就搭建好了一个最简单的 NPM 服务器。它可以帮助我们快速测试。

在浏览器中打开 [http://localhost:4873](http://localhost:4873) 还可以查看当前仓库的信息。

## 使用

```sh
npm set registry http://localhost:4873
```

即可通过 NPM 服务器获取各种包。

同时还可以使用指定服务器来安装特定包：

```sh
npm install your-package --registry http://localhost:4873
```

## 更多配置

更多配置可以参考 [官方文档](https://verdaccio.org/zh-CN/docs/docker)。
