const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

// @ts-check
/** @type {import ('webpack').Configuration;} */
module.exports = {
  mode: "production",
  entry: "./src/popup.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  node: {
    global: false,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/popup.html",
      filename: "popup.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        "./src/manifest.json",
        { from: "./src/img", to: "img" },
        { from: "./src/_locales", to: "_locales" },
      ],
    }),
  ],
};
