import { postUserListData } from "@/service/mian/system";
import { defineStore } from "pinia";
import type { ISystemState } from '@/types/main/system/system'

const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    usersList: [],
    userTotalCount: 0
  }),
  actions: {
    async postUserListAction() {
      const userListResult = await postUserListData()
      // console.log(userListResult)
      const { list, totalCount } = userListResult.data
      // console.log(list)
      this.userTotalCount = totalCount
      this.usersList = list
    }
  }
})
export default useSystemStore
