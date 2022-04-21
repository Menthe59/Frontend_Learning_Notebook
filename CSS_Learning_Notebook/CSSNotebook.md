### 00 Summary  

css的相关内容和速查手册  

### 01 可参考的相关文档  

- Mozilla的css手册[🖱🔗](https://developer.mozilla.org/zh-CN/docs/Web/CSS)  
- Mozilla的css教程[🖱🔗](https://developer.mozilla.org/zh-CN/docs/Learn/CSS)

    _本文档在编辑时参考上述内容。_  

### 02 css是什么  

- css(Cascading Style Sheets),层叠样式表，是一种_样式表_语言，用来描述 HTML 或 XML文档的呈现。css不是编程语言，css描述了在屏幕、纸质、音频等其它媒体上的元素应该如何被渲染的问题。  

### 03 CSS的组成  

- 用于样式文本的CSS属性可以分为两类：字体样式、文本布局风格。字体样式用于字体属性，例如字体种类、大小是否斜体等，会直接应用至文本中。文本布局风格作用于文本的间距以及其他布局功能的属性，比如行与字之间的空间、框中的内容以及文本如何对齐等。  
- CSS由一个选择器起头，选择器选择将要用来添加样式的HTML元素;接着输入一对大括号`{ }`,大括号内部定义一个或多个形式为 _属性(property):值(value);_ 的声明，每个声明都指定了所选择元素的一个属性，之后跟一个想复制给这个属性的值。这里以一级标题`<h1>`为例添加样式。  
    >```
    >       h1 {
    >       color: red;
    >       font-size: 5em;
    >       }
    >```
-  _属性(property):值(value);_ ，这里冒号之前是属性，冒号之后是值，不同的css属性对应不同的合法值。上面的例子制定了color的属性，它可以接受许多颜色值，除此之外还有font-size属性，可以接受许多size units。一个css样式是可以包含很多个规则的。  
    >```
    >       h1 {
    >           coloe: red;
    >           font-size: 5em;
    >           }
    >   
    >       p {
    >           color: black;
    >           }
    >```  
    在MDN的CSS reference页面[🖱🔗](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference)可以对css属性进行查询。  
- css由许多模块组成，可以在MDN[🖱🔗](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Backgrounds_and_Borders)上浏览各模块的参考内容，包括模块的用法、属性、特征等，或在CSS Specification[🖱🔗](https://www.w3.org/TR/2011/REC-CSS2-20110607/#minitoc)中查找，这里有css相关规范。  

### 04 在HTML里应用CSS  
前文提到在HTML中应用css的三种方法： 
- 外部样式表，即将css编写在扩展名为.css 的单独文件中，并从HTML`<link>`元素进行引用。  
- 内部样式，即不使用外部CSS文件，而是将CSS放在HTML文件`<head>`标签里的`<style>`标签之中。  
    >```
    >   <!DOCTYPE html>
    >   <html>
    >       <head>
    >       <meta charset="utf-8">
    >       <title>My CSS experiment</title>
    >       <style>
    >         h1 {
    >               color: blue;
    >               background-color: yellow;
    >               border: 1px solid black;
    >             }
    >
    >         p {
    >               color: red;
    >             }
    >       </style>
    >       </head>
    >   <body>
    >   <h1>Hello World!</h1>
    >   <p>This is my first CSS example</p>
    >   </body>
    >   </html>
    >```
- 内联样式，即存在于HTML元素的style属性之中，其特点是每个CSS表只影响一个元素：  
    >```
    >   <!DOCTYPE html>
    >       <html>
    >         <head>
    >           <meta charset="utf-8">
    >           <title>My CSS experiment</title>
    >         </head>
    >     <body>
    >       <h1 style="color: blue;background-color: yellow;border: 1px solid black;">Hello World!</h1>
    >       <p style="color:red;">This is my first CSS example</p>
    >     </body>
    >   </html>
    >```
    但尽量不要使用这种方法，因为难以维护。


### 05 如何使用CSS  

- 使用css的方法有三种：最常用的是在同文件夹下创建style.css文件并在HTML的开头链接css，这里主要介绍这种方法；其余两种方法都会将css写入HTML标签。  
- 当在某个HTML页面中使用style.css文件时，需要在HTML的`<haed>`标签中加入如下代码：  
    >```
    ><link rel="stylesheet" href="style.css">
    >```
    在`<link>`标签中，属性rel让浏览器知道css文档的存在，并利用属性href寻找css文件的位置。  
- 前文的例子里使用选择器p将所有段落设置为黑色，也可以使用逗号将不同选择器隔开，达到一次可以使用多个选择器的目的，例如；  
    >```
    >   p,li{
    >       color: green;
    >       }
    >```
    以上代码可以将所有段落与列表变为绿色。  
- 如果要为每个元素设置不同的样式，可以通过给HTML元素加类名，再选中类名的方式实现。例如，使用将列表的第二项设置为橙色并将字体加粗。  
    >   HTML部分，给列表第二项添加属性class：
    >```
    >   <ul>
    >       <li>项目一</li>
    >       <li class="test">项目二</li>
    >       <li>项目三</li>
    >   </ul>
    >```
    >
    >   css部分，在选择器开头添加“ . ”，来选择test类：
    >```
    >   .test{
    >       color: orange;
    >       font-weight:bold;
    >       }
    >```  
- 也可以为每个某项类的某个元素添加效果，例如“选中每个test类的li元素”：  
    >```
    >   li.test{
    >        color: orange;
    >        font-weight: bold;
    >       }
    >```
    这时大括号内的属性将不再作用于其他元素标签，如果想要同时对其他元素标签产生作用，只需要将其添加并且用逗号隔开即可：  
    >```
    >   li.test,
    >   span.test {
    >       color: orange;
    >       font-weight: bold;
    >       }
    >```
    这样可以达到将一个类属性应用到多个多个元素的目的，不用每添加一个类就修改一次css文件，只需要着重关注类即可。  
- 当在一个HTML文档中出现两个相同元素时，例如有两个`<em>`元素，一个位于段落内，一个位于列表项内，如果仅选择嵌套在`<li>`元素内的`<em>`元素，可以使用称为包含 _选择符_ 的选择器，只需要在两个选择器之间添加空格即可：  
    >```
    >   li em {
    >       color:rebeccapurple;
    >       }
    >```  
    这个选择器将选择`<li>`内部的`<em>`元素，也称这里的`<em>`元素为`<li>`的后代。  
- 还有另外一种方式是在两个选择器之间添加` + `，即成为 _相邻元素_ ，例如让标题和标题之后的段落具有相同层级的段落样式：
    >```
    >   h1 + p {
    >       font-size: 200%;
    >       }
    >```  
- css还可以根据状态确定样式，比如`<a>`标签，想要达到鼠标未悬停和悬停时有不同状态时，可以使用下面的css代码：  
    >```
    >   a:link {
    >       color: pink;
    >       }
    >
    >   a:visited {
    >       color: green;
    >       }
    >```  
    或者使用如下代码，实现链接被鼠标悬停的时候的样式，例如一处下划线：  
    >```
    >   a:hover {
    >       text-decoration: none;
    >       }
    >```
    但对于超链接来说，一般会在鼠标未悬停时显示下划线来区别于其他文本。  
- 选择器和选择符也可以同时使用，例如：
    >```
    >/*选择任意嵌套在`<article>`标签内的`<p>内的`<span>`标签*/
    >   `article p span { . . . }`
    >
    >/*选择`<h1>`标签后的`<ul>`标签后的`<p>`标签*/ 
    >   `h1 + ul + p { . . . }`
    >```
    也可以将多种类型组合在一起：
    >```
    >   body h1 + p .test {
    >       color: yellow;
    >       background-color: black;
    >       padding: 5px;
    >       }
    >```
    上面的代码为以下元素建立样式：在`<body>`之内，紧接在`<h1>`后面的`<p>`元素的内部，类名为 test。  

### 06 CSS规则  

- 两个选择器可以选择相同HTML元素，担当两条规则对某一个元素都适用的时候，CSS有 _级联规则和专用规则_ 来控制在发生碰撞时哪条规则将获胜。  
- 在最基本的层面上，CSS由属性和值两个组成部分组成：  
    * 属性：人类可读的标识符，指示您想要更改的样式特征(例如`font-size`, `width`, `background-color`) 你想改变。  
    * 值：每个指定的属性都有一个值，该值指示您希望如何更改这些样式特性,例如，要将字体、宽度或背景色更改为何种形式。  
- 虽然大多数值是相对简单的关键字或数值，但也有一些可能的值以函数的形式出现。一个例子是`calc()`函数。这个函数允许在CSS中进行简单的计算，例如：  
    >```
    >   <div class="outer">
    >       <div class="box">The inner box is 90% - 30px.</div>
    >   </div>
    >
    >   .outer {
    >       border: 5px solid black;
    >           }
    >
    >   .box {
    >       padding: 10px;
    >       width: calc(90% - 30px);
    >       background-color: rebeccapurple;
    >       color: white;
    >         }
    >```
- @规则：`@rules` (pronounced "at-rules"). 这是一些特殊的规则，为 CSS提供了一些关于如何表现的指导。 有些 `@rules` 规则很简单，有规则名和值。例如，要将额外的样式表导入主CSS样式表，可以使用`@import`:
    >```
    >   @import 'styles2.css';
    >```
    最常见的 `@rules` 之一是`@media`，它允许使用 _媒体查询_ 来应用CSS，仅当某些条件成立,例如，当屏幕分辨率高于某一数量，或屏幕宽度大于某一宽度时。
    在下面的 CSS中，我们将给 `<body>` 元素一个粉红色的背景色。但是，我们随后使用`@media`创建样式表的一个部分，该部分仅适用于视口大于30em的浏览器。如果浏览器的宽度大于30em，则背景色将为蓝色。
    >```
    >   body {
    >       background-color: pink;
    >       }
    >
    >   @media (min-width: 30em) {
    >       body {
    >   background-color: blue;
    >           }
    >   }
    >```
    之后会遇到一些其他的规则`@rules`。
- 速记属性，一些属性，如 `font`, `background`, `padding`, `border`, `margin` 等属性称为速记属性,这是因为这些属性允许在一行中设置多个属性值，从而节省时间并使代码更整洁。  
    例如，这一行代码：
    >```
    >   padding: 10px 15px 15px 5px;
    >```
    >
    与这四行代码是等价的：
    >```
    >   padding-top: 10px;
    >   padding-right: 15px;
    >   padding-bottom: 15px;
    >   padding-left: 5px;
    >```         
    这一行：
    >```
    >   background: red url(bg-graphic.png) 10px 10px repeat-x fixed;
    >```
    与这五行代码是等价的：
    >```
    >   background-color: red;
    >   background-image: url(bg-graphic.png);
    >   background-position: 10px 10px;
    >   background-repeat: repeat-x;
    >   background-attachment: fixed;
    >```
    可以查找CSS参考中的速记属性名称，以查找更多内容。  
- CSS中的注释以`/*`开头，以`*/`结尾。编写css时可以通过空格tab等增加可读性，但属性和值之间的空格需要格外注意。  
    例如，以下声明是有效的CSS：
    >```
    >   margin: 0 auto;
    >   padding-left: 10px;
    >```
    以下内容无效：
    >```
    >margin: 0auto;
    >padding- left: 10px;
    >```  

### 07 CSS如何工作  

- 当浏览器展示一个文件的时候，必须兼顾文件的内容和文件的样式信息，处理文件的标准的流程为：  
    * 1.浏览器载入HTML文件（比如从网络上获取）。  
    * 2.将HTML文件转化成一个DOM（Document Object Model），DOM是文件在计算机内存中的表现形式。  
    * 3.接下来，浏览器会拉取该HTML相关的大部分资源，比如嵌入到页面的图片、视频和CSS样式。（JavaScript则会稍后进行处理。）
    * 4.浏览器拉取到CSS之后会进行解析，根据选择器的不同类型（比如element、class、id等等）把他们分到不同的“桶”中。浏览器基于它找到的不同的选择器，将不同的规则（基于选择器的规则，如元素选择器、类选择器、id选择器等）应用在对应的DOM的节点中，并添加节点依赖的样式（这个中间步骤称为渲染树）。  
    * 5.上述的规则应用于渲染树之后，渲染树会依照应该出现的结构进行布局。  
    * 6.网页展示在屏幕上（这一步被称为着色）。  
- 一个DOM有一个树形结构，标记语言中的每一个元素、属性以及每一段文字都对应着结构树中的一个节点（Node/DOM或DOM node）。节点由节点本身和其他DOM节点的关系定义，有些节点有父节点，有些节点有兄弟节点。对DOM的理解会很大程度上帮助设计、调试和维护CSS，因为DOM是CSS样式和文件内容的结合。可以使用浏览器F12调试需要操作的DOM以查看使用了哪些规则。  
以下为一个DOM案例：

    >```
    >   <p>
    >       Let's use:
    >       <span>Cascading</span>
    >       <span>Style</span>
    >       <span>Sheets</span>
    >   </p>
    >```

    在这个DOM中，`<p>`元素对应了父节点，它的子节点是一个text节点和三个对应了`<span>`元素的节点，SPAN节点同时也是他们中的Text节点的父节点。

    >P  
    >├─ "Let's use:"  
    >├─ SPAN  
    >|  └─ "Cascading"  
    >├─ SPAN  
    >|  └─ "Style"  
    >└─ SPAN  
    >   └─ "Sheets"  

    上图为浏览器解析上述HTML片段：生成上图的DOM树形结构并将它按照如下输出到浏览器：  
    Let's use: Cascading Style Sheets  


    