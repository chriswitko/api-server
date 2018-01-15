/*
  Route: Collection
  Handle only GET method for collections endpoint
*/
'use strict'

const status = require('http-status')

module.exports = (router, config) => {
  const postsController = require('../controllers/posts')(config)
  const usersController = require('../controllers/users')(config)
  const albumsController = require('../controllers/albums')(config)

  router.get('/collection', async (req, res, next) => {
    try {
      // We are using async/await to wait fo all requests and print results on the end
      // This place is convinient place to merge data from different contollers
      const posts = await postsController.get()
      const users = await usersController.get()
      const albums = await albumsController.get()

      return res.status(status.OK).json({
        post: posts,
        user: users,
        album: albums
      })
    } catch (err) {
      next(err)
    }
  })
}
