'use strict';
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const npmPackage = require('./package.json');

const config = {
  entry: [
    'babel-polyfill',
    './src-cls/app'
  ],
  
  output: {
    path:       './dist-cls',
    publicPath: '/',
    filename:   'app.[hash].js'
  },
  
  resolve: {
    // root: path.resolve(__dirname),
    root:       './src-cls',
    alias:      {},
    extensions: ['', '.js', '.jsx'],
    // modulesDirectories: npmPackage._moduleDirectories || []
  },
  
  module: {
    loaders: [
      {
        test:    /\.jsx?$/,
        loader: 'babel?plugins[]=transform-runtime&presets[]=es2015,presets[]=stage-0,presets[]=react',
        exclude: /node_modules/
      }
    ]
  },
  
  devServer: {
    contentBase: './src-cls',
    cached:      false,
    colors:      true,
    port:        3000,
    host:        '0.0.0.0',
    noInfo:      false,
    quiet:       false,
    historyApiFallback: true,

    stats: {
      hash:    false,
      colors:  true,
      cached:  false,
      version: false,
      exclude: [
        // /node_modules\/(react|dev-server|core-js|react-router|babel-core|reflux|history)\//,
        // /webpack|babel-runtime/
      ]
    }
  },
  
  plugins: [
    // ref: https://github.com/webpack/webpack/issues/615
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify('production')}
    }),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(npmPackage.version)
    }),
    new HtmlWebpackPlugin({
      template: 'src-cls/index.html',
      title: 'Amazing color editor',
      inject: 'body'
    })
  ]
};


module.exports = config;
