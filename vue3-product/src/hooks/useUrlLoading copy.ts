import { reactive, toRefs } from 'vue'
import axios from 'axios'

function useUrlLoading(url: string) {
  const data = reactive({
    loading: true,
    loaded: false,
    result: null,
    error: null
  })

  axios.get(url).then(res => {
    data.loading = false
    data.loaded = true
    data.result = res.data
  }).catch(e => {
    data.error = e
    data.loading = false
  })

  const dataRef = toRefs(data)

  return {
    ...dataRef
  }
}

export default useUrlLoading