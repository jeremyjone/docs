if(!self.define){let e,a={};const s=(s,d)=>(s=new URL(s+".js",d).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(d,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(a[i])return;let c={};const f=e=>s(e,i),b={module:{uri:i},exports:c,require:f};a[i]=Promise.all(d.map((e=>b[e]||f(e)))).then((e=>(r(...e),c)))}}define(["./workbox-ebf2f394"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.439caf23.css",revision:"9f5d7505de44ca4177a7b375d4edf54f"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/134.6d9bab09.js",revision:"7598f8a6a70853d5ede0b321cd2dc800"},{url:"assets/js/135.8b6a23ba.js",revision:"859ab94790caf8bc6fc152de8916fc9e"},{url:"assets/js/136.3b4d7965.js",revision:"f3a3a30890664c841250c5979c1c4847"},{url:"assets/js/137.1a37cc2f.js",revision:"2a0bfe53a4c2560b29b002597917d787"},{url:"assets/js/138.c4b55aa4.js",revision:"8d5823fe4db71795212de0c0cb6b82f3"},{url:"assets/js/139.8e197c25.js",revision:"23df2609bfa83261607e598008fd9e87"},{url:"assets/js/140.76ac3bad.js",revision:"23c1e199ed739a1a708be9a7b98b7ab0"},{url:"assets/js/141.bbb85a07.js",revision:"13b68373613714b46a6a62914b95ec8c"},{url:"assets/js/app.7b5203a3.js",revision:"7c80637fdc4e83f9f773c371dca7dd4d"},{url:"assets/js/layout-Blog.1ed60b76.js",revision:"80b3fbf93f55e0b530cfc32e96ace5bc"},{url:"assets/js/layout-Layout.f3e9cb51.js",revision:"a1ec8439042bd2daeba4549b5083c02b"},{url:"assets/js/layout-NotFound.5a99754f.js",revision:"96e231421bba443bb793653f37dd2fbf"},{url:"assets/js/layout-Slide.6887e3cd.js",revision:"edcf22ea44ce434057e400af4ecbc83e"},{url:"assets/js/page--69fb9c74.33b2e2f1.js",revision:"75124a81f294b6dbebb98f6c4ee57b0b"},{url:"assets/js/page-Android学习之路.36fb99d5.js",revision:"506a4b5d1d018965b8b5705443ebd6d2"},{url:"assets/js/page-ASPNETCore开发者学习路线图.1a19bdee.js",revision:"ae956db7b5c6aa92f07057b57f35976f"},{url:"assets/js/page-AutoMapper.6a959fa9.js",revision:"a345e802b1be4febf5340c8d7d96dde7"},{url:"assets/js/page-C.257ccefc.js",revision:"4cd84516350425ab9cb55a48e4647313"},{url:"assets/js/page-class与style的绑定.0e9cb8fa.js",revision:"618f438c32b1c1e35364867224856bdb"},{url:"assets/js/page-CSS基础.842c23e9.js",revision:"175daf4442c130711cc14d6d1c8b4dce"},{url:"assets/js/page-CSS规范.d502ceb8.js",revision:"df6f0a4eedc7cb49a8cf83ae7f6379f6"},{url:"assets/js/page-CSS预处理器.7e77a9ec.js",revision:"d6db6f8fbe07609133d1709efefe1f81"},{url:"assets/js/page-DbContext的配置.85927bb8.js",revision:"2a5ce11a385ab7f8ca29414738c0663b"},{url:"assets/js/page-Devtools.d6ba4a6f.js",revision:"35f7c2113c3bc44f1d846f036cdd9335"},{url:"assets/js/page-Docker使用文档.a41a1f83.js",revision:"fc5226206e6a6a5c623e0aae9d3b406d"},{url:"assets/js/page-Docker快速搭建NPM服务器.75c25865.js",revision:"ed007c33591b79f928b7dff852978750"},{url:"assets/js/page-ExamplePage.7f7beac6.js",revision:"b2900571ce5bc70dbf4612cd88129da9"},{url:"assets/js/page-Flutter学习之路.78c044c0.js",revision:"3984c3e6c4c2ff6ac90d176de27ac910"},{url:"assets/js/page-GitHubPagesaction配置.d3250601.js",revision:"897eb6114a5b9fe1c34829cee85db8ad"},{url:"assets/js/page-GIT命令.c641173c.js",revision:"f595143fefecee05d35a6655a2edf44a"},{url:"assets/js/page-Home.80e83b34.js",revision:"d02ccc14dd37e505f62d3c5cb03f4096"},{url:"assets/js/page-HTML基础.329ac737.js",revision:"7ceed99c75ade76969ffe89aabdfb9f5"},{url:"assets/js/page-HTML处理方法.a4405fb6.js",revision:"44b0c7a49f695bde24c132dd7c41d49d"},{url:"assets/js/page-HTML规范.59ac9d94.js",revision:"654426b2c7803696f3562a5fb2ddaa39"},{url:"assets/js/page-HTTP.1ca6057a.js",revision:"6770a88ca049f7165ec29e326f028f6f"},{url:"assets/js/page-HTTPS.e8d8a5a4.js",revision:"9acb6496ee9f7e15b506dfe357bbf5d1"},{url:"assets/js/page-IdentityServer4的使用.05f8610f.js",revision:"30904182edbdba481a5b4c35d82ce0bc"},{url:"assets/js/page-IP网际协议.5fc5c7ff.js",revision:"a132b6f1998383e7506b5da2476cdaef"},{url:"assets/js/page-JavaScript基础.630697c3.js",revision:"09596cf0445db5f9b0959101c2d38782"},{url:"assets/js/page-JavaScript开发规范.02a7e994.js",revision:"a41be19625477fe9268dd3db5e5ce79e"},{url:"assets/js/page-Java学习之路.03bc87f4.js",revision:"ebcb44d49dddddf15db4715d0d2ad742"},{url:"assets/js/page-JWT.eb3da665.js",revision:"a9a4c02604c5a5b4f0c3372de4d8b7ad"},{url:"assets/js/page-Markdown语法.091706e9.js",revision:"cdc4507c833c175b51683e51a6757719"},{url:"assets/js/page-MVVM.3478b892.js",revision:"c77153442144ecbcc9f91d2cfe702265"},{url:"assets/js/page-npm使用.209e65c5.js",revision:"31483e3339cadb0df80f105ab1cb9935"},{url:"assets/js/page-OSI模型.120cff59.js",revision:"4aca2172b3cbc461ddff8fce116374ea"},{url:"assets/js/page-Proxy与Reflect.feadfcbd.js",revision:"e417cbd236431740dd2aafcbaff4d362"},{url:"assets/js/page-Python开发规范.69634e0a.js",revision:"26556ec299cb73ded176d1f156ecc72e"},{url:"assets/js/page-RabbitMQ的使用.5ebe5a1c.js",revision:"6c1a1f4f41a902f4e42e93ecdfbe6ccb"},{url:"assets/js/page-React学习之路.6f4f8dd7.js",revision:"af41fd8bd2315c25464f2af5b9c81dec"},{url:"assets/js/page-Serilog的使用.0cfcddc8.js",revision:"826a145b4ca8b738e4eb2811804aa8dd"},{url:"assets/js/page-Swagger文档的使用.6974b28b.js",revision:"bb9d8262ca3f725f99534568ec29d7d5"},{url:"assets/js/page-TCP协议.dd8ac53a.js",revision:"f745ea6f4a6fec5e2d93aa253048e2a2"},{url:"assets/js/page-this关键字.08e5a6c0.js",revision:"b2da47f0f645259c544563da9c403f7c"},{url:"assets/js/page-TypeScript.a848b475.js",revision:"efc8276c4b5448e03462b051730a5131"},{url:"assets/js/page-UDP协议.26768134.js",revision:"db09784fd1002b9ff80abb58254ade35"},{url:"assets/js/page-UI框架.b87eee9d.js",revision:"fad27dd88933fa37d095c0257dbceec7"},{url:"assets/js/page-URL.19d23a89.js",revision:"a642ab2a0093c400eaf248e04385205a"},{url:"assets/js/page-Vim使用说明.76a72456.js",revision:"344a353b59ae08a000cf5c5129fa438b"},{url:"assets/js/page-VueCli.5c3ace72.js",revision:"e1a52e7321536d25b6087690ec947024"},{url:"assets/js/page-VueRouter.b75815de.js",revision:"f670bada7d0365e0204bb07c2a811be7"},{url:"assets/js/page-VueTestUtils.9261204b.js",revision:"78af506b08746313c5c1610cdb432cd0"},{url:"assets/js/page-Vuex.8b059204.js",revision:"2d501aaa956be5a37127f54d41d0556f"},{url:"assets/js/page-Vue学习之路.f701ff99.js",revision:"e7bb0e2169ede181f0627cf65733a265"},{url:"assets/js/page-Vue开发规范.107ebbf4.js",revision:"45b015d09f5f99c461debc93d85cd000"},{url:"assets/js/page-七层模型.f35bf254.js",revision:"8f6acbf21c4dc74f5cd517a1a1815461"},{url:"assets/js/page-万维网.93a2ac96.js",revision:"903f2d657994911415ccde57acd17504"},{url:"assets/js/page-从0搭建项目模板（vue3）.94cd1835.js",revision:"7a8f6935abed0810340fd2053b9147be"},{url:"assets/js/page-代码书写规范总纲.fc853f59.js",revision:"8441270c10a249b31c13ef9ebf1a4616"},{url:"assets/js/page-使用.5bbf8f4f.js",revision:"80c7c2d13414ed66096996fab45e679c"},{url:"assets/js/page-使用项目模板.84c84996.js",revision:"296e1697ec0fb20e37106eda9fb66320"},{url:"assets/js/page-入门.eaa3d2cc.js",revision:"ba0f26304cb704ca6cb599dbd68c3231"},{url:"assets/js/page-其他映射工具.1cf13857.js",revision:"3cebe8b53c27f2dbe7f7ce073322d115"},{url:"assets/js/page-内存缓存.f593377f.js",revision:"118bea4f7a70a02464c3ab8edc30e579"},{url:"assets/js/page-分布式缓存.2bc0dd42.js",revision:"4f0affb8a44d8d3961bac816d5f29960"},{url:"assets/js/page-列组件JGanttColumn.ebed2341.js",revision:"cdff440aabea5e93d6bf92445265d89d"},{url:"assets/js/page-判断方法.8982ae2c.js",revision:"65271d94ca8e1a4dc8cd571aa3009503"},{url:"assets/js/page-前端学习之路.f887cd5c.js",revision:"9edea4ebfab1ffb4dc31524b1048de36"},{url:"assets/js/page-前端进阶.1fbf1209.js",revision:"d9482d1dc137b5f14f3378d1d42e4343"},{url:"assets/js/page-包管理器.a26e8534.js",revision:"5d00f4273d2964446f5dae955ae6d7e6"},{url:"assets/js/page-原型和原型链详解.db6889b6.js",revision:"6a6efc678da9ff246b46fafb85a29065"},{url:"assets/js/page-原理部分.aae05cd1.js",revision:"5dba604fb07450a158a5b4a00d089daf"},{url:"assets/js/page-响应式与媒体查询.07b5c4d8.js",revision:"18338fe92b47901f7cd533b01a0e2d26"},{url:"assets/js/page-响应式的原理.bb4c44fe.js",revision:"9c84ffe555c7f58eb90b6d8b49237e0e"},{url:"assets/js/page-四层模型.3f0db8ef.js",revision:"0273b4149762c83758c0191bd35d4785"},{url:"assets/js/page-在ASPNET中使用授权与认证.42249ec1.js",revision:"d6a7697fd59718b83c6be58429d43227"},{url:"assets/js/page-域名.fe72a48d.js",revision:"ed9f846148cb4f719fe5024ed3469e6c"},{url:"assets/js/page-基础知识.92521d0c.js",revision:"8640f17f546d546d244fe5de72ff7f72"},{url:"assets/js/page-处理日期方法.c23a43a4.js",revision:"89a5678a5ad608cbdc8d568b8c92739b"},{url:"assets/js/page-处理颜色的方法.0174ea7e.js",revision:"9c999fed1d4ca0f382813219673cba70"},{url:"assets/js/page-外部身份验证.73f45363.js",revision:"1f9e63bac2bfaeff1d59e4412b6d88d4"},{url:"assets/js/page-学习路线.f8abd2c4.js",revision:"1c2d742fbaf047f787521e9926816b5c"},{url:"assets/js/page-定位.7104449f.js",revision:"bf0542583446de58f351bdc50e329611"},{url:"assets/js/page-布局.b2c8dd30.js",revision:"d92ac3b4108f239abf1bcc3bfa66cbd9"},{url:"assets/js/page-常用的转换方法.5a6647aa.js",revision:"75d602592e2c1b822e91d3bc90967682"},{url:"assets/js/page-应用性能监控系统.6670cb12.js",revision:"6cca552cb29c936f2f65ec40e0a64f14"},{url:"assets/js/page-异步编程.35ec3251.js",revision:"df93c3e2442aac24405a0f14b6054d72"},{url:"assets/js/page-弹性布局（Flexbox）.dfb48672.js",revision:"c6fd1ec8c43ba830a3fc1750ba76442a"},{url:"assets/js/page-循环渲染.d486d51c.js",revision:"32309e14beab22d4473ea83c832a130f"},{url:"assets/js/page-性能部分.8bc685a0.js",revision:"359eb4c05e1b70f7524831fa5b5f5c15"},{url:"assets/js/page-手撸代码.21383ed7.js",revision:"9cafdc7625be3ba918b90e2a71cecbeb"},{url:"assets/js/page-插槽.fe74cdf4.js",revision:"34fae1b187a3a1769c9779af986346c2"},{url:"assets/js/page-数据和方法.cc7efb63.js",revision:"44993486ce0d5510a4bc7aa8f96441b4"},{url:"assets/js/page-数据库.3359cb05.js",revision:"737b74ebe6966052653f22dfed1b18fd"},{url:"assets/js/page-数据的持久化（使用数据库）.8386f879.js",revision:"f84bc0829a84bf2af388489f0b342be9"},{url:"assets/js/page-数据结构.659c398d.js",revision:"1aaabc19c75d974cec07072878ead6e2"},{url:"assets/js/page-数组的一些扩展方法.6c84330c.js",revision:"2bfd02f19d186994e6cf040126f38380"},{url:"assets/js/page-文档手册.329d00a4.js",revision:"128acb194b2c00d32fc4945b643590c3"},{url:"assets/js/page-服务容器.bd3fce20.js",revision:"ab99035c3aaf22e2efa67418cf028a33"},{url:"assets/js/page-条件渲染.071e9cc8.js",revision:"ba7954c2f5b2968735b9874ca2200f37"},{url:"assets/js/page-构建工具.9854769b.js",revision:"88401ba8332888c3cf10c0fb86b24746"},{url:"assets/js/page-栅格布局（Grid）.cbf48045.js",revision:"931c7ff2aeb43e726f6a13d60e054cc9"},{url:"assets/js/page-根组件JGantt.09a03d40.js",revision:"dc3ead8c109bfd819fcbc58da1ee6a57"},{url:"assets/js/page-格式化工具.80adf0f8.js",revision:"b1a2e8c287785d5af02bcd370da26775"},{url:"assets/js/page-概述.d2e767f9.js",revision:"a54c8bc10813968d48b05d51f84ca9df"},{url:"assets/js/page-模型.230cadb5.js",revision:"51185da9a4280ebd01b8e5a29b55c90b"},{url:"assets/js/page-模板语法.97f3ee01.js",revision:"ed85948ad938d72afa7874c631c935e9"},{url:"assets/js/page-渲染.0a0d194e.js",revision:"1b732e47b2cff1af88b76125c4c6bc5c"},{url:"assets/js/page-滑块组件JGanttSlider.bea52004.js",revision:"77b74ec56920a02785d1b45ec330f2e4"},{url:"assets/js/page-生命周期.c8001439.js",revision:"eeee01f82c646bc46116521cdbd8b7bd"},{url:"assets/js/page-生成方法.0809ee29.js",revision:"c33d65626c727c1521e4b97ff8a72264"},{url:"assets/js/page-盒模型.177ce614.js",revision:"9af67a2d756df7e447f5f75b1c4f1ff1"},{url:"assets/js/page-算法.79f4660e.js",revision:"6299b94d71a03ca018cc0445ede13970"},{url:"assets/js/page-管理数据库.bf0784ac.js",revision:"7ffead0f0944a9433a6c917579196012"},{url:"assets/js/page-组件.f16c9c72.js",revision:"7f1689f579bfaec94f23f1152c0daf4f"},{url:"assets/js/page-组合式API.73d4de67.js",revision:"a17cfd1fc58d8455aa5750b0258406cc"},{url:"assets/js/page-网络基础.50ff39c5.js",revision:"7897830a1c698f0ed977980b68354fe9"},{url:"assets/js/page-网络请求.6c61b452.js",revision:"2db7cc1566eba6aeea0a33c01c2ab650"},{url:"assets/js/page-虚拟DOM.148403cc.js",revision:"5b2cebac27cc908e8c27a441bf387cbd"},{url:"assets/js/page-计算属性和侦听器.3f3e6def.js",revision:"c973da3667f34f5f7c6ad5051b2a94ad"},{url:"assets/js/page-计算机基础.4a19392b.js",revision:"7f6c210a3b03500b705e00d909d68499"},{url:"assets/js/page-计算机基础内容.2944a954.js",revision:"211b102185a288dc9b6a3a1623608039"},{url:"assets/js/page-详解认证中心的配置.7efe668f.js",revision:"f2fd5195ac84da7f199e904d42a66113"},{url:"assets/js/page-跨域.9076a112.js",revision:"2387fa4990eada20227d39de249b1a55"},{url:"assets/js/page-选择器.75a2d3c7.js",revision:"42799f6af9397685dbd65622e0255418"},{url:"assets/js/page-通用方法.37f3d2f8.js",revision:"1f49212e7dcfd2716965f632dd275ac6"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.99fc0ed6.js",revision:"198d3d84f517651bea5120f2124150e4"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.69314708.js",revision:"ec0deacaf919625a4bb955643920c271"},{url:"assets/js/vendors~layout-Layout.866ce90b.js",revision:"d2990f42d61a9f9b52bdf0299125056b"},{url:"assets/js/vendors~photo-swipe.d68d40c2.js",revision:"9f3fdf84baaed0d2adeadd4f5b60de3b"},{url:"assets/js/vendors~valine.292a098c.js",revision:"662aff22de6a69630312d274287ee0af"},{url:"assets/roadmap/frontend/css-principle.svg",revision:"b9d80fa48caaf3c37c07a679ea3eeb84"},{url:"js/base.js",revision:"a11d78892850bfbd80f5eff104041105"},{url:"404.html",revision:"f4d34bf571de4bca0d8521268fa64aef"},{url:"article/index.html",revision:"7933078f40898befd7931c0af3603ebe"},{url:"category/index.html",revision:"945931315b9b17efc992252b6ee5683f"},{url:"codes/index.html",revision:"f9ae044142645cde33ed19b4ea7338ee"},{url:"codes/js/array/index.html",revision:"b1fa616d89873048cbe1ed0b8f6fb97f"},{url:"codes/js/colors/index.html",revision:"ad179d6d9fbe4aacbecca7e750734f29"},{url:"codes/js/create/index.html",revision:"d39337291b2e08f08c88d730308e759e"},{url:"codes/js/date/index.html",revision:"e04a8404d05010f340688d8edcfc69ee"},{url:"codes/js/html/index.html",revision:"7b72cec5d3188a8e7416ad666076364a"},{url:"codes/js/index.html",revision:"2186b551bcc937f17eff0ad75bdb860e"},{url:"codes/js/judge/index.html",revision:"6e3945c7f75af217c2a0a52cbbe0fece"},{url:"codes/js/transform/index.html",revision:"6d2922a3136fac6d970f476534463327"},{url:"document/docker/example/npm/index.html",revision:"42a04f7f146b0fefdde4bdd7047b20b2"},{url:"document/docker/index.html",revision:"872ac73df0017550041fd0cc0d7cbc33"},{url:"document/gantt/column/index.html",revision:"49d1ce1a328407d2139eb1dd348d3432"},{url:"document/gantt/common/index.html",revision:"b8676467a9bbf8490050df608bb58153"},{url:"document/gantt/index.html",revision:"14d710a6b65c278ce54f24395c69c75d"},{url:"document/gantt/README_old/index.html",revision:"38099e946b53c56f6f8932fb926d3471"},{url:"document/gantt/root/index.html",revision:"beaf392283e4a1b7654b6d64789568e7"},{url:"document/gantt/slider/index.html",revision:"16b8e73d5b50a5e25a69034897b2e306"},{url:"document/git/github_workflow/index.html",revision:"940daff6c548ad3781fa6ab4c8eb937a"},{url:"document/git/index.html",revision:"2574ecf4f118032401e1d34375a2ff0f"},{url:"document/index.html",revision:"4915a173763364e586266a0473d6104b"},{url:"document/markdown/index.html",revision:"5c18f1811fa6d455fd8454d807d9b25c"},{url:"document/npm/index.html",revision:"d6cfb29bf5810c266209b28b389aa29c"},{url:"document/vim/index.html",revision:"fbcfbf2f6853c609aa36f599b30b256a"},{url:"encrypt/index.html",revision:"bfa619aac3a45947d4610dc521f5c7f4"},{url:"example/css/position.html",revision:"8be6950ed5fa629d3227224f1faa53d1"},{url:"example/index.html",revision:"8a10ad7ef34fd7f4560d9291dffff02a"},{url:"index.html",revision:"885387988d94e324542d4a1d95132a37"},{url:"roadmap/android/index.html",revision:"a7c0640dd65abb8c563e7379cdd260a3"},{url:"roadmap/base/algorithm/index.html",revision:"afc4032624a3616f9a3484d79e932be5"},{url:"roadmap/base/computer/index.html",revision:"0e1acc4ecf5a86e19e86d26eb4be0446"},{url:"roadmap/base/data-structure/index.html",revision:"191211ae9bcf753548a3222421477abe"},{url:"roadmap/base/database/index.html",revision:"d407cb67b9efebd14ba0a143a53269d5"},{url:"roadmap/base/index.html",revision:"7a072181b0397e62b60504c8b62f3d1f"},{url:"roadmap/base/network/domain/index.html",revision:"e8956909eb7c3e797c97313cd786dd42"},{url:"roadmap/base/network/index.html",revision:"aa81f65482df6abdfd7c2acadf1af6d2"},{url:"roadmap/base/network/ip/index.html",revision:"dddcd9e22c9faf42a92c85f2f571ad8e"},{url:"roadmap/base/network/osi/index.html",revision:"81bf42af8521136215f3c1dd9e10d4da"},{url:"roadmap/base/network/osi/layer-4/index.html",revision:"5a56a26e68418c632b437d1e40662e2a"},{url:"roadmap/base/network/osi/layer-7/index.html",revision:"803fdbefbbe042c9fce049e930e1161a"},{url:"roadmap/base/network/protocol/tcp/index.html",revision:"41c61aa7adf995408403b98170fbf8c8"},{url:"roadmap/base/network/protocol/udp/index.html",revision:"1a688fbd680974fdc7c3d6d4a1e8ca95"},{url:"roadmap/base/network/www/http/index.html",revision:"d685d155dfd2a0c254716db403b1a46c"},{url:"roadmap/base/network/www/https/index.html",revision:"f558e7a94cee87d0b1a645118603151b"},{url:"roadmap/base/network/www/index.html",revision:"d42b27844e20da7e979111030e5d7404"},{url:"roadmap/base/network/www/url/index.html",revision:"f8982ebda1e64c04b6ca8f5a9b1d5264"},{url:"roadmap/dotnetcore/auth/example/index.html",revision:"865c2e68a9666d04f4e8987976ecf1b5"},{url:"roadmap/dotnetcore/auth/index.html",revision:"fe55877135d1e88386b76732a53f8621"},{url:"roadmap/dotnetcore/auth/is4/external-account/index.html",revision:"8bf6c8437f423b07f4a117b02afa0ed2"},{url:"roadmap/dotnetcore/auth/is4/index.html",revision:"f987442ae1c76b25f1eb2e9a96a00de0"},{url:"roadmap/dotnetcore/auth/is4/intro-config/index.html",revision:"4f63f6c1ed8ab14520061904f4febf8b"},{url:"roadmap/dotnetcore/auth/is4/useef/index.html",revision:"a39d8400743517c03eea297170baa96e"},{url:"roadmap/dotnetcore/auth/jwt/index.html",revision:"ddeb69b7cf0c1557b0c110d509fe45e7"},{url:"roadmap/dotnetcore/basic/index.html",revision:"1dc20eb14aba66b71666b34fffb0d1ae"},{url:"roadmap/dotnetcore/cache/distributed/index.html",revision:"df00cb9488ac63431fb29f62a11611c2"},{url:"roadmap/dotnetcore/cache/index.html",revision:"7a9eda90380fda7065da59dfb0438ef5"},{url:"roadmap/dotnetcore/cache/memory/index.html",revision:"dc692bfb678e98bc2647eba0b0c53949"},{url:"roadmap/dotnetcore/cors/index.html",revision:"a7608242b2e31c06fe2677ce02a64fae"},{url:"roadmap/dotnetcore/db/efcore/context/index.html",revision:"a23feb9227a202798dd01858e8ee1b77"},{url:"roadmap/dotnetcore/db/efcore/index.html",revision:"b6c805fccf1cc3b374135b4deae0d2a6"},{url:"roadmap/dotnetcore/db/efcore/manage/index.html",revision:"6393709444f2af6d3ec62db81d61f807"},{url:"roadmap/dotnetcore/db/efcore/model/index.html",revision:"87f5d9cf5389f2338a4921d3b51a6139"},{url:"roadmap/dotnetcore/db/efcore/use/index.html",revision:"a4067dc667ac0920a53bb9b5a48e2d76"},{url:"roadmap/dotnetcore/db/index.html",revision:"67afaec3ca316fbe4650949bfdbf7ab3"},{url:"roadmap/dotnetcore/db/other/index.html",revision:"e8e88395b73338db90f2ba394d1e1f30"},{url:"roadmap/dotnetcore/di/collections/index.html",revision:"a3647c0f221c9aba325022590497e601"},{url:"roadmap/dotnetcore/di/index.html",revision:"21993f75e59785476cf905354c5eb7ab"},{url:"roadmap/dotnetcore/di/lifetimes/index.html",revision:"fa60756077e49740e00bf2da04a447b8"},{url:"roadmap/dotnetcore/index.html",revision:"ff8e3860c316086e38fb43cb93b7a1e2"},{url:"roadmap/dotnetcore/log/APM/index.html",revision:"5bcf24b2a290b561157ebeeaffa917a3"},{url:"roadmap/dotnetcore/log/Serilog/index.html",revision:"482ff285570628cd92cd04ea8338aaa4"},{url:"roadmap/dotnetcore/mapper/automapper/index.html",revision:"b448206c04a5660a08ec9934b4294a99"},{url:"roadmap/dotnetcore/mapper/index.html",revision:"ada6a95a649443db5cb22ea4bcacf1c4"},{url:"roadmap/dotnetcore/microservice/mq/RabbitMQ/index.html",revision:"d0a31fa80071ee0cdb82c34921a8f895"},{url:"roadmap/dotnetcore/swagger/index.html",revision:"85b0ec12f5fd7bdc5d7d34e629d93446"},{url:"roadmap/flutter/index.html",revision:"812eb888e00b2c180d52c5233455189b"},{url:"roadmap/frontend/advanced/css-processor/index.html",revision:"dfa71abf7da530d9af566ac53596ea68"},{url:"roadmap/frontend/advanced/index.html",revision:"6446c38dae70b89d96ada096c1c28b74"},{url:"roadmap/frontend/advanced/performance/index.html",revision:"55a6831e6bbf6e8a4d4111dd0ad5957e"},{url:"roadmap/frontend/advanced/principle/index.html",revision:"3a7ef444849f6e117b7a770368f59736"},{url:"roadmap/frontend/advanced/ts/index.html",revision:"3c74b3f5e42c7bd8ed68656934728a02"},{url:"roadmap/frontend/css/box/index.html",revision:"2b78643654924061e6144f5f0210c906"},{url:"roadmap/frontend/css/index.html",revision:"a48e1afeb66190dc964819f9779b818a"},{url:"roadmap/frontend/css/layout/flex/index.html",revision:"74187fafbb5c10ddfaa0819a2fdb8831"},{url:"roadmap/frontend/css/layout/grid/index.html",revision:"0e873855e15db50726e3df3399ca308d"},{url:"roadmap/frontend/css/layout/index.html",revision:"dbc6324e945d9e161a76ec6b9b711c2e"},{url:"roadmap/frontend/css/media/index.html",revision:"68203bc15b8144e83d663f81eda2cdc8"},{url:"roadmap/frontend/css/position/index.html",revision:"504bca18921d5590935996a893e4f148"},{url:"roadmap/frontend/css/selector/index.html",revision:"10a18ea7063f893db177b908d6752d77"},{url:"roadmap/frontend/engineer/build/index.html",revision:"cf1e71899ead8ed454fa6c4b0b5e5050"},{url:"roadmap/frontend/engineer/format/index.html",revision:"3a6ceb43d81a9a09bceebf9ce93fe80e"},{url:"roadmap/frontend/engineer/package/index.html",revision:"f88153a1e6ee7fcbc590a3647920f03f"},{url:"roadmap/frontend/html/index.html",revision:"d2005b566b3dc9e39c2903f63483c6f1"},{url:"roadmap/frontend/index.html",revision:"dfb27be9148e37e7cada9096909b72f8"},{url:"roadmap/frontend/js/asynchronous/index.html",revision:"19839c68abb2652c2bbf1d7b1f8712da"},{url:"roadmap/frontend/js/index.html",revision:"8df769c8045c9ea5d51db057e24abd6d"},{url:"roadmap/frontend/js/net/index.html",revision:"ab0162eca483905faca99277c905ecc7"},{url:"roadmap/frontend/js/prototype/index.html",revision:"088f78e8a39dada2bc8cb6b9b728b488"},{url:"roadmap/frontend/js/proxy/index.html",revision:"b76bb6f35a595c3e8fb2a59ee7619367"},{url:"roadmap/frontend/js/this/index.html",revision:"0437d0bfe5d7805ee1aeb75222df98cb"},{url:"roadmap/frontend/react/index.html",revision:"e3477eadba5df0a2686f1583f56992dd"},{url:"roadmap/frontend/vue/basic/class-style-bind/index.html",revision:"8c6cd0b6417e5b17134c290e86eff24d"},{url:"roadmap/frontend/vue/basic/component/index.html",revision:"b529695401b004209757c0bfa94094ee"},{url:"roadmap/frontend/vue/basic/composition/index.html",revision:"8dd71cd32bec077b2845ba38e58265f9"},{url:"roadmap/frontend/vue/basic/computed-watch/index.html",revision:"aea0f25e87c8a0623fa45b803e59b33c"},{url:"roadmap/frontend/vue/basic/data-method/index.html",revision:"0a4b01a3f707b083e00586ff2ee0d2cd"},{url:"roadmap/frontend/vue/basic/for/index.html",revision:"e187db97a7af1bc71ddd561b49cdd3c3"},{url:"roadmap/frontend/vue/basic/if/index.html",revision:"42ddbae0a5baa4ce00c5871dbe5a8b4e"},{url:"roadmap/frontend/vue/basic/lifecycle/index.html",revision:"62b47b7a4682388d8bbed7a3bfb8b7a5"},{url:"roadmap/frontend/vue/basic/render/index.html",revision:"041554d1b1bf6ce10be9550130fe9440"},{url:"roadmap/frontend/vue/basic/slot/index.html",revision:"3f04190b29bf9b520288d30bd3a4145f"},{url:"roadmap/frontend/vue/basic/template/index.html",revision:"6423fecaefee36cb499d4b53342ac766"},{url:"roadmap/frontend/vue/framework/index.html",revision:"6059787b55a8d697d322de0877c25a40"},{url:"roadmap/frontend/vue/index.html",revision:"0e549dcde9300f643642ca54a3d2db6a"},{url:"roadmap/frontend/vue/mvvm/index.html",revision:"abcf524274290405d609ee65aa5968a9"},{url:"roadmap/frontend/vue/reactive/index.html",revision:"7e2121806903c2c29a24a2a9e99fee8c"},{url:"roadmap/frontend/vue/supports/cli/index.html",revision:"6ce5fbbfb2f617a8c692efbe092bfb6c"},{url:"roadmap/frontend/vue/supports/router/index.html",revision:"8cba26cbf3bb22b2f109d7cc3bbad342"},{url:"roadmap/frontend/vue/supports/test/index.html",revision:"20e8e9b57fccaa7a4472e3efe74709d8"},{url:"roadmap/frontend/vue/supports/tools/index.html",revision:"0d158b52d6477103a32b6fdedb7c1c62"},{url:"roadmap/frontend/vue/supports/vuex/index.html",revision:"eddbb2be04b2eefc07548f23446343bd"},{url:"roadmap/frontend/vue/template/index.html",revision:"9d6d8a22b96909b7da8dee61a7ea6ee2"},{url:"roadmap/frontend/vue/template/setup-from-0/index.html",revision:"9eb05ed6bec5e5ccbe16a3f7e9a1b2ef"},{url:"roadmap/frontend/vue/virtualdom/index.html",revision:"049837411bee0d779097fc7fc3ebd165"},{url:"roadmap/index.html",revision:"2c3dc414d6b9d9263e8b321ad7f59ef8"},{url:"roadmap/java/index.html",revision:"b947801abbd4e1e8fe929cf082f84c28"},{url:"slide/index.html",revision:"f9932dd8796b12c5c90e09209e5521c6"},{url:"standard/csharp/index.html",revision:"74ce3c6d438c6d32ef09f8d22302b9a1"},{url:"standard/css/index.html",revision:"1f8f26f3d07bfd5384cb8bd2155a063a"},{url:"standard/html/index.html",revision:"9fefad8477de79629f147c55facd64da"},{url:"standard/index.html",revision:"322f5aa6eb69a49d8c072d042fe2ff32"},{url:"standard/javascript/index.html",revision:"a2b3ede0f18a817e98fef1f48f9ff3cf"},{url:"standard/python/index.html",revision:"4440b3bd8fe7c320e8c34fb783c7dc95"},{url:"standard/vue/index.html",revision:"00958389fae9587233052903a16d4470"},{url:"star/index.html",revision:"15cd47ffa9b4c998a5c9177e992e9a95"},{url:"tag/index.html",revision:"0e90b02f918870972e1e6321d20cbd5b"},{url:"timeline/index.html",revision:"e540d64757344a219ba9cbc63851a2ce"}],{}),e.cleanupOutdatedCaches()}));
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
