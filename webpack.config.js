const path = require('path');

module.exports = {
    entry: './dist/index.js',
    mode: 'production',
    output: {
        filename: 'circular-stack.min.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'CircularStack',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        auxiliaryComment: 'A fixed-size auto-overwriting stack.',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'PLAYGROUND'),
        },
        filename: 'circular-stack.min.js',
            path: path.resolve(__dirname, 'dist'),
            library: 'CircularStack',
        compress: true,
        port: 9000,
    },
};