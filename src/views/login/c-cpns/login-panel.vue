<script setup lang='ts'>
import { ref } from 'vue';
import panelAccount from './panel-account.vue';
import panelPhone from './panel-phone.vue';
import { localCache } from '@/utils/cache';
import { watch } from 'vue';


const isRemPwd = ref<boolean>(localCache.getCache('isRemPwd') ?? false)
const activeName = ref('account')
const accountRef = ref<InstanceType<typeof panelAccount>>()

// 如果点击了记住密码，就保存在本地
watch(isRemPwd, (newValue) => {
  localCache.setCache('isRemPwd', newValue)
})

function handleLoginBtnClick() {
  if (activeName.value === 'account') {
    accountRef.value?.loginAction(isRemPwd.value)
  } else {
    console.log('用户在手机登录')
  }
}
</script>

<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <div class="tabs">
      <el-tabs type="border-card" v-model="activeName" stretch>
        <el-tab-pane label="账号登陆" name="account">
          <template #label>
            <div class="label">
              <el-icon>
                <UserFilled />
              </el-icon>
              <span class="text">账号登陆</span>
            </div>
          </template>
          <!-- 账号登陆面板 -->
          <panelAccount ref="accountRef" />
        </el-tab-pane>
        <el-tab-pane label="手机登录" name="phone">
          <template #label>
            <div class="label">
              <el-icon>
                <Iphone />
              </el-icon>
              <span class="title">手机登录</span>
            </div>
          </template>
          <!-- 手机登陆面板 -->
          <panelPhone />
        </el-tab-pane>
      </el-tabs>
    </div>
    <!-- 记住密码 -->
    <div class="controls">
      <el-checkbox v-model="isRemPwd" label="记住密码" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <!-- 立即登录 -->
    <el-button class="login-btn" type="primary" @click="handleLoginBtnClick">立即登录</el-button>
  </div>
</template>

<style lang='less' scoped>
.login-panel {
  width: 330px;
  height: 150px;

  .title {
    text-align: center;
    margin-bottom: 16px;
  }

  .controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;

    --el-component-size: 50px !important;

  }
}
</style>
