import webpack from 'webpack';
import { __ENV__, __BROWSER__, __DEBUG__, __DEV__ } from '../../globals';

const variables = new webpack.DefinePlugin({
    __ENV__,
    __BROWSER__,
    __DEBUG__,
    __DEV__,
    'process.env.NODE_ENV': __ENV__,
});

export default variables;
