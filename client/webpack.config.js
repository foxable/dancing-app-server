const path = require('path');

module.exports = {
    mode: "production",
    context: path.resolve(__dirname),
    entry: {
        "app": "./out/index.js"
    },
    module: {
        rules: []
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
        chunkFilename: "[name].bundle.js"
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            name: "vendors"
        }
    }
};