// 配置文件的入口文件
// 文档：https://vuepress.vuejs.org/zh/config/

module.exports = {
  title: "JeremyJone 的文档站",
  description: "jeremyjone document web",

  // base: "/docs/",

  head: [
    ["link", { rel: "icon", href: "/assets/img/logo.png" }],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/darkreader@4.9.32/darkreader.min.js"
      }
    ],
    [
      "script",
      {
        src: "/js/base.js"
      }
    ]
  ],

  themeConfig: {
    // 网站logo
    logo: "/assets/img/logo.png",

    // 页面滚动效果
    smoothScroll: true,

    // 导航链接
    nav: [
      { text: "首页", link: "/" },
      {
        text: "代码相关",
        ariaLabel: "代码相关菜单",
        items: [
          { text: "代码编写规范", link: "/standard/" },
          { text: "手撸代码", link: "/codes/" }
        ]
      },
      {
        text: "文档手册",
        ariaLabel: "文档手册菜单",
        items: [
          {
            text: "使用文档",
            items: [
              { text: "Git 使用文档", link: "/document/git/" },
              { text: "Markdown 使用文档", link: "/document/markdown/" },
              { text: "Vim 使用文档", link: "/document/vim/" },
              { text: "Docker 使用文档", link: "/document/docker/" }
            ]
          },
          {
            text: "学习手册",
            items: [
              { text: "计算机基础", link: "/roadmap/base/" },
              { text: "前端学习之路", link: "/roadmap/frontend/" },
              { text: ".NET 学习之路", link: "/roadmap/dotnetcore/" },
              { text: "Java 学习之路", link: "/roadmap/java/" },
              { text: "Flutter 学习之路", link: "/roadmap/flutter/" },
              { text: "Android 学习之路", link: "/roadmap/android/" }
            ]
          }
        ]
      },

      // 外部链接
      {
        text: "我的博客",
        link: "https://www.jeremyjone.com",
        target: "_blank"
      },
      { text: "个人站", link: "https://www.xiaopangying.com", target: "_blank" }

      // 配置下拉菜单导航，可以深层嵌套
      // {
      //     text: "Languages",
      //     ariaLabel: "Language Menu",
      //     items: [
      //         {text: "Chinese", link: "/"},
      //         {text: "English", link: "/"}
      //     ]
      // }
    ],

    // 侧边栏，自动生成
    // sidebar: "auto",

    // 侧边栏标题深度，最大就是2，也就是可以提取 h2 和 h3
    sidebarDepth: 2,

    // 侧边栏显示所有当前活动页面的标题链接，默认为false
    // displayAllHeaders: true,

    // 当用户滚动页面时，实时更新激活的标题
    // activeHeaderLinks: true,

    // 侧边栏，手动配置，根据目录结构，生成不同的配置
    sidebar: {
      "/standard/": getStandardSideBar(),
      "/document/git/": getGitSideBar(),
      "/document/markdown/": getMarkdownSideBar(),
      "/document/vim/": getVimSideBar(),
      "/document/docker/": getDockerSideBar(),
      "/roadmap/base/": getComputerBaseSideBar(),
      "/roadmap/dotnetcore/": getDotNetSideBar(),
      "/roadmap/java/": getJavaSideBar(),
      "/roadmap/frontend/": getFrontendSideBar(),
      "/roadmap/flutter/": getFlutterSideBar(),
      "/roadmap/android/": getAndroidSideBar(),
      "/codes/": getCodesSideBar()
    },

    // 禁用搜索
    // search: false,

    // 设置最大显示数量
    searchMaxSuggertions: 10,

    // 最后更新时间
    lastUpdated: "最后更新时间",

    // 上/下 一篇，默认值就是true
    nextLinks: true,
    prevLinks: true,

    // 编辑链接
    repo: "jeremyjone/docs",
    repoLabel: "GitHub",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "修改此页面"
  },

  // 更多配置markdown的内容，参看 https://github.com/markdown-it/markdown-it
  markdown: {
    lineNumbers: true,
    html: true,
    xhtmlOut: true,
    // markdown-it-anchor 的选项
    // anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2, 3, 4, 5] },
    extendMarkdown: md => {
      // 使用更多的 markdown-it 插件!
      md.use(require("markdown-it-mark")),
        md.use(require("markdown-it-footnote")),
        md.use(require("markdown-it-mathjax")());
    }
  }
};

function getStandardSideBar() {
  return [
    _GetSubSideBar(
      "代码编写规范",
      "",
      ["", "csharp", "css", "html", "javascript", "python", "vue"],
      false
    )
  ];
}

function getGitSideBar() {
  return [
    _GetSubSideBar("Git 使用文档", "", [""]),
    _GetSubSideBar("GitHub Workflow", "", ["github_workflow"])
  ];
}

function getMarkdownSideBar() {
  return [_GetSubSideBar("Markdown 使用文档", "", [""])];
}

function getVimSideBar() {
  return [_GetSubSideBar("Vim 使用文档", "", [""])];
}

function getDockerSideBar() {
  return [
    _GetSubSideBar("Docker 使用文档", "", [""]),
    _GetSubSideBar("Docker 实战内容", "example", ["npm"])
  ];
}

function getCodesSideBar() {
  return [
    // {
    //   title: "代码库",
    //   collapsable: true,
    //   children: [""]
    // },
    _GetSubSideBar("JavaScript方法", "js", [
      "",
      "array",
      "create",
      "judge",
      "date",
      "colors",
      "html"
    ])
  ];
}

function getDotNetSideBar() {
  return [
    _GetSubSideBar(".NET 学习之路", "", [
      "",
      "basic",
      _GetSubSideBar("依赖注入", "di", ["", "lifetimes", "collections"]),
      _GetSubSideBar("数据库", "db", [
        "",
        _GetSubSideBar("Entity Framework Core", "db/efcore", [
          "",
          "context",
          "model",
          "manage",
          "use"
        ]),
        "other"
      ]),
      _GetSubSideBar("对象映射", "mapper", ["", "automapper"]),
      _GetSubSideBar("认证与授权", "auth", [
        "",
        "example",
        "jwt",
        _GetSubSideBar("IdentityServer4", "auth/is4", [
          "",
          "useef",
          "external-account",
          "intro-config"
        ])
      ]),
      _GetSubSideBar("缓存", "cache", ["", "memory", "distributed"]),
      _GetSubSideBar("日志", "log", ["Serilog", "APM"]),
      _GetSubSideBar("Swagger 文档", "swagger", [""]),
      _GetSubSideBar("微服务", "microservice", [
        _GetSubSideBar("RabbitMQ", "microservice/mq", ["RabbitMQ"])
      ])
    ])
  ];
}

function getJavaSideBar() {
  return [_GetSubSideBar("Java 学习之路", "", [""])];
}

function getFrontendSideBar() {
  return [
    _GetSubSideBar("前端基础", "", [
      _GetSubSideBar("HTML", "html", [""]),
      _GetSubSideBar("CSS", "css", [
        "",
        "selector",
        "box",
        "position",
        _GetSubSideBar("布局", "css/layout", ["", "flex", "grid"]),
        "media"
      ]),
      _GetSubSideBar("JavaScript", "js", [
        "",
        "net",
        "asynchronous",
        "prototype"
      ])
    ]),
    _GetSubSideBar("前端进阶", "advanced", [
      "",
      "principle",
      "performance",
      "css-processor",
      "ts"
    ]),
    _GetSubSideBar("Vue", "vue", [
      _GetSubSideBar("Vue 基础", "vue/basic", [
        "component",
        "lifecycle",
        "template",
        "data-method",
        "computed-watch",
        "class-style-bind",
        "if",
        "for",
        "slot",
        "composition",
        "render"
      ]),
      "mvvm",
      "reactive",
      "virtualdom",
      _GetSubSideBar("Vue 生态", "vue/supports", [
        "router",
        "vuex",
        "cli",
        "test",
        "tools"
      ]),
      "framework",
      _GetSubSideBar("项目模板", "vue/template", ["", "setup-from-0"])
    ]),
    _GetSubSideBar("React", "react", [""])
  ];
}

function getFlutterSideBar() {
  return [_GetSubSideBar("Flutter 学习之路", "", [""])];
}

function getAndroidSideBar() {
  return [_GetSubSideBar("Android 学习之路", "", [""])];
}

function getComputerBaseSideBar() {
  return [
    _GetSubSideBar("计算机基础", "", [
      "",
      _GetSubSideBar("计算机基础", "computer", [""])
    ]),
    _GetSubSideBar("网络基础", "network", [
      _GetSubSideBar("OSI 模型", "network/osi", ["", "layer-4", "layer-7"]),
      _GetSubSideBar("网络协议", "network/protocol", ["tcp", "udp"]),
      _GetSubSideBar("IP 地址", "network/ip", [""]),
      _GetSubSideBar("域名", "network/domain", [""]),
      _GetSubSideBar("万维网", "network/www", ["", "url", "http", "https"])
    ]),
    _GetSubSideBar("算法", "algorithm", [""]),
    _GetSubSideBar("数据结构", "data-structure", [""]),
    _GetSubSideBar("数据库基础", "database", [""])
  ];
}

function _GetSubSideBar(title, path, name, collapsable = true) {
  if (path === "") path = ".";

  return {
    title,
    collapsable: collapsable,
    children: name.map(n => (typeof n === "string" ? `${path}/${n}` : n))
  };
}
