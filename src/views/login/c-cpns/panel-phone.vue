<script setup lang="ts">
import { type FormRules, type ElForm, ElMessage } from 'element-plus'
import { reactive, ref } from 'vue'
import type { IPhone } from '@/types/login'
import { localCache } from '@/utils/cache'

const CACHE_PHONE = 'phone'
const CACHE_CODE = 'code'

// 1.定义account数据
const account = reactive<IPhone>({
  phone: localCache.getCache(CACHE_PHONE) ?? '',
  code: localCache.getCache(CACHE_CODE) ?? ''
})

const formRef = ref<InstanceType<typeof ElForm>>()
// 表单校验
const accountRules: FormRules = {
  phone: [
    { required: true, message: '必须输入手机号信息~', trigger: 'blur' },
    {
      pattern: /^1[3456789]\d{9}$/,
      message: '必须是11数字组成的电话号码~',
      trigger: 'blur'
    }
  ],
  code: [
    { required: true, message: '必须输入四位验证码', trigger: 'blur' },
    {
      pattern: /^\d{4}$/,
      message: '必须是四位验证码',
      trigger: 'blur'
    }
  ]
}
function HanleClickAction() {
  formRef.value?.validate((valid) => {
    if (valid) {
      ElMessage('功能等待完善~')
    } else {
      ElMessage.error('请输入正确的格式后再操作')
    }
  })
}
// 账号登陆的回调
// const loginStore = useLoginStore()
// function loginAction(isRemPwd: boolean) {
//   formRef.value?.validate((valid) => {
//     if (valid) {
//       // 1.获取用户输入的账号和密码
//       const phone = account.phone
//       const code = account.code
//       // 2.向服务器发送请求,根据是否点击保存密码保存用户信息到本地存储
//       loginStore.loginAccountAction({ phone, code }).then(() => {
//         if (isRemPwd) {
//           localCache.setCache(CACHE_PHONE, phone)
//           localCache.setCache(CACHE_CODE, code)
//         } else {
//           localCache.removeCache(CACHE_PHONE)
//           localCache.removeCache(CACHE_CODE)
//         }
//       })
//     } else {
//       ElMessage.error('请输入正确的格式后再操作')
//     }
//   })
// }
// defineExpose({
//   loginAction
// })
</script>

<template>
  <div class="panel-account">
    <el-form
      :model="account"
      label-width="60px"
      :rules="accountRules"
      ref="formRef"
    >
      <el-form-item label="手机" prop="phone" label-width="70px">
        <el-input v-model="account.phone" />
      </el-form-item>
      <el-form-item label="验证码" prop="code" label-width="70px">
        <div class="code">
          <el-input v-model="account.code" placeholder="请输入六位验证码">
          </el-input>
          <el-button type="primary" @click="HanleClickAction">发送</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="less" scoped>
.code {
  display: flex;
}
</style>
