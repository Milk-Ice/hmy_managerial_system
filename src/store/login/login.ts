import { accountLoginRequest } from "@/service/login/login";
import { defineStore } from "pinia";
import { localCache } from '@/utils/cache'
import type { IAccount } from "@/types/login"
import { LOGIN_TOKEN } from "@/components/gobal/constants";
import router from "@/router";
const useLoginStore = defineStore('login', {
  state: () => ({
    id: '',
    token: localCache.getCache(LOGIN_TOKEN) ?? '',
    name: ''
  }),
  actions: {
    async loginAccountAction(account: IAccount) {
      const loginResult = await accountLoginRequest(account)
      this.id = loginResult.data.id
      this.token = loginResult.data.token
      this.name = loginResult.data.name

      // 进行本地缓存
      localCache.setCache(LOGIN_TOKEN, this.token)

      // 5.页面跳转(main页面)
      router.push('/main')
    }
  }
})
export default useLoginStore
