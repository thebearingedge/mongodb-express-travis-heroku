const expect = require('chai').expect
const request = require('request')
const createApp = require('../create-app')

const PORT = process.env.PORT || 3000
const host = 'http://localhost:' + PORT

describe('createApp', () => {

  let server

  before(done => {
    const app = createApp()
    server = app.listen(PORT, done)
  })

  after(() => {
    server.close()
  })

  describe('GET /', () => {

    it('says hello world!', done => {
      request(host, (err, res, body) => {
        expect(err).to.be.null
        expect(res).to.have.property('statusCode', 200)
        expect(body).to.equal('hello world')
        done()
      })

    })

  })

})
