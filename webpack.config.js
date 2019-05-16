const path = require('path');

module.exports = {
    entry: './assets/js/main.js',
    output: {
        filename: './bundle.js'
    },
    devtool: 'eval-source-map',
    resolve: {
        extensions: [".js", "*"]
    }
};