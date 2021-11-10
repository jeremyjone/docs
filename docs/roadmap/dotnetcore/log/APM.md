# 应用性能监控系统

如今分布式架构越来越多，对于整套系统的监控越来越复杂，不单单是一个日志能够解决的，需要日志、追踪、分析等不同工具配合使用，才能满足需求。

在众多 APM 系统中，`SkyWalking` 算是一款比较好用的 APM 系统。它包括 `服务端`、`界面`、以及 `探针`，其中 `探针` 是针对不同语言有不同的包，针对 ASP.NET 的探针包是 `SkyAPM-dotnet`，具体可以查看 [GitHub](https://github.com/SkyAPM)。

## SkyWalking

`SkyWalking` 提供了在许多不同场景中观察和监控分布式系统的解决方案。配合不同语言环境下的 `探针`，接收 `探针` 的遥测数据，让用户了解整个分布式系统。

> SkyWalking 包括了一整套完整的文档，有兴趣的朋友可以自行查看。[官方文档地址(英文)](https://skywalking.apache.org/docs/)

### 配置 SkyWalking

打开链接：

> [http://skywalking.apache.org/downloads/](http://skywalking.apache.org/downloads/) (推荐)

或

> [https://archive.apache.org/dist/skywalking/](https://archive.apache.org/dist/skywalking/)

直接下载最新版的 `tar.gz` 压缩包即可。

::: tip 提示
针对 SkyAPM 1.0+ 的版本，需要 SkyWalking 8.0+ 或更高版本。
:::

整套 `SkyWalking` 是 Java 编写的，解压缩后直接运行 `/bin` 目录下的 `startup.bat`（Windows） 或 `startup.sh`（linux/MacOS） 即可。

如果有打开两个窗口并且 `Webapp` 窗口没有自动关闭，就说明已经成功，打开浏览器并输入 `http://localhost:8080/`，如果能看到仪表盘的页面则说明成功。

<img :src="$withBase('/assets/roadmap/dotnet/log/skywalking-dashboard.png')" alt="">

### 修改端口

`SkyWalking` 默认开启 8080 端口，同时会还会占用 11800、12800 两个端口作为接收端口。如果端口被占用，它就无法启动，所以要确保这几个端口可用，同时也可以修改端口。

- 8080：UI 的访问端口
- 11800：后端侦听 gRPC 服务地址端口
- 12800：后端侦听 Http REST 服务地址端口

#### 修改 UI 端口

打开 `SkyWalking` 根目录下的 `/webapp` 目录下的 `webapp.yml` 文件，将 `port` 修改为空闲端口即可

#### 修改后端侦听端口

打开 `SkyWalking` 根目录下的 `/config` 目录下的 `application.yml` 文件，搜索对应端口号并修改即可。

### 修改存储

默认情况下，`SkyWalking` 是使用 H2 存储，简单实用足够，但是它也可以重新配置，我们可以通过设置修改它。

以 `elasticsearch7` 为例，打开 `SkyWalking` 根目录下的 `/config` 目录下的 `application.yml` 文件，找到 `storage` 节点，修改 `selector` 即可：

```yml
storage:
  selector: ${SW_STORAGE:elasticsearch7} # 修改名称，对应下面子节点名称即可
  elasticsearch:
    nameSpace: ${SW_NAMESPACE:""}
    clusterNodes: ${SW_STORAGE_ES_CLUSTER_NODES:localhost:9200}
    # ...
  elasticsearch7:
    nameSpace: ${SW_NAMESPACE:""}
    clusterNodes: ${SW_STORAGE_ES_CLUSTER_NODES:localhost:9200}
    # ...
  h2:
    driver: ${SW_STORAGE_H2_DRIVER:org.h2.jdbcx.JdbcDataSource}
    url: ${SW_STORAGE_H2_URL:jdbc:h2:mem:skywalking-oap-db;DB_CLOSE_DELAY=-1}
    # ...
```

::: tip 友情提示
elasticsearch 不在本文讨论范围，具体方法可以移步 [阮一峰的网络日志](http://www.ruanyifeng.com/blog/2017/08/elasticsearch.html)。阮大神的日志，质量有保证。
:::

::: tip 提示
如果使用 `ElasticSearch7+` 版本，需要下载 `apache-skywalking-bin-es7.tar.gz` 包，一定是带 **`es7`** 的包。

对于 7 以下版本，需要下载不包含 **`es7`** 的包。这点需要注意。
:::

修改之后，就可以正常使用了。

## 配置探针

`SkyAPM` 在 `Apache SkyWalking` 团队的帮助下对不同语言提供原生支持，它支持多种语言，其中针对 `.NET` 平台是非常好用的。

### 安装探针工具

创建一个 WebAPI 项目，并在 `NuGET` 包管理器中查找并下载：

> SkyAPM.Agent.AspNetCore （当前 1.3.0）

::: tip 示例代码
具体代码可以看 [示例代码](https://github.com/jeremyjone/dotnet-study-road/tree/master/Log/Log.APM/Log.APM/Log.APM)
:::

### 添加环境变量

安装之后，需要添加环境变量。在项目的启动配置文件 `launchSettings.json` 中添加：

```json
"ASPNETCORE_HOSTINGSTARTUPASSEMBLIES": "SkyAPM.Agent.AspNetCore"
```

具体配置位置如下图：

<img :src="$withBase('/assets/roadmap/dotnet/log/skyapm-env-var.png')" alt="环境变量配置">

还可以自定义服务名称，方便在 UI 中查看（可以不设置，在 json 文件中单独配置即可）：

```json
"SKYWALKING__SERVICENAME": <your-app-name> // 修改为自定义的项目名称
```

### 添加配置文件

可以通过 CLI 工具快速创建配置文件。

全局安装 CLI：

```powershell
dotnet tool install -g SkyAPM.DotNet.CLI
```

然后在项目目录下添加文件（其他地方创建拷贝到项目根目录亦可）：

```powershell
dotnet skyapm config <your-app-name> localhost:11800
```

::: warning 注意
项目名称需要替换，IP 以及 Port 需要按照 `SkyWalking` 的配置，默认端口为 11800
:::

生成的文件内容如下。（如果你不想安装 CLI 工具，可以直接拷贝下面的 json 文件）：

```json
{
  "SkyWalking": {
    "ServiceName": "Log.APM", // 服务名称，可以自定义
    "Namespace": "",
    "HeaderVersions": [
      "sw8" // 对照 SkyWalking 版本
    ],
    "Sampling": {
      "SamplePer3Secs": -1,
      "Percentage": -1.0
    },
    "Logging": {
      "Level": "Information",
      "FilePath": "logs\\skyapm-{Date}.log"
    },
    "Transport": {
      "Interval": 3000,
      "ProtocolVersion": "v8", // 对照 SkyWalking 的版本
      "QueueSize": 30000,
      "BatchSize": 3000,
      "gRPC": {
        "Servers": "localhost:11800", // SkyWalking 监听地址
        "Timeout": 10000,
        "ConnectTimeout": 10000,
        "ReportTimeout": 600000,
        "Authentication": ""
      }
    }
  }
}
```

主要注意备注的内容即可，其他如果没有特殊要求可以默认。

这样就完成了配置。然后启动项目，如果有 swagger，直接在 swagger 中测试 API 即可。在 SkyWalking 的 UI 中就能看到测试效果。

::: tip 说明
只要在项目中安装了 `SkyAPM.Agent.AspNetCore` 并且设置了上述环境变量，配置好 json 文件，即可
:::

## 测试一下效果

为了测试一下效果，我们多建立几个关联项目，用最简单的 `HttpClient` 链接，每个项目都通过上面的方式配置探针即可。

::: tip 示例代码
具体代码可以看 [示例代码](https://github.com/jeremyjone/dotnet-study-road/tree/master/Log/Log.APM/Log.APM)
:::

启动后在 swagger 中测试一下，就可以在 `SkyWalking` 中看到对应的信息了：

<img :src="$withBase('/assets/roadmap/dotnet/log/skywalking-tracing-road.png')" alt="追踪拓扑">
