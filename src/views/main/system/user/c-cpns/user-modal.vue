<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { storeToRefs } from 'pinia';
import useMainStore from '@/store/main/main'
import useSystemStore from '@/store/main/system/system'
const dialogVisible = ref(false)
const systemStore = useSystemStore()
/**
 * 控制弹窗的显示和数据的回显，用于执行新建或编辑操作。
 *
 * @param {boolean} isNew - 是否执行新建操作（默认为 true）
 * @param {any} itemData - 编辑操作时需要回显的数据（可选）
 */
const editData = ref(); // 用于维护编辑数据，以便在编辑操作时回显已有数据
const isNewRef = ref(true); // 用于标记当前操作是否是新建操作，默认为 true

function setModalVisible(isNew: boolean = true, itemData?: any) {
  dialogVisible.value = true; // 打开弹窗
  isNewRef.value = isNew; // 标记当前操作是新建还是编辑

  if (!isNew && itemData) {
    // 编辑操作
    for (const key in formData) {
      formData[key] = itemData[key]; // 将传入的数据填充到表单中
    }
    editData.value = itemData; // 维护编辑数据以便回显
  } else {
    // 新增操作
    for (const key in formData) {
      formData[key] = ''; // 清空表单数据
    }
    editData.value = null; // 清空编辑数据
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

defineExpose({ setModalVisible }); // 暴露 setModalVisible 函数，使其在父组件中可用


// 1.获取角色，部门数据
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
