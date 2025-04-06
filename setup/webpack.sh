#!/bin/bash

npm i webpack --save-dev
npm i webpack-cli --save-dev
npm i webpack-dev-server ---save-dev
# Webpack est un bundler, il me permettra d'optimiser
# les performances de mon application
# Ensuite j'ai besoinque Webpack férer des extensions
npm i -D sass sass-loader css-loader style-loader
npm i -D typescript ts-loader
# Maintenant que webpack sait quoi faire des extensions 
# Je veux lui donner des facultés supplémentaire
# Je veux qu'il utilise mon index.html comme template
# et donc j'installer le plugin ci-dessous 
npm i -D html-webpack-plugin 
# Je veux qu'il conserver certaines structures de mon 
# archin logicielle donc j'installe le copy plugin
npm i -D copy-webpack-plugin
