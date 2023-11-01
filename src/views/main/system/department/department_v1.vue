<script setup lang="ts">
import { ref } from 'vue'
import DepartmentSearch from '@/views/main/system/department/c-cpns/department-search.vue'
// import DepartmentSearch from '@/components/page-search/page-search.vue'
import DepartmentContent from '@/views/main/system/department/c-cpns/department-content.vue'
import DepartmentModal from '@/views/main/system/department/c-cpns/department-modal.vue'

const contentRef = ref<InstanceType<typeof DepartmentContent>>()
const searchRef = ref<InstanceType<typeof DepartmentSearch>>()
const modalRef = ref<InstanceType<typeof DepartmentModal>>()

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
    <department-search
      ref="searchRef"
      @reset-click="HandleResetClick"
      @query-click="HandleQueryClick"
    />
    <department-content
      ref="contentRef"
      @edit-click="HandleEditClick"
      @new-click="HandleNewClick"
    />
    <department-modal ref="modalRef" />
  </div>
</template>

<style lang="less" scoped>
.department {
  border-radius: 8px;
  overflow: hidden;
}
</style>
