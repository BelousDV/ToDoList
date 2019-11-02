let path = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports  = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options:{ sourceMap:true}
                    }, {
                        loader: 'postcss-loader',
                        options:{ sourceMap:true, config: {path: 'src/postcss.config.js'}}
                    },{
                        loader: 'sass-loader',
                        options:{ sourceMap:true}
                    }
                ]
            },{
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options:{ sourceMap:true}
                    }, {
                        loader: 'postcss-loader',
                        options:{ sourceMap:true, config: {path: 'src/postcss.config.js'}}
                    }
                ]
            }
        ]

    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: 'main.css'
        })
      ],

};

