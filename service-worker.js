if(!self.define){let e,a={};const s=(s,d)=>(s=new URL(s+".js",d).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(d,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let i={};const f=e=>s(e,c),o={module:{uri:c},exports:i,require:f};a[c]=Promise.all(d.map((e=>o[e]||f(e)))).then((e=>(r(...e),i)))}}define(["./workbox-ebf2f394"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.439caf23.css",revision:"9f5d7505de44ca4177a7b375d4edf54f"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/136.376688ef.js",revision:"5f9120cc49cd07ab93f2cf3ec9442b47"},{url:"assets/js/137.03f0c1d1.js",revision:"15a63b4e0ceaf4c4bd61c75f02295598"},{url:"assets/js/138.6a81a447.js",revision:"00cd567a2a7ed5bfd36ee4b83e2fcb92"},{url:"assets/js/139.5c3cc72f.js",revision:"b6b14ccc9d1473f671cea5855eabd7c7"},{url:"assets/js/140.ea9e46d1.js",revision:"7f88dca3f34826436891629a6f48c6b1"},{url:"assets/js/141.3ca74c43.js",revision:"5fdd7330c23e164a0e337f0ec91a7634"},{url:"assets/js/142.ffeba981.js",revision:"5788ca13388b894d8340713a0cf0a289"},{url:"assets/js/143.cb51fea9.js",revision:"5e69c06611fc404b0ef10abb27481eff"},{url:"assets/js/app.ad3e6af6.js",revision:"066a08604c183a6a02371d8a6a2702b9"},{url:"assets/js/layout-Blog.1ed60b76.js",revision:"80b3fbf93f55e0b530cfc32e96ace5bc"},{url:"assets/js/layout-Layout.f3e9cb51.js",revision:"a1ec8439042bd2daeba4549b5083c02b"},{url:"assets/js/layout-NotFound.5a99754f.js",revision:"96e231421bba443bb793653f37dd2fbf"},{url:"assets/js/layout-Slide.6887e3cd.js",revision:"edcf22ea44ce434057e400af4ecbc83e"},{url:"assets/js/page--69fb9c74.f235ad3e.js",revision:"018e9020db0f8d72720a380e522ab5ad"},{url:"assets/js/page-Android学习之路.65748a92.js",revision:"189f3153d4c3cf28a766f9c299edab8f"},{url:"assets/js/page-ASPNETCore开发者学习路线图.2bbaaea9.js",revision:"210f2ebce92f5470d887aedea29f62c1"},{url:"assets/js/page-AutoMapper.14e0e505.js",revision:"f48e8261a65d52836168e25d8f8c7354"},{url:"assets/js/page-C.e65c330d.js",revision:"51d052c9cbc28828ff1136a3d09dc0a5"},{url:"assets/js/page-class与style的绑定.27d7da72.js",revision:"dd25be1baa7577c59682cdd346f76297"},{url:"assets/js/page-CSS基础.a78cb3cb.js",revision:"a563d3fe724a5bf3c94a5d9d7a4585cd"},{url:"assets/js/page-CSS规范.1ce19eb4.js",revision:"1503161c5d1ecaa8111223d66be17138"},{url:"assets/js/page-CSS预处理器.f0073b03.js",revision:"7b553d1b09914f6aeb607d7bd9b5e219"},{url:"assets/js/page-DbContext的配置.399d35cc.js",revision:"0dc9052cbe4c2d32757a0b2870d08ee6"},{url:"assets/js/page-Devtools.f4d64a28.js",revision:"a0e5e190e68b8c002f345c37609561cc"},{url:"assets/js/page-Docker使用文档.a41a1f83.js",revision:"fc5226206e6a6a5c623e0aae9d3b406d"},{url:"assets/js/page-Docker快速搭建NPM服务器.75c25865.js",revision:"ed007c33591b79f928b7dff852978750"},{url:"assets/js/page-Emmet使用文档.a0c93565.js",revision:"2283d8dd2bd530fee6155ee64fda85ce"},{url:"assets/js/page-ExamplePage.637ba383.js",revision:"da78e8180f7fdc23f3280d56c2f0c921"},{url:"assets/js/page-Flutter学习之路.6e4d6b01.js",revision:"2ba0509516cbd01dc6954e7609746940"},{url:"assets/js/page-GitHubPagesaction配置.4b1e98b3.js",revision:"23824f7cdcfbb07eab68ecf7c76e7af0"},{url:"assets/js/page-GIT命令.84c04c33.js",revision:"f689edad9b3f53a93f6487f7e9177c6b"},{url:"assets/js/page-Home.8793ac6e.js",revision:"1af0dfe8d79f9e5f1c0e42cab91c9b95"},{url:"assets/js/page-HTML基础.5a8eeb30.js",revision:"941aae6ff87bfecff9bdf4524f8cac82"},{url:"assets/js/page-HTML处理方法.af4daad6.js",revision:"764782902eca020723e13afb2c3915db"},{url:"assets/js/page-HTML规范.3d0f18e9.js",revision:"93a66092c64544826b4ddbfefcedc89f"},{url:"assets/js/page-HTTP.a3629915.js",revision:"2643f34fdf073ee3c431b653c98b3f67"},{url:"assets/js/page-HTTPS.7dd87947.js",revision:"bf3f9a013b75cd41330b2f53909f360a"},{url:"assets/js/page-IdentityServer4的使用.a0a42e1d.js",revision:"4afe294eeaa8cb13b8c302aae7960343"},{url:"assets/js/page-IP网际协议.ab2a4a8a.js",revision:"ffe4a7022e2b018ec8189d88659945e7"},{url:"assets/js/page-JavaScript基础.d0b3c196.js",revision:"46251303c160401f8fe508e13bdb7f6b"},{url:"assets/js/page-JavaScript开发规范.ec417ee3.js",revision:"0959066dc9d6b070ab130dce224e6e45"},{url:"assets/js/page-Java学习之路.e3dd4e48.js",revision:"8eac727d031c7fb74b0ba4f8a4e4c3b3"},{url:"assets/js/page-JWT.d96b1a7f.js",revision:"bdc41e9962acece6bfa8360d0a090acb"},{url:"assets/js/page-Markdown语法.2e094278.js",revision:"40fa5005a26cfddd24985572f5199d96"},{url:"assets/js/page-MVVM.e558ce70.js",revision:"3280708fe4e9122d3cb792f2fca88660"},{url:"assets/js/page-npm使用.9ba6895f.js",revision:"a6e908c283286af47027725165a41fdc"},{url:"assets/js/page-OSI模型.41ba0c66.js",revision:"affe07b751837f9b4b524da53e5058cf"},{url:"assets/js/page-Proxy与Reflect.225a57a9.js",revision:"2395f8817219bb8c6e850525cf839aca"},{url:"assets/js/page-Python开发规范.762b1c90.js",revision:"5b27807996638db607a9c00c995c81e4"},{url:"assets/js/page-RabbitMQ的使用.7703ea87.js",revision:"f4ace8b5291ebee59a39abb571062840"},{url:"assets/js/page-React学习之路.3ea5b29d.js",revision:"9f290ecdd726a2aa2c15e0505b5bc8a5"},{url:"assets/js/page-Serilog的使用.5c906bd0.js",revision:"aea2d5cc6d47d29fec73e470aba64b7e"},{url:"assets/js/page-Swagger文档的使用.a7331905.js",revision:"3ff6357b6aac5c9d098d4eb19a36c2de"},{url:"assets/js/page-TCP协议.26e4aeb1.js",revision:"0dc22a77472ff7bd36361bc435995af0"},{url:"assets/js/page-this关键字.36ec4b3c.js",revision:"c6202735d094c2dd99ee8ee3227953fb"},{url:"assets/js/page-TypeScript.0dd97fa4.js",revision:"a0083cac602ec6d716c9f68f035e24ee"},{url:"assets/js/page-UDP协议.79ccb002.js",revision:"c3cdd94a66bb6a8dc5c55234df6111da"},{url:"assets/js/page-UI框架.4aeb2dcc.js",revision:"67d89b37f8ced0c8a363299858824348"},{url:"assets/js/page-URL.65982a82.js",revision:"4abc7b4f9ca579a9fb0a84a2c52822dc"},{url:"assets/js/page-Vim使用说明.be0afc3f.js",revision:"b1b9b72ac26689fb2cdaae454fc3f1a1"},{url:"assets/js/page-VueCli.0c144e33.js",revision:"2a176b730d5ebd7d179a8f8f16d26778"},{url:"assets/js/page-VueRouter.9367622c.js",revision:"d5431bec07ed4fa1f3fcc6f309f4ede3"},{url:"assets/js/page-VueTestUtils.d72b4acb.js",revision:"047566ddefd544e4bcf4fbb11370afd2"},{url:"assets/js/page-Vuex.2a15df81.js",revision:"8b53fbd175d0c6e2d9ef8580fbdc5f78"},{url:"assets/js/page-Vue学习之路.fa685f41.js",revision:"c90707b3753d00ffff4740ee5a796189"},{url:"assets/js/page-Vue开发规范.1116e8bd.js",revision:"9488acc67e694a20431aa42e367d1f25"},{url:"assets/js/page-七层模型.593db85e.js",revision:"8e856d5a1c13236fb1ae9700b8fea4f8"},{url:"assets/js/page-万维网.49c66f1d.js",revision:"40fc37750ed710346bdb4e97f542be84"},{url:"assets/js/page-从0搭建项目模板（vue3）.70fdb578.js",revision:"46635e520681546d82314bce9acb0d56"},{url:"assets/js/page-代码书写规范总纲.ce578dd2.js",revision:"8a34f323ed9cc7860b418f99ee62ff42"},{url:"assets/js/page-使用.b50c1913.js",revision:"873360af51ea929252c0fbced44cdcd7"},{url:"assets/js/page-使用项目模板.cab47af6.js",revision:"8704940e818d5416ab0aff7fb869280b"},{url:"assets/js/page-入门.7575393d.js",revision:"8cb8730d169657a4ecf0d0ec3c234e52"},{url:"assets/js/page-其他映射工具.c98c125d.js",revision:"303f2d22caf471df75f14b20f1355dc8"},{url:"assets/js/page-内存缓存.e5b4c39e.js",revision:"6396a5b98bfe7e48a8371acd19c4c77c"},{url:"assets/js/page-分布式缓存.9fcb73c2.js",revision:"1f0d1ab0fa8e8fab27e3939a3040880e"},{url:"assets/js/page-列组件JGanttColumn.2539bf85.js",revision:"638ad2861b7f72ae54c6cc3acf22bdc1"},{url:"assets/js/page-判断方法.83dfccc1.js",revision:"0c03e2ac513407b19b9650beca2f6495"},{url:"assets/js/page-前端学习之路.e6952d04.js",revision:"7014475d04a44e9af92027437d5dab99"},{url:"assets/js/page-前端进阶.93de3af1.js",revision:"ae350129630a6e92d1c19c9715b19dfd"},{url:"assets/js/page-包管理器.ca5a8d3e.js",revision:"ba0cc2c93982b06f81d8f3c981ff30cf"},{url:"assets/js/page-原型和原型链详解.8e20dad5.js",revision:"d3be798c4bb7e7bc4b8f264dab583993"},{url:"assets/js/page-原理部分.ec90f54b.js",revision:"71ac895fc17e1031c0e0c5892ace5cac"},{url:"assets/js/page-响应式与媒体查询.6c489639.js",revision:"dcc0b4d30d0a34b8487b37e386f64594"},{url:"assets/js/page-响应式的原理.2f446e9d.js",revision:"a7e6fae29221e345a0c73bc11221e8d3"},{url:"assets/js/page-四层模型.8eff63ce.js",revision:"d48443cba6a2ffcdc7241c99b6141f4b"},{url:"assets/js/page-在ASPNET中使用授权与认证.e3181ff7.js",revision:"7e5f870fad3a173ff540c3f7f810c337"},{url:"assets/js/page-域名.72e6ce1a.js",revision:"f29563a4aaf95384fc6b521be30f189d"},{url:"assets/js/page-基础知识.18cec895.js",revision:"c6a9c949357038dc5eba6603570cacd8"},{url:"assets/js/page-处理日期方法.1d11eb23.js",revision:"b690a9b032530153ef8cca2e8740baf7"},{url:"assets/js/page-处理颜色的方法.3e747878.js",revision:"8d83c9e1e86427b77407c68a71d8e93d"},{url:"assets/js/page-外部身份验证.3a5c832b.js",revision:"1c20e2a16f652a7cb19ae05c64440b1d"},{url:"assets/js/page-学习路线.cd9f2bf0.js",revision:"ae4741639345951a5e3b8f3e7bdcf2da"},{url:"assets/js/page-定位.ae8a8b3a.js",revision:"70cf08fd6d6349fb4929e0d05e928ec8"},{url:"assets/js/page-布局.3825fa61.js",revision:"5e219fb5205c89b66e7c53fd30a29a84"},{url:"assets/js/page-常用的转换方法.f30635ed.js",revision:"7281ffc250530c754bb64deaec95fece"},{url:"assets/js/page-应用性能监控系统.6fa03e03.js",revision:"d40abba5259973a9954e896e59e94f96"},{url:"assets/js/page-异步编程.915d2c4e.js",revision:"9cf70d3f95ba1884fdd37993caf68ece"},{url:"assets/js/page-弹性布局（Flexbox）.c3bd6887.js",revision:"31b3341048bdf5a74daffd3643f99645"},{url:"assets/js/page-循环渲染.f227709a.js",revision:"d50632e131ec27b762903dc22e0d30d4"},{url:"assets/js/page-性能部分.b3995386.js",revision:"00d3fe4a0aee58273166c1e5828739df"},{url:"assets/js/page-手撸代码.4212b614.js",revision:"29c7a5b2bca5d6129816664c06007351"},{url:"assets/js/page-插槽.6ba60d23.js",revision:"c066713515ff67a7631d365ed60cb147"},{url:"assets/js/page-数据和方法.30c8f2f9.js",revision:"1c26d170a149204df11e47a84d9d7d6c"},{url:"assets/js/page-数据库.ec1605ac.js",revision:"2ebc5359e70e41b22b16d5a542e31c51"},{url:"assets/js/page-数据的持久化（使用数据库）.ba193557.js",revision:"1fbea7457e41bf1b96a3fc8661bb8a30"},{url:"assets/js/page-数据结构.ec6e30e4.js",revision:"ff824bf021df0a6204e3231bed616474"},{url:"assets/js/page-数组的一些扩展方法.f7fc4b05.js",revision:"fcbb96c265ab1cf8a0940530351093d1"},{url:"assets/js/page-文档手册.19c8e7b6.js",revision:"3947db23b2bb9828ec6c9c9b1f40741c"},{url:"assets/js/page-服务容器.59275653.js",revision:"69dc81eb9d8bdba6a93e66c5274324ea"},{url:"assets/js/page-条件渲染.e8ec6820.js",revision:"4c1365d55b709f379257a25a95cdb0e9"},{url:"assets/js/page-构建工具.60b677b8.js",revision:"f3b06df766439101bffe859fdc3e9fff"},{url:"assets/js/page-栅格布局（Grid）.7c0a5c36.js",revision:"54ed24472321b0e4cf4010e72a3f7d42"},{url:"assets/js/page-根组件JGantt.dee690cd.js",revision:"f2a271f0dbe0367624bd0890f4293fa7"},{url:"assets/js/page-格式化工具.84079674.js",revision:"bbc6f0af9c879a3f44035183ce75ecd7"},{url:"assets/js/page-概述.90f9ef77.js",revision:"83464560e14ad62d42fabaccfb6e83b7"},{url:"assets/js/page-模型.3362ac8d.js",revision:"c2bddc4511f882a917de2ace131351c8"},{url:"assets/js/page-模板语法.dc567b05.js",revision:"faf26b2ec6542d8d02a8b204fc7890d9"},{url:"assets/js/page-正则表达式的使用.f69a5db0.js",revision:"6abb88c06dd07364f566776b39253a54"},{url:"assets/js/page-渲染.4c72afe4.js",revision:"4d7dde9e76c33492bedd71c2d61d61c8"},{url:"assets/js/page-滑块组件JGanttSlider.ef4f892c.js",revision:"22be0bd79b6a53c1bf525c2151b1e2f1"},{url:"assets/js/page-生命周期.a7990a69.js",revision:"c488d6e2146979162510ddbe9c673c3b"},{url:"assets/js/page-生成方法.84c03760.js",revision:"4c787be2879afb6caa0040b268f30d40"},{url:"assets/js/page-盒模型.5d611452.js",revision:"0db604c3e5d6f887eaba40710de41fb1"},{url:"assets/js/page-算法.cd75a55f.js",revision:"0cb2753cf2bd704718f75de09ff2ac63"},{url:"assets/js/page-管理数据库.f4706f7a.js",revision:"1f10cb3799f65fde4b3b74b670f39dc1"},{url:"assets/js/page-组件.483b31dd.js",revision:"f895e9248758b7db25078908923fa769"},{url:"assets/js/page-组合式API.001a49b7.js",revision:"31cba3e8b54256b2a033dfbe132276d9"},{url:"assets/js/page-网络基础.91d866bd.js",revision:"12c9ae2d45fe521eaa8be226909090d7"},{url:"assets/js/page-网络请求.a43c5957.js",revision:"e6986d675423ef5a067449d9a172030f"},{url:"assets/js/page-虚拟DOM.171cbe41.js",revision:"d84cac8d8e8424a91833e8955442032b"},{url:"assets/js/page-计算属性和侦听器.c1bd75ff.js",revision:"7fce5e540be35e6383506f705db2806d"},{url:"assets/js/page-计算机基础.cf9f0f61.js",revision:"7fed086096b4dc4ab30a52863999108b"},{url:"assets/js/page-计算机基础内容.f5e4776c.js",revision:"527cc2e32322fe5ac018594b05f4e98b"},{url:"assets/js/page-详解认证中心的配置.a7bd2715.js",revision:"5b447f30eaa916845a1da007ab3de9d6"},{url:"assets/js/page-跨域.4ecb1e9e.js",revision:"e5b0a0b41a70ceec6f1638010db0e5c6"},{url:"assets/js/page-选择器.ba1ecf04.js",revision:"3cdc213ef5ef350460abfd8e2e76585a"},{url:"assets/js/page-通用方法.0a846166.js",revision:"2b05ee741b7e47f46eb569a7d8316f4d"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.99fc0ed6.js",revision:"198d3d84f517651bea5120f2124150e4"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.69314708.js",revision:"ec0deacaf919625a4bb955643920c271"},{url:"assets/js/vendors~layout-Layout.da51dd64.js",revision:"96f346dcfd49351c63ed4a633dda8a54"},{url:"assets/js/vendors~photo-swipe.b68e1dfc.js",revision:"cc338d89bd3f291164c2c78dc7879b0d"},{url:"assets/js/vendors~valine.15c17211.js",revision:"e44b6a976448f57c6d8cc821de733967"},{url:"assets/roadmap/frontend/css-principle.svg",revision:"b9d80fa48caaf3c37c07a679ea3eeb84"},{url:"js/base.js",revision:"a11d78892850bfbd80f5eff104041105"},{url:"404.html",revision:"a690b2c6278fc42ee25087c78a09eb99"},{url:"article/index.html",revision:"eb53bc76d1fc43f97b26ea824c045229"},{url:"category/index.html",revision:"ce653aa5e8c14608cfb183a571673d6d"},{url:"codes/index.html",revision:"4f6d0495dab3c393176873d6b7e38ab5"},{url:"codes/js/array/index.html",revision:"f2fc967b08cef08d6a27fc16cb4c6a86"},{url:"codes/js/colors/index.html",revision:"ec09383c1d07c6a67e2f3932adda43f7"},{url:"codes/js/create/index.html",revision:"f7dc35ef78b9b0551884fb70ac7c76ac"},{url:"codes/js/date/index.html",revision:"6cca649880fec2580d33d2d1068921ec"},{url:"codes/js/html/index.html",revision:"8d5ea2d56390b952711fa43c382abde4"},{url:"codes/js/index.html",revision:"068f964e56c176e9084065815428d359"},{url:"codes/js/judge/index.html",revision:"9b9fc681ac8020fcc2a472e6cfd70b50"},{url:"codes/js/transform/index.html",revision:"fefeff35dbdf8f4ed18df5401d8843a7"},{url:"document/docker/example/npm/index.html",revision:"83c30f88178e30c7c20e14ae785223ff"},{url:"document/docker/index.html",revision:"79b517cc35599ab9de0cb707c76fa28c"},{url:"document/emmet/index.html",revision:"f595269f390b0f0bcfc4d6bbc4b8b984"},{url:"document/gantt/column/index.html",revision:"48148ee6d3e86401c361b66d9de37066"},{url:"document/gantt/common/index.html",revision:"2754cdece69b59626a4d9f9781865b79"},{url:"document/gantt/index.html",revision:"9ed37fcb3935a1ffbf9ad991d080a7df"},{url:"document/gantt/README_old/index.html",revision:"8137452a754aa087e95123b5b5e727da"},{url:"document/gantt/root/index.html",revision:"98ea5530e263390ea10dfa9b165e02ff"},{url:"document/gantt/slider/index.html",revision:"bc577e77a80f12e1162c8d2d81f16ded"},{url:"document/git/github_workflow/index.html",revision:"f7cd6e466de29d6521c32f7393645fcd"},{url:"document/git/index.html",revision:"0a8e233b7405717b57523f1f47fa527f"},{url:"document/index.html",revision:"401b767350ee0ebf396e7f76e7413637"},{url:"document/markdown/index.html",revision:"236ae4f507e00795f9f072e5fcf49cae"},{url:"document/npm/index.html",revision:"9d913c05df105559589c72b3cfea145f"},{url:"document/regexp/index.html",revision:"5926e5d31e97d8a76df5acc69253b3c1"},{url:"document/vim/index.html",revision:"381916fc3ddfaee4f50c1701f24217e3"},{url:"encrypt/index.html",revision:"f15f55b6c9f9cd21374acc129691cee9"},{url:"example/css/position.html",revision:"8be6950ed5fa629d3227224f1faa53d1"},{url:"example/index.html",revision:"5f4e4e0d756fd706dcc267456f01934e"},{url:"index.html",revision:"1e708c15a40b36b11116bfc28bfca10f"},{url:"roadmap/android/index.html",revision:"63e2a9f64d066e9de81acc06b05f56c6"},{url:"roadmap/base/algorithm/index.html",revision:"acd6a26349b60f8db52b4adfc5cd7764"},{url:"roadmap/base/computer/index.html",revision:"4934b585558b32afc2b2efa83a098f5d"},{url:"roadmap/base/data-structure/index.html",revision:"c10782ced0514cc726fded4a000d88af"},{url:"roadmap/base/database/index.html",revision:"e903a4325578b1ac5e5882d318074092"},{url:"roadmap/base/index.html",revision:"4e913d6a172dbf9c3b00c9fe5e54c58d"},{url:"roadmap/base/network/domain/index.html",revision:"938637d7020cacb361988167e34caf3a"},{url:"roadmap/base/network/index.html",revision:"d0dba5fdd106d9735c358c649fe1ff1d"},{url:"roadmap/base/network/ip/index.html",revision:"21680d50e6b41665be0b44c86418b050"},{url:"roadmap/base/network/osi/index.html",revision:"98119a81786c3c2d781291a422591dae"},{url:"roadmap/base/network/osi/layer-4/index.html",revision:"05d3760be60892a4937967789d4d75d6"},{url:"roadmap/base/network/osi/layer-7/index.html",revision:"093e354a799587234686eff63458d3e8"},{url:"roadmap/base/network/protocol/tcp/index.html",revision:"c3bda8d157d2bef7d4a3d64a2f0a4c0f"},{url:"roadmap/base/network/protocol/udp/index.html",revision:"9d0772bf8144e655c8443c0c08f589b6"},{url:"roadmap/base/network/www/http/index.html",revision:"93ff1762e2f9954de48fedb9ac87d2e0"},{url:"roadmap/base/network/www/https/index.html",revision:"af06e2679d175986e21f0825e3252544"},{url:"roadmap/base/network/www/index.html",revision:"cff19dbebe229179d0a43465c2232286"},{url:"roadmap/base/network/www/url/index.html",revision:"ca72b466bdddc1d1c486dde776321500"},{url:"roadmap/dotnetcore/auth/example/index.html",revision:"3a1bcfdc1db98a341d2fc8854771720b"},{url:"roadmap/dotnetcore/auth/index.html",revision:"ec3a2830142a3073aa97af96a680ac49"},{url:"roadmap/dotnetcore/auth/is4/external-account/index.html",revision:"25ffc06dd4f1e3c65ca771661a9eab60"},{url:"roadmap/dotnetcore/auth/is4/index.html",revision:"83179b18f6fda150cc08ef8d6c403d47"},{url:"roadmap/dotnetcore/auth/is4/intro-config/index.html",revision:"ca2b8d3285873286f17f5f2e89654a9b"},{url:"roadmap/dotnetcore/auth/is4/useef/index.html",revision:"2503e17cc13c6980bb9fa1f6eb0946e6"},{url:"roadmap/dotnetcore/auth/jwt/index.html",revision:"ff3aa4f603126dc935db353ffd4f9d45"},{url:"roadmap/dotnetcore/basic/index.html",revision:"cf84f862e43cf82daa5594c2fbc3faee"},{url:"roadmap/dotnetcore/cache/distributed/index.html",revision:"28d166c2acf4d1ced080a8029387c0d6"},{url:"roadmap/dotnetcore/cache/index.html",revision:"391286d5047730c309643d0c4098bf14"},{url:"roadmap/dotnetcore/cache/memory/index.html",revision:"d8fa8e4342c9c71b1640065f12939a2e"},{url:"roadmap/dotnetcore/cors/index.html",revision:"817260292dfa68dc3e801f4590f4364e"},{url:"roadmap/dotnetcore/db/efcore/context/index.html",revision:"e0dd5c68c47b671f45875957165d6689"},{url:"roadmap/dotnetcore/db/efcore/index.html",revision:"79fc9757d49a2892e7b04283bc9cacdb"},{url:"roadmap/dotnetcore/db/efcore/manage/index.html",revision:"9ead03788723d24e41d9525b57626e0b"},{url:"roadmap/dotnetcore/db/efcore/model/index.html",revision:"caffc3323d9b2387c0066833eac37819"},{url:"roadmap/dotnetcore/db/efcore/use/index.html",revision:"d376e2eddb13215693a183f029cf9ef2"},{url:"roadmap/dotnetcore/db/index.html",revision:"f1d6b47b5efbc72a2ea1885ea03ba0cd"},{url:"roadmap/dotnetcore/db/other/index.html",revision:"fe0242f3e910630b8b32d5d19ab53fa6"},{url:"roadmap/dotnetcore/di/collections/index.html",revision:"e57ae9bb6045fec32c52c7cdff4dd20d"},{url:"roadmap/dotnetcore/di/index.html",revision:"dc72333ebdf2c602f9b881f722bc91b2"},{url:"roadmap/dotnetcore/di/lifetimes/index.html",revision:"caab56a7cdcd34e20dbc3f69fad81fc1"},{url:"roadmap/dotnetcore/index.html",revision:"84ad4714243be7c1558c677f7bbedf3b"},{url:"roadmap/dotnetcore/log/APM/index.html",revision:"8da69aab1497c43c98ade292f27d8bdb"},{url:"roadmap/dotnetcore/log/Serilog/index.html",revision:"99d1211e34e3b147befe8093da315615"},{url:"roadmap/dotnetcore/mapper/automapper/index.html",revision:"b7e1ad1464207d7b40f5db55402a1307"},{url:"roadmap/dotnetcore/mapper/index.html",revision:"9e9d051cd65ee96a32ec33020934745b"},{url:"roadmap/dotnetcore/microservice/mq/RabbitMQ/index.html",revision:"360e5b93fb1fc20aaef40f14aab4e819"},{url:"roadmap/dotnetcore/swagger/index.html",revision:"581781918d10746e0be030cc74ad2f19"},{url:"roadmap/flutter/index.html",revision:"6475bccd7952debe5dfa73f853d4f017"},{url:"roadmap/frontend/advanced/css-processor/index.html",revision:"d145eeca9524158d43b1a8408e125049"},{url:"roadmap/frontend/advanced/index.html",revision:"cfd254aff5fa0de31fefdfd4f99a9228"},{url:"roadmap/frontend/advanced/performance/index.html",revision:"7f91bf8da897e1a8ebcf0b7a8932f429"},{url:"roadmap/frontend/advanced/principle/index.html",revision:"47c77854ae10a97bac7d3f723003b8a7"},{url:"roadmap/frontend/advanced/ts/index.html",revision:"e4146b01080e933bb92438e252acc4b3"},{url:"roadmap/frontend/css/box/index.html",revision:"58ca194bd170cf15bab0af08eb42fa3a"},{url:"roadmap/frontend/css/index.html",revision:"262ca855f36a14ce19c527497cdd1720"},{url:"roadmap/frontend/css/layout/flex/index.html",revision:"c915fbef73e66cf30ab7949e8599e163"},{url:"roadmap/frontend/css/layout/grid/index.html",revision:"1e10e3ff83d49a26434ca0761fccf49b"},{url:"roadmap/frontend/css/layout/index.html",revision:"484c3f463770f38b1d973c4638cbaee6"},{url:"roadmap/frontend/css/media/index.html",revision:"d37c9d7a8f548874e115836a5e8d4895"},{url:"roadmap/frontend/css/position/index.html",revision:"f153543afcbc2e4b7b83bf13d494dcaf"},{url:"roadmap/frontend/css/selector/index.html",revision:"b1cf1300f9ddb7cc22094bd82c14e375"},{url:"roadmap/frontend/engineer/build/index.html",revision:"ffcf010941e1515a6c7f21f63e49b8fa"},{url:"roadmap/frontend/engineer/format/index.html",revision:"37644315172a13e0af4c4930de229d27"},{url:"roadmap/frontend/engineer/package/index.html",revision:"ade085e365ef86378e2f1fdcfaba823d"},{url:"roadmap/frontend/html/index.html",revision:"dd242979ff9e99f1d8ce29ac8ccc58b2"},{url:"roadmap/frontend/index.html",revision:"0225243cac6ae9dc2f7fbe258b505633"},{url:"roadmap/frontend/js/asynchronous/index.html",revision:"c7ae9a5dfc9350ec6128c55d18773e6b"},{url:"roadmap/frontend/js/index.html",revision:"47f4d7248700c17deffa135c50da0b4c"},{url:"roadmap/frontend/js/net/index.html",revision:"adb8c2bb28655e5c1ffa18189908ed75"},{url:"roadmap/frontend/js/prototype/index.html",revision:"9bc7e519b2f786fe9b828ce9dc6f3e35"},{url:"roadmap/frontend/js/proxy/index.html",revision:"81e31d6889d5e7f4c687461e9bc9bdb6"},{url:"roadmap/frontend/js/this/index.html",revision:"125adde6e15ff583ef3a0b49651a9d59"},{url:"roadmap/frontend/react/index.html",revision:"09b327438fddf365b3436a5606d9566a"},{url:"roadmap/frontend/vue/basic/class-style-bind/index.html",revision:"ea2f66a3bbfd3645dca85b3982312331"},{url:"roadmap/frontend/vue/basic/component/index.html",revision:"fcc122a87d5e81aa531d3ffca621e40a"},{url:"roadmap/frontend/vue/basic/composition/index.html",revision:"587648cefc9ba3ae779010e19ac0d852"},{url:"roadmap/frontend/vue/basic/computed-watch/index.html",revision:"b959ba06744f38ec6d328f21880a3a38"},{url:"roadmap/frontend/vue/basic/data-method/index.html",revision:"37eb2bc45ebf809e0e96068714772466"},{url:"roadmap/frontend/vue/basic/for/index.html",revision:"1836904631497327ade856aeb910a726"},{url:"roadmap/frontend/vue/basic/if/index.html",revision:"9ed47fade02495e90e8da7853fff44d3"},{url:"roadmap/frontend/vue/basic/lifecycle/index.html",revision:"df3a655307008dbd74e0c0bf66ededf6"},{url:"roadmap/frontend/vue/basic/render/index.html",revision:"72556b409dcc40fe220863a9c7730658"},{url:"roadmap/frontend/vue/basic/slot/index.html",revision:"c5d0b9721d1f4f694a650e2e2709b584"},{url:"roadmap/frontend/vue/basic/template/index.html",revision:"8f82da9a8baf78f1caf71700d5ee25ca"},{url:"roadmap/frontend/vue/framework/index.html",revision:"c8e767ca18effac2c0ec9e69f8afcf81"},{url:"roadmap/frontend/vue/index.html",revision:"dc8ddcfb4906e0b6be68969f6214e841"},{url:"roadmap/frontend/vue/mvvm/index.html",revision:"fe1fc861aa32c4ecd59e761da9146830"},{url:"roadmap/frontend/vue/reactive/index.html",revision:"9cf87a7c8ef35ff74c1299aa734ad8ed"},{url:"roadmap/frontend/vue/supports/cli/index.html",revision:"a5fdb82d8fb17f8c9d5df656861c5874"},{url:"roadmap/frontend/vue/supports/router/index.html",revision:"3bbeb458ce8bba960ccfddf11b854bad"},{url:"roadmap/frontend/vue/supports/test/index.html",revision:"c49791b0a56a7127dd58290ef571781e"},{url:"roadmap/frontend/vue/supports/tools/index.html",revision:"025d29b2d15fff986af6ecdc2fa9c27e"},{url:"roadmap/frontend/vue/supports/vuex/index.html",revision:"cf277a852785a1d3ba3a62707d44c79a"},{url:"roadmap/frontend/vue/template/index.html",revision:"2aadeb5406d6e6bb89d1d94444e0a967"},{url:"roadmap/frontend/vue/template/setup-from-0/index.html",revision:"d8fcc161ccb0e1e71fa3247037495e47"},{url:"roadmap/frontend/vue/virtualdom/index.html",revision:"8e772ebb02435743607ba0ba089dbe11"},{url:"roadmap/index.html",revision:"9600222ee20c24e00bd628baf2d18ed9"},{url:"roadmap/java/index.html",revision:"ed863dcda514ac526cd650eeddddbf41"},{url:"slide/index.html",revision:"ae54e8618a845dae7a1a8bbe87e686c9"},{url:"standard/csharp/index.html",revision:"adc0042ce0bcbaa6b0e37c5a80fe8a95"},{url:"standard/css/index.html",revision:"3691d03c3d36cb539abd1c40b69c8bd2"},{url:"standard/html/index.html",revision:"8d930401b3323b79f38b9490b2821b3d"},{url:"standard/index.html",revision:"b334269b94057e866d27ee5d654ae69b"},{url:"standard/javascript/index.html",revision:"82663e41dc1183b61b859f50be6c7783"},{url:"standard/python/index.html",revision:"04fcdb9547bd5342064735ce3c657a64"},{url:"standard/vue/index.html",revision:"5e89e7fb1c1bed4d4a49405a07f1ec3f"},{url:"star/index.html",revision:"8a2d502b02dd80e39a0f9e5db1744f5a"},{url:"tag/index.html",revision:"b953b29b6d37d8ce241b176b4723704d"},{url:"timeline/index.html",revision:"ab8371836d92e49055790f653be7cf79"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
