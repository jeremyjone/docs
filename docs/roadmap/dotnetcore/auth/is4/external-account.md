# 外部身份验证

基于 OAuth2 的特性，我们可以轻松通过外部账户进行登录。

外部账户登录的好处：

- 方便用户操作。
- 将管理登录流程的许多复杂性转移到了第三方。

## 添加一个预定义的身份验证

IS4 在 ASP.NET Core 框架的基础上提供了更丰富和完整的预定义外部登录配置。

### 配置一个 Microsoft 身份验证

下面通过创建一个使用 Microsoft 身份进行验证的最小实例来介绍外部验证过程。

::: tip 示例代码
具体代码可以看 [示例代码](https://github.com/jeremyjone/dotnet-study-road/tree/master/AuthenticationAndAuthorization/AuthenticationAndAuthorization.ExternalAccount)
:::

使用命令创建一个全新项目：

```sh
dotnet new is4aspid --name ExternailAccount
```

会得到一个完整使用 IS4 的项目，而且已经内置好了 Google 的外部认证。

因为我们需要的是 Microsoft 的身份认证，所以需要添加包：

```text
Microsoft.AspNetCore.Authentication.MicrosoftAccount（3.1.5）
```

::: tip
下载时需要注意版本。
:::

在 `Startup.cs` 配置中的认证服务后面追加如下内容：

```csharp
services.AddAuthentication()
    .AddGoogle(options =>
    {
        options.SignInScheme = IdentityServerConstants.ExternalCookieAuthenticationScheme;

        // register your IdentityServer with Google at https://console.developers.google.com
        // enable the Google+ API
        // set the redirect URI to https://localhost:5001/signin-google
        options.ClientId = "copy client ID from Google here";
        options.ClientSecret = "copy client secret from Google here";
    })
    // 添加 Microsoft 认证
    .AddMicrosoftAccount("Microsoft", options =>
    {
        options.SignInScheme = IdentityServerConstants.ExternalCookieAuthenticationScheme;
        options.ClientId = "microsoft_client_id";
        options.ClientSecret = "microsoft_client_secret";
    });
```

运行项目，已经可以看到登录按钮。

<img :src="$withBase('/assets/roadmap/dotnet/is4_external_ms.png')" alt="is4_external_ms">

如果你的 Id 和 Secret 配置正确，现在已经可以正常登录了。没错，就是这么简单的使用。但是如果没有配置相应的 Id 和 Secret，没关系，按照下面步骤操作即可。

### 创建一个新的 Microsoft 身份认证客户端

打开 [应用注册页面](https://go.microsoft.com/fwlink/?linkid=2083908)，这是 Microsoft 的 Azure 门户，我们开发的客户端需要在这里注册。登录 Microsoft 账户后即可看到主页面。

#### 注册客户端

- 选择左上角的 **新注册**。

<img :src="$withBase('/assets/roadmap/dotnet/is4_external_ms_azurepage.png')" alt="is4_external_ms_azurepage">

- 输入 “名称”。
- 为 **支持的账户类型** 选择一个选项（如果不是组织，一定选择下面两项包含个人的）。
- 在 **重定向 URI** 中输入开发的 URL 并追加 `/signin-microsoft`。

<img :src="$withBase('/assets/roadmap/dotnet/is4_external_ms_azure_register.png')" alt="is4_external_ms_azure_register">

- 最后点击 **注册** 即可。

#### 添加秘钥

- 选择左侧的 **证书和密码**。

<img :src="$withBase('/assets/roadmap/dotnet/is4_external_ms_azure_registed.png')" alt="is4_external_ms_azure_registed">

- 在 **客户端密码** 下面选择 **新的客户端密码**。
- 添加客户端密码的说明并选择有效期，然后点击 **添加**。
- 复制 **客户端秘钥** 的 **值** 与 **ID**。（一定要复制 **值**，离开了页面再打开就不能查看和复制该值了）

<img :src="$withBase('/assets/roadmap/dotnet/is4_external_ms_azure_create_secret.png')" alt="is4_external_ms_azure_create_secret">

### 登录测试

有了 ID 和秘钥，添加到我们的代码中，再次运行，已经可以登录该客户端了。

<img :src="$withBase('/assets/roadmap/dotnet/is4_external_ms_azure_login.png')" alt="is4_external_ms_azure_login">

## 执行过程

### 登录过程

整个外部验证的流程是从点击登录按钮开始的。

1、看 `Login.cshtml` 页面的代码，点击按钮后会定向到 `Login` URI，因为是配置的外部登录信息，所以会包含对应的 `scheme` 和 `returnUrl` 信息，这是页面写好的。

2、当控制器收到请求之后，检查这是一个外部验证请求，于是跳转到 `Challenge` Action 中，
它会触发身份验证处理程序，通过 `HttpContext` 中的 `ChallengeAsync` 或者是 MVC 项目中的 `ChallengeResult` 来调用外部身份验证处理程序。

3、回调接收，通过定义好的 `RedirectUri`，可以在完成验证之后调转到指定接收器。剩下的事情就是在回调方法中添加需要的内容即可。典型的任务如：

- 检查外部提供者返回的身份
- 决定如何与该用户进行交互，新、老用户的区别等
- 新用户如何才被允许
- 是否需要创建本地账户并关联到外部账户
- 存储需要保留的外部声明
- 删除临时 Cookie
- 登录用户

### 登出过程

用户登出时，通常被重定向至外部程序进行登出，但是并不是所有外部程序都支持登出，这取决于它们的协议和特性。

要检测用户必须重定向到外部标识提供者以进行登出，通常可以使用 IdentityServer 上发布到 Cookie 中的 idp 声明。声明中设置的值是对应的认证中间件的 AuthenticationScheme。在登出时，会咨询该声明以了解是否需要外部登出。

由于正常的登出工作流已经需要清理和状态管理，将用户重定向到外部身份提供程序是有问题的。然后，在 IdentityServer 上完成正常的登出和清理过程的唯一方法是，在用户注销后，从外部标识提供者请求将用户重定向回 IdentityServer。

登出后撤销 IdentityServer 的身份验证的 Cookie，然后重定向到请求注销后外部程序的重定向链接。登出后应该维护必要的登出状态，要在外部程序登出后重定向回 IdentityServer，当使用 SignOut 时，RedirectUri 应该在 AuthenticationProperties 中使用：

```csharp
[HttpPost]
[ValidateAntiForgeryToken]
public async Task<IActionResult> Logout(LogoutInputModel model)
{
    // ...

    if (vm.TriggerExternalSignout)
    {
        // build a return URL so the upstream provider will redirect back
        // to us after the user has logged out. this allows us to then
        // complete our single sign-out processing.
        string url = Url.Action("Logout", new { logoutId = vm.LogoutId });

        // this triggers a redirect to the external provider for sign-out
        return SignOut(new AuthenticationProperties { RedirectUri = url }, vm.ExternalAuthenticationScheme);
    }

    // ...
}
```

### Cookie 的作用

在上面示例中，我们的 `SignInScheme` 是 Cookie 的方式：

```csharp
options.SignInScheme = IdentityServerConstants.ExternalCookieAuthenticationScheme;
```

该 Cookie 将临时存储外部身份验证的结果，这是必要的，因为在过程完成之前，通常都会设计几个重定向。鉴于这是一种通常的做法，IS4 专门为一些外部程序注册了 Cookie 处理程序，通过上面代码的常量表示。

但是也可以使用自定义的方式：

```csharp
services.AddAuthentication()
    .AddCookie("CustomCookieScheme")
    .AddMicrosoftAccount("Microsoft", options =>
    {
        options.SignInScheme = "CustomCookieScheme";
        options.ClientId = "microsoft_client_id";
        options.ClientSecret = "microsoft_client_secret";
    });
```

对于特殊情况，还可以使外部 Cookie 机制短路，直接将外部用户转发到主 Cookie 处理程序，来确保外部标识源进行正确的声明转换。
