# 基础知识

本文将学习 `.NET` 需要的一些前置基础知识。

> 永远要记住一点，学习巨硬的内容，一定要去巨硬的[**官方文档**](https://docs.microsoft.com/zh-cn/aspnet/core/)，比任何市面的书籍或视频都官方和详细，而且对中文支持比较好。踩过不少坑，百度、google 过很多内容，认真学习过后，再回过头发现大部分都是官方文档的内容直接摘抄下来的。所以最好的方式是，当你需要学习一个内容时，去官方文档照着给出的例子做一遍，你就会了，而且不必担心版本问题。

## C# 语言

`.NET` 平台使用 `C#` 语言作为开发语言。

C#（读作“See Sharp”）是一种新式编程语言，不仅面向对象，还类型安全。C# 是面向对象的、面向组件的编程语言。 开发人员利用 C# 能够生成在 .NET 生态系统中运行的多种安全可靠的应用程序。 C# 源于 C 语言系列，C、C++、Java 和 JavaScript 程序员很快就可以上手使用。

推荐教程：[官方文档](https://docs.microsoft.com/zh-cn/dotnet/csharp/tour-of-csharp/)

## .NET 平台

.NET 是一种用于构建多种应用的免费开源开发平台，可以为许多操作系统创建 .NET 应用。通过 .NET，可以使用特定于平台的功能，如操作系统 API。Microsoft 支持在 Windows、macOS 和 Linux 上使用 .NET。

推荐教程：[官方文档](https://docs.microsoft.com/zh-cn/dotnet/core/introduction)

安装 .NET：

- [在 Windows 上安装 .NET](https://docs.microsoft.com/zh-cn/dotnet/core/install/windows?tabs=net50)
- [在 macOS 上安装 .NET](https://docs.microsoft.com/zh-cn/dotnet/core/install/macos)
- [在 Linux 上安装 .NET](https://docs.microsoft.com/zh-cn/dotnet/core/install/linux)

## CLI 工具

.NET 使用 `dotnet cli` 作为 CLI 工具。如果你已经安装了 .NET，那么 CLI 已经可以使用。

如果你已经安装好了 CLI 工具，可以尝试如下命令：

```sh
dotnet new
```

将会查看到当前已经安装好的模板。

推荐教程：[官方文档](https://docs.microsoft.com/zh-cn/dotnet/core/tools/)

## 学习 ASP.NET 框架

当前面的内容已经掌握，可以开始学习 `ASP.NET Core` 框架。`ASP.NET Core` 是一个跨平台的高性能开源框架，`ASP.NET Core` 是对 `ASP.NET 4.x` 的重新设计，其中包括体系结构上的更改，产生了更精简、更模块化的框架。

推荐教程：[官方文档](https://docs.microsoft.com/zh-cn/aspnet/core/introduction-to-aspnet-core?view=aspnetcore-5.0)

需要注意的是，`ASP.NET Core` 与 `ASP.NET` 是两个不同的框架。大体上的区分就是：

- `ASP.NET` 是专注于 Windows 平台，运行时为 `.NET Framework`。
- `ASP.NET Core` 则是开源的，跨平台的，运行时为 `.NET Core`。

截取官网的对比表格：

|                                      ASP.NET Core                                      |                      ASP.NET 4.x                      |
| :------------------------------------------------------------------------------------: | :---------------------------------------------------: |
|                         针对 Windows、macOS 或 Linux 进行生成                          |                 针对 Windows 进行生成                 |
|      Razor Pages 是在 ASP.NET Core 2.x 及更高版本中创建 Web UI 时建议使用的方法。      | 使用 Web Forms、SignalR、MVC、Web API、WebHook 或网页 |
|                                   每个计算机多个版本                                   |                  每个计算机一个版本                   |
| 使用 C# 或 F# 通过 Visual Studio、Visual Studio for Mac 或 Visual Studio Code 进行开发 |     使用 C#、VB 或 F# 通过 Visual Studio 进行开发     |
|                                比 ASP.NET 4.x 性能更高                                 |                      良好的性能                       |
|                                 使用 .NET Core 运行时                                  |              使用 .NET Framework 运行时               |

更多比较区别，可以参考 [官方文档](https://docs.microsoft.com/zh-cn/aspnet/core/fundamentals/choose-aspnet-framework?view=aspnetcore-5.0)

平台区别，可以参考 [官方文档](https://docs.microsoft.com/zh-cn/dotnet/standard/choosing-core-framework-server?toc=%2Faspnet%2Fcore%2Ftoc.json&bc=%2Faspnet%2Fcore%2Fbreadcrumb%2Ftoc.json&view=aspnetcore-5.0)

## 其他知识

为了更好地学习 .NET，你需要但并不强制掌握以下内容。

- Web 相关知识
- 设计原则
- 设计模式
- 数据库相关知识
- 算法和数据结构相关知识
