require('es5-shim');
require('es5-shim/es5-sham');
require('babel-polyfill')
require('console-polyfill');

// 环境变量配置，dev / online
var WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev';

// module: {
//     rules: [
//         // exclude 排除，不需要编译的目录，提高编译速度
//         {
//             test: /\.js$/,
//             use: 'babel-loader',
//             exclude: '/node_modules/',
//             loader: 'babel-loader',
//             query: {
//                 presets: ['es2015']
//             }
//         }
//     ]
// }

// webpack config
var config = {
    /*
    * 【新增】：新增mode参数，webpack4中要指定模式，可以放在配置文件这里，也可以放在启动命令里，如--mode production
    */
    mode : 'dev' === WEBPACK_ENV ? 'development' : 'production',
    /*
    * 【改动】：删除了入口文件的中括号，可选的改动，没什么影响
    */
    entry: {
        'index'             : './src/index.js',
    },
    output: {
        /*
        * 【改动】：删除path的配置，在webpack4中文件默认生成的位置就是/dist,
        *  而publicPath和filename特性的设置要保留
        */
        // path        : __dirname + '/dist/',
        publicPath  :  '/dist/',
        filename    : '[name].js'
    },
    externals : {
        'jquery' : 'window.jQuery'
    },
    module: {
        /*
        * 【改动】：loader的使用中，loaders字段变为rules，用来放各种文件的加载器，用rules确实更为贴切
        */
        rules: [
        ]
    }
};


// "scripts": {
//     "dev": "webpack --mode development --watch",
//         "build": "webpack --mode production"
// },
module.exports = config;
