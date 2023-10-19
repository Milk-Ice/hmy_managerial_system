<script setup lang='ts'>
import type { FormRules, ElForm } from 'element-plus';
import { reactive, ref } from 'vue';
import useLoginStore from '@/store/login/login'
const account = reactive({
  name: '',
  password: ''
})
const formRef = ref<InstanceType<typeof ElForm>>()
// 表单校验
const accountRules: FormRules = {
  name: [
    { required: true, message: '必须输入帐号信息~', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{6,20}$/,
      message: '必须是6~20数字或字母组成~',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '必须输入密码信息~', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '必须是3位以上数字或字母组成',
      trigger: 'blur'
    }
  ]
}
// 账号登陆的回调
const loginStore = useLoginStore()
function loginAction() {
  formRef.value?.validate((valid) => {
    if (valid) {
      // 获取用户输入的账号和密码
      const name = account.name
      const password = account.password
      // 向服务器发送请求
      loginStore.loginAccountAction({ name, password })
    } else {
      ElMessage.error("请输入正确的格式后再操作")
    }
  })
}
defineExpose({
  loginAction
})
</script>

<template>
  <div class="panel-account">
    <el-form :model="account" label-width="60px" :rules="accountRules" ref="formRef" status-icon>
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
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
