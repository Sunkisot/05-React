const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')  // 在内存中自动生成index页面的插件
const HtmlPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, './public/index.html'),
  filename: 'index.html'
})

// webpack 默认只能打包.js 后缀文件 像 .png .vue 无法处理 所以要配置第三方loader规则
module.exports = {
  mode: 'development', // production  development
  // publicPath: '/', // 部署路径  vue.config.js
  // output: 'dist', // 打包路径  vue.config.js
  // assetsDir: 'static', // 静态文件路径  vue.config.js
  // lintOnSave: false, // 是否每次保存开启eslint  vue.config.js
  // productionSourceMap: false, // 打包生成map文件，便于在打包后的压缩代码下定位问题  vue.config.js
  devServer: {
    contentBase: './dist',
    host: 'localhost',
    port: 3000,
    open: true,
    // proxy: { // 代理
    //   // detail: https://cli.vuejs.org/config/#devserver-proxy
    //   // [process.env.VUE_APP_BASE_API+'/user/login']: {  //fangkai  jia dev-api
    //   //   target: 'http://localhost:${port}/mock',
    //   //   changeOrigin: true,
    //   //   pathRewrite: {
    //   //     ['^' + process.env.VUE_APP_BASE_API]: ''
    //   //   }
    //   // },
    //   [process.env.VUE_APP_BASE_API]: {
    //     target: `http://inssys-file-inssys.devapp.cnooc/`,
    //     changeOrigin: true,
    //     // onProxyReq: proxyReq => {
    //     //   // Browers may send Origin headers even with same-origin
    //     //   // requests. To prevent CORS issues, we have to change
    //     //   // the Origin to match the target URL.
    //     //   if (proxyReq.getHeader('origin')) {
    //     //     proxyReq.setHeader('origin', 'http://oa30544434.zicp.vip');
    //     //   }
    //     // },
    //     // headers: {
    //     //   host: "http://oa30544434.zicp.vip",
    //     //   origin: "http://oa30544434.zicp.vip"
    //     // },
    //     pathRewrite: {
    //       ['^' + process.env.VUE_APP_BASE_API]: ''
    //     }
    //   }
    // },
  },
  plugins: [
    HtmlPlugin
  ],
  module: { // 所有第三方模块配置规则
    rules: [ // 第三方匹配规则
      {
        test: /\.js|jsx$/, // 匹配文件
        use: 'babel-loader', // 使用插件
        exclude: /node_modules/ // 排除 node_modules
      },
      {
        test: /\.css$/, // 匹配文件
        use: ['style-loader','css-loader'], // 使用插件
      },
      {
        test: /\.scss$/, // 匹配文件
        use: ['style-loader',{
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[path][local]-[name]-[hash:5]'
            }
          }
        }, 'sass-loader'], // 使用插件
      },
      {
        test: /\.ttf|woff2|woff|eot|svg$/, // 匹配文件
        use: ['file-loader','url-loader'] // 使用插件
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // 默认可以省略 .js 和 .json 后缀
    alias: {
      '@': path.join(__dirname, './src')
    }
  }
}