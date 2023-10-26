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

// 针对页面的网络请求增删改查
export function postPageListData(pageName: string, queryInfo: any) {
  return myRequest.post({
    url: `/${pageName}/list`,
    data: queryInfo
  })
}
// 删除User
export function deletePageListData(pageName: string, id: number) {
  return myRequest.delete({
    url: `/${pageName}/${id}`
  })
}

//创建用户
export function newPageData(pageName: string, userInfo: any) {
  return myRequest.post({
    url: `/${pageName}`,
    data: userInfo
  })
}
// 编辑用户
export function editPageData(pageName: string, id: number, userInfo: any) {
  return myRequest.patch({
    url: `${pageName}/${id}`,
    data: userInfo
  })
}
