<script setup lang='ts'>
import useSystemStore from '@/store/main/system/system'
import { storeToRefs } from 'pinia';
// 1.发起action，请求userList的数据
const systemStore = useSystemStore()
systemStore.postUserListAction()
// 2.获取userList数据进行展示（转化为响应数据）
const { usersList } = storeToRefs(systemStore)


</script>

<template>
  <div class="user-content">
    <div class="header">头部</div>
    <div class="table">
      <ul>
        <li v-for="item in usersList" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
    <div class="pagenation">分页</div>
  </div>
</template>

<style lang='less' scoped>
.user-content {
  color: red;
}
</style>
