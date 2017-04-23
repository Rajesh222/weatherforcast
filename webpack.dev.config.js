module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    },
    {
      test : /\.css$/,
      exclude : /(node_modules)/,
      loader :'style-loader!css-loader',
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: './'
  }
};


// const path = require('path')
// const webpack = require('webpack')

// module.exports = {
//   devtool: 'eval',

//   entry: [
//     'webpack-hot-middleware/client',
//     './src/index'
//   ],

//   output: {
//     path: path.join(__dirname, 'public'),
//     filename: 'bundle.js',
//     publicPath: '/public/'
//   },

//   plugins: [
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.NoErrorsPlugin()
//   ],

//   module: {
//     loaders: [
//       { test: /\.js?$/,
//         loader: 'babel',
//         exclude: path.join(__dirname, 'node_modules') },
//       { test: /\.css?$/,
//         loader: 'style-loader!css-loader'}
//     ]
//   }
// }
