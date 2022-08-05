/* eslint-disable */
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const EncodingPlugin = require('webpack-encoding-plugin');

module.exports = {
  entry: '/src/index.js',
  output: {
    path: path.resolve(__dirname, 'docs')
  },
  devServer: {
    publicPath: '/',
    contentBase: './docs',
    hot: true,
    open: true,
    watchOptions: {
      ignored: /node_modules/,
      poll: 1000
    },
    port: 9000,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader'
        ]
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              sources: {
                list: [
                  {
                    tag: 'video',
                    attribute: 'data-src',
                    type: 'src'
                  }
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.mp4$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'video/mp4'
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      images: path.resolve(__dirname, 'src/images/'),
      styles: path.resolve(__dirname, 'src/styles/'),
      assets: path.resolve(__dirname, 'src/assets/'),
      pages: path.resolve(__dirname, 'src/pages/'),
      personas: path.resolve(__dirname, 'src/data/personas'),
      videos: path.resolve(__dirname, 'src/videos'),
      reduxApp: path.resolve(__dirname, 'src/redux')
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin(),
    new EncodingPlugin({
      encoding: 'iso-8859-1'
    })
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          output: {
            // Turned on because emoji and regex is not minified properly using default
            ascii_only: true
          }
        }
      })
    ]
  }
};
