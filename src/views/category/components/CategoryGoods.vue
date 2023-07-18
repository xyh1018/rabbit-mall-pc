<template>
  <div class="cate-goods">
    <div class="head">
      <div class="title">
        <h3>- {{ title }} -</h3>
        <p>温暖柔软，品质之选</p>
      </div>
      <XtxMore class="more"></XtxMore>
    </div>
    <div class="body">
      <ul class="body-list">
        <li class="item" v-for="item in goods" :key="item.id">
          <RouterLink to="">
            <img :src="item.picture" alt="">
            <p class="name ellipsis">{{ item.name }}</p>
            <p class="desc ellipsis">{{ item.desc }}</p>
            <p class="price">{{ item.price }}</p>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryGoods',
  props: {
    goods: {
      required: true,
      type: Array
    },
    title: {
      type: String
    }
  }
}
</script>

<style scoped lang="less">
.cate-goods {
  background: white;
  margin-top: 20px;
  padding-top: 28px;

  .head {
    display: flex;
    align-items: center;

    .title {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;

      h3 {
        font-size: 28px;
        font-weight: 400;
        color: #666666;
      }

      p {
        font-size: 20px;
        color: #999999;
      }
    }

    .more {
      position: absolute;
      right: 20px;
    }
  }

  .body {
    padding: 30px 65px;

    .body-list {
      display: flex;

      .item {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 30px;

        img {
          width: 160px;
          height: 160px;
        }

        .name {
          font-size: 16px;
          width: 160px;
          padding-top: 10px;
          text-align: center;
        }

        .desc {
          font-size: 14px;
          color: #999999;
          width: 160px;
          padding-top: 10px;
          text-align: center;
        }

        .price {
          font-size: 20px;
          color: #cf4444;
          padding-top: 10px;
          text-align: center;
        }
      }
    }
  }
}
</style>
