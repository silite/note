//  由于ES6的代码浏览器不能解析
//  npm init -y
//  npm i jquery -S
//  webpack src/js/main.js --output dist/bundle.js --mode development
//  npm i [包名] -D

//  1  如果需打包处理css文件，需要安装 style-loader css-loader -D
//  2  在webpack.config.js里新增一个配置节点，叫做module，此对象上有rules属性，是个数组，这个数组中存放着
//     所有第三方文件的匹配和处理规则

import $ from 'jquery'
import './css/index.css'

$(function () {
  $('li:odd').css('backgroundColor', 'white')
  $('li:even').css('backgroundColor', function () {
    return '#' + 'D97634'
  })
})

//  打包生成的bundle.js并没有存放到实际的物理磁盘上，而是直接托管到了电脑的内存中
//  webpack只能处理一部分ES6的新语法，需要使用babel可以将高级语法进行适配 npm i babel-core babel-loader babel-plugin-transform-runtime
//  和babel-preset-env babel-preset-stage-0 两套包
//  在配置文件中module节点下的rules数组中，添加
//  在跟目录中创建.babelrc文件[json]
// {
//   "presets": ['env', 'stage-0'],
//   "plugins": ["transform-runtime"]
// }
