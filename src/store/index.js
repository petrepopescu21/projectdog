import Vue from 'vue'
import Vuex from 'vuex'
import ContentfulPlugin from './plugin'
Vue.use(Vuex)

export default new Vuex.Store({
  
  plugins: [ContentfulPlugin],
  state: {
    labels: {},
    lang: 'en',
    bla: 'nothing',
    ready: false,
    showNav: null,
    showFilters: null,
    dogs: null
  },
  mutations: {
    setLabels(state, data) {
      state.labels = data
    },
    setLang(state, data) {
      state.lang = data
    },
    setReady(state,data) {
      state.ready = data
    },
    setShowNav(state, data) {
      state.showNav = data
    },
    setShowFilters(state, data) {
      state.showFilters = data
    },
    setShowFilters(state,data) {
      state.showFilters = data
    },
    setDogs(state,data) {
      state.dogs = data
    }
  }
})
