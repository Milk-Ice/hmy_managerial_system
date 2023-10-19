<script setup lang='ts'>
import type { FormRules } from 'element-plus';
import { reactive } from 'vue';
const account = reactive({
  name: '',
  password: ''
})
const rule: FormRules = {
  name: [
    { required: true, message: '必须输入账号信息', trigger: 'blur ' },
    {
      pattern: /^[a-z0-9]{6,20}$/,
      message: '必须是6-20位数字或字母组成',
      trigger: 'change'
    }],
  password: [{
    required: true, message: '必须输入密码', trigger: 'blur'
  },
  {
    pattern: /^[a-z0-9]{3,}$/,
    message: '必须是3位以上数字或字幕组成',
    trigger: 'change'
  }
  ]
}
</script>

<template>
  <div class="panel-account">
    <el-form :model="account" label-width="60px" :rules="rule" status-icon>
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
    </el-form>
    <el-form label-width="60px">
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang='less' scoped>
.panel-account {
  color: red;
}
</style>
