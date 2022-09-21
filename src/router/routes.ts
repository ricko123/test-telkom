import { RouteConfig } from 'vue-router'
import Layout from '@/views/layouts/Layout.vue'
const routes: RouteConfig[] = [

  {
    path: '/',
    redirect: '/test1',
    component: Layout,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '/test1',
        name: 'test1',
        component: () =>
          import(/* webpackChunkName: "test1" */ '@/views/pages/Test1.vue')
      },
      {
        path: '/test2',
        name: 'test2',
        component: () =>
          import(/* webpackChunkName: "test2" */ '@/views/pages/Test2.vue')
      },
      {
        path: '/test3',
        name: 'test3',
        component: () =>
          import(/* webpackChunkName: "test3" */ '@/views/pages/Test3.vue')
      },
      {
        path: '/test4',
        name: 'test4',
        component: () =>
          import(/* webpackChunkName: "test4" */ '@/views/pages/Test4.vue')
      },
      {
        path: '/test5',
        name: 'test5',
        component: () =>
          import(/* webpackChunkName: "test5" */ '@/views/pages/Test5.vue')
      }
    ]
  }
]

export default routes
