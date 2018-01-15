const config = {
  debug: true,
  dataSourceURL: 'http://jsonplaceholder.typicode.com',
  prefix: '/api',
  port: process.env.PORT || 3000,
  token: 'af24353tdsfw'
  // cacheStore: require('../middlewares/stores/memory.js')
}

module.exports = config
