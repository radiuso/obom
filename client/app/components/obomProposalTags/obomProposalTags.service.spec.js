'use strict';

describe('Service: obomProposalTags', function () {

  // load the service's module
  beforeEach(module('obmApp'));

  // instantiate service
  var obomProposalTags;
  beforeEach(inject(function (_obomProposalTags_) {
    obomProposalTags = _obomProposalTags_;
  }));

  it('should do something', function () {
    expect(!!obomProposalTags).toBe(true);
  });

});
