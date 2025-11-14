import { createRouter, createWebHistory } from 'vue-router'
import adminRoutes from './admin' 
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...adminRoutes,
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/admin/LoginView.vue'),
    },
  ],
})

// ✅ Middleware check đăng nhập cho admin
router.beforeEach((to, from, next) => {
  const auth = useAuthStore()

  if (to.meta.requiresAuth && !auth.isLoggedIn) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
