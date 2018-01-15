/* eslint-env mocha */
const assert = require('assert')
const config = require('../config')
const postsController = require('../controllers/posts')(config)

describe('Posts Controller', () => {
  it('can return thirty random posts', async () => {
    const posts = await postsController.get()
    assert.ok(posts.length === 30)
  })
})
