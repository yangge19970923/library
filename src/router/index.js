import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    meta:{
      name:'首页'
    },
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    meta:{
      name:'登陆'
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/Login.vue')
  },
  {
    path:'/bookshelf',
    name:'Bookshelf',
    meta:{
      name:'书架'
    },
    component: () => import('@/views/Bookshelf.vue')
  },
  {
    path:'/novelDetail',
    name:'NovelDetail',
    meta:{
      name:'小说详情'
    },
    component: () => import("@/views/NovelDetail.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
