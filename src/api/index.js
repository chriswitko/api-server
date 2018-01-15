/*
  Simple debug log into console
*/
'use strict'

const status = require('http-status')
const cache = require('../middlewares/cache')
const throttling = require('../middlewares/throttling')
const bearer = require('../middlewares/bearer')

module.exports = (router, config) => {
  const debug = require('../utils/debugger')(config)

  // Simple route to print request time and route url
  router.use((req, res, next) => {
    debug.log('Time', new Date().toUTCString())
    debug.log('Route', req.originalUrl)
    next()
  })

  // The order of the middlewares can be changes, depends what's more important
  // You can easily enable/disable middlewares by uncomment/comment lines below

  // Auth Bearer middleware
  router.use((req, res, next) => bearer(config, req, res, next))

  // Caching interface
  router.use((req, res, next) => cache(config, req, res, next))

  // Throttling interface
  router.use((req, res, next) => throttling(config, req, res, next))

  router.get('/', (req, res, next) => {
    return res.status(status.OK).json({
      code: status.OK
    })
  })
}

