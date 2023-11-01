import hmyRequest from '@/service'

export function getAmountListData() {
  return hmyRequest.get({
    url: '/goods/amount/list'
  })
}
