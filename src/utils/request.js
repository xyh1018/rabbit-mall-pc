import axios from 'axios'
import store from '@/store'
import router from '@/router'
// 新建axios实例
const request = axios.create({
  baseURL: 'https://apipc-xiaotuxian-front.itheima.net/',
  timeout: 5000
})

request.interceptors.request.use(
  (config) => {
    // 设置请求头认证信息
    if (store.state.user.profile.token) {
      config.headers.Authorization = `Bearer ${store.state.user.profile.token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
request.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    console.log(error)
    const code = error.response.status
    if (code === 401) {
      // 清空无效用户信息
      store.commit('user/setUser', {
        id: '',
        avatar: '',
        nickname: '',
        account: '',
        mobile: '',
        token: ''
      })
      // 跳转到登录页
      // 跳转到之前的页面
      redirectLogin()
    }
    return Promise.reject(error.message)
  }
)

function redirectLogin () {
  const path = encodeURIComponent(router.currentRoute.value.fullPath)
  // 重定向登录页时,添加查询参数,用于登录后重定向到之前的页面
  router.push('/login?redirectUrl=' + path)
}

export default request
