const http = uni.$u.http

const get = (url, params) => {
  return http.get(url, {
    params
  })
}
const post = (url, params) => {
  return http.post(url, params)
}

// const baseURL = 'http://113.57.111.48:81/ylc'
const baseURL = 'http://192.168.1.32:9999'
// const baseURL = 'http://192.168.0.219:1099'

export {
  get,
  post,
  baseURL
}