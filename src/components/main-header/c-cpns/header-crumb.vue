<script setup lang='ts'>
import { ArrowRight } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

import useLoginStore from '@/store/login/login';
import { mapPathToBreadcrumb } from '@/utils/map_menus';

const route = useRoute()
const useMenu = useLoginStore().userMenus
const breadcurmb = computed(() => {
  return mapPathToBreadcrumb(route.path, useMenu)

})
</script>

<template>
  <div class="header-crubmb">
    <el-breadcrumb :separator-icon="ArrowRight">
      <template v-for="item in breadcurmb" :key="item.name">
        <el-breadcrumb-item :to="item.path">{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<style lang='less' scoped>
.header-crubmb {
  color: red;
}
</style>
