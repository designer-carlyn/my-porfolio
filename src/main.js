import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

Vue.config.productionTip = false

Vue.use(CoolLightBox)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
