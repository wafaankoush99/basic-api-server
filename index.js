'use strict';

/* Load Environment Variables from env. */

require('dotenv').config();
const server = require('./src/server');
server.start(process.env.PORT);
