<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'

interface IProps {
  option: EChartsOption
}
const props = defineProps<IProps>()

const echartRef = ref<HTMLElement>()

onMounted(() => {
  const echartInsrance = echarts.init(echartRef.value, 'light', {
    renderer: 'canvas'
  })
  echartInsrance.setOption(props.option)
})
</script>

<template>
  <div class="base-eachrts">
    <div class="echarts" ref="echartRef"></div>
  </div>
</template>

<style lang="less" scoped>
.echarts {
  height: 300px;
}
</style>
