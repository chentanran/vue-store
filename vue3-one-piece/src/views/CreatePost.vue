<template>
  <div>
    <ValidateForm @form-submit="handlesSubmit">
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
export default {
  name: 'createPost',
  components: {
    ValidateForm,
    ValidateInput
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

    return {
      title,
      handlesSubmit,
      content
    }
  }
}
</script>

<style>

</style>
