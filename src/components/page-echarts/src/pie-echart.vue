<script setup lang="ts">
import baseEcharts from './base-echart.vue'
import { computed } from 'vue'
import type { EChartsOption } from 'echarts'
import type { IEchartValueType } from '../types/index'
export interface IProps {
  pieData: IEchartValueType[]
}
const props = defineProps<IProps>()
const option = computed<EChartsOption>(() => {
  return {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      left: 'left'
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '50%',
        bottom: '-10%',
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
})
</script>

<template>
  <div class="pie-echarts">
    <base-echarts :option="option" />
  </div>
</template>

<style lang="less" scoped>
.pie-echarts {
  height: 300px;
}
</style>
