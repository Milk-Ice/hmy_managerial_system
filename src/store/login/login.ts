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
import { mapMenuListToPermisson, mapMenuToRoute } from '@/utils/map_menus'
import useMainStore from '../main/main'

interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
  permissions: string[]
}

const useLoginStore = defineStore('login', {
  // 如何制定state的类型
  state: (): ILoginState => ({
    token: '',
    userInfo: {},
    userMenus: [],
    permissions: []
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

      // 请求所有的roles/department数据
      const mainStore = useMainStore()
      mainStore.fetchEntireDataAction()

      // 获取登陆用户的所有按钮权限
      const permisson = mapMenuListToPermisson(userMenus)
      this.permissions = permisson

      const routes = mapMenuToRoute(userMenus)
      routes.forEach((route) => router.addRoute('main', route))
      // console.log(routes)

      // 5.页面跳转(main页面)
      router.push('/main')
    },
    loadLoaclCacheAction() {
      const token = localCache.getCache(LOGIN_TOKEN)
      const userInfo = localCache.getCache('userInfo')
      const userMenus = localCache.getCache('userMenus')
      if (token && userInfo && userMenus) {
        this.token = token
        this.userInfo = userInfo
        this.userMenus = userMenus

        // 请求所有的roles/department数据
        const mainStore = useMainStore()
        mainStore.fetchEntireDataAction()

        // 获取登陆用户的所有按钮权限
        const permisson = mapMenuListToPermisson(userMenus)
        this.permissions = permisson

        // 动态添加路由
        const routes = mapMenuToRoute(userMenus)
        routes.forEach((route) => router.addRoute('main', route))
      }
    }
  }
})

export default useLoginStore
