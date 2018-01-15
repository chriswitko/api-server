/*
  Handle all errors generated on the router level
*/
'use strict'

const status = require('http-status')

module.exports = (router, config) => {
  const debug = require('../utils/debugger')(config)

  // Handle error like missing route (404)
  router.use('*', (req, res, next) => {
    debug.log('Endpoint does not exists')

    res.status(status.NOT_FOUND).json({
      code: status.NOT_FOUND,
      message: 'Endpoint does not exists'
    })
  })
}
