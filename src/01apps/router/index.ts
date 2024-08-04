import MainLayout from 'apps/layouts/MainLayout.vue'
import { ROUTE_NAMES } from 'shared/constants'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL ?? '/'),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: MainLayout,
      redirect: { name: ROUTE_NAMES.authorization },
      children: [
        {
          path: '/Authorization',
          name: ROUTE_NAMES.authorization,
          component: () => import('pages/PAuthorizationPage'),
        },
        {
          path: '/SignUp',
          name: ROUTE_NAMES.signup,
          component: () => import('pages/PSignupPage'),
        },
        {
          path: '/chat',
          name: ROUTE_NAMES.chat,
          component: () => import('pages/PChatPage'),
        },
        {
          path: '/profile',
          name: ROUTE_NAMES.profile,
          component: () => import('pages/PProfilePage'),
        },
      ],
    },
  ],
})

export default router
