import myRequest from '../..'
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

//创建用户
export function newUserData(userInfo: any) {
  return myRequest.post({
    url: '/users',
    data: userInfo
  })
}
// 编辑用户
export function editUserData(id: number, userInfo: any) {
  return myRequest.patch({
    url: `users/${id}`,
    data: userInfo
  })
}
