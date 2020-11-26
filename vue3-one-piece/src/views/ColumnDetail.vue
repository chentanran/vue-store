<template>
  <div class="column-detail-page w-75 mx-auto">
    <div class="column-info row mb-4 border-bottom pb-4 align-items-center" v-if="column">
      <div class="col-3 text-center">
        <img :src="column.avatar && column.avatar" :alt="column.title" class="rounded-circle border w-100">
      </div>
      <div class="col-9">
        <h4>{{column.title}}</h4>
        <p class="text-muted">{{column.description}}</p>
      </div>
    </div>
    <PostList :list="list"></PostList>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import PostList from '../components/PostList.vue'
import { useStore } from 'vuex'
import { ColumnProps, PostProps } from '../mock/testData'
export default defineComponent({
  name: 'columnDetail',
  components: {
    PostList
  },
  setup () {
    const store = useStore()
    const testData = computed(() => store.state.columns)
    const testPosts = computed(() => store.state.posts)
    const route = useRoute()
    const currentId = Number(route.query.id)
    const column = testData.value.find((c: ColumnProps) => c.id === currentId)
    const list = testPosts.value.filter((post: PostProps) => post.columnId === currentId)
    return {
      column,
      list
    }
  }
})
</script>

<style>

</style>
