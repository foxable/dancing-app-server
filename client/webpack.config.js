const path = require('path');

module.exports = {
    mode: "production",
    context: path.resolve(__dirname),
    entry: {
        "app": "./out/index.js"
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        }]
    },
    output: {
        path: path.resolve(__dirname, "public", "js"),
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