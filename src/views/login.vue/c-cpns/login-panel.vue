<script setup lang='ts'>
import { ref } from 'vue';
import panelAccount from './panel-account.vue';
import panelPhone from './panel-phone.vue';
const isRemPwd = ref(false)
const activeName = ref('account')
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
          <panelAccount />
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
          <panelPhone />
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="controls">
      <el-checkbox v-model="isRemPwd" label="记住密码" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button class="login-btn" type="primary">立即登录</el-button>
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
