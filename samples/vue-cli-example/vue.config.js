module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.frag$/,
          loader: 'glsl-vue-loader'
        }
      ]
    }
  }
}