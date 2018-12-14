const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    app: path.join(__dirname, '/src/index.tsx')
  },
  output: {
    filename: '[name].[hash].js',
		path: path.join(__dirname, '/dist'),
		publicPath: '/'
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
				title:'react typescript',
				filename: 'index.html',
				template: 'index.html'
		}),
    new CleanWebpackPlugin([path.join(__dirname, 'dist')])
  ],
  devServer: {
    open: true,
		overlay: {
			warnings: true,
			errors: true
		}
  }
};
