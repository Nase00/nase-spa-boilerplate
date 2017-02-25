/* eslint array-callback-return:0 */
import path from 'path';
import { readFileSync } from 'fs';

import validator from '../environment/validation';
import { FileValidationError } from './errors';
import mockEnvironment from '../environment/mock';

const readFile = (fileName) => {
  const filePath = path.join('./environment', fileName);

  return JSON.parse(readFileSync(filePath, 'utf8'));
};

/**
 * Reads and validates user-configured JSON environment files.
 *
 * Testing environments may not have these files set up.
 * Mocked values are returned so that tests do not crash.
 *
 * @returns {object} example
 */
const getEnvironment = () => {
  if (process.env.NODE_ENV === 'test') {
    return mockEnvironment;
  }

  const { example } = readFile('example.json');

  if (validator.validate(example, '/ExampleSchema').errors.length) {
    throw new FileValidationError('example');
  }
  return { example };
};

export const { example } = getEnvironment();
