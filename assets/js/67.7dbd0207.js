(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{423:function(t,s,n){"use strict";n.r(s);var a=n(42),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"dbcontext-的配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dbcontext-的配置"}},[t._v("#")]),t._v(" DbContext 的配置")]),t._v(" "),n("p",[n("code",[t._v("DbContext")]),t._v(" 实例表示与数据库的会话，可用于查询和保存实体实例。"),n("code",[t._v("DbContext")]),t._v(" 是工作单元和存储库模式的组合。")]),t._v(" "),n("p",[t._v("通常，你将创建一个从 "),n("code",[t._v("DbContext")]),t._v(" 派生的类，并在 "),n("code",[t._v("DbSet<TEntity>")]),t._v(" 模型中包含每个实体的属性。如果 "),n("code",[t._v("DbSet<TEntity>")]),t._v(" 属性具有公共资源库，则在创建派生上下文的实例时，它们会自动初始化。")]),t._v(" "),n("p",[t._v("重写 "),n("code",[t._v("OnConfiguring(DbContextOptionsBuilder)")]),t._v(" 方法以配置要用于上下文的数据库（和其他选项）。或者，如果你想要在上下文中以外部方式而不是内联方式执行配置，则可以使用 "),n("code",[t._v("DbContextOptionsBuilder<TContext>")]),t._v("（或 "),n("code",[t._v("DbContextOptionsBuilder")]),t._v("）外部创建 "),n("code",[t._v("DbContextOptions<TContext>")]),t._v("（或 "),n("code",[t._v("DbContextOptions")]),t._v("）的实例，然后将其传递给的基本构造函数 DbContext。")]),t._v(" "),n("p",[t._v("通过在派生上下文的属性中找到的实体类上运行一组约定来发现模型 "),n("code",[t._v("DbSet<TEntity>")]),t._v("。若要进一步配置由约定发现的模型，可以重写 "),n("code",[t._v("OnModelCreating(ModelBuilder)")]),t._v(" 方法。")]),t._v(" "),n("h2",{attrs:{id:"dbcontext-的生命周期"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dbcontext-的生命周期"}},[t._v("#")]),t._v(" DbContext 的生命周期")]),t._v(" "),n("p",[t._v("DbContext 的生命周期从创建实例时开始，并在释放实例时结束。该实例用于单个工作单元，在许多 Web 应用程序中，每个 HTTP 请求都对应于单个工作单元。这意味着 DbContext 实例的生存期通常很短。")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("默认情况下，"),n("code",[t._v("AddDbContext")]),t._v(" 就是作用域的生命周期。")])]),t._v(" "),n("h2",{attrs:{id:"asp-net-core-注入-dbcontext"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#asp-net-core-注入-dbcontext"}},[t._v("#")]),t._v(" ASP.NET Core 注入 DbContext")]),t._v(" "),n("p",[t._v("通过依赖注入，在 "),n("code",[t._v("Startup.cs")]),t._v(" 中通过 "),n("code",[t._v("AddDbContext")]),t._v(" 可以将 EF Core 添加到配置中：")]),t._v(" "),n("div",{staticClass:"language-csharp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token return-type class-name"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConfigureServices")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IServiceCollection")]),t._v(" services"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    services"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token generic-method"}},[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddDbContext")]),n("span",{pre:!0,attrs:{class:"token generic class-name"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ApplicationDbContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用 Sql Server")]),t._v("\n        options "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("UseSqlServer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ConnectionStrings"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("p",[t._v("此配置将一个继承自 "),n("code",[t._v("DbContext")]),t._v(" 的 "),n("code",[t._v("ApplicationDbContext")]),t._v(" 子类注册为应用程序中的作用域服务，它必须具有 "),n("code",[t._v("DbContextOptions<ApplicationDbContext>")]),t._v(" 参数的公共构造函数：")]),t._v(" "),n("div",{staticClass:"language-csharp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApplicationDbContext")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token type-list"}},[n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DbContext")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ApplicationDbContext")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DbContextOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ApplicationDbContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("base")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])]),n("p",[t._v("然后在控制器等使用的地方可以通过构造器注入：")]),t._v(" "),n("div",{staticClass:"language-csharp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyController")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApplicationDbContext")]),t._v(" _context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("MyController")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApplicationDbContext")]),t._v(" context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        _context "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br")])]),n("h2",{attrs:{id:"dbcontextoptions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dbcontextoptions"}},[t._v("#")]),t._v(" DbContextOptions")]),t._v(" "),n("p",[t._v("要使用 "),n("code",[t._v("DbContext")]),t._v("，通常会重写 "),n("code",[t._v("OnConfiguring(DbContextOptionsBuilder)")]),t._v(" 或使用 "),n("code",[t._v("DbContextOptionsBuilder")]),t._v(" 来创建此类的实例，而不是在应用程序代码中直接构造。")]),t._v(" "),n("p",[t._v("所有 "),n("code",[t._v("DbContext")]),t._v(" 配置的起始点都是 "),n("code",[t._v("DbContextOptionsBuilder")]),t._v("。可以通过三种方式获取此生成器：")]),t._v(" "),n("ul",[n("li",[t._v("在 "),n("code",[t._v("AddDbContext")]),t._v(" 和相关方法中")]),t._v(" "),n("li",[t._v("在 "),n("code",[t._v("OnConfiguring")]),t._v(" 中")]),t._v(" "),n("li",[t._v("使用 "),n("code",[t._v("new")]),t._v(" 显式构造")])]),t._v(" "),n("p",[n("code",[t._v("DbContextOptionsBuilder")]),t._v(" 提供了一个用于配置的简单 API "),n("code",[t._v("DbContextOptions")]),t._v("。数据库通常在此对象上定义扩展方法，该方法允许您将数据库连接配置用于上下文的选项。")]),t._v(" "),n("p",[t._v("无论生成器来自何处，都可以应用相同的配置。此外，无论如何构造上下文，都将始终调用 "),n("code",[t._v("OnConfiguring")]),t._v("。这意味着即使使用 "),n("code",[t._v("AddDbContext")]),t._v("，"),n("code",[t._v("OnConfiguring")]),t._v(" 也可以用于执行其它配置。")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("每个 "),n("code",[t._v("DbContext")]),t._v(" 实例都必须配置为使用一个且仅一个数据库提供程序。这表示多个数据库可以分别配置，但每个 DbContext 子类都必须对应一个数据库实例。")])]),t._v(" "),n("h2",{attrs:{id:"了解更多"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#了解更多"}},[t._v("#")]),t._v(" 了解更多")]),t._v(" "),n("p",[t._v("了解更多内容，可以参考 "),n("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/ef/core/dbcontext-configuration/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),n("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);