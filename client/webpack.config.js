const path = require("path");

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname),
    entry: './dist/index.js',
    module: {
        rules: []
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
        publicPath: '.'
    }
};