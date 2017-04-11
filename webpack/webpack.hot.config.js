/* eslint import/no-extraneous-dependencies:0 */
const webpack = require('webpack');
const base = require('./webpack.config');

// base.module.rules[0].use.options.plugins.push('react-hot-loader/babel');

module.exports = {
  target: base.target,
  context: base.context,
  entry: {
    app: [
      'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      base.entry
    ]
  },
  output: base.output,
  resolve: base.resolve,
  module: base.module,
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  externals: base.externals
};
