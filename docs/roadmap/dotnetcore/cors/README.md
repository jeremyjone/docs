# 跨域

## 什么是跨域

## 配置 CORS

最简单的方式：

```csharp
services.AddCors(options =>
{
    // 添加策略，名称需要和中间件使用的名称一致
    options.AddPolicy("allowedCors", policy =>
    {
        policy.WithOrigins("http://localhost:5000")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});
```

添加中间件：

```csharp
app.UseRouting();
// 在 routing 之后添加跨域中间件
app.UseCors("allowedCors");
```
