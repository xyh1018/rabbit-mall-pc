<template>
  <nav>头部导航栏</nav>
  <header>头部组件</header>
  <div class="main">
    <!--二级路由入口-->
    <router-view></router-view>
  </div>
  <footer>底部组件</footer>
</template>

<script>
export default {
  name: 'LayoutItem'
}
</script>

<style lang="less">

</style>
