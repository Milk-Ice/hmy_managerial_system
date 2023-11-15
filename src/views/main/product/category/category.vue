<script setup lang="ts" name="category">
import PageSearch from '@/components/page-search/page-search.vue'
import PageContent from '@/components/page-content/page-content.vue'
import PageModal from '@/components/page-modal/page-modal.vue'

import searchConfig from './config/search.config'
import contentConfig from './config/content.config'
import modalConfig from './config/modal.config'
import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'
// 点击search、content的逻辑
const { contentRef, HandleResetClick, HandleQueryClick } = usePageContent()
const { modalRef, HandleNewClick, HandleEditClick } = usePageModal()
</script>

<template>
  <div class="category">
    <page-search
      ref="searchRef"
      :search-config="searchConfig"
      @query-click="HandleQueryClick"
      @reset-click="HandleResetClick"
    />
    <page-content
      ref="contentRef"
      :content-config="contentConfig"
      @edit-click="HandleEditClick"
      @new-click="HandleNewClick"
    />
    <page-modal ref="modalRef" :modal-config="modalConfig" />
  </div>
</template>

<style scoped>
.category {
  border-radius: 8px;
  overflow: hidden;
}
</style>
