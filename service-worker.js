if(!self.define){let e,a={};const s=(s,d)=>(s=new URL(s+".js",d).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(d,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(a[i])return;let c={};const f=e=>s(e,i),b={module:{uri:i},exports:c,require:f};a[i]=Promise.all(d.map((e=>b[e]||f(e)))).then((e=>(r(...e),c)))}}define(["./workbox-ebf2f394"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.439caf23.css",revision:"9f5d7505de44ca4177a7b375d4edf54f"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/132.05a7342b.js",revision:"c3ef38b53e4e56c55ed6a8286f153c12"},{url:"assets/js/133.4ac30ed0.js",revision:"abeba184539d2e4ea5088ad2fce43ab6"},{url:"assets/js/134.4f009062.js",revision:"c389b7b767acdf102776b8c5c39dc9eb"},{url:"assets/js/135.d4f99b2c.js",revision:"6dc75d789827693a61a6f3c4b18d9070"},{url:"assets/js/136.8e19f523.js",revision:"1bf9a33f0c674bb6b36506480327c9e3"},{url:"assets/js/137.bf3ba61e.js",revision:"1f45da0c4a126a40520531dc2924ce97"},{url:"assets/js/138.24593688.js",revision:"21a976b7f78364b5b054c593156e4178"},{url:"assets/js/139.a309ba07.js",revision:"b72588acb8cea57a8f75add3542af5b3"},{url:"assets/js/app.98c39817.js",revision:"8034909c2f671bf96dae499d0b9e3921"},{url:"assets/js/layout-Blog.1ed60b76.js",revision:"80b3fbf93f55e0b530cfc32e96ace5bc"},{url:"assets/js/layout-Layout.f3e9cb51.js",revision:"a1ec8439042bd2daeba4549b5083c02b"},{url:"assets/js/layout-NotFound.5a99754f.js",revision:"96e231421bba443bb793653f37dd2fbf"},{url:"assets/js/layout-Slide.6887e3cd.js",revision:"edcf22ea44ce434057e400af4ecbc83e"},{url:"assets/js/page--69fb9c74.256eb843.js",revision:"2cf1112800d0670d0356123a75dfbfc4"},{url:"assets/js/page-Android学习之路.c7071091.js",revision:"41de2ad91af35ad8388d3db5a09c5adc"},{url:"assets/js/page-ASPNETCore开发者学习路线图.ff627737.js",revision:"735fcdc6a1c6a22713c493a6078e1874"},{url:"assets/js/page-AutoMapper.f90b0729.js",revision:"5e1ca0e8f9af8c37dbd06c5a624776a8"},{url:"assets/js/page-C.9c4ce895.js",revision:"03f5f154e8bbce224d4845d8f13dd8ae"},{url:"assets/js/page-class与style的绑定.3326ec06.js",revision:"94a312df262d698dc04a2784dbf016c1"},{url:"assets/js/page-CSS基础.705749ab.js",revision:"ea514375c880da1535e115c81a44dd7e"},{url:"assets/js/page-CSS规范.941d6682.js",revision:"13aae1029e1d49e1d88b2085169c21e0"},{url:"assets/js/page-CSS预处理器.31365168.js",revision:"17da9d1e9e90d80be966bd03cb2033ae"},{url:"assets/js/page-DbContext的配置.e02cf50f.js",revision:"e6f8f7b7114400e4a2583762aa05115a"},{url:"assets/js/page-Devtools.51abe3c8.js",revision:"02351e3b6541b40b7eb91f97ff259f6b"},{url:"assets/js/page-Docker使用文档.f13ee261.js",revision:"6e6eb584013f0cbf49db2596c20d6ac2"},{url:"assets/js/page-Docker快速搭建NPM服务器.04da150e.js",revision:"028211f4f3787f9491b6f4930285fa96"},{url:"assets/js/page-ExamplePage.204eca84.js",revision:"dab2d6575b12bc3ff8862f0ad89f769d"},{url:"assets/js/page-Flutter学习之路.f0d54983.js",revision:"70c40f7da0253fb2d42f00eb98fe308f"},{url:"assets/js/page-GitHubPagesaction配置.752a1806.js",revision:"5d657c25b7d47ca3aff38ffc560ff5a3"},{url:"assets/js/page-GIT命令.1ee545ee.js",revision:"d7acef9fa802f41f1f7f193b8ffe370c"},{url:"assets/js/page-Home.80e83b34.js",revision:"d02ccc14dd37e505f62d3c5cb03f4096"},{url:"assets/js/page-HTML基础.c51df38b.js",revision:"aed8393d956b8dc295f7558f482f16ac"},{url:"assets/js/page-HTML处理方法.a4405fb6.js",revision:"44b0c7a49f695bde24c132dd7c41d49d"},{url:"assets/js/page-HTML规范.34f1f623.js",revision:"734548ea416a547bf5ab4fae39b598c7"},{url:"assets/js/page-HTTP.882cc326.js",revision:"c5c31aedd22eafc40ef4d59a4f72410f"},{url:"assets/js/page-HTTPS.71e930b7.js",revision:"0cc3f9290eeb2de5668fae9e23372722"},{url:"assets/js/page-IdentityServer4的使用.55f46917.js",revision:"0a8ca27c13e461a23de32f9b49f04eda"},{url:"assets/js/page-IP网际协议.8194b8ac.js",revision:"c894e50780b013d324327fce81eb03c2"},{url:"assets/js/page-JavaScript基础.c6a76b48.js",revision:"760e4bc127e1412bdac3e9baa3348158"},{url:"assets/js/page-JavaScript开发规范.bdb7173a.js",revision:"536875436bd137b27e461590d198cf87"},{url:"assets/js/page-Java学习之路.10b5f4c5.js",revision:"c2c82bc8912b06cd467990cf9f290d17"},{url:"assets/js/page-JWT.3fafda69.js",revision:"977700b82fd8a0d89f10bf748638a4d2"},{url:"assets/js/page-Markdown语法.713a050e.js",revision:"0b27f66519a170740e07988648521e87"},{url:"assets/js/page-MVVM.c2a17f57.js",revision:"7167a8b6d7d75ddc52d8b842e6db3502"},{url:"assets/js/page-npm使用.cdac9539.js",revision:"d1eef96c623db28403a72bfed065615a"},{url:"assets/js/page-OSI模型.49f08ade.js",revision:"65447e8523f2e8ae9929b358fe96cf15"},{url:"assets/js/page-Python开发规范.923e0df9.js",revision:"12777a447a88052b4254e2e126e25d9c"},{url:"assets/js/page-RabbitMQ的使用.97ec735f.js",revision:"4f7758ece27ecd7f62b9a901945318de"},{url:"assets/js/page-React学习之路.22f10312.js",revision:"7f509adf8b4c1f6e681df2133049469a"},{url:"assets/js/page-Serilog的使用.a42cd724.js",revision:"49b24d5bc469367d81192ffa14b95ab3"},{url:"assets/js/page-Swagger文档的使用.64287a18.js",revision:"aafe3cc39eb63c8004939fbd61be0388"},{url:"assets/js/page-TCP协议.b3f025bb.js",revision:"89a53e1d758d97a5c44a0c8695d0aafb"},{url:"assets/js/page-this关键字.3da41887.js",revision:"e7f9b9facbe5a4f3cf4fb7890441aae1"},{url:"assets/js/page-TypeScript.c7f0380e.js",revision:"8bddd4974fc9f1542233bac4bb20e25a"},{url:"assets/js/page-UDP协议.fe1274cd.js",revision:"221a934ed758ea114a3bf8ac7d893be0"},{url:"assets/js/page-UI框架.ddeeda8a.js",revision:"0cbd38ff69d8fc9e72f0f8a1f39852a2"},{url:"assets/js/page-URL.ab565e90.js",revision:"3e5ce07c25abf31f617e6f4a0f3cd878"},{url:"assets/js/page-Vim使用说明.3dd79034.js",revision:"19e85e6e0536f1c15b06adcd4a30a27a"},{url:"assets/js/page-VueCli.f2bcb489.js",revision:"4603cab31aa6ba0f24d98c5bd84f079e"},{url:"assets/js/page-VueRouter.68ea5c71.js",revision:"35313aa9871ae33999ff54c5a73ca5cf"},{url:"assets/js/page-VueTestUtils.2ccab0d2.js",revision:"7bf21abe968915b0f23f8abce7cd553a"},{url:"assets/js/page-Vuex.d230257e.js",revision:"be6af0e734e94528d3254ba9ba404f33"},{url:"assets/js/page-Vue学习之路.9d724041.js",revision:"c9d831748fee08d0cdf41580aa4b0526"},{url:"assets/js/page-Vue开发规范.f2a2c48e.js",revision:"99d814bb15ea548b4449e7d6477c4d79"},{url:"assets/js/page-七层模型.128d6e87.js",revision:"c58cb3ac140a6ebcb88e0a25e9cf3187"},{url:"assets/js/page-万维网.5d8354c9.js",revision:"1f86c945b59e485fcfa55c71dd6bd8fa"},{url:"assets/js/page-从0搭建项目模板（vue3）.637d0149.js",revision:"8e86c91cc2a16f82bcc3eb211ea1ffd8"},{url:"assets/js/page-代码书写规范总纲.3dea032a.js",revision:"449e2d16753eef6a7b5ff841d4a65d13"},{url:"assets/js/page-使用.362be978.js",revision:"27410277c9b88d2f92a62eec3c35b3ce"},{url:"assets/js/page-使用项目模板.e8bca2ee.js",revision:"491d36e14e6a047327830ee680c38019"},{url:"assets/js/page-入门.54dc6a30.js",revision:"0195733adc3dfaa80e7ad625eea2edc2"},{url:"assets/js/page-其他映射工具.28c82850.js",revision:"7f2d9dfffee1d3acfaa29cf920ffc290"},{url:"assets/js/page-内存缓存.ca662d49.js",revision:"2d3dca6cb5aa30ccd61d0f37cc20e118"},{url:"assets/js/page-分布式缓存.6788c097.js",revision:"27e99e712b05cd8b3cd826371437d8a2"},{url:"assets/js/page-列组件JGanttColumn.7013d63a.js",revision:"f9809adfd9687936b3319235bfcf1ec1"},{url:"assets/js/page-判断方法.3fb09f82.js",revision:"9668521412d9735b384429ad355eef48"},{url:"assets/js/page-前端学习之路.81ffa63e.js",revision:"66a377453773d3ed566dd8294c4e48c5"},{url:"assets/js/page-前端进阶.b4f77585.js",revision:"5380f0dbbe03adf0e4c4c38899b2d8d5"},{url:"assets/js/page-包管理器.80f78474.js",revision:"18adb0a655784d568d4471987fb8b05d"},{url:"assets/js/page-原型和原型链详解.1b2aad29.js",revision:"2942ade2c564a149371c47f2438bd5b2"},{url:"assets/js/page-原理部分.d4476d87.js",revision:"83f69006ca03c587aca4e822164a7600"},{url:"assets/js/page-响应式与媒体查询.616b7c11.js",revision:"6c71f247819a87fff77bd2b761b73d84"},{url:"assets/js/page-响应式的原理.aab15241.js",revision:"2e1fd3adc6b69c0abbecd6b575f22d0e"},{url:"assets/js/page-四层模型.05903540.js",revision:"1b2dcd4d1f5e002afc1fa6347ddbbcb3"},{url:"assets/js/page-在ASPNET中使用授权与认证.687ccc38.js",revision:"b4f72a23adb9c3cae2e230664a6f86f4"},{url:"assets/js/page-域名.e9a7ecbb.js",revision:"4594b040c713d60a5e99c979479f81de"},{url:"assets/js/page-基础知识.7c7df011.js",revision:"3cd0673c3f48c7171d710fa4eea84601"},{url:"assets/js/page-处理日期方法.3e5b66ec.js",revision:"7b13e8db3bf2d33d65a57f49f49b8721"},{url:"assets/js/page-处理颜色的方法.5e4d1a15.js",revision:"9db4702484dae82fcd8a8b3953e6407b"},{url:"assets/js/page-外部身份验证.75af53a4.js",revision:"f235f28a732d0cc9f6c188771b3de2b7"},{url:"assets/js/page-学习路线.6dd34937.js",revision:"6aacc889ad4e69446de40452fd4ad12d"},{url:"assets/js/page-定位.e13bce67.js",revision:"7e08fe1d6ce84aaa1070d706b8d54b2f"},{url:"assets/js/page-布局.f3f9744d.js",revision:"37181176fcdd8efba95903a75f42340c"},{url:"assets/js/page-应用性能监控系统.402d9d2a.js",revision:"d83aabad4214c0327bce2f5b73cbf305"},{url:"assets/js/page-异步编程.24efa01c.js",revision:"8cdbfa986cdf85aa380c8c9584810752"},{url:"assets/js/page-弹性布局（Flexbox）.0210f5c3.js",revision:"62fb736bfa625c23dfd32489999a0d92"},{url:"assets/js/page-循环渲染.d37e78e9.js",revision:"b577b557626aa0072490ddbad8c8b397"},{url:"assets/js/page-性能部分.c1caaab8.js",revision:"13f45f6ade216079b7ff4668ee9f58f1"},{url:"assets/js/page-手撸代码.ca2f7aca.js",revision:"18462ba657e1ebaafdd96ea556e5ca20"},{url:"assets/js/page-插槽.dc612dcb.js",revision:"3190ae2c0e170450b4eca44c9e630063"},{url:"assets/js/page-数据和方法.6a67569b.js",revision:"7996e3a0f0421afd55aa02baaca325a9"},{url:"assets/js/page-数据库.5e44e0d1.js",revision:"5a8d241d29d98e68083ba49595e2a140"},{url:"assets/js/page-数据的持久化（使用数据库）.a660cc1c.js",revision:"46bc5cdf69d58ccb4728dd804ea751fd"},{url:"assets/js/page-数据结构.335fee70.js",revision:"51b256afbb5753159b0ffc34aef0501e"},{url:"assets/js/page-数组的一些扩展方法.1c794bac.js",revision:"14a25456c1c59b8d6fdae3acc87ce459"},{url:"assets/js/page-文档手册.7b02e914.js",revision:"77b6f2d1fa5bceef69d451b37e6168da"},{url:"assets/js/page-服务容器.6f85dcd1.js",revision:"c63b0f7d3cae0f0a5e7d90b777df3920"},{url:"assets/js/page-条件渲染.01a3342f.js",revision:"5fc3a516b00701e1c72a392df56080d3"},{url:"assets/js/page-构建工具.175650f5.js",revision:"a9126b468239ec8d12ada6ffa8121fbd"},{url:"assets/js/page-栅格布局（Grid）.dadcc5d6.js",revision:"f861220126e7bf543545d098420fdf31"},{url:"assets/js/page-根组件JGantt.05ba346a.js",revision:"cfbd73718141f9406d30dd0a897d66ab"},{url:"assets/js/page-格式化工具.495c77ab.js",revision:"c192a246df5c6add03cea199e8147d6f"},{url:"assets/js/page-概述.6830d412.js",revision:"3c33f23bab724e69fe4281ce0543e391"},{url:"assets/js/page-模型.605f0be5.js",revision:"2f2c301fb3cbddbe2dad5c06269391d1"},{url:"assets/js/page-模板语法.b14f8756.js",revision:"b6bdcb18b9a7cf5eca28c20e9af73f68"},{url:"assets/js/page-渲染.5a5e972f.js",revision:"da1fff7238c8f4b7e33653e253309377"},{url:"assets/js/page-滑块组件JGanttSlider.e7b249f9.js",revision:"efc0427f9497bea0216e20c61498fcd9"},{url:"assets/js/page-生命周期.3416c03a.js",revision:"5d9b14606730cb4e675547867df35592"},{url:"assets/js/page-生成方法.8f5a99ef.js",revision:"4c0a86a28d7273c7c0dea6f7d4336a32"},{url:"assets/js/page-盒模型.a389b6bf.js",revision:"ddb4064f150ad1e947c121a5ab26d971"},{url:"assets/js/page-算法.b0564906.js",revision:"46977434ee7f523217cbecf5c61b7ecc"},{url:"assets/js/page-管理数据库.6d67571b.js",revision:"8d2fde8a950f977b2b62161e7a5d5dc8"},{url:"assets/js/page-组件.d00c0210.js",revision:"a42c90245b0f48631c1844ac9f9395a0"},{url:"assets/js/page-组合式API.372c2186.js",revision:"9a6931514e48f0dcbb1524d8c22922d9"},{url:"assets/js/page-网络基础.1a0ff937.js",revision:"b2adfae4ef14b002222ef475a78c2c7e"},{url:"assets/js/page-网络请求.688b0990.js",revision:"7cc2c5697deb34d3476c9885ca633d34"},{url:"assets/js/page-虚拟DOM.aec8eb1a.js",revision:"1969f214440923a823d6f91768d2d4cb"},{url:"assets/js/page-计算属性和侦听器.5910944b.js",revision:"ea45d29cb143225825f2cc2b17a32d05"},{url:"assets/js/page-计算机基础.0eea646f.js",revision:"32ff8cff462a3650ab6e65615132ca1f"},{url:"assets/js/page-计算机基础内容.e72d16a9.js",revision:"95ae13bcdd42096e38c2b02aa6e44929"},{url:"assets/js/page-详解认证中心的配置.4596c2a2.js",revision:"0dd311dd2d544fa8de5448ca8f7c97bf"},{url:"assets/js/page-跨域.8bb4ad98.js",revision:"664fbed7627c14901f36fa7292d05ac4"},{url:"assets/js/page-选择器.a4e8f931.js",revision:"97464d96b698c7d5ee4da9f06af6589b"},{url:"assets/js/page-通用方法.95cabe22.js",revision:"048bd8dd44f25d9553a44ce8ee88cac4"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.99fc0ed6.js",revision:"198d3d84f517651bea5120f2124150e4"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.69314708.js",revision:"ec0deacaf919625a4bb955643920c271"},{url:"assets/js/vendors~layout-Layout.7c44b77d.js",revision:"d5d78b539e4fdf89a2042c0f401d8d15"},{url:"assets/js/vendors~photo-swipe.eba91fb9.js",revision:"9c3228683aaf707e4619b8dcbea4d0b9"},{url:"assets/js/vendors~valine.b8f6478a.js",revision:"9c6fb62387164853df09f972a1870f97"},{url:"assets/roadmap/frontend/css-principle.svg",revision:"b9d80fa48caaf3c37c07a679ea3eeb84"},{url:"js/base.js",revision:"a11d78892850bfbd80f5eff104041105"},{url:"404.html",revision:"500906b11fd5bee01b5f79529ffd8739"},{url:"article/index.html",revision:"a4435d6d48657b8100ea4615df911ec0"},{url:"category/index.html",revision:"aa2ec5abbd8a6b8e012070a847e68636"},{url:"codes/index.html",revision:"a5749d4743837028e2623092b89e8c28"},{url:"codes/js/array/index.html",revision:"7f0fe228e14d3175f61afc8b01fcc7a1"},{url:"codes/js/colors/index.html",revision:"530cc91913dc30c1dfef4214d627a077"},{url:"codes/js/create/index.html",revision:"378645167bfaec7f559d14ca3aacfab2"},{url:"codes/js/date/index.html",revision:"28e9833097bfb54f6331fefa394bf549"},{url:"codes/js/html/index.html",revision:"e40469a79a0515bec96a2baf4249e936"},{url:"codes/js/index.html",revision:"aaea15b75052eff7d516e56a6c8b7974"},{url:"codes/js/judge/index.html",revision:"08924135fa2f3fdab618831e409c6c83"},{url:"document/docker/example/npm/index.html",revision:"9d448131c252691dd97cda4871651611"},{url:"document/docker/index.html",revision:"c8a8eb30ec24412695f62fa60e832e93"},{url:"document/gantt/column/index.html",revision:"f188aabf44772b083e87fa88fd8db624"},{url:"document/gantt/common/index.html",revision:"7da5eb029d3f8483a8b47c9257f5be3c"},{url:"document/gantt/index.html",revision:"a102aa571bde90b19ab8df7146777bc3"},{url:"document/gantt/README_old/index.html",revision:"9894d7f6fd9e1852c49238fc71d63010"},{url:"document/gantt/root/index.html",revision:"8ef315963691493332eb466b77b2f9c5"},{url:"document/gantt/slider/index.html",revision:"8f5b0a59079e48dd984abb359ec7646f"},{url:"document/git/github_workflow/index.html",revision:"03a439fa78bf59f633935edd8671f503"},{url:"document/git/index.html",revision:"42aabb5587f3061a8418bdab3396a9f3"},{url:"document/index.html",revision:"6a72502c16aa263af9f33b78442459bc"},{url:"document/markdown/index.html",revision:"049c7ea9371bbf1867253282d3cb1bf3"},{url:"document/npm/index.html",revision:"1aade12136c37cdc81594069a0f8d0f1"},{url:"document/vim/index.html",revision:"2af7d0d77987ba4d426f1d0f542de352"},{url:"encrypt/index.html",revision:"ad76a110f5121badb05c64f85a2d066d"},{url:"example/css/position.html",revision:"8be6950ed5fa629d3227224f1faa53d1"},{url:"example/index.html",revision:"0f8f2a8c06b6dc8249fde4360a0a26cb"},{url:"index.html",revision:"6c2f8774914d4995d1f3b2c2905670a0"},{url:"roadmap/android/index.html",revision:"596b820ffd2fc4b0a07fc6732eb0fb93"},{url:"roadmap/base/algorithm/index.html",revision:"c2e87c5c282877507ecd81df737afec6"},{url:"roadmap/base/computer/index.html",revision:"5b1dcbe93ea81a1539908eceb5619af8"},{url:"roadmap/base/data-structure/index.html",revision:"ee7c22c220be56303cc05602a0fe8276"},{url:"roadmap/base/database/index.html",revision:"c917f0c277fe6fd0bc6093759c8d1346"},{url:"roadmap/base/index.html",revision:"f047d39a415661fd8754f1fc991182df"},{url:"roadmap/base/network/domain/index.html",revision:"1de914e2bf8919eb9b6938db59ff3adb"},{url:"roadmap/base/network/index.html",revision:"3b34c57302a8c4fb243335d14a33a805"},{url:"roadmap/base/network/ip/index.html",revision:"2f2449fc630acaeceea9b3ee2592102d"},{url:"roadmap/base/network/osi/index.html",revision:"03671870fcab8ea4f72e985237bf0022"},{url:"roadmap/base/network/osi/layer-4/index.html",revision:"d69955ff417f6c4a40fd8e60e271becc"},{url:"roadmap/base/network/osi/layer-7/index.html",revision:"439337216d79017314337f02ddbc3260"},{url:"roadmap/base/network/protocol/tcp/index.html",revision:"80603325940a28d7363d52f25ff4bb68"},{url:"roadmap/base/network/protocol/udp/index.html",revision:"738b63c2bb6ad3c2981ff73a16df1aae"},{url:"roadmap/base/network/www/http/index.html",revision:"a2ce2288f149ff1315f9b28f13e884c6"},{url:"roadmap/base/network/www/https/index.html",revision:"6271ffa292fd73e4f82c7d68149164a0"},{url:"roadmap/base/network/www/index.html",revision:"d50dc3427e628e201c0a350952a26c08"},{url:"roadmap/base/network/www/url/index.html",revision:"4f842d46659a7d25afbeb14de207900d"},{url:"roadmap/dotnetcore/auth/example/index.html",revision:"0bbb6e9a0daa50f62a4f8d5bb3c30762"},{url:"roadmap/dotnetcore/auth/index.html",revision:"528bd9214c3440fb03f7b0ca1b92c667"},{url:"roadmap/dotnetcore/auth/is4/external-account/index.html",revision:"db11326a665dd155b2f77eae6e31e104"},{url:"roadmap/dotnetcore/auth/is4/index.html",revision:"a251c04354e0bccb1e72be65332ed3cf"},{url:"roadmap/dotnetcore/auth/is4/intro-config/index.html",revision:"6d2deb6fb9f6ab137f93c27efddbbc5f"},{url:"roadmap/dotnetcore/auth/is4/useef/index.html",revision:"83f5274d41b5a34569728d418b187a47"},{url:"roadmap/dotnetcore/auth/jwt/index.html",revision:"8229e4a31a3708ffffff6dc106b1f06c"},{url:"roadmap/dotnetcore/basic/index.html",revision:"236aeb2afa75140ec41618b0b31614c4"},{url:"roadmap/dotnetcore/cache/distributed/index.html",revision:"ed83a802d62e6d910652a74a806b398a"},{url:"roadmap/dotnetcore/cache/index.html",revision:"9569dcc165b6a15239983aba92a170ea"},{url:"roadmap/dotnetcore/cache/memory/index.html",revision:"d32f496fe0fe704cfa8176ce139779ae"},{url:"roadmap/dotnetcore/cors/index.html",revision:"a2348fe2ee6e6a1e3fb90bfcbad143b9"},{url:"roadmap/dotnetcore/db/efcore/context/index.html",revision:"343cca2094a4500a560acef5250c1ed4"},{url:"roadmap/dotnetcore/db/efcore/index.html",revision:"3574a07dcb18b4521669bb0caa24c6a3"},{url:"roadmap/dotnetcore/db/efcore/manage/index.html",revision:"1f7b26e677c7f8ec83453fbe1284c5dd"},{url:"roadmap/dotnetcore/db/efcore/model/index.html",revision:"e81ea18f022f1b65bfc8d0457f0ac671"},{url:"roadmap/dotnetcore/db/efcore/use/index.html",revision:"b2b7bd36ac08967e55fca9f923ac3c52"},{url:"roadmap/dotnetcore/db/index.html",revision:"5b72d922160fe54c792d127097e2935c"},{url:"roadmap/dotnetcore/db/other/index.html",revision:"b9fb2ae9c0c2f1c6ca4c1efe8fdeb587"},{url:"roadmap/dotnetcore/di/collections/index.html",revision:"b234c2fab75ec42af40b8955a020d4cb"},{url:"roadmap/dotnetcore/di/index.html",revision:"7517f80311760bd7d03b8353c0650598"},{url:"roadmap/dotnetcore/di/lifetimes/index.html",revision:"055d313e737ccf659dc9083b19cd10ae"},{url:"roadmap/dotnetcore/index.html",revision:"c03d2f79386d1e37433474a913d457d1"},{url:"roadmap/dotnetcore/log/APM/index.html",revision:"daef744caffdc73f616255e6c337bd7a"},{url:"roadmap/dotnetcore/log/Serilog/index.html",revision:"ac539faf167b761c0988aa0ba0a577cc"},{url:"roadmap/dotnetcore/mapper/automapper/index.html",revision:"4a45ded5bd1df2bfabcb6ef6ba081443"},{url:"roadmap/dotnetcore/mapper/index.html",revision:"0b6af08afc192a118dc77d0818925fd3"},{url:"roadmap/dotnetcore/microservice/mq/RabbitMQ/index.html",revision:"bfd5956c8b2281c08790531ba98f720e"},{url:"roadmap/dotnetcore/swagger/index.html",revision:"41a80bafe84e73f73c7dd6647b2dc828"},{url:"roadmap/flutter/index.html",revision:"d1cbaad1bb24320814cc2dec131eec3a"},{url:"roadmap/frontend/advanced/css-processor/index.html",revision:"6312272b9b50331f33edb0c35c0bb593"},{url:"roadmap/frontend/advanced/index.html",revision:"dbb3e2db37e01937c8566d70c0591f63"},{url:"roadmap/frontend/advanced/performance/index.html",revision:"9c87b92d459eb3066d63a9abbb9129d4"},{url:"roadmap/frontend/advanced/principle/index.html",revision:"e585afdfa6e85bceeadf3502d3ac1362"},{url:"roadmap/frontend/advanced/ts/index.html",revision:"f4d6d9b8041b6a68157653cd945af191"},{url:"roadmap/frontend/css/box/index.html",revision:"c388f11578140af23c9aade64d16daad"},{url:"roadmap/frontend/css/index.html",revision:"a81b066ded8adf08f945fc95e2ae55a0"},{url:"roadmap/frontend/css/layout/flex/index.html",revision:"6426e7addc61c5c9266e96099e279e4c"},{url:"roadmap/frontend/css/layout/grid/index.html",revision:"d44d6e1e720309bdb97f2b9350713ddd"},{url:"roadmap/frontend/css/layout/index.html",revision:"1fd5d7eb8cdb5022f1a1ab860a7b1f61"},{url:"roadmap/frontend/css/media/index.html",revision:"7e15be72f27d20437999707ccc955251"},{url:"roadmap/frontend/css/position/index.html",revision:"dd3960a249fc0a736aa90094bf347843"},{url:"roadmap/frontend/css/selector/index.html",revision:"5d5a2ebcffbfe88b402852b914605a99"},{url:"roadmap/frontend/engineer/build/index.html",revision:"69625ac46488259ab24b7b30966edec0"},{url:"roadmap/frontend/engineer/format/index.html",revision:"1bfe6f9176a4501a745d8421fcca9189"},{url:"roadmap/frontend/engineer/package/index.html",revision:"e85cb6142fe4133b38774915e9d41d6b"},{url:"roadmap/frontend/html/index.html",revision:"6c26f749581dba2c6878b8df4f438f90"},{url:"roadmap/frontend/index.html",revision:"b5bacb573be20ce1ac57518da3de32fa"},{url:"roadmap/frontend/js/asynchronous/index.html",revision:"b484f00e76a79e5a96f3e19023bbaa50"},{url:"roadmap/frontend/js/index.html",revision:"656cfa2ad4121f2ccc2037c78c27cf68"},{url:"roadmap/frontend/js/net/index.html",revision:"ca058e4bb72a86171702b3dcc2ba1e36"},{url:"roadmap/frontend/js/prototype/index.html",revision:"fd3ad536427b8cc2d99f20447c779c8b"},{url:"roadmap/frontend/js/this/index.html",revision:"4c6e3957194a9b63d11c4dc57d61f178"},{url:"roadmap/frontend/react/index.html",revision:"c5084e39bf7dd01ab7b8fb4b7d9eede9"},{url:"roadmap/frontend/vue/basic/class-style-bind/index.html",revision:"f2f0542d1c9fe43df933d7a270f6b05b"},{url:"roadmap/frontend/vue/basic/component/index.html",revision:"2dfc75da1d25d9ab2f9eb15777a0466b"},{url:"roadmap/frontend/vue/basic/composition/index.html",revision:"ce2c4021818e8ee0cb475dba4760b241"},{url:"roadmap/frontend/vue/basic/computed-watch/index.html",revision:"4ae4529beb502d7eed989c3886836268"},{url:"roadmap/frontend/vue/basic/data-method/index.html",revision:"cd7ac7a19ba132b7b17e942e437d1732"},{url:"roadmap/frontend/vue/basic/for/index.html",revision:"0ccd9d8e4f495fd079d3b498d8e30296"},{url:"roadmap/frontend/vue/basic/if/index.html",revision:"d7cbadb18abca39117585c648bee8d4d"},{url:"roadmap/frontend/vue/basic/lifecycle/index.html",revision:"3364b05aed35e4104d680d47965c7b12"},{url:"roadmap/frontend/vue/basic/render/index.html",revision:"d3271d6b58d0a492c5ec16bb254b6d0f"},{url:"roadmap/frontend/vue/basic/slot/index.html",revision:"115d69ef730f1485dd3db98a39d5e677"},{url:"roadmap/frontend/vue/basic/template/index.html",revision:"4b94a39b389ee47e007c658f3ad3c7fb"},{url:"roadmap/frontend/vue/framework/index.html",revision:"d8f8e1f0c37abe6a2b6a7afe2d7f5ad9"},{url:"roadmap/frontend/vue/index.html",revision:"3f5a9e033b5f81b77b3e51fa9bbc8c67"},{url:"roadmap/frontend/vue/mvvm/index.html",revision:"add0d35fabecb7dfa11bfab3e1a4ae9f"},{url:"roadmap/frontend/vue/reactive/index.html",revision:"98cc1149dfff5205acdc205c0ead9cfc"},{url:"roadmap/frontend/vue/supports/cli/index.html",revision:"a758344cfcb92c4c826171ecee6af0fe"},{url:"roadmap/frontend/vue/supports/router/index.html",revision:"96e8b48806c5d539ab64b799ba664c9b"},{url:"roadmap/frontend/vue/supports/test/index.html",revision:"8dda99ef2954a3f1bea5799fed1feed8"},{url:"roadmap/frontend/vue/supports/tools/index.html",revision:"36167a703c3d580d9cec6b59534b458c"},{url:"roadmap/frontend/vue/supports/vuex/index.html",revision:"6e011e1e54411012eb8cc465a74789cb"},{url:"roadmap/frontend/vue/template/index.html",revision:"9b40aedf4768d84d160c25ad7658e3e2"},{url:"roadmap/frontend/vue/template/setup-from-0/index.html",revision:"72259d8e2cb40d4f23b780ca1bd37a75"},{url:"roadmap/frontend/vue/virtualdom/index.html",revision:"4f25f58af288bdc7ec04c30a05a4596c"},{url:"roadmap/index.html",revision:"b4e70e2a652697ccc5f208d928dc6ae6"},{url:"roadmap/java/index.html",revision:"62bf340325e490d28245f4bd4347f311"},{url:"slide/index.html",revision:"c20b221f8acaca981b5b6c5d418d2b31"},{url:"standard/csharp/index.html",revision:"66caee45907025e9b75515f38b5fc6de"},{url:"standard/css/index.html",revision:"10fe37649c056ad35c04fe33b29a2eba"},{url:"standard/html/index.html",revision:"a37d9e8cd0a5c095ce551edb4ace37df"},{url:"standard/index.html",revision:"153e9aa5e2878135e77d57bcc2d9d056"},{url:"standard/javascript/index.html",revision:"efc59880c45788400cf3e51424553db3"},{url:"standard/python/index.html",revision:"6510c1464dd8ca1db5fc1090dc872b29"},{url:"standard/vue/index.html",revision:"bf3335ed19c14581f88be45bf0b256ab"},{url:"star/index.html",revision:"bff3354eeca80b7510e9c1bafb4335b6"},{url:"tag/index.html",revision:"cff6fbd7bf4e129ab2bd3cd966ac7800"},{url:"timeline/index.html",revision:"52ab991ba576d1b6a5172265959c1b7e"}],{}),e.cleanupOutdatedCaches()}));
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
