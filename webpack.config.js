var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/app/Index.tsx'
  ],
  output: {
    path: __dirname + '/src/endpoint/static',
    filename: 'app.js',
    publicPath: '/static/'

  },
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true }),
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [{
      test: /\.ts$/,
      loader: 'awesome-typescript-loader'
    },{
      test: /\.tsx$/,
      loader: 'awesome-typescript-loader'
    },{
      test: /\.js$/,
      loader: 'awesome-typescript-loader',
      exclude: /node_modules/
    },{
      test: /\.css$/,
      loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
    }]
  }
}
