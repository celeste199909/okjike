import Vue from 'vue'
import VueRouter from "vue-router"

// 引入视图
import Home from "../views/Home"
import Discovery from "../views/Discovery"
import Trends from "../views/Trends"
import Message from "../views/Message"
import Personal from "../views/Personal"

import LoginRegister from "../views/LoginRegister"
import ArticleDetails from "../views/ArticleDetails"
import UserDetails from "../views/UserDetails"

Vue.use(VueRouter);

// 配置路由
const routes = [
    { path: '/', component: Home },
    { path: '/discovery', component: Discovery },
    { path: '/trends', component: Trends },
    { path: '/message', component: Message },
    { path: '/personal', component: Personal },

    { path: '/login', component: LoginRegister },
    { path: '/details/:id', component: ArticleDetails },
    { path: '/user/:id', component: UserDetails },
    
  ];

const router = new VueRouter({
    mode: "history",
    routes // (缩写) 相当于 routes: routes
})

export default router

