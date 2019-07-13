const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "./")
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html"
    })
  ],
  watch: true,
  devServer: {
    overlay: true,
    stats: "minimal"
  }
};
