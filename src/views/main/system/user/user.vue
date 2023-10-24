<script setup lang='ts'>
import UserSearch from '@/views/main/system/user/c-cpns/user-search.vue'
</script>

<template>
  <div class="user">
    <div class="search">
      <user-search />
    </div>
    <div class="content">
      <div class="header">头部</div>
      <div class="table">表格</div>
      <div class="pagenation">分页</div>
    </div>
  </div>
</template>

<style lang='less' scoped>
.user {
  color: red;
}
</style>
