import myRequest from '..'
import type { IAccount } from "@/types/login"

export function accountLoginRequest(account: IAccount) {
  return myRequest.post({
    url: '/login',
    data: account
  })
}
