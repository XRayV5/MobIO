const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

const VENDOR_LIBS = [
  'babel-polyfill',
  'axios',
  'react',
  'react-dom',
  'react-redux',
  'react-router',
  'redux',
  'redux-thunk',
]

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS,
  },
  output: {
    filename: '[name].[hash].js',
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0,
        },
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10,
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: { minimize: true },
        },
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          'css-hot-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')],
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].[contenthash].css',
      disable: process.env.NODE_ENV !== 'production',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './public',
    inline: true,
    hot: true,
    host: '0.0.0.0',
    port: 3210,
  },
}
