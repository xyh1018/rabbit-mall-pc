<template>
  <div class="xtx-city" ref="target">
    <div class="select" @click="toggle">
      <span v-if="!fullLocation" class="placeholder">请选择配送地址</span>
      <span v-else class="value">{{ fullLocation }}</span>
      <i class="iconfont icon-xiangxiajiantou"></i>
    </div>
    <div ref="target" class="option" v-if="show">
      <div v-if="loading" class="loading"></div>
      <template v-else>
        <span class="ellipsis" v-for="i in currList" :key="i.code" @click="changeList(i)">
          {{ i.name }}
        </span>
      </template>
    </div>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import axios from 'axios'

export default {
  name: 'XtxCity',
  props: {
    fullLocation: {
      type: String,
      default: null
    }
  },
  setup (props, { emit }) {
    // 是否展示城市选项
    const show = ref(false)
    const target = ref(null)
    // 城市列表
    const cityList = ref([])
    // 加载状态 true正在加载 false加载完成
    const loading = ref(false)
    // 地址
    const address = reactive({
      provinceCode: '',
      provinceName: '',
      cityCode: '',
      cityName: '',
      countCode: '',
      countName: '',
      fullLocation: ''
    })
    // onClickOutside监听一个容器外的点击事件
    onClickOutside(target, (e) => {
      // 点击了选项栏外的区域,则关闭选项栏
      close()
    })
    // @getCityList 获取区域列表数据函数
    const getCityList = () => {
      return new Promise((resolve, reject) => {
        const city = JSON.parse(window.localStorage.getItem('CityList'))
        if (city) {
          resolve(city)
        } else {
          const url = 'https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json'
          axios.get(url).then(res => {
            window.localStorage.setItem('CityList', JSON.stringify(res.data))
            resolve(res.data)
          }).catch(err => {
            console.log('获取数据失败', err.message)
          })
        }
      })
    }
    // 计算属性来获取需要展示的城市列表
    const currList = computed(() => {
      // 默认是省一级列表
      let list = cityList.value
      if (address.provinceCode && address.provinceName) {
        const province = cityList.value.find(c => {
          return c.code === address.provinceCode
        })
        list = province.areaList
      }
      if (address.cityCode && address.cityName) {
        const city = list.find(c => {
          return c.code === address.cityCode
        })
        list = city.areaList
      }
      if (address.countCode && address.countName) {
        const zone = list.find(c => {
          return c.code === address.countCode
        })
        list = zone.areaList
      }
      return list
    })
    // @changeList 点击城市后触发
    const changeList = (item) => {
      // 判断点击的城市属于哪个层级 0省级 1市级 2区县级
      if (item.level === 0) {
        address.provinceCode = item.code
        address.provinceName = item.name
      }
      if (item.level === 1) {
        address.cityCode = item.code
        address.cityName = item.name
      }
      if (item.level === 2) {
        address.countCode = item.code
        address.countName = item.name
        // 拼接地址
        address.fullLocation = `${address.provinceName} ${address.cityName} ${address.countName}`
        // 点击区县级时关闭选项
        close()
        // 触发事件并传递数据
        emit('selectCity', address)
      }
    }
    const close = () => {
      show.value = false
    }
    const open = () => {
      // 重置地址数据
      for (const key in address) {
        address[key] = ''
      }
      show.value = true
      loading.value = true
      // 获取地区数据
      getCityList().then(data => {
        cityList.value = data
        loading.value = false
      })
    }
    const toggle = () => {
      show.value ? close() : open()
    }
    return {
      show,
      toggle,
      target,
      cityList,
      loading,
      currList,
      changeList,
      address
    }
  }
}
</script>

<style scoped lang="less">
.xtx-city {
  display: inline-block;
  position: relative;
  z-index: 400;

  .select {
    border: 1px solid #e4e4e4;
    height: 30px;
    padding: 0 5px;
    line-height: 28px;
    cursor: pointer;

    &.active {
      background: #fff;
    }

    .placeholder {
      color: #999;
    }

    .value {
      color: #666;
      font-size: 12px;
    }

    i {
      font-size: 12px;
      margin-left: 5px;
    }
  }

  .option {
    width: 542px;
    border: 1px solid #e4e4e4;
    position: absolute;
    left: 0;
    top: 29px;
    background: #fff;
    min-height: 30px;
    line-height: 30px;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;

    .loading {
      height: 290px;
      width: 100%;
      background: url(../../assets/images/loading.gif) no-repeat center;
    }

    > span {
      width: 130px;
      text-align: center;
      cursor: pointer;
      border-radius: 4px;
      padding: 0 3px;

      &:hover {
        background: #f5f5f5;
      }
    }
  }
}
</style>
