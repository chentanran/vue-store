<template>
  <div class="dropdown" ref="dropDownRef">
    <a
      href="#"
      class="btn btn-outline-light my-2 dropdown-toggle"
      @click.prevent="toggleOpen"
    >{{ title }}
    </a>
    <ul
      class="dropdown-menu"
      aria-labelledby="dropdownMenuButton"
      :style="{display: 'block'}"
      v-if="isOpen"
    >
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { ref, watch } from 'vue'
import useMouseClick from '@/hooks/useMouseClick'

export default {
  name: 'DropDown',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup () {
    const isOpen = ref(false)
    const dropDownRef = ref<null | HTMLElement>(null)

    const isClickOutSide = useMouseClick(dropDownRef)

    const toggleOpen = () => {
      isOpen.value = !isOpen.value
    }

    watch(isClickOutSide, () => {
      if (isClickOutSide.value && isOpen.value) {
        isOpen.value = false
      }
    })

    return {
      isOpen,
      toggleOpen,
      dropDownRef
    }
  }
}
</script>

<style>

</style>
