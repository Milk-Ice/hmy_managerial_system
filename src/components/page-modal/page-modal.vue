<script setup lang="ts">
import { ref, reactive } from 'vue'
import useSystemStore from '@/store/main/system/system'
import type { IModalProps } from './type'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'

import type { UploadProps } from 'element-plus'

// 0.接收父组件传来的数据
const props = defineProps<IModalProps>()

// 1.定义内部的属性
const dialogVisible = ref(false) // 控制Modal的显示和隐藏
const initialData: any = {} // 使用表单项的初始值，如果不存在则使用空字符串

// 遍历父组件传递的表单项配置，将每个表单项的 prop 作为键，初始值作为值存储在 initialData 中
for (const item of props.modalConfig.formItems) {
  initialData[item.prop] = item.initialValue ?? ''
}

const formData = reactive<any>(initialData) // 创建响应式的表单数据对象，用于双向绑定表单数据

const isNewRef = ref(true) // 用于标记当前操作是否是新建操作，默认为 true

const editData = ref() // 用于维护编辑数据，以便在编辑操作时回显已有数据

// 3.获取roles、department的数据
const systemStore = useSystemStore()

// 2.定义设置dialogVisible方法
function setModalVisible(isNew: boolean = true, itemData?: any) {
  dialogVisible.value = true
  isNewRef.value = isNew
  if (!isNew && itemData) {
    // 编辑数据
    for (const key in formData) {
      formData[key] = itemData[key]
    }
    editData.value = itemData
  } else {
    // 新建数据
    for (const key in formData) {
      const item = props.modalConfig.formItems.find((item) => item.prop === key)
      formData[key] = item ? item.initialValue : ''
    }
    editData.value = null
  }
}

// 3.点击了确定的逻辑
function handleConfirmClick() {
  dialogVisible.value = false

  let infoData = formData
  if (props.otherInfo) {
    infoData = { ...infoData, ...props.otherInfo }
  }
  // console.log('传过来的其他数据', props.otherInfo)

  if (!isNewRef.value && editData.value) {
    // 编辑用户的数据
    systemStore.editPageDataAction(
      props.modalConfig.pageName,
      editData.value.id,
      infoData
    )
    console.log('我是要传给服务器的数据', infoData)
  } else {
    // 创建新的部门
    systemStore.newPageDataAction(props.modalConfig.pageName, infoData)
  }
}

// 暴露的属性和方法
defineExpose({ setModalVisible })

// 4.照片上传的逻辑

const imageUrl = ref('')

const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('照片必须是jpg格式')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('照片大小必须在2MB以内')
    return false
  }
  return true
}
const handlePreview: UploadProps['onPreview'] = (file) => {
  console.log(file)
}
</script>

<template>
  <div class="user-modal">
    <el-dialog
      v-model="dialogVisible"
      :title="
        isNewRef ? modalConfig.header.newTitle : modalConfig.header.editTitle
      "
      width="30%"
      center
    >
      <el-form :model="formData" label-width="100px">
        <template v-for="item in modalConfig.formItems" :key="item.prop">
          <el-form-item :label="item.label" :prop="item.name">
            <template v-if="item.type === 'input'">
              <el-input
                v-model="formData[item.prop]"
                :placeholder="item.placeholder"
                style="width: 300px"
              />
            </template>
            <template v-if="item.type === 'select'">
              <el-select
                v-model="formData[item.prop]"
                :placeholder="item.placeholder"
                style="width: 300px"
              >
                <template v-for="option in item.options" :key="option.value">
                  <el-option
                    :label="option.label"
                    :value="option.value"
                  ></el-option>
                </template>
              </el-select>
            </template>
            <template v-if="item.type === 'img'">
              <el-upload
                v-model="formData[item.prop]"
                :on-preview="handlePreview"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
                class="avatar-uploader"
                action="http://codercba.com:5000"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
              </el-upload>
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
          <el-button type="primary" @click="handleConfirmClick">
            确认
          </el-button>
          <el-button @click="dialogVisible = false">取消</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="less" scoped>
.user-modal {
  color: red;
}
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
