if(!self.define){let e,a={};const s=(s,d)=>(s=new URL(s+".js",d).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(d,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(a[i])return;let c={};const f=e=>s(e,i),b={module:{uri:i},exports:c,require:f};a[i]=Promise.all(d.map((e=>b[e]||f(e)))).then((e=>(r(...e),c)))}}define(["./workbox-ebf2f394"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.21f810e0.css",revision:"b55708264ef8c7aa49b9c9dfadad79a0"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/131.051d442f.js",revision:"5d91638c61885f6c6dd0e4a7095fb4cf"},{url:"assets/js/132.f98d304f.js",revision:"8369ded6d4a3038b4d6b635b2e254a58"},{url:"assets/js/133.653ea3bb.js",revision:"66cff911953bf48236fc8096ea0c3f65"},{url:"assets/js/134.66341c62.js",revision:"c7427708ec37813f04262ef4c5eb168a"},{url:"assets/js/135.d51fd94c.js",revision:"33cf9c27857681cd6375a344ebffecea"},{url:"assets/js/136.db51de27.js",revision:"861e511201cd809009061691472d4afa"},{url:"assets/js/137.1a71a413.js",revision:"912ecf21fd4a0f19f49f3719b549daa0"},{url:"assets/js/138.8f4ed143.js",revision:"13fecd5565cdc4172a8caba1432d6770"},{url:"assets/js/139.2a26975a.js",revision:"b261d43d851f18421c7553172455c177"},{url:"assets/js/app.798b6dee.js",revision:"c113e0290ab1ee9235e21c0300dc1bb7"},{url:"assets/js/layout-Blog.0c907373.js",revision:"c849433a8b4b57ded00e68ca2dff387f"},{url:"assets/js/layout-Layout.f3e9cb51.js",revision:"a1ec8439042bd2daeba4549b5083c02b"},{url:"assets/js/layout-NotFound.828cd43b.js",revision:"c18c75c2b51423dd650f14bd4fff12b6"},{url:"assets/js/layout-Slide.b3345a7a.js",revision:"7a4dc1c6eadd3d7b9e94a43583ad6530"},{url:"assets/js/page--69fb9c74.e61d21e1.js",revision:"3c0cad068e68cd884a35a8c1d2565cf6"},{url:"assets/js/page-Android学习之路.dc46c32d.js",revision:"bc19937eda873a0ca51526f87551898a"},{url:"assets/js/page-ASPNETCore开发者学习路线图.d9c4dc36.js",revision:"dea9bf410c08d9beb1bbbedb06b7fa11"},{url:"assets/js/page-AutoMapper.49f6969b.js",revision:"2cf0253c639adfc14ab26234b077d003"},{url:"assets/js/page-C.9c4ce895.js",revision:"03f5f154e8bbce224d4845d8f13dd8ae"},{url:"assets/js/page-CSS基础.3d541f79.js",revision:"525cf124d4e90065b2a5de5f94d1e396"},{url:"assets/js/page-CSS样例.7a9f3551.js",revision:"592c91e301e8c3e2d927103fdb011f46"},{url:"assets/js/page-CSS规范.d3e8eb95.js",revision:"6ca37db8ffbf2e55baa79e4ff77a6708"},{url:"assets/js/page-CSS预处理器.8698bb45.js",revision:"d68b356d8af60e627fce4f563d07ce63"},{url:"assets/js/page-DbContext的配置.3f9d1b25.js",revision:"17de2edf2f349d82aeb3c826d3591783"},{url:"assets/js/page-Devtools.1deec1a6.js",revision:"079aefae731a9616f1c7364a9ae6a7ab"},{url:"assets/js/page-Docker使用文档.2e8d4c02.js",revision:"2fee4f710dd0b971b997569bc8ba04e2"},{url:"assets/js/page-Docker快速搭建NPM服务器.24eaeec4.js",revision:"883f9d9e92dd4cce30139725a1ad1e62"},{url:"assets/js/page-Emmet使用文档.73d9caed.js",revision:"718c9975696983a62025f388b6a92d32"},{url:"assets/js/page-ExamplePage.ba7cbf93.js",revision:"503fc2461b6b864140719ad081398148"},{url:"assets/js/page-Flutter学习之路.4e932bf2.js",revision:"5f981740bd5d08b825700b15aa00ebe0"},{url:"assets/js/page-GitHubPagesaction配置.2d6b2e61.js",revision:"0ebd8810d8444c9f0e552fe8d6986ee2"},{url:"assets/js/page-GIT命令.038984cc.js",revision:"fb2111bbd0f66727974e1bc67c1bfa4f"},{url:"assets/js/page-Home.1cb89be6.js",revision:"1b489925f91a93e9944b354fa3c9d1a4"},{url:"assets/js/page-HTML基础.4c0d44ad.js",revision:"1cfa3b0de675cf0ed56eb856e0226cfc"},{url:"assets/js/page-HTML处理方法.2c3da040.js",revision:"8b2ece734c2d53e39c25a3f75f27e98c"},{url:"assets/js/page-HTML规范.8ee84023.js",revision:"8bc6f8ee24876e7b6a8845e8bac6da2f"},{url:"assets/js/page-HTTP.0ef05d24.js",revision:"0e42fa11e7283136aff5aa35713eb60c"},{url:"assets/js/page-HTTPS.f6a5758b.js",revision:"381716c3d3bcb1a3b7517cac4f7dea91"},{url:"assets/js/page-IdentityServer4的使用.18505b0a.js",revision:"1896d849abbfd8dc3d3acfd4c939b1ab"},{url:"assets/js/page-IP网际协议.f0be74e3.js",revision:"7c9bf07ae3b8c9daa8247a4c70becfe5"},{url:"assets/js/page-JavaScript基础.5477cb2b.js",revision:"5bfc3d1cd71a92c650dccd1cd491108f"},{url:"assets/js/page-JavaScript开发规范.b3d91ed9.js",revision:"38d3ce63ea19d58d7a425f8a28b2d231"},{url:"assets/js/page-Java学习之路.99c13fb2.js",revision:"ffca4fad86b78f3ba0a6097ff7120225"},{url:"assets/js/page-JWT.8832e4a5.js",revision:"9b4a66209727fc571d643bcd747c9d4a"},{url:"assets/js/page-Markdown语法.e769f0e0.js",revision:"3eb338827899bb4cd2f38b9f73164301"},{url:"assets/js/page-MVVM.a458ed4e.js",revision:"83a200a34783c1dba5e9b272251f0997"},{url:"assets/js/page-npm使用.906d505e.js",revision:"499778f884289c85eb7b789af4eb6a9d"},{url:"assets/js/page-OSI模型.d4af28c1.js",revision:"9e03f62a64ec6cb52cfb86f7444fe2b0"},{url:"assets/js/page-Proxy与Reflect.b9abfcfa.js",revision:"8233b7ffebc3fcb3f150d777f08fe886"},{url:"assets/js/page-Python开发规范.691f361f.js",revision:"482fefe36fbea0cd199209d3d904e6c8"},{url:"assets/js/page-RabbitMQ的使用.9796d3c9.js",revision:"5d02f08c9dfbe081c010d5c2dda98be0"},{url:"assets/js/page-React学习之路.53824e49.js",revision:"faf746698072cdb357837cbc213fa8eb"},{url:"assets/js/page-Serilog的使用.4b327089.js",revision:"04d53bc0402307f5bab66d55cb493b26"},{url:"assets/js/page-Swagger文档的使用.3be21960.js",revision:"92047179cbbaf5b9dd7a70501757c4fa"},{url:"assets/js/page-TCP协议.75eb0db7.js",revision:"3abfd4c13ecdbcfc980b521b0ceae966"},{url:"assets/js/page-this关键字.2c568df5.js",revision:"8022a4f50918877d95a20be6530f0219"},{url:"assets/js/page-TypeScript.fbf5728f.js",revision:"de3c0251e930463742edfe9b6ea7dea9"},{url:"assets/js/page-UDP协议.7c2c7b18.js",revision:"a64e2ce1c76de7d7753c64dc79c8a97d"},{url:"assets/js/page-UI框架.ba1811ae.js",revision:"e531f66662e65b4c44e6262dbd26c410"},{url:"assets/js/page-URL.3cf1de5e.js",revision:"e93d2f6ea39bc23761eeca077ab1c2d4"},{url:"assets/js/page-Vim使用说明.80607e6b.js",revision:"4036d5a2b00e664277656eb4266cb1e8"},{url:"assets/js/page-VueCli.338c3e91.js",revision:"57bf0c7c920f3fe8cc1dd9d52ec41025"},{url:"assets/js/page-VueRouter.30fd8837.js",revision:"5a407a906376071c97e92f7279fcd066"},{url:"assets/js/page-VueTestUtils.ad459b80.js",revision:"571290d538dd68caf2cc6737d2feec1f"},{url:"assets/js/page-Vuex.09e619a0.js",revision:"79aa032b690c151c5d0e38d12c203746"},{url:"assets/js/page-Vue学习之路.7e7a271d.js",revision:"a6894850ba67b4f8e4dbbfdb95b38201"},{url:"assets/js/page-Vue开发规范.7a7ed436.js",revision:"25fc2ac259291439a0e17f40015a27ae"},{url:"assets/js/page-七层模型.b925be2e.js",revision:"013d290979e0c0fabb5bebbc6533745b"},{url:"assets/js/page-万维网.e4169df3.js",revision:"522165edcc0c5cb42470066514ef5516"},{url:"assets/js/page-从0搭建项目模板（vue3）.f2bf2722.js",revision:"13d4d0f712235d04dddcb9ef105e3746"},{url:"assets/js/page-代码书写规范总纲.170539d7.js",revision:"8dca2cddc89dfadf51ba8306fa1ae669"},{url:"assets/js/page-使用.c5c610fd.js",revision:"1d3606b58968053bb5b22a0b3015ff1d"},{url:"assets/js/page-使用项目模板.15ae0b95.js",revision:"1b836c9fd60f105e4dab17167bae48f3"},{url:"assets/js/page-入门.7f3b7297.js",revision:"31fa5f2c0a6d0bc2ab1629e516b29e08"},{url:"assets/js/page-其他映射工具.4e002798.js",revision:"caa56d9941af664e9807d973c1b9c229"},{url:"assets/js/page-内存缓存.0f376291.js",revision:"e77c88b335a5307132400b638460768f"},{url:"assets/js/page-分布式缓存.418cad84.js",revision:"5c93c8435d01295127753cd04f56b64b"},{url:"assets/js/page-列组件JGanttColumn.a8d9345f.js",revision:"3e3b5f29d466ac3be255f812bcfd9663"},{url:"assets/js/page-判断方法.e7ef31c1.js",revision:"8528f93ec876a681c2f38253700c9123"},{url:"assets/js/page-前端学习之路.707a4735.js",revision:"915745f73dfb6f48ff304b835efeac28"},{url:"assets/js/page-前端进阶.33da04bf.js",revision:"4371e1d45e1bd7bccaa4b9f550916d01"},{url:"assets/js/page-包管理器.9dbf2e76.js",revision:"1d7f66d57d9b2f503efa4348b5b74679"},{url:"assets/js/page-原型和原型链详解.4ddc97aa.js",revision:"fa941faad18803c5e1c25a75e4cb2f2e"},{url:"assets/js/page-原理部分.305a26a6.js",revision:"a128d5a862324251b140a28012c5ecaf"},{url:"assets/js/page-双向绑定.c1be454b.js",revision:"7e38e0f2e9d8326653cf971c2c9453fa"},{url:"assets/js/page-响应式与媒体查询.49f4de75.js",revision:"b471b509efe78ca91fc931b84a86adb9"},{url:"assets/js/page-响应式的原理.341166fc.js",revision:"ee49749ef141453ffdf0ac7349694cfa"},{url:"assets/js/page-四层模型.f7778ea9.js",revision:"5991d8199f4aa29d32415c4269374e74"},{url:"assets/js/page-在ASPNET中使用授权与认证.52b17821.js",revision:"a4f4471673ff0c713f692ccb877698e5"},{url:"assets/js/page-域名.bc1206a4.js",revision:"6062566934a563e29957d44151189f48"},{url:"assets/js/page-基础知识.a6f8ccae.js",revision:"352ff2eabcf256e806d5cb1a6f13a3e7"},{url:"assets/js/page-处理日期方法.749e016a.js",revision:"f44f736ba7c1b675783ff6b99872675e"},{url:"assets/js/page-处理颜色的方法.a0085ac6.js",revision:"d469b151742c00d3c179bee5334f2314"},{url:"assets/js/page-外部身份验证.2b352d6f.js",revision:"38817ca741cc0ca96809248973ff8087"},{url:"assets/js/page-学习路线.04cd2c31.js",revision:"d082aabdf4083b569ed3de0e93b86e4b"},{url:"assets/js/page-定位.b6536098.js",revision:"367bdff732dc8b823d9737bb592ca178"},{url:"assets/js/page-布局.b2bcde7e.js",revision:"0ec6c27480a3f91ba5cc9cff53447c0a"},{url:"assets/js/page-常用的转换方法.d8872f79.js",revision:"cb5de462e85c55c851a371803318175b"},{url:"assets/js/page-应用性能监控系统.7dd8a06a.js",revision:"ecdd767fe6538dbc640d888151985a42"},{url:"assets/js/page-异步编程.6a7ce7d0.js",revision:"141ebfb7b9b9231ad68927c835afbb06"},{url:"assets/js/page-弹性布局（Flexbox）.c679b78b.js",revision:"45cb9b24aec2056635caf675c25a4765"},{url:"assets/js/page-性能部分.c92eef00.js",revision:"3959d33f59fe27047e6e98935223033e"},{url:"assets/js/page-手撸代码.c4a4e705.js",revision:"15652f285f6ac44010326074b98117b7"},{url:"assets/js/page-数据库.059399cc.js",revision:"add1a009786bd3000d0f949b47beb3c4"},{url:"assets/js/page-数据的持久化（使用数据库）.7f428290.js",revision:"8f51ee0381df2e73cfd2a5c1a0641a39"},{url:"assets/js/page-数据结构.c41db534.js",revision:"b08e28c05c57c2dd22e0c47f3a362f1c"},{url:"assets/js/page-数组的一些扩展方法.6b778c99.js",revision:"1e3018d6f15fde5436fdc8fc7f35c242"},{url:"assets/js/page-文档手册.959f1af5.js",revision:"a359d70475445f48646ed6d8c2975e18"},{url:"assets/js/page-服务容器.5e0e6fd2.js",revision:"baf392804f682f59f77f33fbf61bbc21"},{url:"assets/js/page-构建工具.a8ad9e91.js",revision:"6bb5ddc5e269d88ac9302ac815a26cf9"},{url:"assets/js/page-栅格布局（Grid）.ce207641.js",revision:"fb0e9505f48e30eea4079a8212be2a6d"},{url:"assets/js/page-样例.2f91a0c0.js",revision:"d65ad2099b4dc35e5437956ee00a2baf"},{url:"assets/js/page-根组件JGantt.21770968.js",revision:"5b74498c321568f29ab5096eac939612"},{url:"assets/js/page-格式化工具.6ba5e1a9.js",revision:"1fd674f78f1c5b05d119da83078c344c"},{url:"assets/js/page-概述.51ff75ba.js",revision:"f0ec44f2939f8001ba9bd820e7db3f61"},{url:"assets/js/page-模型.db9fe006.js",revision:"bd0a4a9f9edb06b510e843f412722f1f"},{url:"assets/js/page-正则表达式的使用.48eb0471.js",revision:"a6032bacfc98f3c7339848e219764154"},{url:"assets/js/page-滑块组件JGanttSlider.5a197ab5.js",revision:"54d2bef9b2d93764ea80b357709c9afb"},{url:"assets/js/page-生命周期.dcd31b2d.js",revision:"c273d311fba3b633c9387a43ac8c4dd1"},{url:"assets/js/page-生成方法.8d41dd99.js",revision:"6ec201ebd477c08743d830b0b75d96e1"},{url:"assets/js/page-盒模型.573608ba.js",revision:"ef394fd7369f22aa57dbf1efc121e3f4"},{url:"assets/js/page-算法.253dd043.js",revision:"253c393ccb548d2aeea64607b1d605b4"},{url:"assets/js/page-管理数据库.6033887e.js",revision:"982ec75780b9307e312d4c3cac0fc8ef"},{url:"assets/js/page-组件.8798ea10.js",revision:"5b3f728d86c371594730936358947c78"},{url:"assets/js/page-网络基础.d4898343.js",revision:"7c7fe29cd8de20b24928715987fb6a40"},{url:"assets/js/page-网络请求.1be4c159.js",revision:"7027d2a50f793d87611ac7bb1c19adfa"},{url:"assets/js/page-虚拟DOM.e33d679a.js",revision:"475b616b415ef7a188391c19ed0bf0f3"},{url:"assets/js/page-计算机基础.02eaac1c.js",revision:"98aa728ccf4cc2e80c1ab633f1d51939"},{url:"assets/js/page-计算机基础内容.0489f4f2.js",revision:"2319f4afeb2ce5f7eb673bfa94ef9e59"},{url:"assets/js/page-详解认证中心的配置.becd2d96.js",revision:"0b6ff0c2a7979b1225e67d03eabaa310"},{url:"assets/js/page-跨域.dd5126bf.js",revision:"8db0748ebc18c41f9ce48810d64df037"},{url:"assets/js/page-选择器.ddda3589.js",revision:"0c3aa905f1aa8e1e70bebfaf84b86cd4"},{url:"assets/js/page-通用方法.ea99738a.js",revision:"50e6a8eae50c0d72c6625a760cae080e"},{url:"assets/js/page-高级样例.a386432a.js",revision:"04e8065012e4bffe99967ba9aee102a8"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.1b60d4b7.js",revision:"b387a641a7bcbe359259603287b7e7b6"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.162fbb1b.js",revision:"d76644f390da22a5937ba7b537b889f2"},{url:"assets/js/vendors~layout-Layout.ed1cb93b.js",revision:"8f8ed7ee6dc7cd7bf9ac656945326208"},{url:"assets/js/vendors~photo-swipe.e4310aae.js",revision:"db95ab8e028420cc51837edfb5c369b2"},{url:"assets/js/vendors~valine.019ac904.js",revision:"7e12a08a90e54e1135f682fd23e235e6"},{url:"assets/roadmap/frontend/css-principle.svg",revision:"b9d80fa48caaf3c37c07a679ea3eeb84"},{url:"js/base.js",revision:"a11d78892850bfbd80f5eff104041105"},{url:"404.html",revision:"4d8630a10fa7cbedcb205ec428416774"},{url:"article/index.html",revision:"b49c47d72686cfd895fcfaaf74b43b1e"},{url:"category/index.html",revision:"f419c254c90de7b3ff9e8801992c8928"},{url:"codes/index.html",revision:"0e6e4ae147ca97b61d2eb09e99a74235"},{url:"codes/js/array/index.html",revision:"53b7e0aead0d4ae509af694092dfaad9"},{url:"codes/js/colors/index.html",revision:"040c15f7b59dfe52ea28099a77abe600"},{url:"codes/js/create/index.html",revision:"b70e526b06ce4bb2c773771de4104ab2"},{url:"codes/js/date/index.html",revision:"2d831d3475b43ad274da6f9ece500940"},{url:"codes/js/html/index.html",revision:"2ead08c34b6fa0c08fc7fc2865041b13"},{url:"codes/js/index.html",revision:"d3e96136b8f35325b584fa5b350c9415"},{url:"codes/js/judge/index.html",revision:"d3f244e3911b536d44b74d3c7b2d4707"},{url:"codes/js/transform/index.html",revision:"8922c4e8705bf11b4f5134e77317b29a"},{url:"demo/css/adv/index.html",revision:"b2d9f2e205775fc232d4d857e6d916ca"},{url:"demo/css/index.html",revision:"d022d0fe0d6255cf3e766afac43b6f05"},{url:"demo/index.html",revision:"61e41fafcde315288cba6a6bb7a279a5"},{url:"document/docker/example/npm/index.html",revision:"a53cc9b83141047b0be66b3bcaa7934d"},{url:"document/docker/index.html",revision:"3c1e70e944cf2003cdba98513370cc8f"},{url:"document/emmet/index.html",revision:"cea04fec1537bab535f89056e4469744"},{url:"document/gantt/column/index.html",revision:"aed1c7cc153771ad0cf9d6382a911dad"},{url:"document/gantt/common/index.html",revision:"f7334582e37cf66a2d4f85570ee83d20"},{url:"document/gantt/index.html",revision:"1bb26512bb10387936f20df3dad1fb68"},{url:"document/gantt/README_old/index.html",revision:"1c5d01d9fbaaadda0ab62f4561157a4b"},{url:"document/gantt/root/index.html",revision:"fe6b9704f2a87c3ff70810ec1aa36d46"},{url:"document/gantt/slider/index.html",revision:"d8130c56e1da7e44fa96188d7e04d5c8"},{url:"document/git/github_workflow/index.html",revision:"c5c4aeb84b018c0ad2d8dad13c7626c5"},{url:"document/git/index.html",revision:"a7bced67116f47f0f8d723fa197eaa4d"},{url:"document/index.html",revision:"30a94e238b8e1837d65e2209690d664a"},{url:"document/markdown/index.html",revision:"1a774a9253f74178163e18fceef8824f"},{url:"document/npm/index.html",revision:"b0155216fd66837180d82ff0be719cc6"},{url:"document/regexp/index.html",revision:"b8bf84eb645e930ce454d13423b67138"},{url:"document/vim/index.html",revision:"24587d9e9ba1d7bac2bb668d5c5e4462"},{url:"encrypt/index.html",revision:"2a19dda8e17404ea0705cb965f0bcd40"},{url:"example/css/position.html",revision:"8be6950ed5fa629d3227224f1faa53d1"},{url:"example/index.html",revision:"24bf07ea45c0ecd128835273633b8510"},{url:"index.html",revision:"2da2a6df798560ec188abfe3477525b2"},{url:"roadmap/android/index.html",revision:"b5585fb208382916170acae0705418ff"},{url:"roadmap/base/algorithm/index.html",revision:"d658c0d7319e66e4e3f97e947823737a"},{url:"roadmap/base/computer/index.html",revision:"2da4a46d39c609f5c24ca1ff94c9327e"},{url:"roadmap/base/data-structure/index.html",revision:"12f516469e0902a9e1f3d5252c7d8c23"},{url:"roadmap/base/database/index.html",revision:"bd26242bdc0f0861a1300596c4bb347a"},{url:"roadmap/base/index.html",revision:"216e19a7cbf30db6fa687ea444aec261"},{url:"roadmap/base/network/domain/index.html",revision:"ff1cc25a3cd2f2e4628f6d0f9f35312f"},{url:"roadmap/base/network/index.html",revision:"8959cda0b7a08b4d6992d4afc5e461a6"},{url:"roadmap/base/network/ip/index.html",revision:"9e9ebc4ddfbcdd4e2324db609cda6863"},{url:"roadmap/base/network/osi/index.html",revision:"1e8e32635e97a21168f276310cd73039"},{url:"roadmap/base/network/osi/layer-4/index.html",revision:"b4257d4909bd888f7cf852d5a3f5ef86"},{url:"roadmap/base/network/osi/layer-7/index.html",revision:"f455bc26518fd94fb34ee5fbdf3bc1a4"},{url:"roadmap/base/network/protocol/tcp/index.html",revision:"e51dd5cee562ae2814e2bf42b9e6d789"},{url:"roadmap/base/network/protocol/udp/index.html",revision:"6b759cbecade5de2109a40c302be0ce4"},{url:"roadmap/base/network/www/http/index.html",revision:"c457a57698dae1851e68e70b0a3c1ab4"},{url:"roadmap/base/network/www/https/index.html",revision:"788a80b632014496a67863326ed9a52e"},{url:"roadmap/base/network/www/index.html",revision:"b561dc4feca554e479161f2ffa51d076"},{url:"roadmap/base/network/www/url/index.html",revision:"8b8ae1369bb0cfc920356aea87de33ed"},{url:"roadmap/dotnetcore/auth/example/index.html",revision:"81a16cd8573a256632be12483c961c58"},{url:"roadmap/dotnetcore/auth/index.html",revision:"c0d820c4272c2ae0ab6899caabe2dc0c"},{url:"roadmap/dotnetcore/auth/is4/external-account/index.html",revision:"56a6ebc9c2d6dff4acba850b0739f844"},{url:"roadmap/dotnetcore/auth/is4/index.html",revision:"a32462bce02051b0d8a622ea575e836a"},{url:"roadmap/dotnetcore/auth/is4/intro-config/index.html",revision:"cca7671b5d29481c2da7b0abfe8b4105"},{url:"roadmap/dotnetcore/auth/is4/useef/index.html",revision:"466675401751058dce50306a403476f3"},{url:"roadmap/dotnetcore/auth/jwt/index.html",revision:"088ca0aa9bb63099ae5ba47838458ffa"},{url:"roadmap/dotnetcore/basic/index.html",revision:"2aefcbae06cccd6222eacbd9068c5cd7"},{url:"roadmap/dotnetcore/cache/distributed/index.html",revision:"25ed78cfa7fe18bc358c94161c9216e9"},{url:"roadmap/dotnetcore/cache/index.html",revision:"7a754de0f3b101a01f6b11e208afe54e"},{url:"roadmap/dotnetcore/cache/memory/index.html",revision:"21fd6ece99c3ae2bf73d32f5502f9ff4"},{url:"roadmap/dotnetcore/cors/index.html",revision:"bd02cbdf2ad96327c7cff027c2775e2b"},{url:"roadmap/dotnetcore/db/efcore/context/index.html",revision:"9c08e4cd65584175674a72eef5af1ca2"},{url:"roadmap/dotnetcore/db/efcore/index.html",revision:"6efa3e2bb7a60cff640ba3a4245a6b65"},{url:"roadmap/dotnetcore/db/efcore/manage/index.html",revision:"fb9e3bd28adfc82563761615921c5497"},{url:"roadmap/dotnetcore/db/efcore/model/index.html",revision:"eed2159edc8eb51848cfa6e224891a1a"},{url:"roadmap/dotnetcore/db/efcore/use/index.html",revision:"4029370f97b2c1a208ab3416a8037799"},{url:"roadmap/dotnetcore/db/index.html",revision:"15026fe49662f4145e4068d82226ce76"},{url:"roadmap/dotnetcore/db/other/index.html",revision:"1d332f75c8ab03291289bd61ba18df58"},{url:"roadmap/dotnetcore/di/collections/index.html",revision:"76684067887a2d262ce591a121fbe24d"},{url:"roadmap/dotnetcore/di/index.html",revision:"a1652f02248d2d6769cfb584ddbf7503"},{url:"roadmap/dotnetcore/di/lifetimes/index.html",revision:"b3732fa78afad49952073dab86baabe3"},{url:"roadmap/dotnetcore/index.html",revision:"38fb4028a7206cf22e57669286f7f4c3"},{url:"roadmap/dotnetcore/log/APM/index.html",revision:"4a27800e0875beef1490bc49ba2decef"},{url:"roadmap/dotnetcore/log/Serilog/index.html",revision:"e34247c880857ad0e8e92c1637e89c05"},{url:"roadmap/dotnetcore/mapper/automapper/index.html",revision:"110cf16d689531138365b4792878121f"},{url:"roadmap/dotnetcore/mapper/index.html",revision:"b182dd846e181a88f2905f1111750bfc"},{url:"roadmap/dotnetcore/microservice/mq/RabbitMQ/index.html",revision:"8ad04d2f7add196352033d215f77cdab"},{url:"roadmap/dotnetcore/swagger/index.html",revision:"35969717080887c5b268b442002999bd"},{url:"roadmap/flutter/index.html",revision:"24bb8f8546b6a2fd2847092c891f4250"},{url:"roadmap/frontend/advanced/css-processor/index.html",revision:"1efd93682100bd9e2a0355da961e5ad1"},{url:"roadmap/frontend/advanced/index.html",revision:"17cb41f908c8404d9e663a6b3157fa03"},{url:"roadmap/frontend/advanced/performance/index.html",revision:"487f92c846f10e8084960cf45ab66850"},{url:"roadmap/frontend/advanced/principle/index.html",revision:"5005ac2c0f65820c5f009d0fcfc0a8ec"},{url:"roadmap/frontend/advanced/ts/index.html",revision:"4975ca1e37799198a74bb4bfee3ee40b"},{url:"roadmap/frontend/css/box/index.html",revision:"cf876cf2bb0103a52de019c439a1b6d3"},{url:"roadmap/frontend/css/index.html",revision:"32c79d4dc51ac07d2e0583d2cf719895"},{url:"roadmap/frontend/css/layout/flex/index.html",revision:"ff0fcade6539b7c4361d05112bc7f21b"},{url:"roadmap/frontend/css/layout/grid/index.html",revision:"80068f3348cd021fbb931187803f5cc7"},{url:"roadmap/frontend/css/layout/index.html",revision:"c371ccfa2a686ee8e2e6aa431e1c722a"},{url:"roadmap/frontend/css/media/index.html",revision:"2fcc3dc0420a72e046bb313397ca0a68"},{url:"roadmap/frontend/css/position/index.html",revision:"b9ad54d03e919ef388d76cff62bf0f45"},{url:"roadmap/frontend/css/selector/index.html",revision:"7f6a45da234184afc679c982a5073339"},{url:"roadmap/frontend/engineer/build/index.html",revision:"6849b11e425d16d8a709012536898fa2"},{url:"roadmap/frontend/engineer/format/index.html",revision:"414b127c884593e9a9f234e800dae493"},{url:"roadmap/frontend/engineer/package/index.html",revision:"e68eebe4e521d6d49031776cd7fcd5de"},{url:"roadmap/frontend/html/index.html",revision:"633602a2ae91653523e5740a8e4c4a35"},{url:"roadmap/frontend/index.html",revision:"2bf882d03fc55cf11e8b01e415d7404d"},{url:"roadmap/frontend/js/asynchronous/index.html",revision:"34e08fc3c5b95c7bbb07dbf8259beb08"},{url:"roadmap/frontend/js/index.html",revision:"9f374dbc25ca4de0ac147bb43ab81064"},{url:"roadmap/frontend/js/net/index.html",revision:"7ed1e6f3b64680aa86f06a5713c15f46"},{url:"roadmap/frontend/js/prototype/index.html",revision:"76db6d70f0df7af089e4c422c3f85392"},{url:"roadmap/frontend/js/proxy/index.html",revision:"a6817f0329b2450b52111e836f40e9b8"},{url:"roadmap/frontend/js/this/index.html",revision:"f5f5caf05a1f450842c238c1cb6d5286"},{url:"roadmap/frontend/react/index.html",revision:"6a402f02081ff05cb88e145c5744071b"},{url:"roadmap/frontend/vue/basic/component/index.html",revision:"62b6bc088fd9abff2a04c925b72bf0d7"},{url:"roadmap/frontend/vue/basic/v-model/index.html",revision:"bb698fd4fcf4c812f495d19fbc7b7bdc"},{url:"roadmap/frontend/vue/framework/index.html",revision:"7fba8ce3d7c04b2498337d160db16b39"},{url:"roadmap/frontend/vue/index.html",revision:"44787a3080dba67cdaa54fa10e885c76"},{url:"roadmap/frontend/vue/mvvm/index.html",revision:"83a9ec4aca0cc915a5abe979b2c885e0"},{url:"roadmap/frontend/vue/reactive/index.html",revision:"92a419d3094c356591bdf8215bf06dc9"},{url:"roadmap/frontend/vue/supports/cli/index.html",revision:"0f9377cd05fd1ed5794c54bde39f8779"},{url:"roadmap/frontend/vue/supports/router/index.html",revision:"402168d05280d371fa1a331e28173f7a"},{url:"roadmap/frontend/vue/supports/test/index.html",revision:"9037cc735eb450fde08f8f5dc9223cf3"},{url:"roadmap/frontend/vue/supports/tools/index.html",revision:"ee10d5405676cbb1cd99c38b755c0078"},{url:"roadmap/frontend/vue/supports/vuex/index.html",revision:"f80a103f8ab43add91a0cd114b65cd8f"},{url:"roadmap/frontend/vue/template/index.html",revision:"e1eb8c59be1dcf7e741bf02a5654060c"},{url:"roadmap/frontend/vue/template/setup-from-0/index.html",revision:"148c2e6d93a07fa0203a81e1cbd3c96f"},{url:"roadmap/frontend/vue/virtualdom/index.html",revision:"84bb93ad0ff8d240edde4d003ea74498"},{url:"roadmap/index.html",revision:"f0b28d479b1a96cb7f3c814a641e9804"},{url:"roadmap/java/index.html",revision:"f55150d5a215049d50f0d5f15a57975a"},{url:"slide/index.html",revision:"c1806d1450eec9fe2b68ae40ff07cf92"},{url:"standard/csharp/index.html",revision:"41da1f8bf9ddcc50d3e52df8349b779d"},{url:"standard/css/index.html",revision:"d549d8788c1176e59467c0d974df753a"},{url:"standard/html/index.html",revision:"1ceeecf970eb6121148b16861a5e3f48"},{url:"standard/index.html",revision:"f340039c8df6518e25eede54ca9bf347"},{url:"standard/javascript/index.html",revision:"cba625020264d75608cd7f71b8da8dd3"},{url:"standard/python/index.html",revision:"c9b1849581a7590433995711c16d7bc7"},{url:"standard/vue/index.html",revision:"cb7cac3fade8252ef8a09b23be7eca6f"},{url:"star/index.html",revision:"7defe7fe75744d88bdd4aa429c6995f8"},{url:"tag/index.html",revision:"fb8d9ab0231a00a18b2d4982d1e1f6fa"},{url:"timeline/index.html",revision:"6470b18bdcd8bab4b4b786799d27df21"}],{}),e.cleanupOutdatedCaches()}));
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
