import axios from 'axios'
const http = axios.create({
  baseURL: 'http://toutiao-app.itheima.net/',
  timeout: 5000
})
export default http
