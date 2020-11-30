<template>
  <div>
    <ValidateForm @form-submit="handlesSubmit">
      <uploader
        action="/upload"
        :beforeUpload="uploadCheck"
        @file-uploaded="handleFileUploaded"
        class="d-flex align-items-center justify-content-center bg-light text-secondary w-100 my-4"
      >
        <h2>点击上传头图</h2>
        <template #loading>
          <div class="d-flex">
            <div class="spinner-border text-secondary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <h2>正在上传</h2>
          </div>
        </template>
        <template #uploaded="dataProps">
          <div class="uploaded-area">
            <img :src="dataProps.uploadedData.data.url">
            <h3>点击重新上传</h3>
          </div>
        </template>
      </uploader>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">文章标题：</label>
        <ValidateInput
          v-model="title"
          placeholder="请输入标题"
        ></ValidateInput>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">文章内容：</label>
        <ValidateInput
          tag="textarea"
          v-model="content"
          placeholder="请输入内容"
        ></ValidateInput>
      </div>
      <template v-slot:submit>
        <span class="btn btn-danger">提交</span>
      </template>
    </ValidateForm>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import ValidateForm from '@/components/ValidateForm.vue'
import ValidateInput from '@/components/ValidateInput.vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { PostProps } from '../mock/testData'
import Uploader from '@/components/Uploader.vue'
import createMessage from '@/components/createMessage'
export default {
  name: 'createPost',
  components: {
    ValidateForm,
    ValidateInput,
    Uploader
  },
  setup () {
    const title = ref('')
    const content = ref('')
    const router = useRouter()
    const store = useStore()

    const handlesSubmit = (formValid: boolean) => {
      if (formValid) {
        const { columnId } = store.state.user
        const newPost: PostProps = {
          id: new Date().getTime(),
          title: title.value,
          content: content.value,
          columnId,
          createdAt: new Date().toLocaleDateString()
        }
        store.commit('createPost', newPost)
        router.push({ name: 'columnDetail', query: { id: columnId } })
      }
    }

    const beforeUpload = (file: File) => {
      const isJPG = file.type === 'image/jpeg'
      if (!isJPG) {
        createMessage('上传图片只能是 JPG 格式!', 'error')
      }
      return isJPG
    }
    // eslint-disable-next-line
    const onFileUploader = (data: any) => {
      console.log(data)
      createMessage('上传成功!', 'success')
    }

    const onFileUploaderError = (data: Error) => {
      console.log(data)
      createMessage('上传失败!', 'error')
    }

    return {
      title,
      handlesSubmit,
      content,
      beforeUpload,
      onFileUploader,
      onFileUploaderError
    }
  }
}
</script>

<style>

</style>
