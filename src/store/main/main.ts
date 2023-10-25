import { getEntireDepartment, getEntireRoles } from "@/service/mian/mian";
import { defineStore } from "pinia";
interface IMain {
  entireRoles: any[]
  entireDepartments: any[]
}
const useMainStore = defineStore('mian', {
  state: (): IMain => ({
    entireRoles: [],
    entireDepartments: []
  }),
  actions: {
    async fetchEntireRoleAction() {
      const rolesResult = await getEntireRoles()
      const departmentResult = await getEntireDepartment()
      // console.log(rolesResult)
      // 保存数据
      this.entireRoles = rolesResult.data.list
      this.entireDepartments = departmentResult.data.list
    }
  }
})
export default useMainStore
