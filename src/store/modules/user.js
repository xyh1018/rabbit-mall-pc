// 用户模块
export default {
  namespaced: true,
  state () {
    return {
      profile: {
        id: '',
        avatar: '',
        nickname: '',
        account: '',
        mobile: '',
        token: ''
      }
    }
  },
  mutations: {
    setUser (state, data) {
      state.profile = data
    }
  }
}
