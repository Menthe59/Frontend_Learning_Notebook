### 00 Summary

JS 相关知识和速查手册

### 01 可参考的文档

- Mozilla 的 JavaScript 教程[🖱🔗](https://developer.mozilla.org/zh-CN/docs/web/JavaScript)

### 02 什么是 JavaScript

- JavaScript 是一种运行在客户端的解释性语言，是一种面向对象语言，可以在网页上实现复杂的功能、交互等。
- JS 是一种 _解释性_ 语言，下面将阐述解释（interpret）和编译(compile)的区别：在解释型语言中，代码自上而下运行，且实时返回运行结果。代码在由浏览器执行前，不需要将其转化为其他形式。代码将直接以文本格式（text form）被接收和处理。相对的，编译型语言需要先将代码转化（编译）成另一种形式才能运行。比如 C/C++ 先被编译成汇编语言，然后才能由计算机运行，程序将以二进制的格式运行，这些二进制内容是由程序源代码产生的。
- JavaScript 是 _轻量级_ 解释型语言。浏览器接受到 JavaScript 代码，并以代码自身的文本格式运行。技术上，几乎所有 JavaScript 转换器都运用了一种叫做即时编译（just-in-time compiling）的技术；当 JavaScript 源代码被执行时，它会被编译成二进制的格式，使代码运行速度更快。尽管如此，JavaScript 仍然是一门解释型语言，因为编译过程发生在代码运行中，而非之前。

### 03 如何使用 JavaScript

- JavaScript 有三种使用方式，分别为内部的 JavaScript、外部的 JavaScript 和内联的 JavaScript。

  |       内部的 JavaScript        |          外部的 JavaScript           |                     内联的 JavaScript                     |
  | :----------------------------: | :----------------------------------: | :-------------------------------------------------------: |
  | `<script> //Your JS </script>` | `<script src="script.js"> </script>` | `<button onclick="createParagraph()"> Click me </button>` |

  推荐使用内部和外部的 JavaScript，而不是内联 JavaScript。

### 04 第一个 JS 程序以及如何查找并解决错误

- `number-guessing-game-start.html` 展示了一个猜数字游戏，其中涉及到了 js 中的变量声明与赋值、循环、函数、运算符、条件语句、事件（事件监听器/事件处理器）、对象概念等，可以在程序代码中观察 js 的特点和写法。
- 在调试 `number-guessing-game-start.html` 的过程中，会遇到一些错误。一般来说，代码错误主要分为 _语法错误_ 和 _逻辑错误_ 两种。  
  语法错误|逻辑错误  
  :-:|:-:  
  代码中存在拼写错误，将导致程序完全或部分不能运行，通常你会收到一些出错信息。只要熟悉语言并了解出错信息的含义，你就能够顺利修复它们。|有些代码语法虽正确，但执行结果和预期相悖，这里便存在着逻辑错误。这意味着程序虽能运行，但会给出错误的结果。由于一般你不会收到来自这些错误的提示，它们通常比语法错误更难修复。

  修复语法错误可以按 F12，查看报错信息后进行检查或搜索并解决。

- 下面是几种常见的错误：
  报错内容|错误原因
  :-:|:-:
  `SyntaxError: missing ; before statement`（语法错误：语句缺少分号）|这个错误通常意味着你漏写了一行代码最后的分号，但是此类错误有时候会更加隐蔽  
  `SyntaxError: missing ) after argument list`（语法错误：参数表末尾缺少括号）|通常意味着函数/方法调用后的结束括号忘写了  
  `SyntaxError: missing : after property id`（语法错误：属性 ID 后缺少冒号）|JavaScript 对象的形式有错时通常会导致此类错误，如果把`function checkGuess() `写成了`function checkGuess(`浏览器会认为我们试图将函数的内容当作参数传回函数。写圆括号时要小心！  
  `SystaxError: missing } after function body`（语法错误：函数体末尾缺少花括号）|通常意味着函数或条件结构中丢失了一个花括号。  
  `SyntaxError: expected expression, got 'string'`（语法错误：得到一个 'string' 而非表达式）|-
  `SyntaxError: unterminated string literal`（语法错误：字符串字面量未正常结束）|这个错误通常意味着字符串两端的引号漏写了一个。如果你漏写了字符串开始的引号，将得到第一条出错信息，这里的 'string' 将被替换为浏览器发现的意外字符。如果漏写了末尾的引号将得到第二条。  
  js 错误信息可参考[🖱🔗](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors)

### 05 变量、数字和操作符

- 变量是一个用于存放数值的容器，这个数值可能是一个用于累加计算的数字，也可能是一个句子中的字符串，变量的独特之处在于它存放的数值是可以改变的。
- 在使用变量前要先进行声明，js 使用 `var` 或者 `let` 声明变量

### 06 JavaScript 中的字符串和字符串方法

### 07 数组
