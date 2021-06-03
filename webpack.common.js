"use strict";
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: "./public/index.js",
    form: "./public/js/tinymce.form.js"
  },
  performance: {
    hints: false,
  },
  devtool: false,
  output: {
    path: path.resolve(__dirname, "./public/dist"),
    filename: "[name].compiled.js",
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
