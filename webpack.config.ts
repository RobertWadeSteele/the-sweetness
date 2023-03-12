const path = require('path')
const nodeExternals = require('webpack-node-externals')

const clientConfig = (env: any, argv: any) => {
    return {
        entry: './client/client.entry.tsx',
        mode: env.NODE_ENV,
        output: {
            filename: 'bundle.js',
            path: path.join(__dirname, 'public'),
            publicPath: path.join(__dirname, 'public')
        },
        module: {
            rules: [{
                test: /\.ts(x?)$/,
                use: [
                    {
                        loader: 'babel-loader'
                    },
                    { 
                        loader: 'ts-loader' 
                    }
                ],
                exclude: /node-modules/
            },{
                test: /\.js(x?)$/,
                use: 'babel-loader',
                exclude: /node-modules/
            }]
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        },
    }
}

const serverConfig = (env: any, argv: any) => {
    return {
        entry: './server/server.entry.tsx',
        mode: env.NODE_ENV,
        output: {
            filename: 'serve.js',
            path: path.join(__dirname, 'dist')
        },
        target: 'node',
        externals: [ nodeExternals() ],
        module: {
            rules: [{
                test: /\.ts(x?)$/,
                use: [
                    {
                        loader: 'babel-loader'
                    },
                    {
                        loader: 'ts-loader'
                    }
                ],
                exclude: /node-modules/
            },{
                test: /\.js(x?)$/,
                use: 'babel-loader',
                exclude: /node-modules/
            }]
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        },
    }
}

module.exports = [serverConfig, clientConfig]
