const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
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
