import hmyRequest from '@/service'

// 获取商品类别列表
export function postCategoryListData(queryInfo: any) {
  return hmyRequest.post({
    url: '/category/list',
    data: queryInfo
  })
}
