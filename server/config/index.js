import path from 'path';

const normalizePort = (val) => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
};

export const isProd = process.env.NODE_ENV === 'production';
export const isTest = process.env.NODE_ENV === 'test';

export const SERVER_PORT = normalizePort(process.env.PORT || '3000');

const ROOT = '../';
export const PUBLIC_PATH = path.join(__dirname, ROOT, 'public');
export const BUNDLE_PATH = '/dist/bundle.js';
export const VIEWS_PATH = path.join(__dirname, ROOT, 'views');
