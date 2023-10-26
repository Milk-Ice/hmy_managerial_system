<script setup lang='ts'>
import UserSearch from '@/views/main/system/user/c-cpns/user-search.vue'
import UserContent from '@/views/main/system/user/c-cpns/user-content.vue'
import UserModal from '@/views/main/system/user/c-cpns/user-modal.vue'
import { ref } from 'vue';
// 查询
function HandleQueryClick(formData: any) {
  // console.log(formData)
  contentRef.value?.fetchUserListData(formData)
}
// 重置
function HandleResetClick() {
  contentRef.value?.fetchUserListData()
}
const modalRef = ref<InstanceType<typeof UserModal>>()
// 新增
function HandleNewBtnClick(itemData: any) {
  console.log('HandleNewBtnClick')
  modalRef.value?.setModalVisible(itemData)
}
const contentRef = ref<InstanceType<typeof UserContent>>()

// 编辑操作
function HandleEditClick(itemData: any) {
  // console.log(itemData)
  modalRef.value?.setModalVisible(false, itemData)
}
</script>

<template>
  <div class="user">
    <div class="search">
      <user-search @query-click="HandleQueryClick" @reset-click="HandleResetClick" />
    </div>
    <user-content ref="contentRef" @new-click="HandleNewBtnClick" @edit-click="HandleEditClick" />
    <user-modal ref="modalRef" />
  </div>
</template>

<style lang='less' scoped>
.user {
  border-radius: 8px;
  overflow: hidden;
}
</style>
