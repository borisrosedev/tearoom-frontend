/* Ceci est un fichier de configuration qui va expliquer à 
Webpack quoi faire des différents fichiers et 
dossiers composant l'application
*/
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')

// dès que vous voyez des 
module.exports = {
    entry: "./main.ts",
    output: {
        filename: "[name].bundle.js", //nom du fichier bundle,
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    mode: "development",
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
                use: ["style-loader","css-loader","sass-loader"]
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "assets", to: "assets"
                }
            ]
        })
    ]

}

// comment écrire l'idée que si jamais un fichier
// se termine par .scss ou .sass il doit ...