<script setup lang='ts'>
import { ref } from 'vue'
const dialogVisible = ref(false)
function setModalVisible() {
  dialogVisible.value = true
}
defineExpose({ setModalVisible })
</script>

<template>
  <div class="user-modal">
    <el-dialog v-model="dialogVisible" title="新增用户" width="30%" center>
      <span>
        表单
      </span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            确认
          </el-button>
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
