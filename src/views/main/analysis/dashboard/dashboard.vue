<script setup lang="ts">
import { storeToRefs } from 'pinia'
import countCard from './c-cpns/count-card.vue'
import chartCard from './c-cpns/chart-card.vue'
import useAnalysisStore from '@/store/main/analysis/analysis'
import pieEcharts from '@/components/page-echarts/src/pie-echarts.vue'
import lineEcharts from '@/components/page-echarts/src/line-echarts.vue'

// 1.发起数据的亲求
const analysisStore = useAnalysisStore()
analysisStore.fetchAnalysisDataAction()
// 2.从store获取数据
const { amountList } = storeToRefs(analysisStore)
</script>

<template>
  <div class="dashboard">
    <!-- 1.数据统计 -->
    <el-row :gutter="10">
      <template v-for="item in amountList" :key="item.amount">
        <el-col :span="6">
          <count-card v-bind="item"></count-card>
        </el-col>
      </template>
    </el-row>
    <!-- 2.中间的图表 -->
    <el-row :gutter="20">
      <el-col :span="7">
        <!-- a.饼图 -->
        <chart-card>
          <pie-echarts />
        </chart-card>
      </el-col>
      <el-col :span="10">
        <!-- b.折线图 -->
        <chart-card> <line-echarts /></chart-card>
      </el-col>
      <el-col :span="7">
        <chart-card> 饼图3</chart-card>
      </el-col>
    </el-row>

    <!-- 3.底部的图表 -->
    <el-row :gutter="20">
      <el-col :span="12">
        <chart-card> 折线图1</chart-card>
      </el-col>
      <el-col :span="12">
        <chart-card> 折线图2</chart-card>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
.el-row {
  margin-top: 10px;
}

.echart {
  height: 250px;
}
</style>
