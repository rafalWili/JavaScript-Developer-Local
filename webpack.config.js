
const path = require('path');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// This is the main configuration object.
// Here, you write different options and tell Webpack what to do
module.exports = {

  // Path to your entry point. From this file Webpack will begin its work
  entry: ['./assets/js/index.js','./assets/sass/index.scss' ],

  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, 'assets'),
    publicPath: '',
    filename: 'dist/bundle.js'
  },
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
  },
  watch:true,
  
  module: {
  rules: [
    {
      test: /\.js$/,
      /* ... */
    },
    {
      test: /\.scss$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: './css/style.css',
          }
        },
        {
          loader: 'extract-loader'
        },
        {
          loader: 'css-loader?-url'
        },
        {
          loader: 'postcss-loader'
        },
        {
          loader: 'sass-loader'
        }
      ]
    }
]
  },
  plugins: [
    // Define the filename pattern for CSS.
    new MiniCssExtractPlugin({
      filename: './assets/style.css',
    })
  ],

  // minifying  development mode
  mode: 'development'
};