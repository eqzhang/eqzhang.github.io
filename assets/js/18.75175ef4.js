(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{213:function(v,_,a){"use strict";a.r(_);var e=a(0),t=Object(e.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h1",{attrs:{id:"linux文件编辑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux文件编辑","aria-hidden":"true"}},[v._v("#")]),v._v(" Linux文件编辑")]),v._v(" "),a("p",[a("a",{attrs:{name:"nePUn"}})]),v._v(" "),a("h1",{attrs:{id:"linux-vi-vim"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-vi-vim","aria-hidden":"true"}},[v._v("#")]),v._v(" Linux VI/VIM")]),v._v(" "),a("p",[v._v("所有的 Unix Like 系统都会内建 vi 文书编辑器，其他的文书编辑器则不一定会存在。"),a("br"),v._v("但是目前我们使用比较多的是 vim 编辑器。"),a("br"),v._v("vim 具有程序编辑的能力，可以主动的以字体颜色辨别语法的正确性，方便程序设计。\n"),a("a",{attrs:{name:"YyyjW"}})]),v._v(" "),a("h1",{attrs:{id:"vim基本概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vim基本概述","aria-hidden":"true"}},[v._v("#")]),v._v(" VIM基本概述")]),v._v(" "),a("p",[a("a",{attrs:{name:"EMFqN"}})]),v._v(" "),a("h2",{attrs:{id:"什么是vim"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是vim","aria-hidden":"true"}},[v._v("#")]),v._v(" 什么是VIM?")]),v._v(" "),a("p",[v._v("vi和vim是Linux下的一个文本编辑工具。(可以理解为windows的记事本，或word文档)"),a("br"),v._v("vim键盘图:"),a("br"),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/211447/1568614677757-1089149d-50e4-42b2-a0c8-84059126662e.png#align=left&display=inline&height=727&name=image.png&originHeight=727&originWidth=1028&size=316621&status=done&width=1028",alt:"image.png"}})]),v._v(" "),a("p",[v._v("为什么要使用VIM?")]),v._v(" "),a("p",[v._v("因为Linux系统一切皆为文件，而我们工作最多的就是修改某个服务的配置(其实就是修改文件内容)。"),a("br"),v._v("也就是说如果没有vi/vim，我们很多工作都无法完成。PS: vim是学习linux最重要的命令之一")]),v._v(" "),a("p",[a("a",{attrs:{name:"igD5t"}})]),v._v(" "),a("h2",{attrs:{id:"vi与vim有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vi与vim有什么区别","aria-hidden":"true"}},[v._v("#")]),v._v(" VI与VIM有什么区别?")]),v._v(" "),a("p",[v._v('vi和vim都是文本编辑器，只不过vim是vi的增强版，比vi多了语法高亮显示，其他编辑功能几乎无差，所以使用vi还是vim取决个人习惯。(相当于windows系统下的文本编辑软件“记事本”与"notepad++"的区别)'),a("br"),v._v("PS：因为前期最小化安装CentOS系统，所以默认情况下没有vim命令，但可以使用yum install vim -y安装")]),v._v(" "),a("p",[a("a",{attrs:{name:"KjrAh"}})]),v._v(" "),a("h2",{attrs:{id:"vim模式三种模式介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vim模式三种模式介绍","aria-hidden":"true"}},[v._v("#")]),v._v(" VIM模式三种模式介绍")]),v._v(" "),a("p",[a("a",{attrs:{name:"JEmlm"}})]),v._v(" "),a("h3",{attrs:{id:"一般模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一般模式","aria-hidden":"true"}},[v._v("#")]),v._v(" 一般模式:")]),v._v(" "),a("p",[v._v("主要是控制光标移动，可对文本进行复制、粘贴、删除等工作。"),a("br"),v._v("使用vim filename 编辑一个文件时，一进入该文件就是普通模式了。"),a("br"),v._v("在这个模式下，可以进行光标移动、复制、删除、粘贴操作。")]),v._v(" "),a("p",[a("a",{attrs:{name:"cGgf6"}})]),v._v(" "),a("h3",{attrs:{id:"编辑模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编辑模式","aria-hidden":"true"}},[v._v("#")]),v._v(" 编辑模式:")]),v._v(" "),a("p",[v._v("主要进行文本内容编辑和修改"),a("br"),v._v("从普通模式进入编辑模式，只需你按一个键即可（i, I, a, A, o, O）"),a("br"),v._v('当进入编辑模式时，会在屏幕的最下一行会出现 "INSERT"标记'),a("br"),v._v("从编辑模式回到普通模式只需要按键盘左上方的 ESC 键即可。")]),v._v(" "),a("p",[a("a",{attrs:{name:"4h5dO"}})]),v._v(" "),a("h3",{attrs:{id:"末行模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#末行模式","aria-hidden":"true"}},[v._v("#")]),v._v(" 末行模式:")]),v._v(" "),a("p",[v._v("主要用于保存或退出文本。"),a("br"),v._v('在普通模式下，输入 ":" 或者 "/" 即可进入命令模式。'),a("br"),v._v("在命令该模式下，可进行的操作有，显示行号、搜索、替换、保存、退出。\n"),a("a",{attrs:{name:"Iir3e"}})]),v._v(" "),a("h1",{attrs:{id:"vi-vim使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vi-vim使用","aria-hidden":"true"}},[v._v("#")]),v._v(" VI/VIM使用")]),v._v(" "),a("p",[a("strong",[v._v("从一般模式切换到编辑模式各命令区别")])]),v._v(" "),a("ul",[a("li",[a("code",[v._v("i")]),v._v("在当前光标处插入")]),v._v(" "),a("li",[a("code",[v._v("o")]),v._v(" 另起一行插入")]),v._v(" "),a("li",[a("code",[v._v("a")]),v._v(" 后面一个字符插入")]),v._v(" "),a("li",[a("code",[v._v("r")]),v._v(" 替换输入。这个在改单个字符很有用，因为它只替换一个字符又变回一般模式了\n"),a("a",{attrs:{name:"LKK5E"}})])]),v._v(" "),a("h2",{attrs:{id:"常用按键及功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用按键及功能","aria-hidden":"true"}},[v._v("#")]),v._v(" 常用按键及功能")]),v._v(" "),a("p",[v._v("下面的指令是区分大小写的\n"),a("a",{attrs:{name:"MyBDP"}})]),v._v(" "),a("h3",{attrs:{id:"移动游标的方法-一般模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动游标的方法-一般模式","aria-hidden":"true"}},[v._v("#")]),v._v(" 移动游标的方法 (一般模式)")]),v._v(" "),a("ul",[a("li",[a("code",[v._v("↑→↓←")]),v._v(" 上右下左移动，"),a("code",[v._v("5↓")]),v._v(" 向下移动 5 行")]),v._v(" "),a("li",[a("code",[v._v("ctrl + f")]),v._v("向下翻页，翻半页命令为 "),a("code",[v._v("ctrl + d")])]),v._v(" "),a("li",[a("code",[v._v("ctrl + b")]),v._v(" 向上翻页，翻半页命令为 "),a("code",[v._v("ctrl + u")])]),v._v(" "),a("li",[a("code",[v._v("0")]),v._v(" 移动到一行的开头，移到到一行的结尾为 "),a("code",[v._v("$")])]),v._v(" "),a("li",[a("code",[v._v("gg")]),v._v(" 到开头，"),a("code",[v._v("G")]),v._v(" 移动到结尾 ,"),a("code",[v._v("3G")]),v._v(" 移动到第 3 行")]),v._v(" "),a("li",[a("code",[v._v("<enter>")]),v._v(" 游标向下移动一行，"),a("code",[v._v("3<enter>")]),v._v(" 游标向下移动 3 行\n"),a("a",{attrs:{name:"QpkY4"}})])]),v._v(" "),a("h3",{attrs:{id:"删除，复制，粘贴-一般模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除，复制，粘贴-一般模式","aria-hidden":"true"}},[v._v("#")]),v._v(" 删除，复制，粘贴 (一般模式)")]),v._v(" "),a("ul",[a("li",[a("code",[v._v("x")]),v._v(" 向后删除一个字符，"),a("code",[v._v("X")]),v._v(" 向前删除一个字符，"),a("code",[v._v("3x")]),v._v(" 向后删除 3 个字符")]),v._v(" "),a("li",[a("code",[v._v("dd")]),v._v(" 删除一行，"),a("code",[v._v("3dd")]),v._v(" 删除3 行")]),v._v(" "),a("li",[a("code",[v._v("d$")]),v._v(" 从当前光标位置删除到结尾 ，"),a("code",[v._v("dG")]),v._v(" 从当前位置到最后一行全部删除")]),v._v(" "),a("li",[a("code",[v._v("yy")]),v._v(" 复制当前行 ，"),a("code",[v._v("3yy")]),v._v(" 复制 3 行")]),v._v(" "),a("li",[a("code",[v._v("p")]),v._v(" 在下一行粘贴复制的东西，"),a("code",[v._v("P")]),v._v(" 在上一行粘贴")]),v._v(" "),a("li",[a("code",[v._v("u")]),v._v(" 撤回操作")]),v._v(" "),a("li",[a("code",[v._v(".")]),v._v(" 重复上一次操作\n"),a("a",{attrs:{name:"qiMm4"}})])]),v._v(" "),a("h3",{attrs:{id:"查找与替换-一般模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查找与替换-一般模式","aria-hidden":"true"}},[v._v("#")]),v._v(" 查找与替换(一般模式)")]),v._v(" "),a("ul",[a("li",[a("code",[v._v("/word")]),v._v(" 向下查找字符，"),a("code",[v._v("?word")]),v._v(" 向上查找字符")]),v._v(" "),a("li",[a("code",[v._v("n")]),v._v(" 重复前一个搜索的动作，按下 n 后，会继续找下一个匹配的字符")]),v._v(" "),a("li",[a("code",[v._v("1,5s/sanri/9420/g")]),v._v(" 搜索第 1 行到第 5 行的 sanri 字符串，替换成 9420")]),v._v(" "),a("li",[a("code",[v._v("1,$s/sanri/9420/g")]),v._v(" 搜索第 1 行到最后一行的 sanri 字符串，替换成 9420\n"),a("a",{attrs:{name:"9DuGP"}})])]),v._v(" "),a("h3",{attrs:{id:"选择文本-一般模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择文本-一般模式","aria-hidden":"true"}},[v._v("#")]),v._v(" 选择文本 (一般模式)")]),v._v(" "),a("p",[a("code",[v._v("v")]),v._v(" 然后使用方向键，相当于在 windows 按住鼠标拖动"),a("br"),a("code",[v._v("V")]),v._v(" 光标经过的行会选择"),a("br"),a("code",[v._v("ctrl +v")]),v._v("选择列模式"),a("br"),a("code",[v._v("y")]),v._v(" 选择的文本复制"),a("br"),a("code",[v._v("d")]),v._v(" 选择的文本删除"),a("br"),a("strong",[v._v("总结一下")]),a("br"),v._v("从上面的命令来看在vi 中，一些字母都是有着特别的含义的,比如"),a("br"),a("code",[v._v("$")]),v._v(" 代表行结尾，"),a("code",[v._v("0")]),v._v(" 代表行开头，"),a("code",[v._v("G")]),v._v(" 代表最后一行，"),a("code",[v._v("y")]),v._v(" 代表复制，"),a("code",[v._v("d")]),v._v(" 代表删除行，"),a("code",[v._v("x")]),v._v(" 代表删除字符、"),a("br"),v._v("数字一般表示重复做几次的意思，大小写代表的含义一般刚好相反、"),a("br"),v._v("翻页的快捷键刚好是英文的缩写 "),a("br"),a("code",[v._v("ctrl + f")]),v._v(" front page "),a("br"),a("code",[v._v("ctrl + b")]),v._v(" back page "),a("br"),a("code",[v._v("ctrl + d")]),v._v(" down page "),a("br"),a("code",[v._v("ctrl + u")]),v._v("up page\n"),a("a",{attrs:{name:"WIPSL"}})]),v._v(" "),a("h3",{attrs:{id:"保存文件另存为-命令模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#保存文件另存为-命令模式","aria-hidden":"true"}},[v._v("#")]),v._v(" 保存文件另存为(命令模式)")]),v._v(" "),a("ul",[a("li",[a("code",[v._v(":w")]),v._v(" 保存文件，"),a("code",[v._v(":w!")]),v._v(" 强制写文件(需要权限)")]),v._v(" "),a("li",[a("code",[v._v(":q")]),v._v(" 退出，"),a("code",[v._v(":q!")]),v._v(" 退出不保存")]),v._v(" "),a("li",[a("code",[v._v(":wq")]),v._v(" 保存并退出，"),a("code",[v._v(":wq!")]),v._v(" 强制保存并退出(需要权限)")]),v._v(" "),a("li",[a("code",[v._v(":1,5 w [filename]")]),v._v(" 将第一行到第 5 行的数据写入新的文件")]),v._v(" "),a("li",[a("code",[v._v(":! command")]),v._v(" 执行命令，在编辑文件的时候可以查看一些信息而不需要退出文件")]),v._v(" "),a("li",[a("code",[v._v(":set nu")]),v._v("显示行号，"),a("code",[v._v(":set nonu")]),v._v("不显示行号")])])])}),[],!1,null,null,null);_.default=t.exports}}]);