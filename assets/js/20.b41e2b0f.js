(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{380:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"列组件-jganttcolumn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#列组件-jganttcolumn"}},[t._v("#")]),t._v(" 列组件 JGanttColumn")]),t._v(" "),s("Description",{attrs:{author:"jeremyjone",date:"2020-10-12",copyright:"jeremyjone"}}),t._v(" "),s("p",[t._v("因为我们在内部已经将其加载，所以您并不需要显示的再次导入到您的组件中就可以使用。")]),t._v(" "),s("p",[t._v("列组件会显示在甘特表的左侧，如果没有提供，则不显示任何列。")]),t._v(" "),s("h2",{attrs:{id:"基础使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础使用"}},[t._v("#")]),t._v(" 基础使用")]),t._v(" "),s("p",[t._v("您只需要简单的将其插入到根组件内即可。")]),t._v(" "),s("p",[t._v("基于入门的示例，您可以直接这样使用：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("j-gantt")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data-index")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":data")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dataList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("j-gantt-column")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("label")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("j-gantt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("它将显示成如下内容：")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/assets/gantt/column-basic.png"),alt:"column-basic"}}),t._v(" "),s("h2",{attrs:{id:"属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),s("h3",{attrs:{id:"center"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#center"}},[t._v("#")]),t._v(" center "),s("UpdateIcon",{attrs:{v:"0.0.8"}})],1),t._v(" "),s("DataParameter",{attrs:{t:"Boolean",d:"false"}}),t._v(" "),s("p",[t._v("可以控制当前列的内容居中，默认居左。")]),t._v(" "),s("h3",{attrs:{id:"date-format"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#date-format"}},[t._v("#")]),t._v(" date-format")]),t._v(" "),s("DataParameter",{attrs:{t:"String",d:"yyyy-MM-dd"}}),t._v(" "),s("p",[t._v("自定义显示日期的格式。如果列内需要显示日期，可以通过该属性来格式化日期。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("请注意")]),t._v(" "),s("p",[t._v("值得注意的是，如果给出该字段，那么其数据内容一定会被当成日期来解析并且格式化，所以不要在非日期字段添加该属性。")])]),t._v(" "),s("p",[t._v("更多关于日期格式化的属性，参看 "),s("RouterLink",{attrs:{to:"/document/gantt/common.html#日期格式化属性"}},[t._v("日期格式化属性")])],1),t._v(" "),s("h3",{attrs:{id:"empty-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#empty-data"}},[t._v("#")]),t._v(" empty-data")]),t._v(" "),s("DataParameter",{attrs:{t:"String",d:"无数据 😢"}}),t._v(" "),s("p",[t._v("设置空数据时显示的内容。如果数据内容为空，则会显示空数据内容。")]),t._v(" "),s("h3",{attrs:{id:"label"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#label"}},[t._v("#")]),t._v(" label* "),s("Badge",{attrs:{text:"required",type:"error"}})],1),t._v(" "),s("DataParameter",{attrs:{r:"",t:"String"}}),t._v(" "),s("p",[s("code",[t._v("label")]),t._v(" 是一个必填属性，它应当对应您给出数据的某一个键名。")]),t._v(" "),s("p",[t._v("它将加载该字段数据的内容显示在列内容中，同时表头的名称默认也会显示为该 "),s("code",[t._v("label")]),t._v(" 名称。当然，您可以通过设置 "),s("a",{attrs:{href:"#name"}},[s("code",[t._v("name")])]),t._v(" 来自定义。")]),t._v(" "),s("h3",{attrs:{id:"merge"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#merge"}},[t._v("#")]),t._v(" merge")]),t._v(" "),s("DataParameter",{attrs:{t:"(data) => boolean | Boolean",d:"false"}}),t._v(" "),s("p",[t._v("设置当前列是否需要与前一列合并。您可以给出一个 Boolean 值或者一个返回 Boolean 值的函数。")]),t._v(" "),s("ul",[s("li",[t._v("函数允许您使用行内数据。")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("mergeFunc")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// your code")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 请确保返回一个 Boolean 值。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("这是一个很灵活的属性，如果设置为 "),s("code",[t._v("true")]),t._v("，则会与前一列进行合并，同时不显示当前列的内容。")]),t._v(" "),s("p",[s("strong",[t._v("请注意")]),t._v("，该字段对首列无效。")]),t._v(" "),s("h3",{attrs:{id:"name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[t._v("#")]),t._v(" name")]),t._v(" "),s("DataParameter",{attrs:{t:"String"}}),t._v(" "),s("p",[t._v("设置该列表头的显示文本，如果没有，则会显示 "),s("code",[t._v("label")]),t._v(" 的内容。它的优先级比 "),s("code",[t._v("label")]),t._v(" 高。")]),t._v(" "),s("h3",{attrs:{id:"selectable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#selectable"}},[t._v("#")]),t._v(" selectable")]),t._v(" "),s("DataParameter",{attrs:{t:"Boolean",d:"false"}}),t._v(" "),s("p",[t._v("设置当前列内容的文本是否可以选择，默认禁止选择。")]),t._v(" "),s("h3",{attrs:{id:"width"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#width"}},[t._v("#")]),t._v(" width")]),t._v(" "),s("DataParameter",{attrs:{t:"Number | String",d:"80"}}),t._v(" "),s("p",[t._v("设置该列的列宽。默认宽度 80，请保持宽度大于 30，否则会引起渲染异常。")]),t._v(" "),s("h2",{attrs:{id:"插槽"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插槽"}},[t._v("#")]),t._v(" 插槽")]),t._v(" "),s("p",[t._v("列组件内部允许您插入任何内容，同时它会抛出当前行的数据以供您使用。")]),t._v(" "),s("p",[t._v("一个简单的示例：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("j-gantt-column")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("label")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-slot")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ data }}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("j-gantt-column")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("接下来，您将继续学习滑块组件的内容。")])],1)}),[],!1,null,null,null);a.default=e.exports}}]);