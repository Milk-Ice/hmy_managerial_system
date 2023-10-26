<script setup lang='ts'>
import DepartmentSearch from '../department/department-search.vue'
import DepartmentContent from '../department/department-content.vue'
</script>

<template>
  <div class="department">
    <department-search />
    <department-content />
  </div>
</template>

<style lang='less' scoped>
.department {
  border-radius: 8px;
  overflow: hidden;
}
</style>
