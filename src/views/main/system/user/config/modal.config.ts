import type { IModalConfig } from '@/components/page-modal/type'

const modalConfig: IModalConfig = {
  pageName: 'users',
  header: {
    newTitle: '新建用户',
    editTitle: '编辑用户'
  },
  formItems: [
    {
      type: 'input',
      label: '用户名',
      prop: 'name',
      placeholder: '请输入用户名称'
    },

    {
      type: 'input',
      label: '真实姓名',
      prop: 'realname',
      placeholder: '请输入用真实姓名'
    },
    {
      type: 'input',
      label: '密码',
      prop: 'password',
      placeholder: '请输入密码'
    },
    {
      type: 'input',
      label: '手机号',
      prop: 'cellphone',
      placeholder: '请输入用户领导'
    },
    {
      type: 'select',
      label: '上级部门',
      prop: 'departmentId',
      placeholder: '请选择上级部门',
      options: []
    },
    {
      type: 'select',
      label: '角色',
      prop: 'roleId',
      placeholder: '请选择角色',
      options: []
    }
  ]
}

export default modalConfig
