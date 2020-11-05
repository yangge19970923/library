import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store'
import Mobile from "./Mobile" //移动端界面
import PC from "./PC" //PC端界面

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    meta:{
      name:'登陆'
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/Login.vue')
  },
  ...PC,
  ...Mobile
]

const router = new VueRouter({
  routes
})

export default router;
const userInfo = store.state.user.userInfo;

router.beforeEach((to, from, next) => {
  if(to.path == "/login") {
    next();
  } else {
    if(userInfo.username) {
      next();
    } else {
      next("/login");
    }
  }
})
