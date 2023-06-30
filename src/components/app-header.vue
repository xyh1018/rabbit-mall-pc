<template>
  <div class="appHeader-container">
    <div class="container layout">
      <div class="left">
        <img class="logo" src="@/assets/images/logo-rabbit.png" alt="网站logo">
      </div>
      <div class="main-content">
        <ul class="sortMenu">
          <li><a href="#">首页</a></li>
          <li><a href="#">居家</a></li>
          <li><a href="#">美食</a></li>
          <li><a href="#">服饰</a></li>
          <li><a href="#">母婴</a></li>
          <li><a href="#">个护</a></li>
          <li><a href="#">严选</a></li>
          <li><a href="#">数码</a></li>
          <li><a href="#">运动</a></li>
          <li><a href="#">杂项</a></li>
        </ul>
      </div>
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
export default {
  name: 'AppHeader',
  setup () {

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

    .main-content {
      flex: 1;
      display: flex;
      justify-content: center;

      .sortMenu {
        display: flex;

        li {
          height: 132px;
          line-height: 132px;
          margin-right: 40px;

          a {
            font-size: 16px;

            &:hover {
              color: #34b99b
            }
          }
        }

        li:first-child {
          padding-left: 40px;
        }
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
