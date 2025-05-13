const path = require('path')

module.exports = {
    output: {
        filename: "[name].bundle.js", //nom du fichier bundle,
        path: path.resolve(__dirname, "..", "dist"),
        clean: true
    },
    module: {

        rules: [
            {
                test: /\.(jpe?g|png|webp|gif)$/,
                type: 'asset/resource'
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.(s[ac]ss)$/,
                //  test: /\.(scss|sass)$/
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
}