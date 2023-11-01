import {
  getAmountListData,
  getGoodsAddressSaleData,
  getGoodsCategoryCounttData,
  getGoodsCategorySaleData
} from '@/service/mian/analysis/analysis'
import { defineStore } from 'pinia'

interface IAnalysisState {
  amountList: any[] //商品数据统计的数量
  goodsCategoryCount: any[] //每个分类商品的个数
  goodAddressSaleList: any[]
  goodsCategorySale: any[] //每个分类商品的销量
}
const useAnalysisStore = defineStore('analysis', {
  state: (): IAnalysisState => ({
    amountList: [],
    goodsCategoryCount: [],
    goodAddressSaleList: [],
    goodsCategorySale: []
  }),
  actions: {
    // 商品数据统计的数量
    async fetchAnalysisDataAction() {
      const amountResult = await getAmountListData()
      // console.log(amountResult)
      this.amountList = amountResult.data
    },
    // 每个分类商品的个数
    async fetchGoodsCategoryCountDataAction() {
      const categoryCountResult = await getGoodsCategoryCounttData()
      // console.log(categoryCountResult)
      this.goodsCategoryCount = categoryCountResult.data
    },
    // 每个分类商品的销量
    async fetchGoodsCategorySaleDataAction() {
      const goodsCategorySaleResult = await getGoodsCategorySaleData()
      console.log(goodsCategorySaleResult)
      this.goodsCategorySale = goodsCategorySaleResult.data
    },
    // 不同城市的销量数据
    async fetchGetGoodsAddressSaleDataAction() {
      const goodAddressSaleResult = await getGoodsAddressSaleData()
      // console.log(goodAddressSaleResult)
      this.goodAddressSaleList = goodAddressSaleResult.data
    }
  }
})
export default useAnalysisStore
