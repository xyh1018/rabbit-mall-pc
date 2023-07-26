<template>
  <XtxBread>
    <XtxBreadItem path="/">{{ '首页' }}</XtxBreadItem>
    <XtxBreadItem :path="`/category/${category.top.id}`">{{ category.top.name }}</XtxBreadItem>
    <Transition name="fade-right" appear>
      <XtxBreadItem>{{ category.sub.name }}</XtxBreadItem>
    </Transition>
  </XtxBread>
</template>

<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

export default {
  setup () {
    const store = useStore()
    const route = useRoute()
    const category = computed(() => {
      const cate = {}
      // 遍历vuex的数据,找到与当前路由id相同的那个对象
      store.state.category.list.forEach(top => {
        if (top.children) {
          const sub = top.children.find(sub => sub.id === route.params.id)
          if (sub) {
            cate.top = {
              id: top.id,
              name: top.name
            }
            cate.sub = {
              id: sub.id,
              name: sub.name
            }
          }
        }
      })
      return cate
    })
    console.log('SubBreak', category.value)
    return {
      category
    }
  }
}
</script>
