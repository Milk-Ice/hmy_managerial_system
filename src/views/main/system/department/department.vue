<script setup lang='ts'>
import { ref, computed } from 'vue';
// import DepartmentSearch from '@/views/main/system/department/c-cpns/department-search.vue'
import PageSearch from '@/components/page-search/page-search.vue'
import PageContent from '@/components/page-content/page-content.vue'
import PageModal from '@/components/page-modal/page-modal.vue'

import searchConfig from './config/search.config'
import contentConfig from './config/content.config'
import modalConfig from './config/modal.config'
import useMainStore from '@/store/main/main'
import usePageContent from '@/hooks/usePageContent';
import usePageModal from '@/hooks/usePageModal'
// 对modalConfig进行操作
const modalConfigRef = computed(() => {
  const mainStore = useMainStore()
  // 因为从仓库拿到的数据是value和id形式，所以要重新映射
  const departments = mainStore.entireDepartments.map((item) => {
    return { label: item.name, value: item.id }
  })
  // 把映射后的数据加入formItems
  modalConfig.formItems.forEach((item) => {
    if (item.prop === 'parentId') {
      item.options.push(...departments)
    }
  })

  return modalConfig
})

const searchRef = ref<InstanceType<typeof PageSearch>>()

// 点击search、content的逻辑
const { contentRef, HandleResetClick, HandleQueryClick } = usePageContent()
// 点击content、modal的逻辑
const { modalRef, HandleNewClick, HandleEditClick } = usePageModal()
</script>

<template>
  <div class="department">
    <page-search ref="searchRef" :search-config="searchConfig" @reset-click="HandleResetClick"
      @query-click="HandleQueryClick" />
    <page-content ref="contentRef" :content-config="contentConfig" @edit-click="HandleEditClick"
      @new-click="HandleNewClick">
      <template #leader="scope">自定义{{ scope.row[scope.prop] }}
      </template>
      <template #parent="scope">自定义{{ scope.row[scope.prop] }}
      </template>
    </page-content>
    <!-- page-modal接受一个名为modalConfig的属性 -->
    <page-modal :modal-config="modalConfigRef" ref="modalRef" />
  </div>
</template>

<style lang='less' scoped>
.department {
  border-radius: 8px;
  overflow: hidden;
}
</style>
