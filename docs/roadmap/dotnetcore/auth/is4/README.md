# IdentityServer4 的使用

IdentityServer4 是基于 OpenId Connect（OIDC）、OAuth 2.0 统一的身份认证和授权系统。它拥有很多功能：

- 保护你的资源
- 使用本地帐户或通过外部身份提供程序对用户进行身份验证
- 提供会话管理和单点登录
- 管理和验证客户机
- 向客户发出标识和访问令牌
- 验证令牌

## OpenId Connect（OIDC）

OpenId 是一种认证机制，用于对用于的身份进行认证，它允许用户使用单个账号登录多个网站。

OIDC 提供者必须记录其将哪些声明包含在其标识令牌中，有关认证的必须声明：

- aud（读者）：必须包含在发行者注册的 RP 的客户机标识
- iss（发行者）：OP 的发行者标识
- exp（到期时间）：RP 必须再次时间之前验证标识令牌
- iat（发行时间）：发放标识令牌的时间

以下声明是有关用户的必须声明：

- sub（主题）：发行者的用户的本地唯一且永久标识

## OAuth 2.0

OAuth 2.0 是一种授权机制，主要用于颁发令牌。

> **举个例子**
> 你入职了一家公司，HR 小姐姐给了你一张门禁卡，你通过门禁卡就可以进入公司。但不一定每一间屋子都能进。-- 这就相当于颁发访问令牌。
> 非本公司的人没有门禁卡，他们就进不来。而你拿着这张门禁卡在公司到处溜达，不见得每个门都能打开，比如老总办公室。-- 这就是权限控制。
> 当你离职的时候，HR 小姐姐会收回你的门禁卡，你也就进不了公司了，这就是授权过期。

OAuth 2.0 规定了四中获得令牌的流程：

- 授权码（authorization-code）
- 隐藏式（implicit）
- 密码式（password）
- 客户端凭证（client-credentials）

1、授权码：

即客户先申请一个授权，然后再用该授权码获取令牌。这种方式最常用，安全性也最高。

因为发送参数通常都在 URL 中，并且 secret 参数是保密的，所以一定要在后端发送请求。

2、隐藏式：

即允许直接向前端颁发令牌，没有授权码的步骤。

因为随着前后端分离，大量纯前端项目的出现，导致授权码的方式在一定程度上不能实行，所以必须将令牌存储在前端，于是就有了隐藏式。

这种方式很不安全，所以只用于特定安全要求不高的环境下，并且有效期应该设置的尽量短。而且，这种回调的跳转参数通常使用**锚点**形式。

3、密码式：

即通过某个第三方应用输入密码进行验证，并由该应用向目标服务器请求令牌。

这种方式要求客户完全信赖其使用的第三方应用，否则不应该将密码告诉它们。

4、客户端凭证：

该方案适用于命令行应用。这种方式给出的令牌是针对第三方应用的，而非针对用户，所以可能多个用户使用同一令牌。

无论哪种方式，客户（第三方应用）都应在申请令牌之前进行系统备案，说明自己的身份，然后才会拿到两个身份识别码：

- 客户端 Id（client ID）
- 客户端秘钥（client secret）

没有备案的客户，是不会拿到令牌的。

## 创建 IS4 服务

IS4 官方教程：[英文文档](https://identityserver4.readthedocs.io/en/latest/)

::: tip 示例代码
具体代码可以看 [示例代码](https://github.com/jeremyjone/dotnet-study-road/tree/master/AuthenticationAndAuthorization/AuthenticationAndAuthorization.IdentityServer4)
:::

### 安装 IS4 包

通过 `NuGet` 管理器安装 `IdentityServer4`。

### 添加配置文件

添加一个 `Config.cs` 文件，并且添加如下内容：

```csharp
public static class Config
{
    /// <summary>
    /// 配置认证资源信息
    /// </summary>
    public static IEnumerable<IdentityResource> Ids =>
        new IdentityResource[]
        {
            // 认证资源，OpenId 是必须要添加的
            new IdentityResources.OpenId(),
            // Profile 也是需要带上的
            new IdentityResources.Profile()
        };

    /// <summary>
    /// 配置 Api 信息
    /// </summary>
    public static IEnumerable<ApiScope> Apis =>
        new[]
        {
            new ApiScope("api.jeremyjone.com", "Jz.Api"),
        };

    /// <summary>
    /// 配置客户端
    /// </summary>
    public static IEnumerable<Client> Clients =>
        new []
        {
            new Client
            {
                // 客户端 Id
                ClientId = "jz",
                // 客户端获取 Token
                ClientSecrets = new[] {new Secret("www.jeremyjone.com".Sha256()) },
                // 使用客户端认证
                AllowedGrantTypes = GrantTypes.ClientCredentials,
                // 允许访问的 Api
                AllowedScopes = new[] { "api.jeremyjone.com" }
            }
        };
}
```

::: tip 提示
这是基本配置，更多配置，请参考 [详解配置](./intro-config)
:::

### 配置服务

在 `Startup.cs` 中配置 IS4 的服务。

```csharp
public void ConfigureServices(IServiceCollection services)
{
    var builder = services.AddIdentityServer()
        .AddInMemoryApiScopes(Config.Apis)
        .AddInMemoryClients(Config.Clients);

    // 开发环境下配置临时签名认证
    builder.AddDeveloperSigningCredential();
}
```

然后添加中间件：

```csharp
app.UseIdentityServer();
```

### 密码认证

如果需要使用密码认证，两个步骤：

- 需要将客户端的配置中 `AllowedGrantTypes` 字段的值修改为 `GrantTypes.ResourceOwnerPassword`。
- 同时添加一个测试用户以供测试：

  - 在 `Config.cs` 文件中添加一个静态方法：

  ```csharp
  /// <summary>
  /// 配置测试账户
  /// </summary>
  public static List<TestUser> Users =>
    new List<TestUser>
    {
        new TestUser
        {
            SubjectId = "1",
            Username = "jeremyjone",
            Password = "123456"
        }
    };
  ```

  - 然后在 `Startup.cs` 文件中的服务配置中追加一个 `AddTestUsers(Config.Users)` 即可。

这样一个简单的认证中心就配置完成。

### 测试一下

通过 Postman 进行测试：

<img :src="$withBase('/assets/roadmap/dotnet/is4_postman_test.png')" alt="postman 测试">

通过后台代码测试：

::: tip 示例代码
具体代码可以看 [示例代码](https://github.com/jeremyjone/dotnet-study-road/tree/master/AuthenticationAndAuthorization/AuthenticationAndAuthorization.IdentityServerConsoleTest)
:::

```csharp
public static async void GetToken()
{
    var client = new HttpClient();
    var discovery = await client.GetDiscoveryDocumentAsync("http://localhost:5000");
    if (discovery.IsError)
    {
        Console.WriteLine("ERR: " + discovery.Error);
    }

    var resp = await client.RequestClientCredentialsTokenAsync(new ClientCredentialsTokenRequest
    {
        Address = discovery.TokenEndpoint,
        ClientId = "jz",
        ClientSecret = "www.jeremyjone.com",
    });

    if (resp.IsError)
    {
        Console.WriteLine("ERR: " + resp.Error);
    }

    Console.WriteLine(resp.Json);
}
```

测试结果同样是成功的。

这样就完成了基于 OAuth 2.0 协议的认证过程。

## 实现 OIDC 认证

使用 IS4 实现一个 OIDC 认证。

### 建立认证服务器

基于上面的认证服务器进行修改，首先添加 UI。

::: tip 示例代码
具体代码可以看 [示例代码](https://github.com/jeremyjone/dotnet-study-road/tree/master/AuthenticationAndAuthorization/AuthenticationAndAuthorization.IS4WithUI)
:::

在项目根目录下添加 UI 文件，有两种方式：

- 打开 [IdentityServer4.Quickstart.UI](https://github.com/IdentityServer/IdentityServer4.Quickstart.UI/)，下载全部内容并复制到项目文件夹下。

- 使用 命令行：

  ```powershell
  # powershell
  iex ((New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/IdentityServer/IdentityServer4.Quickstart.UI/main/getmain.ps1'))
  ```

  或者在 macOS 或者 Linux 中：

  ```sh
  curl -L https://raw.githubusercontent.com/IdentityServer/IdentityServer4.Quickstart.UI/main/getmain.sh | bash
  ```

除了上面两种方式，还可以通过 cli 的模板工具进行添加（前提是你得有对应模板，如果没有，就用上面的命令即可）：

```bash
dotnet new -i identityserver4.templates
dotnet new is4ui
```

> 了解更多 IS4 提供的模板，可以查看 [IS4 的模板](#丰富的模板)

安装成功后，目录结构如下：

<img :src="$withBase('/assets/roadmap/dotnet/is4_quickstart_ui_dir.png')" alt="is4_quickstart_ui_dir">

直接运行可以看到界面了:

<img :src="$withBase('/assets/roadmap/dotnet/is4_quickstart_ui_page1.png')" alt="is4_quickstart_ui_page1">

> 这里有个细节问题，如果点登录后没有跳转页面，而后台出现了类似 `SameSite` 的错误，请参照微软的文档操作：[SameSite Cookie](https://docs.microsoft.com/en-us/aspnet/core/security/samesite?view=aspnetcore-5.0)

然后修改之前的代码，只需要修改配置文件即可。

在 `Config.Clients` 中添加一个客户端：

```csharp
new Client
{
    ClientId = "mvc_client",
    ClientName = "MVC Client",
    ClientSecrets = {new Secret("www.jeremyjone.com".Sha256())},
    // 使用授权码
    AllowedGrantTypes = GrantTypes.Code,
    // 重定向，地址是客户端的地址
    RedirectUris = {"http://localhost:6000/signin-oidc"},
    PostLogoutRedirectUris = {"http://localhost:6000/signout-callback-oidc"},
    // 用户的授权范围
    AllowedScopes =
    {
        // 允许用户的授权
        IdentityServerConstants.StandardScopes.OpenId,
        IdentityServerConstants.StandardScopes.Profile,
        "api.jeremyjone.com"
    },
    // 是否需要用户同意（需要的话，会跳转到一个同意页面）
    RequireConsent = true
}
```

> _重定向地址是标准地址，也可以自定义。_

### 建立客户端

新建一个项目，MVC、API 或者其他客户端项目都可以。

::: tip 示例代码
具体代码可以看 [示例代码](https://github.com/jeremyjone/dotnet-study-road/tree/master/AuthenticationAndAuthorization/AuthenticationAndAuthorization.IS4WithUIMvcClient)
:::

#### 配置客户端的服务

在 `Startup.ConfigureServices` 中添加认证服务：

```csharp
// 关闭默认 Token 命名空间
JwtSecurityTokenHandler.DefaultMapInboundClaims = false;
services.AddAuthentication(options =>
    {
        // 配置协议
        options.DefaultScheme = "Cookies";
        options.DefaultChallengeScheme = "oidc";
    })
    .AddCookie("Cookies")
    // 如果使用 Chrome 在登录后无法从 signin-oidc 路径跳转到目标路径，如下操作：
    // 打开浏览器键入 chrome://flags，搜索 Cookies without SameSite must be secure，将其设置为 Disabled 即可。
    .AddOpenIdConnect("oidc", options =>
    {
        // 如果不启用 https，则需要添加该 meta 项
        options.RequireHttpsMetadata = false;
        // 这个地址是认证服务器的地址
        options.Authority = "http://localhost:5000";
        // 下面内容需要与认证服务器的内容保持一致
        options.ClientId = "mvc_client";
        options.ClientSecret = "www.jeremyjone.com";
        // 认证方式
        options.ResponseType = "code";
        options.SaveTokens = true;
        // 验证是否包含某个作用域
        options.Scope.Add("api.jeremyjone.com");
    });
```

然后在中间件中注册 `UseAuthentication()` 即可。

#### 修改控制器

在控制器中给一个方法添加 `[Authorize]` 控制访问权限。

这样就配置好了，可以整体测试一下。

### 测试认证连接

- 命令行打开认证服务器，确保打开地址是客户端填写的地址。

- 启动客户端，客户端地址应该是服务器填写的重定向根地址。

打开浏览器，输入客户端地址，点击被限制的接口按钮时，就会跳转到对应服务器的登录认证页面，成功后可以跳转回客户端地址。

## 丰富的模板

通过安装 IS4 的模板，可以快速创建多种类型的 IS4 服务。

首先需要安装模板：

```sh
dotnet new -i IdentityServer4.Templates
```

安装好之后，通过 `dotnet new` 会看到多出来的模板：

<img :src="$withBase('/assets/roadmap/dotnet/is4_template.png')" alt="is4 模板列表">

记住它们的命令：

|   名称   |                             说明                              |
| :------: | :-----------------------------------------------------------: |
| is4admin | 创建一个带后台管理的完整 IdentityServer 项目，但仅可用于测试  |
| is4aspid | 创建一个将使用 ASP.NET Core Identity 的新 IdentityServer 项目 |
| is4empty |               创建一个空的 IdentityServer 项目                |
|  is4ef   |             创建带有 EntityFramework 支持的新项目             |
| is4inmem |            创建内存存储的新项目，通常用于快速测试             |
|  is4ui   |                 创建一个带 UI 的完整 MVC 示例                 |
