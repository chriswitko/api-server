/* eslint-env mocha */
process.env.NODE_ENV = 'mocha'

const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()
const server = require('../server/server')
const config = require('../config')

chai.use(chaiHttp)

let app = null

beforeEach(async () => {
  try {
    if (!app) {
      app = await server.start(config)
    }
  } catch (e) {
    app = null
  }
})

describe('Fetch data using http protocol', () => {
  it('should report status 501 when bearer token is missing', (done) => {
    chai.request(app)
      .get('/api/posts')
      .end((_, res) => {
        res.should.have.status(501)
        done()
      })
  })

  it('should return posts', (done) => {
    chai.request(app)
      .get('/api/posts')
      .set('Authorization', 'Bearer af24353tdsfw')
      .end((_, res) => {
        res.should.have.status(200)
        res.body.should.be.a('array')
        done()
      })
  })

  it('should return collection with three keys post, user, album', (done) => {
    chai.request(app)
      .get('/api/collection')
      .set('Authorization', 'Bearer af24353tdsfw')
      .end((_, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.should.have.property('post')
        res.body.should.have.property('user')
        res.body.should.have.property('album')
        done()
      })
  })

  it('should return posts', (done) => {
    chai.request(app)
      .get('/api/posts')
      .set('Authorization', 'Bearer af24353tdsfw')
      .end((_, res) => {
        res.should.have.status(200)
        res.body.should.be.a('array')
        done()
      })
  })
})
