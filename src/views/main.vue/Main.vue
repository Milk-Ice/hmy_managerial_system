<script setup lang='ts'>
import MianMenu from "@/components/mian-menu/mian-menu.vue";
import MainHeader from "@/components/main-header/mian-header.vue"

</script>

<template>
  <div class="main">
    <el-container class="mian-container">
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <mian-menu />
      </el-aside>
      <!-- main页面 -->
      <el-container>
        <el-header height="50px">
          <main-header />
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang='less' scoped>
.main {
  color: red;
  height: 100%;
}

.mian-container {
  height: 100%;

  .el-aside {
    background-color: #0c2135;
  }

  .el-header {
    background-color: skyblue;
  }

  .el-main {
    background-color: green;
  }


}
</style>
