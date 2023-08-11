import request from '@/utils/request'

/**
 * 获取商品详情数据
 * @param {String | Number} id - 商品id
 * */

export function getGoodsDetails (id) {
  return request({
    url: '/goods',
    method: 'GET',
    params: {
      id: id
    }
  })
}
