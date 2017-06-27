var path = require('path'),
    webpack = require('webpack'),
    autoprefixer = require('autoprefixer'),
    pxtorem = require('postcss-pxtorem'),
    CompressionPlugin = require("compression-webpack-plugin"),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    ExtractTextWebpackPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = function(env){
  const postcssOpts = {
    ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
    plugins: () => [
      autoprefixer({
        browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
      }),
      // pxtorem({ rootValue: 100, propWhiteList: [] })
    ],
  };

  return {
    devServer:{
      contentBase: path.resolve(__dirname,"dist"),
      historyApiFallback: true,
      // hot: true,
      // compress: true,
      port: 8080
    },
    entry:{
      index:path.resolve(__dirname, "./src/main.js"),
      vendor: ["react", "react-dom", "react-router"]
    },
    output:{
      path:path.resolve(__dirname, "dist"),
      filename:"[name].js",
      // publicPath: "/assets/"
      // chunkFilename: '[name].[chunkhash:5].chunk.js'
    },
    // devtool:"cheap-eval-source-map",
    module:{
      rules:[
        {
          test:/\.js[x]?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test:/\.css$/,
          use:ExtractTextWebpackPlugin.extract({
            fallback: "style-loader",
            use: [
              'css-loader', { loader: 'postcss-loader', options: postcssOpts }
            ],
            publicPath: "/dist/assets/styles"
          })
        },
        {
          test: /\.(woff|svg|eot|ttf)\??.*$/,
          loader: "url-loader?limit=50000&name=assets/fonts/[name].[ext]"
        },
        {
          test: /\.(png|jpg|gif|jpeg)$/,
          loader: "url-loader?limit=819200&name=assets/images/[name].[ext]"
        }
      ]
    },
    plugins:[
      new CopyWebpackPlugin([
          { from: 'src/assets', to: 'assets' }
      ]),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        minimize: true,
        compress: {warnings: false},
        output: {comments: false},
      }),
      new ExtractTextWebpackPlugin({
         filename: "bundle.css"
      }),
      new HtmlWebpackPlugin({
        filename:"index.html",
        template:path.resolve(__dirname,"src/index.html")
      }),
      new webpack.optimize.CommonsChunkPlugin({
        // minChunks: 2,
        name: 'vendor',
        filename: 'vendor.js'
      }),
      new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0,
      })
    ]
  }
}
