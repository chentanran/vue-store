<template>
  <div class="row">
    <div v-for="column in list" :key="column.id" class="col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img
            class="rounded-circle border border-light w-25 my-3"
            :src="column.avatar"
            :alt="column.title" style="height:50px;"
          >
          <h5 class="card-title">{{ column.title }}</h5>
          <p
            class="card-text text-left"
            style="overflow : hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  height: 3rem;"
            >{{ column.description }}</p>
          <router-link class="btn btn-primary" :to="{name: 'columnDetail', query: { id: column.id }}">
            进入专栏
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent /* PropType */ } from 'vue'
export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}
export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      // type: Array as PropType<ColumnProps[]>,
      type: Array as () => ColumnProps[],
      required: true
    }
  }
})
</script>

<style>

</style>
