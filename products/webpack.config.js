const htmlPlugin = require("html-webpack-plugin");
const moduleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    new moduleFederationPlugin({
      name: "products",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductsIndex": "./src/index",
      },
      shared: {
        faker: {
          singleton: true,
        },
      },
    }),
    new htmlPlugin({ template: "./public/index.html" }),
  ],
};
