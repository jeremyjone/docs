if(!self.define){let e,a={};const s=(s,d)=>(s=new URL(s+".js",d).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(d,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let i={};const f=e=>s(e,c),b={module:{uri:c},exports:i,require:f};a[c]=Promise.all(d.map((e=>b[e]||f(e)))).then((e=>(r(...e),i)))}}define(["./workbox-ebf2f394"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.439caf23.css",revision:"9f5d7505de44ca4177a7b375d4edf54f"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/136.376688ef.js",revision:"5f9120cc49cd07ab93f2cf3ec9442b47"},{url:"assets/js/137.03f0c1d1.js",revision:"15a63b4e0ceaf4c4bd61c75f02295598"},{url:"assets/js/138.6a81a447.js",revision:"00cd567a2a7ed5bfd36ee4b83e2fcb92"},{url:"assets/js/139.5c3cc72f.js",revision:"b6b14ccc9d1473f671cea5855eabd7c7"},{url:"assets/js/140.ea9e46d1.js",revision:"7f88dca3f34826436891629a6f48c6b1"},{url:"assets/js/141.3ca74c43.js",revision:"5fdd7330c23e164a0e337f0ec91a7634"},{url:"assets/js/142.ffeba981.js",revision:"5788ca13388b894d8340713a0cf0a289"},{url:"assets/js/143.cb51fea9.js",revision:"5e69c06611fc404b0ef10abb27481eff"},{url:"assets/js/app.2156af5c.js",revision:"f90f6cffcbf134ee3a0c2c57265546a7"},{url:"assets/js/layout-Blog.1ed60b76.js",revision:"80b3fbf93f55e0b530cfc32e96ace5bc"},{url:"assets/js/layout-Layout.f3e9cb51.js",revision:"a1ec8439042bd2daeba4549b5083c02b"},{url:"assets/js/layout-NotFound.5a99754f.js",revision:"96e231421bba443bb793653f37dd2fbf"},{url:"assets/js/layout-Slide.6887e3cd.js",revision:"edcf22ea44ce434057e400af4ecbc83e"},{url:"assets/js/page--69fb9c74.f235ad3e.js",revision:"018e9020db0f8d72720a380e522ab5ad"},{url:"assets/js/page-Android学习之路.65748a92.js",revision:"189f3153d4c3cf28a766f9c299edab8f"},{url:"assets/js/page-ASPNETCore开发者学习路线图.2bbaaea9.js",revision:"210f2ebce92f5470d887aedea29f62c1"},{url:"assets/js/page-AutoMapper.14e0e505.js",revision:"f48e8261a65d52836168e25d8f8c7354"},{url:"assets/js/page-C.e65c330d.js",revision:"51d052c9cbc28828ff1136a3d09dc0a5"},{url:"assets/js/page-class与style的绑定.27d7da72.js",revision:"dd25be1baa7577c59682cdd346f76297"},{url:"assets/js/page-CSS基础.a78cb3cb.js",revision:"a563d3fe724a5bf3c94a5d9d7a4585cd"},{url:"assets/js/page-CSS规范.1ce19eb4.js",revision:"1503161c5d1ecaa8111223d66be17138"},{url:"assets/js/page-CSS预处理器.f0073b03.js",revision:"7b553d1b09914f6aeb607d7bd9b5e219"},{url:"assets/js/page-DbContext的配置.399d35cc.js",revision:"0dc9052cbe4c2d32757a0b2870d08ee6"},{url:"assets/js/page-Devtools.f4d64a28.js",revision:"a0e5e190e68b8c002f345c37609561cc"},{url:"assets/js/page-Docker使用文档.a41a1f83.js",revision:"fc5226206e6a6a5c623e0aae9d3b406d"},{url:"assets/js/page-Docker快速搭建NPM服务器.75c25865.js",revision:"ed007c33591b79f928b7dff852978750"},{url:"assets/js/page-Emmet使用文档.d32c35ed.js",revision:"4a17305f8f1ac9454e7ece046cac890e"},{url:"assets/js/page-ExamplePage.637ba383.js",revision:"da78e8180f7fdc23f3280d56c2f0c921"},{url:"assets/js/page-Flutter学习之路.6e4d6b01.js",revision:"2ba0509516cbd01dc6954e7609746940"},{url:"assets/js/page-GitHubPagesaction配置.4b1e98b3.js",revision:"23824f7cdcfbb07eab68ecf7c76e7af0"},{url:"assets/js/page-GIT命令.84c04c33.js",revision:"f689edad9b3f53a93f6487f7e9177c6b"},{url:"assets/js/page-Home.8793ac6e.js",revision:"1af0dfe8d79f9e5f1c0e42cab91c9b95"},{url:"assets/js/page-HTML基础.5a8eeb30.js",revision:"941aae6ff87bfecff9bdf4524f8cac82"},{url:"assets/js/page-HTML处理方法.af4daad6.js",revision:"764782902eca020723e13afb2c3915db"},{url:"assets/js/page-HTML规范.3d0f18e9.js",revision:"93a66092c64544826b4ddbfefcedc89f"},{url:"assets/js/page-HTTP.a3629915.js",revision:"2643f34fdf073ee3c431b653c98b3f67"},{url:"assets/js/page-HTTPS.7dd87947.js",revision:"bf3f9a013b75cd41330b2f53909f360a"},{url:"assets/js/page-IdentityServer4的使用.a0a42e1d.js",revision:"4afe294eeaa8cb13b8c302aae7960343"},{url:"assets/js/page-IP网际协议.ab2a4a8a.js",revision:"ffe4a7022e2b018ec8189d88659945e7"},{url:"assets/js/page-JavaScript基础.d0b3c196.js",revision:"46251303c160401f8fe508e13bdb7f6b"},{url:"assets/js/page-JavaScript开发规范.ec417ee3.js",revision:"0959066dc9d6b070ab130dce224e6e45"},{url:"assets/js/page-Java学习之路.e3dd4e48.js",revision:"8eac727d031c7fb74b0ba4f8a4e4c3b3"},{url:"assets/js/page-JWT.d96b1a7f.js",revision:"bdc41e9962acece6bfa8360d0a090acb"},{url:"assets/js/page-Markdown语法.2e094278.js",revision:"40fa5005a26cfddd24985572f5199d96"},{url:"assets/js/page-MVVM.e558ce70.js",revision:"3280708fe4e9122d3cb792f2fca88660"},{url:"assets/js/page-npm使用.9ba6895f.js",revision:"a6e908c283286af47027725165a41fdc"},{url:"assets/js/page-OSI模型.41ba0c66.js",revision:"affe07b751837f9b4b524da53e5058cf"},{url:"assets/js/page-Proxy与Reflect.225a57a9.js",revision:"2395f8817219bb8c6e850525cf839aca"},{url:"assets/js/page-Python开发规范.762b1c90.js",revision:"5b27807996638db607a9c00c995c81e4"},{url:"assets/js/page-RabbitMQ的使用.7703ea87.js",revision:"f4ace8b5291ebee59a39abb571062840"},{url:"assets/js/page-React学习之路.3ea5b29d.js",revision:"9f290ecdd726a2aa2c15e0505b5bc8a5"},{url:"assets/js/page-Serilog的使用.5c906bd0.js",revision:"aea2d5cc6d47d29fec73e470aba64b7e"},{url:"assets/js/page-Swagger文档的使用.a7331905.js",revision:"3ff6357b6aac5c9d098d4eb19a36c2de"},{url:"assets/js/page-TCP协议.26e4aeb1.js",revision:"0dc22a77472ff7bd36361bc435995af0"},{url:"assets/js/page-this关键字.36ec4b3c.js",revision:"c6202735d094c2dd99ee8ee3227953fb"},{url:"assets/js/page-TypeScript.0dd97fa4.js",revision:"a0083cac602ec6d716c9f68f035e24ee"},{url:"assets/js/page-UDP协议.79ccb002.js",revision:"c3cdd94a66bb6a8dc5c55234df6111da"},{url:"assets/js/page-UI框架.df41a429.js",revision:"3370c5c4483fa67e5dbc86b8e2f825df"},{url:"assets/js/page-URL.65982a82.js",revision:"4abc7b4f9ca579a9fb0a84a2c52822dc"},{url:"assets/js/page-Vim使用说明.be0afc3f.js",revision:"b1b9b72ac26689fb2cdaae454fc3f1a1"},{url:"assets/js/page-VueCli.0c144e33.js",revision:"2a176b730d5ebd7d179a8f8f16d26778"},{url:"assets/js/page-VueRouter.6633f24c.js",revision:"86cc1d7b9451a28f32dcfc08fedb2020"},{url:"assets/js/page-VueTestUtils.bc945a5d.js",revision:"fc46276afa35a1c2e4a259054dfa4e94"},{url:"assets/js/page-Vuex.2a15df81.js",revision:"8b53fbd175d0c6e2d9ef8580fbdc5f78"},{url:"assets/js/page-Vue学习之路.fa685f41.js",revision:"c90707b3753d00ffff4740ee5a796189"},{url:"assets/js/page-Vue开发规范.1116e8bd.js",revision:"9488acc67e694a20431aa42e367d1f25"},{url:"assets/js/page-七层模型.593db85e.js",revision:"8e856d5a1c13236fb1ae9700b8fea4f8"},{url:"assets/js/page-万维网.49c66f1d.js",revision:"40fc37750ed710346bdb4e97f542be84"},{url:"assets/js/page-从0搭建项目模板（vue3）.70fdb578.js",revision:"46635e520681546d82314bce9acb0d56"},{url:"assets/js/page-代码书写规范总纲.ce578dd2.js",revision:"8a34f323ed9cc7860b418f99ee62ff42"},{url:"assets/js/page-使用.b50c1913.js",revision:"873360af51ea929252c0fbced44cdcd7"},{url:"assets/js/page-使用项目模板.cab47af6.js",revision:"8704940e818d5416ab0aff7fb869280b"},{url:"assets/js/page-入门.7575393d.js",revision:"8cb8730d169657a4ecf0d0ec3c234e52"},{url:"assets/js/page-其他映射工具.c98c125d.js",revision:"303f2d22caf471df75f14b20f1355dc8"},{url:"assets/js/page-内存缓存.e5b4c39e.js",revision:"6396a5b98bfe7e48a8371acd19c4c77c"},{url:"assets/js/page-分布式缓存.9fcb73c2.js",revision:"1f0d1ab0fa8e8fab27e3939a3040880e"},{url:"assets/js/page-列组件JGanttColumn.2539bf85.js",revision:"638ad2861b7f72ae54c6cc3acf22bdc1"},{url:"assets/js/page-判断方法.83dfccc1.js",revision:"0c03e2ac513407b19b9650beca2f6495"},{url:"assets/js/page-前端学习之路.e6952d04.js",revision:"7014475d04a44e9af92027437d5dab99"},{url:"assets/js/page-前端进阶.93de3af1.js",revision:"ae350129630a6e92d1c19c9715b19dfd"},{url:"assets/js/page-包管理器.ca5a8d3e.js",revision:"ba0cc2c93982b06f81d8f3c981ff30cf"},{url:"assets/js/page-原型和原型链详解.8e20dad5.js",revision:"d3be798c4bb7e7bc4b8f264dab583993"},{url:"assets/js/page-原理部分.ec90f54b.js",revision:"71ac895fc17e1031c0e0c5892ace5cac"},{url:"assets/js/page-响应式与媒体查询.6c489639.js",revision:"dcc0b4d30d0a34b8487b37e386f64594"},{url:"assets/js/page-响应式的原理.2f446e9d.js",revision:"a7e6fae29221e345a0c73bc11221e8d3"},{url:"assets/js/page-四层模型.8eff63ce.js",revision:"d48443cba6a2ffcdc7241c99b6141f4b"},{url:"assets/js/page-在ASPNET中使用授权与认证.e3181ff7.js",revision:"7e5f870fad3a173ff540c3f7f810c337"},{url:"assets/js/page-域名.72e6ce1a.js",revision:"f29563a4aaf95384fc6b521be30f189d"},{url:"assets/js/page-基础知识.18cec895.js",revision:"c6a9c949357038dc5eba6603570cacd8"},{url:"assets/js/page-处理日期方法.1d11eb23.js",revision:"b690a9b032530153ef8cca2e8740baf7"},{url:"assets/js/page-处理颜色的方法.3e747878.js",revision:"8d83c9e1e86427b77407c68a71d8e93d"},{url:"assets/js/page-外部身份验证.3a5c832b.js",revision:"1c20e2a16f652a7cb19ae05c64440b1d"},{url:"assets/js/page-学习路线.cd9f2bf0.js",revision:"ae4741639345951a5e3b8f3e7bdcf2da"},{url:"assets/js/page-定位.ae8a8b3a.js",revision:"70cf08fd6d6349fb4929e0d05e928ec8"},{url:"assets/js/page-布局.3825fa61.js",revision:"5e219fb5205c89b66e7c53fd30a29a84"},{url:"assets/js/page-常用的转换方法.f30635ed.js",revision:"7281ffc250530c754bb64deaec95fece"},{url:"assets/js/page-应用性能监控系统.6fa03e03.js",revision:"d40abba5259973a9954e896e59e94f96"},{url:"assets/js/page-异步编程.915d2c4e.js",revision:"9cf70d3f95ba1884fdd37993caf68ece"},{url:"assets/js/page-弹性布局（Flexbox）.c3bd6887.js",revision:"31b3341048bdf5a74daffd3643f99645"},{url:"assets/js/page-循环渲染.f227709a.js",revision:"d50632e131ec27b762903dc22e0d30d4"},{url:"assets/js/page-性能部分.b3995386.js",revision:"00d3fe4a0aee58273166c1e5828739df"},{url:"assets/js/page-手撸代码.4212b614.js",revision:"29c7a5b2bca5d6129816664c06007351"},{url:"assets/js/page-插槽.7147b527.js",revision:"aac1df884208fb00658cc25043d43280"},{url:"assets/js/page-数据和方法.30c8f2f9.js",revision:"1c26d170a149204df11e47a84d9d7d6c"},{url:"assets/js/page-数据库.ec1605ac.js",revision:"2ebc5359e70e41b22b16d5a542e31c51"},{url:"assets/js/page-数据的持久化（使用数据库）.ba193557.js",revision:"1fbea7457e41bf1b96a3fc8661bb8a30"},{url:"assets/js/page-数据结构.ec6e30e4.js",revision:"ff824bf021df0a6204e3231bed616474"},{url:"assets/js/page-数组的一些扩展方法.f7fc4b05.js",revision:"fcbb96c265ab1cf8a0940530351093d1"},{url:"assets/js/page-文档手册.19c8e7b6.js",revision:"3947db23b2bb9828ec6c9c9b1f40741c"},{url:"assets/js/page-服务容器.59275653.js",revision:"69dc81eb9d8bdba6a93e66c5274324ea"},{url:"assets/js/page-条件渲染.e8ec6820.js",revision:"4c1365d55b709f379257a25a95cdb0e9"},{url:"assets/js/page-构建工具.60b677b8.js",revision:"f3b06df766439101bffe859fdc3e9fff"},{url:"assets/js/page-栅格布局（Grid）.7c0a5c36.js",revision:"54ed24472321b0e4cf4010e72a3f7d42"},{url:"assets/js/page-根组件JGantt.dee690cd.js",revision:"f2a271f0dbe0367624bd0890f4293fa7"},{url:"assets/js/page-格式化工具.84079674.js",revision:"bbc6f0af9c879a3f44035183ce75ecd7"},{url:"assets/js/page-概述.90f9ef77.js",revision:"83464560e14ad62d42fabaccfb6e83b7"},{url:"assets/js/page-模型.3362ac8d.js",revision:"c2bddc4511f882a917de2ace131351c8"},{url:"assets/js/page-模板语法.2392f089.js",revision:"78c62390ccfd24ed12b2ba6156a75adc"},{url:"assets/js/page-正则表达式的使用.f69a5db0.js",revision:"6abb88c06dd07364f566776b39253a54"},{url:"assets/js/page-渲染.7c2733c7.js",revision:"e7779dc569534114a610f5e451c3be00"},{url:"assets/js/page-滑块组件JGanttSlider.ef4f892c.js",revision:"22be0bd79b6a53c1bf525c2151b1e2f1"},{url:"assets/js/page-生命周期.31253fe5.js",revision:"d189c6463b3c1311be6c349ad298a39d"},{url:"assets/js/page-生成方法.84c03760.js",revision:"4c787be2879afb6caa0040b268f30d40"},{url:"assets/js/page-盒模型.5d611452.js",revision:"0db604c3e5d6f887eaba40710de41fb1"},{url:"assets/js/page-算法.cd75a55f.js",revision:"0cb2753cf2bd704718f75de09ff2ac63"},{url:"assets/js/page-管理数据库.f4706f7a.js",revision:"1f10cb3799f65fde4b3b74b670f39dc1"},{url:"assets/js/page-组件.483b31dd.js",revision:"f895e9248758b7db25078908923fa769"},{url:"assets/js/page-组合式API.001a49b7.js",revision:"31cba3e8b54256b2a033dfbe132276d9"},{url:"assets/js/page-网络基础.91d866bd.js",revision:"12c9ae2d45fe521eaa8be226909090d7"},{url:"assets/js/page-网络请求.a43c5957.js",revision:"e6986d675423ef5a067449d9a172030f"},{url:"assets/js/page-虚拟DOM.171cbe41.js",revision:"d84cac8d8e8424a91833e8955442032b"},{url:"assets/js/page-计算属性和侦听器.c1bd75ff.js",revision:"7fce5e540be35e6383506f705db2806d"},{url:"assets/js/page-计算机基础.cf9f0f61.js",revision:"7fed086096b4dc4ab30a52863999108b"},{url:"assets/js/page-计算机基础内容.f5e4776c.js",revision:"527cc2e32322fe5ac018594b05f4e98b"},{url:"assets/js/page-详解认证中心的配置.a7bd2715.js",revision:"5b447f30eaa916845a1da007ab3de9d6"},{url:"assets/js/page-跨域.4ecb1e9e.js",revision:"e5b0a0b41a70ceec6f1638010db0e5c6"},{url:"assets/js/page-选择器.ba1ecf04.js",revision:"3cdc213ef5ef350460abfd8e2e76585a"},{url:"assets/js/page-通用方法.0a846166.js",revision:"2b05ee741b7e47f46eb569a7d8316f4d"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.99fc0ed6.js",revision:"198d3d84f517651bea5120f2124150e4"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.69314708.js",revision:"ec0deacaf919625a4bb955643920c271"},{url:"assets/js/vendors~layout-Layout.da51dd64.js",revision:"96f346dcfd49351c63ed4a633dda8a54"},{url:"assets/js/vendors~photo-swipe.b68e1dfc.js",revision:"cc338d89bd3f291164c2c78dc7879b0d"},{url:"assets/js/vendors~valine.15c17211.js",revision:"e44b6a976448f57c6d8cc821de733967"},{url:"assets/roadmap/frontend/css-principle.svg",revision:"b9d80fa48caaf3c37c07a679ea3eeb84"},{url:"js/base.js",revision:"a11d78892850bfbd80f5eff104041105"},{url:"404.html",revision:"c221d5ee21c53fff2f2fbe468640f13d"},{url:"article/index.html",revision:"e12ab1986bc37f89493caeb3b11f5840"},{url:"category/index.html",revision:"0ffbd9758256a8d508c3d7e0e6be61f9"},{url:"codes/index.html",revision:"7e4c3cc561dbc8d58529baf2884285d1"},{url:"codes/js/array/index.html",revision:"929f0ed8053ac910b03d1d5bd498887d"},{url:"codes/js/colors/index.html",revision:"44b3bf877dcaf833df7382b701724c3f"},{url:"codes/js/create/index.html",revision:"2729ea1bb96e3690e0adc9e8e0002d00"},{url:"codes/js/date/index.html",revision:"c3f17a1ca6024ff0875fe452cbe68196"},{url:"codes/js/html/index.html",revision:"ed1abfd36a7b05da3df25b4a92132858"},{url:"codes/js/index.html",revision:"50b6101019a4ffe3adee41259b46bfbc"},{url:"codes/js/judge/index.html",revision:"cd04d37cb89690c7d17cf74b7e0206d3"},{url:"codes/js/transform/index.html",revision:"fc1c8383ae9e164c4d3369e703cd75fc"},{url:"document/docker/example/npm/index.html",revision:"85da3dffcd3b53d8789d08e2d7bb4436"},{url:"document/docker/index.html",revision:"251782bcf9f66b127b056cbc597723b1"},{url:"document/emmet/READMD/index.html",revision:"deedc4c67157e1a38b276130f9b84a64"},{url:"document/gantt/column/index.html",revision:"a31bcb9068bc0f93d009dac55897099e"},{url:"document/gantt/common/index.html",revision:"d956bc32bb337c92f8c083decf407b40"},{url:"document/gantt/index.html",revision:"00c28129309d97cf71702fd014225aec"},{url:"document/gantt/README_old/index.html",revision:"4b74e4aa636caaa3c87f9236ffa208d6"},{url:"document/gantt/root/index.html",revision:"43fc937d0dda39a1cf04107367b5928a"},{url:"document/gantt/slider/index.html",revision:"bf6fdd03b50ddfc919edc44078dcbcb6"},{url:"document/git/github_workflow/index.html",revision:"e8900a68145b7545b82d05a586e352f8"},{url:"document/git/index.html",revision:"01cf6321b94dc70d8e20ca0fa35c4c9a"},{url:"document/index.html",revision:"851f675159888b6099997abcba35692a"},{url:"document/markdown/index.html",revision:"08310a9e2e308cfd6db3cf42702ca8bf"},{url:"document/npm/index.html",revision:"70c4682c99f7d7e55854d32d0800110c"},{url:"document/regexp/index.html",revision:"6ae81474588506479a77acd6910ad903"},{url:"document/vim/index.html",revision:"1a6187d59232c508d80d7eae962796e6"},{url:"encrypt/index.html",revision:"e230e9824eb0a28d8b1a3e04c49ff3fa"},{url:"example/css/position.html",revision:"8be6950ed5fa629d3227224f1faa53d1"},{url:"example/index.html",revision:"887e9dc6cbe7d311cc22078104400aed"},{url:"index.html",revision:"d51022a2072fc98e4d334181f63f8eee"},{url:"roadmap/android/index.html",revision:"db23e54c40390a4dc13e7ba7353663e3"},{url:"roadmap/base/algorithm/index.html",revision:"1ae8aea477ca5af23e1b560df5920625"},{url:"roadmap/base/computer/index.html",revision:"96d2716257532fe4714a4f1a5406f4d6"},{url:"roadmap/base/data-structure/index.html",revision:"69bef80cb5b66b9188cb93555a4b49a7"},{url:"roadmap/base/database/index.html",revision:"eab9cba8eaeccbdc90454c5490b461ff"},{url:"roadmap/base/index.html",revision:"b717c89d782c235832b83d5196eb98a1"},{url:"roadmap/base/network/domain/index.html",revision:"fb72de0d126e5de8d41eaf0f37134a06"},{url:"roadmap/base/network/index.html",revision:"bef7198eb4f4b48872596fc83338cc50"},{url:"roadmap/base/network/ip/index.html",revision:"65ef3b2a24db6b1654356c236b8f4b3a"},{url:"roadmap/base/network/osi/index.html",revision:"cd4cd6b529cd54d0de7d9ec8d941feec"},{url:"roadmap/base/network/osi/layer-4/index.html",revision:"a483c65d9589de37574b50b763d4f8b8"},{url:"roadmap/base/network/osi/layer-7/index.html",revision:"475bb2206ccce24b0a28e4e56bd71b68"},{url:"roadmap/base/network/protocol/tcp/index.html",revision:"6ab6b175f6a6533f94b2a05a0dff0c8f"},{url:"roadmap/base/network/protocol/udp/index.html",revision:"8d09e8261d3e89fab08808db72c39e54"},{url:"roadmap/base/network/www/http/index.html",revision:"c775b353fa604e852c7ab05358b821cc"},{url:"roadmap/base/network/www/https/index.html",revision:"691888b5b89b94f17bc9cc8316b84734"},{url:"roadmap/base/network/www/index.html",revision:"4a17bb703dcb775b7785d8cc08128c8e"},{url:"roadmap/base/network/www/url/index.html",revision:"ae938c81f9e87050b2598910c897d9ee"},{url:"roadmap/dotnetcore/auth/example/index.html",revision:"fe3bf4ff0b5102f692b3eb909e73b130"},{url:"roadmap/dotnetcore/auth/index.html",revision:"2a05e1279af70d1bcb24b7f4ff3e971f"},{url:"roadmap/dotnetcore/auth/is4/external-account/index.html",revision:"69a9921d54b180ee05a690b50e41e2cf"},{url:"roadmap/dotnetcore/auth/is4/index.html",revision:"6fc4dfaec54c4f5cb82a561544a68a5d"},{url:"roadmap/dotnetcore/auth/is4/intro-config/index.html",revision:"34a602050cadea1a09882c399082f83c"},{url:"roadmap/dotnetcore/auth/is4/useef/index.html",revision:"ff97c32a2b3da113ed1f1dad69975228"},{url:"roadmap/dotnetcore/auth/jwt/index.html",revision:"332b3b88008eb9c4f66faeb6757e7b8a"},{url:"roadmap/dotnetcore/basic/index.html",revision:"c18ea0a75db48f3ddea8766091b52e2a"},{url:"roadmap/dotnetcore/cache/distributed/index.html",revision:"6f91a38cb15ea999381bd0a5eb980f6f"},{url:"roadmap/dotnetcore/cache/index.html",revision:"9128e4ffa8f5e963456e94cf8f79355c"},{url:"roadmap/dotnetcore/cache/memory/index.html",revision:"8b5dc2b9765ab21dc1a0db21628cb1f3"},{url:"roadmap/dotnetcore/cors/index.html",revision:"68f65a84983c36a7c0b87b06e6b3c2ce"},{url:"roadmap/dotnetcore/db/efcore/context/index.html",revision:"6174bcb2c0b181172d3aff929787b1ed"},{url:"roadmap/dotnetcore/db/efcore/index.html",revision:"ed3f829fff05c0ba5bc91badfcbc7e4c"},{url:"roadmap/dotnetcore/db/efcore/manage/index.html",revision:"616e2ea5c22e11dd59a2305bbc885a94"},{url:"roadmap/dotnetcore/db/efcore/model/index.html",revision:"8d795dd6a6287a30519c0b91d74b8329"},{url:"roadmap/dotnetcore/db/efcore/use/index.html",revision:"2e53348d56e864634e2d8d301a033a63"},{url:"roadmap/dotnetcore/db/index.html",revision:"e9974666d921a164cb0f309261497aaf"},{url:"roadmap/dotnetcore/db/other/index.html",revision:"c7c523a758e8b0ab8654df1234d98d86"},{url:"roadmap/dotnetcore/di/collections/index.html",revision:"47397f7c3c2c268b59a350e4237282e7"},{url:"roadmap/dotnetcore/di/index.html",revision:"3e674f65c475f6432f3033658e3d7918"},{url:"roadmap/dotnetcore/di/lifetimes/index.html",revision:"0a80012678359515a36e3a5d77444ee2"},{url:"roadmap/dotnetcore/index.html",revision:"51bf10de58752306daec5ad664a73baa"},{url:"roadmap/dotnetcore/log/APM/index.html",revision:"4d7b8da9a773c274aa2d3cabf872c580"},{url:"roadmap/dotnetcore/log/Serilog/index.html",revision:"9c0ab41d41ee14878445a3a8116b5e45"},{url:"roadmap/dotnetcore/mapper/automapper/index.html",revision:"d14a85c650d419d88ec81692ecc60d8e"},{url:"roadmap/dotnetcore/mapper/index.html",revision:"a52068fc56286765c225ec27743267e8"},{url:"roadmap/dotnetcore/microservice/mq/RabbitMQ/index.html",revision:"dbaf4a3719158cc4598cbcc0c5e25564"},{url:"roadmap/dotnetcore/swagger/index.html",revision:"56458300a031a1bf33a13e28a48013bf"},{url:"roadmap/flutter/index.html",revision:"9167bff0acb6d381213409a7443721a2"},{url:"roadmap/frontend/advanced/css-processor/index.html",revision:"9c12c83b695c0b0ec1811adaf5030cf0"},{url:"roadmap/frontend/advanced/index.html",revision:"dc691a614a8755b6784d404c6109edc7"},{url:"roadmap/frontend/advanced/performance/index.html",revision:"604b535044370f4edc3e3a0000c2e161"},{url:"roadmap/frontend/advanced/principle/index.html",revision:"10c8db3838aeb2cd58f5a5dee2922814"},{url:"roadmap/frontend/advanced/ts/index.html",revision:"ee6985b6f7cf8f3e2621912a457ee0e9"},{url:"roadmap/frontend/css/box/index.html",revision:"dfc4fa96c1e607e9b96e518d0d252747"},{url:"roadmap/frontend/css/index.html",revision:"0ce9cd4fc393efaa4d773936af16e0f9"},{url:"roadmap/frontend/css/layout/flex/index.html",revision:"af79c8ac1c72a73a9b8c8c5801f57be5"},{url:"roadmap/frontend/css/layout/grid/index.html",revision:"1e342d5516943b2d5078f58d1209eade"},{url:"roadmap/frontend/css/layout/index.html",revision:"876de793a0bd3f33742c7a0dd774774b"},{url:"roadmap/frontend/css/media/index.html",revision:"64f2f45905f3c79eca28234c54489859"},{url:"roadmap/frontend/css/position/index.html",revision:"5bf92a39d1b7da8c0405925f413bc158"},{url:"roadmap/frontend/css/selector/index.html",revision:"24bf25e9cc8ba16e4c1fa2511d64a356"},{url:"roadmap/frontend/engineer/build/index.html",revision:"4c1898c9e373dfdf28828ace8d901330"},{url:"roadmap/frontend/engineer/format/index.html",revision:"73924dcbedbc6f39cca2b3fe3231191c"},{url:"roadmap/frontend/engineer/package/index.html",revision:"5173fe560387033725f9747172f71583"},{url:"roadmap/frontend/html/index.html",revision:"b70dc713659981515bca93118f5e7cea"},{url:"roadmap/frontend/index.html",revision:"f01c70cc54b49ea80dd90217e27d8408"},{url:"roadmap/frontend/js/asynchronous/index.html",revision:"d5faf65afbf5163a0abcc019ab8cdcb1"},{url:"roadmap/frontend/js/index.html",revision:"b8bcad8173716e046e0ef791f627b0f6"},{url:"roadmap/frontend/js/net/index.html",revision:"373083165a658c0409ecd0f4b5bdebc3"},{url:"roadmap/frontend/js/prototype/index.html",revision:"838eb522eb69c29a2915753cf0a056f7"},{url:"roadmap/frontend/js/proxy/index.html",revision:"804a312b82db673e75d298a5f4c7d3ec"},{url:"roadmap/frontend/js/this/index.html",revision:"040f5d71ba4d5c0c1fd7c2348cd72459"},{url:"roadmap/frontend/react/index.html",revision:"376274d5e0492860af2b51ad49ad2565"},{url:"roadmap/frontend/vue/basic/class-style-bind/index.html",revision:"ff79bb0b7b6035d093356c5e2c08e5fa"},{url:"roadmap/frontend/vue/basic/component/index.html",revision:"66f03e23dfccd40c10f55fb287b6eeea"},{url:"roadmap/frontend/vue/basic/composition/index.html",revision:"8fbdb25502b9a73d65b5787f21652c0e"},{url:"roadmap/frontend/vue/basic/computed-watch/index.html",revision:"6cf44b1d241618de7b86379914dedf2f"},{url:"roadmap/frontend/vue/basic/data-method/index.html",revision:"ad66d85d175a6466c59ba1e618a39034"},{url:"roadmap/frontend/vue/basic/for/index.html",revision:"b65849fa5a3b3eba7c882c4eb3cf69fa"},{url:"roadmap/frontend/vue/basic/if/index.html",revision:"5305520efb3ec5270a756c26740d40bf"},{url:"roadmap/frontend/vue/basic/lifecycle/index.html",revision:"1dad9f70e7618a6a5e85e9cd807d910a"},{url:"roadmap/frontend/vue/basic/render/index.html",revision:"c8ad3bc76e96fbf21f71bcfd2b466382"},{url:"roadmap/frontend/vue/basic/slot/index.html",revision:"5d0118fb6da1cce035e0edff14799767"},{url:"roadmap/frontend/vue/basic/template/index.html",revision:"4d3377c9b8aa493b61973e9e4505728a"},{url:"roadmap/frontend/vue/framework/index.html",revision:"aae1e5e0d208e873cee7665258a2acd4"},{url:"roadmap/frontend/vue/index.html",revision:"ed7629cd0cc74e1b275122b2cb4db352"},{url:"roadmap/frontend/vue/mvvm/index.html",revision:"113caf24296bb948a95e0afbb6cbc1e8"},{url:"roadmap/frontend/vue/reactive/index.html",revision:"89613162e67af5f9f45a09f6fa89dcaf"},{url:"roadmap/frontend/vue/supports/cli/index.html",revision:"cc2bf5fd0b64a9461e43cebd70db5d26"},{url:"roadmap/frontend/vue/supports/router/index.html",revision:"bda219c561174a710156077fff04628e"},{url:"roadmap/frontend/vue/supports/test/index.html",revision:"e9a9af9c6d9106f7874cf26e293c4cf8"},{url:"roadmap/frontend/vue/supports/tools/index.html",revision:"ca273145ebb96f7c87e2ec866bfb5a5f"},{url:"roadmap/frontend/vue/supports/vuex/index.html",revision:"263d68881949a7016d8e2029c232201b"},{url:"roadmap/frontend/vue/template/index.html",revision:"07bafc389354f3ded1b11757f49cd814"},{url:"roadmap/frontend/vue/template/setup-from-0/index.html",revision:"96d565f206b8762c9bce455826732838"},{url:"roadmap/frontend/vue/virtualdom/index.html",revision:"dae3cb8f934caad5450d0bb6647461b9"},{url:"roadmap/index.html",revision:"736b66a19be7bf820c9a16ab367312a6"},{url:"roadmap/java/index.html",revision:"9cd093030d09a1f01ed5c5f816cf2593"},{url:"slide/index.html",revision:"7205f5d33a2f3eac57a2a3c7decef9b7"},{url:"standard/csharp/index.html",revision:"72cf25999ebb5fa5ac800abbcbc5bbed"},{url:"standard/css/index.html",revision:"1ddd461b0b46b2c85bfe2c305792a083"},{url:"standard/html/index.html",revision:"ff7a04dad61e8de5d0c3f80278aade92"},{url:"standard/index.html",revision:"4bae5a75ad3e85531e46b258c8a03db8"},{url:"standard/javascript/index.html",revision:"9473a1d1747e69f06261663f688a6272"},{url:"standard/python/index.html",revision:"32322b0a2e54643796babbc86b43dd7c"},{url:"standard/vue/index.html",revision:"7b55435318fce77a9a549cc60d2eb672"},{url:"star/index.html",revision:"64fbfc70234830c1ee9ff1689e6dd95a"},{url:"tag/index.html",revision:"ad3cb022986b8d80aad95edb190103b3"},{url:"timeline/index.html",revision:"5898f717dd43f3937ff38002b638d579"}],{}),e.cleanupOutdatedCaches()}));
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
