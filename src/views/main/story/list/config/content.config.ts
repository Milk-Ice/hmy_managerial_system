const contentConfig = {
  pageName: 'story',
  header: {
    title: '故事列表'
  },
  propsList: [
    { prop: 'title', label: '故事标题', width: '300px' },
    { prop: 'content', label: '故事列表' },
    { type: 'timer', label: '创建时间', prop: 'createAt', width: '200px' },
    { type: 'timer', label: '更新时间', prop: 'updateAt', width: '200px' }
  ]
}
export default contentConfig
