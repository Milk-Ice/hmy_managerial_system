import { ref } from "vue"
import PageModal from '@/components/page-modal/page-modal.vue'

function usePageModal() {
  const modalRef = ref<InstanceType<typeof PageModal>>()

  // 新增
  function HandleNewClick(formData: any) {
    modalRef.value?.setModalVisible(formData)

  }
  // 编辑
  function HandleEditClick(formData: any) {
    modalRef.value?.setModalVisible(false, formData)
  }
  return {
    modalRef,
    HandleNewClick,
    HandleEditClick
  }
}
export default usePageModal
