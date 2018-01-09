import PATHS from '../paths';
import rules from './rules';
import plugins from './plugins';
import resolve from './resolve';

const storybook = {};

rules.script.include.push(PATHS.storybook);
rules.css.include.push(PATHS.storybook);
Object.assign(storybook, {
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
});

module.exports = storybook;
