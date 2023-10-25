<script setup lang='ts'>
import UserSearch from '@/views/main/system/user/c-cpns/user-search.vue'
import UserContent from '@/views/main/system/user/c-cpns/user-content.vue'
import UserModal from '@/views/main/system/user/c-cpns/user-modal.vue'
import { ref } from 'vue';
function HandleQueryClick(formData: any) {
  // console.log(formData)
  contentRef.value?.fetchUserListData(formData)
}
function HandleResetClick() {
  contentRef.value?.fetchUserListData()
}
const modalRef = ref<InstanceType<typeof UserModal>>()

function HandleNewBtnClick() {
  console.log('HandleNewBtnClick')
  modalRef.value?.setModalVisible()
}
const contentRef = ref<InstanceType<typeof UserContent>>()
</script>

<template>
  <div class="user">
    <div class="search">
      <user-search @query-click="HandleQueryClick" @reset-click="HandleResetClick" />
    </div>
    <user-content ref="contentRef" @new-click="HandleNewBtnClick" />
    <user-modal ref="modalRef" />
  </div>
</template>

<style lang='less' scoped>
.user {
  border-radius: 8px;
  overflow: hidden;
}
</style>
