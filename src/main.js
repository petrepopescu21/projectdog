import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import ContentfulPlugin from './plugins/contentful'
import ImageHelper from './plugins/imagehelper'
import store from './store'
import Meta from 'vue-meta'

Vue.config.productionTip = false
Vue.use(Vuetify)
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


