import { ref } from 'vue'
import PageContent from '@/components/page-content/page-content.vue'

function usePageContent() {
  const contentRef = ref<InstanceType<typeof PageContent>>()

  // 重置
  function HandleResetClick(queryInfo: any) {
    contentRef.value?.fetchPageListData(queryInfo)
  }
  // 查询
  function HandleQueryClick(queryInfo: any) {
    contentRef.value?.fetchPageListData(queryInfo)
  }
  return {
    contentRef,
    HandleResetClick,
    HandleQueryClick
  }
}
export default usePageContent
