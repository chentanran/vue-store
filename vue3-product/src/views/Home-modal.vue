<template>
  <div class="home">
    <Modal 
      :is-open="modalIsOpen"
      @close-modal="handleClose"
    ></Modal>
    <button @click="openModal">open</button>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import Modal from '../components/Modal.vue'
export default {
  name: 'home',
  components: {
    Modal
  },
  setup() {
    const modalIsOpen = ref(false)

    const openModal = () => {
      modalIsOpen.value = true
    }

    const handleClose = () => {
       modalIsOpen.value = false
    }

    return {
      modalIsOpen,
      openModal,
      handleClose
    }
  }
}

</script>
