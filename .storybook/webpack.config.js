// storybook doesn't allow us to use a webpack.config.babel.js
require('babel-register');
module.exports = require('../configs/webpack/storybook.babel.js');
