<script setup lang='ts'>
import MianMenu from "@/components/mian-menu/mian-menu.vue";
import MainHeader from "@/components/main-header/mian-header.vue"
import { ref } from "vue";
const isFold = ref(false)
function handleFoleChaneg(flag: boolean) {
  isFold.value = flag
}
</script>

<template>
  <div class="main">
    <el-container class="mian-container">
      <!-- 侧边栏 -->
      <el-aside :width="isFold ? '60px' : '210px'">
        <mian-menu :is-fold="isFold" />
      </el-aside>
      <!-- main页面 -->
      <el-container>
        <el-header height="50px">
          <main-header @foldchange="handleFoleChaneg" />
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang='less' scoped>
.main {
  height: 100%;
}

.mian-container {
  height: 100%;

  .el-aside {
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 200px;
    text-align: left;
    scrollbar-width: 100%;
    background-color: #0c2135;

    -ms-overflow-style: none;

    transition: width 0.3s ease;

    &::-webkit-scrollbar {
      display: none;
    }

    cursor: pointer;
  }

  .el-header {
    background-color: skyblue;
  }

  .el-main {
    background-color: green;
  }


}
</style>
