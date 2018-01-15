/*
  Index.js
  App initialization
*/

'use strict'
const server = require('./server/server')
const config = require('./config/')
// load the debugger module
const debug = require('./utils/debugger')(config)

debug.log('--- Init API Server ---')

// catch all the uncaught expceptions
process.on('uncaughtException', (err) => {
  debug.error('Unhandled Exception', err)
})

// catch all the uncaught rejections
process.on('uncaughtRejection', (err, promise) => {
  debug.error('Unhandled Rejection', err)
})

const connect = async () => {
  let app

  try {
    // initialize the server instance
    app = await server.start(config)

    debug.log(`Server started succesfully, running on port: ${config.port}.`)

    app.on('close', () => {
      debug.log('Server shutdown')
    })
  } catch (err) {
    debug.log(err.message)
  }
}

// start the server
connect()
