import { deleteUserListData, newUserData, postUserListData } from "@/service/mian/system/system";
import { defineStore } from "pinia";
import type { ISystemState } from '@/types/main/system/system'

const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    usersList: [],
    userTotalCount: 0
  }),
  actions: {
    async postUserListAction(queryInfo) {
      const userListResult = await postUserListData(queryInfo)
      // console.log(userListResult)
      const { list, totalCount } = userListResult.data
      // console.log(list)
      this.userTotalCount = totalCount
      this.usersList = list
    },
    async deleteUserListAction(id: number) {
      //1. 删除数据操作
      const deleteResult = await deleteUserListData(id)
      console.log(deleteResult)
      // 重新请求数据
      this.postUserListAction({ offset: 0, size: 10 })
    },
    // 创建新的user
    async newUserDataAction(userInfo: any) {
      const userInfoResult = await newUserData(userInfo)
      console.log(userInfoResult)
      this.postUserListAction({ offset: 0, size: 10 })
    }
  }

})
export default useSystemStore
