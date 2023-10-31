<script setup lang='ts'>
interface IProps {
  title?: string
  tips?: string
  number1?: string
  number2?: string
  subtitle?: string
}
withDefaults(defineProps<IProps>(), {
  title: '商品总销量',
  tips: '所有商品总销量',
  number1: '509899',
  number2: '509899',
  subtitle: '商品总销量'
})

</script>

<template>
  <div class="count-card">
    <div class="header">
      <span>{{ title }}</span>
      <el-tooltip class="box-item" effect="dark" :content="tips" placement="top">
        <el-icon>
          <ShoppingBag />
        </el-icon>
      </el-tooltip>
    </div>
    <div class="content">
      <span>{{ number1 }}</span>
    </div>
    <div class="footer">
      <span>{{ subtitle }}:&nbsp;</span>
      <span>{{ number2 }}</span>
    </div>
  </div>
</template>

<style lang='less' scoped>
.count-card {
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  background-color: white;
  height: 130px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.header {
  display: flex;
  height: 38px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
  justify-content: space-between;
  align-items: center;
}

.content {
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 0px;
  font-size: 26px;
  color: rgba(0, 0, 0, 0.86);
}

.footer {
  display: flex;
  height: 38px;
  line-height: 38px;
  font-size: 14px;
  letter-spacing: 1px;
  color: rgba(0, 0, 0, 0.86);
  border-top: 1px solid #f0f0f0;
}
</style>
