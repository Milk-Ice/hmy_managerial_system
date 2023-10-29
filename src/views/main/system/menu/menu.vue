<template>
  <div class="menu">
    <page-content :content-config="contentConfig" />
  </div>
</template>

<script setup lang="ts" name="menu">
import PageContent from '@/components/page-content/page-content.vue'
import contentConfig from '../menu/config/content.config'
</script>

<style scoped></style>
