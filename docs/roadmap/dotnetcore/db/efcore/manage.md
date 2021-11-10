# 管理数据库

## 迁移数据库

迁移数据库是将模型转换为数据库表。

[前文](./index.html#创建数据库) 已经生成过数据库，通过下面命令：

```sh
dotnet ef migrations add InitialCreate
```

所以下面只介绍更新模型。

还是我们的 `User` 模型，它现在需要一个生日字段，那么我们就在 `User` 模型中添加一个生日字段：

```csharp{23-26}
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

    /// <summary>
    /// 用户的生日
    /// </summary>
    public DateTime BirthDate { get; set; }
}
```

模型更新好了，就可以开始更新数据库：

```sh
dotnet ef migrations add AddUserBirthDate
dotnet ef database udpate
```

EF Core 会在添加列之前将更新的模型与旧模型的快照进行比较，快照是迁移时生成的文件之一，并签入到源代码管理中。基于比较，EF Core 会检测到添加一列，并添加适当的迁移。

## 反向工程

反向工程是基架实体类型类的过程，通过 `Scaffold-DbContext` 或者 `dotnet ef dbcontext scaffold` 命令来完成。

```powershell
Scaffold-DbContext '连接字符串' 框架名
```

此外，还可以有如下参数：

- `-OutputDir 输出文件名`： 反向工程生成模型的输出目录
- `-ContextDir 上下文文件夹`： 将 `DbContext` 类生成到单独文件夹
- `-Tables 表名`： 指定哪些表进行反向工程
- `-Force`: 强制覆盖已存在文件

比如如下示例：

```powershell
# SqlServer
Scaffold-DbContext 'Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=Chinook' Microsoft.EntityFrameworkCore.SqlServer

# MySQL
Scaffold-DbContext "server=localhost;userid=jeremyjone;pwd=123;port=3306;database=db1;" Pomelo.EntityFrameworkCore.MySql -OutputDir Models -Force
```
