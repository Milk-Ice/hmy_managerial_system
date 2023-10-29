import { deletePageListData, deleteUserListData, editPageData, editUserData, newPageData, newUserData, postPageListData, postUserListData } from "@/service/mian/system/system";
import { defineStore } from "pinia";
import type { ISystemState } from '@/types/main/system/system'

const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    usersList: [],
    userTotalCount: 0,

    pageList: [],
    pageToTalCount: 0,

  }),
  actions: {
    async postUserListAction(queryInfo: any) {
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
    },
    // 编辑操作
    async editUserDataAction(id: number, userInfo: any) {
      const editUserInfoResult = editUserData(id, userInfo)
      console.log(editUserInfoResult)
      this.postUserListAction({ offset: 0, size: 10 })
    },
    // 针对页面的网络请求，增删改查
    async postPageListAction(pageName: string, queryInfo: any) {
      const pageListResult = await postPageListData(pageName, queryInfo)
      const { totalCount, list } = pageListResult.data
      // console.log(pageListResult)
      this.pageList = list
      this.pageToTalCount = totalCount
    },
    // 删除
    async deletePageByIdAction(pageName: string, id: number) {
      const deleteResult = await deletePageListData(pageName, id)
      console.log(deleteResult)
      this.postPageListAction(pageName, { offset: 0, size: 10 })
    },
    // 新增
    async newPageDataAction(pageName: string, pageInfo: any) {
      const pageDataResult = await newPageData('department', pageInfo)
      console.log(pageDataResult)

      this.postPageListAction(pageName, { offset: 0, size: 10 })
    },
    // 编辑
    async editPageDataAction(pageName: any, id: number, pageInfo: any) {
      const editPageInfoResult = editPageData(pageName, id, pageInfo)
      console.log(editPageInfoResult)
      this.postPageListAction(pageName, { offset: 0, size: 10 })
    },
  }

})
export default useSystemStore
