import {
  getAmountListData,
  getGoodsCategoryCounttData
} from '@/service/mian/analysis/analysis'
import { defineStore } from 'pinia'

interface IAnalysisState {
  amountList: any[] //商品数据统计的数量
  goodsCategoryCount: any[] //每个分类商品的个数
}
const useAnalysisStore = defineStore('analysis', {
  state: (): IAnalysisState => ({
    amountList: [],
    goodsCategoryCount: []
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
      console.log(categoryCountResult)
      this.goodsCategoryCount = categoryCountResult.data
    }
    // 不同城市的销量数据
  }
})
export default useAnalysisStore
