import myRequest from '..'

export function postUserListData() {
  return myRequest.post({
    url: '/users/list',
    data: {
      offset: 0,
      size: 10
    }
  })
}
