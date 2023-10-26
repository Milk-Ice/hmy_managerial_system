<template>
  <div class="role">
    <page-search :search-config="searchConfig" />
  </div>
</template>

<script setup lang="ts">
import PageSearch from '@/components/page-search/page-search.vue'
import searchConfig from '../role/config/role.config'
</script>

<style lang="less" scoped>
.role {
  color: red;
}
</style>
