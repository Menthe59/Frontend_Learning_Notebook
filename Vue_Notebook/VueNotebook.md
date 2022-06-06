### 00 Summary

Vue 的相关内容和速查手册

### 01 可参考的相关文档

- Vue 官方手册，vue2.x[🖱🔗](https://cn.vuejs.org/v2/guide/)
- Vue 官方手册，vue3.x[🖱🔗](https://v3.cn.vuejs.org/guide/introduction.html)
- elementUI[🖱🔗](https://element-plus.gitee.io/zh-CN/guide/design.html)

### 02 Vue 是什么

- Vue 被设计为自底向上逐层应用，Vue 的核心 _只关注视图层_ ，方便于第三方库或既有项目整合。  
  这里的视图层指类似于 HTML+CSS+JS，用处是给用户展示和刷新后台的数据，有关网络通信、页面跳转的内容一律不关心。网络通信方面有 axios，网页跳转有 vue-router，以及状态管理 vuex。

- Vue 的核心是一个允许采用简洁的模板语法来声明式的将数据渲染进 DOM 的系统。

- Vue 的一个特色：计算属性；  
  Axios 是前端通信框架，因为 Vue 边界很明确，就算用来处理 DOM 的，根据 Soc 关注度分离原则，此时就需要一个额外的通信框架于服务器交流，也可以选择 jQuery 提供的 AJAX 功能。

- Vue 是 MVVM 模式的实现者，其中：

  Modle，模型层，在这里表示 JavaScript 对象；  
  View，视图层，在这里表示 DOM(HTML 操作的元素)；  
  ViewModel，连接视图层和数据的中间件，Vue.js 就是 MVVM 中 ViewModel 层的实现者。

  在 MVVM 框架中，是 _不允许数据和视图直接通信的_ ,只能通过 ViewModel 来通信，而 ViewModel 就是定义了一个 Observer 观察者。

  ViewModel 能够观察到数据的变化并对视图对应的内容进行更新；
  ViewModel 能够监听到视图的变化，并能够通知数据发生改变。

  Vue.js 就是一个 MVVM 的实现者，核心就是 _实现了 DOM 监听与数据的绑定_ 。

- 一些 MVVM 补充：MVVC 源自于 MVC(Model-View-Controller)模式，MVVM 的核心是 ViewModel 层，负责转换 Model 中数据对象来让数据变得更容易管理和使用，作用为，该层向上与视图层进行双向数据绑定、向下与 Model 层通过接口请求进行数据交互。

  为什么使用 MVVM：

  低耦合，View 可以独立于 Model 变化和修改，一个 ViewModel 可以绑定到不同的 View 上，View 和 MOdell 的变化相互独立；  
   可复用，可以把一些视图逻辑放在一个 ViewModel 里，让很多 View 重用这段视图逻辑；  
   独立开发，开发人员可以专注于业务逻辑和数据开发(ViewModel)，设计人员可以专注于页面设计；  
   可测试，可达到只针对 ViewModel 进行测试。

  视图状态和行为都封装在了 ViewModel 里，这样的封装使得 ViewModel 可以完整地去描述 View 层，实现了双向的绑定，ViewModel 的内容会实时显示在 View 层，不必地效又麻烦的通过操纵 DOM 更新视图。

  View 层展现的不是 Model 层的数据，而是 ViewModel 层的数据，由 ViewModel 负责与 Model 层交互，这就 _完全解耦了 View 层和 Model 层_ ，这个解耦是至关重要的，是 _前后端分离方案实施的重要一环_。

### 03 第一个 Vue 程序

- 第一个 Vue 程序：  
  (使用 idea 的 Vue 插件)

  首先，创建一个 HTML 文件：

  > ```
  > <!DOCTYPE html>
  > <html lang="en">
  > <head>
  >     <meta charset="UTF-8">
  >     <title>Title</title>
  > </head>
  > <body>
  > </body>
  > ```

  引入 Vue.js（这个网址可以避免网络问题带来的无法连接）：

  > ```
  > <script src="https://cdn.staticfile.org/vue/2.5.21/vue.min.js"></script>
  > ```

  创建 Vue 实例：

  > ```
  > <script>
  >     var vm = new Vue({
  >          /**使用el绑定元素id,例如这里绑定名为app的div*/
  >          el:"#app",
  >          /**数据对象中有一个名为message的属性并设置初始值为hello,Vue*/
  >          data:{
  >              message:"hello,Vue"
  >          }
  >      });
  > ```

  创建页面元素，并将数据绑定：

  > ```
  > <div id="app">
  >     {{message}}
  > </div>
  > ```

  这时可以在控制台修改数据，改变 View 层，有以下三种方法可用：

  > ```
  > vm.$data.message="test contest"
  > vm.message="test contest"
  > vmdata.message="test contest"
  > ```

### 04 基础语法

- 绑定：v-bind

  第一个 Vue 应用已经创建，看似只是渲染了一个字符串模板，但 Vue 在背后做了大量的工作，现在数据和 DOM 已经被建立了关联，所有东西都是响应式的，在控制台操作对象属性界面可以实时更新。

  除此之外还可以使用`v-bind`来绑定元素特性，`v-bind`被称为指令（指令前缀的`v-`表示这是 Vue 提供的特殊`attribute`），指令会在渲染的 DOM 上应用特殊的响应式行为。这里`v-bind`的含义是：将这个节点元素的 `title` 特征和 Vue 实例的 `message` 属性保持一致。

  > ```
  > <!DOCTYPE html>
  > <head>
  > <title>Title</title>
  >   </head>
  >     <body>
  >       <div id="app1">
  >           <span v-bind:title="message">
  >               鼠标悬停几秒钟查看此处动态绑定的提示信息！
  >           </span>
  >       </div>
  >   <script src="https://cdn.staticfile.org/vue/2.5.21/vue.min.js"></script>
  >   <script>
  >       var vm = new Vue({
  >            el:"#app",
  >            data:{
  >               message: \'页面加载于 \' + new Date().toLocaleString()
  >            }
  >       });
  >   </script>
  >   </body>
  > ```

  这时如果打开浏览器的控制台， 输入`app,message=‘新消息’`，稍等片刻就会再次看到这个绑定了 title 特性的 HTML 元素已经进行了更新。有关控制台的操作可在很多变更后进行测试，不再赘述。

- 条件：v-if、v-else、v-else-if，代码见`JudgementTest.html`。

  view 层：

  > ```
  > <div id="app">
  >      <h3 v-if="type===A">Yes</h3>
  >      <h3 v-else-if="type===B">No</h3>
  >      <h3 v-else-if="type===C">Test Option</h3>
  > </div>
  > ```

  ViewModel 层：

  > ```
  > var vm2 = new Vue({
  >     el:'#app',
  >     data:{
  >         type:'A'
  >         }
  >  })
  > ```

- 循环：v-for，代码见`LoopTest.html`。

  view 层：

  > ```
  > <!--类似foreach，循环输出数组的每一项-->
  > <div id="app">
  >      <div v-for="item in items">
  >          ---{{item.key}}---{{item.message}}---{{item.name}}---
  >      </div>
  > </div>
  > ```

  model 层：

  > ```
  > <!--创建数组为元素对象-->
  > var vmdata={
  >     items : [
  >         {message : "First content",name : "name1",key : "key1"}
  >         {message : "Second content",name : "name2",key : "key2"}
  >         {message : "Third content",name : "name3",key : "key3"}
  >         ]
  >  }
  > ```

  ViewModel 层：

  > ```
  > var vm = new Vue({
  >    el:'app',
  >    data:vmdata,
  > })
  > ```

- 监听事件：v-on

  以绑定 click 事件为例：

  view 层：

  > ```
  > <div id="app">
  >      <button v-on:click="sayHi">点击</button>
  > </div>
  > ```

  ViewModel 层：

  > ```
  > var vm = new Vue({
  >    el:'#app',
  >    data:{
  >        massage:"hello world"
  >    },
  >    methods:{
  >    sayHi:function(event){
  >         alert(this.message);
  >         //this在方法里指向当前vue实例
  >         }
  >     }
  >  });
  > ```

- 表单双向绑定

  Vue 是一个 MVVM 框架，即 _数据双向绑定_ ，当数据发生变化的时候，视图也就发生变化，当视图发生变化数据也会跟着同步变化。这也算是 Vue.js 的精髓之处了。
  值得注意的是，这里说的数据双向绑定，一定是对于 UI 控件来说的非 UI 控件不会涉及到数据双向绑定。单向数据绑定是使用状态管理工具的前提。如果使用 Vuex，那么数据流也是单向的，这时就会和双向数据绑定冲突。

  可以用 v-model 指令在表单、及元素上创建双向数据绑定,它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但 v-model 本质上不过是语法糖，它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。要注意的是，v-model 会忽略所有表单元素的 value、checked、selected 特性的初始值而总是将 Vue 实例的数据作为数据来源，应该通过 JavaScript 在组件的 data 选项中声明初始值。

  代码见`TwowayBindTest.html`。

### 05 组件

- 组件是可复用的 Vue 实例，可以理解为一组可以复用的模板，可以使用小型、独立和通常可服用的组件构建大型应用，几乎任意类型的应用都能以嵌套的组件树的形式来组织。

- Vue 中的组件本质上是一个具有预定义选项的实例，代码见`ComponentTest.html`、`componentTest_ofl.html`。

### 06 Vue 实例

- 当一个 Vue 实例被创建，它将`data`对象中的所有`property`加入到 Vue 的响应式系统中，这些`property`的值发生改变，视图将会产生"响应"，即匹配更新为新的值。

### 07 网络通信

- Axios 是一个开源的可以用在浏览器端和 NodeJS 的异步通信框架，主要作用就是实现 AJAX 异步通信，其功能特点如下：

  从浏览器中创建 XMLHttpRequests；  
   从 node.js 创建 http 请求；  
   支持 Promise API[JS 中链式编程]；  
   拦截请求和响应；  
   转换请求数据和响应数据；  
   取消请求；  
   自动转换 JSON 数据；  
   客户端支持防御 XSRF(跨站请求伪造)。

- 由于 Vue.js 是一个视图层框架并且作者严格准守 SoC(关注度分离原则)，所以 Vue.js 并不包含 AJAX 的通信功能，为了解决通信问题，作者单独开发了一个名为 vue-resource 的插件，不过在进入 2.0 版本以后停止了对该插件的维护并推荐了 Axios 框架。 _少用 jQuery，因为它操作 Dom 太频繁！_

- 第一个 Axios 应用程序：

  模拟一段 json 数据`data.json`用来测试，在钩子函数`mounted()`里使用 Axios 的 get 方法请求 Ajax，并自动将数据封装进 Vue 实例的数据对象中，data 对象里请求的返回参数格式必须和 json 格式一致，输出数据时注意绑定数据，例如，使用`v-bind`将 href 属性与 Vue 实例中的数据进行绑定。

### 08 计算属性

- 计算属性：调用方法时，每次都需要进行计算，有计算过程则必定产生系统开销，但如果这个结果并不是经常变化，那么就可以考虑将这个结果缓存起来，采用计算属性可以很方便的做到这一点，计算属性的主要特性就是为了将不经常变化的计算结果进行缓存，以节约系统开销。或者说，任何包含响应式数据的复杂逻辑都应该使用计算属性。

-
