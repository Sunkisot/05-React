const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, './public/index.html'),
  filename: 'index.html'
})
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  devServer: {
    open: true,
    host: 'localhost',
    port: '3300'
  },
  module: {
    rules: [
      // ... 其它规则
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    HtmlPlugin,
    new VueLoaderPlugin()
  ]
}