// Composables
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    name:'login',
    component: () => () => import('@/views/user/Login.vue'),
  },
  {
    path: '/user/login',
    name:'login2',
    component: () => import('@/views/user/Login.vue'),
  },
  {
    path: '/center',
    name:'center',
    component: () => import('@/views/Center.vue'),
  },
  {
    path: '/center/bot',
    name:'bot',
    component: () => import('@/views/v1/Bot.vue'),
  },
  {
    path: '/center/group',
    name:'group',
    component: () => import('@/views/v1/Group.vue'),
  },
  {
    path: '/center/index',
    name:'index',
    component: () => import('@/views/v1/Index.vue'),
  },
  {
    path: '/center/user',
    name:'user',
    component: () => import('@/views/v1/User.vue'),
  },
  {
    path: '/v1/bot/detail',
    name:'detail',
    component: () => import('@/views/v1/bot/detail.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
