
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './mock/MockServer'//定义一次就可以访问内部定义好的数据接口
new Vue({
  el: '#app',
render:h=>h(App),
  router,
  store
})
