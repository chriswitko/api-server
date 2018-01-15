/* eslint-env mocha */
const assert = require('assert')
const config = require('../config')
const albumsController = require('../controllers/albums')(config)

describe('Albums Controller', () => {
  it('can return thirty random albums', async () => {
    const posts = await albumsController.get()
    assert.ok(posts.length === 30)
  })
})
