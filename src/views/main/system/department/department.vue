<script setup lang='ts'>
import { ref } from 'vue';
// import DepartmentSearch from '@/views/main/system/department/c-cpns/department-search.vue'
import PageSearch from '@/components/page-search/page-search.vue'
import PageContent from '@/components/page-search/page-content.vue'
import PageModal from '@/components/page-search/page-modal.vue'
import searchConfig from './config/search.config'
import contentConfig from './config/content.config';

const contentRef = ref<InstanceType<typeof PageContent>>()
const searchRef = ref<InstanceType<typeof PageSearch>>()
const modalRef = ref<InstanceType<typeof PageModal>>()

// 重置
function HandleResetClick(queryInfo: any) {
  contentRef.value?.fetchPageListData(queryInfo)
}
// 查询
function HandleQueryClick(queryInfo: any) {
  contentRef.value?.fetchPageListData(queryInfo)
}
// 新增
function HandleNewClick(formData: any) {
  modalRef.value?.setModalVisible(formData)

}
// 编辑
function HandleEditClick(formData: any) {
  modalRef.value?.setModalVisible(false, formData)
}
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
    <page-modal ref="modalRef" />
  </div>
</template>

<style lang='less' scoped>
.department {
  border-radius: 8px;
  overflow: hidden;
}
</style>
