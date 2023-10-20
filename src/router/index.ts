import { LOGIN_TOKEN } from "@/components/gobal/constants";
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
      component: () => import("../views/login.vue/Login.vue")
    },
    {
      path: '/main',
      component: () => import("../views/main.vue/Main.vue")
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
