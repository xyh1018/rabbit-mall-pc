<template>
  <AppNavbar></AppNavbar>
  <AppHeader></AppHeader>
  <AppHeaderFixed></AppHeaderFixed>
  <div class="app-body">
    <!--二级路由入口-->
    <router-view :key="$route.params.id"></router-view>
  </div>
  <AppFooter></AppFooter>
</template>

<script>
import AppNavbar from '@/components/app-navbar.vue'
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'
import AppHeaderFixed from '@/components/app-header-fixed.vue'
import { useStore } from 'vuex'

export default {
  name: 'LayoutItem',
  components: {
    AppNavbar,
    AppHeader,
    AppFooter,
    AppHeaderFixed
  },
  setup () {
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>

<style lang="less">
.app-body {

}

.app-header-fixed {

}
</style>
