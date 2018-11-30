import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'

Vue.use(VueRouter)


var vm = new Vue({
  el: '#app',
  render: c=>c(App),
  router
})
