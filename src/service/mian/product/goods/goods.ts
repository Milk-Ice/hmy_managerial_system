import hmyRequest from '@/service'

// 获取商品列表
export function getGoodListData(queryInfo: any) {
  return hmyRequest.post({
    url: '/goods/list',
    data: queryInfo
  })
}
