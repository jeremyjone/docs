# 内存缓存

## 概述

ASP.NET 支持多个不同缓存。通过 `IMemoryCache` 可以创建一个简单的内存缓存，它用于在 web 服务器的内存中创建一块缓存。当服务器运行时应确保会话在使用内存中缓存时处于粘滞状态。粘滞会话确保来自客户端的后续请求都将发送到相同服务器。

内存缓存支持存储任何对象。

## 缓存准则

在使用缓存时，应确保：

- 代码应始终具有用于提取数据的回退选项，而不是依赖缓存值。
- 应当限制缓存增长。
- 缓存不应存储具有时效性的数据。

## 使用 IMemoryCache

::: tip 示例代码
具体代码可以看 [示例代码](https://github.com/jeremyjone/dotnet-study-road/tree/master/Cache/MemoryCache)
:::

因为是 ASP.NET 内置好的中间件，所以我们可以直接使用。在 `Controller` 中直接注入：

```csharp
private readonly IMemoryCache _memoryCache;

public HomeController(IMemoryCache memoryCache)
{
    _memoryCache = memoryCache;
}
```

然后修改 `Index` 请求：

```csharp
public IActionResult Index()
{
    if (!_memoryCache.TryGetValue("Entry", out DateTime date))
    {
        date = DateTime.Now;

        var options = new MemoryCacheEntryOptions()
            .SetSlidingExpiration(TimeSpan.FromSeconds(5));

        _memoryCache.Set("Entry", date, options);
    }

    ViewData["date"] = date;
    return View();
}
```

接着修改一下 `Index.cshtml` 视图，添加如下代码：

```html
<span>缓存时间：</span>
<span>@ViewData["date"]</span>

<hr />

<span>当前时间：</span>
<span>@DateTime.Now</span>
```

此时运行程序，可以看到视图中显示的两个时间是一致的。刷新之后，当前时间发生变化，而缓存时间不会改变。

让我们等待5秒钟，再刷新页面，发现两个时间同时改变。这说明在 `Index` 中的 `options` 起到了作用。

`SetSlidingExpiration(TimeSpan.FromSeconds(5))` 的作用是使缓存数据生效时间顺延5秒钟，如果我们一直使用改数据，则它一直有效不会改变。只有当最近5秒内没有用到该数据它才会失效。

让我们继续修改代码。

添加一个删除缓存的方法：

```csharp
public IActionResult Clear()
{
    // 清空缓存
    _memoryCache.Remove("Entry");

    return RedirectToAction("Index");
}
```

同时修改视图，添加一个清除按钮：

```html
<a class="btn btn-primary" asp-action="Clear">清除缓存</a>
```

再次运行，当我们点击按钮之后，缓存直接会被清空，两个时间会再次一致。

## 更多

更多内容可以参照 [官方文档](https://docs.microsoft.com/zh-cn/aspnet/core/performance/caching/memory)
