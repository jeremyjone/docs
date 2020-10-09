(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{374:function(t,a,r){"use strict";r.r(a);var e=r(42),v=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"根组件-jgantt"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#根组件-jgantt"}},[t._v("#")]),t._v(" 根组件 JGantt")]),t._v(" "),r("Description",{attrs:{author:"jeremyjone",date:"2020-10-09",copyright:"jeremyjone"}}),t._v(" "),r("p",[t._v("对于 "),r("code",[t._v("JGantt")]),t._v(" 组件，它具有非常丰富的属性。")]),t._v(" "),r("h2",{attrs:{id:"数据"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据"}},[t._v("#")]),t._v(" 数据")]),t._v(" "),r("h3",{attrs:{id:"data"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#data"}},[t._v("#")]),t._v(" data")]),t._v(" "),r("DataParameter",{attrs:{t:"Array",d:"[]"}}),t._v(" "),r("p",[t._v("数据源，接收数组类型，同时数组中的每一个对象都应当包含 "),r("code",[t._v("index")]),t._v(", "),r("code",[t._v("startDate")]),t._v(", "),r("code",[t._v("endDate")]),t._v(" 和 "),r("code",[t._v("children")]),t._v(" 这些键，确保正确显示数据内容。")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("index")]),t._v(" 确保数据的唯一性，它应对于所有数据全局唯一的")]),t._v(" "),r("li",[r("code",[t._v("children")]),t._v(" 可以使数据层级嵌套，如果没有子集，只需要置空即可")]),t._v(" "),r("li",[r("code",[t._v("startDate")]),t._v(" 可以在甘特图中正确渲染数据的起始日期")]),t._v(" "),r("li",[r("code",[t._v("endDate")]),t._v(" 可以在甘特图中正确渲染数据的截止日期")])])]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("数据的更新和限制")]),t._v(" "),r("p",[t._v("由于Vue的限制，"),r("code",[t._v("Array")]),t._v(" 类型和 "),r("code",[t._v("Object")]),t._v(" 类型不会自动监听到子层级，这导致当您修改子级内容时不会更新视图。")]),t._v(" "),r("ul",[r("li",[t._v("您可以使用 "),r("code",[t._v("vm.$set()")]),t._v(" 的方式。")]),t._v(" "),r("li",[r("strong",[t._v("推荐")]),t._v("：我们建议您可以直接修改子集内容时，在最后重新给 "),r("code",[t._v("data")]),t._v(" 赋值即可。")])]),t._v(" "),r("p",[t._v("即：")]),t._v(" "),r("div",{staticClass:"language-js line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加数据")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("somedata"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最后重新赋值，以确保数据更新")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br")])]),r("p",[t._v("这样的方式适用于所有针对层级数据的"),r("strong",[t._v("增、删、改")]),t._v("，同时您并不需要担心所有数据都会重新渲染。在 JGantt 内部，我们会检查数据的变动，确保只更新有更改的内容。")]),t._v(" "),r("p",[t._v("当然，如果是修改顶层内容时，可以直接修改而不需要重新赋值，不用担心会出现上面的情况。")])]),t._v(" "),r("h3",{attrs:{id:"data-index"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#data-index"}},[t._v("#")]),t._v(" data-index* "),r("Badge",{attrs:{text:"required",type:"error"}})],1),t._v(" "),r("DataParameter",{attrs:{r:"",t:"String"}}),t._v(" "),r("p",[t._v("数据的全局唯一键，它应当是数据中的某一个键名，通常它会是 "),r("code",[t._v("index")]),t._v("。如果它不是全局唯一的，则会引起渲染错误。")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("这也是我们建议在 "),r("code",[t._v("data")]),t._v(" 中确保有一个 "),r("code",[t._v("index")]),t._v(" 字段的具体作用。您也可以使用其他自定义字段，只需要匹配即可。")])]),t._v(" "),r("h3",{attrs:{id:"end-key"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#end-key"}},[t._v("#")]),t._v(" end-key")]),t._v(" "),r("DataParameter",{attrs:{t:"String",d:"endDate"}}),t._v(" "),r("p",[t._v("它对应数据中起始日期的键，默认值为 "),r("code",[t._v("startDate")]),t._v("。如果找不到，则不会渲染甘特图中的内容。")]),t._v(" "),r("h3",{attrs:{id:"expand-all"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#expand-all"}},[t._v("#")]),t._v(" expand-all")]),t._v(" "),r("DataParameter",{attrs:{t:"Boolean",d:"true"}}),t._v(" "),r("p",[t._v("是否展开所有数据，默认为展开。如果设置为 "),r("code",[t._v("false")]),t._v("，则只会渲染首层数据。")]),t._v(" "),r("p",[r("strong",[t._v("请注意")]),t._v("，当且仅当属性 "),r("a",{attrs:{href:"#show-expand"}},[r("code",[t._v("show-expand")])]),t._v(" 为真时，该属性才会生效，否则所有数据一定会被全部展开渲染。")]),t._v(" "),r("h3",{attrs:{id:"start-key"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#start-key"}},[t._v("#")]),t._v(" start-key")]),t._v(" "),r("DataParameter",{attrs:{t:"String",d:"startDate"}}),t._v(" "),r("p",[t._v("它对应数据中起始日期的键，默认值为 "),r("code",[t._v("startDate")]),t._v("。如果找不到，则不会渲染甘特图中的内容。")]),t._v(" "),r("h2",{attrs:{id:"样式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#样式"}},[t._v("#")]),t._v(" 样式")]),t._v(" "),r("h3",{attrs:{id:"body-style"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#body-style"}},[t._v("#")]),t._v(" body-style")]),t._v(" "),r("DataParameter",{attrs:{t:"Object",d:"{}"}}),t._v(" "),r("p",[t._v("用于配置甘特图内容区域的样式。它接收固定参数，用于改变其中的样式。")]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("请注意")]),t._v(" "),r("p",[r("code",[t._v("Object")]),t._v(" 中的键应当区分大小写，这与 html 的参数方式不太一样。")])]),t._v(" "),r("h4",{attrs:{id:"bgcolor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bgcolor"}},[t._v("#")]),t._v(" bgColor")]),t._v(" "),r("DataParameter",{attrs:{t:"String",d:"white"}}),t._v(" "),r("p",[t._v("设置整体内容区域的背景颜色，默认为白色。")]),t._v(" "),r("p",[t._v("它接收任意颜色参数，包括符合 html 规范的颜色英文，16 进制颜色描述（"),r("strong",[t._v("注意 "),r("code",[t._v("#")]),t._v(" 符号不可缺少")]),t._v("），或者 "),r("code",[t._v("rgb()")]),t._v(" 样式的内容，它只要是字符串格式即可。")]),t._v(" "),r("h4",{attrs:{id:"bordercolor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bordercolor"}},[t._v("#")]),t._v(" borderColor")]),t._v(" "),r("DataParameter",{attrs:{t:"String",d:"lightgrey"}}),t._v(" "),r("p",[t._v("设置整体内容区域内部的边框颜色，它只负责例如表格中间的边框、甘特区域的每日分割线等边框颜色。")]),t._v(" "),r("p",[t._v("它接收任意颜色参数，包括符合 html 规范的颜色英文，16 进制颜色描述（"),r("strong",[t._v("注意 "),r("code",[t._v("#")]),t._v(" 符号不可缺少")]),t._v("），或者 "),r("code",[t._v("rgb()")]),t._v(" 样式的内容，它只要是字符串格式即可。")]),t._v(" "),r("h4",{attrs:{id:"hovercolor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hovercolor"}},[t._v("#")]),t._v(" hoverColor "),r("UpdateIcon",{attrs:{v:"0.0.7"}})],1),t._v(" "),r("DataParameter",{attrs:{t:"String",d:"#ccc"}}),t._v(" "),r("p",[t._v("设置悬停行颜色。接收一个HEX颜色值，英文无效。")]),t._v(" "),r("h4",{attrs:{id:"selectcolor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#selectcolor"}},[t._v("#")]),t._v(" selectColor "),r("UpdateIcon",{attrs:{v:"0.0.7"}})],1),t._v(" "),r("DataParameter",{attrs:{t:"String",d:"#123456"}}),t._v(" "),r("p",[t._v("设置悬停行颜色。接收一个HEX颜色值，英文无效。")]),t._v(" "),r("h4",{attrs:{id:"textcolor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#textcolor"}},[t._v("#")]),t._v(" textColor")]),t._v(" "),r("DataParameter",{attrs:{t:"String",d:"black"}}),t._v(" "),r("p",[t._v("设置整体内容区域的文本颜色。")]),t._v(" "),r("p",[t._v("它接收任意颜色参数，包括符合 html 规范的颜色英文，16 进制颜色描述（"),r("strong",[t._v("注意 "),r("code",[t._v("#")]),t._v(" 符号不可缺少")]),t._v("），或者 "),r("code",[t._v("rgb()")]),t._v(" 样式的内容，它只要是字符串格式即可。")]),t._v(" "),r("h4",{attrs:{id:"todaycolor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#todaycolor"}},[t._v("#")]),t._v(" todayColor")]),t._v(" "),r("DataParameter",{attrs:{t:"String",d:"lightblue"}}),t._v(" "),r("p",[t._v("设置 "),r("code",[t._v("今日")]),t._v(" 时间线的背景颜色。")]),t._v(" "),r("p",[t._v("它接收任意颜色参数，包括符合 html 规范的颜色英文，16 进制颜色描述（"),r("strong",[t._v("注意 "),r("code",[t._v("#")]),t._v(" 符号不可缺少")]),t._v("），或者 "),r("code",[t._v("rgb()")]),t._v(" 样式的内容，它只要是字符串格式即可。")]),t._v(" "),r("h4",{attrs:{id:"weekendcolor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#weekendcolor"}},[t._v("#")]),t._v(" weekendColor")]),t._v(" "),r("DataParameter",{attrs:{t:"String",d:"lightgrey"}}),t._v(" "),r("p",[t._v("设置 "),r("code",[t._v("周末")]),t._v(" 时间线的背景颜色。")]),t._v(" "),r("p",[t._v("它接收任意颜色参数，包括符合 html 规范的颜色英文，16 进制颜色描述（"),r("strong",[t._v("注意 "),r("code",[t._v("#")]),t._v(" 符号不可缺少")]),t._v("），或者 "),r("code",[t._v("rgb()")]),t._v(" 样式的内容，它只要是字符串格式即可。")]),t._v(" "),r("h3",{attrs:{id:"border"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#border"}},[t._v("#")]),t._v(" border")]),t._v(" "),r("DataParameter",{attrs:{t:"Number",d:"1"}}),t._v(" "),r("p",[t._v("是否显示甘特表整体的边框，默认为 1，0 为不显示。")]),t._v(" "),r("h3",{attrs:{id:"header-height"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#header-height"}},[t._v("#")]),t._v(" header-height")]),t._v(" "),r("DataParameter",{attrs:{t:"Number | String",d:"100"}}),t._v(" "),r("p",[t._v("设置表头的高度，它的范围应该至少大于 "),r("code",[t._v("30")]),t._v("，否则会引起渲染异常。")]),t._v(" "),r("h3",{attrs:{id:"header-style"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#header-style"}},[t._v("#")]),t._v(" header-style")]),t._v(" "),r("DataParameter",{attrs:{t:"Object",d:"{}"}}),t._v(" "),r("p",[t._v("用于配置甘特表头的样式。它接收固定参数，用于改变其中的样式。")]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("请注意")]),t._v(" "),r("p",[r("code",[t._v("Object")]),t._v(" 中的键应当区分大小写，这与 html 的参数方式不太一样。")])]),t._v(" "),r("h4",{attrs:{id:"bgcolor-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bgcolor-2"}},[t._v("#")]),t._v(" bgColor")]),t._v(" "),r("DataParameter",{attrs:{t:"String",d:"grey"}}),t._v(" "),r("p",[t._v("设置表头的背景颜色，默认为灰色。")]),t._v(" "),r("p",[t._v("它接收任意颜色参数，包括符合 html 规范的颜色英文，16 进制颜色描述（"),r("strong",[t._v("注意 "),r("code",[t._v("#")]),t._v(" 符号不可缺少")]),t._v("），或者 "),r("code",[t._v("rgb()")]),t._v(" 样式的内容，它只要是字符串格式即可。")]),t._v(" "),r("h4",{attrs:{id:"bordercolor-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bordercolor-2"}},[t._v("#")]),t._v(" borderColor")]),t._v(" "),r("DataParameter",{attrs:{t:"String",d:"black"}}),t._v(" "),r("p",[t._v("设置表头的边框颜色，包括中间的分割线。")]),t._v(" "),r("p",[t._v("它接收任意颜色参数，包括符合 html 规范的颜色英文，16 进制颜色描述（"),r("strong",[t._v("注意 "),r("code",[t._v("#")]),t._v(" 符号不可缺少")]),t._v("），或者 "),r("code",[t._v("rgb()")]),t._v(" 样式的内容，它只要是字符串格式即可。")]),t._v(" "),r("h4",{attrs:{id:"textcolor-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#textcolor-2"}},[t._v("#")]),t._v(" textColor")]),t._v(" "),r("DataParameter",{attrs:{t:"String",d:"black"}}),t._v(" "),r("p",[t._v("设置表头的文本颜色。")]),t._v(" "),r("p",[t._v("它接收任意颜色参数，包括符合 html 规范的颜色英文，16 进制颜色描述（"),r("strong",[t._v("注意 "),r("code",[t._v("#")]),t._v(" 符号不可缺少")]),t._v("），或者 "),r("code",[t._v("rgb()")]),t._v(" 样式的内容，它只要是字符串格式即可。")]),t._v(" "),r("h3",{attrs:{id:"gantt-column-width"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gantt-column-width"}},[t._v("#")]),t._v(" gantt-column-width")]),t._v(" "),r("DataParameter",{attrs:{t:"Number | String",d:"15"}}),t._v(" "),r("p",[t._v("设置甘特图中每一列日期的列宽，默认为 "),r("code",[t._v("15")]),t._v("，最小值 "),r("code",[t._v("15")]),t._v("，最大值 "),r("code",[t._v("100")]),t._v("，应当确保给定的数字在这个区间范围，否则会引起渲染错误。")]),t._v(" "),r("h3",{attrs:{id:"level-color"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#level-color"}},[t._v("#")]),t._v(" level-color")]),t._v(" "),r("DataParameter",{attrs:{t:"Array",d:"[]"}}),t._v(" "),r("p",[t._v("设置每一层级数据的颜色，默认随背景颜色。")]),t._v(" "),r("p",[t._v("这是一个有意思的设置。因为数据可以是树形结构，所以为了更好的区分树形数据内容，您可以为不同层级的数据内容增加不同颜色。")]),t._v(" "),r("p",[t._v("在渲染时，对应层级的数据会在该数组中查找对应的背景颜色，如果存在，那么就会渲染，否则渲染普通背景颜色。")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("例如，您的数据有 3 层，那么您可以传入一个长度为 3 的数组，内容是文本颜色，它接收任意颜色参数，包括符合 html 规范的所有颜色，包括 16 进制颜色等。")]),t._v(" "),r("p",[t._v("当然，您也可以只传入长度为 1 的数组，那么甘特表只会渲染顶层层级数据的背景颜色。")])]),t._v(" "),r("h3",{attrs:{id:"row-height"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#row-height"}},[t._v("#")]),t._v(" row-height")]),t._v(" "),r("DataParameter",{attrs:{t:"Number | String",d:"30"}}),t._v(" "),r("p",[t._v("设置内容区域的行高。默认值为 "),r("code",[t._v("30")]),t._v("， 最小值 "),r("code",[t._v("20")]),t._v("，最大值 70`。应当确保给定的数字再这个区间范围，否则会引起渲染错误。")]),t._v(" "),r("h3",{attrs:{id:"show-checkbox"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#show-checkbox"}},[t._v("#")]),t._v(" show-checkbox")]),t._v(" "),r("DataParameter",{attrs:{t:"Boolean",d:"false"}}),t._v(" "),r("p",[t._v("设置是否显示复选框，这个对于多选很有用。当复选框可用时，点击会抛出 "),r("a",{attrs:{href:"#row-checked"}},[r("code",[t._v("row-checked")])]),t._v(" 事件。")]),t._v(" "),r("h3",{attrs:{id:"show-expand"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#show-expand"}},[t._v("#")]),t._v(" show-expand")]),t._v(" "),r("DataParameter",{attrs:{t:"Boolean",d:"true"}}),t._v(" "),r("p",[t._v("设置是否显示展开数据按钮。默认为 "),r("code",[t._v("true")]),t._v("，如果给出 "),r("code",[t._v("false")]),t._v("，那么展开按钮不可用，同时所有数据会全部展开，同时 "),r("a",{attrs:{href:"#expand-all"}},[r("code",[t._v("expand-all")])]),t._v(" 属性会失效。")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("建议")]),t._v(" "),r("p",[t._v("通常情况下，您不用设置这两个属性，因为它们已经处于使用的状态。除非您不希望展开功能，设置 "),r("code",[t._v("show-expand")]),t._v(" 为 "),r("code",[t._v("false")]),t._v(" 即可。")])]),t._v(" "),r("h3",{attrs:{id:"show-today"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#show-today"}},[t._v("#")]),t._v(" show-today")]),t._v(" "),r("DataParameter",{attrs:{t:"Boolean",d:"true"}}),t._v(" "),r("p",[t._v("设置是否显示甘特图中的 "),r("code",[t._v("今日")]),t._v(" 时间线。")]),t._v(" "),r("h3",{attrs:{id:"show-weekend"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#show-weekend"}},[t._v("#")]),t._v(" show-weekend")]),t._v(" "),r("DataParameter",{attrs:{t:"Boolean",d:"true"}}),t._v(" "),r("p",[t._v("设置是否显示甘特图中的 "),r("code",[t._v("周末")]),t._v(" 时间线。")]),t._v(" "),r("h2",{attrs:{id:"方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),r("h3",{attrs:{id:"no-today-error"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#no-today-error"}},[t._v("#")]),t._v(" no-today-error")]),t._v(" "),r("DataParameter",{attrs:{t:"function()"}}),t._v(" "),r("p",[t._v("点击 "),r("code",[t._v("跳转到今日")]),t._v(" 按钮时，"),r("code",[t._v("今日")]),t._v(" 不在当前甘特范围内所触发的异常，可以接收该异常并自定义后续事件。")]),t._v(" "),r("h3",{attrs:{id:"move-slider"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#move-slider"}},[t._v("#")]),t._v(" move-slider")]),t._v(" "),r("DataParameter",{attrs:{t:"function(data)"}}),t._v(" "),r("ul",[r("li",[t._v("data: 更新后的数据内容")])]),t._v(" "),r("p",[t._v("移动甘特行滑块后的事件。")]),t._v(" "),r("h3",{attrs:{id:"row-checked"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#row-checked"}},[t._v("#")]),t._v(" row-checked")]),t._v(" "),r("DataParameter",{attrs:{t:"function(state, data)"}}),t._v(" "),r("ul",[r("li",[t._v("state: 选中状态，true | false")]),t._v(" "),r("li",[t._v("data: 选中的数据内容")])]),t._v(" "),r("p",[t._v("选择复选框时触发的事件。")]),t._v(" "),r("h3",{attrs:{id:"row-click"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#row-click"}},[t._v("#")]),t._v(" row-click")]),t._v(" "),r("DataParameter",{attrs:{t:"function(data)"}}),t._v(" "),r("ul",[r("li",[t._v("data: 行数据内容")])]),t._v(" "),r("p",[t._v("单击行元素时触发的事件。")]),t._v(" "),r("h3",{attrs:{id:"row-dbl-click"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#row-dbl-click"}},[t._v("#")]),t._v(" row-dbl-click")]),t._v(" "),r("DataParameter",{attrs:{t:"function(data)"}}),t._v(" "),r("ul",[r("li",[t._v("data: 行数据内容")])]),t._v(" "),r("p",[t._v("双击行元素时触发的事件。")]),t._v(" "),r("h2",{attrs:{id:"插槽"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#插槽"}},[t._v("#")]),t._v(" 插槽")]),t._v(" "),r("p",[t._v("根组件不支持插入自定义内容，因为内部会将所有插入的内容全部过滤掉，只保留内置的两个插槽，"),r("code",[t._v("列组件")]),t._v(" 和 "),r("code",[t._v("滑块组件")]),t._v("。")]),t._v(" "),r("p",[t._v("接下来，您将深入学习使用这两个组件。")])],1)}),[],!1,null,null,null);a.default=v.exports}}]);