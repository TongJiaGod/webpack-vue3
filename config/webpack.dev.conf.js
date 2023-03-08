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
        buildDependencies: {
            config: [__filename],
          },
        store: 'pack',
      },
      optimization: {
        splitChunks: {
          chunks: 'async',
          minSize: 20000,
          minChunks: 1,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          enforceSizeThreshold: 50000,
          cacheGroups: {
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
              reuseExistingChunk: true,
            },
            common: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
          },
        },
      },
})
