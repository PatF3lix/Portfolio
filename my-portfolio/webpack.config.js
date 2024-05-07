const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
    assetModuleFilename: "images/[name][ext]",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon_io/favicon.ico", // Specify the path to your favicon
      meta: {
        // Meta tags for viewport and description
        viewport: "width=device-width, initial-scale=1",
        description: "My Software Development Portfolio",
        // Add more meta tags as needed
      },
      // Links to different favicon sizes and manifest
      links: [
        {
          rel: "shortcut icon",
          type: "image/x-icon",
          href: "./favicon_io/favicon.ico",
        },
        {
          rel: "manifest",
          href: "./favicon_io/site.webmanifest",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "./favicon_io/android-chrome-192x192.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "512x512",
          href: "./favicon_io/android-chrome-512x512.png",
        },
      ],
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
};
