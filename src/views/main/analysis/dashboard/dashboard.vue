<script setup lang="ts">
import { storeToRefs } from 'pinia';
import countCard from './c-cpns/count-card.vue'
import useAnalysisStore from '@/store/main/analysis/analysis'
// 1.发起数据的亲求
const analysisStore = useAnalysisStore()
analysisStore.fetchAnalysisDataAction()
// 2.从store获取数据
const { amountList } = storeToRefs(analysisStore)
</script>

<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <template v-for="item in amountList" :key="item.amount">
        <el-col :span="6">
          <count-card v-bind="item"></count-card>
        </el-col>
      </template>
    </el-row>
  </div>
</template>


<style lang="less" scoped>
.dashboard {
  color: red;
}
</style>
