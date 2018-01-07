import merge from 'webpack-merge';
import plugins from './plugins';
import commonConfig from './common.babel.js';

const prod = merge(commonConfig, {
    output: {
        filename: '[name].[hash:8].js',
    },
    plugins: [
        plugins.uglify,
    ],
});

export default prod;
