/* eslint-env mocha */
const assert = require('assert')
const config = require('../config')

describe('Server', () => {
  it('should require a port to start', async () => {
    assert.ok(config.port)
  })
})
