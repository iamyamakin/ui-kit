import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { __DEV__ } from '../../globals';

const devOptions = {
    filename: '[name].css',
};
const prodOptions = {
    filename: '[name].[contenthash:8].css',
};
const envOptions = __DEV__ ? devOptions : prodOptions;
const css = new ExtractTextPlugin(envOptions);

export default css;
