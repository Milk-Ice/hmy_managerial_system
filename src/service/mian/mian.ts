import hmyRequest from "..";

export function getEntireRoles() {
  return hmyRequest.post({
    url: '/role/list'
  })
}
export function getEntireDepartment() {
  return hmyRequest.post({
    url: '/department/list'
  })
}
// 获取全部菜单数据
export function getEntireMenuList() {
  return hmyRequest.post({
    url: '/menu/list'
  })
}
