<script setup lang="ts">
import { computed } from 'vue'
import baseEcharts from './base-echart.vue'
import type { EChartsOption } from 'echarts'
const props = defineProps<{
  labels: string[]
  values: string[]
}>()
// console.log(props)
const option = computed<EChartsOption>(() => {
  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: props.labels
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '分类销量统计',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: props.values
      }
    ]
  }
})
</script>

<template>
  <div class="line-echarts">
    <base-echarts :option="option" />
  </div>
</template>

<style lang="less" scoped>
.line-echarts {
  height: 300px;
}
</style>
