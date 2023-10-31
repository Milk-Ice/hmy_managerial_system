<script setup lang="ts">
import { ref, nextTick } from 'vue'
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
import type { ElTree } from 'element-plus/lib/components/index.js'
import { mapMenuListToIds } from '@/utils/map_menus'

// 点击search、content的逻辑
const { contentRef, HandleResetClick, HandleQueryClick } = usePageContent()
// 点击content、modal的逻辑
const { modalRef, HandleNewClick, HandleEditClick } = usePageModal(newCallBack, editCallBack)

// 获取菜单
const mainStore = useMainStore()
const { entireMenus } = storeToRefs(mainStore)

// 保存点击复选框的数据
const otherInfo = ref({})
// 点击复选框的逻辑
function handleCheckClick(data1: any, data2: any) {
  const menuList = [...data2.checkedKeys, ...data2.halfCheckedKeys]
  console.log(data2.checkedKeys)
  otherInfo.value = { menuList }
  // console.log(otherInfo) 拿到了
}
const treeRef = ref<InstanceType<typeof ElTree>>()
// 定义一个回调函数，传给usePageModal（Hook函数）
function editCallBack(itemData: any) {
  // console.log('点击了编辑', itemData.menuList)
  // console.log(menuIds)
  nextTick(() => {
    console.log({ ...itemData })
    const menuIds = mapMenuListToIds(itemData.menuList)
    treeRef.value?.setCheckedKeys(menuIds)
  })
}
//
function newCallBack() {
  nextTick(() => {
    // console.log({ ...itemData })
    treeRef.value?.setCheckedKeys([])
  })
}
</script>

<template>
  <div class="role">
    <page-search ref="searchRef" :search-config="searchConfig" @reset-click="HandleResetClick"
      @query-click="HandleQueryClick" />
    <page-content ref="contentRef" :content-config="contentConfig" @edit-click="HandleEditClick"
      @new-click="HandleNewClick" />
    <page-modal :modal-config="modalConfig" :other-info="otherInfo" ref="modalRef">
      <!-- 具名插槽，命名为 "menulist" -->
      <template #menulist>
        <el-tree ref="treeRef" :data="entireMenus" show-checkbox node-key="id"
          :props="{ children: 'children', label: 'name' }" @check="handleCheckClick">
        </el-tree></template>
    </page-modal>
  </div>
</template>


<style lang="less" scoped></style>
