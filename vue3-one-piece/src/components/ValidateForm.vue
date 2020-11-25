<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'
type ValidFunc = () => boolean
export const emitter = mitt()
export default defineComponent({
  name: 'ValidateForm',
  emits: ['form-submit'],
  setup (props, context) {
    const allValidateInput: ValidFunc[] = []

    const submitForm = () => {
      const result = allValidateInput.map(func => func()).every(item => item)
      console.log(result, 'result', allValidateInput)
      context.emit('form-submit', result)
    }

    const callback = (func: ValidFunc | undefined) => {
      if (func) {
        allValidateInput.push(func)
      }
    }

    emitter.on('validate-item', callback)

    onUnmounted(() => {
      emitter.off('validate-item', callback)
    })

    return {
      submitForm
    }
  }
})
</script>

<style>

</style>
