<template>
  <div class="app-header-fixed" :class="{show: y>78}">
    <div class="container layout">
      <div class="left">
        <img class="logo" src="@/assets/images/logo-rabbit.png" alt="网站logo">
      </div>
      <appHeaderNav></appHeaderNav>
      <div class="right">
        <ul class="right-item">
          <li>
            <RouterLink to="/">品牌</RouterLink>
          </li>
          <li>
            <RouterLink to="/">专题</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import appHeaderNav from '@/components/app-header-nav.vue'
import { useWindowScroll } from '@vueuse/core'
// import { onMounted, ref } from 'vue'

export default {
  name: 'appHeaderFixed',
  components: {
    appHeaderNav
  },
  setup () {
    // const y = ref(0)
    // onMounted(() => {
    //   window.onscroll = () => {
    //     y.value = document.documentElement.scrollTop
    //   }
    // })
    const { y } = useWindowScroll()
    return {
      y
    }
  }
}
</script>

<style scoped lang="less">
.app-header-fixed {
  background: white;
  width: 100%;
  height: 80px;
  position: fixed;
  left: 50%;
  top: 0;
  transform: translateX(-50%) translateY(-100%);
  opacity: 0;
  z-index: 99999;
  transition: all .3s linear;

  &.show {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }

  .layout {
    display: flex;

    .appHeaderNav-container {
      height: 80px;
    }

    .left {
      width: 200px;
      display: flex;
      justify-content: center;
      align-items: center;

      .logo {
        width: 160px;
      }
    }

    .right {
      display: flex;
      align-items: center;
      height: 80px;

      .right-item {
        display: flex;
        justify-content: center;
        align-items: center;
        border-left: 2px #34b99b solid;
        width: 214px;
        margin-top: 10px;

        a:hover {
          color: #34b99b;
        }

        li:first-child {
          margin-right: 40px;
        }

        a {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
