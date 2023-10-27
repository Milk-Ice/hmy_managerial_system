<template>
  <div class="role">
    <page-search ref="searchRef" :search-config="searchConfig" @reset-click="HandleResetClick"
      @query-click="HandleQueryClick" />
    <page-content ref="contentRef" :content-config="contentConfig" @edit-click="HandleEditClick"
      @new-click="HandleNewClick" />
    <page-modal :modal-config="modalConfig" ref="modalRef" />
  </div>
</template>

<script setup lang="ts">
import PageSearch from '@/components/page-search/page-search.vue'
import PageContent from '@/components/page-content/page-content.vue'
import PageModal from '@/components/page-modal/page-modal.vue'

import searchConfig from '../role/config/search.config'
import contentConfig from '../role/config/content.config'
import modalConfig from '../role/config/modal.config'
import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'

// 点击search、content的逻辑
const { contentRef, HandleResetClick, HandleQueryClick } = usePageContent()
// 点击content、modal的逻辑
const { modalRef, HandleNewClick, HandleEditClick } = usePageModal()
</script>

<style lang="less" scoped></style>
