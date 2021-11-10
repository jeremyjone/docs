(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{414:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"应用性能监控系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用性能监控系统"}},[s._v("#")]),s._v(" 应用性能监控系统")]),s._v(" "),a("p",[s._v("如今分布式架构越来越多，对于整套系统的监控越来越复杂，不单单是一个日志能够解决的，需要日志、追踪、分析等不同工具配合使用，才能满足需求。")]),s._v(" "),a("p",[s._v("在众多 APM 系统中，"),a("code",[s._v("SkyWalking")]),s._v(" 算是一款比较好用的 APM 系统。它包括 "),a("code",[s._v("服务端")]),s._v("、"),a("code",[s._v("界面")]),s._v("、以及 "),a("code",[s._v("探针")]),s._v("，其中 "),a("code",[s._v("探针")]),s._v(" 是针对不同语言有不同的包，针对 ASP.NET 的探针包是 "),a("code",[s._v("SkyAPM-dotnet")]),s._v("，具体可以查看 "),a("a",{attrs:{href:"https://github.com/SkyAPM",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"skywalking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#skywalking"}},[s._v("#")]),s._v(" SkyWalking")]),s._v(" "),a("p",[a("code",[s._v("SkyWalking")]),s._v(" 提供了在许多不同场景中观察和监控分布式系统的解决方案。配合不同语言环境下的 "),a("code",[s._v("探针")]),s._v("，接收 "),a("code",[s._v("探针")]),s._v(" 的遥测数据，让用户了解整个分布式系统。")]),s._v(" "),a("blockquote",[a("p",[s._v("SkyWalking 包括了一整套完整的文档，有兴趣的朋友可以自行查看。"),a("a",{attrs:{href:"https://skywalking.apache.org/docs/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档地址(英文)"),a("OutboundLink")],1)])]),s._v(" "),a("h3",{attrs:{id:"配置-skywalking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-skywalking"}},[s._v("#")]),s._v(" 配置 SkyWalking")]),s._v(" "),a("p",[s._v("打开链接：")]),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"http://skywalking.apache.org/downloads/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://skywalking.apache.org/downloads/"),a("OutboundLink")],1),s._v(" (推荐)")])]),s._v(" "),a("p",[s._v("或")]),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://archive.apache.org/dist/skywalking/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://archive.apache.org/dist/skywalking/"),a("OutboundLink")],1)])]),s._v(" "),a("p",[s._v("直接下载最新版的 "),a("code",[s._v("tar.gz")]),s._v(" 压缩包即可。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("针对 SkyAPM 1.0+ 的版本，需要 SkyWalking 8.0+ 或更高版本。")])]),s._v(" "),a("p",[s._v("整套 "),a("code",[s._v("SkyWalking")]),s._v(" 是 Java 编写的，解压缩后直接运行 "),a("code",[s._v("/bin")]),s._v(" 目录下的 "),a("code",[s._v("startup.bat")]),s._v("（Windows） 或 "),a("code",[s._v("startup.sh")]),s._v("（linux/MacOS） 即可。")]),s._v(" "),a("p",[s._v("如果有打开两个窗口并且 "),a("code",[s._v("Webapp")]),s._v(" 窗口没有自动关闭，就说明已经成功，打开浏览器并输入 "),a("code",[s._v("http://localhost:8080/")]),s._v("，如果能看到仪表盘的页面则说明成功。")]),s._v(" "),a("img",{attrs:{src:s.$withBase("/assets/roadmap/dotnet/log/skywalking-dashboard.png"),alt:""}}),s._v(" "),a("h3",{attrs:{id:"修改端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改端口"}},[s._v("#")]),s._v(" 修改端口")]),s._v(" "),a("p",[a("code",[s._v("SkyWalking")]),s._v(" 默认开启 8080 端口，同时会还会占用 11800、12800 两个端口作为接收端口。如果端口被占用，它就无法启动，所以要确保这几个端口可用，同时也可以修改端口。")]),s._v(" "),a("ul",[a("li",[s._v("8080：UI 的访问端口")]),s._v(" "),a("li",[s._v("11800：后端侦听 gRPC 服务地址端口")]),s._v(" "),a("li",[s._v("12800：后端侦听 Http REST 服务地址端口")])]),s._v(" "),a("h4",{attrs:{id:"修改-ui-端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改-ui-端口"}},[s._v("#")]),s._v(" 修改 UI 端口")]),s._v(" "),a("p",[s._v("打开 "),a("code",[s._v("SkyWalking")]),s._v(" 根目录下的 "),a("code",[s._v("/webapp")]),s._v(" 目录下的 "),a("code",[s._v("webapp.yml")]),s._v(" 文件，将 "),a("code",[s._v("port")]),s._v(" 修改为空闲端口即可")]),s._v(" "),a("h4",{attrs:{id:"修改后端侦听端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改后端侦听端口"}},[s._v("#")]),s._v(" 修改后端侦听端口")]),s._v(" "),a("p",[s._v("打开 "),a("code",[s._v("SkyWalking")]),s._v(" 根目录下的 "),a("code",[s._v("/config")]),s._v(" 目录下的 "),a("code",[s._v("application.yml")]),s._v(" 文件，搜索对应端口号并修改即可。")]),s._v(" "),a("h3",{attrs:{id:"修改存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改存储"}},[s._v("#")]),s._v(" 修改存储")]),s._v(" "),a("p",[s._v("默认情况下，"),a("code",[s._v("SkyWalking")]),s._v(" 是使用 H2 存储，简单实用足够，但是它也可以重新配置，我们可以通过设置修改它。")]),s._v(" "),a("p",[s._v("以 "),a("code",[s._v("elasticsearch7")]),s._v(" 为例，打开 "),a("code",[s._v("SkyWalking")]),s._v(" 根目录下的 "),a("code",[s._v("/config")]),s._v(" 目录下的 "),a("code",[s._v("application.yml")]),s._v(" 文件，找到 "),a("code",[s._v("storage")]),s._v(" 节点，修改 "),a("code",[s._v("selector")]),s._v(" 即可：")]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("storage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("SW_STORAGE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("elasticsearch7"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改名称，对应下面子节点名称即可")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("elasticsearch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nameSpace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("SW_NAMESPACE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("clusterNodes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("SW_STORAGE_ES_CLUSTER_NODES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ...")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("elasticsearch7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nameSpace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("SW_NAMESPACE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("clusterNodes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("SW_STORAGE_ES_CLUSTER_NODES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ...")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("h2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("driver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("SW_STORAGE_H2_DRIVER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("org.h2.jdbcx.JdbcDataSource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("SW_STORAGE_H2_URL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("jdbc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("h2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("mem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("skywalking"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("oap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("db;DB_CLOSE_DELAY="),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ...")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("友情提示")]),s._v(" "),a("p",[s._v("elasticsearch 不在本文讨论范围，具体方法可以移步 "),a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2017/08/elasticsearch.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("阮一峰的网络日志"),a("OutboundLink")],1),s._v("。阮大神的日志，质量有保证。")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("如果使用 "),a("code",[s._v("ElasticSearch7+")]),s._v(" 版本，需要下载 "),a("code",[s._v("apache-skywalking-bin-es7.tar.gz")]),s._v(" 包，一定是带 "),a("strong",[a("code",[s._v("es7")])]),s._v(" 的包。")]),s._v(" "),a("p",[s._v("对于 7 以下版本，需要下载不包含 "),a("strong",[a("code",[s._v("es7")])]),s._v(" 的包。这点需要注意。")])]),s._v(" "),a("p",[s._v("修改之后，就可以正常使用了。")]),s._v(" "),a("h2",{attrs:{id:"配置探针"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置探针"}},[s._v("#")]),s._v(" 配置探针")]),s._v(" "),a("p",[a("code",[s._v("SkyAPM")]),s._v(" 在 "),a("code",[s._v("Apache SkyWalking")]),s._v(" 团队的帮助下对不同语言提供原生支持，它支持多种语言，其中针对 "),a("code",[s._v(".NET")]),s._v(" 平台是非常好用的。")]),s._v(" "),a("h3",{attrs:{id:"安装探针工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装探针工具"}},[s._v("#")]),s._v(" 安装探针工具")]),s._v(" "),a("p",[s._v("创建一个 WebAPI 项目，并在 "),a("code",[s._v("NuGET")]),s._v(" 包管理器中查找并下载：")]),s._v(" "),a("blockquote",[a("p",[s._v("SkyAPM.Agent.AspNetCore （当前 1.3.0）")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("示例代码")]),s._v(" "),a("p",[s._v("具体代码可以看 "),a("a",{attrs:{href:"https://github.com/jeremyjone/dotnet-study-road/tree/master/Log/Log.APM/Log.APM/Log.APM",target:"_blank",rel:"noopener noreferrer"}},[s._v("示例代码"),a("OutboundLink")],1)])]),s._v(" "),a("h3",{attrs:{id:"添加环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加环境变量"}},[s._v("#")]),s._v(" 添加环境变量")]),s._v(" "),a("p",[s._v("安装之后，需要添加环境变量。在项目的启动配置文件 "),a("code",[s._v("launchSettings.json")]),s._v(" 中添加：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ASPNETCORE_HOSTINGSTARTUPASSEMBLIES"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SkyAPM.Agent.AspNetCore"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("具体配置位置如下图：")]),s._v(" "),a("img",{attrs:{src:s.$withBase("/assets/roadmap/dotnet/log/skyapm-env-var.png"),alt:"环境变量配置"}}),s._v(" "),a("p",[s._v("还可以自定义服务名称，方便在 UI 中查看（可以不设置，在 json 文件中单独配置即可）：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"SKYWALKING__SERVICENAME"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" <your-app-name> "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 修改为自定义的项目名称")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"添加配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加配置文件"}},[s._v("#")]),s._v(" 添加配置文件")]),s._v(" "),a("p",[s._v("可以通过 CLI 工具快速创建配置文件。")]),s._v(" "),a("p",[s._v("全局安装 CLI：")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("dotnet tool install "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g SkyAPM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("DotNet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("CLI")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后在项目目录下添加文件（其他地方创建拷贝到项目根目录亦可）：")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("dotnet skyapm config <your"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("app"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("name> localhost:11800\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("项目名称需要替换，IP 以及 Port 需要按照 "),a("code",[s._v("SkyWalking")]),s._v(" 的配置，默认端口为 11800")])]),s._v(" "),a("p",[s._v("生成的文件内容如下。（如果你不想安装 CLI 工具，可以直接拷贝下面的 json 文件）：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"SkyWalking"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ServiceName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Log.APM"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 服务名称，可以自定义")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Namespace"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"HeaderVersions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sw8"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 对照 SkyWalking 版本")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Sampling"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"SamplePer3Secs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("-1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Percentage"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("-1.0")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Logging"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Level"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Information"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"FilePath"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"logs\\\\skyapm-{Date}.log"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Transport"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Interval"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ProtocolVersion"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"v8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 对照 SkyWalking 的版本")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"QueueSize"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"BatchSize"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"gRPC"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Servers"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"localhost:11800"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// SkyWalking 监听地址")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Timeout"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ConnectTimeout"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ReportTimeout"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("600000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Authentication"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])]),a("p",[s._v("主要注意备注的内容即可，其他如果没有特殊要求可以默认。")]),s._v(" "),a("p",[s._v("这样就完成了配置。然后启动项目，如果有 swagger，直接在 swagger 中测试 API 即可。在 SkyWalking 的 UI 中就能看到测试效果。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("说明")]),s._v(" "),a("p",[s._v("只要在项目中安装了 "),a("code",[s._v("SkyAPM.Agent.AspNetCore")]),s._v(" 并且设置了上述环境变量，配置好 json 文件，即可")])]),s._v(" "),a("h2",{attrs:{id:"测试一下效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试一下效果"}},[s._v("#")]),s._v(" 测试一下效果")]),s._v(" "),a("p",[s._v("为了测试一下效果，我们多建立几个关联项目，用最简单的 "),a("code",[s._v("HttpClient")]),s._v(" 链接，每个项目都通过上面的方式配置探针即可。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("示例代码")]),s._v(" "),a("p",[s._v("具体代码可以看 "),a("a",{attrs:{href:"https://github.com/jeremyjone/dotnet-study-road/tree/master/Log/Log.APM/Log.APM",target:"_blank",rel:"noopener noreferrer"}},[s._v("示例代码"),a("OutboundLink")],1)])]),s._v(" "),a("p",[s._v("启动后在 swagger 中测试一下，就可以在 "),a("code",[s._v("SkyWalking")]),s._v(" 中看到对应的信息了：")]),s._v(" "),a("img",{attrs:{src:s.$withBase("/assets/roadmap/dotnet/log/skywalking-tracing-road.png"),alt:"追踪拓扑"}})])}),[],!1,null,null,null);t.default=e.exports}}]);