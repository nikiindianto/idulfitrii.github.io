import Vue from 'vue'
import App from './App.vue'
import store from './store.js'

import VueParticles from 'vue-particles'
Vue.use(VueParticles)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
