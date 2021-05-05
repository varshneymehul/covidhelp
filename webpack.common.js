const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  stats: "errors-only",
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "CovidHelp",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },

      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif|ico)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "assets/img",
          },
        },
      },
    ],
  },
};
