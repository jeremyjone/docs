# 概述

> 高内聚，低耦合

作为程序设计的高级奥义，依赖注入是很好的实现。

## 什么是依赖注入

依赖注入，Dependency Injection，简写为 DI，它是控制反转（Inversion of Control，简写为 IoC）的一种。

> 控制反转是面向对象编程中的一种设计原则，可以用来降低计算机代码之间的耦合度。通过控制反转，对象在被创建的时候，由一个调控系统内所有对象的外界实体将其所依赖的对象的引用传递给它。也可以说，依赖被注入到对象中。 -- 百度

听上去有点绕，说人话，就是原来我们的程序使用的一个具体的类，现在不用了，用一个接口就可以了。

## 依赖注入的好处

网上有很多介绍和总结，我总结了一下，无外乎下面几点：

- 符合设计原则
- 对于上层的依赖更加稳定
- 易于维护与测试

还有一些其他优点的介绍，但无外乎都是针对上面的优点进行的扩展。比如分离关注点、封装性好等特点，在我看来，都可以归类为**符合设计原则**，这在设计原则中已经很清晰的提出过。

## 依赖注入的实现原理

那么多的好处，它是如何实现的呢？参考下面图片：

<img :src="$withBase('/assets/roadmap/dotnet/di/di_direct_graph.png')" alt="di_direct_graph">

编译时依赖关系顺着运行时执行的方向，从而生成一个直接依赖关系图。也就是说，如果 `Class A` 调用 `Class B` 中的函数，而 `Class B` 又调用 `Class C` 中的函数，则编译时 A 取决于 B，而 B 又取决于 C。这样的方式显然在编译时带来很多不便，如果我们修改了 C，则后续都需要重新编译。

如果我们将 B 提取出抽象方法，让 A 调用 B 的抽象，这样就让 A 可以在运行时调用 B，而 B 又在编译时依赖于 A 控制的接口（B 的抽象），此时程序执行时流程保持不变，但编译时发生依赖项的翻转，此改变就是依赖倒置和控制反转。接口（抽象）的引入意味着可以轻松插入这些接口的不同实现，A 再也不管用关心 B 的内部是如何实现的了。

同理，将 C 提取出抽象方法，让 B 调用 C 的抽象，就完全将整个程序流程进行了 `IoC`。

<img :src="$withBase('/assets/roadmap/dotnet/di/di_inverted_graph.png')" alt="di_inverted_graph">

依赖项反转是生成松散耦合应用程序的关键一环，因为可以将实现详细信息编写为依赖并实现更高级别的抽象，而不是相反。 因此，生成的应用程序的可测试性、模块化程度以及可维护性更高。 遵循依赖关系反转原则可实现依赖关系注入。

## 依赖注入的示例

### 错误的用法

比如我们现在需要一个发送邮件的对象，其他类需要使用该对象的 `SendEmail` 方法：

```csharp
public class EmailHandler
{
    public void SendEmail(string address, string message)
    {
        // 模拟方法
        Send(address, message);
    }
}
```

我们现在需要使用发送邮件的功能：

```csharp
public class Page
{
    private readonly EmailHandler _emailHandler = new EmailHandler();

    public void NoticeUser(string userEmail)
    {
        _emailHandler.SendEmail(userEmail, "notice message.");
    }
}
```

以上做法是通过直接创建实例完成的，它会产生如下问题：

- 如果使用不同的实现替换现有 `EmailHandler`，必须修改 `Page` 类。
- 如果 `EmailHandler` 有其他配置，必须在 `page` 类中全部重新配置。
- 编译时的逻辑会更加复杂，也很难进行单元测试。

上述问题还只是这一个类，如果多个类同时使用 `EmailHandler`，上面的问题带来的未知结果将不可预测。

### 正确的用法

按照上面的实现原理进行改造，并通过 DI 容器创建，在使用 `EmailHandler` 时只是注入到当前类即可。

生成一个 `EmailHandler` 的接口：

```csharp
public interface IEmailHandler
{
    void SendEmail(string address, string message);
}
```

修改一下实现类，让其实现上面接口：

```csharp
public class EmailHandler: IEmailHandler
{
    public void SendEmail(string address, string message)
    {
        // 模拟方法
        Send(address, message);
    }
}
```

然后通过 `ASP.NET Core` 的注册服务进行注册：

```csharp
public void ConfigureServices(IServiceCollection services)
{
    services.AddSingleton<IEmailHandler, EmailHandler>();
}
```

最后在 `Page` 类中注入 `EmailHandler` 方法：

```csharp
public class Page
{
    private readonly IEmailHandler _emailHandler;

    public Page(IEmailHandler emailHandler)
    {
        _emailHandler = emailHandler;
    }

    public void NoticeUser(string userEmail)
    {
        _emailHandler.SendEmail(userEmail, "notice message.");
    }
}
```

这样，在我们的 `Page` 类中，已经完全不需要关心这个 `SendEmail` 方法和它的类是如何创建和运行的，当我们修改 `SendEmail` 或者更改 `EmailHandler` 时，`Page` 类也完全不用关心。
