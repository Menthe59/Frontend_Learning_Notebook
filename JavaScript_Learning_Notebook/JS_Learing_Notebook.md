### 00 Summary  

JS相关知识和速查手册  

### 01 可参考的文档  

- Mozilla 的 JavaScript 教程[🖱🔗](https://developer.mozilla.org/zh-CN/docs/web/JavaScript)  

### 02 什么是JavaScript  

- JavaScript是一种运行在客户端的解释性语言，是一种面向对象语言，可以在网页上实现复杂的功能、交互等。  
- JS是一种 _解释性_ 语言，下面将阐述解释（interpret）和编译(compile)的区别：在解释型语言中，代码自上而下运行，且实时返回运行结果。代码在由浏览器执行前，不需要将其转化为其他形式。代码将直接以文本格式（text form）被接收和处理。相对的，编译型语言需要先将代码转化（编译）成另一种形式才能运行。比如 C/C++ 先被编译成汇编语言，然后才能由计算机运行，程序将以二进制的格式运行，这些二进制内容是由程序源代码产生的。  
- JavaScript 是 _轻量级_ 解释型语言。浏览器接受到 JavaScript 代码，并以代码自身的文本格式运行。技术上，几乎所有 JavaScript 转换器都运用了一种叫做即时编译（just-in-time compiling）的技术；当 JavaScript 源代码被执行时，它会被编译成二进制的格式，使代码运行速度更快。尽管如此，JavaScript 仍然是一门解释型语言，因为编译过程发生在代码运行中，而非之前。  

### 03 如何使用JavaScript  

- JavaScript有三种使用方式，分别为内部的JavaScript、外部的JavaScript和内联的JavaScript。  

    内部的JavaScript | 外部的JavaScript | 内联的JavaScript  
    :-:|:-:|:-:  
    `<script> //Your JS </script>`|`<script src="script.js">  </script>`|`<button onclick="createParagraph()"> Click me </button>`  

    推荐使用内部和外部的JavaScript，而不是内联JavaScript。

