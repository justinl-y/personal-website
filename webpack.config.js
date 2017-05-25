// const webpack = require('webpack');
const path = require('path');

const styleLoaders = [
  {
    loader: 'css-loader',
    options: {
      modules: true,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      plugins: () => [
        require('autoprefixer')({ browsers: 'last 2 versions' }),
        require('postcss-nesting'),
      ],
    },
  },
];

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, './public/index.html'),
  // filename: 'index.html',
  inject: 'body',
});

const config = {
  context: path.resolve(__dirname, './src'),
  entry: [
    'babel-polyfill',
    './index.js',
  ],
  output: {
    filename: 'app-bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
    historyApiFallback: true,
    stats: {
      children: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.css\.js$/,
        exclude: [/node_modules/],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: styleLoaders,
        }),
      },
      {
        test: /\.css\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'css-js-loader',
        }],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        }],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        }],
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: [/node_modules/],
        use: [{
          loader: 'eslint-loader',
          options: {
            fix: true,
            failOnError: false,
          },
        }],
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              'es2015',
              'es2016',
              'es2017',
            ],
          },
        }],
      },
    ],
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new ExtractTextPlugin('styles.css'),
  ],
};

if (process.env.NODE_ENV === 'production') {
  config.devtool = ''; // No sourcemap for production
  config.output.publicPath = './';

  // Add more configuration for production here like
  // SASS & CSS loaders
  // Offline plugin
  // Etc,
}

module.exports = config;
