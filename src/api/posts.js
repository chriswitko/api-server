/*
  Route: Posts
  Handle all CRUD routes for posts endpoint
*/
'use strict'

const status = require('http-status')

module.exports = (router, config) => {
  const postsController = require('../controllers/posts')(config)

  router.get('/posts', (req, res, next) => {
    const { page, limit } = req.query

    // Always check for cache if enabled
    if (req.cachedResponse) {
      return res.status(status.OK).json(req.cachedResponse)
    }

    // Get max 30 random records
    postsController.get({}, {page, limit})
      .then(data => {
        return res.status(status.OK).json(data)
      }).catch(err => {
        next(err)
      })
  })

  router.get('/posts/:id', (req, res, next) => {
    const { id } = req.params

    // Always check for cache if enabled
    if (req.cachedResponse) {
      return res.status(status.OK).json(req.cachedResponse)
    }

    postsController.getOne(id)
      .then(data => {
        return res.status(status.OK).json(data)
      }).catch(err => {
        next(err)
      })
  })

  router.post('/posts', (req, res, next) => {
    // We can add validation here before we process to controller
    const { title, body, userId } = req.body

    postsController.create({
      title,
      body,
      userId
    })
    .then(data => {
      return res.status(status.OK).json({
        code: status.OK
      })
    }).catch(err => {
      next(err)
    })
  })

  router.put('/posts/:id', (req, res, next) => {
    // We can add validation here before we process to controller
    const { id } = req.params
    const { title, body, userId } = req.body

    postsController.update(id, {
      title,
      body,
      userId
    })
    .then(data => {
      return res.status(status.OK).json({
        code: status.OK
      })
    }).catch(err => {
      next(err)
    })
  })

  router.delete('/posts/:id', (req, res, next) => {
    const { id } = req.params

    postsController.remove(id)
      .then(data => {
        return res.status(status.OK).json({
          code: status.OK
        })
      }).catch(err => {
        next(err)
      })
  })
}
