#!/usr/bin/env node

// Enable ES6 import/export syntax on all server files but this one
require('babel-core/register');

require('./server');
