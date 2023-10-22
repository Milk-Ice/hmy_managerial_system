<script setup lang='ts'>
import { ref } from 'vue';
const isFold = ref(false)
function handleMenuIconClick() {
  // console.log(11)
  isFold.value = !isFold.value
  emit('foldchange', isFold.value)
}
const emit = defineEmits(['foldchange'])

</script>

<template>
  <div class="main-header">
    <div class="menu-icon" @click="handleMenuIconClick">
      <el-icon size="20px">
        <component :is="isFold ? 'Expand': 'Fold'" />
      </el-icon>
    </div>
    <div class="content">
      <div class="bread">面包屑</div>
      <div class="info">个人信息</div>
    </div>

  </div>
</template>

<style lang='less' scoped>
.main-header {
  display: flex;
  align-items: center;
  flex: 1;
  height: 100%;

  .menu-icon {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 10px;
  }


}
</style>
