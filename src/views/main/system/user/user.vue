<script setup lang='ts'>
import UserSearch from '@/views/main/system/user/c-cpns/user-search.vue'
import UserContent from '@/views/main/system/user/c-cpns/user-content.vue'
</script>

<template>
  <div class="user">
    <div class="search">
      <user-search />
    </div>
    <user-content />
  </div>
</template>

<style lang='less' scoped>
.user {
  color: red;
}
</style>
