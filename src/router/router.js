import Vue from 'vue'
import VueRouter from "vue-router"

// 引入视图
import Trends from "../views/Trends"
import Discovery from "../views/Discovery"
import Message from "../views/Message"
import Personal from "../views/Personal"
import LoginRegister from "../views/LoginRegister"

Vue.use(VueRouter);

// 配置路由
const routes = [
    { path: '/', component: Trends },
    { path: '/trends', component: Trends },
    { path: '/discovery', component: Discovery },
    { path: '/message', component: Message },
    { path: '/personal', component: Personal },
    { path: '/login', component: LoginRegister },
  ];

const router = new VueRouter({
    // mode: history,
    routes // (缩写) 相当于 routes: routes
})

export default router

