import myRequest from '..'
import type { IAccount } from '@/types/login'

// 携带用户信息发送登陆请求
export function accountLoginRequest(account: IAccount) {
  return myRequest.post({
    url: '/login',
    data: account
  })
}

// 根据id获取用户信息
export function getUserInfoById(id: number) {
  return myRequest.get({
    url: `/users/${id}`
  })
}
// 根据id获取用户角色菜单
export function getUserMenusByRoleId(id: number) {
  return myRequest.get({
    url: `/role/${id}/menu`
  })
}
