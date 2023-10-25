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
