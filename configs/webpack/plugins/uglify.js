import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

const uglify = new UglifyJsPlugin({
    uglifyOptions: {
        compress: {
            drop_console: true,
        },
    },
});

export default uglify;
