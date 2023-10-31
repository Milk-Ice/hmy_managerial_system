import { ref } from "vue"
import PageModal from '@/components/page-modal/page-modal.vue'

// 回调函数的类型
type EditFnType = (data: any) => void

function usePageModal(editCallBack?: EditFnType) {
  const modalRef = ref<InstanceType<typeof PageModal>>()

  // 新增
  function HandleNewClick() {
    modalRef.value?.setModalVisible()
    // console.log('Hook的formData', formData)
  }
  // 编辑
  function HandleEditClick(itemData: any) {
    modalRef.value?.setModalVisible(false, itemData)
    // 如果传过来了回调函数，就调用，并且把itemData传过去给回调函数
    if (editCallBack) editCallBack(itemData)
    // console.log(itemData)
  }
  return {
    modalRef,
    HandleNewClick,
    HandleEditClick
  }
}
/**
 * 将嵌套的菜单列表映射为包含所有菜单项的 ID 数组。
 *
 * @param {any[]} menuList - 嵌套的菜单列表
 * @returns {number[]} - 包含所有菜单项的 ID 数组
 */
export function mapMenuListToIds(menuList: any[]): number[] {
  const ids: number[] = []

  /**
   * 递归遍历菜单列表并将每个叶子菜单项的 ID 添加到 ids 数组中。
   *
   * @param {any[]} menu - 当前的菜单列表
   */
  function recurseGetId(menu: any[]) {
    for (const item of menu) {
      if (item.children) {
        // 继续递归处理子菜单
        recurseGetId(item.children)
      } else {
        // 添加叶子菜单项的 ID 到数组
        ids.push(item.id)
      }
    }
  }

  // 调用递归函数以开始遍历初始菜单列表
  recurseGetId(menuList)

  // 返回包含所有菜单项的 ID 数组
  return ids
}



/**
 * 从菜单映射到按钮的权限
 *@param menuList 菜单的列表
 @returns 权限的数据
 */
export function mapMenuListToPermisson(menuList: any[]) {
  const permission: string[] = []

  function recurseGetPermission(menu: any) {
    for (const item of menu) {
      if (item.type === 3) {
        permission.push(item.permission)
      } else {
        recurseGetPermission(item.children ?? [])
      }
    }
  }
  recurseGetPermission(menuList)
  return permission
}

export default usePageModal
