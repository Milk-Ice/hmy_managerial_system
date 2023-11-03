<template>
  <div class="goods">
    <page-search :search-config="searchConfig" />
  </div>
</template>

<script setup lang="ts" name="goods">
import pageSearch from '@/components/page-search/page-search.vue'
import searchConfig from './config/search.config'
</script>

<style scoped>
.goods {
}
</style>
