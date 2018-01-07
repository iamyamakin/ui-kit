import PATHS from '../../paths';

const svg = {
    test: /\.svg$/,
    include: [PATHS.src],
    exclude: /node_modules/,
    use: [
        {
            loader: 'svg-sprite-loader',
            options: {
                symbolId: 'icon_[hash:8]',
                extract: true,
                spriteFilename: 'sprite.[hash:8].svg',
            },
        },
        {
            loader: 'svgo-loader',
            options: {
                plugins: [
                    { removeTitle: true },
                    { convertColors: { shorthex: false } },
                    { convertPathData: false },
                ],
            },
        },
    ],
};

export default svg;
