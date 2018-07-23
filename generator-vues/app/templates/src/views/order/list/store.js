import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import shopCouponList from '../../../biz/shopTypeCouponListBiz.js'

Vue.use(Vuex)

const initialState = () => ({
  tabs: [{
    label: '全部订单',
    status: 0,
    count: 0
  }, {
    label: '待支付',
    status: 0,
    count: '411'
  }, {
    label: '已完成',
    status: 0,
    count: 0
  }, {
    label: '退款/售后',
    status: 0,
    count: 0
  }],
  pgIndex: 1,
  pgSize: 15,
  pageCount: 0,
  noMore: false,
  counts: 0
})
const store = new Vuex.Store({
  state: initialState,
  mutations: {
    resetState (state) {
      const initial = initialState()
      Object.keys(initial).forEach(key => { state[key] = initial[key] })
    },
    setTypeList (state, data) {
      state.typeList = data
    },
    setItems (state, data) {
      state.counts = data
      state.noMore = data > 20
    }
  },
  actions: {
    refresh ({ commit, state }, loaded) {
      setTimeout(() => {
        commit('setItems', 10)
        loaded && loaded('done')
      }, 1000)
    },
    loadmore ({ commit, state }, loaded) {
      setTimeout(() => {
        const counts = state.counts + 6
        commit('setItems', counts)
        loaded('done')
      }, 1000)
    },
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
