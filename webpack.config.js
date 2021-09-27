const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, { mode }) => {
    const isProd = mode === 'production';
    const filename = (ext) => (isProd ? `[name].[contenthash].${ext}` : `[name].${ext}`);
    return {
        context: path.resolve(__dirname, './'),
        mode: 'development',
        entry: './src/index.tsx',
        output: {
            filename: `${filename('js')}`,
            path: path.resolve(__dirname, 'build'),
            publicPath: '',
        },
        devServer: {
            contentBase: path.resolve(__dirname, 'build'),
            historyApiFallback: true,
            open: true,
            compress: true,
            hot: true,
            port: 3000,
        },
        plugins: [
            new HTMLWebpackPlugin({ template: './src/public/index.html' }),
            new MiniCssExtractPlugin({
                filename: `${filename('css')}`,
            }),
            new CleanWebpackPlugin(),
        ],
        module: {
            rules: [
                {
                    test: /\.(js|jsx|ts|tsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env'],
                                ['@babel/preset-typescript', { allowNamespaces: true }],
                            ],
                        },
                    },
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
                },
                {
                    test: /\.(?:|gif|png|jpg|jpeg|svg)$/i,
                    loader: 'file-loader',
                    options: {
                        name: `assets/${filename('[ext]')}`,
                    },
                },
            ],
        },
        resolve: {
            extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
        },
    };
};
