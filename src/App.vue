<template>
  <div>{{ $store.state.user.username }}</div>
  <button @click="setName">改变用户名</button>
</template>
<script>
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()

    function setName () {
      console.log(store)
      store.commit('user/setName', '苏巧玉')
    }

    return {
      setName
    }
  }
}
</script>
<style lang="less">

</style>
