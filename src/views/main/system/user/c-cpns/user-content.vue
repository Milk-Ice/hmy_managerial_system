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
  <div class="content">
    <div class="header">
      <h3 class="title">用户列表</h3>
      <el-button type="primary">新建用户</el-button>
    </div>
    <div class="table">
      <el-table :data="usersList" style="width: 100%" border>
        <el-table-column type="selection" width="55" />
        <el-table-column label="序号" type="index" width="55" />

        <el-table-column prop="name" label="用户名" width="180" align="center" />
        <el-table-column prop="realname" label="真实姓名" width="180" align="center" />
        <el-table-column prop="cellphone" label="手机号码" width="180" align="center" />
        <el-table-column prop="enable" label="状态" width="100" align="center" />
        <el-table-column prop="createAt" label="创建时间" align="center" />
        <el-table-column prop="updateAt" label="更新事件" align="center" />
        <el-table-column label="操作" width="260" align="center">
          <el-button type="primary" text icon="Edit">编辑</el-button>
          <el-button type="danger" text icon="Delete">删除</el-button>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagenation">分页</div>
  </div>
</template>

<style lang='less' scoped>
.content {
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 10px;

  .title {
    font-size: 22px;
  }
}

.table {
  :deep(.el-table__cell) {
    padding: 12px 0;
  }

  .el-button {
    margin-left: 0;
    padding: 5px 8px;
  }
}
</style>
