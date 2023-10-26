<script setup lang='ts'>
import { ref } from 'vue';
import DepartmentSearch from '@/views/main/system/department/c-cpns/department-search.vue'
import DepartmentContent from '@/views/main/system/department/c-cpns/department-content.vue'
const contentRef = ref<InstanceType<typeof DepartmentContent>>()
const searchRef = ref<InstanceType<typeof DepartmentSearch>>()
// 重置
function HandleResetClick(queryInfo: any) {
  contentRef.value?.fetchPageListData(queryInfo)
}
// 查询
function HandleQueryClick(queryInfo: any) {
  contentRef.value?.fetchPageListData(queryInfo)
}
</script>

<template>
  <div class="department">
    <department-search ref="searchRef" @reset-click="HandleResetClick" @query-click="HandleQueryClick" />
    <department-content ref="contentRef" />
  </div>
</template>

<style lang='less' scoped>
.department {
  border-radius: 8px;
  overflow: hidden;
}
</style>
