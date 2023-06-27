import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import cart from './modules/cart'
import user from './modules/user'
import category from './modules/category'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    cart,
    user,
    category
  },
  plugins: [
    // vuex-persistedstate 插件默认存储在localStorage中
    createPersistedState({
      key: 'rabbit-pc-store',
      // 指定需要存储的模块
      paths: ['user', 'cart']
    })
  ]
})
