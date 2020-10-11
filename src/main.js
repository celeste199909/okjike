import Vue from 'vue'
import App from './App.vue'
// 
import router from './router/router'

// 引入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from "axios"
axios.defaults.baseURL = 'http://localhost:8080';
Vue.prototype.axios = axios


// 使用
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

