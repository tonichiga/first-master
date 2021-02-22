const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const WebpackDeployFtp = require("webpack-deploy-ftp");

module.exports = (env) => ({
  devtool: "source-map",
  output: {
    filename: "[name].[contenthash].js",
  },
  optimization: {
    moduleIds: "hashed",
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new HtmlWebpackPlugin({
      filename: "portfolio.html",
      template: "./portfolio.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new HtmlWebpackPlugin({
      filename: "contacts.html",
      template: "./contacts.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[name].[id].[contenthash].css",
    }),

    new OptimizeCssAssetsPlugin({}),

    new WebpackDeployFtp({
      dir: "./build/", // * 本地上传文件夹路径
      remoteDir: "/www/first-master.ru/", // * 远程文件目录 注意：小心覆盖整个ftp服务器 default: /empty
      console: true, // 打印日志 default: false
      connect: {
        host: "bora.cityhost.com.ua", // * ftp服务器ip
        port: "21", // * 端口 default: 21
        user: "chbc48833d", // * 用户名
        password: "33db7c7229", // * 用户密码
        secure: false,
        secureOptions: undefined,
        connTimeout: 5000,
        pasvTimeout: 1000,
        keepalive: 1000,
      },
    }),
  ],
});
