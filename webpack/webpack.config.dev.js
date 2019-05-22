/* eslint-disable */
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 将 css 单独打包成文件

module.exports = {
  mode: 'development',
  entry: {
    vendors: ['react', 'react-dom', 'redux-saga'],
    app: './src/index.tsx',
  },
  devtool: 'cheap-module-eval-source-maps', // 开启调试
  output: {
    publicPath : '/',
    filename: '[name].bundle.js', // 代码打包后的文件名
    chunkFilename: '[name].js', // 代码拆分后的文件名
    path: path.resolve(__dirname, '..', 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        exclude: /node_modules/,
        include: [path.resolve(__dirname, '..', 'src')], // 指定检查的目录
        options: {
          // 这里的配置项参数将会被传递到 eslint 的 CLIEngine
          formatter: require('eslint-friendly-formatter'), // 指定错误报告的格式规范
          fix: true,
        },
      },
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('ts-loader'),
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.(less|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          {
            loader: require.resolve('less-loader'),
            options: {
              javascriptEnabled: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '..', 'src'),
      '@utils': path.resolve(__dirname, '..', 'src/utils'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        react: {
          name: 'react',
          test: /[\\/]node_modules[\\/]lodash[\\/]/,
          minChunks: 1, // 最小公用次数
          priority: 5, // 优先级要大于 vendors 不然会被打包进 vendors
        },
        reactDom: {
          name: 'react-dom',
          test: /[\\/]node_modules[\\/]lodash[\\/]/,
          minChunks: 1, // 最小公用次数
          priority: 5, // 优先级要大于 vendors 不然会被打包进 vendors
        },
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
        },
        common: {
          name: 'common',
          minSize: 1,
          priority: 0,
        },
      },
    },
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // 打包输出HTML
      title: '自动生成 HTML',
      minify: {
        // 压缩 HTML 文件
        removeComments: true, // 移除 HTML 中的注释
        collapseWhitespace: true, // 删除空白符与换行符
        minifyCSS: true, // 压缩内联 css
      },
      filename: 'index.html', // 生成后的文件名
      template: path.join(__dirname, '..', 'public/index.html'), // 根据此模版生成 HTML 文件
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8000, // 本地服务器端口号
    hot: true, // 热重载
    overlay: true, // 如果代码出错，会在浏览器页面弹出“浮动层”。类似于 vue-cli 等脚手架
    proxy: {
      // 跨域代理转发
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        logLevel: 'debug',
        headers: {
          Cookie: '',
        },
      },
    },
    historyApiFallback: true,
  },
};
