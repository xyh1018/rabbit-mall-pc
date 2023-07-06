<template>
  <div class="container">
    <!--左侧分类-->
    <HomeCategory></HomeCategory>
    <!--轮播图-->
    <HomeBanner></HomeBanner>
  </div>
</template>

<script>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from '@/views/home/components/HomeBanner.vue'

export default {
  name: 'Home',
  components: {
    HomeCategory,
    HomeBanner
  }
}
</script>

<style scoped lang="less">

</style>
