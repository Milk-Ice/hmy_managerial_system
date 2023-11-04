const contentConfig = {
  pageName: 'story',
  header: {
    title: '故事列表'
  },
  propsList: [
    { prop: 'title', label: '故事标题' },
    { prop: 'content', label: '故事列表', width: '1000px' },
    { type: 'timer', label: '创建时间', prop: 'createAt' },
    { type: 'timer', label: '更新时间', prop: 'updateAt' }
  ]
}
export default contentConfig
