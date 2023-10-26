<script setup lang='ts'>
import type { ElForm } from 'element-plus';
import { reactive, ref } from 'vue';

const searchForm = reactive({
  name: '',
  realname: '',
  leader: '',
  createAt: '',
})
// 1.自定义事件
const emit = defineEmits(['queryClick', 'resetClick'])
// 2.
function HandleQueryClick() {
  emit('queryClick')
}
// 重置操作
function hanleResetClick() {
  // formData里数据重置
  formRef.value?.resetFields()
  // 事件发射出去，content内部重新发送网络请求
  emit('resetClick')
}
// 查询操作
function handleSearchClick() {
  HandleQueryClick()
  // console.log('Search-Click')
}
const formRef = ref<InstanceType<typeof ElForm>>()
</script>

<template>
  <div class="user-search">
    <el-form :model="searchForm" ref="formRef" label-width="80px">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="部门名称" prop="name">
            <el-input v-model="searchForm.name" placeholder="请输入查询的部门名称"></el-input>
          </el-form-item></el-col>
        <el-col :span="8">
          <el-form-item label="部门领导" prop="leader">
            <el-input v-model="searchForm.leader" placeholder="请输入查询的部门领导"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="创建时间" prop="createAt">
            <el-date-picker v-model="searchForm.createAt" type="daterange" start-placeholder="开始时间"
              end-placeholder="结束时间" />
          </el-form-item>
        </el-col>
      </el-row>

    </el-form>
    <div class="btns">
      <el-button icon="Refresh" @click="hanleResetClick">重置</el-button>
      <el-button icon="Search" type="primary" @click="handleSearchClick">查询</el-button>
    </div>
  </div>
</template>

<style lang='less' scoped>
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
