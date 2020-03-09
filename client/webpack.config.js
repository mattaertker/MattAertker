const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: [
    'babel-polyfill',
    './src/entry.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  module: {

    rules: [
      {
		  test: /\.(js|jsx)/, use: 
		  {'loader': 'babel-loader',
		  	options: 	{
		    	"presets": ["@babel/preset-react"]
		  	},
		  },
        include: path.join(__dirname, 'src'),
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|jpg|gif|svg)$/, use: {
          loader: 'file-loader',
        options: { name: 'images/[name]-[hash:8].[ext]' }}
      }
    ]
  }
};
