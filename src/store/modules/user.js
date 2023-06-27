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
      },
      username: '夏远浩'
    }
  },
  mutations: {
    setName (state, data) {
      state.username = data
    }
  }
}
