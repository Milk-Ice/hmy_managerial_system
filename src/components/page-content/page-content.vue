<script setup lang='ts'>
import { ref } from 'vue'
import { storeToRefs } from 'pinia';
import { formatUTC } from '@/utils/format'
import useSystemStore from '@/store/main/system/system'
import userPermisson from '@/hooks/usePermission'
interface IProps {
  contentConfig: {
    pageName: string
    header?: {
      title?: string
      btnTitle?: string
    },
    propsList: any[],
    childrenTree?: any

  }
}
const props = defineProps<IProps>()
// 1.发起action，请求userList的数据
const systemStore = useSystemStore()

// 2.获取userList数据进行展示（转化为响应数据）
const { pageList, pageToTalCount } = storeToRefs(systemStore)
const currentPage = ref(1)
const pageSize = ref(10)

// 每一页展示数据发生改变
function handleSizeChange() {
  fetchPageListData()
}
// 页码发生改变
function handleCurrentChange() {
  fetchPageListData()
}
// 封装发送请求的函数
function fetchPageListData(formData: any = {}) {
  // 获取size，offset
  const size = pageSize.value
  const offset = (currentPage.value - 1) * size
  const pageInfo = { size, offset }
  const queryInfo = { ...pageInfo, ...formData }
  // console.log('请求参数', queryInfo)
  // 发送网络请求
  systemStore.postPageListAction(props.contentConfig.pageName, queryInfo)
}
defineExpose({ fetchPageListData })
fetchPageListData()

// 删除操作
function HandleDeleteClick(id: number) {
  systemStore.deletePageByIdAction(props.contentConfig.pageName, id)
  fetchPageListData()
}
const emit = defineEmits(['newClick', 'editClick'])
function HandleAddClick() {
  emit('newClick')
}
// 编辑操作
function HandleEditClick(itemData: any) {
  // console.log('edit', itemData)
  emit('editClick', itemData)
}
// 获取是否有增删改查的权限
const isCreate = userPermisson(`${props.contentConfig.pageName}:create`)
const isDelete = userPermisson(`${props.contentConfig.pageName}:delete`)
const isEdit = userPermisson(`${props.contentConfig.pageName}:update`)
</script>

<template>
  <div class="content">
    <div class="header">
      <h3 class="title">{{ contentConfig?.header?.title ?? '数据列表' }}</h3>
      <!-- 增加数据 -->
      <el-button v-if="isCreate" type="primary"
        @click="HandleAddClick">{{ contentConfig?.header?.btnTitle ?? '新建数据' }}</el-button>
    </div>
    <div class="table">
      <el-table :data="pageList" style="width: 100%" row-key="id" border>
        <template v-for="item in contentConfig.propsList" :key="item.prop">
          <template v-if="item.type === 'timer'">
            <el-table-column v-bind="item">
              <template #default="scoped">
                {{ formatUTC(scoped.row[item.prop]) }}
              </template>
            </el-table-column>
          </template>
          <template v-else-if="item.type === 'handler'">
            <!-- 编辑、删除操作 -->
            <el-table-column v-bind="item" align="center">
              <template #default="scoped">
                <el-button v-if="isEdit" type="primary" text icon="Edit"
                  @click="HandleEditClick(scoped.row)">编辑</el-button>
                <el-button v-if="isDelete" type="danger" text icon="Delete"
                  @click="HandleDeleteClick(scoped.row.id)">删除</el-button>
              </template>
            </el-table-column>
          </template>
          <template v-else-if="item.type === 'custom'">
            <el-table-column v-bind="item" align="center" width="400px">
              <template #default="scope">
                <slot :name="item.slotName" v-bind="scope" :prop="item.prop"></slot>
              </template>
            </el-table-column>
          </template>
          <template v-else>
            <el-table-column v-bind="item" align="center" />
          </template>

        </template>
      </el-table>
    </div>
    <div class="pagenation">
      <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :page-sizes="[10, 20, 30]"
        layout="total, sizes, prev, pager, next, jumper" :total="pageToTalCount" @size-change="handleSizeChange"
        @current-change="handleCurrentChange" />
    </div>
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
    padding: 5px 20px;
  }
}

.el-pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}
</style>
