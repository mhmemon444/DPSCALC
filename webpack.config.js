const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: './FRONTEND/DpsCalculator/DpsCalculator.js', // fill in your entry path here
    output: {
        path: path.resolve(__dirname, './FRONTEND/public/react-js-bundles'), //<- do NOT change this
        filename: 'dps-bundle.js', // fill in your filename here
        chunkFilename: '[id].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            // {
            //     test: /\.css$/,
            //     exclude: /node_modules/,
            //     use: [
            //         { loader: 'style-loader' },
            //         { 
            //             loader: 'css-loader',
            //             options: {
            //                 modules: {
            //                     localIdentName: "[name]__[local]___[hash:base64:5]",
            //                 },                                                      
            //                 sourceMap: true
            //             }
            //          },
            //          { 
            //              loader: 'postcss-loader',
            //             //  options: {
            //             //      ident: 'postcss',
            //             //     //  plugins: () => [
            //             //     //      autoprefixer({})
            //             //     //  ]
            //             //  }
            //           }
            //     ]
            // },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
              },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader?limit=10000&name=img/[name].[ext]'
            }
        ]
    },
    watch: true
};