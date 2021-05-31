"use strict";
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./public/index.js",
  performance: {
    hints: false,
  },
  devtool: false,
  output: {
    path: path.resolve(__dirname, "./public/dist"),
    filename: "compiled.js",
  },
  module: {
    rules: [
      {
        test: /\.(js)$/i,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(css|scss)$/i,
        exclude: /node_modules/,
        use: [ 
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpeg|jpg|ico|svg|gif)$/i,
        exclude: /node_modules/,
        type: "asset/resource",
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    }),
  ],
};
