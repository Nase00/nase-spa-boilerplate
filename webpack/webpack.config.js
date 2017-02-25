/* globals __dirname */
const path = require('path');

const baseContext = path.join(__dirname, '../client');
const environmentConext = path.join(__dirname, '../environment');
const universalContext = path.join(__dirname, '../universal');

module.exports = {
  context: baseContext,
  entry: '../client/application.jsx',
  output: {
    path: path.resolve(__dirname, '../server', 'public', 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  resolve: {
    modules: [baseContext, 'node_modules'],
    alias: {
      universal: path.resolve(universalContext)
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js(x|)?$/,
        use: {
          loader: 'babel-loader?plugins[]=transform-object-rest-spread'
        },
        include: [baseContext, universalContext],
        exclude: /node_modules/
      },
      {
        test: /\.(svg|png)$/,
        use: {
          loader: 'file-loader'
        },
        include: [baseContext, environmentConext],
        exclude: /node_modules/
      }
    ]
  }
};
