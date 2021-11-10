(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{401:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"分布式缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式缓存"}},[s._v("#")]),s._v(" 分布式缓存")]),s._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),a("p",[s._v("分布式缓存，顾名思义就是多个服务器共享一个缓存。")]),s._v(" "),a("p",[s._v("与内存缓存不同的是，分布式缓存的接口只能为 "),a("code",[s._v("byte[]")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务"}},[s._v("#")]),s._v(" 服务")]),s._v(" "),a("p",[s._v("因为是分布式的，所以不能像内存缓存一样使用本地存储。它需要配置特定实现，比如 "),a("code",[s._v("SQL Server")]),s._v("、"),a("code",[s._v("Redis")]),s._v(" 或者其它第三方实现。在 ASP.NET 中，无论是哪种实现，都是通过 "),a("code",[s._v("IDistributedCache")]),s._v(" 进行交互。")]),s._v(" "),a("ul",[a("li",[s._v("若要使用 "),a("code",[s._v("SQL Server")]),s._v(" 缓存，请添加 "),a("code",[s._v("Microsoft.Extensions.Caching.SqlServer")]),s._v(" 包。")]),s._v(" "),a("li",[s._v("若要使用 "),a("code",[s._v("Redis")]),s._v(" 分布式缓存，请添加 "),a("code",[s._v("Microsoft.Extensions.Caching.StackExchangeRedis")]),s._v(" 包。")]),s._v(" "),a("li",[s._v("若要使用 "),a("code",[s._v("NCache")]),s._v(" 分布式缓存，请添加 "),a("code",[s._v("NCache.Microsoft.Extensions.Caching.OpenSource")]),s._v(" 包。")])]),s._v(" "),a("h3",{attrs:{id:"idistributedcache-接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#idistributedcache-接口"}},[s._v("#")]),s._v(" IDistributedCache 接口")]),s._v(" "),a("p",[a("code",[s._v("IDistributedCache")]),s._v(" 提供以下方法：")]),s._v(" "),a("ul",[a("li",[s._v("获取："),a("code",[s._v("Get")]),s._v("、"),a("code",[s._v("GetAsync")]),s._v("，接受字符串的键，如果存在则返回 "),a("code",[s._v("byte[]")]),s._v("。")]),s._v(" "),a("li",[s._v("设置："),a("code",[s._v("Set")]),s._v("、"),a("code",[s._v("SetAsync")]),s._v("，将字符串的键和 "),a("code",[s._v("byte[]")]),s._v(" 的值添加到缓存中。")]),s._v(" "),a("li",[s._v("刷新："),a("code",[s._v("Refresh")]),s._v("、"),a("code",[s._v("RefreshAsync")]),s._v("，根据键刷新值，并重置其可调用到期超时。")]),s._v(" "),a("li",[s._v("删除："),a("code",[s._v("Remove")]),s._v("、"),a("code",[s._v("RemoveAsync")]),s._v("，根据键删除缓存项。")])]),s._v(" "),a("p",[s._v("另外，为了方便操作，新版本增加了两个字符串的扩展方法：")]),s._v(" "),a("ul",[a("li",[s._v("获取： "),a("code",[s._v("GetString")]),s._v(" 和 "),a("code",[s._v("GetStringAsync")])]),s._v(" "),a("li",[s._v("设置： "),a("code",[s._v("SetString")]),s._v(" 和 "),a("code",[s._v("SetStringAsync")])])]),s._v(" "),a("p",[s._v("功能和上面的获取设置一样，但是方便了我们的后续操作，不再需要我们自行转换。")]),s._v(" "),a("h2",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),a("h3",{attrs:{id:"内存模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内存模式"}},[s._v("#")]),s._v(" 内存模式")]),s._v(" "),a("p",[s._v("分布式内存缓存是一个测试内容，它不是真正的分布式缓存，仅限开发和测试使用。它用过 "),a("code",[s._v("services.AddDistributedMemoryCache();")]),s._v(" 启用，这里不过多说明。")]),s._v(" "),a("h3",{attrs:{id:"sql-server-模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-server-模式"}},[s._v("#")]),s._v(" SQL Server 模式")]),s._v(" "),a("p",[s._v("通过 SQL Server，通过创建缓存表来达到分布式的目的，多个服务器可以同时连接同一数据库。")]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("Startup.ConfigureServices")]),s._v(" 中配置：")]),s._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[s._v("services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("AddDistributedSqlServerCache")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("options "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ConnectionString "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Data Source=(localdb)\\\\MSSQLLocalDB;Initial Catalog=DistCache;Integrated Security=True;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SchemaName "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dbo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("TableName "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"TestCache"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h4",{attrs:{id:"创建数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建数据库"}},[s._v("#")]),s._v(" 创建数据库")]),s._v(" "),a("p",[s._v("因为是数据库，所以需要有数据库的存在作为支持。先创建数据库：")]),s._v(" "),a("img",{attrs:{src:s.$withBase("/assets/roadmap/dotnet/cache/distributed-create-sql-dbo.png"),alt:"distributed-create-sql-dbo"}}),s._v(" "),a("p",[s._v("名字填写 "),a("code",[s._v("DistCache")]),s._v("，创建成功之后继续创建一张名为 "),a("code",[s._v("TestCache")]),s._v(" 的表：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("dbo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("TestCache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("                         NVARCHAR "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("449")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLLATE")]),s._v(" SQL_Latin1_General_CP1_CS_AS "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("                      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARBINARY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("MAX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ExpiresAtTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("              DATETIMEOFFSET "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SlidingExpirationInSeconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BIGINT")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("AbsoluteExpiration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("         DATETIMEOFFSET "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIMARY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CLUSTERED")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ASC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\nGO\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("NONCLUSTERED")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INDEX")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Index_ExpiresAtTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("dbo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("TestCache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ExpiresAtTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ASC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("或者通过命令行创建表（相对简单）：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("dotnet sql-cache create "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=DistCache;Integrated Security=True;"')]),s._v(" dbo TestCache\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("请注意")]),s._v(" "),a("p",[s._v("如果使用命令行，需要注意是在 "),a("code",[s._v("cmd")]),s._v(" 环境下而非 "),a("code",[s._v("PM")]),s._v(" 环境。")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("安装提示")]),s._v(" "),a("p",[a("code",[s._v("cmd")]),s._v(" 环境相当友好，如果没有 "),a("code",[s._v("sql-cache")]),s._v("，它会直接提示你用什么命令进行安装，按提示操作即可。")]),s._v(" "),a("img",{attrs:{src:s.$withBase("/assets/roadmap/dotnet/cache/distributed-install-sql-cache-tool.png"),alt:"distributed-install-sql-cache-tool"}})]),s._v(" "),a("h3",{attrs:{id:"redis-模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-模式"}},[s._v("#")]),s._v(" Redis 模式")]),s._v(" "),a("p",[s._v("Redis 是一种常用的开源内存存储，通常用于分布式缓存。")]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("Startup.ConfigureServices")]),s._v(" 中配置：")]),s._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[s._v("services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("AddStackExchangeRedisCache")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("options "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Configuration "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"localhost:6379"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("InstanceName "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"myredis"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("Redis 需要单独配置，其安装配置不在这里讨论。")]),s._v(" "),a("h3",{attrs:{id:"ncache-模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ncache-模式"}},[s._v("#")]),s._v(" NCache 模式")]),s._v(" "),a("p",[s._v("NCache 是以本机方式开发的开源内存中分布式缓存。")]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("Startup.ConfigureServices")]),s._v(" 中配置：")]),s._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[s._v("services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("AddNCacheDistributedCache")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("configuration "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    configuration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CacheName "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"demoClusteredCache"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    configuration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("EnableLogs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    configuration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ExceptionsEnabled "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),a("p",[s._v("虽然配置略有不同，但是分布式缓存再用上并没有什么区别，都是基于上面的 "),a("code",[s._v("IDistributedCache")]),s._v(" 接口所提供的方法进行操作。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("示例代码")]),s._v(" "),a("p",[s._v("具体代码可以看 "),a("a",{attrs:{href:"https://github.com/jeremyjone/dotnet-study-road/tree/master/Cache/DistributedCache",target:"_blank",rel:"noopener noreferrer"}},[s._v("示例代码"),a("OutboundLink")],1)])]),s._v(" "),a("h3",{attrs:{id:"创建第一个项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建第一个项目"}},[s._v("#")]),s._v(" 创建第一个项目")]),s._v(" "),a("p",[s._v("要看出分布式的效果，我们需要创建至少两个项目方便查看。首先我们创建第一个项目，并在 "),a("code",[s._v("Index")]),s._v(" 控制器方法中填写如下内容：")]),s._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s._v("Task"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("IActionResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" key "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CachedTime"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取到的内容是 byte[]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" encodedTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" _cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetAsync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("encodedTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 转换格式")]),s._v("\n        time "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Encoding"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("UTF8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("encodedTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 为空的话，创建一个缓存")]),s._v("\n        time "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" DateTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Now"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ToLongTimeString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" byteTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Encoding"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("UTF8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetBytes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" options "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[s._v("DistributedCacheEntryOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SetSlidingExpiration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TimeSpan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("FromSeconds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" _cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SetAsync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" byteTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    ViewData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"time"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("View")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("p",[s._v("然后在视图中填加如下内容：")]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("当前时间："),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("@DateTime.Now"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("hr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("缓存时间："),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v('@ViewData["time"]'),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"创建第二个项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建第二个项目"}},[s._v("#")]),s._v(" 创建第二个项目")]),s._v(" "),a("p",[s._v("我们将第一个项目直接复制一份即可。为了看到更好的效果，我们稍作修改，这次我们在 "),a("code",[s._v("Index")]),s._v(" 方法中使用扩展的 String 方法：")]),s._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s._v("Task"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("IActionResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" key "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CachedTime"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取到的内容是 byte[]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" encodedTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" _cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetStringAsync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("encodedTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" time "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" encodedTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 为空的话，创建一个缓存")]),s._v("\n        time "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" DateTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Now"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ToLongTimeString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" options "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[s._v("DistributedCacheEntryOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SetSlidingExpiration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TimeSpan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("FromSeconds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" _cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SetStringAsync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    ViewData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"time"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("View")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("视图保持不变即可。")]),s._v(" "),a("h3",{attrs:{id:"联调"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#联调"}},[s._v("#")]),s._v(" 联调")]),s._v(" "),a("p",[s._v("现在我们启动两个项目，当我们刷新 App1 的时候，缓存时间和当前时间为一致，说明时间缓存成功。等待两秒之后，我们再刷新 App2，可以看到缓存时间被读取成功：")]),s._v(" "),a("img",{attrs:{src:s.$withBase("/assets/roadmap/dotnet/cache/test.png"),alt:"联调"}}),s._v(" "),a("h2",{attrs:{id:"说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[s._v("#")]),s._v(" 说明")]),s._v(" "),a("p",[s._v("使用缓存，尤其是分布式缓存时，一定要注意其性能。更多时候使用的是 "),a("code",[s._v("Redis")]),s._v(" 这样吞吐量很高的缓存，同时要考虑硬件成本，切勿盲目使用缓存。")]),s._v(" "),a("h2",{attrs:{id:"更多"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更多"}},[s._v("#")]),s._v(" 更多")]),s._v(" "),a("p",[s._v("更多内容可以参看 "),a("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/aspnet/core/performance/caching/distributed",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),a("OutboundLink")],1),s._v("。")])])}),[],!1,null,null,null);t.default=e.exports}}]);