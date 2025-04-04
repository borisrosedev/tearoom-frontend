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
    extends: [
        path.resolve(__dirname, 'webpack', 'base.config.js')
    ],
    resolve: {
        extensions: [".ts", ".js"]
    },
    mode: "development",
   
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