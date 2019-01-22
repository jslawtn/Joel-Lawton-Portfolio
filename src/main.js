import Vue from 'vue'
import Main from './Main.vue'
import VueMouseParallax from 'vue-mouse-parallax'

Vue.use(VueMouseParallax)
Vue.config.productionTip = false

new Vue({
  render: h => h(Main),
}).$mount('#app')
