import { getAmountListData } from "@/service/mian/analysis/analysis";
import { defineStore } from "pinia";

interface IAnalysisState {
  amountList: any[]
}
const useAnalysisStore = defineStore('analysis', {
  state: (): IAnalysisState => ({
    amountList: []
  }),
  actions: {
    async fetchAnalysisDataAction() {
      const amountResult = await getAmountListData()
      // console.log(amountResult)
      this.amountList = amountResult.data
    }
  }
})
export default useAnalysisStore
