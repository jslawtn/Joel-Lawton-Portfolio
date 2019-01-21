import Vue from 'vue'
import App from './App.vue'
import VueMouseParallax from 'vue-mouse-parallax'

Vue.use(VueMouseParallax)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
