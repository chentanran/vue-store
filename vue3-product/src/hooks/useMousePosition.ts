import { reactive, onMounted, onUnmounted, toRefs } from 'vue'

function useMousePosition() {
  const data = reactive({
    x: 0,
    y: 0,
    updatedMouse: (e: MouseEvent) => {
      data.x = e.pageX
      data.y = e.pageY
    }
  })

  onMounted(() => {
    document.addEventListener('click', data.updatedMouse)
  })

  onUnmounted(() => {
    document.removeEventListener('click', data.updatedMouse)
  })

  const dataRef = toRefs(data)

  return {
    x: dataRef.x,
    y: dataRef.y
  }
}

export default useMousePosition