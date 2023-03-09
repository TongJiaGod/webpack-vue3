const {
  merge
} = require('webpack-merge');
const {
  resolve
} = require('./utils');
const config = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = merge(config, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    static: {
      directory: resolve('public')
    },
    compress: false,
    port: 8080
  },
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename]
    },
    store: 'pack'
  },
  optimization: {
    chunkIds: 'named',
    moduleIds : 'named'
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: resolve('src/index.html'),
        filename: 'index.html',
        inject: true
    })
    ]
});
