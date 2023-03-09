const { merge } = require('webpack-merge')
const { resolve } = require('./utils')
const config = require('./webpack.base.conf')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(config, {
    mode: 'production',
    output: {
        path: resolve('dist'),
        filename: 'js/[name].[chunkhash].js',
        chunkFilename: 'js/[name].[chunkhash].js',
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve('src/index.html'),
            filename: 'index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseInlineTagWhitespace: true,
                removeAttributeQuotes: false
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[chunkhash].css',
            chunkFilename: 'css/[name].[chunkhash].css'
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'public',
                    to: '.'
                }
            ]
        }),
        new ESLintPlugin({
            fix: true,
            extensions: ['ts', 'js', 'vue', 'tsx', 'jsx']
        })
    ],
    optimization: {
        chunkIds: 'deterministic',
        moduleIds: 'deterministic',
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    compress: {
                        collapse_vars: true,
                        drop_console: true,
                        drop_debugger: true,
                        reduce_vars: true
                    },
                    output: {
                        beautify: false,
                        comments: false
                    }
                }
            }),
            new CssMinimizerPlugin()
        ]
    },
    performance: {
        hints: 'warning',
        maxAssetSize: 100000,
        maxEntrypointSize: 400000
    }
})
