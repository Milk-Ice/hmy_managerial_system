const contentConfig = {
  pageName: 'goods',
  header: {
    title: '商品列表',
    btnTitle: '新建商品'
  },
  propsList: [
    { type: 'index', label: '序号', width: '80px' },
    { type: 'normal', label: '商品名称', prop: 'name', width: '150px' },
    { type: 'normal', label: '原价格', prop: 'oldPrice' },
    { type: 'normal', label: '新价格', prop: 'newPrice' },
    { type: 'normal', label: '商品描述', prop: 'desc', width: '150px' },
    { type: 'custom', label: '状态', prop: 'status', slotName: 'status' }, // 自定义
    {
      type: 'custom',
      label: '图片',
      prop: 'imgUrl',
      width: '200px',
      slotName: 'img'
    }, // 自定义
    { type: 'normal', label: '库存', prop: 'inventoryCount' },
    { type: 'normal', label: '销量', prop: 'saleCount' },
    { type: 'normal', label: '收藏', prop: 'favorCount' },
    { type: 'normal', label: '地址', prop: 'address' },
    { type: 'timer', label: '创建时间', prop: 'createAt', width: '180px' },
    { type: 'timer', label: '更新时间', prop: 'updateAt', width: '180px' },
    { type: 'handler', label: '操作', width: '250px' }
  ]
}
export default contentConfig
