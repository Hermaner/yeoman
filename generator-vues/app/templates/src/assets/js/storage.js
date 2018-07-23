const expiresTimestamp = (days) => {
  if (days <= 0) {
    return
  }
  return (new Date()).setDate(new Date().getDate() + days)
}
/**
 * 存储 localStorage
 * @param obj
 */
const setStore = (obj) => {
  let key
  let tempObj = {}
  if (!obj) return
  for (key in obj) {
    if (!obj.expiresDays) {
      localStorage.setItem(key, JSON.stringify({ data: obj[key] }))
    } else {
      const dateTime = expiresTimestamp(obj.expiresDays)
      tempObj.data = obj[key]
      tempObj.dateTime = dateTime
      tempObj = JSON.stringify(tempObj)
      JSON.stringify(obj[key])
      localStorage.setItem(key, tempObj)
    }
  }
}
/**
 * 获取 localStorage
 * @param name
 * @returns {any} 存储的 json 串
 */
const getStore = (key) => {
  if (!key) return
  let tempObj = localStorage.getItem(key)
  if (!tempObj) {
    localStorage.removeItem(key)
    return null
  }
  const { data, dateTime } = JSON.parse(tempObj)
  const curTime = new Date().getTime()
  if (dateTime < curTime) return null
  return data
}

/**
 * 删除 localStorage
 * @param name
 * @param con
 */
const removeStore = (key) => {
  if (!key) return
  localStorage.removeItem(key)
}
export default {
  install: function (Vue) {
    Vue.prototype.$storage = {
      setStore,
      getStore,
      removeStore
    }
  }
}
