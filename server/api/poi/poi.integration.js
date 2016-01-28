'use strict';

var app = require('../..');
import request from 'supertest';

var newPoi;

describe('Poi API:', function() {

  describe('GET /api/poi', function() {
    var pois;

    beforeEach(function(done) {
      request(app)
        .get('/api/poi')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          pois = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      pois.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/poi', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/poi')
        .send({
          name: 'New Poi',
          info: 'This is the brand new poi!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newPoi = res.body;
          done();
        });
    });

    it('should respond with the newly created poi', function() {
      newPoi.name.should.equal('New Poi');
      newPoi.info.should.equal('This is the brand new poi!!!');
    });

  });

  describe('GET /api/poi/:id', function() {
    var poi;

    beforeEach(function(done) {
      request(app)
        .get('/api/poi/' + newPoi._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          poi = res.body;
          done();
        });
    });

    afterEach(function() {
      poi = {};
    });

    it('should respond with the requested poi', function() {
      poi.name.should.equal('New Poi');
      poi.info.should.equal('This is the brand new poi!!!');
    });

  });

  describe('PUT /api/poi/:id', function() {
    var updatedPoi;

    beforeEach(function(done) {
      request(app)
        .put('/api/poi/' + newPoi._id)
        .send({
          name: 'Updated Poi',
          info: 'This is the updated poi!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedPoi = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedPoi = {};
    });

    it('should respond with the updated poi', function() {
      updatedPoi.name.should.equal('Updated Poi');
      updatedPoi.info.should.equal('This is the updated poi!!!');
    });

  });

  describe('DELETE /api/poi/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/poi/' + newPoi._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when poi does not exist', function(done) {
      request(app)
        .delete('/api/poi/' + newPoi._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
