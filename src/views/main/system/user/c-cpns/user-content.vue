<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { formatUTC } from '@/utils/format'
import usePermissions from '@/hooks/usePermission'
import useSystemStore from '@/store/main/system/system'
// 1.发起action，请求userList的数据
const systemStore = useSystemStore()

// 用户的权限判断
const isCreate = usePermissions('users:create')
const isDelete = usePermissions('users:delete')
const isUpdate = usePermissions('users:update')
const isQuery = usePermissions('users:query')

// 2.获取userList数据进行展示（转化为响应数据）
const { usersList, userTotalCount } = storeToRefs(systemStore)
const currentPage = ref(1)
const pageSize = ref(10)

// 每一页展示数据发生改变
function handleSizeChange() {
  fetchUserListData()
}
// 页码发生改变
function handleCurrentChange() {
  fetchUserListData()
}
// 封装发送请求的函数
function fetchUserListData(formData: any = {}) {
  if (!isQuery) return
  // 获取size，offset
  const size = pageSize.value
  const offset = (currentPage.value - 1) * size
  const pageInfo = { size, offset }
  const queryInfo = { ...pageInfo, ...formData }
  // console.log(queryInfo)
  // 发送网络请求
  systemStore.postUserListAction(queryInfo)
}
defineExpose({ fetchUserListData })
fetchUserListData()

// 删除操作
function HandleDeleteClick(id: number) {
  systemStore.deleteUserListAction(id)

  fetchUserListData()
}
const emit = defineEmits(['newClick', 'editClick'])
function HandleAddClick() {
  emit('newClick')
}
// 编辑操作
function HandleEditClick(itemData: any) {
  console.log('edit', itemData)
  emit('editClick', itemData)
}
</script>

<template>
  <div class="content">
    <div class="header">
      <h3 class="title">用户列表</h3>
      <el-button v-if="isCreate" type="primary" @click="HandleAddClick"
        >新建用户</el-button
      >
    </div>
    <div class="table">
      <el-table :data="usersList" style="width: 100%" border>
        <el-table-column type="selection" width="55" />
        <el-table-column label="序号" type="index" width="55" />

        <el-table-column
          prop="name"
          label="用户名"
          width="180"
          align="center"
        />
        <el-table-column
          prop="realname"
          label="真实姓名"
          width="180"
          align="center"
        />
        <el-table-column
          prop="cellphone"
          label="手机号码"
          width="180"
          align="center"
        />
        <el-table-column prop="enable" label="状态" width="100" align="center">
          <template #default="scoped">
            <el-button :type="scoped.row.enable ? 'success' : 'danger'" plain>
              {{ scoped.row.enable ? '启用' : '禁用' }}
            </el-button>
          </template>
        </el-table-column>
        <el-table-column prop="createAt" label="创建时间" align="center">
          <template #default="scoped">
            {{ formatUTC(scoped.row.createAt) }}
          </template>
        </el-table-column>
        <el-table-column prop="updateAt" label="更新事件" align="center">
          <template #default="scoped">
            {{ formatUTC(scoped.row.updateAt) }}
          </template>
        </el-table-column>
        <!-- 新增、删除操作 -->
        <el-table-column label="操作" width="260" align="center">
          <template #default="scoped">
            <el-button
              v-if="isUpdate"
              type="primary"
              text
              icon="Edit"
              @click="HandleEditClick(scoped.row)"
              >编辑</el-button
            >
            <el-button
              v-if="isDelete"
              type="danger"
              text
              icon="Delete"
              @click="HandleDeleteClick(scoped.row.id)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagenation">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="userTotalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<style lang="less" scoped>
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

.el-pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}
</style>
