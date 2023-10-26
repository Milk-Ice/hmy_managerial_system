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
  parentId: '',
  leader: '',
})
const isNewRef = ref(true)
defineExpose({ setModalVisible })
const editData = ref()
const mainStore = useMainStore()
const { entireDepartments } = storeToRefs(mainStore)

//点击确认的逻辑
function HandleConfirmClick() {
  dialogVisible.value = false
  // 新建用户
  if (isNewRef.value) {
    // 创建新的用户
    systemStore.newPageDataAction('department', formData)
  } else {//编辑用户
    systemStore.editPageDataAction('department', editData.value.id, formData)
  }

}
</script>

<template>
  <div class="user-modal">
    <el-dialog v-model="dialogVisible" :title="isNewRef ? '新增部门' : '编辑部门'" width="30%" center>
      <el-form :model="formData" label-width="100px">
        <el-form-item label="部门名称:" prop="name">
          <el-input v-model="formData.name" placeholder="请输入部门名称" style="width: 300px;" />
        </el-form-item>
        <el-form-item label="上级部门:" prop="parentId">
          <el-select v-model="formData.parentId" placeholder="请选择上级部门" style="width: 300px;">
            <template v-for="item in entireDepartments" :key="item.id">
              <el-option :label="item.name" :value="item.id"></el-option>
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="领导名称:" prop="leader">
          <el-input v-model="formData.leader" placeholder="请输入领导名称" style="width: 300px;" />
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
