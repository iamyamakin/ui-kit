import merge from 'webpack-merge';
import commonConfig from './common.babel.js';

const dev = merge(commonConfig, {
    output: {
        filename: '[name].js',
    },
    devtool: 'cheap-module-eval-source-map',
});

export default dev;
