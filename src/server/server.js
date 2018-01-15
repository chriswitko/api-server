const express = require('express')
const compression = require('compression')
const router = express.Router()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')

const errors = require('../api/errors')
const api = require('../api')
const posts = require('../api/posts')
const collections = require('../api/collections')

const shouldCompress = (req, res) => {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false
  }

  // fallback to standard filter function
  return compression.filter(req, res)
}

const start = (config) => {
  return new Promise((resolve, reject) => {
    // validating config if the variable port is set
    if (!config.port) {
      return reject(new Error('The server must be started with an available port'))
    }

    const server = express()

    // support for cors
    server.use(cors())

    // enable default compression
    server.use(compression({filter: shouldCompress}))
    server.use(cookieParser())

    // parse the body section of a request
    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({ extended: true }))

    // when running app behind a proxy
    // the value of req.hostname is derived from the value set in the X-Forwarded-Host header, which can be set by the client or by the proxy
    // the req.ip and req.ips values are populated with the list of addresses from X-Forwarded-For.
    server.set('trust proxy', true)

    // enable logging in dev mode
    if (server.get('env') === 'development') {
      server.use(morgan('dev'))
    }
    server.use(helmet())

    // load all available routes, routes are split into separate config to easily manage the code
    api(router, config)
    posts(router, config)
    collections(router, config)
    errors(router, config)

    // set the prefix for all routes (config.prefix)
    server.use(config.prefix, router)

    // handle all uncaught errors
    server.use((err, req, res, next) => {
      const message = {
        code: 500,
        message: `Something went wrong! (${err})`
      }
      reject(message)
      res.status(500).json(message)
    })

    // return instance of ready-to-use server
    server.listen(config.port, () => resolve(server))
  })
}

module.exports = Object.assign({}, {start})
