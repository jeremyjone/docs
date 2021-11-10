# 使用

## 查询数据

Entity Framework Core 使用语言集成查询 (LINQ) 来查询数据库中的数据。

```csharp
using (var db = new UserDbContext())
{
    // 获取全部用户
    var users = db.Users.ToList();

    // 获取第一个用户
    var user1 = db.Users.FirstOrDefault();

    // 获取指定 Id 的用户
    var user2 = db.Users.Single(u => u.Id == 1);

    // 获取指定条件的用户
    var users2 = db.Users.Where(u => u.DepartmentId == 1).ToList();
}
```

### 加载数据

Entity Framework Core 允许你在模型中使用导航属性来加载相关实体。有三种常见的 O/RM 模式可用于加载关联数据。

#### 预先加载

预先加载表示从数据库中加载关联数据，作为初始查询的一部分。可以使用 `Include` 方法来指定要包含在查询结果中的关联数据。

这个方法对于关联数据的查询非常有用，直接通过例子演示。

```csharp{13}
public class Data
{
    public int Id { get; set; }
    public string Name { get; set; }
    // 下面是外键格式，关联创建者
    public int CreatorId { get; set; }
    public virtual User Creator { get; set; }
}

using (var db = new DbContext())
{
    var data = db.Data
        .Include(d => d.Creator)
        .ToList();
}
```

上面例子中，通过 `Include` 可以一次性获得相关的创建者信息，而不需要进行二次查询，这极大方便了我们的查询效率。

如果有多个关联属性，可以并联使用 `Include` 方法连续获取。进而还可以使用 `ThenInclude` 来进一步获取通过 `Include` 获取到的对象中更深一层的关联数据。比如：

```csharp
var data = db.Data.Include(d => d.Creator).ThenInclude(c => c.Department).ToList();
```

也可以将多个级别和多个根的关联数据合并到一起进行查询 [参考](https://docs.microsoft.com/zh-cn/ef/core/querying/related-data/eager#including-multiple-levels)。

#### 显式加载

[显式加载](https://docs.microsoft.com/zh-cn/ef/core/querying/related-data/explicit) 表示稍后从数据库中显式加载关联数据。

#### 延迟加载

[延迟加载](https://docs.microsoft.com/zh-cn/ef/core/querying/related-data/lazy) 表示在访问导航属性时，从数据库中以透明方式加载关联数据。

### 使用原生 SQL 查询

EF Core 支持使用原生 SQL 查询数据，当 LINQ 查询效率低下时，可以通过原生 SQL 查询。

```csharp
var users = db.Users.FromSqlRaw("SELETE * FROM users").ToList();
```

:::warning 注意
使用原生 SQL，需要注意防范注入攻击。
:::

## 保存数据

在上下文中有 `SaveChanges()` 和 `SaveChangesAsync()` 方法，根据具体情况使用。

当上下文和实体类中添加、修改和删除数据时，调用上面方法进行保存即可。

```csharp
using (var db = new UserDbContext())
{
    var user = new User
    {
        Id = 1,
        DepartmentId = 1,
        Username = "jeremyjone",
        Nickname = "Jeremy Jone"
    };
    db.Add(user);
    db.SaveChanges();
}
```

## 了解更多

了解更多内容，参考 [官方文档](https://docs.microsoft.com/zh-cn/ef/core/)
