
<script setup lang='ts'>

</script>

<template>
  <div class="mian-menu">
    <div class="logo">
      <img class="img" src="../../assets/img/logo.png" alt="">
      <h2 class="title">管理系统</h2>
    </div>
    <div class="menu">
      <el-menu text-color="#b7bdc3" active-text-color="#fff" background-color="#0a60bd">
        <!-- 系统总览 -->
        <el-sub-menu>
          <template #title>
            <span>系统总览</span>
          </template>
          <el-menu-item>核心技术</el-menu-item>
          <el-menu-item>商品统计</el-menu-item>
        </el-sub-menu>
        <!--系统管理  -->
        <el-sub-menu>
          <template #title>
            <span>系统管理</span>
          </template>
          <el-menu-item>用户管理</el-menu-item>
          <el-menu-item>部门管理</el-menu-item>
          <el-menu-item>菜单管理</el-menu-item>
          <el-menu-item>角色管理</el-menu-item>
        </el-sub-menu>
        <!-- 商品中心 -->
        <el-sub-menu>
          <template #title>
            <span>商品中心</span>
          </template>
          <el-menu-item>商品类别</el-menu-item>
          <el-menu-item>商品信息</el-menu-item>
        </el-sub-menu>
        <!-- 随便聊聊 -->
        <el-sub-menu>
          <template #title>
            <span>随便聊聊</span>
          </template>
          <el-menu-item>你的故事</el-menu-item>
          <el-menu-item>故事列表</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
  </div>
</template>

<style lang='less' scoped>
.mian-menu {

  .logo {
    height: 28px;
    display: flex;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 17px;
      font-weight: 700;
      color: white;
      white-space: nowrap;
    }
  }

  .menu {
    .el-menu {
      border-right: none;
      user-select: none;
      background-color: #0c2135;
    }

    .el-sub-menu {
      .el-menu-item {
        padding-left: 50px !important;
        background-color: #0c2135;
      }

      .el-menu-item:hover {
        color: #fff;
        background-color: #0a60bd;
      }

      .el-menu-item.is-active {
        background-color: #0a60bd
      }
    }

  }
}
</style>
