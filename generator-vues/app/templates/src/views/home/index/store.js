import Vue from 'vue'
import Vuex from 'vuex'
// import api from '@/utils/api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    nickName: 'nickName',
    isMini: false
  },
  mutations: {
    setIsMini (state, data) {
      state.isMini = data
    }
  },
  actions: {
    getData: ({ commit, state }, params) => {
      return new Promise((resolve, reject) => {
        commit('setIsMini', 'name')
        // setSpuInfoBySpuId(storeId, mallId, spuEntity.id, spuEntity)
        //   .then(res => {
        //     resolve(res)
        //   })
        //   .catch(error => {
        //     console.log('[error]', error)
        //     reject(error.msg)
        //   })
      })
    }
  },
  plugins: [
  ]
})

export default store
