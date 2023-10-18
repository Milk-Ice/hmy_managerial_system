import { BASE_URL, TIME_OUT } from './config'
import HMYRequest from './request'

const hmyRequest = new HMYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default hmyRequest
