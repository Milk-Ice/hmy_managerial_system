import hmyRequest from '@/service'
// 创建你的故事
export function postStory(querInfo: any) {
  return hmyRequest.post({
    url: '/story',
    data: querInfo
  })
}
// 获取故事列表
export function postStoryList(querInfo: any) {
  return hmyRequest.post({
    url: '/story/list',
    data: querInfo
  })
}
