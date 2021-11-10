# 分布式缓存

## 概述

分布式缓存，顾名思义就是多个服务器共享一个缓存。

与内存缓存不同的是，分布式缓存的接口只能为 `byte[]`。

## 服务

因为是分布式的，所以不能像内存缓存一样使用本地存储。它需要配置特定实现，比如 `SQL Server`、`Redis` 或者其它第三方实现。在 ASP.NET 中，无论是哪种实现，都是通过 `IDistributedCache` 进行交互。

- 若要使用 `SQL Server` 缓存，请添加 `Microsoft.Extensions.Caching.SqlServer` 包。
- 若要使用 `Redis` 分布式缓存，请添加 `Microsoft.Extensions.Caching.StackExchangeRedis` 包。
- 若要使用 `NCache` 分布式缓存，请添加 `NCache.Microsoft.Extensions.Caching.OpenSource` 包。

### IDistributedCache 接口

`IDistributedCache` 提供以下方法：

- 获取：`Get`、`GetAsync`，接受字符串的键，如果存在则返回 `byte[]`。
- 设置：`Set`、`SetAsync`，将字符串的键和 `byte[]` 的值添加到缓存中。
- 刷新：`Refresh`、`RefreshAsync`，根据键刷新值，并重置其可调用到期超时。
- 删除：`Remove`、`RemoveAsync`，根据键删除缓存项。

另外，为了方便操作，新版本增加了两个字符串的扩展方法：

- 获取： `GetString` 和 `GetStringAsync`
- 设置： `SetString` 和 `SetStringAsync`

功能和上面的获取设置一样，但是方便了我们的后续操作，不再需要我们自行转换。

## 配置

### 内存模式

分布式内存缓存是一个测试内容，它不是真正的分布式缓存，仅限开发和测试使用。它用过 `services.AddDistributedMemoryCache();` 启用，这里不过多说明。

### SQL Server 模式

通过 SQL Server，通过创建缓存表来达到分布式的目的，多个服务器可以同时连接同一数据库。

在 `Startup.ConfigureServices` 中配置：

```csharp
services.AddDistributedSqlServerCache(options =>
{
    options.ConnectionString = "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=DistCache;Integrated Security=True;";
    options.SchemaName = "dbo";
    options.TableName = "TestCache";
});
```

#### 创建数据库

因为是数据库，所以需要有数据库的存在作为支持。先创建数据库：

<img :src="$withBase('/assets/roadmap/dotnet/cache/distributed-create-sql-dbo.png')" alt="distributed-create-sql-dbo">

名字填写 `DistCache`，创建成功之后继续创建一张名为 `TestCache` 的表：

```sql
CREATE TABLE [dbo].[TestCache] (
    [Id]                         NVARCHAR (449)     COLLATE SQL_Latin1_General_CP1_CS_AS NOT NULL,
    [Value]                      VARBINARY (MAX)    NOT NULL,
    [ExpiresAtTime]              DATETIMEOFFSET (7) NOT NULL,
    [SlidingExpirationInSeconds] BIGINT             NULL,
    [AbsoluteExpiration]         DATETIMEOFFSET (7) NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);


GO
CREATE NONCLUSTERED INDEX [Index_ExpiresAtTime]
    ON [dbo].[TestCache]([ExpiresAtTime] ASC);
```

或者通过命令行创建表（相对简单）：

```sh
dotnet sql-cache create "Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=DistCache;Integrated Security=True;" dbo TestCache
```

::: warning 请注意
如果使用命令行，需要注意是在 `cmd` 环境下而非 `PM` 环境。
:::

::: tip 安装提示
`cmd` 环境相当友好，如果没有 `sql-cache`，它会直接提示你用什么命令进行安装，按提示操作即可。

<img :src="$withBase('/assets/roadmap/dotnet/cache/distributed-install-sql-cache-tool.png')" alt="distributed-install-sql-cache-tool">
:::

### Redis 模式

Redis 是一种常用的开源内存存储，通常用于分布式缓存。

在 `Startup.ConfigureServices` 中配置：

```csharp
services.AddStackExchangeRedisCache(options =>
{
    options.Configuration = "localhost:6379";
    options.InstanceName = "myredis";
});
```

Redis 需要单独配置，其安装配置不在这里讨论。

### NCache 模式

NCache 是以本机方式开发的开源内存中分布式缓存。

在 `Startup.ConfigureServices` 中配置：

```csharp
services.AddNCacheDistributedCache(configuration =>
{
    configuration.CacheName = "demoClusteredCache";
    configuration.EnableLogs = true;
    configuration.ExceptionsEnabled = true;
});
```

## 使用

虽然配置略有不同，但是分布式缓存再用上并没有什么区别，都是基于上面的 `IDistributedCache` 接口所提供的方法进行操作。

::: tip 示例代码
具体代码可以看 [示例代码](https://github.com/jeremyjone/dotnet-study-road/tree/master/Cache/DistributedCache)
:::

### 创建第一个项目

要看出分布式的效果，我们需要创建至少两个项目方便查看。首先我们创建第一个项目，并在 `Index` 控制器方法中填写如下内容：

```csharp
public async Task<IActionResult> Index()
{
    string time;
    const string key = "CachedTime";

    // 获取到的内容是 byte[]
    var encodedTime = await _cache.GetAsync(key);
    if (encodedTime != null)
    {
        // 转换格式
        time = Encoding.UTF8.GetString(encodedTime);
    }
    else
    {
        // 为空的话，创建一个缓存
        time = DateTime.Now.ToLongTimeString();
        var byteTime = Encoding.UTF8.GetBytes(time);
        var options = new DistributedCacheEntryOptions()
            .SetSlidingExpiration(TimeSpan.FromSeconds(10));
        await _cache.SetAsync(key, byteTime, options);
    }

    ViewData["time"] = time;
    return View();
}
```

然后在视图中填加如下内容：

```html
<span>当前时间：</span>
<span>@DateTime.Now</span>

<hr />

<span>缓存时间：</span>
<span>@ViewData["time"]</span>
```

### 创建第二个项目

我们将第一个项目直接复制一份即可。为了看到更好的效果，我们稍作修改，这次我们在 `Index` 方法中使用扩展的 String 方法：

```csharp{7,15}
public async Task<IActionResult> Index()
{
    string time;
    const string key = "CachedTime";

    // 获取到的内容是 byte[]
    var encodedTime = await _cache.GetStringAsync(key);
    if (encodedTime != null) time = encodedTime;
    else
    {
        // 为空的话，创建一个缓存
        time = DateTime.Now.ToLongTimeString();
        var options = new DistributedCacheEntryOptions()
            .SetSlidingExpiration(TimeSpan.FromSeconds(10));
        await _cache.SetStringAsync(key, time, options);
    }

    ViewData["time"] = time;
    return View();
}
```

视图保持不变即可。

### 联调

现在我们启动两个项目，当我们刷新 App1 的时候，缓存时间和当前时间为一致，说明时间缓存成功。等待两秒之后，我们再刷新 App2，可以看到缓存时间被读取成功：

<img :src="$withBase('/assets/roadmap/dotnet/cache/test.png')" alt="联调">

## 说明

使用缓存，尤其是分布式缓存时，一定要注意其性能。更多时候使用的是 `Redis` 这样吞吐量很高的缓存，同时要考虑硬件成本，切勿盲目使用缓存。

## 更多

更多内容可以参看 [官方文档](https://docs.microsoft.com/zh-cn/aspnet/core/performance/caching/distributed)。
