import hmyRequest from '@/service'

// 商品数据统计的数量
export function getAmountListData() {
  return hmyRequest.get({
    url: '/goods/amount/list'
  })
}
// 每个分类商品的个数(饼图)
export function getGoodsCategoryCounttData() {
  return hmyRequest.get({
    url: '/goods/category/count'
  })
}
