import PATHS from '../../paths';

const script = {
    test: /\.jsx?$/,
    include: [PATHS.src],
    exclude: /node_modules/,
    use: ['babel-loader'],
};

export default script;
