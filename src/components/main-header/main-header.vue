<script setup lang='ts'>
import { ref } from 'vue';
import headerCrumb from './c-cpns/header-crumb.vue';
import HeaderInfo from "./c-cpns/header-info/header-info.vue"
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
      <!-- 面包屑 -->
      <div class="bread">
        <header-crumb />
      </div>
      <div class="info">
        <header-info />
      </div>
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
