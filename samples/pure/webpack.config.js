// webpack.config.js
module.exports = {
  entry: "./main.js",
  module: {
    rules: [
      {
        test: /\.frag$/,
        loader: require.resolve('../../src/loader.js')
      }
    ]
  },
  mode:"development",
  optimization: {
    minimize: false
  }
}