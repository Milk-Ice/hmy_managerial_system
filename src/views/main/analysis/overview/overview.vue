<template>
  <div class="txt">
    <my-card />
    <div class="button">
      <el-button type="primary" @click="viewTxtFile"
        >查看项目目录结构</el-button
      >
    </div>
  </div>
  <div class="table">
    <my-table />
  </div>
</template>

<script setup lang="ts">
import myTable from './c-cpns/my-table.vue'
import myCard from './c-cpns/my-card.vue'
const viewTxtFile = () => {
  // 你的 TXT 文档路径，假设在 src 目录下
  const txtFilePath = 'TRELL.txt'

  // 使用 Fetch API 加载文本文件
  fetch(txtFilePath)
    .then((response) => response.text())
    .then((txtContent) => {
      displayTxtContent(txtContent)
    })
    .catch((error) => {
      console.error('无法加载文本文件', error)
    })
}

const displayTxtContent = (content) => {
  // 创建一个新窗口或弹出框来显示文本内容
  const txtViewer = window.open('', '_blank')
  txtViewer?.document.open()
  txtViewer?.document.write('<pre>' + content + '</pre>')
  txtViewer?.document.close()
}
</script>

<style lang="less" scoped>
.button {
  display: flex;
  justify-content: end;
}

.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}

.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>
