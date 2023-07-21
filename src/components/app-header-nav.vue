<template>
  <div class="appHeaderNav-container">
    <ul class="sortMenu">
      <li class="sortMenu-item">
        <RouterLink to="/">首页</RouterLink>
      </li>
      <li class="sortMenu-item"
          v-for="(item, index) in list" :key="item.id"
          :class="{active: selectedIndex === index}"
          @click="select(index)"
          @mouseenter="show(item)"
          @mouseleave="hide(item)"
      >
        <RouterLink @click="hide(item)"
                    :to="`/category/${item.id}`"
        >
          {{ item.name }}
        </RouterLink>
        <div class="popup-container popup-container-top" :class="{showPop: item.show}">
          <ul class="popup">
            <li class="popup-item"
                @click="hide(item)"
                v-for="children in item.children" :key="children.id"
            >
              <RouterLink class="popup-item-link" :to="`/category/sub/${children.id}`">
                <img :src="children.picture" alt="">
                <div class="name">{{ children.name }}</div>
              </RouterLink>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

export default {
  name: 'AppHeaderNav',
  setup () {
    const store = useStore()
    // 分类数据
    const list = computed(() => store.state.category.list)
    const selectedIndex = ref(null)
    const select = (index) => {
      selectedIndex.value = index
    }
    const show = (item) => {
      store.commit('category/show', item.id)
      console.log('show')
    }
    const hide = (item) => {
      store.commit('category/hide', item.id)
      console.log('hide')
    }
    return {
      list,
      store,
      selectedIndex,
      select,
      show,
      hide
    }
  }
}
</script>

<style scoped lang="less">
@import '@/assets/styles/variables.less';

.appHeaderNav-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 132px;

  .sortMenu {
    display: flex;
    position: relative;

    .sortMenu-item {
      margin-right: 40px;
      margin-top: 10px;

      & > a {
        font-size: 16px;
        padding-bottom: 6px;

        &:hover {
          color: @MainGreenColor;
          border-bottom: 1px @MainGreenColor solid;
        }
      }

      .popup-container-top {
        a:hover {
          color: @MainGreenColor;
        }
      }

      .popup-container {
        background: white;
        position: absolute;
        left: -235px;
        top: 52px;
        width: 1240px;
        padding: 0 40px;
        opacity: 0;
        height: 0;
        overflow: hidden;
        box-shadow: 0 0 5px #ccc;
        transition: all .2s ease .1s;
        z-index: 99999;

        &.showPop {
          height: 120px;
          opacity: 1;
        }

        .popup {
          display: flex;
          align-items: center;

          .popup-item {
            padding: 10px;
            margin-right: 20px;

            .popup-item-link {
              display: flex;
              flex-direction: column;
              align-items: center;

              img {
                width: 60px;
              }

              .name {
                font-size: 14px;
                line-height: 30px;
              }
            }
          }
        }
      }
    }

    li:first-child {
      padding-left: 40px;
    }
  }

  .active {
    & > a {
      color: @MainGreenColor;
      border-bottom: 1px @MainGreenColor solid;
    }
  }
}
</style>
