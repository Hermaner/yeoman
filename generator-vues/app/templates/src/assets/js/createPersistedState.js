
import createPersistedState from 'vuex-persistedstate'

const state = createPersistedState({
  storage: {
    getItem: key => localStorage.getItem(key),
    setItem: (key, value) => localStorage.setItem(key, value),
    removeItem: key => localStorage.removeItem(key)
  }
})
export default state
