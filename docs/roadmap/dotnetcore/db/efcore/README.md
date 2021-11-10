# 概述

Entity Framework (EF) Core 是轻量化、可扩展、开源和跨平台版的常用 Entity Framework 数据访问技术。
EF Core 可用作对象关系映射程序 (O/RM)，这可以实现以下两点：

- 使 .NET 开发人员能够使用 .NET 对象处理数据库。
- 无需再像通常那样编写大部分数据访问代码。

## 安装 EF Core

要运行 EF，首先需要安装对应环境，通过 `NuGet` 包或者命令行 `dotnet add package 包名` 进行安装即可。请参照下表对应的不同数据库进行选择：

- Microsoft.EntityFrameworkCore.SqlServer
- Microsoft.EntityFrameworkCore.Sqlite
- Microsoft.EntityFrameworkCore.InMemory
- Pomelo.EntityFrameworkCore.MySql
- MySql.EntityFrameworkCore
- Npgsql.EntityFrameworkCore.PostgreSQL
- Oracle.EntityFrameworkCore

同时需要注意安装版本，一般来说都与 ASP.NET 版本对应。

更多请查看 [官方文档](https://docs.microsoft.com/zh-cn/ef/core/providers/?tabs=dotnet-core-cli)。

## 安装 CLI 工具

有时需要安装 `dotnet ef` 工具，此时可以通过以下命令进行全局安装：

```sh
dotnet tool install --global dotnet-ef
```

## 一个最简单的例子

通过一个简单的例子来快速了解该框架的用法。

::: tip 示例代码
完整代码可以看 [示例代码](https://github.com/jeremyjone/dotnet-study-road/tree/master/Database/Database.Basic)
:::

首先创建一个空白控制台项目，可以在 vs 中添加，亦可以通过命令来添加：

```sh
dotnet new console -o Database.Basic
```

### 添加 EF 包

该示例使用 `SQLite` 包，其他包同理：

```text
Microsoft.EntityFrameworkCore.Sqlite
```

### 添加模型

创建部门模型，根目录添加一个 `Department.cs` 文件并添加如下内容：

```csharp
public class Department
{
    /// <summary>
    /// 部门 Id
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    /// 部门名称
    /// </summary>
    public string Name { get; set; }
}
```

创建用户模型，根目录添加一个 `User.cs` 文件并添加如下内容：

```csharp
public class User
{
    /// <summary>
    /// 用户 Id
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    /// 用户名
    /// </summary>
    public string Username { get; set; }

    /// <summary>
    /// 用户昵称
    /// </summary>
    public string Nickname { get; set; }

    /// <summary>
    /// 用户所在部门
    /// </summary>
    public int DepartmentId { get; set; }
}
```

### 添加上下文

在根目录添加一个 `UserDbContext.cs` 文件并添加如下内容：

```csharp
public class UserDbContext: DbContext
{
    public DbSet<Department> Departments { get; set; }
    public DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        if (!optionsBuilder.IsConfigured)
        {
            optionsBuilder.UseSqlite(@"Data Source=UserDB.db");
        }
    }
}
```

### 创建数据库

`DF Core` 可以从现有数据库对模型进行 [反向工程](./manage.html#反向工程)，同时也可以按照现有模型生成对应的数据库。

在 vs 中，可以通过 **包管理器控制台** 操作：

```powershell
Install-Package Microsoft.EntityFrameworkCore.Design
Install-Package Microsoft.EntityFrameworkCore.Tools
Add-Migration InitialCreate
Update-Database
```

或者通过命令行：

```bash
dotnet tool install --global dotnet-ef
dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet ef migrations add InitialCreate
dotnet ef database update
```

就可以在根目录下看到一个名为 `UserDB.db` 的文件和一个名为 `Migrations` 文件夹。

::: warning 注意
如果使用的是像 SQLite 这样的本地文件式数据库，一定要修改输出方式为 **始终复制**，如下如：

<img :src="$withBase('/assets/roadmap/dotnet/db/db_basic_demo_copydb.png')" alt="修改数据库文件的输出方式">

否则会报：`SQLite Error 1: 'no such table: Users'.` 这样的错误。
:::

### 使用

修改 `Program.cs` 中的内容为：

```csharp
private static void Main(string[] args)
{
    Console.WriteLine("Start...");

    using var db = new UserDbContext();

    #region 创建数据

    Console.WriteLine("创建数据");
    db.Add(new Department { Id = 1, Name = "IT" });
    db.Add(new User
    {
        Id = 1,
        DepartmentId = 1,
        Username = "jeremyjone",
        Nickname = "Jeremy Jone"
    });
    db.SaveChanges();
    Console.WriteLine("创建数据完成");

    #endregion


    #region 查询数据

    Console.WriteLine("查询数据");
    var user = db.Users.FirstOrDefault();
    if (user != null)
    {
        var department = db.Departments.FirstOrDefault(x => x.Id == user.DepartmentId);
        if (department == null)
        {
            Console.WriteLine("部门为空");
        }
        Console.WriteLine($"读取到 {user.Username}，昵称为：{user.Nickname}，部门为：{department?.Name}");
    }
    else
    {
        Console.WriteLine("没有读取到用户信息");
    }

    #endregion


    #region 更新数据

    Console.WriteLine("更新数据");
    if (user != null)
    {
        user.Nickname = "Jz";
    }
    db.SaveChanges();
    Console.WriteLine("更新数据完成");

    #endregion


    #region 删除数据

    Console.WriteLine("删除数据");
    if (user != null)
    {
        db.Remove(user);
    }
    db.SaveChanges();
    Console.WriteLine("删除数据完成");

    #endregion
}
```

然后运行，会得到如下内容：

```text
Start...
创建数据
创建数据完成
查询数据
读取到 jeremyjone，昵称为：Jeremy Jone，部门为：IT
更新数据
更新数据完成
删除数据
删除数据完成
```

一个最简单的示例就做完了。
