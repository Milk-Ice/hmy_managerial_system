import { getEntireDepartment, getEntireMenuList, getEntireRoles } from "@/service/mian/mian";
import { defineStore } from "pinia";
interface IMain {
  entireRoles: any[]
  entireDepartments: any[]
  entireMenus: any[]
}
const useMainStore = defineStore('mian', {
  state: (): IMain => ({
    entireRoles: [],
    entireDepartments: [],
    entireMenus: []
  }),
  actions: {
    async fetchEntireRoleAction() {
      const rolesResult = await getEntireRoles()
      const departmentResult = await getEntireDepartment()
      const entireMenuResult = await getEntireMenuList()
      // console.log(entireMenuResult)
      // console.log(rolesResult)
      // 保存数据
      this.entireRoles = rolesResult.data.list
      this.entireDepartments = departmentResult.data.list
      this.entireMenus = entireMenuResult.data.list
    }
  }
})
export default useMainStore
