const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'src/index.ts'),
    output: {
        path: path.resolve(__dirname, 'package'),
        filename: `test.bundle.js`
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ],
    },
    target: 'node',
    mode: 'production',
    node: {
        __dirname: false,
    }
}