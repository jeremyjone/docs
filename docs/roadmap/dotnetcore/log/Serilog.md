# Serilog 的使用

Serilog 是第三方日志工具，拥有强大的插件功能和易用性。

## 安装

在 NuGet 中搜索并安装 `Serilog` 和 `Serilog.AspNetCore`，并可以按需安装其 Sinks 下的各种插件。

## 使用

一个最简单的使用方式：

```csharp
using Serilog;

publis static void Main(string[] args)
{
    using(var log = new LoggerConfiguration().WriteToConsole().CreateLogger()) {
        log.Information("This is a serilog info.");
    }
}
```

使用 Serilog 的 Log 对象进行配置：

```csharp
Log.Logger = new LoggerConfiguration()
    // 对其自身限制
    .MinimumLevel.Debug()
    // 重写其它日志规则，捕获 Microsoft 高于 Debug 级别的日志并输出到 Serilog
    .MinimumLevel.Override("Microsoft", LogEventLevel.Debug)
    // 写入控制台
    .WriteTo.Console()
    // 写入文件，这里配置为生成文件按天
    .WriteTo.File(Path.Combine("Logs", @"serilog.log"), rollingInterval: RollingInterval.Day)
    // 写入 DB，这里使用 SQLServer，也可以通过插件使用其他数据库
    .WriteTo.MSSqlServer("xxx connectionString", autoCreateSqlTable: true, tableName: "Logs")
    .CreateLogger();

// 输出
Log.Information("Serilog information!!!");

// 最后一定要释放空间
Log.CloseAndFlush();
```

一定要注意最后的释放空间，对于 .NET 项目，可以在 Program.cs 的主函数中使用 try 语句实现最后的释放：

```csharp
try
{
    CreateHostBuilder(args).Build().Run();
}
finally
{
    Log.CloseAndFlush();
}
```

在 .NET 中，如果需要接管自身的日志系统，只需要在管道中使用 `UseSerilog` 即可：

```csharp
Host.CreateDefaultBuilder(args)
    .ConfigureWebHostDefaults(webBuilder =>
    {
        webBuilder
            // 将 Serilog 注入中间件，将 Serilog 与 ILogger 绑定，其配置才会生效
            .UseSerilog()
            .UseStartup<Startup>();
    });
```

此时，在其他地方直接使用 .NET 提供好的 `_logger` 实例即可，十分方便。

```csharp
[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    private readonly ILogger<WeatherForecastController> _logger;

    public WeatherForecastController(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IEnumerable<WeatherForecast> Get()
    {
        _logger.LogError("This is a Error from controller");
    }
}
```
