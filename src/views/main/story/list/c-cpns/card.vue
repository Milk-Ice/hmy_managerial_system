<!-- <script setup lang="ts">
import useSystemStore from '@/store/main/system/system'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
const systemStore = useSystemStore()
const { pageList } = storeToRefs(systemStore)
</script>

<template>
  <div class="card">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>{{ pageList.title }}</span>
          <el-button class="button" text>Operation button</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </el-card>
  </div>
</template>

<style lang="less" scoped>
.card {
  color: red;
}
</style> -->
