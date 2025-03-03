import HtmlWebpackPlugin from 'html-webpack-plugin';
import { ModuleFederationPlugin } from '@module-federation/enhanced/webpack';

export default {
    entry: './src/index.js',
    mode: 'development',
    devServer: {
        port: 3001,
    },
    output: {
        publicPath: 'http://localhost:3001/',
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
            name: 'mfe_header',
            filename: 'remoteEntry.js',
            exposes: {
                './Header': './src/components/Header.jsx',
            },
            shared: {
                react: {
                    singleton: true,
                    eager: true,
                    requiredVersion: '^18.2.0',
                },
                'react-dom': {
                    singleton: true,
                    eager: true,
                    requiredVersion: '^18.2.0',
                },
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
