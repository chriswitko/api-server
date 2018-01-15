'use strict'

// loads the required configuration file based on NODE_ENV
const config = require(`./${process.env.NODE_ENV || 'development'}.js`)

module.exports = config
