import { LOGIN_TOKEN } from "@/gobal/constants";
import { localCache } from "@/utils/cache";
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      component: () => import("../views/login/Login.vue")
    },
    {
      path: '/main',
      component: () => import('../views/main/Main.vue'),
      children: [
        {
          path: '/main/analysis/overview',
          component: () =>
            import('../views/main/analysis/overview/overview.vue')
        },
        {
          path: '/main/analysis/dashboard',
          component: () =>
            import('../views/main/analysis/dashboard/dashboard.vue')
        },
        {
          path: '/main/system/user',
          component: () => import('../views/main/system/user/user.vue')
        },
        {
          path: '/main/system/role',
          component: () => import('../views/main/system/role/role.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import("../views/NotFound/NotFound.vue")
    }
  ]

})
// 路由守卫
router.beforeEach((to) => {
  const token = localCache.getCache(LOGIN_TOKEN)
  if (to.path === '/main' && !token) {
    return '/login'
  }
})
export default router
