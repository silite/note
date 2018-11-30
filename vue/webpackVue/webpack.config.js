const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

//  配置文件 node中的模块操作 向外暴露配置对象
module.exports = {
  // 入口
  entry: path.join(__dirname, './src/main.js'),

  //  出口
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  plugins: [
      new htmlWebpackPlugin({ // 创建一个能在内存中生成HTML页面的插件
        template: path.join(__dirname, './src/index.html'),  //指定的模板页面
        filename: 'index.html'
      }),
      new VueLoaderPlugin()
  ],
  module: {
  //   这个节点，用于配置所有第三方模块加载器
    rules: [
    //     所有第三方模块的匹配规则 调用规则从右至左
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      //  小于limit byte时图片转换为Base64   name打包后文件名不变
      { test: /\.(jpg|png|gif|bmp|jpeg)/, use: 'url-loader?limit=123&name=[hash:8]-[name].[ext]' },
    //    用babel适配高级ES6语法,排除node_modules ，防止将里面js打包
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },

      //  处理vue的loader
      { test: /\.vue$/, use: 'vue-loader' }
    ]
  }

  //  处理引入完整vue
  // resolve: {
  //   alias: {
  //     'vue$': 'vue/dist/vue.js'
  //   }
  // }
}
