### 00 Summary

JS 相关知识和速查手册

### 01 可参考的文档

- Mozilla 的 JavaScript 教程[🖱🔗](https://developer.mozilla.org/zh-CN/docs/web/JavaScript)

### 02 什么是 JavaScript

- JavaScript 是一种运行在客户端的解释性语言，是一种面向对象语言，可以在网页上实现复杂的功能、交互等。
- JS 是一种 _解释性_ 语言，下面将阐述解释（interpret）和编译(compile)的区别：在解释型语言中，代码自上而下运行，且实时返回运行结果。代码在由浏览器执行前，不需要将其转化为其他形式。代码将直接以文本格式（text form）被接收和处理。相对的，编译型语言需要先将代码转化（编译）成另一种形式才能运行。比如 C/C++ 先被编译成汇编语言，然后才能由计算机运行，程序将以二进制的格式运行，这些二进制内容是由程序源代码产生的。
- JavaScript 是 _轻量级解释型_ 语言。浏览器接受到 JavaScript 代码，并以代码自身的文本格式运行。技术上，几乎所有 JavaScript 转换器都运用了一种叫做即时编译（just-in-time compiling）的技术；当 JavaScript 源代码被执行时，它会被编译成二进制的格式，使代码运行速度更快。尽管如此，JavaScript 仍然是一门解释型语言，因为编译过程发生在代码运行中，而非之前。

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

  修复语法错误可以在浏览器内按 F12，查看报错信息后进行检查或搜索并解决。

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
- 在使用变量前要先进行声明，js 使用 `var` 或者 `let` 声明变量，二者区别如下：  
  `var`|`let`
  :-:|:-:  
  ES5 规范|ES6 规范  
  没有预处理机制，可以在定义之前访问变量|有预处理机制，不能在定义之前访问变量（预处理机制即声明提前）  
  `var`是函数作用域|`let`是块作用域  
  `var`可以被重定义|`let`不能被重定义

  更多详情参考[🖱🔗](https://blog.csdn.net/xingjia001/article/details/84560872)

  - 变量命名时可以使用“小写驼峰命名法”。
  - 变量有不同类型，用于存储不同类型数据：  
    变量名|存储内容  
    :-:|:-:  
    number|存储数字  
    string|字符串，使用单引号或双引号包围
    boolean|true/false
    array|数组，数组是一个单个对象
    object|对象，可以理解为现实生活中的模型的一种代码结构
  - 需要注意的是, JS 是一种“动态类型语言”，不同于 C 或 Java，JS 不需要指定变量将包含什么数据类型。  
    例如，如果声明一个变量并给它一个带引号的指，浏览器就会知道这个值是一个字符串：

    > ```
    >   let myString = 'hello';
    > ```

    即使包含数字，仍是一个字符串，比如下面的`myNumber`:

    > ```
    > let myNumber = '500';
    > //如果想查看某个变量的类型，可以使用typeof,例如：
    > //typeof myNumber
    > ```

  - JS 中用来进行运算的基本运算符有：  
    运算符|名称|作用|实例  
    :-:|:-:|:-:|:-:  
    `+`|加法|两个数相加|`6+9`  
    `-`|减法|从左边减去右边的数|`20-15`  
    `*`|乘法|两个数相乘|`3*7`  
    `/`|除法|用右边的数除左边的数|`10/5`  
    `%`|求余/取模|在你将左边的数分成同右边数字相同的若干整数部分后，返回剩下的余数|`8%3`  
    `**`|幂|取底数的指数次方，即指数所指定的底数相乘,它在 EcmaScript 2016 中首次引入|`5**5`
  - 运算符优先级  
    JavaScript 中的运算符优先级与学校的数学课程相同，即乘法和除法总是先完成，然后是加法和减法（总是从左到右进行计算）。
  - 赋值运算符  
    运算符|名称|作用|示例|等价于  
    :-:|:-:|:-:|:-:|:-:
    `+=`|加法赋值|右边的数值加上左边的变量，然后再返回新的变量。|`x = 3;x += 4;x = 3;x = x + 4;`
    `-=`|减法赋值|左边的变量减去右边的数值，然后再返回新的变量。|`x = 6;x -= 3; x = 6;x = x - 3;`
    `*=`|乘法赋值|左边的变量乘以右边的数值，然后再返回新的变量。|`x = 2;x *= 3; x = 2;x = x * 3;`
    `/=`|除法赋值|左边的变量除以右边的数值，然后再返回新的变量。|`x = 10;x /= 5;x = 10;x = x / 5;`
  - 比较运算符  
    有时，我们将要运行真/假测试，然后根据该测试的结果进行相应的操作。  
    运算符|名称|作用|示例  
    :-:|:-:|:-:|:-:  
    `===`|严格等于|测试左右值是否相同|`5 === 2 + 4`
    `!==`|严格不等于|测试左右值是否不相同|`5 !== 2 + 3`
    `<`|小于|测试左值是否小于右值|`10 < 6`
    `>`|大于|测试左值是否大于右值|`10 > 20`
    `<=`|小于或等于|测试左值是否小于或等于右值|`3 <= 2`
    `>=`|大于或等于|测试左值是否大于或等于正确值。|`5 >= 4`

    有时使用`==`和`!=`来判断相等和不相等，这些都是 JavaScript 中的有效运算符，但它们与`===/!==`不同，前者测试值是否相同， 但是数据类型可能不同，而后者的严格版本测试值和数据类型是否相同。 严格的版本往往导致更少的错误，建议您使用更严格的版本。

### 06 JavaScript 中的字符串和字符串方法

- 在 js 中所有东西都可以被当成对象，例如创建一个字符串：

  > `let string ='This is my string'`

  一旦变量变成字符串对象实例就有大量的原型和方法编辑它，在 string 对象页可以进行查询。[🖱🔗](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)  
  下面介绍一些字符串相关的方法：

- 获得字符串长度：

  > `let browserType = 'mozilla';` > `browserType.length;`

  将会输出 7。

- 检索特定字符串：

  使用方括号表示法返回字符串中的任何字符，即只需要在变量末尾添加方括号，反括号内包含要返回的字符编号，这里要注意的是字符串位置从 0 开始，到 length-1 结束。

  > `browswerType[0];`  
  > `browserType[browsewType.length-1];`

- 在字符串中查找子字符串并提取：  
  当要找出一个较小的字符串是否存在于一个较大的字符串中，即一个字符串中尊在一个子字符串，可以使用`indexOf()`方法来实现：

  > `browserType.indexOf('zilla');`

  当输入：

  > `browserType.indexOf('vanilla');`

  会得到`-1`，这是因为在主字符串中找不到子字符串，可以使用如下代码判断是否包含子字符串:

  > ```
  > if(browserType.indexOf('mozilla')!==-1){
  >     //do stuff with the string
  >     }
  > ```

  当知道字符串的子字符串开始的位置，以及想要结束的字符时，可以用`slice()`进行提取：

  > `broeserType.slice(0,3);`

  这时返回“moz”,第一个参数是开始提取的字符位置，第二个参数是提起的最后一个字符的后一个位置，即提取从第一个位置开始，直到但不包括最后一个位置。

  如果知道某个字符之后提取字符串中的所有剩余字符，则不必包含第二个参数，而只需要包含从中提取的字符位置字符串的其余字符。

  > `browserType.slice(2);`

  这里返回“zilla”。

- 转化大小写：  
  字符串转换方法`toLowerCase()`和`toUpperCase()`将字符串所有的字符粉笔转换成大写或者小写，这在将数据存储在数据库中之前低所有用户的输入的数据进行规范化非常有用。

  > ```
  > let radDate = 'My NaMe Is MuD';
  > radData.toLowerCase();
  > radData.toUpperCase();
  > ```

- 替换字符串的某部分：

  使用`replace()`方法将字符串的一个字符串替换为另一个字符串：

  > `browserType.replace('moz','van');`

  这里要注意的是，需要设置一个变量值来接受操作结果：

  > `browserType = browserType.replace('moz','van');`

### 07 数组

- 简单来说，数组是一个包含了许多值的对象，数组对象可以存储在变量中，并且能用和其他任何类型的值完全相同的方式处理，区别在于可以单独访问列表中的每个值，并使用列表执行一些有用和高效的操作，例如循环会对数组中的每个元素都执行相同的操作。

- 创建数组：数组由方括号构成，其中包含用逗号分隔的元素列表，例如如下购物清单：

  > ```
  > let shopping = ['bread','milk','cheese','hummus','noodles'];
  > ```

  在这种情况下数组中的每个项目都是一个字符串，可以将任何类型的元素存储在数组中，例如字符串、数字、对象、另一个变量甚至另一个数组，也可以混合匹配项目类型，他们并不都是数字、字符串等，例如：

  > ```
  > let sequence = [1,1,2,34,2,5,4];
  > let random = ['tree',789.[0,1,3]];
  > ```

- 关于访问和修改字符串，可以使用括号表示法访问数组中的元素，与前文检索特定字符串字符的方法相同，例如：

  > ```
  > shopping[0];
  > //returns "bread"
  > ```

  简单的为单个数组元素提供新值来修改数组中的元素：

  > ```
  > shopping[0]='tahini';
  > shopping;
  > //shopping will now return ["tachi","nlk","cheese","hmmus","nodles"]
  > ```

  当时数组中包含数组时称之为多维数组，可以通过将两组方括号链接在一起来访问数组内的另一个数组，例如访问`random`数组中的第三个项目：

  > `random[2][2];`

- 关于获取数组长度，可以通过使用`length`属性获取数组长度，这与查找字符串的长度（以字符为单位）完全相同：

  > ```
  > sequence.length;
  > ```

  `length`有许多用途，最常用于循环：

  > ```
  > let sequence = [1,3,45,35,32,34,6];
  > for(let i = 0; i < sequence.length; i++){
  >    console.log(sequence[i]);
  >    //console.log()用于将元素打印到控制台
  > }
  > ```

- 一些有用的数组方法

  字符串和数组之间的转换，使用`split()`方法：（这其实是一个字符串方法而不是数组方法）

  > ```
  > //创建字符串
  > let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
  > //用逗号分割
  > let myArray = myData.split(',');
  > myArray;
  > //检索数组中的项目：
  > myArray.length;
  > myArray[0];//the first item in the array
  > myArray[1];//the second item in the array
  > myArray[myArray.length-1];//at last item in the array
  > ```

  使用`join()`方法进行相反的操作：

  > ```
  > let myNewString = myArray.join(',');
  > myNewString;
  > ```

  将数组转换为字符串的另一种方法是使用`toString()`方法，`toString()`可以比`join()`更简单，因为不需要参数，但更有限制，使用`join()`可以指定不同的分隔符：

  > ```
  > let dogName = ["Rocket","Flash","Bella","Slugger"];
  > dogNames.toString();
  > //Rocket,Flash,Bella,Slugger
  > ```

- 添加和删除数组项，要在数组末尾添加或删除一个项目，可以使用`push()`和`pop()`:

  先使用`push()`,需要添加一个或多个到数组末尾的元素：

  > ```
  > myArray.push('Cardiff');
  > myArray;
  > myArray.push('Bradford','Brighton');
  > myArray;
  > ```

  当方法调用完成时，将返回数组的新长度，如果要将新数组的长度存储在变量中：

  > ```
  > var newLength = myArray.push('Bristol');
  > myArray;
  > newLength;
  > ```

  从数组中删除最后一个元素直接使用`pop()`即可：

  > `myArray.pop();`

  当方法调用完成时，将返回以删除的项目，可以：

  > ```
  > let removedItem = myArray.pop();
  > myArray;
  > removedItem;
  > ```

  `unshift()`和`shift()`从功能上与`push()`和`pop()`完全相同，区别在于他们作用于胡族的开始而不是结尾：

  使用`unshift()`:

  > ```
  > myArray.unshift('Edinburgh');
  > myArray;
  > ```

  使用`shift()`:

  > ```
  > let removedItem = myArray.shift();
  > myArray;
  > removedItem;
  > ```

### 08
