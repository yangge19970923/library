const routes = [
    {
        path: '/mNovelContent',
        name:'MNovelContent',
        meta: {
          name: '移动端小说详情页面'
        },
        component: () => import("@/views/Mobile/MNovelContent.vue")
    },
]

export default routes;