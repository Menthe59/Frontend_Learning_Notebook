// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//import {createRouter,createMemoryHistory} from 'vue-router'
//import * as VueRouter from 'vue-router'
import VueRouter from './router'

//显式声明使用VueRouter
//Vue.use(VueRouter);
//这句之后VueRouter安装完毕



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //配置路由
  router:VueRouter,
  components: { App },
  template: '<App/>'
})
