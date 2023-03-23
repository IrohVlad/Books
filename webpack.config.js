import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

export default {
    entry: ["@babel/polyfill", './src/index.tsx'],
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(path.resolve(), 'dist')
    },
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        port: 3000
    },
    module: {
        rules: [{
            test: /\.(css|scss|sass)$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
            test: /\.(png|jpeg|jpg|svg|ico)$/,
            use: ['file-loader']
        },
        {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env', "@babel/preset-react", "@babel/preset-typescript"]
              }
            }
        }]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx']
    },
    
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new CleanWebpackPlugin()
    ]
}