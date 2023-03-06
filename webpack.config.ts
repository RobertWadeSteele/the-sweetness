const path = require('path')
const nodeExternals = require('webpack-node-externals')

// module.exports
const clientConfig = (env: any, argv: any) => {
    return {
        entry: './client/index.tsx',
        mode: env.NODE_ENV,
        output: {
            filename: 'bundle.js',
            path: path.join(__dirname, 'public')
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js|\.jsx|\.ts|\.tsx$/,
                exclude: /node-modules/
            }]
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        }
    }
}

const serverConfig = (env: any, argv: any) => {
    return {
        entry: './server/index.tsx',
        mode: env.NODE_ENV,
        output: {
            filename: 'index.js',
            path: path.join(__dirname, 'dist')
        },
        target: 'node',
        externals: [nodeExternals()],
        node: {
            __dirname: false,
        },
        module: {
            rules: [{
                test: /\.ts(x?)$/,
                use: [
                    {
                        loader: 'babel-loader'
                    },
                    { loader: 'ts-loader' }
                ],
                exclude: /node-modules/
            },{
                test: /\.js(x?)$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }]
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        },
    }
}

module.exports = [serverConfig, clientConfig]