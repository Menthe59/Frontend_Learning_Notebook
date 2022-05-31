### 00 Summary

Vue 的相关内容和速查手册

### 01 可参考的相关文档

### 02 Vue 是什么

- Vue 被设计为自底向上逐层应用，Vue 的核心 _只关注视图层_ ，方便于第三方库或既有项目整合。  
  这里的视图层指，HTML+CSS+JS，用处是给用户展示和刷新后台的数据，有关网络通信、页面跳转的内容一律不关心。网络通信方面有 axios，网页跳转有 vue-router，以及状态管理 vuex。

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

  引入 Vue.js：

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

### 04 基础语法指令

- 绑定：v-bind

  在创建好第一个 Vue 应用后，看似只是渲染了一个字符串模板，但 Vue 在背后做了大量的工作，现在数据和 DOM 已经被建立了关联，所有东西都是响应式的，在控制台操作对象属性界面可以实时更新。

  除此之外还可以使用`v-bind`来绑定元素特性，`v-bind`被称为指令，指令会在渲染的 DOM 上应用特殊的响应式行为。这里`v-bind`的含义是：将这个节点元素的 title 特征和 Vue 实力的 message 属性保持一致。

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

- 条件判断语句：v-if、v-else、v-else-if

- 循环：v-for

- 监听事件：v-on

- 表单双向绑定、组件

### 05 组件

-
