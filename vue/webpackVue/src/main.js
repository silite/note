// 功能不完整,只提供了runtime-only,修改配置文件的resolve
import Vue from 'vue'
import login from './login.vue'
//  webpack默认无法打包vue,需要安装相关loader
//  在配置文件中新增loader配置项

var vm = new Vue({
  el: '#app',
  data: {
    msg: '123'
  },
  // render (createElements) {
  //   return createElements(login)
  // }
  render: c => c(login)
})


// npm i Vue -S
// npm i vue-loader vue-template-compiler -D


import m, {title} from './test.js'
console.log(title, m)