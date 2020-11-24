<template>
  <li
    class="dropdown-option"
    :class="{'is-disabled': disabled}"
  >
    <slot></slot>
  </li>
</template>

<script lang="ts">
export default {
  name: 'DropDownItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
.dropdown-option.is-disabled * {
  color: #ccc;
  pointer-events: none;
}
</style>
