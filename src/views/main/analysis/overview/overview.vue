<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>核心技术</span>
        <el-button class="button" text
          >只有了解真相才能获取真正的自由~</el-button
        >
      </div>
    </template>
    <div class="content">
      <div class="header">
        本项目是基于Vue3 + TS + Vite + Pinia + Echarts,实现的一个后台管理系统
      </div>
      <div class="intro">
        大致的功能点有：权限控制，登录不同账号系统会显示不同的菜单栏、常见的增删改查、Element-plus的使用、Echarts5.x的基本使用、富文本编辑器的使用等
      </div>

      <div class="footer">在该项目中将主要采用组件化、模块化的思想</div>
    </div>
  </el-card>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
