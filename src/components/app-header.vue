<template>
  <div class="appHeader-container">
    <div class="container layout">
      <div class="left">
        <img class="logo" src="@/assets/images/logo-rabbit.png" alt="网站logo">
      </div>
      <AppHeaderNav></AppHeaderNav>
      <div class="right">
        <div class="search">
          <i class="iconfont icon-sousuoxiao"></i>
          <input type="text" placeholder="搜一搜">
        </div>
        <div class="cart">
          <i class="iconfont icon-gouwuche"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeaderNav from '@/components/app-header-nav.vue'

export default {
  name: 'AppHeader',
  components: {
    AppHeaderNav
  }
}
</script>

<style scoped lang="less">
.appHeader-container {
  height: 132px;
  background: #ffffff;

  .layout {
    display: flex;
    z-index: 99999;

    .left {
      width: 200px;
      display: flex;
      justify-content: center;
      align-items: center;

      .logo {
        width: 200px;
      }
    }

    .right {
      display: flex;
      align-items: center;
      height: 132px;

      .search {
        display: flex;
        align-items: center;
        width: 170px;
        border-bottom: 1px #cccccc solid;
        margin-top: 10px;

        input {
          padding: 0 10px 5px;
          width: 150px;
        }
      }

      .cart {
        margin: 10px 10px 0;
      }

      .icon-gouwuche {
        font-size: 24px;
      }

      .icon-sousuoxiao {
        padding: 0 0 5px 5px;
      }
    }
  }
}
</style>
