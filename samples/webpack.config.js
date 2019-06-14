// webpack.config.js
module.exports = {
  entry: "./main.js",
  module: {
    rules: [
      {
        test: /\.frag$/,
        loader: require.resolve('../src/loader.js')
      }
    ]
  },
  optimization: {
    minimize: false
  }
}