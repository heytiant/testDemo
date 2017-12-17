// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from "./store/store";
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// Vue.use(ElementUI, { size: 'small' })
require("./css/main.css");


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // render:h=>h(App),
  router,
  //store注入到顶层元素
  store,
  template: '<App/>',
  components: { App }
})

