<script setup lang="ts">
interface IProps {
  header?: string
}
withDefaults(defineProps<IProps>(), {
  header: '卡片的头部标题'
})
</script>

<template>
  <div class="chart-card">
    <el-card class="box-card" :header="header">
      <slot></slot>
    </el-card>
  </div>
</template>

<style lang="less" scoped></style>
