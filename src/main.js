import Vue from 'vue'
import App from './App.vue'
import clipper from '../static/clipper'

Vue.config.productionTip = false

Vue.use(clipper)

new Vue({
  render: h => h(App),
}).$mount('#app')
  