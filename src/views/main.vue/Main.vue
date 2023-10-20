<script setup lang='ts'>
import { LOGIN_TOKEN } from '@/components/gobal/constants';
import router from '@/router';

function handleExitClick() {
  localStorage.removeItem(LOGIN_TOKEN)
  router.push("/login")
}
</script>

<template>
  <div class="main">
    <button @click="handleExitClick">退出登陆</button>
  </div>
</template>

<style lang='less' scoped>
.main {
  color: red;
}
</style>
