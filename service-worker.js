if(!self.define){let e,a={};const s=(s,d)=>(s=new URL(s+".js",d).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(d,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(a[i])return;let c={};const f=e=>s(e,i),o={module:{uri:i},exports:c,require:f};a[i]=Promise.all(d.map((e=>o[e]||f(e)))).then((e=>(r(...e),c)))}}define(["./workbox-ebf2f394"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.439caf23.css",revision:"9f5d7505de44ca4177a7b375d4edf54f"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/133.d4458c0e.js",revision:"bd227cad718b7078f0ff93ed5c0fe151"},{url:"assets/js/134.90e3e1c5.js",revision:"4333ae665d326c9933caa4e395e88f3d"},{url:"assets/js/135.39336a20.js",revision:"663371675139999627a9f06ebde6a66f"},{url:"assets/js/136.16ba98d3.js",revision:"a5b3800e72f763572dffecb66dcd8045"},{url:"assets/js/137.2b3d9d1a.js",revision:"9ea9010572a200f27af620ae57d4748e"},{url:"assets/js/138.f8ebb31b.js",revision:"6c81780bfb262fd79581c93a0a6357b9"},{url:"assets/js/139.8755acdc.js",revision:"0dd47bdd3c07aae8ba637eae5037661a"},{url:"assets/js/140.fe88c394.js",revision:"c460a998e29bbadeca44c673c45b1ef5"},{url:"assets/js/app.dae16075.js",revision:"e1b381d0bf655c8458719ca35bf18a0f"},{url:"assets/js/layout-Blog.1ed60b76.js",revision:"80b3fbf93f55e0b530cfc32e96ace5bc"},{url:"assets/js/layout-Layout.f3e9cb51.js",revision:"a1ec8439042bd2daeba4549b5083c02b"},{url:"assets/js/layout-NotFound.5a99754f.js",revision:"96e231421bba443bb793653f37dd2fbf"},{url:"assets/js/layout-Slide.6887e3cd.js",revision:"edcf22ea44ce434057e400af4ecbc83e"},{url:"assets/js/page--69fb9c74.256eb843.js",revision:"2cf1112800d0670d0356123a75dfbfc4"},{url:"assets/js/page-Android学习之路.c7071091.js",revision:"41de2ad91af35ad8388d3db5a09c5adc"},{url:"assets/js/page-ASPNETCore开发者学习路线图.ff627737.js",revision:"735fcdc6a1c6a22713c493a6078e1874"},{url:"assets/js/page-AutoMapper.f90b0729.js",revision:"5e1ca0e8f9af8c37dbd06c5a624776a8"},{url:"assets/js/page-C.9c4ce895.js",revision:"03f5f154e8bbce224d4845d8f13dd8ae"},{url:"assets/js/page-class与style的绑定.c8e5d9c2.js",revision:"5f580965ceeffa6019f901d61692ee30"},{url:"assets/js/page-CSS基础.705749ab.js",revision:"ea514375c880da1535e115c81a44dd7e"},{url:"assets/js/page-CSS规范.aba418e5.js",revision:"e3723a539deb3069fd47e8490ee83967"},{url:"assets/js/page-CSS预处理器.31365168.js",revision:"17da9d1e9e90d80be966bd03cb2033ae"},{url:"assets/js/page-DbContext的配置.e02cf50f.js",revision:"e6f8f7b7114400e4a2583762aa05115a"},{url:"assets/js/page-Devtools.3efd332d.js",revision:"2cf5da2998cd5caf07f4eaa2d35a3f26"},{url:"assets/js/page-Docker使用文档.ade0bd55.js",revision:"c752d89f5dffb58f02b036ae220bb5ef"},{url:"assets/js/page-Docker快速搭建NPM服务器.04da150e.js",revision:"028211f4f3787f9491b6f4930285fa96"},{url:"assets/js/page-ExamplePage.feac6b7d.js",revision:"e915175501236c27b21f71fc70217499"},{url:"assets/js/page-Flutter学习之路.f0d54983.js",revision:"70c40f7da0253fb2d42f00eb98fe308f"},{url:"assets/js/page-GitHubPagesaction配置.752a1806.js",revision:"5d657c25b7d47ca3aff38ffc560ff5a3"},{url:"assets/js/page-GIT命令.1ee545ee.js",revision:"d7acef9fa802f41f1f7f193b8ffe370c"},{url:"assets/js/page-Home.80e83b34.js",revision:"d02ccc14dd37e505f62d3c5cb03f4096"},{url:"assets/js/page-HTML基础.c51df38b.js",revision:"aed8393d956b8dc295f7558f482f16ac"},{url:"assets/js/page-HTML处理方法.a4405fb6.js",revision:"44b0c7a49f695bde24c132dd7c41d49d"},{url:"assets/js/page-HTML规范.bfb03b5f.js",revision:"928a8e43f041f3bbff5263f9d315c0bb"},{url:"assets/js/page-HTTP.882cc326.js",revision:"c5c31aedd22eafc40ef4d59a4f72410f"},{url:"assets/js/page-HTTPS.71e930b7.js",revision:"0cc3f9290eeb2de5668fae9e23372722"},{url:"assets/js/page-IdentityServer4的使用.55f46917.js",revision:"0a8ca27c13e461a23de32f9b49f04eda"},{url:"assets/js/page-IP网际协议.daf2989f.js",revision:"be45811b3b7a50c699feda5ab3314c40"},{url:"assets/js/page-JavaScript基础.7fc0fabe.js",revision:"a9db949aa31a26fa0ff82e3adf013677"},{url:"assets/js/page-JavaScript开发规范.4a5cc8f9.js",revision:"c43479c1143acbcefbcb0f78c75a8c37"},{url:"assets/js/page-Java学习之路.34823b3b.js",revision:"8fbfe8c405706bf7f61400700a25719a"},{url:"assets/js/page-JWT.3fafda69.js",revision:"977700b82fd8a0d89f10bf748638a4d2"},{url:"assets/js/page-Markdown语法.713a050e.js",revision:"0b27f66519a170740e07988648521e87"},{url:"assets/js/page-MVVM.a3273ca8.js",revision:"cfacb4e283c70778c19be7614ff4ba32"},{url:"assets/js/page-npm使用.e1b683b6.js",revision:"8b5eb375356ee9335cf0a1ddaee8f721"},{url:"assets/js/page-OSI模型.49f08ade.js",revision:"65447e8523f2e8ae9929b358fe96cf15"},{url:"assets/js/page-Proxy与Reflect.3ddb65e5.js",revision:"d4d57d0b035a1530dd1a91c76e3b9272"},{url:"assets/js/page-Python开发规范.69634e0a.js",revision:"26556ec299cb73ded176d1f156ecc72e"},{url:"assets/js/page-RabbitMQ的使用.62c18642.js",revision:"38e30093f090a2d5d6672e2c61dbf1a1"},{url:"assets/js/page-React学习之路.6f4f8dd7.js",revision:"af41fd8bd2315c25464f2af5b9c81dec"},{url:"assets/js/page-Serilog的使用.36523c41.js",revision:"c790231cf4e47a7749a9e8f065de835f"},{url:"assets/js/page-Swagger文档的使用.85bb45cb.js",revision:"d675f3bc45770bdd5cdb48e65c1625a8"},{url:"assets/js/page-TCP协议.08d7ae69.js",revision:"e7f683b86a5f4b68594e51a5d65a49dc"},{url:"assets/js/page-this关键字.7dccb0e2.js",revision:"ffc4e65b36326a32472481c34ac3d60f"},{url:"assets/js/page-TypeScript.530b369d.js",revision:"c6dc6db61d438d66ccd94a11b28ad650"},{url:"assets/js/page-UDP协议.1292939b.js",revision:"664649369012c3e8cd38770cd7af5238"},{url:"assets/js/page-UI框架.e4d414df.js",revision:"45f03ca611f36c9267476be6661941a9"},{url:"assets/js/page-URL.72ec859c.js",revision:"189e448becce05d5534e7f8052dcbba4"},{url:"assets/js/page-Vim使用说明.2f51ff91.js",revision:"5d2721be1641483d9c00df9efddb1f60"},{url:"assets/js/page-VueCli.5c3ace72.js",revision:"e1a52e7321536d25b6087690ec947024"},{url:"assets/js/page-VueRouter.b75815de.js",revision:"f670bada7d0365e0204bb07c2a811be7"},{url:"assets/js/page-VueTestUtils.84077eba.js",revision:"2229df766096a42ff8c492cf765e2713"},{url:"assets/js/page-Vuex.8b059204.js",revision:"2d501aaa956be5a37127f54d41d0556f"},{url:"assets/js/page-Vue学习之路.b620aa46.js",revision:"c20c26a62bf9256fb8eceb7ab49dd37c"},{url:"assets/js/page-Vue开发规范.fc03e608.js",revision:"ae5d9c09cbf8de92177059de00dc660c"},{url:"assets/js/page-七层模型.6a56e903.js",revision:"de7e32f76fc7c48e8e0c93e272e9959c"},{url:"assets/js/page-万维网.73a7b1a7.js",revision:"e0c5212fa019dd61089956e866f0e6f4"},{url:"assets/js/page-从0搭建项目模板（vue3）.293d58fd.js",revision:"c5758af03cbd6eb4e871f0f1f1abf584"},{url:"assets/js/page-代码书写规范总纲.dcb71d8f.js",revision:"86d99cc8f01d0aa8cabaad23d8c0c7fc"},{url:"assets/js/page-使用.76d135a0.js",revision:"8c1d2ba4c63fad626b47735c925f8a8d"},{url:"assets/js/page-使用项目模板.44ede341.js",revision:"bf372f3dabbf80543ddb91fa56f07347"},{url:"assets/js/page-入门.226713b6.js",revision:"8bdd1114fd8d9e1730feba57f54f13d6"},{url:"assets/js/page-其他映射工具.121b8e87.js",revision:"fb4d89417102ec039894d7270301be89"},{url:"assets/js/page-内存缓存.a0c373e7.js",revision:"e511b8bd43804d8fe9d414c3590e7f4b"},{url:"assets/js/page-分布式缓存.971aa4e8.js",revision:"0745fe7e9f2b6eed9a06d6e03200030a"},{url:"assets/js/page-列组件JGanttColumn.babf0b6a.js",revision:"c3ab848fc82d8ed19894d558f06e3247"},{url:"assets/js/page-判断方法.65a34842.js",revision:"376208b4ed3fe83c2adfcee69e929a2d"},{url:"assets/js/page-前端学习之路.38c73c84.js",revision:"ab1955333161565a99be3f817db52c6c"},{url:"assets/js/page-前端进阶.f98e8f9c.js",revision:"a23d1b4afef72781931181e68b22418f"},{url:"assets/js/page-包管理器.55237a98.js",revision:"52b1da1424a7ca4ac66a06519797d3b0"},{url:"assets/js/page-原型和原型链详解.b4caebe9.js",revision:"8deb097c7ba1bd7eb7518ac8d8f5bac1"},{url:"assets/js/page-原理部分.060953a6.js",revision:"a7326339291831de328113c9c984946a"},{url:"assets/js/page-响应式与媒体查询.a0c0f4a6.js",revision:"ba97c35c5a32a24c5931f9d236627c97"},{url:"assets/js/page-响应式的原理.91626a22.js",revision:"557f70995c6bbf8c6b6bc37478794374"},{url:"assets/js/page-四层模型.180287f8.js",revision:"a455c41401527796cf39d44ac0a9f0d5"},{url:"assets/js/page-在ASPNET中使用授权与认证.a70f6171.js",revision:"471b7f3fcb6befe87b909c9a168b26f7"},{url:"assets/js/page-域名.2c60b424.js",revision:"2816ccb04eb2cbe672ebda17e0d1fad1"},{url:"assets/js/page-基础知识.5a62bf96.js",revision:"b50599fba2885bb56e4bf344059be228"},{url:"assets/js/page-处理日期方法.c23a43a4.js",revision:"89a5678a5ad608cbdc8d568b8c92739b"},{url:"assets/js/page-处理颜色的方法.0174ea7e.js",revision:"9c999fed1d4ca0f382813219673cba70"},{url:"assets/js/page-外部身份验证.c9410e4f.js",revision:"979a60f03cda35ba0ef17aa78aa959ce"},{url:"assets/js/page-学习路线.f8abd2c4.js",revision:"1c2d742fbaf047f787521e9926816b5c"},{url:"assets/js/page-定位.99bb21c4.js",revision:"1639f4d1ffff34e7dd6b39bae42157fc"},{url:"assets/js/page-布局.04c0a57f.js",revision:"af0fc8ca0aecffc7810b4feb44edbec8"},{url:"assets/js/page-应用性能监控系统.dba1a114.js",revision:"4946d406fafce95eb207612c3b9e9119"},{url:"assets/js/page-异步编程.f0fbbe83.js",revision:"285011e5a117def4d596e3ca1a09e75b"},{url:"assets/js/page-弹性布局（Flexbox）.fe31f226.js",revision:"94dba375d8a1c919393e7867e8da98da"},{url:"assets/js/page-循环渲染.75fb2676.js",revision:"18262ef66cc2ae8ef3d04a71391fc670"},{url:"assets/js/page-性能部分.a206eee6.js",revision:"c6748f036254ce3589293fdc8faf0460"},{url:"assets/js/page-手撸代码.79ba151e.js",revision:"56f6ff3be9c769b4512d0d52fb67cbd2"},{url:"assets/js/page-插槽.eb6d122a.js",revision:"95d699d545a34baf0e13abcd593b4846"},{url:"assets/js/page-数据和方法.b5af26e7.js",revision:"56b53c79ada2f288e46b6917862bf034"},{url:"assets/js/page-数据库.3f4c9b14.js",revision:"57961dd1cfee4ca00dc059fb129f95ca"},{url:"assets/js/page-数据的持久化（使用数据库）.c58198fe.js",revision:"1e9273da5765f7d1f27cf67482a2cf87"},{url:"assets/js/page-数据结构.4e189b5b.js",revision:"787809412ae5bce6a90f3242cc93e91e"},{url:"assets/js/page-数组的一些扩展方法.e7bddc05.js",revision:"2b5bc47f4badd73852f5a4a6f861a266"},{url:"assets/js/page-文档手册.f5f289fb.js",revision:"7b0b4cc231fee53a28adbb808a140782"},{url:"assets/js/page-服务容器.d49f4881.js",revision:"77293484178eb5272ecc8f6139471f4c"},{url:"assets/js/page-条件渲染.1e2c61c5.js",revision:"fe36c89a8ae40b6721874b6b994c0436"},{url:"assets/js/page-构建工具.e25d1a63.js",revision:"4be26f03f2bb8935ae16d1592f3dbcfc"},{url:"assets/js/page-栅格布局（Grid）.5ac68ebe.js",revision:"7be93fe10a6d74a97d40a7832e46c4f5"},{url:"assets/js/page-根组件JGantt.4308e071.js",revision:"c2780a440eb646583bd4d2f120d5aaf7"},{url:"assets/js/page-格式化工具.8336f037.js",revision:"f2181c02ef2ca05a0cfcb7d8f196a6b7"},{url:"assets/js/page-概述.7fb9b7df.js",revision:"8d266bac80554a30ab436e3c79f0024a"},{url:"assets/js/page-模型.f31aa484.js",revision:"4270674d38f449146d37ac565e2955f6"},{url:"assets/js/page-模板语法.44170ccb.js",revision:"06bdc069ba4ec649d37c4dc5aa8f4569"},{url:"assets/js/page-渲染.55db6777.js",revision:"b895b8b09a186a02b5ac6ddd1b00a727"},{url:"assets/js/page-滑块组件JGanttSlider.c890c2c1.js",revision:"4728dae1b1ee37b358fc684df3765463"},{url:"assets/js/page-生命周期.7085bd1e.js",revision:"e3ef32a5a85acfde70abfa9d31124762"},{url:"assets/js/page-生成方法.49dff517.js",revision:"69e7240ecf3f98c65741b9c69f40b3fb"},{url:"assets/js/page-盒模型.952ff4a8.js",revision:"1b1731ab154f8651b6b550ce8a9d6906"},{url:"assets/js/page-算法.b8f531df.js",revision:"f2fe39476b6fbd35d79885556f28740b"},{url:"assets/js/page-管理数据库.79d20335.js",revision:"ae6f21879c149f992743f03d98ac711a"},{url:"assets/js/page-组件.7dc2fd5c.js",revision:"f3ee66a525dbe47570d09beb496053d0"},{url:"assets/js/page-组合式API.59c6f1e8.js",revision:"f94476c906ad4ad3a66e5f975e13bf48"},{url:"assets/js/page-网络基础.188dfe3d.js",revision:"7579842f92b1d01e3b8b6effc103cc4d"},{url:"assets/js/page-网络请求.6cbc7db1.js",revision:"cd6879acd3fe93dcf3b8162f6259523e"},{url:"assets/js/page-虚拟DOM.eaef7625.js",revision:"0d6055f71a87506a43b27fb7417183da"},{url:"assets/js/page-计算属性和侦听器.82993f99.js",revision:"702763cc74619297cc6988d04d15cd8f"},{url:"assets/js/page-计算机基础.99d6d6c0.js",revision:"bc80333b1898b0696ba6c6d4d2dca892"},{url:"assets/js/page-计算机基础内容.79d42b43.js",revision:"399e3e3da332085c48c1a0d2ecd42892"},{url:"assets/js/page-详解认证中心的配置.c092eb8b.js",revision:"aae6e4e76d87df19d1c1dd26b178e8c5"},{url:"assets/js/page-跨域.1cf5a4e9.js",revision:"6c970421c969c6951c338407f9e514a7"},{url:"assets/js/page-选择器.38303da6.js",revision:"200b63cb2b61eede2fd190c7ebea7dde"},{url:"assets/js/page-通用方法.17b5194b.js",revision:"c6721bbed7ccd390f9abd7299bf95cf0"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.99fc0ed6.js",revision:"198d3d84f517651bea5120f2124150e4"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.69314708.js",revision:"ec0deacaf919625a4bb955643920c271"},{url:"assets/js/vendors~layout-Layout.e6b81aaa.js",revision:"a1a05b478d2c9cd71d7498ac95c49cd5"},{url:"assets/js/vendors~photo-swipe.ce5dd045.js",revision:"6e1de8f6b93e366472af9e7fe7b165fb"},{url:"assets/js/vendors~valine.9c5df27f.js",revision:"7e3c7261f51189e7dc5abc1aaf1cd2b3"},{url:"assets/roadmap/frontend/css-principle.svg",revision:"b9d80fa48caaf3c37c07a679ea3eeb84"},{url:"js/base.js",revision:"a11d78892850bfbd80f5eff104041105"},{url:"404.html",revision:"f804cb7e5a66ccf0db35effd4334137e"},{url:"article/index.html",revision:"1b1c69978413a40e7f5fa7f920929858"},{url:"category/index.html",revision:"379c959d944d234731c5edf7a0a857c2"},{url:"codes/index.html",revision:"c3040db2ffd5ca88036b7024ad061a77"},{url:"codes/js/array/index.html",revision:"6b6875e1e30cd6c0b98a0729e7a9c06e"},{url:"codes/js/colors/index.html",revision:"58cb3efeb9866bcd5739a31e51c2ff00"},{url:"codes/js/create/index.html",revision:"85dee6327b8958c6c505d704ceddda07"},{url:"codes/js/date/index.html",revision:"4c707960e621604867db3bc00949c595"},{url:"codes/js/html/index.html",revision:"32badc4517037b25b9c7c829cf167c02"},{url:"codes/js/index.html",revision:"6f1e4eefd4e8924c5d53aae46fb347c3"},{url:"codes/js/judge/index.html",revision:"2b3cd8fe58ed722a08ea8c690be829b2"},{url:"document/docker/example/npm/index.html",revision:"1d08d2c4d67cdc4084dd2e0d393f3486"},{url:"document/docker/index.html",revision:"a5bca9464796cdf40e1c21323176d394"},{url:"document/gantt/column/index.html",revision:"b85cb1d0c07bde946971ce2302695209"},{url:"document/gantt/common/index.html",revision:"ab0cd1658f08f83d7410e803e67d6ea5"},{url:"document/gantt/index.html",revision:"22ed56a89fc5964200cb37bd7aadb1b1"},{url:"document/gantt/README_old/index.html",revision:"3d86a436ea5a4ac76a525c3b15af206f"},{url:"document/gantt/root/index.html",revision:"840d98e6f7343e6c71429d8cca03caaa"},{url:"document/gantt/slider/index.html",revision:"ab9f488514ab65237779bc25daa94347"},{url:"document/git/github_workflow/index.html",revision:"2ae68f3edb35881835b4875a45b89594"},{url:"document/git/index.html",revision:"a4ff2fe4a31967478b2bca4d112accf0"},{url:"document/index.html",revision:"d8aa2ffd147aa4f14bebb19c635232fc"},{url:"document/markdown/index.html",revision:"d53e636277440441761e3c35ddd71a2c"},{url:"document/npm/index.html",revision:"b733a4d5047fe6f15753b082205d69a4"},{url:"document/vim/index.html",revision:"8d0296c6ed2b504cf0b5439ca6b69258"},{url:"encrypt/index.html",revision:"0925bc819ed5c238ebf50d0b9fb3a823"},{url:"example/css/position.html",revision:"8be6950ed5fa629d3227224f1faa53d1"},{url:"example/index.html",revision:"f9f956c3019e0648097371853c0cc06a"},{url:"index.html",revision:"ab783cae8fcc0868cc38aaf9161e351a"},{url:"roadmap/android/index.html",revision:"11dcfb4a5436690df7868aafb312ff8d"},{url:"roadmap/base/algorithm/index.html",revision:"35a38facd4145e17390cf47c48f34b19"},{url:"roadmap/base/computer/index.html",revision:"66ade7370df7ab375f1a77b4aed17a4b"},{url:"roadmap/base/data-structure/index.html",revision:"9e777cf2572373bdd3a8c7dad28bc641"},{url:"roadmap/base/database/index.html",revision:"fa20cb09c795a87424c6db8c743f96d0"},{url:"roadmap/base/index.html",revision:"e115030d5849b775b12708558a972d40"},{url:"roadmap/base/network/domain/index.html",revision:"4a0d04095888f6066db91c7e9c425c83"},{url:"roadmap/base/network/index.html",revision:"f485ef971959c19f8100aa2a69f6de12"},{url:"roadmap/base/network/ip/index.html",revision:"075804fd41387fd438a3104ad4ec107c"},{url:"roadmap/base/network/osi/index.html",revision:"65fbee2760a92177ba12b66849b55bea"},{url:"roadmap/base/network/osi/layer-4/index.html",revision:"765b69d445e436aa195e60e6dda480ad"},{url:"roadmap/base/network/osi/layer-7/index.html",revision:"ef9260806e13dc3dbe5a531d14494abd"},{url:"roadmap/base/network/protocol/tcp/index.html",revision:"ad370b36fbae6d4c45ad9716e0b688aa"},{url:"roadmap/base/network/protocol/udp/index.html",revision:"71601383b7f047b52386bafa5fb5cbea"},{url:"roadmap/base/network/www/http/index.html",revision:"7ee6e103376518b06e0689b570a4ac67"},{url:"roadmap/base/network/www/https/index.html",revision:"5d215ff2ebedfe32ebd2569fa3918d4a"},{url:"roadmap/base/network/www/index.html",revision:"78ab421e6f4e3807ff205dc0518e88dc"},{url:"roadmap/base/network/www/url/index.html",revision:"15f1538fd486fe1bc5cf26141ca1b6e4"},{url:"roadmap/dotnetcore/auth/example/index.html",revision:"866d3e0e47e77009333b3dc878ed775a"},{url:"roadmap/dotnetcore/auth/index.html",revision:"a472f83420eb96265b7a1a4001ea5a3a"},{url:"roadmap/dotnetcore/auth/is4/external-account/index.html",revision:"a37d524d08b7f5b766e0df477194abae"},{url:"roadmap/dotnetcore/auth/is4/index.html",revision:"fd8e2c9cff772260d88753c5c57671bb"},{url:"roadmap/dotnetcore/auth/is4/intro-config/index.html",revision:"f7ad4144668d1a29b63020b75b6b8720"},{url:"roadmap/dotnetcore/auth/is4/useef/index.html",revision:"0625bc49898ca0f66147a248c5d87e24"},{url:"roadmap/dotnetcore/auth/jwt/index.html",revision:"2ab2e904b3f57c17e3c0329325541b09"},{url:"roadmap/dotnetcore/basic/index.html",revision:"48a11ea8d49a46bfbfa8f9858d307dd6"},{url:"roadmap/dotnetcore/cache/distributed/index.html",revision:"925ef7a4ba829f96e630dfaa4e4595f3"},{url:"roadmap/dotnetcore/cache/index.html",revision:"25613a8aa206428b82cd4f8c8d147210"},{url:"roadmap/dotnetcore/cache/memory/index.html",revision:"6b5bc46ac5c5270f32ddce13d1123e29"},{url:"roadmap/dotnetcore/cors/index.html",revision:"da8079e9412f350038aaff3314fa0244"},{url:"roadmap/dotnetcore/db/efcore/context/index.html",revision:"91273541a29bf2c6a8c5c68a469b69fe"},{url:"roadmap/dotnetcore/db/efcore/index.html",revision:"e7eac289d654331a2cec559d64b6adb1"},{url:"roadmap/dotnetcore/db/efcore/manage/index.html",revision:"6f202af4cc4bdc1f9c5a077a44f8a3b9"},{url:"roadmap/dotnetcore/db/efcore/model/index.html",revision:"b762c57ec0de7b96c99c16eb09274677"},{url:"roadmap/dotnetcore/db/efcore/use/index.html",revision:"b29d26da644f5ecd868ac54cfaec80fb"},{url:"roadmap/dotnetcore/db/index.html",revision:"34d1b313f8c567ac40abeb07afbb7bf8"},{url:"roadmap/dotnetcore/db/other/index.html",revision:"24545f7723232b33dba3a0c68942adff"},{url:"roadmap/dotnetcore/di/collections/index.html",revision:"c0f694b1738977fa9b1049b5705808c0"},{url:"roadmap/dotnetcore/di/index.html",revision:"092748960bb9c42150f073888578420c"},{url:"roadmap/dotnetcore/di/lifetimes/index.html",revision:"c8f62dd81bc94cc71205d4a08c5641f4"},{url:"roadmap/dotnetcore/index.html",revision:"5f9c83d26bb10c5d3314daabc56b21ab"},{url:"roadmap/dotnetcore/log/APM/index.html",revision:"fb239b80a6c18d7304308e757e7eed8b"},{url:"roadmap/dotnetcore/log/Serilog/index.html",revision:"cb08b125791eb895179539e7465e6664"},{url:"roadmap/dotnetcore/mapper/automapper/index.html",revision:"d5dd2df8035bf79f72c407b3d972791d"},{url:"roadmap/dotnetcore/mapper/index.html",revision:"a149d38b2cb469430f3985956bd6f43d"},{url:"roadmap/dotnetcore/microservice/mq/RabbitMQ/index.html",revision:"6a9b22c30e210194f73cce9ca7abb35e"},{url:"roadmap/dotnetcore/swagger/index.html",revision:"63fa689a812cdf21fe97ee2c89393c1d"},{url:"roadmap/flutter/index.html",revision:"0f73ef7dbc9dadda926418e11a86a649"},{url:"roadmap/frontend/advanced/css-processor/index.html",revision:"3a7f0e889e2e95191da78c058bd3b57a"},{url:"roadmap/frontend/advanced/index.html",revision:"e59a609d58fb1d5d5ff553c5362e208b"},{url:"roadmap/frontend/advanced/performance/index.html",revision:"e5c72e8bd56e526420aeb28527946d08"},{url:"roadmap/frontend/advanced/principle/index.html",revision:"15a1cc692194a90e02fb8604f78fa595"},{url:"roadmap/frontend/advanced/ts/index.html",revision:"8199eaa0361c0c4a544b89a9111c2a0f"},{url:"roadmap/frontend/css/box/index.html",revision:"de3e572bb287163e575744f90d7adf56"},{url:"roadmap/frontend/css/index.html",revision:"ba3d8d2a8f3d55a805863b0fbc6eda7b"},{url:"roadmap/frontend/css/layout/flex/index.html",revision:"19f4fd4368dbf0560b5e92f1cdebadfa"},{url:"roadmap/frontend/css/layout/grid/index.html",revision:"558707d600119d44ed054fed079feac9"},{url:"roadmap/frontend/css/layout/index.html",revision:"f22eac4c5c230f83045f44de48514d0b"},{url:"roadmap/frontend/css/media/index.html",revision:"dabae86ce783311667b15fdc69844373"},{url:"roadmap/frontend/css/position/index.html",revision:"6c4eb6dd65d0d43a83c50f687ab8d4c6"},{url:"roadmap/frontend/css/selector/index.html",revision:"fa76e84d8bcc6c2454d9468adab775ce"},{url:"roadmap/frontend/engineer/build/index.html",revision:"099ebaba20041f951e64d81c64834b3a"},{url:"roadmap/frontend/engineer/format/index.html",revision:"31a1ca73e3f95a015c2d096811738acb"},{url:"roadmap/frontend/engineer/package/index.html",revision:"dd936f010532445d51e7ee16f91e193b"},{url:"roadmap/frontend/html/index.html",revision:"cec083b93184fbd9975b863d95196c79"},{url:"roadmap/frontend/index.html",revision:"5a81df28a1f46ca148ed50ea0abea1f4"},{url:"roadmap/frontend/js/asynchronous/index.html",revision:"27294ea228d7503b2aee190c7a471dd3"},{url:"roadmap/frontend/js/index.html",revision:"d13019fd55b6584148cd0d855ed20f8c"},{url:"roadmap/frontend/js/net/index.html",revision:"9fbaf8ffb718eef2e3868e3b119afed1"},{url:"roadmap/frontend/js/prototype/index.html",revision:"6ac9c12dd3837554c1dc02887f316af2"},{url:"roadmap/frontend/js/proxy/index.html",revision:"e3e06107d40e245098d2a7464cfa83c0"},{url:"roadmap/frontend/js/this/index.html",revision:"c05e087bd992925af9674e3ba071a898"},{url:"roadmap/frontend/react/index.html",revision:"36d8f211fa92dacb8e0788d86aa51d61"},{url:"roadmap/frontend/vue/basic/class-style-bind/index.html",revision:"ffc88de88c5c9e8ff118bf72085e2c40"},{url:"roadmap/frontend/vue/basic/component/index.html",revision:"12e5b2df07d912464698639008191082"},{url:"roadmap/frontend/vue/basic/composition/index.html",revision:"2a12f136a4dcf799eedb3db79613ec04"},{url:"roadmap/frontend/vue/basic/computed-watch/index.html",revision:"54a70c1be747311ef19019f3ca88c455"},{url:"roadmap/frontend/vue/basic/data-method/index.html",revision:"b7b54a8d6fc639f5a0a81edd0ab4aff2"},{url:"roadmap/frontend/vue/basic/for/index.html",revision:"06df7dc9b7a7efbddb2ae2488b923895"},{url:"roadmap/frontend/vue/basic/if/index.html",revision:"bbd8c58bd3376ee00d8a490219fd305f"},{url:"roadmap/frontend/vue/basic/lifecycle/index.html",revision:"066c98b5079546c0a0c8d96ea5b5160c"},{url:"roadmap/frontend/vue/basic/render/index.html",revision:"85fa0db40836193c187cbbe63e5fe336"},{url:"roadmap/frontend/vue/basic/slot/index.html",revision:"16524947684b8c6b82f3dfa8cd1361c7"},{url:"roadmap/frontend/vue/basic/template/index.html",revision:"86aae288111c54625e89bf555389d47e"},{url:"roadmap/frontend/vue/framework/index.html",revision:"63893f6fcdcbf1870a4b24bcb5506a2e"},{url:"roadmap/frontend/vue/index.html",revision:"b69f86ff89cb0933243b93c4f010da91"},{url:"roadmap/frontend/vue/mvvm/index.html",revision:"b5c7577fedeef83da8be525f13f06287"},{url:"roadmap/frontend/vue/reactive/index.html",revision:"8f8e77cc8976dc7efdc2843e149ccdf9"},{url:"roadmap/frontend/vue/supports/cli/index.html",revision:"5c11db2256eb390ec6aac882c24487a5"},{url:"roadmap/frontend/vue/supports/router/index.html",revision:"faaf1e392d3cee7a2c4e2b24f3cb589a"},{url:"roadmap/frontend/vue/supports/test/index.html",revision:"821977291ed3b954c3a9c3ca75bf4251"},{url:"roadmap/frontend/vue/supports/tools/index.html",revision:"17561ff6b70f487d9ddc9c909404af08"},{url:"roadmap/frontend/vue/supports/vuex/index.html",revision:"ce98f054df6b010899a2a2516ccbca98"},{url:"roadmap/frontend/vue/template/index.html",revision:"14938e3659b55d1b7a7470c9ef89d55b"},{url:"roadmap/frontend/vue/template/setup-from-0/index.html",revision:"43b618c094ad876e8784e5936af8f671"},{url:"roadmap/frontend/vue/virtualdom/index.html",revision:"3c02b6650288e2d7f2fc02ae9dfc55c6"},{url:"roadmap/index.html",revision:"eac998ea3857f1f1578e3bae9b5c23c7"},{url:"roadmap/java/index.html",revision:"e46173a3752cf26f520470f030a59abe"},{url:"slide/index.html",revision:"f3d4a08b43d70c13fed7687c7a24e34f"},{url:"standard/csharp/index.html",revision:"8b4f84ee66980db70b0250b508d97ebd"},{url:"standard/css/index.html",revision:"94c3f7f03334ccce266a3c2f2ff6c961"},{url:"standard/html/index.html",revision:"f95dcfd1ced44ac8870e3b8cc0271a4c"},{url:"standard/index.html",revision:"36f86303ff9689518d7dd3eb6056155f"},{url:"standard/javascript/index.html",revision:"4f4b164717ed26335a7538354e6af06f"},{url:"standard/python/index.html",revision:"a4179e179dd316d4ae391936f4100c87"},{url:"standard/vue/index.html",revision:"1e462236cbad1598beecdb4e94f68f3a"},{url:"star/index.html",revision:"180ecd0bb7232be700ba9da8a3b05c37"},{url:"tag/index.html",revision:"0028a2a6bb30ce3a283249270958c2c5"},{url:"timeline/index.html",revision:"3167255c15d1229299337d39a8c432b1"}],{}),e.cleanupOutdatedCaches()}));
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
