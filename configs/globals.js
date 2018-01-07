const { DEBUG, NODE_ENV } = process.env;

export const __ENV__ = JSON.stringify(NODE_ENV || 'development');
export const __BROWSER__ = JSON.stringify(false);
export const __DEBUG__ = JSON.stringify(Boolean(DEBUG));
export const __DEV__ = JSON.stringify(__ENV__ === 'development');
