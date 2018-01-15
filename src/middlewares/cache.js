/*
  Middlewares / Cache
  Simple cache layer - just for demo
*/

'use strict'

module.exports = async (config, req, res, next) => {
  const debug = require('../utils/debugger')(config)

  if (config.cacheStore) {
    const store = config.cacheStore(config)
    debug.log('Initializing cache store')

    const key = `${req.method}:${req.originalUrl}`
    const val = await store.get(key)

    if (val) {
      debug.log(`Cached response for ${key}: ${val}`)
      req.cachedResponse = val
    }
  }
  next()
}
