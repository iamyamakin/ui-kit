import path from 'path';
import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { Viewport } from './ui-helpers';
import PATHS from '../configs/paths';

const requireFiles = require.context('../src/components/', true, /\.stories\.js$/);
const loadStories = () => {
    requireFiles.keys().forEach(filename => requireFiles(filename));
};

addDecorator(Viewport)

setOptions({
    name: 'UI-KIT',
    url: '',
    goFullScreen: false,
    showStoriesPanel: true,
    showAddonPanel: true,
    showSearchBox: false,
    addonPanelInRight: true,
    sortStoriesByKind: false,
});

configure(loadStories, module);
