# 模型

Entity Framework Core 使用一组约定来根据实体类的形状生成模型。可指定其他配置以补充或替代约定的内容。模型对应于数据库中的表，每一张数据表都应该对应一个数据模型。

::: tip 示例代码
完整代码可以看 [示例代码](https://github.com/jeremyjone/dotnet-study-road/tree/master/Database/Database.ModelBase)
:::

## 创建模型

在前面的文章中已经有了基本的模型创建，详细内容可以参考 [添加模型](./#添加模型)

每个类对应一张数据库表，每一个属性对应数据表中的一个字段，我们可以对每个数据表甚至每个字段进行单独配置。有两种方法：

- fluent API（优先级更高）
- 数据注释

这两种方式都是很常见的使用方式，后面详细介绍。

### 一对多关联

对于属性中的关联关系，EF Core 为我们提供了非常简便的方式 - 添加属性。

比如我们现在有一个 Data 表，它需要关联我们的 User 表：

```csharp{6,7}
public class Data
{
    public int Id { get; set; }
    public string Name { get; set; }
    // 通过创建对象属性，在生成数据表时，会自动生成外键
    public int CreatorId { get; set; }
    public virtual User Creator { get; set; }
}
```

这样就生成了关联，这是一个一对多的关联方式。

### 多对多关联

在数据库中，一对多是通过列字段属性关联，而多对多通常都是通过第三方表进行关联的。在 EF Core 中，多对多的关联方式仍然可以通过属性字段表示，比如常用的角色与权限：

```csharp{6,13}
public class Permission
{
    public int Id { get; set; }
    public string Name { get; set; }
    public bool Value { get; set; }
    public virtual ICollection<Role> R { get; set; }
}

public class Role
{
    public int Id { get; set; }
    public string Name { get; set; }
    public virtual ICollection<Permission> P { get; set; }
}
```

在两个类中使用了对应类型属性的集合。实际上在生成之后，它们会形成多对多的关联。

但是与普通属性不同，在实际使用过程中我发现，在多对多属性中添加数据注释，有一些是不起作用的，比如列名：

```csharp
[Column("r_id", TypeName = "smallint")]
public virtual ICollection<Permission> P { get; set; }
```

有趣的效果是，在生成数据表之后，TypeName 生效了，而列名无效。于是这就需要使用 fluent API 的方式了，但是问题又来了，既然没有实际的对象，如何添加呢？

这里需要一个比较特殊的方式：

```csharp
modelBuilder.Entity<Role>()
    .HasMany(r => r.P)
    .WithMany(p => p.R)
    .UsingEntity(x =>
    {
        x.ToTable("my_role_permission");
        x.Property<short>("PId").HasColumnType("smallint").HasColumnName("p_id");
        x.Property<short>("RId").HasColumnType("smallint").HasColumnName("r_id");
    });
```

::: tip 提示
使用上述方法，需要安装 EF Core 对应的反射工具 `Microsoft.EntityFrameworkCore.Relational`。如果已经安装了第三方的数据库扩展工具，它可能已经包含了该反射工具。
:::

::: warning 注意
这里我特意将列的类型换成了`smallint`，对应的属性为 `short`，以作说明之用，需要注意。
:::

通过 `HasMany` 与 `WithMany` 方法形成了多对多关联，然后使用 `UsingEntity` 就可以对该对应关系表进行详细设置。设置属性时确保注意类型的正确性，这一点尤为重要。

## 通过 fluent API 配置模型

在派生的上下文中替代 `OnModelCreating` 方法，并使用 ModelBuilder API 来配置模型，此配置方法最为有效，并且可在不修改是提累的情况下指定配置。

```csharp
public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>()
            // 用户名是必须的
            .Property(user => user.Username)
            .IsRequired();
    }
}
```

### 设置实体属性

多个实体可以单独进行配置，比如设置索引：

```csharp
modelBuilder.Entity<User>(entity =>
{
    entity.HasIndex(e => e.Username);
});
```

### 配置多个属性

```csharp
public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>(entity =>
        {
            // 用户名是必须的
            entity.Property(e => e.Username)
                .IsRequired();

            // 部门 Id 是必须的
            entity.Property(e => e.DepartmentId)
                .IsRequired();
        })
    }
}
```

### 时间的创建与更新

时间的更新可以通过两个方式实现：

- 通过设置 `ValueGeneratedOnAddOrUpdate()` 方法
- 给出默认值。我们都知道在写 SQL 的时候，更新时间是通过 `ON UPDATE CURRENT_TIMESTAMP` 实现的，那么我们可以直接将默认值写成这个即可。

::: warning 注意
两种方式不能共存。在起初的阶段，我将默认值设置为 `CURRENT_TIMESTAMP`，同时提供了 `ValueGeneratedOnAddOrUpdate()` 方法，然后发现并没有生效。
:::

```csharp
modelBuilder.Entity<Data>(entity =>
{
    // HasDefaultValueSql 和 ValueGeneratedOnAdd 属性二选一
    entity.Property(e => e.CreateTime)
        // .HasDefaultValueSql("CURRENT_TIMESTAMP")
        .HasComment("创建时间")
        .ValueGeneratedOnAdd();

    // HasDefaultValueSql 和 ValueGeneratedOnAddOrUpdate 属性二选一
    entity.Property(e => e.UpdateTime)
        // .HasDefaultValueSql("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
        .HasComment("更新时间")
        .ValueGeneratedOnAddOrUpdate();
});
```

同时还要注意，字段类型是否需要设置为 `timestamp`。

### 分组配置

甚至可以通过分组，对多个配置封装到单独的类中，新建一个 `UserEntityTypeConfiguration.cs` 文件，并添加如下内容：

```csharp
public class UserEntityTypeConfiguration : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder
            // 用户名是必须的
            .Property(user => user.Username)
            .IsRequired();
    }
}
```

在 `OnModelCreating` 中调用 `Configure` 方法，并进行配置：

```csharp
new UserEntityTypeConfiguration().Configure(modelBuilder.Entity<User>());
modelBuilder.ApplyConfigurationsFromAssembly(typeof(UserEntityTypeConfiguration).Assembly);
```

## 通过数据注释配置模型

有时候我们在定义模型时就可以对属性进行约束，这种方式更加清晰。

::: warning 注意
数据注释的方式会被 fluent API 配置替代。
:::

在 `Username` 属性上面添加 `[Required]`，其作用与上面示例一致。

```csharp{6}
public class User
{
    /// <summary>
    /// 用户名
    /// </summary>
    [Required]
    public string Username { get; set; }
}
```

下面是一些常用的数据注释方法，基于 SQL Server，其他数据库设置大体相同，有差别请自行查找。

### 设置表名

```csharp{1}
[Table("users")]
public class User
{
}
```

### 不映射某一属性到数据表

```csharp{1,4}
[NotMapped]
public class UserMetadata
{
    [NotMapped]
    public DateTime PostTime { get; set; }
}
```

```csharp{3}
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Ignore<UserMetadata>();
}
```

该数据属性在类型和属性上均可使用。

### 必须值

```csharp{3}
public class User
{
    [Required]
    public int Id { get; set; }
}
```

### 设置列名

```csharp{3}
public class User
{
    [Column("d_id")]
    public int DepartmentId { get; set; }
}
```

### 设置列的数据类型

```csharp{3}
public class User
{
    [Column(TypeName = "varchar(20)")]
    public string Username { get; set; }
}
```

### 设置最大长度

```csharp{3}
public class User
{
    [MaxLength(20)]
    public string Username { get; set; }
}
```

### 配置主键

默认情况下使用 `Id` 或者 `**Id`(如 MyId) 的字段配置为主键，也可以通过数据注释来自定义主键：

```csharp{3}
public class User
{
    [Key]
    public int Id { get; set; }
}
```

### 配置索引

```csharp{1}
[Index(nameof(Username))]
public class User
{
    public int Id { get; set; }
    public string Username { get; set; }
}
```

#### 复合索引

```csharp{1}
[Index(nameof(Id), nameof(Username))]
public class User
{
    public int Id { get; set; }
    public string Username { get; set; }
}
```

#### 唯一索引

```csharp{1}
[Index(nameof(Username), IsUnique = true)]
public class User
{
    public int Id { get; set; }
    public string Username { get; set; }
}
```

#### 设置索引名称

```csharp{1}
[Index(nameof(Username), Name = "Index_Username")]
public class User
{
    public int Id { get; set; }
    public string Username { get; set; }
}
```

## 了解更多

了解更多内容，可以参考 [官方文档](https://docs.microsoft.com/zh-cn/ef/core/modeling/)
