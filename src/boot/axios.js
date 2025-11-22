import { boot } from 'quasar/wrappers'
import axios from 'axios'

// No ponemos baseURL porque usaremos dos APIs distintas
const api = axios.create()

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api
})

export { api }
