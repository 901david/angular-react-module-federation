const { merge } = require('webpack-merge')
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const devConfig = {
    mode: 'development',
    target: 'web',
    entry: path.resolve(__dirname,
        'src', 'index.js'),
    devServer: {
        port: 3001,
        historyApiFallback: true,
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
            },

        ]
    },
    plugins: [new ModuleFederationPlugin({
        name:
            'pendant_components',
        filename: 'remoteEntry.js',
        exposes: {
            './Button': './src/components/Button/index.js',
            './Button': './src/utilities/ComponentMounter.js',
        }
    }), new HtmlWebpackPlugin({})]
}


module.exports = devConfig