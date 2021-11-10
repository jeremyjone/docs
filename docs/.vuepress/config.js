// 配置文件的入口文件
// 文档：https://vuepress.vuejs.org/zh/config/

module.exports = {
  title: "JeremyJone 的文档站",
  description: "jeremyjone document web",

  base: "/docs/",

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
          { text: "代码库", link: "/codes/" }
        ]
      },
      // { text: "文档手册", ariaLabel: "文档手册菜单", link: "/document/" },
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
              { text: ".NET 学习之路", link: "/roadmap/dotnetcore/" },
              { text: "Java 学习之路", link: "/roadmap/java/" },
              { text: "Vue 学习之路", link: "/roadmap/vue/" },
              { text: "React 学习之路", link: "/roadmap/react/" },
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
      "/roadmap/dotnetcore/": getDotNetSideBar(),
      "/roadmap/java/": getJavaSideBar(),
      "/roadmap/vue/": getVueSideBar(),
      "/roadmap/react/": getReactSideBar(),
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

// function getDocumentSideBar() {
//   return [
//     _GetSubSideBar("Git 使用文档", "", ["git"]),
//     _GetSubSideBar("Markdown 使用文档", "", ["markdown"]),
//     _GetSubSideBar("Vim 使用文档", "", ["vim"]),
//     _GetSubSideBar("Docker 使用文档", "", ["docker"]),
//     // _GetSubSideBar("JzGantt 组件使用文档", "gantt", [
//     //   ""
//     //   // "root",
//     //   // "column",
//     //   // "slider",
//     //   // "common"
//     // ])
//   ];
// }

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
  return [_GetSubSideBar("Docker 使用文档", "", [""])];
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

function getVueSideBar() {
  return [
    _GetSubSideBar("Vue 学习之路", "", [
      "",
      _GetSubSideBar("项目模板", "template", ["", "setup-from-0"])
    ])
  ];
}

function getReactSideBar() {
  return [_GetSubSideBar("React 学习之路", "", [""])];
}

function getFlutterSideBar() {
  return [_GetSubSideBar("Flutter 学习之路", "", [""])];
}

function getAndroidSideBar() {
  return [_GetSubSideBar("Android 学习之路", "", [""])];
}

function _GetSubSideBar(title, path, name, collapsable = true) {
  if (path === "") path = ".";

  return {
    title,
    collapsable: collapsable,
    children: name.map(n => (typeof n === "string" ? `${path}/${n}` : n))
  };
}
