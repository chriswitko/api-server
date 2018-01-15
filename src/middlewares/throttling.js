/*
  Middlewares / Throttling
  Simple request throttling interface - just for demo
*/

'use strict'

module.exports = async (config, req, res, next) => {
  const debug = require('../utils/debugger')(config)

  const ip = req.ip || req.headers['X-Forwarded-For'] || req.connection.remoteAddress
  debug.log(`Verifing requests throttling limits for ${ip}`)

  const max = 15 // per second
  const limit = 1 // current number of requests

  if (limit <= max) {
    return next()
  }

  next(new Error('You exceeded available quota for requests'))
}
