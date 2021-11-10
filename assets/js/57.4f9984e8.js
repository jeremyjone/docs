(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{413:function(t,v,_){"use strict";_.r(v);var s=_(42),e=Object(s.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"生命周期"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),_("p",[t._v("在 "),_("code",[t._v("ASP.NET Core")]),t._v(" 中，可以将服务注册为以下任一生存周期：")]),t._v(" "),_("ul",[_("li",[t._v("Transient（暂时）")]),t._v(" "),_("li",[t._v("Scoped（作用域）")]),t._v(" "),_("li",[t._v("Singleton（单例）")])]),t._v(" "),_("h2",{attrs:{id:"transient（暂时）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#transient（暂时）"}},[t._v("#")]),t._v(" Transient（暂时）")]),t._v(" "),_("p",[_("strong",[t._v("暂时")]),t._v(" 是每次从服务容器进行请求时创建的。这种生存期适合轻量级、 无状态的服务。在处理请求的应用中，在请求结束时会释放暂时服务。")]),t._v(" "),_("p",[t._v("通过 "),_("code",[t._v("AddTransient<>()")]),t._v(" 进行注册。")]),t._v(" "),_("h2",{attrs:{id:"scoped（作用域）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#scoped（作用域）"}},[t._v("#")]),t._v(" Scoped（作用域）")]),t._v(" "),_("p",[_("strong",[t._v("作用域")]),t._v(" 对于 Web 应用，每个客户端请求（连接）就创建一次服务。在处理请求的应用中，在请求结束时会释放有作用域的服务。")]),t._v(" "),_("p",[t._v("通过 "),_("code",[t._v("Add?Scoped<>()")]),t._v(" 进行注册。")]),t._v(" "),_("p",[t._v("默认情况下，"),_("code",[t._v("AddDbContext")]),t._v(" 就是作用域的生命周期。")]),t._v(" "),_("h2",{attrs:{id:"singleton（单例）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#singleton（单例）"}},[t._v("#")]),t._v(" Singleton（单例）")]),t._v(" "),_("p",[_("strong",[t._v("单例")]),t._v(" 最好理解，首次请求时创建，或者在添加注册时直接创建，虽然这样很少使用。")]),t._v(" "),_("p",[t._v("单例服务应该由 DI 容器进行管理其生命周期，不要在代码中提供释放。")]),t._v(" "),_("p",[t._v("通过 "),_("code",[t._v("AddSingleton<>()")]),t._v(" 进行注册。单例服务必须是线程安全的，通常在无状态服务中使用它。")]),t._v(" "),_("h2",{attrs:{id:"注意事项"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),_("p",[t._v("需要注意的是，因为生命周期不一致，所以不要：")]),t._v(" "),_("ul",[_("li",[t._v("从"),_("strong",[t._v("单例")]),t._v("服务中解析"),_("strong",[t._v("作用域")]),t._v("或"),_("strong",[t._v("暂时")]),t._v("服务")])]),t._v(" "),_("p",[t._v("因为这样可能会导致服务处于不正确的状态。你可以：")]),t._v(" "),_("ul",[_("li",[t._v("从"),_("strong",[t._v("作用域")]),t._v("或"),_("strong",[t._v("暂时")]),t._v("服务中解析"),_("strong",[t._v("单例")]),t._v("服务")])])])}),[],!1,null,null,null);v.default=e.exports}}]);