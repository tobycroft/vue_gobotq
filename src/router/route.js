// Composables
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    // component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import('@/views/Home.vue'),
        component: () => import('@/views/user/Login.vue'),
      },

    ],
  },
  {
    path: '/user/login',
    component: () => import('@/views/user/Login.vue'),
  },
  {
    path: '/center',
    component: () => import('@/views/Center.vue'),
  },
  {
    path: '/center/bot',
    component: () => import('@/views/v1/Bot.vue'),
  },
  {
    path: '/center/group',
    component: () => import('@/views/v1/Group.vue'),
  },
  {
    path: '/center/index',
    component: () => import('@/views/v1/Index.vue'),
  },
  {
    path: '/center/user',
    component: () => import('@/views/v1/User.vue'),
  },
  {
    path: '/v1/bot/detail',
    component: () => import('@/views/v1/bot/subpage/detail.vue'),
  },
  {
    path: '/v1/bot/edit',
    component: () => import('@/views/v1/bot/subpage/edit.vue'),
  },

  {
    path: '/v1/group/edit',
    component: () => import('@/views/v1/group/subpage/edit.vue'),
  },
  {
    path: '/v1/index/botrequest/edit',
    component: () => import('@/views/v1/index/botRequest/add.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
