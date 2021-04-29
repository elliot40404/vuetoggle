import { createStore } from 'vuex'

export default createStore({
  state: {
    toggle: false
  },
  mutations: {
    toggle(state) {
      state.toggle = !state.toggle
    }
  },
  actions: {
    toggle({commit}) {
      commit('toggle')
    }
  },
  modules: {
  }
})
