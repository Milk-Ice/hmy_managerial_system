<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { CountUp } from 'countup.js'
interface IProps {
  amount?: string
  title?: string
  tips?: string
  number1?: number
  number2?: number
  subtitle?: string
}
const props = withDefaults(defineProps<IProps>(), {
  title: '商品总销量',
  tips: '所有商品总销量',
  number1: 509899,
  number2: 509899,
  subtitle: '商品总销量'
})
// 创建countup实例对象
const count1Ref = ref<HTMLElement>()
const count2Ref = ref<HTMLElement>()
const countOption = {
  prefix: props.amount === 'saleroom' ? '￥' : ''
}
// 要等Dom渲染完成才可以执行操作
onMounted(() => {
  const countup1 = new CountUp(count1Ref.value!, props.number1, countOption)
  const countup2 = new CountUp(count1Ref.value!, props.number2, countOption)
  countup1.start()
  countup2.start()
})
</script>

<template>
  <div class="count-card">
    <div class="header">
      <span>{{ title }}</span>
      <el-tooltip
        class="box-item"
        effect="dark"
        :content="tips"
        placement="top"
      >
        <el-icon>
          <ShoppingBag />
        </el-icon>
      </el-tooltip>
    </div>
    <div class="content">
      <span ref="count1Ref">{{ number1 }}</span>
    </div>
    <div class="footer">
      <span>{{ subtitle }}:&nbsp;</span>
      <span ref="count2Ref">{{ number2 }}</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
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
