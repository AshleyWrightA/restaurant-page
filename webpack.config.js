const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Tarot Cafe",
      template: "./src/index.ejs",
      favicon: "./src/assets/images/favicon.ico",
    }),
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
    assetModuleFilename: "[name].[ext]",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(jpeg|jpg|ico)$/i,
        type: "asset/resource",
      },
    ],
  },
};
