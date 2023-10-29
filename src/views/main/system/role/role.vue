<template>
  <div class="role">
    <page-search ref="searchRef" :search-config="searchConfig" @reset-click="HandleResetClick"
      @query-click="HandleQueryClick" />
    <page-content ref="contentRef" :content-config="contentConfig" @edit-click="HandleEditClick"
      @new-click="HandleNewClick" />
    <page-modal :modal-config="modalConfig" ref="modalRef">
      <!-- 具名插槽，命名为 "menulist" -->
      <template #menulist>
        <el-tree :data="entireMenus" show-checkbox node-key="id" ref="tree"
          :props="{ children: 'children', label: 'name' }">
        </el-tree></template>
    </page-modal>
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
import useMainStore from '@/store/main/main'
import { storeToRefs } from 'pinia'

// 点击search、content的逻辑
const { contentRef, HandleResetClick, HandleQueryClick } = usePageContent()
// 点击content、modal的逻辑
const { modalRef, HandleNewClick, HandleEditClick } = usePageModal()

// 获取菜单
const mainStore = useMainStore()
const { entireMenus } = storeToRefs(mainStore)

</script>

<style lang="less" scoped></style>
