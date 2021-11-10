# 概述

在互联网中，因为服务器性能、网络带宽等各种原因，传输数据时需要考虑的问题相比单机程序要更多。缓存的出现有效解决了这个问题。缓存可以有效降低服务器的重复工作量，进而提高服务器的性能和效率。

缓存适用于不经常修改的数据，如媒体文件等。而且缓存一般存在于高速介质中，同时网络中各个节点均可设置缓存，所以使用缓存的效率会更高。

## 响应缓存

在 HTTP 1.1 的缓存规范中，详细介绍了互联网的缓存行为方式。它使用 `Cache-Control` 报头指令通知浏览器缓存当前数据，同时配合 `max-age` 报头设置最大的缓存时间。更多详细内容可以参看 [缓存规范](https://datatracker.ietf.org/doc/html/rfc7234)。

这种缓存方式简单方便，对于一些媒体文件是非常有效的方式，可以降低客户端、代理和服务器网络中的开销。但是开发人员无法控制缓存行为，因为它需要遵循上述规范。

## 在 ASP.NET 中启用响应缓存

ASP.NET 使用响应缓存非常简单，它通过 `ResponseCache` 来实现。

首先，在 `Startup.cs` 中添加：

```csharp{3}
public void ConfigureServices(IServiceCollection services)
{
    services.AddResponseCaching();
}
```

然后将中间件添加到管道中：

```csharp{6}
public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    // 如果启用了 CORS，则必须在缓存之前调用
    // app.UseCors("myAllowSpecificOrigins");

    app.UseResponseCaching();

    // 控制缓存
    app.Use(async (context, next) =>
    {
        context.Response.GetTypedHeaders().CacheControl =
            new Microsoft.Net.Http.Headers.CacheControlHeaderValue()
            {
                Public = true,
                // 设置响应缓存时长为10秒
                MaxAge = TimeSpan.FromSeconds(10)
            };
        // 添加 Vary 报头，接受编码报头与请求编码报头匹配才提供缓存响应，该报头信息可以查看 https://datatracker.ietf.org/doc/html/rfc7231#section-7.1.4
        context.Response.Headers[Microsoft.Net.Http.Headers.HeaderNames.Vary] =
            new string[] { "Accept-Encoding" };

        await next();
    });
}
```

### 缓存条件

只有当如下条件时，响应缓存才会生效：

- 请求必须使用 `200` 状态代码来生成服务器响应。
- 请求方法必须为 `GET` 或 `HEAD`。
- 在 `Startup.Configure` 中，必须将响应缓存中间件置于需要缓存的中间件之前。
- 确保不存在 `Authorization` 报头。
- `Cache-Control` 报头参数必须是有效的，并且响应必须标记为 `public`。
- 如果 `Cache-Control` 报头不存在，则 `Pragma: no-cache` 报头不得出现。
- `Set-Cookie` 报头不得存在。
- `Vary` 报头参数必须有效且不应为 `*`。
- 如果设置了 `Content-Length` 报头，则其值必须与响应正文的大小匹配。

### 缓存相关报头信息

ASP.NET 提供了完整的报头信息，具体如下：

| 报头                | 详细信息                                                                                                                                                                                                              |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Authorization`     | 包含身份验证的客户端内容，响应必须标记为不可缓存，以防止中间件存储和服务这些响应                                                                                                                                      |
| `Cache-Control`     | 中间件应该使用 `public` 来标记                                                                                                                                                                                        |
| `Pragma`            | HTTP 1.0 内容。`Pragma: no-cache` 与 `Cache-Control: no-cache` 效果相同。它会被 `Cache-Control` 报头覆盖（如果有）                                                                                                    |
| `Set-Cookie`        | 如果该报头存在，则响应不会被缓存。请求处理管道中设置一个或多个 cookie 的任何中间件都将阻止响应缓存中间件缓存响应                                                                                                      |
| `Vary`              | `Vary` 报头用于改变另一个报头的缓存响应。例如，通过包含 `Vary: Accept-Encoding` 报头来缓存响应，它分别缓存带有报头 `Accept-Encoding: gzip` 和 `Accept-Encoding: text/plain` 的请求响应。头值为 `*` 的响应不会被存储。 |
| `Expires`           | 除非被其他 `Cache-Control` 标头覆盖，否则该标头认为过期的响应不会被存储或检索。                                                                                                                                       |
| `If-None-Match`     | 如果值不是 `*`，并且响应的 ETag 不匹配提供的任何值，则从缓存提供完整的响应。否则，将提供一个 304（未修改）的响应。                                                                                                    |
| `If-Modified-Since` | 如果 `If-none-match` 报头不存在，当缓存的响应日期比提供的值新，则从缓存提供完整响应。否则，将提供一个 304（未修改）的响应。                                                                                           |
| `Date`              | 当从缓存提供服务时，如果没有在原始响应上提供日期头，则中间件将设置它。                                                                                                                                                |
| `Content-Length`    | 当从缓存提供服务时，如果 `Content-Length` 报头没有在原始响应上提供，则由中间件设置。                                                                                                                                  |
| `Age`               | 原始响应中发送的 `Age` 报头将被忽略。中间件在提供缓存响应时计算一个新值。                                                                                                                                             |
