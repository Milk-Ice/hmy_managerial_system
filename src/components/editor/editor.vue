<template>
  <div class="title">
    <el-input v-model="title" placeholder="请输入标题" style="width: 500px">
      <template #prepend>标题</template>
    </el-input>
  </div>
  <div class="editor">
    <div style="border: 1px solid #ccc">
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
      />
      <Editor
        style="height: 500px; overflow-y: hidden"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="handleCreated"
      />
    </div>
  </div>

  <div class="button">
    <el-button type="primary" size="large" @click="HandleSubmitForm"
      >发送</el-button
    >
  </div>
</template>
<script lang="ts">
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { htmlToText } from 'html-to-text' //HTML 转换为纯文本的库
import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { postStory } from '@/service/mian/story/story'

export default {
  components: { Editor, Toolbar },
  setup() {
    // 标题
    const title = ref('')
    // 编辑器实例，必须用 shallowRef
    const editorRef = shallowRef()

    // 内容 HTML
    const valueHtml = ref('<p>hello</p>')

    // 模拟 ajax 异步获取内容
    onMounted(() => {
      setTimeout(() => {
        valueHtml.value = '<p>欢迎书写你的故事</p>'
      }, 1500)
    })

    const toolbarConfig = {}
    const editorConfig = { placeholder: '请输入内容...' }

    // 组件销毁时，也及时销毁编辑器
    onBeforeUnmount(() => {
      const editor = editorRef.value
      if (editor == null) return
      editor.destroy()
    })

    const handleCreated = (editor: any) => {
      editorRef.value = editor // 记录 editor 实例，重要！
    }
    // 处理点击提交后的逻辑
    const HandleSubmitForm = async () => {
      const text = htmlToText(valueHtml.value)
      const res = await postStory({
        title: title.value,
        content: text
      })
      console.log(res)
    }
    return {
      title,
      editorRef,
      valueHtml,
      mode: 'default', // 或 'simple'
      toolbarConfig,
      editorConfig,
      handleCreated,
      HandleSubmitForm
    }
  }
}
</script>
<style>
.title {
  margin: 10px 0px;
}
.button {
  display: flex;
  justify-content: end;
}
.input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}
</style>
