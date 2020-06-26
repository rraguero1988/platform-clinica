module.export = {
  devServer:{
    disableHostCheck: true,
    proxy: 'http://10.10.135.81:3000/',
  },
  transpileDependencies: [
    "vuetify"
  ]
}