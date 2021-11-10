# 服务容器

## 默认容器

使用内置的服务容器可以满足框架和大多数消费者应用的需求。在一个基本框架的 `Startup.cs` 中已经添加好了相应的代码，我们只需要直接使用即可：

```csharp
public void ConfigureServices(IServiceCollection services)
{
    // add services
}
```

`services` 就是我们需要的容器实例，它依赖 `Microsoft.Extensions.DependencyInjection`，我们将所有需要的内容注入到依赖容器中就可以使用。

默认容器更多内容可以查看 [官方文档](https://docs.microsoft.com/zh-cn/aspnet/core/fundamentals/dependency-injection)。

## 不使用默认服务容器的条件

除非你需要的特定功能不受它支持，例如：

- 属性注入
- 基于名称的注入
- 子容器
- 自定义生存期管理
- 对迟缓初始化的 `Func<T>` 支持
- 基于约定的注册
- 不限于上面的内容并且默认容器没有提供支持的

## 第三方容器

可以使用的第三方容器：

- [Autofac](https://autofac.readthedocs.io/en/latest/integration/aspnetcore.html)
- [Ninject](http://www.ninject.org/)
- [Dryloc](https://www.nuget.org/packages/DryIoc.Microsoft.DependencyInjection)
- [Grace](https://www.nuget.org/packages/Grace.DependencyInjection.Extensions)
- [LightInject](https://github.com/seesharper/LightInject.Microsoft.DependencyInjection)
- [Lamar](https://jasperfx.github.io/lamar/)

推荐使用 `Autofac`
