import { createRouter, createWebHashHistory } from 'vue-router'
import TreeSelect from '../components/TreeSelect/TreeSelect.vue'
import Container from '../components/Container.vue'

const routes = [
  {
    path: '/',
    component: Container,
  },
  {
    path: '/treeselect',
    component: TreeSelect
  },
  // {
  //   path: '/login',
  //   component: () => import('../views/login/index.vue')
  // },
  // {
  //   path: '/',
  //   component: () => import('../layout/index.vue'),
  //   redirect: '/profile',
  //   children: [
  //     {
  //       path: '/profile',
  //       name: 'profile',
  //       component: () => import('../views/profile/index'),
  //       meta: {
  //         title: 'profile',
  //         icon: 'el-icon-user'
  //       }
  //     },
  //     {
  //       path: '/404',
  //       name: '404',
  //       component: () => import('../views/error-page/404')
  //     },
  //     {
  //       path: '/401',
  //       name: '401',
  //       component: () => import('../views/error-page/401')
  //     }
  //   ]
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
