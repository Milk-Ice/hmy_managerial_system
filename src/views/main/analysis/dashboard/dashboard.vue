<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ref, onMounted } from 'vue'
import countCard from './c-cpns/count-card.vue'
import chartCard from './c-cpns/chart-card.vue'
import useAnalysisStore from '@/store/main/analysis/analysis'
import * as echarts from 'echarts'
// 1.发起数据的亲求
const analysisStore = useAnalysisStore()
analysisStore.fetchAnalysisDataAction()
// 2.从store获取数据
const { amountList } = storeToRefs(analysisStore)
// 3.echarts相关逻辑
const echartRef = ref<HTMLElement>()

onMounted(() => {
  const echartInsrance = echarts.init(echartRef.value, 'light', {
    renderer: 'canvas'
  })
  echartInsrance.setOption({
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  })
})
</script>

<template>
  <div class="dashboard">
    <!-- 数据统计 -->
    <el-row :gutter="10">
      <template v-for="item in amountList" :key="item.amount">
        <el-col :span="6">
          <count-card v-bind="item"></count-card>
        </el-col>
      </template>
    </el-row>
    <!-- 中间的图表 -->
    <el-row :gutter="20">
      <el-col :span="7">
        <chart-card>
          <div class="echart" ref="echartRef"></div>
        </chart-card>
      </el-col>
      <el-col :span="10">
        <chart-card> 饼图2</chart-card>
      </el-col>
      <el-col :span="7">
        <chart-card> 饼图3</chart-card>
      </el-col>
    </el-row>

    <!-- 底部的图表 -->
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
