import path from 'path';
import PATHS from '../paths';
import rules from './rules';
import plugins from './plugins';
import resolve from './resolve';

const common = {
    entry: path.join(PATHS.src, 'index.js'),
    output: {
        path: PATHS.dist,
    },
    module: {
        rules: [
            rules.script,
            rules.css,
            rules.svg,
        ],
    },
    plugins: [
        plugins.noErrors,
        plugins.variables,
        plugins.css,
        plugins.svg,
    ],
    resolve,
};

export default common;
