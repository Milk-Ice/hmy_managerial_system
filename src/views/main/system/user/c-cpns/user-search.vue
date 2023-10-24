<script setup lang='ts'>

</script>

<template>
  <div class="user-search">
    <el-form label-width="160px">
      <el-row>
        <el-col :span="8">
          <el-form-item label="用户名">
            <el-input placeholder="请输入查询的用户名"></el-input>
          </el-form-item></el-col>
        <el-col :span="8">
          <el-form-item label="真实姓名">
            <el-input placeholder="请输入查询的真实姓名"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="手机号码">
            <el-input placeholder="请输入查询的手机号码"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="状态">
            <el-select placeholder="请选择查询的状态">
              <el-option label="启用" :value="1" />
              <el-option label="禁用" :value="0" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="创建时间">
            <el-date-picker type="daterange" start-placeholder="开始时间" end-placeholder="结束时间" />
          </el-form-item>
        </el-col>
      </el-row>

    </el-form>
    <div class="btns">
      <el-button icon="Refresh">重置</el-button>
      <el-button icon="Search" type="primary">查询</el-button>
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
  padding: 5px 30px;
}

.btns {
  text-align: right;
  padding: 0 50px 10px 0;
}
</style>
