const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false, //关闭eslint检查
  runtimeCompiler: true,
  
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          use: 'text-loader'
        }
      ]
    }
  }
})
