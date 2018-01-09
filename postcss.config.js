const path = require('path');
const webpackPostcssTools = require('webpack-postcss-tools');

const cssMap = webpackPostcssTools.makeVarMap('./src/variables/index.css');

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
