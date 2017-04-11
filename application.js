#!/usr/bin/env node
/* eslint import/no-extraneous-dependencies:0 */

// Enable ES6 import/export syntax on all server files but this one
require('babel-core/register');

require('./server');
