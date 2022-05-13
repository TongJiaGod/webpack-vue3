const { merge } = require('webpack-merge')
const { resolve } = require('./utils')
const config = require('./webpack.base.conf')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = merge(config,{
    mode: 'production',
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[fullhash].css',
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
    ]
})

