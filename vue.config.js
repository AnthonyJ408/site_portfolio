const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@use "sass:map"; @import "./src/styles/_variables.scss"; @import "./src/styles/_reset.scss";`
        
      }
    }
  }
})
