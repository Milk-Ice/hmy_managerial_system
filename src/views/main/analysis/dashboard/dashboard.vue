<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import countCard from './c-cpns/count-card.vue'
import chartCard from './c-cpns/chart-card.vue'
import useAnalysisStore from '@/store/main/analysis/analysis'
import {
  PieEchart,
  LineEchart,
  RoseEchart,
  BarEchart,
  MapEchart
} from '@/components/page-echarts'

// 1.发起数据的亲求
const analysisStore = useAnalysisStore()
analysisStore.fetchAnalysisDataAction()
analysisStore.fetchGoodsCategoryCountDataAction()
analysisStore.fetchGoodsCategorySaleDataAction()
analysisStore.fetchGoodCategoryFavorDataAction()
analysisStore.fetchGoodsAddressSaleAction()
// 2.从store获取数据
const {
  amountList,
  goodsCategoryCount,
  // goodAddressSaleList,
  goodsCategorySale,
  goodsCategoryFavor,
  goodsAddressSale
} = storeToRefs(analysisStore)
console.log(amountList)
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
// 每个分类商品的收藏
const showGoodsCategoryFavor = computed(() => {
  const labels = goodsCategoryFavor.value.map((item) => item.name)
  const values = goodsCategoryFavor.value.map((item) => item.goodsFavor)
  return { labels, values }
})
// 地图
const showGoodsAddressSale = computed(() => {
  return goodsAddressSale.value.map((item) => ({
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
        <chart-card :header="'每个分类商品的个数'">
          <pie-echart :pie-data="showGoodsCategoryCount" />
        </chart-card>
      </el-col>
      <el-col :span="10">
        <!-- b.地图 -->
        <chart-card :header="'不同城市的销量数据'"
          ><map-echart :map-data="showGoodsAddressSale" />
        </chart-card>
      </el-col>
      <el-col :span="7">
        <!-- 玫瑰图 -->
        <chart-card :header="'每个分类商品的个数'"
          ><rose-echart :pie-data="showGoodsCategoryCount"
        /></chart-card>
      </el-col>
    </el-row>

    <!-- 3.底部的图表 -->
    <el-row :gutter="20">
      <el-col :span="12">
        <chart-card :header="'每个分类商品的销量'">
          <line-echart v-bind="showGoodsCategorySale"
        /></chart-card>
      </el-col>
      <el-col :span="12">
        <chart-card :header="'每个分类商品的收藏'"
          ><bar-echart v-bind="showGoodsCategoryFavor"
        /></chart-card>
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
