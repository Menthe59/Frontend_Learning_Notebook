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

### 04 如何使用CSS  

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