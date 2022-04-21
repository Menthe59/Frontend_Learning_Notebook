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