// 分类模块
import { topSort } from '@/api/constants'
import { getHeadCategory } from '@/api/category'

export default {
  namespaced: true,
  state () {
    return {
      // 分类信息集合
      list: topSort.map(item => ({ name: item }))
    }
  },
  mutations: {
    setList (state, data) {
      // state.list = null
      state.list = data
    }
  },
  actions: {
    async getList (context) {
      const { result } = await getHeadCategory()
      context.commit('setList', result)
    }
  }
}
