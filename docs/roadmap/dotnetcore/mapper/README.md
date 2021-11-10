# 概述

对象映射是将一个对象通过一定规则转换成另一个对象的方法。它非常有用，通过对象映射可以将底层原始数据对象隐藏，转成面向用户的对象，从而实现数据对象的分层管理。

举个例子，一个用户对象，它有如下属性：

```csharp
public class User
{
    public int Id { get; set; }
    public string Username { get; set; }
    public string Nickname { get; set; }
    public string Password { get; set; }
    public string Email { get; set; }
}
```

现在我们需要查询用户基本信息，当我们没有对象映射的时候，每次都需要将整个对象内容返回，但是其中包含了敏感信息，所以我们需要新建一个对象，并重新赋值，比如：

```csharp
public class UserDto
{
    public int Id { get; set; }
    public string Username { get; set; }
    public string Nickname { get; set; }
}

var userDto = new UserDto
{
    Id = user.Id,
    Username = user.Username,
    Nickname = user.Nickname
}
```

::: tip DTO 是什么
DTO：Data Transfer Object，数据传输对象。用于在不同层之间进行数据交互的对象。
:::

这样的方式就是最对象映射。比如现在我们需要一个查询用户邮箱的对象，还要重新新建一个对象，然后使用时依次赋值：

```csharp
public class UserEmailDto
{
    public string Username { get; set; }
    public string Email { get; set; }
}

var userEmailDto = new UserEmailDto
{
    Username = user.Username,
    Email = user.Email
}
```

这样就映射了一个新的查询用户邮箱的对象。

这样做，一次两次还可以，但一个项目有很多对象，每个对象可能会有不同使用情况，于是就有了更多的 `DTO`，每一个都这样做的话就很麻烦，但是很必要，因为它提供了一种对象分离的思路。

为了避免这样大量重复的工作，所以就有了对象映射器这种工具。它的好处在于避免了大量重复工作，让我们只需要关注当前对象即可，做到了一次配置，终身受益。
