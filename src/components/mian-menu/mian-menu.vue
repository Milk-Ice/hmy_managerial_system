
<script setup lang='ts'>
import useLoginStore from "@/store/login/login";

const loginStore = useLoginStore()
const userMenu = loginStore.userMenus

// console.log(userMenu)
</script>

<template>
  <div class="mian-menu">
    <div class="logo">
      <img class="img" src="../../assets/img/logo.png" alt="">
      <h2 class="title">管理系统</h2>
    </div>
    <div class="menu">
      <el-menu text-color="#b7bdc3" active-text-color="#fff" background-color="#0a60bd">
        <!-- 遍历整个菜单 -->
        <template v-for="item in userMenu" :key="item.id">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <!-- 动态组件 -->
              <el-icon>
                <component :is="item.icon.split('-icon-')[1]" />
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <!-- 遍历菜单的子元素 -->
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item :index="subitem.id + ''">{{ subitem.name }}</el-menu-item>
            </template>
          </el-sub-menu>
        </template>
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
