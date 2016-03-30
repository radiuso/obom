'use strict';

describe('Service: obomProposalDistance', function () {

  // load the service's module
  beforeEach(module('obmApp'));

  // instantiate service
  var obomProposalDistance;
  beforeEach(inject(function (_obomProposalDistance_) {
    obomProposalDistance = _obomProposalDistance_;
  }));

  it('should do something', function () {
    expect(!!obomProposalDistance).toBe(true);
  });

});
