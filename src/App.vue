<script setup lang="ts">
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'
</script>

<template>
  <div class="app">App
    <el-button type="primary" :icon="Edit" />
    <router-link to="/login">login</router-link>
    <router-link to="/main">main</router-link>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.app {
  width: 100vw;
  height: 100vh;
  /* background-color: green; */
}
</style>
