<template>
  <div class="appNavbar-container">
    <div class="container">
      <ul class="appNavbar-ul">
        <template v-if="profile.token">
          <li><a href="#"><i class="iconfont icon-yonghu"></i>{{ profile.account }}</a></li>
          <li><a href="#">退出登录</a></li>
        </template>
        <template v-else>
          <li><a href="#">请先登录</a></li>
          <li><a href="#">免费注册</a></li>
        </template>
        <li><a href="#">我的订单</a></li>
        <li><a href="#">会员中心</a></li>
        <li><a href="#">帮助中心</a></li>
        <li><a href="#">在线客服</a></li>
        <li><a href="#"><i class="iconfont icon-shouji"></i>手机版</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  name: 'AppNavbar',
  setup () {
    const store = useStore()
    const profile = store.state.user.profile
    return {
      profile
    }
  }
}
</script>

<style scoped lang="less">
.appNavbar-container {
  background: #333333;
  height: 50px;

  .appNavbar-ul {
    display: flex;
    line-height: 50px;
    justify-content: end;

    li {
      &::before {
        content: '|';
        color: #cccccc;
        padding: 0 8px;
      }

      &:first-child::before {
        content: none;
      }
    }

    a {
      &:hover {
        color: #34b99b;
      }

      color: #cccccc;
      font-size: 14px;

      i {
        font-size: 14px;
      }
    }
  }
}
</style>
