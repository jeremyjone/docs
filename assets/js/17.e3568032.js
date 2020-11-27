(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{367:function(t,a,s){"use strict";s.r(a);var r=s(42),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"根组件-jgantt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#根组件-jgantt"}},[t._v("#")]),t._v(" 根组件 JGantt")]),t._v(" "),s("Description",{attrs:{author:"jeremyjone",date:"2020-10-09",copyright:"jeremyjone"}}),t._v(" "),s("p",[t._v("对于 "),s("code",[t._v("JGantt")]),t._v(" 组件，它具有非常丰富的属性。")]),t._v(" "),s("h2",{attrs:{id:"数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据"}},[t._v("#")]),t._v(" 数据")]),t._v(" "),s("h3",{attrs:{id:"data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data"}},[t._v("#")]),t._v(" data")]),t._v(" "),s("DataParameter",{attrs:{t:"Array",d:"[]"}}),t._v(" "),s("p",[t._v("数据源，接收数组类型，同时数组中的每一个对象都应当包含 "),s("code",[t._v("index")]),t._v(", "),s("code",[t._v("startDate")]),t._v(", "),s("code",[t._v("endDate")]),t._v(" 和 "),s("code",[t._v("children")]),t._v(" 这些键，确保正确显示数据内容。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("index")]),t._v(" 确保数据的唯一性，它应对于所有数据全局唯一的")]),t._v(" "),s("li",[s("code",[t._v("children")]),t._v(" 可以使数据层级嵌套，如果没有子集，只需要置空即可")]),t._v(" "),s("li",[s("code",[t._v("startDate")]),t._v(" 可以在甘特图中正确渲染数据的起始日期")]),t._v(" "),s("li",[s("code",[t._v("endDate")]),t._v(" 可以在甘特图中正确渲染数据的截止日期")])])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("数据的更新和限制")]),t._v(" "),s("p",[t._v("由于Vue的限制，"),s("code",[t._v("Array")]),t._v(" 类型和 "),s("code",[t._v("Object")]),t._v(" 类型不会自动监听到子层级，这导致当您修改子级内容时不会更新视图。")]),t._v(" "),s("ul",[s("li",[t._v("您可以使用 "),s("code",[t._v("vm.$set()")]),t._v(" 的方式。")]),t._v(" "),s("li",[s("strong",[t._v("推荐")]),t._v("：我们建议您可以直接修改子集内容时，在最后重新给 "),s("code",[t._v("data")]),t._v(" 赋值即可。")])]),t._v(" "),s("p",[t._v("即：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加数据")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("somedata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最后重新赋值，以确保数据更新")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("这样的方式适用于所有针对层级数据的"),s("strong",[t._v("增、删、改")]),t._v("，同时您并不需要担心所有数据都会重新渲染。在 JGantt 内部，我们会检查数据的变动，确保只更新有更改的内容。")]),t._v(" "),s("p",[t._v("当然，如果是修改顶层内容时，可以直接修改而不需要重新赋值，不用担心会出现上面的情况。")])]),t._v(" "),s("h3",{attrs:{id:"data-index"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-index"}},[t._v("#")]),t._v(" data-index* "),s("Badge",{attrs:{text:"required",type:"error"}})],1),t._v(" "),s("DataParameter",{attrs:{r:"",t:"String"}}),t._v(" "),s("p",[t._v("数据的全局唯一键，它应当是数据中的某一个键名，通常它会是 "),s("code",[t._v("index")]),t._v("。如果它不是全局唯一的，则会引起渲染错误。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("这也是我们建议在 "),s("code",[t._v("data")]),t._v(" 中确保有一个 "),s("code",[t._v("index")]),t._v(" 字段的具体作用。您也可以使用其他自定义字段，只需要匹配即可。")])]),t._v(" "),s("h3",{attrs:{id:"end-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#end-key"}},[t._v("#")]),t._v(" end-key")]),t._v(" "),s("DataParameter",{attrs:{t:"String",d:"endDate"}}),t._v(" "),s("p",[t._v("它对应数据中起始日期的键，默认值为 "),s("code",[t._v("startDate")]),t._v("。如果找不到，则不会渲染甘特图中的内容。")]),t._v(" "),s("h3",{attrs:{id:"expand-all"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#expand-all"}},[t._v("#")]),t._v(" expand-all")]),t._v(" "),s("DataParameter",{attrs:{t:"Boolean",d:"true"}}),t._v(" "),s("p",[t._v("是否展开所有数据，默认为展开。如果设置为 "),s("code",[t._v("false")]),t._v("，则只会渲染首层数据。")]),t._v(" "),s("p",[s("strong",[t._v("请注意")]),t._v("，当且仅当属性 "),s("a",{attrs:{href:"#show-expand"}},[s("code",[t._v("show-expand")])]),t._v(" 为真时，该属性才会生效，否则所有数据一定会被全部展开渲染。")]),t._v(" "),s("h3",{attrs:{id:"start-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-key"}},[t._v("#")]),t._v(" start-key")]),t._v(" "),s("DataParameter",{attrs:{t:"String",d:"startDate"}}),t._v(" "),s("p",[t._v("它对应数据中起始日期的键，默认值为 "),s("code",[t._v("startDate")]),t._v("。如果找不到，则不会渲染甘特图中的内容。")]),t._v(" "),s("h2",{attrs:{id:"样式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#样式"}},[t._v("#")]),t._v(" 样式")]),t._v(" "),s("h3",{attrs:{id:"body-style"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#body-style"}},[t._v("#")]),t._v(" body-style")]),t._v(" "),s("DataParameter",{attrs:{t:"Object",d:"{}"}}),t._v(" "),s("p",[t._v("用于配置甘特图内容区域的样式。它接收固定参数，用于改变其中的样式。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("请注意")]),t._v(" "),s("p",[s("code",[t._v("Object")]),t._v(" 中的键应当区分大小写，这与 html 的参数方式不太一样。")])]),t._v(" "),s("h4",{attrs:{id:"bgcolor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bgcolor"}},[t._v("#")]),t._v(" bgColor")]),t._v(" "),s("DataParameter",{attrs:{t:"String",d:"white"}}),t._v(" "),s("p",[t._v("设置整体内容区域的背景颜色，默认为白色。")]),t._v(" "),s("p",[t._v("它接收任意颜色参数，包括符合 html 规范的颜色英文，16 进制颜色描述（"),s("strong",[t._v("注意 "),s("code",[t._v("#")]),t._v(" 符号不可缺少")]),t._v("），或者 "),s("code",[t._v("rgb()")]),t._v(" 样式的内容，它只要是字符串格式即可。")]),t._v(" "),s("h4",{attrs:{id:"bordercolor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bordercolor"}},[t._v("#")]),t._v(" borderColor")]),t._v(" "),s("DataParameter",{attrs:{t:"String",d:"lightgrey"}}),t._v(" "),s("p",[t._v("设置整体内容区域内部的边框颜色，它只负责例如表格中间的边框、甘特区域的每日分割线等边框颜色。")]),t._v(" "),s("p",[t._v("它接收任意颜色参数，包括符合 html 规范的颜色英文，16 进制颜色描述（"),s("strong",[t._v("注意 "),s("code",[t._v("#")]),t._v(" 符号不可缺少")]),t._v("），或者 "),s("code",[t._v("rgb()")]),t._v(" 样式的内容，它只要是字符串格式即可。")]),t._v(" "),s("h4",{attrs:{id:"hovercolor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hovercolor"}},[t._v("#")]),t._v(" hoverColor "),s("UpdateIcon",{attrs:{v:"0.0.7"}})],1),t._v(" "),s("DataParameter",{attrs:{t:"String",d:"#ccc"}}),t._v(" "),s("p",[t._v("设置悬停行颜色。接收一个HEX颜色值，英文无效。")]),t._v(" "),s("h4",{attrs:{id:"selectcolor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#selectcolor"}},[t._v("#")]),t._v(" selectColor "),s("UpdateIcon",{attrs:{v:"0.0.7"}})],1),t._v(" "),s("DataParameter",{attrs:{t:"String",d:"#123456"}}),t._v(" "),s("p",[t._v("设置悬停行颜色。接收一个HEX颜色值，英文无效。")]),t._v(" "),s("h4",{attrs:{id:"textcolor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#textcolor"}},[t._v("#")]),t._v(" textColor")]),t._v(" "),s("DataParameter",{attrs:{t:"String",d:"black"}}),t._v(" "),s("p",[t._v("设置整体内容区域的文本颜色。")]),t._v(" "),s("p",[t._v("它接收任意颜色参数，包括符合 html 规范的颜色英文，16 进制颜色描述（"),s("strong",[t._v("注意 "),s("code",[t._v("#")]),t._v(" 符号不可缺少")]),t._v("），或者 "),s("code",[t._v("rgb()")]),t._v(" 样式的内容，它只要是字符串格式即可。")]),t._v(" "),s("h4",{attrs:{id:"todaycolor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#todaycolor"}},[t._v("#")]),t._v(" todayColor")]),t._v(" "),s("DataParameter",{attrs:{t:"String",d:"lightblue"}}),t._v(" "),s("p",[t._v("设置 "),s("code",[t._v("今日")]),t._v(" 时间线的背景颜色。")]),t._v(" "),s("p",[t._v("它接收任意颜色参数，包括符合 html 规范的颜色英文，16 进制颜色描述（"),s("strong",[t._v("注意 "),s("code",[t._v("#")]),t._v(" 符号不可缺少")]),t._v("），或者 "),s("code",[t._v("rgb()")]),t._v(" 样式的内容，它只要是字符串格式即可。")]),t._v(" "),s("h4",{attrs:{id:"weekendcolor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#weekendcolor"}},[t._v("#")]),t._v(" weekendColor")]),t._v(" "),s("DataParameter",{attrs:{t:"String",d:"lightgrey"}}),t._v(" "),s("p",[t._v("设置 "),s("code",[t._v("周末")]),t._v(" 时间线的背景颜色。")]),t._v(" "),s("p",[t._v("它接收任意颜色参数，包括符合 html 规范的颜色英文，16 进制颜色描述（"),s("strong",[t._v("注意 "),s("code",[t._v("#")]),t._v(" 符号不可缺少")]),t._v("），或者 "),s("code",[t._v("rgb()")]),t._v(" 样式的内容，它只要是字符串格式即可。")]),t._v(" "),s("h3",{attrs:{id:"border"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#border"}},[t._v("#")]),t._v(" border")]),t._v(" "),s("DataParameter",{attrs:{t:"Number",d:"1"}}),t._v(" "),s("p",[t._v("是否显示甘特表整体的边框，默认为 1，0 为不显示。")]),t._v(" "),s("h3",{attrs:{id:"dark"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dark"}},[t._v("#")]),t._v(" dark "),s("UpdateIcon",{attrs:{v:"0.0.15"}})],1),t._v(" "),s("DataParameter",{attrs:{t:"Boolean",d:"false"}}),t._v(" "),s("p",[t._v("黑暗模式，它会修改页面的背景颜色、文字颜色和边框颜色。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("请注意")]),t._v(" "),s("p",[t._v("它是默认属性，只会调整默认值。如果您设置了自定义的样式，该方案则不会生效。")])]),t._v(" "),s("h3",{attrs:{id:"header-height"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#header-height"}},[t._v("#")]),t._v(" header-height")]),t._v(" "),s("DataParameter",{attrs:{t:"Number | String",d:"100"}}),t._v(" "),s("p",[t._v("设置表头的高度，它的范围应该至少大于 "),s("code",[t._v("30")]),t._v("，否则会引起渲染异常。")]),t._v(" "),s("h3",{attrs:{id:"header-style"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#header-style"}},[t._v("#")]),t._v(" header-style")]),t._v(" "),s("DataParameter",{attrs:{t:"Object",d:"{}"}}),t._v(" "),s("p",[t._v("用于配置甘特表头的样式。它接收固定参数，用于改变其中的样式。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("请注意")]),t._v(" "),s("p",[s("code",[t._v("Object")]),t._v(" 中的键应当区分大小写，这与 html 的参数方式不太一样。")])]),t._v(" "),s("h4",{attrs:{id:"bgcolor-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bgcolor-2"}},[t._v("#")]),t._v(" bgColor")]),t._v(" "),s("DataParameter",{attrs:{t:"String",d:"grey"}}),t._v(" "),s("p",[t._v("设置表头的背景颜色，默认为灰色。")]),t._v(" "),s("p",[t._v("它接收任意颜色参数，包括符合 html 规范的颜色英文，16 进制颜色描述（"),s("strong",[t._v("注意 "),s("code",[t._v("#")]),t._v(" 符号不可缺少")]),t._v("），或者 "),s("code",[t._v("rgb()")]),t._v(" 样式的内容，它只要是字符串格式即可。")]),t._v(" "),s("h4",{attrs:{id:"bordercolor-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bordercolor-2"}},[t._v("#")]),t._v(" borderColor")]),t._v(" "),s("DataParameter",{attrs:{t:"String",d:"black"}}),t._v(" "),s("p",[t._v("设置表头的边框颜色，包括中间的分割线。")]),t._v(" "),s("p",[t._v("它接收任意颜色参数，包括符合 html 规范的颜色英文，16 进制颜色描述（"),s("strong",[t._v("注意 "),s("code",[t._v("#")]),t._v(" 符号不可缺少")]),t._v("），或者 "),s("code",[t._v("rgb()")]),t._v(" 样式的内容，它只要是字符串格式即可。")]),t._v(" "),s("h4",{attrs:{id:"textcolor-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#textcolor-2"}},[t._v("#")]),t._v(" textColor")]),t._v(" "),s("DataParameter",{attrs:{t:"String",d:"black"}}),t._v(" "),s("p",[t._v("设置表头的文本颜色。")]),t._v(" "),s("p",[t._v("它接收任意颜色参数，包括符合 html 规范的颜色英文，16 进制颜色描述（"),s("strong",[t._v("注意 "),s("code",[t._v("#")]),t._v(" 符号不可缺少")]),t._v("），或者 "),s("code",[t._v("rgb()")]),t._v(" 样式的内容，它只要是字符串格式即可。")]),t._v(" "),s("h3",{attrs:{id:"gantt-column-width"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gantt-column-width"}},[t._v("#")]),t._v(" gantt-column-width")]),t._v(" "),s("DataParameter",{attrs:{t:"Number | String",d:"15"}}),t._v(" "),s("p",[t._v("设置甘特图中每一列日期的列宽，默认为 "),s("code",[t._v("15")]),t._v("，最小值 "),s("code",[t._v("15")]),t._v("，最大值 "),s("code",[t._v("100")]),t._v("，应当确保给定的数字在这个区间范围，否则会引起渲染错误。")]),t._v(" "),s("h3",{attrs:{id:"level-color"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#level-color"}},[t._v("#")]),t._v(" level-color")]),t._v(" "),s("DataParameter",{attrs:{t:"Array",d:"[]"}}),t._v(" "),s("p",[t._v("设置每一层级数据的颜色，默认随背景颜色。")]),t._v(" "),s("p",[t._v("这是一个有意思的设置。因为数据可以是树形结构，所以为了更好的区分树形数据内容，您可以为不同层级的数据内容增加不同颜色。")]),t._v(" "),s("p",[t._v("在渲染时，对应层级的数据会在该数组中查找对应的背景颜色，如果存在，那么就会渲染，否则渲染普通背景颜色。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("例如，您的数据有 3 层，那么您可以传入一个长度为 3 的数组，内容是文本颜色，它接收任意颜色参数，包括符合 html 规范的所有颜色，包括 16 进制颜色等。")]),t._v(" "),s("p",[t._v("当然，您也可以只传入长度为 1 的数组，那么甘特表只会渲染顶层层级数据的背景颜色。")])]),t._v(" "),s("h3",{attrs:{id:"row-height"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#row-height"}},[t._v("#")]),t._v(" row-height")]),t._v(" "),s("DataParameter",{attrs:{t:"Number | String",d:"30"}}),t._v(" "),s("p",[t._v("设置内容区域的行高。默认值为 "),s("code",[t._v("30")]),t._v("， 最小值 "),s("code",[t._v("20")]),t._v("，最大值 70`。应当确保给定的数字再这个区间范围，否则会引起渲染错误。")]),t._v(" "),s("h3",{attrs:{id:"show-checkbox"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#show-checkbox"}},[t._v("#")]),t._v(" show-checkbox")]),t._v(" "),s("DataParameter",{attrs:{t:"Boolean",d:"false"}}),t._v(" "),s("p",[t._v("设置是否显示复选框，这个对于多选很有用。当复选框可用时，点击会抛出 "),s("a",{attrs:{href:"#row-checked"}},[s("code",[t._v("row-checked")])]),t._v(" 事件。")]),t._v(" "),s("h3",{attrs:{id:"show-expand"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#show-expand"}},[t._v("#")]),t._v(" show-expand")]),t._v(" "),s("DataParameter",{attrs:{t:"Boolean",d:"true"}}),t._v(" "),s("p",[t._v("设置是否显示展开数据按钮。默认为 "),s("code",[t._v("true")]),t._v("，如果给出 "),s("code",[t._v("false")]),t._v("，那么展开按钮不可用，同时所有数据会全部展开，同时 "),s("a",{attrs:{href:"#expand-all"}},[s("code",[t._v("expand-all")])]),t._v(" 属性会失效。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("建议")]),t._v(" "),s("p",[t._v("通常情况下，您不用设置这两个属性，因为它们已经处于使用的状态。除非您不希望展开功能，设置 "),s("code",[t._v("show-expand")]),t._v(" 为 "),s("code",[t._v("false")]),t._v(" 即可。")])]),t._v(" "),s("h3",{attrs:{id:"show-today"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#show-today"}},[t._v("#")]),t._v(" show-today")]),t._v(" "),s("DataParameter",{attrs:{t:"Boolean",d:"true"}}),t._v(" "),s("p",[t._v("设置是否显示甘特图中的 "),s("code",[t._v("今日")]),t._v(" 时间线。")]),t._v(" "),s("h3",{attrs:{id:"show-weekend"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#show-weekend"}},[t._v("#")]),t._v(" show-weekend")]),t._v(" "),s("DataParameter",{attrs:{t:"Boolean",d:"true"}}),t._v(" "),s("p",[t._v("设置是否显示甘特图中的 "),s("code",[t._v("周末")]),t._v(" 时间线。")]),t._v(" "),s("h2",{attrs:{id:"方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),s("h3",{attrs:{id:"no-today-error"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#no-today-error"}},[t._v("#")]),t._v(" no-today-error")]),t._v(" "),s("DataParameter",{attrs:{t:"function()"}}),t._v(" "),s("p",[t._v("点击 "),s("code",[t._v("跳转到今日")]),t._v(" 按钮时，"),s("code",[t._v("今日")]),t._v(" 不在当前甘特范围内所触发的异常，可以接收该异常并自定义后续事件。")]),t._v(" "),s("h3",{attrs:{id:"move-slider"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#move-slider"}},[t._v("#")]),t._v(" move-slider")]),t._v(" "),s("DataParameter",{attrs:{t:"function(data)"}}),t._v(" "),s("ul",[s("li",[t._v("data: 更新后的数据内容，Object")])]),t._v(" "),s("p",[t._v("移动甘特行滑块后的事件。")]),t._v(" "),s("h3",{attrs:{id:"row-checked"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#row-checked"}},[t._v("#")]),t._v(" row-checked")]),t._v(" "),s("DataParameter",{attrs:{t:"function(state, data)"}}),t._v(" "),s("ul",[s("li",[t._v("state: 选中状态，true | false")]),t._v(" "),s("li",[t._v("data: 选中的数据内容，Object")])]),t._v(" "),s("p",[t._v("选择复选框时触发的事件。")]),t._v(" "),s("h3",{attrs:{id:"row-click"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#row-click"}},[t._v("#")]),t._v(" row-click")]),t._v(" "),s("DataParameter",{attrs:{t:"function(data)"}}),t._v(" "),s("ul",[s("li",[t._v("data: 行数据内容，Object | null")])]),t._v(" "),s("p",[t._v("单击行元素时触发的事件。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("当您选择了一行内容，并且在外部更新了数据，使得该条数据被删除，则会触发一个选择 "),s("code",[t._v("null")]),t._v(" 的事件。")]),t._v(" "),s("p",[t._v("这样做的好处是您不必担心在外部再次调用该无效内容。")])]),t._v(" "),s("h3",{attrs:{id:"row-dbl-click"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#row-dbl-click"}},[t._v("#")]),t._v(" row-dbl-click")]),t._v(" "),s("DataParameter",{attrs:{t:"function(data)"}}),t._v(" "),s("ul",[s("li",[t._v("data: 行数据内容，Object")])]),t._v(" "),s("p",[t._v("双击行元素时触发的事件。")]),t._v(" "),s("h2",{attrs:{id:"插槽"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插槽"}},[t._v("#")]),t._v(" 插槽")]),t._v(" "),s("p",[t._v("根组件不支持插入默认内容，它仅仅支持如下的具名插槽或者我们提供的子组件。")]),t._v(" "),s("h3",{attrs:{id:"settings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#settings"}},[t._v("#")]),t._v(" settings "),s("UpdateIcon",{attrs:{v:"0.0.15"}})],1),t._v(" "),s("p",[s("em",[t._v("我不知道这个插槽是否真正需要，但还是把它添加了。")])]),t._v(" "),s("p",[t._v("这个插槽会允许您在设置抽屉中添加任意内容。")]),t._v(" "),s("p",[t._v("使用方式：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-slot:")]),t._v("settings")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- any element --\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h3",{attrs:{id:"列组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#列组件"}},[t._v("#")]),t._v(" 列组件")]),t._v(" "),s("p",[t._v("参见 "),s("RouterLink",{attrs:{to:"/document/gantt/column.html"}},[t._v("列组件")])],1),t._v(" "),s("h3",{attrs:{id:"滑块组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#滑块组件"}},[t._v("#")]),t._v(" 滑块组件")]),t._v(" "),s("p",[t._v("参见 "),s("RouterLink",{attrs:{to:"/document/gantt/slider.html"}},[t._v("滑块组件")])],1),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("接下来，您将深入学习使用这两个组件。")])],1)}),[],!1,null,null,null);a.default=e.exports}}]);