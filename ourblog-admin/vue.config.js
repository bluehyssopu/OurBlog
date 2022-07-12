const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    host: 'localhost',
    // open: true, // 自动打开浏览器
    // 代理配置表，在这里可以配置特定的请求代理到对应的API接口
    // 例如将'localhost:8080/apix'代理到'www.example.com/api/xxx'
    proxy: {
      '/api': { // 匹配所有以 '/api'开头的请求路径
        target: 'http://129.150.63.35:8081', // 代理目标的基础路径
        // target: 'https://mock.presstime.cn/mock/62b534753143f20030debd6a/api',
        // target: 'http://localhost:8081', // 代理目标的基础路径
        // secure: false,  // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 支持跨域
        // ws: false,
        pathRewrite: { // 重写路径: 去掉路径中开头的'/api'
          '^/api': ''
        }
      }
    }
  }
})