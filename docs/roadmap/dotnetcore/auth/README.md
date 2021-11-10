# 概述

## 开始之前

先贴上官方地址：
[IdentityServer 官方文档（英文）](https://identityserver4.readthedocs.io/en/latest/)

英文麻烦的，可以看中文，但并不是官方的，同时内容也不是很全：
[中文文档](http://www.identityserver.com.cn/)

学习之前，需要了解：

OAuth2 和 OpenID Connect 两种协议机制。

### OAuth 2.0

OAuth2 是一种协议，允许应用程序从安全令牌服务请求访问令牌并使用它们与 API 进行通信。由于可以集中身份验证和授权，因此这种委派降低了客户端应用程序和 API 的复杂性。

### OpenID Connect

OpenID Connect 是一种身份验证协议。它被认为是未来，因为它在现代应用程序中具有最大的潜力。它从一开始就针对移动应用程序场景而构建，并且旨在实现 API 友好。

### 结合 OAuth2 与 OpenID Connect

实际上，OpenID Connect 是 OAuth 2.0 的扩展。身份验证和 API 访问这两个基本的安全问题被组合为一个协议，通常只需一次往返于安全令牌服务即可。在可预见的将来，OpenID Connect 和 OAuth 2.0 的结合是保护现代应用程序安全的最佳方法。

![file](https://www.jeremyjone.com/wp-content/uploads/2021/03/image-1616402595899.png)

### IdentityServer

IdentityServer 是将符合规范的 OpenID Connect 和 OAuth 2.0 端点添加到任意 ASP.NET Core 应用程序的中间件。

## 正文开始

### 认证介绍

认证又称身份验证、鉴权等，其英文都是 Authentication。

认证是对用户进行身份校验。由用户提供凭据，然后将其与存储在服务端的凭据进行比较，如果匹配，则身份验证成功。只有在用户认证通过之后，系统才会执行向其授权的操作。

### 授权介绍

授权（Authorization）是指确定用户可执行的操作的过程。例如，允许管理用户创建文档库、添加文档、编辑文档和删除文档。使用库的非管理用户仅获得读取文档的权限。

授权有多种形式。 ASP.NET Core 的授权提供简单的声明性角色和基于策略的丰富模型。

### 对比认证与授权的例子

简单来说，就是你要去 ATM 机取钱：

- 首先你要输密码，密码正确才能进入取钱的界面，否则可能被吞卡。这个过程就是认证。
- 进入取钱界面，发现你是个普通用户，每天只能取 5000 块，所以你取 5000 块之内都是可以的。这就是授权。
- 超过 5000 块怎么办？当然是被拒绝，因为没有权限嘛。这时候就要尝试提升权限啥的，这都是后话了。

## 认证

认证是确定用户身份的过程。在 .NET 中，身份验证由 `IAuthenticationService` 负责，而它供身份验证中间件使用。身份验证由 Startup.ConfigureServices 中的注册身份验证服务指定。

### 添加认证服务

例如，为程序添加 cookie 和 JWT 持有者分身验证方案：

```csharp
services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(JwtBearerDefaults.AuthenticationScheme, options => Configuration.Bind("JwtSettings", options))
    .AddCookie(CookieAuthenticationDefaults.AuthenticationScheme, options => Configuration.Bind("CookieSettings", options));
```

其中，`JwtBearerDefaults.AuthenticationScheme` 是方案名称，为请求特定方案时，都会默认使用此名称。

如果使用了多个方案，授权策略可指定对用户进行身份验证时要依据的一个或多个身份验证方案。如上，可通过指定 cookie 方案的名称来使用该方案进行验证。
