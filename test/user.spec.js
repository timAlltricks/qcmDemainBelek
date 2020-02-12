/* eslint-disable handle-callback-err */
/* eslint-env node, mocha */

// Depedencies
const chai = require('chai')
const chaiHttp = require('chai-http')
const Server = require('../app/server.js')

// core
const server = new Server()
server.dbConnect()
server.run()

const app = server.app
const should = chai.should()

chai.use(chaiHttp)

let userCreate

/**
 * GET /user
 */
describe('/user', () => {
  it('GET /create should 404 error', (done) => {
    const result = '{"code":404,"message":"Not found in API"}'

    chai.request(app)
      .get('/user/notexist')
      .end((err, res) => {
        res.should.have.status(404)

        JSON.stringify(JSON.parse(res.text)).should.be.eql(result)

        done()
      })
  })

  it('POST /create should create an user', (done) => {
    const result = '{"image_profil":"https://placehold.it/64x64","email":"timmy@gmail.com","password":"123456789"}'
    const payload = { 'email': 'timmy@gmail.com', 'password': '123456789' }

    chai.request(app)
      .post('/user/create')
      .send(payload)
      .end((err, res) => {
        res.should.have.status(200)

        const response = JSON.parse(res.text)

        userCreate = Object.assign({}, response)

        delete response.id

        JSON.stringify(response).should.be.eql(result)

        done()
      })
  })

  it('PUT /update/:id should update an user', (done) => {
    const result = '{"image_profil":"https://placehold.it/64x64","email":"elchapito@gmail.com","password":"oulalaah"}'
    const payload = { 'email': 'elchapito@gmail.com', 'password': 'oulalaah' }

    chai.request(app)
      .put(`/user/update/${userCreate.id}`)
      .send(payload)
      .end((err, res) => {
        res.should.have.status(200)

        const response = JSON.parse(res.text)

        userCreate = Object.assign({}, response)

        delete response.id

        JSON.stringify(response).should.be.eql(result)

        done()
      })
  })

  it('PUT /update/:id should 500 error', (done) => {
    // const result = '{"image_profil":"https://placehold.it/64x64","email":"elchapito@gmail.com","password":"oulalaah"}'
    const payload = { 'email': 'elchapito@gmail.com', 'password': 'oulalaah', 'nimp': 'blabla' }

    chai.request(app)
      .put(`/user/update/${userCreate.id}`)
      .send(payload)
      .end((err, res) => {
        res.should.have.status(400)

        /* const response = JSON.parse(res.text)

        JSON.stringify(response).should.be.eql(result) */

        done()
      })
  })

  it('DELETE /delete/:id should delete an user', (done) => {
    const result = '{"image_profil":"https://placehold.it/64x64","email":"elchapito@gmail.com","password":"oulalaah"}'

    chai.request(app)
      .delete(`/user/delete/${userCreate.id}`)
      .end((err, res) => {
        res.should.have.status(200)

        const response = JSON.parse(res.text)

        userCreate = Object.assign({}, response)

        delete response.id

        JSON.stringify(response).should.be.eql(result)

        done()
      })
  })
})
