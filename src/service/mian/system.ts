import myRequest from '..'

export function postUserListData(queryInfo: any) {
  return myRequest.post({
    url: '/users/list',
    data: queryInfo
  })
}
