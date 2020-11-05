import Home from '@/views/PC'
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
        path:'/bookshelf',
        name:'Bookshelf',
        meta:{
          name:'书架'
        },
        component: () => import('@/views/PC/Bookshelf.vue')
      },
      {
        path:'/novelDetail',
        name:'NovelDetail',
        meta:{
          name:'小说详情'
        },
        component: () => import("@/views/PC/NovelDetail.vue")
      },
      {
        path:'/search',
        name:'Search',
        meta: {
          name:'搜索'
        },
        component: () => import("@/views/PC/Search.vue")
      },
      {
        path: '/rank',
        name: 'Rank',
        meta: {
          name: '排行'
        },
        component: () => import("@/views/PC/Rank.vue")
      },
      {
        path: '/classification',
        name:'Classification',
        meta: {
          name: '分类'
        },
        component: () => import("@/views/PC/Classification.vue")
      },
      {
        path: '/wapsort',
        name: 'Wapsort',
        meta: {
          name: '详细分类'
        },
        component: () => import("@/views/PC/Wapsort.vue")
      },
      {
        path: '/novelContent',
        name: 'NovelContent',
        meta: {
          name: '小说详情页面'
        },
        component: () => import("@/views/PC/NovelContent.vue")
      },
]

export default routes;