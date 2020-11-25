<template>
  <div>
    <input
      type="email"
      class="form-control"
      :class="{ 'is-invalid': inputRef.error }"
      aria-describedby="emailHelp"
      :value="inputRef.val"
      @blur="validateInput"
      @input="updateValue"
      v-bind="$attrs"
    >
    <div class="invalid-feedback" v-if="inputRef.error">{{ inputRef.message }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue'
import { emitter } from './ValidateForm.vue'
const emailReg = /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/

interface RuleProp {
  type: 'required' | 'email';
  message: string;
}

export type RulesProp = RuleProp[]
export default defineComponent({
  name: 'ValidateInput',
  props: {
    rules: Array as () => RulesProp,
    modelValue: String
  },
  setup (props, context) {
    const inputRef = reactive({
      val: props.modelValue || '',
      error: false,
      message: ''
    })

    const validateInput = () => {
      if (props.rules) {
        const allPassed = props.rules.every(rule => {
          let passed = true
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              passed = (inputRef.val.trim() !== '')
              break
            case 'email':
              passed = emailReg.test(inputRef.val)
              break
            default:
              break
          }
          return passed
        })
        inputRef.error = !allPassed
        return allPassed
      }
      return true
    }

    const updateValue = (e: Event) => {
      const targetValue = (e.target as HTMLInputElement).value
      inputRef.val = targetValue
      context.emit('update:modelValue', targetValue)
    }

    onMounted(() => {
      emitter.emit('validate-item', validateInput)
    })

    return {
      inputRef,
      validateInput,
      updateValue
    }
  }
})
</script>

<style>

</style>
