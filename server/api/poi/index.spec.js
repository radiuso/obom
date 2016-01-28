'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var poiCtrlStub = {
  index: 'poiCtrl.index',
  show: 'poiCtrl.show',
  create: 'poiCtrl.create',
  update: 'poiCtrl.update',
  destroy: 'poiCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var poiIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './poi.controller': poiCtrlStub
});

describe('Poi API Router:', function() {

  it('should return an express router instance', function() {
    poiIndex.should.equal(routerStub);
  });

  describe('GET /api/poi', function() {

    it('should route to poi.controller.index', function() {
      routerStub.get
        .withArgs('/', 'poiCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/poi/:id', function() {

    it('should route to poi.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'poiCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/poi', function() {

    it('should route to poi.controller.create', function() {
      routerStub.post
        .withArgs('/', 'poiCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/poi/:id', function() {

    it('should route to poi.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'poiCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/poi/:id', function() {

    it('should route to poi.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'poiCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/poi/:id', function() {

    it('should route to poi.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'poiCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
