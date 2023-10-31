import { ref } from "vue"
import PageModal from '@/components/page-modal/page-modal.vue'

// 回调函数的类型
type CallbackFnType = (data?: any) => void

function usePageModal(newCallBack?: CallbackFnType, editCallBack?: CallbackFnType) {
  const modalRef = ref<InstanceType<typeof PageModal>>()

  // 新增
  function HandleNewClick() {
    modalRef.value?.setModalVisible()
    // console.log('Hook的formData', formData)
    if (newCallBack) newCallBack()
  }
  // 编辑
  function HandleEditClick(itemData: any) {
    modalRef.value?.setModalVisible(false, itemData)
    // 如果传过来了回调函数，就调用，并且把itemData传过去给回调函数
    if (editCallBack) editCallBack(itemData)
    // console.log('我是将要提交给回调函数的数据', itemData)
  }
  return {
    modalRef,
    HandleNewClick,
    HandleEditClick
  }
}


export default usePageModal
