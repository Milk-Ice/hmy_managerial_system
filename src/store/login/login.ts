import { accountLoginRequest, getUserInfoById, getUserMenuById } from "@/service/login/login";
import { defineStore } from "pinia";
import { localCache } from '@/utils/cache'
import type { IAccount } from "@/types/login"
import { LOGIN_TOKEN } from "@/components/gobal/constants";
import router from "@/router";
interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
}

const useLoginStore = defineStore('login', {
  state: (): ILoginState => ({
    token: localCache.getCache(LOGIN_TOKEN) ?? '',
    userInfo: {},
    userMenus: []
  }),
  actions: {
    async loginAccountAction(account: IAccount) {
      const loginResult = await accountLoginRequest(account)
      const id = loginResult.data.id
      this.token = loginResult.data.token

      // 2.进行本地缓存
      localCache.setCache(LOGIN_TOKEN, this.token)

      // 3.获取用户登陆的详细信息
      const userInfoReault = await getUserInfoById(id)
      this.userInfo = userInfoReault.data
      console.log(this.userInfo.role)

      //4.根据角色获取用户的权限
      const userMenuResult = await getUserMenuById(this.userInfo.role.id)
      this.userMenus = userMenuResult.data

      // 5.页面跳转(main页面)
      router.push('/main')
    }
  }
})
export default useLoginStore
