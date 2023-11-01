<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import countCard from './c-cpns/count-card.vue'
import chartCard from './c-cpns/chart-card.vue'
import useAnalysisStore from '@/store/main/analysis/analysis'
import pieEcharts from '@/components/page-echarts/src/pie-echarts.vue'
import lineEcharts from '@/components/page-echarts/src/line-echarts.vue'

// 1.发起数据的亲求
const analysisStore = useAnalysisStore()
analysisStore.fetchAnalysisDataAction()
analysisStore.fetchGoodsCategoryCountDataAction()
analysisStore.fetchGetGoodsAddressSaleDataAction()
analysisStore.fetchGoodsCategorySaleDataAction()
// 2.从store获取数据
const {
  amountList,
  goodsCategoryCount,
  goodAddressSaleList,
  goodsCategorySale
} = storeToRefs(analysisStore)
// Map每个分类商品的个数(饼图)
const showGoodsCategoryCount = computed(() => {
  return goodsCategoryCount.value.map((item) => ({
    name: item.name,
    value: item.goodsCount
  }))
})
// Map每个分类商品的销量
const showGoodsCategorySale = computed(() => {
  const labels = goodsCategorySale.value.map((item) => item.name)
  const values = goodsCategorySale.value.map((item) => item.goodsCount)
  return { labels, values }
})
// console.log(goodsCategorySale)
// Map不同城市的销量数据(折线图)
const showGoodsAddressSale = computed(() => {
  return goodAddressSaleList.value.map((item) => ({
    name: item.address,
    value: item.count
  }))
})
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
          <pie-echarts :pie-data="showGoodsCategoryCount" />
        </chart-card>
      </el-col>
      <el-col :span="10">
        <!-- b.折线图 -->
        <chart-card> </chart-card>
      </el-col>
      <el-col :span="7">
        <chart-card> 饼图3</chart-card>
      </el-col>
    </el-row>

    <!-- 3.底部的图表 -->
    <el-row :gutter="20">
      <el-col :span="12">
        <chart-card>
          <line-echarts v-bind="showGoodsCategorySale"
        /></chart-card>
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
  height: 300px;
}
</style>
