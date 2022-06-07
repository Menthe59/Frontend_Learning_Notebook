//创建一个变量sayHelloTest，使用require接收在hello_Vue_test.js暴漏的方法
var sayHelloTest = require("./hello_Vue_test");
//调用sayHelloTest中的sayHello方法
sayHelloTest.sayHello();