if(!self.define){let e,a={};const s=(s,d)=>(s=new URL(s+".js",d).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(d,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(a[i])return;let c={};const f=e=>s(e,i),b={module:{uri:i},exports:c,require:f};a[i]=Promise.all(d.map((e=>b[e]||f(e)))).then((e=>(r(...e),c)))}}define(["./workbox-ebf2f394"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.439caf23.css",revision:"9f5d7505de44ca4177a7b375d4edf54f"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/131.b176f0b1.js",revision:"032aaae5273af9744f38d85bd25a828c"},{url:"assets/js/132.f8145a79.js",revision:"404c1c3174e4f7a6d4f97617673f85cf"},{url:"assets/js/133.0884308b.js",revision:"562b378b272c8f17b713490626ce6cd3"},{url:"assets/js/134.de173540.js",revision:"26c8f95a9066cf8efd9d98ee9b80f3ed"},{url:"assets/js/135.92bc357a.js",revision:"059072a3b190164bf7f2e02ea69c2d6b"},{url:"assets/js/136.e1f5fc96.js",revision:"c611239d37bf2b905a322d74530728e7"},{url:"assets/js/137.92f43fbe.js",revision:"090290448e97ab8dbe1c442fbbe4f79f"},{url:"assets/js/138.6cfaa12f.js",revision:"ef1d1e7b82b089c8771ef858c33a411c"},{url:"assets/js/app.20ed4dcf.js",revision:"f189def5caacc9b65381d425268072f6"},{url:"assets/js/layout-Blog.1ed60b76.js",revision:"80b3fbf93f55e0b530cfc32e96ace5bc"},{url:"assets/js/layout-Layout.f3e9cb51.js",revision:"a1ec8439042bd2daeba4549b5083c02b"},{url:"assets/js/layout-NotFound.5a99754f.js",revision:"96e231421bba443bb793653f37dd2fbf"},{url:"assets/js/layout-Slide.6887e3cd.js",revision:"edcf22ea44ce434057e400af4ecbc83e"},{url:"assets/js/page--69fb9c74.256eb843.js",revision:"2cf1112800d0670d0356123a75dfbfc4"},{url:"assets/js/page-Android学习之路.c7071091.js",revision:"41de2ad91af35ad8388d3db5a09c5adc"},{url:"assets/js/page-ASPNETCore开发者学习路线图.ff627737.js",revision:"735fcdc6a1c6a22713c493a6078e1874"},{url:"assets/js/page-AutoMapper.f90b0729.js",revision:"5e1ca0e8f9af8c37dbd06c5a624776a8"},{url:"assets/js/page-C.13f3c14d.js",revision:"b9fb53797a980edab424d994a6ca4978"},{url:"assets/js/page-class与style的绑定.c60e3c34.js",revision:"b28b9f12343930c6e9e4f32b9e1a2957"},{url:"assets/js/page-CSS基础.705749ab.js",revision:"ea514375c880da1535e115c81a44dd7e"},{url:"assets/js/page-CSS规范.bc06bfcf.js",revision:"653e809b115eed0a5c10d0fbd6ba09eb"},{url:"assets/js/page-CSS预处理器.31365168.js",revision:"17da9d1e9e90d80be966bd03cb2033ae"},{url:"assets/js/page-DbContext的配置.e02cf50f.js",revision:"e6f8f7b7114400e4a2583762aa05115a"},{url:"assets/js/page-Devtools.51abe3c8.js",revision:"02351e3b6541b40b7eb91f97ff259f6b"},{url:"assets/js/page-Docker使用文档.f13ee261.js",revision:"6e6eb584013f0cbf49db2596c20d6ac2"},{url:"assets/js/page-Docker快速搭建NPM服务器.04da150e.js",revision:"028211f4f3787f9491b6f4930285fa96"},{url:"assets/js/page-ExamplePage.feac6b7d.js",revision:"e915175501236c27b21f71fc70217499"},{url:"assets/js/page-Flutter学习之路.f0d54983.js",revision:"70c40f7da0253fb2d42f00eb98fe308f"},{url:"assets/js/page-GitHubPagesaction配置.752a1806.js",revision:"5d657c25b7d47ca3aff38ffc560ff5a3"},{url:"assets/js/page-GIT命令.1ee545ee.js",revision:"d7acef9fa802f41f1f7f193b8ffe370c"},{url:"assets/js/page-Home.dde24835.js",revision:"9cce7d944d641dc7f29e5c5ec1674f75"},{url:"assets/js/page-HTML基础.8f0169a2.js",revision:"d9633757531c450eeb4a6c8be5dfc02c"},{url:"assets/js/page-HTML处理方法.a4405fb6.js",revision:"44b0c7a49f695bde24c132dd7c41d49d"},{url:"assets/js/page-HTML规范.26631860.js",revision:"3edd2e5ec7f999f74bf94849824b9997"},{url:"assets/js/page-HTTP.882cc326.js",revision:"c5c31aedd22eafc40ef4d59a4f72410f"},{url:"assets/js/page-HTTPS.71e930b7.js",revision:"0cc3f9290eeb2de5668fae9e23372722"},{url:"assets/js/page-IdentityServer4的使用.55f46917.js",revision:"0a8ca27c13e461a23de32f9b49f04eda"},{url:"assets/js/page-IP网际协议.daf2989f.js",revision:"be45811b3b7a50c699feda5ab3314c40"},{url:"assets/js/page-JavaScript基础.ad1df293.js",revision:"a515e2c0ed62aa27d09a24d79cfe7e33"},{url:"assets/js/page-JavaScript开发规范.221b5cb5.js",revision:"e8005eb3a4d266979870b0767d812442"},{url:"assets/js/page-Java学习之路.3d0ac458.js",revision:"a283cf262084231d3ed8101e3b96290b"},{url:"assets/js/page-JWT.3fafda69.js",revision:"977700b82fd8a0d89f10bf748638a4d2"},{url:"assets/js/page-Markdown语法.713a050e.js",revision:"0b27f66519a170740e07988648521e87"},{url:"assets/js/page-MVVM.8330578a.js",revision:"994a142fd4bfabf9a44e01e5db39abd9"},{url:"assets/js/page-npm使用.cdac9539.js",revision:"d1eef96c623db28403a72bfed065615a"},{url:"assets/js/page-OSI模型.49f08ade.js",revision:"65447e8523f2e8ae9929b358fe96cf15"},{url:"assets/js/page-Python开发规范.68e76dc7.js",revision:"ca4f3ab5654504d1fb671c3ff842db46"},{url:"assets/js/page-RabbitMQ的使用.97ec735f.js",revision:"4f7758ece27ecd7f62b9a901945318de"},{url:"assets/js/page-React学习之路.e37fb2b0.js",revision:"a84d78ee2b8df60811eb7007a4bc4d6e"},{url:"assets/js/page-Serilog的使用.a42cd724.js",revision:"49b24d5bc469367d81192ffa14b95ab3"},{url:"assets/js/page-Swagger文档的使用.64287a18.js",revision:"aafe3cc39eb63c8004939fbd61be0388"},{url:"assets/js/page-TCP协议.b3f025bb.js",revision:"89a53e1d758d97a5c44a0c8695d0aafb"},{url:"assets/js/page-TypeScript.c7f0380e.js",revision:"8bddd4974fc9f1542233bac4bb20e25a"},{url:"assets/js/page-UDP协议.fe1274cd.js",revision:"221a934ed758ea114a3bf8ac7d893be0"},{url:"assets/js/page-UI框架.55f48c76.js",revision:"e3a823413b218f1e71589983f8c6d4a3"},{url:"assets/js/page-URL.ab565e90.js",revision:"3e5ce07c25abf31f617e6f4a0f3cd878"},{url:"assets/js/page-Vim使用说明.2bbbf5d0.js",revision:"054ae459b7987e0a87287e138e573029"},{url:"assets/js/page-VueCli.7093941b.js",revision:"df3541f4d00df9fda391870cd9c6cb29"},{url:"assets/js/page-VueRouter.68ea5c71.js",revision:"35313aa9871ae33999ff54c5a73ca5cf"},{url:"assets/js/page-VueTestUtils.b244333f.js",revision:"719087bb166fa0875d4bff8071e79771"},{url:"assets/js/page-Vuex.7ceacdac.js",revision:"5ef4c9c0989e922b7d40e985c29d3cbe"},{url:"assets/js/page-Vue学习之路.9fd62e2e.js",revision:"c76e62eb87d7042ee64f709109c352b4"},{url:"assets/js/page-Vue开发规范.f94540ab.js",revision:"4e04e6ad0b63cc5c158c62da721be370"},{url:"assets/js/page-七层模型.c18f4280.js",revision:"1b23bea799b80b5168db662384de3e3d"},{url:"assets/js/page-万维网.4904f502.js",revision:"7d6c7dc9cf6dfd337bfc33d446ce179c"},{url:"assets/js/page-从0搭建项目模板（vue3）.dd37d0e2.js",revision:"acc4eef3141e4f79a0e6f8ceca96ab14"},{url:"assets/js/page-代码书写规范总纲.989edad7.js",revision:"38bde0d000137b4b5dab97ed33efc1b6"},{url:"assets/js/page-使用.4221e229.js",revision:"f31cebed23f1b22fb0b5cdfcb7dceb1c"},{url:"assets/js/page-使用项目模板.18bd2902.js",revision:"17d1b91014b455c14c6740371fabc94e"},{url:"assets/js/page-入门.6efa5814.js",revision:"632dfef87ee05eedf7f9510823efc54f"},{url:"assets/js/page-其他映射工具.61b1d68e.js",revision:"f756815aa5455164679c487bf4845da6"},{url:"assets/js/page-内存缓存.ff9fcf5a.js",revision:"74053fa733d72a23560c694b3753bd33"},{url:"assets/js/page-分布式缓存.9fe9d823.js",revision:"db813ab7df9e79d11c76eb90f8ec8141"},{url:"assets/js/page-列组件JGanttColumn.40558185.js",revision:"0fcae019d51aa93f41dd9caff8d821b3"},{url:"assets/js/page-判断方法.af85b098.js",revision:"1641bdf9866c5a5218cd904e2386f4b0"},{url:"assets/js/page-前端学习之路.a2b38ca1.js",revision:"ee0d420aa1c5173227980835f8ae6cc4"},{url:"assets/js/page-前端进阶.f6a3cd89.js",revision:"74b4413ee8b44c1fc3bbc9abc4069027"},{url:"assets/js/page-包管理器.f5444347.js",revision:"967e1188f69fe715581689bc8c064775"},{url:"assets/js/page-原型和原型链详解.33b48d8f.js",revision:"e17feaebb263f3c62d3dfe63833d5738"},{url:"assets/js/page-原理部分.2bc22507.js",revision:"ade068222ab6370451635c7b0dfa2588"},{url:"assets/js/page-响应式与媒体查询.0e857051.js",revision:"cf69685ea8e54e5654dd338ac4775f36"},{url:"assets/js/page-响应式的原理.651faafa.js",revision:"d591f1af1d7da38164ccbe35cfb5d356"},{url:"assets/js/page-四层模型.2fa796ba.js",revision:"213ba38aba82590b5daf71977ae36977"},{url:"assets/js/page-在ASPNET中使用授权与认证.d9aaed74.js",revision:"41bd77a1770cd88062e5b86ad24e1a08"},{url:"assets/js/page-域名.4be4c050.js",revision:"bc67a9fa31425946a433bbd6cb26d36f"},{url:"assets/js/page-基础知识.17025ce7.js",revision:"43e1b58f434e0611fbe9a239ba59f659"},{url:"assets/js/page-处理日期方法.98c492b4.js",revision:"6df27c9d025d77a45bb662f4cdeded9d"},{url:"assets/js/page-处理颜色的方法.e19841bb.js",revision:"6e4c40668dcb4b0dcca99e71da4df9e9"},{url:"assets/js/page-外部身份验证.437e9757.js",revision:"5044f945fc128efcece4c3871cf47d66"},{url:"assets/js/page-学习路线.b458dda4.js",revision:"24c27219ef9132168ee603a239616f64"},{url:"assets/js/page-定位.c04f7968.js",revision:"cfdc0598e8a578c287550672aa14126a"},{url:"assets/js/page-布局.d3703061.js",revision:"14da9eefc2782a21958c0fd6451430ca"},{url:"assets/js/page-应用性能监控系统.b4c7e81c.js",revision:"d13a68467cad8de8f7fdeafcb391b2c5"},{url:"assets/js/page-异步编程.21f7fd1d.js",revision:"d130fdfbc79a4e477dfd92c83f6dff3b"},{url:"assets/js/page-弹性布局（Flexbox）.715f16e6.js",revision:"3d20e388b718b4d84a5118286bf7cbef"},{url:"assets/js/page-循环渲染.a52af147.js",revision:"250f5ccc48b550b5417b71b5c8fffad1"},{url:"assets/js/page-性能部分.38a65f01.js",revision:"90f3877dd48bbe3b1e4023bb1b5c005f"},{url:"assets/js/page-手撸代码.209db8e9.js",revision:"888122e2b19ac0564bcff7f8bc5251f8"},{url:"assets/js/page-插槽.55c2324a.js",revision:"bd6e00b75f75b2bdc416a93f5b8f86d0"},{url:"assets/js/page-数据和方法.63370c74.js",revision:"e0e6ea7694ad183adc234ed91a0b6b11"},{url:"assets/js/page-数据库.284aca46.js",revision:"dfa0b776e1f39ef034c7e641a720de58"},{url:"assets/js/page-数据的持久化（使用数据库）.2b64ce70.js",revision:"7a528d4670715e4bfe15988e87e7e116"},{url:"assets/js/page-数据结构.a83caf73.js",revision:"5d2915e6d6d5634fcd0ef27fa2078e65"},{url:"assets/js/page-数组的一些扩展方法.fcaddb60.js",revision:"9d379c1b9e0aa457696e8a1da75a9b13"},{url:"assets/js/page-文档手册.056a8868.js",revision:"79941cf87b31183db763ab7e2bc28e80"},{url:"assets/js/page-服务容器.b7b79af6.js",revision:"9e2269188de3055d435f285bbd45ea0a"},{url:"assets/js/page-条件渲染.e310c889.js",revision:"f3c31c5e2455129d0a37f856e393328b"},{url:"assets/js/page-构建工具.7e0d2ab8.js",revision:"71f999f770c00dee6ba90a6e1efa2b39"},{url:"assets/js/page-栅格布局（Grid）.c5c97af1.js",revision:"3bbbd5f57fc3d7a36744e8cce36a4b46"},{url:"assets/js/page-根组件JGantt.fcb261f7.js",revision:"267064d764cc6ad6e74cf65304288304"},{url:"assets/js/page-格式化工具.40ff78ec.js",revision:"abe32dbcc37a67524c1fe2e089b84bef"},{url:"assets/js/page-概述.4bc1bda0.js",revision:"e495ab2dfe623601c1c891a696854720"},{url:"assets/js/page-模型.8a8e896d.js",revision:"dfbaece3bef61c04a1a07eedde079818"},{url:"assets/js/page-模板语法.4f30b3df.js",revision:"578fcae187bc2f2eeb490ad5df23d93a"},{url:"assets/js/page-渲染.ce3b0f45.js",revision:"7b2eaae146d02470ff390f0d8f7fc4d3"},{url:"assets/js/page-滑块组件JGanttSlider.1f6b666c.js",revision:"c681d06dba9cf77733e426c0e5aebb35"},{url:"assets/js/page-生命周期.a3c14139.js",revision:"3d91d3b559fccf597289b77273c3b34f"},{url:"assets/js/page-生成方法.8aa3378d.js",revision:"7b3ff2d12504494e44492e466a05b8e3"},{url:"assets/js/page-盒模型.a3440540.js",revision:"306649243240c92d23430c6c0b4f55e1"},{url:"assets/js/page-算法.a0c83eac.js",revision:"51816a51fbc7dca137d35a36600454eb"},{url:"assets/js/page-管理数据库.19b5c13f.js",revision:"1f2b538d7c48a5da1fa6b1080308eab3"},{url:"assets/js/page-组件.f489c948.js",revision:"7de1215ad360574067e9ae90aac3c740"},{url:"assets/js/page-组合式API.b1efc069.js",revision:"6f0bb62a082797b9977b3e24ac8fe1ed"},{url:"assets/js/page-网络基础.0a90ea32.js",revision:"c18a538406f83c1d952c5e24b06b3f91"},{url:"assets/js/page-网络请求.82a87195.js",revision:"623211835b3cc38a98eeb89f64a6b7dd"},{url:"assets/js/page-虚拟DOM.6812c857.js",revision:"4aadbd5439e174de2f63606e7e7fd1d2"},{url:"assets/js/page-计算属性和侦听器.36e6cfa7.js",revision:"f450a75f756d27ec11de373156384aaa"},{url:"assets/js/page-计算机基础.6a3d60db.js",revision:"0054619997d8855e3fab26fba5a296dd"},{url:"assets/js/page-计算机基础内容.78679e25.js",revision:"dc8c020f1c03d64aa0ac0af43fbfccd7"},{url:"assets/js/page-详解认证中心的配置.ed765ff7.js",revision:"665c989a06f94bad428dbcfafaef338d"},{url:"assets/js/page-跨域.b665934f.js",revision:"dbda6adb25ed1bddcd134eff6f1c2904"},{url:"assets/js/page-选择器.01aa59fe.js",revision:"b9ca11cb7b4a34dc0c03a0522c244068"},{url:"assets/js/page-通用方法.e183249a.js",revision:"ec2c7114199b5351ad55bebcd6c65ed4"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.e13078d5.js",revision:"4d78e88a04de56e33c17164bf0beb227"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.69314708.js",revision:"ec0deacaf919625a4bb955643920c271"},{url:"assets/js/vendors~layout-Layout.8c3d27a5.js",revision:"89e86e2f01bd28fb843a834fc6e75afd"},{url:"assets/js/vendors~photo-swipe.c313e285.js",revision:"e781370e1899095730d7199511e7b602"},{url:"assets/js/vendors~valine.0cfaac6c.js",revision:"c7dbe320c3fd4d80411d86b8da93ba95"},{url:"assets/roadmap/frontend/css-principle.svg",revision:"b9d80fa48caaf3c37c07a679ea3eeb84"},{url:"js/base.js",revision:"a11d78892850bfbd80f5eff104041105"},{url:"404.html",revision:"24ecd73882b3210441ea060a43708442"},{url:"article/index.html",revision:"6397c9162ad2579c23e756d38a304756"},{url:"category/index.html",revision:"e30d2c00637b2402293834d03fc2c622"},{url:"codes/index.html",revision:"2d09f08e0d0006286491c9c676584fff"},{url:"codes/js/array/index.html",revision:"9fffd94592c9b595cfbe472d6374e2f9"},{url:"codes/js/colors/index.html",revision:"cd1f0d8e9661e4e0cb02d993cc551af9"},{url:"codes/js/create/index.html",revision:"eb3baa25aac4cc74443600541a18d579"},{url:"codes/js/date/index.html",revision:"a80820b7b8a8944457bc828312c6da9b"},{url:"codes/js/html/index.html",revision:"a005f91fc7db9eb818fc4d9df7f7aa17"},{url:"codes/js/index.html",revision:"310e0c2249f301cc3e02eb7f44a90726"},{url:"codes/js/judge/index.html",revision:"e5e9f96ffbf25292325544e132a0d629"},{url:"document/docker/example/npm/index.html",revision:"1cc38f21eac9682491e9004dcf593dcc"},{url:"document/docker/index.html",revision:"caeb1f213bb772d86d7daccb7a26b2a2"},{url:"document/gantt/column/index.html",revision:"2664ea29d13ef175a8a9d16fcdf5c904"},{url:"document/gantt/common/index.html",revision:"dbf5346df59dff9b06e34b7076ca0010"},{url:"document/gantt/index.html",revision:"aea89b558a474271c1da663f38045010"},{url:"document/gantt/README_old/index.html",revision:"5180138f940e926d30c9497b3cdeaa68"},{url:"document/gantt/root/index.html",revision:"48e8fabf158ba6f845efc7668618f5f7"},{url:"document/gantt/slider/index.html",revision:"51d05c74d4bf45f4f577894d81b3b4f6"},{url:"document/git/github_workflow/index.html",revision:"4d004fd07c30c8c89a255b62c549f956"},{url:"document/git/index.html",revision:"91c9f3dae0fad1accb830304c3e293a8"},{url:"document/index.html",revision:"ba012bcca1188fc5d8c57edef8dcc897"},{url:"document/markdown/index.html",revision:"1f16ef1ddc49a9f1bd0172dda55098e8"},{url:"document/npm/index.html",revision:"cf90cf72c7abaafb363a3da88818bfc5"},{url:"document/vim/index.html",revision:"038afd88aef7b638d937a1afbb215173"},{url:"encrypt/index.html",revision:"d57ae68866b3d724ad9527cb19d6848f"},{url:"example/css/position.html",revision:"8be6950ed5fa629d3227224f1faa53d1"},{url:"example/index.html",revision:"e5890948e92c00d80a73709b0059d719"},{url:"index.html",revision:"00f2dca1e6f4f7b7cbed53c3d358d7ac"},{url:"roadmap/android/index.html",revision:"95f76b442de006b7bcca217a016c6072"},{url:"roadmap/base/algorithm/index.html",revision:"6f3984a315617461521fc71365b7f25c"},{url:"roadmap/base/computer/index.html",revision:"1152df535b1099a0e359b24f9bc2c880"},{url:"roadmap/base/data-structure/index.html",revision:"ef0a634347bf02267e81efe403c53e79"},{url:"roadmap/base/database/index.html",revision:"baf0e6d6588487f7e5f3d48078b2df7b"},{url:"roadmap/base/index.html",revision:"4b3f6507942634da9c3aeb93d7b62a9b"},{url:"roadmap/base/network/domain/index.html",revision:"37a83c5ea1794eccce6f6aaa62374894"},{url:"roadmap/base/network/index.html",revision:"177a9ad291caaaae56d01d0e2ea555a4"},{url:"roadmap/base/network/ip/index.html",revision:"f2ee2974abc0dfcbe55a2155ca7fe70c"},{url:"roadmap/base/network/osi/index.html",revision:"c2f76a9c985e2bc514f322e07c188212"},{url:"roadmap/base/network/osi/layer-4/index.html",revision:"a4b3e4527d6d59cda1101d56ae08c8d1"},{url:"roadmap/base/network/osi/layer-7/index.html",revision:"0da36b6b75db372401af4ca7b4a76845"},{url:"roadmap/base/network/protocol/tcp/index.html",revision:"d3e41b1d615080bcc1ee8be4a0862ec8"},{url:"roadmap/base/network/protocol/udp/index.html",revision:"78b7cdcf69469e1d08b3368b2e54491e"},{url:"roadmap/base/network/www/http/index.html",revision:"492ef57752355fe6ef4a73ccbb3b7265"},{url:"roadmap/base/network/www/https/index.html",revision:"e4d1997b3cfcde32984a4fab0d735080"},{url:"roadmap/base/network/www/index.html",revision:"c36592594b08b1d93efbf0b08ee5cc0a"},{url:"roadmap/base/network/www/url/index.html",revision:"69f544f640007d4ae389b8c03eafd725"},{url:"roadmap/dotnetcore/auth/example/index.html",revision:"5b5b81c22804f2a2fbfea4701f16abee"},{url:"roadmap/dotnetcore/auth/index.html",revision:"cbd0098964c7c4ba3d9ad3c791080f4c"},{url:"roadmap/dotnetcore/auth/is4/external-account/index.html",revision:"537a9037cd5f68df1efc5785f7e371f4"},{url:"roadmap/dotnetcore/auth/is4/index.html",revision:"cfa036647fb1f37eba8dfc71495bba32"},{url:"roadmap/dotnetcore/auth/is4/intro-config/index.html",revision:"56a5ff59426a595fa6639fead4dfeadf"},{url:"roadmap/dotnetcore/auth/is4/useef/index.html",revision:"0c0185598711ecef0427d61490d32fc3"},{url:"roadmap/dotnetcore/auth/jwt/index.html",revision:"e815b24e9b8f137722fa3deb990b407a"},{url:"roadmap/dotnetcore/basic/index.html",revision:"7a1753487c235183e6a8a1a3afc67ba7"},{url:"roadmap/dotnetcore/cache/distributed/index.html",revision:"1ebd9a6b687e4c2b2bfe159899ea745e"},{url:"roadmap/dotnetcore/cache/index.html",revision:"2979ec64184cf1f2e42294ce44422ad4"},{url:"roadmap/dotnetcore/cache/memory/index.html",revision:"363351aa701b05fa1e9ae2257e660dcb"},{url:"roadmap/dotnetcore/cors/index.html",revision:"dccf3ba5842ba2fc1cc38996a66b1411"},{url:"roadmap/dotnetcore/db/efcore/context/index.html",revision:"2e344857facb0671560cd60e3fac4228"},{url:"roadmap/dotnetcore/db/efcore/index.html",revision:"023afb2d3946bcfe08e38eefa3a96d81"},{url:"roadmap/dotnetcore/db/efcore/manage/index.html",revision:"367d56e6d3c540949d8ce7194a574124"},{url:"roadmap/dotnetcore/db/efcore/model/index.html",revision:"e89159d1113a76080850d97c4e989a6b"},{url:"roadmap/dotnetcore/db/efcore/use/index.html",revision:"3250c13a28d750249231ba36c2f58e41"},{url:"roadmap/dotnetcore/db/index.html",revision:"1eec9ab79a1ab327be318ea3aa1078f8"},{url:"roadmap/dotnetcore/db/other/index.html",revision:"686a1b01a172e2d6d7c0ac2b31924e1b"},{url:"roadmap/dotnetcore/di/collections/index.html",revision:"28fd6f689eb2acfe481aff33d8d6dc91"},{url:"roadmap/dotnetcore/di/index.html",revision:"8ffe6fbb1be682fe900faffdc938e1f9"},{url:"roadmap/dotnetcore/di/lifetimes/index.html",revision:"54b4e6ad8d57e6537dd5c0cfabf0fd34"},{url:"roadmap/dotnetcore/index.html",revision:"18b1d2bf14e72cba18c0b0d00802316b"},{url:"roadmap/dotnetcore/log/APM/index.html",revision:"c1d4dcb06c2c95e5633a821dd20f6fb7"},{url:"roadmap/dotnetcore/log/Serilog/index.html",revision:"ed107b22a1173a8d042fedaa56c1086e"},{url:"roadmap/dotnetcore/mapper/automapper/index.html",revision:"dc984dbaf6c636b02d017ab376af274f"},{url:"roadmap/dotnetcore/mapper/index.html",revision:"178214776a97ea694e4525c5c9c7465b"},{url:"roadmap/dotnetcore/microservice/mq/RabbitMQ/index.html",revision:"1afc14365d50fae908321c37341824cb"},{url:"roadmap/dotnetcore/swagger/index.html",revision:"945e357eb5e5e4cc3322688ce473f4b2"},{url:"roadmap/flutter/index.html",revision:"fabe7eaf6e98e955ba4918eecb8e4b28"},{url:"roadmap/frontend/advanced/css-processor/index.html",revision:"4086778ebd07412f4b130b432c7a55ee"},{url:"roadmap/frontend/advanced/index.html",revision:"c2bd5426a23dad7db2c6fb7b36374b0d"},{url:"roadmap/frontend/advanced/performance/index.html",revision:"c62c5c50ac2277634901e423008f25ab"},{url:"roadmap/frontend/advanced/principle/index.html",revision:"ef9711d049337ab43fb343d4be7023e3"},{url:"roadmap/frontend/advanced/ts/index.html",revision:"351f577285afbd89f77394cfc066b2bd"},{url:"roadmap/frontend/css/box/index.html",revision:"8762a4f2850084b48acf9fa3399f913f"},{url:"roadmap/frontend/css/index.html",revision:"ca506df5127d76fb17aa1f456190b850"},{url:"roadmap/frontend/css/layout/flex/index.html",revision:"0195550196c9f45bb6f155ee2a7fddcb"},{url:"roadmap/frontend/css/layout/grid/index.html",revision:"42b494da33197f87c6f4fe25a0d08e60"},{url:"roadmap/frontend/css/layout/index.html",revision:"bc4722e85cab8364e436bdb41f84afb4"},{url:"roadmap/frontend/css/media/index.html",revision:"178f4293898048d24db3aa795caf3812"},{url:"roadmap/frontend/css/position/index.html",revision:"bcaa3fb8a820c833adc4241877336445"},{url:"roadmap/frontend/css/selector/index.html",revision:"5cd89d52314b54fc9af96320208991aa"},{url:"roadmap/frontend/engineer/build/index.html",revision:"357bd876f6a475f74f30dd96c1e7b1e1"},{url:"roadmap/frontend/engineer/format/index.html",revision:"38ab422ad05ae8dc0a4bc04410992138"},{url:"roadmap/frontend/engineer/package/index.html",revision:"53087f91555ab78d2f86f0400e6c2184"},{url:"roadmap/frontend/html/index.html",revision:"41d08db1b41d835c852dff67075d4766"},{url:"roadmap/frontend/index.html",revision:"ca5f0db888bafbde3e3b8b27ab8fadf7"},{url:"roadmap/frontend/js/asynchronous/index.html",revision:"27ce882808b8a34e29f92c46f01d2c0f"},{url:"roadmap/frontend/js/index.html",revision:"fcb435020aacad50153a3596c0dd8fb5"},{url:"roadmap/frontend/js/net/index.html",revision:"fa6fa17f63d2e475c405cf2521e75aff"},{url:"roadmap/frontend/js/prototype/index.html",revision:"d2f41f2eb8478dedebde360cf2b7481b"},{url:"roadmap/frontend/react/index.html",revision:"861c39b253c4c111cba5ab3615184bf9"},{url:"roadmap/frontend/vue/basic/class-style-bind/index.html",revision:"551d93d270308a6c9f55144073feac8a"},{url:"roadmap/frontend/vue/basic/component/index.html",revision:"4ce8dae0aaea0464ba203568b7c2175b"},{url:"roadmap/frontend/vue/basic/composition/index.html",revision:"a0b834596df8409dd7ffd874c02624c3"},{url:"roadmap/frontend/vue/basic/computed-watch/index.html",revision:"368dd89bfd03196d606a9c11971467f7"},{url:"roadmap/frontend/vue/basic/data-method/index.html",revision:"2613c18f5466691ffa3a560934ec50d1"},{url:"roadmap/frontend/vue/basic/for/index.html",revision:"ffd7f298629e9560772a1bc41c9e26b1"},{url:"roadmap/frontend/vue/basic/if/index.html",revision:"4a8137d74fcd8e126cca3f1c84bc9e0d"},{url:"roadmap/frontend/vue/basic/lifecycle/index.html",revision:"42589f90c95d46cc56888e9daadc12c9"},{url:"roadmap/frontend/vue/basic/render/index.html",revision:"f13f6389884cbb42a00707ecef60b04f"},{url:"roadmap/frontend/vue/basic/slot/index.html",revision:"cad916013665047feeeab11d96f77990"},{url:"roadmap/frontend/vue/basic/template/index.html",revision:"ed6889260034959d7dbde527d99bef82"},{url:"roadmap/frontend/vue/framework/index.html",revision:"6e8281ddaaebb2e4e35411b4b871aabe"},{url:"roadmap/frontend/vue/index.html",revision:"44df36d7221c40a88db26322d229b4f2"},{url:"roadmap/frontend/vue/mvvm/index.html",revision:"d1bed823fccd5174123e174169927795"},{url:"roadmap/frontend/vue/reactive/index.html",revision:"fff594b812d4df074c5315ba204d9826"},{url:"roadmap/frontend/vue/supports/cli/index.html",revision:"392338154968d0b8685d1749c338308f"},{url:"roadmap/frontend/vue/supports/router/index.html",revision:"a381e534bb3a97da519e544152179c42"},{url:"roadmap/frontend/vue/supports/test/index.html",revision:"b78eb1398976c9dfd44744726ad8aa7b"},{url:"roadmap/frontend/vue/supports/tools/index.html",revision:"45ce2e6b3323fbadfdcc1fd119afb1ba"},{url:"roadmap/frontend/vue/supports/vuex/index.html",revision:"003c7911cdf91b6e95e0c0e74cbe5c07"},{url:"roadmap/frontend/vue/template/index.html",revision:"9ab59dc6a77ab93dad9f04a33f25e65d"},{url:"roadmap/frontend/vue/template/setup-from-0/index.html",revision:"56e38618268f31e9cdbfb7902bb63c28"},{url:"roadmap/frontend/vue/virtualdom/index.html",revision:"9dd94601e088ec6cd118a71082069d4f"},{url:"roadmap/index.html",revision:"35c8af862898081eee7494df5288793e"},{url:"roadmap/java/index.html",revision:"a8608385f062070b7eabe2ac331afcd7"},{url:"slide/index.html",revision:"f0f0433f36553af245d73acf89dfeb62"},{url:"standard/csharp/index.html",revision:"ebe6e9b8a101ea1a01587c248a395968"},{url:"standard/css/index.html",revision:"9f59fcd6e2b66b5f2dbba3f88ed81c30"},{url:"standard/html/index.html",revision:"a7bfb0bb0b06f1ec8006eedcbfc2f453"},{url:"standard/index.html",revision:"d52f07ab462aee26328b39dc94461dae"},{url:"standard/javascript/index.html",revision:"0fa8718e89384fa55800f9c8de4403dc"},{url:"standard/python/index.html",revision:"96de66f57267b3f8fca9a25a25d8b654"},{url:"standard/vue/index.html",revision:"96e28117cdb73a415f48000cc5788ed7"},{url:"star/index.html",revision:"a52b3b79bcf658eb3038b5cbc76e321c"},{url:"tag/index.html",revision:"cfa63cc2f1d1bfc586c868e955ce47d8"},{url:"timeline/index.html",revision:"86780cc30c01be93c3fe64eb391bd2fb"}],{}),e.cleanupOutdatedCaches()}));
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
