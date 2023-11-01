<script setup lang="ts">
import baseEcharts from './base-echarts.vue'
import { computed } from 'vue'
import type { EChartsOption } from 'echarts'
import type { IEchartValueType } from '../types/index'
interface IProps {
  pieData: IEchartValueType[]
}
const props = defineProps<IProps>()
const option = computed<EChartsOption>(() => {
  return {
    legend: {
      top: 'bottom'
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        type: 'pie',
        radius: [20, 160],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: props.pieData
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
