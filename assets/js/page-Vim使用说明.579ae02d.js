(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{522:function(v,_,e){"use strict";e.r(_);var a=e(1),s=Object(a.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"vim-使用说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vim-使用说明"}},[v._v("#")]),v._v(" Vim 使用说明")]),v._v(" "),e("h2",{attrs:{id:"打开文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#打开文件"}},[v._v("#")]),v._v(" 打开文件")]),v._v(" "),e("p",[e("code",[v._v("vim filename")]),v._v("     打开文件")]),v._v(" "),e("p",[e("code",[v._v("vim -R filename")]),v._v("     只读打开文件")]),v._v(" "),e("p",[e("code",[v._v("vim -M filename")]),v._v("     强制避免对文件进行修改打开文件")]),v._v(" "),e("p",[e("code",[v._v("vim filename1 filename2 filename3")]),v._v("     同时打开多个文件，但是只显示第一个文件内容")]),v._v(" "),e("p",[e("code",[v._v(":next | :n")]),v._v("     编辑下一个文件")]),v._v(" "),e("p",[e("code",[v._v(":wnext | :wn")]),v._v("     保存当前文件内容并且继续编辑下一个文件")]),v._v(" "),e("p",[e("code",[v._v("Ctrl+^")]),v._v("     在两个文件之间切换")]),v._v(" "),e("p",[e("code",[v._v("vim -o filename1 filename2")]),v._v("     为每一个文件打开一个窗口")]),v._v(" "),e("p",[e("code",[v._v(":args filename4 filename5 filename6")]),v._v("     在不关闭vim的同时，重新定义文件列表")]),v._v(" "),e("h2",{attrs:{id:"保存和退出"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#保存和退出"}},[v._v("#")]),v._v(" 保存和退出")]),v._v(" "),e("p",[e("code",[v._v(":w")]),v._v("     保存")]),v._v(" "),e("p",[e("code",[v._v(":q | :quit")]),v._v("     退出")]),v._v(" "),e("p",[e("code",[v._v("ZZ | :wq | :x")]),v._v("     保存退出")]),v._v(" "),e("p",[e("code",[v._v("ZQ | :q!")]),v._v("     不保存直接退出")]),v._v(" "),e("p",[e("code",[v._v(":edit filename | :e filename")]),v._v("     编辑另一个文件")]),v._v(" "),e("p",[e("code",[v._v(":e!")]),v._v("     放弃当前文件所有修改并重新载入原始内容")]),v._v(" "),e("p",[e("code",[v._v(":qall")]),v._v("     放弃所有窗口的修改并退出")]),v._v(" "),e("p",[e("code",[v._v(":wall")]),v._v("     保存所有窗口的修改")]),v._v(" "),e("p",[e("code",[v._v(":wqall")]),v._v("     保存所有修改并退出")]),v._v(" "),e("p",[e("code",[v._v(":w filename | :sav filename | :saveas filename")]),v._v("     另存为")]),v._v(" "),e("p",[e("code",[v._v(":f filename | :file filename")]),v._v("     将修改的版本另存为新文件，同时不保存源文件的修改")]),v._v(" "),e("p",[e("code",[v._v(":set autowrite")]),v._v("     设置自动存盘")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v("该命令在每个:next、:rewind、:last、:first、:previous、:stop、:suspend、:tag、:!、:make、Ctrl+]、Ctrl+^命令时执行。\n")])])]),e("h2",{attrs:{id:"visual模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#visual模式"}},[v._v("#")]),v._v(" Visual模式")]),v._v(" "),e("p",[e("code",[v._v("v")]),v._v("     进入Visual模式，从光标当前位置开始，移动所经过的内容都会被选中，直到下一次v结束")]),v._v(" "),e("p",[e("code",[v._v("V")]),v._v("     进入Visual模式，从光标当前行首开始，移动所经过的行都会被选中，直到下一次V结束")]),v._v(" "),e("p",[e("code",[v._v("Ctrl+v")]),v._v("     从光标当前位置开始，选中光标起点和终点所构成的矩形区域，再按Ctrl+v结束")]),v._v(" "),e("p",[e("code",[v._v("ggVG")]),v._v("     快速全选，gg：转到行首，V：选择整行，G：转到尾行")]),v._v(" "),e("h2",{attrs:{id:"显示设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#显示设置"}},[v._v("#")]),v._v(" 显示设置")]),v._v(" "),e("p",[e("code",[v._v(":args")]),v._v("     显示当前文件")]),v._v(" "),e("p",[e("code",[v._v(":set number | :set nu!")]),v._v("     显示行号")]),v._v(" "),e("p",[e("code",[v._v(":set nonumber | :set nonu!")]),v._v("     不显示行号")]),v._v(" "),e("p",[e("code",[v._v(":set ruler")]),v._v("     在Vim窗口右下角显示当前光标位置")]),v._v(" "),e("p",[e("code",[v._v(":set autoindent")]),v._v("     自动缩进")]),v._v(" "),e("p",[e("code",[v._v(":set hlsearch")]),v._v("     查询结果高亮")]),v._v(" "),e("p",[e("code",[v._v(":set nohlsearch")]),v._v("     取消查询结果高亮")]),v._v(" "),e("p",[e("code",[v._v(":split | :vsplit")]),v._v("     分割窗口")]),v._v(" "),e("p",[e("code",[v._v("Ctrl+w")]),v._v("     切换当前活动窗口")]),v._v(" "),e("p",[e("code",[v._v("Ctrl+w h")]),v._v("     切换到左边窗口")]),v._v(" "),e("p",[e("code",[v._v("Ctrl+w j")]),v._v("     切换到下边窗口")]),v._v(" "),e("p",[e("code",[v._v("Ctrl+w k")]),v._v("     切换到上边窗口")]),v._v(" "),e("p",[e("code",[v._v("Ctrl+w i")]),v._v("     切换到右边窗口")]),v._v(" "),e("p",[e("code",[v._v("Ctrl+w t")]),v._v("     切换到顶部窗口")]),v._v(" "),e("p",[e("code",[v._v("Ctrl+w b")]),v._v("     切换到底部窗口")]),v._v(" "),e("p",[e("code",[v._v(":close")]),v._v("     关闭活动窗口，阻止关闭最后一个活动窗口")]),v._v(" "),e("p",[e("code",[v._v(":only")]),v._v("    关闭除当前活动窗口之外的所有窗口，修改过的窗口不会关闭")]),v._v(" "),e("p",[e("code",[v._v(":set warp")]),v._v("     自动换行")]),v._v(" "),e("p",[e("code",[v._v(":set ignorecase")]),v._v("     忽略大小写")]),v._v(" "),e("p",[e("code",[v._v("==")]),v._v("     对当前行自动格式化")]),v._v(" "),e("p",[e("code",[v._v("数字==")]),v._v('     对当前行起的下面"数字"行进行格式化')]),v._v(" "),e("p",[e("code",[v._v("gg=G")]),v._v("     对整个文档进行格式化")]),v._v(" "),e("h2",{attrs:{id:"编辑"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编辑"}},[v._v("#")]),v._v(" 编辑")]),v._v(" "),e("h3",{attrs:{id:"增加"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#增加"}},[v._v("#")]),v._v(" 增加")]),v._v(" "),e("p",[e("code",[v._v("i")]),v._v("     在光标之前插入")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v('支持数字：3i!，在光标之前插入三个"!"\n')])])]),e("p",[e("code",[v._v("I")]),v._v("     在当前行首插入")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v('支持数字：3I@，在行首插入三个"@"\n')])])]),e("p",[e("code",[v._v("a")]),v._v("     在光标之后插入")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v('支持数字：3a!，在光标之后插入三个"!"\n')])])]),e("p",[e("code",[v._v("A")]),v._v("     在当前行尾插入")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v('支持数字：3A@，在行尾插入三个"@"\n')])])]),e("p",[e("code",[v._v("o")]),v._v("     在当前光标行之下插入空行")]),v._v(" "),e("p",[e("code",[v._v("O")]),v._v("     在当前光标行之上插入空行")]),v._v(" "),e("h3",{attrs:{id:"删除"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除"}},[v._v("#")]),v._v(" 删除")]),v._v(" "),e("p",[e("code",[v._v("d+位移命令")]),v._v("     删除从光标位置到位移处的内容")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v("支持数字：    d+2+方向键，剪切左右方向的两个字符，剪切上下方向2行+当前行（共三行）的内容\n\n- 3dw  |  d3w     删除当前光标后面的3个单词\n- 3d2w     删除2光标后面两个单词，执行3次，共删除6个单词\n\n- 左：    剪切前一个字符\n- 右：    剪切后一个字符\n- 上：    剪切当前行和上一行\n- 下：    剪切当前行和下一行\n- Shift+左：    剪切至当前单词首字符\n- Shift+右：    剪切至下一个单词首字符\n- dw     删除从当前位置到下一个单词词首\n- db     删除从当前位置到前一个单词词首\n- diw     删除光标所在的单词，不包括空白字符\n- daw     删除当前光标所在单词，包括之后的空白字符\n- dG     删除当前行至文件末尾的内容\n- dgg     删除当前行至文件行首的内容\n")])])]),e("p",[e("code",[v._v("dd")]),v._v("     删除当前光标整行，并将之后内容上移一行")]),v._v(" "),e("p",[e("code",[v._v("D | d$")]),v._v("     删除到行尾")]),v._v(" "),e("p",[e("code",[v._v("c+位移命令")]),v._v(" 删除从光标处到位移处的内容，并进入编辑模式。"),e("em",[v._v('具体参照 "d+位移命令"')])]),v._v(" "),e("p",[e("code",[v._v("C | c$")]),v._v(" 删除光标处至行尾，并进入编辑模式")]),v._v(" "),e("p",[e("code",[v._v("x | dl")]),v._v("     删除当前光标右边的一个字符")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v("支持数字：3x，删除光标右边三个字符\n")])])]),e("p",[e("code",[v._v("X | dh")]),v._v("     删除当前光标左边的一个字符")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v("支持数字：3X，删除光标左边三个字符\n")])])]),e("p",[e("code",[v._v("s | cl")]),v._v("      删除当前光标之后的一个字符并进入编辑模式")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v("支持数字：3s，删除光标右边三个字符\n")])])]),e("p",[e("code",[v._v("S | cc")]),v._v("       删除当前整行，保留该空行并且保留缩进，进入编辑模式。")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v("支持数字：3S，删除当前行开始往下3行内容\n")])])]),e("p",[e("code",[v._v("J")]),v._v("     删除当前行的换行符，相当于将下一行内容上移至当前行末尾")]),v._v(" "),e("h2",{attrs:{id:"复制和粘贴"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#复制和粘贴"}},[v._v("#")]),v._v(" 复制和粘贴")]),v._v(" "),e("p",[e("code",[v._v("d+位移命令")]),v._v("     剪切。"),e("strong",[v._v("（不贴则用作删除）")])]),v._v(" "),e("p",[e("code",[v._v("y")]),v._v("     复制")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v("具体操作同剪切(d)\n")])])]),e("p",[e("code",[v._v("+y")]),v._v("     复制到系统剪贴板")]),v._v(" "),e("p",[e("code",[v._v("yy")]),v._v(" 复制一行")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v("支持数字：3yy，复制当前行与下面两行\n")])])]),e("p",[e("code",[v._v("p")]),v._v("     粘贴到光标之后")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v("支持数字：3p，粘贴3次\n")])])]),e("p",[e("code",[v._v("P")]),v._v("     粘贴到光标之前")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v("支持数字：3P，粘贴3次\n")])])]),e("p",[e("code",[v._v("+p")]),v._v("     从系统剪贴板粘贴")]),v._v(" "),e("h2",{attrs:{id:"重复和撤销"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重复和撤销"}},[v._v("#")]),v._v(" 重复和撤销")]),v._v(" "),e("p",[e("code",[v._v("u")]),v._v("     撤销")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v("支持数字，3u，撤销3次\n")])])]),e("p",[e("code",[v._v("Ctrl+r | .")]),v._v('     重做，"."需要在Normal模式下执行')]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v("支持数字，3 + Ctrl+R，重做三次\n")])])]),e("p",[e("code",[v._v("U")]),v._v('     重做，一次撤销对一行的操作，再次使用则会撤销前一次的"U"操作')]),v._v(" "),e("h2",{attrs:{id:"移动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#移动"}},[v._v("#")]),v._v(" 移动")]),v._v(" "),e("p",[e("code",[v._v("方向键")]),v._v("    移动")]),v._v(" "),e("p",[e("code",[v._v("数字+方向键")]),v._v("     移动")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v('- 左：向左移动"数字"个字符\n- 右：向右移动"数字"个字符\n- 上：向上移动"数字"行\n- 下：向下移动"数字"行\n')])])]),e("p",[e("code",[v._v("w | W")]),v._v("     移动到下一单词首字符")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v("支持数字，3w，移动到后面3个单词首字符\n")])])]),e("p",[e("code",[v._v("b | B")]),v._v("     移动到前一单词首字符")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v("支持数字，3b，移动到前面3个单词首字符\n")])])]),e("p",[e("code",[v._v("e | E")]),v._v("     移动到下一个单词末字符")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v("支持数字，3e，移动到后面3个单词末字符\n")])])]),e("p",[e("code",[v._v("$ | <END>键")]),v._v("     移动到当前行末尾")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v("支持数字，3$，移动到下3行（当前行为第一行）末尾\n")])])]),e("p",[e("code",[v._v("0 | ^ | <HOME>键")]),v._v("     移动到当前行首")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v("不支持数字\n")])])]),e("p",[e("code",[v._v("G")]),v._v("     移动到最后一行")]),v._v(" "),e("p",[e("code",[v._v("数字+G")]),v._v("     移动到指定行")]),v._v(" "),e("p",[e("code",[v._v("gg")]),v._v("     移动到第一行")]),v._v(" "),e("p",[e("code",[v._v("ge")]),v._v("     移动到前一单词末字符")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v("支持数字，3ge，移动到前面3个单词末字符\n")])])]),e("p",[e("code",[v._v("数字+%")]),v._v("     移动到文档某一位置，如：50%，移动到文档中间，90%，移动到文档靠近尾部")]),v._v(" "),e("p",[e("code",[v._v(":+数字")]),v._v("     移动到文档的某一行")]),v._v(" "),e("p",[e("code",[v._v("H")]),v._v("     移动到当前界面顶部")]),v._v(" "),e("p",[e("code",[v._v("M")]),v._v("     移动到当前画面中部")]),v._v(" "),e("p",[e("code",[v._v("L")]),v._v("     移动到当前界面底部")]),v._v(" "),e("p",[e("code",[v._v("(")]),v._v("     移动到句首")]),v._v(" "),e("p",[e("code",[v._v(")")]),v._v("     移动到句尾")]),v._v(" "),e("p",[e("code",[v._v("{")]),v._v("     移动到段首")]),v._v(" "),e("p",[e("code",[v._v("}")]),v._v("     移动到段尾")]),v._v(" "),e("p",[e("code",[v._v("Ctrl+o")]),v._v("     光标跳转到之前的位置")]),v._v(" "),e("p",[e("code",[v._v("Ctrl+i")]),v._v("     光标跳转到之后的位置（在使用Ctrl+o之后有效）")]),v._v(" "),e("h2",{attrs:{id:"标记"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标记"}},[v._v("#")]),v._v(" 标记")]),v._v(" "),e("p",[e("code",[v._v("m+字符")]),v._v("    设定标记，将当前光标处用指定字符作为标记")]),v._v(" "),e("p",[e("code",[v._v("`+字符")]),v._v("     跳转到指定标记，如果该字符标记位存在，则会跳转，使用m设定标记")]),v._v(" "),e("p",[e("code",[v._v(":marks")]),v._v("     查看标记")]),v._v(" "),e("p",[e("code",[v._v("``")]),v._v("     如果使用了G进行跳转，那么该命令则会在当前位置和跳转后的位置进行来回切换")]),v._v(" "),e("p",[v._v("##滚动屏幕")]),v._v(" "),e("p",[e("code",[v._v("Ctrl+y")]),v._v("     向上一行")]),v._v(" "),e("p",[e("code",[v._v("Ctrl+e")]),v._v("     向下一行")]),v._v(" "),e("p",[e("code",[v._v("Ctrl+u")]),v._v("     向上半屏")]),v._v(" "),e("p",[e("code",[v._v("Ctrl+d")]),v._v("     向下半屏")]),v._v(" "),e("p",[e("code",[v._v("Ctrl+b")]),v._v("     向上整屏")]),v._v(" "),e("p",[e("code",[v._v("Ctrl+f")]),v._v("     向下整屏")]),v._v(" "),e("p",[e("code",[v._v("zt")]),v._v("     把当前行置于屏幕顶端")]),v._v(" "),e("p",[e("code",[v._v("zz")]),v._v("     把当前行置于屏幕中央")]),v._v(" "),e("p",[e("code",[v._v("zb")]),v._v("     把当前行置于屏幕底端")]),v._v(" "),e("h2",{attrs:{id:"查找和替换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查找和替换"}},[v._v("#")]),v._v(" 查找和替换")]),v._v(" "),e("p",[e("code",[v._v("f+字符")]),v._v("     光标跳转到当前行的下一个该字符")]),v._v(" "),e("p",[e("code",[v._v("F+字符")]),v._v("     光标跳转到当前行的前一个该字符")]),v._v(" "),e("p",[e("code",[v._v("t+字符")]),v._v("     光标跳转到当前行的下一个该字符的前一个字符")]),v._v(" "),e("p",[e("code",[v._v("T+字符")]),v._v("     光标跳转到当前行的前一个该字符的前一个字符")]),v._v(" "),e("p",[e("code",[v._v(";")]),v._v("     用来重复  f  |  F  |  t  |  T  这四个命令")]),v._v(" "),e("p",[e("code",[v._v("%")]),v._v("     跳转到匹配成对的括号，包括小括号，中括号，大括号")]),v._v(" "),e("p",[e("code",[v._v("/ | ? +字符串")]),v._v("      搜索一个字符串，")]),v._v(" "),e("p",[e("code",[v._v("/")]),v._v("     用于向后查找")]),v._v(" "),e("p",[e("code",[v._v("?")]),v._v("     用于向前查找")]),v._v(" "),e("p",[e("code",[v._v("n")]),v._v("     用于该目标字符串的下一个位置（与 /  |  ?  指定方向同向）")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v("支持数字，3n，该目标字符串在当前查找方向同向的第三次出现的位置\n")])])]),e("p",[e("code",[v._v("N")]),v._v("     用于该目标字符串的上一个位置（与 /  |  ?  指定方向反向）")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v("支持数字，3N，该目标字符串在当前查找方向反向的第三次出现的位置\n")])])]),e("p",[e("code",[v._v("\\<")]),v._v(" 单词开始")]),v._v(" "),e("p",[e("code",[v._v("\\>")]),v._v(" 单词结尾")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v('/<the\\>，这样只会搜索单词 "the"，而不会搜索到类似 "there"、"them"\n')])])]),e("p",[e("code",[v._v("$")]),v._v("  匹配一行结尾")]),v._v(" "),e("p",[e("code",[v._v(".")]),v._v("  匹配任意字符")]),v._v(" "),e("p",[e("code",[v._v("\\")]),v._v("  匹配特殊字符")]),v._v(" "),e("p",[e("code",[v._v("^")]),v._v("  匹配一行开头")]),v._v(" "),e("p",[e("code",[v._v("*")]),v._v("     选取光标当前所在单词向后进行搜索")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v("支持数字，3*，该单词第三次出现的位置\n")])])]),e("p",[e("code",[v._v("#")]),v._v("     选取光标当前所在单词向前进行搜索")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v("支持数字，3#，该单词第三次出现的位置\n")])])]),e("h2",{attrs:{id:"替换文本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#替换文本"}},[v._v("#")]),v._v(" 替换文本")]),v._v(" "),e("p",[e("code",[v._v(":s/文本1/文本2/")]),v._v("     用文本2替换第一次出现的文本1")]),v._v(" "),e("p",[e("code",[v._v(":s/文本1/文本2/g")]),v._v("     用文本2替换当前行所有匹配到的文本1")]),v._v(" "),e("p",[e("code",[v._v(":%s/文本1/文本2/g")]),v._v("     用文本2替换整个文件中所有匹配到的文本1")]),v._v(" "),e("p",[e("code",[v._v(":%s/文本1/文本2/gc")]),v._v("     用文本2替换整个文件中所有匹配到的文本1，并且每次替换时确认")]),v._v(" "),e("p",[e("code",[v._v("r")]),v._v("     等待键入下一个字符，用于替换当前光标处的字符")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v("支持数字，3r+键入字符，当前光标处开始，往后3个字符替换为键入的字符，如果替换为换行符，则只会替换为一个\n")])])])])}),[],!1,null,null,null);_.default=s.exports}}]);