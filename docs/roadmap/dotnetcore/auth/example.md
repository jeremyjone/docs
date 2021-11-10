# 在 ASP.NET 中使用授权与认证

下面通过一组渐进式的例子，来学习 ASP.NET 是如何认证并授权的。

## 添加认证中间件

在 Startup.Configure 中添加身份验证中间件，通过调用 `UseAuthenticaiton` 扩展方法来实现。中间件的添加需要顺序，要保持：

- 在 `UseRouting` 之后调用，以便路由信息可用于身份验证。
- 在 `UseEndpoints` 之前调用，以便用户在经过身份验证之后才能访问端点。

```csharp
public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    if (env.IsDevelopment())
    {
        app.UseDeveloperExceptionPage();
    }
    else
    {
        app.UseExceptionHandler("/Error");
    }

    app.UseStaticFiles();

    app.UseRouting();
    // 鉴权放在路由之后，授权之前
    app.UseAuthentication();
    // 授权
    app.UseAuthorization();

    app.UseEndpoints(endpoints =>
    {
        endpoints.MapDefaultControllerRoute();
    });
}
```

### 使用 Cookie 认证

添加一个简单的 Cookie 认证方案，每次请求需要携带对应的 Cookie 才可以访问。

::: tip 示例代码
具体代码可以看 [示例代码](https://github.com/jeremyjone/dotnet-study-road/tree/master/AuthenticationAndAuthorization/AuthenticationAndAuthorization.Basic)
:::

首先在 `Startup.cs` 中添加服务：

```csharp
services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
    .AddCookie(CookieAuthenticationDefaults.AuthenticationScheme, config =>
    {
        config.Cookie.Name = "MyCookie";
        // 没有授权时，跳转到该页面
        config.LoginPath = "/Home/Auth";
    });
```

然后在 `HomeController` 控制器前添加授权方案：

```csharp
[Authorize]
public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Secret()
    {
        return View();
    }
}
```

并在控制器中添加一个名为 `Auth` 的应用：

```csharp
/// <summary>
/// 认证
/// </summary>
/// <returns></returns>
// 不需要任何授权
[AllowAnonymous]
public IActionResult Auth()
{
    // 添加一些声明
    var claims1 = new List<Claim>()
    {
        new Claim(ClaimTypes.Name, "Jz"),
        new Claim(ClaimTypes.Email, "Jz@qq.com"),
        // 声明的键是可以自定义的
        new Claim("Custom-Claim", "This is a custom claim.")
    };

    // 创建一个身份声明
    var identity1 = new ClaimsIdentity(claims1, "Claims1");

    // 添加第二个声明
    var claims2 = new List<Claim>()
    {
        new Claim(ClaimTypes.Name, "Tom"),
        new Claim(ClaimTypes.Email, "Tom@qq.com")
    };

    // 创建第二个身份声明
    var identity2 = new ClaimsIdentity(claims2, "Claims2");

    // 将两个身份声明放到用户身份中
    var principal = new ClaimsPrincipal(new[] {identity1, identity2});

    // 签入身份验证方案的主体
    HttpContext.SignInAsync(principal);

    return RedirectToAction("Index");
}
```

是的，这样就完成了一个非常简单的认证。当我们第一次登录 Index 的时候，因为没有权限，会跳转到我们配置好的目录：`/Home/Auth`，然后获取到身份验证内容后，重新跳转回 Index，这一切都是这么的丝滑。

## 授权

授权通常是针对用户可执行的操作。在 .NET 的解决方案中，授权的使用是非常简单的。它通过 `AuthorizeAttribute` 和其各种参数来控制。

所有的授权都是在认证之后的，如果开启了授权，而没有提供认证方案，则会报错。
下面的代码，都默认已经配置好了 JWT 认证方案。

### 授权的使用

其最简单的形式就是将 `[Authrize]` 属性应用于控制器、操作或 Razor 页面。

```csharp
[Authorize]
public class AccountController : Controller
{
    public ActionResult Login()
    {
    }

    public ActionResult Logout()
    {
    }
}
```

如果要对操作应用授权而非控制器，则置于操作本身即可：

```csharp
public class AccountController : Controller
{
   public ActionResult Login()
   {
   }

   [Authorize]
   public ActionResult Logout()
   {
   }
}
```

对于控制器需要权限，而里面某些应用不需要授权的情况，使用 `[AllowAnonymous]` 属性进行控制：

```csharp
[Authorize]
public class AccountController : Controller
{
    [AllowAnonymous]
    public ActionResult Login()
    {
    }

    public ActionResult Logout()
    {
    }
}
```

`AllowAnonymous` 属性会跳过所有授权语句，如果它与 `Authorize` 组合使用，则会忽略 `Authorize` 属性，并且该效果向下兼容。

### 基于角色授权

想要使用角色授权，首先要在令牌中添加角色：

::: tip 示例代码
具体代码可以看 [示例代码](https://github.com/jeremyjone/dotnet-study-road/tree/master/AuthenticationAndAuthorization/AuthenticationAndAuthorization.Role)
:::

#### 添加角色

```csharp
var token = new JwtSecurityToken(
issuer: "jeremyjone@qq.com",
audience: "jeremyjone",
expires: DateTime.UtcNow.AddHours(1),
signingCredentials: new SigningCredentials(key, SecurityAlgorithms.HmacSha256),
claims: new Claim[]
{
    // 角色需要在这里填写
    new Claim(ClaimTypes.Role, "Admin"),
    // 多个角色可以重复写，生成的 JWT 会是一个数组
    new Claim(ClaimTypes.Role, "Super")
});
```

#### 使用角色进行授权

在 `[Authorize]` 后面跟上角色参数，即可使用角色授权。

```csharp
// 只有角色为 Admin 的用户可以使用
[Authorize(Roles = "Admin")]
public IEnumerable<WeatherForecast> Get()
{
}
```

如果想使用两个或以上的角色，则可以：

```csharp
// 多个角色使用逗号（,）分开，它们是 “或” 的关系
[Authorize(Roles = "Admin,User")]
public IEnumerable<WeatherForecast> Get()
{
}

// 多个角色分开写是 “且” 的关系
[Authorize(Roles = "Admin")]
[Authorize(Roles = "Super")]
public IEnumerable<WeatherForecast> Get()
{
}
```

### 基于策略授权

::: tip 示例代码
具体代码可以看 [示例代码](https://github.com/jeremyjone/dotnet-study-road/tree/master/AuthenticationAndAuthorization/AuthenticationAndAuthorization.Policy)
:::

上面的角色过于简单，.NET 提供了更加强大的功能--基于策略。

简单来说，就是将上面的 `Roles` 改为 `Policy` 即可。

```csharp
[Authorize(Policy = "AdminAndSuper")]
public IEnumerable<WeatherForecast> Get()
{
}
```

策略授权使用起来确实方便很多，但是其配置也更复杂。

#### 配置角色策略

在 Startup.ConfigureServices 中添加授权服务：

```csharp
services.AddAuthorization(options =>
{
    // 配置角色策略
    options.AddPolicy("AdminAndSuper", ploicy => policy.RequireRole("Admin").RequireRole("Super"));
    options.AddPolicy("AdminOrSuper", ploicy => policy.RequireRole("Admin", "Super"));
});
```

关键通过 `RequireRole` 方法可以实现匹配角色，多参数为“或”的关系，链式为“且”的关系。

#### 配置声明策略

声明策略通过匹配令牌中的声明（Claim）进行授权。其方式与角色策略的配置方式差不多：

```csharp
services.AddAuthorization(options =>
{
    // 创建声明的策略
    options.AddPolicy("EmployeeOnly", policy => policy.RequireClaim("EmployeeNo"));
    options.AddPolicy("Founders", policy =>
        // 给声明添加指定允许值的列表
        policy.RequireClaim("EmployeeNo", "1", "2", "3", "4", "5"));
});
```

#### 配置自定义策略

上面的方式还是比较简单，有时候需要一些更为复杂的方案，比如是否存在某一个声明属性，或者进行一些更高级的判断等，这时候就需要自定义。

比如实现一个查询是否包含某一声明属性：

```csharp
services.AddAuthorization(options =>
{
    // 自定义策略
    options.AddPolicy("HasBirthDay",
        // 实现一个简易的自定义策略
        policy => policy.RequireAssertion(context =>
            context.User.HasClaim(c => c.Type == ClaimTypes.DateOfBirth)));
});
```

##### 创建自定义策略类

这样还是不方便，则可以使用自定义策略类来处理：

```csharp
services.AddAuthorization(options =>
{
    // 继承自 IAuthorizationRequirement 接口的策略
    options.AddPolicy("AtLeast18", policy =>
        // 实现一个至少18岁的策略
        policy.Requirements.Add(new MinimumAgeRequirement(18)));
});
```

创建一个 `MinimumAgeRequirement` 类：

```csharp
/// <summary>
/// 最小年龄策略要求类，它需要实现 IAuthorizationRequirement 接口
/// </summary>
public class MinimumAgeRequirement : IAuthorizationRequirement
{
    public MinimumAgeRequirement(int minAge)
    {
        MinAge = minAge;
    }

    public int MinAge { get; }
}
```

然后创建一个针对我们需要的策略（至少 18 岁）进行处理。创建一个 `MinimumAgeHandle` 类，它继承自 `AuthorizationHandler<TRequirement>` 抽象类，`TRequirement` 是一个泛型，这里应该使用 `MinimumAgeRequirement` 进行替换。

```csharp
/// <summary>
/// 最小年龄的处理类，它需要实现 AuthorizationHandler<TRequirement> 抽象类
/// </summary>
public class MinimumAgeHandler : AuthorizationHandler<MinimumAgeRequirement>
{
    protected override Task HandleRequirementAsync(AuthorizationHandlerContext context,
        MinimumAgeRequirement requirement)
    {
        if (!context.User.HasClaim(c => c.Type == ClaimTypes.DateOfBirth))
        {
            return Task.CompletedTask;
        }

        var dateOfBirth = context.User.FindFirstValue(ClaimTypes.DateOfBirth);
        if (string.IsNullOrWhiteSpace(dateOfBirth)) return Task.CompletedTask;

        var birth = Convert.ToDateTime(dateOfBirth);
        var age = DateTime.Today.Year - birth.Year;
        if (birth > DateTime.Today.AddYears(-age)) age--;

        if (age >= requirement.MinAge)
            // Succeed 方法是验证成功的必要语句
            context.Succeed(requirement);

        return Task.CompletedTask;
    }
}
```

最后需要将操作类在服务中注入：

```csharp
// 注册自定义策略的处理程序
services.AddSingleton<IAuthorizationHandler, MinimumAgeHandler>();
```

然后，我们可以将控制器中的策略改为 `[Authorize(Policy = "AtLeast18")]` 以查看效果。如果令牌中包含年龄，并且年龄大于 18 岁则会正常进入，反之不会。

##### 在策略中使用参数

上面的例子中，年龄是写死的，这样对控制器应用非常不友好，如果要获取很多不同年龄段的权限，需要配置对应多项的策略，这样就很麻烦。好在 .NET 给我们提供了一个 Provider，让我们可以方便配置。

::: tip 示例代码
具体代码可以看 [示例代码](https://github.com/jeremyjone/dotnet-study-road/tree/master/AuthenticationAndAuthorization/AuthenticationAndAuthorization.CustomPolicy)
:::

基于上例，继续创建一个 `MinimumAgeAuthorizeAttribute` 类，它继承自 `AuthorizeAttribute`：

```csharp
/// <summary>
/// 通过将参数映射到一个字符串，用于检索相应的授权策略。
/// </summary>
internal class MinimumAgeAuthorizeAttribute : AuthorizeAttribute
{
    private const string POLICY_PREFIX = "MinimumAge";
    public MinimumAgeAuthorizeAttribute(int age) => Age = age;

    public int Age
    {
        get => int.TryParse(Policy.Substring(POLICY_PREFIX.Length), out var age) ? age : default;
        set => Policy = $"{POLICY_PREFIX}{value.ToString()}";
    }
}
```

写完了它，在控制器就可以使用 `[MinimumAgeAuthorize(18)]` 属性了。

但是还没有对应的处理程序，它并不能真正运行起来。该属性仅仅是收集授权参数为一个特定字符串，我们需要通过程序将该字符串解析为一个年龄数字，然后判断数字是不是符合标准。

创建一个 `MinimumAgePolicyProvider` 类，它继承自 `IAuthorizationPolicyProvider`：

```csharp
/// <summary>
/// 提供最小年龄的授权服务，通过 IAuthorizationPolicyProvider 接口，实现 GetPolicyAsync 方法即可。
/// </summary>
internal class MinimumAgePolicyProvider: IAuthorizationPolicyProvider
{
    private const string POLICY_PREFIX = "MinimumAge";

    public DefaultAuthorizationPolicyProvider FallbackPolicyProvider { get; }

    public MinimumAgePolicyProvider(IOptions<AuthorizationOptions> options)
    {
        // 提供其他授权策略方案，这里使用默认方案
        FallbackPolicyProvider = new DefaultAuthorizationPolicyProvider(options);
    }

    /// <summary>
    /// 获取策略并进行处理
    /// </summary>
    /// <param name="policyName"></param>
    /// <returns></returns>
    public Task<AuthorizationPolicy> GetPolicyAsync(string policyName)
    {
        // 获取策略字符串并解析出年龄
        if (policyName.StartsWith(POLICY_PREFIX, StringComparison.OrdinalIgnoreCase) &&
            int.TryParse(policyName.Substring(POLICY_PREFIX.Length), out var age))
        {
            // 这里其实和 Startup.ConfigureService 中的配置差不多，都是添加一个 Requirement
            var policy = new AuthorizationPolicyBuilder();
            policy.AddRequirements(new MinimumAgeRequirement(age));
            return Task.FromResult(policy.Build());
        }

        //return Task.FromResult<AuthorizationPolicy>(null);
        // 当上述授权流程出现问题（例如获取不到年龄），则使用该备选方案
        return FallbackPolicyProvider.GetPolicyAsync(policyName);
    }

    //public Task<AuthorizationPolicy> GetDefaultPolicyAsync()
    //{
    //    throw new NotImplementedException();
    //}

    //public Task<AuthorizationPolicy> GetFallbackPolicyAsync()
    //{
    //    throw new NotImplementedException();
    //}

    public Task<AuthorizationPolicy> GetDefaultPolicyAsync() => FallbackPolicyProvider.GetDefaultPolicyAsync();

    public Task<AuthorizationPolicy> GetFallbackPolicyAsync() => FallbackPolicyProvider.GetFallbackPolicyAsync();
}
```

最后，将 Handler 和 Provider 都注册到服务中：

```csharp
// 注入授权服务
services.AddSingleton<IAuthorizationHandler, MinimumAgeHandler>();
services.AddSingleton<IAuthorizationPolicyProvider, MinimumAgePolicyProvider>();
```

这样再启动服务器，就可以进行正常而灵活的授权了。