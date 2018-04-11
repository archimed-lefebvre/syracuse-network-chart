module.exports = {
  mode: "development",
  entry: ["./src/app.js"],
  output: {
    path: __dirname + "/dist",
    filename: "app.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
    port: 8000,
    contentBase: "./dist",
    inline: true
  }
};
