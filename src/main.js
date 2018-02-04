import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import ContentfulPlugin from './plugins/contentful'
import ImageHelper from './plugins/imagehelper'
import store from './store'
import Meta from 'vue-meta'
import PhotoSwipe from 'vue-simple-photoswipe/dist/vue-simple-photoswipe'
Vue.use(PhotoSwipe)
 
Vue.config.productionTip = false
Vue.use(Vuetify, {
  theme: {
    primary: '#03A9F4',
    secondary: '#b0bec5',
    accent: '#e91e63',
    error: '#b71c1c'
  }
})
Vue.use(Vuex)
Vue.use(ContentfulPlugin)
Vue.use(ImageHelper)
Vue.use(Meta)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})


