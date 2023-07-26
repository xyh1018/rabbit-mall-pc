import request from '@/utils/request'

// 获取热门品牌信息
export function getBrand (params) {
  return request({
    url: '/home/brand',
    method: 'GET',
    params
  })
}

// 获取轮播图
export function getBanner () {
  return request({
    url: '/home/banner',
    method: 'GET'
  })
}

/**
 * 获取新鲜好物面板数据
 * */
export function getNew () {
  return request({
    url: '/home/new',
    method: 'GET'
  })
}

/**
 * 获取人气推荐面板数据
 * */
export function getHot () {
  return request({
    url: '/home/hot',
    method: 'GET'
  })
}

/**
 * 获取最新专题面板数据
 * */
export function getSpecial (params) {
  return request({
    url: '/home/special',
    method: 'GET',
    params: {
      limit: 3
    }
  })
}

/**
 * 获取产品面板数据
 * */
export function getProduct () {
  return request({
    url: '/home/goods',
    method: 'GET'
  })
}
