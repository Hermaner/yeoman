/*
 * vuejs 	过滤器
 */

import Vue from 'vue'

Vue.filter('badge', function (badge) {
  if (!badge || badge === '0') {
    return ''
  }
  if (badge > 9) {
    return '9+'
  }
  return badge
})
Vue.filter('currency', function (price, needSymbol = false, needPoint = false, denominator = 100.0) {
  if (price === undefined || price === null) {
    return ''
  }
  var newPrice = price / denominator
  newPrice = needPoint ? newPrice.toFixed(2) : newPrice
  return needSymbol ? `￥${newPrice}` : newPrice
})
Vue.filter('imageFormat', function (url, width, height, cut = 1) {
  if (!url) {
    return ''
  }
  if (url.indexOf(',') > 0) {
    const items = url.split(',')
    url = items[0]
  }
  if (url.indexOf('http') !== 0) {
    url = 'https://img0.fengqucdn.com/' + url
  }
  let query = ''
  if (url.indexOf('?') > 0) {
    const items = url.split('?')
    url = items[0]
    query = items[1]
    if (query && query.length > 0) {
      query = `?${query}`
    } else {
      query = ''
    }
  }

  if (url.indexOf('@') > 0) {
    const items = url.split('@')
    url = items[0]
  }
  if (width && !height) {
    return `${url}@${width}w_${cut}c_1l${query}`
  } else if (!width && height) {
    return `${url}@${height}h_${cut}c_1l${query}`
  } else if (width && height) {
    return `${url}@${width}w_${height}h_${cut}c_1l${query}`
  } else {
    return `${url}${query}`
  }
})
