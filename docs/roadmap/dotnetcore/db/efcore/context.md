# DbContext 的配置

`DbContext` 实例表示与数据库的会话，可用于查询和保存实体实例。`DbContext` 是工作单元和存储库模式的组合。

通常，你将创建一个从 `DbContext` 派生的类，并在 `DbSet<TEntity>` 模型中包含每个实体的属性。如果 `DbSet<TEntity>` 属性具有公共资源库，则在创建派生上下文的实例时，它们会自动初始化。

重写 `OnConfiguring(DbContextOptionsBuilder)` 方法以配置要用于上下文的数据库（和其他选项）。或者，如果你想要在上下文中以外部方式而不是内联方式执行配置，则可以使用 `DbContextOptionsBuilder<TContext>`（或 `DbContextOptionsBuilder`）外部创建 `DbContextOptions<TContext>`（或 `DbContextOptions`）的实例，然后将其传递给的基本构造函数 DbContext。

通过在派生上下文的属性中找到的实体类上运行一组约定来发现模型 `DbSet<TEntity>`。若要进一步配置由约定发现的模型，可以重写 `OnModelCreating(ModelBuilder)` 方法。

## DbContext 的生命周期

DbContext 的生命周期从创建实例时开始，并在释放实例时结束。该实例用于单个工作单元，在许多 Web 应用程序中，每个 HTTP 请求都对应于单个工作单元。这意味着 DbContext 实例的生存期通常很短。

::: tip
默认情况下，`AddDbContext` 就是作用域的生命周期。
:::

## ASP.NET Core 注入 DbContext

通过依赖注入，在 `Startup.cs` 中通过 `AddDbContext` 可以将 EF Core 添加到配置中：

```csharp
public void ConfigureServices(IServiceCollection services)
{
    services.AddDbContext<ApplicationDbContext>(
        // 使用 Sql Server
        options => options.UseSqlServer("ConnectionStrings"));
}
```

此配置将一个继承自 `DbContext` 的 `ApplicationDbContext` 子类注册为应用程序中的作用域服务，它必须具有 `DbContextOptions<ApplicationDbContext>` 参数的公共构造函数：

```csharp
public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }
}
```

然后在控制器等使用的地方可以通过构造器注入：

```csharp
public class MyController
{
    private readonly ApplicationDbContext _context;

    public MyController(ApplicationDbContext context)
    {
        _context = context;
    }
}
```

## DbContextOptions

要使用 `DbContext`，通常会重写 `OnConfiguring(DbContextOptionsBuilder)` 或使用 `DbContextOptionsBuilder` 来创建此类的实例，而不是在应用程序代码中直接构造。

所有 `DbContext` 配置的起始点都是 `DbContextOptionsBuilder`。可以通过三种方式获取此生成器：

- 在 `AddDbContext` 和相关方法中
- 在 `OnConfiguring` 中
- 使用 `new` 显式构造

`DbContextOptionsBuilder` 提供了一个用于配置的简单 API `DbContextOptions`。数据库通常在此对象上定义扩展方法，该方法允许您将数据库连接配置用于上下文的选项。

无论生成器来自何处，都可以应用相同的配置。此外，无论如何构造上下文，都将始终调用 `OnConfiguring`。这意味着即使使用 `AddDbContext`，`OnConfiguring` 也可以用于执行其它配置。

::: tip
每个 `DbContext` 实例都必须配置为使用一个且仅一个数据库提供程序。这表示多个数据库可以分别配置，但每个 DbContext 子类都必须对应一个数据库实例。
:::

## 了解更多

了解更多内容，可以参考 [官方文档](https://docs.microsoft.com/zh-cn/ef/core/dbcontext-configuration/)
