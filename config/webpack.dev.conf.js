const { merge } = require('webpack-merge')
const { resolve } = require('./utils')
const config = require('./webpack.base.conf')

module.exports = merge(config,{
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        static: {
          directory: resolve('public'),
        },
        compress: true,
        port: 8080,
      },
      cache: {
        type: 'filesystem',
        config: [__filename],
        store: 'pack',
      }
})
