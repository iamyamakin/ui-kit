const path = require('path');
const webpackPostcssTools = require('webpack-postcss-tools');
const PATHS = require('./configs/paths');

const cssMap = webpackPostcssTools.makeVarMap(path.join(PATHS.src, 'variables/index.css'));

module.exports = {
    plugins: {
        'postcss-import': {},
        'postcss-custom-properties': {
            variables: cssMap.vars,
        },
        'postcss-nested': {},
        'autoprefixer': {},
    },
};
