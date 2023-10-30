<script setup lang='ts'>
import { ref, reactive } from 'vue'
import useSystemStore from '@/store/main/system/system'

// 定义父组件传来的类型
interface IModalProps {
  modalConfig: {
    pageName: string
    header: {
      newTitle: string,
      editTitle: string
    },
    formItems: any[],
  }
  otherInfo?: any
}
// 接收父组件传来的数据
const props = defineProps<IModalProps>()
// console.log(props.modalConfig)
// 控制Modal的显示和隐藏
const dialogVisible = ref(false)
const systemStore = useSystemStore()
// 弹出modal的逻辑
function setModalVisible(isNew: boolean = true, itemData?: any) {
  dialogVisible.value = true
  isNewRef.value = isNew
  // 编辑操作
  if (!isNew && itemData) {
    for (const key in formData) {
      formData[key] = itemData[key]
    }
    editData.value = itemData
  } else {
    // 新增操作
    for (const key in formData) {
      formData[key] = ''
    }
    editData.value = null
  }
}
// 遍历将formData的属性给initalData
const initialData: any = {}
for (const item of props.modalConfig.formItems) {
  initialData[item.prop] = item.initialValue ?? ''
}
const formData = reactive<any>(initialData)
const isNewRef = ref(true)

defineExpose({ setModalVisible })
const editData = ref()
// 获取roles、department的数据

//点击确认的逻辑
function HandleConfirmClick() {
  dialogVisible.value = false
  let infoData = formData
  if (props.otherInfo) {
    infoData = { ...infoData, ...props.otherInfo }
  }

  // 新建用户
  if (isNewRef.value) {
    // 创建新的用户
    systemStore.newPageDataAction(props.modalConfig.pageName, infoData)
  } else {//编辑用户
    systemStore.editPageDataAction(props.modalConfig.pageName, editData.value.id, infoData)
  }

}
</script>

<template>
  <div class="user-modal">
    <el-dialog v-model="dialogVisible" :title="isNewRef ? modalConfig.header.newTitle : modalConfig.header.editTitle"
      width="30%" center>
      <el-form :model="formData" label-width="100px">
        <template v-for="item in modalConfig.formItems" :key="item.prop">
          <el-form-item :label="item.label" :prop="item.name">
            <template v-if="item.type === 'input'">
              <el-input v-model="formData[item.prop]" :placeholder="item.placeholder" style="width: 300px;" />
            </template>
            <template v-if="item.type === 'select'">
              <el-select v-model="formData[item.props]" :placeholder="item.placeholder" style="width: 300px;">
                <template v-for="option in item.options" :key="option.value">
                  <el-option :label="option.label" :value="option.value"></el-option>
                </template>
              </el-select>
            </template>
            <template v-if="item.type === 'custom'">
              <!-- 动态插槽，根据 item.slotName 的值插入不同的自定义内容 -->
              <slot :name="item.slotName"></slot>
            </template>
          </el-form-item>
        </template>
      </el-form>

      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="HandleConfirmClick">
            确认
          </el-button>
          <el-button @click="dialogVisible = false">取消</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<style lang='less' scoped>
.user-modal {
  color: red;
}
</style>
