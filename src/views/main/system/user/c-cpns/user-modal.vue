<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { storeToRefs } from 'pinia';
import useMainStore from '@/store/main/main'
import useSystemStore from '@/store/main/system/system'
const dialogVisible = ref(false)
const systemStore = useSystemStore()
function setModalVisible(isNew: boolean = true, itemData?: any) {
  dialogVisible.value = true
  isNewRef.value = isNew
  // 编辑操作
  if (!isNew && itemData) {
    for (const key in formData) {
      formData[key] = itemData[key]
    }
    editData.value = itemData
  } else {
    // 新增操作
    for (const key in formData) {
      formData[key] = ''
    }
    editData.value = null
  }
}
const formData = reactive({
  name: '',
  password: '',
  realname: '',
  cellphone: '',
  departmentId: '',
  roleId: ''
})
const isNewRef = ref(true)
defineExpose({ setModalVisible })
const editData = ref()
const mainStore = useMainStore()
const { entireRoles, entireDepartments } = storeToRefs(mainStore)

//点击确认的逻辑
function HandleConfirmClick() {
  dialogVisible.value = false
  // 新建用户
  if (isNewRef.value) {
    // 创建新的用户
    systemStore.newUserDataAction(formData)
  } else {//编辑用户
    systemStore.editUserDataAction(editData.value.id, formData)
  }

}
</script>

<template>
  <div class="user-modal">
    <el-dialog v-model="dialogVisible" :title="isNewRef ? '新增用户' : '编辑用户'" width="30%" center>
      <el-form :model="formData" label-width="100px">
        <el-form-item label="用户名:" prop="name">
          <el-input v-model="formData.name" placeholder="请输入用户名" style="width: 300px;" />
        </el-form-item>
        <el-form-item label="真实姓名:" prop="realname">
          <el-input v-model="formData.realname" placeholder="请输入真实姓名" style="width: 300px;" />
        </el-form-item>
        <el-form-item v-if="isNewRef" label="密码:" prop="password">
          <el-input v-model="formData.password" placeholder="请输入密码" show-password style="width: 300px;" />
        </el-form-item>
        <el-form-item label="电话号码:" prop="cellPhone">
          <el-input v-model="formData.cellphone" placeholder="请输入电话号码" style="width: 300px;" />
        </el-form-item>
        <el-form-item label="选择角色:" prop="roleId">
          <el-select v-model="formData.roleId" placeholder="请选择角色">
            <template v-for="item in entireRoles" :key="item.id">
              <el-option :label="item.name" :value="item.id"></el-option>
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="选择部门:" prop="departmentId">
          <el-select v-model="formData.departmentId" placeholder="请选择角色">
            <template v-for="item in entireDepartments" :key="item.id">
              <el-option :label="item.name" :value="item.id"></el-option>
            </template>
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="HandleConfirmClick">
            确认
          </el-button>
          <el-button @click="dialogVisible = false">取消</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<style lang='less' scoped>
.user-modal {
  color: red;
}
</style>
