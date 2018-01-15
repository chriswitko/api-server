/* eslint-env mocha */
const assert = require('assert')
const config = require('../config')
const usersController = require('../controllers/users')(config)

describe('Users Controller', () => {
  it('can return a random number of users', async () => {
    const posts = await usersController.get()
    assert.ok(posts.length > 0)
  })
})
