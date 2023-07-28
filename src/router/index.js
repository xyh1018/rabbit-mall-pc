import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/LayoutItem.vue'),
    children: [
      {
        path: '/',
        component: () => import('@/views/home/index.vue')
      },
      {
        path: '/category/:id',
        component: () => import('@/views/category/index.vue')
      },
      {
        path: '/category/sub/:id',
        component: () => import('@/views/category/sub.vue')
      },
      {
        path: '/goods/:id',
        component: () => import('@/views/goods/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior () {
    return {
      left: 0,
      top: 0
    }
  }
})

export default router
