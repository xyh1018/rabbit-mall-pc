<template>
  <div class="container">
    <HomePanel title="最新专题">
      <template #right>
        <XtxMore></XtxMore>
      </template>
    </HomePanel>
    <ul class="new-list">
      <li class="new-item" v-for="item in newList" :key="item.id">
        <RouterLink to="/" class="title-a">
          <img class="new-item-img" :src="item.detailsUrl" alt="">
          <div class="new-item-title">
            <div class="left">
              <span class="new-item-title-name ellipsis">{{ item.title }}</span>
              <span class="new-item-title-summary ellipsis">{{ item.summary }}</span>
            </div>
            <span class="new-item-title-lowestPrice">￥{{ item.lowestPrice }}起</span>
          </div>
        </RouterLink>
        <div class="new-item-details">
          <span>
            <i class="iconfont icon-guanzhu"></i>
            {{ item.collectNum }}
          </span>
          <span>
            <i class="iconfont icon-kanguo"></i>
            {{ item.viewNum }}
          </span>
          <span>
            <i class="iconfont icon-pinglun"></i>
            {{ item.replyNum }}
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import HomePanel from '@/views/home/components/HomePanel.vue'
import { onMounted, ref } from 'vue'
import { getSpecial } from '@/api/home'

export default {
  name: 'HomeSpecial',
  components: { HomePanel },
  setup () {
    const newList = ref([])
    const getSpecialApi = async () => {
      const { result } = await getSpecial()
      newList.value = result
    }
    onMounted(() => {
      getSpecialApi()
    })
    return {
      newList
    }
  }
}
</script>

<style scoped lang="less">
.new-list {
  display: flex;
  justify-content: space-between;

  .new-item {
    width: 404px;
    .hoverShadow();
    background: white;

    .title-a {
      position: relative;
      height: 288px;
      width: 100%;
      display: block;

      .new-item-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .new-item-title {
        display: flex;
        align-items: end;
        padding: 0 20px 20px 20px;
        position: absolute;
        top: 0;
        left: 0;
        height: 288px;
        width: 100%;
        background-image: linear-gradient(0deg, rgba(0, 0, 0, .8), transparent 50%);

        .left {
          width: 260px;

          .new-item-title-name {
            font-size: 22px;
            color: white;
          }

          .new-item-title-summary {
            font-size: 19px;
            color: #999999;
          }
        }
      }

      .new-item-title-lowestPrice {
        font-size: 17px;
        background: #fff5f5;
        color: #ca4746;
        padding: 2px 15px;
        height: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
      }
    }

    .new-item-details {
      height: 72px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 20px;
      font-size: 16px;

      span {
        margin-right: 20px;
      }

      .iconfont {
        color: #999999;
        font-size: 16px;
      }
    }
  }
}

.ellipsis {
  display: block;
  width: 100%; /* 自定义容器宽度 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
