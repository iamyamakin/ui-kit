import path from 'path';

const root = path.resolve(__dirname, '..');
const paths = {
    root,
    src: path.join(root, 'src'),
    dist: path.join(root, 'dist'),
    assets: path.join(root, 'dist/assets')
};

export default paths;
