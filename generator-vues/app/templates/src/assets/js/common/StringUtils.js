export const StringReplaceAll = (string, s1, s2) => {
  if (string) {
    return string.replace(new RegExp(s1, 'gm'), s2)
  } else {
    return string
  }
}

export const formatPrice = (price, needSymbol = true, needPoint = false, denominator = 100.0) => {
  if (price === undefined || price === null) {
    return ''
  }

  let newPrice = price / denominator
  newPrice = needPoint ? newPrice.toFixed(2) : newPrice

  return needSymbol ? '￥' + newPrice : '' + newPrice
}

export const formatDate = (timeStamp, format = 'yyyy-MM-dd hh:mm:ss') => {
  return dateFormat(new Date(timeStamp), format)
}

const dateFormat = function (date, format) {
  var o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    'S': date.getMilliseconds()
  }
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return format
}
