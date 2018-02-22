/*
    ./webpack.config.js
*/

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test:/\.css$/, use:['style-loader','css-loader']},
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader" },
      {test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}  
          }
             ]
    }
  ]
  },
  devServer: {
    historyApiFallback: true,
  }, 
  plugins: [HtmlWebpackPluginConfig]

}