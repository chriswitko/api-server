/*
  Middlewares / Bearer
  Simple auth layer to varify request using Bearer authentication
*/

'use strict'

const status = require('http-status')

module.exports = async (config, req, res, next) => {
  const debug = require('../utils/debugger')(config)

  debug.log('Validating Bearer token')

  req.token = false

  if (req.headers && req.headers.authorization) {
    const parts = req.headers.authorization.split(' ')
    if (parts.length === 2 && parts[0] === 'Bearer') {
      const token = parts[1]
      if (token === config.token) {
        req.token = token
        return next()
      }
    }
  }

  return res.status(status.NOT_IMPLEMENTED).json({
    code: status.NOT_IMPLEMENTED
  })
}
