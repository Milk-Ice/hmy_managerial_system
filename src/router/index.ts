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
export default router
