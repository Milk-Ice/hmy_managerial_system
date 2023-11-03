<template>
  <div class="goods">
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
    >
      <page-modal :modal-config="modalConfig" />
      <template #img="scope">
        <img :src="scope.row[scope.prop]" style="width: 150px; height: 200px"
      /></template>
      <template #status="scoped">
        <el-button :type="scoped.row.status ? 'success' : 'danger'" plain>
          {{ scoped.row.status ? '启用' : '禁用' }}
        </el-button>
      </template>
    </page-content>
    <page-modal ref="modalRef" :modal-config="modalConfig" />
  </div>
</template>

<script setup lang="ts" name="goods">
import pageSearch from '@/components/page-search/page-search.vue'
import searchConfig from './config/search.config'
import modalConfig from './config/modalConfig'
import contentConfig from './config/contentConfig'
import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'
// 点击search、content的逻辑
const { contentRef, HandleResetClick, HandleQueryClick } = usePageContent()
// 点击content、modal的逻辑
const { modalRef, HandleNewClick, HandleEditClick } = usePageModal()
</script>

<style scoped>
.goods {
  border-radius: 8px;
  overflow: hidden;
}
</style>
