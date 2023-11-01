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
// 每个分类商品的销量
export function getGoodsCategorySaleData() {
  return hmyRequest.get({
    url: '/goods/category/sale'
  })
}
// 不同城市的销量数据
export function getGoodsAddressSaleData() {
  return hmyRequest.get({
    url: '/goods/address/sale'
  })
}
// 每个分类商品的收藏
export function getGoodsCategoryFavor() {
  return hmyRequest.get({
    url: '/goods/category/favor'
  })
}
