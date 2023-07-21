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
      state.list = data
    },
    show (state, id) {
      const currCategory = state.list.find(item => item.id === id)
      currCategory.show = true
    },
    hide (state, id) {
      const currCategory = state.list.find(item => item.id === id)
      currCategory.show = false
    }
  },
  actions: {
    async getList (context) {
      const { result } = await getHeadCategory()
      // show控制二级分类列表的显示状态
      result.forEach(item => {
        item.show = false
      })
      context.commit('setList', result)
    }
  }
}
