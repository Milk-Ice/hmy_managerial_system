import type { IModalConfig } from '@/components/page-modal/type'

const modalConfig: IModalConfig = {
  pageName: 'department',
  header: {
    newTitle: '新建商品',
    editTitle: '编辑商品'
  },
  formItems: [
    { type: 'input', label: '商品名称', prop: 'name', width: '150px' },
    { type: 'input', label: '原价格', prop: 'oldPrice' },
    { type: 'input', label: '新价格', prop: 'newPrice' },
    { type: 'input', label: '商品描述', prop: 'desc', width: '150px' },
    {
      type: 'select',
      prop: 'status',
      label: '商品状态',
      placeholder: '请选择查询的商品状态',
      options: [
        { label: '启用', value: 1 },
        { label: '禁用', value: 0 }
      ]
    },
    // { type: 'select', label: '状态', prop: 'status', options: [] },
    {
      type: 'custom',
      prop: 'imgUrl',
      label: '图片',
      slotName: 'img',
      width: '200px'
    }, // 自定义
    { type: 'input', label: '库存', prop: 'inventoryCount' },
    { type: 'input', label: '销量', prop: 'saleCount' },
    { type: 'input', label: '收藏', prop: 'favorCount' },
    { type: 'input', label: '地址', prop: 'address' }
  ]
}

export default modalConfig
