import { localCache } from '@/utils/cache'
import { BASE_URL, TIME_OUT } from './config'
import HMYRequest from './request'
import { LOGIN_TOKEN } from '@/gobal/constants'

const hmyRequest = new HMYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      const token = localCache.getCache(LOGIN_TOKEN)
      if (config.headers && token) {
        config.headers.Authorization = token
      }
      return config
    }
  }
})

export default hmyRequest
