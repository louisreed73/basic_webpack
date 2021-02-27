const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/js/index.js",
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./src",
    port: 3232,
    // liveReload: true,
    open:true,
    watchContentBase: true,
  },
  module: {
    rules: [
      {
        test: /\.(jpeg|jpeg|png|svg)$/,
        loader: "file-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(s?css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "entry",
                },
              ],
            ],
            plugins: [
              [
                "@babel/plugin-proposal-pipeline-operator",
                {
                  proposal: "minimal",
                },
              ],
            ],
          },
        },
      },
    ],
  },
  plugins: [],
};


