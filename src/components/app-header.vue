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
    align-items: center;

    .left {
      .logo {
        width: 200px;
        padding-bottom: 15px;
      }
    }

    .right {
      display: flex;
      align-items: center;

      .search {
        display: flex;

        align-items: center;
        width: 170px;
        border-bottom: 1px #cccccc solid;

        input {
          padding: 0 10px 5px;
          width: 150px;
        }
      }

      .cart {
        margin: 0 10px;
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
