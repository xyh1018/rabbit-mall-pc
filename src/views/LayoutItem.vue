<template>
  <AppNavbar></AppNavbar>
  <AppHeader></AppHeader>
  <div class="main">
    <!--二级路由入口-->
    <router-view></router-view>
  </div>
  <AppFooter></AppFooter>
</template>

<script>
import AppNavbar from '@/components/app-navbar.vue'
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'

export default {
  name: 'LayoutItem',
  components: {
    AppNavbar,
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="less">
.main {
  height: 1000px;
}
</style>
