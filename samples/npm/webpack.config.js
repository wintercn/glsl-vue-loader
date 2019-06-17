// webpack.config.js
module.exports = {
  entry: "./index.js",
  module: {
    rules: [
      {
        test: /\.frag$/,
        loader: "glsl-vue-loader"
      }
    ]
  },
  mode:"development",
  optimization: {
    minimize: false
  }
}