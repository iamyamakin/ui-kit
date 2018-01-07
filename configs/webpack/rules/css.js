import ExtractTextPlugin from 'extract-text-webpack-plugin';
import PATHS from '../../paths';
import { __DEV__ } from '../../globals';

const devOptions = {
    localIdentName: '[name]__[local]--[hash:base64:8]',
};
const prodOptions = {
    minimize: true,
    localIdentName: '[hash:base64:8]',
};
const envOptions = __DEV__ ? devOptions : prodOptions;
const css = {
    test: /\.module\.css$/,
    include: [PATHS.src],
    exclude: /node_modules/,
    use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
            {
                loader: 'css-loader',
                options: {
                    modules: true,
                    camelCase: 'dashes',
                    importLoaders: 1,
                    ...envOptions,
                },
            },
            'postcss-loader',
        ],
    }),
};

export default css;
