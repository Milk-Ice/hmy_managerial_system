import { postCategoryListData } from '@/service/mian/product/category/cactegory'
import { defineStore } from 'pinia'

const useCategoryStore = defineStore('category', {
  state: () => ({
    categoryList: []
  }),
  actions: {
    async postCategoryListAction(querInfo: any) {
      const categoryListResult = await postCategoryListData(querInfo)
      console.log(categoryListResult)
    }
  }
})
export default useCategoryStore
