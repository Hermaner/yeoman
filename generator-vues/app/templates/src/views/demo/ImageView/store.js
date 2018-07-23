import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import shopCouponList from '../../../biz/shopTypeCouponListBiz.js'

Vue.use(Vuex)

const initialState = () => ({
  list: [{
    src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwu9ze86j20m80b40t2.jpg'
  },
  {
    src: 'https://o5omsejde.qnssl.com/demo/test0.jpg'
  }, {
    src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwwcynw2j20p00b4js9.jpg'
  }],
  isMini: false,
  pgIndex: 1,
  pgSize: 15,
  pageCount: 0,
  count: 1
})
const store = new Vuex.Store({
  state: initialState,
  mutations: {
    resetState (state) {
      const initial = initialState()
      Object.keys(initial).forEach(key => { state[key] = initial[key] })
    },
    setTypeList (state, data) {
      state.count += 1
      state.typeList = data
    },
    setItems (state, data) {
      const { items, page: { totalCount, pageSize } } = data
      state.items = items
      state.pageCount = Math.ceil(totalCount / pageSize)
    }
  },
  actions: {
    getCouponType: ({ commit, dispatch }) => {
      shopCouponList.getCouponType().then((data) => {
        const typeList = data.value
        typeList.forEach((item) => { item.items = [] })
        dispatch('getCouponData', { typeList: data.value, index: 0 })
        // vuer.$route.navigateTo('../home/index.html')
        vuer.$storage.getStore('id')
      }).catch(() => { })
    },
    getCouponData: ({ state, commit }, object) => {
      const { pgIndex, pgSize } = state
      const { index, typeList } = object
      let params = {
        couponMerType: typeList[index].typeName,
        pgIndex,
        pgSize
      }
      shopCouponList.getCouponList(params)
      .then((data) => {
        const items = data.items
        if (items && items.length > 0) {
          typeList[index].items = items
        }
        commit('setTypeList', typeList)
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => localStorage.getItem(key),
        setItem: (key, value) => localStorage.setItem(key, value),
        removeItem: key => localStorage.removeItem(key)
      }
    })
  ]
})
export default store
