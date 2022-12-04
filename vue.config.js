const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/my-porfolio/'
    : '/',
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        implementation: require("sass"),
        additionalData: "@import '@/assets/scss/_custom-variables.scss'",
      },
      scss: {
        additionalData: "@import '@/assets/scss/_custom-variables.scss';",
      },
    },
  },
})
