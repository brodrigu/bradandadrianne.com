const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: [
        './src/index',
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([
            { from: 'index.html', to: path.join(__dirname, 'dist') },
            { from: 'static', to: path.join(__dirname, 'dist/static') },
        ]),
        new webpack.DefinePlugin({
            'process.env': {
                BESTOKE_API_ROOT: JSON.stringify(process.env.BESTOKE_API_ROOT),
                BESTOKE_LOGIN_ROOT: JSON.stringify(process.env.BESTOKE_LOGIN_ROOT),
                STRIPE_PUBLIC_KEY: JSON.stringify(process.env.STRIPE_PUBLIC_KEY),
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                include: path.join(__dirname, 'src'),
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ],
            },
        ],
    },
};
