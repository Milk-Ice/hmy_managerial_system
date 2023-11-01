<script setup lang="ts">
import type { ElForm } from 'element-plus'
import { reactive, ref } from 'vue'
import userPermisson from '@/hooks/usePermission'

interface IProps {
  searchConfig: {
    pageName: string
    formItems: any[]
  }
}
const props = defineProps<IProps>()

const initialForm: any = {}
// console.log(props)
// 定义Form的数据
for (const item of props.searchConfig.formItems) {
  initialForm[item.prop] = item.initialForm ?? ''
}
const searchForm = reactive(initialForm)
// 1.自定义事件
const emit = defineEmits(['queryClick', 'resetClick'])
// 重置操作
function hanleResetClick() {
  // formData里数据重置
  formRef.value?.resetFields()
  // 事件发射出去，content内部重新发送网络请求
  emit('resetClick')
}
// 查询操作
function handleQueryClick() {
  emit('queryClick', searchForm)
  // console.log('Search-Click')
}

const isQuery = userPermisson(`${props.searchConfig.pageName}:query`)

const formRef = ref<InstanceType<typeof ElForm>>()
</script>

<template>
  <div class="user-search" v-if="isQuery">
    <el-form :model="searchForm" ref="formRef" label-width="80px">
      <el-row :gutter="20">
        <template v-for="item in searchConfig.formItems" :key="item.props">
          <el-col :span="8">
            <el-form-item :label="item.label" :prop="item.prop">
              <template v-if="item.type === 'input'">
                <el-input
                  v-model="searchForm[item.prop]"
                  :placeholder="item.placeholder"
                />
              </template>
              <template v-if="item.type === 'date-picker'">
                <el-date-picker
                  v-model="searchForm[item.prop]"
                  type="daterange"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                />
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="btns">
      <el-button icon="Refresh" @click="hanleResetClick">重置</el-button>
      <el-button icon="Search" type="primary" @click="handleQueryClick"
        >查询</el-button
      >
    </div>
  </div>
</template>

<style lang="less" scoped>
.user-search {
  background-color: #fff;
  padding: 20px;
  margin-bottom: 0;
}

.el-form-item {
  margin-top: 20px;
  padding: 5px 50px;
}

.btns {
  margin-top: 10px;
  text-align: right;
  padding: 0 50px 10px 0;
}
</style>
