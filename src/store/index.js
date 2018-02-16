import Vue from "vue";
import Vuex from "vuex";
import ContentfulPlugin from "./plugin";
Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [ContentfulPlugin],
  state: {
    locales: [
      { int: "en", ext: "en_US" },
      { int: "ro", ext: "ro_RO" },
      { int: "de", ext: "de_DE" }
    ],
    labels: {},
    lang: "en",
    bla: "nothing",
    ready: false,
    showNav: null,
    showFilters: null,
    dogs: null,
    cachedDogs: {},
    cachedLang: "en",
    largeThumbs: false,
    filters: {
      age: {
        s: false,
        m: false,
        l: false
      },
      talie: {
        mica: false,
        medie: false,
        mare: false
      },
      sex: {
        M: false,
        F: false
      }
    }
  },
  mutations: {
    setCacheLang(state,data) {
      state.cachedLang = data
    },
    emptyDogCache(state){
      state.cachedDogs = {}
    },
    setFilters(state, data) {
      state.filters = data;
    },
    addDogToCache(state, data) {
      state.cachedDogs[data.ro.name.toLowerCase()] = data;
    },
    toggleThumbs(state) {
      state.largeThumbs = !state.largeThumbs;
    },
    setLabels(state, data) {
      state.labels = data;
    },
    setLang(state, data) {
      state.lang = data;
    },
    setReady(state, data) {
      state.ready = data;
    },
    setShowNav(state, data) {
      state.showNav = data;
    },
    setShowFilters(state, data) {
      state.showFilters = data;
    },
    setShowFilters(state, data) {
      state.showFilters = data;
    },
    setDogs(state, data) {
      state.dogs = data;
    }
  }
});
