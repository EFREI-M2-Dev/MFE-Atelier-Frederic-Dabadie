import HtmlWebpackPlugin from 'html-webpack-plugin';
import { ModuleFederationPlugin } from '@module-federation/enhanced/webpack';

export default {
    entry: './src/index.js',
    mode: 'development',
    devServer: {
        port: 2000,
    },
    output: {
        publicPath: 'http://localhost:2000/',
    },
    cache: false,
    resolve: {
        extensions: ['.jsx', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new ModuleFederationPlugin({
            name: 'shell_app',
            filename: 'remoteEntry.js',
            remotes: {
                'mfe_header': 'mfe_header@http://localhost:3001/remoteEntry.js',
            },
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
};
