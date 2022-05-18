### 00 Summary

JS 相关知识和速查手册

### 01 可参考的文档

- Mozilla 的 JavaScript 教程[🖱🔗](https://developer.mozilla.org/zh-CN/docs/web/JavaScript)

### 02 什么是 JavaScript

- JavaScript 是一种 _运行在客户端的解释性语言_ ，是一种面向对象语言，可以在网页上实现复杂的功能、交互等。  
  关于解释和编译：  
   解释（interpret）|编译(compile)
  :-:|:-:
  在解释型语言中，代码自上而下运行，且实时返回运行结果。代码在由浏览器执行前，不需要将其转化为其他形式。代码将直接以文本格式（text form）被接收和处理。|编译型语言需要先将代码转化（编译）成另一种形式才能运行。

  比如 C/C++ 先被编译成汇编语言，然后才能由计算机运行，程序将以二进制的格式运行，这些二进制内容是由程序源代码产生的。

- JavaScript 是 _轻量级解释型_ 语言。浏览器接受到 JavaScript 代码，并以代码自身的文本格式运行。技术上，几乎所有 JavaScript 转换器都运用了一种叫做即时编译（just-in-time compiling）的技术；当 JavaScript 源代码被执行时，它会被编译成二进制的格式，使代码运行速度更快。尽管如此，JavaScript 仍然是一门解释型语言，因为编译过程发生在代码运行中，而非之前。

### 03 如何使用 JavaScript

- JavaScript 有三种使用方式，分别为内部的 JavaScript、外部的 JavaScript 和内联的 JavaScript。

  |       内部的 JavaScript        |          外部的 JavaScript           |                     内联的 JavaScript                     |
  | :----------------------------: | :----------------------------------: | :-------------------------------------------------------: |
  | `<script> //Your JS </script>` | `<script src="script.js"> </script>` | `<button onclick="createParagraph()"> Click me </button>` |

  推荐使用内部和外部的 JavaScript，而不是内联 JavaScript，这种方式不易维护。

- JavaScript 代码通常会按照从上往下的顺序执行，避免出现函数调用在对象顶以前这种问题，这种情况下会出现 “对象不存在” 的报错信息，不能添加事件监听器。在使用“内部”、“外部”的 JS 时会有这种隐患，这时可以使用事件监听器避免发生错误。

  > ```
  > document.addEventListener("DOMContentLoaded",function(){
  >   . . .
  >   });
  > ```

  这个事件监听器监听浏览器的"DOMContentLoaded"事件，即 HTML 文档体记载、解释完毕事件。事件触发时将调用". . . "初的代码，从而避免错误发生。

  还有异步(async)属性，可以用来解决类似问题，例如告知浏览器在遇到`<script>`元素时不要中断后续 HTML 内容的加载。

  > ```
  > <script src="script.js" async></script>
  > ```

  要注意的是 “外部”示例中 async 属性可以解决调用顺序问题，因此无需使用 DOMContentLoaded 事件。而 async 只能用于外部脚本，因此不适用于“内部”示例。

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
    第一个单字以小写字母开始；第二个单字的首字母大写，例如：firstName、lastName。
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

  `unshift()`和`shift()`从功能上与`push()`和`pop()`完全相同，区别在于他们作用于数组的开始而不是结尾：

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

  array 详解：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array

### 08 条件语句和循环

- 基本的 if...else...语法：

  > ```
  > if (condition) {
  > code to run if condition is true
  > } else {
  >   run some other code instead
  > }
  > ```

- 如果需要两个以上的选择或结果，可以使用 `if…else` 连接额外的选择和结果。
- 比较运算符是用来判断条件语句中的条件的。

  | 比较运算符运算符 |                       作用                       |
  | :--------------: | :----------------------------------------------: |
  |  `===` 和 `!==`  |     判断一个值是否严格等于，或不等于另一个。     |
  |    `<` 和 `>`    |        判断一个值是否小于，或大于另一个。        |
  |   `<=` 和 `>=`   | 判断一个值是否小于或等于，或者大于或等于另一个。 |

  要注意的是，任何不是 `false` , `undefined` , `null` , `0` , `NaN` 的值，或一个空字符串（''）在作为条件语句进行测试时实际返回 `true` 。

- 如果要测试多个条件，而不想编写嵌套 `if ... else` 语句，可以使用逻辑运算符。  
  逻辑运算符|作用
  :-:|:-:
  `&&` | 逻辑与; 使得并列两个或者更多的表达式成为可能，只有当这些表达式每一个都返回 `true` 时，整个表达式才会返回 `true`.
  `||` | 逻辑或; 当两个或者更多表达式当中的任何一个返回 `true` 则整个表达式将会返回 true.
  `!` | 逻辑非; 对一个布尔值取反, 非 `true` 返回 `false`,非 `false` 返回 `true`.

- switch 语句可以以单个表达式/值作为输入，然后查看多个选项，直到找到与该值相匹配的选项，执行与之相关的代码。

  > ```
  > switch (expression) {
  > case choice1:
  >  run this code
  >  break;
  >
  > case choice2:
  >  run this code instead
  >  break;
  >
  > // include as many cases as you like
  >
  > default:
  >  actually, just run this code
  > }
  > ```

- 三元或条件运算符用于测试一个条件，并返回一个值/表达，如果它是`true`，另一个是`false`，这样的情况下可以使用三元运算符，并且可以占用比 `if...else` 块较少的代码块。

  > ```
  > ( condition ) ? run this code : run this code instead
  > ```

- 一个简单的日历

  > ```
  > var select = document.querySelector('select');
  > var list = document.querySelector('ul');
  > var h1 = document.querySelector('h1');
  >
  > select.onchange = function() {
  > var choice = select.value;
  > var days = 31;
  > if(choice === 'February') {
  > days = 28;
  > } else if(choice === 'April' || choice === 'June' || choice === >'September'|>| choice === 'November') {
  > days = 30;
  > }
  >
  > createCalendar(days, choice);
  > }
  >
  > function createCalendar(days, choice) {
  > list.innerHTML = '';
  > h1.textContent = choice;
  > for(var i = 1; i <= days; i++) {
  > var listItem = document.createElement('li');
  > listItem.textContent = i;
  > list.appendChild(listItem);
  > }
  > }
  >
  > createCalendar(31,'January');
  >
  > ```

- 一个循环通常需要一个或多个条件：  
   一个开始条件，它被初始化为一个特定的值，是循环的起点；
  一个结束条件，是循环停止的标准；
  一个迭代器，通常在每个连续循环上递增少量计数器直到达到退出条件。  
  下面展示 for 循环的语法：

  > ```
  > for(initializer;exit-condition;final-expression){
  >   //code to run
  > }
  > ```

  一个遍历列表的例子：

  > ```
  > var cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
  > var info = 'My cats are called ';
  > var para = document.querySelector('p');
  >
  > for (var i = 0; i < cats.length; i++) {
  > info += cats[i] + ', ';
  > }
  >
  > para.textContent = info;
  > ```

- 当要在所有迭代完成之前退出循环，可以使用 break 语句。break 语句会立即退出 switch 语句并使浏览器移动到跟随它的任何代码。  
  continue 语句类似 break，但并不是完全跳出循环，而是跳出当前循环而执行下一个循环。

- while 和 do ... while 语句也可以用来进行循环操作：  
   while 循环的语法如下：

  > ```
  > initializer
  > while (exit-condition) {
  >  // code to run
  >
  >  final-expression
  > }
  > ```

  使用 while 重写 for 循环的遍历列表示例：

  > ```
  > var i = 0;
  >
  > while (i < cats.length) {
  >  if (i === cats.length - 1) {
  >    info += 'and ' + cats[i] + '.';
  >  } else {
  >    info += cats[i] + ', ';
  > }
  >
  >  i++;
  > }
  > ```

  do...while 循环类似于 while，不同的是在 while 后提供了中止条件；

  > ```
  > initializer
  > do {
  >  // code to run
  >  final-expression
  > } while (exit-condition)
  > ```

  使用 do...while 重写 for 循环的遍历列表示例：

  > ```
  > var i = 0;
  >
  > do {
  >  if (i === cats.length - 1) {
  >    info += 'and ' + cats[i] + '.';
  > } else {
  >  info += cats[i] + ', ';
  > }
  >
  > i++;
  > } while (i < cats.length);
  > ```

### 09 函数

- 函数可以在一个代码块中存储一段用于处理单任务的代码，并在任何需要的时候用一个简短的命令来调用，而不是把相同的代码写很多次。

- JS 有许多 _内置函数_ ，这些函数被定义为浏览器 API 的一部分，建立在默认语言之上以提供更多功能。

- 通常称函数是对象方法的一部分，这里要提到的是内置函数并不是函数而是方法，这二者可替换程度很高。二者的区别在于：方法是在对象内定义的函数。

- 详见[🖱🔗](https://developer.mozilla.org/zh-CN/docs/learn/JavaScript/Building_blocks/Functions)。  
  [🖱🔗](https://developer.mozilla.org/zh-CN/docs/learn/JavaScript/Building_blocks/Build_your_own_function)。
  [🖱🔗](https://developer.mozilla.org/zh-CN/docs/learn/JavaScript/Building_blocks/Return_values)。

### 10 事件

- 事件是系统会在事件出现时产生或触发某种信号，并且会提供一个自动加载某种动作列如运行一些代码的机制。几个可能发生的不同事件：  
   ·用户在某个元素上点击鼠标或悬停光标；  
   ·用户在键盘中按下某个按键；  
   ·用户调整浏览器的大小或者关闭浏览器窗口；  
   ·一个网页停止加载；  
   ·提交表单；  
   ·播放、暂停、关闭视频；  
   ·发生错误。  
   事件参考列表[🖱🔗](https://developer.mozilla.org/zh-CN/docs/Web/Events)。

- 每个可用事件都会有一个事件处理器，也就是事件触发时会运行的代码块，当定义了一个用来回应事件被触发的代码块的时候，就说注册了一个事件处理器，有时也被称为事件监听器。严格来说这块代码既监听也处理事件。监听器留意事件是否发生，然后处理器就是对事件发生做出的回应。  
  一个简单的例子：页面中只有一个 button，按下背景会变成随机的一种颜色：

  > ```
  > <button>Change color</button>
  > ```

  JS 部分：

  > ```
  > const btn = document.querySelector('button');
  >
  > function random(number){
  >   return Math.floor(Math.random()*(number+1));
  > }
  >
  > btn.onclick=function(){
  > const rndCol='rgb('+random(255)+','+random(255)+','+random(255)+')';
  > document.body.style.backgroundColor=rndCol;
  > }
  > ```

  使用 `btn` 变量存储 `button`，并使用了`Document.querySelector()` 函数,同时定义了一个返回随机数字的函数。代码第三部分就是事件处理器。`btn`变量指向 `button` 元素，在 `button` 这种对象上可触发一系列的事件，因此也就可以使用事件处理器。我们通过将一个匿名函数（这个赋值函数包括生成随机色并赋值给背景色的代码）赋值给“点击”事件处理器参数，监听“点击”这个事件。只要点击事件在`<button>`元素上触发，该段代码就会被执行。

### 11 JavaScript 对象基础

- 对象是一个包含相关数据和方法的集合，通常由一些变量和函数组成，我们称之为对象里面的属性和方法。  
  例如，创建一个空对象：

  > ```
  > var person = {};
  > ```

  这时在控制台输入 person 会显示：

  > ```
  > [object Object]
  >
  > ```

  更新这个对象，为这个对象添加内容：

  > ```
  > var person={
  >   name:['Bob','Smith'],
  >   age:32,
  >   gender:'male',
  >   interests:['music','skiing'],
  >   bio:function(){
  >    alert(this.name[0]+' '+this.name[1]+'is'+this.age+'years old. He likes '
  >    + this.interests[0]+'and'+this.interests[1]+'.');
  > },
  > greeting:function(){
  > alert('Hi! I\'m' + this.name[0]+'.');
  > }
  > };
  > ```

  在控制台输入以下内容，会从对象里得到一些数据和功能：

  > ```
  > person.name[0]
  > person.age
  > person.interests[1]
  > person.bio()
  > person.greeting()
  > ```

  可以看到，一个对象由许多的成员组成，每一个成员都拥有一个名字（像上面的`name`、`age`），和一个值（如`['Bob', 'Smith']`、`32`）。每一个名字/值（`name/value`）对被逗号分隔开，并且名字和值之间由冒号（:）分隔，语法规则如下所示：

  > ```
  > var objectName = {
  > member1Name : member1Value,
  > member2Name : member2Value,
  > member3Name : member3Value
  >  }
  > ```

  对象成员的值可以是任意的，`person`对象里有字符串，数字，两个数组，两个函数。前 4 个成员是资料项目，被称为对象的属性(`property`)，后两个成员是函数，允许对象对资料做一些操作，被称为对象的方法(`method`)，一个如上所示的对象被称之为对象的字面量(`literal`)，即手动的写出对象的内容来创建一个对象，不同于从类实例化一个对象。

  访问对象中的属性有两种方式：

  > ```
  > <!--点表示法-->
  > person.age
  > person.name.first
  > ```

  > ```
  > <!--括号表示法-->
  > person['age']
  > person['name']['first']
  > ```

  设置对象成员/更新成员变量：

  > ```
  > person.age=45
  > person['name']['last']='Cratchit'
  > ```

  创建新成员：

  > ```
  > person['eyes']='hazel'
  > person.farewell=function(){
  >   alert("Bye everybody!")
  > }
  > ```

  还可以动态的去设置成员的名字。比如，我们想让用户能够在他们的数据里存储自己定义的值类型，通过两个 input 框来输入成员的名字和值，通过以下代码获取用户输入的值：

  > ```
  > var myDataName = nameInput.value
  > var myDataValue = nameValue.value
  > ```

  可以这样把这个新的成员的名字和值加到 person 对象里：

  > ```
  > person[myDataName] = myDataValue
  > ```

  为了测试这个功能，可以在 person 对象的右花括号前面添加的下面的呢容：

  > ```
  > var myDataName = 'height'
  > var myDataValue = '1.75m'
  > person[myDataName] = myDataValue
  > ```

  可以输入一下代码进行测试：

  > ```
  > person.height
  > ```

  这是使用点表示法无法做到的，点表示法只能接受字面量的成员的名字，不接受变量作为名字。
