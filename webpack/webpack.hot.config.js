const webpack = require('webpack');
const base = require('./webpack.config');

module.exports = {
  target: base.target,
  context: base.context,
  entry: {
    app: [
      'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
      'react-hot-loader/patch',
      'webpack/hot/only-dev-server',
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
