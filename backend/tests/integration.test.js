const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');
const server = require('../src/api/app');

chai.use(chaiHttp);
const { expect } = chai;

const DBServer = new MongoMemoryServer();

  before(async () => {
    const URLMock = await DBServer.getUri();
    const OPTIONS = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    const connectionMock = await MongoClient.connect(URLMock, OPTIONS);

    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

describe('Testa as requisições', () => {
  describe('Se criar um usuário', () => {
    let response;
    before(async () => {
      response = await chai.request(server)
        .post('/users/create')
        .send({
          username: 'Joaquim',
          email: 'joaquim@email.com',
          password: '12345678'
        });
    })

    it('retorna status 201', () => {
      expect(response).to.have.status(201);
    });

    it('usuário é um objeto', () => {
      expect(response).to.be.an('object');
    });

    it('não retorna erro', () => {
      expect(response).not.to.have.status(400);
    });
  });
});

describe('Se loga o usuário', () => {
  let response;
  before(async () => {
    response = await chai.request(server)
      .post('/login')
      .send({
        email: 'joaquim@email.com',
        password: '12345678'
      });
    console.log(response)

  })

  it('retorna status 200', () => {
    expect(response).to.have.status(200);
  });

  it('retorna um token', () => {
    expect(response.body).to.haveOwnProperty('token');
  });

  it('não retorna erro', () => {
    expect(response).not.to.have.status(401);
  });
});