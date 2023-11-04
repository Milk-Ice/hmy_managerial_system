<template>
  <el-table :data="tableData" style="width: 100%" size="large">
    <el-table-column prop="stack" label="stack" width="200px" />
    <el-table-column prop="desc" label="desc" />
  </el-table>
</template>

<script lang="ts" setup>
import tableData from './data/data'
</script>

<style>
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>
