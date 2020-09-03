(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{368:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"css-规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-规范"}},[s._v("#")]),s._v(" CSS 规范")]),s._v(" "),a("Description",{attrs:{author:"jeremyjone",version:"v1"}}),s._v(" "),a("p",[s._v("本文档适用于所有css文件的开发编写。")]),s._v(" "),a("p",[s._v("同时，推荐使用"),a("code",[s._v("scss")]),s._v("，"),a("code",[s._v("sass")]),s._v("，"),a("code",[s._v("stylus")]),s._v("等扩展的 css 语言。最好使用"),a("code",[s._v("stylus")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"_1-css-属性的命名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-css-属性的命名"}},[s._v("#")]),s._v(" 1 CSS 属性的命名")]),s._v(" "),a("p",[s._v("css 的 ID 应当尽量少用，可以在一个页面使用一个，这样可以有效减少 ID 的使用，同时降低了 className 重复命名的概率（使用作用域/嵌套方式）。")]),s._v(" "),a("p",[s._v("css 的 className 应当同样具有语义化，通过名字就知道它对应的标签元素和内容。\ncssclassName 应当使用 "),a("code",[s._v("小写 + “-”")]),s._v(" 连接符进行拼接。")]),s._v(" "),a("div",{staticClass:"language-scss line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("#header-menu ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #0ff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"_2-使用-css-的属性缩写"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用-css-的属性缩写"}},[s._v("#")]),s._v(" 2 使用 CSS 的属性缩写")]),s._v(" "),a("p",[s._v("如果在一个 css 的 class 中有多个同一范围的属性，则应当尽可能的使用它的缩写。")]),s._v(" "),a("div",{staticClass:"language-scss line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 错误的写法")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("#header-menu ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("margin-left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("margin-right")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("margin-top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("margin-bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 5px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 正确的写法")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("#header-menu ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 20px 10px 5px 10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"_3-css-语言规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-css-语言规范"}},[s._v("#")]),s._v(" 3 CSS 语言规范")]),s._v(" "),a("ul",[a("li",[s._v("每一个 CSS 属性都应当跟一个"),a("code",[s._v(";")]),s._v("（stylus 除外）")]),s._v(" "),a("li",[s._v("CSS 的选择器应当间可能的简单，每个选择器和声明都应当是独立的一行")]),s._v(" "),a("li",[s._v("对于"),a("code",[s._v("url()")]),s._v("方法，可以省略协议，直接使用 uri 内容而不需要加引号")])])],1)}),[],!1,null,null,null);t.default=e.exports}}]);