(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{387:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"外部身份验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#外部身份验证"}},[t._v("#")]),t._v(" 外部身份验证")]),t._v(" "),a("p",[t._v("基于 OAuth2 的特性，我们可以轻松通过外部账户进行登录。")]),t._v(" "),a("p",[t._v("外部账户登录的好处：")]),t._v(" "),a("ul",[a("li",[t._v("方便用户操作。")]),t._v(" "),a("li",[t._v("将管理登录流程的许多复杂性转移到了第三方。")])]),t._v(" "),a("h2",{attrs:{id:"添加一个预定义的身份验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加一个预定义的身份验证"}},[t._v("#")]),t._v(" 添加一个预定义的身份验证")]),t._v(" "),a("p",[t._v("IS4 在 ASP.NET Core 框架的基础上提供了更丰富和完整的预定义外部登录配置。")]),t._v(" "),a("h3",{attrs:{id:"配置一个-microsoft-身份验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置一个-microsoft-身份验证"}},[t._v("#")]),t._v(" 配置一个 Microsoft 身份验证")]),t._v(" "),a("p",[t._v("下面通过创建一个使用 Microsoft 身份进行验证的最小实例来介绍外部验证过程。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("示例代码")]),t._v(" "),a("p",[t._v("具体代码可以看 "),a("a",{attrs:{href:"https://github.com/jeremyjone/dotnet-study-road/tree/master/AuthenticationAndAuthorization/AuthenticationAndAuthorization.ExternalAccount",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例代码"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("使用命令创建一个全新项目：")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("dotnet new is4aspid --name ExternailAccount\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("会得到一个完整使用 IS4 的项目，而且已经内置好了 Google 的外部认证。")]),t._v(" "),a("p",[t._v("因为我们需要的是 Microsoft 的身份认证，所以需要添加包：")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Microsoft.AspNetCore.Authentication.MicrosoftAccount（3.1.5）\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("下载时需要注意版本。")])]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("Startup.cs")]),t._v(" 配置中的认证服务后面追加如下内容：")]),t._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[t._v("services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddAuthentication")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddGoogle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SignInScheme "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" IdentityServerConstants"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ExternalCookieAuthenticationScheme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// register your IdentityServer with Google at https://console.developers.google.com")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// enable the Google+ API")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// set the redirect URI to https://localhost:5001/signin-google")]),t._v("\n        options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ClientId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"copy client ID from Google here"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ClientSecret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"copy client secret from Google here"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加 Microsoft 认证")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddMicrosoftAccount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Microsoft"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SignInScheme "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" IdentityServerConstants"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ExternalCookieAuthenticationScheme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ClientId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"microsoft_client_id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ClientSecret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"microsoft_client_secret"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br")])]),a("p",[t._v("运行项目，已经可以看到登录按钮。")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/assets/roadmap/dotnet/is4_external_ms.png"),alt:"is4_external_ms"}}),t._v(" "),a("p",[t._v("如果你的 Id 和 Secret 配置正确，现在已经可以正常登录了。没错，就是这么简单的使用。但是如果没有配置相应的 Id 和 Secret，没关系，按照下面步骤操作即可。")]),t._v(" "),a("h3",{attrs:{id:"创建一个新的-microsoft-身份认证客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建一个新的-microsoft-身份认证客户端"}},[t._v("#")]),t._v(" 创建一个新的 Microsoft 身份认证客户端")]),t._v(" "),a("p",[t._v("打开 "),a("a",{attrs:{href:"https://go.microsoft.com/fwlink/?linkid=2083908",target:"_blank",rel:"noopener noreferrer"}},[t._v("应用注册页面"),a("OutboundLink")],1),t._v("，这是 Microsoft 的 Azure 门户，我们开发的客户端需要在这里注册。登录 Microsoft 账户后即可看到主页面。")]),t._v(" "),a("h4",{attrs:{id:"注册客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册客户端"}},[t._v("#")]),t._v(" 注册客户端")]),t._v(" "),a("ul",[a("li",[t._v("选择左上角的 "),a("strong",[t._v("新注册")]),t._v("。")])]),t._v(" "),a("img",{attrs:{src:t.$withBase("/assets/roadmap/dotnet/is4_external_ms_azurepage.png"),alt:"is4_external_ms_azurepage"}}),t._v(" "),a("ul",[a("li",[t._v("输入 “名称”。")]),t._v(" "),a("li",[t._v("为 "),a("strong",[t._v("支持的账户类型")]),t._v(" 选择一个选项（如果不是组织，一定选择下面两项包含个人的）。")]),t._v(" "),a("li",[t._v("在 "),a("strong",[t._v("重定向 URI")]),t._v(" 中输入开发的 URL 并追加 "),a("code",[t._v("/signin-microsoft")]),t._v("。")])]),t._v(" "),a("img",{attrs:{src:t.$withBase("/assets/roadmap/dotnet/is4_external_ms_azure_register.png"),alt:"is4_external_ms_azure_register"}}),t._v(" "),a("ul",[a("li",[t._v("最后点击 "),a("strong",[t._v("注册")]),t._v(" 即可。")])]),t._v(" "),a("h4",{attrs:{id:"添加秘钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加秘钥"}},[t._v("#")]),t._v(" 添加秘钥")]),t._v(" "),a("ul",[a("li",[t._v("选择左侧的 "),a("strong",[t._v("证书和密码")]),t._v("。")])]),t._v(" "),a("img",{attrs:{src:t.$withBase("/assets/roadmap/dotnet/is4_external_ms_azure_registed.png"),alt:"is4_external_ms_azure_registed"}}),t._v(" "),a("ul",[a("li",[t._v("在 "),a("strong",[t._v("客户端密码")]),t._v(" 下面选择 "),a("strong",[t._v("新的客户端密码")]),t._v("。")]),t._v(" "),a("li",[t._v("添加客户端密码的说明并选择有效期，然后点击 "),a("strong",[t._v("添加")]),t._v("。")]),t._v(" "),a("li",[t._v("复制 "),a("strong",[t._v("客户端秘钥")]),t._v(" 的 "),a("strong",[t._v("值")]),t._v(" 与 "),a("strong",[t._v("ID")]),t._v("。（一定要复制 "),a("strong",[t._v("值")]),t._v("，离开了页面再打开就不能查看和复制该值了）")])]),t._v(" "),a("img",{attrs:{src:t.$withBase("/assets/roadmap/dotnet/is4_external_ms_azure_create_secret.png"),alt:"is4_external_ms_azure_create_secret"}}),t._v(" "),a("h3",{attrs:{id:"登录测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#登录测试"}},[t._v("#")]),t._v(" 登录测试")]),t._v(" "),a("p",[t._v("有了 ID 和秘钥，添加到我们的代码中，再次运行，已经可以登录该客户端了。")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/assets/roadmap/dotnet/is4_external_ms_azure_login.png"),alt:"is4_external_ms_azure_login"}}),t._v(" "),a("h2",{attrs:{id:"执行过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行过程"}},[t._v("#")]),t._v(" 执行过程")]),t._v(" "),a("h3",{attrs:{id:"登录过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#登录过程"}},[t._v("#")]),t._v(" 登录过程")]),t._v(" "),a("p",[t._v("整个外部验证的流程是从点击登录按钮开始的。")]),t._v(" "),a("p",[t._v("1、看 "),a("code",[t._v("Login.cshtml")]),t._v(" 页面的代码，点击按钮后会定向到 "),a("code",[t._v("Login")]),t._v(" URI，因为是配置的外部登录信息，所以会包含对应的 "),a("code",[t._v("scheme")]),t._v(" 和 "),a("code",[t._v("returnUrl")]),t._v(" 信息，这是页面写好的。")]),t._v(" "),a("p",[t._v("2、当控制器收到请求之后，检查这是一个外部验证请求，于是跳转到 "),a("code",[t._v("Challenge")]),t._v(" Action 中，\n它会触发身份验证处理程序，通过 "),a("code",[t._v("HttpContext")]),t._v(" 中的 "),a("code",[t._v("ChallengeAsync")]),t._v(" 或者是 MVC 项目中的 "),a("code",[t._v("ChallengeResult")]),t._v(" 来调用外部身份验证处理程序。")]),t._v(" "),a("p",[t._v("3、回调接收，通过定义好的 "),a("code",[t._v("RedirectUri")]),t._v("，可以在完成验证之后调转到指定接收器。剩下的事情就是在回调方法中添加需要的内容即可。典型的任务如：")]),t._v(" "),a("ul",[a("li",[t._v("检查外部提供者返回的身份")]),t._v(" "),a("li",[t._v("决定如何与该用户进行交互，新、老用户的区别等")]),t._v(" "),a("li",[t._v("新用户如何才被允许")]),t._v(" "),a("li",[t._v("是否需要创建本地账户并关联到外部账户")]),t._v(" "),a("li",[t._v("存储需要保留的外部声明")]),t._v(" "),a("li",[t._v("删除临时 Cookie")]),t._v(" "),a("li",[t._v("登录用户")])]),t._v(" "),a("h3",{attrs:{id:"登出过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#登出过程"}},[t._v("#")]),t._v(" 登出过程")]),t._v(" "),a("p",[t._v("用户登出时，通常被重定向至外部程序进行登出，但是并不是所有外部程序都支持登出，这取决于它们的协议和特性。")]),t._v(" "),a("p",[t._v("要检测用户必须重定向到外部标识提供者以进行登出，通常可以使用 IdentityServer 上发布到 Cookie 中的 idp 声明。声明中设置的值是对应的认证中间件的 AuthenticationScheme。在登出时，会咨询该声明以了解是否需要外部登出。")]),t._v(" "),a("p",[t._v("由于正常的登出工作流已经需要清理和状态管理，将用户重定向到外部身份提供程序是有问题的。然后，在 IdentityServer 上完成正常的登出和清理过程的唯一方法是，在用户注销后，从外部标识提供者请求将用户重定向回 IdentityServer。")]),t._v(" "),a("p",[t._v("登出后撤销 IdentityServer 的身份验证的 Cookie，然后重定向到请求注销后外部程序的重定向链接。登出后应该维护必要的登出状态，要在外部程序登出后重定向回 IdentityServer，当使用 SignOut 时，RedirectUri 应该在 AuthenticationProperties 中使用：")]),t._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token attribute"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpPost")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token attribute"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ValidateAntiForgeryToken")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("Task"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("IActionResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Logout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LogoutInputModel")]),t._v(" model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TriggerExternalSignout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// build a return URL so the upstream provider will redirect back")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// to us after the user has logged out. this allows us to then")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// complete our single sign-out processing.")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Action")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Logout"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" logoutId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LogoutId "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this triggers a redirect to the external provider for sign-out")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SignOut")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("AuthenticationProperties")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" RedirectUri "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ExternalAuthenticationScheme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br")])]),a("h3",{attrs:{id:"cookie-的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie-的作用"}},[t._v("#")]),t._v(" Cookie 的作用")]),t._v(" "),a("p",[t._v("在上面示例中，我们的 "),a("code",[t._v("SignInScheme")]),t._v(" 是 Cookie 的方式：")]),t._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SignInScheme "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" IdentityServerConstants"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ExternalCookieAuthenticationScheme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("该 Cookie 将临时存储外部身份验证的结果，这是必要的，因为在过程完成之前，通常都会设计几个重定向。鉴于这是一种通常的做法，IS4 专门为一些外部程序注册了 Cookie 处理程序，通过上面代码的常量表示。")]),t._v(" "),a("p",[t._v("但是也可以使用自定义的方式：")]),t._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[t._v("services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddAuthentication")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddCookie")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CustomCookieScheme"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddMicrosoftAccount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Microsoft"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SignInScheme "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CustomCookieScheme"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ClientId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"microsoft_client_id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ClientSecret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"microsoft_client_secret"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("对于特殊情况，还可以使外部 Cookie 机制短路，直接将外部用户转发到主 Cookie 处理程序，来确保外部标识源进行正确的声明转换。")])])}),[],!1,null,null,null);s.default=e.exports}}]);