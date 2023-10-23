import { defineStore } from 'pinia'
import {
  accountLoginRequest,
  getUserInfoById,
  getUserMenusByRoleId
} from '@/service/login/login'
import type { IAccount } from '@/types/login'
import { localCache } from '@/utils/cache'
import router from '@/router'
import { LOGIN_TOKEN } from '@/gobal/constants'
import type { RouteRecordRaw } from 'vue-router'

interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
}

const useLoginStore = defineStore('login', {
  // 如何制定state的类型
  state: (): ILoginState => ({
    token: localCache.getCache(LOGIN_TOKEN) ?? '',
    userInfo: localCache.getCache('userInfo') ?? {},
    userMenus: localCache.getCache('userMenus') ?? []
  }),
  actions: {
    async loginAccountAction(account: IAccount) {
      // 1.账号登录, 获取token等信息
      const loginResult = await accountLoginRequest(account)
      const id = loginResult.data.id
      this.token = loginResult.data.token
      localCache.setCache(LOGIN_TOKEN, this.token)

      // 2.获取登录用户的详细信息(role信息)
      const userInfoResult = await getUserInfoById(id)
      const userInfo = userInfoResult.data
      this.userInfo = userInfo

      // 3.根据角色请求用户的权限(菜单menus)
      const userMenusResult = await getUserMenusByRoleId(this.userInfo.role.id)
      const userMenus = userMenusResult.data
      this.userMenus = userMenus

      // 4.进行本地缓存
      localCache.setCache('userInfo', userInfo)
      localCache.setCache('userMenus', userMenus)

      // 1.获取菜单(userMenus代码写在位置)

      // 2.动态获取所有的路由对象
      // *放到数组路由对象都在独立的文件中
      // *从文件中将所有路由对象先读取数组
      const localRoute: RouteRecordRaw[] = []
      // 获取所有的ts文件
      const files = import.meta.glob('../../router/main/**/*.ts', { eager: true })//拿到的是对象类型
      // console.log(files)
      for (const key in files) {
        const module = files[key]
        // console.log(module.default)
        localRoute.push(module.default)
      }
      // 3.根据菜单去匹配正确的路由router.addRoute('main', xxx)
      for (const menu of userMenus) {
        for (const submenu of menu.children) {
          const route = localRoute.find((item) => item.path === submenu.url)
          if (route) router.addRoute('main', route)
        }
      }

      // 5.页面跳转(main页面)
      router.push('/main')
    }
  }
})

export default useLoginStore
