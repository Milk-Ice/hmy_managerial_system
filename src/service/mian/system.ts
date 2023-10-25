import myRequest from '..'
// 查询User
export function postUserListData(queryInfo: any) {
  return myRequest.post({
    url: '/users/list',
    data: queryInfo
  })
}
// 删除User
export function deleteUserListData(id: number) {
  return myRequest.delete({
    url: `/users/${id}`
  })
}
// 新增user
export function addUserListData(queryInfo: any) {
  return myRequest.post({
    url: '/users',
    data: queryInfo
  })
}
