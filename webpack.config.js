const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/main.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true
  },
  devtool: "source-map",
  devServer: {
    static: { directory: path.resolve(__dirname, "dist") },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        include: path.resolve(__dirname, "src")
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|webp|ico|bmp)$/i,
        type: "asset/resource",
        include: path.resolve(__dirname, "src/assets") // Ensure this matches the actual directory structure
      },
      {
        test: /\.txt$/i,
        type: "asset/source"
      },
      {
        test: /\.(tiff|ttf|otf|woff|woff2)$/i,
        type: "asset/resource",
        include: path.resolve(__dirname, "src/assets/fonts")
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Rock, Paper, Scissors",
      filename: "index.html",
      template: "./src/template.html"
    }),
    new webpack.ProgressPlugin()
  ]
};
