'use strict';

describe('Service: obomSplinter', function () {

  // load the service's module
  beforeEach(module('obmApp'));

  // instantiate service
  var obomSplinter;
  beforeEach(inject(function (_obomSplinter_) {
    obomSplinter = _obomSplinter_;
  }));

  it('should do something', function () {
    expect(!!obomSplinter).toBe(true);
  });

});
