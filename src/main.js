import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import VueSmoothScroll from 'vue2-smooth-scroll'

Vue.config.productionTip = false

Vue.use(CoolLightBox)
Vue.use(VueSmoothScroll, {
  duration: 800,
  offset: -75,
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
