const { merge } = require('webpack-merge')
const { resolve } = require('./utils')
const config = require('./webpack.base.conf')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(config,{
    mode: 'production',
    output: {
        path: resolve('dist'),
        filename: 'js/[name].[chunkhash].js',
        chunkFilename: 'js/[name].[chunkhash].js',
        clean: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[chunkhash].css',
            chunkFilename: 'css/[name].[chunkhash].css',
        }),
        new CopyPlugin({
            patterns: [
              { from: "public", to: "." },
            ],
          }),
        new CssMinimizerPlugin(),
        new ESLintPlugin({
          fix: true,
          extensions: ['ts','js', 'vue', 'tsx', 'jsx']
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(
                {
                    parallel: true,
                    terserOptions: {
                        compress: {
                            collapse_vars: true,
                            drop_console: true,
                            drop_debugger: true,
                        },
                        output: {
                            beautify: true,
                            comments: false
                        }
                    }

                }
        )],
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
    performance: {
        hints: 'warning',
        maxAssetSize: 100000,
        maxEntrypointSize: 400000,
  },
})

