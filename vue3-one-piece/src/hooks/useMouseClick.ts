import { ref, onMounted, onUnmounted, Ref } from 'vue'

function useMouseClick (MouseRef: Ref<null | HTMLElement>) {
  const isClickOutSide = ref(false)

  const handleEvent = (e: MouseEvent) => {
    if (MouseRef.value) {
      if (MouseRef.value.contains(e.target as HTMLElement)) {
        isClickOutSide.value = false
      } else {
        isClickOutSide.value = true
      }
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleEvent)
  })

  onUnmounted(() => {
    document.removeEventListener('click', handleEvent)
  })

  return isClickOutSide
}

export default useMouseClick
