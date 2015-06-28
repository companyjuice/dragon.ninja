var path       = require('path');
var webpack    = require('webpack');
var HtmlPlugin = require('html-webpack-plugin');


// TODO production packing.
var isDev = (process.env.NODE_ENV) ? false : true;

module.exports = {
  entry: [
    'webpack-dev-server/client?http://dragon.ninja:7777',
    'webpack/hot/dev-server',
    './src/bootstrap.jsx'
  ],

  externals: {
    '$': 'jQuery'
  },

  output: {
    filename: 'ninja.js',
    chunkFilename: 'ninja-[chunkhash].js',
    path: 'build'
  },

  devServer: {
    info: true,
    hot: true,
    inline: false,
    port: 7777,
    host: 'dragon.ninja',
    colors: true,
    progress: true,
    contentBase: 'build',
    historyApiFallback: true,
    stats: {
      colors: true,
      progress: true
    }
  },

  plugins: [
    new HtmlPlugin({
      pkg      : require('./package.json'),
      template : './src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  resolve: {
    root: [
      path.join(__dirname, 'node_modules')
    ],
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules']
  },

  module: {
    loaders: [
      {
        test: /\.(svg|ico|eot|ttf|woff2?|pdf|png)$/,
        loader: 'file?name=[path][name].[ext]&context=assets'
      },
      {
        test: /\.css$/,
        loader: 'style!css!autoprefixer'
      },
      {
        test: /.scss$/,
        loader: 'style!css!autoprefixer!sass'
      },
      {
        test: /\.jsx?$/,
        loader: 'react-hot!babel?stage=0',
        exclude: [/node_modules/]
      }
    ]
  }
};
