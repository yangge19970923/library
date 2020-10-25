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
  },
  {
    path:'/search',
    name:'Search',
    meta: {
      name:'搜索'
    },
    component: () => import("@/views/Search.vue")
  },
  {
    path: '/rank',
    name: 'Rank',
    meta: {
      name: '排行'
    },
    component: () => import("@/views/Rank.vue")
  },
  {
    path: '/classification',
    name:'Classification',
    meta: {
      name: '分类'
    },
    component: () => import("@/views/Classification.vue")
  },
  {
    path: '/wapsort',
    name: 'Wapsort',
    meta: {
      name: '详细分类'
    },
    component: () => import("@/views/Wapsort.vue")
  },
  {
    path: '/novelContent',
    name: 'NovelContent',
    meta: {
      name: '小说详情页面'
    },
    component: () => import("@/views/NovelContent.vue")
  },
  {
    path: '/mNovelContent',
    name:'MNovelContent',
    meta: {
      name: '移动端小说详情页面'
    },
    component: () => import("@/views/MNovelContent.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router;
router.beforeEach((to, from, next) => {
  // console.log(to);
  next();
})
