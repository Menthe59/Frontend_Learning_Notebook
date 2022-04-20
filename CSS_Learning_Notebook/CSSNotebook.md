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
- 