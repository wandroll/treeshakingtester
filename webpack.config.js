const HtmlWebPackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      // CLEAN ALIASES
      'moment/min/moment-with-locales': require.resolve('moment/min/moment-with-locales'),
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, './src'),
          path.resolve(__dirname, './node_modules/@iadvize'),
        ],
        use: {
          loader: require.resolve('babel-loader'),
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
     new BundleAnalyzerPlugin
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin()
    ]
  }
};
