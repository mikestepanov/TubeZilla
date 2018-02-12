//Mocha tests

// process.env.NODE_ENV = 'test';

const chai = require('chai');
const request = require('supertest');
const should = chai.should();
// const chaiHttp = require('chai-http');
// chai.use(chaiHttp);
const server = require('../server/index.js');
const serverURL = 'http://localhost:3000';
const agent = request.agent(server);

  before(function (done) {
    server.on('started', () => {
      done();
    });
  });
