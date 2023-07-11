<template>
  <div class="home-banner" style="height: 500px">
    <div class="container">
      <!--左侧分类-->
      <HomeCategory></HomeCategory>
      <!--轮播图-->
      <HomeBanner></HomeBanner>
    </div>
  </div>
  <div class="home-new">
    <HomeNew></HomeNew>
  </div>
  <div class="home-hot">
    <HomeHot></HomeHot>
  </div>
  <div class="home-brand">
    <HomeBrand></HomeBrand>
  </div>
  <div class="home-product">
    <HomeProduct></HomeProduct>
  </div>
  <div class="home-special">
    <HomeSpecial></HomeSpecial>
  </div>
</template>

<script>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import HomeBrand from './components/HomeBrand.vue'
import HomeSpecial from '@/views/home/components/HomeSpecial.vue'
import HomeProduct from '@/views/home/components/HomeProduct.vue'

export default {
  name: 'Home',
  components: {
    HomeProduct,
    HomeSpecial,
    HomeBrand,
    HomeHot,
    HomeCategory,
    HomeBanner,
    HomeNew
  }
}
</script>

<style scoped lang="less">
.home-new {
  background-color: #fff;
  overflow: hidden;
  padding-bottom: 20px;
}

.home-hot {
  background: #fff;
}

.home-hot {
  padding-bottom: 20px;
}

.home-brand {
  padding-bottom: 40px;
}

.home-product {
  background: white;
}

.home-special {
  padding-bottom: 40px;
}
</style>
