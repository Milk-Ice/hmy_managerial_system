import {
  getAmountListData,
  getGoodsAddressSaleData,
  getGoodsCategoryCounttData,
  getGoodsCategoryFavor,
  getGoodsCategorySaleData
} from '@/service/mian/analysis/analysis'
import { defineStore } from 'pinia'

interface IAnalysisState {
  amountList: any[] //商品数据统计的数量
  goodsCategoryCount: any[] //每个分类商品的个数
  goodsCategorySale: any[] //每个分类商品的销量
  goodsCategoryFavor: any[] //每个分类商品的收藏
  goodsAddressSale: any[]
}
const useAnalysisStore = defineStore('analysis', {
  state: (): IAnalysisState => ({
    amountList: [],
    goodsCategoryCount: [],
    goodsCategorySale: [],
    goodsCategoryFavor: [],
    goodsAddressSale: []
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
      // console.log(goodsCategorySaleResult)
      this.goodsCategorySale = goodsCategorySaleResult.data
    },
    // 每个分类商品的收藏
    async fetchGoodCategoryFavorDataAction() {
      const goodsCategoryFavorResult = await getGoodsCategoryFavor()
      // console.log(goodsCategoryFavorResult)
      this.goodsCategoryFavor = goodsCategoryFavorResult.data
    },
    // 每个地址的收藏
    async fetchGoodsAddressSaleAction() {
      const goodsAddressSaleResult = await getGoodsAddressSaleData()
      // console.log(goodsAddressSaleResult)
      this.goodsAddressSale = goodsAddressSaleResult.data
    }
  }
})
export default useAnalysisStore
