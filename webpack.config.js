const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env, { stats, mode }) => {
  const isProd = mode === "production";
  const filename = (ext) =>
    isProd ? `[name].[contenthash].${ext}` : `[name].${ext}`;
  return {
    context: path.resolve(__dirname, "./"),
    mode: "development",
    entry: "./index.js",
    output: {
      filename: `${filename("js")}`,
      path: path.resolve(__dirname, "build"),
      publicPath: "",
    },
    devServer: {
      contentBase: path.resolve(__dirname, "build"),
      open: true,
      compress: true,
      hot: true,
      port: 3000,
    },
    plugins: [
      new HTMLWebpackPlugin({ template: "./index.html" }),
      new CleanWebpackPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
      ],
    },
  };
};
