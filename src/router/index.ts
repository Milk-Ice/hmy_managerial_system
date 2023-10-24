import { LOGIN_TOKEN } from "@/gobal/constants";
import { localCache } from "@/utils/cache";
import { firstMenu } from "@/utils/map_menus";
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
      name: 'login',
      component: () => import("../views/login/Login.vue")
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('../views/main/main.vue'),
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
  if (to.path.startsWith('/main') && !token) {
    return '/login'
  }

  // 如果进入mian
  if (to.path === '/main') {
    return firstMenu?.url
  }
})
export default router
