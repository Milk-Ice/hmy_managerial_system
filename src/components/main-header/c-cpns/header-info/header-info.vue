<script setup lang='ts'>
import { LOGIN_TOKEN } from '@/gobal/constants'
import router from '@/router'
import useLoginStore from '@/store/login/login'
import { localCache } from '@/utils/cache'

function handleExitClick() {
  localCache.removeCache(LOGIN_TOKEN)
  router.push("/login")

}
const loginStore = useLoginStore()
const { userInfo } = loginStore
</script>

<template>
  <div class="header-info">
    <div class="operation">
      <span>
        <el-icon>
          <Message />
        </el-icon>
      </span>
      <span class="dot">
        <el-icon>
          <ChatDotRound />
        </el-icon></span>
      <span><el-icon>
          <Search />
        </el-icon></span>
    </div>
    <div class="info">
      <el-dropdown>
        <span class="user-info">
          <el-avatar :size="30"
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202108%2F05%2F20210805211949_e77e4.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1700572330&t=57e06d29089830a97a93f9a67cc3044d" />
          <span class="name">{{ userInfo.name }}</span>
        </span>
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleExitClick">退出登录</el-dropdown-item>
            <el-dropdown-item divided>个人信息</el-dropdown-item>
            <el-dropdown-item>修改资料</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style lang='less' scoped>
.header-info {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}

.operation {
  display: flex;
  margin-right: 20px;

  span {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 35px;

    &:hover {
      background-color: #fff;
    }

    i {
      font-size: 20px;
    }

    .dot {
      position: absolute;
      top: 3px;
      right: 3px;
      z-index: 10;
      width: 6px;
      height: 6px;
      background: red;
      border-radius: 100%;
    }
  }
}

.info {
  .user-info {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .name {
      margin-left: 5px;
      text-align: center;
    }
  }
}

.info {
  :global(.el-dropdown-menu__item) {
    line-height: 36px !important;
    padding: 6px 22px;
  }
}
</style>
