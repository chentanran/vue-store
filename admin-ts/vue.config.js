const path = require('path')
const mockServerPort = 8090

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/styles/variables.scss'),
        path.resolve(__dirname, 'src/styles/mixins.scss')
      ]
    }
  },
  devServer: {
    proxy: {
        [process.env.VUE_APP_BASE_API]: {
            target: `http://localhost:${mockServerPort}/mock-api/v1`,
            changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
            // ws: true,// proxy websockets
            pathRewrite: { // pathRewrite方法重写url
                ['^' + process.env.VUE_APP_BASE_API]: ''
            }
        }
    }
  }
}