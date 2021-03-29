(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{402:function(s,t,a){"use strict";a.r(t);var n=a(42),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),a("h2",{attrs:{id:"查询数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询数据"}},[s._v("#")]),s._v(" 查询数据")]),s._v(" "),a("p",[s._v("Entity Framework Core 使用语言集成查询 (LINQ) 来查询数据库中的数据。")]),s._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" db "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[s._v("UserDbContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取全部用户")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" users "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ToList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取第一个用户")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" user1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("FirstOrDefault")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取指定 Id 的用户")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" user2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Single")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("u "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取指定条件的用户")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" users2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Where")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("u "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("DepartId "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ToList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h3",{attrs:{id:"加载数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加载数据"}},[s._v("#")]),s._v(" 加载数据")]),s._v(" "),a("p",[s._v("Entity Framework Core 允许你在模型中使用导航属性来加载相关实体。有三种常见的 O/RM 模式可用于加载关联数据。")]),s._v(" "),a("h4",{attrs:{id:"预先加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预先加载"}},[s._v("#")]),s._v(" 预先加载")]),s._v(" "),a("p",[s._v("预先加载表示从数据库中加载关联数据，作为初始查询的一部分。可以使用 "),a("code",[s._v("Include")]),s._v(" 方法来指定要包含在查询结果中的关联数据。")]),s._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" db "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[s._v("UserDbContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" users "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Users\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Include")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("u "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" Username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ToList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("进而还可以使用 "),a("code",[s._v("ThenInclude")]),s._v(" 来进一步获取更深一层的关联数据。也可以将多个级别和多个根的关联数据合并到一起进行查询 "),a("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/ef/core/querying/related-data/eager#including-multiple-levels",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("h4",{attrs:{id:"显式加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#显式加载"}},[s._v("#")]),s._v(" 显式加载")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/ef/core/querying/related-data/explicit",target:"_blank",rel:"noopener noreferrer"}},[s._v("显式加载"),a("OutboundLink")],1),s._v(" 表示稍后从数据库中显式加载关联数据。")]),s._v(" "),a("h4",{attrs:{id:"延迟加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#延迟加载"}},[s._v("#")]),s._v(" 延迟加载")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/ef/core/querying/related-data/lazy",target:"_blank",rel:"noopener noreferrer"}},[s._v("延迟加载"),a("OutboundLink")],1),s._v(" 表示在访问导航属性时，从数据库中以透明方式加载关联数据。")]),s._v(" "),a("h3",{attrs:{id:"使用原生-sql-查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用原生-sql-查询"}},[s._v("#")]),s._v(" 使用原生 SQL 查询")]),s._v(" "),a("p",[s._v("EF Core 支持使用原生 SQL 查询数据，当 LINQ 查询效率低下时，可以通过原生 SQL 查询。")]),s._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" users "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("FromSqlRaw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SELETE * FROM users"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ToList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("使用原生 SQL，需要注意防范注入攻击。")])]),s._v(" "),a("h2",{attrs:{id:"保存数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#保存数据"}},[s._v("#")]),s._v(" 保存数据")]),s._v(" "),a("p",[s._v("在上下文中有 "),a("code",[s._v("SaveChanges()")]),s._v(" 和 "),a("code",[s._v("SaveChangesAsync()")]),s._v(" 方法，根据具体情况使用。")]),s._v(" "),a("p",[s._v("当上下文和实体类中添加、修改和删除数据时，调用上面方法进行保存即可。")]),s._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" db "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[s._v("UserDbContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" user "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[s._v("User")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        Id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        DepartId "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        Username "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jeremyjone"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        Nickname "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Jeremy Jone"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SaveChanges")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"了解更多"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#了解更多"}},[s._v("#")]),s._v(" 了解更多")]),s._v(" "),a("p",[s._v("了解更多内容，参考 "),a("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/ef/core/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);