import Vue from 'vue'
import App from './App.vue'
// 引入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from "vue-router"
// 引入视图
import Trends from "./views/Trends"
import Discovery from "./views/Discovery"
import Message from "./views/Message"
import Personal from "./views/Personal"
// 使用
Vue.use(ElementUI);
Vue.use(VueRouter);
// 配置路由
const routes = [
  { path: '/', component: Trends },
  { path: '/trends', component: Trends },
  { path: '/discovery', component: Discovery },
  { path: '/message', component: Message },
  { path: '/personal', component: Personal },
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
