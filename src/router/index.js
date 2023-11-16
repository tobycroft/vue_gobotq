// Composables
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/user/Login.vue'),
  },
  {
    path: '/user/login',
    component: import('@/views/user/Login.vue'),
  },
  {
    path: '/center',
    component: import('@/views/Center.vue'),
  },
  {
    path: '/center/bot',
    component: import('@/views/v1/Bot.vue'),
  },
  {
    path: '/center/group',
    component: import('@/views/v1/Group.vue'),
  },
  {
    path: '/center/index',
    component: import('@/views/v1/Index.vue'),
  },
  {
    path: '/center/user',
    component: import('@/views/v1/User.vue'),
  },
  {
    path: '/v1/bot/detail',
    component: import('@/views/v1/bot/detail.vue'),
  },
  {
    path: '/v1/bot/detail',
    component: import('@/views/v1/User.vue'),
  }, {
    path: '/v1/bot/detail',
    component: import('@/views/v1/User.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
