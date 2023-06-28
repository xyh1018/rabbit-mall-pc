<template>
  <!--    一级路由出口-->
  <router-view></router-view>
</template>
<script>
import { login } from '@/api/user'

export default {
  setup () {
    function loginFn () {
      login({
        account: 'demo',
        password: 'hm#qd@23!'
      })
    }

    return {
      loginFn
    }
  }
}
</script>
<style lang="less">

</style>
