<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue'
import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'

interface IProps {
  option: EChartsOption
}
const props = defineProps<IProps>()

const echartRef = ref<HTMLElement>()

onMounted(() => {
  // 1.初始化echarts实例
  const echartInsrance = echarts.init(echartRef.value, 'light', {
    renderer: 'canvas'
  })
  // 2.watchEffect监听option变化，重新执行
  watchEffect(() => echartInsrance.setOption(props.option))
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
