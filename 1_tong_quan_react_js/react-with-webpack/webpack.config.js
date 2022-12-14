const path = require("path");

/* thêm html-webpack-plugin vào file cấu hình sẽ được sử dụng ở bên dưới */
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Đường dẫn tới file code index.js
  output: {
    path: path.resolve(__dirname, "dist"), // Thư mục chứa file được build ra
    filename: "index.bundle.js", // Tên file được build ra
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Sử dụng babel-loader cho những file .js
        exclude: /node_modules/, // Loại trừ thư mục node_modules
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  /* cấu hình file index.html từ folder public */
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html")
    })
  ]
};